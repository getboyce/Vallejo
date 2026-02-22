# Vallejo v1.1 — LLM Quick Reference

> Primary implementation file for code generation. For exact token values in DTCG format, see `copart-design-tokens.json`.
> For detailed component specs (anatomy, states, accessibility), see the full spec `copart-design-system.md`.

---

## Setup

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Viewport (required for mobile safe areas) -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

- **Dark mode:** set `data-theme="dark"` on `<html>`. Remove or set `"light"` for light mode.
- **Mobile platform:** set `data-platform="mobile"` on `<html>` for mobile-specific sizing overrides.
- **Icons:** Inline SVG only (Iconic set). Always use `stroke="currentColor"` and `fill="none"`. No emoji, no icon fonts, no `<img>` tags. All 120 icon SVG paths are in `ICONS.json`.
- **No pure red:** Error/destructive states use rose/magenta (`--error-*`), never `#FF0000` etc.

### Icon Names by Category

120 icons across 9 categories. SVG path data for each is in `ICONS.json`.

| Category | Icons |
|----------|-------|
| Navigation | home, search, menu, close, chevron-left, chevron-right, chevron-up, chevron-down, arrow-left, arrow-right, arrow-up, arrow-down, link, export |
| Actions | check, checkmark, plus, minus, edit, trash, copy, upload, download, share, send, refresh, star, heart, bookmark, new |
| Auction & Commerce | car, gavel, credit-card, dollar, tag, clock, calendar, location, pin, filter, sort-asc, sort-desc, grid, eye, eye-off, barcode, building-store, cart, add credit card, package, receipt, shipment, shopping-cart, wallet |
| Vehicles & Shipping | car-battery, car-dashboard, car-door, car-engine, speed-gauge, steering-wheel, trailer, truck, shipment-up, shipment-down |
| User & Account | user, user-edit, users, settings, wrench, sliders, bell, mail, phone, lock, lock-unlocked, shield, shield-tick, keys, flag-priority, voice-id, log-out |
| Media & Files | camera, photo, video, file, file-text, folder, paperclip, play, pause, speaker, speaker-high, speaker-mute, hd |
| Feedback & Status | information, warning, close-circle, check-circle, alert, target, activity, chart |
| AI & Intelligence | ai, sparkles, pen-sparkles, doc-sparkle |
| Device & System | smartphone, monitor, sun, moon, globe, message, annotation, wifi, battery, maximize, minimize, pin-tack, sidebar, cards |

**Icon usage pattern:**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- paste paths from ICONS.json -->
</svg>
```

---

## CSS Variable Map

### Colors — Primitives (Blue)

```css
--blue-50:  #F6F9FD;   /* dark: #0D1117 */
--blue-100: #EEF2FC;   /* dark: #141E33 */
--blue-200: #E1E9FA;   /* dark: #1E2A45 */
--blue-600: #2662D9;   /* dark: #5B8EF0 — primary brand */
--blue-800: #063598;   /* dark: #7AAAF5 — hover */
--blue-900: #0F2757;   /* dark: #B8D4FA — titles */
```

### Colors — Primitives (Orange)

```css
--orange-50:  #FDF7F2;  /* dark: #1A1008 */
--orange-100: #FAEEE5;  /* dark: #221710 */
--orange-200: #F8E2D3;  /* dark: #2E1F14 */
--orange-600: #D86518;  /* dark: #E8873F — accent primary */
--orange-800: #933C06;  /* dark: #F0A566 — accent hover */
--orange-900: #50250B;  /* dark: #F8C99A — accent text */
```

### Colors — Primitives (Neutral)

```css
--neutral-50:  #FFFFFF;  /* dark: #1A1D23 — page bg */
--neutral-100: #F4F5F6;  /* dark: #22262E — surface */
--neutral-200: #E2E5E9;  /* dark: #2E3340 — muted dividers */
--neutral-300: #C5CCD3;  /* dark: #3A4150 — borders */
--neutral-500: #7A8691;  /* dark: #6E7A86 — placeholders */
--neutral-700: #46525D;  /* dark: #A8B2BC — body copy */
--neutral-900: #2F333C;  /* dark: #F0F1F3 — headlines */
```

### Colors — Semantics (Feedback)

```css
/* Success */
--success-bg:     #D7E8D1;  /* dark: #1A2E14 */
--success-text:   #1B6600;  /* dark: #6ABF4D */
--success-border: #4CA830;  /* dark: #4CA830 */
--success-icon:   #238202;  /* dark: #6ABF4D */

/* Warning */
--warning-bg:     #FFF7D1;  /* dark: #2E2510 */
--warning-text:   #705700;  /* dark: #E8B830 */
--warning-border: #EC9C0D;  /* dark: #E8B830 */
--warning-icon:   #B07800;  /* dark: #E8B830 */

/* Error (rose — no pure red) */
--error-bg:     #FCE5E9;  /* dark: #2E1219 */
--error-text:   #8C1D35;  /* dark: #F06080 */
--error-border: #D42A54;  /* dark: #F06080 */
--error-icon:   #C22248;  /* dark: #F06080 */

/* Info */
--info-bg:     #E0EBFF;  /* dark: #141E33 */
--info-text:   #0F2757;  /* dark: #7AAAF5 */
--info-border: #2662D9;  /* dark: #5B8EF0 */
--info-icon:   #2662D9;  /* dark: #5B8EF0 */
```

### Colors — Semantics (Surface / Text / Border / Interactive)

```css
/* Backgrounds */
--bg-primary:   #FFFFFF;  /* dark: #1A1D23 */
--bg-secondary: #F4F5F6;  /* dark: #22262E */
--bg-tertiary:  #F6F9FD;  /* dark: #2E3340 */

/* Text */
--text-primary:  #2F333C;  /* dark: #F0F1F3 */
--text-secondary: #46525D; /* dark: #A8B2BC */
--text-tertiary: #7A8691;  /* dark: #6E7A86 */
--text-disabled: #C5CCD3;  /* dark: #454D58 */

/* Borders */
--border-default: #C5CCD3; /* dark: #3A4150 */
--border-subtle:  #E2E5E9; /* dark: #2E3340 */
--border-focus:   #2662D9; /* dark: #5B8EF0 */

