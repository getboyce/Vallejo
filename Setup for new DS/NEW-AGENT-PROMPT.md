# New Agent Prompt: Vallejo Design System for Copart.com

**Copy this entire prompt when starting a new agent/session to give full context on Vallejo and Copart.com.**

---

## Your Context

You are working in a repository that contains the **Vallejo Design System** — the **production design system for [Copart.com](https://www.copart.com)**. Vallejo powers the live Copart.com UI: vehicle search, auctions, bidding, member dashboards, payments, and all customer-facing interfaces.

**Core rule:** Use Vallejo **only** when building UI for Copart.com. Do **not** use vanilla Tailwind, Bootstrap, or other design systems for Copart.com UI. Use Vallejo so output matches production and stays consistent with the live site.

---

## What Is Vallejo?

- **Production**: [Copart.com](https://www.copart.com) — auto auctions, vehicle marketplace, member services
- **Use for**: Any UI that will appear on Copart.com (new features, prototypes, internal tools, marketing pages)
- **Brand**: Copart Blue `#2662D9`, Inter font, clean and accessible
- **Delivery**: 25+ components, 58 icons, full CSS in a single demo file, design tokens in JSON

---

## Essential Files (Read in This Order)

1. **`SYSTEM-INDEX.json`** — Complete system map, file locations, and quick reference. **Start here for navigation.**
2. **`LLM-ACCESS-GUIDE.md`** — Efficient navigation guide optimized for LLMs. Quick lookup tables and workflows.
3. **`AI-QUICK-REFERENCE.md`** — All component CSS classes and HTML patterns. Use this first for any implementation.
2. **`test-examples/all-components-demo.html`** — Working implementations of every component. Reference for exact markup and behavior.
3. **`LAYOUT-PATTERNS.md`** — Page-level patterns, including **Copart.com–specific** ones (vehicle listings, auction lots, member dashboard, bid confirmation, search filters).
4. **`CURSOR-PROMPT.md`** — Cursor-focused instructions, implementation strategy, accessibility, troubleshooting.
5. **`MAGIC_PATTERNS_PROMPT.md`** — Full Magic Patterns spec (tokens, components, layouts). Use when generating Copart.com prototypes.
6. **`components/catalog.json`** — Component index, Figma node IDs, and `componentClasses` mapping (component → CSS classes).
7. **`tokens/*.json`** — Design tokens (colors, typography, spacing, shadows, radius, icons). See **`tokens/README.md`** for token hierarchy (primitive → semantic → component).
8. **`docs/design-system-guide.md`** — Usage guidelines: **“When to use”** per component, **anti-patterns**, and general best practices. **Check this when choosing components** (e.g. Modal vs Shelf, primary vs secondary vs subtle buttons).

---

## Repository Layout

```
├── SYSTEM-INDEX.json          ← System map & file locations (start here)
├── LLM-ACCESS-GUIDE.md       ← LLM navigation guide
├── AI-QUICK-REFERENCE.md      ← Component classes & patterns (use first)
├── CURSOR-PROMPT.md           ← Cursor-specific guide
├── MAGIC_PATTERNS_PROMPT.md   ← Magic Patterns spec
├── LAYOUT-PATTERNS.md         ← Layouts + Copart.com patterns
├── NEW-AGENT-PROMPT.md        ← This file
├── README.md                  ← Overview & quick start
├── CHANGELOG.md               ← Version history & breaking changes
├── components/                ← Per-component .md docs + catalog.json
├── tokens/                    ← Design token JSON + README (token hierarchy)
├── test-examples/             ← all-components-demo.html, LoginForm.tsx (React example)
└── docs/                      ← design-system-guide (usage, anti-patterns), icon-system-guide
```

---

## Quick Implementation Rules

1. **Use exact class names** from `AI-QUICK-REFERENCE.md`. Do not invent or shorten them (e.g. `btn btn-default btn-default-type` for primary buttons).
2. **Match HTML structure** from the demo or `LAYOUT-PATTERNS.md` (containers, labels, icons, supporting text).
3. **Use design tokens** via CSS variables (`var(--color-brand-copart-blue)`, `var(--spacing-16)`, etc.) — see `tokens/` and `MAGIC_PATTERNS_PROMPT.md`. Prefer **semantic** over **primitive** when available (`tokens/README.md`).
4. **Icons**: Use `data-icon="icon-name"` with `data-icon-size`. Only use icon names from `tokens/icons.json` (e.g. `check`, `clock`, `warning`, `info`, `search`, `heart`, `close`, `chevron-down`).
5. **Status tokens**: Success = `status-token-success`, Warning = `status-token-warning`, Error = `status-token-error`, Neutral = `status-token-neutral`. Always include `status-token` and `status-token-filled` (or `status-token-outlined`). Use `status-token-label` for text.
6. **Accessibility**: Labels for inputs, `aria-label` for icon-only buttons, semantic HTML. Contrast and focus states follow Vallejo.
7. **Usage guidelines**: When choosing components (e.g. Modal vs Shelf, button variant, alert type), check **“When to use”** and **“Anti-patterns”** in `docs/design-system-guide.md`.

---

## Copart.com-Specific Conventions

- **Listings**: Vehicle search results, lot cards, auction grids. Use status tokens: **Running** (success), **Preview** (warning), **Sold** (error), **Pending** (neutral).
- **Member UI**: Login, registration, account, watchlist, active bids, won auctions. Use `LAYOUT-PATTERNS.md` → “Copart.com–Specific Patterns.”
- **Bidding**: Bid confirmation modals, bid forms, amount inputs. Use modal + primary/secondary button pattern from `AI-QUICK-REFERENCE.md`.
- **Search**: Search bar + filters (make, model, year). Use input + filter icon + primary Search button. See “Vehicle Search Filters Bar” in `LAYOUT-PATTERNS.md`.

---

## Example Prompts You Can Use

```
Using the Vallejo Design System for Copart.com, create a login form with email input, password input, and primary button. Use exact classes from AI-QUICK-REFERENCE.md.
```

```
Create a Copart member dashboard with 3 metric cards (Watchlist, Active Bids, Won) using Vallejo. Use LAYOUT-PATTERNS.md “Member Dashboard – Quick Stats.”
```

```
Build a vehicle search results table with columns for lot #, vehicle, odometer, current bid, and status (Running/Preview/Sold). Use Vallejo status tokens and table styles from the demo.
```

```
Build a bid confirmation modal for Copart.com: show lot info, bid amount input, and Cancel / Place Bid buttons. Use Vallejo modal and button classes.
```

---

## Design Tokens Cheat Sheet

- **Primary**: `#2662D9` — `var(--color-brand-copart-blue)`
- **Text**: `#2F333C` — `var(--color-brand-copart-black)` or `var(--color-light-neutral-500)`
- **Secondary text**: `#46525D` — `var(--color-light-neutral-400)`
- **Border**: `#C5CCD3` — `var(--color-light-neutral-300)`
- **Background**: `#FFFFFF` — `var(--color-brand-copart-white)`
- **Error**: `#C20022` — `var(--color-light-alert-error-text)`
- **Success**: `#1B6600` — `var(--color-light-alert-success-text)`
- **Warning**: `#705700` — `var(--color-light-alert-warning-text)`
- **Spacing**: 8, 16, 24, 32 px — `var(--spacing-8)` etc.
- **Radius**: 8px standard — `var(--border-radius-200)`; 4px small — `var(--border-radius-small)`
- **Font**: Inter — `var(--typography-font-family-base)`; body 16px — `var(--typography-font-size-400)`

---

## Figma

- **File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **File key**: `ixkN3RSoiQc5aSlxZ21Hay`
- **Node IDs**: In `components/catalog.json` per component. Use with Figma MCP tools when needed.

---

## Success Criteria

Output is correct when it:

- Uses exact Vallejo class names and structure from `AI-QUICK-REFERENCE.md` or the demo
- Uses only Vallejo icons from `tokens/icons.json`
- Uses design tokens (CSS variables) for colors, spacing, typography
- Fits Copart.com use cases (auctions, vehicles, members, dashboards) where applicable
- Follows accessibility guidance (labels, ARIA, focus, contrast)
- Matches patterns in `LAYOUT-PATTERNS.md` for similar UIs

When unsure, **default to `test-examples/all-components-demo.html`** for the exact implementation.

---

## Handoff Summary

You have everything needed to implement and extend Copart.com UI with Vallejo. Use `AI-QUICK-REFERENCE.md` and the demo for components, `LAYOUT-PATTERNS.md` for Copart.com layouts, and the tokens + `MAGIC_PATTERNS_PROMPT.md` for visual and layout specs. Stay consistent with production Copart.com by using Vallejo only for Copart.com UI.
