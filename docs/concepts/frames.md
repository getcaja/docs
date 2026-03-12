# Frames & Elements

Everything in Caja is a **frame**. A frame is a node in the layout tree with properties that map to CSS.

## Element Types

| Type | Description | HTML Tag |
|------|-------------|----------|
| **Box** | Generic container | `div`, `section`, `header`, `footer`, `nav`, `main`, `article`, `aside`, `ul`, `ol`, `li`, `form` |
| **Text** | Text content | `p`, `h1`–`h6`, `span` |
| **Image** | Image element | `img` |
| **Button** | Clickable button | `button` |
| **Input** | Form input (text, email, password, number, search, tel, url, date, time, checkbox, radio, range) | `input` |
| **Textarea** | Multi-line input | `textarea` |
| **Select** | Dropdown select | `select` |
| **Link** | Anchor link | `a` |

The **Link** element is a text element with an `<a>` tag and an href property. Use it for navigation between pages or to external URLs.

## The Frame Tree

Frames are nested in a tree structure. Every page has a **root frame** (called **Body** in the Left Panel) that acts as the top-level container. All other frames are children (or descendants) of the root.

## Properties

Every frame has these core properties:

- **Name** — Display name, used as labels, override keys, and class names in export
- **HTML Tag** — The semantic tag for export (configurable via the `<>` selector)
- **Class** — Custom CSS class name for export
- **HTML ID** — Custom id attribute for export
- **Hidden** — Toggle visibility without deleting the frame. Hidden frames emit a `hidden` Tailwind class

Component instances have an additional `_componentId` link to their master, shown with a component icon in the layers panel.

## Naming

Every frame has a display name. Names are used as:
- Labels in the Left Panel
- Override keys when using [components](/concepts/components)
- Class names in exported code

Double-click a frame in the tree or press `F2` to rename it.

## Grouping

Select one or more frames and press `⌘G` to wrap them in a new parent box. Press `⌘⇧G` to ungroup (remove the wrapper and move children up).
