import { _ as S, ai as W, aF as X, at as Ne, a4 as x, aE as M, au as $e, ar as He, ac as We, ay as j, h as Me, aa as Ye, al as Ge, a6 as ze, aC as Ue, a3 as Ke, a8 as je, an as D, ao as qe, aG as Pe, aA as Ze, am as Qe, Y as pe, aH as Xe, ak as Je, a9 as et, A as tt, a as it, b as rt, c as at, d as lt, C as st, e as nt, f as ot, g as ut, i as ct, E as dt, m as ht, I as ft, n as pt, P as mt, q as gt, o as bt, p as yt, r as vt, R as _t, s as kt, u as wt, S as St, t as xt, v as Ct, w as Tt, M as Lt, H as It, K as At, J as Mt, O as zt, N as Pt } from "./index-DkE80ZLW.js";
import { B as Zn, F as Qn, j as Xn, k as Jn, l as eo, G as to, L as io, D as ro, T as ao, x as lo, y as so, z as no, U as oo, Q as uo, V as co, W as ho, X as fo, Z as po, $ as mo, a0 as go, a1 as bo, a2 as yo, a5 as vo, a7 as _o, ab as ko, ad as wo, ae as So, af as xo, ag as Co, ah as To, aj as Lo, ap as Io, aq as Ao, as as Mo, av as zo, aw as Po, ax as Eo, az as Vo, aB as Oo, aD as Ro, aI as Bo, aJ as Fo, aK as Do } from "./index-DkE80ZLW.js";
import { resolveComponent as _, openBlock as a, createElementBlock as n, normalizeClass as k, renderSlot as b, createBlock as y, createCommentVNode as f, createElementVNode as o, toDisplayString as m, normalizeStyle as V, createVNode as w, mergeProps as L, withCtx as g, withModifiers as z, createTextVNode as T, Fragment as I, renderList as A, withKeys as ne, createSlots as q, normalizeProps as Et, guardReactiveProps as Vt, Teleport as J, Transition as ee, readonly as Ot, reactive as Ee, resolveDynamicComponent as K, withDirectives as Rt, vShow as Bt } from "vue";
const Ft = {
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
    iconType: W,
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
    ...X(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, Dt = ["disabled"], Nt = { class: "ui-action-card__content" }, $t = { class: "ui-action-card__title" }, Ht = {
  key: 0,
  class: "ui-action-card__description"
};
function Wt(e, i, r, s, l, t) {
  const u = _("ui-icon");
  return a(), n("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
  }, [
    b(e.$slots, "leading", {}, () => [
      t.showDefaultLeading ? (a(), y(u, {
        key: 0,
        name: r.icon,
        type: e.resolvedIconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    o("span", Nt, [
      o("span", $t, m(r.title), 1),
      r.description ? (a(), n("span", Ht, m(r.description), 1)) : f("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (a(), y(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, Dt);
}
const Yt = /* @__PURE__ */ S(Ft, [["render", Wt]]), Gt = {
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
}, Ut = ["aria-label"];
function Kt(e, i, r, s, l, t) {
  return a(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: V(t.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, Ut);
}
const jt = /* @__PURE__ */ S(Gt, [["render", Kt]]), qt = {
  name: "AiButton",
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
      const e = Ne(this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, Zt = ["data-size"], Qt = { class: "ui-ai-button__surface" };
function Xt(e, i, r, s, l, t) {
  const u = _("ui-button");
  return a(), n("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": t.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": t.resolvedSize,
    style: V(t.rootStyle)
  }, [
    i[1] || (i[1] = o("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    o("span", Qt, [
      w(u, L({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: t.resolvedSize,
        "prefix-icon": r.prefixIcon,
        disabled: r.disabled,
        loading: r.loading,
        fulled: t.isBlock
      }, e.$attrs, {
        onClick: i[0] || (i[0] = (d) => e.$emit("click", d))
      }), {
        default: g(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Zt);
}
const Jt = /* @__PURE__ */ S(qt, [["render", Xt]]), ei = ["xs", "sm", "md", "lg", "xl"], ie = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, ti = {
  name: "AvatarGroup",
  SIZE_CLASS: ie,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ei.includes(e)
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
      return x(
        "ui-avatar-group",
        ie[this.size] || ie.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, ii = ["aria-label"];
function ri(e, i, r, s, l, t) {
  return a(), n("div", {
    class: k(t.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    b(e.$slots, "default"),
    r.overflowCount > 0 ? (a(), n("span", {
      key: 0,
      class: k(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
    }, m(t.overflowText), 3)) : f("", !0)
  ], 10, ii);
}
const ai = /* @__PURE__ */ S(ti, [["render", ri]]), li = [
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
], si = {
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
      presetColors: li
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
      let i = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) && (this.localColor = i.toUpperCase());
    }
  }
}, ni = ["disabled", "aria-expanded", "onClick"], oi = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, ui = { class: "ui-select-field-suffix" }, ci = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, di = { class: "ui-color-picker-panel" }, hi = { class: "ui-color-picker-panel__header" }, fi = { class: "ui-color-picker-panel__title" }, pi = { class: "ui-color-picker-swatches" }, mi = ["title", "onClick"], gi = { class: "ui-color-picker-custom" }, bi = { class: "ui-color-picker-panel__title" }, yi = { class: "ui-color-picker-custom__row" };
function vi(e, i, r, s, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return a(), n("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: C }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: C
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", oi, [
              t.localColor ? (a(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: V({ backgroundColor: t.localColor })
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
            o("span", ui, [
              o("span", ci, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ni)
        ])
      ]),
      content: g(() => [
        o("div", di, [
          o("div", hi, [
            o("span", fi, m(t.popoverTitleLabel), 1),
            t.localColor ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: z(t.clearColor, ["stop"])
            }, {
              default: g(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", pi, [
            (a(!0), n(I, null, A(l.presetColors, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": t.localColor === p }]),
              style: V({ backgroundColor: p }),
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
            ], 14, mi))), 128))
          ]),
          o("div", gi, [
            o("span", bi, m(t.customColorLabelText), 1),
            o("div", yi, [
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
                style: V({ backgroundColor: t.localColor || "transparent" }),
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
const _i = /* @__PURE__ */ S(si, [["render", vi]]), me = {
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
function te(e, i = "TRY") {
  if (e == null || String(e).trim() === "")
    return i in $ ? i : "TRY";
  const r = String(e).trim();
  if (me[r])
    return me[r];
  const s = r.toUpperCase();
  return $[s] ? s : i in $ ? i : "TRY";
}
function Ve(e) {
  var r;
  const i = te(e);
  if ($[i])
    return $[i];
  try {
    const l = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: i,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((t) => t.type === "currency");
    return ((r = l == null ? void 0 : l.value) == null ? void 0 : r.trim()) || i;
  } catch {
    return i;
  }
}
function $n(e, i, r = "tr-TR") {
  const s = Number(e) || 0, l = te(i);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: l }).format(s);
  } catch {
    return `${Ve(l)}${s.toFixed(2)}`;
  }
}
function Oe(e) {
  let i = String(e ?? "").replace(",", ".");
  i = i.replace(/[^\d.]/g, "");
  const r = i.indexOf(".");
  if (r !== -1) {
    const s = i.slice(0, r), l = i.slice(r + 1).replace(/\./g, "");
    i = `${s}.${l}`;
  }
  return i;
}
function Re(e = "tr-TR") {
  var i, r;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((i = s.find((l) => l.type === "group")) == null ? void 0 : i.value) || ".",
      decimal: ((r = s.find((l) => l.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function ki(e, i = "tr-TR") {
  const { group: r, decimal: s } = Re(i);
  let l = String(e ?? "").trim();
  return l ? (l = l.split(r).join(""), l = l.split(s).join("."), Oe(l)) : "";
}
function wi(e, i = "tr-TR") {
  const r = Oe(e);
  if (!r) return "";
  const { group: s, decimal: l } = Re(i), [t = "", u] = r.split("."), c = (t.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return u === void 0 ? c : `${c}${l}${u}`;
}
let ge = 0;
const Si = ["sm", "md", "lg"], xi = {
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
      validator: (e) => e == null || Si.includes(e)
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
    return ge += 1, { fallbackId: `ui-currency-input-${ge}` };
  },
  computed: {
    displaySymbol() {
      return Ve(this.currency);
    },
    resolvedCurrencyCode() {
      return te(this.currency);
    },
    innerValue: {
      get() {
        return wi(this.modelValue, this.locale);
      },
      set(e) {
        const i = ki(e, this.locale);
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = s);
      return i;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, Ci = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Ti(e, i, r, s, l, t) {
  const u = _("ui-input");
  return a(), y(u, L({
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
      o("span", Ci, m(t.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Be = /* @__PURE__ */ S(xi, [["render", Ti]]), Li = {
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
        const i = e.target.checked, r = this.uiCheckboxGroup.modelValue, s = Array.isArray(r) ? [...r] : [], l = s.findIndex((t) => Object.is(t, this.value));
        i && l === -1 ? s.push(this.value) : !i && l !== -1 && s.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, i = Array.isArray(e) ? [...e] : [], r = i.findIndex((s) => Object.is(s, this.value));
        r === -1 ? i.push(this.value) : i.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", i);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Ii = ["type", "name", "value", "checked"], Ai = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Mi = { class: "ui-checkbox-body" }, zi = {
  key: 0,
  class: "ui-checkbox-label"
}, Pi = {
  key: 1,
  class: "ui-checkbox-description"
};
function Ei(e, i, r, s, l, t) {
  const u = _("ui-icon");
  return a(), n("label", {
    class: k(t.checkboxClasses),
    onKeydown: [
      i[1] || (i[1] = ne(z((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["enter"])),
      i[2] || (i[2] = ne(z((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: t.nativeType,
      name: t.nativeName,
      value: t.groupValueString,
      checked: t.isChecked,
      class: "sr-only",
      onChange: i[0] || (i[0] = (...d) => t.onNativeChange && t.onNativeChange(...d))
    }, null, 40, Ii),
    o("span", Ai, [
      t.isChecked ? (a(), y(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    o("span", Mi, [
      e.$slots.label || r.label ? (a(), n("span", zi, [
        b(e.$slots, "label", {}, () => [
          T(m(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (a(), n("span", Pi, m(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Vi = /* @__PURE__ */ S(Li, [["render", Ei]]), Oi = ["list", "button", "List", "Button"];
let be = 0;
const Ri = {
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
      validator: (e) => Oi.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return be += 1, { groupName: `ui-checkbox-group-${be}` };
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
}, Bi = ["aria-label"];
function Fi(e, i, r, s, l, t) {
  return a(), n("div", {
    class: k(["ui-checkbox-group", `ui-checkbox-group--${t.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, Bi);
}
const Di = /* @__PURE__ */ S(Ri, [["render", Fi]]);
let ye = 0;
function H(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${H(e.getMonth() + 1)}-${H(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return null;
  const r = Number(i[1]), s = Number(i[2]) - 1, l = Number(i[3]), t = new Date(r, s, l);
  return t.getFullYear() !== r || t.getMonth() !== s || t.getDate() !== l ? null : t;
}
function R(e, i) {
  return e === i ? 0 : e < i ? -1 : 1;
}
function re(e, i, r) {
  return new Date(e, i, 1).toLocaleString(r, { month: "long" });
}
function ve(e, i, r, s) {
  const l = `${e}-${H(i + 1)}-01`, t = new Date(e, i + 1, 0).getDate();
  let u = `${e}-${H(i + 1)}-${H(t)}`;
  if (r && u > r && (u = r), s && l < s && u < s) return null;
  let d = l;
  return s && d < s && (d = s), R(d, u) > 0 ? null : [d, u];
}
const Ni = {
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
    ye += 1;
    const e = ye, i = ((s = this.modelValue) == null ? void 0 : s[0]) || "", r = Y(i) || Y((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
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
        return R(e, i) <= 0 ? i : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), i = B(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const s = B(r), l = e.getMonth(), t = e.getFullYear(), u = new Date(t, l - 1, 1), d = u.getFullYear(), c = u.getMonth(), h = (v, C) => typeof this.$t == "function" ? this.$t(v, C) : v;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [i, i]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: re(t, l, this.locale)
          }),
          range: ve(t, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: re(d, c, this.locale)
          }),
          range: ve(d, c, this.maxYmd, this.minYmd)
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
        title: re(r.year, r.month, this.locale),
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
      const r = $e(void 0, "dateRangeFormat"), s = (l) => l ? We(l, this.locale, r) || l : "…";
      return !e && !i ? this.resolvedPlaceholder : e === i || !i ? s(e || i) : `${s(e)} – ${s(i)}`;
    },
    shiftMonth(e) {
      const i = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth();
    },
    isRangeDisabled(e, i) {
      return !!(!e || !i || this.minYmd && i < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, i) {
      const r = new Date(e, i, 1), s = new Date(e, i, 1 - r.getDay()), l = this.previewStart, t = this.previewEnd, u = l && t, d = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + c), p = h.getMonth() === i && h.getFullYear() === e, v = h.getDate(), C = B(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${i}`, P = B(/* @__PURE__ */ new Date()) === C, O = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let ce = !1, de = !1;
        if (u) {
          const he = R(l, t) <= 0 ? l : t, fe = R(l, t) <= 0 ? t : l;
          ce = R(C, he) >= 0 && R(C, fe) <= 0, de = C === he || C === fe;
        }
        d.push({
          key: F,
          d: v,
          date: h,
          today: P,
          inMonth: p,
          disabled: O,
          inRange: ce,
          endpoint: de
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, i) {
      if (e.disabled || !e.range) return;
      const [r, s] = e.range;
      this.pickingStart = r, this.pickingEnd = s, this.$emit("update:modelValue", [r, s]), this.$emit("change", [r, s]), i();
    },
    pick(e, i) {
      if (!e.date || e.disabled) return;
      const r = B(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, l = r;
      if (R(l, s) < 0) {
        const t = s;
        s = l, l = t;
      }
      this.pickingStart = s, this.pickingEnd = l, this.$emit("update:modelValue", [s, l]), this.$emit("change", [s, l]), i();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, $i = { class: "min-w-0 flex-1 truncate text-foreground" }, Hi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Wi = { class: "ui-daterangepicker-layout" }, Yi = ["aria-label"], Gi = { class: "ui-daterangepicker-calendars" }, Ui = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Ki = { class: "ui-daterangepicker-month-row" }, ji = { class: "mb-2 flex items-center justify-between gap-2" }, qi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Zi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Qi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Xi = { class: "ui-datepicker-grid" };
function Ji(e, i, r, s, l, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return a(), n("div", {
    class: k(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: l.menuOpen,
      "onUpdate:open": i[2] || (i[2] = (c) => l.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: r.disabled
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
            disabled: r.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", $i, m(t.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(({ close: c }) => [
        o("div", Hi, [
          o("div", Wi, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": t.resolvedQuickAriaLabel
            }, [
              (a(!0), n(I, null, A(t.quickPresets, (h) => (a(), y(u, {
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
                  T(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Yi),
            o("div", Gi, [
              t.rangeHint ? (a(), n("p", Ui, m(t.rangeHint), 1)) : f("", !0),
              o("div", Ki, [
                (a(!0), n(I, null, A(t.calendarPanes, (h) => (a(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", ji, [
                    h.showPrev ? (a(), y(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": t.resolvedPrevMonthLabel,
                      onClick: i[0] || (i[0] = z((p) => t.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", qi)),
                    o("span", Zi, m(h.title), 1),
                    h.showNext ? (a(), y(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": t.resolvedNextMonthLabel,
                      onClick: i[1] || (i[1] = z((p) => t.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", Qi))
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
                  o("div", Xi, [
                    (a(!0), n(I, null, A(h.cells, (p) => (a(), y(u, {
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
                        T(m(p.d), 1)
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
const er = /* @__PURE__ */ S(Ni, [["render", Ji]]), tr = {
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
    iconType: W
  },
  computed: {
    ...X(),
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
      return x("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, ir = {
  key: 0,
  class: "ui-field__title-row"
}, rr = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, ar = {
  key: 1,
  class: "ui-field__title"
}, lr = {
  key: 1,
  class: "ui-field__value"
}, sr = {
  key: 2,
  class: "ui-field__subtitle"
};
function nr(e, i, r, s, l, t) {
  const u = _("ui-icon");
  return a(), n("div", L({ class: t.rootClass }, t.passthroughAttrs), [
    r.title || t.showIcon ? (a(), n("div", ir, [
      t.showIcon ? (a(), n("span", rr, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (a(), n("span", ar, m(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    t.hasValue ? (a(), n("div", lr, [
      b(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (a(), n("p", sr, m(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const or = /* @__PURE__ */ S(tr, [["render", nr]]), ur = ["popover", "dialog"], cr = ["sm", "md", "lg"], dr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], hr = {
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
      validator: (e) => ur.includes(e)
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
      validator: (e) => cr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => dr.includes(e)
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
    onTriggerClick(e, i) {
      typeof i == "function" ? i() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, fr = { class: "ui-field-action-header" }, pr = { class: "ui-field-action-header__text" }, mr = {
  key: 0,
  class: "ui-field-action-header__title"
}, gr = {
  key: 1,
  class: "ui-field-action-header__description"
}, br = { class: "ui-field-action-body" }, yr = { class: "ui-field-action-body" }, vr = { class: "ui-field-action-footer" };
function _r(e, i, r, s, l, t) {
  const u = _("ui-button"), d = _("ui-popover"), c = _("ui-dialog");
  return a(), n("div", {
    class: k([
      "ui-field-action",
      t.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    t.isPopover ? (a(), y(d, {
      key: 0,
      open: t.resolvedOpen,
      "onUpdate:open": i[0] || (i[0] = (h) => t.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, q({
      trigger: g(({ open: h, toggle: p }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: t.close,
          label: t.triggerLabel,
          hasValue: t.hasValue
        }, () => [
          r.iconOnly ? (a(), y(u, {
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
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), y(u, {
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
              T(m(t.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: g(({ close: h }) => [
        o("div", br, [
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
            o("div", fr, [
              o("div", pr, [
                r.title ? (a(), n("p", mr, m(r.title), 1)) : f("", !0),
                r.description ? (a(), n("p", gr, m(r.description), 1)) : f("", !0)
              ]),
              r.clearable && t.hasValue ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                "aria-label": t.resolvedClearLabel,
                onClick: (p) => t.onClear(h)
              }, {
                default: g(() => [
                  T(m(t.resolvedClearLabel), 1)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), n(I, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: t.resolvedOpen,
        toggle: t.toggle,
        close: t.close,
        label: t.triggerLabel,
        hasValue: t.hasValue
      }, () => [
        r.iconOnly ? (a(), y(u, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), y(u, {
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
            T(m(t.triggerLabel), 1)
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
      }, q({
        default: g(() => [
          o("div", yr, [
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
              o("div", vr, [
                r.clearable && t.hasValue ? (a(), y(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  onClick: i[3] || (i[3] = (h) => t.onClear(t.close))
                }, {
                  default: g(() => [
                    T(m(t.resolvedClearLabel), 1)
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
                    T(m(t.resolvedDoneLabel), 1)
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
const kr = /* @__PURE__ */ S(hr, [["render", _r]]), wr = ["auto", "file", "folder"], Sr = ["sm", "md", "lg"], xr = { icon: "folder", color: "text-sky-500" }, Cr = { icon: "file-lines", color: "text-muted-foreground" }, Tr = {
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
}, _e = {
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
function Z(e) {
  return String(e ?? "").trim();
}
function Lr(e) {
  const i = Z(e);
  return /[/\\]\s*$/.test(i);
}
function Fe(e) {
  const i = Z(e).replace(/[/\\]+$/, "");
  if (!i) return "";
  const r = i.split(/[/\\]/);
  return r[r.length - 1] || i;
}
function Ir(e) {
  const i = Fe(e), r = i.lastIndexOf(".");
  return r <= 0 || r === i.length - 1 ? "" : i.slice(r + 1).toLowerCase();
}
const ke = {
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
}, Ar = {
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
      validator: (e) => wr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Sr.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: W,
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
      return _e[this.size] || _e.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Lr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = Z(this.name);
      return e ? this.basenameOnly ? Fe(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return Z(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return xr;
      const e = Ir(this.name);
      return Tr[e] || Cr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? j(this.iconType) : this.inferredMeta.type || j(void 0);
    },
    resolvedColorClass() {
      return this.color ? ke[this.color] !== void 0 ? ke[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, Mr = ["aria-label"], zr = ["title"];
function Pr(e, i, r, s, l, t) {
  const u = _("ui-icon");
  return a(), n("div", {
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
    }, m(t.displayLabel), 11, zr)
  ], 10, Mr);
}
const Er = /* @__PURE__ */ S(Ar, [["render", Pr]]);
function Vr(e) {
  const i = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!i.length) return null;
  const r = Math.min(...i.map((u) => u.top)), s = Math.min(...i.map((u) => u.left)), l = Math.max(...i.map((u) => u.right)), t = Math.max(...i.map((u) => u.bottom));
  return {
    top: r,
    left: s,
    right: l,
    bottom: t,
    width: l - s,
    height: t - r,
    x: s,
    y: r,
    toJSON: () => ({})
  };
}
function oe(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const i = e.closest(".ui-form-row");
  return i instanceof HTMLElement ? i : e;
}
function we(e) {
  const i = oe(e);
  if (!i) return null;
  if (i.classList.contains("ui-form-row")) {
    const r = [
      i.querySelector(".ui-form-row-text"),
      i.querySelector(".ui-form-row-control")
    ].filter((l) => l instanceof HTMLElement), s = Vr(r.map((l) => l.getBoundingClientRect()));
    if (s) return s;
  }
  return i.getBoundingClientRect();
}
function Or(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const i = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && i.push(s);
  return i;
}
const Rr = ["dialog", "popover", "card", "tour"], Br = [
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
], Fr = ["sm", "md", "lg", "xl", "2xl", "full"], E = 12, Dr = 8, Nr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Rr.includes(e)
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
    iconType: W,
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
      validator: (e) => Fr.includes(e)
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
    ...X(),
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? oe(e) : typeof e == "string" && e.trim() ? oe(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const i = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const s = window.innerWidth, l = window.innerHeight, t = r.getBoundingClientRect(), u = t.width || 320, d = t.height || 180;
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
      const c = we(i);
      if (!c) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, c.top - h), v = Math.max(0, c.left - h), C = Math.min(l, c.bottom + h), F = Math.min(s, c.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${v}px`,
        width: `${Math.max(0, F - v)}px`,
        height: `${Math.max(0, C - p)}px`
      };
      let P = C + E, O = v;
      this.placement.startsWith("top") ? P = p - d - E : this.placement.startsWith("right") ? (P = p, O = F + E) : this.placement.startsWith("left") ? (P = p, O = v - u - E) : this.placement.includes("end") && (O = F - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + d > l - E && (P = p - d - E), P = Math.max(E, Math.min(P, l - d - E)), O = Math.max(E, Math.min(O, s - u - E)), this.tourPanelStyle = {
        position: "fixed",
        top: `${P}px`,
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
        const i = we(e);
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
          for (const r of Or(i))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, $r = { class: "ui-guidance-footer" }, Hr = { class: "ui-guidance-popover" }, Wr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Yr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Gr = { class: "ui-guidance-popover__text" }, Ur = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Kr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, jr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, qr = ["aria-label"], Zr = { class: "ui-guidance-tour__content" }, Qr = { class: "ui-header-lead" }, Xr = { class: "ui-header-lead__main" }, Jr = {
  key: 0,
  class: "ui-header-lead__icon"
}, ea = { class: "ui-header-lead__text" }, ta = {
  key: 0,
  class: "ui-guidance-tour__title"
}, ia = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, ra = {
  key: 0,
  class: "ui-header-lead__actions"
}, aa = {
  key: 0,
  class: "ui-guidance-tour__body"
}, la = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function sa(e, i, r, s, l, t) {
  const u = _("ui-button"), d = _("ui-card"), c = _("ui-dialog"), h = _("ui-icon"), p = _("ui-popover");
  return t.shouldRender ? (a(), n("div", {
    key: 0,
    class: k(t.rootShellClass)
  }, [
    r.mode === "card" ? (a(), y(d, {
      key: 0,
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      border: ""
    }, q({
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
            o("div", $r, [
              r.showFooterClose ? (a(), y(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: t.onClose
              }, {
                default: g(() => [
                  T(m(t.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (a(), y(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: t.onGo
              }, {
                default: g(() => [
                  T(m(t.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (a(), y(c, {
      key: 1,
      open: t.syncOpen,
      "onUpdate:open": i[0] || (i[0] = (v) => t.syncOpen = v),
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      "max-width": r.maxWidth,
      "close-on-backdrop": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape,
      "show-close": r.showClose,
      onAfterLeave: i[1] || (i[1] = (v) => e.$emit("after-leave"))
    }, q({
      default: g(() => [
        b(e.$slots, "default")
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
              T(m(t.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (a(), y(p, {
      key: 2,
      open: t.syncOpen,
      "onUpdate:open": i[2] || (i[2] = (v) => t.syncOpen = v),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: g((v) => [
        b(e.$slots, "trigger", Et(Vt(v)))
      ]),
      content: g(() => [
        o("div", Hr, [
          r.icon || r.title || r.description ? (a(), n("div", Wr, [
            r.icon ? (a(), n("span", Yr, [
              w(h, {
                name: r.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            o("div", Gr, [
              r.title ? (a(), n("p", Ur, m(r.title), 1)) : f("", !0),
              r.description ? (a(), n("p", Kr, m(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          b(e.$slots, "default"),
          t.hasFooterActions && !e.$slots.footer ? (a(), n("div", jr, [
            r.showFooterClose ? (a(), y(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: t.onClose
            }, {
              default: g(() => [
                T(m(t.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            r.showGo ? (a(), y(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: t.onGo
            }, {
              default: g(() => [
                T(m(t.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (a(), y(J, {
      key: 3,
      to: "body"
    }, [
      w(ee, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: i[5] || (i[5] = (v) => e.$emit("after-leave"))
      }, {
        default: g(() => [
          t.syncOpen ? (a(), n("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": l.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: i[4] || (i[4] = ne((...v) => t.onEscape && t.onEscape(...v), ["esc"]))
          }, [
            r.closeOnBackdrop ? (a(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: i[3] || (i[3] = (...v) => t.onBackdrop && t.onBackdrop(...v))
            })) : f("", !0),
            l.tourHighlightStyle ? (a(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: V(l.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            o("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: V(l.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r.title || t.resolvedGoLabel
            }, [
              o("div", Zr, [
                o("div", Qr, [
                  o("div", Xr, [
                    r.icon ? (a(), n("span", Jr, [
                      w(h, {
                        name: r.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    o("div", ea, [
                      r.title ? (a(), n("p", ta, m(r.title), 1)) : f("", !0),
                      r.description ? (a(), n("p", ia, m(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (a(), n("div", ra, [
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
                e.$slots.default ? (a(), n("div", aa, [
                  b(e.$slots, "default")
                ])) : f("", !0),
                t.hasFooterActions && !e.$slots.footer ? (a(), n("div", la, [
                  r.showFooterClose ? (a(), y(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onClose
                  }, {
                    default: g(() => [
                      T(m(t.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  r.showGo ? (a(), y(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onGo
                  }, {
                    default: g(() => [
                      T(m(t.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, qr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const na = /* @__PURE__ */ S(Nr, [["render", sa]]), oa = {
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
    iconType: W,
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
    ...X(),
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), i = Array.isArray(this.icons) ? this.icons : [];
      let r = i;
      e && (r = i.filter((l) => String(l).toLowerCase().includes(e)));
      const s = Number(this.maxResults);
      return Number.isFinite(s) && s > 0 ? r.slice(0, s) : r;
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
}, ua = ["disabled", "aria-expanded", "onClick"], ca = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, da = { class: "ui-select-field-suffix" }, ha = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, fa = { class: "ui-icon-picker-panel" }, pa = { class: "ui-icon-picker-panel__header" }, ma = { class: "ui-icon-picker-panel__title" }, ga = { class: "ui-icon-picker-panel__search" }, ba = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, ya = {
  key: 1,
  class: "ui-icon-picker-grid"
}, va = ["title", "onClick"];
function _a(e, i, r, s, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("ui-input"), h = _("ui-popover");
  return a(), n("div", {
    class: k(t.rootClass)
  }, [
    w(h, {
      open: l.popoverOpen,
      "onUpdate:open": i[1] || (i[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: g(({ open: p, toggle: v, close: C }) => [
        b(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: C
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", ca, [
              w(u, {
                name: t.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !t.localIcon }])
            }, m(t.localIcon || t.triggerLabel), 3),
            o("span", da, [
              o("span", ha, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ua)
        ])
      ]),
      content: g(() => [
        o("div", fa, [
          o("div", pa, [
            o("span", ma, m(t.popoverTitleLabel), 1),
            t.localIcon ? (a(), y(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: z(t.clearIcon, ["stop"])
            }, {
              default: g(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", ga, [
            w(c, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": i[0] || (i[0] = (p) => l.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: t.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          t.filteredIcons.length ? (a(), n("div", ya, [
            (a(!0), n(I, null, A(t.filteredIcons, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": t.localIcon === p }]),
              title: p,
              onClick: (v) => t.selectIcon(p)
            }, [
              w(u, {
                name: p,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, va))), 128))
          ])) : (a(), n("div", ba, m(t.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const ka = /* @__PURE__ */ S(oa, [["render", _a]]), wa = ["tr-TR", "en-US"], Q = Ee({
  currency: "TRY",
  format: "tr-TR"
});
function Sa(e, i = Q.format) {
  return wa.includes(e) ? e : i;
}
function xa(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Q.currency = te(e.currency));
  const i = e.format ?? e.locale;
  i != null && (Q.format = Sa(i));
}
function Ca() {
  return Ot(Q);
}
const Ta = {
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
function La(e, i, r, s, l, t) {
  const u = _("CurrencyInput");
  return a(), y(u, L({
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
const Ia = /* @__PURE__ */ S(Ta, [["render", La]]);
function Aa(e) {
  const i = String(e ?? "");
  if (!i)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  i.length >= 8 && (r += 1), i.length >= 12 && (r += 1), /[a-z]/.test(i) && /[A-Z]/.test(i) ? r += 1 : /[a-zA-Z]/.test(i) && (r += 0.5), /\d/.test(i) && (r += 1), /[^a-zA-Z0-9]/.test(i) && (r += 1);
  const s = Math.min(4, Math.round(r)), l = ["weak", "fair", "good", "strong"], t = s <= 0 ? "weak" : l[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: t
  };
}
let ae = 0;
const Ma = ["sm", "md", "lg"], za = {
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
    return ae += 1, {
      fallbackId: `ui-password-${ae}`,
      fallbackStrengthId: `ui-password-strength-${ae}`,
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
      return Aa(this.modelValue);
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = s);
      return i;
    }
  }
}, Pa = ["aria-label", "aria-pressed", "disabled"], Ea = ["id", "aria-live"];
function Va(e, i, r, s, l, t) {
  const u = _("ui-icon"), d = _("ui-input"), c = _("ui-progress");
  return a(), n("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    w(d, L({
      id: t.resolvedId,
      modelValue: t.innerValue,
      "onUpdate:modelValue": i[1] || (i[1] = (h) => t.innerValue = h),
      type: l.visible ? "text" : "password",
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
          "aria-pressed": l.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: i[0] || (i[0] = (h) => l.visible = !l.visible)
        }, [
          w(u, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Pa)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    t.showStrengthMeter ? (a(), n("div", {
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
      t.strength.label !== "empty" ? (a(), n("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${t.strength.label}`])
      }, m(t.strengthText), 3)) : f("", !0)
    ], 8, Ea)) : f("", !0)
  ], 2);
}
const Oa = /* @__PURE__ */ S(za, [["render", Va]]), Ra = ["bar", "circle"], Se = ["sm", "md", "lg"], xe = ["thin", "md"], Ba = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, Fa = { sm: 1.5, md: 2, lg: 2 }, Da = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Ra.includes(e)
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
      const e = this.type === "circle" ? Se.includes(this.size) ? this.size : "sm" : xe.includes(this.size) ? this.size : "md";
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
      return Se.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return xe.includes(this.size) ? this.size : "md";
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
      const e = G[this.circleSizeKey] ?? G.sm, i = Fa[this.circleSizeKey] ?? 2, r = (e - i) / 2, s = e / 2, l = 2 * Math.PI * r, t = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: i, radius: r, center: s, circumference: l, offset: t };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Na = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], $a = ["width", "height", "viewBox"], Ha = ["cx", "cy", "r", "stroke-width"], Wa = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ya = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Ga(e, i, r, s, l, t) {
  return a(), n("div", {
    class: k(t.rootClass),
    style: V(t.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : t.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : t.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (a(), n("svg", {
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
      }, null, 8, Ha),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke,
        "stroke-dasharray": t.circleMetrics.circumference,
        "stroke-dashoffset": t.circleMetrics.offset
      }, null, 8, Wa)
    ], 8, $a)) : (a(), n("div", Ya, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: V({ width: `${t.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Na);
}
const Ua = /* @__PURE__ */ S(Da, [["render", Ga]]), Ka = ze("ui-sheet"), ja = ["left", "right"], qa = ["sm", "md", "lg", "xl"], Za = ["solid", "regular", "brands", "light", "duotone", "thin"], Ce = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Qa = {
  name: "Sheet",
  components: { Divider: Me },
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
      validator: (e) => ja.includes(e)
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
      validator: (e) => qa.includes(e)
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
      validator: (e) => e == null || Za.includes(e)
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
    const e = Ka();
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
      return j(this.iconType);
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
      return Ce[this.size] || Ce.md;
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
        Ye(e) || (this.focusFallbackTimer = setTimeout(() => {
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, Xa = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Ja = {
  key: 0,
  class: "ui-card-header shrink-0"
}, el = {
  key: 0,
  class: "ui-sheet-header__icon"
}, tl = ["id"], il = {
  key: 2,
  class: "ui-sheet-header__actions"
}, rl = ["id"], al = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function ll(e, i, r, s, l, t) {
  const u = _("ui-icon"), d = _("ui-button"), c = _("Divider");
  return l.portalReady ? (a(), y(J, {
    key: 0,
    to: "body"
  }, [
    w(ee, {
      name: t.transitionName,
      appear: "",
      onAfterEnter: t.onOverlayAfterEnter,
      onAfterLeave: t.onOverlayAfterLeave
    }, {
      default: g(() => [
        r.open ? (a(), n("div", {
          key: 0,
          ref: "layerRef",
          class: k(t.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: i[2] || (i[2] = (...h) => t.onLayerKeydown && t.onLayerKeydown(...h))
        }, [
          r.overlay ? (a(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: i[0] || (i[0] = (...h) => t.onBackdrop && t.onBackdrop(...h))
          })) : f("", !0),
          o("div", L({
            ref: "panelRef",
            class: t.panelClasses,
            role: "dialog",
            "aria-modal": r.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": t.ariaLabelledby,
            "aria-describedby": t.ariaDescribedby,
            "aria-label": t.ariaLabelAttr
          }, t.passthroughAttrs, {
            onClick: i[1] || (i[1] = z(() => {
            }, ["stop"]))
          }), [
            t.hasHeaderBlock ? (a(), n("div", Ja, [
              b(e.$slots, "header", {}, () => [
                t.hasDefaultHeader ? (a(), n("div", {
                  key: 0,
                  class: k(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (a(), n("span", el, [
                    w(u, {
                      name: r.icon,
                      type: t.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (a(), n("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(r.title), 9, tl)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), n("div", il, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (a(), y(d, {
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
                  r.description ? (a(), n("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(r.description), 9, rl)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), n("div", al, [
              b(e.$slots, "toolbar")
            ])) : f("", !0),
            t.showHeaderDivider ? (a(), y(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), n("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), n("div", {
              key: 4,
              class: k(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
            }, [
              b(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, Xa)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const sl = /* @__PURE__ */ S(Qa, [["render", ll]]), nl = ["sm", "md", "lg", "full"], Te = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, ol = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => nl.includes(e)
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, ul = {
  key: 0,
  class: "ui-menu-header"
}, cl = { class: "ui-menu-body" }, dl = {
  key: 1,
  class: "ui-menu-footer"
};
function hl(e, i, r, s, l, t) {
  return a(), n("nav", L({ class: t.rootClass }, t.passthroughAttrs), [
    e.$slots.header ? (a(), n("div", ul, [
      b(e.$slots, "header")
    ])) : f("", !0),
    o("div", cl, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), n("div", dl, [
      b(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const fl = /* @__PURE__ */ S(ol, [["render", hl]]), pl = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, ml = {
  key: 0,
  class: "ui-menu-group-label"
}, gl = { class: "ui-menu-group-items" };
function bl(e, i, r, s, l, t) {
  return a(), n("div", L({ class: t.groupClass }, t.passthroughAttrs), [
    r.label ? (a(), n("p", ml, m(r.label), 1)) : f("", !0),
    o("div", gl, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const yl = /* @__PURE__ */ S(pl, [["render", bl]]), vl = {
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
function _l(e, i, r, s, l, t) {
  const u = _("ui-button");
  return a(), y(u, L({
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
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const kl = /* @__PURE__ */ S(vl, [["render", _l]]), wl = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, Sl = ["aria-label"];
function xl(e, i, r, s, l, t) {
  return a(), n("div", L({
    class: t.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, t.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Sl);
}
const Cl = /* @__PURE__ */ S(wl, [["render", xl]]), Tl = ["horizontal", "vertical"], Ll = ["default", "pills"], Il = {
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
      validator: (e) => Ll.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Tl.includes(e)
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
        iconType: (i == null ? void 0 : i.iconType) ?? j(void 0)
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
}, Al = ["aria-label"], Ml = { class: "ui-stepper-pills-track" }, zl = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Pl = { class: "flex w-full min-w-0 items-center justify-center" }, El = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Vl = {
  key: 1,
  class: "tabular-nums"
}, Ol = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Rl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Bl = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Fl = { class: "flex flex-col items-center" }, Dl = {
  key: 1,
  class: "tabular-nums"
}, Nl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, $l = { class: "ui-stepper-title" }, Hl = {
  key: 0,
  class: "ui-stepper-description"
};
function Wl(e, i, r, s, l, t) {
  const u = _("ui-icon");
  return a(), n("div", L({
    class: t.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, t.passthroughAttrs), [
    r.variant === "pills" ? (a(), n(I, { key: 0 }, [
      o("div", Ml, [
        (a(!0), n(I, null, A(t.normalizedSteps, (d, c) => (a(), y(K(r.interactive ? "button" : "span"), L({
          key: c,
          class: ["ui-stepper-pill", t.pillClass(c)],
          role: "listitem",
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (a(), n("p", zl, m(t.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (a(!0), n(I, { key: 1 }, A(t.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", Pl, [
        c > 0 ? (a(), n("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", El)),
        (a(), y(K(r.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", Vl, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", t.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", Ol))
      ]),
      o("p", Rl, m(d.title), 1),
      d.description ? (a(), n("p", Bl, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), n(I, { key: 2 }, A(t.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", Fl, [
        (a(), y(K(r.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? t.go(c) : void 0
        }), {
          default: g(() => [
            d.icon ? (a(), y(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", Dl, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 0,
          class: k(["ui-stepper-vrail", t.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      o("div", Nl, [
        o("p", $l, m(d.title), 1),
        d.description ? (a(), n("p", Hl, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Al);
}
const Yl = /* @__PURE__ */ S(Il, [["render", Wl]]);
let Le = 0;
const Gl = {
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
    return Le += 1, { fallbackId: `ui-slider-${Le}` };
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = s);
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
}, Ul = {
  key: 0,
  class: "ui-slider-header"
}, Kl = {
  key: 0,
  class: "ui-form-label"
}, jl = {
  key: 1,
  class: "ui-slider-value"
}, ql = { class: "ui-slider-rail" }, Zl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Ql = {
  key: 1,
  class: "ui-slider-scale"
}, Xl = { key: 0 }, Jl = { key: 1 };
function es(e, i, r, s, l, t) {
  const u = _("ui-progress");
  return a(), n("div", {
    class: k(t.rootClass)
  }, [
    r.label || t.hasValue ? (a(), n("div", Ul, [
      r.label ? (a(), n("span", Kl, m(r.label), 1)) : f("", !0),
      t.hasValue ? (a(), n("span", jl, m(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    o("div", ql, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: t.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", L(t.passthroughAttrs, {
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
      }), null, 16, Zl)
    ]),
    r.minLabel || r.maxLabel ? (a(), n("div", Ql, [
      r.minLabel ? (a(), n("span", Xl, m(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (a(), n("span", Jl, m(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const ts = /* @__PURE__ */ S(Gl, [["render", es]]), is = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return x("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  }
}, rs = { class: "ui-table-scroll" };
function as(e, i, r, s, l, t) {
  return a(), n("div", rs, [
    o("table", L({ class: t.rootClass }, t.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ]);
}
const ls = /* @__PURE__ */ S(is, [["render", as]]), ss = {
  name: "TableBody"
}, ns = { class: "ui-table-body" };
function os(e, i, r, s, l, t) {
  return a(), n("tbody", ns, [
    b(e.$slots, "default")
  ]);
}
const us = /* @__PURE__ */ S(ss, [["render", os]]), cs = ["left", "center", "right"], ds = ["title", "secondary", "body"], hs = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => cs.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || ds.includes(e)
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
}, fs = ["colspan"];
function ps(e, i, r, s, l, t) {
  return a(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, fs);
}
const ms = /* @__PURE__ */ S(hs, [["render", ps]]), gs = ["left", "center", "right"], bs = ["sm", "md", "lg"], ys = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => gs.includes(e)
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
      if (!(this.iconCol || bs.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function vs(e, i, r, s, l, t) {
  return a(), n("th", {
    class: k(t.rootClass),
    style: V(t.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const _s = /* @__PURE__ */ S(ys, [["render", vs]]), ks = {
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
function ws(e, i, r, s, l, t) {
  return a(), n("thead", {
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Ss = /* @__PURE__ */ S(ks, [["render", ws]]), xs = {
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
}, Cs = { class: "ui-table-pagination" }, Ts = { class: "ui-table-pagination-meta" }, Ls = { class: "ui-table-pagination-nav" }, Is = { class: "ui-table-pagination-page" };
function As(e, i, r, s, l, t) {
  const u = _("ui-button");
  return a(), n("div", Cs, [
    o("div", Ts, [
      b(e.$slots, "meta", {}, () => [
        T(m(r.metaText), 1)
      ])
    ]),
    o("div", Ls, [
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
      o("div", Is, m(r.pageLabel), 1),
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
const Ms = /* @__PURE__ */ S(xs, [["render", As]]), zs = ["none", "soft", "strong"], Ps = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || zs.includes(e)
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
function Es(e, i, r, s, l, t) {
  return a(), n("tr", {
    class: k(t.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Vs = /* @__PURE__ */ S(Ps, [["render", Es]]), Os = {
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
      const { class: e, ...i } = this.$attrs;
      return i;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Rs = ["id", "aria-labelledby"];
function Bs(e, i, r, s, l, t) {
  return Rt((a(), n("div", L({
    role: "tabpanel",
    id: t.panelDomId,
    "aria-labelledby": t.triggerDomId,
    class: t.panelClass
  }, t.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Rs)), [
    [Bt, t.isActive]
  ]);
}
const Fs = /* @__PURE__ */ S(Os, [["render", Bs]]);
function N(e) {
  return String(e).padStart(2, "0");
}
function De(e, i = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const s = Number(r[1]), l = Number(r[2]);
  if (!Number.isFinite(s) || !Number.isFinite(l))
    return String(e || "");
  if (i === "HH:mm")
    return `${N(s)}:${N(l)}`;
  if (i === "h:mm a" || i === "h:mm A") {
    const t = s >= 12 ? "PM" : "AM";
    return `${s % 12 || 12}:${N(l)} ${t}`;
  }
  return `${N(s)}:${N(l)}`;
}
function Ds(e, i, r = "HH:mm") {
  return De(`${e}:${i}`, r);
}
const Ns = ze("ui-timepicker"), le = 40;
function se(e) {
  return String(e).padStart(2, "0");
}
const $s = {
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
      fallbackId: Ns(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : M(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return M(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return M(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Ue(void 0);
    },
    display() {
      return this.menuOpen ? Ds(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? De(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
    pad2: se,
    applyModelToDraft() {
      const e = this.modelValue;
      let i = 0, r = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (i = Math.min(23, Math.max(0, parseInt(s[1], 10))), r = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const l = this.minuteValues;
      let t = l[0] ?? 0, u = 999;
      for (const d of l) {
        const c = Math.abs(d - r);
        c < u && (u = c, t = d);
      }
      this.draftHour = i, this.draftMinute = t;
    },
    wheelItemHeight(e) {
      if (!e) return le;
      const i = e.querySelector(".ui-timepicker-wheel-item");
      if (!i) return le;
      const r = i.getBoundingClientRect().height;
      return r > 0 ? r : le;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const i = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!i) return (e.clientHeight - r) / 2;
      const s = parseFloat(window.getComputedStyle(i).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, i) {
      const r = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, t = Math.round((l - s - r / 2) / r);
      return Math.min(i, Math.max(0, t));
    },
    scrollTopForIndex(e, i) {
      const r = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + i * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, i, { smooth: r = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, i);
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
      const e = `${se(this.draftHour)}:${se(this.draftMinute)}`;
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
      const s = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, Hs = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Ws = { class: "ui-timepicker-wheels" }, Ys = { class: "ui-timepicker-wheels-row" }, Gs = ["aria-valuenow", "aria-label"], Us = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Ks = { class: "ui-timepicker-wheel-spacer" }, js = ["onClick"], qs = ["aria-valuenow", "aria-label"], Zs = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Qs = { class: "ui-timepicker-wheel-spacer" }, Xs = ["onClick"], Js = { class: "min-w-0 flex-1 truncate text-foreground" }, en = { class: "ui-timepicker-panel w-full p-2" }, tn = { class: "ui-timepicker-wheels" }, rn = { class: "ui-timepicker-wheels-row" }, an = ["aria-valuenow", "aria-label"], ln = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, sn = { class: "ui-timepicker-wheel-spacer" }, nn = ["onClick"], on = ["aria-valuenow", "aria-label"], un = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, cn = { class: "ui-timepicker-wheel-spacer" }, dn = ["onClick"];
function hn(e, i, r, s, l, t) {
  const u = _("ui-button"), d = _("ui-popover");
  return a(), n("div", {
    class: k([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (a(), n("div", Hs, [
      o("div", Ws, [
        i[2] || (i[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Ys, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": t.hourAriaLabel
          }, [
            o("div", Us, [
              o("div", Ks, [
                (a(!0), n(I, null, A(t.hourOptions, (c) => (a(), n("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => t.selectHour(c)
                }, m(t.pad2(c)), 11, js))), 128))
              ])
            ], 512)
          ], 8, Gs),
          i[1] || (i[1] = o("span", {
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
            o("div", Zs, [
              o("div", Qs, [
                (a(!0), n(I, null, A(t.minuteValues, (c, h) => (a(), n("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => t.selectMinute(h)
                }, m(t.pad2(c)), 11, Xs))), 128))
              ])
            ], 512)
          ], 8, qs)
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
    ])) : (a(), y(d, {
      key: 1,
      open: l.menuOpen,
      "onUpdate:open": i[0] || (i[0] = (c) => l.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
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
            disabled: r.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: g(() => [
              o("span", Js, m(t.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: g(() => [
        o("div", en, [
          o("div", tn, [
            i[6] || (i[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", rn, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": t.hourAriaLabel
              }, [
                o("div", ln, [
                  o("div", sn, [
                    (a(!0), n(I, null, A(t.hourOptions, (c) => (a(), n("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => t.selectHour(c)
                    }, m(t.pad2(c)), 11, nn))), 128))
                  ])
                ], 512)
              ], 8, an),
              i[5] || (i[5] = o("span", {
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
                o("div", un, [
                  o("div", cn, [
                    (a(!0), n(I, null, A(t.minuteValues, (c, h) => (a(), n("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => t.selectMinute(h)
                    }, m(t.pad2(c)), 11, dn))), 128))
                  ])
                ], 512)
              ], 8, on)
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
const Ie = /* @__PURE__ */ S($s, [["render", hn]]), fn = ["square", "video", "auto"], pn = ["fill", "sm", "md", "lg"], Ae = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, mn = {
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
      validator: (e) => fn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => pn.includes(e)
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
        Ae[this.size] || Ae.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), i = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (i[r] = s);
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
}, gn = ["src", "alt"], bn = ["aria-hidden"], yn = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, vn = {
  key: 3,
  class: "ui-photo__overflow"
}, _n = ["aria-label"], kn = ["aria-label"], wn = { class: "ui-photo-preview__panel" }, Sn = ["src", "alt"], xn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Cn(e, i, r, s, l, t) {
  const u = _("ui-icon"), d = _("ui-button");
  return a(), n(I, null, [
    (a(), y(K(t.rootTag), L({
      type: r.interactive ? "button" : void 0,
      class: t.rootClass
    }, t.rootBind, { onClick: t.onClick }), {
      default: g(() => [
        r.src && !l.imageFailed ? (a(), n("img", {
          key: 0,
          src: r.src,
          alt: t.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: i[0] || (i[0] = (c) => l.imageFailed = !0)
        }, null, 40, gn)) : (a(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, bn)),
        r.favorite ? (a(), n("span", yn, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (a(), n("span", vn, m(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), y(J, { to: "body" }, [
      w(ee, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), n("div", {
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
            }, null, 8, kn),
            o("div", wn, [
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
                onClick: z(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), n("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Sn)) : f("", !0),
              t.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: z(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), n("p", xn, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, _n)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Tn = /* @__PURE__ */ S(mn, [["render", Cn]]), Ln = ["square", "video", "auto"], In = {
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
      validator: (e) => Ln.includes(e)
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
}, An = ["data-count"], Mn = ["aria-label"], zn = ["aria-label"], Pn = { class: "ui-photo-preview__panel" }, En = ["src", "alt"], Vn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function On(e, i, r, s, l, t) {
  const u = _("ui-photo"), d = _("ui-button");
  return a(), n(I, null, [
    o("div", {
      class: k(["ui-photos", t.layoutClass]),
      "data-count": t.displayCount
    }, [
      (a(!0), n(I, null, A(t.visibleItems, (c, h) => (a(), y(u, {
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
    ], 10, An),
    (a(), y(J, { to: "body" }, [
      w(ee, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: g(() => [
          l.previewOpen ? (a(), n("div", {
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
            }, null, 8, zn),
            o("div", Pn, [
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
                onClick: z(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), n("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, En)) : f("", !0),
              t.showNext ? (a(), y(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: z(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), n("p", Vn, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Mn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Rn = /* @__PURE__ */ S(In, [["render", On]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Hn() {
  return {
    push: D,
    dismiss: je,
    clear: Ke,
    info: (e) => D({ ...U(e), variant: "info" }),
    success: (e) => D({ ...U(e), variant: "success" }),
    warning: (e) => D({ ...U(e), variant: "warning" }),
    error: (e) => D({ ...U(e), variant: "error" })
  };
}
function Wn(e = !1) {
  return Ee({
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
function Yn() {
  return {
    confirm: qe
  };
}
const ue = {
  en: et,
  tr: Pe
};
function Gn(e = "tr") {
  return ue[e] ?? ue.tr;
}
const Un = Pe, Bn = [
  ["ui-action-card", Yt],
  ["ui-action-card-list", jt],
  ["ui-action-group", tt],
  ["ui-ai-button", Jt],
  ["ui-alert", it],
  ["ui-avatar", rt],
  ["ui-avatar-group", ai],
  ["ui-badge", at],
  ["ui-button", lt],
  ["ui-card", st],
  ["ui-checkbox", Vi],
  ["ui-checkbox-group", Di],
  ["ui-color-picker", _i],
  ["ui-currency-input", Be],
  ["ui-confirm-dialog", nt],
  ["ui-date-picker", ot],
  ["ui-date-range-picker", er],
  ["ui-dialog", ut],
  ["ui-divider", Me],
  ["ui-dropdown", ct],
  ["ui-empty", dt],
  ["ui-field", or],
  ["ui-field-action", kr],
  ["ui-file", Er],
  ["ui-form-row", ht],
  ["ui-guidance", na],
  ["ui-icon", ft],
  ["ui-icon-picker", ka],
  ["ui-input", pt],
  ["ui-price-input", Ia],
  ["ui-password", Oa],
  ["ui-phone", mt],
  ["ui-pin", gt],
  ["ui-list", bt],
  ["ui-list-item", yt],
  ["ui-popover", vt],
  ["ui-progress", Ua],
  ["ui-radio", _t],
  ["ui-radio-group", kt],
  ["ui-select", wt],
  ["ui-sheet", sl],
  ["ui-menu", fl],
  ["ui-menu-group", yl],
  ["ui-menu-item", kl],
  ["ui-menu-nav", Cl],
  ["ui-segment", St],
  ["ui-segment-group", xt],
  ["ui-skeleton", Ct],
  ["ui-slider", ts],
  ["ui-stepper", Yl],
  ["ui-switch", Tt],
  ["ui-table", ls],
  ["ui-table-body", us],
  ["ui-table-cell", ms],
  ["ui-table-head", _s],
  ["ui-table-header", Ss],
  ["ui-table-pagination", Ms],
  ["ui-table-row", Vs],
  ["ui-tag", Lt],
  ["ui-tab-list", It],
  ["ui-tab-panel", Fs],
  ["ui-tabs", At],
  ["ui-tab-trigger", Mt],
  ["ui-time-picker", Ie],
  ["ui-timepicker", Ie],
  ["ui-tooltip", zt],
  ["ui-toast", Pt],
  ["ui-photo", Tn],
  ["ui-photos", Rn]
];
function Fn(e, i = {}) {
  var c, h;
  const { i18n: r, locale: s, locales: l, theme: t, themeOverrides: u, priceInput: d } = i;
  if (typeof t == "string") {
    const p = Ze(t, u || {});
    Qe(e, p.defaults), e.config.globalProperties.$uiDefaults = p.defaults, pe({
      ...p.config,
      ...Xe(p.defaults)
    });
  } else if (t && typeof t == "object") {
    const p = u ? Je(t, u) : t;
    pe(p);
  }
  if (d && xa(d), (c = r == null ? void 0 : r.global) != null && c.mergeLocaleMessage) {
    const p = l ?? (s != null ? [s] : [
      typeof r.global.locale == "string" ? r.global.locale : ((h = r.global.locale) == null ? void 0 : h.value) ?? "tr"
    ]);
    for (const v of p) {
      const C = ue[v];
      C && r.global.mergeLocaleMessage(v, C);
    }
  }
  for (const [p, v] of Bn)
    e.component(p, v);
}
const Kn = {
  install: Fn
};
export {
  Yt as ActionCard,
  jt as ActionCardList,
  tt as ActionGroup,
  Jt as AiButton,
  it as Alert,
  rt as Avatar,
  ai as AvatarGroup,
  Zn as BASE_UI_DEFAULTS,
  at as Badge,
  lt as Button,
  st as Card,
  Vi as Checkbox,
  Di as CheckboxGroup,
  _i as ColorPicker,
  nt as ConfirmDialog,
  Be as CurrencyInput,
  ot as DatePicker,
  er as DateRangePicker,
  ut as Dialog,
  Me as Divider,
  ct as Dropdown,
  dt as Empty,
  Qn as FEW_COLOR_SCALE,
  Xn as FEW_PALETTE_ID,
  Jn as FEW_PRIMARY,
  eo as FEW_PRIMARY_FOREGROUND,
  or as Field,
  kr as FieldAction,
  Er as File,
  ht as FormRow,
  to as GOOGLE_FONTS_CATALOG,
  na as Guidance,
  ft as Icon,
  ka as IconPicker,
  pt as Input,
  io as LEGACY_PRESET_TO_THEME,
  bt as List,
  yt as ListItem,
  fl as Menu,
  yl as MenuGroup,
  kl as MenuItem,
  Cl as MenuNav,
  wa as PRICE_FORMATS,
  Oa as Password,
  mt as Phone,
  Tn as Photo,
  Rn as Photos,
  gt as Pin,
  vt as Popover,
  Ia as PriceInput,
  Ua as Progress,
  _t as Radio,
  kt as RadioGroup,
  St as Segment,
  xt as SegmentGroup,
  wt as Select,
  sl as Sheet,
  Ct as Skeleton,
  ts as Slider,
  Yl as Stepper,
  Tt as Switch,
  ro as THEME_CUSTOM_CSS_ID,
  ao as THEME_IDS,
  lo as THEME_PACKAGES,
  so as THEME_PRESETS,
  no as THEME_PRESET_IDS,
  It as TabList,
  Fs as TabPanel,
  Mt as TabTrigger,
  ls as Table,
  us as TableBody,
  ms as TableCell,
  _s as TableHead,
  Ss as TableHeader,
  Ms as TablePagination,
  Vs as TableRow,
  At as Tabs,
  Lt as Tag,
  Ie as TimePicker,
  Pt as Toast,
  zt as Tooltip,
  oo as UI_DEFAULTS_KEY,
  uo as UI_ICON_TYPES,
  co as applyGoogleFontsCatalogPreview,
  ho as applyGoogleFontsForTheme,
  fo as applyThemeCustomCss,
  pe as applyUiTheme,
  po as buildGoogleFontsLinkTag,
  mo as buildGoogleFontsStylesheetUrl,
  go as buildThemeEnforcementCss,
  bo as buildThemeStyleAttr,
  yo as clearThemeCustomCss,
  Ke as clearToasts,
  vo as createUiId,
  ze as createUiIdFactory,
  Kn as default,
  _o as deriveBrandColorsFromPrimary,
  je as dismissToast,
  $n as formatCurrencyAmount,
  ko as formatGoogleFontFamilyName,
  wi as formatMoneyInput,
  Ve as getCurrencySymbol,
  wo as getFewPrimaryColors,
  Re as getMoneySeparators,
  Ca as getPriceInputConfig,
  So as getThemeCssPath,
  xo as getThemePackage,
  Co as getThemePreset,
  Gn as getUiMessages,
  To as googleFontSelectOptions,
  W as iconTypeProp,
  Lo as mergeUiDefaults,
  Je as mergeUiTheme,
  ki as parseLocalizedMoneyInput,
  Ge as pickPassthroughAttrs,
  Qe as provideUiDefaults,
  D as pushToast,
  qe as requestConfirm,
  Io as resetUiIds,
  Ao as resolveControlSize,
  te as resolveCurrencyCode,
  Mo as resolvePrimaryColor,
  Ne as resolveThemeControlSize,
  $e as resolveThemeDateFormat,
  zo as resolveThemeDefault,
  Po as resolveThemeDialogMaxWidth,
  Eo as resolveThemeFontFamilies,
  j as resolveThemeIconType,
  Vo as resolveThemeId,
  Ze as resolveThemePackage,
  Oo as resolveThemePreset,
  Ue as resolveThemeTimeFormat,
  Ro as resolveThemeVars,
  M as resolveUiText,
  Oe as sanitizeMoneyInput,
  xa as setPriceInputConfig,
  X as themeIconTypeComputed,
  Un as uiMessagesTr,
  Yn as useConfirm,
  Wn as useDialog,
  Hn as useToast,
  Bo as useUiDefaults,
  Fo as useUiDefaultsOptions,
  Do as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
