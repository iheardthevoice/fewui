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

- **Standart kontrol yüksekliği (md):** `h-8` (32px), metin 14px/20px. Ölçek: sm 28 / md 32 / lg 36px; lg metni 16px/24px (Button, Input, Select, panel araması aynı). Kart boşluğu 20px (`p-5`).
- **Kontrol köşesi tema token'ıdır, Tailwind `rounded-lg` değildir:** `--ui-radius-control-{sm,md,lg}` = `min(--radius, yükseklik / 2)`. fewui kontrolleri uygulamanın `--radius-*` eşlemesine bağlı değildir.
- **Yan boşluk köşeye bağlıdır:** `--ui-control-px-{sm,md,lg}` köşe büyüdükçe artar (köşeli ~10 / 12 / 15px, hap ~13 / 16 / 19px). Hapta kavis metnin yanını görsel olarak yer; üst ve yan boşluğu eşitlemek metni kenara yapışık gösterir. `rounded-full` Button: 14 / 16 / 20px.
- **Input / Select tek satır kabuğu:** `border-transparent`, `bg-surface-input`, köşe ve yan boşluk yukarıdaki token'lardan. Odak halkası yalnız klavye odağında; açık Select tetikleyicisi halka almaz.
- **Yüzey içi öğeler eş merkezlidir:** Panel (`--radius`) içindeki satır `--ui-surface-inset` (8px) içeride durur, köşesi `--ui-radius-inner` = `--radius − inset`. Select listesi, panel araması ve Dropdown satırları bu kuralı kullanır.
- **Tek seçim dili — soluk primary zemin + primary metin (`ui-fill-primary-soft`):** SidebarItem, MenuItem, Select seçeneği, SegmentGroup, segmentli Tabs (kayan gösterge dahil), ChipGroup, FilterChip (aktif), tarih aralığı hazır seçimi, takvimde seçili gün / aralık uçları, IconPicker, kart tipi Radio / Checkbox (gölgesiz, soluk zemin + primary başlık). Radio / checkbox işaretleri dolu kalır. Dolu primary yalnız aksiyondur.
- **Hover seçili tondan hafiftir:** liste / menü / popover / tablo / ghost düğme hover zemini `--ui-hover` (light yüzeye %4, dark %7 foreground) — seçili zemin `--primary-soft` hover'dan belirgin; gri iz üstündeki segment hover'ı hariç.
- **Seçim dili kapsamı (tam liste):** Select seçeneği, MenuItem, SidebarItem, segment, segmentli ve çizgili Tabs (çizgili: primary metin + primary çizgi, zeminsiz), ChipGroup, FilterChip, FieldAction tetikleyicisi, tarih aralığı hazır seçimi, takvim günü, TimePicker bandı, Stepper geçerli adım, tablo seçili satır (zemin; metin foreground), ActionCard, IconPicker, kart tipi Radio / Checkbox, mobil dock aktif. İşaret olarak dolu kalanlar: checkbox / radio işareti, switch, takvimde bugün halkası, renk seçici halkası, ilerleme çubuğu, stepper tamamlanan adım, onboarding noktası.
- **Primary her modda kendi tonunda (rol başına türetilir, ton ve doygunluk korunur):**
  - Dolgu `--primary`: panelde light / dark ayrı ayarlanır; dark'ta beyaz etiket ≥4.5:1 olacak kadar koyulaştırılır (`ensureContrastForMode`, oklch destekli).
  - Seçili metin `--ui-selected-fg`: light'ta en fazla L 0.5, dark'ta en az L 0.8 — soluk zeminde her palette ≥4.5:1.
  - Soluk zemin `--primary-soft`: light primary %10 + yüzey; dark seçili tonun %18'i + yüzey (gri izden açık).
  - Odak halkası `--ui-focus-ring`: light en fazla L 0.55, dark en az L 0.72 — yüzey ve gri izde ≥3:1.
  - Göreli renk sözdizimi `@supports (color: oklch(from red l c h))` içinde; desteklemeyen tarayıcıda `color-mix` yedekleri.
