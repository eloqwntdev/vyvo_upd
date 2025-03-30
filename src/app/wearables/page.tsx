"use client";
import React from "react";
import WearablesBanner from "./components/banner";
import Ring from "./components/banner/ring";
import Slider from "./components/slider";
import BiosenseBand from "./components/biosense-band";
import VyvoResearchDevelopment from "./components/vyvo-research-development";
import VyvoSmart from "./components/vyvo-smart";
import ProductLineup from "./components/product-lineup";

const WearablesPage = () => {
  return (
    <>
      <WearablesBanner />
      <Ring />
      <Slider />
      <BiosenseBand />
      <VyvoResearchDevelopment />
      <VyvoSmart />
      <ProductLineup />
    </>
  );
};

export default WearablesPage;
