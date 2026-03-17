import BlogList from "@/components/Module/blog/Blog";
import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Vibely Digital",
  description:
    "Explore the latest insights, trends, and best practices in digital marketing, UX/UI design, and web development.",
};

export default function page() {
  return (
    <>
      <BreadcrumbHero
        title="Our Blog"
        description="No matter the industry you’re in, or the asset you need, we can design it for you."
      />
      <section>
        <div className="container">
          <BlogList />
        </div>
      </section>
    </>
  );
}
