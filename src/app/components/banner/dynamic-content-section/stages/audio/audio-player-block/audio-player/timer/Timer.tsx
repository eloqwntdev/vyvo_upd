import React from "react";

// Format time in mm:ss
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

interface TimerProps {
  currentTime: number;
}

const Timer = ({ currentTime }: TimerProps) => {
  return (
    <span className="text-[10px] md:text-[14px] font-[300] leading-[140%] md:leading-[100%] font-nb text-white opacity-[0.4]">
      {formatTime(currentTime)}
    </span>
  );
};

export default Timer;
