import { Mail, Navigation, Phone } from "lucide-react";
import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-[#E0E0E0]">
        <div
          className={
            "dark:bg-footer-dark bg-footer-light relative flex w-full justify-between rounded-tl-3xl rounded-tr-3xl border-2 border-black border-opacity-20 bg-opacity-40 px-36 pb-4 pt-5 text-black shadow-lg outline-none backdrop-blur-md backdrop-filter dark:bg-opacity-40"
          }
        >
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="block w-20 opacity-60 dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="logo"
              className="hidden w-20 opacity-60 dark:block"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-footer-text-light dark:text-footer-text-dark pb-2 font-semibold">
              Quick Links
            </div>
            <Link to={"/"}>
              {" "}
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                Home
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
            </Link>
            <Link to={"/appointment"}>
              {" "}
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                Appointment
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
            </Link>
            <Link to={"/about"}>
              {" "}
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                About
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>
          <div>
            <div className="text-footer-text-light dark:text-footer-text-dark ml-1 pb-2 font-semibold">
              Contact
            </div>
            <div className="">
              <span className="text-footer-text-light dark:text-footer-text-dark flex">
                <Phone className="pr-2" />
                999-999-9999
              </span>
              <span className="text-footer-text-light dark:text-footer-text-dark flex">
                <Mail className="pr-2" />
                health.flow@gmail.com
              </span>
              <span className="text-footer-text-light dark:text-footer-text-dark flex">
                <Navigation className="pr-2" />
                Earth,Solar System
              </span>
            </div>
          </div>
          <div className="flex flex-col items-baseline">
            <div className="text-footer-text-light dark:text-footer-text-dark pb-2 font-semibold">
              Donate
            </div>
            <div>
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
              <span className="text-footer-text-light dark:text-footer-text-dark group flex items-center">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="text-footer-text-light dark:text-footer-text-dark group-hover:text-footer-text-dark dark:group-hover:text-footer-text-light ml-2 group-hover:rotate-45"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
