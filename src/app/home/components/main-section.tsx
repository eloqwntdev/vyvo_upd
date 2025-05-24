"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../../../public/lottie/blue-back-lines-move/data.json";
import ProductsCard from "./main-section/products-card";

const MainSection = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

  return (
    <section className="max-h-[1000px] md:max-h-none md:min-h-[900px] flex relative flex-col items-center pt-[96px] md:pt-[162px] 2xl:px-0 px-4 bg-black">
      <img
        src="/homepage/home.svg"
        alt=""
        className="px-10 sm:px-0 relative z-10"
      />

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
      <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 gap-5 pt-[96px] md:pt-[162px] pb-6 lg:pb-0">
        <div
          className="cursor-pointer card-1-gradient p-[2.5px] rounded-[18px] card-shadow"
          onClick={() => (window.location.href = "/")}
        >
          <div className="p-2 sm:p-4 rounded-[18px] card-1-inner-gradient relative">
            <img
              src="/homepage/card-1.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize font-nb text-[14px] sm:text-[24px] leading-[20px] sm:leading-[28px] text-white absolute bottom-[10%] sm:bottom-[38px] left-1/2 transform -translate-x-1/2">
              VAI OS
            </span>
          </div>
        </div>

        <div
          className="cursor-pointer card-2-gradient p-[2.5px] rounded-[18px] card-shadow"
          onClick={() => (window.location.href = "/vyvo-smart-chain")}
        >
          <div className="p-2 sm:p-4 rounded-[18px] card-2-inner-gradient relative">
            <img
              src="/homepage/card-2.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize max-w-[198px] w-full text-center font-nb text-[14px] sm:text-[24px] leading-[20px] sm:leading-[28px] text-white absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
              Vyvo Smart Chain
            </span>
          </div>
        </div>

        <ProductsCard />

        <div
          onClick={() => (window.location.href = "/social-fi")}
          className="cursor-pointer card-4-gradient p-[2.5px] rounded-[18px] card-shadow"
        >
          <div className="p-2 sm:p-4 rounded-[18px] card-4-inner-gradient relative">
            <img
              src="/homepage/card-4.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize font-nb w-full text-center text-[14px] sm:text-[24px] leading-[20px] sm:leading-[28px] text-white absolute bottom-[10%] sm:bottom-[38px] left-1/2 transform -translate-x-1/2">
              Vyvo SocialFi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
