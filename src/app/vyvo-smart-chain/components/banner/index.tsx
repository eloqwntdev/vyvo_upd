"use client";
import { PurpleButton } from "@/components/common/controllers/button/pink-button";
import React from "react";
// import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/1/1.json";
import animationBgPink from "../../../../../public/lottie/pink-bg/data.json";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const VyvoCmartChainBanner = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

  // const options = {
  //   animationData,
  //   loop: true,
  //   assetsPath: "/lottie/1/images/",
  // };

  // const optionsBgPink = {
  //   animationData: animationBgPink,
  //   loop: true,
  // };

  // const { View } = useLottie(options);
  // const { View: ViewBgPink } = useLottie(optionsBgPink);

  return (
    <section className="min-h-[578px] md:min-h-[900px] w-full flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute sm:top-[-20%] w-full h-full scale-125">
        <Lottie animationData={animationBgPink} loop />
      </div>
      <div className="w-full flex flex-col relative gap-20 md:gap-[160px] items-center pb-[31px] md:pb-20 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.div
            className="h-[450px] w-fit opacity-100"
            initial={{
              opacity: 0,
              /*height: 0,*/
              y: 30,
            }}
            animate={{
              opacity: 1,
              /* height: 450,*/
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <Lottie
              className="pointer-events-none"
              animationData={animationData}
              loop
              assetsPath="/lottie/1/images/"
            />
          </motion.div>
          <div className="max-w-[684px] w-full flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="text-white font-light font-nb text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-0.7px] md:tracking-[-2.2px]">
              Vyvo Smart Chain
            </h1>
            <p className="max-w-[604px] text-center font-nb text-white font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
              Revolutionizing health data managementthrough blockchain
              technology. Vyvo Smart Chain offers a secure and transparent
              platform that directly connects users and researchers.
            </p>
          </div>
          <PurpleButton label={"Start Mining"} />
        </div>
      </div>
    </section>
  );
};

export default VyvoCmartChainBanner;
