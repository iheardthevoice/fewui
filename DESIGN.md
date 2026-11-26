# Tasarım ve bileşen kullanım notları

Bu belge **fewui** ile geliştirdiğimiz arayüz dilini, token’ları ve tekrar kullanım kalıplarını özetler. Ayrıntılı sınıflar için `packages/ui/themes/components.css` ve `packages/ui/themes/default.css` kaynak kabul edilir.

---

## 0. Ekran anatomisi (önce bunu oku)

Bir ekran serbestçe kurulmaz; aşağıdaki üç kalıptan biriyle kurulur. Kalıbın ölçüleri bileşendedir — ekran boşluk, yazı boyutu veya ikon boyutu **seçmez**. Geçiş durumu: [`docs/DESIGN_CONSISTENCY.md`](../docs/DESIGN_CONSISTENCY.md).

### Kapalı ölçüler

| Eksen | İzinli değerler | Not |
|---|---|---|
| Boşluk | 4 · 8 · 12 · 16 · 24 · 32 px | Ekran içi düzen `--ui-space-*` ile; ekran `gap-5`, `py-2.5`, `mt-0.5` gibi ara değer yazmaz |
| Yazı (fareli) | 24 sayfa · 20 dialog · 16 bölüm · 14 içerik · 12 ikincil | Bir ekranda en fazla 3 boyut |
| Yazı (dokunmatik) | içerik 16 · ikincil 14 | `pointer: coarse` bir kademe büyütür; ekran bunu elle yapmaz |
| Kalınlık | 400 · 500 · 600 | Liste satırı başlığı 400; vurgu 500; **600 yalnız sayfa / dialog / sheet başlığı** (`ui-heading-1/2`, harf aralığı −0.02em; tema `--ui-heading-weight` / `--ui-heading-tracking` ile değiştirir) |
| İkon karosu | liste 28 px | Aynı bağlamda tek boyut; glif karonun ~%60'ı |
| Ekran kenarı | 16 px (telefon) | İki yan eşit; ayraç ve kart ekran kenarına değmez |

### Sol çizgi kuralı (iki çizgi, fazlası yok)

1. **Dış çizgi — içerik kenarı:** kutunun dışında duran her şey: sayfa / dialog başlığı ve açıklaması, özet metrikleri, grup başlığı ve açıklaması (`ui-list-group` label / footer), form etiketi ve açıklaması, çip şeridi. Kutuların (kart, input, select, çip) sol kenarı da bu çizgidedir.
2. **İç çizgi — kutunun iç boşluğu:** kartın içindeki satır metni, input / select içindeki yazı. Her kutu kendi iç boşluğunu kullanır.

Kutu dışındaki bir metin kutunun iç çizgisine (16px) girintilenmez; aynı ekranda form etiketleriyle ikinci bir dış çizgi oluşturur. Denetim: değişen ekranda kutu dışı metinlerin sol x'i tek değer olmalı.

### Kalıp 1 — Gruplu liste (ayarlar, hesap, gezinme menüleri)

`ui-list-group` + `ui-list-item` (uygulamada `app-settings-group` / `app-settings-row`).

- Grup: üstte bölüm etiketi (12 px büyük harf, içerik kenarında) → 8 px → içe çekik kart → 8 px → grup açıklaması (içerik kenarında). Gruplar arası 24 px.
- Satır: **ikon karosu · başlık (tek satır) · alt metin (tek satır, isteğe bağlı) · sağda tek değer veya ok**. Satırda label–değer yığını, ikinci açıklama satırı veya rozet kalabalığı olmaz.
- Uzun anlatım satıra yazılmaz; **grubun altına** (`footer`) yazılır. Satırdaki alt metin 3–5 kelimelik özettir ("Ad, telefon, hakkında").
- Ayraç metin sütunundan başlar, kartın sağ kenarında biter.
- Geri dönüşsüz işlem (sil, sıfırla) **en altta, kendi grubunda**, açıklaması grup altında.
- Dialog / sheet içinde de aynı kart kullanılır (kendiliğinden alan dolgusuna geçer); kenardan kenara düz liste yoktur.

