import React from "react";

const HeroNews = () => {
  return (
    <div className="max-w-[574px] w-full flex flex-col gap-4 md:gap-[24px] lg:gap-[32px] items-center justify-center px-[16px] md:px-[24px] lg:px-[0px]">
      <h1 className="banner-gradient-text font-nb font-light text-[24px] md:text-[56px] lg:text-[72px] leading-[28px] md:leading-[60px] lg:leading-[76px] tracking-[-1.2px] md:tracking-[-1.8px] lg:tracking-[-2.2px] text-center">
        News and Updates
      </h1>
      <p className="text-white font-nb font-light text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[28px] tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px]">
        Stay informed with our latest articles, press releases, and community
        updates.
      </p>
    </div>
  );
};

export default HeroNews;
