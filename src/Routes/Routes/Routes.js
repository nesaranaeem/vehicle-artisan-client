import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CourseDetailsCard from "../../Cards/CourseDetailsCard";
import Login from "../../Common/Login";
import Registration from "../../Common/Registration";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog";
import Checkout from "../../Pages/Checkout";
import ErrorPage from "../../Pages/ErrorPage";
import Faq from "../../Pages/Faq";
import Homepage from "../../Pages/Homepage";
import Tutorial from "../../Pages/Tutorial";
import Tutorials from "../../Pages/Tutorials";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({ params }) =>
          fetch(
            `https://vehicle-artisan-server.vercel.app/tutorial/${params.id}`
          ),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch(`https://vehicle-artisan-server.vercel.app/blog`),
      },

      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({ params }) =>
          fetch(
            `https://vehicle-artisan-server.vercel.app/tutorial/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
