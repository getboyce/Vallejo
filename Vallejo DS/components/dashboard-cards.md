# Dashboard Cards Component

## Overview

The Dashboard Cards component is a layout component in the Vallejo Design System used to display information in card-based layouts. Cards provide a structured way to present content, metrics, and actions in dashboard interfaces.

**Figma Reference:**
- **Node ID**: `755-413`
- **Figma Link**: [Dashboard Cards Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=755-413&m=dev)

## Description

Dashboard cards are container components that group related content together. They're commonly used in dashboard interfaces to display metrics, charts, lists, and other information in an organized, scannable layout.

### Use Cases

- **Metrics Display**: Show key performance indicators (KPIs) and statistics
- **Data Visualization**: Display charts, graphs, and visual data
- **Content Grouping**: Organize related content into distinct sections
- **Action Cards**: Present actions or quick links
- **Information Panels**: Display detailed information about entities or items

## Variants

### Size Variants

#### Small
- **Width**: Flexible, typically 1/4 to 1/3 of container width
- **Usage**: Simple metrics, icons with labels
- **Visual**: Compact, minimal padding

#### Medium (Default)
- **Width**: Flexible, typically 1/2 to 2/3 of container width
- **Usage**: Standard cards with moderate content
- **Visual**: Balanced padding and spacing

#### Large
- **Width**: Flexible, typically full width or 2/3+ of container width
- **Usage**: Complex content, detailed information, charts
- **Visual**: Generous padding and spacing

### Content Variants

#### With Header
- **Structure**: Header section with title and optional actions
- **Usage**: Cards that need titles or action buttons
- **Layout**: Title left-aligned, actions right-aligned

#### Without Header
- **Structure**: Content only, no header section
- **Usage**: Simple metric cards, icon cards
- **Layout**: Content centered or left-aligned

#### With Footer
- **Structure**: Footer section with additional actions or links
- **Usage**: Cards with secondary actions or "View more" links
- **Layout**: Footer at bottom of card

## Props / TypeScript Interface

```typescript
interface DashboardCardProps {
  /**
   * Card title/header
   */
  title?: string;
  
  /**
   * Card content
   */
  children: React.ReactNode;
  
  /**
   * Optional header actions (buttons, icons)
   */
  headerActions?: React.ReactNode;
  
  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
  
  /**
   * Card size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether card is clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Click handler (if clickable)
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Card

```typescript
<DashboardCard title="Total Revenue">
  <div>$125,430</div>
  <div>+12.5% from last month</div>
</DashboardCard>
```

### Card with Actions

```typescript
<DashboardCard 
  title="Recent Activity"
  headerActions={<Button variant="subtle">View All</Button>}
>
  <ActivityList items={activities} />
</DashboardCard>
```

### Clickable Card

```typescript
<DashboardCard 
  title="Project Alpha"
  clickable
  onClick={() => navigate('/projects/alpha')}
>
  <ProjectSummary project={project} />
</DashboardCard>
```

## Design Tokens Used

### Colors

- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Border**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Text Secondary**: `--color-light-mode-neutral-400` (#46525D)

### Typography

- **Title**: `--typography-font-size-400` (16px), `--typography-weight-semibold` (600)
- **Content**: `--typography-font-size-400` (16px), `--typography-weight-medium` (500)
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

- **Padding**: `--spacing-24` (24px) for medium cards
- **Gap**: `--spacing-16` (16px) between elements
- **Border Radius**: `--border-radius-200` (8px)

### Shadows

- **Card Shadow**: `--shadow-medium` for elevation

## Accessibility

### ARIA Attributes

- Use semantic HTML (`<article>`, `<section>`) when appropriate
- Provide descriptive titles for screen readers
- Use `role="button"` and `tabindex` for clickable cards

### Keyboard Navigation

- **Tab**: Move focus to clickable cards
- **Enter / Space**: Activate clickable cards

### Focus States

- Visible focus indicator for clickable cards
- Focus ring aligned with design system

## Implementation Notes

### CSS Variables

Use design tokens for all styling. Cards should be flexible and responsive.

### Responsive Considerations

- Cards should wrap on smaller screens
- Consider stacking cards vertically on mobile
- Maintain minimum touch target sizes for interactive elements

## Related Components

- **Buttons**: Used in card headers and footers
- **Tables**: Can be displayed within cards
- **Charts**: Commonly displayed in dashboard cards

## Figma Reference

- **Component Node ID**: `755-413`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Dashboard Cards Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=755-413&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Shadows Tokens](../tokens/shadows.json) — Shadow values
