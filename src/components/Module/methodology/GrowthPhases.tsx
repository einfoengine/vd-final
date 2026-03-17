"use client";

import { growthPhases, GrowthPhaseItem } from "@/data/growthPhases";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { 
  ScanSearch, 
  PenTool, 
  Megaphone, 
  BarChart3, 
  HeartHandshake,
  LucideIcon 
} from "lucide-react";

interface GrowthPhasesProps {
  items?: GrowthPhaseItem[];
}

const phaseIcons: Record<number, LucideIcon> = {
  1: ScanSearch,
  2: PenTool,
  3: Megaphone,
  4: BarChart3,
  5: HeartHandshake,
};

export const GrowthPhases: React.FC<GrowthPhasesProps> = ({
  items = growthPhases,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<GrowthPhaseItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const lastPositionRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  const [isHovering, setIsHovering] = useState(false);

  // Duplicate items for seamless infinite scrolling (3 sets)
  const duplicated = React.useMemo(() => {
    return [...items, ...items, ...items];
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculateWidth = () => {
      const firstItem = track.children[0] as HTMLElement;
      // The second set starts after items.length elements
      const firstItemSecondSet = track.children[items.length] as HTMLElement;

      if (!firstItem || !firstItemSecondSet) return;

      const firstItemRect = firstItem.getBoundingClientRect();
      const firstItemSecondSetRect = firstItemSecondSet.getBoundingClientRect();

      // Calculate the width of one full set including gaps
      singleSetWidthRef.current = firstItemSecondSetRect.left - firstItemRect.left;
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Only auto-scroll if not dragging AND not hovering
      if (!isDragging && !isHovering && singleSetWidthRef.current > 0) {
        const speed = 50; // Speed in pixels per second
        positionRef.current -= speed * deltaTime;

        // Wrap around logic
        if (positionRef.current <= -singleSetWidthRef.current) {
          positionRef.current += singleSetWidthRef.current;
        } else if (positionRef.current > 0) {
          positionRef.current -= singleSetWidthRef.current;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      } else if (isDragging && singleSetWidthRef.current > 0) {
         // Still update transform during drag, but position is set by event handlers
         // Wrap logic for dragging
         if (positionRef.current <= -singleSetWidthRef.current) {
             positionRef.current += singleSetWidthRef.current;
             lastPositionRef.current += singleSetWidthRef.current; // Adjust baseline
         } else if (positionRef.current > 0) {
             positionRef.current -= singleSetWidthRef.current;
             lastPositionRef.current -= singleSetWidthRef.current; // Adjust baseline
         }
         track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', calculateWidth);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items, isDragging, isHovering]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    startXRef.current = clientX;
    lastPositionRef.current = positionRef.current;
  };

  const handleDragMove = React.useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const delta = clientX - startXRef.current;
    positionRef.current = lastPositionRef.current + delta;
  }, [isDragging]);

  const handleDragEnd = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);


  return (
    <>
      <div 
        className="w-full overflow-hidden mask-gradient-x md:mask-none cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
            ref={trackRef}
            className="flex gap-4 md:gap-6 w-max"
            style={{ willChange: 'transform' }}
        >
        {duplicated.map((phase, idx) => {
          const IconComponent = phaseIcons[phase.id] || ScanSearch;
          
          return (
            <motion.div
              key={`${phase.id}-${idx}`}
              className="group relative rounded-[2rem] p-6 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 
                min-w-[80vw] 
                md:min-w-[calc((100vw-6rem)/3)] 
                lg:min-w-[300px] xl:min-w-[320px]" 
              // Calculated for 4 cards roughly: 1440 container / 4 = 360 minus gaps
              style={{ 
                 // Mobile: 80vw
                 // Tablet: ~3 cards
                 // Desktop: Explicitly set to show ~4 cards
                 width: 'clamp(280px, 22vw, 380px)' 
              }}
            >
              {/* Solid White Background */}
              <div className="absolute inset-0 bg-white border border-gray-100 shadow-xl transition-all duration-500" />
              
              {/* Animated Gradient Border Glow */}
              <div 
                className="absolute inset-0 opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at top right, ${phase.color}20, transparent 70%)`
                }} 
              />
  
              {/* Low Opacity Watermark Number */}
              <div 
                className="absolute -right-4 -top-4 text-[12rem] font-black leading-none opacity-[0.05] transition-opacity duration-500 select-none pointer-events-none font-title text-black"
              >
                {(idx % items.length) + 1}
              </div>
  
              {/* Content Container */}
              <div className="relative z-10 flex-grow flex flex-col">
                {/* Icon & Badge Row */}
                <div className="flex justify-between items-start mb-6">
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8 text-black opacity-80" strokeWidth={1.5} style={{ color: phase.color }} />
                    </div>
  
                    <span
                      className="text-xs font-bold font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border bg-white/50 backdrop-blur-md"
                      style={{
                        borderColor: `${phase.color}30`,
                        color: (idx % items.length) === 2 ? 'black' : '#555',
                      }}
                    >
                      {phase.title}
                    </span>
                </div>
  
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {phase.subtitle}
                </h3>
  
                <p className="text-gray-600 leading-relaxed font-medium">
                  {phase.description}
                </p>
                
                {/* Learn More Indicator (appears on hover) */}
                <button 
                    onClick={(e) => {
                        if(!isDragging) setSelectedPhase(phase);
                    }}
                    className="mt-6 flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold opacity-100 translate-x-0 transition-all duration-300 w-max shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                    style={{ 
                        backgroundColor: phase.color,
                        color: phase.color === '#0a0c00' ? '#fff' : '#000'
                    }}
                >
                    <span>Explore Phase</span>
                    <div className="bg-white/20 rounded-full p-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
              </div>
            </motion.div>
          );
        })}
        </div>
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
              <div className="sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-gray-100 px-6 py-4 md:px-8 md:py-6 flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 p-2">
                    {(() => {
                        const ModalIcon = phaseIcons[selectedPhase.id] || ScanSearch;
                        return <ModalIcon className="w-8 h-8" style={{ color: selectedPhase.color }} strokeWidth={2} />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {selectedPhase.title}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-none">
                      {selectedPhase.subtitle}
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

              <div className="p-6 md:p-12">
                <div className="mb-10 max-w-3xl">
                    <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        {selectedPhase.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {selectedPhase.features?.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-gray-50 rounded-3xl p-6 md:p-8 hover:bg-gray-100 transition-colors border border-gray-100"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                        >
                            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: selectedPhase.color === '#ffffff' ? '#000' : selectedPhase.color }}></span>
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
