import React from "react";

interface CardsProps {
  title: string;
  percentage: string;
  description: string;
  icon?: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({
  title = "Ecosystem Growth",
  percentage = "45% (100,000,000 tokens)",
  description = "Gradual distribution over 10 years to support ecosystem partners and projects.",
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
    >
      <path
        d="M1 13L5.73422 8.26578C6.3363 7.6637 6.63734 7.36266 7.01892 7.34153C7.40049 7.32039 7.73294 7.58635 8.39782 8.11826L10.5173 9.81383C11.2193 10.3754 11.5703 10.6562 11.9679 10.6225C12.3656 10.5887 12.6642 10.2527 13.2615 9.58082L20 2"
        stroke="#A174FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 1H19C19.9428 1 20.4142 1 20.7071 1.29289C21 1.58579 21 2.05719 21 3L21 5.00001"
        stroke="#A174FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 3H10"
        stroke="#A174FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
}) => {
  return (
    <div className="w-full rounded-[12px] flex flex-col gap-4 p-4 bg-[rgba(83,72,215,0.04)] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
      <div className="h-[48px] w-[48px] flex items-center justify-center px-3 py-3 rounded-[72px] bg-[rgba(161,112,255,0.16)] shadow-[inset_6px_80px_80px_0px_rgba(161,112,255,0.02),inset_0px_-1px_1px_0px_rgba(161,112,255,0.2),inset_0px_1px_1px_0px_rgba(161,112,255,0.2)] backdrop-blur-[10px]">
        {icon}
      </div>
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
