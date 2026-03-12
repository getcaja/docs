# Tools Reference

Complete reference for all MCP tools available in Caja. Every tool returns a JSON response with `success`, `data`, and optional `error` and `hint` fields.

## Frame Manipulation

### add_frame

Add a new element as a child of a given parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `parent_id` | string | Yes | ID of the parent box |
| `element_type` | string | Yes | `box`, `text`, `image`, `button`, `input`, `textarea`, `select`, `link` |
| `classes` | string | No | Tailwind classes to apply (parsed into properties) |
| `properties` | object | No | Initial properties (`content`, `src`, `id`, etc.). Explicit properties override parsed classes |
| `index` | number | No | Position within parent. Appends at end if omitted |

```json
{
  "parent_id": "root",
  "element_type": "text",
  "classes": "text-2xl font-bold text-white",
  "properties": { "content": "Hello World" }
}
```

Returns the new frame's `id`, `type`, `name`, and parent info.

### update_frame

Update properties of an existing frame. When a non-base breakpoint is active, changes are saved as responsive overrides.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to update |
| `classes` | string | No | Tailwind classes to apply |
| `properties` | object | No | Properties to set (partial update) |

Settable properties include: `bg`, `display`, `direction`, `justify`, `align`, `gap`, `wrap`, `content`, `fontSize`, `fontWeight`, `fontStyle`, `textDecoration`, `letterSpacing`, `textTransform`, `whiteSpace`, `color`, `textAlign`, `textAlignVertical`, `borderRadius`, `overflow`, `grow`, `shrink`, `alignSelf`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`, `boxShadow`, `cursor`, `tailwindClasses`, `opacity`, `tag`, `options`, `className`, `htmlId`, `position`, `zIndex`, `bgImage`, `bgSize`, `bgPosition`, `bgRepeat`, `gridCols`, `gridRows`, `colSpan`, `rowSpan`, `rotate`, `scaleVal`, `translateX`, `translateY`, `skewX`, `skewY`, `transition`, `duration`, `ease`, `blur`, `backdropBlur`, `hidden`, `disabled`, `checked`, `placeholder`, `src`, `alt`, `href`, `fontFamily`, `objectFit`, `transformOrigin`, `border` (object with `top`, `right`, `bottom`, `left`, `color`, `style`).

Numeric and color fields accept raw values or `DesignValue` objects:
```json
{ "gap": 16 }
{ "gap": { "mode": "token", "token": "4", "value": 16 } }
{ "bg": "#3b82f6" }
{ "bg": { "mode": "token", "token": "blue-500", "value": "#3b82f6" } }
```

Raw values are auto-matched to tokens when possible.

### update_spacing

Update padding, margin, or inset of a frame.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |
| `field` | string | Yes | `padding`, `margin`, or `inset` |
| `values` | object | Yes | `{ top?, right?, bottom?, left? }` — partial, in pixels |

```json
{
  "id": "frame-1",
  "field": "padding",
  "values": { "top": 16, "bottom": 16, "left": 24, "right": 24 }
}
```

### update_size

Update width or height of a frame.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |
| `dimension` | string | Yes | `width` or `height` |
| `size` | object | Yes | `{ mode, value? }` |

Mode options: `default`, `hug`, `fill`, `fixed`. The `value` field is only used when mode is `fixed`.

```json
{
  "id": "frame-1",
  "dimension": "width",
  "size": { "mode": "fixed", "value": 320 }
}
```

### remove_frame

Delete a frame from the tree. Cannot delete the root.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to remove |

### move_frame

Move a frame to a new parent at a specific index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to move |
| `new_parent_id` | string | Yes | ID of the new parent box |
| `index` | number | Yes | Position index within the new parent |

### wrap_frame

Wrap a frame in a new parent box. Returns the wrapper ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to wrap |

### duplicate_frame

Deep clone a frame with new IDs, placed next to the original. Returns an `idMap` mapping old IDs to new IDs for all cloned descendants.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to duplicate |

### rename_frame

Rename a frame.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |
| `name` | string | Yes | New display name |

### select_frame

Select a frame in the UI (highlights it in the tree and canvas).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string \| null | Yes | ID of the frame to select, or `null` to deselect |

## Tree Operations

### get_tree

Read the full frame tree as JSON.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `summary` | boolean | No | When `true`, returns a compact tree with only `id`, `type`, `name`, `content`, `display`, `childCount`, `responsive` (breakpoints with overrides), and `children`. Ideal for LLM context (~5KB vs ~200KB) |

### get_selected

Get the currently selected frame with all properties. No parameters. Returns `null` if nothing is selected.

### batch_update

Execute multiple operations in a single undo step. Supports variable substitution:
- `$prev` — result ID from the previous operation
- `$0`, `$1`, `$N` — result ID from the Nth operation (zero-indexed)

Stops on first error, rolling back no operations (partial results are kept).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operations` | array | Yes | Array of `{ tool, params }` objects |

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

