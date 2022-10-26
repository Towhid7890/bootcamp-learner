import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://bootcamp-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-white font-bold text-xl mb-3">
        Number of Courses : {courses.length}
      </h2>
      {courses.map((course) => (
        <p key={course.id} className="text-amber-600 text-xl border mb-2 p-2">
          <Link to={`categories/${course.id}`} key={course.id}>
            {course.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CourseList;
