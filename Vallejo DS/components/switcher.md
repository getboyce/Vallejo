# Switcher Component

## Overview

The Switcher component is a segmented control in the Vallejo Design System used for selecting one option from a set of related choices. It displays multiple options as connected buttons, with one option active at a time.

**Figma Reference:**
- **Node ID**: `720-2687`
- **Figma Link**: [Switcher Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2687&m=dev)

## Description

Switchers are used when users need to choose one option from a small set of related choices (typically 2-5 options). The options are displayed as connected buttons, creating a unified control. The active option is visually distinct, and clicking any option immediately switches the selection.

### Use Cases

- **View Toggle**: Switch between different views (e.g., "List" / "Grid", "Day" / "Week" / "Month")
- **Filter Selection**: Choose a filter option (e.g., "All" / "Active" / "Completed")
- **Sort Options**: Select sort order (e.g., "Newest" / "Oldest" / "Popular")
- **Tab-like Navigation**: Navigate between related sections when space is limited
- **Settings Toggle**: Switch between settings options (e.g., "On" / "Off", "Light" / "Dark")

## Variants

### Size Variants

#### Default
- **Height**: ~40px (approximate, matches button default size)
- **Typography**: Button Medium (16px, Medium weight, 22px line height)
- **Padding**: Horizontal padding optimized for default size
- **Usage**: Standard switcher size for most use cases

#### Small
- **Height**: ~32px (approximate, matches button small size)
- **Typography**: Button Small (14px, Medium weight, 20px line height)
- **Padding**: Reduced horizontal padding
- **Usage**: Compact spaces, dense interfaces

### State Variants

#### Active (Selected)
- **Appearance**: White background (via sliding indicator) with blue text
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF) - provided by sliding indicator
- **Text**: `--color-brand-copart-blue` (#2662D9)
- **Visual**: Sliding indicator animates smoothly to the active button with shadow for elevation

#### Inactive (Unselected)
- **Appearance**: Transparent background showing gray container with dark gray text
- **Background**: Transparent (shows container background `--color-light-mode-neutral-100`)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Visual**: Subtle, secondary to active option

#### Hover (Inactive)
- **Appearance**: Slightly darker background or light gray tint
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6) or `--color-light-mode-blue-100` (#F6F9FD)
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Disabled
- **Appearance**: Muted colors, reduced contrast
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)
- **Interaction**: Not interactive, cursor: not-allowed
- **Accessibility**: Use `aria-disabled="true"` and avoid pointer events

### Layout Variants

#### Horizontal (Default)
- **Layout**: Options arranged left to right within a gray container
- **Container**: Gray background (`--color-light-mode-neutral-100`) with 4px padding and border (`--color-light-mode-neutral-200`)
- **Connection**: Buttons are seamlessly connected within the container
- **Indicator**: White sliding indicator with shadow animates between options
- **First button**: Rounded left corners
- **Last button**: Rounded right corners
- **Middle buttons**: Rounded corners (adjusted for container padding)

#### Vertical (Optional)
- **Layout**: Options arranged top to bottom
- **Connection**: Buttons share borders (no gap between them)
- **First button**: Rounded top corners only
- **Last button**: Rounded bottom corners only
- **Middle buttons**: No rounded corners (straight edges)

## Props / TypeScript Interface

```typescript
interface SwitcherOption {
  /**
   * Option value
   */
  value: string;
  
  /**
   * Option label
   */
  label: string;
  
  /**
   * Whether this option is disabled
   * @default false
   */
  disabled?: boolean;
}

interface SwitcherProps {
  /**
   * Array of options to display
   */
  options: SwitcherOption[];
  
  /**
   * Currently selected value
   */
  value: string;
  
  /**
   * Callback when selection changes
   */
  onChange: (value: string) => void;
  
  /**
   * Switcher size
   * @default 'default'
   */
  size?: 'small' | 'default';
  
  /**
   * Whether the switcher is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the switcher group
   */
  'aria-label'?: string;
  
  /**
   * Name attribute for form submission
   */
  name?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Switcher (React/TypeScript)

```typescript
import React from 'react';

