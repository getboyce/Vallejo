#!/usr/bin/env node
/**
 * Split wholesale-auction-small.svg → small-light / small-dark,
 * wholesale-auction-badge.svg → badge-light / badge-dark.
 * Run after fetch-figma-logos.js. Source: Figma 10-306 (small), 10-151 (badge).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'logos');
const SMALL = path.join(OUT, 'wholesale-auction-small.svg');
const BADGE = path.join(OUT, 'wholesale-auction-badge.svg');

const xmlns = 'xmlns="http://www.w3.org/2000/svg"';

function extractBetween(s, start, end) {
  const i = s.indexOf(start);
  if (i < 0) return '';
  const j = s.indexOf(end, i + start.length);
  if (j < 0) return '';
  return s.slice(i + start.length, j);
}

function stripFigmaFrame(svg) {
  return svg.replace(/<rect[^>]*stroke="#9747FF"[^>]*\/>\s*/i, '');
}

function main() {
  if (!fs.existsSync(OUT)) {
    fs.mkdirSync(OUT, { recursive: true });
  }

  // ---- Small (light/dark) ----
  if (fs.existsSync(SMALL)) {
    const raw = fs.readFileSync(SMALL, 'utf8');
    const clip0Start = '<g clip-path="url(#clip0_10_306)">';
    const clip1Start = '<g clip-path="url(#clip1_10_306)">';
    const gEnd = '</g>';

    const clip0Group = extractBetween(raw, clip0Start, gEnd);
    const clip1Group = extractBetween(raw, clip1Start, gEnd);
    const clip0Def = extractBetween(raw, '<clipPath id="clip0_10_306">', '</clipPath>');
    const clip1Def = extractBetween(raw, '<clipPath id="clip1_10_306">', '</clipPath>');

    if (clip0Group && clip1Group) {
      const smallLight = `<svg width="96" height="14" viewBox="16 16 96 14" fill="none" ${xmlns}>
<defs><clipPath id="clip0_10_306"><rect width="96" height="14" fill="white" transform="translate(16 16)"/></clipPath></defs>
<g clip-path="url(#clip0_10_306)">${clip0Group}</g>
</svg>`;
      const smallDark = `<svg width="96" height="14" viewBox="16 46 96 14" fill="none" ${xmlns}>
<defs><clipPath id="clip1_10_306"><rect width="96" height="14" fill="white" transform="translate(16 46)"/></clipPath></defs>
<g clip-path="url(#clip1_10_306)">${clip1Group}</g>
</svg>`;
      fs.writeFileSync(path.join(OUT, 'wholesale-auction-small-light.svg'), smallLight, 'utf8');
      fs.writeFileSync(path.join(OUT, 'wholesale-auction-small-dark.svg'), smallDark, 'utf8');
      console.log('  -> wholesale-auction-small-light.svg');
      console.log('  -> wholesale-auction-small-dark.svg');
    }
  }

  // ---- Badge (light/dark) ----
  if (fs.existsSync(BADGE)) {
    const raw = fs.readFileSync(BADGE, 'utf8');
    const noFrame = stripFigmaFrame(raw);
    const pathRegex = /<path[^>]+\/>/g;
    const paths = (noFrame.match(pathRegex) || []).filter((p) => !p.includes('#9747FF'));
    // First two paths = light (shield #2662D9 + check #242426). Next two = dark (shield #92B0EC + check white).
    const lightPaths = paths.slice(0, 2);
    const darkPaths = paths.slice(2, 4);
    if (lightPaths.length === 2 && darkPaths.length === 2) {
      const badgeLight = `<svg width="58" height="48" viewBox="0 0 58 48" fill="none" ${xmlns}>
${lightPaths.join('\n')}
</svg>`;
      const badgeDark = `<svg width="58" height="48" viewBox="0 48 58 48" fill="none" ${xmlns}>
${darkPaths.join('\n')}
</svg>`;
      fs.writeFileSync(path.join(OUT, 'wholesale-auction-badge-light.svg'), badgeLight, 'utf8');
      fs.writeFileSync(path.join(OUT, 'wholesale-auction-badge-dark.svg'), badgeDark, 'utf8');
      console.log('  -> wholesale-auction-badge-light.svg');
      console.log('  -> wholesale-auction-badge-dark.svg');
    }
  }

  console.log('Split small/badge complete.');
}

main();
