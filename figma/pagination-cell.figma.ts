import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Pagination cell — one 32px square page cell (radius 6).
 * The only axis is State (Default / Hover / Current / Disabled). State is NATIVE CSS:
 * Current = `aria-current="page"` (blue/600 fill + white); Hover = `:hover` (gray/100);
 * Disabled = `aria-disabled="true"`. So no class varies by a Figma prop → static example.
 * Full spec: llms-components.txt → Pagination cell.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4223-54",
  {
    props: {},
    example: () =>
      html`<button class="pagination-cell" aria-current="page">1</button>`,
  },
)
