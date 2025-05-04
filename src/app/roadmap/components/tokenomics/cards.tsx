import React from "react";
import Image from "next/image";
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
  icon = "/roadmap-img/tokenomics/icon1.svg",
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
      className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]"
    >
      <Image src={icon} alt="VSC" width={48} height={48} />
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
          <Link
            className="text-[#A170FF] underline font-bn font-normal text-[20px] leading-[24px]"
            href={link}
          >
            {value}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
