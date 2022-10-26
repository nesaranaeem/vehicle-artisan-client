import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CourseDetailsCard from "../../Cards/CourseDetailsCard";
import Main from "../../layout/Main";
import Homepage from "../../Pages/Homepage";
import Tutorial from "../../Pages/Tutorial";
import Tutorials from "../../Pages/Tutorials";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
        loader: () =>
          fetch(`https://vehicle-artisan-server.vercel.app/category/1`),
      },
      {
        path: "tutorials/:id",
        element: <Tutorial></Tutorial>,
        loader: ({ params }) =>
          fetch(
            `https://vehicle-artisan-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "tutorial/:id",
        element: <CourseDetailsCard></CourseDetailsCard>,
        loader: ({ params }) =>
          fetch(
            `https://vehicle-artisan-server.vercel.app/tutorial/${params.id}`
          ),
      },
    ],
  },
]);
