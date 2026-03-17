// types.ts
export interface Heading {
  suppertitle?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "v1" | "v2" | "v3";
}

export interface ContentParagraph {
  type: "paragraph";
  content: string;
}

export interface ListItem {
  steps: string;
  title: string;
  desc: string;
}

export interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  tag?: string;
}

export interface FAQItem {
  title: string;
  desc: string;
}

export interface ContentList {
  type: "list";
  ordered?: boolean;
  items: (string | ListItem | PricingTier | FAQItem)[];
}

export interface ContentPricing {
  type: "pricing";
  items: PricingTier[];
}

export interface ContentPricingTable {
  type: "pricing-table";
  items: PricingTier[];
}

export interface ContentTestimonial {
  type: "testimonial";
  quote: string;
  author: string;
}

export interface ContentCaseStudy {
  type: "case-study";
  client: string;
  project: string;
  solution: string;
  result: string;
}

export interface ContentLogos {
  type: "logos";
  items: string[];
}

export type Content =
  | ContentParagraph
  | ContentList
  | ContentPricing
  | ContentPricingTable
  | ContentTestimonial
  | ContentCaseStudy
  | ContentLogos;

export interface DetailSection {
  heading: Heading;
  content?: Content[];
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  categories: string;
  description: string;
  bgImg: string;
  iconImage: string;
  buttonText: string;
  detailsSections: DetailSection[];
}

