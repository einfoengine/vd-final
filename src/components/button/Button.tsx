"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "dark" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  label,
  className = "",
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = "btn cursor-pointer";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    white: "btn-white",
    dark: "btn-dark",
    link: "btn-link",
  };
  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
    xl: "btn-xl",
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    icon ? "btn-icon" : "",
    loading ? "btn-loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <button
      className={`w-full ${buttonClasses}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {loading ? <span className="sr-only">Loading...</span> : <>{label}</>}
    </button>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link
        scroll={false}
        href={disabled ? "#" : href}
        aria-disabled={disabled || loading}
        className={`btn-area ${
          disabled ? "pointer-events-none opacity-60" : ""
        } ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  // Otherwise, render as button with onClick
  return (
    <div
      className={`btn-area ${
        disabled ? "pointer-events-none opacity-60" : ""
      } ${className}`}
    >
      {buttonContent}
    </div>
  );
}
