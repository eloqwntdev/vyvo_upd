"use client";

import React from "react";
import WatchBanner from "./components/watch-banner";
import WatchVideo from "./components/watch-video";
import AsThin from "./components/as-thin";
import ALLThat from "./components/all-that";
import AccessibleInteligence from "./components/accessible-inteligence";
import SecondGeneration from "./components/second-generation";
import Privacy from "./components/privacy";
import OneRing from "../components/OneRing";
import Preorders from "./components/preorders";

const watchImages = [
  "/wearables-img/vyvo-smart/slider1.webp",
  "/wearables-img/vyvo-smart/slider2.webp",
  "/wearables-img/vyvo-smart/slider3.webp",
  "/wearables-img/vyvo-smart/slider4.webp",
  "/wearables-img/vyvo-smart/slider5.webp",
  "/wearables-img/vyvo-smart/slider6.webp",
];

const BiosenseWatchPage = () => {
  return (
    <div className="overflow-hidden">
      <WatchBanner />
      <WatchVideo />
      <AsThin />
      <ALLThat />
      <AccessibleInteligence />
      <SecondGeneration />
      <Privacy />
      <OneRing
        title="It's the One Watch for"
        highlightedText="Your Wellness"
        description="The shockingly light, amazingly thin, and utterly powerful BioSenseTM Watch transforms the way you think about wearable devices."
        images={watchImages}
        productName="Vyvo Smart Watch"
        imagePosition="right"
      />
      <Preorders />
    </div>
  );
};

export default BiosenseWatchPage;
