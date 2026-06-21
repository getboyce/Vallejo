import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Spinner 1.2 — maps Figma Size × Tone onto the unprefixed `.spinner` class API.
 * Indeterminate rotation (0.8s linear) is motion in code, not a class.
 * Full spec: llms-components.txt → Spinner.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4309-65",
  {
    props: {
      size: figma.enum("Size", {
        "16": "spinner-16",
        "24": "spinner-24",
        "32": "spinner-32",
        "48": "spinner-48",
      }),
      tone: figma.enum("Tone", {
        Default: "",
        Inverse: "spinner-inverse",
      }),
    },
    example: (props) =>
      html`<span class="spinner ${props.size} ${props.tone}" role="status" aria-label="Loading"></span>`,
  },
)
