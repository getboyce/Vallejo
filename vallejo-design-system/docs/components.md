# Components

This document describes all components available in the Vallejo Design System.

## Foundation Components

### Typography
**Status:** Placeholder (needs Figma extraction)
- Text styles (h1-h6, body, caption, etc.)
- Font families and sizes
- Line heights and letter spacing

### Icons
**Status:** Placeholder (needs Figma extraction)
- SVG icon library
- Icon sizes and colors
- Usage guidelines

### Logos
**Status:** Placeholder (needs Figma extraction)
- Brand logos
- Logo variations
- Usage guidelines

## Form Components

### Button ✅
**Status:** Implemented

A flexible button component with multiple variants and sizes.

**Variants:**
- `primary`: Primary action button
- `secondary`: Secondary action button
- `tertiary`: Tertiary action button
- `danger`: Destructive action button
- `ghost`: Ghost button (no background)

**Sizes:**
- `sm`: Small button
- `md`: Medium button (default)
- `lg`: Large button

**Usage:**
```html
<button class="vds-button vds-button--primary vds-button--md" data-vds-component="button">
  Click Me
</button>
```

**JavaScript:**
```javascript
import { Button } from './components/button/button.js';

// Auto-initialize
Button.init();

// Or manually
const button = new Button(document.querySelector('.vds-button'), {
  variant: 'primary',
  size: 'md',
  loading: false
});
```

### Input ✅
**Status:** Implemented

A flexible input component with validation states and helper text.

**States:**
- `default`: Default state
- `focus`: Focused state
- `error`: Error state with message
- `disabled`: Disabled state

**Usage:**
```html
<div class="vds-input-wrapper">
  <input 
    type="text" 
    class="vds-input" 
    data-vds-component="input"
    placeholder="Enter text"
  />
</div>
```

**JavaScript:**
```javascript
import { Input } from './components/input/input.js';

const input = new Input(document.querySelector('.vds-input'));
input.setError('This field is required');
input.setHelperText('Helper text here');
```

### Checkbox
**Status:** Placeholder (needs implementation)
- Single and multiple selection
- Indeterminate state
- Disabled state

### Radio Buttons
**Status:** Placeholder (needs implementation)
- Radio group selection
- Disabled state
- Required validation

### Toggle
**Status:** Placeholder (needs implementation)
- On/off toggle switch
- Disabled state
- Size variants

### Input Dropdown
**Status:** Placeholder (needs implementation)
- Select dropdown
- Searchable dropdown
- Multi-select dropdown

### Date Picker
**Status:** Placeholder (needs implementation)
- Date selection
- Date range selection
- Calendar view

### Filter Chips
**Status:** Placeholder (needs implementation)
- Filter selection chips
- Multiple selection
- Active/inactive states

## Feedback Components

### Alert
**Status:** Placeholder (needs implementation)
- Success, warning, error, info variants
- Dismissible alerts
- Icon support

### Toast
**Status:** Placeholder (needs implementation)
- Notification toasts
- Auto-dismiss
- Stack management

### Tooltip
**Status:** Placeholder (needs implementation)
- Hover tooltips
- Position variants
- Rich content support

### Status Token
**Status:** Placeholder (needs implementation)
- Status indicators
- Color-coded states
- Icon support

## Navigation Components

### Tabbed Navigation
**Status:** Placeholder (needs implementation)
- Tab navigation
- Active state
- Disabled tabs

### Switcher
**Status:** Placeholder (needs implementation)
- View switcher
- Option selection
- Active state

### Pagination
**Status:** Placeholder (needs implementation)
- Page navigation
- Page numbers
- Previous/next controls

## Layout Components

### Dashboard Cards
**Status:** Placeholder (needs implementation)
- Card container
- Header, body, footer sections
- Hover states

### Modal
**Status:** Placeholder (needs implementation)
- Modal dialogs
- Overlay
- Close button
- Size variants

### Shelf
**Status:** Placeholder (needs implementation)
- Side panel
- Slide-in animation
- Overlay

### Mobile Shelf
**Status:** Placeholder (needs implementation)
- Mobile side panel
- Bottom sheet variant
- Touch gestures

### Accordion
**Status:** Placeholder (needs implementation)
- Collapsible sections
- Single/multiple open
- Icon indicators

### Table
**Status:** Placeholder (needs implementation)
- Data tables
- Sortable columns
- Row selection
- Pagination

## Utility Components

### Search Bar
**Status:** Placeholder (needs implementation)
- Search input
- Clear button
- Loading state
- Results display

### Progress Tracker
**Status:** Placeholder (needs implementation)
- Step indicator
- Progress bar
- Completion states

## Component Patterns

All components follow these patterns:

1. **CSS Classes:** Use `vds-` prefix for all classes
2. **Data Attributes:** Use `data-vds-component` for initialization
3. **JavaScript:** ES6 modules with class-based components
4. **Accessibility:** ARIA attributes and keyboard navigation
5. **Responsive:** Mobile-first approach

## Adding New Components

When adding a new component:

1. Create component directory: `components/[component-name]/`
2. Create `[component-name].js` with component class
3. Create `[component-name].css` with component styles
4. Create `index.js` for exports
5. Add to `components/index.js`
6. Update this documentation
7. Add example to `examples/`
