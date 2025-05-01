import Image from "next/image";
import React from "react";

interface CardsProps {
  title: string;
  percentage: string;
  description: string;
  icon?: string;
}

const Cards: React.FC<CardsProps> = ({
  title = "Ecosystem Growth",
  percentage = "45% (100,000,000 tokens)",
  description = "Gradual distribution over 10 years to support ecosystem partners and projects.",
  icon = "/roadmap-img/token-allocation-vesting-schedule/icon1.svg",
}) => {
  return (
    <div className="w-full rounded-[12px] flex flex-col gap-4 p-4 bg-[rgba(83,72,215,0.04)] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
      <Image height={48} width={48} alt="VSC" src={icon} />
      <div className="flex flex-col gap-5">
        <span className="text-white text-[16px] leading-[20px] tracking-[-0.48px] md:text-[20px] md:leading-[24px] md:tracking-[-0.6px] font-nb font-light">
          {title}
        </span>
        <span className="text-white text-[20px] leading-[24px] tracking-[-0.6px] md:text-[24px] md:leading-[28px] md:tracking-[-0.72px] font-nb font-normal">
          {percentage}
        </span>
        <div className="w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#5348D7_50%,rgba(255,255,255,0)_100%)]"></div>
        <span className="text-white text-[14px] leading-[18px] tracking-[-0.42px] md:text-[14px] md:leading-[18px] md:tracking-[-0.42px] font-nb font-light">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Cards;
