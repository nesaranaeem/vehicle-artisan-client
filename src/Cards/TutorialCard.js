import React from "react";
import { Link } from "react-router-dom";

const TutorialCard = ({ tutorial }) => {
  const { tutorialTitle, tutorialDetails, tutorialThumbnail, tutorialPrice } =
    tutorial;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <span className="indicator-item badge badge-primary m-2">
        {tutorialPrice}
      </span>
      <figure className="px-10 pt-10">
        <img
          src={tutorialThumbnail}
          alt="Shoes"
          className="w-96 h-52 rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{tutorialTitle}</h2>
        <p>
          {tutorialDetails.length > 80
            ? tutorialDetails.slice(0, 80) + "..."
            : tutorialDetails}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">
            {tutorialPrice === "Free" ? "Free Enroll" : "Endroll Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
