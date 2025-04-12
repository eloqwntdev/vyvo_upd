"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface StepBlockProps {
  title: string;
  description: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  totalSteps: number;
}

const StepBlock = ({
  title,
  description,
  scrollYProgress,
  index,
  totalSteps,
}: StepBlockProps) => {
  const segmentSize = 1 / totalSteps;
  const start = 0;
  const end = 1;

  const textColor = useTransform(
    scrollYProgress,
    [index * segmentSize, (index + 0.5) * segmentSize],
    ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 1)"]
  );

  const dotColor = useTransform(
    scrollYProgress,
    [index * segmentSize, (index + 0.2) * segmentSize],
    ["rgba(255, 255, 255, 0.3)", "#2A5FDD"]
  );

  const lineProgress = useTransform(
    scrollYProgress,
    [index * segmentSize, (index + 0.8) * segmentSize],
    [0, 1],
    {
      clamp: true,
    }
  );

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-[70px] justify-between relative">
      <div className="max-w-full md:max-w-[524px] w-full relative">
        <motion.h3
          style={{ color: textColor }}
          className="font-nb font-light text-[32px] md:text-[48px] leading-[36px] md:leading-[52px] tracking-[-1px] md:tracking-[-1.4px] mb-4 md:mb-0"
        >
          {title}
        </motion.h3>

        {/* Mobile description for better readability */}
        <motion.p
          style={{ color: textColor }}
          className="font-nb font-light text-[14px] md:hidden leading-[18px] tracking-[-0.3px] mb-8"
        >
          {description}
        </motion.p>

        <div className="absolute left-[-24px] md:left-auto md:-right-0 top-0 md:top-1/2 h-full md:h-auto md:-translate-y-1/2 flex flex-col gap-2 items-center">
          <div className="relative w-[1px] h-[180px]">
            <div className="absolute inset-0 bg-[#FFFFFF1A]" />
            <motion.div
              style={{
                scaleY: lineProgress,
                originY: 0,
                background: "linear-gradient(180deg, #2A5FDD 0%, #2A5FDD 100%)",
              }}
              className="absolute top-0 w-full h-full"
            />
          </div>

          <motion.div
            style={{ backgroundColor: dotColor }}
            className="size-4 rounded-full"
          />
        </div>
      </div>

      {/* Desktop description */}
      <motion.p
        style={{ color: textColor }}
        className="hidden md:block font-nb font-light text-[20px] leading-[28px] tracking-[-0.6px] max-w-[480px]"
      >
        {description}
      </motion.p>
    </div>
  );
};

const Stepper = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      title: "Innovation",
      description:
        "Vyvo drives innovation at the intersection of Web3, Wearable Technology, and AI - smarter living with secure, personalized, and adaptive solutions. Vyvo believes progress comes from technology empowering people to take control of their health, privacy, and lives.",
    },
    {
      title: "Human - Centered",
      description:
        "From award-winning devices like BioSense Bands to pioneering platforms like VAI OS, we're all about precision and privacy. Vyvo stands apart, with unwavering dedication to user-centric design. lives.",
    },
    {
      title: "Quality",
      description:
        "We offer solutions that seamlessly enhance daily life without compromising on style. Ease of use and cutting-edge components ensure that each Vyvo Device and Platform extends beyond industry standards.",
    },
    {
      title: "Social Proof",
      description:
        "Vyvo's community is at the forefront of technology and wellness, actively developing solutions that both adapt and shape the future. We are pioneering a path forward to a healthier and more connected world for everyone.",
    },
  ];

  return (
    <section
      id="stepper"
      className="py-10 md:py-20 flex flex-col gap-8 md:gap-16 items-center justify-center bg-black md:min-h-screen px-6 md:px-4"
    >
      <div className="max-w-[714px] w-full">
        <h2 className="font-nb font-light text-[32px] md:text-[56px] leading-[36px] md:leading-[50px] tracking-[-1px] md:tracking-[-1.7px] text-white text-center">
          Innovating health through collaboration and care.
        </h2>
      </div>

      <div
        ref={containerRef}
        className="max-w-[1080px] flex flex-col gap-[60px] md:gap-[88px] w-full mx-auto pl-8 md:pl-0"
      >
        {steps.map((step, index) => (
          <StepBlock
            key={step.title}
            title={step.title}
            description={step.description}
            scrollYProgress={scrollYProgress}
            index={index}
            totalSteps={steps.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Stepper;
