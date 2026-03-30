"use client";

import Button from "@/components/button/Button";
import HeroVideo from "@/components/common/VideoPlayer";
import { RotatingBadge } from "@/components/common/RotatingBadge";
import { FlipText } from "@/components/common/FlipText";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Star, MessageCircle, ArrowUpRight } from "lucide-react";
import { LottieHeroBackground } from "./LottieHeroBackground";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper to highlight text inside []
  const parseHighlightedText = (text?: string, isHeading: boolean = false) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\])/g);
    
    // Create dark gradient for the non-highlighted text when not scrolled, and white gradient when scrolled.
    const baseTextClass = isHeading 
      ? (!isScrolled 
          ? "bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent" 
          : "bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent")
      : "";

    return parts.map((part, index) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <span key={index} className={`font-playfair bg-gradient-to-b from-yellow-400 via-orange-500 via-40% to-red-600 bg-clip-text text-transparent font-bold ${isHeading ? 'px-1 inline-block pb-2 -mb-2' : ''}`}>
          {part.slice(1, -1)}
        </span>
      ) : (
        <span key={index} className={baseTextClass}>
          {part.split("||").map((subPart, subIndex, array) => (
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
    <div className="nt-mod-hore relative">
      <div className="p-2 relative z-10 w-full h-full">
        <div
          ref={heroRef}
          className={`hero-section relative rounded-3xl overflow-hidden transition-all duration-300 ${className}`}
          style={{
            background: 'transparent',
            border: '1px solid var(--theme-color)',
          }}
        >
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <LottieHeroBackground />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative flex flex-col items-center justify-center max-w-[1000px] m-auto text-center pt-[160px] mb-16 transition-colors duration-300 ${!isScrolled ? 'text-black' : 'text-white'}`}
            >
              {/* Money Back Guarantee Badge - Top Right of Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute top-[140px] right-0 translate-x-1/2 z-10"
              >
                <RotatingBadge
                  text=" Money Back Guarantee"
                  size={70}
                  backgroundColor={!isScrolled ? "#ffffff" : "#000000"}
                  textColor={!isScrolled ? "#000000" : "#ffffff"}
                  rotationDuration={20}
                  fontSize={10}
                  externalBorderWidth={1}
                  textGap={6}
                />
              </motion.div>
              {data.subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={'flex items-center gap-2 transition-colors duration-300'}
                >
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/assets/svg/heroIcon.svg"
                      alt="Reviews"
                      width={40}
                      height={40}
                    />
                  </motion.div>
                  <span>{data.subtitle}</span>
                  <div className="flex items-center ml-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.4 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}



              {data.supertitle && (
                <div className="relative inline-block z-20 mb-[-15px] -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`text-lg md:text-xl font-bold tracking-wide border rounded-full py-2 px-6 transition-colors duration-300 ${!isScrolled ? 'border-black text-black' : 'border-theme/50 text-white'}`}
                  >
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
                className={`nt-hero-heading mb-6 transition-colors duration-300 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] tracking-tight`}
              >
                {parseHighlightedText(data.title, true)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`text-desc text-h4 transition-colors duration-300 ${!isScrolled ? 'text-black' : 'text-white'}`}
              >
              {data.typewriterTexts && (
                <FlipText 
                  texts={data.typewriterTexts} 
                  className="underline mr-2"
                />
              )}
                {parseHighlightedText(data.description, false)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex gap-4 mt-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {data.primaryButtonText&&<Button
                    label={data.primaryButtonText}
                    href={!onPrimaryClick ? data.primaryButtonLink : undefined}
                    onClick={onPrimaryClick}
                    icon={<ArrowUpRight size={18} />}
                    iconPosition="right"
                  />}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {data.secondaryButtonText&&<Button
                    label={data.secondaryButtonText}
                    href={!onSecondaryClick ? data.secondaryButtonLink : undefined}
                    onClick={onSecondaryClick}
                    variant="outline"
                    icon={<MessageCircle size={18} />}
                    iconPosition="left"
                    className={""}
                  />}
                </motion.div>
              </motion.div>
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
