# Layout (Flex & Grid)

Caja supports multiple layout modes that map directly to CSS `display` values.

## Display Modes

| Mode | CSS | Description |
|------|-----|-------------|
| **Flex Row** | `display: flex; flex-direction: row` | Children flow horizontally |
| **Flex Column** | `display: flex; flex-direction: column` | Children flow vertically |
| **Inline Flex** | `display: inline-flex` | Like flex, but element shrinks to content width |
| **Grid** | `display: grid` | CSS Grid layout |

## Flexbox

The most common layout mode in Caja. Choose between **Flex Row** and **Flex Column** in the properties panel.

### Direction & Wrap
- **Row** — Children flow horizontally
- **Column** — Children flow vertically
- **Reverse** — Flip the direction
- **Wrap** — Allow children to wrap to a new line

### Alignment
- **Justify** — Main-axis alignment: start, center, end, space-between, space-around
- **Align** — Cross-axis alignment: start, center, end, stretch

### Gap
Space between children, using Tailwind spacing tokens (`gap-2` = 8px, `gap-4` = 16px, etc.). The gap dropdown also includes a **Space** option (auto), which maps to `justify-between`.

### Child Properties
Each child in a flex container can control:
- **Grow** — How much extra space to absorb
- **Shrink** — How much to shrink when space is tight
- **Align Self** — Override the parent's cross-axis alignment

## Grid

CSS Grid support with:
- **Columns** — Number of grid columns (1–12)
- **Rows** — Number of grid rows (1–6)
- **Gap** — Space between cells

Grid children can span multiple columns or rows using **Col Span** and **Row Span** controls, including a `full` option to span all columns/rows.

## Size Modes

Every frame has width and height controls with four modes:

| Mode | Behavior | Tailwind |
|------|----------|----------|
| **Default** | Natural sizing | — |
| **Hug** | Shrink to fit content | `w-fit` / `h-fit` |
| **Fill** | Expand to fill parent | `w-full` / `h-full` (or `flex-1` in flex) |
| **Fixed** | Specific pixel value | `w-[300px]` / `h-[200px]` |
