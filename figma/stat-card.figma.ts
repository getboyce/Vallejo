import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Stat / KPI Card 1.2 — a hero singular number with optional delta.
 * Trend (None = value + context; Up = Δ ▲ in success-text; Down = Δ ▼ in
 * error-text) maps onto the `.stat-card` modifier class; None carries no class.
 * The "Sparkline" boolean is off-by-default and behavioral — not a class.
 * Full spec: llms-components.txt → Stat Card.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4484-186",
  {
    props: {
      trend: figma.enum("Trend", {
        None: "",
        Up: "stat-card-up",
        Down: "stat-card-down",
      }),
    },
    example: (props) =>
      html`<div class="stat-card ${props.trend}">
  <p class="stat-card-label">Active bids</p>
  <p class="stat-card-value">1,284</p>
  <p class="stat-card-delta">
    <svg class="stat-card-arrow" aria-hidden="true"><use href="#icon-arrow-up"></use></svg> 12% vs last week
  </p>
</div>`,
  },
)