/* Interactive */
--interactive-primary:      #2662D9; /* dark: #5B8EF0 */
--interactive-hover:        #063598; /* dark: #7AAAF5 */
--interactive-active:       #042D7A; /* dark: #4A7DE0 */
--interactive-accent:       #D86518; /* dark: #E8873F */
--interactive-accent-hover: #933C06; /* dark: #F0A566 */
--interactive-accent-surface: #F8E2D3; /* dark: #2E1F14 */

/* Header — stays dark in both themes */
--header-bg: #0F2757;
```

### Spacing

```css
--space-0:  0px;     --space-1:  4px;     --space-2:  8px;
--space-3:  12px;    --space-4:  16px;    --space-5:  20px;
--space-6:  24px;    --space-8:  32px;    --space-10: 40px;
--space-12: 48px;    --space-16: 64px;
```

### Typography

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

| Token | Size | Weight | Line-Height | Use |
|-------|------|--------|-------------|-----|
| `type-display-lg` | 64px | 900 | 72px | Hero marketing |
| `type-display-sm` | 48px | 800 | 56px | Large display |
| `type-headline` | 40px | 800 | 48px | H1 page title |
| `type-title-1` | 28px | 700 | 36px | H2 section |
| `type-title-2` | 22px | 700 | 30px | H3 subsection |
| `type-title-3` | 18px | 600 | 26px | H4 card header |
| `type-body-lg` | 18px | 400 | 28px | Large body |
| `type-body` | 16px | 400 | 24px | Default body |
| `type-body-emphasis` | 16px | 500 | 24px | Emphasized body |
| `type-callout` | 16px | 500 | 24px | Supporting text |
| `type-subheadline` | 14px | 600 | 20px | Labels, nav items |
| `type-footnote` | 13px | 400 | 18px | Timestamps |
| `type-caption-1` | 12px | 500 | 16px | Metadata, tags |
| `type-caption-2` | 11px | 500 | 14px | Tab bar labels |
| `type-overline` | 11px | 700 | 16px | Uppercase labels (`letter-spacing: 0.08em; text-transform: uppercase`) |

### Border Radius

```css
--radius-none: 0px;     --radius-sm:   4px;     --radius-md:  6px;
--radius-lg:   8px;     --radius-xl:   12px;    --radius-2xl: 16px;
--radius-pill: 9999px;  --radius-full: 50%;
```

### Shadows

```css
--shadow-xs:          0 1px 2px rgba(0,0,0,0.05);
--shadow-sm:          0 1px 3px rgba(0,0,0,0.06);
--shadow-md:          0 4px 12px rgba(0,0,0,0.08);
--shadow-lg:          0 8px 24px rgba(0,0,0,0.12);
--shadow-xl:          0 16px 48px rgba(0,0,0,0.16);
--shadow-focus:       0 0 0 3px rgba(38,98,217,0.4);
--shadow-focus-error: 0 0 0 3px rgba(212,42,84,0.3);
```

### Motion

```css
/* Duration */
--dur-fast:      100ms;   --dur-normal:    150ms;
--dur-moderate:  200ms;   --dur-slow:      300ms;
--dur-deliberate: 400ms;

/* Easing */
--ease-out:    ease-out;
--ease-spring: cubic-bezier(0.4, 0, 0.2, 1);
--ease-enter:  cubic-bezier(0.32, 0.72, 0, 1);
--ease-exit:   cubic-bezier(0.4, 0, 1, 1);
```

### Platform-Adaptive Variables

These change automatically when `data-platform="mobile"` is set:

| Variable | Desktop | Mobile |
|----------|---------|--------|
| `--btn-sm-h` | 32px | 36px |
| `--btn-md-h` | 40px | 44px |
| `--btn-lg-h` | 48px | 50px |
| `--btn-xl-h` | 56px | 56px |
| `--input-h` | 44px | 48px |
| `--input-px` | 12px | 16px |
| `--input-r` | 8px | 10px |
| `--card-r` | 12px | 16px |
| `--toggle-w` | 48px | 51px |
| `--toggle-h` | 28px | 31px |
| `--toggle-thumb` | 22px | 27px |
| `--body-fs` | 16px | 17px |
| `--modal-r` | 16px | 20px |

---

## Components

---

### Buttons

```html
<button class="btn btn-primary btn-md">
  <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <!-- icon path -->
  </svg>
  Place Bid
</button>
```

**6 Variants:**

| Class | Background | Text | Border |
|-------|-----------|------|--------|
| `.btn-primary` | `var(--interactive-primary)` | `#fff` | none |
| `.btn-secondary` | `var(--bg-primary)` | `var(--interactive-primary)` | `1.5px solid var(--interactive-primary)` |
| `.btn-tertiary` | `transparent` | `var(--interactive-primary)` | none |
| `.btn-destructive` | `var(--error-icon)` | `#fff` | none |
| `.btn-success` | `var(--success-icon)` | `#fff` | none |
| `.btn-cta` | `var(--interactive-accent)` | `#fff` | none |

**Sizes:**

| Class | Height | Padding-X | Font Size | Radius |
|-------|--------|-----------|-----------|--------|
| `.btn-xs` | 28px | 10px | 12px | `var(--radius-md)` |
| `.btn-sm` | 32px | 12px | 14px | `var(--radius-md)` |
| `.btn-md` | 40px | 16px | 14px | `var(--radius-lg)` |
| `.btn-lg` | 48px | 24px | 16px | `var(--radius-lg)` |
| `.btn-xl` | 56px | 32px | 18px | 10px |

**States:** hover (`var(--interactive-hover)` bg for primary), active (`scale(0.98)`), disabled (`var(--neutral-200)` bg, `var(--neutral-500)` text), loading (`aria-busy="true"`), focus (`box-shadow: var(--shadow-focus)`)

---

### Text Field

```html
<div class="form-group">
  <label class="form-label" for="vin">VIN Number</label>
  <input class="form-input" id="vin" type="text"
         placeholder="Enter 17-character VIN"
         aria-describedby="vin-helper">
  <span class="form-helper" id="vin-helper">Found on driver-side dashboard</span>
</div>

<!-- Error state -->
<div class="form-group">
  <label class="form-label" for="email">Email</label>
  <input class="form-input error" id="email" type="email"
         aria-invalid="true" aria-describedby="email-error">
  <span class="form-error" id="email-error">Please enter a valid email address</span>
</div>
```

