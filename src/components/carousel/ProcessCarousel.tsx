// ProcessCarousel.tsx
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../button/Button";

interface Step {
  id: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface CarouselProps {
  items: Step[];
  className?: string;
}

// Highlight text inside [] - yellow color
const parseHighlightedText = (text?: string) =>
  text?.split(/(\[.*?\])/g).map((part, idx) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={idx} className="font-playfair text-yellow-400">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );



export const ProcessCarousel: React.FC<CarouselProps> = ({
  items,
  className = "",
}) => {
  const stepsCount = Math.max(items.length, 1) + 1;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate scroll progress points
  // We want the horizontal scroll to finish before the end
  // leaving the last part for the scale animation
  const scrollEnd = (stepsCount - 1) / stepsCount;

  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, scrollEnd, 1],
      ["0vw", `-${(stepsCount - 1) * 100}vw`, `-${(stepsCount - 1) * 100}vw`]
    ),
    { stiffness: 120, damping: 30 }
  );

  const ctaScale = useSpring(
    useTransform(
      scrollYProgress,
      [scrollEnd, 1],
      [1, 1.2]
    ),
    { stiffness: 120, damping: 30 }
  );

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `calc(${stepsCount} * 100vh)`, overflowX: "visible" }}
    >
      <div
        className="sticky top-[100px] flex flex-col w-full overflow-hidden"
        style={{ height: "auto", minHeight: "600px", maxHeight: "calc(100vh - 120px)" }}
      >
        <div className="w-full z-20 mb-8">
          <div className="container">
            {/* <ModuleTitle 
              title={secTitle} 
              subtitle={secDesc} 
              titleSuffix={
                <span className="bg-black rounded-full px-2 py-1 text-white text-xl">
                  <span className="">{stepsCount}</span>
                  <span className="">- Steps</span>
                </span>
              }
            /> */}
          </div>
        </div>
        {/* Desktop Horizontal */}
        <div
          className="hidden sm:block overflow-x-visible process-cards flex-1"
          style={{ overflowX: "visible", willChange: "transform" }}
        >
          <motion.div
            style={{
              x,
              width: `${stepsCount * 100}vw`,
              willChange: "transform",

            }}
            className="flex items-center gap-[8vw] pl-[4vw] pr-[4vw]"
          >
            {items.map((step, idx) => (
              <motion.div
                key={`${step.id}-${idx}`}
                className="w-[92vw] flex items-center justify-center px-6"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div 
                  className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-xl relative overflow-hidden"
                  style={{ 
                    background: "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))",
                    // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Decorative background element */}
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="p-2 rounded-full bg-yellow-400 text-black font-bold shadow-lg shadow-yellow-400/20">
                        Step {idx + 1}/{stepsCount}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {parseHighlightedText(step.title)}
                      </h3>
                      <p className="text-lg text-white/70 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full rounded-3xl overflow-hidden border border-white/5 group">
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={step.imageAlt ?? step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {/* Overlay gradient for image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Final CTA Slide - Desktop */}
            <motion.div
              className="w-[92vw] h-full flex items-center justify-center px-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: items.length * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div 
                className="w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-xl relative overflow-hidden"
                style={{ 
                  scale: ctaScale,
                  background: "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))",
                  // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Decorative background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 opacity-50" />
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-8 relative z-10 max-w-4xl mx-auto">
                  <div className="flex justify-center">
                    <span className="p-2 rounded-full bg-yellow-400 text-black font-bold shadow-lg shadow-yellow-400/20">
                      Final Step
                    </span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    What are you waiting for? <br />
                    <span className="text-gradient-gold">Start your journey today.</span>
                  </h3>
                  
                  <div className="pt-8">
                    <Button label="Book a free strategic meeting" href="#contact" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Vertical */}
        <div className="flex flex-col sm:hidden space-y-16 px-6 py-12">
          {items.map((step, idx) => (
            <motion.div
              key={`${step.id}-${idx}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-[32px] p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden"
              style={{ 
                background: "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))",
                // boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black text-lg font-bold shadow-lg shadow-yellow-400/20">
                    {idx + 1}
                  </span>
                  <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
                    Step {idx + 1}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {parseHighlightedText(step.title)}
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  {step.description}
                </p>
                
                {step.image && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                    <Image
                      src={step.image}
                      alt={step.imageAlt ?? step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Final CTA Slide - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: items.length * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-[32px] p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
            style={{ 
              background: "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))",
              // boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 opacity-50" />
            <div className="relative z-10 space-y-8">
              <div className="flex justify-center">
                <span className="p-2 rounded-full bg-yellow-400 text-black font-bold shadow-lg shadow-yellow-400/20">
                  Final Step
                </span>
              </div>
              
              <h3 className="text-4xl font-bold text-white leading-tight">
                What are you waiting for? <br />
                <span className="text-gradient-gold">Start your journey today.</span>
              </h3>
              
              <div className="pt-4">
                <Button label="Book a free strategic meeting" href="#contact" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

