import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ArrowBigLeft, ArrowBigRight, Icon } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide_img_1 from "/departments/nature-1.jpg";
import slide_img_2 from "/departments/nature-1.jpg";
import slide_img_3 from "/departments/nature-1.jpg";
import slide_img_4 from "/departments/cardio.jpg";
import slide_img_5 from "/departments/cardio.jpg";
import slide_img_6 from "/departments/cardio.jpg";
import slide_img_7 from "/departments/cardio.jpg";
import slide_img_8 from "/departments/cardio.jpg";
import slide_img_9 from "/departments/cardio.jpg";

const Departments = () => {
  return (
    <>
      <div className="h-1/2 w-1/2 items-center pl-44">
        <span className="">Departments</span>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="mySwiper"
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlide>
            <img
              src={slide_img_1}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_2}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_3}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_4}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_5}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_6}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_7}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_8}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_img_9}
              className="w-[90%] items-center pl-12"
              alt="cardio"
            />
          </SwiperSlide>
          <div className="flex">
            <div className="prev-slide-arrow">
              <ArrowBigLeft />
            </div>
            <div className="next-slide-arrow">
              <ArrowBigRight />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Departments;
