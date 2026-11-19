# Değişiklik günlüğü

Sürümler [SemVer](https://semver.org/lang/tr/) izler; 1.0 öncesinde küçük sürüm (0.x) davranış değişikliği taşıyabilir ve burada "Değişti" başlığında yazılır.

## 0.1.0 — 2026-11-17

### Eklendi

- **Bileşenler:** `ui-accordion` / `ui-accordion-item`, `ui-collapsible`, `ui-breadcrumb` / `ui-breadcrumb-item`, `ui-pagination`, `ui-kbd`, `ui-scroll-area`, `ui-context-menu`, `ui-menubar`, `ui-hover-card`, `ui-command`, `ui-chart`, `ui-resizable-group` / `-panel` / `-handle`.
- **`ui-dropdown`:** alt menü (`children`), onay / radyo öğeleri, `shortcut`, yazarak arama; `select` olayı işaretlenebilir öğede ikinci argüman olarak `{ checked, group }` verir.
- **`ui-slider`:** `range`, `min-distance`, `format-value`.
- **`ui-menu`:** `collapsed` (ikon rayı).
- **`ui-toast`:** `action: { label, onClick, keepOpen }`; grubu açıp kapatan düğme.
- **`ui-date-picker` / `ui-date-range-picker`:** `week-start`.
- **`ui-popover`:** `aria-label`, `#trigger` slotunda `triggerAttrs`, nokta / sanal dikdörtgen `anchor`.
- **RTL:** mantıksal boşluk ve hizalama, yöne duyarlı yerleşim ve ok tuşları, `ui-icon--dir`.
- **Tailwind v4 köprüsü:** `fewui/tailwind.css` (`@theme inline` + `dark` çeşidi).
- **Tipler:** üretilen `types/index.d.ts` (`GlobalComponents` dahil) ve `fewui/components.json`.
- **Sistem modu:** `mode: 'system'` cihazın açık / koyu ayarını izler (`applyUiTheme`, `setUiThemeMode`, `ui-theme-provider`); `getUiThemeMode`, `buildThemeModeScript` (ilk boyama betiği) ve `ui-theme-mode-change` olayı.
- **Tema geçişi:** renk token'ları `@property` ile tipli; mod / ana renk değişimi 200 ms'lik geçişle olur (`transition: false` ile kapanır, hareket azaltmada yok).
- **Tasarım token dışa aktarımı:** her tema için `tokens.json` (W3C Design Tokens; `fewui/tokens/<id>.json`), `themeToDesignTokens`, `TOKEN_LAYERS` (primitive / semantic / component).
- **Renk yardımcıları:** `hexToOklchString`, `colorToHex`, `rgbToOklch`.
- **Named export:** `PriceDisplay`, `PriceDisplayGroup`, `PriceDisplayRow`, `PriceText`.
- **Altyapı:** Vitest testleri, ESLint, GitHub Actions iş akışı, bileşen doküman sayfaları ve `llms.txt` üretimi.

### Değişti

- **Dil yedeği İngilizce:** paketi olmayan dilde arayüz metinleri ve boş / tanınmayan dilde tarihler artık Türkçeye değil İngilizceye düşer. `getUiMessages()` varsayılanı `en`. Tarayıcının tanıdığı diller tarihi kendi dilinde yazar.
- **Hafta başlangıcı dilden gelir:** takvim Türkçede ve `en` (en-GB) biçiminde pazartesi başlar; eskiden hep pazardı. `week-start` ile ezilir.
- **Escape** yalnız en üstteki katmanı kapatır: dialog içindeki açık select / menü önce kapanır.
- **Modal odak denetimi:** dialog ve modal sheet açıkken odak arkadaki sayfaya geçerse panele döner (`data-ui-focus-allow` ile muaf tutulur).
- **Modal `ui-sheet`** arka plan kaydırmasını kilitler.
- **Toast** duyuruları kalıcı canlı bölgeden yapılır; kartlar `role="status"` / `alert` taşımaz. İmleç ya da odak üzerindeyken otomatik kapanmaz.
- **DOM kimlikleri** Vue `useId()` ile üretilir (`ui-select-v-0-3` biçimi); sunucu ve istemci aynı kimliği verir. `resetUiIds()` çağrısı artık gerekli değil, zararsızdır.
- **Preset renkleri OKLCH:** tema preset'lerindeki 190 hex değer kayıpsız OKLCH'ye çevrildi; derleme preset'te hex bulursa hata verir. Düz renkler aynıdır; `color-mix()` ile türetilen tonlarda tarayıcı yuvarlaması nedeniyle bazı piksellerde en çok 1/255'lik fark oluşur.
- **Peer bağımlılıklar:** `vue ^3.5`, `tailwindcss ^4` (isteğe bağlı). `tailwind-preset.cjs` (v3) eski olarak işaretlendi.

### Düzeltildi

- Dialog içindeki tooltip dialogun arkasında kalıyordu.
- Tooltip tetikleyiciye `aria-describedby` ile bağlanmıyordu.
- `ui-time-picker` panel açıkken tetikleyicide saati `9:0` biçiminde yazıyordu.
- `ui-date-picker` ay düğmelerinin etiketi İngilizce sabitti; toast kapatma etiketinin Türkçe sabit yedeği vardı.
- `ui-dropdown`: ikonlu ve ikonsuz öğelerin karışık olduğu menüde etiketler hizasızdı; ikonsuz öğe artık ikon sütunu kadar içeriden başlar.
- Kapalı çoklu aramalı select, içinde bulunduğu dialogun Escape ile kapanmasını engelliyordu.
