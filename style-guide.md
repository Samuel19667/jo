# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 Ensure content is responsive across all screen sizes from 320px to large screens. Test at 768px (tablet) too — the card layout should adapt gracefully.

---

## Colors

### Core Palette

| Name          | Variable         | Hex       | Usage                                      |
|---------------|------------------|-----------|--------------------------------------------|
| Cream         | `--cream`        | `#FAF7F2` | Page background                            |
| Parchment     | `--parchment`    | `#F3EDE2` | Meta pills, subtle surfaces                |
| Parchment 2   | `--parchment2`   | `#EDE4D4` | Dividers, hover backgrounds                |
| Espresso      | `--espresso`     | `#1C1008` | Header background, Apply button, headings  |
| Brown         | `--brown`        | `#3D2B1F` | Section headings, dark text                |
| Brown Mid     | `--brown-mid`    | `#6B4C3B` | Body text                                  |
| Brown Light   | `--brown-light`  | `#A07860` | Company names, meta text                   |
| Sand          | `--sand`         | `#C8B49A` | Timestamps, muted text                     |
| Sand Light    | `--sand-light`   | `#E0D4C4` | Borders, very subtle dividers              |

### Accent Colors

| Name          | Variable         | Hex       | Usage                                      |
|---------------|------------------|-----------|--------------------------------------------|
| Terracotta    | `--terra`        | `#C4622D` | Primary accent — filter chips, tag hover, CTA hover |
| Terra Light   | `--terra-light`  | `#E8855A` | Header italic text, hover states           |
| Terra Pale    | `--terra-pale`   | `#FAEADE` | Language tag background, chip background   |
| Amber         | `--amber`        | `#D4922A` | Featured card accent bar (gradient end)    |
| Amber Light   | `--amber-light`  | `#F2BC6A` | Header stats, eyebrow text                 |
| Amber Pale    | `--amber-pale`   | `#FDF3DF` | Tool tag background                        |
| Sage          | `--sage`         | `#5C7A62` | Category tags                              |
| Sage Pale     | `--sage-pale`    | `#EBF2EC` | Sage tag background                        |

### Semantic

| Context             | Color                        |
|---------------------|------------------------------|
| "New" badge text    | `#2D7A47` on `#EEF9F1`       |
| "Featured" badge    | `#9A6B18` on `#FDF3DF`       |
| Language tags       | `--terra` on `--terra-pale`  |
| Tool tags           | `#9A6B18` on `--amber-pale`  |

---

## Typography

### Fonts

**Display / Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- Weights: 700, 800, 900
- Use italic variant for the hero accent line

**Body / UI:** [Outfit](https://fonts.google.com/specimen/Outfit)
- Weights: 300, 400, 500, 600, 700

```html
<!-- Add to <head> in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

```js
// tailwind.config.js — extend fonts
theme: {
  extend: {
    fontFamily: {
      display: ['"Playfair Display"', 'Georgia', 'serif'],
      body:    ['Outfit', 'sans-serif'],
    },
  },
},
```

### Type Scale

| Element               | Font           | Size (desktop) | Weight | Color           |
|-----------------------|----------------|----------------|--------|-----------------|
| Hero H1               | Playfair Disp. | 72px           | 900    | `--cream`       |
| Hero H1 italic line   | Playfair Disp. | 72px           | 900    | `--terra-light` |
| Section heading       | Playfair Disp. | 22px           | 700    | `--brown`       |
| Job title             | Playfair Disp. | 19px           | 700    | `--espresso`    |
| Job title (hover)     | Playfair Disp. | 19px           | 700    | `--terra`       |
| Company name          | Outfit         | 12px           | 600    | `--brown-light` |
| Meta pill text        | Outfit         | 12px           | 400    | `--brown-light` |
| Tag text              | Outfit         | 12px           | 600    | varies          |
| Badge text            | Outfit         | 10px           | 700    | varies          |
| Time ago              | Outfit         | 12px           | 400    | `--sand`        |
| Apply button          | Outfit         | 12px           | 600    | `--cream`       |
| Eyebrow               | Outfit         | 11px           | 600    | `--amber-light` |
| Body / sub            | Outfit         | 16px           | 300    | `rgba(--cream, 0.5)` |

---

## Spacing

### Page Layout
- Max content width: `1200px`
- Side padding: `48px` (desktop), `16px` (mobile)
- Bottom padding: `100px`

### Header
- Min height: `420px` (desktop), scales to content
- Padding: `80px 48px 72px` (desktop), `60px 24px 60px` (mobile)
- Uses a **curved SVG bottom edge** that overlaps into the page content

### Filter Bar
- Overlaps header by `28px` via `margin-top: -28px`
- Padding: `18px 24px` (desktop), `14px 16px` (mobile)
- Border radius: `16px`
- Box shadow: `0 16px 48px rgba(28,16,8,0.14)` + `0 0 0 4px rgba(196,98,45,0.04)`

### Job Cards
| Property           | Desktop  | Mobile   |
|--------------------|----------|----------|
| Padding            | 24px 28px | 20px 18px 16px |
| Gap between cards  | 14px     | 12px     |
| Border radius      | 16px     | 14px     |
| Featured left pad  | +4px (32px total) | — |

---

## Interactive States

### Tags (Language & Tool)
- Default: themed background + border (see Color section)
- Hover: filled with accent color, white text, `scale(1.06)`, bloom shadow
- Transition: `all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)` — spring easing for the scale

```css
/* Example — language tag hover */
.t-lang:hover {
  background: var(--terra);
  color: white;
  transform: scale(1.06);
  box-shadow: 0 4px 12px rgba(196,98,45,0.3);
}
```

### Job Card
- Hover: `translateY(-2px)`, border becomes `rgba(196,98,45,0.28)`, deeper shadow
- Warm gradient wash fades in via `::after` pseudo-element

### Apply Button
- Default: `--espresso` background, `--cream` text
- Hover: `--terra` background, `translateX(2px)`, amber glow shadow
- Arrow icon shifts `translateX(2px)` on hover

### Filter Chip Remove (✕)
- Default: `--terra` background
- Hover: `--brown` background

---

## Components

### Featured Card
- Desktop: `3px` left border, gradient `--amber → --terra`
- Mobile: `2px` top border, gradient `transparent → --amber → --terra → transparent`
- Slightly warm background: `linear-gradient(105deg, #FFFDF9 0%, white 55%)`

### Company Logo
- Desktop: `60px × 60px`, `border-radius: 14px`
- Mobile: `42px × 42px`, `border-radius: 11px`, positioned **20px above** the card top edge
- Each company has a unique gradient background — see design file

### Hero Ink-Wash Background
The header uses layered `radial-gradient` blobs with `blur(80px)` to create an organic ink-wash look — no images required:
```css
.blob-terra { background: radial-gradient(circle, rgba(196,98,45,0.55) 0%, transparent 70%); }
.blob-amber { background: radial-gradient(circle, rgba(212,146,42,0.35) 0%, transparent 70%); }
.blob-sage  { background: radial-gradient(circle, rgba(92,122,98,0.25)  0%, transparent 70%); }
```

### Grain Texture Overlay
```css
/* SVG noise filter as data URI — creates film grain over the header */
background-image: url("data:image/svg+xml, [feTurbulence + feColorMatrix SVG]");
```

### Card Entrance Animation
Cards animate in with a staggered `slideUp`:
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Delay each card by 50ms */
.job-card:nth-child(n) { animation-delay: calc(n * 0.05s); }
```

### Curved Header Edge
```html
<svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--cream)">
  <path d="M0 60 Q720 0 1440 60 L1440 60 L0 60 Z"/>
</svg>
```
