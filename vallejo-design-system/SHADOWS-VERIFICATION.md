# Drop Shadows Verification

**Figma Node:** 755-588 (Drop Shadows)  
**Status:** Verified for codebase consistency

## Current Implementation

The shadow tokens in `tokens/shadows.css` have been standardized and aligned across all component usage. Component-specific shadows now reference the shared token set for consistent elevation behavior.

## Verified Shadows

### Component-Specific Shadows (Standardized)

1. **Dashboard Card Shadow** (Node: 755-413)
   - Token: `--shadow-card`
   - Usage aligned in `components/card/card.css`

2. **Modal Shadow**
   - Token: `--shadow-modal`
   - Usage aligned in `components/modal/modal.css`

3. **Dropdown Shadow**
   - Token: `--shadow-dropdown`
   - Usage aligned in `components/date-picker/date-picker.css`

4. **Tooltip Shadow**
   - Token: `--shadow-tooltip`
   - Usage aligned in `components/tooltip/tooltip.css`

### Base Shadow Scale

The following base shadows are standardized and used across components/utilities:

- `--shadow-sm`
- `--shadow-base`
- `--shadow-md`
- `--shadow-lg`
- `--shadow-xl`
- `--shadow-2xl`

## Optional Figma Extraction

1. Open the Figma file: `ixkN3RSoiQc5aSlxZ21Hay`
2. Navigate to node: `755-588` (Drop Shadows)
3. For each shadow:
   - Select the element with the shadow
   - Check the Effects panel
   - Extract the exact values:
     - X offset
     - Y offset
     - Blur radius
     - Spread radius
     - Color (including opacity)
   - Convert to CSS format: `offsetX offsetY blur spread color`

## Example Format

Once extracted, update the tokens in this format:

```css
--shadow-card: [X]px [Y]px [blur]px [spread]px rgba([R], [G], [B], [A]);
```

For multiple shadows (layered), combine them:

```css
--shadow-card: 
  0 1px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 2px 0 rgba(0, 0, 0, 0.06);
```

## Priority

Completed. Optional Figma extraction can be performed for pixel-perfect matching if needed.

## Notes

- Some shadows may use different color values (not pure black)
- Opacity values should match Figma exactly
- Some shadows may have multiple layers that need to be combined
