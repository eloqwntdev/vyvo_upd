import { motion, AnimatePresence } from "framer-motion";

const Card1 = ({
  mainImage = "/wearables-img/band/watch1.webp",
  width = 498,
  height = 400,
  children,
  currentIndex = 0,
  totalSlides = 2,
}: {
  mainImage?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  currentIndex?: number;
  totalSlides?: number;
}) => {
  return (
    <div className="w-full min-h-[460px] rounded-3xl wearables-bg-card p-4 flex relative">
      <div className="gradient-border-wearables-bg-card before:!rounded-[24px] w-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={mainImage}
            src={mainImage}
            width={width}
            height={height}
            alt="Main product image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ width: width, height: height }}
            className={`sm:object- object-contain ${
              currentIndex === 1 ? "max-w-[113px] sm:max-w-full" : ""
            }`}
          />
        </AnimatePresence>

        <div className="absolute bottom-8 left-8 flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`size-2 rounded-full ${
                index === currentIndex ? "bg-[#77A9E8]" : "bg-[#77A9E880]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
};

export default Card1;
