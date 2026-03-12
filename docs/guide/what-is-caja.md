# What is Caja?

Caja is a design tool built for the AI era. Your browser engine is the canvas, no middleware, no translation layers. Design by hand, delegate to AI, or both.

Free and open source. Built with Tauri, React, and Tailwind CSS v4.

## No Middle Man

Your designs are the implementation. Real HTML, real CSS, real Tailwind. No rebuild, no translation layer. Every property on the canvas maps to a real Tailwind class, and every class maps back to the canvas.

## Built for You and Agents

Design by hand or connect Claude, Cursor, or any AI agent via MCP. You and agents are both first-class citizens. Ask an agent to build a hero section and watch it appear on canvas in real time.

## Familiar Yet New

Everything on the web is a box. A layout model you already know, powered by the stack you already use.

## Responsive

Large-first responsive design with three breakpoints (LG, MD, SM). Properties you change at a smaller breakpoint are saved as sparse overrides — only differences from the base are stored. Exported code uses `max-xl:` and `max-md:` prefixed Tailwind classes.

## Pages

Multi-page projects with routing. Links navigate between pages in preview mode. Each page has its own frame tree and URL route.

## Components

Save any frame as a reusable component with named slots. Insert instances with per-slot overrides. Export libraries as `.cjl` files to share across projects.

## Export

Export as JSX, HTML snippets, or full HTML pages with embedded Tailwind CSS. Token-matched values produce clean classes; custom values use Tailwind's arbitrary value syntax.

## Asset Management

Images are downloaded and stored locally alongside your project. Hash-based deduplication keeps the asset folder clean. Local paths resolve automatically at render time.

## Built With

- [Tauri v2](https://v2.tauri.app/) — Native macOS app, fast and offline
- [React 19](https://react.dev/) — UI framework
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) — Accessible UI primitives
- [MCP](https://modelcontextprotocol.io/) — AI agent integration
