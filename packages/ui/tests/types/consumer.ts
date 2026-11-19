/**
 * Üretilen tiplerin tüketici gözünden derlendiğini doğrular (`pnpm --filter fewui run check:types`).
 * Çalıştırılmaz; yalnız tip denetiminden geçer.
 */
import { createApp, h } from 'vue'
import type { GlobalComponents } from 'vue'
import UiLib, { Button, Dialog, useToast, useConfirm, setUiTheme, type ButtonProps, type UiToastPayload } from 'fewui'
import UiLandingLib, { applyUiTheme } from 'fewui/landing'

const app = createApp({})
app.use(UiLib, { locales: ['tr', 'en'], theme: 'web', mode: 'dark' })
app.use(UiLandingLib, { theme: 'landing' })

const props: ButtonProps = { variant: 'solid', color: 'primary', size: 'md', to: { name: 'home' } }
h(Button, props)
applyUiTheme('landing', { mode: 'dark' })
h(Dialog, { open: true, title: 'Ürün', 'onUpdate:open': (value: boolean) => value })

// @ts-expect-error — ton sözlüğünde `error` yok
const wrongTone: ButtonProps = { color: 'error' }

const toast = useToast()
const payload: UiToastPayload = { title: 'Silindi', action: { label: 'Geri al', onClick: () => {} } }
const id: number = toast.push(payload)
toast.dismiss(id)
useConfirm().confirm({ title: 'Emin misiniz?' }).then((ok: boolean) => ok)
setUiTheme('web', { mode: 'system' })

// Global etiketler şablonda tamamlanır.
type ButtonTag = GlobalComponents['ui-button']
const tag: ButtonTag = Button
void tag
void wrongTone
