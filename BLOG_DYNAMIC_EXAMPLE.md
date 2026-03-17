# Dynamic Blog Content Blocks - Usage Guide

The blog system now supports fully dynamic content blocks. You can add multiple images, paragraphs, and lists in any order within a section.

## Content Block Types

### 1. Image Block
```typescript
{
  type: "image",
  src: "/path/to/image.jpg",
  alt: "Image description",
  width: 800,        // optional, defaults to 800
  height: 400,       // optional, defaults to 400
  className: "custom-class"  // optional
}
```

### 2. Paragraph Block
```typescript
{
  type: "paragraph",
  content: "Your paragraph text here...",
  className: "custom-class"  // optional
}
```

### 3. List Block
```typescript
{
  type: "list",
  items: ["Item 1", "Item 2", "Item 3"],
  ordered: false,    // false for <ul>, true for <ol>
  className: "custom-class"  // optional
}
```

## Example Blog Section

Here's a complete example of a blog section using dynamic blocks:

```typescript
{
  type: "body",
  heading: "Introduction to Dynamic Blogging",
  blocks: [
    {
      type: "paragraph",
      content: "This is the first paragraph introducing the topic."
    },
    {
      type: "image",
      src: "/assets/img/blog/example1.jpg",
      alt: "First example image",
      width: 900,
      height: 500
    },
    {
      type: "paragraph",
      content: "After showing an image, here's another paragraph explaining more details."
    },
    {
      type: "list",
      items: [
        "First key point",
        "Second key point",
        "Third key point"
      ],
      ordered: false
    },
    {
      type: "image",
      src: "/assets/img/blog/example2.jpg",
      alt: "Second example image"
    },
    {
      type: "paragraph",
      content: "You can add as many images, paragraphs, and lists as you want in any order!"
    },
    {
      type: "list",
      items: [
        "Step 1: Do this first",
        "Step 2: Then do this",
        "Step 3: Finally, do this"
      ],
      ordered: true
    }
  ]
}
```

## Backward Compatibility

The old structure still works! If a section doesn't have `blocks`, it will automatically use the legacy format:
- `content` → renders as paragraph
- `image` → renders as image
- `list` → renders as unordered list

You can mix and match - some sections can use the new `blocks` array, while others use the legacy format.

