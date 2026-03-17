import { blogs } from "@/data/blogs";
import type { BlogContentBlock } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailsProps {
  blogSlug: string;
}

// Render a single content block
function renderContentBlock(block: BlogContentBlock, index: number) {
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
            alt={block.alt || "blog section image"}
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
                alt={img.alt || `blog image ${imgIndex + 1}`}
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

export default function BlogDetails({ blogSlug }: BlogDetailsProps) {
  const blog = blogs.find((b) => b.slug === blogSlug);

  // This check should never be needed since page component handles it,
  // but keeping as a safety check
  if (!blog) return null;

  return (
    <article className="blog-details space">
      <div className="container">
        <Link
          href="/blog"
          className="mb-4 inline-block text-blue-600 hover:text-blue-800 underline"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="blog-meta mb-6">
          {blog.date} | {blog.category} | By {blog.author}
        </p>

        <div className="blog-image mb-8">
          <Image
            width={900}
            height={500}
            src={blog.image}
            alt={blog.title}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>

        {blog.sections.map((section, sectionIndex) => {
          // Check if section uses new dynamic blocks
          const hasDynamicBlocks =
            Array.isArray(section.blocks) && section.blocks.length > 0;

          return (
            <div key={sectionIndex} className="blog-section mt-10 mb-10">
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
                        alt={section.heading || "blog section image"}
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
            {Array.isArray(blog.keywords) &&
              blog.keywords.map((item, i) => (
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
    </article>
  );
}
