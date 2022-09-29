import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session, status } = useSession();
  return (
    <nav className="flex items-center justify-between flex-wrap w-full bg-stone-800 p-3 ">
      <div className="  items-start"></div>
      <div className="flex  item-start "></div>
      {session ? (
        <div>
          <div className="pt-6 text-1xl text-blue-500 flex justify-center items-center">
            {session?.user?.image && (
              <div className="flex items-center ">
                <Image
                  src={session?.user.image}
                  alt=""
                  width={36}
                  height={36}
                  style={{ borderRadius: "50%" }}
                />
                - Signed in as {session.user.name}
              </div>
            )}
          </div>
          <div className=" text-blue-500 flex justify-center items-center ">
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <button onClick={() => signIn("discord")}>
              <SocialIcon network="discord" style={{ height: 25, width: 25 }} />
            </button>

            <button onClick={() => signIn("google")}>
              <SocialIcon network="google" style={{ height: 25, width: 25 }} />
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
