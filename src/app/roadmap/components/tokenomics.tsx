import React from "react";
import animationData from "../../../../public/lottie/1_3/data.json";
import dynamic from "next/dynamic";
import Cards from "./tokenomics/cards";
import { motion } from "framer-motion";

const Tokenomics = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
  const cardsData = [
    {
      title: "Initial Supply",
      value: "50,000,000 VSC",
      icon: "/roadmap-img/tokenomics/icon1.png",
    },

    {
      title: "Total Supply",
      value: "250,000,000 VSC",
      icon: "/roadmap-img/tokenomics/icon2.png",
    },

    {
      title: "Blockchain",
      value: "Vyvo Smart Chain",
      icon: "/roadmap-img/tokenomics/icon3.png",
    },

    {
      title: "Smart Contract",
      value: "View Contract",
      link: "/smart-contract",
      icon: "/roadmap-img/tokenomics/icon4.png",
    },
  ];
  return (
    <section className="py-5 md:py-20 flex flex-col gap-[60px] items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="text-white px-4 md:px-20 w-full text-left md:text-center text-[24px] leading-[28px] tracking-[-0.72px] md:text-[56px] md:leading-[60px] md:tracking-[-1.68px] font-nb font-light"
      >
        Tokenomics
      </motion.h2>

      <div className="flex flex-col md:flex-row max-w-[1600px] w-full gap-8 mx-ayto items-center justify-between px-4 md:px-20">
        <div className="flex flex-col gap-12 max-w-[570px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex flex-col gap-6 max-w-[527px]"
          >
            <h3 className="text-white font-nb font-light text-[20px] leading-[24px] tracking-[-0.6px] md:text-[48px] md:leading-[60px] md:tracking-[-1.44px]">
              Vyvo Smart Chain (VSC)
            </h3>

            <p className="text-white font-nb font-light text-[14px] leading-[18px] tracking-[-0.42px] md:text-[16px] md:leading-[20px] md:tracking-[-0.48px]">
              Vyvo Smart Chain is a HealthFi ecosystem that promotes and rewards
              positive lifestyle habits through health data monetization. The
              network runs on a validation protocol called Proof-of-Sensing
              (PoSe), which aims to give users full privacy, complete
              decentralization, and access to monetization of their personal
              health data.
              <br />
              <br />
              VSC is the native utility token that is used for: - Fees for
              processing transactions and storing data. - Running validator
              nodes on the network via staking VSC tokens. - Rewarding users for
              generating health metric data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-full md:max-w-[505px] lg:max-w-none"
          >
            {cardsData.map((card, index) => (
              <Cards
                key={index}
                index={index}
                title={card.title}
                value={card.value}
                link={card.link ? card.link : null}
                icon={card.icon}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="max-w-[570px] w-full"
        >
          <div className="flex items-center justify-center">
            <Lottie
              className="hidden md:block w-full h-full pointer-events-none"
              animationData={animationData}
              loop
              assetsPath="/lottie/1_3/images/"
            />
            <Lottie
              className="block md:hidden w-full h-full pointer-events-none"
              animationData={animationData}
              loop
              autoplay={false}
              assetsPath="/lottie/1_3/images/"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
