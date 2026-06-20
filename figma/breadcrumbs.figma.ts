import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Breadcrumbs — the path + jump-up affordance for deep hierarchies.
 * The only axis is Levels (4) — a count of crumbs, not a class modifier — so a
 * static example. Last crumb = current page (ink, non-link, `aria-current="page"`);
 * crumbs are separated by quiet "/" separators.
 * Full spec: llms-components.txt → Breadcrumbs.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4275-132",
  {
    props: {},
    example: () => html`<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-sep" aria-hidden="true">/</li>
    <li class="breadcrumb-item"><a href="/auctions">Auctions</a></li>
    <li class="breadcrumb-sep" aria-hidden="true">/</li>
    <li class="breadcrumb-item"><a href="/auctions/tx">Texas</a></li>
    <li class="breadcrumb-sep" aria-hidden="true">/</li>
    <li class="breadcrumb-item" aria-current="page">Lot 48291023</li>
  </ol>
</nav>`,
  },
)
