import { useEffect, useState } from "react";
import Cards from "./components/cards";
import { motion } from "framer-motion";
import { tr } from "date-fns/locale";

enum Side {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}
interface RoadmapCard {
  image: JSX.Element;
  description: string;
  index: number;
  side: Side;
}

interface RoadmapData {
  title: string | null;
  cards: RoadmapCard[];
}
const TimeTitle = ({ text }: { text: string | null }) => {
  const [inView, SetInView] = useState(false);
  const [Spans, setSpans] = useState<JSX.Element[]>([]);
  useEffect(() => {
    if (text !== null) {
      if (inView) {
        const spans = text.split("").map((char, index) => (
          <motion.span
            className="text-white"
            key={index}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            {char}
          </motion.span>
        ));
        setSpans(spans);
      } else {
        const spans = text.split("").map((char, index) => (
          <span className="text-[#ffffff77]" key={index}>
            {char}
          </span>
        ));
        setSpans(spans);
      }
    }
  }, [text, inView]);

  return (
    <motion.span
      onViewportEnter={() => SetInView(true)}
      onViewportLeave={() => SetInView(false)}
      viewport={{ once: true, amount: 0.5 }}
      className="font-nb font-light text-[20px] leading-[24px] tracking-[-0.6px] text-white"
    >
      {Spans}
    </motion.span>
  );
};
const MobileDesign = ({ roadmap_datas }: { roadmap_datas: RoadmapData[] }) => {
  return (
    <>
      {roadmap_datas.map((roadmap_data, index) => (
        <div className="flex flex-col gap-6" key={index}>
          <TimeTitle text={roadmap_data.title} />
          {roadmap_data.cards.map((card, cardIndex) => (
            <Cards
              isMobile={true}
              description={card.description}
              index={card.index}
              key={cardIndex}
              side={card.side}
            >
              {card.image}
            </Cards>
          ))}
        </div>
      ))}
    </>
  );
};

export default MobileDesign;
