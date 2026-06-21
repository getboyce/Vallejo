import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Segmented control — L3 in-page switch over a mode/slice of the SAME content.
 * The only axis is Segments (3) — a count of slots, not a class modifier — so a static
 * example. Built from Segment instances in a recessed gray/100 track; the active segment
 * is a raised-key white pill. It is a single-select value switch (radiogroup), not nav.
 * Full spec: llms-components.txt → Segmented control.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4275-131",
  {
    props: {},
    example: () => html`<div class="segmented" role="radiogroup" aria-label="View density">
  <button class="segment" role="radio" aria-checked="true">Grid</button>
  <button class="segment" role="radio" aria-checked="false">List</button>
  <button class="segment" role="radio" aria-checked="false">Map</button>
</div>`,
  },
)
