import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Table filter bar 1.2 — the filter strip welded to the top of a
 * data-table card (shares fill + ring + radius). Standalone composed component
 * with no variant axes, so the example is static.
 * Full spec: llms-components.txt → Table filter bar.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4617-3494",
  {
    props: {},
    example: () =>
      html`<div class="table-filter-bar" role="toolbar" aria-label="Table filters">
  <button class="chip-filter" aria-haspopup="listbox" aria-expanded="false">Make
    <svg class="chip-filter-chevron" aria-hidden="true"><use href="#icon-chevron-down"></use></svg></button>
  <button class="chip-filter" aria-haspopup="listbox" aria-expanded="false">Title type
    <svg class="chip-filter-chevron" aria-hidden="true"><use href="#icon-chevron-down"></use></svg></button>
  <span class="table-filter-divider" aria-hidden="true"></span>
  <button class="btn btn-quiet btn-md">
    <svg class="btn-icon" aria-hidden="true"><use href="#icon-filter"></use></svg> All filters
  </button>
  <div class="search search-md table-filter-search">
    <svg class="search-icon-lead" aria-hidden="true"><use href="#icon-search"></use></svg>
    <input class="search-input" type="search" aria-label="Search this table">
  </div>
</div>`,
  },
)
