import React from "react";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div className="flex">
      <div className="w-4/5">
        <p>THis is first</p>
      </div>
      <div className="">
        <CourseList></CourseList>
      </div>
    </div>
  );
};

export default Courses;
