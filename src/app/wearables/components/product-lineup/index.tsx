import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const ProductLineup = () => {
  const titleRef = useRef(null);
  const ring1Ref = useRef(null);
  const watch2Ref = useRef(null);
  const band3Ref = useRef(null);

  const isTitleInView = useInView(titleRef, {
    once: true,
    amount: 0.2,
  });
  const isRingInView = useInView(ring1Ref, {
    once: true,
    amount: 0.1,
  });
  const isWatchInView = useInView(watch2Ref, {
    once: true,
    amount: 0.2,
  });
  const isBandInView = useInView(band3Ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section className="py-10 bg-white md:py-20 px-4 md:px-6 lg:px-8 flex flex-col gap-6 md:gap-10 items-center justify-center">
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-black font-nb font-light text-[36px] sm:text-[42px] md:text-[48px] tracking-[-1.4px] leading-[1.2] md:leading-[56px] max-w-[637px] text-center"
      >
        <span className="banner-gradient-text">BioSense:</span> Wearable
        Wellness, Anytime, Anywhere
      </motion.h2>
      <div className="max-w-[1180px] w-full flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-8 justify-between">
        <motion.div
          ref={ring1Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isRingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 md:gap-[111px] justify-end items-center"
        >
          <Link href="/ring">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isRingInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden"
            >
              <Image
                src={"/wearables-img/lineup/biosense-ring.webp"}
                alt={"BioSense Ring"}
                width={206}
                height={206}
                className="w-[160px] md:w-[180px] lg:w-[206px] h-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </Link>
          <Link href="/ring">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isRingInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-black font-nb font-light text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] md:leading-[48px]"
            >
              BioSense Ring
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          ref={watch2Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isWatchInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6 md:gap-10 justify-between items-center"
        >
          <Link href="/watch">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isWatchInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden"
            >
              <Image
                src={"/wearables-img/lineup/biosense-watch.webp"}
                alt={"BioSense Watch"}
                width={308}
                height={337}
                className="w-[240px] md:w-[280px] lg:w-[308px] h-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </Link>
          <Link href="/watch">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isWatchInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-black font-nb font-light text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] md:leading-[48px]"
            >
              BioSense Watch
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          ref={band3Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isBandInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col gap-6 md:gap-10 justify-between items-center"
        >
          <Link href="/band">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isBandInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="overflow-hidden"
            >
              <Image
                src={"/wearables-img/lineup/biosense-band.webp"}
                alt={"BioSense Band"}
                width={289}
                height={289}
                className="w-[220px] md:w-[260px] lg:w-[289px] h-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </Link>
          <Link href="/band">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isBandInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-black font-nb font-light text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] md:leading-[48px]"
            >
              BioSense Band
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductLineup;
