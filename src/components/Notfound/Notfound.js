import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-amber-600">404 , nothing found</h2>
      <Link to="/">
        {" "}
        <button class="btn btn-success">Go To Back</button>
      </Link>
    </div>
  );
};

export default Notfound;
