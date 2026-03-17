"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Zap, 
  Layers, 
  Star, 
  Clock, 
  ShieldCheck, 
  LucideIcon,
  CheckCircle2 
} from "lucide-react";
import { SpecialityItem as SpecialityItemType } from "@/data/specialityData";

interface SpecialityItemProps {
  item: SpecialityItemType;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  "Award": Award,
  "Zap": Zap,
  "Layers": Layers,
  "Star": Star,
  "Clock": Clock,
  "ShieldCheck": ShieldCheck,
};

export const SpecialityItem: React.FC<SpecialityItemProps> = ({ item, index }) => {
  const IconComponent = iconMap[item.icon] || CheckCircle2;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 group"
    >
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center shadow-sm border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-6 h-6 text-yellow-500" strokeWidth={2} />
      </div>
      
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-title group-hover:text-yellow-500 transition-colors duration-300 mb-2">
          {item.title}
        </h3>
        <p className="text-desc/80 group-hover:text-desc transition-colors duration-300 leading-relaxed text-lg">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
