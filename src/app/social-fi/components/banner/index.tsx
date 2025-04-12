"use client";
import React from "react";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../../../../../public/lottie/pink-bg/data.json";

const SocialFiBanner = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/4/images/",
  };

  const { View } = useLottie(options);

  // Animation variants
  const headingVariants = {
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.3,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 1 + i * 0.3,
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <section className="min-h-[578px] md:min-h-[900px] w-full flex items-end bg-black rounded-b-[24px] relative overflow-hidden">
      <div className="absolute top-[-20%] w-full h-full scale-125">{View}</div>
      <div className="w-full flex flex-col gap-20 md:gap-[160px] items-center pb-[31px] md:pb-20 px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-[684px] w-full flex flex-col gap-6 items-center justify-center text-center"
        >
          <motion.h1
            variants={headingVariants}
            className="text-white font-light font-nb text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-0.7px] md:tracking-[-2.2px]"
          >
            Vyvo{" "}
            <motion.span
              initial={{ color: "#ffffff" }}
              animate={{ color: "#FF0066" }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              SocialFi:
            </motion.span>{" "}
            <br />
            Connect, Share, Thrive
          </motion.h1>
          <motion.p
            variants={paragraphVariants}
            className="max-w-[484px] text-center font-nb text-white font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]"
          >
            Vyvo SocialFi enables people of all backgrounds — and from all
            around the world — to benefit from Influencer Marketing in our
            connected, Web3 world. And it's all based on the power of your
            heartbeat!
            <br />
            <br />
            Vyvo SocialFi makes it easy to take part in our mission and discover
            game-changing crypto mining. Plus, your data is safe and private on
            our proprietary Vyvo Smart Chain blockchain.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-2 md:gap-3 items-center justify-center">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
            className="text-white font-light font-nb text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]"
          >
            The Evolution of Influencer Marketing
          </motion.span>
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
            className="text-[#FF0066] font-nb font-light text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] tracking-[-0.3px]"
          >
            Are you ready?
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default SocialFiBanner;
