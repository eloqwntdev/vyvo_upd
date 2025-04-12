"use client";
import React, { useState } from "react";
import RoadMapStep from "./components/roadmap-step";
import { motion } from "framer-motion";
import Tokenomics from "./components/tokenomics";

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

  return;
  // <div className=" bg-black py-10 sm:py-16 md:py-20">
  //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //     <motion.div
  //       className="max-w-[720px] mx-auto mb-12 sm:mb-16 lg:mb-20"
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
  //     >
  //       <h1 className="text-white font-nb font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center mb-4 sm:mb-6">
  //         VYVO Roadmap
  //       </h1>
  //       <p className="text-white/60 font-nb font-light text-base sm:text-lg md:text-xl leading-relaxed text-center">
  //         Our strategic timeline for building the future of AI-driven health
  //         technology
  //       </p>
  //     </motion.div>

  //     {roadmapSteps.map((step, index) => (
  //       <RoadMapStep
  //         key={index}
  //         title={step.title}
  //         index={index}
  //         canAnimate={true}
  //         isCompleted={completedSteps[index]}
  //         previousStepCompleted={
  //           index === 0 ? true : completedSteps[index - 1]
  //         }
  //         onComplete={() => handleStepComplete(index)}
  //       />
  //     ))}
  //   </div>

  //   <Tokenomics />
  // </div>
}
