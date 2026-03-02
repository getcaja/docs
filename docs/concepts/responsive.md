# Responsive Design

Caja uses a **desktop-first** responsive system. Design at full width first, then add overrides for smaller screens.

## Breakpoints

| Breakpoint | Label | Max Width | Tailwind Prefix |
|------------|-------|-----------|-----------------|
| `base` | Desktop | — | (none) |
| `md` | Tablet | 768px | `max-md:` |
| `sm` | Mobile | 640px | `max-sm:` |

## How It Works

1. **Design at desktop** — All properties are set at the `base` breakpoint by default.
2. **Switch to tablet or mobile** — Use the toolbar breakpoint buttons. The canvas resizes to match.
3. **Adjust properties** — Changes are saved as **sparse overrides**. Only properties that differ from desktop are stored.
4. **Export** — Overrides become prefixed Tailwind classes (`max-md:hidden`, `max-sm:flex-col`, etc.).

## Sparse Overrides

Responsive overrides only store what changes. If a frame has `gap-8` on desktop and you change it to `gap-4` on tablet, only the gap is stored as an override — everything else inherits from desktop.

```
Desktop (base):  flex flex-row gap-8 p-6
Tablet (md):     max-md:flex-col max-md:gap-4
Mobile (sm):     max-sm:p-3
```

## Overridable Properties

Not all properties can be overridden per breakpoint. The supported properties are:

- **Layout** — display, direction, justify, align, gap, wrap
- **Size** — width, height, min/max width, min/max height
- **Spacing** — padding, margin
- **Flex child** — grow, shrink, alignSelf
- **Grid** — gridCols, gridRows
- **Typography** — fontSize, fontWeight, lineHeight, textAlign
- **Appearance** — bg, opacity, hidden

## UI Indicators

When working with responsive overrides, Caja shows visual feedback:

- **Tree badges** — Small `md` / `sm` pills next to frame names that have overrides
- **Section dots** — Accent dot on property sections that contain overrides
- **Reset buttons** — Hover a section title to reveal a reset button that clears overrides for that section
- **Header pill** — The properties panel header shows the active breakpoint with a global reset button

## Via MCP

See the [MCP responsive workflow](/mcp/overview#responsive-workflow) for how AI agents work with breakpoints.
