import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Chip 1.2 — the `.chip` class API.
 * Chip = an interactive filter/choice: a pill with a BORDER (badge is
 * filled/no-border; chip is bordered), raised like a button key.
 * The State axis (Default / Hover / Selected / Selected Hover / Disabled)
 * is native CSS — selected state is carried by `aria-pressed` + the selected
 * register, never a static class — so this stays static.
 * Full spec: llms-components.txt → Chip.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4241-69",
  {
    props: {},
    example: () => html`<button class="chip" aria-pressed="false">Sedan</button>`,
  },
)
