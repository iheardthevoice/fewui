import { ad as x, bM as Y, br as it, i as U, aB as G, aW as fe, bH as Ne, at as A, S as xi, q as Bt, bw as M, W as $t, E as Ht, aM as ue, b2 as Fe, o as Kt, aL as wi, K as Ve, H as Ut, ap as Be, by as $e, bN as Si, bs as Yt, b5 as Ci, bn as Ti, z as Ii, aX as Gt, aP as Li, bu as xe, aY as Wt, bc as qt, a$ as Ai, az as Mi, a3 as jt, f as Zt, bA as zi, p as Xt, bO as Pi, aK as Qt, bL as Ei, b1 as Oi, bj as Di, a_ as Ri, bF as Ni, be as Fi, bP as Vi, d as ut, a4 as ct, b4 as Bi, bv as Xe, bo as $i, bq as rt, aa as Hi, bI as Jt, c as ei, g as ti, m as Qe, Z as Ki, Q as Ui, h as Yi, b9 as Gi, b6 as Wi, bz as qi, ar as ji, aE as Zi, bf as ge, bk as Xi, bd as Qi, bK as Ji, aF as er, A as tr, a as ir, b as rr, e as nr, j as sr, k as ar, n as lr, u as or, I as ur, v as cr, w as dr, L as hr, y as fr, x as mr, P as pr, J as gr, R as br, N as yr, T as vr, U as _r, V as kr, X as xr, _ as wr, $ as Sr, a0 as Cr, a1 as Tr, a2 as Ir, aS as Lr, bh as Ar, ai as Mr, bC as zr, ah as Pr } from "./custom-css-hwfmZD1z.js";
import { B as jp, C as Zp, l as Xp, F as Qp, r as Jp, s as eg, t as tg, G as ig, M as rg, O as ng, D as sg, Y as ag, a5 as lg, a6 as og, a7 as ug, a8 as cg, a9 as dg, ab as hg, ac as fg, ae as mg, af as pg, ag as gg, aj as bg, ak as yg, al as vg, am as _g, an as kg, ao as xg, aq as wg, as as Sg, au as Cg, av as Tg, aw as Ig, ax as Lg, ay as Ag, aA as Mg, aC as zg, aD as Pg, aG as Eg, aH as Og, aI as Dg, aJ as Rg, aN as Ng, aO as Fg, aQ as Vg, aR as Bg, aT as $g, aU as Hg, aV as Kg, aZ as Ug, b0 as Yg, b3 as Gg, b7 as Wg, b8 as qg, ba as jg, bb as Zg, bg as Xg, bi as Qg, bl as Jg, bm as eb, bp as tb, bt as ib, bx as rb, bB as nb, bD as sb, bE as ab, bG as lb, bJ as ob, bQ as ub, bR as cb, bS as db, bT as hb } from "./custom-css-hwfmZD1z.js";
import { openBlock as u, createElementBlock as c, normalizeClass as k, renderSlot as b, resolveComponent as y, createBlock as v, resolveDynamicComponent as le, withCtx as _, createElementVNode as f, createVNode as w, createCommentVNode as m, createTextVNode as E, toDisplayString as p, normalizeStyle as B, mergeProps as P, Fragment as S, renderList as L, withKeys as we, withModifiers as K, createSlots as oe, normalizeProps as Er, guardReactiveProps as Or, Teleport as Se, Transition as Ce, Comment as ii, Text as ri, readonly as Dr, reactive as nt, markRaw as dt, withDirectives as ni, vShow as si, unref as Rr, computed as Nr } from "vue";
import { RouterLink as ai } from "vue-router";
const Fr = ["line", "card"], Vr = [...U], Br = {
  name: "Accordion",
  mixins: [Y],
  provide() {
    return {
      uiAccordion: this
    };
  },
  props: {
    /**
     * Açık öğe(ler): tekli kullanımda `value` (yoksa `null`), `multiple` ile dizi.
     * Verilmezse bileşen kendi iç durumunu yönetir (`defaultValue`).
     */
    modelValue: {
      type: [String, Number, Array],
      default: void 0
    },
    /** Kontrolsüz kullanımda ilk açık öğe(ler). */
    defaultValue: {
      type: [String, Number, Array],
      default: null
    },
    /** Aynı anda birden fazla öğe açık kalabilir. */
    multiple: {
      type: Boolean,
      default: !1
    },
    /** Tekli kullanımda açık öğe yeniden tıklanınca kapanır. `false`: her zaman bir öğe açık kalır. */
    collapsible: {
      type: Boolean,
      default: !0
    },
    /** `line` — ayırıcı çizgili satırlar; `card` — her öğe ayrı yüzey. */
    variant: {
      type: String,
      default: "line",
      validator: (e) => Fr.includes(e)
    },
    /** Satır dikey dolgusu; verilmezse tema kontrol boyutu. */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Vr.includes(e)
    },
    /** Başlık düğmesini saran başlık seviyesi (`h2`–`h6`); sayfa hiyerarşisine göre seçilir. */
    headingLevel: {
      type: Number,
      default: 3,
      validator: (e) => Number.isInteger(e) && e >= 1 && e <= 6
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      internalValue: this.defaultValue
    };
  },
  computed: {
    resolvedSize() {
      return it(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Tek biçim: her zaman dizi. */
    openValues() {
      const e = this.modelValue !== void 0 ? this.modelValue : this.internalValue;
      return Array.isArray(e) ? this.multiple ? e : e.slice(0, 1) : e == null || e === "" ? [] : [e];
    },
    rootClass() {
      return ["ui-accordion", `ui-accordion--${this.variant}`, `ui-accordion--${this.resolvedSize}`];
    }
  },
  methods: {
    isOpen(e) {
      return this.openValues.some((t) => Object.is(t, e));
    },
    /** Tekli + `collapsible: false`: açık öğe kapatılamaz (APG: düğme `aria-disabled`). */
    isLocked(e) {
      return !this.multiple && !this.collapsible && this.isOpen(e);
    },
    toggle(e) {
      const t = this.isOpen(e);
      let i;
      if (this.multiple)
        i = t ? this.openValues.filter((n) => !Object.is(n, e)) : [...this.openValues, e];
      else if (t) {
        if (!this.collapsible) return;
        i = null;
      } else
        i = e;
      this.internalValue = i, this.$emit("update:modelValue", i), this.$emit("change", i);
    },
    /** İç içe akordeonda yalnız bu akordeonun başlıkları gezilir. */
    triggers() {
      const e = this.$el;
      return e != null && e.querySelectorAll ? [...e.querySelectorAll(".ui-accordion-trigger:not(:disabled)")].filter(
        (t) => t.closest(".ui-accordion") === e
      ) : [];
    },
    /** APG Accordion: ok tuşları başlıklar arasında dolaşır (uçlarda sarar), Home / End uçlara gider. */
    onKeydown(e) {
      var o;
      const t = e.target;
      if (!((o = t == null ? void 0 : t.classList) != null && o.contains("ui-accordion-trigger"))) return;
      const i = this.triggers(), n = i.indexOf(t);
      if (n < 0) return;
      const s = i.length - 1, r = {
        ArrowDown: n === s ? 0 : n + 1,
        ArrowUp: n === 0 ? s : n - 1,
        Home: 0,
        End: s
      };
      e.key in r && (e.preventDefault(), i[r[e.key]].focus());
    }
  }
};
function $r(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass),
    onKeydown: t[0] || (t[0] = (...o) => r.onKeydown && r.onKeydown(...o))
  }, [
    b(e.$slots, "default")
  ], 34);
}
const Hr = /* @__PURE__ */ x(Br, [["render", $r]]), Kr = G("ui-accordion-item"), Ur = {
  name: "AccordionItem",
  inject: {
    uiAccordion: {
      default: null
    }
  },
  props: {
    /** `ui-accordion` `modelValue` ile eşleşen kimlik. */
    value: {
      type: [String, Number],
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    /** Başlığın altında ikincil satır. */
    description: {
      type: String,
      default: ""
    },
    /** `ui-icon` `name` — başlığın ilk satırıyla hizalanır. */
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      uid: Kr()
    };
  },
  computed: {
    triggerId() {
      return `${this.uid}-trigger`;
    },
    panelId() {
      return `${this.uid}-panel`;
    },
    headingTag() {
      var e;
      return `h${((e = this.uiAccordion) == null ? void 0 : e.headingLevel) ?? 3}`;
    },
    isOpen() {
      return this.uiAccordion ? this.uiAccordion.isOpen(this.value) : !1;
    },
    locked() {
      return this.uiAccordion ? this.uiAccordion.isLocked(this.value) : !1;
    },
    itemClass() {
      return [
        "ui-accordion-item",
        this.isOpen ? "ui-accordion-item--open" : "",
        this.icon ? "ui-accordion-item--with-icon" : "",
        this.disabled ? "ui-accordion-item--disabled" : ""
      ];
    }
  },
  mounted() {
    !this.uiAccordion && typeof import.meta < "u";
  },
  methods: {
    toggle() {
      this.disabled || !this.uiAccordion || this.uiAccordion.toggle(this.value);
    }
  }
}, Yr = ["data-state"], Gr = ["id", "aria-expanded", "aria-controls", "aria-disabled", "disabled"], Wr = {
  key: 0,
  class: "ui-accordion-icon",
  "aria-hidden": "true"
}, qr = { class: "ui-accordion-text" }, jr = { class: "ui-accordion-title" }, Zr = {
  key: 0,
  class: "ui-accordion-description"
}, Xr = {
  key: 1,
  class: "ui-accordion-append"
}, Qr = {
  class: "ui-accordion-chevron",
  "aria-hidden": "true"
}, Jr = ["id", "aria-labelledby"], en = { class: "ui-collapse-inner" }, tn = { class: "ui-accordion-content" };
function rn(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("div", {
    class: k(r.itemClass),
    "data-state": r.isOpen ? "open" : "closed"
  }, [
    (u(), v(le(r.headingTag), { class: "ui-accordion-header" }, {
      default: _(() => [
        f("button", {
          id: r.triggerId,
          type: "button",
          class: "ui-accordion-trigger",
          "aria-expanded": r.isOpen ? "true" : "false",
          "aria-controls": r.panelId,
          "aria-disabled": r.locked ? "true" : void 0,
          disabled: i.disabled,
          onClick: t[0] || (t[0] = (...l) => r.toggle && r.toggle(...l))
        }, [
          i.icon ? (u(), c("span", Wr, [
            w(o, {
              name: i.icon,
              size: "sm"
            }, null, 8, ["name"])
          ])) : m("", !0),
          f("span", qr, [
            f("span", jr, [
              b(e.$slots, "title", {}, () => [
                E(p(i.title), 1)
              ])
            ]),
            i.description ? (u(), c("span", Zr, p(i.description), 1)) : m("", !0)
          ]),
          e.$slots.append ? (u(), c("span", Xr, [
            b(e.$slots, "append")
          ])) : m("", !0),
          f("span", Qr, [
            w(o, {
              name: "chevron-down",
              size: "xs"
            })
          ])
        ], 8, Gr)
      ]),
      _: 3
    })),
    f("div", {
      id: r.panelId,
      class: k(["ui-collapse ui-accordion-panel", r.isOpen ? "ui-collapse--open" : ""]),
      role: "region",
      "aria-labelledby": r.triggerId
    }, [
      f("div", en, [
        f("div", tn, [
          b(e.$slots, "default")
        ])
      ])
    ], 10, Jr)
  ], 10, Yr);
}
const nn = /* @__PURE__ */ x(Ur, [["render", rn]]), sn = {
  name: "ActionCard",
  mixins: [Y],
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
    iconType: fe,
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
    ...Ne(),
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, an = ["disabled"], ln = {
  key: 0,
  class: "ui-action-card__icon",
  "aria-hidden": "true"
}, on = { class: "ui-action-card__content" }, un = { class: "ui-action-card__title" }, cn = {
  key: 0,
  class: "ui-action-card__description"
};
function dn(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("button", {
    type: "button",
    class: k(["ui-action-card", { "ui-action-card--selected": i.selected }]),
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }, [
    b(e.$slots, "leading", {}, () => [
      r.showDefaultLeading ? (u(), c("span", ln, [
        w(o, {
          name: i.icon,
          type: e.resolvedIconType,
          size: "lg"
        }, null, 8, ["name", "type"])
      ])) : m("", !0)
    ]),
    f("span", on, [
      f("span", un, p(i.title), 1),
      i.description ? (u(), c("span", cn, p(i.description), 1)) : m("", !0)
    ]),
    b(e.$slots, "trailing", {}, () => [
      i.showTrailing ? (u(), v(o, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "sm",
        class: "ui-action-card__trailing ui-icon--dir",
        "aria-hidden": "true"
      })) : m("", !0)
    ])
  ], 10, an);
}
const hn = /* @__PURE__ */ x(sn, [["render", dn]]), fn = {
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
}, mn = ["aria-label"];
function pn(e, t, i, n, s, r) {
  return u(), c("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": i.ariaLabel || void 0,
    style: B(r.listStyle)
  }, [
    b(e.$slots, "default")
  ], 12, mn);
}
const gn = /* @__PURE__ */ x(fn, [["render", pn]]), bn = {
  name: "AiButton",
  mixins: [Y],
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
    block: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    isBlock() {
      return this.block;
    },
    resolvedSize() {
      const e = it(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
      return e === "sm" || e === "lg" ? e : "md";
    },
    rootStyle() {
      return {
        "--ui-ai-button-radius": this.resolvedSize === "sm" ? "calc(var(--radius) - 2px)" : "var(--radius)"
      };
    }
  }
}, yn = ["data-size"], vn = { class: "ui-ai-button__surface" };
function _n(e, t, i, n, s, r) {
  const o = y("ui-button");
  return u(), c("span", {
    class: k(["ui-ai-button", {
      "ui-ai-button--block": r.isBlock,
      "ui-ai-button--disabled": i.disabled || i.loading
    }]),
    "data-size": r.resolvedSize,
    style: B(r.rootStyle)
  }, [
    t[1] || (t[1] = f("span", {
      class: "ui-ai-button__glow",
      "aria-hidden": "true"
    }, null, -1)),
    f("span", vn, [
      w(o, P({
        type: "button",
        variant: "solid",
        color: "secondary",
        size: r.resolvedSize,
        "prefix-icon": i.prefixIcon,
        disabled: i.disabled,
        loading: i.loading,
        "loading-text": i.loadingText,
        block: r.isBlock
      }, e.$attrs, {
        onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
      }), {
        default: _(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "prefix-icon", "disabled", "loading", "loading-text", "block"])
    ])
  ], 14, yn);
}
const kn = /* @__PURE__ */ x(bn, [["render", _n]]), xn = xi, We = {
  xs: "ui-avatar-group--xs",
  sm: "ui-avatar-group--sm",
  md: "ui-avatar-group--md",
  lg: "ui-avatar-group--lg",
  xl: "ui-avatar-group--xl"
}, wn = {
  name: "AvatarGroup",
  SIZE_CLASS: We,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => xn.includes(e)
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
      return A(
        "ui-avatar-group",
        We[this.size] || We.md,
        this.$attrs.class
      );
    },
    overflowText() {
      return `+${Math.max(0, Math.trunc(Number(this.overflowCount) || 0))}`;
    }
  }
}, Sn = ["aria-label"], Cn = {
  key: 0,
  class: "ui-avatar-group-overflow"
};
function Tn(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default"),
    i.overflowCount > 0 ? (u(), c("span", Cn, p(r.overflowText), 1)) : m("", !0)
  ], 10, Sn);
}
const In = /* @__PURE__ */ x(wn, [["render", Tn]]), Ln = {
  name: "BreadcrumbItem",
  components: { RouterLink: ai },
  props: {
    /** `vue-router` hedefi; `href`'e göre önceliklidir. */
    to: {
      type: [String, Object],
      default: null
    },
    /** Düz bağlantı adresi (`to` yokken). */
    href: {
      type: String,
      default: ""
    },
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    },
    /** Bulunulan sayfa: bağlantı değil, `aria-current="page"` taşıyan metin. */
    current: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== "";
    }
  }
}, An = { class: "ui-breadcrumb-item" }, Mn = {
  class: "ui-breadcrumb-separator",
  "aria-hidden": "true"
}, zn = {
  key: 0,
  class: "ui-breadcrumb-current",
  "aria-current": "page"
}, Pn = { class: "ui-breadcrumb-label" }, En = { class: "ui-breadcrumb-label" }, On = ["href"], Dn = { class: "ui-breadcrumb-label" }, Rn = {
  key: 3,
  class: "ui-breadcrumb-text"
}, Nn = { class: "ui-breadcrumb-label" };
function Fn(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("RouterLink");
  return u(), c("li", An, [
    f("span", Mn, [
      w(o, {
        name: "chevron-right",
        size: "xs"
      })
    ]),
    i.current ? (u(), c("span", zn, [
      i.icon ? (u(), v(o, {
        key: 0,
        name: i.icon,
        size: "xs",
        "aria-hidden": "true"
      }, null, 8, ["name"])) : m("", !0),
      f("span", Pn, [
        b(e.$slots, "default", {}, () => [
          E(p(i.label), 1)
        ])
      ])
    ])) : r.hasRouterTo ? (u(), v(l, {
      key: 1,
      to: i.to,
      class: "ui-breadcrumb-link"
    }, {
      default: _(() => [
        i.icon ? (u(), v(o, {
          key: 0,
          name: i.icon,
          size: "xs",
          "aria-hidden": "true"
        }, null, 8, ["name"])) : m("", !0),
        f("span", En, [
          b(e.$slots, "default", {}, () => [
            E(p(i.label), 1)
          ])
        ])
      ]),
      _: 3
    }, 8, ["to"])) : i.href ? (u(), c("a", {
      key: 2,
      href: i.href,
      class: "ui-breadcrumb-link"
    }, [
      i.icon ? (u(), v(o, {
        key: 0,
        name: i.icon,
        size: "xs",
        "aria-hidden": "true"
      }, null, 8, ["name"])) : m("", !0),
      f("span", Dn, [
        b(e.$slots, "default", {}, () => [
          E(p(i.label), 1)
        ])
      ])
    ], 8, On)) : (u(), c("span", Rn, [
      i.icon ? (u(), v(o, {
        key: 0,
        name: i.icon,
        size: "xs",
        "aria-hidden": "true"
      }, null, 8, ["name"])) : m("", !0),
      f("span", Nn, [
        b(e.$slots, "default", {}, () => [
          E(p(i.label), 1)
        ])
      ])
    ]))
  ]);
}
const li = /* @__PURE__ */ x(Ln, [["render", Fn]]), Vn = {
  name: "Breadcrumb",
  components: { BreadcrumbItem: li, Dropdown: Bt },
  props: {
    /**
     * Kısa yol: `[{ label, to, href, icon }]`. Son öğe bulunulan sayfadır.
     * Verilmezse öğeler slot'a `ui-breadcrumb-item` olarak yazılır.
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * `items` bu sayıyı aşarsa ilk öğe ile son öğeler kalır, aradakiler `…` menüsünde toplanır.
     * `0`: daraltma yok. Yalnız `items` ile çalışır (slot öğeleri daraltılmaz).
     */
    maxItems: {
      type: Number,
      default: 0
    },
    /** Verilmezse `ui.breadcrumb.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.breadcrumb.ariaLabel", "Breadcrumb");
    },
    moreLabel() {
      return M(this, "ui.breadcrumb.more", "Show hidden pages");
    },
    /** Görünen sıra: öğe ya da daraltılmış grup. */
    entries() {
      const e = this.items.filter(Boolean), t = e.length - 1, i = (r, o) => ({ key: `item-${o}`, item: r, current: o === t }), n = Math.floor(this.maxItems);
      if (!(n >= 2) || e.length <= n) return e.map(i);
      const s = e.length - (n - 1);
      return [
        i(e[0], 0),
        { key: "collapsed", collapsed: !0, items: e.slice(1, s) },
        ...e.slice(s).map((r, o) => i(r, s + o))
      ];
    }
  },
  methods: {
    /** Menü öğesi bağlantı değil düğmedir; gezinme burada yapılır. */
    onCollapsedSelect(e) {
      if ((e == null ? void 0 : e.to) != null && e.to !== "" && this.$router) {
        this.$router.push(e.to);
        return;
      }
      e != null && e.href && window.location.assign(e.href);
    }
  }
}, Bn = ["aria-label"], $n = { class: "ui-breadcrumb-list" }, Hn = {
  key: 0,
  class: "ui-breadcrumb-item"
}, Kn = {
  class: "ui-breadcrumb-separator",
  "aria-hidden": "true"
}, Un = ["aria-label", "onClick"];
function Yn(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("Dropdown"), a = y("BreadcrumbItem");
  return u(), c("nav", {
    class: "ui-breadcrumb",
    "aria-label": r.resolvedAriaLabel
  }, [
    f("ol", $n, [
      (u(!0), c(S, null, L(r.entries, (d) => (u(), c(S, {
        key: d.key
      }, [
        d.collapsed ? (u(), c("li", Hn, [
          f("span", Kn, [
            w(o, {
              name: "chevron-right",
              size: "xs"
            })
          ]),
          w(l, {
            items: d.items,
            onSelect: r.onCollapsedSelect
          }, {
            trigger: _(({ toggle: h, triggerAttrs: g }) => [
              f("button", P({
                type: "button",
                class: "ui-breadcrumb-ellipsis",
                "aria-label": r.moreLabel
              }, { ref_for: !0 }, g, { onClick: h }), [
                w(o, {
                  name: "ellipsis",
                  size: "xs"
                })
              ], 16, Un)
            ]),
            _: 1
          }, 8, ["items", "onSelect"])
        ])) : (u(), v(a, {
          key: 1,
          to: d.item.to,
          href: d.item.href,
          icon: d.item.icon,
          label: d.item.label,
          current: d.current
        }, null, 8, ["to", "href", "icon", "label", "current"]))
      ], 64))), 128)),
      b(e.$slots, "default")
    ])
  ], 8, Bn);
}
const Gn = /* @__PURE__ */ x(Vn, [["render", Yn]]), oi = Math.PI * 2;
function z(e) {
  return Math.round(e * 100) / 100;
}
function ne(e) {
  if (e == null || e === "") return null;
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Wn(e, t = 5) {
  if (!(e > 0) || !(t > 0)) return 1;
  const i = e / t, n = 10 ** Math.floor(Math.log10(i)), s = i / n;
  let r = 10;
  return s <= 1 ? r = 1 : s <= 2 ? r = 2 : s <= 5 && (r = 5), r * n;
}
function qn(e, t, i = 5) {
  let n = Number.isFinite(e) ? e : 0, s = Number.isFinite(t) ? t : 0;
  n > s && ([n, s] = [s, n]), n === s && (n === 0 ? s = 1 : n > 0 ? n = 0 : s = 0);
  const r = Wn(s - n, Math.max(1, Math.floor(i))), o = Math.floor(n / r + 1e-9) * r, l = Math.ceil(s / r - 1e-9) * r, a = Math.max(1, Math.round((l - o) / r)), d = Math.max(0, -Math.floor(Math.log10(r))) + 1, h = [];
  for (let g = 0; g <= a; g += 1)
    h.push(Number((o + g * r).toFixed(d)));
  return h;
}
function jn(e, t, i, n) {
  const s = t - e;
  return s === 0 ? () => i : (r) => i + (r - e) / s * (n - i);
}
function Zn(e, t, i) {
  const n = e > 0 ? Math.max(0, i - t) / e : 0;
  return { step: n, center: (s) => t + n * (s + 0.5) };
}
function Xn(e, t, i, n) {
  return n > 0 ? i > 0 ? Math.min(n - 1, Math.max(0, Math.floor((e - t) / i))) : 0 : -1;
}
function Qn(e, t) {
  return !(t > 0) || !(e > 0) ? 1 : Math.max(1, Math.ceil(e / t));
}
function Jn(e, t) {
  const i = t.map(() => []);
  return e.forEach((n, s) => {
    let r = 0, o = 0;
    t.forEach((l, a) => {
      const d = ne(n == null ? void 0 : n[l]) ?? 0;
      d >= 0 ? (i[a][s] = [r, r + d], r += d) : (i[a][s] = [o, o + d], o += d);
    });
  }), i;
}
function es(e) {
  let t = 1 / 0, i = -1 / 0;
  for (const n of e)
    n == null || !Number.isFinite(n) || (n < t && (t = n), n > i && (i = n));
  return t === 1 / 0 ? [0, 0] : [t, i];
}
function ui(e) {
  let t = "", i = !1;
  for (const n of e) {
    if (!n || !Number.isFinite(n[0]) || !Number.isFinite(n[1])) {
      i = !1;
      continue;
    }
    t += `${i ? "L" : "M"}${z(n[0])} ${z(n[1])}`, i = !0;
  }
  return t;
}
function ts(e, t) {
  const i = [], n = [];
  for (let o = 0; o < e.length; o += 1)
    !e[o] || !t[o] || (i.push(e[o]), n.push(t[o]));
  if (!i.length) return "";
  const s = ui(i), r = n.reverse().map((o) => `L${z(o[0])} ${z(o[1])}`).join("");
  return `${s}${r}Z`;
}
function ht(e, t, i, n, s = 0, r = !1) {
  if (!(i > 0) || !(n > 0)) return "";
  const o = Math.max(0, Math.min(s, i / 2, n)), l = z(e), a = z(e + i), d = z(t), h = z(t + n);
  if (o === 0) return `M${l} ${d}H${a}V${h}H${l}Z`;
  const g = z(o);
  return r ? `M${l} ${d}H${a}V${z(h - o)}A${g} ${g} 0 0 1 ${z(a - o)} ${h}H${z(l + o)}A${g} ${g} 0 0 1 ${l} ${z(h - o)}Z` : `M${l} ${h}V${z(d + o)}A${g} ${g} 0 0 1 ${z(l + o)} ${d}H${z(a - o)}A${g} ${g} 0 0 1 ${a} ${z(d + o)}V${h}Z`;
}
function ci(e, t, i, n) {
  return [e + i * Math.sin(n), t - i * Math.cos(n)];
}
function is(e, t, i, n, s, r) {
  const o = r - s;
  if (!(o > 0) || !(i > 0)) return "";
  const l = z(i), a = z(Math.max(0, Math.min(n, i))), d = (C, T) => {
    const [D, V] = ci(e, t, C, T);
    return `${z(D)} ${z(V)}`;
  };
  if (o >= oi - 1e-6) {
    const C = s + Math.PI;
    let T = `M${d(l, s)}A${l} ${l} 0 1 1 ${d(l, C)}A${l} ${l} 0 1 1 ${d(l, s)}Z`;
    return a > 0 && (T += `M${d(a, s)}A${a} ${a} 0 1 0 ${d(a, C)}A${a} ${a} 0 1 0 ${d(a, s)}Z`), T;
  }
  const h = o > Math.PI ? 1 : 0, g = `M${d(l, s)}A${l} ${l} 0 ${h} 1 ${d(l, r)}`;
  return a === 0 ? `${g}L${z(e)} ${z(t)}Z` : `${g}L${d(a, r)}A${a} ${a} 0 ${h} 0 ${d(a, s)}Z`;
}
function rs(e, t = 0) {
  const i = e.map((l) => l != null && Number.isFinite(l) && l > 0 ? l : 0), n = i.reduce((l, a) => l + a, 0), r = i.filter((l) => l > 0).length > 1 ? Math.max(0, t) : 0;
  let o = 0;
  return i.map((l) => {
    const a = n > 0 ? l / n : 0, d = a * oi, h = Math.min(r, d) / 2, g = o + h, C = o + d - h, T = o + d / 2;
    return o += d, { start: g, end: C, mid: T, value: l, ratio: a };
  });
}
const ns = G("ui-chart"), ss = ["bar", "line", "area", "donut"], as = 8, ft = ["", "6 4", "2 4", "10 4 2 4"], mt = 24, re = 2, pt = 4, gt = 12, ls = 7;
function bt(e) {
  return `var(--chart-series-${e % as + 1})`;
}
const os = {
  name: "Chart",
  components: { "ui-chart-empty": Ht, "ui-chart-skeleton": $t },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      default: "bar",
      validator: (e) => ss.includes(e)
    },
    /** Satır nesneleri: `[{ day: 'Pzt', salon: 12400, paket: 3200 }]`. */
    data: {
      type: Array,
      default: () => []
    },
    /** Kategori (x ekseni / dilim etiketi) alanı. */
    categoryKey: {
      type: String,
      default: "label"
    },
    /**
     * `[{ key, label, color? }]`. Renk verilmezse sıra ile `--chart-series-1…8`.
     * `donut` yalnız ilk seriyi okur; dilimler satırlardır.
     */
    series: {
      type: Array,
      default: () => []
    },
    /** `bar` ve `area` için serileri üst üste yığar. */
    stacked: {
      type: Boolean,
      default: !1
    },
    /** Çizim alanı yüksekliği (CSS uzunluğu). Genişlik kapsayıcıdan gelir. */
    height: {
      type: String,
      default: "240px"
    },
    showLegend: {
      type: Boolean,
      default: !0
    },
    showGrid: {
      type: Boolean,
      default: !0
    },
    showAxis: {
      type: Boolean,
      default: !0
    },
    showTooltip: {
      type: Boolean,
      default: !0
    },
    /**
     * `(value, context) => string` — `context`: `'axis' | 'tooltip' | 'table'`.
     * Eksen için kısa, ipucu için tam biçim döndürülebilir.
     */
    valueFormatter: {
      type: Function,
      default: null
    },
    /** Grafiğin erişilebilir adı; gizli tablonun başlığı da budur. */
    ariaLabel: {
      type: String,
      default: ""
    },
    /** Gizli tablodaki kategori sütunu başlığı (varsayılan `ui.chart.category`). */
    categoryLabel: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    emptyTitle: {
      type: String,
      default: ""
    },
    emptyDescription: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hintId: `${ns()}-hint`,
      /** Ölçüm mount sonrası gelir; SSR'da boyuta bağlı hiçbir şey çizilmez. */
      width: 0,
      plotHeight: 0,
      activeIndex: null,
      /** Etkin kategori klavyeyle seçildiyse canlı bölgede okunur. */
      keyboardActive: !1,
      hiddenKeys: []
    };
  },
  computed: {
    rootClass() {
      return A("ui-chart", `ui-chart--${this.type}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    rows() {
      return Array.isArray(this.data) ? this.data : [];
    },
    isDonut() {
      return this.type === "donut";
    },
    /** Renk seriye bağlıdır (sıraya değil): gizlenen seri diğerlerini yeniden boyamaz. */
    normalizedSeries() {
      return (Array.isArray(this.series) ? this.series : []).filter((e) => e && e.key != null).map((e, t) => ({
        key: String(e.key),
        label: e.label != null && e.label !== "" ? String(e.label) : String(e.key),
        color: e.color || bt(t),
        dash: this.type === "line" ? ft[t % ft.length] : ""
      }));
    },
    visibleSeries() {
      return this.normalizedSeries.filter((e) => !this.hiddenKeys.includes(e.key));
    },
    tableSeries() {
      return this.isDonut ? this.normalizedSeries.slice(0, 1) : this.normalizedSeries;
    },
    /** Halka: her satır bir dilim. */
    donutItems() {
      const e = this.normalizedSeries[0];
      return !this.isDonut || !e ? [] : this.rows.map((t, i) => ({
        key: `${i}:${this.categoryText(t)}`,
        index: i,
        label: this.categoryText(t),
        value: ne(t == null ? void 0 : t[e.key]),
        color: bt(i),
        dash: ""
      }));
    },
    isEmpty() {
      return this.rows.length === 0 || this.normalizedSeries.length === 0;
    },
    ready() {
      return this.width > 0 && this.plotHeight > 0;
    },
    interactive() {
      return this.showTooltip && !this.loading && !this.isEmpty;
    },
    itemCount() {
      return this.rows.length;
    },
    legendItems() {
      if (!this.showLegend || this.loading || this.isEmpty) return [];
      const e = this.isDonut ? this.donutItems : this.normalizedSeries;
      return e.length < 2 ? [] : e.map((t) => ({ ...t, hidden: this.hiddenKeys.includes(t.key) }));
    },
    legendLabel() {
      return M(this, "ui.chart.legend", "Series");
    },
    totalLabel() {
      return M(this, "ui.chart.total", "Total");
    },
    keyboardHint() {
      return M(this, "ui.chart.keyboardHint", "Use the arrow keys to read the values.");
    },
    resolvedCategoryLabel() {
      return this.categoryLabel || M(this, "ui.chart.category", "Category");
    },
    resolvedEmptyTitle() {
      return this.emptyTitle || M(this, "ui.chart.empty", "No data to show");
    },
    cartesian() {
      if (this.isDonut || !this.ready) return null;
      const e = this.rows, t = e.length, i = this.visibleSeries, n = i.map((I) => I.key), s = this.type === "bar", o = this.stacked && (s || this.type === "area") ? Jn(e, n) : null, l = [0];
      if (o)
        for (const I of o) for (const F of I) l.push(F[0], F[1]);
      else
        for (const I of e) for (const F of n) l.push(ne(I == null ? void 0 : I[F]));
      const [a, d] = es(l), h = 8, g = this.plotHeight - (this.showAxis ? 24 : 4), C = Math.max(1, g - h), T = qn(a, d, Math.min(6, Math.max(2, Math.floor(C / 44)))), D = T.map((I) => this.formatValue(I, "axis")), V = this.showAxis ? Math.ceil(Math.max(...D.map((I) => this.measureText(I)))) + 12 : 4, R = Math.max(V + 1, this.width - 8), O = jn(T[0], T[T.length - 1], g, h), N = Zn(t, V, R), j = z(O(0)), Ke = T.map((I, F) => ({ value: I, y: z(O(I)), label: D[F] })), Te = e.map((I) => this.categoryText(I)), me = Te.map((I) => this.measureText(I)), Ue = Qn(Math.max(0, ...me) + 12, N.step), at = [];
      for (let I = 0; I < t; I += Ue) {
        const F = me[I] / 2, $ = Math.min(this.width - F, Math.max(F, N.center(I)));
        at.push({ index: I, text: Te[I], x: z($) });
      }
      const Ye = [], lt = [], ot = [];
      if (s && i.length) {
        const I = N.step * 0.72;
        if (o) {
          const F = Math.max(1, Math.min(mt, I));
          for (let $ = 0; $ < t; $ += 1) {
            let Q = -1, W = -1;
            i.forEach((Z, X) => {
              const [J, q] = o[X][$];
              q > J ? Q = X : q < J && (W = X);
            }), i.forEach((Z, X) => {
              const [J, q] = o[X][$];
              if (J === q) return;
              const ce = q < J;
              let pe = Math.min(O(J), O(q)), Ge = Math.abs(O(q) - O(J));
              J !== 0 && Ge > re + 1 && (Ge -= re, ce && (pe += re));
              const ki = ce ? X === W : X === Q;
              Ye.push({
                id: `${Z.key}:${$}`,
                color: Z.color,
                d: ht(N.center($) - F / 2, pe, F, Ge, ki ? pt : 0, ce)
              });
            });
          }
        } else {
          const F = i.length, $ = Math.max(1, Math.min(mt, (I - re * (F - 1)) / F)), Q = $ * F + re * (F - 1);
          for (let W = 0; W < t; W += 1) {
            const Z = N.center(W) - Q / 2;
            i.forEach((X, J) => {
              var pe;
              const q = ne((pe = e[W]) == null ? void 0 : pe[X.key]);
              if (q == null || q === 0) return;
              const ce = O(q);
              Ye.push({
                id: `${X.key}:${W}`,
                color: X.color,
                d: ht(
                  Z + J * ($ + re),
                  Math.min(ce, j),
                  $,
                  Math.abs(ce - j),
                  pt,
                  q < 0
                )
              });
            });
          }
        }
      } else s || i.forEach((I, F) => {
        const $ = e.map((Q, W) => {
          const Z = o ? o[F][W][1] : ne(Q == null ? void 0 : Q[I.key]);
          return Z == null ? null : [z(N.center(W)), z(O(Z))];
        });
        if (lt.push({ key: I.key, color: I.color, dash: I.dash, points: $, d: ui($) }), this.type === "area") {
          const Q = e.map((W, Z) => [
            z(N.center(Z)),
            o ? z(O(o[F][Z][0])) : j
          ]);
          ot.push({ key: I.key, color: I.color, d: ts($, Q) });
        }
      });
      return {
        left: V,
        right: R,
        top: h,
        bottom: g,
        zeroY: j,
        step: N.step,
        count: t,
        ticks: Ke,
        xLabels: at,
        bars: Ye,
        lines: lt,
        areas: ot,
        stacked: !!o,
        // Tek noktalı çizgi yol üretmez; nokta ile gösterilir.
        showDots: t === 1,
        center: (I) => z(N.center(I)),
        bandX: (I) => z(V + N.step * I)
      };
    },
    donut() {
      if (!this.isDonut || !this.ready) return null;
      const e = this.donutItems, t = this.width / 2, i = this.plotHeight / 2, n = Math.max(0, Math.min(this.width, this.plotHeight) / 2 - 2), s = n * 0.66, r = e.map((d) => this.hiddenKeys.includes(d.key) ? 0 : d.value), o = rs(r, n > 0 ? re / ((n + s) / 2) : 0), l = r.reduce((d, h) => d + (h > 0 ? h : 0), 0), a = e.map((d, h) => {
        const g = o[h], [C, T] = ci(t, i, (n + s) / 2, g.mid);
        return {
          id: d.key,
          index: h,
          color: d.color,
          ratio: g.ratio,
          d: is(t, i, n, s, g.start, g.end),
          tx: z(C),
          ty: z(T)
        };
      }).filter((d) => d.d);
      return {
        cx: z(t),
        cy: z(i),
        slices: a,
        total: l,
        inner: s
      };
    },
    /**
     * Halka ortası: boşta toplam, etkin dilimde o dilimin değeri ve payı (ipucu ortadaki metni örtmesin).
     * Metin iç çapa sığmıyorsa `null` — etkin dilim o zaman yüzen ipucuna düşer.
     */
    donutCenter() {
      var o;
      const e = this.donut;
      if (!e) return null;
      const t = e.inner * 2 - 16, i = (l, a) => (
        // Değer satırı 16px, ölçüm 12px fontla yapılır.
        Math.max(this.measureText(l) * (16 / gt), this.measureText(a)) <= t
      ), n = this.isDonut ? this.activeModel : null;
      if (n) {
        const l = n.valueText, a = `${n.title} · ${n.percentText}`;
        return e.inner >= 44 && i(l, a) ? { value: l, label: a, active: !0 } : null;
      }
      const s = this.formatValue(e.total, "axis"), r = ((o = this.normalizedSeries[0]) == null ? void 0 : o.label) || this.totalLabel;
      return e.inner >= 44 && i(s, r) ? { value: s, label: r, active: !1 } : null;
    },
    /** Klavye / imleç gezinebileceği dizinler (halkada gizli ve sıfır dilimler atlanır). */
    navigableIndexes() {
      return this.isDonut ? this.donut ? this.donut.slices.map((e) => e.index) : [] : this.rows.map((e, t) => t);
    },
    activeModel() {
      var r;
      const e = this.activeIndex;
      if (e == null || !this.navigableIndexes.includes(e)) return null;
      if (this.isDonut) {
        const o = this.donutItems[e], l = this.donut.slices.find((h) => h.index === e), a = this.formatValue(o.value, "tooltip"), d = this.formatPercent(l.ratio);
        return {
          title: o.label,
          valueText: a,
          percentText: d,
          rows: [
            {
              key: o.key,
              label: this.normalizedSeries[0].label,
              color: o.color,
              dash: "",
              value: `${a} · ${d}`
            }
          ],
          total: null,
          x: l.tx,
          y: l.ty
        };
      }
      const t = this.rows[e], i = this.visibleSeries;
      let n = 0;
      const s = i.map((o) => {
        const l = ne(t == null ? void 0 : t[o.key]);
        return n += l ?? 0, { key: o.key, label: o.label, color: o.color, dash: o.dash, value: this.formatValue(l, "tooltip") };
      });
      return {
        title: this.categoryText(t),
        rows: s,
        total: (r = this.cartesian) != null && r.stacked && i.length > 1 ? this.formatValue(n, "tooltip") : null,
        x: this.cartesian ? this.cartesian.center(e) : 0,
        y: null
      };
    },
    tooltip() {
      var i;
      const e = this.activeModel;
      if (!e || !this.showTooltip || this.isDonut && ((i = this.donutCenter) != null && i.active)) return null;
      const t = { left: `${e.x}px`, top: e.y == null ? "8px" : `${e.y}px` };
      return { ...e, style: t, flip: e.x > this.width / 2, middle: e.y != null };
    },
    liveText() {
      const e = this.activeModel;
      if (!e || !this.keyboardActive) return "";
      const t = e.rows.map((i) => `${i.label} ${i.value}`);
      return e.total != null && t.push(`${this.totalLabel} ${e.total}`), `${e.title}: ${t.join(", ")}`;
    }
  },
  watch: {
    type() {
      this.hiddenKeys = [], this.activeIndex = null;
    }
  },
  mounted() {
    this.measureContext = this.createMeasureContext();
    const e = this.$refs.plot;
    e && (this.applySize(e.clientWidth, e.clientHeight), typeof ResizeObserver == "function" ? (this.resizeObserver = new ResizeObserver((t) => {
      var n;
      const i = (n = t[t.length - 1]) == null ? void 0 : n.contentRect;
      i && this.applySize(i.width, i.height);
    }), this.resizeObserver.observe(e)) : (this.onWindowResize = () => this.applySize(e.clientWidth, e.clientHeight), window.addEventListener("resize", this.onWindowResize)));
  },
  beforeUnmount() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null, this.onWindowResize && window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    applySize(e, t) {
      const i = Math.floor(e), n = Math.floor(t);
      i !== this.width && (this.width = i), n !== this.plotHeight && (this.plotHeight = n);
    },
    /** Eksen payı ve etiket seyreltme gerçek yazı genişliğine dayanır (tema fontu değişebilir). */
    createMeasureContext() {
      try {
        const e = document.createElement("canvas").getContext("2d");
        if (!e) return null;
        const t = getComputedStyle(this.$el).fontFamily || "sans-serif";
        return e.font = `${gt}px ${t}`, e;
      } catch {
        return null;
      }
    },
    measureText(e) {
      const t = String(e ?? "");
      return this.measureContext ? this.measureContext.measureText(t).width : t.length * ls;
    },
    categoryText(e) {
      const t = e == null ? void 0 : e[this.categoryKey];
      return t == null ? "" : String(t);
    },
    cell(e, t) {
      return ne(e == null ? void 0 : e[t]);
    },
    /** Sabit yedek dil: SSR ve tarayıcı aynı metni üretsin. */
    numberLocale() {
      var i;
      const e = (i = this.$i18n) == null ? void 0 : i.locale, t = e && typeof e == "object" ? e.value : e;
      return typeof t == "string" && t ? t : "en-US";
    },
    formatValue(e, t) {
      if (e == null) return "–";
      if (typeof this.valueFormatter == "function") return String(this.valueFormatter(e, t));
      try {
        return new Intl.NumberFormat(this.numberLocale(), { maximumFractionDigits: 2 }).format(e);
      } catch {
        return String(e);
      }
    },
    /** Yüzde işaretinin yeri dile göre değişir (`%12` / `12%`). */
    formatPercent(e) {
      try {
        return new Intl.NumberFormat(this.numberLocale(), { style: "percent", maximumFractionDigits: 1 }).format(e);
      } catch {
        return `${Math.round(e * 1e3) / 10}%`;
      }
    },
    toggleSeries(e) {
      this.hiddenKeys = this.hiddenKeys.includes(e) ? this.hiddenKeys.filter((t) => t !== e) : [...this.hiddenKeys, e];
    },
    onPointerMove(e) {
      var s, r;
      if (!this.interactive || !this.ready) return;
      if (this.keyboardActive = !1, this.isDonut) {
        const o = (r = (s = e.target) == null ? void 0 : s.getAttribute) == null ? void 0 : r.call(s, "data-index");
        this.activeIndex = o == null ? null : Number(o);
        return;
      }
      const t = this.$refs.plot.getBoundingClientRect(), i = this.cartesian, n = Xn(e.clientX - t.left, i.left, i.step, i.count);
      this.activeIndex = n < 0 ? null : n;
    },
    onPointerLeave(e) {
      (e == null ? void 0 : e.pointerType) !== "touch" && (this.keyboardActive || (this.activeIndex = null));
    },
    onFocus(e) {
      var t, i;
      !this.interactive || !((i = (t = e.target).matches) != null && i.call(t, ":focus-visible")) || (this.keyboardActive = !0, (this.activeIndex == null || !this.navigableIndexes.includes(this.activeIndex)) && (this.activeIndex = this.navigableIndexes[0] ?? null));
    },
    onBlur() {
      this.keyboardActive = !1, this.activeIndex = null;
    },
    onKeydown(e) {
      if (!this.interactive) return;
      const t = this.navigableIndexes;
      if (!t.length) return;
      if (e.key === "Escape") {
        if (this.activeIndex == null) return;
        e.stopPropagation(), this.activeIndex = null;
        return;
      }
      const i = t.indexOf(this.activeIndex);
      let n;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          n = i < 0 ? 0 : this.isDonut ? (i + 1) % t.length : Math.min(t.length - 1, i + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          i < 0 ? n = t.length - 1 : n = this.isDonut ? (i - 1 + t.length) % t.length : Math.max(0, i - 1);
          break;
        case "Home":
          n = 0;
          break;
        case "End":
          n = t.length - 1;
          break;
        default:
          return;
      }
      e.preventDefault(), this.keyboardActive = !0, this.activeIndex = t[n];
    }
  }
}, us = ["role", "aria-label", "aria-describedby", "aria-busy", "tabindex"], cs = {
  key: 1,
  class: "ui-chart-empty"
}, ds = ["width", "height", "viewBox", "aria-label"], hs = {
  key: 0,
  "aria-hidden": "true"
}, fs = ["x1", "x2", "y1", "y2"], ms = ["x", "y", "width", "height"], ps = {
  key: 2,
  "aria-hidden": "true"
}, gs = ["x", "y"], bs = ["x", "y"], ys = { key: 3 }, vs = ["d", "fill"], _s = { key: 0 }, ks = ["d", "fill"], xs = ["d", "stroke", "stroke-dasharray"], ws = { key: 1 }, Ss = ["cx", "cy", "fill"], Cs = ["x1", "x2", "y1", "y2"], Ts = { key: 5 }, Is = ["x1", "x2", "y1", "y2"], Ls = ["cx", "cy", "fill"], As = ["d", "fill", "data-index"], Ms = {
  key: 0,
  "aria-hidden": "true"
}, zs = ["x", "y"], Ps = ["x", "y"], Es = { class: "ui-chart-tooltip-title" }, Os = {
  class: "ui-chart-key",
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  focusable: "false"
}, Ds = ["stroke", "stroke-dasharray"], Rs = { class: "ui-chart-tooltip-label" }, Ns = { class: "ui-chart-tooltip-value" }, Fs = {
  key: 0,
  class: "ui-chart-tooltip-row ui-chart-tooltip-row--total"
}, Vs = { class: "ui-chart-tooltip-label" }, Bs = { class: "ui-chart-tooltip-value" }, $s = ["aria-label"], Hs = ["aria-pressed", "onClick"], Ks = {
  class: "ui-chart-key",
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  "aria-hidden": "true",
  focusable: "false"
}, Us = ["stroke", "stroke-dasharray"], Ys = ["fill"], Gs = { class: "ui-chart-legend-label" }, Ws = {
  key: 1,
  class: "sr-only"
}, qs = { key: 0 }, js = { scope: "col" }, Zs = { scope: "row" }, Xs = ["id"], Qs = {
  class: "sr-only",
  "aria-live": "polite"
};
function Js(e, t, i, n, s, r) {
  const o = y("ui-chart-skeleton"), l = y("ui-chart-empty");
  return u(), c("div", P({ class: r.rootClass }, r.passthroughAttrs), [
    f("div", {
      ref: "plot",
      class: "ui-chart-plot",
      style: B({ height: i.height }),
      role: r.interactive ? "group" : void 0,
      "aria-label": r.interactive && i.ariaLabel || void 0,
      "aria-describedby": r.interactive ? s.hintId : void 0,
      "aria-busy": i.loading ? "true" : void 0,
      tabindex: r.interactive ? 0 : void 0,
      onPointermove: t[0] || (t[0] = (...a) => r.onPointerMove && r.onPointerMove(...a)),
      onPointerdown: t[1] || (t[1] = (...a) => r.onPointerMove && r.onPointerMove(...a)),
      onPointerleave: t[2] || (t[2] = (...a) => r.onPointerLeave && r.onPointerLeave(...a)),
      onFocus: t[3] || (t[3] = (...a) => r.onFocus && r.onFocus(...a)),
      onBlur: t[4] || (t[4] = (...a) => r.onBlur && r.onBlur(...a)),
      onKeydown: t[5] || (t[5] = (...a) => r.onKeydown && r.onKeydown(...a))
    }, [
      i.loading ? (u(), v(o, {
        key: 0,
        variant: "block",
        class: "ui-chart-skeleton"
      })) : r.isEmpty ? (u(), c("div", cs, [
        b(e.$slots, "empty", {}, () => [
          w(l, {
            icon: "chart-column",
            size: "sm",
            title: r.resolvedEmptyTitle,
            description: i.emptyDescription
          }, null, 8, ["title", "description"])
        ])
      ])) : r.ready ? (u(), c(S, { key: 2 }, [
        (u(), c("svg", {
          class: "ui-chart-svg",
          width: s.width,
          height: s.plotHeight,
          viewBox: `0 0 ${s.width} ${s.plotHeight}`,
          role: "img",
          "aria-label": i.ariaLabel || void 0,
          focusable: "false"
        }, [
          r.cartesian ? (u(), c(S, { key: 0 }, [
            i.showGrid ? (u(), c("g", hs, [
              (u(!0), c(S, null, L(r.cartesian.ticks, (a) => (u(), c("line", {
                key: `g${a.value}`,
                class: "ui-chart-grid-line",
                x1: r.cartesian.left,
                x2: r.cartesian.right,
                y1: a.y,
                y2: a.y
              }, null, 8, fs))), 128))
            ])) : m("", !0),
            i.type === "bar" && s.activeIndex != null ? (u(), c("rect", {
              key: 1,
              class: "ui-chart-band",
              x: r.cartesian.bandX(s.activeIndex),
              y: r.cartesian.top,
              width: r.cartesian.step,
              height: r.cartesian.bottom - r.cartesian.top,
              rx: "4"
            }, null, 8, ms)) : m("", !0),
            i.showAxis ? (u(), c("g", ps, [
              (u(!0), c(S, null, L(r.cartesian.ticks, (a) => (u(), c("text", {
                key: `y${a.value}`,
                class: "ui-chart-tick",
                x: r.cartesian.left - 8,
                y: a.y,
                "text-anchor": "end",
                "dominant-baseline": "middle"
              }, p(a.label), 9, gs))), 128)),
              (u(!0), c(S, null, L(r.cartesian.xLabels, (a) => (u(), c("text", {
                key: `x${a.index}`,
                class: "ui-chart-tick",
                x: a.x,
                y: r.cartesian.bottom + 16,
                "text-anchor": "middle"
              }, p(a.text), 9, bs))), 128))
            ])) : m("", !0),
            i.type === "bar" ? (u(), c("g", ys, [
              (u(!0), c(S, null, L(r.cartesian.bars, (a) => (u(), c("path", {
                key: a.id,
                class: "ui-chart-bar",
                d: a.d,
                fill: a.color
              }, null, 8, vs))), 128))
            ])) : (u(), c(S, { key: 4 }, [
              i.type === "area" ? (u(), c("g", _s, [
                (u(!0), c(S, null, L(r.cartesian.areas, (a) => (u(), c("path", {
                  key: `a${a.key}`,
                  class: "ui-chart-area",
                  d: a.d,
                  fill: a.color
                }, null, 8, ks))), 128))
              ])) : m("", !0),
              (u(!0), c(S, null, L(r.cartesian.lines, (a) => (u(), c("path", {
                key: `l${a.key}`,
                class: "ui-chart-line",
                d: a.d,
                stroke: a.color,
                "stroke-dasharray": a.dash || void 0
              }, null, 8, xs))), 128)),
              r.cartesian.showDots ? (u(), c("g", ws, [
                (u(!0), c(S, null, L(r.cartesian.lines, (a) => (u(), c(S, {
                  key: `d${a.key}`
                }, [
                  (u(!0), c(S, null, L(a.points, (d, h) => (u(), c(S, { key: h }, [
                    d ? (u(), c("circle", {
                      key: 0,
                      class: "ui-chart-dot",
                      cx: d[0],
                      cy: d[1],
                      r: "4",
                      fill: a.color
                    }, null, 8, Ss)) : m("", !0)
                  ], 64))), 128))
                ], 64))), 128))
              ])) : m("", !0)
            ], 64)),
            f("line", {
              class: "ui-chart-baseline",
              x1: r.cartesian.left,
              x2: r.cartesian.right,
              y1: r.cartesian.zeroY,
              y2: r.cartesian.zeroY
            }, null, 8, Cs),
            i.type !== "bar" && s.activeIndex != null ? (u(), c("g", Ts, [
              f("line", {
                class: "ui-chart-crosshair",
                x1: r.cartesian.center(s.activeIndex),
                x2: r.cartesian.center(s.activeIndex),
                y1: r.cartesian.top,
                y2: r.cartesian.bottom
              }, null, 8, Is),
              (u(!0), c(S, null, L(r.cartesian.lines, (a) => (u(), c(S, {
                key: `c${a.key}`
              }, [
                a.points[s.activeIndex] ? (u(), c("circle", {
                  key: 0,
                  class: "ui-chart-dot ui-chart-dot--active",
                  cx: a.points[s.activeIndex][0],
                  cy: a.points[s.activeIndex][1],
                  r: "4",
                  fill: a.color
                }, null, 8, Ls)) : m("", !0)
              ], 64))), 128))
            ])) : m("", !0)
          ], 64)) : r.donut ? (u(), c(S, { key: 1 }, [
            (u(!0), c(S, null, L(r.donut.slices, (a) => (u(), c("path", {
              key: a.id,
              class: k(["ui-chart-slice", s.activeIndex != null && s.activeIndex !== a.index && "ui-chart-slice--dim"]),
              d: a.d,
              fill: a.color,
              "data-index": a.index
            }, null, 10, As))), 128)),
            r.donutCenter ? (u(), c("g", Ms, [
              f("text", {
                class: "ui-chart-donut-value",
                x: r.donut.cx,
                y: r.donut.cy - 2,
                "text-anchor": "middle"
              }, p(r.donutCenter.value), 9, zs),
              f("text", {
                class: "ui-chart-tick",
                x: r.donut.cx,
                y: r.donut.cy + 16,
                "text-anchor": "middle"
              }, p(r.donutCenter.label), 9, Ps)
            ])) : m("", !0)
          ], 64)) : m("", !0)
        ], 8, ds)),
        r.tooltip ? (u(), c("div", {
          key: 0,
          class: k(["ui-chart-tooltip", r.tooltip.flip && "ui-chart-tooltip--flip", r.tooltip.middle && "ui-chart-tooltip--middle"]),
          style: B(r.tooltip.style),
          "aria-hidden": "true"
        }, [
          f("p", Es, p(r.tooltip.title), 1),
          (u(!0), c(S, null, L(r.tooltip.rows, (a) => (u(), c("div", {
            key: a.key,
            class: "ui-chart-tooltip-row"
          }, [
            (u(), c("svg", Os, [
              f("line", {
                x1: "0",
                x2: "12",
                y1: "6",
                y2: "6",
                stroke: a.color,
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-dasharray": a.dash || void 0
              }, null, 8, Ds)
            ])),
            f("span", Rs, p(a.label), 1),
            f("span", Ns, p(a.value), 1)
          ]))), 128)),
          r.tooltip.total != null ? (u(), c("div", Fs, [
            f("span", Vs, p(r.totalLabel), 1),
            f("span", Bs, p(r.tooltip.total), 1)
          ])) : m("", !0)
        ], 6)) : m("", !0)
      ], 64)) : m("", !0)
    ], 44, us),
    r.legendItems.length ? (u(), c("ul", {
      key: 0,
      class: "ui-chart-legend",
      "aria-label": r.legendLabel
    }, [
      (u(!0), c(S, null, L(r.legendItems, (a) => (u(), c("li", {
        key: a.key
      }, [
        f("button", {
          type: "button",
          class: k(["ui-chart-legend-item", a.hidden && "ui-chart-legend-item--off"]),
          "aria-pressed": a.hidden ? "false" : "true",
          onClick: (d) => r.toggleSeries(a.key)
        }, [
          (u(), c("svg", Ks, [
            i.type === "line" ? (u(), c("line", {
              key: 0,
              x1: "0",
              x2: "12",
              y1: "6",
              y2: "6",
              stroke: a.color,
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-dasharray": a.dash || void 0
            }, null, 8, Us)) : (u(), c("rect", {
              key: 1,
              x: "1",
              y: "1",
              width: "10",
              height: "10",
              rx: "3",
              fill: a.color
            }, null, 8, Ys))
          ])),
          f("span", Gs, p(a.label), 1)
        ], 10, Hs)
      ]))), 128))
    ], 8, $s)) : m("", !0),
    !i.loading && !r.isEmpty ? (u(), c("table", Ws, [
      i.ariaLabel ? (u(), c("caption", qs, p(i.ariaLabel), 1)) : m("", !0),
      f("thead", null, [
        f("tr", null, [
          f("th", js, p(r.resolvedCategoryLabel), 1),
          (u(!0), c(S, null, L(r.tableSeries, (a) => (u(), c("th", {
            key: a.key,
            scope: "col"
          }, p(a.label), 1))), 128))
        ])
      ]),
      f("tbody", null, [
        (u(!0), c(S, null, L(r.rows, (a, d) => (u(), c("tr", { key: d }, [
          f("th", Zs, p(r.categoryText(a)), 1),
          (u(!0), c(S, null, L(r.tableSeries, (h) => (u(), c("td", {
            key: h.key
          }, p(r.formatValue(r.cell(a, h.key), "table")), 1))), 128))
        ]))), 128))
      ])
    ])) : m("", !0),
    r.interactive ? (u(), c("span", {
      key: 2,
      id: s.hintId,
      class: "sr-only"
    }, p(r.keyboardHint), 9, Xs)) : m("", !0),
    f("span", Qs, p(r.liveText), 1)
  ], 16);
}
const ea = /* @__PURE__ */ x(os, [["render", Js]]), ta = U, ia = {
  name: "Checkbox",
  mixins: [ue],
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
    /** `list` varyantında satırları eşit iç boşluklu kutu yapar; işaretli satır dolgu ile vurgulanır (kenarlık yok). */
    highlight: {
      type: Boolean,
      default: !1
    },
    /** Kutu ölçüsü: sm 16px · md 18px · lg 22px (dokunmatik satır) */
    size: {
      type: String,
      default: "md",
      validator: (e) => ta.includes(e)
    },
    /**
     * Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde
     * (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır.
     */
    presentational: {
      type: Boolean,
      default: !1
    },
    /**
     * Kısmi seçim — "Tümünü seç" alt öğelerin bir kısmı seçiliyken (WAI-ARIA Checkbox, tri-state).
     * Görünüm dolu + çizgi; `aria-checked="mixed"`. Tıklanınca `update:modelValue` normal akışla çalışır.
     */
    indeterminate: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null;
    },
    isIndeterminate() {
      return this.indeterminate && !this.inGroup;
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
        this.size !== "md" ? `ui-checkbox--${this.size}` : "",
        {
          "ui-checkbox--checked": this.isChecked || this.isIndeterminate,
          "ui-checkbox--highlight": this.highlight,
          "ui-checkbox--presentational": this.presentational
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const t = e.target.checked, i = this.uiCheckboxGroup.modelValue, n = Array.isArray(i) ? [...i] : [], s = n.findIndex((r) => Object.is(r, this.value));
        t && s === -1 ? n.push(this.value) : !t && s !== -1 && n.splice(s, 1), this.notifyFormDirty(), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.notifyFormDirty(), this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], i = t.findIndex((n) => Object.is(n, this.value));
        i === -1 ? t.push(this.value) : t.splice(i, 1), this.notifyFormDirty(), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.notifyFormDirty(), this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, ra = ["type", "name", "value", "checked", "indeterminate", "aria-checked", "tabindex", "aria-hidden"], na = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, sa = {
  key: 0,
  class: "ui-checkbox-body"
}, aa = {
  key: 0,
  class: "ui-checkbox-label"
}, la = {
  key: 1,
  class: "ui-checkbox-description"
};
function oa(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("label", {
    class: k(r.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = we(K((...l) => r.toggle && r.toggle(...l), ["prevent"]), ["enter"])),
      t[2] || (t[2] = we(K((...l) => r.toggle && r.toggle(...l), ["prevent"]), ["space"]))
    ]
  }, [
    f("input", {
      type: r.nativeType,
      name: r.nativeName,
      value: r.groupValueString,
      checked: r.isChecked,
      indeterminate: r.isIndeterminate,
      "aria-checked": r.isIndeterminate ? "mixed" : void 0,
      tabindex: i.presentational ? -1 : void 0,
      "aria-hidden": i.presentational ? "true" : void 0,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...l) => r.onNativeChange && r.onNativeChange(...l))
    }, null, 40, ra),
    f("span", na, [
      r.isIndeterminate ? (u(), v(o, {
        key: 0,
        name: "minus",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : r.isChecked ? (u(), v(o, {
        key: 1,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : m("", !0)
    ]),
    i.presentational ? m("", !0) : (u(), c("span", sa, [
      e.$slots.label || i.label ? (u(), c("span", aa, [
        b(e.$slots, "label", {}, () => [
          E(p(i.label), 1)
        ])
      ])) : m("", !0),
      i.description ? (u(), c("span", la, p(i.description), 1)) : m("", !0)
    ]))
  ], 34);
}
const ua = /* @__PURE__ */ x(ia, [["render", oa]]), ca = ["list", "button"], da = ["vertical", "horizontal"], ha = G("ui-checkbox-group"), fa = {
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
      validator: (e) => ca.includes(e)
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || da.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: ha() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : "vertical";
    },
    rootClass() {
      return A(
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
}, ma = ["aria-label"];
function pa(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass),
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, ma);
}
const ga = /* @__PURE__ */ x(fa, [["render", pa]]), ba = U, ya = {
  name: "ChipGroup",
  mixins: [ue],
  inheritAttrs: !1,
  props: {
    /** Tek seçimde değer, `multiple` ile dizi */
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    /** `{ value, label, icon?, disabled?, ariaLabel?, ariaCurrent? }[]` (`ariaCurrent`: ör. `'date'` bugünkü birim) */
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    /** Tek seçimde seçili çipe tekrar basınca seçimi kaldırır */
    clearable: {
      type: Boolean,
      default: !1
    },
    /**
     * Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md) — yanındaki seçici ve filtre
     * çipleriyle aynı yükseklik ve metin. Eskiden sabit `sm` idi. Yoğun yerlerde `size="sm"` verilir.
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || ba.includes(e)
    },
    /** Tek satırda yatay kaydırma (dar ekran); `false` iken alt satıra kayar */
    scrollable: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      focusIndex: 0
    };
  },
  computed: {
    rootClass() {
      return A(
        "ui-chip-group",
        this.scrollable ? "ui-chip-group--scrollable" : "ui-chip-group--wrap",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    normalizedOptions() {
      return (this.options || []).map(
        (e) => e && typeof e == "object" ? e : { value: e, label: String(e) }
      );
    },
    selectedValues() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue == null ? [] : [this.modelValue];
    }
  },
  watch: {
    normalizedOptions: {
      immediate: !0,
      handler() {
        this.syncFocusIndex();
      }
    },
    modelValue() {
      this.syncFocusIndex();
    }
  },
  methods: {
    optionKey(e, t) {
      return e.value == null ? `__${t}` : String(e.value);
    },
    isSelected(e) {
      return this.selectedValues.some((t) => t === e.value);
    },
    syncFocusIndex() {
      const e = this.normalizedOptions.findIndex((i) => this.isSelected(i));
      if (e >= 0) {
        this.focusIndex = e;
        return;
      }
      const t = this.normalizedOptions.findIndex((i) => !i.disabled);
      this.focusIndex = t >= 0 ? t : 0;
    },
    emitValue(e) {
      this.notifyFormDirty(), this.$emit("update:modelValue", e), this.$emit("change", e);
    },
    toggle(e) {
      if (!(this.disabled || e.disabled)) {
        if (this.multiple) {
          const t = this.selectedValues, i = this.isSelected(e) ? t.filter((n) => n !== e.value) : [...t, e.value];
          this.emitValue(i);
          return;
        }
        if (this.isSelected(e)) {
          this.clearable && this.emitValue(null);
          return;
        }
        this.emitValue(e.value);
      }
    },
    chipElements() {
      var e;
      return Array.from(((e = this.$refs.root) == null ? void 0 : e.querySelectorAll("[data-ui-chip]")) || []);
    },
    onKeydown(e) {
      var a;
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
      const i = this.normalizedOptions, n = i.map((d, h) => d.disabled || this.disabled ? -1 : h).filter((d) => d >= 0);
      if (!n.length) return;
      e.preventDefault();
      const s = Fe(e.key, this.$refs.root), r = Math.max(0, n.indexOf(this.focusIndex));
      let o = r;
      e.key === "Home" ? o = 0 : e.key === "End" ? o = n.length - 1 : s === "ArrowRight" || s === "ArrowDown" ? o = (r + 1) % n.length : o = (r - 1 + n.length) % n.length;
      const l = n[o];
      this.focusIndex = l, (a = this.chipElements()[l]) == null || a.focus(), this.multiple || this.toggle(i[l]);
    }
  }
}, va = ["role", "aria-label"];
function _a(e, t, i, n, s, r) {
  const o = y("ui-button");
  return u(), c("div", P({
    ref: "root",
    class: r.rootClass,
    role: i.multiple ? "group" : "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...l) => r.onKeydown && r.onKeydown(...l))
  }), [
    (u(!0), c(S, null, L(r.normalizedOptions, (l, a) => (u(), v(o, {
      key: r.optionKey(l, a),
      type: "button",
      size: i.size,
      rounded: "",
      variant: "solid",
      color: r.isSelected(l) ? "primary" : "secondary",
      "prefix-icon": l.icon || void 0,
      disabled: i.disabled || l.disabled,
      role: i.multiple ? void 0 : "radio",
      "aria-checked": i.multiple ? void 0 : r.isSelected(l) ? "true" : "false",
      "aria-pressed": i.multiple ? r.isSelected(l) ? "true" : "false" : void 0,
      "aria-label": l.ariaLabel || void 0,
      "aria-current": l.ariaCurrent || void 0,
      tabindex: a === s.focusIndex ? 0 : -1,
      "data-ui-chip": "",
      onClick: (d) => r.toggle(l),
      onFocus: (d) => s.focusIndex = a
    }, {
      default: _(() => [
        b(e.$slots, "option", {
          option: l,
          selected: r.isSelected(l)
        }, () => [
          E(p(l.label), 1)
        ])
      ]),
      _: 2
    }, 1032, ["size", "color", "prefix-icon", "disabled", "role", "aria-checked", "aria-pressed", "aria-label", "aria-current", "tabindex", "onClick", "onFocus"]))), 128))
  ], 16, va);
}
const ka = /* @__PURE__ */ x(ya, [["render", _a]]), xa = G("ui-collapsible"), wa = {
  name: "Collapsible",
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: void 0
    },
    /** Kontrolsüz kullanımda ilk durum. */
    defaultOpen: {
      type: Boolean,
      default: !1
    },
    /** Açma / kapama kilitlenir; mevcut durum korunur. */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open"],
  data() {
    return {
      contentId: xa(),
      internalOpen: this.defaultOpen
    };
  },
  computed: {
    isOpen() {
      return this.open !== void 0 ? this.open : this.internalOpen;
    },
    /**
     * `#trigger` slot prop'u: tetikleyici düğmeye `v-bind="triggerAttrs"` ile verilir (Popover ile aynı fikir).
     * İçerik DOM'da kaldığı için `aria-controls` kapalıyken de yazılır.
     */
    triggerAttrs() {
      return {
        "aria-expanded": this.isOpen ? "true" : "false",
        "aria-controls": this.contentId,
        disabled: this.disabled || void 0
      };
    },
    rootClass() {
      return ["ui-collapsible", this.disabled ? "ui-collapsible--disabled" : ""];
    }
  },
  methods: {
    toggle() {
      this.setOpen(!this.isOpen);
    },
    setOpen(e) {
      this.disabled || e === this.isOpen || (this.internalOpen = e, this.$emit("update:open", e));
    }
  }
}, Sa = ["data-state"], Ca = ["id"], Ta = { class: "ui-collapse-inner" };
function Ia(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass),
    "data-state": r.isOpen ? "open" : "closed"
  }, [
    b(e.$slots, "trigger", {
      open: r.isOpen,
      toggle: r.toggle,
      triggerAttrs: r.triggerAttrs
    }),
    f("div", {
      id: s.contentId,
      class: k(["ui-collapse", r.isOpen ? "ui-collapse--open" : ""])
    }, [
      f("div", Ta, [
        b(e.$slots, "default", {
          open: r.isOpen,
          toggle: r.toggle
        })
      ])
    ], 10, Ca)
  ], 10, Sa);
}
const La = /* @__PURE__ */ x(wa, [["render", Ia]]), Aa = [
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
], Ma = {
  name: "ColorPicker",
  mixins: [ue],
  inheritAttrs: !1,
  props: {
    /**
     * Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel;
     * `popover` her zaman panel; `dialog` her zaman dialog.
     */
    presentation: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "popover", "dialog"].includes(e)
    },
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
    block: {
      type: Boolean,
      default: !0
    },
    /**
     * Renk örnekleri — `'#hex'` veya `{ value, label?, color? }`. `color` verilirse örnek o renkle çizilir,
     * `value` anahtar olabilir (ör. `'zinc'`); tetikleyici seçili öğenin `label`'ını gösterir.
     * Verilmezse yerleşik palet.
     */
    options: {
      type: Array,
      default: null
    },
    /** Özel hex alanı — yalnız paletten seçilecekse `false`. */
    showCustom: {
      type: Boolean,
      default: !0
    },
    /** Paneldeki “Temizle” — değer boş bırakılamıyorsa `false`. */
    showClear: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1
    };
  },
  computed: {
    rootClass() {
      return A(
        "ui-color-picker min-w-0",
        this.block ? "ui-color-picker--block w-full" : "ui-color-picker--inline w-auto",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localColor: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.notifyFormDirty(), this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder ? this.triggerPlaceholder : M(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    /** `{ value, label, color }` listesi — düz hex dizisi de aynı biçime çevrilir. */
    swatches() {
      return (this.options || Aa).map(
        (e) => typeof e == "string" ? { value: e, label: e, color: e } : { value: e.value, label: e.label ?? e.value, color: e.color ?? e.value }
      );
    },
    selectedSwatch() {
      return this.swatches.find((e) => e.value === this.localColor) || null;
    },
    /** Anahtar değerli örnekte (ör. `'zinc'`) tetikleyici rengi örnekten gelir. */
    triggerSwatch() {
      var e;
      return ((e = this.selectedSwatch) == null ? void 0 : e.color) || this.localColor || "";
    },
    displayValue() {
      var e;
      return ((e = this.selectedSwatch) == null ? void 0 : e.label) || this.localColor || this.triggerLabel;
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
      this.localColor = "", this.notifyFormDirty(), this.$emit("update:modelValue", null), this.popoverOpen = !1;
    },
    normalizeHex() {
      const e = String(this.localColor || "").trim();
      if (!e) return;
      let t = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), /^#[0-9A-Fa-f]{6}$/.test(t) && (this.localColor = t.toUpperCase());
    }
  }
}, za = ["disabled", "aria-expanded", "onClick"], Pa = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ea = { class: "ui-select-field-suffix" }, Oa = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Da = { class: "ui-color-picker-panel" }, Ra = { class: "ui-color-picker-panel__header" }, Na = { class: "ui-color-picker-panel__title" }, Fa = { class: "ui-color-picker-swatches" }, Va = ["title", "aria-label", "aria-pressed", "onClick"], Ba = {
  key: 0,
  class: "ui-color-picker-custom"
}, $a = { class: "ui-color-picker-panel__title" }, Ha = { class: "ui-color-picker-custom__row" };
function Ka(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("ui-button"), a = y("ui-input"), d = y("ui-popover");
  return u(), c("div", {
    class: k(r.rootClass)
  }, [
    w(d, {
      presentation: i.presentation,
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (h) => s.popoverOpen = h),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: _(({ open: h, toggle: g, close: C }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: g,
          close: C
        }, () => [
          f("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            onClick: g
          }, [
            f("span", Pa, [
              r.triggerSwatch ? (u(), c("span", {
                key: 0,
                class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
                style: B({ backgroundColor: r.triggerSwatch })
              }, null, 4)) : (u(), v(o, {
                key: 1,
                name: "palette",
                size: "xs",
                class: "text-muted-foreground"
              }))
            ]),
            f("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !r.localColor }])
            }, p(r.displayValue), 3),
            f("span", Ea, [
              f("span", Oa, [
                w(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, za)
        ])
      ]),
      content: _(() => [
        f("div", Da, [
          f("div", Ra, [
            f("span", Na, p(r.popoverTitleLabel), 1),
            i.showClear && r.localColor ? (u(), v(l, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: K(r.clearColor, ["stop"])
            }, {
              default: _(() => [
                E(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          f("div", Fa, [
            (u(!0), c(S, null, L(r.swatches, (h) => (u(), c("button", {
              key: h.value,
              type: "button",
              class: k(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": r.localColor === h.value }]),
              style: B({ backgroundColor: h.color }),
              title: h.label,
              "aria-label": h.label,
              "aria-pressed": r.localColor === h.value ? "true" : "false",
              onClick: (g) => r.selectColor(h.value)
            }, [
              r.localColor === h.value ? (u(), v(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : m("", !0)
            ], 14, Va))), 128))
          ]),
          i.showCustom ? (u(), c("div", Ba, [
            f("span", $a, p(r.customColorLabelText), 1),
            f("div", Ha, [
              w(a, {
                modelValue: r.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (h) => r.localColor = h),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: r.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              f("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: B({ backgroundColor: r.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])) : m("", !0)
        ])
      ]),
      _: 3
    }, 8, ["presentation", "open", "match-trigger-width", "disabled"])
  ], 2);
}
const Ua = /* @__PURE__ */ x(Ma, [["render", Ka]]), Ya = G("ui-command"), yt = 8, vt = (e) => wi(e, { diacritics: !0 });
function Ga(e, t) {
  const i = vt(t).split(/\s+/).filter(Boolean);
  if (!i.length) return !0;
  const n = Array.isArray(e.keywords) ? e.keywords.join(" ") : e.keywords || "", s = vt(`${e.label || ""} ${n}`);
  return i.every((r) => s.includes(r));
}
function Wa(e, t) {
  const i = String(e || "").toLowerCase().split("+").map((r) => r.trim()).filter(Boolean);
  if (!i.length) return null;
  const s = { key: i.pop(), ctrl: !1, meta: !1, shift: !1, alt: !1 };
  for (const r of i)
    r === "mod" ? s[t ? "meta" : "ctrl"] = !0 : r === "ctrl" || r === "control" ? s.ctrl = !0 : r === "meta" || r === "cmd" || r === "command" ? s.meta = !0 : r === "shift" ? s.shift = !0 : (r === "alt" || r === "option") && (s.alt = !0);
  return s;
}
const qa = {
  name: "Command",
  components: { "ui-command-dialog": Kt },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` — palet (dialog) kullanımı. */
    open: {
      type: Boolean,
      default: !1
    },
    /** true: dialog olmadan, liste bulunduğu yerde çizilir. */
    inline: {
      type: Boolean,
      default: !1
    },
    /** `[{ id, label, description, icon, shortcut, keywords, group, disabled, to }]` */
    items: {
      type: Array,
      default: () => []
    },
    /** `[{ label, items }]` — verilirse `items` yerine kullanılır. */
    groups: {
      type: Array,
      default: () => []
    },
    /** `v-model:query` — verilmezse arama metni içeride tutulur. */
    query: {
      type: String,
      default: void 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    emptyText: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Eşleşme fonksiyonu `(item, query) => boolean`. Varsayılan: etiket + `keywords` içinde
     * harf / aksan duyarsız arama. Sunucu taraflı aramada `() => true` verilip `update:query` dinlenir.
     */
    filter: {
      type: Function,
      default: null
    },
    /** Paleti açıp kapatan genel kısayol (örn. `mod+k`); `inline` iken arama alanına odaklar. */
    hotkey: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open", "update:query", "select"],
  data() {
    return {
      uid: Ya(),
      internalQuery: "",
      /** Etkin seçeneğin `options` içindeki sırası. */
      activePosition: 0
    };
  },
  computed: {
    listId() {
      return `${this.uid}-list`;
    },
    shellAttrs() {
      return this.inline ? { class: this.$attrs.class } : {
        ...this.$attrs,
        open: this.open,
        showClose: !1,
        bodyPadding: "none",
        maxWidth: "lg",
        ariaLabel: this.resolvedListLabel
      };
    },
    currentQuery() {
      return this.query !== void 0 ? this.query : this.internalQuery;
    },
    resolvedPlaceholder() {
      return this.placeholder || M(this, "ui.command.placeholder", "Type a command or search…");
    },
    resolvedEmptyText() {
      return this.emptyText || M(this, "ui.command.empty", "No results found.");
    },
    resolvedLoadingText() {
      return M(this, "ui.command.loading", "Searching…");
    },
    resolvedListLabel() {
      return M(this, "ui.command.label", "Command palette");
    },
    /** Kaynak gruplar: `groups` ya da `items` içindeki `group` adına göre (ilk görülme sırası). */
    sourceGroups() {
      if (this.groups.length)
        return this.groups.map((t) => ({ label: (t == null ? void 0 : t.label) || "", items: (t == null ? void 0 : t.items) || [] }));
      const e = /* @__PURE__ */ new Map();
      for (const t of this.items) {
        if (!t) continue;
        const i = t.group || "";
        e.has(i) || e.set(i, []), e.get(i).push(t);
      }
      return [...e].map(([t, i]) => ({ label: t, items: i }));
    },
    /** Süzülmüş gruplar; her seçenek düz listedeki sırasını (`position`) taşır. */
    visibleGroups() {
      const e = this.filter || Ga, t = this.currentQuery, i = [];
      let n = 0;
      return this.sourceGroups.forEach((s, r) => {
        const o = [];
        for (const l of s.items)
          !l || !e(l, t) || (o.push({ item: l, position: n, id: `${this.uid}-option-${n}` }), n += 1);
        o.length && i.push({
          key: `${r}-${s.label}`,
          label: s.label,
          labelId: `${this.uid}-group-${r}`,
          options: o
        });
      }), i;
    },
    options() {
      return this.visibleGroups.flatMap((e) => e.options);
    },
    hasIcons() {
      return this.sourceGroups.some((e) => e.items.some((t) => t == null ? void 0 : t.icon));
    },
    activeId() {
      const e = this.options[this.activePosition];
      return e && !e.item.disabled ? e.id : void 0;
    }
  },
  watch: {
    open(e) {
      e && !this.inline && this.setQuery(""), e && this.resetActive();
    },
    currentQuery() {
      this.resetActive();
    },
    options() {
      const e = this.options[this.activePosition];
      (!e || e.item.disabled) && this.resetActive();
    }
  },
  mounted() {
    var t;
    const e = ((t = navigator.userAgentData) == null ? void 0 : t.platform) || navigator.platform || navigator.userAgent || "";
    this.apple = /mac|iphone|ipad|ipod/i.test(e), document.addEventListener("keydown", this.onHotkey), this.resetActive();
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.onHotkey);
  },
  methods: {
    /** Arama alanına odaklan (dışarıdan `ref` ile çağrılabilir). */
    focus() {
      var e;
      (e = this.$refs.input) == null || e.focus();
    },
    setQuery(e) {
      e !== this.currentQuery && (this.internalQuery = e, this.$emit("update:query", e));
    },
    onInput(e) {
      this.setQuery(e.target.value);
    },
    resetActive() {
      this.activePosition = Math.max(0, this.options.findIndex((e) => !e.item.disabled)), this.$nextTick(() => {
        this.$refs.list && (this.$refs.list.scrollTop = 0);
      });
    },
    setActive(e) {
      var t;
      e !== this.activePosition && ((t = this.options[e]) != null && t.item.disabled || (this.activePosition = e));
    },
    /** Etkin seçeneği `step` kadar taşır; devre dışı seçenekler atlanır. `wrap` uçlarda döner. */
    moveActive(e, t) {
      const i = this.options.length;
      if (!i) return;
      const n = e < 0 ? -1 : 1, s = (l) => l >= 0 && l < i && !this.options[l].item.disabled;
      let r = this.activePosition + e;
      r = t ? (r % i + i) % i : Math.min(i - 1, Math.max(0, r));
      let o = -1;
      for (let l = 0; l < i && o < 0; l += 1) {
        const a = r + n * l, d = t ? (a % i + i) % i : a;
        s(d) && (o = d);
      }
      for (let l = 1; l < i && o < 0; l += 1)
        s(r - n * l) && (o = r - n * l);
      o < 0 || (this.activePosition = o, this.scrollActiveIntoView());
    },
    moveToEdge(e) {
      const t = this.options.filter((i) => !i.item.disabled);
      t.length && (this.activePosition = (e ? t[t.length - 1] : t[0]).position, this.scrollActiveIntoView());
    },
    scrollActiveIntoView() {
      this.$nextTick(() => {
        var i;
        const e = (i = this.options[this.activePosition]) == null ? void 0 : i.id, t = e ? document.getElementById(e) : null;
        t == null || t.scrollIntoView({ block: "nearest" });
      });
    },
    onKeydown(e) {
      if (e.isComposing) return;
      const t = {
        ArrowDown: () => this.moveActive(1, !0),
        ArrowUp: () => this.moveActive(-1, !0),
        PageDown: () => this.moveActive(yt, !1),
        PageUp: () => this.moveActive(-yt, !1),
        Home: () => this.moveToEdge(!1),
        End: () => this.moveToEdge(!0),
        Enter: () => {
          const i = this.options[this.activePosition];
          i && this.select(i.item);
        }
      };
      t[e.key] && (e.preventDefault(), t[e.key]());
    },
    /** Seçim: `select` olayı, `to` varsa yönlendirme, palet kullanımında kapanış. */
    select(e) {
      !e || e.disabled || (this.$emit("select", e), e.to != null && e.to !== "" && this.$router && this.$router.push(e.to), this.inline || this.$emit("update:open", !1));
    },
    onHotkey(e) {
      var s;
      if (!this.hotkey || e.repeat) return;
      const t = Wa(this.hotkey, this.apple);
      if (!t || String(e.key).toLowerCase() !== t.key || e.ctrlKey !== t.ctrl || e.metaKey !== t.meta || e.shiftKey !== t.shift || e.altKey !== t.alt) return;
      const i = e.target, n = (s = i == null ? void 0 : i.closest) == null ? void 0 : s.call(i, 'input, textarea, select, [contenteditable="true"]');
      n && n !== this.$refs.input || (e.preventDefault(), this.inline ? this.focus() : this.$emit("update:open", !this.open));
    }
  }
}, ja = { class: "ui-command-search" }, Za = {
  class: "ui-command-search-icon",
  "aria-hidden": "true"
}, Xa = ["aria-controls", "aria-activedescendant", "aria-label", "placeholder", "value"], Qa = ["id", "aria-label", "aria-busy"], Ja = ["role", "aria-labelledby"], el = ["id"], tl = ["id", "aria-selected", "aria-disabled", "onPointermove", "onClick"], il = {
  key: 0,
  class: "ui-command-item-icon",
  "aria-hidden": "true"
}, rl = { class: "ui-command-item-copy" }, nl = { class: "ui-command-item-label" }, sl = {
  key: 0,
  class: "ui-command-item-description"
}, al = {
  key: 1,
  class: "ui-kbd ui-kbd--md ui-command-item-shortcut"
}, ll = {
  class: "ui-command-empty",
  role: "status",
  "aria-live": "polite"
};
function ol(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), v(le(i.inline ? "div" : "ui-command-dialog"), P(r.shellAttrs, {
    "onUpdate:open": t[3] || (t[3] = (l) => e.$emit("update:open", l))
  }), {
    default: _(() => [
      f("div", {
        ref: "root",
        class: k(["ui-command", i.inline ? "ui-command--inline" : ""]),
        onKeydown: t[2] || (t[2] = (...l) => r.onKeydown && r.onKeydown(...l))
      }, [
        f("div", ja, [
          f("span", Za, [
            w(o, {
              name: i.loading ? "spinner" : "magnifying-glass",
              size: "sm",
              class: k(i.loading ? "fa-spin" : "")
            }, null, 8, ["name", "class"])
          ]),
          f("input", {
            ref: "input",
            class: "ui-command-input",
            type: "text",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": "true",
            "aria-controls": r.listId,
            "aria-activedescendant": r.activeId,
            "aria-label": r.resolvedPlaceholder,
            placeholder: r.resolvedPlaceholder,
            value: r.currentQuery,
            autocomplete: "off",
            autocapitalize: "off",
            spellcheck: "false",
            onInput: t[0] || (t[0] = (...l) => r.onInput && r.onInput(...l))
          }, null, 40, Xa)
        ]),
        f("div", {
          id: r.listId,
          ref: "list",
          class: "ui-command-list",
          role: "listbox",
          "aria-label": r.resolvedListLabel,
          "aria-busy": i.loading ? "true" : void 0,
          onMousedown: t[1] || (t[1] = K(() => {
          }, ["prevent"]))
        }, [
          (u(!0), c(S, null, L(r.visibleGroups, (l) => (u(), c("div", {
            key: l.key,
            class: "ui-command-group",
            role: l.label ? "group" : "presentation",
            "aria-labelledby": l.label ? l.labelId : void 0
          }, [
            l.label ? (u(), c("div", {
              key: 0,
              id: l.labelId,
              class: "ui-command-group-label",
              role: "presentation"
            }, p(l.label), 9, el)) : m("", !0),
            (u(!0), c(S, null, L(l.options, (a) => (u(), c("div", {
              id: a.id,
              key: a.id,
              class: "ui-command-item",
              role: "option",
              "aria-selected": a.position === s.activePosition ? "true" : "false",
              "aria-disabled": a.item.disabled ? "true" : void 0,
              onPointermove: (d) => r.setActive(a.position),
              onClick: (d) => r.select(a.item)
            }, [
              b(e.$slots, "item", {
                item: a.item,
                active: a.position === s.activePosition
              }, () => [
                r.hasIcons ? (u(), c("span", il, [
                  a.item.icon ? (u(), v(o, {
                    key: 0,
                    name: a.item.icon,
                    size: "sm"
                  }, null, 8, ["name"])) : m("", !0)
                ])) : m("", !0),
                f("span", rl, [
                  f("span", nl, p(a.item.label), 1),
                  a.item.description ? (u(), c("span", sl, p(a.item.description), 1)) : m("", !0)
                ]),
                a.item.shortcut ? (u(), c("kbd", al, p(a.item.shortcut), 1)) : m("", !0)
              ])
            ], 40, tl))), 128))
          ], 8, Ja))), 128))
        ], 40, Qa),
        f("div", ll, [
          r.options.length ? m("", !0) : b(e.$slots, "empty", {
            key: 0,
            query: r.currentQuery
          }, () => [
            E(p(i.loading ? r.resolvedLoadingText : r.resolvedEmptyText), 1)
          ])
        ])
      ], 34)
    ]),
    _: 3
  }, 16);
}
const ul = /* @__PURE__ */ x(qa, [["render", ol]]), cl = 500, dl = 10, _t = 10, hl = {
  name: "ContextMenu",
  components: { MenuList: Ut, Popover: Ve },
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: void 0
    },
    /** `ui-dropdown` ile aynı öğe şeması. */
    items: {
      type: Array,
      default: () => []
    },
    /** true: menü açılmaz, tarayıcının kendi bağlam menüsü çalışır. */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open", "select"],
  data() {
    return {
      internalOpen: !1,
      submenuOpen: !1,
      /** Görünüm koordinatında açılış noktası. */
      point: { x: 0, y: 0 }
    };
  },
  computed: {
    isOpen() {
      return this.open !== void 0 ? this.open : this.internalOpen;
    },
    /**
     * Sanal konum referansı. Popover referansın altına / üstüne sabit pay bırakır; kenarlar
     * o kadar kaydırılır ki menü işaretçiye bitişik açılsın (yukarı dönünce de).
     */
    anchor() {
      const { x: e, y: t } = this.point;
      return {
        getBoundingClientRect: () => ({
          left: e,
          right: e,
          top: t + _t,
          bottom: t - _t,
          x: e,
          y: t,
          width: 0,
          height: 0
        })
      };
    }
  },
  watch: {
    /** Açılınca odak ilk öğeye, kapanınca menüyü açan öğeye döner. */
    isOpen(e) {
      var t;
      if (e)
        this.returnFocusEl = Be(), this.focusFirst();
      else {
        const i = document.activeElement;
        (!i || i === document.body || ((t = this.$refs.menu) == null ? void 0 : t.containsFocus())) && $e(this.returnFocusEl), this.returnFocusEl = null, this.submenuOpen = !1;
      }
    }
  },
  beforeUnmount() {
    this.clearLongPress();
  },
  methods: {
    setOpen(e) {
      this.open === void 0 && (this.internalOpen = e), this.$emit("update:open", e);
    },
    focusFirst() {
      this.$nextTick(() => requestAnimationFrame(() => {
        var e;
        return (e = this.$refs.menu) == null ? void 0 : e.focusItem(0);
      }));
    },
    openAt(e, t) {
      if (!this.disabled) {
        if (this.point = { x: e, y: t }, this.isOpen) {
          this.focusFirst();
          return;
        }
        this.setOpen(!0);
      }
    },
    onContextMenu(e) {
      if (!this.disabled && (e.preventDefault(), !this.longPressFired)) {
        if (e.clientX === 0 && e.clientY === 0) {
          this.openAtElement(e.target);
          return;
        }
        this.openAt(e.clientX, e.clientY);
      }
    },
    openAtElement(e) {
      const i = (e instanceof Element ? e : this.$el).getBoundingClientRect();
      this.openAt(Math.round(i.left), Math.round(i.bottom));
    },
    onKeydown(e) {
      this.disabled || this.isOpen || !(e.key === "ContextMenu" || e.key === "F10" && e.shiftKey) || (e.preventDefault(), this.openAtElement(document.activeElement));
    },
    onTouchStart(e) {
      if (this.clearLongPress(), this.longPressFired = !1, this.disabled || e.touches.length !== 1) return;
      const t = e.touches[0];
      this.touchOrigin = { x: t.clientX, y: t.clientY }, this.longPressTimer = setTimeout(() => {
        this.longPressTimer = null, this.longPressFired = !0, Si("impact-medium"), this.openAt(this.touchOrigin.x, this.touchOrigin.y);
      }, cl);
    },
    onTouchMove(e) {
      if (!this.longPressTimer || !this.touchOrigin) return;
      const t = e.touches[0];
      Math.hypot(t.clientX - this.touchOrigin.x, t.clientY - this.touchOrigin.y) > dl && this.clearLongPress();
    },
    /** Uzun basış menüyü açtıysa parmak kalkınca alttaki öğeye tıklama gitmez. */
    onTouchEnd(e) {
      this.clearLongPress();
      const t = this.longPressFired;
      this.longPressFired = !1, t && e.cancelable && e.preventDefault();
    },
    clearLongPress() {
      this.longPressTimer && clearTimeout(this.longPressTimer), this.longPressTimer = null;
    },
    onSelect(e, t) {
      t ? this.$emit("select", e, t) : this.$emit("select", e);
    }
  }
};
function fl(e, t, i, n, s, r) {
  const o = y("MenuList"), l = y("Popover");
  return u(), c("div", {
    class: "ui-context-menu",
    onContextmenu: t[1] || (t[1] = (...a) => r.onContextMenu && r.onContextMenu(...a)),
    onKeydown: t[2] || (t[2] = (...a) => r.onKeydown && r.onKeydown(...a)),
    onTouchstartPassive: t[3] || (t[3] = (...a) => r.onTouchStart && r.onTouchStart(...a)),
    onTouchmovePassive: t[4] || (t[4] = (...a) => r.onTouchMove && r.onTouchMove(...a)),
    onTouchend: t[5] || (t[5] = (...a) => r.onTouchEnd && r.onTouchEnd(...a)),
    onTouchcancel: t[6] || (t[6] = (...a) => r.clearLongPress && r.clearLongPress(...a))
  }, [
    b(e.$slots, "default"),
    w(l, {
      class: "hidden",
      open: r.isOpen,
      anchor: r.anchor,
      placement: "bottom-start",
      "mobile-centered": !1,
      "close-on-escape": !s.submenuOpen,
      "onUpdate:open": r.setOpen
    }, {
      content: _(({ close: a }) => [
        w(o, {
          ref: "menu",
          items: i.items,
          aligned: "",
          onSelect: r.onSelect,
          onClose: (d) => a(),
          onToggleSubmenu: t[0] || (t[0] = (d) => s.submenuOpen = d)
        }, oe({ _: 2 }, [
          e.$slots.menu ? {
            name: "menu",
            fn: _(() => [
              b(e.$slots, "menu", { close: a })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "onSelect", "onClose"])
      ]),
      _: 3
    }, 8, ["open", "anchor", "close-on-escape", "onUpdate:open"])
  ], 32);
}
const ml = /* @__PURE__ */ x(hl, [["render", fl]]), kt = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, ye = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function He(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in ye ? t : "TRY";
  const i = String(e).trim();
  if (kt[i])
    return kt[i];
  const n = i.toUpperCase();
  return ye[n] ? n : t in ye ? t : "TRY";
}
function di(e) {
  var i;
  const t = He(e);
  if (ye[t])
    return ye[t];
  try {
    const s = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((r) => r.type === "currency");
    return ((i = s == null ? void 0 : s.value) == null ? void 0 : i.trim()) || t;
  } catch {
    return t;
  }
}
function Vp(e, t, i = "tr-TR") {
  const n = Number(e) || 0, s = He(t);
  try {
    return new Intl.NumberFormat(i, { style: "currency", currency: s }).format(n);
  } catch {
    return `${di(s)}${n.toFixed(2)}`;
  }
}
function hi(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const i = t.indexOf(".");
  if (i !== -1) {
    const n = t.slice(0, i), s = t.slice(i + 1).replace(/\./g, "");
    t = `${n}.${s}`;
  }
  return t;
}
function fi(e = "tr-TR") {
  var t, i;
  try {
    const n = new Intl.NumberFormat(e).formatToParts(12345.6);
    return {
      group: ((t = n.find((s) => s.type === "group")) == null ? void 0 : t.value) || ".",
      decimal: ((i = n.find((s) => s.type === "decimal")) == null ? void 0 : i.value) || ","
    };
  } catch {
    return { group: ".", decimal: "," };
  }
}
function pl(e, t = "tr-TR") {
  const { group: i, decimal: n } = fi(t);
  let s = String(e ?? "").trim();
  return s ? (s = s.split(i).join(""), s = s.split(n).join("."), hi(s)) : "";
}
function gl(e, t = "tr-TR") {
  const i = hi(e);
  if (!i) return "";
  const { group: n, decimal: s } = fi(t), [r = "", o] = i.split("."), a = (r.replace(/^0+(?=\d)/, "") || "0").replace(/\B(?=(\d{3})+(?!\d))/g, n);
  return o === void 0 ? a : `${a}${s}${o}`;
}
const bl = G("ui-currency-input"), yl = U, vl = {
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
      validator: (e) => e == null || yl.includes(e)
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
    return { fallbackId: bl() };
  },
  computed: {
    displaySymbol() {
      return di(this.currency);
    },
    resolvedCurrencyCode() {
      return He(this.currency);
    },
    innerValue: {
      get() {
        return gl(this.modelValue, this.locale);
      },
      set(e) {
        const t = pl(e, this.locale);
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, _l = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function kl(e, t, i, n, s, r) {
  const o = y("ui-input");
  return u(), v(o, P({
    id: r.resolvedId,
    modelValue: r.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (l) => r.innerValue = l),
    type: "text",
    inputmode: "decimal",
    size: i.size,
    disabled: i.disabled,
    readonly: i.readonly,
    placeholder: i.placeholder,
    name: i.name,
    autocomplete: i.autocomplete,
    "aria-describedby": i.ariaDescribedby
  }, r.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (l) => e.$emit("focus", l)),
    onBlur: r.onBlur
  }), {
    prepend: _(() => [
      f("span", _l, p(r.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const mi = /* @__PURE__ */ x(vl, [["render", kl]]), xl = G("ui-daterangepicker"), wl = ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"];
function ve(e) {
  return String(e).padStart(2, "0");
}
function H(e) {
  return `${e.getFullYear()}-${ve(e.getMonth() + 1)}-${ve(e.getDate())}`;
}
function ae(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), n = Number(t[2]) - 1, s = Number(t[3]), r = new Date(i, n, s);
  return r.getFullYear() !== i || r.getMonth() !== n || r.getDate() !== s ? null : r;
}
function ie(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function Ie(e, t, i) {
  return new Date(e, t, 1).toLocaleString(i, { month: "long", year: "numeric" });
}
function Sl(e, t, i) {
  const n = ae(e);
  if (!n) return null;
  const s = n.getDay(), r = s === 0 ? -6 : 1 - s, o = new Date(n.getFullYear(), n.getMonth(), n.getDate() + r), l = H(o), a = new Date(o.getFullYear(), o.getMonth(), o.getDate() + 6);
  let d = H(a);
  if (t && d > t && (d = t), i && l < i && d < i) return null;
  let h = l;
  return i && h < i && (h = i), ie(h, d) > 0 ? null : [h, d];
}
function Cl(e, t, i) {
  const n = ae(e);
  if (!n) return null;
  const s = n.getFullYear(), r = `${s}-01-01`;
  let o = `${s}-12-31`;
  if (t && o > t && (o = t), i && r < i && o < i) return null;
  let l = r;
  return i && l < i && (l = i), ie(l, o) > 0 ? null : [l, o];
}
function xt(e, t, i, n) {
  const s = `${e}-${ve(t + 1)}-01`, r = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${ve(t + 1)}-${ve(r)}`;
  if (i && o > i && (o = i), n && s < n && o < n) return null;
  let l = s;
  return n && l < n && (l = n), ie(l, o) > 0 ? null : [l, o];
}
const Tl = {
  name: "DateRangePicker",
  mixins: [Y, ue],
  inheritAttrs: !1,
  props: {
    /**
     * Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel;
     * `popover` her zaman panel; `dialog` her zaman dialog.
     */
    presentation: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "popover", "dialog"].includes(e)
    },
    /**
     * Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür:
     * `tr` / `en-GB` pazartesi, `en-US` pazar.
     */
    weekStart: {
      type: Number,
      default: void 0,
      validator: (e) => e == null || Number.isInteger(e) && e >= 0 && e <= 6
    },
    /** `[startYmd, endYmd]` */
    modelValue: {
      type: Array,
      default: () => ["", ""]
    },
    /**
     * Masaüstü panelin tetikleyiciye göre yeri. Varsayılan sağa hizalı (`bottom-end`);
     * araç çubuğunun solundaki filtre çipinde `bottom-start` verilir, panel sola taşmaz.
     */
    placement: {
      type: String,
      default: "bottom-end",
      validator: (e) => wl.includes(e)
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
    },
    /**
     * `false`: tetikleyici çizilmez; panel `anchor` öğesine göre `v-model:open` ile açılır
     * (ör. bir seçim çipindeki “Özel aralık”).
     */
    showTrigger: {
      type: Boolean,
      default: !0
    },
    /** Konum referansı (HTMLElement, bileşen örneği veya CSS seçici) — `ui-popover` `anchor` */
    anchor: {
      type: [String, Object],
      default: null
    }
  },
  emits: ["update:modelValue", "change", "update:open"],
  data() {
    var i, n;
    const e = ((i = this.modelValue) == null ? void 0 : i[0]) || "", t = ae(e) || ae((n = this.modelValue) == null ? void 0 : n[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: xl(),
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: "",
      /** Klavye ile gezilen gün (roving tabindex). */
      focusYmd: "",
      /** Mobilde tek ay — çift ay dikey yığılınca panel sığmıyor. */
      narrowViewport: typeof window < "u" ? Gt() : !1
    };
  },
  mounted() {
    typeof window > "u" || (this._viewportMq = window.matchMedia(Ii), this._onViewportMq = () => {
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
      return Ti((e = this.$i18n) == null ? void 0 : e.locale);
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
        return ie(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      if (Array.isArray(this.presets))
        return this.presets.map((T) => ({
          ...T,
          disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
        }));
      const e = /* @__PURE__ */ new Date(), t = H(e), i = new Date(e);
      i.setDate(i.getDate() - 1);
      const n = H(i), s = new Date(e);
      s.setDate(s.getDate() + 1);
      const r = H(s), o = e.getMonth(), l = e.getFullYear(), a = new Date(l, o - 1, 1), d = a.getFullYear(), h = a.getMonth(), g = (T, D) => typeof this.$t == "function" ? this.$t(T, D) : T;
      return [
        {
          key: "today",
          label: g("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: g("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "tomorrow",
          label: g("ui.datePicker.tomorrow"),
          range: [r, r]
        },
        {
          key: "thisWeek",
          label: g("ui.dateRangePicker.thisWeek"),
          range: Sl(t, this.maxYmd, this.minYmd)
        },
        {
          key: "thisMonth",
          label: g("ui.dateRangePicker.thisMonth", {
            month: Ie(l, o, this.locale)
          }),
          range: xt(l, o, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: g("ui.dateRangePicker.lastMonth", {
            month: Ie(d, h, this.locale)
          }),
          range: xt(d, h, this.maxYmd, this.minYmd)
        },
        {
          key: "thisYear",
          label: g("ui.dateRangePicker.thisYear", { year: l }),
          range: Cl(t, this.maxYmd, this.minYmd)
        }
      ].map((T) => ({
        ...T,
        disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
      }));
    },
    /** Hafta günü başlıkları dile göre; ızgara dilin hafta başından (`resolvedWeekStart`) başlar. */
    resolvedWeekStart() {
      return Ci(this.weekStart, this.locale);
    },
    weekdayLabels() {
      return Array.from({ length: 7 }, (e, t) => {
        const i = new Date(2024, 0, 7 + this.resolvedWeekStart + t);
        return {
          key: t,
          short: i.toLocaleDateString(this.locale, { weekday: "short" }).replace(".", ""),
          long: i.toLocaleDateString(this.locale, { weekday: "long" })
        };
      });
    },
    /** Tek Tab durağı: gezilen gün → bitiş / başlangıç → bugün → görünen ilk ay günü. */
    rovingYmd() {
      const e = this.calendarPanes.flatMap((n) => n.cells).filter((n) => n.inMonth && !n.disabled), t = (n) => n && e.some((s) => H(s.date) === n), i = H(/* @__PURE__ */ new Date());
      for (const n of [this.focusYmd, this.pickingEnd, this.pickingStart, this.endYmd, this.startYmd, i])
        if (t(n)) return n;
      return e[0] ? H(e[0].date) : "";
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
            title: Ie(this.viewYear, this.viewMonth, this.locale),
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
      return [e, t].map((i) => ({
        ...i,
        title: Ie(i.year, i.month, this.locale),
        cells: this.buildCellsForMonth(i.year, i.month)
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
      var t;
      if (e)
        this.returnFocusEl = Be(), this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.focusYmd = "", this.syncViewFromValue(), this.$nextTick(() => requestAnimationFrame(() => this.focusRovingCell()));
      else {
        this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "", this.focusYmd = "";
        const i = document.activeElement;
        (!i || i === document.body || (t = this.$refs.monthRow) != null && t.contains(i)) && $e(this.returnFocusEl), this.returnFocusEl = null;
      }
    }
  },
  methods: {
    syncViewFromValue() {
      const e = ae(this.startYmd) || ae(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const i = Yt(this.uiDefaults, void 0, "dateRangeFormat"), n = (s) => s ? Li(s, this.locale, i) || s : "…";
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
      const i = new Date(e, t, 1), n = new Date(e, t, 1 - (i.getDay() - this.resolvedWeekStart + 7) % 7), s = this.previewStart, r = this.previewEnd, o = s && r, l = [];
      for (let a = 0; a < 42; a += 1) {
        const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + a), h = d.getMonth() === t && d.getFullYear() === e, g = d.getDate(), C = H(d), T = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${t}`, D = H(/* @__PURE__ */ new Date()) === C, V = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let R = !1, O = !1;
        if (o) {
          const N = ie(s, r) <= 0 ? s : r, j = ie(s, r) <= 0 ? r : s;
          R = ie(C, N) >= 0 && ie(C, j) <= 0, O = C === N || C === j;
        }
        l.push({
          key: T,
          d: g,
          date: d,
          today: D,
          inMonth: h,
          disabled: V,
          inRange: R,
          endpoint: O
        });
      }
      return l;
    },
    ymdOf(e) {
      return H(e);
    },
    cellLabel(e) {
      return e.date.toLocaleDateString(this.locale, { day: "numeric", month: "long", year: "numeric", weekday: "long" });
    },
    focusRovingCell() {
      var e, t, i;
      (i = (t = (e = this.$refs.monthRow) == null ? void 0 : e.querySelector(`[data-ymd="${this.rovingYmd}"]`)) == null ? void 0 : t.focus) == null || i.call(t);
    },
    /** ← → ±1 gün, ↑ ↓ ±1 hafta, Home/End hafta başı/sonu, PageUp/PageDown ±1 ay; görünen aylar kayar. */
    onGridKeydown(e) {
      const t = ae(this.rovingYmd);
      if (!t) return;
      const i = new Date(t), n = getComputedStyle(e.currentTarget).direction === "rtl" ? -1 : 1, s = (i.getDay() - this.resolvedWeekStart + 7) % 7, r = {
        // Sağdan sola yazımda ← ileri, → geri gider (görsel sıra).
        ArrowRight: () => i.setDate(i.getDate() + n),
        ArrowLeft: () => i.setDate(i.getDate() - n),
        ArrowDown: () => i.setDate(i.getDate() + 7),
        ArrowUp: () => i.setDate(i.getDate() - 7),
        Home: () => i.setDate(i.getDate() - s),
        End: () => i.setDate(i.getDate() + (6 - s)),
        PageDown: () => i.setMonth(i.getMonth() + 1),
        PageUp: () => i.setMonth(i.getMonth() - 1)
      };
      if (!r[e.key]) return;
      e.preventDefault(), r[e.key]();
      const o = H(i);
      if (!this.calendarPanes.some((a) => a.year === i.getFullYear() && a.month === i.getMonth())) {
        const a = this.calendarPanes[0], h = i > new Date(a.year, a.month, 1) ? new Date(i.getFullYear(), i.getMonth() - (this.calendarPanes.length - 1), 1) : new Date(i.getFullYear(), i.getMonth(), 1);
        this.viewYear = h.getFullYear(), this.viewMonth = h.getMonth();
      }
      this.focusYmd = o, this.pickingStart && !this.pickingEnd && (this.hoverYmd = o), this.$nextTick(() => this.focusRovingCell());
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = H(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [i, n] = e.range;
      this.pickingStart = i, this.pickingEnd = n, this.notifyFormDirty(), this.$emit("update:modelValue", [i, n]), this.$emit("change", [i, n]), t();
    },
    isPresetActive(e) {
      if (!(e != null && e.range) || this.pickingStart && !this.pickingEnd) return !1;
      const [t, i] = e.range;
      return this.startYmd === t && this.endYmd === i;
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = H(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = i, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, s = i;
      if (ie(s, n) < 0) {
        const r = n;
        n = s, s = r;
      }
      this.pickingStart = n, this.pickingEnd = s, this.notifyFormDirty(), this.$emit("update:modelValue", [n, s]), this.$emit("change", [n, s]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Il = { class: "min-w-0 flex-1 truncate text-foreground" }, Ll = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Al = { class: "ui-daterangepicker-layout" }, Ml = ["aria-label"], zl = { class: "ui-daterangepicker-calendars" }, Pl = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, El = {
  ref: "monthRow",
  class: "ui-daterangepicker-month-row"
}, Ol = { class: "mb-2 flex items-center justify-between gap-2" }, Dl = {
  key: 1,
  class: "size-[var(--ui-control-h-md)] shrink-0",
  "aria-hidden": "true"
}, Rl = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Nl = {
  key: 3,
  class: "size-[var(--ui-control-h-md)] shrink-0",
  "aria-hidden": "true"
}, Fl = { class: "ui-datepicker-weekdays mb-1" }, Vl = ["title"], Bl = ["aria-label"];
function $l(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-popover");
  return u(), c("div", {
    class: k(["ui-daterangepicker", i.showTrigger ? "" : "ui-daterangepicker--headless", i.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    w(l, {
      presentation: i.presentation,
      open: r.resolvedOpen,
      "onUpdate:open": t[3] || (t[3] = (a) => r.resolvedOpen = a),
      placement: i.placement,
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: i.disabled,
      anchor: i.anchor,
      "inherit-layout": !i.showTrigger
    }, {
      trigger: _(({ open: a, toggle: d, close: h }) => [
        i.showTrigger ? b(e.$slots, "trigger", {
          key: 0,
          open: a,
          toggle: d,
          close: h
        }, () => [
          w(o, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": a ? "true" : "false",
            "aria-haspopup": !0,
            onClick: d
          }, {
            default: _(() => [
              f("span", Il, p(r.displayText), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ]) : m("", !0)
      ]),
      content: _(({ close: a }) => [
        f("div", Ll, [
          f("div", Al, [
            r.quickPresets.length ? (u(), c("aside", {
              key: 0,
              class: "ui-daterangepicker-quick",
              "aria-label": r.resolvedQuickAriaLabel
            }, [
              (u(!0), c(S, null, L(r.quickPresets, (d) => (u(), v(o, {
                key: d.key,
                type: "button",
                variant: r.isPresetActive(d) ? "solid" : "outline",
                color: r.isPresetActive(d) ? "primary" : "secondary",
                size: "sm",
                rounded: "",
                disabled: d.disabled,
                "aria-pressed": r.isPresetActive(d) ? "true" : "false",
                "data-active": r.isPresetActive(d) ? "true" : void 0,
                onClick: (h) => r.applyQuick(d, a)
              }, {
                default: _(() => [
                  E(p(d.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "color", "disabled", "aria-pressed", "data-active", "onClick"]))), 128))
            ], 8, Ml)) : m("", !0),
            f("div", zl, [
              r.rangeHint ? (u(), c("p", Pl, p(r.rangeHint), 1)) : m("", !0),
              f("div", El, [
                (u(!0), c(S, null, L(r.calendarPanes, (d) => (u(), c("section", {
                  key: d.key,
                  class: "ui-daterangepicker-month"
                }, [
                  f("div", Ol, [
                    d.showPrev ? (u(), v(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      class: "ui-icon--dir",
                      "aria-label": r.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = K((h) => r.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (u(), c("span", Dl)),
                    f("span", Rl, p(d.title), 1),
                    d.showNext ? (u(), v(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      class: "ui-icon--dir",
                      "aria-label": r.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = K((h) => r.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (u(), c("span", Nl))
                  ]),
                  f("div", Fl, [
                    (u(!0), c(S, null, L(r.weekdayLabels, (h) => (u(), c("span", {
                      key: h.key,
                      title: h.long
                    }, p(h.short), 9, Vl))), 128))
                  ]),
                  f("div", {
                    class: "ui-datepicker-grid",
                    role: "group",
                    "aria-label": d.title,
                    onKeydown: t[2] || (t[2] = (...h) => r.onGridKeydown && r.onGridKeydown(...h))
                  }, [
                    (u(!0), c(S, null, L(d.cells, (h) => (u(), v(o, {
                      key: h.key,
                      variant: r.dayVariant(h),
                      color: r.dayColor(h),
                      size: "sm",
                      cubed: "",
                      disabled: h.disabled,
                      "data-ymd": h.inMonth ? r.ymdOf(h.date) : void 0,
                      tabindex: h.inMonth && r.ymdOf(h.date) === r.rovingYmd ? 0 : -1,
                      "aria-label": r.cellLabel(h),
                      "aria-pressed": h.endpoint ? "true" : "false",
                      "aria-current": h.today ? "date" : void 0,
                      "aria-disabled": h.disabled ? "true" : void 0,
                      "data-outside": h.inMonth ? void 0 : "true",
                      "data-today": h.today ? "true" : void 0,
                      "data-in-range": h.inRange && !h.endpoint ? "true" : void 0,
                      "data-range-endpoint": h.endpoint ? "true" : void 0,
                      onMouseenter: (g) => r.onCellHover(h),
                      onClick: (g) => r.pick(h, a)
                    }, {
                      default: _(() => [
                        E(p(h.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "data-ymd", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
                  ], 40, Bl)
                ]))), 128))
              ], 512)
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["presentation", "open", "placement", "width", "disabled", "anchor", "inherit-layout"])
  ], 2);
}
const Hl = /* @__PURE__ */ x(Tl, [["render", $l]]), Kl = ["sm", "md"], Ul = {
  name: "Field",
  mixins: [Y],
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
    /**
     * Değer boyutu. `md` (varsayılan): metrik ve ayar özeti — 16px medium. `sm`: salt okunur detay
     * listesi (kayıt detayı, özet) — 14px normal; etiket aynı kalır (12px büyük harf, soluk).
     */
    size: {
      type: String,
      default: "md",
      validator: (e) => Kl.includes(e)
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
    iconType: fe,
    /**
     * Başlık ikonu rengi: ortak `color` kümesi (`primary` | `secondary` | `success` | `warning` | `danger` | `info`) veya `muted` | ''.
     * Boş / muted → varsayılan muted-foreground.
     */
    iconTone: {
      type: String,
      default: "",
      validator: (e) => !e || ["primary", "secondary", "success", "warning", "danger", "info", "muted"].includes(e)
    },
    /** Başlık ikonu `ui-icon-tile` (sm) içinde, `iconTone` zemininde gösterilir. */
    iconTile: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    ...Ne(),
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
    iconTileColor() {
      return this.iconTone === "muted" ? "" : this.iconTone;
    },
    titleIconClass() {
      const e = this.iconTone || "muted";
      return A("ui-field__title-icon", `ui-field__title-icon--${e}`);
    },
    rootClass() {
      return A(
        "ui-field",
        this.size === "sm" && "ui-field--sm",
        this.card && "ui-field--card",
        this.fill && "h-full min-h-0 flex flex-col",
        this.$attrs.class
      );
    }
  }
}, Yl = {
  key: 2,
  class: "ui-field__title"
}, Gl = {
  key: 1,
  class: "ui-field__value"
}, Wl = {
  key: 2,
  class: "ui-field__subtitle"
};
function ql(e, t, i, n, s, r) {
  const o = y("ui-icon-tile"), l = y("ui-icon");
  return u(), c("div", P({ class: r.rootClass }, r.passthroughAttrs), [
    i.title || r.showIcon ? (u(), c("div", {
      key: 0,
      class: k(["ui-field__title-row", { "ui-field__title-row--tile": r.showIcon && i.iconTile }])
    }, [
      r.showIcon && i.iconTile ? (u(), v(o, {
        key: 0,
        icon: i.icon,
        "icon-type": e.resolvedIconType,
        color: r.iconTileColor,
        size: "sm"
      }, null, 8, ["icon", "icon-type", "color"])) : r.showIcon ? (u(), c("span", {
        key: 1,
        class: k(r.titleIconClass),
        "aria-hidden": "true"
      }, [
        w(l, {
          name: i.icon,
          type: e.resolvedIconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ], 2)) : m("", !0),
      i.title ? (u(), c("span", Yl, p(i.title), 1)) : m("", !0)
    ], 2)) : m("", !0),
    r.hasValue ? (u(), c("div", Gl, [
      b(e.$slots, "default")
    ])) : m("", !0),
    i.subtitle ? (u(), c("p", Wl, p(i.subtitle), 1)) : m("", !0)
  ], 16);
}
const jl = /* @__PURE__ */ x(Ul, [["render", ql]]), Zl = ["popover", "dialog"], Xl = U, Ql = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "top-start",
  "top-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Jl = {
  name: "FieldAction",
  inheritAttrs: !1,
  props: {
    /**
     * Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel;
     * `popover` her zaman panel; `dialog` her zaman dialog.
     */
    presentation: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "popover", "dialog"].includes(e)
    },
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
      validator: (e) => Zl.includes(e)
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
    /**
     * Tetikleyici boyutu. Verilmezse `ui-filter-chip` gibi temanın kontrol boyutu — yan yana
     * duran filtre çipleriyle aynı yükseklik (eskiden sabit `sm` idi, bir kademe küçük kalıyordu).
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Xl.includes(e)
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Ql.includes(e)
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
    emptyTriggerLabel() {
      return this.actionName || this.title || "";
    },
    triggerAriaLabel() {
      return this.title ? this.title : this.triggerLabel || this.actionName || "Field action";
    },
    triggerVariant() {
      return "solid";
    },
    triggerColor() {
      return this.hasValue || this.resolvedOpen ? "primary" : "secondary";
    },
    showPopoverHeader() {
      return !!(this.$slots.header || this.title || this.description || this.iconOnly && this.clearable && this.hasValue);
    },
    showDialogFooter() {
      return this.showFooter || !!this.$slots.footer;
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
    onTriggerClick(e, t) {
      typeof t == "function" ? t() : this.toggle();
    },
    onClear(e) {
      this.$emit("clear"), typeof e == "function" && e();
    }
  }
}, eo = { class: "ui-field-action-header" }, to = { class: "ui-field-action-header__text" }, io = {
  key: 0,
  class: "ui-field-action-header__title"
}, ro = {
  key: 1,
  class: "ui-field-action-header__description"
}, no = { class: "ui-field-action-body" }, so = { class: "ui-field-action-body" }, ao = { class: "ui-field-action-footer" };
function lo(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-filter-chip"), a = y("ui-popover"), d = y("ui-dialog");
  return u(), c("div", {
    class: k([
      "ui-field-action",
      r.hasValue ? "ui-field-action--filled" : "",
      i.iconOnly ? "ui-field-action--icon" : "",
      e.$attrs.class
    ])
  }, [
    r.isPopover ? (u(), v(a, {
      key: 0,
      presentation: i.presentation,
      open: r.resolvedOpen,
      "onUpdate:open": t[1] || (t[1] = (h) => r.resolvedOpen = h),
      placement: i.placement,
      width: i.popoverWidth,
      disabled: i.disabled,
      "mobile-centered": i.mobileCentered,
      title: i.title || i.actionName || "",
      description: i.description || ""
    }, oe({
      trigger: _(({ open: h, toggle: g }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: g,
          close: r.close,
          label: r.triggerLabel,
          hasValue: r.hasValue,
          clear: () => r.onClear(r.close)
        }, () => [
          i.iconOnly ? (u(), v(o, {
            key: 0,
            type: "button",
            class: "ui-filter-chip",
            variant: r.triggerVariant,
            color: r.triggerColor,
            size: i.size,
            rounded: "",
            cubed: "",
            "prefix-icon": i.prefixIcon,
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            "aria-label": r.triggerAriaLabel,
            onClick: (C) => r.onTriggerClick(C, g)
          }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label", "onClick"])) : (u(), v(l, {
            key: 1,
            icon: i.prefixIcon || "",
            "suffix-icon": i.suffixIcon || "",
            empty: !r.hasValue,
            "empty-label": r.emptyTriggerLabel,
            "value-label": r.hasValue ? String(i.value) : "",
            active: h,
            clearable: i.clearable,
            disabled: i.disabled,
            size: i.size,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": "true",
            "aria-label": r.triggerAriaLabel,
            onClick: (C) => r.onTriggerClick(C, g),
            onClear: t[0] || (t[0] = (C) => r.onClear(r.close))
          }, null, 8, ["icon", "suffix-icon", "empty", "empty-label", "value-label", "active", "clearable", "disabled", "size", "aria-expanded", "aria-label", "onClick"]))
        ])
      ]),
      content: _(({ close: h }) => [
        f("div", no, [
          b(e.$slots, "default", {
            close: h,
            open: r.resolvedOpen
          })
        ])
      ]),
      _: 2
    }, [
      r.showPopoverHeader ? {
        name: "header",
        fn: _(({ close: h }) => [
          b(e.$slots, "header", { close: h }, () => [
            f("div", eo, [
              f("div", to, [
                i.title ? (u(), c("p", io, p(i.title), 1)) : m("", !0),
                i.description ? (u(), c("p", ro, p(i.description), 1)) : m("", !0)
              ]),
              i.iconOnly && i.clearable && r.hasValue ? (u(), v(o, {
                key: 0,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                cubed: "",
                "prefix-icon": "eraser",
                "aria-label": r.resolvedClearLabel,
                onClick: (g) => r.onClear(h)
              }, null, 8, ["aria-label", "onClick"])) : m("", !0)
            ])
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: _(({ close: h }) => [
          b(e.$slots, "footer", { close: h })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["presentation", "open", "placement", "width", "disabled", "mobile-centered", "title", "description"])) : (u(), c(S, { key: 1 }, [
      b(e.$slots, "trigger", {
        open: r.resolvedOpen,
        toggle: r.toggle,
        close: r.close,
        label: r.triggerLabel,
        hasValue: r.hasValue,
        clear: () => r.onClear(r.close)
      }, () => [
        i.iconOnly ? (u(), v(o, {
          key: 0,
          type: "button",
          variant: r.triggerVariant,
          color: r.triggerColor,
          size: i.size,
          rounded: "",
          cubed: "",
          "prefix-icon": i.prefixIcon,
          disabled: i.disabled,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": !0,
          "aria-label": r.triggerAriaLabel,
          onClick: t[2] || (t[2] = (h) => r.onTriggerClick(h, r.toggle))
        }, null, 8, ["variant", "color", "size", "prefix-icon", "disabled", "aria-expanded", "aria-label"])) : (u(), v(l, {
          key: 1,
          icon: i.prefixIcon || "",
          "suffix-icon": i.suffixIcon || "",
          empty: !r.hasValue,
          "empty-label": r.emptyTriggerLabel,
          "value-label": r.hasValue ? String(i.value) : "",
          active: r.resolvedOpen,
          clearable: i.clearable,
          disabled: i.disabled,
          size: i.size,
          "aria-expanded": r.resolvedOpen ? "true" : "false",
          "aria-haspopup": "dialog",
          "aria-label": r.triggerAriaLabel,
          onClick: t[3] || (t[3] = (h) => r.onTriggerClick(h, r.toggle)),
          onClear: t[4] || (t[4] = (h) => r.onClear(r.close))
        }, null, 8, ["icon", "suffix-icon", "empty", "empty-label", "value-label", "active", "clearable", "disabled", "size", "aria-expanded", "aria-label"]))
      ]),
      w(d, {
        open: r.resolvedOpen,
        "onUpdate:open": t[5] || (t[5] = (h) => r.resolvedOpen = h),
        title: i.title,
        description: i.description,
        icon: i.dialogIcon,
        "max-width": i.maxWidth,
        "close-on-backdrop": i.closeOnBackdrop,
        "close-on-escape": i.closeOnEscape
      }, oe({
        default: _(() => [
          f("div", so, [
            b(e.$slots, "default", {
              close: r.close,
              open: r.resolvedOpen
            })
          ])
        ]),
        _: 2
      }, [
        r.showDialogFooter ? {
          name: "footer",
          fn: _(() => [
            b(e.$slots, "footer", { close: r.close }, () => [
              f("div", ao, [
                w(o, {
                  type: "button",
                  variant: "solid",
                  color: "primary",
                  onClick: r.close
                }, {
                  default: _(() => [
                    E(p(r.resolvedDoneLabel), 1)
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
const oo = /* @__PURE__ */ x(Jl, [["render", lo]]), uo = ["auto", "file", "folder"], co = U, ho = { icon: "folder", color: "text-sky-500" }, fo = { icon: "file-lines", color: "text-muted-foreground" }, mo = {
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
}, wt = {
  sm: {
    shell: "min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5",
    icon: "md",
    iconBoost: "",
    label: "ui-text-2xs leading-4",
    root: "max-w-[7rem]"
  },
  md: {
    shell: "min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5",
    icon: "lg",
    iconBoost: "",
    label: "text-xs leading-4",
    root: "max-w-[10rem]"
  },
  lg: {
    shell: "min-h-[5.75rem] min-w-[5.75rem] rounded-[1.25rem] px-5 py-5",
    icon: "lg",
    iconBoost: "scale-[1.4]",
    label: "text-sm leading-5",
    root: "max-w-[12rem]"
  }
};
function Oe(e) {
  return String(e ?? "").trim();
}
function po(e) {
  const t = Oe(e);
  return /[/\\]\s*$/.test(t);
}
function pi(e) {
  const t = Oe(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const i = t.split(/[/\\]/);
  return i[i.length - 1] || t;
}
function go(e) {
  const t = pi(e), i = t.lastIndexOf(".");
  return i <= 0 || i === t.length - 1 ? "" : t.slice(i + 1).toLowerCase();
}
const St = {
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
}, bo = {
  name: "File",
  mixins: [Y],
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
      validator: (e) => uo.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => co.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: fe,
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
      return wt[this.size] || wt.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : po(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = Oe(this.name);
      return e ? this.basenameOnly ? pi(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return Oe(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return ho;
      const e = go(this.name);
      return mo[e] || fo;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? xe(this.uiDefaults, this.iconType) : this.inferredMeta.type || xe(this.uiDefaults, void 0);
    },
    resolvedColorClass() {
      return this.color ? St[this.color] !== void 0 ? St[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, yo = ["aria-label"], vo = ["title"];
function _o(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("div", {
    class: k(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", r.rootSizeClass]),
    role: "img",
    "aria-label": r.ariaLabel
  }, [
    f("div", {
      class: k(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [r.shellClasses, r.folderShellClass]])
    }, [
      w(o, {
        name: r.resolvedIcon,
        type: r.resolvedIconType,
        size: r.iconSizeToken,
        class: k(r.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    i.hideLabel ? m("", !0) : (u(), c("span", {
      key: 0,
      class: k(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", r.labelClass]),
      "aria-hidden": "true",
      title: r.fullLabel
    }, p(r.displayLabel), 11, vo))
  ], 10, yo);
}
const ko = /* @__PURE__ */ x(bo, [["render", _o]]), xo = U, wo = ["primary", "secondary", "success", "warning", "danger"], So = {
  name: "FilterChip",
  props: {
    icon: {
      type: String,
      default: ""
    },
    /** Değer yokken etiket (ör. “Masa seç”) */
    emptyLabel: {
      type: String,
      required: !0
    },
    /** Değer varken etiket */
    valueLabel: {
      type: String,
      default: ""
    },
    empty: {
      type: Boolean,
      default: !1
    },
    /** Bağlı seçici açıkken değer yokken de vurgulu görünür */
    active: {
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
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaExpanded: {
      type: [Boolean, String],
      default: void 0
    },
    /** Açtığı katman türü (`true` / `dialog` / `listbox` …) — `aria-haspopup`. */
    ariaHaspopup: {
      type: [Boolean, String],
      default: void 0
    },
    /** Değer boşken (veya temizlenemezken) sağdaki ikon; doluyken × önceliklidir. */
    suffixIcon: {
      type: String,
      default: ""
    },
    /**
     * Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md = 32px) — yanındaki arama
     * kutusu ve butonlarla aynı yükseklik. Eskiden sabit `sm` idi: tablo araç çubuğundaki çipler
     * panelin geri kalanından bir kademe küçük kalıyordu. Yoğun yerlerde `size="sm"` verilir.
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || xo.includes(e)
    },
    /** Verilirse boş / dolu durum rengi yerine sabit ton kullanılır */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || wo.includes(e)
    }
  },
  emits: ["click", "clear"],
  computed: {
    triggerLabel() {
      return this.empty ? this.emptyLabel : this.valueLabel;
    },
    showClear() {
      return this.clearable && !this.empty;
    },
    buttonColor() {
      return this.color ? this.color : !this.empty || this.active ? "primary" : "secondary";
    },
    buttonVariant() {
      return this.buttonColor === "secondary" || this.buttonColor === "primary" ? "solid" : "muted";
    },
    expandedAttr() {
      if (!(this.ariaExpanded === void 0 || this.ariaExpanded === null))
        return this.ariaExpanded === !0 || this.ariaExpanded === "true" ? "true" : this.ariaExpanded === !1 || this.ariaExpanded === "false" ? "false" : String(this.ariaExpanded);
    }
  },
  methods: {
    onClick(e) {
      var t, i;
      if (this.showClear && ((i = (t = e == null ? void 0 : e.target) == null ? void 0 : t.closest) != null && i.call(t, '.ui-button-suffix, [data-icon="xmark"], .fa-xmark'))) {
        e.preventDefault(), e.stopPropagation(), this.$emit("clear", e);
        return;
      }
      this.$emit("click", e);
    },
    onKeydown(e) {
      !this.showClear || this.disabled || (e.key === "Backspace" || e.key === "Delete") && (e.preventDefault(), this.$emit("clear", e));
    }
  }
};
function Co(e, t, i, n, s, r) {
  const o = y("ui-button");
  return u(), v(o, {
    type: "button",
    class: "ui-filter-chip",
    variant: r.buttonVariant,
    color: r.buttonColor,
    size: i.size,
    rounded: "",
    "prefix-icon": i.icon || void 0,
    "suffix-icon": r.showClear ? "xmark" : i.suffixIcon || void 0,
    disabled: i.disabled,
    "aria-label": i.ariaLabel || r.triggerLabel,
    "aria-expanded": r.expandedAttr,
    "aria-haspopup": i.ariaHaspopup || void 0,
    "aria-keyshortcuts": r.showClear ? "Backspace Delete" : void 0,
    onClick: r.onClick,
    onKeydown: r.onKeydown
  }, {
    default: _(() => [
      E(p(r.triggerLabel), 1)
    ]),
    _: 1
  }, 8, ["variant", "color", "size", "prefix-icon", "suffix-icon", "disabled", "aria-label", "aria-expanded", "aria-haspopup", "aria-keyshortcuts", "onClick", "onKeydown"]);
}
const To = /* @__PURE__ */ x(So, [["render", Co]]);
function Io(e) {
  const t = e.filter((o) => o && (o.width > 0 || o.height > 0));
  if (!t.length) return null;
  const i = Math.min(...t.map((o) => o.top)), n = Math.min(...t.map((o) => o.left)), s = Math.max(...t.map((o) => o.right)), r = Math.max(...t.map((o) => o.bottom));
  return {
    top: i,
    left: n,
    right: s,
    bottom: r,
    width: s - n,
    height: r - i,
    x: n,
    y: i,
    toJSON: () => ({})
  };
}
function Je(e) {
  if (!e || !(e instanceof HTMLElement)) return null;
  if (e.classList.contains("ui-form-row")) return e;
  const t = e.closest(".ui-form-row");
  return t instanceof HTMLElement ? t : e;
}
function Ct(e) {
  const t = Je(e);
  if (!t) return null;
  if (t.classList.contains("ui-form-row")) {
    const i = [
      t.querySelector(".ui-form-row-text"),
      t.querySelector(".ui-form-row-control")
    ].filter((s) => s instanceof HTMLElement), n = Io(i.map((s) => s.getBoundingClientRect()));
    if (n) return n;
  }
  return t.getBoundingClientRect();
}
function Lo(e) {
  var i;
  if (!((i = e == null ? void 0 : e.classList) != null && i.contains("ui-form-row")))
    return [e];
  const t = [e];
  for (const n of e.querySelectorAll(".ui-form-row-text, .ui-form-row-control"))
    n instanceof HTMLElement && t.push(n);
  return t;
}
const Ao = ["dialog", "popover", "card", "tour"], Mo = [
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
], zo = ["sm", "md", "lg", "xl", "2xl", "full"], ee = 12, Po = 8, Eo = {
  name: "Guidance",
  mixins: [Y],
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: "dialog",
      validator: (e) => Ao.includes(e)
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
    iconType: fe,
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
      validator: (e) => Mo.includes(e)
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: ""
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: Po
    },
    maxWidth: {
      type: String,
      default: "sm",
      validator: (e) => zo.includes(e)
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
    ...Ne(),
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
      return e ? typeof e == "object" && e instanceof HTMLElement ? Je(e) : typeof e == "string" && e.trim() ? Je(document.querySelector(e.trim())) : null : null;
    },
    measureTourLayout(e = !1) {
      const t = this.resolveTourTarget(), i = this.$refs.tourPanelRef;
      if (!i) return;
      const n = window.innerWidth, s = window.innerHeight, r = i.getBoundingClientRect(), o = r.width || 320, l = r.height || 180;
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
      const a = Ct(t);
      if (!a) return;
      const d = Math.max(0, Number(this.targetPadding) || 0), h = Math.max(0, a.top - d), g = Math.max(0, a.left - d), C = Math.min(s, a.bottom + d), T = Math.min(n, a.right + d);
      this.tourHighlightStyle = {
        top: `${h}px`,
        left: `${g}px`,
        width: `${Math.max(0, T - g)}px`,
        height: `${Math.max(0, C - h)}px`
      };
      let D = C + ee;
      const V = Wt(t);
      let R = V ? T - o : g;
      this.placement.startsWith("top") ? D = h - l - ee : this.placement.startsWith("right") ? (D = h, R = T + ee) : this.placement.startsWith("left") ? (D = h, R = g - o - ee) : this.placement.includes("end") && (R = V ? g : T - o), e && !this.placement.startsWith("top") && !this.placement.startsWith("left") && !this.placement.startsWith("right") && D + l > s - ee && (D = h - l - ee), D = Math.max(ee, Math.min(D, s - l - ee)), R = Math.max(ee, Math.min(R, n - o - ee)), this.tourPanelStyle = {
        position: "fixed",
        top: `${D}px`,
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
        const t = Ct(e);
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
          for (const i of Lo(t))
            this.tourResizeObserver.observe(i);
      }
    },
    unbindTourListeners() {
      this.tourTargetRetries = 0, this._tourTargetRetryRaf && (cancelAnimationFrame(this._tourTargetRetryRaf), this._tourTargetRetryRaf = null), this._tourLayoutRaf && (cancelAnimationFrame(this._tourLayoutRaf), this._tourLayoutRaf = null), this._tourOnResize && (window.removeEventListener("resize", this._tourOnResize), window.removeEventListener("scroll", this._tourOnResize, !0), this._tourOnResize = null), this.tourResizeObserver && (this.tourResizeObserver.disconnect(), this.tourResizeObserver = null);
    }
  }
}, Oo = { class: "ui-guidance-footer" }, Do = { class: "ui-guidance-popover" }, Ro = {
  key: 0,
  class: "ui-guidance-popover__lead"
}, No = {
  key: 0,
  class: "ui-guidance-popover__icon"
}, Fo = { class: "ui-guidance-popover__text" }, Vo = {
  key: 0,
  class: "ui-guidance-popover__title"
}, Bo = {
  key: 1,
  class: "ui-guidance-popover__description ui-text-default"
}, $o = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--popover"
}, Ho = ["aria-label"], Ko = { class: "ui-guidance-tour__content" }, Uo = { class: "ui-header-lead" }, Yo = { class: "ui-header-lead__main" }, Go = {
  key: 0,
  class: "ui-header-lead__icon"
}, Wo = { class: "ui-header-lead__text" }, qo = {
  key: 0,
  class: "ui-guidance-tour__title"
}, jo = {
  key: 1,
  class: "ui-guidance-tour__description ui-text-default"
}, Zo = {
  key: 0,
  class: "ui-header-lead__actions"
}, Xo = {
  key: 0,
  class: "ui-guidance-tour__body"
}, Qo = {
  key: 1,
  class: "ui-guidance-footer ui-guidance-footer--tour"
};
function Jo(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-card"), a = y("ui-dialog"), d = y("ui-icon"), h = y("ui-popover");
  return r.shouldRender ? (u(), c("div", {
    key: 0,
    class: k(r.rootShellClass)
  }, [
    i.mode === "card" ? (u(), v(l, {
      key: 0,
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
      border: ""
    }, oe({
      default: _(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.actions ? {
        name: "actions",
        fn: _(() => [
          b(e.$slots, "actions")
        ]),
        key: "0"
      } : void 0,
      r.hasFooterActions ? {
        name: "footer",
        fn: _(() => [
          b(e.$slots, "footer", {}, () => [
            f("div", Oo, [
              i.showFooterClose ? (u(), v(o, {
                key: 0,
                type: "button",
                variant: "outline",
                color: "secondary",
                rounded: "",
                onClick: r.onClose
              }, {
                default: _(() => [
                  E(p(r.resolvedCloseLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : m("", !0),
              i.showGo ? (u(), v(o, {
                key: 1,
                type: "button",
                color: "primary",
                rounded: "",
                onClick: r.onGo
              }, {
                default: _(() => [
                  E(p(r.resolvedGoLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : m("", !0)
            ])
          ])
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["icon", "icon-type", "title", "description"])) : i.mode === "dialog" ? (u(), v(a, {
      key: 1,
      open: r.syncOpen,
      "onUpdate:open": t[0] || (t[0] = (g) => r.syncOpen = g),
      icon: i.icon,
      "icon-type": e.resolvedIconType,
      title: i.title,
      description: i.description,
      "max-width": i.maxWidth,
      "close-on-backdrop": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape,
      "show-close": i.showClose,
      onAfterLeave: t[1] || (t[1] = (g) => e.$emit("after-leave"))
    }, oe({
      default: _(() => [
        b(e.$slots, "default")
      ]),
      _: 2
    }, [
      i.showGo && !e.$slots.footer ? {
        name: "footer",
        fn: _(() => [
          w(o, {
            type: "button",
            color: "primary",
            rounded: "",
            onClick: r.onGo
          }, {
            default: _(() => [
              E(p(r.resolvedGoLabel), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        key: "0"
      } : e.$slots.footer ? {
        name: "footer",
        fn: _(() => [
          b(e.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "icon", "icon-type", "title", "description", "max-width", "close-on-backdrop", "close-on-escape", "show-close"])) : i.mode === "popover" ? (u(), v(h, {
      key: 2,
      open: r.syncOpen,
      "onUpdate:open": t[2] || (t[2] = (g) => r.syncOpen = g),
      placement: i.placement,
      width: i.popoverWidth,
      "close-on-outside-click": i.closeOnBackdrop,
      "close-on-escape": i.closeOnEscape
    }, {
      trigger: _((g) => [
        b(e.$slots, "trigger", Er(Or(g)))
      ]),
      content: _(() => [
        f("div", Do, [
          i.icon || i.title || i.description ? (u(), c("div", Ro, [
            i.icon ? (u(), c("span", No, [
              w(d, {
                name: i.icon,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ])) : m("", !0),
            f("div", Fo, [
              i.title ? (u(), c("p", Vo, p(i.title), 1)) : m("", !0),
              i.description ? (u(), c("p", Bo, p(i.description), 1)) : m("", !0)
            ])
          ])) : m("", !0),
          b(e.$slots, "default"),
          r.hasFooterActions && !e.$slots.footer ? (u(), c("div", $o, [
            i.showFooterClose ? (u(), v(o, {
              key: 0,
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              rounded: "",
              onClick: r.onClose
            }, {
              default: _(() => [
                E(p(r.resolvedCloseLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0),
            i.showGo ? (u(), v(o, {
              key: 1,
              type: "button",
              color: "primary",
              size: "sm",
              rounded: "",
              onClick: r.onGo
            }, {
              default: _(() => [
                E(p(r.resolvedGoLabel), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ])) : b(e.$slots, "footer", { key: 2 })
        ])
      ]),
      _: 3
    }, 8, ["open", "placement", "width", "close-on-outside-click", "close-on-escape"])) : i.mode === "tour" ? (u(), v(Se, {
      key: 3,
      to: "body"
    }, [
      w(Ce, {
        name: "ui-overlay-dialog",
        appear: "",
        onAfterLeave: t[5] || (t[5] = (g) => e.$emit("after-leave"))
      }, {
        default: _(() => [
          r.syncOpen ? (u(), c("div", {
            key: 0,
            class: k(["ui-guidance-tour", { "ui-guidance-tour--has-target": s.tourHighlightStyle }]),
            role: "presentation",
            onKeydown: t[4] || (t[4] = we((...g) => r.onEscape && r.onEscape(...g), ["esc"]))
          }, [
            i.closeOnBackdrop ? (u(), c("div", {
              key: 0,
              class: "ui-guidance-tour__backdrop",
              "aria-hidden": "true",
              onClick: t[3] || (t[3] = (...g) => r.onBackdrop && r.onBackdrop(...g))
            })) : m("", !0),
            s.tourHighlightStyle ? (u(), c("div", {
              key: 1,
              class: "ui-guidance-tour__highlight",
              style: B(s.tourHighlightStyle),
              "aria-hidden": "true"
            }, null, 4)) : m("", !0),
            f("div", {
              ref: "tourPanelRef",
              class: "ui-guidance-tour__panel ui-surface ui-card ui-card--no-padding",
              style: B(s.tourPanelStyle),
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i.title || r.resolvedGoLabel
            }, [
              f("div", Ko, [
                f("div", Uo, [
                  f("div", Yo, [
                    i.icon ? (u(), c("span", Go, [
                      w(d, {
                        name: i.icon,
                        type: e.resolvedIconType,
                        size: "sm"
                      }, null, 8, ["name", "type"])
                    ])) : m("", !0),
                    f("div", Wo, [
                      i.title ? (u(), c("p", qo, p(i.title), 1)) : m("", !0),
                      i.description ? (u(), c("p", jo, p(i.description), 1)) : m("", !0)
                    ])
                  ]),
                  i.showClose ? (u(), c("div", Zo, [
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
                  ])) : m("", !0)
                ]),
                e.$slots.default ? (u(), c("div", Xo, [
                  b(e.$slots, "default")
                ])) : m("", !0),
                r.hasFooterActions && !e.$slots.footer ? (u(), c("div", Qo, [
                  i.showFooterClose ? (u(), v(o, {
                    key: 0,
                    type: "button",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onClose
                  }, {
                    default: _(() => [
                      E(p(r.resolvedCloseLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : m("", !0),
                  i.showGo ? (u(), v(o, {
                    key: 1,
                    type: "button",
                    color: "primary",
                    size: "sm",
                    rounded: "",
                    onClick: r.onGo
                  }, {
                    default: _(() => [
                      E(p(r.resolvedGoLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : m("", !0)
                ])) : b(e.$slots, "footer", { key: 2 })
              ])
            ], 12, Ho)
          ], 34)) : m("", !0)
        ]),
        _: 3
      })
    ])) : m("", !0)
  ], 2)) : m("", !0);
}
const eu = /* @__PURE__ */ x(Eo, [["render", Jo]]), tu = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end",
  "top"
], iu = {
  name: "HoverCard",
  components: { Popover: Ve },
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: void 0
    },
    /** Açılış gecikmesi (ms). */
    openDelay: {
      type: Number,
      default: 500
    },
    /** Kapanış gecikmesi (ms) — işaretçinin karta geçmesine izin verir. */
    closeDelay: {
      type: Number,
      default: 200
    },
    placement: {
      type: String,
      default: "bottom",
      validator: (e) => tu.includes(e)
    },
    /** Kart genişliği (örn. `20rem`); verilmezse içerik + tema üst sınırı. */
    width: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Kart panelinin erişilebilir adı; metin i18n'den gelir. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open"],
  data() {
    return {
      internalOpen: !1
    };
  },
  computed: {
    isOpen() {
      return this.open !== void 0 ? this.open : this.internalOpen;
    }
  },
  watch: {
    disabled(e) {
      e && (this.clearTimers(), this.setOpen(!1));
    }
  },
  beforeUnmount() {
    this.clearTimers();
  },
  methods: {
    setOpen(e) {
      e !== this.isOpen && (this.open === void 0 && (this.internalOpen = e), this.$emit("update:open", e));
    },
    clearTimers() {
      this.openTimer && clearTimeout(this.openTimer), this.closeTimer && clearTimeout(this.closeTimer), this.openTimer = null, this.closeTimer = null;
    },
    scheduleOpen() {
      this.disabled || (this.clearTimers(), !this.isOpen && (this.openTimer = setTimeout(() => {
        this.openTimer = null, this.setOpen(!0);
      }, Math.max(0, this.openDelay))));
    },
    scheduleClose() {
      this.clearTimers(), this.isOpen && (this.closeTimer = setTimeout(() => {
        this.closeTimer = null, this.setOpen(!1);
      }, Math.max(0, this.closeDelay)));
    },
    /** Dokunmatik: kart açılmaz; dokunuşun ardından gelen odak da açmaz. */
    onPointerDown(e) {
      this.touched = e.pointerType === "touch";
    },
    onTriggerEnter(e) {
      e.pointerType !== "touch" && (this.touched = !1, this.scheduleOpen());
    },
    onCardEnter() {
      this.clearTimers();
    },
    onLeave(e) {
      e.pointerType !== "touch" && this.scheduleClose();
    },
    onFocusIn() {
      this.touched || this.scheduleOpen();
    },
    /** Odak tetikleyici ile kart arasında gezerken kapanmaz. */
    onFocusOut(e) {
      var i, n;
      const t = e.relatedTarget;
      t && ((i = this.$refs.trigger) != null && i.contains(t) || (n = this.$refs.card) != null && n.contains(t)) || this.scheduleClose();
    },
    /** Popover yalnız kapanışı bildirir (Escape, dış tıklama). */
    onPopoverOpenChange(e) {
      e || (this.clearTimers(), this.setOpen(!1));
    }
  }
};
function ru(e, t, i, n, s, r) {
  const o = y("Popover");
  return u(), v(o, {
    open: r.isOpen,
    placement: i.placement,
    width: i.width,
    "mobile-centered": !1,
    "aria-label": i.ariaLabel,
    "onUpdate:open": r.onPopoverOpenChange
  }, {
    trigger: _(() => [
      f("span", {
        ref: "trigger",
        class: "ui-hover-card-trigger",
        onPointerdown: t[0] || (t[0] = (...l) => r.onPointerDown && r.onPointerDown(...l)),
        onPointerenter: t[1] || (t[1] = (...l) => r.onTriggerEnter && r.onTriggerEnter(...l)),
        onPointerleave: t[2] || (t[2] = (...l) => r.onLeave && r.onLeave(...l)),
        onFocusin: t[3] || (t[3] = (...l) => r.onFocusIn && r.onFocusIn(...l)),
        onFocusout: t[4] || (t[4] = (...l) => r.onFocusOut && r.onFocusOut(...l))
      }, [
        b(e.$slots, "trigger", { open: r.isOpen })
      ], 544)
    ]),
    content: _(() => [
      f("div", {
        ref: "card",
        class: k(["ui-hover-card", i.width != null && i.width !== "" ? "ui-hover-card--sized" : ""]),
        onPointerenter: t[5] || (t[5] = (...l) => r.onCardEnter && r.onCardEnter(...l)),
        onPointerleave: t[6] || (t[6] = (...l) => r.onLeave && r.onLeave(...l)),
        onFocusout: t[7] || (t[7] = (...l) => r.onFocusOut && r.onFocusOut(...l))
      }, [
        b(e.$slots, "default")
      ], 34)
    ]),
    _: 3
  }, 8, ["open", "placement", "width", "aria-label", "onUpdate:open"]);
}
const nu = /* @__PURE__ */ x(iu, [["render", ru]]), su = {
  name: "IconPicker",
  mixins: [Y, ue],
  inheritAttrs: !1,
  props: {
    /**
     * Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel;
     * `popover` her zaman panel; `dialog` her zaman dialog.
     */
    presentation: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "popover", "dialog"].includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    },
    icons: {
      type: Array,
      default: () => []
    },
    iconType: fe,
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
    block: {
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
    ...Ne(),
    rootClass() {
      return A(
        "ui-icon-picker min-w-0",
        this.block ? "ui-icon-picker--block w-full" : "ui-icon-picker--inline w-auto",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localIcon: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.notifyFormDirty(), this.$emit("update:modelValue", e || null);
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
      e && (i = t.filter((s) => String(s).toLowerCase().includes(e)));
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
      this.localIcon = "", this.notifyFormDirty(), this.$emit("update:modelValue", null), this.popoverOpen = !1;
    }
  }
}, au = ["disabled", "aria-expanded", "onClick"], lu = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ou = { class: "ui-select-field-suffix" }, uu = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, cu = { class: "ui-icon-picker-panel" }, du = { class: "ui-icon-picker-panel__header" }, hu = { class: "ui-icon-picker-panel__title" }, fu = { class: "ui-icon-picker-panel__search" }, mu = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, pu = {
  key: 1,
  class: "ui-icon-picker-grid"
}, gu = ["title", "onClick"];
function bu(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("ui-button"), a = y("ui-input"), d = y("ui-popover");
  return u(), c("div", {
    class: k(r.rootClass)
  }, [
    w(d, {
      presentation: i.presentation,
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (h) => s.popoverOpen = h),
      placement: "bottom-start",
      width: i.panelWidth,
      disabled: i.disabled
    }, {
      trigger: _(({ open: h, toggle: g, close: C }) => [
        b(e.$slots, "trigger", {
          open: h,
          toggle: g,
          close: C
        }, () => [
          f("button", {
            type: "button",
            class: "ui-select-field",
            disabled: i.disabled,
            "aria-expanded": h ? "true" : "false",
            "aria-haspopup": !0,
            onClick: g
          }, [
            f("span", lu, [
              w(o, {
                name: r.localIcon || "grid",
                type: e.resolvedIconType,
                size: "xs"
              }, null, 8, ["name", "type"])
            ]),
            f("span", {
              class: k(["ui-select-value", { "ui-select-value--placeholder": !r.localIcon }])
            }, p(r.localIcon || r.triggerLabel), 3),
            f("span", ou, [
              f("span", uu, [
                w(o, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 8, au)
        ])
      ]),
      content: _(() => [
        f("div", cu, [
          f("div", du, [
            f("span", hu, p(r.popoverTitleLabel), 1),
            r.localIcon ? (u(), v(l, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: K(r.clearIcon, ["stop"])
            }, {
              default: _(() => [
                E(p(r.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          f("div", fu, [
            w(a, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (h) => s.searchQuery = h),
              "data-form-untracked": "",
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: r.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          r.filteredIcons.length ? (u(), c("div", pu, [
            (u(!0), c(S, null, L(r.filteredIcons, (h) => (u(), c("button", {
              key: h,
              type: "button",
              class: k(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": r.localIcon === h }]),
              title: h,
              onClick: (g) => r.selectIcon(h)
            }, [
              w(o, {
                name: h,
                type: e.resolvedIconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, gu))), 128))
          ])) : (u(), c("div", mu, p(r.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["presentation", "open", "width", "disabled"])
  ], 2);
}
const yu = /* @__PURE__ */ x(su, [["render", bu]]), vu = 56, _u = 1.15, ku = 0.28, xu = {
  name: "Intro",
  mixins: [Y],
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
      lockedAxis: null,
      /** Kökün yazı yönü — ray kaydırma işareti buna bağlı; görünür olunca ve etkileşimde tazelenir. */
      rtl: !1
    };
  },
  computed: {
    isVisible() {
      return this.overlay ? this.open : !0;
    },
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((t, i) => ({
        key: (t == null ? void 0 : t.key) ?? `intro-${i}`,
        icon: (t == null ? void 0 : t.icon) ?? "",
        iconType: (t == null ? void 0 : t.iconType) ?? xe(this.uiDefaults, void 0),
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
      return this.skipLabel || M(this, "ui.intro.skip", "Skip");
    },
    resolvedNextLabel() {
      return this.nextLabel || M(this, "ui.intro.next", "Next");
    },
    resolvedFinishLabel() {
      return this.finishLabel || M(this, "ui.intro.finish", "Get started");
    },
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.intro.stepsAria", "Introduction");
    },
    resolvedCarouselRole() {
      return M(this, "ui.intro.carouselRole", "carousel");
    },
    primaryLabel() {
      return this.isLastStep ? this.resolvedFinishLabel : this.resolvedNextLabel;
    },
    trackStyle() {
      return { transform: `translate3d(${`calc(${(this.rtl ? 1 : -1) * this.activeIndex * 100}% + ${this.dragOffset}px)`}, 0, 0)` };
    },
    rootClass() {
      return A("ui-intro", this.overlay && "ui-intro--overlay", this.$attrs.class);
    },
    passthroughAttrs() {
      return qt(this.$attrs);
    }
  },
  watch: {
    isVisible(e) {
      e && (this.resetDrag(), this.$nextTick(() => {
        var t, i;
        this.isRtl(), (i = (t = this.$refs.root) == null ? void 0 : t.focus) == null || i.call(t, { preventScroll: !0 });
      }));
    }
  },
  mounted() {
    this.isRtl();
  },
  beforeUnmount() {
    this.releasePointer();
  },
  methods: {
    /** Yönü ölçer ve `rtl` durumuna yazar (ray dönüşümü tepkisel kalsın). */
    isRtl() {
      return this.rtl = Wt(this.$refs.root), this.rtl;
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
      var t, i;
      if (!(e.pointerType === "mouse" && e.button !== 0) && !this.isInteractiveTarget(e.target) && !(this.normalizedSteps.length < 2)) {
        this.isRtl(), this.dragging = !0, this.dragOffset = 0, this.pointerId = e.pointerId, this.startX = e.clientX, this.startY = e.clientY, this.startAt = e.timeStamp, this.lockedAxis = null;
        try {
          (i = (t = e.currentTarget) == null ? void 0 : t.setPointerCapture) == null || i.call(t, e.pointerId);
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
      var i;
      if (typeof window < "u" && window.PointerEvent || this.isInteractiveTarget(e.target) || this.normalizedSteps.length < 2) return;
      const t = (i = e.changedTouches) == null ? void 0 : i[0];
      t && (this.isRtl(), this.dragging = !0, this.dragOffset = 0, this.pointerId = "touch", this.startX = t.clientX, this.startY = t.clientY, this.startAt = e.timeStamp, this.lockedAxis = null);
    },
    onTouchMove(e) {
      var i;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (i = e.changedTouches) == null ? void 0 : i[0];
      t && this.applyDrag(t.clientX, t.clientY, e);
    },
    onTouchEnd(e) {
      var i;
      if (!this.dragging || this.pointerId !== "touch") return;
      const t = (i = e.changedTouches) == null ? void 0 : i[0];
      this.commitDrag((t == null ? void 0 : t.clientX) ?? this.startX + this.dragOffset, e.timeStamp);
    },
    applyDrag(e, t, i) {
      var d;
      const n = e - this.startX, s = t - this.startY;
      if (!this.lockedAxis) {
        if (Math.abs(n) < 8 && Math.abs(s) < 8) return;
        if (this.lockedAxis = Math.abs(n) > Math.abs(s) * _u ? "x" : "y", this.lockedAxis === "y") {
          this.resetDrag();
          return;
        }
      }
      if (this.lockedAxis !== "x") return;
      (d = i == null ? void 0 : i.preventDefault) == null || d.call(i);
      const r = this.activeIndex === 0, o = this.activeIndex === this.lastIndex;
      let l = n;
      const a = this.rtl ? l < 0 : l > 0;
      (r && a || o && !a && l !== 0) && (l *= ku), this.dragOffset = l;
    },
    commitDrag(e, t) {
      var d;
      const i = e - this.startX, n = Math.max(1, t - this.startAt), s = i / n, r = ((d = this.$refs.viewport) == null ? void 0 : d.clientWidth) || 0, o = Math.max(vu, r * 0.18), l = this.lockedAxis === "x" && (Math.abs(i) >= o || Math.abs(s) > 0.45);
      if (this.releasePointer(), this.resetDrag(), !l) return;
      if (this.isRtl() ? i > 0 : i < 0) {
        this.isLastStep || this.goNext();
        return;
      }
      this.goPrev();
    }
  }
}, wu = ["aria-modal", "aria-label", "aria-roledescription"], Su = { class: "ui-intro__header" }, Cu = ["aria-hidden"], Tu = {
  key: 0,
  class: "ui-intro__icon"
}, Iu = {
  key: 1,
  class: "ui-intro__title"
}, Lu = {
  key: 2,
  class: "ui-intro__description"
}, Au = { class: "ui-intro__footer" }, Mu = ["aria-label"], zu = ["aria-selected", "aria-label", "onClick"];
function Pu(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-icon");
  return u(), v(Se, {
    to: "body",
    disabled: !i.overlay
  }, [
    w(Ce, { name: "ui-intro-shell" }, {
      default: _(() => [
        r.isVisible ? (u(), c("div", P({
          key: 0,
          ref: "root",
          class: r.rootClass,
          role: "dialog",
          "aria-modal": i.overlay ? "true" : void 0,
          "aria-label": r.resolvedAriaLabel,
          "aria-roledescription": r.resolvedCarouselRole,
          tabindex: "-1"
        }, r.passthroughAttrs, {
          onKeydown: t[8] || (t[8] = (...a) => r.onRootKeydown && r.onRootKeydown(...a))
        }), [
          f("div", Su, [
            b(e.$slots, "header", {}, () => [
              i.showSkip ? (u(), v(o, {
                key: 0,
                type: "button",
                variant: "link",
                color: "secondary",
                onClick: r.onSkip
              }, {
                default: _(() => [
                  E(p(r.resolvedSkipLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : m("", !0)
            ])
          ]),
          f("div", {
            ref: "viewport",
            class: "ui-intro__viewport",
            onPointerdown: t[0] || (t[0] = (...a) => r.onPointerDown && r.onPointerDown(...a)),
            onPointermove: t[1] || (t[1] = (...a) => r.onPointerMove && r.onPointerMove(...a)),
            onPointerup: t[2] || (t[2] = (...a) => r.onPointerUp && r.onPointerUp(...a)),
            onPointercancel: t[3] || (t[3] = (...a) => r.onPointerUp && r.onPointerUp(...a)),
            onTouchstartPassive: t[4] || (t[4] = (...a) => r.onTouchStart && r.onTouchStart(...a)),
            onTouchmove: t[5] || (t[5] = (...a) => r.onTouchMove && r.onTouchMove(...a)),
            onTouchend: t[6] || (t[6] = (...a) => r.onTouchEnd && r.onTouchEnd(...a)),
            onTouchcancel: t[7] || (t[7] = (...a) => r.onTouchEnd && r.onTouchEnd(...a))
          }, [
            f("div", {
              class: k(["ui-intro__track", { "ui-intro__track--dragging": s.dragging }]),
              style: B(r.trackStyle)
            }, [
              (u(!0), c(S, null, L(r.normalizedSteps, (a, d) => (u(), c("div", {
                key: a.key,
                class: "ui-intro__slide",
                "aria-hidden": d === r.activeIndex ? void 0 : "true"
              }, [
                b(e.$slots, "default", {
                  step: a,
                  index: d,
                  active: d === r.activeIndex
                }, () => [
                  a.icon ? (u(), c("span", Tu, [
                    w(l, {
                      name: a.icon,
                      type: a.iconType,
                      size: "xl"
                    }, null, 8, ["name", "type"])
                  ])) : m("", !0),
                  a.title ? (u(), c("h2", Iu, p(a.title), 1)) : m("", !0),
                  a.description ? (u(), c("p", Lu, p(a.description), 1)) : m("", !0)
                ])
              ], 8, Cu))), 128))
            ], 6)
          ], 544),
          f("div", Au, [
            b(e.$slots, "footer", {
              index: r.activeIndex,
              isLast: r.isLastStep,
              goNext: r.goNext,
              goPrev: r.goPrev,
              goTo: r.goTo
            }, () => [
              r.normalizedSteps.length > 1 ? (u(), c("div", {
                key: 0,
                class: "ui-intro__dots",
                role: "tablist",
                "aria-label": r.resolvedAriaLabel
              }, [
                (u(!0), c(S, null, L(r.normalizedSteps, (a, d) => (u(), c("button", {
                  key: a.key,
                  type: "button",
                  class: k(["ui-intro__dot", { "ui-intro__dot--active": d === r.activeIndex }]),
                  role: "tab",
                  "aria-selected": d === r.activeIndex,
                  "aria-label": a.ariaLabel || a.title || String(d + 1),
                  onClick: (h) => r.goTo(d)
                }, null, 10, zu))), 128))
              ], 8, Mu)) : m("", !0),
              w(o, {
                type: "button",
                color: "primary",
                rounded: "",
                block: "",
                onClick: r.goNext
              }, {
                default: _(() => [
                  E(p(r.primaryLabel), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ], 16, wu)) : m("", !0)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
const Eu = /* @__PURE__ */ x(xu, [["render", Pu]]), Ou = ["sm", "md"], Tt = {
  mod: ["⌘", "Ctrl"],
  cmd: ["⌘", "Ctrl"],
  meta: ["⌘", "Win"],
  ctrl: ["⌃", "Ctrl"],
  control: ["⌃", "Ctrl"],
  alt: ["⌥", "Alt"],
  option: ["⌥", "Alt"],
  shift: ["⇧", "Shift"]
}, It = {
  enter: "↵",
  return: "↵",
  backspace: "⌫",
  tab: "Tab",
  esc: "Esc",
  escape: "Esc",
  space: "Space",
  delete: "Del",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
  arrowup: "↑",
  arrowdown: "↓",
  arrowleft: "←",
  arrowright: "→"
}, Du = {
  name: "Kbd",
  props: {
    /**
     * Tuş(lar): dizi (`['mod', 'k']`) ya da `+` ile ayrılmış metin (`"mod+shift+p"`).
     * `mod` Apple platformlarında ⌘, diğerlerinde Ctrl olarak yazılır.
     */
    keys: {
      type: [Array, String],
      default: () => []
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ou.includes(e)
    }
  },
  data() {
    return {
      /** Platform mount sonrası okunur: sunucu çıktısı ile ilk istemci çizimi aynı kalır. */
      isApple: !1
    };
  },
  computed: {
    keyList() {
      return Array.isArray(this.keys) ? this.keys.map((e) => String(e)) : String(this.keys || "").split(/\+(?=.)/).map((e) => e.trim()).filter(Boolean);
    },
    resolvedKeys() {
      return this.keyList.map((e) => {
        const t = e.toLowerCase();
        return Tt[t] ? Tt[t][this.isApple ? 0 : 1] : It[t] ? It[t] : e.length === 1 ? e.toUpperCase() : e;
      });
    },
    keyClass() {
      return ["ui-kbd", `ui-kbd--${this.size}`, this.size === "sm" ? "ui-text-2xs" : ""];
    }
  },
  mounted() {
    var t;
    const e = ((t = navigator.userAgentData) == null ? void 0 : t.platform) || navigator.platform || navigator.userAgent || "";
    this.isApple = /mac|iphone|ipad|ipod/i.test(e);
  }
}, Ru = {
  key: 1,
  class: "ui-kbd-group"
};
function Nu(e, t, i, n, s, r) {
  return e.$slots.default || r.resolvedKeys.length <= 1 ? (u(), c("kbd", {
    key: 0,
    class: k(r.keyClass)
  }, [
    b(e.$slots, "default", {}, () => [
      E(p(r.resolvedKeys[0]), 1)
    ])
  ], 2)) : (u(), c("kbd", Ru, [
    (u(!0), c(S, null, L(r.resolvedKeys, (o, l) => (u(), c("kbd", {
      key: l,
      class: k(r.keyClass)
    }, p(o), 3))), 128))
  ]));
}
const Fu = /* @__PURE__ */ x(Du, [["render", Nu]]), Vu = {
  name: "NumberStepper",
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => U.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Grubun erişilebilir adı (ör. "Kişi sayısı") */
    ariaLabel: {
      type: String,
      default: ""
    },
    decreaseLabel: {
      type: String,
      default: ""
    },
    increaseLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    current() {
      const e = Number(this.modelValue);
      return Number.isFinite(e) ? e : null;
    },
    displayValue() {
      return this.current == null ? "—" : String(this.current);
    },
    atMin() {
      return this.current != null && this.current - this.step < this.min;
    },
    atMax() {
      return this.current != null && this.current + this.step > this.max;
    },
    resolvedDecreaseLabel() {
      return this.decreaseLabel || M(this, "ui.numberStepper.decrease", "Decrease");
    },
    resolvedIncreaseLabel() {
      return this.increaseLabel || M(this, "ui.numberStepper.increase", "Increase");
    }
  },
  methods: {
    bump(e) {
      const t = this.current == null ? this.min : this.current, i = this.current == null ? t : t + e * this.step;
      this.$emit("update:modelValue", Math.min(this.max, Math.max(this.min, i)));
    }
  }
}, Bu = ["aria-label"], $u = {
  class: "ui-number-stepper-value",
  "aria-live": "polite"
};
function Hu(e, t, i, n, s, r) {
  const o = y("ui-button");
  return u(), c("div", {
    role: "group",
    "aria-label": i.ariaLabel || void 0,
    class: k(["ui-number-stepper", `ui-number-stepper--${i.size}`, i.disabled ? "ui-number-stepper--disabled" : ""])
  }, [
    w(o, {
      type: "button",
      variant: "solid",
      color: "secondary",
      size: i.size,
      cubed: "",
      "prefix-icon": "minus",
      disabled: i.disabled || r.atMin,
      "aria-label": r.resolvedDecreaseLabel,
      onClick: t[0] || (t[0] = (l) => r.bump(-1))
    }, null, 8, ["size", "disabled", "aria-label"]),
    f("output", $u, p(r.displayValue), 1),
    w(o, {
      type: "button",
      variant: "solid",
      color: "secondary",
      size: i.size,
      cubed: "",
      "prefix-icon": "plus",
      disabled: i.disabled || r.atMax,
      "aria-label": r.resolvedIncreaseLabel,
      onClick: t[1] || (t[1] = (l) => r.bump(1))
    }, null, 8, ["size", "disabled", "aria-label"])
  ], 10, Bu);
}
const Ku = /* @__PURE__ */ x(Vu, [["render", Hu]]), Uu = ["primary", "secondary", "success", "warning", "info", "danger"], Yu = {
  name: "TitleMenu",
  props: {
    title: {
      type: String,
      default: ""
    },
    /** `ui-dropdown` öğeleri */
    items: {
      type: Array,
      default: () => []
    },
    /** Başlıktan sonra durum ikonu (ör. `star`); boşsa çizilmez */
    suffixIcon: {
      type: String,
      default: ""
    },
    suffixIconColor: {
      type: String,
      default: "",
      validator: (e) => !e || Uu.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["select"]
}, Gu = { class: "ui-title-menu" }, Wu = ["aria-expanded", "aria-label", "onClick"], qu = { class: "ui-title-menu-text" };
function ju(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("ui-dropdown");
  return u(), c("span", Gu, [
    w(l, {
      items: i.items,
      placement: "bottom-start",
      onSelect: t[0] || (t[0] = (a) => e.$emit("select", a))
    }, {
      trigger: _(({ toggle: a, open: d, triggerAttrs: h }) => [
        f("button", P({
          type: "button",
          class: "ui-title-menu-trigger"
        }, h, {
          "aria-expanded": d ? "true" : "false",
          "aria-label": i.ariaLabel || void 0,
          onClick: a
        }), [
          f("span", qu, [
            b(e.$slots, "default", {}, () => [
              E(p(i.title), 1)
            ])
          ]),
          i.suffixIcon ? (u(), v(o, {
            key: 0,
            name: i.suffixIcon,
            type: "solid",
            size: "sm",
            class: k(["ui-title-menu-suffix", i.suffixIconColor ? `ui-title-menu-suffix--${i.suffixIconColor}` : ""]),
            "aria-hidden": "true"
          }, null, 8, ["name", "class"])) : m("", !0),
          w(o, {
            name: "chevron-down",
            size: "xs",
            class: "ui-title-menu-chevron",
            "aria-hidden": "true"
          })
        ], 16, Wu)
      ]),
      _: 3
    }, 8, ["items"])
  ]);
}
const Zu = /* @__PURE__ */ x(Yu, [["render", ju]]), Xu = ["sm", "md", "lg", "full"], Lt = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Qu = {
  name: "Menu",
  inheritAttrs: !1,
  provide() {
    return { uiMenu: this };
  },
  props: {
    /**
     * `full` (varsayılan): kapsayıcıyı (kart, sidebar) doldurur.
     * `sm` / `md` / `lg`: sabit genişlik — yüzen panel vb.
     */
    width: {
      type: String,
      default: "full",
      validator: (e) => Xu.includes(e)
    },
    /**
     * İkon rayı: etiketler ve grup başlıkları gizlenir (ekran okuyucuda kalır), öğeler kare ikon
     * düğmesi olur ve etiket ipucu olarak gösterilir. Genişlik içeriğe iner (`width` yok sayılır).
     */
    collapsed: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:collapsed"],
  computed: {
    rootClass() {
      return A(
        "ui-menu",
        this.collapsed ? "ui-menu--collapsed" : Lt[this.width] || Lt.full,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    /** `header` / `footer` slot'undaki aç-kapa düğmesi için: `v-model:collapsed` ile çalışır. */
    toggleCollapsed() {
      this.$emit("update:collapsed", !this.collapsed);
    }
  }
}, Ju = ["data-collapsed"], ec = {
  key: 0,
  class: "ui-menu-header"
}, tc = { class: "ui-menu-body" }, ic = {
  key: 1,
  class: "ui-menu-footer"
};
function rc(e, t, i, n, s, r) {
  return u(), c("nav", P({
    class: r.rootClass,
    "data-collapsed": i.collapsed ? "true" : void 0
  }, r.passthroughAttrs), [
    e.$slots.header ? (u(), c("div", ec, [
      b(e.$slots, "header", {
        collapsed: i.collapsed,
        toggle: r.toggleCollapsed
      })
    ])) : m("", !0),
    f("div", tc, [
      b(e.$slots, "default")
    ]),
    e.$slots.footer ? (u(), c("div", ic, [
      b(e.$slots, "footer", {
        collapsed: i.collapsed,
        toggle: r.toggleCollapsed
      })
    ])) : m("", !0)
  ], 16, Ju);
}
const nc = /* @__PURE__ */ x(Qu, [["render", rc]]), sc = G("ui-menubar"), ac = {
  name: "Menubar",
  components: { MenuList: Ut, Popover: Ve },
  props: {
    /** `[{ label, items, disabled }]` — `items` `ui-dropdown` ile aynı şemadadır. */
    menus: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => U.includes(e)
    },
    /** `role="menubar"` için erişilebilir ad; metin i18n'den gelir. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["select"],
  data() {
    return {
      uid: sc(),
      /** Açık menünün dizini; -1 = hepsi kapalı. */
      openIndex: -1,
      /** Son odaklanan başlık — Tab ile çubuğa dönünce buradan devam edilir. */
      focusedIndex: 0,
      submenuOpen: !1
    };
  },
  computed: {
    rovingIndex() {
      const e = (t) => this.menus[t] && !this.menus[t].disabled;
      return e(this.openIndex) ? this.openIndex : e(this.focusedIndex) ? this.focusedIndex : this.menus.findIndex((t) => t && !t.disabled);
    }
  },
  methods: {
    triggerId(e) {
      return `${this.uid}-trigger-${e}`;
    },
    menuId(e) {
      return `${this.uid}-menu-${e}`;
    },
    triggerEl(e) {
      var t, i;
      return ((i = (t = this.$el) == null ? void 0 : t.querySelector) == null ? void 0 : i.call(t, `[data-menubar-index="${e}"]`)) || null;
    },
    /** `from` dizininden `step` yönünde ilk kullanılabilir başlık (döngülü). */
    stepIndex(e, t) {
      const i = this.menus.length;
      for (let n = 1; n <= i; n += 1) {
        const s = ((e + t * n) % i + i) % i;
        if (this.menus[s] && !this.menus[s].disabled) return s;
      }
      return -1;
    },
    /** @param {'first' | 'last' | null} focus Açılınca odaklanacak öğe; `null` odak başlıkta kalır. */
    openMenu(e, t = "first") {
      var i;
      e < 0 || (i = this.menus[e]) != null && i.disabled || (this.submenuOpen = !1, this.openIndex = e, this.focusedIndex = e, t && this.$nextTick(() => requestAnimationFrame(() => {
        const n = this.activeList();
        n && n.focusItem(t === "last" ? -1 : 0);
      })));
    },
    activeList() {
      const e = this.$refs.lists;
      return (e ? Array.isArray(e) ? e : [e] : []).find((i) => i.menuId === this.menuId(this.openIndex)) || null;
    },
    closeMenu(e) {
      var s, r;
      const t = this.openIndex;
      if (t < 0) return;
      const i = document.activeElement, n = !i || i === document.body || ((s = this.activeList()) == null ? void 0 : s.containsFocus());
      this.openIndex = -1, this.submenuOpen = !1, (e || n) && ((r = this.triggerEl(t)) == null || r.focus({ preventScroll: !0 }));
    },
    toggle(e) {
      this.openIndex === e ? this.closeMenu(!0) : this.openMenu(e);
    },
    onOpenChange(e, t) {
      !t && this.openIndex === e && this.closeMenu(!1);
    },
    onTriggerEnter(e, t) {
      t.pointerType !== "touch" && this.openIndex >= 0 && this.openIndex !== e && this.openMenu(e);
    },
    /** Açık menü içinden yatay ok: komşu menü açılır. */
    onNavigate(e, t) {
      if (this.openIndex !== e) return;
      const i = this.stepIndex(e, t === "next" ? 1 : -1);
      i >= 0 && i !== e && this.openMenu(i);
    },
    onBarKeydown(e) {
      var r, o;
      const t = Number(((o = (r = e.target) == null ? void 0 : r.dataset) == null ? void 0 : o.menubarIndex) ?? -1);
      if (t < 0) return;
      const i = Fe(e.key, this.$el), n = (l) => {
        var a;
        l < 0 || (this.openIndex >= 0 ? this.openMenu(l) : (a = this.triggerEl(l)) == null || a.focus());
      }, s = {
        ArrowRight: () => n(this.stepIndex(t, 1)),
        ArrowLeft: () => n(this.stepIndex(t, -1)),
        Home: () => n(this.stepIndex(-1, 1)),
        End: () => n(this.stepIndex(this.menus.length, -1)),
        ArrowDown: () => this.openMenu(t, "first"),
        ArrowUp: () => this.openMenu(t, "last")
      };
      if (s[i]) {
        e.preventDefault(), s[i]();
        return;
      }
      if (Ai(e)) {
        this.typeahead || (this.typeahead = Mi());
        const l = this.menus.map((d, h) => h).filter((d) => {
          var h;
          return !((h = this.menus[d]) != null && h.disabled);
        }), a = this.typeahead(e.key, l.map((d) => this.menus[d].label || ""), l.indexOf(t));
        a >= 0 && (e.preventDefault(), n(l[a]));
      }
    },
    onSelect(e, t) {
      t ? this.$emit("select", e, t) : this.$emit("select", e);
    }
  }
}, lc = ["aria-label"];
function oc(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("MenuList"), a = y("Popover");
  return u(), c("div", {
    class: "ui-menubar",
    role: "menubar",
    "aria-label": i.ariaLabel || void 0,
    onKeydown: t[1] || (t[1] = (...d) => r.onBarKeydown && r.onBarKeydown(...d))
  }, [
    (u(!0), c(S, null, L(i.menus, (d, h) => (u(), v(a, {
      key: h,
      open: s.openIndex === h,
      placement: "bottom-start",
      "mobile-centered": !1,
      "close-on-escape": !s.submenuOpen,
      "onUpdate:open": (g) => r.onOpenChange(h, g)
    }, {
      trigger: _(() => [
        w(o, {
          id: r.triggerId(h),
          class: "ui-menubar-trigger",
          variant: "ghost",
          color: "secondary",
          size: i.size,
          role: "menuitem",
          "aria-haspopup": "menu",
          "aria-expanded": s.openIndex === h ? "true" : "false",
          "aria-controls": s.openIndex === h ? r.menuId(h) : void 0,
          tabindex: h === r.rovingIndex ? 0 : -1,
          "data-menubar-index": h,
          disabled: d.disabled,
          onClick: (g) => r.toggle(h),
          onPointerenter: (g) => r.onTriggerEnter(h, g),
          onFocus: (g) => s.focusedIndex = h
        }, {
          default: _(() => [
            E(p(d.label), 1)
          ]),
          _: 2
        }, 1032, ["id", "size", "aria-expanded", "aria-controls", "tabindex", "data-menubar-index", "disabled", "onClick", "onPointerenter", "onFocus"])
      ]),
      content: _(({ close: g }) => [
        w(l, {
          ref_for: !0,
          ref: "lists",
          items: d.items || [],
          "menu-id": r.menuId(h),
          "aria-labelledby": r.triggerId(h),
          aligned: "",
          onSelect: r.onSelect,
          onClose: (C) => g(),
          onNavigate: (C) => r.onNavigate(h, C),
          onToggleSubmenu: t[0] || (t[0] = (C) => s.submenuOpen = C)
        }, oe({ _: 2 }, [
          e.$slots.menu ? {
            name: "menu",
            fn: _(() => [
              b(e.$slots, "menu", {
                menu: d,
                index: h,
                close: g
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "menu-id", "aria-labelledby", "onSelect", "onClose", "onNavigate"])
      ]),
      _: 2
    }, 1032, ["open", "close-on-escape", "onUpdate:open"]))), 128))
  ], 40, lc);
}
const uc = /* @__PURE__ */ x(ac, [["render", oc]]), cc = {
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
      return A("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, dc = {
  key: 0,
  class: "ui-menu-group-label"
}, hc = { class: "ui-menu-group-items" };
function fc(e, t, i, n, s, r) {
  return u(), c("div", P({ class: r.groupClass }, r.passthroughAttrs), [
    i.label ? (u(), c("p", dc, p(i.label), 1)) : m("", !0),
    f("div", hc, [
      b(e.$slots, "default")
    ])
  ], 16);
}
const mc = /* @__PURE__ */ x(cc, [["render", fc]]), pc = "circle";
function gi(e) {
  return Array.isArray(e) ? e.map((t) => t == null || typeof t != "object" || t.type === ii ? "" : t.type === ri ? String(t.children ?? "") : t.type === S || typeof t.type == "string" ? gi(t.children) : "").join("") : typeof e == "string" ? e : "";
}
const gc = {
  name: "MenuItem",
  components: { "ui-menu-item-tooltip": jt },
  inheritAttrs: !1,
  inject: {
    uiMenu: { default: null }
  },
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
  data() {
    return {
      /** Ray ipucu satır sonu tarafında açılır; yön mount sonrası okunur. */
      rtl: !1
    };
  },
  computed: {
    /**
     * Üst `ui-menu` ikon rayı modunda mı (`collapsed`). Menü dışında her zaman `false`.
     * Rayda etiket görsel olarak gizlenir ve `ui-tooltip` ile satır sonu tarafında gösterilir.
     */
    rail() {
      var e;
      return !!((e = this.uiMenu) != null && e.collapsed);
    },
    railFallbackIcon() {
      return pc;
    },
    railPlacement() {
      return this.rtl ? "left" : "right";
    },
    itemClass() {
      return A(
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
  watch: {
    rail(e) {
      e && this.$nextTick(() => this.readDirection());
    }
  },
  mounted() {
    this.rail && this.readDirection();
  },
  methods: {
    /**
     * Ray etiketi (ipucu + `aria-label`): tüketici `aria-label` verdiyse o, yoksa slot metni.
     * Boşsa ipucu slot içeriğini gösterir. Slot reaktif izlenmediği için computed değil, her çizimde okunur.
     */
    railLabel() {
      const e = this.$attrs["aria-label"];
      if (e) return String(e);
      const t = this.$slots.default;
      return t ? gi(t()).replace(/\s+/g, " ").trim() : "";
    },
    readDirection() {
      const e = this.$el;
      e && e.nodeType === 1 && (this.rtl = getComputedStyle(e).direction === "rtl");
    },
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function bc(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-menu-item-tooltip");
  return r.rail ? (u(), v(l, {
    key: 0,
    label: r.railLabel(),
    placement: r.railPlacement
  }, oe({
    default: _(() => [
      w(o, P({
        type: "button",
        variant: "ghost",
        color: "secondary",
        to: i.to,
        "prefix-icon": i.prefixIcon || r.railFallbackIcon,
        disabled: i.disabled,
        loading: i.loading,
        class: r.itemClass,
        "aria-current": i.active ? "page" : void 0,
        "aria-label": r.railLabel() || void 0
      }, r.forwardedAttrs, { onClick: r.onClick }), {
        default: _(() => [
          b(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["to", "prefix-icon", "disabled", "loading", "class", "aria-current", "aria-label", "onClick"])
    ]),
    _: 2
  }, [
    r.railLabel() ? void 0 : {
      name: "content",
      fn: _(() => [
        b(e.$slots, "default")
      ]),
      key: "0"
    }
  ]), 1032, ["label", "placement"])) : (u(), v(o, P({
    key: 1,
    type: "button",
    variant: "ghost",
    color: "secondary",
    block: "",
    "text-align": "left",
    to: i.to,
    "prefix-icon": i.prefixIcon,
    "suffix-icon": i.suffixIcon,
    disabled: i.disabled,
    loading: i.loading,
    class: r.itemClass,
    "aria-current": i.active ? "page" : void 0
  }, r.forwardedAttrs, { onClick: r.onClick }), {
    default: _(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]));
}
const yc = /* @__PURE__ */ x(gc, [["render", bc]]), vc = {
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
      return A("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, _c = ["aria-label"];
function kc(e, t, i, n, s, r) {
  return u(), c("div", P({
    class: r.navClass,
    role: "navigation",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, _c);
}
const xc = /* @__PURE__ */ x(vc, [["render", kc]]), wc = [...U];
function be(e, t) {
  const i = [];
  for (let n = e; n <= t; n += 1) i.push(n);
  return i;
}
const Sc = {
  name: "Pagination",
  components: { Button: Zt },
  props: {
    /** Bulunulan sayfa (1 tabanlı). */
    modelValue: {
      type: Number,
      default: 1
    },
    /** Toplam kayıt sayısı; `pageSize` ile sayfa sayısına çevrilir. */
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    /** Sayfa sayısı doğrudan verilir; `total` / `pageSize` yerine geçer. */
    pageCount: {
      type: Number,
      default: null
    },
    /** Bulunulan sayfanın her iki yanında gösterilen sayfa sayısı. */
    siblingCount: {
      type: Number,
      default: 1
    },
    /** İlk ve son sayfa düğmeleri (aradaki boşluk `…`). */
    showEdges: {
      type: Boolean,
      default: !0
    },
    /** Verilmezse tema kontrol boyutu (düğmeler `ui-button` ile aynı yükseklikte). */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || wc.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Verilmezse `ui.pagination.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  computed: {
    totalPages() {
      if (this.pageCount != null) return Math.max(1, Math.floor(this.pageCount) || 1);
      const e = Math.max(1, Math.floor(this.pageSize) || 1);
      return Math.max(1, Math.ceil(Math.max(0, this.total) / e));
    },
    currentPage() {
      return Math.min(Math.max(1, Math.floor(this.modelValue) || 1), this.totalPages);
    },
    /**
     * Öğe sayısı sayfa değişirken sabit kalır (düğmeler imlecin altından kaymaz):
     * uçlara yakınken pencere diğer yana doğru genişler.
     */
    entries() {
      const e = this.totalPages, t = this.currentPage, i = Math.max(0, Math.floor(this.siblingCount) || 0), n = (g) => ({ key: `page-${g}`, page: g }), s = (g) => ({ key: `ellipsis-${g}`, ellipsis: !0 });
      if (!this.showEdges) {
        const g = Math.min(e, i * 2 + 1), C = Math.min(Math.max(1, t - i), e - g + 1);
        return be(C, C + g - 1).map(n);
      }
      const r = i * 2 + 5;
      if (e <= r) return be(1, e).map(n);
      const o = Math.max(t - i, 1), l = Math.min(t + i, e), a = o > 2, d = l < e - 1, h = i * 2 + 3;
      return !a && d ? [...be(1, h).map(n), s("end"), n(e)] : a && !d ? [n(1), s("start"), ...be(e - h + 1, e).map(n)] : [n(1), s("start"), ...be(o, l).map(n), s("end"), n(e)];
    },
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.pagination.ariaLabel", "Pagination");
    },
    prevLabel() {
      return M(this, "ui.pagination.prev", "Previous page");
    },
    nextLabel() {
      return M(this, "ui.pagination.next", "Next page");
    },
    rootClass() {
      return ["ui-pagination", this.disabled ? "ui-pagination--disabled" : ""];
    }
  },
  methods: {
    /** `ui.pagination.page` = "Sayfa {page}"; `resolveUiText` parametre taşımadığı için burada çözülür. */
    pageLabel(e) {
      if (typeof this.$t == "function") {
        const t = this.$t("ui.pagination.page", { page: e });
        if (t != null && t !== "" && t !== "ui.pagination.page") return t;
      }
      return `Page ${e}`;
    },
    goTo(e) {
      if (this.disabled) return;
      const t = Math.min(Math.max(1, e), this.totalPages);
      if (t === this.currentPage) return;
      const i = this.$el.contains(document.activeElement);
      this.$emit("update:modelValue", t), this.$emit("change", t), i && this.$nextTick(() => {
        var s;
        const n = document.activeElement;
        this.$el.contains(n) && !n.disabled || (s = this.$el.querySelector('[aria-current="page"]')) == null || s.focus();
      });
    }
  }
}, Cc = ["aria-label"], Tc = { class: "ui-pagination-list" }, Ic = { class: "ui-pagination-item" }, Lc = ["aria-hidden"], Ac = {
  key: 0,
  class: "ui-pagination-ellipsis"
}, Mc = { class: "ui-pagination-item" };
function zc(e, t, i, n, s, r) {
  const o = y("Button"), l = y("ui-icon");
  return u(), c("nav", {
    class: k(r.rootClass),
    "aria-label": r.resolvedAriaLabel
  }, [
    f("ul", Tc, [
      f("li", Ic, [
        w(o, {
          class: "ui-pagination-nav ui-icon--dir",
          variant: "ghost",
          color: "secondary",
          cubed: "",
          "prefix-icon": "chevron-left",
          size: i.size,
          disabled: i.disabled || r.currentPage <= 1,
          "aria-label": r.prevLabel,
          onClick: t[0] || (t[0] = (a) => r.goTo(r.currentPage - 1))
        }, null, 8, ["size", "disabled", "aria-label"])
      ]),
      (u(!0), c(S, null, L(r.entries, (a) => (u(), c("li", {
        key: a.key,
        class: "ui-pagination-item",
        "aria-hidden": a.ellipsis ? "true" : void 0
      }, [
        a.ellipsis ? (u(), c("span", Ac, [
          w(l, {
            name: "ellipsis",
            size: "xs"
          })
        ])) : (u(), v(o, {
          key: 1,
          class: "ui-pagination-page",
          variant: a.page === r.currentPage ? "muted" : "ghost",
          color: "secondary",
          size: i.size,
          disabled: i.disabled,
          "aria-label": r.pageLabel(a.page),
          "aria-current": a.page === r.currentPage ? "page" : void 0,
          onClick: (d) => r.goTo(a.page)
        }, {
          default: _(() => [
            E(p(a.page), 1)
          ]),
          _: 2
        }, 1032, ["variant", "size", "disabled", "aria-label", "aria-current", "onClick"]))
      ], 8, Lc))), 128)),
      f("li", Mc, [
        w(o, {
          class: "ui-pagination-nav ui-icon--dir",
          variant: "ghost",
          color: "secondary",
          cubed: "",
          "prefix-icon": "chevron-right",
          size: i.size,
          disabled: i.disabled || r.currentPage >= r.totalPages,
          "aria-label": r.nextLabel,
          onClick: t[1] || (t[1] = (a) => r.goTo(r.currentPage + 1))
        }, null, 8, ["size", "disabled", "aria-label"])
      ])
    ])
  ], 10, Cc);
}
const Pc = /* @__PURE__ */ x(Sc, [["render", zc]]);
function Ec(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let i = 0;
  t.length >= 8 && (i += 1), t.length >= 12 && (i += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? i += 1 : /[a-zA-Z]/.test(t) && (i += 0.5), /\d/.test(t) && (i += 1), /[^a-zA-Z0-9]/.test(t) && (i += 1);
  const n = Math.min(4, Math.round(i)), s = ["weak", "fair", "good", "strong"], r = n <= 0 ? "weak" : s[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: r
  };
}
const Oc = G("ui-password"), Dc = U, Rc = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Dc.includes(e)
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
    const e = Oc(), t = e.slice(12);
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
      return Ec(this.modelValue);
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
      return t;
    }
  }
}, Nc = ["aria-label", "aria-pressed", "disabled"], Fc = ["id", "aria-live"];
function Vc(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("ui-input"), a = y("ui-progress");
  return u(), c("div", {
    class: k(["ui-password", [e.$attrs.class]])
  }, [
    w(l, P({
      id: r.resolvedId,
      modelValue: r.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (d) => r.innerValue = d),
      type: s.visible ? "text" : "password",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength,
      "aria-describedby": r.strengthDescribedby
    }, r.passthroughAttrs, {
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), {
      append: _(() => [
        f("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": r.toggleAriaLabel,
          "aria-pressed": s.visible ? "true" : "false",
          disabled: i.disabled,
          onClick: t[0] || (t[0] = (d) => s.visible = !s.visible)
        }, [
          w(o, {
            name: s.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Nc)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    r.showStrengthMeter ? (u(), c("div", {
      key: 0,
      id: s.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": r.innerValue ? "polite" : "off"
    }, [
      w(a, {
        type: "bar",
        size: "md",
        value: r.strength.percent,
        variant: r.strengthVariant,
        "aria-valuetext": r.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      r.strength.label !== "empty" ? (u(), c("span", {
        key: 0,
        class: k(["ui-password-strength-label", `ui-password-strength-label--${r.strength.label}`])
      }, p(r.strengthText), 3)) : m("", !0)
    ], 8, Fc)) : m("", !0)
  ], 2);
}
const Bc = /* @__PURE__ */ x(Rc, [["render", Vc]]), $c = ["square", "video", "auto"], Hc = ["fill", "sm", "md", "lg"], At = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Kc = {
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
      validator: (e) => $c.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Hc.includes(e)
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
      return A(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        At[this.size] || At.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
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
      const t = Fe(e.key, e.currentTarget);
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : t === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : t === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, Uc = ["src", "alt"], Yc = ["aria-hidden"], Gc = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Wc = {
  key: 3,
  class: "ui-photo__overflow"
}, qc = ["aria-label"], jc = ["aria-label"], Zc = { class: "ui-photo-preview__panel" }, Xc = ["src", "alt"], Qc = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Jc(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("ui-button");
  return u(), c(S, null, [
    (u(), v(le(r.rootTag), P({
      type: i.interactive ? "button" : void 0,
      class: r.rootClass
    }, r.rootBind, { onClick: r.onClick }), {
      default: _(() => [
        i.src && !s.imageFailed ? (u(), c("img", {
          key: 0,
          src: i.src,
          alt: r.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
        }, null, 40, Uc)) : (u(), c("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": i.interactive ? "true" : void 0
        }, [
          w(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Yc)),
        i.favorite ? (u(), c("span", Gc, [
          w(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : m("", !0),
        i.overflowLabel ? (u(), c("span", Wc, p(i.overflowLabel), 1)) : m("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (u(), v(Se, { to: "body" }, [
      w(Ce, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: _(() => [
          s.previewOpen ? (u(), c("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...a) => r.onPreviewKeydown && r.onPreviewKeydown(...a))
          }, [
            f("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[1] || (t[1] = (...a) => r.closePreview && r.closePreview(...a))
            }, null, 8, jc),
            f("div", Zc, [
              w(l, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (u(), v(l, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev ui-icon--dir",
                "aria-label": r.prevLabel,
                onClick: K(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              r.activeSrc ? (u(), c("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Xc)) : m("", !0),
              r.showNext ? (u(), v(l, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next ui-icon--dir",
                "aria-label": r.nextLabel,
                onClick: K(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              r.counterLabel ? (u(), c("p", Qc, p(r.counterLabel), 1)) : m("", !0)
            ])
          ], 40, qc)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ed = /* @__PURE__ */ x(Kc, [["render", Jc]]), td = ["square", "video", "auto"], id = {
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
      validator: (e) => td.includes(e)
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
      return A(
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
      const t = Fe(e.key, e.currentTarget);
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : t === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : t === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, rd = ["data-count"], nd = ["aria-label"], sd = ["aria-label"], ad = { class: "ui-photo-preview__panel" }, ld = ["src", "alt"], od = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ud(e, t, i, n, s, r) {
  const o = y("ui-photo"), l = y("ui-button");
  return u(), c(S, null, [
    f("div", {
      class: k(["ui-photos", r.layoutClass]),
      "data-count": r.displayCount
    }, [
      (u(!0), c(S, null, L(r.visibleItems, (a, d) => (u(), v(o, {
        key: a.key || `${a.src}-${d}`,
        src: a.src,
        alt: a.alt || "",
        favorite: !!a.favorite,
        aspect: i.aspect,
        preview: i.preview,
        "gallery-index": d,
        "overflow-label": d === r.visibleItems.length - 1 && r.overflowCount > 0 ? r.overflowLabel : "",
        "aria-label": a.alt || void 0,
        onOpenPreview: r.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, rd),
    (u(), v(Se, { to: "body" }, [
      w(Ce, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: _(() => [
          s.previewOpen ? (u(), c("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": r.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...a) => r.onPreviewKeydown && r.onPreviewKeydown(...a))
          }, [
            f("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": r.closeLabel,
              onClick: t[0] || (t[0] = (...a) => r.closePreview && r.closePreview(...a))
            }, null, 8, sd),
            f("div", ad, [
              w(l, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": r.closeLabel,
                onClick: r.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              r.showPrev ? (u(), v(l, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev ui-icon--dir",
                "aria-label": r.prevLabel,
                onClick: K(r.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              r.activeSrc ? (u(), c("img", {
                key: 1,
                src: r.activeSrc,
                alt: r.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, ld)) : m("", !0),
              r.showNext ? (u(), v(l, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next ui-icon--dir",
                "aria-label": r.nextLabel,
                onClick: K(r.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              r.counterLabel ? (u(), c("p", od, p(r.counterLabel), 1)) : m("", !0)
            ])
          ], 40, nd)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const cd = /* @__PURE__ */ x(id, [["render", ud]]), dd = ["sm", "md", "lg", "xl", "2xl"], hd = ["default", "foreground", "muted", "success", "danger", "primary"], fd = {
  name: "PriceText",
  props: {
    value: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => dd.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => hd.includes(e)
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
function md(e, t, i, n, s, r) {
  return u(), c("span", {
    class: k(["ui-price-text", r.rootClass])
  }, [
    b(e.$slots, "default", {}, () => [
      E(p(i.value), 1)
    ])
  ], 2);
}
const st = /* @__PURE__ */ x(fd, [["render", md]]), pd = U, gd = ["sm", "md", "lg", "xl", "2xl"], bd = ["default", "foreground", "muted", "success", "danger", "primary"], yd = {
  name: "PriceDisplay",
  components: { PriceText: st },
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
      validator: (e) => pd.includes(e)
    },
    valueSize: {
      type: String,
      default: "lg",
      validator: (e) => gd.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => bd.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display--${this.size}` : null;
    }
  }
}, vd = { class: "ui-price-display__label" };
function _d(e, t, i, n, s, r) {
  const o = y("PriceText");
  return u(), c("div", {
    class: k(["ui-price-display", r.rootClass])
  }, [
    f("span", vd, p(i.label), 1),
    w(o, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: _(() => [
        b(e.$slots, "value", {}, () => [
          E(p(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const kd = /* @__PURE__ */ x(yd, [["render", _d]]), xd = U, wd = {
  name: "PriceDisplayGroup",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => xd.includes(e)
    }
  },
  computed: {
    rootClass() {
      return this.size !== "md" ? `ui-price-display-group--${this.size}` : null;
    }
  }
};
function Sd(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(["ui-price-display-group", r.rootClass])
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Cd = /* @__PURE__ */ x(wd, [["render", Sd]]), Td = ["sm", "md", "lg", "xl", "2xl"], Id = ["default", "foreground", "muted", "success", "danger", "primary"], Ld = {
  name: "PriceDisplayRow",
  components: { PriceText: st },
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
      validator: (e) => Td.includes(e)
    },
    tone: {
      type: String,
      default: "default",
      validator: (e) => Id.includes(e)
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
}, Ad = { class: "ui-price-display-row__label" };
function Md(e, t, i, n, s, r) {
  const o = y("PriceText");
  return u(), c("div", {
    class: k(["ui-price-display-row", r.rootClass])
  }, [
    f("span", Ad, p(i.label), 1),
    w(o, {
      value: i.value,
      size: i.valueSize,
      tone: i.tone
    }, {
      default: _(() => [
        b(e.$slots, "value", {}, () => [
          E(p(i.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["value", "size", "tone"])
  ], 2);
}
const zd = /* @__PURE__ */ x(Ld, [["render", Md]]), Pd = ["tr-TR", "en-US"], De = nt({
  currency: "TRY",
  format: "tr-TR"
});
function Ed(e, t = De.format) {
  return Pd.includes(e) ? e : t;
}
function Od(e = {}) {
  e.currency != null && String(e.currency).trim() !== "" && (De.currency = He(e.currency));
  const t = e.format ?? e.locale;
  t != null && (De.format = Ed(t));
}
function Dd() {
  return Dr(De);
}
const Rd = {
  name: "PriceInput",
  components: { CurrencyInput: mi },
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
    return { priceInputConfig: Dd() };
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
function Nd(e, t, i, n, s, r) {
  const o = y("CurrencyInput");
  return u(), v(o, P({
    "model-value": i.modelValue,
    currency: r.resolvedCurrency,
    locale: r.resolvedFormat
  }, e.$attrs, {
    "onUpdate:modelValue": t[0] || (t[0] = (l) => e.$emit("update:modelValue", l)),
    onInput: t[1] || (t[1] = (l) => e.$emit("input", l)),
    onChange: t[2] || (t[2] = (l) => e.$emit("change", l)),
    onFocus: t[3] || (t[3] = (l) => e.$emit("focus", l)),
    onBlur: t[4] || (t[4] = (l) => e.$emit("blur", l))
  }), null, 16, ["model-value", "currency", "locale"]);
}
const Fd = /* @__PURE__ */ x(Rd, [["render", Nd]]), Vd = ["bar", "circle"], Mt = ["sm", "md", "lg", "xl", "2xl"], zt = ["thin", "md"], Bd = ["default", "weak", "fair", "good", "strong"], Le = { sm: 16, md: 20, lg: 24, xl: 40, "2xl": 56 }, $d = { sm: 1.5, md: 2, lg: 2, xl: 3, "2xl": 3.5 }, Hd = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Vd.includes(e)
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
      validator: (e) => Bd.includes(e)
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
      const e = this.type === "circle" ? Mt.includes(this.size) ? this.size : "sm" : zt.includes(this.size) ? this.size : "md";
      return A(
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
      return Mt.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return zt.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = Le[this.circleSizeKey] ?? Le.sm;
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
      const e = Le[this.circleSizeKey] ?? Le.sm, t = $d[this.circleSizeKey] ?? 2, i = (e - t) / 2, n = e / 2, s = 2 * Math.PI * i, r = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: i, center: n, circumference: s, offset: r };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Kd = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Ud = ["width", "height", "viewBox"], Yd = ["cx", "cy", "r", "stroke-width"], Gd = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Wd = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function qd(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass),
    style: B(r.circleRootStyle),
    role: i.presentational ? void 0 : "progressbar",
    "aria-valuenow": i.presentational || i.indeterminate ? void 0 : r.ariaValueNow,
    "aria-valuemin": i.presentational ? void 0 : 0,
    "aria-valuemax": i.presentational ? void 0 : i.max,
    "aria-label": i.presentational ? void 0 : r.resolvedAriaLabel,
    "aria-valuetext": i.presentational ? void 0 : i.ariaValuetext
  }, [
    i.type === "circle" ? (u(), c("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: r.circleMetrics.size,
      height: r.circleMetrics.size,
      viewBox: `0 0 ${r.circleMetrics.size} ${r.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      f("circle", {
        class: "ui-progress-circle-track",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke
      }, null, 8, Yd),
      f("circle", {
        class: "ui-progress-circle-indicator",
        cx: r.circleMetrics.center,
        cy: r.circleMetrics.center,
        r: r.circleMetrics.radius,
        "stroke-width": r.circleMetrics.stroke,
        "stroke-dasharray": r.circleMetrics.circumference,
        "stroke-dashoffset": r.circleMetrics.offset
      }, null, 8, Gd)
    ], 8, Ud)) : (u(), c("div", Wd, [
      f("div", {
        class: "ui-progress-bar-indicator",
        style: B({ width: `${r.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Kd);
}
const jd = /* @__PURE__ */ x(Hd, [["render", qd]]), Zd = ["horizontal", "vertical"], Xd = "ui-resizable:", se = 1e-3;
function et(e) {
  return Math.round(e * 100) / 100;
}
function _e(e, t, i) {
  return Math.min(i, Math.max(t, e));
}
function te(e) {
  const t = _e(Number(e.minSize) || 0, 0, 100), i = _e(Number.isFinite(Number(e.maxSize)) ? Number(e.maxSize) : 100, t, 100), n = e.collapsible ? _e(Number(e.collapsedSize) || 0, 0, t) : null;
  return { min: t, max: i, collapsed: n };
}
function qe(e, t) {
  const { min: i, max: n, collapsed: s } = te(e);
  return s != null && t < i - se ? t < (s + i) / 2 ? s : i : _e(t, i, n);
}
function Ae(e, t) {
  return Array.isArray(e) && e.length === t && e.every((i) => Number.isFinite(Number(i)) && Number(i) >= 0);
}
function Me(e) {
  const t = e.reduce((i, n) => i + n, 0);
  return e.length ? t > 0 ? e.map((i) => et(i / t * 100)) : e.map(() => et(100 / e.length)) : [];
}
const Qd = {
  name: "ResizableGroup",
  inheritAttrs: !1,
  provide() {
    return { uiResizable: this };
  },
  props: {
    /** `horizontal` — paneller yan yana; `vertical` — alt alta. */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Zd.includes(e)
    },
    /** Panel boyutları (yüzde, toplam 100). Verilmezse bileşen kendi durumunu tutar. */
    modelValue: {
      type: Array,
      default: null
    },
    /** Boyutlar `localStorage` içinde bu kimlikle saklanır (yalnız mount sonrası okunur). */
    autoSaveId: {
      type: String,
      default: ""
    },
    /** Ok tuşu adımı (yüzde). */
    keyboardStep: {
      type: Number,
      default: 5
    }
  },
  emits: ["update:modelValue", "resize-end"],
  data() {
    return {
      /** DOM sırasıyla kayıtlı paneller ve tutamaçlar. */
      panels: [],
      handles: [],
      /** Mount öncesi boş: paneller `defaultSize` ile çizilir (SSR). */
      sizes: [],
      dragging: !1,
      /** Daraltmadan önceki boyut — Enter ile geri açılırken kullanılır. */
      expandedSizes: {},
      ready: !1
    };
  },
  computed: {
    rootClass() {
      return A("ui-resizable-group", `ui-resizable-group--${this.direction}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    isHorizontal() {
      return this.direction === "horizontal";
    }
  },
  watch: {
    modelValue(e) {
      if (!this.ready || !Ae(e, this.panels.length)) return;
      const t = Me(e.map(Number));
      t.some((i, n) => Math.abs(i - this.sizes[n]) > 0.01) && (this.sizes = t, this.rememberExpanded());
    }
  },
  mounted() {
    this.ready = !0, this.sizes = this.initialSizes(), this.rememberExpanded(), Ae(this.modelValue, this.sizes.length) && this.sizes.some((e, t) => Math.abs(e - Number(this.modelValue[t])) > 0.01) && this.$emit("update:modelValue", this.sizes.slice());
  },
  methods: {
    sortByDom(e) {
      return e.sort((t, i) => !t.$el || !i.$el || t.$el === i.$el ? 0 : t.$el.compareDocumentPosition(i.$el) & 4 ? -1 : 1);
    },
    registerPanel(e) {
      this.panels = this.sortByDom([...this.panels, dt(e)]), this.ready && this.relayout();
    },
    unregisterPanel(e) {
      this.panels = this.panels.filter((t) => t !== e), this.ready && this.relayout();
    },
    registerHandle(e) {
      this.handles = this.sortByDom([...this.handles, dt(e)]);
    },
    unregisterHandle(e) {
      this.handles = this.handles.filter((t) => t !== e);
    },
    /** Panel sayısı değişti: varsayılanlardan yeniden dağıt. */
    relayout() {
      this.sizes.length !== this.panels.length && (this.expandedSizes = {}, this.sizes = this.defaultSizes(), this.rememberExpanded());
    },
    defaultSizes() {
      const e = this.panels.map((s) => Number.isFinite(Number(s.defaultSize)) && s.defaultSize != null ? Number(s.defaultSize) : null), t = e.reduce((s, r) => s + (r ?? 0), 0), i = e.filter((s) => s == null).length, n = i ? Math.max(0, 100 - t) / i : 0;
      return Me(e.map((s) => s ?? n));
    },
    initialSizes() {
      const e = this.panels.length, t = this.readStored();
      return Ae(t, e) ? Me(t.map(Number)) : Ae(this.modelValue, e) ? Me(this.modelValue.map(Number)) : this.defaultSizes();
    },
    storageKey() {
      return this.autoSaveId ? `${Xd}${this.autoSaveId}` : "";
    },
    readStored() {
      const e = this.storageKey();
      if (!e) return null;
      try {
        return JSON.parse(window.localStorage.getItem(e) || "null");
      } catch {
        return null;
      }
    },
    writeStored() {
      const e = this.storageKey();
      if (e)
        try {
          window.localStorage.setItem(e, JSON.stringify(this.sizes));
        } catch {
        }
    },
    indexOfPanel(e) {
      return this.panels.indexOf(e);
    },
    indexOfHandle(e) {
      return this.handles.indexOf(e);
    },
    sizeAt(e) {
      const t = this.sizes[e];
      return Number.isFinite(t) ? t : null;
    },
    isCollapsedAt(e) {
      const t = this.panels[e], i = this.sizeAt(e);
      return !t || !t.collapsible || i == null ? !1 : i <= te(t).collapsed + 0.01;
    },
    rememberExpanded() {
      this.panels.forEach((e, t) => {
        e.collapsible && !this.isCollapsedAt(t) && this.sizeAt(t) != null && (this.expandedSizes[t] = this.sizes[t]);
      });
    },
    commit(e) {
      const t = e.map(et);
      return t.every((i, n) => Math.abs(i - this.sizes[n]) < 5e-3) ? !1 : (this.sizes = t, this.rememberExpanded(), this.$emit("update:modelValue", t.slice()), !0);
    },
    /**
     * Tutamacın iki yanındaki panelleri yeniden böler; diğer paneller değişmez.
     * @param {number} index Tutamaç dizini (önceki panel `index`, sonraki `index + 1`).
     * @param {number} desiredBefore Önceki panel için istenen yüzde.
     * @param {number[]} [base] Sürükleme başlangıcındaki boyutlar.
     */
    resizePair(e, t, i = this.sizes) {
      const n = this.panels[e], s = this.panels[e + 1];
      if (!n || !s || i[e] == null || i[e + 1] == null) return !1;
      const r = i[e] + i[e + 1];
      let o = qe(n, _e(t, 0, r));
      const l = qe(s, r - o);
      if (o = r - l, Math.abs(qe(n, o) - o) > se) return !1;
      const a = this.sizes.slice();
      return a[e] = o, a[e + 1] = l, this.commit(a);
    },
    /** Tutamaç ARIA değerleri — önceki panelin yüzdesi. */
    handleValues(e) {
      const t = this.panels[e], i = this.panels[e + 1];
      if (!t || !i || this.sizeAt(e) == null || this.sizeAt(e + 1) == null) return null;
      const n = this.sizes[e] + this.sizes[e + 1], s = te(t), r = te(i);
      return {
        now: Math.round(this.sizes[e]),
        min: Math.round(s.collapsed ?? s.min),
        max: Math.round(Math.min(s.max, n - (r.collapsed ?? r.min))),
        controls: t.panelId
      };
    },
    panelsPixelSize() {
      return this.panels.reduce((e, t) => {
        const i = t.$el;
        return e + (i ? this.isHorizontal ? i.offsetWidth : i.offsetHeight : 0);
      }, 0);
    },
    isRtl() {
      return this.isHorizontal && getComputedStyle(this.$el).direction === "rtl";
    },
    startDrag() {
      return this.dragging = !0, { base: this.sizes.slice(), pixels: this.panelsPixelSize(), sign: this.isRtl() ? -1 : 1 };
    },
    dragTo(e, t, i) {
      if (!(t.pixels > 0)) return;
      const n = i * t.sign * 100 / t.pixels;
      this.resizePair(e, t.base[e] + n, t.base);
    },
    endDrag() {
      this.dragging && (this.dragging = !1, this.finishResize());
    },
    finishResize() {
      this.writeStored(), this.$emit("resize-end", this.sizes.slice());
    },
    /** Ok tuşu: `direction` +1 önceki paneli büyütür, -1 küçültür. */
    stepHandle(e, t) {
      const i = this.panels[e], n = this.panels[e + 1];
      if (!i || !n) return;
      const s = this.sizes[e] + this.sizes[e + 1], r = this.sizes[e], o = te(i), l = te(n), a = this.sizes[e + 1];
      let d = r + t * this.keyboardStep;
      t < 0 ? (o.collapsed != null && r <= o.min + se ? d = o.collapsed : d = Math.max(o.min, d), l.collapsed != null && a < l.min - se && (d = s - l.min)) : (o.collapsed != null && r < o.min - se && (d = o.min), l.collapsed != null && a <= l.min + se ? d = s - l.collapsed : l.collapsed != null && a < l.min - se || (d = Math.min(d, s - l.min))), this.resizePair(e, d) && this.finishResize();
    },
    /** Home / End: önceki panel izin verilen en küçük / en büyük boyuta. */
    moveHandleToLimit(e, t) {
      const i = this.panels[e], n = this.panels[e + 1];
      if (!i || !n) return;
      const s = this.sizes[e] + this.sizes[e + 1], r = te(i), o = te(n), l = t ? Math.min(r.max, s - o.min) : r.min;
      this.resizePair(e, l) && this.finishResize();
    },
    /** Enter: tutamacın yanındaki daraltılabilir paneli kapatır / geri açar. */
    toggleCollapse(e) {
      const t = this.panels[e], i = this.panels[e + 1];
      if (!t || !i) return;
      const n = t.collapsible ? e : i.collapsible ? e + 1 : -1;
      if (n < 0) return;
      const s = this.panels[n], r = te(s), o = this.sizes[e] + this.sizes[e + 1], l = this.isCollapsedAt(n) ? Math.max(r.min, this.expandedSizes[n] ?? s.defaultSize ?? r.min) : r.collapsed, a = n === e ? l : o - l;
      this.resizePair(e, a) && this.finishResize();
    }
  }
}, Jd = ["data-direction", "data-dragging"];
function eh(e, t, i, n, s, r) {
  return u(), c("div", P({
    class: r.rootClass,
    "data-direction": i.direction,
    "data-dragging": s.dragging ? "true" : void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default", { sizes: s.sizes })
  ], 16, Jd);
}
const th = /* @__PURE__ */ x(Qd, [["render", eh]]), ih = {
  name: "ResizableHandle",
  inheritAttrs: !1,
  inject: {
    uiResizable: { default: null }
  },
  props: {
    /** Çizginin ortasında görünür tutma kulpu. */
    showGrip: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      /** Sürükleme başlangıcı: `{ base, pixels, sign, origin, pointerId }`. */
      dragContext: null
    };
  },
  computed: {
    isHorizontal() {
      return !this.uiResizable || this.uiResizable.isHorizontal;
    },
    index() {
      return this.uiResizable ? this.uiResizable.indexOfHandle(this) : -1;
    },
    values() {
      return this.index < 0 ? null : this.uiResizable.handleValues(this.index);
    },
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.resizable.handle", "Resize panels");
    },
    rootClass() {
      return A(
        "ui-resizable-handle",
        this.isHorizontal ? "ui-resizable-handle--horizontal" : "ui-resizable-handle--vertical",
        this.showGrip && "ui-resizable-handle--grip",
        this.disabled && "ui-resizable-handle--disabled",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    var e;
    (e = this.uiResizable) == null || e.registerHandle(this);
  },
  beforeUnmount() {
    var e;
    (e = this.uiResizable) == null || e.unregisterHandle(this);
  },
  methods: {
    pointerPosition(e) {
      return this.isHorizontal ? e.clientX : e.clientY;
    },
    onPointerDown(e) {
      if (!(this.disabled || this.index < 0 || e.pointerType === "mouse" && e.button !== 0)) {
        e.preventDefault();
        try {
          this.$el.setPointerCapture(e.pointerId);
        } catch {
        }
        this.$el.focus({ preventScroll: !0 }), this.dragContext = {
          ...this.uiResizable.startDrag(),
          origin: this.pointerPosition(e),
          pointerId: e.pointerId
        };
      }
    },
    onPointerMove(e) {
      const t = this.dragContext;
      !t || e.pointerId !== t.pointerId || this.uiResizable.dragTo(this.index, t, this.pointerPosition(e) - t.origin);
    },
    onPointerEnd(e) {
      const t = this.dragContext;
      if (!(!t || e.pointerId !== t.pointerId)) {
        this.dragContext = null;
        try {
          this.$el.releasePointerCapture(e.pointerId);
        } catch {
        }
        this.uiResizable.endDrag();
      }
    },
    onKeydown(e) {
      if (this.disabled || this.index < 0) return;
      const t = this.uiResizable;
      let i = 0;
      if (this.isHorizontal) {
        const n = t.isRtl() ? -1 : 1;
        e.key === "ArrowRight" ? i = n : e.key === "ArrowLeft" && (i = -n);
      } else e.key === "ArrowDown" ? i = 1 : e.key === "ArrowUp" && (i = -1);
      if (i) t.stepHandle(this.index, i);
      else if (e.key === "Home") t.moveHandleToLimit(this.index, !1);
      else if (e.key === "End") t.moveHandleToLimit(this.index, !0);
      else if (e.key === "Enter") t.toggleCollapse(this.index);
      else return;
      e.preventDefault();
    }
  }
}, rh = ["tabindex", "aria-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-controls", "aria-label", "aria-disabled", "data-dragging"], nh = {
  key: 0,
  class: "ui-resizable-handle-grip",
  "aria-hidden": "true"
};
function sh(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("div", P({
    class: r.rootClass,
    role: "separator",
    tabindex: i.disabled ? void 0 : 0,
    "aria-orientation": r.isHorizontal ? "vertical" : "horizontal",
    "aria-valuenow": r.values ? r.values.now : void 0,
    "aria-valuemin": r.values ? r.values.min : void 0,
    "aria-valuemax": r.values ? r.values.max : void 0,
    "aria-controls": r.values ? r.values.controls : void 0,
    "aria-label": r.resolvedAriaLabel,
    "aria-disabled": i.disabled ? "true" : void 0,
    "data-dragging": s.dragContext ? "true" : void 0
  }, r.passthroughAttrs, {
    onPointerdown: t[0] || (t[0] = (...l) => r.onPointerDown && r.onPointerDown(...l)),
    onPointermove: t[1] || (t[1] = (...l) => r.onPointerMove && r.onPointerMove(...l)),
    onPointerup: t[2] || (t[2] = (...l) => r.onPointerEnd && r.onPointerEnd(...l)),
    onPointercancel: t[3] || (t[3] = (...l) => r.onPointerEnd && r.onPointerEnd(...l)),
    onLostpointercapture: t[4] || (t[4] = (...l) => r.onPointerEnd && r.onPointerEnd(...l)),
    onKeydown: t[5] || (t[5] = (...l) => r.onKeydown && r.onKeydown(...l))
  }), [
    i.showGrip ? (u(), c("span", nh, [
      w(o, {
        name: "grip-vertical",
        size: "xs"
      })
    ])) : m("", !0)
  ], 16, rh);
}
const ah = /* @__PURE__ */ x(ih, [["render", sh]]), lh = G("ui-resizable-panel"), oh = {
  name: "ResizablePanel",
  inheritAttrs: !1,
  inject: {
    uiResizable: { default: null }
  },
  props: {
    /** Başlangıç boyutu (yüzde). Verilmezse kalan alan eşit paylaşılır. */
    defaultSize: {
      type: Number,
      default: null
    },
    minSize: {
      type: Number,
      default: 0
    },
    maxSize: {
      type: Number,
      default: 100
    },
    /** `minSize` altına sürüklenince `collapsedSize` değerine kapanır. */
    collapsible: {
      type: Boolean,
      default: !1
    },
    collapsedSize: {
      type: Number,
      default: 0
    }
  },
  emits: ["collapse", "expand"],
  data() {
    return { fallbackId: lh() };
  },
  computed: {
    panelId() {
      const e = this.$attrs.id;
      return e != null && e !== "" ? String(e) : this.fallbackId;
    },
    index() {
      return this.uiResizable ? this.uiResizable.indexOfPanel(this) : -1;
    },
    size() {
      return this.index < 0 ? null : this.uiResizable.sizeAt(this.index);
    },
    collapsed() {
      return this.index >= 0 && this.uiResizable.isCollapsedAt(this.index);
    },
    /**
     * Ölçüm sonrası boyut `flex-grow` ağırlığıdır (tutamaç pikselleri hesaba katılmaz).
     * Mount öncesi (SSR) `defaultSize` yüzde taban olarak uygulanır; belirtilmeyen panel kalanı doldurur.
     */
    panelStyle() {
      return this.size != null ? { flex: `${this.size} 1 0px` } : this.defaultSize != null ? { flex: `0 1 ${this.defaultSize}%` } : { flex: "1 1 0px" };
    },
    rootClass() {
      return A("ui-resizable-panel", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, id: t, ...i } = this.$attrs;
      return i;
    }
  },
  watch: {
    collapsed(e, t) {
      e !== t && this.$emit(e ? "collapse" : "expand");
    }
  },
  mounted() {
    var e;
    (e = this.uiResizable) == null || e.registerPanel(this);
  },
  beforeUnmount() {
    var e;
    (e = this.uiResizable) == null || e.unregisterPanel(this);
  }
}, uh = ["id", "data-collapsed"];
function ch(e, t, i, n, s, r) {
  return u(), c("div", P({
    id: r.panelId,
    class: r.rootClass,
    style: r.panelStyle,
    "data-collapsed": r.collapsed ? "true" : void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default", {
      collapsed: r.collapsed,
      size: r.size
    })
  ], 16, uh);
}
const dh = /* @__PURE__ */ x(oh, [["render", ch]]), hh = ["vertical", "horizontal", "both"], fh = {
  name: "ScrollArea",
  props: {
    /** Kaydırma ekseni. */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => hh.includes(e)
    },
    /** CSS uzunluğu (`"16rem"`, `"50vh"`); sayı verilirse piksel. Boşsa yükseklik ebeveynden gelir. */
    maxHeight: {
      type: [String, Number],
      default: ""
    },
    /** Kenar solması: yalnız devamı olan kenarda görünür. */
    fade: {
      type: Boolean,
      default: !1
    },
    /** İçerik taştığında bölgenin erişilebilir adı; verilmezse `ui.scrollArea.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      /** Taşma yoksa bölge odaklanamaz ve `role` almaz (boş sekme durağı olmasın). */
      overflowing: !1,
      edges: { top: !1, bottom: !1, left: !1, right: !1 }
    };
  },
  computed: {
    resolvedAriaLabel() {
      return this.ariaLabel || M(this, "ui.scrollArea.ariaLabel", "Scrollable area");
    },
    viewportStyle() {
      if (!(this.maxHeight === "" || this.maxHeight == null))
        return { maxHeight: typeof this.maxHeight == "number" ? `${this.maxHeight}px` : this.maxHeight };
    },
    rootClass() {
      const { top: e, bottom: t, left: i, right: n } = this.edges;
      return [
        "ui-scroll-area",
        `ui-scroll-area--${this.orientation}`,
        this.fade ? "ui-scroll-area--fade" : "",
        this.fade && e ? "ui-scroll-area--fade-top" : "",
        this.fade && t ? "ui-scroll-area--fade-bottom" : "",
        this.fade && i ? "ui-scroll-area--fade-left" : "",
        this.fade && n ? "ui-scroll-area--fade-right" : ""
      ];
    }
  },
  watch: {
    orientation() {
      this.$nextTick(this.measure);
    },
    maxHeight() {
      this.$nextTick(this.measure);
    }
  },
  mounted() {
    this.measure(), !(typeof ResizeObserver > "u") && (this.resizeObserver = new ResizeObserver(() => this.measure()), this.resizeObserver.observe(this.$refs.viewport), this.resizeObserver.observe(this.$refs.content));
  },
  beforeUnmount() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null;
  },
  methods: {
    measure() {
      const e = this.$refs.viewport;
      if (!e) return;
      const t = this.orientation === "horizontal" ? 0 : Math.max(0, e.scrollHeight - e.clientHeight), i = this.orientation === "vertical" ? 0 : Math.max(0, e.scrollWidth - e.clientWidth), n = e.scrollTop, r = getComputedStyle(e).direction === "rtl" ? i - Math.abs(e.scrollLeft) : e.scrollLeft, o = {
        top: t > 1 && n > 1,
        bottom: t > 1 && n < t - 1,
        left: i > 1 && r > 1,
        right: i > 1 && r < i - 1
      }, l = t > 1 || i > 1;
      l !== this.overflowing && (this.overflowing = l);
      const a = this.edges;
      (a.top !== o.top || a.bottom !== o.bottom || a.left !== o.left || a.right !== o.right) && (this.edges = o);
    }
  }
}, mh = ["tabindex", "role", "aria-label"], ph = {
  ref: "content",
  class: "ui-scroll-area-content"
};
function gh(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.rootClass)
  }, [
    f("div", {
      ref: "viewport",
      class: "ui-scroll-area-viewport",
      style: B(r.viewportStyle),
      tabindex: s.overflowing ? 0 : void 0,
      role: s.overflowing ? "region" : void 0,
      "aria-label": s.overflowing ? r.resolvedAriaLabel : void 0,
      onScrollPassive: t[0] || (t[0] = (...o) => r.measure && r.measure(...o))
    }, [
      f("div", ph, [
        b(e.$slots, "default")
      ], 512)
    ], 44, mh)
  ], 2);
}
const bh = /* @__PURE__ */ x(fh, [["render", gh]]), yh = {
  name: "Section",
  props: {
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
      default: ""
    },
    /**
     * Geniş yerleşimde alanlar arasına ayraç (etiket solda, kontrol sağda düzeni). Dar ekranda
     * satırlar dikeye döndüğü için ayraç çizilmez. Alanlar arasına elle `ui-divider` koymak yerine kullanılır.
     */
    divided: {
      type: Boolean,
      default: !1
    },
    /** `false`: üstteki sekme / segment konumu zaten gösteriyorsa etiketli ayırıcı çizilmez */
    showDivider: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    showSectionDivider() {
      return this.showDivider && !!(this.title || this.icon);
    },
    hasFields() {
      return !!this.$slots.default && !this.$slots.body;
    }
  }
}, vh = { class: "ui-section" }, _h = {
  key: 1,
  class: "ui-section-description ui-text-default"
}, kh = {
  key: 4,
  class: "ui-section-body"
};
function xh(e, t, i, n, s, r) {
  const o = y("ui-divider");
  return u(), c("section", vh, [
    r.showSectionDivider ? (u(), v(o, {
      key: 0,
      title: i.title,
      icon: i.icon,
      spacing: "md",
      decorative: !1
    }, null, 8, ["title", "icon"])) : m("", !0),
    i.description ? (u(), c("p", _h, p(i.description), 1)) : m("", !0),
    e.$slots.empty ? b(e.$slots, "empty", { key: 2 }) : r.hasFields ? (u(), c("div", {
      key: 3,
      class: k(["ui-section-fields", i.divided ? "ui-section-fields--divided" : ""])
    }, [
      b(e.$slots, "default")
    ], 2)) : e.$slots.body ? (u(), c("div", kh, [
      b(e.$slots, "body")
    ])) : m("", !0)
  ]);
}
const wh = /* @__PURE__ */ x(yh, [["render", xh]]), Sh = {
  name: "SelectionIndicator",
  mixins: [zi],
  props: {
    /** Seçili öğe seçicisi (kapsayıcı içinde aranır). */
    selector: {
      type: String,
      required: !0
    }
  },
  computed: {
    indicatorEnabled() {
      return !0;
    },
    indicatorSelector() {
      return this.selector;
    }
  },
  watch: {
    indicatorRootAttrs: {
      immediate: !0,
      handler(e) {
        this.$nextTick(() => {
          const t = this.indicatorRootEl();
          t && (t.setAttribute("data-ui-indicator-host", ""), e["data-ui-indicator"] && t.setAttribute("data-ui-indicator", e["data-ui-indicator"]));
        });
      }
    }
  },
  beforeUnmount() {
    const e = this.indicatorRootEl();
    e == null || e.removeAttribute("data-ui-indicator"), e == null || e.removeAttribute("data-ui-indicator-host");
  },
  methods: {
    indicatorRootEl() {
      var e;
      return ((e = this.$el) == null ? void 0 : e.parentElement) || null;
    }
  }
};
function Ch(e, t, i, n, s, r) {
  return u(), c("span", P({
    ref: "indicator",
    class: "ui-selection-indicator"
  }, e.indicatorBind), [...t[0] || (t[0] = [
    f("span", { class: "ui-selection-indicator-fill" }, null, -1)
  ])], 16);
}
const Th = /* @__PURE__ */ x(Sh, [["render", Ch]]), Ih = G("ui-sheet"), Lh = ["left", "right"], Ah = ["sm", "md", "lg", "xl"], Mh = ["solid", "regular", "brands", "light", "duotone", "thin"], Pt = {
  sm: "ui-sheet-panel--sm",
  md: "ui-sheet-panel--md",
  lg: "ui-sheet-panel--lg",
  xl: "ui-sheet-panel--xl"
}, zh = {
  name: "Sheet",
  mixins: [Pi, Y],
  components: { Divider: Xt },
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
      validator: (e) => Lh.includes(e)
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
      validator: (e) => Ah.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** @deprecated Başlıkta süs ikonu çizilmez (DESIGN.md § Ekran anatomisi). Prop geriye uyum için kalır. */
    icon: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Mh.includes(e)
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
    const e = Ih();
    return {
      titleId: `ui-sheet-title-${e}`,
      descriptionId: `ui-sheet-desc-${e}`,
      portalReady: !1,
      focusFallbackTimer: null,
      rootZIndex: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? (this.returnFocusEl = Be(), this.acquireLayer(), this.lockScroll(), this.scheduleInitialFocus()) : (this.releaseLayer(), this.clearFocusFallback());
      },
      flush: "post"
    }
  },
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.releaseLayer(), this.unlockScroll(), this.clearFocusFallback();
  },
  computed: {
    resolvedIconType() {
      return xe(this.uiDefaults, this.iconType);
    },
    hasDefaultHeader() {
      return !!(this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append || this.showClose);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    sizeClass() {
      return Pt[this.size] || Pt.md;
    },
    transitionName() {
      return this.side === "left" ? "ui-overlay-sheet-left" : "ui-overlay-sheet-right";
    },
    panelClasses() {
      return A(
        "ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden",
        this.sizeClass,
        this.side === "left" ? "ui-sheet-panel--left" : "ui-sheet-panel--right",
        this.bodyLayout === "flex" ? "ui-sheet-panel--body-flex" : "",
        this.fullOnMobile ? "ui-sheet-panel--full-mobile" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      return qt(this.$attrs, ["class"]);
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
    rootLayerStyle() {
      if (this.rootZIndex != null)
        return { zIndex: String(this.rootZIndex) };
    },
    rootLayerClasses() {
      return A(
        "ui-sheet-root fixed inset-0 flex outline-none",
        // `side` fizikseldir: RTL’de flex başlangıcı sağa geçtiği için hizalama ters çevrilir.
        this.side === "left" ? "justify-start rtl:justify-end" : "justify-end rtl:justify-start",
        !this.overlay && "ui-sheet-root--no-overlay"
      );
    }
  },
  methods: {
    acquireLayer() {
      this.rootZIndex == null && (this.rootZIndex = Fi(this, "modal", () => this.close()), this.overlay && typeof document < "u" && document.addEventListener("focusin", this.onDocumentFocusIn));
    },
    /** Odak arkadaki sayfaya kaçarsa panele geri çağırır (bkz. `utils/focus-guard.js`). */
    onDocumentFocusIn(e) {
      var t, i;
      !this.overlay || !Ri(this) || Ni(e.target, this.$refs.layerRef) && ((i = (t = this.$refs.panelRef) == null ? void 0 : t.focus) == null || i.call(t, { preventScroll: !0 }));
    },
    releaseLayer() {
      this.rootZIndex != null && (typeof document < "u" && document.removeEventListener("focusin", this.onDocumentFocusIn), Di(this), this.rootZIndex = null);
    },
    /** Yalnız modal (`overlay`) sheet arka plan kaydırmasını kilitler; kilit çıkış animasyonu bitince açılır. */
    lockScroll() {
      this.scrollLocked || !this.overlay || (this.scrollLocked = !0, Oi());
    },
    unlockScroll() {
      this.scrollLocked && (this.scrollLocked = !1, Vi());
    },
    close() {
      this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.overlay && this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      if (e.key === "Escape" && this.closeOnEscape) {
        if (e.defaultPrevented) return;
        e.stopPropagation(), this.close();
        return;
      }
      this.overlay && Ei(e, this.$refs.panelRef);
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    onOverlayAfterLeave() {
      this.open || this.unlockScroll(), this.$emit("after-leave"), $e(this.returnFocusEl), this.returnFocusEl = null;
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      this.clearFocusFallback(), !(!this.initialFocus || !this.open) && this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) return;
        Qt(e) || (this.focusFallbackTimer = setTimeout(() => {
          var i;
          this.focusFallbackTimer = null, (i = e.focus) == null || i.call(e);
        }, 50));
      });
    }
  }
}, Ph = ["aria-modal", "aria-labelledby", "aria-describedby", "aria-label"], Eh = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Oh = {
  key: 0,
  class: "ui-sheet-header ui-sheet-header--no-icon"
}, Dh = ["id"], Rh = {
  key: 1,
  class: "ui-sheet-header__actions"
}, Nh = ["id"], Fh = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Vh(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("Divider");
  return s.portalReady ? (u(), v(Se, {
    key: 0,
    to: e.portalTarget
  }, [
    w(Ce, {
      name: r.transitionName,
      appear: "",
      onAfterEnter: r.onOverlayAfterEnter,
      onAfterLeave: r.onOverlayAfterLeave
    }, {
      default: _(() => [
        i.open ? (u(), c("div", {
          key: 0,
          ref: "layerRef",
          class: k(r.rootLayerClasses),
          style: B(r.rootLayerStyle),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[2] || (t[2] = (...a) => r.onLayerKeydown && r.onLayerKeydown(...a))
        }, [
          i.overlay ? (u(), c("div", {
            key: 0,
            class: "ui-sheet-backdrop absolute inset-0 bg-black/70",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...a) => r.onBackdrop && r.onBackdrop(...a))
          })) : m("", !0),
          f("div", P({
            ref: "panelRef",
            class: r.panelClasses,
            role: "dialog",
            "aria-modal": i.overlay ? "true" : "false",
            tabindex: "-1",
            "aria-labelledby": r.ariaLabelledby,
            "aria-describedby": r.ariaDescribedby,
            "aria-label": r.ariaLabelAttr
          }, r.passthroughAttrs, {
            onClick: t[1] || (t[1] = K(() => {
            }, ["stop"]))
          }), [
            r.hasHeaderBlock ? (u(), c("div", Eh, [
              b(e.$slots, "header", {}, () => [
                r.hasDefaultHeader ? (u(), c("div", Oh, [
                  i.title ? (u(), c("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-sheet-header__title ui-heading-3"
                  }, p(i.title), 9, Dh)) : m("", !0),
                  e.$slots.append || e.$slots.actions ? (u(), c("div", Rh, [
                    b(e.$slots, "append"),
                    b(e.$slots, "actions")
                  ])) : m("", !0),
                  i.showClose ? (u(), v(o, {
                    key: 2,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": r.resolvedCloseLabel,
                    onClick: r.close
                  }, null, 8, ["aria-label", "onClick"])) : m("", !0),
                  i.description ? (u(), c("p", {
                    key: 3,
                    id: s.descriptionId,
                    class: "ui-sheet-header__description ui-text-default"
                  }, p(i.description), 9, Nh)) : m("", !0)
                ])) : m("", !0)
              ])
            ])) : m("", !0),
            e.$slots.toolbar ? (u(), c("div", Fh, [
              b(e.$slots, "toolbar")
            ])) : m("", !0),
            r.showHeaderDivider ? (u(), v(l, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : m("", !0),
            e.$slots.default ? (u(), c("div", {
              key: 3,
              class: k(["ui-card-body ui-text-default", {
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              b(e.$slots, "default")
            ], 2)) : m("", !0),
            e.$slots.footer ? (u(), c("div", {
              key: 4,
              class: k(["ui-card-footer", { "ui-sheet-footer--borderless": !i.footerBorder }])
            }, [
              b(e.$slots, "footer")
            ], 2)) : m("", !0)
          ], 16, Ph)
        ], 38)) : m("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to"])) : m("", !0);
}
const Bh = /* @__PURE__ */ x(zh, [["render", Vh]]), $h = ["sm", "md", "lg"], Hh = ["button", "submit", "reset"], Et = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ot = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Kh = {
  name: "SidebarItem",
  mixins: [Y],
  components: { RouterLink: ai },
  inheritAttrs: !1,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => Hh.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || $h.includes(e)
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
      return it(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return this.block;
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-start" : "text-center";
      return this.isBlock ? A("ui-sidebar-item-text min-w-0 flex-1 truncate", e) : A("ui-sidebar-item-text whitespace-nowrap", e);
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    itemClasses() {
      const e = this.cubed ? Ot[this.resolvedSize] || Ot.md : Et[this.resolvedSize] || Et.md;
      return A(
        "ui-sidebar-item font-sans",
        this.active && "ui-sidebar-item--active",
        this.cubed && "ui-sidebar-item--cubed",
        this.isBlock && "ui-sidebar-item--block w-full",
        e,
        this.disabled && "cursor-not-allowed opacity-50",
        this.hasRouterTo && "inline-flex items-center",
        this.$attrs.class
      );
    }
  },
  methods: {
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === ii) return !1;
      if (e.type === ri)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === S) {
        const t = e.children;
        return Array.isArray(t) ? t.some((i) => this.isRenderableVNode(i)) : !1;
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
}, Uh = ["href", "aria-current", "aria-disabled", "tabindex", "onClick"], Yh = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Gh = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Wh = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, qh = ["type", "disabled", "aria-current"], jh = {
  key: 0,
  class: "ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
}, Zh = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Xh = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Qh(e, t, i, n, s, r) {
  const o = y("ui-icon"), l = y("RouterLink");
  return r.hasRouterTo ? (u(), v(l, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: _(({ href: a, navigate: d }) => [
      f("a", P({
        href: a,
        class: r.itemClasses,
        "aria-current": i.active ? "page" : void 0,
        "aria-disabled": i.disabled ? "true" : void 0,
        tabindex: i.disabled ? -1 : void 0
      }, r.forwardedAttrs, {
        onClick: (h) => r.onRouterLinkClick(h, d)
      }), [
        r.usesCubedCenterLayout ? (u(), c("span", Yh, [
          i.prefixIcon ? (u(), v(o, {
            key: 0,
            size: r.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (u(), v(o, {
            key: 1,
            size: r.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : b(e.$slots, "default", { key: 2 })
        ])) : (u(), c(S, { key: 1 }, [
          i.prefixIcon ? (u(), c("span", Gh, [
            w(o, {
              size: r.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : m("", !0),
          f("span", {
            class: k(r.textContentClass)
          }, [
            b(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (u(), c("span", Wh, [
            w(o, {
              size: r.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : m("", !0)
        ], 64))
      ], 16, Uh)
    ]),
    _: 3
  }, 8, ["to"])) : (u(), c("button", P({
    key: 1,
    type: i.nativeType,
    class: r.itemClasses,
    disabled: i.disabled || void 0,
    "aria-current": i.active ? "page" : void 0
  }, r.forwardedAttrs, {
    onClick: t[0] || (t[0] = (...a) => r.onClick && r.onClick(...a))
  }), [
    r.usesCubedCenterLayout ? (u(), c("span", jh, [
      i.prefixIcon ? (u(), v(o, {
        key: 0,
        size: r.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (u(), v(o, {
        key: 1,
        size: r.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : b(e.$slots, "default", { key: 2 })
    ])) : (u(), c(S, { key: 1 }, [
      i.prefixIcon ? (u(), c("span", Zh, [
        w(o, {
          size: r.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : m("", !0),
      f("span", {
        class: k(r.textContentClass)
      }, [
        b(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (u(), c("span", Xh, [
        w(o, {
          size: r.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : m("", !0)
    ], 64))
  ], 16, qh));
}
const Jh = /* @__PURE__ */ x(Kh, [["render", Qh]]), ef = G("ui-slider"), tf = {
  name: "Slider",
  mixins: [ue],
  inheritAttrs: !1,
  props: {
    /** Tek değer; `range` açıkken `[alt, üst]` dizisi. */
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    /** İki tutamaçlı aralık seçimi. Kapalıyken (varsayılan) yerel `input[type=range]` çizilir. */
    range: {
      type: Boolean,
      default: !1
    },
    /** `range`: iki tutamaç arasında korunacak en küçük fark (değer birimi). */
    minDistance: {
      type: Number,
      default: 0
    },
    /** `range`: `(value) => string` — tutamacın `aria-valuetext` metni (örn. para biçimi). */
    formatValue: {
      type: Function,
      default: null
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
    return {
      fallbackId: ef(),
      /** `range`: son dokunulan tutamaç üstte kalır (üst üste geldiklerinde tutulabilsin). */
      activeThumb: 1,
      /** `range`: sürüklenen tutamaç ve işaretçi kimliği. */
      rangeDrag: null
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return A(
        "ui-slider",
        this.range && "ui-slider--range",
        this.disabled && "ui-slider--disabled",
        this.$attrs.class
      );
    },
    /** `range`: geçerli `[alt, üst]`; eksik / ters değerler sınırlara oturtulur. */
    rangeValue() {
      const e = Number(this.min), t = Number(this.max), i = Array.isArray(this.modelValue) ? this.modelValue : [];
      let n = Number.isFinite(Number(i[0])) && i[0] != null ? Number(i[0]) : e, s = Number.isFinite(Number(i[1])) && i[1] != null ? Number(i[1]) : t;
      return n = Math.min(t, Math.max(e, n)), s = Math.min(t, Math.max(e, s)), n <= s ? [n, s] : [s, n];
    },
    rangeGap() {
      const e = Number(this.max) - Number(this.min);
      return Math.min(Math.max(0, Number(this.minDistance) || 0), Math.max(0, e));
    },
    rangeThumbs() {
      const [e, t] = this.rangeValue, i = this.rangeGap, n = [
        M(this, "ui.slider.minThumb", "Minimum"),
        M(this, "ui.slider.maxThumb", "Maximum")
      ];
      return [e, t].map((s, r) => ({
        index: r,
        value: s,
        // Sınırlar diğer tutamaca göre daralır: tutamaçlar birbirini geçemez.
        min: r === 0 ? Number(this.min) : e + i,
        max: r === 0 ? t - i : Number(this.max),
        label: n[r],
        text: typeof this.formatValue == "function" ? String(this.formatValue(s)) : void 0,
        style: { "--ui-slider-thumb-pos": String(this.rangePercent(s) / 100) }
      }));
    },
    rangeFillStyle() {
      const [e, t] = this.rangeValue;
      return {
        insetInlineStart: `${this.rangePercent(e)}%`,
        insetInlineEnd: `${100 - this.rangePercent(t)}%`
      };
    },
    groupAriaLabel() {
      return this.$attrs["aria-label"] || this.label || void 0;
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
      return t;
    }
  },
  methods: {
    onNativeInput(e) {
      const t = Number(e.target.value);
      this.notifyFormDirty(), this.$emit("update:modelValue", Number.isNaN(t) ? this.min : t), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    },
    rangePercent(e) {
      const t = Number(this.max) - Number(this.min);
      return t <= 0 ? 0 : Math.min(100, Math.max(0, (e - Number(this.min)) / t * 100));
    },
    /** Değeri adıma oturtur (kayan nokta artığı temizlenir). */
    snapToStep(e) {
      const t = Number(this.step) > 0 ? Number(this.step) : 1, i = Number(this.min), n = Math.round((e - i) / t) * t + i, s = (String(t).split(".")[1] || "").length;
      return Number(n.toFixed(Math.min(10, s + 2)));
    },
    /**
     * Tutamacı yeni değere taşır; diğer tutamaç ve `minDistance` sınırdır.
     * @returns {boolean} Değer değiştiyse `true`.
     */
    setRangeThumb(e, t) {
      const [i, n] = this.rangeValue, s = this.rangeGap, r = e === 0 ? Number(this.min) : i + s, o = e === 0 ? n - s : Number(this.max);
      if (o < r) return !1;
      let l = this.snapToStep(t);
      l = Math.min(o, Math.max(r, l));
      const a = e === 0 ? [l, n] : [i, l];
      return a[0] === i && a[1] === n ? !1 : (this.notifyFormDirty(), this.$emit("update:modelValue", a), !0);
    },
    emitRangeChange() {
      this.$nextTick(() => this.$emit("change", this.rangeValue.slice()));
    },
    isRtl() {
      return getComputedStyle(this.$el).direction === "rtl";
    },
    onRangeKeydown(e, t) {
      if (this.disabled) return;
      const i = Number(this.step) > 0 ? Number(this.step) : 1, n = this.isRtl() ? "ArrowLeft" : "ArrowRight", s = this.isRtl() ? "ArrowRight" : "ArrowLeft", r = this.rangeThumbs[t];
      let o;
      switch (e.key) {
        case n:
        case "ArrowUp":
          o = r.value + i;
          break;
        case s:
        case "ArrowDown":
          o = r.value - i;
          break;
        case "PageUp":
          o = r.value + i * 10;
          break;
        case "PageDown":
          o = r.value - i * 10;
          break;
        case "Home":
          o = r.min;
          break;
        case "End":
          o = r.max;
          break;
        default:
          return;
      }
      e.preventDefault(), this.setRangeThumb(t, o) && this.emitRangeChange();
    },
    /** İşaretçi konumundan değer — tutamaç yarı genişliği kadar iç pay (yerel range ile aynı yol). */
    rangeValueFromPointer(e) {
      const t = this.$refs.rail, i = t.getBoundingClientRect(), n = t.querySelector(".ui-slider-range-thumb"), s = n ? n.offsetWidth / 2 : 0, r = i.width - s * 2;
      if (!(r > 0)) return Number(this.min);
      const o = this.isRtl() ? i.right - e.clientX : e.clientX - i.left, l = Math.min(1, Math.max(0, (o - s) / r));
      return Number(this.min) + l * (Number(this.max) - Number(this.min));
    },
    onRangePointerDown(e) {
      var l, a, d;
      if (this.disabled || e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      const t = this.rangeValueFromPointer(e), [i, n] = this.rangeValue, s = (a = (l = e.target) == null ? void 0 : l.getAttribute) == null ? void 0 : a.call(l, "data-thumb");
      let r;
      i === n ? t < i ? r = 0 : t > n ? r = 1 : r = i >= Number(this.max) ? 0 : 1 : s != null ? r = Number(s) : r = Math.abs(t - i) <= Math.abs(t - n) ? 0 : 1, this.activeThumb = r;
      const o = this.$refs.rail;
      try {
        o.setPointerCapture(e.pointerId);
      } catch {
      }
      (d = o.querySelector(`[data-thumb="${r}"]`)) == null || d.focus({ preventScroll: !0 }), this.rangeDrag = { index: r, pointerId: e.pointerId, changed: !1 }, s == null && this.setRangeThumb(r, t) && (this.rangeDrag.changed = !0);
    },
    onRangePointerMove(e) {
      const t = this.rangeDrag;
      !t || t.pointerId !== e.pointerId || this.setRangeThumb(t.index, this.rangeValueFromPointer(e)) && (t.changed = !0);
    },
    onRangePointerEnd(e) {
      const t = this.rangeDrag;
      if (!(!t || t.pointerId !== e.pointerId)) {
        this.rangeDrag = null;
        try {
          this.$refs.rail.releasePointerCapture(e.pointerId);
        } catch {
        }
        t.changed && this.emitRangeChange();
      }
    }
  }
}, rf = {
  key: 0,
  class: "ui-slider-header"
}, nf = {
  key: 0,
  class: "ui-form-label"
}, sf = {
  key: 1,
  class: "ui-slider-value"
}, af = {
  key: 1,
  class: "ui-slider-rail"
}, lf = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], of = ["id", "aria-label"], uf = {
  class: "ui-slider-range-track",
  "aria-hidden": "true"
}, cf = ["tabindex", "data-thumb", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-disabled", "aria-describedby", "onKeydown", "onFocus"], df = {
  key: 3,
  class: "ui-slider-scale"
}, hf = { key: 0 }, ff = { key: 1 };
function mf(e, t, i, n, s, r) {
  const o = y("ui-progress");
  return u(), c("div", {
    class: k(r.rootClass)
  }, [
    i.label || r.hasValue ? (u(), c("div", rf, [
      i.label ? (u(), c("span", nf, p(i.label), 1)) : m("", !0),
      r.hasValue ? (u(), c("span", sf, p(i.valueText), 1)) : m("", !0)
    ])) : m("", !0),
    i.range ? (u(), c("div", {
      key: 2,
      id: r.resolvedId,
      ref: "rail",
      class: "ui-slider-rail ui-slider-range-rail",
      role: "group",
      "aria-label": r.groupAriaLabel,
      onPointerdown: t[2] || (t[2] = (...l) => r.onRangePointerDown && r.onRangePointerDown(...l)),
      onPointermove: t[3] || (t[3] = (...l) => r.onRangePointerMove && r.onRangePointerMove(...l)),
      onPointerup: t[4] || (t[4] = (...l) => r.onRangePointerEnd && r.onRangePointerEnd(...l)),
      onPointercancel: t[5] || (t[5] = (...l) => r.onRangePointerEnd && r.onRangePointerEnd(...l)),
      onLostpointercapture: t[6] || (t[6] = (...l) => r.onRangePointerEnd && r.onRangePointerEnd(...l))
    }, [
      f("div", uf, [
        f("div", {
          class: "ui-slider-range-fill",
          style: B(r.rangeFillStyle)
        }, null, 4)
      ]),
      (u(!0), c(S, null, L(r.rangeThumbs, (l) => (u(), c("div", {
        key: l.index,
        class: k(["ui-slider-range-thumb", s.activeThumb === l.index && "ui-slider-range-thumb--top"]),
        style: B(l.style),
        role: "slider",
        tabindex: i.disabled ? -1 : 0,
        "data-thumb": l.index,
        "aria-label": l.label,
        "aria-valuemin": l.min,
        "aria-valuemax": l.max,
        "aria-valuenow": l.value,
        "aria-valuetext": l.text,
        "aria-disabled": i.disabled ? "true" : void 0,
        "aria-describedby": i.ariaDescribedby,
        "aria-orientation": "horizontal",
        onKeydown: (a) => r.onRangeKeydown(a, l.index),
        onFocus: (a) => s.activeThumb = l.index
      }, null, 46, cf))), 128))
    ], 40, of)) : (u(), c("div", af, [
      w(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: r.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      f("input", P(r.passthroughAttrs, {
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
        onInput: t[0] || (t[0] = (...l) => r.onNativeInput && r.onNativeInput(...l)),
        onChange: t[1] || (t[1] = (...l) => r.onChange && r.onChange(...l))
      }), null, 16, lf)
    ])),
    i.minLabel || i.maxLabel ? (u(), c("div", df, [
      i.minLabel ? (u(), c("span", hf, p(i.minLabel), 1)) : m("", !0),
      i.maxLabel ? (u(), c("span", ff, p(i.maxLabel), 1)) : m("", !0)
    ])) : m("", !0)
  ], 2);
}
const pf = /* @__PURE__ */ x(tf, [["render", mf]]), gf = U, bf = ["primary", "secondary", "success", "warning", "info", "danger"], yf = ["soft", "surface", "plain"], Dt = {
  sm: "ui-display-sm",
  md: "ui-display-md",
  lg: "ui-display-lg"
}, vf = {
  name: "Stat",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: fe,
    /** Başlık ikonu tonu */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || bf.includes(e)
    },
    /** Başlık ikonu `ui-icon-tile` içinde, `color` zemininde */
    iconTile: {
      type: Boolean,
      default: !1
    },
    /** Yüzde değişim; `undefined` satırı gizler, `null` yerini korur */
    change: {
      type: Number,
      default: void 0
    },
    /** Hazır değişim metni (biçimlendirmeyi geçersiz kılar), ör. “Yeni dönem” */
    changeText: {
      type: String,
      default: ""
    },
    /** Değişimin yanındaki nötr açıklama, ör. “(₺1.250)” veya “dünden” */
    changeLabel: {
      type: String,
      default: ""
    },
    /** Azalış iyi (gider, iptal, bekleme süresi) */
    invertTrend: {
      type: Boolean,
      default: !1
    },
    /** `soft`: kart içi dolgulu kutu · `surface`: sayfa üzerinde kart yüzeyi · `plain`: kutusuz */
    variant: {
      type: String,
      default: "soft",
      validator: (e) => yf.includes(e)
    },
    /** Değer ölçüsü: sm 18px · md 20px · lg 24px */
    size: {
      type: String,
      default: "lg",
      validator: (e) => gf.includes(e)
    },
    /** Kart tıklanabilir (`click` yayar; Enter / Space ile de çalışır) */
    interactive: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    rootClass() {
      return A(
        "ui-stat",
        this.variant === "surface" ? "ui-surface ui-stat--surface" : "",
        this.variant === "plain" ? "ui-stat--plain" : "",
        this.interactive ? "ui-stat--interactive" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, onClick: t, ...i } = this.$attrs;
      return i;
    },
    valueClass() {
      return A("ui-stat-value", Dt[this.size] || Dt.lg);
    },
    numericChange() {
      if (this.change == null) return null;
      const e = Number(this.change);
      return Number.isFinite(e) ? e : null;
    },
    showChangeRow() {
      return this.change !== void 0 || !!this.changeText;
    },
    hasChangeContent() {
      return !!this.changeText || this.numericChange != null;
    },
    trend() {
      const e = this.numericChange;
      return e == null || e === 0 ? "neutral" : e > 0 !== this.invertTrend ? "positive" : "negative";
    },
    changeIcon() {
      const e = this.numericChange;
      return e == null || e === 0 ? "" : e > 0 ? "chart-line-up" : "chart-line-down";
    },
    changeDisplay() {
      var n;
      if (this.changeText) return this.changeText;
      const e = this.numericChange;
      if (e == null) return "";
      const t = ((n = this.$i18n) == null ? void 0 : n.locale) || void 0;
      return `${new Intl.NumberFormat(t, {
        maximumFractionDigits: 1,
        signDisplay: "exceptZero"
      }).format(e)}%`;
    },
    changeClass() {
      return A(
        "ui-stat-change",
        `ui-stat-change--${this.trend}`,
        this.hasChangeContent ? "" : "invisible"
      );
    }
  },
  methods: {
    onActivate(e) {
      !this.interactive || this.loading || this.$emit("click", e);
    }
  }
}, _f = ["role", "tabindex", "aria-busy"], kf = {
  key: 0,
  class: "ui-stat-value-skeleton"
}, xf = {
  key: 1,
  class: "ui-stat-change-label"
}, wf = {
  key: 3,
  class: "ui-stat-body"
}, Sf = {
  key: 4,
  class: "ui-stat-footer"
};
function Cf(e, t, i, n, s, r) {
  const o = y("ui-skeleton"), l = y("ui-icon"), a = y("ui-field");
  return u(), c("div", P({
    class: r.rootClass,
    role: i.interactive ? "button" : void 0,
    tabindex: i.interactive ? 0 : void 0,
    "aria-busy": i.loading ? "true" : void 0
  }, r.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...d) => r.onActivate && r.onActivate(...d)),
    onKeydown: [
      t[1] || (t[1] = we(K((...d) => r.onActivate && r.onActivate(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = we(K((...d) => r.onActivate && r.onActivate(...d), ["prevent"]), ["space"]))
    ]
  }), [
    w(a, {
      card: i.variant === "soft",
      fill: "",
      title: i.title,
      icon: i.icon,
      "icon-type": i.iconType,
      "icon-tone": i.color || void 0,
      "icon-tile": i.iconTile
    }, {
      default: _(() => [
        i.loading ? (u(), c("span", kf, [
          w(o, {
            variant: "line",
            size: "md"
          })
        ])) : (u(), c("p", {
          key: 1,
          class: k(r.valueClass)
        }, [
          b(e.$slots, "value", {}, () => [
            E(p(i.value), 1)
          ])
        ], 2)),
        r.showChangeRow ? (u(), c("p", {
          key: 2,
          class: k(r.changeClass)
        }, [
          r.hasChangeContent ? (u(), c(S, { key: 0 }, [
            r.changeIcon ? (u(), v(l, {
              key: 0,
              name: r.changeIcon,
              size: "xs",
              "aria-hidden": "true"
            }, null, 8, ["name"])) : m("", !0),
            f("span", null, p(r.changeDisplay), 1),
            i.changeLabel ? (u(), c("span", xf, p(i.changeLabel), 1)) : m("", !0)
          ], 64)) : (u(), c(S, { key: 1 }, [
            E(p(" "))
          ], 64))
        ], 2)) : m("", !0),
        e.$slots.default ? (u(), c("div", wf, [
          b(e.$slots, "default")
        ])) : m("", !0),
        e.$slots.footer ? (u(), c("div", Sf, [
          b(e.$slots, "footer")
        ])) : m("", !0)
      ]),
      _: 3
    }, 8, ["card", "title", "icon", "icon-type", "icon-tone", "icon-tile"])
  ], 16, _f);
}
const Tf = /* @__PURE__ */ x(vf, [["render", Cf]]), If = [1, 2, 3, 4], Lf = [1, 2, 3], Af = {
  name: "StatGroup",
  inheritAttrs: !1,
  props: {
    /** Geniş ekrandaki en fazla sütun sayısı */
    columns: {
      type: Number,
      default: 3,
      validator: (e) => If.includes(e)
    },
    /** Dar ekranda en az sütun sayısı; `2` mobilde de metrikleri ikişer dizer */
    minColumns: {
      type: Number,
      default: 1,
      validator: (e) => Lf.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return A(
        "ui-stat-group",
        `ui-stat-group--cols-${this.columns}`,
        this.minColumns > 1 ? `ui-stat-group--min-cols-${this.minColumns}` : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Mf = ["aria-label"];
function zf(e, t, i, n, s, r) {
  return u(), c("div", P({
    class: r.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Mf);
}
const Pf = /* @__PURE__ */ x(Af, [["render", zf]]), Ef = {
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
      !this.autofocus || !this.active || Gt() || this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return;
          const e = this.resolveFocusRoot();
          e && Qt(e);
        });
      });
    }
  }
}, Of = {
  ref: "root",
  class: "ui-step"
};
function Df(e, t, i, n, s, r) {
  return ni((u(), c("div", Of, [
    b(e.$slots, "default")
  ], 512)), [
    [si, i.active]
  ]);
}
const Rf = /* @__PURE__ */ x(Ef, [["render", Df]]), Nf = ["horizontal", "vertical"], Ff = ["default", "pills"], Vf = {
  name: "Stepper",
  mixins: [Y],
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
      validator: (e) => Ff.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Nf.includes(e)
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
        iconType: (t == null ? void 0 : t.iconType) ?? xe(this.uiDefaults, void 0)
      }));
    },
    rootClass() {
      return A(
        "ui-stepper",
        this.variant === "pills" && "ui-stepper--pills",
        this.variant === "pills" && this.interactive && "ui-stepper--interactive",
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
}, Bf = ["role", "aria-label"], $f = { class: "ui-stepper-pills-track" }, Hf = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Kf = { class: "flex w-full min-w-0 items-center justify-center" }, Uf = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Yf = {
  key: 1,
  class: "tabular-nums"
}, Gf = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Wf = { class: "ui-stepper-title ui-stepper-title--horizontal" }, qf = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, jf = { class: "flex flex-col items-center" }, Zf = {
  key: 1,
  class: "tabular-nums"
}, Xf = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Qf = { class: "ui-stepper-title" }, Jf = {
  key: 0,
  class: "ui-stepper-description"
};
function em(e, t, i, n, s, r) {
  const o = y("ui-icon");
  return u(), c("div", P({
    class: r.rootClass,
    role: i.variant === "pills" ? "group" : "list",
    "aria-label": i.ariaLabel
  }, r.passthroughAttrs), [
    i.variant === "pills" ? (u(), c(S, { key: 0 }, [
      f("div", $f, [
        (u(!0), c(S, null, L(r.normalizedSteps, (l, a) => (u(), v(le(i.interactive ? "button" : "span"), P({
          key: a,
          class: ["ui-stepper-pill", r.pillClass(a)],
          "aria-current": i.interactive && a === i.modelValue ? "step" : void 0,
          "aria-label": i.interactive ? l.title : void 0,
          "aria-hidden": i.interactive ? void 0 : "true"
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (d) => i.interactive ? r.go(a) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "aria-hidden", "onClick"]))), 128))
      ]),
      i.showLabel ? (u(), c("p", Hf, p(r.pillsLabel), 1)) : m("", !0)
    ], 64)) : i.direction === "horizontal" ? (u(!0), c(S, { key: 1 }, L(r.normalizedSteps, (l, a) => (u(), c("div", {
      key: a,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      f("div", Kf, [
        a > 0 ? (u(), c("span", {
          key: 0,
          class: k(["ui-stepper-rail ui-stepper-rail--h", r.railBeforeClass(a)]),
          "aria-hidden": "true"
        }, null, 2)) : (u(), c("span", Uf)),
        (u(), v(le(i.interactive ? "button" : "div"), P({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(a)],
          "aria-current": a === i.modelValue ? "step" : void 0,
          "aria-label": l.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (d) => i.interactive ? r.go(a) : void 0
        }), {
          default: _(() => [
            l.icon ? (u(), v(o, {
              key: 0,
              name: l.icon,
              type: l.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (u(), c("span", Yf, p(a + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        a < r.normalizedSteps.length - 1 ? (u(), c("span", {
          key: 2,
          class: k(["ui-stepper-rail ui-stepper-rail--h", r.railAfterClass(a)]),
          "aria-hidden": "true"
        }, null, 2)) : (u(), c("span", Gf))
      ]),
      f("p", Wf, p(l.title), 1),
      l.description ? (u(), c("p", qf, p(l.description), 1)) : m("", !0)
    ]))), 128)) : (u(!0), c(S, { key: 2 }, L(r.normalizedSteps, (l, a) => (u(), c("div", {
      key: a,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      f("div", jf, [
        (u(), v(le(i.interactive ? "button" : "div"), P({
          class: ["ui-stepper-indicator shrink-0", r.indicatorClass(a)],
          "aria-current": a === i.modelValue ? "step" : void 0,
          "aria-label": l.title
        }, { ref_for: !0 }, i.interactive ? { type: "button" } : {}, {
          onClick: (d) => i.interactive ? r.go(a) : void 0
        }), {
          default: _(() => [
            l.icon ? (u(), v(o, {
              key: 0,
              name: l.icon,
              type: l.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (u(), c("span", Zf, p(a + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        a < r.normalizedSteps.length - 1 ? (u(), c("span", {
          key: 0,
          class: k(["ui-stepper-vrail", r.verticalRailClass(a)]),
          "aria-hidden": "true"
        }, null, 2)) : m("", !0)
      ]),
      f("div", Xf, [
        f("p", Qf, p(l.title), 1),
        l.description ? (u(), c("p", Jf, p(l.description), 1)) : m("", !0)
      ])
    ]))), 128))
  ], 16, Bf);
}
const tm = /* @__PURE__ */ x(Vf, [["render", em]]), im = {
  name: "Table",
  inheritAttrs: !1,
  props: {
    /**
     * Sütun başlıkları sayfa kayarken görünür kalır (masaüstü). Üst boşluk `--ui-table-sticky-top`,
     * zemin `--ui-table-sticky-bg` ile ayarlanır.
     */
    stickyHeader: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    scrollClass() {
      return A("ui-table-scroll", this.stickyHeader && "ui-table-scroll--sticky-head");
    },
    rootClass() {
      return A("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function rm(e, t, i, n, s, r) {
  return u(), c("div", {
    class: k(r.scrollClass)
  }, [
    f("table", P({ class: r.rootClass }, r.passthroughAttrs), [
      b(e.$slots, "default")
    ], 16)
  ], 2);
}
const nm = /* @__PURE__ */ x(im, [["render", rm]]), sm = {
  name: "TableBody"
}, am = { class: "ui-table-body" };
function lm(e, t, i, n, s, r) {
  return u(), c("tbody", am, [
    b(e.$slots, "default")
  ]);
}
const om = /* @__PURE__ */ x(sm, [["render", lm]]), um = ["left", "center", "right"], cm = ["title", "secondary", "body"], dm = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => um.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || cm.includes(e)
    },
    iconCol: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    },
    /** Seçim (onay kutusu) sütunu: dar, sabit genişlik. */
    selectCol: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return A(
        "ui-table-cell",
        this.iconCol && "ui-table-cell--icon-col",
        this.empty && "ui-table-cell--empty",
        this.selectCol && "ui-table-cell--select",
        this.align === "center" && "ui-table-cell--align-center",
        this.align === "right" && "ui-table-cell--align-end",
        this.tone === "title" && "ui-table-cell--tone-title",
        this.tone === "secondary" && "ui-table-cell--tone-secondary",
        this.tone === "body" && "ui-table-cell--tone-body",
        this.$attrs.class
      );
    }
  }
}, hm = ["colspan"];
function fm(e, t, i, n, s, r) {
  return u(), c("td", {
    colspan: i.colspan > 0 ? i.colspan : void 0,
    class: k(r.rootClass)
  }, [
    b(e.$slots, "default")
  ], 10, hm);
}
const mm = /* @__PURE__ */ x(dm, [["render", fm]]), pm = ["left", "center", "right"], gm = ["sm", "md", "lg"], bm = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => pm.includes(e)
    },
    width: {
      type: String,
      default: ""
    },
    iconCol: {
      type: Boolean,
      default: !1
    },
    /** Seçim (onay kutusu) sütunu: dar, sabit genişlik. */
    selectCol: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return A(
        "ui-table-head",
        this.iconCol && "ui-table-head--icon-col",
        this.selectCol && "ui-table-head--select",
        this.align === "center" && "ui-table-head--align-center",
        this.align === "right" && "ui-table-head--align-end",
        !this.iconCol && this.width === "sm" && "ui-table-head--w-sm",
        !this.iconCol && this.width === "md" && "ui-table-head--w-md",
        !this.iconCol && this.width === "lg" && "ui-table-head--w-lg",
        this.$attrs.class
      );
    },
    widthStyle() {
      if (!(this.iconCol || gm.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function ym(e, t, i, n, s, r) {
  return u(), c("th", {
    class: k(r.rootClass),
    style: B(r.widthStyle)
  }, [
    b(e.$slots, "default")
  ], 6);
}
const vm = /* @__PURE__ */ x(bm, [["render", ym]]), _m = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return A(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function km(e, t, i, n, s, r) {
  return u(), c("thead", {
    class: k(r.rootClass)
  }, [
    b(e.$slots, "default")
  ], 2);
}
const xm = /* @__PURE__ */ x(_m, [["render", km]]), wm = {
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
}, Sm = { class: "ui-table-pagination" }, Cm = { class: "ui-table-pagination-meta" }, Tm = { class: "ui-table-pagination-nav" }, Im = { class: "ui-table-pagination-page" };
function Lm(e, t, i, n, s, r) {
  const o = y("ui-button");
  return u(), c("div", Sm, [
    f("div", Cm, [
      b(e.$slots, "meta", {}, () => [
        E(p(i.metaText), 1)
      ])
    ]),
    f("div", Tm, [
      w(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        class: "ui-icon--dir",
        disabled: !r.canPrev,
        "aria-label": i.prevAriaLabel,
        onClick: t[0] || (t[0] = (l) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      f("div", Im, p(i.pageLabel), 1),
      w(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        class: "ui-icon--dir",
        disabled: !r.canNext,
        "aria-label": i.nextAriaLabel,
        onClick: t[1] || (t[1] = (l) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Am = /* @__PURE__ */ x(wm, [["render", Lm]]), Mm = ["none", "soft", "strong"], zm = [
  "a[href]",
  "button",
  "input",
  "select",
  "textarea",
  "label",
  "summary",
  '[role="button"]',
  '[role="link"]',
  '[role="menu"]',
  '[role="menuitem"]',
  '[role="checkbox"]',
  '[role="switch"]',
  '[role="combobox"]',
  '[contenteditable="true"]',
  "[data-row-click-ignore]"
].join(","), Pm = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Mm.includes(e)
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    /**
     * Satır bir eylem taşır: odaklanabilir (`tabindex="0"`), Enter / Boşluk `click` yayar,
     * iç denetimlere (düğme, bağlantı, alan) yapılan tıklama satırı tetiklemez.
     */
    interactive: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    rootClass() {
      return A(
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
  },
  methods: {
    isFromInnerControl(e) {
      const t = e.target;
      if (!(t instanceof Element) || t === this.$el) return !1;
      const i = t.closest(zm);
      return !!(i && i !== this.$el && this.$el.contains(i));
    },
    onClick(e) {
      this.interactive && this.isFromInnerControl(e) || this.$emit("click", e);
    },
    siblingRows() {
      const e = this.$el.closest("table");
      return e ? Array.from(e.querySelectorAll("tr.ui-table-row--interactive")).filter(
        (t) => t.closest("table") === e
      ) : [this.$el];
    },
    onKeydown(e) {
      if (!this.interactive || e.target !== this.$el || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(), this.$emit("click", e);
        return;
      }
      const i = { ArrowDown: 1, ArrowUp: -1, Home: "first", End: "last" }[e.key];
      if (i === void 0) return;
      const n = this.siblingRows(), s = n.indexOf(this.$el);
      let r = s;
      i === "first" ? r = 0 : i === "last" ? r = n.length - 1 : r = Math.min(n.length - 1, Math.max(0, s + i)), e.preventDefault(), n[r] && n[r] !== this.$el && n[r].focus();
    }
  }
}, Em = ["tabindex"];
function Om(e, t, i, n, s, r) {
  return u(), c("tr", {
    class: k(r.rootClass),
    tabindex: i.interactive ? 0 : void 0,
    onClick: t[0] || (t[0] = (...o) => r.onClick && r.onClick(...o)),
    onKeydown: t[1] || (t[1] = (...o) => r.onKeydown && r.onKeydown(...o))
  }, [
    b(e.$slots, "default")
  ], 42, Em);
}
const Dm = /* @__PURE__ */ x(Pm, [["render", Om]]), Rm = {
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
      return A("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Nm = ["id", "aria-labelledby"];
function Fm(e, t, i, n, s, r) {
  return ni((u(), c("div", P({
    role: "tabpanel",
    id: r.panelDomId,
    "aria-labelledby": r.triggerDomId,
    class: r.panelClass
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Nm)), [
    [si, r.isActive]
  ]);
}
const Vm = /* @__PURE__ */ x(Rm, [["render", Fm]]), Rt = Symbol("uiThemeMode"), Bm = {
  name: "ThemeProvider",
  inheritAttrs: !1,
  inject: {
    parentDefaults: { from: ct, default: () => ut },
    parentMode: { from: Rt, default: null }
  },
  provide() {
    return {
      [ct]: this.providedDefaults,
      [Rt]: Nr(() => this.resolvedMode),
      [Hi]: () => this.$refs.portal || null
    };
  },
  props: {
    /** Kayıtlı tema id'si veya `defineTheme` paketi; verilmezse yalnızca mod / override uygulanır. */
    theme: { type: [String, Object], default: null },
    /** `light` | `dark` | `system` (cihaz ayarı); verilmezse üst provider veya belge kökü. */
    mode: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "light" || e === "dark" || e === "system"
    },
    /** Token override'ları — düz harita veya `{ light, dark }`. */
    overrides: { type: Object, default: null },
    /** Bileşen varsayılanı override'ları (`iconType`, `buttonRounded`, …). */
    defaults: { type: Object, default: null },
    /** Kökte `--background` dolgusu. */
    background: { type: Boolean, default: !1 },
    tag: { type: String, default: "div" }
  },
  data() {
    return {
      documentDark: !1,
      systemDark: !1,
      providedDefaults: nt({ ...ut })
    };
  },
  computed: {
    pkg() {
      return this.theme ? rt(this.theme) : null;
    },
    themeId() {
      var e;
      return ((e = this.pkg) == null ? void 0 : e.id) ?? null;
    },
    resolvedMode() {
      if (this.mode === "system") return this.systemDark ? "dark" : "light";
      if (this.mode) return this.mode;
      const e = Rr(this.parentMode);
      return e || (this.documentDark ? "dark" : "light");
    },
    cssVars() {
      return { ...this.pkg ? Xe(this.pkg, this.resolvedMode) : {}, ...$i(this.overrides, this.resolvedMode) };
    },
    mergedDefaults() {
      var e;
      return Bi({
        ...this.parentDefaults,
        ...(e = this.pkg) == null ? void 0 : e.defaults,
        ...this.defaults
      });
    },
    passthroughAttrs() {
      const { class: e, style: t, ...i } = this.$attrs;
      return i;
    }
  },
  watch: {
    mergedDefaults: {
      immediate: !0,
      handler(e) {
        Object.assign(this.providedDefaults, e);
      }
    }
  },
  mounted() {
    var t;
    if (this.mode === "system" && typeof window < "u" && typeof window.matchMedia == "function") {
      const i = window.matchMedia("(prefers-color-scheme: dark)");
      this.systemDark = i.matches;
      const n = (s) => {
        this.systemDark = s.matches;
      };
      (t = i.addEventListener) == null || t.call(i, "change", n), this.stopSystemWatch = () => {
        var s;
        return (s = i.removeEventListener) == null ? void 0 : s.call(i, "change", n);
      };
    }
    if (this.mode || this.parentMode || typeof document > "u") return;
    const e = document.documentElement;
    this.documentDark = e.classList.contains("dark"), this.modeObserver = new MutationObserver(() => {
      this.documentDark = e.classList.contains("dark");
    }), this.modeObserver.observe(e, { attributes: !0, attributeFilter: ["class"] });
  },
  beforeUnmount() {
    var e, t;
    (e = this.modeObserver) == null || e.disconnect(), (t = this.stopSystemWatch) == null || t.call(this);
  }
}, $m = {
  ref: "portal",
  class: "ui-theme-provider-portal"
};
function Hm(e, t, i, n, s, r) {
  return u(), v(le(i.tag), P({
    class: ["ui-theme-provider", [
      { dark: r.resolvedMode === "dark", "ui-theme-provider--background": i.background },
      e.$attrs.class
    ]],
    "data-ui-theme": r.themeId,
    "data-ui-mode": r.resolvedMode,
    "data-ui-density": r.mergedDefaults.density === "compact" ? "compact" : void 0,
    style: r.cssVars
  }, r.passthroughAttrs), {
    default: _(() => [
      f("div", $m, null, 512),
      b(e.$slots, "default", {
        mode: r.resolvedMode,
        theme: r.pkg
      })
    ]),
    _: 3
  }, 16, ["class", "data-ui-theme", "data-ui-mode", "data-ui-density", "style"]);
}
const Km = /* @__PURE__ */ x(Bm, [["render", Hm]]);
function he(e) {
  return String(e).padStart(2, "0");
}
function bi(e, t = "HH:mm") {
  const i = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
  if (!i) return String(e || "");
  const n = Number(i[1]), s = Number(i[2]);
  if (!Number.isFinite(n) || !Number.isFinite(s))
    return String(e || "");
  if (t === "HH:mm")
    return `${he(n)}:${he(s)}`;
  if (t === "h:mm a" || t === "h:mm A") {
    const r = n >= 12 ? "PM" : "AM";
    return `${n % 12 || 12}:${he(s)} ${r}`;
  }
  return `${he(n)}:${he(s)}`;
}
function Um(e, t, i = "HH:mm") {
  return bi(`${e}:${he(t)}`, i);
}
const Ym = G("ui-timepicker"), je = 40;
function Ze(e) {
  return String(e).padStart(2, "0");
}
const Gm = {
  name: "TimePicker",
  mixins: [Y, ue],
  inheritAttrs: !1,
  props: {
    /**
     * Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel;
     * `popover` her zaman panel; `dialog` her zaman dialog.
     */
    presentation: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "popover", "dialog"].includes(e)
    },
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
      fallbackId: Ym(),
      menuOpen: !1,
      draftHour: 0,
      draftMinute: 0,
      wheelSyncing: !1
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
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : M(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return M(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return M(this, "ui.timePicker.minuteAria", "Minute");
    },
    resolvedTimeFormat() {
      return Yt(this.uiDefaults, void 0, "timeFormat");
    },
    display() {
      return this.menuOpen ? Um(this.draftHour, this.draftMinute, this.resolvedTimeFormat) : this.hasValue ? bi(String(this.modelValue), this.resolvedTimeFormat) : this.resolvedPlaceholder;
    },
    supportsScrollEnd() {
      return typeof window > "u" ? !1 : "onscrollend" in window;
    }
  },
  watch: {
    menuOpen(e) {
      var t;
      if (e)
        this.returnFocusEl = Be(), this.applyModelToDraft(), this.$nextTick(() => {
          this.$nextTick(() => {
            var i, n, s;
            this.scrollWheelsToDraft(), this.bindWheelListeners(), (s = (n = (i = this.$refs.hourWheel) == null ? void 0 : i.closest('[role="spinbutton"]')) == null ? void 0 : n.focus) == null || s.call(n, { preventScroll: !0 });
          });
        });
      else {
        this.unbindWheelListeners();
        const i = document.activeElement, n = (t = this.$refs.hourWheel) == null ? void 0 : t.closest(".ui-timepicker-panel");
        (!i || i === document.body || n != null && n.contains(i)) && $e(this.returnFocusEl), this.returnFocusEl = null;
      }
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
    pad2: Ze,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, i = 0;
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (t = Math.min(23, Math.max(0, parseInt(n[1], 10))), i = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const s = this.minuteValues;
      let r = s[0] ?? 0, o = 999;
      for (const l of s) {
        const a = Math.abs(l - i);
        a < o && (o = a, r = l);
      }
      this.draftHour = t, this.draftMinute = r;
    },
    wheelItemHeight(e) {
      if (!e) return je;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return je;
      const i = t.offsetHeight || t.getBoundingClientRect().height;
      return i > 0 ? i : je;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), i = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - i) / 2;
      const n = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(n) ? n : (e.clientHeight - i) / 2;
    },
    indexFromScroll(e, t) {
      const i = this.wheelItemHeight(e), n = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, r = Math.round((s - n - i / 2) / i);
      return Math.min(t, Math.max(0, r));
    },
    scrollTopForIndex(e, t) {
      const i = this.wheelItemHeight(e), n = this.wheelSpacerTop(e);
      return Math.max(0, n + t * i + i / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: i = !1 } = {}) {
      if (!e) return;
      const n = this.scrollTopForIndex(e, t);
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
    /**
     * WAI-ARIA Spinbutton — ↑/↓ bir adım, PageUp/PageDown büyük adım (saat 6, dakika 4 adım),
     * Home/End en küçük / en büyük. Tekerlek de aynı değere kayar.
     */
    onSpinKeydown(e, t) {
      const i = t === "hour", n = i ? this.hourOptions.length : this.minuteValues.length;
      if (!n) return;
      const s = i ? this.draftHour : Math.max(0, this.minuteValues.indexOf(this.draftMinute)), r = i ? 6 : 4, o = { ArrowUp: s - 1, ArrowDown: s + 1, PageUp: s - r, PageDown: s + r, Home: 0, End: n - 1 };
      if (!(e.key in o)) return;
      e.preventDefault();
      const l = Math.min(n - 1, Math.max(0, o[e.key]));
      i ? this.selectHour(l) : this.selectMinute(l);
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
      const e = `${Ze(this.draftHour)}:${Ze(this.draftMinute)}`;
      e !== this.modelValue && (this.notifyFormDirty(), this.$emit("update:modelValue", e), this.$emit("change", e));
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
      const n = this.scrollTopForIndex(e, i);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, Wm = {
  key: 0,
  class: "ui-timepicker-panel w-full"
}, qm = { class: "ui-timepicker-wheels" }, jm = { class: "ui-timepicker-wheels-row" }, Zm = ["aria-valuetext", "aria-valuenow", "aria-label"], Xm = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, Qm = { class: "ui-timepicker-wheel-spacer" }, Jm = ["onClick"], ep = ["aria-valuetext", "aria-valuenow", "aria-label"], tp = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, ip = { class: "ui-timepicker-wheel-spacer" }, rp = ["onClick"], np = { class: "min-w-0 flex-1 truncate text-foreground" }, sp = { class: "ui-timepicker-panel w-full p-2" }, ap = { class: "ui-timepicker-wheels" }, lp = { class: "ui-timepicker-wheels-row" }, op = ["aria-valuetext", "aria-valuenow", "aria-label"], up = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, cp = { class: "ui-timepicker-wheel-spacer" }, dp = ["onClick"], hp = ["aria-valuetext", "aria-valuenow", "aria-label"], fp = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport",
  tabindex: "-1"
}, mp = { class: "ui-timepicker-wheel-spacer" }, pp = ["onClick"];
function gp(e, t, i, n, s, r) {
  const o = y("ui-button"), l = y("ui-popover");
  return u(), c("div", {
    class: k([
      "ui-timepicker",
      i.embedded ? "ui-timepicker--embedded" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (u(), c("div", Wm, [
      f("div", qm, [
        t[6] || (t[6] = f("div", {
          class: "ui-timepicker-selection-band",
          "aria-hidden": "true"
        }, null, -1)),
        f("div", jm, [
          f("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            tabindex: "0",
            "data-ui-spin": "hour",
            "aria-valuetext": r.pad2(s.draftHour),
            onKeydown: t[0] || (t[0] = (a) => r.onSpinKeydown(a, "hour")),
            "aria-valuenow": s.draftHour,
            "aria-valuemin": "0",
            "aria-valuemax": "23",
            "aria-label": r.hourAriaLabel
          }, [
            f("div", Xm, [
              f("div", Qm, [
                (u(!0), c(S, null, L(r.hourOptions, (a) => (u(), c("button", {
                  key: "h-" + a,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    a === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (d) => r.selectHour(a)
                }, p(r.pad2(a)), 11, Jm))), 128))
              ])
            ], 512)
          ], 40, Zm),
          t[5] || (t[5] = f("span", {
            class: "ui-timepicker-colon",
            "aria-hidden": "true"
          }, ":", -1)),
          f("div", {
            class: "min-h-0 min-w-0 flex-1",
            role: "spinbutton",
            tabindex: "0",
            "data-ui-spin": "minute",
            "aria-valuetext": r.pad2(s.draftMinute),
            onKeydown: t[1] || (t[1] = (a) => r.onSpinKeydown(a, "minute")),
            "aria-valuenow": s.draftMinute,
            "aria-valuemin": "0",
            "aria-valuemax": "59",
            "aria-label": r.minuteAriaLabel
          }, [
            f("div", tp, [
              f("div", ip, [
                (u(!0), c(S, null, L(r.minuteValues, (a, d) => (u(), c("button", {
                  key: "m-" + a,
                  type: "button",
                  tabindex: "-1",
                  class: k([
                    "ui-timepicker-wheel-item",
                    a === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                  ]),
                  onClick: (h) => r.selectMinute(d)
                }, p(r.pad2(a)), 11, rp))), 128))
              ])
            ], 512)
          ], 40, ep)
        ]),
        t[7] || (t[7] = f("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
          "aria-hidden": "true"
        }, null, -1)),
        t[8] || (t[8] = f("div", {
          class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
          "aria-hidden": "true"
        }, null, -1))
      ])
    ])) : (u(), v(l, {
      key: 1,
      presentation: i.presentation,
      open: s.menuOpen,
      "onUpdate:open": t[4] || (t[4] = (a) => s.menuOpen = a),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: i.disabled
    }, {
      trigger: _(({ open: a, toggle: d, close: h }) => [
        b(e.$slots, "trigger", {
          open: a,
          toggle: d,
          close: h
        }, () => [
          w(o, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            block: "",
            "text-align": "left",
            "prefix-icon": "clock",
            disabled: i.disabled,
            "aria-expanded": a ? "true" : "false",
            "aria-haspopup": !0,
            onClick: d
          }, {
            default: _(() => [
              f("span", np, p(r.display), 1)
            ]),
            _: 1
          }, 8, ["id", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: _(() => [
        f("div", sp, [
          f("div", ap, [
            t[10] || (t[10] = f("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            f("div", lp, [
              f("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                tabindex: "0",
                "data-ui-spin": "hour",
                "aria-valuetext": r.pad2(s.draftHour),
                onKeydown: t[2] || (t[2] = (a) => r.onSpinKeydown(a, "hour")),
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": r.hourAriaLabel
              }, [
                f("div", up, [
                  f("div", cp, [
                    (u(!0), c(S, null, L(r.hourOptions, (a) => (u(), c("button", {
                      key: "h-" + a,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        a === s.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (d) => r.selectHour(a)
                    }, p(r.pad2(a)), 11, dp))), 128))
                  ])
                ], 512)
              ], 40, op),
              t[9] || (t[9] = f("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              f("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                tabindex: "0",
                "data-ui-spin": "minute",
                "aria-valuetext": r.pad2(s.draftMinute),
                onKeydown: t[3] || (t[3] = (a) => r.onSpinKeydown(a, "minute")),
                "aria-valuenow": s.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": r.minuteAriaLabel
              }, [
                f("div", fp, [
                  f("div", mp, [
                    (u(!0), c(S, null, L(r.minuteValues, (a, d) => (u(), c("button", {
                      key: "m-" + a,
                      type: "button",
                      tabindex: "-1",
                      class: k([
                        "ui-timepicker-wheel-item",
                        a === s.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => r.selectMinute(d)
                    }, p(r.pad2(a)), 11, pp))), 128))
                  ])
                ], 512)
              ], 40, hp)
            ]),
            t[11] || (t[11] = f("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[12] || (t[12] = f("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
              "aria-hidden": "true"
            }, null, -1))
          ])
        ])
      ]),
      _: 3
    }, 8, ["presentation", "open", "width", "disabled"]))
  ], 2);
}
const bp = /* @__PURE__ */ x(Gm, [["render", gp]]), yp = ["horizontal", "vertical"], vp = {
  name: "Toolbar",
  inheritAttrs: !1,
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => yp.includes(e)
    },
    /** Yatay düzende sığmayan öğeler alt satıra kayar */
    wrap: {
      type: Boolean,
      default: !0
    },
    /** Verilirse `role="toolbar"` ile erişilebilir ad */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return A(
        "ui-toolbar",
        `ui-toolbar--${this.direction}`,
        this.wrap && this.direction === "horizontal" ? "ui-toolbar--wrap" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, _p = ["role", "aria-label"], kp = {
  key: 0,
  class: "ui-toolbar-start"
}, xp = {
  key: 1,
  class: "ui-toolbar-main"
}, wp = {
  key: 2,
  class: "ui-toolbar-end"
};
function Sp(e, t, i, n, s, r) {
  return u(), c("div", P({
    class: r.rootClass,
    role: i.ariaLabel ? "toolbar" : void 0,
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    e.$slots.start ? (u(), c("div", kp, [
      b(e.$slots, "start")
    ])) : m("", !0),
    e.$slots.default ? (u(), c("div", xp, [
      b(e.$slots, "default")
    ])) : m("", !0),
    e.$slots.end ? (u(), c("div", wp, [
      b(e.$slots, "end")
    ])) : m("", !0)
  ], 16, _p);
}
const Cp = /* @__PURE__ */ x(vp, [["render", Sp]]), Tp = 12;
function ze(e, t, i, n = 1) {
  const { l: s, c: r, h: o } = qi(e, t, i), l = o * Math.PI / 180;
  return { L: s, a: r * Math.cos(l), b: r * Math.sin(l), alpha: n };
}
function Ip(e) {
  const t = Math.hypot(e.a, e.b), i = (Math.atan2(e.b, e.a) * 180 / Math.PI + 360) % 360, [n, s, r] = Wi(e.L, t, i).map((a) => Math.min(255, Math.max(0, Math.round(a)))), o = (a) => a.toString(16).padStart(2, "0"), l = Math.min(1, Math.max(0, e.alpha));
  return `#${o(n)}${o(s)}${o(r)}${l < 0.999 ? o(Math.round(l * 255)) : ""}`;
}
function tt(e, t = ",") {
  const i = [];
  let n = 0, s = "";
  for (const r of e)
    r === "(" && (n += 1), r === ")" && (n -= 1), r === t && n === 0 ? (i.push(s.trim()), s = "") : s += r;
  return s.trim() && i.push(s.trim()), i;
}
function Lp(e, t, i = 0) {
  if (i > Tp) return null;
  let n = String(e);
  for (let s = 0; s < 40 && n.includes("var("); s += 1) {
    const r = n.indexOf("var(");
    let o = 0, l = -1;
    for (let g = r + 3; g < n.length; g += 1)
      if (n[g] === "(" && (o += 1), n[g] === ")" && (o -= 1, o === 0)) {
        l = g;
        break;
      }
    if (l === -1) return null;
    const [a, ...d] = tt(n.slice(r + 4, l)), h = t[a] ?? (d.length ? d.join(", ") : null);
    if (h == null) return null;
    n = n.slice(0, r) + h + n.slice(l + 1);
  }
  return n.includes("var(") ? null : n;
}
function Nt(e) {
  const t = /^(-?[0-9.]+)%$/.exec(String(e).trim());
  return t ? Number.parseFloat(t[1]) / 100 : null;
}
function yi(e) {
  var r;
  const t = String(e || "").trim();
  if (!t) return null;
  if (t === "transparent") return { L: 0, a: 0, b: 0, alpha: 0 };
  if (t === "white") return ze(255, 255, 255);
  if (t === "black") return ze(0, 0, 0);
  const i = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(t);
  if (i) {
    let o = i[1];
    o.length <= 4 && (o = [...o].map((h) => h + h).join(""));
    const [l, a, d] = [0, 2, 4].map((h) => parseInt(o.slice(h, h + 2), 16));
    return ze(l, a, d, o.length === 8 ? parseInt(o.slice(6, 8), 16) / 255 : 1);
  }
  if (/^oklch\(/i.test(t) && !/^oklch\(\s*from/i.test(t)) {
    const o = Gi(t);
    if (!o) return null;
    const l = (r = /\/\s*([0-9.]+%?)\s*\)$/.exec(t)) == null ? void 0 : r[1], a = l ? l.endsWith("%") ? Number.parseFloat(l) / 100 : Number.parseFloat(l) : 1, d = o.h * Math.PI / 180;
    return { L: o.l, a: o.c * Math.cos(d), b: o.c * Math.sin(d), alpha: a };
  }
  const n = /^rgba?\(\s*([0-9.]+)[\s,]+([0-9.]+)[\s,]+([0-9.]+)\s*(?:[/,]\s*([0-9.]+%?))?\s*\)$/i.exec(t);
  if (n) {
    const o = n[4] ? n[4].endsWith("%") ? Number.parseFloat(n[4]) / 100 : Number.parseFloat(n[4]) : 1;
    return ze(Number(n[1]), Number(n[2]), Number(n[3]), o);
  }
  const s = /^color-mix\(\s*in\s+(oklab|srgb)\s*,([\s\S]*)\)$/i.exec(t);
  if (s) {
    const o = tt(s[2]);
    if (o.length !== 2) return null;
    const l = o.map((O) => {
      const N = tt(O, " "), j = N.findIndex((me) => Nt(me) != null), Ke = j === -1 ? null : Nt(N[j]), Te = N.filter((me, Ue) => Ue !== j).join(" ");
      return { color: yi(Te), weight: Ke };
    });
    if (l.some((O) => !O.color)) return null;
    let [a, d] = l.map((O) => O.weight);
    a == null && d == null ? a = d = 0.5 : a == null ? a = 1 - d : d == null && (d = 1 - a);
    const h = a + d;
    if (!(h > 0)) return null;
    const [g, C] = [a / h, d / h], [T, D] = l.map((O) => O.color), V = T.alpha * g + D.alpha * C;
    if (V <= 0) return { L: 0, a: 0, b: 0, alpha: 0 };
    const R = (O) => (T[O] * T.alpha * g + D[O] * D.alpha * C) / V;
    return { L: R("L"), a: R("a"), b: R("b"), alpha: V * Math.min(1, h) };
  }
  return null;
}
function Ap(e, t) {
  const i = Lp(e, t);
  if (i == null) return null;
  const n = yi(i);
  return n ? Ip(n) : null;
}
const Mp = /^var\(\s*(--base-(\d+)|--chart-(\d+)|--white)\s*\)$/;
function zp(e) {
  const t = Mp.exec(String(e).trim());
  return t ? t[2] ? `{primitive.color.base.${t[2]}}` : t[3] ? `{primitive.color.chart.${t[3]}}` : "{primitive.color.white}" : null;
}
function ke(e, t, i, { alias: n = !0, primitives: s = i } = {}) {
  var d;
  const r = Ap(t, i);
  if (!r) return null;
  const o = (d = /^var\(\s*(--[a-z0-9-]+)\s*\)$/.exec(String(t).trim())) == null ? void 0 : d[1], l = o ? i[o] === s[o] : !1, a = n && l ? zp(t) : null;
  return {
    $type: "color",
    $value: a ?? r,
    $extensions: { "com.fewui": { cssVar: e, css: String(t), ...a ? { resolved: r } : {} } }
  };
}
function Pp(e) {
  return e.replace(/^--(ui-)?/, "").replace(/-([a-z0-9])/g, (t, i) => i.toUpperCase());
}
const vi = [
  ...Ki.colors.filter((e) => e !== "white"),
  ...Ui.flatMap((e) => [e, `${e}Foreground`]),
  "chart",
  "chartForeground",
  ...Array.from({ length: Yi }, (e, t) => `chartSeries${t + 1}`)
], _i = Object.keys(Qe).filter(
  (e) => /^--(ui-hover|ui-focus-ring|ui-selected-fg|primary-soft|primary-soft-hover|primary-ink|warning-ink|success-ink|info-ink|danger-ink|surface-bg|control-bg|popover-bg|input-background)$/.test(e)
), Bp = {
  primitive: [
    ...ei.map((e) => `--base-${e}`),
    ...ti.map((e) => `--chart-${e}`),
    "--white",
    "--font-sans",
    "--font-heading",
    "--radius"
  ],
  semantic: vi.map(Jt),
  component: [
    ..._i,
    "--radius-sm",
    "--radius-md",
    "--ui-control-h-sm",
    "--ui-control-h-md",
    "--ui-control-h-lg"
  ]
};
function Ft(e, t) {
  const i = {};
  for (const s of vi) {
    const r = Jt(s);
    if (!(r in e)) continue;
    const o = ke(r, e[r], e, { primitives: t });
    o && (i[s] = o);
  }
  const n = {};
  for (const s of _i) {
    if (!(s in e)) continue;
    const r = ke(s, e[s], e, { alias: !1 });
    r && (n[Pp(s)] = r);
  }
  return { semantic: i, component: n };
}
function Vt(e, t) {
  return { $type: "fontFamily", $value: String(t || "").split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean), $extensions: { "com.fewui": { cssVar: e } } };
}
function de(e, t, i) {
  return { $type: "dimension", $value: t, $extensions: { "com.fewui": { cssVar: e, ...i ? { css: i } : {} } } };
}
function $p(e) {
  const t = rt(e), i = Xe(t, "light"), n = Xe(t, "dark"), s = {};
  for (const g of ei) {
    const C = ke(`--base-${g}`, i[`--base-${g}`] ?? "", i, { alias: !1 });
    C && (s[g] = C);
  }
  const r = {};
  for (const g of ti) {
    const C = ke(`--chart-${g}`, i[`--chart-${g}`] ?? "", i, { alias: !1 });
    C && (r[g] = C);
  }
  const o = ke("--white", i["--white"] ?? "", i, { alias: !1 }), l = Number.parseFloat(i["--radius"]), a = /px\s*$/.test(String(i["--radius"] || "")) && Number.isFinite(l), d = Ft(i, i), h = Ft(n, i);
  return {
    $description: `fewui theme "${t.id}" — W3C Design Tokens (DTCG). Generated from preset.js; do not edit.`,
    $extensions: {
      "com.fewui": {
        theme: t.id,
        label: t.label ?? t.id,
        modes: ["light", "dark"],
        layers: ["primitive", "semantic", "component"]
      }
    },
    primitive: {
      color: { base: s, ...Object.keys(r).length ? { chart: r } : {}, ...o ? { white: o } : {} },
      font: {
        ...i["--font-sans"] ? { body: Vt("--font-sans", i["--font-sans"]) } : {},
        ...i["--font-heading"] && !/^var\(/.test(i["--font-heading"]) ? { heading: Vt("--font-heading", i["--font-heading"]) } : {}
      },
      ...i["--radius"] ? { radius: { base: de("--radius", String(i["--radius"])) } } : {}
    },
    semantic: { light: d.semantic, dark: h.semantic },
    component: {
      light: d.component,
      dark: h.component,
      size: {
        ...a ? {
          radiusSm: de("--radius-sm", `${Math.max(l - 4, 0)}px`, Qe["--radius-sm"]),
          radiusMd: de("--radius-md", `${Math.max(l - 2, 0)}px`, Qe["--radius-md"])
        } : {},
        // `_shared/global.css`: `--spacing` (0.25rem = 4px) × 7 / 8 / 9.
        controlHeightSm: de("--ui-control-h-sm", "28px", "calc(var(--spacing) * 7)"),
        controlHeightMd: de("--ui-control-h-md", "32px", "calc(var(--spacing) * 8)"),
        controlHeightLg: de("--ui-control-h-lg", "36px", "calc(var(--spacing) * 9)")
      }
    }
  };
}
function Pe(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Hp() {
  return {
    push: ge,
    dismiss: Zi,
    clear: ji,
    info: (e) => ge({ ...Pe(e), color: "info" }),
    success: (e) => ge({ ...Pe(e), color: "success" }),
    warning: (e) => ge({ ...Pe(e), color: "warning" }),
    danger: (e) => ge({ ...Pe(e), color: "danger" })
  };
}
function Kp(e = !1) {
  return nt({
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
function Up() {
  return {
    confirm: Xi
  };
}
const Re = {
  en: er,
  tr: Ji
};
function Yp(e = "en") {
  return Re[e] ?? Re.en;
}
const Ep = [
  ["ui-accordion", Hr],
  ["ui-accordion-item", nn],
  ["ui-action-card", hn],
  ["ui-action-card-list", gn],
  ["ui-action-group", tr],
  ["ui-ai-button", kn],
  ["ui-alert", ir],
  ["ui-avatar", rr],
  ["ui-avatar-group", In],
  ["ui-badge", nr],
  ["ui-breadcrumb", Gn],
  ["ui-breadcrumb-item", li],
  ["ui-button", Zt],
  ["ui-card", sr],
  ["ui-chart", ea],
  ["ui-checkbox", ua],
  ["ui-checkbox-group", ga],
  ["ui-chip-group", ka],
  ["ui-collapsible", La],
  ["ui-color-picker", Ua],
  ["ui-command", ul],
  ["ui-confirm-dialog", ar],
  ["ui-context-menu", ml],
  ["ui-currency-input", mi],
  ["ui-date-picker", lr],
  ["ui-date-range-picker", Hl],
  ["ui-dialog", Kt],
  ["ui-divider", Xt],
  ["ui-dropdown", Bt],
  ["ui-empty", Ht],
  ["ui-field", jl],
  ["ui-field-action", oo],
  ["ui-file", ko],
  ["ui-filter-chip", To],
  ["ui-form-row", or],
  ["ui-guidance", eu],
  ["ui-hover-card", nu],
  ["ui-icon", ur],
  ["ui-icon-picker", yu],
  ["ui-icon-tile", cr],
  ["ui-input", dr],
  ["ui-intro", Eu],
  ["ui-kbd", Fu],
  ["ui-list", hr],
  ["ui-list-item", fr],
  ["ui-list-group", mr],
  ["ui-number-stepper", Ku],
  ["ui-title-menu", Zu],
  ["ui-menu", nc],
  ["ui-menu-group", mc],
  ["ui-menu-item", yc],
  ["ui-menu-nav", xc],
  ["ui-menubar", uc],
  ["ui-pagination", Pc],
  ["ui-password", Bc],
  ["ui-phone", pr],
  ["ui-photo", ed],
  ["ui-photos", cd],
  ["ui-pin", gr],
  ["ui-popover", Ve],
  ["ui-price-display", kd],
  ["ui-price-display-group", Cd],
  ["ui-price-display-row", zd],
  ["ui-price-input", Fd],
  ["ui-price-text", st],
  ["ui-progress", jd],
  ["ui-radio", br],
  ["ui-radio-group", yr],
  ["ui-resizable-group", th],
  ["ui-resizable-handle", ah],
  ["ui-resizable-panel", dh],
  ["ui-scroll-area", bh],
  ["ui-section", wh],
  ["ui-segment", vr],
  ["ui-segment-group", _r],
  ["ui-select", kr],
  ["ui-selection-indicator", Th],
  ["ui-sheet", Bh],
  ["ui-sidebar-item", Jh],
  ["ui-skeleton", $t],
  ["ui-slider", pf],
  ["ui-stat", Tf],
  ["ui-stat-group", Pf],
  ["ui-step", Rf],
  ["ui-stepper", tm],
  ["ui-switch", xr],
  ["ui-tab-list", wr],
  ["ui-tab-panel", Vm],
  ["ui-tab-trigger", Sr],
  ["ui-table", nm],
  ["ui-table-body", om],
  ["ui-table-cell", mm],
  ["ui-table-head", vm],
  ["ui-table-header", xm],
  ["ui-table-pagination", Am],
  ["ui-table-row", Dm],
  ["ui-tabs", Cr],
  ["ui-tag", Tr],
  ["ui-theme-provider", Km],
  ["ui-time-picker", bp],
  ["ui-toast", Ir],
  ["ui-toolbar", Cp],
  ["ui-tooltip", jt]
];
let Ee = null;
function Op(e, t = {}) {
  const i = rt(e);
  if (Lr(i.id) || Ar(i), Mr(i, t), Ee && (zr(Ee, { ...i.defaults, ...t.defaults }), typeof document < "u")) {
    const n = typeof t.root == "string" ? document.querySelector(t.root) : t.root;
    Pr(n || document.documentElement, Ee.density);
  }
  return i;
}
function Dp(e, t = {}) {
  var g, C, T, D, V;
  const { i18n: i, locale: n, locales: s, theme: r, mode: o, overrides: l, inline: a, defaults: d, priceInput: h } = t;
  if (Ee = Qi(e, d), r && Op(r, { mode: o, overrides: l, inline: a, defaults: d }), h && Od(h), (g = i == null ? void 0 : i.global) != null && g.mergeLocaleMessage) {
    const R = s ?? (n != null ? [n] : [
      typeof i.global.locale == "string" ? i.global.locale : ((C = i.global.locale) == null ? void 0 : C.value) ?? "en"
    ]);
    for (const O of R) {
      const N = Re[O];
      if (N) {
        i.global.mergeLocaleMessage(O, N);
        continue;
      }
      (V = (D = (T = i.global).getLocaleMessage) == null ? void 0 : D.call(T, O)) != null && V.ui || i.global.mergeLocaleMessage(O, Re.en);
    }
  }
  for (const [R, O] of Ep)
    e.component(R, O);
}
const Gp = {
  install: Dp
};
export {
  Hr as Accordion,
  nn as AccordionItem,
  hn as ActionCard,
  gn as ActionCardList,
  tr as ActionGroup,
  kn as AiButton,
  ir as Alert,
  rr as Avatar,
  In as AvatarGroup,
  jp as BACKDROP_BLUR_SCALE,
  ut as BASE_UI_DEFAULTS,
  nr as Badge,
  Gn as Breadcrumb,
  li as BreadcrumbItem,
  Zt as Button,
  Zp as CARD_PADDING_SCALE,
  U as CONTROL_SIZES,
  sr as Card,
  ea as Chart,
  ua as Checkbox,
  ga as CheckboxGroup,
  ka as ChipGroup,
  La as Collapsible,
  Ua as ColorPicker,
  ul as Command,
  ar as ConfirmDialog,
  ml as ContextMenu,
  mi as CurrencyInput,
  Xp as DEFAULT_THEME_ID,
  Qe as DERIVED_VARS,
  lr as DatePicker,
  Hl as DateRangePicker,
  Kt as Dialog,
  Xt as Divider,
  Bt as Dropdown,
  Ht as Empty,
  Qp as FEW_COLOR_SCALE,
  Jp as FEW_PALETTE_ID,
  eg as FEW_PRIMARY,
  tg as FEW_PRIMARY_FOREGROUND,
  jl as Field,
  oo as FieldAction,
  ko as File,
  To as FilterChip,
  or as FormRow,
  ig as GOOGLE_FONTS_CATALOG,
  eu as Guidance,
  nu as HoverCard,
  ur as Icon,
  yu as IconPicker,
  cr as IconTile,
  dr as Input,
  Eu as Intro,
  Fu as Kbd,
  hr as List,
  mr as ListGroup,
  fr as ListItem,
  rg as MIX_FROM_MAP,
  nc as Menu,
  mc as MenuGroup,
  yc as MenuItem,
  xc as MenuNav,
  uc as Menubar,
  Ku as NumberStepper,
  Pd as PRICE_FORMATS,
  Pc as Pagination,
  Bc as Password,
  pr as Phone,
  ed as Photo,
  cd as Photos,
  gr as Pin,
  Ve as Popover,
  kd as PriceDisplay,
  Cd as PriceDisplayGroup,
  zd as PriceDisplayRow,
  Fd as PriceInput,
  st as PriceText,
  jd as Progress,
  br as Radio,
  yr as RadioGroup,
  th as ResizableGroup,
  ah as ResizableHandle,
  dh as ResizablePanel,
  xi as SCALE_SIZES,
  ng as SIZE_SCALE,
  Ui as STATUS_TONES,
  bh as ScrollArea,
  wh as Section,
  vr as Segment,
  _r as SegmentGroup,
  kr as Select,
  Th as SelectionIndicator,
  Bh as Sheet,
  Jh as SidebarItem,
  $t as Skeleton,
  pf as Slider,
  Tf as Stat,
  Pf as StatGroup,
  Rf as Step,
  tm as Stepper,
  xr as Switch,
  sg as THEME_CUSTOM_CSS_ID,
  ag as TOAST_GROUP_WINDOW_MS,
  Ki as TOKEN_GROUPS,
  Bp as TOKEN_LAYERS,
  wr as TabList,
  Vm as TabPanel,
  Sr as TabTrigger,
  nm as Table,
  om as TableBody,
  mm as TableCell,
  vm as TableHead,
  xm as TableHeader,
  Am as TablePagination,
  Dm as TableRow,
  Cr as Tabs,
  Tr as Tag,
  Km as ThemeProvider,
  bp as TimePicker,
  Zu as TitleMenu,
  Ir as Toast,
  Cp as Toolbar,
  jt as Tooltip,
  ct as UI_DEFAULTS_KEY,
  lg as UI_DENSITIES,
  og as UI_FORM_DIRTY_KEY,
  ug as UI_FORM_ERRORS_KEY,
  cg as UI_ICON_TYPES,
  dg as UI_KEYBOARD_INSET_EVENT,
  Hi as UI_PORTAL_KEY,
  hg as UI_THEME_MODE_EVENT,
  fg as UI_THEME_TRANSITION_CLASS,
  mg as applyGoogleFontsCatalogPreview,
  pg as applyGoogleFontsForTheme,
  gg as applyThemeCustomCss,
  Pr as applyUiDensity,
  Mr as applyUiTheme,
  bg as buildGoogleFontsLinkTag,
  yg as buildGoogleFontsStylesheetUrl,
  vg as buildThemeCss,
  _g as buildThemeEnforcementCss,
  kg as buildThemeModeScript,
  xg as buildThemeStyleAttr,
  wg as clearThemeCustomCss,
  ji as clearToasts,
  Sg as clearUiTheme,
  Cg as colorToHex,
  Tg as colorToRgb,
  Ig as computeThemeVars,
  Lg as contrastRatio,
  Ag as createFormErrorsContext,
  Mg as createUiId,
  G as createUiIdFactory,
  Gp as default,
  zg as defineTheme,
  Pg as deriveBrandColorsFromPrimary,
  Zi as dismissToast,
  Eg as ensureContrastForMode,
  Og as ensureLabelContrast,
  Dg as expandTokens,
  Rg as extendTheme,
  ue as formDirtyMixin,
  Vp as formatCurrencyAmount,
  Ng as formatFontFamily,
  Fg as formatGoogleFontFamilyName,
  gl as formatMoneyInput,
  di as getCurrencySymbol,
  Vg as getFewPrimaryColors,
  fi as getMoneySeparators,
  Dd as getPriceInputConfig,
  Bg as getThemeCssPath,
  Lr as getThemePackage,
  Yp as getUiMessages,
  $g as getUiThemeMode,
  Hg as googleFontSelectOptions,
  Kg as hexToOklchString,
  fe as iconTypeProp,
  Ug as isThemePackage,
  Yg as listThemes,
  Gg as mergeTokens,
  Bi as mergeUiDefaults,
  Wi as oklchToRgb,
  Wg as onVisibleViewportChange,
  qg as parseHex,
  pl as parseLocalizedMoneyInput,
  Gi as parseOklch,
  jg as parseOklchLightness,
  Zg as pickContrastForeground,
  qt as pickPassthroughAttrs,
  Qi as provideUiDefaults,
  ge as pushToast,
  Xg as readKeyboardInset,
  Ar as registerTheme,
  Qg as relativeLuminance,
  Xi as requestConfirm,
  Jg as resetUiIds,
  eb as resolveControlSize,
  Ap as resolveCssColorToHex,
  He as resolveCurrencyCode,
  tb as resolveSystemMode,
  rt as resolveTheme,
  it as resolveThemeControlSize,
  Yt as resolveThemeDefault,
  ib as resolveThemeFontFamilies,
  xe as resolveThemeIconType,
  Xe as resolveThemeVars,
  M as resolveUiText,
  rb as resolveUiThemeMode,
  qi as rgbToOklch,
  hi as sanitizeMoneyInput,
  Od as setPriceInputConfig,
  nb as setToastExpanded,
  zr as setUiDefaults,
  sb as setUiFeedbackHandler,
  Op as setUiTheme,
  ab as setUiThemeMode,
  lb as themeConfigToTokens,
  Ne as themeIconTypeComputed,
  $p as themeToDesignTokens,
  Jt as toCssVarName,
  ob as toggleToastExpanded,
  Y as uiDefaultsMixin,
  Si as uiFeedback,
  Pi as uiPortalMixin,
  Up as useConfirm,
  Kp as useDialog,
  Hp as useToast,
  ub as useUiDefaults,
  cb as visibleViewportBottom,
  db as withDerivedBrandTokens,
  hb as withDerivedConfigBrandColors
};
//# sourceMappingURL=index.js.map
