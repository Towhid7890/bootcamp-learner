import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full p-2 md:w-full lg:w-4/5">
          <Outlet></Outlet>
        </div>
        <div className="ml-5 lg:ml-0">
          <CourseList></CourseList>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
