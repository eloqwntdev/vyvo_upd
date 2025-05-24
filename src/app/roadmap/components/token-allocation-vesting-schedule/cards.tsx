import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/common/animations/text-reveal";

interface CardsProps {
  title: string;
  percentage: string;
  icon?: string;
  index?: number;
  single?: boolean;
}

const Cards: React.FC<CardsProps> = ({
  title = "Ecosystem Growth",
  percentage = "45% (100,000,000 tokens)",
  icon = "/roadmap-img/token-allocation-vesting-schedule/icon1.svg",
  index = 0,
  single = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index / 5,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      style={{
        boxShadow:
          "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
      }}
      className={cn(
        "w-full rounded-[12px] h-full flex flex-col gap-4 p-4 bg-[#77a9e829] backdrop-blur-[10px]",
        single ? "md:col-span-2" : ""
      )}
    >
      <img loading="lazy" height={48} width={48} alt="VSC" src={icon} />
      <div className="flex flex-col gap-5">
        <span className="text-white text-[16px] leading-[20px] tracking-[-0.48px] md:text-[18px] md:leading-[22px] md:tracking-[-0.6px] font-nb font-light">
          {title}
        </span>
        <span className="text-white text-[20px] leading-[24px] tracking-[-0.6px] md:text-[24px] md:leading-[28px] md:tracking-[-0.72px] font-nb font-normal">
          {percentage}
        </span>
      </div>
    </motion.div>
  );
};

export default Cards;
