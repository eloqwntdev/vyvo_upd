"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simple image rotation without animations
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden">
      {/* Image Block */}
      <div className="relative w-full h-[260px]">
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          className="object-cover rounded-[12px]"
          sizes="100vw"
          priority={currentIndex === 0}
        />

        {images.length > 1 && (
          <div className="flex items-center gap-1.5 absolute bottom-3 left-1/2 -translate-x-1/2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`size-1.5 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-[#FFFFFF80]"
                }`}
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
