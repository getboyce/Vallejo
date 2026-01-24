# Search Bar Component

## Overview

The Search Bar component is a text input in the Vallejo Design System dedicated to search functionality. It features a leading magnifying-glass icon, placeholder text (e.g., "Search text goes here"), and optional clear button. Styling aligns with the standard Input component and Material Design–style tokens.

**Figma Reference:**
- **Node ID**: `720-2750`
- **Figma Link**: [Search Bar Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2750&m=dev)

## Description

The Search Bar is used wherever users enter search queries: global search, table filtering, search within a list, or search-driven navigation. It provides a consistent, recognizable pattern (magnifying glass + placeholder) and can support clear-on-click and keyboard shortcuts (e.g., Escape to clear).

### Use Cases

- **Global search**: Site-wide or app-wide search
- **Filter search**: Search within filtered lists (e.g., bids, lots, items)
- **Table search**: Filter table rows by text
- **Navigation**: Search-driven navigation (e.g., command palette, type-ahead)
- **Discovery**: Search across catalogs, documentation, or content

## Variants

### State Variants

#### Default / Empty
- **Appearance**: White background, light gray border, leading search icon, placeholder "Search text goes here"
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Icon**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-500` (#2F333C) (dark gray)

#### Focused
- **Appearance**: Blue border, cursor visible
- **Border**: `--color-brand-copart-blue` (#2662D9)
- **Icon**: Can remain gray or match accent

#### Filled
- **Appearance**: User has typed; dark gray text. Optional trailing clear (X) button appears.
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Clear button**: Gray icon; hover state for feedback

#### Disabled
- **Appearance**: Light gray background, muted border and placeholder
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Placeholder / Icon**: `--color-light-mode-neutral-400` (#46525D)
- **Accessibility**: `disabled` and `aria-disabled="true"`

### Optional Features

- **Clear button**: Trailing X icon when input has value; clears on click
- **Search + Clear**: Both leading search icon and trailing clear icon
- **Label**: Optional visible label above (e.g., "Search"); typically omitted for compact global search

## Props / TypeScript Interface

```typescript
interface SearchBarProps {
  /**
   * Current value (controlled)
   */
  value?: string;
  
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  
  /**
   * Placeholder text
   * @default 'Search text goes here'
   */
  placeholder?: string;
  
  /**
   * Whether to show clear button when value is non-empty
   * @default true
   */
  showClearButton?: boolean;
  
  /**
   * Whether the search bar is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Submit handler (e.g. on Enter)
   */
  onSubmit?: (value: string) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Input id (for label association)
   */
  id?: string;
  
  /**
   * Accessible label (required if no visible label)
   */
  'aria-label'?: string;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Input name (for forms)
   */
  name?: string;
  
  [key: string]: any;
}
```

## Code Examples

### Basic Search Bar (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface SearchBarProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  showClearButton?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  id?: string;
  'aria-label'?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  defaultValue,
  placeholder = 'Search text goes here',
  showClearButton = true,
  disabled = false,
  onChange,
  onSubmit,
  id,
  'aria-label': ariaLabel,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const current = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (value === undefined) setInternalValue(v);
    onChange?.(e);
  };

  const handleClear = () => {
    if (value === undefined) setInternalValue('');
    onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit?.(current);
    if (e.key === 'Escape') handleClear();
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 360,
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 8,
        background: 'var(--color-light-mode-neutral-000, #FFFFFF)',
        border: '1px solid var(--color-light-mode-neutral-300, #C5CCD3)',
        borderRadius: 'var(--border-radius-200, 8px)',
        boxSizing: 'border-box',
      }}
    >
      <span
        aria-hidden
        style={{
          width: 16,
          height: 16,
          flexShrink: 0,
          color: 'var(--color-light-mode-neutral-400, #46525D)',
        }}
      >
        {/* Magnifying glass icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        role="searchbox"
        value={current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel ?? 'Search'}
        aria-disabled={disabled}
        style={{
          flex: 1,
          minWidth: 0,
          height: '100%',
          border: 'none',
          outline: 'none',
          fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
          fontSize: 16,
          color: 'var(--color-light-mode-neutral-500, #2F333C)',
          background: 'transparent',
        }}
      />
      {showClearButton && current && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={handleClear}
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: 'var(--color-light-mode-neutral-400, #46525D)',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};
```

