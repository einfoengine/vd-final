"use client";

import { ServiceData } from "@/data/service";
import Image from "next/image";
import React from "react";
import { Check } from "lucide-react";

interface ServicesProps {
  suppertitle?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  services: ServiceData[];
  className?: string;
  enableAutoplay?: boolean;
}

export const CoreValues: React.FC<ServicesProps> = ({
  ctaText,
  onCtaClick,
  services,
}) => {
  return (
    <div className="overflow-hidden">
      {services.map((service) => (
        <div key={service.id} className="px-3">
          <div className="bg-white rounded-2xl p-6">
            {/* Icon */}
            <Image
              src={service.iconImage}
              alt={`${service.title} icon`}
              width={48}
              height={48}
              className="object-contain mb-6"
            />

            {/* Title */}
            <h5 className="mb-3">{service.title}</h5>

            {/* Description */}
            <p className="mb-6">{service.description}</p>

            {/* Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm">What You&apos;ll Get:</h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-title"
                    >
                      <Check className="mt-1 mr-3 text-theme shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* CTA Button */}
      {ctaText && (
        <div className="text-center mt-10">
          <button
            onClick={onCtaClick}
            className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
};
