import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Icon button 1.2 — circular 32px overlay-header / overflow action.
 * The Icon axis (Close / Back / More) swaps the svg glyph + aria-label, not a
 * CSS class — so no enum is mapped; the `.icon-btn` class is invariant.
 * States (Default / Hover / Pressed) are native CSS. Always icon-only → always
 * needs an `aria-label`. Full spec: llms-components.txt → Icon button.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4393-227",
  {
    props: {},
    example: () =>
      html`<button class="icon-btn" aria-label="Close">
  <svg aria-hidden="true"><use href="#icon-close"></use></svg>
</button>`,
  },
)
