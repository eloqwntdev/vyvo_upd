import React from "react";
import HeroNews from "./hero";
import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import Image from "next/image";
import Link from "next/link";
import SlashButton from "@/components/common/controllers/button/slash-button";

const Articles = () => {
  return (
    <section className="bg-black flex flex-col items-center justify-center gap-12 md:gap-[60px] lg:gap-[80px] pt-[60px] md:pt-[90px] lg:pt-[120px] relative z-[10]">
      <HeroNews />
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-6 md:gap-[40px] lg:gap-[40px] px-[16px] md:px-[24px] lg:px-[0px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white font-nb font-light text-[20px] md:text-[40px] lg:text-[48px] leading-[24px] md:leading-[44px] lg:leading-[52px] tracking-[-1.4px]">
            Articles
          </h2>
          <SortDropdown />
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[40px] items-center justify-center pb-[40px] md:pb-[60px] lg:pb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[20px]">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
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

export default Articles;

export const ArticleCard = () => {
  return (
    <div className="p-[6px] md:p-[20px] w-full rounded-[12px] md:rounded-[24px] slider-card-bg before:!rounded-[12px] md:before:!rounded-[24px] gradient-border-mask-slider !flex flex-col gap-[8px] md:gap-[16px] relative">
      <div className="relative flex flex-col items-center justify-center gap-[8px] md:gap-[16px]">
        <div className="h-[148px] md:h-[180px] lg:h-[210px] w-full rounded-[8px] md:rounded-[24px] overflow-hidden">
          <Image
            src={"/wearables-img/slider/card1.webp"}
            width={381}
            height={210}
            alt={""}
            className="h-full w-full object-cover rounded-[12px] md:rounded-[16px]"
          />
        </div>
        <div className="flex flex-col gap-[4px] md:gap-[8px] w-full">
          <div className="pl-[14px] border-l-2 border-[#77A9E8]">
            <span className="text-white font-nb text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[-0.6px]">
              The Future is Now: How Vyvo is Pioneering the SocialFi Revolution
            </span>
          </div>
          <div className="pl-[14px] mt-[8px]">
            <span className="text-[#FFFFFFCC] font-nb font-light text-[12px] md:text-[13px] lg:text-[14px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.4px]">
              May 30, 2024
            </span>
            <p className="text-white font-nb font-light text-[12px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[-0.5px] mt-[6px] pb-[12px]">
              In an era where digital innovation is relentlessly advancing, the
              integration of social networking with financial empowerment —
              generally termed "SocialFi
            </p>
            <Link
              href={""}
              className="text-white font-nb text-[12px  ] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[-0.5px] underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
