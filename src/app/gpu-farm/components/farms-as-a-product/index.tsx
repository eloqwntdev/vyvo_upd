"use client";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/12/data.json";
import Image from "next/image";
import { motion } from "framer-motion";

const FarmsAsAProduct = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/12/images/",
  };

  const { View } = useLottie(options);

  return (
    <section className="bg-[#050505] py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex relative flex-col items-center justify-center">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full hidden md:block"
      />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <motion.div
          className="max-w-[320px] sm:max-w-[450px] md:max-w-[584px] w-full mx-auto flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h2 className="text-white sm:text-center font-nb font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-tight lg:leading-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.4px]">
            GPU Farms as a Product
          </h2>
          <p className="text-white/80 sm:text-center font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
            Vyvo's GPU farms are not just a backbone for our AI
            ecosystem—they're also an opportunity for our community to invest in
            the future:
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8 relative">
          <motion.div
            className="w-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Image
              src={"/DEFAULT/card1.webp"}
              width={630}
              height={450}
              alt="GPU Farm product card 1"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <Image
              src={"/DEFAULT/card2.webp"}
              width={630}
              height={450}
              alt="GPU Farm product card 2"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmsAsAProduct;
