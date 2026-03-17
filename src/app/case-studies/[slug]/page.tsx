import ProjectDetails from "@/components/Module/case-studies/ProjectDetails";
import { blogs as projects } from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// This generates static paths for all case studies
export async function generateStaticParams() {
  // Ensure projects array exists and has items
  if (!projects || projects.length === 0) {
    return [];
  }
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Vibely Digital",
      description: "The case study you're looking for could not be found.",
    };
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      images: [project.image],
      type: "article",
      publishedTime: project.date,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  // Find the project directly - more efficient than using some() + find() in ProjectDetails
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetails projectSlug={slug} />;
}
