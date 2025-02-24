import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="py-8 md:py-20 flex flex-col gap-8 md:gap-20 items-center justify-center bg-black px-4 md:px-6">
      <div className="flex flex-col gap-6 md:gap-8 w-full">
        <h2 className="text-white font-nb text-center font-light text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-1px] md:tracking-[-1.7px]">
          Founding Team
        </h2>

        <div className="max-w-[860px] w-full grid grid-cols-2 gap-4 md:gap-5 mx-auto">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 w-full pt-8 sm:pt-0">
        <h2 className="text-white font-nb text-center font-light text-[24px] md:text-[56px] leading-[28px] md:leading-[60px] tracking-[-1px] md:tracking-[-1.7px]">
          Team
        </h2>

        <div className="max-w-[1280px] w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mx-auto">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = () => {
  return (
    <div className="p-1.5 pb-[14px] md:p-5 w-full h-auto md:h-[489px] rounded-[8px] md:rounded-[24px] slider-card-bg before:!rounded-[8px] md:before:!rounded-[24px] gradient-border-mask-slider !flex flex-col gap-2 md:gap-4 relative">
      <div className="relative flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="h-[124px] sm:h-[200px] md:h-[381px] w-full rounded-[8px] md:rounded-2xl overflow-hidden">
          <Image
            src={"/wearables/slider/card1.webp"}
            width={381}
            height={381}
            alt={""}
            className="h-full w-full object-cover rounded-xl md:rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <div className="flex items-center w-full justify-between">
            <span className="text-white font-nb text-[12px] sm:text-[18px] md:text-[24px] leading-[16px] md:leading-[28px] tracking-[-0.3px] md:tracking-[-0.7px]">
              Fablo Galdi
            </span>
            <div className="size-4 sm:size-5 md:size-6 rounded-[4px] md:rounded-[8px] flex items-center justify-center p-0.5 md:p-1 bg-white">
              <img
                src="/icons/social/linkedin.svg"
                className="size-4 sm:size-5 md:size-6"
                alt="LinkedIn"
              />
            </div>
          </div>
          <span className="text-[#FFFFFF99] sm:text-white font-nb font-light text-[8px] sm:text-[14px] md:text-[16px] leading-[10px] md:leading-[20px] tracking-[-0.2px] md:tracking-[-0.5px]">
            CEO & Co-Founder
          </span>
        </div>
      </div>
    </div>
  );
};
