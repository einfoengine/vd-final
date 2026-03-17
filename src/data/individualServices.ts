export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  unit?: string;
  description?: string;
  isMonthly?: boolean;
}

export const individualServices: Record<string, ServiceItem[]> = {
  "Social Media Marketing": [
    { id: "smm-1", name: "Social Media Platform Management", price: 50, unit: "per platform/mo", isMonthly: true, description: "Full management including posting and engagement" },
    { id: "smm-2", name: "Static Post Design", price: 20, unit: "per post", description: "High-quality static visual for social media" },
    { id: "smm-3", name: "Animated Post / GIF", price: 40, unit: "per post", description: "Engaging motion graphic post" },
    { id: "smm-4", name: "Short Video / Reel (up to 30s)", price: 100, unit: "per video", description: "Edited vertical video for Reels/TikTok" },
    { id: "smm-5", name: "Community Management", price: 200, unit: "per month", isMonthly: true, description: "Replying to comments and messages" },
    { id: "smm-6", name: "Ad Campaign Setup", price: 150, unit: "per campaign", description: "Strategy and setup of one ad campaign" },
  ],
  "Content & Copywriting": [
    { id: "cnt-1", name: "Blog Post (500 words)", price: 50, unit: "per post", description: "SEO-optimized article" },
    { id: "cnt-2", name: "Blog Post (1000 words)", price: 90, unit: "per post", description: "In-depth SEO article" },
    { id: "cnt-3", name: "Website Copy", price: 150, unit: "per page", description: "Compelling copy for landing pages" },
    { id: "cnt-4", name: "Email Newsletter", price: 40, unit: "per email", description: "Engaging email copy" },
  ],
  "SEO & Web": [
    { id: "seo-1", name: "SEO Audit", price: 300, unit: "one-time", description: "Comprehensive site analysis" },
    { id: "seo-2", name: "Monthly SEO Maintenance", price: 500, unit: "per month", isMonthly: true, description: "On-page, technical, and reporting" },
    { id: "web-1", name: "Landing Page Design & Dev", price: 600, unit: "per page", description: "Conversion-focused landing page" },
    { id: "web-2", name: "Business Website (5 pages)", price: 1500, unit: "one-time", description: "Full website design and development" },
  ],
  "Video & Animation": [
    { id: "vid-1", name: "2D Animation", price: 550, unit: "per 30s", description: "Custom 2D animated explainer" },
    { id: "vid-2", name: "Video Editing", price: 200, unit: "per minute", description: "Professional editing of raw footage" },
    { id: "vid-3", name: "Motion Graphics", price: 300, unit: "per 30s", description: "Logo reveals, intros, etc." },
  ]
};
