import { Testimonials } from "@/components/Module/testimonials/Testimonials";
import Button from "@/components/button/Button";
import Accordion from "@/components/common/Accordion";
import { ModuleTitle } from "@/components/common/ModuleTitle";
import { Service, servicesData } from "@/data/services/servicesData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface Heading {
  suppertitle?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "v1" | "v2" | "v3";
}

interface ContentParagraph {
  type: "paragraph";
  content: string;
}

interface StepItem {
  steps: string;
  title: string;
  desc: string;
}

interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  tag?: string;
}

interface FAQItem {
  title: string;
  desc: string;
}

interface ContentList {
  type: "list";
  ordered?: boolean;
  items: (string | StepItem | PricingTier | FAQItem)[];
}

interface ContentPricing {
  type: "pricing";
  items: PricingTier[];
}

interface ContentPricingTable {
  type: "pricing-table";
  items: PricingTier[];
}

interface ContentTestimonial {
  type: "testimonial";
  quote: string;
  author: string;
}

interface ContentCaseStudy {
  type: "case-study";
  client: string;
  project: string;
  solution: string;
  result: string;
}

interface ContentLogos {
  type: "logos";
  items: string[];
}

type Content =
  | ContentParagraph
  | ContentList
  | ContentPricing
  | ContentPricingTable
  | ContentTestimonial
  | ContentCaseStudy
  | ContentLogos;

interface DetailSection {
  heading: Heading;
  content?: Content[];
}

// Type guards
function isStepItem(item: unknown): item is StepItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "steps" in item &&
    "title" in item &&
    "desc" in item
  );
}

function isPricingTier(item: unknown): item is PricingTier {
  return (
    typeof item === "object" &&
    item !== null &&
    "name" in item &&
    "subtitle" in item &&
    "price" in item
  );
}

function isFAQItem(item: unknown): item is FAQItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "title" in item &&
    "desc" in item &&
    !("steps" in item) &&
    !("name" in item)
  );
}

