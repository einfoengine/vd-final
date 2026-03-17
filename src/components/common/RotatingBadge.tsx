"use client";

import React from "react";
import { motion } from "framer-motion";

interface RotatingBadgeProps {
  text?: string;
  size?: number; // Size in pixels (width and height)
  icon?: React.ReactNode;
  borderGradient?: string; // External border gradient (optional, used if externalBorderColor is not provided)
  externalBorderColor?: string; // External border solid color (optional, takes precedence over borderGradient)
  externalBorderWidth?: number; // External border width in pixels (optional, defaults to 3px)
  internalBorderColor?: string; // Internal border solid color (optional, used if internalBorderGradient is not provided)
  internalBorderGradient?: string; // Internal border gradient (optional)
  internalBorderWidth?: number; // Internal border width in pixels (optional, defaults to 0px - no internal border)
  backgroundColor?: string;
  textColor?: string;
  rotationDuration?: number; // Duration in seconds for one full rotation
  fontSize?: number; // Font size in pixels (optional, defaults to size-based calculation)
  textGap?: number; // Gap between text and external border in pixels (optional, defaults to size-based calculation)
  position?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    position?: "absolute" | "relative" | "fixed" | "sticky";
  }; // Position styling for the wrapper
  className?: string;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  text = "* Money Back Guarantee *",
  size = 128,
  icon,
  borderGradient = "linear-gradient(135deg, #fdb400, #ffbe3d, #fdb400)",
  externalBorderColor,
  externalBorderWidth = 3,
  internalBorderColor,
  internalBorderGradient,
  internalBorderWidth = 0,
  backgroundColor = "white",
  textColor = "black",
  rotationDuration = 20,
  fontSize,
  textGap,
  position,
  className = "",
}) => {
  const characters = text.split("");
  const angleStep = (360 / characters.length) * (Math.PI / 180);
  const calculatedFontSize = fontSize || Math.max(8, size * 0.08);
  
  // Calculate radii
  const centerRadius = size * 0.1875; // Center icon area (37.5% of size / 2)
  const internalBorderRadius = centerRadius + (internalBorderWidth || 0);
  const textGapValue = textGap !== undefined ? textGap : (size * 0.05); // Default gap is 5% of size
  const textRadius = (size / 2) - externalBorderWidth - textGapValue;
  
  // Ensure text radius is greater than internal border radius
  const finalTextRadius = Math.max(textRadius, internalBorderRadius + textGapValue);

  const defaultIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32"
      className="w-full h-full"
      fill="currentColor"
    >
      <path d="M31,0H15V2H28.59L.29,30.29l1.41,1.41L30,3.41V16h2V1A1,1,0,0,0,31,0Z"></path>
    </svg>
  );

  const positionStyle = position
    ? {
        position: position.position || "absolute",
        top: position.top !== undefined ? (typeof position.top === "number" ? `${position.top}px` : position.top) : undefined,
        right: position.right !== undefined ? (typeof position.right === "number" ? `${position.right}px` : position.right) : undefined,
        bottom: position.bottom !== undefined ? (typeof position.bottom === "number" ? `${position.bottom}px` : position.bottom) : undefined,
        left: position.left !== undefined ? (typeof position.left === "number" ? `${position.left}px` : position.left) : undefined,
      }
    : {};

  return (
    <div 
      className={`rounded-full ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        position: position?.position || "relative",
        ...positionStyle,
      }}
    >
      {/* External Rotating Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: rotationDuration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background: externalBorderColor || borderGradient,
          padding: `${externalBorderWidth}px`,
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{ backgroundColor }}
        >
          {/* Internal Border (separates text from center icon) */}
          {internalBorderWidth > 0 && (
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: rotationDuration,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute rounded-full"
              style={{
                width: `${internalBorderRadius * 2}px`,
                height: `${internalBorderRadius * 2}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: internalBorderColor || internalBorderGradient || externalBorderColor || borderGradient,
                padding: `${internalBorderWidth}px`,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor }}
              />
            </motion.div>
          )}

          {/* Rotating text wrapper */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: rotationDuration,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-full h-full"
            >
              {characters.map((char, index) => {
                const angle = index * angleStep - Math.PI / 2; // Start from top
                const x = Math.cos(angle) * finalTextRadius;
                const y = Math.sin(angle) * finalTextRadius;
                
                return (
                  <span
                    key={index}
                    className="absolute font-semibold"
                    style={{
                      color: textColor,
                      fontSize: `${calculatedFontSize}px`,
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div 
          className="rounded-full flex items-center justify-center"
          style={{ 
            width: `${centerRadius * 2}px`, 
            height: `${centerRadius * 2}px`,
            backgroundColor 
          }}
        >
          <div style={{ color: textColor, width: `${size * 0.25}px`, height: `${size * 0.25}px` }}>
            {icon || defaultIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

