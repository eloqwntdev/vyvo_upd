"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface OneRingProps {
  title: string;
  highlightedText: string;
  description: string;
  appDescription?: string;
  images: string[];
  productName: string;
  imagePosition?: "left" | "right";
}

const OneRing: React.FC<OneRingProps> = ({
  title,
  highlightedText,
  description,
  appDescription = "Download the Vyvo Smart App from the Apple App Store or Google Play Store.",
  images,
  productName,
  imagePosition = "right",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const SliderComponent = (
    <div className="wearables-card-gradient w-full max-w-[598px] rounded-[24px] relative overflow-hidden p-4">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Image
            src={images[currentIndex]}
            width={598}
            height={628}
            alt={`${productName} Device`}
            className="mx-auto"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`size-2 rounded-full ${
              index === currentIndex ? "bg-[#fff]" : "bg-[#FFFFFF80]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );

  const TextContent = (
    <div className="max-w-[530px] w-full flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="font-nb font-light text-white text-[32px] leading-[40px] md:text-[56px] md:tracking-[-1.4px] md:leading-[64px]">
            {title}{" "}
            <span className="banner-gradient-text">{highlightedText}</span>{" "}
            Quest!
          </h2>
          <p className="text-white font-nb text-[16px] leading-[20px] md:tracking-wider max-w-[387px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 w-full md:max-w-[350px]">
        <p className="text-white font-nb text-[16px] leading-[20px]">
          {appDescription}
        </p>
        <div className="flex gap-4 md:gap-5">
          <div className="w-full bg-[#77A9E829] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]">
            <Image
              src={"/google.svg"}
              alt={"Google Play"}
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <span className="text-white font-nb font-normal text-[12px] leading-[16px]">
                Get it on
              </span>
              <span className="text-white font-nb font-medium text-[16px] leading-[18px]">
                Google Play
              </span>
            </div>
          </div>
          <div className="w-full bg-[#77A9E829] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]">
            <Image
              src={"/apple.svg"}
              className="invert"
              alt={"App Store"}
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <span className="text-white font-nb font-normal text-[12px] leading-[16px]">
                Get it on
              </span>
              <span className="text-white font-nb font-medium text-[16px] leading-[18px]">
                App Store
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-[120px] bg-black flex flex-col md:flex-row items-center justify-center md:gap-[129px] px-4 md:px-8">
      {/* Mobile view - always image on top */}
      <div className="mb-6 md:hidden">{SliderComponent}</div>

      {/* Desktop view - order based on imagePosition prop */}
      {imagePosition === "left" ? (
        <>
          <div className="hidden md:block">{SliderComponent}</div>
          {TextContent}
        </>
      ) : (
        <>
          {TextContent}
          <div className="hidden md:block">{SliderComponent}</div>
        </>
      )}
    </section>
  );
};

export default OneRing;
