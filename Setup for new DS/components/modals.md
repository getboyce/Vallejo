# Modals Component

## Overview

The Modal component is an overlay dialog in the Vallejo Design System that appears above the page content to capture user attention for important actions or information. Modals require user interaction before they can be dismissed.

**Figma Reference:**
- **Node ID**: `138-4846`
- **Figma Link**: [Modals Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4846&m=dev)

## Description

Modals are used for critical actions, confirmations, or important information that requires user attention. They block interaction with the underlying page until the user takes action. Modals should be used sparingly and only for actions that cannot be undone or require immediate attention.

### Use Cases

- **Confirmations**: Confirm destructive actions (e.g., "Delete account", "Remove item")
- **Critical Information**: Display important information that requires acknowledgment
- **Form Submissions**: Collect required information in a focused context
- **Error Messages**: Display critical errors that need immediate attention
- **User Decisions**: Present choices that require a decision before proceeding

## Variants

### Size

#### Standard (Default)
- **Width**: Fixed at 440px
- **Usage**: Standard modals for confirmations, forms, and important information
- **Visual**: Consistent width matching shelves component

### Content Variants

#### With Header
- **Structure**: Header with centered title and close button
- **Usage**: Standard modal pattern
- **Layout**: Title centered, close button positioned absolutely in top-right (16px from edges)
- **Header Height**: 56px

### Action Button Variants

#### Single Action
- **Appearance**: One button (e.g., "OK", "Close")
- **Usage**: Informational modals, simple confirmations
- **Visual**: Centered or right-aligned button

#### Dual Actions
- **Appearance**: Two buttons (e.g., "Cancel" / "Confirm")
- **Usage**: Confirmations, form submissions
- **Visual**: Cancel (secondary) on left, Confirm (primary) on right

#### Multiple Actions
- **Appearance**: Three or more buttons
- **Usage**: Complex decisions, multiple options
- **Visual**: Buttons arranged horizontally or vertically

## Props / TypeScript Interface

