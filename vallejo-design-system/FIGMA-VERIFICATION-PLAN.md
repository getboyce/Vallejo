# Figma Verification & Update Plan

**Figma File:** `ixkN3RSoiQc5aSlxZ21Hay` (Vallejo-DS---Foundation)  
**Plan Date:** Current Session  
**Objective:** Verify and update all components, tokens, and design elements to match Figma specifications exactly

---

## 📋 Overview

This plan organizes the verification and update process into systematic steps. Each section includes:
- **Figma Node ID** for reference
- **Current Status** assessment
- **Verification Checklist** of specific items to check
- **Update Tasks** with exact changes needed
- **Priority Level** (High/Medium/Low)

---

## 🎨 Phase 1: Design Tokens Verification

### 1.1 Typography Tokens (Node: 25-90)
**Priority:** HIGH  
**Status:** ⚠️ Partial Match - Missing styles, incorrect line heights

#### Verification Checklist:
- [ ] Extract all text styles from Figma node `25-90`
- [ ] Verify font sizes match exactly (Hero: 56px, H1: 40px, H2: 28px, etc.)
- [ ] Verify line heights are exact pixel values (not relative)
  - Hero: 64px
  - Header 1: 48px
  - Header 2: 32px
  - Header 3: 24px
  - Body 1: 22px
  - Body 2 M: 20px
  - Body 3: 18px
  - Body 4: 16px
- [ ] Verify font weights match (including Extra Bold 800)
- [ ] Check letter spacing values
- [ ] Verify all missing styles are added:
  - Hero (56px/64px Bold)
  - Header 2 (28px/32px Bold)
  - Body 4 (10px/16px Medium)
  - Button Extra Large (20px/24px SemiBold)
  - Label 1 (14px/20px Extra Bold)
  - Label 2 (12px/18px Bold)
  - Label 3 (10px/16px SemiBold)
  - Form Field (12px/18px SemiBold)
  - Tooltip (12px/16px Medium)

#### Update Tasks:
1. Extract exact typography specs from Figma
2. Update `tokens/typography.css` with exact pixel values
3. Add missing text style tokens
4. Add `--font-weight-extrabold: 800`
5. Replace relative line heights with exact pixel values
6. Update `tokens/typography.js` to match
7. Test typography in showcase page

---

### 1.2 Color Tokens
**Priority:** HIGH  
**Status:** ⚠️ Needs Verification

