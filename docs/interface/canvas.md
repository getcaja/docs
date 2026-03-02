# Canvas

The canvas is the central workspace where elements render live with Tailwind CSS.

## Tools

Switch between tools using the toolbar or keyboard shortcuts:

| Tool | Shortcut | Description |
|------|----------|-------------|
| **Pointer** | `V` | Select and interact with elements |
| **Frame** | `F` | Click and drag to draw new frames |
| **Text** | `T` | Click to create a text element |

Press `Escape` to return to the Pointer tool.

## Selection

- **Click** an element to select it.
- **⌘+Click** to add to selection (multi-select).
- **⌘A** to select all siblings of the current element.
- **Click empty space** to select the root frame.

Selected elements show an outline on the canvas and are highlighted in the Layers Panel.

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

Caja uses a **desktop-first** responsive system with three breakpoints:

| Breakpoint | Label | Width |
|------------|-------|-------|
| `base` | Desktop | Full width |
| `md` | Tablet | ≤ 768px |
| `sm` | Mobile | ≤ 640px |

Switch breakpoints from the toolbar. When a non-base breakpoint is active:

- The canvas resizes to match the breakpoint width
- Property changes are saved as **responsive overrides** (only the differences from desktop)
- The Layers Panel shows small badges (`md`, `sm`) on frames that have overrides
- Property sections show an accent dot when they contain overrides, with a reset button on hover

Responsive overrides generate `max-md:` and `max-sm:` prefixed Tailwind classes on export.

## Preview Mode

Toggle with `⌘⇧P`. In preview mode:

- All editing tools are disabled
- Links become clickable and navigate between pages
- The toolbar collapses to essentials
