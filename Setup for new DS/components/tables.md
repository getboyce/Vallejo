# Tables Component

## Overview

The Tables component is a data display component in the Vallejo Design System used to present structured data in rows and columns. Tables provide an efficient way to display and organize large amounts of information.

**Figma Reference:**
- **Node ID**: `871-7575`
- **Figma Link**: [Tables Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=871-7575&m=dev)

## Description

Tables are used to display structured data in a grid format with rows and columns. They support sorting, filtering, selection, and pagination to help users navigate and interact with large datasets.

### Use Cases

- **Data Lists**: Display lists of items with multiple attributes
- **Reports**: Show tabular reports and analytics
- **Data Tables**: Present structured data from databases
- **Comparison Views**: Compare multiple items side-by-side
- **Admin Interfaces**: Display user lists, settings, configurations

## Variants

### Style Variants

#### Bordered
- **Appearance**: Visible borders between cells
- **Usage**: When clear cell separation is needed
- **Visual**: Grid-like appearance with borders

#### Borderless
- **Appearance**: No visible borders, subtle row separation
- **Usage**: Modern, clean appearance
- **Visual**: Minimal, relies on spacing and row backgrounds

#### Striped
- **Appearance**: Alternating row backgrounds
- **Usage**: Improve readability for large tables
- **Visual**: Every other row has a light background

### Size Variants

#### Compact
- **Padding**: Reduced cell padding
- **Usage**: Dense data, space-constrained layouts
- **Font Size**: Smaller typography

#### Default
- **Padding**: Standard cell padding
- **Usage**: Most common use case
- **Font Size**: Standard typography

#### Spacious
- **Padding**: Generous cell padding
- **Usage**: Important data, emphasis on readability
- **Font Size**: Standard or larger typography

### State Variants

#### Default
- **Appearance**: Standard table styling
- **Interaction**: Hover effects on rows

#### Hover
- **Appearance**: Row background changes on hover
- **Interaction**: Visual feedback for interactive rows

#### Selected
- **Appearance**: Highlighted row background
- **Usage**: When rows can be selected
- **Visual**: Blue or accent color background

## Props / TypeScript Interface

```typescript
interface TableColumn {
  /**
   * Column identifier
   */
  id: string;
  
  /**
   * Column header label
   */
  label: string;
  
  /**
   * Column width (optional)
   */
  width?: string | number;
  
  /**
   * Whether column is sortable
   */
  sortable?: boolean;
  
  /**
   * Custom cell renderer
   */
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  /**
   * Table columns configuration
   */
  columns: TableColumn[];
  
  /**
   * Table data rows
   */
  data: any[];
  
  /**
   * Table style variant
   * @default 'borderless'
   */
  variant?: 'bordered' | 'borderless' | 'striped';
  
  /**
   * Table size
   * @default 'default'
   */
  size?: 'compact' | 'default' | 'spacious';
  
  /**
   * Whether rows are selectable
   * @default false
   */
  selectable?: boolean;
  
  /**
   * Selected row IDs
   */
  selectedRows?: string[];
  
  /**
   * Row selection handler
   */
  onRowSelect?: (rowId: string, selected: boolean) => void;
  
  /**
   * Sort handler
   */
  onSort?: (columnId: string, direction: 'asc' | 'desc') => void;
  
  /**
   * Row click handler
   */
  onRowClick?: (row: any) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Table

```typescript
<Table
  columns={[
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'role', label: 'Role' }
  ]}
  data={users}
/>
```

### Sortable Table

```typescript
<Table
  columns={[
    { id: 'name', label: 'Name', sortable: true },
    { id: 'date', label: 'Date', sortable: true }
  ]}
  data={items}
  onSort={(columnId, direction) => handleSort(columnId, direction)}
/>
```

### Selectable Table

```typescript
<Table
  columns={columns}
  data={items}
  selectable
  selectedRows={selectedIds}
  onRowSelect={(rowId, selected) => handleSelection(rowId, selected)}
/>
```

## Design Tokens Used

### Colors

- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Border**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Header Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Row Hover**: `--color-light-mode-blue-100` (#F6F9FD)
- **Row Selected**: `--color-light-mode-blue-300` (#E1E9FA)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Text Secondary**: `--color-light-mode-neutral-400` (#46525D)

### Typography

- **Header**: `--typography-font-size-400` (16px), `--typography-weight-semibold` (600)
- **Cell**: `--typography-font-size-400` (16px), `--typography-weight-medium` (500)
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

- **Cell Padding**: `--spacing-12` (12px) vertical, `--spacing-16` (16px) horizontal
- **Compact Padding**: `--spacing-8` (8px) vertical, `--spacing-12` (12px) horizontal
- **Spacious Padding**: `--spacing-16` (16px) vertical, `--spacing-24` (24px) horizontal

### Border Radius

- **Table**: `--border-radius-200` (8px)

## Accessibility

### ARIA Attributes

- Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` semantic HTML
- `role="table"` if using custom table structure
- `aria-sort` on sortable column headers
- `aria-selected` on selectable rows
- `aria-label` for table description

### Keyboard Navigation

- **Tab**: Move between interactive elements
- **Arrow keys**: Navigate between cells (if implemented)
- **Enter / Space**: Activate row or cell action
- **Shift+Click**: Multi-select (if supported)

### Screen Reader Considerations

- Table is announced with row and column counts
- Headers are associated with cells
- Sortable columns announce sort state
- Selected rows are announced

## Implementation Notes

### CSS Variables

Use design tokens for all styling. Tables should be responsive and scrollable on smaller screens.

### Responsive Considerations

- Horizontal scroll on mobile for wide tables
- Consider stacking columns on very small screens
- Maintain readability with adequate spacing

### Performance

- Virtual scrolling for large datasets
- Lazy loading for paginated tables
- Efficient rendering for sortable/filterable tables

## Related Components

- **Pagination**: Used with tables for navigation
- **Filter Chips**: Used to filter table data
- **Buttons**: Used in table actions
- **Checkboxes**: Used for row selection

## Figma Reference

- **Component Node ID**: `871-7575`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Tables Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=871-7575&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
