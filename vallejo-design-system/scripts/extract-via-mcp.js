/**
 * Extract SVGs via Figma Desktop MCP Server
 * 
 * This script attempts to extract SVGs using the Figma Desktop MCP server
 * that runs locally when Figma Desktop is open.
 */

// Using native fetch (Node 18+)

const MCP_URL = 'http://127.0.0.1:3845/mcp';
const FIGMA_FILE_KEY = 'ixkN3RSoiQc5aSlxZ21Hay';
const ICONS_NODE_ID = '854-2692';
const LOGOS_NODE_ID = '33-587';

/**
 * Send MCP request
 */
async function sendMCPRequest(method, params = {}) {
  try {
    const response = await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Date.now(),
        method: method,
        params: params,
      }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`MCP request failed:`, error.message);
    throw error;
  }
}

/**
 * Try to extract icons
 */
async function extractIcons() {
  console.log('\n📦 Attempting to extract icons via MCP...');
  
  try {
    // Try to get node data
    const result = await sendMCPRequest('get_node_data', {
      fileKey: FIGMA_FILE_KEY,
      nodeId: ICONS_NODE_ID,
    });
    
    console.log('MCP Response:', JSON.stringify(result, null, 2));
    
    if (result.error) {
      console.error('❌ MCP Error:', result.error.message);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('❌ Failed to extract via MCP:', error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Figma MCP Extraction');
  console.log('======================\n');
  console.log(`MCP Server: ${MCP_URL}`);
  console.log(`File Key: ${FIGMA_FILE_KEY}`);
  
  // Test MCP connection
  try {
    const testResponse = await fetch(MCP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'ping' }),
    });
    
    const testData = await testResponse.json();
    console.log('MCP Server Status:', testData);
  } catch (error) {
    console.error('❌ Cannot connect to MCP server:', error.message);
    console.error('\nMake sure:');
    console.error('1. Figma Desktop is running');
    console.error('2. Dev Mode is enabled in Figma');
    console.error('3. MCP server is enabled');
    return;
  }
  
  await extractIcons();
}

main().catch(console.error);
