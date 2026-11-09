<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useToast, useDialog, useConfirm } from 'fewui'
import { i18n } from '../i18n.js'

const toastUi = useToast()
const dialogProg = useDialog()
const { confirm } = useConfirm()

/* ── Dil ─────────────────────────────────────────────────────────────── */
const LOCALE_KEY = 'ui-preview-locale'

function readStoredLocale() {
  if (typeof localStorage === 'undefined') return null
  const v = localStorage.getItem(LOCALE_KEY)
  return v === 'tr' || v === 'en' ? v : null
}

function applyI18nLocale(code) {
  const g = i18n.global
  if (typeof g.locale === 'string') {
    g.locale = code
  } else if (g.locale && typeof g.locale === 'object' && 'value' in g.locale) {
    g.locale.value = code
  }
}

const previewLocale = ref(readStoredLocale() ?? (typeof i18n.global.locale === 'string' ? i18n.global.locale : i18n.global.locale?.value ?? 'tr'))

watch(
  previewLocale,
  (v) => {
    applyI18nLocale(v)
    if (typeof localStorage !== 'undefined') localStorage.setItem(LOCALE_KEY, v)
  },
  { immediate: true },
)

/* ── Ortak seçenekler ────────────────────────────────────────────────── */
const currencyOptions = [
  { value: 'usd', label: 'USD — United States Dollar' },
  { value: 'eur', label: 'EUR — Euro' },
  { value: 'try', label: 'TRY — Turkish Lira' },
  { value: 'gbp', label: 'GBP — British Pound' },
  { value: 'jpy', label: 'JPY — Japanese Yen' },
  { value: 'chf', label: 'CHF — Swiss Franc' },
  { value: 'cad', label: 'CAD — Canadian Dollar' },
  { value: 'aud', label: 'AUD — Australian Dollar' },
]

