"use client";
import React from "react";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../../../../../public/lottie/4/data.json";
import PinkButton from "@/components/common/controllers/button/pink-button";
import dynamic from "next/dynamic";

const HeartBeats = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/4/images/",
  };
  const { View } = useLottie(options);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 bg-white md:py-20 flex flex-col items-center justify-center gap-[30px] md:gap-20 px-4 md:px-6"
    >
      <motion.span
        variants={fadeInUp}
        className="text-[#FF0066] font-nb text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] tracking-[-0.2px] text-center"
      >
        Heartbeats-powered blockchain
      </motion.span>

      <motion.div
        variants={staggerContainer}
        className="w-full flex flex-col md:flex-row items-center justify-center md:gap-[103px] gap-8"
      >
        <motion.div
          variants={fadeInUp}
          className="max-w-[547px] w-full flex flex-col gap-5 md:gap-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-nb font-light text-[20px] md:text-[48px] leading-[24px] md:leading-[52px] tracking-[-1px] md:tracking-[-1.4px] text-left"
          >
            Transform Your Heartbeats into Crypto:{" "}
            <motion.span
              initial={{ color: "#000" }}
              animate={{ color: "#FF0066" }}
              transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              className="text-[#FF0066]"
            >
              Empower Health, Earn Rewards
            </motion.span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-6 md:gap-14 max-w-[421px] w-full mx-auto md:mx-0"
          >
            <motion.p
              variants={fadeInUp}
              className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[0.3px] md:tracking-[0.5px]"
            >
              Introducing Vyvo, the trailblazer in heartbeats-powered
              blockchain. We leverage your body's signals to mine Vyvo Smart
              Coin, turning your everyday heartbeats into crypto earnings.
              <br />
              <br />
              Unlock the value of your health data and contribute to research
              focused on enhancing human health. Realize the worth of your
              health data. Your contributions support vital research to improve
              human health.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <PinkButton label="Level up as an Influencer!" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={{ scale: 1 }}
          animate={{
            scale: 1.05,
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="max-w-[630px] w-full"
        >
          {View}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeartBeats;
