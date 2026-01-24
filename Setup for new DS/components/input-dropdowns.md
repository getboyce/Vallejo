# Input Dropdowns Component

## Overview

The Input Dropdown component is a form control in the Vallejo Design System that combines a text input with a dropdown list of selectable options. It supports single and multi-select, with a label, placeholder, and chevron indicator. Selected options are shown in the input and highlighted with a checkmark in the list.

**Figma Reference:**
- **Node ID**: `720-2323`
- **Figma Link**: [Input Dropdowns Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2323&m=dev)

## Description

Input dropdowns are used when users choose one or more options from a predefined list. The input field shows the current selection (or placeholder when empty) and opens a dropdown menu with options. Options can display a checkmark when selected and support hover, disabled, and focus states. The component is suitable for forms, filters (e.g., "Bidder: All"), and any single/multi-select scenario.

### Use Cases

- **Single-select**: Choose one option (e.g., Bidder, Category, Status)
- **Multi-select**: Choose multiple options via checkboxes in the list
- **Filters**: Filter controls (e.g., "Bidder: All", "Sort by: Auction date")
- **Forms**: Form fields with a fixed set of choices
- **Searchable dropdown**: Input can filter options when combined with search

## Variants

### Input Field States

#### Default / Inactive
- **Appearance**: Label above, input with light gray border, white background, placeholder "Input"
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label**: `--color-light-mode-neutral-400` (#46525D)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)

#### Focused / Open
- **Appearance**: Blue border, dropdown list visible below
- **Border**: `--color-brand-copart-blue` (#2662D9)
- **Chevron**: Rotated to indicate open state (e.g., caret-up)

#### Filled
- **Appearance**: Input shows selected value(s); dark gray text
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Disabled
- **Appearance**: Light gray background, muted border and text
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text / Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Accessibility**: `disabled` and `aria-disabled="true"`

### Option States (Dropdown List)

#### Unselected
- **Appearance**: White background, black/dark gray text
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **No checkmark**

#### Hover
- **Appearance**: Light blue background
- **Background**: `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-blue-300` (#E1E9FA)
- **Text**: `--color-light-mode-neutral-500` or blue-tinted

#### Selected
- **Appearance**: Light blue background with blue checkmark icon to the left of label
- **Background**: `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-blue-300` (#E1E9FA)
- **Checkmark**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-light-mode-neutral-500` (#2F333C) or blue

#### Disabled
- **Appearance**: Light gray background, muted text
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-light-mode-neutral-400` (#46525D)
- **Not selectable**

### Option Types

- **Text only**: "Option" label only
- **With checkbox**: Checkbox to the left for multi-select; unchecked = unselected, checked = selected
- **With checkmark**: Checkmark icon to the left when selected (single- or multi-select)

## Props / TypeScript Interface

```typescript
interface InputDropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface InputDropdownProps {
  /**
   * Label shown above the input
   */
  label?: string;
  
  /**
   * Placeholder when no selection
   * @default 'Input'
   */
  placeholder?: string;
  
  /**
   * Available options
   */
  options: InputDropdownOption[];
  
  /**
   * Selected value(s). String for single-select, string[] for multi-select.
   */
  value?: string | string[];
  
  /**
   * Default value(s) (uncontrolled)
   */
  defaultValue?: string | string[];
  
  /**
   * Single vs multi-select
   * @default 'single'
   */
  mode?: 'single' | 'multiple';
  
  /**
   * Whether the dropdown is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the dropdown is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Name attribute for form submission
   */
  name?: string;
  
  /**
   * Change handler. For single: (value: string) => void; for multiple: (value: string[]) => void.
   */
  onChange?: (value: string | string[]) => void;
  
  /**
   * Open/close handler
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the trigger
   */
  'aria-label'?: string;
  
  /**
   * ID for form label association
   */
  id?: string;
  
  [key: string]: any;
}
```

## Code Examples

### Basic Input Dropdown (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface InputDropdownProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
  'aria-label'?: string;
}

export const InputDropdown: React.FC<InputDropdownProps> = ({
  label = 'Label',
  placeholder = 'Input',
  options,
  value,
  onChange,
  disabled = false,
  id,
  'aria-label': ariaLabel,
}) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  const displayValue = selected?.label ?? '';

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 320 }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: 'block',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            fontSize: 'var(--typography-font-size-200, 12px)',
            fontWeight: 'var(--typography-weight-regular, 400)',
            color: 'var(--color-light-mode-neutral-400, #46525D)',
            marginBottom: 4,
          }}
        >
          {label}
        </label>
      )}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel ?? label ?? placeholder}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        style={{
          width: '100%',
          height: 56,
          padding: '0 16px',
          fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
          fontSize: 16,
          textAlign: 'left',
          color: displayValue
            ? 'var(--color-light-mode-neutral-500, #2F333C)'
            : 'var(--color-light-mode-neutral-400, #46525D)',
          background: 'var(--color-light-mode-neutral-000, #FFFFFF)',
          border: `1px solid var(--color-light-mode-neutral-300, #C5CCD3)`,
          borderRadius: 'var(--border-radius-200, 8px)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{displayValue || placeholder}</span>
        <span aria-hidden>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: 4,
            background: '#fff',
            border: '1px solid var(--color-light-mode-neutral-300, #C5CCD3)',
            borderRadius: 'var(--border-radius-200, 8px)',
            boxShadow: 'var(--shadow-medium, 0 4px 12px rgba(0,0,0,0.1))',
            maxHeight: 240,
            overflowY: 'auto',
          }}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled}
              onClick={() => {
                if (opt.disabled) return;
                onChange?.(opt.value);
                setOpen(false);
              }}
              style={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: opt.disabled ? 'not-allowed' : 'pointer',
                background:
                  opt.value === value
                    ? 'var(--color-light-mode-blue-300, #E1E9FA)'
                    : 'transparent',
                color: opt.disabled
                  ? 'var(--color-light-mode-neutral-400, #46525D)'
                  : 'var(--color-light-mode-neutral-500, #2F333C)',
              }}
            >
              {opt.value === value && <span aria-hidden>✓</span>}
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

