"use client";

import { allservicesData, ServiceData } from "@/data/allservices";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailsProps {
  serviceSlug: string;
}

export default function ServiceDetailsView({
  serviceSlug,
}: ServiceDetailsProps) {
  const serviceData: ServiceData | undefined = allservicesData[serviceSlug];

  if (!serviceData) {
    return (
      <p className="text-center mt-20 text-gray-700">Service not found.</p>
    );
  }

  return (
    <article className="service-details py-12 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-10 mb-12">
          <div>
            <h1 className="text-5xl md:text-5xl font-extrabold mb-6 text-black">
              {serviceData.title}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {serviceData.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-4 rounded-full hover:bg-amber-300 transition"
            >
              {serviceData.buttonText || "Contact Us"} <span>→</span>
            </Link>
          </div>
          <div className="relative">
            <Image
              src={
                serviceData.bgImg ||
                serviceData.iconImage ||
                "/assets/img/default.png"
              }
              alt={serviceData.title}
              width={900}
              height={520}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Cards Section */}
        {serviceData.cards && (
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {serviceData.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/80 ring-1 ring-black/5 p-8 flex flex-col gap-4"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-200/70">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-700 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Sections */}
        {serviceData.sections?.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>

            {section.content.map((block, blockIdx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={blockIdx} className="mb-4 text-gray-700">
                    {block.content}
                  </p>
                );
              }

              if (block.type === "list") {
                const ListTag = block.ordered ? "ol" : "ul";
                return (
                  <ListTag
                    key={blockIdx}
                    className="mb-4 pl-6 list-inside list-disc text-gray-700"
                  >
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ListTag>
                );
              }

              if (block.type === "image") {
                return (
                  <div key={blockIdx} className="mb-6">
                    <Image
                      src={block.src!}
                      alt={block.alt || "section image"}
                      width={block.width || 800}
                      height={block.height || 400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                );
              }

              return null;
            })}
          </section>
        ))}
      </div>
    </article>
  );
}
