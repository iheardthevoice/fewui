import { resolveComponent as v, openBlock as l, createElementBlock as n, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as d, toDisplayString as p, normalizeStyle as E, createVNode as S, mergeProps as C, withCtx as g, resolveDynamicComponent as F, withModifiers as O, createTextVNode as T, Fragment as L, renderList as z, withKeys as le, reactive as ne, normalizeProps as Me, guardReactiveProps as Pe, createSlots as j, Teleport as Q, Transition as X, readonly as $e, withDirectives as He, vShow as We } from "vue";
import { _ as w, K as x, a9 as M, a4 as Ge, V as Ye, e as oe, U as Ue, a0 as Ke, M as Ve, Z as je, a3 as qe, J as Ze, O as Qe, a1 as $, aa as Ee, w as Xe, Q as Je, A as et, a as tt, B as it, b as rt, C as lt, c as at, d as st, E as nt, i as ot, I as ut, j as ct, P as dt, k as ht, R as ft, l as mt, S as pt, m as gt, r as bt, o as yt, q as vt, p as _t, t as kt, s as wt } from "./index-TOS2HRHn.js";
import { F as Bo, f as Ro, g as Do, h as Fo, G as No, D as $o, T as Ho, n as Wo, u as Go, v as Yo, x as Uo, y as Ko, z as jo, H as qo, L as Zo, N as Qo, W as Xo, X as Jo, Y as eu, $ as tu, a2 as iu, a5 as ru, a6 as lu, a7 as au, a8 as su, ab as nu } from "./index-TOS2HRHn.js";
const St = ["solid", "regular", "brands", "light", "duotone", "thin"], xt = {
  name: "ActionCard",
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
    iconType: {
      type: String,
      default: "light",
      validator: (e) => St.includes(e)
    },
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
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, Ct = ["disabled"], Lt = { class: "ui-action-card__content" }, Tt = { class: "ui-action-card__title" }, It = {
  key: 0,
  class: "ui-action-card__description"
};
function At(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (u) => e.$emit("click", u))
  }, [
    b(e.$slots, "leading", {}, () => [
      r.showDefaultLeading ? (l(), y(o, {
        key: 0,
        name: i.icon,
        type: i.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    d("span", Lt, [
      d("span", Tt, p(i.title), 1),
      i.description ? (l(), n("span", It, p(i.description), 1)) : f("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (l(), y(o, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, Ct);
}
const zt = /* @__PURE__ */ w(xt, [["render", At]]), Ot = {
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
}, Mt = ["aria-label"];
function Pt(e, t, i, s, a, r) {
  return l(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: E(r.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Mt);
}
const Vt = /* @__PURE__ */ w(Ot, [["render", Pt]]), Et = {
  name: "AiButton",
  inheritAttrs: !1,
  props: {
    prefixIcon: {
      type: String,
      default: "wand-magic-sparkles"
    },
    size: {
      type: String,
      default: "md"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    isBlock() {
      return this.fulled || this.block;
    },
    resolvedSize() {
      return this.size === "sm" || this.size === "lg" ? this.size : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, Bt = ["data-size"], Rt = { class: "ui-ai-button__surface" };
function Dt(e, t, i, s, a, r) {
  const o = v("ui-button");
  return l(), n("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": r.isBlock,
      "ui-ai-button--disabled": i.disabled || i.loading
    }]),
    "data-size": r.resolvedSize,
    style: E(r.rootStyle)
  }, [
    t[1] || (t[1] = d("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    d("span", Rt, [
      S(o, C({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: i.size,
        "prefix-icon": i.prefixIcon,
        disabled: i.disabled,
        loading: i.loading,
        fulled: r.isBlock
      }, e.$attrs, {
        onClick: t[0] || (t[0] = (u) => e.$emit("click", u))
      }), {
        default: g(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Bt);
}
const Ft = /* @__PURE__ */ w(Et, [["render", Dt]]), Nt = ["xs", "sm", "md", "lg", "xl"], fe = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, me = Object.freeze({
  A: { bg: "hsla(0, 72%, 52%, 0.18)", fg: "hsl(0, 65%, 48%)" },
  B: { bg: "hsla(25, 88%, 52%, 0.18)", fg: "hsl(25, 75%, 45%)" },
  C: { bg: "hsla(38, 92%, 50%, 0.18)", fg: "hsl(38, 80%, 42%)" },
  D: { bg: "hsla(48, 96%, 48%, 0.18)", fg: "hsl(48, 85%, 40%)" },
  E: { bg: "hsla(58, 90%, 46%, 0.18)", fg: "hsl(58, 78%, 38%)" },
  F: { bg: "hsla(75, 72%, 42%, 0.18)", fg: "hsl(75, 65%, 36%)" },
  G: { bg: "hsla(88, 62%, 42%, 0.18)", fg: "hsl(88, 55%, 36%)" },
  H: { bg: "hsla(100, 58%, 40%, 0.18)", fg: "hsl(100, 52%, 34%)" },
  I: { bg: "hsla(142, 58%, 40%, 0.18)", fg: "hsl(142, 52%, 34%)" },
  J: { bg: "hsla(158, 62%, 38%, 0.18)", fg: "hsl(158, 55%, 32%)" },
  K: { bg: "hsla(168, 64%, 38%, 0.18)", fg: "hsl(168, 58%, 32%)" },
  L: { bg: "hsla(175, 68%, 40%, 0.18)", fg: "hsl(175, 60%, 34%)" },
  M: { bg: "hsla(186, 72%, 42%, 0.18)", fg: "hsl(186, 65%, 36%)" },
  N: { bg: "hsla(198, 76%, 44%, 0.18)", fg: "hsl(198, 68%, 38%)" },
  O: { bg: "hsla(210, 78%, 48%, 0.18)", fg: "hsl(210, 70%, 42%)" },
  P: { bg: "hsla(225, 76%, 52%, 0.18)", fg: "hsl(225, 68%, 46%)" },
  Q: { bg: "hsla(238, 72%, 56%, 0.18)", fg: "hsl(238, 65%, 50%)" },
  R: { bg: "hsla(252, 68%, 58%, 0.18)", fg: "hsl(252, 62%, 52%)" },
  S: { bg: "hsla(268, 64%, 58%, 0.18)", fg: "hsl(268, 58%, 52%)" },
  T: { bg: "hsla(282, 62%, 56%, 0.18)", fg: "hsl(282, 56%, 50%)" },
  U: { bg: "hsla(296, 58%, 54%, 0.18)", fg: "hsl(296, 52%, 48%)" },
  V: { bg: "hsla(310, 62%, 52%, 0.18)", fg: "hsl(310, 56%, 46%)" },
  W: { bg: "hsla(322, 66%, 50%, 0.18)", fg: "hsl(322, 60%, 44%)" },
  X: { bg: "hsla(334, 70%, 50%, 0.18)", fg: "hsl(334, 64%, 44%)" },
  Y: { bg: "hsla(346, 74%, 52%, 0.18)", fg: "hsl(346, 68%, 46%)" },
  Z: { bg: "hsla(358, 78%, 52%, 0.18)", fg: "hsl(358, 72%, 46%)" },
  default: { bg: "hsla(220, 14%, 50%, 0.15)", fg: "hsl(220, 12%, 45%)" }
}), pe = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function $t(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return pe[t] && (t = pe[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Ht(e) {
  var s;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const a = i[0][0] || "", r = i[i.length - 1][0] || "";
    return `${a}${r}`.toLocaleUpperCase("tr-TR");
  }
  return (((s = i[0]) == null ? void 0 : s[0]) || "?").toLocaleUpperCase("tr-TR");
}
const Wt = {
  name: "Avatar",
  inheritAttrs: !1,
  props: {
    /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
    src: {
      type: String,
      default: ""
    },
    /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
    name: {
      type: String,
      default: ""
    },
    /** `img` alt metni. */
    alt: {
      type: String,
      default: ""
    },
    /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
    fallback: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Nt.includes(e)
    },
    ring: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  data() {
    return {
      imageFailed: !1
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "span";
    },
    rootClass() {
      return x(
        "ui-avatar",
        fe[this.size] || fe.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
      return t;
    },
    rootBind() {
      if (!this.interactive)
        return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    initialsSource() {
      return this.name != null && this.name.trim() !== "" ? this.name.trim() : this.fallback != null && this.fallback.trim() !== "" ? this.fallback.trim() : (this.alt || "").trim();
    },
    displayInitials() {
      return Ht(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? $t(e[0]) : "default";
    },
    letterColors() {
      return me[this.colorLetterKey] || me.default;
    },
    showLetterTone() {
      return (!this.src || this.imageFailed) && this.displayInitials !== "?";
    },
    rootStyle() {
      if (this.showLetterTone)
        return {
          backgroundColor: this.letterColors.bg,
          color: this.letterColors.fg
        };
    },
    resolvedAlt() {
      return this.alt != null && this.alt !== "" ? this.alt : this.initialsSource ? this.initialsSource : this.displayInitials !== "?" ? `Avatar: ${this.displayInitials}` : "Avatar";
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    }
  },
  methods: {
    onRootClick(e) {
      this.interactive && this.$emit("click", e);
    }
  }
}, Gt = ["src", "alt"], Yt = ["role", "aria-label", "aria-hidden"];
function Ut(e, t, i, s, a, r) {
  return l(), y(F(r.rootTag), C({
    type: i.interactive ? "button" : void 0,
    class: r.rootClass,
    style: r.rootStyle
  }, r.rootBind, { onClick: r.onRootClick }), {
    default: g(() => [
      i.src && !a.imageFailed ? (l(), n("img", {
        key: 0,
        src: i.src,
        alt: r.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (o) => a.imageFailed = !0)
      }, null, 40, Gt)) : (l(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, p(r.displayInitials), 9, Yt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Kt = /* @__PURE__ */ w(Wt, [["render", Ut]]), jt = [
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
], qt = {
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
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      presetColors: jt
    };
  },
  computed: {
    rootClass() {
      return x(
        "ui-color-picker ui-color-picker--fulled w-full min-w-0",
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
}, Zt = ["disabled", "aria-expanded", "onClick"], Qt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Xt = { class: "ui-select-field-suffix" }, Jt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ei = { class: "ui-color-picker-panel" }, ti = { class: "ui-color-picker-panel__header" }, ii = { class: "ui-color-picker-panel__title" }, ri = { class: "ui-color-picker-swatches" }, li = ["title", "onClick"], ai = { class: "ui-color-picker-custom" }, si = { class: "ui-color-picker-panel__title" }, ni = { class: "ui-color-picker-custom__row" };
function oi(e, t, i, s, a, r) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: k(r.rootClass)
  }, [
    S(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => a.popoverOpen = m),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: g(({ open: m, toggle: _, close: A }) => [
        b(e.$slots, "trigger", {
          open: m,
          toggle: _,
          close: A
        }, () => [
          d("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            d("span", Qt, [
              r.localColor ? (l(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: r.localColor })
              }, null, 4)) : (l(), y(o, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            d("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !r.localColor }])
            }, p(r.displayValue), 3),
            d("span", Xt, [
              d("span", Jt, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Zt)
        ])
      ]),
      content: g(() => [
        d("div", ei, [
          d("div", ti, [
            d("span", ii, p(r.popoverTitleLabel), 1),
            r.localColor ? (l(), y(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: O(r.clearColor, ["stop"])
            }, {
              default: g(() => [
                T(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", ri, [
            (l(!0), n(L, null, z(a.presetColors, (m) => (l(), n("button", {
              key: m,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": r.localColor === m }]),
              style: E({ backgroundColor: m }),
              title: m,
              onClick: (_) => r.selectColor(m)
            }, [
              r.localColor === m ? (l(), y(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, li))), 128))
          ]),
          d("div", ai, [
            d("span", si, p(r.customColorLabelText), 1),
            d("div", ni, [
              S(c, {
                modelValue: r.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => r.localColor = m),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: r.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              d("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: E({ backgroundColor: r.localColor || "transparent" }),
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
const ui = /* @__PURE__ */ w(qt, [["render", oi]]), ge = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, W = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function J(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in W ? t : "TRY";
  const i = String(e).trim();
  if (ge[i])
    return ge[i];
  const s = i.toUpperCase();
  return W[s] ? s : t in W ? t : "TRY";
}
function Be(e) {
  var i;
  const t = J(e);
  if (W[t])
    return W[t];
  try {
    const a = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((r) => r.type === "currency");
    return ((i = a == null ? void 0 : a.value) == null ? void 0 : i.trim()) || t;
  } catch {
    return t;
  }
}
function To(e, t, i = "tr-TR") {
  const s = Number(e) || 0, a = J(t);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: a }).format(s);
  } catch {
    return `${Be(a)}${s.toFixed(2)}`;
  }
}
function Re(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const i = t.indexOf(".");
  if (i !== -1) {
    const s = t.slice(0, i), a = t.slice(i + 1).replace(/\./g, "");
    t = `${s}.${a}`;
  }
  return t;
}
function De(e = "tr-TR") {
  var t, i;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = s.find((a) => a.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((i = s.find((a) => a.type === "decimal")) == null ? void 0 : i.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function ci(e, t = "tr-TR") {
  const { group: i, decimal: s } = De(t);
  let a = String(e ?? "").trim();
  return a ? (a = a.split(i).join(""), a = a.split(s).join("."), Re(a)) : "";
}
function di(e, t = "tr-TR") {
  const i = Re(e);
  if (!i) return "";
  const { group: s, decimal: a } = De(t), [r = "", o] = i.split("."), c = (r.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return o === void 0 ? c : `${c}${a}${o}`;
}
let be = 0;
const hi = ["sm", "md", "lg"], fi = {
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
      default: "md",
      validator: (e) => hi.includes(e)
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
    return be += 1, { fallbackId: `ui-currency-input-${be}` };
  },
  computed: {
    displaySymbol() {
      return Be(this.currency);
    },
    resolvedCurrencyCode() {
      return J(this.currency);
    },
    innerValue: {
      get() {
        return di(this.modelValue, this.locale);
      },
      set(e) {
        const t = ci(e, this.locale);
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, mi = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function pi(e, t, i, s, a, r) {
  const o = v("ui-input");
  return l(), y(o, C({
    id: r.resolvedId,
    modelValue: r.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => r.innerValue = u),
    type: "text",
    inputmode: "decimal",
    class: "w-full",
    size: i.size,
    disabled: i.disabled,
    readonly: i.readonly,
    placeholder: i.placeholder,
    name: i.name,
    autocomplete: i.autocomplete,
    "aria-describedby": i.ariaDescribedby
  }, r.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (u) => e.$emit("focus", u)),
    onBlur: r.onBlur
  }), {
    prepend: g(() => [
      d("span", mi, p(r.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Fe = /* @__PURE__ */ w(fi, [["render", pi]]), gi = {
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
        const t = e.target.checked, i = this.uiCheckboxGroup.modelValue, s = Array.isArray(i) ? [...i] : [], a = s.findIndex((r) => Object.is(r, this.value));
        t && a === -1 ? s.push(this.value) : !t && a !== -1 && s.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], i = t.findIndex((s) => Object.is(s, this.value));
        i === -1 ? t.push(this.value) : t.splice(i, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, bi = ["type", "name", "value", "checked"], yi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, vi = { class: "ui-checkbox-body" }, _i = {
  key: 0,
  class: "ui-checkbox-label"
}, ki = {
  key: 1,
  class: "ui-checkbox-description"
};
function wi(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("label", {
    class: k(r.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = le(O((...u) => r.toggle && r.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = le(O((...u) => r.toggle && r.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: r.nativeType,
      name: r.nativeName,
      value: r.groupValueString,
      checked: r.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => r.onNativeChange && r.onNativeChange(...u))
    }, null, 40, bi),
    d("span", yi, [
      r.isChecked ? (l(), y(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    d("span", vi, [
      e.$slots.label || i.label ? (l(), n("span", _i, [
        b(e.$slots, "label", {}, () => [
          T(p(i.label), 1)
        ])
      ])) : f("", !0),
      i.description ? (l(), n("span", ki, p(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Si = /* @__PURE__ */ w(gi, [["render", wi]]), xi = ["list", "button", "List", "Button"];
let ye = 0;
const Ci = {
  name: "CheckboxGroup",
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => []
    },
    /** `list` — dikey liste; `button` — yan yana kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: "list",
      validator: (e) => xi.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return ye += 1, { groupName: `ui-checkbox-group-${ye}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    }
  },
  provide() {
    return {
      uiCheckboxGroup: this
    };
  }
}, Li = ["aria-label"];
function Ti(e, t, i, s, a, r) {
  return l(), n("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${r.normalizedVariant}`]),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, Li);
}
const Ii = /* @__PURE__ */ w(Ci, [["render", Ti]]), I = ne({
  open: !1,
  title: "",
  description: "",
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: "",
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: "",
  destructive: !1,
  /** @type {((value: boolean) => void) | null} */
  _resolve: null
});
function Ai(e = {}) {
  return new Promise((t) => {
    I.title = e.title ?? "", I.description = e.description ?? "", I.confirmLabel = e.confirmLabel ?? "", I.cancelLabel = e.cancelLabel ?? "", I.destructive = !!e.destructive, I._resolve = t, I.open = !0;
  });
}
function ee(e) {
  const t = I._resolve;
  I.open = !1, I._resolve = null, t && t(!!e);
}
const zi = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return I;
    },
    syncOpen: {
      get() {
        return I.open;
      },
      set(e) {
        e ? I.open = !0 : I._resolve ? ee(!1) : I.open = !1;
      }
    },
    confirmText() {
      return I.confirmLabel ? I.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return I.cancelLabel ? I.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      ee(!0);
    },
    onCancel() {
      ee(!1);
    }
  }
};
function Oi(e, t, i, s, a, r) {
  const o = v("ui-button"), u = v("ui-dialog");
  return l(), y(u, {
    open: r.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (c) => r.syncOpen = c),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: r.confirmState.title,
    description: r.confirmState.description,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": r.confirmState.title || r.fallbackAriaLabel
  }, {
    footer: g(() => [
      S(o, {
        color: "secondary",
        rounded: "",
        onClick: r.onCancel
      }, {
        default: g(() => [
          T(p(r.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      S(o, {
        rounded: "",
        color: r.confirmState.destructive ? "danger" : "primary",
        onClick: r.onConfirm
      }, {
        default: g(() => [
          T(p(r.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Mi = /* @__PURE__ */ w(zi, [["render", Oi]]);
let ve = 0;
function G(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${G(e.getMonth() + 1)}-${G(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), s = Number(t[2]) - 1, a = Number(t[3]), r = new Date(i, s, a);
  return r.getFullYear() !== i || r.getMonth() !== s || r.getDate() !== a ? null : r;
}
function R(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function te(e, t, i) {
  return new Date(e, t, 1).toLocaleString(i, { month: "long" });
}
function _e(e, t, i, s) {
  const a = `${e}-${G(t + 1)}-01`, r = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${G(t + 1)}-${G(r)}`;
  if (i && o > i && (o = i), s && a < s && o < s) return null;
  let u = a;
  return s && u < s && (u = s), R(u, o) > 0 ? null : [u, o];
}
const Pi = {
  name: "DateRangePicker",
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
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    var s, a;
    ve += 1;
    const e = ve, t = ((s = this.modelValue) == null ? void 0 : s[0]) || "", i = Y(t) || Y((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-daterangepicker-${e}`,
      menuOpen: !1,
      viewYear: i.getFullYear(),
      viewMonth: i.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: ""
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return Ge((e = this.$i18n) == null ? void 0 : e.locale);
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
        return R(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = D(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const s = D(i), a = e.getMonth(), r = e.getFullYear(), o = new Date(r, a - 1, 1), u = o.getFullYear(), c = o.getMonth(), h = (_, A) => typeof this.$t == "function" ? this.$t(_, A) : _;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: te(r, a, this.locale)
          }),
          range: _e(r, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: te(u, c, this.locale)
          }),
          range: _e(u, c, this.maxYmd, this.minYmd)
        }
      ].map((_) => ({
        ..._,
        disabled: !_.range || this.isRangeDisabled(_.range[0], _.range[1])
      }));
    },
    calendarPanes() {
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
      return [e, t].map((i) => ({
        ...i,
        title: te(i.year, i.month, this.locale),
        cells: this.buildCellsForMonth(i.year, i.month)
      }));
    }
  },
  watch: {
    modelValue: {
      deep: !0,
      handler() {
        this.syncViewFromValue(), this.menuOpen || (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
      }
    },
    menuOpen(e) {
      e ? (this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.syncViewFromValue()) : (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
    }
  },
  methods: {
    syncViewFromValue() {
      const e = Y(this.startYmd) || Y(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const i = (s) => s ? Ye(s, this.locale) || s : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? i(e || t) : `${i(e)} – ${i(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const i = new Date(e, t, 1), s = new Date(e, t, 1 - i.getDay()), a = this.previewStart, r = this.previewEnd, o = a && r, u = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + c), m = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), A = D(h), N = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, P = D(/* @__PURE__ */ new Date()) === A, B = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let ue = !1, ce = !1;
        if (o) {
          const de = R(a, r) <= 0 ? a : r, he = R(a, r) <= 0 ? r : a;
          ue = R(A, de) >= 0 && R(A, he) <= 0, ce = A === de || A === he;
        }
        u.push({
          key: N,
          d: _,
          date: h,
          today: P,
          inMonth: m,
          disabled: B,
          inRange: ue,
          endpoint: ce
        });
      }
      return u;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [i, s] = e.range;
      this.pickingStart = i, this.pickingEnd = s, this.$emit("update:modelValue", [i, s]), this.$emit("change", [i, s]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, a = i;
      if (R(a, s) < 0) {
        const r = s;
        s = a, a = r;
      }
      this.pickingStart = s, this.pickingEnd = a, this.$emit("update:modelValue", [s, a]), this.$emit("change", [s, a]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Vi = { class: "min-w-0 flex-1 truncate text-foreground" }, Ei = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Bi = { class: "ui-daterangepicker-layout" }, Ri = ["aria-label"], Di = { class: "ui-daterangepicker-calendars" }, Fi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Ni = { class: "ui-daterangepicker-month-row" }, $i = { class: "mb-2 flex items-center justify-between gap-2" }, Hi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Wi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Gi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Yi = { class: "ui-datepicker-grid" };
function Ui(e, t, i, s, a, r) {
  const o = v("ui-button"), u = v("ui-popover");
  return l(), n("div", {
    class: k(["ui-daterangepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(u, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (c) => a.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: m
        }, () => [
          S(o, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", Vi, p(r.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: c }) => [
        d("div", Ei, [
          d("div", Bi, [
            d("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": r.resolvedQuickAriaLabel
            }, [
              (l(!0), n(L, null, z(r.quickPresets, (h) => (l(), y(o, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (m) => r.applyQuick(h, c)
              }, {
                default: g(() => [
                  T(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Ri),
            d("div", Di, [
              r.rangeHint ? (l(), n("p", Fi, p(r.rangeHint), 1)) : f("", !0),
              d("div", Ni, [
                (l(!0), n(L, null, z(r.calendarPanes, (h) => (l(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", $i, [
                    h.showPrev ? (l(), y(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": r.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = O((m) => r.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Hi)),
                    d("span", Wi, p(h.title), 1),
                    h.showNext ? (l(), y(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": r.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = O((m) => r.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Gi))
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
                  d("div", Yi, [
                    (l(!0), n(L, null, z(h.cells, (m) => (l(), y(o, {
                      key: m.key,
                      variant: r.dayVariant(m),
                      color: r.dayColor(m),
                      size: "sm",
                      cubed: "",
                      disabled: m.disabled,
                      "aria-selected": m.endpoint ? "true" : "false",
                      "aria-disabled": m.disabled ? "true" : void 0,
                      "data-outside": m.inMonth ? void 0 : "true",
                      "data-today": m.today ? "true" : void 0,
                      "data-in-range": m.inRange && !m.endpoint ? "true" : void 0,
                      "data-range-endpoint": m.endpoint ? "true" : void 0,
                      onMouseenter: (_) => r.onCellHover(m),
                      onClick: (_) => r.pick(m, c)
                    }, {
                      default: g(() => [
                        T(p(m.d), 1)
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
const Ki = /* @__PURE__ */ w(Pi, [["render", Ui]]), ji = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], qi = {
  name: "Dropdown",
  components: { Divider: oe },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => ji.includes(e)
    },
    matchTriggerWidth: {
      type: Boolean,
      default: !1
    },
    /** Tetikleyici tam genişlik */
    block: {
      type: Boolean,
      default: !1
    },
    /** Flex satırında tetikleyicinin doğrudan katılımı (`ui-tab-list` içi menü sekmesi). */
    inheritLayout: {
      type: Boolean,
      default: !1
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:open", "select"],
  data() {
    return {
      internalOpen: !1
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== void 0 ? this.open : this.internalOpen;
      },
      set(e) {
        this.open !== void 0 ? this.$emit("update:open", e) : this.internalOpen = e;
      }
    }
  },
  methods: {
    onOpenChange(e) {
      this.isOpen = e;
    },
    /** `color`, veya `variant: 'destructive'` → danger (sil / yıkıcı eylem). */
    itemColor(e) {
      return e != null && e.color ? e.color : (e == null ? void 0 : e.variant) === "destructive" || e != null && e.destructive ? "danger" : "secondary";
    },
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), t());
    }
  }
};
function Zi(e, t, i, s, a, r) {
  const o = v("Divider"), u = v("ui-button"), c = v("ui-popover");
  return l(), y(c, {
    open: r.isOpen,
    placement: i.placement,
    "match-trigger-width": i.matchTriggerWidth,
    block: i.block,
    "inherit-layout": i.inheritLayout,
    "mobile-centered": !1,
    "close-on-outside-click": i.closeOnOutsideClick,
    "close-on-escape": i.closeOnEscape,
    "outside-click-ignore-selector": i.outsideClickIgnoreSelector,
    "onUpdate:open": r.onOpenChange
  }, {
    trigger: g((h) => [
      b(e.$slots, "trigger", Me(Pe(h)))
    ]),
    content: g(({ close: h }) => [
      d("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = O(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? b(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (l(!0), n(L, { key: 1 }, z(i.items, (m, _) => (l(), n(L, { key: _ }, [
          m.divider ? (l(), y(o, {
            key: 0,
            spacing: "sm"
          })) : (l(), y(u, {
            key: 1,
            variant: "ghost",
            color: r.itemColor(m),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.icon || null,
            "suffix-icon": m.suffixIcon || m.suffix_icon || null,
            disabled: m.disabled,
            onClick: O((A) => r.onItem(m, h), ["stop"])
          }, {
            default: g(() => [
              T(p(m.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "suffix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Qi = /* @__PURE__ */ w(qi, [["render", Zi]]), Xi = ["solid", "regular", "brands", "light", "duotone", "thin"], Ji = {
  name: "Field",
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
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Xi.includes(e)
    }
  },
  computed: {
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
    rootClass() {
      return x("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, er = {
  key: 0,
  class: "ui-field__title-row"
}, tr = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, ir = {
  key: 1,
  class: "ui-field__title"
}, rr = {
  key: 1,
  class: "ui-field__value"
}, lr = {
  key: 2,
  class: "ui-field__subtitle"
};
function ar(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("div", C({ class: r.rootClass }, r.passthroughAttrs), [
    i.title || r.showIcon ? (l(), n("div", er, [
      r.showIcon ? (l(), n("span", tr, [
        S(o, {
          name: i.icon,
          type: i.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      i.title ? (l(), n("span", ir, p(i.title), 1)) : f("", !0)
    ])) : f("", !0),
    r.hasValue ? (l(), n("div", rr, [
      b(e.$slots, "default")
    ])) : f("", !0),
    i.subtitle ? (l(), n("p", lr, p(i.subtitle), 1)) : f("", !0)
  ], 16);
}
const sr = /* @__PURE__ */ w(Ji, [["render", ar]]), nr = ["popover", "dialog"], or = ["sm", "md", "lg"], ur = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], cr = {
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
      validator: (e) => nr.includes(e)
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
      validator: (e) => or.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => ur.includes(e)
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
      return this.hasValue || this.resolvedOpen ? "soft" : "solid";
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
}, dr = { class: "ui-field-action-header" }, hr = { class: "ui-field-action-header__text" }, fr = {
  key: 0,
  class: "ui-field-action-header__title"
}, mr = {
  key: 1,
  class: "ui-field-action-header__description"
}, pr = { class: "ui-field-action-body" }, gr = { class: "ui-field-action-body" }, br = { class: "ui-field-action-footer" };
function yr(e, t, i, s, a, r) {
  const o = v("ui-button"), u = v("ui-popover"), c = v("ui-dialog");
  return l(), n("div", {
    class: k([
      "ui-field-action",
      r.hasValue ? "ui-field-action--filled" : "",
      i.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    r.isPopover ? (l(), y(u, {
      key: 0,
      open: r.resolvedOpen,
      "onUpdate:open": t[0] || (t[0] = (h) => r.resolvedOpen = h),
      placement: i.placement,
      width: i.popoverWidth,
      disabled: i.disabled,
      "mobile-centered": i.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: m }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: m,
          close: r.close,
          label: r.triggerLabel,
          hasValue: r.hasValue
        }, () => [
          i.iconOnly ? (l(), y(o, {
            key: 0,
            type: "button",
            variant: r.triggerVariant,
            color: r.triggerColor,
            size: i.size,
            rounded: "",
            cubed: "",
            "prefix-icon": i.prefixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": r.triggerAriaLabel,
            onClick: (_) => r.onTriggerClick(_, m)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (l(), y(o, {
            key: 1,
            type: "button",
            variant: r.triggerVariant,
            color: r.triggerColor,
            size: i.size,
            rounded: "",
            "prefix-icon": i.prefixIcon,
            "suffix-icon": i.suffixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": r.triggerAriaLabel,
            onClick: (_) => r.onTriggerClick(_, m)
          }, {
            default: g(() => [
              T(p(r.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        d("div", pr, [
          b(e.$slots, "default", {
            close: h,
            open: r.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      r.showPopoverHeader ? {
        name: "header",
        fn: g(({ close: h }) => [
          b(e.$slots, "header", { close: h }, () => [
            d("div", dr, [
              d("div", hr, [
                i.title ? (l(), n("p", fr, p(i.title), 1)) : f("", !0),
                i.description ? (l(), n("p", mr, p(i.description), 1)) : f("", !0)
              ]),
              i.clearable && r.hasValue ? (l(), y(o, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": r.resolvedClearLabel,
                onClick: (m) => r.onClear(h)
              }, {
                default: g(() => [
                  T(p(r.resolvedClearLabel), 1)
                ]),
                _: 1
              }, 8, ["aria-label", "onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: g(({ close: h }) => [
          b(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (l(), n(L, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: r.resolvedOpen,
        toggle: r.toggle,
        close: r.close,
        label: r.triggerLabel,
        hasValue: r.hasValue
      }, () => [
        i.iconOnly ? (l(), y(o, {
          key: 0,
          type: "button",
          variant: r.triggerVariant,
          color: r.triggerColor,
          size: i.size,
          rounded: "",
          cubed: "",
          "prefix-icon": i.prefixIcon,
          disabled: i.disabled,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": r.triggerAriaLabel,
          onClick: t[1] || (t[1] = (h) => r.onTriggerClick(h, r.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (l(), y(o, {
          key: 1,
          type: "button",
          variant: r.triggerVariant,
          color: r.triggerColor,
          size: i.size,
          rounded: "",
          "prefix-icon": i.prefixIcon,
          "suffix-icon": i.suffixIcon,
          disabled: i.disabled,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": r.triggerAriaLabel,
          onClick: t[2] || (t[2] = (h) => r.onTriggerClick(h, r.toggle))
        }, {
          default: g(() => [
            T(p(r.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      S(c, {
        open: r.resolvedOpen,
        "onUpdate:open": t[4] || (t[4] = (h) => r.resolvedOpen = h),
        title: i.title,
        description: i.description,
        icon: i.dialogIcon,
        "max-width": i.maxWidth,
        "close-on-backdrop": i.closeOnBackdrop,
        "close-on-escape": i.closeOnEscape
      }, j({
        default: g(() => [
          d("div", gr, [
            b(e.$slots, "default", {
              close: r.close,
              open: r.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        r.showDialogFooter ? {
          name: "footer",
          fn: g(() => [
            b(e.$slots, "footer", { close: r.close }, () => [
              d("div", br, [
                i.clearable && r.hasValue ? (l(), y(o, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: t[3] || (t[3] = (h) => r.onClear(r.close))
                }, {
                  default: g(() => [
                    T(p(r.resolvedClearLabel), 1)
                  ]),
                  _: 1
                })) : f("", !0),
                S(o, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: r.close
                }, {
                  default: g(() => [
                    T(p(r.resolvedDoneLabel), 1)
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
const vr = /* @__PURE__ */ w(cr, [["render", yr]]), _r = ["auto", "file", "folder"], kr = ["sm", "md", "lg"], wr = { icon: "folder", color: "text-sky-500" }, Sr = { icon: "file-lines", color: "text-muted-foreground" }, xr = {
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
}, ke = {
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
function q(e) {
  return String(e ?? "").trim();
}
function Cr(e) {
  const t = q(e);
  return /[/\\]\s*$/.test(t);
}
function Ne(e) {
  const t = q(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const i = t.split(/[/\\]/);
  return i[i.length - 1] || t;
}
function Lr(e) {
  const t = Ne(e), i = t.lastIndexOf(".");
  return i <= 0 || i === t.length - 1 ? "" : t.slice(i + 1).toLowerCase();
}
const we = {
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
}, Tr = {
  name: "File",
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
      validator: (e) => _r.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => kr.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: {
      type: String,
      default: "light"
    },
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: ""
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    preset() {
      return ke[this.size] || ke.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Cr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Ne(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return wr;
      const e = Lr(this.name);
      return xr[e] || Sr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? we[this.color] !== void 0 ? we[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
      return this.preset.root;
    }
  }
}, Ir = ["aria-label"], Ar = ["title"];
function zr(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("div", {
    class: k(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", r.rootSizeClass]),
    role: "img",
    "aria-label": r.ariaLabel
  }, [
    d("div", {
      class: k(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [r.shellClasses, r.folderShellClass]])
    }, [
      S(o, {
        name: r.resolvedIcon,
        type: r.resolvedIconType,
        size: r.iconSizeToken,
        class: k(r.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    d("span", {
      class: k(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", r.labelClass]),
      "aria-hidden": "true",
      title: r.fullLabel
    }, p(r.displayLabel), 11, Ar)
  ], 10, Ir);
}
const Or = /* @__PURE__ */ w(Tr, [["render", zr]]);
function Mr(e) {
  const t = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!t.length) return null;
  const i = Math.min(...t.map((o) => o.top)), s = Math.min(...t.map((o) => o.left)), a = Math.max(...t.map((o) => o.right)), r = Math.max(...t.map((o) => o.bottom));
  return {
    top: i,
    left: s,
    right: a,
    bottom: r,
    width: a - s,
    height: r - i,
    x: s,
    y: i,
    toJSON: () => ({})
  };
}
function ae(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function Se(e) {
  const t = ae(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const i = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((a) => a instanceof HTMLElement), s = Mr(i.map((a) => a.getBoundingClientRect()));
    if (s) return s;
  }
  return t.getBoundingClientRect();
}
function Pr(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && t.push(s);
  return t;
}
const Vr = ["dialog", "popover", "card", "tour"], Er = ["solid", "regular", "brands", "light", "duotone", "thin"], Br = [
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
], Rr = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, Dr = 8, Fr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Vr.includes(e)
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
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Er.includes(e)
    },
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
      validator: (e) => Br.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Dr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Rr.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? ae(e) : typeof e == "string" && e.trim() ? ae(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const s = window.innerWidth, a = window.innerHeight, r = i.getBoundingClientRect(), o = r.width || 320, u = r.height || 180;
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
      const c = Se(t);
      if (!c) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, c.top - h), _ = Math.max(0, c.left - h), A = Math.min(a, c.bottom + h), N = Math.min(s, c.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${_}px`,
        width: `${Math.max(0, N - _)}px`,
        height: `${Math.max(0, A - m)}px`
      };
      let P = A + V, B = _;
      this.placement.startsWith("top") ? P = m - u - V : this.placement.startsWith("right") ? (P = m, B = N + V) : this.placement.startsWith("left") ? (P = m, B = _ - o - V) : this.placement.includes("end") && (B = N - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + u > a - V && (P = m - u - V), P = Math.max(V, Math.min(P, a - u - V)), B = Math.max(V, Math.min(B, s - o - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${P}px`,
        left: `${B}px`,
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
          for (const i of Pr(t))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Nr = { class: "ui-guidance-footer" }, $r = { class: "ui-guidance-popover" }, Hr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Wr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Gr = { class: "ui-guidance-popover__text" }, Yr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Ur = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Kr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, jr = ["aria-label"], qr = { class: "ui-guidance-tour__content" }, Zr = { class: "ui-header-lead" }, Qr = { class: "ui-header-lead__main" }, Xr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Jr = { class: "ui-header-lead__text" }, el = {
  key: 0,
  class: "ui-guidance-tour__title"
}, tl = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, il = {
  key: 0,
  class: "ui-header-lead__actions"
}, rl = {
  key: 0,
  class: "ui-guidance-tour__body"
}, ll = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function al(e, t, i, s, a, r) {
  const o = v("ui-button"), u = v("ui-card"), c = v("ui-dialog"), h = v("ui-icon"), m = v("ui-popover");
  return r.shouldRender ? (l(), n("div", {
    key: 0,
    class: k(r.rootShellClass)
  }, [
    i.mode === "card" ? (l(), y(u, {
      key: 0,
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      border: ""
    }, j({
      default: g(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: g(() => [
          b(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      r.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          b(e.$slots, "footer", {}, () => [
            d("div", Nr, [
              i.showFooterClose ? (l(), y(o, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: r.onClose
              }, {
                default: g(() => [
                  T(p(r.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              i.showGo ? (l(), y(o, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: r.onGo
              }, {
                default: g(() => [
                  T(p(r.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (l(), y(c, {
      key: 1,
      open: r.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (_) => r.syncOpen = _),
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      onAfterLeave: t[1] || (t[1] = (_) => e.$emit("after-leave"))
    }, j({
      default: g(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          S(o, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: r.onGo
          }, {
            default: g(() => [
              T(p(r.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          b(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (l(), y(m, {
      key: 2,
      open: r.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (_) => r.syncOpen = _),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: g((_) => [
        b(e.$slots, "trigger", Me(Pe(_)))
      ]),
      content: g(() => [
        d("div", $r, [
          i.icon || i.title || i.description ? (l(), n("div", Hr, [
            i.icon ? (l(), n("span", Wr, [
              S(h, {
                name: i.icon,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            d("div", Gr, [
              i.title ? (l(), n("p", Yr, p(i.title), 1)) : f("", !0),
              i.description ? (l(), n("p", Ur, p(i.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          r.hasFooterActions && !e.$slots.footer ? (l(), n("div", Kr, [
            i.showFooterClose ? (l(), y(o, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: r.onClose
            }, {
              default: g(() => [
                T(p(r.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            i.showGo ? (l(), y(o, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: r.onGo
            }, {
              default: g(() => [
                T(p(r.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (l(), y(Q, {
      key: 3,
      to: "body"
    }, [
      S(X, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (_) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          r.syncOpen ? (l(), n("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = le((..._) => r.onEscape && r.onEscape(..._), ["esc"]))
          }, [
            i.closeOnBackdrop ? (l(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => r.onBackdrop && r.onBackdrop(..._))
            })) : f("", !0),
            a.tourHighlightStyle ? (l(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: E(a.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            d("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: E(a.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || r.resolvedGoLabel
            }, [
              d("div", qr, [
                d("div", Zr, [
                  d("div", Qr, [
                    i.icon ? (l(), n("span", Xr, [
                      S(h, {
                        name: i.icon,
                        type: i.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    d("div", Jr, [
                      i.title ? (l(), n("p", el, p(i.title), 1)) : f("", !0),
                      i.description ? (l(), n("p", tl, p(i.description), 1)) : f("", !0)
                    ])
                  ]),
                  i.showClose ? (l(), n("div", il, [
                    S(o, {
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
                e.$slots.default ? (l(), n("div", rl, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                r.hasFooterActions && !e.$slots.footer ? (l(), n("div", ll, [
                  i.showFooterClose ? (l(), y(o, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onClose
                  }, {
                    default: g(() => [
                      T(p(r.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  i.showGo ? (l(), y(o, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onGo
                  }, {
                    default: g(() => [
                      T(p(r.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, jr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const sl = /* @__PURE__ */ w(Fr, [["render", al]]), nl = ["solid", "regular", "brands", "light", "duotone", "thin"], ol = {
  name: "IconPicker",
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
    iconType: {
      type: String,
      default: "light",
      validator: (e) => nl.includes(e)
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
    searchPlaceholder: {
      type: String,
      default: ""
    },
    noResultsLabel: {
      type: String,
      default: ""
    },
    maxResults: {
      type: Number,
      default: 180
    },
    panelWidth: {
      type: String,
      default: "22rem"
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
    rootClass() {
      return x(
        "ui-icon-picker ui-icon-picker--fulled w-full min-w-0",
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
      let i = t;
      return e && (i = t.filter((s) => String(s).toLowerCase().includes(e))), i.slice(0, this.maxResults);
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
}, ul = ["disabled", "aria-expanded", "onClick"], cl = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, dl = { class: "ui-select-field-suffix" }, hl = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, fl = { class: "ui-icon-picker-panel" }, ml = { class: "ui-icon-picker-panel__header" }, pl = { class: "ui-icon-picker-panel__title" }, gl = { class: "ui-icon-picker-panel__search" }, bl = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, yl = {
  key: 1,
  class: "ui-icon-picker-grid"
}, vl = ["title", "onClick"];
function _l(e, t, i, s, a, r) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: k(r.rootClass)
  }, [
    S(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => a.popoverOpen = m),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: m, toggle: _, close: A }) => [
        b(e.$slots, "trigger", {
          open: m,
          toggle: _,
          close: A
        }, () => [
          d("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            d("span", cl, [
              S(o, {
                name: r.localIcon || "grid",
                type: i.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            d("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !r.localIcon }])
            }, p(r.localIcon || r.triggerLabel), 3),
            d("span", dl, [
              d("span", hl, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ul)
        ])
      ]),
      content: g(() => [
        d("div", fl, [
          d("div", ml, [
            d("span", pl, p(r.popoverTitleLabel), 1),
            r.localIcon ? (l(), y(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: O(r.clearIcon, ["stop"])
            }, {
              default: g(() => [
                T(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", gl, [
            S(c, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => a.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: r.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          r.filteredIcons.length ? (l(), n("div", yl, [
            (l(!0), n(L, null, z(r.filteredIcons, (m) => (l(), n("button", {
              key: m,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": r.localIcon === m }]),
              title: m,
              onClick: (_) => r.selectIcon(m)
            }, [
              S(o, {
                name: m,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, vl))), 128))
          ])) : (l(), n("div", bl, p(r.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const kl = /* @__PURE__ */ w(ol, [["render", _l]]), wl = ["tr-TR", "en-US"], Z = ne({
  currency: "TRY",
  format: "tr-TR"
});
function Sl(e, t = Z.format) {
  return wl.includes(e) ? e : t;
}
function xl(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Z.currency = J(e.currency));
  const t = e.format ?? e.locale;
  t != null && (Z.format = Sl(t));
}
function Cl() {
  return $e(Z);
}
const Ll = {
  name: "PriceInput",
  components: { CurrencyInput: Fe },
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
    return { priceInputConfig: Cl() };
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
function Tl(e, t, i, s, a, r) {
  const o = v("CurrencyInput");
  return l(), y(o, C({
    "model-value": i.modelValue,
    currency: r.resolvedCurrency,
    locale: r.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.$emit("update:modelValue", u)),
    onInput: t[1] || (t[1] = (u) => e.$emit("input", u)),
    onChange: t[2] || (t[2] = (u) => e.$emit("change", u)),
    onFocus: t[3] || (t[3] = (u) => e.$emit("focus", u)),
    onBlur: t[4] || (t[4] = (u) => e.$emit("blur", u))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Il = /* @__PURE__ */ w(Ll, [["render", Tl]]);
function Al(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  t.length >= 8 && (i += 1), t.length >= 12 && (i += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? i += 1 : /[a-zA-Z]/.test(t) && (i += 0.5), /\d/.test(t) && (i += 1), /[^a-zA-Z0-9]/.test(t) && (i += 1);
  const s = Math.min(4, Math.round(i)), a = ["weak", "fair", "good", "strong"], r = s <= 0 ? "weak" : a[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: r
  };
}
let ie = 0;
const zl = ["sm", "md", "lg"], Ol = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => zl.includes(e)
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
    return ie += 1, {
      fallbackId: `ui-password-${ie}`,
      fallbackStrengthId: `ui-password-strength-${ie}`,
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
      return Al(this.modelValue);
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
      return t;
    }
  }
}, Ml = ["aria-label", "aria-pressed", "disabled"], Pl = ["id", "aria-live"];
function Vl(e, t, i, s, a, r) {
  const o = v("ui-icon"), u = v("ui-input"), c = v("ui-progress");
  return l(), n("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    S(u, C({
      id: r.resolvedId,
      modelValue: r.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => r.innerValue = h),
      type: a.visible ? "text" : "password",
      class: "w-full",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength,
      "aria-describedby": r.strengthDescribedby
    }, r.passthroughAttrs, {
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      append: g(() => [
        d("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": r.toggleAriaLabel,
          "aria-pressed": a.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: t[0] || (t[0] = (h) => a.visible = !a.visible)
        }, [
          S(o, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Ml)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    r.showStrengthMeter ? (l(), n("div", {
      key: 0,
      id: a.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": r.innerValue ? "polite" : "off"
    }, [
      S(c, {
        type: "bar",
        size: "md",
        value: r.strength.percent,
        variant: r.strengthVariant,
        "aria-valuetext": r.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      r.strength.label !== "empty" ? (l(), n("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${r.strength.label}`])
      }, p(r.strengthText), 3)) : f("", !0)
    ], 8, Pl)) : f("", !0)
  ], 2);
}
const El = /* @__PURE__ */ w(Ol, [["render", Vl]]), Bl = ["numeric", "alphanumeric"], Rl = {
  name: "Pin",
  inheritAttrs: !1,
  props: {
    /** Tam kod — `v-model` */
    modelValue: {
      type: String,
      default: ""
    },
    /** Hane sayısı */
    length: {
      type: Number,
      default: 6,
      validator: (e) => e >= 1 && e <= 12
    },
    /** `numeric` yalnızca rakam; `alphanumeric` harf + rakam */
    type: {
      type: String,
      default: "numeric",
      validator: (e) => Bl.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "one-time-code"
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "complete", "focus", "blur"],
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    cells() {
      return String(this.modelValue ?? "").slice(0, this.length).split("");
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.pin.ariaLabel") : "Verification code";
    }
  },
  watch: {
    modelValue(e) {
      const t = this.normalizeValue(e);
      if (t !== e) {
        this.$emit("update:modelValue", t);
        return;
      }
      t.length === this.length && this.$emit("complete", t);
    }
  },
  methods: {
    cellEl(e) {
      const t = this.$refs.cells;
      return Array.isArray(t) ? t[e] : t;
    },
    cellAriaLabel(e) {
      return typeof this.$t == "function" ? this.$t("ui.pin.cell", { n: e + 1, total: this.length }) : `Digit ${e + 1} of ${this.length}`;
    },
    normalizeChar(e) {
      if (!e) return "";
      if (this.type === "numeric")
        return /\d/.test(e) ? e : "";
      const t = e.toUpperCase();
      return /^[A-Z0-9]$/.test(t) ? t : "";
    },
    normalizeValue(e) {
      return String(e ?? "").split("").map((i) => this.normalizeChar(i)).filter(Boolean).slice(0, this.length).join("");
    },
    emitValue(e) {
      var i;
      const t = e.join("").slice(0, this.length);
      this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (i = this.cellEl(this.length - 1)) == null || i.blur());
    },
    onCellInput(e, t) {
      const s = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (s.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const a = [...this.cells];
      let r = e;
      for (const u of s) {
        if (r >= this.length) break;
        a[r] = u, r += 1;
      }
      this.emitValue(a);
      const o = Math.min(r, this.length - 1);
      this.$nextTick(() => {
        var u, c;
        (u = this.cellEl(o)) == null || u.focus(), (c = this.cellEl(o)) == null || c.select();
      });
    },
    onCellKeydown(e, t) {
      var i, s;
      if (t.key === "Backspace") {
        t.preventDefault();
        const a = [...this.cells];
        if (a[e]) {
          a[e] = "", this.emitValue(a);
          return;
        }
        e > 0 && (a[e - 1] = "", this.emitValue(a), this.$nextTick(() => {
          var r;
          (r = this.cellEl(e - 1)) == null || r.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (i = this.cellEl(e - 1)) == null || i.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (s = this.cellEl(e + 1)) == null || s.focus());
    },
    onCellFocus(e) {
      this.activeIndex = e, this.$emit("focus", e), this.$nextTick(() => {
        var t;
        (t = this.cellEl(e)) == null || t.select();
      });
    },
    onPaste(e) {
      var a;
      e.preventDefault();
      const t = ((a = e.clipboardData) == null ? void 0 : a.getData("text")) ?? "", i = this.normalizeValue(t);
      if (!i) return;
      this.emitValue(i.split(""));
      const s = Math.min(i.length, this.length) - 1;
      this.$nextTick(() => {
        var r;
        (r = this.cellEl(Math.max(0, s))) == null || r.focus();
      });
    }
  }
}, Dl = ["aria-label"], Fl = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Nl(e, t, i, s, a, r) {
  return l(), n("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    class: k([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), n(L, null, z(i.length, (o, u) => (l(), n("input", {
      key: u,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: r.cells[u] ?? "",
      type: i.type === "numeric" ? "tel" : "text",
      inputmode: i.type === "numeric" ? "numeric" : "text",
      pattern: i.type === "numeric" ? "[0-9]*" : void 0,
      disabled: i.disabled,
      readonly: i.readonly,
      autocomplete: u === 0 ? i.autocomplete : "off",
      maxlength: "1",
      "aria-label": r.cellAriaLabel(u),
      onInput: (c) => r.onCellInput(u, c),
      onKeydown: (c) => r.onCellKeydown(u, c),
      onFocus: (c) => r.onCellFocus(u),
      onPaste: t[0] || (t[0] = (...c) => r.onPaste && r.onPaste(...c))
    }, null, 40, Fl))), 128))
  ], 10, Dl);
}
const $l = /* @__PURE__ */ w(Rl, [["render", Nl]]), Hl = ["ul", "ol", "div"], Wl = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Hl.includes(e)
    },
    /** Öğeler arası dikey boşluk (`gap-3` | `gap-4`). */
    density: {
      type: String,
      default: "normal",
      validator: (e) => ["compact", "normal", "relaxed"].includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return x("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function Gl(e, t, i, s, a, r) {
  return l(), y(F(i.tag), C({
    class: r.listClass,
    role: "list"
  }, r.passthroughAttrs), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Yl = /* @__PURE__ */ w(Wl, [["render", Gl]]), Ul = ["solid", "regular", "brands", "light", "duotone", "thin"], Kl = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: {
      type: String,
      default: "light",
      validator: (e) => Ul.includes(e)
    }
  }
}, jl = {
  class: "ui-list-item",
  role: "listitem"
}, ql = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Zl = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Ql = { class: "ui-list-item-content min-w-0 flex-1" };
function Xl(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("li", jl, [
    i.prefixIcon ? (l(), n("span", ql, [
      S(o, {
        name: i.prefixIcon,
        type: i.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), n("span", Zl, [
      b(e.$slots, "prefix")
    ])) : f("", !0),
    d("div", Ql, [
      b(e.$slots, "default")
    ])
  ]);
}
const Jl = /* @__PURE__ */ w(Kl, [["render", Xl]]), ea = ["bar", "circle"], xe = ["sm", "md", "lg"], Ce = ["thin", "md"], ta = ["default", "weak", "fair", "good", "strong"], U = { sm: 16, md: 20, lg: 24 }, ia = { sm: 1.5, md: 2, lg: 2 }, ra = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => ea.includes(e)
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
     * Daire: sm 16px, md 20px, lg 24px.
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
      validator: (e) => ta.includes(e)
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
      const e = this.type === "circle" ? xe.includes(this.size) ? this.size : "sm" : Ce.includes(this.size) ? this.size : "md";
      return x(
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
      return xe.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return Ce.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = U[this.circleSizeKey] ?? U.sm;
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
      const e = U[this.circleSizeKey] ?? U.sm, t = ia[this.circleSizeKey] ?? 2, i = (e - t) / 2, s = e / 2, a = 2 * Math.PI * i, r = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: i, center: s, circumference: a, offset: r };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, la = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], aa = ["width", "height", "viewBox"], sa = ["cx", "cy", "r", "stroke-width"], na = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], oa = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ua(e, t, i, s, a, r) {
  return l(), n("div", {
    class: k(r.rootClass),
    style: E(r.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : r.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : r.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (l(), n("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: r.circleMetrics.size,
      height: r.circleMetrics.size,
      viewBox: `0 0 ${r.circleMetrics.size} ${r.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      d("circle", {
        class: "ui-progress-circle-track",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke
      }, null, 8, sa),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke,
        "stroke-dasharray": r.circleMetrics.circumference,
        "stroke-dashoffset": r.circleMetrics.offset
      }, null, 8, na)
    ], 8, aa)) : (l(), n("div", oa, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${r.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, la);
}
const ca = /* @__PURE__ */ w(ra, [["render", ua]]), da = Ve("ui-sheet"), ha = ["left", "right"], fa = ["sm", "md", "lg", "xl"], ma = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, pa = {
  name: "Sheet",
  components: { Divider: oe },
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
      validator: (e) => ha.includes(e)
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
      validator: (e) => fa.includes(e)
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
      default: "light",
      validator: (e) => ma.includes(e)
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
    const e = da();
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
      return x(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return Ke(this.$attrs, ["class"]);
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
      return x(
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
        Ue(e) || (this.focusFallbackTimer = setTimeout(() => {
          var i;
          this.focusFallbackTimer = null, (i = e.focus) == null || i.call(e);
        }, 50));
      });
    }
  }
}, ga = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], ba = {
  key: 0,
  class: "ui-card-header shrink-0"
}, ya = {
  key: 0,
  class: "ui-sheet-header__icon"
}, va = ["id"], _a = {
  key: 2,
  class: "ui-sheet-header__actions"
}, ka = ["id"], wa = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, Sa = {
  key: 4,
  class: "ui-card-footer"
};
function xa(e, t, i, s, a, r) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("Divider");
  return a.portalReady ? (l(), y(Q, {
    key: 0,
    to: "body"
  }, [
    S(X, {
      name: r.transitionName,
      appear: "",
      onAfterEnter: r.onOverlayAfterEnter,
      onAfterLeave: r.onOverlayAfterLeave
    }, {
      default: g(() => [
        i.open ? (l(), n("div", {
          key: 0,
          ref: "layerRef",
          class: k(r.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => r.onLayerKeydown && r.onLayerKeydown(...h))
        }, [
          i.overlay ? (l(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => r.onBackdrop && r.onBackdrop(...h))
          })) : f("", !0),
          d("div", C({
            ref: "panelRef",
            class: r.panelClasses,
            role: "dialog",
            "aria-modal": i.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": r.ariaLabelledby,
            "aria-describedby": r.ariaDescribedby,
            "aria-label": r.ariaLabelAttr
          }, r.passthroughAttrs, {
            onClick: t[1] || (t[1] = O(() => {
            }, ["stop"]))
          }), [
            r.hasHeaderBlock ? (l(), n("div", ba, [
              b(e.$slots, "header", {}, () => [
                r.hasDefaultHeader ? (l(), n("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (l(), n("span", ya, [
                    S(o, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  i.title ? (l(), n("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(i.title), 9, va)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), n("div", _a, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (l(), y(u, {
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
                  i.description ? (l(), n("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(i.description), 9, ka)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), n("div", wa, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            r.showHeaderDivider ? (l(), y(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (l(), n("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (l(), n("div", Sa, [
              b(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, ga)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Ca = /* @__PURE__ */ w(pa, [["render", xa]]), La = ["sm", "md", "lg", "full"], Te = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Ta = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => La.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-menu",
        Te[this.width] || Te.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ia = {
  key: 0,
  class: "ui-menu-header"
}, Aa = { class: "ui-menu-body" }, za = {
  key: 1,
  class: "ui-menu-footer"
};
function Oa(e, t, i, s, a, r) {
  return l(), n("nav", C({ class: r.rootClass }, r.passthroughAttrs), [
    e.$slots.header ? (l(), n("div", Ia, [
      b(e.$slots, "header")
    ])) : f("", !0),
    d("div", Aa, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), n("div", za, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const Ma = /* @__PURE__ */ w(Ta, [["render", Oa]]), Pa = {
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
      return x("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Va = {
  key: 0,
  class: "ui-menu-group-label"
}, Ea = { class: "ui-menu-group-items" };
function Ba(e, t, i, s, a, r) {
  return l(), n("div", C({ class: r.groupClass }, r.passthroughAttrs), [
    i.label ? (l(), n("p", Va, p(i.label), 1)) : f("", !0),
    d("div", Ea, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const Ra = /* @__PURE__ */ w(Pa, [["render", Ba]]), Da = {
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
      return x(
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
function Fa(e, t, i, s, a, r) {
  const o = v("ui-button");
  return l(), y(o, C({
    type: "button",
    variant: "ghost",
    color: "secondary",
    fulled: "",
    "text-align": "left",
    to: i.to,
    "prefix-icon": i.prefixIcon,
    "suffix-icon": i.suffixIcon,
    disabled: i.disabled,
    loading: i.loading,
    class: r.itemClass,
    "aria-current": i.active ? "page" : void 0
  }, r.forwardedAttrs, { onClick: r.onClick }), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Na = /* @__PURE__ */ w(Da, [["render", Fa]]), $a = {
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
      return x("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ha = ["aria-label"];
function Wa(e, t, i, s, a, r) {
  return l(), n("div", C({
    class: r.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Ha);
}
const Ga = /* @__PURE__ */ w($a, [["render", Wa]]), Ya = {
  name: "Segment",
  inject: {
    uiSegmentGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasPrepend() {
      return !!this.$slots.prepend;
    },
    hasAppend() {
      return !!this.$slots.append;
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend;
    },
    isSelected() {
      return this.uiSegmentGroup ? Object.is(this.uiSegmentGroup.modelValue, this.value) : !1;
    },
    iconOnly() {
      const e = this.uiSegmentGroup;
      return e ? typeof e.resolvedIconOnly == "boolean" ? e.resolvedIconOnly : !!e.iconOnly : !1;
    },
    showLabel() {
      return !this.iconOnly;
    },
    iconSize() {
      var t;
      const e = ((t = this.uiSegmentGroup) == null ? void 0 : t.resolvedSize) || "md";
      return this.iconOnly, e === "lg" ? "sm" : "xs";
    },
    segmentClass() {
      return [
        "ui-segment",
        { "ui-segment--selected": this.isSelected },
        this.icon && !this.hasAffixes && "ui-segment--with-icon",
        this.iconOnly && "ui-segment--icon-only",
        this.hasAffixes && "ui-segment--affixed"
      ];
    }
  },
  mounted() {
    !this.uiSegmentGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiSegmentGroup || this.uiSegmentGroup.$emit("update:modelValue", this.value);
    }
  }
}, Ua = ["aria-checked", "disabled"], Ka = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, ja = {
  key: 1,
  class: "ui-segment-label"
}, qa = {
  key: 2,
  class: "sr-only"
}, Za = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Qa = {
  key: 1,
  class: "ui-segment-label"
}, Xa = {
  key: 2,
  class: "sr-only"
};
function Ja(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("button", {
    type: "button",
    role: "radio",
    class: k(r.segmentClass),
    "aria-checked": r.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[2] || (t[2] = (...u) => r.select && r.select(...u))
  }, [
    r.hasAffixes ? (l(), n(L, { key: 0 }, [
      r.hasPrepend ? (l(), n("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = O(() => {
        }, ["stop"]))
      }, [
        b(e.$slots, "prepend")
      ])) : f("", !0),
      d("span", {
        class: k(["ui-segment-main", { "ui-segment-main--with-icon": i.icon }])
      }, [
        i.icon ? (l(), n("span", Ka, [
          S(o, {
            name: i.icon,
            size: r.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        r.showLabel ? (l(), n("span", ja, p(i.label), 1)) : i.label ? (l(), n("span", qa, p(i.label), 1)) : f("", !0)
      ], 2),
      r.hasAppend ? (l(), n("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = O(() => {
        }, ["stop"]))
      }, [
        b(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (l(), n(L, { key: 1 }, [
      i.icon ? (l(), n("span", Za, [
        S(o, {
          name: i.icon,
          size: r.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      r.showLabel ? (l(), n("span", Qa, p(i.label), 1)) : i.label ? (l(), n("span", Xa, p(i.label), 1)) : f("", !0)
    ], 64))
  ], 10, Ua);
}
const es = /* @__PURE__ */ w(Ya, [["render", Ja]]), ts = ["sm", "md", "lg"], is = ["horizontal", "vertical"];
function rs(e) {
  return typeof e == "boolean" || e === "mobile";
}
const ls = {
  name: "SegmentGroup",
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ts.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => is.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: rs
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: !0
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      uiSegmentGroup: this
    };
  },
  computed: {
    resolvedSize() {
      return qe(this.size, { defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? je() : !!this.iconOnly;
    },
    rootClass() {
      return x(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.resolvedIconOnly && "ui-segment-group--icon-only",
        !this.block && this.direction !== "vertical" && "ui-segment-group--inline",
        this.resolvedSize !== "md" && `ui-segment-group--${this.resolvedSize}`,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, as = ["aria-label"];
function ss(e, t, i, s, a, r) {
  return l(), n("div", C({
    class: r.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, as);
}
const ns = /* @__PURE__ */ w(ls, [["render", ss]]), os = ["horizontal", "vertical"], us = ["default", "pills"], cs = {
  name: "Stepper",
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
      validator: (e) => us.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => os.includes(e)
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
        iconType: (t == null ? void 0 : t.iconType) ?? "light"
      }));
    },
    rootClass() {
      return x(
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
      const t = this.normalizedSteps.length - 1, i = Math.min(t, Math.max(0, e));
      this.$emit("update:modelValue", i);
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
}, ds = ["aria-label"], hs = { class: "ui-stepper-pills-track" }, fs = {
  key: 0,
  class: "ui-stepper-pills-label"
}, ms = { class: "flex w-full min-w-0 items-center justify-center" }, ps = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, gs = {
  key: 1,
  class: "tabular-nums"
}, bs = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, ys = { class: "ui-stepper-title ui-stepper-title--horizontal" }, vs = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, _s = { class: "flex flex-col items-center" }, ks = {
  key: 1,
  class: "tabular-nums"
}, ws = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Ss = { class: "ui-stepper-title" }, xs = {
  key: 0,
  class: "ui-stepper-description"
};
function Cs(e, t, i, s, a, r) {
  const o = v("ui-icon");
  return l(), n("div", C({
    class: r.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, r.passthroughAttrs), [
    i.variant === "pills" ? (l(), n(L, { key: 0 }, [
      d("div", hs, [
        (l(!0), n(L, null, z(r.normalizedSteps, (u, c) => (l(), y(F(i.interactive ? "button" : "span"), C({
          key: c,
          class: ["ui-stepper-pill", r.pillClass(c)],
          role: "listitem",
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? r.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (l(), n("p", fs, p(r.pillsLabel), 1)) : f("", !0)
    ], 64)) : i.direction === "horizontal" ? (l(!0), n(L, { key: 1 }, z(r.normalizedSteps, (u, c) => (l(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", ms, [
        c > 0 ? (l(), n("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", r.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", ps)),
        (l(), y(F(i.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? r.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (l(), y(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", gs, p(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < r.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", r.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", bs))
      ]),
      d("p", ys, p(u.title), 1),
      u.description ? (l(), n("p", vs, p(u.description), 1)) : f("", !0)
    ]))), 128)) : (l(!0), n(L, { key: 2 }, z(r.normalizedSteps, (u, c) => (l(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", _s, [
        (l(), y(F(i.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? r.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (l(), y(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", ks, p(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < r.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 0,
          class: k(["ui-stepper-vrail", r.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      d("div", ws, [
        d("p", Ss, p(u.title), 1),
        u.description ? (l(), n("p", xs, p(u.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, ds);
}
const Ls = /* @__PURE__ */ w(cs, [["render", Cs]]);
let Ie = 0;
const Ts = {
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
    return Ie += 1, { fallbackId: `ui-slider-${Ie}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return x("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
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
}, Is = {
  key: 0,
  class: "ui-slider-header"
}, As = {
  key: 0,
  class: "ui-form-label"
}, zs = {
  key: 1,
  class: "ui-slider-value"
}, Os = { class: "ui-slider-rail" }, Ms = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Ps = {
  key: 1,
  class: "ui-slider-scale"
}, Vs = { key: 0 }, Es = { key: 1 };
function Bs(e, t, i, s, a, r) {
  const o = v("ui-progress");
  return l(), n("div", {
    class: k(r.rootClass)
  }, [
    i.label || r.hasValue ? (l(), n("div", Is, [
      i.label ? (l(), n("span", As, p(i.label), 1)) : f("", !0),
      r.hasValue ? (l(), n("span", zs, p(i.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    d("div", Os, [
      S(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: r.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      d("input", C(r.passthroughAttrs, {
        id: r.resolvedId,
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
        onInput: t[0] || (t[0] = (...u) => r.onNativeInput && r.onNativeInput(...u)),
        onChange: t[1] || (t[1] = (...u) => r.onChange && r.onChange(...u))
      }), null, 16, Ms)
    ]),
    i.minLabel || i.maxLabel ? (l(), n("div", Ps, [
      i.minLabel ? (l(), n("span", Vs, p(i.minLabel), 1)) : f("", !0),
      i.maxLabel ? (l(), n("span", Es, p(i.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const Rs = /* @__PURE__ */ w(Ts, [["render", Bs]]);
let Ae = 0;
const Ds = {
  name: "Switch",
  inheritAttrs: !1,
  props: {
    /** `v-model` */
    modelValue: {
      type: Boolean,
      default: !1
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
  emits: ["update:modelValue", "change"],
  data() {
    return Ae += 1, { fallbackId: `ui-switch-${Ae}` };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), t = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
      return t;
    }
  },
  methods: {
    onKeydown(e) {
      this.isDisabled || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.toggle());
    },
    toggle() {
      if (this.isDisabled) return;
      const e = !this.modelValue;
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
}, Fs = ["id", "aria-checked", "disabled", "aria-describedby"];
function Ns(e, t, i, s, a, r) {
  return l(), n("button", C({
    type: "button",
    role: "switch",
    id: r.resolvedId,
    class: [
      "ui-switch",
      r.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": i.modelValue ? "true" : "false",
    disabled: i.disabled,
    "aria-describedby": i.ariaDescribedby
  }, r.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...o) => r.toggle && r.toggle(...o)),
    onKeydown: t[1] || (t[1] = (...o) => r.onKeydown && r.onKeydown(...o))
  }), [
    d("span", {
      class: k(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      d("span", {
        class: k(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Fs);
}
const $s = /* @__PURE__ */ w(Ds, [["render", Ns]]), Hs = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return x("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ws = { class: "ui-table-scroll" };
function Gs(e, t, i, s, a, r) {
  return l(), n("div", Ws, [
    d("table", C({ class: r.rootClass }, r.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const Ys = /* @__PURE__ */ w(Hs, [["render", Gs]]), Us = {
  name: "TableBody"
}, Ks = { class: "ui-table-body" };
function js(e, t, i, s, a, r) {
  return l(), n("tbody", Ks, [
    b(e.$slots, "default")
  ]);
}
const qs = /* @__PURE__ */ w(Us, [["render", js]]), Zs = ["left", "center", "right"], Qs = ["title", "secondary", "body"], Xs = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Zs.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Qs.includes(e)
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
      return x(
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
}, Js = ["colspan"];
function en(e, t, i, s, a, r) {
  return l(), n("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: k(r.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, Js);
}
const tn = /* @__PURE__ */ w(Xs, [["render", en]]), rn = ["left", "center", "right"], ln = ["sm", "md", "lg"], an = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => rn.includes(e)
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
      return x(
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
      if (!(this.iconCol || ln.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function sn(e, t, i, s, a, r) {
  return l(), n("th", {
    class: k(r.rootClass),
    style: E(r.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const nn = /* @__PURE__ */ w(an, [["render", sn]]), on = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return x(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function un(e, t, i, s, a, r) {
  return l(), n("thead", {
    class: k(r.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const cn = /* @__PURE__ */ w(on, [["render", un]]), dn = {
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
}, hn = { class: "ui-table-pagination" }, fn = { class: "ui-table-pagination-meta" }, mn = { class: "ui-table-pagination-nav" }, pn = { class: "ui-table-pagination-page" };
function gn(e, t, i, s, a, r) {
  const o = v("ui-button");
  return l(), n("div", hn, [
    d("div", fn, [
      b(e.$slots, "meta", {}, () => [
        T(p(i.metaText), 1)
      ])
    ]),
    d("div", mn, [
      S(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !r.canPrev,
        "aria-label": i.prevAriaLabel,
        onClick: t[0] || (t[0] = (u) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      d("div", pn, p(i.pageLabel), 1),
      S(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !r.canNext,
        "aria-label": i.nextAriaLabel,
        onClick: t[1] || (t[1] = (u) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const bn = /* @__PURE__ */ w(dn, [["render", gn]]), yn = ["none", "soft", "strong"], vn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || yn.includes(e)
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
      return x(
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
function _n(e, t, i, s, a, r) {
  return l(), n("tr", {
    class: k(r.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const kn = /* @__PURE__ */ w(vn, [["render", _n]]), wn = {
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
      return x("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Sn = ["id", "aria-labelledby"];
function xn(e, t, i, s, a, r) {
  return He((l(), n("div", C({
    role: "tabpanel",
    id: r.panelDomId,
    "aria-labelledby": r.triggerDomId,
    class: r.panelClass
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Sn)), [
    [We, r.isActive]
  ]);
}
const Cn = /* @__PURE__ */ w(wn, [["render", xn]]), Ln = Ve("ui-timepicker"), re = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const Tn = {
  name: "TimePicker",
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
      fallbackId: Ln(),
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
      for (let i = 0; i < 60; i += e)
        t.push(i);
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
    display() {
      return this.menuOpen ? `${H(this.draftHour)}:${H(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.resolvedPlaceholder;
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
    pad2: H,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, i = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (t = Math.min(23, Math.max(0, parseInt(s[1], 10))), i = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const a = this.minuteValues;
      let r = a[0] ?? 0, o = 999;
      for (const u of a) {
        const c = Math.abs(u - i);
        c < o && (o = c, r = u);
      }
      this.draftHour = t, this.draftMinute = r;
    },
    wheelItemHeight(e) {
      if (!e) return re;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return re;
      const i = t.getBoundingClientRect().height;
      return i > 0 ? i : re;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - i) / 2;
      const s = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, t) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, r = Math.round((a - s - i / 2) / i);
      return Math.min(t, Math.max(0, r));
    },
    scrollTopForIndex(e, t) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + t * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: i = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, t);
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
      const t = this.minuteValues;
      if (!t.length) return;
      const i = Math.min(t.length - 1, Math.max(0, e));
      this.draftMinute = t[i], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, i, { smooth: !0 }), window.setTimeout(() => {
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
      const i = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[i];
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
      const e = `${H(this.draftHour)}:${H(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.indexFromScroll(e, 23);
      this.draftHour = t;
      const i = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - i) > 0.5 && (e.scrollTop = i), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.minuteValues;
      if (!t.length) return;
      const i = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[i];
      const s = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, In = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, An = { class: "ui-timepicker-wheels" }, zn = { class: "ui-timepicker-wheels-row" }, On = ["aria-valuenow", "aria-label"], Mn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Pn = { class: "ui-timepicker-wheel-spacer" }, Vn = ["onClick"], En = ["aria-valuenow", "aria-label"], Bn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Rn = { class: "ui-timepicker-wheel-spacer" }, Dn = ["onClick"], Fn = { class: "min-w-0 flex-1 truncate text-foreground" }, Nn = { class: "ui-timepicker-panel w-full p-2" }, $n = { class: "ui-timepicker-wheels" }, Hn = { class: "ui-timepicker-wheels-row" }, Wn = ["aria-valuenow", "aria-label"], Gn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Yn = { class: "ui-timepicker-wheel-spacer" }, Un = ["onClick"], Kn = ["aria-valuenow", "aria-label"], jn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, qn = { class: "ui-timepicker-wheel-spacer" }, Zn = ["onClick"];
function Qn(e, t, i, s, a, r) {
  const o = v("ui-button"), u = v("ui-popover");
  return l(), n("div", {
    class: k([
      "ui-timepicker",
      i.embedded ? "ui-timepicker--embedded" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (l(), n("div", In, [
      d("div", An, [
        t[2] || (t[2] = d("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        d("div", zn, [
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": r.hourAriaLabel
          }, [
            d("div", Mn, [
              d("div", Pn, [
                (l(!0), n(L, null, z(r.hourOptions, (c) => (l(), n("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => r.selectHour(c)
                }, p(r.pad2(c)), 11, Vn))), 128))
              ])
            ], 512)
          ], 8, On),
          t[1] || (t[1] = d("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": r.minuteAriaLabel
          }, [
            d("div", Bn, [
              d("div", Rn, [
                (l(!0), n(L, null, z(r.minuteValues, (c, h) => (l(), n("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => r.selectMinute(h)
                }, p(r.pad2(c)), 11, Dn))), 128))
              ])
            ], 512)
          ], 8, En)
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
    ])) : (l(), y(u, {
      key: 1,
      open: a.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (c) => a.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: m
        }, () => [
          S(o, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: i.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", Fn, p(r.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        d("div", Nn, [
          d("div", $n, [
            t[6] || (t[6] = d("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", Hn, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": r.hourAriaLabel
              }, [
                d("div", Gn, [
                  d("div", Yn, [
                    (l(!0), n(L, null, z(r.hourOptions, (c) => (l(), n("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => r.selectHour(c)
                    }, p(r.pad2(c)), 11, Un))), 128))
                  ])
                ], 512)
              ], 8, Wn),
              t[5] || (t[5] = d("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": r.minuteAriaLabel
              }, [
                d("div", jn, [
                  d("div", qn, [
                    (l(!0), n(L, null, z(r.minuteValues, (c, h) => (l(), n("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => r.selectMinute(h)
                    }, p(r.pad2(c)), 11, Zn))), 128))
                  ])
                ], 512)
              ], 8, Kn)
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
const ze = /* @__PURE__ */ w(Tn, [["render", Qn]]), Xn = ["square", "video", "auto"], Jn = ["fill", "sm", "md", "lg"], Oe = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, eo = {
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
      validator: (e) => Xn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Jn.includes(e)
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
      return x(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Oe[this.size] || Oe.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = s);
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
}, to = ["src", "alt"], io = ["aria-hidden"], ro = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, lo = {
  key: 3,
  class: "ui-photo__overflow"
}, ao = ["aria-label"], so = ["aria-label"], no = { class: "ui-photo-preview__panel" }, oo = ["src", "alt"], uo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function co(e, t, i, s, a, r) {
  const o = v("ui-icon"), u = v("ui-button");
  return l(), n(L, null, [
    (l(), y(F(r.rootTag), C({
      type: i.interactive ? "button" : void 0,
      class: r.rootClass
    }, r.rootBind, { onClick: r.onClick }), {
      default: g(() => [
        i.src && !a.imageFailed ? (l(), n("img", {
          key: 0,
          src: i.src,
          alt: r.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (c) => a.imageFailed = !0)
        }, null, 40, to)) : (l(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          S(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, io)),
        i.favorite ? (l(), n("span", ro, [
          S(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        i.overflowLabel ? (l(), n("span", lo, p(i.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (l(), y(Q, { to: "body" }, [
      S(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...c) => r.onPreviewKeydown && r.onPreviewKeydown(...c))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[1] || (t[1] = (...c) => r.closePreview && r.closePreview(...c))
            }, null, 8, so),
            d("div", no, [
              S(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (l(), y(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: O(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.activeSrc ? (l(), n("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, oo)) : f("", !0),
              r.showNext ? (l(), y(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: O(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.counterLabel ? (l(), n("p", uo, p(r.counterLabel), 1)) : f("", !0)
            ])
          ], 40, ao)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ho = /* @__PURE__ */ w(eo, [["render", co]]), fo = ["square", "video", "auto"], mo = {
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
      validator: (e) => fo.includes(e)
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
      return x(
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
}, po = ["data-count"], go = ["aria-label"], bo = ["aria-label"], yo = { class: "ui-photo-preview__panel" }, vo = ["src", "alt"], _o = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ko(e, t, i, s, a, r) {
  const o = v("ui-photo"), u = v("ui-button");
  return l(), n(L, null, [
    d("div", {
      class: k(["ui-photos", r.layoutClass]),
      "data-count": r.displayCount
    }, [
      (l(!0), n(L, null, z(r.visibleItems, (c, h) => (l(), y(o, {
        key: c.key || `${c.src}-${h}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": h,
        "overflow-label": h === r.visibleItems.length - 1 && r.overflowCount > 0 ? r.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: r.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, po),
    (l(), y(Q, { to: "body" }, [
      S(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...c) => r.onPreviewKeydown && r.onPreviewKeydown(...c))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[0] || (t[0] = (...c) => r.closePreview && r.closePreview(...c))
            }, null, 8, bo),
            d("div", yo, [
              S(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (l(), y(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: O(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.activeSrc ? (l(), n("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, vo)) : f("", !0),
              r.showNext ? (l(), y(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: O(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              r.counterLabel ? (l(), n("p", _o, p(r.counterLabel), 1)) : f("", !0)
            ])
          ], 40, go)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const wo = /* @__PURE__ */ w(mo, [["render", ko]]);
function K(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Io() {
  return {
    push: $,
    dismiss: Qe,
    clear: Ze,
    info: (e) => $({ ...K(e), variant: "info" }),
    success: (e) => $({ ...K(e), variant: "success" }),
    warning: (e) => $({ ...K(e), variant: "warning" }),
    error: (e) => $({ ...K(e), variant: "error" })
  };
}
function Ao(e = !1) {
  return ne({
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
function zo() {
  return {
    confirm: Ai
  };
}
const se = {
  en: Je,
  tr: Ee
};
function Oo(e = "tr") {
  return se[e] ?? se.tr;
}
const Mo = Ee, So = [
  ["ui-action-card", zt],
  ["ui-action-card-list", Vt],
  ["ui-action-group", et],
  ["ui-ai-button", Ft],
  ["ui-alert", tt],
  ["ui-avatar", Kt],
  ["ui-badge", it],
  ["ui-button", rt],
  ["ui-card", lt],
  ["ui-checkbox", Si],
  ["ui-checkbox-group", Ii],
  ["ui-color-picker", ui],
  ["ui-currency-input", Fe],
  ["ui-confirm-dialog", Mi],
  ["ui-date-picker", at],
  ["ui-date-range-picker", Ki],
  ["ui-dialog", st],
  ["ui-divider", oe],
  ["ui-dropdown", Qi],
  ["ui-empty", nt],
  ["ui-field", sr],
  ["ui-field-action", vr],
  ["ui-file", Or],
  ["ui-form-row", ot],
  ["ui-guidance", sl],
  ["ui-icon", ut],
  ["ui-icon-picker", kl],
  ["ui-input", ct],
  ["ui-price-input", Il],
  ["ui-password", El],
  ["ui-phone", dt],
  ["ui-pin", $l],
  ["ui-list", Yl],
  ["ui-list-item", Jl],
  ["ui-popover", ht],
  ["ui-progress", ca],
  ["ui-radio", ft],
  ["ui-radio-group", mt],
  ["ui-select", pt],
  ["ui-sheet", Ca],
  ["ui-menu", Ma],
  ["ui-menu-group", Ra],
  ["ui-menu-item", Na],
  ["ui-menu-nav", Ga],
  ["ui-segment", es],
  ["ui-segment-group", ns],
  ["ui-skeleton", gt],
  ["ui-slider", Rs],
  ["ui-stepper", Ls],
  ["ui-switch", $s],
  ["ui-table", Ys],
  ["ui-table-body", qs],
  ["ui-table-cell", tn],
  ["ui-table-head", nn],
  ["ui-table-header", cn],
  ["ui-table-pagination", bn],
  ["ui-table-row", kn],
  ["ui-tag", bt],
  ["ui-tab-list", yt],
  ["ui-tab-panel", Cn],
  ["ui-tabs", vt],
  ["ui-tab-trigger", _t],
  ["ui-time-picker", ze],
  ["ui-timepicker", ze],
  ["ui-tooltip", kt],
  ["ui-toast", wt],
  ["ui-photo", ho],
  ["ui-photos", wo]
];
function xo(e, t = {}) {
  var u, c;
  const { i18n: i, locale: s, locales: a, theme: r, priceInput: o } = t;
  if (r && Xe(r), o && xl(o), (u = i == null ? void 0 : i.global) != null && u.mergeLocaleMessage) {
    const h = a ?? (s != null ? [s] : [
      typeof i.global.locale == "string" ? i.global.locale : ((c = i.global.locale) == null ? void 0 : c.value) ?? "tr"
    ]);
    for (const m of h) {
      const _ = se[m];
      _ && i.global.mergeLocaleMessage(m, _);
    }
  }
  for (const [h, m] of So)
    e.component(h, m);
}
const Po = {
  install: xo
};
export {
  zt as ActionCard,
  Vt as ActionCardList,
  et as ActionGroup,
  Ft as AiButton,
  tt as Alert,
  Kt as Avatar,
  it as Badge,
  rt as Button,
  lt as Card,
  Si as Checkbox,
  Ii as CheckboxGroup,
  ui as ColorPicker,
  Mi as ConfirmDialog,
  Fe as CurrencyInput,
  at as DatePicker,
  Ki as DateRangePicker,
  st as Dialog,
  oe as Divider,
  Qi as Dropdown,
  nt as Empty,
  Bo as FEW_COLOR_SCALE,
  Ro as FEW_PALETTE_ID,
  Do as FEW_PRIMARY,
  Fo as FEW_PRIMARY_FOREGROUND,
  sr as Field,
  vr as FieldAction,
  Or as File,
  ot as FormRow,
  No as GOOGLE_FONTS_CATALOG,
  sl as Guidance,
  ut as Icon,
  kl as IconPicker,
  ct as Input,
  Yl as List,
  Jl as ListItem,
  Ma as Menu,
  Ra as MenuGroup,
  Na as MenuItem,
  Ga as MenuNav,
  wl as PRICE_FORMATS,
  El as Password,
  dt as Phone,
  ho as Photo,
  wo as Photos,
  $l as Pin,
  ht as Popover,
  Il as PriceInput,
  ca as Progress,
  ft as Radio,
  mt as RadioGroup,
  es as Segment,
  ns as SegmentGroup,
  pt as Select,
  Ca as Sheet,
  gt as Skeleton,
  Rs as Slider,
  Ls as Stepper,
  $s as Switch,
  $o as THEME_CUSTOM_CSS_ID,
  Ho as THEME_PRESETS,
  Wo as THEME_PRESET_IDS,
  yt as TabList,
  Cn as TabPanel,
  _t as TabTrigger,
  Ys as Table,
  qs as TableBody,
  tn as TableCell,
  nn as TableHead,
  cn as TableHeader,
  bn as TablePagination,
  kn as TableRow,
  vt as Tabs,
  bt as Tag,
  ze as TimePicker,
  wt as Toast,
  kt as Tooltip,
  Go as applyGoogleFontsForTheme,
  Yo as applyThemeCustomCss,
  Xe as applyUiTheme,
  Uo as buildGoogleFontsLinkTag,
  Ko as buildGoogleFontsStylesheetUrl,
  jo as buildThemeStyleAttr,
  qo as clearThemeCustomCss,
  Ze as clearToasts,
  Zo as createUiId,
  Ve as createUiIdFactory,
  Po as default,
  Qo as deriveBrandColorsFromPrimary,
  Qe as dismissToast,
  To as formatCurrencyAmount,
  di as formatMoneyInput,
  Be as getCurrencySymbol,
  Xo as getFewPrimaryColors,
  De as getMoneySeparators,
  Cl as getPriceInputConfig,
  Jo as getThemePreset,
  Oo as getUiMessages,
  eu as googleFontSelectOptions,
  tu as mergeUiTheme,
  ci as parseLocalizedMoneyInput,
  Ke as pickPassthroughAttrs,
  $ as pushToast,
  Ai as requestConfirm,
  iu as resetUiIds,
  qe as resolveControlSize,
  J as resolveCurrencyCode,
  ru as resolvePrimaryColor,
  lu as resolveThemeFontFamilies,
  au as resolveThemePreset,
  su as resolveThemeVars,
  M as resolveUiText,
  Re as sanitizeMoneyInput,
  xl as setPriceInputConfig,
  Mo as uiMessagesTr,
  zo as useConfirm,
  Ao as useDialog,
  Io as useToast,
  nu as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
