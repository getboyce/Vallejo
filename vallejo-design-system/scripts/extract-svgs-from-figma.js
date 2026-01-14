/**
 * Extract SVG Icons and Logos from Figma
 * 
 * This script uses the Figma API to extract SVG icons and logos.
 * 
 * Usage:
 *   FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js
 * 
 * Or set in .env file:
 *   FIGMA_TOKEN=your_token
 * 
 * Prerequisites:
 *   - Figma Personal Access Token (get from https://www.figma.com/developers/api#access-tokens)
 *   - Node.js with fetch support (Node 18+)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'ixkN3RSoiQc5aSlxZ21Hay';
const ICONS_NODE_ID = '854:2692';  // Use colon for API
const LOGOS_NODE_ID = '33:587';    // Use colon for API

const ICONS_DIR = path.join(__dirname, '../assets/icons');
const LOGOS_DIR = path.join(__dirname, '../assets/logos');

// Get token from environment
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('❌ Error: FIGMA_TOKEN environment variable is required');
  console.error('\nGet your token from: https://www.figma.com/developers/api#access-tokens');
  console.error('\nUsage:');
  console.error('  FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js');
  process.exit(1);
}

/**
 * Ensure directories exist
 */
function ensureDirectories() {
  [ICONS_DIR, LOGOS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✓ Created directory: ${path.basename(dir)}`);
    }
  });
}

/**
 * Fetch node data from Figma API
 */
async function fetchNodeData(nodeId) {
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${nodeId}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Figma API error: ${response.status} ${error}`);
    }
    
    const data = await response.json();
    return data.nodes[nodeId];
  } catch (error) {
    console.error(`Error fetching node ${nodeId}:`, error.message);
    throw error;
  }
}

/**
 * Get image URLs from Figma
 */
async function getImageUrls(nodeIds, format = 'svg') {
  const ids = Array.isArray(nodeIds) ? nodeIds.join(',') : nodeIds;
  const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=${format}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Figma API error: ${response.status} ${error}`);
    }
    
    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error(`Error getting image URLs:`, error.message);
    throw error;
  }
}

/**
 * Download SVG from URL
 */
async function downloadSVG(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const svgContent = await response.text();
    fs.writeFileSync(filepath, svgContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error downloading ${filepath}:`, error.message);
    return false;
  }
}

/**
 * Extract all child node IDs from a node
 */
function extractChildNodeIds(node, ids = []) {
  if (node.id) {
    ids.push(node.id);
  }
  
  if (node.children) {
    node.children.forEach(child => {
      extractChildNodeIds(child, ids);
    });
  }
  
  return ids;
}

/**
 * Extract component node IDs (for logos - get actual component instances)
 */
function extractComponentNodeIds(node, ids = []) {
  // For logos, we want COMPONENT or INSTANCE types
  if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    if (node.id && !ids.includes(node.id)) {
      ids.push(node.id);
    }
  }
  
  if (node.children) {
    node.children.forEach(child => {
      extractComponentNodeIds(child, ids);
    });
  }
  
  return ids;
}

/**
 * Generate filename from node name
 */
function generateFilename(nodeName, prefix = 'icon') {
  return `${prefix}-${nodeName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.svg`;
}

/**
 * Extract icons
 */
