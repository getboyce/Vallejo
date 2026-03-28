# Vallejo Design System

**Version 1.1.1** | Copart Production Design System | Updated: March 2, 2026

---

## The Copart Design Vault — Read This First

Vallejo does not exist in isolation. It executes the design language defined in the **[Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault)**.

- **Vault (Layer 1)** — The "why." Philosophy, principles, anti-patterns, interaction signatures, and voice. The Vault defines what Copart design *is* and what it rejects.
- **Vallejo (Layer 2)** — The "how." Tokens, components, specs, patterns, and code. Vallejo implements the Vault's convictions at the pixel level.

**When the Vault and Vallejo conflict, the Vault wins.** If a component spec contradicts a design principle, the spec changes.

Every decision in this system passes the Vault's design filter:

1. **Does this build trust?**
2. **Does this respect expertise?**
3. **Does this read at multiple depths?**

If the answer to any is no, the design is wrong. See [Vault > language/north-star.md](https://github.com/getboyce/Copart-Design-Vault/blob/main/Copart%20Design/language/north-star.md) for the full case.

---

## For AI / LLM Agents

> **Read the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault) first** for design philosophy and context.
>
> Then read [`/llm/SYSTEM-INDEX.json`](llm/SYSTEM-INDEX.json) — the manifest and routing for all LLM-optimized documentation.
>
> **Do not read files in `/human/`.** They are formatted for human readers and will waste your context window. Everything you need is in `/llm/`.

## For Human Readers

> See [`/human/copart-design-system.md`](human/copart-design-system.md) for the complete design system specification — principles, foundations, all 37 components, patterns, animation, and mobile platform.
>
> See [`/human/copart-design-tokens.json`](human/copart-design-tokens.json) for the machine-readable design token file (W3C DTCG format).

---

## About Vallejo

Vallejo is the production design system for [Copart.com](https://www.copart.com) — online vehicle auctions, salvage and wholesale marketplace, member dashboards, bidding flows, and all customer-facing interfaces. It implements the design philosophy defined in the [Copart Design Vault](https://github.com/getboyce/Copart-Design-Vault).

Four folders, one system:

| Folder | Audience | Contents |
|--------|----------|----------|
| `/human/` | Designers, developers, stakeholders | Full specification with execution rules and Vault cross-references |
| `/llm/` | AI agents, code generators, LLM tools | Structured data, CSS patterns, HTML snippets optimized for token efficiency |
| `/components/` | Everyone | Working reference implementations (header, etc.) |
| `/demo/` | Everyone | Interactive visual demos (hostable on Vercel) |

## Demos

| Demo | Path | Description |
|------|------|-------------|
| Design System Overview | [`/demo/index.html`](demo/index.html) | Foundations, tokens, and component showcase |
| UX Writing Guide | [`/demo/ux-writing.html`](demo/ux-writing.html) | Voice & tone, terminology, microcopy patterns, do/don't examples |
