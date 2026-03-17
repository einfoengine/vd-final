"use client";

import { Service } from "@/data/services/servicesData";
import Image from "next/image";
import Link from "next/link";

interface AllServicesProps {
  services: Record<string, Service>;
}

export default function AllServices({ services }: AllServicesProps) {
  const servicesArray = Object.values(services);

  return (
    <section className="all-services py-12 px-4 md:px-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {servicesArray.map((service) => (
          <div
            key={service.slug}
            className="rounded-3xl bg-white/80 ring-1 ring-black/5 p-6 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
              <Image
                src={
                  service.bgImg ||
                  service.iconImage ||
                  "/assets/img/default.png"
                }
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-auto inline-flex items-center gap-2 text-amber-400 font-medium"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
