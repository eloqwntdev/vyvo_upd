import React, { useEffect, useState } from "react";
import BannerTitle from "@/app/components/banner/dynamic-content-section/stages/start/banner-title/banner-title";
import { SlashIcon } from "@/components/svg";
import clsx from "clsx";
import useStageStore from "@/store/useStageStore";
import { motion } from "framer-motion";

const ThinkingStage = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const cycleStage = useStageStore((state) => state.cycleStage);

  // Trigger handleButtonClick after a 3-second timeout
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through 0, 1, 2
    }, 700); // Change every second

    const timeout = setTimeout(() => {
      cycleStage();
    }, 5600);

    return () => {
      // Cleanup timeout if component unmounts
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [cycleStage]);

  return (
    <>
      <BannerTitle words={"How to improve sleep?"} />
      <motion.div
        initial={{ opacity: 0 }} // Initial animation
        animate={{ opacity: 1 }} // Animation to full scale and opacity
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: { delay: 0, duration: 0.6 },
        }} // Exit animation
        transition={{
          delay: 0.4,
          duration: 2.6,
          ease: [0.16, 1, 0.3, 1], // Easing for smooth animation
        }}
        className={clsx(
          "flex justify-center gap-2 w-[140px] md:w-fit",
          "mt-[72px] md:mt-[42px] px-[30px] py-[13px] md:py-[20px] backdrop-blur-[10px] bg-[rgba(119,169,232,0.16)] rounded-[16px]"
        )}
        style={{
          boxShadow:
            "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
        }}
      >
        <div
          className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#94A8ED] to-[#77A9E8]"
          style={{
            opacity:
              activeIndex === 0 || activeIndex === 1 || activeIndex === 2
                ? 1
                : 0.3,
          }}
        />
        <div
          className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#94A8ED] to-[#77A9E8]"
          style={{
            opacity: activeIndex === 1 || activeIndex === 2 ? 1 : 0.3,
          }}
        />
        <div
          className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#94A8ED] to-[#77A9E8]"
          style={{
            opacity: activeIndex === 2 ? 1 : 0.3,
          }}
        />
      </motion.div>
    </>
  );
};

export default ThinkingStage;
