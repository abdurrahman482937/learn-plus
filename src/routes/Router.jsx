import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Support from "../pages/Support";
import Login from "../Authentication/Login"; // Ensure this path is correct
import Register from "../Authentication/Register"; // Ensure this path is correct

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path: "/login",
          element: <Login />, // Add Login route
        },
        {
          path: "/register",
          element: <Register />, // Add Register route
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
