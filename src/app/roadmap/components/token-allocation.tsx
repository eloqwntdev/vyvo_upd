import React from "react";
import Cards from "./token-allocation-vesting-schedule/cards";
import Allocations from "./token-allocation-vesting-schedule/allocations";
import VestingSchedule from "./token-allocation-vesting-schedule/vestingSchedule";
import { motion } from "framer-motion";

const TokenAllocation = () => {
  const cardData = [
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon1.png",
      title: "Public & Private Sales",
      percentage: "50% (125,000,000 tokens)",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon2.png",
      title: "Team",
      percentage: "5% (12,500,000 tokens)",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon3.png",
      title: "Treasury",
      percentage: "20% (50,000,000 tokens)",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon4.png",
      title: "Infrastructure Development & Staking",
      percentage: "20% (50,000,000 tokens)",
    },
    {
      icon: "/roadmap-img/token-allocation-vesting-schedule/icon5.png",
      title: "Marketing & Promotion",
      percentage: "5% (12,500,000 tokens)",
    },
  ];

  return (
    <section className="py-5 md:py-20 flex flex-col gap-[60px] items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="text-white px-4 md:px-20 w-full text-left md:text-center text-[24px] leading-[28px] tracking-[-0.72px] md:text-[56px] md:leading-[60px] md:tracking-[-1.68px] font-nb font-light"
      >
        Token Allocation
      </motion.h2>
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 max-w-[1600px] gap-5 px-4 md:px-20">
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              icon={card.icon}
              title={card.title}
              percentage={card.percentage}
              index={index}
              single={index === cardData.length - 1}
            />
          ))}
        </div>
        <div className="w-full h-full">
          <Allocations />
        </div>
      </div>
    </section>
  );
};

export default TokenAllocation;
