import { resolveComponent as _, openBlock as a, createElementBlock as n, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as o, toDisplayString as m, normalizeStyle as O, createVNode as w, mergeProps as L, withCtx as g, withModifiers as z, createTextVNode as C, Fragment as T, renderList as A, withKeys as re, createSlots as j, normalizeProps as Oe, guardReactiveProps as Ee, Teleport as Z, Transition as Q, readonly as Re, reactive as Ce, resolveDynamicComponent as U, withDirectives as Be, vShow as Fe } from "vue";
import { _ as x, Z as S, al as M, ag as De, a6 as Ne, g as Le, a4 as $e, ab as He, a0 as Te, Y as We, a2 as Ye, ac as D, ad as Ge, am as Ie, O as Ue, a3 as je, A as Ke, a as qe, b as Ze, B as Qe, c as Xe, C as Je, d as et, e as tt, f as it, h as rt, E as at, l as lt, I as st, m as nt, P as ot, o as ut, L as ct, n as dt, p as ht, R as ft, q as pt, s as mt, S as gt, r as bt, t as yt, u as vt, z as _t, w as kt, y as wt, x as xt, J as St, H as Ct } from "./index-BYs0S1Xh.js";
import { F as $n, i as Hn, j as Wn, k as Yn, G as Gn, D as Un, T as jn, v as Kn, K as qn, M as Zn, N as Qn, Q as Xn, U as Jn, V as eo, W as to, X as io, $ as ro, a1 as ao, a5 as lo, a7 as so, a8 as no, a9 as oo, aa as uo, ae as co, af as ho, ah as fo, ai as po, aj as mo, ak as go, an as bo } from "./index-BYs0S1Xh.js";
const Lt = ["solid", "regular", "brands", "light", "duotone", "thin"], Tt = {
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
      validator: (e) => Lt.includes(e)
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
}, It = ["disabled"], At = { class: "ui-action-card__content" }, Mt = { class: "ui-action-card__title" }, zt = {
  key: 0,
  class: "ui-action-card__description"
};
function Pt(e, r, t, s, l, i) {
  const c = _("ui-icon");
  return a(), n("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": t.selected }]),
    disabled: t.disabled,
    onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
  }, [
    b(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (a(), y(c, {
        key: 0,
        name: t.icon,
        type: t.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    o("span", At, [
      o("span", Mt, m(t.title), 1),
      t.description ? (a(), n("span", zt, m(t.description), 1)) : f("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      t.showTrailing ? (a(), y(c, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, It);
}
const Vt = /* @__PURE__ */ x(Tt, [["render", Pt]]), Ot = {
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
}, Et = ["aria-label"];
function Rt(e, r, t, s, l, i) {
  return a(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": t.ariaLabel || void 0,
    style: O(i.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Et);
}
const Bt = /* @__PURE__ */ x(Ot, [["render", Rt]]), Ft = {
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
}, Dt = ["data-size"], Nt = { class: "ui-ai-button__surface" };
function $t(e, r, t, s, l, i) {
  const c = _("ui-button");
  return a(), n("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": t.disabled || t.loading
    }]),
    "data-size": i.resolvedSize,
    style: O(i.rootStyle)
  }, [
    r[1] || (r[1] = o("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    o("span", Nt, [
      w(c, L({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: t.size,
        "prefix-icon": t.prefixIcon,
        disabled: t.disabled,
        loading: t.loading,
        fulled: i.isBlock
      }, e.$attrs, {
        onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
      }), {
        default: g(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Dt);
}
const Ht = /* @__PURE__ */ x(Ft, [["render", $t]]), Wt = ["xs", "sm", "md", "lg", "xl"], J = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, Yt = {
  name: "AvatarGroup",
  SIZE_CLASS: J,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Wt.includes(e)
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
        J[this.size] || J.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, Gt = ["aria-label"];
function Ut(e, r, t, s, l, i) {
  return a(), n("div", {
    class: k(i.rootClass),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    b(e.$slots, "default"),
    t.overflowCount > 0 ? (a(), n("span", {
      key: 0,
      class: k(["ui-avatar-group-overflow", e.SIZE_CLASS[t.size] || e.SIZE_CLASS.md])
    }, m(i.overflowText), 3)) : f("", !0)
  ], 10, Gt);
}
const jt = /* @__PURE__ */ x(Yt, [["render", Ut]]), Kt = [
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
      presetColors: Kt
    };
  },
  computed: {
    rootClass() {
      return S(
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
      let r = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(r) && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), /^#[0-9A-Fa-f]{6}$/.test(r) && (this.localColor = r.toUpperCase());
    }
  }
}, Zt = ["disabled", "aria-expanded", "onClick"], Qt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Xt = { class: "ui-select-field-suffix" }, Jt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ei = { class: "ui-color-picker-panel" }, ti = { class: "ui-color-picker-panel__header" }, ii = { class: "ui-color-picker-panel__title" }, ri = { class: "ui-color-picker-swatches" }, ai = ["title", "onClick"], li = { class: "ui-color-picker-custom" }, si = { class: "ui-color-picker-panel__title" }, ni = { class: "ui-color-picker-custom__row" };
function oi(e, r, t, s, l, i) {
  const c = _("ui-icon"), d = _("ui-button"), u = _("ui-input"), h = _("ui-popover");
  return a(), n("div", {
    class: k(i.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: t.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: I }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: I
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", Qt, [
              i.localColor ? (a(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: O({ backgroundColor: i.localColor })
              }, null, 4)) : (a(), y(c, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, m(i.displayValue), 3),
            o("span", Xt, [
              o("span", Jt, [
                w(c, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Zt)
        ])
      ]),
      content: g(() => [
        o("div", ei, [
          o("div", ti, [
            o("span", ii, m(i.popoverTitleLabel), 1),
            i.localColor ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: z(i.clearColor, ["stop"])
            }, {
              default: g(() => [
                C(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", ri, [
            (a(!0), n(T, null, A(l.presetColors, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === p }]),
              style: O({ backgroundColor: p }),
              title: p,
              onClick: (v) => i.selectColor(p)
            }, [
              i.localColor === p ? (a(), y(c, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, ai))), 128))
          ]),
          o("div", li, [
            o("span", si, m(i.customColorLabelText), 1),
            o("div", ni, [
              w(u, {
                modelValue: i.localColor,
                "onUpdate:modelValue": r[0] || (r[0] = (p) => i.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              o("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: O({ backgroundColor: i.localColor || "transparent" }),
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
const ui = /* @__PURE__ */ x(qt, [["render", oi]]), ce = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, $ = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function X(e, r = "TRY") {
  if (e == null || String(e).trim() === "")
    return r in $ ? r : "TRY";
  const t = String(e).trim();
  if (ce[t])
    return ce[t];
  const s = t.toUpperCase();
  return $[s] ? s : r in $ ? r : "TRY";
}
function Ae(e) {
  var t;
  const r = X(e);
  if ($[r])
    return $[r];
  try {
    const l = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: r,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((t = l == null ? void 0 : l.value) == null ? void 0 : t.trim()) || r;
  } catch {
    return r;
  }
}
function Pn(e, r, t = "tr-TR") {
  const s = Number(e) || 0, l = X(r);
  try {
    return new Intl.NumberFormat(t, { style: "currency", currency: l }).format(s);
  } catch {
    return `${Ae(l)}${s.toFixed(2)}`;
  }
}
function Me(e) {
  let r = String(e ?? "").replace(",", ".");
  r = r.replace(/[^\d.]/g, "");
  const t = r.indexOf(".");
  if (t !== -1) {
    const s = r.slice(0, t), l = r.slice(t + 1).replace(/\./g, "");
    r = `${s}.${l}`;
  }
  return r;
}
function ze(e = "tr-TR") {
  var r, t;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((r = s.find((l) => l.type === "group")) == null ? void 0 : r.value) || ".",
      decimal: ((t = s.find((l) => l.type === "decimal")) == null ? void 0 : t.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function ci(e, r = "tr-TR") {
  const { group: t, decimal: s } = ze(r);
  let l = String(e ?? "").trim();
  return l ? (l = l.split(t).join(""), l = l.split(s).join("."), Me(l)) : "";
}
function di(e, r = "tr-TR") {
  const t = Me(e);
  if (!t) return "";
  const { group: s, decimal: l } = ze(r), [i = "", c] = t.split("."), u = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return c === void 0 ? u : `${u}${l}${c}`;
}
let de = 0;
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
    return de += 1, { fallbackId: `ui-currency-input-${de}` };
  },
  computed: {
    displaySymbol() {
      return Ae(this.currency);
    },
    resolvedCurrencyCode() {
      return X(this.currency);
    },
    innerValue: {
      get() {
        return di(this.modelValue, this.locale);
      },
      set(e) {
        const r = ci(e, this.locale);
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
      for (const [t, s] of Object.entries(this.$attrs))
        e.has(t) || (r[t] = s);
      return r;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, pi = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function mi(e, r, t, s, l, i) {
  const c = _("ui-input");
  return a(), y(c, L({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": r[0] || (r[0] = (d) => i.innerValue = d),
    type: "text",
    inputmode: "decimal",
    class: "w-full",
    size: t.size,
    disabled: t.disabled,
    readonly: t.readonly,
    placeholder: t.placeholder,
    name: t.name,
    autocomplete: t.autocomplete,
    "aria-describedby": t.ariaDescribedby
  }, i.passthroughAttrs, {
    onFocus: r[1] || (r[1] = (d) => e.$emit("focus", d)),
    onBlur: i.onBlur
  }), {
    prepend: g(() => [
      o("span", pi, m(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Pe = /* @__PURE__ */ x(fi, [["render", mi]]), gi = {
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
        const r = e.target.checked, t = this.uiCheckboxGroup.modelValue, s = Array.isArray(t) ? [...t] : [], l = s.findIndex((i) => Object.is(i, this.value));
        r && l === -1 ? s.push(this.value) : !r && l !== -1 && s.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, r = Array.isArray(e) ? [...e] : [], t = r.findIndex((s) => Object.is(s, this.value));
        t === -1 ? r.push(this.value) : r.splice(t, 1), this.uiCheckboxGroup.$emit("update:modelValue", r);
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
function wi(e, r, t, s, l, i) {
  const c = _("ui-icon");
  return a(), n("label", {
    class: k(i.checkboxClasses),
    onKeydown: [
      r[1] || (r[1] = re(z((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      r[2] || (r[2] = re(z((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: r[0] || (r[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, bi),
    o("span", yi, [
      i.isChecked ? (a(), y(c, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    o("span", vi, [
      e.$slots.label || t.label ? (a(), n("span", _i, [
        b(e.$slots, "label", {}, () => [
          C(m(t.label), 1)
        ])
      ])) : f("", !0),
      t.description ? (a(), n("span", ki, m(t.description), 1)) : f("", !0)
    ])
  ], 34);
}
const xi = /* @__PURE__ */ x(gi, [["render", wi]]), Si = ["list", "button", "List", "Button"];
let he = 0;
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
      validator: (e) => Si.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return he += 1, { groupName: `ui-checkbox-group-${he}` };
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
function Ti(e, r, t, s, l, i) {
  return a(), n("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, Li);
}
const Ii = /* @__PURE__ */ x(Ci, [["render", Ti]]);
let fe = 0;
function H(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${H(e.getMonth() + 1)}-${H(e.getDate())}`;
}
function W(e) {
  if (e == null || e === "") return null;
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return null;
  const t = Number(r[1]), s = Number(r[2]) - 1, l = Number(r[3]), i = new Date(t, s, l);
  return i.getFullYear() !== t || i.getMonth() !== s || i.getDate() !== l ? null : i;
}
function R(e, r) {
  return e === r ? 0 : e < r ? -1 : 1;
}
function ee(e, r, t) {
  return new Date(e, r, 1).toLocaleString(t, { month: "long" });
}
function pe(e, r, t, s) {
  const l = `${e}-${H(r + 1)}-01`, i = new Date(e, r + 1, 0).getDate();
  let c = `${e}-${H(r + 1)}-${H(i)}`;
  if (t && c > t && (c = t), s && l < s && c < s) return null;
  let d = l;
  return s && d < s && (d = s), R(d, c) > 0 ? null : [d, c];
}
const Ai = {
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
    var s, l;
    fe += 1;
    const e = fe, r = ((s = this.modelValue) == null ? void 0 : s[0]) || "", t = W(r) || W((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-daterangepicker-${e}`,
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth(),
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
      return De((e = this.$i18n) == null ? void 0 : e.locale);
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
        return R(e, r) <= 0 ? r : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), r = B(e), t = new Date(e);
      t.setDate(t.getDate() - 1);
      const s = B(t), l = e.getMonth(), i = e.getFullYear(), c = new Date(i, l - 1, 1), d = c.getFullYear(), u = c.getMonth(), h = (v, I) => typeof this.$t == "function" ? this.$t(v, I) : v;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [r, r]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: ee(i, l, this.locale)
          }),
          range: pe(i, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: ee(d, u, this.locale)
          }),
          range: pe(d, u, this.maxYmd, this.minYmd)
        }
      ].map((v) => ({
        ...v,
        disabled: !v.range || this.isRangeDisabled(v.range[0], v.range[1])
      }));
    },
    calendarPanes() {
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
      return [e, r].map((t) => ({
        ...t,
        title: ee(t.year, t.month, this.locale),
        cells: this.buildCellsForMonth(t.year, t.month)
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
    formatDisplay(e, r) {
      const t = (s) => s ? Ne(s, this.locale) || s : "…";
      return !e && !r ? this.resolvedPlaceholder : e === r || !r ? t(e || r) : `${t(e)} – ${t(r)}`;
    },
    shiftMonth(e) {
      const r = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth();
    },
    isRangeDisabled(e, r) {
      return !!(!e || !r || this.minYmd && r < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, r) {
      const t = new Date(e, r, 1), s = new Date(e, r, 1 - t.getDay()), l = this.previewStart, i = this.previewEnd, c = l && i, d = [];
      for (let u = 0; u < 42; u += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + u), p = h.getMonth() === r && h.getFullYear() === e, v = h.getDate(), I = B(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${r}`, P = B(/* @__PURE__ */ new Date()) === I, E = !!(this.minYmd && I < this.minYmd) || !!(this.maxYmd && I > this.maxYmd);
        let se = !1, ne = !1;
        if (c) {
          const oe = R(l, i) <= 0 ? l : i, ue = R(l, i) <= 0 ? i : l;
          se = R(I, oe) >= 0 && R(I, ue) <= 0, ne = I === oe || I === ue;
        }
        d.push({
          key: F,
          d: v,
          date: h,
          today: P,
          inMonth: p,
          disabled: E,
          inRange: se,
          endpoint: ne
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, r) {
      if (e.disabled || !e.range) return;
      const [t, s] = e.range;
      this.pickingStart = t, this.pickingEnd = s, this.$emit("update:modelValue", [t, s]), this.$emit("change", [t, s]), r();
    },
    pick(e, r) {
      if (!e.date || e.disabled) return;
      const t = B(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = t, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, l = t;
      if (R(l, s) < 0) {
        const i = s;
        s = l, l = i;
      }
      this.pickingStart = s, this.pickingEnd = l, this.$emit("update:modelValue", [s, l]), this.$emit("change", [s, l]), r();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Mi = { class: "min-w-0 flex-1 truncate text-foreground" }, zi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Pi = { class: "ui-daterangepicker-layout" }, Vi = ["aria-label"], Oi = { class: "ui-daterangepicker-calendars" }, Ei = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Ri = { class: "ui-daterangepicker-month-row" }, Bi = { class: "mb-2 flex items-center justify-between gap-2" }, Fi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Di = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Ni = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, $i = { class: "ui-datepicker-grid" };
function Hi(e, r, t, s, l, i) {
  const c = _("ui-button"), d = _("ui-popover");
  return a(), n("div", {
    class: k(["ui-daterangepicker", t.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: l.menuOpen,
      "onUpdate:open": r[2] || (r[2] = (u) => l.menuOpen = u),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: t.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: p }) => [
        b(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: p
        }, () => [
          w(c, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: t.disabled,
            "aria-expanded": u ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", Mi, m(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: u }) => [
        o("div", zi, [
          o("div", Pi, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (a(!0), n(T, null, A(i.quickPresets, (h) => (a(), y(c, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (p) => i.applyQuick(h, u)
              }, {
                default: g(() => [
                  C(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Vi),
            o("div", Oi, [
              i.rangeHint ? (a(), n("p", Ei, m(i.rangeHint), 1)) : f("", !0),
              o("div", Ri, [
                (a(!0), n(T, null, A(i.calendarPanes, (h) => (a(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", Bi, [
                    h.showPrev ? (a(), y(c, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: r[0] || (r[0] = z((p) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", Fi)),
                    o("span", Di, m(h.title), 1),
                    h.showNext ? (a(), y(c, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: r[1] || (r[1] = z((p) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", Ni))
                  ]),
                  r[3] || (r[3] = o("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    o("span", null, "Su"),
                    o("span", null, "Mo"),
                    o("span", null, "Tu"),
                    o("span", null, "We"),
                    o("span", null, "Th"),
                    o("span", null, "Fr"),
                    o("span", null, "Sa")
                  ], -1)),
                  o("div", $i, [
                    (a(!0), n(T, null, A(h.cells, (p) => (a(), y(c, {
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
                      onMouseenter: (v) => i.onCellHover(p),
                      onClick: (v) => i.pick(p, u)
                    }, {
                      default: g(() => [
                        C(m(p.d), 1)
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
const Wi = /* @__PURE__ */ x(Ai, [["render", Hi]]), Yi = ["solid", "regular", "brands", "light", "duotone", "thin"], Gi = {
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
      validator: (e) => Yi.includes(e)
    }
  },
  computed: {
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
    rootClass() {
      return S("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, Ui = {
  key: 0,
  class: "ui-field__title-row"
}, ji = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Ki = {
  key: 1,
  class: "ui-field__title"
}, qi = {
  key: 1,
  class: "ui-field__value"
}, Zi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Qi(e, r, t, s, l, i) {
  const c = _("ui-icon");
  return a(), n("div", L({ class: i.rootClass }, i.passthroughAttrs), [
    t.title || i.showIcon ? (a(), n("div", Ui, [
      i.showIcon ? (a(), n("span", ji, [
        w(c, {
          name: t.icon,
          type: t.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      t.title ? (a(), n("span", Ki, m(t.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (a(), n("div", qi, [
      b(e.$slots, "default")
    ])) : f("", !0),
    t.subtitle ? (a(), n("p", Zi, m(t.subtitle), 1)) : f("", !0)
  ], 16);
}
const Xi = /* @__PURE__ */ x(Gi, [["render", Qi]]), Ji = ["popover", "dialog"], er = ["sm", "md", "lg"], tr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], ir = {
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
      validator: (e) => Ji.includes(e)
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
      validator: (e) => er.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => tr.includes(e)
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
    onTriggerClick(e, r) {
      typeof r == "function" ? r() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, rr = { class: "ui-field-action-header" }, ar = { class: "ui-field-action-header__text" }, lr = {
  key: 0,
  class: "ui-field-action-header__title"
}, sr = {
  key: 1,
  class: "ui-field-action-header__description"
}, nr = { class: "ui-field-action-body" }, or = { class: "ui-field-action-body" }, ur = { class: "ui-field-action-footer" };
function cr(e, r, t, s, l, i) {
  const c = _("ui-button"), d = _("ui-popover"), u = _("ui-dialog");
  return a(), n("div", {
    class: k([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      t.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (a(), y(d, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": r[0] || (r[0] = (h) => i.resolvedOpen = h),
      placement: t.placement,
      width: t.popoverWidth,
      disabled: t.disabled,
      "mobile-centered": t.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: p }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue
        }, () => [
          t.iconOnly ? (a(), y(c, {
            key: 0,
            type: "button",
            variant: i.triggerVariant,
            color: i.triggerColor,
            size: t.size,
            rounded: "",
            cubed: "",
            "prefix-icon": t.prefixIcon,
            disabled: t.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": i.triggerAriaLabel,
            onClick: (v) => i.onTriggerClick(v, p)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), y(c, {
            key: 1,
            type: "button",
            variant: i.triggerVariant,
            color: i.triggerColor,
            size: t.size,
            rounded: "",
            "prefix-icon": t.prefixIcon,
            "suffix-icon": t.suffixIcon,
            disabled: t.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": i.triggerAriaLabel,
            onClick: (v) => i.onTriggerClick(v, p)
          }, {
            default: g(() => [
              C(m(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        o("div", nr, [
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
            o("div", rr, [
              o("div", ar, [
                t.title ? (a(), n("p", lr, m(t.title), 1)) : f("", !0),
                t.description ? (a(), n("p", sr, m(t.description), 1)) : f("", !0)
              ]),
              t.clearable && i.hasValue ? (a(), y(c, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": i.resolvedClearLabel,
                onClick: (p) => i.onClear(h)
              }, {
                default: g(() => [
                  C(m(i.resolvedClearLabel), 1)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), n(T, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue
      }, () => [
        t.iconOnly ? (a(), y(c, {
          key: 0,
          type: "button",
          variant: i.triggerVariant,
          color: i.triggerColor,
          size: t.size,
          rounded: "",
          cubed: "",
          "prefix-icon": t.prefixIcon,
          disabled: t.disabled,
          "aria-expanded": i.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": i.triggerAriaLabel,
          onClick: r[1] || (r[1] = (h) => i.onTriggerClick(h, i.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), y(c, {
          key: 1,
          type: "button",
          variant: i.triggerVariant,
          color: i.triggerColor,
          size: t.size,
          rounded: "",
          "prefix-icon": t.prefixIcon,
          "suffix-icon": t.suffixIcon,
          disabled: t.disabled,
          "aria-expanded": i.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": i.triggerAriaLabel,
          onClick: r[2] || (r[2] = (h) => i.onTriggerClick(h, i.toggle))
        }, {
          default: g(() => [
            C(m(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(u, {
        open: i.resolvedOpen,
        "onUpdate:open": r[4] || (r[4] = (h) => i.resolvedOpen = h),
        title: t.title,
        description: t.description,
        icon: t.dialogIcon,
        "max-width": t.maxWidth,
        "close-on-backdrop": t.closeOnBackdrop,
        "close-on-escape": t.closeOnEscape
      }, j({
        default: g(() => [
          o("div", or, [
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
              o("div", ur, [
                t.clearable && i.hasValue ? (a(), y(c, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: r[3] || (r[3] = (h) => i.onClear(i.close))
                }, {
                  default: g(() => [
                    C(m(i.resolvedClearLabel), 1)
                  ]),
                  _: 1
                })) : f("", !0),
                w(c, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: g(() => [
                    C(m(i.resolvedDoneLabel), 1)
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
const dr = /* @__PURE__ */ x(ir, [["render", cr]]), hr = ["auto", "file", "folder"], fr = ["sm", "md", "lg"], pr = { icon: "folder", color: "text-sky-500" }, mr = { icon: "file-lines", color: "text-muted-foreground" }, gr = {
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
}, me = {
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
function K(e) {
  return String(e ?? "").trim();
}
function br(e) {
  const r = K(e);
  return /[/\\]\s*$/.test(r);
}
function Ve(e) {
  const r = K(e).replace(/[/\\]+$/, "");
  if (!r) return "";
  const t = r.split(/[/\\]/);
  return t[t.length - 1] || r;
}
function yr(e) {
  const r = Ve(e), t = r.lastIndexOf(".");
  return t <= 0 || t === r.length - 1 ? "" : r.slice(t + 1).toLowerCase();
}
const ge = {
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
}, vr = {
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
      validator: (e) => hr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => fr.includes(e)
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
      return me[this.size] || me.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : br(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = K(this.name);
      return e ? this.basenameOnly ? Ve(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return K(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return pr;
      const e = yr(this.name);
      return gr[e] || mr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? ge[this.color] !== void 0 ? ge[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, _r = ["aria-label"], kr = ["title"];
function wr(e, r, t, s, l, i) {
  const c = _("ui-icon");
  return a(), n("div", {
    class: k(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    o("div", {
      class: k(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      w(c, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: k(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    o("span", {
      class: k(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, m(i.displayLabel), 11, kr)
  ], 10, _r);
}
const xr = /* @__PURE__ */ x(vr, [["render", wr]]);
function Sr(e) {
  const r = e.filter((c) => c && (c.width > 0 || c.height > 0));
  if (!r.length) return null;
  const t = Math.min(...r.map((c) => c.top)), s = Math.min(...r.map((c) => c.left)), l = Math.max(...r.map((c) => c.right)), i = Math.max(...r.map((c) => c.bottom));
  return {
    top: t,
    left: s,
    right: l,
    bottom: i,
    width: l - s,
    height: i - t,
    x: s,
    y: t,
    toJSON: () => ({})
  };
}
function ae(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const r = e.closest(".ui-form-row");
  return r instanceof HTMLElement ? r : e;
}
function be(e) {
  const r = ae(e);
  if (!r) return null;
  if (r.classList.contains("ui-form-row")) {
    const t = [
      r.querySelector(".ui-form-row-text"),
      r.querySelector(".ui-form-row-control")
    ].filter((l) => l instanceof HTMLElement), s = Sr(t.map((l) => l.getBoundingClientRect()));
    if (s) return s;
  }
  return r.getBoundingClientRect();
}
function Cr(e) {
  var t;
  if (!((t = e == null ? void 0 : e.classList) != null && t.contains("ui-form-row")))
    return [e];
  const r = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && r.push(s);
  return r;
}
const Lr = ["dialog", "popover", "card", "tour"], Tr = ["solid", "regular", "brands", "light", "duotone", "thin"], Ir = [
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
], Ar = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, Mr = 8, zr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Lr.includes(e)
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
      validator: (e) => Tr.includes(e)
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
      validator: (e) => Ir.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Mr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Ar.includes(e)
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
      const r = this.resolveTourTarget(), t = this.$refs.tourPanelRef;
      if (!t) return;
      const s = window.innerWidth, l = window.innerHeight, i = t.getBoundingClientRect(), c = i.width || 320, d = i.height || 180;
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
      const u = be(r);
      if (!u) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, u.top - h), v = Math.max(0, u.left - h), I = Math.min(l, u.bottom + h), F = Math.min(s, u.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${v}px`,
        width: `${Math.max(0, F - v)}px`,
        height: `${Math.max(0, I - p)}px`
      };
      let P = I + V, E = v;
      this.placement.startsWith("top") ? P = p - d - V : this.placement.startsWith("right") ? (P = p, E = F + V) : this.placement.startsWith("left") ? (P = p, E = v - c - V) : this.placement.includes("end") && (E = F - c), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + d > l - V && (P = p - d - V), P = Math.max(V, Math.min(P, l - d - V)), E = Math.max(V, Math.min(E, s - c - V)), this.tourPanelStyle = {
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
        const r = be(e);
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
          for (const t of Cr(r))
            this.tourResizeObserver.observe(t);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Pr = { class: "ui-guidance-footer" }, Vr = { class: "ui-guidance-popover" }, Or = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Er = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Rr = { class: "ui-guidance-popover__text" }, Br = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Fr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Dr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Nr = ["aria-label"], $r = { class: "ui-guidance-tour__content" }, Hr = { class: "ui-header-lead" }, Wr = { class: "ui-header-lead__main" }, Yr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Gr = { class: "ui-header-lead__text" }, Ur = {
  key: 0,
  class: "ui-guidance-tour__title"
}, jr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Kr = {
  key: 0,
  class: "ui-header-lead__actions"
}, qr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Zr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Qr(e, r, t, s, l, i) {
  const c = _("ui-button"), d = _("ui-card"), u = _("ui-dialog"), h = _("ui-icon"), p = _("ui-popover");
  return i.shouldRender ? (a(), n("div", {
    key: 0,
    class: k(i.rootShellClass)
  }, [
    t.mode === "card" ? (a(), y(d, {
      key: 0,
      icon: t.icon,
      "icon-type": t.iconType,
      title: t.title,
      description: t.description,
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
            o("div", Pr, [
              t.showFooterClose ? (a(), y(c, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: g(() => [
                  C(m(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              t.showGo ? (a(), y(c, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: g(() => [
                  C(m(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : t.mode === "dialog" ? (a(), y(u, {
      key: 1,
      open: i.syncOpen,
      "onUpdate:open": r[0] || (r[0] = (v) => i.syncOpen = v),
      icon: t.icon,
      "icon-type": t.iconType,
      title: t.title,
      description: t.description,
      "max-width": t.maxWidth,
      "close-on-backdrop": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape,
      "show-close": t.showClose,
      onAfterLeave: r[1] || (r[1] = (v) => e.$emit("after-leave"))
    }, j({
      default: g(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      t.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          w(c, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: g(() => [
              C(m(i.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : t.mode === "popover" ? (a(), y(p, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": r[2] || (r[2] = (v) => i.syncOpen = v),
      placement: t.placement,
      width: t.popoverWidth,
      "close-on-outside-click": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape
    }, {
      trigger: g((v) => [
        b(e.$slots, "trigger", Oe(Ee(v)))
      ]),
      content: g(() => [
        o("div", Vr, [
          t.icon || t.title || t.description ? (a(), n("div", Or, [
            t.icon ? (a(), n("span", Er, [
              w(h, {
                name: t.icon,
                type: t.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            o("div", Rr, [
              t.title ? (a(), n("p", Br, m(t.title), 1)) : f("", !0),
              t.description ? (a(), n("p", Fr, m(t.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (a(), n("div", Dr, [
            t.showFooterClose ? (a(), y(c, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: g(() => [
                C(m(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            t.showGo ? (a(), y(c, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: g(() => [
                C(m(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : t.mode === "tour" ? (a(), y(Z, {
      key: 3,
      to: "body"
    }, [
      w(Q, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: r[5] || (r[5] = (v) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          i.syncOpen ? (a(), n("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": l.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: r[4] || (r[4] = re((...v) => i.onEscape && i.onEscape(...v), ["esc"]))
          }, [
            t.closeOnBackdrop ? (a(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: r[3] || (r[3] = (...v) => i.onBackdrop && i.onBackdrop(...v))
            })) : f("", !0),
            l.tourHighlightStyle ? (a(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: O(l.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            o("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: O(l.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": t.title || i.resolvedGoLabel
            }, [
              o("div", $r, [
                o("div", Hr, [
                  o("div", Wr, [
                    t.icon ? (a(), n("span", Yr, [
                      w(h, {
                        name: t.icon,
                        type: t.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    o("div", Gr, [
                      t.title ? (a(), n("p", Ur, m(t.title), 1)) : f("", !0),
                      t.description ? (a(), n("p", jr, m(t.description), 1)) : f("", !0)
                    ])
                  ]),
                  t.showClose ? (a(), n("div", Kr, [
                    w(c, {
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
                e.$slots.default ? (a(), n("div", qr, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (a(), n("div", Zr, [
                  t.showFooterClose ? (a(), y(c, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: g(() => [
                      C(m(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  t.showGo ? (a(), y(c, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: g(() => [
                      C(m(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Nr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const Xr = /* @__PURE__ */ x(zr, [["render", Qr]]), Jr = ["solid", "regular", "brands", "light", "duotone", "thin"], ea = {
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
      validator: (e) => Jr.includes(e)
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
    /** 0 veya negatif = limit yok (tüm ikonlar). */
    maxResults: {
      type: Number,
      default: 0
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
      return S(
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), r = Array.isArray(this.icons) ? this.icons : [];
      let t = r;
      e && (t = r.filter((l) => String(l).toLowerCase().includes(e)));
      const s = Number(this.maxResults);
      return Number.isFinite(s) && s > 0 ? t.slice(0, s) : t;
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
}, ta = ["disabled", "aria-expanded", "onClick"], ia = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ra = { class: "ui-select-field-suffix" }, aa = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, la = { class: "ui-icon-picker-panel" }, sa = { class: "ui-icon-picker-panel__header" }, na = { class: "ui-icon-picker-panel__title" }, oa = { class: "ui-icon-picker-panel__search" }, ua = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, ca = {
  key: 1,
  class: "ui-icon-picker-grid"
}, da = ["title", "onClick"];
function ha(e, r, t, s, l, i) {
  const c = _("ui-icon"), d = _("ui-button"), u = _("ui-input"), h = _("ui-popover");
  return a(), n("div", {
    class: k(i.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      width: t.panelWidth,
      disabled: t.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: I }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: I
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", ia, [
              w(c, {
                name: i.localIcon || "grid",
                type: t.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, m(i.localIcon || i.triggerLabel), 3),
            o("span", ra, [
              o("span", aa, [
                w(c, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ta)
        ])
      ]),
      content: g(() => [
        o("div", la, [
          o("div", sa, [
            o("span", na, m(i.popoverTitleLabel), 1),
            i.localIcon ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: z(i.clearIcon, ["stop"])
            }, {
              default: g(() => [
                C(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", oa, [
            w(u, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": r[0] || (r[0] = (p) => l.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (a(), n("div", ca, [
            (a(!0), n(T, null, A(i.filteredIcons, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === p }]),
              title: p,
              onClick: (v) => i.selectIcon(p)
            }, [
              w(c, {
                name: p,
                type: t.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, da))), 128))
          ])) : (a(), n("div", ua, m(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const fa = /* @__PURE__ */ x(ea, [["render", ha]]), pa = ["tr-TR", "en-US"], q = Ce({
  currency: "TRY",
  format: "tr-TR"
});
function ma(e, r = q.format) {
  return pa.includes(e) ? e : r;
}
function ga(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (q.currency = X(e.currency));
  const r = e.format ?? e.locale;
  r != null && (q.format = ma(r));
}
function ba() {
  return Re(q);
}
const ya = {
  name: "PriceInput",
  components: { CurrencyInput: Pe },
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
    return { priceInputConfig: ba() };
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
function va(e, r, t, s, l, i) {
  const c = _("CurrencyInput");
  return a(), y(c, L({
    "model-value": t.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": r[0] || (r[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: r[1] || (r[1] = (d) => e.$emit("input", d)),
    onChange: r[2] || (r[2] = (d) => e.$emit("change", d)),
    onFocus: r[3] || (r[3] = (d) => e.$emit("focus", d)),
    onBlur: r[4] || (r[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const _a = /* @__PURE__ */ x(ya, [["render", va]]);
function ka(e) {
  const r = String(e ?? "");
  if (!r)
    return { score: 0, percent: 0, label: "empty" };
  let t = 0;
  r.length >= 8 && (t += 1), r.length >= 12 && (t += 1), /[a-z]/.test(r) && /[A-Z]/.test(r) ? t += 1 : /[a-zA-Z]/.test(r) && (t += 0.5), /\d/.test(r) && (t += 1), /[^a-zA-Z0-9]/.test(r) && (t += 1);
  const s = Math.min(4, Math.round(t)), l = ["weak", "fair", "good", "strong"], i = s <= 0 ? "weak" : l[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: i
  };
}
let te = 0;
const wa = ["sm", "md", "lg"], xa = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => wa.includes(e)
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
    return te += 1, {
      fallbackId: `ui-password-${te}`,
      fallbackStrengthId: `ui-password-strength-${te}`,
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
      return ka(this.modelValue);
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
      for (const [t, s] of Object.entries(this.$attrs))
        e.has(t) || (r[t] = s);
      return r;
    }
  }
}, Sa = ["aria-label", "aria-pressed", "disabled"], Ca = ["id", "aria-live"];
function La(e, r, t, s, l, i) {
  const c = _("ui-icon"), d = _("ui-input"), u = _("ui-progress");
  return a(), n("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    w(d, L({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": r[1] || (r[1] = (h) => i.innerValue = h),
      type: l.visible ? "text" : "password",
      class: "w-full",
      size: t.size,
      disabled: t.disabled,
      readonly: t.readonly,
      placeholder: t.placeholder,
      name: t.name,
      autocomplete: t.autocomplete,
      maxlength: t.maxlength,
      "aria-describedby": i.strengthDescribedby
    }, i.passthroughAttrs, {
      onFocus: r[2] || (r[2] = (h) => e.$emit("focus", h)),
      onBlur: r[3] || (r[3] = (h) => e.$emit("blur", h))
    }), {
      append: g(() => [
        o("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": l.visible ? "true" : "false",
          disabled: t.disabled,
          onClick: r[0] || (r[0] = (h) => l.visible = !l.visible)
        }, [
          w(c, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Sa)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (a(), n("div", {
      key: 0,
      id: l.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      w(u, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (a(), n("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, m(i.strengthText), 3)) : f("", !0)
    ], 8, Ca)) : f("", !0)
  ], 2);
}
const Ta = /* @__PURE__ */ x(xa, [["render", La]]), Ia = ["bar", "circle"], ye = ["sm", "md", "lg"], ve = ["thin", "md"], Aa = ["default", "weak", "fair", "good", "strong"], Y = { sm: 16, md: 20, lg: 24 }, Ma = { sm: 1.5, md: 2, lg: 2 }, za = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Ia.includes(e)
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
      validator: (e) => Aa.includes(e)
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
      const e = this.type === "circle" ? ye.includes(this.size) ? this.size : "sm" : ve.includes(this.size) ? this.size : "md";
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
      return ye.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return ve.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = Y[this.circleSizeKey] ?? Y.sm;
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
      const e = Y[this.circleSizeKey] ?? Y.sm, r = Ma[this.circleSizeKey] ?? 2, t = (e - r) / 2, s = e / 2, l = 2 * Math.PI * t, i = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: r, radius: t, center: s, circumference: l, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Pa = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Va = ["width", "height", "viewBox"], Oa = ["cx", "cy", "r", "stroke-width"], Ea = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ra = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Ba(e, r, t, s, l, i) {
  return a(), n("div", {
    class: k(i.rootClass),
    style: O(i.circleRootStyle),
    role: t.presentational ? void 0 : "progressbar",
    "aria-valuenow": t.presentational || t.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": t.presentational ? void 0 : 0,
    "aria-valuemax": t.presentational ? void 0 : t.max,
    "aria-label": t.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": t.presentational ? void 0 : t.ariaValuetext
  }, [
    t.type === "circle" ? (a(), n("svg", {
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
      }, null, 8, Oa),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Ea)
    ], 8, Va)) : (a(), n("div", Ra, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: O({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Pa);
}
const Fa = /* @__PURE__ */ x(za, [["render", Ba]]), Da = Te("ui-sheet"), Na = ["left", "right"], $a = ["sm", "md", "lg", "xl"], Ha = ["solid", "regular", "brands", "light", "duotone", "thin"], _e = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Wa = {
  name: "Sheet",
  components: { Divider: Le },
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
      validator: (e) => Na.includes(e)
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
      validator: (e) => $a.includes(e)
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
      validator: (e) => Ha.includes(e)
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
     * Dar viewport’ta (`max-width: 767px`) panel tam genişlik.
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
    const e = Da();
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
      return _e[this.size] || _e.md;
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
      return He(this.$attrs, ["class"]);
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
      return S(
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
        $e(e) || (this.focusFallbackTimer = setTimeout(() => {
          var t;
          this.focusFallbackTimer = null, (t = e.focus) == null || t.call(e);
        }, 50));
      });
    }
  }
}, Ya = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Ga = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Ua = {
  key: 0,
  class: "ui-sheet-header__icon"
}, ja = ["id"], Ka = {
  key: 2,
  class: "ui-sheet-header__actions"
}, qa = ["id"], Za = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Qa(e, r, t, s, l, i) {
  const c = _("ui-icon"), d = _("ui-button"), u = _("Divider");
  return l.portalReady ? (a(), y(Z, {
    key: 0,
    to: "body"
  }, [
    w(Q, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: g(() => [
        t.open ? (a(), n("div", {
          key: 0,
          ref: "layerRef",
          class: k(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: r[2] || (r[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          t.overlay ? (a(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          })) : f("", !0),
          o("div", L({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": t.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: r[1] || (r[1] = z(() => {
            }, ["stop"]))
          }), [
            i.hasHeaderBlock ? (a(), n("div", Ga, [
              b(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (a(), n("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !t.icon }])
                }, [
                  t.icon ? (a(), n("span", Ua, [
                    w(c, {
                      name: t.icon,
                      type: t.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  t.title ? (a(), n("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(t.title), 9, ja)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), n("div", Ka, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  t.showClose ? (a(), y(d, {
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
                  t.description ? (a(), n("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(t.description), 9, qa)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), n("div", Za, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (a(), y(u, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), n("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": t.bodyPadding === "none",
                "ui-card-body--flex": t.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), n("div", {
              key: 4,
              class: k(["ui-card-footer", { "ui-sheet-footer--borderless": !t.footerBorder }])
            }, [
              b(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, Ya)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Xa = /* @__PURE__ */ x(Wa, [["render", Qa]]), Ja = ["sm", "md", "lg", "full"], ke = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, el = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Ja.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        ke[this.width] || ke.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, tl = {
  key: 0,
  class: "ui-menu-header"
}, il = { class: "ui-menu-body" }, rl = {
  key: 1,
  class: "ui-menu-footer"
};
function al(e, r, t, s, l, i) {
  return a(), n("nav", L({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (a(), n("div", tl, [
      b(e.$slots, "header")
    ])) : f("", !0),
    o("div", il, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), n("div", rl, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const ll = /* @__PURE__ */ x(el, [["render", al]]), sl = {
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
}, nl = {
  key: 0,
  class: "ui-menu-group-label"
}, ol = { class: "ui-menu-group-items" };
function ul(e, r, t, s, l, i) {
  return a(), n("div", L({ class: i.groupClass }, i.passthroughAttrs), [
    t.label ? (a(), n("p", nl, m(t.label), 1)) : f("", !0),
    o("div", ol, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const cl = /* @__PURE__ */ x(sl, [["render", ul]]), dl = {
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
function hl(e, r, t, s, l, i) {
  const c = _("ui-button");
  return a(), y(c, L({
    type: "button",
    variant: "ghost",
    color: "secondary",
    fulled: "",
    "text-align": "left",
    to: t.to,
    "prefix-icon": t.prefixIcon,
    "suffix-icon": t.suffixIcon,
    disabled: t.disabled,
    loading: t.loading,
    class: i.itemClass,
    "aria-current": t.active ? "page" : void 0
  }, i.forwardedAttrs, { onClick: i.onClick }), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const fl = /* @__PURE__ */ x(dl, [["render", hl]]), pl = {
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
}, ml = ["aria-label"];
function gl(e, r, t, s, l, i) {
  return a(), n("div", L({
    class: i.navClass,
    role: "navigation",
    "aria-label": t.ariaLabel || void 0
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, ml);
}
const bl = /* @__PURE__ */ x(pl, [["render", gl]]), yl = ["horizontal", "vertical"], vl = ["default", "pills"], _l = {
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
      validator: (e) => vl.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => yl.includes(e)
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
        iconType: (r == null ? void 0 : r.iconType) ?? "light"
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
      const r = this.normalizedSteps.length - 1, t = Math.min(r, Math.max(0, e));
      this.$emit("update:modelValue", t);
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
}, kl = ["aria-label"], wl = { class: "ui-stepper-pills-track" }, xl = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Sl = { class: "flex w-full min-w-0 items-center justify-center" }, Cl = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Ll = {
  key: 1,
  class: "tabular-nums"
}, Tl = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Il = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Al = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ml = { class: "flex flex-col items-center" }, zl = {
  key: 1,
  class: "tabular-nums"
}, Pl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Vl = { class: "ui-stepper-title" }, Ol = {
  key: 0,
  class: "ui-stepper-description"
};
function El(e, r, t, s, l, i) {
  const c = _("ui-icon");
  return a(), n("div", L({
    class: i.rootClass,
    role: "list",
    "aria-label": t.ariaLabel
  }, i.passthroughAttrs), [
    t.variant === "pills" ? (a(), n(T, { key: 0 }, [
      o("div", wl, [
        (a(!0), n(T, null, A(i.normalizedSteps, (d, u) => (a(), y(U(t.interactive ? "button" : "span"), L({
          key: u,
          class: ["ui-stepper-pill", i.pillClass(u)],
          role: "listitem",
          "aria-current": u === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(u) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      t.showLabel ? (a(), n("p", xl, m(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : t.direction === "horizontal" ? (a(!0), n(T, { key: 1 }, A(i.normalizedSteps, (d, u) => (a(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", Sl, [
        u > 0 ? (a(), n("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", Cl)),
        (a(), y(U(t.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(c, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", Ll, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", Tl))
      ]),
      o("p", Il, m(d.title), 1),
      d.description ? (a(), n("p", Al, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), n(T, { key: 2 }, A(i.normalizedSteps, (d, u) => (a(), n("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", Ml, [
        (a(), y(U(t.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(u) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(c, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", zl, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 0,
          class: k(["ui-stepper-vrail", i.verticalRailClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      o("div", Pl, [
        o("p", Vl, m(d.title), 1),
        d.description ? (a(), n("p", Ol, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, kl);
}
const Rl = /* @__PURE__ */ x(_l, [["render", El]]);
let we = 0;
const Bl = {
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
      for (const [t, s] of Object.entries(this.$attrs))
        e.has(t) || (r[t] = s);
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
}, Dl = {
  key: 0,
  class: "ui-form-label"
}, Nl = {
  key: 1,
  class: "ui-slider-value"
}, $l = { class: "ui-slider-rail" }, Hl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Wl = {
  key: 1,
  class: "ui-slider-scale"
}, Yl = { key: 0 }, Gl = { key: 1 };
function Ul(e, r, t, s, l, i) {
  const c = _("ui-progress");
  return a(), n("div", {
    class: k(i.rootClass)
  }, [
    t.label || i.hasValue ? (a(), n("div", Fl, [
      t.label ? (a(), n("span", Dl, m(t.label), 1)) : f("", !0),
      i.hasValue ? (a(), n("span", Nl, m(t.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    o("div", $l, [
      w(c, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", L(i.passthroughAttrs, {
        id: i.resolvedId,
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
        onInput: r[0] || (r[0] = (...d) => i.onNativeInput && i.onNativeInput(...d)),
        onChange: r[1] || (r[1] = (...d) => i.onChange && i.onChange(...d))
      }), null, 16, Hl)
    ]),
    t.minLabel || t.maxLabel ? (a(), n("div", Wl, [
      t.minLabel ? (a(), n("span", Yl, m(t.minLabel), 1)) : f("", !0),
      t.maxLabel ? (a(), n("span", Gl, m(t.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const jl = /* @__PURE__ */ x(Bl, [["render", Ul]]), Kl = {
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
}, ql = { class: "ui-table-scroll" };
function Zl(e, r, t, s, l, i) {
  return a(), n("div", ql, [
    o("table", L({ class: i.rootClass }, i.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const Ql = /* @__PURE__ */ x(Kl, [["render", Zl]]), Xl = {
  name: "TableBody"
}, Jl = { class: "ui-table-body" };
function es(e, r, t, s, l, i) {
  return a(), n("tbody", Jl, [
    b(e.$slots, "default")
  ]);
}
const ts = /* @__PURE__ */ x(Xl, [["render", es]]), is = ["left", "center", "right"], rs = ["title", "secondary", "body"], as = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => is.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || rs.includes(e)
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
}, ls = ["colspan"];
function ss(e, r, t, s, l, i) {
  return a(), n("td", {
    colspan: t.colspan > 0 ? t.colspan : void 0,
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, ls);
}
const ns = /* @__PURE__ */ x(as, [["render", ss]]), os = ["left", "center", "right"], us = ["sm", "md", "lg"], cs = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => os.includes(e)
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
      if (!(this.iconCol || us.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function ds(e, r, t, s, l, i) {
  return a(), n("th", {
    class: k(i.rootClass),
    style: O(i.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const hs = /* @__PURE__ */ x(cs, [["render", ds]]), fs = {
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
function ps(e, r, t, s, l, i) {
  return a(), n("thead", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const ms = /* @__PURE__ */ x(fs, [["render", ps]]), gs = {
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
}, bs = { class: "ui-table-pagination" }, ys = { class: "ui-table-pagination-meta" }, vs = { class: "ui-table-pagination-nav" }, _s = { class: "ui-table-pagination-page" };
function ks(e, r, t, s, l, i) {
  const c = _("ui-button");
  return a(), n("div", bs, [
    o("div", ys, [
      b(e.$slots, "meta", {}, () => [
        C(m(t.metaText), 1)
      ])
    ]),
    o("div", vs, [
      w(c, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": t.prevAriaLabel,
        onClick: r[0] || (r[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      o("div", _s, m(t.pageLabel), 1),
      w(c, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": t.nextAriaLabel,
        onClick: r[1] || (r[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const ws = /* @__PURE__ */ x(gs, [["render", ks]]), xs = ["none", "soft", "strong"], Ss = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || xs.includes(e)
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
function Cs(e, r, t, s, l, i) {
  return a(), n("tr", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Ls = /* @__PURE__ */ x(Ss, [["render", Cs]]), Ts = {
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
}, Is = ["id", "aria-labelledby"];
function As(e, r, t, s, l, i) {
  return Be((a(), n("div", L({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Is)), [
    [Fe, i.isActive]
  ]);
}
const Ms = /* @__PURE__ */ x(Ts, [["render", As]]), zs = Te("ui-timepicker"), ie = 40;
function N(e) {
  return String(e).padStart(2, "0");
}
const Ps = {
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
      fallbackId: zs(),
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
      for (let t = 0; t < 60; t += e)
        r.push(t);
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
    display() {
      return this.menuOpen ? `${N(this.draftHour)}:${N(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.resolvedPlaceholder;
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
    pad2: N,
    applyModelToDraft() {
      const e = this.modelValue;
      let r = 0, t = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (r = Math.min(23, Math.max(0, parseInt(s[1], 10))), t = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const l = this.minuteValues;
      let i = l[0] ?? 0, c = 999;
      for (const d of l) {
        const u = Math.abs(d - t);
        u < c && (c = u, i = d);
      }
      this.draftHour = r, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return ie;
      const r = e.querySelector(".ui-timepicker-wheel-item");
      if (!r) return ie;
      const t = r.getBoundingClientRect().height;
      return t > 0 ? t : ie;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const r = e.querySelector(".ui-timepicker-wheel-spacer"), t = this.wheelItemHeight(e);
      if (!r) return (e.clientHeight - t) / 2;
      const s = parseFloat(window.getComputedStyle(r).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - t) / 2;
    },
    indexFromScroll(e, r) {
      const t = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, i = Math.round((l - s - t / 2) / t);
      return Math.min(r, Math.max(0, i));
    },
    scrollTopForIndex(e, r) {
      const t = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + r * t + t / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, r, { smooth: t = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, r);
      t && typeof e.scrollTo == "function" ? e.scrollTo({ top: s, behavior: "smooth" }) : e.scrollTop = s;
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
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    selectMinute(e) {
      const r = this.minuteValues;
      if (!r.length) return;
      const t = Math.min(r.length - 1, Math.max(0, e));
      this.draftMinute = r[t], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, t, { smooth: !0 }), window.setTimeout(() => {
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
      const t = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[t];
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
      const e = `${N(this.draftHour)}:${N(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.indexFromScroll(e, 23);
      this.draftHour = r;
      const t = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - t) > 0.5 && (e.scrollTop = t), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.minuteValues;
      if (!r.length) return;
      const t = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[t];
      const s = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, Vs = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Os = { class: "ui-timepicker-wheels" }, Es = { class: "ui-timepicker-wheels-row" }, Rs = ["aria-valuenow", "aria-label"], Bs = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Fs = { class: "ui-timepicker-wheel-spacer" }, Ds = ["onClick"], Ns = ["aria-valuenow", "aria-label"], $s = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Hs = { class: "ui-timepicker-wheel-spacer" }, Ws = ["onClick"], Ys = { class: "min-w-0 flex-1 truncate text-foreground" }, Gs = { class: "ui-timepicker-panel w-full p-2" }, Us = { class: "ui-timepicker-wheels" }, js = { class: "ui-timepicker-wheels-row" }, Ks = ["aria-valuenow", "aria-label"], qs = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Zs = { class: "ui-timepicker-wheel-spacer" }, Qs = ["onClick"], Xs = ["aria-valuenow", "aria-label"], Js = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, en = { class: "ui-timepicker-wheel-spacer" }, tn = ["onClick"];
function rn(e, r, t, s, l, i) {
  const c = _("ui-button"), d = _("ui-popover");
  return a(), n("div", {
    class: k([
      "ui-timepicker",
      t.embedded ? "ui-timepicker--embedded" : "",
      t.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    t.embedded ? (a(), n("div", Vs, [
      o("div", Os, [
        r[2] || (r[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Es, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            o("div", Bs, [
              o("div", Fs, [
                (a(!0), n(T, null, A(i.hourOptions, (u) => (a(), n("button", {
                  key: "h-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    u === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(u)
                }, m(i.pad2(u)), 11, Ds))), 128))
              ])
            ], 512)
          ], 8, Rs),
          r[1] || (r[1] = o("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": i.minuteAriaLabel
          }, [
            o("div", $s, [
              o("div", Hs, [
                (a(!0), n(T, null, A(i.minuteValues, (u, h) => (a(), n("button", {
                  key: "m-" + u,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    u === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => i.selectMinute(h)
                }, m(i.pad2(u)), 11, Ws))), 128))
              ])
            ], 512)
          ], 8, Ns)
        ]),
        r[3] || (r[3] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        r[4] || (r[4] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (a(), y(d, {
      key: 1,
      open: l.menuOpen,
      "onUpdate:open": r[0] || (r[0] = (u) => l.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: t.disabled
    }, {
      trigger: g(({ open: u, toggle: h, close: p }) => [
        b(e.$slots, "trigger", {
          open: u,
          toggle: h,
          close: p
        }, () => [
          w(c, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: t.disabled,
            "aria-expanded": u ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", Ys, m(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        o("div", Gs, [
          o("div", Us, [
            r[6] || (r[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", js, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                o("div", qs, [
                  o("div", Zs, [
                    (a(!0), n(T, null, A(i.hourOptions, (u) => (a(), n("button", {
                      key: "h-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        u === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(u)
                    }, m(i.pad2(u)), 11, Qs))), 128))
                  ])
                ], 512)
              ], 8, Ks),
              r[5] || (r[5] = o("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                o("div", Js, [
                  o("div", en, [
                    (a(!0), n(T, null, A(i.minuteValues, (u, h) => (a(), n("button", {
                      key: "m-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        u === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => i.selectMinute(h)
                    }, m(i.pad2(u)), 11, tn))), 128))
                  ])
                ], 512)
              ], 8, Xs)
            ]),
            r[7] || (r[7] = o("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            r[8] || (r[8] = o("div", {
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
const xe = /* @__PURE__ */ x(Ps, [["render", rn]]), an = ["square", "video", "auto"], ln = ["fill", "sm", "md", "lg"], Se = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, sn = {
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
      validator: (e) => an.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => ln.includes(e)
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
        Se[this.size] || Se.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), r = {};
      for (const [t, s] of Object.entries(this.$attrs))
        e.has(t) || (r[t] = s);
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
}, nn = ["src", "alt"], on = ["aria-hidden"], un = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, cn = {
  key: 3,
  class: "ui-photo__overflow"
}, dn = ["aria-label"], hn = ["aria-label"], fn = { class: "ui-photo-preview__panel" }, pn = ["src", "alt"], mn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function gn(e, r, t, s, l, i) {
  const c = _("ui-icon"), d = _("ui-button");
  return a(), n(T, null, [
    (a(), y(U(i.rootTag), L({
      type: t.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: g(() => [
        t.src && !l.imageFailed ? (a(), n("img", {
          key: 0,
          src: t.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: r[0] || (r[0] = (u) => l.imageFailed = !0)
        }, null, 40, nn)) : (a(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": t.interactive ? "true" : void 0
        }, [
          w(c, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, on)),
        t.favorite ? (a(), n("span", un, [
          w(c, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        t.overflowLabel ? (a(), n("span", cn, m(t.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), y(Z, { to: "body" }, [
      w(Q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: r[2] || (r[2] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: r[1] || (r[1] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, hn),
            o("div", fn, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: z(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, pn)) : f("", !0),
              i.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: z(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), n("p", mn, m(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, dn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const bn = /* @__PURE__ */ x(sn, [["render", gn]]), yn = ["square", "video", "auto"], vn = {
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
      validator: (e) => yn.includes(e)
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
}, _n = ["data-count"], kn = ["aria-label"], wn = ["aria-label"], xn = { class: "ui-photo-preview__panel" }, Sn = ["src", "alt"], Cn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Ln(e, r, t, s, l, i) {
  const c = _("ui-photo"), d = _("ui-button");
  return a(), n(T, null, [
    o("div", {
      class: k(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (a(!0), n(T, null, A(i.visibleItems, (u, h) => (a(), y(c, {
        key: u.key || `${u.src}-${h}`,
        src: u.src,
        alt: u.alt || "",
        favorite: !!u.favorite,
        aspect: t.aspect,
        preview: t.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": u.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, _n),
    (a(), y(Z, { to: "body" }, [
      w(Q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: r[1] || (r[1] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: r[0] || (r[0] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, wn),
            o("div", xn, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: z(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Sn)) : f("", !0),
              i.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: z(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), n("p", Cn, m(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, kn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Tn = /* @__PURE__ */ x(vn, [["render", Ln]]);
function G(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Vn() {
  return {
    push: D,
    dismiss: Ye,
    clear: We,
    info: (e) => D({ ...G(e), variant: "info" }),
    success: (e) => D({ ...G(e), variant: "success" }),
    warning: (e) => D({ ...G(e), variant: "warning" }),
    error: (e) => D({ ...G(e), variant: "error" })
  };
}
function On(e = !1) {
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
function En() {
  return {
    confirm: Ge
  };
}
const le = {
  en: je,
  tr: Ie
};
function Rn(e = "tr") {
  return le[e] ?? le.tr;
}
const Bn = Ie, In = [
  ["ui-action-card", Vt],
  ["ui-action-card-list", Bt],
  ["ui-action-group", Ke],
  ["ui-ai-button", Ht],
  ["ui-alert", qe],
  ["ui-avatar", Ze],
  ["ui-avatar-group", jt],
  ["ui-badge", Qe],
  ["ui-button", Xe],
  ["ui-card", Je],
  ["ui-checkbox", xi],
  ["ui-checkbox-group", Ii],
  ["ui-color-picker", ui],
  ["ui-currency-input", Pe],
  ["ui-confirm-dialog", et],
  ["ui-date-picker", tt],
  ["ui-date-range-picker", Wi],
  ["ui-dialog", it],
  ["ui-divider", Le],
  ["ui-dropdown", rt],
  ["ui-empty", at],
  ["ui-field", Xi],
  ["ui-field-action", dr],
  ["ui-file", xr],
  ["ui-form-row", lt],
  ["ui-guidance", Xr],
  ["ui-icon", st],
  ["ui-icon-picker", fa],
  ["ui-input", nt],
  ["ui-price-input", _a],
  ["ui-password", Ta],
  ["ui-phone", ot],
  ["ui-pin", ut],
  ["ui-list", ct],
  ["ui-list-item", dt],
  ["ui-popover", ht],
  ["ui-progress", Fa],
  ["ui-radio", ft],
  ["ui-radio-group", pt],
  ["ui-select", mt],
  ["ui-sheet", Xa],
  ["ui-menu", ll],
  ["ui-menu-group", cl],
  ["ui-menu-item", fl],
  ["ui-menu-nav", bl],
  ["ui-segment", gt],
  ["ui-segment-group", bt],
  ["ui-skeleton", yt],
  ["ui-slider", jl],
  ["ui-stepper", Rl],
  ["ui-switch", vt],
  ["ui-table", Ql],
  ["ui-table-body", ts],
  ["ui-table-cell", ns],
  ["ui-table-head", hs],
  ["ui-table-header", ms],
  ["ui-table-pagination", ws],
  ["ui-table-row", Ls],
  ["ui-tag", _t],
  ["ui-tab-list", kt],
  ["ui-tab-panel", Ms],
  ["ui-tabs", wt],
  ["ui-tab-trigger", xt],
  ["ui-time-picker", xe],
  ["ui-timepicker", xe],
  ["ui-tooltip", St],
  ["ui-toast", Ct],
  ["ui-photo", bn],
  ["ui-photos", Tn]
];
function An(e, r = {}) {
  var d, u;
  const { i18n: t, locale: s, locales: l, theme: i, priceInput: c } = r;
  if (i && Ue(i), c && ga(c), (d = t == null ? void 0 : t.global) != null && d.mergeLocaleMessage) {
    const h = l ?? (s != null ? [s] : [
      typeof t.global.locale == "string" ? t.global.locale : ((u = t.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const p of h) {
      const v = le[p];
      v && t.global.mergeLocaleMessage(p, v);
    }
  }
  for (const [h, p] of In)
    e.component(h, p);
}
const Fn = {
  install: An
};
export {
  Vt as ActionCard,
  Bt as ActionCardList,
  Ke as ActionGroup,
  Ht as AiButton,
  qe as Alert,
  Ze as Avatar,
  jt as AvatarGroup,
  Qe as Badge,
  Xe as Button,
  Je as Card,
  xi as Checkbox,
  Ii as CheckboxGroup,
  ui as ColorPicker,
  et as ConfirmDialog,
  Pe as CurrencyInput,
  tt as DatePicker,
  Wi as DateRangePicker,
  it as Dialog,
  Le as Divider,
  rt as Dropdown,
  at as Empty,
  $n as FEW_COLOR_SCALE,
  Hn as FEW_PALETTE_ID,
  Wn as FEW_PRIMARY,
  Yn as FEW_PRIMARY_FOREGROUND,
  Xi as Field,
  dr as FieldAction,
  xr as File,
  lt as FormRow,
  Gn as GOOGLE_FONTS_CATALOG,
  Xr as Guidance,
  st as Icon,
  fa as IconPicker,
  nt as Input,
  ct as List,
  dt as ListItem,
  ll as Menu,
  cl as MenuGroup,
  fl as MenuItem,
  bl as MenuNav,
  pa as PRICE_FORMATS,
  Ta as Password,
  ot as Phone,
  bn as Photo,
  Tn as Photos,
  ut as Pin,
  ht as Popover,
  _a as PriceInput,
  Fa as Progress,
  ft as Radio,
  pt as RadioGroup,
  gt as Segment,
  bt as SegmentGroup,
  mt as Select,
  Xa as Sheet,
  yt as Skeleton,
  jl as Slider,
  Rl as Stepper,
  vt as Switch,
  Un as THEME_CUSTOM_CSS_ID,
  jn as THEME_PRESETS,
  Kn as THEME_PRESET_IDS,
  kt as TabList,
  Ms as TabPanel,
  xt as TabTrigger,
  Ql as Table,
  ts as TableBody,
  ns as TableCell,
  hs as TableHead,
  ms as TableHeader,
  ws as TablePagination,
  Ls as TableRow,
  wt as Tabs,
  _t as Tag,
  xe as TimePicker,
  Ct as Toast,
  St as Tooltip,
  qn as applyGoogleFontsCatalogPreview,
  Zn as applyGoogleFontsForTheme,
  Qn as applyThemeCustomCss,
  Ue as applyUiTheme,
  Xn as buildGoogleFontsLinkTag,
  Jn as buildGoogleFontsStylesheetUrl,
  eo as buildThemeEnforcementCss,
  to as buildThemeStyleAttr,
  io as clearThemeCustomCss,
  We as clearToasts,
  ro as createUiId,
  Te as createUiIdFactory,
  Fn as default,
  ao as deriveBrandColorsFromPrimary,
  Ye as dismissToast,
  Pn as formatCurrencyAmount,
  lo as formatGoogleFontFamilyName,
  di as formatMoneyInput,
  Ae as getCurrencySymbol,
  so as getFewPrimaryColors,
  ze as getMoneySeparators,
  ba as getPriceInputConfig,
  no as getThemePreset,
  Rn as getUiMessages,
  oo as googleFontSelectOptions,
  uo as mergeUiTheme,
  ci as parseLocalizedMoneyInput,
  He as pickPassthroughAttrs,
  D as pushToast,
  Ge as requestConfirm,
  co as resetUiIds,
  ho as resolveControlSize,
  X as resolveCurrencyCode,
  fo as resolvePrimaryColor,
  po as resolveThemeFontFamilies,
  mo as resolveThemePreset,
  go as resolveThemeVars,
  M as resolveUiText,
  Me as sanitizeMoneyInput,
  ga as setPriceInputConfig,
  Bn as uiMessagesTr,
  En as useConfirm,
  On as useDialog,
  Vn as useToast,
  bo as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
