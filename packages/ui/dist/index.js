import { a4 as k, aB as H, bb as O, b7 as ne, aZ as Oe, ai as S, S as Ze, f as B, al as $, b2 as M, a_ as Ve, aW as Xe, v as Qe, aC as Re, aw as Je, b0 as K, aL as Be, m as Fe, bc as et, at as Ne, aS as tt, aN as it, c as ve, $ as _e, aG as rt, b1 as at, aX as st, aY as $e, a3 as nt, ag as lt, ao as ot, aO as U, aT as ut, aM as dt, ba as ct, ap as ht, A as ft, a as mt, b as pt, d as gt, e as yt, g as bt, h as vt, k as _t, l as kt, n as wt, E as xt, r as St, I as Ct, s as Tt, t as Lt, L as It, u as At, P as zt, w as Mt, x as Pt, R as Et, y as Dt, J as Ot, K as Vt, N as Rt, O as Bt, Q as Ft, V as Nt, W as $t, X as Ht, Y as Ut, Z as Wt, _ as Yt, az as Gt, aQ as qt, a9 as Kt, b4 as jt, a8 as Zt } from "./custom-css-CnLi66Ir.js";
import { B as bd, C as vd, i as _d, j as kd, F as wd, o as xd, p as Sd, q as Cd, G as Td, M as Ld, z as Id, H as Ad, D as zd, T as Md, U as Pd, a0 as Ed, a1 as Dd, a2 as Od, a5 as Vd, a6 as Rd, a7 as Bd, aa as Fd, ab as Nd, ac as $d, ad as Hd, ae as Ud, af as Wd, ah as Yd, aj as Gd, ak as qd, am as Kd, an as jd, aq as Zd, ar as Xd, as as Qd, au as Jd, av as ec, ax as tc, ay as ic, aA as rc, aD as ac, aE as sc, aF as nc, aH as lc, aI as oc, aJ as uc, aK as dc, aP as cc, aR as hc, aU as fc, aV as mc, a$ as pc, b3 as gc, b5 as yc, b6 as bc, b8 as vc, b9 as _c, bd as kc, be as wc, bf as xc, bg as Sc } from "./custom-css-CnLi66Ir.js";
import { resolveComponent as v, openBlock as a, createElementBlock as l, normalizeClass as _, renderSlot as g, createVNode as w, createCommentVNode as f, createElementVNode as c, toDisplayString as m, createBlock as b, normalizeStyle as E, mergeProps as L, withCtx as y, withKeys as j, withModifiers as D, createTextVNode as T, Fragment as I, renderList as P, createSlots as re, normalizeProps as Xt, guardReactiveProps as Qt, Teleport as Z, Transition as X, resolveDynamicComponent as Y, readonly as Jt, reactive as fe, Comment as ei, Text as ti, withDirectives as He, vShow as Ue, computed as ii } from "vue";
import { RouterLink as ri } from "vue-router";
const ai = {
  name: "ActionCard",
  mixins: [O],
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: H,
    selected: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showTrailing: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  computed: {
    ...ne(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, si = ["disabled"], ni = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, li = { class: "ui-action-card__content" }, oi = { class: "ui-action-card__title" }, ui = {
  key: 0,
  class: "ui-action-card__description"
};
function di(e, r, i, s, n, t) {
  const u = v("ui-icon");
  return a(), l("button", {
    type: "button",
    class: _(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      t.showDefaultLeading ? (a(), l("span", ni, [
        w(u, {
          name: i.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("", !0)
    ]),
    c("span", li, [
      c("span", oi, m(i.title), 1),
      i.description ? (a(), l("span", ui, m(i.description), 1)) : f("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (a(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, si);
}
const ci = /* @__PURE__ */ k(ai, [["render", di]]), hi = {
  name: "ActionCardList",
  props: {
    ariaLabel: {
      type: String,
      default: ""
    },
    maxHeight: {
      type: String,
      default: ""
    }
  },
  computed: {
    listStyle() {
      if (this.maxHeight)
        return { maxHeight: this.maxHeight };
    }
  }
}, fi = ["aria-label"];
function mi(e, r, i, s, n, t) {
  return a(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: E(t.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, fi);
}
const pi = /* @__PURE__ */ k(hi, [["render", mi]]), gi = {
  name: "AiButton",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    prefixIcon: {
      type: String,
      default: "wand-magic-sparkles"
    },
    size: {
      type: String,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    isBlock() {
      return this.block;
    },
    resolvedSize() {
      const e = Oe(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, yi = ["data-size"], bi = { class: "ui-ai-button__surface" };
function vi(e, r, i, s, n, t) {
  const u = v("ui-button");
  return a(), l("span", {
    class: _(["ui-ai-button", {
      "ui-ai-button--block": t.isBlock,
      "ui-ai-button--disabled": i.disabled || i.loading
    }]),
    "data-size": t.resolvedSize,
    style: E(t.rootStyle)
  }, [
    r[1] || (r[1] = c("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", bi, [
      w(u, L({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: t.resolvedSize,
        "prefix-icon": i.prefixIcon,
        disabled: i.disabled,
        loading: i.loading,
        "loading-text": i.loadingText,
        block: t.isBlock
      }, e.$attrs, {
        onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
      }), {
        default: y(() => [
          g(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, yi);
}
const _i = /* @__PURE__ */ k(gi, [["render", vi]]), ki = Ze, oe = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, wi = {
  name: "AvatarGroup",
  SIZE_CLASS: oe,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ki.includes(e)
    },
    /** Extra count shown as +N after visible avatars. */
    overflowCount: {
      type: Number,
      default: 0
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-avatar-group",
        oe[this.size] || oe.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, xi = ["aria-label"], Si = {
  key: 0,
  class: "ui-avatar-group-overflow"
};
function Ci(e, r, i, s, n, t) {
  return a(), l("div", {
    class: _(t.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    i.overflowCount > 0 ? (a(), l("span", Si, m(t.overflowText), 1)) : f("", !0)
  ], 10, xi);
}
const Ti = /* @__PURE__ */ k(wi, [["render", Ci]]), Li = B, Ii = {
  name: "Checkbox",
  inject: {
    uiCheckboxGroup: {
      default: null
    }
  },
  props: {
    /** Grup modunda seçenek kimliği. */
    value: {
      type: [String, Number, Boolean],
      default: void 0
    },
    /** Tekil mod: `v-model` boolean. */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında satırları eşit iç boşluklu kutu yapar; işaretli satır dolgu ile vurgulanır (kenarlık yok). */
    highlight: {
      type: Boolean,
      default: !1
    },
    /** Kutu ölçüsü: sm 16px · md 18px · lg 22px (dokunmatik satır) */
    size: {
      type: String,
      default: "md",
      validator: (e) => Li.includes(e)
    },
    /**
     * Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde
     * (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır.
     */
    presentational: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null;
    },
    isChecked() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue;
        return Array.isArray(e) ? e.some((r) => Object.is(r, this.value)) : !1;
      }
      return !!this.modelValue;
    },
    nativeType() {
      return "checkbox";
    },
    nativeName() {
      return this.inGroup ? this.uiCheckboxGroup.groupName : void 0;
    },
    groupValueString() {
      if (this.inGroup)
        return String(this.value);
    },
    checkboxClasses() {
      return [
        "ui-checkbox",
        `ui-checkbox--${this.inGroup && this.uiCheckboxGroup != null ? this.uiCheckboxGroup.normalizedVariant : "list"}`,
        this.size !== "md" ? `ui-checkbox--${this.size}` : "",
        {
          "ui-checkbox--checked": this.isChecked,
          "ui-checkbox--highlight": this.highlight,
          "ui-checkbox--presentational": this.presentational
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const r = e.target.checked, i = this.uiCheckboxGroup.modelValue, s = Array.isArray(i) ? [...i] : [], n = s.findIndex((t) => Object.is(t, this.value));
        r && n === -1 ? s.push(this.value) : !r && n !== -1 && s.splice(n, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, r = Array.isArray(e) ? [...e] : [], i = r.findIndex((s) => Object.is(s, this.value));
        i === -1 ? r.push(this.value) : r.splice(i, 1), this.uiCheckboxGroup.$emit("update:modelValue", r);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Ai = ["type", "name", "value", "checked", "tabindex", "aria-hidden"], zi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Mi = {
  key: 0,
  class: "ui-checkbox-body"
}, Pi = {
  key: 0,
  class: "ui-checkbox-label"
}, Ei = {
  key: 1,
  class: "ui-checkbox-description"
};
function Di(e, r, i, s, n, t) {
  const u = v("ui-icon");
  return a(), l("label", {
    class: _(t.checkboxClasses),
    onKeydown: [
      r[1] || (r[1] = j(D((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["enter"])),
      r[2] || (r[2] = j(D((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: t.nativeType,
      name: t.nativeName,
      value: t.groupValueString,
      checked: t.isChecked,
      tabindex: i.presentational ? -1 : void 0,
      "aria-hidden": i.presentational ? "true" : void 0,
      class: "sr-only",
      onChange: r[0] || (r[0] = (...d) => t.onNativeChange && t.onNativeChange(...d))
    }, null, 40, Ai),
    c("span", zi, [
      t.isChecked ? (a(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    i.presentational ? f("", !0) : (a(), l("span", Mi, [
      e.$slots.label || i.label ? (a(), l("span", Pi, [
        g(e.$slots, "label", {}, () => [
          T(m(i.label), 1)
        ])
      ])) : f("", !0),
      i.description ? (a(), l("span", Ei, m(i.description), 1)) : f("", !0)
    ]))
  ], 34);
}
const Oi = /* @__PURE__ */ k(Ii, [["render", Di]]), Vi = ["list", "button"], Ri = ["vertical", "horizontal"], Bi = $("ui-checkbox-group"), Fi = {
  name: "CheckboxGroup",
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => []
    },
    /** `list` — dikey liste; `button` — kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Vi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Ri.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: Bi() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : "vertical";
    },
    rootClass() {
      return S(
        "ui-checkbox-group",
        `ui-checkbox-group--${this.normalizedVariant}`,
        this.normalizedVariant === "button" && this.effectiveOrientation === "vertical" ? "ui-checkbox-group--vertical" : ""
      );
    }
  },
  provide() {
    return {
      uiCheckboxGroup: this
    };
  }
}, Ni = ["aria-label"];
function $i(e, r, i, s, n, t) {
  return a(), l("div", {
    class: _(t.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, Ni);
}
const Hi = /* @__PURE__ */ k(Fi, [["render", $i]]), Ui = B, Wi = {
  name: "ChipGroup",
  inheritAttrs: !1,
  props: {
    /** Tek seçimde değer, `multiple` ile dizi */
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    /** `{ value, label, icon?, disabled?, ariaLabel?, ariaCurrent? }[]` (`ariaCurrent`: ör. `'date'` bugünkü birim) */
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    /** Tek seçimde seçili çipe tekrar basınca seçimi kaldırır */
    clearable: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => Ui.includes(e)
    },
    /** Tek satırda yatay kaydırma (dar ekran); `false` iken alt satıra kayar */
    scrollable: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      focusIndex: 0
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-chip-group",
        this.scrollable ? "ui-chip-group--scrollable" : "ui-chip-group--wrap",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    },
    normalizedOptions() {
      return (this.options || []).map(
        (e) => e && typeof e == "object" ? e : { value: e, label: String(e) }
      );
    },
    selectedValues() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue == null ? [] : [this.modelValue];
    }
  },
  watch: {
    normalizedOptions: {
      immediate: !0,
      handler() {
        this.syncFocusIndex();
      }
    },
    modelValue() {
      this.syncFocusIndex();
    }
  },
  methods: {
    optionKey(e, r) {
      return e.value == null ? `__${r}` : String(e.value);
    },
    isSelected(e) {
      return this.selectedValues.some((r) => r === e.value);
    },
    syncFocusIndex() {
      const e = this.normalizedOptions.findIndex((i) => this.isSelected(i));
      if (e >= 0) {
        this.focusIndex = e;
        return;
      }
      const r = this.normalizedOptions.findIndex((i) => !i.disabled);
      this.focusIndex = r >= 0 ? r : 0;
    },
    emitValue(e) {
      this.$emit("update:modelValue", e), this.$emit("change", e);
    },
    toggle(e) {
      if (!(this.disabled || e.disabled)) {
        if (this.multiple) {
          const r = this.selectedValues, i = this.isSelected(e) ? r.filter((s) => s !== e.value) : [...r, e.value];
          this.emitValue(i);
          return;
        }
        if (this.isSelected(e)) {
          this.clearable && this.emitValue(null);
          return;
        }
        this.emitValue(e.value);
      }
    },
    chipElements() {
      var e;
      return Array.from(((e = this.$refs.root) == null ? void 0 : e.querySelectorAll("[data-ui-chip]")) || []);
    },
    onKeydown(e) {
      var d;
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
      const i = this.normalizedOptions, s = i.map((o, h) => o.disabled || this.disabled ? -1 : h).filter((o) => o >= 0);
      if (!s.length) return;
      e.preventDefault();
      const n = Math.max(0, s.indexOf(this.focusIndex));
      let t = n;
      e.key === "Home" ? t = 0 : e.key === "End" ? t = s.length - 1 : e.key === "ArrowRight" || e.key === "ArrowDown" ? t = (n + 1) % s.length : t = (n - 1 + s.length) % s.length;
      const u = s[t];
      this.focusIndex = u, (d = this.chipElements()[u]) == null || d.focus(), this.multiple || this.toggle(i[u]);
    }
  }
}, Yi = ["role", "aria-label"];
function Gi(e, r, i, s, n, t) {
  const u = v("ui-button");
  return a(), l("div", L({
    ref: "root",
    class: t.rootClass,
    role: i.multiple ? "group" : "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs, {
    onKeydown: r[0] || (r[0] = (...d) => t.onKeydown && t.onKeydown(...d))
  }), [
    (a(!0), l(I, null, P(t.normalizedOptions, (d, o) => (a(), b(u, {
      key: t.optionKey(d, o),
      type: "button",
      size: i.size,
      rounded: "",
      variant: t.isSelected(d) ? "solid" : "outline",
      color: t.isSelected(d) ? "primary" : "secondary",
      "prefix-icon": d.icon || void 0,
      disabled: i.disabled || d.disabled,
      role: i.multiple ? void 0 : "radio",
      "aria-checked": i.multiple ? void 0 : t.isSelected(d) ? "true" : "false",
      "aria-pressed": i.multiple ? t.isSelected(d) ? "true" : "false" : void 0,
      "aria-label": d.ariaLabel || void 0,
      "aria-current": d.ariaCurrent || void 0,
      tabindex: o === n.focusIndex ? 0 : -1,
      "data-ui-chip": "",
      onClick: (h) => t.toggle(d),
      onFocus: (h) => n.focusIndex = o
    }, {
      default: y(() => [
        g(e.$slots, "option", {
          option: d,
          selected: t.isSelected(d)
        }, () => [
          T(m(d.label), 1)
        ])
      ]),
      _: 2
    }, 1032, ["size", "variant", "color", "prefix-icon", "disabled", "role", "aria-checked", "aria-pressed", "aria-label", "aria-current", "tabindex", "onClick", "onFocus"]))), 128))
  ], 16, Yi);
}
const qi = /* @__PURE__ */ k(Wi, [["render", Gi]]), Ki = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#1B5CFF",
  "#fb7185",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#b91c1c",
  "#c2410c",
  "#b45309",
  "#4d7c0f",
  "#15803d",
  "#047857",
  "#0f766e",
  "#0e7490",
  "#0369a1",
  "#1d4ed8",
  "#4338ca",
  "#6d28d9",
  "#7e22ce",
  "#a21caf",
  "#be185d",
  "#fafafa",
  "#e4e4e7",
  "#d4d4d8",
  "#a1a1aa",
  "#71717a",
  "#52525b",
  "#3f3f46",
  "#27272a"
], ji = {
  name: "ColorPicker",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    triggerPlaceholder: {
      type: String,
      default: ""
    },
    popoverTitle: {
      type: String,
      default: ""
    },
    clearLabel: {
      type: String,
      default: ""
    },
    customColorLabel: {
      type: String,
      default: ""
    },
    /**
     * Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`.
     */
    block: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      presetColors: Ki
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-color-picker min-w-0",
        this.block ? "ui-color-picker--block w-full" : "ui-color-picker--inline w-auto",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localColor: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder ? this.triggerPlaceholder : M(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : M(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : M(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : M(this, "ui.colorPicker.customHex", "Custom color (hex)");
    }
  },
  methods: {
    selectColor(e) {
      this.localColor = e;
    },
    clearColor() {
      this.localColor = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    },
    normalizeHex() {
      const e = String(this.localColor || "").trim();
      if (!e) return;
      let r = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(r) && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), /^#[0-9A-Fa-f]{6}$/.test(r) && (this.localColor = r.toUpperCase());
    }
  }
}, Zi = ["disabled", "aria-expanded", "onClick"], Xi = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Qi = { class: "ui-select-field-suffix" }, Ji = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, er = { class: "ui-color-picker-panel" }, tr = { class: "ui-color-picker-panel__header" }, ir = { class: "ui-color-picker-panel__title" }, rr = { class: "ui-color-picker-swatches" }, ar = ["title", "onClick"], sr = { class: "ui-color-picker-custom" }, nr = { class: "ui-color-picker-panel__title" }, lr = { class: "ui-color-picker-custom__row" };
function or(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("ui-input"), h = v("ui-popover");
  return a(), l("div", {
    class: _(t.rootClass)
  }, [
    w(h, {
      open: n.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => n.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: y(({ open: p, toggle: x, close: A }) => [
        g(e.$slots, "trigger", {
          open: p,
          toggle: x,
          close: A
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: x
          }, [
            c("span", Xi, [
              t.localColor ? (a(), l("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: t.localColor })
              }, null, 4)) : (a(), b(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            c("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !t.localColor }])
            }, m(t.displayValue), 3),
            c("span", Qi, [
              c("span", Ji, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Zi)
        ])
      ]),
      content: y(() => [
        c("div", er, [
          c("div", tr, [
            c("span", ir, m(t.popoverTitleLabel), 1),
            t.localColor ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: D(t.clearColor, ["stop"])
            }, {
              default: y(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", rr, [
            (a(!0), l(I, null, P(n.presetColors, (p) => (a(), l("button", {
              key: p,
              type: "button",
              class: _(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": t.localColor === p }]),
              style: E({ backgroundColor: p }),
              title: p,
              onClick: (x) => t.selectColor(p)
            }, [
              t.localColor === p ? (a(), b(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, ar))), 128))
          ]),
          c("div", sr, [
            c("span", nr, m(t.customColorLabelText), 1),
            c("div", lr, [
              w(o, {
                modelValue: t.localColor,
                "onUpdate:modelValue": r[0] || (r[0] = (p) => t.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: t.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: E({ backgroundColor: t.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["open", "match-trigger-width", "disabled"])
  ], 2);
}
const ur = /* @__PURE__ */ k(ji, [["render", or]]), ke = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, G = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function le(e, r = "TRY") {
  if (e == null || String(e).trim() === "")
    return r in G ? r : "TRY";
  const i = String(e).trim();
  if (ke[i])
    return ke[i];
  const s = i.toUpperCase();
  return G[s] ? s : r in G ? r : "TRY";
}
function We(e) {
  var i;
  const r = le(e);
  if (G[r])
    return G[r];
  try {
    const n = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: r,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((t) => t.type === "currency");
    return ((i = n == null ? void 0 : n.value) == null ? void 0 : i.trim()) || r;
  } catch {
    return r;
  }
}
function dd(e, r, i = "tr-TR") {
  const s = Number(e) || 0, n = le(r);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: n }).format(s);
  } catch {
    return `${We(n)}${s.toFixed(2)}`;
  }
}
function Ye(e) {
  let r = String(e ?? "").replace(",", ".");
  r = r.replace(/[^\d.]/g, "");
  const i = r.indexOf(".");
  if (i !== -1) {
    const s = r.slice(0, i), n = r.slice(i + 1).replace(/\./g, "");
    r = `${s}.${n}`;
  }
  return r;
}
function Ge(e = "tr-TR") {
  var r, i;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((r = s.find((n) => n.type === "group")) == null ? void 0 : r.value) || ".",
      decimal: ((i = s.find((n) => n.type === "decimal")) == null ? void 0 : i.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function dr(e, r = "tr-TR") {
  const { group: i, decimal: s } = Ge(r);
  let n = String(e ?? "").trim();
  return n ? (n = n.split(i).join(""), n = n.split(s).join("."), Ye(n)) : "";
}
function cr(e, r = "tr-TR") {
  const i = Ye(e);
  if (!i) return "";
  const { group: s, decimal: n } = Ge(r), [t = "", u] = i.split("."), o = (t.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return u === void 0 ? o : `${o}${n}${u}`;
}
const hr = $("ui-currency-input"), fr = B, mr = {
  name: "CurrencyInput",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). */
    currency: {
      type: String,
      default: "TRY"
    },
    /** Binlik ve ondalık ayırıcılarını belirleyen BCP 47 locale. */
    locale: {
      type: String,
      default: "tr-TR"
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || fr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return { fallbackId: hr() };
  },
  computed: {
    displaySymbol() {
      return We(this.currency);
    },
    resolvedCurrencyCode() {
      return le(this.currency);
    },
    innerValue: {
      get() {
        return cr(this.modelValue, this.locale);
      },
      set(e) {
        const r = dr(e, this.locale);
        this.$emit("update:modelValue", r);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "value",
        "id",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "currency",
        "locale",
        "size"
      ]), r = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
      return r;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, pr = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function gr(e, r, i, s, n, t) {
  const u = v("ui-input");
  return a(), b(u, L({
    id: t.resolvedId,
    modelValue: t.innerValue,
    "onUpdate:modelValue": r[0] || (r[0] = (d) => t.innerValue = d),
    type: "text",
    inputmode: "decimal",
    size: i.size,
    disabled: i.disabled,
    readonly: i.readonly,
    placeholder: i.placeholder,
    name: i.name,
    autocomplete: i.autocomplete,
    "aria-describedby": i.ariaDescribedby
  }, t.passthroughAttrs, {
    onFocus: r[1] || (r[1] = (d) => e.$emit("focus", d)),
    onBlur: t.onBlur
  }), {
    prepend: y(() => [
      c("span", pr, m(t.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const qe = /* @__PURE__ */ k(mr, [["render", gr]]), yr = $("ui-daterangepicker");
function q(e) {
  return String(e).padStart(2, "0");
}
function F(e) {
  return `${e.getFullYear()}-${q(e.getMonth() + 1)}-${q(e.getDate())}`;
}
function Q(e) {
  if (e == null || e === "") return null;
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return null;
  const i = Number(r[1]), s = Number(r[2]) - 1, n = Number(r[3]), t = new Date(i, s, n);
  return t.getFullYear() !== i || t.getMonth() !== s || t.getDate() !== n ? null : t;
}
function N(e, r) {
  return e === r ? 0 : e < r ? -1 : 1;
}
function J(e, r, i) {
  return new Date(e, r, 1).toLocaleString(i, { month: "long" });
}
function br(e, r, i) {
  const { year: s, month: n, day: t } = parseIsoParts(e), d = new Date(s, n - 1, t).getDay(), o = d === 0 ? -6 : 1 - d, h = new Date(s, n - 1, t + o), p = F(h), x = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let A = F(x);
  if (r && A > r && (A = r), i && p < i && A < i) return null;
  let C = p;
  return i && C < i && (C = i), N(C, A) > 0 ? null : [C, A];
}
function vr(e, r, i) {
  const { year: s } = parseIsoParts(e), n = `${s}-01-01`;
  let t = `${s}-12-31`;
  if (r && t > r && (t = r), i && n < i && t < i) return null;
  let u = n;
  return i && u < i && (u = i), N(u, t) > 0 ? null : [u, t];
}
function we(e, r, i, s) {
  const n = `${e}-${q(r + 1)}-01`, t = new Date(e, r + 1, 0).getDate();
  let u = `${e}-${q(r + 1)}-${q(t)}`;
  if (i && u > i && (u = i), s && n < s && u < s) return null;
  let d = n;
  return s && d < s && (d = s), N(d, u) > 0 ? null : [d, u];
}
const _r = {
  name: "DateRangePicker",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    /** `[startYmd, endYmd]` */
    modelValue: {
      type: Array,
      default: () => ["", ""]
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    min: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: ""
    },
    /**
     * Hızlı aralık listesi. Verilmezse varsayılan set kullanılır.
     * @type {Array<{ key: string, label: string, range: [string, string] | null }>}
     */
    presets: {
      type: Array,
      default: void 0
    },
    /** Kontrollü aç/kapa (`undefined` = dahili state). */
    open: {
      type: Boolean,
      default: void 0
    },
    /**
     * `false`: tetikleyici çizilmez; panel `anchor` öğesine göre `v-model:open` ile açılır
     * (ör. bir seçim çipindeki “Özel aralık”).
     */
    showTrigger: {
      type: Boolean,
      default: !0
    },
    /** Konum referansı (HTMLElement, bileşen örneği veya CSS seçici) — `ui-popover` `anchor` */
    anchor: {
      type: [String, Object],
      default: null
    }
  },
  emits: ["update:modelValue", "change", "update:open"],
  data() {
    var i, s;
    const e = ((i = this.modelValue) == null ? void 0 : i[0]) || "", r = Q(e) || Q((s = this.modelValue) == null ? void 0 : s[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: yr(),
      menuOpen: !1,
      viewYear: r.getFullYear(),
      viewMonth: r.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Re() : !1
    };
  },
  mounted() {
    typeof window > "u" || (this._viewportMq = window.matchMedia(Qe), this._onViewportMq = () => {
      this.narrowViewport = this._viewportMq.matches;
    }, this._onViewportMq(), typeof this._viewportMq.addEventListener == "function" ? this._viewportMq.addEventListener("change", this._onViewportMq) : typeof this._viewportMq.addListener == "function" && this._viewportMq.addListener(this._onViewportMq));
  },
  beforeUnmount() {
    !this._viewportMq || !this._onViewportMq || (typeof this._viewportMq.removeEventListener == "function" ? this._viewportMq.removeEventListener("change", this._onViewportMq) : typeof this._viewportMq.removeListener == "function" && this._viewportMq.removeListener(this._onViewportMq));
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedOpen: {
      get() {
        return this.open !== void 0 ? this.open : this.menuOpen;
      },
      set(e) {
        const r = !!e;
        this.open !== void 0 ? this.$emit("update:open", r) : this.menuOpen = r;
      }
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return Xe((e = this.$i18n) == null ? void 0 : e.locale);
    },
    startYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[0]) || "").trim();
    },
    endYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[1]) || "").trim();
    },
    resolvedPlaceholder() {
      return this.placeholder ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.placeholder") : "Select date range";
    },
    displayText() {
      return !this.startYmd && !this.endYmd ? this.resolvedPlaceholder : this.formatDisplay(this.startYmd, this.endYmd);
    },
    rightView() {
      const e = new Date(this.viewYear, this.viewMonth + 1, 1);
      return { year: e.getFullYear(), month: e.getMonth() };
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    maxYmd() {
      return this.max ? String(this.max).trim() : "";
    },
    resolvedPrevMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.prevMonth") : "Previous month";
    },
    resolvedNextMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.nextMonth") : "Next month";
    },
    resolvedQuickAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.quickAria") : "Quick range presets";
    },
    rangeHint() {
      return !this.pickingStart || this.pickingEnd ? "" : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.selectEnd") : "Select end date";
    },
    previewStart() {
      return this.pickingStart || this.startYmd;
    },
    previewEnd() {
      if (this.pickingEnd) return this.pickingEnd;
      if (this.pickingStart && this.hoverYmd) {
        const e = this.pickingStart, r = this.hoverYmd;
        return N(e, r) <= 0 ? r : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      if (Array.isArray(this.presets))
        return this.presets.map((C) => ({
          ...C,
          disabled: !C.range || this.isRangeDisabled(C.range[0], C.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), r = F(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const s = F(i), n = new Date(e);
      n.setDate(n.getDate() + 1);
      const t = F(n), u = e.getMonth(), d = e.getFullYear(), o = new Date(d, u - 1, 1), h = o.getFullYear(), p = o.getMonth(), x = (C, z) => typeof this.$t == "function" ? this.$t(C, z) : C;
      return [
        {
          key: "today",
          label: x("ui.dateRangePicker.today"),
          range: [r, r]
        },
        {
          key: "yesterday",
          label: x("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "tomorrow",
          label: x("ui.datePicker.tomorrow"),
          range: [t, t]
        },
        {
          key: "thisWeek",
          label: x("ui.dateRangePicker.thisWeek"),
          range: br(r, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: x("ui.dateRangePicker.thisMonth", {
            month: J(d, u, this.locale)
          }),
          range: we(d, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: x("ui.dateRangePicker.lastMonth", {
            month: J(h, p, this.locale)
          }),
          range: we(h, p, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: x("ui.dateRangePicker.thisYear", { year: d }),
          range: vr(r, this.maxYmd, this.minYmd)
        }
      ].map((C) => ({
        ...C,
        disabled: !C.range || this.isRangeDisabled(C.range[0], C.range[1])
      }));
    },
    calendarPanes() {
      if (this.narrowViewport)
        return [
          {
            key: "single",
            year: this.viewYear,
            month: this.viewMonth,
            showPrev: !0,
            showNext: !0,
            title: J(this.viewYear, this.viewMonth, this.locale),
            cells: this.buildCellsForMonth(this.viewYear, this.viewMonth)
          }
        ];
      const e = {
        key: "left",
        year: this.viewYear,
        month: this.viewMonth,
        showPrev: !0,
        showNext: !1
      }, r = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, r].map((i) => ({
        ...i,
        title: J(i.year, i.month, this.locale),
        cells: this.buildCellsForMonth(i.year, i.month)
      }));
    }
  },
  watch: {
    modelValue: {
      deep: !0,
      handler() {
        this.syncViewFromValue(), this.resolvedOpen || (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
      }
    },
    resolvedOpen(e) {
      e ? (this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.syncViewFromValue()) : (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
    }
  },
  methods: {
    syncViewFromValue() {
      const e = Q(this.startYmd) || Q(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, r) {
      const i = Ve(this.uiDefaults, void 0, "dateRangeFormat"), s = (n) => n ? Je(n, this.locale, i) || n : "…";
      return !e && !r ? this.resolvedPlaceholder : e === r || !r ? s(e || r) : `${s(e)} – ${s(r)}`;
    },
    shiftMonth(e) {
      const r = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth();
    },
    isRangeDisabled(e, r) {
      return !!(!e || !r || this.minYmd && r < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, r) {
      const i = new Date(e, r, 1), s = new Date(e, r, 1 - i.getDay()), n = this.previewStart, t = this.previewEnd, u = n && t, d = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + o), p = h.getMonth() === r && h.getFullYear() === e, x = h.getDate(), A = F(h), C = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${r}`, z = F(/* @__PURE__ */ new Date()) === A, V = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let pe = !1, ge = !1;
        if (u) {
          const ye = N(n, t) <= 0 ? n : t, be = N(n, t) <= 0 ? t : n;
          pe = N(A, ye) >= 0 && N(A, be) <= 0, ge = A === ye || A === be;
        }
        d.push({
          key: C,
          d: x,
          date: h,
          today: z,
          inMonth: p,
          disabled: V,
          inRange: pe,
          endpoint: ge
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = F(e.date));
    },
    applyQuick(e, r) {
      if (e.disabled || !e.range) return;
      const [i, s] = e.range;
      this.pickingStart = i, this.pickingEnd = s, this.$emit("update:modelValue", [i, s]), this.$emit("change", [i, s]), r();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [r, i] = e.range;
      return this.startYmd === r && this.endYmd === i;
    },
    pick(e, r) {
      if (!e.date || e.disabled) return;
      const i = F(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, n = i;
      if (N(n, s) < 0) {
        const t = s;
        s = n, n = t;
      }
      this.pickingStart = s, this.pickingEnd = n, this.$emit("update:modelValue", [s, n]), this.$emit("change", [s, n]), r();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, kr = { class: "min-w-0 flex-1 truncate text-foreground" }, wr = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, xr = { class: "ui-daterangepicker-layout" }, Sr = ["aria-label"], Cr = { class: "ui-daterangepicker-calendars" }, Tr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Lr = { class: "ui-daterangepicker-month-row" }, Ir = { class: "mb-2 flex items-center justify-between gap-2" }, Ar = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, zr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Mr = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Pr = { class: "ui-datepicker-grid" };
function Er(e, r, i, s, n, t) {
  const u = v("ui-button"), d = v("ui-popover");
  return a(), l("div", {
    class: _(["ui-daterangepicker", i.showTrigger ? "" : "ui-daterangepicker--headless", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: t.resolvedOpen,
      "onUpdate:open": r[2] || (r[2] = (o) => t.resolvedOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: i.disabled,
      anchor: i.anchor,
      "inherit-layout": !i.showTrigger
    }, {
      trigger: y(({ open: o, toggle: h, close: p }) => [
        i.showTrigger ? g(e.$slots, "trigger", {
          key: 0,
          open: o,
          toggle: h,
          close: p
        }, () => [
          w(u, {
            type: "button",
            id: t.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              c("span", kr, m(t.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ]) : f("", !0)
      ]),
      content: y(({ close: o }) => [
        c("div", wr, [
          c("div", xr, [
            t.quickPresets.length ? (a(), l("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": t.resolvedQuickAriaLabel
            }, [
              (a(!0), l(I, null, P(t.quickPresets, (h) => (a(), b(u, {
                key: h.key,
                type: "button",
                variant: t.isPresetActive(h) ? "solid" : "outline",
                color: t.isPresetActive(h) ? "primary" : "secondary",
                size: "sm",
                rounded: "",
                disabled: h.disabled,
                "aria-pressed": t.isPresetActive(h) ? "true" : "false",
                "data-active": t.isPresetActive(h) ? "true" : void 0,
                onClick: (p) => t.applyQuick(h, o)
              }, {
                default: y(() => [
                  T(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))), 128))
            ], 8, Sr)) : f("", !0),
            c("div", Cr, [
              t.rangeHint ? (a(), l("p", Tr, m(t.rangeHint), 1)) : f("", !0),
              c("div", Lr, [
                (a(!0), l(I, null, P(t.calendarPanes, (h) => (a(), l("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", Ir, [
                    h.showPrev ? (a(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": t.resolvedPrevMonthLabel,
                      onClick: r[0] || (r[0] = D((p) => t.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", Ar)),
                    c("span", zr, m(h.title), 1),
                    h.showNext ? (a(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": t.resolvedNextMonthLabel,
                      onClick: r[1] || (r[1] = D((p) => t.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", Mr))
                  ]),
                  r[3] || (r[3] = c("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    c("span", null, "Su"),
                    c("span", null, "Mo"),
                    c("span", null, "Tu"),
                    c("span", null, "We"),
                    c("span", null, "Th"),
                    c("span", null, "Fr"),
                    c("span", null, "Sa")
                  ], -1)),
                  c("div", Pr, [
                    (a(!0), l(I, null, P(h.cells, (p) => (a(), b(u, {
                      key: p.key,
                      variant: t.dayVariant(p),
                      color: t.dayColor(p),
                      size: "sm",
                      cubed: "",
                      disabled: p.disabled,
                      "aria-selected": p.endpoint ? "true" : "false",
                      "aria-disabled": p.disabled ? "true" : void 0,
                      "data-outside": p.inMonth ? void 0 : "true",
                      "data-today": p.today ? "true" : void 0,
                      "data-in-range": p.inRange && !p.endpoint ? "true" : void 0,
                      "data-range-endpoint": p.endpoint ? "true" : void 0,
                      onMouseenter: (x) => t.onCellHover(p),
                      onClick: (x) => t.pick(p, o)
                    }, {
                      default: y(() => [
                        T(m(p.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
                  ])
                ]))), 128))
              ])
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled", "anchor", "inherit-layout"])
  ], 2);
}
const Dr = /* @__PURE__ */ k(_r, [["render", Er]]), Or = {
  name: "Field",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: !1
    },
    /** Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. */
    fill: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: H,
    /**
     * Başlık ikonu rengi: ortak `color` kümesi (`primary` | `secondary` | `success` | `warning` | `danger` | `info`) veya `muted` | ''.
     * Boş / muted → varsayılan muted-foreground.
     */
    iconTone: {
      type: String,
      default: "",
      validator: (e) => !e || ["primary", "secondary", "success", "warning", "danger", "info", "muted"].includes(e)
    }
  },
  computed: {
    ...ne(),
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    },
    hasValue() {
      return !!this.$slots.default;
    },
    showIcon() {
      return !!this.icon;
    },
    titleIconClass() {
      const e = this.iconTone || "muted";
      return S("ui-field__title-icon", `ui-field__title-icon--${e}`);
    },
    rootClass() {
      return S(
        "ui-field",
        this.card && "ui-field--card",
        this.fill && "h-full min-h-0 flex flex-col",
        this.$attrs.class
      );
    }
  }
}, Vr = {
  key: 0,
  class: "ui-field__title-row"
}, Rr = {
  key: 1,
  class: "ui-field__title"
}, Br = {
  key: 2,
  class: "ui-field__subtitle"
};
function Fr(e, r, i, s, n, t) {
  const u = v("ui-icon");
  return a(), l("div", L({ class: t.rootClass }, t.passthroughAttrs), [
    i.title || t.showIcon ? (a(), l("div", Vr, [
      t.showIcon ? (a(), l("span", {
        key: 0,
        class: _(t.titleIconClass),
        "aria-hidden": "true"
      }, [
        w(u, {
          name: i.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ], 2)) : f("", !0),
      i.title ? (a(), l("span", Rr, m(i.title), 1)) : f("", !0)
    ])) : f("", !0),
    t.hasValue ? (a(), l("div", {
      key: 1,
      class: _(["ui-field__value", i.fill ? "mt-auto" : void 0])
    }, [
      g(e.$slots, "default")
    ], 2)) : f("", !0),
    i.subtitle ? (a(), l("p", Br, m(i.subtitle), 1)) : f("", !0)
  ], 16);
}
const Nr = /* @__PURE__ */ k(Or, [["render", Fr]]), $r = ["popover", "dialog"], Hr = B, Ur = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Wr = {
  name: "FieldAction",
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: void 0
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Boş değerde tetikleyici metni (örn. “Tarih ekle”). */
    actionName: {
      type: String,
      default: ""
    },
    /** `popover` | `dialog` */
    mode: {
      type: String,
      default: "popover",
      validator: (e) => $r.includes(e)
    },
    /** Seçili değerin görünen metni; doluysa tetikleyicide `actionName` yerine gösterilir. */
    value: {
      type: [String, Number],
      default: ""
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    /** Yalnız ikon tetikleyici (kübik düğme). */
    iconOnly: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => Hr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Ur.includes(e)
    },
    popoverWidth: {
      type: [String, Number],
      default: void 0
    },
    mobileCentered: {
      type: Boolean,
      default: !0
    },
    maxWidth: {
      type: String,
      default: "sm"
    },
    dialogIcon: {
      type: String,
      default: null
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    clearLabel: {
      type: String,
      default: null
    },
    doneLabel: {
      type: String,
      default: null
    },
    /** Dialog modunda alt çubuğu göster (varsayılan: true). */
    showFooter: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:open", "clear"],
  data() {
    return {
      uncontrolledOpen: !1
    };
  },
  computed: {
    isPopover() {
      return this.mode === "popover";
    },
    isControlled() {
      return this.open !== void 0;
    },
    resolvedOpen: {
      get() {
        return this.isControlled ? !!this.open : this.uncontrolledOpen;
      },
      set(e) {
        const r = !!e;
        this.isControlled || (this.uncontrolledOpen = r), this.$emit("update:open", r);
      }
    },
    hasValue() {
      return this.value == null ? !1 : String(this.value).trim() !== "";
    },
    triggerLabel() {
      return this.hasValue ? String(this.value) : this.actionName || this.title || "";
    },
    triggerAriaLabel() {
      return this.title ? this.title : this.triggerLabel || this.actionName || "Field action";
    },
    triggerVariant() {
      return this.hasValue || this.resolvedOpen ? "muted" : "solid";
    },
    triggerColor() {
      return this.hasValue || this.resolvedOpen ? "primary" : "secondary";
    },
    /** AppDataFilterChip ile aynı: doluyken tetikleyicide xmark. */
    showTriggerClear() {
      return this.clearable && this.hasValue && !this.iconOnly;
    },
    triggerSuffixIcon() {
      return this.showTriggerClear ? "xmark" : this.suffixIcon;
    },
    showPopoverHeader() {
      return !!(this.$slots.header || this.title || this.description || this.iconOnly && this.clearable && this.hasValue);
    },
    showDialogFooter() {
      return this.showFooter || !!this.$slots.footer;
    },
    resolvedClearLabel() {
      return this.clearLabel != null && this.clearLabel !== "" ? this.clearLabel : M(this, "ui.fieldAction.clear", "Clear");
    },
    resolvedDoneLabel() {
      return this.doneLabel != null && this.doneLabel !== "" ? this.doneLabel : M(this, "ui.fieldAction.done", "Done");
    }
  },
  methods: {
    toggle() {
      this.disabled || (this.resolvedOpen = !this.resolvedOpen);
    },
    close() {
      this.resolvedOpen = !1;
    },
    onTriggerClick(e, r) {
      typeof r == "function" ? r() : this.toggle();
    },
    /** Chip üzerindeki xmark temizler; geri kalan alan paneli açar. */
    onLabeledTriggerClick(e, r) {
      var i, s;
      if (this.showTriggerClear && ((s = (i = e == null ? void 0 : e.target) == null ? void 0 : i.closest) != null && s.call(i, '.fa-xmark, [data-icon="xmark"]'))) {
        e.preventDefault(), e.stopPropagation(), this.onClear(this.close);
        return;
      }
      this.onTriggerClick(e, r);
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, Yr = { class: "ui-field-action-header" }, Gr = { class: "ui-field-action-header__text" }, qr = {
  key: 0,
  class: "ui-field-action-header__title"
}, Kr = {
  key: 1,
  class: "ui-field-action-header__description"
}, jr = { class: "ui-field-action-body" }, Zr = { class: "ui-field-action-body" }, Xr = { class: "ui-field-action-footer" };
function Qr(e, r, i, s, n, t) {
  const u = v("ui-button"), d = v("ui-popover"), o = v("ui-dialog");
  return a(), l("div", {
    class: _([
      "ui-field-action",
      t.hasValue ? "ui-field-action--filled" : "",
      i.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    t.isPopover ? (a(), b(d, {
      key: 0,
      open: t.resolvedOpen,
      "onUpdate:open": r[0] || (r[0] = (h) => t.resolvedOpen = h),
      placement: i.placement,
      width: i.popoverWidth,
      disabled: i.disabled,
      "mobile-centered": i.mobileCentered
    }, re({
      trigger: y(({ open: h, toggle: p }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: t.close,
          label: t.triggerLabel,
          hasValue: t.hasValue,
          clear: () => t.onClear(t.close)
        }, () => [
          i.iconOnly ? (a(), b(u, {
            key: 0,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: i.size,
            rounded: "",
            cubed: "",
            "prefix-icon": i.prefixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (x) => t.onTriggerClick(x, p)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), b(u, {
            key: 1,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: i.size,
            rounded: "",
            "prefix-icon": i.prefixIcon,
            "suffix-icon": t.triggerSuffixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (x) => t.onLabeledTriggerClick(x, p)
          }, {
            default: y(() => [
              T(m(t.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: y(({ close: h }) => [
        c("div", jr, [
          g(e.$slots, "default", {
            close: h,
            open: t.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      t.showPopoverHeader ? {
        name: "header",
        fn: y(({ close: h }) => [
          g(e.$slots, "header", { close: h }, () => [
            c("div", Yr, [
              c("div", Gr, [
                i.title ? (a(), l("p", qr, m(i.title), 1)) : f("", !0),
                i.description ? (a(), l("p", Kr, m(i.description), 1)) : f("", !0)
              ]),
              i.iconOnly && i.clearable && t.hasValue ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": t.resolvedClearLabel,
                onClick: (p) => t.onClear(h)
              }, null, 8, ["aria-label", "onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: y(({ close: h }) => [
          g(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), l(I, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: t.resolvedOpen,
        toggle: t.toggle,
        close: t.close,
        label: t.triggerLabel,
        hasValue: t.hasValue,
        clear: () => t.onClear(t.close)
      }, () => [
        i.iconOnly ? (a(), b(u, {
          key: 0,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: i.size,
          rounded: "",
          cubed: "",
          "prefix-icon": i.prefixIcon,
          disabled: i.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: r[1] || (r[1] = (h) => t.onTriggerClick(h, t.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), b(u, {
          key: 1,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: i.size,
          rounded: "",
          "prefix-icon": i.prefixIcon,
          "suffix-icon": t.triggerSuffixIcon,
          disabled: i.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: r[2] || (r[2] = (h) => t.onLabeledTriggerClick(h, t.toggle))
        }, {
          default: y(() => [
            T(m(t.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(o, {
        open: t.resolvedOpen,
        "onUpdate:open": r[3] || (r[3] = (h) => t.resolvedOpen = h),
        title: i.title,
        description: i.description,
        icon: i.dialogIcon,
        "max-width": i.maxWidth,
        "close-on-backdrop": i.closeOnBackdrop,
        "close-on-escape": i.closeOnEscape
      }, re({
        default: y(() => [
          c("div", Zr, [
            g(e.$slots, "default", {
              close: t.close,
              open: t.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        t.showDialogFooter ? {
          name: "footer",
          fn: y(() => [
            g(e.$slots, "footer", { close: t.close }, () => [
              c("div", Xr, [
                w(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: t.close
                }, {
                  default: y(() => [
                    T(m(t.resolvedDoneLabel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["open", "title", "description", "icon", "max-width", "close-on-backdrop", "close-on-escape"])
    ], 64))
  ], 2);
}
const Jr = /* @__PURE__ */ k(Wr, [["render", Qr]]), ea = ["auto", "file", "folder"], ta = B, ia = { icon: "folder", color: "text-sky-500" }, ra = { icon: "file-lines", color: "text-muted-foreground" }, aa = {
  pdf: { icon: "file-pdf", color: "text-red-500" },
  doc: { icon: "file-word", color: "text-blue-600" },
  docx: { icon: "file-word", color: "text-blue-600" },
  xls: { icon: "file-excel", color: "text-green-600" },
  xlsx: { icon: "file-excel", color: "text-green-600" },
  csv: { icon: "file-lines", color: "text-emerald-600" },
  ppt: { icon: "file-powerpoint", color: "text-orange-600" },
  pptx: { icon: "file-powerpoint", color: "text-orange-600" },
  png: { icon: "file-image", color: "text-violet-500" },
  jpg: { icon: "file-image", color: "text-violet-500" },
  jpeg: { icon: "file-image", color: "text-violet-500" },
  gif: { icon: "file-image", color: "text-violet-500" },
  webp: { icon: "file-image", color: "text-violet-500" },
  svg: { icon: "file-image", color: "text-orange-500" },
  ico: { icon: "file-image", color: "text-amber-600" },
  mp4: { icon: "file-video", color: "text-purple-600" },
  mov: { icon: "file-video", color: "text-purple-600" },
  webm: { icon: "file-video", color: "text-purple-600" },
  mkv: { icon: "file-video", color: "text-purple-600" },
  mp3: { icon: "file-audio", color: "text-pink-500" },
  wav: { icon: "file-audio", color: "text-pink-500" },
  flac: { icon: "file-audio", color: "text-pink-500" },
  zip: { icon: "file-zipper", color: "text-amber-600" },
  rar: { icon: "file-zipper", color: "text-amber-600" },
  "7z": { icon: "file-zipper", color: "text-amber-600" },
  gz: { icon: "file-zipper", color: "text-amber-600" },
  tar: { icon: "file-zipper", color: "text-amber-600" },
  js: { icon: "file-code", color: "text-yellow-500" },
  mjs: { icon: "file-code", color: "text-yellow-500" },
  ts: { icon: "file-code", color: "text-blue-500" },
  vue: { icon: "file-code", color: "text-green-500" },
  jsx: { icon: "file-code", color: "text-cyan-500" },
  tsx: { icon: "file-code", color: "text-sky-400" },
  json: { icon: "file-code", color: "text-slate-500" },
  yaml: { icon: "file-code", color: "text-slate-500" },
  yml: { icon: "file-code", color: "text-slate-500" },
  html: { icon: "file-code", color: "text-orange-600" },
  htm: { icon: "file-code", color: "text-orange-600" },
  css: { icon: "file-code", color: "text-blue-500" },
  scss: { icon: "file-code", color: "text-pink-600" },
  md: { icon: "file-lines", color: "text-foreground" },
  txt: { icon: "file-lines", color: "text-muted-foreground" },
  rtf: { icon: "file-lines", color: "text-muted-foreground" },
  log: { icon: "file-lines", color: "text-muted-foreground" }
}, xe = {
  sm: {
    shell: "min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5",
    icon: "md",
    iconBoost: "",
    label: "text-[11px] leading-4",
    root: "max-w-[6rem]"
  },
  md: {
    shell: "min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5",
    icon: "lg",
    iconBoost: "",
    label: "text-xs leading-4",
    root: "max-w-[9rem]"
  },
  lg: {
    shell: "min-h-[5.75rem] min-w-[5.75rem] rounded-[1.25rem] px-5 py-5",
    icon: "lg",
    iconBoost: "scale-[1.4]",
    label: "text-sm leading-5",
    root: "max-w-[12rem]"
  }
};
function ae(e) {
  return String(e ?? "").trim();
}
function sa(e) {
  const r = ae(e);
  return /[/\\]\s*$/.test(r);
}
function Ke(e) {
  const r = ae(e).replace(/[/\\]+$/, "");
  if (!r) return "";
  const i = r.split(/[/\\]/);
  return i[i.length - 1] || r;
}
function na(e) {
  const r = Ke(e), i = r.lastIndexOf(".");
  return i <= 0 || i === r.length - 1 ? "" : r.slice(i + 1).toLowerCase();
}
const Se = {
  default: "",
  foreground: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  sky: "text-sky-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-600",
  amber: "text-amber-600",
  violet: "text-violet-500",
  purple: "text-purple-600",
  orange: "text-orange-600",
  pink: "text-pink-500",
  yellow: "text-yellow-500",
  cyan: "text-cyan-500",
  emerald: "text-emerald-600"
}, la = {
  name: "File",
  mixins: [O],
  props: {
    /** Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) */
    name: {
      type: String,
      required: !0
    },
    /** `auto`: sonda `/` veya `\\` → klasör; aksi dosya */
    kind: {
      type: String,
      default: "auto",
      validator: (e) => ea.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => ta.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: H,
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: ""
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: !0
    },
    /** true: yalnızca ikon kabuğu (dışarıda etiket gösteren grid’ler için) */
    hideLabel: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    preset() {
      return xe[this.size] || xe.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : sa(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = ae(this.name);
      return e ? this.basenameOnly ? Ke(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return ae(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return ia;
      const e = na(this.name);
      return aa[e] || ra;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? K(this.uiDefaults, this.iconType) : this.inferredMeta.type || K(this.uiDefaults, void 0);
    },
    resolvedColorClass() {
      return this.color ? Se[this.color] !== void 0 ? Se[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
    },
    iconClasses() {
      const e = this.preset.iconBoost;
      return [this.resolvedColorClass, e].filter(Boolean);
    },
    iconSizeToken() {
      return this.preset.icon;
    },
    shellClasses() {
      return this.preset.shell;
    },
    folderShellClass() {
      return this.resolvedKind === "folder" ? "ui-file-icon-shell--folder" : "";
    },
    labelClass() {
      return this.preset.label;
    },
    rootSizeClass() {
      return this.hideLabel ? "" : this.preset.root;
    }
  }
}, oa = ["aria-label"], ua = ["title"];
function da(e, r, i, s, n, t) {
  const u = v("ui-icon");
  return a(), l("div", {
    class: _(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", t.rootSizeClass]),
    role: "img",
    "aria-label": t.ariaLabel
  }, [
    c("div", {
      class: _(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [t.shellClasses, t.folderShellClass]])
    }, [
      w(u, {
        name: t.resolvedIcon,
        type: t.resolvedIconType,
        size: t.iconSizeToken,
        class: _(t.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    i.hideLabel ? f("", !0) : (a(), l("span", {
      key: 0,
      class: _(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", t.labelClass]),
      "aria-hidden": "true",
      title: t.fullLabel
    }, m(t.displayLabel), 11, ua))
  ], 10, oa);
}
const ca = /* @__PURE__ */ k(la, [["render", da]]), ha = B, fa = ["primary", "secondary", "success", "warning", "danger"], ma = {
  name: "FilterChip",
  props: {
    icon: {
      type: String,
      default: ""
    },
    /** Değer yokken etiket (ör. “Masa seç”) */
    emptyLabel: {
      type: String,
      required: !0
    },
    /** Değer varken etiket */
    valueLabel: {
      type: String,
      default: ""
    },
    empty: {
      type: Boolean,
      default: !1
    },
    /** Bağlı seçici açıkken değer yokken de vurgulu görünür */
    active: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaExpanded: {
      type: [Boolean, String],
      default: void 0
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => ha.includes(e)
    },
    /** Verilirse boş / dolu durum rengi yerine sabit ton kullanılır */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || fa.includes(e)
    }
  },
  emits: ["click", "clear"],
  computed: {
    triggerLabel() {
      return this.empty ? this.emptyLabel : this.valueLabel;
    },
    showClear() {
      return this.clearable && !this.empty;
    },
    buttonColor() {
      return this.color ? this.color : !this.empty || this.active ? "primary" : "secondary";
    },
    buttonVariant() {
      return this.buttonColor === "secondary" ? "solid" : "muted";
    },
    expandedAttr() {
      if (!(this.ariaExpanded === void 0 || this.ariaExpanded === null))
        return this.ariaExpanded === !0 || this.ariaExpanded === "true" ? "true" : this.ariaExpanded === !1 || this.ariaExpanded === "false" ? "false" : String(this.ariaExpanded);
    }
  },
  methods: {
    onClick(e) {
      var r, i;
      if (this.showClear && ((i = (r = e == null ? void 0 : e.target) == null ? void 0 : r.closest) != null && i.call(r, '.ui-button-suffix, [data-icon="xmark"], .fa-xmark'))) {
        e.preventDefault(), e.stopPropagation(), this.$emit("clear", e);
        return;
      }
      this.$emit("click", e);
    },
    onKeydown(e) {
      !this.showClear || this.disabled || (e.key === "Backspace" || e.key === "Delete") && (e.preventDefault(), this.$emit("clear", e));
    }
  }
};
function pa(e, r, i, s, n, t) {
  const u = v("ui-button");
  return a(), b(u, {
    type: "button",
    variant: t.buttonVariant,
    color: t.buttonColor,
    size: i.size,
    rounded: "",
    "prefix-icon": i.icon || void 0,
    "suffix-icon": t.showClear ? "xmark" : void 0,
    disabled: i.disabled,
    "aria-label": i.ariaLabel || t.triggerLabel,
    "aria-expanded": t.expandedAttr,
    "aria-keyshortcuts": t.showClear ? "Backspace Delete" : void 0,
    onClick: t.onClick,
    onKeydown: t.onKeydown
  }, {
    default: y(() => [
      T(m(t.triggerLabel), 1)
    ]),
    _: 1
  }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-label", "aria-expanded", "aria-keyshortcuts", "onClick", "onKeydown"]);
}
const ga = /* @__PURE__ */ k(ma, [["render", pa]]);
function ya(e) {
  const r = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!r.length) return null;
  const i = Math.min(...r.map((u) => u.top)), s = Math.min(...r.map((u) => u.left)), n = Math.max(...r.map((u) => u.right)), t = Math.max(...r.map((u) => u.bottom));
  return {
    top: i,
    left: s,
    right: n,
    bottom: t,
    width: n - s,
    height: t - i,
    x: s,
    y: i,
    toJSON: () => ({})
  };
}
function ce(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const r = e.closest(".ui-form-row");
  return r instanceof HTMLElement ? r : e;
}
function Ce(e) {
  const r = ce(e);
  if (!r) return null;
  if (r.classList.contains("ui-form-row")) {
    const i = [
      r.querySelector(".ui-form-row-text"),
      r.querySelector(".ui-form-row-control")
    ].filter((n) => n instanceof HTMLElement), s = ya(i.map((n) => n.getBoundingClientRect()));
    if (s) return s;
  }
  return r.getBoundingClientRect();
}
function ba(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const r = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && r.push(s);
  return r;
}
const va = ["dialog", "popover", "card", "tour"], _a = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "top",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], ka = ["sm", "md", "lg", "xl", "2xl", "full"], R = 12, wa = 8, xa = {
  name: "Guidance",
  mixins: [O],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => va.includes(e)
    },
    /** v-model:open — dialog, popover, tour */
    open: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: null
    },
    iconType: H,
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    goLabel: {
      type: String,
      default: ""
    },
    closeLabel: {
      type: String,
      default: ""
    },
    showGo: {
      type: Boolean,
      default: !0
    },
    /** Üst köşe X (dialog/tour) */
    showClose: {
      type: Boolean,
      default: !0
    },
    /** Alt ikincil düğme (card/popover/tour) */
    showFooterClose: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => _a.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: wa
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => ka.includes(e)
    },
    popoverWidth: {
      type: String,
      default: "18rem"
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    /**
     * `false` iken `seen` true olduğunda bileşen render edilmez.
     * Kalıcılık üst katmanda `persistKey` ile yönetilir.
     */
    repeatable: {
      type: Boolean,
      default: !1
    },
    /** Kullanıcı bu bilgilendirmeyi gördü mü (üst katman tercihlerinden) */
    seen: {
      type: Boolean,
      default: !1
    },
    /** Üst katman tercih anahtarı (dokümantasyon / erişilebilirlik) */
    persistKey: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open", "go", "close", "after-leave"],
  data() {
    return {
      tourHighlightStyle: null,
      tourPanelStyle: null,
      tourResizeObserver: null,
      tourTargetRetries: 0
    };
  },
  computed: {
    ...ne(),
    shouldRender() {
      return this.repeatable || !this.seen;
    },
    rootShellClass() {
      return this.mode === "card" ? "ui-guidance ui-guidance--card" : this.mode === "popover" ? "ui-guidance ui-guidance--popover" : "ui-guidance";
    },
    syncOpen: {
      get() {
        return this.open;
      },
      set(e) {
        this.$emit("update:open", e);
      }
    },
    hasFooterActions() {
      return this.showGo || this.showFooterClose || !!this.$slots.footer;
    },
    resolvedGoLabel() {
      return this.goLabel ? this.goLabel : M(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : M(this, "ui.guidance.close", "Close");
    }
  },
  watch: {
    open: {
      immediate: !0,
      handler(e) {
        this.mode === "tour" && (e ? this.$nextTick(() => {
          this.updateTourLayout(), this.bindTourListeners();
        }) : this.unbindTourListeners());
      }
    },
    target() {
      this.mode === "tour" && this.open && this.$nextTick(() => {
        this.updateTourLayout(), this.bindTourListeners();
      });
    },
    targetPadding() {
      this.mode === "tour" && this.open && this.$nextTick(() => this.updateTourLayout());
    }
  },
  beforeUnmount() {
    this.unbindTourListeners();
  },
  methods: {
    onGo() {
      this.$emit("go");
    },
    onClose() {
      this.$emit("close"), this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.closeOnBackdrop && this.onClose();
    },
    onEscape() {
      this.closeOnEscape && this.onClose();
    },
    resolveTourTarget() {
      const e = this.target;
      return e ? typeof e == "object" && e instanceof HTMLElement ? ce(e) : typeof e == "string" && e.trim() ? ce(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const r = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const s = window.innerWidth, n = window.innerHeight, t = i.getBoundingClientRect(), u = t.width || 320, d = t.height || 180;
      if (!r) {
        this.tourHighlightStyle = null, this.tourPanelStyle = {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(24rem, calc(100vw - 2rem))",
          zIndex: 420
        };
        return;
      }
      const o = Ce(r);
      if (!o) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, o.top - h), x = Math.max(0, o.left - h), A = Math.min(n, o.bottom + h), C = Math.min(s, o.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${x}px`,
        width: `${Math.max(0, C - x)}px`,
        height: `${Math.max(0, A - p)}px`
      };
      let z = A + R, V = x;
      this.placement.startsWith("top") ? z = p - d - R : this.placement.startsWith("right") ? (z = p, V = C + R) : this.placement.startsWith("left") ? (z = p, V = x - u - R) : this.placement.includes("end") && (V = C - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && z + d > n - R && (z = p - d - R), z = Math.max(R, Math.min(z, n - d - R)), V = Math.max(R, Math.min(V, s - u - R)), this.tourPanelStyle = {
        position: "fixed",
        top: `${z}px`,
        left: `${V}px`,
        width: "min(24rem, calc(100vw - 2rem))",
        zIndex: 420,
        transform: "none"
      };
    },
    updateTourLayout() {
      this.measureTourLayout(!1), this._tourLayoutRaf && cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = requestAnimationFrame(() => {
        this.measureTourLayout(!0), this._tourLayoutRaf = null, this.scheduleTourTargetRetry();
      });
    },
    scheduleTourTargetRetry() {
      if (!this.open || this.mode !== "tour") return;
      this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null);
      const e = this.resolveTourTarget();
      if ((e == null ? void 0 : e.getBoundingClientRect().width) > 0) {
        const r = Ce(e);
        if (r && r.height > 0) {
          this.tourTargetRetries = 0;
          return;
        }
      }
      this.tourTargetRetries >= 24 || (this.tourTargetRetries += 1, this._tourTargetRetryRaf = requestAnimationFrame(() => {
        this._tourTargetRetryRaf = null, this.updateTourLayout();
      }));
    },
    bindTourListeners() {
      if (this.unbindTourListeners(), this._tourOnResize = () => this.updateTourLayout(), window.addEventListener("resize", this._tourOnResize), window.addEventListener("scroll", this._tourOnResize, !0), typeof ResizeObserver < "u") {
        this.tourResizeObserver = new ResizeObserver(() => this.updateTourLayout());
        const e = this.$refs.tourPanelRef;
        e && this.tourResizeObserver.observe(e);
        const r = this.resolveTourTarget();
        if (r)
          for (const i of ba(r))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Sa = { class: "ui-guidance-footer" }, Ca = { class: "ui-guidance-popover" }, Ta = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, La = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Ia = { class: "ui-guidance-popover__text" }, Aa = {
  key: 0,
  class: "ui-guidance-popover__title"
}, za = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Ma = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Pa = ["aria-label"], Ea = { class: "ui-guidance-tour__content" }, Da = { class: "ui-header-lead" }, Oa = { class: "ui-header-lead__main" }, Va = {
  key: 0,
  class: "ui-header-lead__icon"
}, Ra = { class: "ui-header-lead__text" }, Ba = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Fa = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Na = {
  key: 0,
  class: "ui-header-lead__actions"
}, $a = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Ha = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Ua(e, r, i, s, n, t) {
  const u = v("ui-button"), d = v("ui-card"), o = v("ui-dialog"), h = v("ui-icon"), p = v("ui-popover");
  return t.shouldRender ? (a(), l("div", {
    key: 0,
    class: _(t.rootShellClass)
  }, [
    i.mode === "card" ? (a(), b(d, {
      key: 0,
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
      border: ""
    }, re({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: y(() => [
          g(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      t.hasFooterActions ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer", {}, () => [
            c("div", Sa, [
              i.showFooterClose ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: t.onClose
              }, {
                default: y(() => [
                  T(m(t.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              i.showGo ? (a(), b(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: t.onGo
              }, {
                default: y(() => [
                  T(m(t.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (a(), b(o, {
      key: 1,
      open: t.syncOpen,
      "onUpdate:open": r[0] || (r[0] = (x) => t.syncOpen = x),
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      onAfterLeave: r[1] || (r[1] = (x) => e.$emit("after-leave"))
    }, re({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: t.onGo
          }, {
            default: y(() => [
              T(m(t.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (a(), b(p, {
      key: 2,
      open: t.syncOpen,
      "onUpdate:open": r[2] || (r[2] = (x) => t.syncOpen = x),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: y((x) => [
        g(e.$slots, "trigger", Xt(Qt(x)))
      ]),
      content: y(() => [
        c("div", Ca, [
          i.icon || i.title || i.description ? (a(), l("div", Ta, [
            i.icon ? (a(), l("span", La, [
              w(h, {
                name: i.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Ia, [
              i.title ? (a(), l("p", Aa, m(i.title), 1)) : f("", !0),
              i.description ? (a(), l("p", za, m(i.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          t.hasFooterActions && !e.$slots.footer ? (a(), l("div", Ma, [
            i.showFooterClose ? (a(), b(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: t.onClose
            }, {
              default: y(() => [
                T(m(t.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            i.showGo ? (a(), b(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: t.onGo
            }, {
              default: y(() => [
                T(m(t.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (a(), b(Z, {
      key: 3,
      to: "body"
    }, [
      w(X, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: r[5] || (r[5] = (x) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          t.syncOpen ? (a(), l("div", {
            key: 0,
            class: _(["ui-guidance-tour", { "ui-guidance-tour--has-target": n.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: r[4] || (r[4] = j((...x) => t.onEscape && t.onEscape(...x), ["esc"]))
          }, [
            i.closeOnBackdrop ? (a(), l("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: r[3] || (r[3] = (...x) => t.onBackdrop && t.onBackdrop(...x))
            })) : f("", !0),
            n.tourHighlightStyle ? (a(), l("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: E(n.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            c("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: E(n.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || t.resolvedGoLabel
            }, [
              c("div", Ea, [
                c("div", Da, [
                  c("div", Oa, [
                    i.icon ? (a(), l("span", Va, [
                      w(h, {
                        name: i.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    c("div", Ra, [
                      i.title ? (a(), l("p", Ba, m(i.title), 1)) : f("", !0),
                      i.description ? (a(), l("p", Fa, m(i.description), 1)) : f("", !0)
                    ])
                  ]),
                  i.showClose ? (a(), l("div", Na, [
                    w(u, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": t.resolvedCloseLabel,
                      onClick: t.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : f("", !0)
                ]),
                e.$slots.default ? (a(), l("div", $a, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                t.hasFooterActions && !e.$slots.footer ? (a(), l("div", Ha, [
                  i.showFooterClose ? (a(), b(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onClose
                  }, {
                    default: y(() => [
                      T(m(t.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  i.showGo ? (a(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onGo
                  }, {
                    default: y(() => [
                      T(m(t.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Pa)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const Wa = /* @__PURE__ */ k(xa, [["render", Ua]]), Ya = {
  name: "IconPicker",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    icons: {
      type: Array,
      default: () => []
    },
    iconType: H,
    disabled: {
      type: Boolean,
      default: !1
    },
    triggerPlaceholder: {
      type: String,
      default: ""
    },
    popoverTitle: {
      type: String,
      default: ""
    },
    clearLabel: {
      type: String,
      default: ""
    },
    searchPlaceholder: {
      type: String,
      default: ""
    },
    noResultsLabel: {
      type: String,
      default: ""
    },
    /** 0 veya negatif = limit yok (tüm ikonlar). */
    maxResults: {
      type: Number,
      default: 0
    },
    panelWidth: {
      type: String,
      default: "22rem"
    },
    /**
     * Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`.
     */
    block: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      searchQuery: ""
    };
  },
  computed: {
    ...ne(),
    rootClass() {
      return S(
        "ui-icon-picker min-w-0",
        this.block ? "ui-icon-picker--block w-full" : "ui-icon-picker--inline w-auto",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localIcon: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t("ui.iconPicker.triggerPlaceholder");
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t("ui.iconPicker.popoverTitle");
    },
    clearLabelText() {
      return this.clearLabel || this.$t("ui.iconPicker.clear");
    },
    searchPlaceholderLabel() {
      return this.searchPlaceholder || this.$t("ui.iconPicker.searchPlaceholder");
    },
    resolvedNoResultsLabel() {
      return this.noResultsLabel || this.$t("ui.iconPicker.noResults");
    },
    filteredIcons() {
      const e = String(this.searchQuery || "").trim().toLowerCase(), r = Array.isArray(this.icons) ? this.icons : [];
      let i = r;
      e && (i = r.filter((n) => String(n).toLowerCase().includes(e)));
      const s = Number(this.maxResults);
      return Number.isFinite(s) && s > 0 ? i.slice(0, s) : i;
    }
  },
  watch: {
    popoverOpen(e) {
      e || (this.searchQuery = "");
    }
  },
  methods: {
    selectIcon(e) {
      this.localIcon = e, this.popoverOpen = !1;
    },
    clearIcon() {
      this.localIcon = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    }
  }
}, Ga = ["disabled", "aria-expanded", "onClick"], qa = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ka = { class: "ui-select-field-suffix" }, ja = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Za = { class: "ui-icon-picker-panel" }, Xa = { class: "ui-icon-picker-panel__header" }, Qa = { class: "ui-icon-picker-panel__title" }, Ja = { class: "ui-icon-picker-panel__search" }, es = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, ts = {
  key: 1,
  class: "ui-icon-picker-grid"
}, is = ["title", "onClick"];
function rs(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("ui-input"), h = v("ui-popover");
  return a(), l("div", {
    class: _(t.rootClass)
  }, [
    w(h, {
      open: n.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => n.popoverOpen = p),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: y(({ open: p, toggle: x, close: A }) => [
        g(e.$slots, "trigger", {
          open: p,
          toggle: x,
          close: A
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: x
          }, [
            c("span", qa, [
              w(u, {
                name: t.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            c("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !t.localIcon }])
            }, m(t.localIcon || t.triggerLabel), 3),
            c("span", Ka, [
              c("span", ja, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Ga)
        ])
      ]),
      content: y(() => [
        c("div", Za, [
          c("div", Xa, [
            c("span", Qa, m(t.popoverTitleLabel), 1),
            t.localIcon ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: D(t.clearIcon, ["stop"])
            }, {
              default: y(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", Ja, [
            w(o, {
              modelValue: n.searchQuery,
              "onUpdate:modelValue": r[0] || (r[0] = (p) => n.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: t.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          t.filteredIcons.length ? (a(), l("div", ts, [
            (a(!0), l(I, null, P(t.filteredIcons, (p) => (a(), l("button", {
              key: p,
              type: "button",
              class: _(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": t.localIcon === p }]),
              title: p,
              onClick: (x) => t.selectIcon(p)
            }, [
              w(u, {
                name: p,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, is))), 128))
          ])) : (a(), l("div", es, m(t.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const as = /* @__PURE__ */ k(Ya, [["render", rs]]), ss = 56, ns = 1.15, ls = 0.28, os = {
  name: "Intro",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    /** Overlay iken görünürlük; `overlay` kapalıysa yok sayılır. */
    open: {
      type: Boolean,
      default: !0
    },
    /** Aktif slayt (0 tabanlı). */
    modelValue: {
      type: Number,
      default: 0
    },
    /**
     * `{ key, icon, iconType, title, description, ariaLabel }`
     */
    steps: {
      type: Array,
      default: () => []
    },
    /** Tam ekran katman (`Teleport` + `role=dialog`). */
    overlay: {
      type: Boolean,
      default: !0
    },
    showSkip: {
      type: Boolean,
      default: !0
    },
    skipLabel: {
      type: String,
      default: ""
    },
    nextLabel: {
      type: String,
      default: ""
    },
    finishLabel: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open", "update:modelValue", "skip", "finish", "next"],
  data() {
    return {
      dragging: !1,
      dragOffset: 0,
      pointerId: null,
      startX: 0,
      startY: 0,
      startAt: 0,
      lockedAxis: null
    };
  },
  computed: {
    isVisible() {
      return this.overlay ? this.open : !0;
    },
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((r, i) => ({
        key: (r == null ? void 0 : r.key) ?? `intro-${i}`,
        icon: (r == null ? void 0 : r.icon) ?? "",
        iconType: (r == null ? void 0 : r.iconType) ?? K(this.uiDefaults, void 0),
        title: (r == null ? void 0 : r.title) ?? "",
        description: (r == null ? void 0 : r.description) ?? "",
        ariaLabel: (r == null ? void 0 : r.ariaLabel) ?? ""
      }));
    },
    lastIndex() {
      return Math.max(0, this.normalizedSteps.length - 1);
    },
    activeIndex() {
      return this.normalizedSteps.length ? Math.min(this.lastIndex, Math.max(0, Number(this.modelValue) || 0)) : 0;
    },
    isLastStep() {
      return this.activeIndex >= this.lastIndex;
    },
    resolvedSkipLabel() {
      return this.skipLabel || M(this, "ui.intro.skip", "Skip");
    },
    resolvedNextLabel() {
      return this.nextLabel || M(this, "ui.intro.next", "Next");
    },
    resolvedFinishLabel() {
      return this.finishLabel || M(this, "ui.intro.finish", "Get started");
    },
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.intro.stepsAria", "Introduction");
    },
    resolvedCarouselRole() {
      return M(this, "ui.intro.carouselRole", "carousel");
    },
    primaryLabel() {
      return this.isLastStep ? this.resolvedFinishLabel : this.resolvedNextLabel;
    },
    trackStyle() {
      return { transform: `translate3d(${`calc(${-this.activeIndex * 100}% + ${this.dragOffset}px)`}, 0, 0)` };
    },
    rootClass() {
      return S("ui-intro", this.overlay && "ui-intro--overlay", this.$attrs.class);
    },
    passthroughAttrs() {
      return Be(this.$attrs);
    }
  },
  watch: {
    isVisible(e) {
      e && (this.resetDrag(), this.$nextTick(() => {
        var r, i;
        (i = (r = this.$refs.root) == null ? void 0 : r.focus) == null || i.call(r, { preventScroll: !0 });
      }));
    }
  },
  beforeUnmount() {
    this.releasePointer();
  },
  methods: {
    isRtl() {
      const e = this.$refs.root;
      return e && typeof getComputedStyle == "function" ? getComputedStyle(e).direction === "rtl" : document.documentElement.dir === "rtl";
    },
    setIndex(e) {
      const r = Math.min(this.lastIndex, Math.max(0, e));
      r !== this.activeIndex && this.$emit("update:modelValue", r);
    },
    goTo(e) {
      this.setIndex(e);
    },
    goPrev() {
      this.setIndex(this.activeIndex - 1);
    },
    goNext() {
      if (this.isLastStep) {
        this.onFinish();
        return;
      }
      this.setIndex(this.activeIndex + 1), this.$emit("next", this.activeIndex + 1);
    },
    onSkip() {
      this.$emit("skip"), this.overlay && this.$emit("update:open", !1);
    },
    onFinish() {
      this.$emit("finish"), this.overlay && this.$emit("update:open", !1);
    },
    onRootKeydown(e) {
      if (e.key === "ArrowRight") {
        e.preventDefault(), this.isRtl() ? this.goPrev() : this.goNext();
        return;
      }
      e.key === "ArrowLeft" && (e.preventDefault(), this.isRtl() ? this.goNext() : this.goPrev());
    },
    isInteractiveTarget(e) {
      return e instanceof Element ? !!e.closest('button, a, input, textarea, select, [role="tab"]') : !1;
    },
    resetDrag() {
      this.dragging = !1, this.dragOffset = 0, this.pointerId = null, this.lockedAxis = null;
    },
    releasePointer() {
      var r;
      const e = this.$refs.viewport;
      e && this.pointerId != null && ((r = e.hasPointerCapture) != null && r.call(e, this.pointerId)) && e.releasePointerCapture(this.pointerId);
    },
    onPointerDown(e) {
      var r, i;
      if (!(e.pointerType === "mouse" && e.button !== 0) && !this.isInteractiveTarget(e.target) && !(this.normalizedSteps.length < 2)) {
        this.dragging = !0, this.dragOffset = 0, this.pointerId = e.pointerId, this.startX = e.clientX, this.startY = e.clientY, this.startAt = e.timeStamp, this.lockedAxis = null;
        try {
          (i = (r = e.currentTarget) == null ? void 0 : r.setPointerCapture) == null || i.call(r, e.pointerId);
        } catch {
        }
      }
    },
    onPointerMove(e) {
      !this.dragging || e.pointerId !== this.pointerId || this.applyDrag(e.clientX, e.clientY, e);
    },
    onPointerUp(e) {
      !this.dragging || this.pointerId != null && e.pointerId !== this.pointerId || this.commitDrag(e.clientX, e.timeStamp);
    },
    onTouchStart(e) {
      var i;
      if (typeof window < "u" && window.PointerEvent || this.isInteractiveTarget(e.target) || this.normalizedSteps.length < 2) return;
      const r = (i = e.changedTouches) == null ? void 0 : i[0];
      r && (this.dragging = !0, this.dragOffset = 0, this.pointerId = "touch", this.startX = r.clientX, this.startY = r.clientY, this.startAt = e.timeStamp, this.lockedAxis = null);
    },
    onTouchMove(e) {
      var i;
      if (!this.dragging || this.pointerId !== "touch") return;
      const r = (i = e.changedTouches) == null ? void 0 : i[0];
      r && this.applyDrag(r.clientX, r.clientY, e);
    },
    onTouchEnd(e) {
      var i;
      if (!this.dragging || this.pointerId !== "touch") return;
      const r = (i = e.changedTouches) == null ? void 0 : i[0];
      this.commitDrag((r == null ? void 0 : r.clientX) ?? this.startX + this.dragOffset, e.timeStamp);
    },
    applyDrag(e, r, i) {
      var o;
      const s = e - this.startX, n = r - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(s) < 8 && Math.abs(n) < 8) return;
        if (this.lockedAxis = Math.abs(s) > Math.abs(n) * ns ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = i == null ? void 0 : i.preventDefault) == null || o.call(i);
      const t = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let d = s;
      (t && d > 0 || u && d < 0) && (d *= ls), this.dragOffset = d;
    },
    commitDrag(e, r) {
      var h;
      const i = e - this.startX, s = Math.max(1, r - this.startAt), n = i / s, t = ((h = this.$refs.viewport) == null ? void 0 : h.clientWidth) || 0, u = Math.max(ss, t * 0.18), d = this.lockedAxis === "x" && (Math.abs(i) >= u || Math.abs(n) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !d) return;
      if (this.isRtl() ? i > 0 : i < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, us = ["aria-modal", "aria-label", "aria-roledescription"], ds = { class: "ui-intro__header" }, cs = ["aria-hidden"], hs = {
  key: 0,
  class: "ui-intro__icon"
}, fs = {
  key: 1,
  class: "ui-intro__title"
}, ms = {
  key: 2,
  class: "ui-intro__description"
}, ps = { class: "ui-intro__footer" }, gs = ["aria-label"], ys = ["aria-selected", "aria-label", "onClick"];
function bs(e, r, i, s, n, t) {
  const u = v("ui-button"), d = v("ui-icon");
  return a(), b(Z, {
    to: "body",
    disabled: !i.overlay
  }, [
    w(X, { name: "ui-intro-shell" }, {
      default: y(() => [
        t.isVisible ? (a(), l("div", L({
          key: 0,
          ref: "root",
          class: t.rootClass,
          role: "dialog",
          "aria-modal": i.overlay ? "true" : void 0,
          "aria-label": t.resolvedAriaLabel,
          "aria-roledescription": t.resolvedCarouselRole,
          tabindex: "-1"
        }, t.passthroughAttrs, {
          onKeydown: r[8] || (r[8] = (...o) => t.onRootKeydown && t.onRootKeydown(...o))
        }), [
          c("div", ds, [
            g(e.$slots, "header", {}, () => [
              i.showSkip ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: t.onSkip
              }, {
                default: y(() => [
                  T(m(t.resolvedSkipLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ]),
          c("div", {
            ref: "viewport",
            class: "ui-intro__viewport",
            onPointerdown: r[0] || (r[0] = (...o) => t.onPointerDown && t.onPointerDown(...o)),
            onPointermove: r[1] || (r[1] = (...o) => t.onPointerMove && t.onPointerMove(...o)),
            onPointerup: r[2] || (r[2] = (...o) => t.onPointerUp && t.onPointerUp(...o)),
            onPointercancel: r[3] || (r[3] = (...o) => t.onPointerUp && t.onPointerUp(...o)),
            onTouchstartPassive: r[4] || (r[4] = (...o) => t.onTouchStart && t.onTouchStart(...o)),
            onTouchmove: r[5] || (r[5] = (...o) => t.onTouchMove && t.onTouchMove(...o)),
            onTouchend: r[6] || (r[6] = (...o) => t.onTouchEnd && t.onTouchEnd(...o)),
            onTouchcancel: r[7] || (r[7] = (...o) => t.onTouchEnd && t.onTouchEnd(...o))
          }, [
            c("div", {
              class: _(["ui-intro__track", { "ui-intro__track--dragging": n.dragging }]),
              style: E(t.trackStyle)
            }, [
              (a(!0), l(I, null, P(t.normalizedSteps, (o, h) => (a(), l("div", {
                key: o.key,
                class: "ui-intro__slide",
                "aria-hidden": h === t.activeIndex ? void 0 : "true"
              }, [
                g(e.$slots, "default", {
                  step: o,
                  index: h,
                  active: h === t.activeIndex
                }, () => [
                  o.icon ? (a(), l("span", hs, [
                    w(d, {
                      name: o.icon,
                      type: o.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  o.title ? (a(), l("h2", fs, m(o.title), 1)) : f("", !0),
                  o.description ? (a(), l("p", ms, m(o.description), 1)) : f("", !0)
                ])
              ], 8, cs))), 128))
            ], 6)
          ], 544),
          c("div", ps, [
            g(e.$slots, "footer", {
              index: t.activeIndex,
              isLast: t.isLastStep,
              goNext: t.goNext,
              goPrev: t.goPrev,
              goTo: t.goTo
            }, () => [
              t.normalizedSteps.length > 1 ? (a(), l("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": t.resolvedAriaLabel
              }, [
                (a(!0), l(I, null, P(t.normalizedSteps, (o, h) => (a(), l("button", {
                  key: o.key,
                  type: "button",
                  class: _(["ui-intro__dot", { "ui-intro__dot--active": h === t.activeIndex }]),
                  role: "tab",
                  "aria-selected": h === t.activeIndex,
                  "aria-label": o.ariaLabel || o.title || String(h + 1),
                  onClick: (p) => t.goTo(h)
                }, null, 10, ys))), 128))
              ], 8, gs)) : f("", !0),
              w(u, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: t.goNext
              }, {
                default: y(() => [
                  T(m(t.primaryLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ], 16, us)) : f("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const vs = /* @__PURE__ */ k(os, [["render", bs]]), _s = ["sm", "md", "lg", "full"], Te = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, ks = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => _s.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        Te[this.width] || Te.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, ws = {
  key: 0,
  class: "ui-menu-header"
}, xs = { class: "ui-menu-body" }, Ss = {
  key: 1,
  class: "ui-menu-footer"
};
function Cs(e, r, i, s, n, t) {
  return a(), l("nav", L({ class: t.rootClass }, t.passthroughAttrs), [
    e.$slots.header ? (a(), l("div", ws, [
      g(e.$slots, "header")
    ])) : f("", !0),
    c("div", xs, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), l("div", Ss, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const Ts = /* @__PURE__ */ k(ks, [["render", Cs]]), Ls = {
  name: "MenuGroup",
  inheritAttrs: !1,
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    groupClass() {
      return S("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Is = {
  key: 0,
  class: "ui-menu-group-label"
}, As = { class: "ui-menu-group-items" };
function zs(e, r, i, s, n, t) {
  return a(), l("div", L({ class: t.groupClass }, t.passthroughAttrs), [
    i.label ? (a(), l("p", Is, m(i.label), 1)) : f("", !0),
    c("div", As, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const Ms = /* @__PURE__ */ k(Ls, [["render", zs]]), Ps = {
  name: "MenuItem",
  inheritAttrs: !1,
  props: {
    /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
    to: {
      type: [String, Object],
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    itemClass() {
      return S(
        "ui-menu-item",
        this.active && "ui-menu-item--active",
        this.$attrs.class
      );
    },
    forwardedAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function Es(e, r, i, s, n, t) {
  const u = v("ui-button");
  return a(), b(u, L({
    type: "button",
    variant: "ghost",
    color: "secondary",
    block: "",
    "text-align": "left",
    to: i.to,
    "prefix-icon": i.prefixIcon,
    "suffix-icon": i.suffixIcon,
    disabled: i.disabled,
    loading: i.loading,
    class: t.itemClass,
    "aria-current": i.active ? "page" : void 0
  }, t.forwardedAttrs, { onClick: t.onClick }), {
    default: y(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Ds = /* @__PURE__ */ k(Ps, [["render", Es]]), Os = {
  name: "MenuNav",
  inheritAttrs: !1,
  props: {
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    navClass() {
      return S("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Vs = ["aria-label"];
function Rs(e, r, i, s, n, t) {
  return a(), l("div", L({
    class: t.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Vs);
}
const Bs = /* @__PURE__ */ k(Os, [["render", Rs]]);
function Fs(e) {
  const r = String(e ?? "");
  if (!r)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  r.length >= 8 && (i += 1), r.length >= 12 && (i += 1), /[a-z]/.test(r) && /[A-Z]/.test(r) ? i += 1 : /[a-zA-Z]/.test(r) && (i += 0.5), /\d/.test(r) && (i += 1), /[^a-zA-Z0-9]/.test(r) && (i += 1);
  const s = Math.min(4, Math.round(i)), n = ["weak", "fair", "good", "strong"], t = s <= 0 ? "weak" : n[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: t
  };
}
const Ns = $("ui-password"), $s = B, Hs = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || $s.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "new-password"
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    },
    /** Güç çubuğu ve etiket */
    showStrength: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "focus", "blur"],
  data() {
    const e = Ns(), r = e.slice(12);
    return {
      fallbackId: e,
      fallbackStrengthId: `ui-password-strength-${r}`,
      visible: !1
    };
  },
  computed: {
    innerValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    strength() {
      return Fs(this.modelValue);
    },
    strengthVariant() {
      const e = this.strength.label;
      return e === "empty" ? "default" : e;
    },
    hasPasswordValue() {
      return String(this.modelValue ?? "").length > 0;
    },
    showStrengthMeter() {
      return this.showStrength && this.hasPasswordValue;
    },
    strengthDescribedby() {
      if (!this.showStrengthMeter)
        return this.$attrs["aria-describedby"] || void 0;
      const e = this.$attrs["aria-describedby"];
      return e ? `${e} ${this.fallbackStrengthId}` : this.fallbackStrengthId;
    },
    strengthText() {
      const e = this.strength.label;
      return typeof this.$t == "function" ? this.$t(`ui.password.strength.${e}`) : { weak: "Weak", fair: "Fair", good: "Good", strong: "Strong" }[e] || e;
    },
    toggleAriaLabel() {
      return typeof this.$t == "function" ? this.visible ? this.$t("ui.password.hide") : this.$t("ui.password.show") : this.visible ? "Hide password" : "Show password";
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), r = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
      return r;
    }
  }
}, Us = ["aria-label", "aria-pressed", "disabled"], Ws = ["id", "aria-live"];
function Ys(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("ui-input"), o = v("ui-progress");
  return a(), l("div", {
    class: _(["ui-password", [e.$attrs.class]])
  }, [
    w(d, L({
      id: t.resolvedId,
      modelValue: t.innerValue,
      "onUpdate:modelValue": r[1] || (r[1] = (h) => t.innerValue = h),
      type: n.visible ? "text" : "password",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength,
      "aria-describedby": t.strengthDescribedby
    }, t.passthroughAttrs, {
      onFocus: r[2] || (r[2] = (h) => e.$emit("focus", h)),
      onBlur: r[3] || (r[3] = (h) => e.$emit("blur", h))
    }), {
      append: y(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": t.toggleAriaLabel,
          "aria-pressed": n.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: r[0] || (r[0] = (h) => n.visible = !n.visible)
        }, [
          w(u, {
            name: n.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Us)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    t.showStrengthMeter ? (a(), l("div", {
      key: 0,
      id: n.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": t.innerValue ? "polite" : "off"
    }, [
      w(o, {
        type: "bar",
        size: "md",
        value: t.strength.percent,
        variant: t.strengthVariant,
        "aria-valuetext": t.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      t.strength.label !== "empty" ? (a(), l("span", {
        key: 0,
        class: _(["ui-password-strength-label", `ui-password-strength-label--${t.strength.label}`])
      }, m(t.strengthText), 3)) : f("", !0)
    ], 8, Ws)) : f("", !0)
  ], 2);
}
const Gs = /* @__PURE__ */ k(Hs, [["render", Ys]]), qs = ["square", "video", "auto"], Ks = ["fill", "sm", "md", "lg"], Le = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, js = {
  name: "Photo",
  inheritAttrs: !1,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    favorite: {
      type: Boolean,
      default: !1
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => qs.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Ks.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !0
    },
    preview: {
      type: Boolean,
      default: !0
    },
    overflowLabel: {
      type: String,
      default: ""
    },
    galleryIndex: {
      type: Number,
      default: -1
    }
  },
  emits: ["click", "open-preview"],
  data() {
    return {
      imageFailed: !1,
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "div";
    },
    rootClass() {
      return S(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Le[this.size] || Le.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), r = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
      return r;
    },
    rootBind() {
      if (!this.interactive) return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    resolvedAlt() {
      return this.alt ? this.alt : this.$t("ui.photo.fallbackAlt");
    },
    galleryList() {
      return this.src ? [{ src: this.src, alt: this.resolvedAlt }] : [];
    },
    activeItem() {
      return this.galleryList[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.resolvedAlt;
    },
    showPrev() {
      return this.galleryList.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.galleryList.length > 1 && this.previewIndex < this.galleryList.length - 1;
    },
    counterLabel() {
      return this.galleryList.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.galleryList.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    },
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    onClick(e) {
      if (this.$emit("click", e), !(!this.interactive || !this.preview || !this.src)) {
        if (this.galleryIndex >= 0) {
          this.$emit("open-preview", this.galleryIndex);
          return;
        }
        this.previewIndex = 0, this.previewOpen = !0;
      }
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, Zs = ["src", "alt"], Xs = ["aria-hidden"], Qs = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Js = {
  key: 3,
  class: "ui-photo__overflow"
}, en = ["aria-label"], tn = ["aria-label"], rn = { class: "ui-photo-preview__panel" }, an = ["src", "alt"], sn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function nn(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("ui-button");
  return a(), l(I, null, [
    (a(), b(Y(t.rootTag), L({
      type: i.interactive ? "button" : void 0,
      class: t.rootClass
    }, t.rootBind, { onClick: t.onClick }), {
      default: y(() => [
        i.src && !n.imageFailed ? (a(), l("img", {
          key: 0,
          src: i.src,
          alt: t.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: r[0] || (r[0] = (o) => n.imageFailed = !0)
        }, null, 40, Zs)) : (a(), l("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Xs)),
        i.favorite ? (a(), l("span", Qs, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        i.overflowLabel ? (a(), l("span", Js, m(i.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), b(Z, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          n.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: r[2] || (r[2] = (...o) => t.onPreviewKeydown && t.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[1] || (r[1] = (...o) => t.closePreview && t.closePreview(...o))
            }, null, 8, tn),
            c("div", rn, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: D(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), l("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, an)) : f("", !0),
              t.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: D(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), l("p", sn, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, en)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ln = /* @__PURE__ */ k(js, [["render", nn]]), on = ["square", "video", "auto"], un = {
  name: "Photos",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: 4
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => on.includes(e)
    },
    preview: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    normalizedItems() {
      return (this.items || []).map((e, r) => {
        const i = String((e == null ? void 0 : e.src) ?? (e == null ? void 0 : e.url) ?? "").trim();
        return i ? {
          key: (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.key) ?? null,
          src: i,
          alt: (e == null ? void 0 : e.alt) ?? "",
          favorite: !!((e == null ? void 0 : e.favorite) ?? (e == null ? void 0 : e.isFavorite) ?? (e == null ? void 0 : e.is_favorite))
        } : null;
      }).filter(Boolean);
    },
    displayCount() {
      return Math.min(this.normalizedItems.length, this.max);
    },
    overflowCount() {
      return Math.max(0, this.normalizedItems.length - this.max);
    },
    visibleItems() {
      return this.normalizedItems.length ? this.normalizedItems.slice(0, this.max) : [];
    },
    overflowLabel() {
      return this.$t("ui.photos.more", { count: this.overflowCount });
    },
    layoutClass() {
      const e = this.visibleItems.length;
      return S(
        e ? `ui-photos--count-${Math.min(e, 4)}` : "ui-photos--empty",
        this.overflowCount > 0 && e >= this.max ? "ui-photos--has-overflow" : ""
      );
    },
    activeItem() {
      return this.normalizedItems[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.$t("ui.photo.fallbackAlt");
    },
    showPrev() {
      return this.normalizedItems.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.normalizedItems.length > 1 && this.previewIndex < this.normalizedItems.length - 1;
    },
    counterLabel() {
      return this.normalizedItems.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.normalizedItems.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    openPreviewAt(e) {
      !this.preview || !this.normalizedItems.length || (this.previewIndex = Math.max(0, Math.min(e, this.normalizedItems.length - 1)), this.previewOpen = !0);
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, dn = ["data-count"], cn = ["aria-label"], hn = ["aria-label"], fn = { class: "ui-photo-preview__panel" }, mn = ["src", "alt"], pn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function gn(e, r, i, s, n, t) {
  const u = v("ui-photo"), d = v("ui-button");
  return a(), l(I, null, [
    c("div", {
      class: _(["ui-photos", t.layoutClass]),
      "data-count": t.displayCount
    }, [
      (a(!0), l(I, null, P(t.visibleItems, (o, h) => (a(), b(u, {
        key: o.key || `${o.src}-${h}`,
        src: o.src,
        alt: o.alt || "",
        favorite: !!o.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": h,
        "overflow-label": h === t.visibleItems.length - 1 && t.overflowCount > 0 ? t.overflowLabel : "",
        "aria-label": o.alt || void 0,
        onOpenPreview: t.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, dn),
    (a(), b(Z, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          n.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: r[1] || (r[1] = (...o) => t.onPreviewKeydown && t.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[0] || (r[0] = (...o) => t.closePreview && t.closePreview(...o))
            }, null, 8, hn),
            c("div", fn, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: D(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), l("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, mn)) : f("", !0),
              t.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: D(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), l("p", pn, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, cn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const yn = /* @__PURE__ */ k(un, [["render", gn]]), bn = ["sm", "md", "lg", "xl", "2xl"], vn = ["default", "foreground", "muted", "success", "danger", "primary"], _n = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => bn.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => vn.includes(e)
    },
    strike: {
      type: Boolean,
      default: !1
    },
    truncate: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return [
        `ui-price-text--${this.size}`,
        this.tone !== "default" ? `ui-price-text--${this.tone}` : null,
        this.strike ? "ui-price-text--strike" : null,
        this.truncate ? "ui-price-text--truncate" : null
      ];
    }
  }
};
function kn(e, r, i, s, n, t) {
  return a(), l("span", {
    class: _(["ui-price-text", t.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      T(m(i.value), 1)
    ])
  ], 2);
}
const me = /* @__PURE__ */ k(_n, [["render", kn]]), wn = B, xn = ["sm", "md", "lg", "xl", "2xl"], Sn = ["default", "foreground", "muted", "success", "danger", "primary"], Cn = {
  name: "PriceDisplay",
  components: { PriceText: me },
  props: {
    label: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => wn.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => xn.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Sn.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Tn = { class: "ui-price-display__label" };
function Ln(e, r, i, s, n, t) {
  const u = v("ui-price-text");
  return a(), l("div", {
    class: _(["ui-price-display", t.rootClass])
  }, [
    c("span", Tn, m(i.label), 1),
    w(u, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          T(m(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const In = /* @__PURE__ */ k(Cn, [["render", Ln]]), An = B, zn = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => An.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function Mn(e, r, i, s, n, t) {
  return a(), l("div", {
    class: _(["ui-price-display-group", t.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Pn = /* @__PURE__ */ k(zn, [["render", Mn]]), En = ["sm", "md", "lg", "xl", "2xl"], Dn = ["default", "foreground", "muted", "success", "danger", "primary"], On = {
  name: "PriceDisplayRow",
  components: { PriceText: me },
  props: {
    label: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      default: ""
    },
    valueSize: {
      type: String,
      default: "md",
      validator: (e) => En.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Dn.includes(e)
    },
    divider: {
      type: Boolean,
      default: !1
    },
    emphasis: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return {
        "ui-price-display-row--divider": this.divider,
        "ui-price-display-row--emphasis": this.emphasis
      };
    }
  }
}, Vn = { class: "ui-price-display-row__label" };
function Rn(e, r, i, s, n, t) {
  const u = v("ui-price-text");
  return a(), l("div", {
    class: _(["ui-price-display-row", t.rootClass])
  }, [
    c("span", Vn, m(i.label), 1),
    w(u, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          T(m(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Bn = /* @__PURE__ */ k(On, [["render", Rn]]), Fn = ["tr-TR", "en-US"], se = fe({
  currency: "TRY",
  format: "tr-TR"
});
function Nn(e, r = se.format) {
  return Fn.includes(e) ? e : r;
}
function $n(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (se.currency = le(e.currency));
  const r = e.format ?? e.locale;
  r != null && (se.format = Nn(r));
}
function Hn() {
  return Jt(se);
}
const Un = {
  name: "PriceInput",
  components: { CurrencyInput: qe },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    currency: {
      type: String,
      default: void 0
    },
    /** BCP 47 fiyat biçimi; verilmezse fewui global ayarı kullanılır. */
    format: {
      type: String,
      default: void 0
    },
    /** `format` için geriye uyumlu alias. */
    locale: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  setup() {
    return { priceInputConfig: Hn() };
  },
  computed: {
    resolvedCurrency() {
      return this.currency || this.priceInputConfig.currency;
    },
    resolvedFormat() {
      return this.format || this.locale || this.priceInputConfig.format;
    }
  }
};
function Wn(e, r, i, s, n, t) {
  const u = v("CurrencyInput");
  return a(), b(u, L({
    "model-value": i.modelValue,
    currency: t.resolvedCurrency,
    locale: t.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": r[0] || (r[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: r[1] || (r[1] = (d) => e.$emit("input", d)),
    onChange: r[2] || (r[2] = (d) => e.$emit("change", d)),
    onFocus: r[3] || (r[3] = (d) => e.$emit("focus", d)),
    onBlur: r[4] || (r[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Yn = /* @__PURE__ */ k(Un, [["render", Wn]]), Gn = ["bar", "circle"], Ie = ["sm", "md", "lg", "xl", "2xl"], Ae = ["thin", "md"], qn = ["default", "weak", "fair", "good", "strong"], ee = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, Kn = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, jn = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Gn.includes(e)
    },
    /** 0 … `max` */
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    /**
     * Daire: sm 16px, md 20px, lg 24px, xl 40px, 2xl 56px.
     * Çubuk: thin 4px (şifre gücü), md 8px (slider izi).
     */
    size: {
      type: String,
      default: "md"
    },
    /** Çubuk / halka dolgu rengi — şifre gücü vb. */
    variant: {
      type: String,
      default: "default",
      validator: (e) => qn.includes(e)
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    /** Slider izi gibi — progressbar rolü / aria yok */
    presentational: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaValuetext: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const e = this.type === "circle" ? Ie.includes(this.size) ? this.size : "sm" : Ae.includes(this.size) ? this.size : "md";
      return S(
        "ui-progress",
        `ui-progress--${this.type}`,
        this.type === "circle" && `ui-progress--circle-${e}`,
        this.type === "bar" && `ui-progress--bar-${e}`,
        this.variant !== "default" && `ui-progress--${this.variant}`,
        this.indeterminate && "ui-progress--indeterminate",
        this.$attrs.class
      );
    },
    circleSizeKey() {
      return Ie.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return Ae.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = ee[this.circleSizeKey] ?? ee.sm;
      return { width: `${e}px`, height: `${e}px` };
    },
    clampedPercent() {
      if (this.indeterminate) return 0;
      const e = Number(this.max);
      if (!Number.isFinite(e) || e <= 0) return 0;
      const r = Number(this.value);
      return Number.isFinite(r) ? Math.min(100, Math.max(0, r / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = ee[this.circleSizeKey] ?? ee.sm, r = Kn[this.circleSizeKey] ?? 2, i = (e - r) / 2, s = e / 2, n = 2 * Math.PI * i, t = n * (1 - this.clampedPercent / 100);
      return { size: e, stroke: r, radius: i, center: s, circumference: n, offset: t };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Zn = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Xn = ["width", "height", "viewBox"], Qn = ["cx", "cy", "r", "stroke-width"], Jn = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], el = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function tl(e, r, i, s, n, t) {
  return a(), l("div", {
    class: _(t.rootClass),
    style: E(t.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : t.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : t.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (a(), l("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: t.circleMetrics.size,
      height: t.circleMetrics.size,
      viewBox: `0 0 ${t.circleMetrics.size} ${t.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke
      }, null, 8, Qn),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke,
        "stroke-dasharray": t.circleMetrics.circumference,
        "stroke-dashoffset": t.circleMetrics.offset
      }, null, 8, Jn)
    ], 8, Xn)) : (a(), l("div", el, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${t.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Zn);
}
const il = /* @__PURE__ */ k(jn, [["render", tl]]), rl = {
  name: "Section",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    /** `false`: üstteki sekme / segment konumu zaten gösteriyorsa etiketli ayırıcı çizilmez */
    showDivider: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    showSectionDivider() {
      return this.showDivider && !!(this.title || this.icon);
    },
    hasFields() {
      return !!this.$slots.default && !this.$slots.body;
    }
  }
}, al = { class: "ui-section" }, sl = {
  key: 1,
  class: "ui-section-description ui-text-default"
}, nl = {
  key: 3,
  class: "ui-section-fields"
}, ll = {
  key: 4,
  class: "ui-section-body"
};
function ol(e, r, i, s, n, t) {
  const u = v("ui-divider");
  return a(), l("section", al, [
    t.showSectionDivider ? (a(), b(u, {
      key: 0,
      title: i.title,
      icon: i.icon,
      spacing: "md",
      decorative: !1
    }, null, 8, ["title", "icon"])) : f("", !0),
    i.description ? (a(), l("p", sl, m(i.description), 1)) : f("", !0),
    e.$slots.empty ? g(e.$slots, "empty", { key: 2 }) : t.hasFields ? (a(), l("div", nl, [
      g(e.$slots, "default")
    ])) : e.$slots.body ? (a(), l("div", ll, [
      g(e.$slots, "body")
    ])) : f("", !0)
  ]);
}
const ul = /* @__PURE__ */ k(rl, [["render", ol]]), dl = $("ui-sheet"), cl = ["left", "right"], hl = ["sm", "md", "lg", "xl"], fl = ["solid", "regular", "brands", "light", "duotone", "thin"], ze = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, ml = {
  name: "Sheet",
  mixins: [et, O],
  components: { Divider: Fe },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    /** `left` | `right` */
    side: {
      type: String,
      default: "right",
      validator: (e) => cl.includes(e)
    },
    /**
     * `true` — karartmalı tam ekran katman (modal).
     * `false` — arka plan etkileşime açık kalır; değişiklikler anında görünür.
     */
    overlay: {
      type: Boolean,
      default: !0
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => hl.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: void 0,
      validator: (e) => e == null || fl.includes(e)
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    closeLabel: {
      type: String,
      default: null
    },
    bodyPadding: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "none"
    },
    bodyLayout: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "flex"
    },
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /**
     * Footer üst kenar çizgisi — `false` ile border-t kalkar.
     */
    footerBorder: {
      type: Boolean,
      default: !0
    },
    /**
     * Dar viewport’ta (`max-width: 1023px`) panel tam genişlik.
     */
    fullOnMobile: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    initialFocus: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:open", "after-leave"],
  data() {
    const e = dl();
    return {
      titleId: `ui-sheet-title-${e}`,
      descriptionId: `ui-sheet-desc-${e}`,
      portalReady: !1,
      focusFallbackTimer: null,
      rootZIndex: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? (this.acquireLayer(), this.scheduleInitialFocus()) : (this.releaseLayer(), this.clearFocusFallback());
      },
      flush: "post"
    }
  },
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.releaseLayer(), this.clearFocusFallback();
  },
  computed: {
    resolvedIconType() {
      return K(this.uiDefaults, this.iconType);
    },
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append || this.showClose);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    sizeClass() {
      return ze[this.size] || ze.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return S(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.fullOnMobile ? "ui-sheet-panel--full-mobile" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return Be(this.$attrs, ["class"]);
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== "") return this.titleId;
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== "") return this.descriptionId;
    },
    ariaLabelAttr() {
      if (!this.ariaLabelledby && this.ariaLabel != null && this.ariaLabel !== "")
        return this.ariaLabel;
    },
    resolvedCloseLabel() {
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : M(this, "ui.dialog.close", "Close");
    },
    rootLayerStyle() {
      if (this.rootZIndex != null)
        return { zIndex: String(this.rootZIndex) };
    },
    rootLayerClasses() {
      return S(
        "ui-sheet-root fixed inset-0 flex outline-none",
        this.side === "left" ? "justify-start" : "justify-end",
        !this.overlay && "ui-sheet-root--no-overlay"
      );
    }
  },
  methods: {
    acquireLayer() {
      this.rootZIndex == null && (this.rootZIndex = it(this, "modal", () => this.close()));
    },
    releaseLayer() {
      this.rootZIndex != null && (tt(this), this.rootZIndex = null);
    },
    close() {
      this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.overlay && this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      e.key === "Escape" && this.closeOnEscape && (e.stopPropagation(), this.close());
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    onOverlayAfterLeave() {
      this.$emit("after-leave");
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      this.clearFocusFallback(), !(!this.initialFocus || !this.open) && this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) return;
        Ne(e) || (this.focusFallbackTimer = setTimeout(() => {
          var i;
          this.focusFallbackTimer = null, (i = e.focus) == null || i.call(e);
        }, 50));
      });
    }
  }
}, pl = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], gl = {
  key: 0,
  class: "ui-card-header shrink-0"
}, yl = ["id"], bl = {
  key: 1,
  class: "ui-sheet-header__icon"
}, vl = {
  key: 2,
  class: "ui-sheet-header__actions"
}, _l = ["id"], kl = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function wl(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("Divider");
  return n.portalReady ? (a(), b(Z, {
    key: 0,
    to: e.portalTarget
  }, [
    w(X, {
      name: t.transitionName,
      appear: "",
      onAfterEnter: t.onOverlayAfterEnter,
      onAfterLeave: t.onOverlayAfterLeave
    }, {
      default: y(() => [
        i.open ? (a(), l("div", {
          key: 0,
          ref: "layerRef",
          class: _(t.rootLayerClasses),
          style: E(t.rootLayerStyle),
          tabindex: "-1",
          role: "presentation",
          onKeydown: r[2] || (r[2] = (...h) => t.onLayerKeydown && t.onLayerKeydown(...h))
        }, [
          i.overlay ? (a(), l("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...h) => t.onBackdrop && t.onBackdrop(...h))
          })) : f("", !0),
          c("div", L({
            ref: "panelRef",
            class: t.panelClasses,
            role: "dialog",
            "aria-modal": i.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": t.ariaLabelledby,
            "aria-describedby": t.ariaDescribedby,
            "aria-label": t.ariaLabelAttr
          }, t.passthroughAttrs, {
            onClick: r[1] || (r[1] = D(() => {
            }, ["stop"]))
          }), [
            t.hasHeaderBlock ? (a(), l("div", gl, [
              g(e.$slots, "header", {}, () => [
                t.hasDefaultHeader ? (a(), l("div", {
                  key: 0,
                  class: _(["ui-sheet-header", { "ui-sheet-header--no-icon": !i.icon }])
                }, [
                  i.title ? (a(), l("h3", {
                    key: 0,
                    id: n.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(i.title), 9, yl)) : f("", !0),
                  i.icon ? (a(), l("span", bl, [
                    w(u, {
                      name: i.icon,
                      type: t.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), l("div", vl, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (a(), b(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": t.resolvedCloseLabel,
                    onClick: t.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  i.description ? (a(), l("p", {
                    key: 4,
                    id: n.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(i.description), 9, _l)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), l("div", kl, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            t.showHeaderDivider ? (a(), b(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), l("div", {
              key: 3,
              class: _(["ui-card-body ui-text-default", {
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), l("div", {
              key: 4,
              class: _(["ui-card-footer", { "ui-sheet-footer--borderless": !i.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, pl)
        ], 38)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to"])) : f("", !0);
}
const xl = /* @__PURE__ */ k(ml, [["render", wl]]), Sl = ["sm", "md", "lg"], Cl = ["button", "submit", "reset"], Me = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Pe = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Tl = {
  name: "SidebarItem",
  mixins: [O],
  components: { RouterLink: ri },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => Cl.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Sl.includes(e)
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    cubed: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    },
    textAlign: {
      type: String,
      default: "center",
      validator: (e) => e === "left" || e === "center"
    }
  },
  emits: ["click"],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== "";
    },
    resolvedSize() {
      return Oe(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
    },
    hasRenderableDefaultSlot() {
      const e = this.$slots.default;
      return e ? e().some((r) => this.isRenderableVNode(r)) : !1;
    },
    inlineIconSize() {
      return this.resolvedSize === "lg" ? "md" : (this.resolvedSize === "md", "sm");
    },
    cubedIconSize() {
      return { sm: "sm", md: "md", lg: "md" }[this.resolvedSize] || "md";
    },
    isBlock() {
      return this.block;
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center";
      return this.isBlock ? S("ui-sidebar-item-text min-w-0 flex-1 truncate", e) : S("ui-sidebar-item-text whitespace-nowrap", e);
    },
    forwardedAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    },
    itemClasses() {
      const e = this.cubed ? Pe[this.resolvedSize] || Pe.md : Me[this.resolvedSize] || Me.md;
      return S(
        "ui-sidebar-item font-sans",
        this.active && "ui-sidebar-item--active",
        this.cubed && "ui-sidebar-item--cubed",
        this.isBlock && "ui-sidebar-item--block w-full",
        e,
        this.disabled && "cursor-not-allowed opacity-50",
        this.hasRouterTo && "inline-flex items-center",
        this.$attrs.class
      );
    }
  },
  methods: {
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === ei) return !1;
      if (e.type === ti)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === I) {
        const r = e.children;
        return Array.isArray(r) ? r.some((i) => this.isRenderableVNode(i)) : !1;
      }
      return !0;
    },
    onClick(e) {
      this.disabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, r) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), !e.defaultPrevented && r(e);
    }
  }
}, Ll = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], Il = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Al = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, zl = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ml = ["type", "disabled", "aria-current"], Pl = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, El = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Dl = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Ol(e, r, i, s, n, t) {
  const u = v("ui-icon"), d = v("RouterLink");
  return t.hasRouterTo ? (a(), b(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: y(({ href: o, navigate: h }) => [
      c("a", L({
        href: o,
        class: t.itemClasses,
        "aria-current": i.active ? "page" : void 0,
        "aria-disabled": i.disabled ? "true" : void 0,
        tabindex: i.disabled ? -1 : void 0
      }, t.forwardedAttrs, {
        onClick: (p) => t.onRouterLinkClick(p, h)
      }), [
        t.usesCubedCenterLayout ? (a(), l("span", Il, [
          i.prefixIcon ? (a(), b(u, {
            key: 0,
            size: t.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (a(), b(u, {
            key: 1,
            size: t.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (a(), l(I, { key: 1 }, [
          i.prefixIcon ? (a(), l("span", Al, [
            w(u, {
              size: t.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          c("span", {
            class: _(t.textContentClass)
          }, [
            g(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (a(), l("span", zl, [
            w(u, {
              size: t.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 16, Ll)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), l("button", L({
    key: 1,
    type: i.nativeType,
    class: t.itemClasses,
    disabled: i.disabled || void 0,
    "aria-current": i.active ? "page" : void 0
  }, t.forwardedAttrs, {
    onClick: r[0] || (r[0] = (...o) => t.onClick && t.onClick(...o))
  }), [
    t.usesCubedCenterLayout ? (a(), l("span", Pl, [
      i.prefixIcon ? (a(), b(u, {
        key: 0,
        size: t.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (a(), b(u, {
        key: 1,
        size: t.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (a(), l(I, { key: 1 }, [
      i.prefixIcon ? (a(), l("span", El, [
        w(u, {
          size: t.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      c("span", {
        class: _(t.textContentClass)
      }, [
        g(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (a(), l("span", Dl, [
        w(u, {
          size: t.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 16, Ml));
}
const Vl = /* @__PURE__ */ k(Tl, [["render", Ol]]), Rl = $("ui-slider"), Bl = {
  name: "Slider",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ""
    },
    /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
    valueText: {
      type: String,
      default: ""
    },
    minLabel: {
      type: String,
      default: ""
    },
    maxLabel: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change"],
  data() {
    return { fallbackId: Rl() };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return S("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
    },
    fillPercent() {
      const e = Number(this.max) - Number(this.min);
      if (e <= 0 || !Number.isFinite(Number(this.modelValue)))
        return 0;
      const r = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, r));
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "id",
        "type",
        "value",
        "min",
        "max",
        "step",
        "disabled"
      ]), r = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
      return r;
    }
  },
  methods: {
    onNativeInput(e) {
      const r = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(r) ? this.min : r), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, Fl = {
  key: 0,
  class: "ui-slider-header"
}, Nl = {
  key: 0,
  class: "ui-form-label"
}, $l = {
  key: 1,
  class: "ui-slider-value"
}, Hl = { class: "ui-slider-rail" }, Ul = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Wl = {
  key: 1,
  class: "ui-slider-scale"
}, Yl = { key: 0 }, Gl = { key: 1 };
function ql(e, r, i, s, n, t) {
  const u = v("ui-progress");
  return a(), l("div", {
    class: _(t.rootClass)
  }, [
    i.label || t.hasValue ? (a(), l("div", Fl, [
      i.label ? (a(), l("span", Nl, m(i.label), 1)) : f("", !0),
      t.hasValue ? (a(), l("span", $l, m(i.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", Hl, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: t.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", L(t.passthroughAttrs, {
        id: t.resolvedId,
        value: i.modelValue,
        type: "range",
        class: "ui-slider-input",
        min: i.min,
        max: i.max,
        step: i.step,
        disabled: i.disabled,
        "aria-valuemin": i.min,
        "aria-valuemax": i.max,
        "aria-valuenow": i.modelValue,
        "aria-valuetext": i.valueText || String(i.modelValue),
        "aria-describedby": i.ariaDescribedby,
        onInput: r[0] || (r[0] = (...d) => t.onNativeInput && t.onNativeInput(...d)),
        onChange: r[1] || (r[1] = (...d) => t.onChange && t.onChange(...d))
      }), null, 16, Ul)
    ]),
    i.minLabel || i.maxLabel ? (a(), l("div", Wl, [
      i.minLabel ? (a(), l("span", Yl, m(i.minLabel), 1)) : f("", !0),
      i.maxLabel ? (a(), l("span", Gl, m(i.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const Kl = /* @__PURE__ */ k(Bl, [["render", ql]]), jl = B, Zl = ["primary", "secondary", "success", "warning", "info", "danger"], Xl = ["soft", "surface"], Ee = {
  sm: "ui-display-sm",
  md: "ui-display-md",
  lg: "ui-display-lg"
}, Ql = {
  name: "Stat",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: H,
    /** Başlık ikonu tonu */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || Zl.includes(e)
    },
    /** Yüzde değişim; `undefined` satırı gizler, `null` yerini korur */
    change: {
      type: Number,
      default: void 0
    },
    /** Hazır değişim metni (biçimlendirmeyi geçersiz kılar), ör. “Yeni dönem” */
    changeText: {
      type: String,
      default: ""
    },
    /** Değişimin yanındaki nötr açıklama, ör. “(₺1.250)” veya “dünden” */
    changeLabel: {
      type: String,
      default: ""
    },
    /** Azalış iyi (gider, iptal, bekleme süresi) */
    invertTrend: {
      type: Boolean,
      default: !1
    },
    /** `soft`: kart içi dolgulu kutu · `surface`: sayfa üzerinde kart yüzeyi */
    variant: {
      type: String,
      default: "soft",
      validator: (e) => Xl.includes(e)
    },
    /** Değer ölçüsü: sm 18px · md 20px · lg 24px */
    size: {
      type: String,
      default: "lg",
      validator: (e) => jl.includes(e)
    },
    /** Kart tıklanabilir (`click` yayar; Enter / Space ile de çalışır) */
    interactive: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    rootClass() {
      return S(
        "ui-stat",
        this.variant === "surface" ? "ui-surface ui-stat--surface" : "",
        this.interactive ? "ui-stat--interactive" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, onClick: r, ...i } = this.$attrs;
      return i;
    },
    valueClass() {
      return S("ui-stat-value", Ee[this.size] || Ee.lg);
    },
    numericChange() {
      if (this.change == null) return null;
      const e = Number(this.change);
      return Number.isFinite(e) ? e : null;
    },
    showChangeRow() {
      return this.change !== void 0 || !!this.changeText;
    },
    hasChangeContent() {
      return !!this.changeText || this.numericChange != null;
    },
    trend() {
      const e = this.numericChange;
      return e == null || e === 0 ? "neutral" : e > 0 !== this.invertTrend ? "positive" : "negative";
    },
    changeIcon() {
      const e = this.numericChange;
      return e == null || e === 0 ? "" : e > 0 ? "chart-line-up" : "chart-line-down";
    },
    changeDisplay() {
      var s;
      if (this.changeText) return this.changeText;
      const e = this.numericChange;
      if (e == null) return "";
      const r = ((s = this.$i18n) == null ? void 0 : s.locale) || void 0;
      return `${new Intl.NumberFormat(r, {
        maximumFractionDigits: 1,
        signDisplay: "exceptZero"
      }).format(e)}%`;
    },
    changeClass() {
      return S(
        "ui-stat-change",
        `ui-stat-change--${this.trend}`,
        this.hasChangeContent ? "" : "invisible"
      );
    }
  },
  methods: {
    onActivate(e) {
      !this.interactive || this.loading || this.$emit("click", e);
    }
  }
}, Jl = ["role", "tabindex", "aria-busy"], eo = {
  key: 0,
  class: "ui-stat-value-skeleton"
}, to = {
  key: 1,
  class: "ui-stat-change-label"
}, io = {
  key: 3,
  class: "ui-stat-body"
}, ro = {
  key: 4,
  class: "ui-stat-footer"
};
function ao(e, r, i, s, n, t) {
  const u = v("ui-skeleton"), d = v("ui-icon"), o = v("ui-field");
  return a(), l("div", L({
    class: t.rootClass,
    role: i.interactive ? "button" : void 0,
    tabindex: i.interactive ? 0 : void 0,
    "aria-busy": i.loading ? "true" : void 0
  }, t.passthroughAttrs, {
    onClick: r[0] || (r[0] = (...h) => t.onActivate && t.onActivate(...h)),
    onKeydown: [
      r[1] || (r[1] = j(D((...h) => t.onActivate && t.onActivate(...h), ["prevent"]), ["enter"])),
      r[2] || (r[2] = j(D((...h) => t.onActivate && t.onActivate(...h), ["prevent"]), ["space"]))
    ]
  }), [
    w(o, {
      card: i.variant === "soft",
      fill: "",
      title: i.title,
      icon: i.icon,
      "icon-type": i.iconType,
      "icon-tone": i.color || void 0
    }, {
      default: y(() => [
        i.loading ? (a(), l("span", eo, [
          w(u, {
            variant: "line",
            size: "md"
          })
        ])) : (a(), l("p", {
          key: 1,
          class: _(t.valueClass)
        }, [
          g(e.$slots, "value", {}, () => [
            T(m(i.value), 1)
          ])
        ], 2)),
        t.showChangeRow ? (a(), l("p", {
          key: 2,
          class: _(t.changeClass)
        }, [
          t.hasChangeContent ? (a(), l(I, { key: 0 }, [
            t.changeIcon ? (a(), b(d, {
              key: 0,
              name: t.changeIcon,
              size: "xs",
              "aria-hidden": "true"
            }, null, 8, ["name"])) : f("", !0),
            c("span", null, m(t.changeDisplay), 1),
            i.changeLabel ? (a(), l("span", to, m(i.changeLabel), 1)) : f("", !0)
          ], 64)) : (a(), l(I, { key: 1 }, [
            T(m(" "))
          ], 64))
        ], 2)) : f("", !0),
        e.$slots.default ? (a(), l("div", io, [
          g(e.$slots, "default")
        ])) : f("", !0),
        e.$slots.footer ? (a(), l("div", ro, [
          g(e.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["card", "title", "icon", "icon-type", "icon-tone"])
  ], 16, Jl);
}
const so = /* @__PURE__ */ k(Ql, [["render", ao]]), no = [1, 2, 3, 4], lo = {
  name: "StatGroup",
  inheritAttrs: !1,
  props: {
    /** Geniş ekrandaki en fazla sütun sayısı */
    columns: {
      type: Number,
      default: 3,
      validator: (e) => no.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return S("ui-stat-group", `ui-stat-group--cols-${this.columns}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, oo = ["aria-label"];
function uo(e, r, i, s, n, t) {
  return a(), l("div", L({
    class: t.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, oo);
}
const co = /* @__PURE__ */ k(lo, [["render", uo]]), ho = {
  name: "Step",
  props: {
    /** Adım paneli görünür mü */
    active: {
      type: Boolean,
      default: !1
    },
    /** Görünür olduğunda ilk form alanına odaklan (dialog içinde toolbar birincil alanı dahil) */
    autofocus: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    active(e, r) {
      e && r === !1 && this.scheduleFocus();
    }
  },
  methods: {
    resolveFocusRoot() {
      const e = this.$refs.root;
      return e instanceof HTMLElement ? e.closest(".ui-dialog-panel") || e.closest(".ui-sheet-panel") || e.closest(".ui-card") || e : null;
    },
    scheduleFocus() {
      !this.autofocus || !this.active || Re() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Ne(e);
        });
      });
    }
  }
}, fo = {
  ref: "root",
  class: "ui-step"
};
function mo(e, r, i, s, n, t) {
  return He((a(), l("div", fo, [
    g(e.$slots, "default")
  ], 512)), [
    [Ue, i.active]
  ]);
}
const po = /* @__PURE__ */ k(ho, [["render", mo]]), go = ["horizontal", "vertical"], yo = ["default", "pills"], bo = {
  name: "Stepper",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: !0
    },
    /**
     * `default` — daire + başlık (yatay / dikey).
     * `pills` — hap ilerleme + `2/5 - Adım` etiketi (modal / kayıt formları için tercih).
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => yo.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => go.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    /** `pills` varyantında sağdaki `1/5 - Adım` metni */
    showLabel: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((r) => ({
        title: (r == null ? void 0 : r.title) ?? "",
        description: (r == null ? void 0 : r.description) ?? "",
        icon: (r == null ? void 0 : r.icon) ?? null,
        iconType: (r == null ? void 0 : r.iconType) ?? K(this.uiDefaults, void 0)
      }));
    },
    rootClass() {
      return S(
        "ui-stepper",
        this.variant === "pills" && "ui-stepper--pills",
        this.variant === "default" && this.direction === "vertical" && "ui-stepper--vertical",
        this.variant === "default" && this.direction === "horizontal" && "ui-stepper--horizontal",
        this.$attrs.class
      );
    },
    currentStep() {
      const e = Math.min(this.normalizedSteps.length - 1, Math.max(0, this.modelValue));
      return this.normalizedSteps[e] ?? { title: "" };
    },
    pillsLabel() {
      const e = this.normalizedSteps.length;
      return `${Math.min(e, Math.max(1, this.modelValue + 1))}/${e} - ${this.currentStep.title}`;
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const r = this.normalizedSteps.length - 1, i = Math.min(r, Math.max(0, e));
      this.$emit("update:modelValue", i);
    },
    pillClass(e) {
      const r = this.modelValue;
      return e < r ? "ui-stepper-pill--complete" : e === r ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const r = this.modelValue;
      return e < r ? "ui-stepper-indicator--complete" : e === r ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
    },
    railBeforeClass(e) {
      return this.modelValue >= e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    railAfterClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    verticalRailClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    }
  }
}, vo = ["aria-label"], _o = { class: "ui-stepper-pills-track" }, ko = {
  key: 0,
  class: "ui-stepper-pills-label"
}, wo = { class: "flex w-full min-w-0 items-center justify-center" }, xo = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, So = {
  key: 1,
  class: "tabular-nums"
}, Co = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, To = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Lo = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Io = { class: "flex flex-col items-center" }, Ao = {
  key: 1,
  class: "tabular-nums"
}, zo = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Mo = { class: "ui-stepper-title" }, Po = {
  key: 0,
  class: "ui-stepper-description"
};
function Eo(e, r, i, s, n, t) {
  const u = v("ui-icon");
  return a(), l("div", L({
    class: t.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, t.passthroughAttrs), [
    i.variant === "pills" ? (a(), l(I, { key: 0 }, [
      c("div", _o, [
        (a(!0), l(I, null, P(t.normalizedSteps, (d, o) => (a(), b(Y(i.interactive ? "button" : "span"), L({
          key: o,
          class: ["ui-stepper-pill", t.pillClass(o)],
          role: "listitem",
          "aria-current": o === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (a(), l("p", ko, m(t.pillsLabel), 1)) : f("", !0)
    ], 64)) : i.direction === "horizontal" ? (a(!0), l(I, { key: 1 }, P(t.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", wo, [
        o > 0 ? (a(), l("span", {
          key: 0,
          class: _(["ui-stepper-rail ui-stepper-rail--h", t.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", xo)),
        (a(), b(Y(i.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(o)],
          "aria-current": o === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(o) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", So, m(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < t.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 2,
          class: _(["ui-stepper-rail ui-stepper-rail--h", t.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", Co))
      ]),
      c("p", To, m(d.title), 1),
      d.description ? (a(), l("p", Lo, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), l(I, { key: 2 }, P(t.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Io, [
        (a(), b(Y(i.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(o)],
          "aria-current": o === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(o) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", Ao, m(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < t.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 0,
          class: _(["ui-stepper-vrail", t.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", zo, [
        c("p", Mo, m(d.title), 1),
        d.description ? (a(), l("p", Po, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, vo);
}
const Do = /* @__PURE__ */ k(bo, [["render", Eo]]), Oo = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return S("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Vo = { class: "ui-table-scroll" };
function Ro(e, r, i, s, n, t) {
  return a(), l("div", Vo, [
    c("table", L({ class: t.rootClass }, t.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const Bo = /* @__PURE__ */ k(Oo, [["render", Ro]]), Fo = {
  name: "TableBody"
}, No = { class: "ui-table-body" };
function $o(e, r, i, s, n, t) {
  return a(), l("tbody", No, [
    g(e.$slots, "default")
  ]);
}
const Ho = /* @__PURE__ */ k(Fo, [["render", $o]]), Uo = ["left", "center", "right"], Wo = ["title", "secondary", "body"], Yo = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Uo.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Wo.includes(e)
    },
    iconCol: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-cell",
        this.iconCol && "ui-table-cell--icon-col",
        this.empty && "ui-table-cell--empty",
        this.align === "center" && "ui-table-cell--align-center",
        this.align === "right" && "ui-table-cell--align-end",
        this.tone === "title" && "ui-table-cell--tone-title",
        this.tone === "secondary" && "ui-table-cell--tone-secondary",
        this.tone === "body" && "ui-table-cell--tone-body",
        this.$attrs.class
      );
    }
  }
}, Go = ["colspan"];
function qo(e, r, i, s, n, t) {
  return a(), l("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, Go);
}
const Ko = /* @__PURE__ */ k(Yo, [["render", qo]]), jo = ["left", "center", "right"], Zo = ["sm", "md", "lg"], Xo = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => jo.includes(e)
    },
    width: {
      type: String,
      default: ""
    },
    iconCol: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-head",
        this.iconCol && "ui-table-head--icon-col",
        this.align === "center" && "ui-table-head--align-center",
        this.align === "right" && "ui-table-head--align-end",
        !this.iconCol && this.width === "sm" && "ui-table-head--w-sm",
        !this.iconCol && this.width === "md" && "ui-table-head--w-md",
        !this.iconCol && this.width === "lg" && "ui-table-head--w-lg",
        this.$attrs.class
      );
    },
    widthStyle() {
      if (!(this.iconCol || Zo.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Qo(e, r, i, s, n, t) {
  return a(), l("th", {
    class: _(t.rootClass),
    style: E(t.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const Jo = /* @__PURE__ */ k(Xo, [["render", Qo]]), eu = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function tu(e, r, i, s, n, t) {
  return a(), l("thead", {
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const iu = /* @__PURE__ */ k(eu, [["render", tu]]), ru = {
  name: "TablePagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    lastPage: {
      type: Number,
      default: 1
    },
    metaText: {
      type: String,
      default: ""
    },
    pageLabel: {
      type: String,
      default: ""
    },
    prevAriaLabel: {
      type: String,
      default: ""
    },
    nextAriaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["prev", "next"],
  computed: {
    canPrev() {
      return this.currentPage > 1;
    },
    canNext() {
      return this.currentPage < this.lastPage;
    }
  }
}, au = { class: "ui-table-pagination" }, su = { class: "ui-table-pagination-meta" }, nu = { class: "ui-table-pagination-nav" }, lu = { class: "ui-table-pagination-page" };
function ou(e, r, i, s, n, t) {
  const u = v("ui-button");
  return a(), l("div", au, [
    c("div", su, [
      g(e.$slots, "meta", {}, () => [
        T(m(i.metaText), 1)
      ])
    ]),
    c("div", nu, [
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !t.canPrev,
        "aria-label": i.prevAriaLabel,
        onClick: r[0] || (r[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", lu, m(i.pageLabel), 1),
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !t.canNext,
        "aria-label": i.nextAriaLabel,
        onClick: r[1] || (r[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const uu = /* @__PURE__ */ k(ru, [["render", ou]]), du = ["none", "soft", "strong"], cu = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || du.includes(e)
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-row",
        this.hover === "none" && "ui-table-row--no-hover",
        this.hover === "soft" && "ui-table-row--soft-hover",
        this.hover === "strong" && "ui-table-row--strong-hover",
        this.interactive && "ui-table-row--interactive",
        this.clickable && "ui-table-row--clickable",
        this.selected && "ui-table-row--selected",
        this.$attrs.class
      );
    }
  }
};
function hu(e, r, i, s, n, t) {
  return a(), l("tr", {
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const fu = /* @__PURE__ */ k(cu, [["render", hu]]), mu = {
  name: "TabPanel",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: !0
    }
  },
  computed: {
    isActive() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelClass() {
      return S("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, pu = ["id", "aria-labelledby"];
function gu(e, r, i, s, n, t) {
  return He((a(), l("div", L({
    role: "tabpanel",
    id: t.panelDomId,
    "aria-labelledby": t.triggerDomId,
    class: t.panelClass
  }, t.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, pu)), [
    [Ue, t.isActive]
  ]);
}
const yu = /* @__PURE__ */ k(mu, [["render", gu]]), De = Symbol("uiThemeMode"), bu = {
  name: "ThemeProvider",
  inject: {
    parentDefaults: { from: _e, default: () => ve },
    parentMode: { from: De, default: null }
  },
  provide() {
    return {
      [_e]: this.providedDefaults,
      [De]: ii(() => this.resolvedMode),
      [nt]: () => this.$refs.portal || null
    };
  },
  props: {
    /** Kayıtlı tema id'si veya `defineTheme` paketi; verilmezse yalnızca mod / override uygulanır. */
    theme: { type: [String, Object], default: null },
    /** `light` | `dark`; verilmezse üst provider veya belge kökü. */
    mode: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "light" || e === "dark"
    },
    /** Token override'ları — düz harita veya `{ light, dark }`. */
    overrides: { type: Object, default: null },
    /** Bileşen varsayılanı override'ları (`iconType`, `buttonRounded`, …). */
    defaults: { type: Object, default: null },
    /** Kökte `--background` dolgusu. */
    background: { type: Boolean, default: !1 },
    tag: { type: String, default: "div" }
  },
  data() {
    return {
      documentDark: !1,
      providedDefaults: fe({ ...ve })
    };
  },
  computed: {
    pkg() {
      return this.theme ? $e(this.theme) : null;
    },
    themeId() {
      var e;
      return ((e = this.pkg) == null ? void 0 : e.id) ?? null;
    },
    resolvedMode() {
      var e;
      return this.mode ? this.mode : (e = this.parentMode) != null && e.value ? this.parentMode.value : this.documentDark ? "dark" : "light";
    },
    cssVars() {
      return { ...this.pkg ? at(this.pkg, this.resolvedMode) : {}, ...st(this.overrides, this.resolvedMode) };
    },
    mergedDefaults() {
      var e;
      return rt({
        ...this.parentDefaults,
        ...(e = this.pkg) == null ? void 0 : e.defaults,
        ...this.defaults
      });
    }
  },
  watch: {
    mergedDefaults: {
      immediate: !0,
      handler(e) {
        Object.assign(this.providedDefaults, e);
      }
    }
  },
  mounted() {
    if (this.mode || this.parentMode || typeof document > "u") return;
    const e = document.documentElement;
    this.documentDark = e.classList.contains("dark"), this.modeObserver = new MutationObserver(() => {
      this.documentDark = e.classList.contains("dark");
    }), this.modeObserver.observe(e, { attributes: !0, attributeFilter: ["class"] });
  },
  beforeUnmount() {
    var e;
    (e = this.modeObserver) == null || e.disconnect();
  }
}, vu = {
  ref: "portal",
  class: "ui-theme-provider-portal"
};
function _u(e, r, i, s, n, t) {
  return a(), b(Y(i.tag), {
    class: _(["ui-theme-provider", { dark: t.resolvedMode === "dark", "ui-theme-provider--background": i.background }]),
    "data-ui-theme": t.themeId,
    "data-ui-mode": t.resolvedMode,
    "data-ui-density": t.mergedDefaults.density === "compact" ? "compact" : void 0,
    style: E(t.cssVars)
  }, {
    default: y(() => [
      c("div", vu, null, 512),
      g(e.$slots, "default", {
        mode: t.resolvedMode,
        theme: t.pkg
      })
    ]),
    _: 3
  }, 8, ["class", "data-ui-theme", "data-ui-mode", "data-ui-density", "style"]);
}
const ku = /* @__PURE__ */ k(bu, [["render", _u]]);
function W(e) {
  return String(e).padStart(2, "0");
}
function je(e, r = "HH:mm") {
  const i = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!i) return String(e || "");
  const s = Number(i[1]), n = Number(i[2]);
  if (!Number.isFinite(s) || !Number.isFinite(n))
    return String(e || "");
  if (r === "HH:mm")
    return `${W(s)}:${W(n)}`;
  if (r === "h:mm a" || r === "h:mm A") {
    const t = s >= 12 ? "PM" : "AM";
    return `${s % 12 || 12}:${W(n)} ${t}`;
  }
  return `${W(s)}:${W(n)}`;
}
function wu(e, r, i = "HH:mm") {
  return je(`${e}:${r}`, i);
}
const xu = $("ui-timepicker"), ue = 40;
function de(e) {
  return String(e).padStart(2, "0");
}
const Su = {
  name: "TimePicker",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    /** `HH:mm` (24 saat) */
    modelValue: {
      type: String,
      default: ""
    },
    /** Adım (dakika) */
    stepMinutes: {
      type: Number,
      default: 15
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * true: tetikleyici/popover yok — tekerlek panelini doğrudan yerleştir.
     */
    embedded: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    /** `ui-popover` panel genişliği — dar zaman seçici için */
    popoverWidth: {
      type: [String, Number],
      default: "12.5rem"
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      fallbackId: xu(),
      menuOpen: !1,
      draftHour: 0,
      draftMinute: 0,
      wheelSyncing: !1,
      _hourScrollTimer: null,
      _minuteScrollTimer: null,
      _wheelUnsub: null
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hourOptions() {
      return Array.from({ length: 24 }, (e, r) => r);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), r = [];
      for (let i = 0; i < 60; i += e)
        r.push(i);
      return r;
    },
    hasValue() {
      return this.modelValue != null && this.modelValue !== "";
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : M(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return M(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return M(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Ve(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? wu(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? je(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
    },
    supportsScrollEnd() {
      return typeof window > "u" ? !1 : "onscrollend" in window;
    }
  },
  watch: {
    menuOpen(e) {
      e ? (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      })) : this.unbindWheelListeners();
    },
    embedded: {
      immediate: !0,
      handler(e) {
        e && (this.applyModelToDraft(), this.$nextTick(() => {
          this.$nextTick(() => {
            this.scrollWheelsToDraft(), this.bindWheelListeners();
          });
        }));
      }
    },
    stepMinutes() {
      (this.menuOpen || this.embedded) && (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      }));
    }
  },
  mounted() {
    this.embedded && (this.applyModelToDraft(), this.$nextTick(() => {
      this.$nextTick(() => {
        this.scrollWheelsToDraft(), this.bindWheelListeners();
      });
    }));
  },
  beforeUnmount() {
    clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer), this.unbindWheelListeners();
  },
  methods: {
    pad2: de,
    applyModelToDraft() {
      const e = this.modelValue;
      let r = 0, i = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (r = Math.min(23, Math.max(0, parseInt(s[1], 10))), i = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const n = this.minuteValues;
      let t = n[0] ?? 0, u = 999;
      for (const d of n) {
        const o = Math.abs(d - i);
        o < u && (u = o, t = d);
      }
      this.draftHour = r, this.draftMinute = t;
    },
    wheelItemHeight(e) {
      if (!e) return ue;
      const r = e.querySelector(".ui-timepicker-wheel-item");
      if (!r) return ue;
      const i = r.getBoundingClientRect().height;
      return i > 0 ? i : ue;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const r = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!r) return (e.clientHeight - i) / 2;
      const s = parseFloat(window.getComputedStyle(r).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, r) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), n = e.scrollTop + e.clientHeight / 2, t = Math.round((n - s - i / 2) / i);
      return Math.min(r, Math.max(0, t));
    },
    scrollTopForIndex(e, r) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + r * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, r, { smooth: i = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, r);
      i && typeof e.scrollTo == "function" ? e.scrollTo({ top: s, behavior: "smooth" }) : e.scrollTop = s;
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let i = this.minuteValues.indexOf(this.draftMinute);
      i === -1 && (i = 0), this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, i), requestAnimationFrame(() => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, i), requestAnimationFrame(() => {
          this.wheelSyncing = !1;
        });
      });
    },
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    selectMinute(e) {
      const r = this.minuteValues;
      if (!r.length) return;
      const i = Math.min(r.length - 1, Math.max(0, e));
      this.draftMinute = r[i], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, i, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, r = this.$refs.minuteWheel;
      !e || !r || (this.supportsScrollEnd ? (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), r.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scrollend", this.onHourScrollEnd), r.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), r.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scrollend", this.onHourScrollEnd), r.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), r.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), r.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), r.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scroll", this.onHourScrollDebounced), r.removeEventListener("scroll", this.onMinuteScrollDebounced);
      }));
    },
    unbindWheelListeners() {
      typeof this._wheelUnsub == "function" && (this._wheelUnsub(), this._wheelUnsub = null), clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer);
    },
    onHourScrollLive() {
      if (this.wheelSyncing) return;
      const e = this.$refs.hourWheel;
      e && (this.draftHour = this.indexFromScroll(e, 23));
    },
    onMinuteScrollLive() {
      if (this.wheelSyncing) return;
      const e = this.$refs.minuteWheel, r = this.minuteValues;
      if (!e || !r.length) return;
      const i = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[i];
    },
    onHourScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this._hourScrollTimer = setTimeout(() => this.finalizeHourScroll(), 240));
    },
    onMinuteScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this._minuteScrollTimer = setTimeout(() => this.finalizeMinuteScroll(), 240));
    },
    onHourScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this.finalizeHourScroll());
    },
    onMinuteScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this.finalizeMinuteScroll());
    },
    emitDraft() {
      const e = `${de(this.draftHour)}:${de(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.indexFromScroll(e, 23);
      this.draftHour = r;
      const i = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - i) > 0.5 && (e.scrollTop = i), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.minuteValues;
      if (!r.length) return;
      const i = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[i];
      const s = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, Cu = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Tu = { class: "ui-timepicker-wheels" }, Lu = { class: "ui-timepicker-wheels-row" }, Iu = ["aria-valuenow", "aria-label"], Au = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, zu = { class: "ui-timepicker-wheel-spacer" }, Mu = ["onClick"], Pu = ["aria-valuenow", "aria-label"], Eu = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Du = { class: "ui-timepicker-wheel-spacer" }, Ou = ["onClick"], Vu = { class: "min-w-0 flex-1 truncate text-foreground" }, Ru = { class: "ui-timepicker-panel w-full p-2" }, Bu = { class: "ui-timepicker-wheels" }, Fu = { class: "ui-timepicker-wheels-row" }, Nu = ["aria-valuenow", "aria-label"], $u = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Hu = { class: "ui-timepicker-wheel-spacer" }, Uu = ["onClick"], Wu = ["aria-valuenow", "aria-label"], Yu = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Gu = { class: "ui-timepicker-wheel-spacer" }, qu = ["onClick"];
function Ku(e, r, i, s, n, t) {
  const u = v("ui-button"), d = v("ui-popover");
  return a(), l("div", {
    class: _([
      "ui-timepicker",
      i.embedded ? "ui-timepicker--embedded" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (a(), l("div", Cu, [
      c("div", Tu, [
        r[2] || (r[2] = c("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        c("div", Lu, [
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": n.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": t.hourAriaLabel
          }, [
            c("div", Au, [
              c("div", zu, [
                (a(!0), l(I, null, P(t.hourOptions, (o) => (a(), l("button", {
                  key: "h-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => t.selectHour(o)
                }, m(t.pad2(o)), 11, Mu))), 128))
              ])
            ], 512)
          ], 8, Iu),
          r[1] || (r[1] = c("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": n.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": t.minuteAriaLabel
          }, [
            c("div", Eu, [
              c("div", Du, [
                (a(!0), l(I, null, P(t.minuteValues, (o, h) => (a(), l("button", {
                  key: "m-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => t.selectMinute(h)
                }, m(t.pad2(o)), 11, Ou))), 128))
              ])
            ], 512)
          ], 8, Pu)
        ]),
        r[3] || (r[3] = c("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        r[4] || (r[4] = c("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (a(), b(d, {
      key: 1,
      open: n.menuOpen,
      "onUpdate:open": r[0] || (r[0] = (o) => n.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: y(({ open: o, toggle: h, close: p }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: h,
          close: p
        }, () => [
          w(u, {
            type: "button",
            id: t.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: i.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              c("span", Vu, m(t.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        c("div", Ru, [
          c("div", Bu, [
            r[6] || (r[6] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", Fu, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": n.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": t.hourAriaLabel
              }, [
                c("div", $u, [
                  c("div", Hu, [
                    (a(!0), l(I, null, P(t.hourOptions, (o) => (a(), l("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => t.selectHour(o)
                    }, m(t.pad2(o)), 11, Uu))), 128))
                  ])
                ], 512)
              ], 8, Nu),
              r[5] || (r[5] = c("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": n.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": t.minuteAriaLabel
              }, [
                c("div", Yu, [
                  c("div", Gu, [
                    (a(!0), l(I, null, P(t.minuteValues, (o, h) => (a(), l("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => t.selectMinute(h)
                    }, m(t.pad2(o)), 11, qu))), 128))
                  ])
                ], 512)
              ], 8, Wu)
            ]),
            r[7] || (r[7] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            r[8] || (r[8] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
              "aria-hidden": "true"
            }, null, -1))
          ])
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"]))
  ], 2);
}
const ju = /* @__PURE__ */ k(Su, [["render", Ku]]), Zu = ["horizontal", "vertical"], Xu = {
  name: "Toolbar",
  inheritAttrs: !1,
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Zu.includes(e)
    },
    /** Yatay düzende sığmayan öğeler alt satıra kayar */
    wrap: {
      type: Boolean,
      default: !0
    },
    /** Verilirse `role="toolbar"` ile erişilebilir ad */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-toolbar",
        `ui-toolbar--${this.direction}`,
        this.wrap && this.direction === "horizontal" ? "ui-toolbar--wrap" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Qu = ["role", "aria-label"], Ju = {
  key: 0,
  class: "ui-toolbar-start"
}, ed = {
  key: 1,
  class: "ui-toolbar-main"
}, td = {
  key: 2,
  class: "ui-toolbar-end"
};
function id(e, r, i, s, n, t) {
  return a(), l("div", L({
    class: t.rootClass,
    role: i.ariaLabel ? "toolbar" : void 0,
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs), [
    e.$slots.start ? (a(), l("div", Ju, [
      g(e.$slots, "start")
    ])) : f("", !0),
    e.$slots.default ? (a(), l("div", ed, [
      g(e.$slots, "default")
    ])) : f("", !0),
    e.$slots.end ? (a(), l("div", td, [
      g(e.$slots, "end")
    ])) : f("", !0)
  ], 16, Qu);
}
const rd = /* @__PURE__ */ k(Xu, [["render", id]]);
function te(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function cd() {
  return {
    push: U,
    dismiss: ot,
    clear: lt,
    info: (e) => U({ ...te(e), color: "info" }),
    success: (e) => U({ ...te(e), color: "success" }),
    warning: (e) => U({ ...te(e), color: "warning" }),
    danger: (e) => U({ ...te(e), color: "danger" })
  };
}
function hd(e = !1) {
  return fe({
    open: !!e,
    show() {
      this.open = !0;
    },
    hide() {
      this.open = !1;
    },
    toggle() {
      this.open = !this.open;
    }
  });
}
function fd() {
  return {
    confirm: ut
  };
}
const he = {
  en: ht,
  tr: ct
};
function md(e = "tr") {
  return he[e] ?? he.tr;
}
const ad = [
  ["ui-action-card", ci],
  ["ui-action-card-list", pi],
  ["ui-action-group", ft],
  ["ui-ai-button", _i],
  ["ui-alert", mt],
  ["ui-avatar", pt],
  ["ui-avatar-group", Ti],
  ["ui-badge", gt],
  ["ui-button", yt],
  ["ui-card", bt],
  ["ui-checkbox", Oi],
  ["ui-checkbox-group", Hi],
  ["ui-chip-group", qi],
  ["ui-color-picker", ur],
  ["ui-confirm-dialog", vt],
  ["ui-currency-input", qe],
  ["ui-date-picker", _t],
  ["ui-date-range-picker", Dr],
  ["ui-dialog", kt],
  ["ui-divider", Fe],
  ["ui-dropdown", wt],
  ["ui-empty", xt],
  ["ui-field", Nr],
  ["ui-field-action", Jr],
  ["ui-file", ca],
  ["ui-filter-chip", ga],
  ["ui-form-row", St],
  ["ui-guidance", Wa],
  ["ui-icon", Ct],
  ["ui-icon-picker", as],
  ["ui-icon-tile", Tt],
  ["ui-input", Lt],
  ["ui-intro", vs],
  ["ui-list", It],
  ["ui-list-item", At],
  ["ui-menu", Ts],
  ["ui-menu-group", Ms],
  ["ui-menu-item", Ds],
  ["ui-menu-nav", Bs],
  ["ui-password", Gs],
  ["ui-phone", zt],
  ["ui-photo", ln],
  ["ui-photos", yn],
  ["ui-pin", Mt],
  ["ui-popover", Pt],
  ["ui-price-display", In],
  ["ui-price-display-group", Pn],
  ["ui-price-display-row", Bn],
  ["ui-price-input", Yn],
  ["ui-price-text", me],
  ["ui-progress", il],
  ["ui-radio", Et],
  ["ui-radio-group", Dt],
  ["ui-section", ul],
  ["ui-segment", Ot],
  ["ui-segment-group", Vt],
  ["ui-select", Rt],
  ["ui-sheet", xl],
  ["ui-sidebar-item", Vl],
  ["ui-skeleton", Bt],
  ["ui-slider", Kl],
  ["ui-stat", so],
  ["ui-stat-group", co],
  ["ui-step", po],
  ["ui-stepper", Do],
  ["ui-switch", Ft],
  ["ui-tab-list", Nt],
  ["ui-tab-panel", yu],
  ["ui-tab-trigger", $t],
  ["ui-table", Bo],
  ["ui-table-body", Ho],
  ["ui-table-cell", Ko],
  ["ui-table-head", Jo],
  ["ui-table-header", iu],
  ["ui-table-pagination", uu],
  ["ui-table-row", fu],
  ["ui-tabs", Ht],
  ["ui-tag", Ut],
  ["ui-theme-provider", ku],
  ["ui-time-picker", ju],
  ["ui-toast", Wt],
  ["ui-toolbar", rd],
  ["ui-tooltip", Yt]
];
let ie = null;
function sd(e, r = {}) {
  const i = $e(e);
  if (Gt(i.id) || qt(i), Kt(i, r), ie && (jt(ie, { ...i.defaults, ...r.defaults }), typeof document < "u")) {
    const s = typeof r.root == "string" ? document.querySelector(r.root) : r.root;
    Zt(s || document.documentElement, ie.density);
  }
  return i;
}
function nd(e, r = {}) {
  var x, A;
  const { i18n: i, locale: s, locales: n, theme: t, mode: u, overrides: d, inline: o, defaults: h, priceInput: p } = r;
  if (ie = dt(e, h), t && sd(t, { mode: u, overrides: d, inline: o, defaults: h }), p && $n(p), (x = i == null ? void 0 : i.global) != null && x.mergeLocaleMessage) {
    const C = n ?? (s != null ? [s] : [
      typeof i.global.locale == "string" ? i.global.locale : ((A = i.global.locale) == null ? void 0 : A.value) ?? "tr"
    ]);
    for (const z of C) {
      const V = he[z];
      V && i.global.mergeLocaleMessage(z, V);
    }
  }
  for (const [C, z] of ad)
    e.component(C, z);
}
const pd = {
  install: nd
};
export {
  ci as ActionCard,
  pi as ActionCardList,
  ft as ActionGroup,
  _i as AiButton,
  mt as Alert,
  pt as Avatar,
  Ti as AvatarGroup,
  bd as BACKDROP_BLUR_SCALE,
  ve as BASE_UI_DEFAULTS,
  gt as Badge,
  yt as Button,
  vd as CARD_PADDING_SCALE,
  B as CONTROL_SIZES,
  bt as Card,
  Oi as Checkbox,
  Hi as CheckboxGroup,
  qi as ChipGroup,
  ur as ColorPicker,
  vt as ConfirmDialog,
  qe as CurrencyInput,
  _d as DEFAULT_THEME_ID,
  kd as DERIVED_VARS,
  _t as DatePicker,
  Dr as DateRangePicker,
  kt as Dialog,
  Fe as Divider,
  wt as Dropdown,
  xt as Empty,
  wd as FEW_COLOR_SCALE,
  xd as FEW_PALETTE_ID,
  Sd as FEW_PRIMARY,
  Cd as FEW_PRIMARY_FOREGROUND,
  Nr as Field,
  Jr as FieldAction,
  ca as File,
  ga as FilterChip,
  St as FormRow,
  Td as GOOGLE_FONTS_CATALOG,
  Wa as Guidance,
  Ct as Icon,
  as as IconPicker,
  Tt as IconTile,
  Lt as Input,
  vs as Intro,
  It as List,
  At as ListItem,
  Ld as MIX_FROM_MAP,
  Ts as Menu,
  Ms as MenuGroup,
  Ds as MenuItem,
  Bs as MenuNav,
  Fn as PRICE_FORMATS,
  Gs as Password,
  zt as Phone,
  ln as Photo,
  yn as Photos,
  Mt as Pin,
  Pt as Popover,
  Yn as PriceInput,
  il as Progress,
  Et as Radio,
  Dt as RadioGroup,
  Ze as SCALE_SIZES,
  Id as SIZE_SCALE,
  Ad as STATUS_TONES,
  ul as Section,
  Ot as Segment,
  Vt as SegmentGroup,
  Rt as Select,
  xl as Sheet,
  Vl as SidebarItem,
  Bt as Skeleton,
  Kl as Slider,
  so as Stat,
  co as StatGroup,
  po as Step,
  Do as Stepper,
  Ft as Switch,
  zd as THEME_CUSTOM_CSS_ID,
  Md as TOAST_GROUP_WINDOW_MS,
  Pd as TOKEN_GROUPS,
  Nt as TabList,
  yu as TabPanel,
  $t as TabTrigger,
  Bo as Table,
  Ho as TableBody,
  Ko as TableCell,
  Jo as TableHead,
  iu as TableHeader,
  uu as TablePagination,
  fu as TableRow,
  Ht as Tabs,
  Ut as Tag,
  ku as ThemeProvider,
  ju as TimePicker,
  Wt as Toast,
  rd as Toolbar,
  Yt as Tooltip,
  _e as UI_DEFAULTS_KEY,
  Ed as UI_DENSITIES,
  Dd as UI_ICON_TYPES,
  Od as UI_KEYBOARD_INSET_EVENT,
  nt as UI_PORTAL_KEY,
  Vd as applyGoogleFontsCatalogPreview,
  Rd as applyGoogleFontsForTheme,
  Bd as applyThemeCustomCss,
  Zt as applyUiDensity,
  Kt as applyUiTheme,
  Fd as buildGoogleFontsLinkTag,
  Nd as buildGoogleFontsStylesheetUrl,
  $d as buildThemeCss,
  Hd as buildThemeEnforcementCss,
  Ud as buildThemeStyleAttr,
  Wd as clearThemeCustomCss,
  lt as clearToasts,
  Yd as clearUiTheme,
  Gd as computeThemeVars,
  qd as createUiId,
  $ as createUiIdFactory,
  pd as default,
  Kd as defineTheme,
  jd as deriveBrandColorsFromPrimary,
  ot as dismissToast,
  Zd as ensureContrastForMode,
  Xd as expandTokens,
  Qd as extendTheme,
  dd as formatCurrencyAmount,
  Jd as formatFontFamily,
  ec as formatGoogleFontFamilyName,
  cr as formatMoneyInput,
  We as getCurrencySymbol,
  tc as getFewPrimaryColors,
  Ge as getMoneySeparators,
  Hn as getPriceInputConfig,
  ic as getThemeCssPath,
  Gt as getThemePackage,
  md as getUiMessages,
  rc as googleFontSelectOptions,
  H as iconTypeProp,
  ac as isThemePackage,
  sc as listThemes,
  nc as mergeTokens,
  rt as mergeUiDefaults,
  lc as onVisibleViewportChange,
  oc as parseHex,
  dr as parseLocalizedMoneyInput,
  uc as parseOklchLightness,
  dc as pickContrastForeground,
  Be as pickPassthroughAttrs,
  dt as provideUiDefaults,
  U as pushToast,
  cc as readKeyboardInset,
  qt as registerTheme,
  hc as relativeLuminance,
  ut as requestConfirm,
  fc as resetUiIds,
  mc as resolveControlSize,
  le as resolveCurrencyCode,
  $e as resolveTheme,
  Oe as resolveThemeControlSize,
  Ve as resolveThemeDefault,
  pc as resolveThemeFontFamilies,
  K as resolveThemeIconType,
  at as resolveThemeVars,
  M as resolveUiText,
  Ye as sanitizeMoneyInput,
  $n as setPriceInputConfig,
  gc as setToastExpanded,
  jt as setUiDefaults,
  sd as setUiTheme,
  yc as setUiThemeMode,
  bc as themeConfigToTokens,
  ne as themeIconTypeComputed,
  vc as toCssVarName,
  _c as toggleToastExpanded,
  O as uiDefaultsMixin,
  et as uiPortalMixin,
  fd as useConfirm,
  hd as useDialog,
  cd as useToast,
  kc as useUiDefaults,
  wc as visibleViewportBottom,
  xc as withDerivedBrandTokens,
  Sc as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
