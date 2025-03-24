import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import React from "react";

const AsThin = () => {
  return (
    <section className="bg-black py-10 md:py-16 lg:py-[100px] px-4 md:px-6">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4">
        <div className="w-full md:max-w-[400px] relative mx-auto md:mx-0 flex items-center justify-center">
          <Image
            src="/biosense-products/watch/as-thin.webp"
            alt="watch-as-thin"
            width={400}
            height={400}
            className="w-full md:w-full max-w-[200px] md:max-w-none"
          />

          <img
            src="/biosense-products/watch/top-info.webp"
            className="absolute top-[8%] sm:top-0 right-[26%] sm:right-[-20%] md:right-[-43%] w-[40%] md:w-auto"
            alt=""
          />
          <img
            src="/biosense-products/watch/bottom-info.webp"
            className="absolute bottom-0 right-[27%] sm:bottom-[-4%] sm:right-[-10%] md:right-[-19%] w-[40%] md:w-auto"
            alt=""
          />
        </div>
        <div className="w-full md:max-w-[461px] flex flex-col gap-6 relative items-start">
          <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]">
            As Thin as a Smartwatch Gets
          </h2>
          <p className="text-white font-nb font-light text-[16px] leading-[20px]">
            The gorgeous bright OLED display — and the wealth of information it
            gives you — will first grab your attention. Then you notice how
            incredibly thin BioSense Watch is — just 6.5 mm! It's also feather
            light at 49 grams.
          </p>
          <p className="text-white font-nb font-light text-[16px] leading-[20px]">
            No other wearable packs so many sensors and features into such a
            thin design.
          </p>

          <SlashButton
            showIcon={false}
            label="Join to Waitlist"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AsThin;
