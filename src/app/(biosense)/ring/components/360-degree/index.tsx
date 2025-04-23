"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeightIcon,
  StressIcon,
  BreathingIcon,
  EnergyIcon,
  MinusIcon,
  PlusIcon,
} from "./icons";
import dynamic from "next/dynamic";
import animationData from "../../../../../../public/lottie/blue-back-lines-move/data.json";

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
  isLast?: boolean;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Heart Rate",
    content:
      "Track your heart rate 24/7 and receive alerts for abnormal patterns to stay ahead of potential health issues",
  },
  {
    id: 2,
    title: "Stress Analysis",
    content:
      "Monitor your stress levels throughout the day and learn effective ways to manage and reduce stress.",
  },
  {
    id: 3,
    title: "Breath Rate",
    content:
      "Track your heart rate 24/7 and receive alerts for abnormal patterns to stay ahead of potential health issues.",
  },
  {
    id: 4,
    title: "Energy",
    content:
      "Demands on your energy are constant. Are you up for your next big meeting, or the walk to the subway station?",
  },
];
const Degree360 = ({
  titleHighlight = "All That ...",
  titleMain = "Plus Vyvo's Advanced Health Features",
  description = "BioSense Watch makes it so easy to precisely monitor your wellness, using best-in-class sensors and proprietary algorithms to capture, analyze, and report your biodata.",
  className = "",
}) => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
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
    <section className="pt-10 md:pt-20 flex flex-col gap-10 md:gap-[100px] bg-black px-0 md:px-8 relative">
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 2.0,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Lottie
          className="w-full h-full pointer-events-none"
          animationData={animationData}
          loop
        />
      </motion.div>
      {/* Mobile background image - shown only on mobile */}
      <div className="block md:hidden w-full px-4 relative">
        <img
          src="/biosense-products/ring/slider-ring.webp"
          className="w-full h-auto mb-6"
          alt="BioSense Watch with health features"
        />
      </div>
      <div className="w-full mx-auto flex flex-col gap-6 px-4 relative md:px-0 md:max-w-[958px]">
        <h2 className="text-white font-nb sm:text-center font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]">
          <span className="banner-gradient-text">{titleHighlight}</span> <br />
          {titleMain}
        </h2>
        <p
          className={`text-white font-nb w-full mx-auto sm:text-center font-light text-[16px] leading-[20px] md:max-w-[650px] ${className}`}
        >
          {description}
        </p>
      </div>

      {/* Desktop vertical scroll layout */}
      <div className="hidden md:flex w-full mx-auto md:justify-end md:items-end relative md:max-w-[1280px]">
        <img
          src="/biosense-products/ring/slider-ring.webp"
          className="max-w-[699px] absolute top-0 -left-20"
          alt="BioSense Watch with health features"
        />
        <div className="flex items-start gap-20 w-full relative z-10 md:max-w-[600px]">
          {/* Vertical gradient indicator */}

          {/* Vertical scrollable cards column */}
          <div
            ref={vertScrollContainerRef}
            className="flex flex-col select-none gap-8 w-full max-h-[600px] overflow-y-auto pr-4 hide-scrollbar"
            onMouseDown={(e) => {
              const container = vertScrollContainerRef.current;
              if (!container) return;

              let startY = e.clientY;
              let scrollTop = container.scrollTop;

              const onMouseMove = (event: MouseEvent) => {
                const deltaY = event.clientY - startY;
                container.scrollTop = scrollTop - deltaY;
              };

              const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
              };

              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }}
          >
            {cards.map((card, index) => (
              <ExpandableCard
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                delay={index * 0.1}
                isLast={index === cards.length - 1}
                scrollContainerRef={vertScrollContainerRef}
              />
            ))}
          </div>
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
        </div>
      </div>

      <div className="md:hidden w-full flex flex-col gap-4 pb-10 relative">
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
                isLast={index === cards.length - 1}
                scrollContainerRef={horizScrollContainerRef}
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
                minWidth: "25%", // Added minimum width to show some fill even at start
              }}
            ></div>
          </div>
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
  isLast = false,
  scrollContainerRef,
}: ExpandableCardProps) => {
  // Auto-expand the first card or all mobile cards
  const [isExpanded, setIsExpanded] = useState(id === 1 || isMobile);
  const handleSetIsExpanded = (value: boolean) => {
    console.log("handleSetIsExpanded called with value:", value);
    console.log("Current isExpanded state:", isExpanded);
    setIsExpanded(value);

    let animationFrame: number;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < 600) {
        if (!isExpanded) {
          if (isLast && scrollContainerRef && scrollContainerRef.current) {
            // Scroll to end of container
            if (isMobile) {
              scrollContainerRef.current.scrollLeft =
                scrollContainerRef.current.scrollWidth -
                scrollContainerRef.current.clientWidth;
            } else {
              scrollContainerRef.current.scrollTop =
                scrollContainerRef.current.scrollHeight -
                scrollContainerRef.current.clientHeight;
            }
          } else if (cardRef.current) {
            cardRef.current.scrollIntoView({
              behavior: "smooth",
              block: isMobile ? "nearest" : "center",
              inline: isMobile ? "center" : "nearest",
            });
          }
        }
        animationFrame = requestAnimationFrame(animateScroll);
      }
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame);
  };
  // Ref for scrolling into view
  const cardRef = useRef<HTMLDivElement>(null);

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

  // Render the appropriate icon based on card ID
  const renderIcon = () => {
    switch (id) {
      case 1:
        return <HeightIcon />;
      case 2:
        return <StressIcon />;
      case 3:
        return <BreathingIcon />;
      case 4:
        return <EnergyIcon />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="p-4 md:p-6 w-full flex flex-col gap-3 md:gap-5 rounded-xl bg-blue-100/4 shadow-[6px_80px_80px_0px_rgba(148,168,237,0.02)_inset,_0px_-1px_1px_0px_rgba(148,168,237,0.20)_inset,_0px_1px_1px_0px_rgba(148,168,237,0.20)_inset] backdrop-blur-lg"
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
          {renderIcon()}
        </div>
        {!isMobile && (
          <motion.div
            className="size-10 md:size-12 rounded-full bg-[#77A9E829] main-shadow shrink-0 flex items-center justify-center cursor-pointer"
            onClick={() => handleSetIsExpanded(!isExpanded)}
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

export default Degree360;
