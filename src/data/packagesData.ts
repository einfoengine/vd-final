


export interface PackageFeature {
  name: string;
  price: number;
}

export interface PackageItem {
  title: string;
  priceUnit: string;
  discount: number;
  duration: string;
  features: PackageFeature[];
  isPopular?: boolean;
}

export type PackageCategory = 
  | "Unified" 
  | "Social Media Marketing" 
  | "SEO" 
  | "Website Design & Development"
  | "Video & Animation";

export const packagesData: Record<PackageCategory, PackageItem[]> = {
  "Unified": [
    {
      "title": "Starter",
      "priceUnit": "USD/month",
      "discount": 100,
      "duration": "Minimum 4 months",
      "features": [
        { name: "Holistic plan", price: 0 },
        { name: "Monthly plan", price: 0 },
        { name: "2 social media platforms", price: 100 },
        { name: "8 Static posts", price: 128 },
        { name: "1 Animated post", price: 30 },
        { name: "4 short video post", price: 400 }
      ]
    },
    {
      "title": "Growth",
      "priceUnit": "USD/month",
      "discount": 0,
      "duration": "Minimum 4 months",
      "features": [
        { name: "Holistic plan", price: 0 },
        { name: "Monthly plan", price: 0 },
        { name: "Monthly website optimization", price: 859 },
        { name: "2 standard blogs", price: 0 },
        { name: "3 Social media platforms", price: 0 },
        { name: "12 Static posts", price: 0 },
        { name: "4 High Quality Videos", price: 0 },
        { name: "High value post writing", price: 0 },
        { name: "Media buying (up to 4 campaigns)", price: 0 }
      ],
      "isPopular": true
    },
    {
      "title": "Business",
      "priceUnit": "USD/month",
      "discount": 0,
      "duration": "Minimum 4 months",
      "features": [
        { name: "Holistic plan", price: 0 },
        { name: "Monthly plan", price: 0 },
        { name: "Monthly website optimization", price: 999 },
        { name: "4 standard blogs", price: 0 },
        { name: "Internal links", price: 0 },
        { name: "External link building", price: 0 },
        { name: "4 Social media management", price: 0 },
        { name: "8 Static posts", price: 0 },
        { name: "4 High Quality Videos", price: 0 },
        { name: "VDO Platform management with SEO support", price: 0 },
        { name: "High value post writing", price: 0 },
        { name: "Media buying (4 campaigns, retargeting)", price: 0 }
      ]
    }
  ],
  "Social Media Marketing": [
    {
      "title": "Essential SMM",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "2 Social Platforms", price: 299 },
        { name: "12 Posts per month", price: 0 },
        { name: "Community Management", price: 0 },
        { name: "Monthly Reporting", price: 0 }
      ]
    },
    {
      "title": "Pro SMM",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "4 Social Platforms", price: 499 },
        { name: "20 Posts per month", price: 0 },
        { name: "4 Reels/TikToks", price: 0 },
        { name: "Community Management", price: 0 },
        { name: "Monthly Reporting", price: 0 },
        { name: "Ad Campaign Setup", price: 0 }
      ],
      "isPopular": true
    },
    {
      "title": "Elite SMM",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "All Social Platforms", price: 899 },
        { name: "Daily Posting", price: 0 },
        { name: "8 Reels/TikToks", price: 0 },
        { name: "24/7 Community Management", price: 0 },
        { name: "Weekly Reporting", price: 0 },
        { name: "Ad Campaign Management", price: 0 },
        { name: "Influencer Outreach", price: 0 }
      ]
    }
  ],
  "SEO": [
    {
      "title": "Basic SEO",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "Keyword Research", price: 399 },
        { name: "On-Page Optimization", price: 0 },
        { name: "Technical SEO Audit", price: 0 },
        { name: "Monthly Reporting", price: 0 }
      ]
    },
    {
      "title": "Advanced SEO",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "Everything in Basic", price: 699 },
        { name: "Content Strategy", price: 0 },
        { name: "4 Blog Posts", price: 0 },
        { name: "Backlink Building (5/mo)", price: 0 },
        { name: "Competitor Analysis", price: 0 }
      ],
      "isPopular": true
    },
    {
      "title": "Enterprise SEO",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "Monthly",
      "features": [
        { name: "Everything in Advanced", price: 1299 },
        { name: "8 Blog Posts", price: 0 },
        { name: "Backlink Building (15/mo)", price: 0 },
        { name: "Local SEO", price: 0 },
        { name: "Schema Markup", price: 0 },
        { name: "Conversion Rate Optimization", price: 0 }
      ]
    }
  ],
  "Website Design & Development": [
    {
      "title": "Landing Page",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "One-time",
      "features": [
        { name: "Custom Design", price: 499 },
        { name: "Mobile Responsive", price: 0 },
        { name: "Contact Form", price: 0 },
        { name: "Speed Optimization", price: 0 },
        { name: "Basic SEO", price: 0 }
      ]
    },
    {
      "title": "Business Website",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "One-time",
      "features": [
        { name: "Up to 10 Pages", price: 999 },
        { name: "CMS Integration", price: 0 },
        { name: "Blog Setup", price: 0 },
        { name: "Social Media Integration", price: 0 },
        { name: "Google Analytics Setup", price: 0 },
        { name: "1 Month Support", price: 0 }
      ],
      "isPopular": true
    },
    {
      "title": "E-commerce",
      "priceUnit": "USD",
      "discount": 0,
      "duration": "One-time",
      "features": [
        { name: "Online Store Setup", price: 1999 },
        { name: "Payment Gateway", price: 0 },
        { name: "Product Management", price: 0 },
        { name: "Inventory System", price: 0 },
        { name: "User Accounts", price: 0 },
        { name: "3 Months Support", price: 0 }
      ]
    }
  ],
  "Video & Animation": [
    {
      "title": "Film",
      "priceUnit": "USD/min",
      "discount": 0,
      "duration": "Per minute",
      "features": [
        { name: "Shoot", price: 889 },
        { name: "Edit", price: 0 },
        { name: "BGM", price: 0 },
        { name: "Voiceover", price: 0 },
        { name: "Script", price: 0 },
        { name: "Idea", price: 0 },
        { name: "Discussion", price: 0 },
        { name: "2 times revision", price: 0 },
        { name: "15 days delivery", price: 0 }
      ]
    },
    {
      "title": "2D Animation",
      "priceUnit": "USD/30 sec",
      "discount": 0,
      "duration": "Per 30 sec",
      "features": [
        { name: "Discussion", price: 549 },
        { name: "Script", price: 0 },
        { name: "Ideation", price: 0 },
        { name: "Story board", price: 0 },
        { name: "Animation", price: 0 },
        { name: "1 time correction", price: 0 },
        { name: "7 days delivery", price: 0 }
      ]
    },
    {
      "title": "UI Animation",
      "priceUnit": "USD/30 sec",
      "discount": 0,
      "duration": "Per 30 sec",
      "features": [
        { name: "Discussion", price: 549 },
        { name: "Script", price: 0 },
        { name: "Ideation", price: 0 },
        { name: "Story board", price: 0 },
        { name: "Animation", price: 0 },
        { name: "1 time correction", price: 0 },
        { name: "7 days delivery", price: 0 }
      ]
    }
  ]
};
