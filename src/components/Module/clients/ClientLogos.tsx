"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Placeholder SVG Logos
const Logo1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <path d="M10 15 L20 5 L30 15 L20 25 Z" />
    <rect x="35" y="8" width="55" height="14" rx="2" />
  </svg>
);
const Logo2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <circle cx="15" cy="15" r="10" />
    <rect x="35" y="8" width="55" height="14" rx="2" />
  </svg>
);
const Logo3 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <rect x="5" y="5" width="20" height="20" rx="4" />
    <rect x="35" y="8" width="55" height="14" rx="2" />
  </svg>
);
const Logo4 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <path d="M10 25 L15 5 L20 25 Z" />
    <rect x="35" y="8" width="55" height="14" rx="2" />
  </svg>
);
const Logo5 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" className={className}>
    <g transform="rotate(45 15 15)">
       <rect x="10" y="10" width="10" height="10" />
    </g>
    <rect x="35" y="8" width="55" height="14" rx="2" />
  </svg>
);


const logos = [
  { id: 1, name: "Alpha", Component: Logo1 },
  { id: 2, name: "Beta", Component: Logo2 },
  { id: 3, name: "Gamma", Component: Logo3 },
  { id: 4, name: "Delta", Component: Logo4 },
  { id: 5, name: "Epsilon", Component: Logo5 },
  { id: 6, name: "Zeta", Component: Logo1 }, // Repeat for variety
  { id: 7, name: "Eta", Component: Logo2 },
];

export const ClientLogos = () => {
  return (
    <section className="nt-module nt-clients-logo w-full py-12 overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 px-12">
          {/* First Set */}
          {logos.map((logo) => (
             <div key={logo.id} className="h-8 w-32 text-slate-300 hover:text-black transition-colors duration-300 cursor-pointer">
                <logo.Component className="w-full h-full" />
             </div>
          ))}
          {/* Second Set for Loop */}
          {logos.map((logo) => (
             <div key={`${logo.id}-duplicate`} className="h-8 w-32 text-slate-300 hover:text-black transition-colors duration-300 cursor-pointer">
                <logo.Component className="w-full h-full" />
             </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};
