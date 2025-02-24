"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CONTENT_DATA = [
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
      "Merging Proof-of-Stake (PoS) with our special data validation checksum (Proof-of-Sensing or PoSe) creates trustly decentralized health data validation.",
  },
  {
    id: "03",
    title: "DDH Platform",
    image: "/vyvo-smart-chain/card3.webp",
    description:
      "Using blockchain and encrypted communication with IoT devices, VSC's Decentralized Digital Health (DDH) Platform allows keeping your data anonymous but also sharing with the world to move science forward.",
  },
];

const DesktopValues = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  return (
    <div ref={wrapperRef} className="h-[300vh] relative">
      <motion.section
        ref={containerRef}
        className="py-20 flex flex-col gap-16 items-center justify-center bg-black min-h-screen sticky top-0"
      >
        <div className="flex flex-col items-center justify-center gap-20">
          <span className="text-[#E749F0] font-nb text-[20px] leading-[24px] tracking-[-0.2px]">
            Values
          </span>
          <h3 className="max-w-[607px] text-center font-nb font-light text-[48px] leading-[52px] tracking-[-1.4px] text-white">
            Verifying health data integrity through decentralization.
          </h3>
        </div>

        <div className="max-w-[1280px] flex items-center justify-center gap-[110px] w-full mx-auto">
          <div className="flex flex-col gap-[94px]">
            {CONTENT_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-10"
                style={{
                  opacity: useTransform(
                    activeIndex,
                    [index - 0.3, index, index + 0.3],
                    [0.4, 1, 0.4]
                  ),
                }}
              >
                <span className="text-white font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                  {item.id}
                </span>
                <motion.h3
                  style={{
                    color: useTransform(
                      activeIndex,
                      [index - 0.3, index, index + 0.3],
                      [
                        "rgba(255, 255, 255, 0.4)",
                        "#E749F0",
                        "rgba(255, 255, 255, 0.4)",
                      ]
                    ),
                  }}
                  className="font-nb font-light text-[32px] leading-[36px] tracking-[-1.0px]"
                >
                  {item.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>

          <div className="relative h-[500px] w-0.5 bg-[#FFFFFF1A]">
            <motion.div
              className="bg-[#E749F0] w-full absolute top-0"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>

          <div className="max-w-[414px] w-full relative h-[350px]">
            {CONTENT_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute top-0 left-0 w-full flex flex-col items-center justify-center gap-6"
                style={{
                  opacity: useTransform(
                    activeIndex,
                    [index - 0.3, index, index + 0.3],
                    [0, 1, 0]
                  ),
                }}
              >
                <Image
                  src={item.image}
                  width={414}
                  height={250}
                  alt=""
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DesktopValues;
