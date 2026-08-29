import { openBlock as l, createElementBlock as o, mergeProps as I, renderSlot as m, resolveComponent as b, normalizeClass as v, createVNode as g, createCommentVNode as f, createElementVNode as h, toDisplayString as y, createBlock as _, resolveDynamicComponent as ue, withCtx as k, Teleport as Z, Transition as ae, normalizeStyle as G, createTextVNode as D, ref as E, Fragment as F, Comment as Ct, Text as Tt, reactive as ut, withModifiers as P, renderList as M, normalizeProps as dt, guardReactiveProps as ct, useId as ft, withKeys as Q, createSlots as ht, withDirectives as le, vModelText as _e, vShow as It, useSlots as zt, computed as H, onMounted as Lt, onBeforeUnmount as At, watch as Dt, nextTick as we, TransitionGroup as Ft } from "vue";
import { RouterLink as Bt } from "vue-router";
const w = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, s] of t)
    i[r] = s;
  return i;
};
function C(...e) {
  const t = [];
  for (const i of e)
    if (i) {
      if (typeof i == "string") {
        t.push(i);
        continue;
      }
      if (typeof i == "object")
        for (const [r, s] of Object.entries(i))
          s && t.push(r);
    }
  return t.join(" ");
}
const Pt = ["horizontal", "vertical"], Rt = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Pt.includes(e)
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
      return C(
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
}, Ot = ["aria-label"];
function Et(e, t, i, r, s, n) {
  return l(), o("div", I({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, Ot);
}
const Ja = /* @__PURE__ */ w(Rt, [["render", Et]]), $t = ["info", "success", "warning", "error"], xe = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Ce = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Vt = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => $t.includes(e)
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
    /**
     * Dialog / form / sayfa çağrı kutusu (varsayılan).
     * Bordersız, kompakt, `rounded-3xl` — banner ile birlikte kullanılmaz.
     */
    soft: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["dismiss"],
  computed: {
    alertRole() {
      return this.variant === "error" || this.variant === "warning" ? "alert" : "status";
    },
    resolvedIcon() {
      return this.icon || xe[this.variant] || xe.info;
    },
    iconToneClass() {
      return Ce[this.variant] || Ce.info;
    },
    rootClasses() {
      return C(
        `ui-alert ui-alert--${this.variant}`,
        this.banner ? "ui-alert--banner" : "",
        this.soft && !this.banner ? "ui-alert--soft" : "",
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
}, Mt = ["role"], Nt = { class: "ui-alert-body" }, jt = {
  key: 0,
  class: "ui-alert-title"
}, Ht = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Wt = {
  key: 2,
  class: "ui-alert-slot"
};
function Yt(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("ui-button");
  return l(), o("div", I({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), o("span", {
      key: 0,
      class: v(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        g(a, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", Nt, [
      i.title ? (l(), o("p", jt, y(i.title), 1)) : f("", !0),
      i.description ? (l(), o("p", Ht, y(i.description), 1)) : f("", !0),
      e.$slots.default ? (l(), o("div", Wt, [
        m(e.$slots, "default")
      ])) : f("", !0)
    ]),
    i.dismissible ? (l(), _(d, {
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
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, Mt);
}
const el = /* @__PURE__ */ w(Vt, [["render", Yt]]), Gt = ["xs", "sm", "md", "lg", "xl"], Te = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, Kt = ["circle", "rounded", "square"], qt = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, Ie = Object.freeze({
  A: { bg: "hsla(0, 72%, 52%, 0.18)", fg: "hsl(0, 65%, 48%)" },
  B: { bg: "hsla(25, 88%, 52%, 0.18)", fg: "hsl(25, 75%, 45%)" },
  C: { bg: "hsla(38, 92%, 50%, 0.18)", fg: "hsl(38, 80%, 42%)" },
  D: { bg: "hsla(48, 96%, 48%, 0.18)", fg: "hsl(48, 85%, 40%)" },
  E: { bg: "hsla(58, 90%, 46%, 0.18)", fg: "hsl(58, 78%, 38%)" },
  F: { bg: "hsla(75, 72%, 42%, 0.18)", fg: "hsl(75, 65%, 36%)" },
  G: { bg: "hsla(88, 62%, 42%, 0.18)", fg: "hsl(88, 55%, 36%)" },
  H: { bg: "hsla(100, 58%, 40%, 0.18)", fg: "hsl(100, 52%, 34%)" },
  I: { bg: "hsla(142, 58%, 40%, 0.18)", fg: "hsl(142, 52%, 34%)" },
  J: { bg: "hsla(158, 62%, 38%, 0.18)", fg: "hsl(158, 55%, 32%)" },
  K: { bg: "hsla(168, 64%, 38%, 0.18)", fg: "hsl(168, 58%, 32%)" },
  L: { bg: "hsla(175, 68%, 40%, 0.18)", fg: "hsl(175, 60%, 34%)" },
  M: { bg: "hsla(186, 72%, 42%, 0.18)", fg: "hsl(186, 65%, 36%)" },
  N: { bg: "hsla(198, 76%, 44%, 0.18)", fg: "hsl(198, 68%, 38%)" },
  O: { bg: "hsla(210, 78%, 48%, 0.18)", fg: "hsl(210, 70%, 42%)" },
  P: { bg: "hsla(225, 76%, 52%, 0.18)", fg: "hsl(225, 68%, 46%)" },
  Q: { bg: "hsla(238, 72%, 56%, 0.18)", fg: "hsl(238, 65%, 50%)" },
  R: { bg: "hsla(252, 68%, 58%, 0.18)", fg: "hsl(252, 62%, 52%)" },
  S: { bg: "hsla(268, 64%, 58%, 0.18)", fg: "hsl(268, 58%, 52%)" },
  T: { bg: "hsla(282, 62%, 56%, 0.18)", fg: "hsl(282, 56%, 50%)" },
  U: { bg: "hsla(296, 58%, 54%, 0.18)", fg: "hsl(296, 52%, 48%)" },
  V: { bg: "hsla(310, 62%, 52%, 0.18)", fg: "hsl(310, 56%, 46%)" },
  W: { bg: "hsla(322, 66%, 50%, 0.18)", fg: "hsl(322, 60%, 44%)" },
  X: { bg: "hsla(334, 70%, 50%, 0.18)", fg: "hsl(334, 64%, 44%)" },
  Y: { bg: "hsla(346, 74%, 52%, 0.18)", fg: "hsl(346, 68%, 46%)" },
  Z: { bg: "hsla(358, 78%, 52%, 0.18)", fg: "hsl(358, 72%, 46%)" },
  default: { bg: "hsla(220, 14%, 50%, 0.15)", fg: "hsl(220, 12%, 45%)" }
}), ze = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Ut(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return ze[t] && (t = ze[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Qt(e) {
  var r;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const s = i[0][0] || "", n = i[i.length - 1][0] || "";
    return `${s}${n}`.toLocaleUpperCase("tr-TR");
  }
  return (((r = i[0]) == null ? void 0 : r[0]) || "?").toLocaleUpperCase("tr-TR");
}
const Zt = {
  name: "Avatar",
  inheritAttrs: !1,
  props: {
    /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
    src: {
      type: String,
      default: ""
    },
    /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
    name: {
      type: String,
      default: ""
    },
    /** `img` alt metni. */
    alt: {
      type: String,
      default: ""
    },
    /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
    fallback: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Gt.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => Kt.includes(e)
    },
    ring: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  data() {
    return {
      imageFailed: !1
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "span";
    },
    rootClass() {
      return C(
        "ui-avatar",
        Te[this.size] || Te.md,
        qt[this.shape] || "",
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    },
    rootBind() {
      if (!this.interactive)
        return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    initialsSource() {
      return this.name != null && this.name.trim() !== "" ? this.name.trim() : this.fallback != null && this.fallback.trim() !== "" ? this.fallback.trim() : (this.alt || "").trim();
    },
    displayInitials() {
      return Qt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Ut(e[0]) : "default";
    },
    letterColors() {
      return Ie[this.colorLetterKey] || Ie.default;
    },
    showLetterTone() {
      return (!this.src || this.imageFailed) && this.displayInitials !== "?";
    },
    rootStyle() {
      if (this.showLetterTone)
        return {
          backgroundColor: this.letterColors.bg,
          color: this.letterColors.fg
        };
    },
    resolvedAlt() {
      return this.alt != null && this.alt !== "" ? this.alt : this.initialsSource ? this.initialsSource : this.displayInitials !== "?" ? `Avatar: ${this.displayInitials}` : "Avatar";
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    }
  },
  methods: {
    onRootClick(e) {
      this.interactive && this.$emit("click", e);
    }
  }
}, Xt = ["src", "alt"], Jt = ["role", "aria-label", "aria-hidden"];
function ei(e, t, i, r, s, n) {
  return l(), _(ue(n.rootTag), I({
    type: i.interactive ? "button" : void 0,
    class: n.rootClass,
    style: n.rootStyle
  }, n.rootBind, { onClick: n.onRootClick }), {
    default: k(() => [
      i.src && !s.imageFailed ? (l(), o("img", {
        key: 0,
        src: i.src,
        alt: n.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
      }, null, 40, Xt)) : (l(), o("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : n.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, y(n.displayInitials), 9, Jt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const tl = /* @__PURE__ */ w(Zt, [["render", ei]]);
let ti = 0;
const ii = ["top", "bottom", "left", "right"], O = 8, ni = {
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
      validator: (e) => ii.includes(e)
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
      portalReady: !1,
      panelStyle: {},
      tooltipId: `ui-tooltip-${++ti}`,
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
    this.portalReady = !0, window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("keydown", this.onDocumentKeydown);
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
      const t = e.getBoundingClientRect(), i = O, r = t.left + t.width / 2, s = t.top + t.height / 2;
      let n = this.placement, a = {};
      switch (n) {
        case "bottom":
          a = {
            left: `${r}px`,
            top: `${t.bottom + i}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          a = {
            left: `${t.left - i}px`,
            top: `${s}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          a = {
            left: `${t.right + i}px`,
            top: `${s}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          a = {
            left: `${r}px`,
            top: `${t.top - i}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = a, this.$nextTick(() => {
        this.clampToViewport(t, n, i);
      });
    },
    clampToViewport(e, t, i) {
      const r = this.$refs.panelRef;
      if (!r) return;
      const s = window.innerWidth, n = window.innerHeight;
      let a = r.getBoundingClientRect();
      t === "top" && a.top < O ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, a = r.getBoundingClientRect()) : t === "bottom" && a.bottom > n - O && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, a = r.getBoundingClientRect());
      let d = 0, u = 0;
      if (a.left < O ? d = O - a.left : a.right > s - O && (d = s - O - a.right), a.top < O ? u = O - a.top : a.bottom > n - O && (u = n - O - a.bottom), d === 0 && u === 0) return;
      const c = parseFloat(this.panelStyle.left), p = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(p) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + d}px`,
        top: `${p + u}px`
      });
    }
  }
}, ri = ["id"], si = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function ai(e, t, i, r, s, n) {
  return l(), o("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => n.onEnter && n.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => n.onLeave && n.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => n.onFocusIn && n.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => n.onFocusOut && n.onFocusOut(...a))
  }, [
    m(e.$slots, "default"),
    s.portalReady ? (l(), _(Z, {
      key: 0,
      to: "body"
    }, [
      g(ae, { name: "ui-tooltip-fade" }, {
        default: k(() => [
          s.open && !i.disabled && n.hasContent ? (l(), o("div", {
            key: 0,
            id: s.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: G(s.panelStyle),
            role: "tooltip"
          }, [
            h("span", si, [
              m(e.$slots, "content", {}, () => [
                D(y(i.label), 1)
              ])
            ])
          ], 12, ri)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 544);
}
const mt = /* @__PURE__ */ w(ni, [["render", ai]]);
function de(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [s, n] of Object.entries(e || {}))
    i.has(s) || (r[s] = n);
  return r;
}
const li = [
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
], oi = ["xs", "sm", "md", "lg"], Le = {
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
}, Ae = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, J = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
};
function ui(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function di(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const ci = {
  name: "Badge",
  components: { Tooltip: mt },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => li.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => oi.includes(e)
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
      validator: (e) => Object.keys(J).includes(e)
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
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    /** Tıklanabilir etiket — `button` olarak basılır (kaldır / seç). */
    clickable: {
      type: Boolean,
      default: !1
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
    isClickable() {
      return this.clickable || typeof this.$attrs.onClick == "function";
    },
    rootTag() {
      return this.isClickable ? "button" : "span";
    },
    rootAttrs() {
      const e = de(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? J[this.maxWidth] || J[48] : "";
    },
    hasAdornment() {
      return !!(this.prefixIcon || this.suffixIcon || this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return ui(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: di(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return C(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        Ae[this.size] || Ae.sm,
        this.isClickable ? "ui-badge--clickable" : "",
        !this.normalizedHex && (Le[this.variant] || Le.solid),
        this.$attrs.class
      );
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
}, fi = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, hi = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, mi = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, pi = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function gi(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("Tooltip");
  return l(), _(d, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: k(() => [
      (l(), _(ue(n.rootTag), I(n.rootAttrs, {
        class: n.badgeClasses,
        style: n.hexBadgeStyle
      }), {
        default: k(() => [
          i.prefixIcon ? (l(), o("span", fi, [
            g(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (l(), o("span", hi, [
            m(e.$slots, "prepend")
          ])) : f("", !0),
          h("span", {
            ref: "labelRef",
            class: v(["ui-badge-label", [n.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", mi, [
            g(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (l(), o("span", pi, [
            m(e.$slots, "append")
          ])) : f("", !0)
        ]),
        _: 3
      }, 16, ["class", "style"]))
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const yi = /* @__PURE__ */ w(ci, [["render", gi]]), pt = "(max-width: 767px)", gt = E(!1);
function ee() {
  typeof window > "u" || (gt.value = window.matchMedia(pt).matches);
}
if (typeof window < "u") {
  ee();
  const e = window.matchMedia(pt);
  typeof e.addEventListener == "function" ? e.addEventListener("change", ee) : typeof e.addListener == "function" && e.addListener(ee);
}
function $() {
  return gt.value;
}
function Y(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = $();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
function yt(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const bi = ["sm", "md", "lg"], vi = ["solid", "outline", "ghost", "link", "nav"], ki = ["primary", "secondary", "input", "warning", "success", "info", "danger"], Si = ["button", "submit", "reset"], De = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Fe = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Be = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none"
}, _i = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Pe = {
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
}, wi = {
  name: "Button",
  components: { RouterLink: Bt },
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
      validator: (e) => Si.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => vi.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ki.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => bi.includes(e)
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
    /**
     * İkon + metin dikey yığılır (`prefixIcon` üstte, slot altta).
     * `cubed` ile birlikte kullanılmaz.
     */
    stack: {
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
      return this.stack || !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.hasRenderableDefaultSlot : !0;
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
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : yt(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center", t = this.fulled || this.block;
      return this.stack ? ["ui-button-text max-w-full truncate", e].join(" ") : t || this.variant === "nav" ? ["ui-button-text min-w-0 flex-1 truncate", e].join(" ") : ["ui-button-text whitespace-nowrap", e].join(" ");
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.resolvedSize === "lg" ? "sm" : "xs";
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      return { sm: "xs", md: "sm", lg: "sm" }[this.resolvedSize] || "sm";
    },
    /** Dikey yığın: segment sekmelerine yakın dokunma hedefi. */
    stackIconSize() {
      return { sm: "sm", md: "sm", lg: "md" }[this.resolvedSize] || "sm";
    },
    buttonClasses() {
      var a, d;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.stack && !e && !t ? i = Be[this.resolvedSize] || Be.md : this.cubed && !e && !t ? i = Fe[this.resolvedSize] || Fe.md : e ? i = _i[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = De[this.resolvedSize] || De.md;
      let r = "";
      !e && !t && (this.stack || this.rounded || this.cubed) && (r = "rounded-full");
      const s = ((a = Pe[this.variant]) == null ? void 0 : a[this.color]) || ((d = Pe.solid) == null ? void 0 : d.primary), n = this.fulled || this.block;
      return [
        "ui-button ui-control font-sans",
        this.stack ? "ui-button--stack" : "",
        s,
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
      if (e == null || typeof e != "object" || e.type === Ct) return !1;
      if (e.type === Tt)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === F) {
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
      this.$emit("click", e), !e.defaultPrevented && t(e);
    }
  }
}, xi = ["href", "data-variant", "data-color", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], Ci = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Ti = {
  key: 0,
  class: "sr-only"
}, Ii = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, zi = {
  key: 0,
  class: "sr-only"
}, Li = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ai = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Di = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Fi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Bi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Pi = ["type", "disabled", "data-variant", "data-color", "data-loading", "aria-busy"], Ri = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Oi = {
  key: 0,
  class: "sr-only"
}, Ei = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, $i = {
  key: 0,
  class: "sr-only"
}, Vi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Mi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ni = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, ji = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Hi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Wi(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("RouterLink");
  return n.hasRouterTo ? (l(), _(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: k(({ href: u, navigate: c }) => [
      h("a", {
        href: u,
        class: v(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (p) => n.onRouterLinkClick(p, c)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), o(F, { key: 0 }, [
          h("span", Ci, [
            g(a, {
              size: n.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), o("span", Ti, y(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (l(), o(F, { key: 1 }, [
          h("span", Ii, [
            g(a, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), o("span", zi, y(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.stack ? (l(), o(F, { key: 2 }, [
          i.prefixIcon ? (l(), o("span", Li, [
            g(a, {
              size: n.stackIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: v(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", Ai, [
            g(a, {
              size: n.stackIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", Di, [
          i.prefixIcon ? (l(), _(a, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(a, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (l(), o(F, { key: 4 }, [
          i.prefixIcon ? (l(), o("span", Fi, [
            g(a, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: v(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", Bi, [
            g(a, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, xi)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), o("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: v(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    "data-loading": i.loading ? "true" : void 0,
    "aria-busy": i.loading ? "true" : void 0,
    onClick: t[0] || (t[0] = (...u) => n.onClick && n.onClick(...u))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), o(F, { key: 0 }, [
      h("span", Ri, [
        g(a, {
          size: n.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), o("span", Oi, y(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (l(), o(F, { key: 1 }, [
      h("span", Ei, [
        g(a, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), o("span", $i, y(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.stack ? (l(), o(F, { key: 2 }, [
      i.prefixIcon ? (l(), o("span", Vi, [
        g(a, {
          size: n.stackIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: v(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), o("span", Mi, [
        g(a, {
          size: n.stackIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", Ni, [
      i.prefixIcon ? (l(), _(a, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(a, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (l(), o(F, { key: 4 }, [
      i.prefixIcon ? (l(), o("span", ji, [
        g(a, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: v(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), o("span", Hi, [
        g(a, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, Pi));
}
const il = /* @__PURE__ */ w(wi, [["render", Wi]]), Yi = ["none", "sm", "md"], Re = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Gi = {
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
      validator: (e) => Yi.includes(e)
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
      return ["ui-divider", Re[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Re[this.spacing] || "",
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
}, Ki = { class: "ui-divider__label" }, qi = {
  key: 1,
  class: "ui-section-label"
};
function Ui(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return n.hasLabel ? (l(), o("div", I({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Ki, [
      i.icon ? (l(), _(a, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (l(), o("span", qi, y(i.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), o("hr", I({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const ce = /* @__PURE__ */ w(Gi, [["render", Ui]]), Qi = ["solid", "dashed", "dotted", "double"], Oe = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Zi = ["solid", "regular", "brands", "light", "duotone", "thin"], Xi = {
  name: "Card",
  components: { Divider: ce },
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
      validator: (e) => Qi.includes(e)
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
      validator: (e) => Zi.includes(e)
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
    /** Hover’da hafif yükselme + primary vurgu (etkinlik / tıklanabilir kart). */
    interactive: {
      type: Boolean,
      default: !1
    },
    /** Primary kenar / zemin vurgusu (ör. “bugün” etkinlik kartı). */
    emphasized: {
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
      return Oe[this.borderType] || Oe.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), C(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ji = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, en = {
  key: 0,
  class: "ui-header-lead"
}, tn = { class: "ui-header-lead__main" }, nn = {
  key: 0,
  class: "ui-header-lead__icon"
}, rn = { class: "ui-header-lead__text" }, sn = {
  key: 0,
  class: "ui-heading-3"
}, an = {
  key: 1,
  class: "ui-text-default"
}, ln = {
  key: 0,
  class: "ui-header-lead__actions"
};
function on(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("Divider");
  return l(), o("div", I({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), o("div", Ji, [
      m(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (l(), o("div", {
      key: 1,
      class: v(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), o("div", en, [
          h("div", tn, [
            i.icon ? (l(), o("span", nn, [
              g(a, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", rn, [
              i.title ? (l(), o("h3", sn, y(i.title), 1)) : f("", !0),
              i.description ? (l(), o("p", an, y(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), o("div", ln, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    n.showHeaderDivider ? (l(), _(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (l(), o("div", {
      key: 3,
      class: v(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (l(), o("div", {
      key: 4,
      class: v(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const nl = /* @__PURE__ */ w(Xi, [["render", on]]), A = ut({
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
function rl(e = {}) {
  return new Promise((t) => {
    A.title = e.title ?? "", A.description = e.description ?? "", A.confirmLabel = e.confirmLabel ?? "", A.cancelLabel = e.cancelLabel ?? "", A.destructive = !!e.destructive, A._resolve = t, A.open = !0;
  });
}
function te(e) {
  const t = A._resolve;
  A.open = !1, A._resolve = null, t && t(!!e);
}
const un = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return A;
    },
    syncOpen: {
      get() {
        return A.open;
      },
      set(e) {
        e ? A.open = !0 : A._resolve ? te(!1) : A.open = !1;
      }
    },
    confirmText() {
      return A.confirmLabel ? A.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return A.cancelLabel ? A.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      te(!0);
    },
    onCancel() {
      te(!1);
    }
  }
};
function dn(e, t, i, r, s, n) {
  const a = b("ui-button"), d = b("ui-dialog");
  return l(), _(d, {
    open: n.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (u) => n.syncOpen = u),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: n.confirmState.title,
    description: n.confirmState.description,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": n.confirmState.title || n.fallbackAriaLabel
  }, {
    footer: k(() => [
      g(a, {
        color: "secondary",
        rounded: "",
        onClick: n.onCancel
      }, {
        default: k(() => [
          D(y(n.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      g(a, {
        rounded: "",
        color: n.confirmState.destructive ? "danger" : "primary",
        onClick: n.onConfirm
      }, {
        default: k(() => [
          D(y(n.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const sl = /* @__PURE__ */ w(un, [["render", dn]]);
function bt(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function vt(e, t = "tr-TR") {
  return !(e instanceof Date) || Number.isNaN(e.getTime()) ? "" : e.toLocaleDateString(bt(t), {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function al(e, t = "tr-TR") {
  if (e == null || e === "") return "";
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return "";
  const r = Number(i[1]), s = Number(i[2]) - 1, n = Number(i[3]), a = new Date(r, s, n);
  return a.getFullYear() !== r || a.getMonth() !== s || a.getDate() !== n ? "" : vt(a, t);
}
let Ee = 0;
function $e(e) {
  return String(e).padStart(2, "0");
}
function W(e) {
  return `${e.getFullYear()}-${$e(e.getMonth() + 1)}-${$e(e.getDate())}`;
}
function ie(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, s = Number(t[3]), n = new Date(i, r, s);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== s ? null : n;
}
const cn = {
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
    },
    /**
     * Restaurant day-end (`HH:mm`). When set, dün/bugün/yarın and “today”
     * highlight follow the business day (same as backend `toBusinessDate`).
     */
    businessDayEnd: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    Ee += 1;
    const e = Ee, t = ie(this.modelValue) || /* @__PURE__ */ new Date();
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
      return ie(this.modelValue);
    },
    locale() {
      var e;
      return bt((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      return this.selectedDate ? vt(this.selectedDate, this.locale) : this.placeholder;
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
    /** Local calendar date representing the current business “today”. */
    referenceTodayDate() {
      const e = String(this.businessDayEnd || "").trim();
      if (!/^\d{1,2}:\d{2}$/.test(e)) {
        const s = /* @__PURE__ */ new Date();
        return new Date(s.getFullYear(), s.getMonth(), s.getDate());
      }
      const [t, i] = e.split(":").map((s) => Number(s) || 0), r = new Date(Date.now() - (t * 60 + i) * 60 * 1e3);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate());
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(this.referenceTodayDate);
    },
    yesterdayQuickDisabled() {
      const e = new Date(this.referenceTodayDate);
      return e.setDate(e.getDate() - 1), this.isQuickDateDisabled(e);
    },
    tomorrowQuickDisabled() {
      const e = new Date(this.referenceTodayDate);
      return e.setDate(e.getDate() + 1), this.isQuickDateDisabled(e);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), s = W(this.referenceTodayDate), n = [];
      for (let a = 0; a < 42; a += 1) {
        const d = new Date(r.getFullYear(), r.getMonth(), r.getDate() + a), u = d.getMonth() === t && d.getFullYear() === e, c = d.getDate(), p = W(d), z = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, L = !!(this.selectedDate && p === W(this.selectedDate)), T = s === p, S = !!(this.minYmd && p < this.minYmd);
        n.push({
          key: z,
          d: c,
          out: !u,
          date: d,
          sel: L,
          today: T,
          inMonth: u,
          disabled: S
        });
      }
      return n;
    }
  },
  watch: {
    modelValue() {
      const e = ie(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = W(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = W(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = new Date(this.referenceTodayDate);
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const r = W(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, fn = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, hn = { class: "mb-3 flex items-center justify-between gap-2" }, mn = { class: "text-sm font-medium tabular-nums text-foreground" }, pn = { class: "ui-datepicker-grid" }, gn = {
  key: 0,
  class: "ui-datepicker-quick"
}, yn = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, bn = { class: "mb-3 flex items-center justify-between gap-2" }, vn = { class: "text-sm font-medium tabular-nums text-foreground" }, kn = { class: "ui-datepicker-grid" }, Sn = {
  key: 0,
  class: "ui-datepicker-quick"
};
function _n(e, t, i, r, s, n) {
  const a = b("ui-button"), d = b("ui-popover");
  return l(), o("div", {
    class: v([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.fulled ? "ui-datepicker--fulled w-full" : "",
      !i.embedded && !i.fulled ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (l(), o("div", fn, [
      h("div", hn, [
        g(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = P((u) => n.shiftMonth(-1), ["stop"]))
        }),
        h("span", mn, y(n.monthTitle), 1),
        g(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          "aria-label": "Next month",
          onClick: t[1] || (t[1] = P((u) => n.shiftMonth(1), ["stop"]))
        })
      ]),
      t[8] || (t[8] = h("div", { class: "ui-datepicker-weekdays mb-2" }, [
        h("span", null, "Su"),
        h("span", null, "Mo"),
        h("span", null, "Tu"),
        h("span", null, "We"),
        h("span", null, "Th"),
        h("span", null, "Fr"),
        h("span", null, "Sa")
      ], -1)),
      h("div", pn, [
        (l(!0), o(F, null, M(n.calendarCells, (u) => (l(), _(a, {
          key: u.key,
          variant: n.dayVariant(u),
          color: n.dayColor(u),
          size: "sm",
          cubed: "",
          disabled: u.disabled,
          "aria-selected": u.sel ? "true" : "false",
          "aria-disabled": u.disabled ? "true" : void 0,
          "data-outside": u.inMonth ? void 0 : "true",
          "data-today": u.today ? "true" : void 0,
          onClick: (c) => n.pick(u)
        }, {
          default: k(() => [
            D(y(u.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ]),
      i.showQuick ? (l(), o("div", gn, [
        g(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.yesterdayQuickDisabled,
          onClick: t[2] || (t[2] = (u) => n.pickQuick("yesterday"))
        }, {
          default: k(() => [
            D(y(n.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        g(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.todayQuickDisabled,
          onClick: t[3] || (t[3] = (u) => n.pickQuick("today"))
        }, {
          default: k(() => [
            D(y(n.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        g(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.tomorrowQuickDisabled,
          onClick: t[4] || (t[4] = (u) => n.pickQuick("tomorrow"))
        }, {
          default: k(() => [
            D(y(n.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (l(), _(d, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (u) => s.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: k(({ open: u, toggle: c, close: p }) => [
        m(e.$slots, "trigger", {
          open: u,
          toggle: c,
          close: p
        }, () => [
          g(a, {
            type: "button",
            id: n.resolvedId,
            variant: "solid",
            color: "input",
            fulled: i.fulled,
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": u ? "true" : "false",
            "aria-haspopup": !0,
            onClick: c
          }, {
            default: k(() => [
              h("span", {
                class: v([
                  "min-w-0 flex-1 truncate",
                  n.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, y(n.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: k(({ close: u }) => [
        h("div", yn, [
          h("div", bn, [
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[5] || (t[5] = P((c) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", vn, y(n.monthTitle), 1),
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[6] || (t[6] = P((c) => n.shiftMonth(1), ["stop"]))
            })
          ]),
          t[9] || (t[9] = h("div", { class: "ui-datepicker-weekdays mb-2" }, [
            h("span", null, "Su"),
            h("span", null, "Mo"),
            h("span", null, "Tu"),
            h("span", null, "We"),
            h("span", null, "Th"),
            h("span", null, "Fr"),
            h("span", null, "Sa")
          ], -1)),
          h("div", kn, [
            (l(!0), o(F, null, M(n.calendarCells, (c) => (l(), _(a, {
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
              onClick: (p) => n.pick(c, u)
            }, {
              default: k(() => [
                D(y(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          i.showQuick ? (l(), o("div", Sn, [
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", u)
            }, {
              default: k(() => [
                D(y(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (c) => n.pickQuick("today", u)
            }, {
              default: k(() => [
                D(y(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.tomorrowQuickDisabled,
              onClick: (c) => n.pickQuick("tomorrow", u)
            }, {
              default: k(() => [
                D(y(n.resolvedTomorrowLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])) : f("", !0)
        ])
      ]),
      _: 3
    }, 8, ["open", "match-trigger-width", "disabled"]))
  ], 2);
}
const ll = /* @__PURE__ */ w(cn, [["render", _n]]);
let oe = 0;
const kt = [];
function ol(e) {
  return oe += 1, `${e}-${oe}`;
}
function wn(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return kt.push(() => {
    t = 0;
  }), i;
}
function ul() {
  oe = 0;
  for (const e of kt)
    e();
}
const xn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), Cn = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function Tn(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function Ve(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (Tn(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function In(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function Me(e, { skipFooter: t = !1 } = {}) {
  const i = Ve(e, xn, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = Ve(e, Cn, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function zn(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && Me(t))
    return !0;
  for (const i of In(e))
    if (Me(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Ln = wn("ui-dialog"), An = ["solid", "dashed", "dotted", "double"], Ne = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Dn = ["solid", "regular", "brands", "light", "duotone", "thin"], Fn = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], je = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, Bn = {
  name: "Dialog",
  components: { Divider: ce },
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
      validator: (e) => Fn.includes(e)
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
      validator: (e) => An.includes(e)
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
      validator: (e) => Dn.includes(e)
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
    const e = Ln();
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      portalReady: !1,
      focusFallbackTimer: null,
      sheetDragCleanup: null,
      layerMounted: !1,
      layerClosing: !1
    };
  },
  watch: {
    open: {
      immediate: !0,
      handler(e) {
        if (e) {
          if (this.layerMounted || this.layerClosing) return;
          this.layerMounted = !0, this.$nextTick(() => {
            this.resetPanelMotionStyles(), this.animateLayerIn(this.$refs.layerRef);
          });
        } else this.layerMounted && !this.layerClosing && this.dismissLayer();
      }
    }
  },
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.clearSheetDragListeners(), this.layerMounted = !1, this.layerClosing = !1;
  },
  computed: {
    hasTitle() {
      return !!(this.$slots.title || this.title != null && this.title !== "");
    },
    hasDescription() {
      return !!(this.$slots.description || this.description != null && this.description !== "");
    },
    hasDefaultHeader() {
      return !!(this.icon || this.hasTitle || this.hasDescription || this.$slots.actions || this.$slots.append || this.showClose);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    borderStyleClass() {
      return Ne[this.borderType] || Ne.solid;
    },
    maxWidthClass() {
      return je[this.maxWidth] || je.lg;
    },
    panelClasses() {
      const e = this.border ? C("border", this.borderStyleClass) : C("border-0", "border-transparent");
      return C(
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
      return de(this.$attrs, ["class"]);
    },
    ariaLabelledby() {
      if (this.hasTitle)
        return this.titleId;
    },
    ariaDescribedby() {
      if (this.hasDescription)
        return this.descriptionId;
    },
    ariaLabelAttr() {
      if (!this.ariaLabelledby && this.ariaLabel != null && this.ariaLabel !== "")
        return this.ariaLabel;
    },
    resolvedCloseLabel() {
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : yt(this, "ui.dialog.close", "Close");
    },
    rootLayerClasses() {
      return C(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm"
      );
    }
  },
  methods: {
    prefersReducedMotion() {
      return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    layerMotionParts(e) {
      return {
        panel: e.querySelector(".ui-dialog-panel"),
        motion: e.querySelector(".ui-dialog-motion"),
        backdrop: e.querySelector(".ui-dialog-backdrop")
      };
    },
    clearLayerInlineMotion(e) {
      const { panel: t, motion: i, backdrop: r } = this.layerMotionParts(e);
      i && (i.style.removeProperty("transform"), i.style.removeProperty("transition")), t && (t.style.removeProperty("transform"), t.style.removeProperty("transition"), t.style.removeProperty("opacity")), r && (r.style.removeProperty("opacity"), r.style.removeProperty("transition"));
    },
    waitLayerTransition(e, t, i) {
      if (!e) {
        i();
        return;
      }
      let r = !1;
      const s = () => {
        r || (r = !0, i());
      };
      e.addEventListener(
        "transitionend",
        (n) => {
          n.target === e && s();
        },
        { once: !0 }
      ), window.setTimeout(s, t);
    },
    animateLayerIn(e) {
      if (!e) {
        this.onOverlayAfterEnter();
        return;
      }
      if (this.prefersReducedMotion()) {
        this.onOverlayAfterEnter();
        return;
      }
      const { panel: t, motion: i, backdrop: r } = this.layerMotionParts(e), s = $();
      r && (r.style.opacity = "0"), t && (t.style.opacity = "0"), i && (s ? i.style.transform = "translate3d(0, 100%, 0)" : i.style.transform = "scale3d(0.96, 0.96, 1)"), e.offsetHeight, requestAnimationFrame(() => {
        r && (r.style.transition = "opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1)", r.style.opacity = "1"), t && (t.style.transition = "opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1)", t.style.opacity = "1"), i && (s ? (i.style.transition = "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)", i.style.transform = "translate3d(0, 0, 0)") : (i.style.transition = "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)", i.style.transform = "scale3d(1, 1, 1)")), this.waitLayerTransition(i || t || r, 460, () => {
          this.onOverlayAfterEnter();
        });
      });
    },
    animateLayerOut(e, t) {
      if (!e || this.prefersReducedMotion()) {
        t();
        return;
      }
      this.clearLayerInlineMotion(e);
      const { panel: i, motion: r, backdrop: s } = this.layerMotionParts(e), n = $();
      e.offsetHeight, requestAnimationFrame(() => {
        s && (s.style.transition = "opacity 0.38s cubic-bezier(0.4, 0, 0.2, 1)", s.style.opacity = "0"), i && (i.style.transition = "opacity 0.36s cubic-bezier(0.4, 0, 0.2, 1)", i.style.opacity = "0"), r && (n ? (r.style.transition = "transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)", r.style.transform = "translate3d(0, 100%, 0)") : (r.style.transition = "transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)", r.style.transform = "scale3d(0.96, 0.96, 1)")), this.waitLayerTransition(r || i || s, 400, t);
      });
    },
    dismissLayer() {
      if (!this.layerMounted || this.layerClosing) return;
      this.clearFocusFallback(), this.clearSheetDragListeners(), this.layerClosing = !0;
      const e = this.$refs.layerRef;
      this.animateLayerOut(e, () => {
        this.layerMounted = !1, this.layerClosing = !1, this.resetPanelMotionStyles(), this.open && this.$emit("update:open", !1), this.$emit("after-leave");
      });
    },
    resetPanelMotionStyles() {
      const e = this.$refs.panelRef, t = e == null ? void 0 : e.querySelector(".ui-dialog-motion");
      t && (t.style.removeProperty("transform"), t.style.removeProperty("transition")), e && (e.style.removeProperty("transform"), e.style.removeProperty("transition"), e.style.removeProperty("opacity"));
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const e = this.$refs.panelRef, i = (e == null ? void 0 : e.querySelector(".ui-dialog-motion")) || e;
        if (!i) {
          this.runInitialFocus();
          return;
        }
        const r = (s) => {
          s.target === i && (i.removeEventListener("transitionend", r), this.clearFocusFallback(), this.runInitialFocus());
        };
        i.addEventListener("transitionend", r), this.focusFallbackTimer = setTimeout(() => {
          i.removeEventListener("transitionend", r), this.focusFallbackTimer = null, this.runInitialFocus();
        }, 440);
      }));
    },
    runInitialFocus() {
      !this.open || !this.initialFocus || this.$nextTick(() => {
        this.focusInitialField();
      });
    },
    focusInitialField() {
      var t;
      if ($()) return;
      const e = this.$refs.panelRef;
      e && zn(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
    },
    close() {
      this.dismissLayer();
    },
    onBackdrop() {
      this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      this.closeOnEscape && e.key === "Escape" && (e.preventDefault(), this.close());
    },
    clearSheetDragListeners() {
      this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null);
    },
    teardownSheetDrag(e = !0) {
      this.clearSheetDragListeners(), e && this.resetPanelMotionStyles();
    },
    isSheetDragBlockedTarget(e) {
      return e instanceof Element ? !!e.closest(
        'button, a, input, textarea, select, label, [role="button"], [contenteditable="true"], [data-no-sheet-drag]'
      ) : !1;
    },
    onSheetPointerDown(e) {
      if (!$() || e.button !== 0 || this.isSheetDragBlockedTarget(e.target)) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const s = (d) => {
        const u = Math.max(0, d.clientY - i);
        t.style.transform = `translateY(${u}px)`;
      }, n = (d) => {
        const u = Math.max(0, d.clientY - i);
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), u >= 72) {
          t.style.removeProperty("transition"), t.style.removeProperty("transform"), this.close();
          return;
        }
        t.style.transition = r, t.style.transform = "";
      }, a = () => {
        this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), t.style.transition = r, t.style.transform = "";
      };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", a), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", a);
      };
    }
  }
}, Pn = ["aria-labelledby", "aria-describedby", "aria-label"], Rn = { class: "ui-dialog-motion" }, On = {
  key: 0,
  class: "ui-dialog-header__icon"
}, En = ["id"], $n = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Vn = ["id"], Mn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, Nn = {
  key: 4,
  class: "ui-card-footer"
};
function jn(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("ui-button"), u = b("Divider");
  return s.portalReady ? (l(), _(Z, {
    key: 0,
    to: "body"
  }, [
    s.layerMounted ? (l(), o("div", {
      key: 0,
      ref: "layerRef",
      class: v(n.rootLayerClasses),
      tabindex: "-1",
      role: "presentation",
      onKeydown: t[4] || (t[4] = (...c) => n.onLayerKeydown && n.onLayerKeydown(...c))
    }, [
      h("div", {
        class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
        "aria-hidden": "true",
        onClick: t[0] || (t[0] = (...c) => n.onBackdrop && n.onBackdrop(...c))
      }),
      h("div", I({
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
        onClick: t[3] || (t[3] = P(() => {
        }, ["stop"]))
      }), [
        h("div", Rn, [
          h("div", {
            class: "ui-dialog-sheet-grab shrink-0",
            onPointerdown: t[1] || (t[1] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [...t[5] || (t[5] = [
            h("div", {
              class: "ui-dialog-sheet-handle",
              "aria-hidden": "true"
            }, null, -1)
          ])], 32),
          n.hasHeaderBlock ? (l(), o("div", {
            key: 0,
            class: "ui-card-header ui-dialog-sheet-drag shrink-0",
            onPointerdown: t[2] || (t[2] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [
            m(e.$slots, "header", {}, () => [
              n.hasDefaultHeader ? (l(), o("div", {
                key: 0,
                class: v(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
              }, [
                i.icon ? (l(), o("span", On, [
                  g(a, {
                    name: i.icon,
                    type: i.iconType,
                    size: "sm"
                  }, null, 8, ["name", "type"])
                ])) : f("", !0),
                n.hasTitle ? (l(), o("h3", {
                  key: 1,
                  id: s.titleId,
                  class: "ui-dialog-header__title ui-heading-3"
                }, [
                  m(e.$slots, "title", {}, () => [
                    D(y(i.title), 1)
                  ])
                ], 8, En)) : f("", !0),
                i.showClose || e.$slots.append || e.$slots.actions ? (l(), o("div", $n, [
                  m(e.$slots, "append"),
                  m(e.$slots, "actions"),
                  i.showClose ? (l(), _(d, {
                    key: 0,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    class: "ui-dialog-header__close",
                    "aria-label": n.resolvedCloseLabel,
                    onClick: n.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0)
                ])) : f("", !0),
                n.hasDescription ? (l(), o("p", {
                  key: 3,
                  id: s.descriptionId,
                  class: "ui-dialog-header__description ui-text-default"
                }, [
                  m(e.$slots, "description", {}, () => [
                    D(y(i.description), 1)
                  ])
                ], 8, Vn)) : f("", !0)
              ], 2)) : f("", !0)
            ])
          ], 32)) : f("", !0),
          e.$slots.toolbar ? (l(), o("div", Mn, [
            m(e.$slots, "toolbar")
          ])) : f("", !0),
          n.showHeaderDivider ? (l(), _(u, {
            key: 2,
            spacing: "none",
            class: "!my-0 shrink-0"
          })) : f("", !0),
          e.$slots.default ? (l(), o("div", {
            key: 3,
            class: v(["ui-card-body ui-text-default", {
              "ui-card-body--row": i.row,
              "ui-card-body--flush": i.bodyPadding === "none",
              "ui-card-body--flex": i.bodyLayout === "flex"
            }])
          }, [
            m(e.$slots, "default")
          ], 2)) : f("", !0),
          e.$slots.footer ? (l(), o("div", Nn, [
            m(e.$slots, "footer")
          ])) : f("", !0)
        ])
      ], 16, Pn)
    ], 34)) : f("", !0)
  ])) : f("", !0);
}
const dl = /* @__PURE__ */ w(Bn, [["render", jn]]), Hn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Wn = {
  name: "Dropdown",
  components: { Divider: ce },
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
      validator: (e) => Hn.includes(e)
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
function Yn(e, t, i, r, s, n) {
  const a = b("Divider"), d = b("ui-button"), u = b("ui-popover");
  return l(), _(u, {
    open: n.isOpen,
    placement: i.placement,
    "match-trigger-width": i.matchTriggerWidth,
    block: i.block,
    "inherit-layout": i.inheritLayout,
    "mobile-centered": !1,
    "close-on-outside-click": i.closeOnOutsideClick,
    "close-on-escape": i.closeOnEscape,
    "outside-click-ignore-selector": i.outsideClickIgnoreSelector,
    "onUpdate:open": n.onOpenChange
  }, {
    trigger: k((c) => [
      m(e.$slots, "trigger", dt(ct(c)))
    ]),
    content: k(({ close: c }) => [
      h("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = P(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? m(e.$slots, "menu", {
          key: 0,
          close: c
        }) : (l(!0), o(F, { key: 1 }, M(i.items, (p, z) => (l(), o(F, { key: z }, [
          p.divider ? (l(), _(a, {
            key: 0,
            spacing: "sm"
          })) : (l(), _(d, {
            key: 1,
            variant: "ghost",
            color: n.itemColor(p),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": p.icon || null,
            "suffix-icon": p.suffixIcon || p.suffix_icon || null,
            disabled: p.disabled,
            onClick: P((L) => n.onItem(p, c), ["stop"])
          }, {
            default: k(() => [
              D(y(p.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "suffix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const cl = /* @__PURE__ */ w(Wn, [["render", Yn]]), Gn = ["solid", "regular", "brands", "light", "duotone", "thin"], Kn = ["sm", "md", "lg"], qn = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Un = {
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
      validator: (e) => Gn.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Kn.includes(e)
    }
  },
  computed: {
    iconSize() {
      return qn[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return C("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Qn = {
  key: 0,
  class: "ui-empty-icon"
}, Zn = {
  key: 1,
  class: "ui-empty-title"
}, Xn = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Jn = {
  key: 3,
  class: "ui-empty-actions"
};
function er(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), o("div", Qn, [
      g(a, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (l(), o("h2", Zn, y(i.title), 1)) : f("", !0),
    i.description ? (l(), o("p", Xn, y(i.description), 1)) : f("", !0),
    e.$slots.default ? (l(), o("div", Jn, [
      m(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const fl = /* @__PURE__ */ w(Un, [["render", er]]);
let He = 0;
const tr = ["vertical", "horizontal"], ir = ["default", "card"], nr = {
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
      validator: (e) => tr.includes(e)
    },
    /**
     * `direction="horizontal"` iken dar viewport’ta dikey yığılır
     * (`max-width: 767px` — segment `icon-only="mobile"` ile aynı kırılım).
     */
    stackOnMobile: {
      type: Boolean,
      default: !1
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => ir.includes(e)
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
    He += 1;
    const e = He;
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
      const e = this.stackOnMobile && this.direction === "horizontal" ? "ui-form-row--stack-mobile" : "";
      return this.variant === "card" ? [this.direction === "vertical" ? "ui-form-row--card ui-form-row--card-vertical" : "ui-form-row--card ui-form-row--card-horizontal", e].filter(Boolean).join(" ") : [this.direction === "horizontal" ? "ui-form-row--horizontal" : "ui-form-row--vertical", e].filter(Boolean).join(" ");
    },
    labelLineClass() {
      const e = "ui-form-row-label-line";
      return !this.label && this.$slots.action ? `${e} ui-form-row-label-line--action-only` : e;
    }
  }
}, rr = ["data-primary-field"], sr = {
  key: 0,
  class: "ui-form-row-text"
}, ar = ["for"], lr = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, or = ["id"], ur = { class: "ui-form-row-control" };
function dr(e, t, i, r, s, n) {
  return l(), o("div", I({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), o("div", sr, [
      i.label || e.$slots.action ? (l(), o("div", {
        key: 0,
        class: v(n.labelLineClass)
      }, [
        i.label ? (l(), o("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, y(i.label), 9, ar)) : f("", !0),
        e.$slots.action ? (l(), o("div", lr, [
          m(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description ? (l(), o("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, y(i.description), 9, or)) : f("", !0)
    ])) : f("", !0),
    h("div", ur, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 16, rr);
}
const hl = /* @__PURE__ */ w(nr, [["render", dr]]), cr = ["solid", "regular", "brands", "light", "duotone", "thin"], We = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, fr = ["xs", "sm", "md", "lg", "xl"], hr = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, mr = {
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
      validator: (e) => cr.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => fr.includes(e)
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
      return We[this.type] || We.light;
    },
    iconClass() {
      return C(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        hr[this.size],
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
function pr(e, t, i, r, s, n) {
  return l(), o("i", I({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const ml = /* @__PURE__ */ w(mr, [["render", pr]]), gr = ["sm", "md", "lg"], yr = ["default", "plain"], br = {
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
      validator: (e) => yr.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => gr.includes(e)
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
  setup() {
    return { fallbackId: ft() };
  },
  computed: {
    resolvedSize() {
      let e = Y(this.size, { defaultSize: "md" });
      return e !== "md" ? e : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : e;
    },
    rootClass() {
      return C(
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
      return de(this.$attrs, [
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
}, vr = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, kr = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Sr = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], _r = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], wr = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, xr = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function Cr(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), o("div", {
    class: v([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), o("div", vr, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (l(), o("span", kr, [
      g(a, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
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
      onInput: t[0] || (t[0] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[1] || (t[1] = (d) => e.$emit("change", d)),
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), null, 16, Sr)) : (l(), o("input", I({
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
    }), null, 16, _r)),
    i.suffixIcon ? (l(), o("span", wr, [
      g(a, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (l(), o("div", xr, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const pl = /* @__PURE__ */ w(br, [["render", Cr]]);
let Ye = 0;
const Tr = ["sm", "md", "lg"], Ge = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Ir = {
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
      default: () => Ge
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Tr.includes(e)
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
    return Ye += 1, { fallbackId: `ui-phone-number-${Ye}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : Ge;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return Y(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return C(
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
}, zr = { class: "ui-phone-prepend" }, Lr = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ar(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("ui-select"), u = b("ui-input");
  return l(), o("div", {
    class: v(n.rootClass)
  }, [
    g(u, I({
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
      prepend: k(() => [
        h("div", zr, [
          g(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), o("span", Lr, y(n.innerCountry), 1)) : (l(), _(d, {
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
const gl = /* @__PURE__ */ w(Ir, [["render", Ar]]), Dr = ["numeric", "alphanumeric"], Fr = {
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
      validator: (e) => Dr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    /** Haneleri gizler (PIN / şifre); OTP için kapalı bırakın. */
    mask: {
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
    cellInputType() {
      return this.mask ? "password" : this.type === "numeric" ? "tel" : "text";
    },
    resolvedAutocomplete() {
      return this.mask && this.autocomplete === "one-time-code" ? "off" : this.autocomplete;
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.pin.ariaLabel") : "Verification code";
    }
  },
  watch: {
    modelValue(e) {
      const t = this.normalizeValue(e);
      t !== e && this.$emit("update:modelValue", t);
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
      return String(e ?? "").split("").map((i) => this.normalizeChar(i)).filter(Boolean).slice(0, this.length).join("");
    },
    emitValue(e) {
      var i;
      const t = e.join("").slice(0, this.length);
      this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (i = this.cellEl(this.length - 1)) == null || i.blur());
    },
    onCellInput(e, t) {
      const r = t.target.value.split("").map((d) => this.normalizeChar(d)).filter(Boolean);
      if (r.length === 0) {
        const d = [...this.cells];
        d[e] = "", this.emitValue(d);
        return;
      }
      const s = [...this.cells];
      let n = e;
      for (const d of r) {
        if (n >= this.length) break;
        s[n] = d, n += 1;
      }
      this.emitValue(s);
      const a = Math.min(n, this.length - 1);
      this.$nextTick(() => {
        var d, u;
        (d = this.cellEl(a)) == null || d.focus(), (u = this.cellEl(a)) == null || u.select();
      });
    },
    onCellKeydown(e, t) {
      var i, r;
      if (t.key === "Backspace") {
        t.preventDefault();
        const s = [...this.cells];
        if (s[e]) {
          s[e] = "", this.emitValue(s);
          return;
        }
        e > 0 && (s[e - 1] = "", this.emitValue(s), this.$nextTick(() => {
          var n;
          (n = this.cellEl(e - 1)) == null || n.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (i = this.cellEl(e - 1)) == null || i.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (r = this.cellEl(e + 1)) == null || r.focus());
    },
    onCellFocus(e) {
      this.activeIndex = e, this.$emit("focus", e), this.$nextTick(() => {
        var t;
        (t = this.cellEl(e)) == null || t.select();
      });
    },
    onPaste(e) {
      var s;
      e.preventDefault();
      const t = ((s = e.clipboardData) == null ? void 0 : s.getData("text")) ?? "", i = this.normalizeValue(t);
      if (!i) return;
      this.emitValue(i.split(""));
      const r = Math.min(i.length, this.length) - 1;
      this.$nextTick(() => {
        var n;
        (n = this.cellEl(Math.max(0, r))) == null || n.focus();
      });
    }
  }
}, Br = ["aria-label", "data-mask"], Pr = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Rr(e, t, i, r, s, n) {
  return l(), o("div", {
    role: "group",
    "aria-label": n.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    class: v([
      "ui-pin",
      n.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), o(F, null, M(i.length, (a, d) => (l(), o("input", {
      key: d,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: n.cells[d] ?? "",
      type: n.cellInputType,
      inputmode: i.type === "numeric" ? "numeric" : "text",
      pattern: i.type === "numeric" ? "[0-9]*" : void 0,
      disabled: i.disabled,
      readonly: i.readonly,
      autocomplete: d === 0 ? n.resolvedAutocomplete : "off",
      maxlength: "1",
      "aria-label": n.cellAriaLabel(d),
      onInput: (u) => n.onCellInput(d, u),
      onKeydown: (u) => n.onCellKeydown(d, u),
      onFocus: (u) => n.onCellFocus(d),
      onPaste: t[0] || (t[0] = (...u) => n.onPaste && n.onPaste(...u))
    }, null, 40, Pr))), 128))
  ], 10, Br);
}
const yl = /* @__PURE__ */ w(Fr, [["render", Rr]]), Or = ["ul", "ol", "div"], Er = ["plain", "bordered", "divided"], $r = ["compact", "normal", "relaxed"], Vr = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Or.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => Er.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => $r.includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "ui-list--compact" : this.density === "relaxed" ? "ui-list--relaxed" : "";
      if (this.variant === "bordered")
        return C("ui-list", "ui-list--bordered", e, this.$attrs.class);
      if (this.variant === "divided")
        return C("ui-list", "ui-list--divided", e, this.$attrs.class);
      const t = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return C("ui-list", t, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function Mr(e, t, i, r, s, n) {
  return l(), _(ue(i.tag), I({
    class: n.listClass,
    role: "list"
  }, n.passthroughAttrs), {
    default: k(() => [
      m(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const bl = /* @__PURE__ */ w(Vr, [["render", Mr]]), Nr = ["solid", "regular", "brands", "light", "duotone", "thin"], jr = ["start", "center"], Hr = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: {
      type: String,
      default: "light",
      validator: (e) => Nr.includes(e)
    },
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => jr.includes(e)
    }
  },
  computed: {
    itemClass() {
      return C(
        "ui-list-item",
        this.align === "center" ? "ui-list-item--center" : ""
      );
    }
  }
}, Wr = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Yr = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Gr = { class: "ui-list-item-content min-w-0 flex-1" }, Kr = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function qr(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), o("li", {
    class: v(n.itemClass),
    role: "listitem"
  }, [
    i.prefixIcon ? (l(), o("span", Wr, [
      g(a, {
        name: i.prefixIcon,
        type: i.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), o("span", Yr, [
      m(e.$slots, "prefix")
    ])) : f("", !0),
    h("div", Gr, [
      m(e.$slots, "default")
    ]),
    e.$slots.trailing ? (l(), o("div", Kr, [
      m(e.$slots, "trailing")
    ])) : f("", !0)
  ], 2);
}
const vl = /* @__PURE__ */ w(Hr, [["render", qr]]), Ur = [
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
], Ke = 10, ne = 410, Qr = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Zr = {
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
      validator: (e) => Ur.includes(e)
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
      layerZIndex: ne,
      rafId: 0,
      mobileCenteredActive: !1,
      mobileCenteredLeaving: !1,
      portalReady: !1
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCentered && $();
    },
    popoverMobileCenteredAttr() {
      return this.mobileCenteredActive || this.mobileCenteredLeaving;
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
      e ? (this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && $(), this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      })) : (this.mobileCenteredActive && (this.mobileCenteredLeaving = !0), this.mobileCenteredActive = !1, this.teardownGlobalListeners());
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.portalReady = !0, this.open && this.$nextTick(() => {
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
    onPopoverAfterLeave() {
      this.mobileCenteredLeaving = !1;
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
      if (typeof document > "u") return ne;
      let e = ne;
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
      const i = window.innerWidth, r = window.innerHeight, s = Ke, n = this.resolvedWidth, a = e.getBoundingClientRect(), d = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? a.width : 200), u = t.offsetHeight || 120;
      if ($() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const T = Math.max(s, Math.round((i - d) / 2)), B = {
          top: `${Math.max(s, Math.round((r - u) / 2))}px`,
          left: `${T}px`
        };
        n != null ? (B.width = n, B.minWidth = n) : (B.width = `${Math.min(d, i - s * 2)}px`, B.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(B);
        return;
      }
      this.mobileCenteredActive = !1;
      let c, p;
      switch (this.placement) {
        case "right-start":
          c = a.top, p = a.right + s;
          break;
        case "right-end":
          c = a.bottom - u, p = a.right + s;
          break;
        case "left-start":
          c = a.top, p = a.left - s - d;
          break;
        case "left-end":
          c = a.bottom - u, p = a.left - s - d;
          break;
        case "top-start":
          c = a.top - s - u, p = a.left;
          break;
        case "top-end":
          c = a.top - s - u, p = a.right - d;
          break;
        case "top":
          c = a.top - s - u, p = a.left + (a.width - d) / 2;
          break;
        case "bottom-end":
          c = a.bottom + s, p = a.right - d;
          break;
        case "bottom":
          c = a.bottom + s, p = a.left + (a.width - d) / 2;
          break;
        case "bottom-start":
        default:
          c = a.bottom + s, p = a.left;
          break;
      }
      if (this.placement.startsWith("right") && p + d > i - s && (p = a.left - s - d), this.placement.startsWith("left") && p < s && (p = a.right + s), this.placement.startsWith("top") && c < s && (c = a.bottom + s), p + d > i - s && (p = Math.max(s, i - s - d)), p < s && (p = s), this.placement.startsWith("bottom") && c + u > r - s) {
        const T = a.top - s - u;
        T >= s && (c = T);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (c + u > r - s && (c = Math.max(s, r - s - u)), c < s && (c = s));
      const z = this.matchTriggerWidth && n == null ? `${Math.ceil(a.width)}px` : void 0, L = {
        top: `${Math.round(c)}px`,
        left: `${Math.round(p)}px`,
        minWidth: z
      };
      n != null && (L.width = n, L.minWidth = n), this.layerStyle = this.withLayerZIndex(L), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const s = t.querySelector('[role="option"][aria-selected="true"]');
      if (!s) return;
      const n = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, d = n.getBoundingClientRect(), u = a.getBoundingClientRect(), c = u.top - d.top, p = u.left - d.left, z = i.getBoundingClientRect(), L = this.layerStyle.top, T = this.layerStyle.left;
      let S = typeof L == "string" && L !== "" ? parseFloat(L) : z.top, B = typeof T == "string" && T !== "" ? parseFloat(T) : z.left;
      Number.isNaN(S) && (S = z.top), Number.isNaN(B) && (B = z.left);
      let x = S - c, V = B - p;
      const R = Ke, K = window.innerHeight, q = window.innerWidth, N = z.height, U = z.width;
      x + N > K - R && (x = Math.max(R, K - R - N)), x < R && (x = R), V + U > q - R && (V = Math.max(R, q - R - U)), V < R && (V = R), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(x)}px`,
        left: `${Math.round(V)}px`
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
      var s;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, i = e.closest("[data-ui-popover-layer]");
      if (i && i !== t)
        return this.isOpenedInsidePopoverLayer(i) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const n of Qr)
        if (e.closest(n)) return !0;
      const r = (s = this.outsideClickIgnoreSelector) == null ? void 0 : s.trim();
      return !!(r && e.closest(r));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, Xr = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Jr = { class: "ui-popover-motion" }, es = {
  key: 0,
  class: "ui-popover-header"
}, ts = { class: "ui-popover-body min-h-0 min-w-0" }, is = {
  key: 1,
  class: "ui-popover-footer"
};
function ns(e, t, i, r, s, n) {
  return l(), o("div", {
    ref: "rootRef",
    class: v([n.rootShellClass, e.$attrs.class])
  }, [
    h("div", {
      ref: "triggerRef",
      class: v(n.triggerShellClass)
    }, [
      m(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    s.portalReady ? (l(), _(Z, {
      key: 0,
      to: "body"
    }, [
      g(ae, {
        name: "ui-overlay-popover-backdrop",
        appear: ""
      }, {
        default: k(() => [
          n.showMobileBackdrop ? (l(), o("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: G(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...a) => n.close && n.close(...a))
          }, null, 4)) : f("", !0)
        ]),
        _: 1
      }),
      g(ae, {
        name: "ui-overlay-popover",
        appear: "",
        onBeforeEnter: n.onPopoverBeforeEnter,
        onAfterLeave: n.onPopoverAfterLeave
      }, {
        default: k(() => [
          i.open ? (l(), o("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: G(s.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": n.popoverMobileCenteredAttr ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            h("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[1] || (t[1] = (...a) => n.onPanelKeydown && n.onPanelKeydown(...a))
            }, [
              h("div", Jr, [
                e.$slots.header ? (l(), o("div", es, [
                  m(e.$slots, "header", { close: n.close })
                ])) : f("", !0),
                h("div", ts, [
                  m(e.$slots, "content", { close: n.close })
                ]),
                e.$slots.footer ? (l(), o("div", is, [
                  m(e.$slots, "footer", { close: n.close })
                ])) : f("", !0)
              ])
            ], 544)
          ], 12, Xr)) : f("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeEnter", "onAfterLeave"])
    ])) : f("", !0)
  ], 2);
}
const kl = /* @__PURE__ */ w(Zr, [["render", ns]]), rs = {
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
}, ss = ["name", "value", "checked"], as = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, ls = { class: "ui-radio-body" }, os = { class: "ui-radio-label" }, us = {
  key: 0,
  class: "ui-radio-description"
};
function ds(e, t, i, r, s, n) {
  var d;
  const a = b("ui-icon");
  return l(), o("label", {
    class: v([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onClick: t[1] || (t[1] = (...u) => n.select && n.select(...u)),
    onKeydown: [
      t[2] || (t[2] = Q(P((...u) => n.select && n.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = Q(P((...u) => n.select && n.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (d = n.uiRadioGroup) == null ? void 0 : d.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => n.select && n.select(...u))
    }, null, 40, ss),
    h("span", as, [
      n.isChecked ? (l(), _(a, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-radio-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    h("span", ls, [
      h("span", os, y(i.label), 1),
      i.description ? (l(), o("span", us, y(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Sl = /* @__PURE__ */ w(rs, [["render", ds]]);
let qe = 0;
const cs = ["list", "button", "List", "Button"], fs = ["vertical", "horizontal"], hs = {
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
      validator: (e) => cs.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || fs.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return qe += 1, { groupName: `ui-radio-group-${qe}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : this.orientation === "horizontal" ? "horizontal" : "vertical";
    },
    rootClass() {
      return C(
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
}, ms = ["aria-label"];
function ps(e, t, i, r, s, n) {
  return l(), o("div", {
    class: v(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, ms);
}
const _l = /* @__PURE__ */ w(hs, [["render", ps]]), gs = {
  name: "Tag",
  components: { Badge: yi, Tooltip: mt },
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
}, ys = ["aria-label"];
function bs(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("Tooltip"), u = b("Badge");
  return l(), _(u, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, ht({
    default: k(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: k(() => [
        g(d, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: k(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = P((c) => e.$emit("remove"), ["stop"]))
            }, [
              g(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, ys)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const vs = /* @__PURE__ */ w(gs, [["render", bs]]);
let Ue = 0;
const ks = ["field", "inline"], Ss = ["sm", "md", "lg"], _s = {
  name: "Select",
  components: { Tag: vs },
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
      validator: (e) => ks.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ss.includes(e)
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
    Ue += 1;
    const e = Ue;
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
      return C(
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
      return (this.options || []).map((t) => t != null && typeof t == "object" && "value" in t && "label" in t ? { ...t, value: t.value, label: t.label } : { value: t, label: String(t) }).filter((t) => {
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
        (t) => this.normalizeFilter(t.label).includes(e) || this.normalizeFilter(String(t.value)).includes(e) || this.normalizeFilter(t.description || "").includes(e) || this.normalizeFilter(t.badge || "").includes(e)
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
    selectedDisplayStyle() {
      if (this.multiple || this.isPlaceholderDisplay) return;
      const e = this.normalizedOptions.find((t) => String(t.value) === this.stringValue);
      return this.optionDisplayStyle(e);
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
      this.multiple && !this.menuOpen && !this.isDisabled && String(e ?? "").length > 0 && (this.menuOpen = !0), this.remoteFilter && (this.filterDebounceTimer && clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = setTimeout(() => {
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
    onSearchInputActivate() {
      this.isDisabled || this.menuOpen || (this.menuOpen = !0);
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
    optionDisplayStyle(e) {
      if (!(!e || typeof e != "object")) {
        if (e.style && typeof e.style == "object") return e.style;
        if (typeof e.fontFamily == "string" && e.fontFamily.trim())
          return { fontFamily: e.fontFamily.trim() };
      }
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
}, ws = ["name", "value"], xs = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Cs = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ts = {
  key: 1,
  class: "ui-select-values-inner"
}, Is = ["placeholder", "aria-label", "disabled"], zs = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Ls = { class: "ui-select-field-suffix" }, As = ["aria-label"], Ds = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Fs = ["data-size", "placeholder", "aria-label", "onKeydown"], Bs = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], Ps = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Rs = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, Os = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function Es(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("Tag"), u = b("ui-skeleton"), c = b("ui-badge"), p = b("ui-button"), z = b("ui-empty"), L = b("ui-popover");
  return l(), o("div", {
    class: v(n.rootClass)
  }, [
    i.name ? (l(), o("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, ws)) : f("", !0),
    g(L, {
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (T) => s.menuOpen = T),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, ht({
      trigger: k(({ open: T, toggle: S, close: B }) => [
        m(e.$slots, "trigger", {
          open: T,
          toggle: S,
          close: B
        }, () => [
          h("button", I({
            type: "button",
            id: n.resolvedId,
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline"
            }],
            disabled: n.isDisabled,
            "aria-expanded": T ? "true" : "false",
            "aria-haspopup": n.listboxRole,
            "aria-controls": s.listboxId,
            "aria-describedby": i.ariaDescribedby
          }, n.triggerPassthrough, {
            onClick: (x) => n.onTriggerClick(S)
          }), [
            i.prefixIcon ? (l(), o("span", Cs, [
              g(a, {
                name: i.prefixIcon,
                size: "xs"
              }, null, 8, ["name"])
            ])) : f("", !0),
            i.multiple ? (l(), o("div", Ts, [
              (l(!0), o(F, null, M(n.selectedValues, (x) => (l(), _(d, {
                key: String(x),
                variant: "secondary",
                size: "sm",
                removable: "",
                onRemove: (V) => n.removeValue(x)
              }, {
                default: k(() => [
                  D(y(n.labelForValue(x)), 1)
                ]),
                _: 2
              }, 1032, ["onRemove"]))), 128)),
              n.isFilterable ? le((l(), o("input", {
                key: 0,
                ref: "searchInput",
                "onUpdate:modelValue": t[0] || (t[0] = (x) => s.filterQuery = x),
                type: "text",
                class: v(["ui-select-values-input", {
                  "ui-select-values-input--solo": !n.selectedValues.length,
                  "ui-select-values-input--open": s.menuOpen
                }]),
                placeholder: n.multipleInputPlaceholder,
                "aria-label": n.resolvedFilterPlaceholder,
                autocomplete: "off",
                disabled: n.isDisabled,
                onClick: t[1] || (t[1] = P((...x) => n.onSearchInputActivate && n.onSearchInputActivate(...x), ["stop"])),
                onFocus: t[2] || (t[2] = (...x) => n.onSearchInputActivate && n.onSearchInputActivate(...x)),
                onKeydown: t[3] || (t[3] = (...x) => n.onSearchKeydown && n.onSearchKeydown(...x))
              }, null, 42, Is)), [
                [_e, s.filterQuery]
              ]) : f("", !0)
            ])) : i.loading ? (l(), o("span", zs, y(n.resolvedLoadingLabel), 1)) : (l(), o("span", {
              key: 3,
              class: v(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
              style: G(n.selectedDisplayStyle),
              "data-popover-align": ""
            }, y(n.displayLabel), 7)),
            h("span", Ls, [
              n.showClearButton ? (l(), o("button", {
                key: 0,
                type: "button",
                class: "ui-select-clear",
                "aria-label": n.clearAriaLabel,
                onClick: t[4] || (t[4] = P((...x) => n.clearSelection && n.clearSelection(...x), ["stop"]))
              }, [
                g(a, {
                  name: "xmark",
                  size: "xs"
                })
              ], 8, As)) : f("", !0),
              h("span", Ds, [
                g(a, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 16, xs)
        ])
      ]),
      content: k(({ close: T }) => [
        h("div", {
          ref: "listbox",
          id: s.listboxId,
          class: v(["ui-select-listbox", n.listboxClass]),
          "data-size": n.resolvedSize,
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), o("div", Ps, [
            (l(), o(F, null, M(3, (S) => g(u, {
              key: S,
              variant: "line",
              class: v(S === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), o(F, { key: 1 }, M(n.filteredOptions, (S) => (l(), _(p, {
            key: String(S.value),
            variant: n.isSelected(S) ? "solid" : "ghost",
            color: n.isSelected(S) ? "primary" : "secondary",
            size: n.optionButtonSize,
            fulled: "",
            "text-align": "left",
            role: "option",
            class: v(["ui-select-option", { "ui-select-option--selected": n.isSelected(S) }]),
            "suffix-icon": n.isSelected(S) ? "check" : void 0,
            "aria-selected": n.isSelected(S) ? "true" : "false",
            onClick: (B) => n.pick(S, T)
          }, {
            default: k(() => [
              m(e.$slots, "option", {
                option: S,
                selected: n.isSelected(S)
              }, () => [
                h("span", Rs, [
                  h("span", {
                    "data-popover-align": "",
                    class: "min-w-0 truncate",
                    style: G(n.optionDisplayStyle(S))
                  }, y(S.label), 5),
                  S.badge ? (l(), _(c, {
                    key: 0,
                    variant: S.badgeVariant || "secondary",
                    size: "xs"
                  }, {
                    default: k(() => [
                      D(y(S.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : S.description ? (l(), o("span", Os, y(S.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && s.filterQuery ? (l(), _(z, {
            key: 2,
            icon: "magnifying-glass",
            size: n.emptyStateSize,
            title: n.noResultsText
          }, null, 8, ["size", "title"])) : (l(), _(z, {
            key: 3,
            icon: "table-cells",
            size: n.emptyStateSize,
            title: n.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, Bs)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: k(({ close: T }) => [
          le(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (S) => s.filterQuery = S),
            type: "text",
            class: v(["ui-select-filter-input w-full", n.filterInputClass]),
            "data-size": n.resolvedSize,
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = P(() => {
            }, ["prevent"])),
            onKeydown: [
              Q(P((S) => n.pickFirstFiltered(T), ["prevent"]), ["enter"]),
              Q(P((S) => T(), ["prevent"]), ["esc"])
            ]
          }, null, 42, Fs), [
            [_e, s.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: k((T) => [
          m(e.$slots, "footer", dt(ct(T)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const wl = /* @__PURE__ */ w(_s, [["render", Es]]), $s = {
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
        this.icon && "ui-segment--with-icon",
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
}, Vs = ["aria-checked", "disabled"], Ms = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, Ns = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, js = {
  key: 2,
  class: "ui-segment-label"
}, Hs = {
  key: 3,
  class: "sr-only"
}, Ws = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function Ys(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), o("button", {
    type: "button",
    role: "radio",
    class: v(n.segmentClass),
    "aria-checked": n.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...d) => n.select && n.select(...d))
  }, [
    n.hasPrepend ? (l(), o("span", Ms, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    i.icon ? (l(), o("span", Ns, [
      g(a, {
        name: i.icon,
        size: n.iconSize
      }, null, 8, ["name", "size"])
    ])) : f("", !0),
    n.showLabel ? (l(), o("span", js, y(i.label), 1)) : i.label ? (l(), o("span", Hs, y(i.label), 1)) : f("", !0),
    n.hasAppend ? (l(), o("span", Ws, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 10, Vs);
}
const xl = /* @__PURE__ */ w($s, [["render", Ys]]), Gs = ["sm", "md", "lg"], Ks = ["horizontal", "vertical"];
function qs(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Us = {
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
      validator: (e) => Gs.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ks.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: qs
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
      return Y(this.size, { defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? $() : !!this.iconOnly;
    },
    rootClass() {
      return C(
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
}, Qs = ["aria-label"];
function Zs(e, t, i, r, s, n) {
  return l(), o("div", I({
    class: n.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, Qs);
}
const Cl = /* @__PURE__ */ w(Us, [["render", Zs]]), Xs = ["line", "circle", "block", "pill"], Js = ["sm", "md", "lg"], ea = 480, Qe = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Ze = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, ta = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => Xs.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Js.includes(e)
    }
  },
  setup(e) {
    const t = zt(), i = H(() => !!t.default), r = E(null), s = E(null), n = E(null), a = E(null), d = E(!1), u = E(!1), c = E(!1), p = E(!1), z = E(!1);
    let L = null;
    const T = H(
      () => e.loading || c.value
    ), S = H(
      () => e.loading || c.value
    );
    Lt(() => {
      z.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), At(() => {
      B(), x();
    });
    function B() {
      L != null && (clearTimeout(L), L = null);
    }
    Dt(
      () => e.loading,
      async (N, U) => {
        var pe, ge, ye, be, ve, ke;
        if (B(), N) {
          const Se = Math.max(
            ((pe = r.value) == null ? void 0 : pe.offsetHeight) ?? 0,
            ((ge = n.value) == null ? void 0 : ge.scrollHeight) ?? 0,
            ((ye = s.value) == null ? void 0 : ye.offsetHeight) ?? 0
          );
          c.value = !1, p.value = !1, d.value = !1, u.value = Se > 48, a.value = u.value ? Se : null;
          return;
        }
        if (U !== !0) return;
        if (z.value) {
          c.value = !1, u.value = !1, a.value = null, d.value = !1;
          return;
        }
        const X = a.value ?? ((be = r.value) == null ? void 0 : be.offsetHeight) ?? ((ve = s.value) == null ? void 0 : ve.offsetHeight) ?? 0;
        c.value = !0, p.value = !1, u.value = !1, d.value = !0, a.value = X, await we();
        const he = ((ke = n.value) == null ? void 0 : ke.scrollHeight) ?? 0, me = he > 0 ? he : X;
        if (X <= 0 && me <= 0) {
          x();
          return;
        }
        await we(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = me, p.value = !0;
          });
        }), L = setTimeout(x, ea + 40);
      }
    );
    function x() {
      B(), c.value = !1, p.value = !1, u.value = !1, a.value = null, d.value = !1;
    }
    function V(N) {
      N.target === r.value && N.propertyName === "height" && (e.loading || d.value && x());
    }
    const R = H(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), K = H(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !u.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && u.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && u.value && !c.value
    })), q = H(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !u.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && u.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && p.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: s,
      contentWrapRef: n,
      hostStyle: R,
      heightAnimActive: d,
      heightLocked: u,
      isRevealing: c,
      showPlaceholder: T,
      isBusy: S,
      placeholderClass: K,
      contentWrapClass: q,
      onHostTransitionEnd: V
    };
  },
  computed: {
    variantClass() {
      return Qe[this.variant] || Qe.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Ze[this.size] || Ze.md;
    },
    skeletonClass() {
      return C(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return C(
        "ui-skeleton-host",
        this.heightAnimActive && "ui-skeleton-host--height-active",
        this.heightLocked && "ui-skeleton-host--height-locked",
        (this.loading || this.isRevealing) && "ui-skeleton-host--busy",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ia = ["aria-busy"], na = ["aria-hidden"];
function ra(e, t, i, r, s, n) {
  return r.hasDefaultSlot ? (l(), o("div", I({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...a) => r.onHostTransitionEnd && r.onHostTransitionEnd(...a))
  }), [
    le(h("div", {
      ref: "placeholderRef",
      class: v(["ui-skeleton-placeholder", r.placeholderClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = h("div", { class: "ui-skeleton-default-rows" }, [
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [It, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: v(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, na)
    ], 2)
  ], 16, ia)) : (l(), o("div", I({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const Tl = /* @__PURE__ */ w(ta, [["render", ra]]);
let Xe = 0;
const sa = {
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
    return Xe += 1, { fallbackId: `ui-switch-${Xe}` };
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
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
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
}, aa = ["id", "aria-checked", "disabled", "aria-describedby"];
function la(e, t, i, r, s, n) {
  return l(), o("button", I({
    type: "button",
    role: "switch",
    id: n.resolvedId,
    class: [
      "ui-switch",
      n.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": i.modelValue ? "true" : "false",
    disabled: i.disabled,
    "aria-describedby": i.ariaDescribedby
  }, n.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...a) => n.toggle && n.toggle(...a)),
    onKeydown: t[1] || (t[1] = (...a) => n.onKeydown && n.onKeydown(...a))
  }), [
    h("span", {
      class: v(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      h("span", {
        class: v(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, aa);
}
const Il = /* @__PURE__ */ w(sa, [["render", la]]), oa = {
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
      var r, s;
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", i = ((s = this.uiTabs) == null ? void 0 : s.variant) === "segmented" && !e ? "segmented" : "line";
      return C(
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
      var p, z;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], s = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let a = 0;
      if (r.includes(n)) a = 1;
      else if (s.includes(n)) a = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let u = i.indexOf(d);
      u === -1 && (u = i.findIndex((L) => L.getAttribute("aria-selected") === "true")), u === -1 && (u = 0);
      let c = u + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (z = (p = i[c]) == null ? void 0 : p.focus) == null || z.call(p);
    }
  }
}, ua = ["aria-label", "aria-orientation"];
function da(e, t, i, r, s, n) {
  return l(), o("div", I({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...a) => n.onKeydown && n.onKeydown(...a))
  }), [
    m(e.$slots, "default")
  ], 16, ua);
}
const zl = /* @__PURE__ */ w(oa, [["render", da]]), ca = ["line", "segmented"], fa = {
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
      validator: (e) => ca.includes(e)
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
    /** Segmented yükseklik / tipografi — `sm` | `md` (varsayılan) | `lg`. */
    size: {
      type: String,
      default: "md",
      validator: (e) => e === "sm" || e === "md" || e === "lg"
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
    },
    /**
     * Native mobil alt dock — `cap-ios` / `cap-android` ile liquid glass veya opak blur.
     * Web’de etkisiz; yalnızca `variant="segmented"` ile kullanılır.
     */
    nativeChrome: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return { baseId: ft() };
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
      return C(
        "ui-tabs flex min-w-0 flex-col",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.variant === "segmented" && this.resolvedSize === "lg" ? "ui-tabs--segmented-lg" : "",
        this.variant === "segmented" && this.resolvedSize === "sm" ? "ui-tabs--segmented-sm" : "",
        this.transparent ? "ui-tabs--transparent" : "",
        this.nativeChrome ? "ui-tabs--native-chrome" : "",
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
function ha(e, t, i, r, s, n) {
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Ll = /* @__PURE__ */ w(fa, [["render", ha]]), ma = ["solid", "regular", "brands", "light", "duotone", "thin"], pa = {
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
      validator: (e) => ma.includes(e)
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
      return this.triggerKind === "segmented" ? ((e = this.uiTabs) == null ? void 0 : e.resolvedSize) === "sm" ? "md" : "lg" : "xs";
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
      return C(
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
}, ga = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], ya = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, ba = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" }, va = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function ka(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("ui-badge");
  return l(), o("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: v(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : n.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...u) => n.select && n.select(...u))
  }, [
    i.icon ? (l(), o("span", ya, [
      g(a, {
        name: i.icon,
        type: n.tabIconType,
        size: n.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    h("span", ba, [
      m(e.$slots, "default", {}, () => [
        D(y(i.label), 1)
      ])
    ]),
    n.showBadge ? (l(), o("span", va, [
      g(d, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: k(() => [
          D(y(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, ga);
}
const Al = /* @__PURE__ */ w(pa, [["render", ka]]), j = ut({
  /** @type {ToastItem[]} */
  items: []
});
let Je = 0;
function Dl(e = {}) {
  Je += 1;
  const t = Je, i = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return j.items.push(i), i.duration > 0 && (i._timer = setTimeout(() => St(t), i.duration)), t;
}
function St(e) {
  const t = j.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = j.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), j.items.splice(t, 1);
}
function Fl() {
  for (const e of j.items)
    e._timer && clearTimeout(e._timer);
  j.items.splice(0);
}
const et = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, tt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Sa = {
  name: "Toast",
  computed: {
    items() {
      return j.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: St,
    iconFor(e) {
      return et[e] || et.info;
    },
    iconToneClass(e) {
      return tt[e] || tt.info;
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
}, _a = { class: "ui-toast-host" }, wa = { class: "ui-alert-body" }, xa = {
  key: 0,
  class: "ui-alert-title"
}, Ca = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Ta(e, t, i, r, s, n) {
  const a = b("ui-icon"), d = b("ui-button");
  return l(), _(Z, { to: "body" }, [
    h("div", _a, [
      g(Ft, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: k(() => [
          (l(!0), o(F, null, M(n.items, (u) => (l(), o("div", {
            key: u.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            h("div", I({
              class: [n.toastClasses(u), "pointer-events-auto"]
            }, { ref_for: !0 }, n.toastA11y(u)), [
              h("span", {
                class: v(["ui-alert-icon", n.iconToneClass(u.variant)]),
                "aria-hidden": "true"
              }, [
                g(a, {
                  name: n.iconFor(u.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              h("div", wa, [
                u.title ? (l(), o("p", xa, y(u.title), 1)) : f("", !0),
                u.description ? (l(), o("p", Ca, y(u.description), 1)) : f("", !0)
              ]),
              g(d, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": n.dismissLabel,
                onClick: (c) => n.queueDismissToast(u.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const Bl = /* @__PURE__ */ w(Sa, [["render", Ta]]), Pl = {
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
}, Rl = {
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
}, Ia = "fewui-local-fonts", za = "fewui-local-fonts-catalog-preview";
let it = !1;
const La = Object.freeze([
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
function Aa(e) {
  const t = String(e || "").trim();
  return t ? `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, sans-serif` : "";
}
function Ol() {
  return La.map((e) => ({
    ...e,
    fontFamily: Aa(e.value)
  }));
}
function El(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function $l(e) {
  return null;
}
function Vl(e = {}) {
  return "";
}
function Da(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || Ia)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function Ml(e = {}) {
  var t;
  return typeof document > "u" ? null : it && !e.force ? ((t = document.getElementById(e.id || za)) == null ? void 0 : t.getAttribute("href")) || "local" : (it = !0, "local");
}
const Fa = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Ba = "ui-sans-serif, system-ui, sans-serif", nt = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, rt = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function Pa(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function st(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${Ba}`;
}
function Ra(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Oa(e) {
  const t = String(e || "").trim().match(/^oklch\(\s*([0-9.]+%?)/i);
  if (!t) return null;
  const i = t[1];
  if (i.endsWith("%")) {
    const s = Number.parseFloat(i);
    return Number.isFinite(s) ? s / 100 : null;
  }
  const r = Number.parseFloat(i);
  return Number.isFinite(r) ? r > 1 ? r / 100 : r : null;
}
function Ea(e, t, i) {
  const [r, s, n] = [e, t, i].map((a) => {
    const d = a / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * s + 0.0722 * n;
}
function $a(e, t = "#ffffff", i = "#0a0a0b") {
  const r = Ra(e);
  if (r)
    return Ea(...r) > 0.4 ? i : t;
  const s = Oa(e);
  return s != null && s > 0.72 ? i : t;
}
function Va(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function Ma(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function Na(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return nt[t] != null ? nt[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ja(e) {
  return e == null || e === "" ? null : rt[e] ? rt[e] : String(e);
}
function re(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = Ma(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const s = Na(i.backdropBlur ?? i.backdropFilter);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const n = ja(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function at(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const s = e[i];
  if (s != null && s !== "")
    return String(s);
}
function Nl(e = {}, t = {}) {
  const i = Pa(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = fe(e);
  for (const [s, n] of Object.entries(r))
    i.style.setProperty(s, n);
  return Da(e), { ...r };
}
function fe(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = st(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = st(r)), e.baseColor && typeof e.baseColor == "object")
    for (const d of Fa) {
      const u = e.baseColor[d];
      u != null && u !== "" && (t[`--base-${d}`] = String(u));
    }
  const s = [
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
  for (const [d, u] of s) {
    const c = e[d];
    c != null && c !== "" && (t[u] = String(c));
  }
  const n = at(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = $a(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const a = at(e, "secondaryColor", "secondary");
  if (a && (t["--secondary"] = a), re(t, "surface", e.surfaceStyle), re(t, "control", e.controlStyle), re(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, u] of Object.entries(e.colors))
      u != null && u !== "" && (t[Va(d)] = String(u));
  return t;
}
function jl(e = {}) {
  const t = fe(e), i = [], r = Object.entries(t).map(([a, d]) => `${a}: ${d} !important`).join("; ");
  r && i.push(`:root, html, html.dark { ${r} }`);
  const s = t["--font-sans"], n = t["--font-heading"] || s;
  return s && i.push(`html, body { font-family: ${s} !important; }`), n && i.push(`h1, h2, h3, h4, h5, h6 { font-family: ${n} !important; }`), i.join(`
`);
}
function Hl(e = {}) {
  const t = fe(e), i = Object.entries(t).map(([s, n]) => `${s}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function Ha(e, t) {
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
const Wl = "few", _t = "#1B5CFF", Yl = "#ffffff", lt = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: _t,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function Gl() {
  return {
    light: lt[600],
    dark: lt[600]
  };
}
function Wa(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function se(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function ot(e, t, i) {
  return `#${se(e)}${se(t)}${se(i)}`;
}
function Ya(e) {
  const t = Wa(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, s] = t, n = ot(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    s + (255 - s) * 0.12
  ), a = ot(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: n, brandAccent: a };
}
function Kl(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = Ya(String(i)), s = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (s.accent = r.accent), (t.force || !s.colors["brand-accent"]) && (s.colors["brand-accent"] = r.brandAccent), s;
}
function ql(e, t = _t) {
  if (!e || typeof e != "object") return t;
  const i = typeof e.primaryColor == "string" ? e.primaryColor.trim() : "";
  if (i) return i;
  const r = e.theme && typeof e.theme == "object" ? e.theme : null;
  if (r) {
    const s = typeof r.primaryColor == "string" ? r.primaryColor.trim() : typeof r.primary == "string" ? r.primary.trim() : "";
    if (s) return s;
  }
  return t;
}
const wt = "fewui-theme-custom-css";
function Ga(e, t = wt) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function Ul(e = wt) {
  Ga("", e);
}
const xt = {
  mode: "dark",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff"
}, Ka = {
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
}, qa = {
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
}, Ua = {
  panel: xt,
  flat: Ka,
  landing: qa
}, Ql = ["panel", "flat", "landing"];
function Qa(e = "panel") {
  const t = String(e || "panel").trim(), i = Ua[t] || xt;
  return structuredClone(i);
}
function Zl(e, t = {}) {
  return Ha(Qa(e), t);
}
export {
  ol as $,
  Ja as A,
  yi as B,
  nl as C,
  wt as D,
  fl as E,
  lt as F,
  La as G,
  Bl as H,
  ml as I,
  mt as J,
  Ml as K,
  bl as L,
  Da as M,
  Ga as N,
  Nl as O,
  gl as P,
  Vl as Q,
  Sl as R,
  xl as S,
  Ua as T,
  $l as U,
  jl as V,
  Hl as W,
  Ul as X,
  Fl as Y,
  C as Z,
  w as _,
  el as a,
  wn as a0,
  Ya as a1,
  St as a2,
  Pl as a3,
  zn as a4,
  Aa as a5,
  al as a6,
  Gl as a7,
  Qa as a8,
  Ol as a9,
  Ha as aa,
  de as ab,
  Dl as ac,
  rl as ad,
  ul as ae,
  Y as af,
  bt as ag,
  ql as ah,
  El as ai,
  Zl as aj,
  fe as ak,
  yt as al,
  Rl as am,
  Kl as an,
  tl as b,
  il as c,
  sl as d,
  ll as e,
  dl as f,
  ce as g,
  cl as h,
  Wl as i,
  _t as j,
  Yl as k,
  hl as l,
  pl as m,
  vl as n,
  yl as o,
  kl as p,
  _l as q,
  Cl as r,
  wl as s,
  Tl as t,
  Il as u,
  Ql as v,
  zl as w,
  Al as x,
  Ll as y,
  vs as z
};
//# sourceMappingURL=index-BYs0S1Xh.js.map