| Property | Value |
|----------|-------|
| Height | `var(--input-h)` (44px desktop, 48px mobile) |
| Border | `1.5px solid var(--border-default)` / focus: `2px solid var(--border-focus)` |
| Radius | `var(--radius-lg)` (8px) |
| Padding | `0 var(--space-3)` |
| Font | 16px (prevents iOS zoom) |
| Focus shadow | `0 0 0 3px rgba(38,98,217,0.15)` |
| Error bg | `var(--error-bg)` with slight tint / `var(--error-bg)` (dark) |

---

### Dropdown / Select

```html
<div class="form-group">
  <label class="form-label">Vehicle Make</label>
  <div class="dropdown-wrap">
    <button class="dropdown-trigger" role="combobox"
            aria-expanded="false" aria-haspopup="listbox">
      <span>Select make...</span>
      <svg class="chevron" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>
    <div class="dropdown-menu" role="listbox">
      <div class="dropdown-option" role="option">Toyota</div>
      <div class="dropdown-option selected" role="option" aria-selected="true">Honda</div>
      <div class="dropdown-option" role="option">Ford</div>
    </div>
  </div>
</div>
```

| Property | Value |
|----------|-------|
| Trigger | same as text field (44px, `var(--radius-lg)`) |
| Menu bg | `var(--bg-primary)` |
| Menu border | `1px solid var(--border-subtle)` |
| Menu radius | `var(--radius-xl)` (12px) |
| Menu shadow | `var(--shadow-lg)` |
| Option height | 40px |
| Selected bg | `var(--blue-200)` |
| Hover bg | `var(--blue-100)` |
| z-index | 1100 |

**Variants:** single-select (default), multi-select (`aria-multiselectable="true"`), searchable (add search input inside menu)

---

### Toggle Switch

```html
<label class="toggle-wrap">
  <div class="toggle-track" role="switch" aria-checked="false"
       tabindex="0" aria-label="Enable notifications">
    <div class="toggle-thumb"></div>
  </div>
  <span class="toggle-label">Email Notifications</span>
</label>

<!-- On state: add class "on" to toggle-track, set aria-checked="true" -->
```

| Property | Desktop | Mobile |
|----------|---------|--------|
| Track | `var(--toggle-w)` x `var(--toggle-h)` (48x28) | 51x31 |
| Thumb | `var(--toggle-thumb)` (22px) | 27px |
| Inset | 3px | 2px |
| Off bg | `var(--neutral-300)` |
| On bg | `var(--interactive-primary)` |
| Transition | `var(--dur-moderate) var(--ease-spring)` |

---

### Checkbox

```html
<label class="checkbox-wrap">
  <div class="checkbox-box" role="checkbox" aria-checked="false" tabindex="0">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </div>
  <span class="checkbox-text">I agree to the Terms of Service</span>
</label>

<!-- Checked: add class "checked" to .checkbox-box, set aria-checked="true" -->
```

| Property | Value |
|----------|-------|
| Size | 20px (mobile: 22px) |
| Radius | `var(--radius-sm)` (4px) |
| Unchecked border | `1.5px solid var(--neutral-300)` |
| Checked bg | `var(--interactive-primary)` |
| Indeterminate | `aria-checked="mixed"`, minus icon instead of check |
| Group spacing | `var(--space-3)` vertical |

---

### Radio Button

```html
<fieldset>
  <legend class="form-label">Account Type</legend>
  <label class="radio-wrap">
    <div class="radio-circle selected" role="radio" aria-checked="true" tabindex="0">
      <div class="radio-dot"></div>
    </div>
    <span class="checkbox-text">Personal</span>
  </label>
  <label class="radio-wrap">
    <div class="radio-circle" role="radio" aria-checked="false" tabindex="-1">
      <div class="radio-dot"></div>
    </div>
    <span class="checkbox-text">Business</span>
  </label>
</fieldset>
```

| Property | Value |
|----------|-------|
| Outer circle | 20px, `border-radius: 50%` |
| Inner dot | 10px, `var(--interactive-primary)` |
| Unselected border | `1.5px solid var(--neutral-300)` |
| Selected border | `1.5px solid var(--interactive-primary)` |
| Group spacing | `var(--space-3)` vertical |

---

### Slider / Range

**Single slider:**

```html
<div class="slider-wrap">
  <label class="form-label" for="price">Max Price</label>
  <input class="slider-range" id="price" type="range"
         min="0" max="50000" value="25000" step="500"
         role="slider" aria-valuemin="0" aria-valuemax="50000"
         aria-valuenow="25000" aria-valuetext="$25,000"
         aria-label="Maximum price">
  <div class="slider-value">$25,000</div>
</div>
```

**Dual-thumb range slider:**

```html
<div class="slider-wrap">
  <label class="form-label">Price Range</label>
  <div class="range-slider">
    <div class="range-slider-fill" style="left: 20%; width: 40%"></div>
    <input type="range" min="0" max="50000" value="10000"
           aria-label="Minimum price" aria-valuetext="$10,000">
    <input type="range" min="0" max="50000" value="30000"
           aria-label="Maximum price" aria-valuetext="$30,000">
  </div>
  <div class="range-slider-labels">
    <span class="slider-value">$10,000</span>
    <span class="slider-value">$30,000</span>
  </div>
  <div class="range-slider-minmax">
    <span>$0</span><span>$50,000</span>
  </div>
</div>
```

| Property | Value |
|----------|-------|
| Track height | 4px, `var(--neutral-200)` bg, 2px radius |
| Fill | `var(--interactive-primary)` |
| Thumb | 24px circle (mobile: 28px), white, `1.5px solid var(--interactive-primary)` |
| Thumb shadow | `0 1px 4px rgba(0,0,0,0.15)` |
| Hover | `scale(1.1)` on thumb |
| Active | `scale(1.15)`, thumb fills `var(--interactive-primary)` |

---

### Alert / Banner

