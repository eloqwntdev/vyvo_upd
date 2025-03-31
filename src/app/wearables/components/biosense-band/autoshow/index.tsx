"use client";
import React, { useState, useEffect } from "react";
import Card1 from "./card1";
import { motion, AnimatePresence } from "framer-motion";
import { cardData } from "./cardData";

const AutoShowBlock = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = cardData[currentCardIndex];

  const renderContent = () => {
    if (currentCardIndex === 0) {
      const contentItems =
        isMobile && currentCard.contentMobile
          ? currentCard.contentMobile
          : currentCard.content;

      return contentItems.map((item, index) => (
        <motion.img
          key={`${currentCardIndex}-${index}`}
          src={item.src}
          className={`${item.className} `}
          alt={item.alt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.15,
          }}
        />
      ));
    } else {
      return (
        <motion.div
          className="w-[350px] absolute top-0 right-[-22%] sm:right-0 h-full scale-75 sm:scale-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {(isMobile && currentCard.contentMobile
            ? currentCard.contentMobile
            : currentCard.content
          ).map((item, index) => (
            <motion.img
              key={`${currentCardIndex}-${index}`}
              src={item.src}
              className={`${item.className} `}
              alt={item.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            />
          ))}
        </motion.div>
      );
    }
  };

  return (
    <div>
      <Card1
        mainImage={currentCard.mainImage}
        width={currentCard.width}
        height={currentCard.height}
        currentIndex={currentCardIndex}
        totalSlides={cardData.length}
      >
        <AnimatePresence mode="wait" key={currentCardIndex}>
          {renderContent()}
        </AnimatePresence>
      </Card1>
    </div>
  );
};

export default AutoShowBlock;
