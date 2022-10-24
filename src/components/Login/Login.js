import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./login.css";
const Login = () => {
  return (
    <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
      <h1 className="text-2xl lg:text-5xl font-bold text-amber-600">
        Please Login now!
      </h1>
      <form className="py-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-amber-600 text-base">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-amber-600 text-base">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-500 text-white text-xl">
            Login
          </button>
        </div>
      </form>
      <div>
        <p className="text-amber-600">
          New in here? <Link to="/register">Register</Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
