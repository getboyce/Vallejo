/**
 * Color Design Tokens
 * Extracted from Vallejo Design System Figma file
 * File: ixkN3RSoiQc5aSlxZ21Hay
 * Colors extracted from Figma screenshots
 */

export const colors = {
  // Primary colors (from Figma - blue scale)
  primary: {
    100: '#EBF0FD',
    200: '#ECF2FC',
    300: '#ACEBFA',
    400: '#2662D9',
    500: '#063598', // Updated to match Figma color/blues/500
    900: '#0F2757',
  },
  
  // Neutral colors (from Figma - complete gray ramp)
  neutral: {
    0: '#FFFFFF',   // color/light-mode/neutral/000
    100: '#F4F5F6', // color/light-mode/neutral/100
    200: '#E2E5E9', // color/light-mode/neutral/200
    300: '#C8CDD3', // color/light-mode/neutral/300
    350: '#8F959F', // color/light-mode/neutral/350
    400: '#4F525D', // color/light-mode/neutral/400
    500: '#2F333C', // color/light-mode/neutral/500
    900: '#1C1E26', // Copart Black (Gray 900)
  },
  
  // Semantic colors (from Figma - alert colors)
  alerts: {
    error: '#FCDEE9',
    success: '#D7E8D1',
    warning: '#FFF7D6',
    neutral: '#E0EBFF',
    errorText: '#C20022',  // Updated to match Figma variable: color/alerts/text/error
    successText: '#1B8900',
    warningText: '#705700',
    neutralText: '#0F2757',
  },
  
  // Legacy semantic color names for compatibility
  success: {
    background: '#D7E8D1',
    text: '#1B8900',
  },
  
  warning: {
    background: '#FFF7D6',
    text: '#705700',
  },
  
  error: {
    background: '#FCDEE9',
    text: '#C20022',  // Updated to match Figma variable: color/alerts/text/error
  },
  
  info: {
    background: '#E0EBFF',
    text: '#0F2757',
  },
  
  // Text colors (derived from neutral grays)
  text: {
    primary: '#2F333C',   // neutral/500
    secondary: '#4F525D', // neutral/400
    tertiary: '#8F959F',  // neutral/350
    inverse: '#FFFFFF',   // neutral/0
    disabled: '#C8CDD3',  // neutral/300
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
    dark: '#C8CDD3',     // neutral/300
    focus: '#2662D9',    // primary/400 (blue)
  },
  
  // Dark mode colors (from Figma)
  darkMode: {
    // Dark mode primary colors (blue)
    primary: {
      100: '#D8D8DC',
      200: '#D8D8DC',
      300: '#D8D8DC',
      400: '#92B0EC',
      500: '#92B0EC',
      600: '#0F2757',
    },
    // Dark mode neutral colors (gray)
    neutral: {
      0: '#FFFFFF',
      100: '#F4F5F6',
      200: '#D8D8DC',
      300: '#D8D8DC',
      350: '#363638',
      400: '#242426',
      500: '#1B1B1D',
    },
    // Dark mode alert colors
    alerts: {
      error: '#6E202F',
      success: '#1D5908',
      warning: '#705700',
      neutral: '#203050',
      errorText: '#FFA7B6',
      successText: '#B9EDA7',
      warningText: '#FCEFC3',
      neutralText: '#CBD9F6',
    },
  },
  
  // Brand colors (from Figma)
  brand: {
    copartBlue: '#2662D9',  // color/brand/copart-blue
    copartWhite: '#FFFFFF',  // color/brand/copart-white
    copartBlack: '#1C1E26',  // Copart Black (Gray 900)
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
    --color-primary-900: ${colors.primary[900]};
    
    /* Neutral Colors (Gray) */
    --color-neutral-0: ${colors.neutral[0]};
    --color-neutral-100: ${colors.neutral[100]};
    --color-neutral-200: ${colors.neutral[200]};
    --color-neutral-300: ${colors.neutral[300]};
    --color-neutral-350: ${colors.neutral[350]};
    --color-neutral-400: ${colors.neutral[400]};
    --color-neutral-500: ${colors.neutral[500]};
    --color-neutral-900: ${colors.neutral[900]};
    
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
    
    /* Dark Mode Colors - Primary (Blue) */
    --color-dark-mode-primary-100: ${colors.darkMode.primary[100]};
    --color-dark-mode-primary-200: ${colors.darkMode.primary[200]};
    --color-dark-mode-primary-300: ${colors.darkMode.primary[300]};
    --color-dark-mode-primary-400: ${colors.darkMode.primary[400]};
    --color-dark-mode-primary-500: ${colors.darkMode.primary[500]};
    --color-dark-mode-primary-600: ${colors.darkMode.primary[600]};
    
    /* Dark Mode Colors - Neutral (Gray) */
    --color-dark-mode-neutral-0: ${colors.darkMode.neutral[0]};
    --color-dark-mode-neutral-100: ${colors.darkMode.neutral[100]};
    --color-dark-mode-neutral-200: ${colors.darkMode.neutral[200]};
    --color-dark-mode-neutral-300: ${colors.darkMode.neutral[300]};
    --color-dark-mode-neutral-350: ${colors.darkMode.neutral[350]};
    --color-dark-mode-neutral-400: ${colors.darkMode.neutral[400]};
    --color-dark-mode-neutral-500: ${colors.darkMode.neutral[500]};
    
    /* Dark Mode Colors - Alerts */
    --color-dark-mode-alert-error: ${colors.darkMode.alerts.error};
    --color-dark-mode-alert-success: ${colors.darkMode.alerts.success};
    --color-dark-mode-alert-warning: ${colors.darkMode.alerts.warning};
    --color-dark-mode-alert-neutral: ${colors.darkMode.alerts.neutral};
    --color-dark-mode-alert-error-text: ${colors.darkMode.alerts.errorText};
    --color-dark-mode-alert-success-text: ${colors.darkMode.alerts.successText};
    --color-dark-mode-alert-warning-text: ${colors.darkMode.alerts.warningText};
    --color-dark-mode-alert-neutral-text: ${colors.darkMode.alerts.neutralText};
    
    /* Brand Colors */
    --color-brand-copart-blue: ${colors.brand.copartBlue};
    --color-brand-copart-white: ${colors.brand.copartWhite};
    --color-brand-copart-black: ${colors.brand.copartBlack};
  }
`;
