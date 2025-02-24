import ScrollToSection from "@/components/common/animations/scroll-to-section";
import React from "react";

const AboutUsBanner = () => {
  return (
    <section className="min-h-[578px] md:min-h-[900px] relative w-full bg-black flex items-end justify-end">
      <img
        src="/about-us/Hero.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill"
      />

      <div className="flex flex-col gap-10 md:gap-20 items-center justify-end relative w-full mx-auto pb-10 md:pb-20 px-4 md:px-6">
        <div className="w-full max-w-[1280px]">
          <div className="max-w-[1178px] w-full flex flex-col gap-8">
            <h1 className="text-white font-nb font-light text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-1.2px] md:tracking-[-2.2px]">
              About Us
            </h1>

            <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
              <p className="max-w-full md:max-w-[586px] w-full text-white font-nb font-light text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] tracking-[-0.6px]">
                Vyvo's visionary track record has always centered on helping
                people live healthier and more fulfilling lives. For a decade,
                Vyvo has delivered innovations that have received approval by
                the FDA, been classified as medical-grade devices in Europe, and
                even won design awards.
              </p>
              <p className="max-w-full md:max-w-[461px] w-full text-white font-nb font-light text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] :tracking-[-0.6px]">
                Whether wearable tech, web3, or AI-powered solutions, Vyvo
                ensures that people have tools that adapt and evolve to create a
                brighter future.
              </p>
            </div>
          </div>
        </div>
        <ScrollToSection id={""} />
      </div>
    </section>
  );
};

export default AboutUsBanner;
