"use client";
// import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/heartbeat.json";
import secondAnimationData from "../../../../../public/lottie/3/data.json";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import AnimatedCounter from "@/components/common/animations/animated-counter";
import dynamic from 'next/dynamic';

const AboutVSC = () => {

  const Lottie = dynamic(() => import('lottie-react'), { 
    ssr: false
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // const options = {
  //   animationData,
  //   loop: true,
  // };

  // const options2 = {
  //   animationData: secondAnimationData,
  //   loop: true,
  //   assetsPath: "/lottie/3/images/",
  // };

  // const { View } = useLottie(options);
  // const { View: View2 } = useLottie(options2);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 lg:py-20 flex flex-col gap-4 md:gap-12 lg:gap-20 items-center justify-center bg-black"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[#E749F0] font-nb text-base md:text-lg lg:text-xl leading-snug tracking-tight"
      >
        About VSC
      </motion.span>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-12 lg:gap-[72px] px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-full md:max-w-2xl lg:max-w-4xl sm:text-center font-nb font-light text-base md:text-2xl lg:text-3xl leading-tight tracking-tight text-white"
        >
          Vyvo Smart Chain is the first heartbeat-powered blockchain. Designed
          to provide users with access to rewards from the data they generate
          through wearable device usage.
        </motion.p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="relative w-full">
            {/* {View} */}
            <Lottie animationData={animationData} loop />
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[56px] absolute bottom-7 md:bottom-8 lg:bottom-12 left-7 md:left-8 lg:left-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white font-nb font-light text-lg md:text-xl lg:text-2xl leading-tight tracking-tight"
              >
                Total Heartbeats Recorded
              </motion.span>
              <AnimatedCounter
                value={3383937951543}
                className="text-[#E749F0] font-nb font-light text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
              />
            </div>
          </div>
          <div className="relative w-full">
            {/* {View2} */}
            <Lottie animationData={secondAnimationData} loop assetsPath="/lottie/3/images/" />
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[56px] absolute bottom-7 md:bottom-8 lg:bottom-12 left-7 md:left-8 lg:left-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white font-nb font-light text-lg md:text-xl lg:text-2xl leading-tight tracking-tight"
              >
                Data Blocks Validated
              </motion.span>
              <AnimatedCounter
                value={421559254}
                className="text-[#5348D7] font-nb font-light text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVSC;