Returns `{ count, ids }` on success, or `{ failedAt, completedCount, completedIds }` on error.

## Responsive

### set_breakpoint

Activate a responsive breakpoint. All subsequent `update_frame`, `update_spacing`, and `update_size` calls write to that breakpoint's overrides.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `breakpoint` | string | Yes | `base` (LG, default), `xl` (MD, ≤1024px), or `md` (SM, ≤480px) |

```json
{ "breakpoint": "md" }
```

Call `set_breakpoint({ breakpoint: "base" })` when done to return to desktop editing.

### get_breakpoint

Get the current active breakpoint and canvas width. No parameters.

### get_responsive_overrides

Get the responsive overrides for a specific frame. Returns the sparse override objects for `xl` and `md` breakpoints, or `null` if no overrides exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame to inspect |

### clear_responsive_overrides

Clear responsive overrides at a specific breakpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the frame |
| `breakpoint` | string | Yes | `xl` or `md` |
| `keys` | string[] | No | Specific property keys to clear. Clears all if omitted |

```json
{
  "id": "frame-1",
  "breakpoint": "md",
  "keys": ["display", "gap"]
}
```

## Components

### list_components

List available reusable components. Returns lightweight metadata (id, name, tags).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `tag` | string | No | Filter by tag (e.g., `"layout"`, `"form"`) |

### insert_component

Insert a component instance into the tree. Clones the master with new IDs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `component_id` | string | Yes | ID of the component |
| `parent_id` | string | Yes | ID of the parent box |
| `index` | number | No | Position within parent. Appends at end if omitted |
| `overrides` | object | No | Map of child name → `{ properties?, classes? }` patches |

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

Overrides match children **by name** in the cloned tree. Name your component's children meaningfully — names become override slots.

### save_component

Save an existing frame as a reusable component. Returns the component ID and named slots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `frame_id` | string | Yes | ID of the frame to save |
| `name` | string | Yes | Name for the component |
| `tags` | string[] | No | Category tags (e.g., `["layout", "card"]`) |

### delete_component

Delete a user-created component.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `component_id` | string | Yes | ID of the component to delete |

### edit_component

Enter component edit mode. Switches the canvas to show the component master in isolation for editing. Use `update_frame`, `add_frame`, etc. to modify it. Call `exit_component_edit` when done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `component_id` | string | Yes | ID of the component to edit |

### exit_component_edit

Exit component edit mode. Returns to the previous page and auto-propagates changes to all instances. No parameters.

### export_library

Package all internal components into a `.cjl` file via save dialog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Library name |
| `author` | string | No | Author name |
| `description` | string | No | Library description |
| `version` | string | No | Version string (e.g., `"1.0.0"`) |

## Media

### screenshot

Take a screenshot of the canvas. Returns a base64-encoded PNG image. Selection outlines are temporarily hidden during capture. No parameters.

### upload_asset

Download an external image URL to local storage. Supports PNG, JPG, SVG, WebP, and GIF. Returns a `localPath` that can be used as `src` for image frames or `bgImage` for backgrounds. Note: `add_frame` with an image URL auto-downloads, so this is mainly for pre-downloading or background images.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | External image URL (`http://` or `https://`) |

## Pages & Files

### new_file

Reset the project to a blank state (equivalent to File → New). Clears all pages, frames, and components. Shows an unsaved-changes dialog if there are pending changes. No parameters.

### list_pages

List all pages in the project. Returns page `id`, `name`, `route`, and whether it is active. No parameters.

### switch_page

Switch to a different page. Returns the page info and a summary tree of the new page. No follow-up `get_tree` call needed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the page to switch to |

### add_page

Add a new empty page. Automatically switches to the new page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | No | Page name (defaults to "Page N") |
| `route` | string | No | Page route (auto-generated from name if omitted) |

### remove_page

Remove a page. Cannot remove the last remaining page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the page to remove |

## Resources

Caja also exposes MCP resources for reading state without executing tools:

| URI | Description |
|---|---|
| `caja://tree` | Full frame tree JSON |
| `caja://selected` | Currently selected frame |
| `caja://export` | Exported Tailwind classes |
| `caja://export/html` | Full HTML export |
| `caja://components` | Component catalog |
