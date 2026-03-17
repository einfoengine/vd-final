"use client";

// import Faq from "@/components/Module/Faq/Faq";
// import { UltimateServicesCard } from "@/components/Module/cards/UltimateServicesCard";
import { ContentMixComparison } from "@/components/Module/content-mix/ContentMixComparison";
import { Hero } from "@/components/Module/hero/Hero";
import { DigitalFramework } from "@/components/Module/methodology/DigitalFramework";
import { StickyCards } from "@/components/Module/stickyCard/StickyCards";
// import { ProcessCarousel } from "@/components/carousel/ProcessCarousel";
import { ModuleTitle } from "@/components/common/ModuleTitle";
// import { InfiniteMarqueeCards } from "@/components/common/InfiniteMarqueeCards";
import { VarticalHoverTab } from "@/components/Module/VerticalHoverTab/VarticalHoverTab";
import { process } from "@/data/process";
// import { stickyCardsData } from "@/data/stickyCardsData";
import { infiniteCardItems } from "@/data/infiniteCards";
import Packages from "@/components/Module/packages/Packages";
import { packagesData } from "@/data/packagesData";
import Button from "@/components/button/Button";
import { PortfolioMarquee } from "@/components/carousel/PortfolioMarquee";
import { portfolioItems } from "@/data/portfolio";
import { Speciality } from "@/components/Module/speciality/Speciality";
// import { MeetingModal } from "@/components/common/MeetingModal";
import { useModal } from "@/context/ModalContext";

import { HolisticApproach } from "@/components/Module/holistic/HolisticApproach";
import { GrowthPhases } from "@/components/Module/methodology/GrowthPhases";
import AllServices from "@/components/Module/services/AllServices";
import { ClientLogos } from "@/components/Module/clients/ClientLogos";
import { WebsiteChecklist } from "@/components/Module/website-checklist/WebsiteChecklist";
import { SpringOffer } from "@/components/Module/spring-offer/SpringOffer";
import { fullStackServices } from "@/data/fullStackServices";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const { openMeetingModal, openAuditModal } = useModal();
  const targetRef = useRef<HTMLElement>(null);
  
  // Transition background from Light (#fef9ef) to Black (#0a0a0a) 
  // as the user scrolls into the Growth Roadmap section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#fef9ef", "#0a0a0a"]
  );

  const titleColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0a0c00", "#ffffff"]
  );

  const descColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#313030", "#e3e3e3"]
  );

  return (
    <>
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none transition-colors duration-0"
        style={{ backgroundColor }}
      />
      
      <motion.div 
        className="relative z-10 flex flex-col"
        style={{ 
          "--color-title": titleColor,
          "--color-desc": descColor,
          "--title-color": titleColor, // Fallback/Direct usage
          "--desc-color": descColor    // Fallback/Direct usage
        } as any}
      >
          {/* 1. HERO - Attract */}
          <section id="hero" className="pt-0 relative z-20">
            <Hero
              supertitle="Fix your digital presence"
              title="Drive [6X Growth] for your business"
              subtitle="4.9"
              description="We find your flaws & fix them to [multiply your leads, conversions and retention.]"
              primaryButtonText="Start with a free audit"
              onPrimaryClick={openAuditModal}
              secondaryButtonLink="#contact"
              className="h-full"
              video="/assets/video/hero.mp4"
            />
          </section>

          {/* 2. SOCIAL PROOF - Validate (Moved Up) */}
          <section className="relative z-20 bg-white/50 backdrop-blur-sm border-b border-gray-100">
             <ClientLogos />
          </section>

          {/* 3. SERVIES - What we do */}
          <section id="services" className="nt-framework">
            <div className="container">
              <ModuleTitle
                suppertitle="Following an audit we fix your digital presence"
                title="Providing [Everything You Need] to Multiply Your Growth"
                subtitle="Stop juggling freelancers. We are your complete digital marketing department."
                variant="v1"
              />
              <DigitalFramework items={fullStackServices} />
              <Button
                label="Start with a free Discovery Call"
                onClick={openAuditModal}
                className="mt-10 table m-auto"
              />
            </div>
          </section>


          {/* 4. STRATEGY BLOCK - How we think (Dark Transition Starts Here) */}
          <section ref={targetRef} id="growth-roadmap" className="nt-growth-management">
            <div className="container">
              <SpringOffer />
              <ModuleTitle
                title="The [Blueprint] for Predictable Revenue"
                variant="v1"
              />
              <GrowthPhases />
              <Button
                label="Start with a free Discovery Call"
                onClick={openAuditModal}
                className="mt-10 table m-auto"
              />
            </div>
          </section>

          <section id="content-mix" className="nt-solutions">
            <div className="container">
              <ModuleTitle
                className="text-center"
                title="Ignite engagement with [Dynamic Content]"
                variant="v1"
              />
              <ContentMixComparison />
              <Button
                label="Lest discuss, schedule a meeting"
                onClick={openMeetingModal}
                className="mt-10 table m-auto"
              />
            </div>
          </section>

          {/* Moved Holistic Approach Here - Completes the "Strategy" narrative */}
          <section id="approach" className="nt-approach">
            <HolisticApproach />
          </section>

          <section id="website-audit">
            <div>
              <WebsiteChecklist />
              <Button
                label="Lest discuss, schedule a meeting"
                onClick={openMeetingModal}
                className="mt-10 table m-auto"
              />
            </div>
          </section>


          {/* 5. PROOF & CONVERT - Portfolio, Why Us, Process, Packages */}
          <section id="portfolio" className="nt-portfolio">
            <div className="container mb-10">
              <ModuleTitle
                suppertitle="Proven Results"
                title="Success Stories [Built on Strategy]"
                variant="v1"
              />
              <PortfolioMarquee key="marquee-0" items={portfolioItems} speed={150} />
            </div>
          </section>

          <section id="why-us" className="nt-speciality">
            <div className="container">
              <ModuleTitle
                title="Why Visionary Brands [Choose Vibely]"
                subtitle="We don't just deliver tasks. We own the outcome."
                variant="v1"
              />
              <Speciality />
              <Button
                label="Lest discuss, schedule a meeting"
                onClick={openMeetingModal}
                className="mt-10 table m-auto"
              />
            </div>
          </section>

          <section id="process" className="nt-process">
            <div className="container">
              <div className="sticky top-28">
                <ModuleTitle
                  suppertitle="Seamless execution"
                  title="A streamlined [Path to Success]"
                  subtitle="No chaos. No guesswork. Just a transparent workflow designed for speed."
                  className="mb-0"
                />
              </div>
              <StickyCards
                cards={process.steps}
              />
            </div>
          </section>

          <section id="packages" className="nt-packages">
            <div className="container">
              <ModuleTitle
                suppertitle="Transparent Investment"
                title="Simple Pricing, [Maximum Impact]"
                variant="v1"
              />
              <Packages data={packagesData} />
            </div>
          </section>
      </motion.div>
    </>
  );
}
