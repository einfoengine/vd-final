"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ModuleTitle } from "../common/ModuleTitle";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCarouselProps {
  secTitle: string;
  secDesc: string;
  items: PortfolioItem[];
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

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  items,
  secTitle,
  secDesc,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      ["0vw", `-${(items.length - 1) * 100}vw`]
    ),
    { stiffness: 120, damping: 30 }
  );

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `calc(${items.length} * 100vh)`, overflowX: "visible" }}
    >
      <div
        className="sticky top-[100px] flex flex-col w-full overflow-hidden"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <div className="w-full z-20 mb-8">
          <div className="container">
            <ModuleTitle 
              title={secTitle} 
              subtitle={secDesc} 
              variant="v1"
            />
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
              width: `${items.length * 100}vw`,
              willChange: "transform",
            }}
            className="flex items-center gap-[8vw] pl-[4vw] pr-[4vw]"
          >
            {items.map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
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
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Decorative background element */}
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-8 relative z-10 order-2 md:order-1">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {item.link ? (
                          <Link href={item.link} className="hover:text-yellow-400 transition-colors">
                            {parseHighlightedText(item.title)}
                          </Link>
                        ) : (
                          parseHighlightedText(item.title)
                        )}
                      </h3>
                      <p className="text-lg text-white/70 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl group order-1 md:order-2">
                    {item.type === 'video' ? (
                       <video
                         src={item.src}
                         className="object-cover w-full h-full"
                         autoPlay
                         muted
                         loop
                         playsInline
                       />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {/* Overlay gradient for media */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Vertical */}
        <div className="flex flex-col sm:hidden space-y-16 px-6 py-12">
          {items.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
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
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-xl mb-8">
                  {item.type === 'video' ? (
                     <video
                       src={item.src}
                       className="object-cover w-full h-full"
                       autoPlay
                       muted
                       loop
                       playsInline
                     />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {item.link ? (
                    <Link href={item.link} className="hover:text-yellow-400 transition-colors">
                      {parseHighlightedText(item.title)}
                    </Link>
                  ) : (
                    parseHighlightedText(item.title)
                  )}
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
