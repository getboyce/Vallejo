# Vehicle Details Page - Copart Concept

A concept design for a vehicle details page on Copart.com, built using the Vallejo Design System.

## Quick Start

### Option 1: Python HTTP Server (Recommended)

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000/vehicle-details.html

### Option 2: Node.js Server

```bash
node server.js
```

Then open: http://localhost:8000/vehicle-details.html

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `vehicle-details.html`
3. Select "Open with Live Server"

## Features

- **Vallejo Design System Header**: Styled header matching the Vallejo showcase design
- **Vehicle Image Gallery**: Main image display with thumbnail navigation
- **Vehicle Information**: Comprehensive details including make, model, year, VIN, etc.
- **Bidding Section**: Current bid display, bid input, and action buttons
- **Condition Report**: Tabbed interface for damage and condition information
- **Specifications Table**: Detailed vehicle specifications
- **Status Tokens**: Visual indicators for vehicle condition and highlights
- **Responsive Design**: Works on desktop and mobile devices

## Components Used

- Header (Vallejo style)
- Cards
- Buttons
- Inputs
- Tables
- Tabs
- Status Tokens
- Alerts

## Design System

This page uses components from the Vallejo Design System located at:
`./vallejo-design-system/`

All styling follows the design tokens defined in the Vallejo Design System for colors, typography, spacing, and shadows.