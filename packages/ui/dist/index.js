import { _ as w, ai as W, aG as X, au as Ge, a4 as T, aF as P, av as Ye, as as Ue, ac as Ke, az as j, h as Me, aa as Pe, am as je, a6 as Ee, aj as qe, aD as Ze, a3 as Qe, a8 as Xe, ao as F, ap as Je, aH as Oe, aB as et, an as tt, Y as me, aI as it, al as rt, a9 as at, A as lt, a as st, b as nt, c as ot, d as ut, C as ct, e as dt, f as ht, g as ft, i as pt, E as mt, m as gt, I as yt, n as bt, P as vt, q as _t, o as kt, p as wt, r as St, R as xt, s as Ct, u as Tt, S as Lt, t as It, v as At, w as zt, M as Mt, H as Pt, K as Et, J as Ot, O as Vt, N as Rt } from "./index-BgCi0_c6.js";
import { B as Lo, F as Io, j as Ao, k as zo, l as Mo, G as Po, L as Eo, D as Oo, T as Vo, x as Ro, y as Bo, z as Do, U as Fo, Q as $o, V as No, W as Ho, X as Wo, Z as Go, $ as Yo, a0 as Uo, a1 as Ko, a2 as jo, a5 as qo, a7 as Zo, ab as Qo, ad as Xo, ae as Jo, af as eu, ag as tu, ah as iu, ak as ru, aq as au, ar as lu, at as su, aw as nu, ax as ou, ay as uu, aA as cu, aC as du, aE as hu, aJ as fu, aK as pu, aL as mu } from "./index-BgCi0_c6.js";
import { resolveComponent as k, openBlock as a, createElementBlock as n, normalizeClass as _, renderSlot as g, createBlock as b, createCommentVNode as p, createElementVNode as u, toDisplayString as m, normalizeStyle as V, createVNode as S, mergeProps as I, withCtx as y, withModifiers as E, createTextVNode as L, Fragment as A, renderList as z, withKeys as ne, createSlots as q, normalizeProps as Bt, guardReactiveProps as Dt, Teleport as J, Transition as ee, readonly as Ft, reactive as Ve, withDirectives as Re, vShow as Be, resolveDynamicComponent as K } from "vue";
const $t = {
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
}, Nt = ["disabled"], Ht = { class: "ui-action-card__content" }, Wt = { class: "ui-action-card__title" }, Gt = {
  key: 0,
  class: "ui-action-card__description"
};
function Yt(e, r, t, s, l, i) {
  const o = k("ui-icon");
  return a(), n("button", {
    type: "button",
    class: _(["ui-action-card", { "ui-action-card--selected": t.selected }]),
    disabled: t.disabled,
    onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (a(), b(o, {
        key: 0,
        name: t.icon,
        type: e.resolvedIconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : p("", !0)
    ]),
    u("span", Ht, [
      u("span", Wt, m(t.title), 1),
      t.description ? (a(), n("span", Gt, m(t.description), 1)) : p("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      t.showTrailing ? (a(), b(o, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : p("", !0)
    ])
  ], 10, Nt);
}
const Ut = /* @__PURE__ */ w($t, [["render", Yt]]), Kt = {
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
}, jt = ["aria-label"];
function qt(e, r, t, s, l, i) {
  return a(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": t.ariaLabel || void 0,
    style: V(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, jt);
}
const Zt = /* @__PURE__ */ w(Kt, [["render", qt]]), Qt = {
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
      const e = Ge(this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, Xt = ["data-size"], Jt = { class: "ui-ai-button__surface" };
function ei(e, r, t, s, l, i) {
  const o = k("ui-button");
  return a(), n("span", {
    class: _(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": t.disabled || t.loading
    }]),
    "data-size": i.resolvedSize,
    style: V(i.rootStyle)
  }, [
    r[1] || (r[1] = u("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    u("span", Jt, [
      S(o, I({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: i.resolvedSize,
        "prefix-icon": t.prefixIcon,
        disabled: t.disabled,
        loading: t.loading,
        fulled: i.isBlock
      }, e.$attrs, {
        onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
      }), {
        default: y(() => [
          g(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "fulled"])
    ])
  ], 14, Xt);
}
const ti = /* @__PURE__ */ w(Qt, [["render", ei]]), ii = ["xs", "sm", "md", "lg", "xl"], ie = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, ri = {
  name: "AvatarGroup",
  SIZE_CLASS: ie,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ii.includes(e)
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
      return T(
        "ui-avatar-group",
        ie[this.size] || ie.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, ai = ["aria-label"];
function li(e, r, t, s, l, i) {
  return a(), n("div", {
    class: _(i.rootClass),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    t.overflowCount > 0 ? (a(), n("span", {
      key: 0,
      class: _(["ui-avatar-group-overflow", e.SIZE_CLASS[t.size] || e.SIZE_CLASS.md])
    }, m(i.overflowText), 3)) : p("", !0)
  ], 10, ai);
}
const si = /* @__PURE__ */ w(ri, [["render", li]]), ni = [
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
], oi = {
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
      presetColors: ni
    };
  },
  computed: {
    rootClass() {
      return T(
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
      let r = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(r) && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), /^#[0-9A-Fa-f]{6}$/.test(r) && (this.localColor = r.toUpperCase());
    }
  }
}, ui = ["disabled", "aria-expanded", "onClick"], ci = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, di = { class: "ui-select-field-suffix" }, hi = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, fi = { class: "ui-color-picker-panel" }, pi = { class: "ui-color-picker-panel__header" }, mi = { class: "ui-color-picker-panel__title" }, gi = { class: "ui-color-picker-swatches" }, yi = ["title", "onClick"], bi = { class: "ui-color-picker-custom" }, vi = { class: "ui-color-picker-panel__title" }, _i = { class: "ui-color-picker-custom__row" };
function ki(e, r, t, s, l, i) {
  const o = k("ui-icon"), d = k("ui-button"), c = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: _(i.rootClass)
  }, [
    S(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (f) => l.popoverOpen = f),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: t.disabled
    }, {
      trigger: y(({ open: f, toggle: v, close: x }) => [
        g(e.$slots, "trigger", {
          open: f,
          toggle: v,
          close: x
        }, () => [
          u("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": f ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            u("span", ci, [
              i.localColor ? (a(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: V({ backgroundColor: i.localColor })
              }, null, 4)) : (a(), b(o, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            u("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, m(i.displayValue), 3),
            u("span", di, [
              u("span", hi, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ui)
        ])
      ]),
      content: y(() => [
        u("div", fi, [
          u("div", pi, [
            u("span", mi, m(i.popoverTitleLabel), 1),
            i.localColor ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: E(i.clearColor, ["stop"])
            }, {
              default: y(() => [
                L(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0)
          ]),
          u("div", gi, [
            (a(!0), n(A, null, z(l.presetColors, (f) => (a(), n("button", {
              key: f,
              type: "button",
              class: _(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === f }]),
              style: V({ backgroundColor: f }),
              title: f,
              onClick: (v) => i.selectColor(f)
            }, [
              i.localColor === f ? (a(), b(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : p("", !0)
            ], 14, yi))), 128))
          ]),
          u("div", bi, [
            u("span", vi, m(i.customColorLabelText), 1),
            u("div", _i, [
              S(c, {
                modelValue: i.localColor,
                "onUpdate:modelValue": r[0] || (r[0] = (f) => i.localColor = f),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              u("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: V({ backgroundColor: i.localColor || "transparent" }),
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
const wi = /* @__PURE__ */ w(oi, [["render", ki]]), ge = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, N = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function te(e, r = "TRY") {
  if (e == null || String(e).trim() === "")
    return r in N ? r : "TRY";
  const t = String(e).trim();
  if (ge[t])
    return ge[t];
  const s = t.toUpperCase();
  return N[s] ? s : r in N ? r : "TRY";
}
function De(e) {
  var t;
  const r = te(e);
  if (N[r])
    return N[r];
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
function bo(e, r, t = "tr-TR") {
  const s = Number(e) || 0, l = te(r);
  try {
    return new Intl.NumberFormat(t, { style: "currency", currency: l }).format(s);
  } catch {
    return `${De(l)}${s.toFixed(2)}`;
  }
}
function Fe(e) {
  let r = String(e ?? "").replace(",", ".");
  r = r.replace(/[^\d.]/g, "");
  const t = r.indexOf(".");
  if (t !== -1) {
    const s = r.slice(0, t), l = r.slice(t + 1).replace(/\./g, "");
    r = `${s}.${l}`;
  }
  return r;
}
function $e(e = "tr-TR") {
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
function Si(e, r = "tr-TR") {
  const { group: t, decimal: s } = $e(r);
  let l = String(e ?? "").trim();
  return l ? (l = l.split(t).join(""), l = l.split(s).join("."), Fe(l)) : "";
}
function xi(e, r = "tr-TR") {
  const t = Fe(e);
  if (!t) return "";
  const { group: s, decimal: l } = $e(r), [i = "", o] = t.split("."), c = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return o === void 0 ? c : `${c}${l}${o}`;
}
let ye = 0;
const Ci = ["sm", "md", "lg"], Ti = {
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
      validator: (e) => e == null || Ci.includes(e)
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
    return ye += 1, { fallbackId: `ui-currency-input-${ye}` };
  },
  computed: {
    displaySymbol() {
      return De(this.currency);
    },
    resolvedCurrencyCode() {
      return te(this.currency);
    },
    innerValue: {
      get() {
        return xi(this.modelValue, this.locale);
      },
      set(e) {
        const r = Si(e, this.locale);
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
}, Li = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Ii(e, r, t, s, l, i) {
  const o = k("ui-input");
  return a(), b(o, I({
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
    prepend: y(() => [
      u("span", Li, m(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Ne = /* @__PURE__ */ w(Ti, [["render", Ii]]), Ai = {
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
}, zi = ["type", "name", "value", "checked"], Mi = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Pi = { class: "ui-checkbox-body" }, Ei = {
  key: 0,
  class: "ui-checkbox-label"
}, Oi = {
  key: 1,
  class: "ui-checkbox-description"
};
function Vi(e, r, t, s, l, i) {
  const o = k("ui-icon");
  return a(), n("label", {
    class: _(i.checkboxClasses),
    onKeydown: [
      r[1] || (r[1] = ne(E((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      r[2] || (r[2] = ne(E((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    u("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: r[0] || (r[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, zi),
    u("span", Mi, [
      i.isChecked ? (a(), b(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : p("", !0)
    ]),
    u("span", Pi, [
      e.$slots.label || t.label ? (a(), n("span", Ei, [
        g(e.$slots, "label", {}, () => [
          L(m(t.label), 1)
        ])
      ])) : p("", !0),
      t.description ? (a(), n("span", Oi, m(t.description), 1)) : p("", !0)
    ])
  ], 34);
}
const Ri = /* @__PURE__ */ w(Ai, [["render", Vi]]), Bi = ["list", "button", "List", "Button"], Di = ["vertical", "horizontal"];
let be = 0;
const Fi = {
  name: "CheckboxGroup",
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => []
    },
    /** `list` — dikey liste; `button` — kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Bi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Di.includes(e)
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
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : "vertical";
    },
    rootClass() {
      return T(
        "ui-checkbox-group",
        `ui-checkbox-group--${this.normalizedVariant}`,
        this.normalizedVariant === "button" && this.effectiveOrientation === "vertical" ? "ui-checkbox-group--vertical" : ""
      );
    }
  },
  provide() {
    return {
      uiCheckboxGroup: this
    };
  }
}, $i = ["aria-label"];
function Ni(e, r, t, s, l, i) {
  return a(), n("div", {
    class: _(i.rootClass),
    role: "group",
    "aria-label": t.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, $i);
}
const Hi = /* @__PURE__ */ w(Fi, [["render", Ni]]);
let ve = 0;
function H(e) {
  return String(e).padStart(2, "0");
}
function R(e) {
  return `${e.getFullYear()}-${H(e.getMonth() + 1)}-${H(e.getDate())}`;
}
function G(e) {
  if (e == null || e === "") return null;
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return null;
  const t = Number(r[1]), s = Number(r[2]) - 1, l = Number(r[3]), i = new Date(t, s, l);
  return i.getFullYear() !== t || i.getMonth() !== s || i.getDate() !== l ? null : i;
}
function B(e, r) {
  return e === r ? 0 : e < r ? -1 : 1;
}
function re(e, r, t) {
  return new Date(e, r, 1).toLocaleString(t, { month: "long" });
}
function Wi(e, r, t) {
  const { year: s, month: l, day: i } = parseIsoParts(e), d = new Date(s, l - 1, i).getDay(), c = d === 0 ? -6 : 1 - d, h = new Date(s, l - 1, i + c), f = R(h), v = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let x = R(v);
  if (r && x > r && (x = r), t && f < t && x < t) return null;
  let C = f;
  return t && C < t && (C = t), B(C, x) > 0 ? null : [C, x];
}
function Gi(e, r, t) {
  const { year: s } = parseIsoParts(e), l = `${s}-01-01`;
  let i = `${s}-12-31`;
  if (r && i > r && (i = r), t && l < t && i < t) return null;
  let o = l;
  return t && o < t && (o = t), B(o, i) > 0 ? null : [o, i];
}
function _e(e, r, t, s) {
  const l = `${e}-${H(r + 1)}-01`, i = new Date(e, r + 1, 0).getDate();
  let o = `${e}-${H(r + 1)}-${H(i)}`;
  if (t && o > t && (o = t), s && l < s && o < s) return null;
  let d = l;
  return s && d < s && (d = s), B(d, o) > 0 ? null : [d, o];
}
const Yi = {
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
    },
    /**
     * Hızlı aralık listesi. Verilmezse varsayılan set kullanılır.
     * @type {Array<{ key: string, label: string, range: [string, string] | null }>}
     */
    presets: {
      type: Array,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    var s, l;
    ve += 1;
    const e = ve, r = ((s = this.modelValue) == null ? void 0 : s[0]) || "", t = G(r) || G((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
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
      return Ue((e = this.$i18n) == null ? void 0 : e.locale);
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
      if (Array.isArray(this.presets) && this.presets.length)
        return this.presets.map((C) => ({
          ...C,
          disabled: !C.range || this.isRangeDisabled(C.range[0], C.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), r = R(e), t = new Date(e);
      t.setDate(t.getDate() - 1);
      const s = R(t), l = new Date(e);
      l.setDate(l.getDate() + 1);
      const i = R(l), o = e.getMonth(), d = e.getFullYear(), c = new Date(d, o - 1, 1), h = c.getFullYear(), f = c.getMonth(), v = (C, M) => typeof this.$t == "function" ? this.$t(C, M) : C;
      return [
        {
          key: "today",
          label: v("ui.dateRangePicker.today"),
          range: [r, r]
        },
        {
          key: "yesterday",
          label: v("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "tomorrow",
          label: v("ui.datePicker.tomorrow"),
          range: [i, i]
        },
        {
          key: "thisWeek",
          label: v("ui.dateRangePicker.thisWeek"),
          range: Wi(r, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: v("ui.dateRangePicker.thisMonth", {
            month: re(d, o, this.locale)
          }),
          range: _e(d, o, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: v("ui.dateRangePicker.lastMonth", {
            month: re(h, f, this.locale)
          }),
          range: _e(h, f, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: v("ui.dateRangePicker.thisYear", { year: d }),
          range: Gi(r, this.maxYmd, this.minYmd)
        }
      ].map((C) => ({
        ...C,
        disabled: !C.range || this.isRangeDisabled(C.range[0], C.range[1])
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
        title: re(t.year, t.month, this.locale),
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
      const e = G(this.startYmd) || G(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, r) {
      const t = Ye(void 0, "dateRangeFormat"), s = (l) => l ? Ke(l, this.locale, t) || l : "…";
      return !e && !r ? this.resolvedPlaceholder : e === r || !r ? s(e || r) : `${s(e)} – ${s(r)}`;
    },
    shiftMonth(e) {
      const r = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth();
    },
    isRangeDisabled(e, r) {
      return !!(!e || !r || this.minYmd && r < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, r) {
      const t = new Date(e, r, 1), s = new Date(e, r, 1 - t.getDay()), l = this.previewStart, i = this.previewEnd, o = l && i, d = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + c), f = h.getMonth() === r && h.getFullYear() === e, v = h.getDate(), x = R(h), C = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${r}`, M = R(/* @__PURE__ */ new Date()) === x, D = !!(this.minYmd && x < this.minYmd) || !!(this.maxYmd && x > this.maxYmd);
        let de = !1, he = !1;
        if (o) {
          const fe = B(l, i) <= 0 ? l : i, pe = B(l, i) <= 0 ? i : l;
          de = B(x, fe) >= 0 && B(x, pe) <= 0, he = x === fe || x === pe;
        }
        d.push({
          key: C,
          d: v,
          date: h,
          today: M,
          inMonth: f,
          disabled: D,
          inRange: de,
          endpoint: he
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = R(e.date));
    },
    applyQuick(e, r) {
      if (e.disabled || !e.range) return;
      const [t, s] = e.range;
      this.pickingStart = t, this.pickingEnd = s, this.$emit("update:modelValue", [t, s]), this.$emit("change", [t, s]), r();
    },
    pick(e, r) {
      if (!e.date || e.disabled) return;
      const t = R(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = t, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, l = t;
      if (B(l, s) < 0) {
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
}, Ui = { class: "min-w-0 flex-1 truncate text-foreground" }, Ki = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, ji = { class: "ui-daterangepicker-layout" }, qi = ["aria-label"], Zi = { class: "ui-daterangepicker-calendars" }, Qi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Xi = { class: "ui-daterangepicker-month-row" }, Ji = { class: "mb-2 flex items-center justify-between gap-2" }, er = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, tr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, ir = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, rr = { class: "ui-datepicker-grid" };
function ar(e, r, t, s, l, i) {
  const o = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: _(["ui-daterangepicker", t.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(d, {
      open: l.menuOpen,
      "onUpdate:open": r[2] || (r[2] = (c) => l.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: t.disabled
    }, {
      trigger: y(({ open: c, toggle: h, close: f }) => [
        g(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: f
        }, () => [
          S(o, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: t.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              u("span", Ui, m(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(({ close: c }) => [
        u("div", Ki, [
          u("div", ji, [
            u("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (a(!0), n(A, null, z(i.quickPresets, (h) => (a(), b(o, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (f) => i.applyQuick(h, c)
              }, {
                default: y(() => [
                  L(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, qi),
            u("div", Zi, [
              i.rangeHint ? (a(), n("p", Qi, m(i.rangeHint), 1)) : p("", !0),
              u("div", Xi, [
                (a(!0), n(A, null, z(i.calendarPanes, (h) => (a(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  u("div", Ji, [
                    h.showPrev ? (a(), b(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: r[0] || (r[0] = E((f) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", er)),
                    u("span", tr, m(h.title), 1),
                    h.showNext ? (a(), b(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: r[1] || (r[1] = E((f) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", ir))
                  ]),
                  r[3] || (r[3] = u("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    u("span", null, "Su"),
                    u("span", null, "Mo"),
                    u("span", null, "Tu"),
                    u("span", null, "We"),
                    u("span", null, "Th"),
                    u("span", null, "Fr"),
                    u("span", null, "Sa")
                  ], -1)),
                  u("div", rr, [
                    (a(!0), n(A, null, z(h.cells, (f) => (a(), b(o, {
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
                      onMouseenter: (v) => i.onCellHover(f),
                      onClick: (v) => i.pick(f, c)
                    }, {
                      default: y(() => [
                        L(m(f.d), 1)
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
const lr = /* @__PURE__ */ w(Yi, [["render", ar]]), sr = {
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
      return T("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, nr = {
  key: 0,
  class: "ui-field__title-row"
}, or = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, ur = {
  key: 1,
  class: "ui-field__title"
}, cr = {
  key: 1,
  class: "ui-field__value"
}, dr = {
  key: 2,
  class: "ui-field__subtitle"
};
function hr(e, r, t, s, l, i) {
  const o = k("ui-icon");
  return a(), n("div", I({ class: i.rootClass }, i.passthroughAttrs), [
    t.title || i.showIcon ? (a(), n("div", nr, [
      i.showIcon ? (a(), n("span", or, [
        S(o, {
          name: t.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : p("", !0),
      t.title ? (a(), n("span", ur, m(t.title), 1)) : p("", !0)
    ])) : p("", !0),
    i.hasValue ? (a(), n("div", cr, [
      g(e.$slots, "default")
    ])) : p("", !0),
    t.subtitle ? (a(), n("p", dr, m(t.subtitle), 1)) : p("", !0)
  ], 16);
}
const fr = /* @__PURE__ */ w(sr, [["render", hr]]), pr = ["popover", "dialog"], mr = ["sm", "md", "lg"], gr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], yr = {
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
      validator: (e) => pr.includes(e)
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
      validator: (e) => mr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => gr.includes(e)
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
    onTriggerClick(e, r) {
      typeof r == "function" ? r() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, br = { class: "ui-field-action-header" }, vr = { class: "ui-field-action-header__text" }, _r = {
  key: 0,
  class: "ui-field-action-header__title"
}, kr = {
  key: 1,
  class: "ui-field-action-header__description"
}, wr = { class: "ui-field-action-body" }, Sr = { class: "ui-field-action-body" }, xr = { class: "ui-field-action-footer" };
function Cr(e, r, t, s, l, i) {
  const o = k("ui-button"), d = k("ui-popover"), c = k("ui-dialog");
  return a(), n("div", {
    class: _([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      t.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (a(), b(d, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": r[0] || (r[0] = (h) => i.resolvedOpen = h),
      placement: t.placement,
      width: t.popoverWidth,
      disabled: t.disabled,
      "mobile-centered": t.mobileCentered
    }, q({
      trigger: y(({ open: h, toggle: f }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: f,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue
        }, () => [
          t.iconOnly ? (a(), b(o, {
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
            onClick: (v) => i.onTriggerClick(v, f)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), b(o, {
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
            onClick: (v) => i.onTriggerClick(v, f)
          }, {
            default: y(() => [
              L(m(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: y(({ close: h }) => [
        u("div", wr, [
          g(e.$slots, "default", {
            close: h,
            open: i.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: y(({ close: h }) => [
          g(e.$slots, "header", { close: h }, () => [
            u("div", br, [
              u("div", vr, [
                t.title ? (a(), n("p", _r, m(t.title), 1)) : p("", !0),
                t.description ? (a(), n("p", kr, m(t.description), 1)) : p("", !0)
              ]),
              t.clearable && i.hasValue ? (a(), b(o, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": i.resolvedClearLabel,
                onClick: (f) => i.onClear(h)
              }, null, 8, ["aria-label", "onClick"])) : p("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: y(({ close: h }) => [
          g(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), n(A, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue
      }, () => [
        t.iconOnly ? (a(), b(o, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), b(o, {
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
          default: y(() => [
            L(m(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      S(c, {
        open: i.resolvedOpen,
        "onUpdate:open": r[4] || (r[4] = (h) => i.resolvedOpen = h),
        title: t.title,
        description: t.description,
        icon: t.dialogIcon,
        "max-width": t.maxWidth,
        "close-on-backdrop": t.closeOnBackdrop,
        "close-on-escape": t.closeOnEscape
      }, q({
        default: y(() => [
          u("div", Sr, [
            g(e.$slots, "default", {
              close: i.close,
              open: i.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        i.showDialogFooter ? {
          name: "footer",
          fn: y(() => [
            g(e.$slots, "footer", { close: i.close }, () => [
              u("div", xr, [
                t.clearable && i.hasValue ? (a(), b(o, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "eraser",
                  "aria-label": i.resolvedClearLabel,
                  onClick: r[3] || (r[3] = (h) => i.onClear(i.close))
                }, null, 8, ["aria-label"])) : p("", !0),
                S(o, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: y(() => [
                    L(m(i.resolvedDoneLabel), 1)
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
const Tr = /* @__PURE__ */ w(yr, [["render", Cr]]), Lr = ["auto", "file", "folder"], Ir = ["sm", "md", "lg"], Ar = { icon: "folder", color: "text-sky-500" }, zr = { icon: "file-lines", color: "text-muted-foreground" }, Mr = {
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
function Z(e) {
  return String(e ?? "").trim();
}
function Pr(e) {
  const r = Z(e);
  return /[/\\]\s*$/.test(r);
}
function He(e) {
  const r = Z(e).replace(/[/\\]+$/, "");
  if (!r) return "";
  const t = r.split(/[/\\]/);
  return t[t.length - 1] || r;
}
function Er(e) {
  const r = He(e), t = r.lastIndexOf(".");
  return t <= 0 || t === r.length - 1 ? "" : r.slice(t + 1).toLowerCase();
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
}, Or = {
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
      validator: (e) => Lr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ir.includes(e)
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
      return ke[this.size] || ke.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Pr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = Z(this.name);
      return e ? this.basenameOnly ? He(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return Z(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Ar;
      const e = Er(this.name);
      return Mr[e] || zr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? j(this.iconType) : this.inferredMeta.type || j(void 0);
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
}, Vr = ["aria-label"], Rr = ["title"];
function Br(e, r, t, s, l, i) {
  const o = k("ui-icon");
  return a(), n("div", {
    class: _(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    u("div", {
      class: _(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      S(o, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: _(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    u("span", {
      class: _(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, m(i.displayLabel), 11, Rr)
  ], 10, Vr);
}
const Dr = /* @__PURE__ */ w(Or, [["render", Br]]);
function Fr(e) {
  const r = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!r.length) return null;
  const t = Math.min(...r.map((o) => o.top)), s = Math.min(...r.map((o) => o.left)), l = Math.max(...r.map((o) => o.right)), i = Math.max(...r.map((o) => o.bottom));
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
function oe(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const r = e.closest(".ui-form-row");
  return r instanceof HTMLElement ? r : e;
}
function Se(e) {
  const r = oe(e);
  if (!r) return null;
  if (r.classList.contains("ui-form-row")) {
    const t = [
      r.querySelector(".ui-form-row-text"),
      r.querySelector(".ui-form-row-control")
    ].filter((l) => l instanceof HTMLElement), s = Fr(t.map((l) => l.getBoundingClientRect()));
    if (s) return s;
  }
  return r.getBoundingClientRect();
}
function $r(e) {
  var t;
  if (!((t = e == null ? void 0 : e.classList) != null && t.contains("ui-form-row")))
    return [e];
  const r = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && r.push(s);
  return r;
}
const Nr = ["dialog", "popover", "card", "tour"], Hr = [
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
], Wr = ["sm", "md", "lg", "xl", "2xl", "full"], O = 12, Gr = 8, Yr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Nr.includes(e)
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
      validator: (e) => Hr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Gr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Wr.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? oe(e) : typeof e == "string" && e.trim() ? oe(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const r = this.resolveTourTarget(), t = this.$refs.tourPanelRef;
      if (!t) return;
      const s = window.innerWidth, l = window.innerHeight, i = t.getBoundingClientRect(), o = i.width || 320, d = i.height || 180;
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
      const c = Se(r);
      if (!c) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), f = Math.max(0, c.top - h), v = Math.max(0, c.left - h), x = Math.min(l, c.bottom + h), C = Math.min(s, c.right + h);
      this.tourHighlightStyle = {
        top: `${f}px`,
        left: `${v}px`,
        width: `${Math.max(0, C - v)}px`,
        height: `${Math.max(0, x - f)}px`
      };
      let M = x + O, D = v;
      this.placement.startsWith("top") ? M = f - d - O : this.placement.startsWith("right") ? (M = f, D = C + O) : this.placement.startsWith("left") ? (M = f, D = v - o - O) : this.placement.includes("end") && (D = C - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && M + d > l - O && (M = f - d - O), M = Math.max(O, Math.min(M, l - d - O)), D = Math.max(O, Math.min(D, s - o - O)), this.tourPanelStyle = {
        position: "fixed",
        top: `${M}px`,
        left: `${D}px`,
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
        const r = Se(e);
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
          for (const t of $r(r))
            this.tourResizeObserver.observe(t);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Ur = { class: "ui-guidance-footer" }, Kr = { class: "ui-guidance-popover" }, jr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, qr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Zr = { class: "ui-guidance-popover__text" }, Qr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Xr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Jr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, ea = ["aria-label"], ta = { class: "ui-guidance-tour__content" }, ia = { class: "ui-header-lead" }, ra = { class: "ui-header-lead__main" }, aa = {
  key: 0,
  class: "ui-header-lead__icon"
}, la = { class: "ui-header-lead__text" }, sa = {
  key: 0,
  class: "ui-guidance-tour__title"
}, na = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, oa = {
  key: 0,
  class: "ui-header-lead__actions"
}, ua = {
  key: 0,
  class: "ui-guidance-tour__body"
}, ca = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function da(e, r, t, s, l, i) {
  const o = k("ui-button"), d = k("ui-card"), c = k("ui-dialog"), h = k("ui-icon"), f = k("ui-popover");
  return i.shouldRender ? (a(), n("div", {
    key: 0,
    class: _(i.rootShellClass)
  }, [
    t.mode === "card" ? (a(), b(d, {
      key: 0,
      icon: t.icon,
      "icon-type": e.resolvedIconType,
      title: t.title,
      description: t.description,
      border: ""
    }, q({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: y(() => [
          g(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      i.hasFooterActions ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer", {}, () => [
            u("div", Ur, [
              t.showFooterClose ? (a(), b(o, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: y(() => [
                  L(m(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : p("", !0),
              t.showGo ? (a(), b(o, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: y(() => [
                  L(m(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : p("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : t.mode === "dialog" ? (a(), b(c, {
      key: 1,
      open: i.syncOpen,
      "onUpdate:open": r[0] || (r[0] = (v) => i.syncOpen = v),
      icon: t.icon,
      "icon-type": e.resolvedIconType,
      title: t.title,
      description: t.description,
      "max-width": t.maxWidth,
      "close-on-backdrop": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape,
      "show-close": t.showClose,
      onAfterLeave: r[1] || (r[1] = (v) => e.$emit("after-leave"))
    }, q({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      t.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          S(o, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: y(() => [
              L(m(i.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : t.mode === "popover" ? (a(), b(f, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": r[2] || (r[2] = (v) => i.syncOpen = v),
      placement: t.placement,
      width: t.popoverWidth,
      "close-on-outside-click": t.closeOnBackdrop,
      "close-on-escape": t.closeOnEscape
    }, {
      trigger: y((v) => [
        g(e.$slots, "trigger", Bt(Dt(v)))
      ]),
      content: y(() => [
        u("div", Kr, [
          t.icon || t.title || t.description ? (a(), n("div", jr, [
            t.icon ? (a(), n("span", qr, [
              S(h, {
                name: t.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : p("", !0),
            u("div", Zr, [
              t.title ? (a(), n("p", Qr, m(t.title), 1)) : p("", !0),
              t.description ? (a(), n("p", Xr, m(t.description), 1)) : p("", !0)
            ])
          ])) : p("", !0),
          g(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (a(), n("div", Jr, [
            t.showFooterClose ? (a(), b(o, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: y(() => [
                L(m(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0),
            t.showGo ? (a(), b(o, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: y(() => [
                L(m(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : t.mode === "tour" ? (a(), b(J, {
      key: 3,
      to: "body"
    }, [
      S(ee, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: r[5] || (r[5] = (v) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          i.syncOpen ? (a(), n("div", {
            key: 0,
            class: _(["ui-guidance-tour", { "ui-guidance-tour--has-target": l.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: r[4] || (r[4] = ne((...v) => i.onEscape && i.onEscape(...v), ["esc"]))
          }, [
            t.closeOnBackdrop ? (a(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: r[3] || (r[3] = (...v) => i.onBackdrop && i.onBackdrop(...v))
            })) : p("", !0),
            l.tourHighlightStyle ? (a(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: V(l.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : p("", !0),
            u("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: V(l.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": t.title || i.resolvedGoLabel
            }, [
              u("div", ta, [
                u("div", ia, [
                  u("div", ra, [
                    t.icon ? (a(), n("span", aa, [
                      S(h, {
                        name: t.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : p("", !0),
                    u("div", la, [
                      t.title ? (a(), n("p", sa, m(t.title), 1)) : p("", !0),
                      t.description ? (a(), n("p", na, m(t.description), 1)) : p("", !0)
                    ])
                  ]),
                  t.showClose ? (a(), n("div", oa, [
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
                  ])) : p("", !0)
                ]),
                e.$slots.default ? (a(), n("div", ua, [
                  g(e.$slots, "default")
                ])) : p("", !0),
                i.hasFooterActions && !e.$slots.footer ? (a(), n("div", ca, [
                  t.showFooterClose ? (a(), b(o, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: y(() => [
                      L(m(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : p("", !0),
                  t.showGo ? (a(), b(o, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: y(() => [
                      L(m(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : p("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, ea)
          ], 34)) : p("", !0)
        ]),
        _: 3
      })
    ])) : p("", !0)
  ], 2)) : p("", !0);
}
const ha = /* @__PURE__ */ w(Yr, [["render", da]]), fa = {
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
      return T(
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
}, pa = ["disabled", "aria-expanded", "onClick"], ma = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ga = { class: "ui-select-field-suffix" }, ya = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ba = { class: "ui-icon-picker-panel" }, va = { class: "ui-icon-picker-panel__header" }, _a = { class: "ui-icon-picker-panel__title" }, ka = { class: "ui-icon-picker-panel__search" }, wa = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Sa = {
  key: 1,
  class: "ui-icon-picker-grid"
}, xa = ["title", "onClick"];
function Ca(e, r, t, s, l, i) {
  const o = k("ui-icon"), d = k("ui-button"), c = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: _(i.rootClass)
  }, [
    S(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (f) => l.popoverOpen = f),
      placement: "bottom-start",
      width: t.panelWidth,
      disabled: t.disabled
    }, {
      trigger: y(({ open: f, toggle: v, close: x }) => [
        g(e.$slots, "trigger", {
          open: f,
          toggle: v,
          close: x
        }, () => [
          u("button", {
            type: "button",
            class: "ui-select-field",
            disabled: t.disabled,
            "aria-expanded": f ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            u("span", ma, [
              S(o, {
                name: i.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            u("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, m(i.localIcon || i.triggerLabel), 3),
            u("span", ga, [
              u("span", ya, [
                S(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, pa)
        ])
      ]),
      content: y(() => [
        u("div", ba, [
          u("div", va, [
            u("span", _a, m(i.popoverTitleLabel), 1),
            i.localIcon ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: E(i.clearIcon, ["stop"])
            }, {
              default: y(() => [
                L(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0)
          ]),
          u("div", ka, [
            S(c, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": r[0] || (r[0] = (f) => l.searchQuery = f),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (a(), n("div", Sa, [
            (a(!0), n(A, null, z(i.filteredIcons, (f) => (a(), n("button", {
              key: f,
              type: "button",
              class: _(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === f }]),
              title: f,
              onClick: (v) => i.selectIcon(f)
            }, [
              S(o, {
                name: f,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, xa))), 128))
          ])) : (a(), n("div", wa, m(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ta = /* @__PURE__ */ w(fa, [["render", Ca]]), La = ["sm", "md", "lg", "xl", "2xl"], Ia = ["default", "foreground", "muted", "success", "destructive", "primary"], Aa = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => La.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ia.includes(e)
    },
    strike: {
      type: Boolean,
      default: !1
    },
    truncate: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return [
        `ui-price-text--${this.size}`,
        this.tone !== "default" ? `ui-price-text--${this.tone}` : null,
        this.strike ? "ui-price-text--strike" : null,
        this.truncate ? "ui-price-text--truncate" : null
      ];
    }
  }
};
function za(e, r, t, s, l, i) {
  return a(), n("span", {
    class: _(["ui-price-text", i.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      L(m(t.value), 1)
    ])
  ], 2);
}
const ce = /* @__PURE__ */ w(Aa, [["render", za]]), Ma = ["sm", "md", "lg"], Pa = ["sm", "md", "lg", "xl", "2xl"], Ea = ["default", "foreground", "muted", "success", "destructive", "primary"], Oa = {
  name: "PriceDisplay",
  components: { PriceText: ce },
  props: {
    label: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ma.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => Pa.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ea.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Va = { class: "ui-price-display__label" };
function Ra(e, r, t, s, l, i) {
  const o = k("ui-price-text");
  return a(), n("div", {
    class: _(["ui-price-display", i.rootClass])
  }, [
    u("span", Va, m(t.label), 1),
    S(o, {
      value: t.value,
      size: t.valueSize,
      tone: t.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          L(m(t.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Ba = /* @__PURE__ */ w(Oa, [["render", Ra]]), Da = ["sm", "md", "lg"], Fa = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Da.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function $a(e, r, t, s, l, i) {
  return a(), n("div", {
    class: _(["ui-price-display-group", i.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Na = /* @__PURE__ */ w(Fa, [["render", $a]]), Ha = ["sm", "md", "lg", "xl", "2xl"], Wa = ["default", "foreground", "muted", "success", "destructive", "primary"], Ga = {
  name: "PriceDisplayRow",
  components: { PriceText: ce },
  props: {
    label: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      default: ""
    },
    valueSize: {
      type: String,
      default: "md",
      validator: (e) => Ha.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Wa.includes(e)
    },
    divider: {
      type: Boolean,
      default: !1
    },
    emphasis: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return {
        "ui-price-display-row--divider": this.divider,
        "ui-price-display-row--emphasis": this.emphasis
      };
    }
  }
}, Ya = { class: "ui-price-display-row__label" };
function Ua(e, r, t, s, l, i) {
  const o = k("ui-price-text");
  return a(), n("div", {
    class: _(["ui-price-display-row", i.rootClass])
  }, [
    u("span", Ya, m(t.label), 1),
    S(o, {
      value: t.value,
      size: t.valueSize,
      tone: t.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          L(m(t.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Ka = /* @__PURE__ */ w(Ga, [["render", Ua]]), ja = ["tr-TR", "en-US"], Q = Ve({
  currency: "TRY",
  format: "tr-TR"
});
function qa(e, r = Q.format) {
  return ja.includes(e) ? e : r;
}
function Za(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Q.currency = te(e.currency));
  const r = e.format ?? e.locale;
  r != null && (Q.format = qa(r));
}
function Qa() {
  return Ft(Q);
}
const Xa = {
  name: "PriceInput",
  components: { CurrencyInput: Ne },
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
    return { priceInputConfig: Qa() };
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
function Ja(e, r, t, s, l, i) {
  const o = k("CurrencyInput");
  return a(), b(o, I({
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
const el = /* @__PURE__ */ w(Xa, [["render", Ja]]);
function tl(e) {
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
let ae = 0;
const il = ["sm", "md", "lg"], rl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || il.includes(e)
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
      return tl(this.modelValue);
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
}, al = ["aria-label", "aria-pressed", "disabled"], ll = ["id", "aria-live"];
function sl(e, r, t, s, l, i) {
  const o = k("ui-icon"), d = k("ui-input"), c = k("ui-progress");
  return a(), n("div", {
    class: _(["ui-password", [e.$attrs.class]])
  }, [
    S(d, I({
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
      append: y(() => [
        u("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": l.visible ? "true" : "false",
          disabled: t.disabled,
          onClick: r[0] || (r[0] = (h) => l.visible = !l.visible)
        }, [
          S(o, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, al)
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
      S(c, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (a(), n("span", {
        key: 0,
        class: _(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, m(i.strengthText), 3)) : p("", !0)
    ], 8, ll)) : p("", !0)
  ], 2);
}
const nl = /* @__PURE__ */ w(rl, [["render", sl]]), ol = ["bar", "circle"], xe = ["sm", "md", "lg"], Ce = ["thin", "md"], ul = ["default", "weak", "fair", "good", "strong"], Y = { sm: 16, md: 20, lg: 24 }, cl = { sm: 1.5, md: 2, lg: 2 }, dl = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => ol.includes(e)
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
      validator: (e) => ul.includes(e)
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
      return T(
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
      const e = Y[this.circleSizeKey] ?? Y.sm, r = cl[this.circleSizeKey] ?? 2, t = (e - r) / 2, s = e / 2, l = 2 * Math.PI * t, i = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: r, radius: t, center: s, circumference: l, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, hl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], fl = ["width", "height", "viewBox"], pl = ["cx", "cy", "r", "stroke-width"], ml = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], gl = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function yl(e, r, t, s, l, i) {
  return a(), n("div", {
    class: _(i.rootClass),
    style: V(i.circleRootStyle),
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
      u("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, pl),
      u("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, ml)
    ], 8, fl)) : (a(), n("div", gl, [
      u("div", {
        class: "ui-progress-bar-indicator",
        style: V({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, hl);
}
const bl = /* @__PURE__ */ w(dl, [["render", yl]]), vl = Ee("ui-sheet"), _l = ["left", "right"], kl = ["sm", "md", "lg", "xl"], wl = ["solid", "regular", "brands", "light", "duotone", "thin"], Te = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Sl = {
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
      validator: (e) => _l.includes(e)
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
      validator: (e) => kl.includes(e)
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
      validator: (e) => e == null || wl.includes(e)
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
    const e = vl();
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
      return Te[this.size] || Te.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return T(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.fullOnMobile ? "ui-sheet-panel--full-mobile" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return je(this.$attrs, ["class"]);
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
      return T(
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
        Pe(e) || (this.focusFallbackTimer = setTimeout(() => {
          var t;
          this.focusFallbackTimer = null, (t = e.focus) == null || t.call(e);
        }, 50));
      });
    }
  }
}, xl = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Cl = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Tl = {
  key: 0,
  class: "ui-sheet-header__icon"
}, Ll = ["id"], Il = {
  key: 2,
  class: "ui-sheet-header__actions"
}, Al = ["id"], zl = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Ml(e, r, t, s, l, i) {
  const o = k("ui-icon"), d = k("ui-button"), c = k("Divider");
  return l.portalReady ? (a(), b(J, {
    key: 0,
    to: "body"
  }, [
    S(ee, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: y(() => [
        t.open ? (a(), n("div", {
          key: 0,
          ref: "layerRef",
          class: _(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: r[2] || (r[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          t.overlay ? (a(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          })) : p("", !0),
          u("div", I({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": t.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: r[1] || (r[1] = E(() => {
            }, ["stop"]))
          }), [
            i.hasHeaderBlock ? (a(), n("div", Cl, [
              g(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (a(), n("div", {
                  key: 0,
                  class: _(["ui-sheet-header", { "ui-sheet-header--no-icon": !t.icon }])
                }, [
                  t.icon ? (a(), n("span", Tl, [
                    S(o, {
                      name: t.icon,
                      type: i.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : p("", !0),
                  t.title ? (a(), n("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(t.title), 9, Ll)) : p("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), n("div", Il, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : p("", !0),
                  t.showClose ? (a(), b(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": i.resolvedCloseLabel,
                    onClick: i.close
                  }, null, 8, ["aria-label", "onClick"])) : p("", !0),
                  t.description ? (a(), n("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(t.description), 9, Al)) : p("", !0)
                ], 2)) : p("", !0)
              ])
            ])) : p("", !0),
            e.$slots.toolbar ? (a(), n("div", zl, [
              g(e.$slots, "toolbar")
            ])) : p("", !0),
            i.showHeaderDivider ? (a(), b(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : p("", !0),
            e.$slots.default ? (a(), n("div", {
              key: 3,
              class: _(["ui-card-body ui-text-default", {
                "ui-card-body--flush": t.bodyPadding === "none",
                "ui-card-body--flex": t.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : p("", !0),
            e.$slots.footer ? (a(), n("div", {
              key: 4,
              class: _(["ui-card-footer", { "ui-sheet-footer--borderless": !t.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : p("", !0)
          ], 16, xl)
        ], 34)) : p("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : p("", !0);
}
const Pl = /* @__PURE__ */ w(Sl, [["render", Ml]]), El = ["sm", "md", "lg", "full"], Le = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Ol = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => El.includes(e)
    }
  },
  computed: {
    rootClass() {
      return T(
        "ui-menu",
        Le[this.width] || Le.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Vl = {
  key: 0,
  class: "ui-menu-header"
}, Rl = { class: "ui-menu-body" }, Bl = {
  key: 1,
  class: "ui-menu-footer"
};
function Dl(e, r, t, s, l, i) {
  return a(), n("nav", I({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (a(), n("div", Vl, [
      g(e.$slots, "header")
    ])) : p("", !0),
    u("div", Rl, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), n("div", Bl, [
      g(e.$slots, "footer")
    ])) : p("", !0)
  ], 16);
}
const Fl = /* @__PURE__ */ w(Ol, [["render", Dl]]), $l = {
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
      return T("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Nl = {
  key: 0,
  class: "ui-menu-group-label"
}, Hl = { class: "ui-menu-group-items" };
function Wl(e, r, t, s, l, i) {
  return a(), n("div", I({ class: i.groupClass }, i.passthroughAttrs), [
    t.label ? (a(), n("p", Nl, m(t.label), 1)) : p("", !0),
    u("div", Hl, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const Gl = /* @__PURE__ */ w($l, [["render", Wl]]), Yl = {
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
      return T(
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
function Ul(e, r, t, s, l, i) {
  const o = k("ui-button");
  return a(), b(o, I({
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
    default: y(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Kl = /* @__PURE__ */ w(Yl, [["render", Ul]]), jl = {
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
      return T("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, ql = ["aria-label"];
function Zl(e, r, t, s, l, i) {
  return a(), n("div", I({
    class: i.navClass,
    role: "navigation",
    "aria-label": t.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, ql);
}
const Ql = /* @__PURE__ */ w(jl, [["render", Zl]]), Xl = {
  name: "Step",
  props: {
    /** Adım paneli görünür mü */
    active: {
      type: Boolean,
      default: !1
    },
    /** Görünür olduğunda ilk form alanına odaklan (dialog içinde toolbar birincil alanı dahil) */
    autofocus: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    active(e, r) {
      e && r === !1 && this.scheduleFocus();
    }
  },
  methods: {
    resolveFocusRoot() {
      const e = this.$refs.root;
      return e instanceof HTMLElement ? e.closest(".ui-dialog-panel") || e.closest(".ui-sheet-panel") || e.closest(".ui-card") || e : null;
    },
    scheduleFocus() {
      !this.autofocus || !this.active || qe() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Pe(e);
        });
      });
    }
  }
}, Jl = {
  ref: "root",
  class: "ui-step"
};
function es(e, r, t, s, l, i) {
  return Re((a(), n("div", Jl, [
    g(e.$slots, "default")
  ], 512)), [
    [Be, t.active]
  ]);
}
const ts = /* @__PURE__ */ w(Xl, [["render", es]]), is = ["horizontal", "vertical"], rs = ["default", "pills"], as = {
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
      validator: (e) => rs.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => is.includes(e)
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
        iconType: (r == null ? void 0 : r.iconType) ?? j(void 0)
      }));
    },
    rootClass() {
      return T(
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
}, ls = ["aria-label"], ss = { class: "ui-stepper-pills-track" }, ns = {
  key: 0,
  class: "ui-stepper-pills-label"
}, os = { class: "flex w-full min-w-0 items-center justify-center" }, us = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, cs = {
  key: 1,
  class: "tabular-nums"
}, ds = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, hs = { class: "ui-stepper-title ui-stepper-title--horizontal" }, fs = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, ps = { class: "flex flex-col items-center" }, ms = {
  key: 1,
  class: "tabular-nums"
}, gs = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, ys = { class: "ui-stepper-title" }, bs = {
  key: 0,
  class: "ui-stepper-description"
};
function vs(e, r, t, s, l, i) {
  const o = k("ui-icon");
  return a(), n("div", I({
    class: i.rootClass,
    role: "list",
    "aria-label": t.ariaLabel
  }, i.passthroughAttrs), [
    t.variant === "pills" ? (a(), n(A, { key: 0 }, [
      u("div", ss, [
        (a(!0), n(A, null, z(i.normalizedSteps, (d, c) => (a(), b(K(t.interactive ? "button" : "span"), I({
          key: c,
          class: ["ui-stepper-pill", i.pillClass(c)],
          role: "listitem",
          "aria-current": c === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      t.showLabel ? (a(), n("p", ns, m(i.pillsLabel), 1)) : p("", !0)
    ], 64)) : t.direction === "horizontal" ? (a(!0), n(A, { key: 1 }, z(i.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      u("div", os, [
        c > 0 ? (a(), n("span", {
          key: 0,
          class: _(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", us)),
        (a(), b(K(t.interactive ? "button" : "div"), I({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(c)],
          "aria-current": c === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(c) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(o, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", cs, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 2,
          class: _(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", ds))
      ]),
      u("p", hs, m(d.title), 1),
      d.description ? (a(), n("p", fs, m(d.description), 1)) : p("", !0)
    ]))), 128)) : (a(!0), n(A, { key: 2 }, z(i.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      u("div", ps, [
        (a(), b(K(t.interactive ? "button" : "div"), I({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(c)],
          "aria-current": c === t.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, t.interactive ? { type: "button" } : {}, {
          onClick: (h) => t.interactive ? i.go(c) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(o, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", ms, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 0,
          class: _(["ui-stepper-vrail", i.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : p("", !0)
      ]),
      u("div", gs, [
        u("p", ys, m(d.title), 1),
        d.description ? (a(), n("p", bs, m(d.description), 1)) : p("", !0)
      ])
    ]))), 128))
  ], 16, ls);
}
const _s = /* @__PURE__ */ w(as, [["render", vs]]);
let Ie = 0;
const ks = {
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
      return T("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
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
}, ws = {
  key: 0,
  class: "ui-slider-header"
}, Ss = {
  key: 0,
  class: "ui-form-label"
}, xs = {
  key: 1,
  class: "ui-slider-value"
}, Cs = { class: "ui-slider-rail" }, Ts = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Ls = {
  key: 1,
  class: "ui-slider-scale"
}, Is = { key: 0 }, As = { key: 1 };
function zs(e, r, t, s, l, i) {
  const o = k("ui-progress");
  return a(), n("div", {
    class: _(i.rootClass)
  }, [
    t.label || i.hasValue ? (a(), n("div", ws, [
      t.label ? (a(), n("span", Ss, m(t.label), 1)) : p("", !0),
      i.hasValue ? (a(), n("span", xs, m(t.valueText), 1)) : p("", !0)
    ])) : p("", !0),
    u("div", Cs, [
      S(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      u("input", I(i.passthroughAttrs, {
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
      }), null, 16, Ts)
    ]),
    t.minLabel || t.maxLabel ? (a(), n("div", Ls, [
      t.minLabel ? (a(), n("span", Is, m(t.minLabel), 1)) : p("", !0),
      t.maxLabel ? (a(), n("span", As, m(t.maxLabel), 1)) : p("", !0)
    ])) : p("", !0)
  ], 2);
}
const Ms = /* @__PURE__ */ w(ks, [["render", zs]]), Ps = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return T("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Es = { class: "ui-table-scroll" };
function Os(e, r, t, s, l, i) {
  return a(), n("div", Es, [
    u("table", I({ class: i.rootClass }, i.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const Vs = /* @__PURE__ */ w(Ps, [["render", Os]]), Rs = {
  name: "TableBody"
}, Bs = { class: "ui-table-body" };
function Ds(e, r, t, s, l, i) {
  return a(), n("tbody", Bs, [
    g(e.$slots, "default")
  ]);
}
const Fs = /* @__PURE__ */ w(Rs, [["render", Ds]]), $s = ["left", "center", "right"], Ns = ["title", "secondary", "body"], Hs = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => $s.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Ns.includes(e)
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
      return T(
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
}, Ws = ["colspan"];
function Gs(e, r, t, s, l, i) {
  return a(), n("td", {
    colspan: t.colspan > 0 ? t.colspan : void 0,
    class: _(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, Ws);
}
const Ys = /* @__PURE__ */ w(Hs, [["render", Gs]]), Us = ["left", "center", "right"], Ks = ["sm", "md", "lg"], js = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Us.includes(e)
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
      return T(
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
      if (!(this.iconCol || Ks.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function qs(e, r, t, s, l, i) {
  return a(), n("th", {
    class: _(i.rootClass),
    style: V(i.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const Zs = /* @__PURE__ */ w(js, [["render", qs]]), Qs = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return T(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function Xs(e, r, t, s, l, i) {
  return a(), n("thead", {
    class: _(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Js = /* @__PURE__ */ w(Qs, [["render", Xs]]), en = {
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
}, tn = { class: "ui-table-pagination" }, rn = { class: "ui-table-pagination-meta" }, an = { class: "ui-table-pagination-nav" }, ln = { class: "ui-table-pagination-page" };
function sn(e, r, t, s, l, i) {
  const o = k("ui-button");
  return a(), n("div", tn, [
    u("div", rn, [
      g(e.$slots, "meta", {}, () => [
        L(m(t.metaText), 1)
      ])
    ]),
    u("div", an, [
      S(o, {
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
      u("div", ln, m(t.pageLabel), 1),
      S(o, {
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
const nn = /* @__PURE__ */ w(en, [["render", sn]]), on = ["none", "soft", "strong"], un = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || on.includes(e)
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
      return T(
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
function cn(e, r, t, s, l, i) {
  return a(), n("tr", {
    class: _(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const dn = /* @__PURE__ */ w(un, [["render", cn]]), hn = {
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
      return T("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, fn = ["id", "aria-labelledby"];
function pn(e, r, t, s, l, i) {
  return Re((a(), n("div", I({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, fn)), [
    [Be, i.isActive]
  ]);
}
const mn = /* @__PURE__ */ w(hn, [["render", pn]]);
function $(e) {
  return String(e).padStart(2, "0");
}
function We(e, r = "HH:mm") {
  const t = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!t) return String(e || "");
  const s = Number(t[1]), l = Number(t[2]);
  if (!Number.isFinite(s) || !Number.isFinite(l))
    return String(e || "");
  if (r === "HH:mm")
    return `${$(s)}:${$(l)}`;
  if (r === "h:mm a" || r === "h:mm A") {
    const i = s >= 12 ? "PM" : "AM";
    return `${s % 12 || 12}:${$(l)} ${i}`;
  }
  return `${$(s)}:${$(l)}`;
}
function gn(e, r, t = "HH:mm") {
  return We(`${e}:${r}`, t);
}
const yn = Ee("ui-timepicker"), le = 40;
function se(e) {
  return String(e).padStart(2, "0");
}
const bn = {
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
      fallbackId: yn(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : P(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return P(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return P(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Ze(void 0);
    },
    display() {
      return this.menuOpen ? gn(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? We(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
      let r = 0, t = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (r = Math.min(23, Math.max(0, parseInt(s[1], 10))), t = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const l = this.minuteValues;
      let i = l[0] ?? 0, o = 999;
      for (const d of l) {
        const c = Math.abs(d - t);
        c < o && (o = c, i = d);
      }
      this.draftHour = r, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return le;
      const r = e.querySelector(".ui-timepicker-wheel-item");
      if (!r) return le;
      const t = r.getBoundingClientRect().height;
      return t > 0 ? t : le;
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
      const e = `${se(this.draftHour)}:${se(this.draftMinute)}`;
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
}, vn = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, _n = { class: "ui-timepicker-wheels" }, kn = { class: "ui-timepicker-wheels-row" }, wn = ["aria-valuenow", "aria-label"], Sn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, xn = { class: "ui-timepicker-wheel-spacer" }, Cn = ["onClick"], Tn = ["aria-valuenow", "aria-label"], Ln = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, In = { class: "ui-timepicker-wheel-spacer" }, An = ["onClick"], zn = { class: "min-w-0 flex-1 truncate text-foreground" }, Mn = { class: "ui-timepicker-panel w-full p-2" }, Pn = { class: "ui-timepicker-wheels" }, En = { class: "ui-timepicker-wheels-row" }, On = ["aria-valuenow", "aria-label"], Vn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Rn = { class: "ui-timepicker-wheel-spacer" }, Bn = ["onClick"], Dn = ["aria-valuenow", "aria-label"], Fn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, $n = { class: "ui-timepicker-wheel-spacer" }, Nn = ["onClick"];
function Hn(e, r, t, s, l, i) {
  const o = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: _([
      "ui-timepicker",
      t.embedded ? "ui-timepicker--embedded" : "",
      t.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    t.embedded ? (a(), n("div", vn, [
      u("div", _n, [
        r[2] || (r[2] = u("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        u("div", kn, [
          u("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            u("div", Sn, [
              u("div", xn, [
                (a(!0), n(A, null, z(i.hourOptions, (c) => (a(), n("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(c)
                }, m(i.pad2(c)), 11, Cn))), 128))
              ])
            ], 512)
          ], 8, wn),
          r[1] || (r[1] = u("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          u("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": i.minuteAriaLabel
          }, [
            u("div", Ln, [
              u("div", In, [
                (a(!0), n(A, null, z(i.minuteValues, (c, h) => (a(), n("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (f) => i.selectMinute(h)
                }, m(i.pad2(c)), 11, An))), 128))
              ])
            ], 512)
          ], 8, Tn)
        ]),
        r[3] || (r[3] = u("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        r[4] || (r[4] = u("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (a(), b(d, {
      key: 1,
      open: l.menuOpen,
      "onUpdate:open": r[0] || (r[0] = (c) => l.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: t.disabled
    }, {
      trigger: y(({ open: c, toggle: h, close: f }) => [
        g(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: f
        }, () => [
          S(o, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: t.disabled,
            "aria-expanded": c ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              u("span", zn, m(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        u("div", Mn, [
          u("div", Pn, [
            r[6] || (r[6] = u("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            u("div", En, [
              u("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                u("div", Vn, [
                  u("div", Rn, [
                    (a(!0), n(A, null, z(i.hourOptions, (c) => (a(), n("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(c)
                    }, m(i.pad2(c)), 11, Bn))), 128))
                  ])
                ], 512)
              ], 8, On),
              r[5] || (r[5] = u("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              u("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                u("div", Fn, [
                  u("div", $n, [
                    (a(!0), n(A, null, z(i.minuteValues, (c, h) => (a(), n("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (f) => i.selectMinute(h)
                    }, m(i.pad2(c)), 11, Nn))), 128))
                  ])
                ], 512)
              ], 8, Dn)
            ]),
            r[7] || (r[7] = u("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            r[8] || (r[8] = u("div", {
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
const Ae = /* @__PURE__ */ w(bn, [["render", Hn]]), Wn = ["square", "video", "auto"], Gn = ["fill", "sm", "md", "lg"], ze = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Yn = {
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
      validator: (e) => Wn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Gn.includes(e)
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
      return T(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        ze[this.size] || ze.fill,
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
}, Un = ["src", "alt"], Kn = ["aria-hidden"], jn = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, qn = {
  key: 3,
  class: "ui-photo__overflow"
}, Zn = ["aria-label"], Qn = ["aria-label"], Xn = { class: "ui-photo-preview__panel" }, Jn = ["src", "alt"], eo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function to(e, r, t, s, l, i) {
  const o = k("ui-icon"), d = k("ui-button");
  return a(), n(A, null, [
    (a(), b(K(i.rootTag), I({
      type: t.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: y(() => [
        t.src && !l.imageFailed ? (a(), n("img", {
          key: 0,
          src: t.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: r[0] || (r[0] = (c) => l.imageFailed = !0)
        }, null, 40, Un)) : (a(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": t.interactive ? "true" : void 0
        }, [
          S(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Kn)),
        t.favorite ? (a(), n("span", jn, [
          S(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : p("", !0),
        t.overflowLabel ? (a(), n("span", qn, m(t.overflowLabel), 1)) : p("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), b(J, { to: "body" }, [
      S(ee, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          l.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: r[2] || (r[2] = (...c) => i.onPreviewKeydown && i.onPreviewKeydown(...c))
          }, [
            u("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: r[1] || (r[1] = (...c) => i.closePreview && i.closePreview(...c))
            }, null, 8, Qn),
            u("div", Xn, [
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
              i.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: E(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Jn)) : p("", !0),
              i.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: E(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.counterLabel ? (a(), n("p", eo, m(i.counterLabel), 1)) : p("", !0)
            ])
          ], 40, Zn)) : p("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const io = /* @__PURE__ */ w(Yn, [["render", to]]), ro = ["square", "video", "auto"], ao = {
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
      validator: (e) => ro.includes(e)
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
      return T(
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
}, lo = ["data-count"], so = ["aria-label"], no = ["aria-label"], oo = { class: "ui-photo-preview__panel" }, uo = ["src", "alt"], co = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ho(e, r, t, s, l, i) {
  const o = k("ui-photo"), d = k("ui-button");
  return a(), n(A, null, [
    u("div", {
      class: _(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (a(!0), n(A, null, z(i.visibleItems, (c, h) => (a(), b(o, {
        key: c.key || `${c.src}-${h}`,
        src: c.src,
        alt: c.alt || "",
        favorite: !!c.favorite,
        aspect: t.aspect,
        preview: t.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": c.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, lo),
    (a(), b(J, { to: "body" }, [
      S(ee, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          l.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: r[1] || (r[1] = (...c) => i.onPreviewKeydown && i.onPreviewKeydown(...c))
          }, [
            u("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: r[0] || (r[0] = (...c) => i.closePreview && i.closePreview(...c))
            }, null, 8, no),
            u("div", oo, [
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
              i.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: E(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, uo)) : p("", !0),
              i.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: E(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.counterLabel ? (a(), n("p", co, m(i.counterLabel), 1)) : p("", !0)
            ])
          ], 40, so)) : p("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const fo = /* @__PURE__ */ w(ao, [["render", ho]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function vo() {
  return {
    push: F,
    dismiss: Xe,
    clear: Qe,
    info: (e) => F({ ...U(e), variant: "info" }),
    success: (e) => F({ ...U(e), variant: "success" }),
    warning: (e) => F({ ...U(e), variant: "warning" }),
    error: (e) => F({ ...U(e), variant: "error" })
  };
}
function _o(e = !1) {
  return Ve({
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
function ko() {
  return {
    confirm: Je
  };
}
const ue = {
  en: at,
  tr: Oe
};
function wo(e = "tr") {
  return ue[e] ?? ue.tr;
}
const So = Oe, po = [
  ["ui-action-card", Ut],
  ["ui-action-card-list", Zt],
  ["ui-action-group", lt],
  ["ui-ai-button", ti],
  ["ui-alert", st],
  ["ui-avatar", nt],
  ["ui-avatar-group", si],
  ["ui-badge", ot],
  ["ui-button", ut],
  ["ui-card", ct],
  ["ui-checkbox", Ri],
  ["ui-checkbox-group", Hi],
  ["ui-color-picker", wi],
  ["ui-currency-input", Ne],
  ["ui-confirm-dialog", dt],
  ["ui-date-picker", ht],
  ["ui-date-range-picker", lr],
  ["ui-dialog", ft],
  ["ui-divider", Me],
  ["ui-dropdown", pt],
  ["ui-empty", mt],
  ["ui-field", fr],
  ["ui-field-action", Tr],
  ["ui-file", Dr],
  ["ui-form-row", gt],
  ["ui-guidance", ha],
  ["ui-icon", yt],
  ["ui-icon-picker", Ta],
  ["ui-input", bt],
  ["ui-price-display", Ba],
  ["ui-price-display-group", Na],
  ["ui-price-display-row", Ka],
  ["ui-price-input", el],
  ["ui-price-text", ce],
  ["ui-password", nl],
  ["ui-phone", vt],
  ["ui-pin", _t],
  ["ui-list", kt],
  ["ui-list-item", wt],
  ["ui-popover", St],
  ["ui-progress", bl],
  ["ui-radio", xt],
  ["ui-radio-group", Ct],
  ["ui-select", Tt],
  ["ui-sheet", Pl],
  ["ui-menu", Fl],
  ["ui-menu-group", Gl],
  ["ui-menu-item", Kl],
  ["ui-menu-nav", Ql],
  ["ui-segment", Lt],
  ["ui-segment-group", It],
  ["ui-skeleton", At],
  ["ui-slider", Ms],
  ["ui-step", ts],
  ["ui-stepper", _s],
  ["ui-switch", zt],
  ["ui-table", Vs],
  ["ui-table-body", Fs],
  ["ui-table-cell", Ys],
  ["ui-table-head", Zs],
  ["ui-table-header", Js],
  ["ui-table-pagination", nn],
  ["ui-table-row", dn],
  ["ui-tag", Mt],
  ["ui-tab-list", Pt],
  ["ui-tab-panel", mn],
  ["ui-tabs", Et],
  ["ui-tab-trigger", Ot],
  ["ui-time-picker", Ae],
  ["ui-timepicker", Ae],
  ["ui-tooltip", Vt],
  ["ui-toast", Rt],
  ["ui-photo", io],
  ["ui-photos", fo]
];
function mo(e, r = {}) {
  var c, h;
  const { i18n: t, locale: s, locales: l, theme: i, themeOverrides: o, priceInput: d } = r;
  if (typeof i == "string") {
    const f = et(i, o || {});
    tt(e, f.defaults), e.config.globalProperties.$uiDefaults = f.defaults, me({
      ...f.config,
      ...it(f.defaults)
    });
  } else if (i && typeof i == "object") {
    const f = o ? rt(i, o) : i;
    me(f);
  }
  if (d && Za(d), (c = t == null ? void 0 : t.global) != null && c.mergeLocaleMessage) {
    const f = l ?? (s != null ? [s] : [
      typeof t.global.locale == "string" ? t.global.locale : ((h = t.global.locale) == null ? void 0 : h.value) ?? "tr"
    ]);
    for (const v of f) {
      const x = ue[v];
      x && t.global.mergeLocaleMessage(v, x);
    }
  }
  for (const [f, v] of po)
    e.component(f, v);
}
const xo = {
  install: mo
};
export {
  Ut as ActionCard,
  Zt as ActionCardList,
  lt as ActionGroup,
  ti as AiButton,
  st as Alert,
  nt as Avatar,
  si as AvatarGroup,
  Lo as BASE_UI_DEFAULTS,
  ot as Badge,
  ut as Button,
  ct as Card,
  Ri as Checkbox,
  Hi as CheckboxGroup,
  wi as ColorPicker,
  dt as ConfirmDialog,
  Ne as CurrencyInput,
  ht as DatePicker,
  lr as DateRangePicker,
  ft as Dialog,
  Me as Divider,
  pt as Dropdown,
  mt as Empty,
  Io as FEW_COLOR_SCALE,
  Ao as FEW_PALETTE_ID,
  zo as FEW_PRIMARY,
  Mo as FEW_PRIMARY_FOREGROUND,
  fr as Field,
  Tr as FieldAction,
  Dr as File,
  gt as FormRow,
  Po as GOOGLE_FONTS_CATALOG,
  ha as Guidance,
  yt as Icon,
  Ta as IconPicker,
  bt as Input,
  Eo as LEGACY_PRESET_TO_THEME,
  kt as List,
  wt as ListItem,
  Fl as Menu,
  Gl as MenuGroup,
  Kl as MenuItem,
  Ql as MenuNav,
  ja as PRICE_FORMATS,
  nl as Password,
  vt as Phone,
  io as Photo,
  fo as Photos,
  _t as Pin,
  St as Popover,
  el as PriceInput,
  bl as Progress,
  xt as Radio,
  Ct as RadioGroup,
  Lt as Segment,
  It as SegmentGroup,
  Tt as Select,
  Pl as Sheet,
  At as Skeleton,
  Ms as Slider,
  ts as Step,
  _s as Stepper,
  zt as Switch,
  Oo as THEME_CUSTOM_CSS_ID,
  Vo as THEME_IDS,
  Ro as THEME_PACKAGES,
  Bo as THEME_PRESETS,
  Do as THEME_PRESET_IDS,
  Pt as TabList,
  mn as TabPanel,
  Ot as TabTrigger,
  Vs as Table,
  Fs as TableBody,
  Ys as TableCell,
  Zs as TableHead,
  Js as TableHeader,
  nn as TablePagination,
  dn as TableRow,
  Et as Tabs,
  Mt as Tag,
  Ae as TimePicker,
  Rt as Toast,
  Vt as Tooltip,
  Fo as UI_DEFAULTS_KEY,
  $o as UI_ICON_TYPES,
  No as applyGoogleFontsCatalogPreview,
  Ho as applyGoogleFontsForTheme,
  Wo as applyThemeCustomCss,
  me as applyUiTheme,
  Go as buildGoogleFontsLinkTag,
  Yo as buildGoogleFontsStylesheetUrl,
  Uo as buildThemeEnforcementCss,
  Ko as buildThemeStyleAttr,
  jo as clearThemeCustomCss,
  Qe as clearToasts,
  qo as createUiId,
  Ee as createUiIdFactory,
  xo as default,
  Zo as deriveBrandColorsFromPrimary,
  Xe as dismissToast,
  bo as formatCurrencyAmount,
  Qo as formatGoogleFontFamilyName,
  xi as formatMoneyInput,
  De as getCurrencySymbol,
  Xo as getFewPrimaryColors,
  $e as getMoneySeparators,
  Qa as getPriceInputConfig,
  Jo as getThemeCssPath,
  eu as getThemePackage,
  tu as getThemePreset,
  wo as getUiMessages,
  iu as googleFontSelectOptions,
  W as iconTypeProp,
  ru as mergeUiDefaults,
  rt as mergeUiTheme,
  Si as parseLocalizedMoneyInput,
  je as pickPassthroughAttrs,
  tt as provideUiDefaults,
  F as pushToast,
  Je as requestConfirm,
  au as resetUiIds,
  lu as resolveControlSize,
  te as resolveCurrencyCode,
  su as resolvePrimaryColor,
  Ge as resolveThemeControlSize,
  Ye as resolveThemeDateFormat,
  nu as resolveThemeDefault,
  ou as resolveThemeDialogMaxWidth,
  uu as resolveThemeFontFamilies,
  j as resolveThemeIconType,
  cu as resolveThemeId,
  et as resolveThemePackage,
  du as resolveThemePreset,
  Ze as resolveThemeTimeFormat,
  hu as resolveThemeVars,
  P as resolveUiText,
  Fe as sanitizeMoneyInput,
  Za as setPriceInputConfig,
  X as themeIconTypeComputed,
  So as uiMessagesTr,
  ko as useConfirm,
  _o as useDialog,
  vo as useToast,
  fu as useUiDefaults,
  pu as useUiDefaultsOptions,
  mu as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
