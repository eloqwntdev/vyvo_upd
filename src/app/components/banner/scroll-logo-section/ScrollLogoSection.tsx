import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { SlashIcon } from "@/components/svg";
import clsx from "clsx";
import useStageStore from "@/store/useStageStore";

const ScrollLogoSection = () => {
  const setCurrentStage = useStageStore((state) => state.setCurrentStage);
  const setIsModalOpen = useStageStore((state) => state.setIsModalOpen);
  const currentStage = useStageStore((state) => state.currentStage);

  const handleScroll = () => {
    const targetSection = document.getElementById("statement-section");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // aligns the element at the top of the view
      });
    }
  };

  //f
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          y: [20, 0, 0, 20], // Bounce motion from top to bottom
          scale: 1,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }, // Fade-in duration
          scale: { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }, // Fade-in duration
          repeat: Infinity, // Repeat animation infinitely
          repeatDelay: 0.2, // 0.5 seconds delay between each loop

          repeatType: "loop", // Continuous loop
          duration: 2.1, // Duration of one cycle
          ease: "easeInOut", // Smooth easing
        }}
        className="w-[16px] h-[24px] md:w-8 md:h-12 rounded-full grid place-content-center backdrop-blur-sm absolute left-0 bottom-[-48px] md:bottom-0 cursor-pointer bg-[rgba(148,168,237,0.04)]"
        onClick={handleScroll}
        style={{
          boxShadow:
            "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset,0px -1px 1px 0px rgba(148, 168, 237, 0.2) inset,0px 1px 1px 0px rgba(148, 168, 237, 0.2) inset",
        }}
      >
        <img
          src={"/icons/scroll-down.svg"}
          alt={"Scroll Down Arrow"}
          className={"w-[5px] md:w-[10px] h-[8px] md:h-[16px]"}
        />
      </motion.div>

      {currentStage === "audio" && (
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
            "flex md:hidden flex gap-[16px] items-center hover:!bg-transparent hover:!backdrop-blur-none absolute bottom-[-48px] z-[50]"
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
              "text-[16px] md:text-[20px] font-[400] leading-[125%] md:leading-[100%] tracking-[-0.2px] font-nb"
            )}
          >
            Ask again
          </span>
        </motion.button>
      )}

      <motion.div
        className={"absolute right-0 bottom-[-48px] md:bottom-0"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.4,
          delay: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src={"/logo-pilot.svg"}
          alt={"Life Copilot"}
          width={72.976}
          height={48}
          className={"w-[36px] md:w-[73px] h-[24px] md:h-[48px]"}
        />
      </motion.div>
    </>
  );
};

export default ScrollLogoSection;
