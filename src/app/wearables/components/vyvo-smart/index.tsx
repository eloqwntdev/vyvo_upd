"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const VyvoSmart = () => {
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
    <section className="py-[120px] flex items-center justify-center gap-[129px]">
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

      <div className="max-w-[424px] w-full flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 max-w-[399px] w-full">
            <h2 className="banner-gradient-text font-nb font-light text-[56px] tracking-[-1.4px] leading-[64px]">
              Vyvo Smart App
            </h2>
            <p className="text-black font-nb text-[16px] leading-[20px] tracking-wider">
              All you need in one place. Whichever wearable you choose, the Vyvo
              Smart App collects your measurements so that you can track your
              progress over time and use this added awareness to reach goals for
              personal improvement. Use the app to better understand and even
              improve your lifestyle habits for a better life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[64px] gap-y-[24px]">
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 bg-[#77A9E829] main-shadow flex items-center justify-center rounded-[16px]">
                <Image
                  src={"wearables-img/vyvo-smart/icons/icon1.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-black font-nb text-[16px] leading-[20px]">
                Sleep, Activity, and Energy Tracking
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 bg-[#77A9E829] main-shadow flex items-center justify-center rounded-[16px]">
                <Image
                  src={"wearables-img/vyvo-smart/icons/icon2.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-black font-nb text-[16px] leading-[20px]">
                Vital Sign Monitoring
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 bg-[#77A9E829] main-shadow flex items-center justify-center rounded-[16px]">
                <Image
                  src={"wearables-img/vyvo-smart/icons/icon3.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-black font-nb text-[16px] leading-[20px]">
                Blood Pressure and Oxygen Tracking
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 bg-[#77A9E829] main-shadow flex items-center justify-center rounded-[16px]">
                <Image
                  src={"wearables-img/vyvo-smart/icons/icon4.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-black font-nb text-[16px] leading-[20px]">
                Weekly Health Index
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-[350px] w-full">
          <p className="text-black font-nb text-[16px] leading-[20px]">
            Download the Vyvo Smart App from the Apple App Store or Google Play
            Store.
          </p>
          <div className="flex gap-5">
            <div className="max-w-[166px] w-full bg-[#77A9E829] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]">
              <Image src={"/google.svg"} alt={""} width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-black font-nb font-normal text-[12px] leading-[16px]">
                  Get it on
                </span>
                <span className="text-black font-nb font-medium text-[16px] leading-[18px]">
                  Google Play
                </span>
              </div>
            </div>
            <div className="max-w-[166px] w-full bg-[#77A9E829] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]">
              <Image src={"/apple.svg"} alt={""} width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-black font-nb font-normal text-[12px] leading-[16px]">
                  Get it on
                </span>
                <span className="text-black font-nb font-medium text-[16px] leading-[18px]">
                  App Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VyvoSmart;
