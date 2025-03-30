"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";

const KeyMetricsDisplay = () => {
  const [progress, setProgress] = useState(0);

  const metrics = [
    {
      number: "100,000+",
      label: "Active Users",
      image: "/homepage/slider/card1.webp",
    },
    { number: "15+", label: "Countries", image: "/homepage/slider/card2.webp" },
    {
      number: "10+",
      label: "Years Of Expertise",
      image: "/homepage/slider/card3.webp",
    },
    {
      number: "3.4+",
      label: "Trillion Heartbeats Recorded",
      image: "/homepage/slider/card4.webp",
    },
    {
      number: "420+",
      label: "Million Data Blocks Validated",
      image: "/homepage/slider/card5.webp",
    },
    {
      number: "100,000+",
      label: "Active Users",
      image: "/homepage/slider/card1.webp",
    },
    { number: "15+", label: "Countries", image: "/homepage/slider/card2.webp" },
    {
      number: "10+",
      label: "Years Of Expertise",
      image: "/homepage/slider/card3.webp",
    },
    {
      number: "3.4+",
      label: "Trillion Heartbeats Recorded",
      image: "/homepage/slider/card4.webp",
    },
    {
      number: "420+",
      label: "Million Data Blocks Validated",
      image: "/homepage/slider/card5.webp",
    },
    {
      number: "100,000+",
      label: "Active Users",
      image: "/homepage/slider/card1.webp",
    },
    { number: "15+", label: "Countries", image: "/homepage/slider/card2.webp" },
    {
      number: "10+",
      label: "Years Of Expertise",
      image: "/homepage/slider/card3.webp",
    },
    {
      number: "3.4+",
      label: "Trillion Heartbeats Recorded",
      image: "/homepage/slider/card4.webp",
    },
    {
      number: "420+",
      label: "Million Data Blocks Validated",
      image: "/homepage/slider/card5.webp",
    },
  ];

  return (
    <section className="bg-[#000000] py-8 md:py-20">
      <div className="flex flex-col gap-8 md:gap-[60px] w-full">
        <h2 className="text-white text-left md:text-center font-nb font-light text-[20px] md:text-[48px] leading-[24px] md:leading-[56px] tracking-[-3%] px-4">
          Numbers That Define Us
        </h2>

        <div className="relative w-full">
          <Swiper
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            freeMode={{
              enabled: false,
              momentum: false,
            }}
            className="w-full !px-4 md:!px-20"
            breakpoints={{
              768: {
                freeMode: {
                  enabled: true,
                  momentum: true,
                },
                spaceBetween: 24,
              },
            }}
            slideToClickedSlide={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            speed={800}
            onSlideChange={(swiper) => {
              const progress = swiper.progress;
              setProgress(progress);
            }}
          >
            {metrics.map((metric, index) => (
              <SwiperSlide
                key={index}
                className="!w-[270px] !h-[350px] md:!w-[413px] md:!h-[500px]"
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                  <Image
                    src={metric.image}
                    alt={metric.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 270px, 413px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="flex flex-col gap-1 md:gap-2 absolute bottom-5 left-5 md:bottom-8 md:left-8">
                    <span className="text-white text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-3%]">
                      {metric.number}
                    </span>
                    <span className="text-white text-[16px] md:text-[24px] leading-[20px] md:leading-[32px]">
                      {metric.label}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress bar - only visible on mobile */}
          <div className="md:hidden w-full px-4 mt-6">
            <div className="w-full h-[1px] bg-[#D1D1D1] relative">
              <div
                className="absolute top-0 left-0 h-full bg-[#2C60DD] transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsDisplay;
