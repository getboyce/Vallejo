import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Text Field 1.2 — maps Figma Size onto the unprefixed `.input` class API.
 * Border is refined-light, advancing rest → hover → focus. States (Default / Hover /
 * Filled / Error / Success / Disabled) are native: `:hover`, `:focus-visible`,
 * `aria-invalid`, `disabled`. Full spec: llms-components.txt → Text Field.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4113-79",
  {
    props: {
      size: figma.enum("Size", {
        SM: "input-sm",
        MD: "input-md",
        LG: "input-lg",
      }),
    },
    example: (props) =>
      html`<div class="field">
  <label class="field-label" for="email">Email</label>
  <input class="input ${props.size}" id="email" type="email" placeholder="name@example.com">
  <p class="field-helper" id="email-help">We'll send your receipt here.</p>
</div>`,
  },
)
