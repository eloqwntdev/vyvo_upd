"use client";
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/4/data.json";
import PinkButton from "@/components/common/controllers/button/pink-button";

const HeartBeats = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/4/images/",
  };

  const { View } = useLottie(options);
  return (
    <section className="py-10 md:py-20 flex flex-col items-center justify-center gap-[30px] md:gap-20 px-4 md:px-6">
      <span className="text-[#FF0066] font-nb text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] tracking-[-0.2px] text-center">
        Heartbeats-powered blockchain
      </span>

      <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-[103px] gap-8">
        <div className="max-w-[547px] w-full flex flex-col gap-5 md:gap-10">
          <h2 className="font-nb font-light text-[20px] md:text-[48px] leading-[24px] md:leading-[52px] tracking-[-1px] md:tracking-[-1.4px] text-left">
            Transform Your Heartbeats into Crypto:{" "}
            <span className="text-[#FF0066]">Empower Health, Earn Rewards</span>
          </h2>
          <div className="flex flex-col gap-6 md:gap-14 max-w-[421px] w-full mx-auto md:mx-0">
            <p className="text-black font-nb font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[0.3px] md:tracking-[0.5px]">
              Introducing Vyvo, the trailblazer in heartbeats-powered
              blockchain. We leverage your body's signals to mine Vyvo Smart
              Coin, turning your everyday heartbeats into crypto earnings.
              <br />
              <br />
              Unlock the value of your health data and contribute to research
              focused on enhancing human health. Realize the worth of your
              health data. Your contributions support vital research to improve
              human health.
            </p>

            <div className="flex ">
              <PinkButton label="Level up as an Influencer!" />
            </div>
          </div>
        </div>

        <div className="max-w-[630px] w-full">{View}</div>
      </div>
    </section>
  );
};

export default HeartBeats;
