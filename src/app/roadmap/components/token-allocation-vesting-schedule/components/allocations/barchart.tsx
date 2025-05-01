import React from "react";

const BarChart = ({
  chartdata,
}: {
  chartdata: Array<{ label: string; value: number; color: string }>;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-3 h-full w-full">
        <div className="flex flex-col-reverse gap-5 items-end text-white font-nb font-light text-[8px] leading-[8px] tracking-[-0.24px] md:text-[14px] md:leading-[18px] md:tracking-[-0.42px]">
          {Array.from({ length: 11 }, (_, i) => (
            <span key={i}>{i * 10}%</span>
          ))}
        </div>
        <div className="relative w-full h-[280px] md:h-[400px]">
          <div className="absolute h-full w-[1px] left-0 bg-[#a175ff1a]"></div>
          <div className="absolute h-[1px] w-full bottom-0 bg-[#a175ff1a]"></div>
          <div className="w-full h-full pb-1 gap-2 md:gap-5 flex flex-row justify-between items-end">
            <div className="h-full w-[0px]"></div>
            {chartdata.map((data, index) => (
              <div
                key={index}
                className="w-full rounded-t-[8px] rounded-b-[2px]"
                style={{
                  height: `${data.value}%`,
                  background: `linear-gradient(0deg, rgba(${data.color},0.4) -0.21%, rgba(${data.color},0) 105.1%)`,
                }}
              ></div>
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
            <div
              className="w-2 h-2 rounded-[8px]"
              style={{
                background: `rgb(${data.color})`,
              }}
            ></div>
            <span className="text-white font-nb font-light text-[12px] leading-[8px] tracking-[-0.36px] md:text-[14px] md:leading-[18px] md:tracking-[-0.42px]">
              {data.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
