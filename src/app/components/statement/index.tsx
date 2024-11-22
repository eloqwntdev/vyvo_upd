//@ts-nocheck
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Statement = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.01", "end 1"],
  });

  const icons = [
    { src: "/statement/first.svg", range: [0, 0.2, 0.35] },
    { src: "/statement/second.svg", range: [0.2, 0.35, 0.5] },
    { src: "/statement/third.svg", range: [0.35, 0.5, 0.65] },
    { src: "/statement/last.svg", range: [0.65, 0.8, 1] },
  ];

  const text =
    "VAI OS is a secure Web3 AI operating system built to be your Life CoPilot. It simplifies the way you approach your work, health, and more, allowing you to focus on what matters most.";

  return (
    <div
      className="md:h-[3000px] h-[700px] flex items-center justify-center md:block bg-black w-full z-50 relative"
      ref={sectionRef}
    >
      <div className="bg-black z-10 md:sticky top-[20%] w-full">
        <section
          className="h-full max-h-[568px] lg:h-screen grid place-content-center relative"
          id="statement-section"
        >
          <div className="absolute w-full flex justify-between items-center mx-auto top-[20%] left-0 right-0 max-w-[500px]">
            {icons.map((icon, index) => {
              const opacity = useTransform(
                scrollYProgress,
                icon.range,
                [0, 1, 0]
              );

              const yPos = useTransform(
                scrollYProgress,
                icon.range,
                [50, 0, -50]
              );

              return (
                <motion.div
                  key={icon.src}
                  style={{
                    opacity,
                    y: yPos,
                  }}
                  className={index === 3 ? "absolute left-0" : ""}
                >
                  <div className="md:size-12 size-6 relative">
                    <Image src={icon.src} alt={`Icon ${index + 1}`} fill />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <Paragraph paragraph={text} scrollYProgress={scrollYProgress} />
        </section>
      </div>
    </div>
  );
};

const Paragraph = ({ paragraph, scrollYProgress }) => {
  const words = paragraph.split(" ");

  return (
    <p className="flex text-[24px] leading-[32px] md:text-[40px] md:leading-[48px] px-4 md:p-10 max-w-[962px] font-light text-center justify-center items-center flex-wrap">
      {words.map((word, i) => {
        const start = i / (words.length / 0.7);
        const end = start + 1 / (words.length / 0.7);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-2 md:mr-3 md:mt-3 bg-gradient-to-b from-[#2A5FDD] to-[#77A9E8] text-center bg-clip-text text-transparent">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute text-center text-[#FFFFFF26]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Statement;
