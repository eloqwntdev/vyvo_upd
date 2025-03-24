import Image from "next/image";
import React from "react";

const AccessibleInteligence = () => {
  return (
    <section className="py-[120px] bg-black md:block hidden">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <div className="max-w-[530px] w-full flex items-center justify-center relative">
          <Image
            src="/biosense-products/accessible/watch.webp"
            alt=""
            width={308}
            height={411}
          />

          <img
            src="/biosense-products/accessible/bottom-info.webp"
            className="absolute max-w-[287px] bottom-[30%] left-[0%]"
            alt=""
          />
          <img
            src="/biosense-products/accessible/top-info.webp"
            className="absolute max-w-[302px] top-[-20%] right-[0%]"
            alt=""
          />
        </div>
        <div className="max-w-[483px] w-full flex flex-col gap-10">
          <Image
            src="/biosense-products/watch/v-logo.svg"
            alt=""
            width={124}
            height={28}
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-nb font-light text-[56px] leading-[60px]">
              Accessible
              <br /> inteligence
            </h2>

            <p className="text-white font-nb font-light text-[16px] leading-[20px]">
              VAI OS uses a multimodal approach to make conversations easy and
              natural. With the BioSense Watch's speaker and mic, this Life
              CoPilot interacts seamlessly and keeps you informed on various
              aspects of your daily life, including:
            </p>

            {/* Feature list with bullet points */}
            <ul className="flex flex-col gap-6 mt-4">
              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Health Monitoring: VAI OS tracks your health via the BioSense
                  Watch and sends alerts for any concerns.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Personalized Suggestions: It analyzes your habits to offer
                  tailored advice.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  Timely Reminders: VAI OS reminds you of tasks like taking
                  vitamins, staying active, or following up on emails.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibleInteligence;
