# Component Libraries

Caja supports importing and exporting reusable components as `.cjl` (Caja Component Library) files. This enables sharing component sets across projects and teams.

## Import & Export

### Exporting
1. Open the **Assets** tab in the Left Panel
2. Click the `+` menu → **Export Components**
3. Select which components to include
4. Save as a `.cjl` file

### Importing
1. Open the **Assets** tab in the Left Panel
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

// Export library
{
  "tool": "export_library",
  "params": { "name": "My Library", "version": "1.0.0" }
}
```

## The .cjl Format

A `.cjl` file is a JSON package containing one or more components with metadata:

```json
{
  "name": "My Library",
  "version": "1.0.0",
  "author": "Author Name",
  "description": "Library description",
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

## Community Libraries

Anyone can create and share `.cjl` files. To submit a community library, open a PR on the [Caja repo](https://github.com/getcaja/caja).
