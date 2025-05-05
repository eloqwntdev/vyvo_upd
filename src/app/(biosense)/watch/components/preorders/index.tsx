"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import animationData from "../../../../../../public/lottie/blue-back-lines-move/data.json";

const Preorders = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

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

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const floatUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[415px] md:min-h-[600px] lg:min-h-[700px] h-[47vh] md:h-[85vh] w-full relative bg-black flex sm:items-start sm:justify-center"
    >
      {/* Background animation */}
      <motion.div
        className="absolute w-full h-full"
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

      {/* Watch image animation */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[849px] w-full z-[5]">
        <motion.img
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={floatUp}
          src="/biosense-products/watch/preorders.png"
          alt="BioSense Watch Preorder"
          className="w-full h-auto"
        />
      </div>

      {/* Content animation */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex sm:items-center sm:justify-center gap-4 sm:gap-6 max-w-[800px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-[140px]"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] sm:text-center tracking-[-0.5px]"
        >
          <span className="text-gradient">BioSense Watch</span> introduces a new
          dimension in wearable devices.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] sm:text-center tracking-[-0.5px]"
        >
          Eligible buyers can now preorder BioSense Watch. Experience BioSense
          Watch for yourself, and see how this first VAI OS companion can
          transform your daily life!
        </motion.p>
        <motion.div variants={fadeInUp}>
          <SlashButton
            showIcon={false}
            label="Preorder My BioSense Watch"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[270px]"
            labelClassName="!tracking-[-0.5px]"
            containerStyles="!w-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Preorders;
