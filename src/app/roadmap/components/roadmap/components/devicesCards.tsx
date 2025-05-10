import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DevicesCards = ({
  id,
  isMobile,
  saw,
}: {
  id?: string;
  isMobile: boolean;
  saw?: boolean;
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>("Icon3");
  const [imageSrc, setImageSrc] = useState("/homepage/card-watch-3.png");
  const [textContent, setTextContent] = useState("BioSense Watch");
  const [inView, SetInView] = useState(false);

  useEffect(() => {
    if (saw) {
      SetInView(saw);
    }
  }, [saw]);
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
    <motion.div
      onViewportEnter={() => {
        if (isMobile) {
          SetInView(true);
        }
      }}
      onClick={() => {
        switch (selectedIcon) {
          // case "Icon1":
          //   window.location.href = "/ring";
          //   break;
          // case "Icon2":
          //   window.location.href = "/band";
          //   break;
          // case "Icon3":
          //   window.location.href = "/watch";
          //   break;
          default:
            window.location.href = "/wearables";
            break;
        }
      }}
      className="cursor-pointer rounded-[18px]"
    >
      <div
        style={{
          border: "1px solid rgba(119, 169, 232, 0.15)",
        }}
        className="rounded-[18px] relative"
      >
        <img
          src="/roadmap-img/roadmap-cards/health-metrics-wearables.png"
          alt=""
          className="pointer-events-none opacity-0 mix-blend-color-dodge"
        />
        <motion.img
          initial={{
            opacity: 0.5,
          }}
          animate={{
            opacity: inView ? 1 : 0.5,
          }}
          transition={{ duration: 1, delay: 1 }}
          src={imageSrc}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-110"
        />
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent font-light font-nb text-[48px] leading-[55px] max-w-[235px] text-center "
        >
          {textContent}
        </motion.span>
        <div className="absolute z-20 top-1/2 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center">
          <div className="flex gap-[10.67px]">
            <motion.div
              className={`size-[32px] rounded-full cursor-pointer bg-[#fff] ${
                selectedIcon === "Icon3" ? "card-3-tag" : ""
              } grid place-content-center`}
              initial={{
                opacity: 0.5,
              }}
              animate={{
                opacity: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1 }}
              onHoverStart={() => handleClick("Icon3")}
            >
              {selectedIcon === "Icon3" ? (
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3335 8C1.3335 5.80835 1.3335 4.71252 1.9388 3.97495C2.04961 3.83993 2.17342 3.71612 2.30845 3.60531C3.04601 3 4.14184 3 6.3335 3C8.52515 3 9.62098 3 10.3585 3.60531C10.4936 3.71612 10.6174 3.83993 10.7282 3.97495C11.3335 4.71252 11.3335 5.80835 11.3335 8C11.3335 10.1917 11.3335 11.2875 10.7282 12.025C10.6174 12.1601 10.4936 12.2839 10.3585 12.3947C9.62098 13 8.52515 13 6.3335 13C4.14184 13 3.04601 13 2.30845 12.3947C2.17342 12.2839 2.04961 12.1601 1.9388 12.025C1.3335 11.2875 1.3335 10.1917 1.3335 8Z"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M1.3335 8C1.3335 5.80835 1.3335 4.71252 1.9388 3.97495C2.04961 3.83993 2.17342 3.71612 2.30845 3.60531C3.04601 3 4.14184 3 6.3335 3C8.52515 3 9.62098 3 10.3585 3.60531C10.4936 3.71612 10.6174 3.83993 10.7282 3.97495C11.3335 4.71252 11.3335 5.80835 11.3335 8C11.3335 10.1917 11.3335 11.2875 10.7282 12.025C10.6174 12.1601 10.4936 12.2839 10.3585 12.3947C9.62098 13 8.52515 13 6.3335 13C4.14184 13 3.04601 13 2.30845 12.3947C2.17342 12.2839 2.04961 12.1601 1.9388 12.025C1.3335 11.2875 1.3335 10.1917 1.3335 8Z"
                    stroke="white"
                  />
                  <path
                    d="M4.3335 14.6667H8.3335"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.3335 1.33325H8.3335"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.59207 6.22092C5.21779 5.85538 5.76391 6.00269 6.09198 6.23734C6.2265 6.33355 6.29376 6.38165 6.33333 6.38165C6.37291 6.38165 6.44016 6.33355 6.57468 6.23734C6.90276 6.00269 7.44888 5.85538 8.0746 6.22092C8.89578 6.70065 9.0816 8.2833 7.18744 9.61852C6.82667 9.87284 6.64628 10 6.33333 10C6.02039 10 5.84 9.87284 5.47922 9.61852C3.58507 8.2833 3.77088 6.70065 4.59207 6.22092Z"
                    stroke="white"
                    stroke-linecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                >
                  <path
                    d="M1.33203 8C1.33203 5.80835 1.33203 4.71252 1.93734 3.97495C2.04815 3.83993 2.17196 3.71612 2.30698 3.60531C3.04455 3 4.14038 3 6.33203 3C8.52369 3 9.61951 3 10.3571 3.60531C10.4921 3.71612 10.6159 3.83993 10.7267 3.97495C11.332 4.71252 11.332 5.80835 11.332 8C11.332 10.1917 11.332 11.2875 10.7267 12.025C10.6159 12.1601 10.4921 12.2839 10.3571 12.3947C9.61951 13 8.52369 13 6.33203 13C4.14038 13 3.04455 13 2.30698 12.3947C2.17196 12.2839 2.04815 12.1601 1.93734 12.025C1.33203 11.2875 1.33203 10.1917 1.33203 8Z"
                    fill="#2A5FDD"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M1.33203 8C1.33203 5.80835 1.33203 4.71252 1.93734 3.97495C2.04815 3.83993 2.17196 3.71612 2.30698 3.60531C3.04455 3 4.14038 3 6.33203 3C8.52369 3 9.61951 3 10.3571 3.60531C10.4921 3.71612 10.6159 3.83993 10.7267 3.97495C11.332 4.71252 11.332 5.80835 11.332 8C11.332 10.1917 11.332 11.2875 10.7267 12.025C10.6159 12.1601 10.4921 12.2839 10.3571 12.3947C9.61951 13 8.52369 13 6.33203 13C4.14038 13 3.04455 13 2.30698 12.3947C2.17196 12.2839 2.04815 12.1601 1.93734 12.025C1.33203 11.2875 1.33203 10.1917 1.33203 8Z"
                    stroke="#2A5FDD"
                  />
                  <path
                    d="M4.33203 14.6667H8.33203"
                    stroke="#2A5FDD"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.33203 1.33325H8.33203"
                    stroke="#2A5FDD"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.59207 6.22092C5.21779 5.85538 5.76391 6.00269 6.09198 6.23734C6.2265 6.33355 6.29376 6.38165 6.33333 6.38165C6.37291 6.38165 6.44016 6.33355 6.57468 6.23734C6.90276 6.00269 7.44888 5.85538 8.0746 6.22092C8.89578 6.70065 9.0816 8.2833 7.18744 9.61852C6.82667 9.87284 6.64628 10 6.33333 10C6.02039 10 5.84 9.87284 5.47922 9.61852C3.58507 8.2833 3.77088 6.70065 4.59207 6.22092Z"
                    stroke="#2A5FDD"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </motion.div>
            <motion.div
              className={`size-[32px] rounded-full cursor-pointer bg-[#fff] ${
                selectedIcon === "Icon1" ? "card-3-tag" : ""
              } grid place-content-center`}
              onHoverStart={() => handleClick("Icon1")}
              initial={{
                opacity: 0.5,
              }}
              animate={{
                opacity: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {selectedIcon === "Icon1" ? (
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
                  <circle cx="7.9987" cy="8.00016" r="6.66667" stroke="white" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8.0013"
                    cy="8.00008"
                    r="3.33333"
                    fill="#2A5FDD"
                    fill-opacity="0.2"
                  />
                  <circle
                    cx="8.0013"
                    cy="8.00008"
                    r="3.33333"
                    stroke="#2A5FDD"
                  />
                  <circle
                    cx="7.9987"
                    cy="7.99992"
                    r="6.66667"
                    stroke="#2A5FDD"
                  />
                </svg>
              )}
            </motion.div>
            <motion.div
              className={`size-[32px] rounded-full cursor-pointer bg-[#fff] ${
                selectedIcon === "Icon2" ? "card-3-tag" : ""
              } grid place-content-center`}
              onHoverStart={() => handleClick("Icon2")}
              initial={{
                opacity: 0.5,
              }}
              animate={{
                opacity: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {selectedIcon === "Icon2" ? (
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.66797 8.33325C4.66797 6.1416 4.66797 5.04577 5.15221 4.3082C5.24086 4.17318 5.33991 4.04937 5.44793 3.93856C6.03798 3.33325 6.91465 3.33325 8.66797 3.33325C10.4213 3.33325 11.298 3.33325 11.888 3.93856C11.996 4.04937 12.0951 4.17318 12.1837 4.3082C12.668 5.04577 12.668 6.1416 12.668 8.33325C12.668 10.5249 12.668 11.6207 12.1837 12.3583C12.0951 12.4933 11.996 12.6171 11.888 12.7279C11.298 13.3333 10.4213 13.3333 8.66797 13.3333C6.91465 13.3333 6.03798 13.3333 5.44793 12.7279C5.33991 12.6171 5.24086 12.4933 5.15221 12.3583C4.66797 11.6207 4.66797 10.5249 4.66797 8.33325Z"
                    fill="#2A5FDD"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M4.66797 8.33317C4.66797 6.28763 4.66797 5.26485 5.15221 4.57646C5.24086 4.45044 5.33991 4.33488 5.44793 4.23146C6.03798 3.6665 6.91465 3.6665 8.66797 3.6665C10.4213 3.6665 11.298 3.6665 11.888 4.23146C11.996 4.33488 12.0951 4.45044 12.1837 4.57646C12.668 5.26485 12.668 6.28763 12.668 8.33317C12.668 10.3787 12.668 11.4015 12.1837 12.0899C12.0951 12.2159 11.996 12.3315 11.888 12.4349C11.298 12.9998 10.4213 12.9998 8.66797 12.9998C6.91465 12.9998 6.03798 12.9998 5.44793 12.4349C5.33991 12.3315 5.24086 12.2159 5.15221 12.0899C4.66797 11.4015 4.66797 10.3787 4.66797 8.33317Z"
                    stroke="#2A5FDD"
                  />
                  <path
                    d="M6.66797 14.6665H10.668"
                    stroke="#2A5FDD"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.66797 1.33325H10.668"
                    stroke="#2A5FDD"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </motion.div>
          </div>
          <span className="bg-gradient-to-r opacity-0 from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent font-light font-nb text-[48px] leading-[55px] max-w-[235px] text-center ">
            {textContent}
          </span>
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            transition={{ duration: 1, delay: 1.2 }}
            className="capitalize w-full text-center font-nb text-[24px] leading-[28px] text-white"
          >
            Vyvo Devices
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default DevicesCards;
