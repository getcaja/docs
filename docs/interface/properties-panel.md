# Properties Panel

The right panel shows editable properties for the selected element. Every value maps to a Tailwind CSS class.

## Responsive Overrides

When a non-base breakpoint is active (tablet or mobile), the header shows a **breakpoint pill** with a reset button. Property changes at non-base breakpoints are saved as sparse overrides — only the values that differ from desktop.

Sections with overrides show an **accent dot** next to the title. Hover to reveal a reset button that clears overrides for that section.

## Element

The top section shows:
- **Create Component** — Component icon button in the top-right corner, saves the selected frame as a reusable component
- **Type badge** — The element type (Frame, Text, Image, etc.)
- **Name** — Editable display name
- **HTML tag** — `<>` icon with a tag selector (div, section, header, p, h1–h6, etc.)
- **Class** — Custom CSS class name for export
- **ID** — Custom HTML id for export
- **Hidden** — Toggle to hide the element (emits `hidden` Tailwind class)

Element-specific controls appear based on type:
- **Text** — Content editor
- **Image** — Source file picker, alt text, object fit
- **Link** — Href (link to pages or external URLs)
- **Input** — Type (text, email, password, number, search, tel, url, date, time, checkbox, radio, range), placeholder, value, defaultValue. Checkbox and radio show a checked toggle; radio also supports inputName for grouping. Range shows min/max controls. Number shows min/max/step.
- **Textarea** — Placeholder, rows
- **Select** — Options list

## Layout

Controls how the element arranges its children:

- **Display mode** — Flex Row, Flex Column, Inline Flex, or Grid
- **Direction** — Row/Column with reverse option
- **Wrap** — Allow children to wrap to next line
- **Justify** — Main-axis alignment (start, center, end, between, around)
- **Align** — Cross-axis alignment (start, center, end, stretch)
- **Gap** — Spacing between children (includes Space/auto option for justify-between)

For **Grid** layouts: columns, rows, and auto-flow controls.

For **child elements**: grow, shrink, align-self, and grid span controls.

## Size

Width and Height with four modes:
- **Default** — Natural size
- **Hug** — Shrink to fit content
- **Fill** — Expand to fill parent
- **Fixed** — Specific pixel value

Min/Max constraints available via the constraints popover.

## Spacing

Visual control for **Padding** and **Margin**, each with Top, Right, Bottom, Left inputs. Values match Tailwind spacing tokens (e.g., `p-4` = 16px).

## Position

- **Position type** — Static, Relative, Absolute, Fixed, Sticky
- **Inset** — Top, Right, Bottom, Left offsets (when positioned)
- **Z-Index** — Layer ordering (uses `z-0` through `z-50` tokens)

## Typography

Available for text-like elements:

- Font family (Sans Serif, Serif, Monospace, or Google Fonts via MCP), size, weight
- Line height, letter spacing
- Text color (color picker with Tailwind token grid)
- Text align, transform, decoration
- Italic toggle
- White space control

::: tip Google Fonts
Google Fonts can be set via MCP by passing the font name as `fontFamily` (e.g., `"Playfair Display"`). The font is loaded automatically on the canvas. Built-in options are limited to Sans Serif, Serif, and Monospace — use an AI agent for access to the full Google Fonts catalog.
:::

## Fill (Background)

- **Color picker** — Hex input + color grid with Tailwind token matching
- **Opacity** — 0–100% (uses Tailwind opacity tokens)
- **Background image** — URL, size, position, repeat

## Border

- **Width** — Per-side (top, right, bottom, left) with Tailwind tokens
- **Style** — Solid, Dashed, Dotted
- **Color** — Same color picker as fill, with Tailwind token matching
- **Radius** — Per-corner (top-left, top-right, bottom-right, bottom-left) with Tailwind tokens

## Effects

- **Box shadow** — Preset sizes (sm, base, md, lg, xl, 2xl)
- **Blur** — Gaussian blur (sm, base, md, lg, xl, 2xl, 3xl)
- **Backdrop blur** — Blur behind the element
- **Opacity** — Element opacity
- **Cursor** — Default, pointer, text, not-allowed, grab

## Transform

- **Rotate** — Degrees (0, 1, 2, 3, 6, 12, 45, 90, 180)
- **Scale** — Percentage (0, 50, 75, 90, 95, 100, 105, 110, 125, 150)
- **Translate** — X/Y offset in pixels
- **Skew** — X/Y skew in degrees (0, 1, 2, 3, 6, 12)
- **Transform Origin** — Anchor point for transforms

## Transition

- **Property** — All, colors, opacity, shadow, transform
- **Duration** — Milliseconds (75, 100, 150, 200, 300, 500, 700, 1000)
- **Easing** — Linear, ease-in, ease-out, ease-in-out

## Tailwind Classes

At the bottom of the panel, a text input allows adding arbitrary Tailwind classes directly. Classes entered here are passed through to the exported code without modification — useful for utility classes not covered by the visual controls.
