import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h2 className="text-white font-bold text-xl">
        Number of Courses : {courses.length}
      </h2>
      {courses.map((course) => (
        <p key={course.id} className="text-amber-600 text-xl">
          <Link to={`categories/${course.id}`} key={course.id}>
            {course.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CourseList;
