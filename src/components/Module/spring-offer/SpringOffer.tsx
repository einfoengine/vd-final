"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import { Sparkles } from "lucide-react";

export const SpringOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target Date: End of February 2026
    const targetDate = new Date("2026-02-28T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] flex items-center justify-center border border-white/20 shadow-lg">
        <span className="text-3xl md:text-5xl font-black text-white font-mono">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest mt-2 text-white/80 font-bold">
        {label}
      </span>
    </div>
  );


  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden mb-16">
      
      {/* Subtle colored glow effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="absolute inset-0 bg-[url('/assets/pattern-grid.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
      
      {/* Floating Elements (Spring Theme) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 text-red-500/20 pointer-events-none"
      >
        <Sparkles className="w-24 h-24 m-6" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 text-orange-500/20 pointer-events-none"
      >
        <Sparkles className="w-32 h-32 m-6" />
      </motion.div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold uppercase tracking-widest mb-4 border border-red-500/20 backdrop-blur-sm">
                Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                Spring '25 Sale <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">25% OFF</span> Matches
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-medium max-w-xl">
                 Unlock premium growth services at a fraction of the cost. 
                 This exclusive offer ends when February does.
              </p>
            </motion.div>
          </div>

          {/* Countdown & CTA */}
          <div className="flex-1 flex flex-col items-center relative z-10">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center mb-8"
             >
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <TimeUnit value={timeLeft.seconds} label="Secs" />
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
             >
                <button className="px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl font-bold rounded-full shadow-[0_10px_30px_rgba(239,68,68,0.2)] hover:shadow-[0_10px_40px_rgba(239,68,68,0.4)] hover:scale-105 transition-all transform flex items-center gap-2 border border-white/10">
                   Get 25% OFF Now
                   <Sparkles className="w-5 h-5" />
                </button>
             </motion.div>
             <p className="text-white/40 text-sm mt-4 font-medium">
                *Offer valid until February 28, 2026
             </p>
          </div>

      </div>

  );
};
