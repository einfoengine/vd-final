"use client";

import { ChevronDown, Globe } from "lucide-react";
import React, { useState } from "react";

const languages = [
  { code: "EN", label: "English" },
  { code: "BN", label: "Bangla" },
  { code: "AR", label: "Arabic" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
      >
        <Globe size={20} className="text-gray-700" />
        <span className="font-semibold text-sm text-gray-800">
          {selectedLang.code}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${
                selectedLang.code === lang.code
                  ? "text-theme bg-yellow-50"
                  : "text-gray-700"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
