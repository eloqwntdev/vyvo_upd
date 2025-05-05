import { useEffect, useState } from "react";
import Cards from "./components/cards";
import { motion } from "framer-motion";

enum Side {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}
enum Direction {
  Horizontal = "horizontal",
  Vertical = "vertical",
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
const TimeTitle = ({ text, saw }: { text: string | null; saw: boolean }) => {
  const [inView, SetInView] = useState(false);
  const [Spans, setSpans] = useState<JSX.Element[]>([]);
  useEffect(() => {
    SetInView(saw);
  }, [saw]);
  useEffect(() => {
    if (text !== null) {
      if (inView) {
        const spans = text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.4, color: "#ffffff" }}
            animate={{ opacity: 1, color: "transparent" }}
            transition={{ delay: index * 0.05, duration: 0 }}
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
      className="font-nb font-normal text-[32px] leading-[36px] tracking-[-0.96px] text-transparent"
      style={{
        background:
          "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
    >
      {Spans}
    </motion.span>
  );
};
const Dot = ({ saw }: { saw: boolean }) => {
  return (
    <motion.div
      initial={{
        background:
          "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #ffffff 100%, #ffffff 0%)",
        opacity: 0.3,
      }}
      animate={{
        background: saw
          ? "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)"
          : "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #ffffff 100%, #ffffff 0%)",
        opacity: saw ? 1 : 0.3,
      }}
      transition={{ duration: 0.5 }}
      className="w-4 h-4 rounded-full"
    ></motion.div>
  );
};

const RoadmapPc = ({ roadmap_datas }: { roadmap_datas: RoadmapData[] }) => {
  return (
    <>
      <TimeTitle saw={true} text="Short-Term (0-6 Months)" />
      <Dot saw={true} />
    </>
  );
};

export default RoadmapPc;
