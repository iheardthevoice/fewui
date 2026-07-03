import { resolveComponent as y, openBlock as s, createElementBlock as n, normalizeClass as S, renderSlot as _, createBlock as b, createCommentVNode as h, createElementVNode as c, toDisplayString as m, normalizeStyle as O, resolveDynamicComponent as D, mergeProps as T, withCtx as g, createVNode as w, withModifiers as I, createTextVNode as A, Fragment as L, renderList as P, withKeys as J, reactive as Ce, normalizeProps as Te, guardReactiveProps as Le, createSlots as oe, Teleport as te, Transition as ie, withDirectives as Me, vShow as Ve } from "vue";
import { _ as v, y as x, Z as $, e as Ae, H as $e, x as Oe, K as Ee, U as F, $ as Ie, s as Re, L as Be, A as De, a as Ne, B as Fe, b as He, C as Ge, c as Ye, d as We, E as Ue, F as Ke, I as je, f as qe, P as Ze, g as Qe, R as Xe, h as Je, S as et, i as tt, n as it, k as rt, m as st, l as lt, p as at, o as nt } from "./index-eNOUU8cy.js";
import { G as kn, D as wn, T as Sn, j as xn, q as Cn, r as Tn, t as Ln, u as An, v as In, w as zn, z as Pn, J as Mn, M as Vn, N as $n, O as On, Q as En, V as Rn, W as Bn, X as Dn, Y as Nn, a0 as Fn } from "./index-eNOUU8cy.js";
const ot = ["solid", "regular", "brands", "light", "duotone", "thin"], ut = {
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
      validator: (e) => ot.includes(e)
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
}, ct = ["disabled"], dt = { class: "ui-action-card__content" }, ht = { class: "ui-action-card__title" }, ft = {
  key: 0,
  class: "ui-action-card__description"
};
function pt(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("button", {
    type: "button",
    class: S(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }, [
    _(e.$slots, "leading", {}, () => [
      r.showDefaultLeading ? (s(), b(d, {
        key: 0,
        name: i.icon,
        type: i.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : h("", !0)
    ]),
    c("span", dt, [
      c("span", ht, m(i.title), 1),
      i.description ? (s(), n("span", ft, m(i.description), 1)) : h("", !0)
    ]),
    _(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (s(), b(d, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : h("", !0)
    ])
  ], 10, ct);
}
const mt = /* @__PURE__ */ v(ut, [["render", pt]]), gt = {
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
}, bt = ["aria-label"];
function yt(e, t, i, l, a, r) {
  return s(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: O(r.listStyle)
  }, [
    _(e.$slots, "default")
  ], 12, bt);
}
const vt = /* @__PURE__ */ v(gt, [["render", yt]]), _t = ["sm", "md", "lg"], ue = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
}, ce = Object.freeze({
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
}), de = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function kt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return de[t] && (t = de[t]), t >= "A" && t <= "Z" ? t : "default";
}
function wt(e) {
  var l;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const a = i[0][0] || "", r = i[i.length - 1][0] || "";
    return `${a}${r}`.toLocaleUpperCase("tr-TR");
  }
  return (((l = i[0]) == null ? void 0 : l[0]) || "?").toLocaleUpperCase("tr-TR");
}
const St = {
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
      validator: (e) => _t.includes(e)
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
        ue[this.size] || ue.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
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
      return wt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? kt(e[0]) : "default";
    },
    letterColors() {
      return ce[this.colorLetterKey] || ce.default;
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
}, xt = ["src", "alt"], Ct = ["role", "aria-label", "aria-hidden"];
function Tt(e, t, i, l, a, r) {
  return s(), b(D(r.rootTag), T({
    type: i.interactive ? "button" : void 0,
    class: r.rootClass,
    style: r.rootStyle
  }, r.rootBind, { onClick: r.onRootClick }), {
    default: g(() => [
      i.src && !a.imageFailed ? (s(), n("img", {
        key: 0,
        src: i.src,
        alt: r.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (d) => a.imageFailed = !0)
      }, null, 40, xt)) : (s(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, m(r.displayInitials), 9, Ct))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Lt = /* @__PURE__ */ v(St, [["render", Tt]]), At = [
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
], It = {
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
      presetColors: At
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
      return this.triggerPlaceholder ? this.triggerPlaceholder : $(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : $(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : $(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : $(this, "ui.colorPicker.customHex", "Custom color (hex)");
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
}, zt = ["disabled", "aria-expanded", "onClick"], Pt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Mt = { class: "ui-select-field-suffix" }, Vt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, $t = { class: "ui-color-picker-panel" }, Ot = { class: "ui-color-picker-panel__header" }, Et = { class: "ui-color-picker-panel__title" }, Rt = { class: "ui-color-picker-swatches" }, Bt = ["title", "onClick"], Dt = { class: "ui-color-picker-custom" }, Nt = { class: "ui-color-picker-panel__title" }, Ft = { class: "ui-color-picker-custom__row" };
function Ht(e, t, i, l, a, r) {
  const d = y("ui-icon"), o = y("ui-button"), u = y("ui-input"), f = y("ui-popover");
  return s(), n("div", {
    class: S(r.rootClass)
  }, [
    w(f, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (p) => a.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: k }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: i.disabled,
          "aria-expanded": p ? "true" : "false",
          "aria-haspopup": !0,
          onClick: k
        }, [
          c("span", Pt, [
            r.localColor ? (s(), n("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: O({ backgroundColor: r.localColor })
            }, null, 4)) : (s(), b(d, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          c("span", {
            class: S(["ui-select-value", { "ui-select-value--placeholder": !r.localColor }])
          }, m(r.displayValue), 3),
          c("span", Mt, [
            c("span", Vt, [
              w(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, zt)
      ]),
      content: g(() => [
        c("div", $t, [
          c("div", Ot, [
            c("span", Et, m(r.popoverTitleLabel), 1),
            r.localColor ? (s(), b(o, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: I(r.clearColor, ["stop"])
            }, {
              default: g(() => [
                A(m(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : h("", !0)
          ]),
          c("div", Rt, [
            (s(!0), n(L, null, P(a.presetColors, (p) => (s(), n("button", {
              key: p,
              type: "button",
              class: S(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": r.localColor === p }]),
              style: O({ backgroundColor: p }),
              title: p,
              onClick: (k) => r.selectColor(p)
            }, [
              r.localColor === p ? (s(), b(d, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : h("", !0)
            ], 14, Bt))), 128))
          ]),
          c("div", Dt, [
            c("span", Nt, m(r.customColorLabelText), 1),
            c("div", Ft, [
              w(u, {
                modelValue: r.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => r.localColor = p),
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
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const Gt = /* @__PURE__ */ v(It, [["render", Ht]]), he = {
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
function re(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in G ? t : "TRY";
  const i = String(e).trim();
  if (he[i])
    return he[i];
  const l = i.toUpperCase();
  return G[l] ? l : t in G ? t : "TRY";
}
function ze(e) {
  var i;
  const t = re(e);
  if (G[t])
    return G[t];
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
function hn(e, t, i = "tr-TR") {
  const l = Number(e) || 0, a = re(t);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: a }).format(l);
  } catch {
    return `${ze(a)}${l.toFixed(2)}`;
  }
}
function Yt(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const i = t.indexOf(".");
  if (i !== -1) {
    const l = t.slice(0, i), a = t.slice(i + 1).replace(/\./g, "");
    t = `${l}.${a}`;
  }
  return t;
}
let fe = 0;
const Wt = ["sm", "md", "lg"], Ut = {
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
      validator: (e) => Wt.includes(e)
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
    return fe += 1, { fallbackId: `ui-currency-input-${fe}` };
  },
  computed: {
    displaySymbol() {
      return ze(this.currency);
    },
    resolvedCurrencyCode() {
      return re(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = Yt(e);
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
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, Kt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function jt(e, t, i, l, a, r) {
  const d = y("ui-input");
  return s(), b(d, T({
    id: r.resolvedId,
    modelValue: r.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => r.innerValue = o),
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
    onFocus: t[1] || (t[1] = (o) => e.$emit("focus", o)),
    onBlur: r.onBlur
  }), {
    prepend: g(() => [
      c("span", Kt, m(r.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const qt = /* @__PURE__ */ v(Ut, [["render", jt]]), Zt = {
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
        const t = e.target.checked, i = this.uiCheckboxGroup.modelValue, l = Array.isArray(i) ? [...i] : [], a = l.findIndex((r) => Object.is(r, this.value));
        t && a === -1 ? l.push(this.value) : !t && a !== -1 && l.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", l);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], i = t.findIndex((l) => Object.is(l, this.value));
        i === -1 ? t.push(this.value) : t.splice(i, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Qt = ["type", "name", "value", "checked"], Xt = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Jt = { class: "ui-checkbox-body" }, ei = {
  key: 0,
  class: "ui-checkbox-label"
}, ti = {
  key: 1,
  class: "ui-checkbox-description"
};
function ii(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("label", {
    class: S(r.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = J(I((...o) => r.toggle && r.toggle(...o), ["prevent"]), ["enter"])),
      t[2] || (t[2] = J(I((...o) => r.toggle && r.toggle(...o), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: r.nativeType,
      name: r.nativeName,
      value: r.groupValueString,
      checked: r.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...o) => r.onNativeChange && r.onNativeChange(...o))
    }, null, 40, Qt),
    c("span", Xt, [
      r.isChecked ? (s(), b(d, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : h("", !0)
    ]),
    c("span", Jt, [
      e.$slots.label || i.label ? (s(), n("span", ei, [
        _(e.$slots, "label", {}, () => [
          A(m(i.label), 1)
        ])
      ])) : h("", !0),
      i.description ? (s(), n("span", ti, m(i.description), 1)) : h("", !0)
    ])
  ], 34);
}
const ri = /* @__PURE__ */ v(Zt, [["render", ii]]), si = ["list", "button", "List", "Button"];
let pe = 0;
const li = {
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
      validator: (e) => si.includes(e)
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
}, ai = ["aria-label"];
function ni(e, t, i, l, a, r) {
  return s(), n("div", {
    class: S(["ui-checkbox-group", `ui-checkbox-group--${r.normalizedVariant}`]),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    _(e.$slots, "default")
  ], 10, ai);
}
const oi = /* @__PURE__ */ v(li, [["render", ni]]), C = Ce({
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
function ui(e = {}) {
  return new Promise((t) => {
    C.title = e.title ?? "", C.description = e.description ?? "", C.confirmLabel = e.confirmLabel ?? "", C.cancelLabel = e.cancelLabel ?? "", C.destructive = !!e.destructive, C._resolve = t, C.open = !0;
  });
}
function q(e) {
  const t = C._resolve;
  C.open = !1, C._resolve = null, t && t(!!e);
}
const ci = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return C;
    },
    syncOpen: {
      get() {
        return C.open;
      },
      set(e) {
        e ? C.open = !0 : C._resolve ? q(!1) : C.open = !1;
      }
    },
    confirmText() {
      return C.confirmLabel ? C.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return C.cancelLabel ? C.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      q(!0);
    },
    onCancel() {
      q(!1);
    }
  }
};
function di(e, t, i, l, a, r) {
  const d = y("ui-button"), o = y("ui-dialog");
  return s(), b(o, {
    open: r.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (u) => r.syncOpen = u),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: r.confirmState.title,
    description: r.confirmState.description,
    "header-divider": "",
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": r.confirmState.title || r.fallbackAriaLabel
  }, {
    footer: g(() => [
      w(d, {
        color: "secondary",
        rounded: "",
        onClick: r.onCancel
      }, {
        default: g(() => [
          A(m(r.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      w(d, {
        rounded: "",
        color: r.confirmState.destructive ? "warning" : "primary",
        onClick: r.onConfirm
      }, {
        default: g(() => [
          A(m(r.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const hi = /* @__PURE__ */ v(ci, [["render", di]]);
let me = 0;
function Y(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${Y(e.getMonth() + 1)}-${Y(e.getDate())}`;
}
function W(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), l = Number(t[2]) - 1, a = Number(t[3]), r = new Date(i, l, a);
  return r.getFullYear() !== i || r.getMonth() !== l || r.getDate() !== a ? null : r;
}
function R(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function Z(e, t, i) {
  return new Date(e, t, 1).toLocaleString(i, { month: "long" });
}
function ge(e, t, i, l) {
  const a = `${e}-${Y(t + 1)}-01`, r = new Date(e, t + 1, 0).getDate();
  let d = `${e}-${Y(t + 1)}-${Y(r)}`;
  if (i && d > i && (d = i), l && a < l && d < l) return null;
  let o = a;
  return l && o < l && (o = l), R(o, d) > 0 ? null : [o, d];
}
const fi = {
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
    var l, a;
    me += 1;
    const e = me, t = ((l = this.modelValue) == null ? void 0 : l[0]) || "", i = W(t) || W((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
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
      return ((e = this.$i18n) == null ? void 0 : e.locale) || "tr";
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
      const e = /* @__PURE__ */ new Date(), t = B(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const l = B(i), a = e.getMonth(), r = e.getFullYear(), d = new Date(r, a - 1, 1), o = d.getFullYear(), u = d.getMonth(), f = (k, z) => typeof this.$t == "function" ? this.$t(k, z) : k;
      return [
        {
          key: "today",
          label: f("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: f("ui.dateRangePicker.yesterday"),
          range: [l, l]
        },
        {
          key: "thisMonth",
          label: f("ui.dateRangePicker.thisMonth", {
            month: Z(r, a, this.locale)
          }),
          range: ge(r, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: f("ui.dateRangePicker.lastMonth", {
            month: Z(o, u, this.locale)
          }),
          range: ge(o, u, this.maxYmd, this.minYmd)
        }
      ].map((k) => ({
        ...k,
        disabled: !k.range || this.isRangeDisabled(k.range[0], k.range[1])
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
        title: Z(i.year, i.month, this.locale),
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
      const e = W(this.startYmd) || W(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const i = (l) => {
        if (!l) return "…";
        const [a, r, d] = String(l).split("-");
        return `${d}.${r}.${a}`;
      };
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
      const i = new Date(e, t, 1), l = new Date(e, t, 1 - i.getDay()), a = this.previewStart, r = this.previewEnd, d = a && r, o = [];
      for (let u = 0; u < 42; u += 1) {
        const f = new Date(l.getFullYear(), l.getMonth(), l.getDate() + u), p = f.getMonth() === t && f.getFullYear() === e, k = f.getDate(), z = B(f), N = `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}-${t}`, M = B(/* @__PURE__ */ new Date()) === z, E = !!(this.minYmd && z < this.minYmd) || !!(this.maxYmd && z > this.maxYmd);
        let se = !1, le = !1;
        if (d) {
          const ae = R(a, r) <= 0 ? a : r, ne = R(a, r) <= 0 ? r : a;
          se = R(z, ae) >= 0 && R(z, ne) <= 0, le = z === ae || z === ne;
        }
        o.push({
          key: N,
          d: k,
          date: f,
          today: M,
          inMonth: p,
          disabled: E,
          inRange: se,
          endpoint: le
        });
      }
      return o;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [i, l] = e.range;
      this.pickingStart = i, this.pickingEnd = l, this.$emit("update:modelValue", [i, l]), this.$emit("change", [i, l]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = B(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let l = this.pickingStart, a = i;
      if (R(a, l) < 0) {
        const r = l;
        l = a, a = r;
      }
      this.pickingStart = l, this.pickingEnd = a, this.$emit("update:modelValue", [l, a]), this.$emit("change", [l, a]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, pi = { class: "min-w-0 flex-1 truncate text-foreground" }, mi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, gi = { class: "ui-daterangepicker-layout" }, bi = ["aria-label"], yi = { class: "ui-daterangepicker-calendars" }, vi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, _i = { class: "ui-daterangepicker-month-row" }, ki = { class: "mb-2 flex items-center justify-between gap-2" }, wi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Si = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, xi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ci = { class: "ui-datepicker-grid" };
function Ti(e, t, i, l, a, r) {
  const d = y("ui-button"), o = y("ui-popover");
  return s(), n("div", {
    class: S(["ui-daterangepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(o, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (u) => a.menuOpen = u),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: u, toggle: f }) => [
        w(d, {
          type: "button",
          id: r.resolvedId,
          variant: "solid",
          color: "input",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: i.disabled,
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": !0,
          onClick: f
        }, {
          default: g(() => [
            c("span", pi, m(r.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: g(({ close: u }) => [
        c("div", mi, [
          c("div", gi, [
            c("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": r.resolvedQuickAriaLabel
            }, [
              (s(!0), n(L, null, P(r.quickPresets, (f) => (s(), b(d, {
                key: f.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: f.disabled,
                onClick: (p) => r.applyQuick(f, u)
              }, {
                default: g(() => [
                  A(m(f.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, bi),
            c("div", yi, [
              r.rangeHint ? (s(), n("p", vi, m(r.rangeHint), 1)) : h("", !0),
              c("div", _i, [
                (s(!0), n(L, null, P(r.calendarPanes, (f) => (s(), n("section", {
                  key: f.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", ki, [
                    f.showPrev ? (s(), b(d, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": r.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = I((p) => r.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", wi)),
                    c("span", Si, m(f.title), 1),
                    f.showNext ? (s(), b(d, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": r.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = I((p) => r.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", xi))
                  ]),
                  t[3] || (t[3] = c("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
                    c("span", null, "Su"),
                    c("span", null, "Mo"),
                    c("span", null, "Tu"),
                    c("span", null, "We"),
                    c("span", null, "Th"),
                    c("span", null, "Fr"),
                    c("span", null, "Sa")
                  ], -1)),
                  c("div", Ci, [
                    (s(!0), n(L, null, P(f.cells, (p) => (s(), b(d, {
                      key: p.key,
                      variant: r.dayVariant(p),
                      color: r.dayColor(p),
                      size: "sm",
                      disabled: p.disabled,
                      "aria-selected": p.endpoint ? "true" : "false",
                      "aria-disabled": p.disabled ? "true" : void 0,
                      "data-outside": p.inMonth ? void 0 : "true",
                      "data-today": p.today ? "true" : void 0,
                      "data-in-range": p.inRange && !p.endpoint ? "true" : void 0,
                      "data-range-endpoint": p.endpoint ? "true" : void 0,
                      onMouseenter: (k) => r.onCellHover(p),
                      onClick: (k) => r.pick(p, u)
                    }, {
                      default: g(() => [
                        A(m(p.d), 1)
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
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Li = /* @__PURE__ */ v(fi, [["render", Ti]]), Ai = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Ii = {
  name: "Dropdown",
  components: { Divider: Ae },
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
      validator: (e) => Ai.includes(e)
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
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), t());
    }
  }
};
function zi(e, t, i, l, a, r) {
  const d = y("Divider"), o = y("ui-button"), u = y("ui-popover");
  return s(), b(u, {
    open: r.isOpen,
    placement: i.placement,
    "match-trigger-width": i.matchTriggerWidth,
    block: i.block,
    "mobile-centered": !1,
    "close-on-outside-click": i.closeOnOutsideClick,
    "close-on-escape": i.closeOnEscape,
    "outside-click-ignore-selector": i.outsideClickIgnoreSelector,
    "onUpdate:open": r.onOpenChange
  }, {
    trigger: g((f) => [
      _(e.$slots, "trigger", Te(Le(f)))
    ]),
    content: g(({ close: f }) => [
      c("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = I(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? _(e.$slots, "menu", {
          key: 0,
          close: f
        }) : (s(!0), n(L, { key: 1 }, P(i.items, (p, k) => (s(), n(L, { key: k }, [
          p.divider ? (s(), b(d, {
            key: 0,
            spacing: "sm"
          })) : (s(), b(o, {
            key: 1,
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": p.icon || null,
            disabled: p.disabled,
            onClick: I((z) => r.onItem(p, f), ["stop"])
          }, {
            default: g(() => [
              A(m(p.label), 1)
            ]),
            _: 2
          }, 1032, ["prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Pi = /* @__PURE__ */ v(Ii, [["render", zi]]), Mi = ["solid", "regular", "brands", "light", "duotone", "thin"], Vi = {
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
      validator: (e) => Mi.includes(e)
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
}, $i = {
  key: 0,
  class: "ui-field__title-row"
}, Oi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Ei = {
  key: 1,
  class: "ui-field__title"
}, Ri = {
  key: 1,
  class: "ui-field__value"
}, Bi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Di(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("div", T({ class: r.rootClass }, r.passthroughAttrs), [
    i.title || r.showIcon ? (s(), n("div", $i, [
      r.showIcon ? (s(), n("span", Oi, [
        w(d, {
          name: i.icon,
          type: i.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : h("", !0),
      i.title ? (s(), n("span", Ei, m(i.title), 1)) : h("", !0)
    ])) : h("", !0),
    r.hasValue ? (s(), n("div", Ri, [
      _(e.$slots, "default")
    ])) : h("", !0),
    i.subtitle ? (s(), n("p", Bi, m(i.subtitle), 1)) : h("", !0)
  ], 16);
}
const Ni = /* @__PURE__ */ v(Vi, [["render", Di]]), Fi = ["auto", "file", "folder"], Hi = ["sm", "md", "lg"], Gi = { icon: "folder", color: "text-sky-500" }, Yi = { icon: "file-lines", color: "text-muted-foreground" }, Wi = {
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
}, be = {
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
function j(e) {
  return String(e ?? "").trim();
}
function Ui(e) {
  const t = j(e);
  return /[/\\]\s*$/.test(t);
}
function Pe(e) {
  const t = j(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const i = t.split(/[/\\]/);
  return i[i.length - 1] || t;
}
function Ki(e) {
  const t = Pe(e), i = t.lastIndexOf(".");
  return i <= 0 || i === t.length - 1 ? "" : t.slice(i + 1).toLowerCase();
}
const ye = {
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
}, ji = {
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
      validator: (e) => Fi.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Hi.includes(e)
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
      return be[this.size] || be.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Ui(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = j(this.name);
      return e ? this.basenameOnly ? Pe(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return j(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Gi;
      const e = Ki(this.name);
      return Wi[e] || Yi;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? ye[this.color] !== void 0 ? ye[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, qi = ["aria-label"], Zi = ["title"];
function Qi(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("div", {
    class: S(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", r.rootSizeClass]),
    role: "img",
    "aria-label": r.ariaLabel
  }, [
    c("div", {
      class: S(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [r.shellClasses, r.folderShellClass]])
    }, [
      w(d, {
        name: r.resolvedIcon,
        type: r.resolvedIconType,
        size: r.iconSizeToken,
        class: S(r.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    c("span", {
      class: S(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", r.labelClass]),
      "aria-hidden": "true",
      title: r.fullLabel
    }, m(r.displayLabel), 11, Zi)
  ], 10, qi);
}
const Xi = /* @__PURE__ */ v(ji, [["render", Qi]]), Ji = ["dialog", "popover", "card", "tour"], er = ["solid", "regular", "brands", "light", "duotone", "thin"], tr = [
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
], ir = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, rr = 8, sr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Ji.includes(e)
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
      validator: (e) => er.includes(e)
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
      validator: (e) => tr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: rr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => ir.includes(e)
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
      return this.goLabel ? this.goLabel : $(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : $(this, "ui.guidance.close", "Close");
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? e : typeof e == "string" && e.trim() ? document.querySelector(e.trim()) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const l = window.innerWidth, a = window.innerHeight, r = i.getBoundingClientRect(), d = r.width || 320, o = r.height || 180;
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
      const u = t.getBoundingClientRect(), f = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, u.top - f), k = Math.max(0, u.left - f), z = Math.min(a, u.bottom + f), N = Math.min(l, u.right + f);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${k}px`,
        width: `${Math.max(0, N - k)}px`,
        height: `${Math.max(0, z - p)}px`
      };
      let M = z + V, E = k;
      this.placement.startsWith("top") ? M = p - o - V : this.placement.startsWith("right") ? (M = p, E = N + V) : this.placement.startsWith("left") ? (M = p, E = k - d - V) : this.placement.includes("end") && (E = N - d), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && M + o > a - V && (M = p - o - V), M = Math.max(V, Math.min(M, a - o - V)), E = Math.max(V, Math.min(E, l - d - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${M}px`,
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
        this.tourTargetRetries = 0;
        return;
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
        t && this.tourResizeObserver.observe(t);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, lr = { class: "ui-guidance-footer" }, ar = { class: "ui-guidance-popover" }, nr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, or = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, ur = { class: "ui-guidance-popover__text" }, cr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, dr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, hr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, fr = ["aria-label"], pr = { class: "ui-guidance-tour__content" }, mr = { class: "ui-header-lead" }, gr = { class: "ui-header-lead__main" }, br = {
  key: 0,
  class: "ui-header-lead__icon"
}, yr = { class: "ui-header-lead__text" }, vr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, _r = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, kr = {
  key: 0,
  class: "ui-header-lead__actions"
}, wr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Sr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function xr(e, t, i, l, a, r) {
  const d = y("ui-button"), o = y("ui-card"), u = y("ui-dialog"), f = y("ui-icon"), p = y("ui-popover");
  return r.shouldRender ? (s(), n("div", {
    key: 0,
    class: S(r.rootShellClass)
  }, [
    i.mode === "card" ? (s(), b(o, {
      key: 0,
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      border: ""
    }, oe({
      default: g(() => [
        _(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: g(() => [
          _(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      r.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          _(e.$slots, "footer", {}, () => [
            c("div", lr, [
              i.showFooterClose ? (s(), b(d, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: r.onClose
              }, {
                default: g(() => [
                  A(m(r.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : h("", !0),
              i.showGo ? (s(), b(d, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: r.onGo
              }, {
                default: g(() => [
                  A(m(r.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : h("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (s(), b(u, {
      key: 1,
      open: r.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (k) => r.syncOpen = k),
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      "header-divider": "",
      onAfterLeave: t[1] || (t[1] = (k) => e.$emit("after-leave"))
    }, oe({
      default: g(() => [
        _(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          w(d, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: r.onGo
          }, {
            default: g(() => [
              A(m(r.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          _(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (s(), b(p, {
      key: 2,
      open: r.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (k) => r.syncOpen = k),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: g((k) => [
        _(e.$slots, "trigger", Te(Le(k)))
      ]),
      content: g(() => [
        c("div", ar, [
          i.icon || i.title || i.description ? (s(), n("div", nr, [
            i.icon ? (s(), n("span", or, [
              w(f, {
                name: i.icon,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : h("", !0),
            c("div", ur, [
              i.title ? (s(), n("p", cr, m(i.title), 1)) : h("", !0),
              i.description ? (s(), n("p", dr, m(i.description), 1)) : h("", !0)
            ])
          ])) : h("", !0),
          _(e.$slots, "default"),
          r.hasFooterActions && !e.$slots.footer ? (s(), n("div", hr, [
            i.showFooterClose ? (s(), b(d, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: r.onClose
            }, {
              default: g(() => [
                A(m(r.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : h("", !0),
            i.showGo ? (s(), b(d, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: r.onGo
            }, {
              default: g(() => [
                A(m(r.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : h("", !0)
          ])) : _(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (s(), b(te, {
      key: 3,
      to: "body"
    }, [
      w(ie, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (k) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          r.syncOpen ? (s(), n("div", {
            key: 0,
            class: S(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = J((...k) => r.onEscape && r.onEscape(...k), ["esc"]))
          }, [
            i.closeOnBackdrop ? (s(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (...k) => r.onBackdrop && r.onBackdrop(...k))
            })) : h("", !0),
            a.tourHighlightStyle ? (s(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: O(a.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : h("", !0),
            c("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: O(a.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || r.resolvedGoLabel
            }, [
              c("div", pr, [
                c("div", mr, [
                  c("div", gr, [
                    i.icon ? (s(), n("span", br, [
                      w(f, {
                        name: i.icon,
                        type: i.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : h("", !0),
                    c("div", yr, [
                      i.title ? (s(), n("p", vr, m(i.title), 1)) : h("", !0),
                      i.description ? (s(), n("p", _r, m(i.description), 1)) : h("", !0)
                    ])
                  ]),
                  i.showClose ? (s(), n("div", kr, [
                    w(d, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": r.resolvedCloseLabel,
                      onClick: r.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : h("", !0)
                ]),
                e.$slots.default ? (s(), n("div", wr, [
                  _(e.$slots, "default")
                ])) : h("", !0),
                r.hasFooterActions && !e.$slots.footer ? (s(), n("div", Sr, [
                  i.showFooterClose ? (s(), b(d, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onClose
                  }, {
                    default: g(() => [
                      A(m(r.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : h("", !0),
                  i.showGo ? (s(), b(d, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onGo
                  }, {
                    default: g(() => [
                      A(m(r.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : h("", !0)
                ])) : _(e.$slots, "footer", { key: 2 })
              ])
            ], 12, fr)
          ], 34)) : h("", !0)
        ]),
        _: 3
      })
    ])) : h("", !0)
  ], 2)) : h("", !0);
}
const Cr = /* @__PURE__ */ v(sr, [["render", xr]]), Tr = ["solid", "regular", "brands", "light", "duotone", "thin"], Lr = {
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
      validator: (e) => Tr.includes(e)
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
      return e && (i = t.filter((l) => String(l).toLowerCase().includes(e))), i.slice(0, this.maxResults);
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
}, Ar = ["disabled", "aria-expanded", "onClick"], Ir = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, zr = { class: "ui-select-field-suffix" }, Pr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Mr = { class: "ui-icon-picker-panel" }, Vr = { class: "ui-icon-picker-panel__header" }, $r = { class: "ui-icon-picker-panel__title" }, Or = { class: "ui-icon-picker-panel__search" }, Er = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Rr = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Br = ["title", "onClick"];
function Dr(e, t, i, l, a, r) {
  const d = y("ui-icon"), o = y("ui-button"), u = y("ui-input"), f = y("ui-popover");
  return s(), n("div", {
    class: S(r.rootClass)
  }, [
    w(f, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (p) => a.popoverOpen = p),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: k }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: i.disabled,
          "aria-expanded": p ? "true" : "false",
          "aria-haspopup": !0,
          onClick: k
        }, [
          c("span", Ir, [
            w(d, {
              name: r.localIcon || "grid",
              type: i.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          c("span", {
            class: S(["ui-select-value", { "ui-select-value--placeholder": !r.localIcon }])
          }, m(r.localIcon || r.triggerLabel), 3),
          c("span", zr, [
            c("span", Pr, [
              w(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Ar)
      ]),
      content: g(() => [
        c("div", Mr, [
          c("div", Vr, [
            c("span", $r, m(r.popoverTitleLabel), 1),
            r.localIcon ? (s(), b(o, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: I(r.clearIcon, ["stop"])
            }, {
              default: g(() => [
                A(m(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : h("", !0)
          ]),
          c("div", Or, [
            w(u, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => a.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: r.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          r.filteredIcons.length ? (s(), n("div", Rr, [
            (s(!0), n(L, null, P(r.filteredIcons, (p) => (s(), n("button", {
              key: p,
              type: "button",
              class: S(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": r.localIcon === p }]),
              title: p,
              onClick: (k) => r.selectIcon(p)
            }, [
              w(d, {
                name: p,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Br))), 128))
          ])) : (s(), n("div", Er, m(r.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Nr = /* @__PURE__ */ v(Lr, [["render", Dr]]);
function Fr(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  t.length >= 8 && (i += 1), t.length >= 12 && (i += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? i += 1 : /[a-zA-Z]/.test(t) && (i += 0.5), /\d/.test(t) && (i += 1), /[^a-zA-Z0-9]/.test(t) && (i += 1);
  const l = Math.min(4, Math.round(i)), a = ["weak", "fair", "good", "strong"], r = l <= 0 ? "weak" : a[Math.min(l - 1, 3)];
  return {
    score: l,
    percent: l / 4 * 100,
    label: r
  };
}
let Q = 0;
const Hr = ["sm", "md", "lg"], Gr = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Hr.includes(e)
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
    return Q += 1, {
      fallbackId: `ui-password-${Q}`,
      fallbackStrengthId: `ui-password-strength-${Q}`,
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
      return Fr(this.modelValue);
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
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
      return t;
    }
  }
}, Yr = ["aria-label", "aria-pressed", "disabled"], Wr = ["id", "aria-live"];
function Ur(e, t, i, l, a, r) {
  const d = y("ui-icon"), o = y("ui-input"), u = y("ui-progress");
  return s(), n("div", {
    class: S(["ui-password", [e.$attrs.class]])
  }, [
    w(o, T({
      id: r.resolvedId,
      modelValue: r.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (f) => r.innerValue = f),
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
      onFocus: t[2] || (t[2] = (f) => e.$emit("focus", f)),
      onBlur: t[3] || (t[3] = (f) => e.$emit("blur", f))
    }), {
      append: g(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": r.toggleAriaLabel,
          "aria-pressed": a.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: t[0] || (t[0] = (f) => a.visible = !a.visible)
        }, [
          w(d, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Yr)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    r.showStrengthMeter ? (s(), n("div", {
      key: 0,
      id: a.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": r.innerValue ? "polite" : "off"
    }, [
      w(u, {
        type: "bar",
        size: "md",
        value: r.strength.percent,
        variant: r.strengthVariant,
        "aria-valuetext": r.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      r.strength.label !== "empty" ? (s(), n("span", {
        key: 0,
        class: S(["ui-password-strength-label", `ui-password-strength-label--${r.strength.label}`])
      }, m(r.strengthText), 3)) : h("", !0)
    ], 8, Wr)) : h("", !0)
  ], 2);
}
const Kr = /* @__PURE__ */ v(Gr, [["render", Ur]]), jr = ["numeric", "alphanumeric"], qr = {
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
      validator: (e) => jr.includes(e)
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
      const l = t.target.value.split("").map((o) => this.normalizeChar(o)).filter(Boolean);
      if (l.length === 0) {
        const o = [...this.cells];
        o[e] = "", this.emitValue(o);
        return;
      }
      const a = [...this.cells];
      let r = e;
      for (const o of l) {
        if (r >= this.length) break;
        a[r] = o, r += 1;
      }
      this.emitValue(a);
      const d = Math.min(r, this.length - 1);
      this.$nextTick(() => {
        var o, u;
        (o = this.cellEl(d)) == null || o.focus(), (u = this.cellEl(d)) == null || u.select();
      });
    },
    onCellKeydown(e, t) {
      var i, l;
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
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (i = this.cellEl(e - 1)) == null || i.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (l = this.cellEl(e + 1)) == null || l.focus());
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
      const l = Math.min(i.length, this.length) - 1;
      this.$nextTick(() => {
        var r;
        (r = this.cellEl(Math.max(0, l))) == null || r.focus();
      });
    }
  }
}, Zr = ["aria-label"], Qr = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Xr(e, t, i, l, a, r) {
  return s(), n("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    class: S([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (s(!0), n(L, null, P(i.length, (d, o) => (s(), n("input", {
      key: o,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: r.cells[o] ?? "",
      type: i.type === "numeric" ? "tel" : "text",
      inputmode: i.type === "numeric" ? "numeric" : "text",
      pattern: i.type === "numeric" ? "[0-9]*" : void 0,
      disabled: i.disabled,
      readonly: i.readonly,
      autocomplete: o === 0 ? i.autocomplete : "off",
      maxlength: "1",
      "aria-label": r.cellAriaLabel(o),
      onInput: (u) => r.onCellInput(o, u),
      onKeydown: (u) => r.onCellKeydown(o, u),
      onFocus: (u) => r.onCellFocus(o),
      onPaste: t[0] || (t[0] = (...u) => r.onPaste && r.onPaste(...u))
    }, null, 40, Qr))), 128))
  ], 10, Zr);
}
const Jr = /* @__PURE__ */ v(qr, [["render", Xr]]), es = ["ul", "ol", "div"], ts = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => es.includes(e)
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
function is(e, t, i, l, a, r) {
  return s(), b(D(i.tag), T({
    class: r.listClass,
    role: "list"
  }, r.passthroughAttrs), {
    default: g(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const rs = /* @__PURE__ */ v(ts, [["render", is]]), ss = ["solid", "regular", "brands", "light", "duotone", "thin"], ls = {
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
      validator: (e) => ss.includes(e)
    }
  }
}, as = {
  class: "ui-list-item",
  role: "listitem"
}, ns = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, os = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, us = { class: "ui-list-item-content min-w-0 flex-1" };
function cs(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("li", as, [
    i.prefixIcon ? (s(), n("span", ns, [
      w(d, {
        name: i.prefixIcon,
        type: i.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (s(), n("span", os, [
      _(e.$slots, "prefix")
    ])) : h("", !0),
    c("div", us, [
      _(e.$slots, "default")
    ])
  ]);
}
const ds = /* @__PURE__ */ v(ls, [["render", cs]]), hs = ["bar", "circle"], ve = ["sm", "md", "lg"], _e = ["thin", "md"], fs = ["default", "weak", "fair", "good", "strong"], U = { sm: 16, md: 20, lg: 24 }, ps = { sm: 1.5, md: 2, lg: 2 }, ms = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => hs.includes(e)
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
      validator: (e) => fs.includes(e)
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
      const e = this.type === "circle" ? ve.includes(this.size) ? this.size : "sm" : _e.includes(this.size) ? this.size : "md";
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
      return ve.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return _e.includes(this.size) ? this.size : "md";
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
      const e = U[this.circleSizeKey] ?? U.sm, t = ps[this.circleSizeKey] ?? 2, i = (e - t) / 2, l = e / 2, a = 2 * Math.PI * i, r = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: i, center: l, circumference: a, offset: r };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, gs = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], bs = ["width", "height", "viewBox"], ys = ["cx", "cy", "r", "stroke-width"], vs = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], _s = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ks(e, t, i, l, a, r) {
  return s(), n("div", {
    class: S(r.rootClass),
    style: O(r.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : r.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : r.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (s(), n("svg", {
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
      }, null, 8, ys),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke,
        "stroke-dasharray": r.circleMetrics.circumference,
        "stroke-dashoffset": r.circleMetrics.offset
      }, null, 8, vs)
    ], 8, bs)) : (s(), n("div", _s, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: O({ width: `${r.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, gs);
}
const ws = /* @__PURE__ */ v(ms, [["render", ks]]), Ss = ["sm", "md", "lg", "full"], ke = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, xs = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Ss.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-menu",
        ke[this.width] || ke.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Cs = {
  key: 0,
  class: "ui-menu-header"
}, Ts = { class: "ui-menu-body" }, Ls = {
  key: 1,
  class: "ui-menu-footer"
};
function As(e, t, i, l, a, r) {
  return s(), n("nav", T({ class: r.rootClass }, r.passthroughAttrs), [
    e.$slots.header ? (s(), n("div", Cs, [
      _(e.$slots, "header")
    ])) : h("", !0),
    c("div", Ts, [
      _(e.$slots, "default")
    ]),
    e.$slots.footer ? (s(), n("div", Ls, [
      _(e.$slots, "footer")
    ])) : h("", !0)
  ], 16);
}
const Is = /* @__PURE__ */ v(xs, [["render", As]]), zs = {
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
}, Ps = {
  key: 0,
  class: "ui-menu-group-label"
}, Ms = { class: "ui-menu-group-items" };
function Vs(e, t, i, l, a, r) {
  return s(), n("div", T({ class: r.groupClass }, r.passthroughAttrs), [
    i.label ? (s(), n("p", Ps, m(i.label), 1)) : h("", !0),
    c("div", Ms, [
      _(e.$slots, "default")
    ])
  ], 16);
}
const $s = /* @__PURE__ */ v(zs, [["render", Vs]]), Os = {
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
function Es(e, t, i, l, a, r) {
  const d = y("ui-button");
  return s(), b(d, T({
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
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Rs = /* @__PURE__ */ v(Os, [["render", Es]]), Bs = {
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
}, Ds = ["aria-label"];
function Ns(e, t, i, l, a, r) {
  return s(), n("div", T({
    class: r.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, Ds);
}
const Fs = /* @__PURE__ */ v(Bs, [["render", Ns]]), Hs = {
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
      const e = ((t = this.uiSegmentGroup) == null ? void 0 : t.size) || "md";
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
}, Gs = ["aria-checked", "disabled"], Ys = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ws = {
  key: 1,
  class: "ui-segment-label"
}, Us = {
  key: 2,
  class: "sr-only"
}, Ks = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, js = {
  key: 1,
  class: "ui-segment-label"
}, qs = {
  key: 2,
  class: "sr-only"
};
function Zs(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("button", {
    type: "button",
    role: "radio",
    class: S(r.segmentClass),
    "aria-checked": r.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[2] || (t[2] = (...o) => r.select && r.select(...o))
  }, [
    r.hasAffixes ? (s(), n(L, { key: 0 }, [
      r.hasPrepend ? (s(), n("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = I(() => {
        }, ["stop"]))
      }, [
        _(e.$slots, "prepend")
      ])) : h("", !0),
      c("span", {
        class: S(["ui-segment-main", { "ui-segment-main--with-icon": i.icon }])
      }, [
        i.icon ? (s(), n("span", Ys, [
          w(d, {
            name: i.icon,
            size: r.iconSize
          }, null, 8, ["name", "size"])
        ])) : h("", !0),
        r.showLabel ? (s(), n("span", Ws, m(i.label), 1)) : i.label ? (s(), n("span", Us, m(i.label), 1)) : h("", !0)
      ], 2),
      r.hasAppend ? (s(), n("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = I(() => {
        }, ["stop"]))
      }, [
        _(e.$slots, "append")
      ])) : h("", !0)
    ], 64)) : (s(), n(L, { key: 1 }, [
      i.icon ? (s(), n("span", Ks, [
        w(d, {
          name: i.icon,
          size: r.iconSize
        }, null, 8, ["name", "size"])
      ])) : h("", !0),
      r.showLabel ? (s(), n("span", js, m(i.label), 1)) : i.label ? (s(), n("span", qs, m(i.label), 1)) : h("", !0)
    ], 64))
  ], 10, Gs);
}
const Qs = /* @__PURE__ */ v(Hs, [["render", Zs]]), Xs = ["sm", "md", "lg"], Js = ["horizontal", "vertical"], el = {
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
      validator: (e) => Xs.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Js.includes(e)
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
    rootClass() {
      return x(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.iconOnly && "ui-segment-group--icon-only",
        !this.block && this.direction !== "vertical" && "ui-segment-group--inline",
        this.size !== "md" && `ui-segment-group--${this.size}`,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, tl = ["aria-label"];
function il(e, t, i, l, a, r) {
  return s(), n("div", T({
    class: r.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, tl);
}
const rl = /* @__PURE__ */ v(el, [["render", il]]), sl = ["horizontal", "vertical"], ll = ["default", "pills"], al = {
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
      validator: (e) => ll.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => sl.includes(e)
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
}, nl = ["aria-label"], ol = { class: "ui-stepper-pills-track" }, ul = {
  key: 0,
  class: "ui-stepper-pills-label"
}, cl = { class: "flex w-full min-w-0 items-center justify-center" }, dl = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, hl = {
  key: 1,
  class: "tabular-nums"
}, fl = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, pl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, ml = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, gl = { class: "flex flex-col items-center" }, bl = {
  key: 1,
  class: "tabular-nums"
}, yl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, vl = { class: "ui-stepper-title" }, _l = {
  key: 0,
  class: "ui-stepper-description"
};
function kl(e, t, i, l, a, r) {
  const d = y("ui-icon");
  return s(), n("div", T({
    class: r.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, r.passthroughAttrs), [
    i.variant === "pills" ? (s(), n(L, { key: 0 }, [
      c("div", ol, [
        (s(!0), n(L, null, P(r.normalizedSteps, (o, u) => (s(), b(D(i.interactive ? "button" : "span"), T({
          key: u,
          class: ["ui-stepper-pill", r.pillClass(u)],
          role: "listitem",
          "aria-current": u === i.modelValue ? "step" : void 0,
          "aria-label": o.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(u) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (s(), n("p", ul, m(r.pillsLabel), 1)) : h("", !0)
    ], 64)) : i.direction === "horizontal" ? (s(!0), n(L, { key: 1 }, P(r.normalizedSteps, (o, u) => (s(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", cl, [
        u > 0 ? (s(), n("span", {
          key: 0,
          class: S(["ui-stepper-rail ui-stepper-rail--h", r.railBeforeClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", dl)),
        (s(), b(D(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(u)],
          "aria-current": u === i.modelValue ? "step" : void 0,
          "aria-label": o.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(u) : void 0
        }), {
          default: g(() => [
            o.icon ? (s(), b(d, {
              key: 0,
              name: o.icon,
              type: o.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), n("span", hl, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < r.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 2,
          class: S(["ui-stepper-rail ui-stepper-rail--h", r.railAfterClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", fl))
      ]),
      c("p", pl, m(o.title), 1),
      o.description ? (s(), n("p", ml, m(o.description), 1)) : h("", !0)
    ]))), 128)) : (s(!0), n(L, { key: 2 }, P(r.normalizedSteps, (o, u) => (s(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", gl, [
        (s(), b(D(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(u)],
          "aria-current": u === i.modelValue ? "step" : void 0,
          "aria-label": o.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(u) : void 0
        }), {
          default: g(() => [
            o.icon ? (s(), b(d, {
              key: 0,
              name: o.icon,
              type: o.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), n("span", bl, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < r.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 0,
          class: S(["ui-stepper-vrail", r.verticalRailClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : h("", !0)
      ]),
      c("div", yl, [
        c("p", vl, m(o.title), 1),
        o.description ? (s(), n("p", _l, m(o.description), 1)) : h("", !0)
      ])
    ]))), 128))
  ], 16, nl);
}
const wl = /* @__PURE__ */ v(al, [["render", kl]]);
let we = 0;
const Sl = {
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
    return we += 1, { fallbackId: `ui-slider-${we}` };
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
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
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
}, xl = {
  key: 0,
  class: "ui-slider-header"
}, Cl = {
  key: 0,
  class: "ui-form-label"
}, Tl = {
  key: 1,
  class: "ui-slider-value"
}, Ll = { class: "ui-slider-rail" }, Al = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Il = {
  key: 1,
  class: "ui-slider-scale"
}, zl = { key: 0 }, Pl = { key: 1 };
function Ml(e, t, i, l, a, r) {
  const d = y("ui-progress");
  return s(), n("div", {
    class: S(r.rootClass)
  }, [
    i.label || r.hasValue ? (s(), n("div", xl, [
      i.label ? (s(), n("span", Cl, m(i.label), 1)) : h("", !0),
      r.hasValue ? (s(), n("span", Tl, m(i.valueText), 1)) : h("", !0)
    ])) : h("", !0),
    c("div", Ll, [
      w(d, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: r.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", T(r.passthroughAttrs, {
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
        onInput: t[0] || (t[0] = (...o) => r.onNativeInput && r.onNativeInput(...o)),
        onChange: t[1] || (t[1] = (...o) => r.onChange && r.onChange(...o))
      }), null, 16, Al)
    ]),
    i.minLabel || i.maxLabel ? (s(), n("div", Il, [
      i.minLabel ? (s(), n("span", zl, m(i.minLabel), 1)) : h("", !0),
      i.maxLabel ? (s(), n("span", Pl, m(i.maxLabel), 1)) : h("", !0)
    ])) : h("", !0)
  ], 2);
}
const Vl = /* @__PURE__ */ v(Sl, [["render", Ml]]);
let Se = 0;
const $l = {
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
    return Se += 1, { fallbackId: `ui-switch-${Se}` };
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
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
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
}, Ol = ["id", "aria-checked", "disabled", "aria-describedby"];
function El(e, t, i, l, a, r) {
  return s(), n("button", T({
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
    onClick: t[0] || (t[0] = (...d) => r.toggle && r.toggle(...d)),
    onKeydown: t[1] || (t[1] = (...d) => r.onKeydown && r.onKeydown(...d))
  }), [
    c("span", {
      class: S(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      c("span", {
        class: S(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Ol);
}
const Rl = /* @__PURE__ */ v($l, [["render", El]]), Bl = {
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
}, Dl = { class: "ui-table-scroll" };
function Nl(e, t, i, l, a, r) {
  return s(), n("div", Dl, [
    c("table", T({ class: r.rootClass }, r.passthroughAttrs), [
      _(e.$slots, "default")
    ], 16)
  ]);
}
const Fl = /* @__PURE__ */ v(Bl, [["render", Nl]]), Hl = {
  name: "TableBody"
}, Gl = { class: "ui-table-body" };
function Yl(e, t, i, l, a, r) {
  return s(), n("tbody", Gl, [
    _(e.$slots, "default")
  ]);
}
const Wl = /* @__PURE__ */ v(Hl, [["render", Yl]]), Ul = ["left", "center", "right"], Kl = ["title", "secondary", "body"], jl = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Ul.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Kl.includes(e)
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
}, ql = ["colspan"];
function Zl(e, t, i, l, a, r) {
  return s(), n("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 10, ql);
}
const Ql = /* @__PURE__ */ v(jl, [["render", Zl]]), Xl = ["left", "center", "right"], Jl = ["sm", "md", "lg"], ea = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Xl.includes(e)
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
      if (!(this.iconCol || Jl.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function ta(e, t, i, l, a, r) {
  return s(), n("th", {
    class: S(r.rootClass),
    style: O(r.widthStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const ia = /* @__PURE__ */ v(ea, [["render", ta]]), ra = {
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
function sa(e, t, i, l, a, r) {
  return s(), n("thead", {
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 2);
}
const la = /* @__PURE__ */ v(ra, [["render", sa]]), aa = {
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
}, na = { class: "ui-table-pagination" }, oa = { class: "ui-table-pagination-meta" }, ua = { class: "ui-table-pagination-nav" }, ca = { class: "ui-table-pagination-page" };
function da(e, t, i, l, a, r) {
  const d = y("ui-button");
  return s(), n("div", na, [
    c("div", oa, [
      _(e.$slots, "meta", {}, () => [
        A(m(i.metaText), 1)
      ])
    ]),
    c("div", ua, [
      w(d, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !r.canPrev,
        "aria-label": i.prevAriaLabel,
        onClick: t[0] || (t[0] = (o) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", ca, m(i.pageLabel), 1),
      w(d, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !r.canNext,
        "aria-label": i.nextAriaLabel,
        onClick: t[1] || (t[1] = (o) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const ha = /* @__PURE__ */ v(aa, [["render", da]]), fa = ["soft", "strong"], pa = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || fa.includes(e)
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
function ma(e, t, i, l, a, r) {
  return s(), n("tr", {
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 2);
}
const ga = /* @__PURE__ */ v(pa, [["render", ma]]), ba = {
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
}, ya = ["id", "aria-labelledby"];
function va(e, t, i, l, a, r) {
  return Me((s(), n("div", T({
    role: "tabpanel",
    id: r.panelDomId,
    "aria-labelledby": r.triggerDomId,
    class: r.panelClass
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, ya)), [
    [Ve, r.isActive]
  ]);
}
const _a = /* @__PURE__ */ v(ba, [["render", va]]), ka = $e("ui-timepicker"), X = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const wa = {
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
      fallbackId: ka(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : $(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return $(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return $(this, "ui.timePicker.minuteAria", "Minute");
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
    stepMinutes() {
      this.menuOpen && (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      }));
    }
  },
  beforeUnmount() {
    clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer), this.unbindWheelListeners();
  },
  methods: {
    pad2: H,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, i = 0;
      const l = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      l && (t = Math.min(23, Math.max(0, parseInt(l[1], 10))), i = Math.min(59, Math.max(0, parseInt(l[2], 10))));
      const a = this.minuteValues;
      let r = a[0] ?? 0, d = 999;
      for (const o of a) {
        const u = Math.abs(o - i);
        u < d && (d = u, r = o);
      }
      this.draftHour = t, this.draftMinute = r;
    },
    wheelItemHeight(e) {
      if (!e) return X;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return X;
      const i = t.getBoundingClientRect().height;
      return i > 0 ? i : X;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - i) / 2;
      const l = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(l) ? l : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, t) {
      const i = this.wheelItemHeight(e), l = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, r = Math.round((a - l - i / 2) / i);
      return Math.min(t, Math.max(0, r));
    },
    scrollTopForIndex(e, t) {
      const i = this.wheelItemHeight(e), l = this.wheelSpacerTop(e);
      return Math.max(0, l + t * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: i = !1 } = {}) {
      if (!e) return;
      const l = this.scrollTopForIndex(e, t);
      i && typeof e.scrollTo == "function" ? e.scrollTo({ top: l, behavior: "smooth" }) : e.scrollTop = l;
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
      const l = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - l) > 0.5 && (e.scrollTop = l), this.emitDraft();
    }
  }
}, Sa = { class: "min-w-0 flex-1 truncate text-foreground" }, xa = { class: "ui-timepicker-panel w-full p-2" }, Ca = { class: "ui-timepicker-wheels" }, Ta = { class: "ui-timepicker-wheels-row" }, La = ["aria-valuenow", "aria-label"], Aa = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ia = { class: "ui-timepicker-wheel-spacer" }, za = ["onClick"], Pa = ["aria-valuenow", "aria-label"], Ma = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Va = { class: "ui-timepicker-wheel-spacer" }, $a = ["onClick"];
function Oa(e, t, i, l, a, r) {
  const d = y("ui-button"), o = y("ui-popover");
  return s(), n("div", {
    class: S(["ui-timepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(o, {
      open: a.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (u) => a.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: u, toggle: f }) => [
        w(d, {
          type: "button",
          id: r.resolvedId,
          variant: "solid",
          color: "input",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "clock",
          disabled: i.disabled,
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": !0,
          onClick: f
        }, {
          default: g(() => [
            c("span", Sa, m(r.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: g(() => [
        c("div", xa, [
          c("div", Ca, [
            t[2] || (t[2] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", Ta, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": r.hourAriaLabel
              }, [
                c("div", Aa, [
                  c("div", Ia, [
                    (s(!0), n(L, null, P(r.hourOptions, (u) => (s(), n("button", {
                      key: "h-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: S([
                        "ui-timepicker-wheel-item",
                        u === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (f) => r.selectHour(u)
                    }, m(r.pad2(u)), 11, za))), 128))
                  ])
                ], 512)
              ], 8, La),
              t[1] || (t[1] = c("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": r.minuteAriaLabel
              }, [
                c("div", Ma, [
                  c("div", Va, [
                    (s(!0), n(L, null, P(r.minuteValues, (u, f) => (s(), n("button", {
                      key: "m-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: S([
                        "ui-timepicker-wheel-item",
                        u === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => r.selectMinute(f)
                    }, m(r.pad2(u)), 11, $a))), 128))
                  ])
                ], 512)
              ], 8, Pa)
            ]),
            t[3] || (t[3] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[4] || (t[4] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
              "aria-hidden": "true"
            }, null, -1))
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ea = /* @__PURE__ */ v(wa, [["render", Oa]]), Ra = ["square", "video", "auto"], Ba = ["fill", "sm", "md", "lg"], xe = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Da = {
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
      validator: (e) => Ra.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Ba.includes(e)
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
        xe[this.size] || xe.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, l] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = l);
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
}, Na = ["src", "alt"], Fa = ["aria-hidden"], Ha = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Ga = {
  key: 3,
  class: "ui-photo__overflow"
}, Ya = ["aria-label"], Wa = ["aria-label"], Ua = { class: "ui-photo-preview__panel" }, Ka = ["src", "alt"], ja = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function qa(e, t, i, l, a, r) {
  const d = y("ui-icon"), o = y("ui-button");
  return s(), n(L, null, [
    (s(), b(D(r.rootTag), T({
      type: i.interactive ? "button" : void 0,
      class: r.rootClass
    }, r.rootBind, { onClick: r.onClick }), {
      default: g(() => [
        i.src && !a.imageFailed ? (s(), n("img", {
          key: 0,
          src: i.src,
          alt: r.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (u) => a.imageFailed = !0)
        }, null, 40, Na)) : (s(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          w(d, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Fa)),
        i.favorite ? (s(), n("span", Ha, [
          w(d, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : h("", !0),
        i.overflowLabel ? (s(), n("span", Ga, m(i.overflowLabel), 1)) : h("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (s(), b(te, { to: "body" }, [
      w(ie, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (s(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...u) => r.onPreviewKeydown && r.onPreviewKeydown(...u))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[1] || (t[1] = (...u) => r.closePreview && r.closePreview(...u))
            }, null, 8, Wa),
            c("div", Ua, [
              w(o, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (s(), b(o, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: I(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : h("", !0),
              r.activeSrc ? (s(), n("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Ka)) : h("", !0),
              r.showNext ? (s(), b(o, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: I(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : h("", !0),
              r.counterLabel ? (s(), n("p", ja, m(r.counterLabel), 1)) : h("", !0)
            ])
          ], 40, Ya)) : h("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Za = /* @__PURE__ */ v(Da, [["render", qa]]), Qa = ["square", "video", "auto"], Xa = {
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
      validator: (e) => Qa.includes(e)
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
}, Ja = ["data-count"], en = ["aria-label"], tn = ["aria-label"], rn = { class: "ui-photo-preview__panel" }, sn = ["src", "alt"], ln = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function an(e, t, i, l, a, r) {
  const d = y("ui-photo"), o = y("ui-button");
  return s(), n(L, null, [
    c("div", {
      class: S(["ui-photos", r.layoutClass]),
      "data-count": r.displayCount
    }, [
      (s(!0), n(L, null, P(r.visibleItems, (u, f) => (s(), b(d, {
        key: u.key || `${u.src}-${f}`,
        src: u.src,
        alt: u.alt || "",
        favorite: !!u.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": f,
        "overflow-label": f === r.visibleItems.length - 1 && r.overflowCount > 0 ? r.overflowLabel : "",
        "aria-label": u.alt || void 0,
        onOpenPreview: r.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, Ja),
    (s(), b(te, { to: "body" }, [
      w(ie, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (s(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...u) => r.onPreviewKeydown && r.onPreviewKeydown(...u))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[0] || (t[0] = (...u) => r.closePreview && r.closePreview(...u))
            }, null, 8, tn),
            c("div", rn, [
              w(o, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (s(), b(o, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": r.prevLabel,
                onClick: I(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : h("", !0),
              r.activeSrc ? (s(), n("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, sn)) : h("", !0),
              r.showNext ? (s(), b(o, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": r.nextLabel,
                onClick: I(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : h("", !0),
              r.counterLabel ? (s(), n("p", ln, m(r.counterLabel), 1)) : h("", !0)
            ])
          ], 40, en)) : h("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const nn = /* @__PURE__ */ v(Xa, [["render", an]]);
function K(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function fn() {
  return {
    push: F,
    dismiss: Ee,
    clear: Oe,
    info: (e) => F({ ...K(e), variant: "info" }),
    success: (e) => F({ ...K(e), variant: "success" }),
    warning: (e) => F({ ...K(e), variant: "warning" }),
    error: (e) => F({ ...K(e), variant: "error" })
  };
}
function pn(e = !1) {
  return Ce({
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
function mn() {
  return {
    confirm: ui
  };
}
const ee = {
  en: Be,
  tr: Ie
};
function gn(e = "tr") {
  return ee[e] ?? ee.tr;
}
const bn = Ie, on = [
  ["ui-action-card", mt],
  ["ui-action-card-list", vt],
  ["ui-action-group", De],
  ["ui-alert", Ne],
  ["ui-avatar", Lt],
  ["ui-badge", Fe],
  ["ui-button", He],
  ["ui-card", Ge],
  ["ui-checkbox", ri],
  ["ui-checkbox-group", oi],
  ["ui-color-picker", Gt],
  ["ui-currency-input", qt],
  ["ui-confirm-dialog", hi],
  ["ui-date-picker", Ye],
  ["ui-date-range-picker", Li],
  ["ui-dialog", We],
  ["ui-divider", Ae],
  ["ui-dropdown", Pi],
  ["ui-empty", Ue],
  ["ui-field", Ni],
  ["ui-file", Xi],
  ["ui-form-row", Ke],
  ["ui-guidance", Cr],
  ["ui-icon", je],
  ["ui-icon-picker", Nr],
  ["ui-input", qe],
  ["ui-password", Kr],
  ["ui-phone", Ze],
  ["ui-pin", Jr],
  ["ui-list", rs],
  ["ui-list-item", ds],
  ["ui-popover", Qe],
  ["ui-progress", ws],
  ["ui-radio", Xe],
  ["ui-radio-group", Je],
  ["ui-select", et],
  ["ui-menu", Is],
  ["ui-menu-group", $s],
  ["ui-menu-item", Rs],
  ["ui-menu-nav", Fs],
  ["ui-segment", Qs],
  ["ui-segment-group", rl],
  ["ui-skeleton", tt],
  ["ui-slider", Vl],
  ["ui-stepper", wl],
  ["ui-switch", Rl],
  ["ui-table", Fl],
  ["ui-table-body", Wl],
  ["ui-table-cell", Ql],
  ["ui-table-head", ia],
  ["ui-table-header", la],
  ["ui-table-pagination", ha],
  ["ui-table-row", ga],
  ["ui-tag", it],
  ["ui-tab-list", rt],
  ["ui-tab-panel", _a],
  ["ui-tabs", st],
  ["ui-tab-trigger", lt],
  ["ui-time-picker", Ea],
  ["ui-tooltip", at],
  ["ui-toast", nt],
  ["ui-photo", Za],
  ["ui-photos", nn]
];
function un(e, t = {}) {
  var d, o;
  const { i18n: i, locale: l, locales: a, theme: r } = t;
  if (r && Re(r), (d = i == null ? void 0 : i.global) != null && d.mergeLocaleMessage) {
    const u = a ?? (l != null ? [l] : [
      typeof i.global.locale == "string" ? i.global.locale : ((o = i.global.locale) == null ? void 0 : o.value) ?? "tr"
    ]);
    for (const f of u) {
      const p = ee[f];
      p && i.global.mergeLocaleMessage(f, p);
    }
  }
  for (const [u, f] of on)
    e.component(u, f);
}
const yn = {
  install: un
};
export {
  mt as ActionCard,
  vt as ActionCardList,
  De as ActionGroup,
  Ne as Alert,
  Lt as Avatar,
  Fe as Badge,
  He as Button,
  Ge as Card,
  ri as Checkbox,
  oi as CheckboxGroup,
  Gt as ColorPicker,
  hi as ConfirmDialog,
  qt as CurrencyInput,
  Ye as DatePicker,
  Li as DateRangePicker,
  We as Dialog,
  Ae as Divider,
  Pi as Dropdown,
  Ue as Empty,
  Ni as Field,
  Xi as File,
  Ke as FormRow,
  kn as GOOGLE_FONTS_CATALOG,
  Cr as Guidance,
  je as Icon,
  Nr as IconPicker,
  qe as Input,
  rs as List,
  ds as ListItem,
  Is as Menu,
  $s as MenuGroup,
  Rs as MenuItem,
  Fs as MenuNav,
  Kr as Password,
  Ze as Phone,
  Za as Photo,
  nn as Photos,
  Jr as Pin,
  Qe as Popover,
  ws as Progress,
  Xe as Radio,
  Je as RadioGroup,
  Qs as Segment,
  rl as SegmentGroup,
  et as Select,
  tt as Skeleton,
  Vl as Slider,
  wl as Stepper,
  Rl as Switch,
  wn as THEME_CUSTOM_CSS_ID,
  Sn as THEME_PRESETS,
  xn as THEME_PRESET_IDS,
  rt as TabList,
  _a as TabPanel,
  lt as TabTrigger,
  Fl as Table,
  Wl as TableBody,
  Ql as TableCell,
  ia as TableHead,
  la as TableHeader,
  ha as TablePagination,
  ga as TableRow,
  st as Tabs,
  it as Tag,
  Ea as TimePicker,
  nt as Toast,
  at as Tooltip,
  Cn as applyGoogleFontsForTheme,
  Tn as applyThemeCustomCss,
  Re as applyUiTheme,
  Ln as buildGoogleFontsLinkTag,
  An as buildGoogleFontsStylesheetUrl,
  In as buildThemeStyleAttr,
  zn as clearThemeCustomCss,
  Oe as clearToasts,
  Pn as createUiId,
  $e as createUiIdFactory,
  yn as default,
  Mn as deriveBrandColorsFromPrimary,
  Ee as dismissToast,
  hn as formatCurrencyAmount,
  ze as getCurrencySymbol,
  Vn as getThemePreset,
  gn as getUiMessages,
  $n as googleFontSelectOptions,
  On as mergeUiTheme,
  En as pickPassthroughAttrs,
  F as pushToast,
  ui as requestConfirm,
  re as resolveCurrencyCode,
  Rn as resolvePrimaryColor,
  Bn as resolveThemeFontFamilies,
  Dn as resolveThemePreset,
  Nn as resolveThemeVars,
  $ as resolveUiText,
  Yt as sanitizeMoneyInput,
  bn as uiMessagesTr,
  mn as useConfirm,
  pn as useDialog,
  fn as useToast,
  Fn as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
