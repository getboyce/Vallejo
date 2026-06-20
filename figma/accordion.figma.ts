import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Accordion 1.2 — collapsible disclosure region on the `.accordion` API.
 * The State axis (Collapsed / Hover / Expanded) is native CSS / `aria-expanded`
 * (no per-state class), so the example is static.
 * Full spec: llms-components.txt → Accordion.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4518-405",
  {
    props: {},
    example: () =>
      html`<div class="accordion">
  <h3 class="accordion-header">
    <button class="accordion-trigger" aria-expanded="true" aria-controls="acc-1" id="acc-1-btn">
      Vehicle condition
      <svg class="accordion-chevron" aria-hidden="true"><use href="#icon-chevron-up"></use></svg>
    </button>
  </h3>
  <div class="accordion-panel" role="region" id="acc-1" aria-labelledby="acc-1-btn">
    <p>Runs and drives. Minor front-end damage; airbags intact.</p>
  </div>
</div>`,
  },
)
