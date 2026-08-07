import { resolveComponent as v, openBlock as l, createElementBlock as s, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as d, toDisplayString as p, normalizeStyle as E, createVNode as S, mergeProps as T, withCtx as g, withModifiers as M, createTextVNode as C, Fragment as x, renderList as z, withKeys as le, reactive as se, normalizeProps as Ae, guardReactiveProps as ze, createSlots as j, Teleport as Q, Transition as X, readonly as De, resolveDynamicComponent as K, withDirectives as Fe, vShow as Ne } from "vue";
import { _ as w, ac as P, N as L, a7 as $e, Y as He, f as oe, X as We, a3 as Ye, Q as Me, a1 as Ge, a6 as Ue, M as Ke, V as je, a4 as N, ad as Pe, y as qe, W as Ze, A as Qe, a as Xe, b as Je, B as et, c as tt, C as it, d as rt, e as lt, E as at, j as nt, I as st, k as ot, P as ut, L as ct, l as dt, m as ht, R as ft, n as mt, S as pt, o as gt, t as bt, q as yt, s as vt, r as _t, v as kt, u as wt } from "./index-M4oSugpb.js";
import { F as go, g as bo, h as yo, i as vo, G as _o, D as ko, T as wo, p as So, w as xo, x as Co, z as Lo, H as To, J as Io, K as Ao, O as zo, U as Mo, Z as Po, $ as Oo, a0 as Vo, a2 as Eo, a5 as Bo, a8 as Ro, a9 as Do, aa as Fo, ab as No, ae as $o } from "./index-M4oSugpb.js";
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
function At(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (u) => e.$emit("click", u))
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
    d("span", Lt, [
      d("span", Tt, p(r.title), 1),
      r.description ? (l(), s("span", It, p(r.description), 1)) : f("", !0)
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
  ], 10, Ct);
}
const zt = /* @__PURE__ */ w(xt, [["render", At]]), Mt = {
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
}, Pt = ["aria-label"];
function Ot(e, t, r, n, a, i) {
  return l(), s("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: E(i.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Pt);
}
const Vt = /* @__PURE__ */ w(Mt, [["render", Ot]]), Et = {
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
function Dt(e, t, r, n, a, i) {
  const o = v("ui-button");
  return l(), s("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": i.resolvedSize,
    style: E(i.rootStyle)
  }, [
    t[1] || (t[1] = d("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    d("span", Rt, [
      S(o, T({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: r.size,
        "prefix-icon": r.prefixIcon,
        disabled: r.disabled,
        loading: r.loading,
        fulled: i.isBlock
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
const Ft = /* @__PURE__ */ w(Et, [["render", Dt]]), Nt = [
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
], $t = {
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
      presetColors: Nt
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
}, Ht = ["disabled", "aria-expanded", "onClick"], Wt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Yt = { class: "ui-select-field-suffix" }, Gt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ut = { class: "ui-color-picker-panel" }, Kt = { class: "ui-color-picker-panel__header" }, jt = { class: "ui-color-picker-panel__title" }, qt = { class: "ui-color-picker-swatches" }, Zt = ["title", "onClick"], Qt = { class: "ui-color-picker-custom" }, Xt = { class: "ui-color-picker-panel__title" }, Jt = { class: "ui-color-picker-custom__row" };
function ei(e, t, r, n, a, i) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("ui-input"), h = v("ui-popover");
  return l(), s("div", {
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
            d("span", Wt, [
              i.localColor ? (l(), s("span", {
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
            d("span", Yt, [
              d("span", Gt, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Ht)
        ])
      ]),
      content: g(() => [
        d("div", Ut, [
          d("div", Kt, [
            d("span", jt, p(i.popoverTitleLabel), 1),
            i.localColor ? (l(), y(u, {
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
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", qt, [
            (l(!0), s(x, null, z(a.presetColors, (m) => (l(), s("button", {
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
            ], 14, Zt))), 128))
          ]),
          d("div", Qt, [
            d("span", Xt, p(i.customColorLabelText), 1),
            d("div", Jt, [
              S(c, {
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
const ti = /* @__PURE__ */ w($t, [["render", ei]]), fe = {
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
function J(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in H ? t : "TRY";
  const r = String(e).trim();
  if (fe[r])
    return fe[r];
  const n = r.toUpperCase();
  return H[n] ? n : t in H ? t : "TRY";
}
function Oe(e) {
  var r;
  const t = J(e);
  if (H[t])
    return H[t];
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
function no(e, t, r = "tr-TR") {
  const n = Number(e) || 0, a = J(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(n);
  } catch {
    return `${Oe(a)}${n.toFixed(2)}`;
  }
}
function Ve(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const n = t.slice(0, r), a = t.slice(r + 1).replace(/\./g, "");
    t = `${n}.${a}`;
  }
  return t;
}
function Ee(e = "tr-TR") {
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
function ii(e, t = "tr-TR") {
  const { group: r, decimal: n } = Ee(t);
  let a = String(e ?? "").trim();
  return a ? (a = a.split(r).join(""), a = a.split(n).join("."), Ve(a)) : "";
}
function ri(e, t = "tr-TR") {
  const r = Ve(e);
  if (!r) return "";
  const { group: n, decimal: a } = Ee(t), [i = "", o] = r.split("."), c = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return o === void 0 ? c : `${c}${a}${o}`;
}
let me = 0;
const li = ["sm", "md", "lg"], ai = {
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
      validator: (e) => li.includes(e)
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
      return Oe(this.currency);
    },
    resolvedCurrencyCode() {
      return J(this.currency);
    },
    innerValue: {
      get() {
        return ri(this.modelValue, this.locale);
      },
      set(e) {
        const t = ii(e, this.locale);
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
}, ni = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function si(e, t, r, n, a, i) {
  const o = v("ui-input");
  return l(), y(o, T({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => i.innerValue = u),
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
    onFocus: t[1] || (t[1] = (u) => e.$emit("focus", u)),
    onBlur: i.onBlur
  }), {
    prepend: g(() => [
      d("span", ni, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Be = /* @__PURE__ */ w(ai, [["render", si]]), oi = {
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
}, ui = ["type", "name", "value", "checked"], ci = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, di = { class: "ui-checkbox-body" }, hi = {
  key: 0,
  class: "ui-checkbox-label"
}, fi = {
  key: 1,
  class: "ui-checkbox-description"
};
function mi(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("label", {
    class: k(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = le(M((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = le(M((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.onNativeChange && i.onNativeChange(...u))
    }, null, 40, ui),
    d("span", ci, [
      i.isChecked ? (l(), y(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    d("span", di, [
      e.$slots.label || r.label ? (l(), s("span", hi, [
        b(e.$slots, "label", {}, () => [
          C(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (l(), s("span", fi, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const pi = /* @__PURE__ */ w(oi, [["render", mi]]), gi = ["list", "button", "List", "Button"];
let pe = 0;
const bi = {
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
      validator: (e) => gi.includes(e)
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
}, yi = ["aria-label"];
function vi(e, t, r, n, a, i) {
  return l(), s("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, yi);
}
const _i = /* @__PURE__ */ w(bi, [["render", vi]]), I = se({
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
function ki(e = {}) {
  return new Promise((t) => {
    I.title = e.title ?? "", I.description = e.description ?? "", I.confirmLabel = e.confirmLabel ?? "", I.cancelLabel = e.cancelLabel ?? "", I.destructive = !!e.destructive, I._resolve = t, I.open = !0;
  });
}
function ee(e) {
  const t = I._resolve;
  I.open = !1, I._resolve = null, t && t(!!e);
}
const wi = {
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
function Si(e, t, r, n, a, i) {
  const o = v("ui-button"), u = v("ui-dialog");
  return l(), y(u, {
    open: i.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (c) => i.syncOpen = c),
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
          C(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      S(o, {
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
const xi = /* @__PURE__ */ w(wi, [["render", Si]]);
let ge = 0;
function W(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), n = Number(t[2]) - 1, a = Number(t[3]), i = new Date(r, n, a);
  return i.getFullYear() !== r || i.getMonth() !== n || i.getDate() !== a ? null : i;
}
function R(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function te(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function be(e, t, r, n) {
  const a = `${e}-${W(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${W(t + 1)}-${W(i)}`;
  if (r && o > r && (o = r), n && a < n && o < n) return null;
  let u = a;
  return n && u < n && (u = n), R(u, o) > 0 ? null : [u, o];
}
const Ci = {
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
    var n, a;
    ge += 1;
    const e = ge, t = ((n = this.modelValue) == null ? void 0 : n[0]) || "", r = Y(t) || Y((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
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
      return $e((e = this.$i18n) == null ? void 0 : e.locale);
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
      const n = D(r), a = e.getMonth(), i = e.getFullYear(), o = new Date(i, a - 1, 1), u = o.getFullYear(), c = o.getMonth(), h = (_, A) => typeof this.$t == "function" ? this.$t(_, A) : _;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: te(i, a, this.locale)
          }),
          range: be(i, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: te(u, c, this.locale)
          }),
          range: be(u, c, this.maxYmd, this.minYmd)
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
      const e = Y(this.startYmd) || Y(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (n) => n ? He(n, this.locale) || n : "…";
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
      const r = new Date(e, t, 1), n = new Date(e, t, 1 - r.getDay()), a = this.previewStart, i = this.previewEnd, o = a && i, u = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), m = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), A = D(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, O = D(/* @__PURE__ */ new Date()) === A, B = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let ue = !1, ce = !1;
        if (o) {
          const de = R(a, i) <= 0 ? a : i, he = R(a, i) <= 0 ? i : a;
          ue = R(A, de) >= 0 && R(A, he) <= 0, ce = A === de || A === he;
        }
        u.push({
          key: F,
          d: _,
          date: h,
          today: O,
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
      const [r, n] = e.range;
      this.pickingStart = r, this.pickingEnd = n, this.$emit("update:modelValue", [r, n]), this.$emit("change", [r, n]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, a = r;
      if (R(a, n) < 0) {
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
}, Li = { class: "min-w-0 flex-1 truncate text-foreground" }, Ti = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Ii = { class: "ui-daterangepicker-layout" }, Ai = ["aria-label"], zi = { class: "ui-daterangepicker-calendars" }, Mi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Pi = { class: "ui-daterangepicker-month-row" }, Oi = { class: "mb-2 flex items-center justify-between gap-2" }, Vi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ei = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Bi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ri = { class: "ui-datepicker-grid" };
function Di(e, t, r, n, a, i) {
  const o = v("ui-button"), u = v("ui-popover");
  return l(), s("div", {
    class: k(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(u, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (c) => a.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: c,
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
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", Li, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: c }) => [
        d("div", Ti, [
          d("div", Ii, [
            d("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (l(!0), s(x, null, z(i.quickPresets, (h) => (l(), y(o, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (m) => i.applyQuick(h, c)
              }, {
                default: g(() => [
                  C(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Ai),
            d("div", zi, [
              i.rangeHint ? (l(), s("p", Mi, p(i.rangeHint), 1)) : f("", !0),
              d("div", Pi, [
                (l(!0), s(x, null, z(i.calendarPanes, (h) => (l(), s("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", Oi, [
                    h.showPrev ? (l(), y(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = M((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), s("span", Vi)),
                    d("span", Ei, p(h.title), 1),
                    h.showNext ? (l(), y(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = M((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), s("span", Bi))
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
                  d("div", Ri, [
                    (l(!0), s(x, null, z(h.cells, (m) => (l(), y(o, {
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
                      onClick: (_) => i.pick(m, c)
                    }, {
                      default: g(() => [
                        C(p(m.d), 1)
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
const Fi = /* @__PURE__ */ w(Ci, [["render", Di]]), Ni = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], $i = {
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
      validator: (e) => Ni.includes(e)
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
function Hi(e, t, r, n, a, i) {
  const o = v("Divider"), u = v("ui-button"), c = v("ui-popover");
  return l(), y(c, {
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
      b(e.$slots, "trigger", Ae(ze(h)))
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
        }) : (l(!0), s(x, { key: 1 }, z(r.items, (m, _) => (l(), s(x, { key: _ }, [
          m.divider ? (l(), y(o, {
            key: 0,
            spacing: "sm"
          })) : (l(), y(u, {
            key: 1,
            variant: "ghost",
            color: i.itemColor(m),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.icon || null,
            "suffix-icon": m.suffixIcon || m.suffix_icon || null,
            disabled: m.disabled,
            onClick: M((A) => i.onItem(m, h), ["stop"])
          }, {
            default: g(() => [
              C(p(m.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "suffix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Wi = /* @__PURE__ */ w($i, [["render", Hi]]), Yi = ["solid", "regular", "brands", "light", "duotone", "thin"], Gi = {
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
}, Ui = {
  key: 0,
  class: "ui-field__title-row"
}, Ki = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, ji = {
  key: 1,
  class: "ui-field__title"
}, qi = {
  key: 1,
  class: "ui-field__value"
}, Zi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Qi(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("div", T({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (l(), s("div", Ui, [
      i.showIcon ? (l(), s("span", Ki, [
        S(o, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (l(), s("span", ji, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (l(), s("div", qi, [
      b(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (l(), s("p", Zi, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const Xi = /* @__PURE__ */ w(Gi, [["render", Qi]]), Ji = ["popover", "dialog"], er = ["sm", "md", "lg"], tr = [
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
}, rr = { class: "ui-field-action-header" }, lr = { class: "ui-field-action-header__text" }, ar = {
  key: 0,
  class: "ui-field-action-header__title"
}, nr = {
  key: 1,
  class: "ui-field-action-header__description"
}, sr = { class: "ui-field-action-body" }, or = { class: "ui-field-action-body" }, ur = { class: "ui-field-action-footer" };
function cr(e, t, r, n, a, i) {
  const o = v("ui-button"), u = v("ui-popover"), c = v("ui-dialog");
  return l(), s("div", {
    class: k([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (l(), y(u, {
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
              C(p(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        d("div", sr, [
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
            d("div", rr, [
              d("div", lr, [
                r.title ? (l(), s("p", ar, p(r.title), 1)) : f("", !0),
                r.description ? (l(), s("p", nr, p(r.description), 1)) : f("", !0)
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
                  C(p(i.resolvedClearLabel), 1)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (l(), s(x, { key: 1 }, [
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
            C(p(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      S(c, {
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
          d("div", or, [
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
              d("div", ur, [
                r.clearable && i.hasValue ? (l(), y(o, {
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
                })) : f("", !0),
                S(o, {
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
const dr = /* @__PURE__ */ w(ir, [["render", cr]]), hr = ["auto", "file", "folder"], fr = ["sm", "md", "lg"], mr = { icon: "folder", color: "text-sky-500" }, pr = { icon: "file-lines", color: "text-muted-foreground" }, gr = {
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
function br(e) {
  const t = q(e);
  return /[/\\]\s*$/.test(t);
}
function Re(e) {
  const t = q(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function yr(e) {
  const t = Re(e), r = t.lastIndexOf(".");
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
      return ye[this.size] || ye.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : br(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Re(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return mr;
      const e = yr(this.name);
      return gr[e] || pr;
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
}, _r = ["aria-label"], kr = ["title"];
function wr(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("div", {
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
    }, p(i.displayLabel), 11, kr)
  ], 10, _r);
}
const Sr = /* @__PURE__ */ w(vr, [["render", wr]]);
function xr(e) {
  const t = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((o) => o.top)), n = Math.min(...t.map((o) => o.left)), a = Math.max(...t.map((o) => o.right)), i = Math.max(...t.map((o) => o.bottom));
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
function ae(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function _e(e) {
  const t = ae(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((a) => a instanceof HTMLElement), n = xr(r.map((a) => a.getBoundingClientRect()));
    if (n) return n;
  }
  return t.getBoundingClientRect();
}
function Cr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && t.push(n);
  return t;
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
], Ar = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, zr = 8, Mr = {
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
      default: zr
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
      const n = window.innerWidth, a = window.innerHeight, i = r.getBoundingClientRect(), o = i.width || 320, u = i.height || 180;
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
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, c.top - h), _ = Math.max(0, c.left - h), A = Math.min(a, c.bottom + h), F = Math.min(n, c.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${_}px`,
        width: `${Math.max(0, F - _)}px`,
        height: `${Math.max(0, A - m)}px`
      };
      let O = A + V, B = _;
      this.placement.startsWith("top") ? O = m - u - V : this.placement.startsWith("right") ? (O = m, B = F + V) : this.placement.startsWith("left") ? (O = m, B = _ - o - V) : this.placement.includes("end") && (B = F - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && O + u > a - V && (O = m - u - V), O = Math.max(V, Math.min(O, a - u - V)), B = Math.max(V, Math.min(B, n - o - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${O}px`,
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
          for (const r of Cr(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Pr = { class: "ui-guidance-footer" }, Or = { class: "ui-guidance-popover" }, Vr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Er = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Br = { class: "ui-guidance-popover__text" }, Rr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Dr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Fr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Nr = ["aria-label"], $r = { class: "ui-guidance-tour__content" }, Hr = { class: "ui-header-lead" }, Wr = { class: "ui-header-lead__main" }, Yr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Gr = { class: "ui-header-lead__text" }, Ur = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Kr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, jr = {
  key: 0,
  class: "ui-header-lead__actions"
}, qr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Zr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Qr(e, t, r, n, a, i) {
  const o = v("ui-button"), u = v("ui-card"), c = v("ui-dialog"), h = v("ui-icon"), m = v("ui-popover");
  return i.shouldRender ? (l(), s("div", {
    key: 0,
    class: k(i.rootShellClass)
  }, [
    r.mode === "card" ? (l(), y(u, {
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
            d("div", Pr, [
              r.showFooterClose ? (l(), y(o, {
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
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (l(), y(o, {
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
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (l(), y(c, {
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
              C(p(i.resolvedGoLabel), 1)
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
        b(e.$slots, "trigger", Ae(ze(_)))
      ]),
      content: g(() => [
        d("div", Or, [
          r.icon || r.title || r.description ? (l(), s("div", Vr, [
            r.icon ? (l(), s("span", Er, [
              S(h, {
                name: r.icon,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            d("div", Br, [
              r.title ? (l(), s("p", Rr, p(r.title), 1)) : f("", !0),
              r.description ? (l(), s("p", Dr, p(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (l(), s("div", Fr, [
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
                C(p(i.resolvedCloseLabel), 1)
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
                C(p(i.resolvedGoLabel), 1)
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
          i.syncOpen ? (l(), s("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = le((..._) => i.onEscape && i.onEscape(..._), ["esc"]))
          }, [
            r.closeOnBackdrop ? (l(), s("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => i.onBackdrop && i.onBackdrop(..._))
            })) : f("", !0),
            a.tourHighlightStyle ? (l(), s("div", {
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
              d("div", $r, [
                d("div", Hr, [
                  d("div", Wr, [
                    r.icon ? (l(), s("span", Yr, [
                      S(h, {
                        name: r.icon,
                        type: r.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    d("div", Gr, [
                      r.title ? (l(), s("p", Ur, p(r.title), 1)) : f("", !0),
                      r.description ? (l(), s("p", Kr, p(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (l(), s("div", jr, [
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
                e.$slots.default ? (l(), s("div", qr, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (l(), s("div", Zr, [
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
                      C(p(i.resolvedCloseLabel), 1)
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
                      C(p(i.resolvedGoLabel), 1)
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
const Xr = /* @__PURE__ */ w(Mr, [["render", Qr]]), Jr = ["solid", "regular", "brands", "light", "duotone", "thin"], el = {
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
      return e && (r = t.filter((n) => String(n).toLowerCase().includes(e))), r.slice(0, this.maxResults);
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
}, tl = ["disabled", "aria-expanded", "onClick"], il = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, rl = { class: "ui-select-field-suffix" }, ll = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, al = { class: "ui-icon-picker-panel" }, nl = { class: "ui-icon-picker-panel__header" }, sl = { class: "ui-icon-picker-panel__title" }, ol = { class: "ui-icon-picker-panel__search" }, ul = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, cl = {
  key: 1,
  class: "ui-icon-picker-grid"
}, dl = ["title", "onClick"];
function hl(e, t, r, n, a, i) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("ui-input"), h = v("ui-popover");
  return l(), s("div", {
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
            d("span", il, [
              S(o, {
                name: i.localIcon || "grid",
                type: r.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            d("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            d("span", rl, [
              d("span", ll, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, tl)
        ])
      ]),
      content: g(() => [
        d("div", al, [
          d("div", nl, [
            d("span", sl, p(i.popoverTitleLabel), 1),
            i.localIcon ? (l(), y(u, {
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
            }, 8, ["onClick"])) : f("", !0)
          ]),
          d("div", ol, [
            S(c, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => a.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (l(), s("div", cl, [
            (l(!0), s(x, null, z(i.filteredIcons, (m) => (l(), s("button", {
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
            ], 10, dl))), 128))
          ])) : (l(), s("div", ul, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const fl = /* @__PURE__ */ w(el, [["render", hl]]), ml = ["tr-TR", "en-US"], Z = se({
  currency: "TRY",
  format: "tr-TR"
});
function pl(e, t = Z.format) {
  return ml.includes(e) ? e : t;
}
function gl(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Z.currency = J(e.currency));
  const t = e.format ?? e.locale;
  t != null && (Z.format = pl(t));
}
function bl() {
  return De(Z);
}
const yl = {
  name: "PriceInput",
  components: { CurrencyInput: Be },
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
    return { priceInputConfig: bl() };
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
function vl(e, t, r, n, a, i) {
  const o = v("CurrencyInput");
  return l(), y(o, T({
    "model-value": r.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.$emit("update:modelValue", u)),
    onInput: t[1] || (t[1] = (u) => e.$emit("input", u)),
    onChange: t[2] || (t[2] = (u) => e.$emit("change", u)),
    onFocus: t[3] || (t[3] = (u) => e.$emit("focus", u)),
    onBlur: t[4] || (t[4] = (u) => e.$emit("blur", u))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const _l = /* @__PURE__ */ w(yl, [["render", vl]]);
function kl(e) {
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
let ie = 0;
const wl = ["sm", "md", "lg"], Sl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => wl.includes(e)
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
      return kl(this.modelValue);
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
}, xl = ["aria-label", "aria-pressed", "disabled"], Cl = ["id", "aria-live"];
function Ll(e, t, r, n, a, i) {
  const o = v("ui-icon"), u = v("ui-input"), c = v("ui-progress");
  return l(), s("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    S(u, T({
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
        ], 8, xl)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (l(), s("div", {
      key: 0,
      id: a.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      S(c, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (l(), s("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, Cl)) : f("", !0)
  ], 2);
}
const Tl = /* @__PURE__ */ w(Sl, [["render", Ll]]), Il = ["numeric", "alphanumeric"], Al = {
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
      validator: (e) => Il.includes(e)
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
      const n = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (n.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const a = [...this.cells];
      let i = e;
      for (const u of n) {
        if (i >= this.length) break;
        a[i] = u, i += 1;
      }
      this.emitValue(a);
      const o = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var u, c;
        (u = this.cellEl(o)) == null || u.focus(), (c = this.cellEl(o)) == null || c.select();
      });
    },
    onCellKeydown(e, t) {
      var r, n;
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
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (n = this.cellEl(e + 1)) == null || n.focus());
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
      const n = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, n))) == null || i.focus();
      });
    }
  }
}, zl = ["aria-label"], Ml = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Pl(e, t, r, n, a, i) {
  return l(), s("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: k([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), s(x, null, z(r.length, (o, u) => (l(), s("input", {
      key: u,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[u] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: u === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(u),
      onInput: (c) => i.onCellInput(u, c),
      onKeydown: (c) => i.onCellKeydown(u, c),
      onFocus: (c) => i.onCellFocus(u),
      onPaste: t[0] || (t[0] = (...c) => i.onPaste && i.onPaste(...c))
    }, null, 40, Ml))), 128))
  ], 10, zl);
}
const Ol = /* @__PURE__ */ w(Al, [["render", Pl]]), Vl = ["bar", "circle"], ke = ["sm", "md", "lg"], we = ["thin", "md"], El = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, Bl = { sm: 1.5, md: 2, lg: 2 }, Rl = {
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
      validator: (e) => El.includes(e)
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
      const e = G[this.circleSizeKey] ?? G.sm;
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
      const e = G[this.circleSizeKey] ?? G.sm, t = Bl[this.circleSizeKey] ?? 2, r = (e - t) / 2, n = e / 2, a = 2 * Math.PI * r, i = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: n, circumference: a, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Dl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Fl = ["width", "height", "viewBox"], Nl = ["cx", "cy", "r", "stroke-width"], $l = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Hl = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Wl(e, t, r, n, a, i) {
  return l(), s("div", {
    class: k(i.rootClass),
    style: E(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (l(), s("svg", {
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
      }, null, 8, Nl),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, $l)
    ], 8, Fl)) : (l(), s("div", Hl, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Dl);
}
const Yl = /* @__PURE__ */ w(Rl, [["render", Wl]]), Gl = Me("ui-sheet"), Ul = ["left", "right"], Kl = ["sm", "md", "lg", "xl"], jl = ["solid", "regular", "brands", "light", "duotone", "thin"], Se = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, ql = {
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
      validator: (e) => Ul.includes(e)
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
      validator: (e) => Kl.includes(e)
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
      validator: (e) => jl.includes(e)
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
    const e = Gl();
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
      return Se[this.size] || Se.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return L(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return Ye(this.$attrs, ["class"]);
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
      return L(
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
        We(e) || (this.focusFallbackTimer = setTimeout(() => {
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, Zl = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Ql = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Xl = {
  key: 0,
  class: "ui-sheet-header__icon"
}, Jl = ["id"], ea = {
  key: 2,
  class: "ui-sheet-header__actions"
}, ta = ["id"], ia = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, ra = {
  key: 4,
  class: "ui-card-footer"
};
function la(e, t, r, n, a, i) {
  const o = v("ui-icon"), u = v("ui-button"), c = v("Divider");
  return a.portalReady ? (l(), y(Q, {
    key: 0,
    to: "body"
  }, [
    S(X, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: g(() => [
        r.open ? (l(), s("div", {
          key: 0,
          ref: "layerRef",
          class: k(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          r.overlay ? (l(), s("div", {
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
            i.hasHeaderBlock ? (l(), s("div", Ql, [
              b(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (l(), s("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (l(), s("span", Xl, [
                    S(o, {
                      name: r.icon,
                      type: r.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (l(), s("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(r.title), 9, Jl)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), s("div", ea, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (l(), y(u, {
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
                  r.description ? (l(), s("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(r.description), 9, ta)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), s("div", ia, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (l(), y(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (l(), s("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (l(), s("div", ra, [
              b(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, Zl)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const aa = /* @__PURE__ */ w(ql, [["render", la]]), na = ["sm", "md", "lg", "full"], xe = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, sa = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => na.includes(e)
    }
  },
  computed: {
    rootClass() {
      return L(
        "ui-menu",
        xe[this.width] || xe.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, oa = {
  key: 0,
  class: "ui-menu-header"
}, ua = { class: "ui-menu-body" }, ca = {
  key: 1,
  class: "ui-menu-footer"
};
function da(e, t, r, n, a, i) {
  return l(), s("nav", T({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (l(), s("div", oa, [
      b(e.$slots, "header")
    ])) : f("", !0),
    d("div", ua, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), s("div", ca, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const ha = /* @__PURE__ */ w(sa, [["render", da]]), fa = {
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
}, ma = {
  key: 0,
  class: "ui-menu-group-label"
}, pa = { class: "ui-menu-group-items" };
function ga(e, t, r, n, a, i) {
  return l(), s("div", T({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (l(), s("p", ma, p(r.label), 1)) : f("", !0),
    d("div", pa, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const ba = /* @__PURE__ */ w(fa, [["render", ga]]), ya = {
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
function va(e, t, r, n, a, i) {
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
const _a = /* @__PURE__ */ w(ya, [["render", va]]), ka = {
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
}, wa = ["aria-label"];
function Sa(e, t, r, n, a, i) {
  return l(), s("div", T({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, wa);
}
const xa = /* @__PURE__ */ w(ka, [["render", Sa]]), Ca = {
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
}, La = ["aria-checked", "disabled"], Ta = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ia = {
  key: 1,
  class: "ui-segment-label"
}, Aa = {
  key: 2,
  class: "sr-only"
}, za = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ma = {
  key: 1,
  class: "ui-segment-label"
}, Pa = {
  key: 2,
  class: "sr-only"
};
function Oa(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("button", {
    type: "button",
    role: "radio",
    class: k(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...u) => i.select && i.select(...u))
  }, [
    i.hasAffixes ? (l(), s(x, { key: 0 }, [
      i.hasPrepend ? (l(), s("span", {
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
        r.icon ? (l(), s("span", Ta, [
          S(o, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        i.showLabel ? (l(), s("span", Ia, p(r.label), 1)) : r.label ? (l(), s("span", Aa, p(r.label), 1)) : f("", !0)
      ], 2),
      i.hasAppend ? (l(), s("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = M(() => {
        }, ["stop"]))
      }, [
        b(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (l(), s(x, { key: 1 }, [
      r.icon ? (l(), s("span", za, [
        S(o, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      i.showLabel ? (l(), s("span", Ma, p(r.label), 1)) : r.label ? (l(), s("span", Pa, p(r.label), 1)) : f("", !0)
    ], 64))
  ], 10, La);
}
const Va = /* @__PURE__ */ w(Ca, [["render", Oa]]), Ea = ["sm", "md", "lg"], Ba = ["horizontal", "vertical"];
function Ra(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Da = {
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
      validator: (e) => Ea.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ba.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: Ra
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
      return Ue(this.size, { defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? Ge() : !!this.iconOnly;
    },
    rootClass() {
      return L(
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
}, Fa = ["aria-label"];
function Na(e, t, r, n, a, i) {
  return l(), s("div", T({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Fa);
}
const $a = /* @__PURE__ */ w(Da, [["render", Na]]), Ha = ["horizontal", "vertical"], Wa = ["default", "pills"], Ya = {
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
      validator: (e) => Wa.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ha.includes(e)
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
}, Ga = ["aria-label"], Ua = { class: "ui-stepper-pills-track" }, Ka = {
  key: 0,
  class: "ui-stepper-pills-label"
}, ja = { class: "flex w-full min-w-0 items-center justify-center" }, qa = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Za = {
  key: 1,
  class: "tabular-nums"
}, Qa = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Xa = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Ja = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, en = { class: "flex flex-col items-center" }, tn = {
  key: 1,
  class: "tabular-nums"
}, rn = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, ln = { class: "ui-stepper-title" }, an = {
  key: 0,
  class: "ui-stepper-description"
};
function nn(e, t, r, n, a, i) {
  const o = v("ui-icon");
  return l(), s("div", T({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (l(), s(x, { key: 0 }, [
      d("div", Ua, [
        (l(!0), s(x, null, z(i.normalizedSteps, (u, c) => (l(), y(K(r.interactive ? "button" : "span"), T({
          key: c,
          class: ["ui-stepper-pill", i.pillClass(c)],
          role: "listitem",
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (l(), s("p", Ka, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (l(!0), s(x, { key: 1 }, z(i.normalizedSteps, (u, c) => (l(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", ja, [
        c > 0 ? (l(), s("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), s("span", qa)),
        (l(), y(K(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (l(), y(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), s("span", Za, p(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < i.normalizedSteps.length - 1 ? (l(), s("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), s("span", Qa))
      ]),
      d("p", Xa, p(u.title), 1),
      u.description ? (l(), s("p", Ja, p(u.description), 1)) : f("", !0)
    ]))), 128)) : (l(!0), s(x, { key: 2 }, z(i.normalizedSteps, (u, c) => (l(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", en, [
        (l(), y(K(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(c) : void 0
        }), {
          default: g(() => [
            u.icon ? (l(), y(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), s("span", tn, p(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < i.normalizedSteps.length - 1 ? (l(), s("span", {
          key: 0,
          class: k(["ui-stepper-vrail", i.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      d("div", rn, [
        d("p", ln, p(u.title), 1),
        u.description ? (l(), s("p", an, p(u.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Ga);
}
const sn = /* @__PURE__ */ w(Ya, [["render", nn]]);
let Ce = 0;
const on = {
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
}, un = {
  key: 0,
  class: "ui-slider-header"
}, cn = {
  key: 0,
  class: "ui-form-label"
}, dn = {
  key: 1,
  class: "ui-slider-value"
}, hn = { class: "ui-slider-rail" }, fn = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], mn = {
  key: 1,
  class: "ui-slider-scale"
}, pn = { key: 0 }, gn = { key: 1 };
function bn(e, t, r, n, a, i) {
  const o = v("ui-progress");
  return l(), s("div", {
    class: k(i.rootClass)
  }, [
    r.label || i.hasValue ? (l(), s("div", un, [
      r.label ? (l(), s("span", cn, p(r.label), 1)) : f("", !0),
      i.hasValue ? (l(), s("span", dn, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    d("div", hn, [
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
        onInput: t[0] || (t[0] = (...u) => i.onNativeInput && i.onNativeInput(...u)),
        onChange: t[1] || (t[1] = (...u) => i.onChange && i.onChange(...u))
      }), null, 16, fn)
    ]),
    r.minLabel || r.maxLabel ? (l(), s("div", mn, [
      r.minLabel ? (l(), s("span", pn, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (l(), s("span", gn, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const yn = /* @__PURE__ */ w(on, [["render", bn]]);
let Le = 0;
const vn = {
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
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), t = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, _n = ["id", "aria-checked", "disabled", "aria-describedby"];
function kn(e, t, r, n, a, i) {
  return l(), s("button", T({
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
  ], 16, _n);
}
const wn = /* @__PURE__ */ w(vn, [["render", kn]]), Sn = {
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
}, xn = { class: "ui-table-scroll" };
function Cn(e, t, r, n, a, i) {
  return l(), s("div", xn, [
    d("table", T({ class: i.rootClass }, i.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const Ln = /* @__PURE__ */ w(Sn, [["render", Cn]]), Tn = {
  name: "TableBody"
}, In = { class: "ui-table-body" };
function An(e, t, r, n, a, i) {
  return l(), s("tbody", In, [
    b(e.$slots, "default")
  ]);
}
const zn = /* @__PURE__ */ w(Tn, [["render", An]]), Mn = ["left", "center", "right"], Pn = ["title", "secondary", "body"], On = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Mn.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Pn.includes(e)
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
}, Vn = ["colspan"];
function En(e, t, r, n, a, i) {
  return l(), s("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, Vn);
}
const Bn = /* @__PURE__ */ w(On, [["render", En]]), Rn = ["left", "center", "right"], Dn = ["sm", "md", "lg"], Fn = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Rn.includes(e)
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
      if (!(this.iconCol || Dn.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Nn(e, t, r, n, a, i) {
  return l(), s("th", {
    class: k(i.rootClass),
    style: E(i.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const $n = /* @__PURE__ */ w(Fn, [["render", Nn]]), Hn = {
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
function Wn(e, t, r, n, a, i) {
  return l(), s("thead", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Yn = /* @__PURE__ */ w(Hn, [["render", Wn]]), Gn = {
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
}, Un = { class: "ui-table-pagination" }, Kn = { class: "ui-table-pagination-meta" }, jn = { class: "ui-table-pagination-nav" }, qn = { class: "ui-table-pagination-page" };
function Zn(e, t, r, n, a, i) {
  const o = v("ui-button");
  return l(), s("div", Un, [
    d("div", Kn, [
      b(e.$slots, "meta", {}, () => [
        C(p(r.metaText), 1)
      ])
    ]),
    d("div", jn, [
      S(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (u) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      d("div", qn, p(r.pageLabel), 1),
      S(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (u) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Qn = /* @__PURE__ */ w(Gn, [["render", Zn]]), Xn = ["none", "soft", "strong"], Jn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Xn.includes(e)
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
function es(e, t, r, n, a, i) {
  return l(), s("tr", {
    class: k(i.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const ts = /* @__PURE__ */ w(Jn, [["render", es]]), is = {
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
}, rs = ["id", "aria-labelledby"];
function ls(e, t, r, n, a, i) {
  return Fe((l(), s("div", T({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, rs)), [
    [Ne, i.isActive]
  ]);
}
const as = /* @__PURE__ */ w(is, [["render", ls]]), ns = Me("ui-timepicker"), re = 40;
function $(e) {
  return String(e).padStart(2, "0");
}
const ss = {
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
      fallbackId: ns(),
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
      let t = 0, r = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (t = Math.min(23, Math.max(0, parseInt(n[1], 10))), r = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const a = this.minuteValues;
      let i = a[0] ?? 0, o = 999;
      for (const u of a) {
        const c = Math.abs(u - r);
        c < o && (o = c, i = u);
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
      const e = `${$(this.draftHour)}:${$(this.draftMinute)}`;
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
}, os = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, us = { class: "ui-timepicker-wheels" }, cs = { class: "ui-timepicker-wheels-row" }, ds = ["aria-valuenow", "aria-label"], hs = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, fs = { class: "ui-timepicker-wheel-spacer" }, ms = ["onClick"], ps = ["aria-valuenow", "aria-label"], gs = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, bs = { class: "ui-timepicker-wheel-spacer" }, ys = ["onClick"], vs = { class: "min-w-0 flex-1 truncate text-foreground" }, _s = { class: "ui-timepicker-panel w-full p-2" }, ks = { class: "ui-timepicker-wheels" }, ws = { class: "ui-timepicker-wheels-row" }, Ss = ["aria-valuenow", "aria-label"], xs = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Cs = { class: "ui-timepicker-wheel-spacer" }, Ls = ["onClick"], Ts = ["aria-valuenow", "aria-label"], Is = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, As = { class: "ui-timepicker-wheel-spacer" }, zs = ["onClick"];
function Ms(e, t, r, n, a, i) {
  const o = v("ui-button"), u = v("ui-popover");
  return l(), s("div", {
    class: k([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (l(), s("div", os, [
      d("div", us, [
        t[2] || (t[2] = d("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        d("div", cs, [
          d("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            d("div", hs, [
              d("div", fs, [
                (l(!0), s(x, null, z(i.hourOptions, (c) => (l(), s("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(c)
                }, p(i.pad2(c)), 11, ms))), 128))
              ])
            ], 512)
          ], 8, ds),
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
            d("div", gs, [
              d("div", bs, [
                (l(!0), s(x, null, z(i.minuteValues, (c, h) => (l(), s("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => i.selectMinute(h)
                }, p(i.pad2(c)), 11, ys))), 128))
              ])
            ], 512)
          ], 8, ps)
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
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: m }) => [
        b(e.$slots, "trigger", {
          open: c,
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
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              d("span", vs, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        d("div", _s, [
          d("div", ks, [
            t[6] || (t[6] = d("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", ws, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                d("div", xs, [
                  d("div", Cs, [
                    (l(!0), s(x, null, z(i.hourOptions, (c) => (l(), s("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(c)
                    }, p(i.pad2(c)), 11, Ls))), 128))
                  ])
                ], 512)
              ], 8, Ss),
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
                d("div", Is, [
                  d("div", As, [
                    (l(!0), s(x, null, z(i.minuteValues, (c, h) => (l(), s("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(c)), 11, zs))), 128))
                  ])
                ], 512)
              ], 8, Ts)
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
const Te = /* @__PURE__ */ w(ss, [["render", Ms]]), Ps = ["square", "video", "auto"], Os = ["fill", "sm", "md", "lg"], Ie = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Vs = {
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
      validator: (e) => Ps.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Os.includes(e)
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
        Ie[this.size] || Ie.fill,
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
}, Es = ["src", "alt"], Bs = ["aria-hidden"], Rs = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Ds = {
  key: 3,
  class: "ui-photo__overflow"
}, Fs = ["aria-label"], Ns = ["aria-label"], $s = { class: "ui-photo-preview__panel" }, Hs = ["src", "alt"], Ws = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Ys(e, t, r, n, a, i) {
  const o = v("ui-icon"), u = v("ui-button");
  return l(), s(x, null, [
    (l(), y(K(i.rootTag), T({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: g(() => [
        r.src && !a.imageFailed ? (l(), s("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (c) => a.imageFailed = !0)
        }, null, 40, Es)) : (l(), s("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          S(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Bs)),
        r.favorite ? (l(), s("span", Rs, [
          S(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (l(), s("span", Ds, p(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (l(), y(Q, { to: "body" }, [
      S(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...c) => i.onPreviewKeydown && i.onPreviewKeydown(...c))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...c) => i.closePreview && i.closePreview(...c))
            }, null, 8, Ns),
            d("div", $s, [
              S(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), y(u, {
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
              i.activeSrc ? (l(), s("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Hs)) : f("", !0),
              i.showNext ? (l(), y(u, {
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
              i.counterLabel ? (l(), s("p", Ws, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Fs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Gs = /* @__PURE__ */ w(Vs, [["render", Ys]]), Us = ["square", "video", "auto"], Ks = {
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
      validator: (e) => Us.includes(e)
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
}, js = ["data-count"], qs = ["aria-label"], Zs = ["aria-label"], Qs = { class: "ui-photo-preview__panel" }, Xs = ["src", "alt"], Js = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function eo(e, t, r, n, a, i) {
  const o = v("ui-photo"), u = v("ui-button");
  return l(), s(x, null, [
    d("div", {
      class: k(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (l(!0), s(x, null, z(i.visibleItems, (c, h) => (l(), y(o, {
        key: c.key || `${c.src}-${h}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, js),
    (l(), y(Q, { to: "body" }, [
      S(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...c) => i.onPreviewKeydown && i.onPreviewKeydown(...c))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...c) => i.closePreview && i.closePreview(...c))
            }, null, 8, Zs),
            d("div", Qs, [
              S(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (l(), y(u, {
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
              i.activeSrc ? (l(), s("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Xs)) : f("", !0),
              i.showNext ? (l(), y(u, {
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
              i.counterLabel ? (l(), s("p", Js, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, qs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const to = /* @__PURE__ */ w(Ks, [["render", eo]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function so() {
  return {
    push: N,
    dismiss: je,
    clear: Ke,
    info: (e) => N({ ...U(e), variant: "info" }),
    success: (e) => N({ ...U(e), variant: "success" }),
    warning: (e) => N({ ...U(e), variant: "warning" }),
    error: (e) => N({ ...U(e), variant: "error" })
  };
}
function oo(e = !1) {
  return se({
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
function uo() {
  return {
    confirm: ki
  };
}
const ne = {
  en: Ze,
  tr: Pe
};
function co(e = "tr") {
  return ne[e] ?? ne.tr;
}
const ho = Pe, io = [
  ["ui-action-card", zt],
  ["ui-action-card-list", Vt],
  ["ui-action-group", Qe],
  ["ui-ai-button", Ft],
  ["ui-alert", Xe],
  ["ui-avatar", Je],
  ["ui-badge", et],
  ["ui-button", tt],
  ["ui-card", it],
  ["ui-checkbox", pi],
  ["ui-checkbox-group", _i],
  ["ui-color-picker", ti],
  ["ui-currency-input", Be],
  ["ui-confirm-dialog", xi],
  ["ui-date-picker", rt],
  ["ui-date-range-picker", Fi],
  ["ui-dialog", lt],
  ["ui-divider", oe],
  ["ui-dropdown", Wi],
  ["ui-empty", at],
  ["ui-field", Xi],
  ["ui-field-action", dr],
  ["ui-file", Sr],
  ["ui-form-row", nt],
  ["ui-guidance", Xr],
  ["ui-icon", st],
  ["ui-icon-picker", fl],
  ["ui-input", ot],
  ["ui-price-input", _l],
  ["ui-password", Tl],
  ["ui-phone", ut],
  ["ui-pin", Ol],
  ["ui-list", ct],
  ["ui-list-item", dt],
  ["ui-popover", ht],
  ["ui-progress", Yl],
  ["ui-radio", ft],
  ["ui-radio-group", mt],
  ["ui-select", pt],
  ["ui-sheet", aa],
  ["ui-menu", ha],
  ["ui-menu-group", ba],
  ["ui-menu-item", _a],
  ["ui-menu-nav", xa],
  ["ui-segment", Va],
  ["ui-segment-group", $a],
  ["ui-skeleton", gt],
  ["ui-slider", yn],
  ["ui-stepper", sn],
  ["ui-switch", wn],
  ["ui-table", Ln],
  ["ui-table-body", zn],
  ["ui-table-cell", Bn],
  ["ui-table-head", $n],
  ["ui-table-header", Yn],
  ["ui-table-pagination", Qn],
  ["ui-table-row", ts],
  ["ui-tag", bt],
  ["ui-tab-list", yt],
  ["ui-tab-panel", as],
  ["ui-tabs", vt],
  ["ui-tab-trigger", _t],
  ["ui-time-picker", Te],
  ["ui-timepicker", Te],
  ["ui-tooltip", kt],
  ["ui-toast", wt],
  ["ui-photo", Gs],
  ["ui-photos", to]
];
function ro(e, t = {}) {
  var u, c;
  const { i18n: r, locale: n, locales: a, theme: i, priceInput: o } = t;
  if (i && qe(i), o && gl(o), (u = r == null ? void 0 : r.global) != null && u.mergeLocaleMessage) {
    const h = a ?? (n != null ? [n] : [
      typeof r.global.locale == "string" ? r.global.locale : ((c = r.global.locale) == null ? void 0 : c.value) ?? "tr"
    ]);
    for (const m of h) {
      const _ = ne[m];
      _ && r.global.mergeLocaleMessage(m, _);
    }
  }
  for (const [h, m] of io)
    e.component(h, m);
}
const fo = {
  install: ro
};
export {
  zt as ActionCard,
  Vt as ActionCardList,
  Qe as ActionGroup,
  Ft as AiButton,
  Xe as Alert,
  Je as Avatar,
  et as Badge,
  tt as Button,
  it as Card,
  pi as Checkbox,
  _i as CheckboxGroup,
  ti as ColorPicker,
  xi as ConfirmDialog,
  Be as CurrencyInput,
  rt as DatePicker,
  Fi as DateRangePicker,
  lt as Dialog,
  oe as Divider,
  Wi as Dropdown,
  at as Empty,
  go as FEW_COLOR_SCALE,
  bo as FEW_PALETTE_ID,
  yo as FEW_PRIMARY,
  vo as FEW_PRIMARY_FOREGROUND,
  Xi as Field,
  dr as FieldAction,
  Sr as File,
  nt as FormRow,
  _o as GOOGLE_FONTS_CATALOG,
  Xr as Guidance,
  st as Icon,
  fl as IconPicker,
  ot as Input,
  ct as List,
  dt as ListItem,
  ha as Menu,
  ba as MenuGroup,
  _a as MenuItem,
  xa as MenuNav,
  ml as PRICE_FORMATS,
  Tl as Password,
  ut as Phone,
  Gs as Photo,
  to as Photos,
  Ol as Pin,
  ht as Popover,
  _l as PriceInput,
  Yl as Progress,
  ft as Radio,
  mt as RadioGroup,
  Va as Segment,
  $a as SegmentGroup,
  pt as Select,
  aa as Sheet,
  gt as Skeleton,
  yn as Slider,
  sn as Stepper,
  wn as Switch,
  ko as THEME_CUSTOM_CSS_ID,
  wo as THEME_PRESETS,
  So as THEME_PRESET_IDS,
  yt as TabList,
  as as TabPanel,
  _t as TabTrigger,
  Ln as Table,
  zn as TableBody,
  Bn as TableCell,
  $n as TableHead,
  Yn as TableHeader,
  Qn as TablePagination,
  ts as TableRow,
  vt as Tabs,
  bt as Tag,
  Te as TimePicker,
  wt as Toast,
  kt as Tooltip,
  xo as applyGoogleFontsForTheme,
  Co as applyThemeCustomCss,
  qe as applyUiTheme,
  Lo as buildGoogleFontsLinkTag,
  To as buildGoogleFontsStylesheetUrl,
  Io as buildThemeStyleAttr,
  Ao as clearThemeCustomCss,
  Ke as clearToasts,
  zo as createUiId,
  Me as createUiIdFactory,
  fo as default,
  Mo as deriveBrandColorsFromPrimary,
  je as dismissToast,
  no as formatCurrencyAmount,
  ri as formatMoneyInput,
  Oe as getCurrencySymbol,
  Po as getFewPrimaryColors,
  Ee as getMoneySeparators,
  bl as getPriceInputConfig,
  Oo as getThemePreset,
  co as getUiMessages,
  Vo as googleFontSelectOptions,
  Eo as mergeUiTheme,
  ii as parseLocalizedMoneyInput,
  Ye as pickPassthroughAttrs,
  N as pushToast,
  ki as requestConfirm,
  Bo as resetUiIds,
  Ue as resolveControlSize,
  J as resolveCurrencyCode,
  Ro as resolvePrimaryColor,
  Do as resolveThemeFontFamilies,
  Fo as resolveThemePreset,
  No as resolveThemeVars,
  P as resolveUiText,
  Ve as sanitizeMoneyInput,
  gl as setPriceInputConfig,
  ho as uiMessagesTr,
  uo as useConfirm,
  oo as useDialog,
  so as useToast,
  $o as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
