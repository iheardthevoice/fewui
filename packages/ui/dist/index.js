import { resolveComponent as y, openBlock as s, createElementBlock as a, normalizeClass as S, renderSlot as _, createBlock as b, createCommentVNode as h, createElementVNode as d, toDisplayString as m, normalizeStyle as O, resolveDynamicComponent as D, mergeProps as T, withCtx as g, createVNode as w, withModifiers as I, createTextVNode as A, Fragment as L, renderList as M, withKeys as J, reactive as Le, normalizeProps as Ae, guardReactiveProps as Ie, createSlots as ue, Teleport as ie, Transition as re, withDirectives as $e, vShow as Oe } from "vue";
import { _ as v, y as x, $, e as ze, V as Ee, H as Re, x as Be, K as De, U as F, a0 as Me, s as Ne, L as Fe, A as He, a as Ge, B as Ye, b as We, C as Ue, c as Ke, d as je, E as qe, F as Ze, I as Qe, f as Xe, P as Je, g as et, R as tt, h as it, S as rt, i as st, n as lt, k as nt, m as at, l as ot, p as ut, o as ct } from "./index-DZlWBF9X.js";
import { G as Ta, D as La, T as Aa, j as Ia, q as za, r as Ma, t as Pa, u as Va, v as $a, w as Oa, z as Ea, J as Ra, M as Ba, N as Da, O as Na, Q as Fa, W as Ha, X as Ga, Y as Ya, Z as Wa, a1 as Ua } from "./index-DZlWBF9X.js";
const dt = ["solid", "regular", "brands", "light", "duotone", "thin"], ht = {
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
      validator: (e) => dt.includes(e)
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
}, ft = ["disabled"], pt = { class: "ui-action-card__content" }, mt = { class: "ui-action-card__title" }, gt = {
  key: 0,
  class: "ui-action-card__description"
};
function bt(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("button", {
    type: "button",
    class: S(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (u) => e.$emit("click", u))
  }, [
    _(e.$slots, "leading", {}, () => [
      r.showDefaultLeading ? (s(), b(o, {
        key: 0,
        name: i.icon,
        type: i.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : h("", !0)
    ]),
    d("span", pt, [
      d("span", mt, m(i.title), 1),
      i.description ? (s(), a("span", gt, m(i.description), 1)) : h("", !0)
    ]),
    _(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (s(), b(o, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : h("", !0)
    ])
  ], 10, ft);
}
const yt = /* @__PURE__ */ v(ht, [["render", bt]]), vt = {
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
}, _t = ["aria-label"];
function kt(e, t, i, l, n, r) {
  return s(), a("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: O(r.listStyle)
  }, [
    _(e.$slots, "default")
  ], 12, _t);
}
const wt = /* @__PURE__ */ v(vt, [["render", kt]]), St = ["sm", "md", "lg"], ce = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
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
function xt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return he[t] && (t = he[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Ct(e) {
  var l;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const n = i[0][0] || "", r = i[i.length - 1][0] || "";
    return `${n}${r}`.toLocaleUpperCase("tr-TR");
  }
  return (((l = i[0]) == null ? void 0 : l[0]) || "?").toLocaleUpperCase("tr-TR");
}
const Tt = {
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
      validator: (e) => St.includes(e)
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
        ce[this.size] || ce.md,
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
      return Ct(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? xt(e[0]) : "default";
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
}, Lt = ["src", "alt"], At = ["role", "aria-label", "aria-hidden"];
function It(e, t, i, l, n, r) {
  return s(), b(D(r.rootTag), T({
    type: i.interactive ? "button" : void 0,
    class: r.rootClass,
    style: r.rootStyle
  }, r.rootBind, { onClick: r.onRootClick }), {
    default: g(() => [
      i.src && !n.imageFailed ? (s(), a("img", {
        key: 0,
        src: i.src,
        alt: r.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (o) => n.imageFailed = !0)
      }, null, 40, Lt)) : (s(), a("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, m(r.displayInitials), 9, At))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const zt = /* @__PURE__ */ v(Tt, [["render", It]]), Mt = [
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
], Pt = {
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
      presetColors: Mt
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
}, Vt = ["disabled", "aria-expanded", "onClick"], $t = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ot = { class: "ui-select-field-suffix" }, Et = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Rt = { class: "ui-color-picker-panel" }, Bt = { class: "ui-color-picker-panel__header" }, Dt = { class: "ui-color-picker-panel__title" }, Nt = { class: "ui-color-picker-swatches" }, Ft = ["title", "onClick"], Ht = { class: "ui-color-picker-custom" }, Gt = { class: "ui-color-picker-panel__title" }, Yt = { class: "ui-color-picker-custom__row" };
function Wt(e, t, i, l, n, r) {
  const o = y("ui-icon"), u = y("ui-button"), c = y("ui-input"), f = y("ui-popover");
  return s(), a("div", {
    class: S(r.rootClass)
  }, [
    w(f, {
      open: n.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (p) => n.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: k }) => [
        d("button", {
          type: "button",
          class: "ui-select-field",
          disabled: i.disabled,
          "aria-expanded": p ? "true" : "false",
          "aria-haspopup": !0,
          onClick: k
        }, [
          d("span", $t, [
            r.localColor ? (s(), a("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: O({ backgroundColor: r.localColor })
            }, null, 4)) : (s(), b(o, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          d("span", {
            class: S(["ui-select-value", { "ui-select-value--placeholder": !r.localColor }])
          }, m(r.displayValue), 3),
          d("span", Ot, [
            d("span", Et, [
              w(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Vt)
      ]),
      content: g(() => [
        d("div", Rt, [
          d("div", Bt, [
            d("span", Dt, m(r.popoverTitleLabel), 1),
            r.localColor ? (s(), b(u, {
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
          d("div", Nt, [
            (s(!0), a(L, null, M(n.presetColors, (p) => (s(), a("button", {
              key: p,
              type: "button",
              class: S(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": r.localColor === p }]),
              style: O({ backgroundColor: p }),
              title: p,
              onClick: (k) => r.selectColor(p)
            }, [
              r.localColor === p ? (s(), b(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : h("", !0)
            ], 14, Ft))), 128))
          ]),
          d("div", Ht, [
            d("span", Gt, m(r.customColorLabelText), 1),
            d("div", Yt, [
              w(c, {
                modelValue: r.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => r.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: r.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              d("span", {
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
const Ut = /* @__PURE__ */ v(Pt, [["render", Wt]]), fe = {
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
function se(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in G ? t : "TRY";
  const i = String(e).trim();
  if (fe[i])
    return fe[i];
  const l = i.toUpperCase();
  return G[l] ? l : t in G ? t : "TRY";
}
function Pe(e) {
  var i;
  const t = se(e);
  if (G[t])
    return G[t];
  try {
    const n = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((r) => r.type === "currency");
    return ((i = n == null ? void 0 : n.value) == null ? void 0 : i.trim()) || t;
  } catch {
    return t;
  }
}
function ba(e, t, i = "tr-TR") {
  const l = Number(e) || 0, n = se(t);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: n }).format(l);
  } catch {
    return `${Pe(n)}${l.toFixed(2)}`;
  }
}
function Kt(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const i = t.indexOf(".");
  if (i !== -1) {
    const l = t.slice(0, i), n = t.slice(i + 1).replace(/\./g, "");
    t = `${l}.${n}`;
  }
  return t;
}
let pe = 0;
const jt = ["sm", "md", "lg"], qt = {
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
      validator: (e) => jt.includes(e)
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
    return pe += 1, { fallbackId: `ui-currency-input-${pe}` };
  },
  computed: {
    displaySymbol() {
      return Pe(this.currency);
    },
    resolvedCurrencyCode() {
      return se(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = Kt(e);
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
}, Zt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Qt(e, t, i, l, n, r) {
  const o = y("ui-input");
  return s(), b(o, T({
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
      d("span", Zt, m(r.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Xt = /* @__PURE__ */ v(qt, [["render", Qt]]), Jt = {
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
        const t = e.target.checked, i = this.uiCheckboxGroup.modelValue, l = Array.isArray(i) ? [...i] : [], n = l.findIndex((r) => Object.is(r, this.value));
        t && n === -1 ? l.push(this.value) : !t && n !== -1 && l.splice(n, 1), this.uiCheckboxGroup.$emit("update:modelValue", l);
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
}, ei = ["type", "name", "value", "checked"], ti = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, ii = { class: "ui-checkbox-body" }, ri = {
  key: 0,
  class: "ui-checkbox-label"
}, si = {
  key: 1,
  class: "ui-checkbox-description"
};
function li(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("label", {
    class: S(r.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = J(I((...u) => r.toggle && r.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = J(I((...u) => r.toggle && r.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: r.nativeType,
      name: r.nativeName,
      value: r.groupValueString,
      checked: r.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => r.onNativeChange && r.onNativeChange(...u))
    }, null, 40, ei),
    d("span", ti, [
      r.isChecked ? (s(), b(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : h("", !0)
    ]),
    d("span", ii, [
      e.$slots.label || i.label ? (s(), a("span", ri, [
        _(e.$slots, "label", {}, () => [
          A(m(i.label), 1)
        ])
      ])) : h("", !0),
      i.description ? (s(), a("span", si, m(i.description), 1)) : h("", !0)
    ])
  ], 34);
}
const ni = /* @__PURE__ */ v(Jt, [["render", li]]), ai = ["list", "button", "List", "Button"];
let me = 0;
const oi = {
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
      validator: (e) => ai.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return me += 1, { groupName: `ui-checkbox-group-${me}` };
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
}, ui = ["aria-label"];
function ci(e, t, i, l, n, r) {
  return s(), a("div", {
    class: S(["ui-checkbox-group", `ui-checkbox-group--${r.normalizedVariant}`]),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    _(e.$slots, "default")
  ], 10, ui);
}
const di = /* @__PURE__ */ v(oi, [["render", ci]]), C = Le({
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
function hi(e = {}) {
  return new Promise((t) => {
    C.title = e.title ?? "", C.description = e.description ?? "", C.confirmLabel = e.confirmLabel ?? "", C.cancelLabel = e.cancelLabel ?? "", C.destructive = !!e.destructive, C._resolve = t, C.open = !0;
  });
}
function q(e) {
  const t = C._resolve;
  C.open = !1, C._resolve = null, t && t(!!e);
}
const fi = {
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
function pi(e, t, i, l, n, r) {
  const o = y("ui-button"), u = y("ui-dialog");
  return s(), b(u, {
    open: r.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (c) => r.syncOpen = c),
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
      w(o, {
        color: "secondary",
        rounded: "",
        onClick: r.onCancel
      }, {
        default: g(() => [
          A(m(r.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      w(o, {
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
const mi = /* @__PURE__ */ v(fi, [["render", pi]]);
let ge = 0;
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
  const i = Number(t[1]), l = Number(t[2]) - 1, n = Number(t[3]), r = new Date(i, l, n);
  return r.getFullYear() !== i || r.getMonth() !== l || r.getDate() !== n ? null : r;
}
function R(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function Z(e, t, i) {
  return new Date(e, t, 1).toLocaleString(i, { month: "long" });
}
function be(e, t, i, l) {
  const n = `${e}-${Y(t + 1)}-01`, r = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${Y(t + 1)}-${Y(r)}`;
  if (i && o > i && (o = i), l && n < l && o < l) return null;
  let u = n;
  return l && u < l && (u = l), R(u, o) > 0 ? null : [u, o];
}
const gi = {
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
    var l, n;
    ge += 1;
    const e = ge, t = ((l = this.modelValue) == null ? void 0 : l[0]) || "", i = W(t) || W((n = this.modelValue) == null ? void 0 : n[1]) || /* @__PURE__ */ new Date();
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
      const l = B(i), n = e.getMonth(), r = e.getFullYear(), o = new Date(r, n - 1, 1), u = o.getFullYear(), c = o.getMonth(), f = (k, z) => typeof this.$t == "function" ? this.$t(k, z) : k;
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
            month: Z(r, n, this.locale)
          }),
          range: be(r, n, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: f("ui.dateRangePicker.lastMonth", {
            month: Z(u, c, this.locale)
          }),
          range: be(u, c, this.maxYmd, this.minYmd)
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
        const [n, r, o] = String(l).split("-");
        return `${o}.${r}.${n}`;
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
      const i = new Date(e, t, 1), l = new Date(e, t, 1 - i.getDay()), n = this.previewStart, r = this.previewEnd, o = n && r, u = [];
      for (let c = 0; c < 42; c += 1) {
        const f = new Date(l.getFullYear(), l.getMonth(), l.getDate() + c), p = f.getMonth() === t && f.getFullYear() === e, k = f.getDate(), z = B(f), N = `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}-${t}`, P = B(/* @__PURE__ */ new Date()) === z, E = !!(this.minYmd && z < this.minYmd) || !!(this.maxYmd && z > this.maxYmd);
        let le = !1, ne = !1;
        if (o) {
          const ae = R(n, r) <= 0 ? n : r, oe = R(n, r) <= 0 ? r : n;
          le = R(z, ae) >= 0 && R(z, oe) <= 0, ne = z === ae || z === oe;
        }
        u.push({
          key: N,
          d: k,
          date: f,
          today: P,
          inMonth: p,
          disabled: E,
          inRange: le,
          endpoint: ne
        });
      }
      return u;
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
      let l = this.pickingStart, n = i;
      if (R(n, l) < 0) {
        const r = l;
        l = n, n = r;
      }
      this.pickingStart = l, this.pickingEnd = n, this.$emit("update:modelValue", [l, n]), this.$emit("change", [l, n]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, bi = { class: "min-w-0 flex-1 truncate text-foreground" }, yi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, vi = { class: "ui-daterangepicker-layout" }, _i = ["aria-label"], ki = { class: "ui-daterangepicker-calendars" }, wi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Si = { class: "ui-daterangepicker-month-row" }, xi = { class: "mb-2 flex items-center justify-between gap-2" }, Ci = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ti = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Li = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ai = { class: "ui-datepicker-grid" };
function Ii(e, t, i, l, n, r) {
  const o = y("ui-button"), u = y("ui-popover");
  return s(), a("div", {
    class: S(["ui-daterangepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(u, {
      open: n.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (c) => n.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: f }) => [
        w(o, {
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
          onClick: f
        }, {
          default: g(() => [
            d("span", bi, m(r.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: g(({ close: c }) => [
        d("div", yi, [
          d("div", vi, [
            d("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": r.resolvedQuickAriaLabel
            }, [
              (s(!0), a(L, null, M(r.quickPresets, (f) => (s(), b(o, {
                key: f.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: f.disabled,
                onClick: (p) => r.applyQuick(f, c)
              }, {
                default: g(() => [
                  A(m(f.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, _i),
            d("div", ki, [
              r.rangeHint ? (s(), a("p", wi, m(r.rangeHint), 1)) : h("", !0),
              d("div", Si, [
                (s(!0), a(L, null, M(r.calendarPanes, (f) => (s(), a("section", {
                  key: f.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", xi, [
                    f.showPrev ? (s(), b(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": r.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = I((p) => r.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), a("span", Ci)),
                    d("span", Ti, m(f.title), 1),
                    f.showNext ? (s(), b(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": r.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = I((p) => r.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), a("span", Li))
                  ]),
                  t[3] || (t[3] = d("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
                    d("span", null, "Su"),
                    d("span", null, "Mo"),
                    d("span", null, "Tu"),
                    d("span", null, "We"),
                    d("span", null, "Th"),
                    d("span", null, "Fr"),
                    d("span", null, "Sa")
                  ], -1)),
                  d("div", Ai, [
                    (s(!0), a(L, null, M(f.cells, (p) => (s(), b(o, {
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
                      onClick: (k) => r.pick(p, c)
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
const zi = /* @__PURE__ */ v(gi, [["render", Ii]]), Mi = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Pi = {
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
      validator: (e) => Mi.includes(e)
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
function Vi(e, t, i, l, n, r) {
  const o = y("Divider"), u = y("ui-button"), c = y("ui-popover");
  return s(), b(c, {
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
      _(e.$slots, "trigger", Ae(Ie(f)))
    ]),
    content: g(({ close: f }) => [
      d("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = I(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? _(e.$slots, "menu", {
          key: 0,
          close: f
        }) : (s(!0), a(L, { key: 1 }, M(i.items, (p, k) => (s(), a(L, { key: k }, [
          p.divider ? (s(), b(o, {
            key: 0,
            spacing: "sm"
          })) : (s(), b(u, {
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
const $i = /* @__PURE__ */ v(Pi, [["render", Vi]]), Oi = ["solid", "regular", "brands", "light", "duotone", "thin"], Ei = {
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
      validator: (e) => Oi.includes(e)
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
}, Ri = {
  key: 0,
  class: "ui-field__title-row"
}, Bi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Di = {
  key: 1,
  class: "ui-field__title"
}, Ni = {
  key: 1,
  class: "ui-field__value"
}, Fi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Hi(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("div", T({ class: r.rootClass }, r.passthroughAttrs), [
    i.title || r.showIcon ? (s(), a("div", Ri, [
      r.showIcon ? (s(), a("span", Bi, [
        w(o, {
          name: i.icon,
          type: i.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : h("", !0),
      i.title ? (s(), a("span", Di, m(i.title), 1)) : h("", !0)
    ])) : h("", !0),
    r.hasValue ? (s(), a("div", Ni, [
      _(e.$slots, "default")
    ])) : h("", !0),
    i.subtitle ? (s(), a("p", Fi, m(i.subtitle), 1)) : h("", !0)
  ], 16);
}
const Gi = /* @__PURE__ */ v(Ei, [["render", Hi]]), Yi = ["auto", "file", "folder"], Wi = ["sm", "md", "lg"], Ui = { icon: "folder", color: "text-sky-500" }, Ki = { icon: "file-lines", color: "text-muted-foreground" }, ji = {
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
function j(e) {
  return String(e ?? "").trim();
}
function qi(e) {
  const t = j(e);
  return /[/\\]\s*$/.test(t);
}
function Ve(e) {
  const t = j(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const i = t.split(/[/\\]/);
  return i[i.length - 1] || t;
}
function Zi(e) {
  const t = Ve(e), i = t.lastIndexOf(".");
  return i <= 0 || i === t.length - 1 ? "" : t.slice(i + 1).toLowerCase();
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
}, Qi = {
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
      validator: (e) => Yi.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Wi.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : qi(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = j(this.name);
      return e ? this.basenameOnly ? Ve(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return j(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Ui;
      const e = Zi(this.name);
      return ji[e] || Ki;
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
}, Xi = ["aria-label"], Ji = ["title"];
function er(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("div", {
    class: S(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", r.rootSizeClass]),
    role: "img",
    "aria-label": r.ariaLabel
  }, [
    d("div", {
      class: S(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [r.shellClasses, r.folderShellClass]])
    }, [
      w(o, {
        name: r.resolvedIcon,
        type: r.resolvedIconType,
        size: r.iconSizeToken,
        class: S(r.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    d("span", {
      class: S(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", r.labelClass]),
      "aria-hidden": "true",
      title: r.fullLabel
    }, m(r.displayLabel), 11, Ji)
  ], 10, Xi);
}
const tr = /* @__PURE__ */ v(Qi, [["render", er]]);
function ir(e) {
  const t = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!t.length) return null;
  const i = Math.min(...t.map((o) => o.top)), l = Math.min(...t.map((o) => o.left)), n = Math.max(...t.map((o) => o.right)), r = Math.max(...t.map((o) => o.bottom));
  return {
    top: i,
    left: l,
    right: n,
    bottom: r,
    width: n - l,
    height: r - i,
    x: l,
    y: i,
    toJSON: () => ({})
  };
}
function ee(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function _e(e) {
  const t = ee(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const i = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((n) => n instanceof HTMLElement), l = ir(i.map((n) => n.getBoundingClientRect()));
    if (l) return l;
  }
  return t.getBoundingClientRect();
}
function rr(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const l of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    l instanceof HTMLElement && t.push(l);
  return t;
}
const sr = ["dialog", "popover", "card", "tour"], lr = ["solid", "regular", "brands", "light", "duotone", "thin"], nr = [
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
], ar = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, or = 8, ur = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => sr.includes(e)
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
      validator: (e) => lr.includes(e)
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
      validator: (e) => nr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: or
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => ar.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? ee(e) : typeof e == "string" && e.trim() ? ee(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const l = window.innerWidth, n = window.innerHeight, r = i.getBoundingClientRect(), o = r.width || 320, u = r.height || 180;
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
      const c = _e(t);
      if (!c) return;
      const f = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, c.top - f), k = Math.max(0, c.left - f), z = Math.min(n, c.bottom + f), N = Math.min(l, c.right + f);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${k}px`,
        width: `${Math.max(0, N - k)}px`,
        height: `${Math.max(0, z - p)}px`
      };
      let P = z + V, E = k;
      this.placement.startsWith("top") ? P = p - u - V : this.placement.startsWith("right") ? (P = p, E = N + V) : this.placement.startsWith("left") ? (P = p, E = k - o - V) : this.placement.includes("end") && (E = N - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + u > n - V && (P = p - u - V), P = Math.max(V, Math.min(P, n - u - V)), E = Math.max(V, Math.min(E, l - o - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${P}px`,
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
          for (const i of rr(t))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, cr = { class: "ui-guidance-footer" }, dr = { class: "ui-guidance-popover" }, hr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, fr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, pr = { class: "ui-guidance-popover__text" }, mr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, gr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, br = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, yr = ["aria-label"], vr = { class: "ui-guidance-tour__content" }, _r = { class: "ui-header-lead" }, kr = { class: "ui-header-lead__main" }, wr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Sr = { class: "ui-header-lead__text" }, xr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Cr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Tr = {
  key: 0,
  class: "ui-header-lead__actions"
}, Lr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Ar = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Ir(e, t, i, l, n, r) {
  const o = y("ui-button"), u = y("ui-card"), c = y("ui-dialog"), f = y("ui-icon"), p = y("ui-popover");
  return r.shouldRender ? (s(), a("div", {
    key: 0,
    class: S(r.rootShellClass)
  }, [
    i.mode === "card" ? (s(), b(u, {
      key: 0,
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      border: ""
    }, ue({
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
            d("div", cr, [
              i.showFooterClose ? (s(), b(o, {
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
              i.showGo ? (s(), b(o, {
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
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (s(), b(c, {
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
    }, ue({
      default: g(() => [
        _(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          w(o, {
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
        _(e.$slots, "trigger", Ae(Ie(k)))
      ]),
      content: g(() => [
        d("div", dr, [
          i.icon || i.title || i.description ? (s(), a("div", hr, [
            i.icon ? (s(), a("span", fr, [
              w(f, {
                name: i.icon,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : h("", !0),
            d("div", pr, [
              i.title ? (s(), a("p", mr, m(i.title), 1)) : h("", !0),
              i.description ? (s(), a("p", gr, m(i.description), 1)) : h("", !0)
            ])
          ])) : h("", !0),
          _(e.$slots, "default"),
          r.hasFooterActions && !e.$slots.footer ? (s(), a("div", br, [
            i.showFooterClose ? (s(), b(o, {
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
            i.showGo ? (s(), b(o, {
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
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (s(), b(ie, {
      key: 3,
      to: "body"
    }, [
      w(re, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (k) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          r.syncOpen ? (s(), a("div", {
            key: 0,
            class: S(["ui-guidance-tour", { "ui-guidance-tour--has-target": n.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = J((...k) => r.onEscape && r.onEscape(...k), ["esc"]))
          }, [
            i.closeOnBackdrop ? (s(), a("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (...k) => r.onBackdrop && r.onBackdrop(...k))
            })) : h("", !0),
            n.tourHighlightStyle ? (s(), a("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: O(n.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : h("", !0),
            d("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: O(n.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || r.resolvedGoLabel
            }, [
              d("div", vr, [
                d("div", _r, [
                  d("div", kr, [
                    i.icon ? (s(), a("span", wr, [
                      w(f, {
                        name: i.icon,
                        type: i.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : h("", !0),
                    d("div", Sr, [
                      i.title ? (s(), a("p", xr, m(i.title), 1)) : h("", !0),
                      i.description ? (s(), a("p", Cr, m(i.description), 1)) : h("", !0)
                    ])
                  ]),
                  i.showClose ? (s(), a("div", Tr, [
                    w(o, {
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
                e.$slots.default ? (s(), a("div", Lr, [
                  _(e.$slots, "default")
                ])) : h("", !0),
                r.hasFooterActions && !e.$slots.footer ? (s(), a("div", Ar, [
                  i.showFooterClose ? (s(), b(o, {
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
                  i.showGo ? (s(), b(o, {
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
            ], 12, yr)
          ], 34)) : h("", !0)
        ]),
        _: 3
      })
    ])) : h("", !0)
  ], 2)) : h("", !0);
}
const zr = /* @__PURE__ */ v(ur, [["render", Ir]]), Mr = ["solid", "regular", "brands", "light", "duotone", "thin"], Pr = {
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
      validator: (e) => Mr.includes(e)
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
}, Vr = ["disabled", "aria-expanded", "onClick"], $r = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Or = { class: "ui-select-field-suffix" }, Er = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Rr = { class: "ui-icon-picker-panel" }, Br = { class: "ui-icon-picker-panel__header" }, Dr = { class: "ui-icon-picker-panel__title" }, Nr = { class: "ui-icon-picker-panel__search" }, Fr = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Hr = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Gr = ["title", "onClick"];
function Yr(e, t, i, l, n, r) {
  const o = y("ui-icon"), u = y("ui-button"), c = y("ui-input"), f = y("ui-popover");
  return s(), a("div", {
    class: S(r.rootClass)
  }, [
    w(f, {
      open: n.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (p) => n.popoverOpen = p),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: k }) => [
        d("button", {
          type: "button",
          class: "ui-select-field",
          disabled: i.disabled,
          "aria-expanded": p ? "true" : "false",
          "aria-haspopup": !0,
          onClick: k
        }, [
          d("span", $r, [
            w(o, {
              name: r.localIcon || "grid",
              type: i.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          d("span", {
            class: S(["ui-select-value", { "ui-select-value--placeholder": !r.localIcon }])
          }, m(r.localIcon || r.triggerLabel), 3),
          d("span", Or, [
            d("span", Er, [
              w(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Vr)
      ]),
      content: g(() => [
        d("div", Rr, [
          d("div", Br, [
            d("span", Dr, m(r.popoverTitleLabel), 1),
            r.localIcon ? (s(), b(u, {
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
          d("div", Nr, [
            w(c, {
              modelValue: n.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => n.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: r.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          r.filteredIcons.length ? (s(), a("div", Hr, [
            (s(!0), a(L, null, M(r.filteredIcons, (p) => (s(), a("button", {
              key: p,
              type: "button",
              class: S(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": r.localIcon === p }]),
              title: p,
              onClick: (k) => r.selectIcon(p)
            }, [
              w(o, {
                name: p,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Gr))), 128))
          ])) : (s(), a("div", Fr, m(r.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Wr = /* @__PURE__ */ v(Pr, [["render", Yr]]);
function Ur(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  t.length >= 8 && (i += 1), t.length >= 12 && (i += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? i += 1 : /[a-zA-Z]/.test(t) && (i += 0.5), /\d/.test(t) && (i += 1), /[^a-zA-Z0-9]/.test(t) && (i += 1);
  const l = Math.min(4, Math.round(i)), n = ["weak", "fair", "good", "strong"], r = l <= 0 ? "weak" : n[Math.min(l - 1, 3)];
  return {
    score: l,
    percent: l / 4 * 100,
    label: r
  };
}
let Q = 0;
const Kr = ["sm", "md", "lg"], jr = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Kr.includes(e)
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
      return Ur(this.modelValue);
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
}, qr = ["aria-label", "aria-pressed", "disabled"], Zr = ["id", "aria-live"];
function Qr(e, t, i, l, n, r) {
  const o = y("ui-icon"), u = y("ui-input"), c = y("ui-progress");
  return s(), a("div", {
    class: S(["ui-password", [e.$attrs.class]])
  }, [
    w(u, T({
      id: r.resolvedId,
      modelValue: r.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (f) => r.innerValue = f),
      type: n.visible ? "text" : "password",
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
        d("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": r.toggleAriaLabel,
          "aria-pressed": n.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: t[0] || (t[0] = (f) => n.visible = !n.visible)
        }, [
          w(o, {
            name: n.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, qr)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    r.showStrengthMeter ? (s(), a("div", {
      key: 0,
      id: n.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": r.innerValue ? "polite" : "off"
    }, [
      w(c, {
        type: "bar",
        size: "md",
        value: r.strength.percent,
        variant: r.strengthVariant,
        "aria-valuetext": r.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      r.strength.label !== "empty" ? (s(), a("span", {
        key: 0,
        class: S(["ui-password-strength-label", `ui-password-strength-label--${r.strength.label}`])
      }, m(r.strengthText), 3)) : h("", !0)
    ], 8, Zr)) : h("", !0)
  ], 2);
}
const Xr = /* @__PURE__ */ v(jr, [["render", Qr]]), Jr = ["numeric", "alphanumeric"], es = {
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
      validator: (e) => Jr.includes(e)
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
      const l = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (l.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const n = [...this.cells];
      let r = e;
      for (const u of l) {
        if (r >= this.length) break;
        n[r] = u, r += 1;
      }
      this.emitValue(n);
      const o = Math.min(r, this.length - 1);
      this.$nextTick(() => {
        var u, c;
        (u = this.cellEl(o)) == null || u.focus(), (c = this.cellEl(o)) == null || c.select();
      });
    },
    onCellKeydown(e, t) {
      var i, l;
      if (t.key === "Backspace") {
        t.preventDefault();
        const n = [...this.cells];
        if (n[e]) {
          n[e] = "", this.emitValue(n);
          return;
        }
        e > 0 && (n[e - 1] = "", this.emitValue(n), this.$nextTick(() => {
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
      var n;
      e.preventDefault();
      const t = ((n = e.clipboardData) == null ? void 0 : n.getData("text")) ?? "", i = this.normalizeValue(t);
      if (!i) return;
      this.emitValue(i.split(""));
      const l = Math.min(i.length, this.length) - 1;
      this.$nextTick(() => {
        var r;
        (r = this.cellEl(Math.max(0, l))) == null || r.focus();
      });
    }
  }
}, ts = ["aria-label"], is = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function rs(e, t, i, l, n, r) {
  return s(), a("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    class: S([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (s(!0), a(L, null, M(i.length, (o, u) => (s(), a("input", {
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
    }, null, 40, is))), 128))
  ], 10, ts);
}
const ss = /* @__PURE__ */ v(es, [["render", rs]]), ls = ["ul", "ol", "div"], ns = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => ls.includes(e)
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
function as(e, t, i, l, n, r) {
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
const os = /* @__PURE__ */ v(ns, [["render", as]]), us = ["solid", "regular", "brands", "light", "duotone", "thin"], cs = {
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
      validator: (e) => us.includes(e)
    }
  }
}, ds = {
  class: "ui-list-item",
  role: "listitem"
}, hs = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, fs = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, ps = { class: "ui-list-item-content min-w-0 flex-1" };
function ms(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("li", ds, [
    i.prefixIcon ? (s(), a("span", hs, [
      w(o, {
        name: i.prefixIcon,
        type: i.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (s(), a("span", fs, [
      _(e.$slots, "prefix")
    ])) : h("", !0),
    d("div", ps, [
      _(e.$slots, "default")
    ])
  ]);
}
const gs = /* @__PURE__ */ v(cs, [["render", ms]]), bs = ["bar", "circle"], ke = ["sm", "md", "lg"], we = ["thin", "md"], ys = ["default", "weak", "fair", "good", "strong"], U = { sm: 16, md: 20, lg: 24 }, vs = { sm: 1.5, md: 2, lg: 2 }, _s = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => bs.includes(e)
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
      validator: (e) => ys.includes(e)
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
      const e = U[this.circleSizeKey] ?? U.sm, t = vs[this.circleSizeKey] ?? 2, i = (e - t) / 2, l = e / 2, n = 2 * Math.PI * i, r = n * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: i, center: l, circumference: n, offset: r };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, ks = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], ws = ["width", "height", "viewBox"], Ss = ["cx", "cy", "r", "stroke-width"], xs = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Cs = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Ts(e, t, i, l, n, r) {
  return s(), a("div", {
    class: S(r.rootClass),
    style: O(r.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : r.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : r.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (s(), a("svg", {
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
      }, null, 8, Ss),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke,
        "stroke-dasharray": r.circleMetrics.circumference,
        "stroke-dashoffset": r.circleMetrics.offset
      }, null, 8, xs)
    ], 8, ws)) : (s(), a("div", Cs, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: O({ width: `${r.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, ks);
}
const Ls = /* @__PURE__ */ v(_s, [["render", Ts]]), As = ["sm", "md", "lg", "full"], Se = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Is = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => As.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
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
}, zs = {
  key: 0,
  class: "ui-menu-header"
}, Ms = { class: "ui-menu-body" }, Ps = {
  key: 1,
  class: "ui-menu-footer"
};
function Vs(e, t, i, l, n, r) {
  return s(), a("nav", T({ class: r.rootClass }, r.passthroughAttrs), [
    e.$slots.header ? (s(), a("div", zs, [
      _(e.$slots, "header")
    ])) : h("", !0),
    d("div", Ms, [
      _(e.$slots, "default")
    ]),
    e.$slots.footer ? (s(), a("div", Ps, [
      _(e.$slots, "footer")
    ])) : h("", !0)
  ], 16);
}
const $s = /* @__PURE__ */ v(Is, [["render", Vs]]), Os = {
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
}, Es = {
  key: 0,
  class: "ui-menu-group-label"
}, Rs = { class: "ui-menu-group-items" };
function Bs(e, t, i, l, n, r) {
  return s(), a("div", T({ class: r.groupClass }, r.passthroughAttrs), [
    i.label ? (s(), a("p", Es, m(i.label), 1)) : h("", !0),
    d("div", Rs, [
      _(e.$slots, "default")
    ])
  ], 16);
}
const Ds = /* @__PURE__ */ v(Os, [["render", Bs]]), Ns = {
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
function Fs(e, t, i, l, n, r) {
  const o = y("ui-button");
  return s(), b(o, T({
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
const Hs = /* @__PURE__ */ v(Ns, [["render", Fs]]), Gs = {
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
}, Ys = ["aria-label"];
function Ws(e, t, i, l, n, r) {
  return s(), a("div", T({
    class: r.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, Ys);
}
const Us = /* @__PURE__ */ v(Gs, [["render", Ws]]), Ks = {
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
}, js = ["aria-checked", "disabled"], qs = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Zs = {
  key: 1,
  class: "ui-segment-label"
}, Qs = {
  key: 2,
  class: "sr-only"
}, Xs = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Js = {
  key: 1,
  class: "ui-segment-label"
}, el = {
  key: 2,
  class: "sr-only"
};
function tl(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("button", {
    type: "button",
    role: "radio",
    class: S(r.segmentClass),
    "aria-checked": r.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[2] || (t[2] = (...u) => r.select && r.select(...u))
  }, [
    r.hasAffixes ? (s(), a(L, { key: 0 }, [
      r.hasPrepend ? (s(), a("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = I(() => {
        }, ["stop"]))
      }, [
        _(e.$slots, "prepend")
      ])) : h("", !0),
      d("span", {
        class: S(["ui-segment-main", { "ui-segment-main--with-icon": i.icon }])
      }, [
        i.icon ? (s(), a("span", qs, [
          w(o, {
            name: i.icon,
            size: r.iconSize
          }, null, 8, ["name", "size"])
        ])) : h("", !0),
        r.showLabel ? (s(), a("span", Zs, m(i.label), 1)) : i.label ? (s(), a("span", Qs, m(i.label), 1)) : h("", !0)
      ], 2),
      r.hasAppend ? (s(), a("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = I(() => {
        }, ["stop"]))
      }, [
        _(e.$slots, "append")
      ])) : h("", !0)
    ], 64)) : (s(), a(L, { key: 1 }, [
      i.icon ? (s(), a("span", Xs, [
        w(o, {
          name: i.icon,
          size: r.iconSize
        }, null, 8, ["name", "size"])
      ])) : h("", !0),
      r.showLabel ? (s(), a("span", Js, m(i.label), 1)) : i.label ? (s(), a("span", el, m(i.label), 1)) : h("", !0)
    ], 64))
  ], 10, js);
}
const il = /* @__PURE__ */ v(Ks, [["render", tl]]), rl = ["sm", "md", "lg"], sl = ["horizontal", "vertical"], ll = {
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
      validator: (e) => rl.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => sl.includes(e)
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
      return Ee(this.size, { defaultSize: "md" });
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
}, nl = ["aria-label"];
function al(e, t, i, l, n, r) {
  return s(), a("div", T({
    class: r.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, nl);
}
const ol = /* @__PURE__ */ v(ll, [["render", al]]), ul = ["horizontal", "vertical"], cl = ["default", "pills"], dl = {
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
      validator: (e) => cl.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ul.includes(e)
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
}, hl = ["aria-label"], fl = { class: "ui-stepper-pills-track" }, pl = {
  key: 0,
  class: "ui-stepper-pills-label"
}, ml = { class: "flex w-full min-w-0 items-center justify-center" }, gl = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, bl = {
  key: 1,
  class: "tabular-nums"
}, yl = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, vl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, _l = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, kl = { class: "flex flex-col items-center" }, wl = {
  key: 1,
  class: "tabular-nums"
}, Sl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, xl = { class: "ui-stepper-title" }, Cl = {
  key: 0,
  class: "ui-stepper-description"
};
function Tl(e, t, i, l, n, r) {
  const o = y("ui-icon");
  return s(), a("div", T({
    class: r.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, r.passthroughAttrs), [
    i.variant === "pills" ? (s(), a(L, { key: 0 }, [
      d("div", fl, [
        (s(!0), a(L, null, M(r.normalizedSteps, (u, c) => (s(), b(D(i.interactive ? "button" : "span"), T({
          key: c,
          class: ["ui-stepper-pill", r.pillClass(c)],
          role: "listitem",
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (s(), a("p", pl, m(r.pillsLabel), 1)) : h("", !0)
    ], 64)) : i.direction === "horizontal" ? (s(!0), a(L, { key: 1 }, M(r.normalizedSteps, (u, c) => (s(), a("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", ml, [
        c > 0 ? (s(), a("span", {
          key: 0,
          class: S(["ui-stepper-rail ui-stepper-rail--h", r.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), a("span", gl)),
        (s(), b(D(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (s(), b(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), a("span", bl, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < r.normalizedSteps.length - 1 ? (s(), a("span", {
          key: 2,
          class: S(["ui-stepper-rail ui-stepper-rail--h", r.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), a("span", yl))
      ]),
      d("p", vl, m(u.title), 1),
      u.description ? (s(), a("p", _l, m(u.description), 1)) : h("", !0)
    ]))), 128)) : (s(!0), a(L, { key: 2 }, M(r.normalizedSteps, (u, c) => (s(), a("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", kl, [
        (s(), b(D(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (f) => i.interactive ? r.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (s(), b(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), a("span", wl, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < r.normalizedSteps.length - 1 ? (s(), a("span", {
          key: 0,
          class: S(["ui-stepper-vrail", r.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : h("", !0)
      ]),
      d("div", Sl, [
        d("p", xl, m(u.title), 1),
        u.description ? (s(), a("p", Cl, m(u.description), 1)) : h("", !0)
      ])
    ]))), 128))
  ], 16, hl);
}
const Ll = /* @__PURE__ */ v(dl, [["render", Tl]]);
let xe = 0;
const Al = {
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
}, Il = {
  key: 0,
  class: "ui-slider-header"
}, zl = {
  key: 0,
  class: "ui-form-label"
}, Ml = {
  key: 1,
  class: "ui-slider-value"
}, Pl = { class: "ui-slider-rail" }, Vl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], $l = {
  key: 1,
  class: "ui-slider-scale"
}, Ol = { key: 0 }, El = { key: 1 };
function Rl(e, t, i, l, n, r) {
  const o = y("ui-progress");
  return s(), a("div", {
    class: S(r.rootClass)
  }, [
    i.label || r.hasValue ? (s(), a("div", Il, [
      i.label ? (s(), a("span", zl, m(i.label), 1)) : h("", !0),
      r.hasValue ? (s(), a("span", Ml, m(i.valueText), 1)) : h("", !0)
    ])) : h("", !0),
    d("div", Pl, [
      w(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: r.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      d("input", T(r.passthroughAttrs, {
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
      }), null, 16, Vl)
    ]),
    i.minLabel || i.maxLabel ? (s(), a("div", $l, [
      i.minLabel ? (s(), a("span", Ol, m(i.minLabel), 1)) : h("", !0),
      i.maxLabel ? (s(), a("span", El, m(i.maxLabel), 1)) : h("", !0)
    ])) : h("", !0)
  ], 2);
}
const Bl = /* @__PURE__ */ v(Al, [["render", Rl]]);
let Ce = 0;
const Dl = {
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
}, Nl = ["id", "aria-checked", "disabled", "aria-describedby"];
function Fl(e, t, i, l, n, r) {
  return s(), a("button", T({
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
      class: S(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      d("span", {
        class: S(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Nl);
}
const Hl = /* @__PURE__ */ v(Dl, [["render", Fl]]), Gl = {
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
}, Yl = { class: "ui-table-scroll" };
function Wl(e, t, i, l, n, r) {
  return s(), a("div", Yl, [
    d("table", T({ class: r.rootClass }, r.passthroughAttrs), [
      _(e.$slots, "default")
    ], 16)
  ]);
}
const Ul = /* @__PURE__ */ v(Gl, [["render", Wl]]), Kl = {
  name: "TableBody"
}, jl = { class: "ui-table-body" };
function ql(e, t, i, l, n, r) {
  return s(), a("tbody", jl, [
    _(e.$slots, "default")
  ]);
}
const Zl = /* @__PURE__ */ v(Kl, [["render", ql]]), Ql = ["left", "center", "right"], Xl = ["title", "secondary", "body"], Jl = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Ql.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Xl.includes(e)
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
}, en = ["colspan"];
function tn(e, t, i, l, n, r) {
  return s(), a("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 10, en);
}
const rn = /* @__PURE__ */ v(Jl, [["render", tn]]), sn = ["left", "center", "right"], ln = ["sm", "md", "lg"], nn = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => sn.includes(e)
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
function an(e, t, i, l, n, r) {
  return s(), a("th", {
    class: S(r.rootClass),
    style: O(r.widthStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const on = /* @__PURE__ */ v(nn, [["render", an]]), un = {
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
function cn(e, t, i, l, n, r) {
  return s(), a("thead", {
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 2);
}
const dn = /* @__PURE__ */ v(un, [["render", cn]]), hn = {
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
}, fn = { class: "ui-table-pagination" }, pn = { class: "ui-table-pagination-meta" }, mn = { class: "ui-table-pagination-nav" }, gn = { class: "ui-table-pagination-page" };
function bn(e, t, i, l, n, r) {
  const o = y("ui-button");
  return s(), a("div", fn, [
    d("div", pn, [
      _(e.$slots, "meta", {}, () => [
        A(m(i.metaText), 1)
      ])
    ]),
    d("div", mn, [
      w(o, {
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
      d("div", gn, m(i.pageLabel), 1),
      w(o, {
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
const yn = /* @__PURE__ */ v(hn, [["render", bn]]), vn = ["soft", "strong"], _n = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || vn.includes(e)
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
function kn(e, t, i, l, n, r) {
  return s(), a("tr", {
    class: S(r.rootClass)
  }, [
    _(e.$slots, "default")
  ], 2);
}
const wn = /* @__PURE__ */ v(_n, [["render", kn]]), Sn = {
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
}, xn = ["id", "aria-labelledby"];
function Cn(e, t, i, l, n, r) {
  return $e((s(), a("div", T({
    role: "tabpanel",
    id: r.panelDomId,
    "aria-labelledby": r.triggerDomId,
    class: r.panelClass
  }, r.passthroughAttrs), [
    _(e.$slots, "default")
  ], 16, xn)), [
    [Oe, r.isActive]
  ]);
}
const Tn = /* @__PURE__ */ v(Sn, [["render", Cn]]), Ln = Re("ui-timepicker"), X = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const An = {
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
      const n = this.minuteValues;
      let r = n[0] ?? 0, o = 999;
      for (const u of n) {
        const c = Math.abs(u - i);
        c < o && (o = c, r = u);
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
      const i = this.wheelItemHeight(e), l = this.wheelSpacerTop(e), n = e.scrollTop + e.clientHeight / 2, r = Math.round((n - l - i / 2) / i);
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
}, In = { class: "min-w-0 flex-1 truncate text-foreground" }, zn = { class: "ui-timepicker-panel w-full p-2" }, Mn = { class: "ui-timepicker-wheels" }, Pn = { class: "ui-timepicker-wheels-row" }, Vn = ["aria-valuenow", "aria-label"], $n = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, On = { class: "ui-timepicker-wheel-spacer" }, En = ["onClick"], Rn = ["aria-valuenow", "aria-label"], Bn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Dn = { class: "ui-timepicker-wheel-spacer" }, Nn = ["onClick"];
function Fn(e, t, i, l, n, r) {
  const o = y("ui-button"), u = y("ui-popover");
  return s(), a("div", {
    class: S(["ui-timepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(u, {
      open: n.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (c) => n.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: f }) => [
        w(o, {
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
          onClick: f
        }, {
          default: g(() => [
            d("span", In, m(r.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: g(() => [
        d("div", zn, [
          d("div", Mn, [
            t[2] || (t[2] = d("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", Pn, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": n.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": r.hourAriaLabel
              }, [
                d("div", $n, [
                  d("div", On, [
                    (s(!0), a(L, null, M(r.hourOptions, (c) => (s(), a("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: S([
                        "ui-timepicker-wheel-item",
                        c === n.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (f) => r.selectHour(c)
                    }, m(r.pad2(c)), 11, En))), 128))
                  ])
                ], 512)
              ], 8, Vn),
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
                "aria-label": r.minuteAriaLabel
              }, [
                d("div", Bn, [
                  d("div", Dn, [
                    (s(!0), a(L, null, M(r.minuteValues, (c, f) => (s(), a("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: S([
                        "ui-timepicker-wheel-item",
                        c === n.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => r.selectMinute(f)
                    }, m(r.pad2(c)), 11, Nn))), 128))
                  ])
                ], 512)
              ], 8, Rn)
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
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Hn = /* @__PURE__ */ v(An, [["render", Fn]]), Gn = ["square", "video", "auto"], Yn = ["fill", "sm", "md", "lg"], Te = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Wn = {
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
      validator: (e) => Yn.includes(e)
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
        Te[this.size] || Te.fill,
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
}, Un = ["src", "alt"], Kn = ["aria-hidden"], jn = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, qn = {
  key: 3,
  class: "ui-photo__overflow"
}, Zn = ["aria-label"], Qn = ["aria-label"], Xn = { class: "ui-photo-preview__panel" }, Jn = ["src", "alt"], ea = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ta(e, t, i, l, n, r) {
  const o = y("ui-icon"), u = y("ui-button");
  return s(), a(L, null, [
    (s(), b(D(r.rootTag), T({
      type: i.interactive ? "button" : void 0,
      class: r.rootClass
    }, r.rootBind, { onClick: r.onClick }), {
      default: g(() => [
        i.src && !n.imageFailed ? (s(), a("img", {
          key: 0,
          src: i.src,
          alt: r.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (c) => n.imageFailed = !0)
        }, null, 40, Un)) : (s(), a("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          w(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Kn)),
        i.favorite ? (s(), a("span", jn, [
          w(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : h("", !0),
        i.overflowLabel ? (s(), a("span", qn, m(i.overflowLabel), 1)) : h("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (s(), b(ie, { to: "body" }, [
      w(re, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          n.previewOpen ? (s(), a("div", {
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
            }, null, 8, Qn),
            d("div", Xn, [
              w(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (s(), b(u, {
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
              r.activeSrc ? (s(), a("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Jn)) : h("", !0),
              r.showNext ? (s(), b(u, {
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
              r.counterLabel ? (s(), a("p", ea, m(r.counterLabel), 1)) : h("", !0)
            ])
          ], 40, Zn)) : h("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ia = /* @__PURE__ */ v(Wn, [["render", ta]]), ra = ["square", "video", "auto"], sa = {
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
      validator: (e) => ra.includes(e)
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
}, la = ["data-count"], na = ["aria-label"], aa = ["aria-label"], oa = { class: "ui-photo-preview__panel" }, ua = ["src", "alt"], ca = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function da(e, t, i, l, n, r) {
  const o = y("ui-photo"), u = y("ui-button");
  return s(), a(L, null, [
    d("div", {
      class: S(["ui-photos", r.layoutClass]),
      "data-count": r.displayCount
    }, [
      (s(!0), a(L, null, M(r.visibleItems, (c, f) => (s(), b(o, {
        key: c.key || `${c.src}-${f}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": f,
        "overflow-label": f === r.visibleItems.length - 1 && r.overflowCount > 0 ? r.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: r.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, la),
    (s(), b(ie, { to: "body" }, [
      w(re, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          n.previewOpen ? (s(), a("div", {
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
            }, null, 8, aa),
            d("div", oa, [
              w(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (s(), b(u, {
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
              r.activeSrc ? (s(), a("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, ua)) : h("", !0),
              r.showNext ? (s(), b(u, {
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
              r.counterLabel ? (s(), a("p", ca, m(r.counterLabel), 1)) : h("", !0)
            ])
          ], 40, na)) : h("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ha = /* @__PURE__ */ v(sa, [["render", da]]);
function K(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function ya() {
  return {
    push: F,
    dismiss: De,
    clear: Be,
    info: (e) => F({ ...K(e), variant: "info" }),
    success: (e) => F({ ...K(e), variant: "success" }),
    warning: (e) => F({ ...K(e), variant: "warning" }),
    error: (e) => F({ ...K(e), variant: "error" })
  };
}
function va(e = !1) {
  return Le({
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
function _a() {
  return {
    confirm: hi
  };
}
const te = {
  en: Fe,
  tr: Me
};
function ka(e = "tr") {
  return te[e] ?? te.tr;
}
const wa = Me, fa = [
  ["ui-action-card", yt],
  ["ui-action-card-list", wt],
  ["ui-action-group", He],
  ["ui-alert", Ge],
  ["ui-avatar", zt],
  ["ui-badge", Ye],
  ["ui-button", We],
  ["ui-card", Ue],
  ["ui-checkbox", ni],
  ["ui-checkbox-group", di],
  ["ui-color-picker", Ut],
  ["ui-currency-input", Xt],
  ["ui-confirm-dialog", mi],
  ["ui-date-picker", Ke],
  ["ui-date-range-picker", zi],
  ["ui-dialog", je],
  ["ui-divider", ze],
  ["ui-dropdown", $i],
  ["ui-empty", qe],
  ["ui-field", Gi],
  ["ui-file", tr],
  ["ui-form-row", Ze],
  ["ui-guidance", zr],
  ["ui-icon", Qe],
  ["ui-icon-picker", Wr],
  ["ui-input", Xe],
  ["ui-password", Xr],
  ["ui-phone", Je],
  ["ui-pin", ss],
  ["ui-list", os],
  ["ui-list-item", gs],
  ["ui-popover", et],
  ["ui-progress", Ls],
  ["ui-radio", tt],
  ["ui-radio-group", it],
  ["ui-select", rt],
  ["ui-menu", $s],
  ["ui-menu-group", Ds],
  ["ui-menu-item", Hs],
  ["ui-menu-nav", Us],
  ["ui-segment", il],
  ["ui-segment-group", ol],
  ["ui-skeleton", st],
  ["ui-slider", Bl],
  ["ui-stepper", Ll],
  ["ui-switch", Hl],
  ["ui-table", Ul],
  ["ui-table-body", Zl],
  ["ui-table-cell", rn],
  ["ui-table-head", on],
  ["ui-table-header", dn],
  ["ui-table-pagination", yn],
  ["ui-table-row", wn],
  ["ui-tag", lt],
  ["ui-tab-list", nt],
  ["ui-tab-panel", Tn],
  ["ui-tabs", at],
  ["ui-tab-trigger", ot],
  ["ui-time-picker", Hn],
  ["ui-tooltip", ut],
  ["ui-toast", ct],
  ["ui-photo", ia],
  ["ui-photos", ha]
];
function pa(e, t = {}) {
  var o, u;
  const { i18n: i, locale: l, locales: n, theme: r } = t;
  if (r && Ne(r), (o = i == null ? void 0 : i.global) != null && o.mergeLocaleMessage) {
    const c = n ?? (l != null ? [l] : [
      typeof i.global.locale == "string" ? i.global.locale : ((u = i.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const f of c) {
      const p = te[f];
      p && i.global.mergeLocaleMessage(f, p);
    }
  }
  for (const [c, f] of fa)
    e.component(c, f);
}
const Sa = {
  install: pa
};
export {
  yt as ActionCard,
  wt as ActionCardList,
  He as ActionGroup,
  Ge as Alert,
  zt as Avatar,
  Ye as Badge,
  We as Button,
  Ue as Card,
  ni as Checkbox,
  di as CheckboxGroup,
  Ut as ColorPicker,
  mi as ConfirmDialog,
  Xt as CurrencyInput,
  Ke as DatePicker,
  zi as DateRangePicker,
  je as Dialog,
  ze as Divider,
  $i as Dropdown,
  qe as Empty,
  Gi as Field,
  tr as File,
  Ze as FormRow,
  Ta as GOOGLE_FONTS_CATALOG,
  zr as Guidance,
  Qe as Icon,
  Wr as IconPicker,
  Xe as Input,
  os as List,
  gs as ListItem,
  $s as Menu,
  Ds as MenuGroup,
  Hs as MenuItem,
  Us as MenuNav,
  Xr as Password,
  Je as Phone,
  ia as Photo,
  ha as Photos,
  ss as Pin,
  et as Popover,
  Ls as Progress,
  tt as Radio,
  it as RadioGroup,
  il as Segment,
  ol as SegmentGroup,
  rt as Select,
  st as Skeleton,
  Bl as Slider,
  Ll as Stepper,
  Hl as Switch,
  La as THEME_CUSTOM_CSS_ID,
  Aa as THEME_PRESETS,
  Ia as THEME_PRESET_IDS,
  nt as TabList,
  Tn as TabPanel,
  ot as TabTrigger,
  Ul as Table,
  Zl as TableBody,
  rn as TableCell,
  on as TableHead,
  dn as TableHeader,
  yn as TablePagination,
  wn as TableRow,
  at as Tabs,
  lt as Tag,
  Hn as TimePicker,
  ct as Toast,
  ut as Tooltip,
  za as applyGoogleFontsForTheme,
  Ma as applyThemeCustomCss,
  Ne as applyUiTheme,
  Pa as buildGoogleFontsLinkTag,
  Va as buildGoogleFontsStylesheetUrl,
  $a as buildThemeStyleAttr,
  Oa as clearThemeCustomCss,
  Be as clearToasts,
  Ea as createUiId,
  Re as createUiIdFactory,
  Sa as default,
  Ra as deriveBrandColorsFromPrimary,
  De as dismissToast,
  ba as formatCurrencyAmount,
  Pe as getCurrencySymbol,
  Ba as getThemePreset,
  ka as getUiMessages,
  Da as googleFontSelectOptions,
  Na as mergeUiTheme,
  Fa as pickPassthroughAttrs,
  F as pushToast,
  hi as requestConfirm,
  Ee as resolveControlSize,
  se as resolveCurrencyCode,
  Ha as resolvePrimaryColor,
  Ga as resolveThemeFontFamilies,
  Ya as resolveThemePreset,
  Wa as resolveThemeVars,
  $ as resolveUiText,
  Kt as sanitizeMoneyInput,
  wa as uiMessagesTr,
  _a as useConfirm,
  va as useDialog,
  ya as useToast,
  Ua as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
