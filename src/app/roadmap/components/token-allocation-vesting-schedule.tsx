import React from "react";
import Cards from "./token-allocation-vesting-schedule/cards";
import Allocations from "./token-allocation-vesting-schedule/allocations";
import VestingSchedule from "./token-allocation-vesting-schedule/vestingSchedule";

const TokenAllocationVestingSchedule = () => {
  const cardData = [
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon1.svg",
      title: "Ecosystem Growth",
      percentage: "45% (100,000,000 tokens)",
      description:
        "Gradual distribution over 10 years to support ecosystem partners and projects.",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon2.svg",
      title: "Team & Advisors",
      percentage: "20% (50,000,000 tokens)",
      description:
        "12-month lock-up period, followed by linear unlocking over the next 36 months.",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon3.svg",
      title: "Investors",
      percentage: "15% (37,500,000 tokens)",
      description: "10% at TGE, remaining unlocked over 24 months.",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon4.svg",
      title: "Staking & Rewards",
      percentage: "20% (50,000,000 tokens)",
      description:
        "Distributed through a halving mechanism to reward user participation over 20 years.",
    },
  ];

  return (
    <section className="py-20 flex flex-col gap-[60px] items-center justify-center">
      <h2 className="text-white px-4 md:px-20 w-full text-left md:text-center text-[24px] leading-[28px] tracking-[-0.72px] md:text-[56px] md:leading-[60px] md:tracking-[-1.68px] font-nb font-light">
        Token Allocation & <br className="md:hidden" /> Vesting Schedule
      </h2>
      <div className="w-full h-fit flex flex-col max-w-[1600px] gap-5 px-4 md:px-20">
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              icon={card.icon}
              title={card.title}
              percentage={card.percentage}
              description={card.description}
            />
          ))}
        </div>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5">
          <Allocations />
          <VestingSchedule />
        </div>
      </div>
    </section>
  );
};

export default TokenAllocationVestingSchedule;
