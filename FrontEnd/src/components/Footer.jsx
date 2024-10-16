import React, { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`relative flex w-full justify-between rounded-tl-3xl rounded-tr-3xl border-2 border-black border-opacity-20 bg-gray-400 bg-opacity-10 px-36 pt-5 text-black shadow-lg outline-none backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out ${isVisible ? "pb-10" : "pb-3"}`}
      >
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <div>Quick Links</div>
        </div>
        <div>
          <div>Hours</div>
        </div>
        <div>
          <div>Contact</div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${isVisible ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
      >
        <div className="flex justify-center bg-gray-500 p-3 text-white">
          Expanded Content Goes Here!
        </div>
      </div>
    </div>
  );
};

export default Footer;
