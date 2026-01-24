# Progress Tracker Component

## Overview

The Progress Tracker component is a navigation and status indicator in the Vallejo Design System that displays the current step in a multi-step process. It helps users understand where they are in a workflow and how many steps remain.

**Figma Reference:**
- **Node ID**: `459-1086`
- **Figma Link**: [Progress Tracker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=459-1086&m=dev)

## Description

Progress trackers visualize a user's progress through a multi-step process. They show completed steps, the current step, and upcoming steps, providing clear visual feedback about progress and remaining work.

### Use Cases

- **Multi-step Forms**: Show progress through form steps
- **Onboarding**: Guide users through setup processes
- **Checkout Flows**: Display checkout progress
- **Wizard Interfaces**: Step-by-step workflows
- **Application Processes**: Track application or approval steps

## Variants

### Style Variants

#### Horizontal
- **Layout**: Steps arranged horizontally
- **Usage**: Most common, works well on desktop
- **Visual**: Left-to-right progression

#### Vertical
- **Layout**: Steps arranged vertically
- **Usage**: Mobile, sidebar navigation, or when space is limited
- **Visual**: Top-to-bottom progression

### State Variants

#### Completed
- **Appearance**: Checkmark or filled circle, colored indicator
- **Visual**: Green or blue accent color
- **Interaction**: Can be clicked to return to completed step

#### Current
- **Appearance**: Active indicator, highlighted
- **Visual**: Blue accent color, animated or pulsing
- **Interaction**: Focused, user is on this step

#### Upcoming
- **Appearance**: Empty or outlined circle, muted colors
- **Visual**: Gray or neutral colors
- **Interaction**: Not yet accessible

#### Error
- **Appearance**: Error indicator, red color
- **Visual**: Red accent color
- **Usage**: When a step has validation errors

## Props / TypeScript Interface

```typescript
interface ProgressStep {
  /**
   * Step identifier
   */
  id: string;
  
  /**
   * Step label
   */
  label: string;
  
  /**
   * Optional step description
   */
  description?: string;
  
  /**
   * Whether step is optional
   * @default false
   */
  optional?: boolean;
  
  /**
   * Whether step has error
   * @default false
   */
  hasError?: boolean;
}

interface ProgressTrackerProps {
  /**
   * Array of steps
   */
  steps: ProgressStep[];
  
  /**
   * Current active step ID
   */
  currentStep: string;
  
  /**
   * Tracker orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Step click handler (to navigate to completed steps)
   */
  onStepClick?: (stepId: string) => void;
  
  /**
   * Whether to allow clicking on completed steps
   * @default true
   */
  allowStepNavigation?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}
```

## Code Examples

### Basic Progress Tracker

```typescript
<ProgressTracker
  steps={[
    { id: 'step1', label: 'Account' },
    { id: 'step2', label: 'Profile' },
    { id: 'step3', label: 'Preferences' },
    { id: 'step4', label: 'Review' }
  ]}
  currentStep="step2"
/>
```

### Vertical Progress Tracker

```typescript
<ProgressTracker
  steps={steps}
  currentStep={currentStep}
  orientation="vertical"
/>
```

### With Step Navigation

```typescript
<ProgressTracker
  steps={steps}
  currentStep={currentStep}
  onStepClick={(stepId) => navigateToStep(stepId)}
  allowStepNavigation
/>
```

## Design Tokens Used

### Colors

- **Completed**: `--color-brand-copart-blue` (#2662D9) or success green
- **Current**: `--color-brand-copart-blue` (#2662D9)
- **Upcoming**: `--color-light-mode-neutral-300` (#C5CCD3)
- **Error**: `--color-light-mode-red-500` (error red)
- **Text**: `--color-light-mode-neutral-500` (#2F333C)
- **Text Secondary**: `--color-light-mode-neutral-400` (#46525D)
- **Connector Line**: `--color-light-mode-neutral-200` (#E2E5E9)

### Typography

- **Label**: `--typography-font-size-400` (16px), `--typography-weight-medium` (500)
- **Description**: `--typography-font-size-300` (14px), `--typography-weight-regular` (400)
- **Font Family**: `--typography-font-family-base` (Inter)

### Spacing

- **Step Spacing**: `--spacing-24` (24px) or `--spacing-32` (32px)
- **Indicator Size**: 32px × 32px
- **Label Padding**: `--spacing-8` (8px)

### Border Radius

- **Indicator**: `--border-radius-round` (50%) for circular indicators

## Accessibility

### ARIA Attributes

- `role="navigation"` on tracker container
- `aria-label` for tracker description
- `aria-current="step"` on current step
- `aria-disabled` on non-navigable steps
- `aria-label` on each step

### Keyboard Navigation

- **Tab**: Move focus between steps (if clickable)
- **Enter / Space**: Navigate to focused step
- **Arrow keys**: Navigate between steps (optional)

### Focus States

- Visible focus indicator on clickable steps
- Focus ring aligned with design system

### Screen Reader Considerations

- Progress is announced (e.g., "Step 2 of 4")
- Current step is clearly identified
- Completed steps are announced
- Step labels are descriptive

## Implementation Notes

### CSS Variables

Use design tokens for all styling. Progress trackers should be responsive and adapt to screen size.

### Animations

- Smooth transitions for step state changes
- Optional pulse animation for current step
- Recommended transition: 0.3s ease

### Responsive Considerations

- Switch to vertical layout on mobile if needed
- Adjust spacing for smaller screens
- Maintain readability with adequate spacing

## Related Components

- **Buttons**: Used for step navigation
- **Forms**: Progress trackers often accompany multi-step forms
- **Modals**: Can contain progress trackers for modal workflows

## Figma Reference

- **Component Node ID**: `459-1086`
- **Figma File**: [Vallejo DS - Foundation](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation)
- **Direct Link**: [Progress Tracker Component](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=459-1086&m=dev)

## Additional Resources

- [Component Catalog](catalog.json) — Complete component reference
- [Design System Guide](../docs/design-system-guide.md) — Overall design system documentation
- [Color Tokens](../tokens/colors.json) — Complete color palette
- [Typography Tokens](../tokens/typography.json) — Typography scale
- [Spacing Tokens](../tokens/spacing.json) — Spacing values
- [Border Radius Tokens](../tokens/border-radius.json) — Border radius values
