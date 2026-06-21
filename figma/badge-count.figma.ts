import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Badge / Count 1.2 — maps Figma Tone onto the `.badge-count` class API.
 * A count is DATA: a solid pill with a number. Brand (blue) default,
 * Error (red) for urgent counts, Neutral for plain totals.
 * Full spec: llms-components.txt → Badge / Count.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4239-25",
  {
    props: {
      tone: figma.enum("Tone", {
        Neutral: "badge-count-neutral",
        Brand: "badge-count-brand",
        Error: "badge-count-error",
      }),
    },
    example: (props) => html`<span class="badge-count ${props.tone}">3</span>`,
  },
)
