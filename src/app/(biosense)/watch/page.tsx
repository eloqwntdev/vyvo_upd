"use client";

import React from "react";
import WatchBanner from "./components/watch-banner";
import WatchVideo from "./components/watch-video";
import AsThin from "./components/as-thin";
import FirstSmartWatch from "./components/first-smart-watch";
import ALLThat from "./components/all-that";
import AccessibleInteligence from "./components/accessible-inteligence";
import SecondGeneration from "./components/second-generation";
import Privacy from "./components/privacy";
import OneRing from "../components/OneRing";
import Preorders from "./components/preorders";

const watchImages = [
  "/wearables-img/vyvo-smart/card1.png",
  "/wearables-img/vyvo-smart/card2.png",
  "/wearables-img/vyvo-smart/card3.png",
  "/wearables-img/vyvo-smart/card4.png",
  "/wearables-img/vyvo-smart/card5.png",
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
      <FirstSmartWatch />
      <ALLThat />
      <SecondGeneration />
      <Privacy />
      <OneRing
        title="Everything You’d Want from a"
        highlightedText="Wearable — and More!"
        description={
          <>
            From VAI OS and AQI, to advanced wellness features and a stunning,
            award-winning design, BioSense Watch sets a new standard for what is
            possible from a smart wearable. Pair your BioSense Watch with the
            Vyvo Smart App to experience all the benefits of this remarkable
            device. <br />
            <br />
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
