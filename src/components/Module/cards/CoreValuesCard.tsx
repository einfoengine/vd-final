"use client";

import Image from "next/image";
import { Check } from "lucide-react";

interface CoreValue {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface CoreValuesProps {
  coreValues: CoreValue[];
}

export default function CoreValuesCard({ coreValues }: CoreValuesProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {coreValues.map((value, index) => (
        <div key={index} className="p-6 rounded-2xl bg-white">
          <Image src={value.icon} alt={value.title} width="70" height="70" />
          <h4 className="mt-5">{value.title}</h4>
          <p className="my-4">{value.description}</p>
          <ul className="space-y-2">
            {value.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-12 h-12 text-theme mb-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
