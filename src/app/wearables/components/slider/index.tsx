"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface SliderCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface ArrowProps {
  active: boolean;
}

const SliderCard: React.FC<SliderCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="p-0 rounded-[24px] bg-[#F5F8FF] overflow-hidden flex flex-col max-w-[413px] w-full">
      <div className="w-full overflow-hidden">
        <Image
          src={imageSrc || "/wearables/slider/card1.webp"}
          width={373}
          height={210}
          alt={title || ""}
          className="w-full h-[210px] object-cover"
        />
      </div>
      <div className="p-4 pb-6 flex flex-col gap-2">
        <span className="text-black font-nb text-[16px] leading-[20px] font-medium">
          {title || "BioSense Ring"}
        </span>
        <p className="text-black font-nb font-light text-[14px] leading-[18px] opacity-80">
          {description ||
            "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus."}
        </p>

        <div className="mt-2">
          <div className="size-8 rounded-full bg-[#E9EEFF] flex items-center justify-center cursor-pointer">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const WearablesSlider: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sliderData = [
    {
      imageSrc: "/wearables/slider/card1.webp",
      title: "BioSense Ring",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card2.webp",
      title: "BioSense Band",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card3.webp",
      title: "LifeWatch Generation 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card4.webp",
      title: "Watch Lite SE",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card5.webp",
      title: "Vyvo Smart App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card6.webp",
      title: "BIA Check",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card7.webp",
      title: "SpO₂",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card8.webp",
      title: "Atrial Fibrillation (AFib)",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card9.webp",
      title: "Accelerated Plethysmography (APG)",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card10.webp",
      title: "Energy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card11.webp",
      title: "Heart Rate",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card12.webp",
      title: "Breath Rate",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card13.webp",
      title: "Blood Pressure",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card14.webp",
      title: "Stress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
    {
      imageSrc: "/wearables/slider/card15.webp",
      title: "Sleep",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus.",
    },
  ];

  return (
    <section className="py-20 flex flex-col items-center justify-center gap-[60px]">
      <div className="max-w-[480px] w-full flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-gradient font-nb font-light text-[56px] leading-[64px] tracking-[0.5px]">
          Title
        </h2>
        <p className="text-black font-nb font-light text-[16px] leading-[20px] tracking-[0.5px]">
          Lorem ipsum dolor sit amet consectetur. Quis amet morbi et volutpat
          ut. Condimentum morbi mauris bibendum venenatis et.
        </p>
      </div>

      <div className="w-full relative overflow-hidden">
        {/* Using a container with left margin to create the 80px space and allow first card to be off-screen */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3.5}
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
                const visibleSlides = 3.5;
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
            className="w-full !px-4 md:!px-20"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            // Allow slides to flow past the beginning (for off-screen effect)
            allowSlidePrev={true}
            allowTouchMove={true}
          >
            {sliderData.map((card, index) => (
              <SwiperSlide
                key={index}
                className="!w-[270px] !h-[350px] md:!w-[413px]"
              >
                <SliderCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full max-w-[1280px] mx-auto flex items-center gap-10 mt-20">
          <div className="w-full relative h-[1px]">
            {/* Progress indicator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D1D1D1]"></div>
            <div
              className="absolute top-0 left-0 h-[1px] bg-[#2A5FDD] w-[0%] transition-all duration-300"
              id="swiperProgressBar"
            ></div>
          </div>

          <div className="max-w-[92px] w-full flex gap-3">
            <div
              ref={navigationPrevRef}
              className={`size-10 cross-btn-shadow ${
                isBeginning ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
              } rounded-2xl flex items-center justify-center cursor-pointer`}
            >
              <LeftArrow active={!isBeginning} />
            </div>

            <div
              ref={navigationNextRef}
              className={`size-10 cross-btn-shadow ${
                isEnd ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
              } rounded-2xl flex items-center justify-center cursor-pointer`}
            >
              <RightArrow active={!isEnd} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WearablesSlider;

const CrossIcon: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
