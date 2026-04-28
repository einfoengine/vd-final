"use client";

import Button from "@/components/button/Button";
import HeroVideo from "@/components/common/VideoPlayer";
import { RotatingBadge } from "@/components/common/RotatingBadge";
import { FlipText } from "@/components/common/FlipText";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { Star, ArrowUpRight } from "lucide-react";

interface VDheroData {
  title: string;
  supertitle?: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  typewriterTexts?: string[];
}

interface VDheroProps extends Partial<VDheroData> {
  dataSource?: VDheroData;
  className?: string;
  video?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const Hero: React.FC<VDheroProps> = ({
  dataSource,
  title,
  supertitle,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
  video,
  typewriterTexts,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // helper to highlight text inside []
  const parseHighlightedText = (text?: string, isHeading: boolean = false) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\])/g);
    
    const baseTextClass = isHeading 
      ? "text-white"
      : "";

    return parts.map((part, index) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <span key={index} className={`bg-gradient-to-r from-[#FFD05B] to-[#FF8A00] bg-clip-text text-transparent font-medium ${isHeading ? 'px-1 inline-block' : ''}`}>
          {part.slice(1, -1)}
        </span>
      ) : (
        <span key={index} className={baseTextClass}>
          {part.split(/(?:\n|\|\|)/).map((subPart, subIndex, array) => (
            <React.Fragment key={subIndex}>
              {subPart}
              {subIndex < array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      )
    );
  };

  // prefer props directly, fallback to dataSource
  const data = {
    title: title || dataSource?.title,
    supertitle: supertitle || dataSource?.supertitle,
    subtitle: subtitle || dataSource?.subtitle,
    description: description || dataSource?.description,
    primaryButtonText:
      primaryButtonText || dataSource?.primaryButtonText,
    primaryButtonLink:
      primaryButtonLink || dataSource?.primaryButtonLink || "#",
    secondaryButtonText:
      secondaryButtonText || dataSource?.secondaryButtonText,
    secondaryButtonLink:
      secondaryButtonLink || dataSource?.secondaryButtonLink || "#",
    typewriterTexts: typewriterTexts || dataSource?.typewriterTexts,
  };

  return (
    <div className="nt-mod-hore relative w-full h-full">
      <div className="p-2 relative z-10 w-full h-full">
        <div
          ref={heroRef}
          className={`hero-section relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-300 ${className} bg-[#040810]`}
        >
          {/* Custom Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/site/bg-hero.png"
              alt="Background"
              fill
              className="object-cover object-top opacity-80"
              priority
            />
          </div>

          <div className="container relative z-10 w-full h-full flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative flex flex-col items-center justify-center max-w-[900px] m-auto text-center pt-[80px] md:pt-[120px] pb-12`}
            >
              
              {/* Money Back Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute hidden md:block top-10 md:top-[100px] right-0 md:right-10 z-30 scale-75 md:scale-90"
              >
                <RotatingBadge
                  text=" Money Back Guarantee"
                  size={80}
                  backgroundColor="#111"
                  textColor="#FFD05B"
                  rotationDuration={20}
                  fontSize={11}
                  externalBorderWidth={1}
                  textGap={6}
                />
              </motion.div>

              {data.supertitle && (
                <div className="relative inline-block z-20 mb-6 md:mb-8 transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`flex items-center text-xs md:text-sm font-medium tracking-wide border rounded-full p-1 pr-5 transition-colors duration-300 border-white/10 bg-white/5 backdrop-blur-md text-white/90`}
                  >
                    <span className="bg-gradient-to-r from-[#FFD05B] to-[#FF8A00] text-black px-3 py-1.5 md:py-1 rounded-full mr-3 font-bold text-xs">2026</span>
                    <span className="relative z-10">{data.supertitle}</span>
                  </motion.div>
                </div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`relative inline-block mb-6 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.1] tracking-tight`}
              >
                {/* floating target icon */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 md:-left-20 bottom-4 md:bottom-8 w-[70px] md:w-[100px] z-20 pointer-events-none"
                >
                  <Image src="/assets/site/Goal.png" alt="Target" width={100} height={100} className="object-contain" />
                </motion.div>
                
                {/* floating rocket icon */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-8 md:-right-24 top-0 md:-top-10 w-[80px] md:w-[120px] z-20 pointer-events-none"
                >
                  <Image src="/assets/site/Rocket.png" alt="Rocket" width={120} height={120} className="object-contain" />
                </motion.div>

                <div className="relative z-10 text-white drop-shadow-lg text-center mx-auto">
                  {data.title && parseHighlightedText(data.title.replace("for your", "\nFor your"), true)}
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`text-base sm:text-lg md:text-xl transition-colors duration-300 max-w-2xl mx-auto text-white/70 mb-10`}
              >
                {data.description && parseHighlightedText(data.description, false)}
                {data.typewriterTexts && (
                  <FlipText 
                    texts={data.typewriterTexts} 
                    className="ml-1 font-semibold text-white/90"
                  />
                )}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex justify-center w-full mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {data.primaryButtonText && (
                    <button
                      onClick={onPrimaryClick}
                      className="group relative flex items-center gap-4 px-6 py-2.5 md:px-8 md:py-3.5 rounded-full bg-gradient-to-r from-[#4d3221] to-[#2e1d14] border border-[#8c5a35] text-white font-medium shadow-[0_0_30px_rgba(189,101,43,0.3)] hover:shadow-[0_0_40px_rgba(189,101,43,0.5)] transition-all"
                    >
                      <span className="relative z-10 text-sm md:text-base font-medium">{data.primaryButtonText}</span>
                      <div className="relative z-10 bg-white/10 p-1.5 md:p-2 rounded-full flex items-center justify-center backdrop-blur-md">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                      </div>
                    </button>
                  )}
                </motion.div>
              </motion.div>

              {data.subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex items-center justify-center gap-3 text-sm md:text-base text-white/90"
                >
                  <div className="flex items-center">
                    <Image src="/assets/svg/heroIcon.svg" alt="Reviews" width={40} height={40} className="object-contain" />
                  </div>
                  <span className="font-medium text-lg ml-2">{data.subtitle}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FFD05B] fill-[#FFD05B]" />
                    ))}
                  </div>
                </motion.div>
              )}

            </motion.div>
          </div>
          
          <motion.div
            className="relative z-20 pb-8 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroVideo video={video} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

