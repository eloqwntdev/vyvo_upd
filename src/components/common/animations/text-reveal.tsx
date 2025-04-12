"use client";

import { useScroll, MotionValue, useTransform, motion } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
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

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <div className="flex flex-col items-center w-full">
          {icons && (
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
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative flex items-center justify-center mx-1 lg:mx-1.5 text-center">
      <span className="absolute text-[#FFFFFF26]">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={
          "bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent"
        }
      >
        {children}
      </motion.span>
    </span>
  );
};
