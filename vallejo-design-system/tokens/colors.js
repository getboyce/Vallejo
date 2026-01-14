/**
 * Color Design Tokens
 * Extracted from Vallejo Design System Figma file
 * File: ixkN3RSoiQc5aSlxZ21Hay
 * Colors extracted from Figma screenshots
 */

export const colors = {
  // Primary colors (from Figma - blue scale)
  primary: {
    100: '#F6F9FD',
    200: '#EEF2FC',
    300: '#E1E9FA',
    400: '#2662D9',
    500: '#063598',
    600: '#0F2757',
  },
  
  // Neutral colors (from Figma - complete gray ramp)
  neutral: {
    0: '#FFFFFF',   // color/light-mode/neutral/000
    100: '#F4F5F6', // color/light-mode/neutral/100
    200: '#E2E5E9', // color/light-mode/neutral/200
    300: '#C5CCD3', // color/light-mode/neutral/300
    350: '#6C7073', // color/light-mode/neutral/350
    400: '#46525D', // color/light-mode/neutral/400
    500: '#2F333C', // color/light-mode/neutral/500
  },
  
  // Semantic colors (from Figma - alert colors)
  alerts: {
    error: '#FCE5E9',
    success: '#D7E8D1',
    warning: '#FFF7D1',
    neutral: '#E0EBFF',
    errorText: '#C20022',
    successText: '#1B6600',
    warningText: '#705700',
    neutralText: '#0F2757',
  },
  
  // Legacy semantic color names for compatibility
  success: {
    background: '#D7E8D1',
    text: '#1B6600',
  },
  
  warning: {
    background: '#FFF7D1',
    text: '#705700',
  },
  
  error: {
    background: '#FCE5E9',
    text: '#C20022',
  },
  
  info: {
    background: '#E0EBFF',
    text: '#0F2757',
  },
  
  // Text colors (derived from neutral grays)
  text: {
    primary: '#2F333C',   // neutral/500
    secondary: '#46525D', // neutral/400
    tertiary: '#6C7073',  // neutral/350
    inverse: '#FFFFFF',   // neutral/0
    disabled: '#C5CCD3',  // neutral/300
  },
  
  // Background colors (derived from neutral grays)
  background: {
    default: '#FFFFFF',  // neutral/0
    secondary: '#F4F5F6', // neutral/100
    tertiary: '#E2E5E9',  // neutral/200
    inverse: '#2F333C',   // neutral/500
  },
  
  // Border colors (derived from neutral grays and primary blue)
  border: {
    default: '#E2E5E9',  // neutral/200
    light: '#F4F5F6',    // neutral/100
    dark: '#C5CCD3',     // neutral/300
    focus: '#2662D9',    // primary/400 (blue)
  },
};

// CSS Custom Properties export
export const colorsCSS = `
  :root {
    /* Primary Colors (Blue) */
    --color-primary-100: ${colors.primary[100]};
    --color-primary-200: ${colors.primary[200]};
    --color-primary-300: ${colors.primary[300]};
    --color-primary-400: ${colors.primary[400]};
    --color-primary-500: ${colors.primary[500]};
    --color-primary-600: ${colors.primary[600]};
    
    /* Neutral Colors (Gray) */
    --color-neutral-0: ${colors.neutral[0]};
    --color-neutral-100: ${colors.neutral[100]};
    --color-neutral-200: ${colors.neutral[200]};
    --color-neutral-300: ${colors.neutral[300]};
    --color-neutral-350: ${colors.neutral[350]};
    --color-neutral-400: ${colors.neutral[400]};
    --color-neutral-500: ${colors.neutral[500]};
    
    /* Alert Colors */
    --color-alert-error: ${colors.alerts.error};
    --color-alert-success: ${colors.alerts.success};
    --color-alert-warning: ${colors.alerts.warning};
    --color-alert-neutral: ${colors.alerts.neutral};
    --color-alert-error-text: ${colors.alerts.errorText};
    --color-alert-success-text: ${colors.alerts.successText};
    --color-alert-warning-text: ${colors.alerts.warningText};
    --color-alert-neutral-text: ${colors.alerts.neutralText};
    
    /* Semantic Colors (for compatibility) */
    --color-success: ${colors.success.text};
    --color-success-background: ${colors.success.background};
    --color-warning: ${colors.warning.text};
    --color-warning-background: ${colors.warning.background};
    --color-error: ${colors.error.text};
    --color-error-background: ${colors.error.background};
    --color-info: ${colors.info.text};
    --color-info-background: ${colors.info.background};
    
    /* Text Colors */
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-tertiary: ${colors.text.tertiary};
    --color-text-inverse: ${colors.text.inverse};
    --color-text-disabled: ${colors.text.disabled};
    
    /* Background Colors */
    --color-background-default: ${colors.background.default};
    --color-background-secondary: ${colors.background.secondary};
    --color-background-tertiary: ${colors.background.tertiary};
    --color-background-inverse: ${colors.background.inverse};
    
    /* Border Colors */
    --color-border-default: ${colors.border.default};
    --color-border-light: ${colors.border.light};
    --color-border-dark: ${colors.border.dark};
    --color-border-focus: ${colors.border.focus};
  }
`;
