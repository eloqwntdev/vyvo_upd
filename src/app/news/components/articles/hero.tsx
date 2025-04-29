import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../../../../public/lottie/blue-back-lines-move/data.json";
import { motion, Variants } from "framer-motion";

const HeroNews = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
  return (
    <div className="max-w-[574px] w-full flex flex-col gap-4 md:gap-[24px] lg:gap-[32px] items-center justify-center px-[16px] md:px-[24px] lg:px-[0px]">
      <div className="absolute w-full h-full left-0">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 2.0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Lottie
            className="w-full h-full pointer-events-none"
            animationData={animationData}
            loop
          />
        </motion.div>
      </div>
      <h1 className="banner-gradient-text font-nb font-light text-[24px] md:text-[56px] lg:text-[72px] leading-[28px] md:leading-[60px] lg:leading-[76px] tracking-[-1.2px] md:tracking-[-1.8px] lg:tracking-[-2.2px] text-center">
        News and Updates
      </h1>
      <p className="text-white font-nb font-light text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[28px] tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px]">
        Stay informed with our latest articles, press releases, and community
        updates.
      </p>
    </div>
  );
};

export default HeroNews;
