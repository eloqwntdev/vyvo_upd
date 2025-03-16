"use client";

// RoadMapStep.jsx
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const RoadMapStep = ({ title, index, canAnimate, onComplete }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Track when animation is complete
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.99 && canAnimate) {
        onComplete?.();
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, onComplete, canAnimate]);

  // Transform scroll progress values for different elements
  const topLineProgress = useTransform(
    scrollYProgress,
    [0, 0.5],
    canAnimate ? [0, 1] : [0, 0]
  );

  const leftLineProgress = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    canAnimate ? [0, 1] : [0, 0]
  );

  const rightLineProgress = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    canAnimate ? [0, 1] : [0, 0]
  );

  const bottomLineProgress = useTransform(
    scrollYProgress,
    [0.7, 1],
    canAnimate ? [0, 1] : [0, 0]
  );

  // Circle fill values based on scroll position
  const centerCircleFill = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    canAnimate ? [0, 1] : [0, 0]
  );

  const leftCircleFill = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    canAnimate ? [0, 1] : [0, 0]
  );

  const rightCircleFill = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    canAnimate ? [0, 1] : [0, 0]
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col gap-6 items-center justify-center"
    >
      <h3 className="text-white/40 font-nb font-light text-[32px] leading-[36px]">
        {title}
      </h3>
      <div className="max-w-[1280px] mx-auto w-full flex">
        <div className="flex flex-col gap-8 shrink-0">
          <div className="max-w-[413px] h-[312px] bg-[#8e8e8e] rounded-lg"></div>
          <p className="max-w-[387px] text-white font-nb font-light text-[20px] leading-[24px]">
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </p>
        </div>

        <div className="relative w-full h-[311px] bg-black flex items-center">
          {/* Top vertical line with fill effect - top to bottom */}
          <div className="absolute top-[-6%] left-1/2 h-[176px] w-px bg-gray-500/30 transform -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: topLineProgress,
              }}
            />
          </div>

          {/* Horizontal Line with fill effect from center */}
          <div className="absolute left-0 w-full h-px bg-gray-500/30">
            {/* Left half of horizontal line */}
            <motion.div
              className="absolute right-1/2 top-0 h-full bg-gray-500 origin-right"
              style={{
                width: "50%",
                scaleX: leftLineProgress,
              }}
            />
            {/* Right half of horizontal line */}
            <motion.div
              className="absolute left-1/2 top-0 h-full bg-gray-500 origin-left"
              style={{
                width: "50%",
                scaleX: rightLineProgress,
              }}
            />

            {/* Left Circle with fill effect */}
            <div className="absolute left-0 top-1/2 w-3 h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{ opacity: leftCircleFill }}
              />
            </div>

            {/* Center Circle with fill effect */}
            <div className="bg-black absolute rounded-full left-1/2 top-1/2 size-5 z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-500/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gray-500 rounded-full"
                  style={{ opacity: centerCircleFill }}
                />
              </div>
            </div>

            {/* Right Circle with fill effect */}
            <div className="absolute right-0 top-1/2 w-3 h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{ opacity: rightCircleFill }}
              />
            </div>
          </div>

          {/* Bottom vertical line with fill effect */}
          <div className="absolute bottom-[-48%] left-1/2 h-[296px] w-px bg-gray-500/30 transform -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: bottomLineProgress,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 shrink-0">
          <div className="max-w-[413px] h-[312px] bg-[#8e8e8e] rounded-lg"></div>
          <p className="max-w-[387px] text-white font-nb font-light text-[20px] leading-[24px]">
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadMapStep;
