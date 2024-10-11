import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <h1>{title}</h1>
      <p>
        Health Flow Medical Institute is a state-of-the-art facility dedicated
        to providing comprehensive healthcare services with compassion and
        expertise. Our team of skilled professionals is committed to delivering
        personalized care tailored to each patient's needs. At Health Flow, we
        prioritize your well-being, ensuring a harmonious journey towards
        optimal health and wellness.
      </p>
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
