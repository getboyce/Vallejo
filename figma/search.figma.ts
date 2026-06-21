import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Search 1.2 — maps Figma Size onto the unprefixed `.search` class API.
 * Standalone component (not a Text Field kind); trailing icon swaps search-glass →
 * clear ×-circle when typed. States (Default / Hover / Filled / Disabled /
 * Autocomplete) are native: `:hover`, `:focus-visible`, `disabled`, `aria-expanded`.
 * Full spec: llms-components.txt → Search.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4186-596",
  {
    props: {
      size: figma.enum("Size", {
        SM: "search-sm",
        MD: "search-md",
        LG: "search-lg",
      }),
    },
    example: (props) =>
      html`<div class="search ${props.size}">
  <svg class="search-icon-lead" aria-hidden="true"><use href="#icon-search"></use></svg>
  <input class="search-input" type="search" aria-label="Search lots" placeholder="Search lots">
</div>`,
  },
)
