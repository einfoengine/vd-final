export interface GrowthAccordionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  badge: string;
  accentColor: string;
}

export const growthAccordionData: GrowthAccordionItem[] = [
  {
    id: "launch",
    title: "Create & Launch Your Store",
    subtitle: "Foundation First",
    description:
      "Craft a storefront that mirrors your brand. We align strategy, design, and copy so every visitor instantly understands your offer and next step.",
    bullets: [
      "Brand audit + narrative positioning",
      "UX-first layouts for every funnel stage",
      "No-code friendly build handoff",
    ],
    image: "/assets/img/sticky-cards/active.svg",
    badge: "Step 01",
    accentColor: "#f97316",
  },
  {
    id: "design",
    title: "Design Products That Sell",
    subtitle: "Offer Architecture",
    description:
      "Transform raw ideas into irresistible offers with clear pricing, tiering, and proof. We package every solution for conversion readiness.",
    bullets: [
      "Offer ladder + pricing psychology",
      "Creative direction for promos",
      "Conversion assets & scripts",
    ],
    image: "/assets/img/sticky-cards/truth.svg",
    badge: "Step 02",
    accentColor: "#facc15",
  },
  {
    id: "promote",
    title: "Promote Relentlessly",
    subtitle: "Growth Engine",
    description:
      "Always-on campaigns blend paid, lifecycle, and community to create 400% more purchase-ready moments across every touchpoint.",
    bullets: [
      "Acquisition & retargeting playbooks",
      "Email, SMS & social automation",
      "Weekly creative experimentation",
    ],
    image: "/assets/img/sticky-cards/rocket.svg",
    badge: "Step 03",
    accentColor: "#a855f7",
  },
  {
    id: "fulfill",
    title: "Fulfill & Scale Fast",
    subtitle: "Delivery Ops",
    description:
      "We plug into your team to ship fast, capture testimonials, and unlock upsell opportunities while protecting customer experience.",
    bullets: [
      "CS + fulfillment workflows",
      "Live performance dashboards",
      "Quarterly optimization roadmap",
    ],
    image: "/assets/img/sticky-cards/customers.svg",
    badge: "Step 04",
    accentColor: "#38bdf8",
  },
];


