import React, { useState } from "react";
import Image from "next/image";
import Login from "@/components/login/Login";
import Signup from "@/components/login/Signup";

const UserLogin = ({ meta }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="login-cont">
        <div
          className="login-left-cont"
          style={{ transform: toggle ? "translateY(0%)" : "translateY(-50%)" }}
        >
          <div className="left-one">
            <img
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
              alt="image"
            />
          </div>
          <div className="left-one">
            <img
              src="https://images.unsplash.com/photo-1665042099439-39d93c1117e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156"
              alt="image"
            />
          </div>
        </div>
        <div
          className="login-right-cont background"
          style={{ transform: toggle ? "translateY(-50%)" : "translateY(0%)" }}
        >
          <Login setToggle={setToggle} />
          <Signup setToggle={setToggle} />
        </div>
      </div>
    </>
  );
};

export default UserLogin;
