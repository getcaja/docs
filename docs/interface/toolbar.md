# Toolbar

The bottom toolbar provides quick access to creation tools, viewport controls, and preview mode.

## Sections

### Canvas Tools

Four tool buttons — **Pointer (V)**, **Frame (F)**, **Text (T)**, **Image (I)**. The active tool is highlighted.

- **Single click** activates the tool mode — click on the canvas to place the element.
- **Double click** inserts immediately into the selected frame (or Body) and returns to Pointer.

For the Image tool, a native file picker opens first. After selecting a file, click on the canvas to place it (single click) or it inserts directly (double click).

### Add Element

The `...` (More Elements) button opens a menu to insert additional elements into the selected frame: Link, Button, Input, Textarea, Select.

### Breakpoints

A segmented toggle to switch responsive breakpoints:

| Breakpoint | Label | Canvas Width |
|------------|-------|-------------|
| `base` | LG | Full |
| `xl` | MD | 1024px |
| `md` | SM | 480px |

An indicator dot appears on breakpoint segments that have responsive overrides across the project.

### Zoom

Zoom controls with preset levels: 25%, 50%, 75%, 100%. Use `⌘+` / `⌘-` to zoom in/out, `⌘0` to reset.

## View Settings

These options in the **View** menu affect how the toolbar and canvas behave:

- **Spacing Grid** (Off / 4px / 8px) — Filters spacing token dropdowns to only show multiples of the selected grid size. At 8px, you'll only see `gap-2` (8px), `gap-4` (16px), `gap-8` (32px), etc. Default: 4px.
- **Auto-Style New Frames** — Gives new box frames a random background color and 32px height so they're visible immediately. Default: on.

### Preview
The eye icon (`⌘⇧P`) toggles preview mode, which disables editing and enables link navigation.

::: tip
In preview mode, the toolbar collapses — only the viewport selector and preview toggle remain visible.
:::
