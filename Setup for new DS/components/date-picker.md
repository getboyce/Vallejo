# Date Picker Component

## Overview

The Date Picker component is a form control in the Vallejo Design System that allows users to select a single date or date range. It provides both a calendar interface and preset options for common date ranges, with support for manual date entry.

**Figma Reference:**
- **Node ID**: `720-2658`
- **Figma Link**: [Date Picker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2658&m=dev)

## Description

Date pickers are used when users need to select a specific date or date range. The component combines a calendar view with preset options and manual date input fields, providing multiple ways to select dates. It's suitable for filters, reports, analytics dashboards, and any scenario requiring date selection.

### Use Cases

- **Date Range Filters**: Filter data by date range (e.g., "Last 7 days", "Last 30 days")
- **Report Generation**: Select date ranges for reports
- **Analytics Dashboards**: Filter analytics data by date
- **Form Inputs**: Date selection in forms (e.g., "Start date", "End date")
- **Booking Systems**: Select check-in/check-out dates
- **Event Selection**: Choose event dates or date ranges

## Variants

### Selection Type Variants

#### Single Date
- **Appearance**: Calendar with single date selection
- **Usage**: When only one date is needed
- **Output**: Single date value

#### Date Range
- **Appearance**: Calendar with start and end date selection
- **Usage**: When a range of dates is needed
- **Output**: Start date and end date values
- **Visual**: Selected range is highlighted, start and end dates are distinct

### Preset Options

The date picker includes preset options for common date ranges:

- **Today**: Current date (single) or today only (range)
- **Yesterday**: Previous day (single) or yesterday only (range)
- **Last 7 days**: Past 7 days including today
- **Last 30 days**: Past 30 days including today
- **Last 90 days**: Past 90 days including today
- **Custom**: Manual date selection (default when custom range is selected)

**Preset Panel Layout:**
- Fixed width: 150px
- Checkmark icon appears on the left side of each option
- Selected option has light blue background (`--color-light-mode-blue-200`) with blue checkmark
- Border on the right side separating from calendar panel

### Input Field States

