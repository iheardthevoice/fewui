import { resolveComponent as v, openBlock as l, createElementBlock as n, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as d, toDisplayString as p, normalizeStyle as E, resolveDynamicComponent as F, mergeProps as T, withCtx as g, createVNode as S, withModifiers as M, createTextVNode as L, Fragment as C, renderList as z, withKeys as le, reactive as ne, normalizeProps as Pe, guardReactiveProps as Oe, createSlots as j, Teleport as Q, Transition as X, readonly as $e, withDirectives as He, vShow as We } from "vue";
import { _ as w, K as x, a7 as P, a2 as Ye, V as Ge, e as oe, U as Ue, $ as Ke, M as Ve, a1 as je, J as qe, O as Ze, a0 as $, a8 as Ee, w as Qe, Q as Xe, A as Je, a as et, B as tt, b as it, C as rt, c as lt, d as at, E as st, i as nt, I as ot, j as ut, P as ct, k as dt, R as ht, l as ft, S as mt, m as pt, r as gt, o as bt, q as yt, p as vt, t as _t, s as kt } from "./index-Czn3by8P.js";
import { F as Ao, f as zo, g as Mo, h as Po, G as Oo, D as Vo, T as Eo, n as Ro, u as Bo, v as Do, x as Fo, y as No, z as $o, H as Ho, L as Wo, N as Yo, W as Go, X as Uo, Y as Ko, Z as jo, a3 as qo, a4 as Zo, a5 as Qo, a6 as Xo, a9 as Jo } from "./index-Czn3by8P.js";
const wt = ["solid", "regular", "brands", "light", "duotone", "thin"], St = {
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
      validator: (e) => wt.includes(e)
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
}, xt = ["disabled"], Ct = { class: "ui-action-card__content" }, Lt = { class: "ui-action-card__title" }, Tt = {
  key: 0,
  class: "ui-action-card__description"
};
function It(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (c) => e.$emit("click", c))
  }, [
    b(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (l(), y(o, {
        key: 0,
        name: r.icon,
        type: r.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    d("span", Ct, [
      d("span", Lt, p(r.title), 1),
      r.description ? (l(), n("span", Tt, p(r.description), 1)) : f("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (l(), y(o, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, xt);
}
const At = /* @__PURE__ */ w(St, [["render", It]]), zt = {
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
function Pt(e, t, r, s, a, i) {
  return l(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: E(i.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Mt);
}
const Ot = /* @__PURE__ */ w(zt, [["render", Pt]]), Vt = ["sm", "md", "lg", "xl"], fe = {
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
function Et(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return pe[t] && (t = pe[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Rt(e) {
  var s;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const a = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${a}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((s = r[0]) == null ? void 0 : s[0]) || "?").toLocaleUpperCase("tr-TR");
}
const Bt = {
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
      validator: (e) => Vt.includes(e)
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
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
      return Rt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Et(e[0]) : "default";
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
}, Dt = ["src", "alt"], Ft = ["role", "aria-label", "aria-hidden"];
function Nt(e, t, r, s, a, i) {
  return l(), y(F(i.rootTag), T({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: g(() => [
      r.src && !a.imageFailed ? (l(), n("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (o) => a.imageFailed = !0)
      }, null, 40, Dt)) : (l(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, p(i.displayInitials), 9, Ft))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const $t = /* @__PURE__ */ w(Bt, [["render", Nt]]), Ht = [
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
], Wt = {
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
      presetColors: Ht
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
      return this.triggerPlaceholder ? this.triggerPlaceholder : P(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : P(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : P(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : P(this, "ui.colorPicker.customHex", "Custom color (hex)");
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
}, Yt = ["disabled", "aria-expanded", "onClick"], Gt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ut = { class: "ui-select-field-suffix" }, Kt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, jt = { class: "ui-color-picker-panel" }, qt = { class: "ui-color-picker-panel__header" }, Zt = { class: "ui-color-picker-panel__title" }, Qt = { class: "ui-color-picker-swatches" }, Xt = ["title", "onClick"], Jt = { class: "ui-color-picker-custom" }, ei = { class: "ui-color-picker-panel__title" }, ti = { class: "ui-color-picker-custom__row" };
function ii(e, t, r, s, a, i) {
  const o = v("ui-icon"), c = v("ui-button"), u = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: k(i.rootClass)
  }, [
    S(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => a.popoverOpen = m),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
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
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            d("span", Gt, [
              i.localColor ? (l(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: i.localColor })
              }, null, 4)) : (l(), y(o, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            d("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, p(i.displayValue), 3),
            d("span", Ut, [
              d("span", Kt, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Yt)
        ])
      ]),
      content: g(() => [
        d("div", jt, [
          d("div", qt, [
            d("span", Zt, p(i.popoverTitleLabel), 1),
            i.localColor ? (l(), y(c, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(i.clearColor, ["stop"])
            }, {
              default: g(() => [
                L(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", Qt, [
            (l(!0), n(C, null, z(a.presetColors, (m) => (l(), n("button", {
              key: m,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === m }]),
              style: E({ backgroundColor: m }),
              title: m,
              onClick: (_) => i.selectColor(m)
            }, [
              i.localColor === m ? (l(), y(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, Xt))), 128))
          ]),
          d("div", Jt, [
            d("span", ei, p(i.customColorLabelText), 1),
            d("div", ti, [
              S(u, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => i.localColor = m),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              d("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: E({ backgroundColor: i.localColor || "transparent" }),
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
const ri = /* @__PURE__ */ w(Wt, [["render", ii]]), ge = {
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
  const r = String(e).trim();
  if (ge[r])
    return ge[r];
  const s = r.toUpperCase();
  return W[s] ? s : t in W ? t : "TRY";
}
function Re(e) {
  var r;
  const t = J(e);
  if (W[t])
    return W[t];
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
function _o(e, t, r = "tr-TR") {
  const s = Number(e) || 0, a = J(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(s);
  } catch {
    return `${Re(a)}${s.toFixed(2)}`;
  }
}
function Be(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const s = t.slice(0, r), a = t.slice(r + 1).replace(/\./g, "");
    t = `${s}.${a}`;
  }
  return t;
}
function De(e = "tr-TR") {
  var t, r;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = s.find((a) => a.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = s.find((a) => a.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function li(e, t = "tr-TR") {
  const { group: r, decimal: s } = De(t);
  let a = String(e ?? "").trim();
  return a ? (a = a.split(r).join(""), a = a.split(s).join("."), Be(a)) : "";
}
function ai(e, t = "tr-TR") {
  const r = Be(e);
  if (!r) return "";
  const { group: s, decimal: a } = De(t), [i = "", o] = r.split("."), u = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return o === void 0 ? u : `${u}${a}${o}`;
}
let be = 0;
const si = ["sm", "md", "lg"], ni = {
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
      validator: (e) => si.includes(e)
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
      return Re(this.currency);
    },
    resolvedCurrencyCode() {
      return J(this.currency);
    },
    innerValue: {
      get() {
        return ai(this.modelValue, this.locale);
      },
      set(e) {
        const t = li(e, this.locale);
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
}, oi = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function ui(e, t, r, s, a, i) {
  const o = v("ui-input");
  return l(), y(o, T({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => i.innerValue = c),
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
    onFocus: t[1] || (t[1] = (c) => e.$emit("focus", c)),
    onBlur: i.onBlur
  }), {
    prepend: g(() => [
      d("span", oi, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Fe = /* @__PURE__ */ w(ni, [["render", ui]]), ci = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, s = Array.isArray(r) ? [...r] : [], a = s.findIndex((i) => Object.is(i, this.value));
        t && a === -1 ? s.push(this.value) : !t && a !== -1 && s.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
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
}, di = ["type", "name", "value", "checked"], hi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, fi = { class: "ui-checkbox-body" }, mi = {
  key: 0,
  class: "ui-checkbox-label"
}, pi = {
  key: 1,
  class: "ui-checkbox-description"
};
function gi(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("label", {
    class: k(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = le(M((...c) => i.toggle && i.toggle(...c), ["prevent"]), ["enter"])),
      t[2] || (t[2] = le(M((...c) => i.toggle && i.toggle(...c), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...c) => i.onNativeChange && i.onNativeChange(...c))
    }, null, 40, di),
    d("span", hi, [
      i.isChecked ? (l(), y(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    d("span", fi, [
      e.$slots.label || r.label ? (l(), n("span", mi, [
        b(e.$slots, "label", {}, () => [
          L(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (l(), n("span", pi, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const bi = /* @__PURE__ */ w(ci, [["render", gi]]), yi = ["list", "button", "List", "Button"];
let ye = 0;
const vi = {
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
      validator: (e) => yi.includes(e)
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
}, _i = ["aria-label"];
function ki(e, t, r, s, a, i) {
  return l(), n("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, _i);
}
const wi = /* @__PURE__ */ w(vi, [["render", ki]]), I = ne({
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
function Si(e = {}) {
  return new Promise((t) => {
    I.title = e.title ?? "", I.description = e.description ?? "", I.confirmLabel = e.confirmLabel ?? "", I.cancelLabel = e.cancelLabel ?? "", I.destructive = !!e.destructive, I._resolve = t, I.open = !0;
  });
}
function ee(e) {
  const t = I._resolve;
  I.open = !1, I._resolve = null, t && t(!!e);
}
const xi = {
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
function Ci(e, t, r, s, a, i) {
  const o = v("ui-button"), c = v("ui-dialog");
  return l(), y(c, {
    open: i.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (u) => i.syncOpen = u),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: i.confirmState.title,
    description: i.confirmState.description,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": i.confirmState.title || i.fallbackAriaLabel
  }, {
    footer: g(() => [
      S(o, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: g(() => [
          L(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      S(o, {
        rounded: "",
        color: i.confirmState.destructive ? "danger" : "primary",
        onClick: i.onConfirm
      }, {
        default: g(() => [
          L(p(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Li = /* @__PURE__ */ w(xi, [["render", Ci]]);
let ve = 0;
function Y(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${Y(e.getMonth() + 1)}-${Y(e.getDate())}`;
}
function G(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]) - 1, a = Number(t[3]), i = new Date(r, s, a);
  return i.getFullYear() !== r || i.getMonth() !== s || i.getDate() !== a ? null : i;
}
function B(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function te(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function _e(e, t, r, s) {
  const a = `${e}-${Y(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${Y(t + 1)}-${Y(i)}`;
  if (r && o > r && (o = r), s && a < s && o < s) return null;
  let c = a;
  return s && c < s && (c = s), B(c, o) > 0 ? null : [c, o];
}
const Ti = {
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
    const e = ve, t = ((s = this.modelValue) == null ? void 0 : s[0]) || "", r = G(t) || G((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-daterangepicker-${e}`,
      menuOpen: !1,
      viewYear: r.getFullYear(),
      viewMonth: r.getMonth(),
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
      return Ye((e = this.$i18n) == null ? void 0 : e.locale);
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
        return B(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = D(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const s = D(r), a = e.getMonth(), i = e.getFullYear(), o = new Date(i, a - 1, 1), c = o.getFullYear(), u = o.getMonth(), h = (_, A) => typeof this.$t == "function" ? this.$t(_, A) : _;
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
            month: te(i, a, this.locale)
          }),
          range: _e(i, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: te(c, u, this.locale)
          }),
          range: _e(c, u, this.maxYmd, this.minYmd)
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
      return [e, t].map((r) => ({
        ...r,
        title: te(r.year, r.month, this.locale),
        cells: this.buildCellsForMonth(r.year, r.month)
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
      const e = G(this.startYmd) || G(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (s) => s ? Ge(s, this.locale) || s : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? r(e || t) : `${r(e)} – ${r(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), s = new Date(e, t, 1 - r.getDay()), a = this.previewStart, i = this.previewEnd, o = a && i, c = [];
      for (let u = 0; u < 42; u += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + u), m = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), A = D(h), N = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, O = D(/* @__PURE__ */ new Date()) === A, R = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let ue = !1, ce = !1;
        if (o) {
          const de = B(a, i) <= 0 ? a : i, he = B(a, i) <= 0 ? i : a;
          ue = B(A, de) >= 0 && B(A, he) <= 0, ce = A === de || A === he;
        }
        c.push({
          key: N,
          d: _,
          date: h,
          today: O,
          inMonth: m,
          disabled: R,
          inRange: ue,
          endpoint: ce
        });
      }
      return c;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, s] = e.range;
      this.pickingStart = r, this.pickingEnd = s, this.$emit("update:modelValue", [r, s]), this.$emit("change", [r, s]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, a = r;
      if (B(a, s) < 0) {
        const i = s;
        s = a, a = i;
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
}, Ii = { class: "min-w-0 flex-1 truncate text-foreground" }, Ai = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, zi = { class: "ui-daterangepicker-layout" }, Mi = ["aria-label"], Pi = { class: "ui-daterangepicker-calendars" }, Oi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Vi = { class: "ui-daterangepicker-month-row" }, Ei = { class: "mb-2 flex items-center justify-between gap-2" }, Ri = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Bi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Di = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Fi = { class: "ui-datepicker-grid" };
function Ni(e, t, r, s, a, i) {
  const o = v("ui-button"), c = v("ui-popover");
  return l(), n("div", {
    class: k(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(c, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (u) => a.menuOpen = u),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: m
        }, () => [
          S(o, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: r.disabled,
            "aria-expanded": u ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", Ii, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: u }) => [
        d("div", Ai, [
          d("div", zi, [
            d("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (l(!0), n(C, null, z(i.quickPresets, (h) => (l(), y(o, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (m) => i.applyQuick(h, u)
              }, {
                default: g(() => [
                  L(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Mi),
            d("div", Pi, [
              i.rangeHint ? (l(), n("p", Oi, p(i.rangeHint), 1)) : f("", !0),
              d("div", Vi, [
                (l(!0), n(C, null, z(i.calendarPanes, (h) => (l(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", Ei, [
                    h.showPrev ? (l(), y(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = M((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Ri)),
                    d("span", Bi, p(h.title), 1),
                    h.showNext ? (l(), y(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = M((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Di))
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
                  d("div", Fi, [
                    (l(!0), n(C, null, z(h.cells, (m) => (l(), y(o, {
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
                      onMouseenter: (_) => i.onCellHover(m),
                      onClick: (_) => i.pick(m, u)
                    }, {
                      default: g(() => [
                        L(p(m.d), 1)
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
const $i = /* @__PURE__ */ w(Ti, [["render", Ni]]), Hi = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Wi = {
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
      validator: (e) => Hi.includes(e)
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
function Yi(e, t, r, s, a, i) {
  const o = v("Divider"), c = v("ui-button"), u = v("ui-popover");
  return l(), y(u, {
    open: i.isOpen,
    placement: r.placement,
    "match-trigger-width": r.matchTriggerWidth,
    block: r.block,
    "inherit-layout": r.inheritLayout,
    "mobile-centered": !1,
    "close-on-outside-click": r.closeOnOutsideClick,
    "close-on-escape": r.closeOnEscape,
    "outside-click-ignore-selector": r.outsideClickIgnoreSelector,
    "onUpdate:open": i.onOpenChange
  }, {
    trigger: g((h) => [
      b(e.$slots, "trigger", Pe(Oe(h)))
    ]),
    content: g(({ close: h }) => [
      d("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = M(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? b(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (l(!0), n(C, { key: 1 }, z(r.items, (m, _) => (l(), n(C, { key: _ }, [
          m.divider ? (l(), y(o, {
            key: 0,
            spacing: "sm"
          })) : (l(), y(c, {
            key: 1,
            variant: "ghost",
            color: i.itemColor(m),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.icon || null,
            disabled: m.disabled,
            onClick: M((A) => i.onItem(m, h), ["stop"])
          }, {
            default: g(() => [
              L(p(m.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Gi = /* @__PURE__ */ w(Wi, [["render", Yi]]), Ui = ["solid", "regular", "brands", "light", "duotone", "thin"], Ki = {
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
      validator: (e) => Ui.includes(e)
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
}, ji = {
  key: 0,
  class: "ui-field__title-row"
}, qi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Zi = {
  key: 1,
  class: "ui-field__title"
}, Qi = {
  key: 1,
  class: "ui-field__value"
}, Xi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Ji(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("div", T({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (l(), n("div", ji, [
      i.showIcon ? (l(), n("span", qi, [
        S(o, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (l(), n("span", Zi, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (l(), n("div", Qi, [
      b(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (l(), n("p", Xi, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const er = /* @__PURE__ */ w(Ki, [["render", Ji]]), tr = ["popover", "dialog"], ir = ["sm", "md", "lg"], rr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], lr = {
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
      validator: (e) => tr.includes(e)
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
      validator: (e) => ir.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => rr.includes(e)
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
      return this.clearLabel != null && this.clearLabel !== "" ? this.clearLabel : P(this, "ui.fieldAction.clear", "Clear");
    },
    resolvedDoneLabel() {
      return this.doneLabel != null && this.doneLabel !== "" ? this.doneLabel : P(this, "ui.fieldAction.done", "Done");
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
}, ar = { class: "ui-field-action-header" }, sr = { class: "ui-field-action-header__text" }, nr = {
  key: 0,
  class: "ui-field-action-header__title"
}, or = {
  key: 1,
  class: "ui-field-action-header__description"
}, ur = { class: "ui-field-action-body" }, cr = { class: "ui-field-action-body" }, dr = { class: "ui-field-action-footer" };
function hr(e, t, r, s, a, i) {
  const o = v("ui-button"), c = v("ui-popover"), u = v("ui-dialog");
  return l(), n("div", {
    class: k([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (l(), y(c, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": t[0] || (t[0] = (h) => i.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: m }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: m,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue
        }, () => [
          r.iconOnly ? (l(), y(o, {
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
            onClick: (_) => i.onTriggerClick(_, m)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (l(), y(o, {
            key: 1,
            type: "button",
            variant: i.triggerVariant,
            color: i.triggerColor,
            size: r.size,
            rounded: "",
            "prefix-icon": r.prefixIcon,
            "suffix-icon": r.suffixIcon,
            disabled: r.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": i.triggerAriaLabel,
            onClick: (_) => i.onTriggerClick(_, m)
          }, {
            default: g(() => [
              L(p(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        d("div", ur, [
          b(e.$slots, "default", {
            close: h,
            open: i.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: g(({ close: h }) => [
          b(e.$slots, "header", { close: h }, () => [
            d("div", ar, [
              d("div", sr, [
                r.title ? (l(), n("p", nr, p(r.title), 1)) : f("", !0),
                r.description ? (l(), n("p", or, p(r.description), 1)) : f("", !0)
              ]),
              r.clearable && i.hasValue ? (l(), y(o, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": i.resolvedClearLabel,
                onClick: (m) => i.onClear(h)
              }, {
                default: g(() => [
                  L(p(i.resolvedClearLabel), 1)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (l(), n(C, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue
      }, () => [
        r.iconOnly ? (l(), y(o, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (l(), y(o, {
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
          onClick: t[2] || (t[2] = (h) => i.onTriggerClick(h, i.toggle))
        }, {
          default: g(() => [
            L(p(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      S(u, {
        open: i.resolvedOpen,
        "onUpdate:open": t[4] || (t[4] = (h) => i.resolvedOpen = h),
        title: r.title,
        description: r.description,
        icon: r.dialogIcon,
        "max-width": r.maxWidth,
        "close-on-backdrop": r.closeOnBackdrop,
        "close-on-escape": r.closeOnEscape
      }, j({
        default: g(() => [
          d("div", cr, [
            b(e.$slots, "default", {
              close: i.close,
              open: i.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        i.showDialogFooter ? {
          name: "footer",
          fn: g(() => [
            b(e.$slots, "footer", { close: i.close }, () => [
              d("div", dr, [
                r.clearable && i.hasValue ? (l(), y(o, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: t[3] || (t[3] = (h) => i.onClear(i.close))
                }, {
                  default: g(() => [
                    L(p(i.resolvedClearLabel), 1)
                  ]),
                  _: 1
                })) : f("", !0),
                S(o, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: g(() => [
                    L(p(i.resolvedDoneLabel), 1)
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
const fr = /* @__PURE__ */ w(lr, [["render", hr]]), mr = ["auto", "file", "folder"], pr = ["sm", "md", "lg"], gr = { icon: "folder", color: "text-sky-500" }, br = { icon: "file-lines", color: "text-muted-foreground" }, yr = {
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
function vr(e) {
  const t = q(e);
  return /[/\\]\s*$/.test(t);
}
function Ne(e) {
  const t = q(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function _r(e) {
  const t = Ne(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
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
}, kr = {
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
      validator: (e) => mr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => pr.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : vr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Ne(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return gr;
      const e = _r(this.name);
      return yr[e] || br;
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
}, wr = ["aria-label"], Sr = ["title"];
function xr(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("div", {
    class: k(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    d("div", {
      class: k(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      S(o, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: k(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    d("span", {
      class: k(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Sr)
  ], 10, wr);
}
const Cr = /* @__PURE__ */ w(kr, [["render", xr]]);
function Lr(e) {
  const t = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((o) => o.top)), s = Math.min(...t.map((o) => o.left)), a = Math.max(...t.map((o) => o.right)), i = Math.max(...t.map((o) => o.bottom));
  return {
    top: r,
    left: s,
    right: a,
    bottom: i,
    width: a - s,
    height: i - r,
    x: s,
    y: r,
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
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((a) => a instanceof HTMLElement), s = Lr(r.map((a) => a.getBoundingClientRect()));
    if (s) return s;
  }
  return t.getBoundingClientRect();
}
function Tr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && t.push(s);
  return t;
}
const Ir = ["dialog", "popover", "card", "tour"], Ar = ["solid", "regular", "brands", "light", "duotone", "thin"], zr = [
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
], Mr = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, Pr = 8, Or = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Ir.includes(e)
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
      validator: (e) => Ar.includes(e)
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
      validator: (e) => zr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Pr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Mr.includes(e)
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
      return this.goLabel ? this.goLabel : P(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : P(this, "ui.guidance.close", "Close");
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
      const t = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const s = window.innerWidth, a = window.innerHeight, i = r.getBoundingClientRect(), o = i.width || 320, c = i.height || 180;
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
      const u = Se(t);
      if (!u) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, u.top - h), _ = Math.max(0, u.left - h), A = Math.min(a, u.bottom + h), N = Math.min(s, u.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${_}px`,
        width: `${Math.max(0, N - _)}px`,
        height: `${Math.max(0, A - m)}px`
      };
      let O = A + V, R = _;
      this.placement.startsWith("top") ? O = m - c - V : this.placement.startsWith("right") ? (O = m, R = N + V) : this.placement.startsWith("left") ? (O = m, R = _ - o - V) : this.placement.includes("end") && (R = N - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && O + c > a - V && (O = m - c - V), O = Math.max(V, Math.min(O, a - c - V)), R = Math.max(V, Math.min(R, s - o - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${O}px`,
        left: `${R}px`,
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
          for (const r of Tr(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Vr = { class: "ui-guidance-footer" }, Er = { class: "ui-guidance-popover" }, Rr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Br = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Dr = { class: "ui-guidance-popover__text" }, Fr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Nr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, $r = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Hr = ["aria-label"], Wr = { class: "ui-guidance-tour__content" }, Yr = { class: "ui-header-lead" }, Gr = { class: "ui-header-lead__main" }, Ur = {
  key: 0,
  class: "ui-header-lead__icon"
}, Kr = { class: "ui-header-lead__text" }, jr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, qr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Zr = {
  key: 0,
  class: "ui-header-lead__actions"
}, Qr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Xr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Jr(e, t, r, s, a, i) {
  const o = v("ui-button"), c = v("ui-card"), u = v("ui-dialog"), h = v("ui-icon"), m = v("ui-popover");
  return i.shouldRender ? (l(), n("div", {
    key: 0,
    class: k(i.rootShellClass)
  }, [
    r.mode === "card" ? (l(), y(c, {
      key: 0,
      icon: r.icon,
      "icon-type": r.iconType,
      title: r.title,
      description: r.description,
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
      i.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          b(e.$slots, "footer", {}, () => [
            d("div", Vr, [
              r.showFooterClose ? (l(), y(o, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: g(() => [
                  L(p(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (l(), y(o, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: g(() => [
                  L(p(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (l(), y(u, {
      key: 1,
      open: i.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (_) => i.syncOpen = _),
      icon: r.icon,
      "icon-type": r.iconType,
      title: r.title,
      description: r.description,
      "max-width": r.maxWidth,
      "close-on-backdrop": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape,
      "show-close": r.showClose,
      onAfterLeave: t[1] || (t[1] = (_) => e.$emit("after-leave"))
    }, j({
      default: g(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      r.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          S(o, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: g(() => [
              L(p(i.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (l(), y(m, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (_) => i.syncOpen = _),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: g((_) => [
        b(e.$slots, "trigger", Pe(Oe(_)))
      ]),
      content: g(() => [
        d("div", Er, [
          r.icon || r.title || r.description ? (l(), n("div", Rr, [
            r.icon ? (l(), n("span", Br, [
              S(h, {
                name: r.icon,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            d("div", Dr, [
              r.title ? (l(), n("p", Fr, p(r.title), 1)) : f("", !0),
              r.description ? (l(), n("p", Nr, p(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (l(), n("div", $r, [
            r.showFooterClose ? (l(), y(o, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: g(() => [
                L(p(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            r.showGo ? (l(), y(o, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: g(() => [
                L(p(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (l(), y(Q, {
      key: 3,
      to: "body"
    }, [
      S(X, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (_) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          i.syncOpen ? (l(), n("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = le((..._) => i.onEscape && i.onEscape(..._), ["esc"]))
          }, [
            r.closeOnBackdrop ? (l(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => i.onBackdrop && i.onBackdrop(..._))
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
              "aria-label": r.title || i.resolvedGoLabel
            }, [
              d("div", Wr, [
                d("div", Yr, [
                  d("div", Gr, [
                    r.icon ? (l(), n("span", Ur, [
                      S(h, {
                        name: r.icon,
                        type: r.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    d("div", Kr, [
                      r.title ? (l(), n("p", jr, p(r.title), 1)) : f("", !0),
                      r.description ? (l(), n("p", qr, p(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (l(), n("div", Zr, [
                    S(o, {
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
                e.$slots.default ? (l(), n("div", Qr, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (l(), n("div", Xr, [
                  r.showFooterClose ? (l(), y(o, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: g(() => [
                      L(p(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  r.showGo ? (l(), y(o, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: g(() => [
                      L(p(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Hr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const el = /* @__PURE__ */ w(Or, [["render", Jr]]), tl = ["solid", "regular", "brands", "light", "duotone", "thin"], il = {
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
      validator: (e) => tl.includes(e)
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
      let r = t;
      return e && (r = t.filter((s) => String(s).toLowerCase().includes(e))), r.slice(0, this.maxResults);
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
}, rl = ["disabled", "aria-expanded", "onClick"], ll = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, al = { class: "ui-select-field-suffix" }, sl = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, nl = { class: "ui-icon-picker-panel" }, ol = { class: "ui-icon-picker-panel__header" }, ul = { class: "ui-icon-picker-panel__title" }, cl = { class: "ui-icon-picker-panel__search" }, dl = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, hl = {
  key: 1,
  class: "ui-icon-picker-grid"
}, fl = ["title", "onClick"];
function ml(e, t, r, s, a, i) {
  const o = v("ui-icon"), c = v("ui-button"), u = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: k(i.rootClass)
  }, [
    S(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => a.popoverOpen = m),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
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
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            d("span", ll, [
              S(o, {
                name: i.localIcon || "grid",
                type: r.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            d("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            d("span", al, [
              d("span", sl, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, rl)
        ])
      ]),
      content: g(() => [
        d("div", nl, [
          d("div", ol, [
            d("span", ul, p(i.popoverTitleLabel), 1),
            i.localIcon ? (l(), y(c, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(i.clearIcon, ["stop"])
            }, {
              default: g(() => [
                L(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", cl, [
            S(u, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => a.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (l(), n("div", hl, [
            (l(!0), n(C, null, z(i.filteredIcons, (m) => (l(), n("button", {
              key: m,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === m }]),
              title: m,
              onClick: (_) => i.selectIcon(m)
            }, [
              S(o, {
                name: m,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, fl))), 128))
          ])) : (l(), n("div", dl, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const pl = /* @__PURE__ */ w(il, [["render", ml]]), gl = ["tr-TR", "en-US"], Z = ne({
  currency: "TRY",
  format: "tr-TR"
});
function bl(e, t = Z.format) {
  return gl.includes(e) ? e : t;
}
function yl(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Z.currency = J(e.currency));
  const t = e.format ?? e.locale;
  t != null && (Z.format = bl(t));
}
function vl() {
  return $e(Z);
}
const _l = {
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
    return { priceInputConfig: vl() };
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
function kl(e, t, r, s, a, i) {
  const o = v("CurrencyInput");
  return l(), y(o, T({
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
const wl = /* @__PURE__ */ w(_l, [["render", kl]]);
function Sl(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const s = Math.min(4, Math.round(r)), a = ["weak", "fair", "good", "strong"], i = s <= 0 ? "weak" : a[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: i
  };
}
let ie = 0;
const xl = ["sm", "md", "lg"], Cl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => xl.includes(e)
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
      return Sl(this.modelValue);
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
}, Ll = ["aria-label", "aria-pressed", "disabled"], Tl = ["id", "aria-live"];
function Il(e, t, r, s, a, i) {
  const o = v("ui-icon"), c = v("ui-input"), u = v("ui-progress");
  return l(), n("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    S(c, T({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
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
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      append: g(() => [
        d("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": a.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => a.visible = !a.visible)
        }, [
          S(o, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Ll)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (l(), n("div", {
      key: 0,
      id: a.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      S(u, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (l(), n("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, Tl)) : f("", !0)
  ], 2);
}
const Al = /* @__PURE__ */ w(Cl, [["render", Il]]), zl = ["numeric", "alphanumeric"], Ml = {
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
      validator: (e) => zl.includes(e)
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
      return String(e ?? "").split("").map((r) => this.normalizeChar(r)).filter(Boolean).slice(0, this.length).join("");
    },
    emitValue(e) {
      var r;
      const t = e.join("").slice(0, this.length);
      this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (r = this.cellEl(this.length - 1)) == null || r.blur());
    },
    onCellInput(e, t) {
      const s = t.target.value.split("").map((c) => this.normalizeChar(c)).filter(Boolean);
      if (s.length === 0) {
        const c = [...this.cells];
        c[e] = "", this.emitValue(c);
        return;
      }
      const a = [...this.cells];
      let i = e;
      for (const c of s) {
        if (i >= this.length) break;
        a[i] = c, i += 1;
      }
      this.emitValue(a);
      const o = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var c, u;
        (c = this.cellEl(o)) == null || c.focus(), (u = this.cellEl(o)) == null || u.select();
      });
    },
    onCellKeydown(e, t) {
      var r, s;
      if (t.key === "Backspace") {
        t.preventDefault();
        const a = [...this.cells];
        if (a[e]) {
          a[e] = "", this.emitValue(a);
          return;
        }
        e > 0 && (a[e - 1] = "", this.emitValue(a), this.$nextTick(() => {
          var i;
          (i = this.cellEl(e - 1)) == null || i.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (s = this.cellEl(e + 1)) == null || s.focus());
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
      const t = ((a = e.clipboardData) == null ? void 0 : a.getData("text")) ?? "", r = this.normalizeValue(t);
      if (!r) return;
      this.emitValue(r.split(""));
      const s = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, s))) == null || i.focus();
      });
    }
  }
}, Pl = ["aria-label"], Ol = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Vl(e, t, r, s, a, i) {
  return l(), n("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: k([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), n(C, null, z(r.length, (o, c) => (l(), n("input", {
      key: c,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[c] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: c === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(c),
      onInput: (u) => i.onCellInput(c, u),
      onKeydown: (u) => i.onCellKeydown(c, u),
      onFocus: (u) => i.onCellFocus(c),
      onPaste: t[0] || (t[0] = (...u) => i.onPaste && i.onPaste(...u))
    }, null, 40, Ol))), 128))
  ], 10, Pl);
}
const El = /* @__PURE__ */ w(Ml, [["render", Vl]]), Rl = ["ul", "ol", "div"], Bl = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Rl.includes(e)
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
function Dl(e, t, r, s, a, i) {
  return l(), y(F(r.tag), T({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Fl = /* @__PURE__ */ w(Bl, [["render", Dl]]), Nl = ["solid", "regular", "brands", "light", "duotone", "thin"], $l = {
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
      validator: (e) => Nl.includes(e)
    }
  }
}, Hl = {
  class: "ui-list-item",
  role: "listitem"
}, Wl = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Yl = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Gl = { class: "ui-list-item-content min-w-0 flex-1" };
function Ul(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("li", Hl, [
    r.prefixIcon ? (l(), n("span", Wl, [
      S(o, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), n("span", Yl, [
      b(e.$slots, "prefix")
    ])) : f("", !0),
    d("div", Gl, [
      b(e.$slots, "default")
    ])
  ]);
}
const Kl = /* @__PURE__ */ w($l, [["render", Ul]]), jl = ["bar", "circle"], xe = ["sm", "md", "lg"], Ce = ["thin", "md"], ql = ["default", "weak", "fair", "good", "strong"], U = { sm: 16, md: 20, lg: 24 }, Zl = { sm: 1.5, md: 2, lg: 2 }, Ql = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => jl.includes(e)
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
      validator: (e) => ql.includes(e)
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
      const e = U[this.circleSizeKey] ?? U.sm, t = Zl[this.circleSizeKey] ?? 2, r = (e - t) / 2, s = e / 2, a = 2 * Math.PI * r, i = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: s, circumference: a, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Xl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Jl = ["width", "height", "viewBox"], ea = ["cx", "cy", "r", "stroke-width"], ta = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], ia = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ra(e, t, r, s, a, i) {
  return l(), n("div", {
    class: k(i.rootClass),
    style: E(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (l(), n("svg", {
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
      }, null, 8, ea),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, ta)
    ], 8, Jl)) : (l(), n("div", ia, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Xl);
}
const la = /* @__PURE__ */ w(Ql, [["render", ra]]), aa = Ve("ui-sheet"), sa = ["left", "right"], na = ["sm", "md", "lg", "xl"], oa = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, ua = {
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
      validator: (e) => sa.includes(e)
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
      validator: (e) => na.includes(e)
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
      validator: (e) => oa.includes(e)
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
    const e = aa();
    return {
      titleId: `ui-sheet-title-${e}`,
      descriptionId: `ui-sheet-desc-${e}`,
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : P(this, "ui.dialog.close", "Close");
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
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, ca = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], da = {
  key: 0,
  class: "ui-card-header shrink-0"
}, ha = {
  key: 0,
  class: "ui-sheet-header__icon"
}, fa = ["id"], ma = {
  key: 2,
  class: "ui-sheet-header__actions"
}, pa = ["id"], ga = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, ba = {
  key: 4,
  class: "ui-card-footer"
};
function ya(e, t, r, s, a, i) {
  const o = v("ui-icon"), c = v("ui-button"), u = v("Divider");
  return l(), y(Q, { to: "body" }, [
    S(X, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: g(() => [
        r.open ? (l(), n("div", {
          key: 0,
          ref: "layerRef",
          class: k(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          r.overlay ? (l(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          })) : f("", !0),
          d("div", T({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": r.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[1] || (t[1] = M(() => {
            }, ["stop"]))
          }), [
            i.hasHeaderBlock ? (l(), n("div", da, [
              b(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (l(), n("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (l(), n("span", ha, [
                    S(o, {
                      name: r.icon,
                      type: r.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (l(), n("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(r.title), 9, fa)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), n("div", ma, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (l(), y(c, {
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
                  r.description ? (l(), n("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(r.description), 9, pa)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), n("div", ga, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (l(), y(u, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (l(), n("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (l(), n("div", ba, [
              b(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, ca)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ]);
}
const va = /* @__PURE__ */ w(ua, [["render", ya]]), _a = ["sm", "md", "lg", "full"], Te = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, ka = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => _a.includes(e)
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
}, wa = {
  key: 0,
  class: "ui-menu-header"
}, Sa = { class: "ui-menu-body" }, xa = {
  key: 1,
  class: "ui-menu-footer"
};
function Ca(e, t, r, s, a, i) {
  return l(), n("nav", T({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (l(), n("div", wa, [
      b(e.$slots, "header")
    ])) : f("", !0),
    d("div", Sa, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), n("div", xa, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const La = /* @__PURE__ */ w(ka, [["render", Ca]]), Ta = {
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
}, Ia = {
  key: 0,
  class: "ui-menu-group-label"
}, Aa = { class: "ui-menu-group-items" };
function za(e, t, r, s, a, i) {
  return l(), n("div", T({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (l(), n("p", Ia, p(r.label), 1)) : f("", !0),
    d("div", Aa, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const Ma = /* @__PURE__ */ w(Ta, [["render", za]]), Pa = {
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
function Oa(e, t, r, s, a, i) {
  const o = v("ui-button");
  return l(), y(o, T({
    type: "button",
    variant: "ghost",
    color: "secondary",
    fulled: "",
    "text-align": "left",
    to: r.to,
    "prefix-icon": r.prefixIcon,
    "suffix-icon": r.suffixIcon,
    disabled: r.disabled,
    loading: r.loading,
    class: i.itemClass,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, { onClick: i.onClick }), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Va = /* @__PURE__ */ w(Pa, [["render", Oa]]), Ea = {
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
}, Ra = ["aria-label"];
function Ba(e, t, r, s, a, i) {
  return l(), n("div", T({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Ra);
}
const Da = /* @__PURE__ */ w(Ea, [["render", Ba]]), Fa = {
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
      var e;
      return !!((e = this.uiSegmentGroup) != null && e.iconOnly);
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
}, Na = ["aria-checked", "disabled"], $a = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ha = {
  key: 1,
  class: "ui-segment-label"
}, Wa = {
  key: 2,
  class: "sr-only"
}, Ya = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ga = {
  key: 1,
  class: "ui-segment-label"
}, Ua = {
  key: 2,
  class: "sr-only"
};
function Ka(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("button", {
    type: "button",
    role: "radio",
    class: k(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...c) => i.select && i.select(...c))
  }, [
    i.hasAffixes ? (l(), n(C, { key: 0 }, [
      i.hasPrepend ? (l(), n("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = M(() => {
        }, ["stop"]))
      }, [
        b(e.$slots, "prepend")
      ])) : f("", !0),
      d("span", {
        class: k(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (l(), n("span", $a, [
          S(o, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        i.showLabel ? (l(), n("span", Ha, p(r.label), 1)) : r.label ? (l(), n("span", Wa, p(r.label), 1)) : f("", !0)
      ], 2),
      i.hasAppend ? (l(), n("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = M(() => {
        }, ["stop"]))
      }, [
        b(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (l(), n(C, { key: 1 }, [
      r.icon ? (l(), n("span", Ya, [
        S(o, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      i.showLabel ? (l(), n("span", Ga, p(r.label), 1)) : r.label ? (l(), n("span", Ua, p(r.label), 1)) : f("", !0)
    ], 64))
  ], 10, Na);
}
const ja = /* @__PURE__ */ w(Fa, [["render", Ka]]), qa = ["sm", "md", "lg"], Za = ["horizontal", "vertical"], Qa = {
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
      validator: (e) => qa.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Za.includes(e)
    },
    /** Yalnız ikon; etiketler ekran okuyucu için gizli kalır */
    iconOnly: {
      type: Boolean,
      default: !1
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
      return je(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return x(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.iconOnly && "ui-segment-group--icon-only",
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
}, Xa = ["aria-label"];
function Ja(e, t, r, s, a, i) {
  return l(), n("div", T({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Xa);
}
const es = /* @__PURE__ */ w(Qa, [["render", Ja]]), ts = ["horizontal", "vertical"], is = ["default", "pills"], rs = {
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
      validator: (e) => is.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ts.includes(e)
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
}, ls = ["aria-label"], as = { class: "ui-stepper-pills-track" }, ss = {
  key: 0,
  class: "ui-stepper-pills-label"
}, ns = { class: "flex w-full min-w-0 items-center justify-center" }, os = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, us = {
  key: 1,
  class: "tabular-nums"
}, cs = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, ds = { class: "ui-stepper-title ui-stepper-title--horizontal" }, hs = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, fs = { class: "flex flex-col items-center" }, ms = {
  key: 1,
  class: "tabular-nums"
}, ps = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, gs = { class: "ui-stepper-title" }, bs = {
  key: 0,
  class: "ui-stepper-description"
};
function ys(e, t, r, s, a, i) {
  const o = v("ui-icon");
  return l(), n("div", T({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (l(), n(C, { key: 0 }, [
      d("div", as, [
        (l(!0), n(C, null, z(i.normalizedSteps, (c, u) => (l(), y(F(r.interactive ? "button" : "span"), T({
          key: u,
          class: ["ui-stepper-pill", i.pillClass(u)],
          role: "listitem",
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (l(), n("p", ss, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (l(!0), n(C, { key: 1 }, z(i.normalizedSteps, (c, u) => (l(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", ns, [
        u > 0 ? (l(), n("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", os)),
        (l(), y(F(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            c.icon ? (l(), y(o, {
              key: 0,
              name: c.icon,
              type: c.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", us, p(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", cs))
      ]),
      d("p", ds, p(c.title), 1),
      c.description ? (l(), n("p", hs, p(c.description), 1)) : f("", !0)
    ]))), 128)) : (l(!0), n(C, { key: 2 }, z(i.normalizedSteps, (c, u) => (l(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", fs, [
        (l(), y(F(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": c.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            c.icon ? (l(), y(o, {
              key: 0,
              name: c.icon,
              type: c.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", ms, p(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 0,
          class: k(["ui-stepper-vrail", i.verticalRailClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      d("div", ps, [
        d("p", gs, p(c.title), 1),
        c.description ? (l(), n("p", bs, p(c.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, ls);
}
const vs = /* @__PURE__ */ w(rs, [["render", ys]]);
let Ie = 0;
const _s = {
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
}, ks = {
  key: 0,
  class: "ui-slider-header"
}, ws = {
  key: 0,
  class: "ui-form-label"
}, Ss = {
  key: 1,
  class: "ui-slider-value"
}, xs = { class: "ui-slider-rail" }, Cs = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Ls = {
  key: 1,
  class: "ui-slider-scale"
}, Ts = { key: 0 }, Is = { key: 1 };
function As(e, t, r, s, a, i) {
  const o = v("ui-progress");
  return l(), n("div", {
    class: k(i.rootClass)
  }, [
    r.label || i.hasValue ? (l(), n("div", ks, [
      r.label ? (l(), n("span", ws, p(r.label), 1)) : f("", !0),
      i.hasValue ? (l(), n("span", Ss, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    d("div", xs, [
      S(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      d("input", T(i.passthroughAttrs, {
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
      }), null, 16, Cs)
    ]),
    r.minLabel || r.maxLabel ? (l(), n("div", Ls, [
      r.minLabel ? (l(), n("span", Ts, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (l(), n("span", Is, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const zs = /* @__PURE__ */ w(_s, [["render", As]]);
let Ae = 0;
const Ms = {
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
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
}, Ps = ["id", "aria-checked", "disabled", "aria-describedby"];
function Os(e, t, r, s, a, i) {
  return l(), n("button", T({
    type: "button",
    role: "switch",
    id: i.resolvedId,
    class: [
      "ui-switch",
      i.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": r.modelValue ? "true" : "false",
    disabled: r.disabled,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.toggle && i.toggle(...o)),
    onKeydown: t[1] || (t[1] = (...o) => i.onKeydown && i.onKeydown(...o))
  }), [
    d("span", {
      class: k(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      d("span", {
        class: k(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Ps);
}
const Vs = /* @__PURE__ */ w(Ms, [["render", Os]]), Es = {
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
}, Rs = { class: "ui-table-scroll" };
function Bs(e, t, r, s, a, i) {
  return l(), n("div", Rs, [
    d("table", T({ class: i.rootClass }, i.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const Ds = /* @__PURE__ */ w(Es, [["render", Bs]]), Fs = {
  name: "TableBody"
}, Ns = { class: "ui-table-body" };
function $s(e, t, r, s, a, i) {
  return l(), n("tbody", Ns, [
    b(e.$slots, "default")
  ]);
}
const Hs = /* @__PURE__ */ w(Fs, [["render", $s]]), Ws = ["left", "center", "right"], Ys = ["title", "secondary", "body"], Gs = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Ws.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Ys.includes(e)
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
}, Us = ["colspan"];
function Ks(e, t, r, s, a, i) {
  return l(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, Us);
}
const js = /* @__PURE__ */ w(Gs, [["render", Ks]]), qs = ["left", "center", "right"], Zs = ["sm", "md", "lg"], Qs = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => qs.includes(e)
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
      if (!(this.iconCol || Zs.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Xs(e, t, r, s, a, i) {
  return l(), n("th", {
    class: k(i.rootClass),
    style: E(i.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const Js = /* @__PURE__ */ w(Qs, [["render", Xs]]), en = {
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
function tn(e, t, r, s, a, i) {
  return l(), n("thead", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const rn = /* @__PURE__ */ w(en, [["render", tn]]), ln = {
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
}, an = { class: "ui-table-pagination" }, sn = { class: "ui-table-pagination-meta" }, nn = { class: "ui-table-pagination-nav" }, on = { class: "ui-table-pagination-page" };
function un(e, t, r, s, a, i) {
  const o = v("ui-button");
  return l(), n("div", an, [
    d("div", sn, [
      b(e.$slots, "meta", {}, () => [
        L(p(r.metaText), 1)
      ])
    ]),
    d("div", nn, [
      S(o, {
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
      d("div", on, p(r.pageLabel), 1),
      S(o, {
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
const cn = /* @__PURE__ */ w(ln, [["render", un]]), dn = ["none", "soft", "strong"], hn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || dn.includes(e)
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
function fn(e, t, r, s, a, i) {
  return l(), n("tr", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const mn = /* @__PURE__ */ w(hn, [["render", fn]]), pn = {
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
}, gn = ["id", "aria-labelledby"];
function bn(e, t, r, s, a, i) {
  return He((l(), n("div", T({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, gn)), [
    [We, i.isActive]
  ]);
}
const yn = /* @__PURE__ */ w(pn, [["render", bn]]), vn = Ve("ui-timepicker"), re = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const _n = {
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
      fallbackId: vn(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : P(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return P(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return P(this, "ui.timePicker.minuteAria", "Minute");
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
      let t = 0, r = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (t = Math.min(23, Math.max(0, parseInt(s[1], 10))), r = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const a = this.minuteValues;
      let i = a[0] ?? 0, o = 999;
      for (const c of a) {
        const u = Math.abs(c - r);
        u < o && (o = u, i = c);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return re;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return re;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : re;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const s = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, i = Math.round((a - s - r / 2) / r);
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
      const e = `${H(this.draftHour)}:${H(this.draftMinute)}`;
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
}, kn = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, wn = { class: "ui-timepicker-wheels" }, Sn = { class: "ui-timepicker-wheels-row" }, xn = ["aria-valuenow", "aria-label"], Cn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ln = { class: "ui-timepicker-wheel-spacer" }, Tn = ["onClick"], In = ["aria-valuenow", "aria-label"], An = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, zn = { class: "ui-timepicker-wheel-spacer" }, Mn = ["onClick"], Pn = { class: "min-w-0 flex-1 truncate text-foreground" }, On = { class: "ui-timepicker-panel w-full p-2" }, Vn = { class: "ui-timepicker-wheels" }, En = { class: "ui-timepicker-wheels-row" }, Rn = ["aria-valuenow", "aria-label"], Bn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Dn = { class: "ui-timepicker-wheel-spacer" }, Fn = ["onClick"], Nn = ["aria-valuenow", "aria-label"], $n = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Hn = { class: "ui-timepicker-wheel-spacer" }, Wn = ["onClick"];
function Yn(e, t, r, s, a, i) {
  const o = v("ui-button"), c = v("ui-popover");
  return l(), n("div", {
    class: k([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (l(), n("div", kn, [
      d("div", wn, [
        t[2] || (t[2] = d("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        d("div", Sn, [
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            d("div", Cn, [
              d("div", Ln, [
                (l(!0), n(C, null, z(i.hourOptions, (u) => (l(), n("button", {
                  key: "h-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    u === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(u)
                }, p(i.pad2(u)), 11, Tn))), 128))
              ])
            ], 512)
          ], 8, xn),
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
            "aria-label": i.minuteAriaLabel
          }, [
            d("div", An, [
              d("div", zn, [
                (l(!0), n(C, null, z(i.minuteValues, (u, h) => (l(), n("button", {
                  key: "m-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    u === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => i.selectMinute(h)
                }, p(i.pad2(u)), 11, Mn))), 128))
              ])
            ], 512)
          ], 8, In)
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
    ])) : (l(), y(c, {
      key: 1,
      open: a.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (u) => a.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: m
        }, () => [
          S(o, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: r.disabled,
            "aria-expanded": u ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", Pn, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        d("div", On, [
          d("div", Vn, [
            t[6] || (t[6] = d("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", En, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                d("div", Bn, [
                  d("div", Dn, [
                    (l(!0), n(C, null, z(i.hourOptions, (u) => (l(), n("button", {
                      key: "h-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        u === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(u)
                    }, p(i.pad2(u)), 11, Fn))), 128))
                  ])
                ], 512)
              ], 8, Rn),
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
                "aria-label": i.minuteAriaLabel
              }, [
                d("div", $n, [
                  d("div", Hn, [
                    (l(!0), n(C, null, z(i.minuteValues, (u, h) => (l(), n("button", {
                      key: "m-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        u === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(u)), 11, Wn))), 128))
                  ])
                ], 512)
              ], 8, Nn)
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
const ze = /* @__PURE__ */ w(_n, [["render", Yn]]), Gn = ["square", "video", "auto"], Un = ["fill", "sm", "md", "lg"], Me = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Kn = {
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
      validator: (e) => Gn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Un.includes(e)
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
        Me[this.size] || Me.fill,
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
}, jn = ["src", "alt"], qn = ["aria-hidden"], Zn = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Qn = {
  key: 3,
  class: "ui-photo__overflow"
}, Xn = ["aria-label"], Jn = ["aria-label"], eo = { class: "ui-photo-preview__panel" }, to = ["src", "alt"], io = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ro(e, t, r, s, a, i) {
  const o = v("ui-icon"), c = v("ui-button");
  return l(), n(C, null, [
    (l(), y(F(i.rootTag), T({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: g(() => [
        r.src && !a.imageFailed ? (l(), n("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (u) => a.imageFailed = !0)
        }, null, 40, jn)) : (l(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          S(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, qn)),
        r.favorite ? (l(), n("span", Zn, [
          S(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (l(), n("span", Qn, p(r.overflowLabel), 1)) : f("", !0)
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
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, Jn),
            d("div", eo, [
              S(c, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), y(c, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: M(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (l(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, to)) : f("", !0),
              i.showNext ? (l(), y(c, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: M(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (l(), n("p", io, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Xn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const lo = /* @__PURE__ */ w(Kn, [["render", ro]]), ao = ["square", "video", "auto"], so = {
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
      validator: (e) => ao.includes(e)
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
}, no = ["data-count"], oo = ["aria-label"], uo = ["aria-label"], co = { class: "ui-photo-preview__panel" }, ho = ["src", "alt"], fo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function mo(e, t, r, s, a, i) {
  const o = v("ui-photo"), c = v("ui-button");
  return l(), n(C, null, [
    d("div", {
      class: k(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (l(!0), n(C, null, z(i.visibleItems, (u, h) => (l(), y(o, {
        key: u.key || `${u.src}-${h}`,
        src: u.src,
        alt: u.alt || "",
        favorite: !!u.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": u.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, no),
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
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, uo),
            d("div", co, [
              S(c, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), y(c, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: M(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (l(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, ho)) : f("", !0),
              i.showNext ? (l(), y(c, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: M(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (l(), n("p", fo, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, oo)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const po = /* @__PURE__ */ w(so, [["render", mo]]);
function K(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function ko() {
  return {
    push: $,
    dismiss: Ze,
    clear: qe,
    info: (e) => $({ ...K(e), variant: "info" }),
    success: (e) => $({ ...K(e), variant: "success" }),
    warning: (e) => $({ ...K(e), variant: "warning" }),
    error: (e) => $({ ...K(e), variant: "error" })
  };
}
function wo(e = !1) {
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
function So() {
  return {
    confirm: Si
  };
}
const se = {
  en: Xe,
  tr: Ee
};
function xo(e = "tr") {
  return se[e] ?? se.tr;
}
const Co = Ee, go = [
  ["ui-action-card", At],
  ["ui-action-card-list", Ot],
  ["ui-action-group", Je],
  ["ui-alert", et],
  ["ui-avatar", $t],
  ["ui-badge", tt],
  ["ui-button", it],
  ["ui-card", rt],
  ["ui-checkbox", bi],
  ["ui-checkbox-group", wi],
  ["ui-color-picker", ri],
  ["ui-currency-input", Fe],
  ["ui-confirm-dialog", Li],
  ["ui-date-picker", lt],
  ["ui-date-range-picker", $i],
  ["ui-dialog", at],
  ["ui-divider", oe],
  ["ui-dropdown", Gi],
  ["ui-empty", st],
  ["ui-field", er],
  ["ui-field-action", fr],
  ["ui-file", Cr],
  ["ui-form-row", nt],
  ["ui-guidance", el],
  ["ui-icon", ot],
  ["ui-icon-picker", pl],
  ["ui-input", ut],
  ["ui-price-input", wl],
  ["ui-password", Al],
  ["ui-phone", ct],
  ["ui-pin", El],
  ["ui-list", Fl],
  ["ui-list-item", Kl],
  ["ui-popover", dt],
  ["ui-progress", la],
  ["ui-radio", ht],
  ["ui-radio-group", ft],
  ["ui-select", mt],
  ["ui-sheet", va],
  ["ui-menu", La],
  ["ui-menu-group", Ma],
  ["ui-menu-item", Va],
  ["ui-menu-nav", Da],
  ["ui-segment", ja],
  ["ui-segment-group", es],
  ["ui-skeleton", pt],
  ["ui-slider", zs],
  ["ui-stepper", vs],
  ["ui-switch", Vs],
  ["ui-table", Ds],
  ["ui-table-body", Hs],
  ["ui-table-cell", js],
  ["ui-table-head", Js],
  ["ui-table-header", rn],
  ["ui-table-pagination", cn],
  ["ui-table-row", mn],
  ["ui-tag", gt],
  ["ui-tab-list", bt],
  ["ui-tab-panel", yn],
  ["ui-tabs", yt],
  ["ui-tab-trigger", vt],
  ["ui-time-picker", ze],
  ["ui-timepicker", ze],
  ["ui-tooltip", _t],
  ["ui-toast", kt],
  ["ui-photo", lo],
  ["ui-photos", po]
];
function bo(e, t = {}) {
  var c, u;
  const { i18n: r, locale: s, locales: a, theme: i, priceInput: o } = t;
  if (i && Qe(i), o && yl(o), (c = r == null ? void 0 : r.global) != null && c.mergeLocaleMessage) {
    const h = a ?? (s != null ? [s] : [
      typeof r.global.locale == "string" ? r.global.locale : ((u = r.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const m of h) {
      const _ = se[m];
      _ && r.global.mergeLocaleMessage(m, _);
    }
  }
  for (const [h, m] of go)
    e.component(h, m);
}
const Lo = {
  install: bo
};
export {
  At as ActionCard,
  Ot as ActionCardList,
  Je as ActionGroup,
  et as Alert,
  $t as Avatar,
  tt as Badge,
  it as Button,
  rt as Card,
  bi as Checkbox,
  wi as CheckboxGroup,
  ri as ColorPicker,
  Li as ConfirmDialog,
  Fe as CurrencyInput,
  lt as DatePicker,
  $i as DateRangePicker,
  at as Dialog,
  oe as Divider,
  Gi as Dropdown,
  st as Empty,
  Ao as FEW_COLOR_SCALE,
  zo as FEW_PALETTE_ID,
  Mo as FEW_PRIMARY,
  Po as FEW_PRIMARY_FOREGROUND,
  er as Field,
  fr as FieldAction,
  Cr as File,
  nt as FormRow,
  Oo as GOOGLE_FONTS_CATALOG,
  el as Guidance,
  ot as Icon,
  pl as IconPicker,
  ut as Input,
  Fl as List,
  Kl as ListItem,
  La as Menu,
  Ma as MenuGroup,
  Va as MenuItem,
  Da as MenuNav,
  gl as PRICE_FORMATS,
  Al as Password,
  ct as Phone,
  lo as Photo,
  po as Photos,
  El as Pin,
  dt as Popover,
  wl as PriceInput,
  la as Progress,
  ht as Radio,
  ft as RadioGroup,
  ja as Segment,
  es as SegmentGroup,
  mt as Select,
  va as Sheet,
  pt as Skeleton,
  zs as Slider,
  vs as Stepper,
  Vs as Switch,
  Vo as THEME_CUSTOM_CSS_ID,
  Eo as THEME_PRESETS,
  Ro as THEME_PRESET_IDS,
  bt as TabList,
  yn as TabPanel,
  vt as TabTrigger,
  Ds as Table,
  Hs as TableBody,
  js as TableCell,
  Js as TableHead,
  rn as TableHeader,
  cn as TablePagination,
  mn as TableRow,
  yt as Tabs,
  gt as Tag,
  ze as TimePicker,
  kt as Toast,
  _t as Tooltip,
  Bo as applyGoogleFontsForTheme,
  Do as applyThemeCustomCss,
  Qe as applyUiTheme,
  Fo as buildGoogleFontsLinkTag,
  No as buildGoogleFontsStylesheetUrl,
  $o as buildThemeStyleAttr,
  Ho as clearThemeCustomCss,
  qe as clearToasts,
  Wo as createUiId,
  Ve as createUiIdFactory,
  Lo as default,
  Yo as deriveBrandColorsFromPrimary,
  Ze as dismissToast,
  _o as formatCurrencyAmount,
  ai as formatMoneyInput,
  Re as getCurrencySymbol,
  Go as getFewPrimaryColors,
  De as getMoneySeparators,
  vl as getPriceInputConfig,
  Uo as getThemePreset,
  xo as getUiMessages,
  Ko as googleFontSelectOptions,
  jo as mergeUiTheme,
  li as parseLocalizedMoneyInput,
  Ke as pickPassthroughAttrs,
  $ as pushToast,
  Si as requestConfirm,
  je as resolveControlSize,
  J as resolveCurrencyCode,
  qo as resolvePrimaryColor,
  Zo as resolveThemeFontFamilies,
  Qo as resolveThemePreset,
  Xo as resolveThemeVars,
  P as resolveUiText,
  Be as sanitizeMoneyInput,
  yl as setPriceInputConfig,
  Co as uiMessagesTr,
  So as useConfirm,
  wo as useDialog,
  ko as useToast,
  Jo as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
