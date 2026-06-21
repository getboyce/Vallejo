import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Toggle 1.2 — maps Figma Size onto the unprefixed `.toggle` class API.
 * Default → `.toggle-default` (36×20); Small → `.toggle-small` (30×16, label optional).
 * Recessed track + raised-key thumb; off→on jumps gray/300 → blue/600. States
 * (Off / Off Hover / On / On Hover / Disabled Off / Disabled On) are native:
 * `aria-checked`, `disabled`, `:hover`, `:focus-visible`. Full spec: llms-components.txt → Toggle.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4162-225",
  {
    props: {
      size: figma.enum("Size", {
        Default: "toggle-default",
        Small: "toggle-small",
      }),
    },
    example: (props) =>
      html`<label class="toggle-field">
  <button class="toggle ${props.size}" role="switch" aria-checked="true"></button>
  <span>Email me when I'm outbid</span>
</label>`,
  },
)
