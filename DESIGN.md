# Tasarım ve bileşen kullanım notları

Bu belge **fewui** ile geliştirdiğimiz arayüz dilini, token’ları ve tekrar kullanım kalıplarını özetler. Ayrıntılı sınıflar için `packages/ui/themes/components.css` ve `packages/ui/themes/default.css` kaynak kabul edilir.

---

## 1. Tema ve token’lar

- **Font:** Inter (`--font-sans`), `default.css` ile yüklenir.
- **Renkler:** `:root` ve `.dark` altında **OKLCH / özel değerler**; nötr skala `--base-50` … `--base-950` (Tailwind `neutral` ile uyumlu uçlar).
- **Semantik çiftler:** `background` / `foreground`, `surface` / `surface-foreground`, `control` / `control-foreground`, `primary`, `secondary`, `muted`, `muted-foreground`, `border`, `ring`.
- **Özel yüzey:** `surface-input` (`--input-background`) — input / select / segment izi gibi “konteyner içi” dolgular için.
- **`--radius`:** 26px; `rounded-lg` ile eşlenen kontrol kabuğu için referans.
- **Klavye odak:** `--ui-focus-ring` = `color-mix(ring, 45% transparent)` — `ring-2`, `ring-offset-2` ile birlikte kullanılır.

**Koyu tema:** Sayfa `background` daha derin; kart ve paneller `surface` ile hizalanır. Border ve `surface-input` yüzeyden ayrışır, kart üzerinde gereksiz çift çerçeve oluşmaz.

---

## 2. Tipografi

| Sınıf | Kullanım |
|--------|-----------|
| `ui-heading-1` … `ui-heading-6` | Sayfa / bölüm hiyerarşisi |
| `ui-heading-3` | Kart veya bölüm başlığı (16px / medium / 24px satır) |
| `ui-text-default` | Gövde / yardımcı metin (`text-sm`, `text-muted-foreground`) |
| `ui-text-strong` | Gövde vurgusu (`text-sm`, `font-medium`, `text-foreground`) |
| `ui-text-muted` | Yalnız ikincil renk; boyut çevreden gelir |
| `ui-text-2xs` | Mikro metin 11px / 14px (rozet, sayaç, grup etiketi). 12px altı yalnız bu sınıfla; `text-[10px]` gibi keyfi değer yazılmaz |
| `ui-display-sm` · `-md` · `-lg` | Büyük rakam (tutar, metrik): 18 / 20 / 24px, `font-medium`, `tabular-nums` |

Kart gövdesi (`ui-card-body`) varsayılan olarak bu tabanı kullanır.

**Ölçek:** gövde metni 12 / 14 / 16 / 18px (`text-xs` / `text-sm` / `text-base` / `text-lg`). Bu değerlerin arası (ör. 13px, 15px) kullanılmaz. 12px altı yalnız mikro metindir (rozet, sayaç, avatar harfi); 20px üstü yalnız kasıtlı vurgudur (marka, büyük rakam). Vurgu kalınlığı en fazla `font-medium` (500); `font-semibold` ve `font-bold` yoktur.

**Katman sırası:** dialog ve sheet açılınca altta açık kalan popover, dropdown ve select kapanır; arkada etkileşimli kalmazlar. Dialog içinden açılan yüzen katman her zaman dialogun üstündedir. Sıra `src/theme/overlay-stack.js` kaydından gelir (taban: dialog 400, onay 420, popover 450, toast 500).

**Tablo:** gövde hücresindeki metin dar ekranda `...` ile kaybolmaz, satır kırar. Başlık satırı tek satır kalır; sığmayan başlıkta tam metin üzerine gelince görünür.

---

## 3. Yüzeyler ve layout

| Kavram | Davranış |
|--------|-----------|
| **`ui-surface`** | `rounded-3xl`, `border-border`, `bg-surface`, `shadow-lg` — **Card**, **Popover** paneli, **Dialog** paneli aynı kabuk. |
| **`ui-card`** | `ui-surface` + flex kolon; header / body / footer slot düzeni. İç boşluk ve bölüm arası aynı değerdir: `--ui-card-padding` = `--ui-card-gap` = `--ui-card-space` (varsayılan 1.5rem). Tema `cardSpace` token'ı ile değiştirir. |
| **`ui-empty`** | Gölgeli kart kabuğu yok; içerik ortalanmış boş durum. |

