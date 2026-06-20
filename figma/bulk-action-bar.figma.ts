import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Bulk action bar 1.2 — the command bar shown on row selection.
 * Surface (Docked = white + top hairline, reserves height; Overlay = dark chrome
 * + upward elevation, sticky) maps onto the `.bulk-bar` modifier class.
 * Full spec: llms-components.txt → Bulk action bar.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4616-3536",
  {
    props: {
      surface: figma.enum("Surface", {
        Docked: "bulk-bar-docked",
        Overlay: "bulk-bar-overlay",
      }),
    },
    example: (props) =>
      html`<div class="bulk-bar ${props.surface}" role="region" aria-label="Bulk actions">
  <div class="bulk-bar-left">
    <span class="bulk-bar-count" aria-live="polite"><svg aria-hidden="true"><use href="#icon-check"></use></svg> 3 selected</span>
    <span class="bulk-bar-divider" aria-hidden="true"></span>
    <button class="btn btn-quiet btn-sm"><svg class="btn-icon" aria-hidden="true"><use href="#icon-download"></use></svg> Export</button>
  </div>
  <div class="bulk-bar-right">
    <button class="btn btn-quiet btn-md">Clear</button>
    <button class="btn btn-primary btn-md">Pay $24,300</button>
  </div>
</div>`,
  },
)
