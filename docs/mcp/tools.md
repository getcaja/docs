# Tools Reference

Detailed reference for all MCP tools available in Caja.

## add_frame

Add a new element as a child of a given parent.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `parent_id` | string | Yes | ID of the parent box |
| `element_type` | string | Yes | `box`, `text`, `image`, `button`, `input`, `textarea`, `select`, `link` |
| `classes` | string | No | Tailwind classes to apply |
| `properties` | object | No | Initial properties (id, content, src, etc.) |
| `index` | number | No | Position within parent. Appends at end if omitted |

**Example:**

```json
{
  "parent_id": "root",
  "element_type": "text",
  "classes": "text-2xl font-bold text-white",
  "properties": { "content": "Hello World" }
}
```

## update_frame

Update properties of an existing frame. When a non-base breakpoint is active, changes are saved as responsive overrides.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to update |
| `classes` | string | No | Tailwind classes to apply |
| `properties` | object | No | Properties to set (partial update, deep-merged for responsive) |

## batch_update

Execute multiple operations in a single undo step. Supports variable substitution:
- `$prev` — result ID from the previous operation
- `$0`, `$1`, `$N` — result ID from the Nth operation (zero-indexed)

**Example:**

```json
{
  "operations": [
    {
      "tool": "add_frame",
      "params": { "parent_id": "root", "element_type": "box", "classes": "flex flex-col gap-4 p-6" }
    },
    {
      "tool": "add_frame",
      "params": { "parent_id": "$prev", "element_type": "text", "properties": { "content": "Title" } }
    },
    {
      "tool": "add_frame",
      "params": { "parent_id": "$0", "element_type": "text", "properties": { "content": "Subtitle" } }
    }
  ]
}
```

## set_breakpoint

Activate a responsive breakpoint. All subsequent `update_frame`, `update_spacing`, and `update_size` calls write to that breakpoint's overrides.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `breakpoint` | string | Yes | `base`, `md`, or `sm` |

**Example:**

```json
{ "breakpoint": "md" }
```

Returns the active breakpoint, canvas width, and a hint about the workflow.

## get_breakpoint

Get the current active breakpoint and canvas width. No parameters.

## get_responsive_overrides

Get the responsive overrides for a specific frame.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |

Returns the sparse override objects for `md` and `sm` breakpoints.

## clear_responsive_overrides

Clear responsive overrides at a specific breakpoint.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |
| `breakpoint` | string | Yes | `md` or `sm` |
| `keys` | string[] | No | Specific property keys to clear. Clears all if omitted |

**Example:**

```json
{
  "id": "frame_1",
  "breakpoint": "md",
  "keys": ["display", "gap"]
}
```

## insert_component

Insert a reusable component with optional overrides by child name.

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `component_id` | string | Yes | ID of the component |
| `parent_id` | string | Yes | ID of the parent box |
| `index` | number | No | Position within parent |
| `overrides` | object | No | Map of child name to property patches |

**Example:**

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