interface SwitcherOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SwitcherProps {
  options: SwitcherOption[];
  value: string;
  onChange: (value: string) => void;
  size?: 'small' | 'default';
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  name?: string;
}

export const Switcher: React.FC<SwitcherProps> = ({
  options,
  value,
  onChange,
  size = 'default',
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  name,
}) => {
  const handleClick = (optionValue: string) => {
    if (!disabled && !options.find(opt => opt.value === optionValue)?.disabled) {
      onChange(optionValue);
    }
  };

  const fontSize = size === 'small' ? 'var(--typography-font-size-300, 14px)' : 'var(--typography-font-size-400, 16px)';
  const lineHeight = size === 'small' ? 'var(--typography-line-height-300, 20px)' : 'var(--typography-line-height-400, 22px)';
  const height = size === 'small' ? '32px' : '40px';
  const padding = size === 'small' ? '8px 12px' : '8px 16px';

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={className}
      style={{
        display: 'inline-flex',
        position: 'relative',
        borderRadius: 'var(--border-radius-200, 8px)',
        overflow: 'hidden',
        background: 'var(--color-light-neutral-100, #F4F5F6)',
        padding: '4px',
        border: '1px solid var(--color-light-neutral-200, #E2E5E9)',
      }}
    >
      {/* Sliding indicator */}
      <div
        className="switcher-indicator"
        style={{
          position: 'absolute',
          top: '4px',
          height: height,
          background: 'var(--color-light-neutral-000, #FFFFFF)',
          borderRadius: 'calc(var(--border-radius-200, 8px) - 4px)',
          boxShadow: 'var(--shadow-light, 0px 3px 30px 0px rgba(230, 230, 230, 0.7))',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1,
        }}
        ref={(indicator) => {
          // Position indicator on active button
          if (indicator) {
            const activeButton = indicator.parentElement?.querySelector(`[data-value="${value}"]`) as HTMLElement;
            if (activeButton) {
              const rect = activeButton.getBoundingClientRect();
              const parentRect = indicator.parentElement?.getBoundingClientRect();
              if (parentRect) {
                indicator.style.left = `${rect.left - parentRect.left}px`;
                indicator.style.width = `${rect.width}px`;
              }
            }
          }
        }}
      />
      {options.map((option, index) => {
        const isActive = value === option.value;
        const isOptionDisabled = disabled || option.disabled;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <button
            key={option.value}
            data-value={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-disabled={isOptionDisabled}
            disabled={isOptionDisabled}
            onClick={() => handleClick(option.value)}
            name={name}
            value={option.value}
            style={{
              position: 'relative',
              zIndex: 2,
              fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
              fontSize,
              fontWeight: 'var(--typography-weight-medium, 500)',
              lineHeight,
              padding,
              height,
              border: 'none',
              background: 'transparent',
              color: isActive
                ? 'var(--color-brand-copart-blue, #2662D9)'
                : isOptionDisabled
                ? 'var(--color-light-neutral-400, #46525D)'
                : 'var(--color-light-neutral-500, #2F333C)',
              cursor: isOptionDisabled ? 'not-allowed' : 'pointer',
              transition: 'color 0.2s ease',
              borderRadius: 'calc(var(--border-radius-200, 8px) - 4px)',
            }}
            onMouseEnter={(e) => {
              if (!isOptionDisabled && !isActive) {
                e.currentTarget.style.background = 'var(--color-light-blue-100, #F6F9FD)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
```

### Usage Examples

#### Basic Switcher
```typescript
<Switcher
  options={[
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
  ]}
  value="list"
  onChange={(value) => console.log(value)}
/>
```

#### Three Options
```typescript
<Switcher
  options={[
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
  ]}
  value="week"
  onChange={(value) => setView(value)}
/>
```

#### Small Size
```typescript
<Switcher
  options={[
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]}
  value="all"
  onChange={(value) => setFilter(value)}
  size="small"
/>
```

#### With Disabled Option
```typescript
<Switcher
  options={[
    { value: 'on', label: 'On' },
    { value: 'off', label: 'Off', disabled: true },
  ]}
  value="on"
  onChange={(value) => setSetting(value)}
/>
```

## Design Tokens Used

### Colors

#### Active State
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-brand-copart-blue` (#2662D9) or `--color-light-mode-blue-400` (#2662D9)

#### Inactive State
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF) or transparent
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Hover (Inactive)
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6) or `--color-light-mode-blue-100` (#F6F9FD)

#### Disabled
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)

#### Border
- **Between buttons**: `--color-light-mode-neutral-200` (#E2E5E9)

### Typography

#### Default Size
- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)

#### Small Size
- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-300` (14px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-300` (20px)

### Spacing

- **Padding Horizontal (Default)**: `--spacing-16` (16px)
- **Padding Horizontal (Small)**: `--spacing-12` (12px)
- **Padding Vertical**: `--spacing-8` (8px)
- **Height (Default)**: ~40px
- **Height (Small)**: ~32px

### Border Radius

- **Container**: `--border-radius-200` (8px)
- **First button**: Left corners rounded
- **Last button**: Right corners rounded
- **Middle buttons**: No rounded corners

### Shadows

- **Indicator shadow**: `--shadow-light` (applied to the sliding indicator for elevation)
- **Container**: No shadow, uses border instead

## Accessibility

### ARIA Attributes

- **`role="radiogroup"`**: Applied to the container to indicate a group of radio-like options
- **`role="radio"`**: Applied to each option button
- **`aria-checked`**: Set to `true` for the active option, `false` for others
- **`aria-disabled`**: Set to `true` when the switcher or individual option is disabled
- **`aria-label`**: Provide descriptive label for the switcher group

### Keyboard Navigation

- **Tab**: Move focus to the switcher (focuses first option)
- **Arrow keys**: Move focus and selection between options (left/right for horizontal, up/down for vertical)
- **Enter / Space**: Activate the focused option
- **Home / End**: Jump to first/last option

### Focus States

- **Visible focus indicator**: Use a visible focus ring (browser default or design-system focus ring)
- **Focus ring**: Align with design system focus styling (e.g., blue outline)

### Screen Reader Considerations

- Switcher is announced as a radio group
- Active option is announced with its checked state
- Disabled options are announced as disabled
- Option labels should be clear and descriptive

### Best Practices

1. **Limit options**: Keep to 2-5 options for clarity
2. **Clear labels**: Use concise, descriptive labels
3. **Consistent sizing**: Use same size throughout the interface
4. **Visual feedback**: Ensure active state is clearly distinguishable
5. **Touch targets**: Maintain adequate touch target size (min 32px height)

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Button Connection

Buttons should share borders (no gap) to create a unified appearance. Use negative margins or remove borders between buttons.

### Hover States

Implement smooth transitions (e.g., 0.2s ease) for hover effects. Only apply hover to inactive options.

### Disabled States

Disabled switchers or options must not respond to clicks, should use `cursor: not-allowed`, and include `disabled` and `aria-disabled="true"`.

### Responsive Considerations

- Switchers can wrap on very narrow screens if needed
- Consider vertical layout on mobile if horizontal space is limited
- Maintain minimum touch target size (32px height minimum)

## Related Components

- **Buttons**: Switcher uses button-like elements but for selection, not actions
- **Radio Buttons**: Similar select-one pattern; radios for forms, switchers for UI controls
- **Tabs / Tabbed Navigation**: Similar segmented pattern; tabs for navigation, switchers for settings/filters
- **Filter Chips**: Similar selection pattern; chips for multi-select, switchers for single-select

## Figma Reference

- **Component Node ID**: `720-2687`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Switcher Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2687&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
