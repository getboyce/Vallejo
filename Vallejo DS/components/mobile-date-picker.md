# Mobile Date Picker Component

## Overview

The Mobile Date Picker component is a mobile-optimized form control in the Vallejo Design System for selecting dates on mobile devices. It provides a touch-friendly interface optimized for smaller screens and mobile interaction patterns.

**Figma Reference:**
- **Node ID**: `776-2531`
- **Figma Link**: [Mobile Date Picker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=776-2531&m=dev)

## Description

Mobile date pickers are designed specifically for mobile devices, providing a touch-optimized interface for date selection. They typically appear as bottom sheets or modals, with larger touch targets and simplified interactions compared to desktop date pickers.

### Use Cases

- **Mobile Forms**: Date selection in mobile forms
- **Mobile Apps**: Native mobile app date selection
- **Touch Devices**: Optimized for touch interaction on tablets and phones
- **Bottom Sheets**: Date picker in mobile bottom sheet patterns
- **Native Feel**: Provides native mobile date picker experience

## Variants

### Display Variants

#### Bottom Sheet
- **Appearance**: Slides up from bottom of screen
- **Usage**: Standard mobile pattern for date selection
- **Visual**: Modal overlay with date picker content
- **Interaction**: Swipe down to dismiss

#### Modal
- **Appearance**: Centered modal dialog
- **Usage**: Alternative mobile pattern
- **Visual**: Modal overlay with date picker content
- **Interaction**: Tap outside or close button to dismiss

### Selection Type Variants

#### Single Date
- **Appearance**: Calendar with single date selection
- **Usage**: When only one date is needed
- **Output**: Single date value

#### Date Range
- **Appearance**: Calendar with start and end date selection
- **Usage**: When a range of dates is needed
- **Output**: Start date and end date values

### Input Variants

#### Native Picker
- **Appearance**: Uses native mobile date picker (iOS/Android)
- **Usage**: Leverages platform-native date picker
- **Visual**: Platform-specific styling
- **Advantage**: Familiar to users, accessible

#### Custom Picker
- **Appearance**: Custom-built calendar interface
- **Usage**: Consistent cross-platform experience
- **Visual**: Matches design system styling
- **Advantage**: Full design control

## Props / TypeScript Interface

