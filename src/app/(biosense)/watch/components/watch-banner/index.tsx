import SlashButton from "@/components/common/controllers/button/slash-button";
import React from "react";

const WatchBanner = () => {
  return (
    <section className="min-h-[568px] md:min-h-[800px] lg:min-h-[900px] w-full relative bg-black flex sm:items-center sm:justify-center">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full left-0"
      />

      <img
        src="/biosense-products/watch/banner.webp"
        alt=""
        className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[1025px] w-full z-[5]"
      />

      <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-[610px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-0">
        <h2 className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[72px] lg:leading-[76px] text-center tracking-[-3%]">
          <span className="text-gradient">BioSense Watch </span>
        </h2>
        <p className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[24px] md:leading-[28px] text-center tracking-[-3%]">
          The new face of Vyvo technology
        </p>
        <SlashButton
          showIcon={false}
          label="Join to Waitlist"
          className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
          labelClassName="!tracking-[-0.2px]"
          containerStyles="!w-auto"
        />
      </div>
    </section>
  );
};

export default WatchBanner;
