import { a4 as k, aF as Y, bk as R, bf as se, b3 as Ve, aj as S, S as Qe, f as F, ao as $, b8 as z, b4 as Be, af as fe, b9 as me, b0 as Je, v as et, aG as Fe, aA as tt, b6 as j, aR as Ne, ba as it, m as He, bl as rt, ax as $e, bj as at, aY as nt, aT as st, c as ke, $ as we, aK as lt, b7 as ot, b1 as ut, b2 as Ye, a3 as dt, ah as ct, ar as ht, aU as U, aZ as ft, aS as mt, bi as pt, as as gt, A as yt, a as bt, b as vt, d as _t, e as kt, g as wt, h as xt, k as St, l as Ct, n as Tt, E as Lt, r as It, I as At, s as Mt, t as zt, L as Pt, u as Dt, P as Et, w as Ot, x as Rt, R as Vt, y as Bt, J as Ft, K as Nt, N as Ht, O as $t, Q as Yt, V as Ut, W as Wt, X as Gt, Y as Kt, Z as qt, _ as jt, aD as Zt, aW as Xt, a9 as Qt, bc as Jt, a8 as ei } from "./custom-css-QrvKoHED.js";
import { B as Id, C as Ad, i as Md, j as zd, F as Pd, o as Dd, p as Ed, q as Od, G as Rd, M as Vd, z as Bd, H as Fd, D as Nd, T as Hd, U as $d, a0 as Yd, a1 as Ud, a2 as Wd, a5 as Gd, a6 as Kd, a7 as qd, aa as jd, ab as Zd, ac as Xd, ad as Qd, ae as Jd, ag as ec, ai as tc, ak as ic, al as rc, am as ac, an as nc, ap as sc, aq as lc, at as oc, au as uc, av as dc, aw as cc, ay as hc, az as fc, aB as mc, aC as pc, aE as gc, aH as yc, aI as bc, aJ as vc, aL as _c, aM as kc, aN as wc, aO as xc, aP as Sc, aQ as Cc, aV as Tc, aX as Lc, a_ as Ic, a$ as Ac, b5 as Mc, bb as zc, bd as Pc, be as Dc, bg as Ec, bh as Oc, bm as Rc, bn as Vc, bo as Bc, bp as Fc } from "./custom-css-QrvKoHED.js";
import { resolveComponent as v, openBlock as a, createElementBlock as l, normalizeClass as _, renderSlot as g, createVNode as w, createCommentVNode as f, createElementVNode as c, toDisplayString as p, createBlock as y, normalizeStyle as O, mergeProps as C, withCtx as b, withKeys as Z, withModifiers as E, createTextVNode as I, Fragment as T, renderList as P, createSlots as re, normalizeProps as ti, guardReactiveProps as ii, Teleport as X, Transition as Q, resolveDynamicComponent as G, readonly as ri, reactive as pe, Comment as ai, Text as ni, withDirectives as Ue, vShow as We, unref as si, computed as li } from "vue";
import { RouterLink as oi } from "vue-router";
const ui = {
  name: "ActionCard",
  mixins: [R],
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
    iconType: Y,
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
    ...se(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, di = ["disabled"], ci = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, hi = { class: "ui-action-card__content" }, fi = { class: "ui-action-card__title" }, mi = {
  key: 0,
  class: "ui-action-card__description"
};
function pi(e, i, t, n, s, r) {
  const u = v("ui-icon");
  return a(), l("button", {
    type: "button",
    class: _(["ui-action-card", { "ui-action-card--selected": t.selected }]),
    disabled: t.disabled,
    onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      r.showDefaultLeading ? (a(), l("span", ci, [
        w(u, {
          name: t.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("", !0)
    ]),
    c("span", hi, [
      c("span", fi, p(t.title), 1),
      t.description ? (a(), l("span", mi, p(t.description), 1)) : f("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      t.showTrailing ? (a(), y(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, di);
}
const gi = /* @__PURE__ */ k(ui, [["render", pi]]), yi = {
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
}, bi = ["aria-label"];
function vi(e, i, t, n, s, r) {
  return a(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": t.ariaLabel || void 0,
    style: O(r.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, bi);
}
const _i = /* @__PURE__ */ k(yi, [["render", vi]]), ki = {
  name: "AiButton",
  mixins: [R],
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
      const e = Ve(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, wi = ["data-size"], xi = { class: "ui-ai-button__surface" };
function Si(e, i, t, n, s, r) {
  const u = v("ui-button");
  return a(), l("span", {
    class: _(["ui-ai-button", {
      "ui-ai-button--block": r.isBlock,
      "ui-ai-button--disabled": t.disabled || t.loading
    }]),
    "data-size": r.resolvedSize,
    style: O(r.rootStyle)
  }, [
    i[1] || (i[1] = c("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", xi, [
      w(u, C({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: r.resolvedSize,
        "prefix-icon": t.prefixIcon,
        disabled: t.disabled,
        loading: t.loading,
        "loading-text": t.loadingText,
        block: r.isBlock
      }, e.$attrs, {
        onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
      }), {
        default: b(() => [
          g(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, wi);
}
const Ci = /* @__PURE__ */ k(ki, [["render", Si]]), Ti = Qe, oe = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, Li = {
  name: "AvatarGroup",
  SIZE_CLASS: oe,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Ti.includes(e)
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
}, Ii = ["aria-label"], Ai = {
  key: 0,
  class: "ui-avatar-group-overflow"
};
function Mi(e, i, t, n, s, r) {
  return a(), l("div", {
    class: _(r.rootClass),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    t.overflowCount > 0 ? (a(), l("span", Ai, p(r.overflowText), 1)) : f("", !0)
  ], 10, Ii);
}
const zi = /* @__PURE__ */ k(Li, [["render", Mi]]), Pi = F, Di = {
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
      validator: (e) => Pi.includes(e)
    },
    /**
     * Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde
     * (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır.
     */
    presentational: {
      type: Boolean,
      default: !1
    },
    /**
     * Kısmi seçim — "Tümünü seç" alt öğelerin bir kısmı seçiliyken (WAI-ARIA Checkbox, tri-state).
     * Görünüm dolu + çizgi; `aria-checked="mixed"`. Tıklanınca `update:modelValue` normal akışla çalışır.
     */
    indeterminate: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null;
    },
    isIndeterminate() {
      return this.indeterminate && !this.inGroup;
    },
    isChecked() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue;
        return Array.isArray(e) ? e.some((i) => Object.is(i, this.value)) : !1;
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
          "ui-checkbox--checked": this.isChecked || this.isIndeterminate,
          "ui-checkbox--highlight": this.highlight,
          "ui-checkbox--presentational": this.presentational
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const i = e.target.checked, t = this.uiCheckboxGroup.modelValue, n = Array.isArray(t) ? [...t] : [], s = n.findIndex((r) => Object.is(r, this.value));
        i && s === -1 ? n.push(this.value) : !i && s !== -1 && n.splice(s, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, i = Array.isArray(e) ? [...e] : [], t = i.findIndex((n) => Object.is(n, this.value));
        t === -1 ? i.push(this.value) : i.splice(t, 1), this.uiCheckboxGroup.$emit("update:modelValue", i);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Ei = ["type", "name", "value", "checked", "indeterminate", "aria-checked", "tabindex", "aria-hidden"], Oi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Ri = {
  key: 0,
  class: "ui-checkbox-body"
}, Vi = {
  key: 0,
  class: "ui-checkbox-label"
}, Bi = {
  key: 1,
  class: "ui-checkbox-description"
};
function Fi(e, i, t, n, s, r) {
  const u = v("ui-icon");
  return a(), l("label", {
    class: _(r.checkboxClasses),
    onKeydown: [
      i[1] || (i[1] = Z(E((...d) => r.toggle && r.toggle(...d), ["prevent"]), ["enter"])),
      i[2] || (i[2] = Z(E((...d) => r.toggle && r.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: r.nativeType,
      name: r.nativeName,
      value: r.groupValueString,
      checked: r.isChecked,
      indeterminate: r.isIndeterminate,
      "aria-checked": r.isIndeterminate ? "mixed" : void 0,
      tabindex: t.presentational ? -1 : void 0,
      "aria-hidden": t.presentational ? "true" : void 0,
      class: "sr-only",
      onChange: i[0] || (i[0] = (...d) => r.onNativeChange && r.onNativeChange(...d))
    }, null, 40, Ei),
    c("span", Oi, [
      r.isIndeterminate ? (a(), y(u, {
        key: 0,
        name: "minus",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : r.isChecked ? (a(), y(u, {
        key: 1,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    t.presentational ? f("", !0) : (a(), l("span", Ri, [
      e.$slots.label || t.label ? (a(), l("span", Vi, [
        g(e.$slots, "label", {}, () => [
          I(p(t.label), 1)
        ])
      ])) : f("", !0),
      t.description ? (a(), l("span", Bi, p(t.description), 1)) : f("", !0)
    ]))
  ], 34);
}
const Ni = /* @__PURE__ */ k(Di, [["render", Fi]]), Hi = ["list", "button"], $i = ["vertical", "horizontal"], Yi = $("ui-checkbox-group"), Ui = {
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
      validator: (e) => Hi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || $i.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: Yi() };
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
}, Wi = ["aria-label"];
function Gi(e, i, t, n, s, r) {
  return a(), l("div", {
    class: _(r.rootClass),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, Wi);
}
const Ki = /* @__PURE__ */ k(Ui, [["render", Gi]]), qi = F, ji = {
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
      validator: (e) => qi.includes(e)
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
      const { class: e, ...i } = this.$attrs;
      return i;
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
    optionKey(e, i) {
      return e.value == null ? `__${i}` : String(e.value);
    },
    isSelected(e) {
      return this.selectedValues.some((i) => i === e.value);
    },
    syncFocusIndex() {
      const e = this.normalizedOptions.findIndex((t) => this.isSelected(t));
      if (e >= 0) {
        this.focusIndex = e;
        return;
      }
      const i = this.normalizedOptions.findIndex((t) => !t.disabled);
      this.focusIndex = i >= 0 ? i : 0;
    },
    emitValue(e) {
      this.$emit("update:modelValue", e), this.$emit("change", e);
    },
    toggle(e) {
      if (!(this.disabled || e.disabled)) {
        if (this.multiple) {
          const i = this.selectedValues, t = this.isSelected(e) ? i.filter((n) => n !== e.value) : [...i, e.value];
          this.emitValue(t);
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
      const t = this.normalizedOptions, n = t.map((o, m) => o.disabled || this.disabled ? -1 : m).filter((o) => o >= 0);
      if (!n.length) return;
      e.preventDefault();
      const s = Math.max(0, n.indexOf(this.focusIndex));
      let r = s;
      e.key === "Home" ? r = 0 : e.key === "End" ? r = n.length - 1 : e.key === "ArrowRight" || e.key === "ArrowDown" ? r = (s + 1) % n.length : r = (s - 1 + n.length) % n.length;
      const u = n[r];
      this.focusIndex = u, (d = this.chipElements()[u]) == null || d.focus(), this.multiple || this.toggle(t[u]);
    }
  }
}, Zi = ["role", "aria-label"];
function Xi(e, i, t, n, s, r) {
  const u = v("ui-button");
  return a(), l("div", C({
    ref: "root",
    class: r.rootClass,
    role: t.multiple ? "group" : "radiogroup",
    "aria-label": t.ariaLabel || void 0
  }, r.passthroughAttrs, {
    onKeydown: i[0] || (i[0] = (...d) => r.onKeydown && r.onKeydown(...d))
  }), [
    (a(!0), l(T, null, P(r.normalizedOptions, (d, o) => (a(), y(u, {
      key: r.optionKey(d, o),
      type: "button",
      size: t.size,
      rounded: "",
      variant: r.isSelected(d) ? "solid" : "outline",
      color: r.isSelected(d) ? "primary" : "secondary",
      "prefix-icon": d.icon || void 0,
      disabled: t.disabled || d.disabled,
      role: t.multiple ? void 0 : "radio",
      "aria-checked": t.multiple ? void 0 : r.isSelected(d) ? "true" : "false",
      "aria-pressed": t.multiple ? r.isSelected(d) ? "true" : "false" : void 0,
      "aria-label": d.ariaLabel || void 0,
      "aria-current": d.ariaCurrent || void 0,
      tabindex: o === s.focusIndex ? 0 : -1,
      "data-ui-chip": "",
      onClick: (m) => r.toggle(d),
      onFocus: (m) => s.focusIndex = o
    }, {
      default: b(() => [
        g(e.$slots, "option", {
          option: d,
          selected: r.isSelected(d)
        }, () => [
          I(p(d.label), 1)
        ])
      ]),
      _: 2
    }, 1032, ["size", "variant", "color", "prefix-icon", "disabled", "role", "aria-checked", "aria-pressed", "aria-label", "aria-current", "tabindex", "onClick", "onFocus"]))), 128))
  ], 16, Zi);
}
const Qi = /* @__PURE__ */ k(ji, [["render", Xi]]), Ji = [
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
], er = {
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
    },
    /**
     * Renk örnekleri — `'#hex'` veya `{ value, label?, color? }`. `color` verilirse örnek o renkle çizilir,
     * `value` anahtar olabilir (ör. `'zinc'`); tetikleyici seçili öğenin `label`'ını gösterir.
     * Verilmezse yerleşik palet.
     */
    options: {
      type: Array,
      default: null
    },
    /** Özel hex alanı — yalnız paletten seçilecekse `false`. */
    showCustom: {
      type: Boolean,
      default: !0
    },
    /** Paneldeki “Temizle” — değer boş bırakılamıyorsa `false`. */
    showClear: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1
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
      return this.triggerPlaceholder ? this.triggerPlaceholder : z(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    /** `{ value, label, color }` listesi — düz hex dizisi de aynı biçime çevrilir. */
    swatches() {
      return (this.options || Ji).map(
        (e) => typeof e == "string" ? { value: e, label: e, color: e } : { value: e.value, label: e.label ?? e.value, color: e.color ?? e.value }
      );
    },
    selectedSwatch() {
      return this.swatches.find((e) => e.value === this.localColor) || null;
    },
    /** Anahtar değerli örnekte (ör. `'zinc'`) tetikleyici rengi örnekten gelir. */
    triggerSwatch() {
      var e;
      return ((e = this.selectedSwatch) == null ? void 0 : e.color) || this.localColor || "";
    },
    displayValue() {
      var e;
      return ((e = this.selectedSwatch) == null ? void 0 : e.label) || this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : z(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : z(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : z(this, "ui.colorPicker.customHex", "Custom color (hex)");
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
      let i = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) && (this.localColor = i.toUpperCase());
    }
  }
}, tr = ["disabled", "aria-expanded", "onClick"], ir = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, rr = { class: "ui-select-field-suffix" }, ar = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, nr = { class: "ui-color-picker-panel" }, sr = { class: "ui-color-picker-panel__header" }, lr = { class: "ui-color-picker-panel__title" }, or = { class: "ui-color-picker-swatches" }, ur = ["title", "aria-label", "aria-pressed", "onClick"], dr = {
  key: 0,
  class: "ui-color-picker-custom"
}, cr = { class: "ui-color-picker-panel__title" }, hr = { class: "ui-color-picker-custom__row" };
function fr(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("ui-input"), m = v("ui-popover");
  return a(), l("div", {
    class: _(r.rootClass)
  }, [
    w(m, {
      open: s.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (h) => s.popoverOpen = h),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: t.disabled
    }, {
      trigger: b(({ open: h, toggle: x, close: L }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: x,
          close: L
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            onClick: x
          }, [
            c("span", ir, [
              r.triggerSwatch ? (a(), l("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: O({ backgroundColor: r.triggerSwatch })
              }, null, 4)) : (a(), y(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            c("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !r.localColor }])
            }, p(r.displayValue), 3),
            c("span", rr, [
              c("span", ar, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, tr)
        ])
      ]),
      content: b(() => [
        c("div", nr, [
          c("div", sr, [
            c("span", lr, p(r.popoverTitleLabel), 1),
            t.showClear && r.localColor ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: E(r.clearColor, ["stop"])
            }, {
              default: b(() => [
                I(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", or, [
            (a(!0), l(T, null, P(r.swatches, (h) => (a(), l("button", {
              key: h.value,
              type: "button",
              class: _(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": r.localColor === h.value }]),
              style: O({ backgroundColor: h.color }),
              title: h.label,
              "aria-label": h.label,
              "aria-pressed": r.localColor === h.value ? "true" : "false",
              onClick: (x) => r.selectColor(h.value)
            }, [
              r.localColor === h.value ? (a(), y(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, ur))), 128))
          ]),
          t.showCustom ? (a(), l("div", dr, [
            c("span", cr, p(r.customColorLabelText), 1),
            c("div", hr, [
              w(o, {
                modelValue: r.localColor,
                "onUpdate:modelValue": i[0] || (i[0] = (h) => r.localColor = h),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: r.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: O({ backgroundColor: r.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])) : f("", !0)
        ])
      ]),
      _: 3
    }, 8, ["open", "match-trigger-width", "disabled"])
  ], 2);
}
const mr = /* @__PURE__ */ k(er, [["render", fr]]), xe = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, K = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function le(e, i = "TRY") {
  if (e == null || String(e).trim() === "")
    return i in K ? i : "TRY";
  const t = String(e).trim();
  if (xe[t])
    return xe[t];
  const n = t.toUpperCase();
  return K[n] ? n : i in K ? i : "TRY";
}
function Ge(e) {
  var t;
  const i = le(e);
  if (K[i])
    return K[i];
  try {
    const s = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: i,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((r) => r.type === "currency");
    return ((t = s == null ? void 0 : s.value) == null ? void 0 : t.trim()) || i;
  } catch {
    return i;
  }
}
function _d(e, i, t = "tr-TR") {
  const n = Number(e) || 0, s = le(i);
  try {
    return new Intl.NumberFormat(t, { style: "currency", currency: s }).format(n);
  } catch {
    return `${Ge(s)}${n.toFixed(2)}`;
  }
}
function Ke(e) {
  let i = String(e ?? "").replace(",", ".");
  i = i.replace(/[^\d.]/g, "");
  const t = i.indexOf(".");
  if (t !== -1) {
    const n = i.slice(0, t), s = i.slice(t + 1).replace(/\./g, "");
    i = `${n}.${s}`;
  }
  return i;
}
function qe(e = "tr-TR") {
  var i, t;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((i = n.find((s) => s.type === "group")) == null ? void 0 : i.value) || ".",
      decimal: ((t = n.find((s) => s.type === "decimal")) == null ? void 0 : t.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function pr(e, i = "tr-TR") {
  const { group: t, decimal: n } = qe(i);
  let s = String(e ?? "").trim();
  return s ? (s = s.split(t).join(""), s = s.split(n).join("."), Ke(s)) : "";
}
function gr(e, i = "tr-TR") {
  const t = Ke(e);
  if (!t) return "";
  const { group: n, decimal: s } = qe(i), [r = "", u] = t.split("."), o = (r.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return u === void 0 ? o : `${o}${s}${u}`;
}
const yr = $("ui-currency-input"), br = F, vr = {
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
      validator: (e) => e == null || br.includes(e)
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
    return { fallbackId: yr() };
  },
  computed: {
    displaySymbol() {
      return Ge(this.currency);
    },
    resolvedCurrencyCode() {
      return le(this.currency);
    },
    innerValue: {
      get() {
        return gr(this.modelValue, this.locale);
      },
      set(e) {
        const i = pr(e, this.locale);
        this.$emit("update:modelValue", i);
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
      ]), i = {};
      for (const [t, n] of Object.entries(this.$attrs))
        e.has(t) || (i[t] = n);
      return i;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, _r = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function kr(e, i, t, n, s, r) {
  const u = v("ui-input");
  return a(), y(u, C({
    id: r.resolvedId,
    modelValue: r.innerValue,
    "onUpdate:modelValue": i[0] || (i[0] = (d) => r.innerValue = d),
    type: "text",
    inputmode: "decimal",
    size: t.size,
    disabled: t.disabled,
    readonly: t.readonly,
    placeholder: t.placeholder,
    name: t.name,
    autocomplete: t.autocomplete,
    "aria-describedby": t.ariaDescribedby
  }, r.passthroughAttrs, {
    onFocus: i[1] || (i[1] = (d) => e.$emit("focus", d)),
    onBlur: r.onBlur
  }), {
    prepend: b(() => [
      c("span", _r, p(r.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const je = /* @__PURE__ */ k(vr, [["render", kr]]), wr = $("ui-daterangepicker");
function q(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${q(e.getMonth() + 1)}-${q(e.getDate())}`;
}
function H(e) {
  if (e == null || e === "") return null;
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return null;
  const t = Number(i[1]), n = Number(i[2]) - 1, s = Number(i[3]), r = new Date(t, n, s);
  return r.getFullYear() !== t || r.getMonth() !== n || r.getDate() !== s ? null : r;
}
function N(e, i) {
  return e === i ? 0 : e < i ? -1 : 1;
}
function J(e, i, t) {
  return new Date(e, i, 1).toLocaleString(t, { month: "long", year: "numeric" });
}
function xr(e, i, t) {
  const n = H(e);
  if (!n) return null;
  const s = n.getDay(), r = s === 0 ? -6 : 1 - s, u = new Date(n.getFullYear(), n.getMonth(), n.getDate() + r), d = D(u), o = new Date(u.getFullYear(), u.getMonth(), u.getDate() + 6);
  let m = D(o);
  if (i && m > i && (m = i), t && d < t && m < t) return null;
  let h = d;
  return t && h < t && (h = t), N(h, m) > 0 ? null : [h, m];
}
function Sr(e, i, t) {
  const n = H(e);
  if (!n) return null;
  const s = n.getFullYear(), r = `${s}-01-01`;
  let u = `${s}-12-31`;
  if (i && u > i && (u = i), t && r < t && u < t) return null;
  let d = r;
  return t && d < t && (d = t), N(d, u) > 0 ? null : [d, u];
}
function Se(e, i, t, n) {
  const s = `${e}-${q(i + 1)}-01`, r = new Date(e, i + 1, 0).getDate();
  let u = `${e}-${q(i + 1)}-${q(r)}`;
  if (t && u > t && (u = t), n && s < n && u < n) return null;
  let d = s;
  return n && d < n && (d = n), N(d, u) > 0 ? null : [d, u];
}
const Cr = {
  name: "DateRangePicker",
  mixins: [R],
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
    var t, n;
    const e = ((t = this.modelValue) == null ? void 0 : t[0]) || "", i = H(e) || H((n = this.modelValue) == null ? void 0 : n[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: wr(),
      menuOpen: !1,
      viewYear: i.getFullYear(),
      viewMonth: i.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Klavye ile gezilen gün (roving tabindex). */
      focusYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Fe() : !1
    };
  },
  mounted() {
    typeof window > "u" || (this._viewportMq = window.matchMedia(et), this._onViewportMq = () => {
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
        const i = !!e;
        this.open !== void 0 ? this.$emit("update:open", i) : this.menuOpen = i;
      }
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return Je((e = this.$i18n) == null ? void 0 : e.locale);
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
        const e = this.pickingStart, i = this.hoverYmd;
        return N(e, i) <= 0 ? i : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      if (Array.isArray(this.presets))
        return this.presets.map((A) => ({
          ...A,
          disabled: !A.range || this.isRangeDisabled(A.range[0], A.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), i = D(e), t = new Date(e);
      t.setDate(t.getDate() - 1);
      const n = D(t), s = new Date(e);
      s.setDate(s.getDate() + 1);
      const r = D(s), u = e.getMonth(), d = e.getFullYear(), o = new Date(d, u - 1, 1), m = o.getFullYear(), h = o.getMonth(), x = (A, M) => typeof this.$t == "function" ? this.$t(A, M) : A;
      return [
        {
          key: "today",
          label: x("ui.dateRangePicker.today"),
          range: [i, i]
        },
        {
          key: "yesterday",
          label: x("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "tomorrow",
          label: x("ui.datePicker.tomorrow"),
          range: [r, r]
        },
        {
          key: "thisWeek",
          label: x("ui.dateRangePicker.thisWeek"),
          range: xr(i, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: x("ui.dateRangePicker.thisMonth", {
            month: J(d, u, this.locale)
          }),
          range: Se(d, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: x("ui.dateRangePicker.lastMonth", {
            month: J(m, h, this.locale)
          }),
          range: Se(m, h, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: x("ui.dateRangePicker.thisYear", { year: d }),
          range: Sr(i, this.maxYmd, this.minYmd)
        }
      ].map((A) => ({
        ...A,
        disabled: !A.range || this.isRangeDisabled(A.range[0], A.range[1])
      }));
    },
    /** Hafta günü başlıkları dile göre (eskiden sabit "Su Mo Tu"). Izgara pazardan başlar. */
    weekdayLabels() {
      return Array.from({ length: 7 }, (e, i) => {
        const t = new Date(2024, 0, 7 + i);
        return {
          key: i,
          short: t.toLocaleDateString(this.locale, { weekday: "short" }).replace(".", ""),
          long: t.toLocaleDateString(this.locale, { weekday: "long" })
        };
      });
    },
    /** Tek Tab durağı: gezilen gün → bitiş / başlangıç → bugün → görünen ilk ay günü. */
    rovingYmd() {
      const e = this.calendarPanes.flatMap((n) => n.cells).filter((n) => n.inMonth && !n.disabled), i = (n) => n && e.some((s) => D(s.date) === n), t = D(/* @__PURE__ */ new Date());
      for (const n of [this.focusYmd, this.pickingEnd, this.pickingStart, this.endYmd, this.startYmd, t])
        if (i(n)) return n;
      return e[0] ? D(e[0].date) : "";
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
      }, i = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, i].map((t) => ({
        ...t,
        title: J(t.year, t.month, this.locale),
        cells: this.buildCellsForMonth(t.year, t.month)
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
      var i;
      if (e)
        this.returnFocusEl = fe(), this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.focusYmd = "", this.syncViewFromValue(), this.$nextTick(() => requestAnimationFrame(() => this.focusRovingCell()));
      else {
        this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "", this.focusYmd = "";
        const t = document.activeElement;
        (!t || t === document.body || (i = this.$refs.monthRow) != null && i.contains(t)) && me(this.returnFocusEl), this.returnFocusEl = null;
      }
    }
  },
  methods: {
    syncViewFromValue() {
      const e = H(this.startYmd) || H(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, i) {
      const t = Be(this.uiDefaults, void 0, "dateRangeFormat"), n = (s) => s ? tt(s, this.locale, t) || s : "…";
      return !e && !i ? this.resolvedPlaceholder : e === i || !i ? n(e || i) : `${n(e)} – ${n(i)}`;
    },
    shiftMonth(e) {
      const i = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth();
    },
    isRangeDisabled(e, i) {
      return !!(!e || !i || this.minYmd && i < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, i) {
      const t = new Date(e, i, 1), n = new Date(e, i, 1 - t.getDay()), s = this.previewStart, r = this.previewEnd, u = s && r, d = [];
      for (let o = 0; o < 42; o += 1) {
        const m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + o), h = m.getMonth() === i && m.getFullYear() === e, x = m.getDate(), L = D(m), A = `${m.getFullYear()}-${m.getMonth()}-${m.getDate()}-${i}`, M = D(/* @__PURE__ */ new Date()) === L, V = !!(this.minYmd && L < this.minYmd) || !!(this.maxYmd && L > this.maxYmd);
        let ye = !1, be = !1;
        if (u) {
          const ve = N(s, r) <= 0 ? s : r, _e = N(s, r) <= 0 ? r : s;
          ye = N(L, ve) >= 0 && N(L, _e) <= 0, be = L === ve || L === _e;
        }
        d.push({
          key: A,
          d: x,
          date: m,
          today: M,
          inMonth: h,
          disabled: V,
          inRange: ye,
          endpoint: be
        });
      }
      return d;
    },
    ymdOf(e) {
      return D(e);
    },
    cellLabel(e) {
      return e.date.toLocaleDateString(this.locale, { day: "numeric", month: "long", year: "numeric", weekday: "long" });
    },
    focusRovingCell() {
      var e, i, t;
      (t = (i = (e = this.$refs.monthRow) == null ? void 0 : e.querySelector(`[data-ymd="${this.rovingYmd}"]`)) == null ? void 0 : i.focus) == null || t.call(i);
    },
    /** ← → ±1 gün, ↑ ↓ ±1 hafta, Home/End hafta başı/sonu, PageUp/PageDown ±1 ay; görünen aylar kayar. */
    onGridKeydown(e) {
      const i = H(this.rovingYmd);
      if (!i) return;
      const t = new Date(i), n = {
        ArrowRight: () => t.setDate(t.getDate() + 1),
        ArrowLeft: () => t.setDate(t.getDate() - 1),
        ArrowDown: () => t.setDate(t.getDate() + 7),
        ArrowUp: () => t.setDate(t.getDate() - 7),
        Home: () => t.setDate(t.getDate() - t.getDay()),
        End: () => t.setDate(t.getDate() + (6 - t.getDay())),
        PageDown: () => t.setMonth(t.getMonth() + 1),
        PageUp: () => t.setMonth(t.getMonth() - 1)
      };
      if (!n[e.key]) return;
      e.preventDefault(), n[e.key]();
      const s = D(t);
      if (!this.calendarPanes.some((u) => u.year === t.getFullYear() && u.month === t.getMonth())) {
        const u = this.calendarPanes[0], o = t > new Date(u.year, u.month, 1) ? new Date(t.getFullYear(), t.getMonth() - (this.calendarPanes.length - 1), 1) : new Date(t.getFullYear(), t.getMonth(), 1);
        this.viewYear = o.getFullYear(), this.viewMonth = o.getMonth();
      }
      this.focusYmd = s, this.pickingStart && !this.pickingEnd && (this.hoverYmd = s), this.$nextTick(() => this.focusRovingCell());
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, i) {
      if (e.disabled || !e.range) return;
      const [t, n] = e.range;
      this.pickingStart = t, this.pickingEnd = n, this.$emit("update:modelValue", [t, n]), this.$emit("change", [t, n]), i();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [i, t] = e.range;
      return this.startYmd === i && this.endYmd === t;
    },
    pick(e, i) {
      if (!e.date || e.disabled) return;
      const t = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = t, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, s = t;
      if (N(s, n) < 0) {
        const r = n;
        n = s, s = r;
      }
      this.pickingStart = n, this.pickingEnd = s, this.$emit("update:modelValue", [n, s]), this.$emit("change", [n, s]), i();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Tr = { class: "min-w-0 flex-1 truncate text-foreground" }, Lr = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Ir = { class: "ui-daterangepicker-layout" }, Ar = ["aria-label"], Mr = { class: "ui-daterangepicker-calendars" }, zr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Pr = {
  ref: "monthRow",
  class: "ui-daterangepicker-month-row"
}, Dr = { class: "mb-2 flex items-center justify-between gap-2" }, Er = {
  key: 1,
  class: "size-[var(--ui-control-h-md)] shrink-0",
  "aria-hidden": "true"
}, Or = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Rr = {
  key: 3,
  class: "size-[var(--ui-control-h-md)] shrink-0",
  "aria-hidden": "true"
}, Vr = { class: "ui-datepicker-weekdays mb-1" }, Br = ["title"];
function Fr(e, i, t, n, s, r) {
  const u = v("ui-button"), d = v("ui-popover");
  return a(), l("div", {
    class: _(["ui-daterangepicker", t.showTrigger ? "" : "ui-daterangepicker--headless", t.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: r.resolvedOpen,
      "onUpdate:open": i[3] || (i[3] = (o) => r.resolvedOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: t.disabled,
      anchor: t.anchor,
      "inherit-layout": !t.showTrigger
    }, {
      trigger: b(({ open: o, toggle: m, close: h }) => [
        t.showTrigger ? g(e.$slots, "trigger", {
          key: 0,
          open: o,
          toggle: m,
          close: h
        }, () => [
          w(u, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: t.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: m
          }, {
            default: b(() => [
              c("span", Tr, p(r.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ]) : f("", !0)
      ]),
      content: b(({ close: o }) => [
        c("div", Lr, [
          c("div", Ir, [
            r.quickPresets.length ? (a(), l("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": r.resolvedQuickAriaLabel
            }, [
              (a(!0), l(T, null, P(r.quickPresets, (m) => (a(), y(u, {
                key: m.key,
                type: "button",
                variant: r.isPresetActive(m) ? "solid" : "outline",
                color: r.isPresetActive(m) ? "primary" : "secondary",
                size: "sm",
                rounded: "",
                disabled: m.disabled,
                "aria-pressed": r.isPresetActive(m) ? "true" : "false",
                "data-active": r.isPresetActive(m) ? "true" : void 0,
                onClick: (h) => r.applyQuick(m, o)
              }, {
                default: b(() => [
                  I(p(m.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))), 128))
            ], 8, Ar)) : f("", !0),
            c("div", Mr, [
              r.rangeHint ? (a(), l("p", zr, p(r.rangeHint), 1)) : f("", !0),
              c("div", Pr, [
                (a(!0), l(T, null, P(r.calendarPanes, (m) => (a(), l("section", {
                  key: m.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", Dr, [
                    m.showPrev ? (a(), y(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": r.resolvedPrevMonthLabel,
                      onClick: i[0] || (i[0] = E((h) => r.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", Er)),
                    c("span", Or, p(m.title), 1),
                    m.showNext ? (a(), y(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": r.resolvedNextMonthLabel,
                      onClick: i[1] || (i[1] = E((h) => r.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", Rr))
                  ]),
                  c("div", Vr, [
                    (a(!0), l(T, null, P(r.weekdayLabels, (h) => (a(), l("span", {
                      key: h.key,
                      title: h.long
                    }, p(h.short), 9, Br))), 128))
                  ]),
                  c("div", {
                    class: "ui-datepicker-grid",
                    onKeydown: i[2] || (i[2] = (...h) => r.onGridKeydown && r.onGridKeydown(...h))
                  }, [
                    (a(!0), l(T, null, P(m.cells, (h) => (a(), y(u, {
                      key: h.key,
                      variant: r.dayVariant(h),
                      color: r.dayColor(h),
                      size: "sm",
                      cubed: "",
                      disabled: h.disabled,
                      "data-ymd": h.inMonth ? r.ymdOf(h.date) : void 0,
                      tabindex: h.inMonth && r.ymdOf(h.date) === r.rovingYmd ? 0 : -1,
                      "aria-label": r.cellLabel(h),
                      "aria-pressed": h.endpoint ? "true" : "false",
                      "aria-current": h.today ? "date" : void 0,
                      "aria-disabled": h.disabled ? "true" : void 0,
                      "data-outside": h.inMonth ? void 0 : "true",
                      "data-today": h.today ? "true" : void 0,
                      "data-in-range": h.inRange && !h.endpoint ? "true" : void 0,
                      "data-range-endpoint": h.endpoint ? "true" : void 0,
                      onMouseenter: (x) => r.onCellHover(h),
                      onClick: (x) => r.pick(h, o)
                    }, {
                      default: b(() => [
                        I(p(h.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "data-ymd", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
                  ], 32)
                ]))), 128))
              ], 512)
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled", "anchor", "inherit-layout"])
  ], 2);
}
const Nr = /* @__PURE__ */ k(Cr, [["render", Fr]]), Hr = {
  name: "Field",
  mixins: [R],
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
    iconType: Y,
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
    ...se(),
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
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
}, $r = {
  key: 0,
  class: "ui-field__title-row"
}, Yr = {
  key: 1,
  class: "ui-field__title"
}, Ur = {
  key: 1,
  class: "ui-field__value"
}, Wr = {
  key: 2,
  class: "ui-field__subtitle"
};
function Gr(e, i, t, n, s, r) {
  const u = v("ui-icon");
  return a(), l("div", C({ class: r.rootClass }, r.passthroughAttrs), [
    t.title || r.showIcon ? (a(), l("div", $r, [
      r.showIcon ? (a(), l("span", {
        key: 0,
        class: _(r.titleIconClass),
        "aria-hidden": "true"
      }, [
        w(u, {
          name: t.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ], 2)) : f("", !0),
      t.title ? (a(), l("span", Yr, p(t.title), 1)) : f("", !0)
    ])) : f("", !0),
    r.hasValue ? (a(), l("div", Ur, [
      g(e.$slots, "default")
    ])) : f("", !0),
    t.subtitle ? (a(), l("p", Wr, p(t.subtitle), 1)) : f("", !0)
  ], 16);
}
const Kr = /* @__PURE__ */ k(Hr, [["render", Gr]]), qr = ["popover", "dialog"], jr = F, Zr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Xr = {
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
      validator: (e) => qr.includes(e)
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
    /**
     * Tetikleyici boyutu. Verilmezse `ui-filter-chip` gibi temanın kontrol boyutu — yan yana
     * duran filtre çipleriyle aynı yükseklik (eskiden sabit `sm` idi, bir kademe küçük kalıyordu).
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || jr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Zr.includes(e)
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
        const i = !!e;
        this.isControlled || (this.uncontrolledOpen = i), this.$emit("update:open", i);
      }
    },
    hasValue() {
      return this.value == null ? !1 : String(this.value).trim() !== "";
    },
    triggerLabel() {
      return this.hasValue ? String(this.value) : this.actionName || this.title || "";
    },
    emptyTriggerLabel() {
      return this.actionName || this.title || "";
    },
    triggerAriaLabel() {
      return this.title ? this.title : this.triggerLabel || this.actionName || "Field action";
    },
    triggerVariant() {
      return "solid";
    },
    triggerColor() {
      return this.hasValue || this.resolvedOpen ? "primary" : "secondary";
    },
    showPopoverHeader() {
      return !!(this.$slots.header || this.title || this.description || this.iconOnly && this.clearable && this.hasValue);
    },
    showDialogFooter() {
      return this.showFooter || !!this.$slots.footer;
    },
    resolvedClearLabel() {
      return this.clearLabel != null && this.clearLabel !== "" ? this.clearLabel : z(this, "ui.fieldAction.clear", "Clear");
    },
    resolvedDoneLabel() {
      return this.doneLabel != null && this.doneLabel !== "" ? this.doneLabel : z(this, "ui.fieldAction.done", "Done");
    }
  },
  methods: {
    toggle() {
      this.disabled || (this.resolvedOpen = !this.resolvedOpen);
    },
    close() {
      this.resolvedOpen = !1;
    },
    onTriggerClick(e, i) {
      typeof i == "function" ? i() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, Qr = { class: "ui-field-action-header" }, Jr = { class: "ui-field-action-header__text" }, ea = {
  key: 0,
  class: "ui-field-action-header__title"
}, ta = {
  key: 1,
  class: "ui-field-action-header__description"
}, ia = { class: "ui-field-action-body" }, ra = { class: "ui-field-action-body" }, aa = { class: "ui-field-action-footer" };
function na(e, i, t, n, s, r) {
  const u = v("ui-button"), d = v("ui-filter-chip"), o = v("ui-popover"), m = v("ui-dialog");
  return a(), l("div", {
    class: _([
      "ui-field-action",
      r.hasValue ? "ui-field-action--filled" : "",
      t.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    r.isPopover ? (a(), y(o, {
      key: 0,
      open: r.resolvedOpen,
      "onUpdate:open": i[1] || (i[1] = (h) => r.resolvedOpen = h),
      placement: t.placement,
      width: t.popoverWidth,
      disabled: t.disabled,
      "mobile-centered": t.mobileCentered
    }, re({
      trigger: b(({ open: h, toggle: x }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: x,
          close: r.close,
          label: r.triggerLabel,
          hasValue: r.hasValue,
          clear: () => r.onClear(r.close)
        }, () => [
          t.iconOnly ? (a(), y(u, {
            key: 0,
            type: "button",
            class: "ui-filter-chip",
            variant: r.triggerVariant,
            color: r.triggerColor,
            size: t.size,
            rounded: "",
            cubed: "",
            "prefix-icon": t.prefixIcon,
            disabled: t.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": r.triggerAriaLabel,
            onClick: (L) => r.onTriggerClick(L, x)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), y(d, {
            key: 1,
            icon: t.prefixIcon || "",
            "suffix-icon": t.suffixIcon || "",
            empty: !r.hasValue,
            "empty-label": r.emptyTriggerLabel,
            "value-label": r.hasValue ? String(t.value) : "",
            active: h,
            clearable: t.clearable,
            disabled: t.disabled,
            size: t.size,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": "true",
            "aria-label": r.triggerAriaLabel,
            onClick: (L) => r.onTriggerClick(L, x),
            onClear: i[0] || (i[0] = (L) => r.onClear(r.close))
          }, null, 8, ["icon", "suffix-icon", "empty", "empty-label", "value-label", "active", "clearable", "disabled", "size", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: b(({ close: h }) => [
        c("div", ia, [
          g(e.$slots, "default", {
            close: h,
            open: r.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      r.showPopoverHeader ? {
        name: "header",
        fn: b(({ close: h }) => [
          g(e.$slots, "header", { close: h }, () => [
            c("div", Qr, [
              c("div", Jr, [
                t.title ? (a(), l("p", ea, p(t.title), 1)) : f("", !0),
                t.description ? (a(), l("p", ta, p(t.description), 1)) : f("", !0)
              ]),
              t.iconOnly && t.clearable && r.hasValue ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": r.resolvedClearLabel,
                onClick: (x) => r.onClear(h)
              }, null, 8, ["aria-label", "onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: b(({ close: h }) => [
          g(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), l(T, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: r.resolvedOpen,
        toggle: r.toggle,
        close: r.close,
        label: r.triggerLabel,
        hasValue: r.hasValue,
        clear: () => r.onClear(r.close)
      }, () => [
        t.iconOnly ? (a(), y(u, {
          key: 0,
          type: "button",
          variant: r.triggerVariant,
          color: r.triggerColor,
          size: t.size,
          rounded: "",
          cubed: "",
          "prefix-icon": t.prefixIcon,
          disabled: t.disabled,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": r.triggerAriaLabel,
          onClick: i[2] || (i[2] = (h) => r.onTriggerClick(h, r.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), y(d, {
          key: 1,
          icon: t.prefixIcon || "",
          "suffix-icon": t.suffixIcon || "",
          empty: !r.hasValue,
          "empty-label": r.emptyTriggerLabel,
          "value-label": r.hasValue ? String(t.value) : "",
          active: r.resolvedOpen,
          clearable: t.clearable,
          disabled: t.disabled,
          size: t.size,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": "dialog",
          "aria-label": r.triggerAriaLabel,
          onClick: i[3] || (i[3] = (h) => r.onTriggerClick(h, r.toggle)),
          onClear: i[4] || (i[4] = (h) => r.onClear(r.close))
        }, null, 8, ["icon", "suffix-icon", "empty", "empty-label", "value-label", "active", "clearable", "disabled", "size", "aria-expanded", "aria-label"]))
      ]),
      w(m, {
        open: r.resolvedOpen,
        "onUpdate:open": i[5] || (i[5] = (h) => r.resolvedOpen = h),
        title: t.title,
        description: t.description,
        icon: t.dialogIcon,
        "max-width": t.maxWidth,
        "close-on-backdrop": t.closeOnBackdrop,
        "close-on-escape": t.closeOnEscape
      }, re({
        default: b(() => [
          c("div", ra, [
            g(e.$slots, "default", {
              close: r.close,
              open: r.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        r.showDialogFooter ? {
          name: "footer",
          fn: b(() => [
            g(e.$slots, "footer", { close: r.close }, () => [
              c("div", aa, [
                w(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: r.close
                }, {
                  default: b(() => [
                    I(p(r.resolvedDoneLabel), 1)
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
const sa = /* @__PURE__ */ k(Xr, [["render", na]]), la = ["auto", "file", "folder"], oa = F, ua = { icon: "folder", color: "text-sky-500" }, da = { icon: "file-lines", color: "text-muted-foreground" }, ca = {
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
}, Ce = {
  sm: {
    shell: "min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5",
    icon: "md",
    iconBoost: "",
    label: "ui-text-2xs leading-4",
    root: "max-w-[7rem]"
  },
  md: {
    shell: "min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5",
    icon: "lg",
    iconBoost: "",
    label: "text-xs leading-4",
    root: "max-w-[10rem]"
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
function ha(e) {
  const i = ae(e);
  return /[/\\]\s*$/.test(i);
}
function Ze(e) {
  const i = ae(e).replace(/[/\\]+$/, "");
  if (!i) return "";
  const t = i.split(/[/\\]/);
  return t[t.length - 1] || i;
}
function fa(e) {
  const i = Ze(e), t = i.lastIndexOf(".");
  return t <= 0 || t === i.length - 1 ? "" : i.slice(t + 1).toLowerCase();
}
const Te = {
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
}, ma = {
  name: "File",
  mixins: [R],
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
      validator: (e) => la.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => oa.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: Y,
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
      return Ce[this.size] || Ce.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : ha(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = ae(this.name);
      return e ? this.basenameOnly ? Ze(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return ae(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return ua;
      const e = fa(this.name);
      return ca[e] || da;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? j(this.uiDefaults, this.iconType) : this.inferredMeta.type || j(this.uiDefaults, void 0);
    },
    resolvedColorClass() {
      return this.color ? Te[this.color] !== void 0 ? Te[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, pa = ["aria-label"], ga = ["title"];
function ya(e, i, t, n, s, r) {
  const u = v("ui-icon");
  return a(), l("div", {
    class: _(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", r.rootSizeClass]),
    role: "img",
    "aria-label": r.ariaLabel
  }, [
    c("div", {
      class: _(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [r.shellClasses, r.folderShellClass]])
    }, [
      w(u, {
        name: r.resolvedIcon,
        type: r.resolvedIconType,
        size: r.iconSizeToken,
        class: _(r.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    t.hideLabel ? f("", !0) : (a(), l("span", {
      key: 0,
      class: _(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", r.labelClass]),
      "aria-hidden": "true",
      title: r.fullLabel
    }, p(r.displayLabel), 11, ga))
  ], 10, pa);
}
const ba = /* @__PURE__ */ k(ma, [["render", ya]]), va = F, _a = ["primary", "secondary", "success", "warning", "danger"], ka = {
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
    /** Açtığı katman türü (`true` / `dialog` / `listbox` …) — `aria-haspopup`. */
    ariaHaspopup: {
      type: [Boolean, String],
      default: void 0
    },
    /** Değer boşken (veya temizlenemezken) sağdaki ikon; doluyken × önceliklidir. */
    suffixIcon: {
      type: String,
      default: ""
    },
    /**
     * Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md = 32px) — yanındaki arama
     * kutusu ve butonlarla aynı yükseklik. Eskiden sabit `sm` idi: tablo araç çubuğundaki çipler
     * panelin geri kalanından bir kademe küçük kalıyordu. Yoğun yerlerde `size="sm"` verilir.
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || va.includes(e)
    },
    /** Verilirse boş / dolu durum rengi yerine sabit ton kullanılır */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || _a.includes(e)
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
      return this.buttonColor === "secondary" || this.buttonColor === "primary" ? "solid" : "muted";
    },
    expandedAttr() {
      if (!(this.ariaExpanded === void 0 || this.ariaExpanded === null))
        return this.ariaExpanded === !0 || this.ariaExpanded === "true" ? "true" : this.ariaExpanded === !1 || this.ariaExpanded === "false" ? "false" : String(this.ariaExpanded);
    }
  },
  methods: {
    onClick(e) {
      var i, t;
      if (this.showClear && ((t = (i = e == null ? void 0 : e.target) == null ? void 0 : i.closest) != null && t.call(i, '.ui-button-suffix, [data-icon="xmark"], .fa-xmark'))) {
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
function wa(e, i, t, n, s, r) {
  const u = v("ui-button");
  return a(), y(u, {
    type: "button",
    class: "ui-filter-chip",
    variant: r.buttonVariant,
    color: r.buttonColor,
    size: t.size,
    rounded: "",
    "prefix-icon": t.icon || void 0,
    "suffix-icon": r.showClear ? "xmark" : t.suffixIcon || void 0,
    disabled: t.disabled,
    "aria-label": t.ariaLabel || r.triggerLabel,
    "aria-expanded": r.expandedAttr,
    "aria-haspopup": t.ariaHaspopup || void 0,
    "aria-keyshortcuts": r.showClear ? "Backspace Delete" : void 0,
    onClick: r.onClick,
    onKeydown: r.onKeydown
  }, {
    default: b(() => [
      I(p(r.triggerLabel), 1)
    ]),
    _: 1
  }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-label", "aria-expanded", "aria-haspopup", "aria-keyshortcuts", "onClick", "onKeydown"]);
}
const xa = /* @__PURE__ */ k(ka, [["render", wa]]);
function Sa(e) {
  const i = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!i.length) return null;
  const t = Math.min(...i.map((u) => u.top)), n = Math.min(...i.map((u) => u.left)), s = Math.max(...i.map((u) => u.right)), r = Math.max(...i.map((u) => u.bottom));
  return {
    top: t,
    left: n,
    right: s,
    bottom: r,
    width: s - n,
    height: r - t,
    x: n,
    y: t,
    toJSON: () => ({})
  };
}
function ce(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const i = e.closest(".ui-form-row");
  return i instanceof HTMLElement ? i : e;
}
function Le(e) {
  const i = ce(e);
  if (!i) return null;
  if (i.classList.contains("ui-form-row")) {
    const t = [
      i.querySelector(".ui-form-row-text"),
      i.querySelector(".ui-form-row-control")
    ].filter((s) => s instanceof HTMLElement), n = Sa(t.map((s) => s.getBoundingClientRect()));
    if (n) return n;
  }
  return i.getBoundingClientRect();
}
function Ca(e) {
  var t;
  if (!((t = e == null ? void 0 : e.classList) != null && t.contains("ui-form-row")))
    return [e];
  const i = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && i.push(n);
  return i;
}
const Ta = ["dialog", "popover", "card", "tour"], La = [
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
], Ia = ["sm", "md", "lg", "xl", "2xl", "full"], B = 12, Aa = 8, Ma = {
  name: "Guidance",
  mixins: [R],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Ta.includes(e)
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
    iconType: Y,
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
      validator: (e) => La.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Aa
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Ia.includes(e)
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
    ...se(),
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
      return this.goLabel ? this.goLabel : z(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : z(this, "ui.guidance.close", "Close");
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
      const i = this.resolveTourTarget(), t = this.$refs.tourPanelRef;
      if (!t) return;
      const n = window.innerWidth, s = window.innerHeight, r = t.getBoundingClientRect(), u = r.width || 320, d = r.height || 180;
      if (!i) {
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
      const o = Le(i);
      if (!o) return;
      const m = Math.max(0, Number(this.targetPadding) || 0), h = Math.max(0, o.top - m), x = Math.max(0, o.left - m), L = Math.min(s, o.bottom + m), A = Math.min(n, o.right + m);
      this.tourHighlightStyle = {
        top: `${h}px`,
        left: `${x}px`,
        width: `${Math.max(0, A - x)}px`,
        height: `${Math.max(0, L - h)}px`
      };
      let M = L + B, V = x;
      this.placement.startsWith("top") ? M = h - d - B : this.placement.startsWith("right") ? (M = h, V = A + B) : this.placement.startsWith("left") ? (M = h, V = x - u - B) : this.placement.includes("end") && (V = A - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && M + d > s - B && (M = h - d - B), M = Math.max(B, Math.min(M, s - d - B)), V = Math.max(B, Math.min(V, n - u - B)), this.tourPanelStyle = {
        position: "fixed",
        top: `${M}px`,
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
        const i = Le(e);
        if (i && i.height > 0) {
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
        const i = this.resolveTourTarget();
        if (i)
          for (const t of Ca(i))
            this.tourResizeObserver.observe(t);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, za = { class: "ui-guidance-footer" }, Pa = { class: "ui-guidance-popover" }, Da = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Ea = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Oa = { class: "ui-guidance-popover__text" }, Ra = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Va = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Ba = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Fa = ["aria-label"], Na = { class: "ui-guidance-tour__content" }, Ha = { class: "ui-header-lead" }, $a = { class: "ui-header-lead__main" }, Ya = {
  key: 0,
  class: "ui-header-lead__icon"
}, Ua = { class: "ui-header-lead__text" }, Wa = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Ga = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Ka = {
  key: 0,
  class: "ui-header-lead__actions"
}, qa = {
  key: 0,
  class: "ui-guidance-tour__body"
}, ja = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Za(e, i, t, n, s, r) {
  const u = v("ui-button"), d = v("ui-card"), o = v("ui-dialog"), m = v("ui-icon"), h = v("ui-popover");
  return r.shouldRender ? (a(), l("div", {
    key: 0,
    class: _(r.rootShellClass)
  }, [
    t.mode === "card" ? (a(), y(d, {
      key: 0,
      icon: t.icon,
      "icon-type": e.resolvedIconType,
      title: t.title,
      description: t.description,
      border: ""
    }, re({
      default: b(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: b(() => [
          g(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      r.hasFooterActions ? {
        name: "footer",
        fn: b(() => [
          g(e.$slots, "footer", {}, () => [
            c("div", za, [
              t.showFooterClose ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: r.onClose
              }, {
                default: b(() => [
                  I(p(r.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              t.showGo ? (a(), y(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: r.onGo
              }, {
                default: b(() => [
                  I(p(r.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : t.mode === "dialog" ? (a(), y(o, {
      key: 1,
      open: r.syncOpen,
      "onUpdate:open": i[0] || (i[0] = (x) => r.syncOpen = x),
      icon: t.icon,
      "icon-type": e.resolvedIconType,
      title: t.title,
      description: t.description,
      "max-width": t.maxWidth,
      "close-on-backdrop": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape,
      "show-close": t.showClose,
      onAfterLeave: i[1] || (i[1] = (x) => e.$emit("after-leave"))
    }, re({
      default: b(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      t.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: b(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: r.onGo
          }, {
            default: b(() => [
              I(p(r.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: b(() => [
          g(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : t.mode === "popover" ? (a(), y(h, {
      key: 2,
      open: r.syncOpen,
      "onUpdate:open": i[2] || (i[2] = (x) => r.syncOpen = x),
      placement: t.placement,
      width: t.popoverWidth,
      "close-on-outside-click": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape
    }, {
      trigger: b((x) => [
        g(e.$slots, "trigger", ti(ii(x)))
      ]),
      content: b(() => [
        c("div", Pa, [
          t.icon || t.title || t.description ? (a(), l("div", Da, [
            t.icon ? (a(), l("span", Ea, [
              w(m, {
                name: t.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Oa, [
              t.title ? (a(), l("p", Ra, p(t.title), 1)) : f("", !0),
              t.description ? (a(), l("p", Va, p(t.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          r.hasFooterActions && !e.$slots.footer ? (a(), l("div", Ba, [
            t.showFooterClose ? (a(), y(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: r.onClose
            }, {
              default: b(() => [
                I(p(r.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            t.showGo ? (a(), y(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: r.onGo
            }, {
              default: b(() => [
                I(p(r.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : t.mode === "tour" ? (a(), y(X, {
      key: 3,
      to: "body"
    }, [
      w(Q, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: i[5] || (i[5] = (x) => e.$emit("after-leave"))
      }, {
        default: b(() => [
          r.syncOpen ? (a(), l("div", {
            key: 0,
            class: _(["ui-guidance-tour", { "ui-guidance-tour--has-target": s.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: i[4] || (i[4] = Z((...x) => r.onEscape && r.onEscape(...x), ["esc"]))
          }, [
            t.closeOnBackdrop ? (a(), l("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: i[3] || (i[3] = (...x) => r.onBackdrop && r.onBackdrop(...x))
            })) : f("", !0),
            s.tourHighlightStyle ? (a(), l("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: O(s.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            c("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: O(s.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": t.title || r.resolvedGoLabel
            }, [
              c("div", Na, [
                c("div", Ha, [
                  c("div", $a, [
                    t.icon ? (a(), l("span", Ya, [
                      w(m, {
                        name: t.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    c("div", Ua, [
                      t.title ? (a(), l("p", Wa, p(t.title), 1)) : f("", !0),
                      t.description ? (a(), l("p", Ga, p(t.description), 1)) : f("", !0)
                    ])
                  ]),
                  t.showClose ? (a(), l("div", Ka, [
                    w(u, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": r.resolvedCloseLabel,
                      onClick: r.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : f("", !0)
                ]),
                e.$slots.default ? (a(), l("div", qa, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                r.hasFooterActions && !e.$slots.footer ? (a(), l("div", ja, [
                  t.showFooterClose ? (a(), y(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onClose
                  }, {
                    default: b(() => [
                      I(p(r.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  t.showGo ? (a(), y(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onGo
                  }, {
                    default: b(() => [
                      I(p(r.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Fa)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const Xa = /* @__PURE__ */ k(Ma, [["render", Za]]), Qa = {
  name: "IconPicker",
  mixins: [R],
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
    iconType: Y,
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
    ...se(),
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), i = Array.isArray(this.icons) ? this.icons : [];
      let t = i;
      e && (t = i.filter((s) => String(s).toLowerCase().includes(e)));
      const n = Number(this.maxResults);
      return Number.isFinite(n) && n > 0 ? t.slice(0, n) : t;
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
}, Ja = ["disabled", "aria-expanded", "onClick"], en = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, tn = { class: "ui-select-field-suffix" }, rn = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, an = { class: "ui-icon-picker-panel" }, nn = { class: "ui-icon-picker-panel__header" }, sn = { class: "ui-icon-picker-panel__title" }, ln = { class: "ui-icon-picker-panel__search" }, on = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, un = {
  key: 1,
  class: "ui-icon-picker-grid"
}, dn = ["title", "onClick"];
function cn(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("ui-input"), m = v("ui-popover");
  return a(), l("div", {
    class: _(r.rootClass)
  }, [
    w(m, {
      open: s.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (h) => s.popoverOpen = h),
      placement: "bottom-start",
      width: t.panelWidth,
      disabled: t.disabled
    }, {
      trigger: b(({ open: h, toggle: x, close: L }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: x,
          close: L
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            onClick: x
          }, [
            c("span", en, [
              w(u, {
                name: r.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            c("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !r.localIcon }])
            }, p(r.localIcon || r.triggerLabel), 3),
            c("span", tn, [
              c("span", rn, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Ja)
        ])
      ]),
      content: b(() => [
        c("div", an, [
          c("div", nn, [
            c("span", sn, p(r.popoverTitleLabel), 1),
            r.localIcon ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: E(r.clearIcon, ["stop"])
            }, {
              default: b(() => [
                I(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", ln, [
            w(o, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": i[0] || (i[0] = (h) => s.searchQuery = h),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: r.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          r.filteredIcons.length ? (a(), l("div", un, [
            (a(!0), l(T, null, P(r.filteredIcons, (h) => (a(), l("button", {
              key: h,
              type: "button",
              class: _(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": r.localIcon === h }]),
              title: h,
              onClick: (x) => r.selectIcon(h)
            }, [
              w(u, {
                name: h,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, dn))), 128))
          ])) : (a(), l("div", on, p(r.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const hn = /* @__PURE__ */ k(Qa, [["render", cn]]), fn = 56, mn = 1.15, pn = 0.28, gn = {
  name: "Intro",
  mixins: [R],
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
      return (Array.isArray(this.steps) ? this.steps : []).map((i, t) => ({
        key: (i == null ? void 0 : i.key) ?? `intro-${t}`,
        icon: (i == null ? void 0 : i.icon) ?? "",
        iconType: (i == null ? void 0 : i.iconType) ?? j(this.uiDefaults, void 0),
        title: (i == null ? void 0 : i.title) ?? "",
        description: (i == null ? void 0 : i.description) ?? "",
        ariaLabel: (i == null ? void 0 : i.ariaLabel) ?? ""
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
      return this.skipLabel || z(this, "ui.intro.skip", "Skip");
    },
    resolvedNextLabel() {
      return this.nextLabel || z(this, "ui.intro.next", "Next");
    },
    resolvedFinishLabel() {
      return this.finishLabel || z(this, "ui.intro.finish", "Get started");
    },
    resolvedAriaLabel() {
      return this.ariaLabel || z(this, "ui.intro.stepsAria", "Introduction");
    },
    resolvedCarouselRole() {
      return z(this, "ui.intro.carouselRole", "carousel");
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
      return Ne(this.$attrs);
    }
  },
  watch: {
    isVisible(e) {
      e && (this.resetDrag(), this.$nextTick(() => {
        var i, t;
        (t = (i = this.$refs.root) == null ? void 0 : i.focus) == null || t.call(i, { preventScroll: !0 });
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
      const i = Math.min(this.lastIndex, Math.max(0, e));
      i !== this.activeIndex && this.$emit("update:modelValue", i);
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
      var i;
      const e = this.$refs.viewport;
      e && this.pointerId != null && ((i = e.hasPointerCapture) != null && i.call(e, this.pointerId)) && e.releasePointerCapture(this.pointerId);
    },
    onPointerDown(e) {
      var i, t;
      if (!(e.pointerType === "mouse" && e.button !== 0) && !this.isInteractiveTarget(e.target) && !(this.normalizedSteps.length < 2)) {
        this.dragging = !0, this.dragOffset = 0, this.pointerId = e.pointerId, this.startX = e.clientX, this.startY = e.clientY, this.startAt = e.timeStamp, this.lockedAxis = null;
        try {
          (t = (i = e.currentTarget) == null ? void 0 : i.setPointerCapture) == null || t.call(i, e.pointerId);
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
      var t;
      if (typeof window < "u" && window.PointerEvent || this.isInteractiveTarget(e.target) || this.normalizedSteps.length < 2) return;
      const i = (t = e.changedTouches) == null ? void 0 : t[0];
      i && (this.dragging = !0, this.dragOffset = 0, this.pointerId = "touch", this.startX = i.clientX, this.startY = i.clientY, this.startAt = e.timeStamp, this.lockedAxis = null);
    },
    onTouchMove(e) {
      var t;
      if (!this.dragging || this.pointerId !== "touch") return;
      const i = (t = e.changedTouches) == null ? void 0 : t[0];
      i && this.applyDrag(i.clientX, i.clientY, e);
    },
    onTouchEnd(e) {
      var t;
      if (!this.dragging || this.pointerId !== "touch") return;
      const i = (t = e.changedTouches) == null ? void 0 : t[0];
      this.commitDrag((i == null ? void 0 : i.clientX) ?? this.startX + this.dragOffset, e.timeStamp);
    },
    applyDrag(e, i, t) {
      var o;
      const n = e - this.startX, s = i - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(n) < 8 && Math.abs(s) < 8) return;
        if (this.lockedAxis = Math.abs(n) > Math.abs(s) * mn ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = t == null ? void 0 : t.preventDefault) == null || o.call(t);
      const r = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let d = n;
      (r && d > 0 || u && d < 0) && (d *= pn), this.dragOffset = d;
    },
    commitDrag(e, i) {
      var m;
      const t = e - this.startX, n = Math.max(1, i - this.startAt), s = t / n, r = ((m = this.$refs.viewport) == null ? void 0 : m.clientWidth) || 0, u = Math.max(fn, r * 0.18), d = this.lockedAxis === "x" && (Math.abs(t) >= u || Math.abs(s) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !d) return;
      if (this.isRtl() ? t > 0 : t < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, yn = ["aria-modal", "aria-label", "aria-roledescription"], bn = { class: "ui-intro__header" }, vn = ["aria-hidden"], _n = {
  key: 0,
  class: "ui-intro__icon"
}, kn = {
  key: 1,
  class: "ui-intro__title"
}, wn = {
  key: 2,
  class: "ui-intro__description"
}, xn = { class: "ui-intro__footer" }, Sn = ["aria-label"], Cn = ["aria-selected", "aria-label", "onClick"];
function Tn(e, i, t, n, s, r) {
  const u = v("ui-button"), d = v("ui-icon");
  return a(), y(X, {
    to: "body",
    disabled: !t.overlay
  }, [
    w(Q, { name: "ui-intro-shell" }, {
      default: b(() => [
        r.isVisible ? (a(), l("div", C({
          key: 0,
          ref: "root",
          class: r.rootClass,
          role: "dialog",
          "aria-modal": t.overlay ? "true" : void 0,
          "aria-label": r.resolvedAriaLabel,
          "aria-roledescription": r.resolvedCarouselRole,
          tabindex: "-1"
        }, r.passthroughAttrs, {
          onKeydown: i[8] || (i[8] = (...o) => r.onRootKeydown && r.onRootKeydown(...o))
        }), [
          c("div", bn, [
            g(e.$slots, "header", {}, () => [
              t.showSkip ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: r.onSkip
              }, {
                default: b(() => [
                  I(p(r.resolvedSkipLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ]),
          c("div", {
            ref: "viewport",
            class: "ui-intro__viewport",
            onPointerdown: i[0] || (i[0] = (...o) => r.onPointerDown && r.onPointerDown(...o)),
            onPointermove: i[1] || (i[1] = (...o) => r.onPointerMove && r.onPointerMove(...o)),
            onPointerup: i[2] || (i[2] = (...o) => r.onPointerUp && r.onPointerUp(...o)),
            onPointercancel: i[3] || (i[3] = (...o) => r.onPointerUp && r.onPointerUp(...o)),
            onTouchstartPassive: i[4] || (i[4] = (...o) => r.onTouchStart && r.onTouchStart(...o)),
            onTouchmove: i[5] || (i[5] = (...o) => r.onTouchMove && r.onTouchMove(...o)),
            onTouchend: i[6] || (i[6] = (...o) => r.onTouchEnd && r.onTouchEnd(...o)),
            onTouchcancel: i[7] || (i[7] = (...o) => r.onTouchEnd && r.onTouchEnd(...o))
          }, [
            c("div", {
              class: _(["ui-intro__track", { "ui-intro__track--dragging": s.dragging }]),
              style: O(r.trackStyle)
            }, [
              (a(!0), l(T, null, P(r.normalizedSteps, (o, m) => (a(), l("div", {
                key: o.key,
                class: "ui-intro__slide",
                "aria-hidden": m === r.activeIndex ? void 0 : "true"
              }, [
                g(e.$slots, "default", {
                  step: o,
                  index: m,
                  active: m === r.activeIndex
                }, () => [
                  o.icon ? (a(), l("span", _n, [
                    w(d, {
                      name: o.icon,
                      type: o.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  o.title ? (a(), l("h2", kn, p(o.title), 1)) : f("", !0),
                  o.description ? (a(), l("p", wn, p(o.description), 1)) : f("", !0)
                ])
              ], 8, vn))), 128))
            ], 6)
          ], 544),
          c("div", xn, [
            g(e.$slots, "footer", {
              index: r.activeIndex,
              isLast: r.isLastStep,
              goNext: r.goNext,
              goPrev: r.goPrev,
              goTo: r.goTo
            }, () => [
              r.normalizedSteps.length > 1 ? (a(), l("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": r.resolvedAriaLabel
              }, [
                (a(!0), l(T, null, P(r.normalizedSteps, (o, m) => (a(), l("button", {
                  key: o.key,
                  type: "button",
                  class: _(["ui-intro__dot", { "ui-intro__dot--active": m === r.activeIndex }]),
                  role: "tab",
                  "aria-selected": m === r.activeIndex,
                  "aria-label": o.ariaLabel || o.title || String(m + 1),
                  onClick: (h) => r.goTo(m)
                }, null, 10, Cn))), 128))
              ], 8, Sn)) : f("", !0),
              w(u, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: r.goNext
              }, {
                default: b(() => [
                  I(p(r.primaryLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ], 16, yn)) : f("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const Ln = /* @__PURE__ */ k(gn, [["render", Tn]]), In = ["sm", "md", "lg", "full"], Ie = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, An = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    /**
     * `full` (varsayılan): kapsayıcıyı (kart, sidebar) doldurur.
     * `sm` / `md` / `lg`: sabit genişlik — yüzen panel vb.
     */
    width: {
      type: String,
      default: "full",
      validator: (e) => In.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        Ie[this.width] || Ie.full,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Mn = {
  key: 0,
  class: "ui-menu-header"
}, zn = { class: "ui-menu-body" }, Pn = {
  key: 1,
  class: "ui-menu-footer"
};
function Dn(e, i, t, n, s, r) {
  return a(), l("nav", C({ class: r.rootClass }, r.passthroughAttrs), [
    e.$slots.header ? (a(), l("div", Mn, [
      g(e.$slots, "header")
    ])) : f("", !0),
    c("div", zn, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), l("div", Pn, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const En = /* @__PURE__ */ k(An, [["render", Dn]]), On = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Rn = {
  key: 0,
  class: "ui-menu-group-label"
}, Vn = { class: "ui-menu-group-items" };
function Bn(e, i, t, n, s, r) {
  return a(), l("div", C({ class: r.groupClass }, r.passthroughAttrs), [
    t.label ? (a(), l("p", Rn, p(t.label), 1)) : f("", !0),
    c("div", Vn, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const Fn = /* @__PURE__ */ k(On, [["render", Bn]]), Nn = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function Hn(e, i, t, n, s, r) {
  const u = v("ui-button");
  return a(), y(u, C({
    type: "button",
    variant: "ghost",
    color: "secondary",
    block: "",
    "text-align": "left",
    to: t.to,
    "prefix-icon": t.prefixIcon,
    "suffix-icon": t.suffixIcon,
    disabled: t.disabled,
    loading: t.loading,
    class: r.itemClass,
    "aria-current": t.active ? "page" : void 0
  }, r.forwardedAttrs, { onClick: r.onClick }), {
    default: b(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const $n = /* @__PURE__ */ k(Nn, [["render", Hn]]), Yn = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Un = ["aria-label"];
function Wn(e, i, t, n, s, r) {
  return a(), l("div", C({
    class: r.navClass,
    role: "navigation",
    "aria-label": t.ariaLabel || void 0
  }, r.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Un);
}
const Gn = /* @__PURE__ */ k(Yn, [["render", Wn]]);
function Kn(e) {
  const i = String(e ?? "");
  if (!i)
    return { score: 0, percent: 0, label: "empty" };
  let t = 0;
  i.length >= 8 && (t += 1), i.length >= 12 && (t += 1), /[a-z]/.test(i) && /[A-Z]/.test(i) ? t += 1 : /[a-zA-Z]/.test(i) && (t += 0.5), /\d/.test(i) && (t += 1), /[^a-zA-Z0-9]/.test(i) && (t += 1);
  const n = Math.min(4, Math.round(t)), s = ["weak", "fair", "good", "strong"], r = n <= 0 ? "weak" : s[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: r
  };
}
const qn = $("ui-password"), jn = F, Zn = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || jn.includes(e)
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
    const e = qn(), i = e.slice(12);
    return {
      fallbackId: e,
      fallbackStrengthId: `ui-password-strength-${i}`,
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
      return Kn(this.modelValue);
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
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), i = {};
      for (const [t, n] of Object.entries(this.$attrs))
        e.has(t) || (i[t] = n);
      return i;
    }
  }
}, Xn = ["aria-label", "aria-pressed", "disabled"], Qn = ["id", "aria-live"];
function Jn(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("ui-input"), o = v("ui-progress");
  return a(), l("div", {
    class: _(["ui-password", [e.$attrs.class]])
  }, [
    w(d, C({
      id: r.resolvedId,
      modelValue: r.innerValue,
      "onUpdate:modelValue": i[1] || (i[1] = (m) => r.innerValue = m),
      type: s.visible ? "text" : "password",
      size: t.size,
      disabled: t.disabled,
      readonly: t.readonly,
      placeholder: t.placeholder,
      name: t.name,
      autocomplete: t.autocomplete,
      maxlength: t.maxlength,
      "aria-describedby": r.strengthDescribedby
    }, r.passthroughAttrs, {
      onFocus: i[2] || (i[2] = (m) => e.$emit("focus", m)),
      onBlur: i[3] || (i[3] = (m) => e.$emit("blur", m))
    }), {
      append: b(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": r.toggleAriaLabel,
          "aria-pressed": s.visible ? "true" : "false",
          disabled: t.disabled,
          onClick: i[0] || (i[0] = (m) => s.visible = !s.visible)
        }, [
          w(u, {
            name: s.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Xn)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    r.showStrengthMeter ? (a(), l("div", {
      key: 0,
      id: s.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": r.innerValue ? "polite" : "off"
    }, [
      w(o, {
        type: "bar",
        size: "md",
        value: r.strength.percent,
        variant: r.strengthVariant,
        "aria-valuetext": r.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      r.strength.label !== "empty" ? (a(), l("span", {
        key: 0,
        class: _(["ui-password-strength-label", `ui-password-strength-label--${r.strength.label}`])
      }, p(r.strengthText), 3)) : f("", !0)
    ], 8, Qn)) : f("", !0)
  ], 2);
}
const es = /* @__PURE__ */ k(Zn, [["render", Jn]]), ts = ["square", "video", "auto"], is = ["fill", "sm", "md", "lg"], Ae = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, rs = {
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
      validator: (e) => ts.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => is.includes(e)
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
        Ae[this.size] || Ae.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), i = {};
      for (const [t, n] of Object.entries(this.$attrs))
        e.has(t) || (i[t] = n);
      return i;
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
}, as = ["src", "alt"], ns = ["aria-hidden"], ss = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, ls = {
  key: 3,
  class: "ui-photo__overflow"
}, os = ["aria-label"], us = ["aria-label"], ds = { class: "ui-photo-preview__panel" }, cs = ["src", "alt"], hs = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function fs(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("ui-button");
  return a(), l(T, null, [
    (a(), y(G(r.rootTag), C({
      type: t.interactive ? "button" : void 0,
      class: r.rootClass
    }, r.rootBind, { onClick: r.onClick }), {
      default: b(() => [
        t.src && !s.imageFailed ? (a(), l("img", {
          key: 0,
          src: t.src,
          alt: r.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: i[0] || (i[0] = (o) => s.imageFailed = !0)
        }, null, 40, as)) : (a(), l("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": t.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, ns)),
        t.favorite ? (a(), l("span", ss, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        t.overflowLabel ? (a(), l("span", ls, p(t.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), y(X, { to: "body" }, [
      w(Q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: b(() => [
          s.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: i[2] || (i[2] = (...o) => r.onPreviewKeydown && r.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: i[1] || (i[1] = (...o) => r.closePreview && r.closePreview(...o))
            }, null, 8, us),
            c("div", ds, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: E(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.activeSrc ? (a(), l("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, cs)) : f("", !0),
              r.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: E(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.counterLabel ? (a(), l("p", hs, p(r.counterLabel), 1)) : f("", !0)
            ])
          ], 40, os)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ms = /* @__PURE__ */ k(rs, [["render", fs]]), ps = ["square", "video", "auto"], gs = {
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
      validator: (e) => ps.includes(e)
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
      return (this.items || []).map((e, i) => {
        const t = String((e == null ? void 0 : e.src) ?? (e == null ? void 0 : e.url) ?? "").trim();
        return t ? {
          key: (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.key) ?? null,
          src: t,
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
}, ys = ["data-count"], bs = ["aria-label"], vs = ["aria-label"], _s = { class: "ui-photo-preview__panel" }, ks = ["src", "alt"], ws = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function xs(e, i, t, n, s, r) {
  const u = v("ui-photo"), d = v("ui-button");
  return a(), l(T, null, [
    c("div", {
      class: _(["ui-photos", r.layoutClass]),
      "data-count": r.displayCount
    }, [
      (a(!0), l(T, null, P(r.visibleItems, (o, m) => (a(), y(u, {
        key: o.key || `${o.src}-${m}`,
        src: o.src,
        alt: o.alt || "",
        favorite: !!o.favorite,
        aspect: t.aspect,
        preview: t.preview,
        "gallery-index": m,
        "overflow-label": m === r.visibleItems.length - 1 && r.overflowCount > 0 ? r.overflowLabel : "",
        "aria-label": o.alt || void 0,
        onOpenPreview: r.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, ys),
    (a(), y(X, { to: "body" }, [
      w(Q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: b(() => [
          s.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: i[1] || (i[1] = (...o) => r.onPreviewKeydown && r.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: i[0] || (i[0] = (...o) => r.closePreview && r.closePreview(...o))
            }, null, 8, vs),
            c("div", _s, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: E(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.activeSrc ? (a(), l("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, ks)) : f("", !0),
              r.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: E(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.counterLabel ? (a(), l("p", ws, p(r.counterLabel), 1)) : f("", !0)
            ])
          ], 40, bs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Ss = /* @__PURE__ */ k(gs, [["render", xs]]), Cs = ["sm", "md", "lg", "xl", "2xl"], Ts = ["default", "foreground", "muted", "success", "danger", "primary"], Ls = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Cs.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ts.includes(e)
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
function Is(e, i, t, n, s, r) {
  return a(), l("span", {
    class: _(["ui-price-text", r.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      I(p(t.value), 1)
    ])
  ], 2);
}
const ge = /* @__PURE__ */ k(Ls, [["render", Is]]), As = F, Ms = ["sm", "md", "lg", "xl", "2xl"], zs = ["default", "foreground", "muted", "success", "danger", "primary"], Ps = {
  name: "PriceDisplay",
  components: { PriceText: ge },
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
      validator: (e) => As.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => Ms.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => zs.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Ds = { class: "ui-price-display__label" };
function Es(e, i, t, n, s, r) {
  const u = v("ui-price-text");
  return a(), l("div", {
    class: _(["ui-price-display", r.rootClass])
  }, [
    c("span", Ds, p(t.label), 1),
    w(u, {
      value: t.value,
      size: t.valueSize,
      tone: t.tone
    }, {
      default: b(() => [
        g(e.$slots, "value", {}, () => [
          I(p(t.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Os = /* @__PURE__ */ k(Ps, [["render", Es]]), Rs = F, Vs = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Rs.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function Bs(e, i, t, n, s, r) {
  return a(), l("div", {
    class: _(["ui-price-display-group", r.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Fs = /* @__PURE__ */ k(Vs, [["render", Bs]]), Ns = ["sm", "md", "lg", "xl", "2xl"], Hs = ["default", "foreground", "muted", "success", "danger", "primary"], $s = {
  name: "PriceDisplayRow",
  components: { PriceText: ge },
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
      validator: (e) => Ns.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Hs.includes(e)
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
}, Ys = { class: "ui-price-display-row__label" };
function Us(e, i, t, n, s, r) {
  const u = v("ui-price-text");
  return a(), l("div", {
    class: _(["ui-price-display-row", r.rootClass])
  }, [
    c("span", Ys, p(t.label), 1),
    w(u, {
      value: t.value,
      size: t.valueSize,
      tone: t.tone
    }, {
      default: b(() => [
        g(e.$slots, "value", {}, () => [
          I(p(t.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Ws = /* @__PURE__ */ k($s, [["render", Us]]), Gs = ["tr-TR", "en-US"], ne = pe({
  currency: "TRY",
  format: "tr-TR"
});
function Ks(e, i = ne.format) {
  return Gs.includes(e) ? e : i;
}
function qs(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (ne.currency = le(e.currency));
  const i = e.format ?? e.locale;
  i != null && (ne.format = Ks(i));
}
function js() {
  return ri(ne);
}
const Zs = {
  name: "PriceInput",
  components: { CurrencyInput: je },
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
    return { priceInputConfig: js() };
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
function Xs(e, i, t, n, s, r) {
  const u = v("CurrencyInput");
  return a(), y(u, C({
    "model-value": t.modelValue,
    currency: r.resolvedCurrency,
    locale: r.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": i[0] || (i[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: i[1] || (i[1] = (d) => e.$emit("input", d)),
    onChange: i[2] || (i[2] = (d) => e.$emit("change", d)),
    onFocus: i[3] || (i[3] = (d) => e.$emit("focus", d)),
    onBlur: i[4] || (i[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Qs = /* @__PURE__ */ k(Zs, [["render", Xs]]), Js = ["bar", "circle"], Me = ["sm", "md", "lg", "xl", "2xl"], ze = ["thin", "md"], el = ["default", "weak", "fair", "good", "strong"], ee = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, tl = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, il = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Js.includes(e)
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
      validator: (e) => el.includes(e)
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
      const e = this.type === "circle" ? Me.includes(this.size) ? this.size : "sm" : ze.includes(this.size) ? this.size : "md";
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
      return Me.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return ze.includes(this.size) ? this.size : "md";
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
      const i = Number(this.value);
      return Number.isFinite(i) ? Math.min(100, Math.max(0, i / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = ee[this.circleSizeKey] ?? ee.sm, i = tl[this.circleSizeKey] ?? 2, t = (e - i) / 2, n = e / 2, s = 2 * Math.PI * t, r = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: i, radius: t, center: n, circumference: s, offset: r };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, rl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], al = ["width", "height", "viewBox"], nl = ["cx", "cy", "r", "stroke-width"], sl = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], ll = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ol(e, i, t, n, s, r) {
  return a(), l("div", {
    class: _(r.rootClass),
    style: O(r.circleRootStyle),
    role: t.presentational ? void 0 : "progressbar",
    "aria-valuenow": t.presentational || t.indeterminate ? void 0 : r.ariaValueNow,
    "aria-valuemin": t.presentational ? void 0 : 0,
    "aria-valuemax": t.presentational ? void 0 : t.max,
    "aria-label": t.presentational ? void 0 : r.resolvedAriaLabel,
    "aria-valuetext": t.presentational ? void 0 : t.ariaValuetext
  }, [
    t.type === "circle" ? (a(), l("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: r.circleMetrics.size,
      height: r.circleMetrics.size,
      viewBox: `0 0 ${r.circleMetrics.size} ${r.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke
      }, null, 8, nl),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke,
        "stroke-dasharray": r.circleMetrics.circumference,
        "stroke-dashoffset": r.circleMetrics.offset
      }, null, 8, sl)
    ], 8, al)) : (a(), l("div", ll, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: O({ width: `${r.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, rl);
}
const ul = /* @__PURE__ */ k(il, [["render", ol]]), dl = {
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
}, cl = { class: "ui-section" }, hl = {
  key: 1,
  class: "ui-section-description ui-text-default"
}, fl = {
  key: 3,
  class: "ui-section-fields"
}, ml = {
  key: 4,
  class: "ui-section-body"
};
function pl(e, i, t, n, s, r) {
  const u = v("ui-divider");
  return a(), l("section", cl, [
    r.showSectionDivider ? (a(), y(u, {
      key: 0,
      title: t.title,
      icon: t.icon,
      spacing: "md",
      decorative: !1
    }, null, 8, ["title", "icon"])) : f("", !0),
    t.description ? (a(), l("p", hl, p(t.description), 1)) : f("", !0),
    e.$slots.empty ? g(e.$slots, "empty", { key: 2 }) : r.hasFields ? (a(), l("div", fl, [
      g(e.$slots, "default")
    ])) : e.$slots.body ? (a(), l("div", ml, [
      g(e.$slots, "body")
    ])) : f("", !0)
  ]);
}
const gl = /* @__PURE__ */ k(dl, [["render", pl]]), yl = {
  name: "SelectionIndicator",
  mixins: [it],
  props: {
    /** Seçili öğe seçicisi (kapsayıcı içinde aranır). */
    selector: {
      type: String,
      required: !0
    }
  },
  computed: {
    indicatorEnabled() {
      return !0;
    },
    indicatorSelector() {
      return this.selector;
    }
  },
  watch: {
    indicatorRootAttrs: {
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const i = this.indicatorRootEl();
          i && (i.setAttribute("data-ui-indicator-host", ""), e["data-ui-indicator"] && i.setAttribute("data-ui-indicator", e["data-ui-indicator"]));
        });
      }
    }
  },
  beforeUnmount() {
    const e = this.indicatorRootEl();
    e == null || e.removeAttribute("data-ui-indicator"), e == null || e.removeAttribute("data-ui-indicator-host");
  },
  methods: {
    indicatorRootEl() {
      var e;
      return ((e = this.$el) == null ? void 0 : e.parentElement) || null;
    }
  }
};
function bl(e, i, t, n, s, r) {
  return a(), l("span", C({
    ref: "indicator",
    class: "ui-selection-indicator"
  }, e.indicatorBind), [...i[0] || (i[0] = [
    c("span", { class: "ui-selection-indicator-fill" }, null, -1)
  ])], 16);
}
const vl = /* @__PURE__ */ k(yl, [["render", bl]]), _l = $("ui-sheet"), kl = ["left", "right"], wl = ["sm", "md", "lg", "xl"], xl = ["solid", "regular", "brands", "light", "duotone", "thin"], Pe = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Sl = {
  name: "Sheet",
  mixins: [rt, R],
  components: { Divider: He },
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
      validator: (e) => kl.includes(e)
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
      validator: (e) => wl.includes(e)
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
      validator: (e) => e == null || xl.includes(e)
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
    const e = _l();
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
        e ? (this.returnFocusEl = fe(), this.acquireLayer(), this.scheduleInitialFocus()) : (this.releaseLayer(), this.clearFocusFallback());
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
      return j(this.uiDefaults, this.iconType);
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
      return Pe[this.size] || Pe.md;
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
      return Ne(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : z(this, "ui.dialog.close", "Close");
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
      this.rootZIndex == null && (this.rootZIndex = st(this, "modal", () => this.close()));
    },
    releaseLayer() {
      this.rootZIndex != null && (nt(this), this.rootZIndex = null);
    },
    close() {
      this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.overlay && this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      if (e.key === "Escape" && this.closeOnEscape) {
        e.stopPropagation(), this.close();
        return;
      }
      this.overlay && at(e, this.$refs.panelRef);
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    onOverlayAfterLeave() {
      this.$emit("after-leave"), me(this.returnFocusEl), this.returnFocusEl = null;
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      this.clearFocusFallback(), !(!this.initialFocus || !this.open) && this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) return;
        $e(e) || (this.focusFallbackTimer = setTimeout(() => {
          var t;
          this.focusFallbackTimer = null, (t = e.focus) == null || t.call(e);
        }, 50));
      });
    }
  }
}, Cl = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Tl = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Ll = ["id"], Il = {
  key: 1,
  class: "ui-sheet-header__icon"
}, Al = {
  key: 2,
  class: "ui-sheet-header__actions"
}, Ml = ["id"], zl = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Pl(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("ui-button"), o = v("Divider");
  return s.portalReady ? (a(), y(X, {
    key: 0,
    to: e.portalTarget
  }, [
    w(Q, {
      name: r.transitionName,
      appear: "",
      onAfterEnter: r.onOverlayAfterEnter,
      onAfterLeave: r.onOverlayAfterLeave
    }, {
      default: b(() => [
        t.open ? (a(), l("div", {
          key: 0,
          ref: "layerRef",
          class: _(r.rootLayerClasses),
          style: O(r.rootLayerStyle),
          tabindex: "-1",
          role: "presentation",
          onKeydown: i[2] || (i[2] = (...m) => r.onLayerKeydown && r.onLayerKeydown(...m))
        }, [
          t.overlay ? (a(), l("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
            "aria-hidden": "true",
            onClick: i[0] || (i[0] = (...m) => r.onBackdrop && r.onBackdrop(...m))
          })) : f("", !0),
          c("div", C({
            ref: "panelRef",
            class: r.panelClasses,
            role: "dialog",
            "aria-modal": t.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": r.ariaLabelledby,
            "aria-describedby": r.ariaDescribedby,
            "aria-label": r.ariaLabelAttr
          }, r.passthroughAttrs, {
            onClick: i[1] || (i[1] = E(() => {
            }, ["stop"]))
          }), [
            r.hasHeaderBlock ? (a(), l("div", Tl, [
              g(e.$slots, "header", {}, () => [
                r.hasDefaultHeader ? (a(), l("div", {
                  key: 0,
                  class: _(["ui-sheet-header", { "ui-sheet-header--no-icon": !t.icon }])
                }, [
                  t.title ? (a(), l("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(t.title), 9, Ll)) : f("", !0),
                  t.icon ? (a(), l("span", Il, [
                    w(u, {
                      name: t.icon,
                      type: r.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), l("div", Al, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  t.showClose ? (a(), y(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": r.resolvedCloseLabel,
                    onClick: r.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  t.description ? (a(), l("p", {
                    key: 4,
                    id: s.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(t.description), 9, Ml)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), l("div", zl, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            r.showHeaderDivider ? (a(), y(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), l("div", {
              key: 3,
              class: _(["ui-card-body ui-text-default", {
                "ui-card-body--flush": t.bodyPadding === "none",
                "ui-card-body--flex": t.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), l("div", {
              key: 4,
              class: _(["ui-card-footer", { "ui-sheet-footer--borderless": !t.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, Cl)
        ], 38)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to"])) : f("", !0);
}
const Dl = /* @__PURE__ */ k(Sl, [["render", Pl]]), El = ["sm", "md", "lg"], Ol = ["button", "submit", "reset"], De = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ee = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Rl = {
  name: "SidebarItem",
  mixins: [R],
  components: { RouterLink: oi },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => Ol.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || El.includes(e)
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
      return Ve(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
    },
    hasRenderableDefaultSlot() {
      const e = this.$slots.default;
      return e ? e().some((i) => this.isRenderableVNode(i)) : !1;
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
      const { class: e, ...i } = this.$attrs;
      return i;
    },
    itemClasses() {
      const e = this.cubed ? Ee[this.resolvedSize] || Ee.md : De[this.resolvedSize] || De.md;
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
      if (e == null || typeof e != "object" || e.type === ai) return !1;
      if (e.type === ni)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === T) {
        const i = e.children;
        return Array.isArray(i) ? i.some((t) => this.isRenderableVNode(t)) : !1;
      }
      return !0;
    },
    onClick(e) {
      this.disabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, i) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), !e.defaultPrevented && i(e);
    }
  }
}, Vl = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], Bl = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Fl = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Nl = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Hl = ["type", "disabled", "aria-current"], $l = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Yl = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ul = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Wl(e, i, t, n, s, r) {
  const u = v("ui-icon"), d = v("RouterLink");
  return r.hasRouterTo ? (a(), y(d, {
    key: 0,
    to: t.to,
    custom: ""
  }, {
    default: b(({ href: o, navigate: m }) => [
      c("a", C({
        href: o,
        class: r.itemClasses,
        "aria-current": t.active ? "page" : void 0,
        "aria-disabled": t.disabled ? "true" : void 0,
        tabindex: t.disabled ? -1 : void 0
      }, r.forwardedAttrs, {
        onClick: (h) => r.onRouterLinkClick(h, m)
      }), [
        r.usesCubedCenterLayout ? (a(), l("span", Bl, [
          t.prefixIcon ? (a(), y(u, {
            key: 0,
            size: r.cubedIconSize,
            name: t.prefixIcon
          }, null, 8, ["size", "name"])) : t.suffixIcon ? (a(), y(u, {
            key: 1,
            size: r.cubedIconSize,
            name: t.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (a(), l(T, { key: 1 }, [
          t.prefixIcon ? (a(), l("span", Fl, [
            w(u, {
              size: r.inlineIconSize,
              name: t.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          c("span", {
            class: _(r.textContentClass)
          }, [
            g(e.$slots, "default")
          ], 2),
          t.suffixIcon ? (a(), l("span", Nl, [
            w(u, {
              size: r.inlineIconSize,
              name: t.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 16, Vl)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), l("button", C({
    key: 1,
    type: t.nativeType,
    class: r.itemClasses,
    disabled: t.disabled || void 0,
    "aria-current": t.active ? "page" : void 0
  }, r.forwardedAttrs, {
    onClick: i[0] || (i[0] = (...o) => r.onClick && r.onClick(...o))
  }), [
    r.usesCubedCenterLayout ? (a(), l("span", $l, [
      t.prefixIcon ? (a(), y(u, {
        key: 0,
        size: r.cubedIconSize,
        name: t.prefixIcon
      }, null, 8, ["size", "name"])) : t.suffixIcon ? (a(), y(u, {
        key: 1,
        size: r.cubedIconSize,
        name: t.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (a(), l(T, { key: 1 }, [
      t.prefixIcon ? (a(), l("span", Yl, [
        w(u, {
          size: r.inlineIconSize,
          name: t.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      c("span", {
        class: _(r.textContentClass)
      }, [
        g(e.$slots, "default")
      ], 2),
      t.suffixIcon ? (a(), l("span", Ul, [
        w(u, {
          size: r.inlineIconSize,
          name: t.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 16, Hl));
}
const Gl = /* @__PURE__ */ k(Rl, [["render", Wl]]), Kl = $("ui-slider"), ql = {
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
    return { fallbackId: Kl() };
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
      const i = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, i));
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
      ]), i = {};
      for (const [t, n] of Object.entries(this.$attrs))
        e.has(t) || (i[t] = n);
      return i;
    }
  },
  methods: {
    onNativeInput(e) {
      const i = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(i) ? this.min : i), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, jl = {
  key: 0,
  class: "ui-slider-header"
}, Zl = {
  key: 0,
  class: "ui-form-label"
}, Xl = {
  key: 1,
  class: "ui-slider-value"
}, Ql = { class: "ui-slider-rail" }, Jl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], eo = {
  key: 1,
  class: "ui-slider-scale"
}, to = { key: 0 }, io = { key: 1 };
function ro(e, i, t, n, s, r) {
  const u = v("ui-progress");
  return a(), l("div", {
    class: _(r.rootClass)
  }, [
    t.label || r.hasValue ? (a(), l("div", jl, [
      t.label ? (a(), l("span", Zl, p(t.label), 1)) : f("", !0),
      r.hasValue ? (a(), l("span", Xl, p(t.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", Ql, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: r.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", C(r.passthroughAttrs, {
        id: r.resolvedId,
        value: t.modelValue,
        type: "range",
        class: "ui-slider-input",
        min: t.min,
        max: t.max,
        step: t.step,
        disabled: t.disabled,
        "aria-valuemin": t.min,
        "aria-valuemax": t.max,
        "aria-valuenow": t.modelValue,
        "aria-valuetext": t.valueText || String(t.modelValue),
        "aria-describedby": t.ariaDescribedby,
        onInput: i[0] || (i[0] = (...d) => r.onNativeInput && r.onNativeInput(...d)),
        onChange: i[1] || (i[1] = (...d) => r.onChange && r.onChange(...d))
      }), null, 16, Jl)
    ]),
    t.minLabel || t.maxLabel ? (a(), l("div", eo, [
      t.minLabel ? (a(), l("span", to, p(t.minLabel), 1)) : f("", !0),
      t.maxLabel ? (a(), l("span", io, p(t.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const ao = /* @__PURE__ */ k(ql, [["render", ro]]), no = F, so = ["primary", "secondary", "success", "warning", "info", "danger"], lo = ["soft", "surface"], Oe = {
  sm: "ui-display-sm",
  md: "ui-display-md",
  lg: "ui-display-lg"
}, oo = {
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
    iconType: Y,
    /** Başlık ikonu tonu */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || so.includes(e)
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
      validator: (e) => lo.includes(e)
    },
    /** Değer ölçüsü: sm 18px · md 20px · lg 24px */
    size: {
      type: String,
      default: "lg",
      validator: (e) => no.includes(e)
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
      const { class: e, onClick: i, ...t } = this.$attrs;
      return t;
    },
    valueClass() {
      return S("ui-stat-value", Oe[this.size] || Oe.lg);
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
      var n;
      if (this.changeText) return this.changeText;
      const e = this.numericChange;
      if (e == null) return "";
      const i = ((n = this.$i18n) == null ? void 0 : n.locale) || void 0;
      return `${new Intl.NumberFormat(i, {
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
}, uo = ["role", "tabindex", "aria-busy"], co = {
  key: 0,
  class: "ui-stat-value-skeleton"
}, ho = {
  key: 1,
  class: "ui-stat-change-label"
}, fo = {
  key: 3,
  class: "ui-stat-body"
}, mo = {
  key: 4,
  class: "ui-stat-footer"
};
function po(e, i, t, n, s, r) {
  const u = v("ui-skeleton"), d = v("ui-icon"), o = v("ui-field");
  return a(), l("div", C({
    class: r.rootClass,
    role: t.interactive ? "button" : void 0,
    tabindex: t.interactive ? 0 : void 0,
    "aria-busy": t.loading ? "true" : void 0
  }, r.passthroughAttrs, {
    onClick: i[0] || (i[0] = (...m) => r.onActivate && r.onActivate(...m)),
    onKeydown: [
      i[1] || (i[1] = Z(E((...m) => r.onActivate && r.onActivate(...m), ["prevent"]), ["enter"])),
      i[2] || (i[2] = Z(E((...m) => r.onActivate && r.onActivate(...m), ["prevent"]), ["space"]))
    ]
  }), [
    w(o, {
      card: t.variant === "soft",
      fill: "",
      title: t.title,
      icon: t.icon,
      "icon-type": t.iconType,
      "icon-tone": t.color || void 0
    }, {
      default: b(() => [
        t.loading ? (a(), l("span", co, [
          w(u, {
            variant: "line",
            size: "md"
          })
        ])) : (a(), l("p", {
          key: 1,
          class: _(r.valueClass)
        }, [
          g(e.$slots, "value", {}, () => [
            I(p(t.value), 1)
          ])
        ], 2)),
        r.showChangeRow ? (a(), l("p", {
          key: 2,
          class: _(r.changeClass)
        }, [
          r.hasChangeContent ? (a(), l(T, { key: 0 }, [
            r.changeIcon ? (a(), y(d, {
              key: 0,
              name: r.changeIcon,
              size: "xs",
              "aria-hidden": "true"
            }, null, 8, ["name"])) : f("", !0),
            c("span", null, p(r.changeDisplay), 1),
            t.changeLabel ? (a(), l("span", ho, p(t.changeLabel), 1)) : f("", !0)
          ], 64)) : (a(), l(T, { key: 1 }, [
            I(p(" "))
          ], 64))
        ], 2)) : f("", !0),
        e.$slots.default ? (a(), l("div", fo, [
          g(e.$slots, "default")
        ])) : f("", !0),
        e.$slots.footer ? (a(), l("div", mo, [
          g(e.$slots, "footer")
        ])) : f("", !0)
      ]),
      _: 3
    }, 8, ["card", "title", "icon", "icon-type", "icon-tone"])
  ], 16, uo);
}
const go = /* @__PURE__ */ k(oo, [["render", po]]), yo = [1, 2, 3, 4], bo = {
  name: "StatGroup",
  inheritAttrs: !1,
  props: {
    /** Geniş ekrandaki en fazla sütun sayısı */
    columns: {
      type: Number,
      default: 3,
      validator: (e) => yo.includes(e)
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, vo = ["aria-label"];
function _o(e, i, t, n, s, r) {
  return a(), l("div", C({
    class: r.rootClass,
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, r.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, vo);
}
const ko = /* @__PURE__ */ k(bo, [["render", _o]]), wo = {
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
    active(e, i) {
      e && i === !1 && this.scheduleFocus();
    }
  },
  methods: {
    resolveFocusRoot() {
      const e = this.$refs.root;
      return e instanceof HTMLElement ? e.closest(".ui-dialog-panel") || e.closest(".ui-sheet-panel") || e.closest(".ui-card") || e : null;
    },
    scheduleFocus() {
      !this.autofocus || !this.active || Fe() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && $e(e);
        });
      });
    }
  }
}, xo = {
  ref: "root",
  class: "ui-step"
};
function So(e, i, t, n, s, r) {
  return Ue((a(), l("div", xo, [
    g(e.$slots, "default")
  ], 512)), [
    [We, t.active]
  ]);
}
const Co = /* @__PURE__ */ k(wo, [["render", So]]), To = ["horizontal", "vertical"], Lo = ["default", "pills"], Io = {
  name: "Stepper",
  mixins: [R],
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
      validator: (e) => Lo.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => To.includes(e)
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
      return (Array.isArray(this.steps) ? this.steps : []).map((i) => ({
        title: (i == null ? void 0 : i.title) ?? "",
        description: (i == null ? void 0 : i.description) ?? "",
        icon: (i == null ? void 0 : i.icon) ?? null,
        iconType: (i == null ? void 0 : i.iconType) ?? j(this.uiDefaults, void 0)
      }));
    },
    rootClass() {
      return S(
        "ui-stepper",
        this.variant === "pills" && "ui-stepper--pills",
        this.variant === "pills" && this.interactive && "ui-stepper--interactive",
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const i = this.normalizedSteps.length - 1, t = Math.min(i, Math.max(0, e));
      this.$emit("update:modelValue", t);
    },
    pillClass(e) {
      const i = this.modelValue;
      return e < i ? "ui-stepper-pill--complete" : e === i ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const i = this.modelValue;
      return e < i ? "ui-stepper-indicator--complete" : e === i ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
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
}, Ao = ["role", "aria-label"], Mo = { class: "ui-stepper-pills-track" }, zo = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Po = { class: "flex w-full min-w-0 items-center justify-center" }, Do = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Eo = {
  key: 1,
  class: "tabular-nums"
}, Oo = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Ro = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Vo = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Bo = { class: "flex flex-col items-center" }, Fo = {
  key: 1,
  class: "tabular-nums"
}, No = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Ho = { class: "ui-stepper-title" }, $o = {
  key: 0,
  class: "ui-stepper-description"
};
function Yo(e, i, t, n, s, r) {
  const u = v("ui-icon");
  return a(), l("div", C({
    class: r.rootClass,
    role: t.variant === "pills" ? "group" : "list",
    "aria-label": t.ariaLabel
  }, r.passthroughAttrs), [
    t.variant === "pills" ? (a(), l(T, { key: 0 }, [
      c("div", Mo, [
        (a(!0), l(T, null, P(r.normalizedSteps, (d, o) => (a(), y(G(t.interactive ? "button" : "span"), C({
          key: o,
          class: ["ui-stepper-pill", r.pillClass(o)],
          "aria-current": t.interactive && o === t.modelValue ? "step" : void 0,
          "aria-label": t.interactive ? d.title : void 0,
          "aria-hidden": t.interactive ? void 0 : "true"
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (m) => t.interactive ? r.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "aria-hidden", "onClick"]))), 128))
      ]),
      t.showLabel ? (a(), l("p", zo, p(r.pillsLabel), 1)) : f("", !0)
    ], 64)) : t.direction === "horizontal" ? (a(!0), l(T, { key: 1 }, P(r.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Po, [
        o > 0 ? (a(), l("span", {
          key: 0,
          class: _(["ui-stepper-rail ui-stepper-rail--h", r.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", Do)),
        (a(), y(G(t.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(o)],
          "aria-current": o === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (m) => t.interactive ? r.go(o) : void 0
        }), {
          default: b(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", Eo, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < r.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 2,
          class: _(["ui-stepper-rail ui-stepper-rail--h", r.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", Oo))
      ]),
      c("p", Ro, p(d.title), 1),
      d.description ? (a(), l("p", Vo, p(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), l(T, { key: 2 }, P(r.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Bo, [
        (a(), y(G(t.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(o)],
          "aria-current": o === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (m) => t.interactive ? r.go(o) : void 0
        }), {
          default: b(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", Fo, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < r.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 0,
          class: _(["ui-stepper-vrail", r.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", No, [
        c("p", Ho, p(d.title), 1),
        d.description ? (a(), l("p", $o, p(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Ao);
}
const Uo = /* @__PURE__ */ k(Io, [["render", Yo]]), Wo = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return S("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Go = { class: "ui-table-scroll" };
function Ko(e, i, t, n, s, r) {
  return a(), l("div", Go, [
    c("table", C({ class: r.rootClass }, r.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const qo = /* @__PURE__ */ k(Wo, [["render", Ko]]), jo = {
  name: "TableBody"
}, Zo = { class: "ui-table-body" };
function Xo(e, i, t, n, s, r) {
  return a(), l("tbody", Zo, [
    g(e.$slots, "default")
  ]);
}
const Qo = /* @__PURE__ */ k(jo, [["render", Xo]]), Jo = ["left", "center", "right"], eu = ["title", "secondary", "body"], tu = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Jo.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || eu.includes(e)
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
}, iu = ["colspan"];
function ru(e, i, t, n, s, r) {
  return a(), l("td", {
    colspan: t.colspan > 0 ? t.colspan : void 0,
    class: _(r.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, iu);
}
const au = /* @__PURE__ */ k(tu, [["render", ru]]), nu = ["left", "center", "right"], su = ["sm", "md", "lg"], lu = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => nu.includes(e)
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
      if (!(this.iconCol || su.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function ou(e, i, t, n, s, r) {
  return a(), l("th", {
    class: _(r.rootClass),
    style: O(r.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const uu = /* @__PURE__ */ k(lu, [["render", ou]]), du = {
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
function cu(e, i, t, n, s, r) {
  return a(), l("thead", {
    class: _(r.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const hu = /* @__PURE__ */ k(du, [["render", cu]]), fu = {
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
}, mu = { class: "ui-table-pagination" }, pu = { class: "ui-table-pagination-meta" }, gu = { class: "ui-table-pagination-nav" }, yu = { class: "ui-table-pagination-page" };
function bu(e, i, t, n, s, r) {
  const u = v("ui-button");
  return a(), l("div", mu, [
    c("div", pu, [
      g(e.$slots, "meta", {}, () => [
        I(p(t.metaText), 1)
      ])
    ]),
    c("div", gu, [
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !r.canPrev,
        "aria-label": t.prevAriaLabel,
        onClick: i[0] || (i[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", yu, p(t.pageLabel), 1),
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !r.canNext,
        "aria-label": t.nextAriaLabel,
        onClick: i[1] || (i[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const vu = /* @__PURE__ */ k(fu, [["render", bu]]), _u = ["none", "soft", "strong"], ku = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || _u.includes(e)
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
function wu(e, i, t, n, s, r) {
  return a(), l("tr", {
    class: _(r.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const xu = /* @__PURE__ */ k(ku, [["render", wu]]), Su = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Cu = ["id", "aria-labelledby"];
function Tu(e, i, t, n, s, r) {
  return Ue((a(), l("div", C({
    role: "tabpanel",
    id: r.panelDomId,
    "aria-labelledby": r.triggerDomId,
    class: r.panelClass
  }, r.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Cu)), [
    [We, r.isActive]
  ]);
}
const Lu = /* @__PURE__ */ k(Su, [["render", Tu]]), Re = Symbol("uiThemeMode"), Iu = {
  name: "ThemeProvider",
  inheritAttrs: !1,
  inject: {
    parentDefaults: { from: we, default: () => ke },
    parentMode: { from: Re, default: null }
  },
  provide() {
    return {
      [we]: this.providedDefaults,
      [Re]: li(() => this.resolvedMode),
      [dt]: () => this.$refs.portal || null
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
      providedDefaults: pe({ ...ke })
    };
  },
  computed: {
    pkg() {
      return this.theme ? Ye(this.theme) : null;
    },
    themeId() {
      var e;
      return ((e = this.pkg) == null ? void 0 : e.id) ?? null;
    },
    resolvedMode() {
      if (this.mode) return this.mode;
      const e = si(this.parentMode);
      return e || (this.documentDark ? "dark" : "light");
    },
    cssVars() {
      return { ...this.pkg ? ot(this.pkg, this.resolvedMode) : {}, ...ut(this.overrides, this.resolvedMode) };
    },
    mergedDefaults() {
      var e;
      return lt({
        ...this.parentDefaults,
        ...(e = this.pkg) == null ? void 0 : e.defaults,
        ...this.defaults
      });
    },
    passthroughAttrs() {
      const { class: e, style: i, ...t } = this.$attrs;
      return t;
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
}, Au = {
  ref: "portal",
  class: "ui-theme-provider-portal"
};
function Mu(e, i, t, n, s, r) {
  return a(), y(G(t.tag), C({
    class: ["ui-theme-provider", [
      { dark: r.resolvedMode === "dark", "ui-theme-provider--background": t.background },
      e.$attrs.class
    ]],
    "data-ui-theme": r.themeId,
    "data-ui-mode": r.resolvedMode,
    "data-ui-density": r.mergedDefaults.density === "compact" ? "compact" : void 0,
    style: r.cssVars
  }, r.passthroughAttrs), {
    default: b(() => [
      c("div", Au, null, 512),
      g(e.$slots, "default", {
        mode: r.resolvedMode,
        theme: r.pkg
      })
    ]),
    _: 3
  }, 16, ["class", "data-ui-theme", "data-ui-mode", "data-ui-density", "style"]);
}
const zu = /* @__PURE__ */ k(Iu, [["render", Mu]]);
function W(e) {
  return String(e).padStart(2, "0");
}
function Xe(e, i = "HH:mm") {
  const t = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!t) return String(e || "");
  const n = Number(t[1]), s = Number(t[2]);
  if (!Number.isFinite(n) || !Number.isFinite(s))
    return String(e || "");
  if (i === "HH:mm")
    return `${W(n)}:${W(s)}`;
  if (i === "h:mm a" || i === "h:mm A") {
    const r = n >= 12 ? "PM" : "AM";
    return `${n % 12 || 12}:${W(s)} ${r}`;
  }
  return `${W(n)}:${W(s)}`;
}
function Pu(e, i, t = "HH:mm") {
  return Xe(`${e}:${i}`, t);
}
const Du = $("ui-timepicker"), ue = 40;
function de(e) {
  return String(e).padStart(2, "0");
}
const Eu = {
  name: "TimePicker",
  mixins: [R],
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
      fallbackId: Du(),
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
      return Array.from({ length: 24 }, (e, i) => i);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), i = [];
      for (let t = 0; t < 60; t += e)
        i.push(t);
      return i;
    },
    hasValue() {
      return this.modelValue != null && this.modelValue !== "";
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : z(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return z(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return z(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Be(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? Pu(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? Xe(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
    },
    supportsScrollEnd() {
      return typeof window > "u" ? !1 : "onscrollend" in window;
    }
  },
  watch: {
    menuOpen(e) {
      var i;
      if (e)
        this.returnFocusEl = fe(), this.applyModelToDraft(), this.$nextTick(() => {
          this.$nextTick(() => {
            var t, n, s;
            this.scrollWheelsToDraft(), this.bindWheelListeners(), (s = (n = (t = this.$refs.hourWheel) == null ? void 0 : t.closest('[role="spinbutton"]')) == null ? void 0 : n.focus) == null || s.call(n, { preventScroll: !0 });
          });
        });
      else {
        this.unbindWheelListeners();
        const t = document.activeElement, n = (i = this.$refs.hourWheel) == null ? void 0 : i.closest(".ui-timepicker-panel");
        (!t || t === document.body || n != null && n.contains(t)) && me(this.returnFocusEl), this.returnFocusEl = null;
      }
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
      let i = 0, t = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (i = Math.min(23, Math.max(0, parseInt(n[1], 10))), t = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const s = this.minuteValues;
      let r = s[0] ?? 0, u = 999;
      for (const d of s) {
        const o = Math.abs(d - t);
        o < u && (u = o, r = d);
      }
      this.draftHour = i, this.draftMinute = r;
    },
    wheelItemHeight(e) {
      if (!e) return ue;
      const i = e.querySelector(".ui-timepicker-wheel-item");
      if (!i) return ue;
      const t = i.getBoundingClientRect().height;
      return t > 0 ? t : ue;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const i = e.querySelector(".ui-timepicker-wheel-spacer"), t = this.wheelItemHeight(e);
      if (!i) return (e.clientHeight - t) / 2;
      const n = parseFloat(window.getComputedStyle(i).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - t) / 2;
    },
    indexFromScroll(e, i) {
      const t = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, r = Math.round((s - n - t / 2) / t);
      return Math.min(i, Math.max(0, r));
    },
    scrollTopForIndex(e, i) {
      const t = this.wheelItemHeight(e), n = this.wheelSpacerTop(e);
      return Math.max(0, n + i * t + t / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, i, { smooth: t = !1 } = {}) {
      if (!e) return;
      const n = this.scrollTopForIndex(e, i);
      t && typeof e.scrollTo == "function" ? e.scrollTo({ top: n, behavior: "smooth" }) : e.scrollTop = n;
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let t = this.minuteValues.indexOf(this.draftMinute);
      t === -1 && (t = 0), this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, t), requestAnimationFrame(() => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, t), requestAnimationFrame(() => {
          this.wheelSyncing = !1;
        });
      });
    },
    /**
     * WAI-ARIA Spinbutton — ↑/↓ bir adım, PageUp/PageDown büyük adım (saat 6, dakika 4 adım),
     * Home/End en küçük / en büyük. Tekerlek de aynı değere kayar.
     */
    onSpinKeydown(e, i) {
      const t = i === "hour", n = t ? this.hourOptions.length : this.minuteValues.length;
      if (!n) return;
      const s = t ? this.draftHour : Math.max(0, this.minuteValues.indexOf(this.draftMinute)), r = t ? 6 : 4, u = { ArrowUp: s - 1, ArrowDown: s + 1, PageUp: s - r, PageDown: s + r, Home: 0, End: n - 1 };
      if (!(e.key in u)) return;
      e.preventDefault();
      const d = Math.min(n - 1, Math.max(0, u[e.key]));
      t ? this.selectHour(d) : this.selectMinute(d);
    },
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    selectMinute(e) {
      const i = this.minuteValues;
      if (!i.length) return;
      const t = Math.min(i.length - 1, Math.max(0, e));
      this.draftMinute = i[t], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, t, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, i = this.$refs.minuteWheel;
      !e || !i || (this.supportsScrollEnd ? (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scrollend", this.onHourScrollEnd), i.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), i.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scrollend", this.onHourScrollEnd), i.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), i.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scroll", this.onHourScrollDebounced), i.removeEventListener("scroll", this.onMinuteScrollDebounced);
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
      const e = this.$refs.minuteWheel, i = this.minuteValues;
      if (!e || !i.length) return;
      const t = this.indexFromScroll(e, i.length - 1);
      this.draftMinute = i[t];
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
      const i = this.indexFromScroll(e, 23);
      this.draftHour = i;
      const t = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - t) > 0.5 && (e.scrollTop = t), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const i = this.minuteValues;
      if (!i.length) return;
      const t = this.indexFromScroll(e, i.length - 1);
      this.draftMinute = i[t];
      const n = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, Ou = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Ru = { class: "ui-timepicker-wheels" }, Vu = { class: "ui-timepicker-wheels-row" }, Bu = ["aria-valuetext", "aria-valuenow", "aria-label"], Fu = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, Nu = { class: "ui-timepicker-wheel-spacer" }, Hu = ["onClick"], $u = ["aria-valuetext", "aria-valuenow", "aria-label"], Yu = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, Uu = { class: "ui-timepicker-wheel-spacer" }, Wu = ["onClick"], Gu = { class: "min-w-0 flex-1 truncate text-foreground" }, Ku = { class: "ui-timepicker-panel w-full p-2" }, qu = { class: "ui-timepicker-wheels" }, ju = { class: "ui-timepicker-wheels-row" }, Zu = ["aria-valuetext", "aria-valuenow", "aria-label"], Xu = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, Qu = { class: "ui-timepicker-wheel-spacer" }, Ju = ["onClick"], ed = ["aria-valuetext", "aria-valuenow", "aria-label"], td = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, id = { class: "ui-timepicker-wheel-spacer" }, rd = ["onClick"];
function ad(e, i, t, n, s, r) {
  const u = v("ui-button"), d = v("ui-popover");
  return a(), l("div", {
    class: _([
      "ui-timepicker",
      t.embedded ? "ui-timepicker--embedded" : "",
      t.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    t.embedded ? (a(), l("div", Ou, [
      c("div", Ru, [
        i[6] || (i[6] = c("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        c("div", Vu, [
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            tabindex: "0",
            "data-ui-spin": "hour",
            "aria-valuetext": r.pad2(s.draftHour),
            onKeydown: i[0] || (i[0] = (o) => r.onSpinKeydown(o, "hour")),
            "aria-valuenow": s.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": r.hourAriaLabel
          }, [
            c("div", Fu, [
              c("div", Nu, [
                (a(!0), l(T, null, P(r.hourOptions, (o) => (a(), l("button", {
                  key: "h-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => r.selectHour(o)
                }, p(r.pad2(o)), 11, Hu))), 128))
              ])
            ], 512)
          ], 40, Bu),
          i[5] || (i[5] = c("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            tabindex: "0",
            "data-ui-spin": "minute",
            "aria-valuetext": r.pad2(s.draftMinute),
            onKeydown: i[1] || (i[1] = (o) => r.onSpinKeydown(o, "minute")),
            "aria-valuenow": s.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": r.minuteAriaLabel
          }, [
            c("div", Yu, [
              c("div", Uu, [
                (a(!0), l(T, null, P(r.minuteValues, (o, m) => (a(), l("button", {
                  key: "m-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => r.selectMinute(m)
                }, p(r.pad2(o)), 11, Wu))), 128))
              ])
            ], 512)
          ], 40, $u)
        ]),
        i[7] || (i[7] = c("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        i[8] || (i[8] = c("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (a(), y(d, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": i[4] || (i[4] = (o) => s.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: t.disabled
    }, {
      trigger: b(({ open: o, toggle: m, close: h }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: m,
          close: h
        }, () => [
          w(u, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: t.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: m
          }, {
            default: b(() => [
              c("span", Gu, p(r.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: b(() => [
        c("div", Ku, [
          c("div", qu, [
            i[10] || (i[10] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", ju, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                tabindex: "0",
                "data-ui-spin": "hour",
                "aria-valuetext": r.pad2(s.draftHour),
                onKeydown: i[2] || (i[2] = (o) => r.onSpinKeydown(o, "hour")),
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": r.hourAriaLabel
              }, [
                c("div", Xu, [
                  c("div", Qu, [
                    (a(!0), l(T, null, P(r.hourOptions, (o) => (a(), l("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => r.selectHour(o)
                    }, p(r.pad2(o)), 11, Ju))), 128))
                  ])
                ], 512)
              ], 40, Zu),
              i[9] || (i[9] = c("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                tabindex: "0",
                "data-ui-spin": "minute",
                "aria-valuetext": r.pad2(s.draftMinute),
                onKeydown: i[3] || (i[3] = (o) => r.onSpinKeydown(o, "minute")),
                "aria-valuenow": s.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": r.minuteAriaLabel
              }, [
                c("div", td, [
                  c("div", id, [
                    (a(!0), l(T, null, P(r.minuteValues, (o, m) => (a(), l("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => r.selectMinute(m)
                    }, p(r.pad2(o)), 11, rd))), 128))
                  ])
                ], 512)
              ], 40, ed)
            ]),
            i[11] || (i[11] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            i[12] || (i[12] = c("div", {
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
const nd = /* @__PURE__ */ k(Eu, [["render", ad]]), sd = ["horizontal", "vertical"], ld = {
  name: "Toolbar",
  inheritAttrs: !1,
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => sd.includes(e)
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, od = ["role", "aria-label"], ud = {
  key: 0,
  class: "ui-toolbar-start"
}, dd = {
  key: 1,
  class: "ui-toolbar-main"
}, cd = {
  key: 2,
  class: "ui-toolbar-end"
};
function hd(e, i, t, n, s, r) {
  return a(), l("div", C({
    class: r.rootClass,
    role: t.ariaLabel ? "toolbar" : void 0,
    "aria-label": t.ariaLabel || void 0
  }, r.passthroughAttrs), [
    e.$slots.start ? (a(), l("div", ud, [
      g(e.$slots, "start")
    ])) : f("", !0),
    e.$slots.default ? (a(), l("div", dd, [
      g(e.$slots, "default")
    ])) : f("", !0),
    e.$slots.end ? (a(), l("div", cd, [
      g(e.$slots, "end")
    ])) : f("", !0)
  ], 16, od);
}
const fd = /* @__PURE__ */ k(ld, [["render", hd]]);
function te(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function kd() {
  return {
    push: U,
    dismiss: ht,
    clear: ct,
    info: (e) => U({ ...te(e), color: "info" }),
    success: (e) => U({ ...te(e), color: "success" }),
    warning: (e) => U({ ...te(e), color: "warning" }),
    danger: (e) => U({ ...te(e), color: "danger" })
  };
}
function wd(e = !1) {
  return pe({
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
function xd() {
  return {
    confirm: ft
  };
}
const he = {
  en: gt,
  tr: pt
};
function Sd(e = "tr") {
  return he[e] ?? he.tr;
}
const md = [
  ["ui-action-card", gi],
  ["ui-action-card-list", _i],
  ["ui-action-group", yt],
  ["ui-ai-button", Ci],
  ["ui-alert", bt],
  ["ui-avatar", vt],
  ["ui-avatar-group", zi],
  ["ui-badge", _t],
  ["ui-button", kt],
  ["ui-card", wt],
  ["ui-checkbox", Ni],
  ["ui-checkbox-group", Ki],
  ["ui-chip-group", Qi],
  ["ui-color-picker", mr],
  ["ui-confirm-dialog", xt],
  ["ui-currency-input", je],
  ["ui-date-picker", St],
  ["ui-date-range-picker", Nr],
  ["ui-dialog", Ct],
  ["ui-divider", He],
  ["ui-dropdown", Tt],
  ["ui-empty", Lt],
  ["ui-field", Kr],
  ["ui-field-action", sa],
  ["ui-file", ba],
  ["ui-filter-chip", xa],
  ["ui-form-row", It],
  ["ui-guidance", Xa],
  ["ui-icon", At],
  ["ui-icon-picker", hn],
  ["ui-icon-tile", Mt],
  ["ui-input", zt],
  ["ui-intro", Ln],
  ["ui-list", Pt],
  ["ui-list-item", Dt],
  ["ui-menu", En],
  ["ui-menu-group", Fn],
  ["ui-menu-item", $n],
  ["ui-menu-nav", Gn],
  ["ui-password", es],
  ["ui-phone", Et],
  ["ui-photo", ms],
  ["ui-photos", Ss],
  ["ui-pin", Ot],
  ["ui-popover", Rt],
  ["ui-price-display", Os],
  ["ui-price-display-group", Fs],
  ["ui-price-display-row", Ws],
  ["ui-price-input", Qs],
  ["ui-price-text", ge],
  ["ui-progress", ul],
  ["ui-radio", Vt],
  ["ui-radio-group", Bt],
  ["ui-section", gl],
  ["ui-segment", Ft],
  ["ui-segment-group", Nt],
  ["ui-selection-indicator", vl],
  ["ui-select", Ht],
  ["ui-sheet", Dl],
  ["ui-sidebar-item", Gl],
  ["ui-skeleton", $t],
  ["ui-slider", ao],
  ["ui-stat", go],
  ["ui-stat-group", ko],
  ["ui-step", Co],
  ["ui-stepper", Uo],
  ["ui-switch", Yt],
  ["ui-tab-list", Ut],
  ["ui-tab-panel", Lu],
  ["ui-tab-trigger", Wt],
  ["ui-table", qo],
  ["ui-table-body", Qo],
  ["ui-table-cell", au],
  ["ui-table-head", uu],
  ["ui-table-header", hu],
  ["ui-table-pagination", vu],
  ["ui-table-row", xu],
  ["ui-tabs", Gt],
  ["ui-tag", Kt],
  ["ui-theme-provider", zu],
  ["ui-time-picker", nd],
  ["ui-toast", qt],
  ["ui-toolbar", fd],
  ["ui-tooltip", jt]
];
let ie = null;
function pd(e, i = {}) {
  const t = Ye(e);
  if (Zt(t.id) || Xt(t), Qt(t, i), ie && (Jt(ie, { ...t.defaults, ...i.defaults }), typeof document < "u")) {
    const n = typeof i.root == "string" ? document.querySelector(i.root) : i.root;
    ei(n || document.documentElement, ie.density);
  }
  return t;
}
function gd(e, i = {}) {
  var x, L;
  const { i18n: t, locale: n, locales: s, theme: r, mode: u, overrides: d, inline: o, defaults: m, priceInput: h } = i;
  if (ie = mt(e, m), r && pd(r, { mode: u, overrides: d, inline: o, defaults: m }), h && qs(h), (x = t == null ? void 0 : t.global) != null && x.mergeLocaleMessage) {
    const A = s ?? (n != null ? [n] : [
      typeof t.global.locale == "string" ? t.global.locale : ((L = t.global.locale) == null ? void 0 : L.value) ?? "tr"
    ]);
    for (const M of A) {
      const V = he[M];
      V && t.global.mergeLocaleMessage(M, V);
    }
  }
  for (const [A, M] of md)
    e.component(A, M);
}
const Cd = {
  install: gd
};
export {
  gi as ActionCard,
  _i as ActionCardList,
  yt as ActionGroup,
  Ci as AiButton,
  bt as Alert,
  vt as Avatar,
  zi as AvatarGroup,
  Id as BACKDROP_BLUR_SCALE,
  ke as BASE_UI_DEFAULTS,
  _t as Badge,
  kt as Button,
  Ad as CARD_PADDING_SCALE,
  F as CONTROL_SIZES,
  wt as Card,
  Ni as Checkbox,
  Ki as CheckboxGroup,
  Qi as ChipGroup,
  mr as ColorPicker,
  xt as ConfirmDialog,
  je as CurrencyInput,
  Md as DEFAULT_THEME_ID,
  zd as DERIVED_VARS,
  St as DatePicker,
  Nr as DateRangePicker,
  Ct as Dialog,
  He as Divider,
  Tt as Dropdown,
  Lt as Empty,
  Pd as FEW_COLOR_SCALE,
  Dd as FEW_PALETTE_ID,
  Ed as FEW_PRIMARY,
  Od as FEW_PRIMARY_FOREGROUND,
  Kr as Field,
  sa as FieldAction,
  ba as File,
  xa as FilterChip,
  It as FormRow,
  Rd as GOOGLE_FONTS_CATALOG,
  Xa as Guidance,
  At as Icon,
  hn as IconPicker,
  Mt as IconTile,
  zt as Input,
  Ln as Intro,
  Pt as List,
  Dt as ListItem,
  Vd as MIX_FROM_MAP,
  En as Menu,
  Fn as MenuGroup,
  $n as MenuItem,
  Gn as MenuNav,
  Gs as PRICE_FORMATS,
  es as Password,
  Et as Phone,
  ms as Photo,
  Ss as Photos,
  Ot as Pin,
  Rt as Popover,
  Qs as PriceInput,
  ul as Progress,
  Vt as Radio,
  Bt as RadioGroup,
  Qe as SCALE_SIZES,
  Bd as SIZE_SCALE,
  Fd as STATUS_TONES,
  gl as Section,
  Ft as Segment,
  Nt as SegmentGroup,
  Ht as Select,
  vl as SelectionIndicator,
  Dl as Sheet,
  Gl as SidebarItem,
  $t as Skeleton,
  ao as Slider,
  go as Stat,
  ko as StatGroup,
  Co as Step,
  Uo as Stepper,
  Yt as Switch,
  Nd as THEME_CUSTOM_CSS_ID,
  Hd as TOAST_GROUP_WINDOW_MS,
  $d as TOKEN_GROUPS,
  Ut as TabList,
  Lu as TabPanel,
  Wt as TabTrigger,
  qo as Table,
  Qo as TableBody,
  au as TableCell,
  uu as TableHead,
  hu as TableHeader,
  vu as TablePagination,
  xu as TableRow,
  Gt as Tabs,
  Kt as Tag,
  zu as ThemeProvider,
  nd as TimePicker,
  qt as Toast,
  fd as Toolbar,
  jt as Tooltip,
  we as UI_DEFAULTS_KEY,
  Yd as UI_DENSITIES,
  Ud as UI_ICON_TYPES,
  Wd as UI_KEYBOARD_INSET_EVENT,
  dt as UI_PORTAL_KEY,
  Gd as applyGoogleFontsCatalogPreview,
  Kd as applyGoogleFontsForTheme,
  qd as applyThemeCustomCss,
  ei as applyUiDensity,
  Qt as applyUiTheme,
  jd as buildGoogleFontsLinkTag,
  Zd as buildGoogleFontsStylesheetUrl,
  Xd as buildThemeCss,
  Qd as buildThemeEnforcementCss,
  Jd as buildThemeStyleAttr,
  ec as clearThemeCustomCss,
  ct as clearToasts,
  tc as clearUiTheme,
  ic as colorToRgb,
  rc as computeThemeVars,
  ac as contrastRatio,
  nc as createUiId,
  $ as createUiIdFactory,
  Cd as default,
  sc as defineTheme,
  lc as deriveBrandColorsFromPrimary,
  ht as dismissToast,
  oc as ensureContrastForMode,
  uc as ensureLabelContrast,
  dc as expandTokens,
  cc as extendTheme,
  _d as formatCurrencyAmount,
  hc as formatFontFamily,
  fc as formatGoogleFontFamilyName,
  gr as formatMoneyInput,
  Ge as getCurrencySymbol,
  mc as getFewPrimaryColors,
  qe as getMoneySeparators,
  js as getPriceInputConfig,
  pc as getThemeCssPath,
  Zt as getThemePackage,
  Sd as getUiMessages,
  gc as googleFontSelectOptions,
  Y as iconTypeProp,
  yc as isThemePackage,
  bc as listThemes,
  vc as mergeTokens,
  lt as mergeUiDefaults,
  _c as oklchToRgb,
  kc as onVisibleViewportChange,
  wc as parseHex,
  pr as parseLocalizedMoneyInput,
  xc as parseOklch,
  Sc as parseOklchLightness,
  Cc as pickContrastForeground,
  Ne as pickPassthroughAttrs,
  mt as provideUiDefaults,
  U as pushToast,
  Tc as readKeyboardInset,
  Xt as registerTheme,
  Lc as relativeLuminance,
  ft as requestConfirm,
  Ic as resetUiIds,
  Ac as resolveControlSize,
  le as resolveCurrencyCode,
  Ye as resolveTheme,
  Ve as resolveThemeControlSize,
  Be as resolveThemeDefault,
  Mc as resolveThemeFontFamilies,
  j as resolveThemeIconType,
  ot as resolveThemeVars,
  z as resolveUiText,
  Ke as sanitizeMoneyInput,
  qs as setPriceInputConfig,
  zc as setToastExpanded,
  Jt as setUiDefaults,
  pd as setUiTheme,
  Pc as setUiThemeMode,
  Dc as themeConfigToTokens,
  se as themeIconTypeComputed,
  Ec as toCssVarName,
  Oc as toggleToastExpanded,
  R as uiDefaultsMixin,
  rt as uiPortalMixin,
  xd as useConfirm,
  wd as useDialog,
  kd as useToast,
  Rc as useUiDefaults,
  Vc as visibleViewportBottom,
  Bc as withDerivedBrandTokens,
  Fc as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
