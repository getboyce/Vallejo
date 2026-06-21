import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Table Row 1.2 — quiet data-grid row with baked Copart columns.
 * The State axis (Default / Hover / Selected) is native CSS + `aria-selected`
 * (no per-state class), so the example is static.
 * Full spec: llms-components.txt → Table Row.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4442-129",
  {
    props: {},
    example: () =>
      html`<tr class="table-row" aria-selected="true">
  <td class="table-cell table-cell-checkbox"><input class="checkbox" type="checkbox" checked aria-label="Select lot 48291023"></td>
  <td class="table-cell"><span class="input-mono">48291023</span></td>
  <td class="table-cell table-cell-stacked">
    <span class="table-cell-title">2019 Honda Civic LX</span>
    <span class="table-cell-sub input-mono">1HGES16503...</span>
  </td>
  <td class="table-cell table-cell-numeric input-mono">$8,750</td>
  <td class="table-cell">Jun 24, 2026</td>
  <td class="table-cell"><span class="badge badge-success badge-solid badge-dot"><span class="badge-dot-mark" aria-hidden="true"></span>Live</span></td>
  <td class="table-cell table-cell-actions">
    <button class="icon-btn" aria-label="More actions"><svg aria-hidden="true"><use href="#icon-more-vertical"></use></svg></button>
  </td>
</tr>`,
  },
)
