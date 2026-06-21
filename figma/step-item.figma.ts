import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Step item 1.2 — maps Figma State onto the unprefixed `.step-item` class API.
 * The marker glyph is decorative (`aria-hidden`); the title carries meaning. Current
 * additionally takes `aria-current="step"`. Show supporting / Connector are visibility
 * toggles (native), not mapped.
 * Full spec: llms-components.txt → Step item.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4328-77",
  {
    props: {
      state: figma.enum("State", {
        Complete: "step-item-complete",
        Current: "step-item-current",
        Processing: "step-item-processing",
        Upcoming: "step-item-upcoming",
        Error: "step-item-error",
      }),
    },
    example: (props) =>
      html`<li class="step-item ${props.state}">
  <span class="step-marker" aria-hidden="true"><use href="#icon-close"></use></span>
  <div class="step-content"><p class="step-title">Payment</p><p class="step-supporting">Card declined</p></div>
</li>`,
  },
)
