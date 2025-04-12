"use client";

// RoadMapStep.jsx
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

interface RoadMapStepProps {
  title: string;
  index: number;
  canAnimate: boolean;
  onComplete?: () => void;
  isCompleted?: boolean;
  previousStepCompleted?: boolean;
}

const RoadMapStep: React.FC<RoadMapStepProps> = ({
  title,
  index,
  canAnimate,
  onComplete,
  isCompleted = false,
  previousStepCompleted = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const centerBlockRef = useRef<HTMLDivElement>(null);
  const rightBlockRef = useRef<HTMLDivElement>(null);

  const isLeftInView = useInView(leftBlockRef, { once: false, amount: 0.5 });
  const isCenterInView = useInView(centerBlockRef, {
    once: false,
    amount: 0.5,
  });
  const isRightInView = useInView(rightBlockRef, { once: false, amount: 0.5 });

  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Start animation when conditions are met
  useEffect(() => {
    if (
      !canAnimate ||
      isCompleted ||
      !previousStepCompleted ||
      !isCenterInView ||
      isAnimating
    )
      return;

    const startAnimation = async () => {
      setIsAnimating(true);

      // Animate from 0 to 7 (7 steps in total)
      await animate(0, 7, {
        duration: 3.5, // Total animation duration
        ease: [0.43, 0.13, 0.23, 0.96],
        onUpdate: (latest) => {
          setAnimationProgress(latest);
        },
        onComplete: () => {
          setIsAnimating(false);
          onComplete?.();
        },
      });
    };

    startAnimation();
  }, [
    canAnimate,
    isCompleted,
    previousStepCompleted,
    isCenterInView,
    isAnimating,
    onComplete,
  ]);

  // Calculate individual element progress based on animation step
  const getProgress = (stepIndex: number) => {
    if (isCompleted) return 1;
    const progress = Math.max(0, Math.min(1, animationProgress - stepIndex));
    return progress;
  };

  const customEase = [0.43, 0.13, 0.23, 0.96] as const;

  return (
    <section
      ref={containerRef}
      className={`flex flex-col gap-4 sm:gap-6 items-center justify-center transition-all duration-700 mb-16 sm:mb-24 lg:mb-32 ${
        canAnimate && previousStepCompleted ? "opacity-100" : "opacity-30"
      }`}
    >
      <h3 className="text-white/40 font-nb font-light text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-tight lg:leading-[36px]">
        {title}
      </h3>

      {/* Mobile layout - stacked vertically */}
      <div className="md:hidden w-full px-4 sm:px-6">
        <div ref={leftBlockRef} className="flex flex-col gap-4 sm:gap-6 mb-8">
          <motion.div
            className="w-full h-[200px] sm:h-[250px] bg-[#8e8e8e] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLeftInView || isCompleted ? 1 : 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          ></motion.div>
          <motion.p
            className="text-white font-nb font-light text-sm sm:text-base leading-[1.4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLeftInView || isCompleted ? 1 : 0,
              y: isLeftInView || isCompleted ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
          >
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </motion.p>
        </div>

        <div
          ref={centerBlockRef}
          className="relative w-full h-[150px] bg-black flex items-center my-12"
        >
          {/* Vertical line */}
          <div className="absolute h-full w-px left-1/2 bg-gray-500/30 transform -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: isCenterInView || isCompleted ? 1 : 0,
              }}
              transition={{ duration: 1.5, ease: customEase }}
            />
          </div>
        </div>

        <div ref={rightBlockRef} className="flex flex-col gap-4 sm:gap-6">
          <motion.div
            className="w-full h-[200px] sm:h-[250px] bg-[#8e8e8e] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isRightInView || isCompleted ? 1 : 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          ></motion.div>
          <motion.p
            className="text-white font-nb font-light text-sm sm:text-base leading-[1.4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isRightInView || isCompleted ? 1 : 0,
              y: isRightInView || isCompleted ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
          >
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </motion.p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex max-w-[1280px] mx-auto w-full px-4 lg:px-8">
        <div
          ref={leftBlockRef}
          className="flex flex-col gap-6 lg:gap-8 shrink-0 flex-1"
        >
          <motion.div
            className="w-full max-w-[413px] h-[250px] lg:h-[312px] bg-[#8e8e8e] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLeftInView || isCompleted ? 1 : 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          ></motion.div>
          <motion.p
            className="w-full max-w-[387px] text-white font-nb font-light text-base lg:text-[20px] leading-snug lg:leading-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLeftInView || isCompleted ? 1 : 0,
              y: isLeftInView || isCompleted ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
          >
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </motion.p>
        </div>

        <div
          ref={centerBlockRef}
          className="relative w-full h-[250px] lg:h-[311px] bg-black flex items-center flex-1"
        >
          {/* Top vertical line */}
          <div className="absolute top-[-6%] left-1/2 h-[176px] w-px bg-gray-500/30 transform -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: isCenterInView || isCompleted ? getProgress(0) : 0,
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />
          </div>

          {/* Horizontal Line */}
          <div className="absolute left-0 w-full h-px bg-gray-500/30">
            {/* Center Circle */}
            <div className="bg-black absolute rounded-full left-1/2 top-1/2 size-4 md:size-5 z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-500/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gray-500 rounded-full"
                  style={{
                    opacity: isCenterInView || isCompleted ? getProgress(1) : 0,
                  }}
                  transition={{ duration: 0.5, ease: customEase }}
                />
              </div>
            </div>

            {/* Left half */}
            <motion.div
              className="absolute right-1/2 top-0 h-full bg-gray-500 origin-right"
              style={{
                width: "50%",
                scaleX: isCenterInView || isCompleted ? getProgress(2) : 0,
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />

            {/* Left Circle */}
            <div className="absolute left-0 top-1/2 w-2 h-2 md:w-3 md:h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{
                  opacity: isCenterInView || isCompleted ? getProgress(3) : 0,
                }}
                transition={{ duration: 0.5, ease: customEase }}
              />
            </div>

            {/* Right half */}
            <motion.div
              className="absolute left-1/2 top-0 h-full bg-gray-500 origin-left"
              style={{
                width: "50%",
                scaleX: isCenterInView || isCompleted ? getProgress(4) : 0,
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />

            {/* Right Circle */}
            <div className="absolute right-0 top-1/2 w-2 h-2 md:w-3 md:h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{
                  opacity: isCenterInView || isCompleted ? getProgress(5) : 0,
                }}
                transition={{ duration: 0.5, ease: customEase }}
              />
            </div>
          </div>

          {/* Bottom vertical line */}
          <div className="absolute bottom-[-48%] left-1/2 h-[296px] w-px bg-gray-500/30 transform -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: isCenterInView || isCompleted ? getProgress(6) : 0,
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />
          </div>
        </div>

        <div
          ref={rightBlockRef}
          className="flex flex-col gap-6 lg:gap-8 shrink-0 flex-1"
        >
          <motion.div
            className="w-full max-w-[413px] h-[250px] lg:h-[312px] bg-[#8e8e8e] rounded-lg ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isRightInView || isCompleted ? 1 : 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          ></motion.div>
          <motion.p
            className="w-full max-w-[387px] text-white font-nb font-light text-base lg:text-[20px] leading-snug lg:leading-[24px] ml-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isRightInView || isCompleted ? 1 : 0,
              y: isRightInView || isCompleted ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
          >
            Release of enhanced health metrics and initial integrations with
            wearable devices like Amazfit and Samsung Watch.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default RoadMapStep;
