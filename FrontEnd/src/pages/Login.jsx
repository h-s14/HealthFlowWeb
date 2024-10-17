import { React, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="box-border flex h-screen justify-center bg-gradient-to-tr from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 pb-10 pt-32 text-gray-600 dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-gray-600">
      <div className="bg-login-form-bg dark:bg-login-form-bg-dark rounded-xl bg-opacity-10 p-6 shadow-md backdrop-blur-md backdrop-filter">
        <h1 className="text-input-text-light dark:text-input-text-dark flex justify-center pb-5 text-4xl">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="relative m-7 flex h-16 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-input-text-light placeholder-input-text-light dark:placeholder-input-text-dark dark:text-input-text-dark h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
              placeholder="Email"
              required
            />
            <FaUser className="absolute left-3 text-gray-500" />
          </div>

          {/* Password Field */}
          <div className="relative m-7 flex h-16 items-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-input-text-light placeholder-input-text-light dark:placeholder-input-text-dark dark:text-input-text-dark h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
            <FaLock className="absolute left-3 text-gray-500" />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between px-7">
            <label className="text-input-text-light dark:text-input-text-dark flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a
              href="#"
              className="text-input-text-light dark:text-input-text-dark pl-14 text-opacity-40 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="bg-login-button-bg-light text-login-button-text-light dark:text-login-button-text-dark hover:bg-login-button-hover-bg-light dark:hover:bg-login-button-hover-bg-dark dark:bg-login-button-bg-dark w-[85%] rounded-lg bg-opacity-60 py-2 transition-colors hover:bg-opacity-80"
            >
              Login
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-5 flex justify-center">
            <span className="text-input-text-light dark:text-input-text-dark">
              Don't have an account?{" "}
            </span>
            <Link
              to="/register"
              className="text-input-text-light dark:text-input-text-dark ml-4 pl-8 text-opacity-40 hover:underline"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
