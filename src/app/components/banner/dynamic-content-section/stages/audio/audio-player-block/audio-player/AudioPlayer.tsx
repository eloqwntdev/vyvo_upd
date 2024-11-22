import React, { useState, useRef, useEffect } from "react";
import PlayPauseButton from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/audio-player/play-pause-button/PlayPauseButton";
import WaveForm from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/audio-player/waveform/WaveForm";
import Timer from "@/app/components/banner/dynamic-content-section/stages/audio/audio-player-block/audio-player/timer/Timer";
import { motion } from "framer-motion";

const MEDIA = "banner/stages/audio/mood.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Event listener for time updates
      const onTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      // Event listener for when the audio finishes (ended)
      const onAudioEnd = () => {
        setIsPlaying(false); // Set to false when track ends
        setCurrentTime(0); // Reset current time to 0
        setDuration(audio.duration); // Keep the duration the same
      };

      audio.addEventListener("timeupdate", onTimeUpdate);
      audio.addEventListener("ended", onAudioEnd); // Listen for 'ended' event

      // Cleanup event listeners when component unmounts
      return () => {
        audio.removeEventListener("timeupdate", onTimeUpdate);
        audio.removeEventListener("ended", onAudioEnd);
      };
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);

    // Check if audioRef.current is not null before calling methods on it
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  const progress = duration ? currentTime / duration : 0;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }} // Initial animation
      animate={{ scale: 1, opacity: 1 }} // Animation to full scale and opacity
      exit={{ scale: 0.8, opacity: 0, transition: { delay: 0, duration: 0.6 } }} // Exit animation
      transition={{
        delay: 0.5,
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Easing for smooth animation
      }}
      className="flex items-center gap-[4px] bg-[rgba(119,169,232,0.16)] p-[4px] rounded-[16px] main-shadow backdrop-blur-[10px]"
    >
      {/* Audio Element */}
      <audio ref={audioRef} src={MEDIA} preload="auto" />

      {/* Play/Pause Button */}
      <PlayPauseButton isPlaying={isPlaying} togglePlay={togglePlay} />

      {/* Waveform Visualization */}
      <div className="flex flex-col gap-[3px]">
        <WaveForm
          isPlaying={isPlaying}
          progress={progress}
          audioRef={audioRef}
        />
        <Timer currentTime={currentTime} />
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
