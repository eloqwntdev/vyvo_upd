import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import TextModalButton from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/text-modal-button/TextModalButton";
import AudioPlayer from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/audio-player/AudioPlayer";

const AudioPlayerBlock = () => {
  return (
    <div className={"flex gap-[8px] md:gap-[15px] relative"}>
      <AudioPlayer />
      <TextModalButton />
    </div>
  );
};

export default AudioPlayerBlock;
