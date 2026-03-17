export type BlogSectionType = "intro" | "body" | "conclusion";

export interface BlogMeta {
  title: string;
  description: string;
}

// Content block types
export interface BlogImageBlock {
  type: "image";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface BlogParagraphBlock {
  type: "paragraph";
  content: string;
  className?: string;
}

export interface BlogListBlock {
  type: "list";
  items: string[];
  ordered?: boolean; // true for <ol>, false for <ul>
  className?: string;
}

export interface BlogImageRowBlock {
  type: "imageRow";
  images: Array<{
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;
  gap?: number; // gap between images in pixels, defaults to 4
  className?: string;
}

export type BlogContentBlock =
  | BlogImageBlock
  | BlogParagraphBlock
  | BlogListBlock
  | BlogImageRowBlock;

// Modern dynamic section interface
export interface BlogSection {
  type: BlogSectionType;
  heading?: string;
  content?: string; // Legacy support - kept for backward compatibility
  image?: string; // Legacy support - kept for backward compatibility
  list?: string[]; // Legacy support - kept for backward compatibility
  // New dynamic blocks array
  blocks?: BlogContentBlock[];
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  category: string;
  author: string;
  keywords: string[];
  meta: BlogMeta;
  sections: BlogSection[];
}

export default Blog;


