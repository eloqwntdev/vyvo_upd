"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define interfaces for our components
interface Card {
  id: number;
  title: string;
  content: string;
}

interface ExpandableCardProps {
  id: number;
  title: string;
  content: string;
  delay?: number;
  isMobile?: boolean;
}

const UnderstandBody = () => {
  // Sample data for cards
  const cards: Card[] = [
    {
      id: 1,
      title: "Bioelectrical Impedance Analysis",
      content:
        "Enjoy a better understanding of your body composition that is far more helpful than just weight alone.",
    },
    {
      id: 2,
      title: "Advanced sleep tracking algorithms",
      content:
        "Understand your sleep cycles and get personalized recommendations to improve your sleep quality.",
    },
    {
      id: 3,
      title: "Continuous heart rate monitoring",
      content:
        "Track your heart rate 24/7 and receive alerts for abnormal patterns to stay ahead of potential health issues.",
    },
    {
      id: 4,
      title: "Stress level monitoring",
      content:
        "Monitor your stress levels throughout the day and learn effective ways to manage and reduce stress.",
    },
    {
      id: 5,
      title: "Activity and exercise tracking",
      content:
        "Keep track of your daily movements, workouts, and calories burned to maintain an active lifestyle.",
    },
  ];

  // Refs and state for scroll indicators
  const vertScrollContainerRef = useRef<HTMLDivElement>(null);
  const horizScrollContainerRef = useRef<HTMLDivElement>(null);
  const [vertScrollProgress, setVertScrollProgress] = useState(0);
  const [horizScrollProgress, setHorizScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Handle vertical scroll event to update indicator (desktop)
  const handleVertScroll = () => {
    if (vertScrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        vertScrollContainerRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
      setVertScrollProgress(progress);
    }
  };

  // Handle horizontal scroll event to update indicator (mobile)
  const handleHorizScroll = () => {
    if (horizScrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        horizScrollContainerRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const progress = scrollableWidth > 0 ? scrollLeft / scrollableWidth : 0;
      setHorizScrollProgress(progress);

      // Calculate active card index
      const cardIndex = Math.round(
        (scrollLeft / scrollableWidth) * (cards.length - 1)
      );
      setActiveCardIndex(cardIndex);
    }
  };

  // Add scroll event listeners
  useEffect(() => {
    const vertScrollContainer = vertScrollContainerRef.current;
    if (vertScrollContainer) {
      vertScrollContainer.addEventListener("scroll", handleVertScroll);
      return () =>
        vertScrollContainer.removeEventListener("scroll", handleVertScroll);
    }
  }, []);

  useEffect(() => {
    const horizScrollContainer = horizScrollContainerRef.current;
    if (horizScrollContainer) {
      horizScrollContainer.addEventListener("scroll", handleHorizScroll);
      return () =>
        horizScrollContainer.removeEventListener("scroll", handleHorizScroll);
    }
  }, []);

  return (
    <section className="pt-10 md:pt-20 flex flex-col gap-10 md:gap-[100px] bg-black px-0 md:px-8">
      {/* Mobile background image - shown only on mobile */}
      <div className="block md:hidden w-full px-4">
        <img
          src="/biosense-products/band/BioSense_health_band-removebg-preview-transformed.webp"
          className="w-full h-auto mb-6"
          alt="BioSense Watch with health features"
        />
      </div>
      <div className="w-full mx-auto flex flex-col gap-6 px-4 md:px-0 md:max-w-[958px]">
        <h2 className="text-white font-nb sm:text-center font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]">
          <span className="banner-gradient-text">Understand Your Body</span>{" "}
          <br />
          Like Never Before
        </h2>
      </div>

      {/* Mobile horizontal swiper layout */}

      {/* Desktop vertical scroll layout */}
      <div className="hidden md:flex w-full mx-auto md:justify-between md:items-center relative md:max-w-[1280px]">
        <div className="flex items-start gap-20 w-full relative z-10 md:max-w-[600px]">
          {/* Vertical gradient indicator */}
          <div className="h-[500px] w-[3px] relative">
            {/* Background line */}
            <div
              className="h-full w-full bg-[#FFFFFF1A]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></div>

            {/* Progressing fill line */}
            <div
              className="w-full transition-all duration-300 ease-out"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: `${vertScrollProgress * 100}%`,
                borderRight: "3px solid",
                borderImageSource:
                  "linear-gradient(90deg, rgba(42, 95, 221, 0) 0%, #2A5FDD 100%)",
                borderImageSlice: "1",
              }}
            ></div>
          </div>

          {/* Vertical scrollable cards column */}
          <div
            ref={vertScrollContainerRef}
            className="flex flex-col gap-8 w-full max-h-[600px] overflow-y-auto pr-4 hide-scrollbar"
          >
            {cards.map((card, index) => (
              <ExpandableCard
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Desktop background image */}
        <img
          src="/biosense-products/band/BioSense_health_band-removebg-preview-transformed.webp"
          className="max-w-[1033px] h-[517px] absolute top-0 right-0"
          alt="BioSense Watch with health features"
        />
      </div>

      <div className="md:hidden w-full flex flex-col gap-4 pb-10">
        {/* Horizontal scroll indicator */}

        {/* Horizontal swiper-like scrollable cards */}
        <div
          ref={horizScrollContainerRef}
          className="flex overflow-x-auto snap-container hide-scrollbar"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-full flex-shrink-0 snap-item px-4"
              style={{ width: "100vw" }}
            >
              <ExpandableCard
                id={card.id}
                title={card.title}
                content={card.content}
                delay={index * 0.1}
                isMobile={true}
              />
            </div>
          ))}
        </div>

        <div className="w-full h-[3px] relative mb-4 px-4">
          {/* Background line */}
          <div className="h-full w-full bg-[#FFFFFF1A] relative">
            <div
              className="h-full transition-all duration-300 ease-out absolute top-0 left-0"
              style={{
                width: `${horizScrollProgress * 100}%`,
                background:
                  "linear-gradient(90deg, #2A5FDD 0%, rgba(42, 95, 221, 0.4) 100%)",
              }}
            ></div>
          </div>

          {/* Progressing fill line */}
        </div>
      </div>
    </section>
  );
};

