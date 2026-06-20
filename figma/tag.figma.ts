import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Tag 1.2 — maps Figma Tone onto the `.tag` class API.
 * Tag = a fixed attribute/category/applied choice. Squarer (radius 6) and
 * quieter than a badge. Neutral gray = a fact (never removable);
 * risk tonals (Positive/Caution/Critical) = facts the buyer must weigh;
 * Applied (blue) = the user put it there — the ONLY removable tone.
 * The Removable axis swaps in a trailing × button (see llms-components.txt);
 * shown static here. Full spec: llms-components.txt → Tag.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4239-62",
  {
    props: {
      tone: figma.enum("Tone", {
        Neutral: "tag-neutral",
        Positive: "tag-positive",
        Caution: "tag-caution",
        Critical: "tag-critical",
        Applied: "tag-applied",
      }),
    },
    example: (props) => html`<span class="tag ${props.tone}">Clean title</span>`,
  },
)
