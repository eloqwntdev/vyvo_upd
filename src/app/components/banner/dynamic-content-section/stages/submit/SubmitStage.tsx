import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import useStageStore from "@/store/useStageStore";

const SubmitStage = () => {
  const cycleStage = useStageStore((state) => state.cycleStage);

  return (
    <>
      <motion.input
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.4,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: { delay: 0, duration: 0.6 },
        }} // Exit animation
        type="text"
        placeholder={"Ask something..."}
        className={clsx(
          "max-w-[380px] w-full",
          "px-[30px] py-[15px] md:py-[17px] rounded-[16px] backdrop-blur-[10px]",
          "bg-[rgba(119,169,232,0.04)] border border-[#000]",
          "text-[16px] md:text-[20px] font-[300] font-nb leading-[112.5%] md:leading-[90%] tracking-[-0.2px] text-[rgba(255,255,255,1)]",
          "placeholder:text-[rgba(255,255,255,0.20)] focus:outline-none"
        )}
        style={{
          boxShadow:
            "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
        }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.4,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: { delay: 0, duration: 0.6 },
        }} // Exit animation
        className="relative mt-[32px] md:mt-[40px] w-[140px] md:w-[206px]"
      >
        <button
          type="button"
          onClick={cycleStage}
          className={clsx(
            "flex items-center justify-center gap-4 relative z-10",
            "px-[30px] py-[10px] md:py-[19px] bg-[#94a7ed28]",
            `rounded-[16px]  backdrop-blur-[10px] main-shadow w-full`
          )}
        >
          <span
            className={`whitespace-nowrap text-[16px] md:text-[20px] leading-[125%] md:leading-[90%] tracking-[-0.2px] text-[rgba(255,255,255,1)] font-nb`}
          >
            Submit
          </span>
        </button>
        <div className="glow-effect"></div>
      </motion.div>
    </>
  );
};

export default SubmitStage;
