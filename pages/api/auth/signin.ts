import type { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
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

        const user = await prisma.user.findFirst({
          where: { username },
        });

        // Check for invalid username
        const isValidUsername = !!user;
        if (!isValidUsername) {
          res
            .status(403)
            .json({ error: `Username ${username} does not exist.` });
          return;
        }

        // Check for invalid password
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
          res.status(403).json({ error: `Incorrect password.` });
          return;
        }

        // Generate JWT token
        const token = jwt.sign(
          { id: user.id, username },
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
          .json({ id: user.id, username });
      } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: `Error signing in user` });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