```typescript
interface DateRange {
  start: Date;
  end: Date;
}

interface MobileDatePickerProps {
  /**
   * Label shown above the input
   */
  label?: string;
  
  /**
   * Placeholder when no date selected
   * @default 'Select date'
   */
  placeholder?: string;
  
  /**
   * Selected date (for single date mode)
   */
  value?: Date;
  
  /**
   * Selected date range (for range mode)
   */
  range?: DateRange;
  
  /**
   * Selection mode
   * @default 'single'
   */
  mode?: 'single' | 'range';
  
  /**
   * Whether the picker is open
   * @default false
   */
  open?: boolean;
  
  /**
   * Callback when picker open state changes
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Callback when date is selected (single mode)
   */
  onChange?: (date: Date) => void;
  
  /**
   * Callback when date range is selected (range mode)
   */
  onRangeChange?: (range: DateRange) => void;
  
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  
  /**
   * Whether the picker is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Display variant
   * @default 'bottom-sheet'
   */
  variant?: 'bottom-sheet' | 'modal';
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the date picker
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Mobile Date Picker (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface DateRange {
  start: Date;
  end: Date;
}

interface MobileDatePickerProps {
  label?: string;
  placeholder?: string;
  value?: Date;
  range?: DateRange;
  mode?: 'single' | 'range';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onChange?: (date: Date) => void;
  onRangeChange?: (range: DateRange) => void;
  disabled?: boolean;
  variant?: 'bottom-sheet' | 'modal';
  className?: string;
  'aria-label'?: string;
}

export const MobileDatePicker: React.FC<MobileDatePickerProps> = ({
  label,
  placeholder = 'Select date',
  value,
  range,
  mode = 'single',
  open: controlledOpen,
  onOpenChange,
  onChange,
  onRangeChange,
  disabled = false,
  variant = 'bottom-sheet',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const displayValue = mode === 'range' && range
    ? `${formatDate(range.start)} - ${formatDate(range.end)}`
    : value
    ? formatDate(value)
    : placeholder;

  return (
    <>
      <div className={className}>
        {label && (
          <label
            style={{
              fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
              fontSize: 'var(--typography-font-size-200, 12px)',
              fontWeight: 'var(--typography-weight-semibold, 600)',
              lineHeight: 'var(--typography-line-height-200, 18px)',
              color: 'var(--color-light-neutral-400, #46525D)',
              display: 'block',
              marginBottom: 'var(--spacing-4, 4px)',
            }}
          >
            {label}
          </label>
        )}
        <button
          type="button"
          role="combobox"
          aria-label={ariaLabel ?? label ?? 'Date picker'}
          aria-expanded={isOpen}
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(true)}
          style={{
            width: '100%',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            fontSize: 'var(--typography-font-size-400, 16px)',
            fontWeight: 'var(--typography-weight-medium, 500)',
            lineHeight: 'var(--typography-line-height-400, 22px)',
            padding: 'var(--spacing-16, 16px)',
            border: '1px solid var(--color-light-neutral-300, #C5CCD3)',
            borderRadius: 'var(--border-radius-200, 8px)',
            background: disabled ? 'var(--color-light-neutral-100, #F4F5F6)' : 'var(--color-light-neutral-000, #FFFFFF)',
            color: (value || range) ? 'var(--color-light-neutral-500, #2F333C)' : 'var(--color-light-neutral-400, #46525D)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            textAlign: 'left',
          }}
        >
          {displayValue}
        </button>
      </div>

      {isOpen && !disabled && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          />

          {/* Bottom Sheet or Modal */}
          <div
            style={{
              position: 'fixed',
              [variant === 'bottom-sheet' ? 'bottom' : 'top']: 0,
              left: 0,
              right: 0,
              [variant === 'bottom-sheet' ? 'maxHeight' : 'height']: variant === 'bottom-sheet' ? '80vh' : '100vh',
              background: 'var(--color-light-neutral-000, #FFFFFF)',
              borderTopLeftRadius: variant === 'bottom-sheet' ? 'var(--spacing-24, 24px)' : 0,
              borderTopRightRadius: variant === 'bottom-sheet' ? 'var(--spacing-24, 24px)' : 0,
              boxShadow: 'var(--shadow-dark, -4px 6px 30px 4px rgba(108, 112, 115, 0.2))',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--spacing-16, 16px) var(--spacing-20, 20px)',
                borderBottom: '1px solid var(--color-light-neutral-200, #E2E5E9)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-500, 20px)',
                  fontWeight: 'var(--typography-weight-semibold, 600)',
                  lineHeight: 'var(--typography-line-height-500, 28px)',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                  margin: 0,
                }}
              >
                Select Date
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 'var(--spacing-8, 8px)',
                  cursor: 'pointer',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Date Picker Content */}
            <div
              style={{
                flex: 1,
                overflow: 'auto',
                padding: 'var(--spacing-20, 20px)',
              }}
            >
              {/* Native date input or custom calendar */}
              {mode === 'single' ? (
                <input
                  type="date"
                  value={value ? value.toISOString().split('T')[0] : ''}
                  onChange={(e) => {
                    if (onChange && e.target.value) {
                      onChange(new Date(e.target.value));
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-16, 16px)',
                    border: '1px solid var(--color-light-neutral-300, #C5CCD3)',
                    borderRadius: 'var(--border-radius-200, 8px)',
                    fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                    fontSize: 'var(--typography-font-size-400, 16px)',
                  }}
                />
              ) : (
                <div>
                  <p style={{ color: 'var(--color-light-neutral-400, #46525D)' }}>
                    Date range picker implementation (custom calendar or native inputs)
                  </p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-8, 8px)',
                padding: 'var(--spacing-16, 16px) var(--spacing-20, 20px)',
                borderTop: '1px solid var(--color-light-neutral-200, #E2E5E9)',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  if (mode === 'single' && onChange) {
                    onChange(new Date());
                  } else if (mode === 'range' && onRangeChange) {
                    const today = new Date();
                    onRangeChange({ start: today, end: today });
                  }
                }}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-12, 12px)',
                  border: '1px solid var(--color-brand-copart-blue, #2662D9)',
                  background: 'transparent',
                  color: 'var(--color-brand-copart-blue, #2662D9)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  cursor: 'pointer',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                  fontWeight: 'var(--typography-weight-medium, 500)',
                }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-12, 12px)',
                  border: 'none',
                  background: 'var(--color-brand-copart-blue, #2662D9)',
                  color: 'var(--color-brand-copart-white, #FFFFFF)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  cursor: 'pointer',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                  fontWeight: 'var(--typography-weight-medium, 500)',
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
```

### Usage Examples

#### Basic Mobile Date Picker
```typescript
const [date, setDate] = useState<Date>(new Date());

<MobileDatePicker
  label="Select date"
  value={date}
  onChange={setDate}
/>
```

