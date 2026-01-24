# Tooltips Component

## Overview

The Tooltip component is a contextual help element in the Vallejo Design System that displays additional information when users hover over or focus on an element. Tooltips appear on demand and provide brief, helpful context without cluttering the interface.

**Figma Reference:**
- **Node ID**: `720-2645`
- **Figma Link**: [Tooltips Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2645&m=dev)

## Description

Tooltips are lightweight, temporary UI elements that provide contextual information or clarification. They appear when users hover over or focus on a trigger element and disappear when the user moves away or blurs the element. Tooltips are non-interactive and should contain concise text only.

### Use Cases

- **Icon Clarification**: Explain what an icon or button does (e.g., "Save document")
- **Field Help**: Provide additional context for form fields (e.g., "Enter your email address")
- **Feature Explanation**: Brief explanations of features or options
- **Accessibility**: Provide text alternatives for icon-only buttons
- **Contextual Tips**: Helpful hints or tips related to the current action

## Variants

### Pointer Direction Variants

Tooltips can have a pointer (arrow) that indicates their relationship to the trigger element. The pointer direction determines where the tooltip appears relative to the trigger.

#### 1. No Pointer
- **Appearance**: Rounded rectangle without a pointer
- **Usage**: When tooltip position is ambiguous or not tied to a specific element
- **Visual**: Clean, simple appearance

#### 2. Top Pointer (Pointer Up)
- **Appearance**: Rounded rectangle with upward-pointing triangle at the bottom
- **Usage**: Tooltip appears below the trigger element
- **Visual**: Pointer indicates tooltip is associated with element above it

#### 3. Bottom Pointer (Pointer Down)
- **Appearance**: Rounded rectangle with downward-pointing triangle at the top
- **Usage**: Tooltip appears above the trigger element
- **Visual**: Pointer indicates tooltip is associated with element below it

#### 4. Left Pointer (Pointer Right)
- **Appearance**: Rounded rectangle with rightward-pointing triangle on the left side
- **Usage**: Tooltip appears to the right of the trigger element
- **Visual**: Pointer indicates tooltip is associated with element to its left

#### 5. Right Pointer (Pointer Left)
- **Appearance**: Rounded rectangle with leftward-pointing triangle on the right side
- **Usage**: Tooltip appears to the left of the trigger element
- **Visual**: Pointer indicates tooltip is associated with element to its right

### Content Variants

#### Single Line
- **Structure**: Single line of text
- **Usage**: Brief, concise messages
- **Layout**: Text centered or left-aligned

#### Multi-Line
- **Structure**: Multiple lines of text (wrapped)
- **Usage**: Longer explanations that require more space
- **Layout**: Text wraps naturally, left-aligned

## Props / TypeScript Interface

```typescript
interface TooltipProps {
  /**
   * Tooltip content/text
   */
  content: string;
  
  /**
   * Pointer direction
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'none';
  
  /**
   * Whether to show the pointer
   * @default true (unless position is 'none')
   */
  showPointer?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the tooltip
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}

interface TooltipTriggerProps {
  /**
   * Tooltip content
   */
  tooltip: string;
  
  /**
   * Tooltip position
   * @default 'top'
   */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right' | 'none';
  
  /**
   * Child element that triggers the tooltip
   */
  children: React.ReactNode;
  
  /**
   * Whether tooltip is disabled
   * @default false
   */
  disabled?: boolean;
}
```

## Code Examples

### Basic Tooltip (React/TypeScript)

