import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Checkbox 1.2 — maps Figma Size onto the unprefixed `.checkbox` class API.
 * Large adds `.checkbox-large` (20px); Default has no size class (18px).
 * States (Unchecked / Hover / Checked / Checked Hover / Indeterminate / Disabled /
 * Disabled Checked) are native: `checked`, `disabled`, `aria-checked="mixed"`,
 * `:hover`, `:focus-visible`. Full spec: llms-components.txt → Checkbox.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4158-223",
  {
    props: {
      size: figma.enum("Size", {
        Default: "",
        Large: "checkbox-large",
      }),
    },
    example: (props) =>
      html`<label class="checkbox-field">
  <input class="checkbox ${props.size}" type="checkbox" id="terms" checked>
  <span>I accept the buyer terms</span>
</label>`,
  },
)
