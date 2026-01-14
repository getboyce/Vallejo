# Design Tokens

This document describes all design tokens available in the Vallejo Design System.

## Colors

### Primary Colors
- `--color-primary-50` through `--color-primary-900`: Primary color scale
- Default primary: `--color-primary-500` (#0EA5E9)

### Semantic Colors
- `--color-success`: Success/green color (#22C55E)
- `--color-warning`: Warning/yellow color (#F59E0B)
- `--color-error`: Error/red color (#EF4444)
- `--color-info`: Info/blue color (#3B82F6)

### Text Colors
- `--color-text-primary`: Primary text color (#111827)
- `--color-text-secondary`: Secondary text color (#6B7280)
- `--color-text-tertiary`: Tertiary text color (#9CA3AF)
- `--color-text-inverse`: Inverse text color (#FFFFFF)
- `--color-text-disabled`: Disabled text color (#D1D5DB)

### Background Colors
- `--color-background-default`: Default background (#FFFFFF)
- `--color-background-secondary`: Secondary background (#F9FAFB)
- `--color-background-tertiary`: Tertiary background (#F3F4F6)
- `--color-background-inverse`: Inverse background (#111827)

### Border Colors
- `--color-border-default`: Default border (#E5E7EB)
- `--color-border-light`: Light border (#F3F4F6)
- `--color-border-dark`: Dark border (#D1D5DB)
- `--color-border-focus`: Focus border (#3B82F6)

## Typography

### Font Families
- `--font-family-primary`: Primary font stack (system fonts)
- `--font-family-secondary`: Secondary font stack (serif)
- `--font-family-mono`: Monospace font stack

### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--font-size-6xl`: 3.75rem (60px)

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-extrabold`: 800

### Line Heights
- `--line-height-none`: 1
- `--line-height-tight`: 1.25
- `--line-height-snug`: 1.375
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.625
- `--line-height-loose`: 2

## Spacing

### Base Scale (4px base unit)
- `--spacing-0`: 0
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-5`: 1.25rem (20px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-10`: 2.5rem (40px)
- `--spacing-12`: 3rem (48px)
- `--spacing-16`: 4rem (64px)
- `--spacing-20`: 5rem (80px)
- `--spacing-24`: 6rem (96px)
- `--spacing-32`: 8rem (128px)

### Semantic Spacing
- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)
- `--spacing-3xl`: 4rem (64px)

## Shadows

### Base Shadows
- `--shadow-none`: No shadow
- `--shadow-sm`: Small shadow
- `--shadow-base`: Base shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow
- `--shadow-2xl`: 2X large shadow
- `--shadow-inner`: Inner shadow

### Component Shadows
- `--shadow-card`: Card shadow
- `--shadow-modal`: Modal shadow
- `--shadow-dropdown`: Dropdown shadow
- `--shadow-tooltip`: Tooltip shadow
- `--shadow-button-default`: Default button shadow
- `--shadow-button-hover`: Hover button shadow
- `--shadow-input-focus`: Input focus shadow
- `--shadow-input-error`: Input error shadow

## Usage

### In CSS
```css
.my-component {
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
}
```

### In JavaScript
```javascript
import { colors, spacing, shadows } from './tokens/index.js';

const primaryColor = colors.primary[500];
const mediumSpacing = spacing[4];
const cardShadow = shadows.card;
```

## Updating Tokens

To update design tokens from Figma:

1. Access the Figma file: `ixkN3RSoiQc5aSlxZ21Hay`
2. Extract token values from the design system
3. Update the corresponding token files in `tokens/`
4. Regenerate CSS files if needed

**Note:** Current token values are placeholders. Update them with actual values from your Figma design system.
