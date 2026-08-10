import { resolveComponent as _, openBlock as l, createElementBlock as s, normalizeClass as k, renderSlot as y, createBlock as b, createCommentVNode as f, createElementVNode as o, toDisplayString as m, normalizeStyle as R, createVNode as w, mergeProps as T, withCtx as g, withModifiers as P, createTextVNode as S, Fragment as I, renderList as M, withKeys as le, reactive as se, createSlots as j, normalizeProps as Ee, guardReactiveProps as Be, Teleport as Q, Transition as X, readonly as De, resolveDynamicComponent as K, withDirectives as Fe, vShow as Ne } from "vue";
import { _ as x, af as z, V as C, aa as He, a1 as $e, f as Ie, a0 as We, a6 as Ye, X as Ae, U as Ge, Z as Ue, a7 as N, ag as Me, K as Ke, $ as je, A as qe, a as Ze, b as Qe, B as Xe, c as Je, C as et, d as tt, e as it, g as rt, E as lt, k as at, I as nt, l as st, P as ot, n as ut, L as ct, m as dt, o as ht, R as ft, p as pt, r as mt, S as gt, q as bt, s as yt, x as vt, u as _t, w as kt, v as wt, z as xt, y as St } from "./index-CjE12Ucr.js";
import { F as Ws, h as Ys, i as Gs, j as Us, G as Ks, D as js, T as qs, t as Zs, H as Qs, J as Xs, M as Js, N as eo, O as to, Q as io, W as ro, Y as lo, a2 as ao, a3 as no, a4 as so, a5 as oo, a8 as uo, a9 as co, ab as ho, ac as fo, ad as po, ae as mo, ah as go } from "./index-CjE12Ucr.js";
const Ct = ["solid", "regular", "brands", "light", "duotone", "thin"], Lt = {
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
      validator: (e) => Ct.includes(e)
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
}, Tt = ["disabled"], It = { class: "ui-action-card__content" }, At = { class: "ui-action-card__title" }, Mt = {
  key: 0,
  class: "ui-action-card__description"
};
function zt(e, i, r, n, a, t) {
  const u = _("ui-icon");
  return l(), s("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
  }, [
    y(e.$slots, "leading", {}, () => [
      t.showDefaultLeading ? (l(), b(u, {
        key: 0,
        name: r.icon,
        type: r.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    o("span", It, [
      o("span", At, m(r.title), 1),
      r.description ? (l(), s("span", Mt, m(r.description), 1)) : f("", !0)
    ]),
    y(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (l(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, Tt);
}
const Pt = /* @__PURE__ */ x(Lt, [["render", zt]]), Vt = {
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
}, Ot = ["aria-label"];
function Rt(e, i, r, n, a, t) {
  return l(), s("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: R(t.listStyle)
  }, [
    y(e.$slots, "default")
  ], 12, Ot);
}
const Et = /* @__PURE__ */ x(Vt, [["render", Rt]]), Bt = {
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
}, Dt = ["data-size"], Ft = { class: "ui-ai-button__surface" };
function Nt(e, i, r, n, a, t) {
  const u = _("ui-button");
  return l(), s("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": t.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": t.resolvedSize,
    style: R(t.rootStyle)
  }, [
    i[1] || (i[1] = o("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    o("span", Ft, [
      w(u, T({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: r.size,
        "prefix-icon": r.prefixIcon,
        disabled: r.disabled,
        loading: r.loading,
        fulled: t.isBlock
      }, e.$attrs, {
        onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
      }), {
        default: g(() => [
          y(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Dt);
}
const Ht = /* @__PURE__ */ x(Bt, [["render", Nt]]), $t = [
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
      presetColors: $t
    };
  },
  computed: {
    rootClass() {
      return C(
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
      let i = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) && (this.localColor = i.toUpperCase());
    }
  }
}, Yt = ["disabled", "aria-expanded", "onClick"], Gt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ut = { class: "ui-select-field-suffix" }, Kt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, jt = { class: "ui-color-picker-panel" }, qt = { class: "ui-color-picker-panel__header" }, Zt = { class: "ui-color-picker-panel__title" }, Qt = { class: "ui-color-picker-swatches" }, Xt = ["title", "onClick"], Jt = { class: "ui-color-picker-custom" }, ei = { class: "ui-color-picker-panel__title" }, ti = { class: "ui-color-picker-custom__row" };
function ii(e, i, r, n, a, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return l(), s("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: a.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (p) => a.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: A }) => [
        y(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: A
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", Gt, [
              t.localColor ? (l(), s("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: R({ backgroundColor: t.localColor })
              }, null, 4)) : (l(), b(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !t.localColor }])
            }, m(t.displayValue), 3),
            o("span", Ut, [
              o("span", Kt, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Yt)
        ])
      ]),
      content: g(() => [
        o("div", jt, [
          o("div", qt, [
            o("span", Zt, m(t.popoverTitleLabel), 1),
            t.localColor ? (l(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: P(t.clearColor, ["stop"])
            }, {
              default: g(() => [
                S(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", Qt, [
            (l(!0), s(I, null, M(a.presetColors, (p) => (l(), s("button", {
              key: p,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": t.localColor === p }]),
              style: R({ backgroundColor: p }),
              title: p,
              onClick: (v) => t.selectColor(p)
            }, [
              t.localColor === p ? (l(), b(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, Xt))), 128))
          ]),
          o("div", Jt, [
            o("span", ei, m(t.customColorLabelText), 1),
            o("div", ti, [
              w(c, {
                modelValue: t.localColor,
                "onUpdate:modelValue": i[0] || (i[0] = (p) => t.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: t.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              o("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: R({ backgroundColor: t.localColor || "transparent" }),
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
const ri = /* @__PURE__ */ x(Wt, [["render", ii]]), he = {
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
function J(e, i = "TRY") {
  if (e == null || String(e).trim() === "")
    return i in $ ? i : "TRY";
  const r = String(e).trim();
  if (he[r])
    return he[r];
  const n = r.toUpperCase();
  return $[n] ? n : i in $ ? i : "TRY";
}
function ze(e) {
  var r;
  const i = J(e);
  if ($[i])
    return $[i];
  try {
    const a = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: i,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((t) => t.type === "currency");
    return ((r = a == null ? void 0 : a.value) == null ? void 0 : r.trim()) || i;
  } catch {
    return i;
  }
}
function Os(e, i, r = "tr-TR") {
  const n = Number(e) || 0, a = J(i);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(n);
  } catch {
    return `${ze(a)}${n.toFixed(2)}`;
  }
}
function Pe(e) {
  let i = String(e ?? "").replace(",", ".");
  i = i.replace(/[^\d.]/g, "");
  const r = i.indexOf(".");
  if (r !== -1) {
    const n = i.slice(0, r), a = i.slice(r + 1).replace(/\./g, "");
    i = `${n}.${a}`;
  }
  return i;
}
function Ve(e = "tr-TR") {
  var i, r;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((i = n.find((a) => a.type === "group")) == null ? void 0 : i.value) || ".",
      decimal: ((r = n.find((a) => a.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function li(e, i = "tr-TR") {
  const { group: r, decimal: n } = Ve(i);
  let a = String(e ?? "").trim();
  return a ? (a = a.split(r).join(""), a = a.split(n).join("."), Pe(a)) : "";
}
function ai(e, i = "tr-TR") {
  const r = Pe(e);
  if (!r) return "";
  const { group: n, decimal: a } = Ve(i), [t = "", u] = r.split("."), c = (t.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return u === void 0 ? c : `${c}${a}${u}`;
}
let fe = 0;
const ni = ["sm", "md", "lg"], si = {
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
      validator: (e) => ni.includes(e)
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
      return J(this.currency);
    },
    innerValue: {
      get() {
        return ai(this.modelValue, this.locale);
      },
      set(e) {
        const i = li(e, this.locale);
        this.$emit("update:modelValue", i);
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
      ]), i = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = n);
      return i;
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
function ui(e, i, r, n, a, t) {
  const u = _("ui-input");
  return l(), b(u, T({
    id: t.resolvedId,
    modelValue: t.innerValue,
    "onUpdate:modelValue": i[0] || (i[0] = (d) => t.innerValue = d),
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
  }, t.passthroughAttrs, {
    onFocus: i[1] || (i[1] = (d) => e.$emit("focus", d)),
    onBlur: t.onBlur
  }), {
    prepend: g(() => [
      o("span", oi, m(t.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Oe = /* @__PURE__ */ x(si, [["render", ui]]), ci = {
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
        return Array.isArray(e) ? e.some((i) => Object.is(i, this.value)) : !1;
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
        const i = e.target.checked, r = this.uiCheckboxGroup.modelValue, n = Array.isArray(r) ? [...r] : [], a = n.findIndex((t) => Object.is(t, this.value));
        i && a === -1 ? n.push(this.value) : !i && a !== -1 && n.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, i = Array.isArray(e) ? [...e] : [], r = i.findIndex((n) => Object.is(n, this.value));
        r === -1 ? i.push(this.value) : i.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", i);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, di = ["type", "name", "value", "checked"], hi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, fi = { class: "ui-checkbox-body" }, pi = {
  key: 0,
  class: "ui-checkbox-label"
}, mi = {
  key: 1,
  class: "ui-checkbox-description"
};
function gi(e, i, r, n, a, t) {
  const u = _("ui-icon");
  return l(), s("label", {
    class: k(t.checkboxClasses),
    onKeydown: [
      i[1] || (i[1] = le(P((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["enter"])),
      i[2] || (i[2] = le(P((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: t.nativeType,
      name: t.nativeName,
      value: t.groupValueString,
      checked: t.isChecked,
      class: "sr-only",
      onChange: i[0] || (i[0] = (...d) => t.onNativeChange && t.onNativeChange(...d))
    }, null, 40, di),
    o("span", hi, [
      t.isChecked ? (l(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    o("span", fi, [
      e.$slots.label || r.label ? (l(), s("span", pi, [
        y(e.$slots, "label", {}, () => [
          S(m(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (l(), s("span", mi, m(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const bi = /* @__PURE__ */ x(ci, [["render", gi]]), yi = ["list", "button", "List", "Button"];
let pe = 0;
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
}, _i = ["aria-label"];
function ki(e, i, r, n, a, t) {
  return l(), s("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${t.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    y(e.$slots, "default")
  ], 10, _i);
}
const wi = /* @__PURE__ */ x(vi, [["render", ki]]), L = se({
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
function xi(e = {}) {
  return new Promise((i) => {
    L.title = e.title ?? "", L.description = e.description ?? "", L.confirmLabel = e.confirmLabel ?? "", L.cancelLabel = e.cancelLabel ?? "", L.destructive = !!e.destructive, L._resolve = i, L.open = !0;
  });
}
function ee(e) {
  const i = L._resolve;
  L.open = !1, L._resolve = null, i && i(!!e);
}
const Si = {
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
        e ? L.open = !0 : L._resolve ? ee(!1) : L.open = !1;
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
      ee(!0);
    },
    onCancel() {
      ee(!1);
    }
  }
};
function Ci(e, i, r, n, a, t) {
  const u = _("ui-button"), d = _("ui-dialog");
  return l(), b(d, {
    open: t.syncOpen,
    "onUpdate:open": i[0] || (i[0] = (c) => t.syncOpen = c),
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
          S(m(t.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      w(u, {
        rounded: "",
        color: t.confirmState.destructive ? "danger" : "primary",
        onClick: t.onConfirm
      }, {
        default: g(() => [
          S(m(t.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Li = /* @__PURE__ */ x(Si, [["render", Ci]]);
let me = 0;
function W(e) {
  return String(e).padStart(2, "0");
}
function D(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return null;
  const r = Number(i[1]), n = Number(i[2]) - 1, a = Number(i[3]), t = new Date(r, n, a);
  return t.getFullYear() !== r || t.getMonth() !== n || t.getDate() !== a ? null : t;
}
function B(e, i) {
  return e === i ? 0 : e < i ? -1 : 1;
}
function te(e, i, r) {
  return new Date(e, i, 1).toLocaleString(r, { month: "long" });
}
function ge(e, i, r, n) {
  const a = `${e}-${W(i + 1)}-01`, t = new Date(e, i + 1, 0).getDate();
  let u = `${e}-${W(i + 1)}-${W(t)}`;
  if (r && u > r && (u = r), n && a < n && u < n) return null;
  let d = a;
  return n && d < n && (d = n), B(d, u) > 0 ? null : [d, u];
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
    var n, a;
    me += 1;
    const e = me, i = ((n = this.modelValue) == null ? void 0 : n[0]) || "", r = Y(i) || Y((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
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
        const e = this.pickingStart, i = this.hoverYmd;
        return B(e, i) <= 0 ? i : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), i = D(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const n = D(r), a = e.getMonth(), t = e.getFullYear(), u = new Date(t, a - 1, 1), d = u.getFullYear(), c = u.getMonth(), h = (v, A) => typeof this.$t == "function" ? this.$t(v, A) : v;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [i, i]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: te(t, a, this.locale)
          }),
          range: ge(t, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: te(d, c, this.locale)
          }),
          range: ge(d, c, this.maxYmd, this.minYmd)
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
      }, i = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, i].map((r) => ({
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
    formatDisplay(e, i) {
      const r = (n) => n ? $e(n, this.locale) || n : "…";
      return !e && !i ? this.resolvedPlaceholder : e === i || !i ? r(e || i) : `${r(e)} – ${r(i)}`;
    },
    shiftMonth(e) {
      const i = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth();
    },
    isRangeDisabled(e, i) {
      return !!(!e || !i || this.minYmd && i < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, i) {
      const r = new Date(e, i, 1), n = new Date(e, i, 1 - r.getDay()), a = this.previewStart, t = this.previewEnd, u = a && t, d = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), p = h.getMonth() === i && h.getFullYear() === e, v = h.getDate(), A = D(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${i}`, V = D(/* @__PURE__ */ new Date()) === A, E = !!(this.minYmd && A < this.minYmd) || !!(this.maxYmd && A > this.maxYmd);
        let oe = !1, ue = !1;
        if (u) {
          const ce = B(a, t) <= 0 ? a : t, de = B(a, t) <= 0 ? t : a;
          oe = B(A, ce) >= 0 && B(A, de) <= 0, ue = A === ce || A === de;
        }
        d.push({
          key: F,
          d: v,
          date: h,
          today: V,
          inMonth: p,
          disabled: E,
          inRange: oe,
          endpoint: ue
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = D(e.date));
    },
    applyQuick(e, i) {
      if (e.disabled || !e.range) return;
      const [r, n] = e.range;
      this.pickingStart = r, this.pickingEnd = n, this.$emit("update:modelValue", [r, n]), this.$emit("change", [r, n]), i();
    },
    pick(e, i) {
      if (!e.date || e.disabled) return;
      const r = D(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, a = r;
      if (B(a, n) < 0) {
        const t = n;
        n = a, a = t;
      }
      this.pickingStart = n, this.pickingEnd = a, this.$emit("update:modelValue", [n, a]), this.$emit("change", [n, a]), i();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Ii = { class: "min-w-0 flex-1 truncate text-foreground" }, Ai = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Mi = { class: "ui-daterangepicker-layout" }, zi = ["aria-label"], Pi = { class: "ui-daterangepicker-calendars" }, Vi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Oi = { class: "ui-daterangepicker-month-row" }, Ri = { class: "mb-2 flex items-center justify-between gap-2" }, Ei = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Bi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Di = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Fi = { class: "ui-datepicker-grid" };
function Ni(e, i, r, n, a, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return l(), s("div", {
    class: k(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: a.menuOpen,
      "onUpdate:open": i[2] || (i[2] = (c) => a.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: p }) => [
        y(e.$slots, "trigger", {
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
            disabled: r.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", Ii, m(t.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: c }) => [
        o("div", Ai, [
          o("div", Mi, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": t.resolvedQuickAriaLabel
            }, [
              (l(!0), s(I, null, M(t.quickPresets, (h) => (l(), b(u, {
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
                  S(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, zi),
            o("div", Pi, [
              t.rangeHint ? (l(), s("p", Vi, m(t.rangeHint), 1)) : f("", !0),
              o("div", Oi, [
                (l(!0), s(I, null, M(t.calendarPanes, (h) => (l(), s("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", Ri, [
                    h.showPrev ? (l(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": t.resolvedPrevMonthLabel,
                      onClick: i[0] || (i[0] = P((p) => t.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), s("span", Ei)),
                    o("span", Bi, m(h.title), 1),
                    h.showNext ? (l(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": t.resolvedNextMonthLabel,
                      onClick: i[1] || (i[1] = P((p) => t.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (l(), s("span", Di))
                  ]),
                  i[3] || (i[3] = o("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    o("span", null, "Su"),
                    o("span", null, "Mo"),
                    o("span", null, "Tu"),
                    o("span", null, "We"),
                    o("span", null, "Th"),
                    o("span", null, "Fr"),
                    o("span", null, "Sa")
                  ], -1)),
                  o("div", Fi, [
                    (l(!0), s(I, null, M(h.cells, (p) => (l(), b(u, {
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
                        S(m(p.d), 1)
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
const Hi = /* @__PURE__ */ x(Ti, [["render", Ni]]), $i = ["solid", "regular", "brands", "light", "duotone", "thin"], Wi = {
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
      validator: (e) => $i.includes(e)
    }
  },
  computed: {
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    },
    hasValue() {
      return !!this.$slots.default;
    },
    showIcon() {
      return !!this.icon;
    },
    rootClass() {
      return C("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, Yi = {
  key: 0,
  class: "ui-field__title-row"
}, Gi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Ui = {
  key: 1,
  class: "ui-field__title"
}, Ki = {
  key: 1,
  class: "ui-field__value"
}, ji = {
  key: 2,
  class: "ui-field__subtitle"
};
function qi(e, i, r, n, a, t) {
  const u = _("ui-icon");
  return l(), s("div", T({ class: t.rootClass }, t.passthroughAttrs), [
    r.title || t.showIcon ? (l(), s("div", Yi, [
      t.showIcon ? (l(), s("span", Gi, [
        w(u, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (l(), s("span", Ui, m(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    t.hasValue ? (l(), s("div", Ki, [
      y(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (l(), s("p", ji, m(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const Zi = /* @__PURE__ */ x(Wi, [["render", qi]]), Qi = ["popover", "dialog"], Xi = ["sm", "md", "lg"], Ji = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], er = {
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
      validator: (e) => Qi.includes(e)
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
      validator: (e) => Xi.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Ji.includes(e)
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
        const i = !!e;
        this.isControlled || (this.uncontrolledOpen = i), this.$emit("update:open", i);
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
    onTriggerClick(e, i) {
      typeof i == "function" ? i() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, tr = { class: "ui-field-action-header" }, ir = { class: "ui-field-action-header__text" }, rr = {
  key: 0,
  class: "ui-field-action-header__title"
}, lr = {
  key: 1,
  class: "ui-field-action-header__description"
}, ar = { class: "ui-field-action-body" }, nr = { class: "ui-field-action-body" }, sr = { class: "ui-field-action-footer" };
function or(e, i, r, n, a, t) {
  const u = _("ui-button"), d = _("ui-popover"), c = _("ui-dialog");
  return l(), s("div", {
    class: k([
      "ui-field-action",
      t.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    t.isPopover ? (l(), b(d, {
      key: 0,
      open: t.resolvedOpen,
      "onUpdate:open": i[0] || (i[0] = (h) => t.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, j({
      trigger: g(({ open: h, toggle: p }) => [
        y(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: t.close,
          label: t.triggerLabel,
          hasValue: t.hasValue
        }, () => [
          r.iconOnly ? (l(), b(u, {
            key: 0,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: r.size,
            rounded: "",
            cubed: "",
            "prefix-icon": r.prefixIcon,
            disabled: r.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (v) => t.onTriggerClick(v, p)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (l(), b(u, {
            key: 1,
            type: "button",
            variant: t.triggerVariant,
            color: t.triggerColor,
            size: r.size,
            rounded: "",
            "prefix-icon": r.prefixIcon,
            "suffix-icon": r.suffixIcon,
            disabled: r.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": t.triggerAriaLabel,
            onClick: (v) => t.onTriggerClick(v, p)
          }, {
            default: g(() => [
              S(m(t.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        o("div", ar, [
          y(e.$slots, "default", {
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
          y(e.$slots, "header", { close: h }, () => [
            o("div", tr, [
              o("div", ir, [
                r.title ? (l(), s("p", rr, m(r.title), 1)) : f("", !0),
                r.description ? (l(), s("p", lr, m(r.description), 1)) : f("", !0)
              ]),
              r.clearable && t.hasValue ? (l(), b(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": t.resolvedClearLabel,
                onClick: (p) => t.onClear(h)
              }, {
                default: g(() => [
                  S(m(t.resolvedClearLabel), 1)
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
          y(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (l(), s(I, { key: 1 }, [
      y(e.$slots, "trigger", {
        open: t.resolvedOpen,
        toggle: t.toggle,
        close: t.close,
        label: t.triggerLabel,
        hasValue: t.hasValue
      }, () => [
        r.iconOnly ? (l(), b(u, {
          key: 0,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: r.size,
          rounded: "",
          cubed: "",
          "prefix-icon": r.prefixIcon,
          disabled: r.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: i[1] || (i[1] = (h) => t.onTriggerClick(h, t.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (l(), b(u, {
          key: 1,
          type: "button",
          variant: t.triggerVariant,
          color: t.triggerColor,
          size: r.size,
          rounded: "",
          "prefix-icon": r.prefixIcon,
          "suffix-icon": r.suffixIcon,
          disabled: r.disabled,
          "aria-expanded": t.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": t.triggerAriaLabel,
          onClick: i[2] || (i[2] = (h) => t.onTriggerClick(h, t.toggle))
        }, {
          default: g(() => [
            S(m(t.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(c, {
        open: t.resolvedOpen,
        "onUpdate:open": i[4] || (i[4] = (h) => t.resolvedOpen = h),
        title: r.title,
        description: r.description,
        icon: r.dialogIcon,
        "max-width": r.maxWidth,
        "close-on-backdrop": r.closeOnBackdrop,
        "close-on-escape": r.closeOnEscape
      }, j({
        default: g(() => [
          o("div", nr, [
            y(e.$slots, "default", {
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
            y(e.$slots, "footer", { close: t.close }, () => [
              o("div", sr, [
                r.clearable && t.hasValue ? (l(), b(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: i[3] || (i[3] = (h) => t.onClear(t.close))
                }, {
                  default: g(() => [
                    S(m(t.resolvedClearLabel), 1)
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
                    S(m(t.resolvedDoneLabel), 1)
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
const ur = /* @__PURE__ */ x(er, [["render", or]]), cr = ["auto", "file", "folder"], dr = ["sm", "md", "lg"], hr = { icon: "folder", color: "text-sky-500" }, fr = { icon: "file-lines", color: "text-muted-foreground" }, pr = {
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
function q(e) {
  return String(e ?? "").trim();
}
function mr(e) {
  const i = q(e);
  return /[/\\]\s*$/.test(i);
}
function Re(e) {
  const i = q(e).replace(/[/\\]+$/, "");
  if (!i) return "";
  const r = i.split(/[/\\]/);
  return r[r.length - 1] || i;
}
function gr(e) {
  const i = Re(e), r = i.lastIndexOf(".");
  return r <= 0 || r === i.length - 1 ? "" : i.slice(r + 1).toLowerCase();
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
}, br = {
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
      validator: (e) => cr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => dr.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : mr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = q(this.name);
      return e ? this.basenameOnly ? Re(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return q(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return hr;
      const e = gr(this.name);
      return pr[e] || fr;
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
}, yr = ["aria-label"], vr = ["title"];
function _r(e, i, r, n, a, t) {
  const u = _("ui-icon");
  return l(), s("div", {
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
    }, m(t.displayLabel), 11, vr)
  ], 10, yr);
}
const kr = /* @__PURE__ */ x(br, [["render", _r]]);
function wr(e) {
  const i = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!i.length) return null;
  const r = Math.min(...i.map((u) => u.top)), n = Math.min(...i.map((u) => u.left)), a = Math.max(...i.map((u) => u.right)), t = Math.max(...i.map((u) => u.bottom));
  return {
    top: r,
    left: n,
    right: a,
    bottom: t,
    width: a - n,
    height: t - r,
    x: n,
    y: r,
    toJSON: () => ({})
  };
}
function ae(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const i = e.closest(".ui-form-row");
  return i instanceof HTMLElement ? i : e;
}
function ve(e) {
  const i = ae(e);
  if (!i) return null;
  if (i.classList.contains("ui-form-row")) {
    const r = [
      i.querySelector(".ui-form-row-text"),
      i.querySelector(".ui-form-row-control")
    ].filter((a) => a instanceof HTMLElement), n = wr(r.map((a) => a.getBoundingClientRect()));
    if (n) return n;
  }
  return i.getBoundingClientRect();
}
function xr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const i = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && i.push(n);
  return i;
}
const Sr = ["dialog", "popover", "card", "tour"], Cr = ["solid", "regular", "brands", "light", "duotone", "thin"], Lr = [
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
], Tr = ["sm", "md", "lg", "xl", "2xl", "full"], O = 12, Ir = 8, Ar = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Sr.includes(e)
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
      validator: (e) => Cr.includes(e)
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
      validator: (e) => Lr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Ir
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Tr.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? ae(e) : typeof e == "string" && e.trim() ? ae(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const i = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const n = window.innerWidth, a = window.innerHeight, t = r.getBoundingClientRect(), u = t.width || 320, d = t.height || 180;
      if (!i) {
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
      const c = ve(i);
      if (!c) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, c.top - h), v = Math.max(0, c.left - h), A = Math.min(a, c.bottom + h), F = Math.min(n, c.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${v}px`,
        width: `${Math.max(0, F - v)}px`,
        height: `${Math.max(0, A - p)}px`
      };
      let V = A + O, E = v;
      this.placement.startsWith("top") ? V = p - d - O : this.placement.startsWith("right") ? (V = p, E = F + O) : this.placement.startsWith("left") ? (V = p, E = v - u - O) : this.placement.includes("end") && (E = F - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && V + d > a - O && (V = p - d - O), V = Math.max(O, Math.min(V, a - d - O)), E = Math.max(O, Math.min(E, n - u - O)), this.tourPanelStyle = {
        position: "fixed",
        top: `${V}px`,
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
        const i = ve(e);
        if (i && i.height > 0) {
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
        const i = this.resolveTourTarget();
        if (i)
          for (const r of xr(i))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Mr = { class: "ui-guidance-footer" }, zr = { class: "ui-guidance-popover" }, Pr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Vr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Or = { class: "ui-guidance-popover__text" }, Rr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Er = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Br = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Dr = ["aria-label"], Fr = { class: "ui-guidance-tour__content" }, Nr = { class: "ui-header-lead" }, Hr = { class: "ui-header-lead__main" }, $r = {
  key: 0,
  class: "ui-header-lead__icon"
}, Wr = { class: "ui-header-lead__text" }, Yr = {
  key: 0,
  class: "ui-guidance-tour__title"
}, Gr = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Ur = {
  key: 0,
  class: "ui-header-lead__actions"
}, Kr = {
  key: 0,
  class: "ui-guidance-tour__body"
}, jr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function qr(e, i, r, n, a, t) {
  const u = _("ui-button"), d = _("ui-card"), c = _("ui-dialog"), h = _("ui-icon"), p = _("ui-popover");
  return t.shouldRender ? (l(), s("div", {
    key: 0,
    class: k(t.rootShellClass)
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
      t.hasFooterActions ? {
        name: "footer",
        fn: g(() => [
          y(e.$slots, "footer", {}, () => [
            o("div", Mr, [
              r.showFooterClose ? (l(), b(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: t.onClose
              }, {
                default: g(() => [
                  S(m(t.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (l(), b(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: t.onGo
              }, {
                default: g(() => [
                  S(m(t.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (l(), b(c, {
      key: 1,
      open: t.syncOpen,
      "onUpdate:open": i[0] || (i[0] = (v) => t.syncOpen = v),
      icon: r.icon,
      "icon-type": r.iconType,
      title: r.title,
      description: r.description,
      "max-width": r.maxWidth,
      "close-on-backdrop": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape,
      "show-close": r.showClose,
      onAfterLeave: i[1] || (i[1] = (v) => e.$emit("after-leave"))
    }, j({
      default: g(() => [
        y(e.$slots, "default")
      ]),
      _: 2
    }, [
      r.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: g(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: t.onGo
          }, {
            default: g(() => [
              S(m(t.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (l(), b(p, {
      key: 2,
      open: t.syncOpen,
      "onUpdate:open": i[2] || (i[2] = (v) => t.syncOpen = v),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: g((v) => [
        y(e.$slots, "trigger", Ee(Be(v)))
      ]),
      content: g(() => [
        o("div", zr, [
          r.icon || r.title || r.description ? (l(), s("div", Pr, [
            r.icon ? (l(), s("span", Vr, [
              w(h, {
                name: r.icon,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            o("div", Or, [
              r.title ? (l(), s("p", Rr, m(r.title), 1)) : f("", !0),
              r.description ? (l(), s("p", Er, m(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          y(e.$slots, "default"),
          t.hasFooterActions && !e.$slots.footer ? (l(), s("div", Br, [
            r.showFooterClose ? (l(), b(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: t.onClose
            }, {
              default: g(() => [
                S(m(t.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            r.showGo ? (l(), b(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: t.onGo
            }, {
              default: g(() => [
                S(m(t.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : y(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (l(), b(Q, {
      key: 3,
      to: "body"
    }, [
      w(X, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: i[5] || (i[5] = (v) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          t.syncOpen ? (l(), s("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": a.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: i[4] || (i[4] = le((...v) => t.onEscape && t.onEscape(...v), ["esc"]))
          }, [
            r.closeOnBackdrop ? (l(), s("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: i[3] || (i[3] = (...v) => t.onBackdrop && t.onBackdrop(...v))
            })) : f("", !0),
            a.tourHighlightStyle ? (l(), s("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: R(a.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            o("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: R(a.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r.title || t.resolvedGoLabel
            }, [
              o("div", Fr, [
                o("div", Nr, [
                  o("div", Hr, [
                    r.icon ? (l(), s("span", $r, [
                      w(h, {
                        name: r.icon,
                        type: r.iconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    o("div", Wr, [
                      r.title ? (l(), s("p", Yr, m(r.title), 1)) : f("", !0),
                      r.description ? (l(), s("p", Gr, m(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (l(), s("div", Ur, [
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
                e.$slots.default ? (l(), s("div", Kr, [
                  y(e.$slots, "default")
                ])) : f("", !0),
                t.hasFooterActions && !e.$slots.footer ? (l(), s("div", jr, [
                  r.showFooterClose ? (l(), b(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onClose
                  }, {
                    default: g(() => [
                      S(m(t.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  r.showGo ? (l(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onGo
                  }, {
                    default: g(() => [
                      S(m(t.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : y(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Dr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const Zr = /* @__PURE__ */ x(Ar, [["render", qr]]), Qr = ["solid", "regular", "brands", "light", "duotone", "thin"], Xr = {
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
      validator: (e) => Qr.includes(e)
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
      return C(
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), i = Array.isArray(this.icons) ? this.icons : [];
      let r = i;
      return e && (r = i.filter((n) => String(n).toLowerCase().includes(e))), r.slice(0, this.maxResults);
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
}, Jr = ["disabled", "aria-expanded", "onClick"], el = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, tl = { class: "ui-select-field-suffix" }, il = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, rl = { class: "ui-icon-picker-panel" }, ll = { class: "ui-icon-picker-panel__header" }, al = { class: "ui-icon-picker-panel__title" }, nl = { class: "ui-icon-picker-panel__search" }, sl = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, ol = {
  key: 1,
  class: "ui-icon-picker-grid"
}, ul = ["title", "onClick"];
function cl(e, i, r, n, a, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return l(), s("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: a.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (p) => a.popoverOpen = p),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: A }) => [
        y(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: A
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", el, [
              w(u, {
                name: t.localIcon || "grid",
                type: r.iconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !t.localIcon }])
            }, m(t.localIcon || t.triggerLabel), 3),
            o("span", tl, [
              o("span", il, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, Jr)
        ])
      ]),
      content: g(() => [
        o("div", rl, [
          o("div", ll, [
            o("span", al, m(t.popoverTitleLabel), 1),
            t.localIcon ? (l(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: P(t.clearIcon, ["stop"])
            }, {
              default: g(() => [
                S(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", nl, [
            w(c, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": i[0] || (i[0] = (p) => a.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: t.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          t.filteredIcons.length ? (l(), s("div", ol, [
            (l(!0), s(I, null, M(t.filteredIcons, (p) => (l(), s("button", {
              key: p,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": t.localIcon === p }]),
              title: p,
              onClick: (v) => t.selectIcon(p)
            }, [
              w(u, {
                name: p,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, ul))), 128))
          ])) : (l(), s("div", sl, m(t.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const dl = /* @__PURE__ */ x(Xr, [["render", cl]]), hl = ["tr-TR", "en-US"], Z = se({
  currency: "TRY",
  format: "tr-TR"
});
function fl(e, i = Z.format) {
  return hl.includes(e) ? e : i;
}
function pl(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Z.currency = J(e.currency));
  const i = e.format ?? e.locale;
  i != null && (Z.format = fl(i));
}
function ml() {
  return De(Z);
}
const gl = {
  name: "PriceInput",
  components: { CurrencyInput: Oe },
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
    return { priceInputConfig: ml() };
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
function bl(e, i, r, n, a, t) {
  const u = _("CurrencyInput");
  return l(), b(u, T({
    "model-value": r.modelValue,
    currency: t.resolvedCurrency,
    locale: t.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": i[0] || (i[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: i[1] || (i[1] = (d) => e.$emit("input", d)),
    onChange: i[2] || (i[2] = (d) => e.$emit("change", d)),
    onFocus: i[3] || (i[3] = (d) => e.$emit("focus", d)),
    onBlur: i[4] || (i[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const yl = /* @__PURE__ */ x(gl, [["render", bl]]);
function vl(e) {
  const i = String(e ?? "");
  if (!i)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  i.length >= 8 && (r += 1), i.length >= 12 && (r += 1), /[a-z]/.test(i) && /[A-Z]/.test(i) ? r += 1 : /[a-zA-Z]/.test(i) && (r += 0.5), /\d/.test(i) && (r += 1), /[^a-zA-Z0-9]/.test(i) && (r += 1);
  const n = Math.min(4, Math.round(r)), a = ["weak", "fair", "good", "strong"], t = n <= 0 ? "weak" : a[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: t
  };
}
let ie = 0;
const _l = ["sm", "md", "lg"], kl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => _l.includes(e)
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
      return vl(this.modelValue);
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
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), i = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = n);
      return i;
    }
  }
}, wl = ["aria-label", "aria-pressed", "disabled"], xl = ["id", "aria-live"];
function Sl(e, i, r, n, a, t) {
  const u = _("ui-icon"), d = _("ui-input"), c = _("ui-progress");
  return l(), s("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    w(d, T({
      id: t.resolvedId,
      modelValue: t.innerValue,
      "onUpdate:modelValue": i[1] || (i[1] = (h) => t.innerValue = h),
      type: a.visible ? "text" : "password",
      class: "w-full",
      size: r.size,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength,
      "aria-describedby": t.strengthDescribedby
    }, t.passthroughAttrs, {
      onFocus: i[2] || (i[2] = (h) => e.$emit("focus", h)),
      onBlur: i[3] || (i[3] = (h) => e.$emit("blur", h))
    }), {
      append: g(() => [
        o("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": t.toggleAriaLabel,
          "aria-pressed": a.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: i[0] || (i[0] = (h) => a.visible = !a.visible)
        }, [
          w(u, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, wl)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    t.showStrengthMeter ? (l(), s("div", {
      key: 0,
      id: a.fallbackStrengthId,
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
      t.strength.label !== "empty" ? (l(), s("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${t.strength.label}`])
      }, m(t.strengthText), 3)) : f("", !0)
    ], 8, xl)) : f("", !0)
  ], 2);
}
const Cl = /* @__PURE__ */ x(kl, [["render", Sl]]), Ll = ["bar", "circle"], _e = ["sm", "md", "lg"], ke = ["thin", "md"], Tl = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, Il = { sm: 1.5, md: 2, lg: 2 }, Al = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Ll.includes(e)
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
      validator: (e) => Tl.includes(e)
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
      const e = this.type === "circle" ? _e.includes(this.size) ? this.size : "sm" : ke.includes(this.size) ? this.size : "md";
      return C(
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
      return _e.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return ke.includes(this.size) ? this.size : "md";
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
      const i = Number(this.value);
      return Number.isFinite(i) ? Math.min(100, Math.max(0, i / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = G[this.circleSizeKey] ?? G.sm, i = Il[this.circleSizeKey] ?? 2, r = (e - i) / 2, n = e / 2, a = 2 * Math.PI * r, t = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: i, radius: r, center: n, circumference: a, offset: t };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ml = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], zl = ["width", "height", "viewBox"], Pl = ["cx", "cy", "r", "stroke-width"], Vl = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ol = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Rl(e, i, r, n, a, t) {
  return l(), s("div", {
    class: k(t.rootClass),
    style: R(t.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : t.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : t.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (l(), s("svg", {
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
      }, null, 8, Pl),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke,
        "stroke-dasharray": t.circleMetrics.circumference,
        "stroke-dashoffset": t.circleMetrics.offset
      }, null, 8, Vl)
    ], 8, zl)) : (l(), s("div", Ol, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: R({ width: `${t.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Ml);
}
const El = /* @__PURE__ */ x(Al, [["render", Rl]]), Bl = Ae("ui-sheet"), Dl = ["left", "right"], Fl = ["sm", "md", "lg", "xl"], Nl = ["solid", "regular", "brands", "light", "duotone", "thin"], we = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Hl = {
  name: "Sheet",
  components: { Divider: Ie },
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
      validator: (e) => Dl.includes(e)
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
      validator: (e) => Fl.includes(e)
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
      validator: (e) => Nl.includes(e)
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
    const e = Bl();
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
      return we[this.size] || we.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return C(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.fullOnMobile ? "ui-sheet-panel--full-mobile" : "",
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : z(this, "ui.dialog.close", "Close");
    },
    rootLayerClasses() {
      return C(
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
}, $l = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Wl = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Yl = {
  key: 0,
  class: "ui-sheet-header__icon"
}, Gl = ["id"], Ul = {
  key: 2,
  class: "ui-sheet-header__actions"
}, Kl = ["id"], jl = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function ql(e, i, r, n, a, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("Divider");
  return a.portalReady ? (l(), b(Q, {
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
        r.open ? (l(), s("div", {
          key: 0,
          ref: "layerRef",
          class: k(t.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: i[2] || (i[2] = (...h) => t.onLayerKeydown && t.onLayerKeydown(...h))
        }, [
          r.overlay ? (l(), s("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: i[0] || (i[0] = (...h) => t.onBackdrop && t.onBackdrop(...h))
          })) : f("", !0),
          o("div", T({
            ref: "panelRef",
            class: t.panelClasses,
            role: "dialog",
            "aria-modal": r.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": t.ariaLabelledby,
            "aria-describedby": t.ariaDescribedby,
            "aria-label": t.ariaLabelAttr
          }, t.passthroughAttrs, {
            onClick: i[1] || (i[1] = P(() => {
            }, ["stop"]))
          }), [
            t.hasHeaderBlock ? (l(), s("div", Wl, [
              y(e.$slots, "header", {}, () => [
                t.hasDefaultHeader ? (l(), s("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (l(), s("span", Yl, [
                    w(u, {
                      name: r.icon,
                      type: r.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (l(), s("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(r.title), 9, Gl)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), s("div", Ul, [
                    y(e.$slots, "append"),
                    y(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (l(), b(d, {
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
                  r.description ? (l(), s("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(r.description), 9, Kl)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), s("div", jl, [
              y(e.$slots, "toolbar")
            ])) : f("", !0),
            t.showHeaderDivider ? (l(), b(c, {
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
              y(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (l(), s("div", {
              key: 4,
              class: k(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
            }, [
              y(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, $l)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Zl = /* @__PURE__ */ x(Hl, [["render", ql]]), Ql = ["sm", "md", "lg", "full"], xe = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Xl = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Ql.includes(e)
    }
  },
  computed: {
    rootClass() {
      return C(
        "ui-menu",
        xe[this.width] || xe.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Jl = {
  key: 0,
  class: "ui-menu-header"
}, ea = { class: "ui-menu-body" }, ta = {
  key: 1,
  class: "ui-menu-footer"
};
function ia(e, i, r, n, a, t) {
  return l(), s("nav", T({ class: t.rootClass }, t.passthroughAttrs), [
    e.$slots.header ? (l(), s("div", Jl, [
      y(e.$slots, "header")
    ])) : f("", !0),
    o("div", ea, [
      y(e.$slots, "default")
    ]),
    e.$slots.footer ? (l(), s("div", ta, [
      y(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const ra = /* @__PURE__ */ x(Xl, [["render", ia]]), la = {
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
      return C("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, aa = {
  key: 0,
  class: "ui-menu-group-label"
}, na = { class: "ui-menu-group-items" };
function sa(e, i, r, n, a, t) {
  return l(), s("div", T({ class: t.groupClass }, t.passthroughAttrs), [
    r.label ? (l(), s("p", aa, m(r.label), 1)) : f("", !0),
    o("div", na, [
      y(e.$slots, "default")
    ])
  ], 16);
}
const oa = /* @__PURE__ */ x(la, [["render", sa]]), ua = {
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
      return C(
        "ui-menu-item",
        this.active && "ui-menu-item--active",
        this.$attrs.class
      );
    },
    forwardedAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function ca(e, i, r, n, a, t) {
  const u = _("ui-button");
  return l(), b(u, T({
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
    class: t.itemClass,
    "aria-current": r.active ? "page" : void 0
  }, t.forwardedAttrs, { onClick: t.onClick }), {
    default: g(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const da = /* @__PURE__ */ x(ua, [["render", ca]]), ha = {
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
      return C("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, fa = ["aria-label"];
function pa(e, i, r, n, a, t) {
  return l(), s("div", T({
    class: t.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, t.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, fa);
}
const ma = /* @__PURE__ */ x(ha, [["render", pa]]), ga = ["horizontal", "vertical"], ba = ["default", "pills"], ya = {
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
      validator: (e) => ba.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ga.includes(e)
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
      return (Array.isArray(this.steps) ? this.steps : []).map((i) => ({
        title: (i == null ? void 0 : i.title) ?? "",
        description: (i == null ? void 0 : i.description) ?? "",
        icon: (i == null ? void 0 : i.icon) ?? null,
        iconType: (i == null ? void 0 : i.iconType) ?? "light"
      }));
    },
    rootClass() {
      return C(
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const i = this.normalizedSteps.length - 1, r = Math.min(i, Math.max(0, e));
      this.$emit("update:modelValue", r);
    },
    pillClass(e) {
      const i = this.modelValue;
      return e < i ? "ui-stepper-pill--complete" : e === i ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const i = this.modelValue;
      return e < i ? "ui-stepper-indicator--complete" : e === i ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
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
}, va = ["aria-label"], _a = { class: "ui-stepper-pills-track" }, ka = {
  key: 0,
  class: "ui-stepper-pills-label"
}, wa = { class: "flex w-full min-w-0 items-center justify-center" }, xa = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Sa = {
  key: 1,
  class: "tabular-nums"
}, Ca = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, La = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Ta = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ia = { class: "flex flex-col items-center" }, Aa = {
  key: 1,
  class: "tabular-nums"
}, Ma = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, za = { class: "ui-stepper-title" }, Pa = {
  key: 0,
  class: "ui-stepper-description"
};
function Va(e, i, r, n, a, t) {
  const u = _("ui-icon");
  return l(), s("div", T({
    class: t.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, t.passthroughAttrs), [
    r.variant === "pills" ? (l(), s(I, { key: 0 }, [
      o("div", _a, [
        (l(!0), s(I, null, M(t.normalizedSteps, (d, c) => (l(), b(K(r.interactive ? "button" : "span"), T({
          key: c,
          class: ["ui-stepper-pill", t.pillClass(c)],
          role: "listitem",
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (l(), s("p", ka, m(t.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (l(!0), s(I, { key: 1 }, M(t.normalizedSteps, (d, c) => (l(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", wa, [
        c > 0 ? (l(), s("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), s("span", xa)),
        (l(), b(K(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (l(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), s("span", Sa, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (l(), s("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (l(), s("span", Ca))
      ]),
      o("p", La, m(d.title), 1),
      d.description ? (l(), s("p", Ta, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (l(!0), s(I, { key: 2 }, M(t.normalizedSteps, (d, c) => (l(), s("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", Ia, [
        (l(), b(K(r.interactive ? "button" : "div"), T({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (l(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (l(), s("span", Aa, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (l(), s("span", {
          key: 0,
          class: k(["ui-stepper-vrail", t.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      o("div", Ma, [
        o("p", za, m(d.title), 1),
        d.description ? (l(), s("p", Pa, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, va);
}
const Oa = /* @__PURE__ */ x(ya, [["render", Va]]);
let Se = 0;
const Ra = {
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
    return Se += 1, { fallbackId: `ui-slider-${Se}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return C("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
    },
    fillPercent() {
      const e = Number(this.max) - Number(this.min);
      if (e <= 0 || !Number.isFinite(Number(this.modelValue)))
        return 0;
      const i = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, i));
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
      ]), i = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = n);
      return i;
    }
  },
  methods: {
    onNativeInput(e) {
      const i = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(i) ? this.min : i), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, Ea = {
  key: 0,
  class: "ui-slider-header"
}, Ba = {
  key: 0,
  class: "ui-form-label"
}, Da = {
  key: 1,
  class: "ui-slider-value"
}, Fa = { class: "ui-slider-rail" }, Na = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Ha = {
  key: 1,
  class: "ui-slider-scale"
}, $a = { key: 0 }, Wa = { key: 1 };
function Ya(e, i, r, n, a, t) {
  const u = _("ui-progress");
  return l(), s("div", {
    class: k(t.rootClass)
  }, [
    r.label || t.hasValue ? (l(), s("div", Ea, [
      r.label ? (l(), s("span", Ba, m(r.label), 1)) : f("", !0),
      t.hasValue ? (l(), s("span", Da, m(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    o("div", Fa, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: t.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", T(t.passthroughAttrs, {
        id: t.resolvedId,
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
        onInput: i[0] || (i[0] = (...d) => t.onNativeInput && t.onNativeInput(...d)),
        onChange: i[1] || (i[1] = (...d) => t.onChange && t.onChange(...d))
      }), null, 16, Na)
    ]),
    r.minLabel || r.maxLabel ? (l(), s("div", Ha, [
      r.minLabel ? (l(), s("span", $a, m(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (l(), s("span", Wa, m(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const Ga = /* @__PURE__ */ x(Ra, [["render", Ya]]);
let Ce = 0;
const Ua = {
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
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), i = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = n);
      return i;
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
}, Ka = ["id", "aria-checked", "disabled", "aria-describedby"];
function ja(e, i, r, n, a, t) {
  return l(), s("button", T({
    type: "button",
    role: "switch",
    id: t.resolvedId,
    class: [
      "ui-switch",
      t.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": r.modelValue ? "true" : "false",
    disabled: r.disabled,
    "aria-describedby": r.ariaDescribedby
  }, t.passthroughAttrs, {
    onClick: i[0] || (i[0] = (...u) => t.toggle && t.toggle(...u)),
    onKeydown: i[1] || (i[1] = (...u) => t.onKeydown && t.onKeydown(...u))
  }), [
    o("span", {
      class: k(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      o("span", {
        class: k(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Ka);
}
const qa = /* @__PURE__ */ x(Ua, [["render", ja]]), Za = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return C("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Qa = { class: "ui-table-scroll" };
function Xa(e, i, r, n, a, t) {
  return l(), s("div", Qa, [
    o("table", T({ class: t.rootClass }, t.passthroughAttrs), [
      y(e.$slots, "default")
    ], 16)
  ]);
}
const Ja = /* @__PURE__ */ x(Za, [["render", Xa]]), en = {
  name: "TableBody"
}, tn = { class: "ui-table-body" };
function rn(e, i, r, n, a, t) {
  return l(), s("tbody", tn, [
    y(e.$slots, "default")
  ]);
}
const ln = /* @__PURE__ */ x(en, [["render", rn]]), an = ["left", "center", "right"], nn = ["title", "secondary", "body"], sn = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => an.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || nn.includes(e)
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
      return C(
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
}, on = ["colspan"];
function un(e, i, r, n, a, t) {
  return l(), s("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: k(t.rootClass)
  }, [
    y(e.$slots, "default")
  ], 10, on);
}
const cn = /* @__PURE__ */ x(sn, [["render", un]]), dn = ["left", "center", "right"], hn = ["sm", "md", "lg"], fn = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => dn.includes(e)
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
      return C(
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
      if (!(this.iconCol || hn.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function pn(e, i, r, n, a, t) {
  return l(), s("th", {
    class: k(t.rootClass),
    style: R(t.widthStyle)
  }, [
    y(e.$slots, "default")
  ], 6);
}
const mn = /* @__PURE__ */ x(fn, [["render", pn]]), gn = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return C(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function bn(e, i, r, n, a, t) {
  return l(), s("thead", {
    class: k(t.rootClass)
  }, [
    y(e.$slots, "default")
  ], 2);
}
const yn = /* @__PURE__ */ x(gn, [["render", bn]]), vn = {
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
}, _n = { class: "ui-table-pagination" }, kn = { class: "ui-table-pagination-meta" }, wn = { class: "ui-table-pagination-nav" }, xn = { class: "ui-table-pagination-page" };
function Sn(e, i, r, n, a, t) {
  const u = _("ui-button");
  return l(), s("div", _n, [
    o("div", kn, [
      y(e.$slots, "meta", {}, () => [
        S(m(r.metaText), 1)
      ])
    ]),
    o("div", wn, [
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !t.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: i[0] || (i[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      o("div", xn, m(r.pageLabel), 1),
      w(u, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !t.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: i[1] || (i[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Cn = /* @__PURE__ */ x(vn, [["render", Sn]]), Ln = ["none", "soft", "strong"], Tn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ln.includes(e)
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
      return C(
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
function In(e, i, r, n, a, t) {
  return l(), s("tr", {
    class: k(t.rootClass)
  }, [
    y(e.$slots, "default")
  ], 2);
}
const An = /* @__PURE__ */ x(Tn, [["render", In]]), Mn = {
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
      return C("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, zn = ["id", "aria-labelledby"];
function Pn(e, i, r, n, a, t) {
  return Fe((l(), s("div", T({
    role: "tabpanel",
    id: t.panelDomId,
    "aria-labelledby": t.triggerDomId,
    class: t.panelClass
  }, t.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, zn)), [
    [Ne, t.isActive]
  ]);
}
const Vn = /* @__PURE__ */ x(Mn, [["render", Pn]]), On = Ae("ui-timepicker"), re = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const Rn = {
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
      fallbackId: On(),
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
      return Array.from({ length: 24 }, (e, i) => i);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), i = [];
      for (let r = 0; r < 60; r += e)
        i.push(r);
      return i;
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
      let i = 0, r = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (i = Math.min(23, Math.max(0, parseInt(n[1], 10))), r = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const a = this.minuteValues;
      let t = a[0] ?? 0, u = 999;
      for (const d of a) {
        const c = Math.abs(d - r);
        c < u && (u = c, t = d);
      }
      this.draftHour = i, this.draftMinute = t;
    },
    wheelItemHeight(e) {
      if (!e) return re;
      const i = e.querySelector(".ui-timepicker-wheel-item");
      if (!i) return re;
      const r = i.getBoundingClientRect().height;
      return r > 0 ? r : re;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const i = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!i) return (e.clientHeight - r) / 2;
      const n = parseFloat(window.getComputedStyle(i).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, i) {
      const r = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, t = Math.round((a - n - r / 2) / r);
      return Math.min(i, Math.max(0, t));
    },
    scrollTopForIndex(e, i) {
      const r = this.wheelItemHeight(e), n = this.wheelSpacerTop(e);
      return Math.max(0, n + i * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, i, { smooth: r = !1 } = {}) {
      if (!e) return;
      const n = this.scrollTopForIndex(e, i);
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
      const i = this.minuteValues;
      if (!i.length) return;
      const r = Math.min(i.length - 1, Math.max(0, e));
      this.draftMinute = i[r], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, r, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, i = this.$refs.minuteWheel;
      !e || !i || (this.supportsScrollEnd ? (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scrollend", this.onHourScrollEnd), i.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), i.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scrollend", this.onHourScrollEnd), i.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), i.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), i.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scroll", this.onHourScrollDebounced), i.removeEventListener("scroll", this.onMinuteScrollDebounced);
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
      const e = this.$refs.minuteWheel, i = this.minuteValues;
      if (!e || !i.length) return;
      const r = this.indexFromScroll(e, i.length - 1);
      this.draftMinute = i[r];
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
      const i = this.indexFromScroll(e, 23);
      this.draftHour = i;
      const r = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - r) > 0.5 && (e.scrollTop = r), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const i = this.minuteValues;
      if (!i.length) return;
      const r = this.indexFromScroll(e, i.length - 1);
      this.draftMinute = i[r];
      const n = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, En = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Bn = { class: "ui-timepicker-wheels" }, Dn = { class: "ui-timepicker-wheels-row" }, Fn = ["aria-valuenow", "aria-label"], Nn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Hn = { class: "ui-timepicker-wheel-spacer" }, $n = ["onClick"], Wn = ["aria-valuenow", "aria-label"], Yn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Gn = { class: "ui-timepicker-wheel-spacer" }, Un = ["onClick"], Kn = { class: "min-w-0 flex-1 truncate text-foreground" }, jn = { class: "ui-timepicker-panel w-full p-2" }, qn = { class: "ui-timepicker-wheels" }, Zn = { class: "ui-timepicker-wheels-row" }, Qn = ["aria-valuenow", "aria-label"], Xn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Jn = { class: "ui-timepicker-wheel-spacer" }, es = ["onClick"], ts = ["aria-valuenow", "aria-label"], is = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, rs = { class: "ui-timepicker-wheel-spacer" }, ls = ["onClick"];
function as(e, i, r, n, a, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return l(), s("div", {
    class: k([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (l(), s("div", En, [
      o("div", Bn, [
        i[2] || (i[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Dn, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": t.hourAriaLabel
          }, [
            o("div", Nn, [
              o("div", Hn, [
                (l(!0), s(I, null, M(t.hourOptions, (c) => (l(), s("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => t.selectHour(c)
                }, m(t.pad2(c)), 11, $n))), 128))
              ])
            ], 512)
          ], 8, Fn),
          i[1] || (i[1] = o("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": a.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": t.minuteAriaLabel
          }, [
            o("div", Yn, [
              o("div", Gn, [
                (l(!0), s(I, null, M(t.minuteValues, (c, h) => (l(), s("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => t.selectMinute(h)
                }, m(t.pad2(c)), 11, Un))), 128))
              ])
            ], 512)
          ], 8, Wn)
        ]),
        i[3] || (i[3] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        i[4] || (i[4] = o("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (l(), b(d, {
      key: 1,
      open: a.menuOpen,
      "onUpdate:open": i[0] || (i[0] = (c) => a.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: c, toggle: h, close: p }) => [
        y(e.$slots, "trigger", {
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
            disabled: r.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", Kn, m(t.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        o("div", jn, [
          o("div", qn, [
            i[6] || (i[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", Zn, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": t.hourAriaLabel
              }, [
                o("div", Xn, [
                  o("div", Jn, [
                    (l(!0), s(I, null, M(t.hourOptions, (c) => (l(), s("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => t.selectHour(c)
                    }, m(t.pad2(c)), 11, es))), 128))
                  ])
                ], 512)
              ], 8, Qn),
              i[5] || (i[5] = o("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": t.minuteAriaLabel
              }, [
                o("div", is, [
                  o("div", rs, [
                    (l(!0), s(I, null, M(t.minuteValues, (c, h) => (l(), s("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => t.selectMinute(h)
                    }, m(t.pad2(c)), 11, ls))), 128))
                  ])
                ], 512)
              ], 8, ts)
            ]),
            i[7] || (i[7] = o("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            i[8] || (i[8] = o("div", {
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
const Le = /* @__PURE__ */ x(Rn, [["render", as]]), ns = ["square", "video", "auto"], ss = ["fill", "sm", "md", "lg"], Te = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, os = {
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
      validator: (e) => ns.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => ss.includes(e)
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
      return C(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Te[this.size] || Te.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), i = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = n);
      return i;
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
}, us = ["src", "alt"], cs = ["aria-hidden"], ds = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, hs = {
  key: 3,
  class: "ui-photo__overflow"
}, fs = ["aria-label"], ps = ["aria-label"], ms = { class: "ui-photo-preview__panel" }, gs = ["src", "alt"], bs = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ys(e, i, r, n, a, t) {
  const u = _("ui-icon"), d = _("ui-button");
  return l(), s(I, null, [
    (l(), b(K(t.rootTag), T({
      type: r.interactive ? "button" : void 0,
      class: t.rootClass
    }, t.rootBind, { onClick: t.onClick }), {
      default: g(() => [
        r.src && !a.imageFailed ? (l(), s("img", {
          key: 0,
          src: r.src,
          alt: t.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: i[0] || (i[0] = (c) => a.imageFailed = !0)
        }, null, 40, us)) : (l(), s("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, cs)),
        r.favorite ? (l(), s("span", ds, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (l(), s("span", hs, m(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (l(), b(Q, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: i[2] || (i[2] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: i[1] || (i[1] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, ps),
            o("div", ms, [
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
              t.showPrev ? (l(), b(d, {
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
              t.activeSrc ? (l(), s("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, gs)) : f("", !0),
              t.showNext ? (l(), b(d, {
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
              t.counterLabel ? (l(), s("p", bs, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, fs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const vs = /* @__PURE__ */ x(os, [["render", ys]]), _s = ["square", "video", "auto"], ks = {
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
      validator: (e) => _s.includes(e)
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
      return (this.items || []).map((e, i) => {
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
      return C(
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
}, ws = ["data-count"], xs = ["aria-label"], Ss = ["aria-label"], Cs = { class: "ui-photo-preview__panel" }, Ls = ["src", "alt"], Ts = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Is(e, i, r, n, a, t) {
  const u = _("ui-photo"), d = _("ui-button");
  return l(), s(I, null, [
    o("div", {
      class: k(["ui-photos", t.layoutClass]),
      "data-count": t.displayCount
    }, [
      (l(!0), s(I, null, M(t.visibleItems, (c, h) => (l(), b(u, {
        key: c.key || `${c.src}-${h}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === t.visibleItems.length - 1 && t.overflowCount > 0 ? t.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: t.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, ws),
    (l(), b(Q, { to: "body" }, [
      w(X, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          a.previewOpen ? (l(), s("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t.previewAriaLabel,
            onKeydown: i[1] || (i[1] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: i[0] || (i[0] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, Ss),
            o("div", Cs, [
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
              t.showPrev ? (l(), b(d, {
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
              t.activeSrc ? (l(), s("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Ls)) : f("", !0),
              t.showNext ? (l(), b(d, {
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
              t.counterLabel ? (l(), s("p", Ts, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, xs)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const As = /* @__PURE__ */ x(ks, [["render", Is]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Rs() {
  return {
    push: N,
    dismiss: Ue,
    clear: Ge,
    info: (e) => N({ ...U(e), variant: "info" }),
    success: (e) => N({ ...U(e), variant: "success" }),
    warning: (e) => N({ ...U(e), variant: "warning" }),
    error: (e) => N({ ...U(e), variant: "error" })
  };
}
function Es(e = !1) {
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
function Bs() {
  return {
    confirm: xi
  };
}
const ne = {
  en: je,
  tr: Me
};
function Ds(e = "tr") {
  return ne[e] ?? ne.tr;
}
const Fs = Me, Ms = [
  ["ui-action-card", Pt],
  ["ui-action-card-list", Et],
  ["ui-action-group", qe],
  ["ui-ai-button", Ht],
  ["ui-alert", Ze],
  ["ui-avatar", Qe],
  ["ui-badge", Xe],
  ["ui-button", Je],
  ["ui-card", et],
  ["ui-checkbox", bi],
  ["ui-checkbox-group", wi],
  ["ui-color-picker", ri],
  ["ui-currency-input", Oe],
  ["ui-confirm-dialog", Li],
  ["ui-date-picker", tt],
  ["ui-date-range-picker", Hi],
  ["ui-dialog", it],
  ["ui-divider", Ie],
  ["ui-dropdown", rt],
  ["ui-empty", lt],
  ["ui-field", Zi],
  ["ui-field-action", ur],
  ["ui-file", kr],
  ["ui-form-row", at],
  ["ui-guidance", Zr],
  ["ui-icon", nt],
  ["ui-icon-picker", dl],
  ["ui-input", st],
  ["ui-price-input", yl],
  ["ui-password", Cl],
  ["ui-phone", ot],
  ["ui-pin", ut],
  ["ui-list", ct],
  ["ui-list-item", dt],
  ["ui-popover", ht],
  ["ui-progress", El],
  ["ui-radio", ft],
  ["ui-radio-group", pt],
  ["ui-select", mt],
  ["ui-sheet", Zl],
  ["ui-menu", ra],
  ["ui-menu-group", oa],
  ["ui-menu-item", da],
  ["ui-menu-nav", ma],
  ["ui-segment", gt],
  ["ui-segment-group", bt],
  ["ui-skeleton", yt],
  ["ui-slider", Ga],
  ["ui-stepper", Oa],
  ["ui-switch", qa],
  ["ui-table", Ja],
  ["ui-table-body", ln],
  ["ui-table-cell", cn],
  ["ui-table-head", mn],
  ["ui-table-header", yn],
  ["ui-table-pagination", Cn],
  ["ui-table-row", An],
  ["ui-tag", vt],
  ["ui-tab-list", _t],
  ["ui-tab-panel", Vn],
  ["ui-tabs", kt],
  ["ui-tab-trigger", wt],
  ["ui-time-picker", Le],
  ["ui-timepicker", Le],
  ["ui-tooltip", xt],
  ["ui-toast", St],
  ["ui-photo", vs],
  ["ui-photos", As]
];
function zs(e, i = {}) {
  var d, c;
  const { i18n: r, locale: n, locales: a, theme: t, priceInput: u } = i;
  if (t && Ke(t), u && pl(u), (d = r == null ? void 0 : r.global) != null && d.mergeLocaleMessage) {
    const h = a ?? (n != null ? [n] : [
      typeof r.global.locale == "string" ? r.global.locale : ((c = r.global.locale) == null ? void 0 : c.value) ?? "tr"
    ]);
    for (const p of h) {
      const v = ne[p];
      v && r.global.mergeLocaleMessage(p, v);
    }
  }
  for (const [h, p] of Ms)
    e.component(h, p);
}
const Ns = {
  install: zs
};
export {
  Pt as ActionCard,
  Et as ActionCardList,
  qe as ActionGroup,
  Ht as AiButton,
  Ze as Alert,
  Qe as Avatar,
  Xe as Badge,
  Je as Button,
  et as Card,
  bi as Checkbox,
  wi as CheckboxGroup,
  ri as ColorPicker,
  Li as ConfirmDialog,
  Oe as CurrencyInput,
  tt as DatePicker,
  Hi as DateRangePicker,
  it as Dialog,
  Ie as Divider,
  rt as Dropdown,
  lt as Empty,
  Ws as FEW_COLOR_SCALE,
  Ys as FEW_PALETTE_ID,
  Gs as FEW_PRIMARY,
  Us as FEW_PRIMARY_FOREGROUND,
  Zi as Field,
  ur as FieldAction,
  kr as File,
  at as FormRow,
  Ks as GOOGLE_FONTS_CATALOG,
  Zr as Guidance,
  nt as Icon,
  dl as IconPicker,
  st as Input,
  ct as List,
  dt as ListItem,
  ra as Menu,
  oa as MenuGroup,
  da as MenuItem,
  ma as MenuNav,
  hl as PRICE_FORMATS,
  Cl as Password,
  ot as Phone,
  vs as Photo,
  As as Photos,
  ut as Pin,
  ht as Popover,
  yl as PriceInput,
  El as Progress,
  ft as Radio,
  pt as RadioGroup,
  gt as Segment,
  bt as SegmentGroup,
  mt as Select,
  Zl as Sheet,
  yt as Skeleton,
  Ga as Slider,
  Oa as Stepper,
  qa as Switch,
  js as THEME_CUSTOM_CSS_ID,
  qs as THEME_PRESETS,
  Zs as THEME_PRESET_IDS,
  _t as TabList,
  Vn as TabPanel,
  wt as TabTrigger,
  Ja as Table,
  ln as TableBody,
  cn as TableCell,
  mn as TableHead,
  yn as TableHeader,
  Cn as TablePagination,
  An as TableRow,
  kt as Tabs,
  vt as Tag,
  Le as TimePicker,
  St as Toast,
  xt as Tooltip,
  Qs as applyGoogleFontsForTheme,
  Xs as applyThemeCustomCss,
  Ke as applyUiTheme,
  Js as buildGoogleFontsLinkTag,
  eo as buildGoogleFontsStylesheetUrl,
  to as buildThemeStyleAttr,
  io as clearThemeCustomCss,
  Ge as clearToasts,
  ro as createUiId,
  Ae as createUiIdFactory,
  Ns as default,
  lo as deriveBrandColorsFromPrimary,
  Ue as dismissToast,
  Os as formatCurrencyAmount,
  ai as formatMoneyInput,
  ze as getCurrencySymbol,
  ao as getFewPrimaryColors,
  Ve as getMoneySeparators,
  ml as getPriceInputConfig,
  no as getThemePreset,
  Ds as getUiMessages,
  so as googleFontSelectOptions,
  oo as mergeUiTheme,
  li as parseLocalizedMoneyInput,
  Ye as pickPassthroughAttrs,
  N as pushToast,
  xi as requestConfirm,
  uo as resetUiIds,
  co as resolveControlSize,
  J as resolveCurrencyCode,
  ho as resolvePrimaryColor,
  fo as resolveThemeFontFamilies,
  po as resolveThemePreset,
  mo as resolveThemeVars,
  z as resolveUiText,
  Pe as sanitizeMoneyInput,
  pl as setPriceInputConfig,
  Fs as uiMessagesTr,
  Bs as useConfirm,
  Es as useDialog,
  Rs as useToast,
  go as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