**İkincil yüzeyler (token).** Kart içindeki ikincil bölgeler opaklık sınıfıyla değil token'la yazılır:

| Sınıf | Değer | Kullanım |
|-------|-------|----------|
| `bg-surface-subtle` | muted %30 | liste satırı zemini, hover, kart içi kutu |
| `bg-surface-sunken` | muted %60 | seçili satır, ikon karosu, önizleme / kod kutusu |
| `border-border-subtle` | border %60 | satır ayırıcı, ikincil çerçeve |

`bg-muted/30`, `border-border/60` gibi opaklık çeşitleri yazılmaz (`pnpm run check:tokens` raporlar). Tema bu üç token'ı ayrıca verebilir.

**Yatay kaydırma şeridi.** Çip, kategori ve araç satırları `ui-scroll-x` (yatay kaydırır, dikeyde gizler) + zeminsiz şeritte `ui-scroll-bleed` kullanır. Bir eksende `overflow: auto` olan kutu her şeyi kenarında kırpar; `ui-scroll-bleed` dikeyde `--ui-scroll-bleed` (10px) pay bırakır ve negatif dış boşlukla geri alır — gölge, odak halkası ve basılı büyüme kesilmez, yerleşim değişmez. Zeminli izlerde (segmented sekme, segment grubu) kullanılmaz.

**Boşluk ve yoğunluk.** Bölüm, alan yığını, liste satırı, araç çubuğu ve kart boşlukları `--ui-space-*` / `--ui-list-row-py` / `--ui-toolbar-gap` değişkenlerindendir (bkz. `packages/ui/themes/README.md`). `defaults.density = 'compact'` hepsini birlikte daraltır; ekranlar bu değerleri elle `gap-4` / `py-3` ile yeniden yazmaz.

---

## 4. Kontrol ölçüsü ve köşeler

- **Standart kontrol yüksekliği (md):** `h-9` (36px), metin ~14px/20px, yatay padding ~12px, `rounded-lg` (→ `--radius` preset üzerinden).
- **Input / Select tek satır kabuğu:** ~36px yükseklik, **`rounded-[22px]`**, `border-transparent`, `bg-surface-input`, odakta `--ui-focus-ring`.
- **`ui-control-h-*`:** Button ve benzeri `ui-button` için sm / md / lg ölçüleri — **köşe yuvarlaklığı buradan gelir**; MenuItem vb. için ek `rounded-*` sınıfları yazma, `Button`’ın kendi yapısına güvenilir.
- **Aynı satır, aynı ölçü:** Yan yana duran düğme, segment grubu, input ve select aynı `size` ile aynı yüksekliktedir. Segment grubunda yükseklik dış kutudadır. Düğme grubunun çevresine dikey dolgu veya çerçeve eklenerek iz, yanındaki düğmeden yüksek bırakılmaz.
- **Uyarı kutusu:** Başlık, açıklama ve alttaki eylem aynı sol kenardadır. Dolu düğmenin iç dolgusu etiketi içeri kaydırmaz. Başlık–açıklama aralığı sıkı, eylem bir adım aşağıdadır. İkincil metin nötr gri değil, uyarının ton karışımıdır.

---

## 5. Odak ve kart içi kontroller

- Odak ring’i: çoğu kontrol `focus-visible:ring-2 ring-offset-2`.
- **Kart içinde:** `ring-offset-background` yerine **`ring-offset-surface`** kullanılıyorsa çift çerçeve oluşmaz — `components.css` içinde `.ui-card …` seçicileriyle hizalı (input, tags, pin, select filter, bazı buton / stepper / **segmented tab** tetikleyicileri).

---

## 6. Button

