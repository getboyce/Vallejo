# Components

This document describes all components available in the Vallejo Design System.

## Foundation Components

### Typography ✅
**Status:** Implemented
- Text styles (h1-h6, body, caption, etc.)
- Font families and sizes
- Line heights and letter spacing
- See `tokens/typography.js` for all typography tokens

### Icons ✅
**Status:** Implemented
- SVG icon library (88+ icons in `assets/icons/`)
- Icon sizes and colors
- Usage guidelines
- Component: `components/icon/icon.js`

### Logos ✅
**Status:** Implemented
- Brand logos (Copart logos in `assets/logos/`)
- Logo variations (light/dark/default modes)
- Usage guidelines
- Component: `components/logo/logo.js`

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

### Checkbox ✅
**Status:** Implemented
- Single and multiple selection
- Indeterminate state
- Disabled state
- Component: `components/checkbox/checkbox.js`

### Radio Buttons ✅
**Status:** Implemented
- Radio group selection
- Disabled state
- Required validation
- Component: `components/radio/radio.js`

### Toggle ✅
**Status:** Implemented
- On/off toggle switch
- Disabled state
- Size variants
- Component: `components/toggle/toggle.js`

### Input Dropdown ✅
**Status:** Implemented
- Select dropdown
- Searchable dropdown
- Multi-select dropdown
- Component: `components/dropdown/dropdown.js`

### Date Picker ✅
**Status:** Implemented
- Date selection
- Date range selection
- Calendar view
- Components: `components/date-picker/date-picker.js` and `components/mobile-date-picker/mobile-date-picker.js`

### Filter Chips ✅
**Status:** Implemented
- Filter selection chips
- Multiple selection
- Active/inactive states
- Component: `components/filter-chip/filter-chip.js`

## Feedback Components

### Alert ✅
**Status:** Implemented
- Success, warning, error, info variants
- Dismissible alerts
- Icon support
- Component: `components/alert/alert.js`

### Toast ✅
**Status:** Implemented
- Notification toasts
- Auto-dismiss
- Stack management
- Component: `components/toast/toast.js`

### Tooltip ✅
**Status:** Implemented
- Hover tooltips
- Position variants
- Rich content support
- Component: `components/tooltip/tooltip.js`

### Status Token ✅
**Status:** Implemented
- Status indicators
- Color-coded states
- Icon support
- Component: `components/status-token/status-token.js`

## Navigation Components

### Tabbed Navigation ✅
**Status:** Implemented
- Tab navigation
- Active state
- Disabled tabs
- Component: `components/tabs/tabs.js`

### Switcher ✅
**Status:** Implemented
- View switcher
- Option selection
- Active state
- Component: `components/switcher/switcher.js`

### Pagination ✅
**Status:** Implemented
- Page navigation
- Page numbers
- Previous/next controls
- Component: `components/pagination/pagination.js`

## Layout Components

### Dashboard Cards ✅
**Status:** Implemented
- Card container
- Header, body, footer sections
- Hover states
- Component: `components/card/card.js`

### Modal ✅
**Status:** Implemented
- Modal dialogs
- Overlay
- Close button
- Size variants
- Component: `components/modal/modal.js`

### Shelf ✅
**Status:** Implemented
- Side panel
- Slide-in animation
- Overlay
- Component: `components/shelf/shelf.js`

### Mobile Shelf ✅
**Status:** Implemented
- Mobile side panel
- Bottom sheet variant
- Touch gestures
- Component: `components/mobile-shelf/mobile-shelf.js`

### Accordion ✅
**Status:** Implemented
- Collapsible sections
- Single/multiple open
- Icon indicators
- Component: `components/accordion/accordion.js`

### Table ✅
**Status:** Implemented
- Data tables
- Sortable columns
- Row selection
- Pagination
- Component: `components/table/table.js`

## Utility Components

### Search Bar ✅
**Status:** Implemented
- Search input
- Clear button
- Loading state
- Results display
- Component: `components/search-bar/search-bar.js`

### Progress Tracker ✅
**Status:** Implemented
- Step indicator
- Progress bar
- Completion states
- Component: `components/progress-tracker/progress-tracker.js`

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
