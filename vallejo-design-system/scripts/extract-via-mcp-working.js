/**
 * Extract SVGs via Figma Desktop MCP Server
 * Working version with proper MCP protocol
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MCP_URL = 'http://127.0.0.1:3845/mcp';
const FIGMA_FILE_KEY = 'ixkN3RSoiQc5aSlxZ21Hay';
const ICONS_NODE_ID = '854-2692';
const LOGOS_NODE_ID = '33-587';

const ICONS_DIR = path.join(__dirname, '../assets/icons');
const LOGOS_DIR = path.join(__dirname, '../assets/logos');

let sessionId = null;

/**
 * Initialize MCP session
 */
async function initializeMCP() {
  const response = await fetch(MCP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: {
          name: 'cursor',
          version: '1.0.0',
        },
      },
    }),
  });

  const text = await response.text();
  const lines = text.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = JSON.parse(line.substring(6));
      if (data.result) {
        console.log('✓ MCP Server initialized');
        return data;
      }
    }
  }
  
  throw new Error('Failed to initialize MCP');
}

/**
 * Send MCP request
 */
async function sendMCPRequest(method, params = {}) {
  const response = await fetch(MCP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method: method,
      params: params,
    }),
  });

  const text = await response.text();
  const lines = text.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      try {
        const data = JSON.parse(line.substring(6));
        if (data.result) {
          return data.result;
        }
        if (data.error) {
          throw new Error(data.error.message);
        }
      } catch (e) {
        // Skip invalid JSON
      }
    }
  }
  
  return null;
}

/**
 * Ensure directories exist
 */
function ensureDirectories() {
  [ICONS_DIR, LOGOS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

/**
 * Generate filename
 */
function generateFilename(name, prefix = 'icon') {
  return `${prefix}-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.svg`;
}

/**
 * Try to extract via MCP
 */
async function extractViaMCP() {
  console.log('🚀 Attempting extraction via Figma MCP Server\n');
  
  try {
    await initializeMCP();
    
    // Try different methods to get node data
    const methods = [
      'tools/list',
      'resources/list',
      'get_node_data',
      'export_svg',
      'get_file_data',
    ];
    
    console.log('Available MCP methods to try:');
    for (const method of methods) {
      try {
        const result = await sendMCPRequest(method, {
          fileKey: FIGMA_FILE_KEY,
          nodeId: ICONS_NODE_ID,
        });
        if (result) {
          console.log(`✓ ${method} returned data`);
          console.log(JSON.stringify(result, null, 2).substring(0, 500));
        }
      } catch (e) {
        // Method not available
      }
    }
    
  } catch (error) {
    console.error('❌ MCP extraction failed:', error.message);
    console.log('\n💡 Alternative: Use Figma API with token');
    console.log('   FIGMA_TOKEN=your_token node scripts/extract-svgs-from-figma.js');
  }
}

/**
 * Main
 */
async function main() {
  ensureDirectories();
  await extractViaMCP();
}

main().catch(console.error);
