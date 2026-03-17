"use client";

import Button from "@/components/button/Button";
import { SubMenuItem } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

interface SubmenuProps {
  subMenuItems: SubMenuItem[];
  isOpen: boolean;
}

export default function Submenu({ subMenuItems, isOpen }: SubmenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-bg p-6 rounded-3xl w-[70vw] transition-all duration-300 ease-in-out shadow-lg">
      {/* Fixed 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {subMenuItems.map((category) => (
          <div key={category.id} className="flex flex-col gap-3">
            <p className="text-title font-semibold text-lg mb-2 border-b border-theme/30 pb-1">
              {category.label}
            </p>

            {category.subMenuItems?.map((service) => (
              <Link
                key={service.id}
                href={service.slug ? `/services/${service.slug}` : "#"}
                className="flex items-center gap-2 rounded p-2 hover:bg-theme/20"
              >
                <Image
                  src={service.image || "/assets/svg/content-creation.svg"}
                  alt={service.label}
                  width={50}
                  height={50}
                  className="w-8 h-8 object-cover rounded-lg"
                />
                <p className="text-title font-medium mb-0">{service.label}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <Button label="All Services" href="/services" className="w-full mt-4" />
    </div>
  );
}
