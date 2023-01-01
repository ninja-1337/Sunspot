/* eslint-disable react/jsx-key */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import TechnologyCard from "../components/TechnologyCard";

import Sunbed from "../components/Sunbed";
import SunbedBooked from "../components/SunbedBooked";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const style: any = {
  whiteSpace: "nowrap",

  flexDirection: "row",
  overflow: "scroll",
  minHeight: "100px",
  height: "5vw",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
};

const Home: NextPage = () => {
  const multi = [
    [
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      ,
      false,
      true,
      false,
      ,
      false,
      true,
      false,
    ],
    [false, true, false, true, true, false, true, true, false, true, true],
    [false, true, false, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, false, true, false],
  ];
  const arrayToString = JSON.stringify(Object.assign({}, multi)); // convert a
  const { data: session, status } = useSession();
  console.log(arrayToString);

  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          <p>Book a SunBed</p>
        </div>

        {/*<Image*/}
        {/*    src={sunbedimg}*/}
        {/*    alt="Picture of the author"*/}
        {/*    width={500}*/}
        {/*    height={500}*/}
        {/*/>*/}

        {/*const [cartItems, setCartItems] = useState(40);*/}
        {multi.map((bed) => {
          return (
            <div style={style}>
              {bed.map((x) => {
                if (x) {
                  return <SunbedBooked></SunbedBooked>;
                }
                return <Sunbed></Sunbed>;
              })}
            </div>
          );
        })}

        <div className="mt-2 grid gap-2 pt-2 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="Book Sunbeds"
            description=""
            documentation="/book"
          />
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
