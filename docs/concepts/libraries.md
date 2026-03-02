# Component Libraries

Caja supports importing and exporting reusable components as `.cjl` (Caja Component Library) files. This enables sharing component sets across projects and teams.

## Import & Export

### Exporting
1. Open the **Assets** tab in the Layers Panel
2. Click the `+` menu → **Export Components**
3. Select which components to include
4. Save as a `.cjl` file

### Importing
1. Open the **Assets** tab in the Layers Panel
2. Click the `+` menu → **Import Components**
3. Select a `.cjl` file
4. Components are added to your project's catalog

### Via MCP

Agents can also manage the component library programmatically:

```json
// List available components
{ "tool": "list_components" }

// Insert a component instance
{
  "tool": "insert_component",
  "params": {
    "component_id": "comp_button",
    "parent_id": "root",
    "overrides": {
      "label": { "properties": { "content": "Sign Up" } }
    }
  }
}
```

## The .cjl Format

A `.cjl` file is a JSON package containing one or more components with metadata:

```json
{
  "name": "My Library",
  "version": "1.0.0",
  "components": [
    {
      "id": "comp_1",
      "name": "Card",
      "tags": ["layout"],
      "frame": { ... }
    }
  ]
}
```

Each component stores its full frame tree, so instances are self-contained.

## Official Libraries

Pre-built component libraries for popular design systems. Import them into any Caja project.

### Bootstrap

A set of common Bootstrap components adapted for Tailwind CSS.

Includes: Button, Card, Navbar, Modal, Alert, Badge, Breadcrumb, Pagination, Form controls.

::: info Coming Soon
This library is currently in development.
:::

### Radix

Components matching the [Radix UI](https://www.radix-ui.com/) primitives — unstyled, accessible building blocks.

Includes: Dialog, Popover, Dropdown Menu, Tabs, Toggle Group, Accordion, Tooltip, Select.

::: info Coming Soon
This library is currently in development.
:::

### Ark

Components based on [Ark UI](https://ark-ui.com/) — headless, framework-agnostic primitives.

Includes: Accordion, Carousel, Checkbox, Combobox, Date Picker, Dialog, Menu, Slider, Tabs, Toast.

::: info Coming Soon
This library is currently in development.
:::

### shadcn/ui

Components inspired by [shadcn/ui](https://ui.shadcn.com/) — beautifully designed, copy-paste ready.

Includes: Button, Input, Card, Sheet, Table, Command, Avatar, Calendar, Skeleton.

::: info Coming Soon
This library is currently in development.
:::

## Community Libraries

Anyone can create and share `.cjl` files. To submit a community library, open a PR on the [Caja repo](https://github.com/getcaja/caja).