- **Tonlu metin `--{ton}-ink` kullanır, ham ton değil:** muted / ghost / outline / link düğme, rozet, etiket, istatistik değişimi, fiyat metni. Ink = ton + foreground karışımı (light'ta koyu, dark'ta açık); yüzeyde ve tint zeminde ≥4.5:1. Ham ton (`text-warning` vb.) yalnız ikon ve dolgu içindir. Dolu tonlar kendi `*-foreground`'ı ile ≥4.5:1 tutulur (light + dark).
- **Klavye:** Select ↑ ↓ Home End PageUp PageDown ile gezilir, Enter / Space seçer; odak tetikleyicide veya aramada kalır, vurgulanan seçenek `aria-activedescendant`. Fare hover'ı aynı vurguyu taşır. Açık panelde tetikleyici halka almaz.
- **Segment izi iç boşluksuz, sekme izi hafif iç boşluklu:** segmentte seçili öğe izin tam yüksekliğinde (28 / 32 / 36). Segmentli sekme ayrı bir öğe — iz 4px (`p-1`) iç boşluklu, seçili sekme izin içinde hap (iz 40 / 44 / 48); kenarlık iç gölge. Sekmede ikon üstte, etiket altta — segment'ten ayrılan yan budur (segmentte ikon solda, tek satır). Sekme her zaman kontrollerden büyüktür.
- **Kayan seçim göstergesi:** segment ve sekmede yerleşik; sidebar ve menü listelerinde kapsayıcıya `<ui-selection-indicator selector=".ui-sidebar-item--active" />` (menüde `.ui-menu-item--active`). Köşe seçili öğeden alınır; `prefers-reduced-motion` hareketi kapatır. Gösterge geçişte hafifçe büyüyüp geri döner — kapsayıcı onu kesmemeli: kaydırılabilir segment yalnız içerik taşınca kırpar (`data-overflowing`); gerçekten kayan segmentte gösterge dikeyde büyümez — kırpma kutusu izle aynı şekilde kalır, kaydırılan listede göstergeye yanlardan pay bırakılır (`-mx-1 px-1`). Segmentte büyüme dikeyde belirgindir (`--ui-indicator-pop-scale-y`); iz iç boşluksuz olduğundan gösterge izin dışına taşıp döner. Her rotada yeniden kurulan sekme şeridi `ui-tabs indicator-key` ile önceki konumdan kayar (panel: `app-hub-route-tabs`).
- **Yatay iç boşluk tek ölçek:** Button, Input, Select, Segment ve SidebarItem satırı aynı token'ı kullanır (`--ui-control-px-*`: sm 9 · md 11 · lg 12) — yatay boşluk dikeyin (ikon üstü boşluk 7 · 8 · 9) ~1.33 katı; aynı yükseklikte aynı oran. İkon–metin 8px. Yalnız ikonlu kare öğeler iç boşluksuzdur.
- **SegmentGroup içerik genişliğindedir:** kaydırılabilir (varsayılan) grup `block` olsa da izi içeriği kadar; sığmazsa kayar.
- **Seçim değişince yerleşim oynamaz:** Button'ın tüm varyantları aynı kutuyu kullanır, 1px kenarlık (dolu ve muted'da şeffaf; yalnız link ve ghost kenarlıksız). Outline ↔ dolu geçişinde (ChipGroup, FilterChip, tarih aralığı hazır seçimi) genişlik değişmez. Segmentli sekme tetikleyicisi rahat alanda sabit genişlikte (md 5.75rem), dar alanda içerik genişliğine kadar daralır; ancak içerik de sığmazsa şerit kayar.
- **Yerleşim kapsayıcıya göre kurulur, ekrana göre değil:** Bileşen kart, dialog, sheet ya da yan panelde dar kalabilir; `sm:` / `lg:` geniş ekranda dar kartı "geniş" sanır. Kendi içinde düzen değiştiren bileşen kök elemanını `@container` yapar ve alt öğeleri `@md:` vb. ile kurar (Alert `actions-end`, dikey Tabs). Grid sütunu `auto-fit` + en küçük genişlikle (StatGroup: en az 11rem, en fazla `columns`).
- **Checkbox kare, radio daire; form kontrolüyle aynı yüzey:** Seçili değilken kenarlıksız `--input-background` dolgu (input / select ile aynı gri), seçiliyken dolu primary. Checkbox köşesi `--ui-radius-checkbox` (4–6px, tema yarıçapından bağımsız), işareti tik; radio daire, işareti nokta.
- **Alert tek görünümdür:** tonlu zemin, kart köşesi, 24px ikon, metin çevre içerikle aynı (14/20). Kenarlık prop değil temanın tercihidir: `--ui-alert-border-width` (varsayılan 0; preset `uiAlertBorderWidth: '1px'`), verilirse ton rengiyle çizilir. `soft` prop'u kullanımdan kalktı (etkisiz). Banner sayfa üstü çubuktur, alt çizgisini korur.
- **Erişilebilirlik tabanı (WCAG 2.2 AA + WAI-ARIA APG) — yeni bileşen bunları sağlar:**
  - Odak halkası `--ui-focus-ring` (primary + %20 foreground) komşu renge ≥3:1; utility `shadow-none` ezebiliyorsa halka `overrides.css`'te.
  - Seçili olmayan checkbox / radio / switch: yalnız gri dolgu (`--input-background`), kenarlık yok — form kontrolüyle aynı yüzey (tasarım kararı; yüzeye karşı 1.26:1, WCAG 1.4.11'in 3:1'inin altında). İkonlar ham ton değil `--*-ink`.
  - Dokunma hedefi ≥24px; görsel küçükse `::before` / `::after` ile genişletilir (etiket silme, stepper noktası, slider).
  - Takvim (DatePicker + DateRangePicker aynı kurallar): hafta günleri dile göre, ay başlığı yıllı, gün adı tam tarih, açılınca odak seçili / bugün gününe, ok ±gün/hafta, PageUp/Down ±ay (görünen aylar kayar), kapanınca odak açan öğeye. Bugün halkası hücre sınırında — seçili günle aynı ölçü. Aralık ortası seçili zeminin yarı tonu (moda göre).
  - TimePicker tekerlekleri WAI-ARIA spinbutton: açılınca odak saatte, ↑↓ / PageUp / PageDown / Home / End, Tab dakikaya; halka odaklı sütunun seçili değerinde.
  - Klavye: radio grubu (SegmentGroup, ChipGroup) ok tuşları + tek Tab durağı; Tabs ok + Home/End; Menu açılınca ilk öğe, ok / Home / End, Esc ve Tab odağı açan düğmeye döndürür; Dialog / Sheet odak tuzağı + kapanınca açan öğeye dönüş; DatePicker açılınca seçili güne odak, ok ±gün/hafta, PageUp/Down ay, gün adı tam tarih.
  - Form: `ui-form-row` alan bağlamı sağlar — içerideki ilk kontrol id, `aria-describedby` (açıklama + hata) ve `aria-invalid` alır; `v-slot` ile elle bağlama gerekmez. `error` prop'u ikonlu hata metni + danger çerçeve (outline; odak halkasıyla birlikte görünür). Dikey boşluk: etiket → kontrol 6px, kontrol → açıklama/hata 4px; alanlar arası `gap-4` (kapsayıcıda). `ui-menu` varsayılan `width="full"` — kart / sidebar genişliğini doldurur; sabit genişlik yalnız yüzen panelde (`sm`/`md`/`lg`).
  - Checkbox `indeterminate` (`aria-checked="mixed"`).
  - Alert duyurusu `live` ile açıkça seçilir (varsayılan yok; `polite` → status, `assertive` → alert); ton ekran okuyucuya metinle söylenir.
  - `prefers-reduced-motion`: basma ölçeği, switch, ilerleme, stepper ve dosya ikonu hareketleri kapanır.
- **Panel içi liste satırı kontrolden bir kademe sıkıdır:** `--ui-option-h-{sm,md,lg}` = 28 / 32 / 40px. Panel araması aynı yükseklikte, aynı metin sütununda, dolgusu `bg-surface-sunken`, odak halkası yok; arama ile liste arası 12px.
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
- **Gezinme kapsülü:** Site başlığı gibi az sayıda sayfa arasında geçişte `navigation` + segmentlerde `to` kullanılır. Segment `<a>` çizilir (yeni sekmede açılır, taranır), seçili sayfa `aria-current="page"` alır; grup `radiogroup` değildir, ad sarmalayan `<nav aria-label>` öğesinden gelir. Sayfa içi panel sekmesi için kullanılmaz (`ui-tabs`).

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
