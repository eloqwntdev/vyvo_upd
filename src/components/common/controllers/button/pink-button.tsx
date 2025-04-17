"use client";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
}

const PinkButton = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={` text-white md:text-[16px] text-[14px] leading-[18px] md:leading-[24px] font-nb py-2.5 px-[31px] bg-[#E749F029] max-w-[245px] flex items-center justify-center  rounded-xl bg-purple-500/16 shadow-[0px_-1px_1px_0px_rgba(231, 73, 240,0.40)_inset,_0px_1px_1px_0px_rgba(231,73,240,0.40)_inset] backdrop-blur-lg hover:shadow-[0px_0px_15px_5px_rgba(231, 73, 240,0.2)] transition-all duration-300 ease-in-out ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};
export const PinkyButton = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={`text-white md:text-[16px] text-[14px] leading-[18px] md:leading-[24px] font-nb py-2.5 px-[31px] max-w-[245px] flex items-center justify-center rounded-xl bg-pink-500/60 hover:bg-white hover:text-pink-500/60 shadow-[0px_-1px_1px_0px_rgba(255,0,102,0.40)_inset,_0px_1px_1px_0px_rgba(255,0,102,0.40)_inset] transition-colors duration-100 hover:shadow-[0px_-1px_1px_0px_rgba(255,0,102,0.0)_inset,_0px_1px_1px_0px_rgba(255,0,102,0.0)_inset] backdrop-blur-lg ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default PinkButton;
