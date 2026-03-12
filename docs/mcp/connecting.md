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

This is the recommended approach. Caja locates its MCP server script and writes the correct configuration to your client's settings file.

## Manual Configuration

Add Caja to your client's MCP settings. The config points to the `server.mjs` file inside the Caja installation:

```json
{
  "mcpServers": {
    "caja": {
      "command": "node",
      "args": ["/path/to/caja/src/mcp/server.mjs"]
    }
  }
}
```

Replace `/path/to/caja` with the actual path to your Caja installation. The Quick Setup button fills this in automatically.

### Config File Locations

| Client | Path |
|--------|------|
| Claude Code | `~/.claude.json` |
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Cursor | `~/.cursor/mcp.json` |
| VS Code | `~/Library/Application Support/Code/User/mcp.json` |
| Codex | `~/.codex/config.toml` |

## Verifying the Connection

When an agent connects, the plug icon in Caja's title bar turns green to indicate an active connection. A spinning loader appears when the agent is executing a tool.

::: tip
Caja must be running for the MCP server to work. The server bridges between the MCP protocol (stdio) and Caja's internal HTTP API on `localhost:3334`.
:::

## What Agents Can Do

Once connected, agents can:
- Read the frame tree and take screenshots
- Add, update, and remove elements with Tailwind classes
- Manage pages and navigate between them
- Create, edit, and insert reusable components
- Apply responsive overrides at different breakpoints
- Execute multi-step batch operations in a single undo step
- Download and manage image assets

See the [Tools Reference](/mcp/tools) for the complete API.

## Authentication

Caja generates a random authentication token on startup (stored at `~/.caja/mcp-token`). The MCP server reads this token automatically. No manual auth setup is needed — if Caja is running and the server was installed correctly, it just works.
