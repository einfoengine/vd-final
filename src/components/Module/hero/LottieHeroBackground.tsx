"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      
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