### Kalıp 2 — Form

`ui-section` + `ui-form-row`.

- Alanlar arası 16 px (`--ui-space-stack`). Alanların arasına elle `ui-divider` konmaz; geniş ekranda ayraç gerekiyorsa `ui-section divided` (dar ekranda kendiliğinden kalkar).
- Etiket → kontrol 6 px. Yardım metni etiketin altında, yalnız gerçekten gerekiyorsa.
- Birincil aksiyon tek yerde: dialog'da **başlığın sağı** (`#actions`), sayfada başlık aksiyonu. Footer'da İptal yoktur.

### Dialog yüksekliği

Dialog **içeriği kadar uzar**; altta kullanılmayan boşluk kalmaz. Son içerik ile panelin alt kenarı arasındaki boşluk yan boşlukla aynıdır (kart dolgusu). İçeriğe ekran yüksekliğine bağlı sabit `min-h-[…dvh]` verilmez (`check:tokens` → `dialog-fixed-height`). Uzun içerik için tavan `panel-max-height` ile verilir, gövde kayar. Liste ↔ alt ekran geçişinde yükseklik değişmesi normaldir.

### Kalıp 2b — Seçim alanları ve kayıt detayı (iOS Takvim düzeni)

Tarih, saat, adet, masa, durum gibi **seçimle doldurulan** alanlar form satırı değil, `ui-list-group` içinde satırdır: **etiket solda, değer sağda, ok**. Satıra dokununca seçici açılır (`ui-date-picker` / `ui-time-picker` / `ui-select` `#trigger` içinde `ui-list-item interactive`).

