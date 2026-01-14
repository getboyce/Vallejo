# Vallejo Design System - Quick Reference

**Location:** `/Users/psboyce/Cursor Projects/vallejo-design-system/`

## 🎯 Purpose

This design system is the single source of truth for all design tokens, components, and patterns. It's designed to be easily referenced by Cursor sessions for building prototypes and concepts.

## 📂 Structure

```
vallejo-design-system/
├── tokens/              # Design tokens (colors, typography, spacing, shadows)
├── components/          # Reusable UI components
├── styles/              # Global styles and utilities
├── assets/              # Icons, logos, and static assets
├── docs/                # Documentation
├── examples/            # Usage examples
└── scripts/             # Build and extraction scripts
```

## 🚀 Quick Start

### For Cursor Sessions

1. **Reference the design system:**
   ```
   "Use components from the Vallejo Design System at 
   /Users/psboyce/Cursor Projects/vallejo-design-system/"
   ```

2. **Import components:**
   ```javascript
   import { Button, Input } from '/Users/psboyce/Cursor Projects/vallejo-design-system/components';
   ```

3. **Use design tokens:**
   ```css
   .my-component {
     color: var(--color-text-primary);
     padding: var(--spacing-4);
   }
   ```

## 📚 Documentation

- **[README.md](./README.md)** - Overview and setup
- **[Cursor Integration Guide](./docs/cursor-integration.md)** - How to use in Cursor sessions
- **[Design Tokens](./docs/tokens.md)** - All available tokens
- **[Components](./docs/components.md)** - Component documentation
- **[Usage Guidelines](./docs/usage.md)** - Best practices
- **[Figma Extraction](./docs/figma-extraction.md)** - How to extract from Figma

## 🎨 Components

### ✅ Implemented
- Button (with variants and sizes)
- Input (with validation states)

### 📋 To Be Implemented
- Typography, Icons, Logos
- Checkboxes, Radio Buttons, Toggles
- Dropdowns, Date Pickers, Filter Chips
- Alerts, Toasts, Tooltips, Status Tokens
- Tabs, Switcher, Pagination
- Cards, Modals, Shelves, Accordions, Tables
- Search Bar, Progress Tracker

## 🔧 Figma Integration

**Figma File:** `ixkN3RSoiQc5aSlxZ21Hay`

All component node IDs are documented in `docs/figma-extraction.md`.

To extract data from Figma:
1. Use Figma MCP server (if enabled)
2. Use Figma API with extraction script
3. Manual extraction following the guide

## 💡 Usage Tips

1. **Always use design tokens** - Never hardcode values
2. **Use components** - Don't recreate from scratch
3. **Follow naming conventions** - Use `vds-` prefix
4. **Check documentation** - Before building new components
5. **Update from Figma** - Keep design system in sync

## 🔄 Updating the Design System

When Figma changes:

1. Extract updated tokens/components from Figma
2. Update corresponding files
3. Test components
4. Update documentation
5. Commit changes

## 📝 Notes

- Current token values are **placeholders** - update from Figma
- Components follow best practices but need Figma specifications
- All node IDs are documented for easy extraction
- Structure is ready for all components listed

## 🆘 Need Help?

1. Check `docs/cursor-integration.md` for Cursor-specific instructions
2. Review `docs/usage.md` for best practices
3. See `examples/` for usage examples
4. Check `docs/figma-extraction.md` for Figma extraction

---

**Last Updated:** [Current Date]
**Status:** Foundation complete, awaiting Figma data extraction
