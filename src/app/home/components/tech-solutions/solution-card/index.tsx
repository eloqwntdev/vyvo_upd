"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

interface SolutionCardProps {
  reverse?: boolean;
  images: string[];
  title: string;
  description: string | string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  reverse = false,
  images = [""],
  title = "",
  description = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Transform for vertical movement on scroll
  const yTransform = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      ref={cardRef}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      <div
        className={`w-full max-w-[1280px] mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-6 sm:gap-8 md:gap-10 lg:gap-[105px] items-center justify-between`}
      >
        {/* Text Block */}
        <motion.div
          className="w-full md:w-1/2 lg:max-w-[504px] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-10"
          style={{ y: yTransform }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <motion.h3
            className="banner-gradient-text font-nb text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[-1%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 10,
            }}
            transition={{
              duration: 0.6,
              ease: [0.215, 0.61, 0.355, 1],
              delay: 0.1,
            }}
          >
            {title}
          </motion.h3>
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-white font-nb font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-3%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 10,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: 0.2 + index * 0.1,
                }}
              >
                {paragraph}
              </motion.p>
            ))
          ) : (
            <motion.p
              className="text-white font-nb font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-3%]"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 10,
              }}
              transition={{
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
                delay: 0.2,
              }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="relative w-full sm:w-[90%] md:w-1/2 lg:w-[630px] aspect-[630/420] sm:aspect-[630/420] md:aspect-[630/420]"
          style={{ y: yTransform }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.95,
          }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                fill
                src={images[currentIndex]}
                alt={title}
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 630px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <motion.div
              className="flex items-center gap-1.5 absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`size-1.5 sm:size-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-[#FFFFFF80]"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionCard;
