import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Tabs — L2 sub-nav tab; active = 2px blue/600 underline.
 * Axes: Count (On/Off) toggles whether a quiet muted number (`.tab-count`) is present —
 * that is STRUCTURAL (a child node), not a class modifier on the tab; and State
 * (Default / Hover / Active / Disabled) is NATIVE CSS (`aria-selected`, `:hover`,
 * `[disabled]`). So no class varies by a Figma prop → a static example showing the count.
 * Full spec: llms-components.txt → Tabs.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4221-73",
  {
    props: {},
    example: () =>
      html`<button class="tab" role="tab" aria-selected="true" aria-controls="panel-bids" id="tab-bids">My bids <span class="tab-count">12</span></button>`,
  },
)
