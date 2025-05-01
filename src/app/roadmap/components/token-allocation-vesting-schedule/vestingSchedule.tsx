import SortDropdown from "@/components/common/controllers/dropdowns/sort-dropdown";
import React from "react";
import LinesChart from "./components/vestingSchedule/linechart";

const VestingSchedule = () => {
  const chartdata = [
    {
      time: 30,
      value: 44.41169003602148,
    },
    {
      time: 31,
      value: 48.33821194365007,
    },
    {
      time: 32,
      value: 52.330984097009875,
    },
    {
      time: 33,
      value: 56.230827270267554,
    },
    {
      time: 34,
      value: 59.88226702277216,
    },
    {
      time: 35,
      value: 63.13973197437578,
    },
    {
      time: 36,
      value: 65.87335727698306,
    },
    {
      time: 37,
      value: 67.97416191623253,
    },
    {
      time: 38,
      value: 69.35839344062973,
    },
    {
      time: 39,
      value: 69.9708669074921,
    },
    {
      time: 40,
      value: 69.78716493246763,
    },
    {
      time: 41,
      value: 68.81461113359546,
    },
    {
      time: 42,
      value: 67.09197816176561,
    },
    {
      time: 43,
      value: 64.68794195748227,
    },
    {
      time: 44,
      value: 61.69834385783523,
    },
    {
      time: 45,
      value: 58.242369704835134,
    },
    {
      time: 46,
      value: 54.45779828200495,
    },
    {
      time: 47,
      value: 50.49550850906716,
    },
    {
      time: 48,
      value: 46.51346437554041,
    },
    {
      time: 49,
      value: 42.670417414961435,
    },
    {
      time: 50,
      value: 39.1195777822126,
    },
    {
      time: 51,
      value: 36.00250624812915,
    },
    {
      time: 52,
      value: 33.44347061828692,
    },
    {
      time: 53,
      value: 31.544491567743865,
    },
    {
      time: 54,
      value: 30.38127539867017,
    },
    {
      time: 55,
      value: 30.00019586898593,
    },
    {
      time: 56,
      value: 30.41644541697365,
    },
    {
      time: 57,
      value: 31.613429486706487,
    },
    {
      time: 58,
      value: 33.543428100625825,
    },
    {
      time: 59,
      value: 36.129498304457556,
    },
    {
      time: 60,
      value: 39.2685416399913,
    },
    {
      time: 61,
      value: 42.835414355263424,
    },
    {
      time: 62,
      value: 46.68791649103381,
    },
    {
      time: 63,
      value: 50.67246094442273,
    },
    {
      time: 64,
      value: 54.63019650203078,
    },
    {
      time: 65,
      value: 58.40334073653282,
    },
    {
      time: 66,
      value: 61.84147029414446,
    },
    {
      time: 67,
      value: 64.80751779904898,
    },
    {
      time: 68,
      value: 67.18323629712992,
    },
    {
      time: 69,
      value: 68.8739133888821,
    },
    {
      time: 70,
      value: 69.81214711389741,
    },
    {
      time: 71,
      value: 69.96053305432724,
    },
    {
      time: 72,
      value: 69.31315553098554,
    },
    {
      time: 73,
      value: 67.89582344281008,
    },
    {
      time: 74,
      value: 65.76504134750633,
    },
    {
      time: 75,
      value: 63.00575680314233,
    },
    {
      time: 76,
      value: 59.727973777075995,
    },
    {
      time: 77,
      value: 56.06236713491405,
    },
    {
      time: 78,
      value: 52.15507304598888,
    },
    {
      time: 79,
      value: 48.16186299544637,
    },
  ];
  return (
    <div className="rounded-xl md:rounded-3xl p-3 md:p-4 h-full w-full bg-[rgba(83,72,215,0.04)] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[75.8px]">
      <div className="rounded-xl md:rounded-3xl h-full flex flex-col gap-10 p-4 md:p-8 border-[2px] border-[rgba(161,117,255,0.4)] backdrop-blur-[33.8px]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-normal text-[16px] leading-[20px] tracking-[-0.48] md:text-[24px] md:leading-[28px] md:tracking-[-0.72px]">
            Vesting Schedule
          </span>
          <SortDropdown />
        </div>
        <LinesChart chartdata={chartdata} />
      </div>
    </div>
  );
};

export default VestingSchedule;
