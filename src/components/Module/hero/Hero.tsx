"use client";

import { BackgroundBeamsWithCollision } from "@/components/common/BackgroundBeamsWithCollision";
import Button from "@/components/button/Button";
import HeroVideo from "@/components/common/VideoPlayer";
import { RotatingBadge } from "@/components/common/RotatingBadge";
import { FlipText } from "@/components/common/FlipText";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

// helper to highlight text inside []
const parseHighlightedText = (text?: string) => {
  if (!text) return null;
  const parts = text.split(/(\[.*?\])/g);
  return parts.map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={index} className="font-playfair bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent font-bold">
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={index}>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change to black immediately when header changes (scrollY > 0)
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nt-mod-hore">
      <div className="absolute top-0 h-screen w-screen bg-linear-to-b from-theme via-white" />
      <div className="p-2">
        <div
          ref={heroRef}
          className={`hero-section relative rounded-3xl overflow-hidden transition-all duration-300 ${className}`}
          style={{
            background: isScrolled ? '#000000' : 'white',
            border: '1px solid var(--theme-color)',
          }}
        >
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
              >
                <BackgroundBeamsWithCollision className="h-full" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative flex flex-col items-center justify-center max-w-[1000px] m-auto text-center pt-[160px] mb-16 transition-colors duration-300 ${
                isScrolled ? 'text-white' : ''
              }`}
              style={{
                // Prevent text color from affecting images/icons
                color: isScrolled ? '#ffffff' : undefined,
              }}
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
                  backgroundColor={isScrolled ? "#000000" : "#ffffff"}
                  textColor={isScrolled ? "#ffffff" : "#000000"}
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
                    className={`text-lg md:text-xl font-bold tracking-wide border border-theme/50 rounded-full py-2 px-6 ${isScrolled ? 'text-white' : 'text-gray-900'}`}
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
                className={`nt-hero-heading mb-6 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : ''
                }`}
              >
                {parseHighlightedText(data.title)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`text-desc text-h4 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : ''
                }`}
              >
              {data.typewriterTexts && (
                <FlipText 
                  texts={data.typewriterTexts} 
                  className="underline mr-2"
                />
              )}
                {parseHighlightedText(data.description)}
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
                    // variant={isScrolled ? "outline" : "primary"}
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
                    className={isScrolled ? "text-white bg-transparent": ""}
                  />}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="p-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <HeroVideo video={video} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
