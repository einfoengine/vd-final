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
  desc?: string;
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
  "Social-media-management": {
    id: 1,
    title: "Social Media Management",
    slug: "Social-media-management",
    categories: "growth-&-management",
    description:
      "Brand-aligned visuals for marketing, social, and print with pixel-perfect execution.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/graphic-icon.svg",
    buttonText: "Get Started",
    detailsSections: [
      // Hero Section
      {
        heading: {
          suppertitle: "Social Media Management",
          title: "Social Media That Actually Builds Your Business.",
          subtitle:
            "Stop just posting. Our Growth & Management service for businesses in Bangladesh turns your social media from a time-consuming chore into a powerful machine for building your brand, engaging your community, and generating qualified leads.",
          ctaText: "Schedule Your Free Consultation",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // Problem Section
      {
        heading: {
          title: "Struggling to Keep Up? (And See Zero Results?)",
          subtitle:
            "You know social media is critical, but you're too busy running your business. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You're constantly running out of creative ideas and posting inconsistently.",
              "Your follower count is stuck, and your posts get minimal likes or comments.",
              "You're spending hours creating content (or Reels) with no measurable sales or leads.",
              "You can't keep up with the endless stream of comments, DMs, and algorithm changes.",
            ],
          },
        ],
      },
      // Solution Section
      {
        heading: {
          title:
            "We Manage Your Social Media, So You Can Manage Your Business.",
          subtitle:
            "This is not a 'posting' service. This is your complete, outsourced social media department. We handle everything—from building the monthly content strategy and designing all your custom graphics and Reels, to writing every caption and (most importantly) engaging with your community daily.",
          variant: "v2",
        },
        content: [
          {
            type: "paragraph",
            content:
              "We use your Growth & Management philosophy to turn your social profiles into an active, trusted resource that attracts new customers, builds deep loyalty with your current ones, and drives measurable business results.",
          },
        ],
      },
      // Process Section
      {
        heading: {
          suppertitle: "Our Monthly Growth & Management Rhythm",
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
                title: "Strategy & Calendar",
                desc: "We start each month by building a custom content calendar based on your goals. It includes themes, post formats, and Reel concepts. You review and approve everything.",
              },
              {
                steps: "Step 2",
                title: "Creation & Production",
                desc: "Our team of designers, copywriters, and video editors creates all your content. We write the on-brand copy, design the graphics, and edit the high-impact Reels.",
              },
              {
                steps: "Step 3",
                title: "Management & Engagement",
                desc: "We post everything at the optimal times, but our real work is managing your community. We respond to comments and DMs professionally, building relationships and nurturing leads.",
              },
              {
                steps: "Step 4",
                title: "Reporting & Optimization",
                desc: "At the end of the month, you get a clear, easy-to-understand report. We show you what worked, what didn't, and what we're optimizing for the next month to ensure continuous growth.",
              },
            ],
          },
        ],
      },
      // Replace the pricing section with this:
      {
        heading: {
          suppertitle: "Find Your Growth & Management Plan",
          title: "Choose the Right Audit Package for Your Business",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Starter",
                subtitle: "Platform Audit",
                price: "BDT 12,000 - 20,000",
              },
              {
                name: "Standard",
                subtitle: "Channel Audit",
                price: "BDT 25,000 - 40,000",
              },
              {
                name: "Premium",
                subtitle: "Full-Stack Audit",
                price: "BDT 50,000 - 80,000+",
              },
            ],
          },
        ],
      },

      // Add this at the end of detailsSections array
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
                  "What's the difference between this and just 'boosting' posts?",
                desc: "'Boosting' is just paying for visibility. Our service is the engine—we create the strategy, build the content, and manage the community. We build a brand your customers love, so your 'boosts' are far more effective.",
              },
              {
                title: "Do I have to sign a long-term contract?",
                desc: "We offer flexible monthly retainers. However, social media growth is a long-term strategy. We recommend a minimum of 6 months to see significant, lasting results.",
              },
              {
                title: "Do I get to approve content before it's posted?",
                desc: "Absolutely. You get a full content calendar for review and approval at the start of each month.",
              },
              {
                title: "What is not included in this fee?",
                desc: "This is our management and creation fee. It does not include your Ad Spend (the budget paid directly to Facebook/Instagram). Ad management is included in our Premium (Scale) package.",
              },
            ],
          },
        ],
      },
    ],
  },
  "tiktok-youtube-management": {
    id: 1,
    title: "TikTok & YouTube Management",
    slug: "tiktok-youtube-management",
    categories: "growth-&-management",
    description:
      "Turn your TikTok and YouTube channels into high-growth assets with expert strategy, video SEO, and community management.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/graphic-icon.svg",
    buttonText: "Schedule Strategy Call",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "TikTok & YouTube Management",
          title:
            "Master the Platforms That Matter. Dominate with TikTok & YouTube Management.",
          subtitle:
            "Stop just uploading videos and hoping for the best. We turn your TikTok and YouTube channels into strategic, high-growth assets with expert trend analysis, powerful video SEO, and daily community management.",
          ctaText: "Schedule Your Video Strategy Call",
          ctaHref: "#contact",
          variant: "v3",
        },
      },

      // 2. Problem Section
      {
        heading: {
          title: "Why Isn't Your Video Content Working?",
          subtitle:
            "You know video is the future, but you're getting left behind. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You spend hours filming and editing videos, but they get almost zero views.",
              "You can't keep up with the endless, fast-moving, and confusing trends on TikTok.",
              "Your YouTube videos are high-quality, but they are impossible to find (no search traffic).",
              "You feel awkward on camera and don't know what kind of content your audience wants.",
              "Your follower/subscriber count has been stuck for months.",
            ],
          },
        ],
      },

      // 3. Solution Section
      {
        heading: {
          title: "A Specialized Strategy for Specialized Platforms.",
          subtitle:
            "TikTok and YouTube are not 'social media' in the traditional sense. They are powerful video-first discovery engines that require a completely unique approach.",
          variant: "v2",
        },
        content: [
          {
            type: "paragraph",
            content:
              "Our 'Growth & Management' service provides a dedicated team of video specialists. For TikTok, we are your trend-spotters and creative partners, helping you create engaging, fast-paced content that hooks viewers in seconds. For YouTube, we are your channel's SEO managers and strategists, optimizing every title, thumbnail, and description to build a long-term, searchable library of content that generates leads for years.",
          },
        ],
      },

      // 4. Process Section (How It Works)
      {
        heading: {
          suppertitle: "Our Video-First Management Process",
          title: "Our 4-Step Video Strategy Framework",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Video Channel Strategy",
                desc: "We audit your current channel (or build a new one) and develop a content strategy. We define your content pillars (e.g., 'Educational,' 'Entertaining,' 'Community') and a posting schedule.",
              },
              {
                steps: "Step 2",
                title: "Optimize & Edit",
                desc: "You provide the raw footage, and our team gets to work. We edit videos for each platform, write optimized titles and descriptions, and design clickable thumbnails that drive engagement.",
              },
              {
                steps: "Step 3",
                title: "Daily Management & Engagement",
                desc: "We handle posting and engagement — replying to comments, collaborating with creators, and monitoring emerging trends to keep your content relevant and visible.",
              },
              {
                steps: "Step 4",
                title: "Video Analytics & Reporting",
                desc: "You receive monthly reports focused on video metrics that matter most: Watch Time, Audience Retention, CTR, and Subscriber Growth. We track, optimize, and scale results every month.",
              },
            ],
          },
        ],
      },

      // 5. Pricing Section
      {
        heading: {
          suppertitle: "Find Your Video Management Plan",
          title: "Choose Your Video Management Package",
          variant: "v1",
        },
        content: [
          {
            type: "paragraph",
            content:
              "These packages are for our expert management, editing, and optimization services. They do not include filming costs. For full video production, pair this service with our 'Standard Reel Production' or 'OVC' packages.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Starter",
                subtitle: "TikTok Management",
                price: "BDT 20,000 - 35,000/month",
              },
              {
                name: "Standard",
                subtitle: "YouTube Channel Management",
                price: "BDT 40,000 - 65,000/month",
              },
              {
                name: "Premium",
                subtitle: "TikTok + YouTube Growth Suite",
                price: "BDT 80,000 - 120,000+/month",
              },
            ],
          },
        ],
      },

      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Video Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Is video production (filming) included in this price?",
                desc: "No. This price covers management, editing, and optimization. Filming can be added through our production services as a separate project.",
              },
              {
                title: "Do I have to be on both TikTok and YouTube?",
                desc: "Not at all. We’ll recommend the platform that best suits your goals — TikTok for rapid brand awareness, or YouTube for long-term authority and search traffic.",
              },
              {
                title: "Do I have to dance on TikTok?",
                desc: "No! That’s a myth. We’ll build your TikTok strategy around your authentic brand — educational, behind-the-scenes, or service-based.",
              },
              {
                title: "How long does it take to grow on YouTube?",
                desc: "YouTube is a long-term game. Expect 6–12 months of consistent, optimized content to build real authority. But the reward is content that keeps generating leads for years.",
              },
            ],
          },
        ],
      },
    ],
  },
  "seo-management": {
    id: 2,
    title: "SEO Management",
    slug: "seo-management",
    categories: "growth-&-management",
    description:
      "Rank higher, attract qualified traffic, and turn your website into a 24/7 lead-generation machine with our expert SEO management service for businesses in Bangladesh.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/seo-icon.svg",
    buttonText: "Get Your Free SEO Action Plan",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "SEO Management",
          title:
            "Get Found by Customers Who Are Ready to Buy. Rank Higher with Expert SEO.",
          subtitle:
            'Stop waiting for customers to find you. Our "Growth & Management" SEO service for businesses in Bangladesh is a long-term strategy to dominate search results, attract qualified organic traffic, and turn your website into a 24/7 lead-generation machine.',
          ctaText: "Get Your Free SEO Action Plan",
          ctaHref: "#contact",
          variant: "v3",
        },
      },

      // 2. Problem Section
      {
        heading: {
          title: "Is Your Website Invisible on Google?",
          subtitle:
            "Having a beautiful website that no one can find is like having a billboard in the desert. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Your competitors are on the first page of Google, and you're buried on page 5 (or worse).",
              "You're publishing blog posts, but your website traffic hasn't changed in months.",
              'You get plenty of "junk" traffic, but very few actual leads or sales from your site.',
              'You\'re confused by technical jargon like "backlinks," "domain authority," and "Core Web Vitals."',
              "You have no idea which keywords your customers are actually searching for.",
            ],
          },
        ],
      },

      // 3. Solution Section
      {
        heading: {
          title: "The Long-Term Strategy for Sustainable Growth.",
          subtitle:
            "SEO isn't a 'trick' or a one-time fix — it's the most powerful and profitable long-term marketing investment you can make.",
          variant: "v2",
        },
        content: [
          {
            type: "paragraph",
            content:
              'While paid ads stop the second you stop paying, a top Google ranking works for you 24/7 — for free. Our "Growth & Management" SEO service is a complete, 360-degree solution.',
          },
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Technical SEO",
                desc: "We fix your website's foundation to make it fast, secure, and loved by Google.",
              },
              {
                title: "Content Strategy",
                desc: "We create high-quality, expert content that answers your customers' questions.",
              },
              {
                title: "Authority Building",
                desc: "We build high-quality backlinks to establish your site as a trusted leader in your industry.",
              },
            ],
          },
        ],
      },

      // 4. Process Section (How It Works)
      {
        heading: {
          suppertitle: "Our SEO Management Process",
          title: "Our 4-Pillar SEO Framework",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Audit & Growth Roadmap",
                desc: 'We start with a comprehensive technical, content, and backlink audit. Then we analyze your competitors and create a 6-month "Growth Roadmap" targeting your most profitable keywords.',
              },
              {
                steps: "Step 2",
                title: "Technical Fixes & On-Page Optimization",
                desc: "Our team strengthens your site's foundation — fixing crawl errors, optimizing for Core Web Vitals, and ensuring every page is structured perfectly to rank.",
              },
              {
                steps: "Step 3",
                title: "Content Creation & Authority Building",
                desc: "We produce the content your audience is searching for — blogs, guides, and articles — while building relevant, high-quality backlinks to boost authority.",
              },
              {
                steps: "Step 4",
                title: "Report, Analyze & Optimize",
                desc: "You receive transparent monthly reports showing rankings, traffic, and conversions. We review, refine, and optimize strategy every month for continuous growth.",
              },
            ],
          },
        ],
      },

      // 5. Pricing Section
      {
        heading: {
          suppertitle: "Find Your SEO Plan",
          title: "Choose Your SEO Growth Package",
          variant: "v1",
        },
        content: [
          {
            type: "paragraph",
            content:
              'We offer scalable SEO management solutions tailored for service-based and e-commerce businesses. (Pro Tip: Our "Standard (Growth)" package is most popular for consistent lead generation.)',
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Basic (Starter)",
                subtitle: "Ideal for small business websites",
                price: "BDT 25,000 - 40,000/month",
              },
              {
                name: "Standard (Growth)",
                subtitle: "Best for service-based businesses",
                price: "BDT 45,000 - 70,000/month",
              },
              {
                name: "E-commerce (Advanced)",
                subtitle: "For online stores & marketplaces",
                price: "BDT 80,000 - 130,000+/month",
              },
            ],
          },
        ],
      },

      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your SEO Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "How long does it take to see results from SEO?",
                desc: 'SEO is a long-term investment. You’ll see progress (like ranking improvements) within 90 days, but major results typically take 6–12 months. Beware of anyone promising "Page 1 in 30 days."',
              },
              {
                title: "What's the difference between SEO and Google Ads?",
                desc: "Google Ads (PPC) is like renting the top spot — you pay for each click. SEO is like owning it — slower to earn, but the traffic is free and sustainable.",
              },
              {
                title: "Do I have to sign a long-term contract?",
                desc: "We work on a monthly retainer, but SEO requires at least a 6-month commitment to build meaningful and lasting results.",
              },
              {
                title: "What are backlinks and why do I need them?",
                desc: "A backlink is a link from another website to yours. Google treats them as votes of trust. We earn high-quality, relevant backlinks that boost your authority and rankings.",
              },
            ],
          },
        ],
      },
    ],
  },

  "ad-management": {
    id: 3,
    title: "Digital Advertising & PPC Management",
    slug: "ad-management",
    categories: "growth-&-management",
    description:
      "Maximize your ROI with expert ad management across Facebook, Instagram, and Google. Turn your ad spend into a predictable lead and sales system.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/ad-icon.svg",
    buttonText: "Get Your Free Ad Account Audit",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Ad Management",
          title:
            "Stop Wasting Money. Start Getting Results. Maximize Your ROI with Expert Ad Management.",
          subtitle:
            'Turn your ad budget into a predictable machine for leads and sales. Our data-driven "Growth & Management" for paid ads (Facebook, Instagram & Google) optimizes every Taka you spend, delivering measurable results from day one.',
          ctaText: "Get Your Free Ad Account Audit",
          ctaHref: "#contact",
          variant: "v3",
        },
      },

      // 2. Problem Section
      {
        heading: {
          title: "Is Your Ad Spend Disappearing with No Results?",
          subtitle:
            "You're pouring money into Facebook 'Boosts' and Google Ads, but your bank account isn't growing. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You're spending thousands on ads but have no new sales or qualified leads to show for it.",
              "You're getting 'likes' and 'views,' but no one is clicking, calling, or buying.",
              "You're completely overwhelmed by the complexity of Ad Manager, keywords, and bidding.",
              "You have no idea if your ads are profitable, and you're afraid to increase the budget.",
              "Your cost-per-lead (CPL) is skyrocketing, and your competitors are out-bidding you.",
            ],
          },
        ],
      },

      // 3. Solution Section
      {
        heading: {
          title: "Data-Driven Ad Management That Delivers Real ROI",
          subtitle:
            'This isn’t just “boosting.” This is a scientific, data-driven "Growth & Management" approach to paid media — handled by certified media buyers and data analysts.',
          variant: "v2",
        },
        content: [
          {
            type: "paragraph",
            content:
              "We build, manage, and optimize your entire ad funnel with precision and purpose — ensuring every Taka you spend delivers measurable business results.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Find Your Audience",
                desc: "We create hyper-targeted custom, interest, and lookalike audiences that reach your ideal customers.",
              },
              {
                title: "Craft Your Message",
                desc: "We continuously A/B test ad copy, headlines, and creatives to discover what drives action.",
              },
              {
                title: "Optimize Daily",
                desc: "We monitor and adjust campaigns every day — scaling winners and cutting inefficiencies to maximize ROI.",
              },
            ],
          },
        ],
      },

      // 4. Process Section (How It Works)
      {
        heading: {
          suppertitle: "Our Paid Media Framework",
          title: "Our 4-Step Ad Optimization Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Audit & Full-Funnel Strategy",
                desc: "We begin by auditing your existing ad accounts and developing a custom media plan — from awareness to conversion.",
              },
              {
                steps: "Step 2",
                title: "Launch & Test",
                desc: "We launch new campaigns with multiple ad sets, creatives, and copy variations to identify early winners through data.",
              },
              {
                steps: "Step 3",
                title: "Daily Optimization & Scaling",
                desc: "Our team monitors campaigns daily — managing bids, refining audiences, and scaling top performers for maximum ROAS.",
              },
              {
                steps: "Step 4",
                title: "Transparent Reporting",
                desc: "You receive clear, actionable reports showing spend, leads, sales, and what’s next in testing and scaling.",
              },
            ],
          },
        ],
      },

      // 5. Pricing Packages Section
      {
        heading: {
          suppertitle: "Find Your Paid Media Plan",
          title: "Choose Your Ad Management Package",
          variant: "v1",
        },
        content: [
          {
            type: "paragraph",
            content:
              "Our packages cover expert ad strategy, management, and daily optimization. (Note: Prices exclude your ad spend, which is paid directly to Google or Facebook.)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Starter",
                subtitle: "Ideal for small campaigns",
                price: "BDT 15,000 - 25,000/month",
              },
              {
                name: "Standard",
                subtitle: "Best for growing businesses",
                price: "BDT 30,000 - 50,000/month",
              },
              {
                name: "Premium",
                subtitle: "For high-budget or multi-channel campaigns",
                price: "BDT 60,000 - 100,000+/month",
              },
            ],
          },
        ],
      },

      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Ad Budget Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Is my Ad Spend included in your management fee?",
                desc: "No. Our fee covers expert management, strategy, and optimization. Your ad spend is a separate budget paid directly to Google or Facebook.",
              },
              {
                title: "How much should I spend on ads?",
                desc: "We'll recommend a budget based on your goals during consultation. We suggest a minimum ad spend of BDT 15,000–20,000/month for meaningful optimization.",
              },
              {
                title: "How long does it take to see results?",
                desc: "Unlike SEO, paid ads can bring traffic and leads within days. Most clients see improved ROI and reduced CPL within the first 30 days.",
              },
              {
                title: "Which is better: Facebook Ads or Google Ads?",
                desc: "It depends on your goals — Google Ads captures high-intent buyers, while Facebook Ads builds brand awareness and demand. We’ll help you choose the best mix.",
              },
            ],
          },
        ],
      },
    ],
  },
  "website-maintenance": {
  id: 4,
  title: "Website Maintenance",
  slug: "website-maintenance",
  categories: "growth-&-management",
  description:
    "Keep your website secure, fast, and always online. Our Growth & Management maintenance service handles updates, security, backups, and content changes for businesses in Bangladesh.",
  bgImg: "/assets/img/services/s-bg.svg",
  iconImage: "/assets/img/services/website-icon.svg",
  buttonText: "Get Your Free Website Health Check",
  detailsSections: [
    // 1. Hero Section
    {
      heading: {
        suppertitle: "Website Maintenance",
        title: "Your Website: Always Secure, Always Fast, Always On.",
        subtitle:
          'Protect your most valuable digital asset. Our "Growth & Management" maintenance service for businesses in Bangladesh handles all your technical updates, security, backups, and content updates, so your website stays fast, safe, and professional 24/7.',
        ctaText: "Get Your Free Website Health Check",
        ctaHref: "#contact",
        variant: "v3",
      },
    },

    // 2. Problem Section
    {
      heading: {
        title: "Is Your Website a Ticking Time Bomb?",
        subtitle:
          "A slow, broken, or hacked website can destroy your brand's credibility in seconds. Does this sound familiar?",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          items: [
            "Your website is painfully slow, and you know customers are leaving.",
            'You see "Update Available" on your plugins or themes, but fear breaking your site.',
            "You have no idea if your site is backed up or how to recover from a hack.",
            "Simple content changes take weeks to implement because your developer is busy.",
            'Your site shows a "Not Secure" warning, scaring away potential customers.',
          ],
        },
      ],
    },

    // 3. Solution Section
    {
      heading: {
        title: "The Complete 'Peace of Mind' Package",
        subtitle:
          "Your website is your 24/7 salesperson. It needs to be professional, secure, and fast at all times. Our Growth & Management maintenance plan acts as your on-call technical team and support desk.",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              title: "Security & Backups",
              desc: "Proactive security monitoring and daily/weekly backups to prevent hacks and data loss.",
            },
            {
              title: "Speed & Performance",
              desc: "Regular plugin/core updates and performance optimization to ensure a fast, reliable site.",
            },
            {
              title: "Content & Support",
              desc: "Monthly included support hours — we handle blogs, image swaps, text edits, and more quickly and professionally.",
            },
          ],
        },
      ],
    },

    // 4. Process Section
    {
      heading: {
        suppertitle: "Our Maintenance Rhythm",
        title: "Our 4-Step Website Management Process",
        variant: "v1",
      },
      content: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              steps: "Step 1",
              title: "Onboarding & Site Audit",
              desc: "We perform a full backup, audit site health, plugins, and security, and install our monitoring tools.",
            },
            {
              steps: "Step 2",
              title: "Secure & Optimize",
              desc: "We fix issues, update all core files/plugins safely in staging, and implement performance/security protocols.",
            },
            {
              steps: "Step 3",
              title: "Proactive Monthly Management",
              desc: "Scheduled backups, uptime monitoring, software updates, and security scans performed every month.",
            },
            {
              steps: "Step 4",
              title: "Support & Reporting",
              desc: "Monthly reports of all updates/backups/security checks. Content changes handled within included hours upon request.",
            },
          ],
        },
      ],
    },

    // 5. Pricing Packages Section
    {
      heading: {
        suppertitle: "Find Your Website Maintenance Plan",
        title: "Choose Your Website Protection Package",
        variant: "v1",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Our packages cover expert website management, updates, security, and support. (Pro Tip: Standard (Business) package is best for most non-e-commerce businesses.)",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              name: "Starter",
              subtitle: "Basic monitoring & updates",
              price: "BDT 12,000 - 20,000/month",
            },
            {
              name: "Standard (Business)",
              subtitle: "Full maintenance & support — best value",
              price: "BDT 25,000 - 40,000/month",
            },
            {
              name: "Premium",
              subtitle: "Extended support, advanced security & optimization",
              price: "BDT 50,000 - 80,000+/month",
            },
          ],
        },
      ],
    },

    // 6. FAQ Section
    {
      heading: {
        suppertitle: "Frequently Asked Questions",
        title: "Your Maintenance Questions, Answered",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              title: "Why do I need to pay for this monthly?",
              desc: "A website is not 'set and forget'. Our fee is the 'insurance policy' protecting your investment — updates, security, and compatibility are ongoing.",
            },
            {
              title: "What platforms do you support?",
              desc: "We specialize in WordPress but also maintain Shopify and other major platforms.",
            },
            {
              title: "What are 'content update hours'?",
              desc: "These are included hours for content changes like blogs, banners, or price updates — handled quickly by our team.",
            },
            {
              title: "What if my site gets hacked anyway?",
              desc: "Standard and Premium plans include full hack-cleanup and restoration from backup at no extra cost.",
            },
          ],
        },
      ],
    },
  ],
},
"content-retainer": {
  id: 5,
  title: "Content Retainer",
  slug: "content-retainer",
  categories: "growth-&-management",
  description:
    "Consistent, high-quality SEO articles and social media copy delivered monthly to build authority, attract organic traffic, and save you time.",
  bgImg: "/assets/img/services/s-bg.svg",
  iconImage: "/assets/img/services/content-icon.svg",
  buttonText: "Schedule Your Content Strategy Call",
  detailsSections: [
    // 1. Hero Section
    {
      heading: {
        suppertitle: "Content Retainer",
        title: "Your Brand's Voice, Amplified. Consistent, High-Quality Content, Delivered Monthly.",
        subtitle:
          "Stop struggling with an empty blog and inconsistent social posts. Our 'Growth & Management' Content Retainer provides a steady stream of SEO-optimized articles and compelling social copy to build your authority and attract organic traffic.",
        ctaText: "Schedule Your Content Strategy Call",
        ctaHref: "#contact",
        variant: "v3",
      },
    },

    // 2. Problem Section
    {
      heading: {
        title: "Is Your Content Calendar Gathering Dust?",
        subtitle:
          "You're an expert in your field, but you're not a writer. Or you are, but you have zero time. Does this sound familiar?",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          items: [
            "You haven't published a blog post in 6 months (or ever).",
            "You know you need content for SEO, but you have no idea what to write about.",
            "Your social media captions are rushed, uninspired, or feel 'salesy' and inauthentic.",
            "Your great ideas are stuck in your head because you hate staring at a blank page.",
            "Your content is inconsistent, and your audience engagement is non-existent.",
          ],
        },
      ],
    },

    // 3. Solution Section
    {
      heading: {
        title: "Your Expert Content Team on Autopilot",
        subtitle:
          "This isn't just a writing service; it's your outsourced content department. We learn your industry, brand voice, and your customer's biggest questions, then create a reliable, high-quality 'content engine' every month.",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              title: "Blog & Article Retainer",
              desc: "Monthly package of expert, SEO-optimized articles answering customer questions and establishing authority.",
            },
            {
              title: "Social Copywriting Retainer",
              desc: "Entire month's social media captions—engaging, on-brand, and ready to post in an organized document.",
            },
          ],
        },
      ],
    },

    // 4. Process Section
    {
      heading: {
        suppertitle: "Our Monthly Content Rhythm",
        title: "Our 4-Step Content Creation Process",
        variant: "v1",
      },
      content: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              steps: "Step 1",
              title: "Strategy & Topic Planning",
              desc: "Develop a content plan and list of topics based on SEO goals, target audience questions, and marketing campaigns.",
            },
            {
              steps: "Step 2",
              title: "Research & Creation",
              desc: "Copywriters and subject-matter experts research topics, gather statistics, and draft high-value content.",
            },
            {
              steps: "Step 3",
              title: "Edit & Optimize",
              desc: "All content is professionally edited for grammar, flow, and brand voice, with full SEO optimization.",
            },
            {
              steps: "Step 4",
              title: "Deliver & Review",
              desc: "Receive the full month's content in one document for review and approval, ready to publish.",
            },
          ],
        },
      ],
    },

    // 5. Pricing Packages Section
    {
      heading: {
        suppertitle: "Choose Your Monthly Content Plan",
        title: "Select the Right Content Retainer Package",
        variant: "v1",
      },
      content: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              name: "Social Media Copywriting",
              subtitle: "Writing Only",
              price: "BDT 8,000 - 15,000/month",
              desc: "20-25 high-quality, on-brand social media captions & hashtag sets.",
            },
            {
              name: "Standard Blog Package",
              subtitle: "Blog Content",
              price: "BDT 12,000 - 20,000/month",
              desc: "4 x Standard, SEO-optimized blog posts (~1000 words each).",
            },
            {
              name: "Full Content Package",
              subtitle: "Blog + Social",
              price: "BDT 25,000 - 50,000+/month",
              desc: "4 x Blog posts + 20-25 social media captions per month.",
            },
          ],
        },
      ],
    },

    // 6. FAQ Section
    {
      heading: {
        suppertitle: "Frequently Asked Questions",
        title: "Your Content Questions, Answered",
        variant: "v2",
      },
      content: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              title: "Are images or posting included?",
              desc: "These packages are for writing services only. Graphic design and social posting are handled via Social Media Management packages.",
            },
            {
              title: "Is the blog content SEO-optimized?",
              desc: "Yes. Blog packages include keyword research and full on-page SEO optimization.",
            },
            {
              title: "Who writes the content?",
              desc: "Our in-house professional copywriters and editors with industry-specific expertise handle all content.",
            },
            {
              title: "What if I don't like the content?",
              desc: "All packages include 1-2 revision rounds to ensure content perfectly matches your brand voice and standards.",
            },
          ],
        },
      ],
    },
  ],
},

  
};

export default servicesData;
