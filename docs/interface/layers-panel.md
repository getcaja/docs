# Layers Panel

The Layers Panel has two tabs: **Layers** and **Assets**.

## Layers Tab

Displays the element hierarchy for the current page as a collapsible tree.

### Pages Section
Lists all pages in the project. Click a page to switch to it. Use the `+` button to add a new page. Right-click for options like Duplicate and Delete.

### Layers Section
Shows the frame tree for the active page. Each node displays:

- **Type icon** — Frame, Text, Image, Button, etc.
- **Name** — Double-click or press `F2` to rename.
- **Visibility toggle** — Hide/show elements without deleting them.
- **Expand/collapse** — Click the chevron to toggle children.

### Drag & Drop
Drag elements to reorder or reparent them. A blue line shows the drop position. Multi-select drag is supported — hold `⌘` to select multiple items, then drag them together.

### Context Menu
Right-click any element for:

| Action | Shortcut |
|--------|----------|
| Group | `⌘G` |
| Ungroup | `⌘⇧G` |
| Duplicate | `⌘D` |
| Create Component | — |
| Delete | `Delete` |

### Add Menu
Click the `+` button in the header to add elements: Frame, Text, Link, Image, Button, Input, Textarea, or Select.

## Assets Tab

Manages your reusable [components](/concepts/components). Components are organized by category (tags) and can be:

- **Dragged** onto the canvas to insert an instance
- **Previewed** on hover (with Insert and Edit buttons)
- **Imported/Exported** as `.cjl` library files via the `+` menu
