"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../button/Button";

interface ModuleTitleProps {
  suppertitle?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
  variant?: "v1" | "v2" | "v3";
  titleSuffix?: React.ReactNode;
}

export const ModuleTitle: React.FC<ModuleTitleProps> = ({
  suppertitle,
  title,
  subtitle,
  ctaText,
  ctaHref,
  className = "",
  variant = "v1",
  titleSuffix,
}) => {
  if (!suppertitle && !title && !subtitle && !ctaText) return null;

  // Helper function to parse text and wrap [content] in span with primary color
  const parseHighlightedText = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, index) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <span key={index} className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent font-bold">
          {part.slice(1, -1)}
        </span>
      ) : (
        part
      )
    );
  };

  // Variant 1 – Minimal & Centered
  if (variant === "v1") {
    return (
      <motion.div
        className={`text-center space-y-3 mb-16 ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {suppertitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-bold uppercase tracking-widest text-desc/70 mb-4"
          >
            {parseHighlightedText(suppertitle)}
          </motion.p>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap text-4xl md:text-5xl font-bold text-title"
          >
            <span>{parseHighlightedText(title)}</span>
            {titleSuffix}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl font-semibold text-desc/80 mt-6 max-w-4xl mx-auto leading-relaxed"
          >
            {parseHighlightedText(subtitle)}
          </motion.p>
        )}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button label={ctaText} href={ctaHref || "#"} />
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Variant 2 – Left-Aligned with Accent Border
  if (variant === "v2") {
    return (
      <motion.div
        className={`flex items-center justify-between gap-6 mb-16 ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="max-w-[750px]">
          {suppertitle && (
            <motion.p
              className="mb-4 text-desc/70 font-bold uppercase tracking-widest"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {parseHighlightedText(suppertitle)}
            </motion.p>
          )}
          {title && (
            <motion.h2
              className="mb-4 text-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {parseHighlightedText(title)}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className="text-desc/80 text-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {parseHighlightedText(subtitle)}
            </motion.p>
          )}
        </div>
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button label={ctaText} href={ctaHref || "#"} />
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Variant 3 – Centered (neutral layout)
  if (variant === "v3") {
    return (
      <motion.div
        className={`flex items-center justify-between flex-wrap gap-4 mb-16 ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="max-w-[750px]">
          {suppertitle && (
            <motion.p
              className="uppercase tracking-wide text-desc/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {parseHighlightedText(suppertitle)}
            </motion.p>
          )}
          {title && (
            <motion.h2
              className="mt-4 text-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {parseHighlightedText(title)}
            </motion.h2>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle && <p className="mb-6 text-desc/80">{parseHighlightedText(subtitle)}</p>}
          {ctaText && <Button label={ctaText} href={ctaHref || "#"} />}
        </motion.div>
      </motion.div>
    );
  }

  return null;
};
