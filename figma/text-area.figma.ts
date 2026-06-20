import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Text Area 1.2 — the unprefixed `.textarea` class API. The only variant axis
 * is State (Default / Hover / Filled / Error / Success / Disabled), all native:
 * `:hover`, `:focus-visible`, `aria-invalid`, `disabled`. No class varies by variant,
 * so this is a static example. The character counter is mono + right-aligned.
 * Full spec: llms-components.txt → Text Area.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4120-152",
  {
    props: {},
    example: () =>
      html`<div class="field">
  <label class="field-label" for="notes">Description</label>
  <textarea class="textarea" id="notes" rows="4" maxlength="280"
            aria-describedby="notes-help notes-count"></textarea>
  <div class="textarea-footer">
    <p class="field-helper" id="notes-help">Be specific — buyers read these.</p>
    <span class="textarea-count input-mono" id="notes-count">0/280</span>
  </div>
</div>`,
  },
)
