"use client";
import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

const useBreakpoint = (breakpoint: Breakpoint) => {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsBelow(window.innerWidth < breakpoints[breakpoint]);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isBelow;
};

export default useBreakpoint;
