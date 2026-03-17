"use client";

import { PackageCategory, PackageItem } from "@/data/packagesData";
import { Check, X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface PackagesTableProps {
  category: PackageCategory;
  packages: PackageItem[];
}

// Normalized Data Structure for the Table
interface ComparisonRow {
  feature: string;
  values: (string | boolean | number)[]; // [Starter, Growth, Business]
}

const unifiedRows: ComparisonRow[] = [
  { feature: "Holistic Plan", values: [true, true, true] },
  { feature: "Monthly Plan", values: [true, true, true] },
  { feature: "Social Media Platforms", values: [2, 3, 4] },
  { feature: "Static Posts", values: [8, 12, 8] },
  { feature: "Short/Animated Videos", values: ["1 Animated", "4 HQ Videos", "4 HQ Videos"] },
  { feature: "Website Optimization", values: [false, true, true] },
  { feature: "Blogs", values: [false, "2 Standard", "4 Standard"] },
  { feature: "High Value Post Writing", values: [false, true, true] },
  { feature: "Media Buying", values: [false, "4 Campaigns", "4 Campaigns + Retargeting"] },
  { feature: "Internal/External Links", values: [false, false, true] },
  { feature: "VDO Platform Management", values: [false, false, true] },
];

const smmRows: ComparisonRow[] = [
  { feature: "Social Platforms", values: [2, 4, "All"] },
  { feature: "Posts per Month", values: [12, 20, "Daily"] },
  { feature: "Reels/TikToks", values: [false, 4, 8] },
  { feature: "Community Management", values: [true, true, "24/7"] },
  { feature: "Reporting", values: ["Monthly", "Monthly", "Weekly"] },
  { feature: "Ad Campaign Setup", values: [false, true, "Management"] },
  { feature: "Influencer Outreach", values: [false, false, true] },
];

const seoRows: ComparisonRow[] = [
  { feature: "Keyword Research", values: [true, true, true] },
  { feature: "On-Page Optimization", values: [true, true, true] },
  { feature: "Technical SEO Audit", values: [true, true, true] },
  { feature: "Reporting", values: ["Monthly", "Monthly", "Monthly"] },
  { feature: "Content Strategy", values: [false, true, true] },
  { feature: "Blog Posts", values: [false, 4, 8] },
  { feature: "Backlink Building", values: [false, "5/mo", "15/mo"] },
  { feature: "Competitor Analysis", values: [false, true, true] },
  { feature: "Local SEO", values: [false, false, true] },
  { feature: "Schema Markup", values: [false, false, true] },
  { feature: "CRO", values: [false, false, true] },
];

const webRows: ComparisonRow[] = [
  { feature: "Pages", values: [1, 10, "Online Store"] },
  { feature: "Design", values: ["Custom", "Custom", "Custom"] },
  { feature: "Mobile Responsive", values: [true, true, true] },
  { feature: "CMS Integration", values: [false, true, true] },
  { feature: "Contact Form", values: [true, true, true] },
  { feature: "Speed Optimization", values: [true, true, true] },
  { feature: "Basic SEO", values: [true, true, true] },
  { feature: "Blog Setup", values: [false, true, true] },
  { feature: "Social Media Integration", values: [false, true, true] },
  { feature: "Analytics Setup", values: [false, true, true] },
  { feature: "Support", values: [false, "1 Month", "3 Months"] },
  { feature: "Payment Gateway", values: [false, false, true] },
  { feature: "Product Management", values: [false, false, true] },
  { feature: "Inventory System", values: [false, false, true] },
  { feature: "User Accounts", values: [false, false, true] },
];

const videoRows: ComparisonRow[] = [
  { feature: "Strategy/Discussion", values: [true, true, true] },
  { feature: "Script & Ideation", values: [true, true, true] },
  { feature: "Storyboard", values: [false, true, true] },
  { feature: "Production Type", values: ["Shoot + Edit", "Animation", "UI Animation"] },
  { feature: "Voiceover/BGM", values: [true, false, false] },
  { feature: "Revisions", values: ["2 times", "1 time", "1 time"] },
  { feature: "Delivery Time", values: ["15 days", "7 days", "7 days"] },
];

export const PackagesTable: React.FC<PackagesTableProps> = ({ category, packages }) => {
  let rows: ComparisonRow[] = [];

  switch (category) {
    case "Unified":
      rows = unifiedRows;
      break;
    case "Social Media Marketing":
      rows = smmRows;
      break;
    case "SEO":
      rows = seoRows;
      break;
    case "Website Design & Development":
      rows = webRows;
      break;
    case "Video & Animation":
      rows = videoRows;
      break;
    default:
      rows = [];
  }

  if (rows.length === 0) {
    return <div className="text-center text-gray-500">Table rendering error.</div>;
  }

  return (
    <div className="w-full overflow-x-auto pb-12">
      <div className="min-w-[800px] bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="p-6 flex items-end">
            <span className="text-xl font-bold text-gray-500">Features</span>
          </div>
          {packages.map((pkg, idx) => (
            <div key={idx} className={`p-6 flex flex-col items-center justify-center p-4 border-l border-gray-100 ${pkg.isPopular ? 'bg-yellow-50' : ''}`}>
              <h3 className={`text-xl font-black mb-2 text-center text-black`}>
                {pkg.title}
              </h3>
              <div className="text-center">
                 <span className="text-3xl font-bold text-black block">
                  {pkg.features.reduce((acc, f) => acc + f.price, 0) - pkg.discount}
                 </span>
                 <span className="text-sm text-gray-600 font-medium">{pkg.priceUnit}</span>
              </div>
              {pkg.isPopular && (
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-yellow-400 text-black px-2 py-1 rounded-full">Most Popular</span>
              )}
            </div>
          ))}
        </div>

        {/* Body Rows */}
        <div className="divide-y divide-gray-200">
          {rows.map((row, rowIdx) => (
            <div 
              key={rowIdx} 
              className={`grid grid-cols-4 transition-colors duration-200 ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-gray-100/50`}
            >
              {/* Feature Name */}
              <div className="p-5 pl-8 flex items-center">
                <span className="font-bold text-gray-900">{row.feature}</span>
              </div>

              {/* Values */}
              {row.values.map((val, colIdx) => (
                <div key={colIdx} className={`p-5 flex items-center justify-center border-l border-gray-100 ${packages[colIdx]?.isPopular ? 'bg-yellow-400/5' : ''}`}>
                  {typeof val === "boolean" ? (
                    val ? (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${packages[colIdx]?.isPopular ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
                        <Check className="w-5 h-5" strokeWidth={3} />
                      </div>
                    ) : (
                      <span className="text-gray-300 font-bold">-</span>
                    )
                  ) : (
                    <span className="font-bold text-lg text-black text-center">{val}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Footer / CTA Row */}
         <div className="grid grid-cols-4 bg-gray-50 border-t border-gray-200">
            <div className="p-6"></div>
            {packages.map((pkg, idx) => (
                <div key={idx} className={`p-6 flex justify-center border-l border-gray-200 ${pkg.isPopular ? 'bg-yellow-50' : ''}`}>
                    <button className={`px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                        pkg.isPopular 
                        ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20" 
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}>
                        Choose {pkg.title}
                    </button>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};
