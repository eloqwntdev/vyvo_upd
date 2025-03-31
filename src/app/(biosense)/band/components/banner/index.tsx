"use client";

import ScrollToSection from "@/components/common/animations/scroll-to-section";
import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const BannerBand = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Set animation to play immediately when component mounts
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[600px] sm:min-h-screen w-full bg-black relative flex items-start  pt-[120px] lg:pt-0 justify-center overflow-hidden"
    >
      {/* Background GIF - Using a div wrapper to preserve positioning */}
      <div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className="w-full h-full max-w-[1190px] object-contain opacity-70 mx-auto"
        />
      </div>

      {/* Band Image Desktop - Using a div wrapper to preserve positioning */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full sm:block hidden z-[5]">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/biosense-products/band/banner-band.webp"
          alt="BioSense Band"
          className="w-full sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1600px] mx-auto"
        />
      </div>

      {/* Band Image Mobile - Using a div wrapper to preserve positioning */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full sm:hidden z-[5]">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/biosense-products/band/band-mobile.webp"
          alt="BioSense Band"
          className="w-full mx-auto"
        />
      </div>

      {/* Light Effect - Using a div wrapper to preserve positioning */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full z-[5]">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          src="/biosense-products/band/light.webp"
          alt="Light Effect"
          className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1600px] mx-auto"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-[400px] sm:max-w-[500px] pt-10 md:pt-[220px] md:max-w-[610px] z-10 px-4 md:px-6"
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <motion.h2
            variants={fadeInUp}
            className="text-white font-light font-nb text-[24px] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] lg:text-[72px] lg:leading-[76px] text-center tracking-[-3%]"
          >
            <span className="text-gradient">BioSense Watch </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white font-light font-nb text-[14px] leading-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] text-center tracking-[-3%]"
          >
            The new face of Vyvo technology
          </motion.p>
          <motion.div variants={scaleUp}>
            <SlashButton
              showIcon={false}
              label="Buy Now"
              className="!bg-[#77A9E829] hover:!bg-[#77A9E840] transition-colors !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
              labelClassName="!tracking-[-0.2px]"
              containerStyles="!w-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Text - Using a div wrapper to preserve positioning */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 w-full z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex items-center justify-center w-full"
        >
          <div className="max-w-[1280px] w-full relative">
            <div className="absolute left-0 hidden md:block">
              <ScrollToSection id={"band-video"} />
            </div>

            <p className="text-white font-nb text-center font-light text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28px]">
              Skip the ordinary
              <br />
              <span className="text-gradient">Choose the extraordinary!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerBand;
