"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
const VyvoSmart = () => {
  const solutionCards = [
    "/wearables-img/vyvo-smart/card1.png",
    "/wearables-img/vyvo-smart/card2.png",
    "/wearables-img/vyvo-smart/card3.png",
    "/wearables-img/vyvo-smart/card4.png",
    "/wearables-img/vyvo-smart/card5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const contentRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);

  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const areFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isDownloadInView = useInView(downloadRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutionCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [solutionCards.length]);

  return (
    <section className="py-10 bg-white md:py-[120px] px-4 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[129px]">
      <div className="wearables-card-gradient w-full max-w-[598px] rounded-[24px] relative overflow-hidden p-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {solutionCards.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  src={image}
                  width={2392}
                  height={2512}
                  alt={`Device ${index + 1}`}
                  className="mx-auto"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
          style={{ transition: "opacity 0.3s ease" }}
        >
          {solutionCards.map((_, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className="cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`size-2 rounded-full transform transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-full md:max-w-[480px] w-full flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-6 md:gap-10">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-10 max-w-full md:max-w-[399px] w-full"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="banner-gradient-text font-nb font-light text-[36px] sm:text-[42px] md:text-[56px] tracking-[-1.4px] leading-[1.2] md:leading-[64px]"
            >
              Vyvo Smart App
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[1.4] md:leading-[20px] tracking-[-0.5px]"
            >
              All you need in one place. Whichever wearable you choose, the Vyvo
              Smart App collects your measurements so that you can track your
              progress over time and use this added awareness to reach goals for
              personal improvement. Use the app to better understand and even
              improve your lifestyle habits for a better life.
            </motion.p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0 }}
            animate={areFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-[64px] md:gap-y-[24px]"
          >
            {[
              {
                icon: "wearables-img/vyvo-smart/icons/icon1.svg",
                text: "Sleep, Activity, and Energy Tracking",
              },
              {
                icon: "wearables-img/vyvo-smart/icons/icon2.svg",
                text: "Vital Sign Monitoring",
              },
              {
                icon: "wearables-img/vyvo-smart/icons/icon3.svg",
                text: "Blood Pressure and Oxygen Tracking",
              },
              {
                icon: "wearables-img/vyvo-smart/icons/icon4.svg",
                text: "Weekly Health Index",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={
                  areFeaturesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    areFeaturesInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="size-10 md:size-12 shrink-0 bg-[#77A9E829] main-shadow flex items-center justify-center rounded-[16px]"
                >
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt={""}
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>

                <p className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[1.4] md:leading-[20px]  tracking-[-0.5px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          ref={downloadRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isDownloadInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6 md:gap-8 max-w-full md:max-w-[350px] w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isDownloadInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-black font-light font-nb text-[14px] md:text-[16px] leading-[1.4] md:leading-[20px]"
          >
            Download the Vyvo Smart App from the Apple App Store or Google Play
            Store.
          </motion.p>
          <div className="flex flex-row gap-4 md:gap-5">
            <div className="relative z-10 max-w-[166px] w-full">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.vyvo.vyvosmart"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isDownloadInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:max-w-[166px] relative z-20 bg-[#77A9E829] hover:bg-[#94a7ed28] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]"
              >
                <img
                  loading="lazy"
                  src={"/google.svg"}
                  alt={""}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="flex flex-col items-start">
                  <span className="text-black font-nb font-light text-[10px] md:text-[12px] leading-[1.4] md:leading-[16px]">
                    Get it on
                  </span>
                  <span className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[1.2] md:leading-[18px]">
                    Google Play
                  </span>
                </div>
              </motion.a>
              <div className="glow-effect transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="relative z-10 max-w-[166px] w-full">
              <motion.a
                href="https://apps.apple.com/es/app/vyvo-smart/id1462639377"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isDownloadInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:max-w-[166px] relative z-20 bg-[#77A9E829] hover:bg-[#94a7ed28] px-4 py-2 gap-2 main-shadow flex items-center justify-center rounded-[16px]"
              >
                <img
                  loading="lazy"
                  src={"/apple.svg"}
                  alt={""}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="flex flex-col items-start">
                  <span className="text-black font-nb font-light text-[10px] md:text-[12px] leading-[1.4] md:leading-[16px]">
                    Get it on
                  </span>
                  <span className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[1.2] md:leading-[18px]">
                    App Store
                  </span>
                </div>
              </motion.a>
              <div className="glow-effect transition-all duration-300 ease-in-out"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VyvoSmart;
