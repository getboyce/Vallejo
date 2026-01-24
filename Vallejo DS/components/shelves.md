# Shelves Component

## Overview

The Shelf component is a side panel overlay in the Vallejo Design System that slides in from the side (typically right) to display additional content, forms, or actions. Shelves are less intrusive than modals and allow users to see some of the underlying content.

**Figma Reference:**
- **Node ID**: `138-4826`
- **Figma Link**: [Shelves Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4826&m=dev)

## Description

Shelves are side panels that slide in from the edge of the screen to display additional content, forms, or detailed information. Unlike modals, shelves don't completely block the underlying content, making them suitable for less critical actions or supplementary information. They're commonly used for filters, settings, detail views, and forms.

### Use Cases

- **Filters**: Display filter options and controls
- **Settings**: Show settings panels or configuration options
- **Detail Views**: Display detailed information about an item
- **Forms**: Side panel forms for creating or editing content
- **Navigation**: Secondary navigation or menu panels
- **Supplementary Content**: Additional information or actions

## Variants

### Position Variants

#### Right (Default)
- **Appearance**: Slides in from the right edge
- **Usage**: Standard shelf position, most common
- **Visual**: Panel appears from right side
- **Width**: Fixed at 440px

#### Left
- **Appearance**: Slides in from the left edge
- **Usage**: Very rare use case, alternative position
- **Visual**: Panel appears from left side
- **Width**: Fixed at 440px

### Content Variants

#### With Header
- **Structure**: Header with centered title and close button
- **Usage**: Standard shelf pattern
- **Layout**: Title centered, close button positioned absolutely on the right
- **Header Height**: 56px

## Props / TypeScript Interface

```typescript
interface ShelfProps {
  /**
   * Whether the shelf is open
   */
  open: boolean;
  
  /**
   * Callback when shelf should close
   */
  onClose: () => void;
  
  /**
   * Shelf title/header
   */
  title?: string;
  
  /**
   * Shelf content/body
   */
  children: React.ReactNode;
  
  /**
   * Shelf position
   * @default 'right'
   */
  position?: 'left' | 'right';
  
  /**
   * Whether to show close button
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Whether clicking backdrop closes shelf
   * @default true
   */
  closeOnBackdropClick?: boolean;
  
  /**
   * Whether pressing Escape closes shelf
   * @default true
   */
  closeOnEscape?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the shelf
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Shelf (React/TypeScript)

```typescript
import React, { useEffect } from 'react';

interface ShelfProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Shelf: React.FC<ShelfProps> = ({
  open,
  onClose,
  title,
  children,
  position = 'right',
  showCloseButton = true,
  closeOnBackdropClick = true,
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

  const shelfWidth = '440px';

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
        }}
      />

      {/* Shelf */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel ?? title ?? 'Shelf'}
        className={className}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          [position]: 0,
          top: 0,
          bottom: 0,
          width: shelfWidth,
          maxWidth: '90vw',
          background: 'var(--color-light-neutral-000, #FFFFFF)',
          boxShadow: 'var(--shadow-dark, -4px 6px 30px 4px rgba(108, 112, 115, 0.2))',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          animation: `slideIn${position === 'right' ? 'Right' : 'Left'} 0.3s ease-out`,
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
              padding: '0 var(--spacing-24, 24px)',
              borderBottom: '1px solid var(--color-light-neutral-200, #E2E5E9)',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                  fontWeight: 'var(--typography-weight-bold, 700)',
                  lineHeight: 'var(--typography-line-height-400, 22px)',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close shelf"
                style={{
                  position: 'absolute',
                  right: 'var(--spacing-16, 16px)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  transition: 'background 0.2s ease',
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
            padding: 'var(--spacing-16, 16px)',
            overflow: 'auto',
            flex: 1,
          }}
          className="shelf-body"
        >
          <style>{`
            .shelf-body > *:first-child {
              margin-top: 0 !important;
            }
          `}</style>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
