# Alerts Component

## Overview

The Alert component is a feedback element in the Vallejo Design System used to display important messages to users. Alerts provide contextual information, warnings, errors, or success confirmations with clear visual hierarchy and semantic meaning.

**Figma Reference:**
- **Node ID**: `138-5100`
- **Figma Link**: [Alerts Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-5100&m=dev)

## Description

Alerts communicate important information to users through a combination of color, iconography, typography, and optional dismiss functionality. They are designed to be attention-grabbing while maintaining readability and accessibility.

### Use Cases

- **Success Messages**: Confirm successful actions (e.g., "Profile updated successfully")
- **Error Messages**: Display errors or validation failures (e.g., "Invalid email address")
- **Warning Messages**: Alert users to potential issues (e.g., "Your session will expire in 5 minutes")
- **Information Messages**: Provide helpful context or tips (e.g., "New features available")
- **Form Validation**: Show inline validation errors or success states
- **System Notifications**: Display system-level messages or status updates

## Variants

### Type Variants

#### 1. Success
- **Appearance**: Green color scheme with checkmark icon
- **Usage**: Confirm successful actions, completed processes
- **Visual**: Positive, reassuring feedback
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-success` (#D7E8D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-success` (#1B6600)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-success` (#1D5908)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-success` (#B9EDA7)

#### 2. Warning
- **Appearance**: Yellow/amber color scheme with exclamation triangle icon
- **Usage**: Alert users to potential issues or important information
- **Visual**: Cautionary, attention-grabbing
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-warning` (#FFF7D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-warning` (#705700)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-warning` (#705700)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-warning` (#FCEFC3)

#### 3. Error
- **Appearance**: Red color scheme with exclamation circle icon
- **Usage**: Display errors, validation failures, critical issues
- **Visual**: Urgent, requires attention
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-error` (#FCE5E9)
- **Light Mode Text**: `--color-light-mode-alerts-text-error` (#C20022)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-error` (#6E202F)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-error` (#FFA7B6)

#### 4. Information (Neutral)
- **Appearance**: Blue color scheme with information circle icon
- **Usage**: Provide helpful context, tips, or general information
- **Visual**: Informative, neutral tone
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-neutral` (#E0EBFF)
- **Light Mode Text**: `--color-light-mode-alerts-text-neutral` (#0F2757)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-neutral` (#203050)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-neutral` (#CBD9F6)

### Style Variants

#### 1. Light (Subtle)
- **Appearance**: Light pastel background with colored border and dark text
- **Usage**: Web applications (light mode), less intrusive alerts
- **Visual**: Subtle, integrated with page content
- **Border**: 1px solid, matches text/icon color
- **Background**: Light pastel color from alert backgrounds token
- **Text**: Dark color from alert text token

#### 2. Dark (Filled)
- **Appearance**: Solid dark background with light text
- **Usage**: Mobile app dark mode, high-contrast alerts
- **Visual**: Bold, high contrast
- **Border**: None (background fills entire component)
- **Background**: Dark color from alert backgrounds token
- **Text**: Light color from alert text token

### Content Variants

#### With Title and Description
- **Structure**: Icon + Title (bold) + Description (regular weight)
- **Usage**: Detailed messages requiring explanation
- **Layout**: Title on first line, description on second line (or wrapped)

#### With Title Only
- **Structure**: Icon + Title (bold)
- **Usage**: Concise messages, limited space
- **Layout**: Single line or short multi-line title

### Dismissible Variant

- **Dismiss Button**: Optional close (X) button in top-right corner
- **Usage**: Alerts that can be dismissed by the user
- **Interaction**: Clicking X removes the alert
- **Accessibility**: Must include `aria-label="Close"` or similar

## Props / TypeScript Interface

```typescript
interface AlertProps {
  /**
   * Alert type/variant
   */
  type: 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Alert style variant
   * @default 'light'
   */
  variant?: 'light' | 'dark';
  
  /**
   * Alert title (required)
   */
  title: string;
  
  /**
   * Alert description/message (optional)
   */
  description?: string;
  
  /**
   * Whether the alert can be dismissed
   * @default false
   */
  dismissible?: boolean;
  
  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the alert
   */
  'aria-label'?: string;
  
  /**
   * Role for the alert
   * @default 'alert'
   */
  role?: 'alert' | 'status' | 'alertdialog';
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Alert (React/TypeScript)

```typescript
import React from 'react';

interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  variant?: 'light' | 'dark';
  title: string;
  description?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  'aria-label'?: string;
  role?: 'alert' | 'status' | 'alertdialog';
}

export const Alert: React.FC<AlertProps> = ({
  type,
  variant = 'light',
  title,
  description,
  dismissible = false,
  onDismiss,
  className = '',
  'aria-label': ariaLabel,
  role = 'alert',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M6 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 2L2 18h16L10 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'info':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  const getColorTokens = () => {
    const isLight = variant === 'light';
    const prefix = isLight ? 'light-mode' : 'dark-mode';
    
    switch (type) {
      case 'success':
        return {
          background: `var(--color-${prefix}/alerts/backgrounds/success)`,
          text: `var(--color-${prefix}/alerts/text/success)`,
        };
      case 'warning':
        return {
          background: `var(--color-${prefix}/alerts/backgrounds/warning)`,
          text: `var(--color-${prefix}/alerts/text/warning)`,
        };
      case 'error':
        return {
          background: `var(--color-${prefix}/alerts/backgrounds/error)`,
          text: `var(--color-${prefix}/alerts/text/error)`,
        };
      case 'info':
        return {
          background: `var(--color-${prefix}/alerts/backgrounds/neutral)`,
          text: `var(--color-${prefix}/alerts/text/neutral)`,
        };
    }
  };

  const colors = getColorTokens();
  const isLight = variant === 'light';

  return (
    <div
      role={role}
      aria-label={ariaLabel ?? `${type} alert: ${title}${description ? ` ${description}` : ''}`}
      className={className}
      style={{
        fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
        fontSize: 'var(--typography-font-size-400, 16px)',
        fontWeight: 'var(--typography-weight-regular, 400)',
        lineHeight: 'var(--typography-line-height-400, 22px)',
        padding: 'var(--spacing-16, 16px)',
        borderRadius: 'var(--border-radius-200, 8px)',
        background: colors.background,
        color: colors.text,
        border: isLight ? `1px solid ${colors.text}` : 'none',
        display: 'flex',
        gap: 'var(--spacing-12, 12px)',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        {getIcon()}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 'var(--typography-weight-semibold, 600)',
            marginBottom: description ? 'var(--spacing-4, 4px)' : 0,
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 'var(--typography-font-size-300, 14px)' }}>
            {description}
          </div>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close alert"
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '0',
            marginLeft: 'var(--spacing-8, 8px)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};
```

### Usage Examples

#### Success Alert
```typescript
<Alert
  type="success"
  title="Profile updated"
  description="Your profile has been successfully updated."
/>
```

#### Error Alert with Dismiss
```typescript
<Alert
  type="error"
  title="Invalid email"
  description="Please enter a valid email address."
  dismissible
  onDismiss={() => console.log('Dismissed')}
/>
```

#### Warning Alert (Dark Variant)
```typescript
<Alert
  type="warning"
  variant="dark"
  title="Session expiring"
  description="Your session will expire in 5 minutes."
/>
```

#### Info Alert (Title Only)
```typescript
<Alert
  type="info"
  title="New features available"
/>
```

## Design Tokens Used

### Colors

#### Success
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-success` (#D7E8D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-success` (#1B6600)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-success` (#1D5908)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-success` (#B9EDA7)

#### Warning
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-warning` (#FFF7D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-warning` (#705700)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-warning` (#705700)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-warning` (#FCEFC3)

#### Error
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-error` (#FCE5E9)
- **Light Mode Text**: `--color-light-mode-alerts-text-error` (#C20022)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-error` (#6E202F)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-error` (#FFA7B6)

#### Information (Neutral)
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-neutral` (#E0EBFF)
- **Light Mode Text**: `--color-light-mode-alerts-text-neutral` (#0F2757)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-neutral` (#203050)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-neutral` (#CBD9F6)

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Title Font Size**: `--typography-font-size-400` (16px)
- **Title Font Weight**: `--typography-weight-semibold` (600)
- **Description Font Size**: `--typography-font-size-300` (14px)
- **Description Font Weight**: `--typography-weight-regular` (400)
- **Line Height**: `--typography-line-height-400` (22px)

### Spacing

- **Padding**: `--spacing-16` (16px)
- **Gap between icon and content**: `--spacing-12` (12px)
- **Gap between title and description**: `--spacing-4` (4px)
- **Icon size**: 20px × 20px
- **Dismiss button size**: 16px × 16px

### Border Radius

- **Alert container**: `--border-radius-200` (8px)

### Border (Light Variant Only)

- **Border width**: 1px
- **Border color**: Matches text/icon color (from alert text token)

## Accessibility

### ARIA Attributes

- **`role="alert"`**: Use for critical errors or important messages that should interrupt the user
- **`role="status"`**: Use for success messages or non-critical information
- **`role="alertdialog"`**: Use when alert requires user interaction
- **`aria-label`**: Provide descriptive label when title + description isn't sufficient
- **`aria-live`**: Consider adding `aria-live="polite"` or `aria-live="assertive"` for dynamic alerts

### Icon Accessibility

- Icons should have `aria-hidden="true"` since they are decorative
- Icon meaning is conveyed through color and text content

### Dismiss Button

- Dismiss button must have `aria-label="Close"` or similar
- Button should be keyboard accessible (Enter/Space to activate)
- Focus indicator should be visible

### Keyboard Navigation

- **Tab**: Move focus to dismiss button (if present)
- **Enter / Space**: Activate dismiss button
- **Escape**: Consider closing dismissible alerts (optional enhancement)

### Focus States

- Dismiss button must have visible focus indicator
- Focus ring should align with design system focus styling

### Screen Reader Considerations

- Alerts are announced when they appear (if using `role="alert"` or `aria-live`)
- Title and description are read together
- Dismiss button is announced as "Close" or similar
- Alert type (success/error/warning/info) should be clear from context

### Best Practices

1. **Use appropriate role**: Choose `alert` for critical messages, `status` for informational
2. **Clear messaging**: Use concise, actionable titles and descriptions
3. **Color is not enough**: Don't rely solely on color; use icons and text
4. **Dismissible alerts**: Only make alerts dismissible if they're not critical
5. **Timing**: Consider auto-dismissing non-critical alerts after a delay

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Icons

Icons should be SVG-based and match the design system iconography. Size is typically 20px × 20px for the main icon, 16px × 16px for dismiss button.

### Light vs Dark Variants

- **Light variant**: Use for web applications (light mode)
- **Dark variant**: Use for mobile app dark mode
- Choose variant based on application context, not user preference (unless implementing full theme switching)

### Responsive Considerations

- Alerts should be full-width on mobile, constrained width on desktop
- Text should wrap appropriately on narrow screens
- Maintain minimum touch target size (44px × 44px) for dismiss button on mobile

### Animation (Optional)

Consider adding:
- Fade-in animation when alert appears
- Slide-out animation when dismissed
- Keep animations subtle and non-distracting

## Related Components

- **Toasts**: Similar to alerts but appear as temporary notifications (often top-right)
- **Tooltips**: For contextual help, not for important messages
- **Modals**: For critical errors requiring user acknowledgment

## Figma Reference

- **Component Node ID**: `138-5100`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Alerts Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-5100&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
