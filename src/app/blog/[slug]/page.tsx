import BlogDetails from "@/components/Module/blog/BlogDetails";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// This generates static paths for all blogs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Vibely Digital",
      description: "The blog post you're looking for could not be found.",
    };
  }

  return {
    title: blog.meta.title,
    description: blog.meta.description,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      images: [blog.image],
      type: "article",
      publishedTime: blog.date,
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  // Check if blog exists, use notFound() for proper 404 handling
  const blogExists = blogs.some((b) => b.slug === slug);
  if (!blogExists) {
    notFound();
  }

  return <BlogDetails blogSlug={slug} />;
}
