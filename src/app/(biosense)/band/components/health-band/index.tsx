"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HealthBand = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[840px] w-full flex items-center justify-center bg-black relative py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="max-w-[1280px] w-full relative z-10 px-4 md:px-6">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          src="/biosense-products/band/biosense-bottom-sensors.webp"
          alt="BioSense Band Sensors"
          className="w-full max-w-[500px] mx-auto mb-8 lg:hidden"
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-6 max-w-[683px] w-full"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-white font-nb font-light text-[24px] leading-[28px] sm:text-[42px] sm:leading-[46px] md:text-[48px] md:leading-[52px]"
          >
            Meet the BioSense™ health band, a wearable device unlike anything in
            its category.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-[434px] w-full text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px]"
          >
            From the moment you put it on your wrist, you'll find it capable and
            comfortable, powerful and practical, <br /> life-enhancing and
            life-changing. All of that in one elegant, ultra-thin and ultralight
            device you'll enjoy, and even love.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="max-w-[304px] w-full flex gap-6"
          >
            <button className="py-2.5 max-w-[140px] w-full rounded-2xl border border-white text-white font-nb font-light text-[16px] leading-[20px]">
              Learn more
            </button>
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

      {/* Desktop image - with animation from the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-[856px] w-full absolute right-0 hidden lg:block"
      >
        <img
          src="/biosense-products/band/biosense-bottom-sensors.webp"
          alt="BioSense Band Sensors"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default HealthBand;
