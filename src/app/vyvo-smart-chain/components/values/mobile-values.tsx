"use client";
import Image from "next/image";
import React from "react";

const valuesData = [
  {
    id: "01",
    title: "IoT Devices",
    image: "/vyvo-smart-chain/card1.webp",
    description:
      "Bridging the digital divide between wearable device users and Web3 through secure blockchain infrastructure. VSC enables transparent data transactions between users and institutions.",
  },
  {
    id: "02",
    title: "Hybrid Consensus PoS + PoSe",
    image: "/vyvo-smart-chain/card2.webp",
    description:
      "Merging Proof-of-Stake (PoS) with our own IoT data validation protocol, Proof-of-Sensing (PoSe), we seamlessly bring blockchain technology to real-world applications.",
  },
  {
    id: "03",
    title: "DDH Platform",
    image: "/vyvo-smart-chain/card3.webp",
    description:
      "Uniting researchers, institutions, and organizations with Data. The Decentralised Digital Health (DDH) Platform allows leveraging of authenticated IoT data from all over the world to drive scientific advancements.",
  },
];
const MobileValues = () => {
  return (
    <section className="py-10 flex flex-col gap-8 bg-black px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-[#E749F0] font-nb text-[16px] leading-[20px] tracking-[-0.2px]">
          Values
        </span>
        <h3 className="text-center font-nb font-light text-[20px] leading-[24px] tracking-[-1px] text-white">
          Verifying health data integrity through decentralization.
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {valuesData.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-5">
            <Image
              src={item.image}
              width={414}
              height={250}
              alt={item.title}
              className="w-full rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <span className="text-[#E749F0] font-nb text-[12px] leading-[16px] tracking-[-0.3px]">
                  {item.id}
                </span>
                <h4 className="text-[#fff] font-nb font-light text-[20px] leading-[24px] tracking-[-0.7px]">
                  {item.title}
                </h4>
              </div>
              <p className="text-white font-nb font-light text-[14px] leading-[18px] tracking-[-0.3px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileValues;
