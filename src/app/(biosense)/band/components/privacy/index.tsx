"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const PrivacyBand = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black flex flex-col md:flex-row items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageAnimation}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/biosense-products/band/Biosense-VSC-Chip.webp"
          alt="BioSense Watch with encryption visualization"
          width={732}
          height={732}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[732px] object-contain"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full md:w-1/2 items-start max-w-full md:max-w-[511px]"
      >
        <motion.h2
          variants={fadeInLeft}
          className="text-white font-nb font-light text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[40px] lg:leading-[46px] xl:text-[56px] xl:leading-[60px]"
        >
          Privacy and Proof-of-Sensing
        </motion.h2>

        <motion.p
          variants={fadeInLeft}
          className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px] lg:text-[18px] lg:leading-[22px]"
        >
          The VSC Proof-of-Sensing (PoSe) Encryption Chip in every BioSense will
          secure your data using blockchain technology. This immutable, advanced
          technology ensures your biodata stays private.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          BioSense is equipped with a VSC Proof-of-Sensing (PoSe) Encryption
          Chip to secure your data with blockchain technology. VSC is used to
          verify and validate the origin and generation of health, wellness and
          environmental data. As a PoSe-enabled device, BioSense can generate a
          reward of VSC Coin as it gathers your health data.
        </motion.p>

        <motion.div variants={fadeInLeft}>
          <SlashButton
            showIcon={false}
            label="Buy Now"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px] text-[14px] sm:text-[15px] md:text-[16px]"
            containerStyles="!w-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrivacyBand;
