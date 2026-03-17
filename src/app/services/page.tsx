import { ModuleTitle } from "@/components/common/ModuleTitle";
import Faq from "@/components/Module/Faq/Faq";
import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";
import { DigitalFramework } from "@/components/Module/methodology/DigitalFramework";
import AllServices from "@/components/Module/services/AllServices";
import { Testimonials } from "@/components/Module/testimonials/Testimonials";
import { servicesData } from "@/data/services/servicesData";
import { successPath } from "@/data/process";
import { testimonialsData } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Vibely Digital",
  description:
    "Explore our comprehensive digital services including content creation, growth management, and strategy & audit.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbHero
        title="Our Services"
        description="No matter the industry you’re in, or the asset you need, we can design it for you."
      />
      <section>
        <div className="container">
          <ModuleTitle
            title="A Service for Every Stage of Your Growth"
            subtitle="Clearly present your three main service categories. This section is the primary navigation of the page."
            variant="v1"
          />
          <AllServices services={servicesData} />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="Your Integrated Path to Success"
            subtitle="Show that these are not just separate services, but an interconnected system."
            variant="v1"
          />
          <DigitalFramework items={successPath} />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="The Partner Brands Trust to Deliver"
            subtitle="Build confidence in Vibely Digital as a whole, not just one service."
            variant="v1"
          />
          <Testimonials dataSource={testimonialsData} />
        </div>
      </section>
      <section>
        <div className="container">
          <Faq />
        </div>
      </section>
    </>
  );
}
