import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import CheckOut from "../CheckOut/CheckOut";
import Allcourses from "../Home/Allcourses";
import CourseCategory from "../Home/CourseCategory";
import CourseDetails from "../Home/CourseDetails";
import Courses from "../Home/Courses";
import Home from "../Home/Home";
import Notfound from "../Notfound/Notfound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
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
      {
        path: "categories/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <CourseCategory></CourseCategory>,
      },
      {
        path: "/courses/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/courses/check/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
