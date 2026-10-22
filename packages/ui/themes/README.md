# fewui tema paketleri (v2)

Bir tema tek kaynaktan tanımlanır: `preset.js` içindeki token'lar. `color.css` bu dosyadan **üretilir**;
elle düzenlenmez. Aynı paket hem uygulama kökünde (`app.use`) hem sayfa içi önizlemede
(`<ui-theme-provider>`) kullanılır.

## Paket yapısı

```
themes/{id}/
  index.js       defineTheme({ id, label, description, preset, defaults, css })
  preset.js      { fonts: { body, heading }, tokens: { light: {...}, dark: {...} } }
  defaults.js    bileşen prop varsayılanları
  color.css      ÜRETİLİR — :root (light) + .dark (yalnızca farklar)
  styles.css     temaya özel kurallar (isteğe bağlı)
  platform/      isteğe bağlı platform katmanı (ios.css, android.css)
```

Üretim: `pnpm --filter fewui run build:themes` (build öncesi otomatik çalışır).
Denetim: `pnpm --filter fewui run check:themes` — `color.css` güncel değilse hata verir.

## Token'lar (`preset.tokens`)

`tokens.light` tam set taşır, `tokens.dark` yalnızca light'tan farklı değerleri. Anahtarlar camelCase
yazılır ve CSS değişkenine çevrilir (`surfaceForeground` → `--surface-foreground`, `chart500` → `--chart-500`).
`--` ile başlayan anahtarlar olduğu gibi kullanılır (ör. `'--ui-m3-outline'`).

| Grup | Token'lar |
|------|-----------|
| Renkler | `background`, `foreground`, `surface`, `surfaceForeground`, `control`, `controlForeground`, `primary`, `primaryForeground`, `secondary`, `secondaryForeground`, `muted`, `mutedForeground`, `accent`, `accentForeground`, `border`, `ring` |
| İkincil yüzey | `surfaceSubtle`, `surfaceSunken`, `borderSubtle` — verilmezse `muted` / `border` üzerinden türetilir (Tailwind: `bg-surface-subtle`, `bg-surface-sunken`, `border-border-subtle`) |
| Durum | `success`, `warning`, `info`, `danger` + her birinin `*Foreground`'u |
| Skala | `base: { 50 … 950 }` → `--base-*` |
| Yüzeyler | `surfaceStyle`, `controlStyle`, `inputStyle`: `{ mixFrom, opacity, backdropBlur }` |
| Şekil | `radius` (`--radius`; `sm` / `md` / `3xl` basamakları türetilir), `cardPadding` (`compact` · `default` · `comfortable` · `spacious` veya CSS uzunluğu) |
| Efekt | `uiShadowSm`, `uiShadowMd`, `uiShadowSurface`, `uiFillGrad*`, `uiScrollbar*` |
| Grafik | `chart50` … `chart900`, `chart`, `chartForeground` |

Türetilmiş değişkenler (`--surface-bg`, `--control-bg`, `--input-background`, `--border` varsayılanı,
`--surface-subtle` = muted %30, `--surface-sunken` = muted %60, `--border-subtle` = border %60,
`--ui-focus-ring`, radius basamakları) `src/theme/tokens.js` → `DERIVED_VARS` içindedir ve her tema
bloğuna yazılır. Bir token olarak açıkça verilirse türetilmiş formülün yerine geçer.

## Uygulamada kullanım

```js
import UiLib from 'fewui'
import myTheme from './themes/my-theme/index.js'
import './themes/my-theme/color.css'

app.use(UiLib, {
  i18n,
  theme: myTheme,          // veya kayıtlı id: 'web' | 'liquidglass' | 'android' | 'landing' | 'fewui'
  mode: 'dark',            // verilmezse kökteki .dark korunur
  overrides: {             // isteğe bağlı anlık token'lar (inline)
    light: { primary: '#1B5CFF' },
    dark: { primary: '#5B8CFF' },
  },
})
```

- `color.css` import edilmediyse `inline: true` tüm token'ları köke inline yazar.
- Çalışırken tema değiştirmek: `setUiTheme(themeOrId, { mode, overrides })` — token'lar ve bileşen
  varsayılanları birlikte güncellenir.
- Yalnızca mod değiştirmek: `setUiThemeMode('dark')`.
- Kayıtlı olmayan bir paketi id ile kullanmak için önce `registerTheme(pkg)`.

## Sayfa içi önizleme

```html
<ui-theme-provider :theme="myTheme" mode="dark" background>
  <!-- bu alt ağaç kendi token'ları ve varsayılanlarıyla çizilir -->
</ui-theme-provider>
```

