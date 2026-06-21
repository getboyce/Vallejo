// Vallejo token generator — zero dependencies.
// Reads the DTCG source of truth (source/tokens/*.json) and emits the committed, consumable dist/.
// Run: npm run build   (or: node build/build.mjs)
// dist/ is GENERATED — never hand-edit it.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const SRC = 'source/tokens/';
// light base + optional dark primitive overrides (DEC-1: dark IS shipped)
const BASE = ['primitives.tokens.json', 'semantic.tokens.json', 'component.tokens.json'];
const DARK = 'primitives.dark.tokens.json';

function deepMerge(t, s) {
  for (const k in s) {
    const v = s[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && !('$value' in v)) { t[k] = t[k] || {}; deepMerge(t[k], v); }
    else t[k] = v;
  }
  return t;
}
function load(file) { return existsSync(SRC + file) ? JSON.parse(readFileSync(SRC + file, 'utf8')) : null; }

const merged = {};
for (const f of BASE) { const j = load(f); if (j) deepMerge(merged, j); }

// CSS custom-property name from a token path (matches the Phase 1 DESIGN contract)
function cssName(path) {
  const [g, ...r] = path;
  if (g === 'color') return '--' + r.join('-');     // color.gray.600 -> --gray-600 ; color.gold -> --gold
  if (g === 'easing') return '--ease-' + r.join('-'); // easing.enter -> --ease-enter
  if (g === 'status') return '--' + r.join('-');     // status.success-subtle -> --success-subtle
  return '--' + [g, ...r].join('-');                 // space.6 -> --space-6 ; text.primary -> --text-primary ; elevation.x ; shadow.x ; layer.x
}

function collectLeaves(tree) {
  const leaves = [];
  (function walk(node, path) {
    if (!node || typeof node !== 'object') return;
    if ('$value' in node) { leaves.push({ path, value: node.$value }); return; }
    for (const k of Object.keys(node)) { if (k.startsWith('$')) continue; walk(node[k], [...path, k]); }
  })(tree, []);
  return leaves;
}

// {a.b.c} alias -> var(--name) for CSS
const toVar = (s) => String(s).replace(/\{([^}]+)\}/g, (_, p) => 'var(' + cssName(p.split('.')) + ')');

const leaves = collectLeaves(merged);
const byPath = Object.fromEntries(leaves.map((l) => [l.path.join('.'), l.value]));
// full literal resolution (follow aliases) for the JS export
function resolveLiteral(s, d = 0) {
  if (d > 25) return s;
  const m = /^\{([^}]+)\}$/.exec(String(s).trim());
  if (m) return resolveLiteral(byPath[m[1]], d + 1);
  return String(s).replace(/\{([^}]+)\}/g, (_, p) => resolveLiteral(byPath[p], d + 1));
}

mkdirSync('dist', { recursive: true });
const DONOTEDIT = '/* GENERATED from source/tokens/*.json by build/build.mjs — DO NOT EDIT. Run: npm run build */';

// ---- dist/tokens.css : :root (light) + optional [data-theme="dark"] primitive overrides ----
const rootLines = leaves.map((l) => '  ' + cssName(l.path) + ': ' + toVar(l.value) + ';');
let css = DONOTEDIT + '\n:root {\n' + rootLines.join('\n') + '\n}\n';
const dark = load(DARK);
if (dark) {
  const dleaves = collectLeaves(dark);
  const dlines = dleaves.map((l) => '  ' + cssName(l.path) + ': ' + toVar(l.value) + ';');
  css += '\n[data-theme="dark"] {\n' + dlines.join('\n') + '\n}\n';
}
writeFileSync('dist/tokens.css', css);

// ---- dist/tokens.dtcg.json : merged DTCG source (tooling / Figma sync) ----
writeFileSync('dist/tokens.dtcg.json', JSON.stringify(merged, null, 2) + '\n');

// ---- dist/tokens.js : ESM, flat name -> resolved LIGHT value (React/JSX) ----
const flat = {};
for (const l of leaves) flat[cssName(l.path).slice(2)] = resolveLiteral(l.value);
writeFileSync('dist/tokens.js', DONOTEDIT.replace('Run: npm run build', 'Light-mode resolved values; for theming use dist/tokens.css') + '\nexport const tokens = ' + JSON.stringify(flat, null, 2) + ';\nexport default tokens;\n');

console.log('dist/tokens.css:', rootLines.length, 'vars' + (dark ? ' + dark overrides' : ' (light only — no dark source yet)'));
console.log('dist/tokens.dtcg.json + dist/tokens.js written');
