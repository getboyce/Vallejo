import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Lot Card 1.2 — the keystone Copart vehicle-listing component.
 * Standalone composed component with no variant axes (only Live / Portrait
 * built), so the example is static.
 * Full spec: llms-components.txt → Lot Card.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4422-16",
  {
    props: {},
    example: () =>
      html`<article class="lot-card">
  <div class="lot-card-media">
    <img class="lot-card-photo" src="…" alt="2019 Honda Civic LX, front-left, minor front damage">
    <span class="badge badge-success badge-solid badge-dot lot-card-status">
      <span class="badge-dot-mark" aria-hidden="true"></span>Live
    </span>
    <button class="watchlist watchlist-small lot-card-watch" aria-pressed="false" aria-label="Add to watchlist">
      <svg class="watchlist-heart" aria-hidden="true"><use href="#icon-heart"></use></svg>
    </button>
  </div>
  <div class="lot-card-body">
    <span class="tag tag-positive">Clean title</span>
    <h3 class="lot-card-title">2019 Honda Civic LX</h3>
    <p class="lot-card-meta">Lot <span class="input-mono">48291023</span> · Dallas, TX</p>
    <div class="lot-card-bid">
      <span class="lot-card-bid-label">Current bid</span>
      <span class="lot-card-bid-value input-mono">$8,750</span>
    </div>
    <button class="btn btn-primary btn-md lot-card-cta">Bid now</button>
  </div>
</article>`,
  },
)
