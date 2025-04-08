"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface MobileSolutionCardProps {
  images: string[];
  title: string;
  description: string | string[];
}

const MobileSolutionCard: React.FC<MobileSolutionCardProps> = ({
  images = [""],
  title = "",
  description = "",
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle navigation to specific slide
  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Image Block with Swiper */}
      <div className="relative w-full h-[260px]">
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Pagination]}
          className="w-full h-full"
          slidesPerView={1}
          grabCursor={true}
          speed={500}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image
                src={image}
                alt={`${title} - image ${index + 1}`}
                fill
                className="object-cover rounded-[12px]"
                sizes="100vw"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <div className="flex items-center gap-1.5 absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`size-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-110"
                    : "bg-[#FFFFFF80]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text Block */}
      <div className="pt-5 flex flex-col gap-3">
        <h3 className="banner-gradient-text font-nb text-[20px] leading-[24px] tracking-[-1%]">
          {title}
        </h3>

        {/* Handle both string and array descriptions */}
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p
              key={index}
              className="text-white/80 font-nb font-light text-[16px] leading-[22px] tracking-[-3%]"
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-white/80 font-nb font-light text-[16px] leading-[22px] tracking-[-3%]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MobileSolutionCard;
