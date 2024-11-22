"use client";
import React, { useState } from "react";

const HomePage = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState("/homepage/card-watch-1.png");
  const [textContent, setTextContent] = useState("Default text content");

  const handleClick = (icon: string | null) => {
    setSelectedIcon(icon);

    if (icon === "Icon1") {
      setImageSrc("/homepage/card-watch-1.png");
      setTextContent("BioSense Ring");
    } else if (icon === "Icon2") {
      setImageSrc("/homepage/card-watch-2.png");
      setTextContent("BioSense Band");
    } else if (icon === "Icon3") {
      setImageSrc("/homepage/card-watch-3.png");
      setTextContent("BioSense Watch");
    }
  };
  return (
    <section className="min-h-[900px] flex relative flex-col items-center pt-[96px] md:pt-[162px] 2xl:px-0 px-4 bg-black">
      <img
        src="/homepage/home.svg"
        alt=""
        className="px-10 sm:px-0 relative z-10"
      />
      <img
        src="/Preloder-back.gif"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 pt-[96px] md:pt-[162px] pb-6 lg:pb-0">
        <div className="card-1-gradient p-[2.5px] rounded-[18px] card-shadow">
          <div className="p-4 rounded-[18px] card-1-inner-gradient relative">
            <img
              src="/homepage/card-1.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize font-nb text-[24px] leading-[28px] text-white absolute bottom-[38px] left-1/2 transform -translate-x-1/2">
              VAI OS
            </span>
          </div>
        </div>
        <div className="card-2-gradient p-[2.5px] rounded-[18px] card-shadow">
          <div className="p-4 rounded-[18px] card-2-inner-gradient relative">
            <img
              src="/homepage/card-2.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize max-w-[198px] w-full font-nb text-[24px] leading-[28px] text-white absolute bottom-[38px] left-1/2 transform -translate-x-1/2">
              Vyvo Smart Chain
            </span>
          </div>
        </div>
        <div className="card-3-gradient p-[2.5px] rounded-[18px] card-shadow ">
          <div className="p-4 rounded-[18px] card-3-inner-gradient relative">
            <img
              src="/homepage/card-3.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <img
              src={imageSrc}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-110"
            />{" "}
            <div className="absolute top-[36px] left-1/2 transform -translate-x-1/2 flex flex-col gap-10 items-center">
              <div className="flex gap-[10.67px]">
                <div
                  className={`size-[32px] rounded-full cursor-pointer bg-[#FCFCFE1A] ${
                    selectedIcon === "Icon1" ? "card-3-tag" : ""
                  } grid place-content-center`}
                  onClick={() => handleClick("Icon1")}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7.99935"
                      cy="8.00008"
                      r="3.33333"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <circle
                      cx="7.99935"
                      cy="8.00008"
                      r="3.33333"
                      stroke="white"
                    />
                    <circle
                      cx="7.9987"
                      cy="8.00016"
                      r="6.66667"
                      stroke="white"
                    />
                  </svg>
                </div>

                <div
                  className={`size-[32px] rounded-full cursor-pointer bg-[#FCFCFE1A] ${
                    selectedIcon === "Icon2" ? "card-3-tag" : ""
                  } grid place-content-center`}
                  onClick={() => handleClick("Icon2")}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66602 8.33325C4.66602 6.1416 4.66602 5.04577 5.15026 4.3082C5.23891 4.17318 5.33796 4.04937 5.44598 3.93856C6.03603 3.33325 6.91269 3.33325 8.66602 3.33325C10.4193 3.33325 11.296 3.33325 11.8861 3.93856C11.9941 4.04937 12.0931 4.17318 12.1818 4.3082C12.666 5.04577 12.666 6.1416 12.666 8.33325C12.666 10.5249 12.666 11.6207 12.1818 12.3583C12.0931 12.4933 11.9941 12.6171 11.8861 12.7279C11.296 13.3333 10.4193 13.3333 8.66602 13.3333C6.91269 13.3333 6.03603 13.3333 5.44598 12.7279C5.33796 12.6171 5.23891 12.4933 5.15026 12.3583C4.66602 11.6207 4.66602 10.5249 4.66602 8.33325Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M4.66602 8.33317C4.66602 6.28763 4.66602 5.26485 5.15026 4.57646C5.23891 4.45044 5.33796 4.33488 5.44598 4.23146C6.03603 3.6665 6.91269 3.6665 8.66602 3.6665C10.4193 3.6665 11.296 3.6665 11.8861 4.23146C11.9941 4.33488 12.0931 4.45044 12.1818 4.57646C12.666 5.26485 12.666 6.28763 12.666 8.33317C12.666 10.3787 12.666 11.4015 12.1818 12.0899C12.0931 12.2159 11.9941 12.3315 11.8861 12.4349C11.296 12.9998 10.4193 12.9998 8.66602 12.9998C6.91269 12.9998 6.03603 12.9998 5.44598 12.4349C5.33796 12.3315 5.23891 12.2159 5.15026 12.0899C4.66602 11.4015 4.66602 10.3787 4.66602 8.33317Z"
                      stroke="white"
                    />
                    <path
                      d="M6.66602 14.6665H10.666"
                      stroke="white"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.66602 1.33325H10.666"
                      stroke="white"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div
                  className={`size-[32px] rounded-full cursor-pointer bg-[#FCFCFE1A] ${
                    selectedIcon === "Icon3" ? "card-3-tag" : ""
                  } grid place-content-center`}
                  onClick={() => handleClick("Icon3")}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33398 8C3.33398 5.80835 3.33398 4.71252 3.93929 3.97495C4.0501 3.83993 4.17391 3.71612 4.30894 3.60531C5.0465 3 6.14233 3 8.33398 3C10.5256 3 11.6215 3 12.359 3.60531C12.4941 3.71612 12.6179 3.83993 12.7287 3.97495C13.334 4.71252 13.334 5.80835 13.334 8C13.334 10.1917 13.334 11.2875 12.7287 12.025C12.6179 12.1601 12.4941 12.2839 12.359 12.3947C11.6215 13 10.5256 13 8.33398 13C6.14233 13 5.0465 13 4.30894 12.3947C4.17391 12.2839 4.0501 12.1601 3.93929 12.025C3.33398 11.2875 3.33398 10.1917 3.33398 8Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M3.33398 8C3.33398 5.80835 3.33398 4.71252 3.93929 3.97495C4.0501 3.83993 4.17391 3.71612 4.30894 3.60531C5.0465 3 6.14233 3 8.33398 3C10.5256 3 11.6215 3 12.359 3.60531C12.4941 3.71612 12.6179 3.83993 12.7287 3.97495C13.334 4.71252 13.334 5.80835 13.334 8C13.334 10.1917 13.334 11.2875 12.7287 12.025C12.6179 12.1601 12.4941 12.2839 12.359 12.3947C11.6215 13 10.5256 13 8.33398 13C6.14233 13 5.0465 13 4.30894 12.3947C4.17391 12.2839 4.0501 12.1601 3.93929 12.025C3.33398 11.2875 3.33398 10.1917 3.33398 8Z"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
              <span className="bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent font-light font-nb text-[48px] leading-[48px] max-w-[235px] text-center ">
                {textContent}
              </span>
            </div>
            <span className="capitalize font-nb text-[24px] leading-[28px] text-white absolute bottom-[38px] left-1/2 transform -translate-x-1/2">
              Vyvo Tech
            </span>
          </div>
        </div>

        <div className="card-4-gradient p-[2.5px] rounded-[18px] card-shadow">
          <div className="p-4 rounded-[18px] card-4-inner-gradient relative">
            <img
              src="/homepage/card-4.png"
              alt=""
              className="mix-blend-color-dodge"
            />
            <span className="capitalize font-nb text-[24px] leading-[28px] text-white absolute bottom-[38px] left-1/2 transform -translate-x-1/2">
              Vyvo SocialFi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
