import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <h1>{title}</h1>
      <p>"Something Something"</p>
      <div className="banner"></div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector"></img>
        </span>
      </div>
    </div>
  );
};

export default Hero;
