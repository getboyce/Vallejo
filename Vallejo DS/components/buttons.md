# Buttons Component

## Overview

The Button component is the most commonly used interactive element in the Vallejo Design System. It provides a consistent way to trigger actions throughout the application.

**Figma Reference:**
- **Node ID**: `709-3977`
- **Figma Link**: [Buttons Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=709-3977&m=dev)

## Description

Buttons are used to trigger actions, submit forms, navigate, and provide clear calls-to-action. They communicate importance through visual hierarchy and support multiple variants to accommodate different use cases and contexts.

### Use Cases

- **Primary Actions**: Use Default/Primary buttons for the main action on a page or in a form
- **Secondary Actions**: Use Secondary buttons for alternative actions that are less prominent
- **Tertiary Actions**: Use Subtle buttons for less important actions or when space is limited
- **Icon Actions**: Use icon variants (leading/trailing) when visual context is helpful
- **Icon-Only**: Use icon-only buttons for compact spaces or toolbars

## Variants

### Type Variants

#### 1. Default (Primary)
- **Appearance**: Solid blue background with white text
- **Usage**: Primary actions, form submissions, main CTAs
- **Visual**: High contrast, most prominent button style

#### 2. Secondary
- **Appearance**: White background with blue border and blue text
- **Usage**: Secondary actions, cancel buttons, alternative options
- **Visual**: Medium prominence, outlined style

#### 3. Subtle
- **Appearance**: Light gray background with gray text, no border
- **Usage**: Tertiary actions, less important actions, when space is limited
- **Visual**: Low prominence, minimal style

#### 4. Trailing Icon
- **Appearance**: Same as Default/Primary with an icon positioned after the text
- **Usage**: Actions that indicate direction (e.g., "Next →"), dropdowns, menus
- **Visual**: Icon provides additional context or indicates action direction

#### 5. Leading Icon
- **Appearance**: Same as Default/Primary with an icon positioned before the text
- **Usage**: Actions with clear visual associations (e.g., "Watchlist ♥"), add actions
- **Visual**: Icon provides visual context or reinforces the action

### Size Variants

#### Small
- **Height**: 34px
- **Border radius**: 6px
- **Padding**: 20px left/right
- **Typography**: Button Small (14px, Medium weight, 20px line height)
- **Usage**: Compact spaces, dense interfaces, inline actions

#### Default
- **Height**: 46px
- **Border radius**: 8px
- **Padding**: 24px left/right
- **Typography**: Button Medium (16px, Medium weight, 22px line height)
- **Usage**: Standard button size for most use cases

#### Large
- **Height**: 52px
- **Border radius**: 12px
- **Padding**: 24px left/right
- **Typography**: Button Large (16px, Semibold weight, 22px line height)
- **Usage**: Prominent CTAs, hero sections, important actions

#### Extra Large (X-Large)
- **Height**: 64px
- **Border radius**: 12px
- **Padding**: 32px left/right
- **Typography**: Button Extra Large (20px, Semibold weight, 28px line height)
- **Usage**: Hero CTAs, landing pages, primary conversion points

### State Variants

#### Default
- **Appearance**: Standard button styling based on type
- **Interaction**: Fully interactive, ready for user interaction
- **Cursor**: Pointer on hover

#### Hover
- **Appearance**: Slightly darker background/border for Primary/Secondary, darker gray for Subtle
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Inactive (Disabled)
- **Appearance**: Muted colors, reduced opacity/contrast
- **Interaction**: Not interactive, cursor: not-allowed
- **Accessibility**: Must include `disabled` attribute and `aria-disabled="true"`

## Props / TypeScript Interface

