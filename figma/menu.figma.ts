import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Menu 1.2 — action/context/overflow container (NO scrim, light-dismiss).
 * Standalone composed component with no variant axes → static example.
 * Holds Menu Item rows + dividers. NOT for form selection (that is Select Menu).
 * Full spec: llms-components.txt → Menu.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4357-77",
  {
    props: {},
    example: () =>
      html`<div class="menu" role="menu">
  <button class="menu-item" role="menuitem">
    <svg class="menu-item-icon" aria-hidden="true"><use href="#icon-edit"></use></svg> Edit
  </button>
  <button class="menu-item" role="menuitem">
    <svg class="menu-item-icon" aria-hidden="true"><use href="#icon-copy"></use></svg> Duplicate
  </button>
  <div class="menu-divider" role="separator"></div>
  <button class="menu-item menu-item-destructive" role="menuitem">
    <svg class="menu-item-icon" aria-hidden="true"><use href="#icon-trash"></use></svg> Delete
  </button>
</div>`,
  },
)
