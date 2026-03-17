"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModuleTitle } from "@/components/common/ModuleTitle";
import { 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  MousePointerClick, 
  ShieldCheck, 
  Search, 
  PenTool 
} from "lucide-react";

interface ChecklistItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const checklistItems: ChecklistItem[] = [
  {
    title: "Blazing Fast Speed",
    description: "Load times under 2 seconds to reduce bounce rates.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Mobile Optimization",
    description: "Seamless experience across all device sizes.",
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Clear Call-to-Actions",
    description: "Strategic placement to guide users to convert.",
    icon: <MousePointerClick className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Trust Signals",
    description: "Testimonials, case studies, and SSL security.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
  },
  {
    title: "SEO Structure",
    description: "Built for search engines to find and rank easily.",
    icon: <Search className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Compelling Content",
    description: "Copy that speaks directly to user pain points.",
    icon: <PenTool className="w-6 h-6 text-orange-500" />,
  },
];

export const WebsiteChecklist: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <ModuleTitle
          title="Make sure your website [attracts and converts]"
          subtitle="Essential characteristics of a high-performing website"
          className="text-center mb-16"
          variant="v1"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {item.title}
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
