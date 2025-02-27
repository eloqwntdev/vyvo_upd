"use client";
import React from "react";
import WearablesBanner from "./components/banner";
import Ring from "./components/banner/ring";
import Slider from "./components/slider";
import BiosenseBand from "./components/biosense-band";

const WearablesPage = () => {
  return (
    <>
      <WearablesBanner />
      <Ring />
      <Slider />
      <BiosenseBand />
    </>
  );
};

export default WearablesPage;
