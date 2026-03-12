# File Format (.caja)

Caja projects are saved as `.caja` files — plain JSON that's human-readable and version-control friendly.

## Structure

```json
{
  "projectName": "My Project",
  "pages": [
    {
      "id": "page_1",
      "name": "Home",
      "route": "/",
      "root": {
        "id": "root",
        "type": "box",
        "name": "Body",
        "children": [...]
      }
    }
  ],
  "activePageId": "page_1",
  "catalog": [
    {
      "id": "comp_1",
      "name": "Card",
      "tags": ["layout"],
      "frame": { ... }
    }
  ]
}
```

## Fields

### Project Name
The `projectName` field stores the project title, shown in the window title bar.

### Pages
Each page contains:
- **id** — Unique identifier
- **name** — Display name
- **route** — URL path for routing
- **root** — The frame tree (nested structure)
- **isComponentPage** — (optional) `true` for the hidden page that stores component masters

### Frames
Each frame in the tree contains:
- **id** — Unique identifier
- **type** — Element type (`box`, `text`, `image`, `button`, `input`, `textarea`, `select`, `link`)
- **name** — Display name
- **children** — Nested child frames (for box/link types)
- **_componentId** — (optional) Links an instance to its master component

#### DesignValue Properties
Style properties use the `DesignValue` format:

```json
{
  "gap": { "mode": "token", "token": "4", "value": 16 },
  "bg": { "mode": "token", "token": "blue-500", "value": "#3b82f6" },
  "fontSize": { "mode": "custom", "value": 13 }
}
```

- `mode: "token"` — Value matched to a Tailwind token. Exports as clean class (e.g., `gap-4`).
- `mode: "custom"` — Arbitrary value. Exports with bracket syntax (e.g., `gap-[13px]`).

#### Spacing Properties
Padding, margin, and inset are stored as objects with per-side DesignValues:

```json
{
  "padding": {
    "top": { "mode": "token", "token": "4", "value": 16 },
    "right": { "mode": "token", "token": "6", "value": 24 },
    "bottom": { "mode": "token", "token": "4", "value": 16 },
    "left": { "mode": "token", "token": "6", "value": 24 }
  }
}
```

#### Responsive Overrides
Frames with responsive overrides store them in an `overrides` object:

```json
{
  "overrides": {
    "xl": { "display": "flex", "direction": "column", "gap": { "mode": "token", "token": "2", "value": 8 } },
    "md": { "hidden": true }
  }
}
```

Only properties that differ from the base (LG) breakpoint are stored. These generate `max-xl:` and `max-md:` prefixed Tailwind classes on export.

### Catalog
The component library. Each entry stores:
- **id** — Component identifier
- **name** — Component name
- **tags** — Category tags
- **frame** — The master frame tree

## Assets

Images are stored in an `assets/` directory alongside the `.caja` file. Frame `src` properties reference local filesystem paths that resolve at render time. Assets are deduplicated by content hash — identical images share a single file.

## Migration

Caja automatically migrates older `.caja` files when opened. This includes converting plain numeric values to the DesignValue format and normalizing deprecated properties.
