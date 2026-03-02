# MCP Overview

Caja implements a [Model Context Protocol](https://modelcontextprotocol.io/) server, allowing AI agents to interact with the design canvas programmatically.

## How It Works

1. An MCP client (Claude Code, Cursor, etc.) connects to Caja via stdio
2. The agent discovers available tools and resources
3. The agent calls tools to build and modify layouts
4. Changes appear in real-time on the canvas

## Available Tools

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
| `rename_frame` | Rename a frame |
| `select_frame` | Select a frame in the UI |
| `get_tree` | Read the full frame tree |
| `get_selected` | Get the currently selected frame |
| `screenshot` | Take a screenshot of the canvas |
| `batch_update` | Execute multiple operations in a single undo step |
| `list_components` | List available reusable components |
| `insert_component` | Insert a component instance |
| `save_component` | Save a frame as a reusable component |
| `delete_component` | Delete a component |
| `list_pages` | List all pages |
| `switch_page` | Switch to a different page |
| `add_page` | Add a new page |
| `remove_page` | Remove a page |
| `new_file` | Reset to blank state |

See the [Tools Reference](/mcp/tools) for detailed schemas and examples.

## Tailwind Classes Shortcut

Most tools accept a `classes` parameter — a Tailwind class string that gets parsed into frame properties:

```
"classes": "flex gap-4 p-8 bg-blue-500 rounded-lg"
```

This is the fastest way to style elements, and it's what AI agents use most.
