# Responsive Design

Caja uses a **large-first** responsive system. Design at full width first, then add overrides for smaller screens.

## Breakpoints

| Breakpoint | Label | Max Width | Tailwind Prefix |
|------------|-------|-----------|-----------------|
| `base` | LG (Large) | — | (none) |
| `xl` | MD (Medium) | 1024px | `max-xl:` |
| `md` | SM (Small) | 480px | `max-md:` |

## How It Works

1. **Design at LG** — All properties are set at the `base` breakpoint by default.
2. **Switch to MD or SM** — Use the toolbar breakpoint toggle. The canvas resizes to match.
3. **Adjust properties** — Changes are saved as **sparse overrides**. Only properties that differ from the base are stored.
4. **Export** — Overrides become prefixed Tailwind classes (`max-xl:hidden`, `max-md:flex-col`, etc.).

## Sparse Overrides

Responsive overrides only store what changes. If a frame has `gap-8` at LG and you change it to `gap-4` at MD, only the gap is stored as an override — everything else inherits from LG.

```
LG (base):   flex flex-row gap-8 p-6
MD (xl):     max-xl:flex-col max-xl:gap-4
SM (md):     max-md:p-3
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
- **Border** — borderRadius, border (width, style, color)

## UI Indicators

When working with responsive overrides, Caja shows visual feedback:

- **Tree badges** — Small `MD` / `SM` pills next to frame names that have overrides
- **Section dots** — Accent dot on property sections that contain overrides
- **Reset buttons** — Hover a section title to reveal a reset button that clears overrides for that section
- **Header pill** — The properties panel header shows the active breakpoint with a global reset button

## Testing in Preview

Toggle preview mode (`⌘P`) to test your responsive layouts interactively. Combined with the breakpoint switcher, this lets you verify behavior across screen sizes without leaving Caja.

## Via MCP

See the [MCP responsive workflow](/mcp/overview#responsive-workflow) for how AI agents work with breakpoints.
