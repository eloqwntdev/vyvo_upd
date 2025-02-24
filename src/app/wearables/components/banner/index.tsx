import SlashButton from "@/components/common/controllers/button/slash-button";
import React from "react";

const WearablesBanner = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Fullscreen Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://eloqwntmain.ams3.cdn.digitaloceanspaces.com/Vyvo/Werables_Page/whatch-2_SuxRJP1o.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Centered Content Overlay */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="max-w-[650px] w-full flex flex-col gap-8 text-center items-center justify-center  rounded-lg text-white">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-white font-nb font-light text-[72px] leading-[76px]">
              BioSense Watch
            </h1>
            <p className="text-white font-nb text-[24px] leading-[28px]">
              The new face of Vyvo technology
            </p>
          </div>
          <SlashButton
            showIcon={false}
            label="Discover more"
            className="gap-4 bg-[#94a7ed28] py-2.5 px-[18.5px] test"
            labelClassName="!tracking-[-0.2px]"
            containerStyles={"flex items-center justify-center max-w-[140px]"}
          />
        </div>
      </div>
    </section>
  );
};

export default WearablesBanner;
