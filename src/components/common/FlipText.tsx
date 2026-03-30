"use client";

import { useState, useEffect } from "react";

interface FlipTextProps {
  texts: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const FlipText: React.FC<FlipTextProps> = ({
  texts,
  className = "",
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseDuration = 1800,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = texts[wordIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    // Typing
    if (displayed.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }

    // Fully typed — pause before deleting
    setIsPaused(true);
  }, [displayed, isDeleting, isPaused, wordIndex, texts, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      <span className="bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent font-semibold">
        {displayed}
      </span>
      <span className="animate-pulse text-white opacity-80">|</span>
    </span>
  );
};
