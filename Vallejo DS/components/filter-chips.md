# Filter Chips Component

## Overview

The Filter Chip component is a compact, pill-shaped control in the Vallejo Design System, used for filtering, selection, and categorization. Chips display a label (often with a count) and can be selected or unselected, with optional sort indicators.

**Figma Reference:**
- **Node ID**: `719-367`
- **Figma Link**: [Filter Chips Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=719-367&m=dev)

## Description

Filter chips allow users to apply filters, toggle categories, or make selections from a set of options. They are commonly used in lists, tables, and search contexts (e.g., bid status, categories, tags). Chips provide immediate visual feedback for active vs. inactive state and can include sort direction indicators (ascending/descending).

### Use Cases

- **Filtering**: Filter lists or tables by category, status, or attribute
- **Selection**: Multi-select or single-select from a set of options
- **Tags**: Display applied filters or selected tags
- **Sorting**: Indicate sort direction (e.g., with ^ or v) when chips control sort order
- **Browsing**: Category chips for navigation (e.g., "Open items", "Winning", "Won")

## Variants

### State Variants

#### Selected (Active)
- **Appearance**: Solid blue background with white text
- **Usage**: Currently applied filter or selected option
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-brand-copart-white` (#FFFFFF)
- **Visual**: High contrast, clearly indicates active state

#### Unselected (Inactive)
- **Appearance**: White background with gray border and gray text
- **Usage**: Available filter or option not yet selected
- **Background**: `--color-light-mode-neutral-000` or white
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-500` (#2F333C)
- **Visual**: Subtle, secondary to active chips

#### Hover (Unselected)
- **Appearance**: Slightly darker border or light gray background
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)
- **Background (optional)**: `--color-light-mode-neutral-100` (#F4F5F6) or `--color-light-mode-blue-100` (#F6F9FD)

#### Disabled
- **Appearance**: Muted colors, reduced contrast
- **Interaction**: Not interactive, cursor: not-allowed
- **Border/Text**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Accessibility**: Use `aria-disabled="true"` and avoid pointer events

### Sort Indicator Variants

Chips can optionally include a sort-direction indicator:

- **None**: Chip with label (and optional count) only
- **Ascending (^)**: Trailing caret-up; indicates ascending sort when this chip is active
- **Descending (v)**: Trailing caret-down; indicates descending sort when this chip is active

### Content Variants

- **Label only**: e.g., "Open items"
- **Label + count**: e.g., "Text (11)", "Open items (6)" — count in parentheses
- **Label + sort**: e.g., "Text (20) ^", "Text (20) v"

## Props / TypeScript Interface

```typescript
interface FilterChipProps {
  /**
   * Chip label (e.g., category name, filter name)
   */
  label: string;
  
  /**
   * Optional count displayed in parentheses after label, e.g. "Label (12)"
   */
  count?: number;
  
  /**
   * Whether the chip is selected (active)
   * @default false
   */
  selected?: boolean;
  
  /**
   * Optional sort direction when chip controls sort order
   */
  sortDirection?: 'asc' | 'desc' | null;
  
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility (use when label + count isn't sufficient)
   */
  'aria-label'?: string;
  
  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit';
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Filter Chip (React/TypeScript)

```typescript
import React from 'react';

interface FilterChipProps {
  label: string;
  count?: number;
  selected?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  count,
  selected = false,
  sortDirection = null,
  disabled = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const displayLabel = count != null ? `${label} (${count})` : label;
  const sortSuffix = sortDirection === 'asc' ? ' ^' : sortDirection === 'desc' ? ' v' : '';

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      aria-label={ariaLabel ?? (count != null ? `${label}, ${count} items` : label)}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
        fontSize: 'var(--typography-font-size-300, 14px)',
        fontWeight: 'var(--typography-weight-medium, 500)',
        lineHeight: 'var(--typography-line-height-300, 20px)',
        padding: '8px 16px',
        borderRadius: 'var(--border-radius-200, 8px)',
        border: selected ? 'none' : '1px solid var(--color-light-mode-neutral-300, #C5CCD3)',
        background: selected
          ? 'var(--color-brand-copart-blue, #2662D9)'
          : 'var(--color-light-mode-neutral-000, #FFFFFF)',
        color: selected
          ? 'var(--color-brand-copart-white, #FFFFFF)'
          : 'var(--color-light-mode-neutral-400, #46525D)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
      }}
    >
      {displayLabel}{sortSuffix}
    </button>
  );
};
```

### Usage Examples

#### Selected chip
```typescript
<FilterChip label="Open items" count={6} selected onClick={handleFilter} />
```

#### Unselected chip
```typescript
<FilterChip label="Winning" count={22} onClick={handleFilter} />
```

#### Chip with sort indicator
```typescript
<FilterChip label="Text" count={20} sortDirection="asc" selected onClick={handleSort} />
<FilterChip label="Text" count={20} sortDirection="desc" onClick={handleSort} />
```

#### Disabled chip
```typescript
<FilterChip label="Unavailable" disabled />
```

#### Chip group
```typescript
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
  <FilterChip label="Open items" count={6} selected onClick={handleFilter} />
  <FilterChip label="Outbid" count={7} onClick={handleFilter} />
  <FilterChip label="Winning" count={22} onClick={handleFilter} />
  <FilterChip label="Won" count={24} onClick={handleFilter} />
