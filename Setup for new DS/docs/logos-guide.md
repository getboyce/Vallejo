# Vallejo Design System - Logos Guide

## Overview

The Vallejo Design System includes brand logos (Copart, Wholesale Auction, and variants) extracted from Figma. Logos are stored as exact SVGs and can be used in the Header, marketing pages, and other branded surfaces.

## Logo Library Location

- **JSON Definition**: `tokens/logos.json` – Logo definitions, Figma node IDs, and inline SVG (after fetch)
- **Assets**: `assets/logos/*.svg` – Exported SVG files (after running the fetch script)
- **Figma nodes**: Copart `603-89`, Wholesale Auction `10-304`, Wholesale small `10-306`, Wholesale badge `10-151` – [Figma](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?m=dev)
- **Demo**: [test-examples/logos-demo.html](../test-examples/logos-demo.html) – All logos, labeled

## Fetching Logos from Figma

To pull the **exact SVG** from Figma, run the fetch script with your Figma personal access token:

1. Create a token: **Figma → Settings → Account → Personal access tokens**.
2. Run:
   ```bash
   FIGMA_ACCESS_TOKEN=your_token node scripts/fetch-figma-logos.js
   ```
3. The script fetches each logo from its node (Copart 603-89, Wholesale Auction 10-304, Wholesale small 10-306, Wholesale badge 10-151), saves to `assets/logos/*.svg`, updates `tokens/logos.json`, then runs **`node scripts/split-small-badge.js`** to produce `wholesale-auction-small-light/dark.svg` and `wholesale-auction-badge-light/dark.svg` from the combined small and badge exports.

You can run **`node scripts/split-small-badge.js`** alone (after fetch) to regenerate the light/dark small and badge SVGs.

## Available Logos

| Key | Description |
|-----|-------------|
| `copart` | Copart oval + wordmark. Primary brand logo. Use in Header. |
| `wholesale_auction` | Wholesale Auction full logo: shield + “Wholesale” + “AUCTION” block. |
| `wholesale_auction_small_light` | Small “Wholesale” wordmark for **light** backgrounds. |
| `wholesale_auction_small_dark` | Small “Wholesale” wordmark for **dark** backgrounds. |
| `wholesale_auction_badge_light` | Shield + checkmark badge for **light** mode. |
| `wholesale_auction_badge_dark` | Shield + checkmark badge for **dark** mode. |
| `vallejo_logos` | Full logos frame (all of the above in one SVG). |

After fetching and splitting, `logos.json` includes `file` (path to `assets/logos/*.svg`) for each. The full frame also has `svg` (inline) for legacy usage.

## Using Logos

### Method 1: Data Attributes (Static HTML)

Use `data-logo` for automatic replacement when logos are loaded:

```html
<a href="/" class="vallejo-header__logo-link">
  <span data-logo="vallejo_logos" data-logo-height="32"></span>
</a>
```

### Method 2: JavaScript

Use `renderLogo()` when you have `tokens/logos.json` (or embedded VallejoLogos):

```javascript
const html = renderLogo('vallejo_logos', { height: 32 });
element.innerHTML = html;
```

### Method 3: Image Tag (File Path)

Use the split `assets/logos/*.svg` files. For the **Header**, use `copart.svg`:

```html
<img src="assets/logos/copart.svg" alt="Copart" height="32" />
```

For Wholesale Auction or variants, use the corresponding file (e.g. `wholesale-auction.svg`, `wholesale-auction-small-light.svg`, `wholesale-auction-badge-dark.svg`).

### Method 4: Header Component

Pass a logo as `ReactNode` (e.g. inline SVG or `<img>`). Prefer **`copart.svg`** for the primary header logo:

```tsx
<Header
  logo={<img src="/assets/logos/copart.svg" alt="Copart" height={32} />}
  logoHref="/"
/>
```

## Logo Naming

Logos use `snake_case` keys (e.g. `copart`, `wholesale_auction`, `wholesale_auction_small_light`).

## Figma Reference

| Logo | Node ID | Figma |
|------|---------|-------|
| Copart | 603-89 | [Link](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=603-89&m=dev) |
| Wholesale Auction | 10-304 | [Link](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=10-304&m=dev) |
| Wholesale small (light/dark) | 10-306 | [Link](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=10-306&m=dev) |
| Wholesale badge (light/dark) | 10-151 | [Link](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=10-151&m=dev) |

## Related

- [Icon System Guide](./icon-system-guide.md) – UI icons (separate from brand logos)
- [Component Catalog](../components/catalog.json) – Logos entry and `componentClasses`
- [Design System Guide](./design-system-guide.md) – Overview
