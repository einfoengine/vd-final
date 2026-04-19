"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  video?: string;
}

export default function HeroVideo({ video }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = soundOn; // Correct: muted = true when sound is OFF
    setSoundOn(!soundOn);
  };

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

   // Fixed dimensions - no longer changes with scroll.
  const containerWidth = isMdScreen ? "720px" : "90%";
  const containerHeight = "auto";

  return (
    <div
      onClick={handleToggleSound}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: containerWidth,
        aspectRatio: "16 / 9",
        height: containerHeight,
        margin: "0 auto",
        borderRadius: "1.5rem",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease-out",
      }}
    >
      {video && (
        <video
          ref={videoRef}
          src={video}
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-label="Hero video showcasing our work"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={handleTogglePlay}
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-all duration-300 group shadow-lg border border-white/10"
        style={{ cursor: "pointer" }}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

    </div>
  );
}
