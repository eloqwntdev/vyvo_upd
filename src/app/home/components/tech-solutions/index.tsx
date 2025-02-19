import React from "react";
import SolutionCard from "./solution-card";

const TechSolutions = () => {
  const solutionCards = [
    {
      title: "Vyvo Smart Chain",
      description:
        "The first heartbeat-powered blockchain, Vyvo Smart Chain keeps your data private, secure, and under your control. No third parties—just complete transparency and ownership. With its decentralized platform, you can manage and access rewards generated from anonymous wearable data.",
      images: [
        "/homepage/solutions/card1/card1.webp",
        "/homepage/solutions/card1/card2.webp",
        "/homepage/solutions/card1/card3.webp",
      ],
      reverse: false,
    },
    {
      title: "Vyvo Tech",
      description: [
        "Vyvo's wearables redefine what it means to stay connected to your health. Using IoT and cutting-edge sensors, our devices have built intuitive solutions that not only track your body's signals but also translate them into meaningful and actionable insights.",
        "Integrated with AI and blockchain, Vyvo wearables offer a seamless blend of real-time data and personalized wellness guidance, helping you make informed choices effortlessly.",
      ],
      images: [
        "/homepage/solutions/card2/card1.webp",
        "/homepage/solutions/card2/card2.webp",
        "/homepage/solutions/card2/card3.webp",
      ],
      reverse: true,
    },
    {
      title: "VAI OS",
      description:
        "At the vanguard of AI, Vyvo turns data from your day to day life into actionable insights that adapt to your lifestyle. With your Life CoPilot, every interaction makes it smarter and capable of new personalized solutions, delivering ever growing value for its users.",
      images: [
        "/homepage/solutions/card3/card1.webp",
        "/homepage/solutions/card3/card2.webp",
        "/homepage/solutions/card3/card3.webp",
      ],
      reverse: false,
    },
  ];
  return (
    <section className="bg-[#000000] py-10 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:gap-[60px] px-4 md:px-8 items-center justify-center">
        <div className="w-full md:max-w-[900px] flex text-left md:text-center flex-col gap-4 md:gap-6">
          <h2 className="font-nb font-light text-[20px] md:text-[32px] lg:text-[48px] leading-[24px] md:leading-[40px] lg:leading-[56px] tracking-[-3%] text-white">
            Vyvo drives innovation at the intersection of Web3, Wearable
            Technology, and AI.
          </h2>
          <p className="text-white/80 font-nb font-light text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] md:leading-[28px] lg:leading-[32px] tracking-[-3%]">
            Smarter living with secure, personalized, and adaptive solutions.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-[100px] w-full">
          {solutionCards.map((card, index) => (
            <SolutionCard
              key={index}
              title={card.title}
              description={card.description}
              images={card.images}
              reverse={card.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
