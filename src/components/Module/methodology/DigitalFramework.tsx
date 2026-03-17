"use client";

import { frameworkData, Phase } from "@/data/frameworkData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { X } from "lucide-react";

// Get black gradient for each card (different shades)
const getBlackGradient = (index: number) => {
  const gradients = [
    "linear-gradient(135deg, #1a1a1a, #0a0a0a)", // Very dark black
    "linear-gradient(135deg, #2a2a2a, #1a1a1a)", // Dark gray-black
    "linear-gradient(135deg, #1f1f1f, #0f0f0f)", // Medium dark black
  ];
  return gradients[index % gradients.length];
};

const FrameworkModal: React.FC<{
  phase: Phase;
  isOpen: boolean;
  onClose: () => void;
}> = ({ phase, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="rounded-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh] bg-white text-gray-900"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={phase.icon}
                  alt={phase.title}
                  width={40}
                  height={40}
                  className="w-20 h-20"
                />
                <h3>{phase.content.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 text-2xl font-bold cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {phase.content.sections.map((section, idx) => (
                <div key={idx}>
                  <h5 className="mb-5">{section.title}</h5>
                  {section.content.split("\n\n").map((p, pIdx) => (
                    <p key={pIdx} className="mb-2">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DigitalFrameworkProps {
  items?: Phase[]; // renamed from services → items
}

// Framework Card Component with glow effect
interface FrameworkCardProps {
  phase: Phase;
  index: number;
  onSelect: (phase: Phase) => void;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ phase, index, onSelect }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden cursor-pointer group"
      style={{
        background: getBlackGradient(index),
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(phase)}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Aceternity UI Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 190, 61, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Content */}
      {/* Content */}
      <div className="rounded-3xl p-6 text-white relative overflow-hidden h-full flex flex-col">
        {/* Background Watermark Icon */}
        <div className="absolute -bottom-2 -right-2 w-48 h-48 opacity-[0.05] pointer-events-none select-none z-0 grayscale contrast-125">
           <Image
             src={phase.icon}
             alt=""
             width={200}
             height={200}
             className="w-full h-full object-contain"
           />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0 shadow-inner">
                <Image
                  src={phase.icon}
                  alt={phase.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
             </div>
             <div>
               <span className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-0.5">
                 {phase.title}
               </span>
               <h5 className="text-white text-xl md:text-2xl font-bold leading-tight">{phase.subtitle}</h5>
             </div>
          </div>
          {phase.serviceList ? (
            <ul className="space-y-2 mt-2">
              {phase.serviceList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/80 leading-relaxed">{phase.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const DigitalFramework: React.FC<DigitalFrameworkProps> = ({
  items = frameworkData, // default fallback
}) => {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((phase, idx) => (
          <FrameworkCard
            key={phase.id}
            phase={phase}
            index={idx}
            onSelect={setSelectedPhase}
          />
        ))}
      </div>

      {selectedPhase && (
        <FrameworkModal
          phase={selectedPhase}
          isOpen={!!selectedPhase}
          onClose={() => setSelectedPhase(null)}
        />
      )}
    </>
  );
};
