"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiListeningText from "./ai-listening-text/AiListeningText";
import ScrollLogoSection from "@/app/components/banner/scroll-logo-section/ScrollLogoSection";
import DynamicContentSection from "@/app/components/banner/dynamic-content-section/DynamicContentSection";
import useStageStore from "@/store/useStageStore";

const Banner = () => {
  const currentStage = useStageStore((state) => state.currentStage);
  const [videoSrc, setVideoSrc] = useState("/banner/new/1.webm");
  const [isVideoChanging, setIsVideoChanging] = useState(false);

  useEffect(() => {
    let newSrc = "/banner/new/1.webm";
    switch (currentStage) {
      case "start":
      case "submit":
        newSrc = "/banner/new/2.webm";
        break;
      case "thinking":
        newSrc = "/banner/new/4.webm";
        break;
      case "audio":
        newSrc = "/banner/new/seed.webm";
        break;
      default:
        newSrc = "/banner/new/seed2.webm";
        break;
    }

    if (newSrc !== videoSrc) {
      setIsVideoChanging(true);
      setTimeout(() => {
        setVideoSrc(newSrc);
        setIsVideoChanging(false);
      }, 500);
    }
  }, [currentStage, videoSrc]);

  return (
    <div className="bg-black relative z-50 w-full">
      <div className="max-w-[1280px] w-full mx-auto px-[16px] pb-20">
        <div className="h-[437px] overflow-hidden md:h-[500px] w-full flex justify-center relative">
          <AnimatePresence mode="wait">
            {!isVideoChanging && (
              <motion.video
                id="banner-video"
                autoPlay
                muted
                playsInline
                loop
                key={videoSrc}
                className=" z-10  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
              </motion.video>
            )}
          </AnimatePresence>

          <motion.img
            src="/banner/squares_gifs/Preloder-back.gif"
            alt="Background GIF"
            className="absolute z-[-1] w-full h-full left-0 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* AI Listening Text */}
          <AiListeningText />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center relative">
            <DynamicContentSection />
            <ScrollLogoSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