```typescript
interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;
  
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  
  /**
   * Modal title/headline
   */
  title?: string;
  
  /**
   * Modal content/body
   */
  children: React.ReactNode;
  
  /**
   * Primary action button configuration
   */
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'secondary' | 'subtle';
  };
  
  /**
   * Secondary action button configuration
   */
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'secondary' | 'subtle';
  };
  
  /**
   * Whether to show close button
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Whether clicking backdrop closes modal
   * @default false (for critical actions)
   */
  closeOnBackdropClick?: boolean;
  
  /**
   * Whether pressing Escape closes modal
   * @default true
   */
  closeOnEscape?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the modal
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Modal (React/TypeScript)

```typescript
import React, { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'secondary' | 'subtle';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'secondary' | 'subtle';
  };
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  primaryAction,
  secondaryAction,
  showCloseButton = true,
  closeOnBackdropClick = false,
  closeOnEscape = true,
  className = '',
  'aria-label': ariaLabel,
}) => {
  useEffect(() => {
    if (open && closeOnEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        role="presentation"
        onClick={closeOnBackdropClick ? onClose : undefined}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel ?? title ?? 'Modal'}
          className={className}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--color-light-neutral-000, #FFFFFF)',
            borderRadius: 'var(--border-radius-200, 8px)',
            boxShadow: 'var(--shadow-medium, -2px 3px 30px 0px rgba(70, 82, 93, 0.12))',
            width: '440px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
          }}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: 'var(--spacing-16, 16px) var(--spacing-24, 24px) var(--spacing-16, 16px)',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              {title && (
                <h2
                  style={{
                    fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                    fontSize: 'var(--typography-font-size-400, 16px)',
                    fontWeight: 'var(--typography-weight-bold, 700)',
                    lineHeight: '1',
                    color: 'var(--color-light-neutral-500, #2F333C)',
                    margin: 0,
                    padding: 0,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  style={{
                    position: 'absolute',
                    right: 'var(--spacing-16, 16px)',
                    top: 0,
                    bottom: 0,
                    background: 'none',
                    border: 'none',
                    width: '32px',
                    height: '100%',
                    cursor: 'pointer',
                    color: 'var(--color-light-neutral-500, #2F333C)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--border-radius-200, 8px)',
                    transition: 'background 0.2s ease',
                    margin: 0,
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-light-neutral-100, #F4F5F6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div
            style={{
              padding: '0 var(--spacing-16, 16px)',
              overflow: 'auto',
              flex: 1,
            }}
            className="modal-body"
          >
            <style>{`
              .modal-body > *:first-child {
                margin-top: 0 !important;
              }
              .modal-body p {
                margin: 0;
              }
            `}</style>
            {children}
          </div>

          {/* Footer */}
          {(primaryAction || secondaryAction) && (
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-16, 16px)',
                justifyContent: 'stretch',
                padding: 'var(--spacing-16, 16px)',
              }}
            >
              {secondaryAction && (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                    fontSize: 'var(--typography-font-size-400, 16px)',
                    fontWeight: 'var(--typography-weight-medium, 500)',
                    lineHeight: 'var(--typography-line-height-400, 22px)',
                    padding: 'var(--spacing-8, 8px) var(--spacing-16, 16px)',
                    border: '1px solid var(--color-brand-copart-blue, #2662D9)',
                    background: 'transparent',
                    color: 'var(--color-brand-copart-blue, #2662D9)',
                    borderRadius: 'var(--border-radius-200, 8px)',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-light-blue-100, #F6F9FD)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {secondaryAction.label}
                </button>
              )}
              {primaryAction && (
                <button
                  type="button"
                  onClick={primaryAction.onClick}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                    fontSize: 'var(--typography-font-size-400, 16px)',
                    fontWeight: 'var(--typography-weight-medium, 500)',
                    lineHeight: 'var(--typography-line-height-400, 22px)',
                    padding: 'var(--spacing-8, 8px) var(--spacing-16, 16px)',
                    border: 'none',
                    background: 'var(--color-brand-copart-blue, #2662D9)',
                    color: 'var(--color-brand-copart-white, #FFFFFF)',
                    borderRadius: 'var(--border-radius-200, 8px)',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-light-blue-500, #063598)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-brand-copart-blue, #2662D9)';
                  }}
                >
                  {primaryAction.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
```

### Usage Examples

#### Confirmation Modal
```typescript
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Account"
  primaryAction={{
    label: 'Yes',
    onClick: handleDelete,
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setIsOpen(false),
  }}
  closeOnBackdropClick={false}
>
  <p>Are you sure you want to delete your account? This action cannot be undone.</p>
</Modal>
```

#### Informational Modal
```typescript
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Important Information"
  primaryAction={{
    label: 'OK',
    onClick: () => setIsOpen(false),
  }}
>
  <p>Your changes have been saved successfully.</p>
</Modal>
```

## Design Tokens Used

### Colors

- **Modal Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Backdrop**: rgba(0, 0, 0, 0.5)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Primary Button**: `--color-brand-copart-blue` (#2662D9) background, `--color-brand-copart-white` (#FFFFFF) text
- **Secondary Button**: Transparent background, `--color-brand-copart-blue` (#2662D9) border and text

### Typography

- **Title Font Size**: `--typography-font-size-400` (16px)
- **Title Font Weight**: `--typography-weight-bold` (700)
- **Title Line Height**: `--typography-line-height-400` (22px)
- **Title Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Body Font Size**: `--typography-font-size-400` (16px)
- **Button Font Size**: `--typography-font-size-400` (16px)
- **Button Font Weight**: `--typography-weight-medium` (500)

### Spacing

- **Modal Width**: Fixed at 440px
- **Header Height**: 56px
- **Header Padding**: `var(--spacing-16, 16px) var(--spacing-24, 24px) var(--spacing-16, 16px)` (16px top, 24px horizontal, 16px bottom)
- **Header Alignment**: Text and close icon are vertically centered
- **Body Padding**: `0 var(--spacing-16, 16px)` (16px horizontal only, no top or bottom padding)
- **Body Content**: First child element has no top margin, text has no margin
- **Footer Padding**: `var(--spacing-16, 16px)` (16px on all sides)
- **Footer Layout**: Buttons are full width with `flex: 1`, 16px gap between them
- **Spacing Between Sections**: 16px (header to body, body to footer)
- **Button Gap**: `--spacing-16` (16px)
- **Button Padding**: `--spacing-8` (8px) vertical, `--spacing-16` (16px) horizontal
- **Close Button**: Positioned 16px from right edge

### Border Radius

- **Modal**: `--border-radius-200` (8px)
- **Buttons**: `--border-radius-200` (8px)

### Shadows

- **Modal Shadow**: `--shadow-medium` (-2px 3px 30px 0px rgba(70, 82, 93, 0.12))

### Dimensions

- **Width**: Fixed at 440px
- **Max Width**: 90vw (on smaller screens)
- **Header Height**: 56px
- **Max Height**: 90vh

## Accessibility

### ARIA Attributes

- **`role="dialog"`**: Applied to the modal container
- **`aria-modal="true"`**: Indicates the modal blocks interaction with other content
- **`aria-label`**: Provide descriptive label for the modal
- **`aria-labelledby`**: Link to title element (if using title)

### Focus Management

- **Focus trap**: Focus should be trapped within the modal
- **Initial focus**: Focus should move to first focusable element (or close button)
- **Return focus**: Return focus to trigger element when modal closes

### Keyboard Navigation

- **Tab**: Move focus between focusable elements within modal
- **Shift+Tab**: Move focus backward
- **Escape**: Close modal (if `closeOnEscape` is true)
- **Enter**: Activate focused button

### Screen Reader Considerations

- Modal is announced when it opens
- Title is announced if present
- Backdrop interaction is blocked for screen readers
- Focus management ensures screen reader users stay within modal

### Best Practices

1. **Use sparingly**: Only for critical actions or important information
2. **Clear actions**: Provide clear primary and secondary actions
3. **Focus management**: Properly trap and return focus
4. **Escape key**: Allow closing with Escape (unless action is critical)
5. **Backdrop click**: Consider disabling for critical actions

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, border radius, and shadows. Avoid hardcoded values.

### Body Scroll Lock

When modal is open, prevent body scrolling by setting `overflow: hidden` on body element. Restore on close.

### Focus Trap

Implement focus trap to keep focus within modal:
- Focus first focusable element on open
- Trap Tab/Shift+Tab within modal
- Return focus to trigger on close

### Animation (Optional)

Consider adding:
- Fade-in animation for backdrop
- Scale/fade-in animation for modal
- Keep animations subtle (200-300ms duration)

### Backdrop

Backdrop should:
- Cover entire viewport
- Be semi-transparent (rgba(0, 0, 0, 0.5))
- Optionally close modal on click (based on `closeOnBackdropClick`)

## Related Components

- **Shelves**: Side panel alternative for less critical content
- **Alerts**: For inline important messages
- **Toasts**: For temporary notifications

## Figma Reference

- **Component Node ID**: `138-4846`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Modals Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4846&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
