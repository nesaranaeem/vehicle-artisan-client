import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
      },
      {
        path: "tutorials/:id",
        element: <Tutorial></Tutorial>,
        loader: ({ params }) =>
          fetch(
            `https://vehicle-artisan-server.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
]);
