import { openBlock as l, createElementBlock as o, mergeProps as I, renderSlot as m, resolveComponent as v, normalizeClass as b, createVNode as g, createCommentVNode as h, createElementVNode as f, toDisplayString as k, createBlock as _, Teleport as Q, Transition as K, withCtx as x, normalizeStyle as q, createTextVNode as O, Fragment as $, withModifiers as D, renderList as W, withDirectives as G, vShow as Ne, withKeys as U, createSlots as Me, vModelText as se, normalizeProps as Je, guardReactiveProps as et, useSlots as tt, computed as M, ref as R, onMounted as it, watch as nt, nextTick as ae, reactive as rt, TransitionGroup as st } from "vue";
import { RouterLink as at } from "vue-router";
const w = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, a] of t)
    i[r] = a;
  return i;
};
function T(...e) {
  const t = [];
  for (const i of e)
    if (i) {
      if (typeof i == "string") {
        t.push(i);
        continue;
      }
      if (typeof i == "object")
        for (const [r, a] of Object.entries(i))
          a && t.push(r);
    }
  return t.join(" ");
}
const lt = ["horizontal", "vertical"], ot = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => lt.includes(e)
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     */
    joined: {
      type: Boolean,
      default: !1
    },
    /** Yatayda doğrudan çocuklara `flex-1 min-w-0` (toolbar’da eşit pay) */
    grow: {
      type: Boolean,
      default: !1
    },
    /** `role="group"` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return T(
        "ui-action-group",
        `ui-action-group--${this.orientation}`,
        this.joined && "ui-action-group--joined",
        this.grow && "ui-action-group--grow",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ut = ["aria-label"];
function dt(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, ut);
}
const fs = /* @__PURE__ */ w(ot, [["render", dt]]), ct = ["info", "success", "warning", "error"], le = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, oe = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, ft = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => ct.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan ikon yerine `circle-info` vb. */
    icon: {
      type: String,
      default: null
    },
    /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dismiss"],
  computed: {
    alertRole() {
      return this.variant === "error" || this.variant === "warning" ? "alert" : "status";
    },
    resolvedIcon() {
      return this.icon || le[this.variant] || le.info;
    },
    iconToneClass() {
      return oe[this.variant] || oe.info;
    },
    rootClasses() {
      return T(`ui-alert ui-alert--${this.variant}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    onDismiss() {
      this.$emit("dismiss");
    }
  }
}, ht = ["role"], mt = { class: "ui-alert-body" }, pt = {
  key: 0,
  class: "ui-alert-title"
}, gt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, bt = {
  key: 2,
  class: "ui-alert-slot"
};
function yt(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("ui-button");
  return l(), o("div", I({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), o("span", {
      key: 0,
      class: b(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        g(s, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : h("", !0),
    f("div", mt, [
      i.title ? (l(), o("p", pt, k(i.title), 1)) : h("", !0),
      i.description ? (l(), o("p", gt, k(i.description), 1)) : h("", !0),
      e.$slots.default ? (l(), o("div", bt, [
        m(e.$slots, "default")
      ])) : h("", !0)
    ]),
    i.dismissible ? (l(), _(u, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": n.dismissLabel,
      onClick: n.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : h("", !0)
  ], 16, ht);
}
const hs = /* @__PURE__ */ w(ft, [["render", yt]]);
let vt = 0;
const kt = ["top", "bottom", "left", "right"], F = 8, St = {
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    /** Boşsa yalnızca `content` slot’u kullanılabilir */
    label: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "top",
      validator: (e) => kt.includes(e)
    },
    /** Gecikme (ms) */
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      open: !1,
      panelStyle: {},
      tooltipId: `ui-tooltip-${++vt}`,
      showTimer: null,
      hideTimer: null
    };
  },
  computed: {
    hasContent() {
      return !!(this.label || this.$slots.content);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("keydown", this.onDocumentKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("keydown", this.onDocumentKeydown), this.clearTimers();
  },
  methods: {
    clearTimers() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
    },
    scheduleShow() {
      if (this.disabled || !this.hasContent) return;
      this.clearTimers();
      const e = () => {
        this.open = !0, this.$nextTick(() => this.updatePosition());
      };
      this.showDelay > 0 ? this.showTimer = setTimeout(e, this.showDelay) : e();
    },
    scheduleHide() {
      this.clearTimers();
      const e = () => {
        this.open = !1;
      };
      this.hideDelay > 0 ? this.hideTimer = setTimeout(e, this.hideDelay) : e();
    },
    onEnter() {
      this.scheduleShow();
    },
    onLeave() {
      this.scheduleHide();
    },
    onFocusIn() {
      this.scheduleShow();
    },
    onFocusOut(e) {
      const t = this.$refs.wrapperRef;
      t && e.relatedTarget && t.contains(e.relatedTarget) || this.scheduleHide();
    },
    onScrollResize() {
      this.open && this.updatePosition();
    },
    onDocumentKeydown(e) {
      e.key === "Escape" && this.open && (this.open = !1, this.clearTimers());
    },
    updatePosition() {
      const e = this.$refs.wrapperRef;
      if (!e) return;
      const t = e.getBoundingClientRect(), i = F, r = t.left + t.width / 2, a = t.top + t.height / 2;
      let n = this.placement, s = {};
      switch (n) {
        case "bottom":
          s = {
            left: `${r}px`,
            top: `${t.bottom + i}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          s = {
            left: `${t.left - i}px`,
            top: `${a}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          s = {
            left: `${t.right + i}px`,
            top: `${a}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          s = {
            left: `${r}px`,
            top: `${t.top - i}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = s, this.$nextTick(() => {
        this.clampToViewport(t, n, i);
      });
    },
    clampToViewport(e, t, i) {
      const r = this.$refs.panelRef;
      if (!r) return;
      const a = window.innerWidth, n = window.innerHeight;
      let s = r.getBoundingClientRect();
      t === "top" && s.top < F ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, s = r.getBoundingClientRect()) : t === "bottom" && s.bottom > n - F && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, s = r.getBoundingClientRect());
      let u = 0, d = 0;
      if (s.left < F ? u = F - s.left : s.right > a - F && (u = a - F - s.right), s.top < F ? d = F - s.top : s.bottom > n - F && (d = n - F - s.bottom), u === 0 && d === 0) return;
      const c = parseFloat(this.panelStyle.left), p = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(p) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + u}px`,
        top: `${p + d}px`
      });
    }
  }
}, xt = ["id"], wt = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function _t(e, t, i, r, a, n) {
  return l(), o("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...s) => n.onEnter && n.onEnter(...s)),
    onMouseleave: t[1] || (t[1] = (...s) => n.onLeave && n.onLeave(...s)),
    onFocusin: t[2] || (t[2] = (...s) => n.onFocusIn && n.onFocusIn(...s)),
    onFocusout: t[3] || (t[3] = (...s) => n.onFocusOut && n.onFocusOut(...s))
  }, [
    m(e.$slots, "default"),
    (l(), _(Q, { to: "body" }, [
      g(K, { name: "ui-tooltip-fade" }, {
        default: x(() => [
          a.open && !i.disabled && n.hasContent ? (l(), o("div", {
            key: 0,
            id: a.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: q(a.panelStyle),
            role: "tooltip"
          }, [
            f("span", wt, [
              m(e.$slots, "content", {}, () => [
                O(k(i.label), 1)
              ])
            ])
          ], 12, xt)) : h("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const He = /* @__PURE__ */ w(St, [["render", _t]]), Ct = ["solid", "secondary", "outline"], Tt = ["sm", "md", "lg"], ue = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, de = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, Z = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function It(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function At(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const zt = {
  name: "Badge",
  components: { Tooltip: He },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Ct.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => Tt.includes(e)
    },
    /** Uzun metinde kısaltma (…) ve taşma varsa tooltip */
    truncate: {
      type: Boolean,
      default: !0
    },
    /** Tailwind max-w-* anahtarı: full (varsayılan), 32, 40, 48 */
    maxWidth: {
      type: String,
      default: "full",
      validator: (e) => Object.keys(Z).includes(e)
    },
    /** Tooltip metni; boşsa slot metni kullanılır */
    tooltip: {
      type: String,
      default: ""
    },
    /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
    hex: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isTruncated: !1,
      labelText: "",
      resizeObserver: null
    };
  },
  computed: {
    labelWidthClass() {
      return this.truncate ? Z[this.maxWidth] || Z[32] : "max-w-full";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return It(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: At(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        de[this.size] || de.sm,
        !this.normalizedHex && (ue[this.variant] || ue.solid)
      ];
    },
    tooltipLabel() {
      return (this.tooltip || this.labelText || "").trim();
    },
    showTooltip() {
      return this.truncate && this.isTruncated && !!this.tooltipLabel;
    }
  },
  watch: {
    tooltip() {
      this.$nextTick(() => this.measureLabel());
    }
  },
  mounted() {
    this.$nextTick(() => this.observeLabel());
  },
  updated() {
    this.$nextTick(() => this.measureLabel());
  },
  beforeUnmount() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null;
  },
  methods: {
    observeLabel() {
      var t;
      const e = this.$refs.labelRef;
      if (!e || typeof ResizeObserver > "u") {
        this.measureLabel();
        return;
      }
      (t = this.resizeObserver) == null || t.disconnect(), this.measureLabel(), this.resizeObserver = new ResizeObserver(() => this.measureLabel()), this.resizeObserver.observe(e);
    },
    measureLabel() {
      const e = this.$refs.labelRef;
      if (!e) {
        this.isTruncated = !1, this.labelText = "";
        return;
      }
      if (this.labelText = (e.textContent || "").trim(), !this.truncate) {
        this.isTruncated = !1;
        return;
      }
      this.isTruncated = e.scrollWidth > e.clientWidth + 1;
    }
  }
}, Lt = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, Ft = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function Dt(e, t, i, r, a, n) {
  const s = v("Tooltip");
  return l(), _(s, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: x(() => [
      f("span", {
        class: b(n.badgeClasses),
        style: q(n.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (l(), o("span", Lt, [
          m(e.$slots, "prepend")
        ])) : h("", !0),
        f("span", {
          ref: "labelRef",
          class: b(["ui-badge-label", n.labelWidthClass])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (l(), o("span", Ft, [
          m(e.$slots, "append")
        ])) : h("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const $t = /* @__PURE__ */ w(zt, [["render", Dt]]);
function je(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const Rt = ["sm", "md", "lg"], Bt = ["solid", "outline", "ghost", "link", "nav"], Pt = ["primary", "secondary", "input", "warning", "success", "info"], Et = ["button", "submit", "reset"], ce = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, fe = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, Ot = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, he = {
  solid: {
    primary: "border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border-0 bg-secondary text-secondary-foreground shadow-none hover:opacity-90",
    input: "border-0 shadow-none",
    warning: "border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border-0 bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border-0 bg-info text-info-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    secondary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    warning: "shadow-none border border-warning bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-success bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-info bg-transparent text-info hover:bg-info/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline"
  },
  nav: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent",
    input: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-transparent",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-transparent",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-transparent"
  }
}, Vt = {
  name: "Button",
  components: { RouterLink: at },
  props: {
    /** `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). */
    to: {
      type: [String, Object],
      default: null
    },
    /** Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. */
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => Et.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Bt.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => Pt.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Rt.includes(e)
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
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
    cubed: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !1
    },
    /** `fulled` ile aynı — tam genişlik düğme. */
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası.
     */
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
    /**
     * Kübik kutu: yalnız ikon veya tek slot (ör. avatar).
     * Slot varken `textContentClass` (`truncate`) kullanılmaz — kesilme olmaz.
     */
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.$slots.default : !0;
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : je(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      return ["ui-button-text min-w-0 flex-1 truncate", this.textAlign === "left" ? "text-left" : "text-center"].join(" ");
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.size === "lg" ? "sm" : "xs";
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      return { sm: "xs", md: "sm", lg: "sm" }[this.size] || "sm";
    },
    buttonClasses() {
      var s, u;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.cubed && !e && !t ? i = fe[this.size] || fe.md : e ? i = Ot[this.size] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = ce[this.size] || ce.md;
      let r = "";
      !e && !t && (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full");
      const a = ((s = he[this.variant]) == null ? void 0 : s[this.color]) || ((u = he.solid) == null ? void 0 : u.primary), n = this.fulled || this.block;
      return [
        "ui-button ui-control font-sans",
        a,
        i,
        n ? "ui-button--fulled w-full" : "",
        r,
        this.isDisabled ? "cursor-not-allowed opacity-50" : "",
        this.hasRouterTo ? "inline-flex items-center" : ""
      ];
    }
  },
  methods: {
    onClick(e) {
      this.isDisabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, t) {
      if (this.isDisabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), t(e);
    }
  }
}, Nt = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], Mt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Ht = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, jt = {
  key: 0,
  class: "sr-only"
}, Wt = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Yt = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Kt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, qt = ["type", "disabled", "data-variant", "data-color"], Gt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Ut = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Qt = {
  key: 0,
  class: "sr-only"
}, Zt = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Xt = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Jt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function ei(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("RouterLink");
  return n.hasRouterTo ? (l(), _(u, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: x(({ href: d, navigate: c }) => [
      f("a", {
        href: d,
        class: b(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (p) => n.onRouterLinkClick(p, c)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), o("span", Mt, [
          g(s, {
            size: n.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : i.loading ? (l(), o($, { key: 1 }, [
          f("span", Ht, [
            g(s, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          f("span", {
            class: b(n.textContentClass)
          }, [
            n.resolvedLoadingText ? (l(), o("span", jt, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", Wt, [
          i.prefixIcon ? (l(), _(s, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (l(), o($, { key: 3 }, [
          i.prefixIcon ? (l(), o("span", Yt, [
            g(s, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : h("", !0),
          f("span", {
            class: b(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", Kt, [
            g(s, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : h("", !0)
        ], 64))
      ], 10, Nt)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), o("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: b(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    onClick: t[0] || (t[0] = (...d) => n.onClick && n.onClick(...d))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), o("span", Gt, [
      g(s, {
        size: n.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : i.loading ? (l(), o($, { key: 1 }, [
      f("span", Ut, [
        g(s, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      f("span", {
        class: b(n.textContentClass)
      }, [
        n.resolvedLoadingText ? (l(), o("span", Qt, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", Zt, [
      i.prefixIcon ? (l(), _(s, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (l(), o($, { key: 3 }, [
      i.prefixIcon ? (l(), o("span", Xt, [
        g(s, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : h("", !0),
      f("span", {
        class: b(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), o("span", Jt, [
        g(s, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : h("", !0)
    ], 64))
  ], 10, qt));
}
const ms = /* @__PURE__ */ w(Vt, [["render", ei]]), ti = ["none", "sm", "md"], me = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, ii = {
  name: "Divider",
  inheritAttrs: !1,
  props: {
    /** Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı */
    title: {
      type: String,
      default: ""
    },
    /** Başlık yanında gösterilecek ikon (`ui-icon` `name`) */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Dikey boşluk (üst/alt).
     * `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için.
     */
    spacing: {
      type: String,
      default: "md",
      validator: (e) => ti.includes(e)
    },
    /**
     * true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar.
     * false: `role="separator"` + `aria-orientation="horizontal"`.
     */
    decorative: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    hasLabel() {
      return !!(this.title && this.title.trim() || this.icon);
    },
    rootClass() {
      return ["ui-divider", me[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        me[this.spacing] || "",
        this.$attrs.class
      ].filter(Boolean).join(" ");
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal"), e;
    },
    labeledAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal", this.title && (e["aria-label"] = this.title)), e;
    }
  }
}, ni = { class: "ui-divider__label" }, ri = {
  key: 1,
  class: "ui-section-label"
};
function si(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return n.hasLabel ? (l(), o("div", I({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = f("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    f("span", ni, [
      i.icon ? (l(), _(s, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : h("", !0),
      i.title ? (l(), o("span", ri, k(i.title), 1)) : h("", !0)
    ]),
    t[1] || (t[1] = f("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), o("hr", I({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const We = /* @__PURE__ */ w(ii, [["render", si]]), ai = ["solid", "dashed", "dotted", "double"], pe = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, li = ["solid", "regular", "brands", "light", "duotone", "thin"], oi = {
  name: "Card",
  components: { Divider: We },
  inheritAttrs: !1,
  props: {
    /** Dış çerçeve (1px `border-border`). */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => ai.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => li.includes(e)
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /** Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. */
    removePadding: {
      type: Boolean,
      default: !1
    },
    /** Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). */
    transparent: {
      type: Boolean,
      default: !1
    },
    /** `data-table` — sıfır kök padding; toolbar/footer DataTable boşlukları. */
    layout: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "data-table"
    }
  },
  computed: {
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && (!!this.$slots.toolbar || this.hasHeaderBlock);
    },
    borderStyleClass() {
      return pe[this.borderType] || pe.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), T(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ui = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, di = {
  key: 0,
  class: "ui-header-lead"
}, ci = { class: "ui-header-lead__main" }, fi = {
  key: 0,
  class: "ui-header-lead__icon"
}, hi = { class: "ui-header-lead__text" }, mi = {
  key: 0,
  class: "ui-heading-3"
}, pi = {
  key: 1,
  class: "ui-text-default"
}, gi = {
  key: 0,
  class: "ui-header-lead__actions"
};
function bi(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("Divider");
  return l(), o("div", I({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), o("div", ui, [
      m(e.$slots, "toolbar")
    ])) : h("", !0),
    n.hasHeaderBlock ? (l(), o("div", {
      key: 1,
      class: b(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), o("div", di, [
          f("div", ci, [
            i.icon ? (l(), o("span", fi, [
              g(s, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : h("", !0),
            f("div", hi, [
              i.title ? (l(), o("h3", mi, k(i.title), 1)) : h("", !0),
              i.description ? (l(), o("p", pi, k(i.description), 1)) : h("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), o("div", gi, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : h("", !0)
        ])) : h("", !0)
      ])
    ], 2)) : h("", !0),
    n.showHeaderDivider ? (l(), _(u, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : h("", !0),
    e.$slots.default ? (l(), o("div", {
      key: 3,
      class: b(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : h("", !0),
    e.$slots.footer ? (l(), o("div", {
      key: 4,
      class: b(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : h("", !0)
  ], 16);
}
const ps = /* @__PURE__ */ w(oi, [["render", bi]]);
let ge = 0;
function be(e) {
  return String(e).padStart(2, "0");
}
function E(e) {
  return `${e.getFullYear()}-${be(e.getMonth() + 1)}-${be(e.getDate())}`;
}
function X(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, a = Number(t[3]), n = new Date(i, r, a);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== a ? null : n;
}
const yi = {
  name: "DatePicker",
  inheritAttrs: !1,
  props: {
    /** `YYYY-MM-DD` */
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Pick a date"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    id: {
      type: String,
      default: void 0
    },
    /** En erken seçilebilir gün (`YYYY-MM-DD`) */
    min: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.today` (i18n) */
    todayLabel: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.yesterday` (i18n) */
    yesterdayLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    ge += 1;
    const e = ge, t = X(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-datepicker-${e}`,
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth()
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    selectedDate() {
      return X(this.modelValue);
    },
    displayText() {
      return this.selectedDate ? E(this.selectedDate) : this.placeholder;
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString("en-US", {
        month: "long",
        year: "numeric"
      });
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    resolvedTodayLabel() {
      return this.todayLabel ? this.todayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.today") : "Today";
    },
    resolvedYesterdayLabel() {
      return this.yesterdayLabel ? this.yesterdayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.yesterday") : "Yesterday";
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(/* @__PURE__ */ new Date());
    },
    yesterdayQuickDisabled() {
      const e = /* @__PURE__ */ new Date();
      return e.setDate(e.getDate() - 1), this.isQuickDateDisabled(e);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), a = [];
      for (let n = 0; n < 42; n += 1) {
        const s = new Date(r.getFullYear(), r.getMonth(), r.getDate() + n), u = s.getMonth() === t && s.getFullYear() === e, d = s.getDate(), c = E(s), p = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`, A = !!(this.selectedDate && c === E(this.selectedDate)), S = E(/* @__PURE__ */ new Date()) === c, y = !!(this.minYmd && c < this.minYmd);
        a.push({
          key: p,
          d,
          out: !u,
          date: s,
          sel: A,
          today: S,
          inMonth: u,
          disabled: y
        });
      }
      return a;
    }
  },
  watch: {
    modelValue() {
      const e = X(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = E(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = E(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), t();
    },
    pickQuick(e, t) {
      const i = /* @__PURE__ */ new Date();
      if (e === "yesterday" && i.setDate(i.getDate() - 1), this.isQuickDateDisabled(i)) return;
      const r = E(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, vi = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, ki = { class: "mb-2 flex items-center justify-between gap-2" }, Si = { class: "text-sm font-medium tabular-nums text-foreground" }, xi = { class: "ui-datepicker-grid" }, wi = { class: "ui-datepicker-quick" };
function _i(e, t, i, r, a, n) {
  const s = v("ui-button"), u = v("ui-popover");
  return l(), o("div", {
    class: b([
      "ui-datepicker",
      i.fulled ? "ui-datepicker--fulled w-full" : "w-auto shrink-0",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    g(u, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (d) => a.menuOpen = d),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: i.disabled
    }, {
      trigger: x(({ open: d, toggle: c }) => [
        g(s, {
          type: "button",
          id: n.resolvedId,
          variant: "solid",
          color: "input",
          fulled: i.fulled,
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: i.disabled,
          "aria-expanded": d ? "true" : "false",
          "aria-haspopup": !0,
          onClick: c
        }, {
          default: x(() => [
            f("span", {
              class: b([
                "min-w-0 flex-1 truncate",
                n.selectedDate ? "text-foreground" : "text-muted-foreground"
              ])
            }, k(n.displayText), 3)
          ]),
          _: 1
        }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
      ]),
      content: x(({ close: d }) => [
        f("div", vi, [
          f("div", ki, [
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = D((c) => n.shiftMonth(-1), ["stop"]))
            }),
            f("span", Si, k(n.monthTitle), 1),
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = D((c) => n.shiftMonth(1), ["stop"]))
            })
          ]),
          t[3] || (t[3] = f("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
            f("span", null, "Su"),
            f("span", null, "Mo"),
            f("span", null, "Tu"),
            f("span", null, "We"),
            f("span", null, "Th"),
            f("span", null, "Fr"),
            f("span", null, "Sa")
          ], -1)),
          f("div", xi, [
            (l(!0), o($, null, W(n.calendarCells, (c) => (l(), _(s, {
              key: c.key,
              variant: n.dayVariant(c),
              color: n.dayColor(c),
              size: "sm",
              disabled: c.disabled,
              "aria-selected": c.sel ? "true" : "false",
              "aria-disabled": c.disabled ? "true" : void 0,
              "data-outside": c.inMonth ? void 0 : "true",
              "data-today": c.today ? "true" : void 0,
              onClick: (p) => n.pick(c, d)
            }, {
              default: x(() => [
                O(k(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          f("div", wi, [
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (c) => n.pickQuick("today", d)
            }, {
              default: x(() => [
                O(k(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", d)
            }, {
              default: x(() => [
                O(k(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const gs = /* @__PURE__ */ w(yi, [["render", _i]]);
let ye = 0;
function bs(e) {
  return ye += 1, `${e}-${ye}`;
}
function ie(e) {
  let t = 0;
  return () => (t += 1, `${e}-${t}`);
}
function Ye(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [a, n] of Object.entries(e || {}))
    i.has(a) || (r[a] = n);
  return r;
}
const Ci = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), Ti = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function Ii(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function ve(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (Ii(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function Ai(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function ke(e, { skipFooter: t = !1 } = {}) {
  const i = ve(e, Ci, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = ve(e, Ti, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function zi(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && ke(t))
    return !0;
  for (const i of Ai(e))
    if (ke(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Li = "(max-width: 767px)";
function Ke() {
  return typeof window > "u" ? !1 : window.matchMedia(Li).matches;
}
const Fi = ie("ui-dialog"), Di = ["solid", "dashed", "dotted", "double"], Se = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, $i = ["solid", "regular", "brands", "light", "duotone", "thin"], Ri = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], xe = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, Bi = {
  name: "Dialog",
  components: { Divider: We },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    /** İç panel genişliği (`max-w-*`). */
    maxWidth: {
      type: String,
      default: "lg",
      validator: (e) => Ri.includes(e)
    },
    /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => Di.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => $i.includes(e)
    },
    /** Sağ üst kapat düğmesi. */
    showClose: {
      type: Boolean,
      default: !0
    },
    /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
    closeLabel: {
      type: String,
      default: ""
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). */
    bodyPadding: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "none"
    },
    /** Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). */
    bodyLayout: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "flex"
    },
    /** Panel `max-height` — örn. `min(85vh, 36rem)`. */
    panelMaxHeight: {
      type: String,
      default: ""
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /**
     * Başlık yokken `role="dialog"` için erişilebilir ad.
     * Başlık varsa `aria-labelledby` önceliklidir.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). */
    initialFocus: {
      type: Boolean,
      default: !0
    },
    /**
     * Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay).
     * @type {'default' | 'confirm'}
     */
    stackLayer: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "confirm"
    }
  },
  emits: ["update:open", "after-leave"],
  data() {
    const e = Fi();
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      focusFallbackTimer: null,
      sheetDragCleanup: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? this.scheduleInitialFocus() : (this.clearFocusFallback(), this.teardownSheetDrag());
      },
      flush: "post"
    }
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.teardownSheetDrag();
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
    borderStyleClass() {
      return Se[this.borderType] || Se.solid;
    },
    maxWidthClass() {
      return xe[this.maxWidth] || xe.lg;
    },
    panelClasses() {
      const e = this.border ? T("border", this.borderStyleClass) : T("border-0", "border-transparent");
      return T(
        "ui-surface ui-card ui-dialog-panel relative z-[1] w-full",
        this.maxWidthClass,
        e,
        this.bodyLayout === "flex" ? "ui-dialog-panel--body-flex" : "",
        this.$attrs.class
      );
    },
    panelStyle() {
      if (this.panelMaxHeight)
        return { maxHeight: this.panelMaxHeight };
    },
    passthroughAttrs() {
      return Ye(this.$attrs, ["class"]);
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== "")
        return this.titleId;
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== "")
        return this.descriptionId;
    },
    ariaLabelAttr() {
      if (!this.ariaLabelledby && this.ariaLabel != null && this.ariaLabel !== "")
        return this.ariaLabel;
    },
    resolvedCloseLabel() {
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : je(this, "ui.dialog.close", "Close");
    },
    rootLayerClasses() {
      return T(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm"
      );
    }
  },
  methods: {
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) {
          this.runInitialFocus();
          return;
        }
        const t = (i) => {
          i.target === e && (e.removeEventListener("transitionend", t), this.clearFocusFallback(), this.runInitialFocus());
        };
        e.addEventListener("transitionend", t), this.focusFallbackTimer = setTimeout(() => {
          e.removeEventListener("transitionend", t), this.focusFallbackTimer = null, this.runInitialFocus();
        }, 480);
      }));
    },
    runInitialFocus() {
      !this.open || !this.initialFocus || this.$nextTick(() => {
        this.focusInitialField();
      });
    },
    onOverlayAfterLeave() {
      this.$emit("after-leave");
    },
    focusInitialField() {
      var t;
      const e = this.$refs.panelRef;
      e && zi(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      this.closeOnEscape && e.key === "Escape" && (e.preventDefault(), this.close());
    },
    teardownSheetDrag() {
      this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null);
      const e = this.$refs.panelRef;
      e && (e.style.transform = "", e.style.transition = "");
    },
    onSheetPointerDown(e) {
      if (!Ke() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const a = (u) => {
        const d = Math.max(0, u.clientY - i);
        t.style.transform = `translateY(${d}px)`;
      }, n = (u) => {
        const d = Math.max(0, u.clientY - i);
        t.style.transition = r, t.style.transform = "", d >= 72 && this.close(), this.teardownSheetDrag();
      }, s = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", a), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", s), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", s);
      };
    }
  }
}, Pi = ["aria-labelledby", "aria-describedby", "aria-label"], Ei = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Oi = {
  key: 0,
  class: "ui-dialog-header__icon"
}, Vi = ["id"], Ni = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Mi = ["id"], Hi = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, ji = {
  key: 4,
  class: "ui-card-footer"
};
function Wi(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("ui-button"), d = v("Divider");
  return l(), _(Q, { to: "body" }, [
    g(K, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: n.onOverlayAfterEnter,
      onAfterLeave: n.onOverlayAfterLeave
    }, {
      default: x(() => [
        i.open ? (l(), o("div", {
          key: 0,
          ref: "layerRef",
          class: b(n.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...c) => n.onLayerKeydown && n.onLayerKeydown(...c))
        }, [
          f("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...c) => n.onBackdrop && n.onBackdrop(...c))
          }),
          f("div", I({
            ref: "panelRef",
            class: n.panelClasses,
            style: n.panelStyle,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": n.ariaLabelledby,
            "aria-describedby": n.ariaDescribedby,
            "aria-label": n.ariaLabelAttr
          }, n.passthroughAttrs, {
            onClick: t[2] || (t[2] = D(() => {
            }, ["stop"]))
          }), [
            f("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
            }, [...t[4] || (t[4] = [
              f("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            n.hasHeaderBlock ? (l(), o("div", Ei, [
              m(e.$slots, "header", {}, () => [
                n.hasDefaultHeader ? (l(), o("div", {
                  key: 0,
                  class: b(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (l(), o("span", Oi, [
                    g(s, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : h("", !0),
                  i.title ? (l(), o("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, k(i.title), 9, Vi)) : h("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), o("div", Ni, [
                    m(e.$slots, "append"),
                    m(e.$slots, "actions")
                  ])) : h("", !0),
                  i.showClose ? (l(), _(u, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": n.resolvedCloseLabel,
                    onClick: n.close
                  }, null, 8, ["aria-label", "onClick"])) : h("", !0),
                  i.description ? (l(), o("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, k(i.description), 9, Mi)) : h("", !0)
                ], 2)) : h("", !0)
              ])
            ])) : h("", !0),
            e.$slots.toolbar ? (l(), o("div", Hi, [
              m(e.$slots, "toolbar")
            ])) : h("", !0),
            n.showHeaderDivider ? (l(), _(d, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : h("", !0),
            e.$slots.default ? (l(), o("div", {
              key: 3,
              class: b(["ui-card-body ui-text-default", {
                "ui-card-body--row": i.row,
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              m(e.$slots, "default")
            ], 2)) : h("", !0),
            e.$slots.footer ? (l(), o("div", ji, [
              m(e.$slots, "footer")
            ])) : h("", !0)
          ], 16, Pi)
        ], 34)) : h("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const ys = /* @__PURE__ */ w(Bi, [["render", Wi]]), Yi = ["solid", "regular", "brands", "light", "duotone", "thin"], Ki = ["sm", "md", "lg"], qi = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Gi = {
  name: "Empty",
  inheritAttrs: !1,
  props: {
    /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
    icon: {
      type: String,
      default: "plus"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `ui-icon` `type` */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Yi.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ki.includes(e)
    }
  },
  computed: {
    iconSize() {
      return qi[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return T("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ui = {
  key: 0,
  class: "ui-empty-icon"
}, Qi = {
  key: 1,
  class: "ui-empty-title"
}, Zi = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Xi = {
  key: 3,
  class: "ui-empty-actions"
};
function Ji(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), o("div", Ui, [
      g(s, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : h("", !0),
    i.title ? (l(), o("h2", Qi, k(i.title), 1)) : h("", !0),
    i.description ? (l(), o("p", Zi, k(i.description), 1)) : h("", !0),
    e.$slots.default ? (l(), o("div", Xi, [
      m(e.$slots, "default")
    ])) : h("", !0)
  ], 16);
}
const vs = /* @__PURE__ */ w(Gi, [["render", Ji]]);
let we = 0;
const en = ["vertical", "horizontal"], tn = ["default", "card"], nn = {
  name: "FormRow",
  inheritAttrs: !1,
  props: {
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /**
     * `vertical`: etiket ve açıklama üstte, kontrol altta (tam genişlik).
     * `horizontal`: metin solda, kontrol sağda (`justify-between`).
     */
    direction: {
      type: String,
      default: "vertical",
      validator: (e) => en.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => tn.includes(e)
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: void 0
    },
    /** Dialog oluşturma formlarında ana alan — `lg` boyut ve odak hedefi */
    primary: {
      type: Boolean,
      default: !1
    }
  },
  provide() {
    return {
      uiFormRowPrimary: () => this.primary
    };
  },
  data() {
    we += 1;
    const e = we;
    return {
      fallbackId: `ui-form-control-${e}`,
      fallbackDescId: `ui-form-desc-${e}`
    };
  },
  computed: {
    controlId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : void 0;
    },
    hasTextBlock() {
      return !!(this.label || this.description || this.$slots.action);
    },
    rootLayoutClass() {
      return this.variant === "card" ? this.direction === "vertical" ? "ui-form-row--card ui-form-row--card-vertical" : "ui-form-row--card ui-form-row--card-horizontal" : this.direction === "horizontal" ? "ui-form-row--horizontal" : "ui-form-row--vertical";
    },
    labelLineClass() {
      const e = "ui-form-row-label-line";
      return !this.label && this.$slots.action ? `${e} ui-form-row-label-line--action-only` : e;
    }
  }
}, rn = ["data-primary-field"], sn = {
  key: 0,
  class: "ui-form-row-text"
}, an = ["for"], ln = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, on = ["id"], un = { class: "ui-form-row-control" };
function dn(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), o("div", sn, [
      i.label || e.$slots.action ? (l(), o("div", {
        key: 0,
        class: b(n.labelLineClass)
      }, [
        i.label ? (l(), o("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, k(i.label), 9, an)) : h("", !0),
        e.$slots.action ? (l(), o("div", ln, [
          m(e.$slots, "action")
        ])) : h("", !0)
      ], 2)) : h("", !0),
      i.description ? (l(), o("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, k(i.description), 9, on)) : h("", !0)
    ])) : h("", !0),
    f("div", un, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 16, rn);
}
const ks = /* @__PURE__ */ w(nn, [["render", dn]]), cn = ["solid", "regular", "brands", "light", "duotone", "thin"], _e = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, fn = ["xs", "sm", "md", "lg"], hn = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, mn = {
  name: "Icon",
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: {
      type: String,
      default: "light",
      validator: (e) => cn.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => fn.includes(e)
    },
    /**
     * true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`.
     * false: dekoratif — `aria-hidden="true"`.
     */
    showAccessibleName: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    faWeightClass() {
      return _e[this.type] || _e.light;
    },
    iconClass() {
      return T(
        "ui-icon fa not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        hn[this.size],
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    accessibleLabel() {
      return this.showAccessibleName ? typeof this.$t == "function" ? this.$t("ui.icon.accessible", { name: this.name }) : this.name : null;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.showAccessibleName ? (e.role = "img", (e["aria-label"] == null || e["aria-label"] === "") && (e["aria-label"] = this.accessibleLabel), e["aria-hidden"] = !1) : e["aria-hidden"] = !0, e;
    }
  }
};
function pn(e, t, i, r, a, n) {
  return l(), o("i", I({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Ss = /* @__PURE__ */ w(mn, [["render", pn]]), gn = ie("ui-input"), bn = ["sm", "md", "lg"], yn = {
  name: "Input",
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => bn.includes(e)
    },
    /** `v-model` */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** Tek satır için native `type`. */
    type: {
      type: String,
      default: "text"
    },
    /** `<textarea>` kullan. */
    multiline: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: Number,
      default: 3
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
      default: void 0
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return { fallbackId: gn() };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      return T(
        "ui-input",
        this.multiline && "ui-input--multiline",
        this.resolvedSize !== "md" && `ui-input--${this.resolvedSize}`,
        this.isDisabled && "pointer-events-none opacity-50"
      );
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      return Ye(this.$attrs, [
        "class",
        "style",
        "type",
        "value",
        "id",
        "rows",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "maxlength"
      ]);
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, vn = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, kn = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Sn = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], xn = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], wn = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, _n = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function Cn(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return l(), o("div", {
    class: b([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), o("div", vn, [
      m(e.$slots, "prepend")
    ])) : h("", !0),
    i.prefixIcon ? (l(), o("span", kn, [
      g(s, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : h("", !0),
    i.multiline ? (l(), o("textarea", I({
      key: 2,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--textarea",
      value: i.modelValue,
      rows: i.rows,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...u) => n.onInput && n.onInput(...u)),
      onChange: t[1] || (t[1] = (u) => e.$emit("change", u)),
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), null, 16, Sn)) : (l(), o("input", I({
      key: 3,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--single",
      type: i.type,
      value: i.modelValue,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...u) => n.onInput && n.onInput(...u)),
      onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
      onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
      onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
    }), null, 16, xn)),
    i.suffixIcon ? (l(), o("span", wn, [
      g(s, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : h("", !0),
    e.$slots.append ? (l(), o("div", _n, [
      m(e.$slots, "append")
    ])) : h("", !0)
  ], 2);
}
const xs = /* @__PURE__ */ w(yn, [["render", Cn]]);
let Ce = 0;
const Tn = ["sm", "md", "lg"], Te = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], In = {
  name: "Phone",
  inheritAttrs: !1,
  props: {
    country: {
      type: String,
      default: "+90"
    },
    number: {
      type: String,
      default: ""
    },
    countries: {
      type: Array,
      default: () => Te
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Tn.includes(e)
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
    numberName: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "tel-national"
    },
    numberMaxlength: {
      type: [Number, String],
      default: 15
    },
    countryAriaLabel: {
      type: String,
      default: ""
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:country", "update:number", "focus", "blur"],
  data() {
    return Ce += 1, { fallbackId: `ui-phone-number-${Ce}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : Te;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    rootClass() {
      return T(
        "ui-phone",
        this.isSingleCountry && "ui-phone--single-country",
        this.size !== "md" && `ui-phone--${this.size}`
      );
    },
    innerCountry: {
      get() {
        return this.country;
      },
      set(e) {
        this.$emit("update:country", e);
      }
    },
    innerNumber: {
      get() {
        return this.number;
      },
      set(e) {
        this.$emit("update:number", e);
      }
    },
    resolvedNumberId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.phone.placeholder") : "";
    },
    resolvedCountryAria() {
      return this.countryAriaLabel ? this.countryAriaLabel : typeof this.$t == "function" ? this.$t("ui.phone.countryAria") : "Country code";
    },
    numberPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    }
  }
}, An = { class: "ui-phone-prepend" }, zn = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ln(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("ui-select"), d = v("ui-input");
  return l(), o("div", {
    class: b(n.rootClass)
  }, [
    g(d, I({
      id: n.resolvedNumberId,
      modelValue: n.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (c) => n.innerNumber = c),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: n.resolvedPlaceholder,
      name: i.numberName,
      autocomplete: i.autocomplete,
      maxlength: i.numberMaxlength,
      "aria-describedby": i.ariaDescribedby
    }, n.numberPassthrough, {
      onFocus: t[2] || (t[2] = (c) => e.$emit("focus", c)),
      onBlur: t[3] || (t[3] = (c) => e.$emit("blur", c))
    }), {
      prepend: x(() => [
        f("div", An, [
          g(s, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), o("span", zn, k(n.innerCountry), 1)) : (l(), _(u, {
            key: 1,
            modelValue: n.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (c) => n.innerCountry = c),
            variant: "inline",
            size: i.size,
            options: n.countryOptions,
            disabled: i.disabled,
            "aria-label": n.resolvedCountryAria
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
  ], 2);
}
const ws = /* @__PURE__ */ w(In, [["render", Ln]]), Fn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Ie = 10, J = 410, Dn = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], $n = {
  name: "Popover",
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Fn.includes(e)
    },
    /** Tetikleyici ile aynı minimum genişlik */
    matchTriggerWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir.
     */
    width: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
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
    /**
     * Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker).
     */
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    /**
     * true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır.
     * false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır.
     */
    keepOpenOnAncestorPopoverClick: {
      type: Boolean,
      default: !1
    },
    /**
     * true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü,
     * tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select).
     */
    alignSelectedOptionToTrigger: {
      type: Boolean,
      default: !1
    },
    /** true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) */
    block: {
      type: Boolean,
      default: !1
    },
    /**
     * Mobil görünümde paneli ekran ortasında aç (varsayılan).
     * false: tetikleyiciye göre konumlanır (Dropdown menüler).
     */
    mobileCentered: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:open"],
  data() {
    return {
      layerStyle: {},
      layerZIndex: J,
      rafId: 0,
      mobileCenteredActive: !1
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCenteredActive;
    },
    backdropStyle() {
      return { zIndex: String(this.layerZIndex) };
    },
    rootShellClass() {
      return this.block ? "ui-popover ui-popover--block relative w-full min-w-0 max-w-full" : "ui-popover relative shrink-0";
    },
    triggerShellClass() {
      return this.block ? "ui-popover-trigger ui-popover-trigger--block flex w-full min-w-0 max-w-full" : "ui-popover-trigger inline-flex shrink-0";
    },
    resolvedWidth() {
      const e = this.width;
      return e == null || e === "" ? null : typeof e == "number" ? `${e}px` : String(e);
    }
  },
  watch: {
    open(e) {
      e ? this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      }) : this.teardownGlobalListeners();
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.open && this.$nextTick(() => {
      this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
    });
  },
  beforeUnmount() {
    this.teardownGlobalListeners(), this.rafId && cancelAnimationFrame(this.rafId);
  },
  methods: {
    toggle() {
      this.disabled || this.$emit("update:open", !this.open);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    schedulePosition() {
      this.rafId && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(() => {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = 0, this.updatePosition();
        });
      });
    },
    resolveLayerZIndex() {
      if (typeof document > "u") return J;
      let e = J;
      for (const t of document.querySelectorAll(".ui-dialog-root")) {
        const i = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(i) && (e = Math.max(e, i + 10));
      }
      return e;
    },
    withLayerZIndex(e) {
      const t = this.resolveLayerZIndex();
      return this.layerZIndex = t, {
        ...e,
        zIndex: String(t)
      };
    },
    updatePosition() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, r = window.innerHeight, a = Ie, n = this.resolvedWidth, s = e.getBoundingClientRect(), u = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? s.width : 200), d = t.offsetHeight || 120;
      if (Ke() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const y = Math.max(a, Math.round((i - u) / 2)), L = {
          top: `${Math.max(a, Math.round((r - d) / 2))}px`,
          left: `${y}px`
        };
        n != null ? (L.width = n, L.minWidth = n) : (L.width = `${Math.min(u, i - a * 2)}px`, L.maxWidth = `calc(100vw - ${a * 2}px)`), this.layerStyle = this.withLayerZIndex(L);
        return;
      }
      this.mobileCenteredActive = !1;
      let c, p;
      switch (this.placement) {
        case "right-start":
          c = s.top, p = s.right + a;
          break;
        case "right-end":
          c = s.bottom - d, p = s.right + a;
          break;
        case "left-start":
          c = s.top, p = s.left - a - u;
          break;
        case "left-end":
          c = s.bottom - d, p = s.left - a - u;
          break;
        case "top-start":
          c = s.top - a - d, p = s.left;
          break;
        case "top-end":
          c = s.top - a - d, p = s.right - u;
          break;
        case "bottom-end":
          c = s.bottom + a, p = s.right - u;
          break;
        case "bottom":
          c = s.bottom + a, p = s.left + (s.width - u) / 2;
          break;
        case "bottom-start":
        default:
          c = s.bottom + a, p = s.left;
          break;
      }
      if (this.placement.startsWith("right") && p + u > i - a && (p = s.left - a - u), this.placement.startsWith("left") && p < a && (p = s.right + a), this.placement.startsWith("top") && c < a && (c = s.bottom + a), p + u > i - a && (p = Math.max(a, i - a - u)), p < a && (p = a), this.placement.startsWith("bottom") && c + d > r - a) {
        const y = s.top - a - d;
        y >= a && (c = y);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (c + d > r - a && (c = Math.max(a, r - a - d)), c < a && (c = a));
      const A = this.matchTriggerWidth && n == null ? `${Math.ceil(s.width)}px` : void 0, S = {
        top: `${Math.round(c)}px`,
        left: `${Math.round(p)}px`,
        minWidth: A
      };
      n != null && (S.width = n, S.minWidth = n), this.layerStyle = this.withLayerZIndex(S), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, i = this.$refs.layerRef;
      if (!e || !t || !i) return;
      const r = t.querySelector('[role="listbox"]');
      if (r && r.scrollHeight > r.clientHeight + 2)
        return;
      const a = t.querySelector('[role="option"][aria-selected="true"]');
      if (!a) return;
      const n = e.querySelector("[data-popover-align]") || e, s = a.querySelector("[data-popover-align]") || a, u = n.getBoundingClientRect(), d = s.getBoundingClientRect(), c = d.top - u.top, p = d.left - u.left, A = i.getBoundingClientRect(), S = this.layerStyle.top, y = this.layerStyle.left;
      let C = typeof S == "string" && S !== "" ? parseFloat(S) : A.top, L = typeof y == "string" && y !== "" ? parseFloat(y) : A.left;
      Number.isNaN(C) && (C = A.top), Number.isNaN(L) && (L = A.left);
      let B = C - c, P = L - p;
      const z = Ie, Y = window.innerHeight, N = window.innerWidth, H = A.height, j = A.width;
      B + H > Y - z && (B = Math.max(z, Y - z - H)), B < z && (B = z), P + j > N - z && (P = Math.max(z, N - z - j)), P < z && (P = z), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(B)}px`,
        left: `${Math.round(P)}px`
      });
    },
    bindGlobalListeners() {
      window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0);
    },
    teardownGlobalListeners() {
      window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("pointerdown", this.onDocPointerDown, !0), document.removeEventListener("keydown", this.onDocKeydown, !0);
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, i = e == null ? void 0 : e.target;
      t && i && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, i = this.$refs.triggerRef, r = this.$refs.panelRef;
      i != null && i.contains(t) || r != null && r.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
    },
    isOpenedInsidePopoverLayer(e) {
      const t = this.$refs.rootRef;
      return !!(e && t && e.contains(t));
    },
    shouldIgnoreOutsideClick(e) {
      var a;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, i = e.closest("[data-ui-popover-layer]");
      if (i && i !== t)
        return this.isOpenedInsidePopoverLayer(i) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const n of Dn)
        if (e.closest(n)) return !0;
      const r = (a = this.outsideClickIgnoreSelector) == null ? void 0 : a.trim();
      return !!(r && e.closest(r));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, Rn = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Bn = {
  key: 0,
  class: "ui-popover-header"
}, Pn = { class: "ui-popover-body min-h-0 min-w-0" }, En = {
  key: 1,
  class: "ui-popover-footer"
};
function On(e, t, i, r, a, n) {
  return l(), o("div", {
    ref: "rootRef",
    class: b([n.rootShellClass, e.$attrs.class])
  }, [
    f("div", {
      ref: "triggerRef",
      class: b(n.triggerShellClass)
    }, [
      m(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    (l(), _(Q, { to: "body" }, [
      g(K, { name: "ui-overlay-popover-backdrop" }, {
        default: x(() => [
          n.showMobileBackdrop ? (l(), o("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: q(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...s) => n.close && n.close(...s))
          }, null, 4)) : h("", !0)
        ]),
        _: 1
      }),
      g(K, { name: "ui-overlay-popover" }, {
        default: x(() => [
          G(f("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: q(a.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": a.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            f("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[1] || (t[1] = (...s) => n.onPanelKeydown && n.onPanelKeydown(...s))
            }, [
              e.$slots.header ? (l(), o("div", Bn, [
                m(e.$slots, "header", { close: n.close })
              ])) : h("", !0),
              f("div", Pn, [
                m(e.$slots, "content", { close: n.close })
              ]),
              e.$slots.footer ? (l(), o("div", En, [
                m(e.$slots, "footer", { close: n.close })
              ])) : h("", !0)
            ], 544)
          ], 12, Rn), [
            [Ne, i.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const _s = /* @__PURE__ */ w($n, [["render", On]]), Vn = {
  name: "Radio",
  inject: {
    uiRadioGroup: {
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
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca seçiliyken). */
    highlight: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    groupVariant() {
      var e;
      return ((e = this.uiRadioGroup) == null ? void 0 : e.normalizedVariant) || "list";
    },
    isChecked() {
      return this.uiRadioGroup ? this.uiRadioGroup.modelValue === this.value : !1;
    },
    stringValue() {
      return String(this.value);
    }
  },
  mounted() {
    !this.uiRadioGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.uiRadioGroup && this.uiRadioGroup.$emit("update:modelValue", this.value);
    }
  }
}, Nn = ["name", "value", "checked"], Mn = { class: "ui-radio-body" }, Hn = { class: "ui-radio-label" }, jn = {
  key: 0,
  class: "ui-radio-description"
};
function Wn(e, t, i, r, a, n) {
  var s;
  return l(), o("label", {
    class: b([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onClick: t[1] || (t[1] = (...u) => n.select && n.select(...u)),
    onKeydown: [
      t[2] || (t[2] = U(D((...u) => n.select && n.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = U(D((...u) => n.select && n.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    f("input", {
      type: "radio",
      name: (s = n.uiRadioGroup) == null ? void 0 : s.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => n.select && n.select(...u))
    }, null, 40, Nn),
    t[4] || (t[4] = f("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    f("span", Mn, [
      f("span", Hn, k(i.label), 1),
      i.description ? (l(), o("span", jn, k(i.description), 1)) : h("", !0)
    ])
  ], 34);
}
const Cs = /* @__PURE__ */ w(Vn, [["render", Wn]]);
let Ae = 0;
const Yn = ["list", "button", "List", "Button"], Kn = ["vertical", "horizontal"], qn = {
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    /** `list` — satır listesi; `button` — yan yana kart seçenekleri */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Yn.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => Kn.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Ae += 1, { groupName: `ui-radio-group-${Ae}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    rootClass() {
      return T(
        "ui-radio-group",
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === "list" && this.orientation === "horizontal" ? "ui-radio-group--horizontal" : ""
      );
    }
  },
  provide() {
    return {
      uiRadioGroup: this
    };
  }
}, Gn = ["aria-label"];
function Un(e, t, i, r, a, n) {
  return l(), o("div", {
    class: b(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, Gn);
}
const Ts = /* @__PURE__ */ w(qn, [["render", Un]]), Qn = {
  name: "Tag",
  components: { Badge: $t, Tooltip: He },
  props: {
    variant: {
      type: String,
      default: "secondary",
      validator: (e) => ["solid", "secondary", "outline"].includes(e)
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    removable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove"],
  computed: {
    removeLabel() {
      return typeof this.$t == "function" ? this.$t("ui.tag.remove") : "Kaldır";
    }
  }
}, Zn = ["aria-label"];
function Xn(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("Tooltip"), d = v("Badge");
  return l(), _(d, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Me({
    default: x(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: x(() => [
        g(u, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: x(() => [
            f("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = D((c) => e.$emit("remove"), ["stop"]))
            }, [
              g(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Zn)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const Jn = /* @__PURE__ */ w(Qn, [["render", Xn]]);
let ze = 0;
const er = ["field", "inline"], tr = ["sm", "md", "lg"], ir = {
  name: "Select",
  components: { Tag: Jn },
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => er.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => tr.includes(e)
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: void 0
    },
    /** Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti */
    multiple: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: void 0
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    /** Tetikleyici sol ikon (`ui-icon` `name`) */
    prefixIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    matchTriggerWidth: {
      type: Boolean,
      default: !0
    },
    scrollListThreshold: {
      type: Number,
      default: 6
    },
    /** Sunucu tarafı arama — liste yerel filtrelenmez; `filterChange` yayınlanır */
    remoteFilter: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "dropdownOpenChange", "filterChange"],
  data() {
    ze += 1;
    const e = ze;
    return {
      fallbackId: `ui-select-${e}`,
      listboxId: `ui-select-listbox-${e}`,
      menuOpen: !1,
      filterQuery: "",
      filterDebounceTimer: null
    };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      const e = this.variant === "inline";
      return T(
        "ui-select",
        e && "ui-select--inline",
        !e && this.fulled && "ui-select--fulled w-full",
        !e && !this.fulled && "w-auto shrink-0",
        this.resolvedSize !== "md" && `ui-select--${this.resolvedSize}`,
        this.multiple && "ui-select--multiple",
        this.isFilterable && "ui-select--filterable",
        this.isDisabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    isFilterable() {
      return this.filterable || this.multiple;
    },
    showPopoverHeader() {
      return this.isFilterable && !this.multiple;
    },
    listboxRole() {
      return this.multiple, "listbox";
    },
    resolvedMatchTriggerWidth() {
      return this.variant === "inline" ? !1 : this.matchTriggerWidth;
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder !== void 0 && this.placeholder !== null ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.select.placeholder") : "Seçiniz";
    },
    normalizedOptions() {
      const e = this.resolvedPlaceholder;
      return (this.options || []).map((t) => t != null && typeof t == "object" && "value" in t && "label" in t ? { value: t.value, label: t.label } : { value: t, label: String(t) }).filter((t) => {
        if (t.value === "" || t.value == null) return !1;
        const i = String(t.label), r = String(t.value);
        return i !== e && r !== e;
      });
    },
    filteredOptions() {
      if (!this.isFilterable || this.remoteFilter)
        return this.normalizedOptions;
      const e = this.normalizeFilter(this.filterQuery);
      return e ? this.normalizedOptions.filter(
        (t) => this.normalizeFilter(t.label).includes(e) || this.normalizeFilter(String(t.value)).includes(e)
      ) : this.normalizedOptions;
    },
    selectedValues() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.filter((e) => e !== "" && e != null) : [] : [];
    },
    stringValue() {
      return this.multiple || this.modelValue === "" || this.modelValue == null ? "" : String(this.modelValue);
    },
    hiddenFieldValue() {
      return this.multiple ? this.selectedValues.map((e) => String(e)).join(",") : this.stringValue;
    },
    isPlaceholderDisplay() {
      return this.multiple ? !1 : this.stringValue === "";
    },
    displayLabel() {
      if (this.isPlaceholderDisplay)
        return this.resolvedPlaceholder;
      const e = this.normalizedOptions.find((t) => String(t.value) === this.stringValue);
      return e ? e.label : this.stringValue;
    },
    multipleInputPlaceholder() {
      return this.selectedValues.length > 0 ? "" : this.resolvedPlaceholder;
    },
    showClearButton() {
      return this.isDisabled ? !1 : this.multiple ? this.clearable && this.selectedValues.length > 0 : this.clearable && this.stringValue !== "";
    },
    clearAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.clear") : "Clear selection";
    },
    resolvedFilterPlaceholder() {
      return this.filterPlaceholder ? this.filterPlaceholder : typeof this.$t == "function" ? this.$t("ui.select.filterPlaceholder") : "Search…";
    },
    noResultsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.noResults") : "No results";
    },
    emptyOptionsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.empty") : "No options";
    },
    resolvedLoadingLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.loading") : "Loading…";
    },
    triggerPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled", "name"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    },
    optionCount() {
      return this.normalizedOptions.length;
    },
    useScrollListMode() {
      return this.isFilterable ? !0 : this.optionCount > this.scrollListThreshold;
    },
    alignSelectedToTrigger() {
      return !this.useScrollListMode;
    }
  },
  watch: {
    filterQuery(e) {
      this.remoteFilter && (this.filterDebounceTimer && clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = setTimeout(() => {
        this.$emit("filterChange", String(e ?? "").trim());
      }, 300));
    },
    menuOpen(e) {
      if (this.$emit("dropdownOpenChange", e), !e) {
        this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.filterQuery = "";
        return;
      }
      this.$nextTick(() => {
        this.isFilterable && this.focusSearch(), (this.useScrollListMode || this.isListboxScrollable()) && this.scrollSelectedIntoView();
      });
    }
  },
  methods: {
    normalizeFilter(e) {
      return String(e ?? "").trim().toLocaleLowerCase();
    },
    focusSearch() {
      var t;
      const e = this.multiple ? this.$refs.searchInput : this.$refs.filterInput;
      e && typeof e.focus == "function" && (e.focus(), (t = e.select) == null || t.call(e));
    },
    onTriggerClick(e) {
      e(), this.multiple && this.menuOpen && this.$nextTick(() => this.focusSearch());
    },
    isListboxScrollable() {
      const e = this.$refs.listbox;
      return e ? e.scrollHeight > e.clientHeight + 2 : !1;
    },
    scrollSelectedIntoView() {
      const e = this.$refs.listbox;
      if (!e) return;
      const t = e.querySelector('[role="option"][aria-selected="true"]');
      t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
    },
    labelForValue(e) {
      const t = this.normalizedOptions.find((i) => String(i.value) === String(e));
      return t ? t.label : String(e);
    },
    isSelected(e) {
      return this.multiple ? this.selectedValues.some((t) => String(t) === String(e.value)) : String(e.value) === this.stringValue;
    },
    pick(e, t) {
      if (this.multiple) {
        this.toggleValue(e), this.$nextTick(() => this.focusSearch());
        return;
      }
      this.$emit("update:modelValue", e.value), this.$emit("change", { type: "change", target: { value: String(e.value) } }), this.menuOpen = !1, t();
    },
    toggleValue(e) {
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e.value));
      i >= 0 ? t.splice(i, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e));
      i < 0 || (t.splice(i, 1), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
    },
    clearSelection() {
      this.multiple ? (this.$emit("update:modelValue", []), this.$emit("change", { type: "change", target: { value: "" } })) : (this.$emit("update:modelValue", ""), this.$emit("change", { type: "change", target: { value: "" } })), this.menuOpen = !1;
    },
    pickFirstFiltered(e) {
      if (this.filteredOptions.length === 0) return;
      const t = this.filteredOptions[0];
      if (this.multiple) {
        this.isSelected(t) || this.toggleValue(t);
        return;
      }
      this.pick(t, e);
    },
    onSearchKeydown(e) {
      if (e.key === "Enter") {
        e.preventDefault(), this.pickFirstFiltered(() => {
        });
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault(), this.menuOpen = !1;
        return;
      }
      if (this.multiple && e.key === "Backspace" && !this.filterQuery && this.selectedValues.length > 0) {
        e.preventDefault();
        const t = this.selectedValues[this.selectedValues.length - 1];
        this.removeValue(t);
      }
    }
  }
}, nr = ["name", "value"], rr = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], sr = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ar = {
  key: 1,
  class: "ui-select-values-inner"
}, lr = ["placeholder", "aria-label", "disabled"], or = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, ur = { class: "ui-select-field-suffix" }, dr = ["aria-label"], cr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, fr = ["placeholder", "aria-label", "onKeydown"], hr = ["id", "role", "aria-multiselectable", "aria-labelledby"], mr = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, pr = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function gr(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("Tag"), d = v("ui-skeleton"), c = v("ui-button"), p = v("ui-empty"), A = v("ui-popover");
  return l(), o("div", {
    class: b(n.rootClass)
  }, [
    i.name ? (l(), o("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, nr)) : h("", !0),
    g(A, {
      open: a.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (S) => a.menuOpen = S),
      placement: "bottom-start",
      "match-trigger-width": n.resolvedMatchTriggerWidth,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, Me({
      trigger: x(({ open: S, toggle: y }) => [
        f("button", I({
          type: "button",
          id: n.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": i.multiple }],
          disabled: n.isDisabled,
          "aria-expanded": S ? "true" : "false",
          "aria-haspopup": n.listboxRole,
          "aria-controls": a.listboxId,
          "aria-describedby": i.ariaDescribedby
        }, n.triggerPassthrough, {
          onClick: (C) => n.onTriggerClick(y)
        }), [
          i.prefixIcon ? (l(), o("span", sr, [
            g(s, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : h("", !0),
          i.multiple ? (l(), o("div", ar, [
            (l(!0), o($, null, W(n.selectedValues, (C) => (l(), _(u, {
              key: String(C),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (L) => n.removeValue(C)
            }, {
              default: x(() => [
                O(k(n.labelForValue(C)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            n.isFilterable ? G((l(), o("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = (C) => a.filterQuery = C),
              type: "text",
              class: b(["ui-select-values-input", { "ui-select-values-input--solo": !n.selectedValues.length }]),
              placeholder: n.multipleInputPlaceholder,
              "aria-label": n.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: n.isDisabled,
              onClick: t[1] || (t[1] = D(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...C) => n.onSearchKeydown && n.onSearchKeydown(...C))
            }, null, 42, lr)), [
              [se, a.filterQuery]
            ]) : h("", !0)
          ])) : i.loading ? (l(), o("span", or, k(n.resolvedLoadingLabel), 1)) : (l(), o("span", {
            key: 3,
            class: b(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, k(n.displayLabel), 3)),
          f("span", ur, [
            n.showClearButton ? (l(), o("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": n.clearAriaLabel,
              onClick: t[3] || (t[3] = D((...C) => n.clearSelection && n.clearSelection(...C), ["stop"]))
            }, [
              g(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, dr)) : h("", !0),
            f("span", cr, [
              g(s, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, rr)
      ]),
      content: x(({ close: S }) => [
        f("div", {
          ref: "listbox",
          id: a.listboxId,
          class: "ui-select-listbox",
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), o("div", mr, [
            (l(), o($, null, W(3, (y) => g(d, {
              key: y,
              variant: "line",
              class: b(y === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), o($, { key: 1 }, W(n.filteredOptions, (y) => (l(), _(c, {
            key: String(y.value),
            variant: n.isSelected(y) ? "solid" : "ghost",
            color: n.isSelected(y) ? "primary" : "secondary",
            size: "sm",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: b(["ui-select-option", { "ui-select-option--selected": n.isSelected(y) }]),
            "suffix-icon": n.isSelected(y) ? "check" : void 0,
            "aria-selected": n.isSelected(y) ? "true" : "false",
            onClick: (C) => n.pick(y, S)
          }, {
            default: x(() => [
              f("span", pr, k(y.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && a.filterQuery ? (l(), _(p, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: n.noResultsText
          }, null, 8, ["title"])) : (l(), _(p, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: n.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, hr)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: x(({ close: S }) => [
          G(f("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (y) => a.filterQuery = y),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = D(() => {
            }, ["prevent"])),
            onKeydown: [
              U(D((y) => n.pickFirstFiltered(S), ["prevent"]), ["enter"]),
              U(D((y) => S(), ["prevent"]), ["esc"])
            ]
          }, null, 40, fr), [
            [se, a.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: x((S) => [
          m(e.$slots, "footer", Je(et(S)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Is = /* @__PURE__ */ w(ir, [["render", gr]]), br = ["line", "circle", "block", "pill"], yr = ["sm", "md", "lg"], vr = 480, Le = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Fe = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, kr = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => br.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => yr.includes(e)
    }
  },
  setup(e) {
    const t = tt(), i = M(() => !!t.default), r = R(null), a = R(null), n = R(null), s = R(null), u = R(!1), d = R(!1), c = R(!1), p = R(!1), A = M(
      () => e.loading || d.value
    ), S = M(
      () => e.loading || d.value
    );
    it(() => {
      p.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), nt(
      () => e.loading,
      async (z, Y) => {
        var j, ne, re;
        if (z) {
          d.value = !1, c.value = !1, s.value = null, u.value = !1;
          return;
        }
        if (Y !== !0) return;
        if (p.value) {
          d.value = !1, s.value = null, u.value = !1;
          return;
        }
        const N = ((j = r.value) == null ? void 0 : j.offsetHeight) ?? ((ne = a.value) == null ? void 0 : ne.offsetHeight) ?? 0;
        d.value = !0, c.value = !1, u.value = !0, s.value = N, await ae();
        const H = ((re = n.value) == null ? void 0 : re.scrollHeight) ?? N;
        if (N <= 0 && H <= 0) {
          y();
          return;
        }
        await ae(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.value = H, c.value = !0;
          });
        }), setTimeout(y, vr + 40);
      }
    );
    function y() {
      d.value = !1, c.value = !1, s.value = null, u.value = !1;
    }
    function C(z) {
      z.target === r.value && z.propertyName === "height" && (e.loading || u.value && y());
    }
    const L = M(() => {
      if (s.value != null)
        return { height: `${s.value}px` };
    }), B = M(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !d.value,
      "ui-skeleton-placeholder--overlay": d.value,
      "ui-skeleton-placeholder--fade-out": d.value
    })), P = M(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !d.value,
      "ui-skeleton-content-wrap--revealing": d.value,
      "ui-skeleton-content-wrap--revealing-visible": d.value && c.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !d.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: a,
      contentWrapRef: n,
      hostStyle: L,
      heightAnimActive: u,
      isRevealing: d,
      showPlaceholder: A,
      isBusy: S,
      placeholderClass: B,
      contentWrapClass: P,
      onHostTransitionEnd: C
    };
  },
  computed: {
    variantClass() {
      return Le[this.variant] || Le.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Fe[this.size] || Fe.md;
    },
    skeletonClass() {
      return T(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return T(
        "ui-skeleton-host",
        this.heightAnimActive && "ui-skeleton-host--height-active",
        (this.loading || this.isRevealing) && "ui-skeleton-host--busy",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Sr = ["aria-busy"], xr = ["aria-hidden"];
function wr(e, t, i, r, a, n) {
  return r.hasDefaultSlot ? (l(), o("div", I({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...s) => r.onHostTransitionEnd && r.onHostTransitionEnd(...s))
  }), [
    G(f("div", {
      ref: "placeholderRef",
      class: b(["ui-skeleton-placeholder", r.placeholderClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = f("div", { class: "ui-skeleton-default-rows" }, [
          f("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          f("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          f("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [Ne, r.showPlaceholder]
    ]),
    f("div", {
      ref: "contentWrapRef",
      class: b(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      f("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, xr)
    ], 2)
  ], 16, Sr)) : (l(), o("div", I({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const As = /* @__PURE__ */ w(kr, [["render", wr]]), _r = {
  name: "TabList",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    /** `tablist` erişilebilir adı (birden fazla sekme şeridi için önerilir). */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    ariaOrientation() {
      var e;
      return ((e = this.uiTabs) == null ? void 0 : e.orientation) === "vertical" ? "vertical" : "horizontal";
    },
    listClass() {
      var r, a;
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", i = ((a = this.uiTabs) == null ? void 0 : a.variant) === "segmented" && !e ? "segmented" : "line";
      return T(
        "ui-tab-list",
        i === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
        e ? "ui-tab-list--vertical" : "ui-tab-list--horizontal",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    /** Klavye: ok tuşları ile tetikleyiciler arasında odak (yatay/dikey). */
    onKeydown(e) {
      var p, A;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], a = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let s = 0;
      if (r.includes(n)) s = 1;
      else if (a.includes(n)) s = -1;
      else return;
      e.preventDefault();
      const u = document.activeElement;
      let d = i.indexOf(u);
      d === -1 && (d = i.findIndex((S) => S.getAttribute("aria-selected") === "true")), d === -1 && (d = 0);
      let c = d + s;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (A = (p = i[c]) == null ? void 0 : p.focus) == null || A.call(p);
    }
  }
}, Cr = ["aria-label", "aria-orientation"];
function Tr(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...s) => n.onKeydown && n.onKeydown(...s))
  }), [
    m(e.$slots, "default")
  ], 16, Cr);
}
const zs = /* @__PURE__ */ w(_r, [["render", Tr]]), Ir = ie("ui-tabs"), Ar = ["line", "segmented"], zr = {
  name: "Tabs",
  inheritAttrs: !1,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null
    },
    /** `line` — alt çizgi; `segmented` — Apple tarzı segment kontrolü (ikon + etiket, yatay). */
    variant: {
      type: String,
      default: "line",
      validator: (e) => Ar.includes(e)
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => e === "horizontal" || e === "vertical"
    },
    /** `full` — segmented tab listesi tam genişlik (hub / show sayfaları). */
    fit: {
      type: String,
      default: "",
      validator: (e) => e === "" || e === "full"
    },
    /** Segmented yükseklik / tipografi — `md` (varsayılan) veya `lg`. */
    size: {
      type: String,
      default: "md",
      validator: (e) => e === "md" || e === "lg"
    },
    /** Segmented iz arka planını kaldırır (mobil sabit üst şerit vb.). */
    transparent: {
      type: Boolean,
      default: !1
    },
    /** Mobilde segmented tab listesinde yatay kaydırma; varsayılan kapalı (`fit="full"` ile eşit bölünür). */
    scrollable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      baseId: Ir()
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    rootClass() {
      return T(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.variant === "segmented" && this.size === "lg" ? "ui-tabs--segmented-lg" : "",
        this.transparent ? "ui-tabs--transparent" : "",
        this.scrollable ? "ui-tabs--scrollable" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    setValue(e) {
      this.$emit("update:modelValue", e);
    },
    tabSlug(e) {
      return String(e).replace(/[^a-zA-Z0-9_-]/g, "_");
    },
    triggerId(e) {
      return `${this.baseId}-tab-${this.tabSlug(e)}`;
    },
    panelId(e) {
      return `${this.baseId}-panel-${this.tabSlug(e)}`;
    },
    isSelected(e) {
      return Object.is(this.modelValue, e);
    }
  }
};
function Lr(e, t, i, r, a, n) {
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Ls = /* @__PURE__ */ w(zr, [["render", Lr]]), Fr = ["solid", "regular", "brands", "light", "duotone", "thin"], Dr = {
  name: "TabTrigger",
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
    },
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: ""
    },
    /** `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Fr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Doluysa sekme köşesinde sayı rozeti (ör. sepet adedi). */
    badge: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    /** `segmented` yalnızca yatay `ui-tabs` içinde geçerlidir. */
    triggerKind() {
      if (!this.uiTabs) return "line";
      const e = this.uiTabs.variant, t = this.uiTabs.orientation === "vertical";
      return e === "segmented" && !t ? "segmented" : "line";
    },
    tabIconSize() {
      var e;
      return this.triggerKind === "segmented" ? ((e = this.uiTabs) == null ? void 0 : e.size) === "lg" ? "lg" : "md" : "xs";
    },
    /** FA Pro: segment kartlarında da varsayılan `light` kullanılır. */
    tabIconType() {
      return this.iconType;
    },
    isSelected() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    showBadge() {
      const e = Number(this.badge);
      return this.badge != null && this.badge !== "" && Number.isFinite(e) && e > 0;
    },
    badgeLabel() {
      const e = Number(this.badge);
      return !Number.isFinite(e) || e <= 0 ? "" : e > 99 ? "99+" : String(e);
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerClass() {
      const e = this.triggerKind;
      return T(
        "ui-tab-trigger",
        e === "segmented" ? "ui-tab-trigger--segmented" : "ui-tab-trigger--line",
        this.isSelected && (e === "segmented" ? "ui-tab-trigger--segmented-selected" : "ui-tab-trigger--line-selected"),
        this.disabled ? "ui-tab-trigger--disabled" : "",
        this.$attrs.class
      );
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiTabs || this.uiTabs.setValue(this.value);
    }
  }
}, $r = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], Rr = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" }, Br = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function Pr(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("ui-badge");
  return l(), o("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: b(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": n.panelDomId,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...d) => n.select && n.select(...d))
  }, [
    i.icon ? (l(), _(s, {
      key: 0,
      name: i.icon,
      type: n.tabIconType,
      size: n.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : h("", !0),
    f("span", Rr, [
      m(e.$slots, "default", {}, () => [
        O(k(i.label), 1)
      ])
    ]),
    n.showBadge ? (l(), o("span", Br, [
      g(u, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: x(() => [
          O(k(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : h("", !0)
  ], 10, $r);
}
const Fs = /* @__PURE__ */ w(Dr, [["render", Pr]]), V = rt({
  /** @type {ToastItem[]} */
  items: []
});
let De = 0;
function Ds(e = {}) {
  De += 1;
  const t = De, i = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return V.items.push(i), i.duration > 0 && (i._timer = setTimeout(() => qe(t), i.duration)), t;
}
function qe(e) {
  const t = V.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = V.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), V.items.splice(t, 1);
}
function $s() {
  for (const e of V.items)
    e._timer && clearTimeout(e._timer);
  V.items.splice(0);
}
const $e = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Re = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Er = {
  name: "Toast",
  computed: {
    items() {
      return V.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: qe,
    iconFor(e) {
      return $e[e] || $e.info;
    },
    iconToneClass(e) {
      return Re[e] || Re.info;
    },
    toastClasses(e) {
      return [`ui-alert ui-alert--${e.variant ?? "info"} ui-alert--toast`];
    },
    toastA11y(e) {
      const t = e.variant === "error";
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite"
      };
    }
  }
}, Or = { class: "ui-toast-host" }, Vr = { class: "ui-alert-body" }, Nr = {
  key: 0,
  class: "ui-alert-title"
}, Mr = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Hr(e, t, i, r, a, n) {
  const s = v("ui-icon"), u = v("ui-button");
  return l(), _(Q, { to: "body" }, [
    f("div", Or, [
      g(st, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: x(() => [
          (l(!0), o($, null, W(n.items, (d) => (l(), o("div", {
            key: d.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            f("div", I({
              class: [n.toastClasses(d), "pointer-events-auto"]
            }, { ref_for: !0 }, n.toastA11y(d)), [
              f("span", {
                class: b(["ui-alert-icon", n.iconToneClass(d.variant)]),
                "aria-hidden": "true"
              }, [
                g(s, {
                  name: n.iconFor(d.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              f("div", Vr, [
                d.title ? (l(), o("p", Nr, k(d.title), 1)) : h("", !0),
                d.description ? (l(), o("p", Mr, k(d.description), 1)) : h("", !0)
              ]),
              g(u, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": n.dismissLabel,
                onClick: (c) => n.queueDismissToast(d.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const Rs = /* @__PURE__ */ w(Er, [["render", Hr]]), Bs = {
  ui: {
    button: {
      loading: "Loading"
    },
    icon: {
      accessible: "{name} icon"
    },
    alert: {
      dismiss: "Dismiss"
    },
    dialog: {
      close: "Close"
    },
    guidance: {
      go: "Continue",
      close: "Close"
    },
    confirm: {
      ok: "OK",
      cancel: "Cancel",
      fallbackAria: "Confirm"
    },
    tag: {
      remove: "Remove tag"
    },
    phone: {
      countryAria: "Country code",
      placeholder: "555 000 0000"
    },
    password: {
      show: "Show password",
      hide: "Hide password",
      strength: {
        weak: "Weak",
        fair: "Fair",
        good: "Good",
        strong: "Strong"
      }
    },
    pin: {
      ariaLabel: "Verification code",
      cell: "Digit {n} of {total}"
    },
    progress: {
      ariaLabel: "Progress"
    },
    select: {
      placeholder: "Select",
      filterPlaceholder: "Search…",
      noResults: "No results",
      empty: "No options",
      loading: "Loading…",
      clear: "Clear selection"
    },
    colorPicker: {
      triggerPlaceholder: "Pick a color",
      popoverTitle: "Color palette",
      clear: "Clear",
      customHex: "Custom color (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "Pick an icon",
      popoverTitle: "Icons",
      clear: "Clear",
      searchPlaceholder: "Search icons…",
      noResults: "No results"
    },
    datePicker: {
      today: "Today",
      yesterday: "Yesterday"
    },
    dateRangePicker: {
      placeholder: "Select date range",
      selectEnd: "Select end date",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      quickAria: "Quick date ranges",
      today: "Today",
      yesterday: "Yesterday",
      thisMonth: "This month ({month})",
      lastMonth: "Last month ({month})"
    },
    timePicker: {
      placeholder: "Select time",
      hourAria: "Hour",
      minuteAria: "Minute"
    },
    photo: {
      fallbackAlt: "Photo",
      previewAria: "Photo preview",
      prev: "Previous photo",
      next: "Next photo",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, Ps = {
  ui: {
    button: {
      /** Yükleme sırasında ekran okuyucu / varsayılan `loading-text` */
      loading: "Yükleniyor"
    },
    icon: {
      /** `show-accessible-name` açıkken `aria-label` (name = ikon adı, fa- öneki yok) */
      accessible: "{name} ikon"
    },
    alert: {
      /** Alert / Toast kapat düğmesi */
      dismiss: "Kapat"
    },
    dialog: {
      close: "Kapat"
    },
    guidance: {
      go: "Devam",
      close: "Kapat"
    },
    confirm: {
      ok: "Tamam",
      cancel: "İptal",
      /** Başlık yokken diyalog erişilebilir adı */
      fallbackAria: "Onay"
    },
    tag: {
      /** Tag kapat düğmesi `aria-label` */
      remove: "Etiketi kaldır"
    },
    phone: {
      countryAria: "Ülke kodu",
      placeholder: "5XX XXX XX XX"
    },
    password: {
      show: "Şifreyi göster",
      hide: "Şifreyi gizle",
      strength: {
        weak: "Zayıf",
        fair: "Orta",
        good: "İyi",
        strong: "Güçlü"
      }
    },
    pin: {
      ariaLabel: "Doğrulama kodu",
      cell: "{n}. hane, toplam {total}"
    },
    progress: {
      ariaLabel: "İlerleme"
    },
    select: {
      placeholder: "Seçiniz",
      filterPlaceholder: "Ara…",
      noResults: "Sonuç bulunamadı",
      empty: "Seçenek yok",
      loading: "Yükleniyor…",
      clear: "Seçimi temizle"
    },
    colorPicker: {
      triggerPlaceholder: "Renk seçin",
      popoverTitle: "Renk paleti",
      clear: "Temizle",
      customHex: "Özel renk (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "İkon seçin",
      popoverTitle: "İkonlar",
      clear: "Temizle",
      searchPlaceholder: "İkon ara…",
      noResults: "Sonuç bulunamadı"
    },
    datePicker: {
      today: "Bugün",
      yesterday: "Dün"
    },
    dateRangePicker: {
      placeholder: "Tarih aralığı seçin",
      selectEnd: "Bitiş tarihini seçin",
      prevMonth: "Önceki ay",
      nextMonth: "Sonraki ay",
      quickAria: "Hızlı tarih aralığı",
      today: "Bugün",
      yesterday: "Dün",
      thisMonth: "Bu ay ({month})",
      lastMonth: "Geçen ay ({month})"
    },
    timePicker: {
      placeholder: "Saat seçin",
      hourAria: "Saat",
      minuteAria: "Dakika"
    },
    photo: {
      fallbackAlt: "Görsel",
      previewAria: "Görsel önizleme",
      prev: "Önceki görsel",
      next: "Sonraki görsel",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, jr = "fewui-google-fonts", Wr = Object.freeze([
  { value: "Inter", label: "Inter" },
  { value: "Poppins", label: "Poppins" },
  { value: "Roboto", label: "Roboto" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Lato", label: "Lato" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Nunito", label: "Nunito" },
  { value: "Raleway", label: "Raleway" },
  { value: "Work Sans", label: "Work Sans" },
  { value: "Source Sans 3", label: "Source Sans 3" },
  { value: "DM Sans", label: "DM Sans" },
  { value: "Outfit", label: "Outfit" },
  { value: "Manrope", label: "Manrope" },
  { value: "Plus Jakarta Sans", label: "Plus Jakarta Sans" },
  { value: "Merriweather", label: "Merriweather" },
  { value: "Playfair Display", label: "Playfair Display" },
  { value: "Libre Baskerville", label: "Libre Baskerville" }
]);
function Es() {
  return Wr.map((e) => ({ ...e }));
}
function Ge(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function Ue(e) {
  const t = [...new Set(
    (e || []).map((r) => String(r || "").trim()).filter(Boolean)
  )];
  return t.length ? `https://fonts.googleapis.com/css2?${t.map((r) => `family=${encodeURIComponent(r).replace(/%20/g, "+")}:wght@400;500;600`).join("&")}&display=swap` : null;
}
function Os(e = {}) {
  const { body: t, heading: i } = Ge(e), r = Ue([t, i]);
  return r ? `<link rel="stylesheet" href="${r}">` : "";
}
function Yr(e = {}, t = {}) {
  if (typeof document > "u") return null;
  const { body: i, heading: r } = Ge(e), a = Ue([i, r]);
  if (!a) return null;
  const n = t.id || jr;
  let s = document.getElementById(n);
  return s || (s = document.createElement("link"), s.id = n, s.rel = "stylesheet", document.head.appendChild(s)), s.getAttribute("href") !== a && s.setAttribute("href", a), a;
}
const Kr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], qr = "ui-sans-serif, system-ui, sans-serif", Be = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Pe = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function Gr(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function Ee(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${t}, ${qr}`;
}
function Ur(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Qr(e, t, i) {
  const [r, a, n] = [e, t, i].map((s) => {
    const u = s / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * n;
}
function Zr(e, t = "#ffffff", i = "#0a0a0b") {
  const r = Ur(e);
  return r && Qr(...r) > 0.4 ? i : t;
}
function Xr(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function Jr(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function es(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Be[t] != null ? Be[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ts(e) {
  return e == null || e === "" ? null : Pe[e] ? Pe[e] : String(e);
}
function ee(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = Jr(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const a = es(i.backdropBlur ?? i.backdropFilter);
  a && (e[`--ui-${t}-backdrop-blur`] = a);
  const n = ts(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function Oe(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const a = e[i];
  if (a != null && a !== "")
    return String(a);
}
function Vs(e = {}, t = {}) {
  const i = Gr(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = Qe(e);
  for (const [a, n] of Object.entries(r))
    i.style.setProperty(a, n);
  return Yr(e), { ...r };
}
function Qe(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = Ee(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = Ee(r)), e.baseColor && typeof e.baseColor == "object")
    for (const u of Kr) {
      const d = e.baseColor[u];
      d != null && d !== "" && (t[`--base-${u}`] = String(d));
    }
  const a = [
    ["background", "--background"],
    ["foreground", "--foreground"],
    ["surface", "--surface"],
    ["surfaceForeground", "--surface-foreground"],
    ["control", "--control"],
    ["controlForeground", "--control-foreground"],
    ["primaryForeground", "--primary-foreground"],
    ["secondaryForeground", "--secondary-foreground"],
    ["border", "--border"],
    ["ring", "--ring"],
    ["muted", "--muted"],
    ["mutedForeground", "--muted-foreground"],
    ["accent", "--accent"],
    ["accentForeground", "--accent-foreground"]
  ];
  for (const [u, d] of a) {
    const c = e[u];
    c != null && c !== "" && (t[d] = String(c));
  }
  const n = Oe(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = Zr(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const s = Oe(e, "secondaryColor", "secondary");
  if (s && (t["--secondary"] = s), ee(t, "surface", e.surfaceStyle), ee(t, "control", e.controlStyle), ee(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [u, d] of Object.entries(e.colors))
      d != null && d !== "" && (t[Xr(u)] = String(d));
  return t;
}
function Ns(e = {}) {
  const t = Qe(e), i = Object.entries(t).map(([a, n]) => `${a}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function is(e, t) {
  return {
    ...e,
    ...t,
    baseColor: {
      ...e.baseColor,
      ...t.baseColor
    },
    surfaceStyle: {
      ...e.surfaceStyle,
      ...t.surfaceStyle
    },
    controlStyle: {
      ...e.controlStyle,
      ...t.controlStyle
    },
    inputStyle: {
      ...e.inputStyle,
      ...t.inputStyle
    },
    colors: {
      ...e.colors,
      ...t.colors
    }
  };
}
function ns(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function te(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function Ve(e, t, i) {
  return `#${te(e)}${te(t)}${te(i)}`;
}
function rs(e) {
  const t = ns(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, a] = t, n = Ve(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    a + (255 - a) * 0.12
  ), s = Ve(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    a + (255 - a) * 0.08
  );
  return { accent: n, brandAccent: s };
}
function Ms(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = rs(String(i)), a = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (a.accent = r.accent), (t.force || !a.colors["brand-accent"]) && (a.colors["brand-accent"] = r.brandAccent), a;
}
function Hs(e, t = "#f97316") {
  if (!e || typeof e != "object") return t;
  const i = typeof e.primaryColor == "string" ? e.primaryColor.trim() : "";
  if (i) return i;
  const r = e.theme && typeof e.theme == "object" ? e.theme : null;
  if (r) {
    const a = typeof r.primaryColor == "string" ? r.primaryColor.trim() : typeof r.primary == "string" ? r.primary.trim() : "";
    if (a) return a;
  }
  return t;
}
const Ze = "fewui-theme-custom-css";
function ss(e, t = Ze) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function js(e = Ze) {
  ss("", e);
}
const Xe = {
  mode: "dark",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter"
}, as = {
  mode: "dark",
  fontFamily: "Inter",
  surfaceStyle: {
    mixFrom: "background",
    opacity: 100,
    backdropBlur: "none"
  },
  controlStyle: {
    mixFrom: "background",
    opacity: 100,
    backdropBlur: "none"
  },
  inputStyle: {
    mixFrom: "background",
    opacity: 100,
    backdropBlur: "none"
  }
}, ls = {
  mode: "dark",
  fontFamily: "Poppins",
  headingFontFamily: "Poppins",
  bodyFontFamily: "Poppins",
  primaryColor: "#f97316",
  primaryForeground: "#ffffff",
  secondaryColor: "#404040",
  background: "#0a0a0a",
  foreground: "#fafafa",
  surface: "#171717",
  surfaceForeground: "#fafafa",
  control: "#262626",
  controlForeground: "#fafafa",
  mutedForeground: "#a3a3a3",
  surfaceStyle: {
    mixFrom: "foreground",
    opacity: 6,
    backdropBlur: "md"
  },
  controlStyle: {
    mixFrom: "foreground",
    opacity: 8,
    backdropBlur: "md"
  },
  inputStyle: {
    mixFrom: "foreground",
    opacity: 8,
    backdropBlur: "sm"
  },
  baseColor: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  colors: {
    "brand-accent": "#fbbf24"
  }
}, os = {
  panel: Xe,
  flat: as,
  landing: ls
}, Ws = ["panel", "flat", "landing"];
function us(e = "panel") {
  const t = String(e || "panel").trim(), i = os[t] || Xe;
  return structuredClone(i);
}
function Ys(e, t = {}) {
  return is(us(e), t);
}
export {
  Ps as $,
  fs as A,
  $t as B,
  ps as C,
  Ze as D,
  vs as E,
  ks as F,
  Wr as G,
  ie as H,
  Ss as I,
  rs as J,
  qe as K,
  Bs as L,
  us as M,
  Es as N,
  is as O,
  ws as P,
  Ye as Q,
  Cs as R,
  Is as S,
  os as T,
  Ds as U,
  Hs as V,
  Ge as W,
  Ys as X,
  Qe as Y,
  je as Z,
  w as _,
  hs as a,
  Ms as a0,
  ms as b,
  gs as c,
  ys as d,
  We as e,
  xs as f,
  _s as g,
  Ts as h,
  As as i,
  Ws as j,
  zs as k,
  Fs as l,
  Ls as m,
  Jn as n,
  Rs as o,
  He as p,
  Yr as q,
  ss as r,
  Vs as s,
  Os as t,
  Ue as u,
  Ns as v,
  js as w,
  $s as x,
  T as y,
  bs as z
};
//# sourceMappingURL=index-DHtAoZ3d.js.map
