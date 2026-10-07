import { _ as x, aj as G, aH as ie, av as ze, a5 as S, aG as A, a7 as F, aw as Ye, at as Ge, M as Ue, ak as Ae, ad as qe, aA as Y, an as Me, h as Pe, ab as Ee, aE as je, a4 as Ke, a9 as Ze, ap as N, aq as Xe, aI as Re, aC as Qe, ao as Je, Z as pe, aJ as et, am as tt, aa as it, A as rt, a as at, b as st, c as nt, d as lt, C as ot, e as ut, f as ct, g as dt, i as ht, E as ft, m as mt, I as pt, n as gt, P as yt, q as bt, o as vt, p as _t, r as kt, R as wt, s as xt, u as St, S as Ct, t as Tt, v as Lt, w as It, N as zt, H as At, K as Mt, J as Pt, Q as Et, O as Rt } from "./index-DGfkpsxQ.js";
import { B as lu, F as ou, j as uu, k as cu, l as du, G as hu, L as fu, D as mu, T as pu, x as gu, y as yu, z as bu, U as vu, V as _u, W as ku, X as wu, Y as xu, $ as Su, a0 as Cu, a1 as Tu, a2 as Lu, a3 as Iu, a6 as zu, a8 as Au, ac as Mu, ae as Pu, af as Eu, ag as Ru, ah as Vu, ai as Ou, al as Bu, ar as Du, as as Fu, au as Nu, ax as Hu, ay as $u, az as Wu, aB as Yu, aD as Gu, aF as Uu, aK as qu, aL as ju, aM as Ku } from "./index-DGfkpsxQ.js";
import { resolveComponent as k, openBlock as a, createElementBlock as l, normalizeClass as v, renderSlot as g, createVNode as w, createCommentVNode as f, createElementVNode as c, toDisplayString as p, createBlock as b, normalizeStyle as E, mergeProps as z, withCtx as y, withModifiers as R, createTextVNode as I, Fragment as L, renderList as M, withKeys as le, createSlots as J, normalizeProps as Vt, guardReactiveProps as Ot, Teleport as U, Transition as q, readonly as Bt, reactive as Ve, Comment as Dt, Text as Ft, withDirectives as Oe, vShow as Be, resolveDynamicComponent as Q } from "vue";
import { RouterLink as Nt } from "vue-router";
const Ht = {
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
    ...ie(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, $t = ["disabled"], Wt = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, Yt = { class: "ui-action-card__content" }, Gt = { class: "ui-action-card__title" }, Ut = {
  key: 0,
  class: "ui-action-card__description"
};
function qt(e, t, r, n, s, i) {
  const u = k("ui-icon");
  return a(), l("button", {
    type: "button",
    class: v(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (d) => e.$emit("click", d))
  }, [
    g(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (a(), l("span", Wt, [
        w(u, {
          name: r.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : f("", !0)
    ]),
    c("span", Yt, [
      c("span", Gt, p(r.title), 1),
      r.description ? (a(), l("span", Ut, p(r.description), 1)) : f("", !0)
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
  ], 10, $t);
}
const jt = /* @__PURE__ */ x(Ht, [["render", qt]]), Kt = {
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
}, Zt = ["aria-label"];
function Xt(e, t, r, n, s, i) {
  return a(), l("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: E(i.listStyle)
  }, [
    g(e.$slots, "default")
  ], 12, Zt);
}
const Qt = /* @__PURE__ */ x(Kt, [["render", Xt]]), Jt = {
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
}, ei = ["data-size"], ti = { class: "ui-ai-button__surface" };
function ii(e, t, r, n, s, i) {
  const u = k("ui-button");
  return a(), l("span", {
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
    c("span", ti, [
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
  ], 14, ei);
}
const ri = /* @__PURE__ */ x(Jt, [["render", ii]]), ai = ["xs", "sm", "md", "lg", "xl"], ae = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, si = {
  name: "AvatarGroup",
  SIZE_CLASS: ae,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => ai.includes(e)
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
        ae[this.size] || ae.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, ni = ["aria-label"];
function li(e, t, r, n, s, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default"),
    r.overflowCount > 0 ? (a(), l("span", {
      key: 0,
      class: v(["ui-avatar-group-overflow", e.SIZE_CLASS[r.size] || e.SIZE_CLASS.md])
    }, p(i.overflowText), 3)) : f("", !0)
  ], 10, ni);
}
const oi = /* @__PURE__ */ x(si, [["render", li]]), ui = [
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
], ci = {
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
      presetColors: ui
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
}, di = ["disabled", "aria-expanded", "onClick"], hi = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, fi = { class: "ui-select-field-suffix" }, mi = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, pi = { class: "ui-color-picker-panel" }, gi = { class: "ui-color-picker-panel__header" }, yi = { class: "ui-color-picker-panel__title" }, bi = { class: "ui-color-picker-swatches" }, vi = ["title", "onClick"], _i = { class: "ui-color-picker-custom" }, ki = { class: "ui-color-picker-panel__title" }, wi = { class: "ui-color-picker-custom__row" };
function xi(e, t, r, n, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return a(), l("div", {
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
            c("span", hi, [
              i.localColor ? (a(), l("span", {
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
            c("span", fi, [
              c("span", mi, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, di)
        ])
      ]),
      content: y(() => [
        c("div", pi, [
          c("div", gi, [
            c("span", yi, p(i.popoverTitleLabel), 1),
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
          c("div", bi, [
            (a(!0), l(L, null, M(s.presetColors, (m) => (a(), l("button", {
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
            ], 14, vi))), 128))
          ]),
          c("div", _i, [
            c("span", ki, p(i.customColorLabelText), 1),
            c("div", wi, [
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
const Si = /* @__PURE__ */ x(ci, [["render", xi]]), ge = {
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
function re(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in $ ? t : "TRY";
  const r = String(e).trim();
  if (ge[r])
    return ge[r];
  const n = r.toUpperCase();
  return $[n] ? n : t in $ ? t : "TRY";
}
function De(e) {
  var r;
  const t = re(e);
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
function Qo(e, t, r = "tr-TR") {
  const n = Number(e) || 0, s = re(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: s }).format(n);
  } catch {
    return `${De(s)}${n.toFixed(2)}`;
  }
}
function Fe(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const n = t.slice(0, r), s = t.slice(r + 1).replace(/\./g, "");
    t = `${n}.${s}`;
  }
  return t;
}
function Ne(e = "tr-TR") {
  var t, r;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = n.find((s) => s.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((r = n.find((s) => s.type === "decimal")) == null ? void 0 : r.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function Ci(e, t = "tr-TR") {
  const { group: r, decimal: n } = Ne(t);
  let s = String(e ?? "").trim();
  return s ? (s = s.split(r).join(""), s = s.split(n).join("."), Fe(s)) : "";
}
function Ti(e, t = "tr-TR") {
  const r = Fe(e);
  if (!r) return "";
  const { group: n, decimal: s } = Ne(t), [i = "", u] = r.split("."), o = (i.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return u === void 0 ? o : `${o}${s}${u}`;
}
const Li = F("ui-currency-input"), Ii = ["sm", "md", "lg"], zi = {
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
      validator: (e) => e == null || Ii.includes(e)
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
    return { fallbackId: Li() };
  },
  computed: {
    displaySymbol() {
      return De(this.currency);
    },
    resolvedCurrencyCode() {
      return re(this.currency);
    },
    innerValue: {
      get() {
        return Ti(this.modelValue, this.locale);
      },
      set(e) {
        const t = Ci(e, this.locale);
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
}, Ai = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Mi(e, t, r, n, s, i) {
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
      c("span", Ai, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const He = /* @__PURE__ */ x(zi, [["render", Mi]]), Pi = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, n = Array.isArray(r) ? [...r] : [], s = n.findIndex((i) => Object.is(i, this.value));
        t && s === -1 ? n.push(this.value) : !t && s !== -1 && n.splice(s, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
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
}, Ei = ["type", "name", "value", "checked"], Ri = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Vi = { class: "ui-checkbox-body" }, Oi = {
  key: 0,
  class: "ui-checkbox-label"
}, Bi = {
  key: 1,
  class: "ui-checkbox-description"
};
function Di(e, t, r, n, s, i) {
  const u = k("ui-icon");
  return a(), l("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = le(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = le(R((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, Ei),
    c("span", Ri, [
      i.isChecked ? (a(), b(u, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    c("span", Vi, [
      e.$slots.label || r.label ? (a(), l("span", Oi, [
        g(e.$slots, "label", {}, () => [
          I(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (a(), l("span", Bi, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Fi = /* @__PURE__ */ x(Pi, [["render", Di]]), Ni = ["list", "button", "List", "Button"], Hi = ["vertical", "horizontal"], $i = F("ui-checkbox-group"), Wi = {
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
      validator: (e) => Ni.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Hi.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: $i() };
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
}, Yi = ["aria-label"];
function Gi(e, t, r, n, s, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, Yi);
}
const Ui = /* @__PURE__ */ x(Wi, [["render", Gi]]), qi = F("ui-daterangepicker");
function W(e) {
  return String(e).padStart(2, "0");
}
function O(e) {
  return `${e.getFullYear()}-${W(e.getMonth() + 1)}-${W(e.getDate())}`;
}
function j(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), n = Number(t[2]) - 1, s = Number(t[3]), i = new Date(r, n, s);
  return i.getFullYear() !== r || i.getMonth() !== n || i.getDate() !== s ? null : i;
}
function B(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function K(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function ji(e, t, r) {
  const { year: n, month: s, day: i } = parseIsoParts(e), d = new Date(n, s - 1, i).getDay(), o = d === 0 ? -6 : 1 - d, h = new Date(n, s - 1, i + o), m = O(h), _ = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 6);
  let C = O(_);
  if (t && C > t && (C = t), r && m < r && C < r) return null;
  let T = m;
  return r && T < r && (T = r), B(T, C) > 0 ? null : [T, C];
}
function Ki(e, t, r) {
  const { year: n } = parseIsoParts(e), s = `${n}-01-01`;
  let i = `${n}-12-31`;
  if (t && i > t && (i = t), r && s < r && i < r) return null;
  let u = s;
  return r && u < r && (u = r), B(u, i) > 0 ? null : [u, i];
}
function ye(e, t, r, n) {
  const s = `${e}-${W(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let u = `${e}-${W(t + 1)}-${W(i)}`;
  if (r && u > r && (u = r), n && s < n && u < n) return null;
  let d = s;
  return n && d < n && (d = n), B(d, u) > 0 ? null : [d, u];
}
const Zi = {
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
    var r, n;
    const e = ((r = this.modelValue) == null ? void 0 : r[0]) || "", t = j(e) || j((n = this.modelValue) == null ? void 0 : n[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: qi(),
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Ae() : !1
    };
  },
  mounted() {
    typeof window > "u" || (this._viewportMq = window.matchMedia(Ue), this._onViewportMq = () => {
      this.narrowViewport = this._viewportMq.matches;
    }, this._onViewportMq(), typeof this._viewportMq.addEventListener == "function" ? this._viewportMq.addEventListener("change", this._onViewportMq) : typeof this._viewportMq.addListener == "function" && this._viewportMq.addListener(this._onViewportMq));
  },
  beforeUnmount() {
    !this._viewportMq || !this._onViewportMq || (typeof this._viewportMq.removeEventListener == "function" ? this._viewportMq.removeEventListener("change", this._onViewportMq) : typeof this._viewportMq.removeListener == "function" && this._viewportMq.removeListener(this._onViewportMq));
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
      return Ge((e = this.$i18n) == null ? void 0 : e.locale);
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
      const e = /* @__PURE__ */ new Date(), t = O(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const n = O(r), s = new Date(e);
      s.setDate(s.getDate() + 1);
      const i = O(s), u = e.getMonth(), d = e.getFullYear(), o = new Date(d, u - 1, 1), h = o.getFullYear(), m = o.getMonth(), _ = (T, P) => typeof this.$t == "function" ? this.$t(T, P) : T;
      return [
        {
          key: "today",
          label: _("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: _("ui.dateRangePicker.yesterday"),
          range: [n, n]
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
            month: K(d, u, this.locale)
          }),
          range: ye(d, u, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: _("ui.dateRangePicker.lastMonth", {
            month: K(h, m, this.locale)
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
      if (this.narrowViewport)
        return [
          {
            key: "single",
            year: this.viewYear,
            month: this.viewMonth,
            showPrev: !0,
            showNext: !0,
            title: K(this.viewYear, this.viewMonth, this.locale),
            cells: this.buildCellsForMonth(this.viewYear, this.viewMonth)
          }
        ];
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
        title: K(r.year, r.month, this.locale),
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
      const e = j(this.startYmd) || j(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = Ye(void 0, "dateRangeFormat"), n = (s) => s ? qe(s, this.locale, r) || s : "…";
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? n(e || t) : `${n(e)} – ${n(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), n = new Date(e, t, 1 - r.getDay()), s = this.previewStart, i = this.previewEnd, u = s && i, d = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(n.getFullYear(), n.getMonth(), n.getDate() + o), m = h.getMonth() === t && h.getFullYear() === e, _ = h.getDate(), C = O(h), T = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, P = O(/* @__PURE__ */ new Date()) === C, D = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let de = !1, he = !1;
        if (u) {
          const fe = B(s, i) <= 0 ? s : i, me = B(s, i) <= 0 ? i : s;
          de = B(C, fe) >= 0 && B(C, me) <= 0, he = C === fe || C === me;
        }
        d.push({
          key: T,
          d: _,
          date: h,
          today: P,
          inMonth: m,
          disabled: D,
          inRange: de,
          endpoint: he
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = O(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, n] = e.range;
      this.pickingStart = r, this.pickingEnd = n, this.$emit("update:modelValue", [r, n]), this.$emit("change", [r, n]), t();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [t, r] = e.range;
      return this.startYmd === t && this.endYmd === r;
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = O(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, s = r;
      if (B(s, n) < 0) {
        const i = n;
        n = s, s = i;
      }
      this.pickingStart = n, this.pickingEnd = s, this.$emit("update:modelValue", [n, s]), this.$emit("change", [n, s]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Xi = { class: "min-w-0 flex-1 truncate text-foreground" }, Qi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Ji = { class: "ui-daterangepicker-layout" }, er = ["aria-label"], tr = { class: "ui-daterangepicker-calendars" }, ir = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, rr = { class: "ui-daterangepicker-month-row" }, ar = { class: "mb-2 flex items-center justify-between gap-2" }, sr = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, nr = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, lr = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, or = { class: "ui-datepicker-grid" };
function ur(e, t, r, n, s, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), l("div", {
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
              c("span", Xi, p(i.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(({ close: o }) => [
        c("div", Qi, [
          c("div", Ji, [
            i.quickPresets.length ? (a(), l("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (a(!0), l(L, null, M(i.quickPresets, (h) => (a(), b(u, {
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
            ], 8, er)) : f("", !0),
            c("div", tr, [
              i.rangeHint ? (a(), l("p", ir, p(i.rangeHint), 1)) : f("", !0),
              c("div", rr, [
                (a(!0), l(L, null, M(i.calendarPanes, (h) => (a(), l("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", ar, [
                    h.showPrev ? (a(), b(u, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = R((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", sr)),
                    c("span", nr, p(h.title), 1),
                    h.showNext ? (a(), b(u, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = R((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (a(), l("span", lr))
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
                  c("div", or, [
                    (a(!0), l(L, null, M(h.cells, (m) => (a(), b(u, {
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
const cr = /* @__PURE__ */ x(Zi, [["render", ur]]), dr = {
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
    ...ie(),
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
}, hr = {
  key: 0,
  class: "ui-field__title-row"
}, fr = {
  key: 1,
  class: "ui-field__title"
}, mr = {
  key: 2,
  class: "ui-field__subtitle"
};
function pr(e, t, r, n, s, i) {
  const u = k("ui-icon");
  return a(), l("div", z({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (a(), l("div", hr, [
      i.showIcon ? (a(), l("span", {
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
      r.title ? (a(), l("span", fr, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (a(), l("div", {
      key: 1,
      class: v(["ui-field__value", r.fill ? "mt-auto" : void 0])
    }, [
      g(e.$slots, "default")
    ], 2)) : f("", !0),
    r.subtitle ? (a(), l("p", mr, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const gr = /* @__PURE__ */ x(dr, [["render", pr]]), yr = ["popover", "dialog"], br = ["sm", "md", "lg"], vr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], _r = {
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
      validator: (e) => yr.includes(e)
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
      validator: (e) => br.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => vr.includes(e)
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
}, kr = { class: "ui-field-action-header" }, wr = { class: "ui-field-action-header__text" }, xr = {
  key: 0,
  class: "ui-field-action-header__title"
}, Sr = {
  key: 1,
  class: "ui-field-action-header__description"
}, Cr = { class: "ui-field-action-body" }, Tr = { class: "ui-field-action-body" }, Lr = { class: "ui-field-action-footer" };
function Ir(e, t, r, n, s, i) {
  const u = k("ui-button"), d = k("ui-popover"), o = k("ui-dialog");
  return a(), l("div", {
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
    }, J({
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
        c("div", Cr, [
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
            c("div", kr, [
              c("div", wr, [
                r.title ? (a(), l("p", xr, p(r.title), 1)) : f("", !0),
                r.description ? (a(), l("p", Sr, p(r.description), 1)) : f("", !0)
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
    ]), 1032, ["open", "placement", "width", "disabled", "mobile-centered"])) : (a(), l(L, { key: 1 }, [
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
      }, J({
        default: y(() => [
          c("div", Tr, [
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
              c("div", Lr, [
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
const zr = /* @__PURE__ */ x(_r, [["render", Ir]]), Ar = ["auto", "file", "folder"], Mr = ["sm", "md", "lg"], Pr = { icon: "folder", color: "text-sky-500" }, Er = { icon: "file-lines", color: "text-muted-foreground" }, Rr = {
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
function ee(e) {
  return String(e ?? "").trim();
}
function Vr(e) {
  const t = ee(e);
  return /[/\\]\s*$/.test(t);
}
function $e(e) {
  const t = ee(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function Or(e) {
  const t = $e(e), r = t.lastIndexOf(".");
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
}, Br = {
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
      validator: (e) => Ar.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Mr.includes(e)
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
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Vr(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = ee(this.name);
      return e ? this.basenameOnly ? $e(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return ee(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Pr;
      const e = Or(this.name);
      return Rr[e] || Er;
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
}, Dr = ["aria-label"], Fr = ["title"];
function Nr(e, t, r, n, s, i) {
  const u = k("ui-icon");
  return a(), l("div", {
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
    r.hideLabel ? f("", !0) : (a(), l("span", {
      key: 0,
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Fr))
  ], 10, Dr);
}
const Hr = /* @__PURE__ */ x(Br, [["render", Nr]]);
function $r(e) {
  const t = e.filter((u) => u && (u.width > 0 || u.height > 0));
  if (!t.length) return null;
  const r = Math.min(...t.map((u) => u.top)), n = Math.min(...t.map((u) => u.left)), s = Math.max(...t.map((u) => u.right)), i = Math.max(...t.map((u) => u.bottom));
  return {
    top: r,
    left: n,
    right: s,
    bottom: i,
    width: s - n,
    height: i - r,
    x: n,
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
    ].filter((s) => s instanceof HTMLElement), n = $r(r.map((s) => s.getBoundingClientRect()));
    if (n) return n;
  }
  return t.getBoundingClientRect();
}
function Wr(e) {
  var r;
  if (!((r = e == null ? void 0 : e.classList) != null && r.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && t.push(n);
  return t;
}
const Yr = ["dialog", "popover", "card", "tour"], Gr = [
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
], Ur = ["sm", "md", "lg", "xl", "2xl", "full"], V = 12, qr = 8, jr = {
  name: "Guidance",
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Yr.includes(e)
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
      validator: (e) => Gr.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: qr
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => Ur.includes(e)
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
    ...ie(),
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
      const n = window.innerWidth, s = window.innerHeight, i = r.getBoundingClientRect(), u = i.width || 320, d = i.height || 180;
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
      const h = Math.max(0, Number(this.targetPadding) || 0), m = Math.max(0, o.top - h), _ = Math.max(0, o.left - h), C = Math.min(s, o.bottom + h), T = Math.min(n, o.right + h);
      this.tourHighlightStyle = {
        top: `${m}px`,
        left: `${_}px`,
        width: `${Math.max(0, T - _)}px`,
        height: `${Math.max(0, C - m)}px`
      };
      let P = C + V, D = _;
      this.placement.startsWith("top") ? P = m - d - V : this.placement.startsWith("right") ? (P = m, D = T + V) : this.placement.startsWith("left") ? (P = m, D = _ - u - V) : this.placement.includes("end") && (D = T - u), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && P + d > s - V && (P = m - d - V), P = Math.max(V, Math.min(P, s - d - V)), D = Math.max(V, Math.min(D, n - u - V)), this.tourPanelStyle = {
        position: "fixed",
        top: `${P}px`,
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
          for (const r of Wr(t))
            this.tourResizeObserver.observe(r);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Kr = { class: "ui-guidance-footer" }, Zr = { class: "ui-guidance-popover" }, Xr = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, Qr = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Jr = { class: "ui-guidance-popover__text" }, ea = {
  key: 0,
  class: "ui-guidance-popover__title"
}, ta = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, ia = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, ra = ["aria-label"], aa = { class: "ui-guidance-tour__content" }, sa = { class: "ui-header-lead" }, na = { class: "ui-header-lead__main" }, la = {
  key: 0,
  class: "ui-header-lead__icon"
}, oa = { class: "ui-header-lead__text" }, ua = {
  key: 0,
  class: "ui-guidance-tour__title"
}, ca = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, da = {
  key: 0,
  class: "ui-header-lead__actions"
}, ha = {
  key: 0,
  class: "ui-guidance-tour__body"
}, fa = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function ma(e, t, r, n, s, i) {
  const u = k("ui-button"), d = k("ui-card"), o = k("ui-dialog"), h = k("ui-icon"), m = k("ui-popover");
  return i.shouldRender ? (a(), l("div", {
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
    }, J({
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
    }, J({
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
        g(e.$slots, "trigger", Vt(Ot(_)))
      ]),
      content: y(() => [
        c("div", Zr, [
          r.icon || r.title || r.description ? (a(), l("div", Xr, [
            r.icon ? (a(), l("span", Qr, [
              w(h, {
                name: r.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Jr, [
              r.title ? (a(), l("p", ea, p(r.title), 1)) : f("", !0),
              r.description ? (a(), l("p", ta, p(r.description), 1)) : f("", !0)
            ])
          ])) : f("", !0),
          g(e.$slots, "default"),
          i.hasFooterActions && !e.$slots.footer ? (a(), l("div", ia, [
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
      w(q, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (_) => e.$emit("after-leave"))
      }, {
        default: y(() => [
          i.syncOpen ? (a(), l("div", {
            key: 0,
            class: v(["ui-guidance-tour", { "ui-guidance-tour--has-target": s.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = le((..._) => i.onEscape && i.onEscape(..._), ["esc"]))
          }, [
            r.closeOnBackdrop ? (a(), l("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (..._) => i.onBackdrop && i.onBackdrop(..._))
            })) : f("", !0),
            s.tourHighlightStyle ? (a(), l("div", {
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
              c("div", aa, [
                c("div", sa, [
                  c("div", na, [
                    r.icon ? (a(), l("span", la, [
                      w(h, {
                        name: r.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : f("", !0),
                    c("div", oa, [
                      r.title ? (a(), l("p", ua, p(r.title), 1)) : f("", !0),
                      r.description ? (a(), l("p", ca, p(r.description), 1)) : f("", !0)
                    ])
                  ]),
                  r.showClose ? (a(), l("div", da, [
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
                e.$slots.default ? (a(), l("div", ha, [
                  g(e.$slots, "default")
                ])) : f("", !0),
                i.hasFooterActions && !e.$slots.footer ? (a(), l("div", fa, [
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
            ], 12, ra)
          ], 34)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 2)) : f("", !0);
}
const pa = /* @__PURE__ */ x(jr, [["render", ma]]), ga = {
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
    ...ie(),
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
      const n = Number(this.maxResults);
      return Number.isFinite(n) && n > 0 ? r.slice(0, n) : r;
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
}, ya = ["disabled", "aria-expanded", "onClick"], ba = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, va = { class: "ui-select-field-suffix" }, _a = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ka = { class: "ui-icon-picker-panel" }, wa = { class: "ui-icon-picker-panel__header" }, xa = { class: "ui-icon-picker-panel__title" }, Sa = { class: "ui-icon-picker-panel__search" }, Ca = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Ta = {
  key: 1,
  class: "ui-icon-picker-grid"
}, La = ["title", "onClick"];
function Ia(e, t, r, n, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("ui-input"), h = k("ui-popover");
  return a(), l("div", {
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
            c("span", ba, [
              w(u, {
                name: i.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            c("span", {
              class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
            }, p(i.localIcon || i.triggerLabel), 3),
            c("span", va, [
              c("span", _a, [
                w(u, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, ya)
        ])
      ]),
      content: y(() => [
        c("div", ka, [
          c("div", wa, [
            c("span", xa, p(i.popoverTitleLabel), 1),
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
          c("div", Sa, [
            w(o, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (a(), l("div", Ta, [
            (a(!0), l(L, null, M(i.filteredIcons, (m) => (a(), l("button", {
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
            ], 10, La))), 128))
          ])) : (a(), l("div", Ca, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const za = /* @__PURE__ */ x(ga, [["render", Ia]]), Aa = 56, Ma = 1.15, Pa = 0.28, Ea = {
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
      return Me(this.$attrs);
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
      const n = e - this.startX, s = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(n) < 8 && Math.abs(s) < 8) return;
        if (this.lockedAxis = Math.abs(n) > Math.abs(s) * Ma ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (o = r == null ? void 0 : r.preventDefault) == null || o.call(r);
      const i = this.activeIndex === 0, u = this.activeIndex === this.lastIndex;
      let d = n;
      (i && d > 0 || u && d < 0) && (d *= Pa), this.dragOffset = d;
    },
    commitDrag(e, t) {
      var h;
      const r = e - this.startX, n = Math.max(1, t - this.startAt), s = r / n, i = ((h = this.$refs.viewport) == null ? void 0 : h.clientWidth) || 0, u = Math.max(Aa, i * 0.18), d = this.lockedAxis === "x" && (Math.abs(r) >= u || Math.abs(s) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !d) return;
      if (this.isRtl() ? r > 0 : r < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, Ra = ["aria-modal", "aria-label", "aria-roledescription"], Va = { class: "ui-intro__header" }, Oa = ["aria-hidden"], Ba = {
  key: 0,
  class: "ui-intro__icon"
}, Da = {
  key: 1,
  class: "ui-intro__title"
}, Fa = {
  key: 2,
  class: "ui-intro__description"
}, Na = { class: "ui-intro__footer" }, Ha = ["aria-label"], $a = ["aria-selected", "aria-label", "onClick"];
function Wa(e, t, r, n, s, i) {
  const u = k("ui-button"), d = k("ui-icon");
  return a(), b(U, {
    to: "body",
    disabled: !r.overlay
  }, [
    w(q, { name: "ui-intro-shell" }, {
      default: y(() => [
        i.isVisible ? (a(), l("div", z({
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
          c("div", Va, [
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
              (a(!0), l(L, null, M(i.normalizedSteps, (o, h) => (a(), l("div", {
                key: o.key,
                class: "ui-intro__slide",
                "aria-hidden": h === i.activeIndex ? void 0 : "true"
              }, [
                g(e.$slots, "default", {
                  step: o,
                  index: h,
                  active: h === i.activeIndex
                }, () => [
                  o.icon ? (a(), l("span", Ba, [
                    w(d, {
                      name: o.icon,
                      type: o.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  o.title ? (a(), l("h2", Da, p(o.title), 1)) : f("", !0),
                  o.description ? (a(), l("p", Fa, p(o.description), 1)) : f("", !0)
                ])
              ], 8, Oa))), 128))
            ], 6)
          ], 544),
          c("div", Na, [
            g(e.$slots, "footer", {
              index: i.activeIndex,
              isLast: i.isLastStep,
              goNext: i.goNext,
              goPrev: i.goPrev,
              goTo: i.goTo
            }, () => [
              i.normalizedSteps.length > 1 ? (a(), l("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": i.resolvedAriaLabel
              }, [
                (a(!0), l(L, null, M(i.normalizedSteps, (o, h) => (a(), l("button", {
                  key: o.key,
                  type: "button",
                  class: v(["ui-intro__dot", { "ui-intro__dot--active": h === i.activeIndex }]),
                  role: "tab",
                  "aria-selected": h === i.activeIndex,
                  "aria-label": o.ariaLabel || o.title || String(h + 1),
                  onClick: (m) => i.goTo(h)
                }, null, 10, $a))), 128))
              ], 8, Ha)) : f("", !0),
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
        ], 16, Ra)) : f("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const Ya = /* @__PURE__ */ x(Ea, [["render", Wa]]), Ga = ["sm", "md", "lg", "xl", "2xl"], Ua = ["default", "foreground", "muted", "success", "destructive", "primary"], qa = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ga.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Ua.includes(e)
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
function ja(e, t, r, n, s, i) {
  return a(), l("span", {
    class: v(["ui-price-text", i.rootClass])
  }, [
    g(e.$slots, "default", {}, () => [
      I(p(r.value), 1)
    ])
  ], 2);
}
const ce = /* @__PURE__ */ x(qa, [["render", ja]]), Ka = ["sm", "md", "lg"], Za = ["sm", "md", "lg", "xl", "2xl"], Xa = ["default", "foreground", "muted", "success", "destructive", "primary"], Qa = {
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
      validator: (e) => Za.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Xa.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, Ja = { class: "ui-price-display__label" };
function es(e, t, r, n, s, i) {
  const u = k("ui-price-text");
  return a(), l("div", {
    class: v(["ui-price-display", i.rootClass])
  }, [
    c("span", Ja, p(r.label), 1),
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
const ts = /* @__PURE__ */ x(Qa, [["render", es]]), is = ["sm", "md", "lg"], rs = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => is.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function as(e, t, r, n, s, i) {
  return a(), l("div", {
    class: v(["ui-price-display-group", i.rootClass])
  }, [
    g(e.$slots, "default")
  ], 2);
}
const ss = /* @__PURE__ */ x(rs, [["render", as]]), ns = ["sm", "md", "lg", "xl", "2xl"], ls = ["default", "foreground", "muted", "success", "destructive", "primary"], os = {
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
      validator: (e) => ns.includes(e)
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
}, us = { class: "ui-price-display-row__label" };
function cs(e, t, r, n, s, i) {
  const u = k("ui-price-text");
  return a(), l("div", {
    class: v(["ui-price-display-row", i.rootClass])
  }, [
    c("span", us, p(r.label), 1),
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
const ds = /* @__PURE__ */ x(os, [["render", cs]]), hs = ["tr-TR", "en-US"], te = Ve({
  currency: "TRY",
  format: "tr-TR"
});
function fs(e, t = te.format) {
  return hs.includes(e) ? e : t;
}
function ms(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (te.currency = re(e.currency));
  const t = e.format ?? e.locale;
  t != null && (te.format = fs(t));
}
function ps() {
  return Bt(te);
}
const gs = {
  name: "PriceInput",
  components: { CurrencyInput: He },
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
    return { priceInputConfig: ps() };
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
function ys(e, t, r, n, s, i) {
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
const bs = /* @__PURE__ */ x(gs, [["render", ys]]);
function vs(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const n = Math.min(4, Math.round(r)), s = ["weak", "fair", "good", "strong"], i = n <= 0 ? "weak" : s[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: i
  };
}
const _s = F("ui-password"), ks = ["sm", "md", "lg"], ws = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || ks.includes(e)
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
    const e = _s(), t = e.slice(12);
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
      return vs(this.modelValue);
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
}, xs = ["aria-label", "aria-pressed", "disabled"], Ss = ["id", "aria-live"];
function Cs(e, t, r, n, s, i) {
  const u = k("ui-icon"), d = k("ui-input"), o = k("ui-progress");
  return a(), l("div", {
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
        ], 8, xs)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (a(), l("div", {
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
      i.strength.label !== "empty" ? (a(), l("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, Ss)) : f("", !0)
  ], 2);
}
const Ts = /* @__PURE__ */ x(ws, [["render", Cs]]), Ls = ["bar", "circle"], ke = ["sm", "md", "lg", "xl", "2xl"], we = ["thin", "md"], Is = ["default", "weak", "fair", "good", "strong"], Z = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, zs = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, As = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Ls.includes(e)
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
      validator: (e) => Is.includes(e)
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
      const e = Z[this.circleSizeKey] ?? Z.sm;
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
      const e = Z[this.circleSizeKey] ?? Z.sm, t = zs[this.circleSizeKey] ?? 2, r = (e - t) / 2, n = e / 2, s = 2 * Math.PI * r, i = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: n, circumference: s, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ms = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Ps = ["width", "height", "viewBox"], Es = ["cx", "cy", "r", "stroke-width"], Rs = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Vs = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Os(e, t, r, n, s, i) {
  return a(), l("div", {
    class: v(i.rootClass),
    style: E(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (a(), l("svg", {
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
      }, null, 8, Es),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Rs)
    ], 8, Ps)) : (a(), l("div", Vs, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: E({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Ms);
}
const Bs = /* @__PURE__ */ x(As, [["render", Os]]), Ds = F("ui-sheet"), Fs = ["left", "right"], Ns = ["sm", "md", "lg", "xl"], Hs = ["solid", "regular", "brands", "light", "duotone", "thin"], xe = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, $s = {
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
      validator: (e) => Fs.includes(e)
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
      validator: (e) => Ns.includes(e)
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
      validator: (e) => e == null || Hs.includes(e)
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
    const e = Ds();
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
      return Me(this.$attrs, ["class"]);
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
        Ee(e) || (this.focusFallbackTimer = setTimeout(() => {
          var r;
          this.focusFallbackTimer = null, (r = e.focus) == null || r.call(e);
        }, 50));
      });
    }
  }
}, Ws = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Ys = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Gs = ["id"], Us = {
  key: 1,
  class: "ui-sheet-header__icon"
}, qs = {
  key: 2,
  class: "ui-sheet-header__actions"
}, js = ["id"], Ks = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Zs(e, t, r, n, s, i) {
  const u = k("ui-icon"), d = k("ui-button"), o = k("Divider");
  return s.portalReady ? (a(), b(U, {
    key: 0,
    to: "body"
  }, [
    w(q, {
      name: i.transitionName,
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: y(() => [
        r.open ? (a(), l("div", {
          key: 0,
          ref: "layerRef",
          class: v(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          r.overlay ? (a(), l("div", {
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
            i.hasHeaderBlock ? (a(), l("div", Ys, [
              g(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (a(), l("div", {
                  key: 0,
                  class: v(["ui-sheet-header", { "ui-sheet-header--no-icon": !r.icon }])
                }, [
                  r.title ? (a(), l("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(r.title), 9, Gs)) : f("", !0),
                  r.icon ? (a(), l("span", Us, [
                    w(u, {
                      name: r.icon,
                      type: i.resolvedIconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), l("div", qs, [
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
                  r.description ? (a(), l("p", {
                    key: 4,
                    id: s.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(r.description), 9, js)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), l("div", Ks, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (a(), b(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), l("div", {
              key: 3,
              class: v(["ui-card-body ui-text-default", {
                "ui-card-body--flush": r.bodyPadding === "none",
                "ui-card-body--flex": r.bodyLayout === "flex"
              }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), l("div", {
              key: 4,
              class: v(["ui-card-footer", { "ui-sheet-footer--borderless": !r.footerBorder }])
            }, [
              g(e.$slots, "footer")
            ], 2)) : f("", !0)
          ], 16, Ws)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Xs = /* @__PURE__ */ x($s, [["render", Zs]]), Qs = ["sm", "md", "lg", "full"], Se = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Js = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Qs.includes(e)
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
}, en = {
  key: 0,
  class: "ui-menu-header"
}, tn = { class: "ui-menu-body" }, rn = {
  key: 1,
  class: "ui-menu-footer"
};
function an(e, t, r, n, s, i) {
  return a(), l("nav", z({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (a(), l("div", en, [
      g(e.$slots, "header")
    ])) : f("", !0),
    c("div", tn, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (a(), l("div", rn, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const sn = /* @__PURE__ */ x(Js, [["render", an]]), nn = {
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
}, ln = {
  key: 0,
  class: "ui-menu-group-label"
}, on = { class: "ui-menu-group-items" };
function un(e, t, r, n, s, i) {
  return a(), l("div", z({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (a(), l("p", ln, p(r.label), 1)) : f("", !0),
    c("div", on, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const cn = /* @__PURE__ */ x(nn, [["render", un]]), dn = {
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
function hn(e, t, r, n, s, i) {
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
const fn = /* @__PURE__ */ x(dn, [["render", hn]]), mn = {
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
}, pn = ["aria-label"];
function gn(e, t, r, n, s, i) {
  return a(), l("div", z({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, pn);
}
const yn = /* @__PURE__ */ x(mn, [["render", gn]]), bn = ["sm", "md", "lg"], vn = ["button", "submit", "reset"], Ce = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Te = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, _n = {
  name: "SidebarItem",
  components: { RouterLink: Nt },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => vn.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || bn.includes(e)
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
      if (e == null || typeof e != "object" || e.type === Dt) return !1;
      if (e.type === Ft)
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
}, kn = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], wn = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, xn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Sn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Cn = ["type", "disabled", "aria-current"], Tn = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Ln = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, In = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function zn(e, t, r, n, s, i) {
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
        i.usesCubedCenterLayout ? (a(), l("span", wn, [
          r.prefixIcon ? (a(), b(u, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (a(), l(L, { key: 1 }, [
          r.prefixIcon ? (a(), l("span", xn, [
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
          r.suffixIcon ? (a(), l("span", Sn, [
            w(u, {
              size: i.inlineIconSize,
              name: r.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 16, kn)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), l("button", z({
    key: 1,
    type: r.nativeType,
    class: i.itemClasses,
    disabled: r.disabled || void 0,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.onClick && i.onClick(...o))
  }), [
    i.usesCubedCenterLayout ? (a(), l("span", Tn, [
      r.prefixIcon ? (a(), b(u, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (a(), b(u, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (a(), l(L, { key: 1 }, [
      r.prefixIcon ? (a(), l("span", Ln, [
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
      r.suffixIcon ? (a(), l("span", In, [
        w(u, {
          size: i.inlineIconSize,
          name: r.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 16, Cn));
}
const An = /* @__PURE__ */ x(_n, [["render", zn]]), Mn = {
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
      !this.autofocus || !this.active || Ae() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Ee(e);
        });
      });
    }
  }
}, Pn = {
  ref: "root",
  class: "ui-step"
};
function En(e, t, r, n, s, i) {
  return Oe((a(), l("div", Pn, [
    g(e.$slots, "default")
  ], 512)), [
    [Be, r.active]
  ]);
}
const Rn = /* @__PURE__ */ x(Mn, [["render", En]]), Vn = ["horizontal", "vertical"], On = ["default", "pills"], Bn = {
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
      validator: (e) => On.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Vn.includes(e)
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
}, Dn = ["aria-label"], Fn = { class: "ui-stepper-pills-track" }, Nn = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Hn = { class: "flex w-full min-w-0 items-center justify-center" }, $n = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Wn = {
  key: 1,
  class: "tabular-nums"
}, Yn = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Gn = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Un = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, qn = { class: "flex flex-col items-center" }, jn = {
  key: 1,
  class: "tabular-nums"
}, Kn = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Zn = { class: "ui-stepper-title" }, Xn = {
  key: 0,
  class: "ui-stepper-description"
};
function Qn(e, t, r, n, s, i) {
  const u = k("ui-icon");
  return a(), l("div", z({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (a(), l(L, { key: 0 }, [
      c("div", Fn, [
        (a(!0), l(L, null, M(i.normalizedSteps, (d, o) => (a(), b(Q(r.interactive ? "button" : "span"), z({
          key: o,
          class: ["ui-stepper-pill", i.pillClass(o)],
          role: "listitem",
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (a(), l("p", Nn, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (a(!0), l(L, { key: 1 }, M(i.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Hn, [
        o > 0 ? (a(), l("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", $n)),
        (a(), b(Q(r.interactive ? "button" : "div"), z({
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
            }, null, 8, ["name", "type"])) : (a(), l("span", Wn, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (a(), l("span", Yn))
      ]),
      c("p", Gn, p(d.title), 1),
      d.description ? (a(), l("p", Un, p(d.description), 1)) : f("", !0)
    ]))), 128)) : (a(!0), l(L, { key: 2 }, M(i.normalizedSteps, (d, o) => (a(), l("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", qn, [
        (a(), b(Q(r.interactive ? "button" : "div"), z({
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
            }, null, 8, ["name", "type"])) : (a(), l("span", jn, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (a(), l("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", Kn, [
        c("p", Zn, p(d.title), 1),
        d.description ? (a(), l("p", Xn, p(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Dn);
}
const Jn = /* @__PURE__ */ x(Bn, [["render", Qn]]), el = F("ui-slider"), tl = {
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
    return { fallbackId: el() };
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
}, il = {
  key: 0,
  class: "ui-slider-header"
}, rl = {
  key: 0,
  class: "ui-form-label"
}, al = {
  key: 1,
  class: "ui-slider-value"
}, sl = { class: "ui-slider-rail" }, nl = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], ll = {
  key: 1,
  class: "ui-slider-scale"
}, ol = { key: 0 }, ul = { key: 1 };
function cl(e, t, r, n, s, i) {
  const u = k("ui-progress");
  return a(), l("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (a(), l("div", il, [
      r.label ? (a(), l("span", rl, p(r.label), 1)) : f("", !0),
      i.hasValue ? (a(), l("span", al, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", sl, [
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
      }), null, 16, nl)
    ]),
    r.minLabel || r.maxLabel ? (a(), l("div", ll, [
      r.minLabel ? (a(), l("span", ol, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (a(), l("span", ul, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const dl = /* @__PURE__ */ x(tl, [["render", cl]]), hl = {
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
}, fl = { class: "ui-table-scroll" };
function ml(e, t, r, n, s, i) {
  return a(), l("div", fl, [
    c("table", z({ class: i.rootClass }, i.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const pl = /* @__PURE__ */ x(hl, [["render", ml]]), gl = {
  name: "TableBody"
}, yl = { class: "ui-table-body" };
function bl(e, t, r, n, s, i) {
  return a(), l("tbody", yl, [
    g(e.$slots, "default")
  ]);
}
const vl = /* @__PURE__ */ x(gl, [["render", bl]]), _l = ["left", "center", "right"], kl = ["title", "secondary", "body"], wl = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => _l.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || kl.includes(e)
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
}, xl = ["colspan"];
function Sl(e, t, r, n, s, i) {
  return a(), l("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, xl);
}
const Cl = /* @__PURE__ */ x(wl, [["render", Sl]]), Tl = ["left", "center", "right"], Ll = ["sm", "md", "lg"], Il = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Tl.includes(e)
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
      if (!(this.iconCol || Ll.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function zl(e, t, r, n, s, i) {
  return a(), l("th", {
    class: v(i.rootClass),
    style: E(i.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const Al = /* @__PURE__ */ x(Il, [["render", zl]]), Ml = {
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
function Pl(e, t, r, n, s, i) {
  return a(), l("thead", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const El = /* @__PURE__ */ x(Ml, [["render", Pl]]), Rl = {
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
}, Vl = { class: "ui-table-pagination" }, Ol = { class: "ui-table-pagination-meta" }, Bl = { class: "ui-table-pagination-nav" }, Dl = { class: "ui-table-pagination-page" };
function Fl(e, t, r, n, s, i) {
  const u = k("ui-button");
  return a(), l("div", Vl, [
    c("div", Ol, [
      g(e.$slots, "meta", {}, () => [
        I(p(r.metaText), 1)
      ])
    ]),
    c("div", Bl, [
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
      c("div", Dl, p(r.pageLabel), 1),
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
const Nl = /* @__PURE__ */ x(Rl, [["render", Fl]]), Hl = ["none", "soft", "strong"], $l = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Hl.includes(e)
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
function Wl(e, t, r, n, s, i) {
  return a(), l("tr", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Yl = /* @__PURE__ */ x($l, [["render", Wl]]), Gl = {
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
}, Ul = ["id", "aria-labelledby"];
function ql(e, t, r, n, s, i) {
  return Oe((a(), l("div", z({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Ul)), [
    [Be, i.isActive]
  ]);
}
const jl = /* @__PURE__ */ x(Gl, [["render", ql]]);
function H(e) {
  return String(e).padStart(2, "0");
}
function We(e, t = "HH:mm") {
  const r = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!r) return String(e || "");
  const n = Number(r[1]), s = Number(r[2]);
  if (!Number.isFinite(n) || !Number.isFinite(s))
    return String(e || "");
  if (t === "HH:mm")
    return `${H(n)}:${H(s)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const i = n >= 12 ? "PM" : "AM";
    return `${n % 12 || 12}:${H(s)} ${i}`;
  }
  return `${H(n)}:${H(s)}`;
}
function Kl(e, t, r = "HH:mm") {
  return We(`${e}:${t}`, r);
}
const Zl = F("ui-timepicker"), se = 40;
function ne(e) {
  return String(e).padStart(2, "0");
}
const Xl = {
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
      fallbackId: Zl(),
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
      return this.menuOpen ? Kl(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? We(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
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
    pad2: ne,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (t = Math.min(23, Math.max(0, parseInt(n[1], 10))), r = Math.min(59, Math.max(0, parseInt(n[2], 10))));
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
      const n = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, i = Math.round((s - n - r / 2) / r);
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
      const e = `${ne(this.draftHour)}:${ne(this.draftMinute)}`;
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
}, Ql = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, Jl = { class: "ui-timepicker-wheels" }, eo = { class: "ui-timepicker-wheels-row" }, to = ["aria-valuenow", "aria-label"], io = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, ro = { class: "ui-timepicker-wheel-spacer" }, ao = ["onClick"], so = ["aria-valuenow", "aria-label"], no = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, lo = { class: "ui-timepicker-wheel-spacer" }, oo = ["onClick"], uo = { class: "min-w-0 flex-1 truncate text-foreground" }, co = { class: "ui-timepicker-panel w-full p-2" }, ho = { class: "ui-timepicker-wheels" }, fo = { class: "ui-timepicker-wheels-row" }, mo = ["aria-valuenow", "aria-label"], po = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, go = { class: "ui-timepicker-wheel-spacer" }, yo = ["onClick"], bo = ["aria-valuenow", "aria-label"], vo = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, _o = { class: "ui-timepicker-wheel-spacer" }, ko = ["onClick"];
function wo(e, t, r, n, s, i) {
  const u = k("ui-button"), d = k("ui-popover");
  return a(), l("div", {
    class: v([
      "ui-timepicker",
      r.embedded ? "ui-timepicker--embedded" : "",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    r.embedded ? (a(), l("div", Ql, [
      c("div", Jl, [
        t[2] || (t[2] = c("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        c("div", eo, [
          c("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            "aria-valuenow": s.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": i.hourAriaLabel
          }, [
            c("div", io, [
              c("div", ro, [
                (a(!0), l(L, null, M(i.hourOptions, (o) => (a(), l("button", {
                  key: "h-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => i.selectHour(o)
                }, p(i.pad2(o)), 11, ao))), 128))
              ])
            ], 512)
          ], 8, to),
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
            c("div", no, [
              c("div", lo, [
                (a(!0), l(L, null, M(i.minuteValues, (o, h) => (a(), l("button", {
                  key: "m-" + o,
                  type: "button",
                  tabindex: "-1",
                  class: v([
                    "ui-timepicker-wheel-item",
                    o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (m) => i.selectMinute(h)
                }, p(i.pad2(o)), 11, oo))), 128))
              ])
            ], 512)
          ], 8, so)
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
              c("span", uo, p(i.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: y(() => [
        c("div", co, [
          c("div", ho, [
            t[6] || (t[6] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", fo, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                c("div", po, [
                  c("div", go, [
                    (a(!0), l(L, null, M(i.hourOptions, (o) => (a(), l("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(o)
                    }, p(i.pad2(o)), 11, yo))), 128))
                  ])
                ], 512)
              ], 8, mo),
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
                c("div", vo, [
                  c("div", _o, [
                    (a(!0), l(L, null, M(i.minuteValues, (o, h) => (a(), l("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: v([
                        "ui-timepicker-wheel-item",
                        o === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(o)), 11, ko))), 128))
                  ])
                ], 512)
              ], 8, bo)
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
const Le = /* @__PURE__ */ x(Xl, [["render", wo]]), xo = ["square", "video", "auto"], So = ["fill", "sm", "md", "lg"], Ie = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Co = {
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
      validator: (e) => xo.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => So.includes(e)
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
}, To = ["src", "alt"], Lo = ["aria-hidden"], Io = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, zo = {
  key: 3,
  class: "ui-photo__overflow"
}, Ao = ["aria-label"], Mo = ["aria-label"], Po = { class: "ui-photo-preview__panel" }, Eo = ["src", "alt"], Ro = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Vo(e, t, r, n, s, i) {
  const u = k("ui-icon"), d = k("ui-button");
  return a(), l(L, null, [
    (a(), b(Q(i.rootTag), z({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: y(() => [
        r.src && !s.imageFailed ? (a(), l("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (o) => s.imageFailed = !0)
        }, null, 40, To)) : (a(), l("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          w(u, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Lo)),
        r.favorite ? (a(), l("span", Io, [
          w(u, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (a(), l("span", zo, p(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (a(), b(U, { to: "body" }, [
      w(q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          s.previewOpen ? (a(), l("div", {
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
            }, null, 8, Mo),
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
              i.activeSrc ? (a(), l("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Eo)) : f("", !0),
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
              i.counterLabel ? (a(), l("p", Ro, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Ao)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Oo = /* @__PURE__ */ x(Co, [["render", Vo]]), Bo = ["square", "video", "auto"], Do = {
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
      validator: (e) => Bo.includes(e)
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
}, Fo = ["data-count"], No = ["aria-label"], Ho = ["aria-label"], $o = { class: "ui-photo-preview__panel" }, Wo = ["src", "alt"], Yo = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Go(e, t, r, n, s, i) {
  const u = k("ui-photo"), d = k("ui-button");
  return a(), l(L, null, [
    c("div", {
      class: v(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (a(!0), l(L, null, M(i.visibleItems, (o, h) => (a(), b(u, {
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
    ], 10, Fo),
    (a(), b(U, { to: "body" }, [
      w(q, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: y(() => [
          s.previewOpen ? (a(), l("div", {
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
            }, null, 8, Ho),
            c("div", $o, [
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
              i.activeSrc ? (a(), l("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Wo)) : f("", !0),
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
              i.counterLabel ? (a(), l("p", Yo, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, No)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Uo = /* @__PURE__ */ x(Do, [["render", Go]]);
function X(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Jo() {
  return {
    push: N,
    dismiss: Ze,
    clear: Ke,
    info: (e) => N({ ...X(e), variant: "info" }),
    success: (e) => N({ ...X(e), variant: "success" }),
    warning: (e) => N({ ...X(e), variant: "warning" }),
    error: (e) => N({ ...X(e), variant: "error" })
  };
}
function eu(e = !1) {
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
function tu() {
  return {
    confirm: Xe
  };
}
const ue = {
  en: it,
  tr: Re
};
function iu(e = "tr") {
  return ue[e] ?? ue.tr;
}
const ru = Re, qo = [
  ["ui-action-card", jt],
  ["ui-action-card-list", Qt],
  ["ui-action-group", rt],
  ["ui-ai-button", ri],
  ["ui-alert", at],
  ["ui-avatar", st],
  ["ui-avatar-group", oi],
  ["ui-badge", nt],
  ["ui-button", lt],
  ["ui-card", ot],
  ["ui-checkbox", Fi],
  ["ui-checkbox-group", Ui],
  ["ui-color-picker", Si],
  ["ui-currency-input", He],
  ["ui-confirm-dialog", ut],
  ["ui-date-picker", ct],
  ["ui-date-range-picker", cr],
  ["ui-dialog", dt],
  ["ui-divider", Pe],
  ["ui-dropdown", ht],
  ["ui-empty", ft],
  ["ui-field", gr],
  ["ui-field-action", zr],
  ["ui-file", Hr],
  ["ui-form-row", mt],
  ["ui-guidance", pa],
  ["ui-icon", pt],
  ["ui-icon-picker", za],
  ["ui-intro", Ya],
  ["ui-input", gt],
  ["ui-price-display", ts],
  ["ui-price-display-group", ss],
  ["ui-price-display-row", ds],
  ["ui-price-input", bs],
  ["ui-price-text", ce],
  ["ui-password", Ts],
  ["ui-phone", yt],
  ["ui-pin", bt],
  ["ui-list", vt],
  ["ui-list-item", _t],
  ["ui-popover", kt],
  ["ui-progress", Bs],
  ["ui-radio", wt],
  ["ui-radio-group", xt],
  ["ui-select", St],
  ["ui-sheet", Xs],
  ["ui-menu", sn],
  ["ui-menu-group", cn],
  ["ui-menu-item", fn],
  ["ui-menu-nav", yn],
  ["ui-sidebar-item", An],
  ["ui-segment", Ct],
  ["ui-segment-group", Tt],
  ["ui-skeleton", Lt],
  ["ui-slider", dl],
  ["ui-step", Rn],
  ["ui-stepper", Jn],
  ["ui-switch", It],
  ["ui-table", pl],
  ["ui-table-body", vl],
  ["ui-table-cell", Cl],
  ["ui-table-head", Al],
  ["ui-table-header", El],
  ["ui-table-pagination", Nl],
  ["ui-table-row", Yl],
  ["ui-tag", zt],
  ["ui-tab-list", At],
  ["ui-tab-panel", jl],
  ["ui-tabs", Mt],
  ["ui-tab-trigger", Pt],
  ["ui-time-picker", Le],
  ["ui-timepicker", Le],
  ["ui-tooltip", Et],
  ["ui-toast", Rt],
  ["ui-photo", Oo],
  ["ui-photos", Uo]
];
function jo(e, t = {}) {
  var o, h;
  const { i18n: r, locale: n, locales: s, theme: i, themeOverrides: u, priceInput: d } = t;
  if (typeof i == "string") {
    const m = Qe(i, u || {});
    Je(e, m.defaults), e.config.globalProperties.$uiDefaults = m.defaults, pe({
      ...m.config,
      ...et(m.defaults)
    });
  } else if (i && typeof i == "object") {
    const m = u ? tt(i, u) : i;
    pe(m);
  }
  if (d && ms(d), (o = r == null ? void 0 : r.global) != null && o.mergeLocaleMessage) {
    const m = s ?? (n != null ? [n] : [
      typeof r.global.locale == "string" ? r.global.locale : ((h = r.global.locale) == null ? void 0 : h.value) ?? "tr"
    ]);
    for (const _ of m) {
      const C = ue[_];
      C && r.global.mergeLocaleMessage(_, C);
    }
  }
  for (const [m, _] of qo)
    e.component(m, _);
}
const au = {
  install: jo
};
export {
  jt as ActionCard,
  Qt as ActionCardList,
  rt as ActionGroup,
  ri as AiButton,
  at as Alert,
  st as Avatar,
  oi as AvatarGroup,
  lu as BASE_UI_DEFAULTS,
  nt as Badge,
  lt as Button,
  ot as Card,
  Fi as Checkbox,
  Ui as CheckboxGroup,
  Si as ColorPicker,
  ut as ConfirmDialog,
  He as CurrencyInput,
  ct as DatePicker,
  cr as DateRangePicker,
  dt as Dialog,
  Pe as Divider,
  ht as Dropdown,
  ft as Empty,
  ou as FEW_COLOR_SCALE,
  uu as FEW_PALETTE_ID,
  cu as FEW_PRIMARY,
  du as FEW_PRIMARY_FOREGROUND,
  gr as Field,
  zr as FieldAction,
  Hr as File,
  mt as FormRow,
  hu as GOOGLE_FONTS_CATALOG,
  pa as Guidance,
  pt as Icon,
  za as IconPicker,
  gt as Input,
  Ya as Intro,
  fu as LEGACY_PRESET_TO_THEME,
  vt as List,
  _t as ListItem,
  sn as Menu,
  cn as MenuGroup,
  fn as MenuItem,
  yn as MenuNav,
  hs as PRICE_FORMATS,
  Ts as Password,
  yt as Phone,
  Oo as Photo,
  Uo as Photos,
  bt as Pin,
  kt as Popover,
  bs as PriceInput,
  Bs as Progress,
  wt as Radio,
  xt as RadioGroup,
  Ct as Segment,
  Tt as SegmentGroup,
  St as Select,
  Xs as Sheet,
  An as SidebarItem,
  Lt as Skeleton,
  dl as Slider,
  Rn as Step,
  Jn as Stepper,
  It as Switch,
  mu as THEME_CUSTOM_CSS_ID,
  pu as THEME_IDS,
  gu as THEME_PACKAGES,
  yu as THEME_PRESETS,
  bu as THEME_PRESET_IDS,
  At as TabList,
  jl as TabPanel,
  Pt as TabTrigger,
  pl as Table,
  vl as TableBody,
  Cl as TableCell,
  Al as TableHead,
  El as TableHeader,
  Nl as TablePagination,
  Yl as TableRow,
  Mt as Tabs,
  zt as Tag,
  Le as TimePicker,
  Rt as Toast,
  Et as Tooltip,
  vu as UI_DEFAULTS_KEY,
  _u as UI_ICON_TYPES,
  ku as applyGoogleFontsCatalogPreview,
  wu as applyGoogleFontsForTheme,
  xu as applyThemeCustomCss,
  pe as applyUiTheme,
  Su as buildGoogleFontsLinkTag,
  Cu as buildGoogleFontsStylesheetUrl,
  Tu as buildThemeEnforcementCss,
  Lu as buildThemeStyleAttr,
  Iu as clearThemeCustomCss,
  Ke as clearToasts,
  zu as createUiId,
  F as createUiIdFactory,
  au as default,
  Au as deriveBrandColorsFromPrimary,
  Ze as dismissToast,
  Qo as formatCurrencyAmount,
  Mu as formatGoogleFontFamilyName,
  Ti as formatMoneyInput,
  De as getCurrencySymbol,
  Pu as getFewPrimaryColors,
  Ne as getMoneySeparators,
  ps as getPriceInputConfig,
  Eu as getThemeCssPath,
  Ru as getThemePackage,
  Vu as getThemePreset,
  iu as getUiMessages,
  Ou as googleFontSelectOptions,
  G as iconTypeProp,
  Bu as mergeUiDefaults,
  tt as mergeUiTheme,
  Ci as parseLocalizedMoneyInput,
  Me as pickPassthroughAttrs,
  Je as provideUiDefaults,
  N as pushToast,
  Xe as requestConfirm,
  Du as resetUiIds,
  Fu as resolveControlSize,
  re as resolveCurrencyCode,
  Nu as resolvePrimaryColor,
  ze as resolveThemeControlSize,
  Ye as resolveThemeDateFormat,
  Hu as resolveThemeDefault,
  $u as resolveThemeDialogMaxWidth,
  Wu as resolveThemeFontFamilies,
  Y as resolveThemeIconType,
  Yu as resolveThemeId,
  Qe as resolveThemePackage,
  Gu as resolveThemePreset,
  je as resolveThemeTimeFormat,
  Uu as resolveThemeVars,
  A as resolveUiText,
  Fe as sanitizeMoneyInput,
  ms as setPriceInputConfig,
  ie as themeIconTypeComputed,
  ru as uiMessagesTr,
  tu as useConfirm,
  eu as useDialog,
  Jo as useToast,
  qu as useUiDefaults,
  ju as useUiDefaultsOptions,
  Ku as withDerivedBrandColors
};
//# sourceMappingURL=index.js.map
