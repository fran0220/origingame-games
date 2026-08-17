import { webcrack } from '/tmp/webcrack-tools/node_modules/webcrack/dist/index.js'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..', 'games')
const SKIP_NAME = new Set(['sw.js'])
const SKIP_DIR = new Set(['vendor', 'deobfuscated'])

function shouldSkip(file) {
  const base = path.basename(file)
  if (SKIP_NAME.has(base)) return true
  if (base.startsWith('three.') || base.includes('modulepreload-polyfill')) return true
  const parts = file.split(path.sep)
  if (parts.some((p) => SKIP_DIR.has(p))) return true
  return false
}

function* walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) {
      if (!SKIP_DIR.has(name)) yield* walk(p)
    } else {
      yield p
    }
  }
}

async function deobFile(src, dest) {
  const code = fs.readFileSync(src, 'utf8')
  if (!code.includes('_0x')) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, code)
    return { skipped: true, bytes: code.length }
  }
  const res = await webcrack(code)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, res.code)
  return { skipped: false, bytes: res.code.length }
}

const targets = []
for (const game of fs.readdirSync(ROOT).sort()) {
  const gameDir = path.join(ROOT, game)
  if (!fs.statSync(gameDir).isDirectory()) continue
  for (const file of walk(gameDir)) {
    if (shouldSkip(file)) continue
    if (!/\.(js|mjs)$/.test(file)) continue
    const rel = path.relative(gameDir, file)
    const dest = path.join(gameDir, 'deobfuscated', rel)
    targets.push({ file, dest, game, rel })
  }
}

console.log(`targets ${targets.length}`)
let i = 0
for (const t of targets) {
  i += 1
  const t0 = Date.now()
  try {
    const r = await deobFile(t.file, t.dest)
    console.log(`${i}/${targets.length} ${t.game}/${t.rel} ${r.skipped ? 'copy' : 'deob'} ${r.bytes} ${Date.now() - t0}ms`)
  } catch (err) {
    console.error(`${i}/${targets.length} FAIL ${t.game}/${t.rel}: ${err.message}`)
  }
}
