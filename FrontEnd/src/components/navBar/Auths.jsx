import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
const Auths = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const navigateTo = useNavigate();

  const goToLogin = async () => {
    navigateTo("/login");
  };
  return (
    <div className="shadow-2x1 from-nav-bar-btn-grad-light-start to-nav-bar-btn-grad-light-end text-nav-bar-btn-light-txt hover:from-nav-bar-btn-grad-light-hover-start hover:to-nav-bar-btn-grad-light-hover-end dark:from-nav-bar-btn-grad-dark-start dark:to-nav-bar-btn-grad-dark-end dark:hover:from-nav-bar-btn-grad-dark-hover-start dark:hover:to-nav-bar-btn-grad-dark-hover-end rounded-3xl bg-gradient-to-r px-6 py-1 text-lg font-semibold">
      {isAuthenticated ? (
        <button className="" onClick={handleLogout}>
          LOGOUT
        </button>
      ) : (
        <button className="" onClick={goToLogin}>
          LOGIN / REGISTER
        </button>
      )}
    </div>
  );
};

export default Auths;
