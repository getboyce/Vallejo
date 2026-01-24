# LLM Access Guide: Vallejo Design System

**Quick reference for LLMs to efficiently navigate and use the Vallejo Design System.**

---

## 🎯 Quick Start for LLMs

### **Priority 1: Essential Files (Read First)**
1. **`SYSTEM-INDEX.json`** - Complete system map and file locations
2. **`AI-QUICK-REFERENCE.md`** - All component CSS classes (use for implementation)
3. **`test-examples/all-components-demo.html`** - Working implementations (default reference)

### **Priority 2: Context & Guidance**
4. **`NEW-AGENT-PROMPT.md`** - Full system context (copy for new sessions)
5. **`components/catalog.json`** - Component metadata and Figma references
6. **`docs/design-system-guide.md`** - Usage guidelines and "When to use"

### **Priority 3: Specific Needs**
7. **`tokens/*.json`** - Design token values
8. **`LAYOUT-PATTERNS.md`** - Page-level patterns
9. **`CURSOR-PROMPT.md`** - Cursor-specific instructions

---

## 📋 System Structure

```
Vallejo Design System/
├── SYSTEM-INDEX.json          ← System map (start here)
├── AI-QUICK-REFERENCE.md      ← Component classes (use first)
├── NEW-AGENT-PROMPT.md        ← Full context handoff
├── components/
│   ├── catalog.json           ← Component index + Figma IDs
│   └── *.md                   ← Individual component docs
├── tokens/
│   ├── README.md              ← Token hierarchy
│   └── *.json                 ← Token values
├── test-examples/
│   └── all-components-demo.html ← Working implementations
└── docs/
    └── design-system-guide.md  ← Usage guidelines
```

---

## 🔍 How to Find Information

### **Finding Component Classes**
1. Check `AI-QUICK-REFERENCE.md` → Component section
2. Or check `SYSTEM-INDEX.json` → `componentQuickReference`
3. Or check `components/catalog.json` → `componentClasses`

### **Finding Design Tokens**
1. Check `tokens/README.md` for hierarchy
2. Check specific token files: `tokens/colors.json`, `tokens/spacing.json`, etc.
3. Or check `SYSTEM-INDEX.json` → `tokenQuickReference`

### **Finding Usage Guidelines**
1. Check `docs/design-system-guide.md` → "When to use" sections
2. Check component-specific `.md` files in `components/`

### **Finding Working Examples**
1. Check `test-examples/all-components-demo.html` (most comprehensive)
2. Check component-specific demos in `test-examples/`

---

## 🎨 Component Implementation Pattern

**Standard workflow:**
1. Look up classes in `AI-QUICK-REFERENCE.md`
2. Check `docs/design-system-guide.md` for "When to use"
3. Copy structure from `test-examples/all-components-demo.html`
4. Apply tokens from `tokens/*.json`

**Example:**
```
Need: Primary button
1. AI-QUICK-REFERENCE.md → "btn btn-default btn-default-type"
2. design-system-guide.md → "Use for primary actions"
3. all-components-demo.html → Copy exact HTML structure
4. tokens/colors.json → Use var(--color-brand-copart-blue)
```

---

## 📊 Component Quick Lookup

| Component | Primary Classes | File Reference |
|-----------|----------------|----------------|
| **Button (Primary)** | `btn btn-default btn-default-type` | `AI-QUICK-REFERENCE.md` |
| **Input Field** | `input input-field` + `input-label` | `AI-QUICK-REFERENCE.md` |
| **Status Token** | `status-token status-token-success status-token-filled` | `AI-QUICK-REFERENCE.md` |
| **Dashboard Card** | `dashboard-card` + `card-header` + `card-content` | `AI-QUICK-REFERENCE.md` |
| **Modal** | `modal-overlay` + `modal` + `modal-header` | `AI-QUICK-REFERENCE.md` |
| **Alert** | `alert alert-success-light` | `AI-QUICK-REFERENCE.md` |
| **Header** | `vallejo-header` | `components/header.md` |

**Full list:** See `SYSTEM-INDEX.json` → `componentQuickReference`

---

## 🎨 Token Quick Lookup

