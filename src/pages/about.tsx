import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import  TechnologyCard  from "../components/TechnologyCard";
import Link from "next/link";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>

      <Head>
        <title>Krevataki</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          About<span className="text-purple-300"> Page</span>
        </h1>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="Instant"
            description="We are a team dedicated to alleviating the heat"
            documentation=""
          />

          <TechnologyCard
              name="Avoid the Heat"
              description="Developed by EasySec Labs"
              documentation="/about"
          />


        </div>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-1 lg:w-2/3">
          <TechnologyCard
              name="Back to Home"
              description=""
              documentation="/"
          />


        </div>

      </main>
    </>
  );
};

export default Home;