```html
<div class="alert alert-info" role="status">
  <div class="alert-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  </div>
  <div class="alert-content">
    <div class="alert-title">Auction Schedule Updated</div>
    <div class="alert-desc">Auction times have been adjusted for your timezone.</div>
  </div>
</div>
```

**4 Variants:**

| Class | Background | Border-left | Text | Icon | Role |
|-------|-----------|-------------|------|------|------|
| `.alert-info` | `var(--info-bg)` | `var(--info-border)` | `var(--info-text)` | info circle | `status` |
| `.alert-success` | `var(--success-bg)` | `var(--success-border)` | `var(--success-text)` | checkmark circle | `status` |
| `.alert-warning` | `var(--warning-bg)` | `var(--warning-border)` | `var(--warning-text)` | triangle exclamation | `alert` |
| `.alert-error` | `var(--error-bg)` | `var(--error-border)` | `var(--error-text)` | octagon exclamation | `alert` |

**Specs:** radius `var(--radius-lg)`, padding `var(--space-4)`, border-left 3px, icon 20px, gap `var(--space-3)`, title 14px/600, desc 14px/400.

---

### Toast / Snackbar

```html
<div class="toast toast-neutral" role="status" aria-live="polite">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
  Vehicle added to Watchlist
</div>
```

**Variants:**

| Class | Background | Use |
|-------|-----------|-----|
| `.toast-neutral` | `var(--neutral-900)` | General confirmations |
| `.toast-success` | `var(--success-text)` | Positive completions |
| `.toast-error` | `var(--error-text)` | Error notifications |

| Property | Value |
|----------|-------|
| Position | fixed, bottom 24px, center (desktop) / full-width (mobile) |
| Radius | 10px |
| Shadow | `var(--shadow-lg)` |
| Auto-dismiss | 5s default, 8s with action, indefinite for errors |
| Enter | `translateY(16px) -> 0`, 250ms ease-out |
| Exit | fade out, 200ms ease-in |
| z-index | 2000 |
| Max stack | 3 visible |

---

### Modal / Dialog

```html
<div class="modal-backdrop" role="dialog" aria-modal="true"
     aria-labelledby="modal-title">
  <div class="modal-panel">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">Confirm Your Bid</h2>
      <button class="modal-close" aria-label="Close dialog">&times;</button>
    </div>
    <div class="modal-body">
      <p>You are about to place a bid of <strong>$4,500</strong> on Lot #48291076.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-md">Cancel</button>
      <button class="btn btn-primary btn-md">Confirm Bid</button>
    </div>
  </div>
</div>
<!-- Show: add class "visible" to .modal-backdrop -->
```

| Property | Value |
|----------|-------|
| Backdrop | `rgba(0,0,0,0.5)`, z-index 1500 |
| Panel bg | `var(--bg-primary)` |
| Panel radius | `var(--radius-2xl)` (16px) — mobile: `var(--modal-r)` top only (bottom sheet) |
| Panel shadow | `var(--shadow-xl)` |
| Sizes | SM: 400px, MD: 560px, LG: 720px |
| Header padding | `var(--space-5) var(--space-6)` |
| Title | 20px / 700 |
| Body padding | `0 var(--space-6) var(--space-5)` |
| Footer | border-top `1px solid var(--border-subtle)`, `var(--space-4) var(--space-6)`, flex justify-end |
| Open anim | `scale(0.95)->1`, `var(--dur-moderate) var(--ease-out)` |
| Close | Escape key, backdrop click |
| Focus trap | required |

---

### Shelf / Drawer

```html
<div class="shelf-backdrop shelf-right shelf-medium">
  <div class="shelf-panel">
    <div class="shelf-handle"></div> <!-- mobile only -->
    <div class="shelf-header">
      <h2 class="shelf-title">Vehicle Details</h2>
      <button class="shelf-close" aria-label="Close drawer">&times;</button>
    </div>
    <div class="shelf-body">
      <!-- content -->
    </div>
    <div class="shelf-footer">
      <button class="btn btn-secondary btn-md">Close</button>
      <button class="btn btn-primary btn-md">Place Bid</button>
    </div>
  </div>
</div>
<!-- Show: add class "visible" to .shelf-backdrop -->
```

**Side variants:** `.shelf-right` (default), `.shelf-left`

**Width variants (desktop):**

| Class | Width |
|-------|-------|
| `.shelf-narrow` | 360px |
| `.shelf-medium` | 480px |
| `.shelf-wide` | 640px |
| `.shelf-full` | 100vw |

**Mobile height variants (auto-converted to bottom sheet):**

| Class | Height |
|-------|--------|
| `.shelf-peek` | 40vh |
| `.shelf-half` | 60vh |
| `.shelf-tall` | 85vh |
| `.shelf-full` | 100vh (no handle) |

| Property | Value |
|----------|-------|
| z-index | 1400 |
| Backdrop | `rgba(0,0,0,0.5)` |
| Panel bg | `var(--bg-primary)` |
| Desktop radius | 16px on open side |
| Mobile radius | `20px 20px 0 0` |
| Handle | 36x4px, `var(--neutral-300)`, 2px radius, centered |
| Open anim | desktop: `translateX(100%)->0`, `var(--dur-slow) var(--ease-enter)` |
| Mobile open | `translateY(100%)->0`, `var(--dur-deliberate) var(--ease-enter)` |

---

### Progress Indicator

**Spinner:**

```html
<div class="spinner" role="status" aria-label="Loading"></div>
<div class="spinner spinner-lg" role="status" aria-label="Loading page"></div>
```

Spinner: `var(--interactive-primary)` top border, `var(--neutral-200)` track, 0.8s linear infinite rotation. Default 24px, `.spinner-lg` 48px.

**Progress bar:**

```html
<div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar-track">
    <div class="progress-bar-fill" style="width: 65%"></div>
  </div>
</div>
```

Track: 6px, `var(--neutral-200)`, 3px radius. Fill: `var(--interactive-primary)`.

**Step indicator:**

