"use client";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
}

const PinkButton = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={`pink-button-shadow text-white md:text-[16px] text-[14px] leading-[18px] md:leading-[24px] font-nb py-2.5 px-[31px] bg-[#FF006699] rounded-2xl max-w-[245px] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#FF0066] ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default PinkButton;
