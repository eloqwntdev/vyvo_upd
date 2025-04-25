"use client";
// import { useLottie } from "lottie-react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../../../../public/lottie/blue-back-lines-move/data.json";
import HandAnimationData from "../../../../../public/lottie/gpu-farm/GPU-Farm-Hand-animation/data.json";
import PlanetAnimationData from "../../../../../public/lottie/gpu-farm/GPU-Farm-planet-animation/data.json";

const FarmsAsAProduct = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

  return (
    <section className="bg-[#050505] py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex relative flex-col items-center justify-center">
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 2.0,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Lottie
          className="w-full h-full pointer-events-none"
          animationData={animationData}
          loop
        />
      </motion.div>

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <motion.div
          className="max-w-[320px] sm:max-w-[450px] md:max-w-[584px] w-full mx-auto flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h2 className="text-white sm:text-center font-nb font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-tight lg:leading-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.4px]">
            GPU Farms as a Product
          </h2>
          <p className="text-white/80 sm:text-center font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
            Vyvo's GPU farms are not just a backbone for our AI
            ecosystem—they're also an opportunity for our community to invest in
            the future:
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.8,
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{
              boxShadow:
                "inset 6px 80px 80px 0px rgba(148, 168, 237, 0.02), inset 0px -1px 1px 0px rgba(148, 168, 237, 0.20), inset 0px 1px 1px 0px rgba(148, 168, 237, 0.20)",
            }}
          >
            <motion.div className="absolute bottom-14 z-50 text-white flex flex-col gap-3 items-center">
              <span className="font-normal text-3xl">Node Ownership</span>
              <span className="text-center text- font-light w-[80%]">
                Users can purchase nodes in Vyvo’s GPU farms, becoming
                stakeholders in a rapidly growing AI infrastructure.
              </span>
            </motion.div>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.8,
                duration: 2.0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Lottie
                className=" w-full h-auto object-cover pointer-events-none"
                animationData={HandAnimationData}
                assetsPath="/lottie/gpu-farm/GPU-Farm-Hand-animation/images/"
                loop
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.8,
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{
              boxShadow:
                "inset 6px 80px 80px 0px rgba(148, 168, 237, 0.02), inset 0px -1px 1px 0px rgba(148, 168, 237, 0.20), inset 0px 1px 1px 0px rgba(148, 168, 237, 0.20)",
            }}
          >
            <motion.div className="absolute bottom-14 z-50 text-white flex flex-col gap-3 items-center">
              <span className="font-normal text-3xl">Performance Benefits</span>
              <span className="text-center text- font-light w-[80%]">
                Distributed across strategic global locations, these farms
                ensure high-speed, low-latency support for VAI OS users.
              </span>
            </motion.div>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.8,
                duration: 2.0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Lottie
                className=" w-full h-auto object-cover pointer-events-none"
                animationData={PlanetAnimationData}
                assetsPath="/lottie/gpu-farm/GPU-Farm-planet-animation/images/"
                loop
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmsAsAProduct;
