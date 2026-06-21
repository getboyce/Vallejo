import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Avatar 1.2 — maps Figma Type × Size onto the unprefixed `.avatar` class API.
 * Circle, presentational identity. Fallback chain: real photo → initials → icon.user.
 * NO hashed/per-user color, NO presence dot, NO default ring.
 * Full spec: llms-components.txt → Avatar.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4525-76",
  {
    props: {
      type: figma.enum("Type", {
        Image: "avatar-image",
        Initials: "avatar-initials",
        Icon: "avatar-icon",
      }),
      size: figma.enum("Size", {
        XS: "avatar-xs",
        SM: "avatar-sm",
        MD: "avatar-md",
        LG: "avatar-lg",
        XL: "avatar-xl",
      }),
    },
    example: (props) =>
      html`<span class="avatar ${props.size} ${props.type}" aria-hidden="true">JL</span>`,
  },
)
