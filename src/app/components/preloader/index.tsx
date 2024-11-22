import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

// Component to animate the loading dots
function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === ".." ? "" : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return <span>{dots}</span>;
}

// Define the types for the props
interface CounterProps {
  from: number;
  to: number;
}

function Counter({ from, to }: CounterProps) {
  // Explicitly define the type of the ref as HTMLParagraphElement
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3.5,
      onUpdate(value) {
        // Check if node is not null before updating textContent
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <>
      <p ref={nodeRef} className={"inline"} />
      <p className={"inline"}>%</p>
    </>
  );
}

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 mx-[15px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0, // Fade out opacity on exit
        transition: { ease: [0.16, 1, 0.3, 1], duration: 2.4 },
        filter: "blur(10px)", // Add blur on exit
      }}
      transition={{
        duration: 2.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="max-w-[1280px] w-full flex flex-col relative"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.8, // Scale down on exit
          opacity: 0, // Fade out opacity on exit
          transition: { ease: [0.16, 1, 0.3, 1], duration: 2.4 },
          filter: "blur(10px)", // Add blur on exit
        }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src="/banner/Preloder.gif"
          alt="preloader"
          className={"absolute z-[50]"}
        />
        <h2
          className={
            "whitespace-nowrap text-[20px] md:text-[24px] font-[300] leading-[120%] tracking-[-0.72px] bg-gradient-to-b from-[#2A5FDD] to-[#77A9E8] bg-clip-text text-transparent font-nb absolute z-[100] top-[75%] md:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        >
          Loading Intelligence...
        </h2>

        <img
          src="/banner/squares_gifs/Preloder-back.gif"
          alt=""
          className={"relative z-[-1] left-0 object-cover w-full h-full"}
        />
      </motion.div>

      <motion.div
        className={
          "max-w-[1280px] flex justify-between w-full absolute bottom-[32px] md:bottom-[80px]"
        }
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.8, // Scale down on exit
          opacity: 0, // Fade out opacity on exit
          transition: { ease: [0.16, 1, 0.3, 1], duration: 2.4 },
          filter: "blur(10px)", // Add blur on exit
        }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Display the animated percentage text */}
        <h2
          className={
            "text-[16px] md:text-[32px] font-[300] leading-[125%] md:leading-[90%] tracking-[-0.48px] md:tracking-[-1px] text-[#77A9E8] font-nb"
          }
        >
          AI loading
          <LoadingDots />
        </h2>
        <h2
          className={
            "text-[16px] md:text-[32px] font-[300] leading-[125%] md:leading-[90%] tracking-[-0.48px] md:tracking-[-1px] text-[#77A9E8] font-nb"
          }
        >
          <Counter from={0} to={100} />
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
