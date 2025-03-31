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

const ALLThat = () => {
  // Sample data for cards
  const cards: Card[] = [
    {
      id: 1,
      title: "Medical-grade fingertip sensor for BP + SPO2 + APG",
      content:
        "Enjoy a better understanding of your body composition that is far more helpful than just weight alone.",
    },
    {
      id: 2,
      title: "Bioelectrical Impedance Analysis",
      content:
        "Understand your sleep cycles and get personalized recommendations to improve your sleep quality.",
    },
    {
      id: 3,
      title: "Electrocardiogram",
      content:
        "Track your heart rate 24/7 and receive alerts for abnormal patterns to stay ahead of potential health issues.",
    },
    {
      id: 4,
      title: "Activity Tracking",
      content:
        "Monitor your stress levels throughout the day and learn effective ways to manage and reduce stress.",
    },
    {
      id: 5,
      title: "Sleep Monitoring",
      content:
        "Keep track of your daily movements, workouts, and calories burned to maintain an active lifestyle.",
    },
    {
      id: 6,
      title: "Guardian Alerts + Push Notifications",
      content:
        "Receive timely alerts and notifications about your health status and important reminders.",
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

  // Function to render the appropriate icon based on card ID
  const renderCardIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Icon1 />;
      case 2:
        return <Icon2 />;
      case 3:
        return <Icon3 />;
      case 4:
        return <Icon4 />;
      case 5:
        return <Icon5 />;
      case 6:
        return <Icon6 />;
      default:
        return <div className="text-white">{id}</div>;
    }
  };

  return (
    <section className="pt-10 md:pt-20 flex flex-col gap-10 md:gap-[100px] bg-black px-0 md:px-8">
      {/* Mobile background image - shown only on mobile */}
      <div className="block md:hidden w-full px-4">
        <img
          src="/biosense-products/watch/all-that.webp"
          className="w-full h-auto mb-6"
          alt="BioSense Watch with health features"
        />
      </div>
      <div className="w-full mx-auto flex flex-col gap-6 px-4 md:px-0 md:max-w-[958px]">
        <h2 className="text-white font-nb sm:text-center font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]">
          <span className="banner-gradient-text">All That ...</span> <br />
          Plus Vyvo's Advanced Health Features
        </h2>
        <p className="text-white font-nb w-full mx-auto sm:text-center font-light text-[16px] leading-[20px] md:max-w-[650px]">
          BioSense Watch makes it so easy to precisely monitor your wellness,
          using best-in-class sensors and proprietary algorithms to capture,
          analyze, and report your biodata.
        </p>
      </div>

      {/* Mobile horizontal swiper layout */}

      {/* Desktop vertical scroll layout */}
      <div className="hidden md:flex w-full mx-auto md:justify-between md:items-center relative md:max-w-[1380px]">
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
                icon={renderCardIcon(card.id)}
              />
            ))}
          </div>
        </div>

        {/* Desktop background image */}
        <img
          src="/biosense-products/watch/all-that.webp"
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
                icon={renderCardIcon(card.id)}
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

// Updated interface to include icon
interface ExpandableCardProps {
  id: number;
  title: string;
  content: string;
  delay?: number;
  isMobile?: boolean;
  icon?: React.ReactNode;
}

