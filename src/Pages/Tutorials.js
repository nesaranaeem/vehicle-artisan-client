import React from "react";
import LeftSide from "../Common/LeftSide";

const Tutorials = () => {
  return (
    <div className="grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-4">
      <div className="col-span-1">
        <LeftSide></LeftSide>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Tutorials;
