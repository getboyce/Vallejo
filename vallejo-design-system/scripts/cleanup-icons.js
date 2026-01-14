/**
 * Cleanup extracted icons - remove generic vector/path/group files
 * Keep only actual icon components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '../assets/icons');

// Files to remove (generic vector elements)
const FILES_TO_REMOVE = [
  'icon-vector.svg',
  'icon-path.svg',
  'icon-group.svg',
  'icon-icons.svg', // Container frame
];

// Keep files that start with "icon-icon-" (actual icon components)
function shouldKeep(filename) {
  // Remove generic elements
  if (FILES_TO_REMOVE.includes(filename)) {
    return false;
  }
  
  // Keep actual icon components (icon-icon-*)
  if (filename.startsWith('icon-icon-')) {
    return true;
  }
  
  // Keep other named icons (like icon-legal-*, etc.)
  if (filename.match(/^icon-[a-z-]+\.svg$/)) {
    return true;
  }
  
  // Remove generic vector/path/group files
  return false;
}

function cleanup() {
  console.log('🧹 Cleaning up extracted icons...\n');
  
  if (!fs.existsSync(ICONS_DIR)) {
    console.log('Icons directory not found');
    return;
  }
  
  const files = fs.readdirSync(ICONS_DIR)
    .filter(file => file.endsWith('.svg'));
  
  console.log(`Found ${files.length} SVG files`);
  
  let kept = 0;
  let removed = 0;
  
  files.forEach(file => {
    if (shouldKeep(file)) {
      kept++;
      console.log(`✓ Keeping: ${file}`);
    } else {
      const filepath = path.join(ICONS_DIR, file);
      fs.unlinkSync(filepath);
      removed++;
      console.log(`✗ Removed: ${file}`);
    }
  });
  
  console.log(`\n✅ Cleanup complete:`);
  console.log(`   Kept: ${kept} icons`);
  console.log(`   Removed: ${removed} generic elements`);
}

cleanup();