Provider token'ları kendi elemanına inline yazar, `defaults` değerlerini alt ağaca provide eder ve
`data-ui-mode` taşır. `ui-dialog`, `ui-popover`, `ui-tooltip`, `ui-sheet` provider içindeyse body yerine
provider portalına teleport edilir (`uiPortalMixin`), böylece katmanlar da önizleme temasıyla çizilir.

Tüketen uygulamada iki ayar gerekir:

```css
@custom-variant dark (&:is(.dark *):not([data-ui-mode='light'] *));

@theme inline {
  --color-primary: var(--primary);
  /* … */
}
```

`inline` olmadan Tailwind utility'leri `:root` değerini okur; `dark` varyantındaki `:not(...)` koyu kök
içindeki açık provider'ın koyu stilleri almasını engeller. Kütüphanenin kendi `.dark .ui-*` seçicileri
aynı koşulu taşır.

## Create sayfası

`@fewui/theme-playground` (fewui.com `/create`): başlangıç teması seçilir, light/dark token'ları,
yüzey stilleri, yazı tipi, şekil ve bileşen varsayılanları düzenlenir; önizleme açık, koyu veya yan yana
`ui-theme-provider` ile çizilir. Çıktı:

- **Tema paketi (zip):** `index.js`, `preset.js`, `defaults.js`, üretilmiş `color.css`, `styles.css`,
  `theme.json`, `README.md` — doğrudan `themes/<id>/` olarak kullanılır.
- **theme.json:** create sayfasına geri yüklenir (İçe aktar).
- **Cursor kuralı / Skill:** projedeki ajanlar için tema ve API sözlüğü.

## defaults.js alanları

| Anahtar | Etki |
|---------|------|
| `iconType` | `ui-icon` ve ikonlu bileşenler |
| `buttonRounded` | `lg` (tema radius) veya `full` (pill) |
| `buttonSize` / `inputSize` / `controlSize` | ilgili bileşen boyutları |
| `dateFormat` / `dateRangeFormat` / `timeFormat` | picker tetikleyici metni |
| `dialogMaxWidth` | `ui-dialog` varsayılan genişlik |
| `density` | `comfortable` (varsayılan) · `compact` — kökte / `ui-theme-provider`'da `data-ui-density`; boşluk ölçeğini daraltır |

### Boşluk ölçeği

`themes/_shared/global.css` kökte tanımlar; tema veya uygulama override edebilir. `density: 'compact'`
aynı değişkenleri küçültür.

| Değişken | comfortable | compact | Kullanım |
|----------|-------------|---------|----------|
| `--ui-space-section` | 1.5rem | 1rem | `ui-section` bölümleri arası |
| `--ui-space-stack` | 1rem | 0.75rem | alan yığını, `ui-stat-group` aralığı |
| `--ui-space-inline` | 0.5rem | 0.375rem | satır içi öğeler |
| `--ui-list-row-py` | 0.75rem | 0.5rem | `ui-list` satırı dikey dolgu |
| `--ui-toolbar-gap` | 0.75rem | 0.5rem | `ui-toolbar` |
| `--ui-space-card` | 1.5rem | 1rem | kart iç boşluğu (tema `cardPadding` önceliklidir) |

Options API bileşenleri değerleri `uiDefaultsMixin` (`this.uiDefaults`) ile, Composition API
`useUiDefaults()` ile okur; en yakın `ui-theme-provider` veya uygulama varsayılanı kullanılır.

## Kayıtlı düz yapılandırmalar

Veritabanında saklanan veya AI'ın ürettiği düz tema nesneleri (`primaryColor`, `fontFamily`,
`surfaceStyle`, `colors`, …) `themeConfigToTokens(config)` ile token haritasına çevrilip `overrides`
olarak verilir.

## Mevcut temalar

| id | Kullanım |
|----|----------|
| `web` | Restta panel (web) |
| `liquidglass` | iOS native (`extends: web`; kart opak, cam chrome / popover) |
| `android` | Material 3 — surface containers, filled/tonal button, elevated card (`cap-android`) |
| `landing` | Tenant public siteler |
| `fewui` | fewui.com marketing |

## Yeni tema checklist

1. `themes/_template/` kopyala → `themes/my-theme/`, `index.js` içinde `id` değiştir.
2. `preset.js` token'larını doldur (veya create sayfasında tasarlayıp zip olarak indir).
3. `pnpm --filter fewui run build:themes` → `color.css` üretilir.
4. Kütüphaneye dahil edilecekse: `src/theme/registry.js` içinde `registerTheme`, `themes/my-theme.css`
   bundle ve `package.json` exports.
5. Uygulama dışı paket: `color.css` import + `app.use(UiLib, { theme: myTheme })`.
