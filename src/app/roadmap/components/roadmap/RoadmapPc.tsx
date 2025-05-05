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
      className="w-4 h-4 z-10 rounded-full"
    ></motion.div>
  );
};
const Line = ({
  saw,
  direction,
  side,
  length = 20,
  progress = 0,
}: {
  saw: boolean;
  direction: Direction;
  side: Side;
  length: number;
  progress: number;
}) => {
  const vwvh = direction === Direction.Horizontal ? "vw" : "vh";
  return (
    <div
      className={`relative overflow-hidden rounded-full flex ${direction === Direction.Horizontal ? "flex-row" : "flex-col"} ${
        side === Side.Left
          ? "justify-end"
          : side === Side.Right
            ? "justify-start"
            : side === Side.Top
              ? "justify-end"
              : side === Side.Bottom
                ? "justify-start"
                : "justify-end"
      } ${direction === Direction.Horizontal ? `h-[2px] w-[${length}${vwvh}]` : `w-[2px] h-[${length}${vwvh}]`}`}
    >
      <motion.div
        initial={{
          width: direction === Direction.Horizontal ? "0px" : "2px",
          height: direction === Direction.Vertical ? "0px" : "2px",
        }}
        animate={{
          width:
            direction === Direction.Horizontal
              ? `${progress * length}${vwvh}`
              : "2px",
          height:
            direction === Direction.Vertical
              ? `${progress * length}${vwvh}`
              : "2px",
        }}
        transition={progress > 0 ? { duration: 0.5 } : { duration: 0 }}
        className={`w-full h-full bg-gradient-to-${
          side === Side.Left
            ? "l"
            : side === Side.Right
              ? "r"
              : side === Side.Top
                ? "t"
                : side === Side.Bottom
                  ? "b"
                  : "l"
        } from-[#2A5FDD00] to-[#2a60dd]`}
      ></motion.div>

      <motion.div
        initial={{
          width:
            direction === Direction.Horizontal ? `${length}${vwvh}` : "2px",
          height: direction === Direction.Vertical ? `${length}${vwvh}` : "2px",
        }}
        animate={{
          width:
            direction === Direction.Horizontal
              ? saw
                ? `${(1 - progress) * length}${vwvh}`
                : "2px"
              : "2px",
          height:
            direction === Direction.Vertical
              ? saw
                ? `${(1 - progress) * length}${vwvh}`
                : "2px"
              : "2px",
        }}
        transition={progress > 0 ? { duration: 0.5 } : { duration: 0 }}
        className={`absolute w-full h-full bg-[#ffffff1a] ${
          side === Side.Left
            ? "left-0"
            : side === Side.Right
              ? "right-0"
              : side === Side.Top
                ? "top-0"
                : side === Side.Bottom
                  ? "bottom-0"
                  : "left-0"
        }`}
      ></motion.div>
    </div>
  );
};

const RoadmapPc = ({ roadmap_datas }: { roadmap_datas: RoadmapData[] }) => {
  return (
    <>
      <TimeTitle saw={true} text={roadmap_datas[0].title} />
      <div className="flex w-full flex-col items-center gap-2 mt-[50px] mb-[200px]">
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={20}
          saw={true}
          progress={1}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            saw={true}
            description={roadmap_datas[0].cards[1].description}
          >
            {roadmap_datas[0].cards[1].image}
          </Cards>
          <Dot saw={true} />
          <Line
            side={Side.Left}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Line
            side={Side.Right}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Cards
            className="ml-[-8px]"
            saw={true}
            description={roadmap_datas[0].cards[0].description}
          >
            {roadmap_datas[0].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          saw={true}
          progress={1}
        />
        <TimeTitle saw={true} text={roadmap_datas[1].title} />
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={30}
          saw={true}
          progress={1}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            saw={true}
            description={roadmap_datas[1].cards[1].description}
          >
            {roadmap_datas[1].cards[1].image}
          </Cards>
          <Dot saw={true} />
          <Line
            side={Side.Left}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Line
            side={Side.Right}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Cards
            className="ml-[-8px]"
            saw={true}
            description={roadmap_datas[1].cards[0].description}
          >
            {roadmap_datas[1].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          saw={true}
          progress={1}
        />
        <TimeTitle saw={true} text={roadmap_datas[2].title} />
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={30}
          saw={true}
          progress={1}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            saw={true}
            description={roadmap_datas[2].cards[1].description}
          >
            {roadmap_datas[2].cards[1].image}
          </Cards>
          <Dot saw={true} />
          <Line
            side={Side.Left}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Line
            side={Side.Right}
            direction={Direction.Horizontal}
            length={10}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Cards
            className="ml-[-8px]"
            saw={true}
            description={roadmap_datas[2].cards[0].description}
          >
            {roadmap_datas[2].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          saw={true}
          progress={1}
        />
        <div className="flex flex-row items-center">
          <Line
            side={Side.Left}
            direction={Direction.Horizontal}
            length={20}
            saw={true}
            progress={1}
          />
          <Dot saw={true} />
          <Line
            side={Side.Right}
            direction={Direction.Horizontal}
            length={20}
            saw={true}
            progress={1}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-[20vw]">
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={6}
              saw={true}
              progress={1}
            />
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={6}
              saw={true}
              progress={1}
            />
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={6}
              saw={true}
              progress={1}
            />
          </div>
          <div className="flex flex-row gap-[20vw]">
            <Dot saw={true} />
            <Dot saw={true} />
            <Dot saw={true} />
          </div>
        </div>
        <div className="flex flex-row gap-[100px] mt-[-16px]">
          <Cards saw={true} description={roadmap_datas[3].cards[2].description}>
            {roadmap_datas[3].cards[2].image}
          </Cards>
          <Cards saw={true} description={roadmap_datas[3].cards[1].description}>
            {roadmap_datas[3].cards[1].image}
          </Cards>
          <Cards saw={true} description={roadmap_datas[3].cards[0].description}>
            {roadmap_datas[3].cards[0].image}
          </Cards>
        </div>
      </div>
    </>
  );
};

export default RoadmapPc;
