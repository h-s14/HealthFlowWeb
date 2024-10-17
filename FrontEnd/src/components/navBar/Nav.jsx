import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import MenuComp from "./MenuComp";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">
        <span className="rounded-full p-1 transition duration-500 hover:bg-nav-bar-bg-hover-light hover:bg-opacity-60 hover:p-2 hover:text-nav-bar-link-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark">
          Home
        </span>
      </NavLink>
      <NavLink to="/appointment">
        <span className="rounded-full p-1 transition duration-500 hover:bg-nav-bar-bg-hover-light hover:bg-opacity-60 hover:p-2 hover:text-nav-bar-link-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark">
          Appointment
        </span>
      </NavLink>
      <NavLink to="/about">
        <span className="rounded-full p-1 transition duration-500 hover:bg-nav-bar-bg-hover-light hover:bg-opacity-60 hover:p-2 hover:text-nav-bar-link-hover-light dark:hover:bg-nav-bar-bg-hover-dark dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark">
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
