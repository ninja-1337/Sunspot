import { Menu, Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
function DropDownLogin() {
  const { data: session, status } = useSession();

  return (
    <div className="text-center ">
      <Menu as="div" className="relative inline-block text-center">
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {session?.user?.image && (
            <div className="flex items-center ">
              <Image
                src={session?.user.image}
                alt=""
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
              />
              {session.user.name}
              <button onClick={() => signOut()}>-Logout</button>
            </div>
          )}
          if (!session) {<>Login</>}
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt- justify-center align-middle w-32 origin-center  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <>
                {session ? (
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
                        {session.user.name}
                        <button onClick={() => signOut()}>-Logout</button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div
                      className={`${
                        active &&
                        "bg-amber-200 rounded align-middle justify-center"
                      }`}
                    >
                      <Menu.Item>
                        <button onClick={() => signIn("discord")}>
                          <SocialIcon
                            network="discord"
                            style={{ height: 25, width: 25 }}
                          />
                        </button>
                      </Menu.Item>
                    </div>

                    <div
                      className={`${
                        active &&
                        "bg-amber-200 rounded align-middle justify-center"
                      }`}
                    >
                      <Menu.Item>
                        <button onClick={() => signIn("google")}>
                          <SocialIcon
                            network="google"
                            style={{ height: 25, width: 25 }}
                          />
                        </button>
                      </Menu.Item>
                    </div>
                  </>
                )}
              </>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default DropDownLogin;
