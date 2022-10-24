import React from "react";
import slider from "../../images/banner.png";
import Education from "./Education";
import HomeCourse from "./HomeCourse";
const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("${slider}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-6xl font-bold ">Learn From Our Experts</h1>
            <p className="mb-5 text-xl ">
              Expand your horizons with learning that’s worldwide. Log in now to
              shop the sale.
            </p>
            <button className="btn outline-warning">Get Started</button>
          </div>
        </div>
      </div>
      <Education></Education>
      <HomeCourse></HomeCourse>
    </>
  );
};

export default Home;
