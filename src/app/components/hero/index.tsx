"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SlashIcon } from "@/components/svg";

const waves = [
  {
    size: "380px",
    border: "border-[#FFFFFF0D]",
    opacity: [0.05, 0.1, 0.05],
    delay: 0,
  },
  {
    size: "340px",
    border: "border-[#FFFFFF33]",
    opacity: [0.2, 0.4, 0.2],
    delay: 0.5,
  },
  {
    size: "300px",
    border: "border-[#FFFFFF80]",
    opacity: [0.6, 0.9, 0.6],
    delay: 1,
  },
];

const slides = [
  {
    tags: [
      {
        text: "Insightful",
        position: "top-[9%] left-[-17%] -translate-x-1/2",
        childItem: "responsive-tag",
      },
      {
        text: "Adaptive",
        position: "right-[-33%] top-1/4 -translate-y-1/2",
        childItem: "tab-styles !bg-[#FFFFFF0A]",
      },
      {
        text: "Accurate",
        position: "bottom-[40px] left-[-40px]",
        childItem: "responsive-tag !bg-[#FFFFFF0A]",
      },
    ],
    title: "Precision at Its Core",
  },
  {
    tags: [
      {
        text: "Responsive",
        position: "top-[9%] left-[-17%] -translate-x-1/2",
        childItem: "responsive-tag",
      },
      {
        text: "Seamless",
        position: "right-[-33%] top-1/4 -translate-y-1/2",
        childItem: "tab-styles !bg-[#FFFFFF0A]",
      },
      {
        text: "Fast",
        position: "bottom-[40px] left-[-40px]",
        childItem: "responsive-tag !bg-[#FFFFFF0A]",
      },
    ],
    title: "Streamlined Intelligence",
  },
  {
    tags: [
      {
        text: "Intuitive",
        position: "top-[9%] left-[-17%] -translate-x-1/2",
        childItem: "responsive-tag",
      },
      {
        text: "Evolving",
        position: "right-[-33%] top-1/4 -translate-y-1/2",
        childItem: "tab-styles !bg-[#FFFFFF0A]",
      },
      {
        text: "Predictive",
        position: "bottom-[40px] left-[-40px]",
        childItem: "responsive-tag !bg-[#FFFFFF0A]",
      },
    ],
    title: "Intelligence That\nMoves You Forward",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setCurrentLine((prev) => {
        const nextLine = prev + 1;
        if (nextLine >= 3) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return nextLine;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(lineTimer);
  }, []);

  return (
    <section className="min-h-screen bg-white rounded-t-[24px] relative overflow-hidden">
      <div className="absolute size-[400px] top-[7%] left-[20%] z-10 flex items-center justify-center">
        {/* Floating Items */}
        {/*<AnimatePresence mode="wait">*/}
        {slides[currentIndex].tags.map((item, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            className={`absolute flex items-center gap-2 ${item.position} ${
              index === 1 ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className={`px-[30px] py-3 rounded-[16px] bg-[#FFFFFF14] backdrop-blur-[10px] ${item.childItem}`}
            >
              <span className="text-white text-[16px] leading-[18px] font-nb">
                {item.text}
              </span>
            </div>
            <div
              className={`size-10 rounded-[12px] bg-[#FFFFFF14] backdrop-blur-[10px] grid place-content-center ${item.childItem}`}
            >
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14208 0.977723C8.71412 1.06418 8.24921 1.3575 7.99983 1.69713C7.94133 1.78049 6.18639 4.81867 4.10509 8.45274L0.318115 15.0571L1.52194 15.0663C2.8674 15.0756 2.91974 15.0694 3.3323 14.8656C3.50164 14.7823 3.62479 14.6927 3.79413 14.5198C4.02196 14.2883 4.07738 14.1956 7.79662 7.70864C9.86869 4.09 11.5928 1.08579 11.6236 1.03021L11.6821 0.93141L10.5152 0.934497C9.66856 0.937585 9.29294 0.949935 9.14208 0.977723Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>
        ))}
        {/*</AnimatePresence>*/}

        {/* Waves */}
        {waves.map((wave, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full border-2 ${wave.border}`}
            style={{ width: wave.size, height: wave.size }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: wave.opacity,
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: wave.delay,
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero/hero.webp"
          alt="Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Bottom right content */}
      <div className="absolute bottom-32 right-[100px] z-10 flex flex-col gap-8">
        {/*<AnimatePresence mode="wait">*/}
        <motion.h1
          key={`title-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[56px] leading-[60px] tracking-[-1.68px] text-white font-nb font-light text-right"
        >
          {slides[currentIndex].title}
        </motion.h1>
        {/*</AnimatePresence>*/}

        <div className="flex gap-3 justify-end">
          {[0, 1, 2].map((index) => (
            <div key={index} className="h-[2px] w-[40px] relative">
              {/* Static background line */}
              <div className="absolute inset-0 bg-white/40" />

              {/* Animated fill */}
              <motion.div
                className="absolute inset-0 origin-left"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX:
                    currentLine > index ||
                    (currentLine === index && currentIndex > 0)
                      ? 1
                      : 0,
                  backgroundColor:
                    currentLine > index
                      ? "rgb(148, 168, 237)"
                      : "rgb(255, 255, 255)",
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
