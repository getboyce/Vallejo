# Extracting Icons and Logos from Figma

This guide explains how to extract SVG icons and logos from the Figma design system.

## Quick Start

### Option 1: Using the Extraction Script (Recommended)

1. **Get your Figma Personal Access Token:**
   - Go to https://www.figma.com/developers/api#access-tokens
   - Click "Generate new token"
   - Copy the token

2. **Run the extraction script:**
   ```bash
   cd vallejo-design-system
   FIGMA_TOKEN=your_token_here node scripts/extract-svgs-from-figma.js
   ```

3. **Check the output:**
   - Icons will be saved to `assets/icons/`
   - Logos will be saved to `assets/logos/`
   - Index files will be auto-generated

### Option 2: Manual Export from Figma

1. **Open Figma:**
   - File: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation
   - Navigate to Icons (Node: 854-2692) or Logos (Node: 33-587)

2. **Export Icons:**
   - Select the icon component set or individual icons
   - Right-click > Export
   - Choose SVG format
   - Save to `assets/icons/` with naming: `icon-[name].svg`

3. **Export Logos:**
   - Select logo components
   - Right-click > Export
   - Choose SVG format
   - Save to `assets/logos/` with naming: `logo-[name].svg`

### Option 3: Using Figma Export Tools

Install a Figma export tool:

```bash
npm install --save-dev @figma-export/cli @figma-export/output-components-as-svg
```

Create `.figmaexportrc.js`:

```javascript
import { outputComponentsAsSvg } from '@figma-export/output-components-as-svg';

export default {
  commands: [
    ['components', {
      fileId: 'ixkN3RSoiQc5aSlxZ21Hay',
      onlyFromPages: ['Icons'], // or 'Logos'
      outputters: [
        outputComponentsAsSvg({
          output: './assets/icons', // or './assets/logos'
        })
      ]
    }]
  ]
};
```

Run:
```bash
npx figma-export
```

## Node IDs

- **Icons:** `854-2692`
- **Logos:** `33-587`
- **File Key:** `ixkN3RSoiQc5aSlxZ21Hay`

## Naming Conventions

### Icons
- Format: `icon-[name].svg`
- Examples: `icon-check.svg`, `icon-arrow-right.svg`, `icon-user.svg`
- Use lowercase, hyphens for spaces

### Logos
- Format: `logo-[name].svg`
- Examples: `logo-copart.svg`, `logo-wholesale-auction.svg`
- Use lowercase, hyphens for spaces

## After Extraction

Once SVGs are extracted:

1. **Index files are auto-generated** in `assets/icons/index.js` and `assets/logos/index.js`

2. **Use icons in your code:**
   ```javascript
   import { icons } from './assets/icons';
   
   // Load an icon
   const checkIcon = await icons.check();
   ```

3. **Create icon component** (optional):
   ```javascript
   // components/icon/icon.js
   export class Icon {
     constructor(name, size = 16) {
       this.name = name;
       this.size = size;
     }
     
     render() {
       return `<svg width="${this.size}" height="${this.size}">...</svg>`;
     }
   }
   ```

## Troubleshooting

### Script Fails with "FIGMA_TOKEN required"
- Make sure you set the environment variable
- On Windows: `set FIGMA_TOKEN=your_token` then run the script
- On Mac/Linux: `FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js`

### "API error: 403"
- Your token might not have access to the file
- Verify the file is shared with your account
- Generate a new token

### "No child nodes found"
- The node might be a component set
- Try selecting individual components in Figma
- Or use manual export method

### Rate Limiting
- Figma API has rate limits
- The script includes delays between requests
- If you hit limits, wait a few minutes and retry

## Expected Icons

Based on the Figma design, you should extract approximately:

- **Icons:** ~95 distinct icons
- **Logos:** 2-4 logo variants (Copart, Wholesale Auction, etc.)

## Verification

After extraction, verify:

1. All SVG files are valid XML
2. Files are named correctly
3. Index files are generated
4. Icons render correctly in browser

```bash
# Check SVG files
ls -la assets/icons/*.svg
ls -la assets/logos/*.svg

# Verify index files
cat assets/icons/index.js
cat assets/logos/index.js
```
