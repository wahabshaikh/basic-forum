import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Input from "../components/Input";
import Logo from "../components/Logo";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | Basic Forum</title>
      </Head>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Container>
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link href="/signup">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                sign up for a new account
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
                autoComplete="current-password"
              />

              <Button>Sign in</Button>
            </form>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
