"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiListeningText from "./ai-listening-text/AiListeningText";
import ScrollLogoSection from "@/app/components/banner/scroll-logo-section/ScrollLogoSection";
import DynamicContentSection from "@/app/components/banner/dynamic-content-section/DynamicContentSection";
import useStageStore from "@/store/useStageStore";

const Banner = () => {
  const currentStage = useStageStore((state) => state.currentStage);
  const [videoSrc, setVideoSrc] = useState("/banner/videos/1.mov");
  const [isVideoChanging, setIsVideoChanging] = useState(false);

  useEffect(() => {
    let newSrc = "/banner/videos/1.mov";
    switch (currentStage) {
      case "start":
      case "submit":
        newSrc = "/banner/videos/2.mov";
        break;
      case "thinking":
        newSrc = "/banner/videos/4.mov";
        break;
      case "audio":
        newSrc = "/banner/videos/5.mov";
        break;
      default:
        newSrc = "/banner/videos/6.mov";
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
                className="z-10 "
              >
                <source src={videoSrc} />
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
