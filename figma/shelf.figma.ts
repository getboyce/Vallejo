import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Shelf 1.2 — edge panel / takeover, mapping Form onto the `.shelf`
 * class API. Platform (Desktop / Mobile) and State (Default / Hover) are native
 * CSS / responsive, not classes. Presentation is via composition: Panel (with
 * or without scrim), Docked (desktop-only, flush), Full-screen (covers the
 * viewport). Sticky header + footer; body is the only scroll region.
 * Full spec: llms-components.txt → Shelf.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4379-246",
  {
    props: {
      form: figma.enum("Form", {
        Panel: "shelf-panel",
        Docked: "shelf-docked",
        "Full-screen": "shelf-full-screen",
      }),
    },
    example: (props) =>
      html`<aside class="shelf ${props.form}" role="dialog" aria-modal="true" aria-labelledby="shelf-title">
  <header class="shelf-header">
    <button class="icon-btn" aria-label="Back"><svg aria-hidden="true"><use href="#icon-arrow-left"></use></svg></button>
    <div class="shelf-titles">
      <h2 class="shelf-title" id="shelf-title">All filters</h2>
      <p class="shelf-subtitle">3 applied</p>
    </div>
    <button class="icon-btn" aria-label="Close"><svg aria-hidden="true"><use href="#icon-close"></use></svg></button>
  </header>
  <div class="shelf-body"></div>
  <footer class="shelf-footer">
    <button class="btn btn-quiet btn-md">Cancel</button>
    <button class="btn btn-primary btn-md">Save</button>
  </footer>
</aside>`,
  },
)
