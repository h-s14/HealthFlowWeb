import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Toaster, toast } from "sonner";
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
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Admin" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          // <Toaster position="top-center" richColors />;
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      // <Toaster position="top-center" richColors />;
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="overflow-hidden ">
      <div className="flex w-full h-screen">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-h-full overflow-auto">
            <div className="bg-white px-7 py-14 rounded-3xl border-2 border-gray-200">
              <div className="text-3xl font-semibold">
                WELCOME TO HEALTH FLOW
              </div>
              <p className="font-small text-lg text-gray-500 mt-4">
                Only Admins Are Allowed To Access These Resources!
              </p>
              <form onSubmit={handleLogin}>
                <div className="mt-8">
                  <label className="text-lg font-medium">Email</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <label className="text-lg font-medium">Password</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <label className="text-lg font-medium">
                    Re-Enter Password
                  </label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                    type="password"
                    placeholder="Re-Enter Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mt-8 flex flex-col">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-bold"
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
          <div className="w-60 h-60  bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </div>
  );
};
export default Login;
