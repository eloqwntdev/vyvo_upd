"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`w-full flex flex-col-reverse gap-6 md:gap-[105px] ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center lg:justify-between`}
    >
      {/* Text Block */}
      <div className="w-full lg:max-w-[504px] flex flex-col gap-4 md:gap-6 lg:gap-10">
        <h3 className="banner-gradient-text font-nb text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[-1%]">
          {title}
        </h3>
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p
              key={index}
              className="text-white font-nb font-light text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-3%]"
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-white font-nb font-light text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-3%]">
            {description}
          </p>
        )}
      </div>

      {/* Image Block */}
      <div className="w-full lg:max-w-[630px] relative h-[288px] md:h-[350px] lg:h-[443px] rounded-[20px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              fill
              src={images[currentIndex]}
              alt={title}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 630px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <div className="flex items-center gap-1.5 absolute bottom-6 left-1/2 -translate-x-1/2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`size-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-[#FFFFFF80]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;
