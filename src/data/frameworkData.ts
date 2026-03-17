export interface PhaseSection {
  title: string;
  content: string;
}

export interface PhaseContent {
  title: string;
  sections: PhaseSection[];
}

export interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  serviceList?: string[];
  icon: string;
  color: string;
  backgroundColor: string;
  content: PhaseContent;
}

export const frameworkData: Phase[] = [
  {
    id: 1,
    title: "Phase I",
    subtitle: "Digital Strategy & Foundation",
    description:
      "Define your digital footprint and understand the online landscape before launching campaigns.",
    icon: "/assets/svg/digitalstrategy.svg",
    color: "#ffffff",
    backgroundColor: "linear-gradient(135deg, #667eea, #764ba2)",
    content: {
      title: "Digital Strategy & Foundation",
      sections: [
        {
          title: "Digital Ecosystem Analysis",
          content:
            "Owned Media Audit: Evaluate your current digital assets...\n\nDigital Competitor Analysis: Analyze competitors' online strategies...",
        },
        {
          title: "Objectives & Digital KPIs",
          content:
            "Set SMART goals specific to digital channels...\n\nDefine primary Key Performance Indicators (KPIs)...",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Phase II",
    subtitle: "Execution & Channel Activation",
    description:
      "Build the customer journey across various digital channels and launch your campaigns.",
    icon: "/assets/svg/execution.svg",
    color: "#ffffff",
    backgroundColor: "linear-gradient(135deg, #f093fb, #f5576c)",
    content: {
      title: "Execution & Channel Activation",
      sections: [
        {
          title: "The Digital Marketing Funnel",
          content:
            "Structure your activities around a multi-stage funnel...\n\nAwareness (Top of Funnel)...",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Phase III",
    subtitle: "Measurement, Analysis & Optimization",
    description:
      "Continuous loop of data analysis and improvement, the core strength of digital marketing.",
    icon: "/assets/svg/analysis.svg",
    color: "#ffffff",
    backgroundColor: "linear-gradient(135deg, #4facfe, #00f2fe)",
    content: {
      title: "Measurement, Analysis & Optimization",
      sections: [
        {
          title: "Data Collection & Tracking",
          content:
            "Implement robust tracking including Google Analytics 4, Google Tag Manager...",
        },
      ],
    },
  },
];


