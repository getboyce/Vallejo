# Checkboxes Component

## Overview

The Checkbox component is a form control element in the Vallejo Design System, used for selecting one or more options from a list. It provides clear visual feedback for checked and unchecked states.

**Figma Reference:**
- **Node ID**: `714-367`
- **Figma Link**: [Checkboxes Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=714-367&m=dev)

## Description

Checkboxes are used when users need to select one or more options from a list. Unlike radio buttons, multiple checkboxes can be selected simultaneously. They are ideal for multi-select scenarios, preferences, filters, and settings.

### Use Cases

- **Multi-select Lists**: Selecting multiple items from a list (e.g., "Select all that apply")
- **Preferences**: User preferences and settings (e.g., notification preferences)
- **Filters**: Filtering content by multiple criteria
- **Forms**: Form fields requiring multiple selections
- **Agreements**: Terms and conditions, privacy policy acceptance
- **Feature Selection**: Selecting multiple features or options

## Variants

### Type Variants

#### 1. Standard Checkbox
- **Appearance**: Square checkbox with label
- **Usage**: Standard checkbox for most use cases
- **Visual**: Light grey border when unchecked, blue fill when checked
- **Label**: Text label positioned to the right of the checkbox

#### 2. Primary Checkbox (Blue Border)
- **Appearance**: Square checkbox with blue border when unchecked
- **Usage**: Emphasized checkbox variant, primary selection style
- **Visual**: Medium blue border when unchecked, dark blue fill when checked
- **Label**: Text label in matching blue color

### State Variants

