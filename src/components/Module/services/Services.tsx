"use client";

import { ServiceData } from "@/data/service";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesMarqueeProps {
  services?: ServiceData[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

// Get black gradient for each card (different shades)
const getBlackGradient = (index: number) => {
  const gradients = [
    "linear-gradient(135deg, #1a1a1a, #0a0a0a)", // Very dark black
    "linear-gradient(135deg, #2a2a2a, #1a1a1a)", // Dark gray-black
    "linear-gradient(135deg, #1f1f1f, #0f0f0f)", // Medium dark black
    "linear-gradient(135deg, #2d2d2d, #1d1d1d)", // Lighter dark gray-black
    "linear-gradient(135deg, #252525, #151515)", // Medium gray-black
    "linear-gradient(135deg, #1c1c1c, #0c0c0c)", // Very dark black variant
    "linear-gradient(135deg, #2f2f2f, #1f1f1f)", // Lighter gray-black
  ];
  return gradients[index % gradients.length];
};

// Service Card Component with glow effect
interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
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
    <div className="min-w-[280px] max-w-[380px] shrink-0">
      <motion.div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden cursor-pointer group h-full"
        style={{
          background: getBlackGradient(index),
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
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
        <div className="rounded-2xl p-6 text-white relative overflow-hidden h-full">
          <div className="relative z-10">
            {/* Icon */}
            <Image
              src={service.iconImage}
              alt={`${service.title} icon`}
              width={48}
              height={48}
              className="object-contain mb-6"
            />

            {/* Title */}
            <h5 className="mb-3 text-white">{service.title}</h5>

            {/* Description */}
            <p className="mb-6 text-white">{service.description}</p>

            {/* Deliverables */}
            <div>
              {/* <h4 className="mb-2 text-sm text-white">What You&apos;ll Get:</h4> */}
              <ul className="space-y-2">
                {service.deliverables &&
                  service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-white"
                    >
                      <Check className="mt-1 mr-3 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MarqueeRow: React.FC<{
  items: ServiceData[];
  reverse?: boolean;
}> = ({ items, reverse }) => {
  const duplicated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track flex gap-6 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
      >
        {duplicated.map((service, index) => (
          <ServiceCard
            key={`${service.id}-${index}`}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export const ServicesMarquee: React.FC<ServicesMarqueeProps> = ({
  services,
  ctaText,
  onCtaClick,
  className = "",
}) => {
  if (!services || services.length === 0) return null;

  const midpoint = Math.ceil(services.length / 2);
  const firstRow = services.slice(0, midpoint);
  const secondRow = services.slice(midpoint);

  return (
    <div className={`space-y-10 ${className}`}>
      <MarqueeRow items={firstRow} />
      {secondRow.length > 0 && <MarqueeRow items={secondRow} reverse />}

      {ctaText && (
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-white"
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
};

