# Vallejo Design System

**Version 1.1** | Copart Production Design System | February 2026

---

## For AI / LLM Agents

> **Read [`/llm/SYSTEM-INDEX.json`](llm/SYSTEM-INDEX.json) first.**
> It contains the file manifest, reading order, brand context, and routing for all LLM-optimized documentation.
>
> **Do not read files in `/human/`.** They are formatted for human readers and will waste your context window. Everything you need is in `/llm/`.

## For Human Readers

> See [`/human/copart-design-system.md`](human/copart-design-system.md) for the complete design system specification — principles, foundations, all 31 components, patterns, animation, and mobile platform.
>
> See [`/human/copart-design-tokens.json`](human/copart-design-tokens.json) for the machine-readable design token file (W3C DTCG format).

---

## About Vallejo

Vallejo is the production design system for [Copart.com](https://www.copart.com) — online vehicle auctions, salvage and wholesale marketplace, member dashboards, bidding flows, and all customer-facing interfaces.

Three documentation tracks, one system:

| Folder | Audience | Contents |
|--------|----------|----------|
| `/human/` | Designers, developers, stakeholders | Full specification with prose, rationale, and visual examples |
| `/llm/` | AI agents, code generators, LLM tools | Structured data, CSS patterns, HTML snippets optimized for token efficiency |
| `/demo/` | Everyone | Interactive visual demo (hostable on Vercel) |
