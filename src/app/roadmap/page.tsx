"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Tokenomics from "./components/tokenomics";
import dynamic from "next/dynamic";
import animationData from "../../../public/lottie/blue-back-lines-move/data.json";
import RoadmapCards from "./components/roadmap-cards";
import TokenAllocation from "./components/token-allocation";

export default function RoadMap() {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

  return (
    <div className=" bg-black py-10 sm:py-16 md:py-20">
      <div className="container mx-auto h-fit max-h-[20px] md:max-h-none px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-[720px] flex items-center justify-center h-[50px] mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h1 className="text-white w-full text-left font-nb font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:text-center mb-4 sm:mb-6">
            Roadmap
          </h1>
        </motion.div>
        <div className="absolute w-full h-full left-1/2 top-1/4 md:top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lottie
              className="w-full h-full pointer-events-none"
              animationData={animationData}
              loop
            />
          </motion.div>
        </div>
      </div>
      <RoadmapCards />
      <Tokenomics />
      <TokenAllocation />
    </div>
  );
}
