"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const SecondGeneration = () => {
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

  return (
    <section
      ref={sectionRef}
      className="bg-black py-6 md:py-20 lg:py-[147px] px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-[146px]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-[495px] w-full flex flex-col gap-6 md:gap-10"
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/biosense-products/vyvo-pay/vyvo-pay.webp"
            alt="VyvoPay Logo"
            width={211}
            height={44}
            className="w-[150px] md:w-[180px] lg:w-[211px]"
          />
        </motion.div>
        <div className="flex flex-col gap-6 w-full">
          <motion.h2
            variants={fadeInUp}
            className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[60px]"
          >
            Second Generation VyvoPay
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-nb font-light text-[16px] leading-[20px] text-white"
          >
            VyvoPay is built right into the band of the BioSense Watch.
            <br />
            <br />
            Use it with NFC contactless terminals around the world to pay for
            goods and services with a simple tap. It works even if the watch is
            out of power!
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeft}
        className="max-w-[702px] w-full mt-8 md:mt-0"
      >
        <Image
          src="/biosense-products/vyvo-pay/vyvo-pay-image.webp"
          alt="BioSense Watch with VyvoPay demonstration"
          width={702}
          height={605}
          className="w-full"
        />
      </motion.div>
    </section>
  );
};

export default SecondGeneration;
