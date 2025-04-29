"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const FirstSmartWatch = () => {
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

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const floatIn: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black py-10 md:py-16 lg:py-[100px] px-4 md:px-6"
    >
      <div className="max-w-[1162px] w-full mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:items-center">
        <div className="w-full md:max-w-[400px] relative mx-auto md:mx-0 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleUp}
          >
            <Image
              src="/biosense-products/watch/first-smart-watch.webp"
              alt="watch-as-thin"
              width={963}
              height={751}
              className="w-[100vw] scale-[1.3] md:w-[100vh] md:scale-100 max-w-[500px] md:max-w-none"
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="w-full md:max-w-[550px] flex flex-col gap-6 relative items-start"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]"
          >
            The First Smartwatch with Built-In Air Quality Monitoring
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white font-nb font-light text-[16px] leading-[20px]"
          >
            The BioSense Watch is so much more than just a pretty face. It’s
            also the world’s first smartwatch with advanced, German-made
            on-board air quality index sensors and analysis. This enables
            powerful monitoring and awareness of the world around you.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-white font-nb font-light text-[16px] leading-[20px]"
          >
            Unlike other AQI measurements, BioSense Watch monitors the air in
            your immediate vicinity — the actual air you are breathing, indoors
            and out — with updated info every 10 minutes.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-white font-nb font-light text-[16px] leading-[20px]"
          >
            Think of it as your personal air guardian.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <SlashButton
              showIcon={false}
              label="Preorder Now"
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

export default FirstSmartWatch;
