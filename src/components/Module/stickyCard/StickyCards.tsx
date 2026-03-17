"use client";

import { StickyCardData } from "@/data/stickyCardsData";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface StickyCardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  [key: string]: any;
}

interface StickyCardsProps {
  cards: StickyCardItem[];
  className?: string;
}

export const StickyCards: React.FC<StickyCardsProps> = ({
  cards,
  className = "",
}) => {
  if (!cards?.length) return null;



  return (
    <div className={`relative flex flex-col gap-12 ${className}`}>
      {cards.map((card, index) => {
        const topOffset = 300 + index * 10;

        return (
          <motion.div
            key={card.id}
            className="sticky rounded-[32px] p-6 md:p-8 bg-white/60 backdrop-blur-2xl border border-black/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] max-w-5xl mx-auto"
            style={{ 
              top: `${topOffset}px`, 
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
              <div className="flex-1 pl-4">
                <h3 className="mb-4 text-2xl md:text-3xl font-bold text-black tracking-tight">{card.title}</h3>
                <p className="text-lg text-gray-800 font-medium leading-relaxed">{card.description}</p>
              </div>

              {/* Image Section */}
              <div className="flex-1">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={320}
                  className="w-full rounded-xl object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
