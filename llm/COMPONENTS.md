# Vallejo v1.1 — Component Specifications

> Detailed specs for all components in the Vallejo Design System.
> For quick HTML patterns, see QUICK-REFERENCE.md.
> For exact token values, see copart-design-tokens.json.
> For system overview and file routing, see SYSTEM-INDEX.json.

**Version:** 1.1
**Last Updated:** February 2026
**Total:** 31 components, 50+ variants, 100+ documented states

---

## Table of Contents

1. [Navigation](#1-navigation)
   - 1.1 [Header](#11-header)
   - 1.2 [Tab Bar (Mobile Bottom Nav)](#12-tab-bar-mobile-bottom-nav)
   - 1.3 [Sidebar](#13-sidebar)
   - 1.4 [Breadcrumbs](#14-breadcrumbs)
2. [Input Components](#2-input-components)
   - 2.1 [Button](#21-button)
   - 2.2 [Text Field](#22-text-field)
   - 2.3 [Dropdown / Select](#23-dropdown--select)
   - 2.4 [Toggle Switch](#24-toggle-switch)
   - 2.5 [Checkbox](#25-checkbox)
   - 2.6 [Radio Button](#26-radio-button)
   - 2.7 [Slider / Range](#27-slider--range)
   - 2.8 [Search Bar (Header)](#28-search-bar-header)
3. [Feedback](#3-feedback)
   - 3.1 [Alert / Banner](#31-alert--banner)
   - 3.2 [Toast / Snackbar](#32-toast--snackbar)
   - 3.3 [Modal / Dialog](#33-modal--dialog)
   - 3.4 [Shelf / Drawer](#34-shelf--drawer)
   - 3.5 [Progress Indicator](#35-progress-indicator)
   - 3.6 [Skeleton Screen](#36-skeleton-screen)
4. [Data Display](#4-data-display)
   - 4.1 [Card](#41-card)
   - 4.2 [Table](#42-table)
   - 4.3 [List](#43-list)
   - 4.4 [Stat / KPI](#44-stat--kpi)
   - 4.5 [Badge / Tag](#45-badge--tag)
   - 4.6 [Chart](#46-chart)
5. [Media](#5-media)
   - 5.1 [Image Container](#51-image-container)
   - 5.2 [Avatar](#52-avatar)
   - 5.3 [Video Player](#53-video-player)
6. [Patterns](#6-patterns)
   - 6.1 [Page Templates](#61-page-templates)
   - 6.2 [User Flows](#62-user-flows)
   - 6.3 [Feedback Patterns](#63-feedback-patterns)
   - 6.4 [Empty States](#64-empty-states)
7. [Animation & Motion](#7-animation--motion)
   - 7.1 [Duration Tokens](#71-duration-tokens)
   - 7.2 [Easing](#72-easing)
   - 7.3 [Micro-Interactions](#73-micro-interactions)
   - 7.4 [Delight Animations](#74-delight-animations)
   - 7.5 [State Transitions](#75-state-transitions)
   - 7.6 [Reduced Motion](#76-reduced-motion)
8. [Mobile Platform](#8-mobile-platform)
   - 8.1 [Philosophy](#81-philosophy)
   - 8.2 [Key Differences](#82-key-differences)
   - 8.3 [Mobile Type Scale](#83-mobile-type-scale)
   - 8.4 [Mobile Component Overrides](#84-mobile-component-overrides)
   - 8.5 [Navigation Patterns](#85-navigation-patterns)
   - 8.6 [Gestures](#86-gestures)
   - 8.7 [Mobile Accessibility](#87-mobile-accessibility)

---

## 1. Navigation

### 1.1 Header

**Anatomy:**
1. `header-container` — Full-width outer wrapper
2. `header-brand` — Logo lockup (left-aligned)
3. `header-search` — Search bar (center, desktop only)
4. `header-nav` — Primary navigation links
5. `header-actions` — Sign In / Register / Account buttons (right-aligned)
6. `header-mobile-toggle` — Hamburger menu trigger (mobile/tablet only)

**Variants:**

| Variant | Context |
|---------|---------|
| Default | Logged-out state with Sign In + Register CTAs |
| Authenticated | Replace CTAs with avatar + account dropdown |
| Auction Live | Adds a persistent "Auction in Progress" banner below nav |
| Compact | Scrolled state — reduced height, logo scales down, search collapses to icon |

**States:**

| State | Behavior |
|-------|----------|
| Default | Full height, solid background |
| Scrolled | Collapses to 56px, adds `var(--shadow-sm)`, background becomes solid |
| Mobile Open | Hamburger transforms to X; overlay drawer slides from right |

**Specs:**

| Property | Desktop | Mobile |
|----------|---------|--------|
| Height | 72px | 56px |
| Background | var(--color-blue-900) | var(--color-blue-900) |
| Z-index | var(--z-header) / 1000 | 1000 |
| Padding-x | var(--space-20) | var(--space-4) |
| Logo height | 32px | 28px |
| Shadow (scrolled) | var(--shadow-sm) | var(--shadow-sm) |
| Nav link font | type-subheadline (14px/600) | N/A (collapsed) |
| Nav link color | white, opacity 0.85 | N/A |
| Nav link hover | white, opacity 1.0 | N/A |
| CTA button height | 40px | 36px |
| CTA border-radius | var(--radius-lg) | var(--radius-lg) |

**Usage Rules:**
- **Always include the Copart header** at the top of every prototype page unless explicitly told not to. Use the existing component files (`components/header/index.html` for logged-out, `components/header/loggedin.html` for logged-in) — do not recreate or improvise a header. Shared design tokens: `components/tokens.css`.
- Header background (Blue 900) stays dark in both light and dark themes — it is not theme-switched.
- Nav link color is always white with 0.85 opacity, increasing to 1.0 on hover.
- Mobile: hamburger replaces nav links at the tablet breakpoint (< 768px).
- Compact variant triggers on scroll — height reduces, logo scales, search collapses to icon.

**Accessibility:**
- `<header role="banner">` with `<nav role="navigation" aria-label="Main navigation">`
- All nav items keyboard-focusable with visible focus ring: `var(--shadow-focus)`
- Mobile menu: `aria-expanded="true|false"` on toggle, focus trap within open drawer
- Skip-to-content link as first focusable element in DOM

---

### 1.2 Tab Bar (Mobile Bottom Nav)

**Anatomy:**
1. `tabbar-container` — Fixed bottom bar
2. `tabbar-item` — Individual tab (icon + label)
3. `tabbar-indicator` — Active state highlight
4. `tabbar-badge` — Notification count overlay

**Variants:**
Single variant with up to 5 items.

| Tab | Icon | Label |
|-----|------|-------|
| Home | House | Home |
| Search | Magnifying Glass | Search |
| Auctions | Gavel | Auctions |
| Watchlist | Heart | Watchlist |
| Account | Person | Account |

**States:**

| State | Icon Color | Label Color | Background |
|-------|-----------|------------|------------|
| Default | var(--color-neutral-500) | var(--color-neutral-500) | transparent |
| Active | var(--color-blue-600) | var(--color-blue-600) | transparent |
| Pressed | var(--color-blue-800) | var(--color-blue-800) | var(--color-blue-100) |
| Badge | — | — | var(--feedback-error-icon) dot or count |

**Specs:**

| Property | Value |
|----------|-------|
| Height | 56px + env(safe-area-inset-bottom) |
| Background | var(--bg-primary) light / var(--surface-primary-dark) dark |
| Border-top | 1px solid var(--color-neutral-200) |
| Icon size | 24px |
| Label font | type-caption-2 (11px) |
| Gap (icon to label) | var(--space-1) |
| Item min-width | 64px |
| Touch target | 48x48px minimum per item |
| Z-index | 1000 |

**Usage Rules:**
- Maximum 5 items. If more sections exist, group under a "More" tab.
- Active tab uses filled icon variant; inactive tabs use outlined icons.
- Badge count displays on top-right of icon; use `aria-label` for count.

**Accessibility:**
- `<nav role="navigation" aria-label="Tab navigation">`
- Each tab: `role="tab"`, `aria-selected="true|false"`
- Container: `role="tablist"`
- Badge: `aria-label="3 notifications"` (dynamic count)

---

### 1.3 Sidebar

**Anatomy:**
1. `sidebar-container` — Vertical panel, left-aligned
2. `sidebar-header` — Title + collapse toggle
3. `sidebar-section` — Collapsible group
4. `sidebar-section-title` — Group label with expand/collapse chevron
5. `sidebar-item` — Individual nav link or filter option
6. `sidebar-divider` — Horizontal separator between sections

**Variants:**

| Variant | Usage |
|---------|-------|
| Navigation | Dashboard side nav with icon + label items |
| Filter | Search results filter panel with checkboxes, ranges, and counts |
| Collapsible | Hidden by default on tablet, revealed via toggle button |

**States:**

| State | Behavior |
|-------|----------|
| Expanded | Full width visible, content area shifts right |
| Collapsed (desktop) | Collapses to icon-only (56px width) |
| Hidden (tablet/mobile) | Overlay panel slides from left with backdrop scrim |
| Section open | Content visible, chevron rotated 90deg |
| Section closed | Content hidden, chevron at 0deg |

**Specs:**

| Property | Value |
|----------|-------|
| Width (expanded) | 280px |
| Width (collapsed) | 56px |
| Width (overlay/mobile) | 320px |
| Background | var(--bg-primary) light / var(--surface-secondary-dark) dark |
| Border-right | 1px solid var(--color-neutral-200) |
| Padding | var(--space-4) |
| Section title font | type-subheadline, color var(--color-blue-600) |
| Item font | type-body, color var(--color-neutral-700) |
| Item hover bg | var(--color-blue-100) |
| Item active bg | var(--color-blue-200), color var(--color-blue-800), weight 600 |
| Transition | width var(--duration-moderate) var(--easing-ease-out) |

**Usage Rules:**
- Desktop: sidebar is always visible. Collapse toggle shows icon-only state (56px).
- Tablet: sidebar collapses into an overlay drawer triggered by a toggle button.
- Mobile: sidebar becomes a full overlay with backdrop scrim.
- Filter variant includes checkboxes, range sliders, and result count badges.

**Accessibility:**
- Navigation variant: `<nav aria-label="Dashboard navigation">`
- Filter variant: `<aside role="complementary" aria-label="Filters">`
- Collapsible sections: `aria-expanded`, `aria-controls` pointing to content panel ID
- Filter counts: `aria-describedby` linking to the count span
- Overlay: focus trap when open; focus returns to trigger on close

---

### 1.4 Breadcrumbs

**Anatomy:**
1. `breadcrumb-container` — Horizontal list wrapper
2. `breadcrumb-item` — Individual link (all but last are interactive)
3. `breadcrumb-separator` — Chevron icon between items
4. `breadcrumb-current` — Last item, non-interactive, represents current page

**Variants:** Single variant.

**States:**

| Element | Default | Hover | Active |
|---------|---------|-------|--------|
| Link items | var(--color-neutral-500), type-caption-1 | var(--color-blue-600), underline | var(--color-blue-800) |
| Current item | var(--color-neutral-900), weight 600 | N/A (non-interactive) | N/A |
| Separator | var(--color-neutral-300) | N/A | N/A |

**Specs:**

| Property | Value |
|----------|-------|
| Container height | 32px |
| Item font | type-caption-1 (12px, medium) |
| Separator | 12px chevron-right icon, var(--color-neutral-300), margin 0 var(--space-2) |
| Current item | type-caption-1, weight 600, var(--color-neutral-900) |
| Gap between items | var(--space-1) |
| Overflow (mobile) | horizontal scroll, no wrapping, fade-out mask on edges |

**Usage Rules:**
- Use on all pages 2+ levels deep in hierarchy.
- Maximum 5 levels displayed. If deeper, show: Home > ... > Parent > Current.
- Do NOT use on landing pages or the homepage.

**Accessibility:**
- `<nav aria-label="Breadcrumb">` with `<ol>` list
- Current page: `aria-current="page"`
- Separators: `aria-hidden="true"` (decorative)

---

## 2. Input Components

### 2.1 Button

**Anatomy:**
1. `button-container` — Outer interactive element (`<button>`)
2. `button-icon-leading` — Optional icon before label
3. `button-label` — Text content
4. `button-icon-trailing` — Optional icon after label (arrow, chevron)
5. `button-loader` — Spinner replacing label during loading state

**Variants:**

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|----------|
| Primary | var(--interactive-primary) | white | none | Main page CTA — ONE per view |
| Secondary | transparent | var(--interactive-primary) | 1.5px solid var(--interactive-primary) | Supporting actions |
| Tertiary | transparent | var(--interactive-primary) | none | Low-emphasis actions |
| Destructive | var(--interactive-destructive) | white | none | Delete, remove, cancel |
| Success | var(--feedback-success-icon) | white | none | Confirm, approve, complete |
| CTA Orange | var(--interactive-accent) | white | none | Registration, urgency, promotions ONLY |

**States per Variant:**

**Primary:**

| State | Background | Text | Shadow |
|-------|-----------|------|--------|
| Default | var(--interactive-primary) | white | var(--shadow-button-primary) |
| Hover | var(--interactive-primary-hover) | white | 0 2px 4px rgba(6,53,152,0.32) |
| Active | var(--interactive-primary-active) | white | none (inset feel) |
| Disabled | var(--interactive-disabled) | var(--color-neutral-500) | none |
| Loading | var(--interactive-primary) @ 70% opacity | hidden | none (spinner visible) |
| Focus | var(--interactive-primary) | white | var(--shadow-focus) |

**Secondary:**

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | white | var(--interactive-primary) | 1.5px solid var(--interactive-primary) |
| Hover | var(--color-blue-100) | var(--interactive-primary-hover) | 1.5px solid var(--interactive-primary-hover) |
| Active | var(--color-blue-200) | var(--interactive-primary-hover) | 1.5px solid var(--interactive-primary-hover) |
| Disabled | white | var(--color-neutral-300) | 1.5px solid var(--color-neutral-200) |

**Tertiary:**

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | transparent | var(--interactive-primary) | none |
| Hover | var(--color-blue-100) | var(--interactive-primary-hover) | none |
| Active | var(--color-blue-200) | var(--interactive-primary-hover) | none |
| Disabled | transparent | var(--color-neutral-300) | none |

**Destructive:**

| State | Background | Text |
|-------|-----------|------|
| Default | var(--interactive-destructive) | white |
| Hover | var(--interactive-destructive-hover) | white |
| Active | darker destructive | white |
| Disabled | var(--interactive-disabled) | var(--color-neutral-500) |

**Success:**

| State | Background | Text |
|-------|-----------|------|
| Default | var(--feedback-success-icon) | white |
| Hover | var(--feedback-success-text) | white |
| Disabled | var(--interactive-disabled) | var(--color-neutral-500) |

**CTA Orange:**

| State | Background | Text |
|-------|-----------|------|
| Default | var(--interactive-accent) | white |
| Hover | var(--interactive-accent-hover) | white |
| Disabled | var(--interactive-disabled) | var(--color-neutral-500) |

**Sizes:**

| Size | Height | Padding-x | Font Size | Weight | Radius | Icon Size |
|------|--------|-----------|-----------|--------|--------|-----------|
| XS | 28px | 10px | 12px | 500 | var(--radius-md) | 14px |
| SM | 32px | 12px | 14px | 500 | var(--radius-md) | 16px |
| MD | 40px | 16px | 14px | 500 | var(--radius-lg) | 18px |
| LG | 48px | 24px | 16px | 500 | var(--radius-lg) | 20px |
| XL | 56px | 32px | 18px | 600 | 10px | 22px |

**Specs (all sizes):**

| Property | Value |
|----------|-------|
| Font family | Inter |
| Cursor | pointer (default), not-allowed (disabled) |
| Transition | background var(--duration-normal) ease, box-shadow var(--duration-normal) ease, transform var(--duration-fast) ease |
| Active transform | scale(0.98) |
| Min-width | 64px |
| Icon-to-label gap | var(--space-2) |

**Usage Rules:**
- **ONE Primary button per view.** The primary button represents the single most important action.
- Use Secondary for competing actions (e.g., "Save Draft" next to "Publish").
- Use Tertiary for low-emphasis actions (e.g., "Cancel", "Learn more").
- Destructive is reserved for irreversible actions (e.g., "Delete Account").
- CTA Orange is reserved for registration, onboarding, and urgency/promotional emphasis.
- Never stack Primary + CTA Orange in same button group.
- Never place two Primary buttons side by side. Demote lesser actions.
- Icon-only buttons require `aria-label`.
- Loading state: disable interactions, show spinner, maintain button width.

**Accessibility:**
- Use `<button>` element (not `<div>` or `<span>`).
- Minimum touch target: 44x44px (expand hit area with padding if visually smaller).
- `aria-disabled="true"` instead of `disabled` attribute when maintaining focus order.
- Loading state: `aria-busy="true"`, `aria-label="Loading, please wait"`.
- Icon-only buttons: require `aria-label` describing the action.
- Focus ring: var(--shadow-focus) — 3px at 40% opacity, 2px offset.

**Copy Rules:**
- Label = verb-first, 1–3 words, specific action: "Place bid", "Save to watchlist", "Remove lot".
- Never: "Click here", "Submit", "OK", "Yes", "No".
- Destructive: state what's destroyed — "Remove from watchlist", not "Delete".
- Loading state: present participle — "Placing bid…", "Saving…".
- Max 20 characters.

---

### 2.2 Text Field

**Anatomy:**
1. `field-container` — Wrapper for the full input group
2. `field-label` — Text label above input (required)
3. `field-input` — The actual `<input>` element
4. `field-leading-icon` — Optional icon inside input (left)
5. `field-trailing-action` — Optional clear button or visibility toggle (right)
6. `field-helper` — Helper text or character count below input
7. `field-error` — Error message below input (replaces helper when active)

**Variants:** Single variant with contextual states.

**States:**

| State | Border | Background | Label Color | Helper Color |
|-------|--------|-----------|-------------|-------------|
| Default | 1.5px var(--border-default) | white | var(--text-secondary) | var(--text-tertiary) |
| Hover | 1.5px var(--border-strong) | white | var(--text-secondary) | var(--text-tertiary) |
| Focus | 2px var(--border-focus) | white | var(--interactive-primary) | var(--text-tertiary) |
| Filled | 1.5px var(--border-default) | white | var(--text-secondary) | var(--text-tertiary) |
| Disabled | 1.5px var(--border-subtle) | var(--bg-secondary) | var(--text-disabled) | var(--text-disabled) |
| Error | 2px var(--border-error) | tinted error bg | var(--feedback-error-text) | var(--feedback-error-text) |
| Success | 2px var(--border-success) | white | var(--text-secondary) | var(--feedback-success-text) |
| Read-only | 1.5px var(--border-subtle) | var(--bg-secondary) | var(--text-secondary) | var(--text-tertiary) |

**Specs:**

| Property | Value |
|----------|-------|
| Height (input only) | 44px |
| Border-radius | var(--radius-lg) |
| Padding-x | var(--space-3) |
| Font | type-body (16px / 400) |
| Label font | type-subheadline (14px / 600), margin-bottom var(--space-2) |
| Helper/Error font | type-caption-1 (12px / 500), margin-top var(--space-1) |
| Leading icon | 20px, var(--color-neutral-500), 12px from left edge |
| Trailing action | 20px touch target within input |
| Transition | border-color var(--duration-normal) ease, box-shadow var(--duration-normal) ease |
| Focus shadow | 0 0 0 3px rgba(38,98,217,0.15) |

**Usage Rules:**
- Always pair with a visible `<label>`. Placeholder text is NOT a substitute.
- Helper text clarifies expected format (e.g., "Enter 17-character VIN").
- Error messages are specific, not generic (e.g., "VIN must be exactly 17 characters" not "Invalid input").
- Use `type="email"`, `type="tel"`, etc. to trigger appropriate mobile keyboards.
- Font size MUST be 16px on mobile to prevent iOS auto-zoom.

**Accessibility:**
- Every input requires a visible `<label>` linked via `for`/`id`.
- Error messages linked with `aria-describedby`.
- `aria-invalid="true"` when in error state.
- `aria-required="true"` for mandatory fields.
- Placeholder text is NOT a substitute for labels.

**Copy Rules:**
- Label = what to enter (noun): "Lot number", "Email address". Not instructions ("Enter lot number here").
- Placeholder = example format only: "e.g., 12345678". Never repeat the label.
- Helper text = context the label can't provide: "8-digit number found on the vehicle page."
- Error = problem + fix: "Enter a valid lot number (8 digits)." Never: "Invalid input."
- Max label: 30 chars. Max helper: 80 chars. Max error: 120 chars.

---

### 2.3 Dropdown / Select

**Anatomy:**
1. `dropdown-trigger` — Button that opens the menu (styled like text field)
2. `dropdown-label` — Text label above trigger
3. `dropdown-menu` — Floating panel containing options
4. `dropdown-search` — Optional search/filter input within menu
5. `dropdown-option` — Individual selectable item
6. `dropdown-option-icon` — Checkmark for selected items
7. `dropdown-group-label` — Section divider within menu
8. `dropdown-empty` — "No results" message when search yields nothing

**Variants:**
- Single-select (default)
- Multi-select (with checkmarks for multiple selections)
- Searchable (includes search input at top of menu)

**States (Trigger):**
Same as Text Field states, plus:

| State | Additional Visual |
|-------|------------------|
| Open | var(--border-focus) border, chevron rotated 180deg, menu visible |
| Has value | Display selected value in var(--text-primary) (not placeholder color) |

**States (Option):**

| State | Background | Text |
|-------|-----------|------|
| Default | white | var(--text-secondary) |
| Hover | var(--color-blue-100) | var(--text-primary) |
| Selected | var(--color-blue-200) | var(--color-blue-800), checkmark visible |
| Disabled | white | var(--text-disabled) |

**Specs:**

| Property | Value |
|----------|-------|
| Trigger | Same as Text Field (44px height, var(--radius-lg)) |
| Menu background | white |
| Menu border | 1px var(--border-subtle) |
| Menu border-radius | var(--radius-xl) |
| Menu shadow | var(--shadow-lg) |
| Menu max-height | 320px (scrollable) |
| Option height | 40px |
| Option padding-x | var(--space-3) |
| Search input | 36px height, full-width, border-bottom divider |
| Animation | opacity 0 to 1, translateY(-4px to 0), var(--duration-normal) ease-out |
| Z-index | 1100 |

**Usage Rules:**
- Use for Make, Model, Year, Location, and other predefined lists.
- Include search input when the list exceeds 10 items.
- Multi-select variant shows checkmarks and a count badge on the trigger.
- "No results" empty state shown when search yields nothing.

**Accessibility:**
- Trigger: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`
- Menu: `role="listbox"`
- Options: `role="option"`, `aria-selected`
- Keyboard: Arrow keys navigate, Enter selects, Escape closes, type-ahead supported
- Multi-select: `aria-multiselectable="true"` on listbox

**Copy Rules:**
- Label = what to select (noun phrase): "Title type", "Damage type", "Yard".
- Placeholder = "Select…" — never repeat the label.
- "No results" text when search yields nothing: "No results for '[query]'."
- Option text: use glossary terms consistently. Max 40 chars per option.

---

### 2.4 Toggle Switch

**Anatomy:**
1. `toggle-container` — Wrapper with label
2. `toggle-track` — The elongated background pill
3. `toggle-thumb` — The circular sliding indicator
4. `toggle-label` — Descriptive text (always required)

**Variants:** Single variant.

**States:**

| State | Track BG | Thumb | Label |
|-------|---------|-------|-------|
| Off | var(--color-neutral-300) | white, left-positioned | var(--text-secondary) |
| Off + Hover | var(--color-neutral-500) | white, left-positioned | var(--text-secondary) |
| On | var(--interactive-primary) | white, right-positioned | var(--text-secondary) |
| On + Hover | var(--interactive-primary-hover) | white, right-positioned | var(--text-secondary) |
| Disabled Off | var(--color-neutral-200) | var(--color-neutral-100), left | var(--text-disabled) |
| Disabled On | var(--interactive-primary) @ 40% | var(--color-neutral-100), right | var(--text-disabled) |
| Focus | any track state | any thumb state | focus ring on track: var(--shadow-focus) |

**Specs:**

| Property | Desktop | Mobile |
|----------|---------|--------|
| Track size | 48px x 28px | 51px x 31px (iOS standard) |
| Track radius | 14px (pill) | 15.5px (pill) |
| Thumb diameter | 22px | 27px |
| Thumb inset | 3px from track edge | 2px from track edge |
| Thumb shadow | 0 1px 3px rgba(0,0,0,0.15) | same |
| Gap to label | var(--space-3) | var(--space-3) |
| Transition | background var(--duration-moderate) ease, transform var(--duration-moderate) var(--easing-enter) | same |

**Usage Rules:**
- Use for settings that take effect immediately (no "Save" button needed).
- Do NOT use for form fields that require submission — use checkboxes instead.
- Always pair with a visible label. Never use a toggle without explanatory text.

**Accessibility:**
- `role="switch"`, `aria-checked="true|false"`
- `aria-label` or associated `<label>` required
- Keyboard: Space/Enter toggles state
- Minimum touch target: 44x44px (expand hit area beyond visual track)

---

### 2.5 Checkbox

**Anatomy:**
1. `checkbox-container` — Wrapper for input + label
2. `checkbox-input` — The visual box indicator
3. `checkbox-icon` — Checkmark or minus (indeterminate) icon
4. `checkbox-label` — Descriptive text

**Variants:** Single variant with indeterminate support.

**States:**

| State | Box Border | Box BG | Icon |
|-------|-----------|--------|------|
| Unchecked | 1.5px var(--border-default) | white | none |
| Unchecked Hover | 1.5px var(--interactive-primary) | white | none |
| Checked | none | var(--interactive-primary) | white checkmark |
| Checked Hover | none | var(--interactive-primary-hover) | white checkmark |
| Indeterminate | none | var(--interactive-primary) | white minus line |
| Disabled Unchecked | 1.5px var(--border-subtle) | var(--bg-secondary) | none |
| Disabled Checked | none | var(--color-neutral-300) | white checkmark |
| Error | 1.5px var(--border-error) | white or var(--interactive-primary) | — |
| Focus | any state | any state | var(--shadow-focus) ring |

**Specs:**

| Property | Value |
|----------|-------|
| Box size | 20px x 20px |
| Border-radius | var(--radius-sm) |
| Checkmark icon | 14px, stroke-width 2px |
| Gap (box to label) | var(--space-2) |
| Label font | type-body (16px / 400) |
| Group spacing (vertical) | var(--space-3) between checkboxes |
| Touch target | 44px minimum height per row |
| Transition | background var(--duration-fast) ease, border-color var(--duration-fast) ease |

**Usage Rules:**
- Use for multi-select choices where zero or more options can be selected.
- Groups of checkboxes should be wrapped in a `<fieldset>` with a `<legend>`.
- Indeterminate state is for "select all" when only some children are checked.

**Accessibility:**
- Native `<input type="checkbox">` with custom visuals via CSS.
- `aria-checked="mixed"` for indeterminate state.
- Groups wrapped in `<fieldset>` with `<legend>`.
- Keyboard: Space toggles, Tab moves between checkboxes.

---

### 2.6 Radio Button

**Anatomy:**
1. `radio-container` — Wrapper for input + label
2. `radio-input` — The circular indicator
3. `radio-dot` — Inner filled circle (when selected)
4. `radio-label` — Descriptive text

**Variants:** Single variant.

**States:**

| State | Border | Fill | Dot |
|-------|--------|------|-----|
| Unselected | 1.5px var(--border-default) | white | none |
| Unselected Hover | 1.5px var(--interactive-primary) | white | none |
| Selected | 1.5px var(--interactive-primary) | white | var(--interactive-primary) (10px) |
| Selected Hover | 1.5px var(--interactive-primary-hover) | white | var(--interactive-primary-hover) |
| Disabled Unselected | 1.5px var(--border-subtle) | var(--bg-secondary) | none |
| Disabled Selected | 1.5px var(--color-neutral-300) | var(--bg-secondary) | var(--color-neutral-300) |
| Focus | any state | any state | focus ring on outer circle |

**Specs:**

| Property | Value |
|----------|-------|
| Outer circle | 20px x 20px |
| Inner dot | 10px x 10px (centered) |
| Border-radius | 50% (both) |
| Gap (circle to label) | var(--space-2) |
| Label font | type-body (16px / 400) |
| Group spacing | var(--space-3) vertical between options |
| Touch target | 44px minimum height |

**Usage Rules:**
- Use for mutually exclusive choices within a group.
- Always provide at least 2 options. For a single binary choice, use a Toggle Switch.
- Radio groups must be wrapped in `<fieldset>` with `<legend>`.

**Accessibility:**
- Native `<input type="radio">` within `<fieldset>` + `<legend>`.
- Same `name` attribute for all radios in a group.
- Arrow keys navigate within group, Tab moves between groups.

---

### 2.7 Slider / Range

**Anatomy:**
1. `slider-container` — Full component wrapper
2. `slider-label` — Description above slider
3. `slider-track` — Background rail
4. `slider-fill` — Colored portion showing selected range
5. `slider-thumb` — Draggable handle(s) — one for single, two for range
6. `slider-value` — Current value display (tooltip or inline)
7. `slider-min-label` / `slider-max-label` — Range endpoints

**Variants:**

| Variant | Thumbs | Use Case |
|---------|--------|----------|
| Single | 1 | Set a single value (e.g., "max price") |
| Range | 2 | Set a low-high range (e.g., "mileage between X and Y") |

**States:**

| State | Track | Fill | Thumb |
|-------|-------|------|-------|
| Default | var(--color-neutral-200) | var(--interactive-primary) | white, 1.5px var(--interactive-primary) border |
| Hover | var(--color-neutral-200) | var(--interactive-primary) | white, 2px var(--interactive-primary-hover) border, scale(1.1) |
| Active/Dragging | var(--color-neutral-200) | var(--interactive-primary) | var(--interactive-primary) fill, scale(1.15) |
| Disabled | var(--bg-secondary) | var(--color-neutral-300) | var(--color-neutral-200) |
| Focus | var(--color-neutral-200) | var(--interactive-primary) | var(--shadow-focus) ring on thumb |

**Specs:**

| Property | Value |
|----------|-------|
| Track height | 4px, radius 2px |
| Thumb | 24px circle |
| Thumb shadow | 0 1px 4px rgba(0,0,0,0.15) |
| Value tooltip | type-caption-1, var(--color-blue-900) on var(--color-blue-200) bg, 4px radius |
| Min/Max labels | type-caption-1, var(--text-tertiary) |
| Touch target | 44x44px on thumb (expanded beyond visual) |
| Transition | transform var(--duration-fast) ease |

**Range Variant Additional Specs:**
- Two `<input type="range">` overlaid transparently; pointer-events only on thumbs.
- Fill bar positioned via JS: left = % of low thumb, width = % span between thumbs.
- Thumbs cannot cross — JS enforces lo <= hi.
- Each thumb gets own `aria-label` (e.g., "Minimum mileage", "Maximum mileage").

**Usage Rules:**
- Use for numeric range selection: price range, mileage, year.
- Always show current value(s) as text — either inline or as tooltip on drag.
- Pair with manual text inputs for precise entry when needed.

**Accessibility:**
- `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`
- Range variant: two thumbs, each with own aria attributes.
- Keyboard: Arrow keys adjust by step, Page Up/Down by larger step, Home/End for min/max.
- `aria-label` describing what the slider controls.

---

### 2.8 Search Bar (Header)

**Anatomy:**
1. `header-search` — Relative-positioned container
2. `header-search-icon` — Magnifying glass SVG, absolutely positioned left
3. `header-search-input` — `type="search"` input with pill border-radius
4. `header-search-clear` — SVG x button, absolutely positioned right, hidden until input has value

**Specs:**

| Property | Desktop | Mobile |
|----------|---------|--------|
| Height | 40px | 36px |
| Max width | 420px | 100% (full row) |
| Background | rgba(255,255,255,0.1) | same |
| Border | 1.5px solid rgba(255,255,255,0.15) | same |
| Border-radius | var(--radius-pill) | same |
| Padding | 0 var(--space-4) 0 40px | same |
| Text color | #fff | same |
| Placeholder color | rgba(255,255,255,0.5) | same |
| Focus border | rgba(91,142,240,0.7) | same |
| Focus ring | 0 0 0 3px rgba(38,98,217,0.25) | same |
| Clear button size | 20px circle | same |
| Clear button bg | rgba(255,255,255,0.15) | same |

**States:**

| State | Behavior |
|-------|----------|
| Default | Subtle translucent background, placeholder visible |
| Hover | Background brightens to rgba(255,255,255,0.14) |
| Focus | Blue focus ring, background rgba(255,255,255,0.18) |
| Has value | Clear button (x) appears on right side |
| Cleared | Input empties, clear button hides, input refocuses |

**Usage Rules:**
- Always use `type="search"` for semantic HTML
- Native WebKit search clear button must be hidden with `-webkit-appearance: none`
- Clear button uses Vallejo's close/x SVG icon — never an emoji or text character
- On mobile (<=768px), icon positions use fixed `top: 18px` (half of 36px input) to center within the input, not the padded container

**Accessibility:**
- Input has `aria-label="Search vehicles"`
- Clear button has `aria-label="Clear search"`
- Both are keyboard-focusable

---

## 3. Feedback

### 3.1 Alert / Banner

**Anatomy:**
1. `alert-container` — Outer wrapper with semantic background
2. `alert-icon` — Leading icon matching severity
3. `alert-content` — Title + description wrapper
4. `alert-title` — Bold headline (optional)
5. `alert-description` — Detail text
6. `alert-action` — Optional CTA link or button
7. `alert-dismiss` — Close/X button (if dismissible)

**Variants (by severity):**

| Variant | Background | Border-Left | Icon | Icon Color | Text Color |
|---------|-----------|-------------|------|-----------|------------|
| Info | var(--feedback-info-bg) | 3px var(--feedback-info-border) | Info circle | var(--feedback-info-icon) | var(--feedback-info-text) |
| Success | var(--feedback-success-bg) | 3px var(--feedback-success-border) | Checkmark circle | var(--feedback-success-icon) | var(--feedback-success-text) |
| Warning | var(--feedback-warning-bg) | 3px var(--feedback-warning-border) | Triangle exclamation | var(--feedback-warning-icon) | var(--feedback-warning-text) |
| Error | var(--feedback-error-bg) | 3px var(--feedback-error-border) | Octagon exclamation | var(--feedback-error-icon) | var(--feedback-error-text) |

**States:**

| State | Behavior |
|-------|----------|
| Visible | Full opacity, normal layout flow |
| Entering | Slide down + fade in, var(--duration-moderate) ease-out |
| Dismissing | Fade out + collapse height, var(--duration-moderate) ease-in |
| Dismissed | `display: none`, removed from flow |

**Specs:**

| Property | Value |
|----------|-------|
| Border-radius | var(--radius-lg) |
| Padding | var(--space-4) |
| Icon size | 20px, flex-shrink 0 |
| Gap (icon to content) | var(--space-3) |
| Title font | type-subheadline (14px / 600) |
| Description font | type-body (16px / 400) |
| Dismiss button | 20px icon, var(--text-tertiary), 8px from top-right |
| Min-height | 48px |

**Usage Rules:**
- Info: Non-critical announcements (e.g., "Auction schedule updated").
- Success: Completed actions (e.g., "Your bid of $4,500 was placed successfully").
- Warning: Important caution (e.g., "Your deposit covers bids up to $2,000").
- Error: Failed actions (e.g., "Bid could not be submitted. Please try again").
- Do NOT use alerts for validation errors on individual form fields — use inline field errors.

**Accessibility:**
- `role="alert"` for Error and Warning variants (announces immediately).
- `role="status"` for Info and Success variants.
- Dismiss button: `aria-label="Dismiss alert"`.
- Focus should not automatically move to alerts.

**Copy Rules:**
- Pattern: "[What happened] — [what to do]."
- Success: "Bid placed — you'll receive a confirmation email."
- Warning: "Your session expires in 5 minutes — save your work."
- Error: "Payment failed — update your payment method to continue."
- Never: "Oops", "Uh oh", "Something went wrong". Be specific.
- Never blame the member: "We couldn't process your payment" not "You entered an invalid card."

---

### 3.2 Toast / Snackbar

**Anatomy:**
1. `toast-container` — Floating wrapper
2. `toast-icon` — Status icon (optional)
3. `toast-message` — Short descriptive text
4. `toast-action` — Optional action link (e.g., "Undo")
5. `toast-dismiss` — Close button (optional)

**Variants:**

| Variant | Background | Text | Icon |
|---------|-----------|------|------|
| Neutral | var(--color-neutral-900) | white | none |
| Success | var(--feedback-success-text) | white | checkmark |
| Error | var(--feedback-error-text) | white | exclamation |

**States:**

| State | Behavior |
|-------|----------|
| Entering | translateY(16px) to 0, opacity 0 to 1, var(--duration-slow) ease-out |
| Visible | Full opacity, positioned, auto-dismiss timer running |
| Exiting | opacity 1 to 0, var(--duration-moderate) ease-in |
| Hover | Auto-dismiss timer paused |

**Specs:**

| Property | Value |
|----------|-------|
| Position | fixed, bottom 24px, center horizontal (desktop) / full-width minus margins (mobile) |
| Min-width | 320px (desktop), calc(100% - 32px) (mobile) |
| Max-width | 560px |
| Padding | var(--space-3) vertical, var(--space-4) horizontal |
| Border-radius | 10px |
| Shadow | var(--shadow-lg) |
| Font | type-body (16px / 400), white |
| Auto-dismiss | 5s default, 8s with action link, indefinite for errors |
| Z-index | 2000 |
| Max stack | 3 toasts visible simultaneously, newest on bottom |

**Usage Rules:**
- Use for confirmations: "Vehicle added to Watchlist."
- Use when the action is easily reversible and provides an "Undo" link.
- Do NOT use for errors requiring user action — use Alerts or Modals.
- Do NOT use for critical information — toasts auto-dismiss.

**Accessibility:**
- `role="status"`, `aria-live="polite"` (does not interrupt screen reader).
- Error toasts: `role="alert"`, `aria-live="assertive"`.
- Action link must be keyboard-focusable before auto-dismiss.
- Hover pauses the auto-dismiss timer.

**Copy Rules:**
- Past-tense confirmation, 1 sentence, max 60 chars.
- "Lot added to watchlist." / "Settings saved." / "Bid placed successfully."
- Include "Undo" action where reversible: "Lot removed from watchlist. **Undo**"
- Never: exclamation marks, "Successfully!" as standalone, verbose confirmations.

---

### 3.3 Modal / Dialog

**Anatomy:**
1. `modal-backdrop` — Full-screen overlay scrim
2. `modal-container` — Centered content panel
3. `modal-header` — Title + close button
4. `modal-body` — Scrollable content area
5. `modal-footer` — Action buttons (primary right, secondary left)

**Variants:**

| Variant | Width | Use Case |
|---------|-------|----------|
| Small | 400px | Confirmations, simple prompts |
| Medium | 560px | Forms, detail views |
| Large | 720px | Complex workflows, data tables |
| Full (mobile) | 100% - 32px | All modals on mobile become near-full-screen bottom sheets |

**States:**

| State | Backdrop | Panel |
|-------|---------|-------|
| Opening | opacity 0 to 0.5 (var(--duration-moderate)) | scale(0.95) to 1, opacity 0 to 1, var(--duration-moderate) ease-out |
| Open | rgba(0,0,0,0.5) | full opacity, normal |
| Closing | opacity 0.5 to 0 | scale(1) to 0.95, opacity 1 to 0, var(--duration-normal) ease-in |

**Specs:**

| Property | Value |
|----------|-------|
| Backdrop | rgba(0,0,0,0.5), z-index 1500 |
| Panel bg | white |
| Panel border-radius | var(--radius-2xl) desktop / var(--radius-2xl) top-only on mobile |
| Panel shadow | 0 24px 48px rgba(0,0,0,0.2) |
| Header padding | var(--space-6) horizontal, var(--space-5) vertical |
| Header title | type-title-2 (22px / 700) |
| Close button | 24px icon, top-right, var(--text-tertiary) to var(--text-primary) on hover |
| Body padding | var(--space-6) |
| Body max-height | calc(80vh - header - footer), overflow-y auto |
| Footer padding | var(--space-4) var(--space-6) |
| Footer border-top | 1px var(--border-subtle) |
| Footer layout | flex, justify-end, gap var(--space-3) |

**Usage Rules:**
- Use for irreversible actions requiring confirmation (e.g., "Confirm your bid of $12,000?").
- Use for focused forms that should not lose context (e.g., "Update payment method").
- Do NOT use for content that could be inline — modals interrupt flow.
- Do NOT nest modals within modals.
- On mobile, modals become bottom sheets with drag handle.

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to title.
- Focus trap: Tab cycles only within modal contents.
- On open: focus moves to first interactive element (or close button).
- On close: focus returns to the element that triggered the modal.
- Escape key closes the modal.
- Backdrop click closes (unless `persistent` variant).

**Copy Rules:**
- Title = topic of the modal: "Confirm your bid", "Remove lot from watchlist". Max 50 chars.
- Body = what the member needs to know (1–3 sentences).
- Primary button = specific action: "Place $2,400 bid". Never "OK" or "Yes".
- Secondary button = "Cancel". Never "No" or "Go back".
- Destructive: repeat the consequence — "This will permanently remove the lot from your watchlist."

---

### 3.4 Shelf / Drawer

**Anatomy:**
1. `shelf-backdrop` — Full-screen overlay scrim
2. `shelf-panel` — Edge-anchored sliding container
3. `shelf-header` — Title + close button (sticky top)
4. `shelf-body` — Scrollable content area
5. `shelf-footer` — Optional action buttons (sticky bottom)

**When to use Shelf vs Modal:**
- **Shelf:** User needs to reference the page behind it, content is browseable/scrollable, or the task involves multiple steps.
- **Modal:** Focused, blocking confirmation that requires a single decision.

**Desktop Variants (Side):**

| Side | Class | Default | Use Case |
|------|-------|---------|----------|
| Right | `shelf-right` | Yes | Most workflows: detail, forms, lists |
| Left | `shelf-left` | No | Navigation, filter panels |

**Desktop Variants (Width):**

| Variant | Width | Class | Use Case |
|---------|-------|-------|----------|
| Narrow | 360px | `shelf-narrow` | Filters, quick actions, settings |
| Medium | 480px | `shelf-medium` | Vehicle detail, forms, lists |
| Wide | 640px | `shelf-wide` | Complex workflows, data tables |
| Full | 100vw | `shelf-full` | Search, immersive flows (X to close) |

**Mobile Variants (Height):**
On mobile (< 768px), all shelves become bottom sheets regardless of side class.

| Variant | Height | Use Case |
|---------|--------|----------|
| Peek | 40vh | Quick actions, confirmations |
| Half | 60vh | Filters, short forms |
| Tall | 85vh | Detail views, long forms |
| Full | 100vh | Search, immersive (no handle, X to close) |

Mobile shelves include a drag handle (36 x 4px, var(--color-neutral-300), centered) except Full variant.

**States:**

| State | Backdrop | Panel (Desktop) | Panel (Mobile) |
|-------|----------|-----------------|----------------|
| Opening | opacity 0 to 0.5 (var(--duration-moderate)) | translateX(100%) to 0 (var(--duration-slow) ease-enter) | translateY(100%) to 0 (400ms ease-enter) |
| Open | rgba(0,0,0,0.5) | full position | full position |
| Closing | opacity 0.5 to 0 | translateX(0 to 100%) (var(--duration-moderate) ease-exit) | translateY(0 to 100%) (var(--duration-moderate) ease-exit) |

Left shelf mirrors X direction: translateX(-100%) to 0 on open.

**Specs:**

| Property | Value |
|----------|-------|
| Backdrop | rgba(0,0,0,0.5), z-index 1400 |
| Panel bg | white, height 100vh (desktop) / variant-based (mobile) |
| Panel border-radius | var(--radius-2xl) on open side only (desktop), 20px 20px 0 0 (mobile) |
| Panel shadow | 0 24px 48px rgba(0,0,0,0.2) |
| Header | sticky top, border-bottom 1px var(--border-subtle) |
| Header padding | var(--space-5) vertical, var(--space-6) horizontal |
| Header title | type-title-2 (20px / 700) |
| Close button | 32px, var(--text-tertiary) to var(--text-primary) on hover |
| Body padding | var(--space-5) vertical, var(--space-6) horizontal, flex 1, overflow-y auto |
| Footer | sticky bottom, border-top 1px var(--border-subtle) |
| Footer padding | var(--space-4) var(--space-6), flex, justify-end, gap var(--space-3) |
| Mobile handle | 36 x 4px, var(--color-neutral-300), radius 2px, centered, 8px top margin |

**Usage Rules:**
- Default to `shelf-right` for most use cases. Use `shelf-left` only for navigation or filter panels.
- Use `shelf-full` for search or immersive experiences needing the full viewport.
- Always include a visible close button in the header.
- On mobile, choose the smallest height variant that fits the content.
- Do NOT use shelves for simple confirmations — use a modal instead.
- Do NOT open a shelf from within another shelf.

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to shelf title.
- Focus trap: Tab cycles only within shelf contents.
- On open: focus moves to first interactive element (or close button).
- On close: focus returns to the element that triggered the shelf.
- Escape key closes the shelf.
- Backdrop click closes the shelf.

---

### 3.5 Progress Indicator

**Anatomy:** Three sub-components, each for a different use case.

**Variant 1: Spinner (Indeterminate)**

| Property | Value |
|----------|-------|
| Sizes | 20px (inline), 32px (component), 48px (page) |
| Stroke width | 3px |
| Stroke color | var(--interactive-primary) |
| Background track | var(--color-neutral-200) at 10% opacity |
| Animation | rotate 360deg in 800ms linear infinite + dash offset |

**Variant 2: Progress Bar (Determinate)**

| Property | Value |
|----------|-------|
| Track | full-width, 6px height, var(--color-neutral-200), radius 3px |
| Fill | var(--interactive-primary), radius 3px, width = percentage |
| Label | type-caption-1, var(--text-secondary), right-aligned above bar |
| Transition | width var(--duration-slow) ease-out |

**Variant 3: Step Indicator (Multi-step flows)**

| Property | Value |
|----------|-------|
| Step circles | 28px diameter |
| Completed step | var(--interactive-primary) fill, white checkmark |
| Current step | var(--interactive-primary) border, var(--interactive-primary) number |
| Upcoming step | var(--color-neutral-300) border, var(--text-tertiary) number |
| Connector | 2px line, var(--interactive-primary) (completed) or var(--color-neutral-200) (upcoming) |
| Label | type-caption-1, below each step |

**Usage Rules:**
- < 300ms: No indicator (feels instant).
- 300ms - 2s: Skeleton screen.
- 2s - 10s: Spinner with "Loading..." text.
- > 10s: Progress bar with estimated time.
- Do NOT combine skeletons with spinners in the same area.

**Accessibility:**
- Spinner: `role="status"`, `aria-label="Loading"`
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`
- Step indicator: `aria-current="step"` on current step

---

### 3.6 Skeleton Screen

**Anatomy:**
Placeholder shapes matching the component they replace.

**Variants:** Configurable shape — rectangles for text, circles for avatars, rounded rectangles for cards.

**Specs:**

| Property | Value |
|----------|-------|
| Background | var(--bg-secondary) |
| Animation | shimmer — linear-gradient(90deg, var(--bg-secondary) 25%, var(--color-neutral-200) 50%, var(--bg-secondary) 75%) |
| Animation timing | background-size: 200% 100%, 1.5s infinite ease-in-out |
| Border-radius | matches target (var(--radius-sm) for text, 50% for avatars, var(--radius-lg) for cards) |
| Text line height | 16px, with 8px gap between lines |
| Text line widths | varies (100%, 80%, 60%) for natural feel |

**Usage Rules:**
- Use for any content area that takes > 300ms to load.
- Match the layout of real content as closely as possible.
- Do NOT combine skeletons with spinners — use one loading pattern per area.

**Accessibility:**
- Container: `aria-busy="true"`, `aria-label="Loading content"`
- Remove `aria-busy` and add real content when loaded.

---

## 4. Data Display

### 4.1 Card

**Anatomy:**
1. `card-container` — Outer wrapper
2. `card-media` — Image/thumbnail area (top or left)
3. `card-badge` — Overlay badge on media (e.g., "Live", "Buy Now")
4. `card-body` — Content area
5. `card-title` — Primary heading
6. `card-subtitle` — Secondary info (year, make, model)
7. `card-meta` — Metadata grid (mileage, damage type, location)
8. `card-footer` — Action area (bid button, watchlist icon, price)

**Variants:**

| Variant | Layout | Usage |
|---------|--------|-------|
| Vertical | Image top, content below | Grid view search results |
| Horizontal | Image left, content right | List view search results |
| Compact | Small image + single line info | Watchlist, dashboard widgets |
| Featured | Large image, overlay gradient text | Homepage hero vehicles |
| Stat | No image, number + label + trend | Dashboard KPI cards |

**States:**

| State | Visual Change |
|-------|--------------|
| Default | white background, subtle border or var(--shadow-sm) |
| Hover | var(--shadow-md), translateY(-2px) |
| Active/Pressed | var(--shadow-sm), translateY(0) |
| Selected | var(--color-blue-200) background, 2px var(--interactive-primary) border |
| Loading | Skeleton screen replacement |

**Specs:**

| Property | Desktop | Mobile |
|----------|---------|--------|
| Border-radius | var(--radius-xl) / 12px | 16px |
| Border | 1px solid var(--border-subtle) OR var(--shadow-sm) | same |
| Background | white (light) / var(--surface-secondary-dark) | same |
| Body padding | var(--space-4) | var(--space-4) |
| Media aspect ratio | 4:3 (all lot images) | 4:3 |
| Media height | 180px | 200px (full card width) |
| Title font | type-title-3 (18px / 600) | same |
| Subtitle font | type-body (16px / 400), var(--text-secondary) | same |
| Meta font | type-caption-1 (12px / 500), var(--text-tertiary) | same |
| Footer | border-top 1px var(--border-subtle), padding var(--space-3) var(--space-4) | same |
| Hover transition | transform var(--duration-moderate) ease, box-shadow var(--duration-moderate) ease | N/A (no hover on mobile) |
| Grid gap | var(--space-6) | 12px |

**Usage Rules:**
- Use vertical cards in grid layouts (2-4 columns depending on breakpoint).
- Use horizontal cards in list views for scanning efficiency.
- Always include alt text for vehicle images.
- Max 2 actions per card (primary + secondary). Do NOT overload with actions.
- Badge uses both color AND text (e.g., "Live Auction" not just a green dot).

**Accessibility:**
- Card as `<article>` or `role="group"` with `aria-label` summarizing content.
- If entire card is clickable: `<a>` wrapping card with accessible name.
- Images: `alt` text describing vehicle (e.g., "2019 Toyota Camry SE, front-left view, minor front damage").
- Badge: include text content, not just color.

**Copy Rules:**
- Title: max 60 chars, truncate with ellipsis (…) + tooltip for full text.
- Badge overlay: 1–2 words — "Live", "Buy it now", "Sold".
- Metadata: use glossary terms (Lot, Sale date, Damage type).
- Monospace for lot numbers, VIN, bid amounts.

---

### 4.2 Table

**Anatomy:**
1. `table-container` — Scrollable wrapper
2. `table-header` — Fixed header row
3. `table-header-cell` — Column header (with optional sort indicator)
4. `table-body` — Scrollable data rows
5. `table-row` — Individual data row
6. `table-cell` — Individual data cell
7. `table-footer` — Summary row or pagination

**Variants:**
- Default (standard data table)
- Sortable (clickable headers with sort arrows)
- Dense (reduced row height for high-density views)
- Responsive (converts to stacked cards on mobile)

**States:**

| Element | Default | Hover | Selected | Sorted |
|---------|---------|-------|----------|--------|
| Header cell | var(--bg-secondary) bg, var(--text-primary), weight 600 | — | — | var(--interactive-primary) text + sort arrow |
| Body row | white bg | var(--bg-secondary) bg | var(--color-blue-200) bg | — |
| Alternating row | var(--bg-secondary) bg (optional) | var(--color-neutral-200) bg | var(--color-blue-200) bg | — |
| Cell | var(--text-secondary) text | — | — | — |

**Specs:**

| Property | Value |
|----------|-------|
| Header height | 44px |
| Header padding-x | var(--space-3) |
| Header font | type-subheadline (14px / 600), var(--text-primary) |
| Cell min-height | 48px |
| Cell padding-x | var(--space-3) |
| Cell font | type-body (16px / 400), var(--text-secondary) |
| Monospace cells (VIN, Lot#, Price) | JetBrains Mono, 15px |
| Row border | 1px solid var(--border-subtle) |
| Sort icon | 12px, var(--color-neutral-300) (unsorted) / var(--interactive-primary) (sorted) |
| Sticky first column | optional, with subtle shadow on scroll |

**Responsive Behavior:**
- Desktop: Full table with all columns.
- Tablet: Hide lower-priority columns, enable horizontal scroll.
- Mobile: Convert to stacked card layout, or horizontal scroll with sticky first column.

**Accessibility:**
- Semantic `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, `<td>`.
- Sortable headers: `aria-sort="ascending|descending|none"`.
- `aria-label` on table describing its content.
- Row selection: `aria-selected="true"` on selected rows.
- Caption: `<caption>` with table description (can be visually hidden).

**Copy Rules:**
- Headers: short noun/noun phrase — "Sale date", "Current bid", "Damage type". Max 20 chars, 1–3 words.
- No verbs in headers.
- Null values: em dash "—" — never "N/A", "null", "none", or blank.
- Monospace for VIN, lot numbers, bid amounts, timestamps.
- Truncation: ellipsis (…) after last full word, tooltip with full value.

---

### 4.3 List

**Anatomy:**
1. `list-container` — Outer wrapper (`<ul>` or `<ol>`)
2. `list-item` — Individual row
3. `list-item-leading` — Icon, avatar, or thumbnail (left)
4. `list-item-content` — Title + subtitle text (center)
5. `list-item-trailing` — Metadata, badge, or action (right)
6. `list-divider` — Separator between items (optional)

**Variants:**

| Variant | Leading | Content | Trailing | Min Height |
|---------|---------|---------|----------|-----------|
| Simple | none | Title only | Chevron | 48px |
| Two-line | Icon (24px) | Title + subtitle | Metadata text | 64px |
| Three-line | Thumbnail (48px) | Title + subtitle + description | Badge or action | 80px |
| Interactive | Checkbox or radio | Title + subtitle | — | 48px |

**States:**

| State | Background |
|-------|-----------|
| Default | transparent |
| Hover | var(--bg-secondary) |
| Active | var(--color-neutral-200) |
| Selected | var(--color-blue-200) |

**Specs:**

| Property | Value |
|----------|-------|
| Padding-x | var(--space-4) |
| Leading icon | 24px, var(--text-tertiary) |
| Leading thumbnail | 48px x 48px, var(--radius-md) |
| Title font | type-body (16px / 500) |
| Subtitle font | type-caption-1 (12px / 400), var(--text-tertiary) |
| Divider | 1px solid var(--border-subtle), inset from leading edge |
| Mobile list item min-height | 44px |
| Mobile separator | 1px, inset 16px from left |
| Mobile chevron | 12px, var(--color-neutral-300), right-aligned |

**Usage Rules:**
- Use Simple lists for navigation menus and settings.
- Use Two-line for notification lists and search results.
- Use Three-line for detailed item lists (vehicles, orders).
- Interactive variant wraps checkbox/radio for multi-select lists.

**Accessibility:**
- Semantic `<ul>` / `<ol>` with `<li>` items.
- Interactive items: `role="button"` or wrapped in `<a>`.
- Leading icons: `aria-hidden="true"` if decorative.

---

### 4.4 Stat / KPI

**Anatomy:**
1. `stat-container` — Wrapper (often within a Stat Card)
2. `stat-label` — What is being measured
3. `stat-value` — The numeric value
4. `stat-trend` — Up/down arrow with percentage change
5. `stat-period` — Time range context

**Variants:** Single variant with optional trend direction.

**States:**

| Trend | Arrow Direction | Color |
|-------|----------------|-------|
| Up (positive) | Up arrow | var(--feedback-success-icon) |
| Down (negative) | Down arrow | var(--feedback-error-icon) |
| Neutral | No arrow | var(--text-tertiary) |

**Specs:**

| Property | Value |
|----------|-------|
| Value font | type-display-sm or type-headline (responsive), var(--text-primary), weight 800 |
| Value monospace (financial) | JetBrains Mono |
| Label font | type-caption-1 (12px / 500), var(--text-tertiary), uppercase, 0.08em tracking |
| Trend font | type-subheadline (14px / 600) |
| Period font | type-caption-2 (11px), var(--text-tertiary) |
| Gap (value to trend) | var(--space-2) |
| Gap (value to label) | var(--space-1) |

**Usage Rules:**
- Use in dashboard widget rows and auction summary cards.
- Financial values should always use monospace (JetBrains Mono).
- Always provide a period/context label (e.g., "Last 30 days").

**Accessibility:**
- Use semantic heading for the label when in a card.
- Trend indicators: include text direction ("up 12%") not just arrow icon.
- `aria-label` on stat container describing the complete stat.

---

### 4.5 Badge / Tag

**Anatomy:**
1. `badge-container` — Pill-shaped wrapper
2. `badge-icon` — Optional leading icon (dot or semantic icon)
3. `badge-label` — Text content

**Variants (by semantic type):**

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|----------|
| Info | var(--feedback-info-bg) | var(--feedback-info-text) | none | General metadata |
| Success | var(--feedback-success-bg) | var(--feedback-success-text) | none | "Live", "Active", "Approved" |
| Warning | var(--feedback-warning-bg) | var(--feedback-warning-text) | none | "Ending Soon", "Pending" |
| Error | var(--feedback-error-bg) | var(--feedback-error-text) | none | "Closed", "Rejected", "Expired" |
| Neutral | var(--bg-secondary) | var(--text-secondary) | none | Default metadata tags |
| Accent | var(--interactive-accent-surface) | var(--color-orange-900) | none | "Featured", "Promoted" |

**Sizes:**

| Size | Height | Padding-x | Font Size | Icon Size |
|------|--------|-----------|-----------|-----------|
| SM | 20px | 6px | 11px / 500 | 10px |
| MD | 24px | 8px | 12px / 500 | 12px |
| LG | 28px | 10px | 13px / 600 | 14px |

**Specs:**

| Property | Value |
|----------|-------|
| Border-radius | var(--radius-pill) |
| Icon-to-label gap | var(--space-1) |
| Dot indicator | 6px circle, matching variant color |

**Usage Rules:**
- Always use text + icon/dot for status badges — never color alone.
- Keep badge text short (1-2 words maximum).
- Do NOT use badges for interactive elements — they are display-only.

**Accessibility:**
- Include descriptive text, not just color.
- `aria-label` if badge text is abbreviated or unclear.
- Status dot: `aria-hidden="true"` (text conveys the state).

**Copy Rules:**
- 1–2 words max, 15 chars max.
- Status badges: past participle or adjective — "Sold", "Awarded", "Active", "Upcoming", "Ended".
- Category tags: nouns — "Clean title", "Salvage", "Flood damage".
- Count badges: numerals only — "3", "12", "99+".
- Sentence case (capitalize first word only).

---

### 4.6 Chart

**Anatomy:**
1. `chart-container` — Responsive wrapper
2. `chart-canvas` — Drawing area (Line, Bar, Donut, Area)
3. `chart-axis-labels` — X and Y axis labels
4. `chart-grid-lines` — Background reference lines
5. `chart-tooltip` — Data point detail on hover
6. `chart-legend` — Series color key

**Chart Types:** Line, Bar, Donut, Area

**Color Sequence (multi-series):**
1. var(--interactive-primary)
2. var(--color-blue-600-dark) — light blue (#5B8EF0)
3. var(--color-blue-900) — dark navy
4. var(--feedback-warning-border) — amber
5. var(--feedback-success-icon) — green
6. var(--text-tertiary) — gray

**Specs:**

| Property | Value |
|----------|-------|
| Axis labels | type-caption-1, var(--text-tertiary) |
| Grid lines | 1px, var(--border-subtle), dashed |
| Tooltip bg | white |
| Tooltip radius | var(--radius-lg) |
| Tooltip shadow | var(--shadow-md) |
| Tooltip title | type-subheadline (14px / 600) |
| Tooltip value | type-body (16px / 500) |
| Legend | type-caption-1, 12px color swatch, var(--space-4) gap between items |
| Min chart height | 200px (mobile), 300px (desktop) |

**Usage Rules:**
- Reduce data point density on mobile; maintain touch target on interactive points.
- All colors must be distinguishable by pattern/shape, not just hue.

**Accessibility:**
- Provide `<table>` fallback for screen readers with the same data.
- Interactive tooltips keyboard-accessible via arrow keys.
- All chart colors should be supplemented with patterns for colorblind users.

---

## 5. Media

### 5.1 Image Container

**Anatomy:**
1. `image-container` — Aspect-ratio wrapper
2. `image-element` — The `<img>` or `<picture>` element
3. `image-overlay` — Optional gradient or badge overlay
4. `image-placeholder` — Skeleton or icon shown before load
5. `image-gallery-indicator` — Dot pagination or count badge for multi-image

**Variants:**

| Variant | Aspect Ratio | Use Case |
|---------|-------------|----------|
| Vehicle Hero | 4:3 | Detail page main image |
| Vehicle Thumbnail | 4:3 | Search result cards |
| Document | Auto (natural) | Title scans, damage reports |
| Avatar | 1:1 (circle) | User profiles |
| Gallery | 4:3 + thumbnails | Vehicle detail image carousel |

**States:**

| State | Behavior |
|-------|----------|
| Loading | Skeleton shimmer animation |
| Loaded | Image visible, placeholder removed |
| Error | var(--bg-secondary) bg + "Image unavailable" text (type-caption-1, var(--text-tertiary)) |

**Specs:**

| Property | Value |
|----------|-------|
| Border-radius | var(--radius-lg) standard, 50% avatar |
| Object-fit | cover (vehicles), contain (documents) |
| Placeholder | var(--bg-secondary) bg + centered car icon (24px, var(--color-neutral-300)) |
| Overlay gradient | linear-gradient(transparent 60%, rgba(0,0,0,0.6) 100%) |
| Gallery dots | 8px, white fill (active), white 50% (inactive), 8px gap |
| Gallery arrows | 36px circle, white 90% bg, var(--shadow-sm), centered chevron (16px, stroke-width 2), 12px from edges |
| Lazy loading | `loading="lazy"` on all below-fold images |

**Usage Rules:**
- All lot images use 4:3 aspect ratio consistently.
- Gallery arrows: dark mode uses var(--color-neutral-900) at 90% bg.
- Always use `loading="lazy"` for images below the fold.

**Accessibility:**
- Descriptive `alt` text required for all vehicle images.
- Decorative images: `alt=""`.
- Gallery: `aria-label="Vehicle photo gallery, image 1 of 12"`, arrow key navigation.
- `role="img"` on container when using CSS background-image.

---

### 5.2 Avatar

**Anatomy:**
1. `avatar-container` — Circular wrapper
2. `avatar-image` — Profile photo
3. `avatar-fallback` — Initials on colored background (when no image)
4. `avatar-badge` — Status dot overlay (online, verified)

**Sizes:**

| Size | Diameter | Font (Fallback) | Badge Size |
|------|----------|-----------------|-----------|
| XS | 24px | 10px / 700 | 8px |
| SM | 32px | 12px / 700 | 8px |
| MD | 40px | 14px / 700 | 10px |
| LG | 56px | 18px / 700 | 12px |
| XL | 80px | 24px / 700 | 14px |

**States:**

| State | Appearance |
|-------|-----------|
| Image loaded | Profile photo displayed |
| Fallback | Initials on colored background |
| With badge | Status dot overlay at bottom-right |

**Specs:**

| Property | Value |
|----------|-------|
| Shape | circle (border-radius: 50%) |
| Border | 2px solid white (when on colored background) |
| Fallback bg | var(--interactive-primary) (A-M), var(--interactive-primary-hover) (N-Z) |
| Fallback text | white, centered |
| Badge position | bottom-right, overlapping edge |
| Badge colors | var(--feedback-success-icon) (online), var(--interactive-primary) (verified), var(--color-neutral-300) (offline) |
| Badge border | 2px solid white (to separate from avatar) |

**Usage Rules:**
- Use XS/SM in compact lists and comments.
- Use MD in header navigation and notifications.
- Use LG/XL on profile pages and settings.
- Always provide fallback initials — never show an empty circle.

**Accessibility:**
- `alt="[User Name]'s profile photo"` or `alt=""` if name displayed adjacent.
- Fallback initials: `aria-label="[User Name]"` on container.
- Badge: `aria-label` describing status (e.g., "Online").

---

### 5.3 Video Player

**Anatomy:**
1. `video-container` — 16:9 aspect-ratio wrapper
2. `video-element` — `<video>` or embedded iframe
3. `video-poster` — Thumbnail before play
4. `video-play-button` — Large centered play overlay
5. `video-controls` — Custom control bar (play/pause, scrubber, volume, fullscreen)
6. `video-caption-toggle` — Closed caption on/off

**Variants:** Single variant.

**States:**

| State | Behavior |
|-------|----------|
| Poster | Thumbnail visible, play button overlay centered |
| Playing | Video active, controls fade after 3s inactivity |
| Paused | Controls visible, play button overlay |
| Controls Visible | Full control bar visible on hover/tap |

**Specs:**

| Property | Value |
|----------|-------|
| Aspect ratio | 16:9 |
| Border-radius | var(--radius-xl) |
| Play button | 64px circle, white bg @ 90%, var(--interactive-primary) triangle |
| Play hover | scale(1.1), var(--duration-moderate) ease |
| Controls bar height | 48px |
| Controls gradient | transparent to rgba(0,0,0,0.6) |
| Scrubber track | 4px, white @ 30% |
| Scrubber fill | var(--interactive-primary) |
| Scrubber thumb | 14px white circle (appears on hover) |
| Volume/fullscreen icons | 24px, white |

**Usage Rules:**
- No autoplay with audio. Ever.
- Always provide a poster image.
- Closed captions required for all informational video content.

**Accessibility:**
- Closed captions: `<track kind="captions">` element.
- Keyboard: Space/Enter toggles play, arrows seek, M mutes, F fullscreen.
- `aria-label="Video player: 2019 Toyota Camry walkaround"`.
- No autoplay with audio.

---

## 6. Patterns

### 6.1 Page Templates

#### Landing Page

| Section | Grid Span | Key Components |
|---------|-----------|---------------|
| Hero | 12 cols | Display Large heading, search bar, background image/gradient |
| Value Props | 4+4+4 cols | Stat cards with icons |
| Featured Vehicles | 12 cols | Horizontal card carousel (4 visible on desktop) |
| How It Works | 3+3+3+3 cols | Step indicators + icon cards |
| CTA Banner | 12 cols | Title 1 + Primary button, var(--color-blue-900) gradient bg |
| Footer | 12 cols, 4-col sub-grid | Nav links, legal, social icons |

Spacing: var(--space-16) between major sections (desktop), var(--space-10) on mobile.

#### Search Results

**Structure:** Header + filter sidebar (left, 280px) + results grid (right) + pagination

| Area | Components |
|------|-----------|
| Filter sidebar | Checkbox groups, range sliders, dropdowns |
| Sort/View bar | Sort dropdown + grid/list view toggle |
| Results grid | Vertical cards (2-4 cols) or horizontal cards (list view) |
| Active filters | Horizontal chip row above results with individual clear (X) + "Clear all" |
| Pagination | Page numbers + prev/next arrows |

#### Vehicle Detail

**Structure:** Hero image gallery + specs grid + bidding panel + seller info

| Area | Components |
|------|-----------|
| Gallery | Image container (Gallery variant) — hero + thumbnails |
| Specs | Two-column grid of label/value pairs (type-subheadline / type-body) |
| Bidding panel | Current bid (Stat), timer, bid input + Primary button, bid history list |
| Seller info | Avatar + name + rating + "Contact" secondary button |

#### Dashboard (Authenticated)

| Area | Components |
|------|-----------|
| Sidebar | Navigation list: My Bids, Watchlist, Won Items, Payments, Settings |
| Top bar | Breadcrumbs + page title + date range selector |
| Widget row 1 | 4 Stat/KPI cards (active bids, watching, won, total spent) |
| Widget row 2 | Auction calendar table (8 cols) + Upcoming auctions list (4 cols) |
| Widget row 3 | Recent activity list (full-width) |

Spacing: var(--space-6) between widgets, var(--space-8) between widget rows.

#### Authentication

**Structure:** Single-column layout, max-width 400px, vertically centered.

| Area | Components |
|------|-----------|
| Header | Logo (centered) |
| Form | Email + password text fields + "Sign In" primary button |
| Links | "Forgot password?" tertiary link, SSO buttons separated by "or" divider |
| Errors | Inline per field + summary alert at top |

#### Settings

| Section | Components |
|---------|-----------|
| Profile | Avatar (XL) + text fields (name, email, phone) |
| Notifications | Toggle switches grouped by category |
| Payment Methods | Cards in a list with add/edit/delete actions |
| Security | Password change form, 2FA toggle |
| Preferences | Dropdowns (timezone, language, currency), radio groups (default view) |

Each section is a card with Title 2 header. Save button fixed at bottom on mobile or per-section on desktop. Unsaved changes trigger a warning banner.

#### Checkout / Payment Flow

**Structure:** Step indicator (3 steps) + form content + order summary sidebar (right, 4 cols)

| Step | Content |
|------|---------|
| 1. Review | Vehicle card (horizontal) + lot details + fees breakdown table |
| 2. Payment | Payment method selection (radio cards) + billing address form |
| 3. Confirm | Order summary + terms checkbox + "Confirm Payment" Primary button |

Order summary sidebar (sticky on desktop, collapsed accordion on mobile):
- Vehicle name + thumbnail
- Winning bid amount
- Buyer premium
- Fees itemized
- Total: type-title-1, var(--color-blue-900)

---

### 6.2 User Flows

#### Onboarding Flow
1. **Welcome screen** — Brand hero + "Get Started" CTA button
2. **Account type** — Radio card selection: personal vs. business
3. **Basic info** — Form: name, email, phone, password (inline validation)
4. **Verification** — Document upload: ID + proof of address
5. **Membership selection** — Pricing cards comparing tiers
6. **Deposit** — Payment form with deposit amount selector
7. **Confirmation** — Success alert + "Start browsing" CTA + checklist

Pattern: Step indicator throughout. "Back" (tertiary) + "Continue" (primary) in footer. Progress auto-saves.

#### Bidding Flow
1. **Search** — Find vehicle via search/filter
2. **Select** — Review vehicle detail, specs, condition
3. **Confirm** — Modal confirmation: "Place bid of $X?"
4. **Receipt** — Success toast + updated bid panel

#### Watchlist Flow
- **Add:** Heart icon toggle (outline to filled, spring animation)
- **Manage:** List view with swipe actions (mobile) or hover actions (desktop)
- **Notify:** Toast confirmation on add/remove

#### Authentication Flow
- **Sign In:** Email + password + primary button + optional SSO
- **Sign Up:** Redirects to onboarding flow
- **Password Reset:** Email field + "Send Reset Link" + confirmation + reset form + success

---

### 6.3 Feedback Patterns

#### Success Pattern
- **Immediate:** Toast appears with green checkmark
- **Contextual:** Component updates in-place (bid amount refreshes, watchlist icon fills)
- **Page-level:** Success alert banner at top for major completions
- **Transition:** Button briefly shows checkmark before returning to default

#### Error Pattern
- **Field-level:** Inline error text below input, border turns var(--border-error), icon appears
- **Form-level:** Error alert banner above form listing all issues
- **Network:** Toast with retry action ("Connection lost. Retry")
- **Fatal:** Full-page error with illustration, message, and "Go home" button

#### Loading Pattern
- **< 300ms:** No indicator (feels instant)
- **300ms - 2s:** Skeleton screen replacing content areas
- **2s - 10s:** Spinner with "Loading..." text
- **> 10s:** Progress bar with estimated time or step description
- **Background tasks:** Toast notification when complete ("Your report is ready")

---

### 6.4 Empty States

| Context | Icon | Headline | Body | Action |
|---------|------|----------|------|--------|
| No search results | Magnifying glass (48px) | "No vehicles match your filters" | "Try adjusting your search criteria or clearing some filters." | "Clear all filters" (secondary) |
| Empty watchlist | Heart (48px) | "Your watchlist is empty" | "Save vehicles you're interested in to keep track of upcoming auctions." | "Browse vehicles" (primary) |
| No bid history | Gavel (48px) | "No bids yet" | "Once you place your first bid, it'll appear here." | "Find vehicles" (primary) |
| Error loading | Warning triangle (48px) | "Something went wrong" | "We couldn't load this content. Please try again." | "Retry" (primary) |

**Empty State Specs:**

| Property | Value |
|----------|-------|
| Container | centered, max-width 400px |
| Icon | 64px (icon-empty), var(--color-neutral-300) |
| Headline | type-title-2 (22px / 700), var(--text-primary) |
| Body | type-body (16px / 400), var(--text-tertiary), text-align center |
| Action button | margin-top var(--space-6) |
| Overall padding | var(--space-12) vertical |

**Rules:**
- Always include: icon + headline + description + action button.
- Tone: helpful and encouraging, never blaming the user.
- Always provide a clear next step.

---

## 7. Animation & Motion

> Motion is functional, not decorative. Every animation serves a purpose — confirming an action, directing attention, or providing spatial context. All animations respect `prefers-reduced-motion`.

### 7.1 Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --duration-instant | 50ms | Hover color changes, micro-feedback |
| --duration-fast | 100ms | Checkbox, toggle, button press |
| --duration-normal | 150ms | Button states, link underlines, dropdowns, tooltips |
| --duration-moderate | 200ms | Modals, page transitions, sidebar expand, standard state changes |
| --duration-slow | 300ms | Complex transitions, card grid stagger, tab switches |
| --duration-slower | 500ms | Skeleton shimmer, complex delight animations |

### 7.2 Easing

| Token | Value | Usage |
|-------|-------|-------|
| --ease-default | ease | General transitions |
| --ease-in | ease-in | Exit animations |
| --ease-out | ease-out | Enter animations |
| --ease-in-out | ease-in-out | State changes |
| --ease-spring | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Delight — overshoot for playful feel |
| --ease-enter | cubic-bezier(0, 0, 0.2, 1) | Elements appearing |
| --ease-exit | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |
| --ease-standard | cubic-bezier(0.25, 0.1, 0.25, 1) | Default for most transitions |

### 7.3 Micro-Interactions

#### Card Hover Lift
- **Trigger:** Mouse hover on vehicle card
- **Effect:** `translateY(-2px)` + shadow-md to shadow-lg
- **Duration:** var(--duration-moderate) ease
- **Purpose:** Confirms the card is interactive

#### Button Press
- **Trigger:** `mousedown` / `touchstart`
- **Effect:** `scale(0.97)` + optional ripple from press point
- **Duration:** var(--duration-fast) ease
- **Purpose:** Tactile feedback simulating physical press

#### Toggle Slide
- **Trigger:** Click/tap on toggle switch
- **Effect:** Thumb slides with spring overshoot, background color cross-fades
- **Duration:** var(--duration-slow) var(--ease-spring)
- **Haptic:** Light impact on mobile (iOS UIImpactFeedbackGenerator.light)

### 7.4 Delight Animations

#### Watchlist Heart Fill
- **Trigger:** Adding vehicle to watchlist
- **Effect:** Heart pops with spring: scale(1 to 1.3 to 0.9 to 1.15 to 1), outline to filled
- **Duration:** var(--duration-slower) var(--ease-spring)
- **Reverse:** Subtle shrink scale(1 to 0.8 to 1) on removal
- **Haptic:** Medium impact on add, light on remove

#### Success Checkmark Draw
- **Trigger:** Bid placed, payment confirmed, action completed
- **Effect:** SVG circle draws (stroke-dashoffset), then checkmark path draws with staggered delay
- **Duration:** Circle 400ms ease, check 300ms ease with 250ms delay

#### Bid Price Pulse
- **Trigger:** Competing bid on a watched vehicle
- **Effect:** Price text pulses: scale(1 to 1.08 to 1 to 1.04 to 1) with color flash to brand blue
- **Duration:** 600ms var(--ease-spring)

#### Counter Tick
- **Trigger:** Stat number updates (active bids, watchlist count)
- **Effect:** Old number slides out upward, new number slides in from below
- **Duration:** 400ms ease

#### Toast Notification
- **Enter:** translateY(16px to 0) + fade in, 250ms ease-out
- **Exit:** translateY(0 to 8px) + fade out, 200ms ease-in
- **Auto-dismiss:** 5 seconds, or swipe on mobile

#### Loading Dots
- **Trigger:** Inline loading states (auction connecting, bid processing)
- **Effect:** Three dots pulse in sequence: scale(0.6 to 1) + opacity(0.4 to 1)
- **Duration:** 1.4s infinite, 0.16s stagger between dots

### 7.5 State Transitions

| Component | Enter / Open | Exit / Close | Duration |
|-----------|-------------|-------------|----------|
| Modal | Backdrop fade 0 to 0.5, panel scale(0.95 to 1) + fade | Reverse — panel first, then backdrop | var(--duration-moderate) ease-out / var(--duration-normal) ease-in |
| Bottom Sheet | Slide up + backdrop fade | Swipe down or fade out | 400ms cubic-bezier(0.32, 0.72, 0, 1) |
| Dropdown Menu | Fade + translateY(-4px to 0) | Fade out | var(--duration-normal) ease-out / var(--duration-fast) ease-in |
| Alert Banner | Slide down + fade + height expand | Fade + height collapse | var(--duration-moderate) ease-out / var(--duration-moderate) ease-in |
| Toast | translateY(16px to 0) + fade | translateY(0 to 8px) + fade | 250ms ease-out / 200ms ease-in |
| Card Grid Load | Staggered fade + translateY(12px to 0) | N/A (instant) | var(--duration-slow) ease-out, 50ms stagger |
| Skeleton to Content | Cross-fade shimmer to real content | N/A | var(--duration-moderate) ease-out |
| Page Navigation | New page slides in from right | Current page slides out left | var(--duration-slow) ease (mobile nav stack) |
| Tab Switch | Content cross-fades, underline slides | Cross-fade out | var(--duration-moderate) ease |

### 7.6 Reduced Motion

All animations must respect `@media (prefers-reduced-motion: reduce)`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

When reduced motion is active:
- State changes happen instantly (no transitions).
- Delight animations (heart pop, checkmark draw, price pulse) are removed entirely.
- Loading indicators switch to static progress bars.
- Toast notifications appear/disappear without sliding.
- Spring overshoot is disabled.
- Skeleton shimmer loops stop.
- Replace all motion with opacity fade (150ms) as maximum.

**Rules — When to Animate:**
- DO: Action confirmation, state changes, attention direction, loading feedback, spatial context.
- DO NOT: Decoration, delays that block interaction, scrolljacking, repetitive infinite loops (except spinners/shimmer), form field interactions (must be instant).
- Duration ceiling: 500ms for UI interactions. Nothing longer except skeleton shimmer.

---

## 8. Mobile Platform

> Vallejo Mobile is a complete adaptation of the desktop system for iOS, Android, and mobile web. Same palette, same principles — but platform-optimized sizing, spacing, navigation, and interaction patterns.

### 8.1 Philosophy

Mobile is not "desktop made smaller." It is a separate platform adaptation using iOS HIG-aligned patterns.

| Principle | Desktop | Mobile |
|-----------|---------|--------|
| Primary input | Mouse + keyboard | Touch (thumb) |
| Touch targets | 40px default | 44px minimum, 48px preferred |
| Information density | High — dense tables, multi-column | Low — single column, progressive disclosure |
| Navigation | Header + sidebar | Bottom tab bar + navigation stack |
| Content interaction | Hover + click | Tap + swipe + pull-to-refresh |
| Modals | Centered floating panels | Bottom sheets with drag handles |
| Type base | 16px body | 17px body (iOS HIG standard) |

### 8.2 Key Differences

| Property | Desktop | Mobile |
|----------|---------|--------|
| Body font size | 16px | 17px (iOS HIG) |
| Button height MD | 40px | 44px |
| Button height LG | 48px | 50px |
| Input height | 44px | 48px |
| Input font size | 16px | 16px (prevents iOS zoom) |
| Input padding-x | 12px | 16px |
| Input border-radius | var(--radius-lg) | 10px |
| Card border-radius | var(--radius-xl) / 12px | 16px |
| Card padding | var(--space-4) | var(--space-4) |
| Card grid gap | var(--space-6) | 12px |
| Modal style | Centered overlay | Bottom sheet (20px top radius, drag handle) |
| Modal max-height | 80vh | 90vh |
| Navigation | Header + sidebar | Header + bottom tab bar |
| Touch target min | 44px | 48px preferred |
| Page margin | var(--space-20) / 80px | var(--space-4) / 16px |
| Section gap | 48-64px | 24px |
| Component gap | 16-24px | 12px |
| Toggle track | 48x28px | 51x31px (iOS standard) |
| Toggle thumb | 22px | 27px |
| No XS button | XS available (28px) | No XS on mobile — too small for touch |

### 8.3 Mobile Type Scale

Based on iOS Human Interface Guidelines, adapted with Inter.

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Large Title | 34px | 700 | 41px | 0.01em | Top of scrollable views |
| Title 1 | 28px | 700 | 34px | 0.01em | Page headings |
| Title 2 | 22px | 700 | 28px | 0em | Section headers |
| Title 3 | 20px | 600 | 25px | 0em | Card headers, subsections |
| Headline | 17px | 600 | 22px | -0.005em | Bold labels in list cells |
| Body | 17px | 400 | 22px | -0.005em | Default mobile body text |
| Callout | 16px | 400 | 21px | 0em | Supporting text |
| Subheadline | 15px | 400 | 20px | 0em | Secondary labels |
| Footnote | 13px | 400 | 18px | 0em | Timestamps, metadata |
| Caption 1 | 12px | 400 | 16px | 0em | Tertiary info, badges |
| Caption 2 | 11px | 400 | 13px | 0.01em | Tab bar labels |

Key differences: Body is 17px (not 16px). No Display styles — Large Title (34px) is maximum. Tighter line heights for small screens.

### 8.4 Mobile Component Overrides

#### Button (Mobile)

| Size | Height | Padding-x | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| SM | 36px | 14px | 14px / 500 | 8px |
| MD | 44px | 20px | 16px / 500 | 10px |
| LG | 50px | 28px | 17px / 500 | 12px |
| XL | 56px | 32px | 18px / 600 | 14px |

Default is MD (44px) — meets WCAG 2.5.5 touch target. Full-width buttons for primary CTAs on form screens.

#### Text Input (Mobile)

| Property | Value |
|----------|-------|
| Height | 48px |
| Font size | 16px (prevents iOS auto-zoom) |
| Padding-x | 16px |
| Border-radius | 10px |
| Label size | 15px / 600 |

#### Card (Mobile)

| Property | Value |
|----------|-------|
| Border-radius | 16px |
| Body padding | 16px |
| Grid gap | 12px |
| Media height | 200px (full card width) |

#### Modal to Bottom Sheet (Mobile)

| Property | Value |
|----------|-------|
| Border-radius | 20px top, 0 bottom |
| Drag handle | 36px x 4px pill, var(--color-neutral-300), centered, 8px from top |
| Max height | 90vh |
| Animation | Slide up 400ms cubic-bezier(0.32, 0.72, 0, 1) |
| Dismiss | Swipe down 150px or tap backdrop |
| Safe area | Content clears env(safe-area-inset-bottom) |

#### List Item (Mobile)

| Property | Value |
|----------|-------|
| Min height | 44px |
| Padding-x | 16px |
| Separator | 1px, inset 16px from left |
| Chevron | 12px, var(--color-neutral-300), right-aligned |
| Swipe actions | 80px reveal width |

### 8.5 Navigation Patterns

#### Bottom Tab Bar
Primary navigation on mobile. Fixed at the bottom edge.

| Property | Value |
|----------|-------|
| Height | 56px + env(safe-area-inset-bottom) |
| Background | white (light) / var(--surface-primary-dark) (dark) |
| Border-top | 0.5px solid var(--color-neutral-200) |
| Icon size | 24px, centered |
| Label | 10px / 500, 2px below icon |
| Active | var(--interactive-primary) icon + label |
| Inactive | var(--text-tertiary) icon + label |
| Max items | 5 |
| Touch target | 48x48px per item |

#### Navigation Bar (iOS-style top bar)

| Property | Value |
|----------|-------|
| Height | 44px (excludes status bar / safe area) |
| Title | 17px / 600, centered |
| Back button | chevron-left (24px) + "Back" label, left-aligned |
| Right actions | up to 2 items, 44px touch targets |
| Background | system blur or solid white/dark |
| Large title mode | 34px / 700, left-aligned, collapses to inline (17px) on scroll |

#### Search Bar (Mobile)

| Property | Value |
|----------|-------|
| Height | 36px (compact) |
| Border-radius | 10px |
| Background | var(--bg-secondary) light / var(--color-neutral-200) dark |
| Icon | 16px magnifying glass, var(--text-tertiary) |
| Placeholder | 16px, var(--text-tertiary) |
| Focus behavior | Expands to full width, cancel button appears right |

### 8.6 Gestures

| Gesture | Threshold | Action | Feedback |
|---------|-----------|--------|----------|
| Pull-to-refresh | 64px pull | Trigger refresh | Spinner below nav + haptic |
| Swipe left (card/list) | 80px reveal | Destructive action (remove) | var(--feedback-error-bg) background |
| Swipe right (card/list) | 80px reveal | Positive action (archive) | var(--feedback-success-bg) background |
| Full swipe | 100% width | Execute action | Haptic confirmation |
| Bottom sheet dismiss | 150px down swipe | Close sheet | Sheet slides away |
| Long press | 500ms | Context menu | Haptic feedback |
| Swipe from left edge | Edge gesture | Navigate back (iOS style) | Page transition |
| Pinch (vehicle images) | Pinch gesture | Zoom in gallery | Smooth zoom |

### 8.7 Mobile Accessibility

| Requirement | Desktop | Mobile |
|-------------|---------|--------|
| Touch target | 40px (mouse) | 44px minimum, 48px preferred |
| Target spacing | N/A | 8px between adjacent targets |
| Haptic feedback | N/A | On toggles, destructive actions, bid confirmation |
| Dynamic Type | N/A | Support iOS Dynamic Type / Android sp scaling |
| VoiceOver hints | aria-label | accessibilityHint for swipe actions |
| Reduce Motion | CSS prefers-reduced-motion | Also disable parallax, haptics |

#### Font Scaling Support

| System Setting | Scale | Body Text |
|----------------|-------|-----------|
| Extra Small | 0.82x | 14px |
| Small | 0.88x | 15px |
| Default | 1.0x | 17px |
| Large | 1.12x | 19px |
| Extra Large | 1.24x | 21px |
| XXL (Accessibility) | 1.41x | 24px |
| XXXL (Accessibility) | 1.65x | 28px |

Components must not clip or overlap at 1.65x scaling. Use flexible heights and `min-height` instead of fixed `height`.

#### Safe Areas

All mobile layouts must respect device safe areas:

```css
/* Bottom nav and floating CTAs */
padding-bottom: calc(16px + env(safe-area-inset-bottom));

/* Full-screen modals */
padding-top: env(safe-area-inset-top);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`

#### Platform Decision Map

| Context | System |
|---------|--------|
| Desktop web (1024px+) | Desktop |
| Tablet web landscape (1024px+) | Desktop |
| Tablet web portrait (768-1023px) | Desktop with responsive adjustments |
| Mobile web (< 768px) | **Mobile** |
| iOS native app | **Mobile** |
| Android native app | **Mobile** |
| iPad native app | Desktop (iPad has mouse/trackpad support) |
| Email templates | Desktop (reduced) |
| PWA on phone | **Mobile** |

---

## Appendix: Component Inventory

| Category | Component | Variants | States |
|----------|-----------|----------|--------|
| **Navigation** | Header | 4 (Default, Auth, Auction Live, Compact) | Default, Scrolled, Mobile Open |
| | Tab Bar | 1 | Default, Active, Pressed, Badge |
| | Sidebar | 3 (Nav, Filter, Collapsible) | Expanded, Collapsed, Hidden, Section Open/Closed |
| | Breadcrumbs | 1 | Default, Hover, Active, Current |
| **Input** | Button | 6 variants x 5 sizes | Default, Hover, Active, Disabled, Loading, Focus |
| | Text Field | 1 | Default, Hover, Focus, Filled, Disabled, Error, Success, Read-only |
| | Dropdown | 3 (Single, Multi, Searchable) | Default, Hover, Focus, Open, Has Value, Disabled, Error |
| | Toggle Switch | 1 | Off, On, Hover (both), Disabled (both), Focus |
| | Checkbox | 1 | Unchecked, Checked, Indeterminate, Hover, Disabled, Error, Focus |
| | Radio Button | 1 | Unselected, Selected, Hover, Disabled, Focus |
| | Slider | 2 (Single, Range) | Default, Hover, Active, Disabled, Focus |
| **Feedback** | Alert | 4 (Info, Success, Warning, Error) | Visible, Entering, Dismissing |
| | Toast | 3 (Neutral, Success, Error) | Visible, Entering, Exiting |
| | Modal | 3 sizes (SM, MD, LG) + mobile | Opening, Open, Closing |
| | Shelf / Drawer | 4 widths + 4 mobile heights | Opening, Open, Closing |
| | Progress Indicator | 3 (Spinner, Bar, Steps) | Active, Complete |
| | Skeleton Screen | 1 (configurable) | Loading |
| **Data Display** | Card | 5 (Vertical, Horizontal, Compact, Featured, Stat) | Default, Hover, Active, Selected, Loading |
| | Table | 4 (Default, Sortable, Dense, Responsive) | Header, Row Hover, Selected, Sorted, Alternating |
| | List | 4 (Simple, Two-line, Three-line, Interactive) | Default, Hover, Active |
| | Stat / KPI | 1 | Trend Up, Trend Down, Neutral |
| | Badge / Tag | 6 semantic types x 3 sizes | — (display-only) |
| | Chart | 4 types (Line, Bar, Donut, Area) | Default, Tooltip, Loading |
| **Media** | Image Container | 5 (Hero, Thumbnail, Document, Avatar, Gallery) | Loaded, Loading, Error |
| | Avatar | 5 sizes (XS-XL) | Image, Fallback, Badge |
| | Video Player | 1 | Poster, Playing, Paused, Controls Visible |

**Total: 31 components, 50+ variants, 100+ documented states.**
**Mobile platform: All components adapted with touch-optimized sizing, plus 4 mobile-specific components (Bottom Tab Bar, Navigation Bar, Search Bar, Bottom Sheet).**

---

*Vallejo Design System 1.1 — Component Specifications*
*For system overview: SYSTEM-INDEX.json | For quick patterns: QUICK-REFERENCE.md | For token values: copart-design-tokens.json*
