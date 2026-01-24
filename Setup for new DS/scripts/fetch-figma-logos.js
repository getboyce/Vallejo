#!/usr/bin/env node
/**
 * Fetch Vallejo logo SVGs from Figma (one node per logo).
 * Requires FIGMA_ACCESS_TOKEN. Run: FIGMA_ACCESS_TOKEN=xxx node scripts/fetch-figma-logos.js
 *
 * Nodes: Copart 603-89, Wholesale Auction 10-304, Wholesale small 10-306, Wholesale badge 10-151.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = 'ixkN3RSoiQc5aSlxZ21Hay';
const LOGOS = [
  { id: '603-89', name: 'copart', figmaNodeId: '603-89', description: 'Copart oval + wordmark' },
  { id: '10-304', name: 'wholesale-auction', figmaNodeId: '10-304', description: 'Wholesale Auction full logo' },
  { id: '10-306', name: 'wholesale-auction-small', figmaNodeId: '10-306', description: 'Wholesale small (light/dark)' },
  { id: '10-151', name: 'wholesale-auction-badge', figmaNodeId: '10-151', description: 'Wholesale badge (light/dark)' },
];
const ASSETS_DIR = path.join(__dirname, '..', 'assets', 'logos');
const TOKENS_LOGOS = path.join(__dirname, '..', 'tokens', 'logos.json');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN || '' } }, (res) => {
      let data = '';
      res.on('data', (ch) => (data += ch));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

function download(url) {
  return new Promise((resolve, reject) => {
    const doGet = (u) => {
      https.get(u, (res) => {
        if (res.statusCode >= 301 && res.statusCode < 400 && res.headers.location) {
          doGet(res.headers.location);
          return;
        }
        const chunks = [];
        res.on('data', (ch) => chunks.push(ch));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      }).on('error', reject);
    };
    doGet(url);
  });
}

async function main() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error('Set FIGMA_ACCESS_TOKEN. Get a token from Figma → Settings → Account → Personal access tokens.');
    process.exit(1);
  }

  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  const ids = LOGOS.map((l) => l.figmaNodeId).join(',');
  const apiUrl = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`;
  console.log('Fetching SVG export URLs from Figma...');
  const resp = await get(apiUrl);

  if (resp.err) {
    console.error('Figma API error:', resp.err, resp.status);
    process.exit(1);
  }

  const images = resp.images || {};
  const updates = {};

  for (const logo of LOGOS) {
    const url = images[logo.figmaNodeId] || images[logo.figmaNodeId.replace(/-/g, ':')];
    if (!url) {
      console.warn(`No export URL for node ${logo.figmaNodeId} (${logo.name})`);
      continue;
    }
    console.log(`Downloading ${logo.name}...`);
    const svg = await download(url);
    const filename = `${logo.name}.svg`;
    const filepath = path.join(ASSETS_DIR, filename);
    fs.writeFileSync(filepath, svg, 'utf8');
    updates[logo.id] = { svg, file: `assets/logos/${filename}` };
    console.log(`  -> ${filepath}`);
  }

  // Merge into tokens/logos.json (preserve $schema, figma, notes)
  let tokens = {};
  if (fs.existsSync(TOKENS_LOGOS)) {
    tokens = JSON.parse(fs.readFileSync(TOKENS_LOGOS, 'utf8'));
  }
  if (!tokens.logos) tokens.logos = {};
  for (const logo of LOGOS) {
    const u = updates[logo.id];
    if (!u) continue;
    const key = logo.name.replace(/-/g, '_');
    if (!tokens.logos[key]) {
      tokens.logos[key] = {
        name: logo.name,
        figmaNodeId: logo.figmaNodeId,
        description: logo.description,
        file: null,
        svg: null,
      };
    }
    tokens.logos[key].file = u.file;
    tokens.logos[key].svg = u.svg;
  }
  // Preserve existing schema fields if we had a minimal merge
  const out = { ...tokens };
  if (!out.$schema) out.$schema = 'https://json-schema.org/draft/2020-12/schema';
  if (!out.title) out.title = 'Vallejo Design System - Logo Library';
  if (!out.figma) out.figma = { nodes: ['603-89', '10-304', '10-306', '10-151'], url: 'https://www.figma.com/design/ixkN3RSoiQc5aSlxZ21Hay/Vallejo-DS---Foundation?m=dev' };
  if (!out.notes) out.notes = { extraction: 'Run: FIGMA_ACCESS_TOKEN=xxx node scripts/fetch-figma-logos.js', usage: 'Use renderLogo or data-logo.', file: 'logos[].file = assets path; logos[].svg = inline SVG.' };
  fs.writeFileSync(TOKENS_LOGOS, JSON.stringify(out, null, 2), 'utf8');
  console.log('Updated', TOKENS_LOGOS);

  const splitSmallBadge = path.join(__dirname, 'split-small-badge.js');
  if (fs.existsSync(splitSmallBadge)) {
    console.log('Running split-small-badge.js...');
    require('child_process').execSync('node scripts/split-small-badge.js', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
