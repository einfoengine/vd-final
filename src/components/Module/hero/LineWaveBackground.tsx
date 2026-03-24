"use client";

import { motion } from "framer-motion";
import React from "react";

export const LineWaveBackground = () => {
  const lineCount = 10; // number of wavy lines
  
  const generateWave = (i: number, isGlow: boolean) => {
    // Varied animation duration for organic feeling
    const duration = 15 + (i % 5) * 2;
    
    // Spread the lines vertically
    const baseY = 250 + i * 50; 
    
    // Cycle through fiery gradients
    const colorId = `line-grad-${i % 3}`;
    
    // Define the dynamic movement bounds
    // The waves sway up and down by ~200px
    const path1 = `M-200,${baseY} C200,${baseY - 200} 800,${baseY + 200} 1200,${baseY}`;
    const path2 = `M-200,${baseY} C400,${baseY + 250} 700,${baseY - 150} 1200,${baseY}`;
    const path3 = `M-200,${baseY} C300,${baseY - 100} 900,${baseY + 250} 1200,${baseY}`;
    
    return (
      <motion.path
        key={`wave-${isGlow ? 'glow' : 'core'}-${i}`}
        fill="none"
        stroke={`url(#${colorId})`}
        strokeWidth={isGlow ? 12 : 2}
        className={isGlow ? "blur-[8px] opacity-70" : "opacity-90"}
        animate={{
          d: [path1, path2, path3, path1]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none bg-black">
      <svg
        className="absolute w-[120%] h-[150%] top-[-25%] left-[-10%]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-grad-0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0" />
            <stop offset="20%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ff4500" />
            <stop offset="80%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4500" stopOpacity="0" />
            <stop offset="20%" stopColor="#ff4500" />
            <stop offset="50%" stopColor="#ff8c00" />
            <stop offset="80%" stopColor="#ff4500" />
            <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8c00" stopOpacity="0" />
            <stop offset="20%" stopColor="#ff8c00" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="80%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Render Heavy Glow Lines behind */}
        {Array.from({ length: lineCount }).map((_, i) => generateWave(i, true))}
        
        {/* Render Thin Core Lines on top */}
        {Array.from({ length: lineCount }).map((_, i) => generateWave(i, false))}
        
      </svg>
      {/* Overlay vignette to darken edges and make the center pop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
};
