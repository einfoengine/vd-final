// src/data/allservices.ts
export interface ContentBlock {
  type: "paragraph" | "list" | "image";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  ordered?: boolean;
}

export interface Card {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceData {
  id: number;
  title: string;
  slug: string;
  description: string;
  bgImg?: string;
  iconImage?: string;
  backgroundColor?: string;
  textColor?: string;
  deliverables?: string[];
  cards?: Card[];
  sections?: {
    heading: string;
    content: ContentBlock[];
  }[];
  buttonText?: string;
}

// Slug-keyed object (not array)
export const allservicesData: Record<string, ServiceData> = {
  "graphic-design": {
    id: 1,
    title: "Graphic Design",
    slug: "graphic-design",
    description:
      "Brand-aligned visuals for marketing, social, and print with pixel-perfect execution.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/graphic-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["Social posts", "Marketing banners", "Print layouts"],
    buttonText: "Get Started",
    cards: [
      {
        title: "User Research & Strategy",
        desc: "We uncover user needs.",
        icon: "/assets/img/icon/card.svg",
      },
      {
        title: "Information Architecture & Flows",
        desc: "Organize content and journeys.",
        icon: "/assets/img/icon/card.svg",
      },
    ],
    sections: [
      {
        heading: "Research Insights",
        content: [
          {
            type: "paragraph",
            content: "We conduct surveys, interviews, and usability tests.",
          },
          {
            type: "list",
            ordered: true,
            items: ["User interviews", "Behavior tracking", "Surveys"],
          },
        ],
      },
      {
        heading: "What makes us different?",
        content: [
          {
            type: "paragraph",
            content: "Our design process ensures fast iteration and quality.",
          },
          {
            type: "image",
            src: "/assets/img/services/s-bg.svg",
            alt: "Design process",
            width: 800,
            height: 400,
          },
        ],
      },
    ],
  },

  "ui-ux-design": {
    id: 2,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "User-centered product design for websites and apps, from flows to UI systems.",
    bgImg: "/assets/img/services/uiux-bg.svg",
    iconImage: "/assets/img/services/uiux-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["User flows", "Wireframes", "Design system"],
    buttonText: "Get Started",
    cards: [
      {
        title: "User Research & Strategy",
        desc: "We uncover user needs.",
        icon: "/assets/img/icon/card.svg",
      },
      {
        title: "Information Architecture & Flows",
        desc: "Organize content and journeys.",
        icon: "/assets/img/icon/card.svg",
      },
    ],
    sections: [
      {
        heading: "Research Insights",
        content: [
          {
            type: "paragraph",
            content: "We conduct surveys, interviews, and usability tests.",
          },
          {
            type: "list",
            ordered: true,
            items: ["User interviews", "Behavior tracking", "Surveys"],
          },
        ],
      },
      {
        heading: "Design Process",
        content: [
          {
            type: "paragraph",
            content: "Our design process ensures fast iteration and quality.",
          },
          {
            type: "image",
            src: "/assets/img/services/process.png",
            alt: "Design process",
            width: 800,
            height: 400,
          },
        ],
      },
    ],
  },

  "motion-graphics": {
    id: 3,
    title: "Motion Graphics",
    slug: "motion-graphics",
    description:
      "Animated assets for ads, product explainers, reels, and brand storytelling.",
    bgImg: "/assets/img/services/motion-bg.svg",
    iconImage: "/assets/img/services/motion-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["Explainer videos", "Logo animations", "Ad creatives"],
    buttonText: "Get Started",
  },

  "brand-identity-design": {
    id: 4,
    title: "Brand Identity Design",
    slug: "brand-identity-design",
    description:
      "Cohesive identity systems: logo, typography, color, and brand guidelines.",
    bgImg: "/assets/img/services/brand-bg.svg",
    iconImage: "/assets/img/services/brand-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["Logo suite", "Brand guide", "Stationery"],
    buttonText: "Get Started",
    cards: [
      {
        title: "User Research & Strategy",
        desc: "We uncover user needs.",
        icon: "/assets/img/icon/card.svg",
      },
      {
        title: "Information Architecture & Flows",
        desc: "Organize content and journeys.",
        icon: "/assets/img/icon/card.svg",
      },
    ],
    sections: [
      {
        heading: "Research Insights",
        content: [
          {
            type: "paragraph",
            content: "We conduct surveys, interviews, and usability tests.",
          },
          {
            type: "list",
            ordered: true,
            items: ["User interviews", "Behavior tracking", "Surveys"],
          },
        ],
      },
      {
        heading: "Design Process",
        content: [
          {
            type: "paragraph",
            content: "Our design process ensures fast iteration and quality.",
          },
          {
            type: "image",
            src: "/assets/img/services/process.png",
            alt: "Design process",
            width: 800,
            height: 400,
          },
        ],
      },
    ],
  },

  "infographic-design-illustration": {
    id: 5,
    title: "Infographic Design & Illustration",
    slug: "infographic-design-illustration",
    description:
      "Data stories and custom illustrations that clarify complex ideas at a glance.",
    bgImg: "/assets/img/services/infographic-bg.svg",
    iconImage: "/assets/img/services/infographic-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["Infographics", "Icon sets", "Editorial art"],
    buttonText: "Get Started",
  },

  "print-merchandise-packaging-design": {
    id: 6,
    title: "Print, Merchandise & Packaging Design",
    slug: "print-merchandise-packaging-design",
    description:
      "Tangible brand experiences across packaging, merchandise, and all print formats.",
    bgImg: "/assets/img/services/packaging-bg.svg",
    iconImage: "/assets/img/services/packaging-icon.svg",
    backgroundColor: "#0A0A0A",
    textColor: "white",
    deliverables: ["Packaging", "Apparel", "Large format"],
    buttonText: "Get Started",
  },
};

export default allservicesData;
