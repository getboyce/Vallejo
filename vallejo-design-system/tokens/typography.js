/**
 * Typography Design Tokens
 * Extracted from Vallejo Design System Figma file
 * File: ixkN3RSoiQc5aSlxZ21Hay
 * Node: 25-90
 */

export const typography = {
  // Font Families (from Figma)
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    secondary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'Inter, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },
  
  // Font Sizes (from Figma - Typography/Font Size tokens)
  fontSize: {
    xs: '0.75rem',    // 12px - Typography/Font Size/200
    sm: '0.875rem',   // 14px - Typography/Font Size/300
    base: '1rem',     // 16px - Typography/Font Size/400
    lg: '1.25rem',    // 20px - Typography/Font Size/500
    xl: '1.375rem',   // 22px - Typography/Font Size/550
    '2xl': '2.5rem',  // 40px - Header 1
    '3xl': '1.75rem', // 28px - Header 2
    '4xl': '3.5rem',  // 56px - Hero
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '10px': '0.625rem', // 10px - Body 4, Label 3
    '18px': '1.125rem', // 18px - Button Large
    '20px': '1.25rem',  // 20px - Button Extra Large
  },
  
  // Font Weights (from Figma - Typography/Weight tokens)
  fontWeight: {
    light: '300',
    normal: '400',    // Typography/Weight/Regular
    medium: '500',   // Typography/Weight/Medium
    semibold: '600', // Typography/Weight/Semibold
    bold: '700',     // Typography/Weight/Bold
    extrabold: '800', // Typography/Weight/Extra Bold (Label 1)
  },
  
  // Line Heights (from Figma - exact pixel values)
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    // Exact Figma line heights
    '16px': '1rem',   // Body 4, Tooltip, Label 3
    '17px': '1.0625rem', // Tooltip (alternative)
    '18px': '1.125rem', // Body 3, Label 2, Form Field
    '20px': '1.25rem',  // Body 2 M, Label 1, Button Small
    '22px': '1.375rem', // Body 1, Header 4, Button Medium, Button Large
    '24px': '1.5rem',   // Header 3, Button Extra Large
    '28px': '1.75rem',  // Header 1
    '32px': '2rem',     // Header 2
    '48px': '3rem',     // Header 1
    '64px': '4rem',     // Hero
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Text Styles (from Figma - Desktop text styles)
  styles: {
    // Headers
    headerMedium: {
      fontSize: '1.25rem', // Typography/Font Size/500 (20px)
      fontWeight: '500',   // Typography/Weight/Medium
      lineHeight: '28',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    headerSmall: {
      fontSize: '1rem',     // Typography/Font Size/400 (16px)
      fontWeight: '700',    // Typography/Weight/Bold
      lineHeight: '22',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Body
    body1: {
      fontSize: '1rem',     // Typography/Font Size/400
      fontWeight: '500',    // Typography/Weight/Medium
      lineHeight: '22',     // Typography/Line Height/400
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    bodyMedium: {
      fontSize: '0.875rem',  // Typography/Font Size/300 (14px)
      fontWeight: '500',    // Typography/Weight/Medium
      lineHeight: '20',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    bodySmallLight: {
      fontSize: '0.75rem',  // Typography/Font Size/200 (12px)
      fontWeight: '400',    // Typography/Weight/Regular
      lineHeight: '18',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    bodySmallMedium: {
      fontSize: '0.75rem',  // Typography/Font Size/200
      fontWeight: '500',    // Typography/Weight/Medium
      lineHeight: '18',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Labels
    labelLarge: {
      fontSize: '1rem',
      fontWeight: '700',    // Typography/Weight/Bold
      lineHeight: '20',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    labelMedium: {
      fontSize: '0.875rem',
      fontWeight: '700',   // Typography/Weight/Bold
      lineHeight: '18',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    labelSmall: {
      fontSize: '0.75rem',  // Typography/Font Size/200
      fontWeight: '400',    // Typography/Weight/Regular
      lineHeight: '18',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Buttons
    buttonSmall: {
      fontSize: '0.875rem',  // Typography/Font Size/300
      fontWeight: '500',     // Typography/Weight/Medium
      lineHeight: '20',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    buttonMedium: {
      fontSize: '1rem',      // Typography/Font Size/400
      fontWeight: '500',     // Typography/Weight/Medium
      lineHeight: '22',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    buttonLarge: {
      fontSize: '1rem',       // 16px - Updated to match Figma and CSS implementation
      fontWeight: '600',      // Typography/Weight/Semibold
      lineHeight: '22px',     // 22px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    buttonExtraLarge: {
      fontSize: '1.25rem',   // 20px - Typography/Font Size/500
      fontWeight: '600',     // Typography/Weight/Semibold
      lineHeight: '28px',    // 28px - matches Figma Desktop/Button Extra Large
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Headers
    hero: {
      fontSize: '3.5rem',    // 56px
      fontWeight: '700',     // Typography/Weight/Bold
      lineHeight: '64px',    // 64px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    header2: {
      fontSize: '1.75rem',   // 28px
      fontWeight: '700',     // Typography/Weight/Bold
      lineHeight: '32px',    // 32px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Body variants
    body4: {
      fontSize: '0.625rem',  // 10px
      fontWeight: '500',     // Typography/Weight/Medium
      lineHeight: '16px',     // 16px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Labels
    label1: {
      fontSize: '0.875rem',  // 14px
      fontWeight: '800',     // Typography/Weight/Extra Bold
      lineHeight: '20px',     // 20px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    label2: {
      fontSize: '0.75rem',   // 12px
      fontWeight: '700',      // Typography/Weight/Bold
      lineHeight: '18px',     // 18px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    label3: {
      fontSize: '0.625rem',  // 10px
      fontWeight: '600',      // Typography/Weight/Semibold
      lineHeight: '16px',     // 16px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Form
    formField: {
      fontSize: '0.75rem',   // 12px
      fontWeight: '600',     // Typography/Weight/Semibold
      lineHeight: '18px',     // 18px
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Tooltip
    tooltip: {
      fontSize: '0.75rem',   // 12px
      fontWeight: '500',      // Typography/Weight/Medium
      lineHeight: '16px',     // 16px (or 17px per Figma)
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Form
    formField: {
      fontSize: '0.75rem',   // Typography/Font Size/200
      fontWeight: '600',     // Typography/Weight/Semibold
      lineHeight: '18',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
    // Tooltip
    tooltip: {
      fontSize: '0.75rem',   // Typography/Font Size/200
      fontWeight: '500',     // Typography/Weight/Medium
      lineHeight: '17',
      letterSpacing: '0',
      fontFamily: 'Inter',
    },
  },
};

// CSS Custom Properties export
export const typographyCSS = `
  :root {
    /* Font Families */
    --font-family-primary: ${typography.fontFamily.primary};
    --font-family-secondary: ${typography.fontFamily.secondary};
    --font-family-mono: ${typography.fontFamily.mono};
    
    /* Font Sizes */
    --font-size-xs: ${typography.fontSize.xs};
    --font-size-sm: ${typography.fontSize.sm};
    --font-size-base: ${typography.fontSize.base};
    --font-size-lg: ${typography.fontSize.lg};
    --font-size-xl: ${typography.fontSize.xl};
    --font-size-2xl: ${typography.fontSize['2xl']};
    --font-size-3xl: ${typography.fontSize['3xl']};
    --font-size-4xl: ${typography.fontSize['4xl']};
    --font-size-5xl: ${typography.fontSize['5xl']};
    --font-size-6xl: ${typography.fontSize['6xl']};
    
    /* Font Weights */
    --font-weight-light: ${typography.fontWeight.light};
    --font-weight-normal: ${typography.fontWeight.normal};
    --font-weight-medium: ${typography.fontWeight.medium};
    --font-weight-semibold: ${typography.fontWeight.semibold};
    --font-weight-bold: ${typography.fontWeight.bold};
    
    /* Line Heights */
    --line-height-none: ${typography.lineHeight.none};
    --line-height-tight: ${typography.lineHeight.tight};
    --line-height-normal: ${typography.lineHeight.normal};
    --line-height-relaxed: ${typography.lineHeight.relaxed};
  }
`;
