import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Select Option 1.2 — one menu row for Select. Maps Figma Kind onto the
 * unprefixed `.select-option` class API: Multi adds `.select-option-multi` (leading
 * checkbox); Single is the base row (selected shows a trailing check). States
 * (Default / Hover / Selected / Selected Hover / Disabled) are native:
 * `aria-selected`, `aria-disabled`, `:hover`. Full spec: llms-components.txt → Select Option.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4125-185",
  {
    props: {
      kind: figma.enum("Kind", {
        Single: "",
        Multi: "select-option-multi",
      }),
    },
    example: (props) =>
      html`<li class="select-option ${props.kind}" role="option" aria-selected="true">
  <span class="select-option-label">Dallas, TX</span>
  <svg class="select-option-check" aria-hidden="true"><use href="#icon-check"></use></svg>
</li>`,
  },
)
