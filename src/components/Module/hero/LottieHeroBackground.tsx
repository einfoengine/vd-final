"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Youtube, Linkedin, TrendingUp, BarChart, Target, Zap } from 'lucide-react';

export const LottieHeroBackground = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatingIcons = [
    { Icon: Facebook, color: "text-blue-600", delay: 0, size: 36 },
    { Icon: Youtube, color: "text-red-500", delay: 1, size: 40 },
    { Icon: Linkedin, color: "text-blue-700", delay: 2, size: 32 },
    { Icon: TrendingUp, color: "text-green-500", delay: 0.5, size: 44 },
    { Icon: BarChart, color: "text-purple-500", delay: 1.5, size: 38 },
    { Icon: Target, color: "text-orange-500", delay: 2.5, size: 34 },
    { Icon: Zap, color: "text-yellow-500", delay: 0.8, size: 42 },
  ];

  const positions = [
    { top: "15%", left: "10%" },
    { top: "25%", right: "12%" },
    { bottom: "25%", left: "15%" },
    { bottom: "20%", right: "15%" },
    { top: "8%", right: "35%" },
    { bottom: "12%", left: "35%" },
    { top: "45%", left: "5%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none bg-[#fffdfa] dark:bg-black/90">
      
      {/* Dynamic Overlay when scrolled */}
      <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isScrolled ? 'bg-black' : 'bg-transparent'}`} />
      
      {/* Background mesh glow and lines - WARM COLORS (Orange, Red, Yellow) */}
      <div className={`absolute inset-0 transition-opacity duration-500 z-0 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-h-[800px] bg-red-400/20 dark:bg-red-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-h-[800px] bg-orange-400/30 dark:bg-orange-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-h-[600px] bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        
        {/* Soft subtle vertical lines overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,1)_1%,transparent_1%)] bg-[length:40px_100%] pointer-events-none" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#fffdfa] dark:via-black/50 dark:to-background pointer-events-none" />
      </div>

      {/* Orbits & Layer Effect */}
      <div className={`absolute inset-0 overflow-visible flex items-center justify-center pointer-events-none transition-opacity duration-500 z-0 ${isScrolled ? 'opacity-20' : 'opacity-70'}`}>
        {/* Outer Orbit */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] w-[120vw] h-[120vw] max-w-[1600px] max-h-[1600px] rounded-[100%] border-[1px] border-orange-300/60 dark:border-orange-800/40 pointer-events-none"
        />
        {/* Middle Elliptical Orbit */}
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] w-[100vw] h-[70vw] max-w-[1400px] max-h-[900px] rounded-[100%] border-[2px] border-red-300/40 dark:border-red-800/30 pointer-events-none shadow-[inset_0_0_40px_rgba(248,113,113,0.05)]"
        />
        {/* Inner Elliptical Orbit */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] w-[80vw] h-[100vw] max-w-[1100px] max-h-[1400px] rounded-[100%] border-[1px] border-yellow-300/60 dark:border-yellow-800/30 pointer-events-none"
        />
        {/* Centered Circular Orbit */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] w-[60vw] h-[60vw] max-[800px] rounded-full border border-dashed border-orange-500/40 dark:border-orange-700/40 pointer-events-none"
        />
        
        {/* White bottom gradient fade so it seamlessly touches the next section */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#fffdfa] dark:to-black pointer-events-none" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-90 delay-300 z-20">
        {floatingIcons.map((item, i) => {
          const { Icon, color, delay, size } = item;
          const pos = positions[i];
          return (
            <motion.div
              key={i}
              className={`absolute ${color}`}
              style={pos}
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              <div 
                className={`bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 dark:border-white/10 transition-colors duration-500 ${
                  isScrolled ? 'bg-black/80 border-white/10 shadow-none' : 'bg-white/90 border-black/5'
                }`}
              >
                <Icon size={size} strokeWidth={1.5} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
