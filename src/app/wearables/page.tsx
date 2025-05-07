"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const [draggingBar, setDraggingBar] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0);

  const [draggingContent, setDraggingContent] = useState(false);
  const [contentDragStartY, setContentDragStartY] = useState(0);
  const [contentDragStartScrollTop, setContentDragStartScrollTop] = useState(0);

  // Update bar position and height
  const BAR_MARGIN = 32; // px, adjust as needed

  const updateBar = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollHeight <= clientHeight) {
      setBarHeight(0);
      setBarTop(0);
      return;
    }
    // Bar height is 33% of the available track height (with margin)
    const availableTrackHeight = clientHeight - 2 * BAR_MARGIN;
    const height = availableTrackHeight * 0.33;
    // Bar top is BAR_MARGIN + proportional position within the track
    const maxBarTop = availableTrackHeight - height;
    const maxScrollTop = scrollHeight - clientHeight;
    // Ensure bar reaches the very bottom when fully scrolled
    let top = BAR_MARGIN;
    if (maxScrollTop > 0) {
      top = BAR_MARGIN + (scrollTop / maxScrollTop) * maxBarTop;
    }
    // Clamp to ensure bar never exceeds the track
    top = Math.min(top, BAR_MARGIN + maxBarTop);
    setBarHeight(height);
    setBarTop(top);
  }, []);

  // Attach scroll and resize listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    updateBar();
    container.addEventListener("scroll", updateBar);
    // ResizeObserver for content size changes
    const resizeObserver = new (window as any).ResizeObserver(updateBar);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("scroll", updateBar);
      resizeObserver.disconnect();
    };
  }, [updateBar, isOpen]);

  // Handle bar drag
  useEffect(() => {
    if (!draggingBar) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const container = containerRef.current;
      if (!container) return;
      // Prevent scrolling the page on touch
      if ("touches" in e) e.preventDefault();

      const clientY =
        (e as TouchEvent).touches?.[0]?.clientY ?? (e as MouseEvent).clientY;
      const deltaY = clientY - dragStartY;
      const { scrollHeight, clientHeight } = container;
      // Use the same BAR_MARGIN and availableTrackHeight as updateBar
      const BAR_MARGIN = 32;
      const availableTrackHeight = clientHeight - 2 * BAR_MARGIN;
      const height = availableTrackHeight * 0.33;
      const maxBarTop = availableTrackHeight - height;
      const maxScrollTop = scrollHeight - clientHeight;

      // Calculate new barTop within the available track
      let newBarTop = Math.min(
        Math.max(barTop + deltaY, BAR_MARGIN),
        BAR_MARGIN + maxBarTop
      );
      // Convert barTop to scrollTop
      let relativeBarTop = newBarTop - BAR_MARGIN;
      let newScrollTop =
        maxBarTop > 0 ? (relativeBarTop / maxBarTop) * maxScrollTop : 0;
      container.scrollTop = Math.min(Math.max(newScrollTop, 0), maxScrollTop);
    };

    const onUp = () => {
      setDraggingBar(false);
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);

    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
      document.body.style.userSelect = "";
    };
    // eslint-disable-next-line
  }, [draggingBar, dragStartY, barHeight, barTop]);

  // Handle content drag (grab to scroll)
  useEffect(() => {
    if (!draggingContent) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const clientY =
        (e as TouchEvent).touches?.[0]?.clientY ?? (e as MouseEvent).clientY;
      const deltaY = clientY - contentDragStartY;
      const newScrollTop = contentDragStartScrollTop - deltaY;
      container.scrollTop = Math.max(
        0,
        Math.min(newScrollTop, container.scrollHeight - container.clientHeight)
      );
    };

    const onUp = () => {
      setDraggingContent(false);
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);

    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
      document.body.style.userSelect = "";
    };
    // eslint-disable-next-line
  }, [draggingContent, contentDragStartY, contentDragStartScrollTop]);

  // Prevent text selection while dragging
  useEffect(() => {
    if (draggingBar || draggingContent) {
      document.body.style.cursor = "grabbing";
    } else {
      document.body.style.cursor = "";
    }
  }, [draggingBar, draggingContent]);

  // Modal open/close: prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isOpen]);

  // Bar drag start
  const handleBarDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const clientY =
      (e as React.TouchEvent).touches?.[0]?.clientY ??
      (e as React.MouseEvent).clientY;
    setDragStartY(clientY);
    setDraggingBar(true);
  };

  // Content drag start
  const handleContentDown = (e: React.MouseEvent | React.TouchEvent) => {
    // Only left mouse button or touch
    if (
      (e as React.MouseEvent).button !== undefined &&
      (e as React.MouseEvent).button !== 0
    )
      return;
    e.stopPropagation();
    e.preventDefault();
    const clientY =
      (e as React.TouchEvent).touches?.[0]?.clientY ??
      (e as React.MouseEvent).clientY;
    const container = containerRef.current;
    if (!container) return;
    setContentDragStartY(clientY);
    setContentDragStartScrollTop(container.scrollTop);
    setDraggingContent(true);
  };

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
            className="relative h-[80vh] w-[90%] sm:w-[85%] md:w-[80%] max-w-[630px] backdrop-blur-[500px] bg-[#000000CC] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] modal-shadow"
          >
            {/* Custom Scrollbar */}
            {barHeight > 0 && (
              <div
                ref={barRef}
                className="w-[5px] bg-white rounded-full absolute right-2 sm:right-3 md:right-4 cursor-pointer select-none"
                style={{
                  top: barTop,
                  height: barHeight,
                  transition: draggingBar ? "none" : "top 0.1s, height 0.1s",
                  zIndex: 10,
                  opacity: 0.9,
                  touchAction: "none",
                }}
                onMouseDown={handleBarDown}
                onTouchStart={handleBarDown}
              ></div>
            )}
            <div
              ref={containerRef}
              className="h-full w-full p-4 sm:p-6 md:p-8 overflow-y-auto hide-scrollbar"
              style={{
                position: "relative",
                cursor: draggingContent ? "grabbing" : "grab",
                userSelect: "none",
              }}
              onMouseDown={handleContentDown}
              onTouchStart={handleContentDown}
            >
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 h-fit">
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
                    loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={3000}
                    height={2000}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1 min-h-0">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-nb">
                    {title}
                  </h3>
                  <div className="text-white font-nb font-light text-sm sm:text-base md:text-lg leading-relaxed h-fit whitespace-pre-wrap flex-1 min-h-0">
                    {content}
                  </div>
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
