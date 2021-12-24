import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../../lib/prisma";

type Data = { id: string; username: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        if (!process.env.JWT_SECRET) {
          throw new Error(`Please add JWT_SECRET to .env file`);
        }

        const { username, password } = body;

        // Check for existing username
        const user = await prisma.user.findFirst({ where: { username } });
        if (!!user) {
          res
            .status(403)
            .json({ error: `Username ${username} already exists.` });
          return;
        }

        // Encrypt the password
        const encryptedPassword = await hash(password, 10);

        // Store the user in DB
        const newUser = await prisma.user.create({
          data: {
            username,
            password: encryptedPassword,
          },
        });

        // Generate JWT token
        const token = jwt.sign(
          { id: newUser.id, username },
          process.env.JWT_SECRET
        );

        res
          .status(200)
          .setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              path: "/",
            })
          )
          .json({ id: newUser.id, username });
      } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: `Error creating user` });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
