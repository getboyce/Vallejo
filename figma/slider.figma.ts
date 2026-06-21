import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Slider 1.2 — maps Figma Type onto the unprefixed `.slider` class API.
 * Single = one thumb (fill from start) → `.slider-single`; Range = two thumbs
 * (fill between) → `.slider-range`. States (Default / Hover) are native:
 * `:hover`, `:focus-visible` on each thumb. Full spec: llms-components.txt → Slider.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4163-228",
  {
    props: {
      type: figma.enum("Type", {
        Single: "slider-single",
        Range: "slider-range",
      }),
    },
    example: (props) =>
      html`<div class="slider ${props.type}">
  <div class="slider-track"><div class="slider-fill" style="width:40%"></div></div>
  <div class="slider-thumb" role="slider" tabindex="0"
       aria-label="Max bid" aria-valuemin="0" aria-valuemax="50000"
       aria-valuenow="20000" aria-valuetext="$20,000" style="left:40%"></div>
</div>`,
  },
)
