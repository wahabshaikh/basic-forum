import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basic Forum</title>
        <meta
          name="description"
          content="A social platform to share your thoughts (anonymously, if you'd like) 😉"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid place-content-center place-items-center">
        <h1 className="text-5xl font-black">Welcome to Basic Forum!</h1>
        <p className="text-xl font-semibold mt-4">
          A soical platform to share your thoughts (anonymously, if you&apos;d
          like) 😉
        </p>
      </main>
    </>
  );
};

export default Home;
