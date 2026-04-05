"use client";

import { useEffect, useRef, useState } from "react";

export function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4; // adjust default volume
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Hari_Guru_Dhun.mp3"
        autoPlay
        loop
      />

      {/* Floating Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 text-sm md:text-base bg-primary text-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg z-[60] hover:scale-105 transition-transform"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </>
  );
}