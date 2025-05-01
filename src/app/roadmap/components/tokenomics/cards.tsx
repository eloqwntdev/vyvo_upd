import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  title: string;
  value?: string;
  link?: string | any;
  icon: string;
}

const Cards: React.FC<CardsProps> = ({
  title = "Total Supply",
  value = "250,000,000 VSC",
  link = null,
  icon = "/roadmap-img/tokenomics/icon1.svg",
}) => {
  return (
    <div className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
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
    </div>
  );
};

export default Cards;
