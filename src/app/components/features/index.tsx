//@ts-nocheck
"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import {
  AtomicPowerIcon,
  ChartIcon,
  WorkoutIcon,
  SlashIcon,
} from "@/components/svg";
import MobileFeatures from "./mobile-features";
import useBreakpoint from "@/hooks/useBreakpoint";

const tabsData = [
  {
    id: 1,
    icon: "AdvancedAIIcon",
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
    icon: "HealthMonitoringIcon",
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
    icon: "BlockchainIcon",
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

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(tabsData.map(() => React.createRef()));
  const isMobile = useBreakpoint("lg");

  // Use Framer Motion's scroll tracking for the entire container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Set up tab visibility tracking with useInView
  const tabInViews = tabRefs.current.map((ref) =>
    useInView(ref, { amount: 0.3 })
  );

  // Update active tab based on which tab is most visible in viewport
  useEffect(() => {
    const activeIndex = tabInViews.findIndex((isInView) => isInView);
    if (activeIndex !== -1) {
      setActiveTab(activeIndex);
    }
  }, [tabInViews]);

  return (
    <>
      <div
        ref={targetRef}
        className="pb-[300px] top-0 bg-[#050505] lg:block hidden"
      >
        <section className="rounded-[24px] relative z-20 w-full flex items-center justify-center flex-col px-6 md:px-[100px]">
          <motion.div
            className="w-full flex items-center justify-center pt-[60px] z-10  top-0 pb-[150px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[40px] md:text-[64px] sticky top-0 leading-[44px] text-center md:leading-[68px] font-light tracking-[-1.92px] text-white max-w-[649px] font-nb">
              <span className="text-[#94A8ED]">A Companion That</span>{" "}
              Anticipates Your Needs
            </h2>
          </motion.div>
          <div className="flex items-start justify-center w-full gap-[130px]">
            <div className="flex flex-col gap-[50px] sticky top-[40%] z-50 h-full">
              <span className="text-white font-nb text-[16px] leading-[20px] tracking-[-0.48px]">
                Features of VAI
              </span>
              <div className="flex flex-col gap-6 items-baseline">
                {tabsData.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(index);
                      // Scroll to the tab when clicked
                      tabRefs.current[index].current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="flex gap-3 items-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      opacity: activeTab === index ? 1 : 0.7,
                      scale: activeTab === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`size-12 shrink-0 rounded-full bg-[#FCFCFE] ${
                        activeTab === index
                          ? "bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8]"
                          : "bg-[#FCFCFE]"
                      } grid place-content-center transition-colors duration-300`}
                    >
                      {index === 0 ? (
                        <Icon1
                          className={`${
                            activeTab === index
                              ? "stroke-[#fff]"
                              : "stroke-[#2A5FDD]"
                          }`}
                        />
                      ) : index === 1 ? (
                        <Icon2
                          className={`${
                            activeTab === index
                              ? "stroke-[#fff]"
                              : "stroke-[#2A5FDD]"
                          }`}
                        />
                      ) : (
                        <Icon3
                          className={`${
                            activeTab === index
                              ? "stroke-[#fff]"
                              : "stroke-[#2A5FDD]"
                          }`}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[16px] leading-[20px] font-nb ${
                        activeTab === index ? "text-[#94A8ED]" : "text-white"
                      } transition-colors duration-300`}
                    >
                      {tab.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="max-w-[1200px] w-full scrollbar-hide">
              <div className="flex flex-col gap-[200px]">
                <div className="max-w-[900px] w-full flex flex-col gap-[250px]">
                  {tabsData.map((tab, tabIndex) => (
                    <motion.div
                      key={tab.id}
                      ref={tabRefs.current[tabIndex]}
                      className="space-y-20"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tab.sections.map((section, sectionIndex) => {
                        // Reference for this section
                        const sectionRef = useRef(null);

                        // Calculate scroll-based visibility for this section
                        const { scrollYProgress: sectionScroll } = useScroll({
                          target: sectionRef,
                          offset: ["start end", "end start"],
                        });

                        // Center sections are more visible, edges fade out
                        // Last tab's sections are always fully visible
                        const sectionOpacity =
                          tabIndex === tabsData.length - 1
                            ? 1
                            : useTransform(
                                sectionScroll,
                                [0, 0.3, 0.5, 0.7, 1],
                                [0, 1, 1, 1, 0]
                              );

                        return (
                          <motion.div
                            key={sectionIndex}
                            ref={sectionRef}
                            className="w-full flex flex-col md:flex-row items-start justify-between"
                            style={{ opacity: sectionOpacity }}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{
                              y: 0,
                              opacity:
                                tabIndex === tabsData.length - 1
                                  ? 1
                                  : undefined,
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                              duration: 0.5,
                              delay: sectionIndex * 0.1,
                            }}
                          >
                            <motion.span className="max-w-[186px] w-full font-nb text-[24px] leading-[28px] font-normal text-white mb-4 md:mb-0">
                              {section.title}
                            </motion.span>
                            <motion.div className="flex flex-col w-full gap-[10px] max-w-[443px]">
                              {section.items.map((item, itemIndex) => (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ x: -10, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1 }}
                                  viewport={{ once: false }}
                                  transition={{
                                    duration: 0.3,
                                    delay: itemIndex * 0.05,
                                  }}
                                  className="w-full flex items-center gap-8"
                                >
                                  <span className="font-nb text-white text-[14px] leading-[18px] gradient-text cursor-pointer">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <img
        src="/Preloder-back.gif"
        alt="Preloder-back"
        className="fixed w-full top-0 left-0 h-full"
      /> */}
      </div>
      <MobileFeatures />;
    </>
  );
};

export default Features;

export const Icon1 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        fill="white"
        fill-opacity="0.2"
      />
      <path
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 2V4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 1V4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 20V23"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 20V22"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 9L9 13"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 13L13 15"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 14.5L20 14.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 9.5L1 9.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 14.5L2 14.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 9.5L20 9.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Icon2 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_161_1376)">
        <path
          d="M5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H15.4091C16.9545 22 18.1837 21.248 19.2873 20.1966C21.5466 18.0441 17.8372 16.324 16.4224 15.4816C13.1048 13.5061 8.89519 13.5061 5.57757 15.4816Z"
          fill-opacity="0.2"
        />
        <path
          d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.827 14.1422 10.4865 13.7109 13 14.1878"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z"
          fill-opacity="0.2"
        />
        <path
          d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z"
          stroke-width="1.5"
        />
        <path
          d="M19 12C16.7909 12 15 13.7727 15 15.9594C15 16.7059 15.2087 17.4041 15.5714 18L17.2857 20.5H20.7143L22.4286 18C22.7913 17.4041 23 16.7059 23 15.9594C23 13.7727 21.2091 12 19 12Z"
          fill-opacity="0.2"
        />
        <path
          d="M18.3067 21.9497C18.4592 22 18.6395 22 19 22C19.3605 22 19.5408 22 19.6933 21.9497C19.9291 21.872 20.1276 21.7093 20.2501 21.4933C20.3293 21.3536 20.3646 21.1768 20.4353 20.8233C20.4397 20.8013 20.442 20.7902 20.4431 20.7813C20.461 20.6391 20.356 20.5109 20.213 20.5006C20.204 20.5 20.1928 20.5 20.1703 20.5H17.8297C17.8072 20.5 17.796 20.5 17.787 20.5006C17.644 20.5109 17.539 20.6391 17.5569 20.7813C17.558 20.7902 17.5603 20.8013 17.5647 20.8233C17.6354 21.1768 17.6707 21.3536 17.7499 21.4933C17.8724 21.7093 18.0709 21.872 18.3067 21.9497Z"
          fill-opacity="0.2"
        />
        <path
          d="M16.6914 19.5491C16.6455 19.4108 16.6225 19.3417 16.6252 19.2856C16.6309 19.1671 16.7056 19.0631 16.8158 19.0203C16.8679 19 16.9405 19 17.0858 19H20.9142C21.0595 19 21.1321 19 21.1842 19.0203C21.2944 19.0631 21.3691 19.1671 21.3748 19.2856C21.3775 19.3417 21.3545 19.4108 21.3086 19.5491C21.2237 19.8047 21.1812 19.9325 21.1158 20.036C20.9786 20.2528 20.7636 20.4084 20.5153 20.4704C20.3968 20.5 20.2625 20.5 19.9941 20.5H18.0059C17.7375 20.5 17.6032 20.5 17.4847 20.4704C17.2364 20.4084 17.0214 20.2528 16.8842 20.036C16.8188 19.9325 16.7763 19.8047 16.6914 19.5491Z"
          fill-opacity="0.2"
        />
        <path
          d="M15.5714 18C15.2087 17.4041 15 16.7059 15 15.9594C15 13.7727 16.7909 12 19 12C21.2091 12 23 13.7727 23 15.9594C23 16.7059 22.7913 17.4041 22.4286 18"
          stroke-width="0.75"
          stroke-linecap="round"
        />
        <path
          d="M20 16C19.6938 16.3216 19.3556 16.5 19 16.5C18.6444 16.5 18.3062 16.3216 18 16"
          stroke-width="0.75"
          stroke-linecap="round"
        />
        <path
          d="M16.6914 19.5491C16.6455 19.4108 16.6225 19.3417 16.6252 19.2856C16.6309 19.1671 16.7056 19.0631 16.8158 19.0203C16.8679 19 16.9405 19 17.0858 19H20.9142C21.0595 19 21.1321 19 21.1842 19.0203C21.2944 19.0631 21.3691 19.1671 21.3748 19.2856C21.3775 19.3417 21.3545 19.4108 21.3086 19.5491C21.2237 19.8047 21.1812 19.9325 21.1158 20.036C20.9786 20.2528 20.7636 20.4084 20.5153 20.4704C20.3968 20.5 20.2625 20.5 19.9941 20.5H18.0059C17.7375 20.5 17.6032 20.5 17.4847 20.4704C17.2364 20.4084 17.0214 20.2528 16.8842 20.036C16.8188 19.9325 16.7763 19.8047 16.6914 19.5491Z"
          stroke-width="0.75"
        />
        <path
          d="M20.5 20.5L20.4353 20.8233C20.3646 21.1768 20.3293 21.3536 20.2501 21.4933C20.1276 21.7093 19.9291 21.872 19.6933 21.9497C19.5408 22 19.3605 22 19 22C18.6395 22 18.4592 22 18.3067 21.9497C18.0709 21.872 17.8724 21.7093 17.7499 21.4933C17.6707 21.3536 17.6354 21.1768 17.5647 20.8233L17.5 20.5"
          stroke-width="0.75"
        />
        <path
          d="M19 18.75V16.5"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_161_1376">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Icon3 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_161_1385)">
        <path
          d="M0.466797 20.5341H4.20007V16.8008H0.466797V20.5341Z"
          fill-opacity="0.2"
        />
        <path
          d="M23.7998 20.5341H27.5331V16.8008H23.7998V20.5341Z"
          fill-opacity="0.2"
        />
        <path
          d="M0.466797 10.7333H4.20007V7H0.466797V10.7333Z"
          fill-opacity="0.2"
        />
        <path
          d="M12.1328 26.6005H15.8661V22.8672H12.1328V26.6005Z"
          fill-opacity="0.2"
        />
        <path
          d="M12.1328 5.13372H15.8661V1.40039H12.1328V5.13372Z"
          fill-opacity="0.2"
        />
        <path
          d="M23.7998 10.7333H27.5331V7H23.7998V10.7333Z"
          fill-opacity="0.2"
        />
        <path
          d="M13.9986 18.6668L9.33203 16.3335V11.2002L13.9986 13.0669V18.6668Z"
          fill-opacity="0.2"
        />
        <path
          d="M13.998 18.6668L18.6647 16.3335V11.2002L13.998 13.0669V18.6668Z"
          fill-opacity="0.2"
        />
        <path
          d="M13.9986 13.0672L9.33203 11.2005L13.9986 8.86719L18.6653 11.2005L13.9986 13.0672Z"
          fill-opacity="0.2"
        />
        <path d="M9.79954 16.0448L13.5329 17.9115V13.3826L9.79954 11.8892V16.0448ZM13.9995 19.1332C13.9281 19.1332 13.8567 19.1169 13.7909 19.0842L9.1243 16.7509C8.96612 16.6716 8.86621 16.5101 8.86621 16.3333V11.2C8.86621 11.045 8.94321 10.9004 9.07109 10.8136C9.19991 10.7268 9.36371 10.7095 9.50604 10.7664L14.1727 12.6331C14.35 12.7045 14.4662 12.8758 14.4662 13.0666V18.6666C14.4662 18.8286 14.3821 18.9788 14.2445 19.0637C14.1699 19.1099 14.0849 19.1332 13.9995 19.1332Z" />
        <path d="M14.4656 13.3829V17.9118L18.1989 16.0452V11.8895L14.4656 13.3829ZM13.9989 19.1336C13.9135 19.1336 13.8286 19.1098 13.7539 19.0636C13.6162 18.9786 13.5322 18.8284 13.5322 18.6669V13.067C13.5322 12.8761 13.6484 12.7044 13.8257 12.6334L18.4923 10.7668C18.6347 10.7094 18.798 10.7266 18.9273 10.8139C19.0552 10.9007 19.1322 11.0454 19.1322 11.2003V16.3336C19.1322 16.5105 19.0323 16.6719 18.8741 16.7508L14.2075 19.0841C14.1418 19.1173 14.0703 19.1336 13.9989 19.1336Z" />
        <path d="M10.472 11.153L14.0004 12.5642L17.5284 11.153L14.0004 9.38906L10.472 11.153ZM14.0004 13.534C13.9416 13.534 13.8828 13.5228 13.8269 13.5004L9.16024 11.6337C8.98944 11.5656 8.87513 11.4037 8.86763 11.2198C8.85968 11.0364 8.96048 10.8651 9.12477 10.783L13.7914 8.44972C13.923 8.38395 14.0779 8.38395 14.209 8.44972L18.8756 10.783C19.0399 10.8651 19.1407 11.0364 19.1332 11.2198C19.1253 11.4037 19.011 11.5656 18.8402 11.6337L14.1736 13.5004C14.1175 13.5228 14.0592 13.534 14.0004 13.534Z" />
        <path d="M9.33284 11.667C9.22737 11.667 9.1219 11.6315 9.03417 11.5587L6.36438 9.33367H4.20004C3.94195 9.33367 3.7334 9.12462 3.7334 8.86703C3.7334 8.60944 3.942 8.40039 4.20004 8.40039H6.53334C6.64254 8.40039 6.74845 8.43864 6.83246 8.50864L9.63246 10.8419C9.82984 11.0067 9.85691 11.3011 9.69218 11.499C9.59933 11.6095 9.46678 11.667 9.33284 11.667Z" />
        <path d="M18.6674 11.667C18.5335 11.667 18.4009 11.6097 18.3081 11.499C18.1433 11.3011 18.1704 11.0067 18.3678 10.8419L21.1678 8.50864C21.2518 8.43864 21.3577 8.40039 21.4669 8.40039H23.8002C24.0583 8.40039 24.2669 8.60944 24.2669 8.86703C24.2669 9.12462 24.0582 9.33367 23.8002 9.33367H21.6358L18.966 11.5587C18.8784 11.6316 18.7729 11.667 18.6674 11.667Z" />
        <path d="M23.8002 19.1338H21.4669C21.3577 19.1338 21.2518 19.0955 21.1678 19.0255L18.3678 16.6922C18.1704 16.5275 18.1433 16.233 18.3081 16.0352C18.4733 15.8373 18.7673 15.8102 18.9661 15.9754L21.6359 18.2005H23.8003C24.0584 18.2005 24.2669 18.4095 24.2669 18.6671C24.2669 18.9247 24.0582 19.1338 23.8002 19.1338Z" />
        <path d="M6.53334 19.1337H4.20004C3.94195 19.1337 3.7334 18.9247 3.7334 18.6671C3.7334 18.4095 3.942 18.2005 4.20004 18.2005H6.36443L9.03422 15.9754C9.23349 15.8102 9.52699 15.8373 9.69223 16.0351C9.85697 16.233 9.82989 16.5274 9.63252 16.6922L6.83252 19.0255C6.74851 19.0955 6.64254 19.1337 6.53334 19.1337Z" />
        <path d="M13.9998 9.3336C13.7418 9.3336 13.5332 9.12455 13.5332 8.86696V5.13363C13.5332 4.87604 13.7418 4.66699 13.9998 4.66699C14.2579 4.66699 14.4665 4.87604 14.4665 5.13363V8.86696C14.4665 9.1245 14.2579 9.3336 13.9998 9.3336Z" />
        <path d="M13.9998 23.3334C13.7418 23.3334 13.5332 23.1244 13.5332 22.8668V18.6668C13.5332 18.4092 13.7418 18.2002 13.9998 18.2002C14.2579 18.2002 14.4665 18.4092 14.4665 18.6668V22.8668C14.4665 23.1244 14.2579 23.3334 13.9998 23.3334Z" />
        <path d="M0.933278 20.0673H3.73328V17.2673H0.933278V20.0673ZM4.19992 21.0006H0.466639C0.20855 21.0006 0 20.7915 0 20.534V16.8006C0 16.543 0.208606 16.334 0.466639 16.334H4.19997C4.45756 16.334 4.66661 16.543 4.66661 16.8006V20.534C4.66661 20.7915 4.45756 21.0006 4.19992 21.0006Z" />
        <path d="M24.2663 20.0673H27.0663V17.2673H24.2663V20.0673ZM27.533 21.0006H23.7996C23.5416 21.0006 23.333 20.7915 23.333 20.534V16.8006C23.333 16.543 23.5416 16.334 23.7996 16.334H27.533C27.7906 16.334 27.9996 16.543 27.9996 16.8006V20.534C27.9997 20.7915 27.7906 21.0006 27.533 21.0006Z" />
        <path d="M0.933278 10.2665H3.73328V7.46648H0.933278V10.2665ZM4.19992 11.1998H0.466639C0.20855 11.1998 0 10.9908 0 10.7332V6.99984C0 6.74225 0.208606 6.5332 0.466639 6.5332H4.19997C4.45756 6.5332 4.66661 6.74225 4.66661 6.99984V10.7332C4.66661 10.9908 4.45756 11.1998 4.19992 11.1998Z" />
        <path d="M12.5993 26.1337H15.3993V23.3337H12.5993V26.1337ZM15.866 27.067H12.1327C11.8746 27.067 11.666 26.858 11.666 26.6004V22.867C11.666 22.6094 11.8746 22.4004 12.1327 22.4004H15.866C16.1236 22.4004 16.3326 22.6094 16.3326 22.867V26.6004C16.3327 26.858 16.1236 27.067 15.866 27.067Z" />
        <path d="M12.5993 4.66687H15.3993V1.86687H12.5993V4.66687ZM15.866 5.6002H12.1327C11.8746 5.6002 11.666 5.39115 11.666 5.13357V1.40023C11.666 1.14264 11.8746 0.933594 12.1327 0.933594H15.866C16.1236 0.933594 16.3326 1.14264 16.3326 1.40023V5.13357C16.3327 5.39115 16.1236 5.6002 15.866 5.6002Z" />
        <path d="M24.2663 10.2665H27.0663V7.46648H24.2663V10.2665ZM27.533 11.1998H23.7996C23.5416 11.1998 23.333 10.9908 23.333 10.7332V6.99984C23.333 6.74225 23.5416 6.5332 23.7996 6.5332H27.533C27.7906 6.5332 27.9996 6.74225 27.9996 6.99984V10.7332C27.9997 10.9908 27.7906 11.1998 27.533 11.1998Z" />
      </g>
      <defs>
        <clipPath id="clip0_161_1385">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
