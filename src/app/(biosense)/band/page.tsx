"use client";

import React from "react";
import BannerBand from "./components/banner";
import WatchVideoBand from "./components/watch-video";
import ThinLight from "./components/thin-light";
import HealthBand from "./components/health-band";
import UnderstandBody from "./components/understand-body";
import PrivacyBand from "./components/privacy";
import WayToPay from "./components/way-to-pay";
import OneRing from "../components/OneRing";
import ButNowBand from "./components/but-now-ring";

const watchImages = [
  "/wearables-img/vyvo-smart/slider1.webp",
  "/wearables-img/vyvo-smart/slider2.webp",
  "/wearables-img/vyvo-smart/slider3.webp",
  "/wearables-img/vyvo-smart/slider4.webp",
  "/wearables-img/vyvo-smart/slider5.webp",
  // "/wearables-img/vyvo-smart/slider6.webp",
];

const BandPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <BannerBand />
      <WatchVideoBand />
      <HealthBand />
      <UnderstandBody />
      <ThinLight />
      <PrivacyBand />
      <WayToPay />
      <OneRing
        title="It's the One Watch for"
        highlightedText="Your Wellness"
        description={
          <>
            An Extraordinary Breakthrough, Made Just for You
            <br />
            <br />
            BioSense is what other health bands want to be like when they grow
            up. Quite simply, it’s the world’s most advanced health band. Use
            the Vyvo Smart App to initiate measurements with your BioSense
            health band and to check your results, each time and across days and
            weeks.
            <br />
            <br />
            <br />
            Download it from the Apple App Store or Google Play Store.
          </>
        }
        images={watchImages}
        productName="Vyvo Smart Watch"
        imagePosition="left"
      />
      <ButNowBand />
    </div>
  );
};

export default BandPage;
