"use client";

import { motion } from "framer-motion";
import React from "react";

export const FieryAuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none bg-black">
      {/* 
        To achieve the "3D Soft Wave" look, without WebGL, we animate SVG paths 
        with extreme blur factors. They swirl across the entire screen.
      */}
      <svg
        className="absolute w-full h-full opacity-80"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff1a1a" />
            <stop offset="50%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4500" />
            <stop offset="50%" stopColor="#ff0040" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave3" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#ff4500" />
            <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Back Wave (Red/Orange) */}
        <motion.path
          fill="url(#wave1)"
          animate={{
            d: [
              "M-200,-200 C400,0 600,800 1200,100 C1500,-200 1500,1500 -200,1500 Z",
              "M-200,-200 C300,200 800,500 1200,400 C1500,-200 1500,1500 -200,1500 Z",
              "M-200,-200 C600,-100 400,1000 1200,300 C1500,-200 1500,1500 -200,1500 Z",
              "M-200,-200 C400,0 600,800 1200,100 C1500,-200 1500,1500 -200,1500 Z",
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Middle Wave (Crimson/Orange) */}
        <motion.path
          fill="url(#wave2)"
          animate={{
            d: [
              "M1200,1200 C800,1000 300,200 -200,800 C-500,1200 -500,-200 1200,-200 Z",
              "M1200,1200 C700,700 400,500 -200,500 C-500,1200 -500,-200 1200,-200 Z",
              "M1200,1200 C900,1000 200,0 -200,900 C-500,1200 -500,-200 1200,-200 Z",
              "M1200,1200 C800,1000 300,200 -200,800 C-500,1200 -500,-200 1200,-200 Z",
            ]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Front Wave (Yellow/Orange) */}
        <motion.path
          fill="url(#wave3)"
          animate={{
            d: [
              "M-200,1200 C300,700 800,1300 1200,800 C1500,1500 -500,1500 -200,1200 Z",
              "M-200,1200 C200,900 600,1100 1200,600 C1500,1500 -500,1500 -200,1200 Z",
              "M-200,1200 C500,800 900,1200 1200,900 C1500,1500 -500,1500 -200,1200 Z",
              "M-200,1200 C300,700 800,1300 1200,800 C1500,1500 -500,1500 -200,1200 Z",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* The Heavy Glass Overlay fuses the shapes naturally into 3D-looking soft waves */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-black/10" />
    </div>
  );
};
