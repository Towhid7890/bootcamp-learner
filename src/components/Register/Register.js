import React from "react";
import SocialLogin from "./../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
        <h1 className="text-2xl lg:text-5xl font-bold text-amber-600">
          Please Register !!
        </h1>
        <form className="py-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-amber-600 text-base">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-amber-600 text-base">
                Your PhotoURL
              </span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
            />
          </div>
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Register;
