# Vallejo Design System - Icon System Guide

## Overview

The Vallejo Design System includes a comprehensive icon library with 50+ icons extracted from Figma. All icons are available as inline SVGs and can be used consistently throughout the design system.

## Icon Library Location

- **JSON Definition**: `tokens/icons.json` - Complete icon library with all SVG paths
- **JavaScript Implementation**: Embedded in `test-examples/all-components-demo.html`
- **Figma Source**: Node ID `854-2692` - [Icon Library](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=854-2692&m=dev)

## Using Icons

### Method 1: Data Attributes (Recommended for Static HTML)

Use `data-icon` attributes which are automatically converted to SVG icons on page load:

```html
<!-- Basic usage -->
<span data-icon="close"></span>

<!-- With custom size -->
<span data-icon="search" data-icon-size="16"></span>

<!-- With CSS classes -->
<span data-icon="chevron-down" data-icon-size="16" data-icon-class="accordion-icon"></span>

<!-- White icon for colored backgrounds -->
<span data-icon="check" data-icon-size="10" style="color: white;"></span>
```

### Method 2: JavaScript Function (For Dynamic Content)

Use the `renderIcon()` function in JavaScript:

```javascript
// Basic usage
const icon = renderIcon('close');

// With options
const icon = renderIcon('search', {
    size: 16,
    className: 'search-icon',
    ariaHidden: true
});

// Insert into DOM
element.innerHTML = icon;
```

## Available Icons

### Navigation & Actions
- `close` - Close/X icon
- `close-circle` - Close in circle
- `chevron-up` - Up chevron
- `chevron-down` - Down chevron
- `chevron-left` - Left chevron
- `chevron-right` - Right chevron
- `arrow-up` - Up arrow
- `arrow-down` - Down arrow
- `arrow-left` - Left arrow
- `arrow-right` - Right arrow
- `external-link` - External link icon

### Search & Filter
- `search` - Magnifying glass
- `filter` - Filter/funnel icon

### Status & Feedback
- `check` - Checkmark
- `check-circle` - Checkmark in circle
- `success` - Success checkmark (alias for check-circle)
- `warning` - Warning triangle
- `error` - Error circle
- `info` - Information circle
- `clock` - Clock/time icon

### User & Account
- `user` - User profile
- `settings` - Settings/gear
- `lock` - Lock/padlock
- `unlock` - Unlock icon

### Content & Media
- `heart` - Heart (outline)
- `heart-filled` - Filled heart
- `star` - Star (outline)
- `star-filled` - Filled star
- `image` - Image/photo
- `camera` - Camera icon
- `file` - File/document
- `folder` - Folder icon

### Actions
- `plus` - Plus/add
- `minus` - Minus/remove
- `edit` - Edit/pencil
- `trash` - Delete/trash
- `copy` - Copy/duplicate
- `download` - Download
- `upload` - Upload
- `refresh` - Refresh/reload

### Communication
- `mail` - Email/envelope
- `bell` - Notification bell
- `home` - Home icon
- `link` - Link/chain

### Commerce
- `shopping-cart` - Shopping cart
- `credit-card` - Credit card
- `map-pin` - Location pin
- `truck` - Delivery truck
- `flag` - Flag icon
- `flag-us` - United States flag icon

### Other
- `menu` - Hamburger menu
- `more` - More options (three dots horizontal)
- `more-vertical` - More options (three dots vertical)
- `question-circle` - Question mark in circle
- `check-square` - Check in square
- `square` - Empty square
- `calendar` - Calendar icon
- `eye` - Eye/view
- `eye-off` - Eye off/hide

## Icon Naming Convention

Icons are named using kebab-case (e.g., `chevron-down`, `shopping-cart`). When looking for an icon:

1. **Check the icon library first** - Always use Vallejo icons before creating custom SVGs
2. **Use descriptive names** - Icon names describe their function (e.g., `close`, `search`, `check`)
3. **Check aliases** - Some icons have aliases (see `tokens/icons.json` for full list)

