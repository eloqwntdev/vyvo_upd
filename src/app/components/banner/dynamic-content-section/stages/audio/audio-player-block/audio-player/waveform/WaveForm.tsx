import React, { useMemo, useState, useRef, useEffect } from "react";
import clsx from "clsx";

// Add WebKit Audio Context type declaration
declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

interface WaveformProps {
  isPlaying: boolean;
  progress: number; // Percentage of audio progress (0 to 1)
  audioRef: React.RefObject<HTMLAudioElement>; // Reference to the audio element
}

const WaveForm = ({ isPlaying, progress, audioRef }: WaveformProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [volumeLevels, setVolumeLevels] = useState<number[]>([]);
  const [heightMultiplier, setHeightMultiplier] = useState(1.5); // Default height multiplier
  const [totalBars, setTotalBars] = useState(65); // Default total bars

  useEffect(() => {
    // Function to adjust the height multiplier based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHeightMultiplier(1); // Use *1 if screen width is less than 768px
        setTotalBars(55);
      } else {
        setHeightMultiplier(1.5); // Default multiplier
        setTotalBars(65);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const analyzeAudio = async () => {
      if (!audioRef.current?.src) return;

      try {
        // Create audio context
        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContextClass();

        // Fetch the audio file
        const response = await fetch(audioRef.current.src);
        const arrayBuffer = await response.arrayBuffer();

        // Decode the audio data
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Get the raw audio data
        const channelData = audioBuffer.getChannelData(0);

        // Calculate the samples per bar
        const samplesPerBar = Math.floor(channelData.length / totalBars);

        // Process the audio data
        const newVolumeLevels = [];
        for (let i = 0; i < totalBars; i++) {
          let sum = 0;
          // Calculate the average amplitude for each bar
          for (let j = 0; j < samplesPerBar; j++) {
            const index = i * samplesPerBar + j;
            if (index < channelData.length) {
              sum += Math.abs(channelData[index]);
            }
          }
          const average = sum / samplesPerBar;
          // Scale the value to a reasonable height (between 3 and 24 pixels)
          const scaledHeight = Math.max(3, Math.min(24, average * 100));
          newVolumeLevels.push(scaledHeight);
        }

        setVolumeLevels(newVolumeLevels);
      } catch (error) {
        console.error("Error analyzing audio:", error);
        // Fallback to random values if analysis fails
        setVolumeLevels(
          Array.from(
            { length: totalBars },
            () => Math.floor(Math.random() * 6) + 3
          )
        );
      }
    };

    analyzeAudio();
  }, [audioRef.current?.src]);

  // // Generate initial static heights to simulate volume levels for each bar
  // const volumeLevels = useMemo(
  //   () =>
  //     Array.from(
  //       { length: totalBars },
  //       () => Math.floor(Math.random() * 6) + 3 // Random height for each bar (between 3 and 9)
  //     ),
  //   []
  // );

  // Update audio's current time based on the progress
  const updateAudioTime = (position: number) => {
    if (audioRef.current && waveformRef.current) {
      const progressPercentage = position / waveformRef.current.offsetWidth;
      audioRef.current.currentTime =
        audioRef.current.duration * progressPercentage;
    }
  };

  // Handle the start of a drag (mouse down)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (isDragging && waveformRef.current) {
        const offsetX = moveEvent.clientX - startX;
        const newProgress = Math.min(
          Math.max(
            0,
            (offsetX + waveformRef.current.getBoundingClientRect().left) /
              waveformRef.current.offsetWidth
          ),
          1
        );
        updateAudioTime(
          offsetX + waveformRef.current.getBoundingClientRect().left
        );
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (typeof document !== "undefined") {
  document.removeEventListener("mousemove", onMouseMove);
}
      if (typeof document !== "undefined") {
  document.removeEventListener("mouseup", handleMouseUp);
}
    };

    if (typeof document !== "undefined") {
  document.addEventListener("mousemove", onMouseMove);
}
    if (typeof document !== "undefined") {
  document.addEventListener("mouseup", handleMouseUp);
}
  };

  // Handle the click event for directly jumping to a location
  const handleWaveformClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      const waveform = e.currentTarget;
      const clickPosition = e.clientX - waveform.getBoundingClientRect().left;
      updateAudioTime(clickPosition);
    }
  };

  return (
    <div
      ref={waveformRef}
      className="flex-1 h-12 flex items-end gap-[1px] overflow-hidden cursor-pointer"
      onClick={handleWaveformClick} // Handle click on waveform
      onMouseDown={handleMouseDown} // Handle mouse down to start dragging
    >
      {volumeLevels.map((height, index) => {
        // Calculate the progress of this specific bar
        const barProgress = (index + 0.01) / totalBars;

        // Set opacity based on whether the bar is "filled" (progress reached)
        const opacity = barProgress <= progress ? 1 : 0.3; // Fully visible if track progress is past this bar

        return (
          <div
            key={index}
            className={clsx(
              "bg-gradient-to-t from-[#94A8ED] to-[#FFFFFF] text-transparent",
              "w-[2px] rounded-full transition-all duration-300"
            )}
            style={{
              height: `${height * heightMultiplier}px`, // Static height for each bar
              opacity: opacity, // Change opacity based on progress
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default WaveForm;
