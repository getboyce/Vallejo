# Extracting Icons and Logos from Figma

I've created extraction scripts and tools to help you extract SVG icons and logos from Figma. Here are your options:

## Option 1: Automated Extraction (Recommended)

### Prerequisites
1. Get your Figma Personal Access Token:
   - Go to https://www.figma.com/developers/api#access-tokens
   - Click "Generate new token"
   - Copy the token

### Run the Extraction Script

```bash
cd vallejo-design-system
FIGMA_TOKEN=your_token_here node scripts/extract-svgs-from-figma.js
```

This will:
- ✅ Connect to Figma API
- ✅ Extract all icons from node `854-2692`
- ✅ Extract all logos from node `33-587`
- ✅ Save SVGs to `assets/icons/` and `assets/logos/`
- ✅ Auto-generate index files

## Option 2: Manual Export + Organization

If automated extraction doesn't work, you can export manually:

### Step 1: Export from Figma

1. **Open Figma:**
   - File: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation
   - Navigate to Icons (Node: 854-2692) or Logos (Node: 33-587)

2. **For Icons:**
   - Select the icon component set or frame
   - Right-click > "Export" or use Export panel
   - Choose SVG format
   - Export all icons (you may need to export individually or as a batch)

3. **For Logos:**
   - Select logo components
   - Right-click > "Export"
   - Choose SVG format
   - Export each logo variant

### Step 2: Organize Exported Files

1. **Create raw directories:**
   ```bash
   mkdir -p assets/icons/raw
   mkdir -p assets/logos/raw
   ```

2. **Place exported SVGs in raw directories:**
   - Icons → `assets/icons/raw/`
   - Logos → `assets/logos/raw/`

3. **Run the organization script:**
   ```bash
   node scripts/organize-svgs.js
   ```

This will:
- ✅ Rename files according to conventions (`icon-*.svg`, `logo-*.svg`)
- ✅ Move files to correct directories
- ✅ Create index files

## Option 3: Using Figma Export Tools

Install a third-party tool:

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
      onlyFromPages: ['Icons'], // Change to 'Logos' for logos
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

## Expected Results

After extraction, you should have:

### Icons (~95 icons)
- Files in `assets/icons/` named `icon-*.svg`
- Index file at `assets/icons/index.js`

### Logos (2-4 variants)
- Files in `assets/logos/` named `logo-*.svg`
- Index file at `assets/logos/index.js`

## Verification

Check that extraction worked:

```bash
# Count extracted files
ls -1 assets/icons/*.svg | wc -l
ls -1 assets/logos/*.svg | wc -l

# Check index files
cat assets/icons/index.js
cat assets/logos/index.js
```

## Using Extracted SVGs

Once extracted, you can use them:

```javascript
// Import icon
import checkIcon from './assets/icons/icon-check.svg';

// Or use the index
import { icons } from './assets/icons';
const checkIcon = await icons.check();
```

```html
<!-- In HTML -->
<img src="./assets/icons/icon-check.svg" alt="Check">
```

## Troubleshooting

### "FIGMA_TOKEN required"
- Set the environment variable before running
- Windows: `set FIGMA_TOKEN=your_token`
- Mac/Linux: `FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js`

### "API error: 403"
- Verify your token has access to the file
- Check the file is shared with your account
- Generate a new token

### "No child nodes found"
- The node might be a component set
- Try exporting manually from Figma
- Check the node structure in Figma

### Rate Limiting
- Figma API has rate limits
- Script includes delays between requests
- Wait a few minutes and retry if needed

## Files Created

- `scripts/extract-svgs-from-figma.js` - Automated extraction script
- `scripts/organize-svgs.js` - Manual export organizer
- `scripts/README-EXTRACTION.md` - Detailed extraction guide
- `EXTRACTION-INSTRUCTIONS.md` - This file

## Next Steps

1. Run one of the extraction methods above
2. Verify SVGs are extracted correctly
3. Create icon/logo components (optional)
4. Update component documentation