</div>
```

## Design Tokens Used

### Colors

#### Selected (Active)
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-brand-copart-white` (#FFFFFF)

#### Unselected (Inactive)
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-500` (#2F333C)

#### Hover (Unselected)
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6) or `--color-light-mode-blue-100` (#F6F9FD)
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3) or slightly darker

#### Disabled
- **Border / Text**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6) or white

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-300` (14px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-300` (20px)

### Spacing

- **Padding Horizontal**: `--spacing-16` (16px) or similar
- **Padding Vertical**: `--spacing-8` (8px)
- **Gap between chips**: `--spacing-8` (8px) when used in a group

### Border Radius

- **Chip**: `--border-radius-200` (8px) or `--border-radius-medium` (8px) — pill-like rounded corners

## Accessibility

### ARIA Attributes

- **`role="option"`** or **`role="button"`**: Use when chips act as toggles or options in a filter group
- **`aria-selected`**: Set to `true` when the chip is selected (active)
- **`aria-disabled`**: Set to `true` when disabled (in addition to `disabled` on native button)
- **`aria-label`**: Use when label + count doesn’t fully describe the control (e.g., "Filter by Open items, 6 results")

### Keyboard Navigation

- **Enter / Space**: Activate toggle when focused
- **Tab**: Move focus to next chip or focusable element
- **Shift+Tab**: Move focus to previous focusable element
- When used in a filter group, consider **Arrow keys** for moving between chips

### Focus States

- **Visible focus indicator**: Use a visible focus ring (browser default or design-system focus ring)
- **Focus ring**: Align with design system focus styling (e.g., blue outline)

### Best Practices

1. **Clear labels**: Use concise, descriptive labels (e.g., "Open items", "Winning")
2. **Counts**: Include counts when they help users understand result set size
3. **Touch targets**: Maintain adequate touch target size (min ~32px height)
4. **Group semantics**: Use `role="group"` and `aria-label` on the chip group when applicable

### Screen Reader Considerations

- Chips are announced as buttons or options; ensure label and state are clear
- Selected state should be announced (e.g., via `aria-selected`)
- Disabled state is announced when `aria-disabled` or `disabled` is set

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Hover States

Implement a smooth transition (e.g., 0.2s ease) for hover. Use hover color tokens for unselected chips.

### Disabled States

Disabled chips must not respond to clicks, should use `cursor: not-allowed`, and include `disabled` and `aria-disabled="true"`.

### Sort Indicators

When using `sortDirection`, render a trailing `^` (asc) or `v` (desc) with the same color as the label. Ensure sufficient spacing between label and indicator.

### Responsive Considerations

- Chips can wrap in a flex container with `flex-wrap: wrap` and `gap: 8px`
- On narrow viewports, consider horizontal scroll for long chip lists
- Preserve minimum touch target size (e.g., 32px height)

## Related Components

- **Buttons**: Chips are button-like but used for selection/filtering rather than primary actions
- **Input Dropdowns**: Often used alongside chips for additional filters (e.g., "Bidder: All")
- **Tabs / Tabbed Navigation**: Similar select-one-from-many pattern; tabs typically for views, chips for filters
- **Inputs, Search Bar**: Chips often complement search and filters

## Figma Reference

- **Component Node ID**: `719-367`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Filter Chips Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=719-367&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
