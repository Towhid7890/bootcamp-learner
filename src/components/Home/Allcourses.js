import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Allcourses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-10">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Allcourses;
