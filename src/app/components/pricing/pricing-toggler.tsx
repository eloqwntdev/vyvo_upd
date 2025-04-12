"use client";
import React from "react";
import { motion } from "framer-motion";

interface PricingTogglerProps {
  isYearly: boolean;
  onToggle: () => void;
}

const PricingToggler: React.FC<PricingTogglerProps> = ({
  isYearly,
  onToggle,
}) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className="flex items-center justify-center gap-3 sm:gap-4 cursor-pointer"
      onClick={onToggle}
    >
      {/* Monthly Label */}
      <span
        className={`font-nb text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] transition-colors duration-300 ${
          isYearly ? "text-[#9DA2B3]" : "text-white"
        }`}
      >
        Monthly
      </span>

      {/* Toggle Switch */}
      <div
        className={`relative test flex items-center w-[52px] h-[28px] rounded-full transition-colors duration-300 bg-[#77A9E829] backdrop-blur-[20px] overflow-hidden`}
      >
        <motion.div
          className="absolute inset-0 flex items-center"
          animate={{ justifyContent: isYearly ? "flex-end" : "flex-start" }}
          transition={spring}
        >
          <motion.div
            className="w-[22px] test h-[22px] bg-[#77A9E829] rounded-full mx-[3px] z-10 backdrop-blur-[20px]"
            style={{
              boxShadow:
                "0px 1px 1px 0px #94A8ED33 inset, 0px -1px 1px 0px #94A8ED33 inset, 6px 80px 80px 0px #94A8ED05 inset",
            }}
            layout
            transition={spring}
          />
        </motion.div>
      </div>

      {/* Yearly Label & Badge */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span
          className={`font-nb text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] transition-colors duration-300 ${
            isYearly ? "text-white" : "text-[#9DA2B3]"
          }`}
        >
          Yearly
        </span>
        {/* 20% Off Badge */}
        <div className="most-popular py-[5px] px-2 bg-[#000000CC] hidden md:grid place-content-center">
          <span className="bg-gradient-to-r from-[#5674CD] to-[#9AB4FF] font-normal font-nm text-[12px] leading-[16px] bg-clip-text text-transparent">
            20% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingToggler;
