export interface ContactInfoItem {
  id: number;
  title: string;
  value: string;
  icon: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    title: "Email",
    value: "techteam@kawruh.com",
    icon: "/assets/svg/email.svg",
  },
  {
    id: 2,
    title: "Phone",
    value: "(0252) 8324 9231",
    icon: "/assets/svg/phone.svg",
  },
];

export const formFields = [
  {
    id: "name",
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
    spacing: "space-y-1.5",
  },
  {
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Email address",
    required: true,
    spacing: "space-y-2",
  },
  {
    id: "company",
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Your company name",
    required: false,
    spacing: "space-y-2",
  },
  {
    id: "service",
    name: "service",
    label: "Service Interest",
    type: "select",
    placeholder: "",
    required: false,
    spacing: "space-y-2",
    options: [
      { value: "", label: "Select a service" },
      { value: "web-development", label: "Web Development" },
      { value: "ui-ux-design", label: "UI/UX Design" },
      { value: "e-commerce", label: "E-commerce Solutions" },
      { value: "mobile-development", label: "Mobile Development" },
      { value: "consulting", label: "Technical Consulting" },
      { value: "maintenance", label: "Maintenance & Support" },
    ],
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave us message",
    required: true,
    spacing: "space-y-1.5",
    rows: 5,
  },
];


