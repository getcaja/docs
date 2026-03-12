# Canvas

The canvas is the central workspace where elements render live with Tailwind CSS.

## Tools

Switch between tools using the toolbar or keyboard shortcuts:

| Tool | Shortcut | Description |
|------|----------|-------------|
| **Pointer** | `V` | Select and interact with elements |
| **Frame** | `F` | Click to insert a new frame |
| **Text** | `T` | Click to create a text element |
| **Image** | `I` | Pick a file, then click to place the image |

Press `Escape` to return to the Pointer tool.

::: tip
Double-click a tool button in the toolbar to insert the element immediately into the selected frame, without entering click-to-place mode.
:::

## Selection

- **Click** an element to select it.
- **⌘+Click** to add to selection (multi-select).
- **⌘A** to select all siblings of the current element.
- **Click empty space** to select the root frame.

Selected elements show an outline on the canvas and are highlighted in the Left Panel.

## Text Editing

Double-click a text element on the canvas to enter inline text editing mode. Type to edit the content directly. Press `Escape` or click outside to finish editing.

## Drag to Reorder

Drag elements on the canvas to reorder them within their parent. A pointer-down-and-move gesture initiates the drag — the element follows your cursor with visual feedback showing the drop position. Hold `Alt` while dragging to duplicate.

## Context Menu

Right-click any element on the canvas for quick actions: Group, Ungroup, Duplicate, Create Component, and Delete.

## Zoom & Pan

| Action | Shortcut |
|--------|----------|
| Zoom in | `⌘+` |
| Zoom out | `⌘-` |
| Reset to 100% | `⌘0` |
| Pan | Scroll |
| Pinch zoom | Trackpad pinch |

Zoom levels: 25%, 50%, 75%, 100%.

## Responsive Design

Caja uses a **large-first** responsive system with three breakpoints:

| Breakpoint | Label | Width |
|------------|-------|-------|
| `base` | LG (Large) | Full width |
| `xl` | MD (Medium) | 1024px |
| `md` | SM (Small) | 480px |

Switch breakpoints from the toolbar. When a non-base breakpoint is active:

- The canvas resizes to match the breakpoint width
- Property changes are saved as **responsive overrides** (only the differences from desktop)
- The Layers Panel shows small badges (`MD`, `SM`) on frames that have overrides
- Property sections show an accent dot when they contain overrides, with a reset button on hover

Responsive overrides generate `max-xl:` and `max-md:` prefixed Tailwind classes on export.

## Preview Mode

Toggle with `⌘P`. In preview mode:

- All editing tools are disabled
- Links become clickable and navigate between pages
- The toolbar collapses to essentials
