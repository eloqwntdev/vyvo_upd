import React from "react";
import Banner from "./components/banner";
import WatchVideoRing from "./components/watch-video";
import ProductOverview from "./components/product-overview";
import Degree360 from "./components/360-degree";
import HealthFeaturesSection from "./components/health-features-section";
import OneRing from "../components/OneRing";
import ButNowRing from "./components/but-now-ring";

const watchImages = [
  "/wearables-img/vyvo-smart/slider1.webp",
  "/wearables-img/vyvo-smart/slider2.webp",
  "/wearables-img/vyvo-smart/slider3.webp",
  "/wearables-img/vyvo-smart/slider4.webp",
  "/wearables-img/vyvo-smart/slider5.webp",
  "/wearables-img/vyvo-smart/slider6.webp",
];

const RingWatch = () => {
  return (
    <>
      <Banner />
      <WatchVideoRing />
      <ProductOverview />
      <Degree360
        titleHighlight=""
        titleMain="360 degrees of health"
        description="Monitor every beat, breath, burst of energy, and spike of stress by keeping the BioSense™ Ring on your finger. Leverage the insights to improve your health, day after day."
        className="md:!max-w-[425px]"
      />
      <HealthFeaturesSection />

      <OneRing
        title="Wellness Monitoring,"
        highlightedText="Wrapped Around Your Finger"
        description="BioSense is what other health bands want to be like when they grow up. Quite simply, it’s the
world’s most advanced health band.
Use the Vyvo Smart App to initiate measurements with your BioSense health band and to check"
        images={watchImages}
        productName="Vyvo Smart Watch"
        imagePosition="left"
      />
      <ButNowRing />
    </>
  );
};

export default RingWatch;
