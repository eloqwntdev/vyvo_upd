import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const PlayPauseButton = ({ isPlaying, togglePlay }: PlayPauseButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Trigger scaling effect on click
    setIsClicked(true);
    togglePlay(); // Call the togglePlay function to toggle the audio state

    // Reset the scaling after the animation duration (500ms here)
    setTimeout(() => {
      setIsClicked(false);
    }, 300); // Match this duration to your scaling transition time
  };

  return (
    <motion.button
      style={{ scale: isClicked ? 0.95 : 1 }} // Apply scale when clicked
      onClick={handleClick}
      className={clsx(
        "flex items-center justify-center",
        "size-[32px] md:size-[48px] hover:bg-[rgba(119,169,232,0.16)] rounded-[10px] md:rounded-[16px] bg-[rgba(119,169,232,0.16)] main-shadow backdrop-blur-[10px] transition-all duration-[500]"
      )}
    >
      {isPlaying ? (
        <img
          src="/banner/stages/audio/pause_icon.svg"
          alt="pause_icon"
          className={"size-[12px] md:size-[18px]"}
        />
      ) : (
        <img
          src="/banner/stages/audio/play_icon.svg"
          alt="play_icon"
          className={"size-[12px] md:size-[15px]"}
        />
      )}
    </motion.button>
  );
};

export default PlayPauseButton;
