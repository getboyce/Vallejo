# Vallejo Design System Guide

## Introduction

The Vallejo Design System is a comprehensive design system built in Figma and optimized for use with AI tools like Claude and Cursor. This guide provides an overview of the system's structure, components, usage guidelines, and best practices.

## Design System Overview

- **Name**: Vallejo Design System
- **Version**: 1.0
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **File Key**: `ixkN3RSoiQc5aSlxZ21Hay`

## Design Tokens

Design tokens are the foundational elements of the design system. They ensure consistency across all components and implementations.

### Token architecture (hierarchy)

Vallejo uses a **three-tier** model: **primitive** → **semantic** → **component**. Prefer semantic tokens for UI (text, backgrounds, borders); use primitives for layout or when no semantic exists. Component tokens are reserved for internal use.

See **[tokens/README.md](../tokens/README.md)** for the full hierarchy, mapping to Vallejo token files, and quick reference.

### Color Tokens

The design system uses a structured color palette:

- **Brand Colors**: Primary brand color (Copart Blue: `#2662D9`)
- **Grays Scale**: Neutral colors from white to dark gray
- **Blues Scale**: Blue color variations

All colors are available as CSS variables following the pattern: `--color-category-value`

See [colors.json](../tokens/colors.json) for complete color definitions.

### Typography Tokens

The typography system is built on the Inter font family with a comprehensive scale:

- **Font Family**: Inter (base font)
- **Font Sizes**: 12px to 56px scale
- **Font Weights**: Regular (400) to Extra Bold (800)
- **Line Heights**: Optimized for readability

Type scale includes:
- Hero, Headers (H1-H4)
- Body text (Body 1-4)
- Labels (Label 1-3)
- Form fields
- Button text (various sizes)

See [typography.json](../tokens/typography.json) for complete typography definitions.

### Spacing Tokens

Spacing tokens ensure consistent layout spacing. Common values range from 2px to 64px.

See [spacing.json](../tokens/spacing.json) for spacing definitions.

### Shadow Tokens

Shadow tokens provide elevation and depth. Defined in the Dropshadows component.

See [shadows.json](../tokens/shadows.json) for shadow definitions.

### Logos

Brand logos (Copart, Wholesale Auction) are stored as exact SVGs from Figma. Run `FIGMA_ACCESS_TOKEN=xxx node scripts/fetch-figma-logos.js` to pull them, then use `assets/logos/*.svg` or `tokens/logos.json`.

See [logos.json](../tokens/logos.json) and [logos-guide.md](./logos-guide.md) for usage.

## Component Categories

Vallejo includes 25+ components: foundation (typography, icons, logos, shadows); form elements (buttons, inputs, checkboxes, radios, toggles, dropdowns, filter chips, search bar, date pickers, switcher); feedback (alerts, toasts, status tokens, tooltips); navigation (header, tabs, pagination); overlays (modals, shelves, mobile shelf); layout (dashboard cards, tables); and utilities (accordions, progress tracker). See [catalog.json](../components/catalog.json) for the full list, Figma node IDs, and `componentClasses`.

## Component Variants

Most components support multiple variants:

### Button Variants

- **Type**: Default, Secondary, Subtle, Trailing icon, Leading icon
- **Size**: Small, Default, Large, Extra Large
- **State**: Default, Hover, Inactive

### General Patterns

Many components follow similar variant patterns:
- **Type**: Different visual styles
- **Size**: Different size options
- **State**: Interactive states (Default, Hover, Active, Disabled, etc.)

## Usage Guidelines

### General Principles

1. **Use Design System Components**: Always prefer design system components over custom implementations
2. **Maintain Consistency**: Use components and tokens consistently across the application
3. **Follow Patterns**: Match existing component patterns when creating new features
4. **Accessibility First**: Ensure all components meet WCAG 2.1 AA standards

### Component Usage Guidelines

#### Buttons

**When to Use:**
- Primary actions (use Default variant)
- Secondary actions (use Secondary variant)
- Subtle actions that don't need emphasis (use Subtle variant)
- Actions with icons (use Leading/Trailing icon variants)