```html
<div class="steps">
  <div class="step-group">
    <div class="step-circle done">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="#fff" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="step-label">Review</div>
  </div>
  <div class="step-line done"></div>
  <div class="step-group">
    <div class="step-circle current" aria-current="step">2</div>
    <div class="step-label">Payment</div>
  </div>
  <div class="step-line upcoming"></div>
  <div class="step-group">
    <div class="step-circle upcoming">3</div>
    <div class="step-label">Confirm</div>
  </div>
</div>
```

| Element | Completed | Current | Upcoming |
|---------|-----------|---------|----------|
| Circle (32px) | `var(--interactive-primary)` bg, white check | `2px solid var(--interactive-primary)`, blue number | `2px solid var(--neutral-300)`, gray number |
| Connector (2px) | `var(--interactive-primary)` | -- | `var(--neutral-200)` |

---

### Skeleton Screen

```html
<div aria-busy="true" aria-label="Loading content">
  <!-- Text skeleton -->
  <div class="skeleton" style="width: 100%; height: 16px; margin-bottom: 8px"></div>
  <div class="skeleton" style="width: 80%; height: 16px; margin-bottom: 8px"></div>
  <div class="skeleton" style="width: 60%; height: 16px"></div>

  <!-- Circle skeleton (avatar) -->
  <div class="skeleton" style="width: 40px; height: 40px; border-radius: 50%"></div>

  <!-- Card skeleton -->
  <div class="skeleton" style="width: 100%; height: 200px; border-radius: var(--radius-xl)"></div>
</div>
```

| Property | Value |
|----------|-------|
| Base bg | `var(--neutral-100)` |
| Shimmer | `linear-gradient(90deg, transparent 25%, var(--neutral-200) 50%, transparent 75%)` |
| Animation | `shimmer 1.5s infinite ease-in-out` |
| Radius | match target component |

---

### Card

```html
<article class="card">
  <div class="card-media">
    <img src="vehicle.jpg" alt="2019 Toyota Camry SE, front-left view" loading="lazy">
    <span class="card-badge badge-live">Live</span>
  </div>
  <div class="card-body">
    <h3 class="card-title">2019 Toyota Camry SE</h3>
    <p class="card-subtitle">Lot #48291076 · Sacramento, CA</p>
    <div class="card-meta">
      <span>45,230 mi</span>
      <span>Front End</span>
      <span>Run & Drive</span>
    </div>
  </div>
  <div class="card-footer">
    <div>
      <div class="card-price-label">Current Bid</div>
      <div class="card-price">$4,500</div>
    </div>
    <button class="btn btn-primary btn-sm">Bid Now</button>
  </div>
</article>
```

**5 Variants:**

| Variant | Class | Layout |
|---------|-------|--------|
| Vertical (default) | `.card` | image top, content below |
| Horizontal | `.card.horizontal` | image left, content right |
| Compact | `.card.compact` | small image + single line |
| Featured | `.card.featured` | `2px solid var(--interactive-accent)` border |
| Stat | `.stat-card` | no image, see Stat/KPI below |

**Badge classes:** `.badge-live` (green), `.badge-buy` (blue), `.badge-upcoming` (orange)

| Property | Value |
|----------|-------|
| Radius | `var(--card-r)` (12px desktop, 16px mobile) |
| Border | `1px solid var(--border-subtle)` |
| Body padding | `var(--card-p)` (16px) |
| Media ratio | `4:3` |
| Hover | `translateY(-2px)`, `box-shadow: var(--shadow-md)` |
| Title | 16px / 600 |
| Price | `var(--font-mono)`, 18px / 700 |
| Footer | border-top `1px solid var(--border-subtle)`, `var(--space-3) var(--space-4)` |
| Grid gap | `var(--space-6)` |

---

### Table

```html
<div class="table-container">
  <table aria-label="Active auctions">
    <thead>
      <tr>
        <th scope="col">Lot #</th>
        <th scope="col">Vehicle</th>
        <th scope="col">Current Bid</th>
        <th scope="col" aria-sort="descending">Time Left</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="mono">#48291076</td>
        <td>2019 Toyota Camry SE</td>
        <td class="mono">$4,500</td>
        <td>2h 15m</td>
        <td><span class="table-status status-active">Active</span></td>
      </tr>
      <tr class="hot">
        <td class="mono">#48291077</td>
        <td>2020 Honda Civic LX</td>
        <td class="mono">$6,200</td>
        <td>45m</td>
        <td><span class="table-status status-hot">Hot</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

| Property | Value |
|----------|-------|
| Container | `var(--bg-primary)`, `1px solid var(--border-subtle)`, `var(--radius-xl)` |
| Header bg | `var(--neutral-100)` |
| Header font | 13px / 600 |
| Cell padding | `var(--space-3)` |
| Cell font | 14px / 400, `var(--text-secondary)` |
| Row hover | `var(--neutral-100)` bg |
| Alternating | `var(--neutral-100)` (optional) |
| Hot row | `var(--orange-50)` bg |
| Sort icon | 12px, `var(--interactive-primary)` when sorted |
| `.mono` class | `var(--font-mono)`, 13px (for VIN, lot#, price) |
| Status badges | `.status-active` (`var(--blue-200)` bg / `var(--blue-900)` text), `.status-hot` (`var(--orange-200)` bg / `var(--orange-900)` text) |

---

### List

```html
<div class="list-container">
  <!-- Two-line variant -->
  <div class="list-item" role="button" tabindex="0">
    <div class="avatar avatar-sm avatar-blue">TC</div>
    <div class="list-item-content">
      <div class="list-item-title">2019 Toyota Camry SE</div>
      <div class="list-item-sub">Lot #48291076 · Sacramento, CA</div>
    </div>
    <div class="list-item-trailing">$4,500</div>
  </div>

  <!-- With urgent trailing -->
  <div class="list-item" role="button" tabindex="0">
    <div class="avatar avatar-sm avatar-accent">HC</div>
    <div class="list-item-content">
      <div class="list-item-title">2020 Honda Civic LX</div>
      <div class="list-item-sub">Lot #48291077 · Dallas, TX</div>
    </div>
    <div class="list-item-trailing urgent">Ending Soon</div>
  </div>
