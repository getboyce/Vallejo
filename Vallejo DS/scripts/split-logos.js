#!/usr/bin/env node
/**
 * Split vallejo-logos.svg into individual logo components.
 * Source: fetch-figma-logos.js (Figma node 603-89). Output: assets/logos/*.svg
 *
 * Components:
 *   - Copart logo
 *   - Wholesale Auction logo
 *   - Wholesale Auction small (light + dark)
 *   - Wholesale Auction badge (light + dark)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'assets', 'logos', 'vallejo-logos.svg');
const OUT = path.join(ROOT, 'assets', 'logos');

const xmlns = 'xmlns="http://www.w3.org/2000/svg"';

function wrapSvg(viewBox, width, height, body) {
  return `<svg width="${width}" height="${height}" viewBox="${viewBox}" fill="none" ${xmlns}>\n${body}\n</svg>`;
}

function extractLines(raw, start, end) {
  const lines = raw.split(/\r?\n/);
  return lines.slice(start, end).filter(Boolean).join('\n');
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error('Missing', SRC, '- run scripts/fetch-figma-logos.js first.');
    process.exit(1);
  }

  const raw = fs.readFileSync(SRC, 'utf8');
  const lines = raw.split(/\r?\n/);

  if (!fs.existsSync(OUT)) {
    fs.mkdirSync(OUT, { recursive: true });
  }

  // Line numbers 1-based in editor; 0-based here. Skip <svg> at 0.
  // Copart: paths 2–10 (index 1–9). Include wordmark (path 2) + oval (paths 3–10). Full viewBox so "part" is visible.
  const copartBody = extractLines(raw, 1, 10);
  const copart = wrapSvg('0 0 145 96', 145, 96, copartBody);
  fs.writeFileSync(path.join(OUT, 'copart.svg'), copart, 'utf8');
  console.log('  -> copart.svg');

  // Wholesale Auction full: paths 16–34 (index 15–33) only. Exclude path 15 (gray "Wholesale Auction" Figma label #46525D).
  // Trim viewBox to logo only: content y 49–96 → viewBox 235 49 200 47.
  const waBody = extractLines(raw, 15, 34);
  const wa = wrapSvg('235 49 200 47', 200, 47, waBody);
  fs.writeFileSync(path.join(OUT, 'wholesale-auction.svg'), wa, 'utf8');
  console.log('  -> wholesale-auction.svg');

  // Small light (clip0): paths inside first <g clip-path>, 37–47. viewBox 251 134 96 14
  const smallLightBody = extractLines(raw, 36, 47);
  const smallLight = wrapSvg('251 134 96 14', 96, 14, smallLightBody);
  fs.writeFileSync(path.join(OUT, 'wholesale-auction-small-light.svg'), smallLight, 'utf8');
  console.log('  -> wholesale-auction-small-light.svg');

  // Small dark (clip1): paths inside second <g clip-path>, 50–60. viewBox 251 164 96 14
  const smallDarkBody = extractLines(raw, 49, 60);
  const smallDark = wrapSvg('251 164 96 14', 96, 14, smallDarkBody);
  fs.writeFileSync(path.join(OUT, 'wholesale-auction-small-dark.svg'), smallDark, 'utf8');
  console.log('  -> wholesale-auction-small-dark.svg');

  // Badge light: shield #2662D9 + check #242426. Lines 63–64. viewBox 235 218 58 96
  const badgeLightBody = extractLines(raw, 62, 64);
  const badgeLight = wrapSvg('235 218 58 96', 58, 96, badgeLightBody);
  fs.writeFileSync(path.join(OUT, 'wholesale-auction-badge-light.svg'), badgeLight, 'utf8');
  console.log('  -> wholesale-auction-badge-light.svg');

  // Badge dark: shield #92B0EC + check white. Lines 65–66. Same viewBox
  const badgeDarkBody = extractLines(raw, 64, 66);
  const badgeDark = wrapSvg('235 218 58 96', 58, 96, badgeDarkBody);
  fs.writeFileSync(path.join(OUT, 'wholesale-auction-badge-dark.svg'), badgeDark, 'utf8');
  console.log('  -> wholesale-auction-badge-dark.svg');

  console.log('Split complete. Update tokens/logos.json and logos-demo.html as needed.');
}

main();
