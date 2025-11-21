import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import BlackBtn from "../buttons/BlackBtn";

const Login = ({ setToggle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="left-two">
      <div className="login-inner">
        <div className="login-t text-2xl">
          <h3>
            LOGIN
          </h3>
        </div>

        <form className="login-form">
          <div className="inp-rel">
            <input
              className="login-inp text-base"
              placeholder="Email"
              type="email"
              required
            />
          </div>

          <div className="pass-cont inp-rel">
            <div
              className="eye-cont flex-all"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <RiEyeLine size={20} /> : <RiEyeOffLine size={20} />}
            </div>
            <input
              className="login-inp text-base"
              type={visible ? "text" : "password"}
              placeholder="Password"
              required
            />
          </div>

          <div className="login-btn">
            <BlackBtn text={"Login"} />
          </div>
        </form>

        <div className="not-up">
          <p>
            Not a member yet?{" "}
            <span onClick={() => setToggle(true)}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
