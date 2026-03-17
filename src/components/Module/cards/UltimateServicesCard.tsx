import { ultimateServicesCardsData } from "@/data/ultimateServicesCards";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardData {
  title: string;
  description: string;
  icon?: React.ReactNode | string;
  category?: string;
}

interface CardsModuleProps {
  cards?: CardData[];
  className?: string;
}

const TABS = ["All", "Strategy", "Social Media", "Website", "Digital Materials", "Execution"];

export const UltimateServicesCard: React.FC<CardsModuleProps> = ({
  cards = ultimateServicesCardsData as CardData[],
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCards = useMemo(() => {
    if (activeTab === "All") return cards;
    return cards.filter((card) => card.category === activeTab);
  }, [activeTab, cards]);

  if (!cards.length) return null;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border ${
              activeTab === tab
                ? "bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/20 scale-105"
                : "bg-black border-white/10 text-white/70 hover:bg-zinc-900 hover:text-white hover:border-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card, index) => (
            <motion.div
              layout
              key={card.title}
              className="bg-white p-6 rounded-3xl"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {typeof card.icon === "string" ? (
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="mb-6"
                  width={70}
                  height={70}
                />
              ) : (
                card.icon && <span className="mb-4 block">{card.icon}</span>
              )}
              <h5 className="mb-4">{card.title}</h5>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
