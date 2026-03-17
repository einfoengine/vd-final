import Button from "@/components/button/Button";
import { blogs as projects } from "@/data/projects";
import type { BlogContentBlock as ContentBlock } from "@/types/blog";
import Image from "next/image";

interface ProjectDetailsProps {
  projectSlug: string;
}

// Render a single content block
function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "image":
      return (
        <div
          key={`image-${index}`}
          className={`section-img mt-4 mb-4 ${block.className || ""}`}
        >
          <Image
            width={block.width || 800}
            height={block.height || 400}
            src={block.src}
            alt={block.alt || "case study section image"}
            className="w-full h-auto rounded-lg"
          />
        </div>
      );

    case "paragraph":
      return (
        <p
          key={`paragraph-${index}`}
          className={`mt-4 mb-4 text-base leading-relaxed ${
            block.className || ""
          }`}
        >
          {block.content}
        </p>
      );

    case "list":
      const ListTag = block.ordered ? "ol" : "ul";
      const listClass = block.ordered
        ? "list-decimal pl-6 mt-4 mb-4 space-y-2"
        : "list-disc pl-6 mt-4 mb-4 space-y-2";

      return (
        <ListTag
          key={`list-${index}`}
          className={`${listClass} ${block.className || ""}`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ListTag>
      );

    case "imageRow":
      return (
        <div
          key={`imageRow-${index}`}
          className={`grid grid-cols-2 gap-${block.gap || 4} mt-4 mb-4 ${
            block.className || ""
          }`}
          style={{ gap: `${block.gap || 16}px` }}
        >
          {block.images.map((img, imgIndex) => (
            <div key={imgIndex} className="w-full">
              <Image
                width={img.width || 600}
                height={img.height || 400}
                src={img.src}
                alt={img.alt || `case study image ${imgIndex + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectDetails({ projectSlug }: ProjectDetailsProps) {
  const project = projects.find((p) => p.slug === projectSlug);

  // This check should never be needed since page component handles it,
  // but keeping as a safety check
  if (!project) return null;

  return (
    <section className="pt-40">
      <div className="container">
        <Button
          label="← Back to Case Studies"
          href="/case-studies"
          variant="outline"
          size="sm"
          className="mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="case-study-meta mb-6">
          {project.date} | {project.category} | By {project.author}
        </p>

        <div className="case-study-image mb-8">
          <Image
            width={900}
            height={500}
            src={project.image}
            alt={project.title}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>

        {project.sections.map((section, sectionIndex) => {
          // Check if section uses new dynamic blocks
          const hasDynamicBlocks =
            Array.isArray(section.blocks) && section.blocks.length > 0;

          return (
            <div key={sectionIndex} className="case-study-section mt-10 mb-10">
              {section.heading && (
                <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
              )}

              {hasDynamicBlocks ? (
                // Render dynamic blocks
                <div className="section-content">
                  {section.blocks!.map((block, blockIndex) =>
                    renderContentBlock(block, blockIndex)
                  )}
                </div>
              ) : (
                // Legacy support: render old structure
                <>
                  {section.image && (
                    <div className="section-img mt-4 mb-4">
                      <Image
                        width={800}
                        height={400}
                        src={section.image}
                        alt={section.heading || "case study section image"}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  {section.content && (
                    <p className="mt-4 mb-4 text-base leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {Array.isArray(section.list) && section.list.length > 0 && (
                    <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold mb-4 text-gray-600">Keywords:</p>
          <ul className="flex flex-wrap gap-2">
            {Array.isArray(project.keywords) &&
              project.keywords.map((item, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
