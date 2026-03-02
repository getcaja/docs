# Components

Components are reusable frame trees. Create a component once, then insert instances across your project.

## Creating a Component

1. Select a frame (or group of frames)
2. Right-click → **Create Component** (or use the Assets panel)
3. The frame is saved as a **master component**

The master lives in a special component page, separate from your regular pages.

## Inserting Instances

Insert a component instance by:
- **Dragging** it from the Assets tab onto the canvas
- **Right-clicking** the master → Insert Instance
- Using the MCP `insert_component` tool

Each instance is a deep clone of the master. It maintains a link back to the master via `_componentId`.

## Editing Masters

To edit a component's master:
1. Right-click an instance → **Edit Master**
2. The tree panel enters component edit mode, showing only the master
3. Make your changes
4. Close the edit view — changes propagate to all instances

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

Right-click an instance for:
- **Edit Master** — Open the master for editing
- **Reset Instance** — Revert to master state
- **Detach Instance** — Break the link, keep current state

## Categories

Organize components with tags. The Assets panel groups components by category. Use the `+` menu to create new categories.

## Import & Export

Share components as `.cjl` (Caja Component Library) files:
- **Export** — Select components → Export from the `+` menu
- **Import** — Load a `.cjl` file from the `+` menu
