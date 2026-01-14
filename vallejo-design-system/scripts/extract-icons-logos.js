/**
 * Extract Icons and Logos from Figma
 * 
 * This script extracts SVG icons and logos from Figma design system.
 * 
 * Usage:
 *   node scripts/extract-icons-logos.js
 * 
 * Prerequisites:
 *   - Figma Desktop app with MCP integration
 *   - Figma file: ixkN3RSoiQc5aSlxZ21Hay
 */

const fs = require('fs');
const path = require('path');

const ICONS_NODE_ID = '854-2692';
const LOGOS_NODE_ID = '33-587';
const FIGMA_FILE_KEY = 'ixkN3RSoiQc5aSlxZ21Hay';

const ICONS_DIR = path.join(__dirname, '../assets/icons');
const LOGOS_DIR = path.join(__dirname, '../assets/logos');

/**
 * Icon names based on the Figma screenshot description
 */
const ICON_NAMES = [
  'filter', 'cloud', 'overlapping-rectangles', 'question-circle', 'x-square', 'paperclip',
  'settings', 'wrench', 'sparkle', 'credit-card', 'check-square', 'bell',
  'dollar-circle', 'arrows-up-down', 'user-list', 'credit-card-plus', 'checkbox', 'refresh',
  'user', 'paperclip-alt', 'upload-list', 'message', 'document', 'sort',
  'download', 'key', 'download-list', 'megaphone', 'arrow-left', 'arrows-left-right',
  'hd', 'expand', 'calendar', 'image', 'more-vertical', 'arrow-right',
  'lock', 'priority', 'layers', 'more-horizontal', 'home', 'empty',
  'upload', 'engine', 'shopping-cart', 'minimize-maximize', 'folder', 'flag',
  'check', 'steering-wheel', 'tag', 'chevron-down-circle', 'empty', 'envelope',
  'minus', 'expand-alt', 'volume', 'chevron-down', 'trash', 'truck',
  'plus', 'building', 'volume-down', 'chevron-up', 'alert-triangle', 'info-circle',
  'menu', 'x', 'volume-up', 'chevron-left', 'search', 'empty',
  'pin', 'building-door', 'volume-off', 'chevron-right',
  'heart', 'location', 'check-circle', 'arrow-left-circle',
  'store', 'camera', 'check-circle-alt', 'chevron-up-alt',
  'package', 'empty', 'empty', 'chevron-right-alt',
  'search-alt', 'alert-triangle-alt', 'x-circle', 'chevron-left-alt',
  'chevron-down-alt'
];

/**
 * Logo names based on the Figma screenshot description
 */
const LOGO_NAMES = [
  'copart',
  'wholesale-auction',
  'wholesale-text',
  'shield-check'
];

/**
 * Ensure directories exist
 */
function ensureDirectories() {
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }
  if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
  }
}

/**
 * Save SVG file
 */
function saveSVG(dir, filename, svgContent) {
  const filepath = path.join(dir, filename);
  fs.writeFileSync(filepath, svgContent, 'utf8');
  console.log(`✓ Saved: ${filename}`);
}

/**
 * Extract icons from Figma
 * Note: This requires Figma MCP integration or manual export
 */
async function extractIcons() {
  console.log('\n📦 Extracting Icons...');
  console.log(`Node ID: ${ICONS_NODE_ID}`);
  console.log(`Expected icons: ${ICON_NAMES.length}`);
  console.log('\n⚠️  Manual extraction required:');
  console.log('1. Open Figma file:', FIGMA_FILE_KEY);
  console.log('2. Navigate to node:', ICONS_NODE_ID);
  console.log('3. Select each icon component');
  console.log('4. Right-click > Export > SVG');
  console.log('5. Save to:', ICONS_DIR);
  console.log('\nIcon names to use:');
  ICON_NAMES.forEach((name, index) => {
    if (name !== 'empty') {
      console.log(`  ${index + 1}. icon-${name}.svg`);
    }
  });
}

/**
 * Extract logos from Figma
 */
async function extractLogos() {
  console.log('\n🎨 Extracting Logos...');
  console.log(`Node ID: ${LOGOS_NODE_ID}`);
  console.log(`Expected logos: ${LOGO_NAMES.length}`);
  console.log('\n⚠️  Manual extraction required:');
  console.log('1. Open Figma file:', FIGMA_FILE_KEY);
  console.log('2. Navigate to node:', LOGOS_NODE_ID);
  console.log('3. Select each logo component');
  console.log('4. Right-click > Export > SVG');
  console.log('5. Save to:', LOGOS_DIR);
  console.log('\nLogo names to use:');
  LOGO_NAMES.forEach((name, index) => {
    console.log(`  ${index + 1}. logo-${name}.svg`);
  });
}

/**
 * Create icon index file
 */
function createIconIndex() {
  const indexContent = `/**
 * Icon Index
 * Auto-generated list of available icons
 */

export const icons = {
${ICON_NAMES.filter(name => name !== 'empty').map((name, index) => {
  return `  '${name}': () => import('./icon-${name}.svg'),`;
}).join('\n')}
};

export const iconNames = [
${ICON_NAMES.filter(name => name !== 'empty').map(name => `  '${name}'`).join(',\n')}
];
`;
  
  const indexPath = path.join(ICONS_DIR, 'index.js');
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✓ Created icon index');
}

/**
 * Main extraction function
 */
async function main() {
  console.log('🚀 Figma Icon & Logo Extraction');
  console.log('================================\n');
  
  ensureDirectories();
  
  await extractIcons();
  await extractLogos();
  
  createIconIndex();
  
  console.log('\n✅ Extraction guide created!');
  console.log('\nNext steps:');
  console.log('1. Export SVGs from Figma manually');
  console.log('2. Place SVG files in the appropriate directories');
  console.log('3. Run this script again to verify');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { extractIcons, extractLogos, ICON_NAMES, LOGO_NAMES };
