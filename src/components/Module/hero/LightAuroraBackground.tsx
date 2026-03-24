"use client";

import { motion } from "framer-motion";
import React from "react";

export const LightAuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#f8f9fa]" /> {/* Light Base */}
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-60 filter blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(200,190,250,1) 100%)" }}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-60 filter blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(148,235,235,1) 0%, rgba(181,213,255,1) 100%)" }}
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full opacity-50 filter blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(255,219,164,1) 0%, rgba(255,190,220,1) 100%)" }}
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] rounded-full opacity-50 filter blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(210,190,255,1) 0%, rgba(190,240,255,1) 100%)" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Glass Overlay to soften everything seamlessly */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[40px]" />
    </div>
  );
};
