"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-black min-h-[568px] sm:min-h-[100vh] w-full flex flex-col items-center justify-center relative">
      {/* Background GIF - using Image for better performance but keeping the full-screen positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 z-10 px-4 md:px-0">
        {/* Product Image - adjusted for responsiveness */}
        <div className="w-[200px] md:w-auto">
          <img
            src="/biosense-products/ring/ring.webp"
            className="max-w-full md:max-w-[282px]"
            alt="BioSense Ring"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-4 md:gap-6 items-center">
            <h1 className="text-gradient font-nb font-light text-[42px] leading-[48px] md:text-[72px] md:leading-[76px] text-center">
              BioSense Ring
            </h1>
            <p className="text-white font-nb font-light text-[16px] leading-[20px] md:text-[24px] md:leading-[28px] text-center">
              The New Shape of Wellness, from Vyvo
            </p>
          </div>
          <SlashButton
            showIcon={false}
            label="Buy Now"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
