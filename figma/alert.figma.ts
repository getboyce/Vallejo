import figma, { html } from "@figma/code-connect/html"

/**
 * Vallejo Alert 1.2 — maps Figma Type onto the unprefixed `.alert` tonal class API.
 * Dismissible is a native structural choice (presence of the `.alert-dismiss` button),
 * not a class on the container — so it is not mapped.
 * Full spec: llms-components.txt → Alert.
 */
figma.connect(
  "https://www.figma.com/design/bSOhenbjW7fx7CvGhOXfC0/Vallejo-DS---1.2?node-id=4288-159",
  {
    props: {
      type: figma.enum("Type", {
        Neutral: "alert-neutral",
        Info: "alert-info",
        Success: "alert-success",
        Warning: "alert-warning",
        Error: "alert-error",
      }),
    },
    example: (props) =>
      html`<div class="alert ${props.type}" role="alert">
  <svg class="alert-icon" aria-hidden="true"><use href="#icon-alert-circle"></use></svg>
  <div class="alert-body">
    <p class="alert-title">Payment failed</p>
    <p class="alert-text">Your card was declined — update your payment method to continue.</p>
  </div>
  <button class="alert-dismiss" aria-label="Dismiss">
    <svg aria-hidden="true"><use href="#icon-close"></use></svg>
  </button>
</div>`,
  },
)
