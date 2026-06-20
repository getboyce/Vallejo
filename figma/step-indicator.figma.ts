import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Step indicator 1.2 — assembled vertical tracker on the unprefixed
 * `.step-indicator` (`<ol>`) class API. Orientation has a single value (Vertical),
 * so there is no class-bearing variant axis — static example. State lives on each
 * `.step-item` (see step-item.figma.ts); connector auto-colors blue behind completed.
 * Full spec: llms-components.txt → Step indicator.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4331-123",
  {
    props: {},
    example: () =>
      html`<ol class="step-indicator">
  <li class="step-item step-item-complete">
    <span class="step-marker" aria-hidden="true"><use href="#icon-check"></use></span>
    <div class="step-content"><p class="step-title">Account</p><p class="step-supporting">Verified</p></div>
  </li>
  <li class="step-item step-item-current" aria-current="step">
    <span class="step-marker" aria-hidden="true">2</span>
    <div class="step-content"><p class="step-title">Payment</p><p class="step-supporting">In progress</p></div>
  </li>
  <li class="step-item step-item-upcoming">
    <span class="step-marker" aria-hidden="true">3</span>
    <div class="step-content step-content-last"><p class="step-title">Review</p></div>
  </li>
</ol>`,
  },
)
