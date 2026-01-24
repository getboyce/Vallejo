# Pagination Component

## Overview

The Pagination component is a navigation control in the Vallejo Design System that allows users to navigate through multiple pages of content. It displays page numbers and navigation controls (previous, next, first, last) to move between pages.

**Figma Reference:**
- **Node ID**: `720-2792`
- **Figma Link**: [Pagination Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2792&m=dev)

## Description

Pagination is used when content is divided across multiple pages. It provides controls to navigate to the first, previous, next, and last pages, as well as direct access to specific page numbers. The current page is visually highlighted, and disabled states indicate when navigation in a direction is not available.

### Use Cases

- **Data Tables**: Navigate through pages of table data
- **Search Results**: Navigate through search result pages
- **Content Lists**: Navigate through paginated content lists
- **Reports**: Navigate through paginated reports or analytics
- **Any Paginated Content**: Any scenario where content is divided into pages

## Variants

### Navigation Button Variants

#### First Page (<<)
- **Appearance**: Double left-angle bracket icon
- **Usage**: Jump to the first page
- **State**: Disabled when on first page
- **Icon**: `<<` or double chevron left

#### Previous Page (<)
- **Appearance**: Single left-angle bracket icon
- **Usage**: Go to the previous page
- **State**: Disabled when on first page
- **Icon**: `<` or single chevron left

#### Next Page (>)
- **Appearance**: Single right-angle bracket icon
- **Usage**: Go to the next page
- **State**: Disabled when on last page
- **Icon**: `>` or single chevron right

#### Last Page (>>)
- **Appearance**: Double right-angle bracket icon
- **Usage**: Jump to the last page
- **State**: Disabled when on last page
- **Icon**: `>>` or double chevron right

### Page Number States

#### Active (Current Page)
- **Appearance**: Blue circular background with white text
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-brand-copart-white` (#FFFFFF)
- **Visual**: Clearly indicates the current page

#### Inactive (Other Pages)
- **Appearance**: Transparent or light background with dark text
- **Background**: Transparent or `--color-light-mode-neutral-000` (#FFFFFF)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Visual**: Subtle, clickable page numbers

#### Hover (Inactive Pages)
- **Appearance**: Light blue or gray background
- **Background**: `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-neutral-100` (#F4F5F6)
- **Interaction**: Visual feedback on mouse hover
- **Transition**: Smooth color transition (recommended: 0.2s ease)

#### Disabled (Navigation Buttons)
- **Appearance**: Muted colors, reduced opacity
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text/Icon**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)
- **Interaction**: Not interactive, cursor: not-allowed
- **Accessibility**: Use `aria-disabled="true"` and avoid pointer events

### Display Variants

#### Compact
- **Appearance**: Shows limited page numbers (e.g., 1, 2, 3, ..., 10)
- **Usage**: When there are many pages
- **Visual**: Ellipsis (...) indicates hidden pages

#### Full
- **Appearance**: Shows all page numbers
- **Usage**: When there are few pages (typically ≤ 7)
- **Visual**: All page numbers visible

## Props / TypeScript Interface

```typescript
interface PaginationProps {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  
  /**
   * Total number of pages
   */
  totalPages: number;
  
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
  
  /**
   * Whether to show first/last buttons
   * @default true
   */
  showFirstLast?: boolean;
  
  /**
   * Maximum number of page numbers to show
   * @default 7
   */
  maxVisible?: number;
  
  /**
   * Whether pagination is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for the pagination
   */
  'aria-label'?: string;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}
