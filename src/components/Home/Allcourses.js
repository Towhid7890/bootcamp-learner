import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Allcourses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-5 p-10">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Allcourses;
