// Assembles source/components/*.css -> dist/vallejo.css (the committed component layer).
// Run: npm run build:components   (consumers link dist/vallejo.css; they never run this)
// dist/ is GENERATED — never hand-edit it.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';

const SRC = 'source/components/';
if (!existsSync(SRC)) { console.error('missing source/components/ — nothing to assemble'); process.exit(1); }
mkdirSync('dist', { recursive: true });

// _base.css first (leading underscore sorts before letters), then alphabetical.
const files = readdirSync(SRC).filter((f) => f.endsWith('.css')).sort();

let out = '/* GENERATED from source/components/*.css by build/build-components.mjs — DO NOT EDIT. Run: npm run build:components */\n';
out += '/* Vallejo 1.2 component layer. Link dist/tokens.css FIRST (these classes consume var(--…) tokens). */\n';
for (const f of files) out += '\n/* ===== ' + f + ' ===== */\n' + readFileSync(SRC + f, 'utf8').trim() + '\n';
writeFileSync('dist/vallejo.css', out);

console.log('dist/vallejo.css assembled from ' + files.length + ' partials: ' + files.join(', '));