**Size Guidelines:**
- **Small**: For compact spaces, tables, or secondary actions
- **Default**: Standard button size for most use cases
- **Large**: For prominent primary actions
- **Extra Large**: For hero sections or very prominent CTAs

**State Guidelines:**
- **Default**: Normal interactive state
- **Hover**: Show on hover for better UX
- **Inactive**: Disabled state when action is not available

**Example:**
```
Primary action: Button (Default, Default size, Default state)
Cancel action: Button (Secondary, Default size, Default state)
Compact space: Button (Default, Small size, Default state)
```

#### Inputs

**When to Use:**
- Text input fields
- Form fields requiring user input
- Search functionality (consider Search Bar component)

**Best Practices:**
- Always include labels using Form Field typography token
- Provide clear placeholder text
- Show validation states (error, success)
- Use appropriate input type (text, email, password, etc.)

#### Checkboxes

**When to Use:**
- Multiple selections from a list
- Optional features or settings
- Terms and conditions acceptance
- Filter options

**Best Practices:**
- Use with clear labels
- Group related checkboxes
- Provide clear feedback on selection

#### Radio Buttons

**When to Use:**
- Single selection from a list
- Mutually exclusive options
- Settings with limited choices

**Best Practices:**
- Always provide a default selection
- Group related options clearly
- Use clear labels

#### Toggles

**When to Use:**
- On/off settings
- Feature toggles
- Binary choices

**Best Practices:**
- Use clear labels indicating what the toggle controls
- Show current state clearly
- Provide immediate feedback

#### Alerts

**When to Use:**
- Important messages requiring user attention
- Error notifications
- Warning messages
- Success confirmations

**Best Practices:**
- Use appropriate alert type for the message
- Keep messages concise and actionable
- Allow users to dismiss alerts
- Position alerts prominently but not intrusively

#### Toasts

**When to Use:**
- Non-critical notifications
- Success confirmations
- Brief informational messages
- Actions that don't require immediate attention

**Best Practices:**
- Auto-dismiss after appropriate time
- Don't stack too many toasts
- Use appropriate toast type
- Position consistently

#### Modals

**When to Use:**
- Important confirmations
- Focused tasks requiring user attention
- Forms that need isolation
- Critical information display

**Best Practices:**
- Include clear title and description
- Provide primary and secondary actions
- Allow easy dismissal (close button, ESC key)
- Prevent background interaction when appropriate

#### Tables

**When to Use:**
- Displaying structured data
- Data that benefits from columnar organization
- Sortable or filterable data sets
- Comparison of multiple items

**Best Practices:**
- Use appropriate column widths
- Include sorting where helpful
- Provide pagination for large datasets
- Make rows clearly distinguishable
- Ensure responsive behavior

#### Dashboard Cards

**When to Use:**
- Displaying key metrics
- Summarizing information
- Grouping related data
- Creating visual hierarchy

**Best Practices:**
- Keep content focused and scannable
- Use appropriate typography hierarchy
- Include clear titles
- Use consistent card sizes when possible

#### Tabbed Navigation

**When to Use:**
- Organizing related content into sections
- Reducing visual clutter
- Grouping similar functionality
- Creating clear content hierarchy

**Best Practices:**
- Limit number of tabs (5-7 max)
- Use clear, concise tab labels
- Indicate active tab clearly
- Maintain tab state appropriately

#### Pagination

**When to Use:**
- Navigating through multiple pages of content
- Large datasets
- Search results
- Any content that exceeds a single page

**Best Practices:**
- Show current page clearly
- Provide next/previous navigation
- Include page numbers when helpful
- Show total count when relevant

### Typography Usage

#### Headers

- **Hero**: Use sparingly for main page headlines
- **Header 1**: Main page or section titles
- **Header 2**: Section headers
- **Header 3**: Subsection headers
- **Header 4**: Small section headers

#### Body Text

- **Body 1**: Primary body text, general content
- **Body 2 M/SB**: Dashboard cards, secondary content
- **Body 3/4**: Small text, alerts, captions

#### Labels

- **Label 1**: Large labels, important form labels
- **Label 2**: Standard labels
- **Label 3**: Small labels, secondary labels
- **Form Field**: Form field labels

