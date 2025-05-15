"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

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

interface WearablesSliderProps {
  onCardClick: (
    card: { title: string; description: string; imageSrc: string } | null
  ) => void;
}

const SliderCard: React.FC<SliderCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="p-0 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] bg-[#F5F8FF] overflow-hidden flex flex-col w-full h-full">
      <div className="w-full overflow-hidden">
        <div className="p-4">
          <img
            loading="lazy"
            src={imageSrc || "/wearables-img/slider/card1.png"}
            width={900}
            height={506}
            alt={title || ""}
            className="w-full rounded-[24px] h-[150px] sm:h-[180px] md:h-[210px] object-cover"
          />
        </div>
      </div>
      <div className="p-3 sm:p-4 pb-4 sm:pb-6 flex flex-col gap-1 sm:gap-2 flex-grow">
        <span className="text-black font-nb text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[20px] font-medium">
          {title || "BioSense Ring"}
        </span>
        <p className="text-black line-clamp-2 font-nb font-light text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] opacity-80">
          {description.split(" ").slice(0, 50).join(" ") ||
            "Lorem ipsum dolor sit amet consectetur. Pellentesque amet diam lorem purus."}
        </p>

        <div className="mt-auto pt-2">
          <div className="size-6 sm:size-7 md:size-8 rounded-[12px] bg-[#E9EEFF] cross-btn-shadow flex items-center justify-center cursor-pointer">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const sliderData = [
  {
    imageSrc: "/wearables-img/slider/card1.png",
    title: "Air Quality Index",
    description: `An Air Quality Index (AQI) reports air quality in reference to air pollution levels and associated health effects that might be of concern to the population. The drawback of AQI is that measurements are often captured miles from you and may not be accurate for your location. 

With BioSense Watch, the monitoring sensors are on your wrist, capable of measuring both indoor and outdoor air quality. This device will automatically capture AQI data and report a general air quality index every 10 minutes, combining indoor and outdoor measurement data. Or you can measure manually at any time. Equipped with a greater awareness of the air quality around you, it's easier to make informed choices to protect your wellness.  
`,
  },
  {
    imageSrc: "/wearables-img/slider/card2.png",
    title: "BIA",
    description: `Bioelectrical Impedance Analysis, or BIA, uses a minimal electrical current to measure fat and muscle in the body. Fat and muscle react differently to the current, which enables numerous body composition insights that a traditional scale simply can’t match. 

BIA with Vyvo Technology gives you 19 different measurements, including total body water, fat mass, visceral fat, basal metabolic rate, body mass index, body cell mass, biotypes, and more. This expanded awareness helps you better track the effectiveness of fitness training and dieting and pinpoint any areas of concern. 

Through the Vyvo Smart app you can check your parameters and receive a complete report to keep track of your body. `,
  },
  {
    imageSrc: "/wearables-img/slider/card3.png",
    title: "APG",
    description: `Cardiovascular disease (CVD) is the leading cause of death worldwide. CVD includes numerous diseases of the heart or blood vessels, including heart attack, coronary artery disease, stroke, heart failure, and more. Awareness of cardiovascular health is critical to avoiding a serious health incident. APG is an accurate optical method (acceleration photoplethysmography) for measuring arterial stiffness, which enables an estimate of cardiovascular health. Vyvo Technology wearables equipped with a medical-grade fingertip sensor capable of APG readings give you exceptional cardovascular awareness. `,
  },
  {
    imageSrc: "/wearables-img/slider/card4.png",
    title: "Oxygen Saturation",
    description: `Oxygen is indispensible for most forms of life. For humans, blood oxygen levels are typically 95 to 100 percent. A saturation below 90 percent is hypoxemia, and below 80 percent is life-threatening. 

The SpO2 (or oxygen saturation) measurement of your Vyvo Technology wearable reports your blood oxygen percentage at anytime. It will automatically capture blood oxygen data every hour, and you can complete a manual measurement whenever you want added awareness. You can breathe easier with this insight, especially when you know that the U.S. FDA has given 510(k) clearance to this function, a recognition of it's accuracy and efficacy. 
`,
  },
  {
    imageSrc: "/wearables-img/slider/card5.png",
    title: "Blood Pressure",
    description: `As an important vital sign, blood pressure is frequently measured to assess health. In general terms, blood pressure (BP) is the pressure of circulating blood against the walls of blood vessels. Normal blood pressure for most adults is defined as a systolic pressure of less than 120 and a diastolic pressure of less than 80. 

Blood pressure below the desired range is considered hypotension; pressure within the desired range is normotension; and pressure consistently higher than the desired range (which is much more common) is hypertension. It is a potentially lethal condition that may result in heart attack, stroke, and congestive heart failure if not treated. 

Your Vyvo Technology wearable device acurately and automatically captures blood pressure data every hour, or you can initiate a reading at any time, making it so easy to keep an eye on this very important health metric. 
`,
  },

  {
    imageSrc: "/wearables-img/slider/card6.png",
    title: "Atrial Fibrilation",
    description: `Atrial Fibrilation (or AFib) is the most common  form of arrhythmia, or abnormal heart rhythm. It is characterized as "irregularly irregular." AFib can have serious implications for your health, and the key to addressing it is to detect it.  

WIth a Vyvo Technology wearable device, detection is easy, as it provides continual AFib monitoring benefits. Use one every day and leverage the awareness it gives you. 
`,
  },
  {
    imageSrc: "/wearables-img/slider/card7.png",
    title: "Energy",
    description: `Demands on your energy are constant. Are you up for your next big meeting, or the walk to the subway station? What about your exercise regimen?

Your Vyvo Technology wearable automatically estimates your energy levels every hour and you can also check it anytime on demand. A high number for your energy measurement reflects higher energy levels. This estimate is based on heart rate variability, or HRV. 

HRV is an indication of how well the heart can change its rhythm in response to different situations and stimuli — adjusting from a resting rate to an active rate, and back again. A high HRV is good because it means your body can more quickly adjust to stimulation. 
do we have a document for HRV? NO - OK`,
  },
  {
    imageSrc: "/wearables-img/slider/card8.png",
    title: "Heart Rate",
    description: `The human heart beats approximately 100,000 times a day.  In general, a normal resting HR is 60 to 100 beats per minute in adults. How often does your heart beat per minute? Find out with your Vyvo Technology wearable. 

Your device automatically tracks heart rate for you every 10 minutes. Or you can do a manual measurement at any time. Heart rate can be monitored to assess cardiovascular health and detect possible problems, such as arrhythmias or tachycardia. It is also used in physical training to adjust exercise intensity and improve sports performance. `,
  },
  {
    imageSrc: "/wearables-img/slider/card9.png",
    title: "ECG",
    description: `Electrocardiography (ECG) is used to measure the rate and rhythm of heartbeats, the size and position of the heart chambers, the presence of any damage to the heart’s muscle cells or conduction system, the effects of heart drugs, and the function of implanted pacemakers.

Your Vyvo Technology wearable device features 4 electrodes to enable an ECG measurement. This can only be done manually, as your finger and thumb have to touch the electrodes to complete the measurement. Proprietary Vyvo algorithms analyze your data, which is accurately reported in the Vyvo Smart App. An ECG measurement from the wrist is highly convenient and informative, giving you exceptional awareness of your heart health.

For more informaiton, visit: `,
  },
  {
    imageSrc: "/wearables-img/slider/card10.png",
    title: "Skin Temperature",
    description: `Your Vyvo Technology wearable device will check your skin's temperature every 10 minutes, or you can initiate a measurement at any time from the Vyvo Smart App. Numerous factors affect skin temperature, including exercise or strenuous work, diet and the temperature of the surrounding environment. Your skin temperature will fluctuate slightly throughout the day, affected by work or exercise, diet, and the surrounding environment.`,
  },
  {
    imageSrc: "/wearables-img/slider/card11.png",
    title: "Stress",
    description: `Everyone has some stress, which is the body's defense mechanism against threats and stimuli from social and environmental factors. But high stress can have significant negative impacts on your health. 

Your Vyvo Technology wearable device estimates your stress levels by monitoring heart rate variability (HRV). It will automatically capture data and report a stress score every hour, or you can initiate an on-demand measurement at any time. When you see high levels of stress, you can use best practice techniques to manage stress and improve your mental health. 
`,
  },
  {
    imageSrc: "/wearables-img/slider/card12.png",
    title: "Sleep",
    description: `Wear your Vyvo Technology device while you sleep and it will capture valuable data to help you understand your sleep quality. This includes deep sleep, light sleep, awake time, and the critical measurements of REM and any sleep disturbances.

REM is a critical, necessary sleep state that provides numerous health benefits. In this stage, the brain is highly active, the eyeballs will move quickly back and forth, and it’s easy to achieve a dream state, including vivid dreams. REM sleep has been shown to play an important role in mood regulation, learning, memory, and stress management.

Sleep disturbances are more than just interruptions; they can have significant negative impacts on your health. Disturbances are characterized by loud snoring, periods of not breathing, gasping for air during sleep, waking with a dry mouth, morning headache, excessive daytime fatigue, and more. Gain a deeper awareness of both and use the app's tips to know how to improve in these areas.`,
  },
];

