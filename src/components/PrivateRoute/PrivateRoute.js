import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  let location = useLocation();
  if (loading) {
    return <button className="btn loading">loading</button>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
