# Figma Data Extraction Guide

This guide explains how to extract design tokens and component specifications from your Figma design system.

## Figma File Information

- **File Key:** `ixkN3RSoiQc5aSlxZ21Hay`
- **File URL:** https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation

## Node IDs

All component and token node IDs from your design system:

| Component | Node ID | Status |
|-----------|---------|--------|
| Typography | `25-90` | Needs extraction |
| Icons | `854-2692` | Needs extraction |
| Logos | `33-587` | Needs extraction |
| Alerts | `138-5100` | Needs extraction |
| Toasts | `690-928` | Needs extraction |
| Buttons | `709-3977` | Needs extraction |
| Inputs | `704-813` | Needs extraction |
| Checkboxes | `714-367` | Needs extraction |
| Filter Chips | `719-367` | Needs extraction |
| Input Dropdowns | `720-2323` | Needs extraction |
| Status Tokens | `720-2619` | Needs extraction |
| Toggles | `138-4789` | Needs extraction |
| Tooltips | `720-2645` | Needs extraction |
| Accordions | `720-2671` | Needs extraction |
| Switcher | `720-2687` | Needs extraction |
| Radio Buttons | `720-2717` | Needs extraction |
| Tabbed Navigation | `722-4359` | Needs extraction |
| Dashboard Cards | `755-413` | Needs extraction |
| Drop Shadows | `755-588` | Needs extraction |
| Search Bar | `720-2750` | Needs extraction |
| Modals | `138-4846` | Needs extraction |
| Shelves | `138-4826` | Needs extraction |
| Mobile Shelf | `465-812` | Needs extraction |
| Date Picker | `720-2658` | Needs extraction |
| Mobile Date Picker | `776-2531` | Needs extraction |
| Pagination | `720-2792` | Needs extraction |
| Progress Tracker | `459-1086` | Needs extraction |
| Tables | `871-7575` | Needs extraction |

## Extraction Methods

### Method 1: Using Figma MCP Server (Recommended)

1. **Enable Figma MCP Server:**
   - Open your Figma file
   - Switch to Dev Mode (Shift + D)
   - Enable desktop MCP server
   - Server runs at `http://127.0.0.1:3845/mcp`

2. **Connect to Cursor:**
   - In Figma Dev Mode, click "Set up an MCP client"
   - Select "Cursor"
   - Add the MCP server URL
   - Follow authentication prompts

3. **Extract Data in Cursor:**
   ```
   "Extract design tokens from Figma file ixkN3RSoiQc5aSlxZ21Hay, 
   specifically the typography tokens from node 25-90"
   ```

### Method 2: Using Figma API

1. **Get Figma API Token:**
   - Go to Figma Settings > Personal Access Tokens
   - Generate a new token

2. **Use the Extraction Script:**
   ```bash
   node scripts/extract-figma.js
   ```

3. **Manual API Calls:**
   ```javascript
   const response = await fetch(
     `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${NODE_ID}`,
     {
       headers: {
         'X-Figma-Token': 'YOUR_TOKEN'
       }
     }
   );
   ```

### Method 3: Manual Extraction

1. Open Figma file in Dev Mode
2. Select the component/token you want to extract
3. Copy CSS properties from the right panel
4. Update corresponding files in the design system

## What to Extract

### Design Tokens

#### Colors
- Primary color scale (50-900)
- Semantic colors (success, warning, error, info)
- Text colors
- Background colors
- Border colors

#### Typography
- Font families
- Font sizes
- Font weights
- Line heights
- Letter spacing
- Text styles (h1-h6, body, etc.)

#### Spacing
- Base spacing scale
- Component-specific spacing
- Semantic spacing values

#### Shadows
- Elevation levels
- Component-specific shadows
- Interactive state shadows

### Components

For each component, extract:

1. **Visual Properties:**
   - Colors (fill, stroke, text)
   - Typography (font, size, weight)
   - Spacing (padding, margin, gap)
   - Borders (width, radius, color)
   - Shadows
   - Dimensions (width, height, min/max)

2. **States:**
   - Default
   - Hover
   - Active/Pressed
   - Focus
   - Disabled
   - Error
   - Loading

3. **Variants:**
   - Size variants (sm, md, lg)
   - Style variants (primary, secondary, etc.)
   - Content variants

4. **Interactions:**
   - Hover effects
   - Click/press effects
   - Focus states
   - Transitions/animations

## Extraction Workflow

### Step 1: Extract Design Tokens

1. Open Figma file
2. Navigate to Foundation/Tokens section
3. Extract each token category:
   - Colors → `tokens/colors.js` and `tokens/colors.css`
   - Typography → `tokens/typography.js` and `tokens/typography.css`
   - Spacing → `tokens/spacing.js` and `tokens/spacing.css`
   - Shadows → `tokens/shadows.js` and `tokens/shadows.css`

### Step 2: Extract Component Specifications

For each component:

1. Select component in Figma
2. Note all variants and states
3. Extract visual properties for each state
4. Create component files:
   - `components/[component]/[component].js`
   - `components/[component]/[component].css`
   - `components/[component]/index.js`
5. Update `components/index.js`
6. Update `docs/components.md`

### Step 3: Extract Assets

1. **Icons:**
   - Export as SVG
   - Save to `assets/icons/`
   - Create icon component or sprite

2. **Logos:**
   - Export as SVG/PNG
   - Save to `assets/logos/`
   - Create logo component

### Step 4: Verify and Test

1. Compare extracted values with Figma
2. Test components in browser
3. Verify all states work correctly
4. Check accessibility
5. Update documentation

## Quick Reference Commands

### For Cursor Sessions

```
"Extract typography tokens from Figma node 25-90 and update tokens/typography.js"
```

```
"Extract button component specifications from Figma node 709-3977 and update the button component"
```

```
"Extract all color tokens from the Figma design system and update tokens/colors.js"
```

## Troubleshooting

### MCP Server Not Connecting

1. Verify Figma MCP server is running
2. Check server URL: `http://127.0.0.1:3845/mcp`
3. Verify Cursor MCP settings
4. Check firewall/network settings

### API Token Issues

1. Verify token is valid
2. Check token permissions
3. Ensure file is accessible with token
4. Check rate limits

### Node ID Not Found

1. Verify node ID is correct
2. Check if node exists in current file version
3. Try accessing parent node
4. Use Figma Dev Mode to find correct node ID

## Next Steps

After extraction:

1. ✅ Update all token files with real values
2. ✅ Implement all components with correct styles
3. ✅ Create component examples
4. ✅ Update documentation
5. ✅ Test all components
6. ✅ Create usage examples

## Notes

- Current token values are placeholders
- Components are implemented with best practices but need Figma values
- All node IDs are documented for easy reference
- Extraction can be done incrementally (one component at a time)
