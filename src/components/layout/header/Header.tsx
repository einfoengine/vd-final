"use client";

// import Button from "@/components/button/Button";
import { menuItems } from "@/data/menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import MobileNav from "./component/MobileNav";
import Submenu from "./component/Submenu";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const { openMeetingModal } = useModal();

  // Helper function to check if a link is active
  const isLinkActive = (link: string | undefined) => {
    if (!link) return false;
    return pathname === link || pathname.startsWith(link + "/");
  };

  // Handle scroll for background color change
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu content component to avoid duplication
  const menuContent = (
    <>
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center transition-transform duration-300 hover:scale-105"
      >
        <Image
          width={140}
          height={60}
          src="/assets/logo/logo-black.svg"
          alt="DevioNex Logo"
          priority={true}
          className="h-10 w-auto transition-all duration-500"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center justify-between gap-8 h-full mb-0">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="relative h-full flex items-center justify-center text-base font-title"
            onMouseEnter={() =>
              item.subMenuItems && setOpenDropdown(item.id)
            }
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.subMenuItems ? (
              <>
                <Link
                  href={item.link || "#"}
                  className={`group text-base font-title font-semibold transition-all duration-300 ease-in-out flex items-center gap-1 hover:scale-105 cursor-pointer ${
                    isLinkActive(item.link) ? "bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-bold" : "text-title"
                  }`}
                >
                  {item.title}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <Submenu
                  subMenuItems={item.subMenuItems || []}
                  isOpen={openDropdown === item.id}
                />
              </>
            ) : (
              <Link
                href={item.link || "#"}
                className={`text-base font-title font-semibold transition-all duration-300 ease-in-out hover:scale-105 ${
                  isLinkActive(item.link)
                    ? "bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-bold"
                    : "text-gray-800 hover:text-theme"
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSwitcher />
        <div
          onClick={openMeetingModal}
          className="relative px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden group cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)",
            backgroundSize: "200% 200%",
            boxShadow: "0 0 20px rgba(255, 190, 61, 0.3), 0 0 40px rgba(255, 190, 61, 0.1)",
            animation: "gradientShift 4s ease infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 190, 61, 0.5), 0 0 60px rgba(255, 190, 61, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 190, 61, 0.3), 0 0 40px rgba(255, 190, 61, 0.1)";
          }}
        >
          <span className="relative z-10 animated-text-color">Schedule A Meeting</span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(255, 190, 61, 0.2), transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden p-2 rounded-md text-desc hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110 transform"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="transition-transform duration-300 ease-in-out">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </button>
    </>
  );

  return (
    <>
      <header className="fixed top-2 left-0 right-0 transition-all duration-300 ease-in-out z-50">
        <div className="container mx-auto px-4">
          {/* Inner Content Container */}
          {isScrolled ? (
            <div className="rounded-full bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-between h-20 px-6">
                {menuContent}
              </div>
            </div>
          ) : (
            <div className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-between h-20 px-6">
                {menuContent}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </header>
    </>
  );
}
