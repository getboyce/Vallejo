# Cursor Integration Guide

This document provides instructions for future Cursor sessions on how to use and reference the Vallejo Design System.

## 🎯 Purpose

The Vallejo Design System is a comprehensive repository of design tokens, components, and patterns extracted from Figma. It serves as the single source of truth for building prototypes and concepts in Cursor.

## 📍 Location

The design system is located at: `/Users/psboyce/Cursor Projects/vallejo-design-system/`

## 🔍 How to Reference This Design System

### For Cursor AI Sessions

When starting a new project or prototype, reference this design system by:

1. **Including the design system path in your context:**
   ```
   "I want to use components from the Vallejo Design System located at 
   /Users/psboyce/Cursor Projects/vallejo-design-system/"
   ```

2. **Importing specific components:**
   ```javascript
   import { Button, Input, Card } from '/Users/psboyce/Cursor Projects/vallejo-design-system/components';
   ```

3. **Using design tokens:**
   ```javascript
   import { colors, typography, spacing } from '/Users/psboyce/Cursor Projects/vallejo-design-system/tokens';
   ```

## 📂 Key Directories

- **`tokens/`** - All design tokens (colors, typography, spacing, shadows)
  - Use these for consistent styling across projects
  - Import as: `import tokens from './tokens/index.js'`

- **`components/`** - All UI components
  - Each component is self-contained with HTML, CSS, and JavaScript
  - Import individual components or use the main index

- **`styles/`** - Global styles and utility classes
  - Base styles, resets, and utility classes
  - Include `main.css` for full styling

- **`assets/`** - Icons, logos, and static assets
  - SVG icons and logo files
  - Reference paths relative to assets directory

## 🎨 Using Components

### Example: Using a Button Component

```html
<!-- Include the design system CSS -->
<link rel="stylesheet" href="/path/to/vallejo-design-system/styles/main.css">

<!-- Use the component -->
<button class="vds-button vds-button--primary" data-vds-component="button">
  Click Me
</button>

<script type="module">
  import { Button } from '/path/to/vallejo-design-system/components/button/button.js';
  Button.init();
</script>
```

### Example: Using Design Tokens

```javascript
import { colors, typography, spacing } from '/path/to/vallejo-design-system/tokens/index.js';

// Use in your code
const primaryColor = colors.primary[500];
const headingFont = typography.heading.fontFamily;
const mediumSpacing = spacing.medium;
```

## 🔄 Updating the Design System

### When Figma Changes

1. **Access Figma via MCP:**
   - Ensure Figma MCP server is running (http://127.0.0.1:3845/mcp)
   - Use the Figma file: `ixkN3RSoiQc5aSlxZ21Hay`

2. **Extract Updated Tokens:**
   - Run the extraction script or manually update token files
   - Update `tokens/` directory with new values

3. **Update Components:**
   - Check component specifications in Figma
   - Update corresponding component files in `components/`

4. **Regenerate Documentation:**
   ```bash
   npm run docs
   ```

## 📋 Component Checklist

When building a new prototype, ensure you're using components from this design system:

- [ ] Typography styles from `tokens/typography.js`
- [ ] Colors from `tokens/colors.js`
- [ ] Spacing from `tokens/spacing.js`
- [ ] Components from `components/` directory
- [ ] Icons from `assets/icons/`
- [ ] Logos from `assets/logos/`

## 🚨 Important Notes

1. **Never modify the design system directly** - Create project-specific overrides if needed
2. **Always reference tokens** - Don't hardcode colors, spacing, or typography values
3. **Use semantic naming** - Follow the naming conventions in the design system
4. **Maintain consistency** - All prototypes should use the same design system version

## 🔗 Quick Reference

- **Figma File:** `ixkN3RSoiQc5aSlxZ21Hay`
- **Design System Path:** `/Users/psboyce/Cursor Projects/vallejo-design-system/`
- **Main Entry:** `components/index.js` and `styles/main.css`

## 💡 Tips for Cursor Sessions

1. Start by reading this file to understand the structure
2. Check `docs/components.md` for available components
3. Reference `docs/tokens.md` for design token values
4. Use the examples in `examples/` directory as starting points
5. When in doubt, check the Figma file for the latest specifications
