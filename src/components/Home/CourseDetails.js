import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  return (
    <>
      <div
        style={{
          boxShadow:
            "rgba(162, 162, 224, 0.699) 0px 4px 6px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
        className="card w-full md:w-4/5 lg:w-1/2 mx-auto bg-black border"
      >
        <figure className="px-5 pt-5">
          <img
            src={details.image_url}
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-amber-500 text-2xl">
            {details.title}
          </h2>
          <p className="text-amber-600">{details.details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
