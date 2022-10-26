import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo (1).png";
import { MyContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = useContext(MyContext);
  console.log(user);
  // signOut handle
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div style={{ backgroundColor: "#383838" }} className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52 duration-700"
          >
            <li>
              <Link to="/" className="text-white text-base">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-base">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <img style={{ height: "40px" }} src={logo} alt="" />
          Learner
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <NavLink to="/" className="btn btn-ghost normal-case">
          Home
        </NavLink>
        <NavLink to="/courses" className="btn btn-ghost normal-case">
          Courses
        </NavLink>
        <NavLink to="/faq" className="btn btn-ghost normal-case">
          FAQ
        </NavLink>
        <NavLink to="/blog" className="btn btn-ghost normal-case">
          Blog
        </NavLink>
        {user?.uid ? (
          <>
            <div className="avatar tool ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
              <span class="tooltiptext text-white">{user?.displayName}</span>
            </div>
            <NavLink
              onClick={handleLogout}
              className="btn btn-ghost normal-case"
            >
              <button className="btn btn-sm ms-3"> Log Out</button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-ghost normal-case">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-ghost normal-case">
              Sign Up
            </NavLink>
          </>
        )}
        <>
          <input type="checkbox" className="toggle" />
        </>
      </div>
    </div>
  );
};

export default Navbar;
