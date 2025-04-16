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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <WatchBanner />
      <WatchVideo />
      <AccessibleInteligence />
      <AsThin />
      <ALLThat />
      <SecondGeneration />
      <Privacy />
      <OneRing
        title="It's the One Watch for"
        highlightedText="Your Wellness"
        description={
          <>
            Everything You’d Want from a Wearable — and More!
            <br />
            <br />
            From VAI OS and AQI, to advanced wellness features and a stunning,
            award-winning design, BioSense Watch sets a new standard for what is
            possible from a smart wearable. Pair your BioSense Watch with the
            Vyvo Smart App to experience all the benefits of this remarkable
            device. <br />
            Download it from the Apple App Store or Google Play Store.
          </>
        }
        images={watchImages}
        productName="Vyvo Smart Watch"
        imagePosition="right"
      />
      <Preorders />
    </div>
  );
};

export default BiosenseWatchPage;
