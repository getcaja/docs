# Tailwind Tokens

Caja uses Tailwind CSS classes as the single source of truth for all styles. Every property you set in the UI maps to a Tailwind class.

## How It Works

When you set a gap of 16px, Caja doesn't store `16px` — it stores the Tailwind token `gap-4`. This means your exported code is clean, idiomatic Tailwind without arbitrary values.

### The DesignValue System

Internally, every numeric and color property uses a `DesignValue`:

```
{ mode: 'token', token: '4', value: 16 }   → gap-4
{ mode: 'custom', value: 13 }              → gap-[13px]
```

When a value matches a known Tailwind token, it binds automatically. Custom values fall back to arbitrary value syntax.

## Token Scales

### Spacing
Used for padding, margin, gap, and inset.

`0` (0px) `0.5` (2px) `1` (4px) `1.5` (6px) `2` (8px) `2.5` (10px) `3` (12px) `3.5` (14px) `4` (16px) `5` (20px) `6` (24px) `7` (28px) `8` (32px) `9` (36px) `10` (40px) `11` (44px) `12` (48px) `14` (56px) `16` (64px) `20` (80px) `24` (96px) `28` (112px) `32` (128px) `36` (144px) `40` (160px) `44` (176px) `48` (192px) `52` (208px) `56` (224px) `60` (240px) `64` (256px) `72` (288px) `80` (320px) `96` (384px)

Maps to: `p-0`, `p-1`, `gap-4`, `m-8`, etc.

### Font Size
`text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-5xl` (48px), `text-6xl` (60px), `text-7xl` (72px), `text-8xl` (96px), `text-9xl` (128px)

### Line Height
`leading-none` (1), `leading-tight` (1.25), `leading-snug` (1.375), `leading-normal` (1.5), `leading-relaxed` (1.625), `leading-loose` (2)

### Letter Spacing
`tracking-tighter` (-0.8em), `tracking-tight` (-0.4em), `tracking-normal` (0), `tracking-wide` (0.4em), `tracking-wider` (0.8em), `tracking-widest` (1.6em)

### Border Width
`border-0` (0px), `border` (1px), `border-2` (2px), `border-4` (4px), `border-8` (8px)

### Border Radius
`rounded-sm` (2px), `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)

### Size Constraints
Used for min-width, max-width, min-height, max-height. Includes all spacing tokens plus named sizes: `max-w-md` (448px), `max-w-lg` (512px), `max-w-xl` (576px), `max-w-2xl` (672px), `max-w-3xl` (768px), `max-w-4xl` (896px), `max-w-5xl` (1024px), `max-w-6xl` (1152px), `max-w-7xl` (1280px)

### Opacity
`opacity-0`, `opacity-5`, `opacity-10`, `opacity-20`, `opacity-25`, `opacity-30`, `opacity-40`, `opacity-50`, `opacity-60`, `opacity-70`, `opacity-75`, `opacity-80`, `opacity-90`, `opacity-95`, `opacity-100`

### Z-Index
`z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`

### Grid
- **Columns**: `grid-cols-1` through `grid-cols-12`
- **Rows**: `grid-rows-1` through `grid-rows-6`
- **Column span**: `col-span-1` through `col-span-12`, plus `col-span-full`
- **Row span**: `row-span-1` through `row-span-6`, plus `row-span-full`

### Rotate
`rotate-0`, `rotate-1`, `rotate-2`, `rotate-3`, `rotate-6`, `rotate-12`, `rotate-45`, `rotate-90`, `rotate-180`

### Scale
`scale-0`, `scale-50`, `scale-75`, `scale-90`, `scale-95`, `scale-100`, `scale-105`, `scale-110`, `scale-125`, `scale-150`

### Skew
`skew-0`, `skew-1`, `skew-2`, `skew-3`, `skew-6`, `skew-12`

### Duration
`duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, `duration-500`, `duration-700`, `duration-1000`

### Blur
`blur-sm` (4px), `blur` (8px), `blur-md` (12px), `blur-lg` (16px), `blur-xl` (24px), `blur-2xl` (40px), `blur-3xl` (64px)

### Colors
22 color families (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose) with 11 shades each (50–950), plus white and black.

When you pick `#3b82f6` in the color picker, Caja auto-matches it to `blue-500`.

## In the Properties Panel

Token-matched values show their resolved pixel value in inputs. Click the diamond icon to unbind from the token and enter a custom value. The color picker shows a grid of all Tailwind colors for quick selection.

## In the MCP Tools

The MCP tools auto-match raw values to tokens:
- `gap: 16` → `gap-4`
- `bg: "#ef4444"` → `bg-red-500`

You can also pass Tailwind classes directly via the `classes` parameter — the fastest way to style elements.
