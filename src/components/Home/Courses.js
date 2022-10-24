import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-4/5">
          <Outlet></Outlet>
        </div>
        <div className="">
          <CourseList></CourseList>
        </div>
      </div>
    </div>
  );
};

export default Courses;
