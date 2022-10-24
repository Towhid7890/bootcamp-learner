import { createBrowserRouter } from "react-router-dom";
import Allcourses from "../Home/Allcourses";
import Courses from "../Home/Courses";
import Notfound from "../Notfound/Notfound";
import Main from "./../Layout/Main";
import Login from "./../Login/Login";
import Register from "./../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
    children: [
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Allcourses></Allcourses>,
      },
    ],
  },
]);
