"use client";
import ScrollToSection from "@/components/common/animations/scroll-to-section";
import React from "react";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <section className="min-h-[578px] md:min-h-[900px] relative w-full bg-black flex items-end justify-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="absolute inset-0"
      >
        <img
          src="/about-us-img/Hero.webp"
          alt="Vyvo About Us Hero Image"
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill"
        />
      </motion.div>

      <div className="flex flex-col gap-10 md:gap-20 items-center justify-end relative w-full mx-auto pb-10 md:pb-20 px-4 md:px-6">
        <div className="w-full max-w-[1280px]">
          <div className="max-w-[1178px] w-full flex flex-col gap-8">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-white font-nb font-light text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-1.2px] md:tracking-[-2.2px]"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                About Us
              </motion.span>
            </motion.h1>

            <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="max-w-full md:max-w-[586px] w-full text-white font-nb font-light text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.6px]"
              >
                Vyvo's visionary track record has always centered on helping
                people live healthier and more fulfilling lives. For a decade,
                Vyvo has delivered innovations that have received approval by
                the FDA, been classified as medical-grade devices in Europe, and
                even won design awards.
              </motion.p>
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="max-w-full md:max-w-[461px] w-full text-white font-nb font-light text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] :tracking-[-0.6px]"
              >
                Whether wearable tech, web3, or AI-powered solutions, Vyvo
                ensures that people have tools that adapt and evolve to create a
                brighter future.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ScrollToSection id={"stepper"} />
          </motion.div>
        </motion.div>
      </div>

      {/* Optional overlay for better text contrast */}
      <motion.div
        className="absolute inset-0 bg-black/30 pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
    </section>
  );
};

export default AboutUsBanner;
