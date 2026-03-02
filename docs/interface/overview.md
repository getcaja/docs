# Interface Overview

Caja uses a three-panel layout with a bottom toolbar.

```
┌──────────────────────────────────────────────────────┐
│                     Title Bar                         │
├────────────┬─────────────────────┬───────────────────┤
│            │                     │                   │
│   Tree     │      Canvas         │   Properties      │
│   Panel    │                     │   Panel           │
│            │                     │                   │
│            │                     │                   │
├────────────┴─────────────────────┴───────────────────┤
│                     Toolbar                           │
└──────────────────────────────────────────────────────┘
```

## Panels

### Tree Panel (left)
The layer hierarchy. Shows all elements on the current page as a collapsible tree. Also houses the **Assets** tab for managing reusable components.

[Learn more →](/interface/tree-panel)

### Canvas (center)
The design workspace. Elements render live with Tailwind CSS. Click to select, drag to reorder, and use tools to create new elements.

[Learn more →](/interface/canvas)

### Properties Panel (right)
Edit the selected element's properties — layout, size, spacing, typography, colors, borders, effects, and more. Every value maps to a Tailwind class.

[Learn more →](/interface/properties-panel)

### Toolbar (bottom)
Quick access to element creation, canvas tools, viewport breakpoints, and preview mode.

[Learn more →](/interface/toolbar)

## Title Bar

Shows the current filename with an unsaved-changes indicator (●). The MCP status button on the right shows connection state — click it to configure AI agent connections.

## Panel Visibility

Toggle panels with keyboard shortcuts:

| Shortcut | Action |
|----------|--------|
| `⌘\` | Toggle Tree Panel |
| `⌘⇧\` | Toggle Properties Panel |
