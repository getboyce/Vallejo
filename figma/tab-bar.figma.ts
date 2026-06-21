import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Tab bar — the L2 sub-nav assembly: a row of Tabs instances on a continuous
 * quiet hairline rail. The only axis is Tabs (3 / 4 / 5) — a count of slots, not a class
 * modifier — so a static example. State lives on each Tab (native CSS via `aria-selected`).
 * Full spec: llms-components.txt → Tab bar.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4273-140",
  {
    props: {},
    example: () => html`<div class="tab-bar" role="tablist" aria-label="Lot details">
  <button class="tab" role="tab" aria-selected="true">Overview</button>
  <button class="tab" role="tab" aria-selected="false">Condition</button>
  <button class="tab" role="tab" aria-selected="false">Bid history</button>
  <button class="tab" role="tab" aria-selected="false">Documents</button>
</div>`,
  },
)
