import { ProcessCarousel } from "@/components/carousel/ProcessCarousel";
import { ModuleTitle } from "@/components/common/ModuleTitle";
import Faq from "@/components/Module/Faq/Faq";
import Apart from "@/components/Module/apart/Apart";
import CoreValuesCard from "@/components/Module/cards/CoreValuesCard";
import ServeCard from "@/components/Module/cards/ServeCard";
import FunFact from "@/components/Module/funfacts/FunFact";
import { Gallery } from "@/components/Module/gallery/Gallery";
import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";
import { ServicesMarquee } from "@/components/Module/services/Services";
import DedicatedTeams from "@/components/Module/teams/DedicatedTeams";
import Team from "@/components/Module/teams/Team";
import { gallery } from "@/data/Gallery";
import { coreValues } from "@/data/coreValuesData";
import { funfacts } from "@/data/funFactData";
import { steps } from "@/data/process";
import { servicesData } from "@/data/service";
import { targetAudience } from "@/data/targetAudience";

export default function page() {
  return (
    <>
      <BreadcrumbHero
        title="About [VibelyDigital]"
        description="At VibelyDigital, our mission is clear: to help businesses gain the exposure they deserve. We specialize in creating data-driven strategies, quality content, and digital marketing management that allows businesses to focus on their core activities, while we handle their marketing efforts with expertise and precision."
        primaryButtonText="Get Started"
        primaryButtonLink="#contact"
        secondaryButtonText="Get Started"
        secondaryButtonLink="#contact"
        className="h-full"
      />
      <section>
        <div className="container">
          <ModuleTitle
            title="Our Mission"
            subtitle="Empowering businesses to focus on what they do best while we handle their digital marketing."
            variant="v2"
          />
          <FunFact items={funfacts} duration={3} className="my-12" />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="Core Values"
            subtitle="Our approach is built on a foundation of data-driven strategy, quality content, and efficient marketing management."
            variant="v1"
          />
          <CoreValuesCard coreValues={coreValues} />
        </div>
      </section>

      <section className="bg-bg100">
        <div className="container">
          <ModuleTitle
            title="Who We Serve"
            subtitle="Our main target audience consists of startups and businesses that need to focus on their core operations while letting marketing experts handle their digital strategies."
            variant="v1"
          />
          <ServeCard items={targetAudience} />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="What Sets Us Apart"
            subtitle="What differentiates VibelyDigital from others is our comprehensive approach, led by experienced leaders."
            variant="v1"
          />
          <Apart />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="What Sets Us Apart"
            subtitle="What differentiates VibelyDigital from others is our comprehensive approach, led by experienced leaders."
            variant="v1"
          />
          <DedicatedTeams />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="What Sets Us Apart"
            subtitle="What differentiates VibelyDigital from others is our comprehensive approach, led by experienced leaders."
            variant="v1"
          />
          <Team />
        </div>
      </section>

      <section>
        <div className="container">
          <ModuleTitle
            title="Leverage the Power of a Cohesive Marketing Ecosystem"
            subtitle="Complete Digital Marketing Services: The secrets for 50% + Growth"
            ctaText="Let's Discuss"
            variant="v2"
          />
          <ServicesMarquee services={servicesData} />
        </div>
      </section>

      <section>
        <div className="container">
          <ProcessCarousel
            items={steps.steps}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <Faq />
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <Gallery photos={gallery} />
        </div>
      </section>
    </>
  );
}
