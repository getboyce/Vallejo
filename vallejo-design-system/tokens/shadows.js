/**
 * Shadow Design Tokens
 * Extracted from Vallejo Design System Figma file
 * File: ixkN3RSoiQc5aSlxZ21Hay
 * Node: 755-588
 */

export const shadows = {
  // Elevation levels
  none: 'none',
  
  // Figma Dropshadow tokens (from node 755-588)
  light: '0 3px 30px 0 rgba(230, 230, 230, 0.7)', // Dropshadow/Light: #E6E6E6B2, offset (0, 3), radius 30
  medium: '-2px 3px 30px 0 rgba(70, 82, 93, 0.12)', // Dropshadow/Medium: #46525D1F, offset (-2, 3), radius 30
  dark: '-4px 6px 30px 4px rgba(108, 112, 115, 0.2)', // Dropshadow/Dark: #6C707333, offset (-4, 6), radius 30, spread 4
  
  // Legacy shadow names (for compatibility)
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  
  // Component-specific shadows (using Figma Dropshadow tokens)
  card: '0 3px 30px 0 rgba(230, 230, 230, 0.7)', // Dropshadow/Light
  cardHover: '-2px 3px 30px 0 rgba(70, 82, 93, 0.12)', // Dropshadow/Medium
  
  modal: '-4px 6px 30px 4px rgba(108, 112, 115, 0.2)', // Dropshadow/Dark
  
  dropdown: '-2px 3px 30px 0 rgba(70, 82, 93, 0.12)', // Dropshadow/Medium
  
  tooltip: '0 3px 30px 0 rgba(230, 230, 230, 0.7)', // Dropshadow/Light
  
  button: {
    default: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    hover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    active: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    focus: '0 0 0 3px rgba(38, 98, 217, 0.5)',
  },
  
  toggle: {
    thumb: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  },
  
  input: {
    default: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    focus: '0 0 0 3px rgba(38, 98, 217, 0.1)',
    error: '0 0 0 3px rgba(194, 0, 34, 0.1)',
  },
  
  focusRingLg: '0 0 0 4px rgba(38, 98, 217, 0.1)',
};

// CSS Custom Properties export
export const shadowsCSS = `
  :root {
    /* Base Shadows */
    --shadow-none: ${shadows.none};
    --shadow-sm: ${shadows.sm};
    --shadow-base: ${shadows.base};
    --shadow-md: ${shadows.md};
    --shadow-lg: ${shadows.lg};
    --shadow-xl: ${shadows.xl};
    --shadow-2xl: ${shadows['2xl']};
    --shadow-inner: ${shadows.inner};
    
    /* Component Shadows */
    --shadow-card: ${shadows.card};
    --shadow-modal: ${shadows.modal};
    --shadow-dropdown: ${shadows.dropdown};
    --shadow-tooltip: ${shadows.tooltip};
    
    /* Button Shadows */
    --shadow-button-default: ${shadows.button.default};
    --shadow-button-hover: ${shadows.button.hover};
    --shadow-button-active: ${shadows.button.active};
    --shadow-button-focus: ${shadows.button.focus};
    --shadow-toggle-thumb: ${shadows.toggle.thumb};
    
    /* Input Shadows */
    --shadow-input-default: ${shadows.input.default};
    --shadow-input-focus: ${shadows.input.focus};
    --shadow-input-error: ${shadows.input.error};
    --shadow-focus-ring-lg: ${shadows.focusRingLg};
  }
`;
