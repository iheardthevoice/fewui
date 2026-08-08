import { openBlock as l, createElementBlock as o, mergeProps as I, renderSlot as m, resolveComponent as y, normalizeClass as v, createVNode as g, createCommentVNode as f, createElementVNode as h, toDisplayString as b, createBlock as _, resolveDynamicComponent as Ke, withCtx as k, Teleport as Z, Transition as q, normalizeStyle as U, createTextVNode as F, ref as E, Fragment as A, Comment as ht, Text as mt, withModifiers as L, renderList as $, normalizeProps as qe, guardReactiveProps as Ue, useId as Qe, withKeys as Q, createSlots as Ze, withDirectives as re, vModelText as ue, vShow as pt, useSlots as gt, computed as M, onMounted as bt, watch as yt, nextTick as de, reactive as vt, TransitionGroup as kt } from "vue";
import { RouterLink as St } from "vue-router";
const w = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, a] of t)
    i[r] = a;
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
        for (const [r, a] of Object.entries(i))
          a && t.push(r);
    }
  return t.join(" ");
}
const _t = ["horizontal", "vertical"], wt = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => _t.includes(e)
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
}, xt = ["aria-label"];
function Ct(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, xt);
}
const xa = /* @__PURE__ */ w(wt, [["render", Ct]]), Tt = ["info", "success", "warning", "error"], ce = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, fe = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, It = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Tt.includes(e)
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
      return this.icon || ce[this.variant] || ce.info;
    },
    iconToneClass() {
      return fe[this.variant] || fe.info;
    },
    rootClasses() {
      return C(
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
}, zt = ["role"], At = { class: "ui-alert-body" }, Lt = {
  key: 0,
  class: "ui-alert-title"
}, Dt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Ft = {
  key: 2,
  class: "ui-alert-slot"
};
function Bt(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("ui-button");
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
        g(s, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", At, [
      i.title ? (l(), o("p", Lt, b(i.title), 1)) : f("", !0),
      i.description ? (l(), o("p", Dt, b(i.description), 1)) : f("", !0),
      e.$slots.default ? (l(), o("div", Ft, [
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
  ], 16, zt);
}
const Ca = /* @__PURE__ */ w(It, [["render", Bt]]), Rt = ["xs", "sm", "md", "lg", "xl"], he = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, Ot = ["circle", "rounded", "square"], Et = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, me = Object.freeze({
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
}), pe = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Pt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return pe[t] && (t = pe[t]), t >= "A" && t <= "Z" ? t : "default";
}
function $t(e) {
  var r;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const a = i[0][0] || "", n = i[i.length - 1][0] || "";
    return `${a}${n}`.toLocaleUpperCase("tr-TR");
  }
  return (((r = i[0]) == null ? void 0 : r[0]) || "?").toLocaleUpperCase("tr-TR");
}
const Nt = {
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
      validator: (e) => Rt.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => Ot.includes(e)
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
        he[this.size] || he.md,
        Et[this.shape] || "",
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
      return $t(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Pt(e[0]) : "default";
    },
    letterColors() {
      return me[this.colorLetterKey] || me.default;
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
}, Vt = ["src", "alt"], Mt = ["role", "aria-label", "aria-hidden"];
function jt(e, t, i, r, a, n) {
  return l(), _(Ke(n.rootTag), I({
    type: i.interactive ? "button" : void 0,
    class: n.rootClass,
    style: n.rootStyle
  }, n.rootBind, { onClick: n.onRootClick }), {
    default: k(() => [
      i.src && !a.imageFailed ? (l(), o("img", {
        key: 0,
        src: i.src,
        alt: n.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (s) => a.imageFailed = !0)
      }, null, 40, Vt)) : (l(), o("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : n.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, b(n.displayInitials), 9, Mt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Ta = /* @__PURE__ */ w(Nt, [["render", jt]]);
let Ht = 0;
const Wt = ["top", "bottom", "left", "right"], O = 8, Yt = {
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
      validator: (e) => Wt.includes(e)
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
      tooltipId: `ui-tooltip-${++Ht}`,
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
      const t = e.getBoundingClientRect(), i = O, r = t.left + t.width / 2, a = t.top + t.height / 2;
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
      t === "top" && s.top < O ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, s = r.getBoundingClientRect()) : t === "bottom" && s.bottom > n - O && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, s = r.getBoundingClientRect());
      let d = 0, u = 0;
      if (s.left < O ? d = O - s.left : s.right > a - O && (d = a - O - s.right), s.top < O ? u = O - s.top : s.bottom > n - O && (u = n - O - s.bottom), d === 0 && u === 0) return;
      const c = parseFloat(this.panelStyle.left), p = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(p) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + d}px`,
        top: `${p + u}px`
      });
    }
  }
}, Gt = ["id"], Kt = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function qt(e, t, i, r, a, n) {
  return l(), o("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...s) => n.onEnter && n.onEnter(...s)),
    onMouseleave: t[1] || (t[1] = (...s) => n.onLeave && n.onLeave(...s)),
    onFocusin: t[2] || (t[2] = (...s) => n.onFocusIn && n.onFocusIn(...s)),
    onFocusout: t[3] || (t[3] = (...s) => n.onFocusOut && n.onFocusOut(...s))
  }, [
    m(e.$slots, "default"),
    a.portalReady ? (l(), _(Z, {
      key: 0,
      to: "body"
    }, [
      g(q, { name: "ui-tooltip-fade" }, {
        default: k(() => [
          a.open && !i.disabled && n.hasContent ? (l(), o("div", {
            key: 0,
            id: a.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: U(a.panelStyle),
            role: "tooltip"
          }, [
            h("span", Kt, [
              m(e.$slots, "content", {}, () => [
                F(b(i.label), 1)
              ])
            ])
          ], 12, Gt)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 544);
}
const Xe = /* @__PURE__ */ w(Yt, [["render", qt]]), Ut = [
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
], Qt = ["xs", "sm", "md", "lg"], ge = {
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
}, be = {
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
function Zt(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function Xt(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const Jt = {
  name: "Badge",
  components: { Tooltip: Xe },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Ut.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => Qt.includes(e)
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
      return Zt(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: Xt(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        be[this.size] || be.sm,
        !this.normalizedHex && (ge[this.variant] || ge.solid)
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
}, ei = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, ti = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function ii(e, t, i, r, a, n) {
  const s = y("Tooltip");
  return l(), _(s, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: k(() => [
      h("span", {
        class: v(n.badgeClasses),
        style: U(n.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (l(), o("span", ei, [
          m(e.$slots, "prepend")
        ])) : f("", !0),
        h("span", {
          ref: "labelRef",
          class: v(["ui-badge-label", [n.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (l(), o("span", ti, [
          m(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const ni = /* @__PURE__ */ w(Jt, [["render", ii]]), Je = "(max-width: 767px)", et = E(!1);
function J() {
  typeof window > "u" || (et.value = window.matchMedia(Je).matches);
}
if (typeof window < "u") {
  J();
  const e = window.matchMedia(Je);
  typeof e.addEventListener == "function" ? e.addEventListener("change", J) : typeof e.addListener == "function" && e.addListener(J);
}
function G() {
  return et.value;
}
function H(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = G();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
function tt(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const ri = ["sm", "md", "lg"], si = ["solid", "outline", "ghost", "link", "nav"], ai = ["primary", "secondary", "input", "warning", "success", "info", "danger"], li = ["button", "submit", "reset"], ye = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, ve = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, oi = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ke = {
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
}, ui = {
  name: "Button",
  components: { RouterLink: St },
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
      validator: (e) => li.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => si.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ai.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ri.includes(e)
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
      return H(this.size, { defaultSize: "md" });
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : tt(this, "ui.button.loading", "Loading");
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
      this.cubed && !e && !t ? i = ve[this.resolvedSize] || ve.md : e ? i = oi[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = ye[this.resolvedSize] || ye.md;
      let r = "";
      !e && !t && (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full");
      const a = ((s = ke[this.variant]) == null ? void 0 : s[this.color]) || ((d = ke.solid) == null ? void 0 : d.primary), n = this.fulled || this.block;
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
      if (e == null || typeof e != "object" || e.type === ht) return !1;
      if (e.type === mt)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === A) {
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
}, di = ["href", "data-variant", "data-color", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], ci = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, fi = {
  key: 0,
  class: "sr-only"
}, hi = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, mi = {
  key: 0,
  class: "sr-only"
}, pi = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, gi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, bi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, yi = ["type", "disabled", "data-variant", "data-color", "data-loading", "aria-busy"], vi = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, ki = {
  key: 0,
  class: "sr-only"
}, Si = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, _i = {
  key: 0,
  class: "sr-only"
}, wi = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, xi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ci = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Ti(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("RouterLink");
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
        i.loading && n.usesCubedCenterLayout ? (l(), o(A, { key: 0 }, [
          h("span", ci, [
            g(s, {
              size: n.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), o("span", fi, b(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (l(), o(A, { key: 1 }, [
          h("span", hi, [
            g(s, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), o("span", mi, b(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", pi, [
          i.prefixIcon ? (l(), _(s, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (l(), o(A, { key: 3 }, [
          i.prefixIcon ? (l(), o("span", gi, [
            g(s, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: v(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", bi, [
            g(s, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, di)
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
    i.loading && n.usesCubedCenterLayout ? (l(), o(A, { key: 0 }, [
      h("span", vi, [
        g(s, {
          size: n.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), o("span", ki, b(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (l(), o(A, { key: 1 }, [
      h("span", Si, [
        g(s, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), o("span", _i, b(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", wi, [
      i.prefixIcon ? (l(), _(s, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (l(), o(A, { key: 3 }, [
      i.prefixIcon ? (l(), o("span", xi, [
        g(s, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: v(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), o("span", Ci, [
        g(s, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, yi));
}
const Ia = /* @__PURE__ */ w(ui, [["render", Ti]]), Ii = ["none", "sm", "md"], Se = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, zi = {
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
      validator: (e) => Ii.includes(e)
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
      return ["ui-divider", Se[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Se[this.spacing] || "",
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
}, Ai = { class: "ui-divider__label" }, Li = {
  key: 1,
  class: "ui-section-label"
};
function Di(e, t, i, r, a, n) {
  const s = y("ui-icon");
  return n.hasLabel ? (l(), o("div", I({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Ai, [
      i.icon ? (l(), _(s, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (l(), o("span", Li, b(i.title), 1)) : f("", !0)
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
const ae = /* @__PURE__ */ w(zi, [["render", Di]]), Fi = ["solid", "dashed", "dotted", "double"], _e = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Bi = ["solid", "regular", "brands", "light", "duotone", "thin"], Ri = {
  name: "Card",
  components: { Divider: ae },
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
      validator: (e) => Fi.includes(e)
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
      validator: (e) => Bi.includes(e)
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
      return _e[this.borderType] || _e.solid;
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
}, Oi = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Ei = {
  key: 0,
  class: "ui-header-lead"
}, Pi = { class: "ui-header-lead__main" }, $i = {
  key: 0,
  class: "ui-header-lead__icon"
}, Ni = { class: "ui-header-lead__text" }, Vi = {
  key: 0,
  class: "ui-heading-3"
}, Mi = {
  key: 1,
  class: "ui-text-default"
}, ji = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Hi(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("Divider");
  return l(), o("div", I({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), o("div", Oi, [
      m(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (l(), o("div", {
      key: 1,
      class: v(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), o("div", Ei, [
          h("div", Pi, [
            i.icon ? (l(), o("span", $i, [
              g(s, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", Ni, [
              i.title ? (l(), o("h3", Vi, b(i.title), 1)) : f("", !0),
              i.description ? (l(), o("p", Mi, b(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), o("div", ji, [
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
const za = /* @__PURE__ */ w(Ri, [["render", Hi]]);
function it(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function nt(e, t = "tr-TR") {
  return !(e instanceof Date) || Number.isNaN(e.getTime()) ? "" : e.toLocaleDateString(it(t), {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Aa(e, t = "tr-TR") {
  if (e == null || e === "") return "";
  const i = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!i) return "";
  const r = Number(i[1]), a = Number(i[2]) - 1, n = Number(i[3]), s = new Date(r, a, n);
  return s.getFullYear() !== r || s.getMonth() !== a || s.getDate() !== n ? "" : nt(s, t);
}
let we = 0;
function xe(e) {
  return String(e).padStart(2, "0");
}
function j(e) {
  return `${e.getFullYear()}-${xe(e.getMonth() + 1)}-${xe(e.getDate())}`;
}
function ee(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, a = Number(t[3]), n = new Date(i, r, a);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== a ? null : n;
}
const Wi = {
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
    we += 1;
    const e = we, t = ee(this.modelValue) || /* @__PURE__ */ new Date();
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
      return it((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      return this.selectedDate ? nt(this.selectedDate, this.locale) : this.placeholder;
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
        const s = new Date(r.getFullYear(), r.getMonth(), r.getDate() + n), d = s.getMonth() === t && s.getFullYear() === e, u = s.getDate(), c = j(s), p = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`, z = !!(this.selectedDate && c === j(this.selectedDate)), D = j(/* @__PURE__ */ new Date()) === c, x = !!(this.minYmd && c < this.minYmd);
        a.push({
          key: p,
          d: u,
          out: !d,
          date: s,
          sel: z,
          today: D,
          inMonth: d,
          disabled: x
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
      const t = j(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = j(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = /* @__PURE__ */ new Date();
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const r = j(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Yi = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, Gi = { class: "mb-3 flex items-center justify-between gap-2" }, Ki = { class: "text-sm font-medium tabular-nums text-foreground" }, qi = { class: "ui-datepicker-grid" }, Ui = {
  key: 0,
  class: "ui-datepicker-quick"
}, Qi = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, Zi = { class: "mb-3 flex items-center justify-between gap-2" }, Xi = { class: "text-sm font-medium tabular-nums text-foreground" }, Ji = { class: "ui-datepicker-grid" }, en = {
  key: 0,
  class: "ui-datepicker-quick"
};
function tn(e, t, i, r, a, n) {
  const s = y("ui-button"), d = y("ui-popover");
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
    i.embedded ? (l(), o("div", Yi, [
      h("div", Gi, [
        g(s, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = L((u) => n.shiftMonth(-1), ["stop"]))
        }),
        h("span", Ki, b(n.monthTitle), 1),
        g(s, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          "aria-label": "Next month",
          onClick: t[1] || (t[1] = L((u) => n.shiftMonth(1), ["stop"]))
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
      h("div", qi, [
        (l(!0), o(A, null, $(n.calendarCells, (u) => (l(), _(s, {
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
            F(b(u.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ]),
      i.showQuick ? (l(), o("div", Ui, [
        g(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.yesterdayQuickDisabled,
          onClick: t[2] || (t[2] = (u) => n.pickQuick("yesterday"))
        }, {
          default: k(() => [
            F(b(n.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        g(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.todayQuickDisabled,
          onClick: t[3] || (t[3] = (u) => n.pickQuick("today"))
        }, {
          default: k(() => [
            F(b(n.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        g(s, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.tomorrowQuickDisabled,
          onClick: t[4] || (t[4] = (u) => n.pickQuick("tomorrow"))
        }, {
          default: k(() => [
            F(b(n.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (l(), _(d, {
      key: 1,
      open: a.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (u) => a.menuOpen = u),
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
          g(s, {
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
              }, b(n.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: k(({ close: u }) => [
        h("div", Qi, [
          h("div", Zi, [
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[5] || (t[5] = L((c) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", Xi, b(n.monthTitle), 1),
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[6] || (t[6] = L((c) => n.shiftMonth(1), ["stop"]))
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
          h("div", Ji, [
            (l(!0), o(A, null, $(n.calendarCells, (c) => (l(), _(s, {
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
                F(b(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          i.showQuick ? (l(), o("div", en, [
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", u)
            }, {
              default: k(() => [
                F(b(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (c) => n.pickQuick("today", u)
            }, {
              default: k(() => [
                F(b(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.tomorrowQuickDisabled,
              onClick: (c) => n.pickQuick("tomorrow", u)
            }, {
              default: k(() => [
                F(b(n.resolvedTomorrowLabel), 1)
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
const La = /* @__PURE__ */ w(Wi, [["render", tn]]);
let se = 0;
const rt = [];
function Da(e) {
  return se += 1, `${e}-${se}`;
}
function nn(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return rt.push(() => {
    t = 0;
  }), i;
}
function Fa() {
  se = 0;
  for (const e of rt)
    e();
}
function st(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [a, n] of Object.entries(e || {}))
    i.has(a) || (r[a] = n);
  return r;
}
const rn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), sn = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function an(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function Ce(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (an(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function ln(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function Te(e, { skipFooter: t = !1 } = {}) {
  const i = Ce(e, rn, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = Ce(e, sn, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function on(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && Te(t))
    return !0;
  for (const i of ln(e))
    if (Te(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const un = nn("ui-dialog"), dn = ["solid", "dashed", "dotted", "double"], Ie = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, cn = ["solid", "regular", "brands", "light", "duotone", "thin"], fn = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], ze = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, hn = {
  name: "Dialog",
  components: { Divider: ae },
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
      validator: (e) => fn.includes(e)
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
      validator: (e) => dn.includes(e)
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
      validator: (e) => cn.includes(e)
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
    const e = un();
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      portalReady: !1,
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
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.teardownSheetDrag();
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
      return Ie[this.borderType] || Ie.solid;
    },
    maxWidthClass() {
      return ze[this.maxWidth] || ze.lg;
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
      return st(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : tt(this, "ui.dialog.close", "Close");
    },
    rootLayerClasses() {
      return C(
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
      if (G()) return;
      const e = this.$refs.panelRef;
      e && on(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!G() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const a = (d) => {
        const u = Math.max(0, d.clientY - i);
        t.style.transform = `translateY(${u}px)`;
      }, n = (d) => {
        const u = Math.max(0, d.clientY - i);
        t.style.transition = r, t.style.transform = "", u >= 72 && this.close(), this.teardownSheetDrag();
      }, s = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", a), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", s), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", s);
      };
    }
  }
}, mn = ["aria-labelledby", "aria-describedby", "aria-label"], pn = {
  key: 0,
  class: "ui-card-header shrink-0"
}, gn = {
  key: 0,
  class: "ui-dialog-header__icon"
}, bn = ["id"], yn = {
  key: 2,
  class: "ui-dialog-header__actions"
}, vn = ["id"], kn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, Sn = {
  key: 4,
  class: "ui-card-footer"
};
function _n(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("ui-button"), u = y("Divider");
  return a.portalReady ? (l(), _(Z, {
    key: 0,
    to: "body"
  }, [
    g(q, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: n.onOverlayAfterEnter,
      onAfterLeave: n.onOverlayAfterLeave
    }, {
      default: k(() => [
        i.open ? (l(), o("div", {
          key: 0,
          ref: "layerRef",
          class: v(n.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...c) => n.onLayerKeydown && n.onLayerKeydown(...c))
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
            onClick: t[2] || (t[2] = L(() => {
            }, ["stop"]))
          }), [
            h("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
            }, [...t[4] || (t[4] = [
              h("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            n.hasHeaderBlock ? (l(), o("div", pn, [
              m(e.$slots, "header", {}, () => [
                n.hasDefaultHeader ? (l(), o("div", {
                  key: 0,
                  class: v(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (l(), o("span", gn, [
                    g(s, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  n.hasTitle ? (l(), o("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, [
                    m(e.$slots, "title", {}, () => [
                      F(b(i.title), 1)
                    ])
                  ], 8, bn)) : f("", !0),
                  i.showClose || e.$slots.append || e.$slots.actions ? (l(), o("div", yn, [
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
                    id: a.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, [
                    m(e.$slots, "description", {}, () => [
                      F(b(i.description), 1)
                    ])
                  ], 8, vn)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), o("div", kn, [
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
            e.$slots.footer ? (l(), o("div", Sn, [
              m(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, mn)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ])) : f("", !0);
}
const Ba = /* @__PURE__ */ w(hn, [["render", _n]]), wn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], xn = {
  name: "Dropdown",
  components: { Divider: ae },
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
      validator: (e) => wn.includes(e)
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
function Cn(e, t, i, r, a, n) {
  const s = y("Divider"), d = y("ui-button"), u = y("ui-popover");
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
      m(e.$slots, "trigger", qe(Ue(c)))
    ]),
    content: k(({ close: c }) => [
      h("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = L(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? m(e.$slots, "menu", {
          key: 0,
          close: c
        }) : (l(!0), o(A, { key: 1 }, $(i.items, (p, z) => (l(), o(A, { key: z }, [
          p.divider ? (l(), _(s, {
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
            onClick: L((D) => n.onItem(p, c), ["stop"])
          }, {
            default: k(() => [
              F(b(p.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "suffix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Ra = /* @__PURE__ */ w(xn, [["render", Cn]]), Tn = ["solid", "regular", "brands", "light", "duotone", "thin"], In = ["sm", "md", "lg"], zn = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, An = {
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
      validator: (e) => Tn.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => In.includes(e)
    }
  },
  computed: {
    iconSize() {
      return zn[this.size] ?? "md";
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
}, Ln = {
  key: 0,
  class: "ui-empty-icon"
}, Dn = {
  key: 1,
  class: "ui-empty-title"
}, Fn = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Bn = {
  key: 3,
  class: "ui-empty-actions"
};
function Rn(e, t, i, r, a, n) {
  const s = y("ui-icon");
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), o("div", Ln, [
      g(s, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (l(), o("h2", Dn, b(i.title), 1)) : f("", !0),
    i.description ? (l(), o("p", Fn, b(i.description), 1)) : f("", !0),
    e.$slots.default ? (l(), o("div", Bn, [
      m(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Oa = /* @__PURE__ */ w(An, [["render", Rn]]);
let Ae = 0;
const On = ["vertical", "horizontal"], En = ["default", "card"], Pn = {
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
      validator: (e) => On.includes(e)
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
      validator: (e) => En.includes(e)
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
    Ae += 1;
    const e = Ae;
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
}, $n = ["data-primary-field"], Nn = {
  key: 0,
  class: "ui-form-row-text"
}, Vn = ["for"], Mn = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, jn = ["id"], Hn = { class: "ui-form-row-control" };
function Wn(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), o("div", Nn, [
      i.label || e.$slots.action ? (l(), o("div", {
        key: 0,
        class: v(n.labelLineClass)
      }, [
        i.label ? (l(), o("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, b(i.label), 9, Vn)) : f("", !0),
        e.$slots.action ? (l(), o("div", Mn, [
          m(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description ? (l(), o("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, b(i.description), 9, jn)) : f("", !0)
    ])) : f("", !0),
    h("div", Hn, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 16, $n);
}
const Ea = /* @__PURE__ */ w(Pn, [["render", Wn]]), Yn = ["solid", "regular", "brands", "light", "duotone", "thin"], Le = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Gn = ["xs", "sm", "md", "lg"], Kn = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, qn = {
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
      validator: (e) => Yn.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Gn.includes(e)
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
      return Le[this.type] || Le.light;
    },
    iconClass() {
      return C(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Kn[this.size],
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
function Un(e, t, i, r, a, n) {
  return l(), o("i", I({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Pa = /* @__PURE__ */ w(qn, [["render", Un]]), Qn = ["sm", "md", "lg"], Zn = ["default", "plain"], Xn = {
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
      validator: (e) => Zn.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => Qn.includes(e)
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
    return { fallbackId: Qe() };
  },
  computed: {
    resolvedSize() {
      let e = H(this.size, { defaultSize: "md" });
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
      return st(this.$attrs, [
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
}, Jn = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, er = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, tr = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], ir = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], nr = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, rr = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function sr(e, t, i, r, a, n) {
  const s = y("ui-icon");
  return l(), o("div", {
    class: v([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), o("div", Jn, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (l(), o("span", er, [
      g(s, {
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
    }), null, 16, tr)) : (l(), o("input", I({
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
    }), null, 16, ir)),
    i.suffixIcon ? (l(), o("span", nr, [
      g(s, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (l(), o("div", rr, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const $a = /* @__PURE__ */ w(Xn, [["render", sr]]);
let De = 0;
const ar = ["sm", "md", "lg"], Fe = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], lr = {
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
      default: () => Fe
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ar.includes(e)
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
    return De += 1, { fallbackId: `ui-phone-number-${De}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : Fe;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return H(this.size, { defaultSize: "md" });
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
}, or = { class: "ui-phone-prepend" }, ur = {
  key: 0,
  class: "ui-phone-country-static"
};
function dr(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("ui-select"), u = y("ui-input");
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
        h("div", or, [
          g(s, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), o("span", ur, b(n.innerCountry), 1)) : (l(), _(d, {
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
const Na = /* @__PURE__ */ w(lr, [["render", dr]]), cr = ["ul", "ol", "div"], fr = ["plain", "bordered"], hr = ["compact", "normal", "relaxed"], mr = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => cr.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup (şarkı / menü satırları).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => fr.includes(e)
    },
    /** Öğeler arası dikey boşluk — `bordered` iken yok sayılır. */
    density: {
      type: String,
      default: "normal",
      validator: (e) => hr.includes(e)
    }
  },
  computed: {
    listClass() {
      if (this.variant === "bordered")
        return C("ui-list", "ui-list--bordered", this.$attrs.class);
      const e = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return C("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function pr(e, t, i, r, a, n) {
  return l(), _(Ke(i.tag), I({
    class: n.listClass,
    role: "list"
  }, n.passthroughAttrs), {
    default: k(() => [
      m(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Va = /* @__PURE__ */ w(mr, [["render", pr]]), gr = ["solid", "regular", "brands", "light", "duotone", "thin"], br = ["start", "center"], yr = {
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
      validator: (e) => gr.includes(e)
    },
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => br.includes(e)
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
}, vr = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, kr = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Sr = { class: "ui-list-item-content min-w-0 flex-1" }, _r = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function wr(e, t, i, r, a, n) {
  const s = y("ui-icon");
  return l(), o("li", {
    class: v(n.itemClass),
    role: "listitem"
  }, [
    i.prefixIcon ? (l(), o("span", vr, [
      g(s, {
        name: i.prefixIcon,
        type: i.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), o("span", kr, [
      m(e.$slots, "prefix")
    ])) : f("", !0),
    h("div", Sr, [
      m(e.$slots, "default")
    ]),
    e.$slots.trailing ? (l(), o("div", _r, [
      m(e.$slots, "trailing")
    ])) : f("", !0)
  ], 2);
}
const Ma = /* @__PURE__ */ w(yr, [["render", wr]]), xr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Be = 10, te = 410, Cr = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Tr = {
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
      validator: (e) => xr.includes(e)
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
      mobileCenteredActive: !1,
      portalReady: !1
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
      const i = window.innerWidth, r = window.innerHeight, a = Be, n = this.resolvedWidth, s = e.getBoundingClientRect(), d = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? s.width : 200), u = t.offsetHeight || 120;
      if (G() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const x = Math.max(a, Math.round((i - d) / 2)), R = {
          top: `${Math.max(a, Math.round((r - u) / 2))}px`,
          left: `${x}px`
        };
        n != null ? (R.width = n, R.minWidth = n) : (R.width = `${Math.min(d, i - a * 2)}px`, R.maxWidth = `calc(100vw - ${a * 2}px)`), this.layerStyle = this.withLayerZIndex(R);
        return;
      }
      this.mobileCenteredActive = !1;
      let c, p;
      switch (this.placement) {
        case "right-start":
          c = s.top, p = s.right + a;
          break;
        case "right-end":
          c = s.bottom - u, p = s.right + a;
          break;
        case "left-start":
          c = s.top, p = s.left - a - d;
          break;
        case "left-end":
          c = s.bottom - u, p = s.left - a - d;
          break;
        case "top-start":
          c = s.top - a - u, p = s.left;
          break;
        case "top-end":
          c = s.top - a - u, p = s.right - d;
          break;
        case "bottom-end":
          c = s.bottom + a, p = s.right - d;
          break;
        case "bottom":
          c = s.bottom + a, p = s.left + (s.width - d) / 2;
          break;
        case "bottom-start":
        default:
          c = s.bottom + a, p = s.left;
          break;
      }
      if (this.placement.startsWith("right") && p + d > i - a && (p = s.left - a - d), this.placement.startsWith("left") && p < a && (p = s.right + a), this.placement.startsWith("top") && c < a && (c = s.bottom + a), p + d > i - a && (p = Math.max(a, i - a - d)), p < a && (p = a), this.placement.startsWith("bottom") && c + u > r - a) {
        const x = s.top - a - u;
        x >= a && (c = x);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (c + u > r - a && (c = Math.max(a, r - a - u)), c < a && (c = a));
      const z = this.matchTriggerWidth && n == null ? `${Math.ceil(s.width)}px` : void 0, D = {
        top: `${Math.round(c)}px`,
        left: `${Math.round(p)}px`,
        minWidth: z
      };
      n != null && (D.width = n, D.minWidth = n), this.layerStyle = this.withLayerZIndex(D), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const n = e.querySelector("[data-popover-align]") || e, s = a.querySelector("[data-popover-align]") || a, d = n.getBoundingClientRect(), u = s.getBoundingClientRect(), c = u.top - d.top, p = u.left - d.left, z = i.getBoundingClientRect(), D = this.layerStyle.top, x = this.layerStyle.left;
      let S = typeof D == "string" && D !== "" ? parseFloat(D) : z.top, R = typeof x == "string" && x !== "" ? parseFloat(x) : z.left;
      Number.isNaN(S) && (S = z.top), Number.isNaN(R) && (R = z.left);
      let T = S - c, P = R - p;
      const B = Be, K = window.innerHeight, V = window.innerWidth, W = z.height, Y = z.width;
      T + W > K - B && (T = Math.max(B, K - B - W)), T < B && (T = B), P + Y > V - B && (P = Math.max(B, V - B - Y)), P < B && (P = B), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(T)}px`,
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
      for (const n of Cr)
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
}, Ir = ["data-popover-align-active", "data-ui-popover-mobile-centered"], zr = {
  key: 0,
  class: "ui-popover-header"
}, Ar = { class: "ui-popover-body min-h-0 min-w-0" }, Lr = {
  key: 1,
  class: "ui-popover-footer"
};
function Dr(e, t, i, r, a, n) {
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
    a.portalReady ? (l(), _(Z, {
      key: 0,
      to: "body"
    }, [
      g(q, { name: "ui-overlay-popover-backdrop" }, {
        default: k(() => [
          n.showMobileBackdrop ? (l(), o("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: U(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...s) => n.close && n.close(...s))
          }, null, 4)) : f("", !0)
        ]),
        _: 1
      }),
      g(q, {
        name: "ui-overlay-popover",
        onBeforeEnter: n.onPopoverBeforeEnter
      }, {
        default: k(() => [
          i.open ? (l(), o("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: U(a.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": a.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            h("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[1] || (t[1] = (...s) => n.onPanelKeydown && n.onPanelKeydown(...s))
            }, [
              e.$slots.header ? (l(), o("div", zr, [
                m(e.$slots, "header", { close: n.close })
              ])) : f("", !0),
              h("div", Ar, [
                m(e.$slots, "content", { close: n.close })
              ]),
              e.$slots.footer ? (l(), o("div", Lr, [
                m(e.$slots, "footer", { close: n.close })
              ])) : f("", !0)
            ], 544)
          ], 12, Ir)) : f("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeEnter"])
    ])) : f("", !0)
  ], 2);
}
const ja = /* @__PURE__ */ w(Tr, [["render", Dr]]), Fr = {
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
}, Br = ["name", "value", "checked"], Rr = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, Or = { class: "ui-radio-body" }, Er = { class: "ui-radio-label" }, Pr = {
  key: 0,
  class: "ui-radio-description"
};
function $r(e, t, i, r, a, n) {
  var d;
  const s = y("ui-icon");
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
      t[2] || (t[2] = Q(L((...u) => n.select && n.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = Q(L((...u) => n.select && n.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (d = n.uiRadioGroup) == null ? void 0 : d.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => n.select && n.select(...u))
    }, null, 40, Br),
    h("span", Rr, [
      n.isChecked ? (l(), _(s, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-radio-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    h("span", Or, [
      h("span", Er, b(i.label), 1),
      i.description ? (l(), o("span", Pr, b(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Ha = /* @__PURE__ */ w(Fr, [["render", $r]]);
let Re = 0;
const Nr = ["list", "button", "List", "Button"], Vr = ["vertical", "horizontal"], Mr = {
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
      validator: (e) => Nr.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Vr.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Re += 1, { groupName: `ui-radio-group-${Re}` };
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
}, jr = ["aria-label"];
function Hr(e, t, i, r, a, n) {
  return l(), o("div", {
    class: v(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, jr);
}
const Wa = /* @__PURE__ */ w(Mr, [["render", Hr]]), Wr = {
  name: "Tag",
  components: { Badge: ni, Tooltip: Xe },
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
}, Yr = ["aria-label"];
function Gr(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("Tooltip"), u = y("Badge");
  return l(), _(u, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Ze({
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
              onClick: t[0] || (t[0] = L((c) => e.$emit("remove"), ["stop"]))
            }, [
              g(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Yr)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const Kr = /* @__PURE__ */ w(Wr, [["render", Gr]]);
let Oe = 0;
const qr = ["field", "inline"], Ur = ["sm", "md", "lg"], Qr = {
  name: "Select",
  components: { Tag: Kr },
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
      validator: (e) => qr.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ur.includes(e)
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
    Oe += 1;
    const e = Oe;
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
      let e = H(this.size, { defaultSize: "md" });
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
}, Zr = ["name", "value"], Xr = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Jr = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, es = {
  key: 1,
  class: "ui-select-values-inner"
}, ts = ["placeholder", "aria-label", "disabled"], is = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, ns = { class: "ui-select-field-suffix" }, rs = ["aria-label"], ss = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, as = ["data-size", "placeholder", "aria-label", "onKeydown"], ls = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], os = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, us = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, ds = {
  "data-popover-align": "",
  class: "min-w-0 truncate"
}, cs = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function fs(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("Tag"), u = y("ui-skeleton"), c = y("ui-badge"), p = y("ui-button"), z = y("ui-empty"), D = y("ui-popover");
  return l(), o("div", {
    class: v(n.rootClass)
  }, [
    i.name ? (l(), o("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, Zr)) : f("", !0),
    g(D, {
      open: a.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (x) => a.menuOpen = x),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, Ze({
      trigger: k(({ open: x, toggle: S, close: R }) => [
        m(e.$slots, "trigger", {
          open: x,
          toggle: S,
          close: R
        }, () => [
          h("button", I({
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
            onClick: (T) => n.onTriggerClick(S)
          }), [
            i.prefixIcon ? (l(), o("span", Jr, [
              g(s, {
                name: i.prefixIcon,
                size: "xs"
              }, null, 8, ["name"])
            ])) : f("", !0),
            i.multiple ? (l(), o("div", es, [
              (l(!0), o(A, null, $(n.selectedValues, (T) => (l(), _(d, {
                key: String(T),
                variant: "secondary",
                size: "sm",
                removable: "",
                onRemove: (P) => n.removeValue(T)
              }, {
                default: k(() => [
                  F(b(n.labelForValue(T)), 1)
                ]),
                _: 2
              }, 1032, ["onRemove"]))), 128)),
              n.isFilterable ? re((l(), o("input", {
                key: 0,
                ref: "searchInput",
                "onUpdate:modelValue": t[0] || (t[0] = (T) => a.filterQuery = T),
                type: "text",
                class: v(["ui-select-values-input", {
                  "ui-select-values-input--solo": !n.selectedValues.length,
                  "ui-select-values-input--open": a.menuOpen
                }]),
                placeholder: n.multipleInputPlaceholder,
                "aria-label": n.resolvedFilterPlaceholder,
                autocomplete: "off",
                disabled: n.isDisabled,
                onClick: t[1] || (t[1] = L((...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T), ["stop"])),
                onFocus: t[2] || (t[2] = (...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T)),
                onKeydown: t[3] || (t[3] = (...T) => n.onSearchKeydown && n.onSearchKeydown(...T))
              }, null, 42, ts)), [
                [ue, a.filterQuery]
              ]) : f("", !0)
            ])) : i.loading ? (l(), o("span", is, b(n.resolvedLoadingLabel), 1)) : (l(), o("span", {
              key: 3,
              class: v(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
              "data-popover-align": ""
            }, b(n.displayLabel), 3)),
            h("span", ns, [
              n.showClearButton ? (l(), o("button", {
                key: 0,
                type: "button",
                class: "ui-select-clear",
                "aria-label": n.clearAriaLabel,
                onClick: t[4] || (t[4] = L((...T) => n.clearSelection && n.clearSelection(...T), ["stop"]))
              }, [
                g(s, {
                  name: "xmark",
                  size: "xs"
                })
              ], 8, rs)) : f("", !0),
              h("span", ss, [
                g(s, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 16, Xr)
        ])
      ]),
      content: k(({ close: x }) => [
        h("div", {
          ref: "listbox",
          id: a.listboxId,
          class: v(["ui-select-listbox", n.listboxClass]),
          "data-size": n.resolvedSize,
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), o("div", os, [
            (l(), o(A, null, $(3, (S) => g(u, {
              key: S,
              variant: "line",
              class: v(S === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), o(A, { key: 1 }, $(n.filteredOptions, (S) => (l(), _(p, {
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
            onClick: (R) => n.pick(S, x)
          }, {
            default: k(() => [
              m(e.$slots, "option", {
                option: S,
                selected: n.isSelected(S)
              }, () => [
                h("span", us, [
                  h("span", ds, b(S.label), 1),
                  S.badge ? (l(), _(c, {
                    key: 0,
                    variant: S.badgeVariant || "secondary",
                    size: "xs"
                  }, {
                    default: k(() => [
                      F(b(S.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : S.description ? (l(), o("span", cs, b(S.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && a.filterQuery ? (l(), _(z, {
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
        ], 10, ls)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: k(({ close: x }) => [
          re(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (S) => a.filterQuery = S),
            type: "text",
            class: v(["ui-select-filter-input w-full", n.filterInputClass]),
            "data-size": n.resolvedSize,
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = L(() => {
            }, ["prevent"])),
            onKeydown: [
              Q(L((S) => n.pickFirstFiltered(x), ["prevent"]), ["enter"]),
              Q(L((S) => x(), ["prevent"]), ["esc"])
            ]
          }, null, 42, as), [
            [ue, a.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: k((x) => [
          m(e.$slots, "footer", qe(Ue(x)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Ya = /* @__PURE__ */ w(Qr, [["render", fs]]), hs = {
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
        this.icon && !this.hasAffixes && "ui-segment--with-icon",
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
}, ms = ["aria-checked", "disabled"], ps = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, gs = {
  key: 1,
  class: "ui-segment-label"
}, bs = {
  key: 2,
  class: "sr-only"
}, ys = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, vs = {
  key: 1,
  class: "ui-segment-label"
}, ks = {
  key: 2,
  class: "sr-only"
};
function Ss(e, t, i, r, a, n) {
  const s = y("ui-icon");
  return l(), o("button", {
    type: "button",
    role: "radio",
    class: v(n.segmentClass),
    "aria-checked": n.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[2] || (t[2] = (...d) => n.select && n.select(...d))
  }, [
    n.hasAffixes ? (l(), o(A, { key: 0 }, [
      n.hasPrepend ? (l(), o("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = L(() => {
        }, ["stop"]))
      }, [
        m(e.$slots, "prepend")
      ])) : f("", !0),
      h("span", {
        class: v(["ui-segment-main", { "ui-segment-main--with-icon": i.icon }])
      }, [
        i.icon ? (l(), o("span", ps, [
          g(s, {
            name: i.icon,
            size: n.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        n.showLabel ? (l(), o("span", gs, b(i.label), 1)) : i.label ? (l(), o("span", bs, b(i.label), 1)) : f("", !0)
      ], 2),
      n.hasAppend ? (l(), o("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = L(() => {
        }, ["stop"]))
      }, [
        m(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (l(), o(A, { key: 1 }, [
      i.icon ? (l(), o("span", ys, [
        g(s, {
          name: i.icon,
          size: n.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      n.showLabel ? (l(), o("span", vs, b(i.label), 1)) : i.label ? (l(), o("span", ks, b(i.label), 1)) : f("", !0)
    ], 64))
  ], 10, ms);
}
const Ga = /* @__PURE__ */ w(hs, [["render", Ss]]), _s = ["sm", "md", "lg"], ws = ["horizontal", "vertical"];
function xs(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Cs = {
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
      validator: (e) => _s.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ws.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: xs
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
      return H(this.size, { defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? G() : !!this.iconOnly;
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
}, Ts = ["aria-label"];
function Is(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: n.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, Ts);
}
const Ka = /* @__PURE__ */ w(Cs, [["render", Is]]), zs = ["line", "circle", "block", "pill"], As = ["sm", "md", "lg"], Ls = 480, Ee = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Pe = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, Ds = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => zs.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => As.includes(e)
    }
  },
  setup(e) {
    const t = gt(), i = M(() => !!t.default), r = E(null), a = E(null), n = E(null), s = E(null), d = E(!1), u = E(!1), c = E(!1), p = E(!1), z = M(
      () => e.loading || u.value
    ), D = M(
      () => e.loading || u.value
    );
    bt(() => {
      p.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), yt(
      () => e.loading,
      async (B, K) => {
        var Y, le, oe;
        if (B) {
          u.value = !1, c.value = !1, s.value = null, d.value = !1;
          return;
        }
        if (K !== !0) return;
        if (p.value) {
          u.value = !1, s.value = null, d.value = !1;
          return;
        }
        const V = ((Y = r.value) == null ? void 0 : Y.offsetHeight) ?? ((le = a.value) == null ? void 0 : le.offsetHeight) ?? 0;
        u.value = !0, c.value = !1, d.value = !0, s.value = V, await de();
        const W = ((oe = n.value) == null ? void 0 : oe.scrollHeight) ?? V;
        if (V <= 0 && W <= 0) {
          x();
          return;
        }
        await de(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.value = W, c.value = !0;
          });
        }), setTimeout(x, Ls + 40);
      }
    );
    function x() {
      u.value = !1, c.value = !1, s.value = null, d.value = !1;
    }
    function S(B) {
      B.target === r.value && B.propertyName === "height" && (e.loading || d.value && x());
    }
    const R = M(() => {
      if (s.value != null)
        return { height: `${s.value}px` };
    }), T = M(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !u.value,
      "ui-skeleton-placeholder--overlay": u.value,
      "ui-skeleton-placeholder--fade-out": u.value
    })), P = M(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !u.value,
      "ui-skeleton-content-wrap--revealing": u.value,
      "ui-skeleton-content-wrap--revealing-visible": u.value && c.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !u.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: a,
      contentWrapRef: n,
      hostStyle: R,
      heightAnimActive: d,
      isRevealing: u,
      showPlaceholder: z,
      isBusy: D,
      placeholderClass: T,
      contentWrapClass: P,
      onHostTransitionEnd: S
    };
  },
  computed: {
    variantClass() {
      return Ee[this.variant] || Ee.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Pe[this.size] || Pe.md;
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
        (this.loading || this.isRevealing) && "ui-skeleton-host--busy",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Fs = ["aria-busy"], Bs = ["aria-hidden"];
function Rs(e, t, i, r, a, n) {
  return r.hasDefaultSlot ? (l(), o("div", I({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...s) => r.onHostTransitionEnd && r.onHostTransitionEnd(...s))
  }), [
    re(h("div", {
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
      [pt, r.showPlaceholder]
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
      ], 8, Bs)
    ], 2)
  ], 16, Fs)) : (l(), o("div", I({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const qa = /* @__PURE__ */ w(Ds, [["render", Rs]]), Os = {
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
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], a = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let s = 0;
      if (r.includes(n)) s = 1;
      else if (a.includes(n)) s = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let u = i.indexOf(d);
      u === -1 && (u = i.findIndex((D) => D.getAttribute("aria-selected") === "true")), u === -1 && (u = 0);
      let c = u + s;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (z = (p = i[c]) == null ? void 0 : p.focus) == null || z.call(p);
    }
  }
}, Es = ["aria-label", "aria-orientation"];
function Ps(e, t, i, r, a, n) {
  return l(), o("div", I({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...s) => n.onKeydown && n.onKeydown(...s))
  }), [
    m(e.$slots, "default")
  ], 16, Es);
}
const Ua = /* @__PURE__ */ w(Os, [["render", Ps]]), $s = ["line", "segmented"], Ns = {
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
      validator: (e) => $s.includes(e)
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
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return { baseId: Qe() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return H(this.size, { defaultSize: "md" });
    },
    rootClass() {
      return C(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.variant === "segmented" && this.resolvedSize === "lg" ? "ui-tabs--segmented-lg" : "",
        this.variant === "segmented" && this.resolvedSize === "sm" ? "ui-tabs--segmented-sm" : "",
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
function Vs(e, t, i, r, a, n) {
  return l(), o("div", I({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Qa = /* @__PURE__ */ w(Ns, [["render", Vs]]), Ms = ["solid", "regular", "brands", "light", "duotone", "thin"], js = {
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
      validator: (e) => Ms.includes(e)
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
}, Hs = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], Ws = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, Ys = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" }, Gs = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function Ks(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("ui-badge");
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
    i.icon ? (l(), o("span", Ws, [
      g(s, {
        name: i.icon,
        type: n.tabIconType,
        size: n.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    h("span", Ys, [
      m(e.$slots, "default", {}, () => [
        F(b(i.label), 1)
      ])
    ]),
    n.showBadge ? (l(), o("span", Gs, [
      g(d, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: k(() => [
          F(b(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, Hs);
}
const Za = /* @__PURE__ */ w(js, [["render", Ks]]), N = vt({
  /** @type {ToastItem[]} */
  items: []
});
let $e = 0;
function Xa(e = {}) {
  $e += 1;
  const t = $e, i = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return N.items.push(i), i.duration > 0 && (i._timer = setTimeout(() => at(t), i.duration)), t;
}
function at(e) {
  const t = N.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = N.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), N.items.splice(t, 1);
}
function Ja() {
  for (const e of N.items)
    e._timer && clearTimeout(e._timer);
  N.items.splice(0);
}
const Ne = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Ve = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, qs = {
  name: "Toast",
  computed: {
    items() {
      return N.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: at,
    iconFor(e) {
      return Ne[e] || Ne.info;
    },
    iconToneClass(e) {
      return Ve[e] || Ve.info;
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
}, Us = { class: "ui-toast-host" }, Qs = { class: "ui-alert-body" }, Zs = {
  key: 0,
  class: "ui-alert-title"
}, Xs = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Js(e, t, i, r, a, n) {
  const s = y("ui-icon"), d = y("ui-button");
  return l(), _(Z, { to: "body" }, [
    h("div", Us, [
      g(kt, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: k(() => [
          (l(!0), o(A, null, $(n.items, (u) => (l(), o("div", {
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
                g(s, {
                  name: n.iconFor(u.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              h("div", Qs, [
                u.title ? (l(), o("p", Zs, b(u.title), 1)) : f("", !0),
                u.description ? (l(), o("p", Xs, b(u.description), 1)) : f("", !0)
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
const el = /* @__PURE__ */ w(qs, [["render", Js]]), tl = {
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
}, il = {
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
}, ea = "fewui-google-fonts", ta = Object.freeze([
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
function nl() {
  return ta.map((e) => ({ ...e }));
}
function lt(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function ot(e) {
  const t = [...new Set(
    (e || []).map((r) => String(r || "").trim()).filter(Boolean)
  )];
  return t.length ? `https://fonts.googleapis.com/css2?${t.map((r) => `family=${encodeURIComponent(r).replace(/%20/g, "+")}:wght@400;500;600`).join("&")}&display=swap` : null;
}
function rl(e = {}) {
  const { body: t, heading: i } = lt(e), r = ot([t, i]);
  return r ? `<link rel="stylesheet" href="${r}">` : "";
}
function ia(e = {}, t = {}) {
  if (typeof document > "u") return null;
  const { body: i, heading: r } = lt(e), a = ot([i, r]);
  if (!a) return null;
  const n = t.id || ea;
  let s = document.getElementById(n);
  return s || (s = document.createElement("link"), s.id = n, s.rel = "stylesheet", document.head.appendChild(s)), s.getAttribute("href") !== a && s.setAttribute("href", a), a;
}
const na = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], ra = "ui-sans-serif, system-ui, sans-serif", Me = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, je = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function sa(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function He(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${ra}`;
}
function aa(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function la(e) {
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
function oa(e, t, i) {
  const [r, a, n] = [e, t, i].map((s) => {
    const d = s / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * n;
}
function ua(e, t = "#ffffff", i = "#0a0a0b") {
  const r = aa(e);
  if (r)
    return oa(...r) > 0.4 ? i : t;
  const a = la(e);
  return a != null && a > 0.72 ? i : t;
}
function da(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function ca(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function fa(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Me[t] != null ? Me[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ha(e) {
  return e == null || e === "" ? null : je[e] ? je[e] : String(e);
}
function ie(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = ca(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const a = fa(i.backdropBlur ?? i.backdropFilter);
  a && (e[`--ui-${t}-backdrop-blur`] = a);
  const n = ha(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function We(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const a = e[i];
  if (a != null && a !== "")
    return String(a);
}
function sl(e = {}, t = {}) {
  const i = sa(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = ut(e);
  for (const [a, n] of Object.entries(r))
    i.style.setProperty(a, n);
  return ia(e), { ...r };
}
function ut(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = He(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = He(r)), e.baseColor && typeof e.baseColor == "object")
    for (const d of na) {
      const u = e.baseColor[d];
      u != null && u !== "" && (t[`--base-${d}`] = String(u));
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
  for (const [d, u] of a) {
    const c = e[d];
    c != null && c !== "" && (t[u] = String(c));
  }
  const n = We(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = ua(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const s = We(e, "secondaryColor", "secondary");
  if (s && (t["--secondary"] = s), ie(t, "surface", e.surfaceStyle), ie(t, "control", e.controlStyle), ie(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, u] of Object.entries(e.colors))
      u != null && u !== "" && (t[da(d)] = String(u));
  return t;
}
function al(e = {}) {
  const t = ut(e), i = Object.entries(t).map(([a, n]) => `${a}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function ma(e, t) {
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
const ll = "few", dt = "#1B5CFF", ol = "#ffffff", Ye = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: dt,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function ul() {
  return {
    light: Ye[600],
    dark: Ye[600]
  };
}
function pa(e) {
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
function Ge(e, t, i) {
  return `#${ne(e)}${ne(t)}${ne(i)}`;
}
function ga(e) {
  const t = pa(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, a] = t, n = Ge(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    a + (255 - a) * 0.12
  ), s = Ge(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    a + (255 - a) * 0.08
  );
  return { accent: n, brandAccent: s };
}
function dl(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = ga(String(i)), a = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (a.accent = r.accent), (t.force || !a.colors["brand-accent"]) && (a.colors["brand-accent"] = r.brandAccent), a;
}
function cl(e, t = dt) {
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
const ct = "fewui-theme-custom-css";
function ba(e, t = ct) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function fl(e = ct) {
  ba("", e);
}
const ft = {
  mode: "dark",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff"
}, ya = {
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
}, va = {
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
}, ka = {
  panel: ft,
  flat: ya,
  landing: va
}, hl = ["panel", "flat", "landing"];
function Sa(e = "panel") {
  const t = String(e || "panel").trim(), i = ka[t] || ft;
  return structuredClone(i);
}
function ml(e, t = {}) {
  return ma(Sa(e), t);
}
export {
  on as $,
  xa as A,
  ni as B,
  za as C,
  ct as D,
  Oa as E,
  Ye as F,
  ta as G,
  ba as H,
  Pa as I,
  sl as J,
  rl as K,
  Va as L,
  ot as M,
  al as N,
  fl as O,
  Na as P,
  Ja as Q,
  Ha as R,
  Ga as S,
  ka as T,
  C as U,
  Da as V,
  nn as W,
  ga as X,
  at as Y,
  tl as Z,
  w as _,
  Ca as a,
  Aa as a0,
  ul as a1,
  Sa as a2,
  nl as a3,
  ma as a4,
  st as a5,
  Xa as a6,
  Fa as a7,
  H as a8,
  it as a9,
  cl as aa,
  lt as ab,
  ml as ac,
  ut as ad,
  tt as ae,
  il as af,
  dl as ag,
  Ta as b,
  Ia as c,
  La as d,
  Ba as e,
  ae as f,
  Ra as g,
  ll as h,
  dt as i,
  ol as j,
  Ea as k,
  $a as l,
  Ma as m,
  ja as n,
  Wa as o,
  Ka as p,
  Ya as q,
  qa as r,
  hl as s,
  Ua as t,
  Za as u,
  Qa as v,
  Kr as w,
  el as x,
  Xe as y,
  ia as z
};
//# sourceMappingURL=index-lyNYfxMX.js.map
