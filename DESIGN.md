# Vallejo — Design (appearance) spec

The canonical APPEARANCE-layer reference for Vallejo, the Copart design system. This file is the source of truth for tokens and foundations (color, type, layout, elevation, shape, motion) and a one-line-per-component index. It serves humans reading top-to-bottom and agents grepping for a value.

- Version + date live ONLY in [`version.json`](version.json) (`1.2.0` / `2026-06-20`) — reference it, never hardcode the number here.
- This summarizes + links; it does NOT restate full component specs. For per-component variants, sizes, and states see **[llms-components.txt](llms-components.txt)**. Tokens: [llms-tokens.txt](llms-tokens.txt). Accessibility: [llms-a11y.txt](llms-a11y.txt). Voice: [llms-writing.txt](llms-writing.txt).

---

## STEP 0 — Read the Vault first (the *why*)

**Before any design decision, read the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault) (`getboyce/Copart-Design-Vault`).** The Vault is **Layer 1 — the *why*** (philosophy, principles, anti-patterns, language rationale). Vallejo is **Layer 2 — the *how*** (the tokens, components, and execution rules below). **When the two conflict, the Vault wins.**

Essential digest (so this repo stands alone if the Vault is unreachable):

**The triad** — every decision serves three principles:
- **Precision** — *the warmth of competence.* Obsessive alignment, spacing, and typographic discipline. Every pixel intentional; every value from a token. Numbers are first-class. When members stake five figures on vehicles they may never have touched, precision IS a trust signal.
- **Institutional Confidence** — *the quiet authority of a platform that has moved millions of vehicles.* Restraint over decoration. One primary action per view. No hedging, no exclamation marks, no "Oops." Confidence is also what we choose NOT to show.
- **Vitality** — *auctions are alive.* Bidding is competitive, time-bound, consequential. Motion confirms action; status is always visible; urgency is real, not manufactured. The pulse serves information, never decoration.

**The design filter** — apply to every screen, component, and word:
> **Does this build trust? Does this respect expertise? Does this read at multiple depths?**
> If the answer to any is *no*, the design is wrong.

**Critical anti-patterns to refuse:**
- **The blue flood** — if everything is blue, nothing is primary. Blue earns authority through restraint (one Primary action per view).
- **Bootstrap-default aesthetics** — generic framework looks signal "we cut corners."
- **Tables as default layout** — tables are for tabular data, not page structure.
- **AI-generated defaults** — purple accents, emoji, everything in a bordered box, generic system type. These read as machine-made; refuse them.
- **The "it just needs to function" mentality** — function without craft erodes trust. Precision is not optional polish; it is the product.

---

## 1. Tokens (normative)

<!-- TOKENS:START -->
> **GENERATED in Phase 2** from `/source` → `dist/{tokens.css, tokens.dtcg.json, tokens.js}`. Hand-synced exactly to `source` / Figma for now. Consumers never run a build; `dist/` is committed. Components bind the **semantic alias** (or its CSS custom property) — never a primitive, never a raw hex. Canonical primitive ramp name is **`gray`** (`neutral-*` is a DEPRECATED alias only). Layer names are `layer-*` (`z-*` deprecated).

