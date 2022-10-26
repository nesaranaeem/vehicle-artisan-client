import React from "react";
import { useLoaderData } from "react-router-dom";
import TutorialCard from "../Cards/TutorialCard";
import LeftSide from "../Common/LeftSide";

const Tutorials = () => {
  const allTutorial = useLoaderData();
  return (
    <div className="grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-4">
      <div className="col-span-1">
        <LeftSide></LeftSide>
      </div>
      <div className="col-span-3">
        <div className="mt-2 grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-2 gap-1">
          {allTutorial.map((tutorial) => (
            <TutorialCard
              key={tutorial.tutorialId}
              tutorial={tutorial}
            ></TutorialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
