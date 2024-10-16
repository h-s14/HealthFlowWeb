import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Auths from "./Auths";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  return (
    <>
      {/* <div className="from-nav-bar-bg-grad-light-1 via-nav-bar-bg-grad-light-2 to-nav-bar-bg-grad-light-3 dark:from-nav-bar-bg-grad-dark-1 dark:via-nav-bar-bg-grad-dark-2 dark:to-nav-bar-bg-grad-dark-3 fixed left-1/2 top-[20px] z-10 hidden w-[90%] translate-x-[-50%] items-center justify-between gap-16 rounded-full bg-opacity-60 bg-gradient-to-l px-10 py-1 text-nav-bar-text-light shadow-lg backdrop-blur-md dark:bg-nav-bar-bg-dark dark:bg-opacity-60 dark:bg-gradient-to-l dark:text-nav-bar-text-dark md:flex"> */}
      <div className="from-nav-bar-bg-grad-light-1 via-nav-bar-bg-grad-light-2 to-nav-bar-bg-grad-light-3 fixed left-1/2 top-[20px] z-10 hidden w-[90%] translate-x-[-50%] items-center justify-between gap-16 rounded-full bg-opacity-60 bg-gradient-to-l px-10 py-1 text-nav-bar-text-light shadow-lg backdrop-blur-md dark:bg-gray-950 dark:bg-opacity-60 dark:text-nav-bar-text-dark md:flex">
        <Nav />
        <Logo />
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
