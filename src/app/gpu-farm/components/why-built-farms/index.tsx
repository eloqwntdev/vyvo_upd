import Image from "next/image";
import React from "react";

const WhyBuiltFarms = () => {
  return (
    <section className="bg-black py-20 flex flex-col items-center justify-center gap-[60px]">
      <h2 className="text-white font-nb font-light text-[48px] leading-[52px] tracking-[-1.4px]">
        Why Vyvo Built GPU Farms
      </h2>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-3 gap-20">
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/icons/icon1.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
              Rising AI Demand
            </h3>
            <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
              With the launch of VAI OS and its growing user base, the demand
              for reliable and scalable AI infrastructure has skyrocketed.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/icons/icon2.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
              Reducing Third-Party Dependence
            </h3>
            <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px] max-w-[267px]">
              By creating our own GPU farms, Vyvo ensures greater control over
              data privacy and operational efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/icons/icon3.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
              Future-Ready Solutions
            </h3>
            <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px] max-w-[291px]">
              GPU farms position Vyvo to meet the expanding needs of AI
              training, fine-tuning, and real-time user interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuiltFarms;
