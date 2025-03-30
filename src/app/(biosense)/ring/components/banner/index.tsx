"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-black min-h-[568px] sm:min-h-[100vh] w-full flex flex-col items-center justify-center relative">
      {/* Background GIF - using Image for better performance but keeping the full-screen positioning */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full h-full"
        >
          <Image
            src="/banner/squares_gifs/Preloder-back.gif"
            alt="Background GIF"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 z-10 px-4 md:px-0">
        {/* Product Image - adjusted for responsiveness */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="w-[200px] md:w-auto"
        >
          <img
            src="/biosense-products/ring/ring.webp"
            className="max-w-full md:max-w-[282px]"
            alt="BioSense Ring"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center justify-center gap-8"
        >
          <div className="flex flex-col gap-4 md:gap-6 items-center">
            <motion.h1
              variants={fadeInUp}
              className="text-gradient font-nb font-light text-[42px] leading-[48px] md:text-[72px] md:leading-[76px] text-center"
            >
              BioSense Ring
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white font-nb font-light text-[16px] leading-[20px] md:text-[24px] md:leading-[28px] text-center"
            >
              The New Shape of Wellness, from Vyvo
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <SlashButton
              showIcon={false}
              label="Buy Now"
              className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
              labelClassName="!tracking-[-0.2px]"
              containerStyles="!w-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
