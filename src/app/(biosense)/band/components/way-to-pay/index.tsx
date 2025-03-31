"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const WayToPay = () => {
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
      transition: { duration: 0.8, ease: "easeOut" },
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

  const floatAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3,
      },
    },
  };

  const cardAnimation: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center sm:gap-8 md:gap-10 lg:gap-[60px] px-4 sm:px-6 md:px-8"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[591px] w-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 z-10"
      >
        <h2 className="text-white font-nb font-light text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] md:text-[44px] md:leading-[48px] lg:text-[56px] lg:leading-[60px] text-center">
          The Easiest <span className="text-gradient">Way to Pay</span>
        </h2>
        <p className="max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[488px] w-full text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px] text-center">
          You may never need to reach for your wallet again. Pay for goods and
          services using $VSC, even when your BioSense is out of power.
        </p>
      </motion.div>

      {/* Mobile sensor image */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={floatAnimation}
        className="block md:hidden w-full max-w-[400px] my-6"
      >
        <img
          src="/biosense-products/band/pay-sensor.webp"
          className="w-full object-contain"
          alt="Payment sensor visualization"
        />
      </motion.div>

      {/* Desktop absolute positioned sensor image */}
      <motion.img
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInRight}
        src="/biosense-products/band/pay-sensor.webp"
        className="absolute w-full h-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] object-contain left-0 hidden md:block"
        alt="Payment sensor visualization"
      />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardAnimation}
        className="max-w-[360px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] w-full mx-auto flex items-end justify-center md:justify-end z-10"
      >
        <div className="wearables-card-gradient w-full self-end max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[598px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] relative overflow-hidden p-2 sm:p-3 md:p-4">
          <div className="transition-transform duration-300 hover:scale-110">
            <Image
              src={"/biosense-products/band/way-to-pay.webp"}
              width={598}
              height={628}
              alt="BioSense payment device"
              className="mx-auto w-full h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WayToPay;
