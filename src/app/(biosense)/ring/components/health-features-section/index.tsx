import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import React from "react";

const HealthFeaturesSection = () => {
  return (
    <section className="bg-black min-h-[800px] flex items-center justify-center px-4 md:px-6">
      <div className="max-w-[1180px] w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4">
        <div className="w-full md:max-w-[518px] flex flex-col gap-6 relative items-start">
          <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[48px] md:leading-[52px]">
            Vital insights: seamless blood pressure and blood oxygen tracking
          </h2>
          <p className="text-white font-nb font-light text-[16px] leading-[20px]">
            There’s no easier or more convenient way to keep an accurate,
            <br />
            digital eye on your blood pressure and blood oxygen.
          </p>
        </div>
        <div className="w-full md:max-w-[400px] relative mx-auto md:mx-0 flex items-center justify-center">
          <Image
            src="/biosense-products/ring/health-ring.webp"
            alt="watch-as-thin"
            width={477}
            height={349}
            className="w-full md:w-full max-w-[477px] "
          />

          <img
            src="/biosense-products/ring/health-top.webp"
            className="absolute top-[8%] sm:top-[-25%] right-[26%] sm:right-[-20%] md:right-[-35%] w-full max-w-[287px]"
            alt=""
          />
          <img
            src="/biosense-products/ring/health-bottom.webp"
            className="absolute bottom-0 right-[27%] sm:bottom-[-20%] sm:right-[-10%] md:right-[60%] w-full max-w-[202px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HealthFeaturesSection;
