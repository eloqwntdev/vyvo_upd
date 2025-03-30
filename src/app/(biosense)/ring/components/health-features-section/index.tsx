"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const HealthFeaturesSection = () => {
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

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
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
        delayChildren: 0.1,
      },
    },
  };

  const floatIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden px-4 md:px-6 py-10 sm:py-12 md:py-0"
    >
      <div className="max-w-[1180px] w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8 md:gap-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="w-full md:max-w-[518px] flex flex-col gap-4 sm:gap-6 relative items-start"
        >
          <motion.h2
            variants={fadeInRight}
            className="text-white font-nb font-light text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] md:text-[48px] md:leading-[52px]"
          >
            Vital insights: seamless blood pressure and blood oxygen tracking
          </motion.h2>
          <motion.p
            variants={fadeInRight}
            className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px]"
          >
            There's no easier or more convenient way to keep an accurate,
            <br className="hidden sm:block" />
            digital eye on your blood pressure and blood oxygen.
          </motion.p>
        </motion.div>
        <div className="w-full md:max-w-[400px] sm:mt-0 mt-20 relative mx-auto md:mx-0 flex items-center justify-center">
          {/* Main Ring Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleUp}
          >
            <Image
              src="/biosense-products/ring/health-ring.webp"
              alt="BioSense Ring Health Features"
              width={477}
              height={349}
              className="w-full max-w-[250px] sm:max-w-[400px] md:max-w-[477px]"
            />
          </motion.div>

          {/* Floating elements */}
          <motion.img
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={floatIn}
            src="/biosense-products/ring/health-top.webp"
            className="absolute top-[-27%] sm:top-[-15%] md:top-[-25%] right-[15%] sm:right-[-10%] md:right-[-35%] w-full max-w-[180px] sm:max-w-[220px] md:max-w-[287px]"
            alt="Blood pressure monitoring feature"
          />
          <motion.img
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={floatIn}
            transition={{ delay: 1.0 }}
            src="/biosense-products/ring/health-bottom.webp"
            className="absolute bottom-[-25%] sm:bottom-[-15%] md:bottom-[-20%] right-[42%] sm:right-[0%] md:right-[60%] w-full max-w-[140px] sm:max-w-[170px] md:max-w-[202px]"
            alt="Blood oxygen tracking feature"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthFeaturesSection;
