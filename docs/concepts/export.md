# Export

Export your designs as clean, production-ready code.

## Formats

| Format | Description |
|--------|-------------|
| **JSX** | React component syntax |
| **HTML** | HTML snippet (no doctype) |
| **Full Page** | Complete HTML document with `<!DOCTYPE>`, `<head>`, and Tailwind CSS |

Access the export modal from **File → Export** in the menu bar.

## What Gets Exported

- Semantic HTML tags (div, section, header, p, h1–h6, button, etc.)
- Tailwind CSS classes for all styles
- Proper nesting matching the frame tree
- Text content
- Image sources (local assets resolved to relative paths)
- Link hrefs

## Tailwind Classes

Exported code uses idiomatic Tailwind classes wherever possible:

```html
<!-- Token-matched values → clean classes -->
<div class="flex flex-col gap-4 p-6 bg-blue-500 rounded-lg">
  <h1 class="text-2xl font-bold text-white">Hello</h1>
</div>

<!-- Custom values → arbitrary value syntax -->
<div class="w-[350px] bg-[#fe0000]">...</div>
```
