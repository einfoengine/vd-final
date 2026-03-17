import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";
import { PricingCalculator } from "@/components/Module/pricing/PricingCalculator";
import { ModuleTitle } from "@/components/common/ModuleTitle";

export const metadata = {
  title: "Pricing | Vibely Digital",
  description: "Transparent pricing for our digital marketing services.",
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbHero
        title="Transparent [Pricing]"
        subtitle="Investment"
        description="Choose the perfect plan for your business growth. No hidden fees, just results."
        // primaryButtonText="Get a Custom Quote"
        // primaryButtonLink="#calculator"
      />

      <section id="calculator" className="pt-0">
        <div className="container">
          <ModuleTitle
            suppertitle="Calculate Your Investment"
            title="Find the [Perfect Plan]"
            subtitle="Select a category and package to see the estimated cost."
            variant="v1"
            className="mb-12 text-center"
          />
          <PricingCalculator />
        </div>
      </section>
    </>
  );
}
