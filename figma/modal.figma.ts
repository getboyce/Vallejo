import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Modal 1.2 — centered dialog that blocks the page behind a scrim,
 * mapping Size onto the `.modal` class API. State (Default / Hover — the close
 * hovered) is native CSS. Footer = Quiet Cancel + Primary Confirm (swap
 * Destructive for dangerous actions). Full spec: llms-components.txt → Modal.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4368-245",
  {
    props: {
      size: figma.enum("Size", {
        SM: "modal-sm",
        MD: "modal-md",
        LG: "modal-lg",
      }),
    },
    example: (props) =>
      html`<div class="modal-scrim">
  <div class="modal ${props.size}" role="dialog" aria-modal="true" aria-labelledby="m-title">
    <div class="modal-header">
      <h2 class="modal-title" id="m-title">Confirm your bid</h2>
      <button class="icon-btn" aria-label="Close"><svg aria-hidden="true"><use href="#icon-close"></use></svg></button>
    </div>
    <div class="modal-body">
      <p>You're about to bid <span class="input-mono">$12,500</span> on lot 48291023.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-quiet btn-md">Cancel</button>
      <button class="btn btn-primary btn-md">Place bid</button>
    </div>
  </div>
</div>`,
  },
)
