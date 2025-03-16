"use client";
import React, { useState } from "react";
import RoadMapStep from "./components/roadmap-step";

const RoadMap = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepComplete = (index) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps((prev) => [...prev, index]);
      console.log(`Step ${index} completed, next step can start`);
    }
  };

  return (
    <div className="w-full bg-black pt-20">
      <div className="flex flex-col gap-20">
        <RoadMapStep
          title="Short-Term (0-6 Months)"
          index={0}
          canAnimate={true} // First step can always animate
          onComplete={() => handleStepComplete(0)}
        />
        <RoadMapStep
          title="Medium-Term (6-12 Months)"
          index={1}
          canAnimate={completedSteps.includes(0)}
          onComplete={() => handleStepComplete(1)}
        />
        <RoadMapStep
          title="Long-Term (12-18 Months)"
          index={2}
          canAnimate={completedSteps.includes(1)}
          onComplete={() => handleStepComplete(2)}
          showVerticalLines={false} // Hide bottom vertical line on last step
        />
      </div>
    </div>
  );
};

export default RoadMap;
