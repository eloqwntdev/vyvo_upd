"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const Privacy = () => {
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

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black flex flex-col md:flex-row items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8 gap-8 md:gap-12"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInRight}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/biosense-products/privacy/image.webp"
          alt="BioSense Watch with encryption visualization"
          width={927}
          height={900}
          className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[927px]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col gap-6 w-full md:w-1/2 max-w-full md:max-w-[511px]"
      >
        <motion.h2
          variants={fadeInLeft}
          className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[60px]"
        >
          Privacy-Protecting Encryption
        </motion.h2>
        <motion.p
          variants={fadeInLeft}
          className="text-white font-nb font-light text-[16px] leading-[20px]"
        >
          Like previous devices, BioSense Watch protects the personal data it
          captures from you through a powerful and proprietary VSC
          Proof-of-Sensing (PoSe) Encryption Chip.
          <br />
          <br />
          Using blockchain technology, this chip verifies and validates the
          origin and generation of health, wellness, and air quality data.
          Furthermore, as a PoSe-enabled device, BioSense Watch rewards you with
          crypto as it gathers your health data.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Privacy;
