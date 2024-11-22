"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo } from "react";
import clsx from "clsx";
import useStageStore from "@/store/useStageStore";

const AiListeningText = () => {
  const currentStage = useStageStore((state) => state.currentStage);

  // Determine the text based on the current stage
  let text = "";
  switch (currentStage) {
    case "start":
      text = "Listening..";
      break;
    case "thinking":
      text = "AI Thinking...";
      break;
    case "audio":
      text = "AI Speaking...";
      break;
    case "submit":
      text = "Waiting for a question...";
      break;
    default:
      text = "Thinking...";
      break;
  }

  return (
    <div className={clsx("absolute bottom-[10%] left-1/2 -translate-x-1/2")}>
      <span className="text-[#94A8ED] text-[16px] md:text-[24px] leading-[125%] md:leading-[120%] tracking-[-0.72px] font-light  font-nb flex">
        <AnimatePresence mode={"wait"}>
          {text.split("").map((char, index, arr) => (
            <motion.span
              key={`${currentStage}-${index}`}
              initial={{ display: "none" }}
              animate={{ display: "block" }}
              exit={{
                display: "none",
                transition: {
                  delay: (arr.length / 1.6 - index - 1) * 0.03, // Reverse order on exit
                },
              }}
              transition={{
                duration: 0,
                delay: index * 0.05, // Sequential appearance
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
    </div>
  );
};

export default AiListeningText;
