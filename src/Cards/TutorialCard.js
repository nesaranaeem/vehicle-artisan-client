import React from "react";
import { Link } from "react-router-dom";

const TutorialCard = ({ tutorial }) => {
  const {
    tutorialTitle,
    tutorialDetails,
    tutorialThumbnail,
    tutorialPrice,
    tutorialId,
  } = tutorial;
  return (
    <div className="card w-64 md:w-96 lg:w-96 bg-base-100 shadow-xl">
      <span className="indicator-item badge badge-primary m-2">
        {tutorialPrice}
      </span>
      <figure className="px-10 pt-10">
        <img src={tutorialThumbnail} alt="" className="w-96 h-52 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{tutorialTitle}</h2>
        <p>
          {tutorialDetails.length > 80
            ? tutorialDetails.slice(0, 80) + "..."
            : tutorialDetails}
        </p>
        <div className="card-actions">
          <Link to={`/tutorial/${tutorialId}`} className="btn btn-primary">
            {tutorialPrice === "Free" ? "Free Enroll Now!" : "Enroll Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