### Usage Examples

#### Basic
```typescript
<SearchBar placeholder="Search text goes here" onChange={handleSearch} />
```

#### With submit on Enter
```typescript
<SearchBar
  placeholder="Search lots..."
  onSubmit={(v) => performSearch(v)}
  onChange={(e) => setQuery(e.target.value)}
/>
```

#### With clear button disabled
```typescript
<SearchBar showClearButton={false} placeholder="Search" />
```

#### Disabled
```typescript
<SearchBar disabled placeholder="Search" />
```

## Design Tokens Used

### Colors

- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Border (default)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Border (focused)**: `--color-brand-copart-blue` (#2662D9)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Icon (search / clear)**: `--color-light-mode-neutral-400` (#46525D)
- **Disabled**: Background `--color-light-mode-neutral-100` (#F4F5F6), border/text `--color-light-mode-neutral-300`–`400`

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-400` (16px)
- **Line Height**: `--typography-line-height-400` (22px)
- **Placeholder**: Same size; use placeholder color token

### Spacing

- **Height**: 56px (align with `--md-input-height` when using MD-style inputs)
- **Padding horizontal**: `--spacing-16` (16px) or `--md-input-padding-x`
- **Gap between icon and text**: `--spacing-8` (8px) or `--md-input-leading-gap`
- **Icon size**: 16px (`--md-input-leading-icon-size` if applicable)

### Border Radius

- **Search bar**: `--border-radius-200` (8px)

### Input-Specific Tokens (Material Design–style)

When inputs follow the input-demo pattern, reuse:

- `--md-input-height`: 56px
- `--md-input-padding-x`: 16px
- `--md-input-leading-icon-size`: 16px
- `--md-input-leading-gap`: 8px
- `--md-input-transition`: 0.2s cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

### ARIA Attributes

- **`role="searchbox"`**: Use on the underlying input (or ensure it’s clear from context)
- **`aria-label`**: Required when there is no visible label (e.g., "Search")
- **`aria-disabled`**: Set when disabled
- **Clear button**: `aria-label="Clear search"` or equivalent

### Keyboard Navigation

- **Enter**: Submit search (if `onSubmit` is provided)
- **Escape**: Clear input (when clear button is shown)
- **Tab**: Move focus to next/previous focusable element

### Focus States

- **Visible focus**: Ensure focus ring on the search bar (or inner input) when focused
- **Focus ring**: Align with design system focus styling

### Best Practices

1. **Placeholder**: Use helpful, specific text (e.g., "Search text goes here", "Search lots...")
2. **Label**: Provide a visible label when in a form, or `aria-label` for standalone search
3. **Clear button**: Offer clear when users frequently refine queries; ensure it’s keyboard accessible
4. **Touch targets**: Maintain minimum height (e.g., 56px) and adequate hit area for icon/clear

### Screen Reader Considerations

- Search role/label is announced so users know it’s a search field
- Clear button is announced with a descriptive label
- Disabled state is announced when applicable

## Implementation Notes

### Alignment with Input Component

Reuse Input styling (height, padding, border, border-radius, typography) and `--md-input-*` tokens so the Search Bar matches other form inputs. The Search Bar is effectively an Input with `type="search"` and a leading search icon.

### Icon

Use a single magnifying-glass icon (16×16px) left-aligned. Match icon color to placeholder/text tokens. SVG preferred for crisp rendering.

### Clear Button

Show only when `showClearButton` is true and the input has content. Use a distinct `aria-label`. Optional: show on focus when value exists, hide on blur if empty.

### Responsive Considerations

- Search bar can be full-width in headers or sidebars on small screens
- Preserve minimum height and touch targets
- Consider collapsing to icon-only on very narrow layouts, expanding on focus/tap

## Related Components

- **Inputs**: Same base styling and tokens; Search Bar is a specialized input
- **Input Dropdowns**: Search bar can drive option filtering in a dropdown (searchable select)
- **Filter Chips**: Often used with search (e.g., search + chip filters)
- **Buttons**: Search may trigger a primary "Search" button beside the bar in some layouts

## Figma Reference

- **Component Node ID**: `720-2750`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Search Bar Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2750&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Inputs](inputs.md) — Input field spec and Material Design–style tokens
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
