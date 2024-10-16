import { React, useRef } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/departments/Departments";
import MessageForm from "../components/MessageForm";
import SineWave from "../components/SineWave";
import DepartmentsCara from "../components/departments/DepartmentsCara";

const Home = () => {
  const homeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const biographyRef = useRef(null);
  const departmentsRef = useRef(null);
  const messageRef = useRef(null);
  return (
    <div className="bg-light-background from-dark-gradient-1 via-dark-gradient-2 to-dark-gradient-3 pt-32 dark:bg-gradient-to-tl">
      {/* -----------------------Hero/Home Page----------------------- */}
      <div>
        <Hero />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%] pt-8">
            <button
              onClick={() => {
                biographyRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
          <div className="py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
      {/* -----------------------BioGraphy Page----------------------- */}
      <div ref={biographyRef}>
        <Biography />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%] pt-8">
            <button
              onClick={() => {
                departmentsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
          <div className="py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
      {/* -----------------------Departments Page----------------------- */}
      <div ref={departmentsRef}>
        <div className="flex pb-10 pt-28">
          <Departments />
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%]">
            <button
              onClick={() => {
                messageRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
        </div>
        <DepartmentsCara />
        <div className="py-5 pl-9">
          <SineWave />
        </div>
      </div>
      {/* -----------------------Messages Page----------------------- */}
      <div ref={messageRef}>
        <MessageForm />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%] pt-8">
            <button
              onClick={homeScroll}
              className="z-10 h-24 w-12 rounded-full border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
          <div className="py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
