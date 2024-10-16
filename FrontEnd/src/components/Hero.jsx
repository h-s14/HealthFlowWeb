import React from "react";

const Hero = () => {
  return (
    <>
      <div className="items-center pl-40 pt-10">
        <div className="flex-col text-8xl">
          <div className="justify-center pl-12">Health Flow</div>
          <div className="pl-5 pt-1">is here</div>
        </div>

        <div className="flex justify-between">
          <p className="w-[35%] pl-12 pt-10">
            Discover Health Flow Medical Institute: a state-of-the-art facility
            offering comprehensive healthcare services with compassion and
            expertise. Connect seamlessly with providers and access personalized
            care today!
          </p>
          <img
            src="/hero_img.jpg"
            alt="hospital"
            className="w-66 align-right mr-40 h-52 rounded-full"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
