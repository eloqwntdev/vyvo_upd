"use client";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/heartbeat.json";
import AnimatedCounter from "@/components/common/animations/animated-counter";
import Image from "next/image";
import { motion } from "framer-motion";

const VyvoGPUFarms = () => {
  const options = {
    animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <section
      id="gpu-farms"
      className="bg-black py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <motion.div
          className="w-full max-w-[584px] mx-auto mb-8 sm:mb-12 md:mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h2 className="font-nb font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-tight lg:leading-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.4px] text-white sm:text-center">
            Vyvo GPU Farms:{" "}
            <span className="banner-gradient-text">
              Powering the Future of AI
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"/DEFAULT/data-processing.webp"}
                width={630}
                height={450}
                alt={"Data processing visualization"}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 absolute bottom-4 sm:bottom-6 lg:bottom-12 left-4 sm:left-6 lg:left-12">
              {/* <span className="text-white font-nb font-light text-sm sm:text-base md:text-lg leading-tight">
                Data Processing
              </span> */}
              <AnimatedCounter
                value={421559254}
                className="banner-gradient-text font-nb font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
              />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-tight lg:leading-[44px] tracking-[-0.5px]">
                What Are GPU Farms?
              </h3>
              <div className="space-y-5">
                <p className="text-white/60 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[24px] tracking-[-0.3px] md:tracking-[-0.5px]">
                  GPU farms are high-performance computing infrastructures built
                  to process massive amounts of data for artificial intelligence
                  and machine learning tasks.
                </p>
                <p className="text-white/60 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[24px] tracking-[-0.3px] md:tracking-[-0.5px]">
                  These farms consist of interconnected GPUs (Graphics
                  Processing Units) that handle complex computations, making
                  them essential for AI-driven applications like VAI OS.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VyvoGPUFarms;
