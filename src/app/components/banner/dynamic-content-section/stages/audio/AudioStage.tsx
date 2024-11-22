import React from "react";
import BannerTitle from "@/app/components/banner/dynamic-content-section/stages/start/banner-title/banner-title";
import { SlashIcon } from "@/components/svg";
import clsx from "clsx";
import AudioPlayerBlock from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/AudioPlayerBlock";
import useStageStore from "@/store/useStageStore";
import { motion } from "framer-motion";

const AudioStage = () => {
  const setCurrentStage = useStageStore((state) => state.setCurrentStage);
  const setIsModalOpen = useStageStore((state) => state.setIsModalOpen);

  return (
    <>
      <BannerTitle words={"Sleep well!"} />
      <div
        className={
          "flex flex-col items-center justify-center relative mt-[60px] md:mt-[32px] "
        }
      >
        <AudioPlayerBlock />
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }} // Initial animation
          animate={{ scale: 1, opacity: 1 }} // Animation to full scale and opacity
          exit={{
            scale: 0.8,
            opacity: 0,
            transition: { delay: 0, duration: 0.6 },
          }} // Exit animation
          transition={{
            delay: 2.6,
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1], // Easing for smooth animation
          }}
          className={
            "hidden md:flex gap-[16px] items-center hover:!bg-transparent hover:!backdrop-blur-none absolute !bottom-[-100%] z-[50]"
          }
          onClick={() => {
            setIsModalOpen(false);
            setCurrentStage("submit");
          }}
        >
          <SlashIcon />
          <span
            className={clsx(
              "bg-gradient-to-r from-[#94A8ED] to-[#FFFFFF] bg-clip-text text-transparent",
              "text-[20px] font-[400] leading-[100%] tracking-[-0.2px] font-nb"
            )}
          >
            Ask again
          </span>
        </motion.button>
      </div>
    </>
  );
};

export default AudioStage;
