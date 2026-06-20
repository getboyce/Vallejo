import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Tooltip 1.2 — tiny transient hover/focus label (text-only, no scrim,
 * no interaction), mapping Position onto the `.tooltip` class API. The caret
 * points at the trigger. For richer anchored content use Popover.
 * Full spec: llms-components.txt → Tooltip.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4358-105",
  {
    props: {
      position: figma.enum("Position", {
        Top: "tooltip-top",
        Bottom: "tooltip-bottom",
        Left: "tooltip-left",
        Right: "tooltip-right",
      }),
    },
    example: (props) =>
      html`<span class="tooltip ${props.position}" role="tooltip" id="tip-1">Final bid plus buyer fee.</span>`,
  },
)
