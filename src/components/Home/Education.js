import React from "react";
import education from "../../images/education.png";

const Education = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={education} className=" rounded-lg w-50" />
          <div>
            <h1 className="text-5xl text-amber-600 font-bold">
              Our education system works for you
            </h1>
            <p className="py-6 font-bold">
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two waters own morning gathered greater
              shall had behold had seed.
            </p>
            <button className="btn btn-outline btn-warning text-black font-bold text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
