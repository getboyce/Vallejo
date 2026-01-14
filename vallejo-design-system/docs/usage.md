# Usage Guidelines

This document provides best practices and guidelines for using the Vallejo Design System.

## Getting Started

### 1. Include the Design System

**Option A: Full Design System (Recommended)**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/path/to/vallejo-design-system/styles/main.css">
</head>
<body>
  <!-- Your content -->
  
  <script type="module">
    import { initAll } from '/path/to/vallejo-design-system/components/index.js';
    initAll();
  </script>
</body>
</html>
```

**Option B: Individual Components**
```html
<link rel="stylesheet" href="/path/to/vallejo-design-system/components/button/button.css">
<script type="module">
  import { Button } from '/path/to/vallejo-design-system/components/button/button.js';
  Button.init();
</script>
```

### 2. Use Design Tokens

Always use design tokens instead of hardcoded values:

```css
/* ✅ Good */
.my-component {
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
}

/* ❌ Bad */
.my-component {
  color: #111827;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### 3. Use Components

Use components from the design system rather than building from scratch:

```html
<!-- ✅ Good -->
<button class="vds-button vds-button--primary" data-vds-component="button">
  Submit
</button>

<!-- ❌ Bad -->
<button style="background: blue; color: white; padding: 10px;">
  Submit
</button>
```

## Best Practices

### 1. Consistency
- Always use design system components
- Follow naming conventions (`vds-` prefix)
- Use semantic HTML

### 2. Accessibility
- Include ARIA attributes where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

### 3. Performance
- Import only what you need
- Use CSS custom properties for theming
- Minimize JavaScript when possible

### 4. Responsive Design
- Use mobile-first approach
- Test on multiple screen sizes
- Use utility classes for responsive behavior

## Component Usage Patterns

### Buttons

```html
<!-- Primary button -->
<button class="vds-button vds-button--primary" data-vds-component="button">
  Primary Action
</button>

<!-- Secondary button -->
<button class="vds-button vds-button--secondary" data-vds-component="button">
  Secondary Action
</button>

<!-- Loading state -->
<button 
  class="vds-button vds-button--primary" 
  data-vds-component="button"
  data-loading="true"
>
  Loading...
</button>
```

### Inputs

```html
<!-- Basic input -->
<div class="vds-input-wrapper">
  <input 
    type="text" 
    class="vds-input" 
    data-vds-component="input"
    placeholder="Enter text"
  />
</div>

<!-- Input with error -->
<div class="vds-input-wrapper">
  <input 
    type="email" 
    class="vds-input vds-input--error" 
    data-vds-component="input"
    data-error="true"
    placeholder="Email"
  />
</div>
```

### Forms

```html
<form>
  <div class="vds-input-wrapper">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email"
      class="vds-input" 
      data-vds-component="input"
      required
    />
  </div>
  
  <button 
    type="submit" 
    class="vds-button vds-button--primary" 
    data-vds-component="button"
  >
    Submit
  </button>
</form>
```

## Customization

### Theming

Override CSS custom properties for theming:

```css
:root {
  --color-primary-500: #your-color;
  --font-family-primary: 'Your Font', sans-serif;
}
```

### Component Variants

Create custom variants by extending component classes:

```css
.vds-button--custom {
  background-color: var(--color-custom);
  /* Add custom styles */
}
```

## Common Patterns

### Card Layout

```html
<div class="vds-card" style="padding: var(--spacing-6); box-shadow: var(--shadow-card);">
  <h3>Card Title</h3>
  <p>Card content</p>
  <button class="vds-button vds-button--primary" data-vds-component="button">
    Action
  </button>
</div>
```

### Form Layout

```html
<form class="vds-form" style="max-width: 500px;">
  <div class="vds-input-wrapper" style="margin-bottom: var(--spacing-4);">
    <label for="name">Name</label>
    <input 
      type="text" 
      id="name"
      class="vds-input" 
      data-vds-component="input"
    />
  </div>
  
  <div class="vds-input-wrapper" style="margin-bottom: var(--spacing-6);">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email"
      class="vds-input" 
      data-vds-component="input"
      required
    />
  </div>
  
  <button 
    type="submit" 
    class="vds-button vds-button--primary" 
    data-vds-component="button"
  >
    Submit
  </button>
</form>
```

## Troubleshooting

### Components Not Initializing

1. Check that JavaScript is loaded as ES module (`type="module"`)
2. Verify component has `data-vds-component` attribute
3. Check browser console for errors
4. Ensure CSS is loaded before JavaScript

### Styles Not Applying

1. Verify CSS file is included
2. Check for CSS specificity conflicts
3. Ensure CSS custom properties are defined
4. Check browser DevTools for computed styles

### Design Tokens Not Working

1. Verify tokens CSS is loaded
2. Check that custom properties are defined in `:root`
3. Use browser DevTools to inspect variable values
4. Ensure no conflicting CSS overrides

## Support

For questions or issues:
1. Check component documentation in `docs/components.md`
2. Review design tokens in `docs/tokens.md`
3. Check examples in `examples/` directory
4. Review Cursor integration guide in `docs/cursor-integration.md`
