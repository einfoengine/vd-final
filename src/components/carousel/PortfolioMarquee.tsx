"use client";

import { PortfolioItem } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import { ProjectModal } from "@/components/common/ProjectModal";

interface PortfolioMarqueeProps {
  items: PortfolioItem[];
  className?: string;
  speed?: number; // pixels per second
}

const Card: React.FC<{ item: PortfolioItem; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <div 
      className="shrink-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[400px] w-[300px] md:w-[400px] rounded-[32px] overflow-hidden group">
        {/* Media Background */}
        <div className="absolute inset-0">
          {item.type === 'video' ? (
            <video
              src={item.src}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
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
              sizes="(max-width: 768px) 300px, 400px"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioMarquee: React.FC<PortfolioMarqueeProps> = ({
  items,
  className = "",
  speed = 30,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const lastPositionRef = useRef(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Duplicate items multiple times for seamless infinite scrolling
  const duplicated = useMemo(() => {
    if (!items || items.length === 0) return [];
    const copies = [];
    for (let i = 0; i < 4; i++) {
      copies.push(...items);
    }
    return copies;
  }, [items]);

  const [isHovered, setIsHovered] = useState(false);

  // Use a ref for speed to validute fresh access inside the animation loop without restarting it
  const speedRef = useRef(speed);
  
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const singleSetWidthRef = useRef(0);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const track = trackRef.current;
    if (!track) return;

    const calculateWidth = () => {
      const firstItem = track.children[0] as HTMLElement;
      const firstItemSecondSet = track.children[items.length] as HTMLElement;

      if (!firstItem || !firstItemSecondSet) return;

      const firstItemRect = firstItem.getBoundingClientRect();
      const firstItemSecondSetRect = firstItemSecondSet.getBoundingClientRect();

      singleSetWidthRef.current = firstItemSecondSetRect.left - firstItemRect.left;
    };

    calculateWidth();

    const resizeObserver = new ResizeObserver(() => {
      calculateWidth();
    });

    resizeObserver.observe(track);

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const speed = 50; // pixels per second

      if (singleSetWidthRef.current > 0) {
        if (!isDragging && !isHovered) {
           // Use the ref to get the live speed value
           if (speedRef.current !== 0) {
              positionRef.current -= speedRef.current * deltaTime; 
           }

           // Wrap around logic for auto-scroll
           if (positionRef.current <= -singleSetWidthRef.current) {
             positionRef.current += singleSetWidthRef.current;
           } else if (positionRef.current > 0) {
             positionRef.current -= singleSetWidthRef.current;
           }

           track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
        } else if (isDragging) {
           // Wrap logic for dragging - MUST adjust lastPositionRef too
           if (positionRef.current <= -singleSetWidthRef.current) {
               positionRef.current += singleSetWidthRef.current;
               lastPositionRef.current += singleSetWidthRef.current;
           } else if (positionRef.current > 0) {
               positionRef.current -= singleSetWidthRef.current;
               lastPositionRef.current -= singleSetWidthRef.current;
           }
           track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items, isDragging, isHovered]); // Removed speed from deps, using ref instead

  if (!items || items.length === 0) return null;

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    startXRef.current = clientX;
    lastPositionRef.current = positionRef.current;
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const delta = clientX - startXRef.current;
    positionRef.current = lastPositionRef.current + delta;
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
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
        className={`marquee rounded-2xl overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="marquee-track flex gap-6 pl-6"
        >
          {duplicated.map((item, index) => (
            <Card 
              key={`${item.id}-${index}`} 
              item={item}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};
