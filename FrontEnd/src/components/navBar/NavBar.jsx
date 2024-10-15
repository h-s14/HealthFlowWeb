import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Auths from "./Auths";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  return (
    <>
      <div className="bg-nav-bg-light text-nav-bar-text-light dark:bg-nav-bar-bg-dark dark:text-nav-bar-text-dark fixed left-1/2 top-[20px] z-10 hidden w-[90%] translate-x-[-50%] items-center justify-between gap-16 rounded-full bg-opacity-60 px-10 py-1 shadow-lg backdrop-blur-md dark:bg-opacity-60 md:flex">
        <Logo />
        <Nav />
        <Auths />
      </div>
      <div className="fixed right-10 z-10 block pt-5 md:hidden">
        <button>
          <Menu />
        </button>
      </div>
    </>
  );
};

export default NavBar;
