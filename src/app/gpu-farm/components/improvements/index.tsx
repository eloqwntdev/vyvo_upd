import Image from "next/image";
import { motion } from "framer-motion";

const Improvements = () => {
  return (
    <section className="bg-black py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full">
        <motion.h2
          className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-tight lg:leading-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.4px] text-center mb-8 sm:mb-12 md:mb-[60px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          How GPU Farms Enhance VAI OS
        </motion.h2>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="w-full h-auto aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={"/DEFAULT/card3.webp"}
                width={630}
                height={450}
                alt="GPU Farms and VAI OS integration visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 max-w-[476px] mx-auto lg:mx-0">
              <motion.div
                className="flex items-start gap-4 sm:gap-6 md:gap-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <div className="size-10 sm:size-12 md:size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
                  <Image
                    src={"/gpu-farms-img/improvements-icons/icon1.svg"}
                    width={20}
                    height={20}
                    alt="Seamless AI Operations icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px] lg:tracking-[-0.7px]">
                    Seamless AI Operations
                  </h3>
                  <p className="text-white/60 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                    GPU farms provide the computing power needed to support VAI
                    OS's advanced features, ensuring smooth, real-time
                    interactions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 sm:gap-6 md:gap-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.1,
                }}
              >
                <div className="size-10 sm:size-12 md:size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
                  <Image
                    src={"/gpu-farms-img/improvements-icons/icon2.svg"}
                    width={20}
                    height={20}
                    alt="Data Security icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px] lg:tracking-[-0.7px]">
                    Data Security
                  </h3>
                  <p className="text-white/60 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                    By hosting on Vyvo's infrastructure, data remains private
                    and protected from external risks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 sm:gap-6 md:gap-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.2,
                }}
              >
                <div className="size-10 sm:size-12 md:size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
                  <Image
                    src={"/gpu-farms-img/improvements-icons/icon3.svg"}
                    width={20}
                    height={20}
                    alt="Reliable Performance icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-white font-nb text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight lg:leading-[28px] tracking-[-0.5px] lg:tracking-[-0.7px]">
                    Reliable Performance
                  </h3>
                  <p className="text-white/60 font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
                    With distributed servers, users worldwide experience
                    consistent, high-quality AI support.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Improvements;
