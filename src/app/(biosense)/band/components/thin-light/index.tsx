"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SlashButton from "@/components/common/controllers/button/slash-button";

const ThinLight = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center lg:py-[120px] bg-black"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 gap-10 lg:gap-0">
        {/* Left side with band image and floating items */}
        <div className="max-w-[530px] w-full flex items-center justify-center relative">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageAnimation}
          >
            <Image
              src="/biosense-products/band/thin-band.webp"
              alt="BioSense Band"
              width={325}
              height={411}
              className="w-[250px] sm:w-[280px] md:w-[325px]"
            />
          </motion.div>

          {/* Floating elements - appearing one by one with simple fade */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            src="/biosense-products/band/top-item.svg"
            className="absolute max-w-[200px] sm:block hidden sm:max-w-[240px] md:max-w-[287px] top-[-5%] right-[0%]"
            alt="Top Feature"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            src="/biosense-products/band/band-thick.webp"
            className="absolute max-w-[200px] sm:hidden block sm:max-w-[240px] md:max-w-[287px] top-[-13%] right-[32%]"
            alt="Top Feature"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            src="/biosense-products/band/middle-item.svg"
            className="absolute max-w-[220px] sm:max-w-[260px] md:max-w-[302px] top-[30%] right-[0%]"
            alt="Middle Feature"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            src="/biosense-products/band/bottom-item.svg"
            className="absolute max-w-[220px] sm:max-w-[260px] md:max-w-[302px] top-[72%] right-[2%]"
            alt="Bottom Feature"
          />
        </div>

        {/* Right side content */}
        <div className="max-w-[483px] w-full flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-4 items-start lg:gap-6">
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-white font-nb font-light text-[32px] leading-[36px] sm:text-[42px] sm:leading-[46px] md:text-[56px] md:leading-[60px]"
            >
              Thin. Light.
              <br className="hidden lg:block" />{" "}
              <span className="text-gradient">Powerful!</span>
            </motion.h2>

            {/* Feature list with bullet points */}
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerItems}
              className="flex flex-col gap-4 lg:gap-6 mt-2 lg:mt-4"
            >
              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px]">
                  What might be most remarkable about BioSense is that it's a
                  mere 2.5mm thick and a feather-light 22 grams and can still
                  house all those features.
                </span>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px]">
                  The liquid silicone band is hypoallergenic and features a
                  secure metal closure with real 18k gold plating.
                </span>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px]">
                  BioSense has a waterproof rating of IP68, the highest, which
                  means it's safe up to 50 meters.
                </span>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px]">
                  The battery lasts up to five days on a single charge, so don't
                  be afraid to use the wide variety of features as often as you
                  want.
                </span>
              </motion.li>
            </motion.ul>

            <SlashButton
              showIcon={false}
              label="Buy Now"
              className="!bg-[#77A9E829] hover:!bg-[#77A9E840] transition-colors !py-[12px] test !rounded-[16px] w-full !max-w-[140px]"
              labelClassName="!tracking-[-0.2px]"
              containerStyles="!w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThinLight;
