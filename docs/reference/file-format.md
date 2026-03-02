# File Format (.caja)

Caja projects are saved as `.caja` files — plain JSON that's human-readable and version-control friendly.

## Structure

```json
{
  "pages": [
    {
      "id": "page_1",
      "name": "Home",
      "route": "/",
      "root": {
        "id": "root",
        "type": "box",
        "name": "Root",
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

### Pages
Each page contains:
- **id** — Unique identifier
- **name** — Display name
- **route** — URL path for routing
- **root** — The frame tree (nested structure)

### Frames
Each frame in the tree contains:
- **id** — Unique identifier
- **type** — Element type (box, text, image, etc.)
- **name** — Display name
- **children** — Nested child frames
- **Style properties** — Layout, spacing, typography, colors, etc., each as a `DesignValue`

### Catalog
The component library. Each entry stores:
- **id** — Component identifier
- **name** — Component name
- **tags** — Category tags
- **frame** — The master frame tree

## Assets

Images are stored in an `assets/` directory alongside the `.caja` file. Frame `src` properties reference local filesystem paths that resolve at render time.
