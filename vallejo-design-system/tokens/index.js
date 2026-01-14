/**
 * Design Tokens Index
 * Central export for all design tokens
 */

// Import all token modules first
import * as colorsModule from './colors.js';
import * as typographyModule from './typography.js';
import * as spacingModule from './spacing.js';
import * as shadowsModule from './shadows.js';

// Re-export individual tokens
export { colors, colorsCSS } from './colors.js';
export { typography, typographyCSS } from './typography.js';
export { spacing, spacingSemantic, spacingComponents, spacingCSS } from './spacing.js';
export { shadows, shadowsCSS } from './shadows.js';

// Combined CSS export - use module properties to ensure they're available
export const tokensCSS = `
  ${colorsModule.colorsCSS || ''}
  ${typographyModule.typographyCSS || ''}
  ${spacingModule.spacingCSS || ''}
  ${shadowsModule.shadowsCSS || ''}
`;

// Combined tokens object
export const tokens = {
  colors: colorsModule.colors,
  typography: typographyModule.typography,
  spacing: spacingModule.spacing,
  shadows: shadowsModule.shadows,
};
