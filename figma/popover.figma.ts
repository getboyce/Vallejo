import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Popover 1.2 — anchored floating panel (NO scrim, light-dismiss),
 * mapping Position onto the `.popover` class API. The caret points at the
 * trigger. For a list of actions use Menu; for a blocking dialog use Modal.
 * Full spec: llms-components.txt → Popover.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4352-93",
  {
    props: {
      position: figma.enum("Position", {
        Top: "popover-top",
        Bottom: "popover-bottom",
        Left: "popover-left",
        Right: "popover-right",
      }),
    },
    example: (props) =>
      html`<div class="popover ${props.position}" role="dialog" aria-label="About this fee" id="fee-pop">
  <div class="popover-header">
    <p class="popover-title">Buyer fee</p>
    <button class="icon-btn" aria-label="Close"><svg aria-hidden="true"><use href="#icon-close"></use></svg></button>
  </div>
  <p class="popover-body">A flat fee added at checkout based on the final bid.</p>
  <span class="popover-caret" aria-hidden="true"></span>
</div>`,
  },
)
