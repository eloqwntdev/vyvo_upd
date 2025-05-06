import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

enum Side {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}
interface CardsProps {
  children: JSX.Element;
  description: string;
  index?: number;
  isMobile?: boolean;
  side?: Side;
  saw?: boolean;
  className?: string;
}

const Cards: React.FC<CardsProps> = ({
  children,
  description,
  index = 0,
  isMobile = false,
  side = Side.Left,
  saw = false,
  className = "",
}) => {
  const [inView, SetInView] = useState(false);
  const [descriptionSpans, setDescriptionSpans] = useState<JSX.Element[]>([]);

  useEffect(() => {
    SetInView(saw);
  }, [saw]);

  useEffect(() => {
    if (inView) {
      const spans = description.split("").map((char, index) => (
        <motion.span
          className="text-white"
          key={index}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.0125, duration: 0.2 }}
        >
          {char}
        </motion.span>
      ));
      setDescriptionSpans(spans);
    } else {
      const spans = description.split("").map((char, index) => (
        <span className="text-[#ffffff77]" key={index}>
          {char}
        </span>
      ));
      setDescriptionSpans(spans);
    }
  }, [description, inView]);

  return (
    <motion.div
      // initial={{
      //   opacity: 0,
      //   x: isMobile
      //     ? -20
      //     : side === Side.Left
      //       ? -20
      //       : side === Side.Right
      //         ? 20
      //         : 0,
      //   y: isMobile
      //     ? 0
      //     : side === Side.Top
      //       ? -20
      //       : side === Side.Bottom
      //         ? 20
      //         : 0,
      // }}
      // whileInView={{ opacity: 1, x: 0, y: 0 }}
      onViewportEnter={() => {
        if (isMobile) {
          SetInView(true);
        }
      }}
      onViewportLeave={() => {
        if (isMobile) {
          SetInView(false);
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className={`flex w-full md:w-[20vw] max-w-[500px] md:max-w-[500px] items-center justify-start gap-3 ${className}`}
    >
      <div className="relative w-full flex flex-col gap-4">
        <motion.div
          initial={{ opacity: isMobile ? 0 : 0.5 }}
          animate={{
            opacity: inView ? 1 : inView ? 0.5 : isMobile ? 0.0 : 0.5,
          }}
          transition={{ duration: 2 }}
          className="bg-[#5348d70a] w-full rounded-[24px] py-3 px-3 shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]"
        >
          {children}
        </motion.div>
        <div>
          <p className="md:absolute font-nb font-light text-[14px] leading-[18px] tracking-[-0.42px] md:text-[20px] md:leading-[24px] md:tracking-[-0.6px]">
            {descriptionSpans}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
