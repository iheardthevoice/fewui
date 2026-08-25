import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const THEMES_DIR = join(__dirname, '..', 'themes')
const OUT_DIR = join(THEMES_DIR, 'fonts')
const CSS_OUT = join(THEMES_DIR, 'fonts.css')

const FAMILIES = [
  { name: 'Inter', weights: [400, 500, 600, 700] },
  { name: 'Poppins', weights: [400, 500, 600] },
  { name: 'Roboto', weights: [400, 500, 600] },
  { name: 'Open Sans', weights: [400, 500, 600] },
  { name: 'Lato', weights: [400, 500, 600] },
  { name: 'Montserrat', weights: [400, 500, 600] },
  { name: 'Nunito', weights: [400, 500, 600] },
  { name: 'Raleway', weights: [400, 500, 600] },
  { name: 'Work Sans', weights: [400, 500, 600] },
  { name: 'Source Sans 3', weights: [400, 500, 600] },
  { name: 'DM Sans', weights: [400, 500, 600] },
  { name: 'Outfit', weights: [400, 500, 600] },
  { name: 'Manrope', weights: [400, 500, 600] },
  { name: 'Plus Jakarta Sans', weights: [400, 500, 600] },
  { name: 'Merriweather', weights: [400, 500, 600] },
  { name: 'Playfair Display', weights: [400, 500, 600] },
  { name: 'Libre Baskerville', weights: [400, 500, 600] },
]

mkdirSync(OUT_DIR, { recursive: true })

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function buildUrl(family) {
  const familyParam = `family=${encodeURIComponent(family.name).replace(/%20/g, '+')}:wght@${family.weights.join(';')}`
  return `https://fonts.googleapis.com/css2?${familyParam}&display=swap`
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`)
  return res.text()
}

async function fetchBin(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

const urlToLocal = new Map()
const cssChunks = [
  '/** Self-hosted webfonts (latin + latin-ext). No remote font requests at runtime. */\n',
]

for (const family of FAMILIES) {
  process.stdout.write(`Fetching CSS: ${family.name}...\n`)
  const css = await fetchText(buildUrl(family))
  const urls = [
    ...new Set(
      [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]),
    ),
  ]
  for (const url of urls) {
    if (urlToLocal.has(url)) continue
    const hash = createHash('sha1').update(url).digest('hex').slice(0, 10)
    const pathPart = url.split('/').slice(-2).join('-').replace(/\.woff2.*/, '')
    const file = `${slugify(family.name)}-${pathPart}-${hash}.woff2`.replace(
      /[^a-z0-9._-]+/gi,
      '-',
    )
    const dest = join(OUT_DIR, file)
    if (!existsSync(dest)) {
      process.stdout.write(`  ↓ ${file}\n`)
      writeFileSync(dest, await fetchBin(url))
    } else {
      process.stdout.write(`  = ${file}\n`)
    }
    urlToLocal.set(url, `./fonts/${file}`)
  }

  let localCss = css
  for (const [remote, local] of urlToLocal) {
    localCss = localCss.split(remote).join(local)
  }
  cssChunks.push(`/* ${family.name} */\n${localCss.trim()}\n`)
}

writeFileSync(CSS_OUT, `${cssChunks.join('\n')}\n`)
console.log(`Wrote ${CSS_OUT}`)
console.log(`Files: ${urlToLocal.size} woff2`)
