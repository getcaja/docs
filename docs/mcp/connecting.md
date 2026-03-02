# Connecting an Agent

Caja exposes an MCP (Model Context Protocol) server that AI agents can connect to.

## Supported Clients

Caja can be configured with any MCP-compatible client:

- **Claude Code**
- **Claude Desktop**
- **Cursor**
- **VS Code**
- **Codex**

## Quick Setup

1. Open Caja
2. Click the **plug icon** in the title bar
3. Select your client
4. Click **Install** — Caja writes the config automatically

## Manual Configuration

Add Caja to your client's MCP settings:

```json
{
  "mcpServers": {
    "caja": {
      "command": "caja",
      "args": ["--mcp"]
    }
  }
}
```

### Config File Locations

| Client | Path |
|--------|------|
| Claude Code | `~/.claude/` (project or global settings) |
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Cursor | `.cursor/mcp.json` in your project |
| VS Code | `.vscode/mcp.json` in your project |

## Verifying the Connection

When an agent connects, the plug icon in Caja's title bar changes to indicate an active connection. A spinning loader appears when the agent is executing a tool.

## What Agents Can Do

Once connected, agents can:
- Read the frame tree and take screenshots
- Add, update, and remove elements
- Manage pages and components
- Apply Tailwind classes
- Execute multi-step operations in batch

See the [Tools Reference](/mcp/tools) for the complete API.
