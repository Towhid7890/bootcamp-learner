import React from "react";
import google from "../../images/icons/google.png";
import facebook from "../../images/icons/facebook.png";
import github from "../../images/icons/github.png";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="py-5">
      <div className="flex items-center">
        <div
          style={{ height: "1px" }}
          className="flex block bg-white w-1/2 mx-2"
        ></div>
        <div className="text-white">Or</div>
        <div
          style={{ height: "1px" }}
          className="flex block bg-white w-1/2 mx-2"
        ></div>
      </div>
      <div>
        <div className="icon-container flex justify-center mt-5">
          <img className="bg-white" src={google} alt="" />
          <img className="bg-white" src={facebook} alt="" />
          <img className="bg-white" src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
