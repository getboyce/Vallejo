# Icons and Logos Extraction Status

## Current Situation

✅ **Figma Desktop is running**  
✅ **MCP Server is accessible** at `http://127.0.0.1:3845/mcp`  
✅ **Extraction scripts are ready**

## What's Needed

To extract SVGs automatically, we need one of:

1. **Figma API Token** - For API-based extraction
2. **MCP Tool Configuration** - For MCP-based extraction (needs proper tool setup)

## Ready-to-Use Scripts

### 1. API-Based Extraction (Requires Token)
```bash
FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js
```

### 2. Manual Export + Organization
1. Export SVGs from Figma manually
2. Place in `assets/icons/raw/` or `assets/logos/raw/`
3. Run: `node scripts/organize-svgs.js`

## Next Steps

Since automated extraction requires setup, please either:

**Option A:** Provide Figma API token
- Get from: https://www.figma.com/developers/api#access-tokens
- Then run: `FIGMA_TOKEN=token node scripts/extract-svgs-from-figma.js`

**Option B:** Export manually from Figma
- Open: https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation
- Navigate to Icons (854-2692) or Logos (33-587)
- Export as SVG
- Place in raw directories
- Run organization script

All scripts are ready and waiting for either a token or manual exports!
