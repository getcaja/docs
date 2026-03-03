# Frames & Elements

Everything in Caja is a **frame**. A frame is a node in the layout tree with properties that map to CSS.

## Element Types

| Type | Description | HTML Tag |
|------|-------------|----------|
| **Box** | Generic container | `div`, `section`, `header`, `footer`, `nav`, `main`, `article`, `aside` |
| **Text** | Text content | `p`, `h1`–`h6`, `span` |
| **Image** | Image element | `img` |
| **Button** | Clickable button | `button` |
| **Input** | Text input | `input` |
| **Textarea** | Multi-line input | `textarea` |
| **Select** | Dropdown select | `select` |
| **Link** | Anchor element | `a` |

## The Frame Tree

Frames are nested in a tree structure. Every page has a **root frame** (called **Body** in the Left Panel) that acts as the top-level container. All other frames are children (or descendants) of the root.

![Frame tree in the Left Panel](/caja-frame-tree.png)

## Naming

Every frame has a display name. Names are used as:
- Labels in the Left Panel
- Override keys when using [components](/concepts/components)
- Class names in exported code

Double-click a frame in the tree or press `F2` to rename it.

## Grouping

Select one or more frames and press `⌘G` to wrap them in a new parent box. Press `⌘⇧G` to ungroup (remove the wrapper and move children up).
