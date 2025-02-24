"use client";
import React from "react";

const SocialFiBanner = () => {
  return (
    <section className="min-h-[578px] md:min-h-[900px] w-full flex items-end bg-black rounded-b-[24px]">
      <div className="w-full flex flex-col gap-20 md:gap-[160px] items-center pb-[31px] md:pb-20 px-4 md:px-6">
        <div className="max-w-[684px] w-full flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="text-white font-light font-nb text-[24px] md:text-[72px] leading-[28px] md:leading-[76px] tracking-[-0.7px] md:tracking-[-2.2px]">
            Vyvo <span className="text-[#FF0066]">SocialFi:</span> <br />
            Connect, Share, Thrive
          </h1>
          <p className="max-w-[484px] text-center font-nb text-white font-light text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
            Vyvo SocialFi enables people of all backgrounds — and from all
            around the world — to benefit from Influencer Marketing in our
            connected, Web3 world. And it's all based on the power of your
            heartbeat!
            <br />
            <br />
            Vyvo SocialFi makes it easy to take part in our mission and discover
            game-changing crypto mining. Plus, your data is safe and private on
            our proprietary Vyvo Smart Chain blockchain.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 items-center justify-center">
          <span className="text-white font-light font-nb text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
            The Evolution of Influencer Marketing
          </span>
          <span className="text-[#FF0066] font-nb font-light text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] tracking-[-0.3px]">
            Are you ready?
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialFiBanner;
