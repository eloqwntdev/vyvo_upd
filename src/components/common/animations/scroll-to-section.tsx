"use client";
import { motion } from "framer-motion";
import React from "react";

const ScrollToSection = ({
  id = "statement-section",
  className,
}: {
  id: string;
  className?: string;
}) => {
  const handleScroll = () => {
    if (typeof document !== "undefined") {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        y: [20, 0, 0, 20],
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
      className="w-[16px] h-[24px] md:w-8 md:h-12 rounded-full grid place-content-center backdrop-blur-sm  cursor-pointer bg-[rgba(148,168,237,0.04)]"
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
  );
};

export default ScrollToSection;
