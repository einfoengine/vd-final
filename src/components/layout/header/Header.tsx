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
          src={isScrolled ? "/assets/logo/logo-black.svg" : "/assets/logo/logo-white.svg"}
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
                    isLinkActive(item.link) ? "bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-bold" : isScrolled ? "text-title" : "text-white/90 hover:text-white"
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
                    : isScrolled ? "text-gray-800 hover:text-theme" : "text-white/90 hover:text-white"
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
          className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
            isScrolled
              ? "bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-700"
              : "bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-sm"
          }`}
        >
          Schedule A Meeting
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
      <header className="fixed top-4 left-0 right-0 transition-all duration-300 ease-in-out z-50">
        <div className="container mx-auto px-4">
          {/* Inner Content Container */}
          <div className={`rounded-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-sm"
              : "bg-black/80 lg:bg-white/[0.06] backdrop-blur-xl border border-white/10 border-b lg:border-b-white/10 shadow-[0_2px_30px_rgba(0,0,0,0.2)]"
          }`}>
            <div className="flex items-center justify-between px-4 py-3">
              {menuContent}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </header>
    </>
  );
}
