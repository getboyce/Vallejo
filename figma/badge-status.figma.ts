import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Badge / Status 1.2 — maps Figma Tone × Emphasis × Dot onto the
 * `.badge` class API. Badge = a changing system state: COLORED, filled,
 * no border, never removable. Subtle = tone/100 + tone/800 (calm);
 * Solid = tone/600 + white (loud/live). Optional leading Dot for live signals.
 * Full spec: llms-components.txt → Badge / Status.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4238-86",
  {
    props: {
      tone: figma.enum("Tone", {
        Info: "badge-info",
        Success: "badge-success",
        Neutral: "badge-neutral",
        Warning: "badge-warning",
        Error: "badge-error",
      }),
      emphasis: figma.enum("Emphasis", {
        Subtle: "",
        Solid: "badge-solid",
      }),
      dot: figma.enum("Dot", {
        Off: "",
        On: "badge-dot",
      }),
    },
    example: (props) =>
      html`<span class="badge ${props.tone} ${props.emphasis} ${props.dot}">Active</span>`,
  },
)
