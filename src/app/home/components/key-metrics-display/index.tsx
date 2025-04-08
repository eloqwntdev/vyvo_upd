"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";

// Define type for metric item
interface MetricItem {
  number: string;
  label: string;
  image: string;
}

// Define type for number and suffix parsing result
interface ParsedNumber {
  numericValue: number;
  suffix: string;
}

const KeyMetricsDisplay = () => {
  const [progress, setProgress] = useState(0);
  // Keep track of which indices have completed animations
  const [animatedIndices, setAnimatedIndices] = useState<Set<number>>(
    new Set()
  );
  // Store final values for each metric to prevent resetting
  const [finalValues, setFinalValues] = useState<Record<number, string>>({});

  // Parse the numeric part and any suffix from strings like "100,000+" or "3.4+"
  const parseNumberAndSuffix = (value: string): ParsedNumber => {
    const match = value.match(/^([\d,\.]+)(.*)$/);
    if (match) {
      let numericPart = match[1].replace(/,/g, "");
      const suffix = match[2] || "";
      return { numericValue: parseFloat(numericPart), suffix };
    }
    return { numericValue: 0, suffix: "" };
  };

  // Format number with commas for thousands separator
  const formatWithCommas = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const metrics: MetricItem[] = [
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

  // Generate final display values for all metrics ahead of time
  useEffect(() => {
    const values: Record<number, string> = {};
    metrics.forEach((metric, index) => {
      // Extract unique index based on the first occurrence of each number
      const uniqueIndex = metrics.findIndex((m) => m.number === metric.number);
      if (!(uniqueIndex in values)) {
        const { numericValue, suffix } = parseNumberAndSuffix(metric.number);
        const isDecimal = metric.number.includes(".");
        const decimalPlaces = isDecimal
          ? metric.number.split(".")[1].replace(/\D/g, "").length
          : 0;

        let displayValue: string;
        if (isDecimal) {
          displayValue = numericValue.toFixed(decimalPlaces);
        } else {
          displayValue = formatWithCommas(numericValue);
        }
        values[uniqueIndex] = displayValue + suffix;
      }
    });
    setFinalValues(values);
  }, []);

  interface NumberCounterProps {
    value: string;
    index: number;
  }

  const NumberCounter: React.FC<NumberCounterProps> = ({ value, index }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { amount: 0.5 }); // Removed once: true
    const [counter, setCounter] = useState(0);

    // Find the first occurrence of this number in the metrics array
    const uniqueIndex = metrics.findIndex((metric) => metric.number === value);
    const isAnimated = animatedIndices.has(uniqueIndex);

    const { numericValue, suffix } = parseNumberAndSuffix(value);
    const isDecimal = value.includes(".");
    const decimalPlaces = isDecimal
      ? value.split(".")[1].replace(/\D/g, "").length
      : 0;

    // If this item has been animated before, show the final value immediately
    useEffect(() => {
      if (isAnimated) {
        setCounter(numericValue);
      }
    }, [isAnimated, numericValue]);

    // Handle animation when element comes into view
    useEffect(() => {
      if (isInView && !isAnimated) {
        // Animate from 0 to the target number
        let startTime: number | null = null;
        const duration = 2000; // 2 seconds

        const animateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Use easeOutExpo for more natural counting effect
          const easeOutProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = numericValue * easeOutProgress;

          // Update with proper decimal places if needed
          if (isDecimal) {
            setCounter(parseFloat(currentValue.toFixed(decimalPlaces)));
          } else {
            setCounter(Math.floor(currentValue));
          }

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            // Mark this index as animated when complete
            setAnimatedIndices((prev) => {
              const updated = new Set(prev);
              updated.add(uniqueIndex);
              return updated;
            });
          }
        };

        requestAnimationFrame(animateCount);
      }
    }, [
      isInView,
      numericValue,
      isAnimated,
      isDecimal,
      decimalPlaces,
      uniqueIndex,
    ]);

    // Show final value immediately if already animated
    if (isAnimated && finalValues[uniqueIndex]) {
      return (
        <span
          ref={ref}
          className="text-white text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-3%]"
        >
          {finalValues[uniqueIndex]}
        </span>
      );
    }

    // Format the counter value properly
    let displayValue: string;
    if (isDecimal) {
      displayValue = counter.toFixed(decimalPlaces);
    } else {
      displayValue = formatWithCommas(counter);
    }

    return (
      <span
        ref={ref}
        className="text-white text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-3%]"
      >
        {displayValue}
        {suffix}
      </span>
    );
  };

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
                    <NumberCounter value={metric.number} index={index} />
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