- **Variants:** `solid` | `outline` | `ghost` | `link` | `nav`
- **Colors:** `primary` | `secondary` | `warning` | `success` | `info` | `danger`
- **Yerleşim değişmezleri** (denetim: `scripts/audit-control-layout.js`):
  - Sol ve sağ iç boşluk eşittir; içerik varsayılan olarak ortalanır. Düğme kapsayıcısında uzasa da (flex-col, grid hücresi) metin sola kaymaz. Sola yaslama yalnız `text-align="left"` ile (menü, liste, nav).
  - Metin ve ikonlar düğmenin dikey merkezindedir (±1px). Yükseklik `ui-control-h-*`, satır yüksekliği boyutla birlikte gelir; dışarıdan `h-*`, `py-*`, `leading-*` verilmez.
  - Yalnız ikonlu düğmede boş metin kabı basılmaz (flex `gap` ikonu kaydırmasın). Kare ikon düğmesi için `cubed`.
  - Slot içinde satır içi kutu (renk noktası, avatar, rozet) varsa metin kabı kendi içinde dikey ortalanır; ek `inline-flex` sarmalayıcı yeterlidir, hizalama sınıfı gerekmez.
  - Ölçü / hiza için sınıf yerine prop: tam genişlik `block`, sol hiza `text-align`, boyut `size`, pill `rounded`.
- **`rounded` prop:** Ekstra olarak `rounded-full` (pill) — yalnızca prop ile; rastgele `rounded-xl` ile ezme.
- **Metin yoğunluğu (outline / ghost):** Renkli durumlarda yazı **`text-*` semantik renginde** tutulur (ör. `outline` + `warning` → `text-warning`); **`text-*-foreground`** yalnızca dolu zemin için — açık/koyu zeminde kontrast kaybını önlemek için.
- **Loading / disabled:** Opacity ve `cursor-not-allowed`; tıklama engellenir.
- **`block`, `text-align`, `cubed`:** Geniş blok, sol hizalı metin, ikon kutusu için.

---

## 7. İkonlar

- **`Icon`** = Font Awesome **webfont** (`fa-solid`, …); uygulama `all.min.css` yüklemelidir.
- **Varsayılan ağırlık:** **`light`** (`ui-icon` ve `iconType` prop’ları); segmented tab tetikleyicileri görünürlük için **`solid`** kalır.
- **`TabTrigger` segmented:** İkon tipi otomatik **`solid`**, boyut **`md`** — üst-alt (ikon / etiket) düzen için.

---

## 8. Form

- **`FormRow`:** Etiket + açıklama + kontrol; `direction` horizontal / vertical; **`variant="card"`** kenarlıklı satır için `rounded-[22px]` ile input kabuğu ile uyumlu.
- **`Input`:** Tek/çok satır; multiline `ui-input--multiline`.
- **`Password`:** Güç göstergesi `Progress` ile; zayıf / orta / güçlü için semantik renkler.
- **`Pin`:** Hücreler `rounded-[22px]`, input ile aynı kabuk hissi.
- **`Phone`:** `Input` + inline `Select` birleşimi (ülke + numara).
- **`Select`:** `filterable`, uzun listelerde scroll; kısa listelerde panel hizası davranışı.
- **`Tags`:** Etiket girişi; boş durumda `--solo` ile yükseklik uyumu.

---

## 9. Tabs

- **Variants:** `line` | `segmented` (eski **pills** tab varyantı kaldırıldı; **Stepper** `variant="pills"` ayrı bileşen).
- **`line`:** Alt çizgi seçimi; yatayda border-bottom çizgisi; dikeyde solda ince gösterge çubuğu.
- **`segmented`:** Yalnızca **yatay** anlamlı; dikey + `segmented` kullanılırsa liste `line` düzenine düşer.
- **Segmented görünüm:** Dış iz `rounded-full`; açık temada iz **`bg-control` + `border-border`**, koyuda **`bg-surface-input`**; seçili hücre **`bg-surface`**, ince `border-border`, hafif gölge. İkon **üstte**, etiket **altta** (`text-[11px]`). Pasif metin açıkta **`text-base-600`**, koyuda **`text-muted-foreground`**. **Line** sekmelerde pasif metin/ikon için aynı ayrım uygulanır.

