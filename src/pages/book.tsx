/* eslint-disable react/jsx-key */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import TechnologyCard from "../components/TechnologyCard";

import Sunbed from "../components/Sunbed";
import SunbedBooked from "../components/SunbedBooked";
import { ToastContainer, toast } from 'react-toastify';
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
  const handleClick = () => {
    toast('Feature in Development', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  
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
   
        <div className="flex w-full items-center justify-center text-2xl pt text-blue-500">
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
         <div className=" flex  items-center justify-center  pt-2 ">
    <button
        className="rounded-full bg-orange-300 px-10 py-3 font-semibold text-white no-underline transition hover:bg-orange/20"
        onClick={handleClick}
      >
       Pay Now
      </button>
   
       
    
        </div>
      
    </>
  );
};

export default Home;
