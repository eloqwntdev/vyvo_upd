import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FeaturesGPUFarms = () => {
  return (
    <section className="bg-black py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full">
        <motion.h2
          className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-tight lg:leading-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.4px] text-center mb-8 sm:mb-12 md:mb-[60px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          Features of Vyvo GPU Farms
        </motion.h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[60px]">
          <motion.div
            className="flex flex-col gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="size-12 sm:size-14 md:size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/features-icons/icon1.svg"}
                width={24}
                height={24}
                alt="Global Reach icon"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px]">
                Global Reach
              </h3>
              <p className="text-white/80 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                Initial farms launch in Dallas, TX, with future locations in
                Atlanta, Tokyo, Munich, Singapore, and more.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.1,
            }}
          >
            <div className="size-12 sm:size-14 md:size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/features-icons/icon2.svg"}
                width={24}
                height={24}
                alt="Advanced Computing Power icon"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px]">
                Advanced Computing Power
              </h3>
              <p className="text-white/80 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                Optimized for AI workloads like adaptive learning, real-time
                health insights, and fine-tuned conversational AI.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 md:gap-10 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <div className="size-12 sm:size-14 md:size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/features-icons/icon3.svg"}
                width={24}
                height={24}
                alt="Sustainable Growth icon"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px]">
                Sustainable Growth
              </h3>
              <p className="text-white/80 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                Designed to scale with the increasing AI requirements of VAI OS
                while maintaining performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGPUFarms;