### Usage Examples

#### Basic single-select
```typescript
<InputDropdown
  label="Bidder"
  placeholder="Select bidder"
  options={[
    { value: 'all', label: 'All' },
    { value: '523456', label: '523456' },
    { value: '3242144', label: '3242144' },
  ]}
  value={bidder}
  onChange={setBidder}
/>
```

#### With multi-select (checkbox variant)
Use `mode="multiple"`, maintain `value` as `string[]`, and render checkboxes in each option. Selection styling remains the same (light blue bg + checkmark).

#### Disabled
```typescript
<InputDropdown label="Label" placeholder="Input" options={[]} disabled />
```

## Design Tokens Used

### Colors

#### Input field
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Border (default)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Border (focused)**: `--color-brand-copart-blue` (#2662D9)
- **Label**: `--color-light-mode-neutral-400` (#46525D)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Disabled**: Background `--color-light-mode-neutral-100` (#F4F5F6), border/text `--color-light-mode-neutral-300`–`400`

#### Options
- **Unselected**: Background transparent, text `--color-light-mode-neutral-500`
- **Selected / Hover**: Background `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-blue-300` (#E1E9FA)
- **Checkmark**: `--color-brand-copart-blue` (#2662D9)
- **Disabled option**: Background `--color-light-mode-neutral-100`, text `--color-light-mode-neutral-400`

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Label**: `--typography-font-size-200` (12px), `--typography-weight-regular` (400)
- **Input / Option**: `--typography-font-size-400` (16px), `--typography-weight-regular` or `medium`
- **Line Height**: `--typography-line-height-400` (22px)

### Spacing

- **Input height**: 56px (align with `--md-input-height` if using Material Design–style inputs)
- **Input padding horizontal**: `--spacing-16` (16px) or `--md-input-padding-x`
- **Option padding**: ~12px vertical, 16px horizontal
- **Gap between checkmark and label**: `--spacing-8` (8px)
- **Dropdown margin top**: 4px

### Border Radius & Shadows

- **Input / Dropdown panel**: `--border-radius-200` (8px)
- **Dropdown shadow**: `--shadow-medium` or `--shadow-light`

## Accessibility

### ARIA Attributes

- **Trigger**: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`, `aria-label` or association with visible label
- **List**: `role="listbox"`
- **Options**: `role="option"`, `aria-selected`, `aria-disabled` when disabled
- **`aria-disabled`**: Set on trigger when dropdown is disabled

### Keyboard Navigation

- **Enter / Space**: Open dropdown; activate selected option when focused on list
- **Arrow Down / Up**: Move focus between options; optionally open dropdown
- **Escape**: Close dropdown
- **Tab**: Move focus out; close dropdown

### Focus Management

- When opened, focus moves to the list (or first option)
- When closed, focus returns to the trigger
- Visible focus indicators on trigger and options

### Best Practices

1. **Label**: Always provide a visible label (or `aria-label`) describing the control
2. **Placeholder**: Use clear placeholder text when nothing is selected
3. **Options**: Ensure option labels are unique and descriptive
4. **Touch targets**: Option height at least ~44px for touch

### Screen Reader Considerations

- Combobox role and expanded state are announced
- Selected option is announced when navigating the list
- Disabled options are announced as unavailable

## Implementation Notes

### Alignment with Input Component

Use the same height (56px), horizontal padding (16px), border radius, and label styling as the standard Input where possible. Reuse `--md-input-*` tokens if your inputs follow Material Design–style specs.

### Dropdown Positioning

Position the list below the input, aligned to the left (or right for RTL). Consider viewport edges and scrolling so the list stays visible.

### Multi-Select

For `mode="multiple"`, use checkboxes in each option and maintain `value` as `string[]`. Display selected items in the input (e.g., comma-separated or chips) or a summary like "3 selected".

### Responsive Considerations

- Full-width on small screens when used in forms
- Ensure dropdown doesn’t overflow viewport; allow scroll within list if needed
- Preserve minimum touch target size for options

## Related Components

- **Inputs**: Same field styling and tokens; dropdown extends input with a list
- **Search Bar**: Search input can be combined with dropdown for “searchable select”
- **Filter Chips**: Often used with dropdowns (e.g., Bidder dropdown + status chips)
- **Checkboxes**: Used inside multi-select dropdown options

## Figma Reference

- **Component Node ID**: `720-2323`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Input Dropdowns Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2323&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Inputs](inputs.md) — Input field spec and tokens
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
