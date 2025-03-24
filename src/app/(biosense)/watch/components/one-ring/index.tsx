"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const OneRing = () => {
  const solutionCards = [
    "/wearables-img/vyvo-smart/slider1.webp",
    "/wearables-img/vyvo-smart/slider2.webp",
    "/wearables-img/vyvo-smart/slider3.webp",
    "/wearables-img/vyvo-smart/slider4.webp",
    "/wearables-img/vyvo-smart/slider5.webp",
    "/wearables-img/vyvo-smart/slider6.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutionCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [solutionCards.length]);

  return (
    <section className="py-12 md:py-[120px] bg-black flex flex-col md:flex-row items-center justify-center md:gap-[129px] px-4 md:px-8">
      {/* Mobile image section - shows at top on mobile */}
      <div className="wearables-card-gradient w-full max-w-[598px] rounded-[24px] relative overflow-hidden p-4 mb-6 md:hidden">
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
              src={solutionCards[currentIndex]}
              width={598}
              height={628}
              alt={"Vyvo Smart Device"}
              className="mx-auto"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
          {solutionCards.map((_, index) => (
            <div
              key={index}
              className={`size-2 rounded-full ${
                index === currentIndex ? "bg-[#fff]" : "bg-[#FFFFFF80]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Text content */}
      <div className="max-w-[530px] w-full flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="font-nb font-light text-white text-[32px] leading-[40px] md:text-[56px] md:tracking-[-1.4px] md:leading-[64px]">
              It's the One Ring for{" "}
              <span className="banner-gradient-text">Your Wellness</span> Quest!
            </h2>
            <p className="text-white font-nb text-[16px] leading-[20px] md:tracking-wider">
              The shockingly light, amazingly thin, and utterly powerful
              BioSenseTM Ring transforms the way you think about wearable
              devices.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:max-w-[350px]">
          <p className="text-white font-nb text-[16px] leading-[20px]">
            Download the Vyvo Smart App from the Apple App Store or Google Play
            Store.
          </p>
          <div className="flex gap-4 md:gap-5">
            <div className="w-full bg-[#77A9E829] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]">
              <Image src={"/google.svg"} alt={""} width={32} height={32} />
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
                alt={""}
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

      {/* Desktop image section - hidden on mobile */}
      <div className="wearables-card-gradient w-full max-w-[598px] rounded-[24px] relative overflow-hidden p-4 hidden md:block">
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
              src={solutionCards[currentIndex]}
              width={598}
              height={628}
              alt={"Vyvo Smart Device"}
              className="mx-auto"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
          {solutionCards.map((_, index) => (
            <div
              key={index}
              className={`size-2 rounded-full ${
                index === currentIndex ? "bg-[#fff]" : "bg-[#FFFFFF80]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneRing;