```

## Code Examples

### Basic Pagination (React/TypeScript)

```typescript
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisible?: number;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  maxVisible = 7,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const handlePageChange = (page: number) => {
    if (!disabled && page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const half = Math.floor(maxVisible / 2);

    if (currentPage <= half + 1) {
      // Near the start
      for (let i = 1; i <= maxVisible - 2; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - half) {
      // Near the end
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - (maxVisible - 3); i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // In the middle
      pages.push(1);
      pages.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      role="navigation"
      aria-label={ariaLabel ?? 'Pagination'}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-8, 8px)',
        justifyContent: 'center',
      }}
    >
      {showFirstLast && (
        <button
          type="button"
          aria-label="First page"
          disabled={disabled || isFirstPage}
          onClick={() => handlePageChange(1)}
          style={{
            width: '32px',
            height: '32px',
            border: 'none',
            background: disabled || isFirstPage
              ? 'var(--color-light-neutral-100, #F4F5F6)'
              : 'var(--color-light-neutral-000, #FFFFFF)',
            color: disabled || isFirstPage
              ? 'var(--color-light-neutral-400, #46525D)'
              : 'var(--color-light-neutral-500, #2F333C)',
            borderRadius: 'var(--border-radius-200, 8px)',
            cursor: disabled || isFirstPage ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            fontSize: 'var(--typography-font-size-400, 16px)',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
        >
          «
        </button>
      )}

      <button
        type="button"
        aria-label="Previous page"
        disabled={disabled || isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
        style={{
          width: '32px',
          height: '32px',
          border: 'none',
          background: disabled || isFirstPage
            ? 'var(--color-light-neutral-100, #F4F5F6)'
            : 'var(--color-light-neutral-000, #FFFFFF)',
          color: disabled || isFirstPage
            ? 'var(--color-light-neutral-400, #46525D)'
            : 'var(--color-light-neutral-500, #2F333C)',
          borderRadius: 'var(--border-radius-200, 8px)',
          cursor: disabled || isFirstPage ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
          fontSize: 'var(--typography-font-size-400, 16px)',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
      >
        ‹
      </button>

      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span
              key={`ellipsis-${index}`}
              style={{
                padding: '0 var(--spacing-8, 8px)',
                color: 'var(--color-light-neutral-400, #46525D)',
                fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
                fontSize: 'var(--typography-font-size-400, 16px)',
              }}
            >
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            type="button"
            aria-label={`Page ${pageNum}`}
            aria-current={isActive ? 'page' : undefined}
            disabled={disabled}
            onClick={() => handlePageChange(pageNum)}
            style={{
              minWidth: '32px',
              height: '32px',
              padding: '0 var(--spacing-8, 8px)',
              border: 'none',
              background: isActive
                ? 'var(--color-brand-copart-blue, #2662D9)'
                : 'var(--color-light-neutral-000, #FFFFFF)',
              color: isActive
                ? 'var(--color-brand-copart-white, #FFFFFF)'
                : 'var(--color-light-neutral-500, #2F333C)',
              borderRadius: 'var(--border-radius-round, 50%)',
              cursor: disabled ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
              fontSize: 'var(--typography-font-size-400, 16px)',
              fontWeight: 'var(--typography-weight-medium, 500)',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!disabled && !isActive) {
                e.currentTarget.style.background = 'var(--color-light-blue-100, #F6F9FD)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = 'var(--color-light-neutral-000, #FFFFFF)';
              }
            }}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        disabled={disabled || isLastPage}
        onClick={() => handlePageChange(currentPage + 1)}
        style={{
          width: '32px',
          height: '32px',
          border: 'none',
          background: disabled || isLastPage
            ? 'var(--color-light-neutral-100, #F4F5F6)'
            : 'var(--color-light-neutral-000, #FFFFFF)',
          color: disabled || isLastPage
            ? 'var(--color-light-neutral-400, #46525D)'
            : 'var(--color-light-neutral-500, #2F333C)',
          borderRadius: 'var(--border-radius-200, 8px)',
          cursor: disabled || isLastPage ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
          fontSize: 'var(--typography-font-size-400, 16px)',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
      >
        ›
      </button>

      {showFirstLast && (
        <button
          type="button"
          aria-label="Last page"
          disabled={disabled || isLastPage}
          onClick={() => handlePageChange(totalPages)}
          style={{
            width: '32px',
            height: '32px',
            border: 'none',
            background: disabled || isLastPage
              ? 'var(--color-light-neutral-100, #F4F5F6)'
              : 'var(--color-light-neutral-000, #FFFFFF)',
            color: disabled || isLastPage
              ? 'var(--color-light-neutral-400, #46525D)'
              : 'var(--color-light-neutral-500, #2F333C)',
            borderRadius: 'var(--border-radius-200, 8px)',
            cursor: disabled || isLastPage ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--typography-font-family-base, Inter, sans-serif)',
            fontSize: 'var(--typography-font-size-400, 16px)',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
        >
          »
        </button>
      )}
    </nav>
  );
};
```

### Usage Examples

#### Basic Pagination
```typescript
const [currentPage, setCurrentPage] = useState(1);

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>
```

#### Without First/Last Buttons
```typescript
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
  showFirstLast={false}
/>
```

#### Compact Pagination
```typescript
<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  maxVisible={5}
/>
```

## Design Tokens Used

### Colors

#### Active Page
- **Background**: `--color-brand-copart-blue` (#2662D9)
- **Text**: `--color-brand-copart-white` (#FFFFFF)

#### Inactive Page
- **Background**: `--color-light-mode-neutral-000` (#FFFFFF) or transparent
- **Text**: `--color-light-mode-neutral-500` (#2F333C)

#### Hover (Inactive Pages)
- **Background**: `--color-light-mode-blue-100` (#F6F9FD) or `--color-light-mode-neutral-100` (#F4F5F6)

#### Disabled Navigation
- **Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Text/Icon**: `--color-light-mode-neutral-400` (#46525D) or `--color-light-mode-neutral-350` (#6C7073)

### Typography

- **Font Family**: `--typography-font-family-base` (Inter)
- **Font Size**: `--typography-font-size-400` (16px)
- **Font Weight**: `--typography-weight-medium` (500)
- **Line Height**: `--typography-line-height-400` (22px)

### Spacing

- **Gap between controls**: `--spacing-8` (8px)
- **Page number padding**: `0 var(--spacing-8, 8px)`
- **Button size**: 32px × 32px (minimum)

### Border Radius

- **Page numbers**: `--border-radius-round` (50%) - circular
- **Navigation buttons**: `--border-radius-200` (8px)

## Accessibility

### ARIA Attributes

- **`role="navigation"`**: Applied to the pagination container
- **`aria-label`**: Provide descriptive label (e.g., "Pagination", "Page navigation")
- **`aria-current="page"`**: Applied to the current page button
- **`aria-label`**: On each button (e.g., "Page 1", "Next page", "Previous page")
- **`aria-disabled`**: Set to `true` when navigation buttons are disabled

### Keyboard Navigation

- **Tab**: Move focus between pagination controls
- **Enter / Space**: Activate the focused button
- **Arrow keys**: Consider adding arrow key navigation (left/right to move pages)

### Focus States

- **Visible focus indicator**: Use a visible focus ring on all interactive elements
- **Focus ring**: Align with design system focus styling (e.g., blue outline)

### Screen Reader Considerations

- Pagination is announced as navigation
- Current page is announced (e.g., "Page 1, current page")
- Disabled buttons are announced as disabled
- Button labels should be clear (e.g., "Next page", "Previous page")

### Best Practices

1. **Clear labels**: Use descriptive aria-labels for all buttons
2. **Visual feedback**: Ensure active page is clearly distinguishable
3. **Disabled states**: Clearly indicate when navigation is not available
4. **Touch targets**: Maintain adequate touch target size (min 32px × 32px)
5. **Ellipsis**: Use ellipsis (...) to indicate hidden pages when there are many pages

## Implementation Notes

### CSS Variables

Use design tokens for all colors, typography, spacing, and border radius. Avoid hardcoded values.

### Page Number Calculation

Implement smart page number display:
- Show all pages when total ≤ maxVisible
- Show ellipsis when there are many pages
- Always show first and last page when using ellipsis
- Show current page and adjacent pages

### Disabled States

Navigation buttons should be disabled when:
- First page: Disable "First" and "Previous"
- Last page: Disable "Last" and "Next"
- Use both `disabled` attribute and `aria-disabled="true"`

### Responsive Considerations

- Pagination can wrap on very narrow screens
- Consider hiding page numbers on mobile, showing only prev/next
- Maintain minimum touch target size (32px × 32px)

## Related Components

- **Buttons**: Pagination uses button-like elements for navigation
- **Tabbed Navigation**: Similar navigation pattern; tabs for views, pagination for pages

## Figma Reference

- **Component Node ID**: `720-2792`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Pagination Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2792&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Usage Guidelines](../docs/design-system-guide.md#usage-guidelines) — When and how to use components
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
