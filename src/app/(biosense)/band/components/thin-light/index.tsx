"use client";

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
      className="min-h-fit flex items-center justify-center lg:pt-[200px] bg-black"
    >
      <div className="max-w-[1280px] py-0 md:py-24 w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 gap-10 lg:gap-0 tracking-[-0.5px]">
        {/* Left side with band image and floating items */}
        <div className="max-w-[530px] my-16 md:my-0 w-full flex items-center justify-center relative">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageAnimation}
          >
            <img
              src="/biosense-products/band/thin-band.png"
              alt="BioSense Band"
              width={1293}
              height={1155}
              className="w-[380px] sm:w-[480px] md:w-[500px]"
            />
          </motion.div>

          {/* Floating elements - appearing one by one with simple fade */}
          {/* Desktop */}
          <div className="lg:block hidden">
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src="/biosense-products/band/band-thick-desktop-top.png"
              className="absolute h-full lg:max-h-[107px] right-0 top-0"
              alt="Top Feature"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              src="/biosense-products/band/band-thick-desktop-middle.png"
              className="absolute h-full lg:max-h-[95px] right-0"
              alt="Middle Feature"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              src="/biosense-products/band/band-thick-desktop-bottom.png"
              className="absolute h-full lg:max-h-[123px] right-0 bottom-0"
              alt="Bottom Feature"
            />
          </div>
          {/* Mobile */}
          <div className="lg:hidden block">
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src="/biosense-products/band/band-thick-mobile-top.png"
              className="absolute h-full max-h-[100px] left-1/2 -translate-x-[80%] top-[-2rem] sm:max-h-[127px] sm:translate-x-0 sm:left-24 sm:top-[-2rem]"
              alt="Top Feature"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              src="/biosense-products/band/band-thick-mobile-middle.png"
              className="absolute h-full max-h-[100px] right-1/2 translate-x-[80%] top-24 sm:max-h-[123px] sm:translate-x-0 sm:right-20 sm:top-32"
              alt="Middle Feature"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              src="/biosense-products/band/band-thick-mobile-bottom.png"
              className="absolute h-full max-h-[100px] right-1/2 translate-x-[60%] bottom-0 sm:max-h-[132px] sm:translate-x-0 sm:right-28 sm:bottom-0"
              alt="Bottom Feature"
            />
          </div>
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

            {/* <SlashButton
              showIcon={false}
              label="Buy Now"
              className="!bg-[#77A9E829] hover:!bg-[#77A9E840] transition-colors !py-[12px] test !rounded-[16px] w-full !max-w-[140px]"
              labelClassName="!tracking-[-0.5px]"
              containerStyles="!w-auto"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThinLight;
