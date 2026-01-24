# Toasts Component

## Overview

The Toast component is a temporary notification element in the Vallejo Design System that appears briefly to provide feedback to users. Toasts are non-blocking, typically appear in a fixed position (often top-right), and automatically dismiss after a short duration.

**Figma Reference:**
- **Node ID**: `690-928`
- **Figma Link**: [Toasts Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=690-928&m=dev)

## Description

Toasts are lightweight, temporary notifications that provide feedback without interrupting the user's workflow. They share visual styling with Alerts but are designed for transient messages that appear and disappear automatically. Toasts are typically positioned at the top-right or top-center of the viewport and stack vertically when multiple toasts are shown.

### Use Cases

- **Action Confirmations**: Confirm successful actions (e.g., "Item added to cart")
- **Quick Notifications**: Brief status updates (e.g., "Saved", "Copied to clipboard")
- **Error Feedback**: Non-critical errors that don't require immediate attention
- **Progress Updates**: Show completion of background tasks
- **System Messages**: Brief system notifications or updates

## Variants

### Type Variants

#### 1. Success
- **Appearance**: Green color scheme with checkmark icon
- **Usage**: Confirm successful actions
- **Visual**: Positive, reassuring feedback
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-success` (#D7E8D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-success` (#1B6600)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-success` (#1D5908)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-success` (#B9EDA7)

#### 2. Warning
- **Appearance**: Yellow/amber color scheme with exclamation triangle icon
- **Usage**: Alert users to potential issues
- **Visual**: Cautionary, attention-grabbing
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-warning` (#FFF7D1)
- **Light Mode Text**: `--color-light-mode-alerts-text-warning` (#705700)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-warning` (#705700)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-warning` (#FCEFC3)

#### 3. Error
- **Appearance**: Red color scheme with exclamation circle icon
- **Usage**: Display errors or failures
- **Visual**: Urgent, requires attention
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-error` (#FCE5E9)
- **Light Mode Text**: `--color-light-mode-alerts-text-error` (#C20022)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-error` (#6E202F)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-error` (#FFA7B6)

#### 4. Information (Neutral)
- **Appearance**: Blue color scheme with information circle icon
- **Usage**: Provide helpful context or tips
- **Visual**: Informative, neutral tone
- **Light Mode Background**: `--color-light-mode-alerts-backgrounds-neutral` (#E0EBFF)
- **Light Mode Text**: `--color-light-mode-alerts-text-neutral` (#0F2757)
- **Dark Mode Background**: `--color-dark-mode-alerts-backgrounds-neutral` (#203050)
- **Dark Mode Text**: `--color-dark-mode-alerts-text-neutral` (#CBD9F6)

### Style Variants

#### 1. Light (Subtle)
- **Appearance**: Light pastel background with colored border and dark text
- **Usage**: Web applications (light mode)
- **Visual**: Subtle, integrated with page content
- **Border**: 1px solid, matches text/icon color
- **Background**: Light pastel color from alert backgrounds token
- **Text**: Dark color from alert text token

#### 2. Dark (Filled)
- **Appearance**: Solid dark background with light text
- **Usage**: Mobile app dark mode
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
- **Usage**: Toasts that can be manually dismissed before auto-dismiss
- **Interaction**: Clicking X removes the toast immediately
- **Accessibility**: Must include `aria-label="Close"` or similar

### Position Variants

- **Top Right**: Default position for most toasts
- **Top Center**: For important system-wide notifications
- **Top Left**: Alternative position (less common)
- **Bottom Right**: Alternative position (less common)

## Props / TypeScript Interface

```typescript
interface ToastProps {
  /**
   * Toast type/variant
   */
  type: 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Toast style variant
   * @default 'light'
   */
  variant?: 'light' | 'dark';
  
  /**
   * Toast title (required)
   */
  title: string;
  
  /**
   * Toast description/message (optional)
   */
  description?: string;
  
  /**
   * Whether the toast can be dismissed
   * @default true
   */
  dismissible?: boolean;
  
  /**
   * Auto-dismiss duration in milliseconds
   * @default 5000
   */
  duration?: number;
  
  /**
   * Callback when toast is dismissed
   */
  onDismiss?: () => void;
  
  /**
   * Toast position
   * @default 'top-right'
   */
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right';
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the toast
   */
  'aria-label'?: string;
  
  /**
   * Role for the toast
   * @default 'status'
   */
  role?: 'alert' | 'status';
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Toast (React/TypeScript)

```typescript
import React, { useEffect } from 'react';

interface ToastProps {
  type: 'success' | 'warning' | 'error' | 'info';
  variant?: 'light' | 'dark';
  title: string;
  description?: string;
  dismissible?: boolean;
  duration?: number;
  onDismiss?: () => void;
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right';
  className?: string;
  'aria-label'?: string;
  role?: 'alert' | 'status';
}

export const Toast: React.FC<ToastProps> = ({
  type,
  variant = 'light',
  title,
  description,
  dismissible = true,
  duration = 5000,
  onDismiss,
  position = 'top-right',
  className = '',
  'aria-label': ariaLabel,
  role = 'status',
}) => {
  useEffect(() => {
    if (duration > 0 && onDismiss) {
      const timer = setTimeout(() => {
        onDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

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

  const getPositionStyles = () => {
    switch (position) {
      case 'top-right':
        return { top: 'var(--spacing-20, 20px)', right: 'var(--spacing-20, 20px)' };
      case 'top-center':
        return { top: 'var(--spacing-20, 20px)', left: '50%', transform: 'translateX(-50%)' };
      case 'top-left':
        return { top: 'var(--spacing-20, 20px)', left: 'var(--spacing-20, 20px)' };
      case 'bottom-right':
        return { bottom: 'var(--spacing-20, 20px)', right: 'var(--spacing-20, 20px)' };
    }
  };

  const colors = getColorTokens();
  const isLight = variant === 'light';
  const positionStyles = getPositionStyles();

  return (
    <div
      role={role}
      aria-label={ariaLabel ?? `${type} toast: ${title}${description ? ` ${description}` : ''}`}
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
        position: 'fixed',
        zIndex: 1000,
        minWidth: '300px',
        maxWidth: '400px',
        boxShadow: 'var(--shadow-medium, 0 4px 12px rgba(0, 0, 0, 0.15))',
        ...positionStyles,
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
          aria-label="Close toast"
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

### Toast Container (for managing multiple toasts)

```typescript
import React, { useState, useCallback } from 'react';

interface ToastItem {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  description?: string;
  duration?: number;
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ marginBottom: index < toasts.length - 1 ? '12px' : 0 }}>
          <Toast
            {...toast}
            onDismiss={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};
```

### Usage Examples

#### Success Toast
```typescript
<Toast
  type="success"
  title="Saved"
  description="Your changes have been saved."
  duration={3000}
  onDismiss={() => {}}
/>
```

#### Error Toast
```typescript
<Toast
  type="error"
  title="Failed to save"
  description="Please try again."
  dismissible
  onDismiss={() => {}}
/>
```

#### Info Toast (Title Only)
```typescript
<Toast
  type="info"
  title="New message received"
  duration={4000}
  onDismiss={() => {}}
/>
```

## Design Tokens Used

### Colors

Same as Alerts component - see [Alerts Component](./alerts.md#design-tokens-used) for complete color token reference.

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
- **Gap between stacked toasts**: `--spacing-12` (12px)
- **Icon size**: 20px × 20px
- **Dismiss button size**: 16px × 16px
- **Position offset**: `--spacing-20` (20px) from viewport edge

### Border Radius

- **Toast container**: `--border-radius-200` (8px)

### Shadows

- **Toast shadow**: `--shadow-medium` (for elevation above page content)

### Dimensions

- **Min width**: 300px
- **Max width**: 400px

## Accessibility

### ARIA Attributes

- **`role="status"`**: Default role for non-critical notifications
- **`role="alert"`**: Use for critical errors that require immediate attention
- **`aria-label`**: Provide descriptive label when title + description isn't sufficient
- **`aria-live="polite"`**: Consider adding for dynamic toasts (screen readers announce when toast appears)

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
- **Escape**: Consider closing dismissible toasts (optional enhancement)

### Focus States

- Dismiss button must have visible focus indicator
- Focus ring should align with design system focus styling

### Screen Reader Considerations

- Toasts are announced when they appear (if using `aria-live`)
- Title and description are read together
- Dismiss button is announced as "Close" or similar
- Toast type (success/error/warning/info) should be clear from context

### Best Practices

1. **Auto-dismiss timing**: Default to 5 seconds, adjust based on message length
2. **Stacking**: Limit to 3-5 toasts maximum to avoid overwhelming users
3. **Position**: Use consistent position (top-right recommended)
4. **Non-blocking**: Toasts should never block user interaction
5. **Clear messaging**: Keep messages concise and actionable

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Positioning

Toasts are positioned `fixed` relative to the viewport. Use CSS positioning tokens for consistent spacing from edges.

### Auto-Dismiss

Implement auto-dismiss using `setTimeout`. Clear timeout when toast is manually dismissed or component unmounts.

### Stacking

When multiple toasts are shown, stack them vertically with consistent spacing. Consider animation for enter/exit.

### Animation (Recommended)

Consider adding:
- Slide-in animation from the position edge
- Fade-in animation
- Slide-out animation when dismissed
- Keep animations subtle (200-300ms duration)

### Shadow

Use shadow token to create elevation above page content, making toasts clearly visible.

## Differences from Alerts

- **Position**: Toasts are fixed-position, Alerts are inline
- **Duration**: Toasts auto-dismiss, Alerts persist until dismissed
- **Role**: Toasts default to `role="status"`, Alerts default to `role="alert"`
- **Use case**: Toasts for brief feedback, Alerts for important messages requiring attention

## Related Components

- **Alerts**: For inline important messages that persist
- **Tooltips**: For contextual help, not for notifications
- **Modals**: For critical errors requiring user acknowledgment

## Figma Reference

- **Component Node ID**: `690-928`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Toasts Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=690-928&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
