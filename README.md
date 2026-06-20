# Vallejo Design System

Copart's production design system — and an **LLM-focused, agent-buildable** one. Hand an agent this repo and it can build prototypes that use Vallejo **exactly** (exact tokens, exact components) with **zero Tailwind and zero outside systems**. Version + date of record: [`version.json`](version.json).

---

## The Copart Design Vault — read this first

Vallejo does not exist in isolation. It executes the design language defined in the **[Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault)**.

- **Vault (Layer 1)** — the *why*: philosophy, principles, anti-patterns, interaction signatures, voice.
- **Vallejo (Layer 2)** — the *how*: tokens, components, specs, and the code that ships them.

**When the Vault and Vallejo conflict, the Vault wins.** Every decision passes the Vault's design filter: *Does this build trust? Does it respect expertise? Does it read at multiple depths?*

---

## Start here

**Agents / LLM tools** → read **[`AGENTS.md`](AGENTS.md)** (Step 0 = the Vault), then **[`llms.txt`](llms.txt)** to route to the focused references. To build, link `dist/tokens.css` + `dist/vallejo.css` and start from **[`starter.html`](starter.html)**.

**Humans** → **[`DESIGN.md`](DESIGN.md)** is the canonical spec (foundations + component rules). Open **[`starter.html`](starter.html)** to prototype.

---

## Repo layout

| Path | What it is |
|------|------------|
| [`AGENTS.md`](AGENTS.md) | Behavior layer — agent entry point, read order, hard rules, quickstart |
| [`DESIGN.md`](DESIGN.md) | Appearance layer — the canonical spec (tokens block + foundations + component summary) |
| [`llms.txt`](llms.txt) | Discovery index → progressive-disclosure links (fetchable raw URLs) |
| `llms-tokens.txt` · `llms-components.txt` · `llms-a11y.txt` · `llms-writing.txt` · `llms-motion.txt` · `llms-mobile.txt` | Focused references (tokens, components, accessibility, voice, motion, mobile) |
| [`version.json`](version.json) | Single source of version + date + Vault/production URLs |
| [`starter.html`](starter.html) | Blank prototype shell — links the two stylesheets |
| `source/` | **Source of truth (hand-edited):** `tokens/*.json` (DTCG), `icons.json`, `components/*.css` |
| `dist/` | **Generated + committed** (consume directly; never run a build): `tokens.css`, `tokens.dtcg.json`, `tokens.js`, `vallejo.css` |
| `build/` | The token + component generators (`build.mjs`, `build-components.mjs`) |
| `CLAUDE.md` | One-line pointer → `AGENTS.md` |

## Build (maintainers only)

Tokens are authored once in `source/tokens/*.json` (W3C DTCG) and **generated** to `dist/`. Consumers never build — `dist/` is committed.

```bash
npm run build            # source/tokens → dist/tokens.css, tokens.dtcg.json, tokens.js
npm run build:components # source/components → dist/vallejo.css
npm run build:all        # both
```

No runtime dependencies — the generators are plain Node (`build/*.mjs`).

---

*Dark mode is light-only today (Figma's dark values are placeholders); a `data-theme="dark"` layer is a planned follow-up.*
