import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Menu Item 1.2 — one row of an action Menu, mapping Tone onto the
 * `.menu-item` class API. State (Default / Hover / Disabled) is native CSS
 * (`:hover`, `aria-disabled`). Distinct from the form Select Option.
 * Full spec: llms-components.txt → Menu Item.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4356-95",
  {
    props: {
      tone: figma.enum("Tone", {
        Default: "",
        Destructive: "menu-item-destructive",
      }),
    },
    example: (props) =>
      html`<button class="menu-item ${props.tone}" role="menuitem">
  <svg class="menu-item-icon" aria-hidden="true"><use href="#icon-edit"></use></svg> Edit
</button>`,
  },
)
