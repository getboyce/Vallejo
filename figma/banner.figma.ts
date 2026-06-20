import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Banner 1.2 — maps Figma Type × Emphasis onto the unprefixed `.banner` class API.
 * Subtle is the default (no extra class); Solid adds `.banner-solid` (critical states only).
 * Dismissible is a native structural choice (presence of the `.banner-dismiss` button),
 * not a class on the container — so it is not mapped.
 * Full spec: llms-components.txt → Banner.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4294-246",
  {
    props: {
      type: figma.enum("Type", {
        Neutral: "banner-neutral",
        Info: "banner-info",
        Success: "banner-success",
        Warning: "banner-warning",
        Error: "banner-error",
      }),
      emphasis: figma.enum("Emphasis", {
        Subtle: "",
        Solid: "banner-solid",
      }),
    },
    example: (props) =>
      html`<div class="banner ${props.type} ${props.emphasis}" role="alert">
  <svg class="banner-icon" aria-hidden="true"><use href="#icon-alert-triangle"></use></svg>
  <p class="banner-text">Scheduled maintenance Sunday 2–4am ET — bidding will be paused.</p>
  <button class="banner-dismiss" aria-label="Dismiss">
    <svg aria-hidden="true"><use href="#icon-close"></use></svg>
  </button>
</div>`,
  },
)
