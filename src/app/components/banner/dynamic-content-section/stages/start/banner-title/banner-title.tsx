import { motion } from "framer-motion";

interface BannerTitleProps {
  words: string;
}

const BannerTitle = ({ words }: BannerTitleProps) => {
  let wordsArray = words.split(" ");

  return (
    <motion.h1
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 0 } }} // Exit animation
      className="text-[24px] md:text-[72px] font-[300] text-center leading-[28px] md:leading-[74px] tracking-[-0.72px] md:tracking-[-2.16px] bg-gradient-to-r text-white font-nb flex justify-center flex-wrap"
    >
      {wordsArray.map((word, i) => (
        <motion.span
          style={{
            marginRight: i === words.length - 1 ? "0" : "0.3em",
          }}
          initial={{ opacity: 0, y: 40, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.95,
            delay: i * 0.15,
          }}
          key={i}
          className="banner-gradient-text"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BannerTitle;
