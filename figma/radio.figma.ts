import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Radio 1.2 — maps Figma Size onto the unprefixed `.radio` class API.
 * Large adds `.radio-large` (20px); Default has no size class (18px).
 * States (Unselected / Hover / Selected / Selected Hover / Disabled /
 * Disabled Selected) are native: `checked`, `disabled`, `:hover`, `:focus-visible`.
 * Full spec: llms-components.txt → Radio.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4160-217",
  {
    props: {
      size: figma.enum("Size", {
        Default: "",
        Large: "radio-large",
      }),
    },
    example: (props) =>
      html`<label class="radio-field">
  <input class="radio ${props.size}" type="radio" name="title" checked> Clean
</label>`,
  },
)
