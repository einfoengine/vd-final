"use client";

import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

interface VDheroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

// Helper to highlight text inside []
const parseHighlightedText = (text?: string) => {
  if (!text) return null;
  const parts = text.split(/(\[.*?\])/g);
  return parts.map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <h1 key={index} className="font-playfair text-theme inline-block">
        {part.slice(1, -1)}
      </h1>
    ) : (
      <h1 key={index} className="inline-block mr-2">
        {part}
      </h1>
    )
  );
};

export const BreadcrumbHero: React.FC<VDheroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  className = "",
}) => {
  return (
    <section className={`relative p-0 ${className}`}>
      {/* Background gradient */}
      <div className="absolute top-0 left-0 h-80 w-full bg-linear-to-b from-theme via-white to-transparent" />

      <div className="relative p-2">
        <div className="relative bg-white rounded-3xl border border-theme py-28">
          <div className="container mx-auto px-4 relative">
            {/* Subtitle & stars */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-2 pt-10"
              >
                <Image
                  src="/assets/svg/heroIcon.svg"
                  alt="Hero Icon"
                  width={40}
                  height={40}
                />
                <span className="font-medium">{subtitle}</span>
                <div className="flex items-center ml-3">
                  {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
              ))}
                </div>
              </motion.div>
            )}

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center max-w-[1000px] mx-auto text-center"
            >
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="my-6 text-h1 font-semibold leading-tight"
              >
                {parseHighlightedText(title)}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-desc text-h6 max-w-[800px] leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Buttons */}
              {(primaryButtonText || secondaryButtonText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  {primaryButtonText && (
                    <Button
                      label={primaryButtonText}
                      href={primaryButtonLink}
                      variant="primary"
                    />
                  )}
                  {secondaryButtonText && (
                    <Button
                      label={secondaryButtonText}
                      href={secondaryButtonLink}
                      variant="outline"
                    />
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
