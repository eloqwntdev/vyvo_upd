import React from "react";

const Overview = () => {
  return (
    <section
      className="min-h-[600px] bg-white grid place-content-center px-[10px] lg:px-0"
      id="statement-section"
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center max-w-[673px]">
        <h2 className="text-black text-[32px] leading-[36px] md:text-[48px] md:leading-[60px] tracking-[-0.03em]">
          <span className="banner-gradient-text">BioSense:</span> Wearable
          Wellness, Anytime, Anywhere
        </h2>
        <p className="max-w-[321px] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] tracking-[-0.03em] text-[#00000099]">
          Track every heartbeat, breath, and burst of energy with BioSense Ring
          and Band.
        </p>
        <button className="py-[15px] bg-[#77A9E829] hover:bg-transparent border border-transparent hover:border-[#77A9E829] transition-all duration-300 ease-in-out vyvo-button w-full max-w-[160px] rounded-[16px]">
          <span className="text-[16px] leading-[18px] text-black tracking-[-0.01em] font-normal">
            Shop now
          </span>
        </button>
      </div>
    </section>
  );
};

export default Overview;
