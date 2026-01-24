# Vallejo AI Quick Reference

**Essential component classes for AI tools to generate Copart.com UI using the Vallejo Design System.**

---

## **Production: Copart.com**

Vallejo is the **production design system for [Copart.com](https://www.copart.com)**. Use these classes **only** when building UI for:

- **Copart.com** (auctions, vehicle search, member dashboards, bidding, payments)
- **Copart-related** prototypes, internal tools, or marketing pages that must match the live site

**Do not** use Vallejo for non-Copart projects. **Do not** mix with generic Tailwind or other design systems when targeting Copart.com.

---

## Buttons

### Base Structure
```html
<button class="btn [type] [size]">Button Text</button>
```

### Types (Choose One)
- **Primary**: `btn btn-default btn-default-type`
- **Secondary**: `btn btn-default btn-secondary`  
- **Subtle**: `btn btn-subtle`

### Sizes (Optional)
- **Small**: Add `btn-small` (32px height)
- **Default**: No additional class (40px height)
- **Large**: Add `btn-large` (48px height)
- **Extra Large**: Add `btn-extra-large` (56px height)

### With Icons
- **Leading Icon**: `<span data-icon="icon-name" data-icon-size="24"></span>` before text
- **Trailing Icon**: `<span data-icon="icon-name" data-icon-size="24"></span>` after text
- **Icon Only**: Add `btn-icon-only` + `aria-label="Description"`

### States
- **Disabled**: Add `disabled` attribute
- **Active**: Add `active` class

---

## Input Fields

### Basic Input
```html
<div class="input-group">
    <label class="input-label">Label Text</label>
    <input type="text" class="input input-field" placeholder="Placeholder">
</div>
```

### Input Variants
- **Default**: `input input-field`
- **Error State**: `input input-field input-error`
- **Disabled**: Add `disabled` attribute

### Input with Icons
```html
<!-- Search Input -->
<div class="input-container">
    <span data-icon="search" data-icon-size="16" data-icon-class="input-icon"></span>
    <input type="text" class="input input-field" placeholder="Search">
</div>

<!-- Input with Clear Button -->
<div class="input-container">
    <input type="text" class="input input-field" placeholder="Enter text">
    <div class="input-trailing">
        <span data-icon="close-circle" data-icon-size="24" data-icon-class="input-clear-icon"></span>
    </div>
</div>
```

### Input States Classes
- **Label**: `input-label` (required above input)
- **Error Message**: `input-error-message` (below input)
- **Supporting Text**: `input-supporting-text` (below input)

---

## Status Tokens

### Structure
```html
<div class="status-token [variant] [style]">
    [optional icon wrapper]
    <span class="status-token-label">Status Text</span>
</div>
```

### Variants (Choose One)
- **Success**: `status-token status-token-success status-token-filled`
- **Warning**: `status-token status-token-warning status-token-filled`
- **Error**: `status-token status-token-error status-token-filled`
- **Neutral**: `status-token status-token-neutral status-token-filled`

### Styles (Alternative to filled)
- **Outlined**: Replace `status-token-filled` with `status-token-outlined`

### With Icons
```html
<div class="status-token status-token-success status-token-filled">
    <span data-icon="check" data-icon-size="16" data-icon-class="status-token-icon"></span>
    <span class="status-token-label">Active</span>
</div>
```

---

## Cards & Containers

### Dashboard Card
```html
<div class="dashboard-card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
    </div>
    <div class="card-content">
        <!-- Card content -->
    </div>
</div>
```

### Basic Card
```html
<div class="card">
    <div class="card-body">
        <!-- Content -->
    </div>
</div>
```

---

## Alerts

### Structure
```html
<div class="alert [variant]">
    <span data-icon="[icon-name]" data-icon-size="20" data-icon-class="alert-icon"></span>
    <div class="alert-content">
        <strong class="alert-title">Alert Title</strong>
        <p class="alert-message">Alert message text</p>
    </div>
    <button class="alert-close" aria-label="Close alert">
        <span data-icon="close" data-icon-size="16"></span>
    </button>
</div>
```

### Alert Variants
- **Success**: `alert alert-success-light`
- **Warning**: `alert alert-warning-light`
- **Error**: `alert alert-error-light`
- **Info**: `alert alert-info-light`

### Alert Icons by Type
- **Success**: `data-icon="check-circle"`
- **Warning**: `data-icon="warning"`
- **Error**: `data-icon="error"`
- **Info**: `data-icon="info"`

---

## Navigation & Tabs

### Tabbed Navigation
```html
<div class="tabs-container">
    <div class="tabs-list" role="tablist">
        <button class="tab-item active" role="tab">Tab 1</button>
        <button class="tab-item" role="tab">Tab 2</button>
        <button class="tab-item" role="tab">Tab 3</button>
    </div>
    <div class="tab-content">
        <!-- Tab content -->
    </div>
</div>
```

### Site Header (Vallejo)
- **Root**: `vallejo-header` — primary site header with logo, nav, search, auth, language selector.
- **Structure**: `vallejo-header__main` → `vallejo-header__container` (logo, primary nav, search, utilities). Responsive: mobile toggle, mobile search, mobile menu.
- **Key classes**: `vallejo-header__logo`, `vallejo-header__primary-nav`, `vallejo-header__search`, `vallejo-header__utilities`, `vallejo-header__mobile-toggle`, `vallejo-header__mobile-menu`.
- **Full implementation**: `test-examples/header-demo.html`. **Class reference**: `components/catalog.json` → `componentClasses.header`.

---

## Tables

### Basic Table
```html
<div class="table-container">
    <table class="table">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </tbody>
    </table>
</div>
```

---

## Form Controls

### Checkboxes
```html
<div class="checkbox-wrapper">
    <label class="checkbox-label">
        <input type="checkbox" class="checkbox-input">
        <div class="checkbox-visual">
            <span data-icon="check" data-icon-size="12" data-icon-class="checkbox-checkmark"></span>
        </div>
        <span class="checkbox-text">Checkbox Label</span>
    </label>
</div>
```

### Radio Buttons
```html
<div class="radio-wrapper">
    <label class="radio-label">
        <input type="radio" name="radio-group" class="radio-input">
        <div class="radio-visual"></div>
        <span class="radio-text">Radio Label</span>
    </label>
</div>
```

### Toggle Switch
```html
<div class="toggle-wrapper">
    <label class="toggle-label">
        <input type="checkbox" class="toggle-input">
        <div class="toggle-visual">
            <div class="toggle-handle"></div>
        </div>
        <span class="toggle-text">Toggle Label</span>
    </label>
</div>
```

---

## Modals

### Modal Structure
```html
<div id="modal-id" class="modal-overlay">
    <div class="modal">
        <div class="modal-header">
            <h3 class="modal-title">Modal Title</h3>
            <button class="modal-close" aria-label="Close modal">
                <span data-icon="close" data-icon-size="16"></span>
            </button>
        </div>
        <div class="modal-body">
            <p>Modal content</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-default btn-secondary">Cancel</button>
            <button class="btn btn-default btn-default-type">Confirm</button>
        </div>
    </div>
</div>
```

---

## Layout Classes

### Spacing Classes
- **Section**: `section` (32px bottom margin)
- **Input Group**: `input-group` (24px bottom margin)
- **Control Group**: `control-group` (16px bottom margin)
- **Button Group**: `btn-group` (16px gap between buttons)

### Container Classes
- **Page Container**: `page-container` (max-width + center)
- **Content Container**: `content-container` (padding)
- **Grid Container**: `grid-container` (CSS grid layout)

---

## Icons

### Icon Usage
```html
<span data-icon="icon-name" data-icon-size="24" [data-icon-class="custom-class"]></span>
```

### Common Icons
- **check** - Success/completion
- **clock** - Time/waiting
- **warning** - Alerts/errors
- **info** - Information
- **close** - Close/cancel
- **search** - Search functionality
- **chevron-down** - Dropdowns
- **chevron-right** - Navigation
- **plus** - Add actions
- **edit** - Edit actions
- **trash** - Delete actions

### Icon Sizes
- **Small**: `data-icon-size="16"`
- **Medium**: `data-icon-size="24"` (default)
- **Large**: `data-icon-size="32"`

---

## Quick Copy Blocks

Use these for Copart.com auth, dashboards, and common flows. Adjust copy and fields as needed.

### Login Form (Copart.com)
```html
<div class="login-form">
    <div class="input-group">
        <label class="input-label">Email</label>
        <input type="email" class="input input-field" placeholder="Enter your email" required>
    </div>
    <div class="input-group">
        <label class="input-label">Password</label>
        <input type="password" class="input input-field" placeholder="Enter your password" required>
    </div>
    <button type="submit" class="btn btn-default btn-default-type btn-large">Sign In</button>
</div>
```

### Dashboard Card (e.g. Copart member stats, watchlist)
```html
<div class="dashboard-card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
    </div>
    <div class="card-content">
        <p>Card content goes here</p>
        <div class="status-token status-token-success status-token-filled">
            <span data-icon="check" data-icon-size="16"></span>
            <span class="status-token-label">Active</span>
        </div>
    </div>
</div>
```

### Alert Message
```html
<div class="alert alert-warning-light">
    <span data-icon="warning" data-icon-size="20" data-icon-class="alert-icon"></span>
    <div class="alert-content">
        <strong class="alert-title">Warning</strong>
        <p class="alert-message">This is a warning message.</p>
    </div>
    <button class="alert-close" aria-label="Close alert">
        <span data-icon="close" data-icon-size="16"></span>
    </button>
</div>
```

---

## Design Tokens (CSS Variables)

### Colors
- **Primary Brand**: `var(--color-brand-copart-blue)` (#2662D9)
- **Primary Text**: `var(--color-brand-copart-black)` (#2F333C)
- **Secondary Text**: `var(--color-light-neutral-400)` (#46525D)
- **Border Color**: `var(--color-light-neutral-300)` (#C5CCD3)
- **Background**: `var(--color-brand-copart-white)` (#FFFFFF)

### Typography
- **Body Text**: `var(--typography-font-size-400)` (16px)
- **Small Text**: `var(--typography-font-size-300)` (14px)
- **Large Text**: `var(--typography-font-size-500)` (20px)
- **Font Family**: `var(--typography-font-family-base)` (Inter)

### Spacing
- **Small**: `var(--spacing-8)` (8px)
- **Medium**: `var(--spacing-16)` (16px)
- **Large**: `var(--spacing-24)` (24px)
- **Extra Large**: `var(--spacing-32)` (32px)

### Border Radius
- **Small**: `var(--border-radius-small)` (4px)
- **Medium**: `var(--border-radius-200)` (8px)
- **Round**: `var(--border-radius-round)` (50%)