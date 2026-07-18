import { resolveComponent as v, openBlock as l, createElementBlock as n, normalizeClass as w, renderSlot as y, createBlock as b, createCommentVNode as m, createElementVNode as o, toDisplayString as p, normalizeStyle as E, resolveDynamicComponent as N, mergeProps as A, withCtx as g, createVNode as S, withModifiers as M, createTextVNode as C, Fragment as x, renderList as z, withKeys as ee, reactive as Te, normalizeProps as Ae, guardReactiveProps as Ie, createSlots as j, Teleport as re, Transition as le, withDirectives as Oe, vShow as Ee } from "vue";
import { _ as k, y as L, a1 as V, X as Be, M as Re, e as ze, W as De, H as Ne, x as $e, K as Fe, V as F, a2 as Me, s as He, L as We, A as Ge, a as Ye, B as Ue, b as Ke, C as je, c as qe, d as Ze, E as Qe, F as Xe, I as Je, f as et, P as tt, g as it, R as rt, h as lt, S as at, i as st, n as nt, k as ot, m as ut, l as ct, p as dt, o as ht } from "./index-SlRhgfoS.js";
import { G as Xn, D as Jn, T as eo, j as to, q as io, r as ro, t as lo, u as ao, v as so, w as no, z as oo, J as uo, N as co, O as ho, Q as fo, U as mo, Y as po, Z as go, $ as bo, a0 as yo, a3 as vo } from "./index-SlRhgfoS.js";
const ft = ["solid", "regular", "brands", "light", "duotone", "thin"], mt = {
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
      validator: (e) => ft.includes(e)
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
}, pt = ["disabled"], gt = { class: "ui-action-card__content" }, bt = { class: "ui-action-card__title" }, yt = {
  key: 0,
  class: "ui-action-card__description"
};
function vt(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("button", {
    type: "button",
    class: w(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
  }, [
    y(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (l(), b(c, {
        key: 0,
        name: r.icon,
        type: r.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : m("", !0)
    ]),
    o("span", gt, [
      o("span", bt, p(r.title), 1),
      r.description ? (l(), n("span", yt, p(r.description), 1)) : m("", !0)
    ]),
    y(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (l(), b(c, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : m("", !0)
    ])
  ], 10, pt);
}
const _t = /* @__PURE__ */ k(mt, [["render", vt]]), kt = {
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
}, wt = ["aria-label"];
function St(e, t, r, a, s, i) {
  return l(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: E(i.listStyle)
  }, [
    y(e.$slots, "default")
  ], 12, wt);
}
const xt = /* @__PURE__ */ k(kt, [["render", St]]), Ct = ["sm", "md", "lg", "xl"], ce = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, de = Object.freeze({
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
}), he = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Lt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return he[t] && (t = he[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Tt(e) {
  var a;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const s = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${s}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((a = r[0]) == null ? void 0 : a[0]) || "?").toLocaleUpperCase("tr-TR");
}
const At = {
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
      validator: (e) => Ct.includes(e)
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
      return L(
        "ui-avatar",
        ce[this.size] || ce.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
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
      return Tt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Lt(e[0]) : "default";
    },
    letterColors() {
      return de[this.colorLetterKey] || de.default;
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
}, It = ["src", "alt"], zt = ["role", "aria-label", "aria-hidden"];
function Mt(e, t, r, a, s, i) {
  return l(), b(N(i.rootTag), A({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: g(() => [
      r.src && !s.imageFailed ? (l(), n("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (c) => s.imageFailed = !0)
      }, null, 40, It)) : (l(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, p(i.displayInitials), 9, zt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Vt = /* @__PURE__ */ k(At, [["render", Mt]]), Pt = [
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
], Ot = {
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
      presetColors: Pt
    };
  },
  computed: {
    rootClass() {
      return L(
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
      return this.triggerPlaceholder ? this.triggerPlaceholder : V(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : V(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : V(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : V(this, "ui.colorPicker.customHex", "Custom color (hex)");
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
}, Et = ["disabled", "aria-expanded", "onClick"], Bt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Rt = { class: "ui-select-field-suffix" }, Dt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Nt = { class: "ui-color-picker-panel" }, $t = { class: "ui-color-picker-panel__header" }, Ft = { class: "ui-color-picker-panel__title" }, Ht = { class: "ui-color-picker-swatches" }, Wt = ["title", "onClick"], Gt = { class: "ui-color-picker-custom" }, Yt = { class: "ui-color-picker-panel__title" }, Ut = { class: "ui-color-picker-custom__row" };
function Kt(e, t, r, a, s, i) {
  const c = v("ui-icon"), d = v("ui-button"), u = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: w(i.rootClass)
  }, [
    S(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => s.popoverOpen = f),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
    }, {
      trigger: g(({ open: f, toggle: _, close: I }) => [
        y(e.$slots, "trigger", {
          open: f,
          toggle: _,
          close: I
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": f ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            o("span", Bt, [
              i.localColor ? (l(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: i.localColor })
              }, null, 4)) : (l(), b(c, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            o("span", {
              class: w(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, p(i.displayValue), 3),
            o("span", Rt, [
              o("span", Dt, [
                S(c, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Et)
        ])
      ]),
      content: g(() => [
        o("div", Nt, [
          o("div", $t, [
            o("span", Ft, p(i.popoverTitleLabel), 1),
            i.localColor ? (l(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(i.clearColor, ["stop"])
            }, {
              default: g(() => [
                C(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          o("div", Ht, [
            (l(!0), n(x, null, z(s.presetColors, (f) => (l(), n("button", {
              key: f,
              type: "button",
              class: w(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === f }]),
              style: E({ backgroundColor: f }),
              title: f,
              onClick: (_) => i.selectColor(f)
            }, [
              i.localColor === f ? (l(), b(c, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : m("", !0)
            ], 14, Wt))), 128))
          ]),
          o("div", Gt, [
            o("span", Yt, p(i.customColorLabelText), 1),
            o("div", Ut, [
              S(u, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => i.localColor = f),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              o("span", {
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
const jt = /* @__PURE__ */ k(Ot, [["render", Kt]]), fe = {
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
function ae(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in W ? t : "TRY";
  const r = String(e).trim();
  if (fe[r])
    return fe[r];
  const a = r.toUpperCase();
  return W[a] ? a : t in W ? t : "TRY";
}
function Ve(e) {
  var r;
  const t = ae(e);
  if (W[t])
    return W[t];
  try {
    const s = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = s == null ? void 0 : s.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function Wn(e, t, r = "tr-TR") {
  const a = Number(e) || 0, s = ae(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: s }).format(a);
  } catch {
    return `${Ve(s)}${a.toFixed(2)}`;
  }
}
function qt(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const a = t.slice(0, r), s = t.slice(r + 1).replace(/\./g, "");
    t = `${a}.${s}`;
  }
  return t;
}
let me = 0;
const Zt = ["sm", "md", "lg"], Qt = {
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
    size: {
      type: String,
      default: "md",
      validator: (e) => Zt.includes(e)
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
    return me += 1, { fallbackId: `ui-currency-input-${me}` };
  },
  computed: {
    displaySymbol() {
      return Ve(this.currency);
    },
    resolvedCurrencyCode() {
      return ae(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = qt(e);
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
}, Xt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Jt(e, t, r, a, s, i) {
  const c = v("ui-input");
  return l(), b(c, A({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => i.innerValue = d),
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
    onFocus: t[1] || (t[1] = (d) => e.$emit("focus", d)),
    onBlur: i.onBlur
  }), {
    prepend: g(() => [
      o("span", Xt, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const ei = /* @__PURE__ */ k(Qt, [["render", Jt]]), ti = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, a = Array.isArray(r) ? [...r] : [], s = a.findIndex((i) => Object.is(i, this.value));
        t && s === -1 ? a.push(this.value) : !t && s !== -1 && a.splice(s, 1), this.uiCheckboxGroup.$emit("update:modelValue", a);
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
}, ii = ["type", "name", "value", "checked"], ri = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, li = { class: "ui-checkbox-body" }, ai = {
  key: 0,
  class: "ui-checkbox-label"
}, si = {
  key: 1,
  class: "ui-checkbox-description"
};
function ni(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("label", {
    class: w(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = ee(M((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = ee(M((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, ii),
    o("span", ri, [
      i.isChecked ? (l(), b(c, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : m("", !0)
    ]),
    o("span", li, [
      e.$slots.label || r.label ? (l(), n("span", ai, [
        y(e.$slots, "label", {}, () => [
          C(p(r.label), 1)
        ])
      ])) : m("", !0),
      r.description ? (l(), n("span", si, p(r.description), 1)) : m("", !0)
    ])
  ], 34);
}
const oi = /* @__PURE__ */ k(ti, [["render", ni]]), ui = ["list", "button", "List", "Button"];
let pe = 0;
const ci = {
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
      validator: (e) => ui.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return pe += 1, { groupName: `ui-checkbox-group-${pe}` };
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
}, di = ["aria-label"];
function hi(e, t, r, a, s, i) {
  return l(), n("div", {
    class: w(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    y(e.$slots, "default")
  ], 10, di);
}
const fi = /* @__PURE__ */ k(ci, [["render", hi]]), T = Te({
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
function mi(e = {}) {
  return new Promise((t) => {
    T.title = e.title ?? "", T.description = e.description ?? "", T.confirmLabel = e.confirmLabel ?? "", T.cancelLabel = e.cancelLabel ?? "", T.destructive = !!e.destructive, T._resolve = t, T.open = !0;
  });
}
function Z(e) {
  const t = T._resolve;
  T.open = !1, T._resolve = null, t && t(!!e);
}
const pi = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return T;
    },
    syncOpen: {
      get() {
        return T.open;
      },
      set(e) {
        e ? T.open = !0 : T._resolve ? Z(!1) : T.open = !1;
      }
    },
    confirmText() {
      return T.confirmLabel ? T.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return T.cancelLabel ? T.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      Z(!0);
    },
    onCancel() {
      Z(!1);
    }
  }
};
function gi(e, t, r, a, s, i) {
  const c = v("ui-button"), d = v("ui-dialog");
  return l(), b(d, {
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
      S(c, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: g(() => [
          C(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      S(c, {
        rounded: "",
        color: i.confirmState.destructive ? "danger" : "primary",
        onClick: i.onConfirm
      }, {
        default: g(() => [
          C(p(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const bi = /* @__PURE__ */ k(pi, [["render", gi]]);
let ge = 0;
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
  const r = Number(t[1]), a = Number(t[2]) - 1, s = Number(t[3]), i = new Date(r, a, s);
  return i.getFullYear() !== r || i.getMonth() !== a || i.getDate() !== s ? null : i;
}
function R(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function Q(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function be(e, t, r, a) {
  const s = `${e}-${G(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let c = `${e}-${G(t + 1)}-${G(i)}`;
  if (r && c > r && (c = r), a && s < a && c < a) return null;
  let d = s;
  return a && d < a && (d = a), R(d, c) > 0 ? null : [d, c];
}
const yi = {
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
    var a, s;
    ge += 1;
    const e = ge, t = ((a = this.modelValue) == null ? void 0 : a[0]) || "", r = Y(t) || Y((s = this.modelValue) == null ? void 0 : s[1]) || /* @__PURE__ */ new Date();
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
      return Be((e = this.$i18n) == null ? void 0 : e.locale);
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
      const e = /* @__PURE__ */ new Date(), t = D(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const a = D(r), s = e.getMonth(), i = e.getFullYear(), c = new Date(i, s - 1, 1), d = c.getFullYear(), u = c.getMonth(), h = (_, I) => typeof this.$t == "function" ? this.$t(_, I) : _;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [a, a]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: Q(i, s, this.locale)
          }),
          range: be(i, s, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: Q(d, u, this.locale)
          }),
          range: be(d, u, this.maxYmd, this.minYmd)
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
        title: Q(r.year, r.month, this.locale),
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
      const e = Y(this.startYmd) || Y(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (a) => a ? Re(a, this.locale) || a : "…";
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
      const r = new Date(e, t, 1), a = new Date(e, t, 1 - r.getDay()), s = this.previewStart, i = this.previewEnd, c = s && i, d = [];
      for (let u = 0; u < 42; u += 1) {
        const h = new Date(a.getFullYear(), a.getMonth(), a.getDate() + u), f = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), I = D(h), $ = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, P = D(/* @__PURE__ */ new Date()) === I, B = !!(this.minYmd && I < this.minYmd) || !!(this.maxYmd && I > this.maxYmd);
        let se = !1, ne = !1;
        if (c) {
          const oe = R(s, i) <= 0 ? s : i, ue = R(s, i) <= 0 ? i : s;
          se = R(I, oe) >= 0 && R(I, ue) <= 0, ne = I === oe || I === ue;
        }
        d.push({
          key: $,
          d: _,
          date: h,
          today: P,
          inMonth: f,
          disabled: B,
          inRange: se,
          endpoint: ne
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, a] = e.range;
      this.pickingStart = r, this.pickingEnd = a, this.$emit("update:modelValue", [r, a]), this.$emit("change", [r, a]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let a = this.pickingStart, s = r;
      if (R(s, a) < 0) {
        const i = a;
        a = s, s = i;
      }
      this.pickingStart = a, this.pickingEnd = s, this.$emit("update:modelValue", [a, s]), this.$emit("change", [a, s]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, vi = { class: "min-w-0 flex-1 truncate text-foreground" }, _i = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, ki = { class: "ui-daterangepicker-layout" }, wi = ["aria-label"], Si = { class: "ui-daterangepicker-calendars" }, xi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Ci = { class: "ui-daterangepicker-month-row" }, Li = { class: "mb-2 flex items-center justify-between gap-2" }, Ti = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ai = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Ii = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, zi = { class: "ui-datepicker-grid" };
function Mi(e, t, r, a, s, i) {
  const c = v("ui-button"), d = v("ui-popover");
  return l(), n("div", {
    class: w(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(d, {
      open: s.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (u) => s.menuOpen = u),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: f }) => [
        y(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: f
        }, () => [
          S(c, {
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
              o("span", vi, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: u }) => [
        o("div", _i, [
          o("div", ki, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (l(!0), n(x, null, z(i.quickPresets, (h) => (l(), b(c, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (f) => i.applyQuick(h, u)
              }, {
                default: g(() => [
                  C(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, wi),
            o("div", Si, [
              i.rangeHint ? (l(), n("p", xi, p(i.rangeHint), 1)) : m("", !0),
              o("div", Ci, [
                (l(!0), n(x, null, z(i.calendarPanes, (h) => (l(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", Li, [
                    h.showPrev ? (l(), b(c, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = M((f) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Ti)),
                    o("span", Ai, p(h.title), 1),
                    h.showNext ? (l(), b(c, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = M((f) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), n("span", Ii))
                  ]),
                  t[3] || (t[3] = o("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    o("span", null, "Su"),
                    o("span", null, "Mo"),
                    o("span", null, "Tu"),
                    o("span", null, "We"),
                    o("span", null, "Th"),
                    o("span", null, "Fr"),
                    o("span", null, "Sa")
                  ], -1)),
                  o("div", zi, [
                    (l(!0), n(x, null, z(h.cells, (f) => (l(), b(c, {
                      key: f.key,
                      variant: i.dayVariant(f),
                      color: i.dayColor(f),
                      size: "sm",
                      cubed: "",
                      disabled: f.disabled,
                      "aria-selected": f.endpoint ? "true" : "false",
                      "aria-disabled": f.disabled ? "true" : void 0,
                      "data-outside": f.inMonth ? void 0 : "true",
                      "data-today": f.today ? "true" : void 0,
                      "data-in-range": f.inRange && !f.endpoint ? "true" : void 0,
                      "data-range-endpoint": f.endpoint ? "true" : void 0,
                      onMouseenter: (_) => i.onCellHover(f),
                      onClick: (_) => i.pick(f, u)
                    }, {
                      default: g(() => [
                        C(p(f.d), 1)
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
const Vi = /* @__PURE__ */ k(yi, [["render", Mi]]), Pi = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Oi = {
  name: "Dropdown",
  components: { Divider: ze },
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
      validator: (e) => Pi.includes(e)
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
function Ei(e, t, r, a, s, i) {
  const c = v("Divider"), d = v("ui-button"), u = v("ui-popover");
  return l(), b(u, {
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
      y(e.$slots, "trigger", Ae(Ie(h)))
    ]),
    content: g(({ close: h }) => [
      o("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = M(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? y(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (l(!0), n(x, { key: 1 }, z(r.items, (f, _) => (l(), n(x, { key: _ }, [
          f.divider ? (l(), b(c, {
            key: 0,
            spacing: "sm"
          })) : (l(), b(d, {
            key: 1,
            variant: "ghost",
            color: i.itemColor(f),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": f.icon || null,
            disabled: f.disabled,
            onClick: M((I) => i.onItem(f, h), ["stop"])
          }, {
            default: g(() => [
              C(p(f.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Bi = /* @__PURE__ */ k(Oi, [["render", Ei]]), Ri = ["solid", "regular", "brands", "light", "duotone", "thin"], Di = {
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
      validator: (e) => Ri.includes(e)
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
      return L("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, Ni = {
  key: 0,
  class: "ui-field__title-row"
}, $i = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Fi = {
  key: 1,
  class: "ui-field__title"
}, Hi = {
  key: 1,
  class: "ui-field__value"
}, Wi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Gi(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("div", A({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (l(), n("div", Ni, [
      i.showIcon ? (l(), n("span", $i, [
        S(c, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : m("", !0),
      r.title ? (l(), n("span", Fi, p(r.title), 1)) : m("", !0)
    ])) : m("", !0),
    i.hasValue ? (l(), n("div", Hi, [
      y(e.$slots, "default")
    ])) : m("", !0),
    r.subtitle ? (l(), n("p", Wi, p(r.subtitle), 1)) : m("", !0)
  ], 16);
}
const Yi = /* @__PURE__ */ k(Di, [["render", Gi]]), Ui = ["popover", "dialog"], Ki = ["sm", "md", "lg"], ji = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], qi = {
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
      validator: (e) => Ui.includes(e)
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
      validator: (e) => Ki.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => ji.includes(e)
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
      return this.clearLabel != null && this.clearLabel !== "" ? this.clearLabel : V(this, "ui.fieldAction.clear", "Clear");
    },
    resolvedDoneLabel() {
      return this.doneLabel != null && this.doneLabel !== "" ? this.doneLabel : V(this, "ui.fieldAction.done", "Done");
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
}, Zi = { class: "ui-field-action-header" }, Qi = { class: "ui-field-action-header__text" }, Xi = {
  key: 0,
  class: "ui-field-action-header__title"
}, Ji = {
  key: 1,
  class: "ui-field-action-header__description"
}, er = { class: "ui-field-action-body" }, tr = { class: "ui-field-action-body" }, ir = { class: "ui-field-action-footer" };
function rr(e, t, r, a, s, i) {
  const c = v("ui-button"), d = v("ui-popover"), u = v("ui-dialog");
  return l(), n("div", {
    class: w([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (l(), b(d, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": t[0] || (t[0] = (h) => i.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: f }) => [
        y(e.$slots, "trigger", {
          open: h,
          toggle: f,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue
        }, () => [
          r.iconOnly ? (l(), b(c, {
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
            onClick: (_) => i.onTriggerClick(_, f)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (l(), b(c, {
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
            onClick: (_) => i.onTriggerClick(_, f)
          }, {
            default: g(() => [
              C(p(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        o("div", er, [
          y(e.$slots, "default", {
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
          y(e.$slots, "header", { close: h }, () => [
            o("div", Zi, [
              o("div", Qi, [
                r.title ? (l(), n("p", Xi, p(r.title), 1)) : m("", !0),
                r.description ? (l(), n("p", Ji, p(r.description), 1)) : m("", !0)
              ]),
              r.clearable && i.hasValue ? (l(), b(c, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": i.resolvedClearLabel,
                onClick: (f) => i.onClear(h)
              }, {
                default: g(() => [
                  C(p(i.resolvedClearLabel), 1)
                ]),
                _: 1
              }, 8, ["aria-label", "onClick"])) : m("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: g(({ close: h }) => [
          y(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (l(), n(x, { key: 1 }, [
      y(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue
      }, () => [
        r.iconOnly ? (l(), b(c, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (l(), b(c, {
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
            C(p(i.triggerLabel), 1)
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
          o("div", tr, [
            y(e.$slots, "default", {
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
            y(e.$slots, "footer", { close: i.close }, () => [
              o("div", ir, [
                r.clearable && i.hasValue ? (l(), b(c, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: t[3] || (t[3] = (h) => i.onClear(i.close))
                }, {
                  default: g(() => [
                    C(p(i.resolvedClearLabel), 1)
                  ]),
                  _: 1
                })) : m("", !0),
                S(c, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: g(() => [
                    C(p(i.resolvedDoneLabel), 1)
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
const lr = /* @__PURE__ */ k(qi, [["render", rr]]), ar = ["auto", "file", "folder"], sr = ["sm", "md", "lg"], nr = { icon: "folder", color: "text-sky-500" }, or = { icon: "file-lines", color: "text-muted-foreground" }, ur = {
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
}, ye = {
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
function cr(e) {
  const t = q(e);
  return /[/\\]\s*$/.test(t);
}
function Pe(e) {
  const t = q(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function dr(e) {
  const t = Pe(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const ve = {
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
}, hr = {
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
      validator: (e) => ar.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => sr.includes(e)
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
      return ye[this.size] || ye.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : cr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Pe(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return nr;
      const e = dr(this.name);
      return ur[e] || or;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? ve[this.color] !== void 0 ? ve[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, fr = ["aria-label"], mr = ["title"];
function pr(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("div", {
    class: w(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    o("div", {
      class: w(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      S(c, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: w(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    o("span", {
      class: w(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, mr)
  ], 10, fr);
}
const gr = /* @__PURE__ */ k(hr, [["render", pr]]);
function br(e) {
  const t = e.filter((c) => c && (c.width > 0 || c.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((c) => c.top)), a = Math.min(...t.map((c) => c.left)), s = Math.max(...t.map((c) => c.right)), i = Math.max(...t.map((c) => c.bottom));
  return {
    top: r,
    left: a,
    right: s,
    bottom: i,
    width: s - a,
    height: i - r,
    x: a,
    y: r,
    toJSON: () => ({})
  };
}
function te(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function _e(e) {
  const t = te(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((s) => s instanceof HTMLElement), a = br(r.map((s) => s.getBoundingClientRect()));
    if (a) return a;
  }
  return t.getBoundingClientRect();
}
function yr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const a of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    a instanceof HTMLElement && t.push(a);
  return t;
}
const vr = ["dialog", "popover", "card", "tour"], _r = ["solid", "regular", "brands", "light", "duotone", "thin"], kr = [
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
], wr = ["sm", "md", "lg", "xl", "2xl", "full"], O = 12, Sr = 8, xr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => vr.includes(e)
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
      validator: (e) => _r.includes(e)
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
      validator: (e) => kr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Sr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => wr.includes(e)
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
      return this.goLabel ? this.goLabel : V(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : V(this, "ui.guidance.close", "Close");
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? te(e) : typeof e == "string" && e.trim() ? te(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const a = window.innerWidth, s = window.innerHeight, i = r.getBoundingClientRect(), c = i.width || 320, d = i.height || 180;
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
      const u = _e(t);
      if (!u) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), f = Math.max(0, u.top - h), _ = Math.max(0, u.left - h), I = Math.min(s, u.bottom + h), $ = Math.min(a, u.right + h);
      this.tourHighlightStyle = {
        top: `${f}px`,
        left: `${_}px`,
        width: `${Math.max(0, $ - _)}px`,
        height: `${Math.max(0, I - f)}px`
      };
      let P = I + O, B = _;
      this.placement.startsWith("top") ? P = f - d - O : this.placement.startsWith("right") ? (P = f, B = $ + O) : this.placement.startsWith("left") ? (P = f, B = _ - c - O) : this.placement.includes("end") && (B = $ - c), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + d > s - O && (P = f - d - O), P = Math.max(O, Math.min(P, s - d - O)), B = Math.max(O, Math.min(B, a - c - O)), this.tourPanelStyle = {
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
        const t = _e(e);
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
          for (const r of yr(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Cr = { class: "ui-guidance-footer" }, Lr = { class: "ui-guidance-popover" }, Tr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Ar = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Ir = { class: "ui-guidance-popover__text" }, zr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Mr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Vr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Pr = ["aria-label"], Or = { class: "ui-guidance-tour__content" }, Er = { class: "ui-header-lead" }, Br = { class: "ui-header-lead__main" }, Rr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Dr = { class: "ui-header-lead__text" }, Nr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, $r = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Fr = {
  key: 0,
  class: "ui-header-lead__actions"
}, Hr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Wr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Gr(e, t, r, a, s, i) {
  const c = v("ui-button"), d = v("ui-card"), u = v("ui-dialog"), h = v("ui-icon"), f = v("ui-popover");
  return i.shouldRender ? (l(), n("div", {
    key: 0,
    class: w(i.rootShellClass)
  }, [
    r.mode === "card" ? (l(), b(d, {
      key: 0,
      icon: r.icon,
      "icon-type": r.iconType,
      title: r.title,
      description: r.description,
      border: ""
    }, j({
      default: g(() => [
        y(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: g(() => [
          y(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      i.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          y(e.$slots, "footer", {}, () => [
            o("div", Cr, [
              r.showFooterClose ? (l(), b(c, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: g(() => [
                  C(p(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : m("", !0),
              r.showGo ? (l(), b(c, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: g(() => [
                  C(p(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : m("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (l(), b(u, {
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
        y(e.$slots, "default")
      ]),
      _: 2
    }, [
      r.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          S(c, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: g(() => [
              C(p(i.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          y(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (l(), b(f, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (_) => i.syncOpen = _),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: g((_) => [
        y(e.$slots, "trigger", Ae(Ie(_)))
      ]),
      content: g(() => [
        o("div", Lr, [
          r.icon || r.title || r.description ? (l(), n("div", Tr, [
            r.icon ? (l(), n("span", Ar, [
              S(h, {
                name: r.icon,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : m("", !0),
            o("div", Ir, [
              r.title ? (l(), n("p", zr, p(r.title), 1)) : m("", !0),
              r.description ? (l(), n("p", Mr, p(r.description), 1)) : m("", !0)
            ])
          ])) : m("", !0),
          y(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (l(), n("div", Vr, [
            r.showFooterClose ? (l(), b(c, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: g(() => [
                C(p(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0),
            r.showGo ? (l(), b(c, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: g(() => [
                C(p(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ])) : y(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (l(), b(re, {
      key: 3,
      to: "body"
    }, [
      S(le, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (_) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          i.syncOpen ? (l(), n("div", {
            key: 0,
            class: w(["ui-guidance-tour", { "ui-guidance-tour--has-target": s.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = ee((..._) => i.onEscape && i.onEscape(..._), ["esc"]))
          }, [
            r.closeOnBackdrop ? (l(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => i.onBackdrop && i.onBackdrop(..._))
            })) : m("", !0),
            s.tourHighlightStyle ? (l(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: E(s.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : m("", !0),
            o("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: E(s.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r.title || i.resolvedGoLabel
            }, [
              o("div", Or, [
                o("div", Er, [
                  o("div", Br, [
                    r.icon ? (l(), n("span", Rr, [
                      S(h, {
                        name: r.icon,
                        type: r.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : m("", !0),
                    o("div", Dr, [
                      r.title ? (l(), n("p", Nr, p(r.title), 1)) : m("", !0),
                      r.description ? (l(), n("p", $r, p(r.description), 1)) : m("", !0)
                    ])
                  ]),
                  r.showClose ? (l(), n("div", Fr, [
                    S(c, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": i.resolvedCloseLabel,
                      onClick: i.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : m("", !0)
                ]),
                e.$slots.default ? (l(), n("div", Hr, [
                  y(e.$slots, "default")
                ])) : m("", !0),
                i.hasFooterActions && !e.$slots.footer ? (l(), n("div", Wr, [
                  r.showFooterClose ? (l(), b(c, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: g(() => [
                      C(p(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : m("", !0),
                  r.showGo ? (l(), b(c, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: g(() => [
                      C(p(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : m("", !0)
                ])) : y(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Pr)
          ], 34)) : m("", !0)
        ]),
        _: 3
      })
    ])) : m("", !0)
  ], 2)) : m("", !0);
}
const Yr = /* @__PURE__ */ k(xr, [["render", Gr]]), Ur = ["solid", "regular", "brands", "light", "duotone", "thin"], Kr = {
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
      validator: (e) => Ur.includes(e)
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
      return L(
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
      return e && (r = t.filter((a) => String(a).toLowerCase().includes(e))), r.slice(0, this.maxResults);
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
}, jr = ["disabled", "aria-expanded", "onClick"], qr = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Zr = { class: "ui-select-field-suffix" }, Qr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Xr = { class: "ui-icon-picker-panel" }, Jr = { class: "ui-icon-picker-panel__header" }, el = { class: "ui-icon-picker-panel__title" }, tl = { class: "ui-icon-picker-panel__search" }, il = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, rl = {
  key: 1,
  class: "ui-icon-picker-grid"
}, ll = ["title", "onClick"];
function al(e, t, r, a, s, i) {
  const c = v("ui-icon"), d = v("ui-button"), u = v("ui-input"), h = v("ui-popover");
  return l(), n("div", {
    class: w(i.rootClass)
  }, [
    S(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => s.popoverOpen = f),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: f, toggle: _, close: I }) => [
        y(e.$slots, "trigger", {
          open: f,
          toggle: _,
          close: I
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": f ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            o("span", qr, [
              S(c, {
                name: i.localIcon || "grid",
                type: r.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: w(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            o("span", Zr, [
              o("span", Qr, [
                S(c, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, jr)
        ])
      ]),
      content: g(() => [
        o("div", Xr, [
          o("div", Jr, [
            o("span", el, p(i.popoverTitleLabel), 1),
            i.localIcon ? (l(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(i.clearIcon, ["stop"])
            }, {
              default: g(() => [
                C(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          o("div", tl, [
            S(u, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => s.searchQuery = f),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (l(), n("div", rl, [
            (l(!0), n(x, null, z(i.filteredIcons, (f) => (l(), n("button", {
              key: f,
              type: "button",
              class: w(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === f }]),
              title: f,
              onClick: (_) => i.selectIcon(f)
            }, [
              S(c, {
                name: f,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, ll))), 128))
          ])) : (l(), n("div", il, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const sl = /* @__PURE__ */ k(Kr, [["render", al]]);
function nl(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const a = Math.min(4, Math.round(r)), s = ["weak", "fair", "good", "strong"], i = a <= 0 ? "weak" : s[Math.min(a - 1, 3)];
  return {
    score: a,
    percent: a / 4 * 100,
    label: i
  };
}
let X = 0;
const ol = ["sm", "md", "lg"], ul = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ol.includes(e)
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
    return X += 1, {
      fallbackId: `ui-password-${X}`,
      fallbackStrengthId: `ui-password-strength-${X}`,
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
      return nl(this.modelValue);
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
}, cl = ["aria-label", "aria-pressed", "disabled"], dl = ["id", "aria-live"];
function hl(e, t, r, a, s, i) {
  const c = v("ui-icon"), d = v("ui-input"), u = v("ui-progress");
  return l(), n("div", {
    class: w(["ui-password", [e.$attrs.class]])
  }, [
    S(d, A({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
      type: s.visible ? "text" : "password",
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
        o("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": s.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => s.visible = !s.visible)
        }, [
          S(c, {
            name: s.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, cl)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (l(), n("div", {
      key: 0,
      id: s.fallbackStrengthId,
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
        class: w(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : m("", !0)
    ], 8, dl)) : m("", !0)
  ], 2);
}
const fl = /* @__PURE__ */ k(ul, [["render", hl]]), ml = ["numeric", "alphanumeric"], pl = {
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
      validator: (e) => ml.includes(e)
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
      const a = t.target.value.split("").map((d) => this.normalizeChar(d)).filter(Boolean);
      if (a.length === 0) {
        const d = [...this.cells];
        d[e] = "", this.emitValue(d);
        return;
      }
      const s = [...this.cells];
      let i = e;
      for (const d of a) {
        if (i >= this.length) break;
        s[i] = d, i += 1;
      }
      this.emitValue(s);
      const c = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var d, u;
        (d = this.cellEl(c)) == null || d.focus(), (u = this.cellEl(c)) == null || u.select();
      });
    },
    onCellKeydown(e, t) {
      var r, a;
      if (t.key === "Backspace") {
        t.preventDefault();
        const s = [...this.cells];
        if (s[e]) {
          s[e] = "", this.emitValue(s);
          return;
        }
        e > 0 && (s[e - 1] = "", this.emitValue(s), this.$nextTick(() => {
          var i;
          (i = this.cellEl(e - 1)) == null || i.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (a = this.cellEl(e + 1)) == null || a.focus());
    },
    onCellFocus(e) {
      this.activeIndex = e, this.$emit("focus", e), this.$nextTick(() => {
        var t;
        (t = this.cellEl(e)) == null || t.select();
      });
    },
    onPaste(e) {
      var s;
      e.preventDefault();
      const t = ((s = e.clipboardData) == null ? void 0 : s.getData("text")) ?? "", r = this.normalizeValue(t);
      if (!r) return;
      this.emitValue(r.split(""));
      const a = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, a))) == null || i.focus();
      });
    }
  }
}, gl = ["aria-label"], bl = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function yl(e, t, r, a, s, i) {
  return l(), n("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: w([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), n(x, null, z(r.length, (c, d) => (l(), n("input", {
      key: d,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[d] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: d === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(d),
      onInput: (u) => i.onCellInput(d, u),
      onKeydown: (u) => i.onCellKeydown(d, u),
      onFocus: (u) => i.onCellFocus(d),
      onPaste: t[0] || (t[0] = (...u) => i.onPaste && i.onPaste(...u))
    }, null, 40, bl))), 128))
  ], 10, gl);
}
const vl = /* @__PURE__ */ k(pl, [["render", yl]]), _l = ["ul", "ol", "div"], kl = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => _l.includes(e)
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
      return L("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function wl(e, t, r, a, s, i) {
  return l(), b(N(r.tag), A({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: g(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Sl = /* @__PURE__ */ k(kl, [["render", wl]]), xl = ["solid", "regular", "brands", "light", "duotone", "thin"], Cl = {
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
      validator: (e) => xl.includes(e)
    }
  }
}, Ll = {
  class: "ui-list-item",
  role: "listitem"
}, Tl = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Al = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Il = { class: "ui-list-item-content min-w-0 flex-1" };
function zl(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("li", Ll, [
    r.prefixIcon ? (l(), n("span", Tl, [
      S(c, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), n("span", Al, [
      y(e.$slots, "prefix")
    ])) : m("", !0),
    o("div", Il, [
      y(e.$slots, "default")
    ])
  ]);
}
const Ml = /* @__PURE__ */ k(Cl, [["render", zl]]), Vl = ["bar", "circle"], ke = ["sm", "md", "lg"], we = ["thin", "md"], Pl = ["default", "weak", "fair", "good", "strong"], U = { sm: 16, md: 20, lg: 24 }, Ol = { sm: 1.5, md: 2, lg: 2 }, El = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Vl.includes(e)
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
      validator: (e) => Pl.includes(e)
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
      const e = this.type === "circle" ? ke.includes(this.size) ? this.size : "sm" : we.includes(this.size) ? this.size : "md";
      return L(
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
      return ke.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return we.includes(this.size) ? this.size : "md";
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
      const e = U[this.circleSizeKey] ?? U.sm, t = Ol[this.circleSizeKey] ?? 2, r = (e - t) / 2, a = e / 2, s = 2 * Math.PI * r, i = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: a, circumference: s, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Bl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Rl = ["width", "height", "viewBox"], Dl = ["cx", "cy", "r", "stroke-width"], Nl = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], $l = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Fl(e, t, r, a, s, i) {
  return l(), n("div", {
    class: w(i.rootClass),
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
      o("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Dl),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Nl)
    ], 8, Rl)) : (l(), n("div", $l, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Bl);
}
const Hl = /* @__PURE__ */ k(El, [["render", Fl]]), Wl = ["sm", "md", "lg", "full"], Se = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Gl = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Wl.includes(e)
    }
  },
  computed: {
    rootClass() {
      return L(
        "ui-menu",
        Se[this.width] || Se.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Yl = {
  key: 0,
  class: "ui-menu-header"
}, Ul = { class: "ui-menu-body" }, Kl = {
  key: 1,
  class: "ui-menu-footer"
};
function jl(e, t, r, a, s, i) {
  return l(), n("nav", A({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (l(), n("div", Yl, [
      y(e.$slots, "header")
    ])) : m("", !0),
    o("div", Ul, [
      y(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), n("div", Kl, [
      y(e.$slots, "footer")
    ])) : m("", !0)
  ], 16);
}
const ql = /* @__PURE__ */ k(Gl, [["render", jl]]), Zl = {
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
      return L("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ql = {
  key: 0,
  class: "ui-menu-group-label"
}, Xl = { class: "ui-menu-group-items" };
function Jl(e, t, r, a, s, i) {
  return l(), n("div", A({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (l(), n("p", Ql, p(r.label), 1)) : m("", !0),
    o("div", Xl, [
      y(e.$slots, "default")
    ])
  ], 16);
}
const ea = /* @__PURE__ */ k(Zl, [["render", Jl]]), ta = {
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
      return L(
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
function ia(e, t, r, a, s, i) {
  const c = v("ui-button");
  return l(), b(c, A({
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
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const ra = /* @__PURE__ */ k(ta, [["render", ia]]), la = {
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
      return L("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, aa = ["aria-label"];
function sa(e, t, r, a, s, i) {
  return l(), n("div", A({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, aa);
}
const na = /* @__PURE__ */ k(la, [["render", sa]]), oa = {
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
}, ua = ["aria-checked", "disabled"], ca = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, da = {
  key: 1,
  class: "ui-segment-label"
}, ha = {
  key: 2,
  class: "sr-only"
}, fa = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, ma = {
  key: 1,
  class: "ui-segment-label"
}, pa = {
  key: 2,
  class: "sr-only"
};
function ga(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("button", {
    type: "button",
    role: "radio",
    class: w(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...d) => i.select && i.select(...d))
  }, [
    i.hasAffixes ? (l(), n(x, { key: 0 }, [
      i.hasPrepend ? (l(), n("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = M(() => {
        }, ["stop"]))
      }, [
        y(e.$slots, "prepend")
      ])) : m("", !0),
      o("span", {
        class: w(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (l(), n("span", ca, [
          S(c, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : m("", !0),
        i.showLabel ? (l(), n("span", da, p(r.label), 1)) : r.label ? (l(), n("span", ha, p(r.label), 1)) : m("", !0)
      ], 2),
      i.hasAppend ? (l(), n("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = M(() => {
        }, ["stop"]))
      }, [
        y(e.$slots, "append")
      ])) : m("", !0)
    ], 64)) : (l(), n(x, { key: 1 }, [
      r.icon ? (l(), n("span", fa, [
        S(c, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : m("", !0),
      i.showLabel ? (l(), n("span", ma, p(r.label), 1)) : r.label ? (l(), n("span", pa, p(r.label), 1)) : m("", !0)
    ], 64))
  ], 10, ua);
}
const ba = /* @__PURE__ */ k(oa, [["render", ga]]), ya = ["sm", "md", "lg"], va = ["horizontal", "vertical"], _a = {
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
      validator: (e) => ya.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => va.includes(e)
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
      return De(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return L(
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
}, ka = ["aria-label"];
function wa(e, t, r, a, s, i) {
  return l(), n("div", A({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, ka);
}
const Sa = /* @__PURE__ */ k(_a, [["render", wa]]), xa = ["horizontal", "vertical"], Ca = ["default", "pills"], La = {
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
      validator: (e) => Ca.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => xa.includes(e)
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
      return L(
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
}, Ta = ["aria-label"], Aa = { class: "ui-stepper-pills-track" }, Ia = {
  key: 0,
  class: "ui-stepper-pills-label"
}, za = { class: "flex w-full min-w-0 items-center justify-center" }, Ma = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Va = {
  key: 1,
  class: "tabular-nums"
}, Pa = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Oa = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Ea = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ba = { class: "flex flex-col items-center" }, Ra = {
  key: 1,
  class: "tabular-nums"
}, Da = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Na = { class: "ui-stepper-title" }, $a = {
  key: 0,
  class: "ui-stepper-description"
};
function Fa(e, t, r, a, s, i) {
  const c = v("ui-icon");
  return l(), n("div", A({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (l(), n(x, { key: 0 }, [
      o("div", Aa, [
        (l(!0), n(x, null, z(i.normalizedSteps, (d, u) => (l(), b(N(r.interactive ? "button" : "span"), A({
          key: u,
          class: ["ui-stepper-pill", i.pillClass(u)],
          role: "listitem",
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (l(), n("p", Ia, p(i.pillsLabel), 1)) : m("", !0)
    ], 64)) : r.direction === "horizontal" ? (l(!0), n(x, { key: 1 }, z(i.normalizedSteps, (d, u) => (l(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", za, [
        u > 0 ? (l(), n("span", {
          key: 0,
          class: w(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", Ma)),
        (l(), b(N(r.interactive ? "button" : "div"), A({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            d.icon ? (l(), b(c, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", Va, p(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 2,
          class: w(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), n("span", Pa))
      ]),
      o("p", Oa, p(d.title), 1),
      d.description ? (l(), n("p", Ea, p(d.description), 1)) : m("", !0)
    ]))), 128)) : (l(!0), n(x, { key: 2 }, z(i.normalizedSteps, (d, u) => (l(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", Ba, [
        (l(), b(N(r.interactive ? "button" : "div"), A({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            d.icon ? (l(), b(c, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), n("span", Ra, p(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (l(), n("span", {
          key: 0,
          class: w(["ui-stepper-vrail", i.verticalRailClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : m("", !0)
      ]),
      o("div", Da, [
        o("p", Na, p(d.title), 1),
        d.description ? (l(), n("p", $a, p(d.description), 1)) : m("", !0)
      ])
    ]))), 128))
  ], 16, Ta);
}
const Ha = /* @__PURE__ */ k(La, [["render", Fa]]);
let xe = 0;
const Wa = {
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
    return xe += 1, { fallbackId: `ui-slider-${xe}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return L("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
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
}, Ga = {
  key: 0,
  class: "ui-slider-header"
}, Ya = {
  key: 0,
  class: "ui-form-label"
}, Ua = {
  key: 1,
  class: "ui-slider-value"
}, Ka = { class: "ui-slider-rail" }, ja = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], qa = {
  key: 1,
  class: "ui-slider-scale"
}, Za = { key: 0 }, Qa = { key: 1 };
function Xa(e, t, r, a, s, i) {
  const c = v("ui-progress");
  return l(), n("div", {
    class: w(i.rootClass)
  }, [
    r.label || i.hasValue ? (l(), n("div", Ga, [
      r.label ? (l(), n("span", Ya, p(r.label), 1)) : m("", !0),
      i.hasValue ? (l(), n("span", Ua, p(r.valueText), 1)) : m("", !0)
    ])) : m("", !0),
    o("div", Ka, [
      S(c, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", A(i.passthroughAttrs, {
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
      }), null, 16, ja)
    ]),
    r.minLabel || r.maxLabel ? (l(), n("div", qa, [
      r.minLabel ? (l(), n("span", Za, p(r.minLabel), 1)) : m("", !0),
      r.maxLabel ? (l(), n("span", Qa, p(r.maxLabel), 1)) : m("", !0)
    ])) : m("", !0)
  ], 2);
}
const Ja = /* @__PURE__ */ k(Wa, [["render", Xa]]);
let Ce = 0;
const es = {
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
    return Ce += 1, { fallbackId: `ui-switch-${Ce}` };
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
      for (const [r, a] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = a);
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
}, ts = ["id", "aria-checked", "disabled", "aria-describedby"];
function is(e, t, r, a, s, i) {
  return l(), n("button", A({
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
    onClick: t[0] || (t[0] = (...c) => i.toggle && i.toggle(...c)),
    onKeydown: t[1] || (t[1] = (...c) => i.onKeydown && i.onKeydown(...c))
  }), [
    o("span", {
      class: w(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      o("span", {
        class: w(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, ts);
}
const rs = /* @__PURE__ */ k(es, [["render", is]]), ls = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return L("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, as = { class: "ui-table-scroll" };
function ss(e, t, r, a, s, i) {
  return l(), n("div", as, [
    o("table", A({ class: i.rootClass }, i.passthroughAttrs), [
      y(e.$slots, "default")
    ], 16)
  ]);
}
const ns = /* @__PURE__ */ k(ls, [["render", ss]]), os = {
  name: "TableBody"
}, us = { class: "ui-table-body" };
function cs(e, t, r, a, s, i) {
  return l(), n("tbody", us, [
    y(e.$slots, "default")
  ]);
}
const ds = /* @__PURE__ */ k(os, [["render", cs]]), hs = ["left", "center", "right"], fs = ["title", "secondary", "body"], ms = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => hs.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || fs.includes(e)
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
      return L(
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
}, ps = ["colspan"];
function gs(e, t, r, a, s, i) {
  return l(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: w(i.rootClass)
  }, [
    y(e.$slots, "default")
  ], 10, ps);
}
const bs = /* @__PURE__ */ k(ms, [["render", gs]]), ys = ["left", "center", "right"], vs = ["sm", "md", "lg"], _s = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => ys.includes(e)
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
      return L(
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
      if (!(this.iconCol || vs.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function ks(e, t, r, a, s, i) {
  return l(), n("th", {
    class: w(i.rootClass),
    style: E(i.widthStyle)
  }, [
    y(e.$slots, "default")
  ], 6);
}
const ws = /* @__PURE__ */ k(_s, [["render", ks]]), Ss = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return L(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function xs(e, t, r, a, s, i) {
  return l(), n("thead", {
    class: w(i.rootClass)
  }, [
    y(e.$slots, "default")
  ], 2);
}
const Cs = /* @__PURE__ */ k(Ss, [["render", xs]]), Ls = {
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
}, Ts = { class: "ui-table-pagination" }, As = { class: "ui-table-pagination-meta" }, Is = { class: "ui-table-pagination-nav" }, zs = { class: "ui-table-pagination-page" };
function Ms(e, t, r, a, s, i) {
  const c = v("ui-button");
  return l(), n("div", Ts, [
    o("div", As, [
      y(e.$slots, "meta", {}, () => [
        C(p(r.metaText), 1)
      ])
    ]),
    o("div", Is, [
      S(c, {
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
      o("div", zs, p(r.pageLabel), 1),
      S(c, {
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
const Vs = /* @__PURE__ */ k(Ls, [["render", Ms]]), Ps = ["none", "soft", "strong"], Os = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ps.includes(e)
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
      return L(
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
function Es(e, t, r, a, s, i) {
  return l(), n("tr", {
    class: w(i.rootClass)
  }, [
    y(e.$slots, "default")
  ], 2);
}
const Bs = /* @__PURE__ */ k(Os, [["render", Es]]), Rs = {
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
      return L("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Ds = ["id", "aria-labelledby"];
function Ns(e, t, r, a, s, i) {
  return Oe((l(), n("div", A({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, Ds)), [
    [Ee, i.isActive]
  ]);
}
const $s = /* @__PURE__ */ k(Rs, [["render", Ns]]), Fs = Ne("ui-timepicker"), J = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const Hs = {
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
      fallbackId: Fs(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : V(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return V(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return V(this, "ui.timePicker.minuteAria", "Minute");
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
      const a = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      a && (t = Math.min(23, Math.max(0, parseInt(a[1], 10))), r = Math.min(59, Math.max(0, parseInt(a[2], 10))));
      const s = this.minuteValues;
      let i = s[0] ?? 0, c = 999;
      for (const d of s) {
        const u = Math.abs(d - r);
        u < c && (c = u, i = d);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return J;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return J;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : J;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const a = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(a) ? a : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), a = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, i = Math.round((s - a - r / 2) / r);
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
      const a = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - a) > 0.5 && (e.scrollTop = a), this.emitDraft();
    }
  }
}, Ws = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Gs = { class: "ui-timepicker-wheels" }, Ys = { class: "ui-timepicker-wheels-row" }, Us = ["aria-valuenow", "aria-label"], Ks = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, js = { class: "ui-timepicker-wheel-spacer" }, qs = ["onClick"], Zs = ["aria-valuenow", "aria-label"], Qs = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Xs = { class: "ui-timepicker-wheel-spacer" }, Js = ["onClick"], en = { class: "min-w-0 flex-1 truncate text-foreground" }, tn = { class: "ui-timepicker-panel w-full p-2" }, rn = { class: "ui-timepicker-wheels" }, ln = { class: "ui-timepicker-wheels-row" }, an = ["aria-valuenow", "aria-label"], sn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, nn = { class: "ui-timepicker-wheel-spacer" }, on = ["onClick"], un = ["aria-valuenow", "aria-label"], cn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, dn = { class: "ui-timepicker-wheel-spacer" }, hn = ["onClick"];
function fn(e, t, r, a, s, i) {
  const c = v("ui-button"), d = v("ui-popover");
  return l(), n("div", {
    class: w([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (l(), n("div", Ws, [
      o("div", Gs, [
        t[2] || (t[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Ys, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": s.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            o("div", Ks, [
              o("div", js, [
                (l(!0), n(x, null, z(i.hourOptions, (u) => (l(), n("button", {
                  key: "h-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: w([
                    "ui-timepicker-wheel-item",
                    u === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(u)
                }, p(i.pad2(u)), 11, qs))), 128))
              ])
            ], 512)
          ], 8, Us),
          t[1] || (t[1] = o("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": s.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": i.minuteAriaLabel
          }, [
            o("div", Qs, [
              o("div", Xs, [
                (l(!0), n(x, null, z(i.minuteValues, (u, h) => (l(), n("button", {
                  key: "m-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: w([
                    "ui-timepicker-wheel-item",
                    u === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (f) => i.selectMinute(h)
                }, p(i.pad2(u)), 11, Js))), 128))
              ])
            ], 512)
          ], 8, Zs)
        ]),
        t[3] || (t[3] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        t[4] || (t[4] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (l(), b(d, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (u) => s.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: f }) => [
        y(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: f
        }, () => [
          S(c, {
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
              o("span", en, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        o("div", tn, [
          o("div", rn, [
            t[6] || (t[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", ln, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                o("div", sn, [
                  o("div", nn, [
                    (l(!0), n(x, null, z(i.hourOptions, (u) => (l(), n("button", {
                      key: "h-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: w([
                        "ui-timepicker-wheel-item",
                        u === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(u)
                    }, p(i.pad2(u)), 11, on))), 128))
                  ])
                ], 512)
              ], 8, an),
              t[5] || (t[5] = o("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                o("div", cn, [
                  o("div", dn, [
                    (l(!0), n(x, null, z(i.minuteValues, (u, h) => (l(), n("button", {
                      key: "m-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: w([
                        "ui-timepicker-wheel-item",
                        u === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (f) => i.selectMinute(h)
                    }, p(i.pad2(u)), 11, hn))), 128))
                  ])
                ], 512)
              ], 8, un)
            ]),
            t[7] || (t[7] = o("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[8] || (t[8] = o("div", {
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
const mn = /* @__PURE__ */ k(Hs, [["render", fn]]), pn = ["square", "video", "auto"], gn = ["fill", "sm", "md", "lg"], Le = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, bn = {
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
      validator: (e) => pn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => gn.includes(e)
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
      return L(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Le[this.size] || Le.fill,
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
}, yn = ["src", "alt"], vn = ["aria-hidden"], _n = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, kn = {
  key: 3,
  class: "ui-photo__overflow"
}, wn = ["aria-label"], Sn = ["aria-label"], xn = { class: "ui-photo-preview__panel" }, Cn = ["src", "alt"], Ln = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Tn(e, t, r, a, s, i) {
  const c = v("ui-icon"), d = v("ui-button");
  return l(), n(x, null, [
    (l(), b(N(i.rootTag), A({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: g(() => [
        r.src && !s.imageFailed ? (l(), n("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (u) => s.imageFailed = !0)
        }, null, 40, yn)) : (l(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          S(c, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, vn)),
        r.favorite ? (l(), n("span", _n, [
          S(c, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : m("", !0),
        r.overflowLabel ? (l(), n("span", kn, p(r.overflowLabel), 1)) : m("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (l(), b(re, { to: "body" }, [
      S(le, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          s.previewOpen ? (l(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, Sn),
            o("div", xn, [
              S(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: M(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.activeSrc ? (l(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Cn)) : m("", !0),
              i.showNext ? (l(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: M(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.counterLabel ? (l(), n("p", Ln, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, wn)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const An = /* @__PURE__ */ k(bn, [["render", Tn]]), In = ["square", "video", "auto"], zn = {
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
      validator: (e) => In.includes(e)
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
      return L(
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
}, Mn = ["data-count"], Vn = ["aria-label"], Pn = ["aria-label"], On = { class: "ui-photo-preview__panel" }, En = ["src", "alt"], Bn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Rn(e, t, r, a, s, i) {
  const c = v("ui-photo"), d = v("ui-button");
  return l(), n(x, null, [
    o("div", {
      class: w(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (l(!0), n(x, null, z(i.visibleItems, (u, h) => (l(), b(c, {
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
    ], 10, Mn),
    (l(), b(re, { to: "body" }, [
      S(le, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          s.previewOpen ? (l(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, Pn),
            o("div", On, [
              S(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: M(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.activeSrc ? (l(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, En)) : m("", !0),
              i.showNext ? (l(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: M(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.counterLabel ? (l(), n("p", Bn, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, Vn)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Dn = /* @__PURE__ */ k(zn, [["render", Rn]]);
function K(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Gn() {
  return {
    push: F,
    dismiss: Fe,
    clear: $e,
    info: (e) => F({ ...K(e), variant: "info" }),
    success: (e) => F({ ...K(e), variant: "success" }),
    warning: (e) => F({ ...K(e), variant: "warning" }),
    error: (e) => F({ ...K(e), variant: "error" })
  };
}
function Yn(e = !1) {
  return Te({
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
function Un() {
  return {
    confirm: mi
  };
}
const ie = {
  en: We,
  tr: Me
};
function Kn(e = "tr") {
  return ie[e] ?? ie.tr;
}
const jn = Me, Nn = [
  ["ui-action-card", _t],
  ["ui-action-card-list", xt],
  ["ui-action-group", Ge],
  ["ui-alert", Ye],
  ["ui-avatar", Vt],
  ["ui-badge", Ue],
  ["ui-button", Ke],
  ["ui-card", je],
  ["ui-checkbox", oi],
  ["ui-checkbox-group", fi],
  ["ui-color-picker", jt],
  ["ui-currency-input", ei],
  ["ui-confirm-dialog", bi],
  ["ui-date-picker", qe],
  ["ui-date-range-picker", Vi],
  ["ui-dialog", Ze],
  ["ui-divider", ze],
  ["ui-dropdown", Bi],
  ["ui-empty", Qe],
  ["ui-field", Yi],
  ["ui-field-action", lr],
  ["ui-file", gr],
  ["ui-form-row", Xe],
  ["ui-guidance", Yr],
  ["ui-icon", Je],
  ["ui-icon-picker", sl],
  ["ui-input", et],
  ["ui-password", fl],
  ["ui-phone", tt],
  ["ui-pin", vl],
  ["ui-list", Sl],
  ["ui-list-item", Ml],
  ["ui-popover", it],
  ["ui-progress", Hl],
  ["ui-radio", rt],
  ["ui-radio-group", lt],
  ["ui-select", at],
  ["ui-menu", ql],
  ["ui-menu-group", ea],
  ["ui-menu-item", ra],
  ["ui-menu-nav", na],
  ["ui-segment", ba],
  ["ui-segment-group", Sa],
  ["ui-skeleton", st],
  ["ui-slider", Ja],
  ["ui-stepper", Ha],
  ["ui-switch", rs],
  ["ui-table", ns],
  ["ui-table-body", ds],
  ["ui-table-cell", bs],
  ["ui-table-head", ws],
  ["ui-table-header", Cs],
  ["ui-table-pagination", Vs],
  ["ui-table-row", Bs],
  ["ui-tag", nt],
  ["ui-tab-list", ot],
  ["ui-tab-panel", $s],
  ["ui-tabs", ut],
  ["ui-tab-trigger", ct],
  ["ui-time-picker", mn],
  ["ui-tooltip", dt],
  ["ui-toast", ht],
  ["ui-photo", An],
  ["ui-photos", Dn]
];
function $n(e, t = {}) {
  var c, d;
  const { i18n: r, locale: a, locales: s, theme: i } = t;
  if (i && He(i), (c = r == null ? void 0 : r.global) != null && c.mergeLocaleMessage) {
    const u = s ?? (a != null ? [a] : [
      typeof r.global.locale == "string" ? r.global.locale : ((d = r.global.locale) == null ? void 0 : d.value) ?? "tr"
    ]);
    for (const h of u) {
      const f = ie[h];
      f && r.global.mergeLocaleMessage(h, f);
    }
  }
  for (const [u, h] of Nn)
    e.component(u, h);
}
const qn = {
  install: $n
};
export {
  _t as ActionCard,
  xt as ActionCardList,
  Ge as ActionGroup,
  Ye as Alert,
  Vt as Avatar,
  Ue as Badge,
  Ke as Button,
  je as Card,
  oi as Checkbox,
  fi as CheckboxGroup,
  jt as ColorPicker,
  bi as ConfirmDialog,
  ei as CurrencyInput,
  qe as DatePicker,
  Vi as DateRangePicker,
  Ze as Dialog,
  ze as Divider,
  Bi as Dropdown,
  Qe as Empty,
  Yi as Field,
  lr as FieldAction,
  gr as File,
  Xe as FormRow,
  Xn as GOOGLE_FONTS_CATALOG,
  Yr as Guidance,
  Je as Icon,
  sl as IconPicker,
  et as Input,
  Sl as List,
  Ml as ListItem,
  ql as Menu,
  ea as MenuGroup,
  ra as MenuItem,
  na as MenuNav,
  fl as Password,
  tt as Phone,
  An as Photo,
  Dn as Photos,
  vl as Pin,
  it as Popover,
  Hl as Progress,
  rt as Radio,
  lt as RadioGroup,
  ba as Segment,
  Sa as SegmentGroup,
  at as Select,
  st as Skeleton,
  Ja as Slider,
  Ha as Stepper,
  rs as Switch,
  Jn as THEME_CUSTOM_CSS_ID,
  eo as THEME_PRESETS,
  to as THEME_PRESET_IDS,
  ot as TabList,
  $s as TabPanel,
  ct as TabTrigger,
  ns as Table,
  ds as TableBody,
  bs as TableCell,
  ws as TableHead,
  Cs as TableHeader,
  Vs as TablePagination,
  Bs as TableRow,
  ut as Tabs,
  nt as Tag,
  mn as TimePicker,
  ht as Toast,
  dt as Tooltip,
  io as applyGoogleFontsForTheme,
  ro as applyThemeCustomCss,
  He as applyUiTheme,
  lo as buildGoogleFontsLinkTag,
  ao as buildGoogleFontsStylesheetUrl,
  so as buildThemeStyleAttr,
  no as clearThemeCustomCss,
  $e as clearToasts,
  oo as createUiId,
  Ne as createUiIdFactory,
  qn as default,
  uo as deriveBrandColorsFromPrimary,
  Fe as dismissToast,
  Wn as formatCurrencyAmount,
  Ve as getCurrencySymbol,
  co as getThemePreset,
  Kn as getUiMessages,
  ho as googleFontSelectOptions,
  fo as mergeUiTheme,
  mo as pickPassthroughAttrs,
  F as pushToast,
  mi as requestConfirm,
  De as resolveControlSize,
  ae as resolveCurrencyCode,
  po as resolvePrimaryColor,
  go as resolveThemeFontFamilies,
  bo as resolveThemePreset,
  yo as resolveThemeVars,
  V as resolveUiText,
  qt as sanitizeMoneyInput,
  jn as uiMessagesTr,
  Un as useConfirm,
  Yn as useDialog,
  Gn as useToast,
  vo as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
