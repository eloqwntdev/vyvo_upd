"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Slider = () => {
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
      <div className="flex flex-col gap-20 w-full">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            style={{ paddingLeft: "80px" }}
          >
            {[1, 2, 3, 4].map((item, index) => (
              <SwiperSlide key={index} style={{ width: "413px" }}>
                <div className="p-5 rounded-[24px] slider-card-bg max-w-[413px] before:rounded-[24px] gradient-border-mask-slider !flex flex-col gap-4">
                  <Image
                    src={"/wearables/slider/card1.webp"}
                    width={373}
                    height={210}
                    alt={""}
                  />
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-black font-nb text-[20px] leading-[24px] tracking-[0.2px]">
                        BioSense Ring
                      </span>
                      <p className="text-black font-nb font-light text-[16px] leading-[20px] tracking-[0.5px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        amet diam lorem purus.
                      </p>
                    </div>
                    <div className="size-10 cross-btn-shadow bg-[#77A9E829] rounded-2xl flex items-center justify-center">
                      <CrossIcon />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full flex items-center gap-10">
          <div className="max-w-[1147px] w-full h-[1px] bg-[#D1D1D1]"></div>

          <div className="max-w-[92px] w-full flex gap-3">
            <div className="swiper-button-prev size-10 cross-btn-shadow bg-[#77A9E829] rounded-2xl flex items-center justify-center">
              <LeftArrow />
            </div>

            <div className="swiper-button-next size-10 cross-btn-shadow bg-[#77A9E829] rounded-2xl flex items-center justify-center">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

const CrossIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.001 3.33337V16.6667"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 10H16.6673"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LeftArrow = () => {
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
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50065 5.83325L3.92324 9.41066C3.64546 9.68844 3.50657 9.82733 3.50657 9.99992C3.50657 10.1725 3.64546 10.3114 3.92324 10.5892L7.50065 14.1666"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RightArrow = () => {
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
        stroke="#2A5FDD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.501 5.83325L16.0784 9.41066C16.3562 9.68844 16.4951 9.82733 16.4951 9.99992C16.4951 10.1725 16.3562 10.3114 16.0784 10.5892L12.501 14.1666"
        stroke="#2A5FDD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
