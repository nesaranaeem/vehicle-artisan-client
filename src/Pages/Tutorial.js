import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSide from "../Common/LeftSide";

const Tutorial = () => {
  const tutorials = useLoaderData();
  return (
    <div>
      <div className="grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-4">
        <div className="col-span-1">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-3">{tutorials.length}</div>
      </div>
    </div>
  );
};

export default Tutorial;
