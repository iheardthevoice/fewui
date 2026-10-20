import { $ as x, av as q, b5 as E, b1 as re, aT as De, ac as C, aY as z, af as N, aU as Ee, aQ as je, t as Ke, aw as Oe, aq as Ze, aW as G, aF as Re, l as Ve, b6 as Xe, an as Be, aM as Qe, aH as Je, c as be, X as ve, aA as et, aX as tt, aR as it, aS as Fe, _ as rt, aa as at, ai as st, aI as H, aN as nt, aG as lt, b4 as ot, aj as ut, A as dt, a as ct, b as ht, d as ft, e as mt, f as pt, g as gt, j as yt, k as bt, m as vt, E as _t, q as kt, I as wt, r as xt, P as St, u as Ct, L as Tt, s as Lt, v as It, R as At, w as Mt, z as zt, x as Pt, y as Dt, H as Et, J as Ot, U as Rt, N as Vt, Q as Bt, O as Ft, W as Nt, V as Ht, at as $t, aK as Wt, a3 as Ut, a_ as Yt } from "./custom-css-CK1z0mOT.js";
import { B as Su, C as Cu, h as Tu, i as Lu, F as Iu, n as Au, o as Mu, p as zu, G as Pu, M as Du, S as Eu, D as Ou, T as Ru, K as Vu, Y as Bu, Z as Fu, a0 as Nu, a1 as Hu, a2 as $u, a4 as Wu, a5 as Uu, a6 as Yu, a7 as Gu, a8 as qu, a9 as ju, ab as Ku, ad as Zu, ae as Xu, ag as Qu, ah as Ju, ak as ed, al as td, am as id, ao as rd, ap as ad, ar as sd, as as nd, au as ld, ax as od, ay as ud, az as dd, aB as cd, aC as hd, aD as fd, aE as md, aJ as pd, aL as gd, aO as yd, aP as bd, aV as vd, aZ as _d, a$ as kd, b0 as wd, b2 as xd, b3 as Sd, b7 as Cd, b8 as Td, b9 as Ld, ba as Id } from "./custom-css-CK1z0mOT.js";
import { resolveComponent as _, openBlock as a, createElementBlock as l, normalizeClass as v, renderSlot as g, createVNode as w, createCommentVNode as f, createElementVNode as d, toDisplayString as p, createBlock as b, normalizeStyle as D, mergeProps as A, withCtx as y, withModifiers as R, createTextVNode as I, Fragment as L, renderList as P, withKeys as oe, createSlots as ee, normalizeProps as Gt, guardReactiveProps as qt, Teleport as j, Transition as K, readonly as jt, reactive as he, Comment as Kt, Text as Zt, withDirectives as Ne, vShow as He, resolveDynamicComponent as W, computed as Xt } from "vue";
import { RouterLink as Qt } from "vue-router";
const Jt = {
  name: "ActionCard",
  mixins: [E],
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
    iconType: q,
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
    ...re(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, ei = ["disabled"], ti = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, ii = { class: "ui-action-card__content" }, ri = { class: "ui-action-card__title" }, ai = {
  key: 0,
  class: "ui-action-card__description"
};
function si(e, t, r, s, n, i) {
  const u = _("ui-icon");
  return a(), l("button", {
    type: "button",
    class: v(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (c) => e.$emit("click", c))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (a(), l("span", ti, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("", !0)
    ]),
    d("span", ii, [
      d("span", ri, p(r.title), 1),
      r.description ? (a(), l("span", ai, p(r.description), 1)) : f("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (a(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, ei);
}
const ni = /* @__PURE__ */ x(Jt, [["render", si]]), li = {
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
}, oi = ["aria-label"];
function ui(e, t, r, s, n, i) {
  return a(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: D(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, oi);
}
const di = /* @__PURE__ */ x(li, [["render", ui]]), ci = {
  name: "AiButton",
  mixins: [E],
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
      const e = De(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, hi = ["data-size"], fi = { class: "ui-ai-button__surface" };
function mi(e, t, r, s, n, i) {
  const u = _("ui-button");
  return a(), l("span", {
    class: v(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": i.resolvedSize,
    style: D(i.rootStyle)
  }, [
    t[1] || (t[1] = d("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    d("span", fi, [
      w(u, A({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: i.resolvedSize,
        "prefix-icon": r.prefixIcon,
        disabled: r.disabled,
        loading: r.loading,
        "loading-text": r.loadingText,
        block: i.isBlock
      }, e.$attrs, {
        onClick: t[0] || (t[0] = (c) => e.$emit("click", c))
      }), {
        default: y(() => [
          g(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, hi);
}
const pi = /* @__PURE__ */ x(ci, [["render", mi]]), gi = ["xs", "sm", "md", "lg", "xl"], se = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, yi = {
  name: "AvatarGroup",
  SIZE_CLASS: se,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => gi.includes(e)
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
      return C(
        "ui-avatar-group",
        se[this.size] || se.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, bi = ["aria-label"];
function vi(e, t, r, s, n, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    r.overflowCount > 0 ? (a(), l("span", {
      key: 0,
      class: v(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
    }, p(i.overflowText), 3)) : f("", !0)
  ], 10, bi);
}
const _i = /* @__PURE__ */ x(yi, [["render", vi]]), ki = [
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
], wi = {
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
      presetColors: ki
    };
  },
  computed: {
    rootClass() {
      return C(
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
    displayValue() {
      return this.localColor || this.triggerLabel;
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
      let t = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), /^#[0-9A-Fa-f]{6}$/.test(t) && (this.localColor = t.toUpperCase());
    }
  }
}, xi = ["disabled", "aria-expanded", "onClick"], Si = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ci = { class: "ui-select-field-suffix" }, Ti = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Li = { class: "ui-color-picker-panel" }, Ii = { class: "ui-color-picker-panel__header" }, Ai = { class: "ui-color-picker-panel__title" }, Mi = { class: "ui-color-picker-swatches" }, zi = ["title", "onClick"], Pi = { class: "ui-color-picker-custom" }, Di = { class: "ui-color-picker-panel__title" }, Ei = { class: "ui-color-picker-custom__row" };
function Oi(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("ui-button"), o = _("ui-input"), h = _("ui-popover");
  return a(), l("div", {
    class: v(i.rootClass)
  }, [
    w(h, {
      open: n.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => n.popoverOpen = m),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
    }, {
      trigger: y(({ open: m, toggle: k, close: T }) => [
        g(e.$slots, "trigger", {
          open: m,
          toggle: k,
          close: T
        }, () => [
          d("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: k
          }, [
            d("span", Si, [
              i.localColor ? (a(), l("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: D({ backgroundColor: i.localColor })
              }, null, 4)) : (a(), b(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            d("span", {
              class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, p(i.displayValue), 3),
            d("span", Ci, [
              d("span", Ti, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, xi)
        ])
      ]),
      content: y(() => [
        d("div", Li, [
          d("div", Ii, [
            d("span", Ai, p(i.popoverTitleLabel), 1),
            i.localColor ? (a(), b(c, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: R(i.clearColor, ["stop"])
            }, {
              default: y(() => [
                I(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", Mi, [
            (a(!0), l(L, null, P(n.presetColors, (m) => (a(), l("button", {
              key: m,
              type: "button",
              class: v(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === m }]),
              style: D({ backgroundColor: m }),
              title: m,
              onClick: (k) => i.selectColor(m)
            }, [
              i.localColor === m ? (a(), b(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, zi))), 128))
          ]),
          d("div", Pi, [
            d("span", Di, p(i.customColorLabelText), 1),
            d("div", Ei, [
              w(o, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => i.localColor = m),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              d("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: D({ backgroundColor: i.localColor || "transparent" }),
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
const Ri = /* @__PURE__ */ x(wi, [["render", Oi]]), _e = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, U = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function ae(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in U ? t : "TRY";
  const r = String(e).trim();
  if (_e[r])
    return _e[r];
  const s = r.toUpperCase();
  return U[s] ? s : t in U ? t : "TRY";
}
function $e(e) {
  var r;
  const t = ae(e);
  if (U[t])
    return U[t];
  try {
    const n = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = n == null ? void 0 : n.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function gu(e, t, r = "tr-TR") {
  const s = Number(e) || 0, n = ae(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: n }).format(s);
  } catch {
    return `${$e(n)}${s.toFixed(2)}`;
  }
}
function We(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const s = t.slice(0, r), n = t.slice(r + 1).replace(/\./g, "");
    t = `${s}.${n}`;
  }
  return t;
}
function Ue(e = "tr-TR") {
  var t, r;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = s.find((n) => n.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = s.find((n) => n.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Vi(e, t = "tr-TR") {
  const { group: r, decimal: s } = Ue(t);
  let n = String(e ?? "").trim();
  return n ? (n = n.split(r).join(""), n = n.split(s).join("."), We(n)) : "";
}
function Bi(e, t = "tr-TR") {
  const r = We(e);
  if (!r) return "";
  const { group: s, decimal: n } = Ue(t), [i = "", u] = r.split("."), o = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return u === void 0 ? o : `${o}${n}${u}`;
}
const Fi = N("ui-currency-input"), Ni = ["sm", "md", "lg"], Hi = {
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
      validator: (e) => e == null || Ni.includes(e)
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
    return { fallbackId: Fi() };
  },
  computed: {
    displaySymbol() {
      return $e(this.currency);
    },
    resolvedCurrencyCode() {
      return ae(this.currency);
    },
    innerValue: {
      get() {
        return Bi(this.modelValue, this.locale);
      },
      set(e) {
        const t = Vi(e, this.locale);
        this.$emit("update:modelValue", t);
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
      ]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, $i = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Wi(e, t, r, s, n, i) {
  const u = _("ui-input");
  return a(), b(u, A({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => i.innerValue = c),
    type: "text",
    inputmode: "decimal",
    size: r.size,
    disabled: r.disabled,
    readonly: r.readonly,
    placeholder: r.placeholder,
    name: r.name,
    autocomplete: r.autocomplete,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (c) => e.$emit("focus", c)),
    onBlur: i.onBlur
  }), {
    prepend: y(() => [
      d("span", $i, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Ye = /* @__PURE__ */ x(Hi, [["render", Wi]]), Ui = {
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
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca işaretliyken). */
    highlight: {
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
        return Array.isArray(e) ? e.some((t) => Object.is(t, this.value)) : !1;
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
        {
          "ui-checkbox--checked": this.isChecked,
          "ui-checkbox--highlight": this.highlight && this.isChecked
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, s = Array.isArray(r) ? [...r] : [], n = s.findIndex((i) => Object.is(i, this.value));
        t && n === -1 ? s.push(this.value) : !t && n !== -1 && s.splice(n, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((s) => Object.is(s, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Yi = ["type", "name", "value", "checked"], Gi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, qi = { class: "ui-checkbox-body" }, ji = {
  key: 0,
  class: "ui-checkbox-label"
}, Ki = {
  key: 1,
  class: "ui-checkbox-description"
};
function Zi(e, t, r, s, n, i) {
  const u = _("ui-icon");
  return a(), l("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = oe(R((...c) => i.toggle && i.toggle(...c), ["prevent"]), ["enter"])),
      t[2] || (t[2] = oe(R((...c) => i.toggle && i.toggle(...c), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...c) => i.onNativeChange && i.onNativeChange(...c))
    }, null, 40, Yi),
    d("span", Gi, [
      i.isChecked ? (a(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    d("span", qi, [
      e.$slots.label || r.label ? (a(), l("span", ji, [
        g(e.$slots, "label", {}, () => [
          I(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (a(), l("span", Ki, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Xi = /* @__PURE__ */ x(Ui, [["render", Zi]]), Qi = ["list", "button"], Ji = ["vertical", "horizontal"], er = N("ui-checkbox-group"), tr = {
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
      validator: (e) => Qi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Ji.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: er() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : "vertical";
    },
    rootClass() {
      return C(
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
}, ir = ["aria-label"];
function rr(e, t, r, s, n, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, ir);
}
const ar = /* @__PURE__ */ x(tr, [["render", rr]]), sr = N("ui-daterangepicker");
function Y(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${Y(e.getMonth() + 1)}-${Y(e.getDate())}`;
}
function Z(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]) - 1, n = Number(t[3]), i = new Date(r, s, n);
  return i.getFullYear() !== r || i.getMonth() !== s || i.getDate() !== n ? null : i;
}
function F(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function X(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function nr(e, t, r) {
  const { year: s, month: n, day: i } = parseIsoParts(e), c = new Date(s, n - 1, i).getDay(), o = c === 0 ? -6 : 1 - c, h = new Date(s, n - 1, i + o), m = B(h), k = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let T = B(k);
  if (t && T > t && (T = t), r && m < r && T < r) return null;
  let S = m;
  return r && S < r && (S = r), F(S, T) > 0 ? null : [S, T];
}
function lr(e, t, r) {
  const { year: s } = parseIsoParts(e), n = `${s}-01-01`;
  let i = `${s}-12-31`;
  if (t && i > t && (i = t), r && n < r && i < r) return null;
  let u = n;
  return r && u < r && (u = r), F(u, i) > 0 ? null : [u, i];
}
function ke(e, t, r, s) {
  const n = `${e}-${Y(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let u = `${e}-${Y(t + 1)}-${Y(i)}`;
  if (r && u > r && (u = r), s && n < s && u < s) return null;
  let c = n;
  return s && c < s && (c = s), F(c, u) > 0 ? null : [c, u];
}
const or = {
  name: "DateRangePicker",
  mixins: [E],
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
    }
  },
  emits: ["update:modelValue", "change", "update:open"],
  data() {
    var r, s;
    const e = ((r = this.modelValue) == null ? void 0 : r[0]) || "", t = Z(e) || Z((s = this.modelValue) == null ? void 0 : s[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: sr(),
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Oe() : !1
    };
  },
  mounted() {
    typeof window > "u" || (this._viewportMq = window.matchMedia(Ke), this._onViewportMq = () => {
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
        const t = !!e;
        this.open !== void 0 ? this.$emit("update:open", t) : this.menuOpen = t;
      }
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return je((e = this.$i18n) == null ? void 0 : e.locale);
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
        const e = this.pickingStart, t = this.hoverYmd;
        return F(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      if (Array.isArray(this.presets))
        return this.presets.map((S) => ({
          ...S,
          disabled: !S.range || this.isRangeDisabled(S.range[0], S.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), t = B(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const s = B(r), n = new Date(e);
      n.setDate(n.getDate() + 1);
      const i = B(n), u = e.getMonth(), c = e.getFullYear(), o = new Date(c, u - 1, 1), h = o.getFullYear(), m = o.getMonth(), k = (S, M) => typeof this.$t == "function" ? this.$t(S, M) : S;
      return [
        {
          key: "today",
          label: k("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: k("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "tomorrow",
          label: k("ui.datePicker.tomorrow"),
          range: [i, i]
        },
        {
          key: "thisWeek",
          label: k("ui.dateRangePicker.thisWeek"),
          range: nr(t, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: k("ui.dateRangePicker.thisMonth", {
            month: X(c, u, this.locale)
          }),
          range: ke(c, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: k("ui.dateRangePicker.lastMonth", {
            month: X(h, m, this.locale)
          }),
          range: ke(h, m, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: k("ui.dateRangePicker.thisYear", { year: c }),
          range: lr(t, this.maxYmd, this.minYmd)
        }
      ].map((S) => ({
        ...S,
        disabled: !S.range || this.isRangeDisabled(S.range[0], S.range[1])
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
            title: X(this.viewYear, this.viewMonth, this.locale),
            cells: this.buildCellsForMonth(this.viewYear, this.viewMonth)
          }
        ];
      const e = {
        key: "left",
        year: this.viewYear,
        month: this.viewMonth,
        showPrev: !0,
        showNext: !1
      }, t = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, t].map((r) => ({
        ...r,
        title: X(r.year, r.month, this.locale),
        cells: this.buildCellsForMonth(r.year, r.month)
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
      const e = Z(this.startYmd) || Z(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = Ee(this.uiDefaults, void 0, "dateRangeFormat"), s = (n) => n ? Ze(n, this.locale, r) || n : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? s(e || t) : `${s(e)} – ${s(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), s = new Date(e, t, 1 - r.getDay()), n = this.previewStart, i = this.previewEnd, u = n && i, c = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + o), m = h.getMonth() === t && h.getFullYear() === e, k = h.getDate(), T = B(h), S = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, M = B(/* @__PURE__ */ new Date()) === T, O = !!(this.minYmd && T < this.minYmd) || !!(this.maxYmd && T > this.maxYmd);
        let me = !1, pe = !1;
        if (u) {
          const ge = F(n, i) <= 0 ? n : i, ye = F(n, i) <= 0 ? i : n;
          me = F(T, ge) >= 0 && F(T, ye) <= 0, pe = T === ge || T === ye;
        }
        c.push({
          key: S,
          d: k,
          date: h,
          today: M,
          inMonth: m,
          disabled: O,
          inRange: me,
          endpoint: pe
        });
      }
      return c;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, s] = e.range;
      this.pickingStart = r, this.pickingEnd = s, this.$emit("update:modelValue", [r, s]), this.$emit("change", [r, s]), t();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [t, r] = e.range;
      return this.startYmd === t && this.endYmd === r;
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = B(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, n = r;
      if (F(n, s) < 0) {
        const i = s;
        s = n, n = i;
      }
      this.pickingStart = s, this.pickingEnd = n, this.$emit("update:modelValue", [s, n]), this.$emit("change", [s, n]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, ur = { class: "min-w-0 flex-1 truncate text-foreground" }, dr = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, cr = { class: "ui-daterangepicker-layout" }, hr = ["aria-label"], fr = { class: "ui-daterangepicker-calendars" }, mr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, pr = { class: "ui-daterangepicker-month-row" }, gr = { class: "mb-2 flex items-center justify-between gap-2" }, yr = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, br = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, vr = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, _r = { class: "ui-datepicker-grid" };
function kr(e, t, r, s, n, i) {
  const u = _("ui-button"), c = _("ui-popover");
  return a(), l("div", {
    class: v(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(c, {
      open: i.resolvedOpen,
      "onUpdate:open": t[2] || (t[2] = (o) => i.resolvedOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: o, toggle: h, close: m }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: h,
          close: m
        }, () => [
          w(u, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: r.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              d("span", ur, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(({ close: o }) => [
        d("div", dr, [
          d("div", cr, [
            i.quickPresets.length ? (a(), l("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (a(!0), l(L, null, P(i.quickPresets, (h) => (a(), b(u, {
                key: h.key,
                type: "button",
                variant: i.isPresetActive(h) ? "solid" : "outline",
                color: i.isPresetActive(h) ? "primary" : "secondary",
                size: "sm",
                rounded: "",
                disabled: h.disabled,
                "aria-pressed": i.isPresetActive(h) ? "true" : "false",
                "data-active": i.isPresetActive(h) ? "true" : void 0,
                onClick: (m) => i.applyQuick(h, o)
              }, {
                default: y(() => [
                  I(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))), 128))
            ], 8, hr)) : f("", !0),
            d("div", fr, [
              i.rangeHint ? (a(), l("p", mr, p(i.rangeHint), 1)) : f("", !0),
              d("div", pr, [
                (a(!0), l(L, null, P(i.calendarPanes, (h) => (a(), l("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", gr, [
                    h.showPrev ? (a(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = R((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", yr)),
                    d("span", br, p(h.title), 1),
                    h.showNext ? (a(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = R((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", vr))
                  ]),
                  t[3] || (t[3] = d("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    d("span", null, "Su"),
                    d("span", null, "Mo"),
                    d("span", null, "Tu"),
                    d("span", null, "We"),
                    d("span", null, "Th"),
                    d("span", null, "Fr"),
                    d("span", null, "Sa")
                  ], -1)),
                  d("div", _r, [
                    (a(!0), l(L, null, P(h.cells, (m) => (a(), b(u, {
                      key: m.key,
                      variant: i.dayVariant(m),
                      color: i.dayColor(m),
                      size: "sm",
                      cubed: "",
                      disabled: m.disabled,
                      "aria-selected": m.endpoint ? "true" : "false",
                      "aria-disabled": m.disabled ? "true" : void 0,
                      "data-outside": m.inMonth ? void 0 : "true",
                      "data-today": m.today ? "true" : void 0,
                      "data-in-range": m.inRange && !m.endpoint ? "true" : void 0,
                      "data-range-endpoint": m.endpoint ? "true" : void 0,
                      onMouseenter: (k) => i.onCellHover(m),
                      onClick: (k) => i.pick(m, o)
                    }, {
                      default: y(() => [
                        I(p(m.d), 1)
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
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const wr = /* @__PURE__ */ x(or, [["render", kr]]), xr = {
  name: "Field",
  mixins: [E],
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
    iconType: q,
    /**
     * Başlık ikonu rengi: `success` | `warning` | `danger` | `info` | `muted` | ''.
     * Boş / muted → varsayılan muted-foreground.
     */
    iconTone: {
      type: String,
      default: "",
      validator: (e) => !e || ["success", "warning", "danger", "info", "muted"].includes(e)
    }
  },
  computed: {
    ...re(),
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    hasValue() {
      return !!this.$slots.default;
    },
    showIcon() {
      return !!this.icon;
    },
    titleIconClass() {
      const e = this.iconTone || "muted";
      return C("ui-field__title-icon", `ui-field__title-icon--${e}`);
    },
    rootClass() {
      return C(
        "ui-field",
        this.card && "ui-field--card",
        this.fill && "h-full min-h-0 flex flex-col",
        this.$attrs.class
      );
    }
  }
}, Sr = {
  key: 0,
  class: "ui-field__title-row"
}, Cr = {
  key: 1,
  class: "ui-field__title"
}, Tr = {
  key: 2,
  class: "ui-field__subtitle"
};
function Lr(e, t, r, s, n, i) {
  const u = _("ui-icon");
  return a(), l("div", A({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (a(), l("div", Sr, [
      i.showIcon ? (a(), l("span", {
        key: 0,
        class: v(i.titleIconClass),
        "aria-hidden": "true"
      }, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ], 2)) : f("", !0),
      r.title ? (a(), l("span", Cr, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (a(), l("div", {
      key: 1,
      class: v(["ui-field__value", r.fill ? "mt-auto" : void 0])
    }, [
      g(e.$slots, "default")
    ], 2)) : f("", !0),
    r.subtitle ? (a(), l("p", Tr, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const Ir = /* @__PURE__ */ x(xr, [["render", Lr]]), Ar = ["popover", "dialog"], Mr = ["sm", "md", "lg"], zr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Pr = {
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
      validator: (e) => Ar.includes(e)
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
      validator: (e) => Mr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => zr.includes(e)
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
        const t = !!e;
        this.isControlled || (this.uncontrolledOpen = t), this.$emit("update:open", t);
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
    onTriggerClick(e, t) {
      typeof t == "function" ? t() : this.toggle();
    },
    /** Chip üzerindeki xmark temizler; geri kalan alan paneli açar. */
    onLabeledTriggerClick(e, t) {
      var r, s;
      if (this.showTriggerClear && ((s = (r = e == null ? void 0 : e.target) == null ? void 0 : r.closest) != null && s.call(r, '.fa-xmark, [data-icon="xmark"]'))) {
        e.preventDefault(), e.stopPropagation(), this.onClear(this.close);
        return;
      }
      this.onTriggerClick(e, t);
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, Dr = { class: "ui-field-action-header" }, Er = { class: "ui-field-action-header__text" }, Or = {
  key: 0,
  class: "ui-field-action-header__title"
}, Rr = {
  key: 1,
  class: "ui-field-action-header__description"
}, Vr = { class: "ui-field-action-body" }, Br = { class: "ui-field-action-body" }, Fr = { class: "ui-field-action-footer" };
function Nr(e, t, r, s, n, i) {
  const u = _("ui-button"), c = _("ui-popover"), o = _("ui-dialog");
  return a(), l("div", {
    class: v([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (a(), b(c, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": t[0] || (t[0] = (h) => i.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, ee({
      trigger: y(({ open: h, toggle: m }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: m,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue,
          clear: () => i.onClear(i.close)
        }, () => [
          r.iconOnly ? (a(), b(u, {
            key: 0,
            type: "button",
            variant: i.triggerVariant,
            color: i.triggerColor,
            size: r.size,
            rounded: "",
            cubed: "",
            "prefix-icon": r.prefixIcon,
            disabled: r.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": i.triggerAriaLabel,
            onClick: (k) => i.onTriggerClick(k, m)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), b(u, {
            key: 1,
            type: "button",
            variant: i.triggerVariant,
            color: i.triggerColor,
            size: r.size,
            rounded: "",
            "prefix-icon": r.prefixIcon,
            "suffix-icon": i.triggerSuffixIcon,
            disabled: r.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": i.triggerAriaLabel,
            onClick: (k) => i.onLabeledTriggerClick(k, m)
          }, {
            default: y(() => [
              I(p(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: y(({ close: h }) => [
        d("div", Vr, [
          g(e.$slots, "default", {
            close: h,
            open: i.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: y(({ close: h }) => [
          g(e.$slots, "header", { close: h }, () => [
            d("div", Dr, [
              d("div", Er, [
                r.title ? (a(), l("p", Or, p(r.title), 1)) : f("", !0),
                r.description ? (a(), l("p", Rr, p(r.description), 1)) : f("", !0)
              ]),
              r.iconOnly && r.clearable && i.hasValue ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": i.resolvedClearLabel,
                onClick: (m) => i.onClear(h)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), l(L, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue,
        clear: () => i.onClear(i.close)
      }, () => [
        r.iconOnly ? (a(), b(u, {
          key: 0,
          type: "button",
          variant: i.triggerVariant,
          color: i.triggerColor,
          size: r.size,
          rounded: "",
          cubed: "",
          "prefix-icon": r.prefixIcon,
          disabled: r.disabled,
          "aria-expanded": i.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": i.triggerAriaLabel,
          onClick: t[1] || (t[1] = (h) => i.onTriggerClick(h, i.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), b(u, {
          key: 1,
          type: "button",
          variant: i.triggerVariant,
          color: i.triggerColor,
          size: r.size,
          rounded: "",
          "prefix-icon": r.prefixIcon,
          "suffix-icon": i.triggerSuffixIcon,
          disabled: r.disabled,
          "aria-expanded": i.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": i.triggerAriaLabel,
          onClick: t[2] || (t[2] = (h) => i.onLabeledTriggerClick(h, i.toggle))
        }, {
          default: y(() => [
            I(p(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(o, {
        open: i.resolvedOpen,
        "onUpdate:open": t[3] || (t[3] = (h) => i.resolvedOpen = h),
        title: r.title,
        description: r.description,
        icon: r.dialogIcon,
        "max-width": r.maxWidth,
        "close-on-backdrop": r.closeOnBackdrop,
        "close-on-escape": r.closeOnEscape
      }, ee({
        default: y(() => [
          d("div", Br, [
            g(e.$slots, "default", {
              close: i.close,
              open: i.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        i.showDialogFooter ? {
          name: "footer",
          fn: y(() => [
            g(e.$slots, "footer", { close: i.close }, () => [
              d("div", Fr, [
                w(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: y(() => [
                    I(p(i.resolvedDoneLabel), 1)
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
const Hr = /* @__PURE__ */ x(Pr, [["render", Nr]]), $r = ["auto", "file", "folder"], Wr = ["sm", "md", "lg"], Ur = { icon: "folder", color: "text-sky-500" }, Yr = { icon: "file-lines", color: "text-muted-foreground" }, Gr = {
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
}, we = {
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
function te(e) {
  return String(e ?? "").trim();
}
function qr(e) {
  const t = te(e);
  return /[/\\]\s*$/.test(t);
}
function Ge(e) {
  const t = te(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function jr(e) {
  const t = Ge(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const xe = {
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
}, Kr = {
  name: "File",
  mixins: [E],
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
      validator: (e) => $r.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Wr.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: q,
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
      return we[this.size] || we.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : qr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = te(this.name);
      return e ? this.basenameOnly ? Ge(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return te(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Ur;
      const e = jr(this.name);
      return Gr[e] || Yr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? G(this.uiDefaults, this.iconType) : this.inferredMeta.type || G(this.uiDefaults, void 0);
    },
    resolvedColorClass() {
      return this.color ? xe[this.color] !== void 0 ? xe[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, Zr = ["aria-label"], Xr = ["title"];
function Qr(e, t, r, s, n, i) {
  const u = _("ui-icon");
  return a(), l("div", {
    class: v(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    d("div", {
      class: v(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      w(u, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: v(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    r.hideLabel ? f("", !0) : (a(), l("span", {
      key: 0,
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Xr))
  ], 10, Zr);
}
const Jr = /* @__PURE__ */ x(Kr, [["render", Qr]]);
function ea(e) {
  const t = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((u) => u.top)), s = Math.min(...t.map((u) => u.left)), n = Math.max(...t.map((u) => u.right)), i = Math.max(...t.map((u) => u.bottom));
  return {
    top: r,
    left: s,
    right: n,
    bottom: i,
    width: n - s,
    height: i - r,
    x: s,
    y: r,
    toJSON: () => ({})
  };
}
function ue(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function Se(e) {
  const t = ue(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((n) => n instanceof HTMLElement), s = ea(r.map((n) => n.getBoundingClientRect()));
    if (s) return s;
  }
  return t.getBoundingClientRect();
}
function ta(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && t.push(s);
  return t;
}
const ia = ["dialog", "popover", "card", "tour"], ra = [
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
], aa = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, sa = 8, na = {
  name: "Guidance",
  mixins: [E],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => ia.includes(e)
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
    iconType: q,
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
      validator: (e) => ra.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: sa
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => aa.includes(e)
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
    ...re(),
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? ue(e) : typeof e == "string" && e.trim() ? ue(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const s = window.innerWidth, n = window.innerHeight, i = r.getBoundingClientRect(), u = i.width || 320, c = i.height || 180;
      if (!t) {
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
      const o = Se(t);
      if (!o) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, o.top - h), k = Math.max(0, o.left - h), T = Math.min(n, o.bottom + h), S = Math.min(s, o.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${k}px`,
        width: `${Math.max(0, S - k)}px`,
        height: `${Math.max(0, T - m)}px`
      };
      let M = T + V, O = k;
      this.placement.startsWith("top") ? M = m - c - V : this.placement.startsWith("right") ? (M = m, O = S + V) : this.placement.startsWith("left") ? (M = m, O = k - u - V) : this.placement.includes("end") && (O = S - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && M + c > n - V && (M = m - c - V), M = Math.max(V, Math.min(M, n - c - V)), O = Math.max(V, Math.min(O, s - u - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${M}px`,
        left: `${O}px`,
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
        const t = Se(e);
        if (t && t.height > 0) {
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
        const t = this.resolveTourTarget();
        if (t)
          for (const r of ta(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, la = { class: "ui-guidance-footer" }, oa = { class: "ui-guidance-popover" }, ua = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, da = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, ca = { class: "ui-guidance-popover__text" }, ha = {
  key: 0,
  class: "ui-guidance-popover__title"
}, fa = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, ma = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, pa = ["aria-label"], ga = { class: "ui-guidance-tour__content" }, ya = { class: "ui-header-lead" }, ba = { class: "ui-header-lead__main" }, va = {
  key: 0,
  class: "ui-header-lead__icon"
}, _a = { class: "ui-header-lead__text" }, ka = {
  key: 0,
  class: "ui-guidance-tour__title"
}, wa = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, xa = {
  key: 0,
  class: "ui-header-lead__actions"
}, Sa = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Ca = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Ta(e, t, r, s, n, i) {
  const u = _("ui-button"), c = _("ui-card"), o = _("ui-dialog"), h = _("ui-icon"), m = _("ui-popover");
  return i.shouldRender ? (a(), l("div", {
    key: 0,
    class: v(i.rootShellClass)
  }, [
    r.mode === "card" ? (a(), b(c, {
      key: 0,
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      border: ""
    }, ee({
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
      i.hasFooterActions ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer", {}, () => [
            d("div", la, [
              r.showFooterClose ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: y(() => [
                  I(p(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (a(), b(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: y(() => [
                  I(p(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (a(), b(o, {
      key: 1,
      open: i.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (k) => i.syncOpen = k),
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      "max-width": r.maxWidth,
      "close-on-backdrop": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape,
      "show-close": r.showClose,
      onAfterLeave: t[1] || (t[1] = (k) => e.$emit("after-leave"))
    }, ee({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      r.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: y(() => [
              I(p(i.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (a(), b(m, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (k) => i.syncOpen = k),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: y((k) => [
        g(e.$slots, "trigger", Gt(qt(k)))
      ]),
      content: y(() => [
        d("div", oa, [
          r.icon || r.title || r.description ? (a(), l("div", ua, [
            r.icon ? (a(), l("span", da, [
              w(h, {
                name: r.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            d("div", ca, [
              r.title ? (a(), l("p", ha, p(r.title), 1)) : f("", !0),
              r.description ? (a(), l("p", fa, p(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (a(), l("div", ma, [
            r.showFooterClose ? (a(), b(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: y(() => [
                I(p(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            r.showGo ? (a(), b(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: y(() => [
                I(p(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (a(), b(j, {
      key: 3,
      to: "body"
    }, [
      w(K, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (k) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          i.syncOpen ? (a(), l("div", {
            key: 0,
            class: v(["ui-guidance-tour", { "ui-guidance-tour--has-target": n.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = oe((...k) => i.onEscape && i.onEscape(...k), ["esc"]))
          }, [
            r.closeOnBackdrop ? (a(), l("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (...k) => i.onBackdrop && i.onBackdrop(...k))
            })) : f("", !0),
            n.tourHighlightStyle ? (a(), l("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: D(n.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            d("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: D(n.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r.title || i.resolvedGoLabel
            }, [
              d("div", ga, [
                d("div", ya, [
                  d("div", ba, [
                    r.icon ? (a(), l("span", va, [
                      w(h, {
                        name: r.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    d("div", _a, [
                      r.title ? (a(), l("p", ka, p(r.title), 1)) : f("", !0),
                      r.description ? (a(), l("p", wa, p(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (a(), l("div", xa, [
                    w(u, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": i.resolvedCloseLabel,
                      onClick: i.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : f("", !0)
                ]),
                e.$slots.default ? (a(), l("div", Sa, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (a(), l("div", Ca, [
                  r.showFooterClose ? (a(), b(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: y(() => [
                      I(p(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  r.showGo ? (a(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: y(() => [
                      I(p(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, pa)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const La = /* @__PURE__ */ x(na, [["render", Ta]]), Ia = {
  name: "IconPicker",
  mixins: [E],
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
    iconType: q,
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
    ...re(),
    rootClass() {
      return C(
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), t = Array.isArray(this.icons) ? this.icons : [];
      let r = t;
      e && (r = t.filter((n) => String(n).toLowerCase().includes(e)));
      const s = Number(this.maxResults);
      return Number.isFinite(s) && s > 0 ? r.slice(0, s) : r;
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
}, Aa = ["disabled", "aria-expanded", "onClick"], Ma = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, za = { class: "ui-select-field-suffix" }, Pa = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Da = { class: "ui-icon-picker-panel" }, Ea = { class: "ui-icon-picker-panel__header" }, Oa = { class: "ui-icon-picker-panel__title" }, Ra = { class: "ui-icon-picker-panel__search" }, Va = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Ba = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Fa = ["title", "onClick"];
function Na(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("ui-button"), o = _("ui-input"), h = _("ui-popover");
  return a(), l("div", {
    class: v(i.rootClass)
  }, [
    w(h, {
      open: n.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => n.popoverOpen = m),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: m, toggle: k, close: T }) => [
        g(e.$slots, "trigger", {
          open: m,
          toggle: k,
          close: T
        }, () => [
          d("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: k
          }, [
            d("span", Ma, [
              w(u, {
                name: i.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            d("span", {
              class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            d("span", za, [
              d("span", Pa, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Aa)
        ])
      ]),
      content: y(() => [
        d("div", Da, [
          d("div", Ea, [
            d("span", Oa, p(i.popoverTitleLabel), 1),
            i.localIcon ? (a(), b(c, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: R(i.clearIcon, ["stop"])
            }, {
              default: y(() => [
                I(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", Ra, [
            w(o, {
              modelValue: n.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => n.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (a(), l("div", Ba, [
            (a(!0), l(L, null, P(i.filteredIcons, (m) => (a(), l("button", {
              key: m,
              type: "button",
              class: v(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === m }]),
              title: m,
              onClick: (k) => i.selectIcon(m)
            }, [
              w(u, {
                name: m,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Fa))), 128))
          ])) : (a(), l("div", Va, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ha = /* @__PURE__ */ x(Ia, [["render", Na]]), $a = 56, Wa = 1.15, Ua = 0.28, Ya = {
  name: "Intro",
  mixins: [E],
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
      return (Array.isArray(this.steps) ? this.steps : []).map((t, r) => ({
        key: (t == null ? void 0 : t.key) ?? `intro-${r}`,
        icon: (t == null ? void 0 : t.icon) ?? "",
        iconType: (t == null ? void 0 : t.iconType) ?? G(this.uiDefaults, void 0),
        title: (t == null ? void 0 : t.title) ?? "",
        description: (t == null ? void 0 : t.description) ?? "",
        ariaLabel: (t == null ? void 0 : t.ariaLabel) ?? ""
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
      return C("ui-intro", this.overlay && "ui-intro--overlay", this.$attrs.class);
    },
    passthroughAttrs() {
      return Re(this.$attrs);
    }
  },
  watch: {
    isVisible(e) {
      e && (this.resetDrag(), this.$nextTick(() => {
        var t, r;
        (r = (t = this.$refs.root) == null ? void 0 : t.focus) == null || r.call(t, { preventScroll: !0 });
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
      const t = Math.min(this.lastIndex, Math.max(0, e));
      t !== this.activeIndex && this.$emit("update:modelValue", t);
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
      var t;
      const e = this.$refs.viewport;
      e && this.pointerId != null && ((t = e.hasPointerCapture) != null && t.call(e, this.pointerId)) && e.releasePointerCapture(this.pointerId);
    },
    onPointerDown(e) {
      var t, r;
      if (!(e.pointerType === "mouse" && e.button !== 0) && !this.isInteractiveTarget(e.target) && !(this.normalizedSteps.length < 2)) {
        this.dragging = !0, this.dragOffset = 0, this.pointerId = e.pointerId, this.startX = e.clientX, this.startY = e.clientY, this.startAt = e.timeStamp, this.lockedAxis = null;
        try {
          (r = (t = e.currentTarget) == null ? void 0 : t.setPointerCapture) == null || r.call(t, e.pointerId);
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
      var r;
      if (typeof window < "u" && window.PointerEvent || this.isInteractiveTarget(e.target) || this.normalizedSteps.length < 2) return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      t && (this.dragging = !0, this.dragOffset = 0, this.pointerId = "touch", this.startX = t.clientX, this.startY = t.clientY, this.startAt = e.timeStamp, this.lockedAxis = null);
    },
    onTouchMove(e) {
      var r;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      t && this.applyDrag(t.clientX, t.clientY, e);
    },
    onTouchEnd(e) {
      var r;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      this.commitDrag((t == null ? void 0 : t.clientX) ?? this.startX + this.dragOffset, e.timeStamp);
    },
    applyDrag(e, t, r) {
      var o;
      const s = e - this.startX, n = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(s) < 8 && Math.abs(n) < 8) return;
        if (this.lockedAxis = Math.abs(s) > Math.abs(n) * Wa ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = r == null ? void 0 : r.preventDefault) == null || o.call(r);
      const i = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let c = s;
      (i && c > 0 || u && c < 0) && (c *= Ua), this.dragOffset = c;
    },
    commitDrag(e, t) {
      var h;
      const r = e - this.startX, s = Math.max(1, t - this.startAt), n = r / s, i = ((h = this.$refs.viewport) == null ? void 0 : h.clientWidth) || 0, u = Math.max($a, i * 0.18), c = this.lockedAxis === "x" && (Math.abs(r) >= u || Math.abs(n) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !c) return;
      if (this.isRtl() ? r > 0 : r < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, Ga = ["aria-modal", "aria-label", "aria-roledescription"], qa = { class: "ui-intro__header" }, ja = ["aria-hidden"], Ka = {
  key: 0,
  class: "ui-intro__icon"
}, Za = {
  key: 1,
  class: "ui-intro__title"
}, Xa = {
  key: 2,
  class: "ui-intro__description"
}, Qa = { class: "ui-intro__footer" }, Ja = ["aria-label"], es = ["aria-selected", "aria-label", "onClick"];
function ts(e, t, r, s, n, i) {
  const u = _("ui-button"), c = _("ui-icon");
  return a(), b(j, {
    to: "body",
    disabled: !r.overlay
  }, [
    w(K, { name: "ui-intro-shell" }, {
      default: y(() => [
        i.isVisible ? (a(), l("div", A({
          key: 0,
          ref: "root",
          class: i.rootClass,
          role: "dialog",
          "aria-modal": r.overlay ? "true" : void 0,
          "aria-label": i.resolvedAriaLabel,
          "aria-roledescription": i.resolvedCarouselRole,
          tabindex: "-1"
        }, i.passthroughAttrs, {
          onKeydown: t[8] || (t[8] = (...o) => i.onRootKeydown && i.onRootKeydown(...o))
        }), [
          d("div", qa, [
            g(e.$slots, "header", {}, () => [
              r.showSkip ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: i.onSkip
              }, {
                default: y(() => [
                  I(p(i.resolvedSkipLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ]),
          d("div", {
            ref: "viewport",
            class: "ui-intro__viewport",
            onPointerdown: t[0] || (t[0] = (...o) => i.onPointerDown && i.onPointerDown(...o)),
            onPointermove: t[1] || (t[1] = (...o) => i.onPointerMove && i.onPointerMove(...o)),
            onPointerup: t[2] || (t[2] = (...o) => i.onPointerUp && i.onPointerUp(...o)),
            onPointercancel: t[3] || (t[3] = (...o) => i.onPointerUp && i.onPointerUp(...o)),
            onTouchstartPassive: t[4] || (t[4] = (...o) => i.onTouchStart && i.onTouchStart(...o)),
            onTouchmove: t[5] || (t[5] = (...o) => i.onTouchMove && i.onTouchMove(...o)),
            onTouchend: t[6] || (t[6] = (...o) => i.onTouchEnd && i.onTouchEnd(...o)),
            onTouchcancel: t[7] || (t[7] = (...o) => i.onTouchEnd && i.onTouchEnd(...o))
          }, [
            d("div", {
              class: v(["ui-intro__track", { "ui-intro__track--dragging": n.dragging }]),
              style: D(i.trackStyle)
            }, [
              (a(!0), l(L, null, P(i.normalizedSteps, (o, h) => (a(), l("div", {
                key: o.key,
                class: "ui-intro__slide",
                "aria-hidden": h === i.activeIndex ? void 0 : "true"
              }, [
                g(e.$slots, "default", {
                  step: o,
                  index: h,
                  active: h === i.activeIndex
                }, () => [
                  o.icon ? (a(), l("span", Ka, [
                    w(c, {
                      name: o.icon,
                      type: o.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  o.title ? (a(), l("h2", Za, p(o.title), 1)) : f("", !0),
                  o.description ? (a(), l("p", Xa, p(o.description), 1)) : f("", !0)
                ])
              ], 8, ja))), 128))
            ], 6)
          ], 544),
          d("div", Qa, [
            g(e.$slots, "footer", {
              index: i.activeIndex,
              isLast: i.isLastStep,
              goNext: i.goNext,
              goPrev: i.goPrev,
              goTo: i.goTo
            }, () => [
              i.normalizedSteps.length > 1 ? (a(), l("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": i.resolvedAriaLabel
              }, [
                (a(!0), l(L, null, P(i.normalizedSteps, (o, h) => (a(), l("button", {
                  key: o.key,
                  type: "button",
                  class: v(["ui-intro__dot", { "ui-intro__dot--active": h === i.activeIndex }]),
                  role: "tab",
                  "aria-selected": h === i.activeIndex,
                  "aria-label": o.ariaLabel || o.title || String(h + 1),
                  onClick: (m) => i.goTo(h)
                }, null, 10, es))), 128))
              ], 8, Ja)) : f("", !0),
              w(u, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: i.goNext
              }, {
                default: y(() => [
                  I(p(i.primaryLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ], 16, Ga)) : f("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const is = /* @__PURE__ */ x(Ya, [["render", ts]]), rs = ["sm", "md", "lg", "xl", "2xl"], as = ["default", "foreground", "muted", "success", "danger", "primary"], ss = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => rs.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => as.includes(e)
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
function ns(e, t, r, s, n, i) {
  return a(), l("span", {
    class: v(["ui-price-text", i.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      I(p(r.value), 1)
    ])
  ], 2);
}
const fe = /* @__PURE__ */ x(ss, [["render", ns]]), ls = ["sm", "md", "lg"], os = ["sm", "md", "lg", "xl", "2xl"], us = ["default", "foreground", "muted", "success", "danger", "primary"], ds = {
  name: "PriceDisplay",
  components: { PriceText: fe },
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
      validator: (e) => ls.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => os.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => us.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, cs = { class: "ui-price-display__label" };
function hs(e, t, r, s, n, i) {
  const u = _("ui-price-text");
  return a(), l("div", {
    class: v(["ui-price-display", i.rootClass])
  }, [
    d("span", cs, p(r.label), 1),
    w(u, {
      value: r.value,
      size: r.valueSize,
      tone: r.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          I(p(r.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const fs = /* @__PURE__ */ x(ds, [["render", hs]]), ms = ["sm", "md", "lg"], ps = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ms.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function gs(e, t, r, s, n, i) {
  return a(), l("div", {
    class: v(["ui-price-display-group", i.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ys = /* @__PURE__ */ x(ps, [["render", gs]]), bs = ["sm", "md", "lg", "xl", "2xl"], vs = ["default", "foreground", "muted", "success", "danger", "primary"], _s = {
  name: "PriceDisplayRow",
  components: { PriceText: fe },
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
      validator: (e) => bs.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => vs.includes(e)
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
}, ks = { class: "ui-price-display-row__label" };
function ws(e, t, r, s, n, i) {
  const u = _("ui-price-text");
  return a(), l("div", {
    class: v(["ui-price-display-row", i.rootClass])
  }, [
    d("span", ks, p(r.label), 1),
    w(u, {
      value: r.value,
      size: r.valueSize,
      tone: r.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          I(p(r.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const xs = /* @__PURE__ */ x(_s, [["render", ws]]), Ss = ["tr-TR", "en-US"], ie = he({
  currency: "TRY",
  format: "tr-TR"
});
function Cs(e, t = ie.format) {
  return Ss.includes(e) ? e : t;
}
function Ts(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (ie.currency = ae(e.currency));
  const t = e.format ?? e.locale;
  t != null && (ie.format = Cs(t));
}
function Ls() {
  return jt(ie);
}
const Is = {
  name: "PriceInput",
  components: { CurrencyInput: Ye },
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
    return { priceInputConfig: Ls() };
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
function As(e, t, r, s, n, i) {
  const u = _("CurrencyInput");
  return a(), b(u, A({
    "model-value": r.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.$emit("update:modelValue", c)),
    onInput: t[1] || (t[1] = (c) => e.$emit("input", c)),
    onChange: t[2] || (t[2] = (c) => e.$emit("change", c)),
    onFocus: t[3] || (t[3] = (c) => e.$emit("focus", c)),
    onBlur: t[4] || (t[4] = (c) => e.$emit("blur", c))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Ms = /* @__PURE__ */ x(Is, [["render", As]]);
function zs(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const s = Math.min(4, Math.round(r)), n = ["weak", "fair", "good", "strong"], i = s <= 0 ? "weak" : n[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: i
  };
}
const Ps = N("ui-password"), Ds = ["sm", "md", "lg"], Es = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ds.includes(e)
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
    const e = Ps(), t = e.slice(12);
    return {
      fallbackId: e,
      fallbackStrengthId: `ui-password-strength-${t}`,
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
      return zs(this.modelValue);
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
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  }
}, Os = ["aria-label", "aria-pressed", "disabled"], Rs = ["id", "aria-live"];
function Vs(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("ui-input"), o = _("ui-progress");
  return a(), l("div", {
    class: v(["ui-password", [e.$attrs.class]])
  }, [
    w(c, A({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
      type: n.visible ? "text" : "password",
      size: r.size,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength,
      "aria-describedby": i.strengthDescribedby
    }, i.passthroughAttrs, {
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      append: y(() => [
        d("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": n.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => n.visible = !n.visible)
        }, [
          w(u, {
            name: n.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Os)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (a(), l("div", {
      key: 0,
      id: n.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      w(o, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (a(), l("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, Rs)) : f("", !0)
  ], 2);
}
const Bs = /* @__PURE__ */ x(Es, [["render", Vs]]), Fs = ["bar", "circle"], Ce = ["sm", "md", "lg", "xl", "2xl"], Te = ["thin", "md"], Ns = ["default", "weak", "fair", "good", "strong"], Q = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, Hs = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, $s = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Fs.includes(e)
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
      validator: (e) => Ns.includes(e)
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
      const e = this.type === "circle" ? Ce.includes(this.size) ? this.size : "sm" : Te.includes(this.size) ? this.size : "md";
      return C(
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
      return Ce.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return Te.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = Q[this.circleSizeKey] ?? Q.sm;
      return { width: `${e}px`, height: `${e}px` };
    },
    clampedPercent() {
      if (this.indeterminate) return 0;
      const e = Number(this.max);
      if (!Number.isFinite(e) || e <= 0) return 0;
      const t = Number(this.value);
      return Number.isFinite(t) ? Math.min(100, Math.max(0, t / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = Q[this.circleSizeKey] ?? Q.sm, t = Hs[this.circleSizeKey] ?? 2, r = (e - t) / 2, s = e / 2, n = 2 * Math.PI * r, i = n * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: s, circumference: n, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ws = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Us = ["width", "height", "viewBox"], Ys = ["cx", "cy", "r", "stroke-width"], Gs = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], qs = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function js(e, t, r, s, n, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    style: D(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (a(), l("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      d("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Ys),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Gs)
    ], 8, Us)) : (a(), l("div", qs, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: D({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Ws);
}
const Ks = /* @__PURE__ */ x($s, [["render", js]]), Zs = N("ui-sheet"), Xs = ["left", "right"], Qs = ["sm", "md", "lg", "xl"], Js = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, en = {
  name: "Sheet",
  mixins: [Xe, E],
  components: { Divider: Ve },
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
      validator: (e) => Xs.includes(e)
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
      validator: (e) => Qs.includes(e)
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
      validator: (e) => e == null || Js.includes(e)
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
    const e = Zs();
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
      return G(this.uiDefaults, this.iconType);
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
      return Le[this.size] || Le.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return C(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.fullOnMobile ? "ui-sheet-panel--full-mobile" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return Re(this.$attrs, ["class"]);
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
      return C(
        "ui-sheet-root fixed inset-0 flex outline-none",
        this.side === "left" ? "justify-start" : "justify-end",
        !this.overlay && "ui-sheet-root--no-overlay"
      );
    }
  },
  methods: {
    acquireLayer() {
      this.rootZIndex == null && (this.rootZIndex = Je(this, "modal", () => this.close()));
    },
    releaseLayer() {
      this.rootZIndex != null && (Qe(this), this.rootZIndex = null);
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
        Be(e) || (this.focusFallbackTimer = setTimeout(() => {
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, tn = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], rn = {
  key: 0,
  class: "ui-card-header shrink-0"
}, an = ["id"], sn = {
  key: 1,
  class: "ui-sheet-header__icon"
}, nn = {
  key: 2,
  class: "ui-sheet-header__actions"
}, ln = ["id"], on = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function un(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("ui-button"), o = _("Divider");
  return n.portalReady ? (a(), b(j, {
    key: 0,
    to: e.portalTarget
  }, [
    w(K, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: y(() => [
        r.open ? (a(), l("div", {
          key: 0,
          ref: "layerRef",
          class: v(i.rootLayerClasses),
          style: D(i.rootLayerStyle),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          r.overlay ? (a(), l("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          })) : f("", !0),
          d("div", A({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": r.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[1] || (t[1] = R(() => {
            }, ["stop"]))
          }), [
            i.hasHeaderBlock ? (a(), l("div", rn, [
              g(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (a(), l("div", {
                  key: 0,
                  class: v(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.title ? (a(), l("h3", {
                    key: 0,
                    id: n.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(r.title), 9, an)) : f("", !0),
                  r.icon ? (a(), l("span", sn, [
                    w(u, {
                      name: r.icon,
                      type: i.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), l("div", nn, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (a(), b(c, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": i.resolvedCloseLabel,
                    onClick: i.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  r.description ? (a(), l("p", {
                    key: 4,
                    id: n.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(r.description), 9, ln)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), l("div", on, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (a(), b(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), l("div", {
              key: 3,
              class: v(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), l("div", {
              key: 4,
              class: v(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, tn)
        ], 38)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to"])) : f("", !0);
}
const dn = /* @__PURE__ */ x(en, [["render", un]]), cn = ["sm", "md", "lg", "full"], Ie = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, hn = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => cn.includes(e)
    }
  },
  computed: {
    rootClass() {
      return C(
        "ui-menu",
        Ie[this.width] || Ie.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, fn = {
  key: 0,
  class: "ui-menu-header"
}, mn = { class: "ui-menu-body" }, pn = {
  key: 1,
  class: "ui-menu-footer"
};
function gn(e, t, r, s, n, i) {
  return a(), l("nav", A({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (a(), l("div", fn, [
      g(e.$slots, "header")
    ])) : f("", !0),
    d("div", mn, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), l("div", pn, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const yn = /* @__PURE__ */ x(hn, [["render", gn]]), bn = {
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
      return C("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, vn = {
  key: 0,
  class: "ui-menu-group-label"
}, _n = { class: "ui-menu-group-items" };
function kn(e, t, r, s, n, i) {
  return a(), l("div", A({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (a(), l("p", vn, p(r.label), 1)) : f("", !0),
    d("div", _n, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const wn = /* @__PURE__ */ x(bn, [["render", kn]]), xn = {
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
      return C(
        "ui-menu-item",
        this.active && "ui-menu-item--active",
        this.$attrs.class
      );
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function Sn(e, t, r, s, n, i) {
  const u = _("ui-button");
  return a(), b(u, A({
    type: "button",
    variant: "ghost",
    color: "secondary",
    block: "",
    "text-align": "left",
    to: r.to,
    "prefix-icon": r.prefixIcon,
    "suffix-icon": r.suffixIcon,
    disabled: r.disabled,
    loading: r.loading,
    class: i.itemClass,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, { onClick: i.onClick }), {
    default: y(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Cn = /* @__PURE__ */ x(xn, [["render", Sn]]), Tn = {
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
      return C("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ln = ["aria-label"];
function In(e, t, r, s, n, i) {
  return a(), l("div", A({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Ln);
}
const An = /* @__PURE__ */ x(Tn, [["render", In]]), Mn = ["sm", "md", "lg"], zn = ["button", "submit", "reset"], Ae = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Me = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Pn = {
  name: "SidebarItem",
  mixins: [E],
  components: { RouterLink: Qt },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => zn.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Mn.includes(e)
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
      return De(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
    },
    hasRenderableDefaultSlot() {
      const e = this.$slots.default;
      return e ? e().some((t) => this.isRenderableVNode(t)) : !1;
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
      return this.isBlock ? C("ui-sidebar-item-text min-w-0 flex-1 truncate", e) : C("ui-sidebar-item-text whitespace-nowrap", e);
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    itemClasses() {
      const e = this.cubed ? Me[this.resolvedSize] || Me.md : Ae[this.resolvedSize] || Ae.md;
      return C(
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
      if (e == null || typeof e != "object" || e.type === Kt) return !1;
      if (e.type === Zt)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === L) {
        const t = e.children;
        return Array.isArray(t) ? t.some((r) => this.isRenderableVNode(r)) : !1;
      }
      return !0;
    },
    onClick(e) {
      this.disabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, t) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), !e.defaultPrevented && t(e);
    }
  }
}, Dn = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], En = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, On = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Rn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Vn = ["type", "disabled", "aria-current"], Bn = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Fn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Nn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Hn(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("RouterLink");
  return i.hasRouterTo ? (a(), b(c, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: y(({ href: o, navigate: h }) => [
      d("a", A({
        href: o,
        class: i.itemClasses,
        "aria-current": r.active ? "page" : void 0,
        "aria-disabled": r.disabled ? "true" : void 0,
        tabindex: r.disabled ? -1 : void 0
      }, i.forwardedAttrs, {
        onClick: (m) => i.onRouterLinkClick(m, h)
      }), [
        i.usesCubedCenterLayout ? (a(), l("span", En, [
          r.prefixIcon ? (a(), b(u, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (a(), l(L, { key: 1 }, [
          r.prefixIcon ? (a(), l("span", On, [
            w(u, {
              size: i.inlineIconSize,
              name: r.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          d("span", {
            class: v(i.textContentClass)
          }, [
            g(e.$slots, "default")
          ], 2),
          r.suffixIcon ? (a(), l("span", Rn, [
            w(u, {
              size: i.inlineIconSize,
              name: r.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 16, Dn)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), l("button", A({
    key: 1,
    type: r.nativeType,
    class: i.itemClasses,
    disabled: r.disabled || void 0,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.onClick && i.onClick(...o))
  }), [
    i.usesCubedCenterLayout ? (a(), l("span", Bn, [
      r.prefixIcon ? (a(), b(u, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (a(), l(L, { key: 1 }, [
      r.prefixIcon ? (a(), l("span", Fn, [
        w(u, {
          size: i.inlineIconSize,
          name: r.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      d("span", {
        class: v(i.textContentClass)
      }, [
        g(e.$slots, "default")
      ], 2),
      r.suffixIcon ? (a(), l("span", Nn, [
        w(u, {
          size: i.inlineIconSize,
          name: r.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 16, Vn));
}
const $n = /* @__PURE__ */ x(Pn, [["render", Hn]]), Wn = {
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
    active(e, t) {
      e && t === !1 && this.scheduleFocus();
    }
  },
  methods: {
    resolveFocusRoot() {
      const e = this.$refs.root;
      return e instanceof HTMLElement ? e.closest(".ui-dialog-panel") || e.closest(".ui-sheet-panel") || e.closest(".ui-card") || e : null;
    },
    scheduleFocus() {
      !this.autofocus || !this.active || Oe() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Be(e);
        });
      });
    }
  }
}, Un = {
  ref: "root",
  class: "ui-step"
};
function Yn(e, t, r, s, n, i) {
  return Ne((a(), l("div", Un, [
    g(e.$slots, "default")
  ], 512)), [
    [He, r.active]
  ]);
}
const Gn = /* @__PURE__ */ x(Wn, [["render", Yn]]), qn = ["horizontal", "vertical"], jn = ["default", "pills"], Kn = {
  name: "Stepper",
  mixins: [E],
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
      validator: (e) => jn.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => qn.includes(e)
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
      return (Array.isArray(this.steps) ? this.steps : []).map((t) => ({
        title: (t == null ? void 0 : t.title) ?? "",
        description: (t == null ? void 0 : t.description) ?? "",
        icon: (t == null ? void 0 : t.icon) ?? null,
        iconType: (t == null ? void 0 : t.iconType) ?? G(this.uiDefaults, void 0)
      }));
    },
    rootClass() {
      return C(
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
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const t = this.normalizedSteps.length - 1, r = Math.min(t, Math.max(0, e));
      this.$emit("update:modelValue", r);
    },
    pillClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-pill--complete" : e === t ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-indicator--complete" : e === t ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
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
}, Zn = ["aria-label"], Xn = { class: "ui-stepper-pills-track" }, Qn = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Jn = { class: "flex w-full min-w-0 items-center justify-center" }, el = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, tl = {
  key: 1,
  class: "tabular-nums"
}, il = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, rl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, al = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, sl = { class: "flex flex-col items-center" }, nl = {
  key: 1,
  class: "tabular-nums"
}, ll = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, ol = { class: "ui-stepper-title" }, ul = {
  key: 0,
  class: "ui-stepper-description"
};
function dl(e, t, r, s, n, i) {
  const u = _("ui-icon");
  return a(), l("div", A({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (a(), l(L, { key: 0 }, [
      d("div", Xn, [
        (a(!0), l(L, null, P(i.normalizedSteps, (c, o) => (a(), b(W(r.interactive ? "button" : "span"), A({
          key: o,
          class: ["ui-stepper-pill", i.pillClass(o)],
          role: "listitem",
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (a(), l("p", Qn, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (a(!0), l(L, { key: 1 }, P(i.normalizedSteps, (c, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", Jn, [
        o > 0 ? (a(), l("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", el)),
        (a(), b(W(r.interactive ? "button" : "div"), A({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: y(() => [
            c.icon ? (a(), b(u, {
              key: 0,
              name: c.icon,
              type: c.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", tl, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", il))
      ]),
      d("p", rl, p(c.title), 1),
      c.description ? (a(), l("p", al, p(c.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), l(L, { key: 2 }, P(i.normalizedSteps, (c, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", sl, [
        (a(), b(W(r.interactive ? "button" : "div"), A({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: y(() => [
            c.icon ? (a(), b(u, {
              key: 0,
              name: c.icon,
              type: c.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), l("span", nl, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      d("div", ll, [
        d("p", ol, p(c.title), 1),
        c.description ? (a(), l("p", ul, p(c.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Zn);
}
const cl = /* @__PURE__ */ x(Kn, [["render", dl]]), hl = N("ui-slider"), fl = {
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
    return { fallbackId: hl() };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return C("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
    },
    fillPercent() {
      const e = Number(this.max) - Number(this.min);
      if (e <= 0 || !Number.isFinite(Number(this.modelValue)))
        return 0;
      const t = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, t));
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
      ]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onNativeInput(e) {
      const t = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(t) ? this.min : t), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, ml = {
  key: 0,
  class: "ui-slider-header"
}, pl = {
  key: 0,
  class: "ui-form-label"
}, gl = {
  key: 1,
  class: "ui-slider-value"
}, yl = { class: "ui-slider-rail" }, bl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], vl = {
  key: 1,
  class: "ui-slider-scale"
}, _l = { key: 0 }, kl = { key: 1 };
function wl(e, t, r, s, n, i) {
  const u = _("ui-progress");
  return a(), l("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (a(), l("div", ml, [
      r.label ? (a(), l("span", pl, p(r.label), 1)) : f("", !0),
      i.hasValue ? (a(), l("span", gl, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    d("div", yl, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      d("input", A(i.passthroughAttrs, {
        id: i.resolvedId,
        value: r.modelValue,
        type: "range",
        class: "ui-slider-input",
        min: r.min,
        max: r.max,
        step: r.step,
        disabled: r.disabled,
        "aria-valuemin": r.min,
        "aria-valuemax": r.max,
        "aria-valuenow": r.modelValue,
        "aria-valuetext": r.valueText || String(r.modelValue),
        "aria-describedby": r.ariaDescribedby,
        onInput: t[0] || (t[0] = (...c) => i.onNativeInput && i.onNativeInput(...c)),
        onChange: t[1] || (t[1] = (...c) => i.onChange && i.onChange(...c))
      }), null, 16, bl)
    ]),
    r.minLabel || r.maxLabel ? (a(), l("div", vl, [
      r.minLabel ? (a(), l("span", _l, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (a(), l("span", kl, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const xl = /* @__PURE__ */ x(fl, [["render", wl]]), Sl = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return C("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Cl = { class: "ui-table-scroll" };
function Tl(e, t, r, s, n, i) {
  return a(), l("div", Cl, [
    d("table", A({ class: i.rootClass }, i.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const Ll = /* @__PURE__ */ x(Sl, [["render", Tl]]), Il = {
  name: "TableBody"
}, Al = { class: "ui-table-body" };
function Ml(e, t, r, s, n, i) {
  return a(), l("tbody", Al, [
    g(e.$slots, "default")
  ]);
}
const zl = /* @__PURE__ */ x(Il, [["render", Ml]]), Pl = ["left", "center", "right"], Dl = ["title", "secondary", "body"], El = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Pl.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Dl.includes(e)
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
      return C(
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
}, Ol = ["colspan"];
function Rl(e, t, r, s, n, i) {
  return a(), l("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, Ol);
}
const Vl = /* @__PURE__ */ x(El, [["render", Rl]]), Bl = ["left", "center", "right"], Fl = ["sm", "md", "lg"], Nl = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Bl.includes(e)
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
      return C(
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
      if (!(this.iconCol || Fl.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Hl(e, t, r, s, n, i) {
  return a(), l("th", {
    class: v(i.rootClass),
    style: D(i.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const $l = /* @__PURE__ */ x(Nl, [["render", Hl]]), Wl = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return C(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function Ul(e, t, r, s, n, i) {
  return a(), l("thead", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Yl = /* @__PURE__ */ x(Wl, [["render", Ul]]), Gl = {
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
}, ql = { class: "ui-table-pagination" }, jl = { class: "ui-table-pagination-meta" }, Kl = { class: "ui-table-pagination-nav" }, Zl = { class: "ui-table-pagination-page" };
function Xl(e, t, r, s, n, i) {
  const u = _("ui-button");
  return a(), l("div", ql, [
    d("div", jl, [
      g(e.$slots, "meta", {}, () => [
        I(p(r.metaText), 1)
      ])
    ]),
    d("div", Kl, [
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (c) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      d("div", Zl, p(r.pageLabel), 1),
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (c) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Ql = /* @__PURE__ */ x(Gl, [["render", Xl]]), Jl = ["none", "soft", "strong"], eo = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Jl.includes(e)
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
      return C(
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
function to(e, t, r, s, n, i) {
  return a(), l("tr", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const io = /* @__PURE__ */ x(eo, [["render", to]]), ro = {
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
      return C("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, ao = ["id", "aria-labelledby"];
function so(e, t, r, s, n, i) {
  return Ne((a(), l("div", A({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, ao)), [
    [He, i.isActive]
  ]);
}
const no = /* @__PURE__ */ x(ro, [["render", so]]), ze = Symbol("uiThemeMode"), lo = {
  name: "ThemeProvider",
  inject: {
    parentDefaults: { from: ve, default: () => be },
    parentMode: { from: ze, default: null }
  },
  provide() {
    return {
      [ve]: this.providedDefaults,
      [ze]: Xt(() => this.resolvedMode),
      [rt]: () => this.$refs.portal || null
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
      providedDefaults: he({ ...be })
    };
  },
  computed: {
    pkg() {
      return this.theme ? Fe(this.theme) : null;
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
      return { ...this.pkg ? tt(this.pkg, this.resolvedMode) : {}, ...it(this.overrides, this.resolvedMode) };
    },
    mergedDefaults() {
      var e;
      return et({
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
}, oo = {
  ref: "portal",
  class: "ui-theme-provider-portal"
};
function uo(e, t, r, s, n, i) {
  return a(), b(W(r.tag), {
    class: v(["ui-theme-provider", { dark: i.resolvedMode === "dark", "ui-theme-provider--background": r.background }]),
    "data-ui-theme": i.themeId,
    "data-ui-mode": i.resolvedMode,
    style: D(i.cssVars)
  }, {
    default: y(() => [
      d("div", oo, null, 512),
      g(e.$slots, "default", {
        mode: i.resolvedMode,
        theme: i.pkg
      })
    ]),
    _: 3
  }, 8, ["class", "data-ui-theme", "data-ui-mode", "style"]);
}
const co = /* @__PURE__ */ x(lo, [["render", uo]]);
function $(e) {
  return String(e).padStart(2, "0");
}
function qe(e, t = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const s = Number(r[1]), n = Number(r[2]);
  if (!Number.isFinite(s) || !Number.isFinite(n))
    return String(e || "");
  if (t === "HH:mm")
    return `${$(s)}:${$(n)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const i = s >= 12 ? "PM" : "AM";
    return `${s % 12 || 12}:${$(n)} ${i}`;
  }
  return `${$(s)}:${$(n)}`;
}
function ho(e, t, r = "HH:mm") {
  return qe(`${e}:${t}`, r);
}
const fo = N("ui-timepicker"), ne = 40;
function le(e) {
  return String(e).padStart(2, "0");
}
const mo = {
  name: "TimePicker",
  mixins: [E],
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
      fallbackId: fo(),
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
      return Array.from({ length: 24 }, (e, t) => t);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), t = [];
      for (let r = 0; r < 60; r += e)
        t.push(r);
      return t;
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
      return Ee(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? ho(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? qe(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
    pad2: le,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (t = Math.min(23, Math.max(0, parseInt(s[1], 10))), r = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const n = this.minuteValues;
      let i = n[0] ?? 0, u = 999;
      for (const c of n) {
        const o = Math.abs(c - r);
        o < u && (u = o, i = c);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return ne;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return ne;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : ne;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const s = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), n = e.scrollTop + e.clientHeight / 2, i = Math.round((n - s - r / 2) / r);
      return Math.min(t, Math.max(0, i));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + t * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: r = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, t);
      r && typeof e.scrollTo == "function" ? e.scrollTo({ top: s, behavior: "smooth" }) : e.scrollTop = s;
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let r = this.minuteValues.indexOf(this.draftMinute);
      r === -1 && (r = 0), this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
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
      const t = this.minuteValues;
      if (!t.length) return;
      const r = Math.min(t.length - 1, Math.max(0, e));
      this.draftMinute = t[r], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, r, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, t = this.$refs.minuteWheel;
      !e || !t || (this.supportsScrollEnd ? (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scrollend", this.onHourScrollEnd), t.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), t.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scrollend", this.onHourScrollEnd), t.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), t.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scroll", this.onHourScrollDebounced), t.removeEventListener("scroll", this.onMinuteScrollDebounced);
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
      const e = this.$refs.minuteWheel, t = this.minuteValues;
      if (!e || !t.length) return;
      const r = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[r];
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
      const e = `${le(this.draftHour)}:${le(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.indexFromScroll(e, 23);
      this.draftHour = t;
      const r = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - r) > 0.5 && (e.scrollTop = r), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.minuteValues;
      if (!t.length) return;
      const r = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[r];
      const s = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, po = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, go = { class: "ui-timepicker-wheels" }, yo = { class: "ui-timepicker-wheels-row" }, bo = ["aria-valuenow", "aria-label"], vo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, _o = { class: "ui-timepicker-wheel-spacer" }, ko = ["onClick"], wo = ["aria-valuenow", "aria-label"], xo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, So = { class: "ui-timepicker-wheel-spacer" }, Co = ["onClick"], To = { class: "min-w-0 flex-1 truncate text-foreground" }, Lo = { class: "ui-timepicker-panel w-full p-2" }, Io = { class: "ui-timepicker-wheels" }, Ao = { class: "ui-timepicker-wheels-row" }, Mo = ["aria-valuenow", "aria-label"], zo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Po = { class: "ui-timepicker-wheel-spacer" }, Do = ["onClick"], Eo = ["aria-valuenow", "aria-label"], Oo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ro = { class: "ui-timepicker-wheel-spacer" }, Vo = ["onClick"];
function Bo(e, t, r, s, n, i) {
  const u = _("ui-button"), c = _("ui-popover");
  return a(), l("div", {
    class: v([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (a(), l("div", po, [
      d("div", go, [
        t[2] || (t[2] = d("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        d("div", yo, [
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": n.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            d("div", vo, [
              d("div", _o, [
                (a(!0), l(L, null, P(i.hourOptions, (o) => (a(), l("button", {
                  key: "h-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(o)
                }, p(i.pad2(o)), 11, ko))), 128))
              ])
            ], 512)
          ], 8, bo),
          t[1] || (t[1] = d("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": n.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": i.minuteAriaLabel
          }, [
            d("div", xo, [
              d("div", So, [
                (a(!0), l(L, null, P(i.minuteValues, (o, h) => (a(), l("button", {
                  key: "m-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => i.selectMinute(h)
                }, p(i.pad2(o)), 11, Co))), 128))
              ])
            ], 512)
          ], 8, wo)
        ]),
        t[3] || (t[3] = d("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        t[4] || (t[4] = d("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (a(), b(c, {
      key: 1,
      open: n.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (o) => n.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: o, toggle: h, close: m }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: h,
          close: m
        }, () => [
          w(u, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: r.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              d("span", To, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        d("div", Lo, [
          d("div", Io, [
            t[6] || (t[6] = d("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", Ao, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": n.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                d("div", zo, [
                  d("div", Po, [
                    (a(!0), l(L, null, P(i.hourOptions, (o) => (a(), l("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(o)
                    }, p(i.pad2(o)), 11, Do))), 128))
                  ])
                ], 512)
              ], 8, Mo),
              t[5] || (t[5] = d("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": n.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                d("div", Oo, [
                  d("div", Ro, [
                    (a(!0), l(L, null, P(i.minuteValues, (o, h) => (a(), l("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(o)), 11, Vo))), 128))
                  ])
                ], 512)
              ], 8, Eo)
            ]),
            t[7] || (t[7] = d("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[8] || (t[8] = d("div", {
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
const Fo = /* @__PURE__ */ x(mo, [["render", Bo]]), No = ["square", "video", "auto"], Ho = ["fill", "sm", "md", "lg"], Pe = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, $o = {
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
      validator: (e) => No.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Ho.includes(e)
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
      return C(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Pe[this.size] || Pe.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
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
}, Wo = ["src", "alt"], Uo = ["aria-hidden"], Yo = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Go = {
  key: 3,
  class: "ui-photo__overflow"
}, qo = ["aria-label"], jo = ["aria-label"], Ko = { class: "ui-photo-preview__panel" }, Zo = ["src", "alt"], Xo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Qo(e, t, r, s, n, i) {
  const u = _("ui-icon"), c = _("ui-button");
  return a(), l(L, null, [
    (a(), b(W(i.rootTag), A({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: y(() => [
        r.src && !n.imageFailed ? (a(), l("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (o) => n.imageFailed = !0)
        }, null, 40, Wo)) : (a(), l("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Uo)),
        r.favorite ? (a(), l("span", Yo, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (a(), l("span", Go, p(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), b(j, { to: "body" }, [
      w(K, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          n.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, jo),
            d("div", Ko, [
              w(c, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (a(), b(c, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: R(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), l("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Zo)) : f("", !0),
              i.showNext ? (a(), b(c, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: R(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), l("p", Xo, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, qo)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Jo = /* @__PURE__ */ x($o, [["render", Qo]]), eu = ["square", "video", "auto"], tu = {
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
      validator: (e) => eu.includes(e)
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
      return (this.items || []).map((e, t) => {
        const r = String((e == null ? void 0 : e.src) ?? (e == null ? void 0 : e.url) ?? "").trim();
        return r ? {
          key: (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.key) ?? null,
          src: r,
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
      return C(
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
}, iu = ["data-count"], ru = ["aria-label"], au = ["aria-label"], su = { class: "ui-photo-preview__panel" }, nu = ["src", "alt"], lu = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ou(e, t, r, s, n, i) {
  const u = _("ui-photo"), c = _("ui-button");
  return a(), l(L, null, [
    d("div", {
      class: v(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (a(!0), l(L, null, P(i.visibleItems, (o, h) => (a(), b(u, {
        key: o.key || `${o.src}-${h}`,
        src: o.src,
        alt: o.alt || "",
        favorite: !!o.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": o.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, iu),
    (a(), b(j, { to: "body" }, [
      w(K, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          n.previewOpen ? (a(), l("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, au),
            d("div", su, [
              w(c, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (a(), b(c, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: R(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), l("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, nu)) : f("", !0),
              i.showNext ? (a(), b(c, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: R(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), l("p", lu, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, ru)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const uu = /* @__PURE__ */ x(tu, [["render", ou]]);
function J(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function yu() {
  return {
    push: H,
    dismiss: st,
    clear: at,
    info: (e) => H({ ...J(e), color: "info" }),
    success: (e) => H({ ...J(e), color: "success" }),
    warning: (e) => H({ ...J(e), color: "warning" }),
    danger: (e) => H({ ...J(e), color: "danger" })
  };
}
function bu(e = !1) {
  return he({
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
function vu() {
  return {
    confirm: nt
  };
}
const de = {
  en: ut,
  tr: ot
};
function _u(e = "tr") {
  return de[e] ?? de.tr;
}
const du = [
  ["ui-action-card", ni],
  ["ui-action-card-list", di],
  ["ui-action-group", dt],
  ["ui-ai-button", pi],
  ["ui-alert", ct],
  ["ui-avatar", ht],
  ["ui-avatar-group", _i],
  ["ui-badge", ft],
  ["ui-button", mt],
  ["ui-card", pt],
  ["ui-checkbox", Xi],
  ["ui-checkbox-group", ar],
  ["ui-color-picker", Ri],
  ["ui-currency-input", Ye],
  ["ui-confirm-dialog", gt],
  ["ui-date-picker", yt],
  ["ui-date-range-picker", wr],
  ["ui-dialog", bt],
  ["ui-divider", Ve],
  ["ui-dropdown", vt],
  ["ui-empty", _t],
  ["ui-field", Ir],
  ["ui-field-action", Hr],
  ["ui-file", Jr],
  ["ui-form-row", kt],
  ["ui-guidance", La],
  ["ui-icon", wt],
  ["ui-icon-picker", Ha],
  ["ui-intro", is],
  ["ui-input", xt],
  ["ui-price-display", fs],
  ["ui-price-display-group", ys],
  ["ui-price-display-row", xs],
  ["ui-price-input", Ms],
  ["ui-price-text", fe],
  ["ui-password", Bs],
  ["ui-phone", St],
  ["ui-pin", Ct],
  ["ui-list", Tt],
  ["ui-list-item", Lt],
  ["ui-popover", It],
  ["ui-progress", Ks],
  ["ui-radio", At],
  ["ui-radio-group", Mt],
  ["ui-select", zt],
  ["ui-sheet", dn],
  ["ui-menu", yn],
  ["ui-menu-group", wn],
  ["ui-menu-item", Cn],
  ["ui-menu-nav", An],
  ["ui-sidebar-item", $n],
  ["ui-segment", Pt],
  ["ui-segment-group", Dt],
  ["ui-skeleton", Et],
  ["ui-slider", xl],
  ["ui-step", Gn],
  ["ui-stepper", cl],
  ["ui-switch", Ot],
  ["ui-table", Ll],
  ["ui-table-body", zl],
  ["ui-table-cell", Vl],
  ["ui-table-head", $l],
  ["ui-table-header", Yl],
  ["ui-table-pagination", Ql],
  ["ui-table-row", io],
  ["ui-tag", Rt],
  ["ui-tab-list", Vt],
  ["ui-tab-panel", no],
  ["ui-tabs", Bt],
  ["ui-tab-trigger", Ft],
  ["ui-theme-provider", co],
  ["ui-time-picker", Fo],
  ["ui-tooltip", Nt],
  ["ui-toast", Ht],
  ["ui-photo", Jo],
  ["ui-photos", uu]
];
let ce = null;
function cu(e, t = {}) {
  const r = Fe(e);
  return $t(r.id) || Wt(r), Ut(r, t), ce && Yt(ce, { ...r.defaults, ...t.defaults }), r;
}
function hu(e, t = {}) {
  var k, T;
  const { i18n: r, locale: s, locales: n, theme: i, mode: u, overrides: c, inline: o, defaults: h, priceInput: m } = t;
  if (ce = lt(e, h), i && cu(i, { mode: u, overrides: c, inline: o, defaults: h }), m && Ts(m), (k = r == null ? void 0 : r.global) != null && k.mergeLocaleMessage) {
    const S = n ?? (s != null ? [s] : [
      typeof r.global.locale == "string" ? r.global.locale : ((T = r.global.locale) == null ? void 0 : T.value) ?? "tr"
    ]);
    for (const M of S) {
      const O = de[M];
      O && r.global.mergeLocaleMessage(M, O);
    }
  }
  for (const [S, M] of du)
    e.component(S, M);
}
const ku = {
  install: hu
};
export {
  ni as ActionCard,
  di as ActionCardList,
  dt as ActionGroup,
  pi as AiButton,
  ct as Alert,
  ht as Avatar,
  _i as AvatarGroup,
  Su as BACKDROP_BLUR_SCALE,
  be as BASE_UI_DEFAULTS,
  ft as Badge,
  mt as Button,
  Cu as CARD_PADDING_SCALE,
  pt as Card,
  Xi as Checkbox,
  ar as CheckboxGroup,
  Ri as ColorPicker,
  gt as ConfirmDialog,
  Ye as CurrencyInput,
  Tu as DEFAULT_THEME_ID,
  Lu as DERIVED_VARS,
  yt as DatePicker,
  wr as DateRangePicker,
  bt as Dialog,
  Ve as Divider,
  vt as Dropdown,
  _t as Empty,
  Iu as FEW_COLOR_SCALE,
  Au as FEW_PALETTE_ID,
  Mu as FEW_PRIMARY,
  zu as FEW_PRIMARY_FOREGROUND,
  Ir as Field,
  Hr as FieldAction,
  Jr as File,
  kt as FormRow,
  Pu as GOOGLE_FONTS_CATALOG,
  La as Guidance,
  wt as Icon,
  Ha as IconPicker,
  xt as Input,
  is as Intro,
  Tt as List,
  Lt as ListItem,
  Du as MIX_FROM_MAP,
  yn as Menu,
  wn as MenuGroup,
  Cn as MenuItem,
  An as MenuNav,
  Ss as PRICE_FORMATS,
  Bs as Password,
  St as Phone,
  Jo as Photo,
  uu as Photos,
  Ct as Pin,
  It as Popover,
  Ms as PriceInput,
  Ks as Progress,
  At as Radio,
  Mt as RadioGroup,
  Eu as STATUS_TONES,
  Pt as Segment,
  Dt as SegmentGroup,
  zt as Select,
  dn as Sheet,
  $n as SidebarItem,
  Et as Skeleton,
  xl as Slider,
  Gn as Step,
  cl as Stepper,
  Ot as Switch,
  Ou as THEME_CUSTOM_CSS_ID,
  Ru as TOAST_GROUP_WINDOW_MS,
  Vu as TOKEN_GROUPS,
  Vt as TabList,
  no as TabPanel,
  Ft as TabTrigger,
  Ll as Table,
  zl as TableBody,
  Vl as TableCell,
  $l as TableHead,
  Yl as TableHeader,
  Ql as TablePagination,
  io as TableRow,
  Bt as Tabs,
  Rt as Tag,
  co as ThemeProvider,
  Fo as TimePicker,
  Ht as Toast,
  Nt as Tooltip,
  ve as UI_DEFAULTS_KEY,
  Bu as UI_ICON_TYPES,
  Fu as UI_KEYBOARD_INSET_EVENT,
  rt as UI_PORTAL_KEY,
  Nu as applyGoogleFontsCatalogPreview,
  Hu as applyGoogleFontsForTheme,
  $u as applyThemeCustomCss,
  Ut as applyUiTheme,
  Wu as buildGoogleFontsLinkTag,
  Uu as buildGoogleFontsStylesheetUrl,
  Yu as buildThemeCss,
  Gu as buildThemeEnforcementCss,
  qu as buildThemeStyleAttr,
  ju as clearThemeCustomCss,
  at as clearToasts,
  Ku as clearUiTheme,
  Zu as computeThemeVars,
  Xu as createUiId,
  N as createUiIdFactory,
  ku as default,
  Qu as defineTheme,
  Ju as deriveBrandColorsFromPrimary,
  st as dismissToast,
  ed as ensureContrastForMode,
  td as expandTokens,
  id as extendTheme,
  gu as formatCurrencyAmount,
  rd as formatFontFamily,
  ad as formatGoogleFontFamilyName,
  Bi as formatMoneyInput,
  $e as getCurrencySymbol,
  sd as getFewPrimaryColors,
  Ue as getMoneySeparators,
  Ls as getPriceInputConfig,
  nd as getThemeCssPath,
  $t as getThemePackage,
  _u as getUiMessages,
  ld as googleFontSelectOptions,
  q as iconTypeProp,
  od as isThemePackage,
  ud as listThemes,
  dd as mergeTokens,
  et as mergeUiDefaults,
  cd as onVisibleViewportChange,
  hd as parseHex,
  Vi as parseLocalizedMoneyInput,
  fd as parseOklchLightness,
  md as pickContrastForeground,
  Re as pickPassthroughAttrs,
  lt as provideUiDefaults,
  H as pushToast,
  pd as readKeyboardInset,
  Wt as registerTheme,
  gd as relativeLuminance,
  nt as requestConfirm,
  yd as resetUiIds,
  bd as resolveControlSize,
  ae as resolveCurrencyCode,
  Fe as resolveTheme,
  De as resolveThemeControlSize,
  Ee as resolveThemeDefault,
  vd as resolveThemeFontFamilies,
  G as resolveThemeIconType,
  tt as resolveThemeVars,
  z as resolveUiText,
  We as sanitizeMoneyInput,
  Ts as setPriceInputConfig,
  _d as setToastExpanded,
  Yt as setUiDefaults,
  cu as setUiTheme,
  kd as setUiThemeMode,
  wd as themeConfigToTokens,
  re as themeIconTypeComputed,
  xd as toCssVarName,
  Sd as toggleToastExpanded,
  E as uiDefaultsMixin,
  Xe as uiPortalMixin,
  vu as useConfirm,
  bu as useDialog,
  yu as useToast,
  Cd as useUiDefaults,
  Td as visibleViewportBottom,
  Ld as withDerivedBrandTokens,
  Id as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
