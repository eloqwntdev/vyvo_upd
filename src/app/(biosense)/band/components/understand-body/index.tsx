"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define interfaces for our components
interface Card {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
}

interface ExpandableCardProps {
  id: number;
  title: string;
  content: string;
  delay?: number;
  isMobile?: boolean;
  icon: React.ReactNode;
}

const UnderstandBody = () => {
  // Sample data for cards
  const cards: Card[] = [
    {
      id: 2,
      icon: <Icon2 />,
      title: "Electrocardiogram",
      content:
        "Monitor your heart's electrical activity with precision. Our ECG feature helps detect irregular heart rhythms and provides valuable insights into your cardiovascular health.",
    },
    {
      id: 1,
      icon: <Icon1 />,
      title: "Bioelectrical Impedance Analysis",
      content:
        "A scale doesn't tell you much about your health. BioSense uses BIA to give you a deeper understanding of your body composition, far beyond just your weight. That makes it easier to know where you're at, so you can get to where you want to be.",
    },
    {
      id: 3,
      icon: <Icon3 />,
      title: "Medical-grade fingertip sensor for BP + SPO2 + APG",
      content:
        "Track your heart rate 24/7 and receive alerts for abnormal patterns to stay ahead of potential health issues. Monitor blood pressure, oxygen levels, and arterial conditions with clinical-grade accuracy.",
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
      <div className="hidden md:flex w-full mx-auto md:justify-between md:items-center relative md:max-w-[1350px]">
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
                icon={card.icon}
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
                icon={card.icon}
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
  icon,
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
          {icon || id}
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

const Icon1 = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C7.25027 21 5.3754 21 4.06107 20.0451C3.6366 19.7367 3.26331 19.3634 2.95492 18.9389C2 17.6246 2 15.7497 2 12C2 8.25027 2 6.3754 2.95491 5.06107C3.26331 4.6366 3.6366 4.26331 4.06107 3.95492C5.3754 3 7.25027 3 11 3L13 3C16.7497 3 18.6246 3 19.9389 3.95491C20.3634 4.26331 20.7367 4.6366 21.0451 5.06107C22 6.3754 22 8.25027 22 12C22 15.7497 22 17.6246 21.0451 18.9389C20.7367 19.3634 20.3634 19.7367 19.9389 20.0451C18.6246 21 16.7497 21 13 21H11Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M11.0004 21H13.0004C16.7501 21 18.625 21 19.9393 20.0451C20.3638 19.7367 20.7371 19.3634 21.0455 18.9389C21.7027 18.0343 21.9076 16.8642 21.9714 15H2.0293C2.09317 16.8642 2.29805 18.0343 2.95528 18.9389C3.26368 19.3634 3.63697 19.7367 4.06144 20.0451C5.37577 21 7.25063 21 11.0004 21H11.0004Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M11 21.5C7.25027 21.5 5.3754 21.5 4.06107 20.492C3.6366 20.1665 3.26331 19.7725 2.95492 19.3244C2 17.9371 2 15.9581 2 12C2 8.04195 2 6.06292 2.95491 4.67558C3.26331 4.22752 3.6366 3.8335 4.06107 3.50797C5.3754 2.5 7.25027 2.5 11 2.5L13 2.5C16.7497 2.5 18.6246 2.5 19.9389 3.50797C20.3634 3.8335 20.7367 4.22752 21.0451 4.67558C22 6.06292 22 8.04195 22 12C22 15.9581 22 17.9371 21.0451 19.3244C20.7367 19.7725 20.3634 20.1665 19.9389 20.492C18.6246 21.5 16.7497 21.5 13 21.5H11Z"
        stroke="#2A5FDD"
        stroke-width="1.5"
      />
      <path
        d="M2.5 15H21.5"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00896 18H7H7.00896Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 18H10.991H11Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M7.00896 18H7M11 18H10.991"
        stroke="#2A5FDD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 10.2C16.5447 10.2 16.0655 10.2282 15.6569 9.97709C15.5011 9.88138 15.3977 9.74907 15.191 9.48446L13.25 7L10.75 11L8.94338 9.26564C8.68722 9.01973 8.43747 8.77042 8.09845 8.67176C7.85189 8.6 7.56792 8.6 7 8.6"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Icon2 = () => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.44135 5.55375C1 6.73706 1 8.03683 1 11C1 9.15905 2.49238 7.66667 4.33333 7.66667H5.44444C5.96109 7.66667 6.21942 7.66667 6.43137 7.60988C7.00652 7.45576 7.45576 7.00652 7.60988 6.43136C7.66667 6.21942 7.66667 5.9611 7.66667 5.44444V4.33333C7.66667 2.49238 9.15905 1 11 1C8.03683 1 6.73706 1 5.55375 1.44135C3.65142 2.15088 2.15088 3.65142 1.44135 5.55375Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M8.27273 21H12.5C12.9643 21 13.1965 21 13.3921 20.9807C15.2912 20.7937 16.7937 19.2912 16.9807 17.3921C17 17.1965 17 16.9643 17 16.5V6.81818C17 5.12494 17 4.27832 16.7478 3.60214C16.3424 2.5151 15.4849 1.65765 14.3979 1.2522C13.7217 1 12.8751 1 11.1818 1C8.21865 1 6.73706 1 5.55375 1.44135C3.65142 2.15088 2.15088 3.65142 1.44135 5.55375C1 6.73706 1 8.21865 1 11.1818V13.7273C1 16.7966 1 18.3313 1.79783 19.3971C2.02643 19.7025 2.29752 19.9736 2.60289 20.2022C3.66867 21 5.20336 21 8.27273 21Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M1.44135 5.55375C1 6.73706 1 8.03683 1 11C1 9.15905 2.49238 7.66667 4.33333 7.66667H5.44444C5.96109 7.66667 6.21942 7.66667 6.43137 7.60988C7.00652 7.45576 7.45576 7.00652 7.60988 6.43136C7.66667 6.21942 7.66667 5.9611 7.66667 5.44444V4.33333C7.66667 2.49238 9.15905 1 11 1C8.03683 1 6.73706 1 5.55375 1.44135C3.65142 2.15088 2.15088 3.65142 1.44135 5.55375Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M17 8V6.81818C17 5.12494 17 4.27832 16.7478 3.60214C16.3424 2.5151 15.4849 1.65765 14.3979 1.2522C13.7217 1 12.8751 1 11.1818 1C8.21865 1 6.73706 1 5.55375 1.44135C3.65142 2.15088 2.15088 3.65142 1.44135 5.55375C1 6.73706 1 8.21865 1 11.1818L1 13.7273C1 16.7966 1 18.3313 1.79783 19.3971C2.02643 19.7025 2.29752 19.9736 2.60289 20.2022C3.66867 21 5.20336 21 8.27273 21H9C10.1698 21 12.5 21 12.5 21"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 13.3333H9.84033C10.5019 13.3333 10.8326 13.3333 11.0985 13.5076C11.3643 13.6818 11.5122 13.9956 11.8081 14.6232L13.4 18L15.6 11L17.1919 14.3768C17.4878 15.0044 17.6357 15.3182 17.9015 15.4924C18.1674 15.6667 18.4981 15.6667 19.1597 15.6667H20"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 11C1 9.15905 2.49238 7.66667 4.33333 7.66667L5.44444 7.66667C5.9611 7.66667 6.21942 7.66667 6.43137 7.60988C7.00652 7.45576 7.45576 7.00652 7.60988 6.43136C7.66667 6.21942 7.66667 5.9611 7.66667 5.44444L7.66667 4.33333C7.66667 2.49238 9.15905 1 11 1"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Icon3 = () => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8.75757V13.2103C1 15.8583 2.35602 18.1977 4.42857 19.6058C4.94801 20.0321 6.36093 20.8924 7.85714 20.9236C12.5839 21.5822 17 17.8952 17 13.2103V9.33333C17 7 16.4868 6.16758 16.2301 5.41803C14.136 1.12432 8.39955 -0.335911 4.42857 2.36201C3.67678 3.03764 2.08996 4.6 1.75704 5.44444C1.27144 6.44988 1 7.57285 1 8.75757Z"
        fill="#2A5FDD"
        fill-opacity="0.2"
      />
      <path
        d="M5 9.65454V12.3262C5 13.915 5.67801 15.3186 6.71429 16.1635C6.974 16.4193 7.68047 16.9354 8.42857 16.9542C10.792 17.3493 13 15.1371 13 12.3262V10C13 8.6 12.7434 8.10055 12.6151 7.65082C11.568 5.07459 8.69978 4.19845 6.71429 5.81721C6.33839 6.22258 5.54498 7.16 5.37852 7.66667C5.13572 8.26993 5 8.94371 5 9.65454Z"
        fill="#2A5FDD"
        fill-opacity="0.2"
      />
      <path
        d="M4.42857 2.36201C8.39955 -0.335911 14.136 1.12432 16.2301 5.41803M7.85714 20.9236C12.5839 21.5822 17 17.8952 17 13.2103V9.33333M4.42857 19.6058C2.35602 18.1977 1 15.8583 1 13.2103V8.75757C1 7.57285 1.27144 6.44988 1.75704 5.44444"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 12.8C13 15.1196 11.2091 17 9 17C6.79086 17 5 15.1196 5 12.8V9.2C5 8.55584 5.13811 7.94555 5.38493 7.4M9 5C11.2091 5 13 6.8804 13 9.2"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9.5L9 12.5"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
