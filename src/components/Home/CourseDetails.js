import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  return (
    <>
      <div className="card w-1/2 mx-auto bg-gray-400 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={details.image_url}
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
