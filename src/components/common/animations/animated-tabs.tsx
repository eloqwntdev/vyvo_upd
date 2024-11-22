import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "personal", label: "Personal" },
  { id: "pro", label: "Pro" },
];

interface AnimatedTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

function AnimatedTabs({ activeTab, onChange }: AnimatedTabsProps) {
  return (
    <div className="flex space-x-1 tab-styles rounded-[12px] overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            relative 
            rounded-[12px] 
            px-[30px] 
            py-3 
            font-nb 
            text-[16px] 
            leading-[20px] 
            transition-colors 
            duration-200
            outline-none
            ${
              activeTab === tab.id
                ? "text-white font-normal"
                : "text-[#9DA2B3] font-light"
            }
          `}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-0 tab-styles !bg-[#94A8ED29]"
              style={{ borderRadius: 12 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabs;
