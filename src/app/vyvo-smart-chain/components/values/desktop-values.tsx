"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CONTENT_DATA = [
  {
    id: "01",
    title: "IoT Devices",
    image: "/vyvo-smart-chain-img/card1.webp",
    description:
      "Bridging the digital divide between wearable device users and Web3 through secure blockchain infrastructure. VSC enables transparent data transactions between users and institutions.",
  },
  {
    id: "02",
    title: "Hybrid Consensus PoS + PoSe",
    image: "/vyvo-smart-chain-img/card2.webp",
    description:
      "Merging Proof-of-Stake (PoS) with our special data validation checksum (Proof-of-Sensing or PoSe) creates trustly decentralized health data validation.",
  },
  {
    id: "03",
    title: "DDH Platform",
    image: "/vyvo-smart-chain-img/card3.webp",
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

  const activeIndex = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 2]);

  return (
    <div ref={wrapperRef} className="h-[200vh] relative">
      <motion.section
        ref={containerRef}
        className="py-20 flex flex-col gap-16 items-center justify-center bg-black min-h-screen sticky top-0"
      >
        <div className="flex flex-col items-center justify-center gap-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#E749F0] font-nb text-[20px] leading-[24px] tracking-[-0.2px]"
          >
            Values
          </motion.span>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[607px] text-center font-nb font-light text-[48px] leading-[52px] tracking-[-1.4px] text-white"
          >
            Verifying health data integrity through decentralization.
          </motion.h3>
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
                    [index - 0.2, index, index + 0.2],
                    [0.3, 1, 0.3]
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
                      [index - 0.2, index, index + 0.2],
                      [
                        "rgba(255, 255, 255, 0.3)",
                        "#E749F0",
                        "rgba(255, 255, 255, 0.3)",
                      ]
                    ),
                    scale: useTransform(
                      activeIndex,
                      [index - 0.2, index, index + 0.2],
                      [0.95, 1.05, 0.95]
                    ),
                  }}
                  className="font-nb font-light text-[32px] leading-[36px] tracking-[-1.0px] origin-left"
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
                height: useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]),
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
                    [index - 0.3, index - 0.1, index, index + 0.4, index + 0.8],
                    [0, 0.5, 1, 0.8, 0]
                  ),
                  y: useTransform(
                    activeIndex,
                    [index - 0.3, index, index + 0.3],
                    [20, 0, -20]
                  ),
                }}
              >
                <Image
                  src={item.image}
                  width={414}
                  height={250}
                  alt={item.title}
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute right-[calc(50%-640px+414px/2)] top-[50%] max-w-[414px] w-full flex flex-col items-center justify-center gap-6 translate-y-[-50%] pointer-events-none"
          style={{
            opacity: useTransform(activeIndex, [0, 0.1, 0.9, 1], [0, 0, 0, 0]),
          }}
        >
          <Image
            src="/vyvo-smart-chain-img/card1.webp"
            width={414}
            height={250}
            alt="Vyvo Smart Chain"
            className="rounded-2xl opacity-40"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default DesktopValues;
