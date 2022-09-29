import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
function MyDropdown() {
  return (
    <div className="text-center ">
      <Menu as="div" className="relative inline-block text-center">
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Options
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt- justify-center align-middle w-32 origin-center  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <div>Menu Item</div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default MyDropdown;
