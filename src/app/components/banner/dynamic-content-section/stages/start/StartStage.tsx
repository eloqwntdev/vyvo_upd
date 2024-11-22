import React from "react";
import BannerTitle from "@/app/components/banner/dynamic-content-section/stages/start/banner-title/banner-title";
import BannerParagraph from "@/app/components/banner/dynamic-content-section/stages/start/banner-paragraph/banner-paragraph";
import { motion } from "framer-motion";
import clsx from "clsx";
import useStageStore from "@/store/useStageStore";

const StartStage = () => {
  const cycleStage = useStageStore((state) => state.cycleStage);

  return (
    <>
      <BannerTitle words={"Experience VAI OS"} />
      <BannerParagraph />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.4,
          delay: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: { delay: 0, duration: 0.6 },
        }} // Exit animation
        className="relative mt-[24px] w-[140px] md:w-[206px]"
      >
        <button
          type="button"
          onClick={cycleStage}
          className={clsx(
            "flex items-center justify-center gap-4 relative z-10",
            "px-[30px] py-[10px] md:py-[19px] bg-[#94a7ed28]",
            `rounded-[16px]  backdrop-blur-[10px] main-shadow  w-full`
          )}
        >
          <span
            className={`whitespace-nowrap text-[16px] md:text-[20px] leading-[125%] md:leading-[90%] tracking-[-0.2px] text-[rgba(255,255,255,1)] font-nb`}
          >
            Press to start
          </span>
        </button>
        <div className="glow-effect"></div>
      </motion.div>
    </>
  );
};

export default StartStage;