#### Unchecked (Default)
- **Appearance**: Square outline with light grey or blue border, white interior
- **Interaction**: Ready for user selection
- **Border Color (Standard)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Border Color (Primary)**: `--color-brand-copart-blue` (#2662D9) or `--color-light-mode-blue-400`
- **Label Color (Standard)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label Color (Primary)**: `--color-brand-copart-blue` (#2662D9)

#### Checked
- **Appearance**: Solid blue square with white checkmark icon
- **Interaction**: Option is selected
- **Background Color (Standard)**: `--color-brand-copart-blue` (#2662D9) or `--color-light-mode-blue-400`
- **Background Color (Primary)**: `--color-light-mode-blue-500` (#063598) or darker blue
- **Checkmark Color**: `--color-brand-copart-white` (#FFFFFF)
- **Label Color**: Matches checkbox background color (blue)

#### Hover
- **Appearance**: Slightly darker border or background
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Focus
- **Appearance**: Focus ring or outline around checkbox
- **Interaction**: Keyboard navigation indicator
- **Visual**: Visible focus indicator (browser default or custom focus ring)

#### Disabled
- **Appearance**: Muted colors, reduced opacity/contrast
- **Interaction**: Not interactive, cursor: not-allowed
- **Border Color**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label Color**: `--color-light-mode-neutral-400` (#46525D)
- **Accessibility**: Must include `disabled` attribute and `aria-disabled="true"`

#### Disabled Checked
- **Appearance**: Muted blue background with checkmark, reduced opacity
- **Interaction**: Not interactive, but shows selected state
- **Background Color**: Muted blue (e.g., `--color-light-mode-blue-300` with reduced opacity)
- **Label Color**: `--color-light-mode-neutral-400` (#46525D)

## Props / TypeScript Interface

```typescript
interface CheckboxProps {
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Default checked state (uncontrolled component)
   * @default false
   */
  defaultChecked?: boolean;
  
  /**
   * Checkbox label text
   */
  label?: string;
  
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the checkbox is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Checkbox variant
   * @default 'standard'
   */
  variant?: 'standard' | 'primary';
  
  /**
   * Checkbox name attribute (for form submission)
   */
  name?: string;
  
  /**
   * Checkbox value attribute (for form submission)
   */
  value?: string;
  
  /**
   * Checkbox id attribute
   */
  id?: string;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA describedby for additional description
   */
  'aria-describedby'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Checkbox (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  variant?: 'standard' | 'primary';
  name?: string;
  value?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  [key: string]: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked = false,
  label,
  disabled = false,
  required = false,
  variant = 'standard',
  name,
  value,
  id,
  onChange,
  onFocus,
  onBlur,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  // Variant-based color tokens
  const variantStyles = {
    standard: {
      uncheckedBorder: 'var(--color-light-mode-neutral-300, #C5CCD3)',
      uncheckedLabel: 'var(--color-light-mode-neutral-300, #C5CCD3)',
      checkedBackground: 'var(--color-brand-copart-blue, #2662D9)',
      checkedLabel: 'var(--color-brand-copart-blue, #2662D9)',
    },
    primary: {
      uncheckedBorder: 'var(--color-brand-copart-blue, #2662D9)',
      uncheckedLabel: 'var(--color-brand-copart-blue, #2662D9)',
      checkedBackground: 'var(--color-light-mode-blue-500, #063598)',
      checkedLabel: 'var(--color-light-mode-blue-500, #063598)',
    },
  };

  const checkboxId = id || `checkbox-${name || 'default'}`;
  const styles = variantStyles[variant];

  return (
    <label
      htmlFor={checkboxId}
      className={`checkbox-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-8, 8px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Hidden Native Checkbox */}
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={isChecked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={ariaLabel || label}
        aria-describedby={ariaDescribedBy}
        aria-required={required}
        aria-disabled={disabled}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
        }}
        {...props}
      />

      {/* Custom Checkbox Visual */}
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          minWidth: '20px',
          minHeight: '20px',
          border: `2px solid ${
            disabled
              ? 'var(--color-light-mode-neutral-300, #C5CCD3)'
              : isChecked
              ? styles.checkedBackground
              : styles.uncheckedBorder
          }`,
          borderRadius: 'var(--border-radius-small, 4px)',
          backgroundColor: isChecked
            ? disabled
              ? 'var(--color-light-mode-blue-300, #E1E9FA)'
              : styles.checkedBackground
            : 'var(--color-brand-copart-white, #FFFFFF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          boxSizing: 'border-box',
        }}
      >
        {/* Checkmark Icon */}
        {isChecked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-brand-copart-white, #FFFFFF)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{
              opacity: disabled ? 0.5 : 1,
            }}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>

      {/* Label */}
      {label && (
        <span
          style={{
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: disabled
              ? 'var(--color-light-mode-neutral-400, #46525D)'
              : isChecked
              ? styles.checkedLabel
              : styles.uncheckedLabel,
            transition: 'color 0.2s ease',
          }}
        >
          {label}
          {required && (
            <span
              aria-label="required"
              style={{
                color: 'var(--color-light-mode-alerts-text-error, #C20022)',
                marginLeft: '4px',
              }}
            >
              *
            </span>
          )}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
```

### Usage Examples

#### Basic Checkbox
```typescript
<Checkbox
  label="Accept terms and conditions"
  name="terms"
  value="accepted"
/>
```

#### Checked Checkbox
```typescript
<Checkbox
  label="Subscribe to newsletter"
  name="newsletter"
  checked={true}
  onChange={(e) => console.log(e.target.checked)}
/>
```

#### Primary Variant
```typescript
<Checkbox
  label="Enable notifications"
  variant="primary"
  name="notifications"
/>
```

#### Disabled Checkbox
```typescript
<Checkbox
  label="This option is unavailable"
  disabled={true}
  aria-label="This option is unavailable (disabled)"
/>
```

#### Disabled Checked Checkbox
```typescript
<Checkbox
  label="Already selected (disabled)"
  checked={true}
  disabled={true}
/>
```

#### Required Checkbox
```typescript
<Checkbox
  label="I agree to the terms"
  required={true}
  name="agreement"
/>
```

#### Checkbox Group
```typescript
const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

const handleOptionChange = (value: string, checked: boolean) => {
  if (checked) {
    setSelectedOptions([...selectedOptions, value]);
  } else {
    setSelectedOptions(selectedOptions.filter((v) => v !== value));
  }
};

<div>
  <Checkbox
    label="Option 1"
    value="option1"
    checked={selectedOptions.includes('option1')}
    onChange={(e) => handleOptionChange('option1', e.target.checked)}
  />
  <Checkbox
    label="Option 2"
    value="option2"
    checked={selectedOptions.includes('option2')}
    onChange={(e) => handleOptionChange('option2', e.target.checked)}
  />
  <Checkbox
    label="Option 3"
    value="option3"
    checked={selectedOptions.includes('option3')}
    onChange={(e) => handleOptionChange('option3', e.target.checked)}
  />
</div>
```

## Design Tokens Used

### Colors

#### Standard Variant
- **Unchecked Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Unchecked Label**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Checked Background**: `--color-brand-copart-blue` (#2662D9)
- **Checked Label**: `--color-brand-copart-blue` (#2662D9)
- **Checkmark**: `--color-brand-copart-white` (#FFFFFF)

#### Primary Variant
- **Unchecked Border**: `--color-brand-copart-blue` (#2662D9)
- **Unchecked Label**: `--color-brand-copart-blue` (#2662D9)
- **Checked Background**: `--color-light-mode-blue-500` (#063598)
- **Checked Label**: `--color-light-mode-blue-500` (#063598)
- **Checkmark**: `--color-brand-copart-white` (#FFFFFF)

#### Disabled States
- **Disabled Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Disabled Label**: `--color-light-mode-neutral-400` (#46525D)
- **Disabled Checked Background**: `--color-light-mode-blue-300` (#E1E9FA) with reduced opacity

### Typography

#### Label
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Body 1
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

#### Checkbox to Label Gap
- **Gap**: `--spacing-8` (8px) between checkbox and label

#### Checkbox Size
- **Width/Height**: 20px × 20px
- **Border Width**: 2px

### Border Radius
- **Checkbox**: `--border-radius-small` (4px) for square with slight rounding

## Accessibility

### ARIA Attributes

- **`aria-label`**: Use when label text alone doesn't provide sufficient context
- **`aria-describedby`**: Reference additional descriptive text if needed
- **`aria-required`**: Set to `true` when checkbox is required
- **`aria-disabled`**: Set to `true` when checkbox is disabled (in addition to `disabled` attribute)

### Keyboard Navigation

- **Space**: Toggles checkbox when focused
- **Tab**: Moves focus to next interactive element
- **Shift+Tab**: Moves focus to previous interactive element

### Focus States

- **Visible Focus Indicator**: Ensure checkbox has a visible focus outline (browser default or custom)
- **Focus Ring**: Consider using a focus ring that matches the design system
- **Focus on Label**: Clicking label should focus the checkbox

### Screen Reader Considerations

- Checkboxes are announced as "checkbox" by screen readers
- Checked state is announced ("checked" or "not checked")
- Label text is read aloud
- Disabled state is announced
- Required state is announced

### Best Practices

1. **Always Include Labels**: Every checkbox should have a visible label
2. **Required Fields**: Clearly indicate required checkboxes with asterisk and `aria-required`
3. **Grouping**: Use fieldset and legend for groups of related checkboxes
4. **Touch Targets**: Ensure minimum 44x44px touch target (consider padding around checkbox)
5. **Visual Feedback**: Provide clear visual distinction between checked and unchecked states

## Implementation Notes

### CSS Variables

All styling should use CSS variables from the design tokens. This ensures consistency and makes theme updates easier.

### State Management

- Use controlled components (`checked` prop) for form state management
- Use uncontrolled components (`defaultChecked`) for simple cases
- Handle focus state internally or via props

### Checkmark Icon

- Use SVG checkmark icon for crisp rendering at all sizes
- Checkmark should be white and centered within the checkbox
- Icon size should be proportional to checkbox size (approximately 12px for 20px checkbox)

### Hover States

Implement smooth transitions for hover states (recommended: 0.2s ease). Consider slightly darker border or background on hover.

### Disabled States

Disabled checkboxes should:
- Have reduced visual prominence
- Not respond to clicks
- Show `cursor: not-allowed`
- Include both `disabled` attribute and `aria-disabled="true"`
- Maintain checked state visually if already checked

### Responsive Considerations

- Checkboxes should maintain minimum touch target sizes on mobile (44x44px recommended)
- Consider larger checkbox size on mobile for better touch interaction
- Ensure proper spacing for touch interactions

## Related Components

- **Radio Buttons**: Use radio buttons for single-select scenarios
- **Toggles**: Use toggles for on/off binary states
- **Forms**: Checkboxes are commonly used in forms
- **Filter Chips**: Checkboxes can be used in filter interfaces

## Figma Reference

- **Component Node ID**: `714-367`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Checkboxes Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=714-367&m=dev)

## Additional Resources

- [Component Catalog](../catalog.json) - Complete component reference
- [Design System Guide](../docs/design-system-guide.md) - Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) - When and how to use components
- [Color Tokens](../tokens/colors.json) - Complete color palette
- [Typography Tokens](../tokens/typography.json) - Typography scale
- [Spacing Tokens](../tokens/spacing.json) - Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) - Border radius values
