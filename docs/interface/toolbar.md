# Toolbar

The bottom toolbar provides quick access to creation tools, viewport controls, and preview mode.

## Sections

### Canvas Tools

Four tool buttons — **Pointer (V)**, **Frame (F)**, **Text (T)**, **Image (I)**. The active tool is highlighted.

- **Single click** activates the tool mode — click on the canvas to place the element.
- **Double click** inserts immediately into the selected frame (or Body) and returns to Pointer.

For the Image tool, a native file picker opens first. After selecting a file, click on the canvas to place it (single click) or it inserts directly (double click).

### Add Element

The `+` button opens a menu to insert elements directly into the selected frame: Add Frame, Add Text, Add Link, Add Image, Add Button, Add Input, Add Textarea, Add Select.

### Breakpoints

A dropdown to switch responsive modes:

| Breakpoint | Label | Canvas Width |
|------------|-------|-------------|
| `base` | Desktop | Full |
| `md` | Tablet | 767px |
| `sm` | Mobile | 375px |

An accent dot appears on the breakpoint icon when the current breakpoint has responsive overrides. Inside the dropdown, small dots on each option indicate which breakpoints have overrides across the project.

### Preview
The eye icon (`⌘⇧P`) toggles preview mode, which disables editing and enables link navigation.

::: tip
In preview mode, the toolbar collapses — only the viewport selector and preview toggle remain visible.
:::
