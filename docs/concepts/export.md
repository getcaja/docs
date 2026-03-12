# Export

Export your designs as clean, production-ready code.

## Formats

| Format | Description |
|--------|-------------|
| **JSX** | React component syntax |
| **HTML** | HTML snippet (no doctype) |
| **Full Page** | Complete HTML document with `<!DOCTYPE>`, `<head>`, and Tailwind CSS CDN |

Access the export modal from **File → Export** in the menu bar.

## What Gets Exported

- Semantic HTML tags (div, section, header, p, h1–h6, button, etc.)
- Tailwind CSS classes for all styles
- Proper nesting matching the frame tree
- Text content
- Image sources (local assets resolved to relative `./assets/` paths)
- Link hrefs
- Responsive overrides as `max-xl:` and `max-md:` prefixed classes
- Custom CSS classes and HTML IDs

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

## Google Fonts

When a frame uses a Google Font (set via MCP or the font family picker), the Full Page export includes a `<link>` tag in the `<head>` to load the font from Google Fonts CDN. The font name is applied via an inline `font-family` style.

## Asset Resolution

Local images stored in the project's `assets/` directory are resolved during export:
- **JSX / HTML** — Image `src` attributes use relative paths like `./assets/image-abc123.png`
- **Full Page** — Same relative paths, so the exported HTML works when the `assets/` folder is alongside it

## Full Page CSS

The Full Page export embeds the Tailwind CSS v4 CDN script in the `<head>`, making the exported file fully self-contained — just open it in a browser.

## Static Output

Exports produce static markup only. Interactive behaviors (click handlers, state management, form submission) are not included. The exported code is a starting point for integration into your application.
