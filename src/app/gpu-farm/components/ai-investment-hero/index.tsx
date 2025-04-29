import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../../../../public/lottie/blue-back-lines-move/data.json";

const AIInvestmentHero = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 min-h-[500px] sm:min-h-[600px] md:min-h-[800px] relative flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col items-center gap-4 sm:gap-6">
        <motion.h2
          className="text-white font-nb font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-tight lg:leading-[60px] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          A Smarter Investment in
          <br className="hidden sm:block" /> the{" "}
          <span className="banner-gradient-text">AI Revolution</span>
        </motion.h2>

        <motion.p
          className="max-w-[320px] sm:max-w-[450px] md:max-w-[611px] w-full text-center text-white/80 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2,
          }}
        >
          Vyvo's GPU farms aren't just a technical upgrade—they're a gateway to
          the next generation of AI-driven innovation. By building a proprietary
          network, Vyvo is setting a new standard in ensuring security,
          scalability, and user empowerment for the AI of tomorrow.
        </motion.p>
      </div>

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lottie
              className="w-full h-full pointer-events-none"
              animationData={animationData}
              loop
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIInvestmentHero;
