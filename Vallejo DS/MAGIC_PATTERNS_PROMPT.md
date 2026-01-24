# Magic Patterns Prompt: Vallejo Design System

Use this prompt with Magic Patterns to generate prototypes that follow the Vallejo Design System specifications **for [Copart.com](https://www.copart.com) production UI**.

---

## Production Context: Copart.com

**Vallejo is the production design system for Copart.com.** Use it when generating:
- UI for Copart.com (vehicle search, auctions, bidding, member dashboards, payments)
- Prototypes or concepts that must match the live Copart.com experience
- Internal tools or marketing pages that align with Copart branding

**Do not** use generic design systems or arbitrary styling for Copart.com UI — use Vallejo only so output matches production.

---

## Design System Overview

**System Name**: Vallejo Design System  
**Version**: 1.0  
**Production**: Copart.com  
**Primary Brand Color**: Copart Blue (#2662D9)  
**Font Family**: Inter (sans-serif fallback)  
**Design Philosophy**: Clean, professional, accessible, consistent with Copart.com

---

## Design Tokens

### Colors

#### Brand Colors
- **Copart Blue**: `#2662D9` - Primary brand color, use for primary actions, links, brand elements
- **Copart White**: `#FFFFFF` - Brand white
- **Copart Black**: `#2F333C` - Brand black, primary text color

#### Light Mode - Neutral Grays
- **Gray 000 (Pure White)**: `#FFFFFF` - Backgrounds, card backgrounds
- **Gray 100**: `#F4F5F6` - Light backgrounds, subtle dividers
- **Gray 200**: `#E2E5E9` - Light gray borders and dividers
- **Gray 300**: `#C5CCD3` - Input borders, subtle borders
- **Gray 350**: `#6C7073` - Medium gray for secondary elements
- **Gray 400**: `#46525D` - Inactive text, disabled states, placeholder text
- **Gray 500**: `#2F333C` - Primary text color, body text, headlines

#### Light Mode - Blues
- **Blue 100**: `#F6F9FD` - Very light blue backgrounds
- **Blue 200**: `#EEF2FC` - Light blue backgrounds
- **Blue 300**: `#E1E9FA` - Light blue backgrounds, hover states for secondary buttons
- **Blue 400**: `#2662D9` - Primary blue, links, matches brand blue
- **Blue 500**: `#063598` - Darker blue variant
- **Blue 600**: `#0F2757` - Dark blue, neutral alert text

#### Alert Colors (Light Mode)
- **Error Text**: `#C20022`
- **Error Background**: `#FCE5E9`
- **Warning Text**: `#705700`
- **Warning Background**: `#FFF7D1`
- **Success Text**: `#1B6600`
- **Success Background**: `#D7E8D1`
- **Neutral/Info Text**: `#0F2757`
- **Neutral/Info Background**: `#E0EBFF`

### Typography

#### Font Family
- **Base Font**: Inter, sans-serif

#### Font Sizes
- **12px** (200): Body 3, Body 4, Tooltip, Labels, Form Fields
- **14px** (300): Body 2, Button Small, Labels
- **16px** (400): Body 1, Header 4, Button Medium, Button Large
- **20px** (500): Header 3, Button Extra Large
- **22px** (550): Header 2
- **40px** (600): Header 1
- **56px** (700): Hero

#### Font Weights
- **Regular (400)**: Body 3, Label 3
- **Medium (500)**: Body 1, Body 2 M, Body 4, Header 3, Buttons
- **Semibold (600)**: Body 2 SB, Form Field, Button Large, Button Extra Large
- **Bold (700)**: Header 2, Header 4, Label 1, Label 2
- **Extrabold (800)**: Hero, Header 1

#### Line Heights
- **17px** (100): Tooltip
- **18px** (200): Label 2, Label 3, Form Field
- **20px** (300): Body 2, Button Small, Label 1
- **22px** (400): Body 1, Header 4
- **28px** (500): Header 3, Button Extra Large
- **32px** (550): Header 2
- **48px** (600): Header 1
- **64px** (700): Hero

#### Type Scale (Complete Styles)
- **Hero**: 56px / 800 weight / 64px line-height
- **Header 1**: 40px / 800 weight / 48px line-height
- **Header 2**: 22px / 700 weight / 32px line-height
- **Header 3**: 20px / 500 weight / 28px line-height
- **Header 4**: 16px / 700 weight / 22px line-height
- **Body 1**: 16px / 500 weight / 22px line-height
- **Body 2 M**: 14px / 500 weight / 20px line-height
- **Body 2 SB**: 14px / 600 weight / 20px line-height
- **Body 3**: 12px / 400 weight / 16px line-height
- **Body 4**: 12px / 500 weight / 16px line-height
- **Label 1**: 14px / 700 weight / 20px line-height
- **Label 2**: 12px / 700 weight / 18px line-height
- **Label 3**: 12px / 400 weight / 18px line-height
- **Form Field**: 12px / 600 weight / 18px line-height
- **Button Small**: 14px / 500 weight / 20px line-height
- **Button Medium**: 16px / 500 weight / 22px line-height
- **Button Large**: 16px / 600 weight / 22px line-height
- **Button Extra Large**: 20px / 600 weight / 28px line-height
- **Tooltip**: 12px / 500 weight / 17px line-height

### Spacing

#### Grid System
- **4px**: Minimal spacing, tight gaps, shadow spread
- **12px**: Small spacing, component padding, tight gaps
- **20px**: Medium spacing, section gaps
- **24px**: Standard spacing, card padding, section spacing
- **32px**: Large spacing, major section gaps

#### Common Spacing Values
- **2px**: Minimal spacing, icon gaps
- **4px**: Tight spacing, minimal gaps
- **6px**: Small gaps, related elements
- **8px**: Small spacing, form field gaps
- **10px**: Small-medium spacing
- **12px**: Standard small spacing, component padding
- **16px**: Standard spacing, button gaps, form spacing
- **20px**: Medium spacing, section gaps
- **24px**: Standard spacing, card padding, form gaps
- **32px**: Large spacing, major section gaps, page padding
- **40px**: Extra large spacing, page sections
- **48px**: Maximum spacing, hero sections
- **64px**: Maximum spacing, large page sections

### Border Radius
- **None**: 0px - Square corners
- **Small**: 4px - Badges, small elements
- **Medium (200)**: 8px - Standard for buttons, inputs, cards
- **Large (300)**: 12px - Large border radius for cards, containers
- **Extra Large**: 24px - Hero sections, large containers
- **Round**: 50% - Fully rounded, circles, pills

### Shadows
- **Light**: `0px 3px 30px 0px rgba(230, 230, 230, 0.7)` - Subtle elevation, input fields, subtle depth
- **Medium**: `-2px 3px 30px 0px rgba(70, 82, 93, 0.12)` - Standard elevation, cards, buttons with elevation
- **Dark**: `-4px 6px 30px 4px rgba(108, 112, 115, 0.2)` - Elevated elements, cards higher on page, modals

---

## Component Specifications

### Buttons

#### Variants
1. **Default (Primary)**
   - Background: `#2662D9` (Copart Blue)
   - Text: `#FFFFFF` (White)
   - Border: None
   - Hover: `#063598` (Blue 500)
   - Disabled: `#E1E9FA` (Blue 300) background, white text

2. **Secondary**
   - Background: Transparent
   - Text: `#2662D9` (Copart Blue)
   - Border: `1px solid #2662D9`
   - Hover: `#E1E9FA` (Blue 300) background
   - Disabled: `#C5CCD3` (Gray 300) border and text

3. **Subtle**
   - Background: `#E2E5E9` (Gray 200)
   - Text: `#2F333C` (Gray 500)
   - Border: None
   - Hover: `#C5CCD3` (Gray 300) background
   - Disabled: `#F4F5F6` (Gray 100) background, `#C5CCD3` (Gray 300) text

#### Sizes
- **Small**: Height ~32px, padding 8px 16px, 14px font, 500 weight
- **Default**: Height ~40px, padding 12px 24px, 16px font, 500 weight
- **Large**: Height ~48px, padding 14px 28px, 16px font, 600 weight
- **Extra Large**: Height ~56px, padding 16px 32px, 20px font, 600 weight

#### Icon Variants
- **Leading Icon**: Icon before text, 8px gap between icon and text
- **Trailing Icon**: Icon after text, 8px gap between icon and text

#### Border Radius
- All buttons: `8px` (medium/200)

#### States
- **Default**: Standard styling
- **Hover**: Darker background/border, smooth transition (0.2s ease)
- **Disabled**: Muted colors, reduced opacity, cursor: not-allowed

### Input Fields

#### Base Styling
- **Border Radius**: `8px`
- **Padding**: `12px 16px` (vertical horizontal)
- **Font**: 16px / 500 weight / 22px line-height (Body 1)
- **Background**: `#FFFFFF` (White)
- **Text Color**: `#2F333C` (Gray 500)

#### Border Colors by State
- **Default**: `#C5CCD3` (Gray 300)
- **Focused**: `#2662D9` (Copart Blue)
- **Filled (with text)**: `#2F333C` (Gray 500)
- **Error**: `#C20022` (Error Red)
- **Disabled**: `#C5CCD3` (Gray 300)

#### Label Styling
- **Font**: 12px / 600 weight / 18px line-height (Form Field)
- **Color (Default)**: `#2F333C` (Gray 500)
- **Color (Error)**: `#C20022` (Error Red)
- **Color (Disabled)**: `#46525D` (Gray 400)
- **Margin Bottom**: 8px

#### Supporting Text / Error Message
- **Font**: 12px / 400 weight (regular) or 600 weight (error) / 18px line-height
- **Color (Default)**: `#46525D` (Gray 400)
- **Color (Error)**: `#C20022` (Error Red)
- **Margin Top**: 8px

#### Disabled State
- **Background**: `#F4F5F6` (Gray 100)
- **Border**: `#C5CCD3` (Gray 300)
- **Text**: `#46525D` (Gray 400)
- **Cursor**: not-allowed

#### Icons
- **Size**: 16px × 16px
- **Search Icon (Leading)**: 
  - Default: `#46525D` (Gray 400)
  - Focused: `#2662D9` (Copart Blue)
  - Error: `#C20022` (Error Red)
- **Clear Icon (Trailing)**: `#46525D` (Gray 400) or error color
- **Error Icon (Trailing)**: `#C20022` (Error Red)
- **Icon Padding**: 16px from edge

### Cards

#### Dashboard Cards
- **Background**: `#FFFFFF` (White)
- **Border Radius**: `8px` or `12px` (medium or large)
- **Padding**: `24px` (standard)
- **Shadow**: Medium shadow for elevation
- **Border**: Optional, use Gray 200 for subtle separation

### Alerts

#### Error Alert
- **Background**: `#FCE5E9` (Error Background)
- **Text**: `#C20022` (Error Text)
- **Border**: Optional, 1px solid error color
- **Icon**: Error icon in error color

#### Warning Alert
- **Background**: `#FFF7D1` (Warning Background)
- **Text**: `#705700` (Warning Text)
- **Border**: Optional, 1px solid warning color
- **Icon**: Warning icon in warning color

#### Success Alert
- **Background**: `#D7E8D1` (Success Background)
- **Text**: `#1B6600` (Success Text)
- **Border**: Optional, 1px solid success color
- **Icon**: Success icon in success color

#### Info/Neutral Alert
- **Background**: `#E0EBFF` (Neutral Background)
- **Text**: `#0F2757` (Neutral Text)
- **Border**: Optional, 1px solid neutral color
- **Icon**: Info icon in neutral color

### Typography Usage

#### Headers
- Use **Hero** (56px) sparingly for main page headlines
- Use **Header 1** (40px) for main page or section titles
- Use **Header 2** (22px) for section headers
- Use **Header 3** (20px) for subsection headers
- Use **Header 4** (16px) for small section headers

#### Body Text
- Use **Body 1** (16px) for primary body text, general content
- Use **Body 2 M** (14px) or **Body 2 SB** (14px) for dashboard cards, secondary content
- Use **Body 3** (12px) or **Body 4** (12px) for small text, alerts, captions

#### Labels
- Use **Label 1** (14px) for large labels, important form labels
- Use **Label 2** (12px) for standard labels
- Use **Label 3** (12px) for small labels, secondary labels
- Use **Form Field** (12px) for form field labels

---

## Layout Guidelines

### Spacing Between Elements
- **Related Elements**: 8px - 12px gap
- **Form Fields**: 24px bottom margin between fields
- **Sections**: 32px - 40px gap between major sections
- **Cards**: 24px padding inside cards, 20px - 24px gap between cards
- **Buttons**: 16px gap between buttons in a group

### Container Widths
- **Max Content Width**: Consider 1200px - 1440px for desktop
- **Card Widths**: Flexible, but maintain consistent grid
- **Form Widths**: 400px - 600px for optimal readability

### Grid System
- Use 4px base grid for alignment
- Common column gaps: 12px, 20px, 24px, 32px
- Maintain consistent spacing rhythm

---

## Component Patterns

### Form Pattern
1. **Form Field Label** (12px, 600 weight, Gray 500, 8px bottom margin)
2. **Input Component** (with appropriate state styling)
3. **Supporting Text or Error Message** (12px, 8px top margin)
4. **Submit Button** (Primary, Default or Large size)
5. **Cancel Button** (Secondary, if needed)

### Card Pattern
1. **Card Container** (White background, 8px-12px border radius, 24px padding, medium shadow)
2. **Card Header** (Header 3 or Header 4, Gray 500)
3. **Card Content** (Body 2 typography, appropriate spacing)
4. **Card Actions** (Buttons if needed, 16px gap)

### Button Group Pattern
- **Primary Action**: Default button, larger size
- **Secondary Action**: Secondary button, same or smaller size
- **Gap**: 16px between buttons
- **Alignment**: Left-aligned or right-aligned based on context

---

## Visual Style Principles

### Color Usage
- **Primary Actions**: Always use Copart Blue (#2662D9)
- **Text Hierarchy**: Gray 500 for primary text, Gray 400 for secondary/inactive
- **Borders**: Gray 300 for default, Copart Blue for focused/active
- **Backgrounds**: White for cards/content, Gray 100 for subtle backgrounds

### Typography Hierarchy
- Use larger, bolder text for more important information
- Maintain consistent type scale usage
- Ensure sufficient contrast (WCAG AA minimum)

### Spacing Rhythm
- Maintain consistent spacing using the spacing tokens
- Increase spacing for visual separation
- Decrease spacing for related elements

### Border Radius
- Use 8px for most interactive elements (buttons, inputs)
- Use 12px for cards and containers
- Use 4px for small elements like badges
- Use 50% for circular elements

### Shadows
- Use light shadow for subtle elevation (inputs)
- Use medium shadow for standard elevation (cards)
- Use dark shadow for high elevation (modals, dropdowns)

---

## Accessibility Requirements

### Color Contrast
- Ensure all text meets WCAG AA contrast ratios
- Primary text (Gray 500 on White): ✓ Meets requirements
- Secondary text (Gray 400 on White): ✓ Meets requirements
- Primary button (White on Copart Blue): ✓ Meets requirements

### Interactive Elements
- Minimum touch target: 44px × 44px
- Clear focus states (blue border for inputs, visible outline for buttons)
- Keyboard navigation support

### ARIA Attributes
- Include proper labels for all form fields
- Use aria-required for required fields
- Use aria-invalid for error states
- Include aria-labels for icon-only buttons

---

## Responsive Considerations

### Desktop
- Use full component variants
- Utilize larger spacing (32px, 40px for sections)
- Show all navigation options
- Use desktop-specific components

### Mobile
- Reduce spacing where appropriate (20px, 24px for sections)
- Stack elements vertically
- Use touch-friendly target sizes (minimum 44px)
- Consider full-width buttons for primary actions
- Use mobile-optimized components

---

## Common Prototype Patterns

### Login Form
- Header 1 or Header 2 for title
- Form fields with labels (Email, Password)
- Primary submit button (Default variant, Large size)
- Secondary link/button for "Forgot password"
- Spacing: 24px between fields, 32px before submit button

### Dashboard
- Header 1 for page title
- Dashboard cards in grid layout (2-3 columns on desktop)
- Cards with Header 3 or Header 4 titles
- Body 2 typography for content
- 24px gap between cards
- 40px spacing between sections

### Data Table
- Header 2 or Header 3 for table title
- Table with Header 4 or Label 1 for column headers
- Body 1 or Body 2 for table content
- Pagination component at bottom
- 32px spacing above and below table

### Modal Dialog
- White background, 12px border radius
- Dark shadow for elevation
- Header 2 or Header 3 for title
- Body 1 for content
- Primary and Secondary buttons at bottom
- 24px padding inside modal
- 32px gap between title and content
- 24px gap between content and buttons

---

## Implementation Notes for Magic Patterns

When generating **Copart.com** prototypes:

1. **Target Copart.com** — Output is for Copart.com UI (auctions, vehicles, members, dashboards). Use Vallejo only.
2. **Always use the exact color values** specified in this document
3. **Follow the typography scale** exactly as specified
4. **Use spacing tokens** consistently (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px)
5. **Apply border radius** as specified (8px for buttons/inputs, 12px for cards)
6. **Include hover states** for interactive elements
7. **Show disabled states** when relevant
8. **Use appropriate shadows** for elevation
9. **Maintain consistent spacing** between related elements
10. **Follow component patterns** as outlined
11. **Ensure accessibility** with proper contrast and focus states

---

## Quick Reference: Most Common Values

### Colors
- Primary: `#2662D9`
- Primary Text: `#2F333C`
- Secondary Text: `#46525D`
- Border Default: `#C5CCD3`
- Background: `#FFFFFF`
- Error: `#C20022`

### Typography
- Body Text: 16px / 500 weight / 22px line-height
- Headers: 40px (H1), 22px (H2), 20px (H3), 16px (H4)
- Labels: 12px / 600 weight / 18px line-height

### Spacing
- Small: 8px
- Standard: 16px, 24px
- Large: 32px, 40px

### Border Radius
- Standard: 8px
- Large: 12px

---

**End of Prompt**

Use this guide when generating **Copart.com** prototypes with Magic Patterns. All output should follow Vallejo Design System specifications and be suitable for Copart.com production UI.
