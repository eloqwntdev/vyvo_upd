"use client";
import React from "react";
import GPUBanner from "./components/banner";
import VyvoGPUFarms from "./components/vyvo-gpu-farms";
import WhyBuiltFarms from "./components/why-built-farms";
import FarmsAsAProduct from "./components/farms-as-a-product";
import FeaturesGPUFarms from "./components/features-gpu-farms";
import Improvements from "./components/improvements";
import AIInvestmentHero from "./components/ai-investment-hero";

const GPUFarmPage = () => {
  return (
    <>
      <GPUBanner />
      <VyvoGPUFarms />
      <WhyBuiltFarms />
      <FarmsAsAProduct />
      <FeaturesGPUFarms />
      <Improvements />
      <AIInvestmentHero />
    </>
  );
};

export default GPUFarmPage;