const cityOptions = [
  { value: 'istanbul', label: 'İstanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'izmir', label: 'İzmir' },
  { value: 'bursa', label: 'Bursa' },
  { value: 'antalya', label: 'Antalya' },
  { value: 'adana', label: 'Adana' },
  { value: 'konya', label: 'Konya' },
  { value: 'gaziantep', label: 'Gaziantep' },
  { value: 'mersin', label: 'Mersin' },
  { value: 'kayseri', label: 'Kayseri' },
  { value: 'eskisehir', label: 'Eskişehir' },
  { value: 'diyarbakir', label: 'Diyarbakır' },
  { value: 'samsun', label: 'Samsun' },
  { value: 'denizli', label: 'Denizli' },
  { value: 'trabzon', label: 'Trabzon' },
]

/* ── Kayıt / giriş ───────────────────────────────────────────────────── */
const registerName = ref('')
const registerPhoneCountry = ref('+90')
const registerPhoneNumber = ref('')
const registerPassword = ref('')
const registerOtp = ref('')

function onRegisterOtpComplete(code) {
  toastUi.success({ title: 'Kod doğrulandı', description: `${code} ile telefonunuz onaylandı.` })
}

function submitRegister() {
  toastUi.info({ title: 'Hesap oluşturuluyor', description: registerName.value || 'Bilgileriniz gönderildi.' })
}

const loginEmail = ref('')
const loginPassword = ref('')
const loginRemember = ref(false)

function submitLogin() {
  toastUi.info({ title: 'Giriş yapılıyor', description: loginEmail.value || 'E-posta girilmedi' })
}

/* ── Sanatçı profili ─────────────────────────────────────────────────── */
const profileName = ref('Julian Duryea')
const profileBio = ref('')
const profileCity = ref('istanbul')
const genreOptions = [
  { value: 'indie', label: 'Indie' },
  { value: 'electronic', label: 'Elektronik' },
  { value: 'jazz', label: 'Caz' },
  { value: 'acoustic', label: 'Akustik' },
  { value: 'lofi', label: 'Lo-fi' },
]
const profileGenres = ref(['indie', 'acoustic'])
const profileVisibility = ref('public')
const profileDigest = ref(true)

/* ── Plan kullanımı ──────────────────────────────────────────────────── */
const usageTab = ref('resources')
const usageResources = [
  { label: 'Edge Requests', value: 95, display: '9.5M / 10M' },
  { label: 'Fast Data Transfer', value: 72, display: '720 GB / 1 TB' },
  { label: 'Monitoring data points', value: 48, display: '48K / 100K' },
  { label: 'Web Analytics Events', value: 28, display: '280K / 1M' },
  { label: 'Function Duration', value: 2, display: '2s / 100s' },
]
const usageAlertAt = ref(80)
const usagePauseOnLimit = ref(false)

/* ── Sipariş ─────────────────────────────────────────────────────────── */
const orderLines = [
  { title: 'Izgara köfte', description: '2 adet · Acısız', value: '₺640' },
  { title: 'Mevsim salata', description: '1 adet', value: '₺180' },
  { title: 'Ayran', description: '3 adet', value: '₺135' },
]

async function cancelOrder() {
  const ok = await confirm({
    title: 'Sipariş iptal edilsin mi?',
    description: 'Mutfağa giden kalemler de iptal edilir. Bu işlem geri alınamaz.',
    color: 'danger',
  })
  if (ok) toastUi.success({ title: 'Sipariş iptal edildi' })
}

/* ── Dosyalar ────────────────────────────────────────────────────────── */
const menuFiles = [
  { name: 'Görseller', kind: 'folder' },
  { name: 'Sözleşme', kind: 'folder' },
  { name: 'Menü.pdf' },
  { name: 'Fiyat.xlsx' },
  { name: 'Tanıtım.mp4' },
  { name: 'Müzik.mp3' },
  { name: 'Logo.zip' },
  { name: 'Notlar.txt' },
]

/* ── Hesap ayarları ──────────────────────────────────────────────────── */
const accountTab = ref('account')
const accountDisplayName = ref('Julian Duryea')
const accountEmail = ref('julian@example.com')
const accountCurrentPassword = ref('')
const accountNewPassword = ref('')
const accountProductNews = ref(true)
const accountWeeklyDigest = ref(false)

/* ── Bölge ve faturalama ─────────────────────────────────────────────── */
const regionTab = ref('general')
const regionCurrency = ref('try')

/* ── Restoran kaydı (pills) ──────────────────────────────────────────── */
const signupStep = ref(2)
const signupSteps = [
  { title: 'Hesap' },
  { title: 'Abonelik' },
  { title: 'Restoran' },
  { title: 'Ödeme' },
  { title: 'Onay' },
]
const signupRestaurantName = ref('Kordon Balık')
const signupCity = ref('izmir')

/* ── Kurulum (dikey) ─────────────────────────────────────────────────── */
const setupStep = ref(1)
const setupSteps = [
  { title: 'Menüyü yükle', description: '48 ürün, 6 kategori', icon: 'utensils' },
  { title: 'Masaları yerleştir', description: 'Salon ve bahçe planı', icon: 'chair' },
  { title: 'Ödeme yöntemleri', description: 'Nakit, kart, yemek kartı', icon: 'credit-card' },
]

/* ── Parça yayını (yatay) ────────────────────────────────────────────── */
const releaseStep = ref(0)
const releaseSteps = [
  { title: 'Yükleme', description: 'Master dosyası', icon: 'cloud-arrow-up' },
  { title: 'Bilgiler', description: 'Başlık ve kapak', icon: 'pen' },
  { title: 'Mağazalar', description: 'Dağıtım kanalları', icon: 'store' },
]

/* ── Finans menüsü ───────────────────────────────────────────────────── */
const financeActive = ref('Dashboard')

/* ── Site menüsü ─────────────────────────────────────────────────────── */
const siteSection = ref('menu')
const siteNavItems = [
  { value: 'menu', icon: 'utensils', label: 'Menü' },
  { value: 'events', icon: 'calendar', label: 'Etkinlik' },
  { value: 'contact', icon: 'location-dot', label: 'İletişim' },
]

/* ── Codespaces ──────────────────────────────────────────────────────── */
const codespaceMode = ref('cloud')

/* ── Etkinlik ────────────────────────────────────────────────────────── */
const eventTitle = ref('')
const eventMenuOpen = ref(false)
const eventMenuItems = [
  { label: 'Şablondan doldur', icon: 'wand-magic-sparkles', value: 'template' },
  { label: 'Geçen etkinliği kopyala', icon: 'copy', value: 'duplicate' },
  { divider: true },
  { label: 'Katılım raporu', icon: 'file-export', value: 'report' },
  { label: 'Taslağı sil', icon: 'trash', value: 'delete', color: 'danger' },
]
const eventDate = ref('2026-05-01')
const eventTime = ref('19:30')
const eventCity = ref('istanbul')
const eventCurrency = ref('try')
const eventNoteOpen = ref(false)
const eventPreviewOpen = ref(false)
const eventDeleteOpen = ref(false)
const eventReportOpen = ref(false)
const eventReportRange = ref('7d')

function onEventMenuSelect(item) {
  if (item.value === 'report') eventReportOpen.value = true
  else if (item.value === 'delete') eventDeleteOpen.value = true
  else if (item.value === 'template') eventTitle.value = 'Akustik gece — İstanbul'
  else toastUi.info({ title: 'Etkinlik kopyalandı' })
}

/* ── Katkıda bulunanlar ──────────────────────────────────────────────── */
const contributorAvatars = Array.from({ length: 16 }, (_, i) => ({
  src: `https://i.pravatar.cc/128?img=${(i % 70) + 1}`,
  alt: `Contributor ${i + 1}`,
}))

/* ── Son hareketler (iskelet) ────────────────────────────────────────── */
const activityLoading = ref(true)
const activityItems = [
  { title: 'Ödeme alındı', description: 'Bahçe 4 · ₺955 · Kart', icon: 'check', color: 'success' },
  { title: 'Yeni rezervasyon', description: 'Cumartesi 20:00 · 4 kişi', icon: 'calendar-check', color: 'info' },
  { title: 'Stok azaldı', description: 'Levrek · 3 porsiyon kaldı', icon: 'triangle-exclamation', color: 'warning' },
  { title: 'Ürün silindi', description: 'Kış çorbası · Menüden kaldırıldı', icon: 'trash', color: 'danger' },
]

function reloadActivity() {
  activityLoading.value = true
  setTimeout(() => { activityLoading.value = false }, 1400)
}

onMounted(() => {
  setTimeout(() => { activityLoading.value = false }, 1400)
})

/* ── Günün özeti ─────────────────────────────────────────────────────── */
const dashDensity = ref('comfortable')
const dashPeriod = ref('today')
const dashPeriodOptions = [
  { value: 'today', label: 'Bugün' },
  { value: 'week', label: 'Bu hafta' },
  { value: 'month', label: 'Bu ay' },
  { value: 'custom', label: 'Özel', icon: 'calendar' },
]
const dashTable = ref('')
const dashRangeOpen = ref(false)
const dashRange = ref(['', ''])
const dashRangeAnchor = ref(null)

function onDashPeriodChange(value) {
  if (value === 'custom') dashRangeOpen.value = true
}

/* ── Rezervasyon ─────────────────────────────────────────────────────── */
const reservationRequests = ref(['window'])
const reservationRequestOptions = [
  { value: 'window', label: 'Pencere kenarı' },
  { value: 'birthday', label: 'Doğum günü' },
  { value: 'highchair', label: 'Mama sandalyesi' },
]

/* ── İngilizce örnekler ──────────────────────────────────────────────── */
const payoutMin = 50
const payoutMax = 10000
const payoutAmount = ref(2850)
const payoutNotes = ref('')
const payoutCurrency = ref('usd')
const payoutFormatted = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(payoutAmount.value),
)

const prefsCurrency = ref('usd')
const prefsPublicStats = ref(false)
const prefsEmailNotif = ref(false)

const socialSpotify = ref('spotify.com/artist/3jxExample2k')
const socialInstagram = ref('@julianduryea_music')
const socialSoundcloud = ref('')
const socialWebsite = ref('')

const payoutPrefsAccount = ref('Julian Duryea')
const payoutPrefsReceiving = ref('bank')
const payoutPrefsIban = ref('')

const NOTIF_IDS = ['transaction', 'security', 'goal', 'market']
const notifSelected = ref(['transaction'])
const notifSelectAll = computed({
  get: () => NOTIF_IDS.length > 0 && NOTIF_IDS.every((id) => notifSelected.value.includes(id)),
  set: (v) => {
    notifSelected.value = v ? [...NOTIF_IDS] : []
  },
})
</script>

