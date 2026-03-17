"use client";

import { blogs as projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import CaseStudiesFilter from "./CaseStudiesFilter";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from case studies
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((project) => project.category))
    );
    return uniqueCategories.sort();
  }, []);

  // Filter case studies based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* Case Studies Filter */}
      <CaseStudiesFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Case Studies Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <Link
                href={`/case-studies/${project.slug}`}
                scroll={false}
                className="block"
              >
                <div className="relative w-full h-80 md:h-96 lg:h-[480px] overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>
              <div className="mt-6">
                <div className="flex flex-wrap items-center text-sm text-desc mb-2 space-x-2">
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {project.category}
                  </Link>
                </div>
                <h4>
                  <Link href={`/case-studies/${project.slug}`} scroll={false}>
                    {project.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg">No case studies found in this category.</p>
        </div>
      )}
    </>
  );
}
