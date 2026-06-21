import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Skeleton 1.2 — maps Figma Shape onto the unprefixed `.skeleton` class API.
 * Shimmer/pulse is a motion treatment (workstream 4), not baked into the static component.
 * Full spec: llms-components.txt → Skeleton.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4321-48",
  {
    props: {
      shape: figma.enum("Shape", {
        Line: "skeleton-line",
        Circle: "skeleton-circle",
        Rect: "skeleton-rect",
      }),
    },
    example: (props) =>
      html`<span class="skeleton ${props.shape}" aria-hidden="true"></span>`,
  },
)
