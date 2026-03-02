# MCP Overview

Caja implements a [Model Context Protocol](https://modelcontextprotocol.io/) server, allowing AI agents to interact with the design canvas programmatically.

## How It Works

1. An MCP client (Claude Code, Cursor, etc.) connects to Caja via stdio
2. The agent discovers available tools and resources
3. The agent calls tools to build and modify layouts
4. Changes appear in real-time on the canvas

## Available Tools

### Frame Manipulation

| Tool | Description |
|---|---|
| `add_frame` | Add a new element (box, text, image, button, input, etc.) |
| `update_frame` | Update properties of an existing frame |
| `update_spacing` | Update padding, margin, or inset |
| `update_size` | Update width or height (hug, fill, fixed) |
| `remove_frame` | Delete a frame from the tree |
| `move_frame` | Move a frame to a new parent |
| `wrap_frame` | Wrap a frame in a new parent box |
| `duplicate_frame` | Deep clone a frame |

### Tree Operations

| Tool | Description |
|---|---|
| `rename_frame` | Rename a frame |
| `select_frame` | Select a frame in the UI |
| `get_tree` | Read the full frame tree (flags responsive overrides) |
| `get_selected` | Get the currently selected frame |
| `batch_update` | Execute multiple operations in a single undo step |

### Responsive

| Tool | Description |
|---|---|
| `set_breakpoint` | Activate a responsive breakpoint (base, md, sm) |
| `get_breakpoint` | Get current active breakpoint and canvas width |
| `get_responsive_overrides` | Get responsive overrides for a frame |
| `clear_responsive_overrides` | Clear overrides at a breakpoint |

### Components

| Tool | Description |
|---|---|
| `list_components` | List available reusable components |
| `insert_component` | Insert a component instance |
| `save_component` | Save a frame as a reusable component |
| `delete_component` | Delete a component |
| `export_library` | Export components as a .cjl file |

### Media

| Tool | Description |
|---|---|
| `screenshot` | Take a screenshot of the canvas |
| `upload_asset` | Upload an image asset |

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

This is the fastest way to style elements, and it's what AI agents use most.

## Responsive Workflow

The MCP responsive workflow follows a desktop-first approach:

1. Build the base layout at the `base` (desktop) breakpoint
2. Call `set_breakpoint({ breakpoint: "md" })` to switch to tablet
3. Use `update_frame`, `update_spacing`, or `update_size` — changes are saved as sparse overrides
4. Call `set_breakpoint({ breakpoint: "sm" })` for mobile adjustments
5. Call `set_breakpoint({ breakpoint: "base" })` to return to desktop

Only properties that differ from desktop are stored. The exported code uses `max-md:` and `max-sm:` prefixed Tailwind classes.
