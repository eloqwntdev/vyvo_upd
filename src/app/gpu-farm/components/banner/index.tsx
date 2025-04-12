import ScrollToSection from "@/components/common/animations/scroll-to-section";
import { motion } from "framer-motion";

const GPUBanner = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <section className="bg-black min-h-[600px] md:min-h-[700px] lg:h-[900px] w-full relative flex items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="absolute inset-0 z-[2]"
      >
        <img
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className="absolute z-[2] w-full h-full left-0 object-cover gpu-farm-clip-path"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.3,
        }}
        className="absolute inset-0 z-[1]"
      >
        <img
          src="/gpu-farms-img/banner.webp"
          alt="GPU Farms Banner Image"
          className="absolute w-full h-full top-0 right-0 z-[1] object-cover"
        />
      </motion.div>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-[509px] flex flex-col gap-4 sm:gap-6 pb-20 sm:pb-24 lg:pb-[167px]">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-nb font-light text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight sm:leading-[1.1] lg:leading-[76px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.2px] text-white"
          >
            Vyvo{" "}
            <motion.span
              className="banner-gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.4,
                },
              }}
            >
              GPU Farms
            </motion.span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-full max-w-[467px] font-nb font-light text-sm sm:text-[14px] md:text-[16px] leading-[1.4] sm:leading-[1.3] md:leading-[20px] tracking-[-0.3px] sm:tracking-[-0.5px] text-white"
          >
            Vyvo GPU Farms power the AI infrastructure behind VAI OS, delivering
            high-speed, secure, and scalable computing. Built to reduce reliance
            on third-party services, these farms ensure data privacy and optimal
            performance while supporting advanced AI features in real time.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="flex items-center justify-center mb-6 sm:mb-8 md:mb-[37px]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ScrollToSection id={"gpu-farms"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GPUBanner;
