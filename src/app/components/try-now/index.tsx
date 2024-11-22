"use client";
import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TryNow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0.1, 0.6], [50, 0]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.2, 0.7], [0.8, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[612px] md:min-h-[900px] bg-black grid place-content-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-6 md:gap-6 items-center relative z-50">
        <motion.h2
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="font-nb text-[32px] leading-[32px] md:text-[56px] font-light md:leading-[60px] tracking-[-1.68px] text-white max-w-[185px] md:max-w-[715px] mx-auto text-center"
        >
          Meet Your{" "}
          <span className="bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent">
            Life CoPilot{" "}
          </span>
          Today
        </motion.h2>

        <motion.p
          style={{
            y: descriptionY,
            opacity: descriptionOpacity,
          }}
          className="font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-[#FFFFFF99] max-w-[283px] md:max-w-[241px] text-center tracking-[0.03rem] font-light"
        >
          Manage your life, work, and health effortlessly with VAI OS.
        </motion.p>

        <SlashButton
          showIcon={false}
          label="Try now"
          className="gap-4 !bg-[#77A9E829] py-[10px] test mx-auto !rounded-[16px] w-full grid place-content-center !max-w-[140px]"
          labelClassName="!tracking-[-0.2px]"
          containerStyles="!w-auto"
        />
      </div>

      <img
        src="/Preloder-back.gif"
        alt="Preloder-back"
        className="absolute max-w-[1084px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default TryNow;
