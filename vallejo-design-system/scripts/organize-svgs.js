/**
 * Organize Manually Exported SVGs
 * 
 * This script helps organize SVG files that were manually exported from Figma.
 * It renames files according to conventions and creates index files.
 * 
 * Usage:
 *   node scripts/organize-svgs.js
 * 
 * Place exported SVGs in:
 *   - assets/icons/raw/ (for icons)
 *   - assets/logos/raw/ (for logos)
 * 
 * The script will:
 *   1. Rename files according to conventions
 *   2. Move them to the correct directories
 *   3. Create index files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_RAW_DIR = path.join(__dirname, '../assets/icons/raw');
const LOGOS_RAW_DIR = path.join(__dirname, '../assets/logos/raw');
const ICONS_DIR = path.join(__dirname, '../assets/icons');
const LOGOS_DIR = path.join(__dirname, '../assets/logos');

/**
 * Clean and normalize filename
 */
function normalizeFilename(filename, prefix = 'icon') {
  return `${prefix}-${filename
    .toLowerCase()
    .replace(/\.svg$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.svg`;
}

/**
 * Organize icons
 */
function organizeIcons() {
  console.log('\n📦 Organizing Icons...');
  
  if (!fs.existsSync(ICONS_RAW_DIR)) {
    console.log(`⚠️  Raw icons directory not found: ${ICONS_RAW_DIR}`);
    console.log('   Create this directory and place exported SVGs there.');
    return;
  }
  
  const files = fs.readdirSync(ICONS_RAW_DIR)
    .filter(file => file.toLowerCase().endsWith('.svg'));
  
  if (files.length === 0) {
    console.log('⚠️  No SVG files found in raw directory');
    return;
  }
  
  console.log(`Found ${files.length} icon files`);
  
  let organized = 0;
  files.forEach(file => {
    const oldPath = path.join(ICONS_RAW_DIR, file);
    const newName = normalizeFilename(file, 'icon');
    const newPath = path.join(ICONS_DIR, newName);
    
    // Skip if already exists
    if (fs.existsSync(newPath)) {
      console.log(`⏭️  Skipping ${newName} (already exists)`);
      return;
    }
    
    fs.copyFileSync(oldPath, newPath);
    console.log(`✓ ${file} → ${newName}`);
    organized++;
  });
  
  console.log(`\n✅ Organized ${organized} icons`);
}

/**
 * Organize logos
 */
function organizeLogos() {
  console.log('\n🎨 Organizing Logos...');
  
  if (!fs.existsSync(LOGOS_RAW_DIR)) {
    console.log(`⚠️  Raw logos directory not found: ${LOGOS_RAW_DIR}`);
    console.log('   Create this directory and place exported SVGs there.');
    return;
  }
  
  const files = fs.readdirSync(LOGOS_RAW_DIR)
    .filter(file => file.toLowerCase().endsWith('.svg'));
  
  if (files.length === 0) {
    console.log('⚠️  No SVG files found in raw directory');
    return;
  }
  
  console.log(`Found ${files.length} logo files`);
  
  let organized = 0;
  files.forEach(file => {
    const oldPath = path.join(LOGOS_RAW_DIR, file);
    const newName = normalizeFilename(file, 'logo');
    const newPath = path.join(LOGOS_DIR, newName);
    
    // Skip if already exists
    if (fs.existsSync(newPath)) {
      console.log(`⏭️  Skipping ${newName} (already exists)`);
      return;
    }
    
    fs.copyFileSync(oldPath, newPath);
    console.log(`✓ ${file} → ${newName}`);
    organized++;
  });
  
  console.log(`\n✅ Organized ${organized} logos`);
}

/**
 * Create index files
 */
function createIndexFiles() {
  // Icons index
  if (fs.existsSync(ICONS_DIR)) {
    const iconFiles = fs.readdirSync(ICONS_DIR)
      .filter(file => file.endsWith('.svg') && !file.startsWith('index'))
      .map(file => file.replace('.svg', ''))
      .sort();
    
    if (iconFiles.length > 0) {
      const iconIndex = `/**
 * Icon Index
 * Auto-generated list of available icons
 */

export const icons = {
${iconFiles.map(name => {
  const iconName = name.replace('icon-', '');
  return `  '${iconName}': () => import('./${name}.svg'),`;
}).join('\n')}
};

export const iconNames = [
${iconFiles.map(name => `  '${name.replace('icon-', '')}'`).join(',\n')}
];

export default icons;
`;
      
      fs.writeFileSync(path.join(ICONS_DIR, 'index.js'), iconIndex, 'utf8');
      console.log(`✓ Created icons index with ${iconFiles.length} icons`);
    }
  }
  
  // Logos index
  if (fs.existsSync(LOGOS_DIR)) {
    const logoFiles = fs.readdirSync(LOGOS_DIR)
      .filter(file => file.endsWith('.svg') && !file.startsWith('index'))
      .map(file => file.replace('.svg', ''))
      .sort();
    
    if (logoFiles.length > 0) {
      const logoIndex = `/**
 * Logo Index
 * Auto-generated list of available logos
 */

export const logos = {
${logoFiles.map(name => {
  const logoName = name.replace('logo-', '');
  return `  '${logoName}': () => import('./${name}.svg'),`;
}).join('\n')}
};

export const logoNames = [
${logoFiles.map(name => `  '${name.replace('logo-', '')}'`).join(',\n')}
];

export default logos;
`;
      
      fs.writeFileSync(path.join(LOGOS_DIR, 'index.js'), logoIndex, 'utf8');
      console.log(`✓ Created logos index with ${logoFiles.length} logos`);
    }
  }
}

/**
 * Ensure directories exist
 */
function ensureDirectories() {
  [ICONS_DIR, LOGOS_DIR, ICONS_RAW_DIR, LOGOS_RAW_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Organize SVG Files');
  console.log('=====================\n');
  
  ensureDirectories();
  organizeIcons();
  organizeLogos();
  createIndexFiles();
  
  console.log('\n✅ Organization complete!');
  console.log('\nNext steps:');
  console.log('1. Export SVGs from Figma to raw directories');
  console.log('2. Run this script again to organize them');
  console.log('3. Use icons/logos in your code via index files');
}

main();

export { organizeIcons, organizeLogos, createIndexFiles };