- Boş değer `placeholder` ile soluk gösterilir ("Masa seçin"); ok kaybolmaz.
- Kaldırılabilir seçim `clearable` + `@clear` (× okun yerine çizilir; iç içe düğme yoktur).
- **Tek seçimli sebep / seçenek listesi:** `ui-radio-group variant="inset"` — kartlı satırlar, seçili satırda sağda ✓ (daire yok). Seçimi gerektiren onay düğmesi başlıkta; "Diğer" seçilince açıklama satırı ayrı kartta açılır.
- Görünüm seçimi satırdır: Görsel · Simge · Renk; değer görselin önizlemesi (`value-image`), ikonun kendisi (`value-icon`) ya da renk noktası (`value-swatch`) — "Seçildi" gibi durum metni yazılmaz; boşsa soluk "Yok"; `clearable` ile kaldırılır (× chevron'un yerinde, aynı hizada). Çip şeridi ("Simge belirle", "Renk belirle") yazılmaz.
- **Satır değeri renkleri (tek kural):** seçilen değer ikincil (`muted-foreground`) — satır seçicisi (tarih, saat) ve seçim kutusu (kasa, kişi) aynı; boş satırın yer tutucusu bir kademe daha soluk (`--ui-row-placeholder`, `muted-foreground` %62); elle yazılan metin birincil. Satırdaki ok her zaman sağa bakan dolu `›`, değerden 12px uzakta.
- **İsteğe bağlı alanlar formda da çiptir:** sık doldurulmayan alanlar (saat, kişi, not) satır olarak beklemez; grubun altında "Bilgi ekle" çip şeridi, dokununca satır açılır ve düzenleyici hemen açılır / odaklanır. Dolu ya da zorunlu hâle gelen alan (ör. beklet seçilince kişi) satır olarak görünür.
- Çok değerli seçim (etkinlik günleri): her değer kendi satırı (`clearable`), grubun sonunda vurgulu ekleme satırı `ui-list-item color="primary" trailing-icon="none"` ("Tarih ekle"). Çip şeridi kullanılmaz.
- Küçük sayılar `ui-number-stepper` (− 2 +) ile, `#trailing` içinde. Satır içi kontrol satırı uzatmaz; tüm satırlar eşit yükseklik (fareli 44, dokunmatik 48 px).
- Serbest metin (ad, not) `ui-form-row` + input olarak kalır.
- **Kayıt detayı aynı satırları salt okunur gösterir** (ok yok). Düzenleme ile detay aynı yapıdadır; kullanıcı iki farklı düzen öğrenmez. Bilgi çip / rozet yığını olarak gösterilmez.
- **Dialog içinden başka kayda geçiş sayfayı değiştirmez:** kişi, kasa gibi bağlı kayıt satırı `to` ile rotaya gitmez; `openRecordDialog(type, id)` (`@/composables/use-record-dialog`) kaydın kendi dialog'unu açık dialog'un üstünde açar (`app-record-dialog-host`, App.vue). Kapatınca kullanıcı kaldığı dialog'a döner. Yeni tür eklemek: host'taki `RECORD_DIALOGS` (bileşen + kimlik prop'u). Kalıcı adres gerekiyorsa başlık menüsünde "Bağlantıyı kopyala".
- Detaydaki işlemler (durum geçişleri) ikonlu satır grubu; silme en altta ayrı grup. Başlığın sağında yalnız "Düzenle".
- Kayıt dialog'u başlığı: sağda yalnız "Düzenle" (ve varsa tek ikonlu hızlı eylem, ör. ara). "⋯" menüsünde Düzenle / Sil saklanmaz; Sil gövdenin en altında.
- Dialog araç çubuğundaki sekmeler yalnız yazılıdır (ikonsuz, `size="sm"`); ikonlu sekme sayfa düzeyindedir.
- Boş alan satırda soluk "Ekle" (`placeholder`) gösterir ve dokununca yalnız o alanın düzenleyicisini açar; ayrı "X ekle" çipleri yazılmaz.
- **Değer süslemesi yalnız bilgi taşıdığında:** türü olan değerler önünde ikonla (`value-icon`) gösterilir: cihaz türü (telefon / tablet / bilgisayar), işletim sistemi ve tarayıcı (marka ikonu, `value-icon-type="brands"`), kaynak (site / panel). Durum, tonlu ve ikonlu rozetle (`#trailing` + `ui-badge variant="muted"`). Kopyalanabilir değer `trailing-icon="copy"`. Tarih, saat, adet gibi düz değerler süslenmez; her satıra ikon koymak gürültüdür.
- Değer satırın sağ %60'ını aşmaz, sığmazsa `…` ile kısalır.
- **Durum geçişi satırları** dolu ikon karosu taşır (`icon-variant="solid"`); karonun rengi **geçilecek durumun tonudur** ve o durumun rozetiyle aynıdır (Onayla → info, Geldi → success, İptal → danger, Beklemeye al → warning). Aynı renk iki yerde aynı anlama gelir; tüm işlemleri tek renge boyamak rengi anlamsızlaştırır.

### Kalıp 2c — Kayıt detayı alanları: `app-record-fields` ("veri satırdır, eylem çiptir")

Kayıt detayı (ürün, kişi, rezervasyon …) alanları tek bileşenle çizilir; ekran yalnız alan listesini verir:

1. **Özet** (`summary`): kaydın kimliğini anlatan 2–3 bilgi, kutusuz `ui-stat` ile büyük (ürün: fiyat · stok · KDV; kişi: bakiye · son ziyaret). Özette tarih saatsiz.
2. **Dolu alanlar** (`fields` içinde değeri olanlar): gruplu satır, etiket solda, değer sağda; dokununca o alanın düzenleyicisi.
3. **Boş alanlar**: tek "Bilgi ekle" çip şeridi (`+ Barkod`, `+ Doğum tarihi`). Çip yalnız o alanı açar; her şey doluysa şerit kaybolur; salt okunur kullanıcı boş alan görmez.
- Uzun metin (açıklama, not) değer olarak satıra sığmaz: doluysa kendi grubunda tam metin, boşsa çip.
- Etiketler birimsiz ve kısadır ("Kalori"); birim değerdedir ("320 kcal"). Form etiketleri ("Kalori (kcal)") detayda kullanılmaz.
- **Detayda yerinde düzenleyici yoktur.** Kategori, satış kataloğu, etiket gibi atamalar da diğer alanlar gibi satırdır ("Kategori · Biralar ›"); dokununca aynı tek alan düzenleyicisi açılır. Açık duran, anında kaydeden seçim kutuları detayda kullanılmaz — detayda tek düzenleme biçimi olur. Oluşturma formunda bu alanlar kalır (kayıt ilk anda doğru yerde görünsün).
- Eski `app-show-field-badge` çip yığını kullanılmaz (tüm alanları — dolu ve boş — aynı çiple gösteriyordu).

### Kalıp 2d — Form: iOS düzeni (`ui-form-row variant="inset"`)

Form alanları tek tek kutu değil, `ui-list-group` kartının satırlarıdır. Her alan bir satır; "etiket üstte · kutu · yardım metni" üçlüsü kullanılmaz.

- **Ana alan** (ürün adı, kişi adı): kendi kartında, etiketsiz + `primary` → büyük yazı (iOS Takvim "Başlık"). Erişilebilir ad `aria-label` ile.
- **Kısa alan** (fiyat, stok, barkod, kalori): etiket solda, kutusuz değer sağda. Para birimi rakamın arkasında ("180,00 ₺"). Sayı alanında tarayıcı okları yok.
- **Seçim** (kategori, birim, KDV): aynı satır; yerinde açılan menü ⌄ ile (iOS'ta popup menü ⌃⌄, başka ekrana geçen satır ›). Satırda seçim kutusunun ön ikonu yok (etiket söyler).
- **Anahtar**: satırın sağında; kart içinde kapalı izi görünür ton.
- **Tarih / saat**: seçicinin düğmesi satırda kutusuz ve ikonsuz, değer sağda.
- **Telefon**: ülke kodu + numara sağda tek blok; telefon ikonu gizli (etiket söyler).
- **Uzun metin / çoklu seçim** (açıklama, etiketler): yığılı satır — etiket (+ AI gibi eylem) üstte, alan altta, aynı kartta.
- **Yardım metni** alan başına yazılmaz; gerçekten gerekiyorsa grubun altına tek cümle (`ui-list-group footer`).
- **Hata**: kutusuz kontrolde çerçeve yok; etiket ve değer tehlike tonunu alır, mesaj satırın altında.
- Tüm satırlar eşit yükseklik (fareli 44, dokunmatik 48); satır içi kontrol satırı uzatmaz.
- Gruplar arası boşluğu kapsayıcı verir (`gap-6`); dialog gövdesinde grubun komşuluğu toplam 24px. `ui-list-group` kendi kenar boşluğunu taşımaz.
- Kartın kendisi kutu olan bileşenler (satış kataloğu seçimi gibi işaretli kartlar) kartın içine konmaz; normal `ui-form-row` ile durur.

### Kalıp 3 — Veri listesi ve detay

`app-data-table` / `app-data-list` (telefonda kart) ve `ui-field size="sm"` detay. Telefon kartı: görsel · başlık / tek muted alt satır · tek sağ değer. Durum rozeti yalnız istisna için.

- Tek satırlı alan (input, select, telefon) tema köşesiyle hap olur; çok satırlı alan (textarea) yuvarlatılmış dikdörtgendir. Bu fark bilinçlidir (iOS ile aynı), eşitlenmez.

### Başlık

Sayfa: `app-panel-page` (başlık + açıklama, açıklama kırpılmaz). Dialog: `ui-dialog` prop'ları.

- Başlığın yanında süs ikonu yoktur (`ui-dialog` / `ui-sheet` `icon` prop'u çizilmez).
- **Başlık menüsü (`ui-title-menu`, uygulamada `app-title-menu`):** başlık düzeyindeki eylemler (favori, bağlantı kopyala) başlığın kendisindedir — başlığa dokununca menü açılır, yanında soluk ⌄. Her eylem için başlığa ayrı ikon eklenmez.
  - Favorideyken başlıktan sonra küçük dolu ★ (yalnız durum; favoride değilken hiçbir şey yok).
  - Masaüstünde ⌘D / Ctrl+D favoriyi değiştirir (açık dialog varken yalnız dialog'daki başlık). Dokunmatikte kısayol ipucu gösterilmez.
  - Favorilenebilir: modül sayfaları ve kalıcı kayıtlar (ürün, kişi, kasa, kullanıcı, rol). Geçici kayıtlar (rezervasyon, hareket, sipariş) favorilenmez; menüde yalnız "Bağlantıyı kopyala".
  - Kayıt dialog'u alt rota olarak açıkken sayfa başlığı kendi sayfasını favoriler, açık kaydı değil.
- Geri: `‹` (chevron-left) + **önceki ekranın adı** (`back-label`). Düğmenin sol kenarı başlığın sol kenarıyla aynı hizadadır. Sayfa başlığındaki geri düğmesi de aynı oku kullanır.
- Geri düğmeli dialog başlığı iOS gezinme çubuğu gibidir: üst satırda geri solda, birincil aksiyon (Kaydet) sağda; başlık ikinci satırda, açıklama üçüncü satırda.
- Geri düğmesi varken X çizilmez (iOS: alt ekranda kapatma yok; Esc, dış tıklama ve sheet sürükleme kapatır). Kök ekranda X solda, başlıkla aynı satırda.
- Başlık satırındaki kontroller tek ölçü: geri (dolu `secondary`), X ve `#actions` içindeki düğme (dolu `primary`) `md` yükseklikte (`--ui-control-h-md`; dokunmatikte 44). Sol uç (geri) ve sağ uç (Kaydet) içerik kenarına oturur; geri düğmesinin sol kenarı başlıkla aynı hizadadır. Üst satır → başlık 14 px (`row-gap` + `mt-2`).

### Kontrol

Değişen her ekran 393 px genişlikte light + dark ekran görüntüsüyle kontrol edilir: farklı yazı boyutu ≤ 3, ikon karosu boyutu ≤ 2, iki yan boşluk eşit, ikon ve metin sütunları satırlar arasında aynı x'te.

---

## 1. Tema ve token’lar

- **Font:** Inter (`--font-sans`), `default.css` ile yüklenir.
- **Renkler:** `:root` ve `.dark` altında **OKLCH / özel değerler**; nötr skala `--base-50` … `--base-950` (Tailwind `neutral` ile uyumlu uçlar).
- **Semantik çiftler:** `background` / `foreground`, `surface` / `surface-foreground`, `control` / `control-foreground`, `primary`, `secondary`, `muted`, `muted-foreground`, `border`, `ring`.
- **Özel yüzey:** `surface-input` (`--input-background`) — input / select / segment izi gibi “konteyner içi” dolgular için.
- **`--radius`:** 26px; `rounded-lg` ile eşlenen kontrol kabuğu için referans.
- **Klavye odak:** `--ui-focus-ring` = `color-mix(ring, 45% transparent)` — `ring-2`, `ring-offset-2` ile birlikte kullanılır.
- **Grafik:** tek ölçülü dağılım (çubuk, alan) `--chart-50` … `--chart-900` rampasıyla. Kimlik taşıyan dilimler (pasta, çok serili grafik) `--chart-series-1` … `--chart-series-8` ile: mavi, turuncu, turkuaz, amber, pembe, yeşil, mor, kırmızı. Sıra sabittir ve komşu renkler renk körlüğü denetiminden geçer; koyu değerler ayrı seçilir. Dilimde nötr gri kullanılmaz; renk tek başına anlam taşımaz, lejantta etiket ve tutar bulunur.

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

**Ölçek:** gövde metni 12 / 14 / 16 / 18px (`text-xs` / `text-sm` / `text-base` / `text-lg`). Bu değerlerin arası (ör. 13px, 15px) kullanılmaz. 12px altı yalnız mikro metindir (rozet, sayaç, avatar harfi); 20px üstü yalnız kasıtlı vurgudur (marka, büyük rakam). Vurgu kalınlığı en fazla `font-medium` (500); `font-semibold` ve `font-bold` yazılmaz. İstisna: `ui-heading-1/2` ve dialog / sheet başlığı 600 (token'dan).

**Masaüstünde satır seçicisi değere bağlıdır:** gruplu liste satırından (`ui-list-group` içinde `ui-list-item` tetikleyici) açılan panel satırın sonuna hizalı, değerin altında açılır; seçim menüsünde seçili seçenek değerin üstüne oturur.

**Seçiciler telefonda dialog'dur (`presentation`):** `ui-popover` ve onu kullanan seçiciler (`ui-select`, `ui-date-picker`, `ui-time-picker`, `ui-date-range-picker`, renk / ikon seçici, `ui-field-action`) `presentation` alır: `auto` (varsayılan) telefonda içeriği gerçek `ui-dialog` ile açar (alt sayfa, tutamaç, başlık), masaüstünde tetikleyiciye bağlı panel; `popover` her zaman panel (gezinme alt menüsü, önizleme kartı gibi seçici olmayanlar); `dialog` her zaman dialog. Slot adları iki biçimde aynıdır: `header` · `toolbar` (ör. seçim kutusunun arama alanı) · `actions` · varsayılan / `content` · `footer`. Dialog başlığı `title` ile verilir; boşsa satır etiketinden (`ui-form-row` / `ui-list-item` başlığı) türetilir. Menüler (`ui-dropdown`, bağlam menüsü) tetikleyiciye bağlı kalır.

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
- **`Select` (`multiple` + `filterable`):** Etiket girişi; boş durumda `--solo` ile yükseklik uyumu. Ayrı bir `Tags` bileşeni yoktur.

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
- **Yükleme gösterimi (tek kural):** İskelet yalnız yükleme `delay` (150 ms) süresini aşarsa görünür; hızlı yanıtta hiç çizilmez ama yeri ayrılır (görünmez), içerik zıplamaz. Görünen iskelet en az `minDuration` (300 ms) kalır. İçerik **yükseklik canlandırılmadan**, yalnız opacity ile belirir. Yeniden yüklemede önceki içerik yerinde kalır. Metin bloğu için `lines` ile çok satırlı kutu. `ui-dialog` açılırken içindeki bekleyen iskeletleri en fazla `openHold` (300 ms) bekler: karartma hemen gelir, panel içerikle birlikte kayar.
- **Slider:** Şeffaf native track; dolgu `Progress` bar ile.
- **Stepper:** `default` ve `pills` (bu “pills” **Tabs** değil).
- **Dialog / Toast / Confirm:** Programatik API’ler (`useDialog`, `useConfirm`, `useToast`); kökte ilgili portal bileşenleri gerekir.
- **ListItem, Badge, Alert, Radio, Checkbox, Switch:** Ortak input/foreground/border token’ları; checkbox’ta köşe “hap” değil, kontrollü küçük radius.
- **Stat / StatGroup:** Metrik her zaman `ui-stat`. Değer `ui-display-*`; değişim artışta `success`, azalışta `danger` — azalmanın iyi olduğu metrikte (gider, iptal, ret) `invert-trend`. Kart içinde `variant="soft"`, sayfada tek başına `variant="surface"`. Yer darsa (özet kartı, mobil) kutusuz `variant="plain"` + `icon-tile` + `ui-stat-group :min-columns="2"` — metrikler mobilde de ikişer dizilir. Kart başlığında renkli ikon karosu `ui-card` `icon-color` / `icon-hex` (+ `icon-variant`) ile verilir; `ui-list-item` ile aynı adlar. `text-emerald-*` gibi sabit renk yazılmaz.
- **IconTile:** Satır, kart ve metrik başlığındaki renkli ikon kutusu. Elle `flex size-10 rounded-xl bg-muted/40` karo yazılmaz. Nötr varsayılan; tonlu karo yalnız anlam taşıdığında.
- **ListItem (satır düzeni):** Ayar / gezinme satırı `title` + `description` + `icon` + `to` / `interactive`. Kart içinde `ui-card remove-padding` + `ui-list`.
- **FilterChip / ChipGroup:** Filtre tetikleyicisi `ui-filter-chip`; kısa seçenek sırası (dönem, kapsam, etiket) `ui-chip-group`. `ui-button` + `aria-pressed` ile elle toggle grubu yazılmaz. Sekme için `ui-tabs`, form içi ikili seçim için `ui-segment-group`.
- **Filtre şeridi:** Seçili olmayan çip, boş filtre çipi, seçici ve takvim düğmesi aynı dolgulu nötr yüzeyi kullanır (`solid secondary`); outline (zeminsiz) çip yapışkan araç çubuğunda arkadaki içeriği gösterir, kullanılmaz. Şeritteki tüm kontroller aynı boyuttadır, aralarında tek boşluk vardır (çip grubu ile aynı, 6px). Çip içinde iki parçalı etiket ("5 Kas") tek boyutta yazılır, ikincil parça yalnız tonla ayrılır.
- **Boyut sırası — Sekme > Düğme ≥ Filtre çipi:** Gezinme (sekme izi) eylemden, eylem (sayfa düğmesi) filtreden büyük ya da eşittir. Filtre çipi ve seçici sayfa düğmesiyle aynı kontrol boyutunu kullanır; daha büyük yapılmaz. Rozet (18px) bilgi taşır, tıklanmaz.
- **Yazı ölçeği (panel):** 24 sayfa başlığı ve detaydaki ana tutar · 20 pencere başlığı · 16 bölüm başlığı · 14 içerik (satır başlığı, değer, düğme, çip, listedeki tutar) · 12 ikincil (alt satır, büyük harfli etiket, rozet, sekme yazısı, sayfalama). Kalınlık 400 / 500; `<b>` / `font-bold` yok. Tutar `ui-price-text` ile gövde yazı tipinde, eşit genişlikli rakamla yazılır; listede satır başlığından büyük olmaz (`size="md"`).
- **Salt okunur detay:** Kayıt detayında `ui-form-row` (form alanı) kullanılmaz; `ui-field size="sm"` kullanılır: etiket 12px büyük harf, aralıklı, soluk; değer 14px. Boş alan gösterilmez; aynı bilgi başlıkta, rozette ve alanda tekrarlanmaz.
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
- **Bileşen örnekleri** `apps/docs/src/examples/<Ad>Example.vue` dosyalarındadır: `/?examples=1` hepsini, `/?example=Accordion` tekini açar (`&mode=dark`, `&dir=rtl`, `&theme=landing`). Doküman sitesi bu sayfayı gömer; her örnek testte de hatasız çizilmek zorundadır.

---

## 14. i18n

- Bileşen metinleri **`$t('ui.…')`** ile; locale paketleri `app.use(UiLib, { i18n, locales: ['tr', 'en'] })` ile birleştirilir. Paketi olmayan dil İngilizceye düşer. Ayrıntı: `packages/ui/README.md`.
- **Yön (RTL):** stil yazarken mantıksal yardımcılar (`ms/me/ps/pe`, `start/end`, `text-start`) kullanılır; ileri / geri bildiren ikon `ui-icon--dir` alır. Yatay ok tuşu işleyen bileşen yönü `utils/direction.js` ile okur.

---

## 15. Tüketim özeti

```js
import UiLib from 'fewui'
import 'fewui/style.css' // default.css + components.css zinciri
app.use(UiLib, { i18n, locale: 'tr' })
```

Tailwind v4: `packages/ui/themes/tailwind.css` (`fewui/tailwind.css`) — `@theme inline` ile `base` / `neutral`, semantik renkler ve `--radius-lg` → `var(--radius)`; `dark` çeşidi de buradan gelir. `tailwind-preset.cjs` yalnız eski v3 tüketicileri içindir.

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
