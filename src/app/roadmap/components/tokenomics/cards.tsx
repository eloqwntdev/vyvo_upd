import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

interface CardsProps {
  title: string;
  value?: string;
  link?: string | any;
  icon: string;
  index?: number;
}

const Cards: React.FC<CardsProps> = ({
  title = "Total Supply",
  value = "250,000,000 VSC",
  link = null,
  icon = "/roadmap-img/tokenomics/icon1.png",
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
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
      className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#77a9e829] backdrop-blur-[10px]"
    >
      <img loading="lazy" src={icon} alt="VSC" width={48} height={48} />
      <div className="flex flex-col gap-2">
        <span className="text-white font-bn font-light text-[20px] leading-[24px]">
          {title}
        </span>
        {!link && (
          <span className="text-white font-bn font-normal text-[20px] leading-[24px]">
            {value}
          </span>
        )}
        {link && (
          <div className="flex flex-col">
            <Link
              style={{
                background:
                  "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="underline font-bn font-normal text-[20px] leading-[24px]"
              href={link}
            >
              {value}
            </Link>
            <div
              style={{
                background:
                  "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
              }}
              className="h-[2px] w-full"
            ></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
