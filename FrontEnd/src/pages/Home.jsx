import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
const Home = () => {
  return (
    <div className="from-dark-gradient-1 via-dark-gradient-2 to-dark-gradient-3 bg-light-background pt-32 dark:bg-gradient-to-tl">
      <Hero />
      <Biography />
      <Departments />
      <MessageForm />
    </div>
  );
};

export default Home;
