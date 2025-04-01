"use client";
import SlashButton from "@/components/common/controllers/button/slash-button";
import React, { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

const Ring = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.5,
  });

  useEffect(() => {
    if (videoRef.current) {
      handleVideoPlayback(videoRef.current);
    }
  }, [isInView]);

  const handleVideoPlayback = (videoElement: HTMLVideoElement) => {
    if (isInView) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full">
      <video
        ref={(el) => {
          videoRef.current = el;
          if (el) handleVideoPlayback(el);
        }}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://eloqwntmain.ams3.cdn.digitaloceanspaces.com/Vyvo/Werables_Page/ring-clip-2-site_roDZ6C73.mp4"
        muted
        playsInline
      />

      {/* Centered Content Overlay */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <motion.div
          className="max-w-[650px] w-full flex flex-col gap-4 md:gap-8 text-center items-center justify-center rounded-lg text-white px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-3 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-white font-nb font-light text-[36px] md:text-[48px] lg:text-[72px] leading-[40px] md:leading-[52px] lg:leading-[76px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              BioSense Ring
            </motion.h1>
            <motion.p
              className="text-white font-nb text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] md:leading-[24px] lg:leading-[28px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              The New Shape of Wellness, from Vyvo
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SlashButton
              showIcon={false}
              label="Discover more"
              className="gap-3 md:gap-4 bg-[#94a7ed28] py-2 md:py-2.5 px-[16px] md:px-[18.5px] test"
              labelClassName="!tracking-[-0.2px] text-[14px] md:text-base"
              containerStyles={"flex items-center justify-center max-w-[140px]"}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ring;
