import { React, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar/NavBar";
import { Context } from "./main";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //
  const EleRef = useRef();
  //
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true },
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <div className={`${darkMode && "dark"}`}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
        <button
          className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-black shadow-lg transition dark:bg-black dark:text-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <span className="text-sm">LHT</span>
          ) : (
            <span className="text-sm">DRK</span>
          )}
        </button>
      </Router>
    </div>
  );
};
export default App;
