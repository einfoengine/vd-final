"use client";

import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BlogFilter from "./BlogFilter";

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from blogs
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(blogs.map((blog) => blog.category))
    );
    return uniqueCategories.sort();
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) return blogs;
    return blogs.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* Blog Filter */}
      <BlogFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredBlogs.map((blog) => (
            <article key={blog.id} className="">
              <Link href={`/blog/${blog.slug}`} scroll={false}>
                <div className="relative w-full h-full md:h-80">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>
              <div className="mt-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 space-x-2">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {blog.category}
                  </Link>
                </div>
                <h4>
                  <Link href={`/blog/${blog.slug}`} scroll={false}>
                    {blog.title}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No blogs found in this category.
          </p>
        </div>
      )}
    </>
  );
}
