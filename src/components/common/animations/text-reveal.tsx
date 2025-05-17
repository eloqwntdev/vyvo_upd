"use client";

import {
  useScroll,
  MotionValue,
  useTransform,
  motion,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useViewportHeight } from "@/hooks/useViewportHeight";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  icons?: ReactNode;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  icons,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [touched, setTouched] = useState(false);
  const [prevRevealed, setPrevRevealed] = useState(false);
  const [firstPointScroll, setFirstPointScroll] = useState(0);
  const [lastPointScroll, setLastPointScroll] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [vh, setVh] = useState<number | null>(null);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);
  const [targetHeight, setTargetHeight] = useState<number | null>(null);

  useEffect(() => {
    const height = window.innerHeight;
    setVh(height);
    setInitialHeight(height * 1.8);
    setTargetHeight(height);
  }, []);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0.99 && !hasRevealed) {
        if (touched) {
          setFirstPointScroll(window.scrollY);
          setPrevRevealed(true);
        } else if (prevRevealed === false) {
          setHasRevealed(true);
        }
      }
    });
    return () => {
      unsubscribe && unsubscribe();
    };
  }, [scrollYProgress, hasRevealed, prevRevealed, touched]);

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");
  const memoizedSpans = useMemo(() => {
    return words.map((word, i) => (
      <span
        key={i}
        className="py-[6px] blue-gradient xl:lg-3 relative flex items-center justify-center mx-1 lg:mx-1.5 text-center"
      >
        {word}
      </span>
    ));
  }, [hasRevealed]);

  return (
    <motion.div
      id="reveal-text"
      ref={targetRef}
      initial={{ height: initialHeight }}
      animate={{ height: hasRevealed ? targetHeight : initialHeight }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn("relative z-0")}
      style={{
        willChange: "height",
      }}
    >
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: hasRevealed ? "100%" : "50%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={cn(
          "top-0 h-[100%] mx-auto flex max-w-4xl items-center bg-transparent px-[1rem] py-[5rem] sticky"
        )}
        style={{
          willChange: "height",
        }}
      >
        <div className="flex flex-col items-center w-full">
          {!hasRevealed && icons && (
            <div className="mb-12 md:mb-16 w-full relative h-20">{icons}</div>
          )}
          {/* {!hasRevealed && (
            <span
              style={{
                background:
                  "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="flex flex-wrap sm:p-5 items-center justify-center text-[28px] font-normal text-[#FFFFFF26] md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-[40px] leading-[40px] md:leading-[48px]"
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word
                    key={i}
                    progress={scrollYProgress}
                    range={[start, end]}
                    hasRevealed={hasRevealed}
                  >
                    {word}
                  </Word>
                );
              })}
            </span>
          )} */}
          {!hasRevealed && (
            <TimeTitle
              scrollYProgress={scrollYProgress}
              text={children}
              hasRevealed={hasRevealed}
            />
          )}
          {hasRevealed && (
            <span
              style={{
                background:
                  "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="flex py-[6px] w-[94%] blue-gradient xl:lg-3 relative mx-1 lg:mx-1.5 text-center flex-wrap sm:p-5 items-center justify-center text-[28px] font-normal text-[#FFFFFF26] md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-[40px] leading-[55px] md:!leading-[60px]"
            >
              {children}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TimeTitle = ({
  text,
  scrollYProgress,
  hasRevealed,
}: {
  text: string | null;
  scrollYProgress: MotionValue<number>;
  hasRevealed?: boolean;
}) => {
  return (
    <div className="relative">
      <motion.span
        className="flex flex-wrap xl:lg-3 relative mx-1 lg:mx-1.5 text-center sm:p-5 items-center justify-center text-[28px] font-normal text-transparent md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-[40px] leading-[55px] md:!leading-[60px]"
        style={{
          background:
            "radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {text &&
          text.split(" ").map((word, index) => {
            const total = text.split(" ").length;
            const start = index / total;
            const end = (index + 1) / total;
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const opacityColor = useTransform(
              scrollYProgress,
              [start, end],
              [0.5, 1]
            );
            const color = useTransform(opacityColor, (val) => {
              if (hasRevealed) return "rgba(255, 255,255,0)";
              return `rgba(255, 255, 255, ${0.6 - val})`;
            });

            return (
              <motion.span
                key={index}
                style={{
                  color: color,
                  opacity,
                }}
                className="mx-1 lg:mx-1.5"
              >
                {word}
              </motion.span>
            );
          })}
      </motion.span>
      <span className="absolute z-[-1] top-0 flex flex-wrap xl:lg-3 mx-1 lg:mx-1.5 text-center sm:p-5 items-center justify-center text-[28px] font-normal text-transparent md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-[40px] leading-[55px] md:!leading-[60px]">
        {text &&
          text.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                style={{
                  color: "rgba(255,255,255,0.4)",
                }}
                className="mx-1 lg:mx-1.5"
              >
                {word}
              </span>
            );
          })}
      </span>
    </div>
  );
};
