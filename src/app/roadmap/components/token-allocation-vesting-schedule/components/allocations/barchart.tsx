import React, { useState } from "react";
import { motion } from "framer-motion";

const BarChart = ({
  chartdata,
}: {
  chartdata: Array<{ label: string; value: number; color: string }>;
}) => {
  const [saw, setSaw] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => {
        setSaw(true);
      }}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-row gap-3 h-full w-full">
        <div className="flex flex-col-reverse gap-5 items-end text-white font-nb font-light text-[8px] leading-[8px] tracking-[-0.24px] md:text-[14px] md:leading-[18px] md:tracking-[-0.42px]">
          {Array.from({ length: 11 }, (_, i) => (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: saw ? 1 : 0, x: saw ? 0 : -20 }}
              transition={{
                delay: i / 15,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              key={i}
            >
              {i * 10}%
            </motion.span>
          ))}
        </div>
        <div className="relative w-full h-[280px] md:h-[400px]">
          <div className="absolute h-full w-[1px] left-0 bg-[#a175ff1a]"></div>
          <div className="absolute h-[1px] w-full bottom-0 bg-[#a175ff1a]"></div>
          <div className="w-full h-full pb-1 gap-2 md:gap-5 flex flex-row justify-between items-end">
            <div className="h-full w-[0px]"></div>
            {chartdata.map((data, index) => (
              <motion.div
                initial={{ opacity: 0, height: "0%" }}
                animate={{
                  opacity: saw ? 1 : 0,
                  height: saw ? `${data.value}%` : "0%",
                }}
                transition={{
                  delay: index / 5,
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                key={index}
                className="w-full rounded-t-[8px] rounded-b-[2px]"
                style={{
                  background: `linear-gradient(0deg, rgba(${data.color},0.4) -0.21%, rgba(${data.color},0) 105.1%)`,
                }}
              ></motion.div>
            ))}
            <div className="h-full w-[0px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex pl-8 md:pl-14 flex-wrap items-start content-start gap-y-3 gap-x-2 md:gap-x-6">
        {chartdata.map((data, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center gap-1"
          >
            <motion.div
              className="w-2 h-2 rounded-[8px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: saw ? 1 : 0,
                x: saw ? 0 : -20,
              }}
              transition={{
                delay: index / 5,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{
                background: `rgb(${data.color})`,
              }}
            ></motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: saw ? 1 : 0,
                x: saw ? 0 : -20,
              }}
              transition={{
                delay: index / 5,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="text-white font-nb font-light text-[12px] leading-[14px] tracking-[-0.36px] md:text-[14px] md:leading-[18px] md:tracking-[-0.42px]"
            >
              {data.label}
            </motion.span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BarChart;
