export interface StickyCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  cardBackgroundColor: string;
  icon?: string;
}

export const stickyCardsData: StickyCardData[] = [
  {
    id: 1,
    title: "Fragmented Presence",
    description:
      "Being invisible where your customers are is costing you growth. If you are only present on a single platform, you are missing a massive audience. In today's ecosystem, your customers are everywhere—LinkedIn, Instagram, Google, TikTok. You must be present across these platforms to influence their journey with the right strategy.",
    image: "/assets/img/sticky-cards/truth.svg",
    backgroundColor: "linear-gradient(135deg, #8B5CF6, #A855F7)",
    cardBackgroundColor: "#8B5CF6",
    textColor: "white",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Generic Content",
    description:
      "Content that gets scrolled past is wasted budget. There should be different types of content for different platforms, all designed to be psychologically effective. A successful strategy requires a diverse mix of assets—compelling text, static images, dynamic animations, and high-quality videos—all working together to capture attention.",
    image: "/assets/img/sticky-cards/right-content.svg",
    backgroundColor: "linear-gradient(135deg, #0A1F33, #1a2f43)",
    cardBackgroundColor: "#0A1F33",
    textColor: "white",
    icon: "✨",
  },
  {
    id: 3,
    title: "Missed Audiences",
    description:
      "Targeting everyone means reaching no one. Platforms are where your audience finds you, but their mindset changes with each one. On LinkedIn, they are professional; on TikTok, they want entertainment. By being present on all relevant platforms with precision segmentation, you build trust and establish authority at every stage.",
    image: "/assets/img/sticky-cards/customers.svg",
    backgroundColor: "linear-gradient(135deg, #FFC700, #FFD700)",
    cardBackgroundColor: "#FFC700",
    textColor: "#0A1F33",
    icon: "🌍",
  },
  {
    id: 4,
    title: "Inconsistent Engagement",
    description:
      "Ghosting your community kills trust. An inactive platform is worse than no platform at all. When potential customers land on your page and find it silent, they lose confidence. A platform is a commitment requiring regular posts and consistent engagement to signal that your brand is alive, healthy, and ready to do business.",
    image: "/assets/img/sticky-cards/active.svg",
    backgroundColor: "linear-gradient(135deg, #E53935, #FF6B6B)",
    cardBackgroundColor: "#E53935",
    textColor: "white",
    icon: "🔥",
  },
  {
    id: 5,
    title: "Organic-Only Limits",
    description:
      "Relying solely on algorithms is like building a race car without fuel. Organic content builds your foundation, but paid media is the accelerator. Strategic media buying allows you to bypass algorithms, precisely target your ideal customer, and drive high-intent traffic directly to your offers, guaranteeing your best content reaches the right people.",
    image: "/assets/img/sticky-cards/rocket.svg",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    cardBackgroundColor: "#06b6d4",
    textColor: "white",
    icon: "🚀",
  },
  {
    id: 6,
    title: "Leaky Funnels",
    description:
      "Traffic that doesn't convert is vanity. The ultimate goal is to hook your target audience into a funnel, nurture them with various content, and build undeniable influence. This cohesive, active, and amplified approach is no longer optional—it is the new reality of how you win in the digital age.",
    image: "/assets/img/sticky-cards/funnel.svg",
    backgroundColor: "linear-gradient(135deg, #10B981, #059669)",
    cardBackgroundColor: "#10B981",
    textColor: "white",
    icon: "🎯",
  },
];
