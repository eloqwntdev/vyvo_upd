"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolutionCard from "./solution-card";
import MobileSolutionCard from "./mobile-solution-card";

const TechSolutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleSectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionCards = [
    {
      title: "VAI OS",
      description:
        "At the vanguard of AI, Vyvo turns data from your day to day life into actionable insights that adapt to your lifestyle. With your Life CoPilot, every interaction makes it smarter and capable of new personalized solutions, delivering ever growing value for its users.",
      images: [
        "/homepage/solutions/card3/card1.webp",
        "/homepage/solutions/card3/card2.webp",
        "/homepage/solutions/card3/card3.webp",
      ],
      reverse: false,
    },
    {
      title: "Vyvo Tech",
      description: [
        "Vyvo's wearables redefine what it means to stay connected to your health. Using IoT and cutting-edge sensors, our devices have built intuitive solutions that not only track your body's signals but also translate them into meaningful and actionable insights.",
        "Integrated with AI and blockchain, Vyvo wearables offer a seamless blend of real-time data and personalized wellness guidance, helping you make informed choices effortlessly.",
      ],
      images: [
        "/homepage/solutions/card2/card1.webp",
        "/homepage/solutions/card2/card2.webp",
        "/homepage/solutions/card2/card3.webp",
      ],
      reverse: true,
    },

    {
      title: "Vyvo Smart Chain",
      description:
        "The first heartbeat-powered blockchain, Vyvo Smart Chain keeps your data private, secure, and under your control. No third parties—just complete transparency and ownership. With its decentralized platform, you can manage and access rewards generated from anonymous wearable data.",
      images: [
        "/homepage/solutions/card1/card1.webp",
        "/homepage/solutions/card1/card2.webp",
        "/homepage/solutions/card1/card3.webp",
      ],
      reverse: false,
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Track scroll for title fade effect - more gradual fade out
  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "30% start"],
  });

  // Create header opacity and y-movement based on scroll - more gradual with more movement
  const headerOpacity = useTransform(titleScrollProgress, [0, 0.25], [1, 0]);
  const headerY = useTransform(titleScrollProgress, [0, 0.25], [0, -100]);
  const headerScale = useTransform(titleScrollProgress, [0, 0.25], [1, 0.9]);

  // Track when header is fully scrolled past
  useEffect(() => {
    if (isMobile) return; // Skip for mobile

    const unsubscribe = titleScrollProgress.onChange((v) => {
      setScrolledPastHeader(v > 0.25);
    });
    return () => unsubscribe();
  }, [titleScrollProgress, isMobile]);

  // Track which card is currently in view
  useEffect(() => {
    if (isMobile) return; // Skip for mobile

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      // If we're above the container, don't update active card
      if (containerTop > screenHeight) return;

      // If we're below the container, set active card to last card
      if (containerTop < -screenHeight * solutionCards.length) {
        setActiveCard(solutionCards.length - 1);
        return;
      }

      // Calculate which card should be active based on scroll position
      const scrollOffset = -containerTop;
      const cardIndex = Math.min(
        Math.floor(scrollOffset / screenHeight),
        solutionCards.length - 1
      );

      if (cardIndex >= 0) {
        setActiveCard(cardIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [solutionCards.length, isMobile]);

  // Initialize refs array for card elements
  useEffect(() => {
    if (isMobile) return; // Skip for mobile
    cardRefs.current = Array(solutionCards.length).fill(null);
  }, [solutionCards.length, isMobile]);

  // Mobile view
  if (isMobile) {
    return (
      <section className="bg-[#000000] py-10">
        <div className="w-full px-4">
          <h2 className="font-nb font-light text-[24px] leading-[30px] tracking-[-3%] text-white text-center mb-8">
            Vyvo drives innovation at the intersection of Web3, Wearable
            Technology, and AI.
          </h2>
          <p className="text-white/80 font-nb font-light text-[16px] leading-[22px] tracking-[-3%] text-center mb-12">
            Smarter living with secure, personalized, and adaptive solutions.
          </p>

          <div className="flex flex-col gap-10">
            {solutionCards.map((card, index) => (
              <MobileSolutionCard
                key={index}
                title={card.title}
                description={card.description}
                images={card.images}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section ref={containerRef} className="bg-[#000000] relative">
      {/* Header section - now with more visible movement on scroll */}
      <div
        ref={titleSectionRef}
        className={`min-h-screen w-full flex items-center justify-center sticky top-0 z-40 
          ${scrolledPastHeader ? "pointer-events-none" : ""}`}
      >
        <motion.div
          className="w-full md:max-w-[900px] flex text-left md:text-center flex-col gap-4 md:gap-6 px-4 md:px-8"
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-nb font-light text-[20px] md:text-[32px] lg:text-[48px] leading-[24px] md:leading-[40px] lg:leading-[56px] tracking-[-3%] text-white"
          >
            Vyvo drives innovation at the intersection of Web3, Wearable
            Technology, and AI.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-white/80 font-nb font-light text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] md:leading-[28px] lg:leading-[32px] tracking-[-3%]"
          >
            Smarter living with secure, personalized, and adaptive solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Stacked cards container */}
      <div className="relative h-[300vh]">
        {solutionCards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              ref={(el) => {
                // Properly assign ref without returning a value
                cardRefs.current[index] = el;
              }}
              className={`min-h-screen w-full absolute top-0 left-0
                ${index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"}`}
              style={{
                transform: `translateY(${index * 100}vh)`,
              }}
            >
              <motion.div
                className="sticky top-0 min-h-screen w-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <SolutionCard
                  title={card.title}
                  description={card.description}
                  images={card.images}
                  reverse={card.reverse}
                  //@ts-ignore
                  isActive={isActive}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechSolutions;
