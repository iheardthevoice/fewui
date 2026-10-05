import { _ as x, ai as G, aG as te, au as ze, a4 as S, aF as A, a6 as F, av as We, as as Ye, ac as Ge, az as Y, am as Ae, h as Pe, aa as Me, aj as Ue, aD as je, a3 as Ke, a8 as qe, ao as N, ap as Ze, aH as Ee, aB as Xe, an as Qe, Y as pe, aI as Je, al as et, a9 as tt, A as it, a as rt, b as at, c as st, d as lt, C as nt, e as ot, f as ut, g as ct, i as dt, E as ht, m as ft, I as mt, n as pt, P as gt, q as yt, o as bt, p as vt, r as _t, R as kt, s as wt, u as xt, S as St, t as Ct, v as Tt, w as Lt, M as It, H as zt, K as At, J as Pt, O as Mt, N as Et } from "./index-CYJ2od2k.js";
import { B as lu, F as nu, j as ou, k as uu, l as cu, G as du, L as hu, D as fu, T as mu, x as pu, y as gu, z as yu, U as bu, Q as vu, V as _u, W as ku, X as wu, Z as xu, $ as Su, a0 as Cu, a1 as Tu, a2 as Lu, a5 as Iu, a7 as zu, ab as Au, ad as Pu, ae as Mu, af as Eu, ag as Ru, ah as Ou, ak as Vu, aq as Bu, ar as Du, at as Fu, aw as Nu, ax as Hu, ay as $u, aA as Wu, aC as Yu, aE as Gu, aJ as Uu, aK as ju, aL as Ku } from "./index-CYJ2od2k.js";
import { resolveComponent as k, openBlock as a, createElementBlock as n, normalizeClass as v, renderSlot as g, createVNode as w, createCommentVNode as f, createElementVNode as c, toDisplayString as p, createBlock as b, normalizeStyle as E, mergeProps as z, withCtx as y, withModifiers as R, createTextVNode as I, Fragment as L, renderList as P, withKeys as ne, createSlots as Q, normalizeProps as Rt, guardReactiveProps as Ot, Teleport as U, Transition as j, readonly as Vt, reactive as Re, Comment as Bt, Text as Dt, withDirectives as Oe, vShow as Ve, resolveDynamicComponent as X } from "vue";
import { RouterLink as Ft } from "vue-router";
const Nt = {
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
    iconType: G,
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
    ...te(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, Ht = ["disabled"], $t = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, Wt = { class: "ui-action-card__content" }, Yt = { class: "ui-action-card__title" }, Gt = {
  key: 0,
  class: "ui-action-card__description"
};
function Ut(e, t, r, l, s, i) {
  const u = k("ui-icon");
  return a(), n("button", {
    type: "button",
    class: v(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (a(), n("span", $t, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("", !0)
    ]),
    c("span", Wt, [
      c("span", Yt, p(r.title), 1),
      r.description ? (a(), n("span", Gt, p(r.description), 1)) : f("", !0)
    ]),
    g(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (a(), b(u, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : f("", !0)
    ])
  ], 10, Ht);
}
const jt = /* @__PURE__ */ x(Nt, [["render", Ut]]), Kt = {
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
}, qt = ["aria-label"];
function Zt(e, t, r, l, s, i) {
  return a(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: E(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, qt);
}
const Xt = /* @__PURE__ */ x(Kt, [["render", Zt]]), Qt = {
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
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null
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
      const e = ze(this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, Jt = ["data-size"], ei = { class: "ui-ai-button__surface" };
function ti(e, t, r, l, s, i) {
  const u = k("ui-button");
  return a(), n("span", {
    class: v(["ui-ai-button", {
      "ui-ai-button--block": i.isBlock,
      "ui-ai-button--disabled": r.disabled || r.loading
    }]),
    "data-size": i.resolvedSize,
    style: E(i.rootStyle)
  }, [
    t[1] || (t[1] = c("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", ei, [
      w(u, z({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: i.resolvedSize,
        "prefix-icon": r.prefixIcon,
        disabled: r.disabled,
        loading: r.loading,
        "loading-text": r.loadingText,
        fulled: i.isBlock
      }, e.$attrs, {
        onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
      }), {
        default: y(() => [
          g(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "fulled"])
    ])
  ], 14, Jt);
}
const ii = /* @__PURE__ */ x(Qt, [["render", ti]]), ri = ["xs", "sm", "md", "lg", "xl"], re = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, ai = {
  name: "AvatarGroup",
  SIZE_CLASS: re,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ri.includes(e)
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
        re[this.size] || re.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, si = ["aria-label"];
function li(e, t, r, l, s, i) {
  return a(), n("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    r.overflowCount > 0 ? (a(), n("span", {
      key: 0,
      class: v(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
    }, p(i.overflowText), 3)) : f("", !0)
  ], 10, si);
}
const ni = /* @__PURE__ */ x(ai, [["render", li]]), oi = [
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
], ui = {
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
    },
    /**
     * Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`.
     */
    fulled: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      presetColors: oi
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-color-picker min-w-0",
        this.fulled ? "ui-color-picker--fulled w-full" : "ui-color-picker--inline w-auto",
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
      return this.triggerPlaceholder ? this.triggerPlaceholder : A(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : A(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : A(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : A(this, "ui.colorPicker.customHex", "Custom color (hex)");
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
}, ci = ["disabled", "aria-expanded", "onClick"], di = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, hi = { class: "ui-select-field-suffix" }, fi = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, mi = { class: "ui-color-picker-panel" }, pi = { class: "ui-color-picker-panel__header" }, gi = { class: "ui-color-picker-panel__title" }, yi = { class: "ui-color-picker-swatches" }, bi = ["title", "onClick"], vi = { class: "ui-color-picker-custom" }, _i = { class: "ui-color-picker-panel__title" }, ki = { class: "ui-color-picker-custom__row" };
function wi(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: v(i.rootClass)
  }, [
    w(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => s.popoverOpen = m),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: r.disabled
    }, {
      trigger: y(({ open: m, toggle: _, close: C }) => [
        g(e.$slots, "trigger", {
          open: m,
          toggle: _,
          close: C
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            c("span", di, [
              i.localColor ? (a(), n("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: E({ backgroundColor: i.localColor })
              }, null, 4)) : (a(), b(u, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            c("span", {
              class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
            }, p(i.displayValue), 3),
            c("span", hi, [
              c("span", fi, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ci)
        ])
      ]),
      content: y(() => [
        c("div", mi, [
          c("div", pi, [
            c("span", gi, p(i.popoverTitleLabel), 1),
            i.localColor ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: R(i.clearColor, ["stop"])
            }, {
              default: y(() => [
                I(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", yi, [
            (a(!0), n(L, null, P(s.presetColors, (m) => (a(), n("button", {
              key: m,
              type: "button",
              class: v(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === m }]),
              style: E({ backgroundColor: m }),
              title: m,
              onClick: (_) => i.selectColor(m)
            }, [
              i.localColor === m ? (a(), b(u, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, bi))), 128))
          ]),
          c("div", vi, [
            c("span", _i, p(i.customColorLabelText), 1),
            c("div", ki, [
              w(o, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => i.localColor = m),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
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
const xi = /* @__PURE__ */ x(ui, [["render", wi]]), ge = {
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
function ie(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in $ ? t : "TRY";
  const r = String(e).trim();
  if (ge[r])
    return ge[r];
  const l = r.toUpperCase();
  return $[l] ? l : t in $ ? t : "TRY";
}
function Be(e) {
  var r;
  const t = ie(e);
  if ($[t])
    return $[t];
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
function Xo(e, t, r = "tr-TR") {
  const l = Number(e) || 0, s = ie(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: s }).format(l);
  } catch {
    return `${Be(s)}${l.toFixed(2)}`;
  }
}
function De(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const l = t.slice(0, r), s = t.slice(r + 1).replace(/\./g, "");
    t = `${l}.${s}`;
  }
  return t;
}
function Fe(e = "tr-TR") {
  var t, r;
  try {
    const l = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = l.find((s) => s.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = l.find((s) => s.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Si(e, t = "tr-TR") {
  const { group: r, decimal: l } = Fe(t);
  let s = String(e ?? "").trim();
  return s ? (s = s.split(r).join(""), s = s.split(l).join("."), De(s)) : "";
}
function Ci(e, t = "tr-TR") {
  const r = De(e);
  if (!r) return "";
  const { group: l, decimal: s } = Fe(t), [i = "", u] = r.split("."), o = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, l);
  return u === void 0 ? o : `${o}${s}${u}`;
}
const Ti = F("ui-currency-input"), Li = ["sm", "md", "lg"], Ii = {
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
      validator: (e) => e == null || Li.includes(e)
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
    return { fallbackId: Ti() };
  },
  computed: {
    displaySymbol() {
      return Be(this.currency);
    },
    resolvedCurrencyCode() {
      return ie(this.currency);
    },
    innerValue: {
      get() {
        return Ci(this.modelValue, this.locale);
      },
      set(e) {
        const t = Si(e, this.locale);
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
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, zi = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Ai(e, t, r, l, s, i) {
  const u = k("ui-input");
  return a(), b(u, z({
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
    prepend: y(() => [
      c("span", zi, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Ne = /* @__PURE__ */ x(Ii, [["render", Ai]]), Pi = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, l = Array.isArray(r) ? [...r] : [], s = l.findIndex((i) => Object.is(i, this.value));
        t && s === -1 ? l.push(this.value) : !t && s !== -1 && l.splice(s, 1), this.uiCheckboxGroup.$emit("update:modelValue", l);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((l) => Object.is(l, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Mi = ["type", "name", "value", "checked"], Ei = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Ri = { class: "ui-checkbox-body" }, Oi = {
  key: 0,
  class: "ui-checkbox-label"
}, Vi = {
  key: 1,
  class: "ui-checkbox-description"
};
function Bi(e, t, r, l, s, i) {
  const u = k("ui-icon");
  return a(), n("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = ne(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = ne(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, Mi),
    c("span", Ei, [
      i.isChecked ? (a(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    c("span", Ri, [
      e.$slots.label || r.label ? (a(), n("span", Oi, [
        g(e.$slots, "label", {}, () => [
          I(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (a(), n("span", Vi, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Di = /* @__PURE__ */ x(Pi, [["render", Bi]]), Fi = ["list", "button", "List", "Button"], Ni = ["vertical", "horizontal"], Hi = F("ui-checkbox-group"), $i = {
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
      validator: (e) => Fi.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Ni.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: Hi() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : "vertical";
    },
    rootClass() {
      return S(
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
}, Wi = ["aria-label"];
function Yi(e, t, r, l, s, i) {
  return a(), n("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, Wi);
}
const Gi = /* @__PURE__ */ x($i, [["render", Yi]]), Ui = F("ui-daterangepicker");
function W(e) {
  return String(e).padStart(2, "0");
}
function V(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function K(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), l = Number(t[2]) - 1, s = Number(t[3]), i = new Date(r, l, s);
  return i.getFullYear() !== r || i.getMonth() !== l || i.getDate() !== s ? null : i;
}
function B(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function ae(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function ji(e, t, r) {
  const { year: l, month: s, day: i } = parseIsoParts(e), d = new Date(l, s - 1, i).getDay(), o = d === 0 ? -6 : 1 - d, h = new Date(l, s - 1, i + o), m = V(h), _ = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let C = V(_);
  if (t && C > t && (C = t), r && m < r && C < r) return null;
  let T = m;
  return r && T < r && (T = r), B(T, C) > 0 ? null : [T, C];
}
function Ki(e, t, r) {
  const { year: l } = parseIsoParts(e), s = `${l}-01-01`;
  let i = `${l}-12-31`;
  if (t && i > t && (i = t), r && s < r && i < r) return null;
  let u = s;
  return r && u < r && (u = r), B(u, i) > 0 ? null : [u, i];
}
function ye(e, t, r, l) {
  const s = `${e}-${W(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let u = `${e}-${W(t + 1)}-${W(i)}`;
  if (r && u > r && (u = r), l && s < l && u < l) return null;
  let d = s;
  return l && d < l && (d = l), B(d, u) > 0 ? null : [d, u];
}
const qi = {
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
    },
    /** Kontrollü aç/kapa (`undefined` = dahili state). */
    open: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change", "update:open"],
  data() {
    var r, l;
    const e = ((r = this.modelValue) == null ? void 0 : r[0]) || "", t = K(e) || K((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: Ui(),
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
    resolvedOpen: {
      get() {
        return this.open !== void 0 ? this.open : this.menuOpen;
      },
      set(e) {
        const t = !!e;
        this.open !== void 0 ? this.$emit("update:open", t) : this.menuOpen = t;
      }
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return Ye((e = this.$i18n) == null ? void 0 : e.locale);
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
        return B(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      if (Array.isArray(this.presets))
        return this.presets.map((T) => ({
          ...T,
          disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), t = V(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const l = V(r), s = new Date(e);
      s.setDate(s.getDate() + 1);
      const i = V(s), u = e.getMonth(), d = e.getFullYear(), o = new Date(d, u - 1, 1), h = o.getFullYear(), m = o.getMonth(), _ = (T, M) => typeof this.$t == "function" ? this.$t(T, M) : T;
      return [
        {
          key: "today",
          label: _("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: _("ui.dateRangePicker.yesterday"),
          range: [l, l]
        },
        {
          key: "tomorrow",
          label: _("ui.datePicker.tomorrow"),
          range: [i, i]
        },
        {
          key: "thisWeek",
          label: _("ui.dateRangePicker.thisWeek"),
          range: ji(t, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: _("ui.dateRangePicker.thisMonth", {
            month: ae(d, u, this.locale)
          }),
          range: ye(d, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: _("ui.dateRangePicker.lastMonth", {
            month: ae(h, m, this.locale)
          }),
          range: ye(h, m, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: _("ui.dateRangePicker.thisYear", { year: d }),
          range: Ki(t, this.maxYmd, this.minYmd)
        }
      ].map((T) => ({
        ...T,
        disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
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
        title: ae(r.year, r.month, this.locale),
        cells: this.buildCellsForMonth(r.year, r.month)
      }));
    }
  },
  watch: {
    modelValue: {
      deep: !0,
      handler() {
        this.syncViewFromValue(), this.resolvedOpen || (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
      }
    },
    resolvedOpen(e) {
      e ? (this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.syncViewFromValue()) : (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
    }
  },
  methods: {
    syncViewFromValue() {
      const e = K(this.startYmd) || K(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = We(void 0, "dateRangeFormat"), l = (s) => s ? Ge(s, this.locale, r) || s : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? l(e || t) : `${l(e)} – ${l(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), l = new Date(e, t, 1 - r.getDay()), s = this.previewStart, i = this.previewEnd, u = s && i, d = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(l.getFullYear(), l.getMonth(), l.getDate() + o), m = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), C = V(h), T = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, M = V(/* @__PURE__ */ new Date()) === C, D = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let de = !1, he = !1;
        if (u) {
          const fe = B(s, i) <= 0 ? s : i, me = B(s, i) <= 0 ? i : s;
          de = B(C, fe) >= 0 && B(C, me) <= 0, he = C === fe || C === me;
        }
        d.push({
          key: T,
          d: _,
          date: h,
          today: M,
          inMonth: m,
          disabled: D,
          inRange: de,
          endpoint: he
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = V(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, l] = e.range;
      this.pickingStart = r, this.pickingEnd = l, this.$emit("update:modelValue", [r, l]), this.$emit("change", [r, l]), t();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [t, r] = e.range;
      return this.startYmd === t && this.endYmd === r;
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = V(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let l = this.pickingStart, s = r;
      if (B(s, l) < 0) {
        const i = l;
        l = s, s = i;
      }
      this.pickingStart = l, this.pickingEnd = s, this.$emit("update:modelValue", [l, s]), this.$emit("change", [l, s]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Zi = { class: "min-w-0 flex-1 truncate text-foreground" }, Xi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Qi = { class: "ui-daterangepicker-layout" }, Ji = ["aria-label"], er = { class: "ui-daterangepicker-calendars" }, tr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, ir = { class: "ui-daterangepicker-month-row" }, rr = { class: "mb-2 flex items-center justify-between gap-2" }, ar = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, sr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, lr = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, nr = { class: "ui-datepicker-grid" };
function or(e, t, r, l, s, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: v(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(d, {
      open: i.resolvedOpen,
      "onUpdate:open": t[2] || (t[2] = (o) => i.resolvedOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: o, toggle: h, close: m }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: h,
          close: m
        }, () => [
          w(u, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: r.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              c("span", Zi, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(({ close: o }) => [
        c("div", Xi, [
          c("div", Qi, [
            i.quickPresets.length ? (a(), n("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (a(!0), n(L, null, P(i.quickPresets, (h) => (a(), b(u, {
                key: h.key,
                type: "button",
                variant: i.isPresetActive(h) ? "solid" : "outline",
                color: i.isPresetActive(h) ? "primary" : "secondary",
                size: "sm",
                rounded: "",
                disabled: h.disabled,
                "aria-pressed": i.isPresetActive(h) ? "true" : "false",
                "data-active": i.isPresetActive(h) ? "true" : void 0,
                onClick: (m) => i.applyQuick(h, o)
              }, {
                default: y(() => [
                  I(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))), 128))
            ], 8, Ji)) : f("", !0),
            c("div", er, [
              i.rangeHint ? (a(), n("p", tr, p(i.rangeHint), 1)) : f("", !0),
              c("div", ir, [
                (a(!0), n(L, null, P(i.calendarPanes, (h) => (a(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", rr, [
                    h.showPrev ? (a(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = R((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", ar)),
                    c("span", sr, p(h.title), 1),
                    h.showNext ? (a(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = R((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), n("span", lr))
                  ]),
                  t[3] || (t[3] = c("div", { class: "ui-datepicker-weekdays mb-1" }, [
                    c("span", null, "Su"),
                    c("span", null, "Mo"),
                    c("span", null, "Tu"),
                    c("span", null, "We"),
                    c("span", null, "Th"),
                    c("span", null, "Fr"),
                    c("span", null, "Sa")
                  ], -1)),
                  c("div", nr, [
                    (a(!0), n(L, null, P(h.cells, (m) => (a(), b(u, {
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
                      onClick: (_) => i.pick(m, o)
                    }, {
                      default: y(() => [
                        I(p(m.d), 1)
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
const ur = /* @__PURE__ */ x(qi, [["render", or]]), cr = {
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
    /** Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. */
    fill: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: G,
    /**
     * Başlık ikonu rengi: `success` | `warning` | `danger` | `info` | `muted` | ''.
     * Boş / muted → varsayılan muted-foreground.
     */
    iconTone: {
      type: String,
      default: "",
      validator: (e) => !e || ["success", "warning", "danger", "info", "muted"].includes(e)
    }
  },
  computed: {
    ...te(),
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
    titleIconClass() {
      const e = this.iconTone || "muted";
      return S("ui-field__title-icon", `ui-field__title-icon--${e}`);
    },
    rootClass() {
      return S(
        "ui-field",
        this.card && "ui-field--card",
        this.fill && "h-full min-h-0 flex flex-col",
        this.$attrs.class
      );
    }
  }
}, dr = {
  key: 0,
  class: "ui-field__title-row"
}, hr = {
  key: 1,
  class: "ui-field__title"
}, fr = {
  key: 2,
  class: "ui-field__subtitle"
};
function mr(e, t, r, l, s, i) {
  const u = k("ui-icon");
  return a(), n("div", z({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (a(), n("div", dr, [
      i.showIcon ? (a(), n("span", {
        key: 0,
        class: v(i.titleIconClass),
        "aria-hidden": "true"
      }, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ], 2)) : f("", !0),
      r.title ? (a(), n("span", hr, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (a(), n("div", {
      key: 1,
      class: v(["ui-field__value", r.fill ? "mt-auto" : void 0])
    }, [
      g(e.$slots, "default")
    ], 2)) : f("", !0),
    r.subtitle ? (a(), n("p", fr, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const pr = /* @__PURE__ */ x(cr, [["render", mr]]), gr = ["popover", "dialog"], yr = ["sm", "md", "lg"], br = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], vr = {
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
      validator: (e) => gr.includes(e)
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
      validator: (e) => yr.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => br.includes(e)
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
      return this.iconOnly && (this.hasValue || this.resolvedOpen) ? "soft" : "solid";
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
      return this.clearLabel != null && this.clearLabel !== "" ? this.clearLabel : A(this, "ui.fieldAction.clear", "Clear");
    },
    resolvedDoneLabel() {
      return this.doneLabel != null && this.doneLabel !== "" ? this.doneLabel : A(this, "ui.fieldAction.done", "Done");
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
}, _r = { class: "ui-field-action-header" }, kr = { class: "ui-field-action-header__text" }, wr = {
  key: 0,
  class: "ui-field-action-header__title"
}, xr = {
  key: 1,
  class: "ui-field-action-header__description"
}, Sr = { class: "ui-field-action-body" }, Cr = { class: "ui-field-action-body" }, Tr = { class: "ui-field-action-footer" };
function Lr(e, t, r, l, s, i) {
  const u = k("ui-button"), d = k("ui-popover"), o = k("ui-dialog");
  return a(), n("div", {
    class: v([
      "ui-field-action",
      i.hasValue ? "ui-field-action--filled" : "",
      r.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    i.isPopover ? (a(), b(d, {
      key: 0,
      open: i.resolvedOpen,
      "onUpdate:open": t[0] || (t[0] = (h) => i.resolvedOpen = h),
      placement: r.placement,
      width: r.popoverWidth,
      disabled: r.disabled,
      "mobile-centered": r.mobileCentered
    }, Q({
      trigger: y(({ open: h, toggle: m }) => [
        g(e.$slots, "trigger", {
          open: h,
          toggle: m,
          close: i.close,
          label: i.triggerLabel,
          hasValue: i.hasValue
        }, () => [
          r.iconOnly ? (a(), b(u, {
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
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (a(), b(u, {
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
            default: y(() => [
              I(p(i.triggerLabel), 1)
            ]),
            _: 1
          }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: y(({ close: h }) => [
        c("div", Sr, [
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
            c("div", _r, [
              c("div", kr, [
                r.title ? (a(), n("p", wr, p(r.title), 1)) : f("", !0),
                r.description ? (a(), n("p", xr, p(r.description), 1)) : f("", !0)
              ]),
              r.clearable && i.hasValue ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": i.resolvedClearLabel,
                onClick: (m) => i.onClear(h)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), n(L, { key: 1 }, [
      g(e.$slots, "trigger", {
        open: i.resolvedOpen,
        toggle: i.toggle,
        close: i.close,
        label: i.triggerLabel,
        hasValue: i.hasValue
      }, () => [
        r.iconOnly ? (a(), b(u, {
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
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (a(), b(u, {
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
          default: y(() => [
            I(p(i.triggerLabel), 1)
          ]),
          _: 1
        }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-expanded", "aria-label"]))
      ]),
      w(o, {
        open: i.resolvedOpen,
        "onUpdate:open": t[4] || (t[4] = (h) => i.resolvedOpen = h),
        title: r.title,
        description: r.description,
        icon: r.dialogIcon,
        "max-width": r.maxWidth,
        "close-on-backdrop": r.closeOnBackdrop,
        "close-on-escape": r.closeOnEscape
      }, Q({
        default: y(() => [
          c("div", Cr, [
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
              c("div", Tr, [
                r.clearable && i.hasValue ? (a(), b(u, {
                  key: 0,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "eraser",
                  "aria-label": i.resolvedClearLabel,
                  onClick: t[3] || (t[3] = (h) => i.onClear(i.close))
                }, null, 8, ["aria-label"])) : f("", !0),
                w(u, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: i.close
                }, {
                  default: y(() => [
                    I(p(i.resolvedDoneLabel), 1)
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
const Ir = /* @__PURE__ */ x(vr, [["render", Lr]]), zr = ["auto", "file", "folder"], Ar = ["sm", "md", "lg"], Pr = { icon: "folder", color: "text-sky-500" }, Mr = { icon: "file-lines", color: "text-muted-foreground" }, Er = {
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
function J(e) {
  return String(e ?? "").trim();
}
function Rr(e) {
  const t = J(e);
  return /[/\\]\s*$/.test(t);
}
function He(e) {
  const t = J(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function Or(e) {
  const t = He(e), r = t.lastIndexOf(".");
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
}, Vr = {
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
      validator: (e) => zr.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ar.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: G,
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: ""
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: !0
    },
    /** true: yalnızca ikon kabuğu (dışarıda etiket gösteren grid’ler için) */
    hideLabel: {
      type: Boolean,
      default: !1
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Rr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = J(this.name);
      return e ? this.basenameOnly ? He(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return J(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Pr;
      const e = Or(this.name);
      return Er[e] || Mr;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? Y(this.iconType) : this.inferredMeta.type || Y(void 0);
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
      return this.hideLabel ? "" : this.preset.root;
    }
  }
}, Br = ["aria-label"], Dr = ["title"];
function Fr(e, t, r, l, s, i) {
  const u = k("ui-icon");
  return a(), n("div", {
    class: v(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c("div", {
      class: v(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      w(u, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: v(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    r.hideLabel ? f("", !0) : (a(), n("span", {
      key: 0,
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Dr))
  ], 10, Br);
}
const Nr = /* @__PURE__ */ x(Vr, [["render", Fr]]);
function Hr(e) {
  const t = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((u) => u.top)), l = Math.min(...t.map((u) => u.left)), s = Math.max(...t.map((u) => u.right)), i = Math.max(...t.map((u) => u.bottom));
  return {
    top: r,
    left: l,
    right: s,
    bottom: i,
    width: s - l,
    height: i - r,
    x: l,
    y: r,
    toJSON: () => ({})
  };
}
function oe(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function _e(e) {
  const t = oe(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const r = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((s) => s instanceof HTMLElement), l = Hr(r.map((s) => s.getBoundingClientRect()));
    if (l) return l;
  }
  return t.getBoundingClientRect();
}
function $r(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const l of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    l instanceof HTMLElement && t.push(l);
  return t;
}
const Wr = ["dialog", "popover", "card", "tour"], Yr = [
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
], Gr = ["sm", "md", "lg", "xl", "2xl", "full"], O = 12, Ur = 8, jr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Wr.includes(e)
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
    iconType: G,
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
      validator: (e) => Yr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Ur
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Gr.includes(e)
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
    ...te(),
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
      return this.goLabel ? this.goLabel : A(this, "ui.guidance.go", "Continue");
    },
    resolvedCloseLabel() {
      return this.closeLabel ? this.closeLabel : A(this, "ui.guidance.close", "Close");
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
      const t = this.resolveTourTarget(), r = this.$refs.tourPanelRef;
      if (!r) return;
      const l = window.innerWidth, s = window.innerHeight, i = r.getBoundingClientRect(), u = i.width || 320, d = i.height || 180;
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
      const o = _e(t);
      if (!o) return;
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, o.top - h), _ = Math.max(0, o.left - h), C = Math.min(s, o.bottom + h), T = Math.min(l, o.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${_}px`,
        width: `${Math.max(0, T - _)}px`,
        height: `${Math.max(0, C - m)}px`
      };
      let M = C + O, D = _;
      this.placement.startsWith("top") ? M = m - d - O : this.placement.startsWith("right") ? (M = m, D = T + O) : this.placement.startsWith("left") ? (M = m, D = _ - u - O) : this.placement.includes("end") && (D = T - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && M + d > s - O && (M = m - d - O), M = Math.max(O, Math.min(M, s - d - O)), D = Math.max(O, Math.min(D, l - u - O)), this.tourPanelStyle = {
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
          for (const r of $r(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Kr = { class: "ui-guidance-footer" }, qr = { class: "ui-guidance-popover" }, Zr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Xr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Qr = { class: "ui-guidance-popover__text" }, Jr = {
  key: 0,
  class: "ui-guidance-popover__title"
}, ea = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, ta = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, ia = ["aria-label"], ra = { class: "ui-guidance-tour__content" }, aa = { class: "ui-header-lead" }, sa = { class: "ui-header-lead__main" }, la = {
  key: 0,
  class: "ui-header-lead__icon"
}, na = { class: "ui-header-lead__text" }, oa = {
  key: 0,
  class: "ui-guidance-tour__title"
}, ua = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, ca = {
  key: 0,
  class: "ui-header-lead__actions"
}, da = {
  key: 0,
  class: "ui-guidance-tour__body"
}, ha = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function fa(e, t, r, l, s, i) {
  const u = k("ui-button"), d = k("ui-card"), o = k("ui-dialog"), h = k("ui-icon"), m = k("ui-popover");
  return i.shouldRender ? (a(), n("div", {
    key: 0,
    class: v(i.rootShellClass)
  }, [
    r.mode === "card" ? (a(), b(d, {
      key: 0,
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      border: ""
    }, Q({
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
            c("div", Kr, [
              r.showFooterClose ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: i.onClose
              }, {
                default: y(() => [
                  I(p(i.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0),
              r.showGo ? (a(), b(u, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: i.onGo
              }, {
                default: y(() => [
                  I(p(i.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : r.mode === "dialog" ? (a(), b(o, {
      key: 1,
      open: i.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (_) => i.syncOpen = _),
      icon: r.icon,
      "icon-type": e.resolvedIconType,
      title: r.title,
      description: r.description,
      "max-width": r.maxWidth,
      "close-on-backdrop": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape,
      "show-close": r.showClose,
      onAfterLeave: t[1] || (t[1] = (_) => e.$emit("after-leave"))
    }, Q({
      default: y(() => [
        g(e.$slots, "default")
      ]),
      _: 2
    }, [
      r.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: y(() => [
          w(u, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: i.onGo
          }, {
            default: y(() => [
              I(p(i.resolvedGoLabel), 1)
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
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : r.mode === "popover" ? (a(), b(m, {
      key: 2,
      open: i.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (_) => i.syncOpen = _),
      placement: r.placement,
      width: r.popoverWidth,
      "close-on-outside-click": r.closeOnBackdrop,
      "close-on-escape": r.closeOnEscape
    }, {
      trigger: y((_) => [
        g(e.$slots, "trigger", Rt(Ot(_)))
      ]),
      content: y(() => [
        c("div", qr, [
          r.icon || r.title || r.description ? (a(), n("div", Zr, [
            r.icon ? (a(), n("span", Xr, [
              w(h, {
                name: r.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Qr, [
              r.title ? (a(), n("p", Jr, p(r.title), 1)) : f("", !0),
              r.description ? (a(), n("p", ea, p(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (a(), n("div", ta, [
            r.showFooterClose ? (a(), b(u, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: i.onClose
            }, {
              default: y(() => [
                I(p(i.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0),
            r.showGo ? (a(), b(u, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: i.onGo
            }, {
              default: y(() => [
                I(p(i.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ])) : g(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : r.mode === "tour" ? (a(), b(U, {
      key: 3,
      to: "body"
    }, [
      w(j, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (_) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          i.syncOpen ? (a(), n("div", {
            key: 0,
            class: v(["ui-guidance-tour", { "ui-guidance-tour--has-target": s.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = ne((..._) => i.onEscape && i.onEscape(..._), ["esc"]))
          }, [
            r.closeOnBackdrop ? (a(), n("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => i.onBackdrop && i.onBackdrop(..._))
            })) : f("", !0),
            s.tourHighlightStyle ? (a(), n("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: E(s.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : f("", !0),
            c("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: E(s.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r.title || i.resolvedGoLabel
            }, [
              c("div", ra, [
                c("div", aa, [
                  c("div", sa, [
                    r.icon ? (a(), n("span", la, [
                      w(h, {
                        name: r.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    c("div", na, [
                      r.title ? (a(), n("p", oa, p(r.title), 1)) : f("", !0),
                      r.description ? (a(), n("p", ua, p(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (a(), n("div", ca, [
                    w(u, {
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
                e.$slots.default ? (a(), n("div", da, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (a(), n("div", ha, [
                  r.showFooterClose ? (a(), b(u, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onClose
                  }, {
                    default: y(() => [
                      I(p(i.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0),
                  r.showGo ? (a(), b(u, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: i.onGo
                  }, {
                    default: y(() => [
                      I(p(i.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : f("", !0)
                ])) : g(e.$slots, "footer", { key: 2 })
              ])
            ], 12, ia)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const ma = /* @__PURE__ */ x(jr, [["render", fa]]), pa = {
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
    iconType: G,
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
    },
    /**
     * Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`.
     */
    fulled: {
      type: Boolean,
      default: !0
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
    ...te(),
    rootClass() {
      return S(
        "ui-icon-picker min-w-0",
        this.fulled ? "ui-icon-picker--fulled w-full" : "ui-icon-picker--inline w-auto",
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
      e && (r = t.filter((s) => String(s).toLowerCase().includes(e)));
      const l = Number(this.maxResults);
      return Number.isFinite(l) && l > 0 ? r.slice(0, l) : r;
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
}, ga = ["disabled", "aria-expanded", "onClick"], ya = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ba = { class: "ui-select-field-suffix" }, va = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, _a = { class: "ui-icon-picker-panel" }, ka = { class: "ui-icon-picker-panel__header" }, wa = { class: "ui-icon-picker-panel__title" }, xa = { class: "ui-icon-picker-panel__search" }, Sa = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Ca = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Ta = ["title", "onClick"];
function La(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return a(), n("div", {
    class: v(i.rootClass)
  }, [
    w(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => s.popoverOpen = m),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: m, toggle: _, close: C }) => [
        g(e.$slots, "trigger", {
          open: m,
          toggle: _,
          close: C
        }, () => [
          c("button", {
            type: "button",
            class: "ui-select-field",
            disabled: r.disabled,
            "aria-expanded": m ? "true" : "false",
            "aria-haspopup": !0,
            onClick: _
          }, [
            c("span", ya, [
              w(u, {
                name: i.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            c("span", {
              class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            c("span", ba, [
              c("span", va, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ga)
        ])
      ]),
      content: y(() => [
        c("div", _a, [
          c("div", ka, [
            c("span", wa, p(i.popoverTitleLabel), 1),
            i.localIcon ? (a(), b(d, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: R(i.clearIcon, ["stop"])
            }, {
              default: y(() => [
                I(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", xa, [
            w(o, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (a(), n("div", Ca, [
            (a(!0), n(L, null, P(i.filteredIcons, (m) => (a(), n("button", {
              key: m,
              type: "button",
              class: v(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === m }]),
              title: m,
              onClick: (_) => i.selectIcon(m)
            }, [
              w(u, {
                name: m,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Ta))), 128))
          ])) : (a(), n("div", Sa, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ia = /* @__PURE__ */ x(pa, [["render", La]]), za = 56, Aa = 1.15, Pa = 0.28, Ma = {
  name: "Intro",
  inheritAttrs: !1,
  props: {
    /** Overlay iken görünürlük; `overlay` kapalıysa yok sayılır. */
    open: {
      type: Boolean,
      default: !0
    },
    /** Aktif slayt (0 tabanlı). */
    modelValue: {
      type: Number,
      default: 0
    },
    /**
     * `{ key, icon, iconType, title, description, ariaLabel }`
     */
    steps: {
      type: Array,
      default: () => []
    },
    /** Tam ekran katman (`Teleport` + `role=dialog`). */
    overlay: {
      type: Boolean,
      default: !0
    },
    showSkip: {
      type: Boolean,
      default: !0
    },
    skipLabel: {
      type: String,
      default: ""
    },
    nextLabel: {
      type: String,
      default: ""
    },
    finishLabel: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open", "update:modelValue", "skip", "finish", "next"],
  data() {
    return {
      dragging: !1,
      dragOffset: 0,
      pointerId: null,
      startX: 0,
      startY: 0,
      startAt: 0,
      lockedAxis: null
    };
  },
  computed: {
    isVisible() {
      return this.overlay ? this.open : !0;
    },
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((t, r) => ({
        key: (t == null ? void 0 : t.key) ?? `intro-${r}`,
        icon: (t == null ? void 0 : t.icon) ?? "",
        iconType: (t == null ? void 0 : t.iconType) ?? Y(void 0),
        title: (t == null ? void 0 : t.title) ?? "",
        description: (t == null ? void 0 : t.description) ?? "",
        ariaLabel: (t == null ? void 0 : t.ariaLabel) ?? ""
      }));
    },
    lastIndex() {
      return Math.max(0, this.normalizedSteps.length - 1);
    },
    activeIndex() {
      return this.normalizedSteps.length ? Math.min(this.lastIndex, Math.max(0, Number(this.modelValue) || 0)) : 0;
    },
    isLastStep() {
      return this.activeIndex >= this.lastIndex;
    },
    resolvedSkipLabel() {
      return this.skipLabel || A(this, "ui.intro.skip", "Skip");
    },
    resolvedNextLabel() {
      return this.nextLabel || A(this, "ui.intro.next", "Next");
    },
    resolvedFinishLabel() {
      return this.finishLabel || A(this, "ui.intro.finish", "Get started");
    },
    resolvedAriaLabel() {
      return this.ariaLabel || A(this, "ui.intro.stepsAria", "Introduction");
    },
    resolvedCarouselRole() {
      return A(this, "ui.intro.carouselRole", "carousel");
    },
    primaryLabel() {
      return this.isLastStep ? this.resolvedFinishLabel : this.resolvedNextLabel;
    },
    trackStyle() {
      return { transform: `translate3d(${`calc(${-this.activeIndex * 100}% + ${this.dragOffset}px)`}, 0, 0)` };
    },
    rootClass() {
      return S("ui-intro", this.overlay && "ui-intro--overlay", this.$attrs.class);
    },
    passthroughAttrs() {
      return Ae(this.$attrs);
    }
  },
  watch: {
    isVisible(e) {
      e && (this.resetDrag(), this.$nextTick(() => {
        var t, r;
        (r = (t = this.$refs.root) == null ? void 0 : t.focus) == null || r.call(t, { preventScroll: !0 });
      }));
    }
  },
  beforeUnmount() {
    this.releasePointer();
  },
  methods: {
    isRtl() {
      const e = this.$refs.root;
      return e && typeof getComputedStyle == "function" ? getComputedStyle(e).direction === "rtl" : document.documentElement.dir === "rtl";
    },
    setIndex(e) {
      const t = Math.min(this.lastIndex, Math.max(0, e));
      t !== this.activeIndex && this.$emit("update:modelValue", t);
    },
    goTo(e) {
      this.setIndex(e);
    },
    goPrev() {
      this.setIndex(this.activeIndex - 1);
    },
    goNext() {
      if (this.isLastStep) {
        this.onFinish();
        return;
      }
      this.setIndex(this.activeIndex + 1), this.$emit("next", this.activeIndex + 1);
    },
    onSkip() {
      this.$emit("skip"), this.overlay && this.$emit("update:open", !1);
    },
    onFinish() {
      this.$emit("finish"), this.overlay && this.$emit("update:open", !1);
    },
    onRootKeydown(e) {
      if (e.key === "ArrowRight") {
        e.preventDefault(), this.isRtl() ? this.goPrev() : this.goNext();
        return;
      }
      e.key === "ArrowLeft" && (e.preventDefault(), this.isRtl() ? this.goNext() : this.goPrev());
    },
    isInteractiveTarget(e) {
      return e instanceof Element ? !!e.closest('button, a, input, textarea, select, [role="tab"]') : !1;
    },
    resetDrag() {
      this.dragging = !1, this.dragOffset = 0, this.pointerId = null, this.lockedAxis = null;
    },
    releasePointer() {
      var t;
      const e = this.$refs.viewport;
      e && this.pointerId != null && ((t = e.hasPointerCapture) != null && t.call(e, this.pointerId)) && e.releasePointerCapture(this.pointerId);
    },
    onPointerDown(e) {
      var t, r;
      if (!(e.pointerType === "mouse" && e.button !== 0) && !this.isInteractiveTarget(e.target) && !(this.normalizedSteps.length < 2)) {
        this.dragging = !0, this.dragOffset = 0, this.pointerId = e.pointerId, this.startX = e.clientX, this.startY = e.clientY, this.startAt = e.timeStamp, this.lockedAxis = null;
        try {
          (r = (t = e.currentTarget) == null ? void 0 : t.setPointerCapture) == null || r.call(t, e.pointerId);
        } catch {
        }
      }
    },
    onPointerMove(e) {
      !this.dragging || e.pointerId !== this.pointerId || this.applyDrag(e.clientX, e.clientY, e);
    },
    onPointerUp(e) {
      !this.dragging || this.pointerId != null && e.pointerId !== this.pointerId || this.commitDrag(e.clientX, e.timeStamp);
    },
    onTouchStart(e) {
      var r;
      if (typeof window < "u" && window.PointerEvent || this.isInteractiveTarget(e.target) || this.normalizedSteps.length < 2) return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      t && (this.dragging = !0, this.dragOffset = 0, this.pointerId = "touch", this.startX = t.clientX, this.startY = t.clientY, this.startAt = e.timeStamp, this.lockedAxis = null);
    },
    onTouchMove(e) {
      var r;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      t && this.applyDrag(t.clientX, t.clientY, e);
    },
    onTouchEnd(e) {
      var r;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (r = e.changedTouches) == null ? void 0 : r[0];
      this.commitDrag((t == null ? void 0 : t.clientX) ?? this.startX + this.dragOffset, e.timeStamp);
    },
    applyDrag(e, t, r) {
      var o;
      const l = e - this.startX, s = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(l) < 8 && Math.abs(s) < 8) return;
        if (this.lockedAxis = Math.abs(l) > Math.abs(s) * Aa ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = r == null ? void 0 : r.preventDefault) == null || o.call(r);
      const i = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let d = l;
      (i && d > 0 || u && d < 0) && (d *= Pa), this.dragOffset = d;
    },
    commitDrag(e, t) {
      var h;
      const r = e - this.startX, l = Math.max(1, t - this.startAt), s = r / l, i = ((h = this.$refs.viewport) == null ? void 0 : h.clientWidth) || 0, u = Math.max(za, i * 0.18), d = this.lockedAxis === "x" && (Math.abs(r) >= u || Math.abs(s) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !d) return;
      if (this.isRtl() ? r > 0 : r < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, Ea = ["aria-modal", "aria-label", "aria-roledescription"], Ra = { class: "ui-intro__header" }, Oa = ["aria-hidden"], Va = {
  key: 0,
  class: "ui-intro__icon"
}, Ba = {
  key: 1,
  class: "ui-intro__title"
}, Da = {
  key: 2,
  class: "ui-intro__description"
}, Fa = { class: "ui-intro__footer" }, Na = ["aria-label"], Ha = ["aria-selected", "aria-label", "onClick"];
function $a(e, t, r, l, s, i) {
  const u = k("ui-button"), d = k("ui-icon");
  return a(), b(U, {
    to: "body",
    disabled: !r.overlay
  }, [
    w(j, { name: "ui-intro-shell" }, {
      default: y(() => [
        i.isVisible ? (a(), n("div", z({
          key: 0,
          ref: "root",
          class: i.rootClass,
          role: "dialog",
          "aria-modal": r.overlay ? "true" : void 0,
          "aria-label": i.resolvedAriaLabel,
          "aria-roledescription": i.resolvedCarouselRole,
          tabindex: "-1"
        }, i.passthroughAttrs, {
          onKeydown: t[8] || (t[8] = (...o) => i.onRootKeydown && i.onRootKeydown(...o))
        }), [
          c("div", Ra, [
            g(e.$slots, "header", {}, () => [
              r.showSkip ? (a(), b(u, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: i.onSkip
              }, {
                default: y(() => [
                  I(p(i.resolvedSkipLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : f("", !0)
            ])
          ]),
          c("div", {
            ref: "viewport",
            class: "ui-intro__viewport",
            onPointerdown: t[0] || (t[0] = (...o) => i.onPointerDown && i.onPointerDown(...o)),
            onPointermove: t[1] || (t[1] = (...o) => i.onPointerMove && i.onPointerMove(...o)),
            onPointerup: t[2] || (t[2] = (...o) => i.onPointerUp && i.onPointerUp(...o)),
            onPointercancel: t[3] || (t[3] = (...o) => i.onPointerUp && i.onPointerUp(...o)),
            onTouchstartPassive: t[4] || (t[4] = (...o) => i.onTouchStart && i.onTouchStart(...o)),
            onTouchmove: t[5] || (t[5] = (...o) => i.onTouchMove && i.onTouchMove(...o)),
            onTouchend: t[6] || (t[6] = (...o) => i.onTouchEnd && i.onTouchEnd(...o)),
            onTouchcancel: t[7] || (t[7] = (...o) => i.onTouchEnd && i.onTouchEnd(...o))
          }, [
            c("div", {
              class: v(["ui-intro__track", { "ui-intro__track--dragging": s.dragging }]),
              style: E(i.trackStyle)
            }, [
              (a(!0), n(L, null, P(i.normalizedSteps, (o, h) => (a(), n("div", {
                key: o.key,
                class: "ui-intro__slide",
                "aria-hidden": h === i.activeIndex ? void 0 : "true"
              }, [
                g(e.$slots, "default", {
                  step: o,
                  index: h,
                  active: h === i.activeIndex
                }, () => [
                  o.icon ? (a(), n("span", Va, [
                    w(d, {
                      name: o.icon,
                      type: o.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  o.title ? (a(), n("h2", Ba, p(o.title), 1)) : f("", !0),
                  o.description ? (a(), n("p", Da, p(o.description), 1)) : f("", !0)
                ])
              ], 8, Oa))), 128))
            ], 6)
          ], 544),
          c("div", Fa, [
            g(e.$slots, "footer", {
              index: i.activeIndex,
              isLast: i.isLastStep,
              goNext: i.goNext,
              goPrev: i.goPrev,
              goTo: i.goTo
            }, () => [
              i.normalizedSteps.length > 1 ? (a(), n("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": i.resolvedAriaLabel
              }, [
                (a(!0), n(L, null, P(i.normalizedSteps, (o, h) => (a(), n("button", {
                  key: o.key,
                  type: "button",
                  class: v(["ui-intro__dot", { "ui-intro__dot--active": h === i.activeIndex }]),
                  role: "tab",
                  "aria-selected": h === i.activeIndex,
                  "aria-label": o.ariaLabel || o.title || String(h + 1),
                  onClick: (m) => i.goTo(h)
                }, null, 10, Ha))), 128))
              ], 8, Na)) : f("", !0),
              w(u, {
                type: "button",
                color: "primary",
                rounded: "",
                fulled: "",
                onClick: i.goNext
              }, {
                default: y(() => [
                  I(p(i.primaryLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ], 16, Ea)) : f("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const Wa = /* @__PURE__ */ x(Ma, [["render", $a]]), Ya = ["sm", "md", "lg", "xl", "2xl"], Ga = ["default", "foreground", "muted", "success", "destructive", "primary"], Ua = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ya.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ga.includes(e)
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
function ja(e, t, r, l, s, i) {
  return a(), n("span", {
    class: v(["ui-price-text", i.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      I(p(r.value), 1)
    ])
  ], 2);
}
const ce = /* @__PURE__ */ x(Ua, [["render", ja]]), Ka = ["sm", "md", "lg"], qa = ["sm", "md", "lg", "xl", "2xl"], Za = ["default", "foreground", "muted", "success", "destructive", "primary"], Xa = {
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
      validator: (e) => Ka.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => qa.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Za.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Qa = { class: "ui-price-display__label" };
function Ja(e, t, r, l, s, i) {
  const u = k("ui-price-text");
  return a(), n("div", {
    class: v(["ui-price-display", i.rootClass])
  }, [
    c("span", Qa, p(r.label), 1),
    w(u, {
      value: r.value,
      size: r.valueSize,
      tone: r.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          I(p(r.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const es = /* @__PURE__ */ x(Xa, [["render", Ja]]), ts = ["sm", "md", "lg"], is = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ts.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function rs(e, t, r, l, s, i) {
  return a(), n("div", {
    class: v(["ui-price-display-group", i.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const as = /* @__PURE__ */ x(is, [["render", rs]]), ss = ["sm", "md", "lg", "xl", "2xl"], ls = ["default", "foreground", "muted", "success", "destructive", "primary"], ns = {
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
      validator: (e) => ss.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => ls.includes(e)
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
}, os = { class: "ui-price-display-row__label" };
function us(e, t, r, l, s, i) {
  const u = k("ui-price-text");
  return a(), n("div", {
    class: v(["ui-price-display-row", i.rootClass])
  }, [
    c("span", os, p(r.label), 1),
    w(u, {
      value: r.value,
      size: r.valueSize,
      tone: r.tone
    }, {
      default: y(() => [
        g(e.$slots, "value", {}, () => [
          I(p(r.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const cs = /* @__PURE__ */ x(ns, [["render", us]]), ds = ["tr-TR", "en-US"], ee = Re({
  currency: "TRY",
  format: "tr-TR"
});
function hs(e, t = ee.format) {
  return ds.includes(e) ? e : t;
}
function fs(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (ee.currency = ie(e.currency));
  const t = e.format ?? e.locale;
  t != null && (ee.format = hs(t));
}
function ms() {
  return Vt(ee);
}
const ps = {
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
    return { priceInputConfig: ms() };
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
function gs(e, t, r, l, s, i) {
  const u = k("CurrencyInput");
  return a(), b(u, z({
    "model-value": r.modelValue,
    currency: i.resolvedCurrency,
    locale: i.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.$emit("update:modelValue", d)),
    onInput: t[1] || (t[1] = (d) => e.$emit("input", d)),
    onChange: t[2] || (t[2] = (d) => e.$emit("change", d)),
    onFocus: t[3] || (t[3] = (d) => e.$emit("focus", d)),
    onBlur: t[4] || (t[4] = (d) => e.$emit("blur", d))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const ys = /* @__PURE__ */ x(ps, [["render", gs]]);
function bs(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const l = Math.min(4, Math.round(r)), s = ["weak", "fair", "good", "strong"], i = l <= 0 ? "weak" : s[Math.min(l - 1, 3)];
  return {
    score: l,
    percent: l / 4 * 100,
    label: i
  };
}
const vs = F("ui-password"), _s = ["sm", "md", "lg"], ks = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || _s.includes(e)
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
    const e = vs(), t = e.slice(12);
    return {
      fallbackId: e,
      fallbackStrengthId: `ui-password-strength-${t}`,
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
      return bs(this.modelValue);
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
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  }
}, ws = ["aria-label", "aria-pressed", "disabled"], xs = ["id", "aria-live"];
function Ss(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("ui-input"), o = k("ui-progress");
  return a(), n("div", {
    class: v(["ui-password", [e.$attrs.class]])
  }, [
    w(d, z({
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
      append: y(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": s.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => s.visible = !s.visible)
        }, [
          w(u, {
            name: s.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, ws)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (a(), n("div", {
      key: 0,
      id: s.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      w(o, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (a(), n("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, xs)) : f("", !0)
  ], 2);
}
const Cs = /* @__PURE__ */ x(ks, [["render", Ss]]), Ts = ["bar", "circle"], ke = ["sm", "md", "lg", "xl", "2xl"], we = ["thin", "md"], Ls = ["default", "weak", "fair", "good", "strong"], q = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, Is = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, zs = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Ts.includes(e)
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
     * Daire: sm 16px, md 20px, lg 24px, xl 40px, 2xl 56px.
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
      validator: (e) => Ls.includes(e)
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
      const e = q[this.circleSizeKey] ?? q.sm;
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
      const e = q[this.circleSizeKey] ?? q.sm, t = Is[this.circleSizeKey] ?? 2, r = (e - t) / 2, l = e / 2, s = 2 * Math.PI * r, i = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: l, circumference: s, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, As = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Ps = ["width", "height", "viewBox"], Ms = ["cx", "cy", "r", "stroke-width"], Es = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Rs = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Os(e, t, r, l, s, i) {
  return a(), n("div", {
    class: v(i.rootClass),
    style: E(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (a(), n("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Ms),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Es)
    ], 8, Ps)) : (a(), n("div", Rs, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, As);
}
const Vs = /* @__PURE__ */ x(zs, [["render", Os]]), Bs = F("ui-sheet"), Ds = ["left", "right"], Fs = ["sm", "md", "lg", "xl"], Ns = ["solid", "regular", "brands", "light", "duotone", "thin"], xe = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, Hs = {
  name: "Sheet",
  components: { Divider: Pe },
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
      validator: (e) => Ds.includes(e)
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
      validator: (e) => Fs.includes(e)
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
      validator: (e) => e == null || Ns.includes(e)
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
     * Dar viewport’ta (`max-width: 1023px`) panel tam genişlik.
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
    const e = Bs();
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
      return Y(this.iconType);
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
      return Ae(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : A(this, "ui.dialog.close", "Close");
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
        Me(e) || (this.focusFallbackTimer = setTimeout(() => {
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, $s = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Ws = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Ys = ["id"], Gs = {
  key: 1,
  class: "ui-sheet-header__icon"
}, Us = {
  key: 2,
  class: "ui-sheet-header__actions"
}, js = ["id"], Ks = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function qs(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("Divider");
  return s.portalReady ? (a(), b(U, {
    key: 0,
    to: "body"
  }, [
    w(j, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: y(() => [
        r.open ? (a(), n("div", {
          key: 0,
          ref: "layerRef",
          class: v(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          r.overlay ? (a(), n("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          })) : f("", !0),
          c("div", z({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": r.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[1] || (t[1] = R(() => {
            }, ["stop"]))
          }), [
            i.hasHeaderBlock ? (a(), n("div", Ws, [
              g(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (a(), n("div", {
                  key: 0,
                  class: v(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.title ? (a(), n("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(r.title), 9, Ys)) : f("", !0),
                  r.icon ? (a(), n("span", Gs, [
                    w(u, {
                      name: r.icon,
                      type: i.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), n("div", Us, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (a(), b(d, {
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
                  r.description ? (a(), n("p", {
                    key: 4,
                    id: s.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(r.description), 9, js)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), n("div", Ks, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (a(), b(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), n("div", {
              key: 3,
              class: v(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), n("div", {
              key: 4,
              class: v(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, $s)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Zs = /* @__PURE__ */ x(Hs, [["render", qs]]), Xs = ["sm", "md", "lg", "full"], Se = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Qs = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Xs.includes(e)
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
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Js = {
  key: 0,
  class: "ui-menu-header"
}, el = { class: "ui-menu-body" }, tl = {
  key: 1,
  class: "ui-menu-footer"
};
function il(e, t, r, l, s, i) {
  return a(), n("nav", z({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (a(), n("div", Js, [
      g(e.$slots, "header")
    ])) : f("", !0),
    c("div", el, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), n("div", tl, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const rl = /* @__PURE__ */ x(Qs, [["render", il]]), al = {
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
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, sl = {
  key: 0,
  class: "ui-menu-group-label"
}, ll = { class: "ui-menu-group-items" };
function nl(e, t, r, l, s, i) {
  return a(), n("div", z({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (a(), n("p", sl, p(r.label), 1)) : f("", !0),
    c("div", ll, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const ol = /* @__PURE__ */ x(al, [["render", nl]]), ul = {
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
function cl(e, t, r, l, s, i) {
  const u = k("ui-button");
  return a(), b(u, z({
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
    default: y(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const dl = /* @__PURE__ */ x(ul, [["render", cl]]), hl = {
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
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, fl = ["aria-label"];
function ml(e, t, r, l, s, i) {
  return a(), n("div", z({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, fl);
}
const pl = /* @__PURE__ */ x(hl, [["render", ml]]), gl = ["sm", "md", "lg"], yl = ["button", "submit", "reset"], Ce = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Te = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, bl = {
  name: "SidebarItem",
  components: { RouterLink: Ft },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => yl.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || gl.includes(e)
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    cubed: {
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
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    },
    textAlign: {
      type: String,
      default: "center",
      validator: (e) => e === "left" || e === "center"
    }
  },
  emits: ["click"],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== "";
    },
    resolvedSize() {
      return ze(this.size, { key: "controlSize", defaultSize: "md" });
    },
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
    },
    hasRenderableDefaultSlot() {
      const e = this.$slots.default;
      return e ? e().some((t) => this.isRenderableVNode(t)) : !1;
    },
    inlineIconSize() {
      return this.resolvedSize === "lg" ? "md" : (this.resolvedSize === "md", "sm");
    },
    cubedIconSize() {
      return { sm: "sm", md: "md", lg: "md" }[this.resolvedSize] || "md";
    },
    isBlock() {
      return this.fulled || this.block;
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center";
      return this.isBlock ? S("ui-sidebar-item-text min-w-0 flex-1 truncate", e) : S("ui-sidebar-item-text whitespace-nowrap", e);
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    itemClasses() {
      const e = this.cubed ? Te[this.resolvedSize] || Te.md : Ce[this.resolvedSize] || Ce.md;
      return S(
        "ui-sidebar-item font-sans",
        this.active && "ui-sidebar-item--active",
        this.cubed && "ui-sidebar-item--cubed",
        this.isBlock && "ui-sidebar-item--fulled w-full",
        e,
        this.disabled && "cursor-not-allowed opacity-50",
        this.hasRouterTo && "inline-flex items-center",
        this.$attrs.class
      );
    }
  },
  methods: {
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === Bt) return !1;
      if (e.type === Dt)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === L) {
        const t = e.children;
        return Array.isArray(t) ? t.some((r) => this.isRenderableVNode(r)) : !1;
      }
      return !0;
    },
    onClick(e) {
      this.disabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, t) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), !e.defaultPrevented && t(e);
    }
  }
}, vl = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], _l = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, kl = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, wl = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, xl = ["type", "disabled", "aria-current"], Sl = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Cl = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Tl = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Ll(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("RouterLink");
  return i.hasRouterTo ? (a(), b(d, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: y(({ href: o, navigate: h }) => [
      c("a", z({
        href: o,
        class: i.itemClasses,
        "aria-current": r.active ? "page" : void 0,
        "aria-disabled": r.disabled ? "true" : void 0,
        tabindex: r.disabled ? -1 : void 0
      }, i.forwardedAttrs, {
        onClick: (m) => i.onRouterLinkClick(m, h)
      }), [
        i.usesCubedCenterLayout ? (a(), n("span", _l, [
          r.prefixIcon ? (a(), b(u, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (a(), n(L, { key: 1 }, [
          r.prefixIcon ? (a(), n("span", kl, [
            w(u, {
              size: i.inlineIconSize,
              name: r.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          c("span", {
            class: v(i.textContentClass)
          }, [
            g(e.$slots, "default")
          ], 2),
          r.suffixIcon ? (a(), n("span", wl, [
            w(u, {
              size: i.inlineIconSize,
              name: r.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 16, vl)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), n("button", z({
    key: 1,
    type: r.nativeType,
    class: i.itemClasses,
    disabled: r.disabled || void 0,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.onClick && i.onClick(...o))
  }), [
    i.usesCubedCenterLayout ? (a(), n("span", Sl, [
      r.prefixIcon ? (a(), b(u, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (a(), n(L, { key: 1 }, [
      r.prefixIcon ? (a(), n("span", Cl, [
        w(u, {
          size: i.inlineIconSize,
          name: r.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      c("span", {
        class: v(i.textContentClass)
      }, [
        g(e.$slots, "default")
      ], 2),
      r.suffixIcon ? (a(), n("span", Tl, [
        w(u, {
          size: i.inlineIconSize,
          name: r.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 16, xl));
}
const Il = /* @__PURE__ */ x(bl, [["render", Ll]]), zl = {
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
    active(e, t) {
      e && t === !1 && this.scheduleFocus();
    }
  },
  methods: {
    resolveFocusRoot() {
      const e = this.$refs.root;
      return e instanceof HTMLElement ? e.closest(".ui-dialog-panel") || e.closest(".ui-sheet-panel") || e.closest(".ui-card") || e : null;
    },
    scheduleFocus() {
      !this.autofocus || !this.active || Ue() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Me(e);
        });
      });
    }
  }
}, Al = {
  ref: "root",
  class: "ui-step"
};
function Pl(e, t, r, l, s, i) {
  return Oe((a(), n("div", Al, [
    g(e.$slots, "default")
  ], 512)), [
    [Ve, r.active]
  ]);
}
const Ml = /* @__PURE__ */ x(zl, [["render", Pl]]), El = ["horizontal", "vertical"], Rl = ["default", "pills"], Ol = {
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
      validator: (e) => Rl.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => El.includes(e)
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
        iconType: (t == null ? void 0 : t.iconType) ?? Y(void 0)
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
}, Vl = ["aria-label"], Bl = { class: "ui-stepper-pills-track" }, Dl = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Fl = { class: "flex w-full min-w-0 items-center justify-center" }, Nl = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Hl = {
  key: 1,
  class: "tabular-nums"
}, $l = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Wl = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Yl = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Gl = { class: "flex flex-col items-center" }, Ul = {
  key: 1,
  class: "tabular-nums"
}, jl = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Kl = { class: "ui-stepper-title" }, ql = {
  key: 0,
  class: "ui-stepper-description"
};
function Zl(e, t, r, l, s, i) {
  const u = k("ui-icon");
  return a(), n("div", z({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (a(), n(L, { key: 0 }, [
      c("div", Bl, [
        (a(!0), n(L, null, P(i.normalizedSteps, (d, o) => (a(), b(X(r.interactive ? "button" : "span"), z({
          key: o,
          class: ["ui-stepper-pill", i.pillClass(o)],
          role: "listitem",
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (a(), n("p", Dl, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (a(!0), n(L, { key: 1 }, P(i.normalizedSteps, (d, o) => (a(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Fl, [
        o > 0 ? (a(), n("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", Nl)),
        (a(), b(X(r.interactive ? "button" : "div"), z({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", Hl, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), n("span", $l))
      ]),
      c("p", Wl, p(d.title), 1),
      d.description ? (a(), n("p", Yl, p(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), n(L, { key: 2 }, P(i.normalizedSteps, (d, o) => (a(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Gl, [
        (a(), b(X(r.interactive ? "button" : "div"), z({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: y(() => [
            d.icon ? (a(), b(u, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (a(), n("span", Ul, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), n("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", jl, [
        c("p", Kl, p(d.title), 1),
        d.description ? (a(), n("p", ql, p(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Vl);
}
const Xl = /* @__PURE__ */ x(Ol, [["render", Zl]]), Ql = F("ui-slider"), Jl = {
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
    return { fallbackId: Ql() };
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
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
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
}, en = {
  key: 0,
  class: "ui-slider-header"
}, tn = {
  key: 0,
  class: "ui-form-label"
}, rn = {
  key: 1,
  class: "ui-slider-value"
}, an = { class: "ui-slider-rail" }, sn = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], ln = {
  key: 1,
  class: "ui-slider-scale"
}, nn = { key: 0 }, on = { key: 1 };
function un(e, t, r, l, s, i) {
  const u = k("ui-progress");
  return a(), n("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (a(), n("div", en, [
      r.label ? (a(), n("span", tn, p(r.label), 1)) : f("", !0),
      i.hasValue ? (a(), n("span", rn, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", an, [
      w(u, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", z(i.passthroughAttrs, {
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
      }), null, 16, sn)
    ]),
    r.minLabel || r.maxLabel ? (a(), n("div", ln, [
      r.minLabel ? (a(), n("span", nn, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (a(), n("span", on, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const cn = /* @__PURE__ */ x(Jl, [["render", un]]), dn = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return S("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, hn = { class: "ui-table-scroll" };
function fn(e, t, r, l, s, i) {
  return a(), n("div", hn, [
    c("table", z({ class: i.rootClass }, i.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const mn = /* @__PURE__ */ x(dn, [["render", fn]]), pn = {
  name: "TableBody"
}, gn = { class: "ui-table-body" };
function yn(e, t, r, l, s, i) {
  return a(), n("tbody", gn, [
    g(e.$slots, "default")
  ]);
}
const bn = /* @__PURE__ */ x(pn, [["render", yn]]), vn = ["left", "center", "right"], _n = ["title", "secondary", "body"], kn = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => vn.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || _n.includes(e)
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
}, wn = ["colspan"];
function xn(e, t, r, l, s, i) {
  return a(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, wn);
}
const Sn = /* @__PURE__ */ x(kn, [["render", xn]]), Cn = ["left", "center", "right"], Tn = ["sm", "md", "lg"], Ln = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Cn.includes(e)
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
      if (!(this.iconCol || Tn.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function In(e, t, r, l, s, i) {
  return a(), n("th", {
    class: v(i.rootClass),
    style: E(i.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const zn = /* @__PURE__ */ x(Ln, [["render", In]]), An = {
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
function Pn(e, t, r, l, s, i) {
  return a(), n("thead", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Mn = /* @__PURE__ */ x(An, [["render", Pn]]), En = {
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
}, Rn = { class: "ui-table-pagination" }, On = { class: "ui-table-pagination-meta" }, Vn = { class: "ui-table-pagination-nav" }, Bn = { class: "ui-table-pagination-page" };
function Dn(e, t, r, l, s, i) {
  const u = k("ui-button");
  return a(), n("div", Rn, [
    c("div", On, [
      g(e.$slots, "meta", {}, () => [
        I(p(r.metaText), 1)
      ])
    ]),
    c("div", Vn, [
      w(u, {
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
      c("div", Bn, p(r.pageLabel), 1),
      w(u, {
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
const Fn = /* @__PURE__ */ x(En, [["render", Dn]]), Nn = ["none", "soft", "strong"], Hn = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Nn.includes(e)
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
function $n(e, t, r, l, s, i) {
  return a(), n("tr", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Wn = /* @__PURE__ */ x(Hn, [["render", $n]]), Yn = {
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
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Gn = ["id", "aria-labelledby"];
function Un(e, t, r, l, s, i) {
  return Oe((a(), n("div", z({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Gn)), [
    [Ve, i.isActive]
  ]);
}
const jn = /* @__PURE__ */ x(Yn, [["render", Un]]);
function H(e) {
  return String(e).padStart(2, "0");
}
function $e(e, t = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const l = Number(r[1]), s = Number(r[2]);
  if (!Number.isFinite(l) || !Number.isFinite(s))
    return String(e || "");
  if (t === "HH:mm")
    return `${H(l)}:${H(s)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const i = l >= 12 ? "PM" : "AM";
    return `${l % 12 || 12}:${H(s)} ${i}`;
  }
  return `${H(l)}:${H(s)}`;
}
function Kn(e, t, r = "HH:mm") {
  return $e(`${e}:${t}`, r);
}
const qn = F("ui-timepicker"), se = 40;
function le(e) {
  return String(e).padStart(2, "0");
}
const Zn = {
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
      fallbackId: qn(),
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : A(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return A(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return A(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return je(void 0);
    },
    display() {
      return this.menuOpen ? Kn(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? $e(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
    pad2: le,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const l = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      l && (t = Math.min(23, Math.max(0, parseInt(l[1], 10))), r = Math.min(59, Math.max(0, parseInt(l[2], 10))));
      const s = this.minuteValues;
      let i = s[0] ?? 0, u = 999;
      for (const d of s) {
        const o = Math.abs(d - r);
        o < u && (u = o, i = d);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return se;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return se;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : se;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const l = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(l) ? l : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), l = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, i = Math.round((s - l - r / 2) / r);
      return Math.min(t, Math.max(0, i));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelItemHeight(e), l = this.wheelSpacerTop(e);
      return Math.max(0, l + t * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: r = !1 } = {}) {
      if (!e) return;
      const l = this.scrollTopForIndex(e, t);
      r && typeof e.scrollTo == "function" ? e.scrollTo({ top: l, behavior: "smooth" }) : e.scrollTop = l;
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
      const e = `${le(this.draftHour)}:${le(this.draftMinute)}`;
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
      const l = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - l) > 0.5 && (e.scrollTop = l), this.emitDraft();
    }
  }
}, Xn = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Qn = { class: "ui-timepicker-wheels" }, Jn = { class: "ui-timepicker-wheels-row" }, eo = ["aria-valuenow", "aria-label"], to = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, io = { class: "ui-timepicker-wheel-spacer" }, ro = ["onClick"], ao = ["aria-valuenow", "aria-label"], so = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, lo = { class: "ui-timepicker-wheel-spacer" }, no = ["onClick"], oo = { class: "min-w-0 flex-1 truncate text-foreground" }, uo = { class: "ui-timepicker-panel w-full p-2" }, co = { class: "ui-timepicker-wheels" }, ho = { class: "ui-timepicker-wheels-row" }, fo = ["aria-valuenow", "aria-label"], mo = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, po = { class: "ui-timepicker-wheel-spacer" }, go = ["onClick"], yo = ["aria-valuenow", "aria-label"], bo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, vo = { class: "ui-timepicker-wheel-spacer" }, _o = ["onClick"];
function ko(e, t, r, l, s, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), n("div", {
    class: v([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (a(), n("div", Xn, [
      c("div", Qn, [
        t[2] || (t[2] = c("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        c("div", Jn, [
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": s.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            c("div", to, [
              c("div", io, [
                (a(!0), n(L, null, P(i.hourOptions, (o) => (a(), n("button", {
                  key: "h-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(o)
                }, p(i.pad2(o)), 11, ro))), 128))
              ])
            ], 512)
          ], 8, eo),
          t[1] || (t[1] = c("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": s.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": i.minuteAriaLabel
          }, [
            c("div", so, [
              c("div", lo, [
                (a(!0), n(L, null, P(i.minuteValues, (o, h) => (a(), n("button", {
                  key: "m-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => i.selectMinute(h)
                }, p(i.pad2(o)), 11, no))), 128))
              ])
            ], 512)
          ], 8, ao)
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
    ])) : (a(), b(d, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (o) => s.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: y(({ open: o, toggle: h, close: m }) => [
        g(e.$slots, "trigger", {
          open: o,
          toggle: h,
          close: m
        }, () => [
          w(u, {
            type: "button",
            id: i.resolvedId,
            variant: "solid",
            color: "input",
            fulled: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: r.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: h
          }, {
            default: y(() => [
              c("span", oo, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        c("div", uo, [
          c("div", co, [
            t[6] || (t[6] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", ho, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                c("div", mo, [
                  c("div", po, [
                    (a(!0), n(L, null, P(i.hourOptions, (o) => (a(), n("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(o)
                    }, p(i.pad2(o)), 11, go))), 128))
                  ])
                ], 512)
              ], 8, fo),
              t[5] || (t[5] = c("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                c("div", bo, [
                  c("div", vo, [
                    (a(!0), n(L, null, P(i.minuteValues, (o, h) => (a(), n("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(o)), 11, _o))), 128))
                  ])
                ], 512)
              ], 8, yo)
            ]),
            t[7] || (t[7] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[8] || (t[8] = c("div", {
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
const Le = /* @__PURE__ */ x(Zn, [["render", ko]]), wo = ["square", "video", "auto"], xo = ["fill", "sm", "md", "lg"], Ie = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, So = {
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
      validator: (e) => wo.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => xo.includes(e)
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
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
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
}, Co = ["src", "alt"], To = ["aria-hidden"], Lo = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Io = {
  key: 3,
  class: "ui-photo__overflow"
}, zo = ["aria-label"], Ao = ["aria-label"], Po = { class: "ui-photo-preview__panel" }, Mo = ["src", "alt"], Eo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Ro(e, t, r, l, s, i) {
  const u = k("ui-icon"), d = k("ui-button");
  return a(), n(L, null, [
    (a(), b(X(i.rootTag), z({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: y(() => [
        r.src && !s.imageFailed ? (a(), n("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (o) => s.imageFailed = !0)
        }, null, 40, Co)) : (a(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, To)),
        r.favorite ? (a(), n("span", Lo, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (a(), n("span", Io, p(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), b(U, { to: "body" }, [
      w(j, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          s.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, Ao),
            c("div", Po, [
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
              i.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: R(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Mo)) : f("", !0),
              i.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: R(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), n("p", Eo, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, zo)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Oo = /* @__PURE__ */ x(So, [["render", Ro]]), Vo = ["square", "video", "auto"], Bo = {
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
      validator: (e) => Vo.includes(e)
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
}, Do = ["data-count"], Fo = ["aria-label"], No = ["aria-label"], Ho = { class: "ui-photo-preview__panel" }, $o = ["src", "alt"], Wo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Yo(e, t, r, l, s, i) {
  const u = k("ui-photo"), d = k("ui-button");
  return a(), n(L, null, [
    c("div", {
      class: v(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (a(!0), n(L, null, P(i.visibleItems, (o, h) => (a(), b(u, {
        key: o.key || `${o.src}-${h}`,
        src: o.src,
        alt: o.alt || "",
        favorite: !!o.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": o.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, Do),
    (a(), b(U, { to: "body" }, [
      w(j, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          s.previewOpen ? (a(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, No),
            c("div", Ho, [
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
              i.showPrev ? (a(), b(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: R(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (a(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, $o)) : f("", !0),
              i.showNext ? (a(), b(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: R(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (a(), n("p", Wo, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Fo)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Go = /* @__PURE__ */ x(Bo, [["render", Yo]]);
function Z(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Qo() {
  return {
    push: N,
    dismiss: qe,
    clear: Ke,
    info: (e) => N({ ...Z(e), variant: "info" }),
    success: (e) => N({ ...Z(e), variant: "success" }),
    warning: (e) => N({ ...Z(e), variant: "warning" }),
    error: (e) => N({ ...Z(e), variant: "error" })
  };
}
function Jo(e = !1) {
  return Re({
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
function eu() {
  return {
    confirm: Ze
  };
}
const ue = {
  en: tt,
  tr: Ee
};
function tu(e = "tr") {
  return ue[e] ?? ue.tr;
}
const iu = Ee, Uo = [
  ["ui-action-card", jt],
  ["ui-action-card-list", Xt],
  ["ui-action-group", it],
  ["ui-ai-button", ii],
  ["ui-alert", rt],
  ["ui-avatar", at],
  ["ui-avatar-group", ni],
  ["ui-badge", st],
  ["ui-button", lt],
  ["ui-card", nt],
  ["ui-checkbox", Di],
  ["ui-checkbox-group", Gi],
  ["ui-color-picker", xi],
  ["ui-currency-input", Ne],
  ["ui-confirm-dialog", ot],
  ["ui-date-picker", ut],
  ["ui-date-range-picker", ur],
  ["ui-dialog", ct],
  ["ui-divider", Pe],
  ["ui-dropdown", dt],
  ["ui-empty", ht],
  ["ui-field", pr],
  ["ui-field-action", Ir],
  ["ui-file", Nr],
  ["ui-form-row", ft],
  ["ui-guidance", ma],
  ["ui-icon", mt],
  ["ui-icon-picker", Ia],
  ["ui-intro", Wa],
  ["ui-input", pt],
  ["ui-price-display", es],
  ["ui-price-display-group", as],
  ["ui-price-display-row", cs],
  ["ui-price-input", ys],
  ["ui-price-text", ce],
  ["ui-password", Cs],
  ["ui-phone", gt],
  ["ui-pin", yt],
  ["ui-list", bt],
  ["ui-list-item", vt],
  ["ui-popover", _t],
  ["ui-progress", Vs],
  ["ui-radio", kt],
  ["ui-radio-group", wt],
  ["ui-select", xt],
  ["ui-sheet", Zs],
  ["ui-menu", rl],
  ["ui-menu-group", ol],
  ["ui-menu-item", dl],
  ["ui-menu-nav", pl],
  ["ui-sidebar-item", Il],
  ["ui-segment", St],
  ["ui-segment-group", Ct],
  ["ui-skeleton", Tt],
  ["ui-slider", cn],
  ["ui-step", Ml],
  ["ui-stepper", Xl],
  ["ui-switch", Lt],
  ["ui-table", mn],
  ["ui-table-body", bn],
  ["ui-table-cell", Sn],
  ["ui-table-head", zn],
  ["ui-table-header", Mn],
  ["ui-table-pagination", Fn],
  ["ui-table-row", Wn],
  ["ui-tag", It],
  ["ui-tab-list", zt],
  ["ui-tab-panel", jn],
  ["ui-tabs", At],
  ["ui-tab-trigger", Pt],
  ["ui-time-picker", Le],
  ["ui-timepicker", Le],
  ["ui-tooltip", Mt],
  ["ui-toast", Et],
  ["ui-photo", Oo],
  ["ui-photos", Go]
];
function jo(e, t = {}) {
  var o, h;
  const { i18n: r, locale: l, locales: s, theme: i, themeOverrides: u, priceInput: d } = t;
  if (typeof i == "string") {
    const m = Xe(i, u || {});
    Qe(e, m.defaults), e.config.globalProperties.$uiDefaults = m.defaults, pe({
      ...m.config,
      ...Je(m.defaults)
    });
  } else if (i && typeof i == "object") {
    const m = u ? et(i, u) : i;
    pe(m);
  }
  if (d && fs(d), (o = r == null ? void 0 : r.global) != null && o.mergeLocaleMessage) {
    const m = s ?? (l != null ? [l] : [
      typeof r.global.locale == "string" ? r.global.locale : ((h = r.global.locale) == null ? void 0 : h.value) ?? "tr"
    ]);
    for (const _ of m) {
      const C = ue[_];
      C && r.global.mergeLocaleMessage(_, C);
    }
  }
  for (const [m, _] of Uo)
    e.component(m, _);
}
const ru = {
  install: jo
};
export {
  jt as ActionCard,
  Xt as ActionCardList,
  it as ActionGroup,
  ii as AiButton,
  rt as Alert,
  at as Avatar,
  ni as AvatarGroup,
  lu as BASE_UI_DEFAULTS,
  st as Badge,
  lt as Button,
  nt as Card,
  Di as Checkbox,
  Gi as CheckboxGroup,
  xi as ColorPicker,
  ot as ConfirmDialog,
  Ne as CurrencyInput,
  ut as DatePicker,
  ur as DateRangePicker,
  ct as Dialog,
  Pe as Divider,
  dt as Dropdown,
  ht as Empty,
  nu as FEW_COLOR_SCALE,
  ou as FEW_PALETTE_ID,
  uu as FEW_PRIMARY,
  cu as FEW_PRIMARY_FOREGROUND,
  pr as Field,
  Ir as FieldAction,
  Nr as File,
  ft as FormRow,
  du as GOOGLE_FONTS_CATALOG,
  ma as Guidance,
  mt as Icon,
  Ia as IconPicker,
  pt as Input,
  Wa as Intro,
  hu as LEGACY_PRESET_TO_THEME,
  bt as List,
  vt as ListItem,
  rl as Menu,
  ol as MenuGroup,
  dl as MenuItem,
  pl as MenuNav,
  ds as PRICE_FORMATS,
  Cs as Password,
  gt as Phone,
  Oo as Photo,
  Go as Photos,
  yt as Pin,
  _t as Popover,
  ys as PriceInput,
  Vs as Progress,
  kt as Radio,
  wt as RadioGroup,
  St as Segment,
  Ct as SegmentGroup,
  xt as Select,
  Zs as Sheet,
  Il as SidebarItem,
  Tt as Skeleton,
  cn as Slider,
  Ml as Step,
  Xl as Stepper,
  Lt as Switch,
  fu as THEME_CUSTOM_CSS_ID,
  mu as THEME_IDS,
  pu as THEME_PACKAGES,
  gu as THEME_PRESETS,
  yu as THEME_PRESET_IDS,
  zt as TabList,
  jn as TabPanel,
  Pt as TabTrigger,
  mn as Table,
  bn as TableBody,
  Sn as TableCell,
  zn as TableHead,
  Mn as TableHeader,
  Fn as TablePagination,
  Wn as TableRow,
  At as Tabs,
  It as Tag,
  Le as TimePicker,
  Et as Toast,
  Mt as Tooltip,
  bu as UI_DEFAULTS_KEY,
  vu as UI_ICON_TYPES,
  _u as applyGoogleFontsCatalogPreview,
  ku as applyGoogleFontsForTheme,
  wu as applyThemeCustomCss,
  pe as applyUiTheme,
  xu as buildGoogleFontsLinkTag,
  Su as buildGoogleFontsStylesheetUrl,
  Cu as buildThemeEnforcementCss,
  Tu as buildThemeStyleAttr,
  Lu as clearThemeCustomCss,
  Ke as clearToasts,
  Iu as createUiId,
  F as createUiIdFactory,
  ru as default,
  zu as deriveBrandColorsFromPrimary,
  qe as dismissToast,
  Xo as formatCurrencyAmount,
  Au as formatGoogleFontFamilyName,
  Ci as formatMoneyInput,
  Be as getCurrencySymbol,
  Pu as getFewPrimaryColors,
  Fe as getMoneySeparators,
  ms as getPriceInputConfig,
  Mu as getThemeCssPath,
  Eu as getThemePackage,
  Ru as getThemePreset,
  tu as getUiMessages,
  Ou as googleFontSelectOptions,
  G as iconTypeProp,
  Vu as mergeUiDefaults,
  et as mergeUiTheme,
  Si as parseLocalizedMoneyInput,
  Ae as pickPassthroughAttrs,
  Qe as provideUiDefaults,
  N as pushToast,
  Ze as requestConfirm,
  Bu as resetUiIds,
  Du as resolveControlSize,
  ie as resolveCurrencyCode,
  Fu as resolvePrimaryColor,
  ze as resolveThemeControlSize,
  We as resolveThemeDateFormat,
  Nu as resolveThemeDefault,
  Hu as resolveThemeDialogMaxWidth,
  $u as resolveThemeFontFamilies,
  Y as resolveThemeIconType,
  Wu as resolveThemeId,
  Xe as resolveThemePackage,
  Yu as resolveThemePreset,
  je as resolveThemeTimeFormat,
  Gu as resolveThemeVars,
  A as resolveUiText,
  De as sanitizeMoneyInput,
  fs as setPriceInputConfig,
  te as themeIconTypeComputed,
  iu as uiMessagesTr,
  eu as useConfirm,
  Jo as useDialog,
  Qo as useToast,
  Uu as useUiDefaults,
  ju as useUiDefaultsOptions,
  Ku as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
