import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Progress bar 1.2 — maps Figma Size onto the unprefixed `.progress` class API.
 * State (Progress / Success / Error) drives the fill color via tokens, not a documented
 * class, so it is left native — only Indeterminate carries a class (`progress-indeterminate`),
 * which is its own assembly and not mapped here to keep this example faithful.
 * Full spec: llms-components.txt → Progress bar.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4318-93",
  {
    props: {
      size: figma.enum("Size", {
        SM: "progress-sm",
        MD: "progress-md",
      }),
    },
    example: (props) =>
      html`<div class="progress-field">
  <div class="progress-header"><span>Uploading photos</span><span class="input-mono">60%</span></div>
  <div class="progress ${props.size}" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-fill" style="width:60%"></div>
  </div>
</div>`,
  },
)
