# Import & Export

Component libraries use the `.cjl` (Caja Component Library) format — a JSON file containing one or more reusable components.

## Exporting

1. Open the **Assets** tab in the Tree Panel
2. Click the `+` menu → **Export Components**
3. Select which components to include
4. Save as a `.cjl` file

## Importing

1. Open the **Assets** tab in the Tree Panel
2. Click the `+` menu → **Import Components**
3. Select a `.cjl` file
4. Components are added to your project's catalog

## The .cjl Format

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

## Via MCP

Agents can work with components programmatically:

```json
// List available components
{ "tool": "list_components" }

// Save a frame as a component
{
  "tool": "save_component",
  "params": { "frame_id": "abc", "name": "Card", "tags": ["layout"] }
}

// Insert an instance with overrides
{
  "tool": "insert_component",
  "params": {
    "component_id": "comp_card",
    "parent_id": "root",
    "overrides": {
      "title": { "properties": { "content": "Custom Title" } }
    }
  }
}
```

## Community Libraries

Anyone can create and share `.cjl` files. To submit a community library, open a PR on the [Caja repo](https://github.com/getcaja/caja).