<template>
  <main class="p-6 md:p-10 lg:p-12">
    <div class="mx-auto w-full max-w-[88rem] columns-1 [column-gap:2rem] [column-fill:balance] sm:columns-2 xl:columns-3">
      <!-- Kayıt: telefon, şifre, OTP -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Kayıt ol"
        description="Hesap oluşturmak için bilgilerinizi girin.">
        <form class="flex flex-col gap-4" novalidate @submit.prevent="submitRegister">
          <ui-form-row label="Ad Soyad">
            <ui-input v-model="registerName" autocomplete="name" placeholder="Adınız Soyadınız" />
          </ui-form-row>
          <ui-form-row label="Telefon" description="Ülke kodu ve cep numaranız">
            <ui-phone v-model:country="registerPhoneCountry" v-model:number="registerPhoneNumber" />
          </ui-form-row>
          <ui-form-row label="Şifre">
            <ui-password v-model="registerPassword" autocomplete="new-password" placeholder="En az 8 karakter" />
          </ui-form-row>
          <ui-form-row label="Doğrulama kodu" description="SMS ile gelen 6 haneli kod">
            <ui-pin v-model="registerOtp" :length="6" type="numeric" @complete="onRegisterOtpComplete" />
          </ui-form-row>
          <ui-button type="submit" block rounded>
            Kayıt ol
          </ui-button>
        </form>
      </ui-card>

      <!-- Sipariş: liste satırı, rozet, buton tonları, onay diyaloğu -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Sipariş #1042" description="Bahçe 4 · 3 misafir · 12:40">
        <template #append>
          <ui-badge color="warning" variant="muted">Hazırlanıyor</ui-badge>
        </template>
        <div class="flex flex-col gap-4">
          <ui-list density="compact">
            <ui-list-item v-for="line in orderLines" :key="line.title" :title="line.title"
              :description="line.description" :value="line.value" />
          </ui-list>
          <ui-divider spacing="none" />
          <div class="flex items-center justify-between">
            <span class="ui-text-default text-muted-foreground">Toplam</span>
            <span class="ui-text-default font-medium tabular-nums">₺955</span>
          </div>
        </div>
        <template #footer>
          <div class="flex w-full items-center gap-2">
            <ui-button variant="ghost" color="secondary" cubed prefix-icon="print" aria-label="Fiş yazdır" />
            <ui-button variant="ghost" color="danger" @click="cancelOrder">
              İptal et
            </ui-button>
            <div class="ml-auto flex gap-2">
              <ui-button variant="outline" color="primary" rounded @click="dialogProg.show()">
                Detay
              </ui-button>
              <ui-button color="success" rounded
                @click="toastUi.success({ title: 'Ödeme alındı', description: 'Bahçe 4 kapatıldı.' })">
                Ödeme al
              </ui-button>
            </div>
          </div>
        </template>
      </ui-card>

      <ui-dialog v-model:open="dialogProg.open" title="Sipariş #1042" description="Bahçe 4 · Garson: Deniz"
        icon="receipt" max-width="sm" header-divider>
        <ui-list>
          <ui-list-item title="Açılış" value="12:40" />
          <ui-list-item title="Mutfağa gönderim" value="12:44" />
          <ui-list-item title="Tahmini servis" value="13:05" />
        </ui-list>
      </ui-dialog>

      <!-- Sanatçı profili: input, textarea, select, çoklu seçim, radyo, switch -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Sanatçı profili"
        description="Dinleyicilerin profilinizde gördüğü bilgileri güncelleyin.">
        <form class="flex flex-col gap-4" @submit.prevent>
          <ui-form-row label="Görünen ad">
            <ui-input v-model="profileName" autocomplete="name" placeholder="Sahne adınız veya tam adınız" />
          </ui-form-row>
          <ui-form-row label="Biyografi" description="Kısa tanıtım metni; dinleyiciler profilinizde görür.">
            <ui-input v-model="profileBio" multiline :rows="3" placeholder="Kendinizi birkaç cümleyle tanıtın…" />
          </ui-form-row>
          <ui-form-row label="Şehir" description="Yakınınızdaki konser önerileri için.">
            <ui-select v-model="profileCity" filterable placeholder="Şehir seçin" filter-placeholder="Şehir ara…"
              :options="cityOptions" />
          </ui-form-row>
          <ui-form-row label="Türler">
            <ui-select v-model="profileGenres" multiple filterable :options="genreOptions"
              placeholder="Tür seçin veya arayın…" filter-placeholder="Ara…" />
          </ui-form-row>
          <ui-form-row label="Profil görünürlüğü">
            <ui-radio-group v-model="profileVisibility" orientation="horizontal" aria-label="Profil görünürlüğü">
              <ui-radio value="public" label="Herkese açık" />
              <ui-radio value="links" label="Yalnızca bağlantılar" />
            </ui-radio-group>
          </ui-form-row>
          <ui-form-row label="E-posta özeti" description="Haftalık dinlenme ve gelir özeti." direction="horizontal">
            <ui-switch v-model="profileDigest" aria-label="E-posta özeti" />
          </ui-form-row>
          <ui-button type="button" block rounded @click="toastUi.success({ title: 'Profil kaydedildi' })">
            Değişiklikleri kaydet
          </ui-button>
        </form>
      </ui-card>

      <!-- Plan kullanımı: segment sekme, halka ilerleme, slider, uyarı -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Plan kullanımı"
        description="Dönem 1–31 Ekim · 4 gün kaldı">
        <template #append>
          <ui-badge color="primary" variant="muted">Pro</ui-badge>
        </template>
        <div class="flex flex-col gap-5">
          <ui-tabs v-model="usageTab" variant="segmented" size="sm">
            <ui-tab-list aria-label="Kullanım">
              <ui-tab-trigger value="resources" label="Kaynaklar" />
              <ui-tab-trigger value="limits" label="Limitler" />
            </ui-tab-list>
            <ui-tab-panel value="resources">
              <ul class="m-0 flex list-none flex-col gap-3 p-0">
                <li v-for="item in usageResources" :key="item.label" class="flex min-w-0 items-center gap-3">
                  <ui-progress type="circle" size="sm" :value="item.value" :aria-label="item.label" />
                  <span class="ui-text-default min-w-0 flex-1 truncate">{{ item.label }}</span>
                  <span class="ui-text-default shrink-0 tabular-nums text-muted-foreground">{{ item.display }}</span>
                </li>
              </ul>
            </ui-tab-panel>
            <ui-tab-panel value="limits">
              <div class="flex flex-col gap-4">
                <ui-form-row label="Uyarı eşiği" :description="`Bir kaynak %${usageAlertAt} dolduğunda e-posta gönderilir.`">
                  <ui-slider v-model="usageAlertAt" :min="50" :max="100" :step="5" aria-label="Uyarı eşiği" />
                </ui-form-row>
                <ui-form-row label="Limitte durdur" description="Kota dolunca yeni dağıtımları beklet."
                  direction="horizontal">
                  <ui-switch v-model="usagePauseOnLimit" aria-label="Limitte durdur" />
                </ui-form-row>
              </div>
            </ui-tab-panel>
          </ui-tabs>
          <ui-alert color="warning" title="Edge Requests %95 doldu"
            description="Dönem bitmeden kota aşılırsa istekler yavaşlar." />
        </div>
        <template #footer>
          <ui-button block rounded prefix-icon="arrow-up">
            Planı yükselt
          </ui-button>
        </template>
      </ui-card>

      <!-- Gün sonu: alert tonları ve eylemleri -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Gün sonu"
        description="Kasayı kapatmadan önce bakmanız gerekenler.">
        <div class="flex flex-col gap-3">
          <ui-alert color="info" actions-end title="Kasa günü kapanmadı"
            description="Dünkü iş gününe ait 2 açık hesap var. Kapatmadan yeni günün raporu eksik görünür.">
            <ui-button variant="muted" color="info" size="sm">Hesapları gör</ui-button>
          </ui-alert>
          <ui-alert color="warning" actions-end dismissible title="71 üründe eksik bilgi"
            description="Görsel, alerjen veya hazırlık süresi eksik ürünler QR menüde daha zayıf görünür.">
            <ui-button variant="muted" color="warning" size="sm">Ürünleri gör</ui-button>
          </ui-alert>
          <ui-alert color="danger" actions-end title="Yazarkasa bağlantısı koptu"
            description="Son 3 fiş kuyrukta bekliyor.">
            <ui-button variant="muted" color="danger" size="sm"
              @click="toastUi.error({ title: 'Bağlanılamadı', description: 'Yazarkasa yanıt vermiyor.' })">
              Yeniden dene
            </ui-button>
          </ui-alert>
          <ui-alert color="success" dismissible title="Yedek alındı" description="Bugünün satışları 23:00'te yedeklendi." />
        </div>
      </ui-card>

      <!-- Menü dosyaları: klasör ve dosya türleri -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Menü dosyaları"
        description="Basılı menü, fiyat listesi ve tanıtım içerikleri.">
        <template #append>
          <ui-button variant="outline" color="primary" size="sm" rounded prefix-icon="upload">
            Yükle
          </ui-button>
        </template>
        <div class="grid grid-cols-3 justify-items-center gap-x-4 gap-y-6 md:grid-cols-4">
          <ui-file v-for="file in menuFiles" :key="file.name" :name="file.name" :kind="file.kind" />
        </div>
      </ui-card>

      <!-- Giriş -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Giriş yap"
        description="Hesabınıza erişmek için e-posta ve şifrenizi girin.">
        <form class="flex flex-col gap-4" novalidate @submit.prevent="submitLogin">
          <ui-form-row label="E-posta">
            <ui-input v-model="loginEmail" type="email" autocomplete="email" placeholder="ornek@eposta.com" />
          </ui-form-row>
          <ui-form-row label="Şifre">
            <template #action>
              <ui-button variant="link" color="secondary" size="sm" type="button">
                Şifremi unuttum
              </ui-button>
            </template>
            <ui-password v-model="loginPassword" autocomplete="current-password" placeholder="Şifreniz" />
          </ui-form-row>
          <ui-checkbox v-model="loginRemember" label="Beni hatırla" />
          <ui-button type="submit" block rounded>
            Giriş yap
          </ui-button>
        </form>
      </ui-card>

      <!-- Hesap ayarları: çizgi sekme, kart form satırı -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Hesap ayarları"
        description="Profil, güvenlik ve bildirim tercihleriniz.">
        <ui-tabs v-model="accountTab" variant="line">
          <ui-tab-list aria-label="Hesap ayarları">
            <ui-tab-trigger value="account" label="Profil" icon="user" />
            <ui-tab-trigger value="security" label="Güvenlik" icon="lock" />
            <ui-tab-trigger value="notifications" label="Bildirim" icon="bell" />
          </ui-tab-list>
          <ui-tab-panel value="account">
            <form class="flex flex-col gap-4" @submit.prevent>
              <ui-form-row label="Görünen ad">
                <ui-input v-model="accountDisplayName" autocomplete="name" />
              </ui-form-row>
              <ui-form-row label="E-posta">
                <ui-input v-model="accountEmail" type="email" autocomplete="email" />
              </ui-form-row>
              <ui-button type="button" rounded @click="toastUi.success({ title: 'Profil güncellendi' })">
                Kaydet
              </ui-button>
            </form>
          </ui-tab-panel>
          <ui-tab-panel value="security">
            <form class="flex flex-col gap-4" @submit.prevent>
              <ui-form-row label="Mevcut şifre">
                <ui-password v-model="accountCurrentPassword" autocomplete="current-password" />
              </ui-form-row>
              <ui-form-row label="Yeni şifre">
                <ui-password v-model="accountNewPassword" autocomplete="new-password" />
              </ui-form-row>
              <ui-form-row variant="card" direction="horizontal" label="İki adımlı doğrulama"
                description="Girişte SMS ile ek kod istenir.">
                <ui-button color="secondary" size="sm" type="button">
                  Etkinleştir
                </ui-button>
              </ui-form-row>
              <ui-button type="button" rounded>
                Şifreyi güncelle
              </ui-button>
            </form>
          </ui-tab-panel>
          <ui-tab-panel value="notifications">
            <div class="flex flex-col gap-3">
              <ui-checkbox v-model="accountProductNews" label="Ürün güncellemeleri" />
              <ui-checkbox v-model="accountWeeklyDigest" label="Haftalık özet e-postası" />
            </div>
          </ui-tab-panel>
        </ui-tabs>
      </ui-card>

      <!-- Restoran kaydı: pills stepper + adım formu -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Restoran kaydı"
        description="Birkaç adımda satışa hazır olun.">
        <div class="flex flex-col gap-5">
          <ui-stepper v-model="signupStep" variant="pills" interactive aria-label="Restoran kaydı"
            :steps="signupSteps" />
          <div v-if="signupStep === 2" class="flex flex-col gap-4">
            <ui-form-row label="Restoran adı" description="QR menü ve fişlerde görünür.">
              <ui-input v-model="signupRestaurantName" />
            </ui-form-row>
            <ui-form-row label="Şehir">
              <ui-select v-model="signupCity" filterable :options="cityOptions" filter-placeholder="Şehir ara…" />
            </ui-form-row>
          </div>
          <p v-else class="ui-text-default m-0 text-muted-foreground">
            {{ signupSteps[signupStep].title }} adımındaki bilgileri tamamlayın.
          </p>
        </div>
        <template #footer>
          <ui-button variant="outline" color="secondary" rounded :disabled="signupStep === 0" @click="signupStep--">
            Geri
          </ui-button>
          <ui-button rounded :disabled="signupStep === signupSteps.length - 1" @click="signupStep++">
            İleri
          </ui-button>
        </template>
      </ui-card>

      <!-- Finans menüsü: kart genişliğini doldurur -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Finans" description="Hesap özeti ve planlama.">
        <ui-menu>
          <ui-menu-nav aria-label="Finans menüsü">
            <ui-selection-indicator selector=".ui-menu-item--active" />
            <ui-menu-group label="Genel bakış">
              <ui-menu-item prefix-icon="table-cells" :active="financeActive === 'Dashboard'" @click="financeActive = 'Dashboard'">
                Dashboard
              </ui-menu-item>
              <ui-menu-item prefix-icon="arrow-right-arrow-left" :active="financeActive === 'Transactions'" @click="financeActive = 'Transactions'">
                Transactions
              </ui-menu-item>
              <ui-menu-item prefix-icon="chart-line" :active="financeActive === 'Investments'" @click="financeActive = 'Investments'">
                Investments
              </ui-menu-item>
            </ui-menu-group>
            <ui-divider spacing="sm" />
            <ui-menu-group label="Planlama">
              <ui-menu-item prefix-icon="bullseye" :active="financeActive === 'Goals'" @click="financeActive = 'Goals'">
                Goals
              </ui-menu-item>
              <ui-menu-item prefix-icon="wallet" :active="financeActive === 'Budget'" @click="financeActive = 'Budget'">
                Budget
              </ui-menu-item>
              <ui-menu-item prefix-icon="chart-column" :active="financeActive === 'Reports'" @click="financeActive = 'Reports'">
                Reports
              </ui-menu-item>
            </ui-menu-group>
          </ui-menu-nav>
        </ui-menu>
      </ui-card>

      <!-- Son hareketler: iskelet ↔ içerik, ikon karolu liste -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Son hareketler" description="Restoranınızda az önce olanlar.">
        <template #append>
          <ui-button variant="ghost" color="secondary" size="sm" cubed prefix-icon="rotate" aria-label="Yenile"
            :loading="activityLoading" @click="reloadActivity" />
        </template>
        <ui-skeleton :loading="activityLoading">
          <template #placeholder>
            <div class="flex flex-col gap-4">
              <div v-for="n in 4" :key="n" class="flex items-center gap-3">
                <ui-skeleton variant="circle" class="size-10 shrink-0" />
                <div class="flex min-w-0 flex-1 flex-col gap-2">
                  <ui-skeleton variant="line" class="h-3 w-1/2" />
                  <ui-skeleton variant="line" class="h-3 w-3/4" />
                </div>
              </div>
            </div>
          </template>
          <ui-list>
            <ui-list-item v-for="item in activityItems" :key="item.title" :title="item.title"
              :description="item.description" :icon="item.icon" :icon-color="item.color" />
          </ui-list>
        </ui-skeleton>
      </ui-card>

      <!-- Parça yayını: yatay stepper + boş durum -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Parça yayınla"
        description="Spotify, Apple Music ve diğer mağazalara dağıtın.">
        <div class="flex flex-col gap-6">
          <ui-stepper v-model="releaseStep" direction="horizontal" interactive aria-label="Yayın adımları"
            :steps="releaseSteps" />
          <ui-empty icon="cloud-arrow-up" title="Master dosyanızı yükleyin"
            description="WAV veya FLAC, en az 44.1 kHz. Yükleme bitince bilgiler adımına geçersiniz.">
            <ui-button rounded @click="releaseStep = 1">
              Dosya seç
            </ui-button>
          </ui-empty>
        </div>
      </ui-card>

      <!-- Günün özeti: yoğunluk, çip grubu, filtre çipi, metrik -->
      <ui-theme-provider class="mb-8 block break-inside-avoid w-full" :defaults="{ density: dashDensity }">
        <ui-card title="Günün özeti" description="Ciro, iptal ve masa devri.">
          <template #append>
            <ui-segment-group v-model="dashDensity" size="sm" :block="false" icon-only aria-label="Yoğunluk">
              <ui-segment value="comfortable" icon="table-cells-large" label="Rahat" />
              <ui-segment value="compact" icon="table-cells" label="Yoğun" />
            </ui-segment-group>
          </template>
          <div class="flex flex-col gap-5">
            <ui-toolbar aria-label="Pano filtreleri">
              <template #start>
                <span ref="dashRangeAnchor">
                  <ui-chip-group v-model="dashPeriod" :options="dashPeriodOptions" aria-label="Dönem"
                    @change="onDashPeriodChange" />
                </span>
                <ui-date-range-picker v-model="dashRange" v-model:open="dashRangeOpen" :show-trigger="false"
                  :anchor="dashRangeAnchor" :presets="[]" placement="bottom-start" />
              </template>
              <template #end>
                <ui-filter-chip icon="table" empty-label="Masa" :value-label="dashTable" :empty="!dashTable"
                  clearable @click="dashTable = 'Bahçe 4'" @clear="dashTable = ''" />
              </template>
            </ui-toolbar>
            <ui-stat-group :columns="3" aria-label="Günün özeti">
              <ui-stat title="Ciro" icon="sack-dollar" value="₺48.250" :change="12.5" change-label="dünden" />
              <ui-stat title="İptal" icon="ban" color="danger" value="₺1.120" :change="8" invert-trend
                change-label="dünden" />
              <ui-stat title="Masa devri" icon="chair" value="3,4" :change="null" change-text="Yeni dönem" interactive>
                Ortalama 52 dk oturma
              </ui-stat>
            </ui-stat-group>
            <ui-divider />
            <ui-stat-group :columns="3" :min-columns="2" aria-label="Operasyon">
              <ui-stat variant="plain" size="md" icon-tile title="Bahşiş" icon="coins" color="success"
                value="₺1.240" interactive>
                Satışın %4
              </ui-stat>
              <ui-stat variant="plain" size="md" icon-tile title="İndirim" icon="percent" color="warning"
                value="₺380">
                6 adisyonda indirim
              </ui-stat>
              <ui-stat variant="plain" size="md" icon-tile title="İptal ürün" icon="ban" color="danger"
                value="3">
                ₺210 · %1,2
              </ui-stat>
            </ui-stat-group>
            <ui-divider />
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ui-field size="sm" title="Kasa">
                <ui-button variant="link" color="primary">Ana Kasa</ui-button>
              </ui-field>
              <ui-field size="sm" title="Ödeme">Nakit</ui-field>
              <ui-field size="sm" title="Masa">Bahçe 4</ui-field>
              <ui-field size="sm" title="Kaydeden">Ayşe Yılmaz</ui-field>
            </div>
          </div>
        </ui-card>
      </ui-theme-provider>

      <!-- Etkinlik: dropdown eylemi, tarih/saat, popover, diyaloglar -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Etkinlik oluştur"
        description="Yeni bir konser veya tadım gecesi planlayın.">
        <form class="flex flex-col gap-4" @submit.prevent>
          <ui-form-row label="Etkinlik adı">
            <template #action>
              <ui-dropdown v-model:open="eventMenuOpen" placement="bottom-end" :items="eventMenuItems"
                @select="onEventMenuSelect">
                <template #trigger="{ toggle, open }">
                  <ui-button variant="ghost" color="secondary" size="sm" cubed prefix-icon="ellipsis"
                    :aria-expanded="open ? 'true' : 'false'" aria-haspopup="menu" aria-label="Diğer seçenekler"
                    @click="toggle" />
                </template>
              </ui-dropdown>
            </template>
            <ui-input v-model="eventTitle" placeholder="Örn. Akustik gece — İstanbul" />
          </ui-form-row>
          <div class="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
            <ui-form-row label="Tarih">
              <ui-date-picker v-model="eventDate" />
            </ui-form-row>
            <ui-form-row label="Saat">
              <ui-time-picker v-model="eventTime" :step-minutes="15" />
            </ui-form-row>
          </div>
          <ui-form-row label="Şehir">
            <ui-select v-model="eventCity" filterable placeholder="Şehir seçin" filter-placeholder="Şehir ara…"
              :options="cityOptions" />
          </ui-form-row>
          <ui-form-row label="Bilet para birimi">
            <ui-select v-model="eventCurrency" :options="currencyOptions" />
          </ui-form-row>
          <ui-form-row label="Kapı notu" description="Bilette katılımcılara gösterilir.">
            <div>
              <ui-popover v-model:open="eventNoteOpen" placement="bottom-start">
                <template #trigger="{ toggle }">
                  <ui-button variant="outline" color="primary" size="sm" type="button" prefix-icon="note-sticky"
                    @click="toggle">
                    Notu gör
                  </ui-button>
                </template>
                <template #content="{ close }">
                  <div class="flex max-w-xs flex-col gap-3 p-3">
                    <p class="ui-text-default m-0 text-muted-foreground">
                      Kapı açılış 19:00; kimlik zorunludur.
                    </p>
                    <ui-button size="sm" type="button" @click="close">
                      Tamam
                    </ui-button>
                  </div>
                </template>
              </ui-popover>
            </div>
          </ui-form-row>
        </form>
        <template #footer>
          <ui-button variant="outline" color="primary" rounded @click="eventPreviewOpen = true">
            Önizle
          </ui-button>
          <ui-button rounded @click="toastUi.success({ title: 'Etkinlik yayınlandı' })">
            Yayınla
          </ui-button>
        </template>
      </ui-card>

      <ui-dialog v-model:open="eventPreviewOpen" title="Etkinlik özeti"
        description="Yayınlamadan önce bilgileri kontrol edin." icon="calendar" header-divider>
        <ui-list>
          <ui-list-item title="Ad" :value="eventTitle || 'Başlıksız etkinlik'" />
          <ui-list-item title="Tarih" :value="`${eventDate} · ${eventTime}`" />
        </ui-list>
        <template #footer>
          <ui-button rounded @click="eventPreviewOpen = false">
            Yayınla
          </ui-button>
        </template>
      </ui-dialog>

      <ui-dialog v-model:open="eventDeleteOpen" max-width="sm" title="Taslağı sil"
        description="Bu etkinlik taslağı kalıcı olarak silinecek." icon="trash">
        <template #footer>
          <ui-button color="danger" rounded @click="eventDeleteOpen = false">
            Sil
          </ui-button>
        </template>
      </ui-dialog>

      <ui-dialog v-model:open="eventReportOpen" title="Katılım raporu"
        description="Dışa aktarılacak tarih aralığını seçin." icon="file-export" header-divider max-width="xl">
        <template #toolbar>
          <ui-segment-group v-model="eventReportRange" :block="false" aria-label="Tarih aralığı">
            <ui-segment value="7d" label="7 gün" />
            <ui-segment value="30d" label="30 gün" />
            <ui-segment value="90d" label="90 gün" />
          </ui-segment-group>
        </template>
        <p class="ui-text-default m-0">
          Seçilen aralık için bilet satışları ve giriş listesi PDF olarak indirilir.
        </p>
        <template #footer>
          <ui-button rounded @click="eventReportOpen = false">
            Dışa aktar
          </ui-button>
        </template>
      </ui-dialog>

      <!-- Kurulum: dikey stepper -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Kurulum" description="Satışa başlamadan önce 3 adım.">
        <ui-stepper v-model="setupStep" direction="vertical" interactive aria-label="Kurulum" :steps="setupSteps" />
        <template #footer>
          <ui-button block rounded :disabled="setupStep === setupSteps.length - 1" @click="setupStep++">
            Sonraki adım
          </ui-button>
        </template>
      </ui-card>

      <!-- Rezervasyon: bölüm, hata durumu, çoklu çip -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Rezervasyon" description="Cumartesi 20:00 · 4 kişi">
        <div class="flex flex-col">
          <ui-section title="Misafir" icon="user" description="Rezervasyonu yapan kişi ve iletişim bilgisi.">
            <ui-form-row label="Ad soyad">
              <ui-input model-value="Deniz Yılmaz" />
            </ui-form-row>
            <ui-form-row label="E-posta" error="Geçerli bir e-posta adresi girin; örnek: ad@alanadi.com">
              <ui-input model-value="deniz@" type="email" />
            </ui-form-row>
          </ui-section>
          <ui-section title="İstekler" icon="note-sticky">
            <template #body>
              <ui-chip-group v-model="reservationRequests" multiple :scrollable="false"
                :options="reservationRequestOptions" aria-label="İstekler" />
            </template>
          </ui-section>
        </div>
        <template #footer>
          <ui-button block rounded @click="toastUi.success({ title: 'Rezervasyon kaydedildi' })">
            Rezervasyonu kaydet
          </ui-button>
        </template>
      </ui-card>

      <!-- Ayarlar: ikon karolu gezinme satırları -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Ayarlar" description="Restoranınızın temel bilgileri.">
        <ui-list>
          <ui-list-item title="Restoran bilgileri" description="Ad, adres ve çalışma saatleri" icon="store"
            icon-hex="#007AFF" size="lg" interactive />
          <ui-list-item title="Para birimi" value="TRY" icon="coins" icon-hex="#34C759" size="lg" interactive />
          <ui-list-item title="Wi-Fi" value="Misafir" icon="wifi" icon-hex="#5856D6" size="lg" interactive />
          <ui-list-item title="Hesabı sil" icon="trash" icon-hex="#FF3B30" color="danger" size="lg" interactive />
        </ui-list>
      </ui-card>

      <!-- Bölge ve faturalama: dikey sekme -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Bölge ve faturalama"
        description="Para birimi, dil ve fatura bilgileri.">
        <ui-tabs v-model="regionTab" variant="line" orientation="vertical">
          <div class="flex min-w-0 flex-col gap-4 @md:flex-row @md:items-start @md:gap-8">
            <ui-tab-list aria-label="Bölge ve faturalama">
              <ui-tab-trigger value="general" label="Genel" />
              <ui-tab-trigger value="billing" label="Fatura" />
            </ui-tab-list>
            <div class="min-w-0 flex-1">
              <ui-tab-panel value="general">
                <form class="flex flex-col gap-4" @submit.prevent>
                  <ui-form-row label="Para birimi">
                    <ui-select v-model="regionCurrency" :options="currencyOptions" />
                  </ui-form-row>
                  <ui-form-row label="Dil" direction="horizontal" stack-on-mobile>
                    <ui-segment-group v-model="previewLocale" size="sm" :block="false" :scrollable="false"
                      aria-label="Dil">
                      <ui-segment value="tr" label="TR" />
                      <ui-segment value="en" label="EN" />
                    </ui-segment-group>
                  </ui-form-row>
                </form>
              </ui-tab-panel>
              <ui-tab-panel value="billing">
                <ui-empty icon="credit-card" size="sm" title="Kayıtlı kart yok"
                  description="Aboneliğiniz kesintisiz yenilensin diye bir ödeme yöntemi ekleyin.">
                  <ui-button size="sm" rounded>Kart ekle</ui-button>
                </ui-empty>
              </ui-tab-panel>
            </div>
          </div>
        </ui-tabs>
      </ui-card>

      <!-- Site menüsü: bağlantı segmentleri -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Site menüsü"
        description="Restoran sitesinin üst gezinmesi; seçili sayfa vurgulanır.">
        <nav aria-label="Site menüsü">
          <ui-segment-group :model-value="siteSection" navigation :block="false">
            <ui-segment v-for="item in siteNavItems" :key="item.value" :value="item.value"
              :label="item.label" :to="{ query: { section: item.value } }" @click="siteSection = item.value" />
          </ui-segment-group>
        </nav>
      </ui-card>

      <!-- Vercel Agent: liste, rozet, bilgi kutusu -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Ship faster & safer with Vercel Agent"
        description="Your use is subject to fair use limits. Enable to automate reviews and triage.">
        <div class="flex flex-col gap-5">
          <ui-list density="relaxed">
            <ui-list-item prefix-icon="check">
              <p class="m-0">
                <span class="font-medium text-foreground">Code reviews</span>
                <span class="text-muted-foreground"> in GitHub with context from your codebase and deployment
                  history.</span>
              </p>
            </ui-list-item>
            <ui-list-item prefix-icon="check">
              <p class="m-0 text-muted-foreground">
                Catch <span class="font-medium text-foreground">hard-to-find</span> issues before they reach
                production.
              </p>
            </ui-list-item>
            <ui-list-item prefix-icon="check">
              <div class="flex flex-col items-start gap-2">
                <p class="m-0 text-muted-foreground">
                  Route incidents to the right owner with suggested runbooks.
                </p>
                <ui-badge color="success" variant="muted" size="sm">Requires Observability Plus</ui-badge>
              </div>
            </ui-list-item>
          </ui-list>
          <ui-alert color="info" icon="gift"
            description="Pro teams get $100 in Vercel Agent trial credit when they enable this feature during the promotional window." />
        </div>
        <template #footer>
          <ui-button variant="outline" color="primary" rounded>
            Not now
          </ui-button>
          <ui-button rounded>
            Enable with $100 credits
          </ui-button>
        </template>
      </ui-card>

      <!-- Codespaces: toolbar, append, boş durum -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Codespaces" description="Your workspaces in the cloud"
        header-divider>
        <template #toolbar>
          <ui-segment-group v-model="codespaceMode" size="sm" :block="false" aria-label="Workspace type">
            <ui-segment value="cloud" label="Cloud" />
            <ui-segment value="local" label="Local" />
          </ui-segment-group>
        </template>
        <template #append>
          <ui-button variant="solid" color="primary" cubed prefix-icon="plus" aria-label="Create codespace" />
          <ui-button variant="outline" color="info" cubed prefix-icon="terminal" aria-label="Open in terminal" />
        </template>
        <ui-empty icon="server" title="No codespaces"
          description="You don't have any codespaces with this repository checked out">
          <ui-button rounded>
            Create Codespace
          </ui-button>
          <ui-button variant="link" color="secondary" size="sm">
            Learn more about codespaces
          </ui-button>
        </ui-empty>
        <template #footer>
          <p class="ui-text-2xs m-0 w-full text-left text-muted-foreground">
            Codespace usage for this repository is paid for by shadcn.
          </p>
        </template>
      </ui-card>

      <!-- Katkıda bulunanlar -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Contributors">
        <template #append>
          <ui-badge color="secondary">312</ui-badge>
        </template>
        <div class="grid grid-cols-4 gap-2 sm:grid-cols-8">
          <ui-avatar v-for="(a, i) in contributorAvatars" :key="i" :src="a.src" :alt="a.alt" size="md" ring />
        </div>
        <template #footer>
          <ui-button variant="link" color="secondary" size="sm">
            + 810 contributors
          </ui-button>
        </template>
      </ui-card>

      <!-- Payout Threshold -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Payout Threshold"
        description="Set the minimum balance required before a payout is triggered.">
        <template #actions>
          <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
        </template>
        <div class="flex flex-col">
          <ui-form-row label="Preferred Currency">
            <ui-select v-model="payoutCurrency" :options="currencyOptions" />
          </ui-form-row>
          <ui-divider />
          <ui-slider v-model="payoutAmount" label="Minimum Payout Amount" :min="payoutMin" :max="payoutMax" :step="10"
            :value-text="payoutFormatted" min-label="$50 (MIN)" max-label="$10,000 (MAX)"
            aria-label="Minimum payout amount" />
          <ui-divider />
          <ui-form-row label="Notes">
            <ui-input v-model="payoutNotes" multiline :rows="3" placeholder="Add any notes for this payout configuration…" />
          </ui-form-row>
        </div>
        <template #footer>
          <ui-button block>
            Save Threshold
          </ui-button>
        </template>
      </ui-card>

      <!-- Preferences -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Preferences"
        description="Manage your account settings and notifications.">
        <template #actions>
          <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
        </template>
        <div class="flex flex-col">
          <ui-form-row label="Default Currency">
            <ui-select v-model="prefsCurrency" :options="currencyOptions" />
          </ui-form-row>
          <ui-divider />
          <ui-form-row label="Public Statistics"
            description="Allow others to see your total stream count and listening activity." direction="horizontal">
            <ui-switch v-model="prefsPublicStats" />
          </ui-form-row>
          <ui-divider />
          <ui-form-row label="Email Notifications" description="Monthly royalty reports and distribution updates."
            direction="horizontal">
            <ui-switch v-model="prefsEmailNotif" />
          </ui-form-row>
        </div>
        <template #footer>
          <div class="flex w-full min-w-0 flex-wrap items-center justify-between gap-3">
            <ui-button variant="outline" color="primary" rounded>
              Reset
            </ui-button>
            <ui-button rounded>
              Save Preferences
            </ui-button>
          </div>
        </template>
      </ui-card>

      <!-- Social Links -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Social Links">
        <div class="flex flex-col gap-4">
          <ui-form-row label="Spotify Artist URL">
            <ui-input v-model="socialSpotify">
              <template #prepend>
                <ui-icon name="spotify" type="brands" size="sm" />
              </template>
            </ui-input>
          </ui-form-row>
          <ui-form-row label="Instagram Handle">
            <ui-input v-model="socialInstagram">
              <template #prepend>
                <ui-icon name="instagram" type="brands" size="sm" />
              </template>
            </ui-input>
          </ui-form-row>
          <ui-form-row label="SoundCloud URL">
            <ui-input v-model="socialSoundcloud" placeholder="soundcloud.com/username">
              <template #prepend>
                <ui-icon name="soundcloud" type="brands" size="sm" />
              </template>
            </ui-input>
          </ui-form-row>
          <ui-form-row label="Website">
            <ui-input v-model="socialWebsite" placeholder="https://yoursite.com">
              <template #prepend>
                <ui-icon name="globe" size="sm" />
              </template>
            </ui-input>
          </ui-form-row>
        </div>
        <template #footer>
          <ui-button color="secondary" rounded>
            Discard
          </ui-button>
          <ui-button rounded>
            Save Changes
          </ui-button>
        </template>
      </ui-card>

      <!-- Payout method: button radyo -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Payout method"
        description="Manage your payout preferences and settings.">
        <template #actions>
          <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
        </template>
        <div class="flex flex-col gap-4">
          <ui-form-row label="Account Holder Name">
            <ui-input v-model="payoutPrefsAccount" />
          </ui-form-row>
          <ui-form-row label="Receiving method">
            <ui-radio-group v-model="payoutPrefsReceiving" variant="button" aria-label="Receiving method">
              <ui-radio value="bank" label="Bank Transfer" description="SWIFT / IBAN" />
              <ui-radio value="paypal" label="PayPal" description="Instant Payout" />
            </ui-radio-group>
          </ui-form-row>
          <ui-form-row label="IBAN / Account Number">
            <ui-input v-model="payoutPrefsIban" placeholder="TR00 0000 0000 0000 0000 0000 00" />
          </ui-form-row>
        </div>
        <template #footer>
          <ui-button block rounded>
            Save Payout Settings
          </ui-button>
        </template>
      </ui-card>

      <!-- Notifications: checkbox grubu -->
      <ui-card class="mb-8 break-inside-avoid w-full" title="Notifications"
        description="Choose what you want to be notified about.">
        <div class="flex flex-col gap-4">
          <ui-checkbox v-model="notifSelectAll" label="Select all"
            :indeterminate="notifSelected.length > 0 && notifSelected.length < 4" />
          <ui-checkbox-group v-model="notifSelected" variant="list" aria-label="Notification types">
            <ui-checkbox value="transaction" label="Transaction alerts" description="Deposits, withdrawals, and transfers." />
            <ui-checkbox value="security" label="Security alerts" description="Login attempts and account changes." />
            <ui-checkbox value="goal" label="Goal milestones" description="Updates at 25%, 50%, 75%, and 100%." />
            <ui-checkbox value="market" label="Market updates" description="Daily portfolio summary and price alerts." />
          </ui-checkbox-group>
        </div>
        <template #footer>
          <ui-button block rounded>
            Save Preferences
          </ui-button>
        </template>
      </ui-card>
    </div>
  </main>
</template>
