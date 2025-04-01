"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const AsThin = () => {
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
              src="/biosense-products/watch/as-thin.webp"
              alt="watch-as-thin"
              width={300}
              height={300}
              className="w-full md:w-full max-w-[200px] md:max-w-none"
            />
          </motion.div>

          {/* Floating elements */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            src="/biosense-products/watch/top-info.webp"
            className="absolute top-[8%] sm:top-0 right-[26%] sm:right-[-20%] md:right-[-38%] w-[30%] md:w-[80%]"
            alt="Watch thickness specifications"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            src="/biosense-products/watch/bottom-info.webp"
            className="absolute bottom-0 right-[27%] sm:bottom-[-4%] sm:right-[-10%] md:right-[-5%] w-[40%] md:w-[80%]"
            alt="Watch weight specifications"
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="w-full md:max-w-[461px] flex flex-col gap-6 relative items-start"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]"
          >
            As Thin as a Smartwatch Gets
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white font-nb font-light text-[16px] leading-[20px]"
          >
            The gorgeous bright OLED display — and the wealth of information it
            gives you — will first grab your attention. Then you notice how
            incredibly thin BioSense Watch is — just 6.5 mm! It's also feather
            light at 49 grams.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-white font-nb font-light text-[16px] leading-[20px]"
          >
            No other wearable packs so many sensors and features into such a
            thin design.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <SlashButton
              showIcon={false}
              label="Join to Waitlist"
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

export default AsThin;
