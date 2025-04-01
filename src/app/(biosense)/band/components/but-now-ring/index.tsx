"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const ButNowBand = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    <section
      ref={sectionRef}
      className="min-h-[415px] md:min-h-[500px] lg:min-h-[600px] w-full relative bg-black flex sm:items-start sm:justify-center"
    >
      {/* Background GIF with positioning wrapper */}
      <div className="absolute w-full left-1/2 top-1/2 h-[560px] -translate-x-1/2 -translate-y-1/2 max-w-[1190px]">
        <motion.img
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Desktop image with positioning wrapper */}
      <div className="absolute left-1/2 bottom-0 sm:block hidden -translate-x-1/2 md:max-w-[700px] lg:max-w-[1360px] w-full z-[5]">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="/biosense-products/band/cta.webp"
          alt="BioSense Band Call To Action"
          className="w-full h-auto"
        />
      </div>

      {/* Mobile image with positioning wrapper */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 block md:hidden max-w-[300px] lg:max-w-[1360px] w-full z-[5]">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="/biosense-products/band/cta-mobile.webp"
          alt="BioSense Band Call To Action Mobile"
          className="w-full h-auto"
        />
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex items-start sm:items-center sm:justify-center gap-4 sm:gap-6 max-w-[7b10px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] sm:text-center tracking-[-3%]"
        >
          Skip the Ordinary. <br />
          <span className="text-gradient">Choose the Extraordinary!</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] sm:text-center tracking-[-3%]"
        >
          Choose the best, a health band as sophisticated <br />
          and stylish as you are. Powerful, yet elegant.
        </motion.p>
        <motion.div variants={slideUp}>
          <SlashButton
            showIcon={false}
            label="Buy Now"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ButNowBand;
