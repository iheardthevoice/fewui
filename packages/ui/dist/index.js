import { _ as x, au as G, b0 as E, aY as se, aO as De, ab as T, aT as M, ae as N, aP as Ee, aL as qe, t as Ke, av as Oe, ap as Ze, aR as Y, aD as Re, l as Ve, b1 as Xe, am as Be, c as be, X as ye, az as Qe, aS as Je, aM as et, aN as Fe, Z as tt, a9 as it, ah as rt, aF as U, aI as st, aE as at, a$ as nt, ai as lt, A as ot, a as ut, b as ct, d as dt, e as ht, f as ft, g as pt, j as mt, k as gt, m as vt, E as bt, q as yt, I as _t, r as kt, P as wt, u as xt, L as St, s as Ct, v as Tt, R as Lt, w as It, z as Pt, x as At, y as Mt, H as zt, J as Dt, U as Et, N as Ot, Q as Rt, O as Vt, W as Bt, V as Ft, as as Nt, aG as Ut, a2 as $t, aV as Ht } from "./custom-css-v6r5L52A.js";
import { B as wu, C as xu, h as Su, i as Cu, F as Tu, n as Lu, o as Iu, p as Pu, G as Au, M as Mu, S as zu, D as Du, T as Eu, K as Ou, Y as Ru, $ as Vu, a0 as Bu, a1 as Fu, a3 as Nu, a4 as Uu, a5 as $u, a6 as Hu, a7 as ju, a8 as Wu, aa as Yu, ac as Gu, ad as qu, af as Ku, ag as Zu, aj as Xu, ak as Qu, al as Ju, an as ec, ao as tc, aq as ic, ar as rc, at as sc, aw as ac, ax as nc, ay as lc, aA as oc, aB as uc, aC as cc, aH as dc, aJ as hc, aK as fc, aQ as pc, aU as mc, aW as gc, aX as vc, aZ as bc, a_ as yc, b2 as _c, b3 as kc, b4 as wc } from "./custom-css-v6r5L52A.js";
import { resolveComponent as k, openBlock as s, createElementBlock as l, normalizeClass as y, renderSlot as g, createVNode as _, createCommentVNode as f, createElementVNode as c, toDisplayString as m, createBlock as b, normalizeStyle as D, mergeProps as P, withCtx as v, withModifiers as R, createTextVNode as I, Fragment as S, renderList as z, withKeys as ue, createSlots as ee, normalizeProps as jt, guardReactiveProps as Wt, Teleport as q, Transition as K, readonly as Yt, reactive as he, Comment as Gt, Text as qt, withDirectives as Ne, vShow as Ue, resolveDynamicComponent as H, computed as Kt } from "vue";
import { RouterLink as Zt } from "vue-router";
const Xt = {
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
}, Qt = ["disabled"], Jt = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, ei = { class: "ui-action-card__content" }, ti = { class: "ui-action-card__title" }, ii = {
  key: 0,
  class: "ui-action-card__description"
};
function ri(e, t, r, n, a, i) {
  const u = k("ui-icon");
  return s(), l("button", {
    type: "button",
    class: y(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (h) => e.$emit("click", h))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (s(), l("span", Jt, [
        _(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("v-if", !0)
    ]),
    c("span", ei, [
      c(
        "span",
        ti,
        m(r.title),
        1
        /* TEXT */
      ),
      r.description ? (s(), l(
        "span",
        ii,
        m(r.description),
        1
        /* TEXT */
      )) : f("v-if", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (s(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("v-if", !0)
    ])
  ], 10, Qt);
}
const si = /* @__PURE__ */ x(Xt, [["render", ri], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ActionCard.vue"]]), ai = {
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
}, ni = ["aria-label"];
function li(e, t, r, n, a, i) {
  return s(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: D(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, ni);
}
const oi = /* @__PURE__ */ x(ai, [["render", li], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ActionCardList.vue"]]), ui = {
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
}, ci = ["data-size"], di = { class: "ui-ai-button__surface" };
function hi(e, t, r, n, a, i) {
  const u = k("ui-button");
  return s(), l("span", {
    class: y(["ui-ai-button", {
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
    c("span", di, [
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
        onClick: t[0] || (t[0] = (h) => e.$emit("click", h))
      }), {
        default: v(() => [
          g(e.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, ci);
}
const fi = /* @__PURE__ */ x(ui, [["render", hi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/AiButton.vue"]]), pi = ["xs", "sm", "md", "lg", "xl"], ne = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, mi = {
  name: "AvatarGroup",
  SIZE_CLASS: ne,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => pi.includes(e)
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
}, gi = ["aria-label"];
function vi(e, t, r, n, a, i) {
  return s(), l("div", {
    class: y(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    r.overflowCount > 0 ? (s(), l(
      "span",
      {
        key: 0,
        class: y(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
      },
      m(i.overflowText),
      3
      /* TEXT, CLASS */
    )) : f("v-if", !0)
  ], 10, gi);
}
const bi = /* @__PURE__ */ x(mi, [["render", vi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/AvatarGroup.vue"]]), yi = [
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
], _i = {
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
      presetColors: yi
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
}, ki = ["disabled", "aria-expanded", "onClick"], wi = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, xi = { class: "ui-select-field-suffix" }, Si = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ci = { class: "ui-color-picker-panel" }, Ti = { class: "ui-color-picker-panel__header" }, Li = { class: "ui-color-picker-panel__title" }, Ii = { class: "ui-color-picker-swatches" }, Pi = ["title", "onClick"], Ai = { class: "ui-color-picker-custom" }, Mi = { class: "ui-color-picker-panel__title" }, zi = { class: "ui-color-picker-custom__row" };
function Di(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("ui-button"), o = k("ui-input"), d = k("ui-popover");
  return s(), l(
    "div",
    {
      class: y(i.rootClass)
    },
    [
      _(d, {
        open: a.popoverOpen,
        "onUpdate:open": t[1] || (t[1] = (p) => a.popoverOpen = p),
        placement: "bottom-start",
        "match-trigger-width": !e.$slots.trigger,
        disabled: r.disabled
      }, {
        trigger: v(({ open: p, toggle: w, close: L }) => [
          g(e.$slots, "trigger", {
            open: p,
            toggle: w,
            close: L
          }, () => [
            c("button", {
              type: "button",
              class: "ui-select-field",
              disabled: r.disabled,
              "aria-expanded": p ? "true" : "false",
              "aria-haspopup": !0,
              onClick: w
            }, [
              c("span", wi, [
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
                )) : (s(), b(u, {
                  key: 1,
                  name: "palette",
                  size: "xs",
                  class: "text-muted-foreground"
                }))
              ]),
              c(
                "span",
                {
                  class: y(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
                },
                m(i.displayValue),
                3
                /* TEXT, CLASS */
              ),
              c("span", xi, [
                c("span", Si, [
                  _(u, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ], 8, ki)
          ])
        ]),
        content: v(() => [
          c("div", Ci, [
            c("div", Ti, [
              c(
                "span",
                Li,
                m(i.popoverTitleLabel),
                1
                /* TEXT */
              ),
              i.localColor ? (s(), b(h, {
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
                    m(i.clearLabelText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])) : f("v-if", !0)
            ]),
            c("div", Ii, [
              (s(!0), l(
                S,
                null,
                z(a.presetColors, (p) => (s(), l("button", {
                  key: p,
                  type: "button",
                  class: y(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === p }]),
                  style: D({ backgroundColor: p }),
                  title: p,
                  onClick: (w) => i.selectColor(p)
                }, [
                  i.localColor === p ? (s(), b(u, {
                    key: 0,
                    name: "check",
                    type: "solid",
                    size: "xs",
                    class: "text-white mix-blend-difference"
                  })) : f("v-if", !0)
                ], 14, Pi))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            c("div", Ai, [
              c(
                "span",
                Mi,
                m(i.customColorLabelText),
                1
                /* TEXT */
              ),
              c("div", zi, [
                _(o, {
                  modelValue: i.localColor,
                  "onUpdate:modelValue": t[0] || (t[0] = (p) => i.localColor = p),
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
const Ei = /* @__PURE__ */ x(_i, [["render", Di], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ColorPicker.vue"]]), _e = {
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
  const n = r.toUpperCase();
  return j[n] ? n : t in j ? t : "TRY";
}
function $e(e) {
  var r;
  const t = ae(e);
  if (j[t])
    return j[t];
  try {
    const a = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = a == null ? void 0 : a.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function pu(e, t, r = "tr-TR") {
  const n = Number(e) || 0, a = ae(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(n);
  } catch {
    return `${$e(a)}${n.toFixed(2)}`;
  }
}
function He(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const n = t.slice(0, r), a = t.slice(r + 1).replace(/\./g, "");
    t = `${n}.${a}`;
  }
  return t;
}
function je(e = "tr-TR") {
  var t, r;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = n.find((a) => a.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = n.find((a) => a.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Oi(e, t = "tr-TR") {
  const { group: r, decimal: n } = je(t);
  let a = String(e ?? "").trim();
  return a ? (a = a.split(r).join(""), a = a.split(n).join("."), He(a)) : "";
}
function Ri(e, t = "tr-TR") {
  const r = He(e);
  if (!r) return "";
  const { group: n, decimal: a } = je(t), [i = "", u] = r.split("."), o = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return u === void 0 ? o : `${o}${a}${u}`;
}
const Vi = N("ui-currency-input"), Bi = ["sm", "md", "lg"], Fi = {
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
      validator: (e) => e == null || Bi.includes(e)
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
    return { fallbackId: Vi() };
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
        return Ri(this.modelValue, this.locale);
      },
      set(e) {
        const t = Oi(e, this.locale);
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, Ni = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Ui(e, t, r, n, a, i) {
  const u = k("ui-input");
  return s(), b(u, P({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (h) => i.innerValue = h),
    type: "text",
    inputmode: "decimal",
    class: "w-full",
    size: r.size,
    disabled: r.disabled,
    readonly: r.readonly,
    placeholder: r.placeholder,
    name: r.name,
    autocomplete: r.autocomplete,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (h) => e.$emit("focus", h)),
    onBlur: i.onBlur
  }), {
    prepend: v(() => [
      c(
        "span",
        Ni,
        m(i.displaySymbol),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const We = /* @__PURE__ */ x(Fi, [["render", Ui], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/CurrencyInput.vue"]]), $i = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, n = Array.isArray(r) ? [...r] : [], a = n.findIndex((i) => Object.is(i, this.value));
        t && a === -1 ? n.push(this.value) : !t && a !== -1 && n.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((n) => Object.is(n, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Hi = ["type", "name", "value", "checked"], ji = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Wi = { class: "ui-checkbox-body" }, Yi = {
  key: 0,
  class: "ui-checkbox-label"
}, Gi = {
  key: 1,
  class: "ui-checkbox-description"
};
function qi(e, t, r, n, a, i) {
  const u = k("ui-icon");
  return s(), l(
    "label",
    {
      class: y(i.checkboxClasses),
      onKeydown: [
        t[1] || (t[1] = ue(R((...h) => i.toggle && i.toggle(...h), ["prevent"]), ["enter"])),
        t[2] || (t[2] = ue(R((...h) => i.toggle && i.toggle(...h), ["prevent"]), ["space"]))
      ]
    },
    [
      c("input", {
        type: i.nativeType,
        name: i.nativeName,
        value: i.groupValueString,
        checked: i.isChecked,
        class: "sr-only",
        onChange: t[0] || (t[0] = (...h) => i.onNativeChange && i.onNativeChange(...h))
      }, null, 40, Hi),
      c("span", ji, [
        i.isChecked ? (s(), b(u, {
          key: 0,
          name: "check",
          size: "xs",
          class: "ui-checkbox-check-icon text-primary-foreground"
        })) : f("v-if", !0)
      ]),
      c("span", Wi, [
        e.$slots.label || r.label ? (s(), l("span", Yi, [
          g(e.$slots, "label", {}, () => [
            I(
              m(r.label),
              1
              /* TEXT */
            )
          ])
        ])) : f("v-if", !0),
        r.description ? (s(), l(
          "span",
          Gi,
          m(r.description),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Ki = /* @__PURE__ */ x($i, [["render", qi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Checkbox.vue"]]), Zi = ["list", "button"], Xi = ["vertical", "horizontal"], Qi = N("ui-checkbox-group"), Ji = {
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
      validator: (e) => Zi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Xi.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: Qi() };
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
}, er = ["aria-label"];
function tr(e, t, r, n, a, i) {
  return s(), l("div", {
    class: y(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, er);
}
const ir = /* @__PURE__ */ x(Ji, [["render", tr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/CheckboxGroup.vue"]]), rr = N("ui-daterangepicker");
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
  const r = Number(t[1]), n = Number(t[2]) - 1, a = Number(t[3]), i = new Date(r, n, a);
  return i.getFullYear() !== r || i.getMonth() !== n || i.getDate() !== a ? null : i;
}
function F(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function X(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function sr(e, t, r) {
  const { year: n, month: a, day: i } = parseIsoParts(e), h = new Date(n, a - 1, i).getDay(), o = h === 0 ? -6 : 1 - h, d = new Date(n, a - 1, i + o), p = B(d), w = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 6);
  let L = B(w);
  if (t && L > t && (L = t), r && p < r && L < r) return null;
  let C = p;
  return r && C < r && (C = r), F(C, L) > 0 ? null : [C, L];
}
function ar(e, t, r) {
  const { year: n } = parseIsoParts(e), a = `${n}-01-01`;
  let i = `${n}-12-31`;
  if (t && i > t && (i = t), r && a < r && i < r) return null;
  let u = a;
  return r && u < r && (u = r), F(u, i) > 0 ? null : [u, i];
}
function ke(e, t, r, n) {
  const a = `${e}-${W(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let u = `${e}-${W(t + 1)}-${W(i)}`;
  if (r && u > r && (u = r), n && a < n && u < n) return null;
  let h = a;
  return n && h < n && (h = n), F(h, u) > 0 ? null : [h, u];
}
const nr = {
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
    var r, n;
    const e = ((r = this.modelValue) == null ? void 0 : r[0]) || "", t = Z(e) || Z((n = this.modelValue) == null ? void 0 : n[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: rr(),
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
      const n = B(r), a = new Date(e);
      a.setDate(a.getDate() + 1);
      const i = B(a), u = e.getMonth(), h = e.getFullYear(), o = new Date(h, u - 1, 1), d = o.getFullYear(), p = o.getMonth(), w = (C, A) => typeof this.$t == "function" ? this.$t(C, A) : C;
      return [
        {
          key: "today",
          label: w("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: w("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "tomorrow",
          label: w("ui.datePicker.tomorrow"),
          range: [i, i]
        },
        {
          key: "thisWeek",
          label: w("ui.dateRangePicker.thisWeek"),
          range: sr(t, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: w("ui.dateRangePicker.thisMonth", {
            month: X(h, u, this.locale)
          }),
          range: ke(h, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: w("ui.dateRangePicker.lastMonth", {
            month: X(d, p, this.locale)
          }),
          range: ke(d, p, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: w("ui.dateRangePicker.thisYear", { year: h }),
          range: ar(t, this.maxYmd, this.minYmd)
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
      const r = Ee(this.uiDefaults, void 0, "dateRangeFormat"), n = (a) => a ? Ze(a, this.locale, r) || a : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? n(e || t) : `${n(e)} – ${n(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), n = new Date(e, t, 1 - r.getDay()), a = this.previewStart, i = this.previewEnd, u = a && i, h = [];
      for (let o = 0; o < 42; o += 1) {
        const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + o), p = d.getMonth() === t && d.getFullYear() === e, w = d.getDate(), L = B(d), C = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${t}`, A = B(/* @__PURE__ */ new Date()) === L, O = !!(this.minYmd && L < this.minYmd) || !!(this.maxYmd && L > this.maxYmd);
        let pe = !1, me = !1;
        if (u) {
          const ge = F(a, i) <= 0 ? a : i, ve = F(a, i) <= 0 ? i : a;
          pe = F(L, ge) >= 0 && F(L, ve) <= 0, me = L === ge || L === ve;
        }
        h.push({
          key: C,
          d: w,
          date: d,
          today: A,
          inMonth: p,
          disabled: O,
          inRange: pe,
          endpoint: me
        });
      }
      return h;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, n] = e.range;
      this.pickingStart = r, this.pickingEnd = n, this.$emit("update:modelValue", [r, n]), this.$emit("change", [r, n]), t();
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
      let n = this.pickingStart, a = r;
      if (F(a, n) < 0) {
        const i = n;
        n = a, a = i;
      }
      this.pickingStart = n, this.pickingEnd = a, this.$emit("update:modelValue", [n, a]), this.$emit("change", [n, a]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, lr = { class: "min-w-0 flex-1 truncate text-foreground" }, or = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, ur = { class: "ui-daterangepicker-layout" }, cr = ["aria-label"], dr = { class: "ui-daterangepicker-calendars" }, hr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, fr = { class: "ui-daterangepicker-month-row" }, pr = { class: "mb-2 flex items-center justify-between gap-2" }, mr = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, gr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, vr = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, br = { class: "ui-datepicker-grid" };
function yr(e, t, r, n, a, i) {
  const u = k("ui-button"), h = k("ui-popover");
  return s(), l(
    "div",
    {
      class: y(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
    },
    [
      _(h, {
        open: i.resolvedOpen,
        "onUpdate:open": t[2] || (t[2] = (o) => i.resolvedOpen = o),
        placement: "bottom-end",
        "match-trigger-width": !1,
        width: i.popoverWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: o, toggle: d, close: p }) => [
          g(e.$slots, "trigger", {
            open: o,
            toggle: d,
            close: p
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
              onClick: d
            }, {
              default: v(() => [
                c(
                  "span",
                  lr,
                  m(i.displayText),
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
          c("div", or, [
            c("div", ur, [
              i.quickPresets.length ? (s(), l("aside", {
                key: 0,
                class: "ui-daterangepicker-quick",
                "aria-label": i.resolvedQuickAriaLabel
              }, [
                (s(!0), l(
                  S,
                  null,
                  z(i.quickPresets, (d) => (s(), b(u, {
                    key: d.key,
                    type: "button",
                    variant: i.isPresetActive(d) ? "solid" : "outline",
                    color: i.isPresetActive(d) ? "primary" : "secondary",
                    size: "sm",
                    rounded: "",
                    disabled: d.disabled,
                    "aria-pressed": i.isPresetActive(d) ? "true" : "false",
                    "data-active": i.isPresetActive(d) ? "true" : void 0,
                    onClick: (p) => i.applyQuick(d, o)
                  }, {
                    default: v(() => [
                      I(
                        m(d.label),
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
              ], 8, cr)) : f("v-if", !0),
              c("div", dr, [
                i.rangeHint ? (s(), l(
                  "p",
                  hr,
                  m(i.rangeHint),
                  1
                  /* TEXT */
                )) : f("v-if", !0),
                c("div", fr, [
                  (s(!0), l(
                    S,
                    null,
                    z(i.calendarPanes, (d) => (s(), l("section", {
                      key: d.key,
                      class: "ui-daterangepicker-month"
                    }, [
                      c("div", pr, [
                        d.showPrev ? (s(), b(u, {
                          key: 0,
                          variant: "ghost",
                          color: "primary",
                          cubed: "",
                          "prefix-icon": "chevron-left",
                          "aria-label": i.resolvedPrevMonthLabel,
                          onClick: t[0] || (t[0] = R((p) => i.shiftMonth(-1), ["stop"]))
                        }, null, 8, ["aria-label"])) : (s(), l("span", mr)),
                        c(
                          "span",
                          gr,
                          m(d.title),
                          1
                          /* TEXT */
                        ),
                        d.showNext ? (s(), b(u, {
                          key: 2,
                          variant: "ghost",
                          color: "primary",
                          cubed: "",
                          "prefix-icon": "chevron-right",
                          "aria-label": i.resolvedNextMonthLabel,
                          onClick: t[1] || (t[1] = R((p) => i.shiftMonth(1), ["stop"]))
                        }, null, 8, ["aria-label"])) : (s(), l("span", vr))
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
                      c("div", br, [
                        (s(!0), l(
                          S,
                          null,
                          z(d.cells, (p) => (s(), b(u, {
                            key: p.key,
                            variant: i.dayVariant(p),
                            color: i.dayColor(p),
                            size: "sm",
                            cubed: "",
                            disabled: p.disabled,
                            "aria-selected": p.endpoint ? "true" : "false",
                            "aria-disabled": p.disabled ? "true" : void 0,
                            "data-outside": p.inMonth ? void 0 : "true",
                            "data-today": p.today ? "true" : void 0,
                            "data-in-range": p.inRange && !p.endpoint ? "true" : void 0,
                            "data-range-endpoint": p.endpoint ? "true" : void 0,
                            onMouseenter: (w) => i.onCellHover(p),
                            onClick: (w) => i.pick(p, o)
                          }, {
                            default: v(() => [
                              I(
                                m(p.d),
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
const _r = /* @__PURE__ */ x(nr, [["render", yr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/DateRangePicker.vue"]]), kr = {
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
}, wr = {
  key: 0,
  class: "ui-field__title-row"
}, xr = {
  key: 1,
  class: "ui-field__title"
}, Sr = {
  key: 2,
  class: "ui-field__subtitle"
};
function Cr(e, t, r, n, a, i) {
  const u = k("ui-icon");
  return s(), l(
    "div",
    P({ class: i.rootClass }, i.passthroughAttrs),
    [
      r.title || i.showIcon ? (s(), l("div", wr, [
        i.showIcon ? (s(), l(
          "span",
          {
            key: 0,
            class: y(i.titleIconClass),
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
          xr,
          m(r.title),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0),
      i.hasValue ? (s(), l(
        "div",
        {
          key: 1,
          class: y(["ui-field__value", r.fill ? "mt-auto" : void 0])
        },
        [
          g(e.$slots, "default")
        ],
        2
        /* CLASS */
      )) : f("v-if", !0),
      r.subtitle ? (s(), l(
        "p",
        Sr,
        m(r.subtitle),
        1
        /* TEXT */
      )) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const Tr = /* @__PURE__ */ x(kr, [["render", Cr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Field.vue"]]), Lr = ["popover", "dialog"], Ir = ["sm", "md", "lg"], Pr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Ar = {
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
      validator: (e) => Lr.includes(e)
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
      validator: (e) => Ir.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Pr.includes(e)
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
      return this.iconOnly && (this.hasValue || this.resolvedOpen) ? "soft" : "solid";
    },
    triggerColor() {
      return this.hasValue || this.resolvedOpen ? "primary" : "secondary";
    },
    showPopoverHeader() {
      return !!(this.$slots.header || this.title || this.description || this.clearable && this.hasValue);
    },
    showDialogFooter() {
      return this.showFooter || !!this.$slots.footer || this.clearable && this.hasValue;
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
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, Mr = { class: "ui-field-action-header" }, zr = { class: "ui-field-action-header__text" }, Dr = {
  key: 0,
  class: "ui-field-action-header__title"
}, Er = {
  key: 1,
  class: "ui-field-action-header__description"
}, Or = { class: "ui-field-action-body" }, Rr = { class: "ui-field-action-body" }, Vr = { class: "ui-field-action-footer" };
function Br(e, t, r, n, a, i) {
  const u = k("ui-button"), h = k("ui-popover"), o = k("ui-dialog");
  return s(), l(
    "div",
    {
      class: y([
        "ui-field-action",
        i.hasValue ? "ui-field-action--filled" : "",
        r.iconOnly ? "ui-field-action--icon" : "",
        e.$attrs.class
      ])
    },
    [
      i.isPopover ? (s(), b(h, {
        key: 0,
        open: i.resolvedOpen,
        "onUpdate:open": t[0] || (t[0] = (d) => i.resolvedOpen = d),
        placement: r.placement,
        width: r.popoverWidth,
        disabled: r.disabled,
        "mobile-centered": r.mobileCentered
      }, ee({
        trigger: v(({ open: d, toggle: p }) => [
          g(e.$slots, "trigger", {
            open: d,
            toggle: p,
            close: i.close,
            label: i.triggerLabel,
            hasValue: i.hasValue
          }, () => [
            r.iconOnly ? (s(), b(u, {
              key: 0,
              type: "button",
              variant: i.triggerVariant,
              color: i.triggerColor,
              size: r.size,
              rounded: "",
              cubed: "",
              "prefix-icon": r.prefixIcon,
              disabled: r.disabled,
              "aria-expanded": d ? "true" : "false",
              "aria-haspopup": !0,
              "aria-label": i.triggerAriaLabel,
              onClick: (w) => i.onTriggerClick(w, p)
            }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (s(), b(u, {
              key: 1,
              type: "button",
              variant: i.triggerVariant,
              color: i.triggerColor,
              size: r.size,
              rounded: "",
              "prefix-icon": r.prefixIcon,
              "suffix-icon": r.suffixIcon,
              disabled: r.disabled,
              "aria-expanded": d ? "true" : "false",
              "aria-haspopup": !0,
              "aria-label": i.triggerAriaLabel,
              onClick: (w) => i.onTriggerClick(w, p)
            }, {
              default: v(() => [
                I(
                  m(i.triggerLabel),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
          ])
        ]),
        content: v(({ close: d }) => [
          c("div", Or, [
            g(e.$slots, "default", {
              close: d,
              open: i.resolvedOpen
            })
          ])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        i.showPopoverHeader ? {
          name: "header",
          fn: v(({ close: d }) => [
            g(e.$slots, "header", { close: d }, () => [
              c("div", Mr, [
                c("div", zr, [
                  r.title ? (s(), l(
                    "p",
                    Dr,
                    m(r.title),
                    1
                    /* TEXT */
                  )) : f("v-if", !0),
                  r.description ? (s(), l(
                    "p",
                    Er,
                    m(r.description),
                    1
                    /* TEXT */
                  )) : f("v-if", !0)
                ]),
                r.clearable && i.hasValue ? (s(), b(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "eraser",
                  "aria-label": i.resolvedClearLabel,
                  onClick: (p) => i.onClear(d)
                }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0)
              ])
            ])
          ]),
          key: "0"
        } : void 0,
        e.$slots.footer ? {
          name: "footer",
          fn: v(({ close: d }) => [
            g(e.$slots, "footer", { close: d })
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
            hasValue: i.hasValue
          }, () => [
            r.iconOnly ? (s(), b(u, {
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
              onClick: t[1] || (t[1] = (d) => i.onTriggerClick(d, i.toggle))
            }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (s(), b(u, {
              key: 1,
              type: "button",
              variant: i.triggerVariant,
              color: i.triggerColor,
              size: r.size,
              rounded: "",
              "prefix-icon": r.prefixIcon,
              "suffix-icon": r.suffixIcon,
              disabled: r.disabled,
              "aria-expanded": i.resolvedOpen ? "true" : "false",
              "aria-haspopup": !0,
              "aria-label": i.triggerAriaLabel,
              onClick: t[2] || (t[2] = (d) => i.onTriggerClick(d, i.toggle))
            }, {
              default: v(() => [
                I(
                  m(i.triggerLabel),
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
            "onUpdate:open": t[4] || (t[4] = (d) => i.resolvedOpen = d),
            title: r.title,
            description: r.description,
            icon: r.dialogIcon,
            "max-width": r.maxWidth,
            "close-on-backdrop": r.closeOnBackdrop,
            "close-on-escape": r.closeOnEscape
          }, ee({
            default: v(() => [
              c("div", Rr, [
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
                  c("div", Vr, [
                    r.clearable && i.hasValue ? (s(), b(u, {
                      key: 0,
                      type: "button",
                      variant: "ghost",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "eraser",
                      "aria-label": i.resolvedClearLabel,
                      onClick: t[3] || (t[3] = (d) => i.onClear(i.close))
                    }, null, 8, ["aria-label"])) : f("v-if", !0),
                    _(u, {
                      type: "button",
                      variant: "solid",
                      color: "primary",
                      onClick: i.close
                    }, {
                      default: v(() => [
                        I(
                          m(i.resolvedDoneLabel),
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
const Fr = /* @__PURE__ */ x(Ar, [["render", Br], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/FieldAction.vue"]]), Nr = ["auto", "file", "folder"], Ur = ["sm", "md", "lg"], $r = { icon: "folder", color: "text-sky-500" }, Hr = { icon: "file-lines", color: "text-muted-foreground" }, jr = {
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
function Wr(e) {
  const t = te(e);
  return /[/\\]\s*$/.test(t);
}
function Ye(e) {
  const t = te(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function Yr(e) {
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
}, Gr = {
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
      validator: (e) => Nr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ur.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Wr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = te(this.name);
      return e ? this.basenameOnly ? Ye(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return te(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return $r;
      const e = Yr(this.name);
      return jr[e] || Hr;
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
}, qr = ["aria-label"], Kr = ["title"];
function Zr(e, t, r, n, a, i) {
  const u = k("ui-icon");
  return s(), l("div", {
    class: y(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c(
      "div",
      {
        class: y(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
      },
      [
        _(u, {
          name: i.resolvedIcon,
          type: i.resolvedIconType,
          size: i.iconSizeToken,
          class: y(i.iconClasses)
        }, null, 8, ["name", "type", "size", "class"])
      ],
      2
      /* CLASS */
    ),
    r.hideLabel ? f("v-if", !0) : (s(), l("span", {
      key: 0,
      class: y(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, m(i.displayLabel), 11, Kr))
  ], 10, qr);
}
const Xr = /* @__PURE__ */ x(Gr, [["render", Zr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/File.vue"]]);
function Qr(e) {
  const t = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((u) => u.top)), n = Math.min(...t.map((u) => u.left)), a = Math.max(...t.map((u) => u.right)), i = Math.max(...t.map((u) => u.bottom));
  return {
    top: r,
    left: n,
    right: a,
    bottom: i,
    width: a - n,
    height: i - r,
    x: n,
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
    ].filter((a) => a instanceof HTMLElement), n = Qr(r.map((a) => a.getBoundingClientRect()));
    if (n) return n;
  }
  return t.getBoundingClientRect();
}
function Jr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && t.push(n);
  return t;
}
const es = ["dialog", "popover", "card", "tour"], ts = [
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
], is = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, rs = 8, ss = {
  name: "Guidance",
  mixins: [E],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => es.includes(e)
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
      validator: (e) => ts.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: rs
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => is.includes(e)
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
      const n = window.innerWidth, a = window.innerHeight, i = r.getBoundingClientRect(), u = i.width || 320, h = i.height || 180;
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
      const d = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, o.top - d), w = Math.max(0, o.left - d), L = Math.min(a, o.bottom + d), C = Math.min(n, o.right + d);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${w}px`,
        width: `${Math.max(0, C - w)}px`,
        height: `${Math.max(0, L - p)}px`
      };
      let A = L + V, O = w;
      this.placement.startsWith("top") ? A = p - h - V : this.placement.startsWith("right") ? (A = p, O = C + V) : this.placement.startsWith("left") ? (A = p, O = w - u - V) : this.placement.includes("end") && (O = C - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && A + h > a - V && (A = p - h - V), A = Math.max(V, Math.min(A, a - h - V)), O = Math.max(V, Math.min(O, n - u - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${A}px`,
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
          for (const r of Jr(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, as = { class: "ui-guidance-footer" }, ns = { class: "ui-guidance-popover" }, ls = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, os = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, us = { class: "ui-guidance-popover__text" }, cs = {
  key: 0,
  class: "ui-guidance-popover__title"
}, ds = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, hs = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, fs = ["aria-label"], ps = { class: "ui-guidance-tour__content" }, ms = { class: "ui-header-lead" }, gs = { class: "ui-header-lead__main" }, vs = {
  key: 0,
  class: "ui-header-lead__icon"
}, bs = { class: "ui-header-lead__text" }, ys = {
  key: 0,
  class: "ui-guidance-tour__title"
}, _s = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, ks = {
  key: 0,
  class: "ui-header-lead__actions"
}, ws = {
  key: 0,
  class: "ui-guidance-tour__body"
}, xs = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Ss(e, t, r, n, a, i) {
  const u = k("ui-button"), h = k("ui-card"), o = k("ui-dialog"), d = k("ui-icon"), p = k("ui-popover");
  return i.shouldRender ? (s(), l(
    "div",
    {
      key: 0,
      class: y(i.rootShellClass)
    },
    [
      f(" card "),
      r.mode === "card" ? (s(), b(h, {
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
              c("div", as, [
                r.showFooterClose ? (s(), b(u, {
                  key: 0,
                  type: "button",
                  variant: "outline",
                  color: "secondary",
                  rounded: "",
                  onClick: i.onClose
                }, {
                  default: v(() => [
                    I(
                      m(i.resolvedCloseLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])) : f("v-if", !0),
                r.showGo ? (s(), b(u, {
                  key: 1,
                  type: "button",
                  color: "primary",
                  rounded: "",
                  onClick: i.onGo
                }, {
                  default: v(() => [
                    I(
                      m(i.resolvedGoLabel),
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
                      m(i.resolvedGoLabel),
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
          _(p, {
            open: i.syncOpen,
            "onUpdate:open": t[2] || (t[2] = (w) => i.syncOpen = w),
            placement: r.placement,
            width: r.popoverWidth,
            "close-on-outside-click": r.closeOnBackdrop,
            "close-on-escape": r.closeOnEscape
          }, {
            trigger: v((w) => [
              g(e.$slots, "trigger", jt(Wt(w)))
            ]),
            content: v(() => [
              c("div", ns, [
                r.icon || r.title || r.description ? (s(), l("div", ls, [
                  r.icon ? (s(), l("span", os, [
                    _(d, {
                      name: r.icon,
                      type: e.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("v-if", !0),
                  c("div", us, [
                    r.title ? (s(), l(
                      "p",
                      cs,
                      m(r.title),
                      1
                      /* TEXT */
                    )) : f("v-if", !0),
                    r.description ? (s(), l(
                      "p",
                      ds,
                      m(r.description),
                      1
                      /* TEXT */
                    )) : f("v-if", !0)
                  ])
                ])) : f("v-if", !0),
                g(e.$slots, "default"),
                i.hasFooterActions && !e.$slots.footer ? (s(), l("div", hs, [
                  r.showFooterClose ? (s(), b(u, {
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
                        m(i.resolvedCloseLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : f("v-if", !0),
                  r.showGo ? (s(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: v(() => [
                      I(
                        m(i.resolvedGoLabel),
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
          (s(), b(q, { to: "body" }, [
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
                    class: y(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
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
                    a.tourHighlightStyle ? (s(), l(
                      "div",
                      {
                        key: 1,
                        class: "ui-guidance-tour__highlight",
                        style: D(a.tourHighlightStyle),
                        "aria-hidden": "true"
                      },
                      null,
                      4
                      /* STYLE */
                    )) : f("v-if", !0),
                    c("div", {
                      ref: "tourPanelRef",
                      class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
                      style: D(a.tourPanelStyle),
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": r.title || i.resolvedGoLabel
                    }, [
                      c("div", ps, [
                        c("div", ms, [
                          c("div", gs, [
                            r.icon ? (s(), l("span", vs, [
                              _(d, {
                                name: r.icon,
                                type: e.resolvedIconType,
                                size: "sm"
                              }, null, 8, ["name", "type"])
                            ])) : f("v-if", !0),
                            c("div", bs, [
                              r.title ? (s(), l(
                                "p",
                                ys,
                                m(r.title),
                                1
                                /* TEXT */
                              )) : f("v-if", !0),
                              r.description ? (s(), l(
                                "p",
                                _s,
                                m(r.description),
                                1
                                /* TEXT */
                              )) : f("v-if", !0)
                            ])
                          ]),
                          r.showClose ? (s(), l("div", ks, [
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
                        e.$slots.default ? (s(), l("div", ws, [
                          g(e.$slots, "default")
                        ])) : f("v-if", !0),
                        i.hasFooterActions && !e.$slots.footer ? (s(), l("div", xs, [
                          r.showFooterClose ? (s(), b(u, {
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
                                m(i.resolvedCloseLabel),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : f("v-if", !0),
                          r.showGo ? (s(), b(u, {
                            key: 1,
                            type: "button",
                            color: "primary",
                            size: "sm",
                            rounded: "",
                            onClick: i.onGo
                          }, {
                            default: v(() => [
                              I(
                                m(i.resolvedGoLabel),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : f("v-if", !0)
                        ])) : g(e.$slots, "footer", { key: 2 })
                      ])
                    ], 12, fs)
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
const Cs = /* @__PURE__ */ x(ss, [["render", Ss], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Guidance.vue"]]), Ts = {
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
      e && (r = t.filter((a) => String(a).toLowerCase().includes(e)));
      const n = Number(this.maxResults);
      return Number.isFinite(n) && n > 0 ? r.slice(0, n) : r;
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
}, Ls = ["disabled", "aria-expanded", "onClick"], Is = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ps = { class: "ui-select-field-suffix" }, As = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ms = { class: "ui-icon-picker-panel" }, zs = { class: "ui-icon-picker-panel__header" }, Ds = { class: "ui-icon-picker-panel__title" }, Es = { class: "ui-icon-picker-panel__search" }, Os = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Rs = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Vs = ["title", "onClick"];
function Bs(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("ui-button"), o = k("ui-input"), d = k("ui-popover");
  return s(), l(
    "div",
    {
      class: y(i.rootClass)
    },
    [
      _(d, {
        open: a.popoverOpen,
        "onUpdate:open": t[1] || (t[1] = (p) => a.popoverOpen = p),
        placement: "bottom-start",
        width: r.panelWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: p, toggle: w, close: L }) => [
          g(e.$slots, "trigger", {
            open: p,
            toggle: w,
            close: L
          }, () => [
            c("button", {
              type: "button",
              class: "ui-select-field",
              disabled: r.disabled,
              "aria-expanded": p ? "true" : "false",
              "aria-haspopup": !0,
              onClick: w
            }, [
              c("span", Is, [
                _(u, {
                  name: i.localIcon || "grid",
                  type: e.resolvedIconType,
                  size: "xs"
                }, null, 8, ["name", "type"])
              ]),
              c(
                "span",
                {
                  class: y(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
                },
                m(i.localIcon || i.triggerLabel),
                3
                /* TEXT, CLASS */
              ),
              c("span", Ps, [
                c("span", As, [
                  _(u, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ], 8, Ls)
          ])
        ]),
        content: v(() => [
          c("div", Ms, [
            c("div", zs, [
              c(
                "span",
                Ds,
                m(i.popoverTitleLabel),
                1
                /* TEXT */
              ),
              i.localIcon ? (s(), b(h, {
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
                    m(i.clearLabelText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])) : f("v-if", !0)
            ]),
            c("div", Es, [
              _(o, {
                modelValue: a.searchQuery,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => a.searchQuery = p),
                block: "",
                "prefix-icon": "magnifying-glass",
                placeholder: i.searchPlaceholderLabel,
                autocomplete: "off"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            i.filteredIcons.length ? (s(), l("div", Rs, [
              (s(!0), l(
                S,
                null,
                z(i.filteredIcons, (p) => (s(), l("button", {
                  key: p,
                  type: "button",
                  class: y(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === p }]),
                  title: p,
                  onClick: (w) => i.selectIcon(p)
                }, [
                  _(u, {
                    name: p,
                    type: e.resolvedIconType,
                    size: "sm"
                  }, null, 8, ["name", "type"])
                ], 10, Vs))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (s(), l(
              "div",
              Os,
              m(i.resolvedNoResultsLabel),
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
const Fs = /* @__PURE__ */ x(Ts, [["render", Bs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/IconPicker.vue"]]), Ns = 56, Us = 1.15, $s = 0.28, Hs = {
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
      const n = e - this.startX, a = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(n) < 8 && Math.abs(a) < 8) return;
        if (this.lockedAxis = Math.abs(n) > Math.abs(a) * Us ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = r == null ? void 0 : r.preventDefault) == null || o.call(r);
      const i = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let h = n;
      (i && h > 0 || u && h < 0) && (h *= $s), this.dragOffset = h;
    },
    commitDrag(e, t) {
      var d;
      const r = e - this.startX, n = Math.max(1, t - this.startAt), a = r / n, i = ((d = this.$refs.viewport) == null ? void 0 : d.clientWidth) || 0, u = Math.max(Ns, i * 0.18), h = this.lockedAxis === "x" && (Math.abs(r) >= u || Math.abs(a) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !h) return;
      if (this.isRtl() ? r > 0 : r < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, js = ["aria-modal", "aria-label", "aria-roledescription"], Ws = { class: "ui-intro__header" }, Ys = ["aria-hidden"], Gs = {
  key: 0,
  class: "ui-intro__icon"
}, qs = {
  key: 1,
  class: "ui-intro__title"
}, Ks = {
  key: 2,
  class: "ui-intro__description"
}, Zs = { class: "ui-intro__footer" }, Xs = ["aria-label"], Qs = ["aria-selected", "aria-label", "onClick"];
function Js(e, t, r, n, a, i) {
  const u = k("ui-button"), h = k("ui-icon");
  return s(), b(q, {
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
          c("div", Ws, [
            g(e.$slots, "header", {}, () => [
              r.showSkip ? (s(), b(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: i.onSkip
              }, {
                default: v(() => [
                  I(
                    m(i.resolvedSkipLabel),
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
                  class: y(["ui-intro__track", { "ui-intro__track--dragging": a.dragging }]),
                  style: D(i.trackStyle)
                },
                [
                  (s(!0), l(
                    S,
                    null,
                    z(i.normalizedSteps, (o, d) => (s(), l("div", {
                      key: o.key,
                      class: "ui-intro__slide",
                      "aria-hidden": d === i.activeIndex ? void 0 : "true"
                    }, [
                      g(e.$slots, "default", {
                        step: o,
                        index: d,
                        active: d === i.activeIndex
                      }, () => [
                        o.icon ? (s(), l("span", Gs, [
                          _(h, {
                            name: o.icon,
                            type: o.iconType,
                            size: "xl"
                          }, null, 8, ["name", "type"])
                        ])) : f("v-if", !0),
                        o.title ? (s(), l(
                          "h2",
                          qs,
                          m(o.title),
                          1
                          /* TEXT */
                        )) : f("v-if", !0),
                        o.description ? (s(), l(
                          "p",
                          Ks,
                          m(o.description),
                          1
                          /* TEXT */
                        )) : f("v-if", !0)
                      ])
                    ], 8, Ys))),
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
          c("div", Zs, [
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
                  z(i.normalizedSteps, (o, d) => (s(), l("button", {
                    key: o.key,
                    type: "button",
                    class: y(["ui-intro__dot", { "ui-intro__dot--active": d === i.activeIndex }]),
                    role: "tab",
                    "aria-selected": d === i.activeIndex,
                    "aria-label": o.ariaLabel || o.title || String(d + 1),
                    onClick: (p) => i.goTo(d)
                  }, null, 10, Qs))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, Xs)) : f("v-if", !0),
              _(u, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: i.goNext
              }, {
                default: v(() => [
                  I(
                    m(i.primaryLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ])
          ])
        ], 16, js)) : f("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 8, ["disabled"]);
}
const ea = /* @__PURE__ */ x(Hs, [["render", Js], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Intro.vue"]]), ta = ["sm", "md", "lg", "xl", "2xl"], ia = ["default", "foreground", "muted", "success", "danger", "primary"], ra = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ta.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => ia.includes(e)
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
function sa(e, t, r, n, a, i) {
  return s(), l(
    "span",
    {
      class: y(["ui-price-text", i.rootClass])
    },
    [
      g(e.$slots, "default", {}, () => [
        I(
          m(r.value),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const fe = /* @__PURE__ */ x(ra, [["render", sa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceText.vue"]]), aa = ["sm", "md", "lg"], na = ["sm", "md", "lg", "xl", "2xl"], la = ["default", "foreground", "muted", "success", "danger", "primary"], oa = {
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
      validator: (e) => aa.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => na.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => la.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, ua = { class: "ui-price-display__label" };
function ca(e, t, r, n, a, i) {
  const u = k("ui-price-text");
  return s(), l(
    "div",
    {
      class: y(["ui-price-display", i.rootClass])
    },
    [
      c(
        "span",
        ua,
        m(r.label),
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
              m(r.value),
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
const da = /* @__PURE__ */ x(oa, [["render", ca], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplay.vue"]]), ha = ["sm", "md", "lg"], fa = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ha.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function pa(e, t, r, n, a, i) {
  return s(), l(
    "div",
    {
      class: y(["ui-price-display-group", i.rootClass])
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const ma = /* @__PURE__ */ x(fa, [["render", pa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplayGroup.vue"]]), ga = ["sm", "md", "lg", "xl", "2xl"], va = ["default", "foreground", "muted", "success", "danger", "primary"], ba = {
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
      validator: (e) => ga.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => va.includes(e)
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
}, ya = { class: "ui-price-display-row__label" };
function _a(e, t, r, n, a, i) {
  const u = k("ui-price-text");
  return s(), l(
    "div",
    {
      class: y(["ui-price-display-row", i.rootClass])
    },
    [
      c(
        "span",
        ya,
        m(r.label),
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
              m(r.value),
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
const ka = /* @__PURE__ */ x(ba, [["render", _a], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceDisplayRow.vue"]]), wa = ["tr-TR", "en-US"], ie = he({
  currency: "TRY",
  format: "tr-TR"
});
function xa(e, t = ie.format) {
  return wa.includes(e) ? e : t;
}
function Sa(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (ie.currency = ae(e.currency));
  const t = e.format ?? e.locale;
  t != null && (ie.format = xa(t));
}
function Ca() {
  return Yt(ie);
}
const Ta = {
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
    return { priceInputConfig: Ca() };
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
function La(e, t, r, n, a, i) {
  const u = k("CurrencyInput");
  return s(), b(u, P({
    "model-value": r.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (h) => e.$emit("update:modelValue", h)),
    onInput: t[1] || (t[1] = (h) => e.$emit("input", h)),
    onChange: t[2] || (t[2] = (h) => e.$emit("change", h)),
    onFocus: t[3] || (t[3] = (h) => e.$emit("focus", h)),
    onBlur: t[4] || (t[4] = (h) => e.$emit("blur", h))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Ia = /* @__PURE__ */ x(Ta, [["render", La], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/PriceInput.vue"]]);
function Pa(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const n = Math.min(4, Math.round(r)), a = ["weak", "fair", "good", "strong"], i = n <= 0 ? "weak" : a[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: i
  };
}
const Aa = N("ui-password"), Ma = ["sm", "md", "lg"], za = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ma.includes(e)
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
    const e = Aa(), t = e.slice(12);
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
      return Pa(this.modelValue);
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  }
}, Da = ["aria-label", "aria-pressed", "disabled"], Ea = ["id", "aria-live"];
function Oa(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("ui-input"), o = k("ui-progress");
  return s(), l(
    "div",
    {
      class: y(["ui-password", [e.$attrs.class]])
    },
    [
      _(h, P({
        id: i.resolvedId,
        modelValue: i.innerValue,
        "onUpdate:modelValue": t[1] || (t[1] = (d) => i.innerValue = d),
        type: a.visible ? "text" : "password",
        class: "w-full",
        size: r.size,
        disabled: r.disabled,
        readonly: r.readonly,
        placeholder: r.placeholder,
        name: r.name,
        autocomplete: r.autocomplete,
        maxlength: r.maxlength,
        "aria-describedby": i.strengthDescribedby
      }, i.passthroughAttrs, {
        onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
        onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
      }), {
        append: v(() => [
          c("button", {
            type: "button",
            class: "ui-password-toggle",
            "aria-label": i.toggleAriaLabel,
            "aria-pressed": a.visible ? "true" : "false",
            disabled: r.disabled,
            onClick: t[0] || (t[0] = (d) => a.visible = !a.visible)
          }, [
            _(u, {
              name: a.visible ? "eye-slash" : "eye",
              size: "xs"
            }, null, 8, ["name"])
          ], 8, Da)
        ]),
        _: 1
        /* STABLE */
      }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
      i.showStrengthMeter ? (s(), l("div", {
        key: 0,
        id: a.fallbackStrengthId,
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
            class: y(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
          },
          m(i.strengthText),
          3
          /* TEXT, CLASS */
        )) : f("v-if", !0)
      ], 8, Ea)) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ra = /* @__PURE__ */ x(za, [["render", Oa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Password.vue"]]), Va = ["bar", "circle"], Ce = ["sm", "md", "lg", "xl", "2xl"], Te = ["thin", "md"], Ba = ["default", "weak", "fair", "good", "strong"], Q = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, Fa = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, Na = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Va.includes(e)
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
      validator: (e) => Ba.includes(e)
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
      const e = Q[this.circleSizeKey] ?? Q.sm, t = Fa[this.circleSizeKey] ?? 2, r = (e - t) / 2, n = e / 2, a = 2 * Math.PI * r, i = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: n, circumference: a, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ua = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], $a = ["width", "height", "viewBox"], Ha = ["cx", "cy", "r", "stroke-width"], ja = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Wa = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Ya(e, t, r, n, a, i) {
  return s(), l("div", {
    class: y(i.rootClass),
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
      }, null, 8, Ha),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, ja)
    ], 8, $a)) : (s(), l("div", Wa, [
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
  ], 14, Ua);
}
const Ga = /* @__PURE__ */ x(Na, [["render", Ya], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Progress.vue"]]), qa = N("ui-sheet"), Ka = ["left", "right"], Za = ["sm", "md", "lg", "xl"], Xa = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Qa = {
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
      validator: (e) => Ka.includes(e)
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
      validator: (e) => Za.includes(e)
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
      validator: (e) => e == null || Xa.includes(e)
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
    const e = qa();
    return {
      titleId: `ui-sheet-title-${e}`,
      descriptionId: `ui-sheet-desc-${e}`,
      portalReady: !1,
      focusFallbackTimer: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? this.scheduleInitialFocus() : this.clearFocusFallback();
      },
      flush: "post"
    }
  },
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.clearFocusFallback();
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
    rootLayerClasses() {
      return T(
        "ui-sheet-root fixed inset-0 flex outline-none",
        this.side === "left" ? "justify-start" : "justify-end",
        !this.overlay && "ui-sheet-root--no-overlay"
      );
    }
  },
  methods: {
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
}, Ja = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], en = {
  key: 0,
  class: "ui-card-header shrink-0"
}, tn = ["id"], rn = {
  key: 1,
  class: "ui-sheet-header__icon"
}, sn = {
  key: 2,
  class: "ui-sheet-header__actions"
}, an = ["id"], nn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function ln(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("ui-button"), o = k("Divider");
  return s(), l(
    S,
    null,
    [
      f(" Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. "),
      a.portalReady ? (s(), b(q, {
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
                class: y(i.rootLayerClasses),
                tabindex: "-1",
                role: "presentation",
                onKeydown: t[2] || (t[2] = (...d) => i.onLayerKeydown && i.onLayerKeydown(...d))
              },
              [
                r.overlay ? (s(), l("div", {
                  key: 0,
                  class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
                  "aria-hidden": "true",
                  onClick: t[0] || (t[0] = (...d) => i.onBackdrop && i.onBackdrop(...d))
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
                  i.hasHeaderBlock ? (s(), l("div", en, [
                    g(e.$slots, "header", {}, () => [
                      i.hasDefaultHeader ? (s(), l(
                        "div",
                        {
                          key: 0,
                          class: y(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                        },
                        [
                          r.title ? (s(), l("h3", {
                            key: 0,
                            id: a.titleId,
                            class: "ui-sheet-header__title ui-heading-3"
                          }, m(r.title), 9, tn)) : f("v-if", !0),
                          r.icon ? (s(), l("span", rn, [
                            _(u, {
                              name: r.icon,
                              type: i.resolvedIconType,
                              size: "sm"
                            }, null, 8, ["name", "type"])
                          ])) : f("v-if", !0),
                          e.$slots.append || e.$slots.actions ? (s(), l("div", sn, [
                            g(e.$slots, "append"),
                            g(e.$slots, "actions")
                          ])) : f("v-if", !0),
                          r.showClose ? (s(), b(h, {
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
                            id: a.descriptionId,
                            class: "ui-sheet-header__description ui-text-default"
                          }, m(r.description), 9, an)) : f("v-if", !0)
                        ],
                        2
                        /* CLASS */
                      )) : f("v-if", !0)
                    ])
                  ])) : f("v-if", !0),
                  e.$slots.toolbar ? (s(), l("div", nn, [
                    g(e.$slots, "toolbar")
                  ])) : f("v-if", !0),
                  i.showHeaderDivider ? (s(), b(o, {
                    key: 2,
                    spacing: "none",
                    class: "!my-0 shrink-0"
                  })) : f("v-if", !0),
                  e.$slots.default ? (s(), l(
                    "div",
                    {
                      key: 3,
                      class: y(["ui-card-body ui-text-default", {
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
                      class: y(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
                    },
                    [
                      g(e.$slots, "footer")
                    ],
                    2
                    /* CLASS */
                  )) : f("v-if", !0)
                ], 16, Ja)
              ],
              34
              /* CLASS, NEED_HYDRATION */
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
const on = /* @__PURE__ */ x(Qa, [["render", ln], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Sheet.vue"]]), un = ["sm", "md", "lg", "full"], Ie = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, cn = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => un.includes(e)
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
}, dn = {
  key: 0,
  class: "ui-menu-header"
}, hn = { class: "ui-menu-body" }, fn = {
  key: 1,
  class: "ui-menu-footer"
};
function pn(e, t, r, n, a, i) {
  return s(), l(
    "nav",
    P({ class: i.rootClass }, i.passthroughAttrs),
    [
      e.$slots.header ? (s(), l("div", dn, [
        g(e.$slots, "header")
      ])) : f("v-if", !0),
      c("div", hn, [
        g(e.$slots, "default")
      ]),
      e.$slots.footer ? (s(), l("div", fn, [
        g(e.$slots, "footer")
      ])) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const mn = /* @__PURE__ */ x(cn, [["render", pn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Menu.vue"]]), gn = {
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
}, vn = {
  key: 0,
  class: "ui-menu-group-label"
}, bn = { class: "ui-menu-group-items" };
function yn(e, t, r, n, a, i) {
  return s(), l(
    "div",
    P({ class: i.groupClass }, i.passthroughAttrs),
    [
      r.label ? (s(), l(
        "p",
        vn,
        m(r.label),
        1
        /* TEXT */
      )) : f("v-if", !0),
      c("div", bn, [
        g(e.$slots, "default")
      ])
    ],
    16
    /* FULL_PROPS */
  );
}
const _n = /* @__PURE__ */ x(gn, [["render", yn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuGroup.vue"]]), kn = {
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
function wn(e, t, r, n, a, i) {
  const u = k("ui-button");
  return s(), b(u, P({
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
const xn = /* @__PURE__ */ x(kn, [["render", wn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuItem.vue"]]), Sn = {
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
}, Cn = ["aria-label"];
function Tn(e, t, r, n, a, i) {
  return s(), l("div", P({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Cn);
}
const Ln = /* @__PURE__ */ x(Sn, [["render", Tn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/MenuNav.vue"]]), In = ["sm", "md", "lg"], Pn = ["button", "submit", "reset"], Pe = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ae = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, An = {
  name: "SidebarItem",
  mixins: [E],
  components: { RouterLink: Zt },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => Pn.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || In.includes(e)
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
      if (e == null || typeof e != "object" || e.type === Gt) return !1;
      if (e.type === qt)
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
}, Mn = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], zn = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Dn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, En = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, On = ["type", "disabled", "aria-current"], Rn = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Vn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Bn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Fn(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("RouterLink");
  return i.hasRouterTo ? (s(), b(h, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: v(({ href: o, navigate: d }) => [
      c("a", P({
        href: o,
        class: i.itemClasses,
        "aria-current": r.active ? "page" : void 0,
        "aria-disabled": r.disabled ? "true" : void 0,
        tabindex: r.disabled ? -1 : void 0
      }, i.forwardedAttrs, {
        onClick: (p) => i.onRouterLinkClick(p, d)
      }), [
        i.usesCubedCenterLayout ? (s(), l("span", zn, [
          r.prefixIcon ? (s(), b(u, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), b(u, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (s(), l(
          S,
          { key: 1 },
          [
            r.prefixIcon ? (s(), l("span", Dn, [
              _(u, {
                size: i.inlineIconSize,
                name: r.prefixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0),
            c(
              "span",
              {
                class: y(i.textContentClass)
              },
              [
                g(e.$slots, "default")
              ],
              2
              /* CLASS */
            ),
            r.suffixIcon ? (s(), l("span", En, [
              _(u, {
                size: i.inlineIconSize,
                name: r.suffixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ], 16, Mn)
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
    i.usesCubedCenterLayout ? (s(), l("span", Rn, [
      r.prefixIcon ? (s(), b(u, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), b(u, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (s(), l(
      S,
      { key: 1 },
      [
        r.prefixIcon ? (s(), l("span", Vn, [
          _(u, {
            size: i.inlineIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0),
        c(
          "span",
          {
            class: y(i.textContentClass)
          },
          [
            g(e.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        r.suffixIcon ? (s(), l("span", Bn, [
          _(u, {
            size: i.inlineIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    ))
  ], 16, On));
}
const Nn = /* @__PURE__ */ x(An, [["render", Fn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/SidebarItem.vue"]]), Un = {
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
}, $n = {
  ref: "root",
  class: "ui-step"
};
function Hn(e, t, r, n, a, i) {
  return Ne((s(), l(
    "div",
    $n,
    [
      g(e.$slots, "default")
    ],
    512
    /* NEED_PATCH */
  )), [
    [Ue, r.active]
  ]);
}
const jn = /* @__PURE__ */ x(Un, [["render", Hn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Step.vue"]]), Wn = ["horizontal", "vertical"], Yn = ["default", "pills"], Gn = {
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
      validator: (e) => Yn.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Wn.includes(e)
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
}, qn = ["aria-label"], Kn = { class: "ui-stepper-pills-track" }, Zn = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Xn = { class: "flex w-full min-w-0 items-center justify-center" }, Qn = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Jn = {
  key: 1,
  class: "tabular-nums"
}, el = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, tl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, il = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, rl = { class: "flex flex-col items-center" }, sl = {
  key: 1,
  class: "tabular-nums"
}, al = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, nl = { class: "ui-stepper-title" }, ll = {
  key: 0,
  class: "ui-stepper-description"
};
function ol(e, t, r, n, a, i) {
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
        c("div", Kn, [
          (s(!0), l(
            S,
            null,
            z(i.normalizedSteps, (h, o) => (s(), b(H(r.interactive ? "button" : "span"), P({
              key: o,
              class: ["ui-stepper-pill", i.pillClass(o)],
              role: "listitem",
              "aria-current": o === r.modelValue ? "step" : void 0,
              "aria-label": h.title
            }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
              onClick: (d) => r.interactive ? i.go(o) : void 0
            }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        r.showLabel ? (s(), l(
          "p",
          Zn,
          m(i.pillsLabel),
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
          z(i.normalizedSteps, (h, o) => (s(), l("div", {
            key: o,
            class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
            role: "listitem"
          }, [
            c("div", Xn, [
              o > 0 ? (s(), l(
                "span",
                {
                  key: 0,
                  class: y(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : (s(), l("span", Qn)),
              (s(), b(H(r.interactive ? "button" : "div"), P({
                class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
                "aria-current": o === r.modelValue ? "step" : void 0,
                "aria-label": h.title
              }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
                onClick: (d) => r.interactive ? i.go(o) : void 0
              }), {
                default: v(() => [
                  h.icon ? (s(), b(u, {
                    key: 0,
                    name: h.icon,
                    type: h.iconType || "light",
                    size: "sm"
                  }, null, 8, ["name", "type"])) : (s(), l(
                    "span",
                    Jn,
                    m(o + 1),
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
                  class: y(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : (s(), l("span", el))
            ]),
            c(
              "p",
              tl,
              m(h.title),
              1
              /* TEXT */
            ),
            h.description ? (s(), l(
              "p",
              il,
              m(h.description),
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
          z(i.normalizedSteps, (h, o) => (s(), l("div", {
            key: o,
            class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
            role: "listitem"
          }, [
            c("div", rl, [
              (s(), b(H(r.interactive ? "button" : "div"), P({
                class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
                "aria-current": o === r.modelValue ? "step" : void 0,
                "aria-label": h.title
              }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
                onClick: (d) => r.interactive ? i.go(o) : void 0
              }), {
                default: v(() => [
                  h.icon ? (s(), b(u, {
                    key: 0,
                    name: h.icon,
                    type: h.iconType || "light",
                    size: "sm"
                  }, null, 8, ["name", "type"])) : (s(), l(
                    "span",
                    sl,
                    m(o + 1),
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
                  class: y(["ui-stepper-vrail", i.verticalRailClass(o)]),
                  "aria-hidden": "true"
                },
                null,
                2
                /* CLASS */
              )) : f("v-if", !0)
            ]),
            c("div", al, [
              c(
                "p",
                nl,
                m(h.title),
                1
                /* TEXT */
              ),
              h.description ? (s(), l(
                "p",
                ll,
                m(h.description),
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
  ], 16, qn);
}
const ul = /* @__PURE__ */ x(Gn, [["render", ol], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Stepper.vue"]]), cl = N("ui-slider"), dl = {
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
    return { fallbackId: cl() };
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, hl = {
  key: 0,
  class: "ui-slider-header"
}, fl = {
  key: 0,
  class: "ui-form-label"
}, pl = {
  key: 1,
  class: "ui-slider-value"
}, ml = { class: "ui-slider-rail" }, gl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], vl = {
  key: 1,
  class: "ui-slider-scale"
}, bl = { key: 0 }, yl = { key: 1 };
function _l(e, t, r, n, a, i) {
  const u = k("ui-progress");
  return s(), l(
    "div",
    {
      class: y(i.rootClass)
    },
    [
      r.label || i.hasValue ? (s(), l("div", hl, [
        r.label ? (s(), l(
          "span",
          fl,
          m(r.label),
          1
          /* TEXT */
        )) : f("v-if", !0),
        i.hasValue ? (s(), l(
          "span",
          pl,
          m(r.valueText),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0),
      c("div", ml, [
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
          onInput: t[0] || (t[0] = (...h) => i.onNativeInput && i.onNativeInput(...h)),
          onChange: t[1] || (t[1] = (...h) => i.onChange && i.onChange(...h))
        }), null, 16, gl)
      ]),
      r.minLabel || r.maxLabel ? (s(), l("div", vl, [
        r.minLabel ? (s(), l(
          "span",
          bl,
          m(r.minLabel),
          1
          /* TEXT */
        )) : f("v-if", !0),
        r.maxLabel ? (s(), l(
          "span",
          yl,
          m(r.maxLabel),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const kl = /* @__PURE__ */ x(dl, [["render", _l], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Slider.vue"]]), wl = {
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
}, xl = { class: "ui-table-scroll" };
function Sl(e, t, r, n, a, i) {
  return s(), l("div", xl, [
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
const Cl = /* @__PURE__ */ x(wl, [["render", Sl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Table.vue"]]), Tl = {
  name: "TableBody"
}, Ll = { class: "ui-table-body" };
function Il(e, t, r, n, a, i) {
  return s(), l("tbody", Ll, [
    g(e.$slots, "default")
  ]);
}
const Pl = /* @__PURE__ */ x(Tl, [["render", Il], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableBody.vue"]]), Al = ["left", "center", "right"], Ml = ["title", "secondary", "body"], zl = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Al.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Ml.includes(e)
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
}, Dl = ["colspan"];
function El(e, t, r, n, a, i) {
  return s(), l("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: y(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, Dl);
}
const Ol = /* @__PURE__ */ x(zl, [["render", El], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableCell.vue"]]), Rl = ["left", "center", "right"], Vl = ["sm", "md", "lg"], Bl = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Rl.includes(e)
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
      if (!(this.iconCol || Vl.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Fl(e, t, r, n, a, i) {
  return s(), l(
    "th",
    {
      class: y(i.rootClass),
      style: D(i.widthStyle)
    },
    [
      g(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Nl = /* @__PURE__ */ x(Bl, [["render", Fl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableHead.vue"]]), Ul = {
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
function $l(e, t, r, n, a, i) {
  return s(), l(
    "thead",
    {
      class: y(i.rootClass)
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Hl = /* @__PURE__ */ x(Ul, [["render", $l], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableHeader.vue"]]), jl = {
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
}, Wl = { class: "ui-table-pagination" }, Yl = { class: "ui-table-pagination-meta" }, Gl = { class: "ui-table-pagination-nav" }, ql = { class: "ui-table-pagination-page" };
function Kl(e, t, r, n, a, i) {
  const u = k("ui-button");
  return s(), l("div", Wl, [
    c("div", Yl, [
      g(e.$slots, "meta", {}, () => [
        I(
          m(r.metaText),
          1
          /* TEXT */
        )
      ])
    ]),
    c("div", Gl, [
      _(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (h) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c(
        "div",
        ql,
        m(r.pageLabel),
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
        onClick: t[1] || (t[1] = (h) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Zl = /* @__PURE__ */ x(jl, [["render", Kl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TablePagination.vue"]]), Xl = ["none", "soft", "strong"], Ql = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Xl.includes(e)
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
function Jl(e, t, r, n, a, i) {
  return s(), l(
    "tr",
    {
      class: y(i.rootClass)
    },
    [
      g(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const eo = /* @__PURE__ */ x(Ql, [["render", Jl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TableRow.vue"]]), to = {
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
}, io = ["id", "aria-labelledby"];
function ro(e, t, r, n, a, i) {
  return Ne((s(), l("div", P({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, io)), [
    [Ue, i.isActive]
  ]);
}
const so = /* @__PURE__ */ x(to, [["render", ro], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TabPanel.vue"]]), Me = Symbol("uiThemeMode"), ao = {
  name: "ThemeProvider",
  inject: {
    parentDefaults: { from: ye, default: () => be },
    parentMode: { from: Me, default: null }
  },
  provide() {
    return {
      [ye]: this.providedDefaults,
      [Me]: Kt(() => this.resolvedMode),
      [tt]: () => this.$refs.portal || null
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
      return { ...this.pkg ? Je(this.pkg, this.resolvedMode) : {}, ...et(this.overrides, this.resolvedMode) };
    },
    mergedDefaults() {
      var e;
      return Qe({
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
}, no = {
  ref: "portal",
  class: "ui-theme-provider-portal"
};
function lo(e, t, r, n, a, i) {
  return s(), b(H(r.tag), {
    class: y(["ui-theme-provider", { dark: i.resolvedMode === "dark", "ui-theme-provider--background": r.background }]),
    "data-ui-theme": i.themeId,
    "data-ui-mode": i.resolvedMode,
    style: D(i.cssVars)
  }, {
    default: v(() => [
      c(
        "div",
        no,
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
const oo = /* @__PURE__ */ x(ao, [["render", lo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ThemeProvider.vue"]]);
function $(e) {
  return String(e).padStart(2, "0");
}
function Ge(e, t = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const n = Number(r[1]), a = Number(r[2]);
  if (!Number.isFinite(n) || !Number.isFinite(a))
    return String(e || "");
  if (t === "HH:mm")
    return `${$(n)}:${$(a)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const i = n >= 12 ? "PM" : "AM";
    return `${n % 12 || 12}:${$(a)} ${i}`;
  }
  return `${$(n)}:${$(a)}`;
}
function uo(e, t, r = "HH:mm") {
  return Ge(`${e}:${t}`, r);
}
const co = N("ui-timepicker"), le = 40;
function oe(e) {
  return String(e).padStart(2, "0");
}
const ho = {
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
      fallbackId: co(),
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
      return Ee(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? uo(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? Ge(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (t = Math.min(23, Math.max(0, parseInt(n[1], 10))), r = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const a = this.minuteValues;
      let i = a[0] ?? 0, u = 999;
      for (const h of a) {
        const o = Math.abs(h - r);
        o < u && (u = o, i = h);
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
      const n = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, i = Math.round((a - n - r / 2) / r);
      return Math.min(t, Math.max(0, i));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelItemHeight(e), n = this.wheelSpacerTop(e);
      return Math.max(0, n + t * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: r = !1 } = {}) {
      if (!e) return;
      const n = this.scrollTopForIndex(e, t);
      r && typeof e.scrollTo == "function" ? e.scrollTo({ top: n, behavior: "smooth" }) : e.scrollTop = n;
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
      const n = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, fo = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, po = { class: "ui-timepicker-wheels" }, mo = { class: "ui-timepicker-wheels-row" }, go = ["aria-valuenow", "aria-label"], vo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, bo = { class: "ui-timepicker-wheel-spacer" }, yo = ["onClick"], _o = ["aria-valuenow", "aria-label"], ko = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, wo = { class: "ui-timepicker-wheel-spacer" }, xo = ["onClick"], So = { class: "min-w-0 flex-1 truncate text-foreground" }, Co = { class: "ui-timepicker-panel w-full p-2" }, To = { class: "ui-timepicker-wheels" }, Lo = { class: "ui-timepicker-wheels-row" }, Io = ["aria-valuenow", "aria-label"], Po = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ao = { class: "ui-timepicker-wheel-spacer" }, Mo = ["onClick"], zo = ["aria-valuenow", "aria-label"], Do = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Eo = { class: "ui-timepicker-wheel-spacer" }, Oo = ["onClick"];
function Ro(e, t, r, n, a, i) {
  const u = k("ui-button"), h = k("ui-popover");
  return s(), l(
    "div",
    {
      class: y([
        "ui-timepicker",
        r.embedded ? "ui-timepicker--embedded" : "",
        r.disabled ? "pointer-events-none opacity-50" : "",
        e.$attrs.class
      ])
    },
    [
      r.embedded ? (s(), l("div", fo, [
        c("div", po, [
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
          c("div", mo, [
            c("div", {
              class: "min-h-0 min-w-0 flex-1",
              role: "spinbutton",
              "aria-valuenow": a.draftHour,
              "aria-valuemin": "0",
              "aria-valuemax": "23",
              "aria-label": i.hourAriaLabel
            }, [
              c(
                "div",
                vo,
                [
                  c("div", bo, [
                    (s(!0), l(
                      S,
                      null,
                      z(i.hourOptions, (o) => (s(), l("button", {
                        key: "h-" + o,
                        type: "button",
                        tabindex: "-1",
                        class: y([
                          "ui-timepicker-wheel-item",
                          o === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                        ]),
                        onClick: (d) => i.selectHour(o)
                      }, m(i.pad2(o)), 11, yo))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                512
                /* NEED_PATCH */
              )
            ], 8, go),
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
              "aria-valuenow": a.draftMinute,
              "aria-valuemin": "0",
              "aria-valuemax": "59",
              "aria-label": i.minuteAriaLabel
            }, [
              c(
                "div",
                ko,
                [
                  c("div", wo, [
                    (s(!0), l(
                      S,
                      null,
                      z(i.minuteValues, (o, d) => (s(), l("button", {
                        key: "m-" + o,
                        type: "button",
                        tabindex: "-1",
                        class: y([
                          "ui-timepicker-wheel-item",
                          o === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                        ]),
                        onClick: (p) => i.selectMinute(d)
                      }, m(i.pad2(o)), 11, xo))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                512
                /* NEED_PATCH */
              )
            ], 8, _o)
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
      ])) : (s(), b(h, {
        key: 1,
        open: a.menuOpen,
        "onUpdate:open": t[0] || (t[0] = (o) => a.menuOpen = o),
        placement: "bottom-start",
        "match-trigger-width": !1,
        width: r.popoverWidth,
        disabled: r.disabled
      }, {
        trigger: v(({ open: o, toggle: d, close: p }) => [
          g(e.$slots, "trigger", {
            open: o,
            toggle: d,
            close: p
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
              onClick: d
            }, {
              default: v(() => [
                c(
                  "span",
                  So,
                  m(i.display),
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
          c("div", Co, [
            c("div", To, [
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
              c("div", Lo, [
                c("div", {
                  class: "min-h-0 min-w-0 flex-1",
                  role: "spinbutton",
                  "aria-valuenow": a.draftHour,
                  "aria-valuemin": "0",
                  "aria-valuemax": "23",
                  "aria-label": i.hourAriaLabel
                }, [
                  c(
                    "div",
                    Po,
                    [
                      c("div", Ao, [
                        (s(!0), l(
                          S,
                          null,
                          z(i.hourOptions, (o) => (s(), l("button", {
                            key: "h-" + o,
                            type: "button",
                            tabindex: "-1",
                            class: y([
                              "ui-timepicker-wheel-item",
                              o === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                            ]),
                            onClick: (d) => i.selectHour(o)
                          }, m(i.pad2(o)), 11, Mo))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  )
                ], 8, Io),
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
                  "aria-valuenow": a.draftMinute,
                  "aria-valuemin": "0",
                  "aria-valuemax": "59",
                  "aria-label": i.minuteAriaLabel
                }, [
                  c(
                    "div",
                    Do,
                    [
                      c("div", Eo, [
                        (s(!0), l(
                          S,
                          null,
                          z(i.minuteValues, (o, d) => (s(), l("button", {
                            key: "m-" + o,
                            type: "button",
                            tabindex: "-1",
                            class: y([
                              "ui-timepicker-wheel-item",
                              o === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                            ]),
                            onClick: (p) => i.selectMinute(d)
                          }, m(i.pad2(o)), 11, Oo))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  )
                ], 8, zo)
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
const Vo = /* @__PURE__ */ x(ho, [["render", Ro], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TimePicker.vue"]]), Bo = ["square", "video", "auto"], Fo = ["fill", "sm", "md", "lg"], ze = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, No = {
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
      validator: (e) => Bo.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Fo.includes(e)
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, Uo = ["src", "alt"], $o = ["aria-hidden"], Ho = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, jo = {
  key: 3,
  class: "ui-photo__overflow"
}, Wo = ["aria-label"], Yo = ["aria-label"], Go = { class: "ui-photo-preview__panel" }, qo = ["src", "alt"], Ko = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Zo(e, t, r, n, a, i) {
  const u = k("ui-icon"), h = k("ui-button");
  return s(), l(
    S,
    null,
    [
      (s(), b(H(i.rootTag), P({
        type: r.interactive ? "button" : void 0,
        class: i.rootClass
      }, i.rootBind, { onClick: i.onClick }), {
        default: v(() => [
          r.src && !a.imageFailed ? (s(), l("img", {
            key: 0,
            src: r.src,
            alt: i.resolvedAlt,
            class: "ui-photo__img",
            loading: "lazy",
            decoding: "async",
            onError: t[0] || (t[0] = (o) => a.imageFailed = !0)
          }, null, 40, Uo)) : (s(), l("span", {
            key: 1,
            class: "ui-photo__empty",
            "aria-hidden": r.interactive ? "true" : void 0
          }, [
            _(u, {
              name: "image",
              type: "light",
              class: "ui-photo__empty-icon"
            })
          ], 8, $o)),
          r.favorite ? (s(), l("span", Ho, [
            _(u, {
              name: "star",
              type: "light",
              size: "xs"
            })
          ])) : f("v-if", !0),
          r.overflowLabel ? (s(), l(
            "span",
            jo,
            m(r.overflowLabel),
            1
            /* TEXT */
          )) : f("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 16, ["type", "class", "onClick"])),
      (s(), b(q, { to: "body" }, [
        _(K, {
          name: "ui-photo-preview",
          appear: ""
        }, {
          default: v(() => [
            a.previewOpen ? (s(), l("div", {
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
              }, null, 8, Yo),
              c("div", Go, [
                _(h, {
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "xmark",
                  class: "ui-photo-preview__close",
                  "aria-label": i.closeLabel,
                  onClick: i.closePreview
                }, null, 8, ["aria-label", "onClick"]),
                i.showPrev ? (s(), b(h, {
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
                }, null, 8, qo)) : f("v-if", !0),
                i.showNext ? (s(), b(h, {
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
                  Ko,
                  m(i.counterLabel),
                  1
                  /* TEXT */
                )) : f("v-if", !0)
              ])
            ], 40, Wo)) : f("v-if", !0)
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
const Xo = /* @__PURE__ */ x(No, [["render", Zo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Photo.vue"]]), Qo = ["square", "video", "auto"], Jo = {
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
      validator: (e) => Qo.includes(e)
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
}, eu = ["data-count"], tu = ["aria-label"], iu = ["aria-label"], ru = { class: "ui-photo-preview__panel" }, su = ["src", "alt"], au = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function nu(e, t, r, n, a, i) {
  const u = k("ui-photo"), h = k("ui-button");
  return s(), l(
    S,
    null,
    [
      c("div", {
        class: y(["ui-photos", i.layoutClass]),
        "data-count": i.displayCount
      }, [
        (s(!0), l(
          S,
          null,
          z(i.visibleItems, (o, d) => (s(), b(u, {
            key: o.key || `${o.src}-${d}`,
            src: o.src,
            alt: o.alt || "",
            favorite: !!o.favorite,
            aspect: r.aspect,
            preview: r.preview,
            "gallery-index": d,
            "overflow-label": d === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
            "aria-label": o.alt || void 0,
            onOpenPreview: i.openPreviewAt
          }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 10, eu),
      (s(), b(q, { to: "body" }, [
        _(K, {
          name: "ui-photo-preview",
          appear: ""
        }, {
          default: v(() => [
            a.previewOpen ? (s(), l("div", {
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
              }, null, 8, iu),
              c("div", ru, [
                _(h, {
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  cubed: "",
                  "prefix-icon": "xmark",
                  class: "ui-photo-preview__close",
                  "aria-label": i.closeLabel,
                  onClick: i.closePreview
                }, null, 8, ["aria-label", "onClick"]),
                i.showPrev ? (s(), b(h, {
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
                }, null, 8, su)) : f("v-if", !0),
                i.showNext ? (s(), b(h, {
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
                  au,
                  m(i.counterLabel),
                  1
                  /* TEXT */
                )) : f("v-if", !0)
              ])
            ], 40, tu)) : f("v-if", !0)
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
const lu = /* @__PURE__ */ x(Jo, [["render", nu], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Photos.vue"]]);
function J(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function mu() {
  return {
    push: U,
    dismiss: rt,
    clear: it,
    info: (e) => U({ ...J(e), color: "info" }),
    success: (e) => U({ ...J(e), color: "success" }),
    warning: (e) => U({ ...J(e), color: "warning" }),
    danger: (e) => U({ ...J(e), color: "danger" })
  };
}
function gu(e = !1) {
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
    confirm: st
  };
}
const re = {
  en: lt,
  tr: nt
};
function bu(e = "tr") {
  return re[e] ?? re.tr;
}
const ou = [
  ["ui-action-card", si],
  ["ui-action-card-list", oi],
  ["ui-action-group", ot],
  ["ui-ai-button", fi],
  ["ui-alert", ut],
  ["ui-avatar", ct],
  ["ui-avatar-group", bi],
  ["ui-badge", dt],
  ["ui-button", ht],
  ["ui-card", ft],
  ["ui-checkbox", Ki],
  ["ui-checkbox-group", ir],
  ["ui-color-picker", Ei],
  ["ui-currency-input", We],
  ["ui-confirm-dialog", pt],
  ["ui-date-picker", mt],
  ["ui-date-range-picker", _r],
  ["ui-dialog", gt],
  ["ui-divider", Ve],
  ["ui-dropdown", vt],
  ["ui-empty", bt],
  ["ui-field", Tr],
  ["ui-field-action", Fr],
  ["ui-file", Xr],
  ["ui-form-row", yt],
  ["ui-guidance", Cs],
  ["ui-icon", _t],
  ["ui-icon-picker", Fs],
  ["ui-intro", ea],
  ["ui-input", kt],
  ["ui-price-display", da],
  ["ui-price-display-group", ma],
  ["ui-price-display-row", ka],
  ["ui-price-input", Ia],
  ["ui-price-text", fe],
  ["ui-password", Ra],
  ["ui-phone", wt],
  ["ui-pin", xt],
  ["ui-list", St],
  ["ui-list-item", Ct],
  ["ui-popover", Tt],
  ["ui-progress", Ga],
  ["ui-radio", Lt],
  ["ui-radio-group", It],
  ["ui-select", Pt],
  ["ui-sheet", on],
  ["ui-menu", mn],
  ["ui-menu-group", _n],
  ["ui-menu-item", xn],
  ["ui-menu-nav", Ln],
  ["ui-sidebar-item", Nn],
  ["ui-segment", At],
  ["ui-segment-group", Mt],
  ["ui-skeleton", zt],
  ["ui-slider", kl],
  ["ui-step", jn],
  ["ui-stepper", ul],
  ["ui-switch", Dt],
  ["ui-table", Cl],
  ["ui-table-body", Pl],
  ["ui-table-cell", Ol],
  ["ui-table-head", Nl],
  ["ui-table-header", Hl],
  ["ui-table-pagination", Zl],
  ["ui-table-row", eo],
  ["ui-tag", Et],
  ["ui-tab-list", Ot],
  ["ui-tab-panel", so],
  ["ui-tabs", Rt],
  ["ui-tab-trigger", Vt],
  ["ui-theme-provider", oo],
  ["ui-time-picker", Vo],
  ["ui-tooltip", Bt],
  ["ui-toast", Ft],
  ["ui-photo", Xo],
  ["ui-photos", lu]
];
let de = null;
function uu(e, t = {}) {
  const r = Fe(e);
  return Nt(r.id) || Ut(r), $t(r, t), de && Ht(de, { ...r.defaults, ...t.defaults }), r;
}
function cu(e, t = {}) {
  var w, L;
  const { i18n: r, locale: n, locales: a, theme: i, mode: u, overrides: h, inline: o, defaults: d, priceInput: p } = t;
  if (de = at(e, d), i && uu(i, { mode: u, overrides: h, inline: o, defaults: d }), p && Sa(p), (w = r == null ? void 0 : r.global) != null && w.mergeLocaleMessage) {
    const C = a ?? (n != null ? [n] : [
      typeof r.global.locale == "string" ? r.global.locale : ((L = r.global.locale) == null ? void 0 : L.value) ?? "tr"
    ]);
    for (const A of C) {
      const O = re[A];
      O ? r.global.mergeLocaleMessage(A, O) : typeof import.meta < "u" && console.warn(`[fewui] Bilinmeyen locale paketi: "${A}". Mevcut: ${Object.keys(re).join(", ")}`);
    }
  } else typeof import.meta < "u" && console.warn(
    '[fewui] app.use(UiLib, { i18n, locale: "tr" }) şeklinde i18n ve locale verin; aksi halde $t anahtarları çözülmez.'
  );
  for (const [C, A] of ou)
    e.component(C, A);
}
const yu = {
  install: cu
};
export {
  si as ActionCard,
  oi as ActionCardList,
  ot as ActionGroup,
  fi as AiButton,
  ut as Alert,
  ct as Avatar,
  bi as AvatarGroup,
  wu as BACKDROP_BLUR_SCALE,
  be as BASE_UI_DEFAULTS,
  dt as Badge,
  ht as Button,
  xu as CARD_PADDING_SCALE,
  ft as Card,
  Ki as Checkbox,
  ir as CheckboxGroup,
  Ei as ColorPicker,
  pt as ConfirmDialog,
  We as CurrencyInput,
  Su as DEFAULT_THEME_ID,
  Cu as DERIVED_VARS,
  mt as DatePicker,
  _r as DateRangePicker,
  gt as Dialog,
  Ve as Divider,
  vt as Dropdown,
  bt as Empty,
  Tu as FEW_COLOR_SCALE,
  Lu as FEW_PALETTE_ID,
  Iu as FEW_PRIMARY,
  Pu as FEW_PRIMARY_FOREGROUND,
  Tr as Field,
  Fr as FieldAction,
  Xr as File,
  yt as FormRow,
  Au as GOOGLE_FONTS_CATALOG,
  Cs as Guidance,
  _t as Icon,
  Fs as IconPicker,
  kt as Input,
  ea as Intro,
  St as List,
  Ct as ListItem,
  Mu as MIX_FROM_MAP,
  mn as Menu,
  _n as MenuGroup,
  xn as MenuItem,
  Ln as MenuNav,
  wa as PRICE_FORMATS,
  Ra as Password,
  wt as Phone,
  Xo as Photo,
  lu as Photos,
  xt as Pin,
  Tt as Popover,
  Ia as PriceInput,
  Ga as Progress,
  Lt as Radio,
  It as RadioGroup,
  zu as STATUS_TONES,
  At as Segment,
  Mt as SegmentGroup,
  Pt as Select,
  on as Sheet,
  Nn as SidebarItem,
  zt as Skeleton,
  kl as Slider,
  jn as Step,
  ul as Stepper,
  Dt as Switch,
  Du as THEME_CUSTOM_CSS_ID,
  Eu as TOAST_GROUP_WINDOW_MS,
  Ou as TOKEN_GROUPS,
  Ot as TabList,
  so as TabPanel,
  Vt as TabTrigger,
  Cl as Table,
  Pl as TableBody,
  Ol as TableCell,
  Nl as TableHead,
  Hl as TableHeader,
  Zl as TablePagination,
  eo as TableRow,
  Rt as Tabs,
  Et as Tag,
  oo as ThemeProvider,
  Vo as TimePicker,
  Ft as Toast,
  Bt as Tooltip,
  ye as UI_DEFAULTS_KEY,
  Ru as UI_ICON_TYPES,
  tt as UI_PORTAL_KEY,
  Vu as applyGoogleFontsCatalogPreview,
  Bu as applyGoogleFontsForTheme,
  Fu as applyThemeCustomCss,
  $t as applyUiTheme,
  Nu as buildGoogleFontsLinkTag,
  Uu as buildGoogleFontsStylesheetUrl,
  $u as buildThemeCss,
  Hu as buildThemeEnforcementCss,
  ju as buildThemeStyleAttr,
  Wu as clearThemeCustomCss,
  it as clearToasts,
  Yu as clearUiTheme,
  Gu as computeThemeVars,
  qu as createUiId,
  N as createUiIdFactory,
  yu as default,
  Ku as defineTheme,
  Zu as deriveBrandColorsFromPrimary,
  rt as dismissToast,
  Xu as ensureContrastForMode,
  Qu as expandTokens,
  Ju as extendTheme,
  pu as formatCurrencyAmount,
  ec as formatFontFamily,
  tc as formatGoogleFontFamilyName,
  Ri as formatMoneyInput,
  $e as getCurrencySymbol,
  ic as getFewPrimaryColors,
  je as getMoneySeparators,
  Ca as getPriceInputConfig,
  rc as getThemeCssPath,
  Nt as getThemePackage,
  bu as getUiMessages,
  sc as googleFontSelectOptions,
  G as iconTypeProp,
  ac as isThemePackage,
  nc as listThemes,
  lc as mergeTokens,
  Qe as mergeUiDefaults,
  oc as parseHex,
  Oi as parseLocalizedMoneyInput,
  uc as parseOklchLightness,
  cc as pickContrastForeground,
  Re as pickPassthroughAttrs,
  at as provideUiDefaults,
  U as pushToast,
  Ut as registerTheme,
  dc as relativeLuminance,
  st as requestConfirm,
  hc as resetUiIds,
  fc as resolveControlSize,
  ae as resolveCurrencyCode,
  Fe as resolveTheme,
  De as resolveThemeControlSize,
  Ee as resolveThemeDefault,
  pc as resolveThemeFontFamilies,
  Y as resolveThemeIconType,
  Je as resolveThemeVars,
  M as resolveUiText,
  He as sanitizeMoneyInput,
  Sa as setPriceInputConfig,
  mc as setToastExpanded,
  Ht as setUiDefaults,
  uu as setUiTheme,
  gc as setUiThemeMode,
  vc as themeConfigToTokens,
  se as themeIconTypeComputed,
  bc as toCssVarName,
  yc as toggleToastExpanded,
  E as uiDefaultsMixin,
  Xe as uiPortalMixin,
  vu as useConfirm,
  gu as useDialog,
  mu as useToast,
  _c as useUiDefaults,
  kc as withDerivedBrandTokens,
  wc as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
