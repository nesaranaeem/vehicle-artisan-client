import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const details = useLoaderData();
  const {
    tutorialTitle,
    tutorialPrice,
    tutorialDetails,
    tutorialThumbnail,
    tutorialId,
  } = details;
  return <div>{tutorialTitle}</div>;
};

export default Checkout;
