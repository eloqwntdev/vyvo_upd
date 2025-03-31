"use client";
import React, { useState } from "react";
import RoadMapStep from "./components/roadmap-step";

const roadmapSteps = [
  {
    title: "Q1 2025",
    description: "Release of enhanced health metrics and initial integrations",
  },
  {
    title: "Q2 2025",
    description: "Expansion of device support and advanced analytics",
  },
  {
    title: "Q3 2025",
    description: "Launch of predictive health features",
  },
  {
    title: "Q4 2025",
    description: "Global platform expansion and partnerships",
  },
];

export default function RoadMap() {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(roadmapSteps.length).fill(false)
  );

  const handleStepComplete = (index: number) => {
    setCompletedSteps((prev) => {
      const newCompleted = [...prev];
      newCompleted[index] = true;
      return newCompleted;
    });
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        {roadmapSteps.map((step, index) => (
          <RoadMapStep
            key={index}
            title={step.title}
            index={index}
            canAnimate={true}
            isCompleted={completedSteps[index]}
            previousStepCompleted={
              index === 0 ? true : completedSteps[index - 1]
            }
            onComplete={() => handleStepComplete(index)}
          />
        ))}
      </div>
    </div>
  );
}
