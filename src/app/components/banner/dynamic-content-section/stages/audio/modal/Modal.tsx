import React, { useEffect } from "react";
import clsx from "clsx";
import useStageStore from "@/store/useStageStore";
import { AnimatePresence, motion } from "framer-motion";

const TEXT =
  "To improve your sleep, try establishing a consistent bedtime routine by going to bed and waking up at the same time every day, even on weekends. Avoid caffeine or heavy meals close to bedtime, and limit screen time at least an hour before sleep. Incorporating relaxation techniques like deep breathing or light stretching can also help calm your mind and prepare your body for restful sleep.";

const Modal = () => {
  const setCurrentStage = useStageStore((state) => state.setCurrentStage);
  const setIsModalOpen = useStageStore((state) => state.setIsModalOpen);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={clsx(
        "fixed inset-0 z-[50] flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      )}
    >
      <div
        className={clsx(
          "relative flex flex-col justify-center items-center",
          "bg-black rounded-[20px] w-[288px] md:w-[413px] p-[16px] md:p-[24px] border border-[#94A8ED]"
        )}
        style={{
          boxShadow:
            "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
        }}
      >
        {/* Header with logo and close button */}
        <div className="flex justify-between w-full">
          <img src="/banner/stages/audio/logo.svg" alt="logo" />
          <img
            src="/banner/stages/audio/close_modal.svg"
            alt="close_modal"
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Modal Text */}
        <p
          className={clsx(
            "text-[14px] md:text-[20px] font-[300] leading-[128%] md:leading-[120%]",
            "tracking-[0.14px] md:tracking-[-0.2px] font-nb text-white mt-[23px] md:mt-[40px]"
          )}
        >
          {TEXT}
        </p>

        {/* Button */}
        <div className="relative mt-[24px] md:mt-[70px] w-full">
          <button
            onClick={() => {
              setIsModalOpen(false);
              setCurrentStage("submit");
            }}
            className={clsx(
              "text-[16px] md:text-[20px] font-[400] leading-[112%] md:leading-[90%]",
              "tracking-[-0.2px] font-nb text-white w-full hover:!bg-[rgba(119,169,232,0.16)]",
              "rounded-[16px] bg-[rgba(119,169,232,0.16)] backdrop-blur-[10px] px-[30px] py-[11px] md:py-[19px]",
              "transition-all relative z-[10]"
            )}
            style={{
              boxShadow:
                "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
            }}
          >
            Ask again
          </button>
          <div className="glow-effect"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
