import SlashButton from "@/components/common/controllers/button/slash-button";
import React from "react";

const HealthBand = () => {
  return (
    <section className="min-h-[840px] w-full flex items-center justify-center bg-black relative">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="max-w-[1280px] w-full relative z-10">
        <div className="flex flex-col gap-6 max-w-[683px] w-full">
          <h2 className="text-white font-nb font-light text-[48px] leading-[52px]">
            Meet the BioSense™ health band, a wearable device unlike anything in
            its category.
          </h2>
          <p className="max-w-[394px] w-full text-white font-nb font-light text-[16px] leading-[20px]">
            From the moment you put it on your wrist, you’ll find it capable and
            comfortable, powerful and practical, life-enhancing and
            life-changing. All of that in one elegant, ultra-thin and ultralight
            device you’ll enjoy, and even love.
          </p>
          <div className="max-w-[304px] w-full flex gap-6">
            <button className="py-2.5 max-w-[140px] w-full rounded-2xl border border-white text-white font-nb font-light text-[16px] leading-[20px]">
              Learn more
            </button>
            <SlashButton
              showIcon={false}
              label="Buy Now"
              className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
              labelClassName="!tracking-[-0.2px]"
              containerStyles="!w-auto"
            />
          </div>
        </div>
      </div>
      <img
        src="/biosense-products/band/biosense-bottom-sensors.webp"
        alt=""
        className="max-w-[856px] w-full absolute right-0"
      />
    </section>
  );
};

export default HealthBand;
