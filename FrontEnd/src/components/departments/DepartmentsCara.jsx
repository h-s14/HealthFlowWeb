import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";

const DepartmentsCara = () => {
  return (
    <div className="mx-20 flex flex-col items-center justify-center rounded-3xl border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="lg:max-[80%] max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="group relative my-12 flex h-[300px] w-[120px] cursor-pointer flex-col gap-6 rounded-3xl px-6 py-8 text-white shadow-lg lg:h-[300px] lg:w-[250px]">
              <div
                className="absolute inset-0 h-full rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 rounded-3xl bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon
                  className="h-[32px] w-[32px] text-nav-bar-text-light group-hover:text-nav-bar-text-hover-light dark:text-nav-bar-text-dark dark:group-hover:text-nav-bar-text-hover-dark"
                  style={{ transitionDuration: "0s" }}
                />
                <h1 className="hidden text-xl text-nav-bar-text-light hover:text-nav-bar-text-hover-light dark:text-nav-bar-text-dark dark:hover:text-nav-bar-text-hover-dark md:flex lg:text-2xl">
                  {item.title}
                </h1>
              </div>
              <RxArrowTopRight
                style={{ transitionDuration: "0s" }}
                className="absolute bottom-5 left-5 h-[35px] w-[35px] text-nav-bar-text-light hover:text-nav-bar-text-hover-light group-hover:rotate-45 group-hover:text-nav-bar-text-hover-light dark:text-nav-bar-text-dark dark:hover:text-nav-bar-text-hover-dark dark:group-hover:text-nav-bar-text-hover-dark"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DepartmentsCara;