```css
:root {
  /* ── PRIMITIVES ──────────────────────────────────────────────── */

  /* gray (0 = white … 950). gray-900 = #1D222A = ink. */
  --gray-0:   #FFFFFF;  --gray-50:  #F6F6F5;  --gray-100: #EEEDEC;
  --gray-150: #ECEEF2;  /* COOL fill backing surface/subtle (not warm) */
  --gray-200: #D8DBE2;  --gray-300: #BDC1CA;  --gray-400: #9C9FA6;
  --gray-500: #83868D;  --gray-600: #62666F;  --gray-700: #484C54;
  --gray-800: #30333A;  --gray-900: #1D222A;  --gray-950: #090B0E;

  /* blue (brand) — hue spine fixed; blue-600 is brand primary */
  --blue-50:  #EFF4FF;  --blue-100: #DBE7FD;  --blue-200: #B1CCFE;
  --blue-300: #82ADFC;  --blue-400: #5A8DF1;  --blue-500: #3970DE;
  --blue-600: #2059CC;  --blue-700: #1046B4;  --blue-800: #043599;
  --blue-900: #032773;

  /* success (green) */
  --success-50:  #E1F9E6; --success-100: #C8F0D1; --success-200: #9FD8AE;
  --success-300: #72BC87; --success-400: #47A164; --success-500: #098644;
  --success-600: #146E3A; --success-700: #0B5B2E; --success-800: #074823;
  --success-900: #063519;

  /* warning (amber) */
  --warning-50:  #FEF2E1; --warning-100: #FFE3AE; --warning-200: #FDC146;
  --warning-300: #E1A117; --warning-400: #BC8521; --warning-500: #9D6B11;
  --warning-600: #82580B; --warning-700: #6B4806; --warning-800: #563804;
  --warning-900: #402903;

  /* error / destructive (slight red — NOT a raw red) */
  --error-50:  #FFF0EF;  --error-100: #FDDFDD;  --error-200: #FCBBB5;
  --error-300: #FD8C86;  --error-400: #EE625F;  --error-500: #D8383D;
  --error-600: #C20022;  --error-700: #9D121F;  --error-800: #7F0D18;
  --error-900: #63010D;

  /* gold — Premier rings ONLY. There is NO orange ramp. */
  --gold: #FA9252;

  /* ── SEMANTIC ALIASES (bind these) ──────────────────────────── */

  /* text */
  --text-primary:        var(--gray-900);  /* #1D222A ink, 15.98:1 on white */
  --text-secondary:      var(--gray-700);
  --text-tertiary:       var(--gray-600);
  --text-display-muted:  var(--gray-500);  /* GOVERNED: display only, ≥24px */
  --text-disabled:       var(--gray-400);
  --text-inverse:        var(--gray-0);
  --text-link:           var(--blue-600);  /* solid + underlined inline */
  --text-link-hover:     var(--blue-700);
  --text-on-header:      var(--gray-0);    /* white on header-800 = 12.65:1 */
  --text-on-header-muted: var(--gray-400); /* GOVERNED: dark bars only */

  /* surface (warm paper recedes; subtle is the COOL fill) */
  --surface-raised:      var(--gray-0);    /* #FFFFFF */
  --surface-canvas:      var(--gray-50);
  --surface-sunken:      var(--gray-100);
  --surface-deep:        var(--gray-950);
  --surface-subtle:      var(--gray-150);  /* #ECEEF2 cool: subtle bg + hover on white/overlay */
  --surface-header-bg:   var(--gray-800);  /* dark chrome */
  --surface-header-deep: var(--gray-900);  /* = footer */
  --surface-footer:      var(--gray-900);
  --surface-header-field: var(--gray-700); /* = shelf */
  --surface-header-shelf: var(--gray-700);

  /* border (SOLID, never alpha) */
  --border-hairline:     var(--gray-200);  /* SOLID separation */
  --border-default:      var(--gray-300);  /* labeled controls incl. secondary buttons */
  --border-strong:       var(--gray-500);
  --border-control:      var(--gray-500);  /* INPUTS ONLY (empty input boundary, 3:1) */
  --border-focus:        var(--blue-600);
  --border-focus-on-dark: var(--blue-300); /* blue-600 fails on a dark bar */

  /* interactive */
  --interactive-primary:           var(--blue-600);
  --interactive-primary-grad-end:  #1D50B8;  /* raised Primary gradient end */
  --interactive-primary-hover:     var(--blue-700);
  --interactive-primary-active:    var(--blue-800);
  --interactive-selected-fill:     var(--blue-100);
  --interactive-selected-wash:     var(--blue-50);
  --interactive-destructive:          var(--error-600);
  --interactive-destructive-grad-end: #AF001F;
  --interactive-destructive-hover:    var(--error-700);
  --interactive-destructive-active:   var(--error-800);

  /* status family aliases — subtle→50 · light→100 · accent→600 · dark→800.
     Tonal chip = 100 fill + 800 text. Info = blue (info/* RETIRED). */
  --success-subtle: var(--success-50); --success-light: var(--success-100);
  --success-accent: var(--success-600); --success-dark: var(--success-800);
  --warning-subtle: var(--warning-50); --warning-light: var(--warning-100);
  --warning-accent: var(--warning-600); --warning-dark: var(--warning-800);
  --error-subtle:   var(--error-50);   --error-light:   var(--error-100);
  --error-accent:   var(--error-600);  --error-dark:    var(--error-800);

  /* ── SPACE (4px baseline; 8px rhythm) ───────────────────────── */
  --space-0: 0px;   --space-0-5: 2px; --space-1: 4px;  --space-1-5: 6px;
  --space-2: 8px;   --space-3: 12px;  --space-4: 16px; --space-5: 20px;
  --space-6: 24px;  --space-8: 32px;  --space-10: 40px; --space-12: 48px;
  --space-16: 64px; --space-20: 80px; --space-24: 96px; --space-32: 128px;

  /* ── RADIUS (family = interaction class) ────────────────────── */
  --radius-sm:  4px;     /* micro */
  --radius-md:  6px;     /* small controls + btn-sm; tooltips, square badges, tags */
  --radius-lg:  8px;     /* CONTROL: buttons md+, inputs, selects, search */
  --radius-xl:  12px;    /* CONTAINER: cards, menus, toasts */
  --radius-2xl: 16px;    /* OVERLAY: modals, drawers */
  --radius-pill: 9999px; /* capsules: badges, chips, tags */
  --radius-full: 50%;    /* circles / avatars */

  /* ── MOTION ─────────────────────────────────────────────────── */
  --duration-instant: 50ms;  --duration-fast: 100ms;  --duration-normal: 150ms;
  --duration-moderate: 200ms; --duration-slow: 300ms; --duration-deliberate: 400ms;
  --duration-expressive: 700ms; --duration-pulse: 2400ms;
  --ease-enter:  cubic-bezier(0.32, 0.72, 0, 1);   /* decelerate */
  --ease-exit:   cubic-bezier(0.4, 0, 1, 1);       /* accelerate */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* interactive feedback only */
  --ease-linear: linear;                           /* progress only */

  /* ── LAYER (z-index ladder; no header step — header dropped) ── */
  --layer-dropdown: 1000; --layer-sticky: 1100; --layer-drawer: 1300;
  --layer-scrim: 1400;    --layer-modal: 1500;   --layer-toast: 1600;
  --layer-tooltip: 1700;
}
```