```typescript
import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'none';
  showPointer?: boolean;
  className?: string;
  'aria-label'?: string;
  triggerRef: React.RefObject<HTMLElement>;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  showPointer = position !== 'none',
  className = '',
  'aria-label': ariaLabel,
  triggerRef,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipStyles, setTooltipStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + 8;
          break;
        case 'none':
          top = triggerRect.top + triggerRect.height + 8;
          left = triggerRect.left;
          break;
      }

      // Keep tooltip within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (left < 8) left = 8;
      if (left + tooltipRect.width > viewportWidth - 8) {
        left = viewportWidth - tooltipRect.width - 8;
      }
      if (top < 8) top = 8;
      if (top + tooltipRect.height > viewportHeight - 8) {
        top = viewportHeight - tooltipRect.height - 8;
      }

      setTooltipStyles({ top: `${top}px`, left: `${left}px` });
    }
  }, [position, triggerRef]);

  const getPointerStyles = () => {
    if (!showPointer || position === 'none') return null;

    const pointerSize = 6;
    const pointerOffset = 12;

    switch (position) {
      case 'top':
        return {
          bottom: `-${pointerSize}px`,
          left: `${pointerOffset}px`,
          borderTop: `${pointerSize}px solid var(--color-light-neutral-500, #2F333C)`,
          borderLeft: `${pointerSize}px solid transparent`,
          borderRight: `${pointerSize}px solid transparent`,
        };
      case 'bottom':
        return {
          top: `-${pointerSize}px`,
          left: `${pointerOffset}px`,
          borderBottom: `${pointerSize}px solid var(--color-light-neutral-500, #2F333C)`,
          borderLeft: `${pointerSize}px solid transparent`,
          borderRight: `${pointerSize}px solid transparent`,
        };
      case 'left':
        return {
          right: `-${pointerSize}px`,
          top: `${pointerOffset}px`,
          borderLeft: `${pointerSize}px solid var(--color-light-neutral-500, #2F333C)`,
          borderTop: `${pointerSize}px solid transparent`,
          borderBottom: `${pointerSize}px solid transparent`,
        };
      case 'right':
        return {
          left: `-${pointerSize}px`,
          top: `${pointerOffset}px`,
          borderRight: `${pointerSize}px solid var(--color-light-neutral-500, #2F333C)`,
          borderTop: `${pointerSize}px solid transparent`,
          borderBottom: `${pointerSize}px solid transparent`,
        };
    }
  };

  const pointerStyles = getPointerStyles();

  return (
    <div
      ref={tooltipRef}
      role="tooltip"
      aria-label={ariaLabel ?? content}
      className={className}
      style={{
        position: 'fixed',
        zIndex: 1000,
        fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
        fontSize: 'var(--typography-font-size-200, 12px)',
        fontWeight: 'var(--typography-weight-medium, 500)',
        lineHeight: 'var(--typography-line-height-100, 17px)',
        padding: 'var(--spacing-8, 8px) var(--spacing-12, 12px)',
        borderRadius: 'var(--border-radius-200, 8px)',
        background: 'var(--color-light-neutral-000, #FFFFFF)',
        color: 'var(--color-light-neutral-500, #2F333C)',
        boxShadow: 'var(--shadow-light, 0px 3px 30px 0px rgba(230, 230, 230, 0.7))',
        maxWidth: '200px',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        ...tooltipStyles,
      }}
    >
      {content}
      {pointerStyles && (
        <div
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            ...pointerStyles,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Tooltip Trigger Wrapper Component
export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  tooltip,
  tooltipPosition = 'top',
  children,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!disabled) setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    if (!disabled) setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      {isVisible && (
        <Tooltip
          content={tooltip}
          position={tooltipPosition}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
};
```

### Usage Examples

#### Basic Tooltip
```typescript
<TooltipTrigger tooltip="Save your changes">
  <button>Save</button>
</TooltipTrigger>
```

#### Tooltip with Icon Button
```typescript
<TooltipTrigger tooltip="Delete item" tooltipPosition="top">
  <button aria-label="Delete">
    <svg>...</svg>
  </button>
</TooltipTrigger>
```

#### Tooltip on Form Field
```typescript
<TooltipTrigger tooltip="Enter your email address" tooltipPosition="right">
  <input type="email" placeholder="Email" />
</TooltipTrigger>
```

#### Tooltip with Different Positions
```typescript
<TooltipTrigger tooltip="This appears above" tooltipPosition="bottom">
  <span>Hover me</span>
</TooltipTrigger>

<TooltipTrigger tooltip="This appears to the left" tooltipPosition="right">
  <span>Hover me</span>
</TooltipTrigger>

<TooltipTrigger tooltip="This appears to the right" tooltipPosition="left">
  <span>Hover me</span>
</TooltipTrigger>
```

#### Tooltip without Pointer
```typescript
<TooltipTrigger tooltip="No pointer tooltip" tooltipPosition="none">
  <span>Hover me</span>
</TooltipTrigger>
```

## Design Tokens Used

### Colors

- **Background**: `--color-light-mode-neutral-000` (#FFFFFF) - White background
- **Text**: `--color-light-mode-neutral-500` (#2F333C) - Dark gray text
- **Pointer**: `--color-light-mode-neutral-500` (#2F333C) - Matches text color

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-200` (12px) - Tooltip text size
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-100` (17px) - Tooltip line height

### Spacing

- **Padding Vertical**: `--spacing-8` (8px)
- **Padding Horizontal**: `--spacing-12` (12px)
- **Gap from trigger**: 8px (between tooltip and trigger element)
- **Pointer size**: 6px (triangle size)
- **Pointer offset**: 12px from edge

### Border Radius

- **Tooltip container**: `--border-radius-200` (8px)

### Shadows

- **Tooltip shadow**: `--shadow-light` (0px 3px 30px 0px rgba(230, 230, 230, 0.7)) - Subtle elevation

### Dimensions

- **Max width**: 200px (tooltips should be concise)
- **Min width**: Auto (based on content)

## Accessibility

### ARIA Attributes

- **`role="tooltip"`**: Identifies the element as a tooltip
- **`aria-label`**: Provide descriptive label for the tooltip content
- **`aria-describedby`**: Link trigger element to tooltip using ID (optional enhancement)

### Keyboard Interaction

- **Focus**: Tooltip appears when trigger element receives focus
- **Blur**: Tooltip disappears when trigger element loses focus
- **Escape**: Consider hiding tooltip on Escape key (optional enhancement)

### Screen Reader Considerations

- Tooltips are announced when trigger element receives focus
- Content should be concise and clear
- For icon-only buttons, tooltip text should match or supplement `aria-label`

### Best Practices

1. **Concise content**: Keep tooltip text brief (ideally under 50 characters)
2. **Appropriate timing**: Show tooltip after brief delay (200-300ms) to avoid accidental triggers
3. **Hide on interaction**: Hide tooltip when user clicks or interacts with trigger
4. **Viewport awareness**: Ensure tooltip stays within viewport bounds
5. **Not for critical info**: Don't put critical information in tooltips (use alerts or modals)

### Focus Management

- Tooltips should appear on both hover and focus
- For keyboard users, tooltip should appear when trigger receives focus
- Tooltip should disappear when focus moves away

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, border radius, and shadows. Avoid hardcoded values.

### Positioning

Tooltips are positioned `fixed` relative to the viewport. Calculate position based on trigger element's bounding box and pointer direction.

### Viewport Constraints

Ensure tooltips stay within viewport bounds:
- Adjust horizontal position if tooltip would overflow
- Adjust vertical position if tooltip would overflow
- Consider flipping pointer direction if needed

### Pointer Implementation

Pointers are created using CSS borders to form triangles:
- Use transparent borders on two sides
- Use solid border on the side facing the trigger
- Position pointer absolutely within tooltip container

### Hover/Focus Behavior

- Show tooltip on `mouseenter` or `focus`
- Hide tooltip on `mouseleave` or `blur`
- Consider adding a small delay (200-300ms) before showing to avoid accidental triggers

### Performance

- Use `position: fixed` for tooltips to avoid layout shifts
- Consider using CSS transforms for positioning
- Debounce hover events if needed for performance

### Animation (Optional)

Consider adding:
- Fade-in animation when tooltip appears
- Fade-out animation when tooltip disappears
- Keep animations subtle (150-200ms duration)

## Related Components

- **Alerts**: For important messages that require attention
- **Toasts**: For temporary notifications
- **Popovers**: For interactive content (tooltips are text-only)

## Figma Reference

- **Component Node ID**: `720-2645`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Tooltips Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2645&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
