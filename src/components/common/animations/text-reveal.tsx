"use client";

import {
  useScroll,
  MotionValue,
  useTransform,
  motion,
  animate,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useRef,
  useState,
  useEffect,
} from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

  // useEffect(() => {
  //   const handleTouchStart = () => {
  //     setTouched(true);
  //   };

  //   const handleTouchEnd = () => {
  //     setTouched(false);
  //     if (prevRevealed && !hasRevealed) {
  //       setLastPointScroll(window.scrollY);
  //       console.log(window.scrollY);
  //       setHasRevealed(true);
  //     }
  //   };

  //   window.addEventListener("touchstart", handleTouchStart);
  //   window.addEventListener("touchend", handleTouchEnd);

  //   return () => {
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, [prevRevealed, hasRevealed]);
  // useEffect(() => {
  //   if (hasRevealed) {
  //     const html = document.documentElement;
  //     const prevScrollBehavior = html.style.scrollBehavior;
  //     html.style.scrollBehavior = "auto";
  //     const element = document.getElementById("reveal-text");
  //     if (element) {
  //       const elementRect = element.getBoundingClientRect();
  //       const offset = window.innerHeight / 2 - elementRect.height / 2;
  //       window.scrollTo({
  //         top: window.scrollY - window.innerHeight - offset - 60,
  //       });
  //     }
  //     html.style.scrollBehavior = prevScrollBehavior;
  //   }
  // }, [hasRevealed]);

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <motion.div
      id="reveal-text"
      ref={targetRef}
      initial={{ height: "150svh" }}
      animate={{ height: hasRevealed ? "100svh" : "150svh" }}
      transition={{ duration: 1 }}
      className={cn("relative z-0")}
    >
      <motion.div
        initial={{ height: "60%" }}
        animate={{ height: hasRevealed ? "100%" : "60%" }}
        transition={{ duration: 1 }}
        className={cn(
          "top-0 mx-auto flex max-w-4xl items-center bg-transparent px-[1rem] py-[5rem] sticky"
        )}
      >
        <div className="flex flex-col items-center w-full">
          {!hasRevealed && icons && (
            <div className="mb-12 md:mb-16 w-full relative h-20">{icons}</div>
          )}
          <span
            className={
              "flex flex-wrap sm:p-5 items-center justify-center text-[28px] font-normal text-[#FFFFFF26] md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-[40px] leading-[40px] md:leading-[48px]"
            }
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
        </div>
      </motion.div>
    </motion.div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  hasRevealed?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, hasRevealed }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative flex items-center justify-center mx-1 lg:mx-1.5 text-center">
      <span className="absolute py-[6px] text-[#FFFFFF26]">{children}</span>
      <motion.span
        style={{ opacity: hasRevealed ? 1 : opacity }}
        className={
          "bg-gradient-to-r py-[6px] from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent"
        }
      >
        {children}
      </motion.span>
    </span>
  );
};
