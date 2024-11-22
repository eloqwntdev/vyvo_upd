import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { AtomicPowerIcon, ChartIcon, WorkoutIcon } from "@/components/svg";
import { Icon1, Icon2, Icon3 } from ".";

const MobileFeatures = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] min-h-[568px] px-4 py-[28px] rounded-[24px] pb-16">
      <div className="flex flex-col mb-[28px]">
        <h2 className="text-[24px] leading-[28px] font-nb font-light tracking-[-0.72px] text-center mb-[71px]">
          <span className="text-[#94A8ED] block mb-1">A Companion That</span>
          <span className="text-white">Anticipates Your Needs</span>
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-white text-center font-nb text-[16px] leading-[20px] tracking-[-0.48px]">
          Features of VAI
        </span>

        <div className="flex flex-col border-y border-[#fff]">
          {tabsData.map((tab, index) => (
            <div
              key={tab.id}
              className="border-t border-[#fff] first:border-t-0"
            >
              <motion.div
                className="w-full py-[19px] flex items-center justify-between"
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
              >
                <div className="flex items-center gap-[12px]">
                  <div
                    className={`size-8 flex items-center justify-center rounded-full
                  ${
                    activeAccordion === index
                      ? "vyvo-tech-bg-banner-tag"
                      : "bg-[#FCFCFE]"
                  }`}
                  >
                    {index === 0 ? (
                      <Icon1
                        className={`${
                          activeAccordion === index
                            ? "stroke-[#fff]"
                            : "stroke-[#2A5FDD]"
                        }`}
                      />
                    ) : index === 1 ? (
                      <Icon2
                        className={`${
                          activeAccordion === index
                            ? "stroke-[#fff]"
                            : "stroke-[#2A5FDD]"
                        }`}
                      />
                    ) : (
                      <Icon3
                        className={`${
                          activeAccordion === index
                            ? "stroke-[#fff]"
                            : "stroke-[#2A5FDD]"
                        }`}
                      />
                    )}
                  </div>
                </div>
                <span
                  className={`font-nb text-[16px] leading-[20px] tracking-[-0.03em]
                  ${
                    activeAccordion === index ? "text-[#94A8ED]" : "text-white"
                  }`}
                >
                  {tab.label}
                </span>
                <motion.div
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon
                    className={`w-5 h-5 ${
                      activeAccordion === index ? "text-[#]" : "text-white"
                    }`}
                  />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6  flex flex-col gap-4">
                      {tab.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="flex flex-col gap-2">
                          <h3 className="font-nb text-[16px] leading-[20px] tracking-[-0.03em] text-white">
                            {section.title}
                          </h3>
                          <div className="flex flex-col gap-[2px]">
                            {section.items.map((item, itemIndex) => (
                              <motion.p
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: itemIndex * 0.1,
                                }}
                                className="text-[#9DA2B3] text-[14px] leading-[18px] tracking-[-0.03em] font-light"
                              >
                                {item}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add ChevronIcon components
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 1.00005C13 1.00005 8.58107 6.99999 6.99995 7C5.41884 7.00001 1 1 1 1"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default MobileFeatures;

const tabsData = [
  {
    id: 1,
    icon: AtomicPowerIcon,
    label: "Advanced AI",
    sections: [
      {
        title: "Adaptive AI Technology",
        items: [
          "Continuously learns from your interactions and data.",
          "Provides personalized recommendations.",
          "Initiates conversations based on real-time data received.",
        ],
      },
      {
        title: "Interactive & Flexible Communication",
        items: [
          "Built with Natural Language Processing.",
          "Engaging, lifelike conversations with anyone.",
          "Connect through text and voice via your preferred applications.",
        ],
      },
      {
        title: "Built For Developers",
        items: [
          "Developers have the tools to create custom features and extensions within VAI OS.",
          "Marketplace for extensions developed.",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: WorkoutIcon,
    label: "Proactive Outreach",
    sections: [
      {
        title: "Health Monitoring",
        items: [
          "Integrated with Vyvo Tech, such as the BioSense Ring.",
          "Monitors and analyzes real-time health data.",
          "Reaches out with alerts or suggestions based on the data received.",
        ],
      },
      {
        title: "Personalized Suggestions",
        items: [
          "Analyzes your data to learn more about you and make recommendations tailored to you.",
          "Personalized health advice to fit your needs.",
        ],
      },
      {
        title: "Productivity Booster",
        items: [
          "Helps you work by assisting with writing emails, reports, and much more.",
          "Intuitive calendar and task management, keeping you prepared and ready to go.",
        ],
      },
    ],
  },
  {
    id: 3,
    icon: ChartIcon,
    label: "Built on Blockchain",
    sections: [
      {
        title: "Blockchain Security",
        items: [
          "Built on Vyvo Smart Chain for enhanced privacy and security.",
          "Enables decentralized data management.",
          "Keeps your personal and health information safe.",
        ],
      },
      {
        title: "Ownership of Data",
        items: [
          "Ensures your data remains yours and under your control.",
          "Does not share your interactions or data with others.",
          "Provides peace of mind with private and secure management.",
        ],
      },
    ],
  },
];