const ExpandableCard = ({
  id,
  title,
  content,
  delay = 0,
  isMobile = false,
}: ExpandableCardProps) => {
  // Auto-expand the first card or all mobile cards
  const [isExpanded, setIsExpanded] = useState(id === 1 || isMobile);

  // Enhanced animation variants
  const contentVariants = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.4, delay: 0.1 },
      },
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeIn" },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <motion.div
      className="rounded-2xl p-4 md:p-6 w-full flex flex-col gap-3 md:gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: isExpanded
          ? "rgba(119, 169, 232, 0.1)"
          : "rgba(119, 169, 232, 0.04)",
      }}
      transition={{
        duration: 0.5,
        delay,
        backgroundColor: { duration: 0.3 },
      }}
    >
      <div className="w-full flex justify-between items-center">
        <div className="size-10 md:size-12 rounded-full bg-[#77A9E829] main-shadow shrink-0 flex items-center justify-center text-white">
          {id}
        </div>
        {!isMobile && (
          <motion.div
            className="size-10 md:size-12 rounded-full bg-[#77A9E829] main-shadow shrink-0 flex items-center justify-center cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isExpanded ? <MinusIcon /> : <PlusIcon />}
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-white font-nb text-[18px] md:text-[20px] leading-[22px] md:leading-[24px]">
          {title}
        </h3>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              style={{ overflow: "hidden" }}
            >
              <p className="text-white font-nb font-light text-[16px] leading-[20px]">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default UnderstandBody;

const MinusIcon = () => {
  return (
    <svg
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33398 1H14.6673"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33398V14.6673"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33398 8H14.6673"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
