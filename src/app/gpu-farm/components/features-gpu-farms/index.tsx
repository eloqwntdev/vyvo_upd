import Image from "next/image";
import React from "react";

const FeaturesGPUFarms = () => {
  return (
    <section className="bg-black py-20 flex flex-col gap-[60px] items-center justify-center">
      <h2 className="text-white font-nb text-[48px] leading-[52px]">
        Features of Vyvo GPU Farms
      </h2>

      <div className="max-w-[1280px] w-full grid grid-cols-3 gap-[60px]">
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/features-icons/icon1.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px]">
              Global Reach
            </h3>
            <p className="font-nb font-light text-white text-[16px] leading-[20px]">
              Initial farms launch in Dallas, TX, with future locations in
              Atlanta, Tokyo, Munich, Singapore, and more.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/features-icons/icon2.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px]">
              Advanced Computing Power
            </h3>
            <p className="font-nb font-light text-white text-[16px] leading-[20px]">
              Optimized for AI workloads like adaptive learning, real-time
              health insights, and fine-tuned conversational AI.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="size-16 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
            <Image
              src={"/gpu-farms-img/features-icons/icon3.svg"}
              width={32}
              height={32}
              alt={""}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-nb text-[24px] leading-[28px]">
              Sustainable Growth
            </h3>
            <p className="font-nb font-light text-white text-[16px] leading-[20px]">
              Designed to scale with the increasing AI requirements of VAI OS
              while maintaining performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGPUFarms;
