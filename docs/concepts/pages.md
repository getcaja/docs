# Pages & Routing

Caja projects can contain multiple pages, each with its own frame tree and route.

## Managing Pages

Pages are listed in the **Pages section** of the Layers Panel. Each page has:
- **Name** — Display name (e.g., "Home", "About")
- **Route** — URL path (e.g., `/`, `/about`)

### Adding a Page
Click the `+` button in the Pages section.

### Switching Pages
Click a page name to switch to it. The canvas and tree update to show that page's content.

### Page Options
Right-click a page for:
- **Duplicate** — Copy the page with all its content
- **Delete** — Remove the page (can't delete the last one)

## Routing

Each page has a route that's used in:
- **Preview mode** — Links navigate between pages using routes
- **Export** — Routes are preserved in the exported HTML

Link elements can target pages via their route using the Href dropdown in the properties panel.

## Page Properties

Select a page (click its name in the Pages section) to edit its properties in the right panel:
- **Name** — The page title
- **Route** — The URL path
