<template>
  <div
    :class="rootClass"
    role="separator"
    :tabindex="disabled ? undefined : 0"
    :aria-orientation="isHorizontal ? 'vertical' : 'horizontal'"
    :aria-valuenow="values ? values.now : undefined"
    :aria-valuemin="values ? values.min : undefined"
    :aria-valuemax="values ? values.max : undefined"
    :aria-controls="values ? values.controls : undefined"
    :aria-label="resolvedAriaLabel"
    :aria-disabled="disabled ? 'true' : undefined"
    :data-dragging="dragContext ? 'true' : undefined"
    v-bind="passthroughAttrs"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerEnd"
    @pointercancel="onPointerEnd"
    @lostpointercapture="onPointerEnd"
    @keydown="onKeydown"
  >
    <span
      v-if="showGrip"
      class="ui-resizable-handle-grip"
      aria-hidden="true"
    >
      <ui-icon
        name="grip-vertical"
        size="xs"
      />
    </span>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'

export default {
  name: 'ResizableHandle',
  inheritAttrs: false,
  inject: {
    uiResizable: { default: null },
  },
  props: {
    /** Çizginin ortasında görünür tutma kulpu. */
    showGrip: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      /** Sürükleme başlangıcı: `{ base, pixels, sign, origin, pointerId }`. */
      dragContext: null,
    }
  },
  computed: {
    isHorizontal() {
      return !this.uiResizable || this.uiResizable.isHorizontal
    },
    index() {
      return this.uiResizable ? this.uiResizable.indexOfHandle(this) : -1
    },
    values() {
      return this.index < 0 ? null : this.uiResizable.handleValues(this.index)
    },
    resolvedAriaLabel() {
      return this.ariaLabel || resolveUiText(this, 'ui.resizable.handle', 'Resize panels')
    },
    rootClass() {
      return cn(
        'ui-resizable-handle',
        this.isHorizontal ? 'ui-resizable-handle--horizontal' : 'ui-resizable-handle--vertical',
        this.showGrip && 'ui-resizable-handle--grip',
        this.disabled && 'ui-resizable-handle--disabled',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  mounted() {
    this.uiResizable?.registerHandle(this)
  },
  beforeUnmount() {
    this.uiResizable?.unregisterHandle(this)
  },
  methods: {
    pointerPosition(event) {
      return this.isHorizontal ? event.clientX : event.clientY
    },
    onPointerDown(event) {
      if (this.disabled || this.index < 0 || (event.pointerType === 'mouse' && event.button !== 0)) return
      event.preventDefault()
      // Yakalama: imleç tutamacın dışına çıksa da (iframe, hızlı hareket) sürükleme sürer.
      try {
        this.$el.setPointerCapture(event.pointerId)
      } catch {
        // Yakalanamayan işaretçi (sentetik olay): hareket yine tutamaç üzerinde izlenir.
      }
      this.$el.focus({ preventScroll: true })
      this.dragContext = {
        ...this.uiResizable.startDrag(),
        origin: this.pointerPosition(event),
        pointerId: event.pointerId,
      }
    },
    onPointerMove(event) {
      const context = this.dragContext
      if (!context || event.pointerId !== context.pointerId) return
      this.uiResizable.dragTo(this.index, context, this.pointerPosition(event) - context.origin)
    },
    onPointerEnd(event) {
      const context = this.dragContext
      if (!context || event.pointerId !== context.pointerId) return
      this.dragContext = null
      try {
        this.$el.releasePointerCapture(event.pointerId)
      } catch {
        // Zaten bırakılmış.
      }
      this.uiResizable.endDrag()
    },
    onKeydown(event) {
      if (this.disabled || this.index < 0) return
      const group = this.uiResizable
      let direction = 0
      if (this.isHorizontal) {
        const sign = group.isRtl() ? -1 : 1
        if (event.key === 'ArrowRight') direction = sign
        else if (event.key === 'ArrowLeft') direction = -sign
      } else if (event.key === 'ArrowDown') direction = 1
      else if (event.key === 'ArrowUp') direction = -1

      if (direction) group.stepHandle(this.index, direction)
      else if (event.key === 'Home') group.moveHandleToLimit(this.index, false)
      else if (event.key === 'End') group.moveHandleToLimit(this.index, true)
      else if (event.key === 'Enter') group.toggleCollapse(this.index)
      else return
      event.preventDefault()
    },
  },
}
</script>
