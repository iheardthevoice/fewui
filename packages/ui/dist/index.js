import { _ as w, ai as W, aG as X, au as Ye, a4 as x, aF as z, av as Ge, as as Ue, ac as Ke, az as j, h as Me, aa as Pe, am as je, a6 as Ee, aj as qe, aD as Ze, a3 as Qe, a8 as Xe, ao as D, ap as Je, aH as Oe, aB as et, an as tt, Y as me, aI as it, al as rt, a9 as at, A as lt, a as st, b as nt, c as ot, d as ut, C as ct, e as dt, f as ht, g as ft, i as pt, E as mt, m as gt, I as yt, n as bt, P as vt, q as _t, o as kt, p as wt, r as St, R as xt, s as Ct, u as Tt, S as Lt, t as It, v as At, w as zt, M as Mt, H as Pt, K as Et, J as Ot, O as Vt, N as Rt } from "./index-BVvp-vC_.js";
import { B as Co, F as To, j as Lo, k as Io, l as Ao, G as zo, L as Mo, D as Po, T as Eo, x as Oo, y as Vo, z as Ro, U as Bo, Q as Fo, V as Do, W as $o, X as No, Z as Ho, $ as Wo, a0 as Yo, a1 as Go, a2 as Uo, a5 as Ko, a7 as jo, ab as qo, ad as Zo, ae as Qo, af as Xo, ag as Jo, ah as eu, ak as tu, aq as iu, ar as ru, at as au, aw as lu, ax as su, ay as nu, aA as ou, aC as uu, aE as cu, aJ as du, aK as hu, aL as fu } from "./index-BVvp-vC_.js";
import { resolveComponent as k, openBlock as a, createElementBlock as n, normalizeClass as _, renderSlot as g, createBlock as b, createCommentVNode as f, createElementVNode as o, toDisplayString as m, normalizeStyle as O, createVNode as S, mergeProps as L, withCtx as y, withModifiers as M, createTextVNode as T, Fragment as I, renderList as A, withKeys as ne, createSlots as q, normalizeProps as Bt, guardReactiveProps as Ft, Teleport as J, Transition as ee, readonly as Dt, reactive as Ve, withDirectives as Re, vShow as Be, resolveDynamicComponent as K } from "vue";
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
}, Nt = ["disabled"], Ht = { class: "ui-action-card__content" }, Wt = { class: "ui-action-card__title" }, Yt = {
  key: 0,
  class: "ui-action-card__description"
};
function Gt(e, r, i, s, l, t) {
  const u = k("ui-icon");
  return a(), n("button", {
    type: "button",
    class: _(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: r[0] || (r[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      t.showDefaultLeading ? (a(), b(u, {
        key: 0,
        name: i.icon,
        type: e.resolvedIconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : f("", !0)
    ]),
    o("span", Ht, [
      o("span", Wt, m(i.title), 1),
      i.description ? (a(), n("span", Yt, m(i.description), 1)) : f("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (a(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, Nt);
}
const Ut = /* @__PURE__ */ w($t, [["render", Gt]]), Kt = {
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
function qt(e, r, i, s, l, t) {
  return a(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: O(t.listStyle)
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
      const e = Ye(this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, Xt = ["data-size"], Jt = { class: "ui-ai-button__surface" };
function ei(e, r, i, s, l, t) {
  const u = k("ui-button");
  return a(), n("span", {
    class: _(["ui-ai-button", {
      "ui-ai-button--block": t.isBlock,
      "ui-ai-button--disabled": i.disabled || i.loading
    }]),
    "data-size": t.resolvedSize,
    style: O(t.rootStyle)
  }, [
    r[1] || (r[1] = o("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    o("span", Jt, [
      S(u, L({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: t.resolvedSize,
        "prefix-icon": i.prefixIcon,
        disabled: i.disabled,
        loading: i.loading,
        fulled: t.isBlock
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
}, ai = ["aria-label"];
function li(e, r, i, s, l, t) {
  return a(), n("div", {
    class: _(t.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    i.overflowCount > 0 ? (a(), n("span", {
      key: 0,
      class: _(["ui-avatar-group-overflow", e.SIZE_CLASS[i.size] || e.SIZE_CLASS.md])
    }, m(t.overflowText), 3)) : f("", !0)
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
}, ui = ["disabled", "aria-expanded", "onClick"], ci = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, di = { class: "ui-select-field-suffix" }, hi = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, fi = { class: "ui-color-picker-panel" }, pi = { class: "ui-color-picker-panel__header" }, mi = { class: "ui-color-picker-panel__title" }, gi = { class: "ui-color-picker-swatches" }, yi = ["title", "onClick"], bi = { class: "ui-color-picker-custom" }, vi = { class: "ui-color-picker-panel__title" }, _i = { class: "ui-color-picker-custom__row" };
function ki(e, r, i, s, l, t) {
  const u = k("ui-icon"), d = k("ui-button"), c = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: _(t.rootClass)
  }, [
    S(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: y(({ open: p, toggle: v, close: C }) => [
        g(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: C
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", ci, [
              t.localColor ? (a(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: O({ backgroundColor: t.localColor })
              }, null, 4)) : (a(), b(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            o("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !t.localColor }])
            }, m(t.displayValue), 3),
            o("span", di, [
              o("span", hi, [
                S(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ui)
        ])
      ]),
      content: y(() => [
        o("div", fi, [
          o("div", pi, [
            o("span", mi, m(t.popoverTitleLabel), 1),
            t.localColor ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(t.clearColor, ["stop"])
            }, {
              default: y(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", gi, [
            (a(!0), n(I, null, A(l.presetColors, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: _(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": t.localColor === p }]),
              style: O({ backgroundColor: p }),
              title: p,
              onClick: (v) => t.selectColor(p)
            }, [
              t.localColor === p ? (a(), b(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, yi))), 128))
          ]),
          o("div", bi, [
            o("span", vi, m(t.customColorLabelText), 1),
            o("div", _i, [
              S(c, {
                modelValue: t.localColor,
                "onUpdate:modelValue": r[0] || (r[0] = (p) => t.localColor = p),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: t.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              o("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: O({ backgroundColor: t.localColor || "transparent" }),
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
  const i = String(e).trim();
  if (ge[i])
    return ge[i];
  const s = i.toUpperCase();
  return N[s] ? s : r in N ? r : "TRY";
}
function Fe(e) {
  var i;
  const r = te(e);
  if (N[r])
    return N[r];
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
function go(e, r, i = "tr-TR") {
  const s = Number(e) || 0, l = te(r);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: l }).format(s);
  } catch {
    return `${Fe(l)}${s.toFixed(2)}`;
  }
}
function De(e) {
  let r = String(e ?? "").replace(",", ".");
  r = r.replace(/[^\d.]/g, "");
  const i = r.indexOf(".");
  if (i !== -1) {
    const s = r.slice(0, i), l = r.slice(i + 1).replace(/\./g, "");
    r = `${s}.${l}`;
  }
  return r;
}
function $e(e = "tr-TR") {
  var r, i;
  try {
    const s = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((r = s.find((l) => l.type === "group")) == null ? void 0 : r.value) || ".",
      decimal: ((i = s.find((l) => l.type === "decimal")) == null ? void 0 : i.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Si(e, r = "tr-TR") {
  const { group: i, decimal: s } = $e(r);
  let l = String(e ?? "").trim();
  return l ? (l = l.split(i).join(""), l = l.split(s).join("."), De(l)) : "";
}
function xi(e, r = "tr-TR") {
  const i = De(e);
  if (!i) return "";
  const { group: s, decimal: l } = $e(r), [t = "", u] = i.split("."), c = (t.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, s);
  return u === void 0 ? c : `${c}${l}${u}`;
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
      return Fe(this.currency);
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
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
function Ii(e, r, i, s, l, t) {
  const u = k("ui-input");
  return a(), b(u, L({
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
    prepend: y(() => [
      o("span", Li, m(t.displaySymbol), 1)
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
        const r = e.target.checked, i = this.uiCheckboxGroup.modelValue, s = Array.isArray(i) ? [...i] : [], l = s.findIndex((t) => Object.is(t, this.value));
        r && l === -1 ? s.push(this.value) : !r && l !== -1 && s.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, r = Array.isArray(e) ? [...e] : [], i = r.findIndex((s) => Object.is(s, this.value));
        i === -1 ? r.push(this.value) : r.splice(i, 1), this.uiCheckboxGroup.$emit("update:modelValue", r);
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
function Vi(e, r, i, s, l, t) {
  const u = k("ui-icon");
  return a(), n("label", {
    class: _(t.checkboxClasses),
    onKeydown: [
      r[1] || (r[1] = ne(M((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["enter"])),
      r[2] || (r[2] = ne(M((...d) => t.toggle && t.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    o("input", {
      type: t.nativeType,
      name: t.nativeName,
      value: t.groupValueString,
      checked: t.isChecked,
      class: "sr-only",
      onChange: r[0] || (r[0] = (...d) => t.onNativeChange && t.onNativeChange(...d))
    }, null, 40, zi),
    o("span", Mi, [
      t.isChecked ? (a(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    o("span", Pi, [
      e.$slots.label || i.label ? (a(), n("span", Ei, [
        g(e.$slots, "label", {}, () => [
          T(m(i.label), 1)
        ])
      ])) : f("", !0),
      i.description ? (a(), n("span", Oi, m(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Ri = /* @__PURE__ */ w(Ai, [["render", Vi]]), Bi = ["list", "button", "List", "Button"], Fi = ["vertical", "horizontal"];
let be = 0;
const Di = {
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
      validator: (e) => e == null || e === "" || Fi.includes(e)
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
      return x(
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
function Ni(e, r, i, s, l, t) {
  return a(), n("div", {
    class: _(t.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, $i);
}
const Hi = /* @__PURE__ */ w(Di, [["render", Ni]]);
let ve = 0;
function H(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${H(e.getMonth() + 1)}-${H(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return null;
  const i = Number(r[1]), s = Number(r[2]) - 1, l = Number(r[3]), t = new Date(i, s, l);
  return t.getFullYear() !== i || t.getMonth() !== s || t.getDate() !== l ? null : t;
}
function R(e, r) {
  return e === r ? 0 : e < r ? -1 : 1;
}
function re(e, r, i) {
  return new Date(e, r, 1).toLocaleString(i, { month: "long" });
}
function _e(e, r, i, s) {
  const l = `${e}-${H(r + 1)}-01`, t = new Date(e, r + 1, 0).getDate();
  let u = `${e}-${H(r + 1)}-${H(t)}`;
  if (i && u > i && (u = i), s && l < s && u < s) return null;
  let d = l;
  return s && d < s && (d = s), R(d, u) > 0 ? null : [d, u];
}
const Wi = {
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
    ve += 1;
    const e = ve, r = ((s = this.modelValue) == null ? void 0 : s[0]) || "", i = Y(r) || Y((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
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
        return R(e, r) <= 0 ? r : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), r = B(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const s = B(i), l = e.getMonth(), t = e.getFullYear(), u = new Date(t, l - 1, 1), d = u.getFullYear(), c = u.getMonth(), h = (v, C) => typeof this.$t == "function" ? this.$t(v, C) : v;
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
            month: re(t, l, this.locale)
          }),
          range: _e(t, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: re(d, c, this.locale)
          }),
          range: _e(d, c, this.maxYmd, this.minYmd)
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
        title: re(i.year, i.month, this.locale),
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
      const i = Ge(void 0, "dateRangeFormat"), s = (l) => l ? Ke(l, this.locale, i) || l : "…";
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
      const i = new Date(e, r, 1), s = new Date(e, r, 1 - i.getDay()), l = this.previewStart, t = this.previewEnd, u = l && t, d = [];
      for (let c = 0; c < 42; c += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + c), p = h.getMonth() === r && h.getFullYear() === e, v = h.getDate(), C = B(h), F = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${r}`, P = B(/* @__PURE__ */ new Date()) === C, V = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let de = !1, he = !1;
        if (u) {
          const fe = R(l, t) <= 0 ? l : t, pe = R(l, t) <= 0 ? t : l;
          de = R(C, fe) >= 0 && R(C, pe) <= 0, he = C === fe || C === pe;
        }
        d.push({
          key: F,
          d: v,
          date: h,
          today: P,
          inMonth: p,
          disabled: V,
          inRange: de,
          endpoint: he
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = B(e.date));
    },
    applyQuick(e, r) {
      if (e.disabled || !e.range) return;
      const [i, s] = e.range;
      this.pickingStart = i, this.pickingEnd = s, this.$emit("update:modelValue", [i, s]), this.$emit("change", [i, s]), r();
    },
    pick(e, r) {
      if (!e.date || e.disabled) return;
      const i = B(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, l = i;
      if (R(l, s) < 0) {
        const t = s;
        s = l, l = t;
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
}, Yi = { class: "min-w-0 flex-1 truncate text-foreground" }, Gi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Ui = { class: "ui-daterangepicker-layout" }, Ki = ["aria-label"], ji = { class: "ui-daterangepicker-calendars" }, qi = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, Zi = { class: "ui-daterangepicker-month-row" }, Qi = { class: "mb-2 flex items-center justify-between gap-2" }, Xi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Ji = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, er = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, tr = { class: "ui-datepicker-grid" };
function ir(e, r, i, s, l, t) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: _(["ui-daterangepicker", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    S(d, {
      open: l.menuOpen,
      "onUpdate:open": r[2] || (r[2] = (c) => l.menuOpen = c),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: t.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: y(({ open: c, toggle: h, close: p }) => [
        g(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: p
        }, () => [
          S(u, {
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
            default: y(() => [
              o("span", Yi, m(t.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(({ close: c }) => [
        o("div", Gi, [
          o("div", Ui, [
            o("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": t.resolvedQuickAriaLabel
            }, [
              (a(!0), n(I, null, A(t.quickPresets, (h) => (a(), b(u, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (p) => t.applyQuick(h, c)
              }, {
                default: y(() => [
                  T(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Ki),
            o("div", ji, [
              t.rangeHint ? (a(), n("p", qi, m(t.rangeHint), 1)) : f("", !0),
              o("div", Zi, [
                (a(!0), n(I, null, A(t.calendarPanes, (h) => (a(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  o("div", Qi, [
                    h.showPrev ? (a(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": t.resolvedPrevMonthLabel,
                      onClick: r[0] || (r[0] = M((p) => t.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", Xi)),
                    o("span", Ji, m(h.title), 1),
                    h.showNext ? (a(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": t.resolvedNextMonthLabel,
                      onClick: r[1] || (r[1] = M((p) => t.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", er))
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
                  o("div", tr, [
                    (a(!0), n(I, null, A(h.cells, (p) => (a(), b(u, {
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
                      default: y(() => [
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
const rr = /* @__PURE__ */ w(Wi, [["render", ir]]), ar = {
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
      return x("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, lr = {
  key: 0,
  class: "ui-field__title-row"
}, sr = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, nr = {
  key: 1,
  class: "ui-field__title"
}, or = {
  key: 1,
  class: "ui-field__value"
}, ur = {
  key: 2,
  class: "ui-field__subtitle"
};
function cr(e, r, i, s, l, t) {
  const u = k("ui-icon");
  return a(), n("div", L({ class: t.rootClass }, t.passthroughAttrs), [
    i.title || t.showIcon ? (a(), n("div", lr, [
      t.showIcon ? (a(), n("span", sr, [
        S(u, {
          name: i.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      i.title ? (a(), n("span", nr, m(i.title), 1)) : f("", !0)
    ])) : f("", !0),
    t.hasValue ? (a(), n("div", or, [
      g(e.$slots, "default")
    ])) : f("", !0),
    i.subtitle ? (a(), n("p", ur, m(i.subtitle), 1)) : f("", !0)
  ], 16);
}
const dr = /* @__PURE__ */ w(ar, [["render", cr]]), hr = ["popover", "dialog"], fr = ["sm", "md", "lg"], pr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], mr = {
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
      validator: (e) => hr.includes(e)
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
      validator: (e) => fr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => pr.includes(e)
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
}, gr = { class: "ui-field-action-header" }, yr = { class: "ui-field-action-header__text" }, br = {
  key: 0,
  class: "ui-field-action-header__title"
}, vr = {
  key: 1,
  class: "ui-field-action-header__description"
}, _r = { class: "ui-field-action-body" }, kr = { class: "ui-field-action-body" }, wr = { class: "ui-field-action-footer" };
function Sr(e, r, i, s, l, t) {
  const u = k("ui-button"), d = k("ui-popover"), c = k("ui-dialog");
  return a(), n("div", {
    class: _([
      "ui-field-action",
      t.hasValue ? "ui-field-action--filled" : "",
      i.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    t.isPopover ? (a(), b(d, {
      key: 0,
      open: t.resolvedOpen,
      "onUpdate:open": r[0] || (r[0] = (h) => t.resolvedOpen = h),
      placement: i.placement,
      width: i.popoverWidth,
      disabled: i.disabled,
      "mobile-centered": i.mobileCentered
    }, q({
      trigger: y(({ open: h, toggle: p }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: p,
          close: t.close,
          label: t.triggerLabel,
          hasValue: t.hasValue
        }, () => [
          i.iconOnly ? (a(), b(u, {
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
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), b(u, {
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
            default: y(() => [
              T(m(t.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: y(({ close: h }) => [
        o("div", _r, [
          g(e.$slots, "default", {
            close: h,
            open: t.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      t.showPopoverHeader ? {
        name: "header",
        fn: y(({ close: h }) => [
          g(e.$slots, "header", { close: h }, () => [
            o("div", gr, [
              o("div", yr, [
                i.title ? (a(), n("p", br, m(i.title), 1)) : f("", !0),
                i.description ? (a(), n("p", vr, m(i.description), 1)) : f("", !0)
              ]),
              i.clearable && t.hasValue ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": t.resolvedClearLabel,
                onClick: (p) => t.onClear(h)
              }, null, 8, ["aria-label", "onClick"])) : f("", !0)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), n(I, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: t.resolvedOpen,
        toggle: t.toggle,
        close: t.close,
        label: t.triggerLabel,
        hasValue: t.hasValue
      }, () => [
        i.iconOnly ? (a(), b(u, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), b(u, {
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
          default: y(() => [
            T(m(t.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      S(c, {
        open: t.resolvedOpen,
        "onUpdate:open": r[4] || (r[4] = (h) => t.resolvedOpen = h),
        title: i.title,
        description: i.description,
        icon: i.dialogIcon,
        "max-width": i.maxWidth,
        "close-on-backdrop": i.closeOnBackdrop,
        "close-on-escape": i.closeOnEscape
      }, q({
        default: y(() => [
          o("div", kr, [
            g(e.$slots, "default", {
              close: t.close,
              open: t.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        t.showDialogFooter ? {
          name: "footer",
          fn: y(() => [
            g(e.$slots, "footer", { close: t.close }, () => [
              o("div", wr, [
                i.clearable && t.hasValue ? (a(), b(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "eraser",
                  "aria-label": t.resolvedClearLabel,
                  onClick: r[3] || (r[3] = (h) => t.onClear(t.close))
                }, null, 8, ["aria-label"])) : f("", !0),
                S(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: t.close
                }, {
                  default: y(() => [
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
const xr = /* @__PURE__ */ w(mr, [["render", Sr]]), Cr = ["auto", "file", "folder"], Tr = ["sm", "md", "lg"], Lr = { icon: "folder", color: "text-sky-500" }, Ir = { icon: "file-lines", color: "text-muted-foreground" }, Ar = {
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
function zr(e) {
  const r = Z(e);
  return /[/\\]\s*$/.test(r);
}
function He(e) {
  const r = Z(e).replace(/[/\\]+$/, "");
  if (!r) return "";
  const i = r.split(/[/\\]/);
  return i[i.length - 1] || r;
}
function Mr(e) {
  const r = He(e), i = r.lastIndexOf(".");
  return i <= 0 || i === r.length - 1 ? "" : r.slice(i + 1).toLowerCase();
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
}, Pr = {
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
      validator: (e) => Cr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Tr.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : zr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = Z(this.name);
      return e ? this.basenameOnly ? He(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return Z(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Lr;
      const e = Mr(this.name);
      return Ar[e] || Ir;
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
}, Er = ["aria-label"], Or = ["title"];
function Vr(e, r, i, s, l, t) {
  const u = k("ui-icon");
  return a(), n("div", {
    class: _(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", t.rootSizeClass]),
    role: "img",
    "aria-label": t.ariaLabel
  }, [
    o("div", {
      class: _(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [t.shellClasses, t.folderShellClass]])
    }, [
      S(u, {
        name: t.resolvedIcon,
        type: t.resolvedIconType,
        size: t.iconSizeToken,
        class: _(t.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    o("span", {
      class: _(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", t.labelClass]),
      "aria-hidden": "true",
      title: t.fullLabel
    }, m(t.displayLabel), 11, Or)
  ], 10, Er);
}
const Rr = /* @__PURE__ */ w(Pr, [["render", Vr]]);
function Br(e) {
  const r = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!r.length) return null;
  const i = Math.min(...r.map((u) => u.top)), s = Math.min(...r.map((u) => u.left)), l = Math.max(...r.map((u) => u.right)), t = Math.max(...r.map((u) => u.bottom));
  return {
    top: i,
    left: s,
    right: l,
    bottom: t,
    width: l - s,
    height: t - i,
    x: s,
    y: i,
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
    const i = [
      r.querySelector(".ui-form-row-text"),
      r.querySelector(".ui-form-row-control")
    ].filter((l) => l instanceof HTMLElement), s = Br(i.map((l) => l.getBoundingClientRect()));
    if (s) return s;
  }
  return r.getBoundingClientRect();
}
function Fr(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const r = [e];
  for (const s of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    s instanceof HTMLElement && r.push(s);
  return r;
}
const Dr = ["dialog", "popover", "card", "tour"], $r = [
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
], Nr = ["sm", "md", "lg", "xl", "2xl", "full"], E = 12, Hr = 8, Wr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Dr.includes(e)
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
      validator: (e) => $r.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Hr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Nr.includes(e)
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? oe(e) : typeof e == "string" && e.trim() ? oe(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const r = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const s = window.innerWidth, l = window.innerHeight, t = i.getBoundingClientRect(), u = t.width || 320, d = t.height || 180;
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
      const h = Math.max(0, Number(this.targetPadding) || 0), p = Math.max(0, c.top - h), v = Math.max(0, c.left - h), C = Math.min(l, c.bottom + h), F = Math.min(s, c.right + h);
      this.tourHighlightStyle = {
        top: `${p}px`,
        left: `${v}px`,
        width: `${Math.max(0, F - v)}px`,
        height: `${Math.max(0, C - p)}px`
      };
      let P = C + E, V = v;
      this.placement.startsWith("top") ? P = p - d - E : this.placement.startsWith("right") ? (P = p, V = F + E) : this.placement.startsWith("left") ? (P = p, V = v - u - E) : this.placement.includes("end") && (V = F - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + d > l - E && (P = p - d - E), P = Math.max(E, Math.min(P, l - d - E)), V = Math.max(E, Math.min(V, s - u - E)), this.tourPanelStyle = {
        position: "fixed",
        top: `${P}px`,
        left: `${V}px`,
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
          for (const i of Fr(r))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Yr = { class: "ui-guidance-footer" }, Gr = { class: "ui-guidance-popover" }, Ur = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Kr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, jr = { class: "ui-guidance-popover__text" }, qr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Zr = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, Qr = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Xr = ["aria-label"], Jr = { class: "ui-guidance-tour__content" }, ea = { class: "ui-header-lead" }, ta = { class: "ui-header-lead__main" }, ia = {
  key: 0,
  class: "ui-header-lead__icon"
}, ra = { class: "ui-header-lead__text" }, aa = {
  key: 0,
  class: "ui-guidance-tour__title"
}, la = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, sa = {
  key: 0,
  class: "ui-header-lead__actions"
}, na = {
  key: 0,
  class: "ui-guidance-tour__body"
}, oa = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function ua(e, r, i, s, l, t) {
  const u = k("ui-button"), d = k("ui-card"), c = k("ui-dialog"), h = k("ui-icon"), p = k("ui-popover");
  return t.shouldRender ? (a(), n("div", {
    key: 0,
    class: _(t.rootShellClass)
  }, [
    i.mode === "card" ? (a(), b(d, {
      key: 0,
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
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
      t.hasFooterActions ? {
        name: "footer",
        fn: y(() => [
          g(e.$slots, "footer", {}, () => [
            o("div", Yr, [
              i.showFooterClose ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: t.onClose
              }, {
                default: y(() => [
                  T(m(t.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              i.showGo ? (a(), b(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: t.onGo
              }, {
                default: y(() => [
                  T(m(t.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (a(), b(c, {
      key: 1,
      open: t.syncOpen,
      "onUpdate:open": r[0] || (r[0] = (v) => t.syncOpen = v),
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      onAfterLeave: r[1] || (r[1] = (v) => e.$emit("after-leave"))
    }, q({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          S(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: t.onGo
          }, {
            default: y(() => [
              T(m(t.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (a(), b(p, {
      key: 2,
      open: t.syncOpen,
      "onUpdate:open": r[2] || (r[2] = (v) => t.syncOpen = v),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: y((v) => [
        g(e.$slots, "trigger", Bt(Ft(v)))
      ]),
      content: y(() => [
        o("div", Gr, [
          i.icon || i.title || i.description ? (a(), n("div", Ur, [
            i.icon ? (a(), n("span", Kr, [
              S(h, {
                name: i.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            o("div", jr, [
              i.title ? (a(), n("p", qr, m(i.title), 1)) : f("", !0),
              i.description ? (a(), n("p", Zr, m(i.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          t.hasFooterActions && !e.$slots.footer ? (a(), n("div", Qr, [
            i.showFooterClose ? (a(), b(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: t.onClose
            }, {
              default: y(() => [
                T(m(t.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            i.showGo ? (a(), b(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: t.onGo
            }, {
              default: y(() => [
                T(m(t.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (a(), b(J, {
      key: 3,
      to: "body"
    }, [
      S(ee, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: r[5] || (r[5] = (v) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          t.syncOpen ? (a(), n("div", {
            key: 0,
            class: _(["ui-guidance-tour", { "ui-guidance-tour--has-target": l.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: r[4] || (r[4] = ne((...v) => t.onEscape && t.onEscape(...v), ["esc"]))
          }, [
            i.closeOnBackdrop ? (a(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: r[3] || (r[3] = (...v) => t.onBackdrop && t.onBackdrop(...v))
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
              "aria-label": i.title || t.resolvedGoLabel
            }, [
              o("div", Jr, [
                o("div", ea, [
                  o("div", ta, [
                    i.icon ? (a(), n("span", ia, [
                      S(h, {
                        name: i.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    o("div", ra, [
                      i.title ? (a(), n("p", aa, m(i.title), 1)) : f("", !0),
                      i.description ? (a(), n("p", la, m(i.description), 1)) : f("", !0)
                    ])
                  ]),
                  i.showClose ? (a(), n("div", sa, [
                    S(u, {
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
                e.$slots.default ? (a(), n("div", na, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                t.hasFooterActions && !e.$slots.footer ? (a(), n("div", oa, [
                  i.showFooterClose ? (a(), b(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onClose
                  }, {
                    default: y(() => [
                      T(m(t.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  i.showGo ? (a(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: t.onGo
                  }, {
                    default: y(() => [
                      T(m(t.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Xr)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const ca = /* @__PURE__ */ w(Wr, [["render", ua]]), da = {
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
      const e = String(this.searchQuery || "").trim().toLowerCase(), r = Array.isArray(this.icons) ? this.icons : [];
      let i = r;
      e && (i = r.filter((l) => String(l).toLowerCase().includes(e)));
      const s = Number(this.maxResults);
      return Number.isFinite(s) && s > 0 ? i.slice(0, s) : i;
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
}, ha = ["disabled", "aria-expanded", "onClick"], fa = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, pa = { class: "ui-select-field-suffix" }, ma = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ga = { class: "ui-icon-picker-panel" }, ya = { class: "ui-icon-picker-panel__header" }, ba = { class: "ui-icon-picker-panel__title" }, va = { class: "ui-icon-picker-panel__search" }, _a = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, ka = {
  key: 1,
  class: "ui-icon-picker-grid"
}, wa = ["title", "onClick"];
function Sa(e, r, i, s, l, t) {
  const u = k("ui-icon"), d = k("ui-button"), c = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: _(t.rootClass)
  }, [
    S(h, {
      open: l.popoverOpen,
      "onUpdate:open": r[1] || (r[1] = (p) => l.popoverOpen = p),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: y(({ open: p, toggle: v, close: C }) => [
        g(e.$slots, "trigger", {
          open: p,
          toggle: v,
          close: C
        }, () => [
          o("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": p ? "true" : "false",
            "aria-haspopup": !0,
            onClick: v
          }, [
            o("span", fa, [
              S(u, {
                name: t.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            o("span", {
              class: _(["ui-select-value", { "ui-select-value--placeholder": !t.localIcon }])
            }, m(t.localIcon || t.triggerLabel), 3),
            o("span", pa, [
              o("span", ma, [
                S(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ha)
        ])
      ]),
      content: y(() => [
        o("div", ga, [
          o("div", ya, [
            o("span", ba, m(t.popoverTitleLabel), 1),
            t.localIcon ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: M(t.clearIcon, ["stop"])
            }, {
              default: y(() => [
                T(m(t.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          o("div", va, [
            S(c, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": r[0] || (r[0] = (p) => l.searchQuery = p),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: t.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          t.filteredIcons.length ? (a(), n("div", ka, [
            (a(!0), n(I, null, A(t.filteredIcons, (p) => (a(), n("button", {
              key: p,
              type: "button",
              class: _(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": t.localIcon === p }]),
              title: p,
              onClick: (v) => t.selectIcon(p)
            }, [
              S(u, {
                name: p,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, wa))), 128))
          ])) : (a(), n("div", _a, m(t.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const xa = /* @__PURE__ */ w(da, [["render", Sa]]), Ca = ["sm", "md", "lg", "xl", "2xl"], Ta = ["default", "foreground", "muted", "success", "destructive", "primary"], La = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ca.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ta.includes(e)
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
function Ia(e, r, i, s, l, t) {
  return a(), n("span", {
    class: _(["ui-price-text", t.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      T(m(i.value), 1)
    ])
  ], 2);
}
const ce = /* @__PURE__ */ w(La, [["render", Ia]]), Aa = ["sm", "md", "lg"], za = ["sm", "md", "lg", "xl", "2xl"], Ma = ["default", "foreground", "muted", "success", "destructive", "primary"], Pa = {
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
      validator: (e) => Aa.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => za.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ma.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Ea = { class: "ui-price-display__label" };
function Oa(e, r, i, s, l, t) {
  const u = k("ui-price-text");
  return a(), n("div", {
    class: _(["ui-price-display", t.rootClass])
  }, [
    o("span", Ea, m(i.label), 1),
    S(u, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          T(m(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Va = /* @__PURE__ */ w(Pa, [["render", Oa]]), Ra = ["sm", "md", "lg"], Ba = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Ra.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function Fa(e, r, i, s, l, t) {
  return a(), n("div", {
    class: _(["ui-price-display-group", t.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Da = /* @__PURE__ */ w(Ba, [["render", Fa]]), $a = ["sm", "md", "lg", "xl", "2xl"], Na = ["default", "foreground", "muted", "success", "destructive", "primary"], Ha = {
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
      validator: (e) => $a.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Na.includes(e)
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
}, Wa = { class: "ui-price-display-row__label" };
function Ya(e, r, i, s, l, t) {
  const u = k("ui-price-text");
  return a(), n("div", {
    class: _(["ui-price-display-row", t.rootClass])
  }, [
    o("span", Wa, m(i.label), 1),
    S(u, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          T(m(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const Ga = /* @__PURE__ */ w(Ha, [["render", Ya]]), Ua = ["tr-TR", "en-US"], Q = Ve({
  currency: "TRY",
  format: "tr-TR"
});
function Ka(e, r = Q.format) {
  return Ua.includes(e) ? e : r;
}
function ja(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (Q.currency = te(e.currency));
  const r = e.format ?? e.locale;
  r != null && (Q.format = Ka(r));
}
function qa() {
  return Dt(Q);
}
const Za = {
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
    return { priceInputConfig: qa() };
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
function Qa(e, r, i, s, l, t) {
  const u = k("CurrencyInput");
  return a(), b(u, L({
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
const Xa = /* @__PURE__ */ w(Za, [["render", Qa]]);
function Ja(e) {
  const r = String(e ?? "");
  if (!r)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  r.length >= 8 && (i += 1), r.length >= 12 && (i += 1), /[a-z]/.test(r) && /[A-Z]/.test(r) ? i += 1 : /[a-zA-Z]/.test(r) && (i += 0.5), /\d/.test(r) && (i += 1), /[^a-zA-Z0-9]/.test(r) && (i += 1);
  const s = Math.min(4, Math.round(i)), l = ["weak", "fair", "good", "strong"], t = s <= 0 ? "weak" : l[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: t
  };
}
let ae = 0;
const el = ["sm", "md", "lg"], tl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || el.includes(e)
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
      return Ja(this.modelValue);
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
      return r;
    }
  }
}, il = ["aria-label", "aria-pressed", "disabled"], rl = ["id", "aria-live"];
function al(e, r, i, s, l, t) {
  const u = k("ui-icon"), d = k("ui-input"), c = k("ui-progress");
  return a(), n("div", {
    class: _(["ui-password", [e.$attrs.class]])
  }, [
    S(d, L({
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
      append: y(() => [
        o("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": t.toggleAriaLabel,
          "aria-pressed": l.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: r[0] || (r[0] = (h) => l.visible = !l.visible)
        }, [
          S(u, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, il)
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
      S(c, {
        type: "bar",
        size: "md",
        value: t.strength.percent,
        variant: t.strengthVariant,
        "aria-valuetext": t.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      t.strength.label !== "empty" ? (a(), n("span", {
        key: 0,
        class: _(["ui-password-strength-label", `ui-password-strength-label--${t.strength.label}`])
      }, m(t.strengthText), 3)) : f("", !0)
    ], 8, rl)) : f("", !0)
  ], 2);
}
const ll = /* @__PURE__ */ w(tl, [["render", al]]), sl = ["bar", "circle"], xe = ["sm", "md", "lg"], Ce = ["thin", "md"], nl = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, ol = { sm: 1.5, md: 2, lg: 2 }, ul = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => sl.includes(e)
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
      validator: (e) => nl.includes(e)
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
      const e = G[this.circleSizeKey] ?? G.sm, r = ol[this.circleSizeKey] ?? 2, i = (e - r) / 2, s = e / 2, l = 2 * Math.PI * i, t = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: r, radius: i, center: s, circumference: l, offset: t };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, cl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], dl = ["width", "height", "viewBox"], hl = ["cx", "cy", "r", "stroke-width"], fl = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], pl = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ml(e, r, i, s, l, t) {
  return a(), n("div", {
    class: _(t.rootClass),
    style: O(t.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : t.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : t.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (a(), n("svg", {
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
      }, null, 8, hl),
      o("circle", {
        class: "ui-progress-circle-indicator",
        cx: t.circleMetrics.center,
        cy: t.circleMetrics.center,
        r: t.circleMetrics.radius,
        "stroke-width": t.circleMetrics.stroke,
        "stroke-dasharray": t.circleMetrics.circumference,
        "stroke-dashoffset": t.circleMetrics.offset
      }, null, 8, fl)
    ], 8, dl)) : (a(), n("div", pl, [
      o("div", {
        class: "ui-progress-bar-indicator",
        style: O({ width: `${t.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, cl);
}
const gl = /* @__PURE__ */ w(ul, [["render", ml]]), yl = Ee("ui-sheet"), bl = ["left", "right"], vl = ["sm", "md", "lg", "xl"], _l = ["solid", "regular", "brands", "light", "duotone", "thin"], Te = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, kl = {
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
      validator: (e) => bl.includes(e)
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
      validator: (e) => vl.includes(e)
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
      validator: (e) => e == null || _l.includes(e)
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
    const e = yl();
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : z(this, "ui.dialog.close", "Close");
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
        Pe(e) || (this.focusFallbackTimer = setTimeout(() => {
          var i;
          this.focusFallbackTimer = null, (i = e.focus) == null || i.call(e);
        }, 50));
      });
    }
  }
}, wl = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Sl = {
  key: 0,
  class: "ui-card-header shrink-0"
}, xl = {
  key: 0,
  class: "ui-sheet-header__icon"
}, Cl = ["id"], Tl = {
  key: 2,
  class: "ui-sheet-header__actions"
}, Ll = ["id"], Il = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Al(e, r, i, s, l, t) {
  const u = k("ui-icon"), d = k("ui-button"), c = k("Divider");
  return l.portalReady ? (a(), b(J, {
    key: 0,
    to: "body"
  }, [
    S(ee, {
      name: t.transitionName,
      appear: "",
      onAfterEnter: t.onOverlayAfterEnter,
      onAfterLeave: t.onOverlayAfterLeave
    }, {
      default: y(() => [
        i.open ? (a(), n("div", {
          key: 0,
          ref: "layerRef",
          class: _(t.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: r[2] || (r[2] = (...h) => t.onLayerKeydown && t.onLayerKeydown(...h))
        }, [
          i.overlay ? (a(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...h) => t.onBackdrop && t.onBackdrop(...h))
          })) : f("", !0),
          o("div", L({
            ref: "panelRef",
            class: t.panelClasses,
            role: "dialog",
            "aria-modal": i.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": t.ariaLabelledby,
            "aria-describedby": t.ariaDescribedby,
            "aria-label": t.ariaLabelAttr
          }, t.passthroughAttrs, {
            onClick: r[1] || (r[1] = M(() => {
            }, ["stop"]))
          }), [
            t.hasHeaderBlock ? (a(), n("div", Sl, [
              g(e.$slots, "header", {}, () => [
                t.hasDefaultHeader ? (a(), n("div", {
                  key: 0,
                  class: _(["ui-sheet-header", { "ui-sheet-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (a(), n("span", xl, [
                    S(u, {
                      name: i.icon,
                      type: t.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  i.title ? (a(), n("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, m(i.title), 9, Cl)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), n("div", Tl, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (a(), b(d, {
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
                  i.description ? (a(), n("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, m(i.description), 9, Ll)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), n("div", Il, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            t.showHeaderDivider ? (a(), b(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), n("div", {
              key: 3,
              class: _(["ui-card-body ui-text-default", {
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), n("div", {
              key: 4,
              class: _(["ui-card-footer", { "ui-sheet-footer--borderless": !i.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, wl)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const zl = /* @__PURE__ */ w(kl, [["render", Al]]), Ml = ["sm", "md", "lg", "full"], Le = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Pl = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Ml.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
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
}, El = {
  key: 0,
  class: "ui-menu-header"
}, Ol = { class: "ui-menu-body" }, Vl = {
  key: 1,
  class: "ui-menu-footer"
};
function Rl(e, r, i, s, l, t) {
  return a(), n("nav", L({ class: t.rootClass }, t.passthroughAttrs), [
    e.$slots.header ? (a(), n("div", El, [
      g(e.$slots, "header")
    ])) : f("", !0),
    o("div", Ol, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), n("div", Vl, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const Bl = /* @__PURE__ */ w(Pl, [["render", Rl]]), Fl = {
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
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Dl = {
  key: 0,
  class: "ui-menu-group-label"
}, $l = { class: "ui-menu-group-items" };
function Nl(e, r, i, s, l, t) {
  return a(), n("div", L({ class: t.groupClass }, t.passthroughAttrs), [
    i.label ? (a(), n("p", Dl, m(i.label), 1)) : f("", !0),
    o("div", $l, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const Hl = /* @__PURE__ */ w(Fl, [["render", Nl]]), Wl = {
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
function Yl(e, r, i, s, l, t) {
  const u = k("ui-button");
  return a(), b(u, L({
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
    default: y(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Gl = /* @__PURE__ */ w(Wl, [["render", Yl]]), Ul = {
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
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Kl = ["aria-label"];
function jl(e, r, i, s, l, t) {
  return a(), n("div", L({
    class: t.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, t.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Kl);
}
const ql = /* @__PURE__ */ w(Ul, [["render", jl]]), Zl = {
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
}, Ql = {
  ref: "root",
  class: "ui-step"
};
function Xl(e, r, i, s, l, t) {
  return Re((a(), n("div", Ql, [
    g(e.$slots, "default")
  ], 512)), [
    [Be, i.active]
  ]);
}
const Jl = /* @__PURE__ */ w(Zl, [["render", Xl]]), es = ["horizontal", "vertical"], ts = ["default", "pills"], is = {
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
      validator: (e) => ts.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => es.includes(e)
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
}, rs = ["aria-label"], as = { class: "ui-stepper-pills-track" }, ls = {
  key: 0,
  class: "ui-stepper-pills-label"
}, ss = { class: "flex w-full min-w-0 items-center justify-center" }, ns = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, os = {
  key: 1,
  class: "tabular-nums"
}, us = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, cs = { class: "ui-stepper-title ui-stepper-title--horizontal" }, ds = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, hs = { class: "flex flex-col items-center" }, fs = {
  key: 1,
  class: "tabular-nums"
}, ps = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, ms = { class: "ui-stepper-title" }, gs = {
  key: 0,
  class: "ui-stepper-description"
};
function ys(e, r, i, s, l, t) {
  const u = k("ui-icon");
  return a(), n("div", L({
    class: t.rootClass,
    role: "list",
    "aria-label": i.ariaLabel
  }, t.passthroughAttrs), [
    i.variant === "pills" ? (a(), n(I, { key: 0 }, [
      o("div", as, [
        (a(!0), n(I, null, A(t.normalizedSteps, (d, c) => (a(), b(K(i.interactive ? "button" : "span"), L({
          key: c,
          class: ["ui-stepper-pill", t.pillClass(c)],
          role: "listitem",
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      i.showLabel ? (a(), n("p", ls, m(t.pillsLabel), 1)) : f("", !0)
    ], 64)) : i.direction === "horizontal" ? (a(!0), n(I, { key: 1 }, A(t.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      o("div", ss, [
        c > 0 ? (a(), n("span", {
          key: 0,
          class: _(["ui-stepper-rail ui-stepper-rail--h", t.railBeforeClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", ns)),
        (a(), b(K(i.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", os, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 2,
          class: _(["ui-stepper-rail ui-stepper-rail--h", t.railAfterClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", us))
      ]),
      o("p", cs, m(d.title), 1),
      d.description ? (a(), n("p", ds, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), n(I, { key: 2 }, A(t.normalizedSteps, (d, c) => (a(), n("div", {
      key: c,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      o("div", hs, [
        (a(), b(K(i.interactive ? "button" : "div"), L({
          class: ["ui-stepper-indicator shrink-0", t.indicatorClass(c)],
          "aria-current": c === i.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (h) => i.interactive ? t.go(c) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", fs, m(c + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        c < t.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 0,
          class: _(["ui-stepper-vrail", t.verticalRailClass(c)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      o("div", ps, [
        o("p", ms, m(d.title), 1),
        d.description ? (a(), n("p", gs, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, rs);
}
const bs = /* @__PURE__ */ w(is, [["render", ys]]);
let Ie = 0;
const vs = {
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
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
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
}, _s = {
  key: 0,
  class: "ui-slider-header"
}, ks = {
  key: 0,
  class: "ui-form-label"
}, ws = {
  key: 1,
  class: "ui-slider-value"
}, Ss = { class: "ui-slider-rail" }, xs = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Cs = {
  key: 1,
  class: "ui-slider-scale"
}, Ts = { key: 0 }, Ls = { key: 1 };
function Is(e, r, i, s, l, t) {
  const u = k("ui-progress");
  return a(), n("div", {
    class: _(t.rootClass)
  }, [
    i.label || t.hasValue ? (a(), n("div", _s, [
      i.label ? (a(), n("span", ks, m(i.label), 1)) : f("", !0),
      t.hasValue ? (a(), n("span", ws, m(i.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    o("div", Ss, [
      S(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: t.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      o("input", L(t.passthroughAttrs, {
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
      }), null, 16, xs)
    ]),
    i.minLabel || i.maxLabel ? (a(), n("div", Cs, [
      i.minLabel ? (a(), n("span", Ts, m(i.minLabel), 1)) : f("", !0),
      i.maxLabel ? (a(), n("span", Ls, m(i.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const As = /* @__PURE__ */ w(vs, [["render", Is]]), zs = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return x("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  }
}, Ms = { class: "ui-table-scroll" };
function Ps(e, r, i, s, l, t) {
  return a(), n("div", Ms, [
    o("table", L({ class: t.rootClass }, t.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const Es = /* @__PURE__ */ w(zs, [["render", Ps]]), Os = {
  name: "TableBody"
}, Vs = { class: "ui-table-body" };
function Rs(e, r, i, s, l, t) {
  return a(), n("tbody", Vs, [
    g(e.$slots, "default")
  ]);
}
const Bs = /* @__PURE__ */ w(Os, [["render", Rs]]), Fs = ["left", "center", "right"], Ds = ["title", "secondary", "body"], $s = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Fs.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Ds.includes(e)
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
}, Ns = ["colspan"];
function Hs(e, r, i, s, l, t) {
  return a(), n("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, Ns);
}
const Ws = /* @__PURE__ */ w($s, [["render", Hs]]), Ys = ["left", "center", "right"], Gs = ["sm", "md", "lg"], Us = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Ys.includes(e)
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
      if (!(this.iconCol || Gs.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Ks(e, r, i, s, l, t) {
  return a(), n("th", {
    class: _(t.rootClass),
    style: O(t.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const js = /* @__PURE__ */ w(Us, [["render", Ks]]), qs = {
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
function Zs(e, r, i, s, l, t) {
  return a(), n("thead", {
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Qs = /* @__PURE__ */ w(qs, [["render", Zs]]), Xs = {
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
}, Js = { class: "ui-table-pagination" }, en = { class: "ui-table-pagination-meta" }, tn = { class: "ui-table-pagination-nav" }, rn = { class: "ui-table-pagination-page" };
function an(e, r, i, s, l, t) {
  const u = k("ui-button");
  return a(), n("div", Js, [
    o("div", en, [
      g(e.$slots, "meta", {}, () => [
        T(m(i.metaText), 1)
      ])
    ]),
    o("div", tn, [
      S(u, {
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
      o("div", rn, m(i.pageLabel), 1),
      S(u, {
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
const ln = /* @__PURE__ */ w(Xs, [["render", an]]), sn = ["none", "soft", "strong"], nn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || sn.includes(e)
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
function on(e, r, i, s, l, t) {
  return a(), n("tr", {
    class: _(t.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const un = /* @__PURE__ */ w(nn, [["render", on]]), cn = {
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
      const { class: e, ...r } = this.$attrs;
      return r;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, dn = ["id", "aria-labelledby"];
function hn(e, r, i, s, l, t) {
  return Re((a(), n("div", L({
    role: "tabpanel",
    id: t.panelDomId,
    "aria-labelledby": t.triggerDomId,
    class: t.panelClass
  }, t.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, dn)), [
    [Be, t.isActive]
  ]);
}
const fn = /* @__PURE__ */ w(cn, [["render", hn]]);
function $(e) {
  return String(e).padStart(2, "0");
}
function We(e, r = "HH:mm") {
  const i = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!i) return String(e || "");
  const s = Number(i[1]), l = Number(i[2]);
  if (!Number.isFinite(s) || !Number.isFinite(l))
    return String(e || "");
  if (r === "HH:mm")
    return `${$(s)}:${$(l)}`;
  if (r === "h:mm a" || r === "h:mm A") {
    const t = s >= 12 ? "PM" : "AM";
    return `${s % 12 || 12}:${$(l)} ${t}`;
  }
  return `${$(s)}:${$(l)}`;
}
function pn(e, r, i = "HH:mm") {
  return We(`${e}:${r}`, i);
}
const mn = Ee("ui-timepicker"), le = 40;
function se(e) {
  return String(e).padStart(2, "0");
}
const gn = {
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
      fallbackId: mn(),
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
    resolvedTimeFormat() {
      return Ze(void 0);
    },
    display() {
      return this.menuOpen ? pn(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? We(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
      let r = 0, i = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (r = Math.min(23, Math.max(0, parseInt(s[1], 10))), i = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const l = this.minuteValues;
      let t = l[0] ?? 0, u = 999;
      for (const d of l) {
        const c = Math.abs(d - i);
        c < u && (u = c, t = d);
      }
      this.draftHour = r, this.draftMinute = t;
    },
    wheelItemHeight(e) {
      if (!e) return le;
      const r = e.querySelector(".ui-timepicker-wheel-item");
      if (!r) return le;
      const i = r.getBoundingClientRect().height;
      return i > 0 ? i : le;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const r = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!r) return (e.clientHeight - i) / 2;
      const s = parseFloat(window.getComputedStyle(r).paddingTop);
      return Number.isFinite(s) ? s : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, r) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, t = Math.round((l - s - i / 2) / i);
      return Math.min(r, Math.max(0, t));
    },
    scrollTopForIndex(e, r) {
      const i = this.wheelItemHeight(e), s = this.wheelSpacerTop(e);
      return Math.max(0, s + r * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, r, { smooth: i = !1 } = {}) {
      if (!e) return;
      const s = this.scrollTopForIndex(e, r);
      i && typeof e.scrollTo == "function" ? e.scrollTo({ top: s, behavior: "smooth" }) : e.scrollTop = s;
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
      const e = `${se(this.draftHour)}:${se(this.draftMinute)}`;
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
      const s = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, yn = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, bn = { class: "ui-timepicker-wheels" }, vn = { class: "ui-timepicker-wheels-row" }, _n = ["aria-valuenow", "aria-label"], kn = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, wn = { class: "ui-timepicker-wheel-spacer" }, Sn = ["onClick"], xn = ["aria-valuenow", "aria-label"], Cn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Tn = { class: "ui-timepicker-wheel-spacer" }, Ln = ["onClick"], In = { class: "min-w-0 flex-1 truncate text-foreground" }, An = { class: "ui-timepicker-panel w-full p-2" }, zn = { class: "ui-timepicker-wheels" }, Mn = { class: "ui-timepicker-wheels-row" }, Pn = ["aria-valuenow", "aria-label"], En = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, On = { class: "ui-timepicker-wheel-spacer" }, Vn = ["onClick"], Rn = ["aria-valuenow", "aria-label"], Bn = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Fn = { class: "ui-timepicker-wheel-spacer" }, Dn = ["onClick"];
function $n(e, r, i, s, l, t) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: _([
      "ui-timepicker",
      i.embedded ? "ui-timepicker--embedded" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (a(), n("div", yn, [
      o("div", bn, [
        r[2] || (r[2] = o("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", vn, [
          o("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": l.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": t.hourAriaLabel
          }, [
            o("div", kn, [
              o("div", wn, [
                (a(!0), n(I, null, A(t.hourOptions, (c) => (a(), n("button", {
                  key: "h-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => t.selectHour(c)
                }, m(t.pad2(c)), 11, Sn))), 128))
              ])
            ], 512)
          ], 8, _n),
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
            o("div", Cn, [
              o("div", Tn, [
                (a(!0), n(I, null, A(t.minuteValues, (c, h) => (a(), n("button", {
                  key: "m-" + c,
                  type: "button",
                  tabindex: "-1",
                  class: _([
                    "ui-timepicker-wheel-item",
                    c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (p) => t.selectMinute(h)
                }, m(t.pad2(c)), 11, Ln))), 128))
              ])
            ], 512)
          ], 8, xn)
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
    ])) : (a(), b(d, {
      key: 1,
      open: l.menuOpen,
      "onUpdate:open": r[0] || (r[0] = (c) => l.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: y(({ open: c, toggle: h, close: p }) => [
        g(e.$slots, "trigger", {
          open: c,
          toggle: h,
          close: p
        }, () => [
          S(u, {
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
            default: y(() => [
              o("span", In, m(t.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        o("div", An, [
          o("div", zn, [
            r[6] || (r[6] = o("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            o("div", Mn, [
              o("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": t.hourAriaLabel
              }, [
                o("div", En, [
                  o("div", On, [
                    (a(!0), n(I, null, A(t.hourOptions, (c) => (a(), n("button", {
                      key: "h-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        c === l.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => t.selectHour(c)
                    }, m(t.pad2(c)), 11, Vn))), 128))
                  ])
                ], 512)
              ], 8, Pn),
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
                o("div", Bn, [
                  o("div", Fn, [
                    (a(!0), n(I, null, A(t.minuteValues, (c, h) => (a(), n("button", {
                      key: "m-" + c,
                      type: "button",
                      tabindex: "-1",
                      class: _([
                        "ui-timepicker-wheel-item",
                        c === l.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (p) => t.selectMinute(h)
                    }, m(t.pad2(c)), 11, Dn))), 128))
                  ])
                ], 512)
              ], 8, Rn)
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
const Ae = /* @__PURE__ */ w(gn, [["render", $n]]), Nn = ["square", "video", "auto"], Hn = ["fill", "sm", "md", "lg"], ze = {
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
      validator: (e) => Nn.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Hn.includes(e)
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
        ze[this.size] || ze.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), r = {};
      for (const [i, s] of Object.entries(this.$attrs))
        e.has(i) || (r[i] = s);
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
}, Yn = ["src", "alt"], Gn = ["aria-hidden"], Un = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Kn = {
  key: 3,
  class: "ui-photo__overflow"
}, jn = ["aria-label"], qn = ["aria-label"], Zn = { class: "ui-photo-preview__panel" }, Qn = ["src", "alt"], Xn = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Jn(e, r, i, s, l, t) {
  const u = k("ui-icon"), d = k("ui-button");
  return a(), n(I, null, [
    (a(), b(K(t.rootTag), L({
      type: i.interactive ? "button" : void 0,
      class: t.rootClass
    }, t.rootBind, { onClick: t.onClick }), {
      default: y(() => [
        i.src && !l.imageFailed ? (a(), n("img", {
          key: 0,
          src: i.src,
          alt: t.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: r[0] || (r[0] = (c) => l.imageFailed = !0)
        }, null, 40, Yn)) : (a(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          S(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Gn)),
        i.favorite ? (a(), n("span", Un, [
          S(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        i.overflowLabel ? (a(), n("span", Kn, m(i.overflowLabel), 1)) : f("", !0)
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
            "aria-label": t.previewAriaLabel,
            onKeydown: r[2] || (r[2] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[1] || (r[1] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, qn),
            o("div", Zn, [
              S(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: M(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), n("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Qn)) : f("", !0),
              t.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: M(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), n("p", Xn, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, jn)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const eo = /* @__PURE__ */ w(Wn, [["render", Jn]]), to = ["square", "video", "auto"], io = {
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
      validator: (e) => to.includes(e)
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
}, ro = ["data-count"], ao = ["aria-label"], lo = ["aria-label"], so = { class: "ui-photo-preview__panel" }, no = ["src", "alt"], oo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function uo(e, r, i, s, l, t) {
  const u = k("ui-photo"), d = k("ui-button");
  return a(), n(I, null, [
    o("div", {
      class: _(["ui-photos", t.layoutClass]),
      "data-count": t.displayCount
    }, [
      (a(!0), n(I, null, A(t.visibleItems, (c, h) => (a(), b(u, {
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
    ], 10, ro),
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
            "aria-label": t.previewAriaLabel,
            onKeydown: r[1] || (r[1] = (...c) => t.onPreviewKeydown && t.onPreviewKeydown(...c))
          }, [
            o("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": t.closeLabel,
              onClick: r[0] || (r[0] = (...c) => t.closePreview && t.closePreview(...c))
            }, null, 8, lo),
            o("div", so, [
              S(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": t.closeLabel,
                onClick: t.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              t.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": t.prevLabel,
                onClick: M(t.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.activeSrc ? (a(), n("img", {
                key: 1,
                src: t.activeSrc,
                alt: t.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, no)) : f("", !0),
              t.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": t.nextLabel,
                onClick: M(t.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              t.counterLabel ? (a(), n("p", oo, m(t.counterLabel), 1)) : f("", !0)
            ])
          ], 40, ao)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const co = /* @__PURE__ */ w(io, [["render", uo]]);
function U(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function yo() {
  return {
    push: D,
    dismiss: Xe,
    clear: Qe,
    info: (e) => D({ ...U(e), variant: "info" }),
    success: (e) => D({ ...U(e), variant: "success" }),
    warning: (e) => D({ ...U(e), variant: "warning" }),
    error: (e) => D({ ...U(e), variant: "error" })
  };
}
function bo(e = !1) {
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
function vo() {
  return {
    confirm: Je
  };
}
const ue = {
  en: at,
  tr: Oe
};
function _o(e = "tr") {
  return ue[e] ?? ue.tr;
}
const ko = Oe, ho = [
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
  ["ui-date-range-picker", rr],
  ["ui-dialog", ft],
  ["ui-divider", Me],
  ["ui-dropdown", pt],
  ["ui-empty", mt],
  ["ui-field", dr],
  ["ui-field-action", xr],
  ["ui-file", Rr],
  ["ui-form-row", gt],
  ["ui-guidance", ca],
  ["ui-icon", yt],
  ["ui-icon-picker", xa],
  ["ui-input", bt],
  ["ui-price-display", Va],
  ["ui-price-display-group", Da],
  ["ui-price-display-row", Ga],
  ["ui-price-input", Xa],
  ["ui-price-text", ce],
  ["ui-password", ll],
  ["ui-phone", vt],
  ["ui-pin", _t],
  ["ui-list", kt],
  ["ui-list-item", wt],
  ["ui-popover", St],
  ["ui-progress", gl],
  ["ui-radio", xt],
  ["ui-radio-group", Ct],
  ["ui-select", Tt],
  ["ui-sheet", zl],
  ["ui-menu", Bl],
  ["ui-menu-group", Hl],
  ["ui-menu-item", Gl],
  ["ui-menu-nav", ql],
  ["ui-segment", Lt],
  ["ui-segment-group", It],
  ["ui-skeleton", At],
  ["ui-slider", As],
  ["ui-step", Jl],
  ["ui-stepper", bs],
  ["ui-switch", zt],
  ["ui-table", Es],
  ["ui-table-body", Bs],
  ["ui-table-cell", Ws],
  ["ui-table-head", js],
  ["ui-table-header", Qs],
  ["ui-table-pagination", ln],
  ["ui-table-row", un],
  ["ui-tag", Mt],
  ["ui-tab-list", Pt],
  ["ui-tab-panel", fn],
  ["ui-tabs", Et],
  ["ui-tab-trigger", Ot],
  ["ui-time-picker", Ae],
  ["ui-timepicker", Ae],
  ["ui-tooltip", Vt],
  ["ui-toast", Rt],
  ["ui-photo", eo],
  ["ui-photos", co]
];
function fo(e, r = {}) {
  var c, h;
  const { i18n: i, locale: s, locales: l, theme: t, themeOverrides: u, priceInput: d } = r;
  if (typeof t == "string") {
    const p = et(t, u || {});
    tt(e, p.defaults), e.config.globalProperties.$uiDefaults = p.defaults, me({
      ...p.config,
      ...it(p.defaults)
    });
  } else if (t && typeof t == "object") {
    const p = u ? rt(t, u) : t;
    me(p);
  }
  if (d && ja(d), (c = i == null ? void 0 : i.global) != null && c.mergeLocaleMessage) {
    const p = l ?? (s != null ? [s] : [
      typeof i.global.locale == "string" ? i.global.locale : ((h = i.global.locale) == null ? void 0 : h.value) ?? "tr"
    ]);
    for (const v of p) {
      const C = ue[v];
      C && i.global.mergeLocaleMessage(v, C);
    }
  }
  for (const [p, v] of ho)
    e.component(p, v);
}
const wo = {
  install: fo
};
export {
  Ut as ActionCard,
  Zt as ActionCardList,
  lt as ActionGroup,
  ti as AiButton,
  st as Alert,
  nt as Avatar,
  si as AvatarGroup,
  Co as BASE_UI_DEFAULTS,
  ot as Badge,
  ut as Button,
  ct as Card,
  Ri as Checkbox,
  Hi as CheckboxGroup,
  wi as ColorPicker,
  dt as ConfirmDialog,
  Ne as CurrencyInput,
  ht as DatePicker,
  rr as DateRangePicker,
  ft as Dialog,
  Me as Divider,
  pt as Dropdown,
  mt as Empty,
  To as FEW_COLOR_SCALE,
  Lo as FEW_PALETTE_ID,
  Io as FEW_PRIMARY,
  Ao as FEW_PRIMARY_FOREGROUND,
  dr as Field,
  xr as FieldAction,
  Rr as File,
  gt as FormRow,
  zo as GOOGLE_FONTS_CATALOG,
  ca as Guidance,
  yt as Icon,
  xa as IconPicker,
  bt as Input,
  Mo as LEGACY_PRESET_TO_THEME,
  kt as List,
  wt as ListItem,
  Bl as Menu,
  Hl as MenuGroup,
  Gl as MenuItem,
  ql as MenuNav,
  Ua as PRICE_FORMATS,
  ll as Password,
  vt as Phone,
  eo as Photo,
  co as Photos,
  _t as Pin,
  St as Popover,
  Xa as PriceInput,
  gl as Progress,
  xt as Radio,
  Ct as RadioGroup,
  Lt as Segment,
  It as SegmentGroup,
  Tt as Select,
  zl as Sheet,
  At as Skeleton,
  As as Slider,
  Jl as Step,
  bs as Stepper,
  zt as Switch,
  Po as THEME_CUSTOM_CSS_ID,
  Eo as THEME_IDS,
  Oo as THEME_PACKAGES,
  Vo as THEME_PRESETS,
  Ro as THEME_PRESET_IDS,
  Pt as TabList,
  fn as TabPanel,
  Ot as TabTrigger,
  Es as Table,
  Bs as TableBody,
  Ws as TableCell,
  js as TableHead,
  Qs as TableHeader,
  ln as TablePagination,
  un as TableRow,
  Et as Tabs,
  Mt as Tag,
  Ae as TimePicker,
  Rt as Toast,
  Vt as Tooltip,
  Bo as UI_DEFAULTS_KEY,
  Fo as UI_ICON_TYPES,
  Do as applyGoogleFontsCatalogPreview,
  $o as applyGoogleFontsForTheme,
  No as applyThemeCustomCss,
  me as applyUiTheme,
  Ho as buildGoogleFontsLinkTag,
  Wo as buildGoogleFontsStylesheetUrl,
  Yo as buildThemeEnforcementCss,
  Go as buildThemeStyleAttr,
  Uo as clearThemeCustomCss,
  Qe as clearToasts,
  Ko as createUiId,
  Ee as createUiIdFactory,
  wo as default,
  jo as deriveBrandColorsFromPrimary,
  Xe as dismissToast,
  go as formatCurrencyAmount,
  qo as formatGoogleFontFamilyName,
  xi as formatMoneyInput,
  Fe as getCurrencySymbol,
  Zo as getFewPrimaryColors,
  $e as getMoneySeparators,
  qa as getPriceInputConfig,
  Qo as getThemeCssPath,
  Xo as getThemePackage,
  Jo as getThemePreset,
  _o as getUiMessages,
  eu as googleFontSelectOptions,
  W as iconTypeProp,
  tu as mergeUiDefaults,
  rt as mergeUiTheme,
  Si as parseLocalizedMoneyInput,
  je as pickPassthroughAttrs,
  tt as provideUiDefaults,
  D as pushToast,
  Je as requestConfirm,
  iu as resetUiIds,
  ru as resolveControlSize,
  te as resolveCurrencyCode,
  au as resolvePrimaryColor,
  Ye as resolveThemeControlSize,
  Ge as resolveThemeDateFormat,
  lu as resolveThemeDefault,
  su as resolveThemeDialogMaxWidth,
  nu as resolveThemeFontFamilies,
  j as resolveThemeIconType,
  ou as resolveThemeId,
  et as resolveThemePackage,
  uu as resolveThemePreset,
  Ze as resolveThemeTimeFormat,
  cu as resolveThemeVars,
  z as resolveUiText,
  De as sanitizeMoneyInput,
  ja as setPriceInputConfig,
  X as themeIconTypeComputed,
  ko as uiMessagesTr,
  vo as useConfirm,
  bo as useDialog,
  yo as useToast,
  du as useUiDefaults,
  hu as useUiDefaultsOptions,
  fu as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
