"use client";
import { useInView, useSpring, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedCounter = ({
  value,
  className,
}: {
  value: number;
  className: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    duration: 2000,
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  const displayValue = useTransform(springValue, (current) => {
    return current.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
