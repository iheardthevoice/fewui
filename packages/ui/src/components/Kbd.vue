<template>
  <kbd
    v-if="$slots.default || resolvedKeys.length <= 1"
    :class="keyClass"
  >
    <slot>{{ resolvedKeys[0] }}</slot>
  </kbd>
  <kbd
    v-else
    class="ui-kbd-group"
  >
    <kbd
      v-for="(key, index) in resolvedKeys"
      :key="index"
      :class="keyClass"
    >{{ key }}</kbd>
  </kbd>
</template>

<script>
const SIZES = ['sm', 'md']

/** Apple klavyesinde simge, diğerlerinde tuş üstü yazısı. */
const PLATFORM_KEYS = {
  mod: ['⌘', 'Ctrl'],
  cmd: ['⌘', 'Ctrl'],
  meta: ['⌘', 'Win'],
  ctrl: ['⌃', 'Ctrl'],
  control: ['⌃', 'Ctrl'],
  alt: ['⌥', 'Alt'],
  option: ['⌥', 'Alt'],
  shift: ['⇧', 'Shift'],
}

const KEY_LABELS = {
  enter: '↵',
  return: '↵',
  backspace: '⌫',
  tab: 'Tab',
  esc: 'Esc',
  escape: 'Esc',
  space: 'Space',
  delete: 'Del',
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
  arrowup: '↑',
  arrowdown: '↓',
  arrowleft: '←',
  arrowright: '→',
}

export default {
  name: 'Kbd',
  props: {
    /**
     * Tuş(lar): dizi (`['mod', 'k']`) ya da `+` ile ayrılmış metin (`"mod+shift+p"`).
     * `mod` Apple platformlarında ⌘, diğerlerinde Ctrl olarak yazılır.
     */
    keys: {
      type: [Array, String],
      default: () => [],
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
  },
  data() {
    return {
      /** Platform mount sonrası okunur: sunucu çıktısı ile ilk istemci çizimi aynı kalır. */
      isApple: false,
    }
  },
  computed: {
    keyList() {
      if (Array.isArray(this.keys)) return this.keys.map((key) => String(key))
      // Yalnız ardından karakter gelen "+" ayırıcıdır: `"mod++"` → `mod`, `+`.
      return String(this.keys || '')
        .split(/\+(?=.)/)
        .map((key) => key.trim())
        .filter(Boolean)
    },
    resolvedKeys() {
      return this.keyList.map((key) => {
        const id = key.toLowerCase()
        if (PLATFORM_KEYS[id]) return PLATFORM_KEYS[id][this.isApple ? 0 : 1]
        if (KEY_LABELS[id]) return KEY_LABELS[id]
        return key.length === 1 ? key.toUpperCase() : key
      })
    },
    keyClass() {
      return ['ui-kbd', `ui-kbd--${this.size}`, this.size === 'sm' ? 'ui-text-2xs' : '']
    },
  },
  mounted() {
    const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || ''
    this.isApple = /mac|iphone|ipad|ipod/i.test(platform)
  },
}
</script>
