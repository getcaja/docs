# Components

Components are reusable frame trees. Create a component once, then insert instances across your project.

## Creating a Component

1. Select a frame
2. Click the **Create Component** button (component icon) in the Element section header — or right-click → **Create Component**
3. The frame is saved as a **master component**

The master lives in a special component page, separate from your regular pages.

## Inserting Instances

Insert a component instance by:
- **Dragging** it from the Components tab onto the canvas
- **Right-clicking** a component in the Components tab → **Insert**
- Using the MCP `insert_component` tool

Each instance is a deep clone of the master. It maintains a link back to the master via `_componentId`.

Instances are visually marked in the layers panel with a component icon, distinguishing them from regular frames.

## Editing Masters

To edit a component's master:
1. Right-click an instance → **Edit Master** — or use the MCP `edit_component` tool
2. Caja switches to a dedicated component page, showing only the master in isolation
3. Make your changes using the normal canvas and properties panel tools
4. Exit component edit mode using the MCP `exit_component_edit` tool — changes propagate automatically to all instances across all pages

::: tip
The component edit page is a real page in the project, but it's hidden from the pages list. You work with the master frame tree exactly like any other page.
:::

## Overrides

When inserting via MCP, you can customize instances by **child name**:

```json
{
  "component_id": "comp_card",
  "parent_id": "root",
  "overrides": {
    "title": { "properties": { "content": "Custom Title" } },
    "cta": { "classes": "bg-violet-600" }
  }
}
```

Name your component's children meaningfully — names become override slots.

## Instance Actions

Right-click an instance (or use the Properties panel buttons) for:
- **Edit Master** — Open the master for editing
- **Reset** — Revert to master state
- **Detach** — Break the link, keep current state

## Categories

Organize components with tags. The Components tab groups components by category. Use the `+` menu to create new categories. Components and categories can be reordered via drag-and-drop.

## Preview

Hover over a component in the Components tab to see a live preview popup with Insert and Edit buttons.

## Import & Export

Share components as `.cjl` (Caja Component Library) files via the `+` menu in the Components tab:
- **Export Components** — Select which components to include, add metadata (name, author, description, version), and save as a `.cjl` file
- **Import Components** — Load a `.cjl` file and select which components to import into your project