```typescript
interface ButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;
  
  /**
   * Button type variant
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'subtle';
  
  /**
   * Button size
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large' | 'extraLarge';
  
  /**
   * Icon to display before the text (leading icon)
   */
  leadingIcon?: React.ReactNode;
  
  /**
   * Icon to display after the text (trailing icon)
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Button (React/TypeScript)

```typescript
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'subtle';
  size?: 'small' | 'default' | 'large' | 'extraLarge';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  disabled = false,
  onClick,
  type = 'button',
  leadingIcon,
  trailingIcon,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  // Size-based typography and dimension tokens
  const sizeStyles = {
    small: {
      height: 'var(--spacing-34, 34px)',
      padding: '0 var(--spacing-20, 20px)',
      borderRadius: 'var(--border-radius-150, 6px)',
      fontSize: 'var(--typography-font-size-300, 14px)',
      fontWeight: 'var(--typography-weight-medium, 500)',
      lineHeight: 'var(--typography-line-height-300, 20px)',
    },
    default: {
      height: 'var(--spacing-46, 46px)',
      padding: '0 var(--spacing-24, 24px)',
      borderRadius: 'var(--border-radius-200, 8px)',
      fontSize: 'var(--typography-font-size-400, 16px)',
      fontWeight: 'var(--typography-weight-medium, 500)',
      lineHeight: 'var(--typography-line-height-400, 22px)',
    },
    large: {
      height: 'var(--spacing-52, 52px)',
      padding: '0 var(--spacing-24, 24px)',
      borderRadius: 'var(--border-radius-300, 12px)',
      fontSize: 'var(--typography-font-size-400, 16px)',
      fontWeight: 'var(--typography-weight-semibold, 600)',
      lineHeight: 'var(--typography-line-height-400, 22px)',
    },
    extraLarge: {
      height: 'var(--spacing-64, 64px)',
      padding: '0 var(--spacing-32, 32px)',
      borderRadius: 'var(--border-radius-300, 12px)',
      fontSize: 'var(--typography-font-size-500, 20px)',
      fontWeight: 'var(--typography-weight-semibold, 600)',
      lineHeight: 'var(--typography-line-height-500, 28px)',
    },
  };

  // Variant-based color tokens
  const variantStyles = {
    default: {
      backgroundColor: disabled
        ? 'var(--color-light-mode-blue-300, #E1E9FA)'
        : 'var(--color-brand-copart-blue, #2662D9)',
      color: 'var(--color-brand-copart-white, #FFFFFF)',
      border: 'none',
      hoverBackgroundColor: 'var(--color-light-mode-blue-500, #063598)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: disabled
        ? 'var(--color-light-mode-neutral-300, #C5CCD3)'
        : 'var(--color-brand-copart-blue, #2662D9)',
      border: `1px solid ${
        disabled
          ? 'var(--color-light-mode-neutral-300, #C5CCD3)'
          : 'var(--color-brand-copart-blue, #2662D9)'
      }`,
      hoverBackgroundColor: 'var(--color-light-mode-blue-300, #E1E9FA)',
    },
    subtle: {
      backgroundColor: disabled
        ? 'var(--color-light-mode-neutral-100, #F4F5F6)'
        : 'var(--color-light-mode-neutral-200, #E2E5E9)',
      color: disabled
        ? 'var(--color-light-mode-neutral-300, #C5CCD3)'
        : 'var(--color-light-mode-neutral-500, #2F333C)',
      border: 'none',
      hoverBackgroundColor: 'var(--color-light-mode-neutral-300, #C5CCD3)',
    },
  };

  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-8, 8px)',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
    boxSizing: 'border-box',
    outline: 'none',
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && variantStyles[variant].hoverBackgroundColor) {
      e.currentTarget.style.backgroundColor = variantStyles[variant].hoverBackgroundColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor as string;
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={className}
      style={baseStyles}
      {...props}
    >
      {leadingIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{trailingIcon}</span>}
    </button>
  );
};

export default Button;
```

### Usage Examples

#### Primary Button
```typescript
<Button variant="default" size="default" onClick={handleSubmit}>
  Submit
</Button>
```

#### Secondary Button
```typescript
<Button variant="secondary" size="default" onClick={handleCancel}>
  Cancel
</Button>
```

#### Subtle Button
```typescript
<Button variant="subtle" size="small" onClick={handleSkip}>
  Skip
</Button>
```

#### Button with Leading Icon
```typescript
<Button 
  variant="default" 
  size="default" 
  leadingIcon={<HeartIcon />}
  onClick={handleWatchlist}
>
  Watchlist
</Button>
```

#### Button with Trailing Icon
```typescript
<Button 
  variant="default" 
  size="default" 
  trailingIcon={<ChevronRightIcon />}
  onClick={handleNext}
>
  Next
</Button>
```

#### Disabled Button
```typescript
<Button 
  variant="default" 
  size="default" 
  disabled={true}
  aria-label="Submit form (disabled)"
>
  Submit
</Button>
```

#### Different Sizes
```typescript
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>
<Button size="extraLarge">Extra Large</Button>
```

#### Form Submission
```typescript
<Button type="submit" variant="default" size="large">
  Sign In
</Button>
```

## Design Tokens Used

### Colors

#### Default/Primary Variant
- **Background (Default)**: `--color-brand-copart-blue` (#2662D9)
- **Background (Hover)**: `--color-light-mode-blue-500` (#063598)
- **Background (Disabled)**: `--color-light-mode-blue-300` (#E1E9FA)
- **Text**: `--color-brand-copart-white` (#FFFFFF)

#### Secondary Variant
- **Background**: `transparent`
- **Background (Hover)**: `--color-light-mode-blue-300` (#E1E9FA)
- **Border (Default)**: `--color-brand-copart-blue` (#2662D9)
- **Border (Disabled)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text (Default)**: `--color-brand-copart-blue` (#2662D9)
- **Text (Disabled)**: `--color-light-mode-neutral-300` (#C5CCD3)

#### Subtle Variant
- **Background (Default)**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Background (Hover)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Background (Disabled)**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text (Default)**: `--color-light-mode-neutral-500` (#2F333C)
- **Text (Disabled)**: `--color-light-mode-neutral-300` (#C5CCD3)

### Typography

#### Small Size
- **Font Size**: `--typography-font-size-300` (14px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-300` (20px)
- **Type Scale**: Button Small