// Helper function to render FAQ section
function renderFAQSection(section: DetailSection, index: number) {
  return (
    <section key={index}>
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            {section.heading && (
              <div className="mb-12">
                <ModuleTitle
                  suppertitle={section.heading.suppertitle}
                  title={section.heading.title}
                  subtitle={section.heading.subtitle}
                  ctaText={section.heading.ctaText}
                  ctaHref={section.heading.ctaHref}
                  variant={section.heading.variant || "v2"}
                />
              </div>
            )}

            <div className="mt-8">
              <h6>Have a question about pricing?</h6>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href="" label="Book an Intro Call" />
                <Link
                  href="mailto:info@vibelydigital.com?subject=You%20got%20end%20email"
                  className="group flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@vibelydigital.com</span>
                </Link>
              </div>
            </div>
          </div>

          {section.content && section.content.length > 0 && (
            <div className="w-full col-span-7 mx-auto">
              {section.content.flatMap((block, blockIdx) => {
                if (block.type === "list") {
                  // Filter and map FAQ items (title/desc -> question/answer)
                  const faqItems = block.items
                    .filter((item): item is FAQItem => {
                      return (
                        typeof item === "object" &&
                        item !== null &&
                        "title" in item &&
                        "desc" in item &&
                        !("steps" in item) &&
                        !("name" in item)
                      );
                    })
                    .map((item) => ({
                      question: item.title,
                      answer: item.desc,
                    }));

                  if (faqItems.length === 0) return [];

                  return (
                    <Accordion
                      key={blockIdx}
                      items={faqItems}
                      type="single"
                      defaultOpenIndex={0}
                      className="w-full"
                    />
                  );
                }

                return [];
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper function to render Social Proof section
function renderSocialProofSection(section: DetailSection, index: number) {
  return (
    <section key={index}>
      <div className="container">
        {section.heading && (
          <div className="mb-12">
            <ModuleTitle
              suppertitle={section.heading.suppertitle}
              title={section.heading.title}
              subtitle={section.heading.subtitle}
              ctaText={section.heading.ctaText}
              ctaHref={section.heading.ctaHref}
              variant={section.heading.variant || "v1"}
            />
          </div>
        )}

        {section.content && (
          <div className="space-y-8">
            {section.content.map((block, blockIdx) => {
              if (block.type === "testimonial") {
                return (
                  <div
                    key={blockIdx}
                    className="bg-white rounded-3xl p-8 border border-gray-200"
                  >
                    <div className="mb-4">
                      <Image
                        src="/assets/svg/quote.svg"
                        alt="Quote"
                        width={35}
                        height={35}
                      />
                    </div>
                    <p className="text-lg italic text-gray-700 mb-4">
                      {block.quote}
                    </p>
                    <p className="text-sm text-gray-600">{block.author}</p>
                  </div>
                );
              }

              if (block.type === "case-study") {
                return (
                  <div
                    key={blockIdx}
                    className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-lg mb-2">Client</h5>
                        <p className="text-gray-700">{block.client}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">Project</h5>
                        <p className="text-gray-700">{block.project}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">Solution</h5>
                        <p className="text-gray-700">{block.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">Result</h5>
                        <p className="text-gray-700 font-semibold">
                          {block.result}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              if (block.type === "logos") {
                return (
                  <div
                    key={blockIdx}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  >
                    {block.items.map((logo, logoIdx) => (
                      <div
                        key={logoIdx}
                        className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24"
                      >
                        <span className="text-gray-400 text-sm">{logo}</span>
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        )}

        {/* Show Testimonials component if no custom content */}
        {(!section.content || section.content.length === 0) && <Testimonials />}
      </div>
    </section>
  );
}

// Helper function to render CTA section
function renderCTASection(section: DetailSection, index: number) {
  return (
    <section key={index} className="bg-blue-600 text-white">
      <div className="container py-16">
        {section.heading && (
          <div className="max-w-3xl mx-auto text-center">
            <ModuleTitle
              suppertitle={section.heading.suppertitle}
              title={section.heading.title}
              subtitle={section.heading.subtitle}
              variant={section.heading.variant || "v1"}
            />
            {section.heading.ctaText && section.heading.ctaHref && (
              <div className="mt-8">
                <Button
                  href={section.heading.ctaHref}
                  label={section.heading.ctaText}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Render individual section component
function renderSection(
  section: DetailSection,
  index: number,
  service: Service
) {
  switch (index) {
    case 0:
      return (
        <section key={index}>
          <div className="container">
            <div className="grid md:grid-cols-2 items-center gap-10 mb-12">
              <ModuleTitle
                suppertitle={section.heading.suppertitle}
                title={section.heading.title}
                subtitle={section.heading.subtitle}
                ctaText={section.heading.ctaText}
                ctaHref={section.heading.ctaHref}
                variant={section.heading.variant || "v1"}
              />
              <div className="relative">
                <Image
                  src={
                    service.bgImg ||
                    service.iconImage ||
                    "/assets/img/default.png"
                  }
                  alt={service.title}
                  width={900}
                  height={520}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      );

    case 1:
      return (
        <section key={index}>
          <div className="container">
            <div className="grid md:grid-cols-2 items-center gap-12 mb-12">
              <div className="w-full">
                <ModuleTitle
                  suppertitle={section.heading.suppertitle}
                  title={section.heading.title}
                  subtitle={section.heading.subtitle}
                  ctaText={section.heading.ctaText}
                  ctaHref={section.heading.ctaHref}
                  variant={section.heading.variant || "v2"}
                />
                {section.content && (
                  <div className="w-full">
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
                            className="mb-4 list-inside list-disc text-gray-700"
                          >
                            {block.items.map((item, i) => {
                              if (isStepItem(item)) {
                                return (
                                  <li key={i} className="text-[18px]">
                                    {item.desc}
                                  </li>
                                );
                              }
                              if (isPricingTier(item)) {
                                return (
                                  <li key={i} className="text-[18px]">
                                    {item.name} — {item.subtitle} ({item.price})
                                  </li>
                                );
                              }
                              return <li key={i}>{String(item)}</li>;
                            })}
                          </ListTag>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
              <div className="w-full">
                <Image
                  src={
                    service.bgImg ||
                    service.iconImage ||
                    "/assets/img/default.png"
                  }
                  alt={service.title}
                  width={900}
                  height={520}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      );

    case 2:
      return (
        <section key={index}>
          <div className="container">
            <div className="grid md:grid-cols-2 items-center gap-10 mb-12">
              <div className="w-full">
                <Image
                  src={
                    service.bgImg ||
                    service.iconImage ||
                    "/assets/img/default.png"
                  }
                  alt={service.title}
                  width={900}
                  height={520}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="w-full">
                <ModuleTitle
                  suppertitle={section.heading.suppertitle}
                  title={section.heading.title}
                  subtitle={section.heading.subtitle}
                  ctaText={section.heading.ctaText}
                  ctaHref={section.heading.ctaHref}
                  variant={section.heading.variant || "v3"}
                />
                {section.content && (
                  <div className="w-full">
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
                            {block.items.map((item, i) => {
                              if (isStepItem(item))
                                return <li key={i}>{item.desc}</li>;
                              if (isPricingTier(item))
                                return (
                                  <li key={i}>
                                    {item.name} — {item.subtitle} ({item.price})
                                  </li>
                                );
                              return <li key={i}>{String(item)}</li>;
                            })}
                          </ListTag>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );

    case 3:
      return (
        <section key={index}>
          <div className="container">
            {section.heading && (
              <div className="mb-12">
                <ModuleTitle
                  suppertitle={section.heading.suppertitle}
                  title={section.heading.title}
                  subtitle={section.heading.subtitle}
                  ctaText={section.heading.ctaText}
                  ctaHref={section.heading.ctaHref}
                  variant={section.heading.variant || "v3"}
                />
              </div>
            )}
            {section.content && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.content.flatMap((block, blockIdx) =>
                  block.type === "list" && block.ordered
                    ? block.items.map((item, itemIdx) => {
                        if (isStepItem(item)) {
                          return (
                            <div
                              key={`${blockIdx}-${itemIdx}`}
                              className="rounded-3xl p-6 flex flex-col bg-white"
                            >
                              <div className="text-sm text-title px-3 py-1 mb-8 bg-amber-200 rounded-full w-max">
                                {item.steps}
                              </div>
                              <h6 className="mb-6">{item.title}</h6>
                              <p>{item.desc}</p>
                            </div>
                          );
                        }
                        if (isPricingTier(item)) {
                          return (
                            <div
                              key={`${blockIdx}-${itemIdx}`}
                              className="rounded-3xl p-6 flex flex-col bg-white shadow-lg"
                            >
                              <h4 className="text-xl font-semibold mb-2">
                                {item.name}
                              </h4>
                              <p className="text-gray-600 mb-4">
                                {item.subtitle}
                              </p>
                              <span className="text-lg font-bold text-title">
                                {item.price}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <div
                            key={`${blockIdx}-${itemIdx}`}
                            className="rounded-3xl p-6 flex flex-col bg-white"
                          >
                            <p>{String(item)}</p>
                          </div>
                        );
                      })
                    : []
                )}
              </div>
            )}
          </div>
        </section>
      );

    case 4:
      // Pricing Section
      return (
        <section key={index}>
          <div className="container">
            {section.heading && (
              <div className="mb-12">
                <ModuleTitle
                  suppertitle={section.heading.suppertitle}
                  title={section.heading.title}
                  subtitle={section.heading.subtitle}
                  ctaText={section.heading.ctaText}
                  ctaHref={section.heading.ctaHref}
                  variant={section.heading.variant || "v1"}
                />
              </div>
            )}

            {section.content && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.content.flatMap((block, blockIdx) => {
                  // Handle pricing-table type
                  if (block.type === "pricing-table") {
                    return block.items.map((tier, i) => (
                      <div
                        key={`${blockIdx}-${i}`}
                        className="rounded-3xl p-6 flex flex-col bg-white shadow-lg relative"
                      >
                        {tier.tag && (
                          <span className="absolute top-4 right-4 bg-amber-200 text-title text-xs font-semibold px-3 py-1 rounded-full">
                            {tier.tag}
                          </span>
                        )}
                        <h4 className="text-xl font-semibold mb-2">
                          {tier.name}
                        </h4>
                        <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                        <span className="text-lg font-bold text-title">
                          {tier.price}
                        </span>
                      </div>
                    ));
                  }

                  // Handle list type with pricing tiers
                  if (block.type === "list") {
                    const pricingTiers = block.items.filter(isPricingTier);

                    if (pricingTiers.length > 0) {
                      return pricingTiers.map((tier, i) => (
                        <div
                          key={`${blockIdx}-${i}`}
                          className="rounded-3xl p-6 flex flex-col bg-white shadow-lg"
                        >
                          {tier.tag && (
                            <span className="bg-amber-200 text-title text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">
                              {tier.tag}
                            </span>
                          )}
                          <h4 className="text-xl font-semibold mb-2">
                            {tier.name}
                          </h4>
                          <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                          <span className="text-lg font-bold text-title">
                            {tier.price}
                          </span>
                        </div>
                      ));
                    }
                  }

                  return [];
                })}
              </div>
            )}
          </div>
        </section>
      );

    case 5:
      // FAQ Section
      return renderFAQSection(section, index);

    case 6:
      // Check if this is FAQ or Social Proof section
      const isFAQAt6 =
        section.content?.some(
          (block) =>
            block.type === "list" && block.items.some((item) => isFAQItem(item))
        ) ?? false;

      if (isFAQAt6) {
        // FAQ Section (at index 6)
        return renderFAQSection(section, index);
      }

      // Social Proof Section (Testimonials)
      return renderSocialProofSection(section, index);

    case 7:
      // FAQ Section (at index 7)
      return renderFAQSection(section, index);

    case 8:
      // CTA Section
      return renderCTASection(section, index);

    default:
      // Check if this is a FAQ section by looking for FAQ items
      const hasFAQItems =
        section.content?.some(
          (block) =>
            block.type === "list" && block.items.some((item) => isFAQItem(item))
        ) ?? false;

      // Check if this is a Social Proof section
      const hasSocialProof =
        section.content?.some(
          (block) =>
            block.type === "testimonial" ||
            block.type === "case-study" ||
            block.type === "logos"
        ) ?? false;

      // Check if this is a Pricing section
      const hasPricing =
        section.content?.some(
          (block) =>
            block.type === "pricing-table" ||
            (block.type === "list" &&
              block.items.some((item) => isPricingTier(item)))
        ) ?? false;

      // Check if this is a Process section (has ordered list with step items)
      const hasProcessSteps =
        section.content?.some(
          (block) =>
            block.type === "list" &&
            block.ordered === true &&
            block.items.some((item) => isStepItem(item))
        ) ?? false;

      // Check if this is a CTA section (has ctaText but no content)
      const isCTASection =
        section.heading.ctaText &&
        (!section.content || section.content.length === 0);

      if (hasFAQItems) {
        // FAQ Section
        return renderFAQSection(section, index);
      }

      if (hasPricing) {
        // Pricing Section
        return (
          <section key={index}>
            <div className="container">
              {section.heading && (
                <div className="mb-12">
                  <ModuleTitle
                    suppertitle={section.heading.suppertitle}
                    title={section.heading.title}
                    subtitle={section.heading.subtitle}
                    ctaText={section.heading.ctaText}
                    ctaHref={section.heading.ctaHref}
                    variant={section.heading.variant || "v1"}
                  />
                </div>
              )}

              {section.content && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content.flatMap((block, blockIdx) => {
                    // Handle pricing-table type
                    if (block.type === "pricing-table") {
                      return block.items.map((tier, i) => (
                        <div
                          key={`${blockIdx}-${i}`}
                          className="rounded-3xl p-6 flex flex-col bg-white shadow-lg relative"
                        >
                          {tier.tag && (
                            <span className="absolute top-4 right-4 bg-amber-200 text-title text-xs font-semibold px-3 py-1 rounded-full">
                              {tier.tag}
                            </span>
                          )}
                          <h4 className="text-xl font-semibold mb-2">
                            {tier.name}
                          </h4>
                          <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                          <span className="text-lg font-bold text-title">
                            {tier.price}
                          </span>
                        </div>
                      ));
                    }

                    // Handle list type with pricing tiers
                    if (block.type === "list") {
                      const pricingTiers = block.items.filter(isPricingTier);

                      if (pricingTiers.length > 0) {
                        return pricingTiers.map((tier, i) => (
                          <div
                            key={`${blockIdx}-${i}`}
                            className="rounded-3xl p-6 flex flex-col bg-white shadow-lg"
                          >
                            {tier.tag && (
                              <span className="bg-amber-200 text-title text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">
                                {tier.tag}
                              </span>
                            )}
                            <h4 className="text-xl font-semibold mb-2">
                              {tier.name}
                            </h4>
                            <p className="text-gray-600 mb-4">
                              {tier.subtitle}
                            </p>
                            <span className="text-lg font-bold text-title">
                              {tier.price}
                            </span>
                          </div>
                        ));
                      }
                    }

                    return [];
                  })}
                </div>
              )}
            </div>
          </section>
        );
      }

      if (hasProcessSteps) {
        // Process Section
        return (
          <section key={index}>
            <div className="container">
              {section.heading && (
                <div className="mb-12">
                  <ModuleTitle
                    suppertitle={section.heading.suppertitle}
                    title={section.heading.title}
                    subtitle={section.heading.subtitle}
                    ctaText={section.heading.ctaText}
                    ctaHref={section.heading.ctaHref}
                    variant={section.heading.variant || "v1"}
                  />
                </div>
              )}
              {section.content && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.content.flatMap((block, blockIdx) =>
                    block.type === "list" && block.ordered
                      ? block.items.map((item, itemIdx) => {
                          if (isStepItem(item)) {
                            return (
                              <div
                                key={`${blockIdx}-${itemIdx}`}
                                className="rounded-3xl p-6 flex flex-col bg-white"
                              >
                                <div className="text-sm text-title px-3 py-1 mb-8 bg-amber-200 rounded-full w-max">
                                  {item.steps}
                                </div>
                                <h6 className="mb-6">{item.title}</h6>
                                <p>{item.desc}</p>
                              </div>
                            );
                          }
                          return null;
                        })
                      : []
                  )}
                </div>
              )}
            </div>
          </section>
        );
      }

      if (hasSocialProof) {
        // Social Proof Section
        return renderSocialProofSection(section, index);
      }

      if (isCTASection) {
        // CTA Section
        return renderCTASection(section, index);
      }

      // Default section layout
      return (
        <section key={index}>
          <div className="container">
            <div className="grid md:grid-cols-2 items-center gap-10 mb-12">
              <ModuleTitle
                suppertitle={section.heading.suppertitle}
                title={section.heading.title}
                subtitle={section.heading.subtitle}
                ctaText={section.heading.ctaText}
                ctaHref={section.heading.ctaHref}
                variant={section.heading.variant || "v1"}
              />
              <div className="relative">
                <Image
                  src={
                    service.bgImg ||
                    service.iconImage ||
                    "/assets/img/default.png"
                  }
                  alt={service.title}
                  width={900}
                  height={520}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  return (
    <>
      {service.detailsSections.map((section, idx) =>
        renderSection(section, idx, service)
      )}
    </>
  );
}
