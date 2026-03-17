"use client";

import { PackageCategory, PackageItem } from "@/data/packagesData";
import { PackagesTable } from "./PackagesTable";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Check } from "lucide-react";

interface PackagesProps {
  data: Record<PackageCategory, PackageItem[]>;
}

const Packages: React.FC<PackagesProps> = ({ data }) => {
  const categories = Object.keys(data) as PackageCategory[];
  const [activeTab, setActiveTab] = useState<PackageCategory>(categories[0]);

  return (
    <div className="relative nt-packages">
      <div className="container relative z-10">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 border border-white/60 backdrop-blur-xl rounded-full p-2 w-fit mx-auto shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === category
                  ? "text-black"
                  : "text-black/80 hover:text-black font-semibold"
              }`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-yellow-400 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-base md:text-lg">{category}</span>
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className=""
        >
          <AnimatePresence mode="popLayout" initial={false}>
             <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
             >
               <PackagesTable category={activeTab} packages={data[activeTab]} />
             </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;
