import SlashButton from "@/components/common/controllers/button/slash-button";
import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import React from "react";
import { ArticleCard } from "../articles";

const PressRelease = () => {
  return (
    <section className="bg-black flex flex-col items-center justify-center gap-[40px] md:gap-[60px] lg:gap-[80px] py-[40px] md:py-[60px] lg:py-[80px] relative z-[10]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-6 md:gap-[40px] lg:gap-[40px] px-[16px] md:px-[24px] lg:px-[0px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white font-nb font-light text-[20px] md:text-[40px] lg:text-[48px] leading-[24px] md:leading-[44px] lg:leading-[52px] tracking-[-1.4px]">
            Press Releases
          </h2>
          <SortDropdown />
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[40px] items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[20px] w-full">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <SlashButton
            showIcon={false}
            label="Show More"
            className="gap-[16px] !bg-[#77A9E829] py-[10px] test mx-auto !rounded-[16px] w-full grid place-content-center !max-w-[140px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PressRelease;
