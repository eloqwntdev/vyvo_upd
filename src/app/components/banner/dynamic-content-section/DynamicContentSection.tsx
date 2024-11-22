import React, { useState } from "react";
import BannerTitle from "@/app/components/banner/dynamic-content-section/stages/start/banner-title/banner-title";
import BannerParagraph from "@/app/components/banner/dynamic-content-section/stages/start/banner-paragraph/banner-paragraph";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import StartStage from "@/app/components/banner/dynamic-content-section/stages/start/StartStage";
import SubmitStage from "@/app/components/banner/dynamic-content-section/stages/submit/SubmitStage";
import ThinkingStage from "@/app/components/banner/dynamic-content-section/stages/thinking/ThinkingStage";
import AudioStage from "@/app/components/banner/dynamic-content-section/stages/audio/AudioStage";
import useStageStore from "@/store/useStageStore";

// Step 1  Loading - Loader time 0 -100%
// Step 2 Press to start - wait button
// Step 3 Submit - wait input
// Step 4 Thinking - loader
// Step 5 Audio

const DynamicContentSection = () => {
  const currentStage = useStageStore((state) => state.currentStage);

  return (
    <AnimatePresence mode={"wait"}>
      {currentStage === "start" && <StartStage key={"start"} />}
      {currentStage === "submit" && <SubmitStage key={"submit"} />}
      {currentStage === "thinking" && <ThinkingStage key={"thinking"} />}
      {currentStage === "audio" && <AudioStage key={"audio"} />}
    </AnimatePresence>
  );
};

export default DynamicContentSection;