---

## 10. SegmentGroup (dil, küçük ikili seçim)

- İz: **`rounded-full`**, açık temada **`bg-control` + `border-border`**, koyuda **`bg-surface-input`** — segmented tab ile aynı “gri iz” mantığı.
- Pasif segment: açıkta **`text-base-600`**, koyuda **`text-muted-foreground`**.
- Seçili: **`bg-primary` + `text-primary-foreground`** (vurgulu ana aksiyon).

### Kayan seçim göstergesi (SegmentGroup + segmented Tabs)

- Seçili zemin her öğenin kendi arka planı değil, grupta **tek bir gösterge**dir (`ui-selection-indicator`). Seçim değişince yeni seçilinin arkasına kayar; yolda hafifçe büyür (`1 → 1.05 → 1`) ve aynı ölçeğe döner.
- Varsayılan açıktır; `:animated="false"` (`ui-segment-group` veya `ui-tabs`) eski davranışa döner. `line` sekmelerde gösterge yoktur.
- Hareket: `--ui-indicator-duration` (420ms), `--ui-indicator-ease` (`cubic-bezier(0.32, 0.72, 0, 1)`), `--ui-indicator-pop-scale` (1.05) — tema veya kapsayıcıda override edilebilir.
- İlk yerleşim, yeniden boyutlanma ve görünür olma animasyonsuzdur; yalnız seçim değişimi kayar. JS ölçene kadar (SSR) seçili öğe kendi zeminini çizer. `prefers-reduced-motion` hareketi ve büyümeyi kapatır.
- Uygulama seçili segment / sekmeye ayrıca zemin, gölge veya `:deep` stili yazmaz; gösterge tek kaynaktır.

---

## 11. Menu

- **Kabuksuz** liste: `Menu` kendi başına `ui-card` gibi border/gölge/padding taşımaz; **kart içinde** veya düz layout’ta kullanılır.
- **`MenuItem`:** `Button` (`variant="ghost"`, `color="secondary"`, `block`, `text-align="left"`) — köşe `ui-control-h-md` / `rounded-lg` ile sistemle uyumlu; özel `rounded-xl` kuralı yok.

---

## 12. Diğer bileşen notları

- **Progress:** `type="circle" | "bar"` — şifre gücü, slider izi vb.
- **Skeleton:** Zemin opak gri değil, ön plan renginin saydam tonu (`--ui-skeleton-bg` = `--ui-skeleton-tint` %8, varsayılan `--foreground`). Altındaki yüzeyi koyulaştırır / açar; renkli kartta gri yama olmaz. Açık yazılı renkli yüzeyde `--ui-skeleton-tint: currentColor`, daha belirgin iskelet için `--ui-skeleton-strength` (ör. 12%). Skeleton'a `class` ile renk verilmez.
- **Slider:** Şeffaf native track; dolgu `Progress` bar ile.
- **Stepper:** `default` ve `pills` (bu “pills” **Tabs** değil).
- **Dialog / Toast / Confirm:** Programatik API’ler (`useDialog`, `useConfirm`, `useToast`); kökte ilgili portal bileşenleri gerekir.
- **ListItem, Badge, Alert, Radio, Checkbox, Switch:** Ortak input/foreground/border token’ları; checkbox’ta köşe “hap” değil, kontrollü küçük radius.
- **Stat / StatGroup:** Metrik her zaman `ui-stat`. Değer `ui-display-*`; değişim artışta `success`, azalışta `danger` — azalmanın iyi olduğu metrikte (gider, iptal, ret) `invert-trend`. Kart içinde `variant="soft"`, sayfada tek başına `variant="surface"`. `text-emerald-*` gibi sabit renk yazılmaz.
- **IconTile:** Satır, kart ve metrik başlığındaki renkli ikon kutusu. Elle `flex size-10 rounded-xl bg-muted/40` karo yazılmaz. Nötr varsayılan; tonlu karo yalnız anlam taşıdığında.
- **ListItem (satır düzeni):** Ayar / gezinme satırı `title` + `description` + `icon` + `to` / `interactive`. Kart içinde `ui-card remove-padding` + `ui-list`.
- **FilterChip / ChipGroup:** Filtre tetikleyicisi `ui-filter-chip`; kısa seçenek sırası (dönem, kapsam, etiket) `ui-chip-group`. `ui-button` + `aria-pressed` ile elle toggle grubu yazılmaz. Sekme için `ui-tabs`, form içi ikili seçim için `ui-segment-group`.
- **Section:** Detay ve form bölümleri `ui-section` (etiketli ayırıcı + açıklama + alan yığını).
- **Toolbar:** Liste / rapor üstü araç ve filtre satırı `ui-toolbar`; aralık `--ui-toolbar-gap`.

