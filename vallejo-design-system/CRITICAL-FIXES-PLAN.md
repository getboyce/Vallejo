# Critical Fixes Plan - Showcase Issues

**Priority Order Based on User Feedback**

## 🔴 CRITICAL (Fix First)

### 1. Icons Missing
- **Issue:** Icons not displaying in showcase
- **Root Cause:** Likely import path or loading issue
- **Fix:** Check icon loading, fix paths, ensure icons load in showcase

### 2. Logos Missing  
- **Issue:** Logos not displaying
- **Root Cause:** Similar to icons - loading issue
- **Fix:** Check logo component, fix loading paths

### 3. Modal Doesn't Work
- **Issue:** Modal can't be opened/verified
- **Root Cause:** JavaScript functionality broken
- **Fix:** Fix modal open/close handlers, ensure proper initialization

### 4. Tooltips Don't Work
- **Issue:** Tooltips not showing, can't verify style
- **Root Cause:** Tooltip initialization or positioning broken
- **Fix:** Fix tooltip component initialization and positioning

## 🟠 HIGH PRIORITY (Fix Next)

### 5. Missing Colors
- **Issue:** Color tokens missing in showcase
- **Fix:** Add all color tokens to showcase, verify all are displayed

### 6. Wrong Buttons
- **Issue:** Button styling doesn't match Figma
- **Fix:** Extract button specs from Figma, update button component CSS

### 7. Wrong Input Styling
- **Issue:** Input styling incorrect
- **Fix:** Extract input specs from Figma, update input component CSS

### 8. Wrong Alerts
- **Issue:** Alert styling incorrect
- **Fix:** Extract alert specs from Figma, update alert component CSS

## 🟡 MEDIUM PRIORITY

### 9. Dropdown Wrong
- **Issue:** Dropdown styling incorrect
- **Fix:** Extract dropdown specs, update styling

### 10. Filter Chips Wrong
- **Issue:** Filter chip styling incorrect
- **Fix:** Extract filter chip specs, update styling

### 11. Status Style Wrong
- **Issue:** Status token styling incorrect
- **Fix:** Extract status token specs, update styling

### 12. Cards Wrong
- **Issue:** Card styling incorrect
- **Fix:** Extract card specs, update styling

### 13. Accordions Wrong
- **Issue:** Accordion styling incorrect
- **Fix:** Extract accordion specs, update styling

### 14. Table Wrong
- **Issue:** Table styling incorrect
- **Fix:** Extract table specs, update styling

### 15. Search Bar Wrong
- **Issue:** Search bar styling incorrect
- **Fix:** Extract search bar specs, update styling

### 16. Progress Bar Too Big
- **Issue:** Progress tracker size incorrect
- **Fix:** Adjust progress tracker sizing

### 17. Pagination Missing
- **Issue:** Pagination not showing in showcase
- **Fix:** Add pagination demo to showcase, ensure it's visible

---

## Fix Order

1. **Icons & Logos** (Critical - blocks visual verification)
2. **Modal & Tooltips** (Critical - blocks functionality testing)
3. **Colors** (High - affects all components)
4. **Buttons** (High - most visible component)
5. **Inputs** (High - most used component)
6. **Alerts** (High - important feedback component)
7. **All other components** (Medium - fix systematically)

---

## Verification After Each Fix

After fixing each item:
- [ ] Test in showcase page
- [ ] Verify visually matches Figma (if accessible)
- [ ] Check console for errors
- [ ] Test functionality
- [ ] Update documentation if needed