### Color Usage

#### Brand Colors

- **Copart Blue**: Primary brand color, use for primary actions, links, brand elements

#### Grays

- **Gray 000 (White)**: Backgrounds, card backgrounds
- **Gray 100**: Light backgrounds, subtle dividers
- **Gray 400**: Inactive text, disabled states
- **Gray 500**: Primary text, body text

#### Blues

- **Blue 300**: Light blue backgrounds
- **Blue 400**: Primary blue, links, subtle buttons

### Spacing Guidelines

- Use spacing tokens consistently
- Maintain consistent spacing between related elements
- Increase spacing for visual separation
- Decrease spacing for related elements

### Responsive Considerations

#### Desktop

- Use full component variants
- Utilize larger spacing
- Show all navigation options
- Use desktop-specific components (Shelves, Desktop Date Picker)

#### Mobile

- Use mobile-optimized components (Mobile Shelf, Mobile Date Picker)
- Reduce spacing where appropriate
- Stack elements vertically
- Use touch-friendly target sizes

### Accessibility Guidelines

#### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Provide clear focus indicators
- Maintain logical tab order

#### Screen Readers

- Include proper ARIA labels
- Use semantic HTML
- Provide alternative text for images
- Describe interactive elements clearly

#### Color Contrast

- Ensure sufficient contrast ratios (WCAG AA minimum)
- Don't rely solely on color to convey information
- Provide additional visual indicators

#### Focus States

- Make focus states clearly visible
- Use design system focus styles
- Ensure focus order is logical

### Common Patterns

#### Form Pattern

1. Form Field label (Form Field typography)
2. Input component
3. Validation message (if needed)
4. Submit button (Primary)
5. Cancel button (Secondary, if needed)

#### Card Pattern

1. Dashboard Card component
2. Header with title (Header 3 or Header 4)
3. Content with Body 2 typography
4. Action buttons (if needed)

#### Navigation Pattern

1. Tabbed Navigation for main sections
2. Breadcrumbs for deep navigation (if needed)
3. Pagination for content lists

### Anti-Patterns to Avoid

1. **Don't create custom components** when design system components exist
2. **Don't hardcode values** - use design tokens
3. **Don't mix design systems** - stick to Vallejo Design System
4. **Don't skip accessibility** - always include proper ARIA attributes
5. **Don't ignore responsive design** - consider all screen sizes

## Using Components

### In Code

When implementing components:

1. **Use Design Tokens**: Always reference tokens instead of hardcoding values
2. **Follow Patterns**: Match existing component patterns
3. **Include Variants**: Support all relevant variants
4. **TypeScript**: Use proper TypeScript types
5. **Accessibility**: Include proper ARIA attributes

### With AI Tools

When using AI tools:

1. **Reference Components**: Use component names and node IDs from the catalog
2. **Specify Variants**: Clearly state which variants you need
3. **Use Tokens**: Reference token files for styling
4. **Provide Context**: Explain the use case and requirements

## Figma Integration

All components can be accessed via Figma MCP tools:

- **File Key**: `ixkN3RSoiQc5aSlxZ21Hay`
- **Node IDs**: See [component catalog](../components/catalog.json) for specific node IDs

### Accessing Components

Use Figma MCP tools to:
- Get design context for components
- Extract design tokens
- View component variants
- Get screenshots for reference

## Component Catalog

See [catalog.json](../components/catalog.json) for a complete list of all components with:
- Component names
- Figma node IDs
- Direct Figma links
- Component descriptions
- Variant information

## Documentation

- [Component Catalog](../components/catalog.json) - Complete component reference
- [Token hierarchy](../tokens/README.md) - Primitive → semantic → component architecture
- [Icon System Guide](./icon-system-guide.md) - Icon usage

## Getting Help

1. Check [catalog.json](../components/catalog.json) for components and Figma node IDs
2. Use [AI-QUICK-REFERENCE.md](../AI-QUICK-REFERENCE.md) and [all-components-demo.html](../test-examples/all-components-demo.html) for implementation
3. Reference the [Figma file](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation) for visual reference