async function extractIcons() {
  console.log('\n📦 Extracting Icons...');
  console.log(`Node ID: ${ICONS_NODE_ID}`);
  
  try {
    const nodeData = await fetchNodeData(ICONS_NODE_ID);
    
    if (!nodeData || !nodeData.document) {
      console.error('❌ Could not fetch icon node data');
      return;
    }
    
    // Extract all child node IDs
    const childIds = extractChildNodeIds(nodeData.document);
    console.log(`Found ${childIds.length} icon nodes`);
    
    if (childIds.length === 0) {
      console.log('⚠️  No child nodes found. The node might contain a component set.');
      console.log('   Try exporting manually from Figma or check the node structure.');
      return;
    }
    
    // Get image URLs
    console.log('Fetching SVG URLs...');
    const imageUrls = await getImageUrls(childIds, 'svg');
    
    // Download each SVG
    let successCount = 0;
    let failCount = 0;
    
    for (const [nodeId, url] of Object.entries(imageUrls)) {
      if (!url) {
        console.warn(`⚠️  No URL for node ${nodeId}`);
        failCount++;
        continue;
      }
      
      // Try to get node name for filename
      const node = findNodeById(nodeData.document, nodeId);
      const nodeName = node?.name || `icon-${nodeId}`;
      const filename = generateFilename(nodeName, 'icon');
      const filepath = path.join(ICONS_DIR, filename);
      
      console.log(`Downloading: ${filename}...`);
      const success = await downloadSVG(url, filepath);
      
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Rate limiting - wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`\n✅ Icons extraction complete:`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    
  } catch (error) {
    console.error('❌ Error extracting icons:', error.message);
    throw error;
  }
}

/**
 * Extract logos
 */
async function extractLogos() {
  console.log('\n🎨 Extracting Logos...');
  console.log(`Node ID: ${LOGOS_NODE_ID}`);
  
  try {
    const nodeData = await fetchNodeData(LOGOS_NODE_ID);
    
    if (!nodeData || !nodeData.document) {
      console.error('❌ Could not fetch logo node data');
      return;
    }
    
    // Extract component node IDs (logos are usually components)
    const childIds = extractComponentNodeIds(nodeData.document);
    if (childIds.length === 0) {
      // Fallback to all child nodes if no components found
      const allChildIds = extractChildNodeIds(nodeData.document);
      // Filter for frames/components that might be logos
      const logoIds = allChildIds.filter(id => {
        const node = findNodeById(nodeData.document, id);
        return node && (node.type === 'COMPONENT' || node.type === 'INSTANCE' || 
               (node.type === 'FRAME' && node.name.toLowerCase().includes('logo')));
      });
      childIds.push(...logoIds);
    }
    console.log(`Found ${childIds.length} logo nodes`);
    
    if (childIds.length === 0) {
      console.log('⚠️  No child nodes found. The node might contain a component set.');
      console.log('   Try exporting manually from Figma or check the node structure.');
      return;
    }
    
    // Get image URLs
    console.log('Fetching SVG URLs...');
    const imageUrls = await getImageUrls(childIds, 'svg');
    
    // Download each SVG
    let successCount = 0;
    let failCount = 0;
    
    for (const [nodeId, url] of Object.entries(imageUrls)) {
      if (!url) {
        console.warn(`⚠️  No URL for node ${nodeId}`);
        failCount++;
        continue;
      }
      
      // Try to get node name for filename
      const node = findNodeById(nodeData.document, nodeId);
      const nodeName = node?.name || `logo-${nodeId}`;
      const filename = generateFilename(nodeName, 'logo');
      const filepath = path.join(LOGOS_DIR, filename);
      
      console.log(`Downloading: ${filename}...`);
      const success = await downloadSVG(url, filepath);
      
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Rate limiting - wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`\n✅ Logos extraction complete:`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    
  } catch (error) {
    console.error('❌ Error extracting logos:', error.message);
    throw error;
  }
}

/**
 * Find node by ID in tree
 */
function findNodeById(node, targetId) {
  if (node.id === targetId) {
    return node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, targetId);
      if (found) return found;
    }
  }
  
  return null;
}

/**
 * Create index files
 */
function createIndexFiles() {
  // Icons index
  const iconFiles = fs.readdirSync(ICONS_DIR)
    .filter(file => file.endsWith('.svg'))
    .map(file => file.replace('.svg', ''))
    .sort();
  
  if (iconFiles.length > 0) {
    const iconIndex = `/**
 * Icon Index
 * Auto-generated list of available icons
 */

export const icons = {
${iconFiles.map(name => `  '${name.replace('icon-', '')}': () => import('./${name}.svg'),`).join('\n')}
};

export const iconNames = [
${iconFiles.map(name => `  '${name.replace('icon-', '')}'`).join(',\n')}
];
`;
    
    fs.writeFileSync(path.join(ICONS_DIR, 'index.js'), iconIndex, 'utf8');
    console.log(`✓ Created icons index with ${iconFiles.length} icons`);
  }
  
  // Logos index
  const logoFiles = fs.readdirSync(LOGOS_DIR)
    .filter(file => file.endsWith('.svg'))
    .map(file => file.replace('.svg', ''))
    .sort();
  
  if (logoFiles.length > 0) {
    const logoIndex = `/**
 * Logo Index
 * Auto-generated list of available logos
 */

export const logos = {
${logoFiles.map(name => `  '${name.replace('logo-', '')}': () => import('./${name}.svg'),`).join('\n')}
};

export const logoNames = [
${logoFiles.map(name => `  '${name.replace('logo-', '')}'`).join(',\n')}
];
`;
    
    fs.writeFileSync(path.join(LOGOS_DIR, 'index.js'), logoIndex, 'utf8');
    console.log(`✓ Created logos index with ${logoFiles.length} logos`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Figma SVG Extraction');
  console.log('======================\n');
  console.log(`File Key: ${FIGMA_FILE_KEY}`);
  console.log(`Token: ${FIGMA_TOKEN.substring(0, 10)}...`);
  
  ensureDirectories();
  
  try {
    await extractIcons();
    await extractLogos();
    createIndexFiles();
    
    console.log('\n✅ Extraction complete!');
    console.log(`\nIcons saved to: ${ICONS_DIR}`);
    console.log(`Logos saved to: ${LOGOS_DIR}`);
    
  } catch (error) {
    console.error('\n❌ Extraction failed:', error.message);
    console.error(error.stack);
    console.error('\nTroubleshooting:');
    console.error('1. Verify your Figma token is valid');
    console.error('2. Check that you have access to the Figma file');
    console.error('3. Verify the node IDs are correct');
    console.error('4. Check Figma API rate limits');
    process.exit(1);
  }
}

// Run if called directly
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

export { extractIcons, extractLogos, main };
