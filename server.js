#!/usr/bin/env node

/**
 * Simple HTTP Server for Vehicle Details Page
 * 
 * Usage:
 *   node server.js
 * 
 * Then open http://localhost:8000/vehicle-details.html in your browser
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Remove query string and decode URI
  let filePath = decodeURIComponent(req.url.split('?')[0]);
  
  // Default to vehicle-details.html if root
  if (filePath === '/') {
    filePath = '/vehicle-details.html';
  }
  
  // Remove leading slash
  filePath = filePath.substring(1);
  
  // Security: prevent directory traversal
  if (filePath.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }
  
  // Get full file path
  const fullPath = path.join(__dirname, filePath);
  
  // Check if file exists
  fs.access(fullPath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }
    
    // Get file extension for MIME type
    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Read and serve file
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
        return;
      }
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📄 Open http://localhost:${PORT}/vehicle-details.html in your browser`);
  console.log(`\nPress Ctrl+C to stop the server\n`);
});