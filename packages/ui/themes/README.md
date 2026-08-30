# fewui tema paketleri

Her tema kendi klasöründedir. Yeni tema = yeni klasör + `registry.js` kaydı.

## Paket yapısı

```
themes/{id}/
  index.js       manifest (id, css yolları, defaults, preset)
  defaults.js    bileşen varsayılanları (iconType, buttonRounded, radius, …)
  preset.js      runtime UiThemeConfig (applyUiTheme)
  color.css      :root + .dark tokenları
  styles.css     tema özel sınıflar / override
  platform/      isteğe bağlı (ios.css, android.css)
```

Şablon: `themes/_template/` — kopyala, `id` değiştir, `registry.js` içine ekle.

## CSS tüketimi

```css
@import "fewui/themes/web.css";
@import "fewui/themes/liquidglass.css";
@import "fewui/themes/android.css";
@import "fewui/themes/landing.css";
@import "fewui/themes/fewui.css";
```

Restta panel varsayılanı: `fewui/style.css` (web + liquid glass iOS platform).

## Runtime (Vue)

```js
import UiLib from 'fewui'

app.use(UiLib, {
  i18n,
  theme: 'web', // web | liquidglass | android | landing | fewui
  themeOverrides: {
    mode: 'dark',
    primaryColor: '#1B5CFF',
  },
})
```

- `theme` string → paket `preset.js` + `defaults.js` yüklenir.
- `themeOverrides` → anlık token / mod override (`mergeUiTheme`).
- Eski API: `theme: getThemePreset('panel')` hâlâ çalışır.

## defaults.js alanları

| Anahtar | Etki |
|---------|------|
| `iconType` | `ui-icon` ve ikonlu bileşenler |
| `buttonRounded` | `lg` (theme radius) veya `full` (pill) |
| `buttonSize` / `inputSize` / `controlSize` | ilgili bileşen boyutları |
| `dateFormat` / `dateRangeFormat` / `timeFormat` | picker tetikleyici metni |
| `dialogMaxWidth` | `ui-dialog` varsayılan genişlik |
| `cardPadding` | `--ui-card-padding` (`default`, `comfortable`, `spacious`, `compact`) |
| `radius` | `--radius` basamağı |

Bileşenler prop verilmediğinde `resolveThemeDefault` / `useUiDefaults` ile bu değerleri kullanır.

## Mevcut temalar

| id | Kullanım |
|----|----------|
| `web` | Restta panel (web) |
| `liquidglass` | iOS native cam |
| `android` | Material 3 / Capacitor Android |
| `landing` | Tenant public siteler |
| `fewui` | fewui.com marketing |

Eski preset eşlemesi: `panel` / `flat` → `web`, `landing` → `landing`.

## Yeni tema checklist

1. `themes/_template/` kopyala → `themes/my-theme/`
2. `color.css` + `styles.css` tokenlarını doldur
3. `defaults.js` + `preset.js` ayarla
4. `index.js` manifest güncelle
5. `src/theme/registry.js` → `THEME_PACKAGES` + `THEME_IDS`
6. `themes/my-theme.css` bundle + `package.json` exports
7. Uygulama: CSS import + `app.use(UiLib, { theme: 'my-theme' })`
