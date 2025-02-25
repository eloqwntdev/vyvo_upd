"use client";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/heartbeat.json";
import AnimatedCounter from "@/components/common/animations/animated-counter";

const VyvoGPUFarms = () => {
  const options = {
    animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <section className="bg-black py-20 flex flex-col gap-[60px] items-center justify-center">
      <div className="max-w-[584px] w-full">
        <h2 className="font-nb font-light text-[48px] leading-[52px] tracking-[-1.4px] text-white text-center">
          Vyvo GPU Farms:{" "}
          <span className="banner-gradient-text">
            Powering the Future of AI
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="relative w-full max-w-[630px]">
          {View}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[56px] absolute bottom-7 md:bottom-8 lg:bottom-12 left-7 md:left-8 lg:left-12">
            <span className="text-white font-nb font-light text-lg md:text-xl lg:text-2xl leading-tight tracking-tight">
              Data Processing
            </span>
            <AnimatedCounter
              value={421559254}
              className="text-[#E749F0] font-nb font-light text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
            />
          </div>
        </div>
        <div className="max-w-[399px] w-full flex flex-col gap-6">
          <h3 className="text-white font-nb font-light text-[40px] leading-[44px]">
            What Are GPU Farms?
          </h3>
          <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px]">
            GPU farms are high-performance computing infrastructures built to
            process massive amounts of data for artificial intelligence and
            machine learning tasks.
            <br />
            <br />
            These farms consist of interconnected GPUs (Graphics Processing
            Units) that handle complex computations, making them essential for
            AI-driven applications like VAI OS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VyvoGPUFarms;
