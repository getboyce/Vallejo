import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Segment — one segment of a Segmented control.
 * The only axis is State (Inactive / Hover / Active / Disabled). State is NATIVE CSS:
 * Active = `aria-checked="true"` (white raised-key pill); Hover = `:hover`;
 * Disabled = `[disabled]`. So no class varies by a Figma prop → static example.
 * Full spec: llms-components.txt → Segment.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4222-28",
  {
    props: {},
    example: () =>
      html`<button class="segment" role="radio" aria-checked="true">Grid</button>`,
  },
)
