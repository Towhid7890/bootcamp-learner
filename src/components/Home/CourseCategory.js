import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseCategory = () => {
  const category = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-10">
      {category.map((c) => (
        <CourseCard course={c} key={c._id}></CourseCard>
      ))}
    </div>
  );
};

export default CourseCategory;
