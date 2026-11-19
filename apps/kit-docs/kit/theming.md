# Theming

## Tema paketleri

Her tema `themes/{id}/` altında: `index.js` (`defineTheme`), `preset.js` (token'lar), `defaults.js`,
üretilen `color.css` ve isteğe bağlı `styles.css`.

| id | CSS import | Kullanım |
|----|------------|----------|
| `web` | `fewui/themes/web.css` | Restta panel |
| `liquidglass` | `fewui/themes/liquidglass.css` | iOS cam |
| `android` | `fewui/themes/android.css` | Material 3 |
| `landing` | `fewui/themes/landing.css` | Tenant siteler |
| `fewui` | `fewui/themes/fewui.css` | fewui.com |

Varsayılan bundle: `fewui/style.css` (web + iOS / Android platform katmanları).

Detaylı geliştirici rehberi: paket içi `themes/README.md`.

## Kurulum (Vue)

```js
import UiLib from 'fewui'
import 'fewui/themes/web.css'

app.use(UiLib, {
  i18n,
  theme: 'web',
  mode: 'dark',
  overrides: { primary: '#1B5CFF' },
})
```

- **`theme`** — kayıtlı id veya `defineTheme` paketi.
- **`mode`** — `light` / `dark`; verilmezse kökteki `.dark` korunur.
- **`overrides`** — anlık token'lar: düz harita (aktif mod) veya `{ light, dark }`.
- **`inline`** — tema `color.css` yüklenmediyse tüm token'ları köke yazar.

## Token'lar

```js
// themes/my-theme/preset.js
export const myPreset = {
  fonts: { body: 'Inter' },
  tokens: {
    light: {
      primary: '#1B5CFF',
      background: 'var(--base-100)',
      danger: 'oklch(0.55 0.22 27)',
      radius: '20px',
      cardPadding: 'comfortable',
      surfaceStyle: { mixFrom: 'surface', opacity: 100, backdropBlur: 'none' },
    },
    dark: {
      background: 'var(--base-950)',
    },
  },
}
```

```js
import { defineTheme, buildThemeCss, setUiTheme, setUiThemeMode } from 'fewui'

const myTheme = defineTheme({ id: 'my-theme', label: 'My theme', preset: myPreset, defaults })
const css = buildThemeCss(myTheme) // color.css içeriği
setUiTheme(myTheme, { mode: 'dark' })
setUiThemeMode('light')
```

## Mod: açık, koyu, sistem

`mode` üç değer alır: `light`, `dark`, `system`. `system` cihazın açık / koyu ayarını uygular ve ayar değiştikçe kendiliğinden güncellenir.

```js
app.use(UiLib, { i18n, theme: 'web', mode: 'system' })

import { setUiThemeMode, getUiThemeMode, UI_THEME_MODE_EVENT } from 'fewui'

setUiThemeMode('dark')     // açık seçim: cihaz ayarı artık izlenmez
setUiThemeMode('system')   // yeniden cihaza bağla
getUiThemeMode()           // { mode: 'dark', preference: 'system' }

// Etkin mod değişince (ör. durum çubuğu rengini güncellemek için):
document.documentElement.addEventListener(UI_THEME_MODE_EVENT, (event) => {
  console.log(event.detail) // { mode, preference }
})
```

Koyu mod `.dark` sınıfıyla çalışır; `ui-theme-provider mode="system"` bir alt ağacı cihaz ayarına bağlar. CSS `light-dark()` işlevi bilerek kullanılmaz: alt ağacı sınıfla zorlamaya izin vermez ve eski iOS webview'larında (Safari 17.5 öncesi) çalışmaz.

**Açılışta parlama olmaması için** `<head>` içine, stil dosyalarından önce küçük betiği koyun; sınıfı ilk boyamadan önce ayarlar:

```js
import { buildThemeModeScript } from 'fewui'

// Kayıtlı tercih (`light` | `dark` | `system`) localStorage'daki bu anahtardan okunur; yoksa cihaza bakılır.
const script = buildThemeModeScript({ storageKey: 'theme-mode' })
// <script>${script}</script>
```

### Geçiş

Renk token'ları `@property` ile tiplidir. Mod ya da ana renk değiştiğinde renkler anında sıçramaz, 200 ms'lik bir geçişle değişir (`--ui-theme-transition-duration` ile ayarlanır). İlk uygulamada ve "hareketi azalt" tercihinde geçiş yoktur. Kapatmak için: `setUiThemeMode('dark', undefined, { transition: false })` ya da `applyUiTheme(theme, { transition: false })`.

## Token katmanları

Token'lar üç katmandır. CSS değişken adları tek düzlemdedir; katman değişkenin **rolünü** söyler (`TOKEN_LAYERS` listeler):

| Katman | Ne tutar | Örnek |
| --- | --- | --- |
| **primitive** | Ham değerler: nötr skala, grafik rampası, yazı tipi, köşe | `--base-50…950`, `--chart-500`, `--radius` |
| **semantic** | Rol token'ları; çoğu bir primitive'e bağlıdır, mod burada ayrışır | `--background` → `base.50`, `--primary`, `--danger-foreground` |
| **component** | Bileşenlerin kullandığı türetilmiş değerler (CSS'te hesaplanır) | `--primary-soft`, `--ui-hover`, `--ui-focus-ring`, `--ui-control-h-md` |

Yeni bir renk gerektiğinde önce semantic bir token var mı bakılır; bileşene sabit renk yazılmaz.

### Renk biçimi

Preset renkleri **OKLCH** yazılır (`oklch(0.5485 0.2494 263.58)`); derleme, preset'te hex kalırsa hata verir. Hex bir marka rengini çevirmek için `hexToOklchString('#1B5CFF')` kullanın: aynı 8 bit rengi veren kayıpsız bir çeviridir. Renk seçiciler hex bekler; `colorToHex(token)` geri çevirir. Çalışma anındaki override'lar (kullanıcının seçtiği ana renk) hex kalabilir.

### Figma ve diğer araçlar için dışa aktarım

Her tema için `themes/<id>/tokens.json` üretilir ([W3C Design Tokens](https://www.designtokens.org/) biçimi; paket yolu `fewui/tokens/<id>.json`). Yapı: `primitive` · `semantic.light` / `semantic.dark` · `component.light` / `component.dark` / `component.size`.

```json
{
  "semantic": {
    "light": {
      "background": {
        "$type": "color",
        "$value": "{primitive.color.base.50}",
        "$extensions": { "com.fewui": { "cssVar": "--background", "css": "var(--base-50)", "resolved": "#fafafa" } }
      }
    }
  }
}
```

Figma OKLCH ve `color-mix()` okuyamadığı için renkler **çözülmüş sRGB hex** yazılır; özgün CSS değeri `$extensions["com.fewui"].css` altında durur. Dosya Tokens Studio gibi eklentilerle Figma değişkenlerine alınabilir: `semantic.light` ve `semantic.dark` kümeleri iki mod olarak eşlenir. Çalışma anında aynı çıktı için: `themeToDesignTokens('web')`. Create sayfasından indirilen tema paketi de `tokens.json` içerir.

## Sayfa içi önizleme

```html
<ui-theme-provider theme="android" mode="dark" background>
  <ui-card title="Önizleme">…</ui-card>
</ui-theme-provider>
```

## Bileşen defaults (`defaults.js`)

Prop verilmediğinde bileşenler en yakın provider'ın veya uygulamanın varsayılanını kullanır:

- `iconType`, `buttonRounded`, `buttonSize`, `inputSize`, `controlSize`
- `dateFormat`, `dateRangeFormat`, `timeFormat`
- `dialogMaxWidth`

## Renk yardımcıları

```js
import { pickContrastForeground, ensureContrastForMode, deriveBrandColorsFromPrimary } from 'fewui'
```

## Custom CSS

```js
import { applyThemeCustomCss } from 'fewui'

applyThemeCustomCss('.my-scope { … }', 'my-app-custom-css')
```

## SSR (landing)

```js
import { buildThemeStyleAttr, themeConfigToTokens } from 'fewui/landing'

const { classAttr, styleAttr } = buildThemeStyleAttr('landing', {
  mode: 'dark',
  overrides: themeConfigToTokens(storedSiteTheme),
})
```

## Yeni tema

1. Create sayfasında tasarla ve zip indir — ya da `themes/_template/` klasörünü kopyala.
2. `pnpm --filter fewui run build:themes` ile `color.css` üret.
3. `color.css` import et, `app.use(UiLib, { theme })`.
