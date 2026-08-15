import { resolveComponent as _, openBlock as a, createElementBlock as s, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as o, toDisplayString as m, normalizeStyle as E, createVNode as w, mergeProps as T, withCtx as g, withModifiers as P, createTextVNode as C, Fragment as I, renderList as M, withKeys as le, reactive as oe, createSlots as j, normalizeProps as Be, guardReactiveProps as De, Teleport as Q, Transition as X, readonly as Fe, resolveDynamicComponent as K, withDirectives as Ne, vShow as $e } from "vue";
import { _ as x, c as S, r as z, a as He, f as We, D as Ae, b as Ye, p as Ge, d as Me, e as Ue, g as Ke, h as N, t as ze, i as je, j as qe, A as Ze, k as Qe, l as Xe, B as Je, m as et, C as tt, n as it, o as rt, q as at, E as lt, F as nt, I as st, s as ot, P as ut, u as ct, L as dt, v as ht, w as ft, R as pt, x as mt, S as gt, y as bt, z as yt, G as vt, T as _t, H as kt, J as wt, K as xt, M as St, N as Ct } from "./index-DEEtzBEQ.js";
import { O as qs, Q as Zs, U as Qs, V as Xs, W as Js, X as eo, Y as to, Z as io, $ as ro, a0 as ao, a1 as lo, a2 as no, a3 as so, a4 as oo, a5 as uo, a6 as co, a7 as ho, a8 as fo, a9 as po, aa as mo, ab as go, ac as bo, ad as yo, ae as vo, af as _o, ag as ko, ah as wo } from "./index-DEEtzBEQ.js";
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
function Pt(e, r, i, n, l, t) {
  const u = _("ui-icon");
  return a(), s("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
  }, [
    b(e.$slots, "leading", {}, () => [
      t.showDefaultLeading ? (a(), y(u, {
        key: 0,
        name: i.icon,
        type: i.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    o("span", At, [
      o("span", Mt, m(i.title), 1),
      i.description ? (a(), s("span", zt, m(i.description), 1)) : f("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (a(), y(u, {
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
function Rt(e, r, i, n, l, t) {
  return a(), s("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: E(t.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Et);
}
const Bt = /* @__PURE__ */ x(Ot, [["render", Rt]]), Dt = {
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
}, Ft = ["data-size"], Nt = { class: "ui-ai-button__surface" };
function $t(e, r, i, n, l, t) {
  const u = _("ui-button");
  return a(), s("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": t.isBlock,
      "ui-ai-button--disabled": i.disabled || i.loading
    }]),
    "data-size": t.resolvedSize,
    style: E(t.rootStyle)
  }, [
    r[1] || (r[1] = o("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    o("span", Nt, [
      w(u, T({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: i.size,
        "prefix-icon": i.prefixIcon,
        disabled: i.disabled,
        loading: i.loading,
        fulled: t.isBlock
      }, e.$attrs, {
        onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
      }), {
        default: g(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Ft);
}
const Ht = /* @__PURE__ */ x(Dt, [["render", $t]]), Wt = ["xs", "sm", "md", "lg", "xl"], ee = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, Yt = {
  name: "AvatarGroup",
  SIZE_CLASS: ee,
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
        ee[this.size] || ee.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, Gt = ["aria-label"];
function Ut(e, r, i, n, l, t) {
  return a(), s("div", {
    class: k(t.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default"),
    i.overflowCount > 0 ? (a(), s("span", {
      key: 0,
      class: k(["ui-avatar-group-overflow", e.SIZE_CLASS[i.size] || e.SIZE_CLASS.md])
    }, m(t.overflowText), 3)) : f("", !0)
  ], 10, Gt);
}
const Kt = /* @__PURE__ */ x(Yt, [["render", Ut]]), jt = [
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
}, ei = { class: "ui-color-picker-panel" }, ti = { class: "ui-color-picker-panel__header" }, ii = { class: "ui-color-picker-panel__title" }, ri = { class: "ui-color-picker-swatches" }, ai = ["title", "onClick"], li = { class: "ui-color-picker-custom" }, ni = { class: "ui-color-picker-panel__title" }, si = { class: "ui-color-picker-custom__row" };
function oi(e, r, i, n, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return a(), s("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: A }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: A
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", Qt, [
              t.localColor ? (a(), s("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: t.localColor })
              }, null, 4)) : (a(), y(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !t.localColor }])
            }, m(t.displayValue), 3),
            o("span", Xt, [
              o("span", Jt, [
                w(u, {
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
            o("span", ii, m(t.popoverTitleLabel), 1),
            t.localColor ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: P(t.clearColor, ["stop"])
            }, {
              default: g(() => [
                C(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", ri, [
            (a(!0), s(I, null, M(l.presetColors, (p) => (a(), s("button", {
              key: p,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": t.localColor === p }]),
              style: E({ backgroundColor: p }),
              title: p,
              onClick: (v) => t.selectColor(p)
            }, [
              t.localColor === p ? (a(), y(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, ai))), 128))
          ]),
          o("div", li, [
            o("span", ni, m(t.customColorLabelText), 1),
            o("div", si, [
              w(c, {
                modelValue: t.localColor,
                "onUpdate:modelValue": r[0] || (r[0] = (p) => t.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: t.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              o("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: E({ backgroundColor: t.localColor || "transparent" }),
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
const ui = /* @__PURE__ */ x(qt, [["render", oi]]), fe = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, H = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function J(e, r = "TRY") {
  if (e == null || String(e).trim() === "")
    return r in H ? r : "TRY";
  const i = String(e).trim();
  if (fe[i])
    return fe[i];
  const n = i.toUpperCase();
  return H[n] ? n : r in H ? r : "TRY";
}
function Pe(e) {
  var i;
  const r = J(e);
  if (H[r])
    return H[r];
  try {
    const l = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: r,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((t) => t.type === "currency");
    return ((i = l == null ? void 0 : l.value) == null ? void 0 : i.trim()) || r;
  } catch {
    return r;
  }
}
function Ns(e, r, i = "tr-TR") {
  const n = Number(e) || 0, l = J(r);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: l }).format(n);
  } catch {
    return `${Pe(l)}${n.toFixed(2)}`;
  }
}
function Ve(e) {
  let r = String(e ?? "").replace(",", ".");
  r = r.replace(/[^\d.]/g, "");
  const i = r.indexOf(".");
  if (i !== -1) {
    const n = r.slice(0, i), l = r.slice(i + 1).replace(/\./g, "");
    r = `${n}.${l}`;
  }
  return r;
}
function Oe(e = "tr-TR") {
  var r, i;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((r = n.find((l) => l.type === "group")) == null ? void 0 : r.value) || ".",
      decimal: ((i = n.find((l) => l.type === "decimal")) == null ? void 0 : i.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function ci(e, r = "tr-TR") {
  const { group: i, decimal: n } = Oe(r);
  let l = String(e ?? "").trim();
  return l ? (l = l.split(i).join(""), l = l.split(n).join("."), Ve(l)) : "";
}
function di(e, r = "tr-TR") {
  const i = Ve(e);
  if (!i) return "";
  const { group: n, decimal: l } = Oe(r), [t = "", u] = i.split("."), c = (t.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return u === void 0 ? c : `${c}${l}${u}`;
}
let pe = 0;
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
    return pe += 1, { fallbackId: `ui-currency-input-${pe}` };
  },
  computed: {
    displaySymbol() {
      return Pe(this.currency);
    },
    resolvedCurrencyCode() {
      return J(this.currency);
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = n);
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
function mi(e, r, i, n, l, t) {
  const u = _("ui-input");
  return a(), y(u, T({
    id: t.resolvedId,
    modelValue: t.innerValue,
    "onUpdate:modelValue": r[0] || (r[0] = (d) => t.innerValue = d),
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
  }, t.passthroughAttrs, {
    onFocus: r[1] || (r[1] = (d) => e.$emit("focus", d)),
    onBlur: t.onBlur
  }), {
    prepend: g(() => [
      o("span", pi, m(t.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Ee = /* @__PURE__ */ x(fi, [["render", mi]]), gi = {
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
        const r = e.target.checked, i = this.uiCheckboxGroup.modelValue, n = Array.isArray(i) ? [...i] : [], l = n.findIndex((t) => Object.is(t, this.value));
        r && l === -1 ? n.push(this.value) : !r && l !== -1 && n.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, r = Array.isArray(e) ? [...e] : [], i = r.findIndex((n) => Object.is(n, this.value));
        i === -1 ? r.push(this.value) : r.splice(i, 1), this.uiCheckboxGroup.$emit("update:modelValue", r);
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
function wi(e, r, i, n, l, t) {
  const u = _("ui-icon");
  return a(), s("label", {
    class: k(t.checkboxClasses),
    onKeydown: [
      r[1] || (r[1] = le(P((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["enter"])),
      r[2] || (r[2] = le(P((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: t.nativeType,
      name: t.nativeName,
      value: t.groupValueString,
      checked: t.isChecked,
      class: "sr-only",
      onChange: r[0] || (r[0] = (...d) => t.onNativeChange && t.onNativeChange(...d))
    }, null, 40, bi),
    o("span", yi, [
      t.isChecked ? (a(), y(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    o("span", vi, [
      e.$slots.label || i.label ? (a(), s("span", _i, [
        b(e.$slots, "label", {}, () => [
          C(m(i.label), 1)
        ])
      ])) : f("", !0),
      i.description ? (a(), s("span", ki, m(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const xi = /* @__PURE__ */ x(gi, [["render", wi]]), Si = ["list", "button", "List", "Button"];
let me = 0;
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
}, Li = ["aria-label"];
function Ti(e, r, i, n, l, t) {
  return a(), s("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${t.normalizedVariant}`]),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, Li);
}
const Ii = /* @__PURE__ */ x(Ci, [["render", Ti]]), L = oe({
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
  return new Promise((r) => {
    L.title = e.title ?? "", L.description = e.description ?? "", L.confirmLabel = e.confirmLabel ?? "", L.cancelLabel = e.cancelLabel ?? "", L.destructive = !!e.destructive, L._resolve = r, L.open = !0;
  });
}
function te(e) {
  const r = L._resolve;
  L.open = !1, L._resolve = null, r && r(!!e);
}
const Mi = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return L;
    },
    syncOpen: {
      get() {
        return L.open;
      },
      set(e) {
        e ? L.open = !0 : L._resolve ? te(!1) : L.open = !1;
      }
    },
    confirmText() {
      return L.confirmLabel ? L.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return L.cancelLabel ? L.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      te(!0);
    },
    onCancel() {
      te(!1);
    }
  }
};
function zi(e, r, i, n, l, t) {
  const u = _("ui-button"), d = _("ui-dialog");
  return a(), y(d, {
    open: t.syncOpen,
    "onUpdate:open": r[0] || (r[0] = (c) => t.syncOpen = c),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: t.confirmState.title,
    description: t.confirmState.description,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": t.confirmState.title || t.fallbackAriaLabel
  }, {
    footer: g(() => [
      w(u, {
        color: "secondary",
        rounded: "",
        onClick: t.onCancel
      }, {
        default: g(() => [
          C(m(t.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      w(u, {
        rounded: "",
        color: t.confirmState.destructive ? "danger" : "primary",
        onClick: t.onConfirm
      }, {
        default: g(() => [
          C(m(t.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Pi = /* @__PURE__ */ x(Mi, [["render", zi]]);
let ge = 0;
function W(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return null;
  const i = Number(r[1]), n = Number(r[2]) - 1, l = Number(r[3]), t = new Date(i, n, l);
  return t.getFullYear() !== i || t.getMonth() !== n || t.getDate() !== l ? null : t;
}
function B(e, r) {
  return e === r ? 0 : e < r ? -1 : 1;
}
function ie(e, r, i) {
  return new Date(e, r, 1).toLocaleString(i, { month: "long" });
}
function be(e, r, i, n) {
  const l = `${e}-${W(r + 1)}-01`, t = new Date(e, r + 1, 0).getDate();
  let u = `${e}-${W(r + 1)}-${W(t)}`;
  if (i && u > i && (u = i), n && l < n && u < n) return null;
  let d = l;
  return n && d < n && (d = n), B(d, u) > 0 ? null : [d, u];
}
const Vi = {
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
    var n, l;
    ge += 1;
    const e = ge, r = ((n = this.modelValue) == null ? void 0 : n[0]) || "", i = Y(r) || Y((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
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
      return He((e = this.$i18n) == null ? void 0 : e.locale);
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
        return B(e, r) <= 0 ? r : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), r = D(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const n = D(i), l = e.getMonth(), t = e.getFullYear(), u = new Date(t, l - 1, 1), d = u.getFullYear(), c = u.getMonth(), h = (v, A) => typeof this.$t == "function" ? this.$t(v, A) : v;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [r, r]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: ie(t, l, this.locale)
          }),
          range: be(t, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: ie(d, c, this.locale)
          }),
          range: be(d, c, this.maxYmd, this.minYmd)
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
      return [e, r].map((i) => ({
        ...i,
        title: ie(i.year, i.month, this.locale),
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
    formatDisplay(e, r) {
      const i = (n) => n ? We(n, this.locale) || n : "…";
      return !e && !r ? this.resolvedPlaceholder : e === r || !r ? i(e || r) : `${i(e)} – ${i(r)}`;
    },
    shiftMonth(e) {
      const r = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth();
    },
    isRangeDisabled(e, r) {
      return !!(!e || !r || this.minYmd && r < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, r) {
      const i = new Date(e, r, 1), n = new Date(e, r, 1 - i.getDay()), l = this.previewStart, t = this.previewEnd, u = l && t, d = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), p = h.getMonth() === r && h.getFullYear() === e, v = h.getDate(), A = D(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${r}`, V = D(/* @__PURE__ */ new Date()) === A, R = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let ue = !1, ce = !1;
        if (u) {
          const de = B(l, t) <= 0 ? l : t, he = B(l, t) <= 0 ? t : l;
          ue = B(A, de) >= 0 && B(A, he) <= 0, ce = A === de || A === he;
        }
        d.push({
          key: F,
          d: v,
          date: h,
          today: V,
          inMonth: p,
          disabled: R,
          inRange: ue,
          endpoint: ce
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, r) {
      if (e.disabled || !e.range) return;
      const [i, n] = e.range;
      this.pickingStart = i, this.pickingEnd = n, this.$emit("update:modelValue", [i, n]), this.$emit("change", [i, n]), r();
    },
    pick(e, r) {
      if (!e.date || e.disabled) return;
      const i = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, l = i;
      if (B(l, n) < 0) {
        const t = n;
        n = l, l = t;
      }
      this.pickingStart = n, this.pickingEnd = l, this.$emit("update:modelValue", [n, l]), this.$emit("change", [n, l]), r();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Oi = { class: "min-w-0 flex-1 truncate text-foreground" }, Ei = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Ri = { class: "ui-daterangepicker-layout" }, Bi = ["aria-label"], Di = { class: "ui-daterangepicker-calendars" }, Fi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Ni = { class: "ui-daterangepicker-month-row" }, $i = { class: "mb-2 flex items-center justify-between gap-2" }, Hi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Wi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Yi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Gi = { class: "ui-datepicker-grid" };
function Ui(e, r, i, n, l, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return a(), s("div", {
    class: k(["ui-daterangepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: l.menuOpen,
      "onUpdate:open": r[2] || (r[2] = (c) => l.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: p }) => [
        b(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: p
        }, () => [
          w(u, {
            type: "button",
            id: t.resolvedId,
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
              o("span", Oi, m(t.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: c }) => [
        o("div", Ei, [
          o("div", Ri, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": t.resolvedQuickAriaLabel
            }, [
              (a(!0), s(I, null, M(t.quickPresets, (h) => (a(), y(u, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (p) => t.applyQuick(h, c)
              }, {
                default: g(() => [
                  C(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Bi),
            o("div", Di, [
              t.rangeHint ? (a(), s("p", Fi, m(t.rangeHint), 1)) : f("", !0),
              o("div", Ni, [
                (a(!0), s(I, null, M(t.calendarPanes, (h) => (a(), s("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", $i, [
                    h.showPrev ? (a(), y(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": t.resolvedPrevMonthLabel,
                      onClick: r[0] || (r[0] = P((p) => t.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), s("span", Hi)),
                    o("span", Wi, m(h.title), 1),
                    h.showNext ? (a(), y(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": t.resolvedNextMonthLabel,
                      onClick: r[1] || (r[1] = P((p) => t.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), s("span", Yi))
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
                  o("div", Gi, [
                    (a(!0), s(I, null, M(h.cells, (p) => (a(), y(u, {
                      key: p.key,
                      variant: t.dayVariant(p),
                      color: t.dayColor(p),
                      size: "sm",
                      cubed: "",
                      disabled: p.disabled,
                      "aria-selected": p.endpoint ? "true" : "false",
                      "aria-disabled": p.disabled ? "true" : void 0,
                      "data-outside": p.inMonth ? void 0 : "true",
                      "data-today": p.today ? "true" : void 0,
                      "data-in-range": p.inRange && !p.endpoint ? "true" : void 0,
                      "data-range-endpoint": p.endpoint ? "true" : void 0,
                      onMouseenter: (v) => t.onCellHover(p),
                      onClick: (v) => t.pick(p, c)
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
const Ki = /* @__PURE__ */ x(Vi, [["render", Ui]]), ji = ["solid", "regular", "brands", "light", "duotone", "thin"], qi = {
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
      validator: (e) => ji.includes(e)
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
}, Zi = {
  key: 0,
  class: "ui-field__title-row"
}, Qi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Xi = {
  key: 1,
  class: "ui-field__title"
}, Ji = {
  key: 1,
  class: "ui-field__value"
}, er = {
  key: 2,
  class: "ui-field__subtitle"
};
function tr(e, r, i, n, l, t) {
  const u = _("ui-icon");
  return a(), s("div", T({ class: t.rootClass }, t.passthroughAttrs), [
    i.title || t.showIcon ? (a(), s("div", Zi, [
      t.showIcon ? (a(), s("span", Qi, [
        w(u, {
          name: i.icon,
          type: i.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      i.title ? (a(), s("span", Xi, m(i.title), 1)) : f("", !0)
    ])) : f("", !0),
    t.hasValue ? (a(), s("div", Ji, [
      b(e.$slots, "default")
    ])) : f("", !0),
    i.subtitle ? (a(), s("p", er, m(i.subtitle), 1)) : f("", !0)
  ], 16);
}
const ir = /* @__PURE__ */ x(qi, [["render", tr]]), rr = ["popover", "dialog"], ar = ["sm", "md", "lg"], lr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], nr = {
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
      validator: (e) => rr.includes(e)
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
      validator: (e) => ar.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => lr.includes(e)
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
    onTriggerClick(e, r) {
      typeof r == "function" ? r() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, sr = { class: "ui-field-action-header" }, or = { class: "ui-field-action-header__text" }, ur = {
  key: 0,
  class: "ui-field-action-header__title"
}, cr = {
  key: 1,
  class: "ui-field-action-header__description"
}, dr = { class: "ui-field-action-body" }, hr = { class: "ui-field-action-body" }, fr = { class: "ui-field-action-footer" };
function pr(e, r, i, n, l, t) {
  const u = _("ui-button"), d = _("ui-popover"), c = _("ui-dialog");
  return a(), s("div", {
    class: k([
      "ui-field-action",
      t.hasValue ? "ui-field-action--filled" : "",
      i.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    t.isPopover ? (a(), y(d, {
      key: 0,
      open: t.resolvedOpen,
      "onUpdate:open": r[0] || (r[0] = (h) => t.resolvedOpen = h),
      placement: i.placement,
      width: i.popoverWidth,
      disabled: i.disabled,
      "mobile-centered": i.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: p }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: t.close,
          label: t.triggerLabel,
          hasValue: t.hasValue
        }, () => [
          i.iconOnly ? (a(), y(u, {
            key: 0,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: i.size,
            rounded: "",
            cubed: "",
            "prefix-icon": i.prefixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (v) => t.onTriggerClick(v, p)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), y(u, {
            key: 1,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: i.size,
            rounded: "",
            "prefix-icon": i.prefixIcon,
            "suffix-icon": i.suffixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (v) => t.onTriggerClick(v, p)
          }, {
            default: g(() => [
              C(m(t.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        o("div", dr, [
          b(e.$slots, "default", {
            close: h,
            open: t.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      t.showPopoverHeader ? {
        name: "header",
        fn: g(({ close: h }) => [
          b(e.$slots, "header", { close: h }, () => [
            o("div", sr, [
              o("div", or, [
                i.title ? (a(), s("p", ur, m(i.title), 1)) : f("", !0),
                i.description ? (a(), s("p", cr, m(i.description), 1)) : f("", !0)
              ]),
              i.clearable && t.hasValue ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": t.resolvedClearLabel,
                onClick: (p) => t.onClear(h)
              }, {
                default: g(() => [
                  C(m(t.resolvedClearLabel), 1)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), s(I, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: t.resolvedOpen,
        toggle: t.toggle,
        close: t.close,
        label: t.triggerLabel,
        hasValue: t.hasValue
      }, () => [
        i.iconOnly ? (a(), y(u, {
          key: 0,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: i.size,
          rounded: "",
          cubed: "",
          "prefix-icon": i.prefixIcon,
          disabled: i.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: r[1] || (r[1] = (h) => t.onTriggerClick(h, t.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), y(u, {
          key: 1,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: i.size,
          rounded: "",
          "prefix-icon": i.prefixIcon,
          "suffix-icon": i.suffixIcon,
          disabled: i.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: r[2] || (r[2] = (h) => t.onTriggerClick(h, t.toggle))
        }, {
          default: g(() => [
            C(m(t.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(c, {
        open: t.resolvedOpen,
        "onUpdate:open": r[4] || (r[4] = (h) => t.resolvedOpen = h),
        title: i.title,
        description: i.description,
        icon: i.dialogIcon,
        "max-width": i.maxWidth,
        "close-on-backdrop": i.closeOnBackdrop,
        "close-on-escape": i.closeOnEscape
      }, j({
        default: g(() => [
          o("div", hr, [
            b(e.$slots, "default", {
              close: t.close,
              open: t.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        t.showDialogFooter ? {
          name: "footer",
          fn: g(() => [
            b(e.$slots, "footer", { close: t.close }, () => [
              o("div", fr, [
                i.clearable && t.hasValue ? (a(), y(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: r[3] || (r[3] = (h) => t.onClear(t.close))
                }, {
                  default: g(() => [
                    C(m(t.resolvedClearLabel), 1)
                  ]),
                  _: 1
                })) : f("", !0),
                w(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: t.close
                }, {
                  default: g(() => [
                    C(m(t.resolvedDoneLabel), 1)
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
const mr = /* @__PURE__ */ x(nr, [["render", pr]]), gr = ["auto", "file", "folder"], br = ["sm", "md", "lg"], yr = { icon: "folder", color: "text-sky-500" }, vr = { icon: "file-lines", color: "text-muted-foreground" }, _r = {
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
function kr(e) {
  const r = q(e);
  return /[/\\]\s*$/.test(r);
}
function Re(e) {
  const r = q(e).replace(/[/\\]+$/, "");
  if (!r) return "";
  const i = r.split(/[/\\]/);
  return i[i.length - 1] || r;
}
function wr(e) {
  const r = Re(e), i = r.lastIndexOf(".");
  return i <= 0 || i === r.length - 1 ? "" : r.slice(i + 1).toLowerCase();
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
}, xr = {
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
      validator: (e) => gr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => br.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : kr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Re(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return yr;
      const e = wr(this.name);
      return _r[e] || vr;
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
}, Sr = ["aria-label"], Cr = ["title"];
function Lr(e, r, i, n, l, t) {
  const u = _("ui-icon");
  return a(), s("div", {
    class: k(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", t.rootSizeClass]),
    role: "img",
    "aria-label": t.ariaLabel
  }, [
    o("div", {
      class: k(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [t.shellClasses, t.folderShellClass]])
    }, [
      w(u, {
        name: t.resolvedIcon,
        type: t.resolvedIconType,
        size: t.iconSizeToken,
        class: k(t.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    o("span", {
      class: k(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", t.labelClass]),
      "aria-hidden": "true",
      title: t.fullLabel
    }, m(t.displayLabel), 11, Cr)
  ], 10, Sr);
}
const Tr = /* @__PURE__ */ x(xr, [["render", Lr]]);
function Ir(e) {
  const r = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!r.length) return null;
  const i = Math.min(...r.map((u) => u.top)), n = Math.min(...r.map((u) => u.left)), l = Math.max(...r.map((u) => u.right)), t = Math.max(...r.map((u) => u.bottom));
  return {
    top: i,
    left: n,
    right: l,
    bottom: t,
    width: l - n,
    height: t - i,
    x: n,
    y: i,
    toJSON: () => ({})
  };
}
function ne(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const r = e.closest(".ui-form-row");
  return r instanceof HTMLElement ? r : e;
}
function _e(e) {
  const r = ne(e);
  if (!r) return null;
  if (r.classList.contains("ui-form-row")) {
    const i = [
      r.querySelector(".ui-form-row-text"),
      r.querySelector(".ui-form-row-control")
    ].filter((l) => l instanceof HTMLElement), n = Ir(i.map((l) => l.getBoundingClientRect()));
    if (n) return n;
  }
  return r.getBoundingClientRect();
}
function Ar(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const r = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && r.push(n);
  return r;
}
const Mr = ["dialog", "popover", "card", "tour"], zr = ["solid", "regular", "brands", "light", "duotone", "thin"], Pr = [
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
], Vr = ["sm", "md", "lg", "xl", "2xl", "full"], O = 12, Or = 8, Er = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Mr.includes(e)
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
      validator: (e) => zr.includes(e)
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
      validator: (e) => Pr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Or
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Vr.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? ne(e) : typeof e == "string" && e.trim() ? ne(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const r = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const n = window.innerWidth, l = window.innerHeight, t = i.getBoundingClientRect(), u = t.width || 320, d = t.height || 180;
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
      const c = _e(r);
      if (!c) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, c.top - h), v = Math.max(0, c.left - h), A = Math.min(l, c.bottom + h), F = Math.min(n, c.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${v}px`,
        width: `${Math.max(0, F - v)}px`,
        height: `${Math.max(0, A - p)}px`
      };
      let V = A + O, R = v;
      this.placement.startsWith("top") ? V = p - d - O : this.placement.startsWith("right") ? (V = p, R = F + O) : this.placement.startsWith("left") ? (V = p, R = v - u - O) : this.placement.includes("end") && (R = F - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && V + d > l - O && (V = p - d - O), V = Math.max(O, Math.min(V, l - d - O)), R = Math.max(O, Math.min(R, n - u - O)), this.tourPanelStyle = {
        position: "fixed",
        top: `${V}px`,
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
        const r = _e(e);
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
          for (const i of Ar(r))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Rr = { class: "ui-guidance-footer" }, Br = { class: "ui-guidance-popover" }, Dr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Fr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Nr = { class: "ui-guidance-popover__text" }, $r = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Hr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Wr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Yr = ["aria-label"], Gr = { class: "ui-guidance-tour__content" }, Ur = { class: "ui-header-lead" }, Kr = { class: "ui-header-lead__main" }, jr = {
  key: 0,
  class: "ui-header-lead__icon"
}, qr = { class: "ui-header-lead__text" }, Zr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Qr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Xr = {
  key: 0,
  class: "ui-header-lead__actions"
}, Jr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, ea = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function ta(e, r, i, n, l, t) {
  const u = _("ui-button"), d = _("ui-card"), c = _("ui-dialog"), h = _("ui-icon"), p = _("ui-popover");
  return t.shouldRender ? (a(), s("div", {
    key: 0,
    class: k(t.rootShellClass)
  }, [
    i.mode === "card" ? (a(), y(d, {
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
      t.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          b(e.$slots, "footer", {}, () => [
            o("div", Rr, [
              i.showFooterClose ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: t.onClose
              }, {
                default: g(() => [
                  C(m(t.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              i.showGo ? (a(), y(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: t.onGo
              }, {
                default: g(() => [
                  C(m(t.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (a(), y(c, {
      key: 1,
      open: t.syncOpen,
      "onUpdate:open": r[0] || (r[0] = (v) => t.syncOpen = v),
      icon: i.icon,
      "icon-type": i.iconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      onAfterLeave: r[1] || (r[1] = (v) => e.$emit("after-leave"))
    }, j({
      default: g(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: t.onGo
          }, {
            default: g(() => [
              C(m(t.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (a(), y(p, {
      key: 2,
      open: t.syncOpen,
      "onUpdate:open": r[2] || (r[2] = (v) => t.syncOpen = v),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: g((v) => [
        b(e.$slots, "trigger", Be(De(v)))
      ]),
      content: g(() => [
        o("div", Br, [
          i.icon || i.title || i.description ? (a(), s("div", Dr, [
            i.icon ? (a(), s("span", Fr, [
              w(h, {
                name: i.icon,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            o("div", Nr, [
              i.title ? (a(), s("p", $r, m(i.title), 1)) : f("", !0),
              i.description ? (a(), s("p", Hr, m(i.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          t.hasFooterActions && !e.$slots.footer ? (a(), s("div", Wr, [
            i.showFooterClose ? (a(), y(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: t.onClose
            }, {
              default: g(() => [
                C(m(t.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            i.showGo ? (a(), y(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: t.onGo
            }, {
              default: g(() => [
                C(m(t.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (a(), y(Q, {
      key: 3,
      to: "body"
    }, [
      w(X, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: r[5] || (r[5] = (v) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          t.syncOpen ? (a(), s("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": l.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: r[4] || (r[4] = le((...v) => t.onEscape && t.onEscape(...v), ["esc"]))
          }, [
            i.closeOnBackdrop ? (a(), s("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: r[3] || (r[3] = (...v) => t.onBackdrop && t.onBackdrop(...v))
            })) : f("", !0),
            l.tourHighlightStyle ? (a(), s("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: E(l.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            o("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: E(l.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || t.resolvedGoLabel
            }, [
              o("div", Gr, [
                o("div", Ur, [
                  o("div", Kr, [
                    i.icon ? (a(), s("span", jr, [
                      w(h, {
                        name: i.icon,
                        type: i.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    o("div", qr, [
                      i.title ? (a(), s("p", Zr, m(i.title), 1)) : f("", !0),
                      i.description ? (a(), s("p", Qr, m(i.description), 1)) : f("", !0)
                    ])
                  ]),
                  i.showClose ? (a(), s("div", Xr, [
                    w(u, {
                      type: "button",
                      variant: "solid",
                      color: "secondary",
                      size: "sm",
                      cubed: "",
                      "prefix-icon": "xmark",
                      "aria-label": t.resolvedCloseLabel,
                      onClick: t.onClose
                    }, null, 8, ["aria-label", "onClick"])
                  ])) : f("", !0)
                ]),
                e.$slots.default ? (a(), s("div", Jr, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                t.hasFooterActions && !e.$slots.footer ? (a(), s("div", ea, [
                  i.showFooterClose ? (a(), y(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onClose
                  }, {
                    default: g(() => [
                      C(m(t.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  i.showGo ? (a(), y(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onGo
                  }, {
                    default: g(() => [
                      C(m(t.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Yr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const ia = /* @__PURE__ */ x(Er, [["render", ta]]), ra = ["solid", "regular", "brands", "light", "duotone", "thin"], aa = {
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
      validator: (e) => ra.includes(e)
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
      let i = r;
      e && (i = r.filter((l) => String(l).toLowerCase().includes(e)));
      const n = Number(this.maxResults);
      return Number.isFinite(n) && n > 0 ? i.slice(0, n) : i;
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
}, la = ["disabled", "aria-expanded", "onClick"], na = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, sa = { class: "ui-select-field-suffix" }, oa = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ua = { class: "ui-icon-picker-panel" }, ca = { class: "ui-icon-picker-panel__header" }, da = { class: "ui-icon-picker-panel__title" }, ha = { class: "ui-icon-picker-panel__search" }, fa = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, pa = {
  key: 1,
  class: "ui-icon-picker-grid"
}, ma = ["title", "onClick"];
function ga(e, r, i, n, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return a(), s("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: A }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: A
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", na, [
              w(u, {
                name: t.localIcon || "grid",
                type: i.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !t.localIcon }])
            }, m(t.localIcon || t.triggerLabel), 3),
            o("span", sa, [
              o("span", oa, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, la)
        ])
      ]),
      content: g(() => [
        o("div", ua, [
          o("div", ca, [
            o("span", da, m(t.popoverTitleLabel), 1),
            t.localIcon ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: P(t.clearIcon, ["stop"])
            }, {
              default: g(() => [
                C(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", ha, [
            w(c, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": r[0] || (r[0] = (p) => l.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: t.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          t.filteredIcons.length ? (a(), s("div", pa, [
            (a(!0), s(I, null, M(t.filteredIcons, (p) => (a(), s("button", {
              key: p,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": t.localIcon === p }]),
              title: p,
              onClick: (v) => t.selectIcon(p)
            }, [
              w(u, {
                name: p,
                type: i.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, ma))), 128))
          ])) : (a(), s("div", fa, m(t.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const ba = /* @__PURE__ */ x(aa, [["render", ga]]), ya = ["tr-TR", "en-US"], Z = oe({
  currency: "TRY",
  format: "tr-TR"
});
function va(e, r = Z.format) {
  return ya.includes(e) ? e : r;
}
function _a(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Z.currency = J(e.currency));
  const r = e.format ?? e.locale;
  r != null && (Z.format = va(r));
}
function ka() {
  return Fe(Z);
}
const wa = {
  name: "PriceInput",
  components: { CurrencyInput: Ee },
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
    return { priceInputConfig: ka() };
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
function xa(e, r, i, n, l, t) {
  const u = _("CurrencyInput");
  return a(), y(u, T({
    "model-value": i.modelValue,
    currency: t.resolvedCurrency,
    locale: t.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": r[0] || (r[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: r[1] || (r[1] = (d) => e.$emit("input", d)),
    onChange: r[2] || (r[2] = (d) => e.$emit("change", d)),
    onFocus: r[3] || (r[3] = (d) => e.$emit("focus", d)),
    onBlur: r[4] || (r[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Sa = /* @__PURE__ */ x(wa, [["render", xa]]);
function Ca(e) {
  const r = String(e ?? "");
  if (!r)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  r.length >= 8 && (i += 1), r.length >= 12 && (i += 1), /[a-z]/.test(r) && /[A-Z]/.test(r) ? i += 1 : /[a-zA-Z]/.test(r) && (i += 0.5), /\d/.test(r) && (i += 1), /[^a-zA-Z0-9]/.test(r) && (i += 1);
  const n = Math.min(4, Math.round(i)), l = ["weak", "fair", "good", "strong"], t = n <= 0 ? "weak" : l[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: t
  };
}
let re = 0;
const La = ["sm", "md", "lg"], Ta = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => La.includes(e)
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
    return re += 1, {
      fallbackId: `ui-password-${re}`,
      fallbackStrengthId: `ui-password-strength-${re}`,
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
      return Ca(this.modelValue);
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = n);
      return r;
    }
  }
}, Ia = ["aria-label", "aria-pressed", "disabled"], Aa = ["id", "aria-live"];
function Ma(e, r, i, n, l, t) {
  const u = _("ui-icon"), d = _("ui-input"), c = _("ui-progress");
  return a(), s("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    w(d, T({
      id: t.resolvedId,
      modelValue: t.innerValue,
      "onUpdate:modelValue": r[1] || (r[1] = (h) => t.innerValue = h),
      type: l.visible ? "text" : "password",
      class: "w-full",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength,
      "aria-describedby": t.strengthDescribedby
    }, t.passthroughAttrs, {
      onFocus: r[2] || (r[2] = (h) => e.$emit("focus", h)),
      onBlur: r[3] || (r[3] = (h) => e.$emit("blur", h))
    }), {
      append: g(() => [
        o("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": t.toggleAriaLabel,
          "aria-pressed": l.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: r[0] || (r[0] = (h) => l.visible = !l.visible)
        }, [
          w(u, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Ia)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    t.showStrengthMeter ? (a(), s("div", {
      key: 0,
      id: l.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": t.innerValue ? "polite" : "off"
    }, [
      w(c, {
        type: "bar",
        size: "md",
        value: t.strength.percent,
        variant: t.strengthVariant,
        "aria-valuetext": t.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      t.strength.label !== "empty" ? (a(), s("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${t.strength.label}`])
      }, m(t.strengthText), 3)) : f("", !0)
    ], 8, Aa)) : f("", !0)
  ], 2);
}
const za = /* @__PURE__ */ x(Ta, [["render", Ma]]), Pa = ["bar", "circle"], ke = ["sm", "md", "lg"], we = ["thin", "md"], Va = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, Oa = { sm: 1.5, md: 2, lg: 2 }, Ea = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Pa.includes(e)
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
      validator: (e) => Va.includes(e)
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
      return ke.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return we.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = G[this.circleSizeKey] ?? G.sm;
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
      const e = G[this.circleSizeKey] ?? G.sm, r = Oa[this.circleSizeKey] ?? 2, i = (e - r) / 2, n = e / 2, l = 2 * Math.PI * i, t = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: r, radius: i, center: n, circumference: l, offset: t };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ra = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Ba = ["width", "height", "viewBox"], Da = ["cx", "cy", "r", "stroke-width"], Fa = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Na = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function $a(e, r, i, n, l, t) {
  return a(), s("div", {
    class: k(t.rootClass),
    style: E(t.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : t.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : t.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (a(), s("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: t.circleMetrics.size,
      height: t.circleMetrics.size,
      viewBox: `0 0 ${t.circleMetrics.size} ${t.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      o("circle", {
        class: "ui-progress-circle-track",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke
      }, null, 8, Da),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke,
        "stroke-dasharray": t.circleMetrics.circumference,
        "stroke-dashoffset": t.circleMetrics.offset
      }, null, 8, Fa)
    ], 8, Ba)) : (a(), s("div", Na, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${t.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Ra);
}
const Ha = /* @__PURE__ */ x(Ea, [["render", $a]]), Wa = Me("ui-sheet"), Ya = ["left", "right"], Ga = ["sm", "md", "lg", "xl"], Ua = ["solid", "regular", "brands", "light", "duotone", "thin"], xe = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Ka = {
  name: "Sheet",
  components: { Divider: Ae },
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
      validator: (e) => Ya.includes(e)
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
      validator: (e) => Ga.includes(e)
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
      validator: (e) => Ua.includes(e)
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
    const e = Wa();
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
      return xe[this.size] || xe.md;
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
      return Ge(this.$attrs, ["class"]);
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
        Ye(e) || (this.focusFallbackTimer = setTimeout(() => {
          var i;
          this.focusFallbackTimer = null, (i = e.focus) == null || i.call(e);
        }, 50));
      });
    }
  }
}, ja = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], qa = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Za = {
  key: 0,
  class: "ui-sheet-header__icon"
}, Qa = ["id"], Xa = {
  key: 2,
  class: "ui-sheet-header__actions"
}, Ja = ["id"], el = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function tl(e, r, i, n, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("Divider");
  return l.portalReady ? (a(), y(Q, {
    key: 0,
    to: "body"
  }, [
    w(X, {
      name: t.transitionName,
      appear: "",
      onAfterEnter: t.onOverlayAfterEnter,
      onAfterLeave: t.onOverlayAfterLeave
    }, {
      default: g(() => [
        i.open ? (a(), s("div", {
          key: 0,
          ref: "layerRef",
          class: k(t.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: r[2] || (r[2] = (...h) => t.onLayerKeydown && t.onLayerKeydown(...h))
        }, [
          i.overlay ? (a(), s("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...h) => t.onBackdrop && t.onBackdrop(...h))
          })) : f("", !0),
          o("div", T({
            ref: "panelRef",
            class: t.panelClasses,
            role: "dialog",
            "aria-modal": i.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": t.ariaLabelledby,
            "aria-describedby": t.ariaDescribedby,
            "aria-label": t.ariaLabelAttr
          }, t.passthroughAttrs, {
            onClick: r[1] || (r[1] = P(() => {
            }, ["stop"]))
          }), [
            t.hasHeaderBlock ? (a(), s("div", qa, [
              b(e.$slots, "header", {}, () => [
                t.hasDefaultHeader ? (a(), s("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (a(), s("span", Za, [
                    w(u, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  i.title ? (a(), s("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(i.title), 9, Qa)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), s("div", Xa, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (a(), y(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": t.resolvedCloseLabel,
                    onClick: t.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  i.description ? (a(), s("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(i.description), 9, Ja)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), s("div", el, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            t.showHeaderDivider ? (a(), y(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), s("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), s("div", {
              key: 4,
              class: k(["ui-card-footer", { "ui-sheet-footer--borderless": !i.footerBorder }])
            }, [
              b(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, ja)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const il = /* @__PURE__ */ x(Ka, [["render", tl]]), rl = ["sm", "md", "lg", "full"], Se = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, al = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => rl.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        Se[this.width] || Se.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, ll = {
  key: 0,
  class: "ui-menu-header"
}, nl = { class: "ui-menu-body" }, sl = {
  key: 1,
  class: "ui-menu-footer"
};
function ol(e, r, i, n, l, t) {
  return a(), s("nav", T({ class: t.rootClass }, t.passthroughAttrs), [
    e.$slots.header ? (a(), s("div", ll, [
      b(e.$slots, "header")
    ])) : f("", !0),
    o("div", nl, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), s("div", sl, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const ul = /* @__PURE__ */ x(al, [["render", ol]]), cl = {
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
}, dl = {
  key: 0,
  class: "ui-menu-group-label"
}, hl = { class: "ui-menu-group-items" };
function fl(e, r, i, n, l, t) {
  return a(), s("div", T({ class: t.groupClass }, t.passthroughAttrs), [
    i.label ? (a(), s("p", dl, m(i.label), 1)) : f("", !0),
    o("div", hl, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const pl = /* @__PURE__ */ x(cl, [["render", fl]]), ml = {
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
function gl(e, r, i, n, l, t) {
  const u = _("ui-button");
  return a(), y(u, T({
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
    class: t.itemClass,
    "aria-current": i.active ? "page" : void 0
  }, t.forwardedAttrs, { onClick: t.onClick }), {
    default: g(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const bl = /* @__PURE__ */ x(ml, [["render", gl]]), yl = {
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
}, vl = ["aria-label"];
function _l(e, r, i, n, l, t) {
  return a(), s("div", T({
    class: t.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, vl);
}
const kl = /* @__PURE__ */ x(yl, [["render", _l]]), wl = ["horizontal", "vertical"], xl = ["default", "pills"], Sl = {
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
      validator: (e) => xl.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => wl.includes(e)
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
      const r = this.normalizedSteps.length - 1, i = Math.min(r, Math.max(0, e));
      this.$emit("update:modelValue", i);
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
}, Cl = ["aria-label"], Ll = { class: "ui-stepper-pills-track" }, Tl = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Il = { class: "flex w-full min-w-0 items-center justify-center" }, Al = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Ml = {
  key: 1,
  class: "tabular-nums"
}, zl = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Pl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Vl = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ol = { class: "flex flex-col items-center" }, El = {
  key: 1,
  class: "tabular-nums"
}, Rl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Bl = { class: "ui-stepper-title" }, Dl = {
  key: 0,
  class: "ui-stepper-description"
};
function Fl(e, r, i, n, l, t) {
  const u = _("ui-icon");
  return a(), s("div", T({
    class: t.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, t.passthroughAttrs), [
    i.variant === "pills" ? (a(), s(I, { key: 0 }, [
      o("div", Ll, [
        (a(!0), s(I, null, M(t.normalizedSteps, (d, c) => (a(), y(K(i.interactive ? "button" : "span"), T({
          key: c,
          class: ["ui-stepper-pill", t.pillClass(c)],
          role: "listitem",
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (a(), s("p", Tl, m(t.pillsLabel), 1)) : f("", !0)
    ], 64)) : i.direction === "horizontal" ? (a(!0), s(I, { key: 1 }, M(t.normalizedSteps, (d, c) => (a(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", Il, [
        c > 0 ? (a(), s("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), s("span", Al)),
        (a(), y(K(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), s("span", Ml, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), s("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), s("span", zl))
      ]),
      o("p", Pl, m(d.title), 1),
      d.description ? (a(), s("p", Vl, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), s(I, { key: 2 }, M(t.normalizedSteps, (d, c) => (a(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", Ol, [
        (a(), y(K(i.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), s("span", El, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), s("span", {
          key: 0,
          class: k(["ui-stepper-vrail", t.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      o("div", Rl, [
        o("p", Bl, m(d.title), 1),
        d.description ? (a(), s("p", Dl, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Cl);
}
const Nl = /* @__PURE__ */ x(Sl, [["render", Fl]]);
let Ce = 0;
const $l = {
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
    return Ce += 1, { fallbackId: `ui-slider-${Ce}` };
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = n);
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
}, Hl = {
  key: 0,
  class: "ui-slider-header"
}, Wl = {
  key: 0,
  class: "ui-form-label"
}, Yl = {
  key: 1,
  class: "ui-slider-value"
}, Gl = { class: "ui-slider-rail" }, Ul = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Kl = {
  key: 1,
  class: "ui-slider-scale"
}, jl = { key: 0 }, ql = { key: 1 };
function Zl(e, r, i, n, l, t) {
  const u = _("ui-progress");
  return a(), s("div", {
    class: k(t.rootClass)
  }, [
    i.label || t.hasValue ? (a(), s("div", Hl, [
      i.label ? (a(), s("span", Wl, m(i.label), 1)) : f("", !0),
      t.hasValue ? (a(), s("span", Yl, m(i.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    o("div", Gl, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: t.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", T(t.passthroughAttrs, {
        id: t.resolvedId,
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
        onInput: r[0] || (r[0] = (...d) => t.onNativeInput && t.onNativeInput(...d)),
        onChange: r[1] || (r[1] = (...d) => t.onChange && t.onChange(...d))
      }), null, 16, Ul)
    ]),
    i.minLabel || i.maxLabel ? (a(), s("div", Kl, [
      i.minLabel ? (a(), s("span", jl, m(i.minLabel), 1)) : f("", !0),
      i.maxLabel ? (a(), s("span", ql, m(i.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const Ql = /* @__PURE__ */ x($l, [["render", Zl]]);
let Le = 0;
const Xl = {
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
    return Le += 1, { fallbackId: `ui-switch-${Le}` };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), r = {};
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = n);
      return r;
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
}, Jl = ["id", "aria-checked", "disabled", "aria-describedby"];
function en(e, r, i, n, l, t) {
  return a(), s("button", T({
    type: "button",
    role: "switch",
    id: t.resolvedId,
    class: [
      "ui-switch",
      t.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": i.modelValue ? "true" : "false",
    disabled: i.disabled,
    "aria-describedby": i.ariaDescribedby
  }, t.passthroughAttrs, {
    onClick: r[0] || (r[0] = (...u) => t.toggle && t.toggle(...u)),
    onKeydown: r[1] || (r[1] = (...u) => t.onKeydown && t.onKeydown(...u))
  }), [
    o("span", {
      class: k(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      o("span", {
        class: k(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Jl);
}
const tn = /* @__PURE__ */ x(Xl, [["render", en]]), rn = {
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
}, an = { class: "ui-table-scroll" };
function ln(e, r, i, n, l, t) {
  return a(), s("div", an, [
    o("table", T({ class: t.rootClass }, t.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const nn = /* @__PURE__ */ x(rn, [["render", ln]]), sn = {
  name: "TableBody"
}, on = { class: "ui-table-body" };
function un(e, r, i, n, l, t) {
  return a(), s("tbody", on, [
    b(e.$slots, "default")
  ]);
}
const cn = /* @__PURE__ */ x(sn, [["render", un]]), dn = ["left", "center", "right"], hn = ["title", "secondary", "body"], fn = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => dn.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || hn.includes(e)
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
}, pn = ["colspan"];
function mn(e, r, i, n, l, t) {
  return a(), s("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, pn);
}
const gn = /* @__PURE__ */ x(fn, [["render", mn]]), bn = ["left", "center", "right"], yn = ["sm", "md", "lg"], vn = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => bn.includes(e)
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
      if (!(this.iconCol || yn.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function _n(e, r, i, n, l, t) {
  return a(), s("th", {
    class: k(t.rootClass),
    style: E(t.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const kn = /* @__PURE__ */ x(vn, [["render", _n]]), wn = {
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
function xn(e, r, i, n, l, t) {
  return a(), s("thead", {
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Sn = /* @__PURE__ */ x(wn, [["render", xn]]), Cn = {
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
}, Ln = { class: "ui-table-pagination" }, Tn = { class: "ui-table-pagination-meta" }, In = { class: "ui-table-pagination-nav" }, An = { class: "ui-table-pagination-page" };
function Mn(e, r, i, n, l, t) {
  const u = _("ui-button");
  return a(), s("div", Ln, [
    o("div", Tn, [
      b(e.$slots, "meta", {}, () => [
        C(m(i.metaText), 1)
      ])
    ]),
    o("div", In, [
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !t.canPrev,
        "aria-label": i.prevAriaLabel,
        onClick: r[0] || (r[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      o("div", An, m(i.pageLabel), 1),
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !t.canNext,
        "aria-label": i.nextAriaLabel,
        onClick: r[1] || (r[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const zn = /* @__PURE__ */ x(Cn, [["render", Mn]]), Pn = ["none", "soft", "strong"], Vn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Pn.includes(e)
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
function On(e, r, i, n, l, t) {
  return a(), s("tr", {
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const En = /* @__PURE__ */ x(Vn, [["render", On]]), Rn = {
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
}, Bn = ["id", "aria-labelledby"];
function Dn(e, r, i, n, l, t) {
  return Ne((a(), s("div", T({
    role: "tabpanel",
    id: t.panelDomId,
    "aria-labelledby": t.triggerDomId,
    class: t.panelClass
  }, t.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Bn)), [
    [$e, t.isActive]
  ]);
}
const Fn = /* @__PURE__ */ x(Rn, [["render", Dn]]), Nn = Me("ui-timepicker"), ae = 40;
function $(e) {
  return String(e).padStart(2, "0");
}
const $n = {
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
      fallbackId: Nn(),
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
      for (let i = 0; i < 60; i += e)
        r.push(i);
      return r;
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
    display() {
      return this.menuOpen ? `${$(this.draftHour)}:${$(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.resolvedPlaceholder;
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
    pad2: $,
    applyModelToDraft() {
      const e = this.modelValue;
      let r = 0, i = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (r = Math.min(23, Math.max(0, parseInt(n[1], 10))), i = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const l = this.minuteValues;
      let t = l[0] ?? 0, u = 999;
      for (const d of l) {
        const c = Math.abs(d - i);
        c < u && (u = c, t = d);
      }
      this.draftHour = r, this.draftMinute = t;
    },
    wheelItemHeight(e) {
      if (!e) return ae;
      const r = e.querySelector(".ui-timepicker-wheel-item");
      if (!r) return ae;
      const i = r.getBoundingClientRect().height;
      return i > 0 ? i : ae;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const r = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!r) return (e.clientHeight - i) / 2;
      const n = parseFloat(window.getComputedStyle(r).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, r) {
      const i = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, t = Math.round((l - n - i / 2) / i);
      return Math.min(r, Math.max(0, t));
    },
    scrollTopForIndex(e, r) {
      const i = this.wheelItemHeight(e), n = this.wheelSpacerTop(e);
      return Math.max(0, n + r * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, r, { smooth: i = !1 } = {}) {
      if (!e) return;
      const n = this.scrollTopForIndex(e, r);
      i && typeof e.scrollTo == "function" ? e.scrollTo({ top: n, behavior: "smooth" }) : e.scrollTop = n;
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
      const r = this.minuteValues;
      if (!r.length) return;
      const i = Math.min(r.length - 1, Math.max(0, e));
      this.draftMinute = r[i], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, i, { smooth: !0 }), window.setTimeout(() => {
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
      const i = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[i];
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
      const e = `${$(this.draftHour)}:${$(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.indexFromScroll(e, 23);
      this.draftHour = r;
      const i = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - i) > 0.5 && (e.scrollTop = i), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const r = this.minuteValues;
      if (!r.length) return;
      const i = this.indexFromScroll(e, r.length - 1);
      this.draftMinute = r[i];
      const n = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, Hn = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Wn = { class: "ui-timepicker-wheels" }, Yn = { class: "ui-timepicker-wheels-row" }, Gn = ["aria-valuenow", "aria-label"], Un = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Kn = { class: "ui-timepicker-wheel-spacer" }, jn = ["onClick"], qn = ["aria-valuenow", "aria-label"], Zn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Qn = { class: "ui-timepicker-wheel-spacer" }, Xn = ["onClick"], Jn = { class: "min-w-0 flex-1 truncate text-foreground" }, es = { class: "ui-timepicker-panel w-full p-2" }, ts = { class: "ui-timepicker-wheels" }, is = { class: "ui-timepicker-wheels-row" }, rs = ["aria-valuenow", "aria-label"], as = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, ls = { class: "ui-timepicker-wheel-spacer" }, ns = ["onClick"], ss = ["aria-valuenow", "aria-label"], os = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, us = { class: "ui-timepicker-wheel-spacer" }, cs = ["onClick"];
function ds(e, r, i, n, l, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return a(), s("div", {
    class: k([
      "ui-timepicker",
      i.embedded ? "ui-timepicker--embedded" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (a(), s("div", Hn, [
      o("div", Wn, [
        r[2] || (r[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Yn, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": t.hourAriaLabel
          }, [
            o("div", Un, [
              o("div", Kn, [
                (a(!0), s(I, null, M(t.hourOptions, (c) => (a(), s("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => t.selectHour(c)
                }, m(t.pad2(c)), 11, jn))), 128))
              ])
            ], 512)
          ], 8, Gn),
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
            "aria-label": t.minuteAriaLabel
          }, [
            o("div", Zn, [
              o("div", Qn, [
                (a(!0), s(I, null, M(t.minuteValues, (c, h) => (a(), s("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => t.selectMinute(h)
                }, m(t.pad2(c)), 11, Xn))), 128))
              ])
            ], 512)
          ], 8, qn)
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
      "onUpdate:open": r[0] || (r[0] = (c) => l.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: p }) => [
        b(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: p
        }, () => [
          w(u, {
            type: "button",
            id: t.resolvedId,
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
              o("span", Jn, m(t.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        o("div", es, [
          o("div", ts, [
            r[6] || (r[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", is, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": t.hourAriaLabel
              }, [
                o("div", as, [
                  o("div", ls, [
                    (a(!0), s(I, null, M(t.hourOptions, (c) => (a(), s("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => t.selectHour(c)
                    }, m(t.pad2(c)), 11, ns))), 128))
                  ])
                ], 512)
              ], 8, rs),
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
                "aria-label": t.minuteAriaLabel
              }, [
                o("div", os, [
                  o("div", us, [
                    (a(!0), s(I, null, M(t.minuteValues, (c, h) => (a(), s("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => t.selectMinute(h)
                    }, m(t.pad2(c)), 11, cs))), 128))
                  ])
                ], 512)
              ], 8, ss)
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
const Te = /* @__PURE__ */ x($n, [["render", ds]]), hs = ["square", "video", "auto"], fs = ["fill", "sm", "md", "lg"], Ie = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, ps = {
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
      validator: (e) => hs.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => fs.includes(e)
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
        Ie[this.size] || Ie.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), r = {};
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = n);
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
}, ms = ["src", "alt"], gs = ["aria-hidden"], bs = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, ys = {
  key: 3,
  class: "ui-photo__overflow"
}, vs = ["aria-label"], _s = ["aria-label"], ks = { class: "ui-photo-preview__panel" }, ws = ["src", "alt"], xs = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Ss(e, r, i, n, l, t) {
  const u = _("ui-icon"), d = _("ui-button");
  return a(), s(I, null, [
    (a(), y(K(t.rootTag), T({
      type: i.interactive ? "button" : void 0,
      class: t.rootClass
    }, t.rootBind, { onClick: t.onClick }), {
      default: g(() => [
        i.src && !l.imageFailed ? (a(), s("img", {
          key: 0,
          src: i.src,
          alt: t.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: r[0] || (r[0] = (c) => l.imageFailed = !0)
        }, null, 40, ms)) : (a(), s("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, gs)),
        i.favorite ? (a(), s("span", bs, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        i.overflowLabel ? (a(), s("span", ys, m(i.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), y(Q, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: r[2] || (r[2] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[1] || (r[1] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, _s),
            o("div", ks, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: P(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), s("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, ws)) : f("", !0),
              t.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: P(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), s("p", xs, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, vs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Cs = /* @__PURE__ */ x(ps, [["render", Ss]]), Ls = ["square", "video", "auto"], Ts = {
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
      validator: (e) => Ls.includes(e)
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
}, Is = ["data-count"], As = ["aria-label"], Ms = ["aria-label"], zs = { class: "ui-photo-preview__panel" }, Ps = ["src", "alt"], Vs = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Os(e, r, i, n, l, t) {
  const u = _("ui-photo"), d = _("ui-button");
  return a(), s(I, null, [
    o("div", {
      class: k(["ui-photos", t.layoutClass]),
      "data-count": t.displayCount
    }, [
      (a(!0), s(I, null, M(t.visibleItems, (c, h) => (a(), y(u, {
        key: c.key || `${c.src}-${h}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": h,
        "overflow-label": h === t.visibleItems.length - 1 && t.overflowCount > 0 ? t.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: t.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, Is),
    (a(), y(Q, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: r[1] || (r[1] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[0] || (r[0] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, Ms),
            o("div", zs, [
              w(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), y(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: P(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), s("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Ps)) : f("", !0),
              t.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: P(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), s("p", Vs, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, As)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Es = /* @__PURE__ */ x(Ts, [["render", Os]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function $s() {
  return {
    push: N,
    dismiss: Ke,
    clear: Ue,
    info: (e) => N({ ...U(e), variant: "info" }),
    success: (e) => N({ ...U(e), variant: "success" }),
    warning: (e) => N({ ...U(e), variant: "warning" }),
    error: (e) => N({ ...U(e), variant: "error" })
  };
}
function Hs(e = !1) {
  return oe({
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
function Ws() {
  return {
    confirm: Ai
  };
}
const se = {
  en: qe,
  tr: ze
};
function Ys(e = "tr") {
  return se[e] ?? se.tr;
}
const Gs = ze, Rs = [
  ["ui-action-card", Vt],
  ["ui-action-card-list", Bt],
  ["ui-action-group", Ze],
  ["ui-ai-button", Ht],
  ["ui-alert", Qe],
  ["ui-avatar", Xe],
  ["ui-avatar-group", Kt],
  ["ui-badge", Je],
  ["ui-button", et],
  ["ui-card", tt],
  ["ui-checkbox", xi],
  ["ui-checkbox-group", Ii],
  ["ui-color-picker", ui],
  ["ui-currency-input", Ee],
  ["ui-confirm-dialog", Pi],
  ["ui-date-picker", it],
  ["ui-date-range-picker", Ki],
  ["ui-dialog", rt],
  ["ui-divider", Ae],
  ["ui-dropdown", at],
  ["ui-empty", lt],
  ["ui-field", ir],
  ["ui-field-action", mr],
  ["ui-file", Tr],
  ["ui-form-row", nt],
  ["ui-guidance", ia],
  ["ui-icon", st],
  ["ui-icon-picker", ba],
  ["ui-input", ot],
  ["ui-price-input", Sa],
  ["ui-password", za],
  ["ui-phone", ut],
  ["ui-pin", ct],
  ["ui-list", dt],
  ["ui-list-item", ht],
  ["ui-popover", ft],
  ["ui-progress", Ha],
  ["ui-radio", pt],
  ["ui-radio-group", mt],
  ["ui-select", gt],
  ["ui-sheet", il],
  ["ui-menu", ul],
  ["ui-menu-group", pl],
  ["ui-menu-item", bl],
  ["ui-menu-nav", kl],
  ["ui-segment", bt],
  ["ui-segment-group", yt],
  ["ui-skeleton", vt],
  ["ui-slider", Ql],
  ["ui-stepper", Nl],
  ["ui-switch", tn],
  ["ui-table", nn],
  ["ui-table-body", cn],
  ["ui-table-cell", gn],
  ["ui-table-head", kn],
  ["ui-table-header", Sn],
  ["ui-table-pagination", zn],
  ["ui-table-row", En],
  ["ui-tag", _t],
  ["ui-tab-list", kt],
  ["ui-tab-panel", Fn],
  ["ui-tabs", wt],
  ["ui-tab-trigger", xt],
  ["ui-time-picker", Te],
  ["ui-timepicker", Te],
  ["ui-tooltip", St],
  ["ui-toast", Ct],
  ["ui-photo", Cs],
  ["ui-photos", Es]
];
function Bs(e, r = {}) {
  var d, c;
  const { i18n: i, locale: n, locales: l, theme: t, priceInput: u } = r;
  if (t && je(t), u && _a(u), (d = i == null ? void 0 : i.global) != null && d.mergeLocaleMessage) {
    const h = l ?? (n != null ? [n] : [
      typeof i.global.locale == "string" ? i.global.locale : ((c = i.global.locale) == null ? void 0 : c.value) ?? "tr"
    ]);
    for (const p of h) {
      const v = se[p];
      v && i.global.mergeLocaleMessage(p, v);
    }
  }
  for (const [h, p] of Rs)
    e.component(h, p);
}
const Us = {
  install: Bs
};
export {
  Vt as ActionCard,
  Bt as ActionCardList,
  Ze as ActionGroup,
  Ht as AiButton,
  Qe as Alert,
  Xe as Avatar,
  Kt as AvatarGroup,
  Je as Badge,
  et as Button,
  tt as Card,
  xi as Checkbox,
  Ii as CheckboxGroup,
  ui as ColorPicker,
  Pi as ConfirmDialog,
  Ee as CurrencyInput,
  it as DatePicker,
  Ki as DateRangePicker,
  rt as Dialog,
  Ae as Divider,
  at as Dropdown,
  lt as Empty,
  qs as FEW_COLOR_SCALE,
  Zs as FEW_PALETTE_ID,
  Qs as FEW_PRIMARY,
  Xs as FEW_PRIMARY_FOREGROUND,
  ir as Field,
  mr as FieldAction,
  Tr as File,
  nt as FormRow,
  Js as GOOGLE_FONTS_CATALOG,
  ia as Guidance,
  st as Icon,
  ba as IconPicker,
  ot as Input,
  dt as List,
  ht as ListItem,
  ul as Menu,
  pl as MenuGroup,
  bl as MenuItem,
  kl as MenuNav,
  ya as PRICE_FORMATS,
  za as Password,
  ut as Phone,
  Cs as Photo,
  Es as Photos,
  ct as Pin,
  ft as Popover,
  Sa as PriceInput,
  Ha as Progress,
  pt as Radio,
  mt as RadioGroup,
  bt as Segment,
  yt as SegmentGroup,
  gt as Select,
  il as Sheet,
  vt as Skeleton,
  Ql as Slider,
  Nl as Stepper,
  tn as Switch,
  eo as THEME_CUSTOM_CSS_ID,
  to as THEME_PRESETS,
  io as THEME_PRESET_IDS,
  kt as TabList,
  Fn as TabPanel,
  xt as TabTrigger,
  nn as Table,
  cn as TableBody,
  gn as TableCell,
  kn as TableHead,
  Sn as TableHeader,
  zn as TablePagination,
  En as TableRow,
  wt as Tabs,
  _t as Tag,
  Te as TimePicker,
  Ct as Toast,
  St as Tooltip,
  ro as applyGoogleFontsForTheme,
  ao as applyThemeCustomCss,
  je as applyUiTheme,
  lo as buildGoogleFontsLinkTag,
  no as buildGoogleFontsStylesheetUrl,
  so as buildThemeStyleAttr,
  oo as clearThemeCustomCss,
  Ue as clearToasts,
  uo as createUiId,
  Me as createUiIdFactory,
  Us as default,
  co as deriveBrandColorsFromPrimary,
  Ke as dismissToast,
  Ns as formatCurrencyAmount,
  di as formatMoneyInput,
  Pe as getCurrencySymbol,
  ho as getFewPrimaryColors,
  Oe as getMoneySeparators,
  ka as getPriceInputConfig,
  fo as getThemePreset,
  Ys as getUiMessages,
  po as googleFontSelectOptions,
  mo as mergeUiTheme,
  ci as parseLocalizedMoneyInput,
  Ge as pickPassthroughAttrs,
  N as pushToast,
  Ai as requestConfirm,
  go as resetUiIds,
  bo as resolveControlSize,
  J as resolveCurrencyCode,
  yo as resolvePrimaryColor,
  vo as resolveThemeFontFamilies,
  _o as resolveThemePreset,
  ko as resolveThemeVars,
  z as resolveUiText,
  Ve as sanitizeMoneyInput,
  _a as setPriceInputConfig,
  Gs as uiMessagesTr,
  Ws as useConfirm,
  Hs as useDialog,
  $s as useToast,
  wo as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
