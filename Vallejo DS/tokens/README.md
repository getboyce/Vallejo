# Vallejo Design Tokens

Design tokens are the single source of truth for visual and typographic values in Vallejo. Use CSS variables in implementation — see [index.json](./index.json) for file references and [MAGIC_PATTERNS_PROMPT.md](../MAGIC_PATTERNS_PROMPT.md) for usage in Copart.com UI.

---

## Token Hierarchy

Vallejo uses a **three-tier token architecture**. Prefer **semantic** over **primitive** when a token exists; use **primitive** for one-off or layout-specific values. **Component** tokens are used inside component implementations only.

### 1. Primitive tokens

**What:** Context-agnostic, raw values. They map directly to hex, px, etc.

**When to use:** Layout spacing, precise alignment, or when no semantic token exists.

**Vallejo primitives:**

| Category | Examples | Source |
|----------|----------|--------|
| **Colors** | `--color-light-mode-neutral-000` … `500`, `--color-light-mode-blue-100` … `600`, `--color-brand-copart-blue` | [colors.json](./colors.json) |
| **Typography** | `--typography-font-family-base`, `--typography-font-size-200` … `700`, `--typography-weight-regular` … `extrabold`, `--typography-line-height/*` | [typography.json](./typography.json) |
| **Spacing** | `--spacing-2` … `--spacing-64`, `--spacing-grid-4`, `12`, `20`, `24`, `32` | [spacing.json](./spacing.json) |
| **Shadows** | `--shadow-light`, `--shadow-medium`, `--shadow-dark` | [shadows.json](./shadows.json) |
| **Border radius** | `--border-radius-small`, `--border-radius-200`, `--border-radius-300`, `--border-radius-round` | [border-radius.json](./border-radius.json) |

**Naming pattern:** `--{category}/{subcategory}/{value}` (e.g. `--color-light-mode-neutral-400`).

---

### 2. Semantic tokens

**What:** Purpose-based tokens that **reference** primitives. They encode design decisions (e.g. “text primary”, “border default”) so theming and future changes stay consistent.

**When to use:** Default choice for UI — text, backgrounds, borders, focus, alerts, etc.

**Vallejo semantics:**

- **Colors:**  
  - Brand: `--color-brand-copart-blue`, `copart-white`, `copart-black`  
  - Alerts: `--color-light-mode-alerts-text-error`, `.../success`, `.../warning`, etc.  
  - Use `colors.json` “usage” fields and alert palette for intent (error, success, warning, info, neutral).
- **Typography:**  
  - Use `typography.json` “usage” (e.g. Body 1 → `font-size/400`, Form Field → `font-size/200` + `weight/semibold`) to pick primitive pairs. Semantic typography tokens can be added later (e.g. `--typography-body`, `--typography-label`).
- **Spacing:**  
  - Prefer `--spacing-grid/*` for layout (e.g. `--spacing-grid-24` for sections, cards). Use `--spacing-*` for component-internal gaps.

**Rule:** Prefer semantic over primitive when both apply. If you need a raw value (e.g. custom layout), use a primitive.

---

### 3. Component tokens

**What:** Tokens scoped to a specific component (e.g. `--button-primary-bg`, `--input-border-color`). They reference semantic or primitive tokens.

**Vallejo today:** Component-level tokens are not yet defined in `tokens/*.json`. Components use semantic and primitive tokens directly (see `AI-QUICK-REFERENCE.md` and `all-components-demo.html`).

**Future:** As components are refactored, component tokens can be introduced and documented here. They remain **internal** to the design system; consumers use components and semantic tokens.

---

## Quick reference

| Need | Prefer | Example |
|------|--------|---------|
| Primary brand color | Semantic | `var(--color-brand-copart-blue)` |
| Body text color | Semantic / primitive | `var(--color-brand-copart-black)` or `var(--color-light-mode-neutral-500)` |
| Error text | Semantic | `var(--color-light-mode-alerts-text-error)` |
| Default border | Primitive | `var(--color-light-mode-neutral-300)` |
| Card/section spacing | Semantic | `var(--spacing-grid-24)` |
| Button radius | Primitive | `var(--border-radius-200)` |
| Font, body | Primitive | `var(--typography-font-family-base)`, `var(--typography-font-size-400)` |

---

## File index

- [index.json](./index.json) — Token index and file references  
- [colors.json](./colors.json) — Color primitives and semantics  
- [typography.json](./typography.json) — Font family, size, weight, line-height  
- [spacing.json](./spacing.json) — Spacing and grid  
- [shadows.json](./shadows.json) — Elevation shadows  
- [border-radius.json](./border-radius.json) — Border radius  
- [icons.json](./icons.json) — Icon set and `data-icon` names  

---

## Versioning

Tokens follow the design system version. See [CHANGELOG.md](../CHANGELOG.md) and the [Versioning](../README.md#versioning) section in README for rules and history.
