# AGENTS.md — Vallejo for agents

Vallejo is **Layer 2** of Copart's design system: the *how*. It executes the **Copart Design Vault** (Layer 1, the *why*) as concrete tokens and components. Production is **copart.com**. If you were handed only this repo, you can build a real Copart prototype from it alone — exact tokens, exact components, no Tailwind, no Bootstrap, no outside system. When the Vault and Vallejo conflict, **the Vault wins**.

---

## Read order

### Step 0 — Read the Vault (the *why*), then keep this digest handy
Read the **Copart Design Vault**: https://github.com/getboyce/Copart-Design-Vault . It defines design philosophy, principles, anti-patterns, interaction signatures, and voice. If the Vault is unreachable, this inlined digest keeps the repo self-sufficient:

- **The triad** (every decision serves these): **Precision** — the warmth of competence; obsessive alignment, spacing, typographic discipline; sloppiness signals institutional carelessness when members stake five figures. **Institutional Confidence** — the quiet authority of a platform that has moved millions of vehicles; we don't hedge, over-explain, or decorate; one primary action per view; verb-first labels; no "Oops." **Vitality** — auctions are alive, competitive, time-bound; motion confirms action, status is always visible, urgency is real — but never chaos.
- **The design filter** (ask of every design): *Does this build trust? Does this respect expertise? Does this read at multiple depths?* If any answer is no, the design is wrong.
- **Critical anti-patterns** (reject on sight): the **blue flood** (everything blue, so nothing has emphasis — blue earns authority through restraint); **Bootstrap-default aesthetics** (generic card-with-border, badge-pill, muted-gray — "we didn't think about this"); **tables as default layout** (a last resort; structure comes from spacing and typography, not borders); **AI-generated defaults** (purple accent, border-box foundations, emoji/icon overuse, generic typography, the machine-feeling "helpful default"); the **"it just needs to function" mentality** (craft IS communication — precision signals trustworthiness).

### Step 1 — This file (`AGENTS.md`)
The behavior-layer entry point. The HARD RULES below are binding.

### Step 2 — `DESIGN.md`
The system overview: what exists, how it fits together, links into the detail files.

### Step 3 — `llms.txt`, then the focused `llms-*.txt`
`llms.txt` is the index. Then go to the focused file for your need:
- **Tokens** → `dist/tokens.css` (every `var(--token)`; also `dist/tokens.dtcg.json`, `dist/tokens.js`) and prose in `llms-tokens.txt`.
- **Components** → `dist/vallejo.css` (the styles) + `llms-components.txt` (per-component contracts, variants, states, canonical HTML).
- **Accessibility** → `llms-a11y.txt`.
- **Voice / writing** → `llms-writing.txt`.
- **Motion** → `llms-motion.txt` (durations, easings, registers, micro-interactions, reduce-motion).
- **Mobile platform** → `llms-mobile.txt` (mobile type scale, touch specs, spacing deltas vs the web-first DESIGN.md).
- **Icons** → `source/icons.json` (inline SVG path data; `stroke="currentColor"`, `fill="none"`).
- **Logos** → `source/logos.json` (Copart + Wholesale Auction brand SVG; FIXED brand colors — never recolor; `light`/`dark` variants).

---

## QUICKSTART — Build a Vallejo prototype

1. Start from **`starter.html`** (a bare static shell — no header/sidebar chrome; those are not components).
2. In the `<head>`, link the two generated stylesheets:
   ```html
   <link rel="stylesheet" href="dist/tokens.css">
   <link rel="stylesheet" href="dist/vallejo.css">
   ```
3. Build with the **unprefixed component classes** — base + modifiers: `.btn` / `.btn-primary` / `.btn-md`, `.card`, `.badge-success`, `.chip`, `.modal`, … (see `llms-components.txt`). States come from **native CSS only** (`:hover`, `:focus-visible`, `[disabled]`, `aria-*`) — never state classes.
4. For any color, size, radius, shadow, or motion value, reference a **`var(--token)`** from `dist/tokens.css`. **Never invent a value** and never hardcode hex/px in component markup.
5. Icons: inline the SVG from `source/icons.json`. No icon fonts, no `<img>`, no emoji.
6. **Never add Tailwind, Bootstrap, or any framework.** A static HTML page + these two stylesheets is the whole stack. `dist/` is generated and committed — consumers never run a build.

---

## HARD RULES

- **One Primary (blue) action per view.** Button types are exactly four: **Primary, Secondary, Quiet, Destructive** — no Tertiary, no Success button. Everything else is Secondary/Quiet.
- **Sentence case everywhere** — headings, buttons, nav, tabs, table headers, badges. Capitalize only the first word and proper nouns/acronyms (Copart, VIN, NMVTIS).
- **Verb-first action labels**, 1–3 words: "Place bid", "Save to watchlist". **No prices, amounts, or counts in button labels** — show values in body/summary copy. Nav items are nouns ("Vehicles", "My bids"), never verbs.
- **Error format = `[what happened] — [how to fix]`**: "Payment failed — update your payment method to continue." Never "Error" / "Oops" / "Something went wrong"; never blame the member.
- **Canonical terminology** (never alternate): **Lot** not listing, **Bid** not offer, **Watchlist** not favorites, **Member** not user, **Location** not yard, **Wholesale** not Select, **Pre-bid** not preliminary, **Sign in** not login, **Copart Alliance Gateway** not lounge.
- **Tables are a last resort.** Prefer cards, lists, stat blocks; use a table only when comparison across multiple simultaneous dimensions is the primary task. Null cell = em dash "—".
- **No emoji in UI.** Iconic SVG set only — inline, `stroke="currentColor"`, `fill="none"`.
- **44px minimum touch target** (WCAG 2.5.8), 8px min spacing between targets. A visually smaller control expands its hit area to 44px in code.
- **Pair color with an icon and/or label** — color is never the sole state indicator. Put a word on every status chip; ● dot on LIVE.
- **`gray-*` is canonical** (gray-0 = white … gray-950; gray-900 = `#1D222A` = ink). `neutral-*` is a deprecated alias only — never emit it. `layer-*` is canonical (`z-*` deprecated).
- **No orange ramp** (removed). Gold `#FDC146` is for the **User Avatar Premier variant only** (the gold ring; = warning-200). Express urgency via the **warning/error** ramps. Error/destructive uses the **error ramp**, never a raw red.
- **Light-only today** — dark mode is planned but not shipped yet (Figma's dark values are placeholders); a `data-theme="dark"` layer with curated dark ramps + an ADA dark guardrail will land in a dedicated pass.
- **Monospace (JetBrains Mono)** for VIN, lot numbers, bid amounts, timestamps — numbers compared in rows. Mono never bleeds into labels or prose.
- **Focus is a real state** = a **solid 2px ring** (blue-600 on light, blue-300 on dark chrome), concentric +3 radius. **Not** a shadow glow.
- **Version/date live only in `version.json`** (1.2.0 / 2026-06-20). Reference it; never hardcode the version or date elsewhere.
- **`dist/` is generated and committed.** Don't hand-edit it; don't ask consumers to build. The only build is tokens (Phase 2).
