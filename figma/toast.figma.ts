import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Toast 1.2 — maps Figma Type onto the unprefixed `.toast` tonal class API.
 * The tone is carried by a single tone/600 status icon; the `.toast-{tone}` class
 * selects it (text stays neutral ink). White elevated card (Elevation/Overlay).
 * Dismissible is a native structural choice (presence of the `.toast-dismiss` button),
 * not a class on the container — so it is not mapped.
 * Full spec: llms-components.txt → Toast.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4295-267",
  {
    props: {
      type: figma.enum("Type", {
        Neutral: "toast-neutral",
        Success: "toast-success",
        Info: "toast-info",
        Warning: "toast-warning",
        Error: "toast-error",
      }),
    },
    example: (props) =>
      html`<div class="toast ${props.type}" role="status" aria-live="polite">
  <svg class="toast-icon" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
  <div class="toast-body">
    <p class="toast-title">Bid placed</p>
    <p class="toast-text">You're the high bidder on lot 48291023.</p>
  </div>
  <button class="toast-dismiss" aria-label="Dismiss">
    <svg aria-hidden="true"><use href="#icon-close"></use></svg>
  </button>
</div>`,
  },
)
