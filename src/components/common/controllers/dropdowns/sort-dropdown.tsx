"use client";
import React, { useState, useRef, useEffect } from "react";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most recent");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        //@ts-ignore
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (typeof document !== "undefined") {
  document.addEventListener("mousedown", handleClickOutside);
}
    return () => {
  if (typeof document !== "undefined") {
    document.removeEventListener("mousedown", handleClickOutside);
  }
};
  }, []);

  const options = ["Most recent", "Title", "Title"];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[8px] px-3 md:px-[20px] lg:px-[24px] py-1 md:py-[12px] lg:py-[14px] bg-[#77A9E829] text-white rounded-[12px] md:rounded-[16px] lg:rounded-[20px] dropdown-shadow font-medium text-[14px] md:text-[15px] lg:text-[16px] hover:bg-[#77A9E840] transition-all duration-300"
      >
        Sort by
        <ArrowIcon
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full z-50 left-0 dropdown-menu-shadow mt-[4px] w-[140px] md:w-[160px] lg:w-[180px] flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] py-[24px] md:py-[30px] lg:py-[37px] px-[20px] md:px-[24px] lg:px-[30px] bg-[#77A9E866] backdrop-blur-sm rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left text-white text-[12px] md:text-[15px] lg:text-[16px] transition-all duration-300 
                ${selectedOption === option ? "opacity-50" : "opacity-100"}
                hover:opacity-100 hover:translate-x-1 hover:font-medium
                relative group`}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

const ArrowIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15C6 15 10.4189 9.00001 12 9C13.5812 8.99999 18 15 18 15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