```

### Usage Examples

#### Basic Shelf
```typescript
<Shelf
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Filters"
>
  <div>
    <p>Filter options go here</p>
  </div>
</Shelf>
```

#### Left Position Shelf (Rare)
```typescript
<Shelf
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Navigation"
  position="left"
>
  <nav>
    <ul>
      <li>Menu item 1</li>
      <li>Menu item 2</li>
    </ul>
  </nav>
</Shelf>
```

## Design Tokens Used

### Colors

- **Shelf Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Backdrop**: rgba(0, 0, 0, 0.5)
- **Border**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

### Typography

- **Title Font Size**: `--typography-font-size-400` (16px)
- **Title Font Weight**: `--typography-weight-bold` (700)
- **Title Line Height**: `--typography-line-height-400` (22px)
- **Title Color**: `--color-light-mode-neutral-500` (#2F333C)
- **Body Font Size**: `--typography-font-size-400` (16px)

### Spacing

- **Header Height**: 56px
- **Header Padding**: `0 var(--spacing-24, 24px)` (horizontal only)
- **Body Padding**: `--spacing-16` (16px)
- **Body Content**: First child element has no top margin

### Border Radius

- **Shelf**: No border radius (full height panel)

### Shadows

- **Shelf Shadow**: `--shadow-dark` (-4px 6px 30px 4px rgba(108, 112, 115, 0.2))

### Dimensions

- **Width**: Fixed at 440px
- **Max Width**: 90vw (on smaller screens)
- **Header Height**: 56px
- **Height**: 100vh (full viewport height)

## Accessibility

### ARIA Attributes

- **`role="dialog"`**: Applied to the shelf container
- **`aria-modal="true"`**: Indicates the shelf blocks some interaction
- **`aria-label`**: Provide descriptive label for the shelf

### Focus Management

- **Focus trap**: Focus should be trapped within the shelf
- **Initial focus**: Focus should move to first focusable element (or close button)
- **Return focus**: Return focus to trigger element when shelf closes

### Keyboard Navigation

- **Tab**: Move focus between focusable elements within shelf
- **Shift+Tab**: Move focus backward
- **Escape**: Close shelf (if `closeOnEscape` is true)

### Screen Reader Considerations

- Shelf is announced when it opens
- Title is announced if present
- Focus management ensures screen reader users stay within shelf

### Best Practices

1. **Clear purpose**: Use for supplementary content, not critical actions
2. **Smooth animation**: Slide-in animation should be smooth (300ms)
3. **Focus management**: Properly trap and return focus
4. **Backdrop**: Allow closing with backdrop click for better UX
5. **Responsive**: Adjust width on smaller screens

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and shadows. Avoid hardcoded values.

### Body Scroll Lock

When shelf is open, prevent body scrolling by setting `overflow: hidden` on body element. Restore on close.

### Slide Animation

Implement slide-in animation:
- From right: `translateX(100%)` to `translateX(0)`
- From left: `translateX(-100%)` to `translateX(0)`
- Duration: 300ms
- Easing: ease-out

### Backdrop

Backdrop should:
- Cover entire viewport
- Be semi-transparent (rgba(0, 0, 0, 0.5))
- Optionally close shelf on click (based on `closeOnBackdropClick`)

### Responsive Considerations

- On mobile, shelf may take full width
- Adjust width based on viewport size
- Consider bottom sheet pattern on mobile

## Differences from Modals

- **Position**: Side panel vs centered dialog
- **Size**: Fixed width vs flexible width
- **Content visibility**: Underlying content partially visible vs completely blocked
- **Use case**: Supplementary content vs critical actions
- **Animation**: Slide-in vs fade/scale

## Related Components

- **Modals**: For critical actions requiring full attention
- **Mobile Shelf**: Mobile-optimized bottom sheet version
- **Inputs, Forms**: Shelves often contain forms

## Figma Reference

- **Component Node ID**: `138-4826`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Shelves Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=138-4826&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Modals Component](./modals.md) — Modal component reference
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
