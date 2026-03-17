"use client";

import { InfiniteCardItem } from "@/data/infiniteCards";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useEffect, useRef, useState, useCallback } from "react";

interface InfiniteMarqueeCardsProps {
  items?: InfiniteCardItem[];
  className?: string;
  speedSeconds: number;
  border?: string;
  width?: string;
  background?: string;
}

interface CardProps {
  item: InfiniteCardItem;
  index: number;
  border?: string;
  width?: string;
  background?: string;
}

const Card: React.FC<CardProps> = ({ item, index, border, width, background }) => {
  const cardStyle: React.CSSProperties = {
    ...(background 
      ? { background } 
      : item.backgroundImage
        ? {
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.6)), url(${item.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {
            background: item.backgroundColor ?? "#000",
          }
    ),
  };

  return (
    <motion.div
      className="group relative shrink-0 rounded-[32px] p-[1px] backdrop-blur"
      style={{
        border: border || "1px solid rgba(255, 255, 255, 0.1)",
        minWidth: width || "300px",
        maxWidth: width || "380px",
        width: width,
      }}
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
    >
      <div
        className="relative h-full rounded-[30px] overflow-hidden p-6 text-white"
        style={cardStyle}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${item.accentColor ?? "rgba(255,255,255,0.4)"}, transparent 55%)`,
          }}
        />

        <div className="relative z-10 flex h-full flex-col gap-4">
          {item.title && (
            <div className="flex items-center gap-2">
              <span
                className="inline-flex h-10 min-w-[48px] items-center justify-center rounded-full text-xs font-semibold uppercase tracking-[0.3em]"
                style={{
                  backgroundColor: item.accentColor ?? "rgba(255,255,255,0.15)",
                  color: item.accentColor ? "#0f0f0f" : "#ffffff",
                }}
              >
                0{index + 1}
              </span>
              <p className="text-sm uppercase tracking-[0.4em] text-theme font-bold">
                {item.title}
              </p>
            </div>
          )}

          {item.description && (
            <p className="text-base font-semibold leading-tight text-white">
              {item.description}
            </p>
          )}

          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-1 flex flex-col gap-2 text-sm text-white/80">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 rounded-2xl bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <span
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: item.accentColor ?? "#facc15" }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {item.cta?.label && (
            <div className="mt-auto pt-3">
              <Link
                href={item.cta.href ?? "#"}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
              >
                {item.cta.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const InfiniteMarqueeCards: React.FC<InfiniteMarqueeCardsProps> = ({
  items,
  className = "",
  speedSeconds,
  border,
  width,
  background,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const lastPositionRef = useRef(0);

  // Duplicate items multiple times for seamless infinite scrolling
  // Using 3 copies ensures there's always content visible
  const duplicated = useMemo(() => {
    if (!items || items.length === 0) return [];
    const copies = [];
    for (let i = 0; i < 3; i++) {
      copies.push(...items);
    }
    return copies;
  }, [items]);

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

      // Calculate precise width including gaps using sub-pixel precision
      singleSetWidthRef.current = firstItemSecondSetRect.left - firstItemRect.left;
    };

    // Initial calculation
    calculateWidth();

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(() => {
      calculateWidth();
    });

    resizeObserver.observe(track);

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (singleSetWidthRef.current > 0) {
        if (!isDragging) {
          const speed = speedSeconds;
          positionRef.current -= speed * deltaTime;
        }

        // Wrap around logic
        if (positionRef.current <= -singleSetWidthRef.current) {
          positionRef.current += singleSetWidthRef.current;
        } else if (positionRef.current > 0) {
          positionRef.current -= singleSetWidthRef.current;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
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
  }, [items, speedSeconds]);

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
    <div 
      className={`marquee overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <div
        ref={trackRef}
        className="marquee-track flex gap-6"
      >
        {duplicated.map((item, index) => (
          <Card 
            key={`${item.id}-${index}`} 
            item={item} 
            index={index % items.length}
            border={border}
            width={width}
            background={background}
          />
        ))}
      </div>
    </div>
  );
};


