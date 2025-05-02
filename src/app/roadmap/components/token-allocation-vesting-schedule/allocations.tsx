import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import React from "react";
import BarChart from "./components/allocations/barchart";
import { motion } from "framer-motion";

const Allocations = () => {
  const chartdata = [
    {
      label: "Team",
      value: 50,
      color: "255, 142, 117",
    },
    {
      label: "Investors",
      value: 65,
      color: "255, 227, 117",
    },
    {
      label: "Product",
      value: 50,
      color: "117, 255, 131",
    },
    {
      label: "Reserve Fund",
      value: 25,
      color: "255, 117, 250",
    },
    {
      label: "Marketing & Growth",
      value: 25,
      color: "126, 117, 255",
    },
    {
      label: "Community Rewards",
      value: 15,
      color: "255, 117, 117",
    },
    {
      label: "Staking Rewards",
      value: 15,
      color: "117, 248, 255",
    },
    {
      label: "Liquidity Pool",
      value: 15,
      color: "186, 117, 255",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="rounded-xl md:rounded-3xl p-3 md:p-4 h-fit w-full bg-[rgba(83,72,215,0.04)] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[75.8px]"
    >
      <div className="rounded-xl md:rounded-3xl flex flex-col gap-10 p-4 md:p-8 border-[2px] border-[rgba(161,117,255,0.4)] backdrop-blur-[33.8px]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-normal text-[16px] leading-[20px] tracking-[-0.48] md:text-[24px] md:leading-[28px] md:tracking-[-0.72px]">
            Allocations
          </span>
          <SortDropdown />
        </div>
        <BarChart chartdata={chartdata} />
      </div>
    </motion.div>
  );
};

export default Allocations;
