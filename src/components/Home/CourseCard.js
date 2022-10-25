import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { image_url, title, _id, details } = course;
  return (
    <div
      style={{
        boxShadow:
          "rgba(162, 162, 224, 0.699) 0px 4px 6px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
      className="card bg-black w-full  border"
    >
      <figure className="pt-4">
        <img
          className="w-11/12"
          style={{ height: "230px" }}
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-600">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-amber-600">{details.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <div className="">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="badge badge-outline text-white">
            <Link to={`/courses/${_id}`}>Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
