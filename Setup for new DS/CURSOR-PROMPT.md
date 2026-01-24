# Cursor Prompt: Vallejo Design System

**Complete instructions for using the Vallejo Design System within Cursor IDE — for Copart.com UI.**

---

## **System Context**

You are working with the **Vallejo Design System**, the **production design system for [Copart.com](https://www.copart.com)**. Vallejo powers the live Copart.com UI: vehicle search, auctions, bidding, member dashboards, payments, and all customer-facing interfaces.

**Always use Vallejo** when building UI that will ship on Copart.com. **Do not** use vanilla Tailwind, Bootstrap, or custom design systems for Copart.com — use Vallejo only so the UI matches production and stays consistent.

### **Copart.com Domains**
- **Auctions** — bidding, lot details, sale times, buyer/seller flows
- **Vehicle Search** — filters, results tables, listing cards, status (Running, Sold, Preview)
- **Member Experience** — login, registration, account, watchlist, order history
- **Dashboards** — metrics, alerts, activity, notifications
- **Modals & Overlays** — confirmations, forms, details panels

### **Key Information**
- **Brand Color**: Copart Blue `#2662D9`
- **Font**: Inter (with sans-serif fallback)
- **Approach**: Component-based with utility classes
- **Philosophy**: Clean, professional, accessible, consistent with Copart.com

---

## **Essential Files to Reference**

When working with Vallejo, always reference these files in priority order:

1. **`AI-QUICK-REFERENCE.md`** - ⭐ **MOST IMPORTANT** - All component classes and HTML structures
2. **`test-examples/all-components-demo.html`** - Working implementations of all components
3. **`components/catalog.json`** - Component index with Figma references
4. **`LAYOUT-PATTERNS.md`** - Common layout templates
5. **`tokens/*.json`** - Design token values (colors, typography, spacing). See **`tokens/README.md`** for token hierarchy (primitive → semantic → component).
6. **`docs/design-system-guide.md`** - **Usage guidelines**: “When to use” per component, **anti-patterns**, and best practices. **Check this when choosing components** (e.g. Modal vs Shelf, primary vs secondary vs subtle buttons).

---

## **Component Implementation Strategy**

### **Always Use This HTML Structure Pattern:**

```html
<!-- 1. Container with semantic class -->
<div class="[component-container-class]">
    
    <!-- 2. Label/Header (if applicable) -->
    <label class="[component-label-class]">Label Text</label>
    
    <!-- 3. Main component with state classes -->
    <element class="[base-class] [variant-class] [size-class]" [attributes]>
        
        <!-- 4. Icon (if applicable) -->
        <span data-icon="icon-name" data-icon-size="size" data-icon-class="icon-class"></span>
        
        <!-- 5. Content/Text -->
        Content
    </element>
    
    <!-- 6. Supporting text (if applicable) -->
    <div class="[supporting-text-class]">Supporting text</div>
</div>
```

### **Core Component Classes:**

**Buttons:**
- Base: `btn`
- Variants: `btn-default-type` (primary) | `btn-secondary` | `btn-subtle`
- Sizes: `btn-small` | default | `btn-large` | `btn-extra-large`
- Container: `btn-default` (required with variant)

**Inputs:**
- Container: `input-group`
- Label: `input-label`
- Input: `input input-field`
- States: `input-error` (add to input)
- Supporting: `input-error-message` | `input-supporting-text`

**Status Tokens:**
- Base: `status-token`
- Variants: `status-token-success` | `status-token-warning` | `status-token-error` | `status-token-neutral`
- Style: `status-token-filled` | `status-token-outlined`
- Label: `status-token-label`

**Cards:**
- Container: `dashboard-card` | `card`
- Header: `card-header`
- Title: `card-title`
- Content: `card-content` | `card-body`

---

## **Implementation Guidelines**

### **1. Always Include Required Classes**
Never use partial class names. Each component needs its complete class structure:

```html
<!-- ✅ CORRECT -->
<button class="btn btn-default btn-default-type">Primary Button</button>

<!-- ❌ WRONG -->
<button class="btn">Primary Button</button>
```

### **2. Use Design Tokens for Custom Styling**
When custom styling is needed, use CSS variables:

```css
.custom-element {
    color: var(--color-brand-copart-blue);
    font-size: var(--typography-font-size-400);
    margin: var(--spacing-16);
    border-radius: var(--border-radius-200);
}
```

### **3. Icon Implementation**
Always use the data-icon pattern with proper sizing:

```html
<!-- Standard icon -->
<span data-icon="search" data-icon-size="24"></span>

<!-- Icon with custom class -->
<span data-icon="close" data-icon-size="16" data-icon-class="modal-close-icon"></span>

<!-- Icon in component -->
<button class="btn btn-default btn-default-type">
    <span data-icon="plus" data-icon-size="24"></span>
    Add Item
</button>
```

### **4. Form Field Pattern**
Always follow this exact structure for form fields:

```html
<div class="input-group">
    <label class="input-label" for="field-id">Field Label</label>
    <input type="text" id="field-id" class="input input-field" placeholder="Placeholder text">
    <div class="input-supporting-text">Supporting text or error message</div>
</div>
```

### **5. Responsive Considerations**
Use these patterns for responsive layouts:

```html
<!-- Mobile-first approach -->
<div class="container">
    <!-- Stack on mobile, grid on desktop -->
    <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-24);">
        <div class="dashboard-card">Card 1</div>
        <div class="dashboard-card">Card 2</div>
    </div>
</div>
```

### **6. Usage Guidelines (When Choosing Components)**
Before picking a component, check **`docs/design-system-guide.md`**:
- **“When to use”** — e.g. primary vs secondary vs subtle buttons; Modal vs Shelf; alert types.
- **“Anti-patterns”** — don’t create custom components when Vallejo has one; don’t hardcode values; don’t mix design systems; don’t skip accessibility.

---

## **Common Patterns & Templates**

### **Login Form:**
```html
<div class="login-form" style="max-width: 400px; margin: 0 auto;">
    <h2 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-32);">Sign In</h2>
    
    <div class="input-group">
        <label class="input-label" for="email">Email Address</label>
        <input type="email" id="email" class="input input-field" placeholder="Enter your email" required>
    </div>
    
    <div class="input-group">
        <label class="input-label" for="password">Password</label>
        <input type="password" id="password" class="input input-field" placeholder="Enter your password" required>
    </div>
    
    <button type="submit" class="btn btn-default btn-default-type btn-large" style="width: 100%;">Sign In</button>
</div>
```

### **Dashboard Grid:**
```html
<div class="dashboard-container">
    <h1 style="color: var(--color-brand-copart-black); margin-bottom: var(--spacing-40);">Dashboard</h1>
    
    <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-24);">
        
        <div class="dashboard-card">
            <div class="card-header">
                <h3 class="card-title">Card Title</h3>
            </div>
            <div class="card-content">
                <p>Card content with status</p>
                <div class="status-token status-token-success status-token-filled">
                    <span data-icon="check" data-icon-size="16"></span>
                    <span class="status-token-label">Active</span>
                </div>
            </div>
        </div>
        
        <!-- Repeat for more cards -->
    </div>
</div>
```

### **Modal Dialog:**
```html
<div id="modal-id" class="modal-overlay" style="display: none;">
    <div class="modal">
        <div class="modal-header">
            <h3 class="modal-title">Confirm Action</h3>
            <button class="modal-close" onclick="closeModal('modal-id')" aria-label="Close modal">
                <span data-icon="close" data-icon-size="16"></span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to perform this action?</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-default btn-secondary" onclick="closeModal('modal-id')">Cancel</button>
            <button class="btn btn-default btn-default-type" onclick="confirmAction()">Confirm</button>
        </div>
    </div>
</div>
```

### **Alert Message:**
```html
<div class="alert alert-warning-light" style="margin-bottom: var(--spacing-24);">
    <span data-icon="warning" data-icon-size="20" data-icon-class="alert-icon"></span>
    <div class="alert-content">
        <strong class="alert-title">Warning</strong>
        <p class="alert-message">This action cannot be undone.</p>
    </div>
    <button class="alert-close" aria-label="Close alert">
        <span data-icon="close" data-icon-size="16"></span>
    </button>
</div>
```

---

## **Design Token Usage**

### **Most Common CSS Variables:**

**Colors:**
```css
color: var(--color-brand-copart-blue);        /* #2662D9 - Primary brand */
color: var(--color-brand-copart-black);       /* #2F333C - Primary text */
color: var(--color-light-neutral-400);        /* #46525D - Secondary text */
background: var(--color-brand-copart-white);   /* #FFFFFF - Backgrounds */
border-color: var(--color-light-neutral-300); /* #C5CCD3 - Borders */
```

**Typography:**
```css
font-family: var(--typography-font-family-base); /* Inter */
font-size: var(--typography-font-size-400);      /* 16px - Body text */
font-size: var(--typography-font-size-300);      /* 14px - Small text */
font-weight: var(--typography-weight-medium);    /* 500 - Medium weight */
```

**Spacing:**
```css
margin: var(--spacing-16);     /* 16px - Standard spacing */
padding: var(--spacing-24);    /* 24px - Card padding */
gap: var(--spacing-8);         /* 8px - Small gaps */
```

**Border Radius:**
```css
border-radius: var(--border-radius-200);  /* 8px - Standard */
border-radius: var(--border-radius-small); /* 4px - Small elements */
```

---

## **Accessibility Requirements**

### **Always Include:**
1. **Proper Labels**: All form fields need associated labels
2. **ARIA Attributes**: Use `aria-label` for icon buttons
3. **Focus States**: Components automatically include focus styles
4. **Color Contrast**: All colors meet WCAG AA standards
5. **Keyboard Navigation**: Ensure tab order makes sense

```html
<!-- ✅ ACCESSIBLE FORM FIELD -->
<div class="input-group">
    <label class="input-label" for="unique-id">Email Address *</label>
    <input 
        type="email" 
        id="unique-id" 
        class="input input-field" 
        placeholder="Enter your email"
        required
        aria-describedby="email-help"
    >
    <div id="email-help" class="input-supporting-text">We'll never share your email</div>
</div>

<!-- ✅ ACCESSIBLE ICON BUTTON -->
<button class="btn btn-default btn-secondary btn-icon-only" aria-label="Close dialog">
    <span data-icon="close" data-icon-size="24"></span>
</button>
```

---

## **Error Handling & States**

### **Form Validation:**
```html
<!-- Error state input -->
<div class="input-group">
    <label class="input-label" for="email">Email Address</label>
    <input type="email" id="email" class="input input-field input-error" aria-invalid="true" aria-describedby="email-error">
    <div id="email-error" class="input-error-message">Please enter a valid email address</div>
</div>
```

### **Button States:**
```html
<!-- Disabled button -->
<button class="btn btn-default btn-default-type" disabled>Loading...</button>

<!-- Active/pressed button -->
<button class="btn btn-default btn-default-type active">Selected</button>
```

---

## **File Structure Best Practices**

When creating new components or pages:

### **HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    
    <!-- Include Vallejo CSS if external -->
    <link rel="stylesheet" href="path/to/vallejo.css">
    
    <!-- Or embed styles from demo -->
    <style>
        /* Copy relevant CSS from all-components-demo.html */
    </style>
</head>
<body>
    <!-- Use Vallejo components -->
    
    <script>
        /* Copy relevant JavaScript from all-components-demo.html */
    </script>
</body>
</html>
```

### **React/Vue Components:**
```jsx
// Use CSS modules or styled-components with Vallejo classes
import './vallejo.css';

function MyComponent() {
    return (
        <button className="btn btn-default btn-default-type">
            Click Me
        </button>
    );
}
```

---

## **Common Troubleshooting**

### **Components Not Styling Correctly:**
1. Check that all required classes are included
2. Verify CSS is loaded properly
3. Ensure no conflicting styles override Vallejo classes
4. Reference the working demo for exact HTML structure

### **Icons Not Appearing:**
1. Confirm the icon name exists in the icon library
2. Check that the icon rendering JavaScript is loaded
3. Verify `data-icon-size` is specified
4. Ensure the icon is in the VallejoIcons object

### **Layout Issues:**
1. Use CSS Grid or Flexbox for layouts, not floats
2. Apply consistent spacing using CSS variables
3. Test responsive behavior on mobile devices
4. Use the layout patterns as starting points

---

## **Quick Reference Commands (Copart.com UI)**

When working in Cursor on Copart.com UI, use these patterns:

**Generate a Copart.com component:**
```
Create a [component type] for Copart.com using Vallejo Design System. Use the exact class structure from AI-QUICK-REFERENCE.md. This will ship on Copart.com.
```

**Copart.com-specific flows:**
```
Build a [vehicle search results table / bid confirmation modal / member dashboard / watchlist card] for Copart.com using Vallejo. Reference LAYOUT-PATTERNS.md and AI-QUICK-REFERENCE.md.
```

**Style with tokens:**
```
Apply Vallejo design tokens for spacing, colors, and typography. Use CSS variables from the tokens directory. This UI targets Copart.com.
```

**Check implementation:**
```
Verify this implementation matches Vallejo component structure in test-examples/all-components-demo.html and is suitable for Copart.com production.
```

---

## **Success Criteria**

A successful Vallejo implementation for Copart.com should:
- ✅ Use exact component class structures from AI-QUICK-REFERENCE.md
- ✅ Follow accessibility guidelines  
- ✅ Apply design tokens consistently
- ✅ Match the visual design in Figma and Copart.com production
- ✅ Work responsively across device sizes
- ✅ Include proper interactive states
- ✅ Fit Copart.com use cases (auctions, vehicles, members, dashboards)

**When in doubt, reference the working demo in `test-examples/all-components-demo.html` for the exact implementation pattern.**