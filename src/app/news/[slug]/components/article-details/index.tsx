import Image from "next/image";
import React from "react";

const ArticleDetails = () => {
  return (
    <section className="bg-black py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-[20px] md:gap-[24px] lg:gap-[32px] px-[16px] md:px-[24px] lg:px-[0px]">
        <div className="flex flex-col items-start gap-[16px] md:gap-[20px] lg:gap-[24px]">
          <h1
            className="max-w-[714px] text-white font-nb font-light 
            text-[32px] md:text-[40px] lg:text-[48px] 
            leading-[36px] md:leading-[44px] lg:leading-[52px] 
            tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.4px]"
          >
            The Future is Now: How Vyvo is Pioneering the SocialFi Revolution
          </h1>
          <div className="flex items-center flex-wrap gap-[12px] md:gap-[16px] lg:gap-[20px]">
            <span
              className="text-[#FFFFFF99] font-nb font-light 
              text-[16px] md:text-[18px] lg:text-[20px] 
              leading-[20px] md:leading-[22px] lg:leading-[24px] 
              tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px]"
            >
              June 3, 2024
            </span>
            <div className="size-1 rounded-full bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"></div>
            <span
              className="text-[#FFFFFF99] font-nb font-light 
              text-[16px] md:text-[18px] lg:text-[20px] 
              leading-[20px] md:leading-[22px] lg:leading-[24px] 
              tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px]"
            >
              By admin
            </span>
          </div>
        </div>

        <div
          className="p-[6px] md:p-[12px] lg:p-[20px] w-full 
          rounded-[8px] md:rounded-[16px] lg:rounded-[24px] 
          news-article-image !flex flex-col 
          gap-[8px] md:gap-[12px] lg:gap-[16px] relative"
        >
          <div
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[616px] w-full 
            rounded-[8px] md:rounded-[16px] lg:rounded-[24px] overflow-hidden"
          >
            <Image
              src={"/wearables-img/slider/card1.webp"}
              width={1280}
              height={616}
              alt={"Article hero image"}
              priority
              className="h-full w-full object-cover 
                rounded-[8px] md:rounded-[16px] lg:rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
