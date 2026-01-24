# Radio Buttons Component

## Overview

The Radio Button component is a form control element in the Vallejo Design System, used for selecting a single option from a group of mutually exclusive options. Only one radio button in a group can be selected at a time.

**Figma Reference:**
- **Node ID**: `720-2717`
- **Figma Link**: [Radio Buttons Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2717&m=dev)

## Description

Radio buttons are used when users need to select exactly one option from a group of mutually exclusive options. Unlike checkboxes, only one radio button in a group can be selected at a time. They are ideal for single-select scenarios, choices, and preferences.

### Use Cases

- **Single Selection**: Selecting one option from a list (e.g., "Choose one")
- **Choices**: User choices and preferences (e.g., payment method, shipping option)
- **Forms**: Form fields requiring single selection
- **Settings**: Settings with mutually exclusive options
- **Surveys**: Survey questions with single answer options
- **Navigation**: Tab-like navigation where only one option is active

## Variants

### State Variants

#### Unchecked (Default)
- **Appearance**: Circular outline with light grey border, white interior
- **Interaction**: Ready for user selection
- **Border Color**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label Color**: `--color-light-mode-neutral-500` (#2F333C)

#### Unchecked (Hover/Focus)
- **Appearance**: Circular outline with blue border, white interior
- **Interaction**: Visual feedback on mouse hover or keyboard focus
- **Border Color**: `--color-brand-copart-blue` (#2662D9)
- **Label Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Checked (Default)
- **Appearance**: Circular outline with blue border, solid blue inner circle
- **Interaction**: Option is selected
- **Border Color**: `--color-brand-copart-blue` (#2662D9)
- **Inner Circle Color**: `--color-brand-copart-blue` (#2662D9)
- **Label Color**: `--color-light-mode-neutral-500` (#2F333C)

#### Checked (Hover/Focus)
- **Appearance**: Circular outline with darker blue border, solid darker blue inner circle
- **Interaction**: Visual feedback on mouse hover or keyboard focus
- **Border Color**: `--color-light-mode-blue-500` (#063598) or darker blue
- **Inner Circle Color**: `--color-light-mode-blue-500` (#063598) or darker blue
- **Label Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Disabled (Unchecked)
- **Appearance**: Circular outline with light grey border, white interior
- **Interaction**: Not interactive, cursor: not-allowed
- **Border Color**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label Color**: `--color-light-mode-neutral-400` (#46525D)
- **Accessibility**: Must include `disabled` attribute and `aria-disabled="true"`

#### Disabled (Checked)
- **Appearance**: Circular outline with muted blue border, muted blue inner circle
- **Interaction**: Not interactive, but shows selected state
- **Border Color**: `--color-light-mode-blue-300` (#E1E9FA) or muted blue
- **Inner Circle Color**: `--color-light-mode-blue-300` (#E1E9FA) or muted blue
- **Label Color**: `--color-light-mode-neutral-400` (#46525D)

## Props / TypeScript Interface

```typescript
interface RadioButtonProps {
  /**
   * Whether the radio button is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Default checked state (uncontrolled component)
   * @default false
   */
  defaultChecked?: boolean;
  
  /**
   * Radio button label text
   */
  label?: string;
  
  /**
   * Whether the radio button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the radio button is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Radio button name attribute (must be same for all in group)
   */
  name: string;
  
  /**
   * Radio button value attribute (for form submission)
   */
  value: string;
  
  /**
   * Radio button id attribute
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

### Basic Radio Button (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface RadioButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  name: string;
  value: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  [key: string]: any;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  defaultChecked = false,
  label,
  disabled = false,
  required = false,
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
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const radioId = id || `radio-${name}-${value}`;

  // Determine border and inner circle colors based on state
  const getBorderColor = () => {
    if (disabled) {
      return isChecked
        ? 'var(--color-light-mode-blue-300, #E1E9FA)'
        : 'var(--color-light-mode-neutral-300, #C5CCD3)';
    }
    if (isChecked) {
      return isHovered || isFocused
        ? 'var(--color-light-mode-blue-500, #063598)'
        : 'var(--color-brand-copart-blue, #2662D9)';
    }
    return isHovered || isFocused
      ? 'var(--color-brand-copart-blue, #2662D9)'
      : 'var(--color-light-mode-neutral-300, #C5CCD3)';
  };

  const getInnerCircleColor = () => {
    if (disabled) {
      return 'var(--color-light-mode-blue-300, #E1E9FA)';
    }
    return isHovered || isFocused
      ? 'var(--color-light-mode-blue-500, #063598)'
      : 'var(--color-brand-copart-blue, #2662D9)';
  };

  const labelColor = disabled
    ? 'var(--color-light-mode-neutral-400, #46525D)'
    : 'var(--color-light-mode-neutral-500, #2F333C)';

  return (
    <label
      htmlFor={radioId}
      className={`radio-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-8, 8px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden Native Radio Input */}
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={isChecked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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

      {/* Custom Radio Button Visual */}
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          minWidth: '20px',
          minHeight: '20px',
          border: `2px solid ${getBorderColor()}`,
          borderRadius: 'var(--border-radius-round, 50%)',
          backgroundColor: 'var(--color-brand-copart-white, #FFFFFF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          boxSizing: 'border-box',
        }}
      >
        {/* Inner Circle (when checked) */}
        {isChecked && (
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: 'var(--border-radius-round, 50%)',
              backgroundColor: getInnerCircleColor(),
              transition: 'background-color 0.2s ease',
              opacity: disabled ? 0.5 : 1,
            }}
          />
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
            color: labelColor,
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

export default RadioButton;
```

### Usage Examples

#### Basic Radio Button
```typescript
<RadioButton
  label="Option 1"
  name="choice"
  value="option1"
/>
```

#### Radio Button Group
```typescript
const [selectedOption, setSelectedOption] = useState<string>('');

<div>
  <RadioButton
    label="Option 1"
    name="choice"
    value="option1"
    checked={selectedOption === 'option1'}
    onChange={(e) => setSelectedOption(e.target.value)}
  />
  <RadioButton
    label="Option 2"
    name="choice"
    value="option2"
    checked={selectedOption === 'option2'}
    onChange={(e) => setSelectedOption(e.target.value)}
  />
  <RadioButton
    label="Option 3"
    name="choice"
    value="option3"
    checked={selectedOption === 'option3'}
    onChange={(e) => setSelectedOption(e.target.value)}
  />
</div>
```

#### Disabled Radio Button
```typescript
<RadioButton
  label="This option is unavailable"
  name="choice"
  value="disabled"
  disabled={true}
  aria-label="This option is unavailable (disabled)"
/>
```

#### Disabled Checked Radio Button
```typescript
<RadioButton
  label="Already selected (disabled)"
  name="choice"
  value="selected"
  checked={true}
  disabled={true}
/>
```

#### Required Radio Button Group
```typescript
<fieldset>
  <legend>Choose payment method *</legend>
  <RadioButton
    label="Credit Card"
    name="payment"
    value="credit"
    required={true}
  />
  <RadioButton
    label="PayPal"
    name="payment"
    value="paypal"
    required={true}
  />
  <RadioButton
    label="Bank Transfer"
    name="payment"
    value="bank"
    required={true}
  />
</fieldset>
```

#### Form Integration
```typescript
<form onSubmit={handleSubmit}>
  <fieldset>
    <legend>Select shipping method</legend>
    <RadioButton
      label="Standard Shipping (5-7 days)"
      name="shipping"
      value="standard"
    />
    <RadioButton
      label="Express Shipping (2-3 days)"
      name="shipping"
      value="express"
    />
    <RadioButton
      label="Overnight Shipping (1 day)"
      name="shipping"
      value="overnight"
    />
  </fieldset>
  <button type="submit">Continue</button>
</form>
```

## Design Tokens Used

### Colors

#### Unchecked States
- **Default Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Hover/Focus Border**: `--color-brand-copart-blue` (#2662D9)
- **Background**: `--color-brand-copart-white` (#FFFFFF)

#### Checked States
- **Default Border**: `--color-brand-copart-blue` (#2662D9)
- **Default Inner Circle**: `--color-brand-copart-blue` (#2662D9)
- **Hover/Focus Border**: `--color-light-mode-blue-500` (#063598)
- **Hover/Focus Inner Circle**: `--color-light-mode-blue-500` (#063598)

#### Disabled States
- **Unchecked Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Checked Border**: `--color-light-mode-blue-300` (#E1E9FA)
- **Checked Inner Circle**: `--color-light-mode-blue-300` (#E1E9FA) with reduced opacity
- **Label**: `--color-light-mode-neutral-400` (#46525D)

#### Label Colors
- **Default**: `--color-light-mode-neutral-500` (#2F333C)
- **Disabled**: `--color-light-mode-neutral-400` (#46525D)

### Typography

#### Label
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Body 1
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

#### Radio Button to Label Gap
- **Gap**: `--spacing-8` (8px) between radio button and label

#### Radio Button Size
- **Outer Circle**: 20px × 20px
- **Border Width**: 2px
- **Inner Circle**: 10px × 10px (when checked)

### Border Radius
- **Radio Button**: `--border-radius-round` (50%) for perfect circle

## Accessibility

### ARIA Attributes

- **`aria-label`**: Use when label text alone doesn't provide sufficient context
- **`aria-describedby`**: Reference additional descriptive text if needed
- **`aria-required`**: Set to `true` when radio button is required
- **`aria-disabled`**: Set to `true` when radio button is disabled (in addition to `disabled` attribute)

### Keyboard Navigation

- **Arrow Keys**: Navigate between radio buttons in the same group (up/down or left/right)
- **Space**: Selects the focused radio button
- **Tab**: Moves focus to next interactive element
- **Shift+Tab**: Moves focus to previous interactive element

### Focus States

- **Visible Focus Indicator**: Ensure radio button has a visible focus outline (browser default or custom)
- **Focus Ring**: Consider using a focus ring that matches the design system
- **Focus on Label**: Clicking label should focus the radio button

### Screen Reader Considerations

- Radio buttons are announced as "radio button" by screen readers
- Checked state is announced ("checked" or "not checked")
- Label text is read aloud
- Group name (from fieldset legend) is announced
- Disabled state is announced
- Required state is announced

### Best Practices

1. **Always Include Labels**: Every radio button should have a visible label
2. **Group with Fieldset**: Use fieldset and legend for groups of related radio buttons
3. **Same Name Attribute**: All radio buttons in a group must share the same `name` attribute
4. **Required Fields**: Clearly indicate required radio button groups with asterisk and `aria-required`
5. **Touch Targets**: Ensure minimum 44x44px touch target (consider padding around radio button)
6. **Visual Feedback**: Provide clear visual distinction between checked and unchecked states
7. **Default Selection**: Consider pre-selecting a default option when appropriate

## Implementation Notes

### CSS Variables

All styling should use CSS variables from the design tokens. This ensures consistency and makes theme updates easier.

### State Management

- Use controlled components (`checked` prop) for form state management
- Use uncontrolled components (`defaultChecked`) for simple cases
- Handle focus and hover states internally or via props

### Inner Circle

- Inner circle appears when radio button is checked
- Inner circle should be centered within the outer circle
- Size should be approximately half the outer circle diameter (10px for 20px outer circle)

### Hover and Focus States

Implement smooth transitions for hover and focus states (recommended: 0.2s ease). Border color changes from grey to blue on hover/focus.

### Disabled States

Disabled radio buttons should:
- Have reduced visual prominence
- Not respond to clicks
- Show `cursor: not-allowed`
- Include both `disabled` attribute and `aria-disabled="true"`
- Maintain checked state visually if already checked

### Grouping

- All radio buttons in a group must share the same `name` attribute
- Use `<fieldset>` and `<legend>` to group related radio buttons semantically
- Only one radio button in a group can be checked at a time

### Responsive Considerations

- Radio buttons should maintain minimum touch target sizes on mobile (44x44px recommended)
- Consider larger radio button size on mobile for better touch interaction
- Ensure proper spacing for touch interactions
- Stack radio buttons vertically on small screens if needed

## Related Components

- **Checkboxes**: Use checkboxes for multi-select scenarios
- **Toggles**: Use toggles for on/off binary states
- **Forms**: Radio buttons are commonly used in forms
- **Switcher**: Radio buttons can be used in switcher/tab-like navigation

## Figma Reference

- **Component Node ID**: `720-2717`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Radio Buttons Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2717&m=dev)

## Additional Resources

- [Component Catalog](../catalog.json) - Complete component reference
- [Design System Guide](../docs/design-system-guide.md) - Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) - When and how to use components
- [Color Tokens](../tokens/colors.json) - Complete color palette
- [Typography Tokens](../tokens/typography.json) - Typography scale
- [Spacing Tokens](../tokens/spacing.json) - Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) - Border radius values
