import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Checkout = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    tutorialTitle,
    tutorialPrice,
    tutorialDetails,
    tutorialThumbnail,
    tutorialId,
  } = details;
  const notify = () => toast.success(`Hello, Thank you for your interest`);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={tutorialThumbnail} className="w-1/2" alt="" />
        </figure>
        <div className="card-body">
          <div className="alert alert-info shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Hello, {user?.displayName}</span>
            </div>
          </div>
          <h2 className="card-title">{tutorialTitle}</h2>
          <p>{tutorialDetails}</p>
          <div className="card-actions justify-end">
            <button onClick={notify} className="btn btn-primary">
              {tutorialPrice === "Free"
                ? "Free Enroll Now!"
                : `${tutorialPrice}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
