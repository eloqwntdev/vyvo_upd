"use client";
import PinkButton from "@/components/common/controllers/button/pink-button";
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/1/1.json";

const VyvoCmartChainBanner = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/1/images/",
  };

  const { View } = useLottie(options);

  return (
    <section className="min-h-[578px] md:min-h-[900px] w-full flex items-center justify-center bg-black">
      <div className="w-full flex flex-col gap-20 md:gap-[160px] items-center pb-[31px] md:pb-20 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          {View}
          <div className="max-w-[684px] w-full flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="text-white font-light font-nb text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-0.7px] md:tracking-[-2.2px]">
              Vyvo Smart Chain
            </h1>
            <p className="max-w-[604px] text-center font-nb text-white font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
              Revolutionizing health data managementthrough blockchain
              technology. Vyvo Smart Chain offers a secure and transparent
              platform that directly connects users and researchers.
            </p>
          </div>
          <PinkButton
            label={"Start Mining"}
            className="!bg-[#E749F029] !max-w-[150px] pink2-button-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default VyvoCmartChainBanner;
