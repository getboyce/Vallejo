# Tabbed Navigation Component

## Overview

The Tabbed Navigation component is a navigation control in the Vallejo Design System that allows users to switch between different views or sections. Tabs display multiple options horizontally, with one tab active at a time, indicated by an underline.

**Figma Reference:**
- **Node ID**: `722-4359`
- **Figma Link**: [Tabbed Navigation Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=722-4359&m=dev)

## Description

Tabbed navigation is used to organize content into distinct sections that users can switch between. Tabs are displayed horizontally, and the active tab is indicated by a blue underline. This pattern is ideal for switching between views, filters, or content categories without navigating to different pages.

### Use Cases

- **View Switching**: Switch between different views (e.g., "List" / "Grid", "All" / "Favorites")
- **Content Sections**: Navigate between content sections (e.g., "Overview" / "Details" / "History")
- **Filter Tabs**: Filter content by category (e.g., "All" / "Active" / "Completed")
- **Settings Sections**: Navigate between settings categories
- **Dashboard Views**: Switch between different dashboard views or reports

## Variants

### Style Variants

#### Underline (Default)
- **Appearance**: Text-only tabs with blue underline for active tab
- **Usage**: Standard tab navigation pattern
- **Active Indicator**: Blue underline (`--color-brand-copart-blue` #2662D9)
- **Visual**: Clean, minimal appearance

#### Grouped
- **Appearance**: Tabs with subtle background, grouped together
- **Usage**: When tabs need visual grouping or separation
- **Background**: Light gray background for the tab group
- **Visual**: More defined tab boundaries

### State Variants

#### Active (Selected)
- **Appearance**: Blue underline, dark text
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Underline**: `--color-brand-copart-blue` (#2662D9)
- **Visual**: Clearly indicates the selected tab

#### Inactive (Unselected)
- **Appearance**: No underline, dark gray text
- **Text**: `--color-light-mode-neutral-500` (#2F333C) or `--color-light-mode-neutral-400` (#46525D)
- **Visual**: Subtle, secondary to active tab

#### Hover (Inactive)
- **Appearance**: Slightly darker text or light background
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Disabled
- **Appearance**: Muted colors, reduced contrast
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)
- **Interaction**: Not interactive, cursor: not-allowed
- **Accessibility**: Use `aria-disabled="true"` and avoid pointer events

## Props / TypeScript Interface

```typescript
interface Tab {
  /**
   * Tab identifier
   */
  id: string;
  
  /**
   * Tab label
   */
  label: string;
  
  /**
   * Whether this tab is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Optional icon for the tab
   */
  icon?: React.ReactNode;
  
  /**
   * Optional badge or count
   */
  badge?: string | number;
}

interface TabbedNavigationProps {
  /**
   * Array of tabs to display
   */
  tabs: Tab[];
  
  /**
   * Currently active tab ID
   */
  activeTab: string;
  
  /**
   * Callback when tab is selected
   */
  onTabChange: (tabId: string) => void;
  
  /**
   * Tab style variant
   * @default 'underline'
   */
  variant?: 'underline' | 'grouped';
  
  /**
   * Whether tabs can wrap to multiple lines
   * @default false
   */
  wrap?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the tab list
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Tabbed Navigation (React/TypeScript)

```typescript
import React from 'react';

interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

interface TabbedNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'underline' | 'grouped';
  wrap?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const TabbedNavigation: React.FC<TabbedNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline',
  wrap = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel ?? 'Navigation tabs'}
      className={className}
      style={{
        display: 'flex',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: variant === 'grouped' ? 0 : 'var(--spacing-24, 24px)',
        borderBottom: variant === 'underline' ? '1px solid var(--color-light-neutral-200, #E2E5E9)' : 'none',
        background: variant === 'grouped' ? 'var(--color-light-neutral-100, #F4F5F6)' : 'transparent',
        padding: variant === 'grouped' ? 'var(--spacing-4, 4px)' : 0,
        borderRadius: variant === 'grouped' ? 'var(--border-radius-200, 8px)' : 0,
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isDisabled = tab.disabled;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            onClick={() => !isDisabled && onTabChange(tab.id)}
            style={{
              fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
              fontSize: 'var(--typography-font-size-400, 16px)',
              fontWeight: 'var(--typography-weight-medium, 500)',
              lineHeight: 'var(--typography-line-height-400, 22px)',
              padding: 'var(--spacing-12, 12px) var(--spacing-16, 16px)',
              border: 'none',
              background: variant === 'grouped' && isActive
                ? 'var(--color-light-neutral-000, #FFFFFF)'
                : 'transparent',
              color: isDisabled
                ? 'var(--color-light-neutral-400, #46525D)'
                : isActive
                ? 'var(--color-light-neutral-500, #2F333C)'
                : 'var(--color-light-neutral-500, #2F333C)',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              position: 'relative',
              borderRadius: variant === 'grouped' ? 'var(--border-radius-200, 8px)' : 0,
              transition: 'color 0.2s ease, background 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-8, 8px)',
            }}
            onMouseEnter={(e) => {
              if (!isDisabled && !isActive && variant === 'grouped') {
                e.currentTarget.style.background = 'var(--color-light-neutral-000, #FFFFFF)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive && variant === 'grouped') {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                style={{
                  fontSize: 'var(--typography-font-size-200, 12px)',
                  padding: '2px 6px',
                  background: 'var(--color-light-neutral-200, #E2E5E9)',
                  borderRadius: 'var(--border-radius-small, 4px)',
                  color: 'var(--color-light-neutral-500, #2F333C)',
                }}
              >
                {tab.badge}
              </span>
            )}
            {variant === 'underline' && isActive && (
              <div
                style={{
                  position: 'absolute',
                  bottom: variant === 'underline' ? '-1px' : 'auto',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--color-brand-copart-blue, #2662D9)',
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
```

### Usage Examples

#### Basic Tabs
```typescript
const [activeTab, setActiveTab] = useState('overview');

<TabbedNavigation
  tabs={[
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'history', label: 'History' },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

#### Grouped Tabs
```typescript
<TabbedNavigation
  tabs={[
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="grouped"
/>
```

#### Tabs with Icons and Badges
```typescript
<TabbedNavigation
  tabs={[
    { id: 'inbox', label: 'Inbox', icon: <InboxIcon />, badge: 5 },
    { id: 'sent', label: 'Sent', icon: <SentIcon /> },
    { id: 'drafts', label: 'Drafts', icon: <DraftsIcon />, badge: 2 },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

## Design Tokens Used

### Colors

#### Active Tab
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Underline**: `--color-brand-copart-blue` (#2662D9)
- **Background (Grouped)**: `--color-light-mode-neutral-000` (#FFFFFF)

#### Inactive Tab
- **Text**: `--color-light-mode-neutral-500` (#2F333C) or `--color-light-mode-neutral-400` (#46525D)
- **Background**: Transparent

#### Disabled Tab
- **Text**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)

#### Grouped Variant
- **Group Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Border**: `--color-light-mode-neutral-200` (#E2E5E9) for underline variant

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)

### Spacing

- **Tab Padding**: `--spacing-12` (12px) vertical, `--spacing-16` (16px) horizontal
- **Gap between tabs**: `--spacing-24` (24px) for underline variant
- **Gap between icon and label**: `--spacing-8` (8px)
- **Group Padding**: `--spacing-4` (4px)

### Border Radius

- **Group Container**: `--border-radius-200` (8px)
- **Grouped Tab**: `--border-radius-200` (8px)

### Underline

- **Height**: 2px
- **Color**: `--color-brand-copart-blue` (#2662D9)

## Accessibility

### ARIA Attributes

- **`role="tablist"`**: Applied to the container
- **`role="tab"`**: Applied to each tab button
- **`aria-selected`**: Set to `true` for the active tab, `false` for others
- **`aria-disabled`**: Set to `true` when a tab is disabled
- **`aria-label`**: Provide descriptive label for the tab list

### Keyboard Navigation

- **Tab**: Move focus to the tab list (focuses first tab)
- **Arrow keys**: Move focus and selection between tabs (left/right)
- **Enter / Space**: Activate the focused tab
- **Home / End**: Jump to first/last tab

### Focus States

- **Visible focus indicator**: Use a visible focus ring (browser default or design-system focus ring)
- **Focus ring**: Align with design system focus styling (e.g., blue outline)

### Screen Reader Considerations

- Tab list is announced as a tab list
- Active tab is announced with its selected state
- Disabled tabs are announced as disabled
- Tab labels should be clear and descriptive

### Best Practices

1. **Limit tabs**: Keep to 2-7 tabs for clarity
2. **Clear labels**: Use concise, descriptive labels
3. **Consistent styling**: Use same variant throughout the interface
4. **Visual feedback**: Ensure active state is clearly distinguishable
5. **Touch targets**: Maintain adequate touch target size (min 32px height)

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Underline Animation

Consider adding a smooth transition when the underline moves between tabs (e.g., 0.2s ease).

### Content Association

Each tab should be associated with its content panel using:
- `aria-controls` on the tab
- `id` and `aria-labelledby` on the content panel
- Or use a tab panel component pattern

### Responsive Considerations

- Tabs can wrap on narrow screens if `wrap` is enabled
- Consider horizontal scroll for many tabs on mobile
- Maintain minimum touch target size (32px height minimum)

## Related Components

- **Switcher**: Similar select-one pattern; switchers for settings/filters, tabs for navigation
- **Buttons**: Tabs use button-like elements but for navigation
- **Filter Chips**: Similar selection pattern; chips for multi-select, tabs for single-select navigation

## Figma Reference

- **Component Node ID**: `722-4359`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Tabbed Navigation Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=722-4359&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