#### Date Range Picker
```typescript
const [range, setRange] = useState<DateRange>({
  start: new Date(),
  end: new Date(),
});

<MobileDatePicker
  label="Date range"
  mode="range"
  range={range}
  onRangeChange={setRange}
/>
```

#### Modal Variant
```typescript
<MobileDatePicker
  label="Select date"
  value={date}
  onChange={setDate}
  variant="modal"
/>
```

## Design Tokens Used

### Colors

Same as Date Picker component - see [Date Picker Component](./date-picker.md#design-tokens-used) for complete color token reference.

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Input Font Size**: `--typography-font-size-400` (16px)
- **Input Font Weight**: `--typography-weight-medium` (500)
- **Input Line Height**: `--typography-line-height-400` (22px)
- **Header Font Size**: `--typography-font-size-500` (20px)
- **Header Font Weight**: `--typography-weight-semibold` (600)
- **Header Line Height**: `--typography-line-height-500` (28px)

### Spacing

- **Input Padding**: `--spacing-16` (16px)
- **Header Padding**: `--spacing-16` (16px) vertical, `--spacing-20` (20px) horizontal
- **Content Padding**: `--spacing-20` (20px)
- **Footer Padding**: `--spacing-16` (16px) vertical, `--spacing-20` (20px) horizontal
- **Button Padding**: `--spacing-12` (12px)
- **Touch Target**: Minimum 44px × 44px for mobile

### Border Radius

- **Input**: `--border-radius-200` (8px)
- **Bottom Sheet Top Corners**: `--spacing-24` (24px) or `--border-radius-extra-large` (24px)
- **Buttons**: `--border-radius-200` (8px)

### Shadows

- **Bottom Sheet Shadow**: `--shadow-dark` (-4px 6px 30px 4px rgba(108, 112, 115, 0.2))
- **Backdrop**: rgba(0, 0, 0, 0.5)

## Accessibility

### ARIA Attributes

- **`role="combobox"`**: Applied to the trigger button
- **`aria-expanded`**: Indicates whether the picker is open
- **`aria-label`**: Provide descriptive label for the date picker

### Touch Targets

- **Minimum size**: 44px × 44px for all interactive elements
- **Spacing**: Adequate spacing between touch targets
- **Visual feedback**: Clear visual feedback on touch

### Keyboard Navigation

- **Tab**: Move focus to the date picker trigger
- **Enter / Space**: Open the date picker
- **Escape**: Close the date picker
- **Native picker**: Uses platform keyboard when available

### Screen Reader Considerations

- Date picker is announced as a combobox
- Selected dates should be announced clearly
- Native date inputs provide built-in accessibility

### Best Practices

1. **Touch targets**: Ensure all interactive elements meet minimum touch target size (44px × 44px)
2. **Native pickers**: Consider using native date inputs for better accessibility and UX
3. **Swipe gestures**: Support swipe down to dismiss for bottom sheets
4. **Backdrop**: Provide backdrop overlay to indicate modal state
5. **Responsive**: Optimize for various mobile screen sizes

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, border radius, and shadows. Avoid hardcoded values.

### Native vs Custom

Consider using native date inputs (`<input type="date">`) for:
- Better accessibility
- Platform-native experience
- Reduced implementation complexity

Use custom picker for:
- Consistent cross-platform design
- Advanced features (presets, custom formatting)
- Full design control

### Bottom Sheet Behavior

Bottom sheet should:
- Slide up from bottom on open
- Slide down on close
- Support swipe down gesture to dismiss
- Have rounded top corners
- Max height of ~80vh

### Modal Behavior

Modal variant should:
- Center on screen
- Full screen on very small devices
- Support tap outside to dismiss
- Have close button

## Differences from Desktop Date Picker

- **Display**: Bottom sheet or modal vs dropdown
- **Touch targets**: Larger for mobile interaction
- **Native support**: Can leverage native date pickers
- **Gestures**: Supports swipe to dismiss
- **Layout**: Optimized for vertical scrolling
- **Size**: Full-width inputs and buttons

## Related Components

- **Date Picker**: Desktop version of date picker
- **Inputs**: Mobile date picker uses input field styling
- **Buttons**: Action buttons use button component styling
- **Modals / Shelves**: Similar overlay patterns

## Figma Reference

- **Component Node ID**: `776-2531`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Mobile Date Picker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=776-2531&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Date Picker Component](./date-picker.md) — Desktop date picker reference
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
