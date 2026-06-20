import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Empty state 1.2 — what a region shows when it has nothing.
 * Size (Default = page / full table region, 56px icon + Title 3 + Primary MD;
 * Compact = card / inline, 40px icon + List Title + Primary SM) maps onto the
 * `.empty-state` modifier class. The "Show action" boolean is behavioral (omit
 * the button) — not a class.
 * Full spec: llms-components.txt → Empty state.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4540-3161",
  {
    props: {
      size: figma.enum("Size", {
        Default: "empty-state-default",
        Compact: "empty-state-compact",
      }),
    },
    example: (props) =>
      html`<div class="empty-state ${props.size}">
  <span class="empty-state-icon" aria-hidden="true"><svg><use href="#icon-search"></use></svg></span>
  <h3 class="empty-state-title">No lots match your filters</h3>
  <p class="empty-state-body">Try widening your price range or clearing a filter to see more results.</p>
  <button class="btn btn-primary btn-md">Clear all filters</button>
</div>`,
  },
)
