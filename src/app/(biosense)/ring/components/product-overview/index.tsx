"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const ProductOverview = () => {
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
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black  min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-[1180px] w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4">
        <div className="w-full md:max-w-[400px] relative mx-auto md:mx-0 flex items-center justify-center">
          {/* Desktop Ring Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleUp}
            className="w-full md:w-full max-w-[400px] sm:block hidden"
          >
            <Image
              src="/biosense-products/ring/ring-overview.webp"
              alt="BioSense Ring Overview"
              width={400}
              height={400}
              className="w-full"
            />
          </motion.div>

          {/* Mobile Ring Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleUp}
            className="w-full md:w-full max-w-[224px] sm:hidden"
          >
            <Image
              src="/biosense-products/ring/mobile-ring.webp"
              alt="BioSense Ring Mobile View"
              width={224}
              height={241}
              className="w-full"
            />
          </motion.div>

          {/* Floating elements */}
          <motion.img
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={floatIn}
            src="/biosense-products/ring/left.webp"
            className="absolute top-[8%] sm:top-[-2%] sm:block hidden right-[26%] sm:right-[-20%] md:right-[-10%] w-full max-w-[240px]"
            alt="Ring features details"
          />
          <motion.img
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={floatIn}
            src="/biosense-products/ring/bottom.webp"
            className="absolute bottom-0 right-[27%] sm:block hidden sm:bottom-[-4%] sm:right-[-10%] md:right-[2%] w-full max-w-[240px]"
            alt="Ring specifications"
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="w-full md:max-w-[461px] flex flex-col gap-6 relative items-start"
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-white font-nb font-light text-[24px] leading-[28px] sm:text-[32px] sm:leading-[38px] md:text-[56px] md:leading-[60px]"
          >
            Stylish. Elegant. Advanced. <br />
            <span className="text-gradient">And totally Vyvo.</span>
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-white font-nb font-light text-[14px] leading-[16px] sm:text-[16px] sm:leading-[20px]"
          >
            At just 3 grams and less than 3 millimeters thick,
            <br /> the BioSense Ring fits into your life effortlessly.
          </motion.p>

          <motion.div variants={fadeInLeft}>
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

export default ProductOverview;
