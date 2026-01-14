# Figma Design System Audit

This document tracks the comparison between Figma designs and the codebase implementation.

## Figma File
- **File Key:** `ixkN3RSoiQc5aSlxZ21Hay`
- **GitHub:** https://github.com/getboyce/Vallejo

## Design Tokens Comparison

### Colors

#### From Figma (extracted from nodes):
- `color/blue/400`: `#2662d9` ✅ (matches `colors.primary[400]`)
- `color/brand/copart-blue`: `#2662d9` ✅
- `[Light Mode] Primary/Pure White`: `#FFFFFF` ✅ (matches `colors.neutral[0]`)
- `color/grays/500`: `#2f333c` ✅ (matches `colors.neutral[500]`)
- `color/grays/400`: `#46525d` ✅ (matches `colors.neutral[400]`)
- `color/grays/200`: `#e2e5e9` ✅ (matches `colors.neutral[200]`)
- `color/grays/100`: `#f4f5f6` ✅ (matches `colors.neutral[100]`)
- `color/grays/000`: `#ffffff` ✅
- `color/light-mode/neutral/500`: `#2f333c` ✅
- `color/dark-mode/blue/400`: `#92b0ec` ⚠️ (NOT in codebase - dark mode missing)
- `[Dark Mode] Primary/Copart Blue`: `#92B0EC` ⚠️ (NOT in codebase)
- `Typography/Weight/ExtraBold`: `800` ✅ (matches `typography.fontWeight.extrabold`)

#### Missing from Codebase:
- Dark mode color tokens
- `color/brand/copart-white`: `#ffffff` (exists but not explicitly as brand color)

### Typography

#### From Figma (node 25-90):
- `Typography/Font Family/Base`: `Inter` ✅
- `Typography/Font Size/200`: `12` ✅ (matches `fontSize.xs`)
- `Typography/Font Size/300`: `14` ✅ (matches `fontSize.sm`)
- `Typography/Font Size/400`: `16` ✅ (matches `fontSize.base`)
- `Typography/Font Size/500`: `20` ✅ (matches `fontSize.lg`)
- `Typography/Font Size/550`: `22` ✅ (matches `fontSize.xl`)
- `Typography/Font Size/900`: `40` ⚠️ (exists as `fontSize['2xl']` = 40px)
- `Typography/Weight/Regular`: `400` ✅
- `Typography/Weight/Medium`: `500` ✅
- `Typography/Weight/Semibold`: `600` ✅
- `Typography/Weight/Bold`: `700` ✅
- `Typography/Weight/ExtraBold`: `800` ✅
- `Typography/Line Height/400`: `22` ✅

#### Text Styles from Figma:
- `Desktop/Header Medium`: Font(Medium, 20px, lineHeight: 28) ✅
- `Desktop/Header Small`: Font(Bold, 16px, lineHeight: 22) ✅
- `Desktop/Body 1`: Font(Medium, 16px, lineHeight: 22) ✅
- `Desktop/Body Medium`: Font(Medium, 14px, lineHeight: 20) ✅
- `Desktop/Body Small Light`: Font(Regular, 12px, lineHeight: 18) ✅
- `Desktop/Body Small Medium`: Font(Medium, 12px, lineHeight: 18) ✅
- `Desktop/Tooltip`: Font(Medium, 12px, lineHeight: 17) ✅
- `Desktop/Label Large`: Font(Bold, 16px, lineHeight: 20) ✅
- `Desktop/Label Medium`: Font(Bold, 14px, lineHeight: 18) ✅
- `Desktop/Label Small`: Font(Regular, 12px, lineHeight: 18) ✅
- `Desktop/Form Field`: Font(Semi Bold, 12px, lineHeight: 18) ✅
- `Desktop/Button Small`: Font(Medium, 14px, lineHeight: 20) ✅
- `Desktop/Button Medium`: Font(Medium, 16px, lineHeight: 22) ✅
- `Desktop/Buttton Large`: Font(Semi Bold, 16px, lineHeight: 22) ⚠️ (Note: typo in Figma "Buttton")
- `Desktop/Button Extra Large`: Font(Semi Bold, 20px, lineHeight: 28) ⚠️ (Code has 24px lineHeight, Figma has 28px)

#### Discrepancies Found:
1. **Button Extra Large lineHeight**: Code has `24px`, Figma has `28px` - NEEDS FIX
2. **Button Large**: Figma typo "Buttton" but code correctly implements as "Button Large"
3. **Font Size 900**: Figma has `40px` which matches code's `2xl` (40px), but naming differs

### Components Status

All 28 components are **IMPLEMENTED** ✅:
1. ✅ Icon
2. ✅ Logo
3. ✅ Button
4. ✅ Input
5. ✅ Checkbox
6. ✅ Radio
7. ✅ Toggle
8. ✅ Dropdown
9. ✅ DatePicker
10. ✅ MobileDatePicker
11. ✅ FilterChip
12. ✅ Alert
13. ✅ Toast
14. ✅ Tooltip
15. ✅ StatusToken
16. ✅ Tabs
17. ✅ Switcher
18. ✅ Pagination
19. ✅ Card
20. ✅ Modal
21. ✅ Shelf
22. ✅ MobileShelf
23. ✅ Accordion
24. ✅ Table
25. ✅ SearchBar
26. ✅ ProgressTracker

### Assets

#### Icons (Node: 854-2692)
- **Status**: Icons exist in `assets/icons/` (88+ icons)
- **Verification Needed**: Compare icon count and names with Figma

#### Logos (Node: 33-587)
- **Status**: Logos exist in `assets/logos/`
- **Files**: 
  - `logo-logo-copart.svg`
  - `logo-logo-copartwholesaleauction.svg`
  - `logo-mode-dark-mode.svg`
  - `logo-mode-default.svg`
  - `logo-mode-light-mode.svg`
- **Verification Needed**: Ensure all logo variants match Figma

## Action Items

### High Priority
1. ✅ **FIXED** - Button Extra Large lineHeight: Changed from `24px` to `28px` to match Figma
2. ✅ **FIXED** - Added dark mode color tokens to `tokens/colors.js`
3. ✅ **FIXED** - Added brand colors (copart-blue, copart-white)
4. ⚠️ Verify all icons match Figma node 854-2692
5. ⚠️ Verify all logos match Figma node 33-587

### Medium Priority
5. Review all component implementations against Figma specs
6. Extract spacing tokens from Figma
7. Extract shadow tokens from Figma (node 755-588)
8. Verify typography styles match exactly

### Low Priority
9. Update documentation with Figma node references
10. Add dark mode support throughout components

## Next Steps

1. Access Figma file to get complete design context for all components
2. Compare each component's implementation with Figma specifications
3. Update tokens to match Figma exactly
4. Test components against Figma designs visually
