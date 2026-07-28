import { openBlock as l, createElementBlock as u, mergeProps as I, renderSlot as m, resolveComponent as k, normalizeClass as y, createVNode as p, createCommentVNode as h, createElementVNode as f, toDisplayString as b, createBlock as w, Teleport as Z, Transition as G, withCtx as S, normalizeStyle as Q, createTextVNode as F, ref as P, Fragment as B, Comment as at, Text as lt, withModifiers as A, renderList as H, withKeys as q, createSlots as We, withDirectives as re, vModelText as oe, normalizeProps as ot, guardReactiveProps as ut, vShow as dt, useSlots as ct, computed as N, onMounted as ft, watch as ht, nextTick as ue, reactive as mt, TransitionGroup as pt } from "vue";
import { RouterLink as gt } from "vue-router";
const _ = (e, t) => {
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
const bt = ["horizontal", "vertical"], yt = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => bt.includes(e)
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     */
    joined: {
      type: Boolean,
      default: !1
    },
    /**
     * Yatayda çocuklar eşit büyür; içerik genişliğinin altına inmez
     * (`min-width: max-content` — erken “…” kesilmesini önler).
     */
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
}, vt = ["aria-label"];
function kt(e, t, i, r, a, n) {
  return l(), u("div", I({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, vt);
}
const Ls = /* @__PURE__ */ _(yt, [["render", kt]]), St = ["info", "success", "warning", "error"], de = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, ce = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, wt = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => St.includes(e)
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
    },
    /** Sayfa üstünde ince, tam genişlikte durum çubuğu. */
    banner: {
      type: Boolean,
      default: !1
    },
    /** Sidebar / dar alan: kompakt, daha yuvarlak, bordersız. */
    soft: {
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
      return this.icon || de[this.variant] || de.info;
    },
    iconToneClass() {
      return ce[this.variant] || ce.info;
    },
    rootClasses() {
      return T(
        `ui-alert ui-alert--${this.variant}`,
        this.banner ? "ui-alert--banner" : "",
        this.soft ? "ui-alert--soft" : "",
        this.$attrs.class
      );
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
}, xt = ["role"], _t = { class: "ui-alert-body" }, Ct = {
  key: 0,
  class: "ui-alert-title"
}, Tt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, It = {
  key: 2,
  class: "ui-alert-slot"
};
function zt(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("ui-button");
  return l(), u("div", I({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), u("span", {
      key: 0,
      class: y(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        p(s, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : h("", !0),
    f("div", _t, [
      i.title ? (l(), u("p", Ct, b(i.title), 1)) : h("", !0),
      i.description ? (l(), u("p", Tt, b(i.description), 1)) : h("", !0),
      e.$slots.default ? (l(), u("div", It, [
        m(e.$slots, "default")
      ])) : h("", !0)
    ]),
    i.dismissible ? (l(), w(d, {
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
  ], 16, xt);
}
const As = /* @__PURE__ */ _(wt, [["render", zt]]);
let Lt = 0;
const At = ["top", "bottom", "left", "right"], D = 8, Ft = {
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
      validator: (e) => At.includes(e)
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
      tooltipId: `ui-tooltip-${++Lt}`,
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
      const t = e.getBoundingClientRect(), i = D, r = t.left + t.width / 2, a = t.top + t.height / 2;
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
      t === "top" && s.top < D ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, s = r.getBoundingClientRect()) : t === "bottom" && s.bottom > n - D && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, s = r.getBoundingClientRect());
      let d = 0, o = 0;
      if (s.left < D ? d = D - s.left : s.right > a - D && (d = a - D - s.right), s.top < D ? o = D - s.top : s.bottom > n - D && (o = n - D - s.bottom), d === 0 && o === 0) return;
      const c = parseFloat(this.panelStyle.left), g = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(g) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + d}px`,
        top: `${g + o}px`
      });
    }
  }
}, Dt = ["id"], Bt = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function Rt(e, t, i, r, a, n) {
  return l(), u("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...s) => n.onEnter && n.onEnter(...s)),
    onMouseleave: t[1] || (t[1] = (...s) => n.onLeave && n.onLeave(...s)),
    onFocusin: t[2] || (t[2] = (...s) => n.onFocusIn && n.onFocusIn(...s)),
    onFocusout: t[3] || (t[3] = (...s) => n.onFocusOut && n.onFocusOut(...s))
  }, [
    m(e.$slots, "default"),
    (l(), w(Z, { to: "body" }, [
      p(G, { name: "ui-tooltip-fade" }, {
        default: S(() => [
          a.open && !i.disabled && n.hasContent ? (l(), u("div", {
            key: 0,
            id: a.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: Q(a.panelStyle),
            role: "tooltip"
          }, [
            f("span", Bt, [
              m(e.$slots, "content", {}, () => [
                F(b(i.label), 1)
              ])
            ])
          ], 12, Dt)) : h("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const Ye = /* @__PURE__ */ _(Ft, [["render", Rt]]), Pt = [
  "solid",
  "secondary",
  "outline",
  "success",
  "warning",
  "danger",
  "error",
  "destructive",
  "muted",
  "info"
], $t = ["xs", "sm", "md", "lg"], fe = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground",
  success: "border border-transparent bg-success text-success-foreground",
  warning: "border border-transparent bg-warning text-warning-foreground",
  danger: "border border-transparent bg-destructive text-destructive-foreground",
  error: "border border-transparent bg-destructive text-destructive-foreground",
  destructive: "border border-transparent bg-destructive text-destructive-foreground",
  muted: "border border-transparent bg-muted text-muted-foreground",
  info: "border border-transparent bg-info text-info-foreground"
}, he = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, X = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
};
function Et(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function Ot(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const Vt = {
  name: "Badge",
  components: { Tooltip: Ye },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Pt.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => $t.includes(e)
    },
    /** Uzun metinde kısaltma (…) — `maxWidth` üst sınırından sonra (varsayılan ~12rem) */
    truncate: {
      type: Boolean,
      default: !0
    },
    /** Tailwind max-w-* anahtarı: 32, 40, 48, 64, full — truncate açıkken üst sınır */
    maxWidth: {
      type: String,
      default: "48",
      validator: (e) => Object.keys(X).includes(e)
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
      return this.truncate ? X[this.maxWidth] || X[48] : "";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return Et(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: Ot(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        he[this.size] || he.sm,
        !this.normalizedHex && (fe[this.variant] || fe.solid)
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
}, Nt = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, Mt = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function Ht(e, t, i, r, a, n) {
  const s = k("Tooltip");
  return l(), w(s, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: S(() => [
      f("span", {
        class: y(n.badgeClasses),
        style: Q(n.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (l(), u("span", Nt, [
          m(e.$slots, "prepend")
        ])) : h("", !0),
        f("span", {
          ref: "labelRef",
          class: y(["ui-badge-label", [n.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (l(), u("span", Mt, [
          m(e.$slots, "append")
        ])) : h("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const jt = /* @__PURE__ */ _(Vt, [["render", Ht]]), Ke = "(max-width: 767px)", Ge = P(!1);
function J() {
  typeof window > "u" || (Ge.value = window.matchMedia(Ke).matches);
}
if (typeof window < "u") {
  J();
  const e = window.matchMedia(Ke);
  typeof e.addEventListener == "function" ? e.addEventListener("change", J) : typeof e.addListener == "function" && e.addListener(J);
}
function U() {
  return Ge.value;
}
function Y(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = U();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
function Qe(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const Wt = ["sm", "md", "lg"], Yt = ["solid", "outline", "ghost", "link", "nav"], Kt = ["primary", "secondary", "input", "warning", "success", "info", "danger"], Gt = ["button", "submit", "reset"], me = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, pe = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, Qt = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ge = {
  solid: {
    primary: "border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border border-transparent text-foreground shadow-none",
    input: "border-0 shadow-none",
    warning: "border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border-0 bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border-0 bg-info text-info-foreground shadow-none hover:opacity-90",
    danger: "border-0 bg-destructive text-destructive-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-current bg-transparent text-primary shadow-none hover:bg-primary/10",
    secondary: "border bg-transparent text-foreground shadow-none hover:bg-[var(--input-background)]",
    warning: "shadow-none border border-current bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-current bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-current bg-transparent text-info hover:bg-info/10",
    danger: "shadow-none border border-current bg-transparent text-destructive hover:bg-destructive/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground",
    danger: "shadow-none border-0 bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline",
    danger: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-destructive underline-offset-4 hover:underline"
  },
  nav: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent",
    input: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-transparent",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-transparent",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-transparent",
    danger: "shadow-none border-0 bg-transparent text-destructive hover:bg-transparent"
  }
}, qt = {
  name: "Button",
  components: { RouterLink: gt },
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
      validator: (e) => Gt.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Yt.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => Kt.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Wt.includes(e)
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
     * Boş / comment-only default slot (ör. `v-if` kapalı) merkezi düzeni bozmasın.
     */
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
    },
    hasRenderableDefaultSlot() {
      const e = this.$slots.default;
      return e ? e().some((t) => this.isRenderableVNode(t)) : !1;
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    resolvedSize() {
      return Y(this.size, { defaultSize: "md" });
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : Qe(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center";
      return this.fulled || this.block || this.variant === "nav" ? ["ui-button-text min-w-0 flex-1 truncate", e].join(" ") : ["ui-button-text whitespace-nowrap", e].join(" ");
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.resolvedSize === "lg" ? "sm" : "xs";
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      return { sm: "xs", md: "sm", lg: "sm" }[this.resolvedSize] || "sm";
    },
    buttonClasses() {
      var s, d;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.cubed && !e && !t ? i = pe[this.resolvedSize] || pe.md : e ? i = Qt[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = me[this.resolvedSize] || me.md;
      let r = "";
      !e && !t && (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full");
      const a = ((s = ge[this.variant]) == null ? void 0 : s[this.color]) || ((d = ge.solid) == null ? void 0 : d.primary), n = this.fulled || this.block;
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
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === at) return !1;
      if (e.type === lt)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === B) {
        const t = e.children;
        return Array.isArray(t) ? t.some((i) => this.isRenderableVNode(i)) : !1;
      }
      return !0;
    },
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
}, Ut = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], Zt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Xt = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Jt = {
  key: 0,
  class: "sr-only"
}, ei = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, ti = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, ii = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, ni = ["type", "disabled", "data-variant", "data-color"], ri = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, si = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, ai = {
  key: 0,
  class: "sr-only"
}, li = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, oi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, ui = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function di(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("RouterLink");
  return n.hasRouterTo ? (l(), w(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: S(({ href: o, navigate: c }) => [
      f("a", {
        href: o,
        class: y(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (g) => n.onRouterLinkClick(g, c)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), u("span", Zt, [
          p(s, {
            size: n.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : i.loading ? (l(), u(B, { key: 1 }, [
          f("span", Xt, [
            p(s, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          f("span", {
            class: y(n.textContentClass)
          }, [
            n.resolvedLoadingText ? (l(), u("span", Jt, b(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : n.usesCubedCenterLayout ? (l(), u("span", ei, [
          i.prefixIcon ? (l(), w(s, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), w(s, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (l(), u(B, { key: 3 }, [
          i.prefixIcon ? (l(), u("span", ti, [
            p(s, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : h("", !0),
          f("span", {
            class: y(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), u("span", ii, [
            p(s, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : h("", !0)
        ], 64))
      ], 10, Ut)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), u("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: y(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    onClick: t[0] || (t[0] = (...o) => n.onClick && n.onClick(...o))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), u("span", ri, [
      p(s, {
        size: n.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : i.loading ? (l(), u(B, { key: 1 }, [
      f("span", si, [
        p(s, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      f("span", {
        class: y(n.textContentClass)
      }, [
        n.resolvedLoadingText ? (l(), u("span", ai, b(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : n.usesCubedCenterLayout ? (l(), u("span", li, [
      i.prefixIcon ? (l(), w(s, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), w(s, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (l(), u(B, { key: 3 }, [
      i.prefixIcon ? (l(), u("span", oi, [
        p(s, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : h("", !0),
      f("span", {
        class: y(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), u("span", ui, [
        p(s, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : h("", !0)
    ], 64))
  ], 10, ni));
}
const Fs = /* @__PURE__ */ _(qt, [["render", di]]), ci = ["none", "sm", "md"], be = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, fi = {
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
      validator: (e) => ci.includes(e)
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
      return ["ui-divider", be[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        be[this.spacing] || "",
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
}, hi = { class: "ui-divider__label" }, mi = {
  key: 1,
  class: "ui-section-label"
};
function pi(e, t, i, r, a, n) {
  const s = k("ui-icon");
  return n.hasLabel ? (l(), u("div", I({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = f("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    f("span", hi, [
      i.icon ? (l(), w(s, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : h("", !0),
      i.title ? (l(), u("span", mi, b(i.title), 1)) : h("", !0)
    ]),
    t[1] || (t[1] = f("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), u("hr", I({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const qe = /* @__PURE__ */ _(fi, [["render", pi]]), gi = ["solid", "dashed", "dotted", "double"], ye = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, bi = ["solid", "regular", "brands", "light", "duotone", "thin"], yi = {
  name: "Card",
  components: { Divider: qe },
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
      validator: (e) => gi.includes(e)
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
      validator: (e) => bi.includes(e)
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
      return ye[this.borderType] || ye.solid;
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
}, vi = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, ki = {
  key: 0,
  class: "ui-header-lead"
}, Si = { class: "ui-header-lead__main" }, wi = {
  key: 0,
  class: "ui-header-lead__icon"
}, xi = { class: "ui-header-lead__text" }, _i = {
  key: 0,
  class: "ui-heading-3"
}, Ci = {
  key: 1,
  class: "ui-text-default"
}, Ti = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Ii(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("Divider");
  return l(), u("div", I({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), u("div", vi, [
      m(e.$slots, "toolbar")
    ])) : h("", !0),
    n.hasHeaderBlock ? (l(), u("div", {
      key: 1,
      class: y(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), u("div", ki, [
          f("div", Si, [
            i.icon ? (l(), u("span", wi, [
              p(s, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : h("", !0),
            f("div", xi, [
              i.title ? (l(), u("h3", _i, b(i.title), 1)) : h("", !0),
              i.description ? (l(), u("p", Ci, b(i.description), 1)) : h("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), u("div", Ti, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : h("", !0)
        ])) : h("", !0)
      ])
    ], 2)) : h("", !0),
    n.showHeaderDivider ? (l(), w(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : h("", !0),
    e.$slots.default ? (l(), u("div", {
      key: 3,
      class: y(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : h("", !0),
    e.$slots.footer ? (l(), u("div", {
      key: 4,
      class: y(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : h("", !0)
  ], 16);
}
const Ds = /* @__PURE__ */ _(yi, [["render", Ii]]);
function Ue(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function Ze(e, t = "tr-TR") {
  return !(e instanceof Date) || Number.isNaN(e.getTime()) ? "" : e.toLocaleDateString(Ue(t), {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Bs(e, t = "tr-TR") {
  if (e == null || e === "") return "";
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return "";
  const r = Number(i[1]), a = Number(i[2]) - 1, n = Number(i[3]), s = new Date(r, a, n);
  return s.getFullYear() !== r || s.getMonth() !== a || s.getDate() !== n ? "" : Ze(s, t);
}
let ve = 0;
function ke(e) {
  return String(e).padStart(2, "0");
}
function M(e) {
  return `${e.getFullYear()}-${ke(e.getMonth() + 1)}-${ke(e.getDate())}`;
}
function ee(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, a = Number(t[3]), n = new Date(i, r, a);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== a ? null : n;
}
const zi = {
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
    /**
     * true: tetikleyici/popover yok — paneli doğrudan yerleştir (FieldAction vb.).
     */
    embedded: {
      type: Boolean,
      default: !1
    },
    /** Hızlı seçim satırını göster */
    showQuick: {
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
    todayLabel: {
      type: String,
      default: ""
    },
    yesterdayLabel: {
      type: String,
      default: ""
    },
    tomorrowLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    ve += 1;
    const e = ve, t = ee(this.modelValue) || /* @__PURE__ */ new Date();
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
      return ee(this.modelValue);
    },
    locale() {
      var e;
      return Ue((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      return this.selectedDate ? Ze(this.selectedDate, this.locale) : this.placeholder;
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString(this.locale, {
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
    resolvedTomorrowLabel() {
      return this.tomorrowLabel ? this.tomorrowLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.tomorrow") : "Tomorrow";
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(/* @__PURE__ */ new Date());
    },
    yesterdayQuickDisabled() {
      const e = /* @__PURE__ */ new Date();
      return e.setDate(e.getDate() - 1), this.isQuickDateDisabled(e);
    },
    tomorrowQuickDisabled() {
      const e = /* @__PURE__ */ new Date();
      return e.setDate(e.getDate() + 1), this.isQuickDateDisabled(e);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), a = [];
      for (let n = 0; n < 42; n += 1) {
        const s = new Date(r.getFullYear(), r.getMonth(), r.getDate() + n), d = s.getMonth() === t && s.getFullYear() === e, o = s.getDate(), c = M(s), g = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`, z = !!(this.selectedDate && c === M(this.selectedDate)), x = M(/* @__PURE__ */ new Date()) === c, v = !!(this.minYmd && c < this.minYmd);
        a.push({
          key: g,
          d: o,
          out: !d,
          date: s,
          sel: z,
          today: x,
          inMonth: d,
          disabled: v
        });
      }
      return a;
    }
  },
  watch: {
    modelValue() {
      const e = ee(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = M(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = M(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = /* @__PURE__ */ new Date();
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const r = M(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Li = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, Ai = { class: "mb-3 flex items-center justify-between gap-2" }, Fi = { class: "text-sm font-medium tabular-nums text-foreground" }, Di = { class: "ui-datepicker-grid" }, Bi = {
  key: 0,
  class: "ui-datepicker-quick"
}, Ri = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, Pi = { class: "mb-3 flex items-center justify-between gap-2" }, $i = { class: "text-sm font-medium tabular-nums text-foreground" }, Ei = { class: "ui-datepicker-grid" }, Oi = {
  key: 0,
  class: "ui-datepicker-quick"
};
function Vi(e, t, i, r, a, n) {
  const s = k("ui-button"), d = k("ui-popover");
  return l(), u("div", {
    class: y([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.fulled ? "ui-datepicker--fulled w-full" : "",
      !i.embedded && !i.fulled ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (l(), u("div", Li, [
      f("div", Ai, [
        p(s, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = A((o) => n.shiftMonth(-1), ["stop"]))
        }),
        f("span", Fi, b(n.monthTitle), 1),
        p(s, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          "aria-label": "Next month",
          onClick: t[1] || (t[1] = A((o) => n.shiftMonth(1), ["stop"]))
        })
      ]),
      t[8] || (t[8] = f("div", { class: "ui-datepicker-weekdays mb-2" }, [
        f("span", null, "Su"),
        f("span", null, "Mo"),
        f("span", null, "Tu"),
        f("span", null, "We"),
        f("span", null, "Th"),
        f("span", null, "Fr"),
        f("span", null, "Sa")
      ], -1)),
      f("div", Di, [
        (l(!0), u(B, null, H(n.calendarCells, (o) => (l(), w(s, {
          key: o.key,
          variant: n.dayVariant(o),
          color: n.dayColor(o),
          size: "sm",
          cubed: "",
          disabled: o.disabled,
          "aria-selected": o.sel ? "true" : "false",
          "aria-disabled": o.disabled ? "true" : void 0,
          "data-outside": o.inMonth ? void 0 : "true",
          "data-today": o.today ? "true" : void 0,
          onClick: (c) => n.pick(o)
        }, {
          default: S(() => [
            F(b(o.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ]),
      i.showQuick ? (l(), u("div", Bi, [
        p(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.yesterdayQuickDisabled,
          onClick: t[2] || (t[2] = (o) => n.pickQuick("yesterday"))
        }, {
          default: S(() => [
            F(b(n.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        p(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.todayQuickDisabled,
          onClick: t[3] || (t[3] = (o) => n.pickQuick("today"))
        }, {
          default: S(() => [
            F(b(n.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        p(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.tomorrowQuickDisabled,
          onClick: t[4] || (t[4] = (o) => n.pickQuick("tomorrow"))
        }, {
          default: S(() => [
            F(b(n.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : h("", !0)
    ])) : (l(), w(d, {
      key: 1,
      open: a.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (o) => a.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: S(({ open: o, toggle: c, close: g }) => [
        m(e.$slots, "trigger", {
          open: o,
          toggle: c,
          close: g
        }, () => [
          p(s, {
            type: "button",
            id: n.resolvedId,
            variant: "solid",
            color: "input",
            fulled: i.fulled,
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: c
          }, {
            default: S(() => [
              f("span", {
                class: y([
                  "min-w-0 flex-1 truncate",
                  n.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, b(n.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: S(({ close: o }) => [
        f("div", Ri, [
          f("div", Pi, [
            p(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[5] || (t[5] = A((c) => n.shiftMonth(-1), ["stop"]))
            }),
            f("span", $i, b(n.monthTitle), 1),
            p(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[6] || (t[6] = A((c) => n.shiftMonth(1), ["stop"]))
            })
          ]),
          t[9] || (t[9] = f("div", { class: "ui-datepicker-weekdays mb-2" }, [
            f("span", null, "Su"),
            f("span", null, "Mo"),
            f("span", null, "Tu"),
            f("span", null, "We"),
            f("span", null, "Th"),
            f("span", null, "Fr"),
            f("span", null, "Sa")
          ], -1)),
          f("div", Ei, [
            (l(!0), u(B, null, H(n.calendarCells, (c) => (l(), w(s, {
              key: c.key,
              variant: n.dayVariant(c),
              color: n.dayColor(c),
              size: "sm",
              cubed: "",
              disabled: c.disabled,
              "aria-selected": c.sel ? "true" : "false",
              "aria-disabled": c.disabled ? "true" : void 0,
              "data-outside": c.inMonth ? void 0 : "true",
              "data-today": c.today ? "true" : void 0,
              onClick: (g) => n.pick(c, o)
            }, {
              default: S(() => [
                F(b(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          i.showQuick ? (l(), u("div", Oi, [
            p(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", o)
            }, {
              default: S(() => [
                F(b(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            p(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (c) => n.pickQuick("today", o)
            }, {
              default: S(() => [
                F(b(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            p(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.tomorrowQuickDisabled,
              onClick: (c) => n.pickQuick("tomorrow", o)
            }, {
              default: S(() => [
                F(b(n.resolvedTomorrowLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])) : h("", !0)
        ])
      ]),
      _: 3
    }, 8, ["open", "match-trigger-width", "disabled"]))
  ], 2);
}
const Rs = /* @__PURE__ */ _(zi, [["render", Vi]]);
let Se = 0;
function Ps(e) {
  return Se += 1, `${e}-${Se}`;
}
function se(e) {
  let t = 0;
  return () => (t += 1, `${e}-${t}`);
}
function Xe(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [a, n] of Object.entries(e || {}))
    i.has(a) || (r[a] = n);
  return r;
}
const Ni = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), Mi = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function Hi(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function we(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (Hi(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function ji(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function xe(e, { skipFooter: t = !1 } = {}) {
  const i = we(e, Ni, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = we(e, Mi, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function Wi(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && xe(t))
    return !0;
  for (const i of ji(e))
    if (xe(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Yi = se("ui-dialog"), Ki = ["solid", "dashed", "dotted", "double"], _e = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Gi = ["solid", "regular", "brands", "light", "duotone", "thin"], Qi = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], Ce = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, qi = {
  name: "Dialog",
  components: { Divider: qe },
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
      validator: (e) => Qi.includes(e)
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
      validator: (e) => Ki.includes(e)
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
      validator: (e) => Gi.includes(e)
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
    const e = Yi();
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
      return _e[this.borderType] || _e.solid;
    },
    maxWidthClass() {
      return Ce[this.maxWidth] || Ce.lg;
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
      return Xe(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : Qe(this, "ui.dialog.close", "Close");
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
        }, 440);
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
      if (U()) return;
      const e = this.$refs.panelRef;
      e && Wi(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!U() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const a = (d) => {
        const o = Math.max(0, d.clientY - i);
        t.style.transform = `translateY(${o}px)`;
      }, n = (d) => {
        const o = Math.max(0, d.clientY - i);
        t.style.transition = r, t.style.transform = "", o >= 72 && this.close(), this.teardownSheetDrag();
      }, s = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", a), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", s), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", s);
      };
    }
  }
}, Ui = ["aria-labelledby", "aria-describedby", "aria-label"], Zi = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Xi = {
  key: 0,
  class: "ui-dialog-header__icon"
}, Ji = ["id"], en = {
  key: 2,
  class: "ui-dialog-header__actions"
}, tn = ["id"], nn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, rn = {
  key: 4,
  class: "ui-card-footer"
};
function sn(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("ui-button"), o = k("Divider");
  return l(), w(Z, { to: "body" }, [
    p(G, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: n.onOverlayAfterEnter,
      onAfterLeave: n.onOverlayAfterLeave
    }, {
      default: S(() => [
        i.open ? (l(), u("div", {
          key: 0,
          ref: "layerRef",
          class: y(n.rootLayerClasses),
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
            onClick: t[2] || (t[2] = A(() => {
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
            n.hasHeaderBlock ? (l(), u("div", Zi, [
              m(e.$slots, "header", {}, () => [
                n.hasDefaultHeader ? (l(), u("div", {
                  key: 0,
                  class: y(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (l(), u("span", Xi, [
                    p(s, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : h("", !0),
                  i.title ? (l(), u("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, b(i.title), 9, Ji)) : h("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), u("div", en, [
                    m(e.$slots, "append"),
                    m(e.$slots, "actions")
                  ])) : h("", !0),
                  i.showClose ? (l(), w(d, {
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
                  i.description ? (l(), u("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, b(i.description), 9, tn)) : h("", !0)
                ], 2)) : h("", !0)
              ])
            ])) : h("", !0),
            e.$slots.toolbar ? (l(), u("div", nn, [
              m(e.$slots, "toolbar")
            ])) : h("", !0),
            n.showHeaderDivider ? (l(), w(o, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : h("", !0),
            e.$slots.default ? (l(), u("div", {
              key: 3,
              class: y(["ui-card-body ui-text-default", {
                "ui-card-body--row": i.row,
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              m(e.$slots, "default")
            ], 2)) : h("", !0),
            e.$slots.footer ? (l(), u("div", rn, [
              m(e.$slots, "footer")
            ])) : h("", !0)
          ], 16, Ui)
        ], 34)) : h("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const $s = /* @__PURE__ */ _(qi, [["render", sn]]), an = ["solid", "regular", "brands", "light", "duotone", "thin"], ln = ["sm", "md", "lg"], on = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, un = {
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
      validator: (e) => an.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => ln.includes(e)
    }
  },
  computed: {
    iconSize() {
      return on[this.size] ?? "md";
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
}, dn = {
  key: 0,
  class: "ui-empty-icon"
}, cn = {
  key: 1,
  class: "ui-empty-title"
}, fn = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, hn = {
  key: 3,
  class: "ui-empty-actions"
};
function mn(e, t, i, r, a, n) {
  const s = k("ui-icon");
  return l(), u("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), u("div", dn, [
      p(s, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : h("", !0),
    i.title ? (l(), u("h2", cn, b(i.title), 1)) : h("", !0),
    i.description ? (l(), u("p", fn, b(i.description), 1)) : h("", !0),
    e.$slots.default ? (l(), u("div", hn, [
      m(e.$slots, "default")
    ])) : h("", !0)
  ], 16);
}
const Es = /* @__PURE__ */ _(un, [["render", mn]]);
let Te = 0;
const pn = ["vertical", "horizontal"], gn = ["default", "card"], bn = {
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
      validator: (e) => pn.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => gn.includes(e)
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
    Te += 1;
    const e = Te;
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
}, yn = ["data-primary-field"], vn = {
  key: 0,
  class: "ui-form-row-text"
}, kn = ["for"], Sn = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, wn = ["id"], xn = { class: "ui-form-row-control" };
function _n(e, t, i, r, a, n) {
  return l(), u("div", I({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), u("div", vn, [
      i.label || e.$slots.action ? (l(), u("div", {
        key: 0,
        class: y(n.labelLineClass)
      }, [
        i.label ? (l(), u("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, b(i.label), 9, kn)) : h("", !0),
        e.$slots.action ? (l(), u("div", Sn, [
          m(e.$slots, "action")
        ])) : h("", !0)
      ], 2)) : h("", !0),
      i.description ? (l(), u("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, b(i.description), 9, wn)) : h("", !0)
    ])) : h("", !0),
    f("div", xn, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 16, yn);
}
const Os = /* @__PURE__ */ _(bn, [["render", _n]]), Cn = ["solid", "regular", "brands", "light", "duotone", "thin"], Ie = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Tn = ["xs", "sm", "md", "lg"], In = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, zn = {
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
      validator: (e) => Cn.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Tn.includes(e)
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
      return Ie[this.type] || Ie.light;
    },
    iconClass() {
      return T(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        In[this.size],
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
function Ln(e, t, i, r, a, n) {
  return l(), u("i", I({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Vs = /* @__PURE__ */ _(zn, [["render", Ln]]), An = se("ui-input"), Fn = ["sm", "md", "lg"], Dn = ["default", "plain"], Bn = {
  name: "Input",
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    /** `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Dn.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => Fn.includes(e)
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
    return { fallbackId: An() };
  },
  computed: {
    resolvedSize() {
      let e = Y(this.size, { defaultSize: "md" });
      return e !== "md" ? e : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : e;
    },
    rootClass() {
      return T(
        "ui-input",
        this.variant === "plain" && "ui-input--plain",
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
      return Xe(this.$attrs, [
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
    },
    focus() {
      var e, t;
      (t = (e = this.$refs.field) == null ? void 0 : e.focus) == null || t.call(e);
    }
  }
}, Rn = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, Pn = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, $n = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], En = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], On = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Vn = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function Nn(e, t, i, r, a, n) {
  const s = k("ui-icon");
  return l(), u("div", {
    class: y([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), u("div", Rn, [
      m(e.$slots, "prepend")
    ])) : h("", !0),
    i.prefixIcon ? (l(), u("span", Pn, [
      p(s, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : h("", !0),
    i.multiline ? (l(), u("textarea", I({
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
      onInput: t[0] || (t[0] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[1] || (t[1] = (d) => e.$emit("change", d)),
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), null, 16, $n)) : (l(), u("input", I({
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
      onInput: t[4] || (t[4] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[5] || (t[5] = (d) => e.$emit("change", d)),
      onFocus: t[6] || (t[6] = (d) => e.$emit("focus", d)),
      onBlur: t[7] || (t[7] = (d) => e.$emit("blur", d))
    }), null, 16, En)),
    i.suffixIcon ? (l(), u("span", On, [
      p(s, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : h("", !0),
    e.$slots.append ? (l(), u("div", Vn, [
      m(e.$slots, "append")
    ])) : h("", !0)
  ], 2);
}
const Ns = /* @__PURE__ */ _(Bn, [["render", Nn]]);
let ze = 0;
const Mn = ["sm", "md", "lg"], Le = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Hn = {
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
      default: () => Le
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Mn.includes(e)
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
    return ze += 1, { fallbackId: `ui-phone-number-${ze}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : Le;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return Y(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return T(
        "ui-phone",
        this.isSingleCountry && "ui-phone--single-country",
        this.resolvedSize !== "md" && `ui-phone--${this.resolvedSize}`
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
}, jn = { class: "ui-phone-prepend" }, Wn = {
  key: 0,
  class: "ui-phone-country-static"
};
function Yn(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("ui-select"), o = k("ui-input");
  return l(), u("div", {
    class: y(n.rootClass)
  }, [
    p(o, I({
      id: n.resolvedNumberId,
      modelValue: n.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (c) => n.innerNumber = c),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: n.resolvedSize,
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
      prepend: S(() => [
        f("div", jn, [
          p(s, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), u("span", Wn, b(n.innerCountry), 1)) : (l(), w(d, {
            key: 1,
            modelValue: n.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (c) => n.innerCountry = c),
            variant: "inline",
            size: n.resolvedSize,
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
const Ms = /* @__PURE__ */ _(Hn, [["render", Yn]]), Kn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Ae = 10, te = 410, Gn = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Qn = {
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
      validator: (e) => Kn.includes(e)
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
     * true: kök ve tetikleyici kabuğu `display: contents` — flex satırında yalnızca slot
     * (ör. `ui-tab-trigger`) katılır; konumlandırma ilk çocuk öğeden alınır.
     */
    inheritLayout: {
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
      layerZIndex: te,
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
      return this.inheritLayout ? "ui-popover ui-popover--inherit-layout" : this.block ? "ui-popover ui-popover--block relative w-full min-w-0 max-w-full" : "ui-popover relative shrink-0";
    },
    triggerShellClass() {
      return this.inheritLayout ? "ui-popover-trigger ui-popover-trigger--inherit-layout" : this.block ? "ui-popover-trigger ui-popover-trigger--block flex w-full min-w-0 max-w-full" : "ui-popover-trigger inline-flex shrink-0";
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
    onPopoverBeforeEnter() {
      this.updatePosition();
    },
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
      if (typeof document > "u") return te;
      let e = te;
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
    resolveTriggerEl() {
      const e = this.$refs.triggerRef;
      return e ? this.inheritLayout && e.firstElementChild instanceof HTMLElement ? e.firstElementChild : e : null;
    },
    updatePosition() {
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, r = window.innerHeight, a = Ae, n = this.resolvedWidth, s = e.getBoundingClientRect(), d = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? s.width : 200), o = t.offsetHeight || 120;
      if (U() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const v = Math.max(a, Math.round((i - d) / 2)), C = {
          top: `${Math.max(a, Math.round((r - o) / 2))}px`,
          left: `${v}px`
        };
        n != null ? (C.width = n, C.minWidth = n) : (C.width = `${Math.min(d, i - a * 2)}px`, C.maxWidth = `calc(100vw - ${a * 2}px)`), this.layerStyle = this.withLayerZIndex(C);
        return;
      }
      this.mobileCenteredActive = !1;
      let c, g;
      switch (this.placement) {
        case "right-start":
          c = s.top, g = s.right + a;
          break;
        case "right-end":
          c = s.bottom - o, g = s.right + a;
          break;
        case "left-start":
          c = s.top, g = s.left - a - d;
          break;
        case "left-end":
          c = s.bottom - o, g = s.left - a - d;
          break;
        case "top-start":
          c = s.top - a - o, g = s.left;
          break;
        case "top-end":
          c = s.top - a - o, g = s.right - d;
          break;
        case "bottom-end":
          c = s.bottom + a, g = s.right - d;
          break;
        case "bottom":
          c = s.bottom + a, g = s.left + (s.width - d) / 2;
          break;
        case "bottom-start":
        default:
          c = s.bottom + a, g = s.left;
          break;
      }
      if (this.placement.startsWith("right") && g + d > i - a && (g = s.left - a - d), this.placement.startsWith("left") && g < a && (g = s.right + a), this.placement.startsWith("top") && c < a && (c = s.bottom + a), g + d > i - a && (g = Math.max(a, i - a - d)), g < a && (g = a), this.placement.startsWith("bottom") && c + o > r - a) {
        const v = s.top - a - o;
        v >= a && (c = v);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (c + o > r - a && (c = Math.max(a, r - a - o)), c < a && (c = a));
      const z = this.matchTriggerWidth && n == null ? `${Math.ceil(s.width)}px` : void 0, x = {
        top: `${Math.round(c)}px`,
        left: `${Math.round(g)}px`,
        minWidth: z
      };
      n != null && (x.width = n, x.minWidth = n), this.layerStyle = this.withLayerZIndex(x), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef, i = this.$refs.layerRef;
      if (!e || !t || !i) return;
      const r = t.querySelector('[role="listbox"]');
      if (r && r.scrollHeight > r.clientHeight + 2)
        return;
      const a = t.querySelector('[role="option"][aria-selected="true"]');
      if (!a) return;
      const n = e.querySelector("[data-popover-align]") || e, s = a.querySelector("[data-popover-align]") || a, d = n.getBoundingClientRect(), o = s.getBoundingClientRect(), c = o.top - d.top, g = o.left - d.left, z = i.getBoundingClientRect(), x = this.layerStyle.top, v = this.layerStyle.left;
      let R = typeof x == "string" && x !== "" ? parseFloat(x) : z.top, C = typeof v == "string" && v !== "" ? parseFloat(v) : z.left;
      Number.isNaN(R) && (R = z.top), Number.isNaN(C) && (C = z.left);
      let $ = R - c, E = C - g;
      const L = Ae, K = window.innerHeight, V = window.innerWidth, j = z.height, W = z.width;
      $ + j > K - L && ($ = Math.max(L, K - L - j)), $ < L && ($ = L), E + W > V - L && (E = Math.max(L, V - L - W)), E < L && (E = L), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round($)}px`,
        left: `${Math.round(E)}px`
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
      t && i instanceof Node && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
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
      for (const n of Gn)
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
}, qn = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Un = {
  key: 0,
  class: "ui-popover-header"
}, Zn = { class: "ui-popover-body min-h-0 min-w-0" }, Xn = {
  key: 1,
  class: "ui-popover-footer"
};
function Jn(e, t, i, r, a, n) {
  return l(), u("div", {
    ref: "rootRef",
    class: y([n.rootShellClass, e.$attrs.class])
  }, [
    f("div", {
      ref: "triggerRef",
      class: y(n.triggerShellClass)
    }, [
      m(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    (l(), w(Z, { to: "body" }, [
      p(G, { name: "ui-overlay-popover-backdrop" }, {
        default: S(() => [
          n.showMobileBackdrop ? (l(), u("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: Q(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...s) => n.close && n.close(...s))
          }, null, 4)) : h("", !0)
        ]),
        _: 1
      }),
      p(G, {
        name: "ui-overlay-popover",
        onBeforeEnter: n.onPopoverBeforeEnter
      }, {
        default: S(() => [
          i.open ? (l(), u("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: Q(a.layerStyle),
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
              e.$slots.header ? (l(), u("div", Un, [
                m(e.$slots, "header", { close: n.close })
              ])) : h("", !0),
              f("div", Zn, [
                m(e.$slots, "content", { close: n.close })
              ]),
              e.$slots.footer ? (l(), u("div", Xn, [
                m(e.$slots, "footer", { close: n.close })
              ])) : h("", !0)
            ], 544)
          ], 12, qn)) : h("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeEnter"])
    ]))
  ], 2);
}
const Hs = /* @__PURE__ */ _(Qn, [["render", Jn]]), er = {
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
}, tr = ["name", "value", "checked"], ir = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, nr = { class: "ui-radio-body" }, rr = { class: "ui-radio-label" }, sr = {
  key: 0,
  class: "ui-radio-description"
};
function ar(e, t, i, r, a, n) {
  var d;
  const s = k("ui-icon");
  return l(), u("label", {
    class: y([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onClick: t[1] || (t[1] = (...o) => n.select && n.select(...o)),
    onKeydown: [
      t[2] || (t[2] = q(A((...o) => n.select && n.select(...o), ["prevent"]), ["enter"])),
      t[3] || (t[3] = q(A((...o) => n.select && n.select(...o), ["prevent"]), ["space"]))
    ]
  }, [
    f("input", {
      type: "radio",
      name: (d = n.uiRadioGroup) == null ? void 0 : d.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...o) => n.select && n.select(...o))
    }, null, 40, tr),
    f("span", ir, [
      n.isChecked ? (l(), w(s, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-radio-check-icon text-primary-foreground"
      })) : h("", !0)
    ]),
    f("span", nr, [
      f("span", rr, b(i.label), 1),
      i.description ? (l(), u("span", sr, b(i.description), 1)) : h("", !0)
    ])
  ], 34);
}
const js = /* @__PURE__ */ _(er, [["render", ar]]);
let Fe = 0;
const lr = ["list", "button", "List", "Button"], or = ["vertical", "horizontal"], ur = {
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    /** `list` — satır listesi; `button` — kart seçenekleri */
    variant: {
      type: String,
      default: "list",
      validator: (e) => lr.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || or.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Fe += 1, { groupName: `ui-radio-group-${Fe}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : this.orientation === "horizontal" ? "horizontal" : "vertical";
    },
    rootClass() {
      return T(
        "ui-radio-group",
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === "list" && this.effectiveOrientation === "horizontal" ? "ui-radio-group--horizontal" : "",
        this.normalizedVariant === "button" && this.effectiveOrientation === "vertical" ? "ui-radio-group--vertical" : ""
      );
    }
  },
  provide() {
    return {
      uiRadioGroup: this
    };
  }
}, dr = ["aria-label"];
function cr(e, t, i, r, a, n) {
  return l(), u("div", {
    class: y(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, dr);
}
const Ws = /* @__PURE__ */ _(ur, [["render", cr]]), fr = {
  name: "Tag",
  components: { Badge: jt, Tooltip: Ye },
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
}, hr = ["aria-label"];
function mr(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("Tooltip"), o = k("Badge");
  return l(), w(o, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, We({
    default: S(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: S(() => [
        p(d, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: S(() => [
            f("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = A((c) => e.$emit("remove"), ["stop"]))
            }, [
              p(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, hr)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const pr = /* @__PURE__ */ _(fr, [["render", mr]]);
let De = 0;
const gr = ["field", "inline"], br = ["sm", "md", "lg"], yr = {
  name: "Select",
  components: { Tag: pr },
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
      validator: (e) => gr.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => br.includes(e)
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
    De += 1;
    const e = De;
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
      let e = Y(this.size, { defaultSize: "md" });
      return e !== "md" ? e : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : e;
    },
    /** Popover seçenekleri tetikleyici ile aynı boyutta (sm/md/lg). */
    optionButtonSize() {
      return this.resolvedSize;
    },
    emptyStateSize() {
      return this.resolvedSize === "lg" ? "md" : "sm";
    },
    listboxClass() {
      return this.resolvedSize !== "md" ? `ui-select-listbox--${this.resolvedSize}` : void 0;
    },
    filterInputClass() {
      return this.resolvedSize !== "md" ? `ui-select-filter-input--${this.resolvedSize}` : void 0;
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
}, vr = ["name", "value"], kr = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Sr = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, wr = {
  key: 1,
  class: "ui-select-values-inner"
}, xr = ["placeholder", "aria-label", "disabled"], _r = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Cr = { class: "ui-select-field-suffix" }, Tr = ["aria-label"], Ir = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, zr = ["data-size", "placeholder", "aria-label", "onKeydown"], Lr = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], Ar = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Fr = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function Dr(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("Tag"), o = k("ui-skeleton"), c = k("ui-button"), g = k("ui-empty"), z = k("ui-popover");
  return l(), u("div", {
    class: y(n.rootClass)
  }, [
    i.name ? (l(), u("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, vr)) : h("", !0),
    p(z, {
      open: a.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (x) => a.menuOpen = x),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, We({
      trigger: S(({ open: x, toggle: v, close: R }) => [
        m(e.$slots, "trigger", {
          open: x,
          toggle: v,
          close: R
        }, () => [
          f("button", I({
            type: "button",
            id: n.resolvedId,
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline"
            }],
            disabled: n.isDisabled,
            "aria-expanded": x ? "true" : "false",
            "aria-haspopup": n.listboxRole,
            "aria-controls": a.listboxId,
            "aria-describedby": i.ariaDescribedby
          }, n.triggerPassthrough, {
            onClick: (C) => n.onTriggerClick(v)
          }), [
            i.prefixIcon ? (l(), u("span", Sr, [
              p(s, {
                name: i.prefixIcon,
                size: "xs"
              }, null, 8, ["name"])
            ])) : h("", !0),
            i.multiple ? (l(), u("div", wr, [
              (l(!0), u(B, null, H(n.selectedValues, (C) => (l(), w(d, {
                key: String(C),
                variant: "secondary",
                size: "sm",
                removable: "",
                onRemove: ($) => n.removeValue(C)
              }, {
                default: S(() => [
                  F(b(n.labelForValue(C)), 1)
                ]),
                _: 2
              }, 1032, ["onRemove"]))), 128)),
              n.isFilterable ? re((l(), u("input", {
                key: 0,
                ref: "searchInput",
                "onUpdate:modelValue": t[0] || (t[0] = (C) => a.filterQuery = C),
                type: "text",
                class: y(["ui-select-values-input", { "ui-select-values-input--solo": !n.selectedValues.length }]),
                placeholder: n.multipleInputPlaceholder,
                "aria-label": n.resolvedFilterPlaceholder,
                autocomplete: "off",
                disabled: n.isDisabled,
                onClick: t[1] || (t[1] = A(() => {
                }, ["stop"])),
                onKeydown: t[2] || (t[2] = (...C) => n.onSearchKeydown && n.onSearchKeydown(...C))
              }, null, 42, xr)), [
                [oe, a.filterQuery]
              ]) : h("", !0)
            ])) : i.loading ? (l(), u("span", _r, b(n.resolvedLoadingLabel), 1)) : (l(), u("span", {
              key: 3,
              class: y(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
              "data-popover-align": ""
            }, b(n.displayLabel), 3)),
            f("span", Cr, [
              n.showClearButton ? (l(), u("button", {
                key: 0,
                type: "button",
                class: "ui-select-clear",
                "aria-label": n.clearAriaLabel,
                onClick: t[3] || (t[3] = A((...C) => n.clearSelection && n.clearSelection(...C), ["stop"]))
              }, [
                p(s, {
                  name: "xmark",
                  size: "xs"
                })
              ], 8, Tr)) : h("", !0),
              f("span", Ir, [
                p(s, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 16, kr)
        ])
      ]),
      content: S(({ close: x }) => [
        f("div", {
          ref: "listbox",
          id: a.listboxId,
          class: y(["ui-select-listbox", n.listboxClass]),
          "data-size": n.resolvedSize,
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), u("div", Ar, [
            (l(), u(B, null, H(3, (v) => p(o, {
              key: v,
              variant: "line",
              class: y(v === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), u(B, { key: 1 }, H(n.filteredOptions, (v) => (l(), w(c, {
            key: String(v.value),
            variant: n.isSelected(v) ? "solid" : "ghost",
            color: n.isSelected(v) ? "primary" : "secondary",
            size: n.optionButtonSize,
            fulled: "",
            "text-align": "left",
            role: "option",
            class: y(["ui-select-option", { "ui-select-option--selected": n.isSelected(v) }]),
            "suffix-icon": n.isSelected(v) ? "check" : void 0,
            "aria-selected": n.isSelected(v) ? "true" : "false",
            onClick: (R) => n.pick(v, x)
          }, {
            default: S(() => [
              f("span", Fr, b(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && a.filterQuery ? (l(), w(g, {
            key: 2,
            icon: "magnifying-glass",
            size: n.emptyStateSize,
            title: n.noResultsText
          }, null, 8, ["size", "title"])) : (l(), w(g, {
            key: 3,
            icon: "table-cells",
            size: n.emptyStateSize,
            title: n.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, Lr)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: S(({ close: x }) => [
          re(f("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (v) => a.filterQuery = v),
            type: "text",
            class: y(["ui-select-filter-input w-full", n.filterInputClass]),
            "data-size": n.resolvedSize,
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = A(() => {
            }, ["prevent"])),
            onKeydown: [
              q(A((v) => n.pickFirstFiltered(x), ["prevent"]), ["enter"]),
              q(A((v) => x(), ["prevent"]), ["esc"])
            ]
          }, null, 42, zr), [
            [oe, a.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: S((x) => [
          m(e.$slots, "footer", ot(ut(x)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Ys = /* @__PURE__ */ _(yr, [["render", Dr]]), Br = ["line", "circle", "block", "pill"], Rr = ["sm", "md", "lg"], Pr = 480, Be = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Re = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, $r = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => Br.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Rr.includes(e)
    }
  },
  setup(e) {
    const t = ct(), i = N(() => !!t.default), r = P(null), a = P(null), n = P(null), s = P(null), d = P(!1), o = P(!1), c = P(!1), g = P(!1), z = N(
      () => e.loading || o.value
    ), x = N(
      () => e.loading || o.value
    );
    ft(() => {
      g.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), ht(
      () => e.loading,
      async (L, K) => {
        var W, ae, le;
        if (L) {
          o.value = !1, c.value = !1, s.value = null, d.value = !1;
          return;
        }
        if (K !== !0) return;
        if (g.value) {
          o.value = !1, s.value = null, d.value = !1;
          return;
        }
        const V = ((W = r.value) == null ? void 0 : W.offsetHeight) ?? ((ae = a.value) == null ? void 0 : ae.offsetHeight) ?? 0;
        o.value = !0, c.value = !1, d.value = !0, s.value = V, await ue();
        const j = ((le = n.value) == null ? void 0 : le.scrollHeight) ?? V;
        if (V <= 0 && j <= 0) {
          v();
          return;
        }
        await ue(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.value = j, c.value = !0;
          });
        }), setTimeout(v, Pr + 40);
      }
    );
    function v() {
      o.value = !1, c.value = !1, s.value = null, d.value = !1;
    }
    function R(L) {
      L.target === r.value && L.propertyName === "height" && (e.loading || d.value && v());
    }
    const C = N(() => {
      if (s.value != null)
        return { height: `${s.value}px` };
    }), $ = N(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !o.value,
      "ui-skeleton-placeholder--overlay": o.value,
      "ui-skeleton-placeholder--fade-out": o.value
    })), E = N(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !o.value,
      "ui-skeleton-content-wrap--revealing": o.value,
      "ui-skeleton-content-wrap--revealing-visible": o.value && c.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !o.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: a,
      contentWrapRef: n,
      hostStyle: C,
      heightAnimActive: d,
      isRevealing: o,
      showPlaceholder: z,
      isBusy: x,
      placeholderClass: $,
      contentWrapClass: E,
      onHostTransitionEnd: R
    };
  },
  computed: {
    variantClass() {
      return Be[this.variant] || Be.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Re[this.size] || Re.md;
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
}, Er = ["aria-busy"], Or = ["aria-hidden"];
function Vr(e, t, i, r, a, n) {
  return r.hasDefaultSlot ? (l(), u("div", I({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...s) => r.onHostTransitionEnd && r.onHostTransitionEnd(...s))
  }), [
    re(f("div", {
      ref: "placeholderRef",
      class: y(["ui-skeleton-placeholder", r.placeholderClass]),
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
      [dt, r.showPlaceholder]
    ]),
    f("div", {
      ref: "contentWrapRef",
      class: y(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      f("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, Or)
    ], 2)
  ], 16, Er)) : (l(), u("div", I({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const Ks = /* @__PURE__ */ _($r, [["render", Vr]]), Nr = {
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
      var g, z;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], a = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let s = 0;
      if (r.includes(n)) s = 1;
      else if (a.includes(n)) s = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let o = i.indexOf(d);
      o === -1 && (o = i.findIndex((x) => x.getAttribute("aria-selected") === "true")), o === -1 && (o = 0);
      let c = o + s;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (z = (g = i[c]) == null ? void 0 : g.focus) == null || z.call(g);
    }
  }
}, Mr = ["aria-label", "aria-orientation"];
function Hr(e, t, i, r, a, n) {
  return l(), u("div", I({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...s) => n.onKeydown && n.onKeydown(...s))
  }), [
    m(e.$slots, "default")
  ], 16, Mr);
}
const Gs = /* @__PURE__ */ _(Nr, [["render", Hr]]), jr = se("ui-tabs"), Wr = ["line", "segmented"], Yr = {
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
      validator: (e) => Wr.includes(e)
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
    /** Dar alanlarda (sheet, mobil) segmented listede yatay kaydırma — varsayılan açık. */
    scrollable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      baseId: jr()
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return Y(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return T(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.variant === "segmented" && this.resolvedSize === "lg" ? "ui-tabs--segmented-lg" : "",
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
function Kr(e, t, i, r, a, n) {
  return l(), u("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Qs = /* @__PURE__ */ _(Yr, [["render", Kr]]), Gr = ["solid", "regular", "brands", "light", "duotone", "thin"], Qr = {
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
      validator: (e) => Gr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Doluysa sekme köşesinde sayı rozeti (ör. sepet adedi). */
    badge: {
      type: [String, Number],
      default: null
    },
    /** Verilirse `ui-tabs` seçim durumunun üzerine yazar (menü tetikleyici sekmeler). */
    active: {
      type: Boolean,
      default: void 0
    },
    /** `menu` — `aria-haspopup` / `aria-expanded` (panel `aria-controls` kapatılır). */
    popup: {
      type: String,
      default: ""
    },
    /** `popup` doluysa menü açık/kapalı durumu. */
    expanded: {
      type: Boolean,
      default: !1
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
      return this.triggerKind === "segmented" ? ((e = this.uiTabs) == null ? void 0 : e.resolvedSize) === "lg" ? "lg" : "md" : "xs";
    },
    /** FA Pro: segment kartlarında da varsayılan `light` kullanılır. */
    tabIconType() {
      return this.iconType;
    },
    isSelected() {
      return typeof this.active == "boolean" ? this.active : this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    showBadge() {
      if (this.badge == null || this.badge === "") return !1;
      const e = String(this.badge).trim();
      return /^\d+(\.\d+)?$/.test(e) ? Number(e) > 0 : e.length > 0;
    },
    badgeLabel() {
      if (this.badge == null || this.badge === "") return "";
      const e = String(this.badge).trim();
      if (/^\d+(\.\d+)?$/.test(e)) {
        const t = Number(e);
        return t <= 0 ? "" : t > 99 ? "99+" : String(t);
      }
      return e;
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
}, qr = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], Ur = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" }, Zr = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function Xr(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("ui-badge");
  return l(), u("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: y(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : n.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...o) => n.select && n.select(...o))
  }, [
    i.icon ? (l(), w(s, {
      key: 0,
      name: i.icon,
      type: n.tabIconType,
      size: n.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : h("", !0),
    f("span", Ur, [
      m(e.$slots, "default", {}, () => [
        F(b(i.label), 1)
      ])
    ]),
    n.showBadge ? (l(), u("span", Zr, [
      p(d, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: S(() => [
          F(b(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : h("", !0)
  ], 10, qr);
}
const qs = /* @__PURE__ */ _(Qr, [["render", Xr]]), O = mt({
  /** @type {ToastItem[]} */
  items: []
});
let Pe = 0;
function Us(e = {}) {
  Pe += 1;
  const t = Pe, i = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return O.items.push(i), i.duration > 0 && (i._timer = setTimeout(() => Je(t), i.duration)), t;
}
function Je(e) {
  const t = O.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = O.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), O.items.splice(t, 1);
}
function Zs() {
  for (const e of O.items)
    e._timer && clearTimeout(e._timer);
  O.items.splice(0);
}
const $e = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Ee = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Jr = {
  name: "Toast",
  computed: {
    items() {
      return O.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: Je,
    iconFor(e) {
      return $e[e] || $e.info;
    },
    iconToneClass(e) {
      return Ee[e] || Ee.info;
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
}, es = { class: "ui-toast-host" }, ts = { class: "ui-alert-body" }, is = {
  key: 0,
  class: "ui-alert-title"
}, ns = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function rs(e, t, i, r, a, n) {
  const s = k("ui-icon"), d = k("ui-button");
  return l(), w(Z, { to: "body" }, [
    f("div", es, [
      p(pt, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: S(() => [
          (l(!0), u(B, null, H(n.items, (o) => (l(), u("div", {
            key: o.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            f("div", I({
              class: [n.toastClasses(o), "pointer-events-auto"]
            }, { ref_for: !0 }, n.toastA11y(o)), [
              f("span", {
                class: y(["ui-alert-icon", n.iconToneClass(o.variant)]),
                "aria-hidden": "true"
              }, [
                p(s, {
                  name: n.iconFor(o.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              f("div", ts, [
                o.title ? (l(), u("p", is, b(o.title), 1)) : h("", !0),
                o.description ? (l(), u("p", ns, b(o.description), 1)) : h("", !0)
              ]),
              p(d, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": n.dismissLabel,
                onClick: (c) => n.queueDismissToast(o.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const Xs = /* @__PURE__ */ _(Jr, [["render", rs]]), Js = {
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
    fieldAction: {
      clear: "Clear",
      done: "Done"
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
      yesterday: "Yesterday",
      tomorrow: "Tomorrow"
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
}, ea = {
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
    fieldAction: {
      clear: "Temizle",
      done: "Tamam"
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
      yesterday: "Dün",
      tomorrow: "Yarın"
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
}, ss = "fewui-google-fonts", as = Object.freeze([
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
function ta() {
  return as.map((e) => ({ ...e }));
}
function et(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function tt(e) {
  const t = [...new Set(
    (e || []).map((r) => String(r || "").trim()).filter(Boolean)
  )];
  return t.length ? `https://fonts.googleapis.com/css2?${t.map((r) => `family=${encodeURIComponent(r).replace(/%20/g, "+")}:wght@400;500;600`).join("&")}&display=swap` : null;
}
function ia(e = {}) {
  const { body: t, heading: i } = et(e), r = tt([t, i]);
  return r ? `<link rel="stylesheet" href="${r}">` : "";
}
function ls(e = {}, t = {}) {
  if (typeof document > "u") return null;
  const { body: i, heading: r } = et(e), a = tt([i, r]);
  if (!a) return null;
  const n = t.id || ss;
  let s = document.getElementById(n);
  return s || (s = document.createElement("link"), s.id = n, s.rel = "stylesheet", document.head.appendChild(s)), s.getAttribute("href") !== a && s.setAttribute("href", a), a;
}
const os = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], us = "ui-sans-serif, system-ui, sans-serif", Oe = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Ve = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function ds(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function Ne(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${us}`;
}
function cs(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function fs(e) {
  const t = String(e || "").trim().match(/^oklch\(\s*([0-9.]+%?)/i);
  if (!t) return null;
  const i = t[1];
  if (i.endsWith("%")) {
    const a = Number.parseFloat(i);
    return Number.isFinite(a) ? a / 100 : null;
  }
  const r = Number.parseFloat(i);
  return Number.isFinite(r) ? r > 1 ? r / 100 : r : null;
}
function hs(e, t, i) {
  const [r, a, n] = [e, t, i].map((s) => {
    const d = s / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * n;
}
function ms(e, t = "#ffffff", i = "#0a0a0b") {
  const r = cs(e);
  if (r)
    return hs(...r) > 0.4 ? i : t;
  const a = fs(e);
  return a != null && a > 0.72 ? i : t;
}
function ps(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function gs(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function bs(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Oe[t] != null ? Oe[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ys(e) {
  return e == null || e === "" ? null : Ve[e] ? Ve[e] : String(e);
}
function ie(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = gs(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const a = bs(i.backdropBlur ?? i.backdropFilter);
  a && (e[`--ui-${t}-backdrop-blur`] = a);
  const n = ys(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function Me(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const a = e[i];
  if (a != null && a !== "")
    return String(a);
}
function na(e = {}, t = {}) {
  const i = ds(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = it(e);
  for (const [a, n] of Object.entries(r))
    i.style.setProperty(a, n);
  return ls(e), { ...r };
}
function it(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = Ne(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = Ne(r)), e.baseColor && typeof e.baseColor == "object")
    for (const d of os) {
      const o = e.baseColor[d];
      o != null && o !== "" && (t[`--base-${d}`] = String(o));
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
  for (const [d, o] of a) {
    const c = e[d];
    c != null && c !== "" && (t[o] = String(c));
  }
  const n = Me(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = ms(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const s = Me(e, "secondaryColor", "secondary");
  if (s && (t["--secondary"] = s), ie(t, "surface", e.surfaceStyle), ie(t, "control", e.controlStyle), ie(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, o] of Object.entries(e.colors))
      o != null && o !== "" && (t[ps(d)] = String(o));
  return t;
}
function ra(e = {}) {
  const t = it(e), i = Object.entries(t).map(([a, n]) => `${a}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function vs(e, t) {
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
const sa = "few", nt = "#1B5CFF", aa = "#ffffff", He = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: nt,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function la() {
  return {
    light: He[600],
    dark: He[600]
  };
}
function ks(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function ne(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function je(e, t, i) {
  return `#${ne(e)}${ne(t)}${ne(i)}`;
}
function Ss(e) {
  const t = ks(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, a] = t, n = je(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    a + (255 - a) * 0.12
  ), s = je(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    a + (255 - a) * 0.08
  );
  return { accent: n, brandAccent: s };
}
function oa(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = Ss(String(i)), a = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (a.accent = r.accent), (t.force || !a.colors["brand-accent"]) && (a.colors["brand-accent"] = r.brandAccent), a;
}
function ua(e, t = nt) {
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
const rt = "fewui-theme-custom-css";
function ws(e, t = rt) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function da(e = rt) {
  ws("", e);
}
const st = {
  mode: "dark",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff"
}, xs = {
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
}, _s = {
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
}, Cs = {
  panel: st,
  flat: xs,
  landing: _s
}, ca = ["panel", "flat", "landing"];
function Ts(e = "panel") {
  const t = String(e || "panel").trim(), i = Cs[t] || st;
  return structuredClone(i);
}
function fa(e, t = {}) {
  return vs(Ts(e), t);
}
export {
  Xe as $,
  Ls as A,
  jt as B,
  Ds as C,
  rt as D,
  Es as E,
  He as F,
  as as G,
  da as H,
  Vs as I,
  Zs as J,
  T as K,
  Ps as L,
  se as M,
  Ss as N,
  Je as O,
  Ms as P,
  Js as Q,
  js as R,
  Ys as S,
  Cs as T,
  Wi as U,
  Bs as V,
  la as W,
  Ts as X,
  ta as Y,
  vs as Z,
  _,
  As as a,
  Us as a0,
  Y as a1,
  Ue as a2,
  ua as a3,
  et as a4,
  fa as a5,
  it as a6,
  Qe as a7,
  ea as a8,
  oa as a9,
  Fs as b,
  Rs as c,
  $s as d,
  qe as e,
  sa as f,
  nt as g,
  aa as h,
  Os as i,
  Ns as j,
  Hs as k,
  Ws as l,
  Ks as m,
  ca as n,
  Gs as o,
  qs as p,
  Qs as q,
  pr as r,
  Xs as s,
  Ye as t,
  ls as u,
  ws as v,
  na as w,
  ia as x,
  tt as y,
  ra as z
};
//# sourceMappingURL=index-Czn3by8P.js.map