**Dark mode** is **light-only today** — dark mode is planned but not shipped yet (Figma's dark values are placeholders); a `data-theme="dark"` layer with curated dark ramps + an ADA dark guardrail will land in a dedicated pass — see §2 Colors. Type tokens (Inter / JetBrains Mono scale) are in §3; bind the named style, never raw font props.

<!-- TOKENS:END -->

---

## 2. Foundations

### 2.1 Overview — how Vallejo executes the Vault

Vallejo is the appearance layer that turns the Vault's three principles into tokens and components.

- **Precision** → a 4px baseline grid and an 8px spacing scale with no arbitrary values; every line-height is a multiple of 4; numbers are first-class (JetBrains Mono for values being *compared*, Inter for values being *read*); verb-first labels; one canonical term per concept.
- **Institutional Confidence** → restraint in the palette (blue earns authority by being rare — one Primary action per view), no decorative color, calm solution-focused copy, no exclamation marks.
- **Vitality** → live indicators (pulsing dot + "Live now"), bid-price pulses, counter ticks; motion registers tuned to context; `prefers-reduced-motion` always honored.

Run every choice through the design filter (**trust · expertise · multiple depths**). Baseline, non-negotiable: WCAG 2.1 AA — color is never the sole state cue, minimum touch target 44px, visible focus on every interactive element, content reflows at 200% zoom. Full rules: [llms-a11y.txt](llms-a11y.txt).

### 2.2 Colors

**Five 10-step ramps**, generated in OKLCH and contrast-solved on white: **gray, blue, success, warning, error**. `gray` is canonical (`gray-0` = white … `gray-950`; `neutral-*` is a deprecated alias only). Components bind a **semantic alias**, never a primitive, never a raw hex.

**Contrast spine (on white):** 50→1.075 · 100→1.16 · 200→1.37 · 300→1.78 · 400→2.62 · 500→3.64 · 600→5.75 · 700→8.6 · 800→12.6 · 900→18.1. Heuristics: any `600` is button-grade; any `800`-on-`100` is a legible tonal badge.

**Semantic roles** (full map in the token block above):
- **Text** — primary `gray-900` (ink, 15.98:1) · secondary `gray-700` · tertiary `gray-600` · display-muted `gray-500` (GOVERNED: ≥24px only) · disabled `gray-400` · inverse white · link `blue-600` (solid + underlined inline).
- **Surface** — warm paper surfaces recede (raised white · canvas `gray-50` · sunken `gray-100`); `surface-subtle` is the **cool** fill `#ECEEF2` for subtle backgrounds and hover on white/overlay surfaces (sits lighter than the 200 line). Dark chrome (header/footer/shelf) uses `gray-800/900/700`.
- **Border** — hairline `gray-200`, default `gray-300` (labeled controls incl. secondary buttons, W3C 1.4.11), strong/control `gray-500` (**control = empty inputs only**, where the boundary IS the identifier and needs 3:1), focus `blue-600` (`blue-300` on dark chrome).
- **Interactive** — primary `blue-600` → hover `blue-700` → active `blue-800`; selected fill `blue-100`, wash `blue-50`; destructive `error-600` → 700 → 800.
- **Status family aliases** — each of success/warning/error exposes `subtle→50 · light→100 · accent→600 · dark→800`. Tonal chip = 100 fill + 800 text (~8.5:1). **Info = blue** (the `info/*` family is RETIRED — informational is blue's job).

**Color governance (binding):**
- **NEVER derive a color with opacity** (no `rgba(ink, .07)`). Separation comes from named SOLID tokens; hairlines are `gray-200` solid. Shadows and scrims are the ONLY sanctioned alpha exemption — they model light, not color.
- **State is never color-alone (CVD-safe):** every chip carries a word; LIVE keeps the ● dot. `success-600` and `error-600` are near-isoluminant under deuteranopia.
- **No orange ramp** — it was removed. **`gold #FA9252` is for Premier rings ONLY.** Express urgency with the **warning / error** ramps, never a gold or orange button.
- **Error / destructive uses the error ramp**, never a raw red.
- If a needed color is missing, raise a palette conversation — don't invent one.

**Dark mode** is **light-only today** — dark mode is planned but not shipped yet (Figma's dark values are placeholders; the build matches Figma's "light-only; do not ship dark" stance). A `data-theme="dark"` layer with curated dark ramps + an ADA dark guardrail will land in a dedicated pass — bind semantic aliases (not primitives) so that future swap re-themes a prototype, but don't rely on dark yet.

### 2.3 Typography

**Inter** for all UI and reading; **JetBrains Mono 500** for data you compare (VINs, lot numbers, bids, timestamps, timers, stacked ladders). Weights are **400 / 500 / 600 / 700 only**. Every line-height is a multiple of 4 (baseline grid). Bind the named style, never raw font props. Off-grid sizes (10/17/26/30) are banned.

| Style | Family | Wt | Size / LH (px) | Notes |
|---|---|---|---|---|
| Display Large | Inter | 700 | 64 / 72 | hero; ≤1 per page |
| Display Small | Inter | 700 | 48 / 56 | secondary marketing / KPI hero |
| Headline | Inter | 700 | 36 / 44 | page title (H1) |
| Title 1 | Inter | 600 | 28 / 36 | major section (H2) |
| Title 2 | Inter | 600 | 24 / 32 | card / subsection (H3) |
| Title 3 | Inter | 600 | 20 / 28 | tertiary heading (H4) |
| Body Large | Inter | 400 | 18 / 28 | lead paragraphs |
| Body | Inter | 400 | 16 / 24 | default body |
| Body Emphasis | Inter | 500 | 16 / 24 | inline emphasis (deprecated dup of Callout) |
| List Title | Inter | 500 | 15 / 20 | NEW — dense list/card titles only, never body |
| Subheadline | Inter | 600 | 14 / 20 | form/table/section labels |
| Body Small | Inter | 400 | 14 / 20 | NEW — controls, table cells |
| Footnote | Inter | 400 | 13 / 16 | helper text, timestamps |
| Caption 1 | Inter | 500 | 12 / 16 | badge text, axis labels |
| Overline | Inter | 600 | 11 / 16 | UPPERCASE structural label, +8% tracking |
| Mono / Large | JetBrains Mono | 500 | 22 / 28 | ladders, timers |
| Mono / Medium | JetBrains Mono | 500 | 16 / 20 | compared values |
| Mono / Small | JetBrains Mono | 500 | 13 / 16 | table numerics, VINs |

**Mono usage law — read vs. compare:** numbers being **compared** (stacked in lists, cards, ladders; VINs, lot numbers) → **JetBrains Mono**. Numbers being **read** as a singular dominant impact (hero bid, win amount, buy-it-now) → **Inter** (with `font-feature-settings: "tnum"` for column alignment when a font switch would jar). **Timer is the exception** — always Mono so digits hold position. **Mono never bleeds into labels or prose.** Suppress JetBrains Mono's dotted zero: `font-feature-settings: "zero" 0;`. Responsive ramp: 64→48 · 48→40 · 36→32 · 28→24 below 768px.

Fallbacks: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` and `"JetBrains Mono", "SF Mono", "Fira Code", "Cascadia Code", monospace`.

### 2.4 Layout and space

16-step spacing scale on a 4px baseline / 8px rhythm: **0 · 2 · 4 · 6 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 px**. The 2px (`space-0-5`) and 6px (`space-1-5`) steps use dash-for-dot names and are fenced **component-internal only**. Zones map to intent:

| Zone | Range | Use |
|---|---|---|
| micro | 2–12 | within a component |
| element | 16–24 | between elements |
| layout | 32–64 | between sections |
| page | 80–128 | page-level rhythm |

Never an arbitrary value — every measurement is a token.

**Responsive grid & breakpoints.** A 12-column grid collapses to 8 then 4 across three canonical layouts; content is capped at a 1280px max-width (margins grow beyond the canonical 1440px width). All measurements stay on the space scale.

| Layout | Canvas | Columns | Gutter | Margin (each side) | Content max | Behavior |
|---|---|---|---|---|---|---|
| Desktop | 1440 | 12 | 24 | 80 | 1280 | columns scale within max-width; margins grow past 1440 |
| Tablet | 768 | 8 (12 for complex layouts) | 16 | 32 | 704 | sidebar collapses; nav moves to a bottom tab bar |
| Mobile | 375 | 4 | 16 | 16 | 343 | single-column; stacked cards; full-width inputs |

Seven breakpoints anchor the grid (mobile-first `min-width`); `desktop-lg` (1440) is the canonical design width:

| Breakpoint | Min-width | Columns | Behavior |
|---|---|---|---|
| `mobile-sm` | 320 | 4 | compact single-column, reduced padding |
| `mobile` | 375 | 4 | standard mobile layout |
| `tablet` | 768 | 8 | two-column capable, collapsible sidebar |
| `desktop-sm` | 1024 | 12 | full sidebar, condensed spacing |
| `desktop` | 1280 | 12 | standard desktop experience |
| `desktop-lg` | 1440 | 12 | canonical design width |
| `desktop-xl` | 1920 | 12 | content max-widths enforced, expanded margins |

**Safe areas.** On notched / Dynamic Island devices, respect `env(safe-area-inset-*)` on all four sides: bottom navigation clears `env(safe-area-inset-bottom)` + 8px, fullscreen modals honor all four insets, and mobile auction-timer overlays avoid the Dynamic Island region. Set `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`. Reference table: [llms-tokens.txt](llms-tokens.txt).

### 2.5 Elevation

Shadow color is **ink `rgba(19,22,27, α)`, never pure black**. **Resting surfaces cast nothing** — they read by fill + hairline. Shadows and scrims are the only sanctioned alpha exemption (they model light). The legacy `Shadow/XS–XL` and focus-glow shadows are DEPRECATED — focus is a solid ring (§2.7), not a glow.

**Named effect styles:**
- **Elevation/Hover · Elevation/Overlay · Elevation/Modal** — the general ladder (hover lift → floating overlay → modal). As tokens: `--elevation-overlay` (floating surfaces: popover, menu, tooltip, toast, dropdowns) and `--elevation-modal` (modal + shelf).
- **Elevation/Key** — the resting key edge for raised surfaces: inner `#13161B1A` (0/-1) + drop `#13161B1A` (0/1 r3); Hover adds a deeper drop; Pressed is a tight inner shadow.
- **Raised-button stacks** (Primary + Destructive ONLY — Secondary/Quiet stay flat): a vertical gradient (`interactive-primary` → `interactive-primary-grad-end` / `interactive-destructive` → `interactive-destructive-grad-end`) plus layered shadows — **two inner bevels** (bright top + dark bottom) over **contact + ambient drop shadows**. Rest → Hover lifts the ambient; Pressed collapses to a single inner shadow. Exact effect-style layers and shadow tokens: [llms-components.txt](llms-components.txt) (Button) / [llms-tokens.txt](llms-tokens.txt).

**Scrim** = `surface/scrim` (ink at 45%) behind modals/drawers.

### 2.6 Shape (radius)

Radius family **= interaction class** (not arbitrary). Concentric law: a nested inner radius = outer − gap, floored at 4. One scale, all platforms.

| Token | px | Class — used by |
|---|---|---|
| `radius-sm` | 4 | micro |
| `radius-md` | 6 | small controls + `btn-sm`; tooltips, square badges, tags |
| `radius-lg` | 8 | **CONTROL** — buttons md+, inputs, selects, search |
| `radius-xl` | 12 | **CONTAINER** — cards, menus, toasts |
| `radius-2xl` | 16 | **OVERLAY** — modals, drawers |
| `radius-pill` | 9999 | capsules — badges, chips, tags |
| `radius-full` | 50% | circles / avatars |

Button radii: SM = 6, MD/LG = 8, XL = 12. (The phantom 10px radius is retired.)

### 2.7 Motion

Durations: instant 50 · fast 100 · normal 150 · moderate 200 · slow 300 · deliberate 400 · expressive 700 · pulse 2400 ms. Easings: **enter** `cubic-bezier(0.32,0.72,0,1)` (decelerate) · **exit** `cubic-bezier(0.4,0,1,1)` (accelerate) · **spring** (interactive feedback only) · **linear** (progress only).

**Registers:** transactional fast→moderate · live fast→normal · celebration expressive (never blocking) · ambient pulse. **`prefers-reduced-motion` collapses everything to instant.** Motion confirms action — it is never decorative.

**Focus indicator** (a real state, not a hover afterthought): a **solid 2px ring** — `blue-600` on light surfaces, `blue-300` on dark chrome — concentric at outer radius +3. Never a shadow glow.

---

## 3. Components

The catalog is the **~50 published Figma components only**. There is **NO Header, Sidebar, Link, Chart, Image, Video, or Date Picker component** (dropped) — do not reference them as components. Class API is **unprefixed**: base + modifiers (`.btn` / `.btn-primary` / `.btn-md`, `.card`, `.badge-success`, `.chip`, `.modal`). **States are native CSS only** (`:hover`, `:focus-visible`, `[disabled]`, `aria-*`) — never state classes. Every component consumes `var(--token)`; never hardcodes hex or size.

Each row below is the **ONE rule that matters**. Full variants, sizes, states, and markup: **[llms-components.txt](llms-components.txt)**.

| Component | The one rule |
|---|---|
| **Button** | 4 types only: Primary, Secondary, Quiet, Destructive. One Primary (blue) per view. No Tertiary, no Success button. |
| **Watchlist** | Toggle — pressed state is `aria-pressed`; it is "Watchlist," never "favorites." |
| **Icon button** | Square; must carry an `aria-label` (no visible text) and meet the 44px hit area. |
| **Text Field** | Empty input boundary uses `border-control` (`gray-500`, 3:1); error = `error-accent` border + message below. |
| **Text Area** | Same field rules as Text Field; resizes vertically only. |
| **Search** | Control-radius (`lg`); leading search icon; placeholder shows format, not the label. |
| **Select** | Closed control = field; opens a `Menu` of `Select Option`s (no native `<select>` look). |
| **Select Menu / Option** | Selected option = `selected-fill` (`blue-100`); checkmark, not color alone. |
| **Checkbox / Radio** | Focus ring is solid 2px; never rely on color alone for checked state. |
| **Toggle** | Has SM + default sizes; label optional; track color is interactive, not decorative. |
| **Slider** | Track + thumb both meet 3:1 non-text contrast; value shown in Mono. |
| **Badge / Count** | Numerals only ("3", "99+"); pill or circle per the badge-shape rule. |
| **Badge / Status** | Past-participle/adjective word ("Sold", "Active") — color is never the only cue. |
| **Chip / Chip-Filter** | Tonal = `light` (100) fill + `dark` (800) text; carries a word; filter chips are removable. |
| **Tag** | Category noun ("Clean title"); `radius-md` square or pill, one shape per label type. |
| **Alert** | Inline; lead with what happened then what to do; Subtle vs Solid per emphasis. |
| **Banner** | Page-width; Subtle by default, Solid only for high-emphasis system messages. |
| **Toast** | One past-tense sentence; auto-dismiss ~5s; include Undo where reversible; `layer-toast` (1600). |
| **Tooltip** | Always wins the stack (`layer-tooltip` 1700); `radius-md`; 1–2 short sentences. |
| **Popover** | Anchored overlay on `layer-dropdown`; container radius (`xl`); dismiss on outside click. |
| **Menu / Menu Item** | `layer-dropdown` (1000); container radius `xl`; keyboard-navigable, one action per item. |
| **Modal** | MD width = 520; overlay radius `2xl`; scrim at ink 45%; one Primary action; `layer-modal` (1500). |
| **Shelf** | Edge drawer on `layer-drawer` (1300); overlay radius; scrim behind. |
| **Progress bar** | Determinate uses `linear` easing; pair with a text percentage. |
| **Spinner** | Indeterminate only; respects reduced-motion (no infinite spin when reduced). |
| **Skeleton** | Shape-matches the content it loads; ambient pulse, collapses to static when reduced. |
| **Step indicator / item** | Current step is not color-alone — number/checkmark + label. |
| **Lot Card** | Standalone (no variants); prices in Mono; one primary action; container radius `xl`. |
| **Stat Card** | "Read" hero number in Inter; label in Overline/Caption; period label subordinate. |
| **Table Row / Cell** | VIN/lot/bid/timestamps in Mono; null = em dash "—"; headers are sentence-case nouns. |
| **List Row** | Dense list title may use List Title (15/20); action affordance on the right. |
| **Table filter bar** | Standalone; filter state shown as removable filter chips. |
| **Bulk action bar** | Appears on selection; states the count + the actions; one Destructive max. |
| **Accordion** | Header is a button (`aria-expanded`); content radius matches its container. |
| **Empty state** | Heading names what's missing, body says how to fill it, CTA resolves it — never "No data." |
| **Avatar** | Circle (`radius-full`); initials fallback; never the sole identifier. |
| **Breadcrumbs / item** | Segments match the page title exactly; last segment is current (not a link). |
| **Pagination / cell** | Current page is `selected-fill` + `aria-current`; Mono page numbers. |
| **Segmented control / Segment** | Single-select; selected segment uses `selected-fill`, not color alone. |
| **Tab bar / Tabs** | One active tab per group (`aria-selected`); labels are short nouns, sentence case. |

### Do / Avoid

- **Do** bind the semantic alias (`var(--text-primary)`), use one Primary action per view, keep the LIVE ● dot + a word on every status, and honor `prefers-reduced-motion`.
- **Do** use Mono for compared numbers / VINs / lot # / timers, and Inter (`tnum`) for read numbers; keep every measurement on the token scale.
- **Avoid** the blue flood, raw hex or `rgba(ink, …)` separators, orange/gold buttons (gold = Premier rings only; urgency = warning/error), a focus *glow* (use the solid 2px ring), color-only state, emoji, Bootstrap/AI-default aesthetics, and referencing Header/Sidebar/Link/Chart/Image/Video/Date Picker as components.
- **Avoid** Title Case (use sentence case), prices/amounts inside button labels, "favorites/listing/offer/user/yard/Select/lounge" (use Watchlist/Lot/Bid/Member/Location/Wholesale/Copart Alliance Gateway), and "Oops/Something went wrong" errors — write "[what happened] — [how to fix]."

See also: [llms.txt](llms.txt) (entry), [AGENTS.md](AGENTS.md), [CLAUDE.md](CLAUDE.md), [starter.html](starter.html), [README.md](README.md).
