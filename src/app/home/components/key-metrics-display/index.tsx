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
  // State to trigger the animation once
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // State to track if the animation has finished
  const [animationComplete, setAnimationComplete] = useState(false);
  // Store the current animated values during the animation
  const [currentAnimatedValues, setCurrentAnimatedValues] = useState<
    Map<string, number>
  >(new Map());
  // Store final pre-calculated display values
  const [finalValues, setFinalValues] = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  // Use useInView on the section, trigger only once
  const isSectionInView = useInView(sectionRef, { amount: 0.3, once: true });

  // Parse the numeric part and any suffix
  const parseNumberAndSuffix = (value: string): ParsedNumber => {
    const match = value.match(/^([\d,\.]+)(.*)$/);
    if (match) {
      let numericPart = match[1].replace(/,/g, "");
      const suffix = match[2] || "";
      return { numericValue: parseFloat(numericPart), suffix };
    }
    return { numericValue: 0, suffix: "" };
  };

  // Format number with commas
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
    // Duplicates for looping slider
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

  // Pre-calculate final display values for unique metric numbers
  useEffect(() => {
    const uniqueMetrics = Array.from(new Set(metrics.map((m) => m.number)));
    const finalVals: Record<string, string> = {};
    const initialAnimatedVals = new Map<string, number>();

    uniqueMetrics.forEach((metricValue) => {
      const { numericValue, suffix } = parseNumberAndSuffix(metricValue);
      const isDecimal = metricValue.includes(".");
      const decimalPlaces = isDecimal
        ? metricValue.split(".")[1].replace(/\D/g, "").length
        : 0;

      let displayValue: string;
      if (isDecimal) {
        displayValue = numericValue.toFixed(decimalPlaces);
      } else {
        displayValue = formatWithCommas(numericValue);
      }
      finalVals[metricValue] = displayValue + suffix;
      initialAnimatedVals.set(metricValue, 0); // Start animation from 0
    });

    setFinalValues(finalVals);
    // Initialize animated values map
    setCurrentAnimatedValues(initialAnimatedVals);
  }, []); // Removed metrics dependency, calculated once

  // Trigger animation when the section scrolls into view
  useEffect(() => {
    if (isSectionInView && !shouldAnimate) {
      setShouldAnimate(true);
    }
  }, [isSectionInView, shouldAnimate]);

  // Run the global animation loop when shouldAnimate is true
  useEffect(() => {
    if (!shouldAnimate || animationComplete) return;

    const uniqueMetricNumbers = Object.keys(finalValues);
    const targets = new Map<string, { target: number; decimals: number }>();
    uniqueMetricNumbers.forEach((numStr) => {
      const { numericValue } = parseNumberAndSuffix(numStr);
      const isDecimal = numStr.includes(".");
      const decimalPlaces = isDecimal
        ? numStr.split(".")[1].replace(/\D/g, "").length
        : 0;
      targets.set(numStr, { target: numericValue, decimals: decimalPlaces });
    });

    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4); // EaseOutQuart

      const newAnimatedValues = new Map<string, number>();
      let allComplete = true;

      targets.forEach(({ target, decimals }, numStr) => {
        const currentValue = target * easedProgress;
        newAnimatedValues.set(numStr, currentValue);
        if (progress < 1) {
          allComplete = false;
        }
      });

      setCurrentAnimatedValues(newAnimatedValues);

      if (!allComplete) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setAnimationComplete(true); // Mark animation as done
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shouldAnimate, animationComplete, finalValues]);

  // Simplified component to display the number
  interface NumberDisplayProps {
    value: string; // The metric number string, e.g., "100,000+"
  }

  const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
    const { suffix } = parseNumberAndSuffix(value);
    const isDecimal = value.includes(".");
    const decimalPlaces = isDecimal
      ? value.split(".")[1].replace(/\D/g, "").length
      : 0;

    let displayValueStr: string;

    if (animationComplete) {
      // If animation is done, show the final pre-calculated value
      displayValueStr = finalValues[value] || `0${suffix}`;
    } else if (shouldAnimate) {
      // If animation is running, show the current animated value
      const currentNumericVal = currentAnimatedValues.get(value) || 0;
      if (isDecimal) {
        displayValueStr = `${currentNumericVal.toFixed(
          decimalPlaces
        )}${suffix}`;
      } else {
        displayValueStr = `${formatWithCommas(
          Math.round(currentNumericVal)
        )}${suffix}`;
      }
    } else {
      // Before animation starts, show 0
      const initialDisplay = isDecimal ? `0.${"0".repeat(decimalPlaces)}` : "0";
      displayValueStr = `${initialDisplay}${suffix}`;
    }

    return (
      <span className="text-white text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-3%]">
        {displayValueStr}
      </span>
    );
  };

  return (
    // Add ref to the section for useInView
    <section ref={sectionRef} className="bg-[#000000] py-8 md:py-20">
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
              enabled: false, // Keep false for mobile snap effect
              momentum: false,
            }}
            className="w-full !px-4 md:!px-20"
            breakpoints={{
              768: {
                freeMode: {
                  enabled: true, // Enable free mode scrolling on desktop
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
                    {/* Use the simplified NumberDisplay component */}
                    <NumberDisplay value={metric.number} />
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