### Liste filtreleri (panel `app-data-table` / `app-data-list`)

1. Kapsam segmenti (≤4 seçenek: durum, tür) varsa **tek** ve satırın başındadır (`type: 'segment'`, `segmentInline`); daha çok seçenek `select` olur.
2. Metin araması segmentten sonraki **ilk** filtredir; listede tek serbest arama vardır.
3. Görünür filtreler `primary: true` ile aynı satırda çiptir. `primary` varsayılan olarak çiptir; `trigger: 'badge'` yalnız birincil olmayan filtrede yazılır.
4. Nadir kullanılan filtreler `primary` almaz; "Filtre ekle" menüsünden açılır.
5. Rapor ve pano dönemi `ui-chip-group`; özel aralık `ui-date-range-picker` `show-trigger=false` + `anchor` ile ilgili çipin altında açılır.

Geliştirmede `warnListFilterRule` (panel `list-query-mixin.js`) kurala uymayan tanımları konsola yazar.

---

## 13. Önizleme uygulaması (docs)

- Örnekler mümkün olduğunca **gerçek ekran senaryolarına** yakın (kayıt, giriş, profil, etkinlik formu, hesap sekmeleri); saf “API demo” metinlerinden kaçınılır.
- Tema / dil: header’da segment ile `light` / `dark`, `TR` / `EN`.

---

## 14. i18n

- Bileşen metinleri **`$t('ui.…')`** ile; locale paketleri `app.use(UiLib, { i18n, locale: 'tr' })` ile birleştirilir. Ayrıntı: `packages/ui/README.md`.

---

## 15. Tüketim özeti

```js
import UiLib from 'fewui'
import 'fewui/style.css' // default.css + components.css zinciri
app.use(UiLib, { i18n, locale: 'tr' })
```

Tailwind: `packages/ui/tailwind-preset.cjs` — `base` / `neutral`, semantik renkler ve `borderRadius.lg` → `var(--radius)`.

---

*Son güncelleme: depodaki `components.css` / `default.css` ile uyumlu tutulmalı; stil değişikliklerinde bu dosyayı güncellemek faydalıdır.*

## API sözlüğü (v2)

`scripts/check-api-consistency.mjs` build öncesi bu kuralları denetler.

- **`color`** = ton: `primary | secondary | success | warning | info | danger`. Button ek olarak `input` yüzeyini kabul eder. `error` / `destructive` kullanılmaz.
- **`variant`** = görsel stil (Button: `solid | outline | ghost | link | nav`; Badge / Tag: `solid | outline | muted`). Ton değeri `variant`'a yazılmaz.
- **`size`** = `xs | sm | md | lg | xl | 2xl` ölçeğinin alt kümesi.
- **`block`** = tam genişlik (eski `fulled` kaldırıldı).
- **Event'ler** kebab-case (`filter-change`); iki yönlü durum `update:<prop>` (`v-model:open`).
- **CSS token'ı** `--danger` / `--danger-foreground` (Tailwind: `text-danger`, `bg-danger/10`).
- Toast: `pushToast({ color: 'danger', title })`; onay: `requestConfirm({ color: 'danger' })`; menü öğesi: `{ color: 'danger' }`.
