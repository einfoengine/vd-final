"use client";

import React, { useState } from "react";
import { InfiniteCardItem } from "@/data/infiniteCards";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface VarticalHoverTabProps {
  items: InfiniteCardItem[];
  className?: string;
}

export const VarticalHoverTab = ({ items, className }: VarticalHoverTabProps) => {
  /* Removed activeIndex and scroll logic setup */
  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure activeIndex is always within bounds of the current items
  const safeIndex = items.length > 0 ? Math.min(activeIndex, items.length - 1) : 0;
  const currentItem = items[safeIndex];

  // If no items, render nothing or empty state
  if (!currentItem) return null;

  return (
    <div 
        className={cn("w-full max-w-7xl mx-auto px-4 md:px-6 py-20 relative", className)}
    >
      <div 
        className="overflow-hidden p-1"
      >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[500px]">
        {/* Left Side: Navigation List */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={cn(
                "group flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-500 border relative overflow-hidden",
                safeIndex === idx
                  ? "bg-white shadow-lg shadow-gray-200/50 border-brand-primary/10 scale-[1.02]"
                  : "bg-transparent hover:bg-gray-50 border-transparent hover:border-gray-200"
              )}
            >
              <div className="flex items-center gap-4 relative z-10">
                 {/* Number Index */}
                 <span className={cn(
                    "text-2xl font-bold font-mono tracking-tighter transition-colors duration-300",
                    safeIndex === idx ? "text-brand-primary/20" : "text-gray-500 group-hover:text-gray-300"
                 )}>
                    {String(idx + 1).padStart(2, '0')}
                 </span>
                 
                 <span 
                    className={cn(
                        "text-lg font-semibold transition-colors duration-300",
                        safeIndex === idx ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"
                    )}
                  >
                    {item.title}
                  </span>
              </div>
              
              <div className="relative z-10 w-8 flex justify-end">
                  <motion.div
                    animate={{ 
                        opacity: safeIndex === idx ? 1 : 0,
                        x: safeIndex === idx ? 0 : -10,
                        scale: safeIndex === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                  >
                     <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-primary">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                  </motion.div>
              </div>

               {/* Active Background Decor */}
               {safeIndex === idx && (
                    <motion.div 
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-brand-primary/[0.03] to-transparent"
                        transition={{ duration: 0.3 }}
                    />
               )}
            </button>
          ))}
        </div>

        {/* Right Side: Content Area */}
        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait">
             <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full flex flex-col"
            >
               {/* Content Container */}
               <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-gray-100 to-white shadow-2xl shadow-gray-200/40 h-full">
                  <div className="absolute inset-0 bg-white rounded-[2.4rem] m-[1px]" /> {/* Inner border mask hack for clean gradient border */}
                  
                  <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center">
                           {/* Text Content */}
                           <div className="flex flex-col justify-center order-2 md:order-1">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 ring-4 ring-brand-primary/5 text-sm font-bold text-brand-primary">
                                        {String(safeIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="h-px w-12 bg-gray-200"></span>
                                    <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Obstacle</span>
                                </div>

                                <motion.h3 
                                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {currentItem.title}
                                </motion.h3>
                                
                                <motion.p 
                                    className="text-gray-600 text-lg leading-relaxed mb-8 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {currentItem.description}
                                </motion.p>
                                
                                {currentItem.bullets && currentItem.bullets.length > 0 && (
                                    <ul className="space-y-4">
                                        {currentItem.bullets.map((bullet, i) => (
                                            <motion.li 
                                                key={i} 
                                                className="flex items-start gap-3 text-gray-600"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.05) }}
                                            >
                                                <div className="mt-1.5 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-green-600">
                                                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                {bullet}
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                           </div>

                           {/* Visual/Media Content */}
                           <motion.div 
                                className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                           >
                                {/* Decorative Gradients */}
                                 <div 
                                    className="absolute inset-0 opacity-10 transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ 
                                        background: currentItem.backgroundColor || `radial-gradient(circle at top right, ${currentItem.accentColor || '#3b82f6'}, transparent 60%)` 
                                    }}
                                 />
                                 
                                 <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent opacity-80" />

                                 <div className="relative z-10 text-center p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                      {currentItem.backgroundImage ? (
                                          <div className="relative">
                                              <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
                                              <img 
                                                src={currentItem.backgroundImage} 
                                                alt={currentItem.title}
                                                className="relative w-40 h-40 mx-auto object-contain drop-shadow-2xl"
                                              />
                                          </div>
                                      ) : (
                                          <div className="relative group-hover:scale-105 transition-transform duration-500">
                                              <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full" />
                                              <div className="relative w-32 h-32 rounded-3xl bg-white shadow-xl flex items-center justify-center mx-auto border border-gray-50 transform rotate-3 group-hover:rotate-6 transition-all duration-300">
                                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-primary">
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                        <path d="M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                        <polyline points="16 3 21 3 21 8" />
                                                        <line x1="15" y1="9" x2="21" y2="3" />
                                                    </svg>
                                              </div>
                                          </div>
                                      )}
                                      
                                 </div>
                           </motion.div>
                      </div>
                  </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
);
};