## Examples

### Close Button
```html
<button aria-label="Close">
    <span data-icon="close" data-icon-size="16"></span>
</button>
```

### Search Input
```html
<div class="input-container">
    <span data-icon="search" data-icon-size="16" data-icon-class="input-icon"></span>
    <input type="search" placeholder="Search...">
</div>
```

### Status Token with Icon
```html
<div class="status-token status-token-success">
    <div class="status-token-icon-circle">
        <span data-icon="check" data-icon-size="10" style="color: white;"></span>
    </div>
    <span>Active</span>
</div>
```

### Alert with Icon
```html
<div class="alert alert-success">
    <span data-icon="check-circle" data-icon-size="20" data-icon-class="alert-icon"></span>
    <div class="alert-content">
        <div class="alert-title">Success</div>
        <p>Operation completed successfully.</p>
    </div>
</div>
```

### Button with Icon
```html
<button class="btn btn-default">
    <span data-icon="heart" data-icon-size="24" data-icon-class="btn-icon"></span>
    Add to Favorites
</button>
```

## Icon Sizing

Icons use a consistent viewBox of `0 0 24 24` but can be sized using the `data-icon-size` attribute:

- **16px** - Small icons (inputs, buttons, close buttons)
- **20px** - Medium icons (alerts, toasts)
- **24px** - Default size (buttons, general use)
- **Custom** - Any size as needed

## Color

Icons use `currentColor` by default, which means they inherit the text color of their parent element. To override:

```html
<!-- Inherit color (default) -->
<span data-icon="close"></span>

<!-- White icon -->
<span data-icon="check" style="color: white;"></span>

<!-- Custom color -->
<span data-icon="search" style="color: #2662D9;"></span>
```

## Accessibility

Icons are automatically marked with `aria-hidden="true"` when using the icon system. For icons that convey meaning:

```html
<!-- Decorative icon (hidden from screen readers) -->
<button>
    <span data-icon="close"></span>
    Close
</button>

<!-- Icon with meaning (include text or aria-label) -->
<button aria-label="Search">
    <span data-icon="search"></span>
</button>
```

## Adding New Icons

To add a new icon to the system:

1. Extract the SVG path from Figma
2. Add to `tokens/icons.json`:
```json
"icon-name": {
    "name": "Icon Name",
    "aliases": ["alias1", "alias2"],
    "viewBox": "0 0 24 24",
    "path": "<path d=\"...\" stroke=\"currentColor\" .../>",
    "description": "Icon description"
}
```
3. Add to `VallejoIcons` object in the demo file
4. Update this documentation

## Best Practices

1. **Always use Vallejo icons** - Check the icon library before using custom SVGs
2. **Consistent sizing** - Use standard sizes (16px, 20px, 24px) when possible
3. **Semantic usage** - Use icons that match their function (e.g., `close` for close buttons, `search` for search)
4. **Accessibility** - Include text labels or aria-labels for icon-only buttons
5. **Color inheritance** - Use `currentColor` to match text color automatically

## Integration with Components

All components in the design system now use the icon system:

- **Buttons** - Leading and trailing icons
- **Inputs** - Leading search icons, trailing clear buttons
- **Alerts** - Status icons (success, warning, error, info)
- **Status Tokens** - Icons in colored circles
- **Accordions** - Chevron icons
- **Progress Tracker** - Checkmark icons for completed steps
- **Modals/Shelves** - Close buttons
- **Dropdowns** - Chevron indicators
- **Date Picker** - Calendar and checkmark icons
- **Toasts** - Status and close icons

## Figma Reference

- **Icon Library Node ID**: `854-2692`
- **Figma Link**: [Icon Library](https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?node-id=854-2692&m=dev)

## Related Documentation

- [Component Catalog](../components/catalog.json) - All components
- [Design System Guide](./design-system-guide.md) - Overall system documentation
- [Icon Tokens](../tokens/icons.json) - Complete icon library JSON
