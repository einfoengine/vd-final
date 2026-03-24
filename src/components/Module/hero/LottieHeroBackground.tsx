"use client";

import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieHeroBackground = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none">
      <div className={`absolute inset-0 transition-colors duration-200 ${isScrolled ? 'bg-black' : ''}`} />
      
      <div className="absolute inset-0 opacity-90 object-cover flex justify-center items-center pointer-events-none scale-110">
        <DotLottieReact
          src="https://lottie.host/e0d3f51a-486d-48e7-9e24-6c2617743b13/Jlkq9QggHF.lottie"
          loop
          autoplay
        />
      </div>
      
      {/* Overlay for depth and text contrast if needed */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};
