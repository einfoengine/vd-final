export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Eligentic Rebranding",
    description: "Complete brand overhaul and digital identity design for a leading tech firm.",
    type: "image",
    src: "/assets/portfolio/Eligentic.png",
    link: "/case-studies/eligentic",
  },
  {
    id: 2,
    title: "Paytro Fintech App",
    description: "Secure and intuitive mobile banking interface design with real-time analytics.",
    type: "image",
    src: "/assets/portfolio/Paytro.png",
    link: "/case-studies/paytro",
  },
  {
    id: 3,
    title: "Medica Health Platform",
    description: "Patient-centric telemedicine platform connecting doctors and patients seamlessly.",
    type: "image",
    src: "/assets/portfolio/Medica.png",
  },
  {
    id: 4,
    title: "Glownest Beauty Store",
    description: "High-conversion e-commerce design for a premium beauty and cosmetic brand.",
    type: "image",
    src: "/assets/portfolio/Glownest.png",
    link: "/case-studies/glownest",
  },
  {
    id: 5,
    title: "LiveChat SaaS",
    description: "Modern dashboard UI for a customer support and engagement tool.",
    type: "image",
    src: "/assets/portfolio/Livechat.png",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Viral social media creative strategy and content production.",
    type: "image",
    src: "/assets/portfolio/Social_1.png",
  },
  {
    id: 7,
    title: "Zaag Showreel",
    description: "Dynamic video editing and motion graphics for brand storytelling.",
    type: "image",
    src: "/assets/portfolio/Zaag_showrell.png", // Corrected typo in filename mapping if needed, assuming user provided list was accurate
  },
  {
    id: 8,
    title: "OVC Brand Identity",
    description: "Minimalist and impactful corporate identity design.",
    type: "image",
    src: "/assets/portfolio/ovc_1.png",
  },
  {
    id: 9,
    title: "Next Crute",
    description: "Creative direction and visual design for a next-gen digital product.",
    type: "image",
    src: "/assets/portfolio/Next_crute_thumbnail.png",
  },
];