export const servicesData: Record<string, Service> = {
  "digital-marketing-audit": {
    id: 11,
    title: "Digital Marketing Audit",
    slug: "digital-marketing-audit",
    categories: "strategy-&-consulting",
    description:
      "A comprehensive audit uncovering hidden opportunities and costly mistakes in your digital marketing, with a clear, actionable Growth Roadmap.",
    bgImg: "/assets/img/services/digital-audit-bg.svg",
    iconImage: "/assets/img/services/digital-audit-icon.svg",
    buttonText: "Get Your Actionable Audit Plan",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Audit & Insights",
          title:
            "Stop Guessing. Start Growing. Get Your Complete Digital Marketing Audit.",
          subtitle:
            "Our comprehensive audit for businesses in Bangladesh uncovers every hidden opportunity and costly mistake. We deliver a clear, actionable 'Growth Roadmap' that shows you exactly what to fix first.",
          ctaText: "Get Your Actionable Audit Plan",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Is Your Digital Marketing a 'Black Hole' for Money?",
          subtitle:
            "You're putting in the effort, but the results just aren't there. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You are spending money on ads and 'boosting,' but not getting quality leads or sales.",
              "Your website traffic is flat, or worse, declining.",
              "Your competitors seem to be everywhere, and you're struggling to keep up.",
              "You feel 'stuck' and have no idea what to fix first to actually get results.",
              "Your team is busy, but you can't prove the ROI of your marketing spend.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "An Audit is the First Step to Real Growth",
          subtitle:
            "A Vibely Digital audit isn't just a generic report; it's a complete diagnostic and blueprint. We dive deep into your SEO, social media, content, and ad funnels to find out exactly what's working, what's broken, and where your biggest, most profitable opportunities are.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Identify all issues in SEO, social, content, and ads.",
              "Prioritize fixes and highlight 'quick wins' for immediate impact.",
              "Deliver actionable insights rather than just raw data.",
              "Provide a clear Growth Roadmap to increase traffic, leads, and revenue.",
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "How It Works",
          title: "Our 4-Step Audit & Strategy Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Kick-off & Discovery",
                desc: "Deep-dive call to understand your business, customers, goals, and biggest challenges.",
              },
              {
                steps: "Step 2",
                title: "Deep-Dive Analysis",
                desc: "Audit every channel—from technical SEO and backlink profiles to social content and ad performance.",
              },
              {
                steps: "Step 3",
                title: "Data Synthesis & Strategy",
                desc: "Consolidate findings into a prioritized action plan targeting both quick wins and long-term growth.",
              },
              {
                steps: "Step 4",
                title: "Deliver the Roadmap",
                desc: "Present the complete audit in a 60-minute strategy call with actionable recommendations.",
              },
            ],
          },
        ],
      },
      // 5. Pricing Section
      {
        heading: {
          suppertitle: "Audit Packages",
          title: "Find the Audit Package That Fits Your Goal",
          variant: "v1",
        },
        content: [
          {
            type: "pricing-table",
            items: [
              {
                name: "Standard (Channel Audit)",
                price: "BDT 25,000 - 40,000",
                subtitle:
                  "Covers SEO, social, and ad channels with actionable insights for immediate improvements.",
                tag: "Most Popular",
              },
              {
                name: "Premium (Full-Stack Audit)",
                price: "BDT 50,000 - 75,000",
                subtitle:
                  "Complete audit across all marketing channels, including technical SEO, content funnels, social, and paid campaigns with a detailed Growth Roadmap.",
              },
            ],
          },
        ],
      },
      // 6. Social Proof Section
      {
        heading: {
          suppertitle: "Trusted by Growing Brands",
          title: "Trusted by Growing Brands in Bangladesh",
          variant: "v2",
        },
        content: [
          {
            type: "testimonial",
            quote:
              "'Vibely's audit was an eye-opener. They found a major technical SEO issue that three other agencies missed. We implemented their roadmap and our organic leads are up 40% in just two months.'",
            author: "[Client Name], [Title], [Client Company]",
          },
          {
            type: "case-study",
            client: "[A Dhaka-based E-commerce Brand]",
            project: "Premium Full-Stack Audit",
            solution:
              "Identified a 30% ad budget leak and two major checkout friction points.",
            result: "ROAS increased by 2.5x within 60 days.",
          },
          {
            type: "logos",
            items: [
              "Client Logo 1",
              "Client Logo 2",
              "Client Logo 3",
              "Client Logo 4",
            ],
          },
        ],
      },
      // 7. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "How long does the audit take?",
                desc: "Most audits are delivered within 7-14 business days from kick-off.",
              },
              {
                title: "What do I get at the end?",
                desc: "A comprehensive PDF report and a one-on-one 60-90 minute strategy call.",
              },
              {
                title: "Will you fix the problems you find?",
                desc: "This audit is the blueprint. You can execute it yourself or hire us via our Growth & Management retainer.",
              },
              {
                title: "Why is this better than a free audit tool?",
                desc: "Free tools give raw data. We provide insights, strategy, and actionable steps tailored to your business and market.",
              },
            ],
          },
        ],
      },
      // 8. Final CTA Section
      {
        heading: {
          suppertitle: "Act Now",
          title: "Stop Guessing. Start Growing",
          subtitle:
            "Your competitors aren't waiting. Schedule your free, no-obligation consultation today and let's find your hidden opportunities for growth.",
          ctaText: "Get Your Actionable Audit Plan",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
    ],
  },

  "growth-roadmap": {
    id: 10,
    title: "Growth Roadmap",
    slug: "growth-roadmap",
    categories: "strategy-&-consulting",
    description:
      "A 6-month, data-driven digital strategy designed to align every marketing action with your business goals.",
    bgImg: "/assets/img/services/growth-roadmap-bg.svg",
    iconImage: "/assets/img/services/growth-roadmap-icon.svg",
    buttonText: "Build Your Growth Roadmap",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Growth Strategy",
          title:
            "Stop Wasting Effort. Start Winning. Get Your 6-Month 'Growth Roadmap.'",
          subtitle:
            "Most marketing fails from a lack of strategy. We build data-driven digital strategies for businesses in Bangladesh that align every action—from SEO to social media—with your exact business goals.",
          ctaText: "Build Your Growth Roadmap",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Are You 'Just Posting' and Hoping for the Best?",
          subtitle:
            "Having digital marketing tools is not the same as having a strategy. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You're active on social media, but you have no idea if it's actually growing your business.",
              "You're running ads, but your leads are low-quality and cost-per-acquisition is high.",
              "Your marketing feels disconnected—your social, SEO, and email efforts don't work together.",
              "You are following 'best practices' but your competitors are still growing faster.",
              "You have no clear plan or KPIs for the next 6-12 months.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "A Custom Strategy is Your Blueprint for Success",
          subtitle:
            "A strong strategy is the difference between being busy and being profitable. Our 'Growth Roadmap' is the single most valuable investment you can make in your marketing.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Define your ideal customer and map their journey.",
              "Build a multi-channel plan covering SEO, SMM, and Ads.",
              "Provide a clear 6-month action plan with KPIs and budgets.",
              "Ensure every hour and every Taka spent is ROI-focused.",
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "How It Works",
          title: "Our 4-Step 'Growth Roadmap' Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Deep-Dive & Audience Discovery",
                desc: "Comprehensive workshop to define goals, KPIs, and ideal customer personas and journey.",
              },
              {
                steps: "Step 2",
                title: "Market & Competitor Analysis",
                desc: "Analyze competitors to find gaps and build a plan to make you the market leader.",
              },
              {
                steps: "Step 3",
                title: "Multi-Channel Strategy Build",
                desc: "Create content strategy, select core channels, and map the customer-attraction funnel.",
              },
              {
                steps: "Step 4",
                title: "Deliver the 6-Month Roadmap",
                desc: "Present full plan with KPIs, budgets, and 30-60-90 day action plan.",
              },
            ],
          },
        ],
      },
      // 5. Pricing Section
      {
        heading: {
          suppertitle: "Strategic Packages",
          title: "Choose Your Strategic Blueprint",
          variant: "v1",
        },
        content: [
          {
            type: "pricing-table",
            items: [
              {
                name: "Standard Growth Roadmap",
                price: "BDT 50,000 - 75,000",
                subtitle:
                  "6-month digital marketing strategy with multi-channel plan, KPIs, and budgets.",
                tag: "Most Popular",
              },
              {
                name: "Advanced Growth Roadmap",
                price: "BDT 100,000+",
                subtitle:
                  "Includes competitor deep-dive, audience survey, and extended 6-month plan with training session.",
              },
            ],
          },
        ],
      },
      // 6. Social Proof Section
      {
        heading: {
          suppertitle: "Proven Results",
          title: "The Strategy Behind Bangladesh's Fastest-Growing Brands",
          variant: "v2",
        },
        content: [
          {
            type: "testimonial",
            quote:
              "'We were stuck. Vibely's Growth Roadmap gave us clarity and a clear path. We've used it for the past year and seen a 70% increase in qualified leads.'",
            author: "[Client Name], [Title], [Client Company]",
          },
          {
            type: "case-study",
            client: "[A B2B Services Company in Dhaka]",
            project: "Standard Growth Roadmap",
            solution:
              "Focused on LinkedIn and SEO with a full 6-month plan and clear KPIs.",
            result:
              "Became #1 ranked industry voice in 6 months and signed [X] new enterprise clients directly from digital efforts.",
          },
          {
            type: "logos",
            items: [
              "Client Logo 1",
              "Client Logo 2",
              "Client Logo 3",
              "Client Logo 4",
            ],
          },
        ],
      },
      // 7. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title:
                  "What's the difference between an 'Audit' and a 'Strategy'?",
                desc: "Audit = past diagnosis; Strategy = future blueprint for growth.",
              },
              {
                title: "How long does it take to build the strategy?",
                desc: "14-21 days from initial workshop for Standard Growth Roadmap.",
              },
              {
                title: "Is this a one-time fee?",
                desc: "Yes. One-time project fee. Execution can be done by your team or us via retainers.",
              },
              {
                title: "What if I already have a marketing team?",
                desc: "This strategy provides clarity and direction, plus optional training for your team.",
              },
            ],
          },
        ],
      },
      // 8. Final CTA Section
      {
        heading: {
          suppertitle: "Invest in Your Growth",
          title: "Stop Guessing. Start Growing",
          subtitle:
            "Invest in the one thing that guarantees results: a world-class strategy. Book your free consultation and let's discuss your Growth Roadmap.",
          ctaText: "Build Your Growth Roadmap",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
    ],
  },
};

export default servicesData;
