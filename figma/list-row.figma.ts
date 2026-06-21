import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo List Row 1.2 — single-column vertical list row (saved searches,
 * notifications, members, documents). Use Table Row for data grids.
 * Leading (None / Icon / Avatar) × Trailing (Chevron / Action / Meta) map onto
 * `.list-row` modifier classes; Leading=None carries no class. State
 * (Default / Hover) is native CSS, and the "Subtitle" boolean is behavioral.
 * Full spec: llms-components.txt → List Row.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4490-356",
  {
    props: {
      leading: figma.enum("Leading", {
        None: "",
        Icon: "list-row-leading-icon",
        Avatar: "list-row-leading-avatar",
      }),
      trailing: figma.enum("Trailing", {
        Chevron: "list-row-trailing-chevron",
        Action: "list-row-trailing-action",
        Meta: "list-row-trailing-meta",
      }),
    },
    example: (props) =>
      html`<a class="list-row ${props.leading} ${props.trailing}" href="/saved/1">
  <span class="list-row-leading"><svg aria-hidden="true"><use href="#icon-bell"></use></svg></span>
  <span class="list-row-content">
    <span class="list-row-title">Outbid alerts</span>
    <span class="list-row-subtitle">Every lot on your watchlist</span>
  </span>
  <svg class="list-row-chevron" aria-hidden="true"><use href="#icon-chevron-right"></use></svg>
</a>`,
  },
)
