import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import MyDropdown from "../components/DropDown";
import Loginwith from "../components/Login";
import DropDownLogin from "../components/DropDownLogin";

function NavBar() {
  const { data: session, status } = useSession();
  return (
    <nav className="flex items-center justify-between flex-wrap w-full bg-stone-800 p-3 ">
      <div className="  items-start">
        <MyDropdown />
      </div>
      <div className="flex  item-start ">
        <DropDownLogin />
      </div>
    </nav>
  );
}

export default NavBar;
