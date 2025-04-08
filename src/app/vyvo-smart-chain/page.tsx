"use client";
import React from "react";
import VyvoCmartChainBanner from "./components/banner";
import AboutVSC from "./components/about-vsc";
import Values from "./components/values";
import PinkButton from "@/components/common/controllers/button/pink-button";
import { useLottie } from "lottie-react";

const VyvoCmartChain = () => {
  return (
    <>
      <VyvoCmartChainBanner />
      <AboutVSC />
      <Values />
      <section className="min-h-[400px] bg-black md:min-h-[600px] w-full flex items-center md:justify-center relative px-4 md:px-6">
        <div className="max-w-[256px] sm:max-w-[830px] w-full flex flex-col md:items-center gap-4 md:gap-6 relative z-10">
          <h2 className="text-white font-nb font-light text-[24px] md:text-[48px] leading-[28px] md:leading-[52px] tracking-[-0.7px] md:tracking-[-1.4px] md:text-center">
            Discover the Power of Vyvo Smart Chain
          </h2>
          <p className="max-w-[447px] text-white w-full md:text-center text-[14px] md:text-base leading-[18px] md:leading-normal tracking-[-0.3px] md:tracking-normal">
            Join our 100,000+ members revolutionizing health data. Sign up for
            the lastest Vyvo Smart Chain updates, exclusive promotions and
            practical insights.
          </p>
          <PinkButton
            label="Learn more"
            className="!max-w-[140px] md:!max-w-[150px]"
          />
        </div>

        <video
          src="/beck.webm"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </section>
    </>
  );
};

export default VyvoCmartChain;
