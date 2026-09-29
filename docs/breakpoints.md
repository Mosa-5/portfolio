# Breakpoints

## Custom `2xl` breakpoint

`2xl` is raised from Tailwind's default `96rem` (1536px) to `100rem` (1600px) in `src/index.css`:

```css
@theme {
  --breakpoint-2xl: 100rem;
}
```

Intent: below `2xl` is the laptop layout, `2xl` and up is the desktop layout.

## Why

A 1920x1080 screen at 125% Windows scaling has a CSS viewport of 1920 / 1.25 = 1536px, which is exactly Tailwind's default `2xl`. Media queries are `min-width` (inclusive), so browsers with no side panels landed on the desktop layout while others didn't.

Measured `window.innerWidth` on 1920x1080 at 125%, before the change:

| Browser | innerWidth | Layout with default 1536px `2xl` |
| ------- | ---------- | -------------------------------- |
| Chrome  | 1536       | desktop (`2xl`)                  |
| Firefox | 1536       | desktop (`2xl`)                  |
| Edge    | 1528       | laptop                           |
| Opera   | 1491       | laptop                           |

The same screen got different layouts depending on the browser. After raising `2xl` to 1600px, all four show the laptop layout.

Browser UI (sidebars, scrollbars) only reduces the viewport, so 1536px is the maximum a 1920 screen at 125% can report. Any `2xl` value above 1536px would work. 1600px was chosen as a round value with margin.

## Side effects

- `max-w-screen-2xl` compiles to `max-width: var(--breakpoint-2xl)`, so the main container on desktop is now up to 1600px wide (was 1536px). Used in `App.tsx`, `header`, `about`, `experience`, and `ProjectPage`.
- Viewports between 1536px and 1599px (for example a 1600x900 monitor at 100%) now get the laptop layout.

## Limits

Viewport width can't tell a laptop from a desktop, only small screens from large ones. Approximate widths (not verified against device specs):

| Setup                       | Viewport | Layout  |
| --------------------------- | -------- | ------- |
| 1920 at 100%                | 1920     | desktop |
| 2560x1440 at 125%           | 2048     | desktop |
| 1920 at 125%                | 1536     | laptop  |
| 1920 at 150%                | 1280     | laptop  |
| MacBook Air 13" default     | ~1470    | laptop  |
| MacBook Pro 16" default     | ~1728    | desktop |

If large laptops like the 16" MacBook Pro should get the laptop layout too, `2xl` would need to go to around `112.5rem` (1800px), which would also put 1680px desktop monitors at 100% on the laptop layout.

## Checking a device

Run `window.innerWidth` in the browser console. It includes the scrollbar, which matches what media queries use. `>= 1600` means the `2xl` (desktop) styles apply.
