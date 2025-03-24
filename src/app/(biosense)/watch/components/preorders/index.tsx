import SlashButton from "@/components/common/controllers/button/slash-button";
import React from "react";

const Preorders = () => {
  return (
    <section className="min-h-[415px] md:min-h-[800px] lg:min-h-[900px] w-full relative bg-black flex sm:items-center sm:justify-center">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full left-0"
      />

      <img
        src="/biosense-products/watch/preorders.webp"
        alt=""
        className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[849px] w-full z-[5]"
      />

      <div className="flex sm:items-center sm:justify-center gap-4 sm:gap-6 max-w-[610px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-0">
        <h2 className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] sm:text-center tracking-[-3%]">
          Preorders <span className="text-gradient">Start Soon</span>
        </h2>
        <p className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] sm:text-center tracking-[-3%]">
          Experience BioSense Watch for yourself, and see how this first VAI OS
          companion can transform your daily life!
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

export default Preorders;
