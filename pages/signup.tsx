import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Input from "../components/Input";
import Logo from "../components/Logo";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Basic Forum</title>
      </Head>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Container>
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link href="/signin">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                sign in to your existing account
              </a>
            </Link>
          </p>
        </Container>

        <Container className="mt-8">
          <Card>
            <form className="space-y-6" action="#" method="POST">
              <Input label="Username" name="username" />

              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
              />

              <Input
                label="Confirm Password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
              />

              <Button>Sign up</Button>
            </form>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
