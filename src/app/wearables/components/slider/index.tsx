"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface SliderCardProps {
  imageSrc: string;
  title: string;
  description: string;
  index: number;
}

interface ArrowProps {
  active: boolean;
}

const SliderCard: React.FC<SliderCardProps> = ({
  imageSrc,
  title,
  description,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: "easeOut",
      }}
      className="p-0 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] bg-[#F5F8FF] overflow-hidden flex flex-col w-full h-full"
    >
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 0.7, delay: 0.1 * index + 0.2 }}
        >
          <Image
            src={imageSrc || "/wearables-img/slider/card1.webp"}
            width={413}
            height={210}
            alt={title || ""}
            className="w-full h-[150px] sm:h-[180px] md:h-[210px] object-cover"
          />
        </motion.div>
      </div>
      <div className="p-3 sm:p-4 pb-4 sm:pb-6 flex flex-col gap-1 sm:gap-2 flex-grow">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
          className="text-black font-nb text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[20px] font-medium"
        >
          {title || "BioSense Ring"}
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
          className="text-black font-nb font-light text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] opacity-80"
        >
          {description ||
            "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus."}
        </motion.p>

        <div className="mt-auto pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
            className="size-6 sm:size-7 md:size-8 rounded-[12px] bg-[#E9EEFF] cross-btn-shadow flex items-center justify-center cursor-pointer"
          >
            <CrossIcon />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
const sliderData = [
  {
    imageSrc: "/wearables-img/slider/card1.webp",
    title: "BioSense Ring",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card2.webp",
    title: "BioSense Band",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card3.webp",
    title: "LifeWatch Generation 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card4.webp",
    title: "Watch Lite SE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card5.webp",
    title: "Vyvo Smart App",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card6.webp",
    title: "BIA Check",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card7.webp",
    title: "SpO₂",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card8.webp",
    title: "Atrial Fibrillation (AFib)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card9.webp",
    title: "Accelerated Plethysmography (APG)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card10.webp",
    title: "Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card11.webp",
    title: "Heart Rate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card12.webp",
    title: "Breath Rate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card13.webp",
    title: "Blood Pressure",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card14.webp",
    title: "Stress",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
  {
    imageSrc: "/wearables-img/slider/card15.webp",
    title: "Sleep",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
  },
];

const WearablesSlider: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const controlsRef = useRef(null);
  const areControlsInView = useInView(controlsRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center gap-[30px] sm:gap-[40px] md:gap-[60px]">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[320px] sm:max-w-[400px] md:max-w-[480px] w-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gradient font-nb font-light text-[32px] sm:text-[44px] md:text-[56px] leading-[40px] sm:leading-[52px] md:leading-[64px] tracking-[0.5px]"
        >
          Title
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-black font-nb font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] tracking-[0.5px]"
        >
          Lorem ipsum dolor sit amet consectetur. Quis amet morbi et volutpat
          ut. Condimentum morbi mauris bibendum venenatis et.
        </motion.p>
      </motion.div>

      <div className="w-full relative overflow-hidden">
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1.2}
            initialSlide={0}
            freeMode={{
              enabled: false,
              momentum: false,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            onSlideChange={(swiper: SwiperType) => {
              // Update progress bar based on current position
              const progressBar = document.getElementById("swiperProgressBar");
              if (progressBar) {
                const totalSlides = swiper.slides.length;
                const visibleSlides = swiper.params.slidesPerView as number;
                const maxIndex = totalSlides - visibleSlides;
                const progress = (swiper.activeIndex / maxIndex) * 100;
                progressBar.style.width = `${Math.min(progress, 100)}%`;
              }

              // Update navigation button states
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onInit={(swiper: SwiperType) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full !px-4 sm:!px-6 md:!px-8 lg:!px-20"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            allowSlidePrev={true}
            allowTouchMove={true}
          >
            {sliderData.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="h-full">
                  <SliderCard
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    index={index}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          ref={controlsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            areControlsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-[1280px] mx-auto flex items-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8"
        >
          <div className="w-full relative h-[1px]">
            {/* Progress indicator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D1D1D1]"></div>
            <motion.div
              initial={{ width: "0%" }}
              animate={areControlsInView ? { width: "0%" } : { width: "0%" }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 h-[1px] bg-[#2A5FDD] transition-all duration-300"
              id="swiperProgressBar"
            ></motion.div>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={
                areControlsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              ref={navigationPrevRef}
              className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                isBeginning ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
              } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
            >
              <LeftArrow active={!isBeginning} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={
                areControlsInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.5, delay: 0.5 }}
              ref={navigationNextRef}
              className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                isEnd ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
              } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
            >
              <RightArrow active={!isEnd} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WearablesSlider;

const CrossIcon: React.FC = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:w-[16px] sm:h-[16px]"
    >
      <path
        d="M10.001 3.33337V16.6667"
        stroke="#2A5FDD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 10H16.6673"
        stroke="#2A5FDD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LeftArrow: React.FC<ArrowProps> = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
    >
      <path
        d="M4.16699 10L16.667 9.9998"
        stroke={active ? "#2A5FDD" : "black"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50065 5.83325L3.92324 9.41066C3.64546 9.68844 3.50657 9.82733 3.50657 9.99992C3.50657 10.1725 3.64546 10.3114 3.92324 10.5892L7.50065 14.1666"
        stroke={active ? "#2A5FDD" : "black"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RightArrow: React.FC<ArrowProps> = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
    >
      <path
        d="M15.834 9.99988L3.33398 9.99988"
        stroke={active ? "#2A5FDD" : "black"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.501 5.83325L16.0784 9.41066C16.3562 9.68844 16.4951 9.82733 16.4951 9.99992C16.4951 10.1725 16.3562 10.3114 16.0784 10.5892L12.501 14.1666"
        stroke={active ? "#2A5FDD" : "black"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
