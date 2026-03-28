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

  // Provide initial positions scattered around the background
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
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none">
      <div className={`absolute inset-0 transition-colors duration-500 ${isScrolled ? 'bg-black' : 'bg-transparent'}`} />
      
      <div className="absolute inset-0 pointer-events-none opacity-60">
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
                className={`bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 transition-colors duration-500 ${
                  isScrolled ? 'bg-black/80 border-white/10' : 'bg-white/90 border-black/5'
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
