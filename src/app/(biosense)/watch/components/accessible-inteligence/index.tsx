"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const AccessibleInteligence = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const staggerFaster: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section ref={sectionRef} className="py-[120px] bg-black md:block hidden">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <div className="max-w-[530px] w-full flex items-center justify-center relative">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleUp}
          >
            <Image
              src="/biosense-products/accessible/watch.webp"
              alt="BioSense Watch"
              width={308}
              height={411}
            />
          </motion.div>

          {/* Floating elements */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            src="/biosense-products/accessible/bottom-info.webp"
            className="absolute max-w-[287px] bottom-[30%] left-[0%]"
            alt="Watch features details"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            src="/biosense-products/accessible/top-info.webp"
            className="absolute max-w-[302px] top-[-20%] right-[0%]"
            alt="Watch intelligence details"
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-[483px] w-full flex flex-col gap-10"
        >
          <motion.div variants={fadeIn}>
            <Image
              src="/biosense-products/watch/v-logo.svg"
              alt="Vyvo Logo"
              width={124}
              height={28}
            />
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={fadeInUp}
              className="text-white font-nb font-light text-[56px] leading-[60px]"
            >
              Accessible
              <br /> inteligence
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white font-nb font-light text-[16px] leading-[20px]"
            >
              VAI OS uses a multimodal approach to make conversations easy and
              natural. With the BioSense Watch's speaker and mic, this Life
              CoPilot interacts seamlessly and keeps you informed on various
              aspects of your daily life, including:
            </motion.p>

            {/* Feature list with bullet points */}
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerFaster}
              className="flex flex-col gap-6 mt-4"
            >
              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Health Monitoring: VAI OS tracks your health via the BioSense
                  Watch and sends alerts for any concerns.
                </span>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Personalized Suggestions: It analyzes your habits to offer
                  tailored advice.
                </span>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Timely Reminders: VAI OS reminds you of tasks like taking
                  vitamins, staying active, or following up on emails.
                </span>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccessibleInteligence;