#### Verification Checklist:
- [ ] Extract primary color values from Figma
- [ ] Verify primary blue shade (#2662D9) matches exactly
- [ ] Verify all neutral grays match Figma values
- [ ] Check alert colors (success, warning, error, info)
- [ ] Verify text color values
- [ ] Check background color values
- [ ] Verify border color values
- [ ] Check hover/active state color variations

#### Update Tasks:
1. Extract color values from Figma design tokens
2. Compare with `tokens/colors.css`
3. Update any mismatched values
4. Add any missing color tokens
5. Verify color usage in all components

---

### 1.3 Spacing Tokens
**Priority:** MEDIUM  
**Status:** ✅ Likely Correct - Needs Verification

#### Verification Checklist:
- [ ] Extract spacing scale from Figma
- [ ] Verify spacing values match (4px, 8px, 12px, 16px, 24px, 32px, etc.)
- [ ] Check if there are additional spacing values in Figma
- [ ] Verify component-specific spacing matches

#### Update Tasks:
1. Extract spacing scale from Figma
2. Compare with `tokens/spacing.css`
3. Update if discrepancies found

---

### 1.4 Shadow Tokens (Node: 755-588)
**Priority:** MEDIUM  
**Status:** ⚠️ Standardized but needs Figma verification

#### Verification Checklist:
- [ ] Extract exact shadow values from Figma node `755-588`
- [ ] Verify base shadow scale (sm, base, md, lg, xl, 2xl)
- [ ] Verify component-specific shadows:
  - Card shadow
  - Modal shadow
  - Dropdown shadow
  - Tooltip shadow
  - Button shadows (default, hover, active)
  - Input shadows (focus, error)

#### Update Tasks:
1. Extract shadow values from Figma
2. Compare with `tokens/shadows.css`
3. Update shadow values to match exactly
4. Verify shadow usage in components

---

## 🧩 Phase 2: Foundation Components

### 2.1 Typography Component
**Priority:** HIGH  
**Status:** ⚠️ Tokens exist but utility classes may be missing

#### Verification Checklist:
- [ ] Check if Figma has typography utility classes
- [ ] Verify text style classes match Figma naming
- [ ] Check if showcase displays typography correctly

#### Update Tasks:
1. Create/update typography utility classes if needed
2. Update showcase typography section to match Figma

---

### 2.2 Icons (Node: 854-2692)
**Priority:** HIGH  
**Status:** ✅ Extracted but needs verification

#### Verification Checklist:
- [ ] Verify all 88 icons are correctly extracted
- [ ] Check icon naming matches Figma
- [ ] Verify icon sizes match Figma specifications
- [ ] Check icon colors/strokes match Figma
- [ ] Verify icon component usage matches Figma patterns

#### Update Tasks:
1. Compare extracted icons with Figma node `854-2692`
2. Verify icon names and organization
3. Check if any icons are missing
4. Update showcase icon display if needed

---

### 2.3 Logos (Node: 33-587)
**Priority:** MEDIUM  
**Status:** ✅ Extracted but needs verification

#### Verification Checklist:
- [ ] Verify all logo variants are extracted
- [ ] Check logo sizing matches Figma
- [ ] Verify logo colors match Figma
- [ ] Check dark/light mode variants

#### Update Tasks:
1. Compare logos with Figma node `33-587`
2. Verify all variants are present
3. Update showcase if needed

---

## 📝 Phase 3: Form Components

### 3.1 Buttons (Node: 709-3977)
**Priority:** HIGH  
**Status:** ⚠️ Partial Match - Typography and colors need verification

#### Verification Checklist:
- [ ] Extract button specifications from Figma node `709-3977`
- [ ] Verify button sizes match:
  - Small: 14px/20px Medium
  - Medium: 16px/22px Medium
  - Large: 18px/22px SemiBold ⚠️
  - Extra Large: 20px/24px SemiBold ❌
- [ ] Verify button colors match Figma exactly
- [ ] Check padding/spacing matches Figma
- [ ] Verify border radius matches
- [ ] Check hover/active state colors
- [ ] Verify icon support (caret icons for dropdowns)
- [ ] Check disabled state styling

#### Update Tasks:
1. Extract exact button specs from Figma
2. Fix Button Large typography (should be SemiBold, not Medium)
3. Add Button Extra Large variant
4. Verify and update button colors
5. Add icon support for dropdown indicators
6. Update button padding/spacing if needed
7. Update showcase button demos

---

### 3.2 Inputs (Node: 704-813)
**Priority:** HIGH  
**Status:** ⚠️ Partial Match - Icons and structure need updates

#### Verification Checklist:
- [ ] Extract input specifications from Figma node `704-813`
- [ ] Verify input structure: Label → Input → Supporting Text
- [ ] Check label styling and state-based color changes
- [ ] Verify input border thickness (2px on focus/error)
- [ ] Check icon support:
  - Search icon (left side)
  - Clear icon (right side)
  - Error icon (right side)
- [ ] Verify supporting text color changes with state
- [ ] Check input padding/spacing
- [ ] Verify search variant styling
- [ ] Check disabled state

#### Update Tasks:
1. Extract exact input specs from Figma
2. Integrate labels into component structure
3. Update label colors to change with state
4. Verify border thickness matches (2px)
5. Verify icon implementation matches Figma
6. Update supporting text color logic
7. Verify search variant matches Figma
8. Update showcase input demos

---

### 3.3 Checkboxes (Node: 714-367)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract checkbox specifications from Figma node `714-367`
- [ ] Verify checkbox size matches Figma
- [ ] Check border width and color
- [ ] Verify checkmark styling
- [ ] Check indeterminate state
- [ ] Verify disabled state
- [ ] Check focus state (shadow/outline)

#### Update Tasks:
1. Extract checkbox specs from Figma
2. Compare with current implementation
3. Update if discrepancies found
4. Update showcase if needed

---

### 3.4 Radio Buttons (Node: 720-2717)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract radio button specifications from Figma node `720-2717`
- [ ] Verify radio button size
- [ ] Check border width and color
- [ ] Verify inner dot styling
- [ ] Check disabled state
- [ ] Verify focus state

#### Update Tasks:
1. Extract radio specs from Figma
2. Compare with current implementation
3. Update if discrepancies found

---

### 3.5 Toggles (Node: 138-4789)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract toggle specifications from Figma node `138-4789`
- [ ] Verify toggle track size and colors
- [ ] Check thumb size and styling
- [ ] Verify animation/transition timing
- [ ] Check disabled state

#### Update Tasks:
1. Extract toggle specs from Figma
2. Compare with current implementation
3. Update if discrepancies found

---

### 3.6 Dropdown (Node: 720-2323)
**Priority:** HIGH  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract dropdown specifications from Figma node `720-2323`
- [ ] Verify dropdown styling matches
- [ ] Check dropdown arrow icon
- [ ] Verify states (default, focus, error, disabled)
- [ ] Check option list styling
- [ ] Verify spacing and typography

#### Update Tasks:
1. Extract dropdown specs from Figma
2. Compare with current implementation
3. Update styling to match exactly
4. Verify all states match

---

### 3.7 Date Picker (Node: 720-2658)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract date picker specifications from Figma node `720-2658`
- [ ] Verify calendar styling
- [ ] Check month/year navigation
- [ ] Verify date cell styling
- [ ] Check selected/active states
- [ ] Verify typography and spacing

#### Update Tasks:
1. Extract date picker specs from Figma
2. Compare with current implementation
3. Update styling to match

---

### 3.8 Filter Chips (Node: 719-367)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract filter chip specifications from Figma node `719-367`
- [ ] Verify chip styling
- [ ] Check selected/unselected states
- [ ] Verify spacing and typography
- [ ] Check hover/active states

#### Update Tasks:
1. Extract filter chip specs from Figma
2. Compare with current implementation
3. Update if needed

---

## 💬 Phase 4: Feedback Components

### 4.1 Alerts (Node: 138-5100)
**Priority:** HIGH  
**Status:** ⚠️ Partial Match - Icons and filled variant need verification

#### Verification Checklist:
- [ ] Extract alert specifications from Figma node `138-5100`
- [ ] Verify alert structure: Icon + Title + Description
- [ ] Check icon styling for each variant:
  - Success: Green checkmark in circle
  - Warning: Exclamation in triangle
  - Error: Exclamation in circle
  - Info: Lowercase 'i' in circle
- [ ] Verify light variant colors
- [ ] Verify filled variant (dark background, white text)
- [ ] Check typography (bold title, regular description)
- [ ] Verify spacing and padding
- [ ] Check dismiss button styling

#### Update Tasks:
1. Extract alert specs from Figma
2. Verify icon implementation matches
3. Verify filled variant matches exactly
4. Check title/description structure
5. Verify colors match Figma
6. Update showcase alerts

---

### 4.2 Toast (Node: 690-928)
**Priority:** HIGH  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract toast specifications from Figma node `690-928`
- [ ] Verify toast styling matches
- [ ] Check toast variants (success, warning, error, info)
- [ ] Verify positioning options
- [ ] Check animation/transitions
- [ ] Verify typography and spacing
- [ ] Check dismiss button

#### Update Tasks:
1. Extract toast specs from Figma
2. Compare with current implementation
3. Update styling to match exactly

---

### 4.3 Tooltip (Node: 720-2645)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract tooltip specifications from Figma node `720-2645`
- [ ] Verify tooltip styling
- [ ] Check arrow/pointer styling
- [ ] Verify positioning
- [ ] Check typography (12px/16px Medium)
- [ ] Verify colors and background
- [ ] Check shadow

#### Update Tasks:
1. Extract tooltip specs from Figma
2. Compare with current implementation
3. Update to match exactly

---

### 4.4 Status Token (Node: 720-2619)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract status token specifications from Figma node `720-2619`
- [ ] Verify token styling
- [ ] Check color indicators
- [ ] Verify typography
- [ ] Check size variants (if any)

#### Update Tasks:
1. Extract status token specs from Figma
2. Compare with current implementation
3. Update if needed

---

## 🧭 Phase 5: Navigation Components

### 5.1 Tabs (Node: 722-4359)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract tab specifications from Figma node `722-4359`
- [ ] Verify tab styling
- [ ] Check active indicator
- [ ] Verify typography
- [ ] Check spacing
- [ ] Verify hover/active states

#### Update Tasks:
1. Extract tab specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 5.2 Switcher (Node: 720-2687)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract switcher specifications from Figma node `720-2687`
- [ ] Verify switcher styling
- [ ] Check active state
- [ ] Verify typography and spacing

#### Update Tasks:
1. Extract switcher specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 5.3 Pagination (Node: 720-2792)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract pagination specifications from Figma node `720-2792`
- [ ] Verify pagination styling
- [ ] Check page number display
- [ ] Verify ellipsis handling
- [ ] Check disabled states

#### Update Tasks:
1. Extract pagination specs from Figma
2. Compare with current implementation
3. Update if needed

---

## 📐 Phase 6: Layout Components

### 6.1 Cards (Node: 755-413)
**Priority:** HIGH  
**Status:** ⚠️ Partial Match - Structure and typography need updates

#### Verification Checklist:
- [ ] Extract card specifications from Figma node `755-413`
- [ ] Verify card structure: Image → Typography → Inputs → Action
- [ ] Check card shadow matches exactly
- [ ] Verify typography constraints (Body 2 M, Body 3 SM)
- [ ] Check image section styling
- [ ] Verify input group styling
- [ ] Check action button styling
- [ ] Verify spacing and padding

#### Update Tasks:
1. Extract card specs from Figma
2. Verify image section styling matches
3. Verify typography constraints match
4. Verify input group styling
5. Verify shadow matches exactly
6. Update showcase cards

---

### 6.2 Modals (Node: 138-4846)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract modal specifications from Figma node `138-4846`
- [ ] Verify modal sizes (if variants exist)
- [ ] Check overlay styling
- [ ] Verify modal shadow
- [ ] Check header/body/footer styling
- [ ] Verify close button
- [ ] Check spacing and typography

#### Update Tasks:
1. Extract modal specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 6.3 Shelves (Node: 138-4826)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract shelf specifications from Figma node `138-4826`
- [ ] Verify shelf styling
- [ ] Check slide-in animation
- [ ] Verify overlay
- [ ] Check positioning (left/right)

#### Update Tasks:
1. Extract shelf specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 6.4 Accordions (Node: 720-2671)
**Priority:** MEDIUM  
**Status:** ✅ Assumed Match - Needs Verification

#### Verification Checklist:
- [ ] Extract accordion specifications from Figma node `720-2671`
- [ ] Verify accordion styling
- [ ] Check icon indicators
- [ ] Verify spacing and typography
- [ ] Check animation timing

#### Update Tasks:
1. Extract accordion specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 6.5 Tables (Node: 871-7575)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract table specifications from Figma node `871-7575`
- [ ] Verify table styling
- [ ] Check header styling
- [ ] Verify row styling
- [ ] Check striped rows (if in design)
- [ ] Verify sortable column indicators
- [ ] Check spacing and typography

#### Update Tasks:
1. Extract table specs from Figma
2. Compare with current implementation
3. Update if needed

---

## 🔧 Phase 7: Utility Components

### 7.1 Search Bar (Node: 720-2750)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract search bar specifications from Figma node `720-2750`
- [ ] Verify search bar styling
- [ ] Check icon placement
- [ ] Verify clear button
- [ ] Check focus states

#### Update Tasks:
1. Extract search bar specs from Figma
2. Compare with current implementation
3. Update if needed

---

### 7.2 Progress Tracker (Node: 459-1086)
**Priority:** MEDIUM  
**Status:** ✅ Implemented - Needs Verification

#### Verification Checklist:
- [ ] Extract progress tracker specifications from Figma node `459-1086`
- [ ] Verify step indicator styling
- [ ] Check connector line styling
- [ ] Verify completed/active/pending states
- [ ] Check typography and spacing

#### Update Tasks:
1. Extract progress tracker specs from Figma
2. Compare with current implementation
3. Update if needed

---

## 📊 Verification Workflow

### Step 1: Access Figma
1. Open Figma file: `ixkN3RSoiQc5aSlxZ21Hay`
2. Navigate to Dev Mode (Shift + D)
3. Use node IDs to locate specific components

### Step 2: Extract Specifications
For each component/token:
1. Locate the node in Figma
2. Extract exact values:
   - Colors (hex codes)
   - Typography (size, weight, line-height, letter-spacing)
   - Spacing (padding, margin, gaps)
   - Shadows (offset, blur, spread, color, opacity)
   - Border (width, radius, color)
   - Dimensions (width, height, min/max)
3. Document in verification checklist

### Step 3: Compare & Update
1. Compare extracted values with current implementation
2. Document discrepancies
3. Update code to match Figma exactly
4. Test in showcase page

### Step 4: Visual Verification
1. Open showcase page
2. Compare side-by-side with Figma
3. Verify pixel-perfect match
4. Document any remaining issues

---

## 🎯 Priority Order

### High Priority (Do First):
1. Typography Tokens (affects all components)
2. Color Tokens (affects all components)
3. Buttons (most used component)
4. Inputs (most used component)
5. Alerts (needs icons and filled variant)

### Medium Priority:
6. Shadow Tokens
7. Cards (structure and typography)
8. Dropdown
9. Toast
10. Tooltip
11. All other components

### Low Priority:
12. Spacing tokens (likely correct)
13. Icons/Logos (already extracted, just verify)
14. Components that are assumed matches

---

## 📝 Documentation Updates

After each phase:
1. Update `FIGMA-ALIGNMENT-VERIFICATION.md` with verification results
2. Update component documentation if specs changed
3. Update showcase page to reflect changes
4. Document any Figma discrepancies found

---

## ✅ Success Criteria

The verification is complete when:
- [ ] All typography tokens match Figma exactly
- [ ] All color tokens match Figma exactly
- [ ] All shadow tokens match Figma exactly
- [ ] All components match Figma visually
- [ ] All component states match Figma
- [ ] Showcase page displays components matching Figma
- [ ] Documentation reflects verified specifications

---

## 🔄 Iteration Process

1. **Extract** → Get exact values from Figma
2. **Compare** → Document differences
3. **Update** → Fix code to match Figma
4. **Verify** → Check in showcase/browser
5. **Document** → Update verification status
6. **Repeat** → Move to next component

---

**Next Steps:** Begin with Phase 1 (Design Tokens) as these affect all components.