#### Default / Closed
- **Appearance**: Input field showing selected date(s) or placeholder
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Text**: `--color-light-mode-neutral-500` (#2F333C) when filled
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Chevron**: Down arrow indicating closed state

#### Focused / Open
- **Appearance**: Blue border, calendar panel visible
- **Border**: `--color-brand-copart-blue` (#2662D9)
- **Chevron**: Up arrow indicating open state
- **Panel**: Calendar and preset options displayed below input

#### Filled
- **Appearance**: Input shows selected date(s) in format "MM/DD/YYYY - MM/DD/YYYY" (range) or "MM/DD/YYYY" (single)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Disabled
- **Appearance**: Light gray background, muted border and text
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Border**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Text / Placeholder**: `--color-light-mode-neutral-400` (#46525D)
- **Accessibility**: `disabled` and `aria-disabled="true"`

### Calendar States

#### Unselected Date
- **Appearance**: White background, dark gray text
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Hover Date
- **Appearance**: Light blue background
- **Background**: `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-blue-200` (#EEF2FC)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Selected Date (Start/End)
- **Appearance**: Circular blue background with white text
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-brand-copart-white` (#FFFFFF)
- **Shape**: Perfect circle (border-radius: 50%)
- **Hover**: `--color-light-mode-blue-500` (#063598)
- **Visual**: Clearly indicates selected date with circular highlight

#### Date in Range (Between Start and End)
- **Appearance**: Light blue background with continuous coverage (no gaps)
- **Background**: `--color-light-mode-blue-200` (#EEF2FC)
- **Text**: `--color-brand-copart-blue` (#2662D9) - blue 400
- **Layout**: Background spans continuously across cells with no gaps between dates
- **Visual**: Indicates dates within the selected range with seamless background

#### Disabled Date
- **Appearance**: Light gray background, muted text
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-light-mode-neutral-400` (#46525D)
- **Not selectable**

#### Today (Current Date)
- **Appearance**: May have a border or distinct styling to indicate current date
- **Border**: `--color-brand-copart-blue` (#2662D9) or `--color-light-mode-blue-400` (#2662D9)

### Preset Option States

#### Unselected
- **Appearance**: White background, dark gray text
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Hover
- **Appearance**: Light blue background
- **Background**: `--color-light-mode-blue-100` (#F6F9FD)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Selected
- **Appearance**: Light blue background with blue checkmark on the left
- **Background**: `--color-light-mode-blue-200` (#EEF2FC)
- **Checkmark**: `--color-brand-copart-blue` (#2662D9) - positioned on the left side
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

## Props / TypeScript Interface

```typescript
interface DateRange {
  start: Date;
  end: Date;
}

interface DatePickerProps {
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
   * @default 'range'
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

### Basic Date Range Picker (React/TypeScript)

```typescript
import React, { useState } from 'react';

interface DateRange {
  start: Date;
  end: Date;
}

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  range?: DateRange;
  mode?: 'single' | 'range';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onRangeChange?: (range: DateRange) => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder = 'Select date',
  range,
  mode = 'range',
  open: controlledOpen,
  onOpenChange,
  onRangeChange,
  disabled = false,
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

  const displayValue = range
    ? `${formatDate(range.start)} - ${formatDate(range.end)}`
    : placeholder;

  const presetOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last 7 days', value: 'last7' },
    { label: 'Last 30 days', value: 'last30' },
    { label: 'Last 90 days', value: 'last90' },
    { label: 'Custom', value: 'custom' },
  ];

  const handlePresetClick = (preset: string) => {
    const today = new Date();
    let newRange: DateRange | undefined;

    switch (preset) {
      case 'today':
        newRange = { start: today, end: today };
        break;
      case 'yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        newRange = { start: yesterday, end: yesterday };
        break;
      case 'last7':
        const last7 = new Date(today);
        last7.setDate(last7.getDate() - 6);
        newRange = { start: last7, end: today };
        break;
      case 'last30':
        const last30 = new Date(today);
        last30.setDate(last30.getDate() - 29);
        newRange = { start: last30, end: today };
        break;
      case 'last90':
        const last90 = new Date(today);
        last90.setDate(last90.getDate() - 89);
        newRange = { start: last90, end: today };
        break;
      case 'custom':
        // Keep current range or allow manual selection
        break;
    }

    if (newRange && onRangeChange) {
      onRangeChange(newRange);
    }
  };

  return (
    <div className={className} style={{ position: 'relative' }}>
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
      <div
        role="combobox"
        aria-label={ariaLabel ?? label ?? 'Date picker'}
        aria-expanded={isOpen}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
          fontSize: 'var(--typography-font-size-400, 16px)',
          fontWeight: 'var(--typography-weight-medium, 500)',
          lineHeight: 'var(--typography-line-height-400, 22px)',
          padding: 'var(--spacing-16, 16px)',
          border: `1px solid ${isOpen ? 'var(--color-brand-copart-blue, #2662D9)' : 'var(--color-light-neutral-300, #C5CCD3)'}`,
          borderRadius: 'var(--border-radius-200, 8px)',
          background: disabled ? 'var(--color-light-neutral-100, #F4F5F6)' : 'var(--color-light-neutral-000, #FFFFFF)',
          color: range ? 'var(--color-light-neutral-500, #2F333C)' : 'var(--color-light-neutral-400, #46525D)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{displayValue}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {isOpen && !disabled && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: 'var(--spacing-8, 8px)',
            background: 'var(--color-light-neutral-000, #FFFFFF)',
            borderRadius: 'var(--border-radius-200, 8px)',
            boxShadow: 'var(--shadow-medium, -2px 3px 30px 0px rgba(70, 82, 93, 0.12))',
            padding: 'var(--spacing-24, 24px)',
            zIndex: 1000,
            minWidth: '600px',
            display: 'flex',
            gap: 0,
          }}
        >
          {/* Preset Options */}
          <div style={{ 
            width: '150px',
            flexShrink: 0,
            borderRight: '1px solid var(--color-light-neutral-200, #E2E5E9)',
            padding: 0,
            marginRight: 'var(--spacing-24, 24px)',
          }}>
            {presetOptions.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => handlePresetClick(preset.value)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: 'var(--spacing-8, 8px) var(--spacing-12, 12px)',
                  border: 'none',
                  background: preset.value === 'custom' ? 'var(--color-light-blue-200, #EEF2FC)' : 'transparent',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                  cursor: 'pointer',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-8, 8px)',
                  marginBottom: 'var(--spacing-4, 4px)',
                }}
                onMouseEnter={(e) => {
                  if (preset.value !== 'custom') {
                    e.currentTarget.style.background = 'var(--color-light-blue-100, #F6F9FD)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (preset.value !== 'custom') {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {preset.value === 'custom' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-brand-copart-blue, #2662D9)' }}>
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span>{preset.label}</span>
              </button>
            ))}
          </div>

          {/* Calendar and Date Inputs */}
          <div style={{ flex: 1 }}>
            {/* Date Input Fields */}
            <div style={{ 
              display: 'flex', 
              gap: 'var(--spacing-8, 8px)', 
              marginBottom: 'var(--spacing-16, 16px)',
              paddingBottom: 'var(--spacing-16, 16px)',
              borderBottom: '1px solid var(--color-light-neutral-200, #E2E5E9)',
            }}>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={range ? formatDate(range.start) : ''}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-8, 8px) var(--spacing-12, 12px)',
                  border: '1px solid var(--color-light-neutral-300, #C5CCD3)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                }}
              />
              <span style={{ alignSelf: 'center' }}>-</span>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={range ? formatDate(range.end) : ''}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-8, 8px) var(--spacing-12, 12px)',
                  border: '1px solid var(--color-light-neutral-300, #C5CCD3)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                }}
              />
            </div>

            {/* Calendar View - Infinite Scroll */}
            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              overflowX: 'hidden',
              marginBottom: 'var(--spacing-16, 16px)',
            }}>
              {/* Calendar implementation with infinite scroll up/down
                  - Generate multiple months (e.g., 12 before and 12 after current)
                  - No left/right pagination buttons
                  - Vertical scrolling through months
                  - Date cells are square (aspect-ratio: 1)
                  - In-range dates have continuous background (no gaps)
                  - Selected dates are circular with blue background and white text
              */}
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: 'var(--spacing-8, 8px)', 
              marginTop: 'var(--spacing-16, 16px)',
              paddingTop: 'var(--spacing-16, 16px)',
              borderTop: '1px solid var(--color-light-neutral-200, #E2E5E9)',
              justifyContent: 'flex-end' 
            }}>
              <button
                type="button"
                onClick={() => {
                  if (onRangeChange) onRangeChange({ start: new Date(), end: new Date() });
                }}
                style={{
                  padding: 'var(--spacing-8, 8px) var(--spacing-16, 16px)',
                  border: '1px solid var(--color-brand-copart-blue, #2662D9)',
                  background: 'transparent',
                  color: 'var(--color-brand-copart-blue, #2662D9)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  cursor: 'pointer',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  padding: 'var(--spacing-8, 8px) var(--spacing-16, 16px)',
                  border: 'none',
                  background: 'var(--color-brand-copart-blue, #2662D9)',
                  color: 'var(--color-brand-copart-white, #FFFFFF)',
                  borderRadius: 'var(--border-radius-200, 8px)',
                  cursor: 'pointer',
                  fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                  fontSize: 'var(--typography-font-size-400, 16px)',
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
```

### Usage Examples

#### Basic Date Range Picker
```typescript
const [range, setRange] = useState<DateRange>({
  start: new Date(),
  end: new Date(),
});

<DatePicker
  label="Date range"
  range={range}
  onRangeChange={setRange}
/>
```

#### Single Date Picker
```typescript
const [date, setDate] = useState<Date>(new Date());

<DatePicker
  label="Select date"
  mode="single"
  value={date}
  onChange={setDate}
/>
```

## Design Tokens Used

### Colors

#### Input Field
- **Border (Default)**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Border (Focused)**: `--color-brand-copart-blue` (#2662D9)
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Background (Disabled)**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Placeholder**: `--color-light-mode-neutral-400` (#46525D)

#### Calendar Dates
- **Selected Date**: `--color-brand-copart-blue` (#2662D9) background, `--color-brand-copart-white` (#FFFFFF) text
- **Date in Range**: `--color-light-mode-blue-200` (#EEF2FC) background
- **Hover Date**: `--color-light-mode-blue-100` (#F6F9FD) background
- **Unselected Date**: `--color-light-mode-neutral-000` (#FFFFFF) background, `--color-light-mode-neutral-500` (#2F333C) text
- **Today Border**: `--color-brand-copart-blue` (#2662D9)

#### Preset Options
- **Selected**: `--color-light-mode-blue-200` (#EEF2FC) or `--color-light-mode-blue-100` (#F6F9FD) background
- **Hover**: `--color-light-mode-blue-100` (#F6F9FD) background
- **Unselected**: Transparent background

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Input Font Size**: `--typography-font-size-400` (16px)
- **Input Font Weight**: `--typography-weight-medium` (500)
- **Input Line Height**: `--typography-line-height-400` (22px)
- **Label Font Size**: `--typography-font-size-200` (12px)
- **Label Font Weight**: `--typography-weight-semibold` (600)
- **Label Line Height**: `--typography-line-height-200` (18px)

### Spacing

- **Input Padding**: `--spacing-16` (16px)
- **Panel Padding**: `--spacing-24` (24px)
- **Gap between preset and calendar**: `--spacing-24` (24px)
- **Gap between date inputs**: `--spacing-8` (8px)
- **Button Padding**: `--spacing-8` (8px) vertical, `--spacing-16` (16px) horizontal

### Border Radius

- **Input**: `--border-radius-200` (8px)
- **Panel**: `--border-radius-200` (8px)
- **Buttons**: `--border-radius-200` (8px)
- **Preset Options**: `--border-radius-200` (8px)
- **Selected Dates**: `50%` (perfect circles for start/end dates)
- **Date Cells**: Square cells with `aspect-ratio: 1`, no border-radius for in-range dates

### Shadows

- **Panel Shadow**: `--shadow-medium` (-2px 3px 30px 0px rgba(70, 82, 93, 0.12))

## Accessibility

### ARIA Attributes

- **`role="combobox"`**: Applied to the input/trigger element
- **`aria-expanded`**: Indicates whether the calendar panel is open
- **`aria-label`**: Provide descriptive label for the date picker
- **`aria-live`**: Consider adding for dynamic calendar updates

### Keyboard Navigation

- **Tab**: Move focus to the date picker input
- **Enter / Space**: Open/close the calendar panel
- **Arrow keys**: Navigate dates in the calendar
- **Escape**: Close the calendar panel
- **Home / End**: Jump to first/last day of month

### Focus States

- **Visible focus indicator**: Use a visible focus ring on the input
- **Focus ring**: Align with design system focus styling (e.g., blue outline)

### Screen Reader Considerations

- Date picker is announced as a combobox
- Selected dates should be announced clearly
- Calendar navigation should be announced
- Preset options should be accessible via keyboard

### Best Practices

1. **Clear labels**: Use descriptive labels (e.g., "Start date", "End date")
2. **Date format**: Use consistent date format (MM/DD/YYYY)
3. **Preset options**: Provide common date ranges for quick selection
4. **Validation**: Validate date inputs and provide error messages
5. **Min/Max dates**: Set appropriate limits based on use case

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, border radius, and shadows. Avoid hardcoded values.

### Calendar Implementation

The calendar view requires:
- **Infinite scroll**: Vertical scrolling through months (no left/right pagination buttons)
- **Multiple months**: Generate 12 months before and 12 months after current date
- **Day-of-week headers**: SUN, MON, TUE, WED, THU, FRI, SAT
- **Date cells**: Square cells (aspect-ratio: 1) with no gaps between cells
- **Range selection logic**: 
  - First click sets start date and updates start input field
  - Second click sets end date and updates end input field
  - Selected dates are circular with blue background and white text
  - Dates in range have continuous light blue background (no gaps)
- **Today indicator**: Blue border on current date
- **Hover states**: Blue 500 for selected dates, light blue for others

Consider using a date library (e.g., date-fns, dayjs) for date calculations.

### Preset Options

Preset options should:
- Calculate dates relative to current date
- Update the selected range immediately when clicked
- Show visual feedback (checkmark) when selected

### Date Input Fields

Manual date input fields should:
- Accept MM/DD/YYYY format
- Validate input
- Update calendar selection when valid date is entered
- Show error state for invalid dates

### Panel Positioning

The calendar panel should:
- Position below the input field
- Stay within viewport bounds
- Close when clicking outside
- Close on Escape key
- Fixed width for preset panel: 150px (no padding)
- Minimum width for entire panel: 600px (can expand as needed)
- Borders: Right border on preset panel, border below date inputs, border above action buttons

## Related Components

- **Inputs**: Date picker uses input field styling
- **Buttons**: Clear and Apply buttons use button component styling
- **Mobile Date Picker**: Mobile-optimized version of date picker

## Figma Reference

- **Component Node ID**: `720-2658`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Date Picker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2658&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
