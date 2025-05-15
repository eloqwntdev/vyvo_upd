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
  "/wearables-img/vyvo-smart/card1.png",
  "/wearables-img/vyvo-smart/card2.png",
  "/wearables-img/vyvo-smart/card3.png",
  "/wearables-img/vyvo-smart/card4.png",
  "/wearables-img/vyvo-smart/card5.png",
];

const BandPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <BannerBand />
      <WatchVideoBand />
      <HealthBand />
      <UnderstandBody />
      <ThinLight />
      <PrivacyBand />
      <WayToPay />
      <OneRing
        title="An Extraordinary Breakthrough, "
        highlightedText="Made Just for You"
        description={
          <>
            BioSense is what other health bands want to be like when they grow
            up. Quite simply, it’s the world’s most advanced health band. Use
            the Vyvo Smart App to initiate measurements with your BioSense
            health band and to check your results, each time and across days and
            weeks.
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
