import { _ as x, au as G, b2 as O, a_ as se, aQ as De, ab as T, aV as M, ae as N, aR as Oe, aN as qe, t as Ke, av as Ee, ap as Ze, aT as Y, aD as Re, l as Ve, b3 as Xe, am as Be, aJ as Qe, aF as Je, c as ye, X as be, az as et, aU as tt, aO as it, aP as Fe, Z as rt, a9 as st, ah as at, aG as U, aK as nt, aE as lt, b1 as ot, ai as ut, A as ct, a as dt, b as ht, d as ft, e as mt, f as pt, g as gt, j as vt, k as yt, m as bt, E as _t, q as kt, I as wt, r as xt, P as St, u as Ct, L as Tt, s as Lt, v as It, R as Pt, w as At, z as Mt, x as zt, y as Dt, H as Ot, J as Et, U as Rt, N as Vt, Q as Bt, O as Ft, W as Nt, V as Ut, as as Ht, aH as $t, a2 as jt, aX as Wt } from "./custom-css-Bo-efet4.js";
import { B as Su, C as Cu, h as Tu, i as Lu, F as Iu, n as Pu, o as Au, p as Mu, G as zu, M as Du, S as Ou, D as Eu, T as Ru, K as Vu, Y as Bu, $ as Fu, a0 as Nu, a1 as Uu, a3 as Hu, a4 as $u, a5 as ju, a6 as Wu, a7 as Yu, a8 as Gu, aa as qu, ac as Ku, ad as Zu, af as Xu, ag as Qu, aj as Ju, ak as ec, al as tc, an as ic, ao as rc, aq as sc, ar as ac, at as nc, aw as lc, ax as oc, ay as uc, aA as cc, aB as dc, aC as hc, aI as fc, aL as mc, aM as pc, aS as gc, aW as vc, aY as yc, aZ as bc, a$ as _c, b0 as kc, b4 as wc, b5 as xc, b6 as Sc } from "./custom-css-Bo-efet4.js";
import { resolveComponent as k, openBlock as s, createElementBlock as l, normalizeClass as b, renderSlot as g, createVNode as _, createCommentVNode as f, createElementVNode as c, toDisplayString as p, createBlock as y, normalizeStyle as D, mergeProps as P, withCtx as v, withModifiers as R, createTextVNode as I, Fragment as S, renderList as z, withKeys as ue, createSlots as ee, normalizeProps as Yt, guardReactiveProps as Gt, Teleport as q, Transition as K, readonly as qt, reactive as he, Comment as Kt, Text as Zt, withDirectives as Ne, vShow as Ue, resolveDynamicComponent as $, computed as Xt } from "vue";
import { RouterLink as Qt } from "vue-router";
const Jt = {
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
    iconType: G,
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
}, ei = ["disabled"], ti = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, ii = { class: "ui-action-card__content" }, ri = { class: "ui-action-card__title" }, si = {
  key: 0,
  class: "ui-action-card__description"
};
function ai(e, t, r, a, n, i) {
  const u = k("ui-icon");
  return s(), l("button", {
    type: "button",
    class: b(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (s(), l("span", ti, [
        _(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("v-if", !0)
    ]),
    c("span", ii, [
      c(
        "span",
        ri,
        p(r.title),
        1
        /* TEXT */
      ),
      r.description ? (s(), l(
        "span",
        si,
        p(r.description),
        1
        /* TEXT */
      )) : f("v-if", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (s(), y(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("v-if", !0)
    ])
  ], 10, ei);
}
const ni = /* @__PURE__ */ x(Jt, [["render", ai], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ActionCard.vue"]]), li = {
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
function ui(e, t, r, a, n, i) {
  return s(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: D(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, oi);
}
const ci = /* @__PURE__ */ x(li, [["render", ui], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ActionCardList.vue"]]), di = {
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
function mi(e, t, r, a, n, i) {
  const u = k("ui-button");
  return s(), l("span", {
    class: b(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": i.resolvedSize,
    style: D(i.rootStyle)
  }, [
    t[1] || (t[1] = c(
      "span",
      {
        class: "ui-ai-button__glow",
        "aria-hidden": "true"
      },
      null,
      -1
      /* CACHED */
    )),
    c("span", fi, [
      _(u, P({
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
        onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
      }), {
        default: v(() => [
          g(e.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, hi);
}
const pi = /* @__PURE__ */ x(di, [["render", mi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/AiButton.vue"]]), gi = ["xs", "sm", "md", "lg", "xl"], ne = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, vi = {
  name: "AvatarGroup",
  SIZE_CLASS: ne,
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
      return T(
        "ui-avatar-group",
        ne[this.size] || ne.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, yi = ["aria-label"];
function bi(e, t, r, a, n, i) {
  return s(), l("div", {
    class: b(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    r.overflowCount > 0 ? (s(), l(
      "span",
      {
        key: 0,
        class: b(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
      },
      p(i.overflowText),
      3
      /* TEXT, CLASS */
    )) : f("v-if", !0)
  ], 10, yi);
}
const _i = /* @__PURE__ */ x(vi, [["render", bi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/AvatarGroup.vue"]]), ki = [
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
      return T(
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
}, Li = { class: "ui-color-picker-panel" }, Ii = { class: "ui-color-picker-panel__header" }, Pi = { class: "ui-color-picker-panel__title" }, Ai = { class: "ui-color-picker-swatches" }, Mi = ["title", "onClick"], zi = { class: "ui-color-picker-custom" }, Di = { class: "ui-color-picker-panel__title" }, Oi = { class: "ui-color-picker-custom__row" };
function Ei(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return s(), l(
    "div",
    {
      class: b(i.rootClass)
    },
    [
      _(h, {
        open: n.popoverOpen,
        "onUpdate:open": t[1] || (t[1] = (m) => n.popoverOpen = m),
        placement: "bottom-start",
        "match-trigger-width": !e.$slots.trigger,
        disabled: r.disabled
      }, {
        trigger: v(({ open: m, toggle: w, close: L }) => [
          g(e.$slots, "trigger", {
            open: m,
            toggle: w,
            close: L
          }, () => [
            c("button", {
              type: "button",
              class: "ui-select-field",
              disabled: r.disabled,
              "aria-expanded": m ? "true" : "false",
              "aria-haspopup": !0,
              onClick: w
            }, [
              c("span", Si, [
                i.localColor ? (s(), l(
                  "span",
                  {
                    key: 0,
                    class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                    style: D({ backgroundColor: i.localColor })
                  },
                  null,
                  4
                  /* STYLE */
                )) : (s(), y(u, {
                  key: 1,
                  name: "palette",
                  size: "xs",
                  class: "text-muted-foreground"
                }))
              ]),
              c(
                "span",
                {
                  class: b(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
                },
                p(i.displayValue),
                3
                /* TEXT, CLASS */
              ),
              c("span", Ci, [
                c("span", Ti, [
                  _(u, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ], 8, xi)
          ])
        ]),
        content: v(() => [
          c("div", Li, [
            c("div", Ii, [
              c(
                "span",
                Pi,
                p(i.popoverTitleLabel),
                1
                /* TEXT */
              ),
              i.localColor ? (s(), y(d, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "prefix-icon": "eraser",
                onClick: R(i.clearColor, ["stop"])
              }, {
                default: v(() => [
                  I(
                    p(i.clearLabelText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])) : f("v-if", !0)
            ]),
            c("div", Ai, [
              (s(!0), l(
                S,
                null,
                z(n.presetColors, (m) => (s(), l("button", {
                  key: m,
                  type: "button",
                  class: b(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === m }]),
                  style: D({ backgroundColor: m }),
                  title: m,
                  onClick: (w) => i.selectColor(m)
                }, [
                  i.localColor === m ? (s(), y(u, {
                    key: 0,
                    name: "check",
                    type: "solid",
                    size: "xs",
                    class: "text-white mix-blend-difference"
                  })) : f("v-if", !0)
                ], 14, Mi))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            c("div", zi, [
              c(
                "span",
                Di,
                p(i.customColorLabelText),
                1
                /* TEXT */
              ),
              c("div", Oi, [
                _(o, {
                  modelValue: i.localColor,
                  "onUpdate:modelValue": t[0] || (t[0] = (m) => i.localColor = m),
                  block: "",
                  autocomplete: "off",
                  placeholder: "#000000",
                  onBlur: i.normalizeHex
                }, null, 8, ["modelValue", "onBlur"]),
                c(
                  "span",
                  {
                    class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                    style: D({ backgroundColor: i.localColor || "transparent" }),
                    "aria-hidden": "true"
                  },
                  null,
                  4
                  /* STYLE */
                )
              ])
            ])
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["open", "match-trigger-width", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Ri = /* @__PURE__ */ x(wi, [["render", Ei], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ColorPicker.vue"]]), _e = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, j = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function ae(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in j ? t : "TRY";
  const r = String(e).trim();
  if (_e[r])
    return _e[r];
  const a = r.toUpperCase();
  return j[a] ? a : t in j ? t : "TRY";
}
function He(e) {
  var r;
  const t = ae(e);
  if (j[t])
    return j[t];
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
  const a = Number(e) || 0, n = ae(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: n }).format(a);
  } catch {
    return `${He(n)}${a.toFixed(2)}`;
  }
}
function $e(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const a = t.slice(0, r), n = t.slice(r + 1).replace(/\./g, "");
    t = `${a}.${n}`;
  }
  return t;
}
function je(e = "tr-TR") {
  var t, r;
  try {
    const a = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = a.find((n) => n.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = a.find((n) => n.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Vi(e, t = "tr-TR") {
  const { group: r, decimal: a } = je(t);
  let n = String(e ?? "").trim();
  return n ? (n = n.split(r).join(""), n = n.split(a).join("."), $e(n)) : "";
}
function Bi(e, t = "tr-TR") {
  const r = $e(e);
  if (!r) return "";
  const { group: a, decimal: n } = je(t), [i = "", u] = r.split("."), o = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, a);
  return u === void 0 ? o : `${o}${n}${u}`;
}
const Fi = N("ui-currency-input"), Ni = ["sm", "md", "lg"], Ui = {
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
      return He(this.currency);
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
      for (const [r, a] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = a);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, Hi = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function $i(e, t, r, a, n, i) {
  const u = k("ui-input");
  return s(), y(u, P({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => i.innerValue = d),
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
    onFocus: t[1] || (t[1] = (d) => e.$emit("focus", d)),
    onBlur: i.onBlur
  }), {
    prepend: v(() => [
      c(
        "span",
        Hi,
        p(i.displaySymbol),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const We = /* @__PURE__ */ x(Ui, [["render", $i], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/CurrencyInput.vue"]]), ji = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, a = Array.isArray(r) ? [...r] : [], n = a.findIndex((i) => Object.is(i, this.value));
        t && n === -1 ? a.push(this.value) : !t && n !== -1 && a.splice(n, 1), this.uiCheckboxGroup.$emit("update:modelValue", a);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((a) => Object.is(a, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Wi = ["type", "name", "value", "checked"], Yi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Gi = { class: "ui-checkbox-body" }, qi = {
  key: 0,
  class: "ui-checkbox-label"
}, Ki = {
  key: 1,
  class: "ui-checkbox-description"
};
function Zi(e, t, r, a, n, i) {
  const u = k("ui-icon");
  return s(), l(
    "label",
    {
      class: b(i.checkboxClasses),
      onKeydown: [
        t[1] || (t[1] = ue(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
        t[2] || (t[2] = ue(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
      ]
    },
    [
      c("input", {
        type: i.nativeType,
        name: i.nativeName,
        value: i.groupValueString,
        checked: i.isChecked,
        class: "sr-only",
        onChange: t[0] || (t[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
      }, null, 40, Wi),
      c("span", Yi, [
        i.isChecked ? (s(), y(u, {
          key: 0,
          name: "check",
          size: "xs",
          class: "ui-checkbox-check-icon text-primary-foreground"
        })) : f("v-if", !0)
      ]),
      c("span", Gi, [
        e.$slots.label || r.label ? (s(), l("span", qi, [
          g(e.$slots, "label", {}, () => [
            I(
              p(r.label),
              1
              /* TEXT */
            )
          ])
        ])) : f("v-if", !0),
        r.description ? (s(), l(
          "span",
          Ki,
          p(r.description),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Xi = /* @__PURE__ */ x(ji, [["render", Zi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Checkbox.vue"]]), Qi = ["list", "button"], Ji = ["vertical", "horizontal"], er = N("ui-checkbox-group"), tr = {
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
      return T(
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
function rr(e, t, r, a, n, i) {
  return s(), l("div", {
    class: b(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, ir);
}
const sr = /* @__PURE__ */ x(tr, [["render", rr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/CheckboxGroup.vue"]]), ar = N("ui-daterangepicker");
function W(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function Z(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), a = Number(t[2]) - 1, n = Number(t[3]), i = new Date(r, a, n);
  return i.getFullYear() !== r || i.getMonth() !== a || i.getDate() !== n ? null : i;
}
function F(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function X(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function nr(e, t, r) {
  const { year: a, month: n, day: i } = parseIsoParts(e), d = new Date(a, n - 1, i).getDay(), o = d === 0 ? -6 : 1 - d, h = new Date(a, n - 1, i + o), m = B(h), w = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let L = B(w);
  if (t && L > t && (L = t), r && m < r && L < r) return null;
  let C = m;
  return r && C < r && (C = r), F(C, L) > 0 ? null : [C, L];
}
function lr(e, t, r) {
  const { year: a } = parseIsoParts(e), n = `${a}-01-01`;
  let i = `${a}-12-31`;
  if (t && i > t && (i = t), r && n < r && i < r) return null;
  let u = n;
  return r && u < r && (u = r), F(u, i) > 0 ? null : [u, i];
}
function ke(e, t, r, a) {
  const n = `${e}-${W(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let u = `${e}-${W(t + 1)}-${W(i)}`;
  if (r && u > r && (u = r), a && n < a && u < a) return null;
  let d = n;
  return a && d < a && (d = a), F(d, u) > 0 ? null : [d, u];
}
const or = {
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
    }
  },
  emits: ["update:modelValue", "change", "update:open"],
  data() {
    var r, a;
    const e = ((r = this.modelValue) == null ? void 0 : r[0]) || "", t = Z(e) || Z((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: ar(),
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Ee() : !1
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
      return qe((e = this.$i18n) == null ? void 0 : e.locale);
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
        return this.presets.map((C) => ({
          ...C,
          disabled: !C.range || this.isRangeDisabled(C.range[0], C.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), t = B(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const a = B(r), n = new Date(e);
      n.setDate(n.getDate() + 1);
      const i = B(n), u = e.getMonth(), d = e.getFullYear(), o = new Date(d, u - 1, 1), h = o.getFullYear(), m = o.getMonth(), w = (C, A) => typeof this.$t == "function" ? this.$t(C, A) : C;
      return [
        {
          key: "today",
          label: w("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: w("ui.dateRangePicker.yesterday"),
          range: [a, a]
        },
        {
          key: "tomorrow",
          label: w("ui.datePicker.tomorrow"),
          range: [i, i]
        },
        {
          key: "thisWeek",
          label: w("ui.dateRangePicker.thisWeek"),
          range: nr(t, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: w("ui.dateRangePicker.thisMonth", {
            month: X(d, u, this.locale)
          }),
          range: ke(d, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: w("ui.dateRangePicker.lastMonth", {
            month: X(h, m, this.locale)
          }),
          range: ke(h, m, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: w("ui.dateRangePicker.thisYear", { year: d }),
          range: lr(t, this.maxYmd, this.minYmd)
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
      const r = Oe(this.uiDefaults, void 0, "dateRangeFormat"), a = (n) => n ? Ze(n, this.locale, r) || n : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? a(e || t) : `${a(e)} – ${a(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), a = new Date(e, t, 1 - r.getDay()), n = this.previewStart, i = this.previewEnd, u = n && i, d = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(a.getFullYear(), a.getMonth(), a.getDate() + o), m = h.getMonth() === t && h.getFullYear() === e, w = h.getDate(), L = B(h), C = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, A = B(/* @__PURE__ */ new Date()) === L, E = !!(this.minYmd && L < this.minYmd) || !!(this.maxYmd && L > this.maxYmd);
        let me = !1, pe = !1;
        if (u) {
          const ge = F(n, i) <= 0 ? n : i, ve = F(n, i) <= 0 ? i : n;
          me = F(L, ge) >= 0 && F(L, ve) <= 0, pe = L === ge || L === ve;
        }
        d.push({
          key: C,
          d: w,
          date: h,
          today: A,
          inMonth: m,
          disabled: E,
          inRange: me,
          endpoint: pe
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, a] = e.range;
      this.pickingStart = r, this.pickingEnd = a, this.$emit("update:modelValue", [r, a]), this.$emit("change", [r, a]), t();
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
      let a = this.pickingStart, n = r;
      if (F(n, a) < 0) {
        const i = a;
        a = n, n = i;
      }
      this.pickingStart = a, this.pickingEnd = n, this.$emit("update:modelValue", [a, n]), this.$emit("change", [a, n]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, ur = { class: "min-w-0 flex-1 truncate text-foreground" }, cr = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, dr = { class: "ui-daterangepicker-layout" }, hr = ["aria-label"], fr = { class: "ui-daterangepicker-calendars" }, mr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, pr = { class: "ui-daterangepicker-month-row" }, gr = { class: "mb-2 flex items-center justify-between gap-2" }, vr = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, yr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, br = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, _r = { class: "ui-datepicker-grid" };
function kr(e, t, r, a, n, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return s(), l(
    "div",
    {
      class: b(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
    },
    [
      _(d, {
        open: i.resolvedOpen,
        "onUpdate:open": t[2] || (t[2] = (o) => i.resolvedOpen = o),
        placement: "bottom-end",
        "match-trigger-width": !1,
        width: i.popoverWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: o, toggle: h, close: m }) => [
          g(e.$slots, "trigger", {
            open: o,
            toggle: h,
            close: m
          }, () => [
            _(u, {
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
              default: v(() => [
                c(
                  "span",
                  ur,
                  p(i.displayText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["id", "disabled", "aria-expanded", "onClick"])
          ])
        ]),
        content: v(({ close: o }) => [
          c("div", cr, [
            c("div", dr, [
              i.quickPresets.length ? (s(), l("aside", {
                key: 0,
                class: "ui-daterangepicker-quick",
                "aria-label": i.resolvedQuickAriaLabel
              }, [
                (s(!0), l(
                  S,
                  null,
                  z(i.quickPresets, (h) => (s(), y(u, {
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
                    default: v(() => [
                      I(
                        p(h.label),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, hr)) : f("v-if", !0),
              c("div", fr, [
                i.rangeHint ? (s(), l(
                  "p",
                  mr,
                  p(i.rangeHint),
                  1
                  /* TEXT */
                )) : f("v-if", !0),
                c("div", pr, [
                  (s(!0), l(
                    S,
                    null,
                    z(i.calendarPanes, (h) => (s(), l("section", {
                      key: h.key,
                      class: "ui-daterangepicker-month"
                    }, [
                      c("div", gr, [
                        h.showPrev ? (s(), y(u, {
                          key: 0,
                          variant: "ghost",
                          color: "primary",
                          cubed: "",
                          "prefix-icon": "chevron-left",
                          "aria-label": i.resolvedPrevMonthLabel,
                          onClick: t[0] || (t[0] = R((m) => i.shiftMonth(-1), ["stop"]))
                        }, null, 8, ["aria-label"])) : (s(), l("span", vr)),
                        c(
                          "span",
                          yr,
                          p(h.title),
                          1
                          /* TEXT */
                        ),
                        h.showNext ? (s(), y(u, {
                          key: 2,
                          variant: "ghost",
                          color: "primary",
                          cubed: "",
                          "prefix-icon": "chevron-right",
                          "aria-label": i.resolvedNextMonthLabel,
                          onClick: t[1] || (t[1] = R((m) => i.shiftMonth(1), ["stop"]))
                        }, null, 8, ["aria-label"])) : (s(), l("span", br))
                      ]),
                      t[3] || (t[3] = c(
                        "div",
                        { class: "ui-datepicker-weekdays mb-1" },
                        [
                          c("span", null, "Su"),
                          c("span", null, "Mo"),
                          c("span", null, "Tu"),
                          c("span", null, "We"),
                          c("span", null, "Th"),
                          c("span", null, "Fr"),
                          c("span", null, "Sa")
                        ],
                        -1
                        /* CACHED */
                      )),
                      c("div", _r, [
                        (s(!0), l(
                          S,
                          null,
                          z(h.cells, (m) => (s(), y(u, {
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
                            onMouseenter: (w) => i.onCellHover(m),
                            onClick: (w) => i.pick(m, o)
                          }, {
                            default: v(() => [
                              I(
                                p(m.d),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["open", "width", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const wr = /* @__PURE__ */ x(or, [["render", kr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/DateRangePicker.vue"]]), xr = {
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
    iconType: G,
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
    ...se(),
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
      return T("ui-field__title-icon", `ui-field__title-icon--${e}`);
    },
    rootClass() {
      return T(
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
function Lr(e, t, r, a, n, i) {
  const u = k("ui-icon");
  return s(), l(
    "div",
    P({ class: i.rootClass }, i.passthroughAttrs),
    [
      r.title || i.showIcon ? (s(), l("div", Sr, [
        i.showIcon ? (s(), l(
          "span",
          {
            key: 0,
            class: b(i.titleIconClass),
            "aria-hidden": "true"
          },
          [
            _(u, {
              name: r.icon,
              type: e.resolvedIconType,
              size: "md"
            }, null, 8, ["name", "type"])
          ],
          2
          /* CLASS */
        )) : f("v-if", !0),
        r.title ? (s(), l(
          "span",
          Cr,
          p(r.title),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0),
      i.hasValue ? (s(), l(
        "div",
        {
          key: 1,
          class: b(["ui-field__value", r.fill ? "mt-auto" : void 0])
        },
        [
          g(e.$slots, "default")
        ],
        2
        /* CLASS */
      )) : f("v-if", !0),
      r.subtitle ? (s(), l(
        "p",
        Tr,
        p(r.subtitle),
        1
        /* TEXT */
      )) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const Ir = /* @__PURE__ */ x(xr, [["render", Lr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Field.vue"]]), Pr = ["popover", "dialog"], Ar = ["sm", "md", "lg"], Mr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], zr = {
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
      validator: (e) => Pr.includes(e)
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
      validator: (e) => Ar.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Mr.includes(e)
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
    onTriggerClick(e, t) {
      typeof t == "function" ? t() : this.toggle();
    },
    /** Chip üzerindeki xmark temizler; geri kalan alan paneli açar. */
    onLabeledTriggerClick(e, t) {
      var r, a;
      if (this.showTriggerClear && ((a = (r = e == null ? void 0 : e.target) == null ? void 0 : r.closest) != null && a.call(r, '.fa-xmark, [data-icon="xmark"]'))) {
        e.preventDefault(), e.stopPropagation(), this.onClear(this.close);
        return;
      }
      this.onTriggerClick(e, t);
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, Dr = { class: "ui-field-action-header" }, Or = { class: "ui-field-action-header__text" }, Er = {
  key: 0,
  class: "ui-field-action-header__title"
}, Rr = {
  key: 1,
  class: "ui-field-action-header__description"
}, Vr = { class: "ui-field-action-body" }, Br = { class: "ui-field-action-body" }, Fr = { class: "ui-field-action-footer" };
function Nr(e, t, r, a, n, i) {
  const u = k("ui-button"), d = k("ui-popover"), o = k("ui-dialog");
  return s(), l(
    "div",
    {
      class: b([
        "ui-field-action",
        i.hasValue ? "ui-field-action--filled" : "",
        r.iconOnly ? "ui-field-action--icon" : "",
        e.$attrs.class
      ])
    },
    [
      i.isPopover ? (s(), y(d, {
        key: 0,
        open: i.resolvedOpen,
        "onUpdate:open": t[0] || (t[0] = (h) => i.resolvedOpen = h),
        placement: r.placement,
        width: r.popoverWidth,
        disabled: r.disabled,
        "mobile-centered": r.mobileCentered
      }, ee({
        trigger: v(({ open: h, toggle: m }) => [
          g(e.$slots, "trigger", {
            open: h,
            toggle: m,
            close: i.close,
            label: i.triggerLabel,
            hasValue: i.hasValue,
            clear: () => i.onClear(i.close)
          }, () => [
            r.iconOnly ? (s(), y(u, {
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
              onClick: (w) => i.onTriggerClick(w, m)
            }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (s(), y(u, {
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
              onClick: (w) => i.onLabeledTriggerClick(w, m)
            }, {
              default: v(() => [
                I(
                  p(i.triggerLabel),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
          ])
        ]),
        content: v(({ close: h }) => [
          c("div", Vr, [
            g(e.$slots, "default", {
              close: h,
              open: i.resolvedOpen
            })
          ])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        i.showPopoverHeader ? {
          name: "header",
          fn: v(({ close: h }) => [
            g(e.$slots, "header", { close: h }, () => [
              c("div", Dr, [
                c("div", Or, [
                  r.title ? (s(), l(
                    "p",
                    Er,
                    p(r.title),
                    1
                    /* TEXT */
                  )) : f("v-if", !0),
                  r.description ? (s(), l(
                    "p",
                    Rr,
                    p(r.description),
                    1
                    /* TEXT */
                  )) : f("v-if", !0)
                ]),
                f(" Yalnız icon-only: etiketli chip’te clear tetikleyicide (xmark). "),
                r.iconOnly && r.clearable && i.hasValue ? (s(), y(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "eraser",
                  "aria-label": i.resolvedClearLabel,
                  onClick: (m) => i.onClear(h)
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0)
              ])
            ])
          ]),
          key: "0"
        } : void 0,
        e.$slots.footer ? {
          name: "footer",
          fn: v(({ close: h }) => [
            g(e.$slots, "footer", { close: h })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (s(), l(
        S,
        { key: 1 },
        [
          g(e.$slots, "trigger", {
            open: i.resolvedOpen,
            toggle: i.toggle,
            close: i.close,
            label: i.triggerLabel,
            hasValue: i.hasValue,
            clear: () => i.onClear(i.close)
          }, () => [
            r.iconOnly ? (s(), y(u, {
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
            }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (s(), y(u, {
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
              default: v(() => [
                I(
                  p(i.triggerLabel),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
          ]),
          _(o, {
            open: i.resolvedOpen,
            "onUpdate:open": t[3] || (t[3] = (h) => i.resolvedOpen = h),
            title: r.title,
            description: r.description,
            icon: r.dialogIcon,
            "max-width": r.maxWidth,
            "close-on-backdrop": r.closeOnBackdrop,
            "close-on-escape": r.closeOnEscape
          }, ee({
            default: v(() => [
              c("div", Br, [
                g(e.$slots, "default", {
                  close: i.close,
                  open: i.resolvedOpen
                })
              ])
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            i.showDialogFooter ? {
              name: "footer",
              fn: v(() => [
                g(e.$slots, "footer", { close: i.close }, () => [
                  c("div", Fr, [
                    _(u, {
                      type: "button",
                      variant: "solid",
                      color: "primary",
                      onClick: i.close
                    }, {
                      default: v(() => [
                        I(
                          p(i.resolvedDoneLabel),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onClick"])
                  ])
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["open", "title", "description", "icon", "max-width", "close-on-backdrop", "close-on-escape"])
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const Ur = /* @__PURE__ */ x(zr, [["render", Nr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/FieldAction.vue"]]), Hr = ["auto", "file", "folder"], $r = ["sm", "md", "lg"], jr = { icon: "folder", color: "text-sky-500" }, Wr = { icon: "file-lines", color: "text-muted-foreground" }, Yr = {
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
function Gr(e) {
  const t = te(e);
  return /[/\\]\s*$/.test(t);
}
function Ye(e) {
  const t = te(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function qr(e) {
  const t = Ye(e), r = t.lastIndexOf(".");
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
      validator: (e) => Hr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => $r.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: G,
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Gr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = te(this.name);
      return e ? this.basenameOnly ? Ye(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return te(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return jr;
      const e = qr(this.name);
      return Yr[e] || Wr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? Y(this.uiDefaults, this.iconType) : this.inferredMeta.type || Y(this.uiDefaults, void 0);
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
function Qr(e, t, r, a, n, i) {
  const u = k("ui-icon");
  return s(), l("div", {
    class: b(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c(
      "div",
      {
        class: b(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
      },
      [
        _(u, {
          name: i.resolvedIcon,
          type: i.resolvedIconType,
          size: i.iconSizeToken,
          class: b(i.iconClasses)
        }, null, 8, ["name", "type", "size", "class"])
      ],
      2
      /* CLASS */
    ),
    r.hideLabel ? f("v-if", !0) : (s(), l("span", {
      key: 0,
      class: b(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Xr))
  ], 10, Zr);
}
const Jr = /* @__PURE__ */ x(Kr, [["render", Qr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/File.vue"]]);
function es(e) {
  const t = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((u) => u.top)), a = Math.min(...t.map((u) => u.left)), n = Math.max(...t.map((u) => u.right)), i = Math.max(...t.map((u) => u.bottom));
  return {
    top: r,
    left: a,
    right: n,
    bottom: i,
    width: n - a,
    height: i - r,
    x: a,
    y: r,
    toJSON: () => ({})
  };
}
function ce(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function Se(e) {
  const t = ce(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((n) => n instanceof HTMLElement), a = es(r.map((n) => n.getBoundingClientRect()));
    if (a) return a;
  }
  return t.getBoundingClientRect();
}
function ts(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const a of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    a instanceof HTMLElement && t.push(a);
  return t;
}
const is = ["dialog", "popover", "card", "tour"], rs = [
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
], ss = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, as = 8, ns = {
  name: "Guidance",
  mixins: [O],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => is.includes(e)
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
    iconType: G,
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
      validator: (e) => rs.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: as
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => ss.includes(e)
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
      const t = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const a = window.innerWidth, n = window.innerHeight, i = r.getBoundingClientRect(), u = i.width || 320, d = i.height || 180;
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
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, o.top - h), w = Math.max(0, o.left - h), L = Math.min(n, o.bottom + h), C = Math.min(a, o.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${w}px`,
        width: `${Math.max(0, C - w)}px`,
        height: `${Math.max(0, L - m)}px`
      };
      let A = L + V, E = w;
      this.placement.startsWith("top") ? A = m - d - V : this.placement.startsWith("right") ? (A = m, E = C + V) : this.placement.startsWith("left") ? (A = m, E = w - u - V) : this.placement.includes("end") && (E = C - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && A + d > n - V && (A = m - d - V), A = Math.max(V, Math.min(A, n - d - V)), E = Math.max(V, Math.min(E, a - u - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${A}px`,
        left: `${E}px`,
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
          for (const r of ts(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, ls = { class: "ui-guidance-footer" }, os = { class: "ui-guidance-popover" }, us = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, cs = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, ds = { class: "ui-guidance-popover__text" }, hs = {
  key: 0,
  class: "ui-guidance-popover__title"
}, fs = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, ms = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, ps = ["aria-label"], gs = { class: "ui-guidance-tour__content" }, vs = { class: "ui-header-lead" }, ys = { class: "ui-header-lead__main" }, bs = {
  key: 0,
  class: "ui-header-lead__icon"
}, _s = { class: "ui-header-lead__text" }, ks = {
  key: 0,
  class: "ui-guidance-tour__title"
}, ws = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, xs = {
  key: 0,
  class: "ui-header-lead__actions"
}, Ss = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Cs = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Ts(e, t, r, a, n, i) {
  const u = k("ui-button"), d = k("ui-card"), o = k("ui-dialog"), h = k("ui-icon"), m = k("ui-popover");
  return i.shouldRender ? (s(), l(
    "div",
    {
      key: 0,
      class: b(i.rootShellClass)
    },
    [
      f(" card "),
      r.mode === "card" ? (s(), y(d, {
        key: 0,
        icon: r.icon,
        "icon-type": e.resolvedIconType,
        title: r.title,
        description: r.description,
        border: ""
      }, ee({
        default: v(() => [
          g(e.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots.actions ? {
          name: "actions",
          fn: v(() => [
            g(e.$slots, "actions")
          ]),
          key: "0"
        } : void 0,
        i.hasFooterActions ? {
          name: "footer",
          fn: v(() => [
            g(e.$slots, "footer", {}, () => [
              c("div", ls, [
                r.showFooterClose ? (s(), y(u, {
                  key: 0,
                  type: "button",
                  variant: "outline",
                  color: "secondary",
                  rounded: "",
                  onClick: i.onClose
                }, {
                  default: v(() => [
                    I(
                      p(i.resolvedCloseLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])) : f("v-if", !0),
                r.showGo ? (s(), y(u, {
                  key: 1,
                  type: "button",
                  color: "primary",
                  rounded: "",
                  onClick: i.onGo
                }, {
                  default: v(() => [
                    I(
                      p(i.resolvedGoLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])) : f("v-if", !0)
              ])
            ])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (s(), l(
        S,
        { key: 1 },
        [
          f(" dialog "),
          _(o, {
            open: i.syncOpen,
            "onUpdate:open": t[0] || (t[0] = (w) => i.syncOpen = w),
            icon: r.icon,
            "icon-type": e.resolvedIconType,
            title: r.title,
            description: r.description,
            "max-width": r.maxWidth,
            "close-on-backdrop": r.closeOnBackdrop,
            "close-on-escape": r.closeOnEscape,
            "show-close": r.showClose,
            onAfterLeave: t[1] || (t[1] = (w) => e.$emit("after-leave"))
          }, ee({
            default: v(() => [
              g(e.$slots, "default")
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            r.showGo && !e.$slots.footer ? {
              name: "footer",
              fn: v(() => [
                _(u, {
                  type: "button",
                  color: "primary",
                  rounded: "",
                  onClick: i.onGo
                }, {
                  default: v(() => [
                    I(
                      p(i.resolvedGoLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              key: "0"
            } : e.$slots.footer ? {
              name: "footer",
              fn: v(() => [
                g(e.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : r.mode === "popover" ? (s(), l(
        S,
        { key: 2 },
        [
          f(" popover "),
          _(m, {
            open: i.syncOpen,
            "onUpdate:open": t[2] || (t[2] = (w) => i.syncOpen = w),
            placement: r.placement,
            width: r.popoverWidth,
            "close-on-outside-click": r.closeOnBackdrop,
            "close-on-escape": r.closeOnEscape
          }, {
            trigger: v((w) => [
              g(e.$slots, "trigger", Yt(Gt(w)))
            ]),
            content: v(() => [
              c("div", os, [
                r.icon || r.title || r.description ? (s(), l("div", us, [
                  r.icon ? (s(), l("span", cs, [
                    _(h, {
                      name: r.icon,
                      type: e.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("v-if", !0),
                  c("div", ds, [
                    r.title ? (s(), l(
                      "p",
                      hs,
                      p(r.title),
                      1
                      /* TEXT */
                    )) : f("v-if", !0),
                    r.description ? (s(), l(
                      "p",
                      fs,
                      p(r.description),
                      1
                      /* TEXT */
                    )) : f("v-if", !0)
                  ])
                ])) : f("v-if", !0),
                g(e.$slots, "default"),
                i.hasFooterActions && !e.$slots.footer ? (s(), l("div", ms, [
                  r.showFooterClose ? (s(), y(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: v(() => [
                      I(
                        p(i.resolvedCloseLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : f("v-if", !0),
                  r.showGo ? (s(), y(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: v(() => [
                      I(
                        p(i.resolvedGoLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : f("v-if", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : r.mode === "tour" ? (s(), l(
        S,
        { key: 3 },
        [
          f(" tour "),
          (s(), y(q, { to: "body" }, [
            _(K, {
              name: "ui-overlay-dialog",
              appear: "",
              onAfterLeave: t[5] || (t[5] = (w) => e.$emit("after-leave"))
            }, {
              default: v(() => [
                i.syncOpen ? (s(), l(
                  "div",
                  {
                    key: 0,
                    class: b(["ui-guidance-tour", { "ui-guidance-tour--has-target": n.tourHighlightStyle }]),
                    role: "presentation",
                    onKeydown: t[4] || (t[4] = ue((...w) => i.onEscape && i.onEscape(...w), ["esc"]))
                  },
                  [
                    r.closeOnBackdrop ? (s(), l("div", {
                      key: 0,
                      class: "ui-guidance-tour__backdrop",
                      "aria-hidden": "true",
                      onClick: t[3] || (t[3] = (...w) => i.onBackdrop && i.onBackdrop(...w))
                    })) : f("v-if", !0),
                    n.tourHighlightStyle ? (s(), l(
                      "div",
                      {
                        key: 1,
                        class: "ui-guidance-tour__highlight",
                        style: D(n.tourHighlightStyle),
                        "aria-hidden": "true"
                      },
                      null,
                      4
                      /* STYLE */
                    )) : f("v-if", !0),
                    c("div", {
                      ref: "tourPanelRef",
                      class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
                      style: D(n.tourPanelStyle),
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": r.title || i.resolvedGoLabel
                    }, [
                      c("div", gs, [
                        c("div", vs, [
                          c("div", ys, [
                            r.icon ? (s(), l("span", bs, [
                              _(h, {
                                name: r.icon,
                                type: e.resolvedIconType,
                                size: "sm"
                              }, null, 8, ["name", "type"])
                            ])) : f("v-if", !0),
                            c("div", _s, [
                              r.title ? (s(), l(
                                "p",
                                ks,
                                p(r.title),
                                1
                                /* TEXT */
                              )) : f("v-if", !0),
                              r.description ? (s(), l(
                                "p",
                                ws,
                                p(r.description),
                                1
                                /* TEXT */
                              )) : f("v-if", !0)
                            ])
                          ]),
                          r.showClose ? (s(), l("div", xs, [
                            _(u, {
                              type: "button",
                              variant: "solid",
                              color: "secondary",
                              size: "sm",
                              cubed: "",
                              "prefix-icon": "xmark",
                              "aria-label": i.resolvedCloseLabel,
                              onClick: i.onClose
                            }, null, 8, ["aria-label", "onClick"])
                          ])) : f("v-if", !0)
                        ]),
                        e.$slots.default ? (s(), l("div", Ss, [
                          g(e.$slots, "default")
                        ])) : f("v-if", !0),
                        i.hasFooterActions && !e.$slots.footer ? (s(), l("div", Cs, [
                          r.showFooterClose ? (s(), y(u, {
                            key: 0,
                            type: "button",
                            variant: "outline",
                            color: "secondary",
                            size: "sm",
                            rounded: "",
                            onClick: i.onClose
                          }, {
                            default: v(() => [
                              I(
                                p(i.resolvedCloseLabel),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : f("v-if", !0),
                          r.showGo ? (s(), y(u, {
                            key: 1,
                            type: "button",
                            color: "primary",
                            size: "sm",
                            rounded: "",
                            onClick: i.onGo
                          }, {
                            default: v(() => [
                              I(
                                p(i.resolvedGoLabel),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : f("v-if", !0)
                        ])) : g(e.$slots, "footer", { key: 2 })
                      ])
                    ], 12, ps)
                  ],
                  34
                  /* CLASS, NEED_HYDRATION */
                )) : f("v-if", !0)
              ]),
              _: 3
              /* FORWARDED */
            })
          ]))
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : f("v-if", !0)
    ],
    2
    /* CLASS */
  )) : f("v-if", !0);
}
const Ls = /* @__PURE__ */ x(ns, [["render", Ts], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Guidance.vue"]]), Is = {
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
    iconType: G,
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
      return T(
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
      const a = Number(this.maxResults);
      return Number.isFinite(a) && a > 0 ? r.slice(0, a) : r;
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
}, Ps = ["disabled", "aria-expanded", "onClick"], As = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ms = { class: "ui-select-field-suffix" }, zs = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ds = { class: "ui-icon-picker-panel" }, Os = { class: "ui-icon-picker-panel__header" }, Es = { class: "ui-icon-picker-panel__title" }, Rs = { class: "ui-icon-picker-panel__search" }, Vs = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Bs = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Fs = ["title", "onClick"];
function Ns(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return s(), l(
    "div",
    {
      class: b(i.rootClass)
    },
    [
      _(h, {
        open: n.popoverOpen,
        "onUpdate:open": t[1] || (t[1] = (m) => n.popoverOpen = m),
        placement: "bottom-start",
        width: r.panelWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: m, toggle: w, close: L }) => [
          g(e.$slots, "trigger", {
            open: m,
            toggle: w,
            close: L
          }, () => [
            c("button", {
              type: "button",
              class: "ui-select-field",
              disabled: r.disabled,
              "aria-expanded": m ? "true" : "false",
              "aria-haspopup": !0,
              onClick: w
            }, [
              c("span", As, [
                _(u, {
                  name: i.localIcon || "grid",
                  type: e.resolvedIconType,
                  size: "xs"
                }, null, 8, ["name", "type"])
              ]),
              c(
                "span",
                {
                  class: b(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
                },
                p(i.localIcon || i.triggerLabel),
                3
                /* TEXT, CLASS */
              ),
              c("span", Ms, [
                c("span", zs, [
                  _(u, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ], 8, Ps)
          ])
        ]),
        content: v(() => [
          c("div", Ds, [
            c("div", Os, [
              c(
                "span",
                Es,
                p(i.popoverTitleLabel),
                1
                /* TEXT */
              ),
              i.localIcon ? (s(), y(d, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "prefix-icon": "eraser",
                onClick: R(i.clearIcon, ["stop"])
              }, {
                default: v(() => [
                  I(
                    p(i.clearLabelText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])) : f("v-if", !0)
            ]),
            c("div", Rs, [
              _(o, {
                modelValue: n.searchQuery,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => n.searchQuery = m),
                block: "",
                "prefix-icon": "magnifying-glass",
                placeholder: i.searchPlaceholderLabel,
                autocomplete: "off"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            i.filteredIcons.length ? (s(), l("div", Bs, [
              (s(!0), l(
                S,
                null,
                z(i.filteredIcons, (m) => (s(), l("button", {
                  key: m,
                  type: "button",
                  class: b(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === m }]),
                  title: m,
                  onClick: (w) => i.selectIcon(m)
                }, [
                  _(u, {
                    name: m,
                    type: e.resolvedIconType,
                    size: "sm"
                  }, null, 8, ["name", "type"])
                ], 10, Fs))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (s(), l(
              "div",
              Vs,
              p(i.resolvedNoResultsLabel),
              1
              /* TEXT */
            ))
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["open", "width", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Us = /* @__PURE__ */ x(Is, [["render", Ns], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/IconPicker.vue"]]), Hs = 56, $s = 1.15, js = 0.28, Ws = {
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
      return (Array.isArray(this.steps) ? this.steps : []).map((t, r) => ({
        key: (t == null ? void 0 : t.key) ?? `intro-${r}`,
        icon: (t == null ? void 0 : t.icon) ?? "",
        iconType: (t == null ? void 0 : t.iconType) ?? Y(this.uiDefaults, void 0),
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
      return T("ui-intro", this.overlay && "ui-intro--overlay", this.$attrs.class);
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
      const a = e - this.startX, n = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(a) < 8 && Math.abs(n) < 8) return;
        if (this.lockedAxis = Math.abs(a) > Math.abs(n) * $s ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = r == null ? void 0 : r.preventDefault) == null || o.call(r);
      const i = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let d = a;
      (i && d > 0 || u && d < 0) && (d *= js), this.dragOffset = d;
    },
    commitDrag(e, t) {
      var h;
      const r = e - this.startX, a = Math.max(1, t - this.startAt), n = r / a, i = ((h = this.$refs.viewport) == null ? void 0 : h.clientWidth) || 0, u = Math.max(Hs, i * 0.18), d = this.lockedAxis === "x" && (Math.abs(r) >= u || Math.abs(n) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !d) return;
      if (this.isRtl() ? r > 0 : r < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, Ys = ["aria-modal", "aria-label", "aria-roledescription"], Gs = { class: "ui-intro__header" }, qs = ["aria-hidden"], Ks = {
  key: 0,
  class: "ui-intro__icon"
}, Zs = {
  key: 1,
  class: "ui-intro__title"
}, Xs = {
  key: 2,
  class: "ui-intro__description"
}, Qs = { class: "ui-intro__footer" }, Js = ["aria-label"], ea = ["aria-selected", "aria-label", "onClick"];
function ta(e, t, r, a, n, i) {
  const u = k("ui-button"), d = k("ui-icon");
  return s(), y(q, {
    to: "body",
    disabled: !r.overlay
  }, [
    _(K, { name: "ui-intro-shell" }, {
      default: v(() => [
        i.isVisible ? (s(), l("div", P({
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
          c("div", Gs, [
            g(e.$slots, "header", {}, () => [
              r.showSkip ? (s(), y(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: i.onSkip
              }, {
                default: v(() => [
                  I(
                    p(i.resolvedSkipLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])) : f("v-if", !0)
            ])
          ]),
          c(
            "div",
            {
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
            },
            [
              c(
                "div",
                {
                  class: b(["ui-intro__track", { "ui-intro__track--dragging": n.dragging }]),
                  style: D(i.trackStyle)
                },
                [
                  (s(!0), l(
                    S,
                    null,
                    z(i.normalizedSteps, (o, h) => (s(), l("div", {
                      key: o.key,
                      class: "ui-intro__slide",
                      "aria-hidden": h === i.activeIndex ? void 0 : "true"
                    }, [
                      g(e.$slots, "default", {
                        step: o,
                        index: h,
                        active: h === i.activeIndex
                      }, () => [
                        o.icon ? (s(), l("span", Ks, [
                          _(d, {
                            name: o.icon,
                            type: o.iconType,
                            size: "xl"
                          }, null, 8, ["name", "type"])
                        ])) : f("v-if", !0),
                        o.title ? (s(), l(
                          "h2",
                          Zs,
                          p(o.title),
                          1
                          /* TEXT */
                        )) : f("v-if", !0),
                        o.description ? (s(), l(
                          "p",
                          Xs,
                          p(o.description),
                          1
                          /* TEXT */
                        )) : f("v-if", !0)
                      ])
                    ], 8, qs))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          c("div", Qs, [
            g(e.$slots, "footer", {
              index: i.activeIndex,
              isLast: i.isLastStep,
              goNext: i.goNext,
              goPrev: i.goPrev,
              goTo: i.goTo
            }, () => [
              i.normalizedSteps.length > 1 ? (s(), l("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": i.resolvedAriaLabel
              }, [
                (s(!0), l(
                  S,
                  null,
                  z(i.normalizedSteps, (o, h) => (s(), l("button", {
                    key: o.key,
                    type: "button",
                    class: b(["ui-intro__dot", { "ui-intro__dot--active": h === i.activeIndex }]),
                    role: "tab",
                    "aria-selected": h === i.activeIndex,
                    "aria-label": o.ariaLabel || o.title || String(h + 1),
                    onClick: (m) => i.goTo(h)
                  }, null, 10, ea))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, Js)) : f("v-if", !0),
              _(u, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: i.goNext
              }, {
                default: v(() => [
                  I(
                    p(i.primaryLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ])
          ])
        ], 16, Ys)) : f("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 8, ["disabled"]);
}
const ia = /* @__PURE__ */ x(Ws, [["render", ta], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Intro.vue"]]), ra = ["sm", "md", "lg", "xl", "2xl"], sa = ["default", "foreground", "muted", "success", "danger", "primary"], aa = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ra.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => sa.includes(e)
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
function na(e, t, r, a, n, i) {
  return s(), l(
    "span",
    {
      class: b(["ui-price-text", i.rootClass])
    },
    [
      g(e.$slots, "default", {}, () => [
        I(
          p(r.value),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const fe = /* @__PURE__ */ x(aa, [["render", na], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceText.vue"]]), la = ["sm", "md", "lg"], oa = ["sm", "md", "lg", "xl", "2xl"], ua = ["default", "foreground", "muted", "success", "danger", "primary"], ca = {
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
      validator: (e) => la.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => oa.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => ua.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, da = { class: "ui-price-display__label" };
function ha(e, t, r, a, n, i) {
  const u = k("ui-price-text");
  return s(), l(
    "div",
    {
      class: b(["ui-price-display", i.rootClass])
    },
    [
      c(
        "span",
        da,
        p(r.label),
        1
        /* TEXT */
      ),
      _(u, {
        value: r.value,
        size: r.valueSize,
        tone: r.tone
      }, {
        default: v(() => [
          g(e.$slots, "value", {}, () => [
            I(
              p(r.value),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["value", "size", "tone"])
    ],
    2
    /* CLASS */
  );
}
const fa = /* @__PURE__ */ x(ca, [["render", ha], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplay.vue"]]), ma = ["sm", "md", "lg"], pa = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ma.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function ga(e, t, r, a, n, i) {
  return s(), l(
    "div",
    {
      class: b(["ui-price-display-group", i.rootClass])
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const va = /* @__PURE__ */ x(pa, [["render", ga], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplayGroup.vue"]]), ya = ["sm", "md", "lg", "xl", "2xl"], ba = ["default", "foreground", "muted", "success", "danger", "primary"], _a = {
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
      validator: (e) => ya.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => ba.includes(e)
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
}, ka = { class: "ui-price-display-row__label" };
function wa(e, t, r, a, n, i) {
  const u = k("ui-price-text");
  return s(), l(
    "div",
    {
      class: b(["ui-price-display-row", i.rootClass])
    },
    [
      c(
        "span",
        ka,
        p(r.label),
        1
        /* TEXT */
      ),
      _(u, {
        value: r.value,
        size: r.valueSize,
        tone: r.tone
      }, {
        default: v(() => [
          g(e.$slots, "value", {}, () => [
            I(
              p(r.value),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["value", "size", "tone"])
    ],
    2
    /* CLASS */
  );
}
const xa = /* @__PURE__ */ x(_a, [["render", wa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplayRow.vue"]]), Sa = ["tr-TR", "en-US"], ie = he({
  currency: "TRY",
  format: "tr-TR"
});
function Ca(e, t = ie.format) {
  return Sa.includes(e) ? e : t;
}
function Ta(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (ie.currency = ae(e.currency));
  const t = e.format ?? e.locale;
  t != null && (ie.format = Ca(t));
}
function La() {
  return qt(ie);
}
const Ia = {
  name: "PriceInput",
  components: { CurrencyInput: We },
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
    return { priceInputConfig: La() };
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
function Pa(e, t, r, a, n, i) {
  const u = k("CurrencyInput");
  return s(), y(u, P({
    "model-value": r.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: t[1] || (t[1] = (d) => e.$emit("input", d)),
    onChange: t[2] || (t[2] = (d) => e.$emit("change", d)),
    onFocus: t[3] || (t[3] = (d) => e.$emit("focus", d)),
    onBlur: t[4] || (t[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Aa = /* @__PURE__ */ x(Ia, [["render", Pa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceInput.vue"]]);
function Ma(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const a = Math.min(4, Math.round(r)), n = ["weak", "fair", "good", "strong"], i = a <= 0 ? "weak" : n[Math.min(a - 1, 3)];
  return {
    score: a,
    percent: a / 4 * 100,
    label: i
  };
}
const za = N("ui-password"), Da = ["sm", "md", "lg"], Oa = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Da.includes(e)
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
    const e = za(), t = e.slice(12);
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
      return Ma(this.modelValue);
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
      for (const [r, a] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = a);
      return t;
    }
  }
}, Ea = ["aria-label", "aria-pressed", "disabled"], Ra = ["id", "aria-live"];
function Va(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("ui-input"), o = k("ui-progress");
  return s(), l(
    "div",
    {
      class: b(["ui-password", [e.$attrs.class]])
    },
    [
      _(d, P({
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
        append: v(() => [
          c("button", {
            type: "button",
            class: "ui-password-toggle",
            "aria-label": i.toggleAriaLabel,
            "aria-pressed": n.visible ? "true" : "false",
            disabled: r.disabled,
            onClick: t[0] || (t[0] = (h) => n.visible = !n.visible)
          }, [
            _(u, {
              name: n.visible ? "eye-slash" : "eye",
              size: "xs"
            }, null, 8, ["name"])
          ], 8, Ea)
        ]),
        _: 1
        /* STABLE */
      }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
      i.showStrengthMeter ? (s(), l("div", {
        key: 0,
        id: n.fallbackStrengthId,
        class: "ui-password-strength",
        role: "status",
        "aria-live": i.innerValue ? "polite" : "off"
      }, [
        _(o, {
          type: "bar",
          size: "md",
          value: i.strength.percent,
          variant: i.strengthVariant,
          "aria-valuetext": i.strengthText
        }, null, 8, ["value", "variant", "aria-valuetext"]),
        i.strength.label !== "empty" ? (s(), l(
          "span",
          {
            key: 0,
            class: b(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
          },
          p(i.strengthText),
          3
          /* TEXT, CLASS */
        )) : f("v-if", !0)
      ], 8, Ra)) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ba = /* @__PURE__ */ x(Oa, [["render", Va], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Password.vue"]]), Fa = ["bar", "circle"], Ce = ["sm", "md", "lg", "xl", "2xl"], Te = ["thin", "md"], Na = ["default", "weak", "fair", "good", "strong"], Q = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, Ua = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, Ha = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Fa.includes(e)
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
      validator: (e) => Na.includes(e)
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
      return T(
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
      const e = Q[this.circleSizeKey] ?? Q.sm, t = Ua[this.circleSizeKey] ?? 2, r = (e - t) / 2, a = e / 2, n = 2 * Math.PI * r, i = n * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: a, circumference: n, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, $a = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], ja = ["width", "height", "viewBox"], Wa = ["cx", "cy", "r", "stroke-width"], Ya = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ga = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function qa(e, t, r, a, n, i) {
  return s(), l("div", {
    class: b(i.rootClass),
    style: D(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (s(), l("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Wa),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Ya)
    ], 8, ja)) : (s(), l("div", Ga, [
      c(
        "div",
        {
          class: "ui-progress-bar-indicator",
          style: D({ width: `${i.clampedPercent}%` })
        },
        null,
        4
        /* STYLE */
      )
    ]))
  ], 14, $a);
}
const Ka = /* @__PURE__ */ x(Ha, [["render", qa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Progress.vue"]]), Za = N("ui-sheet"), Xa = ["left", "right"], Qa = ["sm", "md", "lg", "xl"], Ja = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, en = {
  name: "Sheet",
  mixins: [Xe, O],
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
      validator: (e) => Xa.includes(e)
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
      validator: (e) => Qa.includes(e)
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
      validator: (e) => e == null || Ja.includes(e)
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
    const e = Za();
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
      return Y(this.uiDefaults, this.iconType);
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
      return T(
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : M(this, "ui.dialog.close", "Close");
    },
    rootLayerStyle() {
      if (this.rootZIndex != null)
        return { zIndex: String(this.rootZIndex) };
    },
    rootLayerClasses() {
      return T(
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
}, sn = ["id"], an = {
  key: 1,
  class: "ui-sheet-header__icon"
}, nn = {
  key: 2,
  class: "ui-sheet-header__actions"
}, ln = ["id"], on = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function un(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("Divider");
  return s(), l(
    S,
    null,
    [
      f(" Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. "),
      n.portalReady ? (s(), y(q, {
        key: 0,
        to: e.portalTarget
      }, [
        _(K, {
          name: i.transitionName,
          appear: "",
          onAfterEnter: i.onOverlayAfterEnter,
          onAfterLeave: i.onOverlayAfterLeave
        }, {
          default: v(() => [
            r.open ? (s(), l(
              "div",
              {
                key: 0,
                ref: "layerRef",
                class: b(i.rootLayerClasses),
                style: D(i.rootLayerStyle),
                tabindex: "-1",
                role: "presentation",
                onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
              },
              [
                r.overlay ? (s(), l("div", {
                  key: 0,
                  class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
                  "aria-hidden": "true",
                  onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
                })) : f("v-if", !0),
                c("div", P({
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
                  i.hasHeaderBlock ? (s(), l("div", rn, [
                    g(e.$slots, "header", {}, () => [
                      i.hasDefaultHeader ? (s(), l(
                        "div",
                        {
                          key: 0,
                          class: b(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                        },
                        [
                          r.title ? (s(), l("h3", {
                            key: 0,
                            id: n.titleId,
                            class: "ui-sheet-header__title ui-heading-3"
                          }, p(r.title), 9, sn)) : f("v-if", !0),
                          r.icon ? (s(), l("span", an, [
                            _(u, {
                              name: r.icon,
                              type: i.resolvedIconType,
                              size: "sm"
                            }, null, 8, ["name", "type"])
                          ])) : f("v-if", !0),
                          e.$slots.append || e.$slots.actions ? (s(), l("div", nn, [
                            g(e.$slots, "append"),
                            g(e.$slots, "actions")
                          ])) : f("v-if", !0),
                          r.showClose ? (s(), y(d, {
                            key: 3,
                            type: "button",
                            variant: "solid",
                            color: "secondary",
                            size: "sm",
                            cubed: "",
                            "prefix-icon": "xmark",
                            "aria-label": i.resolvedCloseLabel,
                            onClick: i.close
                          }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                          r.description ? (s(), l("p", {
                            key: 4,
                            id: n.descriptionId,
                            class: "ui-sheet-header__description ui-text-default"
                          }, p(r.description), 9, ln)) : f("v-if", !0)
                        ],
                        2
                        /* CLASS */
                      )) : f("v-if", !0)
                    ])
                  ])) : f("v-if", !0),
                  e.$slots.toolbar ? (s(), l("div", on, [
                    g(e.$slots, "toolbar")
                  ])) : f("v-if", !0),
                  i.showHeaderDivider ? (s(), y(o, {
                    key: 2,
                    spacing: "none",
                    class: "!my-0 shrink-0"
                  })) : f("v-if", !0),
                  e.$slots.default ? (s(), l(
                    "div",
                    {
                      key: 3,
                      class: b(["ui-card-body ui-text-default", {
                        "ui-card-body--flush": r.bodyPadding === "none",
                        "ui-card-body--flex": r.bodyLayout === "flex"
                      }])
                    },
                    [
                      g(e.$slots, "default")
                    ],
                    2
                    /* CLASS */
                  )) : f("v-if", !0),
                  e.$slots.footer ? (s(), l(
                    "div",
                    {
                      key: 4,
                      class: b(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
                    },
                    [
                      g(e.$slots, "footer")
                    ],
                    2
                    /* CLASS */
                  )) : f("v-if", !0)
                ], 16, tn)
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            )) : f("v-if", !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to"])) : f("v-if", !0)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const cn = /* @__PURE__ */ x(en, [["render", un], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Sheet.vue"]]), dn = ["sm", "md", "lg", "full"], Ie = {
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
      validator: (e) => dn.includes(e)
    }
  },
  computed: {
    rootClass() {
      return T(
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
function gn(e, t, r, a, n, i) {
  return s(), l(
    "nav",
    P({ class: i.rootClass }, i.passthroughAttrs),
    [
      e.$slots.header ? (s(), l("div", fn, [
        g(e.$slots, "header")
      ])) : f("v-if", !0),
      c("div", mn, [
        g(e.$slots, "default")
      ]),
      e.$slots.footer ? (s(), l("div", pn, [
        g(e.$slots, "footer")
      ])) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const vn = /* @__PURE__ */ x(hn, [["render", gn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Menu.vue"]]), yn = {
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
      return T("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, bn = {
  key: 0,
  class: "ui-menu-group-label"
}, _n = { class: "ui-menu-group-items" };
function kn(e, t, r, a, n, i) {
  return s(), l(
    "div",
    P({ class: i.groupClass }, i.passthroughAttrs),
    [
      r.label ? (s(), l(
        "p",
        bn,
        p(r.label),
        1
        /* TEXT */
      )) : f("v-if", !0),
      c("div", _n, [
        g(e.$slots, "default")
      ])
    ],
    16
    /* FULL_PROPS */
  );
}
const wn = /* @__PURE__ */ x(yn, [["render", kn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuGroup.vue"]]), xn = {
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
      return T(
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
function Sn(e, t, r, a, n, i) {
  const u = k("ui-button");
  return s(), y(u, P({
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
    default: v(() => [
      g(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Cn = /* @__PURE__ */ x(xn, [["render", Sn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuItem.vue"]]), Tn = {
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
      return T("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ln = ["aria-label"];
function In(e, t, r, a, n, i) {
  return s(), l("div", P({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Ln);
}
const Pn = /* @__PURE__ */ x(Tn, [["render", In], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuNav.vue"]]), An = ["sm", "md", "lg"], Mn = ["button", "submit", "reset"], Pe = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ae = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, zn = {
  name: "SidebarItem",
  mixins: [O],
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
      validator: (e) => Mn.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || An.includes(e)
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
      return this.isBlock ? T("ui-sidebar-item-text min-w-0 flex-1 truncate", e) : T("ui-sidebar-item-text whitespace-nowrap", e);
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    itemClasses() {
      const e = this.cubed ? Ae[this.resolvedSize] || Ae.md : Pe[this.resolvedSize] || Pe.md;
      return T(
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
      if (e.type === S) {
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
}, Dn = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], On = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, En = {
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
function Un(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("RouterLink");
  return i.hasRouterTo ? (s(), y(d, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: v(({ href: o, navigate: h }) => [
      c("a", P({
        href: o,
        class: i.itemClasses,
        "aria-current": r.active ? "page" : void 0,
        "aria-disabled": r.disabled ? "true" : void 0,
        tabindex: r.disabled ? -1 : void 0
      }, i.forwardedAttrs, {
        onClick: (m) => i.onRouterLinkClick(m, h)
      }), [
        i.usesCubedCenterLayout ? (s(), l("span", On, [
          r.prefixIcon ? (s(), y(u, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), y(u, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (s(), l(
          S,
          { key: 1 },
          [
            r.prefixIcon ? (s(), l("span", En, [
              _(u, {
                size: i.inlineIconSize,
                name: r.prefixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0),
            c(
              "span",
              {
                class: b(i.textContentClass)
              },
              [
                g(e.$slots, "default")
              ],
              2
              /* CLASS */
            ),
            r.suffixIcon ? (s(), l("span", Rn, [
              _(u, {
                size: i.inlineIconSize,
                name: r.suffixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ], 16, Dn)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to"])) : (s(), l("button", P({
    key: 1,
    type: r.nativeType,
    class: i.itemClasses,
    disabled: r.disabled || void 0,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.onClick && i.onClick(...o))
  }), [
    i.usesCubedCenterLayout ? (s(), l("span", Bn, [
      r.prefixIcon ? (s(), y(u, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), y(u, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (s(), l(
      S,
      { key: 1 },
      [
        r.prefixIcon ? (s(), l("span", Fn, [
          _(u, {
            size: i.inlineIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0),
        c(
          "span",
          {
            class: b(i.textContentClass)
          },
          [
            g(e.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        r.suffixIcon ? (s(), l("span", Nn, [
          _(u, {
            size: i.inlineIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    ))
  ], 16, Vn));
}
const Hn = /* @__PURE__ */ x(zn, [["render", Un], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/SidebarItem.vue"]]), $n = {
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
      !this.autofocus || !this.active || Ee() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Be(e);
        });
      });
    }
  }
}, jn = {
  ref: "root",
  class: "ui-step"
};
function Wn(e, t, r, a, n, i) {
  return Ne((s(), l(
    "div",
    jn,
    [
      g(e.$slots, "default")
    ],
    512
    /* NEED_PATCH */
  )), [
    [Ue, r.active]
  ]);
}
const Yn = /* @__PURE__ */ x($n, [["render", Wn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Step.vue"]]), Gn = ["horizontal", "vertical"], qn = ["default", "pills"], Kn = {
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
      validator: (e) => qn.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Gn.includes(e)
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
        iconType: (t == null ? void 0 : t.iconType) ?? Y(this.uiDefaults, void 0)
      }));
    },
    rootClass() {
      return T(
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
}, rl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, sl = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, al = { class: "flex flex-col items-center" }, nl = {
  key: 1,
  class: "tabular-nums"
}, ll = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, ol = { class: "ui-stepper-title" }, ul = {
  key: 0,
  class: "ui-stepper-description"
};
function cl(e, t, r, a, n, i) {
  const u = k("ui-icon");
  return s(), l("div", P({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (s(), l(
      S,
      { key: 0 },
      [
        c("div", Xn, [
          (s(!0), l(
            S,
            null,
            z(i.normalizedSteps, (d, o) => (s(), y($(r.interactive ? "button" : "span"), P({
              key: o,
              class: ["ui-stepper-pill", i.pillClass(o)],
              role: "listitem",
              "aria-current": o === r.modelValue ? "step" : void 0,
              "aria-label": d.title
            }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
              onClick: (h) => r.interactive ? i.go(o) : void 0
            }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        r.showLabel ? (s(), l(
          "p",
          Qn,
          p(i.pillsLabel),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : r.direction === "horizontal" ? (s(), l(
      S,
      { key: 1 },
      [
        f(" horizontal (default) "),
        (s(!0), l(
          S,
          null,
          z(i.normalizedSteps, (d, o) => (s(), l("div", {
            key: o,
            class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
            role: "listitem"
          }, [
            c("div", Jn, [
              o > 0 ? (s(), l(
                "span",
                {
                  key: 0,
                  class: b(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : (s(), l("span", el)),
              (s(), y($(r.interactive ? "button" : "div"), P({
                class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
                "aria-current": o === r.modelValue ? "step" : void 0,
                "aria-label": d.title
              }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
                onClick: (h) => r.interactive ? i.go(o) : void 0
              }), {
                default: v(() => [
                  d.icon ? (s(), y(u, {
                    key: 0,
                    name: d.icon,
                    type: d.iconType || "light",
                    size: "sm"
                  }, null, 8, ["name", "type"])) : (s(), l(
                    "span",
                    tl,
                    p(o + 1),
                    1
                    /* TEXT */
                  ))
                ]),
                _: 2
                /* DYNAMIC */
              }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
              o < i.normalizedSteps.length - 1 ? (s(), l(
                "span",
                {
                  key: 2,
                  class: b(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : (s(), l("span", il))
            ]),
            c(
              "p",
              rl,
              p(d.title),
              1
              /* TEXT */
            ),
            d.description ? (s(), l(
              "p",
              sl,
              p(d.description),
              1
              /* TEXT */
            )) : f("v-if", !0)
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (s(), l(
      S,
      { key: 2 },
      [
        f(" vertical "),
        (s(!0), l(
          S,
          null,
          z(i.normalizedSteps, (d, o) => (s(), l("div", {
            key: o,
            class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
            role: "listitem"
          }, [
            c("div", al, [
              (s(), y($(r.interactive ? "button" : "div"), P({
                class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
                "aria-current": o === r.modelValue ? "step" : void 0,
                "aria-label": d.title
              }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
                onClick: (h) => r.interactive ? i.go(o) : void 0
              }), {
                default: v(() => [
                  d.icon ? (s(), y(u, {
                    key: 0,
                    name: d.icon,
                    type: d.iconType || "light",
                    size: "sm"
                  }, null, 8, ["name", "type"])) : (s(), l(
                    "span",
                    nl,
                    p(o + 1),
                    1
                    /* TEXT */
                  ))
                ]),
                _: 2
                /* DYNAMIC */
              }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
              o < i.normalizedSteps.length - 1 ? (s(), l(
                "span",
                {
                  key: 0,
                  class: b(["ui-stepper-vrail", i.verticalRailClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : f("v-if", !0)
            ]),
            c("div", ll, [
              c(
                "p",
                ol,
                p(d.title),
                1
                /* TEXT */
              ),
              d.description ? (s(), l(
                "p",
                ul,
                p(d.description),
                1
                /* TEXT */
              )) : f("v-if", !0)
            ])
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    ))
  ], 16, Zn);
}
const dl = /* @__PURE__ */ x(Kn, [["render", cl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Stepper.vue"]]), hl = N("ui-slider"), fl = {
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
      return T("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
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
      for (const [r, a] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = a);
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
}, vl = { class: "ui-slider-rail" }, yl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], bl = {
  key: 1,
  class: "ui-slider-scale"
}, _l = { key: 0 }, kl = { key: 1 };
function wl(e, t, r, a, n, i) {
  const u = k("ui-progress");
  return s(), l(
    "div",
    {
      class: b(i.rootClass)
    },
    [
      r.label || i.hasValue ? (s(), l("div", ml, [
        r.label ? (s(), l(
          "span",
          pl,
          p(r.label),
          1
          /* TEXT */
        )) : f("v-if", !0),
        i.hasValue ? (s(), l(
          "span",
          gl,
          p(r.valueText),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0),
      c("div", vl, [
        _(u, {
          type: "bar",
          size: "md",
          class: "ui-slider-progress",
          value: i.fillPercent,
          presentational: ""
        }, null, 8, ["value"]),
        c("input", P(i.passthroughAttrs, {
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
          onInput: t[0] || (t[0] = (...d) => i.onNativeInput && i.onNativeInput(...d)),
          onChange: t[1] || (t[1] = (...d) => i.onChange && i.onChange(...d))
        }), null, 16, yl)
      ]),
      r.minLabel || r.maxLabel ? (s(), l("div", bl, [
        r.minLabel ? (s(), l(
          "span",
          _l,
          p(r.minLabel),
          1
          /* TEXT */
        )) : f("v-if", !0),
        r.maxLabel ? (s(), l(
          "span",
          kl,
          p(r.maxLabel),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const xl = /* @__PURE__ */ x(fl, [["render", wl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Slider.vue"]]), Sl = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return T("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Cl = { class: "ui-table-scroll" };
function Tl(e, t, r, a, n, i) {
  return s(), l("div", Cl, [
    c(
      "table",
      P({ class: i.rootClass }, i.passthroughAttrs),
      [
        g(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ]);
}
const Ll = /* @__PURE__ */ x(Sl, [["render", Tl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Table.vue"]]), Il = {
  name: "TableBody"
}, Pl = { class: "ui-table-body" };
function Al(e, t, r, a, n, i) {
  return s(), l("tbody", Pl, [
    g(e.$slots, "default")
  ]);
}
const Ml = /* @__PURE__ */ x(Il, [["render", Al], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableBody.vue"]]), zl = ["left", "center", "right"], Dl = ["title", "secondary", "body"], Ol = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => zl.includes(e)
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
      return T(
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
}, El = ["colspan"];
function Rl(e, t, r, a, n, i) {
  return s(), l("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: b(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, El);
}
const Vl = /* @__PURE__ */ x(Ol, [["render", Rl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableCell.vue"]]), Bl = ["left", "center", "right"], Fl = ["sm", "md", "lg"], Nl = {
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
      return T(
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
function Ul(e, t, r, a, n, i) {
  return s(), l(
    "th",
    {
      class: b(i.rootClass),
      style: D(i.widthStyle)
    },
    [
      g(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Hl = /* @__PURE__ */ x(Nl, [["render", Ul], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableHead.vue"]]), $l = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return T(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function jl(e, t, r, a, n, i) {
  return s(), l(
    "thead",
    {
      class: b(i.rootClass)
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Wl = /* @__PURE__ */ x($l, [["render", jl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableHeader.vue"]]), Yl = {
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
}, Gl = { class: "ui-table-pagination" }, ql = { class: "ui-table-pagination-meta" }, Kl = { class: "ui-table-pagination-nav" }, Zl = { class: "ui-table-pagination-page" };
function Xl(e, t, r, a, n, i) {
  const u = k("ui-button");
  return s(), l("div", Gl, [
    c("div", ql, [
      g(e.$slots, "meta", {}, () => [
        I(
          p(r.metaText),
          1
          /* TEXT */
        )
      ])
    ]),
    c("div", Kl, [
      _(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c(
        "div",
        Zl,
        p(r.pageLabel),
        1
        /* TEXT */
      ),
      _(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Ql = /* @__PURE__ */ x(Yl, [["render", Xl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TablePagination.vue"]]), Jl = ["none", "soft", "strong"], eo = {
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
      return T(
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
function to(e, t, r, a, n, i) {
  return s(), l(
    "tr",
    {
      class: b(i.rootClass)
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const io = /* @__PURE__ */ x(eo, [["render", to], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableRow.vue"]]), ro = {
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
      return T("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u" && console.warn("[TabPanel] Yalnızca <ui-tabs> içinde kullanılmalı.");
  }
}, so = ["id", "aria-labelledby"];
function ao(e, t, r, a, n, i) {
  return Ne((s(), l("div", P({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, so)), [
    [Ue, i.isActive]
  ]);
}
const no = /* @__PURE__ */ x(ro, [["render", ao], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TabPanel.vue"]]), Me = Symbol("uiThemeMode"), lo = {
  name: "ThemeProvider",
  inject: {
    parentDefaults: { from: be, default: () => ye },
    parentMode: { from: Me, default: null }
  },
  provide() {
    return {
      [be]: this.providedDefaults,
      [Me]: Xt(() => this.resolvedMode),
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
      providedDefaults: he({ ...ye })
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
function uo(e, t, r, a, n, i) {
  return s(), y($(r.tag), {
    class: b(["ui-theme-provider", { dark: i.resolvedMode === "dark", "ui-theme-provider--background": r.background }]),
    "data-ui-theme": i.themeId,
    "data-ui-mode": i.resolvedMode,
    style: D(i.cssVars)
  }, {
    default: v(() => [
      c(
        "div",
        oo,
        null,
        512
        /* NEED_PATCH */
      ),
      g(e.$slots, "default", {
        mode: i.resolvedMode,
        theme: i.pkg
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "data-ui-theme", "data-ui-mode", "style"]);
}
const co = /* @__PURE__ */ x(lo, [["render", uo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ThemeProvider.vue"]]);
function H(e) {
  return String(e).padStart(2, "0");
}
function Ge(e, t = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const a = Number(r[1]), n = Number(r[2]);
  if (!Number.isFinite(a) || !Number.isFinite(n))
    return String(e || "");
  if (t === "HH:mm")
    return `${H(a)}:${H(n)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const i = a >= 12 ? "PM" : "AM";
    return `${a % 12 || 12}:${H(n)} ${i}`;
  }
  return `${H(a)}:${H(n)}`;
}
function ho(e, t, r = "HH:mm") {
  return Ge(`${e}:${t}`, r);
}
const fo = N("ui-timepicker"), le = 40;
function oe(e) {
  return String(e).padStart(2, "0");
}
const mo = {
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : M(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return M(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return M(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Oe(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? ho(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? Ge(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
    pad2: oe,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const a = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      a && (t = Math.min(23, Math.max(0, parseInt(a[1], 10))), r = Math.min(59, Math.max(0, parseInt(a[2], 10))));
      const n = this.minuteValues;
      let i = n[0] ?? 0, u = 999;
      for (const d of n) {
        const o = Math.abs(d - r);
        o < u && (u = o, i = d);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return le;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return le;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : le;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const a = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(a) ? a : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), a = this.wheelSpacerTop(e), n = e.scrollTop + e.clientHeight / 2, i = Math.round((n - a - r / 2) / r);
      return Math.min(t, Math.max(0, i));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelItemHeight(e), a = this.wheelSpacerTop(e);
      return Math.max(0, a + t * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: r = !1 } = {}) {
      if (!e) return;
      const a = this.scrollTopForIndex(e, t);
      r && typeof e.scrollTo == "function" ? e.scrollTo({ top: a, behavior: "smooth" }) : e.scrollTop = a;
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
      const e = `${oe(this.draftHour)}:${oe(this.draftMinute)}`;
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
      const a = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - a) > 0.5 && (e.scrollTop = a), this.emitDraft();
    }
  }
}, po = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, go = { class: "ui-timepicker-wheels" }, vo = { class: "ui-timepicker-wheels-row" }, yo = ["aria-valuenow", "aria-label"], bo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, _o = { class: "ui-timepicker-wheel-spacer" }, ko = ["onClick"], wo = ["aria-valuenow", "aria-label"], xo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, So = { class: "ui-timepicker-wheel-spacer" }, Co = ["onClick"], To = { class: "min-w-0 flex-1 truncate text-foreground" }, Lo = { class: "ui-timepicker-panel w-full p-2" }, Io = { class: "ui-timepicker-wheels" }, Po = { class: "ui-timepicker-wheels-row" }, Ao = ["aria-valuenow", "aria-label"], Mo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, zo = { class: "ui-timepicker-wheel-spacer" }, Do = ["onClick"], Oo = ["aria-valuenow", "aria-label"], Eo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ro = { class: "ui-timepicker-wheel-spacer" }, Vo = ["onClick"];
function Bo(e, t, r, a, n, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return s(), l(
    "div",
    {
      class: b([
        "ui-timepicker",
        r.embedded ? "ui-timepicker--embedded" : "",
        r.disabled ? "pointer-events-none opacity-50" : "",
        e.$attrs.class
      ])
    },
    [
      r.embedded ? (s(), l("div", po, [
        c("div", go, [
          t[2] || (t[2] = c(
            "div",
            {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            },
            null,
            -1
            /* CACHED */
          )),
          c("div", vo, [
            c("div", {
              class: "min-h-0 min-w-0 flex-1",
              role: "spinbutton",
              "aria-valuenow": n.draftHour,
              "aria-valuemin": "0",
              "aria-valuemax": "23",
              "aria-label": i.hourAriaLabel
            }, [
              c(
                "div",
                bo,
                [
                  c("div", _o, [
                    (s(!0), l(
                      S,
                      null,
                      z(i.hourOptions, (o) => (s(), l("button", {
                        key: "h-" + o,
                        type: "button",
                        tabindex: "-1",
                        class: b([
                          "ui-timepicker-wheel-item",
                          o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                        ]),
                        onClick: (h) => i.selectHour(o)
                      }, p(i.pad2(o)), 11, ko))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                512
                /* NEED_PATCH */
              )
            ], 8, yo),
            t[1] || (t[1] = c(
              "span",
              {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              },
              ":",
              -1
              /* CACHED */
            )),
            c("div", {
              class: "min-h-0 min-w-0 flex-1",
              role: "spinbutton",
              "aria-valuenow": n.draftMinute,
              "aria-valuemin": "0",
              "aria-valuemax": "59",
              "aria-label": i.minuteAriaLabel
            }, [
              c(
                "div",
                xo,
                [
                  c("div", So, [
                    (s(!0), l(
                      S,
                      null,
                      z(i.minuteValues, (o, h) => (s(), l("button", {
                        key: "m-" + o,
                        type: "button",
                        tabindex: "-1",
                        class: b([
                          "ui-timepicker-wheel-item",
                          o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                        ]),
                        onClick: (m) => i.selectMinute(h)
                      }, p(i.pad2(o)), 11, Co))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                512
                /* NEED_PATCH */
              )
            ], 8, wo)
          ]),
          t[3] || (t[3] = c(
            "div",
            {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            },
            null,
            -1
            /* CACHED */
          )),
          t[4] || (t[4] = c(
            "div",
            {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
              "aria-hidden": "true"
            },
            null,
            -1
            /* CACHED */
          ))
        ])
      ])) : (s(), y(d, {
        key: 1,
        open: n.menuOpen,
        "onUpdate:open": t[0] || (t[0] = (o) => n.menuOpen = o),
        placement: "bottom-start",
        "match-trigger-width": !1,
        width: r.popoverWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: o, toggle: h, close: m }) => [
          g(e.$slots, "trigger", {
            open: o,
            toggle: h,
            close: m
          }, () => [
            _(u, {
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
              default: v(() => [
                c(
                  "span",
                  To,
                  p(i.display),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["id", "disabled", "aria-expanded", "onClick"])
          ])
        ]),
        content: v(() => [
          c("div", Lo, [
            c("div", Io, [
              t[6] || (t[6] = c(
                "div",
                {
                  class: "ui-timepicker-selection-band",
                  "aria-hidden": "true"
                },
                null,
                -1
                /* CACHED */
              )),
              c("div", Po, [
                c("div", {
                  class: "min-h-0 min-w-0 flex-1",
                  role: "spinbutton",
                  "aria-valuenow": n.draftHour,
                  "aria-valuemin": "0",
                  "aria-valuemax": "23",
                  "aria-label": i.hourAriaLabel
                }, [
                  c(
                    "div",
                    Mo,
                    [
                      c("div", zo, [
                        (s(!0), l(
                          S,
                          null,
                          z(i.hourOptions, (o) => (s(), l("button", {
                            key: "h-" + o,
                            type: "button",
                            tabindex: "-1",
                            class: b([
                              "ui-timepicker-wheel-item",
                              o === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                            ]),
                            onClick: (h) => i.selectHour(o)
                          }, p(i.pad2(o)), 11, Do))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  )
                ], 8, Ao),
                t[5] || (t[5] = c(
                  "span",
                  {
                    class: "ui-timepicker-colon",
                    "aria-hidden": "true"
                  },
                  ":",
                  -1
                  /* CACHED */
                )),
                c("div", {
                  class: "min-h-0 min-w-0 flex-1",
                  role: "spinbutton",
                  "aria-valuenow": n.draftMinute,
                  "aria-valuemin": "0",
                  "aria-valuemax": "59",
                  "aria-label": i.minuteAriaLabel
                }, [
                  c(
                    "div",
                    Eo,
                    [
                      c("div", Ro, [
                        (s(!0), l(
                          S,
                          null,
                          z(i.minuteValues, (o, h) => (s(), l("button", {
                            key: "m-" + o,
                            type: "button",
                            tabindex: "-1",
                            class: b([
                              "ui-timepicker-wheel-item",
                              o === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                            ]),
                            onClick: (m) => i.selectMinute(h)
                          }, p(i.pad2(o)), 11, Vo))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  )
                ], 8, Oo)
              ]),
              t[7] || (t[7] = c(
                "div",
                {
                  class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
                  "aria-hidden": "true"
                },
                null,
                -1
                /* CACHED */
              )),
              t[8] || (t[8] = c(
                "div",
                {
                  class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
                  "aria-hidden": "true"
                },
                null,
                -1
                /* CACHED */
              ))
            ])
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["open", "width", "disabled"]))
    ],
    2
    /* CLASS */
  );
}
const Fo = /* @__PURE__ */ x(mo, [["render", Bo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TimePicker.vue"]]), No = ["square", "video", "auto"], Uo = ["fill", "sm", "md", "lg"], ze = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Ho = {
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
      validator: (e) => Uo.includes(e)
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
      return T(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        ze[this.size] || ze.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, a] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = a);
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
}, $o = ["src", "alt"], jo = ["aria-hidden"], Wo = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Yo = {
  key: 3,
  class: "ui-photo__overflow"
}, Go = ["aria-label"], qo = ["aria-label"], Ko = { class: "ui-photo-preview__panel" }, Zo = ["src", "alt"], Xo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Qo(e, t, r, a, n, i) {
  const u = k("ui-icon"), d = k("ui-button");
  return s(), l(
    S,
    null,
    [
      (s(), y($(i.rootTag), P({
        type: r.interactive ? "button" : void 0,
        class: i.rootClass
      }, i.rootBind, { onClick: i.onClick }), {
        default: v(() => [
          r.src && !n.imageFailed ? (s(), l("img", {
            key: 0,
            src: r.src,
            alt: i.resolvedAlt,
            class: "ui-photo__img",
            loading: "lazy",
            decoding: "async",
            onError: t[0] || (t[0] = (o) => n.imageFailed = !0)
          }, null, 40, $o)) : (s(), l("span", {
            key: 1,
            class: "ui-photo__empty",
            "aria-hidden": r.interactive ? "true" : void 0
          }, [
            _(u, {
              name: "image",
              type: "light",
              class: "ui-photo__empty-icon"
            })
          ], 8, jo)),
          r.favorite ? (s(), l("span", Wo, [
            _(u, {
              name: "star",
              type: "light",
              size: "xs"
            })
          ])) : f("v-if", !0),
          r.overflowLabel ? (s(), l(
            "span",
            Yo,
            p(r.overflowLabel),
            1
            /* TEXT */
          )) : f("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 16, ["type", "class", "onClick"])),
      (s(), y(q, { to: "body" }, [
        _(K, {
          name: "ui-photo-preview",
          appear: ""
        }, {
          default: v(() => [
            n.previewOpen ? (s(), l("div", {
              key: 0,
              class: "ui-photo-preview",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.previewAriaLabel,
              onKeydown: t[2] || (t[2] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
            }, [
              c("button", {
                type: "button",
                class: "ui-photo-preview__backdrop",
                "aria-label": i.closeLabel,
                onClick: t[1] || (t[1] = (...o) => i.closePreview && i.closePreview(...o))
              }, null, 8, qo),
              c("div", Ko, [
                _(d, {
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "xmark",
                  class: "ui-photo-preview__close",
                  "aria-label": i.closeLabel,
                  onClick: i.closePreview
                }, null, 8, ["aria-label", "onClick"]),
                i.showPrev ? (s(), y(d, {
                  key: 0,
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "chevron-left",
                  class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                  "aria-label": i.prevLabel,
                  onClick: R(i.goPrev, ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                i.activeSrc ? (s(), l("img", {
                  key: 1,
                  src: i.activeSrc,
                  alt: i.activeAlt,
                  class: "ui-photo-preview__img"
                }, null, 8, Zo)) : f("v-if", !0),
                i.showNext ? (s(), y(d, {
                  key: 2,
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "chevron-right",
                  class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                  "aria-label": i.nextLabel,
                  onClick: R(i.goNext, ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                i.counterLabel ? (s(), l(
                  "p",
                  Xo,
                  p(i.counterLabel),
                  1
                  /* TEXT */
                )) : f("v-if", !0)
              ])
            ], 40, Go)) : f("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ]))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Jo = /* @__PURE__ */ x(Ho, [["render", Qo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Photo.vue"]]), eu = ["square", "video", "auto"], tu = {
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
      return T(
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
}, iu = ["data-count"], ru = ["aria-label"], su = ["aria-label"], au = { class: "ui-photo-preview__panel" }, nu = ["src", "alt"], lu = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ou(e, t, r, a, n, i) {
  const u = k("ui-photo"), d = k("ui-button");
  return s(), l(
    S,
    null,
    [
      c("div", {
        class: b(["ui-photos", i.layoutClass]),
        "data-count": i.displayCount
      }, [
        (s(!0), l(
          S,
          null,
          z(i.visibleItems, (o, h) => (s(), y(u, {
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
          }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 10, iu),
      (s(), y(q, { to: "body" }, [
        _(K, {
          name: "ui-photo-preview",
          appear: ""
        }, {
          default: v(() => [
            n.previewOpen ? (s(), l("div", {
              key: 0,
              class: "ui-photo-preview",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.previewAriaLabel,
              onKeydown: t[1] || (t[1] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
            }, [
              c("button", {
                type: "button",
                class: "ui-photo-preview__backdrop",
                "aria-label": i.closeLabel,
                onClick: t[0] || (t[0] = (...o) => i.closePreview && i.closePreview(...o))
              }, null, 8, su),
              c("div", au, [
                _(d, {
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "xmark",
                  class: "ui-photo-preview__close",
                  "aria-label": i.closeLabel,
                  onClick: i.closePreview
                }, null, 8, ["aria-label", "onClick"]),
                i.showPrev ? (s(), y(d, {
                  key: 0,
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "chevron-left",
                  class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                  "aria-label": i.prevLabel,
                  onClick: R(i.goPrev, ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                i.activeSrc ? (s(), l("img", {
                  key: 1,
                  src: i.activeSrc,
                  alt: i.activeAlt,
                  class: "ui-photo-preview__img"
                }, null, 8, nu)) : f("v-if", !0),
                i.showNext ? (s(), y(d, {
                  key: 2,
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "chevron-right",
                  class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                  "aria-label": i.nextLabel,
                  onClick: R(i.goNext, ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                i.counterLabel ? (s(), l(
                  "p",
                  lu,
                  p(i.counterLabel),
                  1
                  /* TEXT */
                )) : f("v-if", !0)
              ])
            ], 40, ru)) : f("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ]))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const uu = /* @__PURE__ */ x(tu, [["render", ou], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Photos.vue"]]);
function J(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function vu() {
  return {
    push: U,
    dismiss: at,
    clear: st,
    info: (e) => U({ ...J(e), color: "info" }),
    success: (e) => U({ ...J(e), color: "success" }),
    warning: (e) => U({ ...J(e), color: "warning" }),
    danger: (e) => U({ ...J(e), color: "danger" })
  };
}
function yu(e = !1) {
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
function bu() {
  return {
    confirm: nt
  };
}
const re = {
  en: ut,
  tr: ot
};
function _u(e = "tr") {
  return re[e] ?? re.tr;
}
const cu = [
  ["ui-action-card", ni],
  ["ui-action-card-list", ci],
  ["ui-action-group", ct],
  ["ui-ai-button", pi],
  ["ui-alert", dt],
  ["ui-avatar", ht],
  ["ui-avatar-group", _i],
  ["ui-badge", ft],
  ["ui-button", mt],
  ["ui-card", pt],
  ["ui-checkbox", Xi],
  ["ui-checkbox-group", sr],
  ["ui-color-picker", Ri],
  ["ui-currency-input", We],
  ["ui-confirm-dialog", gt],
  ["ui-date-picker", vt],
  ["ui-date-range-picker", wr],
  ["ui-dialog", yt],
  ["ui-divider", Ve],
  ["ui-dropdown", bt],
  ["ui-empty", _t],
  ["ui-field", Ir],
  ["ui-field-action", Ur],
  ["ui-file", Jr],
  ["ui-form-row", kt],
  ["ui-guidance", Ls],
  ["ui-icon", wt],
  ["ui-icon-picker", Us],
  ["ui-intro", ia],
  ["ui-input", xt],
  ["ui-price-display", fa],
  ["ui-price-display-group", va],
  ["ui-price-display-row", xa],
  ["ui-price-input", Aa],
  ["ui-price-text", fe],
  ["ui-password", Ba],
  ["ui-phone", St],
  ["ui-pin", Ct],
  ["ui-list", Tt],
  ["ui-list-item", Lt],
  ["ui-popover", It],
  ["ui-progress", Ka],
  ["ui-radio", Pt],
  ["ui-radio-group", At],
  ["ui-select", Mt],
  ["ui-sheet", cn],
  ["ui-menu", vn],
  ["ui-menu-group", wn],
  ["ui-menu-item", Cn],
  ["ui-menu-nav", Pn],
  ["ui-sidebar-item", Hn],
  ["ui-segment", zt],
  ["ui-segment-group", Dt],
  ["ui-skeleton", Ot],
  ["ui-slider", xl],
  ["ui-step", Yn],
  ["ui-stepper", dl],
  ["ui-switch", Et],
  ["ui-table", Ll],
  ["ui-table-body", Ml],
  ["ui-table-cell", Vl],
  ["ui-table-head", Hl],
  ["ui-table-header", Wl],
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
  ["ui-toast", Ut],
  ["ui-photo", Jo],
  ["ui-photos", uu]
];
let de = null;
function du(e, t = {}) {
  const r = Fe(e);
  return Ht(r.id) || $t(r), jt(r, t), de && Wt(de, { ...r.defaults, ...t.defaults }), r;
}
function hu(e, t = {}) {
  var w, L;
  const { i18n: r, locale: a, locales: n, theme: i, mode: u, overrides: d, inline: o, defaults: h, priceInput: m } = t;
  if (de = lt(e, h), i && du(i, { mode: u, overrides: d, inline: o, defaults: h }), m && Ta(m), (w = r == null ? void 0 : r.global) != null && w.mergeLocaleMessage) {
    const C = n ?? (a != null ? [a] : [
      typeof r.global.locale == "string" ? r.global.locale : ((L = r.global.locale) == null ? void 0 : L.value) ?? "tr"
    ]);
    for (const A of C) {
      const E = re[A];
      E ? r.global.mergeLocaleMessage(A, E) : typeof import.meta < "u" && console.warn(`[fewui] Bilinmeyen locale paketi: "${A}". Mevcut: ${Object.keys(re).join(", ")}`);
    }
  } else typeof import.meta < "u" && console.warn(
    '[fewui] app.use(UiLib, { i18n, locale: "tr" }) şeklinde i18n ve locale verin; aksi halde $t anahtarları çözülmez.'
  );
  for (const [C, A] of cu)
    e.component(C, A);
}
const ku = {
  install: hu
};
export {
  ni as ActionCard,
  ci as ActionCardList,
  ct as ActionGroup,
  pi as AiButton,
  dt as Alert,
  ht as Avatar,
  _i as AvatarGroup,
  Su as BACKDROP_BLUR_SCALE,
  ye as BASE_UI_DEFAULTS,
  ft as Badge,
  mt as Button,
  Cu as CARD_PADDING_SCALE,
  pt as Card,
  Xi as Checkbox,
  sr as CheckboxGroup,
  Ri as ColorPicker,
  gt as ConfirmDialog,
  We as CurrencyInput,
  Tu as DEFAULT_THEME_ID,
  Lu as DERIVED_VARS,
  vt as DatePicker,
  wr as DateRangePicker,
  yt as Dialog,
  Ve as Divider,
  bt as Dropdown,
  _t as Empty,
  Iu as FEW_COLOR_SCALE,
  Pu as FEW_PALETTE_ID,
  Au as FEW_PRIMARY,
  Mu as FEW_PRIMARY_FOREGROUND,
  Ir as Field,
  Ur as FieldAction,
  Jr as File,
  kt as FormRow,
  zu as GOOGLE_FONTS_CATALOG,
  Ls as Guidance,
  wt as Icon,
  Us as IconPicker,
  xt as Input,
  ia as Intro,
  Tt as List,
  Lt as ListItem,
  Du as MIX_FROM_MAP,
  vn as Menu,
  wn as MenuGroup,
  Cn as MenuItem,
  Pn as MenuNav,
  Sa as PRICE_FORMATS,
  Ba as Password,
  St as Phone,
  Jo as Photo,
  uu as Photos,
  Ct as Pin,
  It as Popover,
  Aa as PriceInput,
  Ka as Progress,
  Pt as Radio,
  At as RadioGroup,
  Ou as STATUS_TONES,
  zt as Segment,
  Dt as SegmentGroup,
  Mt as Select,
  cn as Sheet,
  Hn as SidebarItem,
  Ot as Skeleton,
  xl as Slider,
  Yn as Step,
  dl as Stepper,
  Et as Switch,
  Eu as THEME_CUSTOM_CSS_ID,
  Ru as TOAST_GROUP_WINDOW_MS,
  Vu as TOKEN_GROUPS,
  Vt as TabList,
  no as TabPanel,
  Ft as TabTrigger,
  Ll as Table,
  Ml as TableBody,
  Vl as TableCell,
  Hl as TableHead,
  Wl as TableHeader,
  Ql as TablePagination,
  io as TableRow,
  Bt as Tabs,
  Rt as Tag,
  co as ThemeProvider,
  Fo as TimePicker,
  Ut as Toast,
  Nt as Tooltip,
  be as UI_DEFAULTS_KEY,
  Bu as UI_ICON_TYPES,
  rt as UI_PORTAL_KEY,
  Fu as applyGoogleFontsCatalogPreview,
  Nu as applyGoogleFontsForTheme,
  Uu as applyThemeCustomCss,
  jt as applyUiTheme,
  Hu as buildGoogleFontsLinkTag,
  $u as buildGoogleFontsStylesheetUrl,
  ju as buildThemeCss,
  Wu as buildThemeEnforcementCss,
  Yu as buildThemeStyleAttr,
  Gu as clearThemeCustomCss,
  st as clearToasts,
  qu as clearUiTheme,
  Ku as computeThemeVars,
  Zu as createUiId,
  N as createUiIdFactory,
  ku as default,
  Xu as defineTheme,
  Qu as deriveBrandColorsFromPrimary,
  at as dismissToast,
  Ju as ensureContrastForMode,
  ec as expandTokens,
  tc as extendTheme,
  gu as formatCurrencyAmount,
  ic as formatFontFamily,
  rc as formatGoogleFontFamilyName,
  Bi as formatMoneyInput,
  He as getCurrencySymbol,
  sc as getFewPrimaryColors,
  je as getMoneySeparators,
  La as getPriceInputConfig,
  ac as getThemeCssPath,
  Ht as getThemePackage,
  _u as getUiMessages,
  nc as googleFontSelectOptions,
  G as iconTypeProp,
  lc as isThemePackage,
  oc as listThemes,
  uc as mergeTokens,
  et as mergeUiDefaults,
  cc as parseHex,
  Vi as parseLocalizedMoneyInput,
  dc as parseOklchLightness,
  hc as pickContrastForeground,
  Re as pickPassthroughAttrs,
  lt as provideUiDefaults,
  U as pushToast,
  $t as registerTheme,
  fc as relativeLuminance,
  nt as requestConfirm,
  mc as resetUiIds,
  pc as resolveControlSize,
  ae as resolveCurrencyCode,
  Fe as resolveTheme,
  De as resolveThemeControlSize,
  Oe as resolveThemeDefault,
  gc as resolveThemeFontFamilies,
  Y as resolveThemeIconType,
  tt as resolveThemeVars,
  M as resolveUiText,
  $e as sanitizeMoneyInput,
  Ta as setPriceInputConfig,
  vc as setToastExpanded,
  Wt as setUiDefaults,
  du as setUiTheme,
  yc as setUiThemeMode,
  bc as themeConfigToTokens,
  se as themeIconTypeComputed,
  _c as toCssVarName,
  kc as toggleToastExpanded,
  O as uiDefaultsMixin,
  Xe as uiPortalMixin,
  bu as useConfirm,
  yu as useDialog,
  vu as useToast,
  wc as useUiDefaults,
  xc as withDerivedBrandTokens,
  Sc as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