const ExpandableCard = ({
  id,
  title,
  content,
  delay = 0,
  isMobile = false,
  icon,
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

export default ALLThat;

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
const Icon2 = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.44135 6.55375C3 7.73706 3 9.03683 3 12C3 10.159 4.49238 8.66667 6.33333 8.66667H7.44444C7.96109 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2C10.0368 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M10.2727 22H14.5C14.9643 22 15.1965 22 15.3921 21.9807C17.2912 21.7937 18.7937 20.2912 18.9807 18.3921C19 18.1965 19 17.9643 19 17.5V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M3.44135 6.55375C3 7.73706 3 9.03683 3 12C3 10.159 4.49238 8.66667 6.33333 8.66667H7.44444C7.96109 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2C10.0368 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2"
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
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C6.25027 20 4.3754 20 3.06107 19.0451C2.6366 18.7367 2.26331 18.3634 1.95492 17.9389C1 16.6246 1 14.7497 1 11C1 7.25027 1 5.3754 1.95491 4.06107C2.26331 3.6366 2.6366 3.26331 3.06107 2.95492C4.3754 2 6.25027 2 10 2L12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11C21 14.7497 21 16.6246 20.0451 17.9389C19.7367 18.3634 19.3634 18.7367 18.9389 19.0451C17.6246 20 15.7497 20 12 20H10Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M10.0004 20H12.0004C15.7501 20 17.625 20 18.9393 19.0451C19.3638 18.7367 19.7371 18.3634 20.0455 17.9389C20.7027 17.0343 20.9076 15.8642 20.9714 14H1.0293C1.09317 15.8642 1.29805 17.0343 1.95528 17.9389C2.26368 18.3634 2.63697 18.7367 3.06144 19.0451C4.37577 20 6.25063 20 10.0004 20H10.0004Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M10 20.5C6.25027 20.5 4.3754 20.5 3.06107 19.492C2.6366 19.1665 2.26331 18.7725 1.95492 18.3244C1 16.9371 1 14.9581 1 11C1 7.04195 1 5.06292 1.95491 3.67558C2.26331 3.22752 2.6366 2.8335 3.06107 2.50797C4.3754 1.5 6.25027 1.5 10 1.5L12 1.5C15.7497 1.5 17.6246 1.5 18.9389 2.50797C19.3634 2.8335 19.7367 3.22752 20.0451 3.67558C21 5.06292 21 7.04195 21 11C21 14.9581 21 16.9371 20.0451 18.3244C19.7367 18.7725 19.3634 19.1665 18.9389 19.492C17.6246 20.5 15.7497 20.5 12 20.5H10Z"
        stroke="#2A5FDD"
        stroke-width="1.5"
      />
      <path
        d="M1.5 14H20.5"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.00896 17H6H6.00896Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 17H9.99104H10Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M6.00896 17H6M10 17H9.99104"
        stroke="#2A5FDD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 9.2C15.5447 9.2 15.0655 9.2282 14.6569 8.97709C14.5011 8.88138 14.3977 8.74907 14.191 8.48446L12.25 6L9.75 10L7.94338 8.26564C7.68722 8.01973 7.43747 7.77042 7.09845 7.67176C6.85189 7.6 6.56792 7.6 6 7.6"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Icon4 = () => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.5C10 4.32843 9.32843 5 8.5 5C7.67157 5 7 4.32843 7 3.5C7 2.67157 7.67157 2 8.5 2C9.32843 2 10 2.67157 10 3.5Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M10 3.5C10 4.32843 9.32843 5 8.5 5C7.67157 5 7 4.32843 7 3.5C7 2.67157 7.67157 2 8.5 2C9.32843 2 10 2.67157 10 3.5Z"
        stroke="#2A5FDD"
        stroke-width="1.5"
      />
      <path
        d="M8.36019 13L9.30392 12.454C10.3786 11.8323 10.9159 11.5214 10.9885 11.0784C10.9999 11.0092 11.0028 10.9391 10.9973 10.8694C10.9622 10.4229 10.4524 10.0789 9.43289 9.39071L4.72588 6.21359C2.87718 4.96577 2.45184 2.69114 3.75097 1"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.3725 7.9993C6.56973 9.03839 6.01638 10.02 5.6026 10.8935C5.16362 11.8202 4.94412 12.2836 4.9845 12.8125L2 11.9993L2.00881 11.9569C2.62685 9.61285 3.53079 7.40799 4.72588 6.21289L4.74665 6.22691L7.3725 7.9993Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M4.72588 6.21359C2.87718 4.96577 2.45184 2.69114 3.75097 1M4.72588 6.21359L4.74665 6.22762L7.3725 8M4.72588 6.21359C3.53079 7.40869 2.62685 9.61356 2.00881 11.9576M1 19.0003C1 17.2424 1.33398 14.517 2.00881 11.9576M8.36019 13L9.30392 12.454C10.3786 11.8323 10.9159 11.5214 10.9885 11.0784C10.9999 11.0092 11.0028 10.9391 10.9973 10.8694C10.9622 10.4229 10.4524 10.0789 9.43289 9.39071L7.39844 8.01751L7.3725 8M9.00016 19.0003C8.02681 17.8647 7.02574 16.3 6.05015 14.8578C5.36664 13.8474 5.02488 13.3422 4.9845 12.8132M7.3725 8C6.56973 9.0391 6.01638 10.0207 5.6026 10.8942C5.16362 11.8209 4.94412 12.2843 4.9845 12.8132M4.9845 12.8132L2 12L2.00881 11.9576"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Icon5 = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="15" r="2" fill="#2A5FDD" fill-opacity="0.16" />
      <path
        d="M12 1.04938C11.6711 1.01672 11.3375 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 10.3151 20.9311 9.64622 20.8 9"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 10H7.70711C7.25435 10 6.82014 9.82014 6.5 9.5M13 10H14.2929C14.7456 10 15.1799 9.82014 15.5 9.5"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11"
        cy="15"
        r="2"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 1H18.9474C19.5675 1 19.8775 1 19.9601 1.20009C20.0427 1.40019 19.8317 1.64023 19.4098 2.1203L16.9846 4.8797C16.5627 5.35977 16.3517 5.59981 16.4343 5.79991C16.5169 6 16.8269 6 17.447 6H20"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Icon6 = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18C7.45849 19.7252 9.07553 21 11 21C12.9245 21 14.5415 19.7252 15 18H7Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M1.52992 13.7696C1.31727 15.1636 2.268 16.1312 3.43205 16.6134C7.89481 18.4622 14.1052 18.4622 18.5679 16.6134C19.732 16.1312 20.6827 15.1636 20.4701 13.7696C20.3394 12.9129 19.6932 12.1995 19.2144 11.5029C18.5873 10.5793 18.525 9.57183 18.5249 8.5C18.5249 4.35786 15.1559 1 11 1C6.84413 1 3.47513 4.35786 3.47513 8.5C3.47503 9.57183 3.41272 10.5793 2.78561 11.5029C2.30684 12.1995 1.66061 12.9129 1.52992 13.7696Z"
        fill="#2A5FDD"
        fill-opacity="0.16"
      />
      <path
        d="M1.52992 13.7696C1.31727 15.1636 2.268 16.1312 3.43205 16.6134C7.89481 18.4622 14.1052 18.4622 18.5679 16.6134C19.732 16.1312 20.6827 15.1636 20.4701 13.7696C20.3394 12.9129 19.6932 12.1995 19.2144 11.5029C18.5873 10.5793 18.525 9.57183 18.5249 8.5C18.5249 4.35786 15.1559 1 11 1C6.84413 1 3.47513 4.35786 3.47513 8.5C3.47503 9.57183 3.41272 10.5793 2.78561 11.5029C2.30684 12.1995 1.66061 12.9129 1.52992 13.7696Z"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 18C7.45849 19.7252 9.07553 21 11 21C12.9245 21 14.5415 19.7252 15 18"
        stroke="#2A5FDD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
