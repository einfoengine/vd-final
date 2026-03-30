"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, Target, Zap, Cpu, Globe } from 'lucide-react';
import { FaFacebook, FaYoutube, FaLinkedin, FaGoogle, FaXTwitter } from 'react-icons/fa6';

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
    // PROMINENT: Sharp, in-focus, clear brand icons
    { Icon: FaGoogle, color: "text-blue-500", delay: 0.2, size: 38, depthClass: "scale-100 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" },
    { Icon: FaLinkedin, color: "text-blue-700", delay: 2, size: 36, depthClass: "scale-100 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" },
    { Icon: FaFacebook, color: "text-blue-600", delay: 0, size: 40, depthClass: "scale-100 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" },
    { Icon: FaYoutube, color: "text-red-500", delay: 0.5, size: 42, depthClass: "scale-100 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" },
    { Icon: FaXTwitter, color: "text-zinc-800 dark:text-zinc-200", delay: 0.8, size: 38, depthClass: "scale-100 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" },

    // FAR: Smaller, visibly blurred, lower opacity, sitting behind
    { Icon: BarChart, color: "text-purple-500", delay: 1.5, size: 24, depthClass: "scale-75 blur-[3px] opacity-40 z-10" },
    { Icon: Globe, color: "text-sky-500", delay: 3.5, size: 26, depthClass: "scale-75 blur-[4px] opacity-50 z-10" },
    { Icon: Target, color: "text-orange-500", delay: 2.5, size: 24, depthClass: "scale-75 blur-[3px] opacity-40 z-10" },

    // CLOSE: Very large, heavily blurred, high opacity, sitting way in front
    { Icon: TrendingUp, color: "text-green-500", delay: 2.2, size: 60, depthClass: "scale-[1.6] blur-[6px] opacity-60 z-30" },
    { Icon: Zap, color: "text-yellow-500", delay: 1.1, size: 65, depthClass: "scale-[1.8] blur-[8px] opacity-50 z-30" },
    { Icon: Cpu, color: "text-rose-500", delay: 3.2, size: 70, depthClass: "scale-[2] blur-[10px] opacity-40 z-30" },
  ];

  const positions = [
    // PROMINENT
    { top: "15%", left: "15%" }, // Google
    { top: "10%", right: "30%" }, // Linkedin
    { bottom: "35%", left: "8%" }, // Facebook
    { bottom: "25%", right: "12%" }, // Youtube
    { top: "45%", left: "30%" }, // X

    // FAR
    { top: "35%", right: "8%" }, // BarChart
    { top: "5%", left: "40%" }, // Globe
    { bottom: "15%", left: "45%" }, // Target

    // CLOSE
    { top: "25%", left: "2%" }, // TrendingUp
    { bottom: "5%", right: "30%" }, // Zap
    { top: "5%", right: "5%" }, // Cpu
  ];

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none bg-zinc-950">
      
      {/* Dynamic Overlay when scrolled */}
      <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isScrolled ? 'bg-zinc-950/80' : 'bg-transparent'}`} />
      
      {/* Background mesh glow and lines - COOL COLORS (Blue, Cyan, Emerald) */}
      <div className={`absolute inset-0 transition-opacity duration-500 z-0 ${isScrolled ? 'opacity-30' : 'opacity-100'}`}>
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-h-[800px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-h-[800px] bg-cyan-500/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-h-[600px] bg-emerald-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        
        {/* Soft subtle vertical lines overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_1%,transparent_1%)] bg-[length:40px_100%] pointer-events-none" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />
      </div>

      {/* Orbits & Layer Effect */}
      <div className={`absolute inset-0 overflow-visible flex items-center justify-center pointer-events-none transition-opacity duration-500 z-0 ${isScrolled ? 'opacity-10' : 'opacity-60'}`}>
        {/* Outer Orbit */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] w-[120vw] h-[120vw] max-w-[1600px] max-h-[1600px] rounded-[100%] border-[1px] border-blue-500/20 pointer-events-none"
        />
        {/* Middle Elliptical Orbit */}
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] w-[100vw] h-[70vw] max-w-[1400px] max-h-[900px] rounded-[100%] border-[2px] border-emerald-500/15 pointer-events-none shadow-[inset_0_0_40px_rgba(16,185,129,0.05)]"
        />
        {/* Inner Elliptical Orbit */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] w-[80vw] h-[100vw] max-w-[1100px] max-h-[1400px] rounded-[100%] border-[1px] border-cyan-500/20 pointer-events-none"
        />
        {/* Centered Circular Orbit */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] w-[60vw] h-[60vw] max-[800px] rounded-full border border-dashed border-blue-400/20 pointer-events-none"
        />
        
        {/* White bottom gradient fade so it seamlessly touches the next section */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />
      </div>

      {/* Floating Icons with DEPTH OF FIELD */}
      <div className="absolute inset-0 pointer-events-none delay-300 z-20">
        {floatingIcons.map((item, i) => {
          const { Icon, color, delay, size, depthClass } = item;
          const pos = positions[i];
          return (
            <motion.div
              key={i}
              className={`absolute ${color}`}
              style={pos}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              <div 
                className={`backdrop-blur-xl p-4 rounded-2xl border transition-all duration-500 will-change-transform flex items-center justify-center ${
                  isScrolled 
                    ? 'bg-white/5 dark:bg-white/10 border-white/10 shadow-none' 
                    : 'bg-white/30 dark:bg-black/30 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                } ${depthClass}`}
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
