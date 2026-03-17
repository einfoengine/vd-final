"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTiktok, 
  FaYoutube, 
  FaPinterestP 
} from "react-icons/fa"; 

import { 
  FileText, 
  Image as ImageIcon, 
  Video, 
  LayoutGrid 
} from "lucide-react";
import { ModuleTitle } from "@/components/common/ModuleTitle";

export const HolisticApproach = ({ className = "" }: { className?: string }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <ModuleTitle
          // suppertitle="How this growth architecture works"
          title="Achieve [Unified Digital Dominance]"
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Multi-Platform */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white text-xl">
                <FaFacebookF />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Omni-Channel Presence</h3>
              <p className="text-gray-600 mb-8">
                Be everywhere your audience is. We manage and optimize your presence across all major social networks simultaneously.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <FaInstagram />, color: "bg-pink-600" },
                  { icon: <FaFacebookF />, color: "bg-blue-600" },
                  { icon: <FaLinkedinIn />, color: "bg-blue-700" },
                  { icon: <FaTiktok />, color: "bg-black" },
                  { icon: <FaYoutube />, color: "bg-red-600" },
                  { icon: <FaPinterestP />, color: "bg-red-500" },
                ].map((social, idx) => (
                  <div key={idx} className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-80 ${social.color}`}>
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Content Diversity */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 text-black">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Content Hub Strategy</h3>
              <p className="text-gray-600 mb-8">
                From high-converting graphics to engaging reels and thought-leadership articles. We create it all.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Video className="w-4 h-4" />, label: "Reels & Shorts" },
                  { icon: <LayoutGrid className="w-4 h-4" />, label: "Carousels" },
                  { icon: <ImageIcon className="w-4 h-4" />, label: "Static Posts" },
                  { icon: <FileText className="w-4 h-4" />, label: "Blogs & Articles" },
                ].map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100 p-2 rounded-lg">
                    {type.icon}
                    <span>{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Regular Activity */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mb-6 text-black text-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Active Promotion</h3>
              <p className="text-gray-600 mb-8">
                Algorithm-friendly consistency. We keep your channels active and growing 24/7 with planned schedules.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-green-600 whitespace-nowrap">Daily Posts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </div>
                  <span className="text-xs text-blue-600 whitespace-nowrap">Weekly Blogs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-purple-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                  </div>
                  <span className="text-xs text-purple-600 whitespace-nowrap">Monthly Reports</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
