# Status Tokens Component

## Overview

Status Tokens are visual indicators in the Vallejo Design System used to communicate the state or status of items, processes, or entities. They provide quick visual feedback about status through color and iconography.

**Figma Reference:**
- **Node ID**: `720-2619`
- **Figma Link**: [Status Tokens Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2619&m=dev)

## Description

Status tokens are small visual elements that communicate status information at a glance. They combine color, typography, and sometimes icons to quickly convey the state of an item, such as "Active", "Pending", "Completed", or "Error".

### Use Cases

- **Item Status**: Show status of items in lists or tables
- **Process Status**: Indicate progress or completion status
- **System Status**: Display system or service status
- **User Status**: Show user online/offline status
- **Order Status**: Track order or transaction status
- **Approval Status**: Show approval or review status

## Variants

### Status Types

#### Success
- **Color**: Green
- **Usage**: Completed, approved, successful states
- **Visual**: Green background or border with checkmark icon
- **Examples**: "Completed", "Approved", "Active", "Success"

#### Warning
- **Color**: Yellow/Orange
- **Usage**: Caution, pending, attention needed
- **Visual**: Yellow/orange background or border with warning icon
- **Examples**: "Pending", "Warning", "Review Required"

#### Error
- **Color**: Red
- **Usage**: Failed, rejected, error states
- **Visual**: Red background or border with error icon
- **Examples**: "Failed", "Rejected", "Error", "Cancelled"

#### Info
- **Color**: Blue
- **Usage**: Informational, in progress, neutral states
- **Visual**: Blue background or border with info icon
- **Examples**: "In Progress", "Processing", "Info"

#### Neutral
- **Color**: Gray
- **Usage**: Default, unknown, inactive states
- **Visual**: Gray background or border
- **Examples**: "Draft", "Inactive", "Unknown"

### Style Variants

#### Filled
- **Appearance**: Solid background with white text
- **Usage**: High emphasis, prominent status
- **Visual**: Strong contrast, highly visible

#### Outlined
- **Appearance**: Transparent background with colored border and text
- **Usage**: Subtle status indication
- **Visual**: Less prominent, lighter appearance

#### Dot
- **Appearance**: Small colored dot
- **Usage**: Minimal status indicator
- **Visual**: Very subtle, space-efficient

## Props / TypeScript Interface

```typescript
interface StatusTokenProps {
  /**
   * Status label
   */
  label: string;
  
  /**
   * Status type/variant
   */
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  
  /**
   * Status style
   * @default 'filled'
   */
  style?: 'filled' | 'outlined' | 'dot';
  
  /**
   * Optional icon
   */
  icon?: React.ReactNode;
  
  /**
   * Whether to show icon
   * @default false
   */
  showIcon?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Status Token

```typescript
<StatusToken label="Active" variant="success" />
<StatusToken label="Pending" variant="warning" />
<StatusToken label="Failed" variant="error" />
```

### With Icons

```typescript
<StatusToken 
  label="Completed" 
  variant="success" 
  showIcon 
/>
```

### Outlined Style

```typescript
<StatusToken 
  label="In Progress" 
  variant="info" 
  style="outlined" 
/>
```

### Dot Style

```typescript
<StatusToken 
  label="Active" 
  variant="success" 
  style="dot" 
/>
```

## Design Tokens Used

### Colors

#### Success
- **Background**: `--color-light-mode-green-500` (success green)
- **Border**: `--color-light-mode-green-500`
- **Text**: `--color-brand-copart-white` (#FFFFFF) or dark green

#### Warning
- **Background**: `--color-light-mode-yellow-500` (warning yellow)
- **Border**: `--color-light-mode-yellow-500`
- **Text**: `--color-light-mode-neutral-500` (#2F333C) or dark yellow

#### Error
- **Background**: `--color-light-mode-red-500` (error red)
- **Border**: `--color-light-mode-red-500`
- **Text**: `--color-brand-copart-white` (#FFFFFF) or dark red

#### Info
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Border**: `--color-brand-copart-blue`
- **Text**: `--color-brand-copart-white` (#FFFFFF)

#### Neutral
- **Background**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Border**: `--color-light-mode-neutral-300`
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

### Typography

- **Label**: `--typography-font-size-200` (12px) or `--typography-font-size-300` (14px)
- **Font Weight**: `--typography-weight-medium` (500) or `--typography-weight-semibold` (600)
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

- **Padding**: `--spacing-4` (4px) to `--spacing-8` (8px) horizontal, `--spacing-2` (2px) to `--spacing-4` (4px) vertical
- **Icon Gap**: `--spacing-4` (4px) between icon and label

### Border Radius

- **Token**: `--border-radius-small` (4px) or `--border-radius-200` (8px)

## Accessibility

### ARIA Attributes

- `role="status"` or `role="img"` for status indicators
- `aria-label` for descriptive status text
- `aria-live="polite"` for dynamic status updates

### Color Considerations

- Don't rely solely on color to convey status
- Include text labels or icons
- Ensure sufficient color contrast (WCAG AA minimum)

### Screen Reader Considerations

- Status text should be descriptive
- Use `aria-label` to provide context
- Status changes should be announced

## Implementation Notes

### CSS Variables

Use design tokens for all colors and styling. Status tokens should be consistent across the application.

### Color Usage

- Use semantic color names (success, error, warning) rather than literal colors
- Ensure colors are accessible and meet contrast requirements
- Consider colorblind users - use icons or patterns in addition to color

### Size Considerations

- Keep tokens compact to avoid overwhelming content
- Maintain readability with adequate padding
- Consider touch targets if tokens are interactive

## Related Components

- **Alerts**: Use similar status colors and patterns
- **Badges**: Similar visual treatment, different use case
- **Tables**: Status tokens commonly used in table cells
- **Lists**: Status tokens used in list items

## Figma Reference

- **Component Node ID**: `720-2619`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Status Tokens Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2619&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