| Token Type | Common Values | File Reference |
|------------|---------------|----------------|
| **Primary Color** | `var(--color-brand-copart-blue)` = `#2662D9` | `tokens/colors.json` |
| **Text Color** | `var(--color-brand-copart-black)` = `#2F333C` | `tokens/colors.json` |
| **Border Color** | `var(--color-light-neutral-300)` = `#C5CCD3` | `tokens/colors.json` |
| **Spacing** | `var(--spacing-16)` = `16px` | `tokens/spacing.json` |
| **Typography** | `var(--typography-font-family-base)` = `Inter` | `tokens/typography.json` |
| **Icons** | `data-icon="check"` (58 available) | `tokens/icons.json` |

**Full list:** See `SYSTEM-INDEX.json` → `tokenQuickReference`

---

## 🔑 Key Rules for LLMs

1. **Always use exact class names** from `AI-QUICK-REFERENCE.md`
   - ✅ `btn btn-default btn-default-type`
   - ❌ `btn` or `button-primary`

2. **Reference working demo** for structure
   - Default to `test-examples/all-components-demo.html`

3. **Use design tokens** via CSS variables
   - Prefer semantic over primitive tokens
   - See `tokens/README.md` for hierarchy

4. **Check usage guidelines** before choosing components
   - See `docs/design-system-guide.md` → "When to use"

5. **Use only Vallejo** for Copart.com UI
   - Do not mix with Tailwind or other systems

---

## 🔍 Semantic Search Keywords

When searching for components, use these keywords:

**Components:**
- button, input, form, field, checkbox, radio, toggle, switch
- modal, dialog, alert, toast, tooltip, status, token, badge
- card, dashboard, table, pagination, tabs, navigation, header
- search, filter, chip, date, picker, accordion, shelf, panel

**Patterns:**
- login, form, dashboard, grid, layout, responsive, mobile
- vehicle, search, results, auction, bid, member, account

**Tokens:**
- color, spacing, typography, font, size, weight, shadow, border, radius, icon

---

## 📝 Example LLM Prompts

**For component implementation:**
```
Using Vallejo Design System (reference SYSTEM-INDEX.json and AI-QUICK-REFERENCE.md), 
create a [component] with [specifications]. Use exact classes and reference 
test-examples/all-components-demo.html for structure.
```

**For token usage:**
```
Apply Vallejo design tokens from tokens/*.json. Use semantic tokens when available 
(see tokens/README.md for hierarchy). Reference SYSTEM-INDEX.json for token locations.
```

**For component selection:**
```
Check docs/design-system-guide.md for "When to use" guidelines. Choose appropriate 
Vallejo component for [use case]. Reference SYSTEM-INDEX.json for component locations.
```

---

## 🎯 File Priority Matrix

| Priority | When to Use | Files |
|----------|-------------|-------|
| **P1** | Always start here | `SYSTEM-INDEX.json`, `AI-QUICK-REFERENCE.md`, `all-components-demo.html` |
| **P2** | Context & decisions | `NEW-AGENT-PROMPT.md`, `catalog.json`, `design-system-guide.md` |
| **P3** | Specific needs | Individual component docs, token files, layout patterns |

---

## 📚 Additional Resources

- **Figma Integration:** File key `ixkN3RSoiQc5aSlxZ21Hay`, node IDs in `components/catalog.json`
- **Version History:** See `CHANGELOG.md`
- **Cursor IDE:** See `.cursorrules` and `CURSOR-PROMPT.md`
- **Magic Patterns:** See `MAGIC_PATTERNS_PROMPT.md`

---

## ✅ Success Checklist

Before finalizing implementation, verify:
- [ ] Used exact class names from `AI-QUICK-REFERENCE.md`
- [ ] Referenced structure from `test-examples/all-components-demo.html`
- [ ] Applied design tokens (CSS variables) from `tokens/*.json`
- [ ] Checked "When to use" in `docs/design-system-guide.md`
- [ ] Used only Vallejo components (no Tailwind/custom)
- [ ] Included accessibility (labels, ARIA, focus states)

---

**Last Updated:** 2025-01-23  
**System Version:** 1.0  
**Optimized For:** Cursor, Claude, Magic Patterns, LLMs
