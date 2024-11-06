import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://healthflow.harkirat.site/api/v1/user/login",
          { email, password, confirmPassword, role: "Admin" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="overflow-hidden ">
      <div className="flex w-full bg-lp-bg h-screen">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-h-full overflow-auto">
            <div className="bg-card-bg text-white px-7 py-14 rounded-3xl border-2 flex flex-col justify-center items-center border-card-border">
              <div className="text-3xl text-t-p font-semibold">
                WELCOME TO HEALTH FLOW
              </div>
              <div className="font-small text-md text-t-s mt-4 ">
                Only Admins Are Allowed To Access These Resources!
              </div>
              <form className=" w-full" onSubmit={handleLogin}>
                <div className="relative mx-8 my-8 flex h-16 items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-full w-full rounded-lg border-2 border-card-border border-opacity-60 bg-transparent pl-10 pr-5 text-input-text placeholder-input-text outline-none  focus:border-t-f focus:border-opacity-80"
                    placeholder="Email"
                    required
                  />
                  <FaUser className="absolute left-3 text-t-s" />
                </div>
                <div className="relative my-8 mx-8 flex h-16 items-center">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-full w-full rounded-lg border-2 border-card-border border-opacity-60 bg-transparent pl-10 pr-5 text-input-text placeholder-input-text outline-none  focus:border-t-f focus:border-opacity-80"
                    placeholder="Password"
                    required
                  />
                  <FaLock className="absolute left-3 text-t-s" />
                </div>
                <div className="relative my-8 mx-8 flex h-16 items-center">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-full w-full rounded-lg border-2 border-card-border border-opacity-60 bg-transparent pl-10 pr-5 text-input-text placeholder-input-text outline-none  focus:border-t-f focus:border-opacity-80"
                    placeholder="Re-Enter Password"
                    required
                  />
                  <FaLock className="absolute left-3 text-t-s" />
                </div>
                <div className="mt-8 flex flex-col">
                  <button
                    type="submit"
                    className="active:scale-[.98] mx-8 active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gradient-to-tr from-grad-s to-grad-e text-white text-lg font-bold"
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-rp-bg">
          <div className="w-60 h-60  bg-gradient-to-tr from-grad-s to-grad-e rounded-full animate-spin" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </div>
  );
};
export default Login;