#### Default Size
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Button Medium

#### Large Size
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-semibold` (600)
- **Line Height**: `--typography-line-height-400` (22px)
- **Type Scale**: Button Large

#### Extra Large Size
- **Font Size**: `--typography-font-size-500` (20px)
- **Font Weight**: `--typography-weight-semibold` (600)
- **Line Height**: `--typography-line-height-500` (28px)
- **Type Scale**: Button Extra Large

#### Font Family
- **Base**: `--typography-font-family-base` (Inter)

### Spacing

#### Height
- **Small**: `--spacing-34` (34px)
- **Default**: `--spacing-46` (46px)
- **Large**: `--spacing-52` (52px)
- **Extra Large**: `--spacing-64` (64px)

#### Padding (Horizontal, left/right)
- **Small**: `--spacing-20` (20px)
- **Default**: `--spacing-24` (24px)
- **Large**: `--spacing-24` (24px)
- **Extra Large**: `--spacing-32` (32px)

#### Icon Gap
- **Icon to Text**: `--spacing-8` (8px)

### Border Radius
- **Small**: `--border-radius-150` (6px)
- **Default**: `--border-radius-200` (8px)
- **Large**: `--border-radius-300` (12px)
- **Extra Large**: `--border-radius-300` (12px)

## Accessibility

### ARIA Attributes

- **`aria-label`**: Use when button text alone doesn't provide sufficient context
- **`aria-disabled`**: Set to `true` when button is disabled (in addition to `disabled` attribute)
- **`aria-describedby`**: Reference additional descriptive text if needed

### Keyboard Navigation

- **Enter/Space**: Activates the button when focused
- **Tab**: Moves focus to next interactive element
- **Shift+Tab**: Moves focus to previous interactive element

### Focus States

- **Visible Focus Indicator**: Ensure buttons have a visible focus outline (browser default or custom)
- **Focus Ring**: Consider using a focus ring that matches the design system

### Best Practices

1. **Descriptive Labels**: Use clear, action-oriented text (e.g., "Save Changes" not "OK")
2. **Icon Buttons**: Always include `aria-label` for icon-only buttons
3. **Disabled State**: Clearly communicate why a button is disabled when possible
4. **Loading States**: Consider adding loading indicators for async actions
5. **Touch Targets**: Ensure minimum 44x44px touch target for mobile (consider padding)

### Screen Reader Considerations

- Buttons are announced as "button" by screen readers
- Button text is read aloud
- Disabled state is announced
- Icon-only buttons require `aria-label` for context

## Implementation Notes

### CSS Variables

All styling should use CSS variables from the design tokens. This ensures consistency and makes theme updates easier.

### Hover States

Implement smooth transitions for hover states (recommended: 0.2s ease). Use the hover color tokens specified in the design tokens.

### Disabled States

Disabled buttons should:
- Have reduced visual prominence
- Not respond to clicks
- Show `cursor: not-allowed`
- Include both `disabled` attribute and `aria-disabled="true"`

### Icon Integration

When using icons:
- Maintain consistent spacing between icon and text (8px gap)
- Icons should match the text color
- Icon size should be proportional to button size
- Consider icon-only buttons for compact spaces

### Responsive Considerations

- Buttons should maintain minimum touch target sizes on mobile (44x44px recommended)
- Consider full-width buttons on mobile for primary actions
- Stack buttons vertically on small screens if needed

## Related Components

- **Inputs**: Buttons often appear alongside form inputs
- **Modals**: Buttons are used for modal actions (confirm/cancel)
- **Forms**: Buttons submit forms and trigger form actions
- **Navigation**: Buttons can be used for navigation actions

## Figma Reference

- **Component Node ID**: `709-3977`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Buttons Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=709-3977&m=dev)

## Additional Resources

- [Component Catalog](../catalog.json) - Complete component reference
- [Design System Guide](../docs/design-system-guide.md) - Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) - When and how to use components
- [Color Tokens](../tokens/colors.json) - Complete color palette
- [Typography Tokens](../tokens/typography.json) - Typography scale
- [Spacing Tokens](../tokens/spacing.json) - Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) - Border radius values
