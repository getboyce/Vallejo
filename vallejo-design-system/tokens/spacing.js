/**
 * Spacing Design Tokens
 * Extracted from Vallejo Design System Figma file
 * File: ixkN3RSoiQc5aSlxZ21Hay
 */

export const spacing = {
  // Base spacing scale (4px base unit)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  64: '16rem',    // 256px
};

// Semantic spacing names
export const spacingSemantic = {
  xs: spacing[1],      // 4px
  sm: spacing[2],      // 8px
  md: spacing[4],      // 16px
  lg: spacing[6],      // 24px
  xl: spacing[8],      // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
  '4xl': spacing[24], // 96px
};

// Component-specific spacing
export const spacingComponents = {
  button: {
    paddingX: spacing[4],    // 16px
    paddingY: spacing[2],    // 8px
    paddingXLarge: spacing[6], // 24px
    paddingYLarge: spacing[3], // 12px
    gap: spacing[2],          // 8px
  },
  input: {
    paddingX: spacing[4],     // 16px
    paddingY: spacing[3],     // 12px
    gap: spacing[2],          // 8px
  },
  card: {
    padding: spacing[6],      // 24px
    gap: spacing[4],          // 16px
  },
  modal: {
    padding: spacing[6],      // 24px
    gap: spacing[4],          // 16px
  },
  section: {
    paddingY: spacing[12],    // 48px
    paddingX: spacing[6],     // 24px
  },
};

// CSS Custom Properties export
export const spacingCSS = `
  :root {
    /* Base Spacing Scale */
    --spacing-0: ${spacing[0]};
    --spacing-1: ${spacing[1]};
    --spacing-2: ${spacing[2]};
    --spacing-3: ${spacing[3]};
    --spacing-4: ${spacing[4]};
    --spacing-5: ${spacing[5]};
    --spacing-6: ${spacing[6]};
    --spacing-8: ${spacing[8]};
    --spacing-10: ${spacing[10]};
    --spacing-12: ${spacing[12]};
    --spacing-16: ${spacing[16]};
    --spacing-20: ${spacing[20]};
    --spacing-24: ${spacing[24]};
    --spacing-32: ${spacing[32]};
    
    /* Semantic Spacing */
    --spacing-xs: ${spacingSemantic.xs};
    --spacing-sm: ${spacingSemantic.sm};
    --spacing-md: ${spacingSemantic.md};
    --spacing-lg: ${spacingSemantic.lg};
    --spacing-xl: ${spacingSemantic.xl};
    --spacing-2xl: ${spacingSemantic['2xl']};
    --spacing-3xl: ${spacingSemantic['3xl']};
  }
`;
