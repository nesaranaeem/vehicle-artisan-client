import React from "react";
import { useLoaderData } from "react-router-dom";
import TutorialCard from "../Cards/TutorialCard";
import LeftSide from "../Common/LeftSide";

const Tutorial = () => {
  const tutorials = useLoaderData();
  return (
    <div>
      <div className="grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-4">
        <div className="col-span-1">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-3">
          <div>
            <div className="alert alert-info shadow-lg">
              <div className="text-center">
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
                <span>
                  Total {tutorials.length}{" "}
                  {tutorials.length > 1 ? "Posts" : "Post"} Found
                </span>
              </div>
            </div>

            <div className="mt-2 grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-2 gap-1">
              {tutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.tutorialId}
                  tutorial={tutorial}
                ></TutorialCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
