import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import MenuComp from "./MenuComp";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">
        <span className="hover:bg-nav-bar-bg-hover-light hover:text-nav-bar-text-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:text-nav-bar-text-hover-dark rounded-full p-1 transition duration-500 hover:bg-opacity-60 hover:p-2 dark:hover:bg-opacity-60">
          Home
        </span>
      </NavLink>
      <NavLink to="/appointment">
        <span className="hover:bg-nav-bar-bg-hover-light hover:text-nav-bar-text-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:text-nav-bar-text-hover-dark rounded-full p-1 transition duration-500 hover:bg-opacity-60 hover:p-2 dark:hover:bg-opacity-60">
          Appointment
        </span>
      </NavLink>
      <NavLink to="/about">
        <span className="hover:bg-nav-bar-bg-hover-light hover:text-nav-bar-text-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:text-nav-bar-text-hover-dark rounded-full p-1 transition duration-500 hover:bg-opacity-60 hover:p-2 dark:hover:bg-opacity-60">
          About Us
        </span>
      </NavLink>
    </>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="text-xl">
        <div className="hidden w-full justify-between gap-8 md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>
            {isOpen ? <X /> : <MenuComp />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
