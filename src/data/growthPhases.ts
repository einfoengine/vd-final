
export interface GrowthPhaseFeatures {
  title: string;
  description: string;
}

export interface GrowthPhaseItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  features?: GrowthPhaseFeatures[];
}

export const growthPhases: GrowthPhaseItem[] = [
  {
    id: 1,
    title: "Phase 1",
    subtitle: "Audit & Strategy",
    description: "We identify gaps in your current presence and craft a tailored roadmap to align meaningful KPIs.",
    icon: "/assets/svg/digitalstrategy.svg", 
    color: "#fdb400", // Theme yellow
    features: [
      {
        title: "Comprehensive SEO Audit",
        description: "In-depth analysis of your website's health, technical structure, and keyword performance to identify growth opportunities."
      },
      {
        title: "Competitor Analysis",
        description: "Benchmarking your brand against industry leaders to uncover gaps in their strategies that you can exploit."
      },
      {
        title: "Funnel Review",
        description: "Mapping your customer journey to identify friction points and optimize for higher conversion rates."
      }
    ]
  },
  {
    id: 2,
    title: "Phase 2",
    subtitle: "Effective Content",
    description: "We build authority through high-quality, targeted content that resonates with your audience.",
    icon: "/assets/svg/execution.svg",
    color: "#c7f664", // Secondary lime
    features: [
      {
        title: "Social Media Management",
        description: "Strategic content planning and community engagement to build a loyal following across platforms."
      },
      {
        title: "Blog & Article Writing",
        description: "SEO-optimized thought leadership pieces that drive organic traffic and establish authority."
      },
      {
        title: "Multimedia Production",
        description: "High-quality video and visual assets designed to capture attention and communicate your value proposition."
      }
    ]
  },
  {
    id: 3,
    title: "Phase 3",
    subtitle: "Generate Leads",
    description: "We accelerate growth by deploying targeted campaigns that drive high-quality traffic to your funnel.",
    icon: "/assets/svg/digital-marketing.svg",
    color: "#fdb400", // Theme yellow (cycle)
    features: [
      {
        title: "Paid Advertising (PPC)",
        description: "Laser-focused campaigns on Google & Social platforms to capture immediate demand."
      },
      {
        title: "Social Selling",
        description: "Leveraging LinkedIn and other networks to build relationships and generate B2B opportunities."
      },
      {
        title: "Email Marketing Automation",
        description: "Nurturing cold prospects into warm leads through personalized, automated sequences."
      }
    ]
  },
  {
    id: 4,
    title: "Phase 4",
    subtitle: "Optimize Conversion",
    description: "We maximize ROI by fine-tuning every touchpoint to turn more visitors into paying customers.",
    icon: "/assets/svg/data-driven-strategy.svg",
    color: "#c7f664", // Secondary lime (cycle)
    features: [
      {
        title: "A/B Testing",
        description: "Scientific testing of headlines, creatives, and layouts to prove what works best."
      },
      {
        title: "User Behavior Analysis",
        description: "Using heatmaps and recording sessions to understand how users interact with your site."
      },
      {
        title: "Funnel Optimization",
        description: "Streamlining the checkout or inquiry process to reduce drop-offs and friction."
      }
    ]
  },
  {
    id: 5,
    title: "Phase 5",
    subtitle: "Retention & Loyalty",
    description: "We turn customers into brand advocates through exceptional post-purchase experiences and engagement.",
    icon: "/assets/svg/client-partnership.svg",
    color: "#0a0c00", // Dark (cycle)
    features: [
      {
        title: "Lifecycle Marketing",
        description: "Strategies to increase Customer Lifetime Value (CLV) through up-sells and cross-sells."
      },
      {
        title: "Reputation Management",
        description: "Monitoring and improving your online reputation to build long-term trust."
      },
      {
        title: "Community Building",
        description: "Creating exclusive spaces for your customers to connect with your brand and each other."
      }
    ]
  },
];
