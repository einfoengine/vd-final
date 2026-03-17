import CaseStudies from "@/components/Module/case-studies/CaseStudies";
import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";

export default function page() {
  return (
    <>
      <BreadcrumbHero
        title="A HOLISTIC APPROACH FOR [SUCCESSFUL DIGITAL MARKETING]"
        subtitle="4.9"
        description="Drive sustainable growth with research based full-funnel digital marketing. We deliver research-backed strategy, compelling content, and seamless multi-channel execution."
        primaryButtonText="Get Started"
        primaryButtonLink="#contact"
        secondaryButtonText="Get Started"
        secondaryButtonLink="#contact"
        className="h-full"
      />
      <section>
        <div className="container">
          <CaseStudies />
        </div>
      </section>
    </>
  );
}
