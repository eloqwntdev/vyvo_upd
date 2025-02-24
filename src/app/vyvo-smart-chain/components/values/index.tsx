"use client";
import { useEffect, useState } from "react";
import DesktopValues from "./desktop-values";
import MobileValues from "./mobile-values";

const Values = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? <MobileValues /> : <DesktopValues />;
};

export default Values;
