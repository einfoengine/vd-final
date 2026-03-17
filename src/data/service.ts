import type { BlogSection } from "@/types/blog";

export interface ServiceData {
  id: number;
  title: string;
  description?: string;
  iconImage: string;
  bgImg?: string;
  slug?: string;
  backgroundColor: string;
  textColor: string;
  deliverables?: string[];
 
  sections?: BlogSection[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Wrong Strategy",
    slug: "content-creation",
    // description: "The Conversion Clarity Blueprint. Most of the startups throw stones in the dark, without knowing the market and its audience behavior. Without knowing its own position in the market. Without knowing the dos and don'ts. We help you audit your ecosystem to architect maximum ROI.",
    iconImage: "/assets/svg/digitalmarketing.svg",
    backgroundColor: "linear-gradient(135deg, #8B5CF6, #A855F7)",
    textColor: "white",
    // deliverables: [
    //   "Complete website and marketing audit",
    //   "Competitor analysis report",
    //   "Target audience identification",
    //   "Marketing strategy roadmap",
    //   "ROI optimization plan",
    //   "Monthly performance tracking setup",
    // ],
  },
  {
    id: 2,
    title: "Poor content",
    slug: "ecommerce-development",
    // description: "Create engaging and compelling content that resonates with your audience. From copywriting to video production, we develop high-quality content that tells your brand story and drives conversions across all digital channels.",
    iconImage: "/assets/svg/multimedia.svg",
    backgroundColor: "linear-gradient(135deg, #FFC700, #FFD700)",
    textColor: "#0A1F33",
    // deliverables: [
    //   "SEO-optimized copywriting",
    //   "Video content production",
    //   "Social media content",
    //   "Blog posts and articles",
    //   "Infographics and visual content",
    //   "Content strategy development",
    // ],
  },
  {
    id: 3,
    title: "Inconsistency & irregularity",
    slug: "business-website-development",
    // description: "Maximize your ROI across all digital marketing platforms. We manage and optimize your campaigns on social media, search engines, email, and other digital channels to ensure consistent brand presence and measurable results.",
    iconImage: "/assets/svg/marketingplatform.svg",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    textColor: "white",
    // deliverables: [
    //   "Social media management",
    //   "Google Ads campaign management",
    //   "Facebook & Instagram advertising",
    //   "Email marketing automation",
    //   "Analytics and performance tracking",
    //   "Platform integration and optimization",
    // ],
  },
  {
    id: 3,
    title: "Promotions",
    slug: "business-website-development",
    // description: "Maximize your ROI across all digital marketing platforms. We manage and optimize your campaigns on social media, search engines, email, and other digital channels to ensure consistent brand presence and measurable results.",
    iconImage: "/assets/svg/marketingplatform.svg",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    textColor: "white",
    // deliverables: [
    //   "Social media management",
    //   "Google Ads campaign management",
    //   "Facebook & Instagram advertising",
    //   "Email marketing automation",
    //   "Analytics and performance tracking",
    //   "Platform integration and optimization",
    // ],
  },
  {
    id: 3,
    title: "Multi platform presence",
    slug: "business-website-development",
    // description: "Maximize your ROI across all digital marketing platforms. We manage and optimize your campaigns on social media, search engines, email, and other digital channels to ensure consistent brand presence and measurable results.",
    iconImage: "/assets/svg/marketingplatform.svg",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    textColor: "white",
    // deliverables: [
    //   "Social media management",
    //   "Google Ads campaign management",
    //   "Facebook & Instagram advertising",
    //   "Email marketing automation",
    //   "Analytics and performance tracking",
    //   "Platform integration and optimization",
    // ],
  },
  {
    id: 3,
    title: "Optimization",
    slug: "business-website-development",
    // description: "Maximize your ROI across all digital marketing platforms. We manage and optimize your campaigns on social media, search engines, email, and other digital channels to ensure consistent brand presence and measurable results.",
    iconImage: "/assets/svg/marketingplatform.svg",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    textColor: "white",
    // deliverables: [
    //   "Social media management",
    //   "Google Ads campaign management",
    //   "Facebook & Instagram advertising",
    //   "Email marketing automation",
    //   "Analytics and performance tracking",
    //   "Platform integration and optimization",
    // ],
  },
];
