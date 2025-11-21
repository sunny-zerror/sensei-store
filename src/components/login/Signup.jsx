import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import BlackBtn from "../buttons/BlackBtn";

const Signup = ({ setToggle }) => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <div className="left-two">
      <div className="login-inner">
        <div className="login-t text-2xl">
          <h3>
            SIGN UP
          </h3>
        </div>

        <form className="login-form">
          <div className="name-cont">
            <div className="half-inp-cont inp-rel">
              <input
                className="login-inp text-base"
                placeholder="First Name"
                required
              />
            </div>
            <div className="half-inp-cont inp-rel">
              <input
                className="login-inp text-base"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

           <div className=" inp-rel login-inp">
            <PhoneInput
              defaultCountry="in"
              inputClassName=""
              className="  tele_inp  "
            />
            <input type="hidden" />
          </div>

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
              type={visible ? "text" : "password"}
              className="login-inp text-base"
              placeholder="Password"
              required
            />
          </div>

          <div className="pass-cont inp-rel">
            <div
              className="eye-cont flex-all"
              onClick={() => setConfirmVisible(!confirmVisible)}
            >
              {confirmVisible ? <RiEyeLine size={20} /> : <RiEyeOffLine size={20} />}
            </div>
            <input
              type={confirmVisible ? "text" : "password"}
              className="login-inp text-base"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="login-btn">
          <BlackBtn text={"Sign Up"} />
          </div>
        </form>

        <div className="not-up">
          <p>
            Already a member?{" "}
            <span onClick={() => setToggle(false)}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
