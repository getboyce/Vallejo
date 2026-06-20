import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Chip / Filter 1.2 — the `.chip-filter` class API.
 * A filter chip (chip family, pill) that opens a Select menu. Rest shows the
 * DIMENSION; the chevron is the permanent affordance, not the box.
 * The only axis is State (Default / Hover / Active / Active multi / Open /
 * Disabled): Active adds `.chip-filter-active`, but it reflects live menu
 * selection (driven by `aria-expanded` + selection, not a Figma-static class),
 * so this stays static on the rest state.
 * Full spec: llms-components.txt → Chip / Filter.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4604-3503",
  {
    props: {},
    example: () => html`<button class="chip-filter" aria-haspopup="listbox" aria-expanded="false">
  Make <svg class="chip-filter-chevron" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>
</button>`,
  },
)
