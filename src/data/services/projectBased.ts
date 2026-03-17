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
  "video-production": {
    id: 6,
    title: "Video Production",
    slug: "video-production",
    categories: "project-based",
    description:
      "Professional, project-based video production for Reels, brand films, and OVCs, delivered on time and on budget.",
    bgImg: "/assets/img/services/s-bg.svg",
    iconImage: "/assets/img/services/video-icon.svg",
    buttonText: "Book Your Video Project Call",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Video Production",
          title:
            "Video That Stops the Scroll. From Viral Reels to Polished Brand Films.",
          subtitle:
            "High-quality video is no longer optional. Our project-based production service delivers stunning, professional content tailored to your exact goal—whether it's a 30-second Reel or a full-scale Online Video Commercial (OVC).",
          ctaText: "Book Your Video Project Call",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Is Your Brand's Video Content Holding You Back?",
          subtitle:
            "You see your competitors' professional videos, but yours just don't measure up. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Your videos are shaky, poorly lit, or have bad audio, which makes your brand look cheap.",
              "You have great ideas for Reels but no time or technical skill to edit them.",
              "You're trying to explain your product or service, but a 'wall of text' just isn't working.",
              "You need a high-impact ad for a new campaign, but you have no idea where to start.",
              "You're 'boosting' videos that get views but zero engagement or sales.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "Full-Service Video Production for Every Goal & Budget",
          subtitle:
            "We are your on-demand, professional video team. We handle the entire project from concept to final delivery, making it easy to get the exact video you need.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Concept & Scripting",
                desc: "We work with you to develop a compelling idea and script that grabs attention.",
              },
              {
                title: "Professional Filming",
                desc: "Our crew arrives with professional cameras, lighting, and audio equipment for a high-quality shoot.",
              },
              {
                title: "Advanced Post-Production",
                desc: "We edit your project with motion graphics, color grading, and music to make it 'pop' and align with your brand.",
              },
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "From Concept to Final Cut",
          title: "Our 4-Step Video Production Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Project Brief & Strategy",
                desc: "Project call to understand goals, audience, and key message. Develop creative brief and script.",
              },
              {
                steps: "Step 2",
                title: "Pre-Production & Scheduling",
                desc: "Handle all logistics: location scouting, scheduling, and equipment prep.",
              },
              {
                steps: "Step 3",
                title: "The Shoot Day",
                desc: "Professional crew captures all footage needed for your project.",
              },
              {
                steps: "Step 4",
                title: "Post-Production & Delivery",
                desc: "Edit, color-grade, add graphics, deliver first cut for review, then final high-resolution files.",
              },
            ],
          },
        ],
      },
      // 5. Pricing Packages Section
      {
        heading: {
          suppertitle: "Choose Your Video Production Package",
          title: "Select the Right Package for Your Project",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Basic Social Clip",
                subtitle: "Simple, fast, caption-based videos",
                price: "BDT 3,500",
                desc: "Min. 4 clips, max 40 sec each. Basic shoot or stock footage.",
              },
              {
                name: "Standard Reel",
                subtitle: "High-quality, concept-driven Reel",
                price: "BDT 20,000",
                desc: "Min. 2 clips, max 60 sec each. Half-day shoot, professional editing.",
              },
              {
                name: "Signature Reel Package",
                subtitle: "Batch of 3-4 premium Reels",
                price: "BDT 60,000",
                desc: "Dedicated shoot session, advanced graphics and post-production.",
              },
              {
                name: "Standard OVC",
                subtitle: "Full-scale brand film or commercial",
                price: "BDT 250,000",
                desc: "Full 1-day shoot, full crew, advanced post-production.",
              },
            ],
          },
        ],
      },
      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Video Project Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "What's the difference between a Reel and an OVC?",
                desc: "A Reel is a short, vertical social media video. An OVC (Online Video Commercial) is a high-production, horizontal brand film telling a bigger story.",
              },
              {
                title: "How long does a project take?",
                desc: "Standard Reels: 5-7 days. Full OVC: 3-4 weeks from concept to final delivery.",
              },
              {
                title: "Who comes up with the creative ideas and scripts?",
                desc: "Our team develops concepts and writes full scripts for all packages.",
              },
              {
                title: "What if I don't like the final video?",
                desc: "All projects include 1-2 rounds of revisions to ensure satisfaction.",
              },
            ],
          },
        ],
      },
    ],
  },
  "design-service": {
    id: 7,
    title: "Design Service",
    slug: "design-service",
    categories: "project-based",
    description:
      "Project-based professional design for social media posts, hero graphics, website banners, and ad creatives—custom-crafted for your brand.",
    bgImg: "/assets/img/services/design-bg.svg",
    iconImage: "/assets/img/services/design-icon.svg",
    buttonText: "Start Your Design Project",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Design Service",
          title: "Stop the Scroll with Stunning, On-Brand Design.",
          subtitle:
            "Your brand's image matters. Our project-based design service delivers everything from high-engagement social posts to premium 'hero' graphics for your website, all custom-crafted to make your brand look its best.",
          ctaText: "Start Your Design Project",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Is Your DIY Design Costing You Customers?",
          subtitle:
            "In a crowded market, looking 'cheap' or 'amateur' is a brand-killer. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Your social media posts look generic, inconsistent, or like they were made in a free template app.",
              "Your brand's colors, fonts, and logos are a mess, creating a confusing brand identity.",
              "You're wasting hours trying to be a designer, pulling you away from running your business.",
              "Your current designs just aren't 'popping,' and your audience is scrolling right past them.",
              "You need a single, high-impact graphic for an ad, but you don't want to hire a full-time agency.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "Professional, On-Demand Design. No Retainer Required.",
          subtitle:
            "This is your on-call, professional design team. We deliver pixel-perfect, custom creative that builds trust and drives engagement.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title: "Basic Posts",
                desc: "Perfect for batch-creating a week's worth of simple, clean social content.",
              },
              {
                title: "Standard Brand Posts",
                desc: "High-quality, custom-designed posts for important announcements or promotions.",
              },
              {
                title: "Premium Hero Creative",
                desc: "High-impact, campaign-leading visual for your website, major ad, or special event.",
              },
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "How It Works",
          title: "Our Simple 3-Step Design Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Brief & Concept",
                desc: "Submit your brief with goals, text, inspiration, and brand guidelines. We'll confirm the concept with you.",
              },
              {
                steps: "Step 2",
                title: "Design & Create",
                desc: "Our designers craft your custom graphics, ensuring alignment with your brand and platform optimization.",
              },
              {
                steps: "Step 3",
                title: "Review & Deliver",
                desc: "Receive drafts for feedback. After 1-2 revisions, we deliver final, high-resolution files ready to publish.",
              },
            ],
          },
        ],
      },
      // 5. Pricing Packages Section
      {
        heading: {
          suppertitle: "On-Demand Design for Every Need",
          title: "Choose Your Project-Based Design Package",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Basic Social Post",
                price: "BDT 1,000",
                subtitle: "Simple, fast, template-based posts (Min. 4)",
                desc: "Simple text & stock/provided image.",
              },
              {
                name: "Standard Brand Post",
                price: "BDT 3,500",
                subtitle: "High-quality, custom-branded posts (Min. 4)",
                desc: "Full custom design & premium stock.",
              },
              {
                name: "Premium Hero Creative",
                price: "BDT 10,000",
                subtitle: "Single, high-impact 'main event' visual",
                desc: "Website banner, ad creative, or infographic.",
              },
            ],
          },
        ],
      },
      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Design Project Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title:
                  "What's the difference between 'Standard' and 'Premium Hero'?",
                desc: "Standard Post is a high-quality social media graphic. Premium Hero is a high-impact visual like a website banner or key ad creative.",
              },
              {
                title:
                  "Why is there a minimum order of 4 for Basic/Standard posts?",
                desc: "Batch orders allow strategic time to deliver consistent, high-quality graphics at a better price.",
              },
              {
                title: "How long does it take?",
                desc: "Standard Posts: 2-3 business days. Premium Hero Creative: 3-5 days, depending on complexity.",
              },
              {
                title: "What if I need ongoing monthly design?",
                desc: "You can purchase project packages every month or upgrade to the full 'Social Media Management' package.",
              },
            ],
          },
        ],
      },
      // 7. Final CTA Section
      {
        heading: {
          suppertitle: "Elevate Your Brand",
          title: "Stop Looking Amateur. Start Looking Amazing.",
          subtitle:
            "Book your free, no-obligation consultation and let's discuss your next design project.",
          ctaText: "Start Your Design Project",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
    ],
  },
  "copywriting-service": {
    id: 8,
    title: "Copywriting Service",
    slug: "copywriting-service",
    categories: "project-based",
    description:
      "On-demand professional copywriting for websites, blogs, email campaigns, and social media captions—crafted to convert readers into customers.",
    bgImg: "/assets/img/services/copywriting-bg.svg",
    iconImage: "/assets/img/services/copywriting-icon.svg",
    buttonText: "Start Your Writing Project",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "Copywriting Service",
          title:
            "Words That Sell. Copy That Converts. On-Demand Expert Copywriting.",
          subtitle:
            "Your product is great, but your words aren't working. Our project-based copywriting service delivers compelling website pages, high-converting email newsletters, and expert blog posts that turn readers into customers.",
          ctaText: "Start Your Writing Project",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Is Your Message Falling Flat?",
          subtitle:
            "You're an expert in your business, not a professional writer. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You're staring at a blank 'About Us' page, and you have no idea what to write.",
              "Your website gets traffic, but nobody is 'Booking a Call' or 'Buying Now.'",
              "You know you need a blog post for SEO, but you can't find the time or the words.",
              "Your email newsletters are boring, and your 'Open Rates' are terrible.",
              "Your copy sounds 'salesy,' unprofessional, or doesn't capture your brand's true voice.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "The Right Words Make All the Difference.",
          subtitle:
            "Great copywriting is salesmanship in print. Our on-demand service gives you access to professional copywriters exactly when you need them. No retainer, no monthly commitment.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Website Pages: Home, About, and Service pages written to convert.",
              "SEO Blogs: Expert, optimized articles that help you rank and attract traffic.",
              "Email Campaigns: High-converting newsletters designed to drive clicks and sales.",
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "How It Works",
          title: "Our Simple 3-Step Writing Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Brief & Discovery",
                desc: "Fill out our brief with goals, audience, brand voice, and keywords. We'll clarify any questions.",
              },
              {
                steps: "Step 2",
                title: "Research & Writing",
                desc: "We research, analyze competitors, and write a first draft infused with your brand's voice and clear CTAs.",
              },
              {
                steps: "Step 3",
                title: "Review & Deliver",
                desc: "You review drafts. After 1-2 rounds of revisions, we deliver polished copy ready to publish.",
              },
            ],
          },
        ],
      },
      // 5. Pricing Packages Section
      {
        heading: {
          suppertitle: "Professional Copywriting",
          title: "Choose Your Project-Based Copywriting Package",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "Basic Social Caption",
                price: "BDT 250 - 500",
                subtitle: "Simple, on-brand captions (per post).",
              },
              {
                name: "Standard Blog Post",
                price: "BDT 3,500 - 6,000",
                subtitle: "A single SEO-optimized article (1000-1500 words).",
              },
              {
                name: "Main Website Page",
                price: "BDT 3,000 - 5,000",
                subtitle: "Your Home, About, or Service page (per page).",
              },
              {
                name: "Email Newsletter",
                price: "BDT 4,000 - 8,000",
                subtitle: "High-converting email (per email).",
              },
            ],
          },
        ],
      },
      // 6. FAQ Section
      {
        heading: {
          suppertitle: "Frequently Asked Questions",
          title: "Your Copywriting Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title:
                  "What's the difference between this and the 'Content Retainer'?",
                desc: "Per-piece projects are one-time. Retainers are ongoing monthly subscriptions.",
              },
              {
                title: "Is the blog post SEO-optimized?",
                desc: "Yes. Includes keyword research, competitor analysis, and full on-page SEO optimization.",
              },
              {
                title: "What if I don't like the copy?",
                desc: "All projects include 1-2 revision rounds to ensure tone and style match your brand.",
              },
              {
                title: "How long does it take?",
                desc: "Website pages or blog posts: 3-5 business days. Email newsletters: 2-3 days.",
              },
            ],
          },
        ],
      },
      // 7. Final CTA Section
      {
        heading: {
          suppertitle: "Words Matter",
          title: "Words Matter. Make Yours Count.",
          subtitle:
            "Don't let bad copy cost you another customer. Schedule your free, no-obligation consultation and let's discuss your next writing project.",
          ctaText: "Start Your Writing Project",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
    ],
  },
  "seo-project": {
    id: 9,
    title: "One-Time SEO Project",
    slug: "seo-project",
    categories: "project-based",
    description:
      "Targeted, one-time SEO interventions to fix your website's critical issues—technical fixes, local SEO, audits, and backlinks.",
    bgImg: "/assets/img/services/seo-project-bg.svg",
    iconImage: "/assets/img/services/seo-project-icon.svg",
    buttonText: "Book Your SEO Project Call",
    detailsSections: [
      // 1. Hero Section
      {
        heading: {
          suppertitle: "SEO Project",
          title:
            "Targeted SEO Solutions. Get a One-Time Fix for a Long-Term Win.",
          subtitle:
            "Don't need a full-time retainer? Our one-time SEO projects are designed to solve your most critical challenges—from fixing your site's technical foundation to putting your business on the map with Local SEO.",
          ctaText: "Book Your SEO Project Call",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
      // 2. Problem Section
      {
        heading: {
          title: "Is One Specific Problem Holding Your Website Back?",
          subtitle:
            "Your overall marketing is good, but you're being held back by a nagging SEO issue. Does this sound familiar?",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "You're a local business but you never show up on Google Maps.",
              "Your website is slow, full of errors, or has a 'Not Secure' warning.",
              "You know you need backlinks to build authority, but you have no idea how to get them safely.",
              "You're not sure what is wrong, you just know your site is broken and you need a 'health check'.",
            ],
          },
        ],
      },
      // 3. Solution Section
      {
        heading: {
          title: "An Expert Fix. A Single Project. A Lasting Impact.",
          subtitle:
            "Our 'Growth & Management' philosophy also applies to one-time projects. We provide focused, expert-level intervention to solve your most immediate SEO problems and unlock new growth.",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            items: [
              "Auditing: Comprehensive audit to identify all issues and opportunities.",
              "Local SEO: Optimize Google My Business, build citations, dominate 'near me' searches.",
              "Technical SEO Fix: Clean up backend, improve speed, fix errors and Core Web Vitals.",
              "Backlink Acquisition: Safe, manual outreach to high-quality, relevant websites.",
            ],
          },
        ],
      },
      // 4. Process Section
      {
        heading: {
          suppertitle: "How It Works",
          title: "Our 3-Step Project Process",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                steps: "Step 1",
                title: "Define the Scope",
                desc: "Project call to diagnose your problem and define clear deliverables and timeline.",
              },
              {
                steps: "Step 2",
                title: "Execute the Project",
                desc: "Specialized team executes the plan: technical fixes, local SEO, citations, or backlinks.",
              },
              {
                steps: "Step 3",
                title: "Deliver the Report",
                desc: "We provide a full completion report showing exactly what was done and expected outcomes.",
              },
            ],
          },
        ],
      },
      // 5. Pricing & Services Section
      {
        heading: {
          suppertitle: "One-Time SEO Services",
          title: "Our Project Menu",
          variant: "v1",
        },
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                name: "SEO Audit (The Blueprint)",
                price: "BDT 15,000 - 50,000",
                subtitle:
                  "Comprehensive audit of technical, on-page, and off-page health with a prioritized 'to-do' list.",
              },
              {
                name: "Local SEO Setup (On the Map)",
                price: "BDT 18,000 - 25,000",
                subtitle:
                  "Optimize Google My Business, build essential citations, and rank for 'near me' searches.",
              },
              {
                name: "Technical SEO Fix (The Tune-Up)",
                price: "BDT 20,000 - 100,000+",
                subtitle:
                  "Fix speed, 404 errors, and Core Web Vitals issues to help your site rank higher.",
              },
              {
                name: "Backlink & Guest Post Acquisition",
                price: "BDT 5,000 - 20,000+ per link",
                subtitle:
                  "Manual outreach to secure high-quality, relevant backlinks that boost authority.",
              },
            ],
          },
        ],
      },
      // 6. Social Proof Section
      {
        heading: {
          suppertitle: "Results That Matter",
          title: "Targeted Fixes, Tangible Results",
          variant: "v2",
        },
        content: [
          {
            type: "testimonial",
            quote:
              "'Our Google My Business profile was a mess, and we had no local traffic. Vibely's 'Local SEO Setup' completely turned it around. Our foot traffic from Google Maps increased by 50%!'",

            author: "[Client Name], [Owner], [Local Business Name]",
          },
          {
            type: "case-study",
            client: "[A Bangladeshi E-commerce Site]",
            project: "Technical SEO Fix",
            solution:
              "Fixed crawl budget issues and optimized Core Web Vitals (speed).",
            result:
              "Within 45 days, crawlable pages increased by 300% and organic traffic to product pages grew 40%.",
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
          title: "Your Project Questions, Answered",
          variant: "v2",
        },
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              {
                title:
                  "What's the difference between a 'Project' and a 'Retainer'?",
                desc: "A Retainer is ongoing Growth & Management. A Project is a one-time fix for a specific problem.",
              },
              {
                title: "Should I get an Audit first?",
                desc: "Yes, the SEO Audit is the diagnostic tool to quote accurately for Technical Fixes.",
              },
              {
                title: "Are your backlinks 'safe'?",
                desc: "100% manual, white-hat outreach. No black-hat or spammy techniques.",
              },
              {
                title: "How long does a project take?",
                desc: "Local SEO: 2-3 weeks. Technical Fix: 2-4 weeks depending on complexity.",
              },
            ],
          },
        ],
      },
      // 8. Final CTA Section
      {
        heading: {
          suppertitle: "Unlock Growth",
          title: "Stop Letting One Problem Hold You Back",
          subtitle:
            "Let's get it fixed. Schedule your free, no-obligation project call and identify the one-time fix that unlocks your growth.",
          ctaText: "Book Your SEO Project Call",
          ctaHref: "#contact",
          variant: "v3",
        },
      },
    ],
  },
};

export default servicesData;
