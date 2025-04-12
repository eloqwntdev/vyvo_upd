"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PricingContent from "./pricing-content";
import PricingToggler from "./pricing-toggler";
import MobilePricingContent from "./mobile-pricing-content";

// Custom hook to detect viewport size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const isMobile = useIsMobile();

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <section className="left-0 right-0 py-6 sm:py-16 px-4 md:px-0 md:pt-[120px] relative md:pb-[137px] bg-black z-20 rounded-t-[24px] overflow-hidden grid place-content-center">
      <div className="relative z-10 max-w-[1000px] w-full mx-auto flex flex-col gap-8 items-center">
        <h2 className="font-nb text-[24px] leading-[28px] md:text-[56px] font-light md:leading-[60px] tracking-[-1.68px] text-white max-w-[547px] mx-auto text-center">
          Tailored Plans for You
        </h2>

        <PricingToggler isYearly={isYearly} onToggle={handleToggle} />

        {isMobile ? (
          <MobilePricingContent isYearly={isYearly} />
        ) : (
          <PricingContent isYearly={isYearly} />
        )}
      </div>

      <img
        src="/try-now.gif"
        alt="Pricing background"
        className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
      />
    </section>
  );
};

export default Pricing;
