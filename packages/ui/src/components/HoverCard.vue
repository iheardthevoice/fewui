<template>
  <Popover
    :open="isOpen"
    :placement="placement"
    :width="width"
    :mobile-centered="false"
    :aria-label="ariaLabel"
    @update:open="onPopoverOpenChange"
  >
    <template #trigger>
      <span
        ref="trigger"
        class="ui-hover-card-trigger"
        @pointerdown="onPointerDown"
        @pointerenter="onTriggerEnter"
        @pointerleave="onLeave"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
      >
        <slot
          name="trigger"
          :open="isOpen"
        />
      </span>
    </template>
    <template #content>
      <div
        ref="card"
        class="ui-hover-card"
        :class="width != null && width !== '' ? 'ui-hover-card--sized' : ''"
        @pointerenter="onCardEnter"
        @pointerleave="onLeave"
        @focusout="onFocusOut"
      >
        <slot />
      </div>
    </template>
  </Popover>
</template>

<script>
import Popover from './Popover.vue'

const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'top-start',
  'top-end',
  'top',
]

/**
 * Üzerine gelince / odaklanınca açılan zengin önizleme kartı. İçerik tamamlayıcıdır:
 * dokunmatik cihazda açılmaz, odağı tuzağa almaz. İşaretçi tetikleyiciden karta geçerken
 * `closeDelay` süresince kart açık kalır.
 */
export default {
  name: 'HoverCard',
  components: { Popover },
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: undefined,
    },
    /** Açılış gecikmesi (ms). */
    openDelay: {
      type: Number,
      default: 500,
    },
    /** Kapanış gecikmesi (ms) — işaretçinin karta geçmesine izin verir. */
    closeDelay: {
      type: Number,
      default: 200,
    },
    placement: {
      type: String,
      default: 'bottom',
      validator: (v) => PLACEMENTS.includes(v),
    },
    /** Kart genişliği (örn. `20rem`); verilmezse içerik + tema üst sınırı. */
    width: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Kart panelinin erişilebilir adı; metin i18n'den gelir. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:open'],
  data() {
    return {
      internalOpen: false,
    }
  },
  computed: {
    isOpen() {
      return this.open !== undefined ? this.open : this.internalOpen
    },
  },
  watch: {
    disabled(value) {
      if (value) {
        this.clearTimers()
        this.setOpen(false)
      }
    },
  },
  beforeUnmount() {
    this.clearTimers()
  },
  methods: {
    setOpen(value) {
      if (value === this.isOpen) return
      if (this.open === undefined) this.internalOpen = value
      this.$emit('update:open', value)
    },
    clearTimers() {
      if (this.openTimer) clearTimeout(this.openTimer)
      if (this.closeTimer) clearTimeout(this.closeTimer)
      this.openTimer = null
      this.closeTimer = null
    },
    scheduleOpen() {
      if (this.disabled) return
      this.clearTimers()
      if (this.isOpen) return
      this.openTimer = setTimeout(() => {
        this.openTimer = null
        this.setOpen(true)
      }, Math.max(0, this.openDelay))
    },
    scheduleClose() {
      this.clearTimers()
      if (!this.isOpen) return
      this.closeTimer = setTimeout(() => {
        this.closeTimer = null
        this.setOpen(false)
      }, Math.max(0, this.closeDelay))
    },
    /** Dokunmatik: kart açılmaz; dokunuşun ardından gelen odak da açmaz. */
    onPointerDown(e) {
      this.touched = e.pointerType === 'touch'
    },
    onTriggerEnter(e) {
      if (e.pointerType === 'touch') return
      this.touched = false
      this.scheduleOpen()
    },
    onCardEnter() {
      this.clearTimers()
    },
    onLeave(e) {
      if (e.pointerType === 'touch') return
      this.scheduleClose()
    },
    onFocusIn() {
      if (this.touched) return
      this.scheduleOpen()
    },
    /** Odak tetikleyici ile kart arasında gezerken kapanmaz. */
    onFocusOut(e) {
      const next = e.relatedTarget
      if (next && (this.$refs.trigger?.contains(next) || this.$refs.card?.contains(next))) return
      this.scheduleClose()
    },
    /** Popover yalnız kapanışı bildirir (Escape, dış tıklama). */
    onPopoverOpenChange(value) {
      if (value) return
      this.clearTimers()
      this.setOpen(false)
    },
  },
}
</script>
