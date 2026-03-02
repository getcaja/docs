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

`0` `1` `2` `3` `4` `5` `6` `8` `10` `12` `16` `20` `24` `32` `40` `48` `56` `64`

Maps to: `p-0`, `p-1`, `p-2`, `gap-4`, `m-8`, etc.

### Font Size
`text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-5xl` (48px)

### Colors
22 color families (slate, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose) with 11 shades each (50–950), plus white and black.

When you pick `#3b82f6` in the color picker, Caja auto-matches it to `blue-500`.

## In the Properties Panel

Token-matched values show a **pill badge** with the class name (e.g., `gap-4`, `text-blue-500`). Click the diamond icon to unbind from the token and enter a custom value.

## In the MCP Tools

The MCP tools auto-match raw values to tokens:
- `gap: 16` → `gap-4`
- `bg: "#ef4444"` → `bg-red-500`

You can also pass Tailwind classes directly via the `classes` parameter — the fastest way to style elements.
