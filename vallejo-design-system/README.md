# Vallejo Design System

A comprehensive design system extracted from Figma and implemented in vanilla JavaScript/TypeScript. This repository serves as the single source of truth for all design tokens, components, and patterns used across Vallejo projects.

## 📁 Project Structure

```
vallejo-design-system/
├── tokens/              # Design tokens (colors, typography, spacing, shadows)
├── components/          # Reusable UI components
├── styles/              # Global styles and utilities
├── assets/              # Icons, logos, and other static assets
├── docs/                # Documentation and usage examples
└── examples/            # Example implementations
```

## 🚀 Quick Start

### Installation

```bash
# Clone or navigate to this repository
cd vallejo-design-system

# Install dependencies (if any)
npm install
```

### Usage

```html
<!-- Include the design system CSS -->
<link rel="stylesheet" href="./styles/main.css">

<!-- Include the design system JavaScript -->
<script src="./components/index.js"></script>
```

### View the Showcase

Open `showcase.html` in your browser to see all components, tokens, icons, and logos in action:

```bash
# Open in browser
open showcase.html
# or
python -m http.server 8000
# Then visit http://localhost:8000/showcase.html
```

The showcase page includes:
- All design tokens (colors, typography, spacing, shadows)
- All 28 components with interactive demos
- All 88 icons
- All logos with variants

## 📚 Documentation

- [Design Tokens](./docs/tokens.md) - Colors, typography, spacing, shadows
- [Components](./docs/components.md) - All available components
- [Usage Guidelines](./docs/usage.md) - Best practices and patterns
- [Cursor Integration](./docs/cursor-integration.md) - Instructions for Cursor sessions

## 🎨 Components

### Foundation
- Typography
- Icons
- Logos

### Forms
- Buttons
- Inputs
- Checkboxes
- Radio Buttons
- Toggles
- Input Dropdowns
- Date Pickers
- Filter Chips

### Feedback
- Alerts
- Toasts
- Tooltips
- Status Tokens

### Navigation
- Tabbed Navigation
- Switcher
- Pagination

### Layout
- Dashboard Cards
- Modals
- Shelves
- Mobile Shelf
- Accordions
- Tables

### Utilities
- Search Bar
- Progress Tracker

## 🔧 Development

This design system is built with vanilla JavaScript/TypeScript to ensure maximum compatibility and minimal dependencies.

## 📝 License

[Add your license here]
