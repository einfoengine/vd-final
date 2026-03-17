"use client";
import { contactInfo, menuItems } from "@/data/menu";
import { socialMediaLinks } from "@/data/socials";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  onClose?: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isLinkActive = (link: string | undefined) =>
    link?.split("/")[1] === pathname?.split("/")[1];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex">
      {/* Mobile Sidebar */}
      <div className="bg-white w-80 h-full flex flex-col border-r border-gray-200">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {/* Logo */}
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              width={140}
              height={60}
              src="/assets/img/logo.svg"
              alt="DevioNex Logo"
              className="h-10 w-auto"
              priority={true}
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-desc" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6">
          <ul className="space-y-1 px-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link || "#"}
                  onClick={onClose}
                  className={`block py-4 px-0 text-sm font-title font-semibold text-title hover:text-teal-600 transition-colors ${
                    isLinkActive(item.link) ? "text-teal-600" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 mx-6"></div>

        {/* Contact Information */}
        <div className="p-6 space-y-4">
          <div className="text-sm text-desc space-y-2">
            <p className="font-medium">{contactInfo.address}</p>
            <p className="font-medium">{contactInfo.phone}</p>
            <p className="font-medium">{contactInfo.email}</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <i className={`${social.icon} text-title text-lg`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay - Click to close */}
      <div className="flex-1 bg-transparent" onClick={onClose}></div>
    </div>
  );
}
