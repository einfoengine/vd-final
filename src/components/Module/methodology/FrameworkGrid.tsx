"use client";

import { frameworkData, Phase } from "@/data/frameworkData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";



interface FrameworkGridProps {
  items?: Phase[];
}

export const FrameworkGrid: React.FC<FrameworkGridProps> = ({
  items = frameworkData,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  // Define accent colors for each phase to be used in gradients/borders
  const getAccentColor = (idx: number) => {
    const colors = ["#fdb400", "#c7f664", "#0a0c00"]; // Theme yellow, secondary lime, dark
    return colors[idx % colors.length];
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((phase, idx) => {
           const accent = getAccentColor(idx);
           
           return (
            <motion.div
                key={phase.id}
                className="group relative rounded-[2.5rem] p-8 md:p-10 cursor-pointer flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPhase(phase)}
            >
                {/* Hover Gradient Background */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(to bottom right, ${accent}08, transparent 60%)`
                    }}
                />
                
                {/* Top Badge */}
                <div className="flex justify-between items-start mb-10 relative z-10">
                    <span 
                        className="text-xs font-bold font-mono uppercase tracking-widest px-4 py-2 rounded-full border"
                        style={{
                            borderColor: `${accent}30`,
                            backgroundColor: `${accent}10`,
                            color: idx === 2 ? 'black' : '#888' // Adjust for dark accent
                        }}
                    >
                        {phase.title}
                    </span>
                    
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400 group-hover:text-gray-900 transition-colors">
                            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                    <div className="mb-8 relative">
                        <div className="absolute -inset-4 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-left -z-10" />
                        <Image
                            src={phase.icon}
                            alt={phase.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                        {phase.subtitle}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed font-medium">
                        {phase.description}
                    </p>
                </div>

                {/* Bottom line accent */}
                <div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-1 group-hover:translate-y-0"
                    style={{ color: accent }}
                />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedPhase && (
            <motion.div
                className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhase(null)}
            >
                <motion.div
                    className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-gray-100 px-8 py-6 flex items-center justify-between">
                         <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 p-2">
                                <Image
                                    src={selectedPhase.icon}
                                    alt={selectedPhase.title}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                                    {selectedPhase.title}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                    {selectedPhase.content.title}
                                </h3>
                            </div>
                         </div>
                         
                         <button
                            onClick={() => setSelectedPhase(null)}
                            className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                         >
                            <X className="w-6 h-6" />
                         </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 space-y-12">
                        {selectedPhase.content.sections.map((section, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                                className="group"
                            >
                                <div className="flex gap-6 md:gap-8">
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                         <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center border-4 border-white shadow-sm ring-1 ring-gray-100">
                                            {idx + 1}
                                         </div>
                                         {idx !== selectedPhase.content.sections.length - 1 && (
                                            <div className="w-0.5 flex-grow bg-gray-100 my-2 group-hover:bg-blue-100 transition-colors" />
                                         )}
                                    </div>
                                    
                                    <div className="pb-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                            {section.title}
                                        </h4>
                                        <div className="prose prose-lg text-gray-600">
                                            {section.content.split("\n\n").map((p, pIdx) => (
                                                <p key={pIdx} className="mb-4 last:mb-0 leading-relaxed">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

