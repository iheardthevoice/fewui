#!/usr/bin/env node
/**
 * Derleme sonrası: aynı çalışma alanındaki tüketici uygulamaların fewui pin'ini günceller.
 *
 * Betik tüketici deposunda durur (`frontend/scripts/sync-fewui-pin.mjs`). fewui tek başına
 * klonlandığında (CI, başka makine) o dosya yoktur; derleme bu yüzden düşmemelidir.
 */
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const script = join(dirname(fileURLToPath(import.meta.url)), '../../../../frontend/scripts/sync-fewui-pin.mjs')

if (process.env.CI || !existsSync(script)) {
  console.log('[fewui] Tüketici pin senkronu atlandı (çalışma alanı dışında).')
} else {
  // Betik yalnız doğrudan çalıştırıldığında kendini başlatır; içe aktarınca işlevi biz çağırırız.
  const { syncFewuiPin } = await import(pathToFileURL(script).href)
  syncFewuiPin({ install: process.argv.includes('--install') })
}
