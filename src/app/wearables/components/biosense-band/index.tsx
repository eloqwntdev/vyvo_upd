import Image from "next/image";
import Link from "next/link";
import AutoShowBlock from "./autoshow";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BiosenseBand = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const listRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isListInView = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-0 flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-8 md:gap-0">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -30 }}
          animate={
            isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-full md:max-w-[630px] w-full flex flex-col gap-5"
        >
          <AutoShowBlock />
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full sm:w-auto overflow-hidden rounded-[24px]"
            >
              <Image
                src="/wearables-img/band/image1.webp"
                width={305}
                height={220}
                alt=""
                className="w-full h-auto sm:w-auto sm:h-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-auto mt-5 sm:mt-0 overflow-hidden rounded-[24px]"
            >
              <Image
                src="/wearables-img/band/image2.webp"
                width={305}
                height={220}
                alt=""
                className="w-full h-auto sm:w-auto sm:h-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="max-w-full md:max-w-[480px] w-full flex items-start flex-col gap-8">
          <div className="flex flex-col gap-6">
            <motion.h2
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="font-nb font-light text-[36px] sm:text-[48px] md:text-[56px] leading-[1.15] md:leading-[64px] tracking-[-1.7px] banner-gradient-text"
            >
              BioSense Band
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black"
            >
              Our award-winning BioSense Band combines sleek design with
              powerful innovation, featuring a Clinical-Grade fingertip sensor
              to track metrics like body composition, hydration, and more
            </motion.p>

            <motion.ul ref={listRef} className="flex flex-col gap-2">
              {[
                "BP + SPO2 + APG",
                "Bioelectrical Impedance Analysis",
                "Electrocardiogram Measurement",
                "Continuous Monitoring for Atrial Fibrillation (AFib)",
                "Continuous Monitoring of Other Key Health Metrics",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isListInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isListInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="size-2 rounded-full bg-black"
                  ></motion.div>
                  <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="relative z-10 flex items-start justify-start max-w-[140px] w-full">
            <button className="text-black relative z-50 cursor-pointer hover:bg-[#94a7ed28] font-nb text-[16px] cross-btn-shadow leading-[20px] tracking-[-0.5px] py-2.5 max-w-[140px] w-full rounded-2xl bg-[#77A9E829] flex items-center justify-center">
              Learn More
            </button>
            <div className="glow-effect transition-all duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiosenseBand;
