import React from "react";

const AIInvestmentHero = () => {
  return (
    <section className="bg-black min-h-[800px] relative flex items-center justify-center flex-col gap-6">
      <h2 className="text-white font-nb relative z-10 font-light text-[56px] leading-[60px] text-center">
        A Smarter Investment in
        <br /> the <span className="banner-gradient-text">AI Revolution</span>
      </h2>
      <p className="max-w-[611px] w-full relative z-10 text-center text-white font-nb font-light text-[16px] leading-[20px]">
        Vyvo’s GPU farms aren’t just a technical upgrade—they’re a gateway to
        the next generation of AI-driven innovation. By building a proprietary
        network, Vyvo is setting a new standard in ensuring security,
        scalability, and user empowerment for the AI of tomorrow.
      </p>

      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute z-[2] w-full h-full left-0 max-w-[1193px] min-h-[588px] "
      />
    </section>
  );
};

export default AIInvestmentHero;
