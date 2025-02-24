"use client";
import PinkButton from "@/components/common/controllers/button/pink-button";
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/circles-bottom.json";

const LearnMore = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/4/images/",
    rendererSettings: {
      progressiveLoad: true,
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  return (
    <section className="min-h-[400px] md:min-h-[600px] w-full flex items-center md:justify-center relative px-4 md:px-6">
      <div className="max-w-[256px] sm:max-w-[630px] w-full flex flex-col md:items-center gap-4 md:gap-6 relative z-10">
        <h2 className="text-black font-nb font-light text-[24px] md:text-[48px] leading-[28px] md:leading-[52px] tracking-[-0.7px] md:tracking-[-1.4px] md:text-center">
          Make the Leap to Social Mining
        </h2>
        <p className="max-w-[447px] w-full md:text-center text-[14px] md:text-base leading-[18px] md:leading-normal tracking-[-0.3px] md:tracking-normal">
          As you help to grow the Vyvo community, you can unlock additional
          rewards, including the potential for residual income!
        </p>
        <PinkButton
          label="Learn more"
          className="!max-w-[140px] md:!max-w-[150px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">{View}</div>
    </section>
  );
};

export default LearnMore;
