# Interface Overview

Caja uses a three-panel layout with a floating toolbar.

![Caja interface](/caja-ui.png)

## Title Bar

Shows the current filename with an unsaved-changes indicator (●). The MCP status button on the right shows connection state — click it to configure AI agent connections.

## Layers Panel

The left sidebar has two tabs: **Layers** and **Assets**.

The **Layers** tab shows the [Pages section](/concepts/pages) and the layer tree for the current page. The **Assets** tab manages reusable [components](/concepts/components).

[Learn more →](/interface/layers-panel)

## Canvas

The design workspace. Elements render live with Tailwind CSS. Click to select, drag to reorder, and use tools to create new elements.

[Learn more →](/interface/canvas)

## Properties Panel

The right sidebar. Edit the selected element's properties — layout, size, spacing, typography, colors, borders, effects, and more. Every value maps to a Tailwind class.

[Learn more →](/interface/properties-panel)

## Toolbar

Floating bar at the bottom of the canvas. Quick access to element creation, canvas tools, viewport breakpoints, and preview mode.

[Learn more →](/interface/toolbar)

## Panel Visibility

Toggle panels with keyboard shortcuts:

| Shortcut | Action |
|----------|--------|
| `⌘\` | Toggle Layers Panel |
| `⌘⇧\` | Toggle Properties Panel |
