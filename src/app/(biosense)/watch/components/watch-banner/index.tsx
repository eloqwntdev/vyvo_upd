"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, Variants } from "framer-motion";

const WatchBanner = () => {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="min-h-[568px] md:min-h-[800px] lg:min-h-[900px] w-full relative bg-black flex sm:items-center sm:justify-center">
      {/* Background GIF with positioning wrapper */}
      <div className="absolute w-full h-full left-0">
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Watch image with positioning wrapper */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[1025px] w-full z-[5]">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/biosense-products/watch/banner.webp"
          alt="BioSense Watch"
          className="w-full h-auto"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex items-center justify-center gap-4 sm:gap-6 max-w-[610px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-0"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[72px] lg:leading-[76px] text-center tracking-[-3%]"
        >
          <span className="text-gradient">BioSense Watch </span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[24px] md:leading-[28px] text-center tracking-[-3%]"
        >
          The new face of Vyvo technology
        </motion.p>
        <motion.div variants={slideUp}>
          <SlashButton
            showIcon={false}
            label="Join to Waitlist"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WatchBanner;
