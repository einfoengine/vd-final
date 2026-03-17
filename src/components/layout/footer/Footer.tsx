"use client";

import { links } from "@/data/footerlink";
// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import Socials from "./component/Socials";

export default function Footer() {
  const footerRef = React.useRef<HTMLElement>(null);
  const [translateY, setTranslateY] = React.useState(150);
  const isInView = useInView(footerRef, { once: false, amount: 0.1 });

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Calculate scroll progress
      // Start parallax effect earlier for smoother transition
      // Use a larger trigger distance (3 viewport heights) for gradual effect
      const parallaxTriggerDistance = windowHeight * 3;
      const distanceFromBottom = documentHeight - scrollBottom;

      let progress = 0;
      if (distanceFromBottom <= parallaxTriggerDistance) {
        // Calculate progress: 0 when far from bottom, 1 when at bottom
        progress = Math.max(0, 1 - (distanceFromBottom / parallaxTriggerDistance));
      }

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Parallax effect: footer moves up progressively as user scrolls
      // Start offset: footer begins 150px below its natural position
      const maxOffset = 150;
      // Smooth ease-out curve for natural motion
      const easedProgress = 1 - Math.pow(1 - progress, 2); // Quadratic ease-out
      const newTranslateY = maxOffset * (1 - easedProgress);

      setTranslateY(newTranslateY);
    };

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Continuously changing black gradient background
  const animatedGradient = `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)`;

  return (
    <motion.footer
      ref={footerRef}
      className="pt-20 relative pb-0 rounded-3xl overflow-hidden animated-black-gradient"
      style={{
        transform: `translateY(${translateY}px)`,
        willChange: "transform",
        background: animatedGradient,
        backgroundSize: "200% 200%",
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-between mb-12">
          {Object.entries(links).map(([sectionName, sectionLinks]) => (
            <div key={sectionName}>
              <h6 className="text-white uppercase text-[16px]">
                {sectionName}
              </h6>
              <ul className="p-0 flex flex-col gap-2 mt-5">
                {sectionLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      scroll={false}
                      href={link.href}
                      className="text-white opacity-90 hover:text-theme hover:opacity-[1] no-underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-8 border-t">
        <div className="flex items-center justify-between gap-6">
          <p className="text-white mb-0">
            Copyright © {new Date().getFullYear()}
            <Link href="https://vibelydigital.com" className="ml-1">
              VibelyDigital
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Socials />
          </div>
        </div>
      </div>
      <Image
        width={86}
        height={24}
        src="/assets/logo/footer-b-logo.svg"
        alt="logo"
        priority={false}
        className="w-full p-3 mt-12"
      />
    </motion.footer>
  );
}
