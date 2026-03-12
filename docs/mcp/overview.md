# MCP Overview

Caja implements a [Model Context Protocol](https://modelcontextprotocol.io/) server, allowing AI agents to interact with the design canvas programmatically.

## How It Works

1. An MCP client (Claude Code, Cursor, etc.) connects to Caja via stdio
2. The agent discovers available tools and resources
3. The agent calls tools to build and modify layouts
4. Changes appear in real-time on the canvas

## Available Tools

Caja provides **31 tools** across six categories:

### Frame Manipulation

| Tool | Description |
|---|---|
| `add_frame` | Add a new element (box, text, image, button, input, textarea, select, link) |
| `update_frame` | Update properties of an existing frame |
| `update_spacing` | Update padding, margin, or inset |
| `update_size` | Update width or height (default, hug, fill, fixed) |
| `remove_frame` | Delete a frame from the tree |
| `move_frame` | Move a frame to a new parent at a given index |
| `wrap_frame` | Wrap a frame in a new parent box |
| `duplicate_frame` | Deep clone a frame with new IDs |
| `rename_frame` | Rename a frame |
| `select_frame` | Select a frame in the UI |

### Tree Operations

| Tool | Description |
|---|---|
| `get_tree` | Read the full frame tree (use `summary: true` for compact LLM-friendly output) |
| `get_selected` | Get the currently selected frame with all properties |
| `batch_update` | Execute multiple operations in a single undo step with `$prev`/`$N` variable substitution |

### Responsive

| Tool | Description |
|---|---|
| `set_breakpoint` | Activate a responsive breakpoint (base, xl, md) |
| `get_breakpoint` | Get current active breakpoint and canvas width |
| `get_responsive_overrides` | Get responsive overrides for a frame |
| `clear_responsive_overrides` | Clear overrides at a breakpoint |

### Components

| Tool | Description |
|---|---|
| `list_components` | List available reusable components (filterable by tag) |
| `insert_component` | Insert a component instance with child overrides |
| `save_component` | Save a frame as a reusable component |
| `delete_component` | Delete a component |
| `edit_component` | Enter component edit mode (isolated master editing) |
| `exit_component_edit` | Exit edit mode, propagate changes to all instances |
| `export_library` | Export components as a `.cjl` file |

### Media

| Tool | Description |
|---|---|
| `screenshot` | Take a PNG screenshot of the canvas |
| `upload_asset` | Download an external image to local storage |

### Pages & Files

| Tool | Description |
|---|---|
| `new_file` | Reset to blank state |
| `list_pages` | List all pages |
| `switch_page` | Switch to a different page |
| `add_page` | Add a new page |
| `remove_page` | Remove a page |

See the [Tools Reference](/mcp/tools) for detailed schemas and examples.

## Tailwind Classes Shortcut

Most tools accept a `classes` parameter — a Tailwind class string that gets parsed into frame properties:

```
"classes": "flex gap-4 p-8 bg-blue-500 rounded-lg"
```

This is the fastest way to style elements. The parser recognizes layout, spacing, sizing, colors, typography, borders, effects, transforms, and more. Unrecognized classes are passed through as custom Tailwind classes.

## Auto Token Matching

Raw numeric and color values are automatically matched to Tailwind tokens:

- `gap: 16` → `gap-4` (spacing token)
- `bg: "#ef4444"` → `bg-red-500` (color token)
- `fontSize: 14` → `text-sm` (font size token)

This means agents can send raw values and get clean Tailwind output.

## Responsive Workflow

The MCP responsive workflow follows a large-first approach:

1. Build the base layout at the `base` (LG) breakpoint
2. Call `set_breakpoint({ breakpoint: "xl" })` to switch to MD (Medium)
3. Use `update_frame`, `update_spacing`, or `update_size` — changes are saved as sparse overrides
4. Call `set_breakpoint({ breakpoint: "md" })` for SM (Small) adjustments
5. Call `set_breakpoint({ breakpoint: "base" })` to return to LG

Only properties that differ from the base are stored. The exported code uses `max-xl:` and `max-md:` prefixed Tailwind classes.

## Resources

Agents can also read state via MCP resources:

| URI | Description |
|---|---|
| `caja://tree` | Full frame tree JSON |
| `caja://selected` | Currently selected frame |
| `caja://export` | Exported Tailwind classes |
| `caja://export/html` | Full HTML export |
| `caja://components` | Component catalog |
