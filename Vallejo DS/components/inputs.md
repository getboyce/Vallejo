# Inputs Component

## Overview

The Input component is a fundamental form element in the Vallejo Design System, used for collecting text-based user input. It supports multiple states, types, and configurations to accommodate various form scenarios.

**Figma Reference:**
- **Node ID**: `704-813`
- **Figma Link**: [Inputs Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=704-813&m=dev)

## Description

Input fields are used to collect text-based data from users, including names, emails, passwords, search queries, and other textual information. They provide clear visual feedback for different interaction states and support validation with error messaging.

### Use Cases

- **Text Input**: Standard text entry (names, addresses, etc.)
- **Email Input**: Email address collection with validation
- **Password Input**: Secure password entry with masking
- **Search Input**: Search queries with leading search icon
- **Number Input**: Numeric data entry
- **Tel Input**: Phone number entry
- **URL Input**: Web address entry
- **Form Fields**: Any form requiring user text input

## Variants

### Type Variants

#### 1. Standard Input
- **Appearance**: Text input field with label and optional supporting text
- **Usage**: General text input, names, addresses, descriptions
- **Visual**: Standard border, white background

#### 2. Search Input
- **Appearance**: Input field with leading search icon
- **Usage**: Search functionality, filtering, query input
- **Visual**: Leading magnifying glass icon, optimized for search contexts

#### 3. Input with Clear Button
- **Appearance**: Input field with trailing clear/close icon (X)
- **Usage**: When users need to quickly clear input content
- **Visual**: Trailing X icon that appears when input has content

#### 4. Search Input with Clear
- **Appearance**: Combination of search icon (leading) and clear icon (trailing)
- **Usage**: Search fields where users can clear their query
- **Visual**: Both leading search icon and trailing clear icon

### State Variants

