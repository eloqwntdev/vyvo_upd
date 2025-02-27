//@ts-nocheck
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Feature: React.FC<FeatureProps> = ({ icon, text, isActive = false }) => (
  <div className="flex items-center gap-3">
    <div
      className={`size-14 rounded-[16px] vyvo-button ${
        isActive ? "vyvo-tech-bg-banner-tag" : "bg-[#FCFCFE]"
      } shrink-0 grid place-content-center`}
    >
      {icon}
    </div>
    <span className="font-nb text-[16px] leading-[20px] tracking-[-0.03em] vyvo-tech-gradient-text max-w-[228px]">
      {text}
    </span>
  </div>
);

const Tag: React.FC<TagProps> = ({ icon, text, isActive, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-3 cursor-pointer"
    onClick={onClick}
  >
    <div
      className={`size-12 rounded-full ${
        isActive ? "vyvo-tech-bg-banner-tag" : "bg-[#FCFCFE]"
      } shrink-0 grid place-content-center`}
    >
      {React.cloneElement(icon, {
        className: `size-6 ${isActive ? "stroke-[#fff]" : "stroke-[#2A5FDD]"}`, // Dynamically inject className
      })}
    </div>
    <span className="font-nb text-[16px] leading-[20px] tracking-[-0.03em] vyvo-tech-gradient-text">
      {text}
    </span>
  </motion.div>
);

const BiosenseRing: React.FC = () => {
  const [activeTag, setActiveTag] = React.useState("card1");

  const tags = [
    {
      id: "card1",
      icon: <Icon1 />,
      text: "Biosense Ring",
      description:
        "Watching over your well-being has never fit this well. The BioSense Ring is a lightweight, discreet companion that seamlessly tracks key metrics, delivering meaningful health insights to help you optimize your well-being anytime, anywhere.",
    },
    {
      id: "card2",
      icon: <Icon2 />,
      text: "BioSense Band",
      description:
        "Our award-winning BioSense Band combines sleek design with powerful innovation, featuring a Clinical-Grade fingertip sensor to track metrics like body composition, hydration, and more.",
    },
    {
      id: "card3",
      icon: <Icon3 />,
      text: "BioSense Watch",
      description:
        "The BioSense Watch sets a new standard for personal tech with its sleek, lightweight design, packed with advanced features and sensors to track your health metrics. Its vibrant OLED screen, built-in microphone and speaker provides direct access to your Life CoPilot, powered by VAI OS.",
    },
  ];

  const handleTagClick = (id: string) => {
    setActiveTag(id);
  };

  const activeTagData = tags.find((tag) => tag.id === activeTag);

  return (
    <section className="min-h-screen bg-white w-full py-20 lg:block hidden">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-[142px]">
        <motion.h2
          key={activeTagData?.text}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="vyvo-tech-gradient-text font-light text-center font-nb text-[64px] leading-[68px]"
        >
          {activeTagData?.text || "BioSense"}
        </motion.h2>

        <div className="w-full flex justify-start gap-[100px]">
          {/* Tags */}
          <div className="flex flex-col gap-6">
            {tags.map(({ id, icon, text }) => (
              <Tag
                key={id}
                icon={icon}
                text={text}
                isActive={activeTag === id}
                onClick={() => handleTagClick(id)}
              />
            ))}
          </div>

          {/* Content Section */}
          <motion.div
            key={activeTagData?.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center gap-10 mt-[-10%]"
          >
            <motion.img
              key={activeTagData?.id}
              src={`/vyvo-tech-img/${activeTag}.png`}
              alt={activeTag}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[810px] h-[500px] object-contain"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-[30px] items-center"
            >
              <p className="max-w-[744px] w-full font-nb text-[20px] leading-[26px] text-black text-center">
                {activeTagData?.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="py-[15px] bg-[#77A9E829] hover:bg-transparent border border-transparent hover:border-[#77A9E829] transition-all duration-300 ease-in-out vyvo-button w-full max-w-[160px] rounded-[16px]"
              >
                <span className="text-[16px] leading-[18px] text-black tracking-[-0.01em] font-normal">
                  Learn more
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiosenseRing;

const Icon1 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill-opacity="0.2" />
      <circle cx="12" cy="12" r="5" stroke-width="1.5" />
      <circle cx="12" cy="12" r="10" stroke-width="1.5" />
    </svg>
  );
};

const Icon2 = ({ className }: { className?: string }) => {
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
        d="M6 12.5C6 9.21252 6 7.56878 6.72637 6.46243C6.85934 6.25989 7.00791 6.07418 7.16994 5.90796C8.05502 5 9.37001 5 12 5C14.63 5 15.945 5 16.8301 5.90796C16.9921 6.07418 17.1407 6.25989 17.2736 6.46243C18 7.56878 18 9.21252 18 12.5C18 15.7875 18 17.4312 17.2736 18.5376C17.1407 18.7401 16.9921 18.9258 16.8301 19.092C15.945 20 14.63 20 12 20C9.37001 20 8.05502 20 7.16994 19.092C7.00791 18.9258 6.85934 18.7401 6.72637 18.5376C6 17.4312 6 15.7875 6 12.5Z"
        fill-opacity="0.2"
      />
      <path
        d="M6 12.5C6 9.43168 6 7.89753 6.72637 6.86493C6.85934 6.6759 7.00791 6.50256 7.16994 6.34743C8.05502 5.5 9.37001 5.5 12 5.5C14.63 5.5 15.945 5.5 16.8301 6.34743C16.9921 6.50256 17.1407 6.6759 17.2736 6.86493C18 7.89753 18 9.43168 18 12.5C18 15.5683 18 17.1025 17.2736 18.1351C17.1407 18.3241 16.9921 18.4974 16.8301 18.6526C15.945 19.5 14.63 19.5 12 19.5C9.37001 19.5 8.05502 19.5 7.16994 18.6526C7.00791 18.4974 6.85934 18.3241 6.72637 18.1351C6 17.1025 6 15.5683 6 12.5Z"
        stroke-width="1.5"
      />
      <path d="M9 22H15" stroke-width="1.5" stroke-linecap="round" />
      <path d="M9 2H15" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
};

const Icon3 = ({ className }: { className?: string }) => {
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
        d="M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z"
        fill-opacity="0.2"
      />
      <path
        d="M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z"
        stroke-width="1.5"
      />
      <path d="M9 22H15" stroke-width="1.5" stroke-linecap="round" />
      <path d="M9 2H15" stroke-width="1.5" stroke-linecap="round" />
      <path
        d="M9.3881 9.33138C10.3267 8.78308 11.1459 9.00404 11.638 9.356C11.8398 9.50032 11.9406 9.57248 12 9.57248C12.0594 9.57248 12.1602 9.50032 12.362 9.356C12.8541 9.00404 13.6733 8.78308 14.6119 9.33138C15.8437 10.051 16.1224 12.425 13.2812 14.4278C12.74 14.8093 12.4694 15 12 15C11.5306 15 11.26 14.8093 10.7188 14.4278C7.8776 12.425 8.15632 10.051 9.3881 9.33138Z"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
