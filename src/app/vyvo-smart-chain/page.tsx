"use client";
import React from "react";
import VyvoCmartChainBanner from "./components/banner";
import AboutVSC from "./components/about-vsc";
import Values from "./components/values";
import { PurpleButton } from "@/components/common/controllers/button/pink-button";
// import { useLottie } from "lottie-react";
import animationBgPink from "../../../public/lottie/pink-bg/data.json";
import dynamic from "next/dynamic";

const VyvoCmartChain = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
  // const optionsBgPink = {
  //   animationData: animationBgPink,
  //   loop: true,
  // };
  // const { View: ViewBgPink } = useLottie(optionsBgPink);
  return (
    <>
      <VyvoCmartChainBanner />
      <AboutVSC />
      <Values />
      <section className="min-h-[400px] overflow-hidden bg-black md:min-h-[600px] w-full flex items-center justify-center relative px-4 md:px-6">
        <div className="max-w-[447px] sm:max-w-[830px] w-full flex flex-col items-center gap-4 md:gap-6 relative z-10">
          <h2 className="text-white  text-center font-nb font-light text-[24px] md:text-[48px] leading-[28px] md:leading-[52px] tracking-[-0.7px] md:tracking-[-1.4px] md:text-center">
            Discover the Power of <br className="block lg:hidden" /> Vyvo Smart
            Chain
          </h2>
          <p className=" text-center md:max-w-[550px] text-white w-full md:text-center text-[14px] md:text-base leading-[18px] md:leading-normal tracking-[-0.3px] md:tracking-normal">
            Join our 100,000+ members revolutionizing health data. Sign up for
            the lastest Vyvo Smart Chain updates, exclusive promotions and
            practical insights.
          </p>
          <PurpleButton link="https://vyvo.org/" label="Learn more" />
        </div>

        <div className="absolute top-[0%] w-full h-full scale-125">
          <Lottie animationData={animationBgPink} loop />
        </div>
      </section>
    </>
  );
};

export default VyvoCmartChain;
