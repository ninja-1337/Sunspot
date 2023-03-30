import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0b3bd6] to-[#f8a221]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            About <span className="text-[hsl(280,100%,70%)]">Sun</span> Spot
          </h1>
          <h1 className="text-5xl font-extrabold leading-normal text-white md:text-[5rem]">
            <span className="text-2xl font-bold text-white"></span>
          </h1>

          <p className="text-2xl font-bold text-white">
          Welcome to SunSpot a sunbed booking app for this location, where you can easily find and book your ideal spot for soaking up the sun! Our user-friendly platform allows you to search for sunbeds at our location and check their availability in real-time.
          </p>
          <p className="text-2xl font-bold text-white">
            Thank you for trying out our app. We hope you find it useful and
            convenient to use.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
