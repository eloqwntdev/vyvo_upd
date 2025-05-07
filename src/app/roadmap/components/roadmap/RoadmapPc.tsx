import { useEffect, useRef, useState } from "react";
import Cards from "./components/cards";
import { motion, MotionValue, useScroll } from "framer-motion";

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
const TimeTitle = ({
  text,
  from,
  scrollYProgress,
}: {
  text: string | null;
  from: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const [inView, SetInView] = useState(false);
  const [Spans, setSpans] = useState<JSX.Element[]>([]);
  const [saw, SetSaw] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value: number) => {
      if (value >= from) {
        SetSaw(true);
        SetInView(true);
      } else {
        SetSaw(false);
        SetInView(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, from]);

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
          <span className="opacity-[0.4] text-[#ffffff]" key={index}>
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
const Dot = ({
  from,
  scrollYProgress,
}: {
  from: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const [saw, SetSaw] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= from) {
        SetSaw(true);
      } else {
        SetSaw(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, from]);
  return (
    <motion.div
      initial={{
        background:
          "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #4C4C4C 100%, #4C4C4C 0%)",
      }}
      animate={{
        background: saw
          ? "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)"
          : "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #4C4C4C 100%, #4C4C4C 0%)",
      }}
      transition={{ duration: 0.5 }}
      className="w-4 h-4 z-10 rounded-full"
    ></motion.div>
  );
};
const Line = ({
  direction,
  side,
  length = 20,
  from = 0.0,
  to = 0.0,
  scrollYProgress,
  className = "",
  solid = false,
}: {
  direction: Direction;
  side: Side;
  length: number;
  from: number;
  to: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
  solid?: boolean;
}) => {
  const [progress, SetProgress] = useState(0);
  const vwvh = direction === Direction.Horizontal ? "vw" : "vh";
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > from && value < to) {
        SetProgress((value - from) / (to - from));
      } else if (value <= from) {
        SetProgress(0);
      } else if (value >= to) {
        SetProgress(1);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, from, to]);
  return (
    <div
      className={`${className} relative overflow-hidden rounded-full flex ${direction === Direction.Horizontal ? "flex-row" : "flex-col"} ${
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
      <div
        style={{
          width:
            direction === Direction.Horizontal ? `${length}${vwvh}` : `w-[2px]`,
          height:
            direction === Direction.Horizontal ? `h-[2px]` : `${length}${vwvh}`,
        }}
      ></div>
      <motion.div
        initial={{
          width: direction === Direction.Horizontal ? `0${vwvh}` : "2px",
          height: direction === Direction.Vertical ? `0${vwvh}` : "2px",
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
        transition={{ duration: 0.1 }}
        className={`absolute w-full h-full`}
        style={{
          background: `${
            solid
              ? `#2a60dd`
              : `linear-gradient(to ${
                  {
                    [Side.Left]: "left",
                    [Side.Right]: "right",
                    [Side.Top]: "top",
                    [Side.Bottom]: "bottom",
                  }[side]
                }, rgba(42, 95, 221, 0), #2a60dd)`
          }`,
          ...{
            [Side.Left]: { right: 0 },
            [Side.Right]: { left: 0 },
            [Side.Top]: { bottom: 0 },
            [Side.Bottom]: { top: 0 },
          }[side],
        }}
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
              ? `${(1 - progress) * length}${vwvh}`
              : "2px",
          height:
            direction === Direction.Vertical
              ? `${(1 - progress) * length}${vwvh}`
              : "2px",
        }}
        transition={{ duration: 0.1 }}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: containerRef,
  });
  const [scrollYProgressVar, setScrollYProgressVar] =
    useState<MotionValue<number>>(scrollYProgress);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value === 1) {
        setScrollYProgressVar({
          get: () => 1,
          onChange: () => () => {},
          clearListeners: () => {},
          set: () => {},
          stop: () => {},
          version: 1,
          events: {},
          on: () => () => {},
        } as unknown as MotionValue<number>);
      } else if (scrollYProgressVar.get() !== 1) {
        setScrollYProgressVar(scrollYProgress);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, scrollYProgressVar]);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center h-fit w-full"
    >
      <TimeTitle
        from={0.08}
        scrollYProgress={scrollYProgressVar}
        text={roadmap_datas[0].title}
      />
      <div className="flex w-full flex-col items-center gap-2 mt-[50px] mb-[200px]">
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={20}
          from={0.08}
          to={0.15}
          scrollYProgress={scrollYProgressVar}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            from={0.17}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[0].cards[1].description}
          >
            {roadmap_datas[0].cards[1].image}
          </Cards>
          <Dot from={0.17} scrollYProgress={scrollYProgressVar} />
          <div className="flex flex-row gap-3 items-center">
            <Line
              side={Side.Left}
              direction={Direction.Horizontal}
              length={10}
              from={0.15}
              to={0.17}
              scrollYProgress={scrollYProgressVar}
            />
            <Dot from={0.15} scrollYProgress={scrollYProgressVar} />
            <Line
              side={Side.Right}
              direction={Direction.Horizontal}
              length={10}
              from={0.15}
              to={0.17}
              scrollYProgress={scrollYProgressVar}
            />
          </div>
          <Dot from={0.17} scrollYProgress={scrollYProgressVar} />

          <Cards
            className="ml-[-8px]"
            from={0.17}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[0].cards[0].description}
          >
            {roadmap_datas[0].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          from={0.17}
          to={0.26}
          scrollYProgress={scrollYProgressVar}
        />
        <TimeTitle
          from={0.26}
          scrollYProgress={scrollYProgressVar}
          text={roadmap_datas[1].title}
        />
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={30}
          from={0.26}
          to={0.42}
          scrollYProgress={scrollYProgressVar}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            from={0.44}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[1].cards[1].description}
          >
            {roadmap_datas[1].cards[1].image}
          </Cards>
          <Dot from={0.44} scrollYProgress={scrollYProgressVar} />

          <div className="flex flex-row gap-3 items-center">
            <Line
              side={Side.Left}
              direction={Direction.Horizontal}
              length={10}
              from={0.42}
              to={0.44}
              scrollYProgress={scrollYProgressVar}
            />
            <Dot from={0.42} scrollYProgress={scrollYProgressVar} />
            <Line
              side={Side.Right}
              direction={Direction.Horizontal}
              length={10}
              from={0.42}
              to={0.44}
              scrollYProgress={scrollYProgressVar}
            />
          </div>
          <Dot from={0.44} scrollYProgress={scrollYProgressVar} />

          <Cards
            className="ml-[-8px]"
            from={0.44}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[1].cards[0].description}
          >
            {roadmap_datas[1].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          from={0.44}
          to={0.55}
          scrollYProgress={scrollYProgressVar}
        />
        <TimeTitle
          from={0.55}
          scrollYProgress={scrollYProgressVar}
          text={roadmap_datas[2].title}
        />
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={30}
          from={0.55}
          to={0.7}
          scrollYProgress={scrollYProgressVar}
        />
        <div className="h-4 flex flex-row items-center">
          <Cards
            className="mr-[-8px]"
            from={0.72}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[2].cards[1].description}
          >
            {roadmap_datas[2].cards[1].image}
          </Cards>
          <Dot from={0.72} scrollYProgress={scrollYProgressVar} />

          <div className="flex flex-row gap-3 items-center">
            <Line
              side={Side.Left}
              direction={Direction.Horizontal}
              length={10}
              from={0.7}
              to={0.72}
              scrollYProgress={scrollYProgressVar}
            />
            <Dot from={0.7} scrollYProgress={scrollYProgressVar} />
            <Line
              side={Side.Right}
              direction={Direction.Horizontal}
              length={10}
              from={0.7}
              to={0.72}
              scrollYProgress={scrollYProgressVar}
            />
          </div>
          <Dot from={0.72} scrollYProgress={scrollYProgressVar} />

          <Cards
            className="ml-[-8px]"
            from={0.72}
            scrollYProgress={scrollYProgressVar}
            description={roadmap_datas[2].cards[0].description}
          >
            {roadmap_datas[2].cards[0].image}
          </Cards>
        </div>
        <Line
          side={Side.Bottom}
          direction={Direction.Vertical}
          length={32}
          from={0.77}
          to={0.87}
          scrollYProgress={scrollYProgressVar}
        />
        <div className="flex flex-row gap-3 items-center">
          <Line
            side={Side.Left}
            direction={Direction.Horizontal}
            length={20}
            from={0.87}
            to={0.89}
            scrollYProgress={scrollYProgressVar}
          />
          <Dot from={0.87} scrollYProgress={scrollYProgressVar} />

          <Line
            side={Side.Right}
            direction={Direction.Horizontal}
            length={20}
            from={0.87}
            to={0.89}
            scrollYProgress={scrollYProgressVar}
          />
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col items-center">
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={8}
              from={0.89}
              to={0.9}
              solid={true}
              scrollYProgress={scrollYProgressVar}
              className="mt-[-2vh]"
            />
            <Dot from={0.9} scrollYProgress={scrollYProgressVar} />

            <Cards
              className="my-[-8px]"
              from={0.9}
              scrollYProgress={scrollYProgressVar}
              description={roadmap_datas[3].cards[2].description}
            >
              {roadmap_datas[3].cards[2].image}
            </Cards>
          </div>
          <div className="flex flex-col items-center">
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={6}
              from={0.89}
              to={0.9}
              scrollYProgress={scrollYProgressVar}
            />
            <Dot from={0.9} scrollYProgress={scrollYProgressVar} />

            <Cards
              className="my-[-8px]"
              from={0.9}
              scrollYProgress={scrollYProgressVar}
              description={roadmap_datas[3].cards[1].description}
            >
              {roadmap_datas[3].cards[1].image}
            </Cards>
          </div>
          <div className="flex flex-col items-center">
            <Line
              side={Side.Bottom}
              direction={Direction.Vertical}
              length={8}
              from={0.89}
              to={0.9}
              solid={true}
              scrollYProgress={scrollYProgressVar}
              className="mt-[-2vh]"
            />
            <Dot from={0.9} scrollYProgress={scrollYProgressVar} />

            <Cards
              className="my-[-8px]"
              from={0.9}
              scrollYProgress={scrollYProgressVar}
              description={roadmap_datas[3].cards[0].description}
            >
              {roadmap_datas[3].cards[0].image}
            </Cards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPc;
