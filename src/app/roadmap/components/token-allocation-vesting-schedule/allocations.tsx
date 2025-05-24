import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import React, { use, useState } from "react";
import BarChart from "./components/allocations/barchart";
import { motion } from "framer-motion";
import Image from "next/image";

const Allocations = () => {
  const chartdata = [
    {
      title: "Public & Private Sales",
      circleChartImage:
        "/roadmap-img/token-allocation/public-and-private-sales/1.png",
      infoChartImage:
        "/roadmap-img/token-allocation/public-and-private-sales/2.png",
    },
    {
      title: "Infrastructure Dev. & Staking",
      circleChartImage:
        "/roadmap-img/token-allocation/infrastructure-taking/1.png",
      infoChartImage:
        "/roadmap-img/token-allocation/infrastructure-taking/2.png",
    },
    {
      title: "Treasury",
      circleChartImage: "/roadmap-img/token-allocation/treasury/1.png",
      infoChartImage: "/roadmap-img/token-allocation/treasury/2.png",
    },
    {
      title: "Team",
      circleChartImage: "/roadmap-img/token-allocation/team/1.png",
      infoChartImage: "/roadmap-img/token-allocation/team/2.png",
    },
    {
      title: "Marketing & Promotion",
      circleChartImage:
        "/roadmap-img/token-allocation/marketing-promotion/1.png",
      infoChartImage: "/roadmap-img/token-allocation/marketing-promotion/2.png",
    },
  ];
  const [chartInView, SetChartInView] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      onViewportEnter={() => {
        SetChartInView(true);
      }}
      style={{
        boxShadow:
          "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
      }}
      className="rounded-xl md:rounded-3xl p-3 md:p-4 h-[80vw] lg:h-full w-full bg-[#77a9e829] backdrop-blur-[75.8px]"
    >
      <div className="rounded-xl select-none pointer-events-none md:rounded-3xl flex h-full flex-col gap-10 p-4 md:p-8 bg-[#77a9e829] border-[2px] border-[#77a9e866] backdrop-blur-[33.8px]">
        {chartdata.map((card, index) => (
          <div className="h-full">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: chartInView ? 1 : 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="absolute h-[95%] w-auto lg:w-[90%] lg:h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              src={card.circleChartImage}
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: chartInView ? 1 : 0 }}
              transition={{
                delay: index * 0.1 + 0.05,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="absolute h-[95%] w-auto lg:w-[90%] lg:h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              src={card.infoChartImage}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Allocations;
