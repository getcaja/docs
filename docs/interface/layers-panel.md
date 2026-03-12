# Left Panel

The left panel has two tabs: **File** and **Assets**.

## File Tab

### Pages Section
Lists all pages in the project. Click a page to switch to it. Use the `+` button to add a new page. Right-click for options like Duplicate and Delete.

### Layers Section
Shows the frame tree for the active page. Each node displays:

- **Type icon** — Frame, Text, Image, Button, etc. Component instances show a component icon instead of the default type icon.
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

For component instances, the context menu also includes **Edit Master**, **Reset Instance**, and **Detach Instance**.

Copy (`⌘C`), Cut (`⌘X`), and Paste (`⌘V`) work via keyboard shortcuts when the tree panel is focused.

### Add Element
Click the `+` button in the Layers header to insert elements: Add Frame, Add Text, Add Link, Add Image, Add Button, Add Input, Add Textarea, or Add Select.

## Assets Tab

Manages your reusable [components](/concepts/components). Components are organized by category (tags) and can be:

- **Dragged** onto the canvas to insert an instance
- **Previewed** on hover (with Insert and Edit buttons)

### Import & Export

Use the `+` menu in the Assets tab to import or export component libraries as `.cjl` files.

- **Import Components** — Load a `.cjl` file into your project
- **Export Components** — Save selected components as a `.cjl` file

See [Import & Export](/libraries/import-export) for details on the file format.