</div>
```

**4 Variants:**

| Variant | Min Height | Leading | Content |
|---------|-----------|---------|---------|
| Simple | 48px | none | title only |
| Two-line | 64px | icon (24px) or avatar | title + subtitle |
| Three-line | 80px | thumbnail (48px) | title + subtitle + desc |
| Interactive | 48px | checkbox/radio | title + subtitle |

| Property | Value |
|----------|-------|
| Padding | `var(--space-3) var(--space-4)` |
| Hover bg | `var(--neutral-100)` |
| Divider | `1px solid var(--border-subtle)` |
| Title | 15px / 500, `var(--text-primary)` |
| Subtitle | 12px, `var(--text-tertiary)` |
| Trailing | 12px / 500, `var(--text-tertiary)` |
| `.urgent` | `var(--interactive-accent)`, 700 weight |

---

### Stat / KPI

```html
<div class="stat-card">
  <div class="stat-label">Active Bids</div>
  <div class="stat-value">24</div>
  <div class="stat-trend up">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
    +12.5%
  </div>
</div>

<!-- Accent variant (orange top border) -->
<div class="stat-card accent">
  <div class="stat-label">Ending Today</div>
  <div class="stat-value">8</div>
  <div class="stat-trend urgent">3 in next hour</div>
</div>
```

| Property | Value |
|----------|-------|
| Card | `var(--bg-primary)`, `1px solid var(--border-subtle)`, `var(--radius-xl)`, `var(--space-5)` padding |
| Value | `var(--font-mono)`, 32px / 800, `var(--text-primary)` |
| Label | 11px / 700, uppercase, `letter-spacing: 0.08em`, `var(--text-tertiary)` |
| Trend up | `var(--success-icon)` |
| Trend down | `var(--error-icon)` |
| Trend urgent | `var(--interactive-accent)` |
| `.accent` variant | `border-top: 3px solid var(--interactive-accent)` |

---

### Chart

Specification only (use a chart library). Color sequence for multi-series:

1. `var(--blue-600)` (#2662D9)
2. `#5B8EF0` (light blue)
3. `var(--blue-900)` (#0F2757)
4. `#EC9C0D` (amber)
5. `#238202` (green)
6. `var(--neutral-500)` (#7A8691)

Axis labels: 12px/500, `var(--text-tertiary)`. Grid: 1px dashed `var(--neutral-200)`. Tooltip: white bg, 8px radius, `var(--shadow-md)`.

---

### Badge / Tag

```html
<!-- Status badge -->
<span class="card-badge badge-live">Live</span>
<span class="card-badge badge-buy">Buy Now</span>
<span class="card-badge badge-upcoming">Upcoming</span>

<!-- Table status pill -->
<span class="table-status status-active">Active</span>
<span class="table-status status-hot">Hot</span>
```

| Property | Value |
|----------|-------|
| Padding | `3px 10px` (card badge) / `2px 8px` (table status) |
| Radius | `var(--radius-pill)` |
| Font | 11px / 700, uppercase, `letter-spacing: 0.04em` |
| `.badge-live` | `var(--success-icon)` bg, white text |
| `.badge-buy` | `var(--interactive-primary)` bg, white text |
| `.badge-upcoming` | `var(--interactive-accent)` bg, white text |
| `.status-active` | `var(--blue-200)` bg, `var(--blue-900)` text |
| `.status-hot` | `var(--orange-200)` bg, `var(--orange-900)` text |

---

### Header

```html
<header class="demo-header" role="banner" style="background: var(--header-bg);">
  <div class="demo-header-left">
    <div class="demo-header-logo">V</div>
    <div>
      <div class="demo-header-title">Copart</div>
      <div class="demo-header-subtitle">Online Vehicle Auctions</div>
    </div>
  </div>
  <nav role="navigation" aria-label="Main navigation">
    <!-- nav links: 14px/600, white, opacity 0.85 -> 1.0 on hover -->
  </nav>
  <div class="demo-header-actions">
    <button class="btn btn-secondary btn-sm" style="color:#fff; border-color: rgba(255,255,255,0.3)">Sign In</button>
    <button class="btn btn-cta btn-sm">Register</button>
  </div>
</header>
```

| Property | Value |
|----------|-------|
| Height | 72px desktop / 56px mobile |
| Background | `var(--header-bg)` (#0F2757 -- stays dark in both themes) |
| z-index | 1000 |
| Logo height | 32px desktop / 28px mobile |
| Nav link | 14px/600, white, `opacity: 0.85` -> `1.0` on hover |
| Desktop padding | `0 var(--space-6)` |
| Scrolled | 56px height, `box-shadow: var(--shadow-md)`, solid bg |
| Position | `sticky; top: 0` |

---

### Tab Bar (Mobile)

```html
<nav class="tab-bar-demo" role="tablist" aria-label="Tab navigation"
     style="position: fixed; bottom: 0; left: 0; right: 0;
            padding-bottom: env(safe-area-inset-bottom);">
  <div class="tab-item active" role="tab" aria-selected="true">
    <svg class="tab-item-icon" width="24" height="24" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
    </svg>
    <span class="tab-item-label">Home</span>
  </div>
  <div class="tab-item" role="tab" aria-selected="false">
    <!-- ... more tabs (max 5) -->
  </div>
</nav>
```

| Property | Value |
|----------|-------|
| Height | `56px + env(safe-area-inset-bottom)` |
| Background | `var(--bg-primary)` |
| Border-top | `1px solid var(--border-subtle)` |
| Icon | 24px |
| Label | 11px / 500 |
| Active color | `var(--interactive-primary)` |
| Inactive color | `var(--text-tertiary)` |
| Touch target | 48x48px per item |
| Max items | 5 |
| z-index | 1000 |

---

### Sidebar

```html
<aside class="sidebar-demo" role="complementary" aria-label="Filters">
  <div class="sidebar-section-title">
    Vehicle Type
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
  </div>
  <div class="sidebar-item active">All Vehicles</div>
  <div class="sidebar-item">Cars & Trucks</div>
  <div class="sidebar-item">Motorcycles</div>
  <div class="sidebar-item">Equipment</div>
</aside>
```

| Property | Value |
|----------|-------|
| Width | 280px expanded / 56px collapsed / 320px overlay (mobile) |
| Background | `var(--bg-primary)` |
| Border-right | `1px solid var(--border-subtle)` |
| Padding | `var(--space-4)` |
| Section title | 13px/600, `var(--interactive-primary)` |
| Item | 14px, `var(--text-secondary)` |
| Item hover bg | `var(--blue-100)` |
| Item active | `var(--blue-200)` bg, `var(--interactive-hover)` text, 600 weight |
| Transition | `width 200ms ease-out` |

---

### Breadcrumbs

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span class="sep" aria-hidden="true">&gt;</span>
  <a href="/search">Search</a>
  <span class="sep" aria-hidden="true">&gt;</span>
  <span class="current" aria-current="page">2019 Toyota Camry SE</span>
</nav>
```

| Property | Value |
|----------|-------|
| Font | 12px / 500 |
| Link color | `var(--text-tertiary)` / hover: `var(--interactive-primary)` |
| Separator | `var(--neutral-300)` |
| Current | `var(--text-primary)`, 600 weight |
| Gap | `var(--space-1)` |
| Overflow (mobile) | horizontal scroll, no wrap |

---

### Image Container

```html
<!-- Vehicle image with badge overlay -->
<div class="card-media" style="aspect-ratio: 4/3; border-radius: var(--radius-lg);
     overflow: hidden; position: relative;">
  <img src="vehicle.jpg" alt="2019 Toyota Camry SE, front-left view"
       loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
  <span class="card-badge badge-live" style="position: absolute; top: var(--space-3); left: var(--space-3);">
    Live
  </span>
</div>

<!-- Placeholder / loading state -->
<div class="skeleton" style="aspect-ratio: 4/3; border-radius: var(--radius-lg);"></div>
```

**Aspect ratios:** `16:9` (video), `4:3` (vehicles/equipment), `1:1` (avatars), `3:2` (landscape).

| Property | Value |
|----------|-------|
| Radius | `var(--radius-lg)` (8px) standard, `50%` avatar |
| Object-fit | `cover` (vehicles), `contain` (documents) |
| Placeholder bg | `var(--neutral-100)` |
| Lazy loading | `loading="lazy"` on all below-fold images |
| Gallery dots | 8px, white active, white 50% inactive |

---

### Avatar

```html
<!-- Image avatar -->
<img class="avatar avatar-md" src="photo.jpg" alt="Jane Doe's profile photo">

<!-- Fallback (initials) -->
<div class="avatar avatar-md avatar-blue" aria-label="Jane Doe">JD</div>
<div class="avatar avatar-lg avatar-dark" aria-label="Robert Smith">RS</div>
<div class="avatar avatar-sm avatar-accent" aria-label="Alex Chen">AC</div>
```

**Sizes:**

| Class | Diameter | Font |
|-------|----------|------|
| `.avatar-xs` | 24px | 10px/700 |
| `.avatar-sm` | 32px | 12px/700 |
| `.avatar-md` | 40px | 14px/700 |
| `.avatar-lg` | 56px | 18px/700 |
| `.avatar-xl` | 80px | 24px/700 |

**Fallback colors:** `.avatar-blue` (`var(--blue-600)`), `.avatar-dark` (`var(--blue-800)`), `.avatar-accent` (`var(--interactive-accent)`)

All avatars: `border-radius: 50%`, white text, centered. Badge (status dot): bottom-right, 2px white border.

---

### Video Player

```html
<div style="aspect-ratio: 16/9; border-radius: var(--radius-xl); overflow: hidden;
            position: relative; background: #000;">
  <video poster="poster.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    <source src="walkaround.mp4" type="video/mp4">
    <track kind="captions" src="captions.vtt" srclang="en" label="English">
  </video>
  <!-- Play button overlay -->
  <button aria-label="Play video" style="position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%); width: 64px; height: 64px;
          border-radius: 50%; background: rgba(255,255,255,0.9); border: none;
          cursor: pointer;">
    <svg width="24" height="24" viewBox="0 0 24 24"
         fill="var(--interactive-primary)" stroke="none">
      <polygon points="6,3 20,12 6,21"/>
    </svg>
  </button>
</div>
```

| Property | Value |
|----------|-------|
| Aspect ratio | 16:9 |
| Radius | `var(--radius-xl)` (12px) |
| Play button | 64px circle, white 90% bg, blue triangle |
| Controls bar | 48px, gradient to `rgba(0,0,0,0.6)` |
| Captions | required for informational content |
| No autoplay with audio |

---

### Empty State

```html
<div class="empty-state">
  <div class="empty-icon">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
         stroke="var(--neutral-300)" stroke-width="1.5">
      <!-- heart, magnifier, gavel, etc. -->
    </svg>
  </div>
  <h3 class="empty-title">Your watchlist is empty</h3>
  <p class="empty-desc">Save vehicles you're interested in to keep track of upcoming auctions.</p>
  <button class="btn btn-primary btn-md">Browse Vehicles</button>
</div>
```

| Property | Value |
|----------|-------|
| Container | centered, max-width 400px, `var(--space-12)` vertical padding |
| Icon | 64px, `opacity: 0.2` |
| Title | 20px / 700, `var(--text-primary)` |
| Desc | 15px, `var(--text-tertiary)`, centered |
| Action | `margin-top: var(--space-6)` |

---

### Loading Dots

```html
<div class="dot-pulse" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>
```

Three 8px dots, `var(--interactive-primary)`, pulse animation 1.4s infinite with 0.16s stagger.

---

## Dark Mode

Complete `[data-theme="dark"]` override block:

```css
[data-theme="dark"] {
  /* Primitive Blue */
  --blue-50: #0D1117;  --blue-100: #141E33;  --blue-200: #1E2A45;
  --blue-600: #5B8EF0; --blue-800: #7AAAF5;  --blue-900: #B8D4FA;

  /* Primitive Orange */
  --orange-50: #1A1008;  --orange-100: #221710;  --orange-200: #2E1F14;
  --orange-600: #E8873F; --orange-800: #F0A566;  --orange-900: #F8C99A;

  /* Primitive Neutral */
  --neutral-50: #1A1D23;  --neutral-100: #22262E;  --neutral-200: #2E3340;
  --neutral-300: #3A4150;  --neutral-500: #6E7A86;
  --neutral-700: #A8B2BC;  --neutral-900: #F0F1F3;

  /* Semantic Surfaces */
  --bg-primary: #1A1D23;  --bg-secondary: #22262E;  --bg-tertiary: #2E3340;

  /* Semantic Text */
  --text-primary: #F0F1F3;  --text-secondary: #A8B2BC;
  --text-tertiary: #6E7A86;  --text-disabled: #454D58;

  /* Semantic Borders */
  --border-default: #3A4150;  --border-subtle: #2E3340;  --border-focus: #5B8EF0;

  /* Semantic Interactive */
  --interactive-primary: #5B8EF0;  --interactive-hover: #7AAAF5;
  --interactive-active: #4A7DE0;
  --interactive-accent: #E8873F;  --interactive-accent-hover: #F0A566;
  --interactive-accent-surface: #2E1F14;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.2);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.3);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.4);
  --shadow-focus: 0 0 0 3px rgba(91,142,240,0.4);

  /* Feedback */
  --success-bg: #1A2E14;  --success-text: #6ABF4D;
  --success-border: #4CA830;  --success-icon: #6ABF4D;
  --warning-bg: #2E2510;  --warning-text: #E8B830;
  --warning-border: #E8B830;  --warning-icon: #E8B830;
  --error-bg: #2E1219;  --error-text: #F06080;
  --error-border: #F06080;  --error-icon: #F06080;
  --info-bg: #141E33;  --info-text: #7AAAF5;
  --info-border: #5B8EF0;  --info-icon: #5B8EF0;

  /* Header stays dark */
  --header-bg: #0F2757;
}
```

---

## Accessibility Checklist

- **Focus:** All interactive elements keyboard-focusable with visible `var(--shadow-focus)` ring
- **Buttons:** Use `<button>` element or `role="button"`. Icon-only buttons require `aria-label`
- **Modals:** `role="dialog"`, `aria-modal="true"`, focus trap, Escape to close, return focus on close
- **Shelves:** Same as modals. `role="dialog"`, `aria-modal="true"`
- **Alerts:** Error/warning: `role="alert"`. Info/success: `role="status"`
- **Toasts:** `role="status"`, `aria-live="polite"`. Error toasts: `role="alert"`, `aria-live="assertive"`
- **Forms:** `<label for="id">` required. Errors via `aria-describedby`. `aria-invalid="true"` on error. `aria-required="true"` for mandatory fields
- **Images:** Descriptive `alt` text required. Decorative: `alt=""`
- **Tables:** `<th scope="col">`, `aria-sort` on sortable headers, `<caption>` for description
- **Touch targets:** 44px minimum desktop, 48px preferred mobile. 8px min spacing between targets
- **Color:** Never sole indicator of state. Always pair with icon + label
- **Contrast:** 4.5:1 text, 3:1 large text and UI components (WCAG AA)
- **Motion:** Respect `prefers-reduced-motion: reduce` -- reduce or remove all animation
- **Zoom:** Components must work at 200% zoom without clipping

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Mobile Platform Overrides

| Component | Desktop | Mobile |
|-----------|---------|--------|
| Button heights | XS:28 SM:32 MD:40 LG:48 XL:56 | (no XS) SM:36 MD:44 LG:50 XL:56 |
| Input height | 44px | 48px, font-size: 16px (prevents iOS zoom) |
| Input padding-x | 12px | 16px |
| Input radius | 8px | 10px |
| Card radius | 12px | 16px |
| Card grid gap | 24px | 12px |
| Toggle track | 48x28px | 51x31px (iOS standard) |
| Toggle thumb | 22px | 27px |
| Modal | centered overlay, 16px radius | bottom sheet, 20px 20px 0 0 radius |
| Tab bar | horizontal tabs in header | fixed bottom bar, 56px + safe-area |
| Sidebar | persistent left panel, 280px | overlay drawer, 320px |
| Body font size | 16px | 17px (iOS HIG) |
| Body line height | 24px | 22px |
| Page margins | 80px | 16px |
| Section gaps | 48-64px | 24px |
| Touch targets | 40px default | 44px min, 48px preferred |
| Slider thumb | 24px | 28px |
| Checkbox | 20px | 22px |
| List item min-height | 48px | 44px + swipe actions |

Set `data-platform="mobile"` on `<html>` to activate all CSS variable overrides automatically.

---

## Breakpoints

```css
@media (min-width: 375px)  { /* mobile */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop-sm */ }
@media (min-width: 1280px) { /* desktop */ }
@media (min-width: 1440px) { /* desktop-lg — canonical */ }
@media (min-width: 1920px) { /* desktop-xl */ }
```

| Breakpoint | Columns | Gutter | Margin |
|-----------|---------|--------|--------|
| Mobile (375px) | 4 | 16px | 16px |
| Tablet (768px) | 8 | 16px | 32px |
| Desktop (1280px+) | 12 | 24px | 80px |
| Max content width | 1280px |

---

## Z-Index Scale

| Layer | z-index | Use |
|-------|---------|-----|
| Base content | 0 | Default stacking |
| Sticky elements | 90-100 | Sticky nav, headers |
| Dropdown menus | 1100 | Select menus, popovers |
| Sidebar overlay | 1400 | Shelf/drawer backdrop + panel |
| Modal | 1500 | Modal backdrop + panel |
| Toast | 2000 | Toast notifications |

---

## Key Rules Summary

1. **One Primary button per view.** Demote alternatives to Secondary/Tertiary.
2. **No pure red.** Use `--error-*` (rose/magenta) for all error/destructive states.
3. **No emoji.** Use Iconic SVG icons only.
4. **Orange is secondary.** Never use CTA Orange as a primary action competing with Blue.
5. **Monospace for data.** Use `var(--font-mono)` for VIN, lot numbers, prices in tables.
6. **16px minimum** for body text. 11px absolute floor for non-essential metadata.
7. **Labels are not placeholders.** Every input needs a visible `<label>`.
8. **Color + icon + label.** Never use color alone to communicate state.
9. **44px touch targets** minimum on all interactive elements.
10. **`prefers-reduced-motion`** must be respected on every animation.
