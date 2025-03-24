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
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Start animation when conditions are met
  useEffect(() => {
    if (
      !canAnimate ||
      isCompleted ||
      !previousStepCompleted ||
      !isInView ||
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
    isInView,
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
      className={`flex flex-col gap-6 items-center justify-center transition-all duration-700 ${
        canAnimate && previousStepCompleted ? "opacity-100" : "opacity-30"
      }`}
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
          {/* Top vertical line */}
          <div className="absolute top-[-6%] left-1/2 h-[176px] w-px bg-gray-500/30 transform -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gray-500 origin-top"
              style={{
                height: "100%",
                scaleY: getProgress(0),
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />
          </div>

          {/* Horizontal Line */}
          <div className="absolute left-0 w-full h-px bg-gray-500/30">
            {/* Center Circle */}
            <div className="bg-black absolute rounded-full left-1/2 top-1/2 size-5 z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-500/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gray-500 rounded-full"
                  style={{ opacity: getProgress(1) }}
                  transition={{ duration: 0.5, ease: customEase }}
                />
              </div>
            </div>

            {/* Left half */}
            <motion.div
              className="absolute right-1/2 top-0 h-full bg-gray-500 origin-right"
              style={{
                width: "50%",
                scaleX: getProgress(2),
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />

            {/* Left Circle */}
            <div className="absolute left-0 top-1/2 w-3 h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{ opacity: getProgress(3) }}
                transition={{ duration: 0.5, ease: customEase }}
              />
            </div>

            {/* Right half */}
            <motion.div
              className="absolute left-1/2 top-0 h-full bg-gray-500 origin-left"
              style={{
                width: "50%",
                scaleX: getProgress(4),
              }}
              transition={{ duration: 0.5, ease: customEase }}
            />

            {/* Right Circle */}
            <div className="absolute right-0 top-1/2 w-3 h-3 bg-gray-500/30 rounded-full transform -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-full"
                style={{ opacity: getProgress(5) }}
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
                scaleY: getProgress(6),
              }}
              transition={{ duration: 0.5, ease: customEase }}
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