#### Default/Inactive
- **Appearance**: Light grey border, white background
- **Interaction**: Ready for user input
- **Border Color**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Label Color**: `--color-light-mode-neutral-400` (#46525D)
- **Supporting Text Color**: `--color-light-mode-neutral-400` (#46525D)

#### Focused/Active
- **Appearance**: Blue border, white background, visible cursor
- **Interaction**: User is actively typing or has focus
- **Border Color**: `--color-brand-copart-blue` (#2662D9)
- **Label Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Icon Color**: Blue for search icon, grey for clear icon
- **Visual Feedback**: Prominent blue border indicates active state

#### Filled/Text Present
- **Appearance**: Dark grey border, white background with entered text
- **Interaction**: Input contains user-entered content
- **Border Color**: `--color-light-mode-neutral-500` (#2F333C) or darker grey
- **Text Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Visual**: Clear icon becomes visible when text is present

#### Error
- **Appearance**: Red border, white background, red warning icon
- **Interaction**: Validation error present
- **Border Color**: Error red (typically `#C20022` or similar)
- **Label Color**: Error red
- **Supporting Text Color**: Error red
- **Icons**: Red warning icon (trailing), red search icon (if present), red clear icon
- **Visual Feedback**: Entire input takes on red hue to indicate error

#### Disabled
- **Appearance**: Light grey background, very light grey border, muted text
- **Interaction**: Not interactive, cursor: not-allowed
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Border Color**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text Color**: `--color-light-mode-neutral-400` (#46525D)
- **Icons**: Very light grey, desaturated
- **Accessibility**: Must include `disabled` attribute and `aria-disabled="true"`

### Input Types

The component supports all standard HTML input types:
- `text` - Standard text input
- `email` - Email address with validation
- `password` - Password with masking
- `number` - Numeric input
- `tel` - Telephone number
- `url` - Web address
- `search` - Search query
- `date` - Date picker
- `time` - Time picker
- And other HTML5 input types

## Props / TypeScript Interface

```typescript
interface InputProps {
  /**
   * Input value (controlled component)
   */
  value?: string;
  
  /**
   * Default value (uncontrolled component)
   */
  defaultValue?: string;
  
  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | string;
  
  /**
   * Input label text
   */
  label?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Supporting/helper text displayed below input
   */
  supportingText?: string;
  
  /**
   * Error message (displays in error state)
   */
  error?: string;
  
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether to show clear button
   * @default false
   */
  showClearButton?: boolean;
  
  /**
   * Whether to show search icon (leading)
   * @default false
   */
  showSearchIcon?: boolean;
  
  /**
   * Leading icon (custom icon before input text)
   */
  leadingIcon?: React.ReactNode;
  
  /**
   * Trailing icon (custom icon after input text)
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input id attribute
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
   * Clear button click handler
   */
  onClear?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA describedby for supporting text
   */
  'aria-describedby'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Input (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface InputProps {
  value?: string;
  defaultValue?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  supportingText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  showClearButton?: boolean;
  showSearchIcon?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  name?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  type = 'text',
  label,
  placeholder,
  supportingText,
  error,
  disabled = false,
  required = false,
  showClearButton = false,
  showSearchIcon = false,
  leadingIcon,
  trailingIcon,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  onClear,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const inputValue = value !== undefined ? value : internalValue;
  const hasError = !!error;
  const hasValue = inputValue.length > 0;
  const showClear = showClearButton && hasValue && !disabled;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
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

  const handleClear = () => {
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
    // Trigger onChange with empty value
    const syntheticEvent = {
      target: { value: '', name: name || '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  // Determine border color based on state
  const getBorderColor = () => {
    if (disabled) {
      return 'var(--color-light-mode-neutral-300, #C5CCD3)';
    }
    if (hasError) {
      return 'var(--color-light-mode-alerts-text-error, #C20022)';
    }
    if (isFocused) {
      return 'var(--color-brand-copart-blue, #2662D9)';
    }
    if (hasValue) {
      return 'var(--color-light-mode-neutral-500, #2F333C)';
    }
    return 'var(--color-light-mode-neutral-300, #C5CCD3)';
  };

  // Determine text colors
  const labelColor = hasError
    ? 'var(--color-light-mode-alerts-text-error, #C20022)'
    : disabled
    ? 'var(--color-light-mode-neutral-400, #46525D)'
    : 'var(--color-light-mode-neutral-500, #2F333C)';

  const supportingTextColor = hasError
    ? 'var(--color-light-mode-alerts-text-error, #C20022)'
    : 'var(--color-light-mode-neutral-400, #46525D)';

  const inputId = id || `input-${name || 'default'}`;
  const supportingTextId = `${inputId}-supporting`;
  const errorId = `${inputId}-error`;
  const describedBy = [
    supportingText && supportingTextId,
    hasError && errorId,
    ariaDescribedBy,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`input-wrapper ${className}`} style={{ marginBottom: '24px' }}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            fontSize: 'var(--typography-font-size-200, 12px)',
            fontWeight: 'var(--typography-weight-semibold, 600)',
            lineHeight: 'var(--typography-line-height-200, 18px)',
            color: labelColor,
            marginBottom: 'var(--spacing-8, 8px)',
          }}
        >
          {label}
          {required && (
            <span aria-label="required" style={{ color: 'var(--color-light-mode-alerts-text-error, #C20022)', marginLeft: '4px' }}>
              *
            </span>
          )}
        </label>
      )}

      {/* Input Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${getBorderColor()}`,
          borderRadius: 'var(--border-radius-200, 8px)',
          backgroundColor: disabled
            ? 'var(--color-light-mode-neutral-100, #F4F5F6)'
            : 'var(--color-light-mode-neutral-000, #FFFFFF)',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          cursor: disabled ? 'not-allowed' : 'text',
        }}
      >
        {/* Leading Icon (Search or Custom) */}
        {(showSearchIcon || leadingIcon) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 'var(--spacing-16, 16px)',
              color: hasError
                ? 'var(--color-light-mode-alerts-text-error, #C20022)'
                : isFocused
                ? 'var(--color-brand-copart-blue, #2662D9)'
                : disabled
                ? 'var(--color-light-mode-neutral-300, #C5CCD3)'
                : 'var(--color-light-mode-neutral-400, #46525D)',
            }}
          >
            {showSearchIcon ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            ) : (
              leadingIcon
            )}
          </div>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          name={name}
          value={inputValue}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={ariaLabel || label}
          aria-required={required}
          aria-invalid={hasError}
          aria-disabled={disabled}
          aria-describedby={describedBy || undefined}
          style={{
            flex: 1,
            width: '100%',
            padding: 'var(--spacing-12, 12px) var(--spacing-16, 16px)',
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            color: disabled
              ? 'var(--color-light-mode-neutral-400, #46525D)'
              : 'var(--color-light-mode-neutral-500, #2F333C)',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            boxSizing: 'border-box',
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          {...props}
        />

        {/* Trailing Icons (Error Warning, Clear, Custom) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-8, 8px)',
            paddingRight: 'var(--spacing-16, 16px)',
          }}
        >
          {/* Error Warning Icon */}
          {hasError && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-light-mode-alerts-text-error, #C20022)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          )}

          {/* Clear Button */}
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: hasError
                  ? 'var(--color-light-mode-alerts-text-error, #C20022)'
                  : 'var(--color-light-mode-neutral-400, #46525D)',
                borderRadius: '50%',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-light-mode-neutral-200, #E2E5E9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
            </button>
          )}

          {/* Custom Trailing Icon */}
          {trailingIcon && !showClear && !hasError && (
            <div style={{ color: 'var(--color-light-mode-neutral-400, #46525D)' }}>
              {trailingIcon}
            </div>
          )}
        </div>
      </div>

      {/* Supporting Text / Error Message */}
      {(supportingText || error) && (
        <div
          id={hasError ? errorId : supportingTextId}
          style={{
            marginTop: 'var(--spacing-8, 8px)',
            fontSize: 'var(--typography-font-size-200, 12px)',
            fontWeight: hasError ? 'var(--typography-weight-semibold, 600)' : 'var(--typography-weight-regular, 400)',
            lineHeight: 'var(--typography-line-height-200, 18px)',
            color: supportingTextColor,
          }}
        >
          {error || supportingText}
        </div>
      )}
    </div>
  );
};

