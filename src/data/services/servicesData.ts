import growthManagement from "./growthManagement";
import projectBased from "./projectBased";
import strategyConsulting from "./strategyConsulting";

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

interface ListItem {
  steps: string;
  title: string;
  desc: string;
}

interface ContentList {
  type: "list";
  ordered?: boolean;
  items: (string | ListItem | PricingTier | FAQItem)[];
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

interface FAQItem {
  title: string;
  desc: string;
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

export interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  tag?: string;
  desc?: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  bgImg: string;
  iconImage: string;
  buttonText: string;
  categories: string;
  detailsSections: DetailSection[];
  pricing?: PricingTier[];
}

export const servicesData: Record<string, Service> = {
  ...(strategyConsulting as Record<string, Service>),
  ...(growthManagement as Record<string, Service>),
  ...(projectBased as Record<string, Service>),
};
