import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Breadcrumb item — one crumb in the breadcrumbs row.
 * The only axis is State (Link / Hover / Current). State is NATIVE CSS:
 * the Current page is plain text (no <a>) + `aria-current="page"`; Hover is `:hover`.
 * So no class varies by a Figma prop → a static example.
 * Full spec: llms-components.txt → Breadcrumb item.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4223-28",
  {
    props: {},
    example: () =>
      html`<li class="breadcrumb-item"><a href="/auctions">Auctions</a></li>`,
  },
)
