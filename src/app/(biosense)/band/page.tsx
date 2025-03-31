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
  "/wearables-img/vyvo-smart/slider6.webp",
];

const BandPage = () => {
  return (
    <div className="overflow-hidden">
      <BannerBand />
      <WatchVideoBand />
      <ThinLight />
      <HealthBand />
      <UnderstandBody />
      <PrivacyBand />
      <WayToPay />
      <OneRing
        title="It's the One Watch for"
        highlightedText="Your Wellness"
        description="The shockingly light, amazingly thin, and utterly powerful BioSenseTM Watch transforms the way you think about wearable devices."
        images={watchImages}
        productName="Vyvo Smart Watch"
        imagePosition="left"
      />
      <ButNowBand />
    </div>
  );
};

export default BandPage;
