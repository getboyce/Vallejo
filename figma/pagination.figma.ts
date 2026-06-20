import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Pagination — page through long result sets.
 * The only axis is Type (Numbered) — a single value, not a class modifier — so a
 * static example. Prev/Next bracket a row of Pagination cell instances; the current
 * page cell is filled blue; an ellipsis collapses the middle.
 * Full spec: llms-components.txt → Pagination.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4275-133",
  {
    props: {},
    example: () => html`<nav class="pagination" aria-label="Pagination">
  <button class="pagination-cell" aria-label="Previous page" aria-disabled="true">
    <svg aria-hidden="true"><use href="#icon-chevron-left"></use></svg>
  </button>
  <button class="pagination-cell" aria-current="page">1</button>
  <button class="pagination-cell">2</button>
  <button class="pagination-cell">3</button>
  <span class="pagination-ellipsis" aria-hidden="true">…</span>
  <button class="pagination-cell">28</button>
  <button class="pagination-cell" aria-label="Next page">
    <svg aria-hidden="true"><use href="#icon-chevron-right"></use></svg>
  </button>
</nav>`,
  },
)
