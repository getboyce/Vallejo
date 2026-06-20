import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Button 1.2 — maps Figma Type × Size onto the unprefixed `.btn` class API.
 * States (Default / Hover / Active / Focus / Disabled) are native CSS
 * (`:hover`, `:active`, `:focus-visible`, `[disabled]`) — never classes.
 * Full spec: llms-components.txt → Button.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4079-255",
  {
    props: {
      type: figma.enum("Type", {
        Primary: "btn-primary",
        Secondary: "btn-secondary",
        Quiet: "btn-quiet",
        Destructive: "btn-destructive",
      }),
      size: figma.enum("Size", {
        XS: "btn-xs",
        SM: "btn-sm",
        MD: "btn-md",
        LG: "btn-lg",
        XL: "btn-xl",
      }),
    },
    example: (props) =>
      html`<button type="button" class="btn ${props.type} ${props.size}">Button</button>`,
  },
)
