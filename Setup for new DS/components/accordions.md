# Accordions Component

## Overview

The Accordion component is a collapsible content component in the Vallejo Design System that allows users to expand and collapse sections of content. Accordions help organize information in a space-efficient manner.

**Figma Reference:**
- **Node ID**: `720-2671`
- **Figma Link**: [Accordions Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2671&m=dev)

## Description

Accordions are used to organize content into collapsible sections. Users can expand sections to view content and collapse them to save space. This pattern is ideal for FAQs, settings panels, and content that can be organized into categories.

### Use Cases

- **FAQs**: Frequently asked questions with expandable answers
- **Settings Panels**: Grouped settings that can be expanded/collapsed
- **Content Organization**: Organize long-form content into sections
- **Navigation**: Collapsible navigation menus
- **Forms**: Group related form fields in collapsible sections

## Variants

### Behavior Variants

#### Single Expand
- **Behavior**: Only one section can be open at a time
- **Usage**: When sections are mutually exclusive or space is limited
- **Interaction**: Opening a section closes others

#### Multiple Expand
- **Behavior**: Multiple sections can be open simultaneously
- **Usage**: When users need to compare or reference multiple sections
- **Interaction**: Each section operates independently

### Style Variants

#### Default
- **Appearance**: Standard accordion with header and content
- **Usage**: Most common use case
- **Visual**: Clear header with expand/collapse indicator

#### Bordered
- **Appearance**: Visible border around accordion items
- **Usage**: When clear separation between items is needed
- **Visual**: Card-like appearance with borders

#### Borderless
- **Appearance**: No visible borders, subtle separation
- **Usage**: Minimal, clean appearance
- **Visual**: Relies on spacing and backgrounds

## Props / TypeScript Interface

```typescript
interface AccordionItem {
  /**
   * Item identifier
   */
  id: string;
  
  /**
   * Item header/title
   */
  header: string;
  
  /**
   * Item content
   */
  content: React.ReactNode;
  
  /**
   * Whether item is initially expanded
   * @default false
   */
  defaultExpanded?: boolean;
  
  /**
   * Whether item is disabled
   * @default false
   */
  disabled?: boolean;
}

interface AccordionProps {
  /**
   * Accordion items
   */
  items: AccordionItem[];
  
  /**
   * Whether only one item can be expanded at a time
   * @default false
   */
  singleExpand?: boolean;
  
  /**
   * Accordion style variant
   * @default 'default'
   */
  variant?: 'default' | 'bordered' | 'borderless';
  
  /**
   * Expanded item IDs (controlled)
   */
  expandedItems?: string[];
  
  /**
   * Expansion change handler
   */
  onExpansionChange?: (itemId: string, expanded: boolean) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Accordion

```typescript
<Accordion
  items={[
    {
      id: 'item1',
      header: 'What is this?',
      content: 'This is an accordion component.'
    },
    {
      id: 'item2',
      header: 'How does it work?',
      content: 'Click the header to expand or collapse.'
    }
  ]}
/>
```

### Single Expand Accordion

```typescript
<Accordion
  items={items}
  singleExpand
/>
```

### Controlled Accordion

```typescript
const [expanded, setExpanded] = useState(['item1']);

<Accordion
  items={items}
  expandedItems={expanded}
  onExpansionChange={(itemId, expanded) => {
    if (expanded) {
      setExpanded([...expanded, itemId]);
    } else {
      setExpanded(expanded.filter(id => id !== itemId));
    }
  }}
/>
```

## Design Tokens Used

### Colors

- **Background**: `--color-light-mode-neutral-000` (#FFFFFF)
- **Header Background**: `--color-light-mode-neutral-100` (#F4F5F6)
- **Header Hover**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Border**: `--color-light-mode-neutral-200` (#E2E5E9)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Text Secondary**: `--color-light-mode-neutral-400` (#46525D)
- **Icon**: `--color-light-mode-neutral-400` (#46525D)

### Typography

- **Header**: `--typography-font-size-400` (16px), `--typography-weight-semibold` (600)
- **Content**: `--typography-font-size-400` (16px), `--typography-weight-medium` (500)
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

- **Header Padding**: `--spacing-16` (16px) vertical, `--spacing-24` (24px) horizontal
- **Content Padding**: `--spacing-24` (24px)
- **Gap between items**: `--spacing-8` (8px)

### Border Radius

- **Item**: `--border-radius-200` (8px)

## Accessibility

### ARIA Attributes

- `role="region"` on accordion container
- `aria-expanded` on accordion headers
- `aria-controls` linking header to content
- `aria-disabled` on disabled items
- `aria-label` for descriptive labels

### Keyboard Navigation

- **Tab**: Move focus to accordion headers
- **Enter / Space**: Toggle expansion
- **Arrow keys**: Navigate between accordion items (optional)

### Focus States

- Visible focus indicator on headers
- Focus ring aligned with design system

### Screen Reader Considerations

- Accordion state is announced (expanded/collapsed)
- Header text is read before state
- Content is accessible when expanded

## Implementation Notes

### CSS Variables

Use design tokens for all styling. Accordions should have smooth expand/collapse animations.

### Animations

- Smooth height transitions for expand/collapse
- Icon rotation animation (chevron)
- Recommended transition: 0.3s ease

### Performance

- Consider lazy loading content for large accordions
- Optimize animations for smooth performance

## Related Components

- **Tabbed Navigation**: Similar pattern for switching views
- **Modals**: Can contain accordion content
- **Shelves**: Can contain accordion sections

## Figma Reference

- **Component Node ID**: `720-2671`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Accordions Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=720-2671&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
