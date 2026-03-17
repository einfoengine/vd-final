"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fef9ef]">
      {/* Blob 1 - Theme Color (Gold) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#fdb400]/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blob 2 - Secondary Color (Lime) */}
      <motion.div
        className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#c7f664]/20 blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Blob 3 - Theme Color Light (Yellow) */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#ffd700]/15 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Blob 4 - Subtle White/Smoke for depth */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-white/40 blur-[80px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