export default Input;
```

### Usage Examples

#### Basic Text Input
```typescript
<Input
  label="Full Name"
  placeholder="Enter your full name"
  name="fullName"
  required
/>
```

#### Email Input
```typescript
<Input
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  name="email"
  required
  supportingText="We'll never share your email"
/>
```

#### Password Input
```typescript
<Input
  type="password"
  label="Password"
  placeholder="Enter your password"
  name="password"
  required
  supportingText="Must be at least 8 characters"
/>
```

#### Search Input
```typescript
<Input
  type="search"
  placeholder="Search..."
  showSearchIcon
  showClearButton
  name="search"
/>
```

#### Input with Error
```typescript
<Input
  label="Email Address"
  placeholder="Enter your email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error="Please enter a valid email address"
  required
/>
```

#### Disabled Input
```typescript
<Input
  label="Account Number"
  value="12345"
  disabled
  supportingText="This field cannot be changed"
/>
```

#### Input with Clear Button
```typescript
<Input
  label="Search"
  placeholder="Type to search..."
  showClearButton
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onClear={() => setSearchTerm('')}
/>
```

## Design Tokens Used

### Colors

#### Border Colors
- **Default**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Focused**: `--color-brand-copart-blue` (#2662D9)
- **Filled**: `--color-light-mode-neutral-500` (#2F333C)
- **Error**: `--color-light-mode-alerts-text-error` (#C20022)
- **Disabled**: `--color-light-mode-neutral-300` (#C5CCD3)

#### Background Colors
- **Default/Focused/Filled**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Disabled**: `--color-light-mode-neutral-100` (#F4F5F6)

#### Text Colors
- **Label (Default)**: `--color-light-mode-neutral-500` (#2F333C)
- **Label (Error)**: `--color-light-mode-alerts-text-error` (#C20022)
- **Label (Disabled)**: `--color-light-mode-neutral-400` (#46525D)
- **Input Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Input Text (Disabled)**: `--color-light-mode-neutral-400` (#46525D)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Supporting Text**: `--color-light-mode-neutral-400` (#46525D)
- **Supporting Text (Error)**: `--color-light-mode-alerts-text-error` (#C20022)

#### Icon Colors
- **Search Icon (Default)**: `--color-light-mode-neutral-400` (#46525D)
- **Search Icon (Focused)**: `--color-brand-copart-blue` (#2662D9)
- **Search Icon (Error)**: `--color-light-mode-alerts-text-error` (#C20022)
- **Search Icon (Disabled)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Clear Icon**: `--color-light-mode-neutral-400` (#46525D) or error color
- **Error Icon**: `--color-light-mode-alerts-text-error` (#C20022)

### Typography

#### Label
- **Font Size**: `--typography-font-size-200` (12px)
- **Font Weight**: `--typography-weight-semibold` (600)
- **Line Height**: `--typography-line-height-200` (18px)
- **Type Scale**: Form Field

#### Input Text
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Body 1

#### Supporting Text / Error Message
- **Font Size**: `--typography-font-size-200` (12px)
- **Font Weight**: `--typography-weight-regular` (400) or `--typography-weight-semibold` (600) for errors
- **Line Height**: `--typography-line-height-200` (18px)
- **Type Scale**: Body 3 or Body 4

#### Font Family
- **Base**: `--typography-font-family-base` (Inter)

### Spacing

#### Padding
- **Input Padding**: `12px 16px` (vertical: `--spacing-12`, horizontal: `--spacing-16`)
- **Icon Padding**: `--spacing-16` (16px) for leading/trailing icon containers
- **Icon Gap**: `--spacing-8` (8px) between multiple trailing icons

#### Margins
- **Label Bottom**: `--spacing-8` (8px)
- **Supporting Text Top**: `--spacing-8` (8px)
- **Input Wrapper Bottom**: `--spacing-24` (24px) for form spacing

### Border Radius
- **Input Field**: `--border-radius-200` (8px) or `--border-radius-medium` (8px)

### Icons
- **Icon Size**: 16px × 16px (matches input text size proportionally)
- **Clear Button**: 20px × 20px clickable area with 14px × 14px icon

## Accessibility

### ARIA Attributes

- **`aria-label`**: Use when label text alone doesn't provide sufficient context
- **`aria-required`**: Set to `true` when input is required
- **`aria-invalid`**: Set to `true` when input has validation errors
- **`aria-disabled`**: Set to `true` when input is disabled (in addition to `disabled` attribute)
- **`aria-describedby`**: Reference supporting text and error message IDs

### Keyboard Navigation

- **Tab**: Moves focus to next interactive element
- **Shift+Tab**: Moves focus to previous interactive element
- **Enter**: Submits form (when in form context)
- **Escape**: Can be used to clear input (if clear button is present)
- **Arrow Keys**: Navigate within input text (standard text editing)

### Focus States

- **Visible Focus Indicator**: Input border changes to blue when focused
- **Focus Ring**: Browser default or custom focus ring should be visible
- **Focus Management**: Clear button should be keyboard accessible

### Screen Reader Considerations

- Labels are properly associated with inputs via `htmlFor` and `id`
- Supporting text and error messages are associated via `aria-describedby`
- Required fields are announced
- Error states are announced
- Disabled state is announced
- Clear button has descriptive `aria-label`

### Best Practices

1. **Always Include Labels**: Every input should have a visible label
2. **Required Fields**: Clearly indicate required fields with asterisk and `aria-required`
3. **Error Messages**: Provide clear, actionable error messages
4. **Supporting Text**: Use supporting text for helpful guidance, not critical information
5. **Placeholder Text**: Use placeholders for examples, not as replacement for labels
6. **Clear Button**: Ensure clear button is keyboard accessible and has proper ARIA label
7. **Icon Accessibility**: Decorative icons should have `aria-hidden="true"`

## Implementation Notes

### CSS Variables

All styling should use CSS variables from the design tokens. This ensures consistency and makes theme updates easier.

### State Management

- Use controlled components (`value` prop) for form state management
- Use uncontrolled components (`defaultValue`) for simple cases
- Handle focus state internally or via props

### Validation

- Client-side validation should provide immediate feedback
- Error states should be clearly visible
- Error messages should be descriptive and actionable
- Consider using HTML5 validation attributes (`required`, `pattern`, `min`, `max`, etc.)

### Icon Integration

- Icons should be 16px × 16px to match input text size
- Icons should inherit color from input state
- Search icon appears on the left (leading)
- Clear and error icons appear on the right (trailing)
- Icons should have proper spacing from text

### Clear Button

- Only show when input has content
- Hide when input is disabled
- Provide visual feedback on hover
- Ensure keyboard accessibility
- Clear button should trigger onChange with empty value

### Responsive Considerations

- Inputs should be full-width on mobile
- Touch targets should be at least 44px × 44px
- Consider larger text size on mobile for better readability
- Ensure proper spacing for touch interactions

## Related Components

- **Buttons**: Inputs often appear alongside form buttons
- **Forms**: Inputs are the primary component in forms
- **Labels**: Inputs require labels for accessibility
- **Validation**: Inputs work with validation systems
- **Search Bar**: Specialized search input component

## Figma Reference

- **Component Node ID**: `704-813`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Inputs Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=704-813&m=dev)

## Additional Resources

- [Component Catalog](../catalog.json) - Complete component reference
- [Design System Guide](../docs/design-system-guide.md) - Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) - When and how to use components
- [Color Tokens](../tokens/colors.json) - Complete color palette
- [Typography Tokens](../tokens/typography.json) - Typography scale
- [Spacing Tokens](../tokens/spacing.json) - Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) - Border radius values
