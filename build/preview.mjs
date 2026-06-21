// Local preview server for the demo site — mirrors vercel.json (clean URLs + static, served from the repo root).
// Run: npm run preview   (or: node build/preview.mjs)   then open the printed URL.
import { createServer } from 'http'
import { readFile } from 'fs/promises'
import { extname, join, normalize } from 'path'

const ROOT = process.cwd()
const PORT = Number(process.env.PORT) || 5050
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon',
}
// keep in sync with vercel.json
const REWRITES = { '/': '/demo/index.html', '/ux-writing': '/demo/ux-writing.html' }

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  if (REWRITES[path]) path = REWRITES[path]
  // block path traversal, then resolve from repo root
  const safe = normalize(path).replace(/^(\.\.([/\\]|$))+/, '')
  const file = join(ROOT, safe)
  try {
    const data = await readFile(file)
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' })
    res.end(data)
    console.log('200', req.url)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('404 ' + path)
    console.log('404', req.url)
  }
}).listen(PORT, () => {
  console.log('Vallejo demo preview running:')
  console.log('  Design system → http://localhost:' + PORT + '/')
  console.log('  UX writing    → http://localhost:' + PORT + '/ux-writing')
})
