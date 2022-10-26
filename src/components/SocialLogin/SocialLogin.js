import React, { useContext, useState } from "react";
import google from "../../images/icons/google.png";
import facebook from "../../images/icons/facebook.png";
import github from "../../images/icons/github.png";
import "./SocialLogin.css";
import { MyContext } from "./../../context/AuthContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [error, setError] = useState("");
  const { providerLogin } = useContext(MyContext);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // for githyb sign in with
  const handleGithubSignIn = () => {
    providerLogin(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // for google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="py-5">
      <span className="text-red-600">{error}</span>
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
          <img
            onClick={handleGoogleSignIn}
            className="bg-white"
            src={google}
            alt=""
          />
          <img className="bg-white" src={facebook} alt="" />
          <img
            onClick={handleGithubSignIn}
            className="bg-white"
            src={github}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
