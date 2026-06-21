import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Select Menu 1.2 — the floating menu for Select. Static example: the only
 * Kind that bears a distinct class is Search (`.select-menu-search` adds the filter
 * header); Single/Multi share the base `.select-menu`. Rows are Select Option
 * instances. Full spec: llms-components.txt → Select Menu.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4167-327",
  {
    props: {},
    example: () =>
      html`<ul class="select-menu" role="listbox" aria-label="Location"><!-- Elevation/Overlay, radius xl -->
  <li class="select-option" role="option">Atlanta, GA</li>
  <li class="select-option" role="option" aria-selected="true">Dallas, TX</li>
  <li class="select-option" role="option">Phoenix, AZ</li>
</ul>`,
  },
)
