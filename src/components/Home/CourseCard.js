import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { image_url, title, _id } = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-4">
        <img
          className="w-11/12"
          style={{ height: "230px" }}
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline"></div>
          <div className="badge badge-outline">
            <Link to={`/courses/${_id}`}>Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