const WearablesSlider: React.FC<WearablesSliderProps> = ({ onCardClick }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

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
    <section className="py-10 bg-white sm:py-14 md:py-20 sm:px-0 flex flex-col items-center justify-center gap-[30px] sm:gap-[40px] md:gap-[60px]">
      <div className="max-w-[320px] px-4 sm:px-6 md:px-8 sm:max-w-[400px] md:max-w-[480px] w-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-6">
        <h2 className="text-gradient font-nb font-light text-[32px] sm:text-[44px] md:text-[56px] leading-[40px] sm:leading-[52px] md:leading-[64px] tracking-[0.5px]">
          Health Features
        </h2>
        <p className="text-black font-nb font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] tracking-[0.5px]">
          Advanced health monitoring technology providing real-time insights
          into vital signs, wellness, and overall well-being.
        </p>
      </div>

      {/* Mobile view - columnar layout */}
      {isMobile && (
        <div className="w-full relative overflow-hidden">
          <div
            className="w-full overflow-hidden select-none"
            style={{ scrollbarGutter: "stable" }}
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
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
                swiperRef.current = swiper;
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
                if (typeof document !== "undefined") {
                  const progressBar =
                    document.getElementById("swiperProgressBar");
                  if (progressBar) {
                    const totalSlides = swiper.slides.length;
                    const visibleSlides = swiper.params.slidesPerView as number;
                    const maxIndex = totalSlides - visibleSlides;
                    const progress = (swiper.activeIndex / maxIndex) * 100;
                    progressBar.style.width = `${Math.min(progress, 100)}%`;
                  }
                }

                // Calculate if we've reached the true end (no gap)
                const isRealEnd =
                  swiper.isEnd ||
                  Math.abs(swiper.translate) >= Math.abs(swiper.maxTranslate());

                // Update navigation button states
                setIsBeginning(swiper.isBeginning);
                setIsEnd(isRealEnd);
              }}
              onInit={(swiper: SwiperType) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onReachEnd={() => {
                // Ensure we're at the true end (no gap)
                if (swiperRef.current) {
                  const totalSlides = swiperRef.current.slides.length;
                  const visibleSlides = Math.ceil(
                    swiperRef.current.params.slidesPerView as number
                  );
                  const targetIndex = totalSlides - visibleSlides;

                  // Snap to the correct position to avoid gaps
                  if (swiperRef.current.activeIndex !== targetIndex) {
                    swiperRef.current.slideTo(targetIndex);
                  }
                }
              }}
              className="w-full px-3 sm:!p-0 lg:!pl-20"
              breakpoints={{
                320: {
                  slidesPerView: 1.32,
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
                1600: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
              }}
              allowSlidePrev={true}
              allowTouchMove={true}
              grabCursor={true}
              slideToClickedSlide={false}
            >
              {sliderData.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className={`!h-auto mx-[2%] !w-[73%] sm:!w-[413px] max-w-[413px]`}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => onCardClick(card)}
                  >
                    <SliderCard
                      imageSrc={card.imageSrc}
                      title={card.title}
                      description={card.description
                        .split(" ")
                        .slice(0, 50)
                        .join(" ")}
                      index={index}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full max-w-[1280px] mx-auto flex items-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8">
            <div className="w-full relative h-[1px]">
              {/* Progress indicator */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D1D1D1]"></div>
              <div
                className="absolute top-0 left-0 h-[1px] bg-[#2A5FDD] transition-all duration-300"
                id="swiperProgressBar"
              ></div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <div
                ref={navigationPrevRef}
                className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                  isBeginning ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
                } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
              >
                <LeftArrow active={!isBeginning} />
              </div>

              <div
                ref={navigationNextRef}
                className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                  isEnd ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
                } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
              >
                <RightArrow active={!isEnd} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop view - swiper */}
      {!isMobile && (
        <div className="w-full relative overflow-hidden">
          <div
            className="w-full overflow-hidden select-none"
            style={{ scrollbarGutter: "stable" }}
          >
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
                swiperRef.current = swiper;
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
                if (typeof document !== "undefined") {
                  const progressBar =
                    document.getElementById("swiperProgressBar");
                  if (progressBar) {
                    const totalSlides = swiper.slides.length;
                    const visibleSlides = swiper.params.slidesPerView as number;
                    const maxIndex = totalSlides - visibleSlides;
                    const progress = (swiper.activeIndex / maxIndex) * 100;
                    progressBar.style.width = `${Math.min(progress, 100)}%`;
                  }
                }

                // Calculate if we've reached the true end (no gap)
                const isRealEnd =
                  swiper.isEnd ||
                  Math.abs(swiper.translate) >= Math.abs(swiper.maxTranslate());

                // Update navigation button states
                setIsBeginning(swiper.isBeginning);
                setIsEnd(isRealEnd);
              }}
              onInit={(swiper: SwiperType) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onReachEnd={() => {
                // Ensure we're at the true end (no gap)
                if (swiperRef.current) {
                  const totalSlides = swiperRef.current.slides.length;
                  const visibleSlides = Math.ceil(
                    swiperRef.current.params.slidesPerView as number
                  );
                  const targetIndex = totalSlides - visibleSlides;

                  // Snap to the correct position to avoid gaps
                  if (swiperRef.current.activeIndex !== targetIndex) {
                    swiperRef.current.slideTo(targetIndex);
                  }
                }
              }}
              className="w-full px-3 sm:!p-0 lg:!pl-20"
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
                1600: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
              }}
              allowSlidePrev={true}
              allowTouchMove={true}
              grabCursor={true}
              slideToClickedSlide={false}
            >
              {sliderData.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto max-w-[260px] sm:max-w-[413px]"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => onCardClick(card)}
                  >
                    <SliderCard
                      imageSrc={card.imageSrc}
                      title={card.title}
                      description={card.description
                        .split(" ")
                        .slice(0, 50)
                        .join(" ")}
                      index={index}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full max-w-[1280px] mx-auto flex items-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8">
            <div className="w-full relative h-[1px]">
              {/* Progress indicator */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D1D1D1]"></div>
              <div
                className="absolute top-0 left-0 h-[1px] bg-[#2A5FDD] transition-all duration-300"
                id="swiperProgressBar"
              ></div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <div
                ref={navigationPrevRef}
                className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                  isBeginning ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
                } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
              >
                <LeftArrow active={!isBeginning} />
              </div>

              <div
                ref={navigationNextRef}
                className={`size-8 sm:size-9 md:size-10 cross-btn-shadow ${
                  isEnd ? "bg-[#77A9E829]" : "bg-[#2A5FDD1A]"
                } rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer`}
              >
                <RightArrow active={!isEnd} />
              </div>
            </div>
          </div>
        </div>
      )}
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
