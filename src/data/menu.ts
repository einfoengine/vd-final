import { servicesData } from "@/data/services/servicesData";

export interface SubMenuItem {
  id: number;
  label: string;
  slug?: string;
  link?: string;
  image?: string;
  description?: string;
  subMenuItems?: SubMenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  link?: string;
  subMenuItems?: SubMenuItem[];
  isActive?: boolean;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialMediaLink {
  id: number;
  href: string;
  label: string;
  icon: string; // font-awesome class name
}

// Group services by category
// Use Object.entries to get both the key (slug) and value (service) to ensure slug matches the Record key
const groupedServices: SubMenuItem[] = [
  {
    id: 1,
    label: "Strategy & Consulting",
    subMenuItems: Object.entries(servicesData)
      .filter(([slug, s]) => s.categories === "strategy-&-consulting")
      .map(([slug, s]) => ({
        id: s.id,
        label: s.title,
        slug: slug, // Use the key from the Record instead of s.slug
        image: s.iconImage,
        description: s.description,
      })),
  },
  {
    id: 2,
    label: "Growth & Management",
    subMenuItems: Object.entries(servicesData)
      .filter(([slug, s]) => s.categories === "growth-&-management")
      .map(([slug, s]) => ({
        id: s.id,
        label: s.title,
        slug: slug, // Use the key from the Record instead of s.slug
        image: s.iconImage,
        description: s.description,
      })),
  },
  {
    id: 3,
    label: "Project-Based",
    subMenuItems: Object.entries(servicesData)
      .filter(([slug, s]) => s.categories === "project-based")
      .map(([slug, s]) => ({
        id: s.id,
        label: s.title,
        slug: slug, // Use the key from the Record instead of s.slug
        image: s.iconImage,
        description: s.description,
      })),
  },
];

export const menuItems: MenuItem[] = [
  { id: 1, title: "Home", link: "/" },
  // {
  //   id: 3,
  //   title: "Services",
  //   isActive: true,
  //   link: "/services",
  //   subMenuItems: groupedServices,
  // },
  { id: 4, title: "Case Studies", link: "/case-studies" },
  { id: 6, title: "Pricing", link: "/pricing" },
  { id: 5, title: "Contact Us", link: "/contact" },
];

export const contactInfo: ContactInfo = {
  address: "House-01 Road-06, Dhaka 1216",
  phone: "+8801690274952",
  email: "info@vibelydigital.com",
};

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/devionex",
    label: "LinkedIn",
    icon: "fab fa-linkedin",
  },
  {
    id: 2,
    href: "https://facebook.com/devionexcom",
    label: "Facebook",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://www.instagram.com/devionex_/",
    label: "Instagram",
    icon: "fab fa-instagram",
  },
];
