import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import ReactDOM from "react-dom";
import Modal from "@/app/components/banner/dynamic-content-section/stages/audio/modal/Modal";
import useStageStore from "@/store/useStageStore";

const TextModalButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const isModalOpen = useStageStore((state) => state.isModalOpen);
  const setIsModalOpen = useStageStore((state) => state.setIsModalOpen);

  const handleClick = () => {
    // Trigger scaling effect on click
    setIsClicked(true);

    // Open the modal when the button is clicked
    setIsModalOpen(!isModalOpen);

    // Reset the scaling after the animation duration (500ms here)
    setTimeout(() => {
      setIsClicked(false);
    }, 600); // Match this duration to your scaling transition time
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: { delay: 0, duration: 0.6 },
        }} // Exit animation
        transition={{
          duration: 1.8,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        <button
          onClick={handleClick}
          type="button"
          className={clsx(
            "flex items-center justify-center relative z-10",
            "px-[12px] md:px-[32px] py-[12px] md:py-[18px] bg-[rgba(119,169,232,0.16)]",
            `rounded-[16px]  backdrop-blur-[10px] main-shadow w-full transition-all duration-700`
          )}
          style={{ scale: isClicked ? 0.93 : 1 }} // Apply scale when clicked
        >
          <AnimatePresence mode="wait" initial={false}>
            {isModalOpen ? (
              <motion.img
                key="closeIcon"
                src="/banner/stages/audio/close.svg"
                alt="close icon"
                className="size-[16px] md:size-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="textIcon"
                src="/banner/stages/audio/text.svg"
                alt="text icon"
                className="size-[16px] md:size-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </button>
        <div className="glow-effect"></div>
      </motion.div>

      {/* Check if portalRootRef is available before rendering the portal */}
      <AnimatePresence>{isModalOpen && <Modal />}</AnimatePresence>
    </>
  );
};

export default TextModalButton;
