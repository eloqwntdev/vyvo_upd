"use client";
import React, { useState } from "react";
import WearablesBanner from "./components/banner";
import Ring from "./components/banner/ring";
import Slider from "./components/slider";
import BiosenseBand from "./components/biosense-band";
import VyvoResearchDevelopment from "./components/vyvo-research-development";
import VyvoSmart from "./components/vyvo-smart";
import ProductLineup from "./components/product-lineup";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  imageSrc: string;
}

const Modal = ({ isOpen, onClose, title, content, imageSrc }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-[90%] sm:w-[85%] md:w-[80%] max-w-[630px] backdrop-blur-[500px] bg-[#000000CC] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] p-4 sm:p-6 md:p-8 modal-shadow"
          >
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {/* Title and Close Button */}
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-nb">
                  {title}
                </h3>

                <button
                  onClick={onClose}
                  className="text-white hover:opacity-80 p-1"
                  aria-label="Close modal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      d="M15 1L1 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L15 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-nb">
                  {title}
                </h3>
                <div className="text-white font-nb font-light text-sm sm:text-base md:text-lg leading-relaxed">
                  {content}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const WearablesPage = () => {
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    imageSrc: string;
  } | null>(null);

  return (
    <>
      <div className="relative overflow-hidden">
        <WearablesBanner />
        <Ring />
        <Slider onCardClick={setSelectedCard} />
        <BiosenseBand />
        <VyvoResearchDevelopment />
        <VyvoSmart />
        <ProductLineup />
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title || ""}
        content={selectedCard?.description || ""}
        imageSrc={selectedCard?.imageSrc || ""}
      />
    </>
  );
};

export default WearablesPage;
