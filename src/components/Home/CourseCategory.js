import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseCategory = () => {
  const category = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5">
      {category.map((c) => (
        <CourseCard course={c} key={c._id}></CourseCard>
      ))}
    </div>
  );
};

export default CourseCategory;
