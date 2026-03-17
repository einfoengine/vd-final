"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, FileText, Video } from "lucide-react";

interface ComparisonPoint {
  feature: string;
  staticValue: string;
  videoValue: string;
}

const comparisonData: ComparisonPoint[] = [
  {
    feature: "Engagement",
    staticValue: "Passive (Reading/Viewing)",
    videoValue: "Active (Watching/Listening)",
  },
  {
    feature: "Information Density",
    staticValue: "High (Detailed text/specs)",
    videoValue: "Medium (Visual storytelling)",
  },
  {
    feature: "Trust Building",
    staticValue: "Authority through depth",
    videoValue: "Connection through personality",
  },
  {
    feature: "Conversion Role",
    staticValue: "Rational validation",
    videoValue: "Emotional trigger",
  },
  {
    feature: "SEO Benefit",
    staticValue: "Keyword indexing",
    videoValue: "Dwell time & Rich snippets",
  },
];

export const ContentMixComparison: React.FC = () => {
  return (
    <div className="w-full py-10">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Static Content Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-[2.5rem] p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-neutral-900/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
        >
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center border border-white/10 shadow-sm text-3xl text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Static Content</h3>
                <p className="text-yellow-400 font-medium">Foundation & Details</p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-b border-white/5 last:border-0 pb-5 last:pb-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-500/60">{item.feature}</span>
                  <span className="text-white font-semibold text-lg">{item.staticValue}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative group rounded-[2.5rem] p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-neutral-900/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
        >
            {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center border border-white/10 shadow-sm text-3xl text-red-500 group-hover:scale-110 transition-transform duration-500">
                <Video className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Video Content</h3>
                <p className="text-red-500 font-medium">Emotion & Action</p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-b border-white/5 last:border-0 pb-5 last:pb-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500/60">{item.feature}</span>
                  <span className="text-white font-bold text-lg">{item.videoValue}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
