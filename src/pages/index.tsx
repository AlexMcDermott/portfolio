import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex McDermott</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1 className="flex h-screen items-center justify-center bg-red-700">
          Hello World
        </h1>
      </main>
    </>
  );
}
