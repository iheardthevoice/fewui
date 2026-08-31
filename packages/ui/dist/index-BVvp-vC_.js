import { ref as O, inject as Vt, getCurrentInstance as Nt, openBlock as l, createElementBlock as d, mergeProps as L, renderSlot as p, resolveComponent as b, normalizeClass as k, createVNode as y, createCommentVNode as f, createElementVNode as h, toDisplayString as g, createBlock as w, resolveDynamicComponent as be, withCtx as v, Teleport as te, Transition as he, normalizeStyle as G, createTextVNode as D, Fragment as B, Comment as Ht, Text as jt, reactive as _t, withModifiers as P, renderList as V, normalizeProps as Ct, guardReactiveProps as Tt, useId as It, withKeys as X, createSlots as zt, withDirectives as me, vModelText as Pe, vShow as Wt, useSlots as qt, computed as W, onMounted as Gt, onBeforeUnmount as Yt, watch as Kt, nextTick as Re, TransitionGroup as Ut } from "vue";
import { RouterLink as Qt } from "vue-router";
const Lt = "(max-width: 767px)", At = O(!1);
function se() {
  typeof window > "u" || (At.value = window.matchMedia(Lt).matches);
}
if (typeof window < "u") {
  se();
  const e = window.matchMedia(Lt);
  typeof e.addEventListener == "function" ? e.addEventListener("change", se) : typeof e.addListener == "function" && e.addListener(se);
}
function M() {
  return At.value;
}
function Zt() {
  return typeof document > "u" ? !1 : document.documentElement.classList.contains("cap-ios");
}
function Xt() {
  return M() || Zt();
}
function Ee(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = Xt();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
const J = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  cardPadding: "default",
  radius: "26px"
};
function ve(e) {
  return !e || typeof e != "object" ? { ...J } : {
    ...J,
    ...e
  };
}
const Ft = Symbol("uiDefaults");
function Bl(e, t) {
  e.provide(Ft, ve(t));
}
function Pl(e = {}) {
  const t = Vt(Ft, J);
  return ve({ ...t, ...e });
}
function Dt() {
  var t, i, r;
  const e = Nt();
  return ((r = (i = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.config) == null ? void 0 : i.globalProperties) == null ? void 0 : r.$uiDefaults) ?? J;
}
const Me = {
  compact: "1rem",
  default: "1.5rem",
  comfortable: "1.25rem",
  spacious: "2rem"
};
function Rl(e) {
  const t = {};
  if (e.radius) {
    const i = String(e.radius);
    t["--radius"] = i, t["--radius-sm"] = `calc(${i} - 4px)`, t["--radius-md"] = `calc(${i} - 2px)`, t["--radius-3xl"] = i;
  }
  if (e.cardPadding) {
    const i = Me[e.cardPadding] || Me.default;
    t["--ui-card-padding"] = i, t["--ui-card-gap"] = i;
  }
  return t;
}
const Jt = ["solid", "regular", "brands", "light", "duotone", "thin"];
function Y(e, t, i) {
  if (e != null && e !== "")
    return e;
  const r = Dt()[t];
  return r != null && r !== "" ? (
    /** @type {T} */
    r
  ) : i;
}
function N(e, { key: t = "controlSize", defaultSize: i = "md" } = {}) {
  if (e != null && e !== "")
    return Ee(e, { defaultSize: i });
  const r = Dt(), s = r[t] ?? r.controlSize ?? r.buttonSize ?? r.inputSize ?? i;
  return Ee(s, { defaultSize: i });
}
function ie(e) {
  const t = Y(e, "iconType", "light");
  return Jt.includes(t) ? t : "light";
}
function ei(e) {
  return Y(e, "dialogMaxWidth", "lg");
}
function ti(e, t = "dateFormat") {
  return Y(e, t, "") || void 0;
}
function El(e) {
  return Y(e, "timeFormat", "HH:mm");
}
const ii = ["solid", "regular", "brands", "light", "duotone", "thin"], ne = {
  type: String,
  default: void 0,
  validator: (e) => e == null || ii.includes(e)
};
function ke(e = "iconType") {
  return {
    resolvedIconType() {
      return ie(this[e]);
    }
  };
}
const x = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, s] of t)
    i[r] = s;
  return i;
};
function z(...e) {
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
const ni = ["horizontal", "vertical"], ri = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => ni.includes(e)
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
      return z(
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
}, si = ["aria-label"];
function ai(e, t, i, r, s, n) {
  return l(), d("div", L({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, si);
}
const Ml = /* @__PURE__ */ x(ri, [["render", ai]]), li = ["info", "success", "warning", "error"], Oe = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, $e = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, oi = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => li.includes(e)
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
      return this.icon || Oe[this.variant] || Oe.info;
    },
    iconToneClass() {
      return $e[this.variant] || $e.info;
    },
    rootClasses() {
      return z(
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
}, ui = ["role"], di = { class: "ui-alert-body" }, ci = {
  key: 0,
  class: "ui-alert-title"
}, fi = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, hi = {
  key: 2,
  class: "ui-alert-slot"
};
function mi(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("ui-button");
  return l(), d("div", L({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), d("span", {
      key: 0,
      class: k(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      p(e.$slots, "icon", {}, () => [
        y(a, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", di, [
      i.title ? (l(), d("p", ci, g(i.title), 1)) : f("", !0),
      i.description ? (l(), d("p", fi, g(i.description), 1)) : f("", !0),
      e.$slots.default ? (l(), d("div", hi, [
        p(e.$slots, "default")
      ])) : f("", !0)
    ]),
    i.dismissible ? (l(), w(o, {
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
  ], 16, ui);
}
const Ol = /* @__PURE__ */ x(oi, [["render", mi]]), pi = ["xs", "sm", "md", "lg", "xl"], Ve = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, yi = ["circle", "rounded", "square"], gi = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, Ne = Object.freeze({
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
}), He = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function bi(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return He[t] && (t = He[t]), t >= "A" && t <= "Z" ? t : "default";
}
function vi(e) {
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
const ki = {
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
      validator: (e) => pi.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => yi.includes(e)
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
      return z(
        "ui-avatar",
        Ve[this.size] || Ve.md,
        gi[this.shape] || "",
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
      return vi(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? bi(e[0]) : "default";
    },
    letterColors() {
      return Ne[this.colorLetterKey] || Ne.default;
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
}, Si = ["src", "alt"], wi = ["role", "aria-label", "aria-hidden"];
function xi(e, t, i, r, s, n) {
  return l(), w(be(n.rootTag), L({
    type: i.interactive ? "button" : void 0,
    class: n.rootClass,
    style: n.rootStyle
  }, n.rootBind, { onClick: n.onRootClick }), {
    default: v(() => [
      i.src && !s.imageFailed ? (l(), d("img", {
        key: 0,
        src: i.src,
        alt: n.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
      }, null, 40, Si)) : (l(), d("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : n.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, g(n.displayInitials), 9, wi))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const $l = /* @__PURE__ */ x(ki, [["render", xi]]);
let _i = 0;
const Ci = ["top", "bottom", "left", "right"], E = 8, Ti = {
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
      validator: (e) => Ci.includes(e)
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
      tooltipId: `ui-tooltip-${++_i}`,
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
      const t = e.getBoundingClientRect(), i = E, r = t.left + t.width / 2, s = t.top + t.height / 2;
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
      t === "top" && a.top < E ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, a = r.getBoundingClientRect()) : t === "bottom" && a.bottom > n - E && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, a = r.getBoundingClientRect());
      let o = 0, u = 0;
      if (a.left < E ? o = E - a.left : a.right > s - E && (o = s - E - a.right), a.top < E ? u = E - a.top : a.bottom > n - E && (u = n - E - a.bottom), o === 0 && u === 0) return;
      const c = parseFloat(this.panelStyle.left), m = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(m) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + o}px`,
        top: `${m + u}px`
      });
    }
  }
}, Ii = ["id"], zi = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function Li(e, t, i, r, s, n) {
  return l(), d("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => n.onEnter && n.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => n.onLeave && n.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => n.onFocusIn && n.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => n.onFocusOut && n.onFocusOut(...a))
  }, [
    p(e.$slots, "default"),
    s.portalReady ? (l(), w(te, {
      key: 0,
      to: "body"
    }, [
      y(he, { name: "ui-tooltip-fade" }, {
        default: v(() => [
          s.open && !i.disabled && n.hasContent ? (l(), d("div", {
            key: 0,
            id: s.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: G(s.panelStyle),
            role: "tooltip"
          }, [
            h("span", zi, [
              p(e.$slots, "content", {}, () => [
                D(g(i.label), 1)
              ])
            ])
          ], 12, Ii)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 544);
}
const Bt = /* @__PURE__ */ x(Ti, [["render", Li]]);
function Se(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [s, n] of Object.entries(e || {}))
    i.has(s) || (r[s] = n);
  return r;
}
const Ai = [
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
], Fi = ["xs", "sm", "md", "lg"], je = {
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
}, We = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, ae = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
};
function Di(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function Bi(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const Pi = {
  name: "Badge",
  components: { Tooltip: Bt },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Ai.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => Fi.includes(e)
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
      validator: (e) => Object.keys(ae).includes(e)
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
      const e = Se(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? ae[this.maxWidth] || ae[48] : "";
    },
    hasAdornment() {
      return !!(this.prefixIcon || this.suffixIcon || this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return Di(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: Bi(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return z(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        We[this.size] || We.sm,
        this.isClickable ? "ui-badge--clickable" : "",
        !this.normalizedHex && (je[this.variant] || je.solid),
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
}, Ri = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Ei = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, Mi = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Oi = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function $i(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("Tooltip");
  return l(), w(o, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: v(() => [
      (l(), w(be(n.rootTag), L(n.rootAttrs, {
        class: n.badgeClasses,
        style: n.hexBadgeStyle
      }), {
        default: v(() => [
          i.prefixIcon ? (l(), d("span", Ri, [
            y(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (l(), d("span", Ei, [
            p(e.$slots, "prepend")
          ])) : f("", !0),
          h("span", {
            ref: "labelRef",
            class: k(["ui-badge-label", [n.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), d("span", Mi, [
            y(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (l(), d("span", Oi, [
            p(e.$slots, "append")
          ])) : f("", !0)
        ]),
        _: 3
      }, 16, ["class", "style"]))
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const Vi = /* @__PURE__ */ x(Pi, [["render", $i]]);
function pe(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const Ni = ["sm", "md", "lg"], Hi = ["solid", "outline", "ghost", "link", "nav"], ji = ["primary", "secondary", "input", "warning", "success", "info", "danger"], Wi = ["button", "submit", "reset"], qe = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ge = {
  sm: "box-border h-[var(--ui-control-h-sm)] min-h-[var(--ui-control-h-sm)] px-2.5 py-0 text-xs leading-4",
  md: "box-border h-[var(--ui-control-h-md)] min-h-[var(--ui-control-h-md)] px-3 py-0 text-sm leading-5",
  lg: "box-border h-[var(--ui-control-h-lg)] min-h-[var(--ui-control-h-lg)] px-4 py-0 text-base leading-6"
}, Ye = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Ke = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none"
}, qi = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Ue = {
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
}, Gi = {
  name: "Button",
  components: { RouterLink: Qt },
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
      validator: (e) => Wi.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Hi.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ji.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ni.includes(e)
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
      return N(this.size, { key: "controlSize", defaultSize: "md" });
    },
    themeButtonRounded() {
      return Y(void 0, "buttonRounded", "lg");
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : pe(this, "ui.button.loading", "Loading");
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
      var o, u;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.stack && !e && !t ? i = Ke[this.resolvedSize] || Ke.md : this.cubed && !e && !t ? i = Ye[this.resolvedSize] || Ye.md : e ? i = qi[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = qe[this.resolvedSize] || qe.md;
      let r = "", s = i;
      !e && !t && (this.stack || this.rounded || this.cubed || this.themeButtonRounded === "full") && (r = "rounded-full", !this.stack && !this.cubed && (s = Ge[this.resolvedSize] || Ge.md));
      const n = ((o = Ue[this.variant]) == null ? void 0 : o[this.color]) || ((u = Ue.solid) == null ? void 0 : u.primary), a = this.fulled || this.block;
      return [
        "ui-button ui-control font-sans",
        this.stack ? "ui-button--stack" : "",
        n,
        s,
        a ? "ui-button--fulled w-full" : "",
        r,
        this.isDisabled ? "cursor-not-allowed opacity-50" : "",
        this.hasRouterTo ? "inline-flex items-center" : ""
      ];
    }
  },
  methods: {
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === Ht) return !1;
      if (e.type === jt)
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
      this.$emit("click", e), !e.defaultPrevented && t(e);
    }
  }
}, Yi = ["href", "data-variant", "data-color", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], Ki = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Ui = {
  key: 0,
  class: "sr-only"
}, Qi = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Zi = {
  key: 0,
  class: "sr-only"
}, Xi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ji = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, en = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, tn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, nn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, rn = ["type", "disabled", "data-variant", "data-color", "data-loading", "aria-busy"], sn = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, an = {
  key: 0,
  class: "sr-only"
}, ln = {
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, on = {
  key: 0,
  class: "sr-only"
}, un = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, dn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, cn = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, fn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, hn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function mn(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("RouterLink");
  return n.hasRouterTo ? (l(), w(o, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: v(({ href: u, navigate: c }) => [
      h("a", {
        href: u,
        class: k(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (m) => n.onRouterLinkClick(m, c)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), d(B, { key: 0 }, [
          h("span", Ki, [
            y(a, {
              size: n.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), d("span", Ui, g(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (l(), d(B, { key: 1 }, [
          h("span", Qi, [
            y(a, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), d("span", Zi, g(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.stack ? (l(), d(B, { key: 2 }, [
          i.prefixIcon ? (l(), d("span", Xi, [
            y(a, {
              size: n.stackIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: k(n.textContentClass)
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), d("span", Ji, [
            y(a, {
              size: n.stackIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64)) : n.usesCubedCenterLayout ? (l(), d("span", en, [
          i.prefixIcon ? (l(), w(a, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), w(a, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
        ])) : (l(), d(B, { key: 4 }, [
          i.prefixIcon ? (l(), d("span", tn, [
            y(a, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: k(n.textContentClass)
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), d("span", nn, [
            y(a, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, Yi)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), d("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: k(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    "data-loading": i.loading ? "true" : void 0,
    "aria-busy": i.loading ? "true" : void 0,
    onClick: t[0] || (t[0] = (...u) => n.onClick && n.onClick(...u))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), d(B, { key: 0 }, [
      h("span", sn, [
        y(a, {
          size: n.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), d("span", an, g(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (l(), d(B, { key: 1 }, [
      h("span", ln, [
        y(a, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), d("span", on, g(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.stack ? (l(), d(B, { key: 2 }, [
      i.prefixIcon ? (l(), d("span", un, [
        y(a, {
          size: n.stackIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: k(n.textContentClass)
      }, [
        p(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), d("span", dn, [
        y(a, {
          size: n.stackIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64)) : n.usesCubedCenterLayout ? (l(), d("span", cn, [
      i.prefixIcon ? (l(), w(a, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), w(a, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
    ])) : (l(), d(B, { key: 4 }, [
      i.prefixIcon ? (l(), d("span", fn, [
        y(a, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: k(n.textContentClass)
      }, [
        p(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), d("span", hn, [
        y(a, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, rn));
}
const Vl = /* @__PURE__ */ x(Gi, [["render", mn]]), pn = ["none", "sm", "md"], Qe = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, yn = {
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
      validator: (e) => pn.includes(e)
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
      return ["ui-divider", Qe[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Qe[this.spacing] || "",
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
}, gn = { class: "ui-divider__label" }, bn = {
  key: 1,
  class: "ui-section-label"
};
function vn(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return n.hasLabel ? (l(), d("div", L({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", gn, [
      i.icon ? (l(), w(a, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (l(), d("span", bn, g(i.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), d("hr", L({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const we = /* @__PURE__ */ x(yn, [["render", vn]]), kn = ["solid", "dashed", "dotted", "double"], Ze = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Sn = ["solid", "regular", "brands", "light", "duotone", "thin"], wn = {
  name: "Card",
  components: { Divider: we },
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
      validator: (e) => kn.includes(e)
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
      default: void 0,
      validator: (e) => e == null || Sn.includes(e)
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
    resolvedIconType() {
      return ie(this.iconType);
    },
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
      return Ze[this.borderType] || Ze.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), z(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, xn = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, _n = {
  key: 0,
  class: "ui-header-lead"
}, Cn = { class: "ui-header-lead__main" }, Tn = {
  key: 0,
  class: "ui-header-lead__icon"
}, In = { class: "ui-header-lead__text" }, zn = {
  key: 0,
  class: "ui-heading-3"
}, Ln = {
  key: 1,
  class: "ui-text-default"
}, An = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Fn(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("Divider");
  return l(), d("div", L({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), d("div", xn, [
      p(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (l(), d("div", {
      key: 1,
      class: k(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      p(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), d("div", _n, [
          h("div", Cn, [
            i.icon ? (l(), d("span", Tn, [
              y(a, {
                name: i.icon,
                type: n.resolvedIconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", In, [
              i.title ? (l(), d("h3", zn, g(i.title), 1)) : f("", !0),
              i.description ? (l(), d("p", Ln, g(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), d("div", An, [
            p(e.$slots, "append"),
            p(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    n.showHeaderDivider ? (l(), w(o, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (l(), d("div", {
      key: 3,
      class: k(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      p(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (l(), d("div", {
      key: 4,
      class: k(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      p(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Nl = /* @__PURE__ */ x(wn, [["render", Fn]]), F = _t({
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
function Hl(e = {}) {
  return new Promise((t) => {
    F.title = e.title ?? "", F.description = e.description ?? "", F.confirmLabel = e.confirmLabel ?? "", F.cancelLabel = e.cancelLabel ?? "", F.destructive = !!e.destructive, F._resolve = t, F.open = !0;
  });
}
function le(e) {
  const t = F._resolve;
  F.open = !1, F._resolve = null, t && t(!!e);
}
const Dn = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return F;
    },
    syncOpen: {
      get() {
        return F.open;
      },
      set(e) {
        e ? F.open = !0 : F._resolve ? le(!1) : F.open = !1;
      }
    },
    confirmText() {
      return F.confirmLabel ? F.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return F.cancelLabel ? F.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      le(!0);
    },
    onCancel() {
      le(!1);
    }
  }
};
function Bn(e, t, i, r, s, n) {
  const a = b("ui-button"), o = b("ui-dialog");
  return l(), w(o, {
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
    footer: v(() => [
      y(a, {
        color: "secondary",
        rounded: "",
        onClick: n.onCancel
      }, {
        default: v(() => [
          D(g(n.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      y(a, {
        rounded: "",
        color: n.confirmState.destructive ? "danger" : "primary",
        onClick: n.onConfirm
      }, {
        default: v(() => [
          D(g(n.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const jl = /* @__PURE__ */ x(Dn, [["render", Bn]]);
function Pt(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function Rt(e, t = "tr-TR", i) {
  if (!(e instanceof Date) || Number.isNaN(e.getTime())) return "";
  const r = Pt(t);
  return i === "d MMM yyyy" ? e.toLocaleDateString(r, { day: "numeric", month: "short", year: "numeric" }) : e.toLocaleDateString(r, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Wl(e, t = "tr-TR", i) {
  if (e == null || e === "") return "";
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return "";
  const s = Number(r[1]), n = Number(r[2]) - 1, a = Number(r[3]), o = new Date(s, n, a);
  return o.getFullYear() !== s || o.getMonth() !== n || o.getDate() !== a ? "" : Rt(o, t, i);
}
let Xe = 0;
function Je(e) {
  return String(e).padStart(2, "0");
}
function q(e) {
  return `${e.getFullYear()}-${Je(e.getMonth() + 1)}-${Je(e.getDate())}`;
}
function oe(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, s = Number(t[3]), n = new Date(i, r, s);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== s ? null : n;
}
const Pn = {
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
    Xe += 1;
    const e = Xe, t = oe(this.modelValue) || /* @__PURE__ */ new Date();
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
      return oe(this.modelValue);
    },
    locale() {
      var e;
      return Pt((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder;
      const e = ti(void 0, "dateFormat");
      return Rt(this.selectedDate, this.locale, e);
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
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), s = q(this.referenceTodayDate), n = [];
      for (let a = 0; a < 42; a += 1) {
        const o = new Date(r.getFullYear(), r.getMonth(), r.getDate() + a), u = o.getMonth() === t && o.getFullYear() === e, c = o.getDate(), m = q(o), _ = `${o.getFullYear()}-${o.getMonth()}-${o.getDate()}`, C = !!(this.selectedDate && m === q(this.selectedDate)), I = s === m, S = !!(this.minYmd && m < this.minYmd);
        n.push({
          key: _,
          d: c,
          out: !u,
          date: o,
          sel: C,
          today: I,
          inMonth: u,
          disabled: S
        });
      }
      return n;
    }
  },
  watch: {
    modelValue() {
      const e = oe(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = q(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = q(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = new Date(this.referenceTodayDate);
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const r = q(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Rn = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, En = { class: "mb-3 flex items-center justify-between gap-2" }, Mn = { class: "text-sm font-medium tabular-nums text-foreground" }, On = { class: "ui-datepicker-grid" }, $n = {
  key: 0,
  class: "ui-datepicker-quick"
}, Vn = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, Nn = { class: "mb-3 flex items-center justify-between gap-2" }, Hn = { class: "text-sm font-medium tabular-nums text-foreground" }, jn = { class: "ui-datepicker-grid" }, Wn = {
  key: 0,
  class: "ui-datepicker-quick"
};
function qn(e, t, i, r, s, n) {
  const a = b("ui-button"), o = b("ui-popover");
  return l(), d("div", {
    class: k([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.fulled ? "ui-datepicker--fulled w-full" : "",
      !i.embedded && !i.fulled ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (l(), d("div", Rn, [
      h("div", En, [
        y(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = P((u) => n.shiftMonth(-1), ["stop"]))
        }),
        h("span", Mn, g(n.monthTitle), 1),
        y(a, {
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
      h("div", On, [
        (l(!0), d(B, null, V(n.calendarCells, (u) => (l(), w(a, {
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
          default: v(() => [
            D(g(u.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ]),
      i.showQuick ? (l(), d("div", $n, [
        y(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.yesterdayQuickDisabled,
          onClick: t[2] || (t[2] = (u) => n.pickQuick("yesterday"))
        }, {
          default: v(() => [
            D(g(n.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        y(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.todayQuickDisabled,
          onClick: t[3] || (t[3] = (u) => n.pickQuick("today"))
        }, {
          default: v(() => [
            D(g(n.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        y(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.tomorrowQuickDisabled,
          onClick: t[4] || (t[4] = (u) => n.pickQuick("tomorrow"))
        }, {
          default: v(() => [
            D(g(n.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (l(), w(o, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (u) => s.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: v(({ open: u, toggle: c, close: m }) => [
        p(e.$slots, "trigger", {
          open: u,
          toggle: c,
          close: m
        }, () => [
          y(a, {
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
            default: v(() => [
              h("span", {
                class: k([
                  "min-w-0 flex-1 truncate",
                  n.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, g(n.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: v(({ close: u }) => [
        h("div", Vn, [
          h("div", Nn, [
            y(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[5] || (t[5] = P((c) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", Hn, g(n.monthTitle), 1),
            y(a, {
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
          h("div", jn, [
            (l(!0), d(B, null, V(n.calendarCells, (c) => (l(), w(a, {
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
              onClick: (m) => n.pick(c, u)
            }, {
              default: v(() => [
                D(g(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          i.showQuick ? (l(), d("div", Wn, [
            y(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", u)
            }, {
              default: v(() => [
                D(g(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            y(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (c) => n.pickQuick("today", u)
            }, {
              default: v(() => [
                D(g(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            y(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.tomorrowQuickDisabled,
              onClick: (c) => n.pickQuick("tomorrow", u)
            }, {
              default: v(() => [
                D(g(n.resolvedTomorrowLabel), 1)
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
const ql = /* @__PURE__ */ x(Pn, [["render", qn]]);
let ye = 0;
const Et = [];
function Gl(e) {
  return ye += 1, `${e}-${ye}`;
}
function Gn(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return Et.push(() => {
    t = 0;
  }), i;
}
function Yl() {
  ye = 0;
  for (const e of Et)
    e();
}
const Yn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), Kn = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function Un(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function et(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (Un(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function Qn(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function tt(e, { skipFooter: t = !1 } = {}) {
  const i = et(e, Yn, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = et(e, Kn, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function Zn(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && tt(t))
    return !0;
  for (const i of Qn(e))
    if (tt(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Xn = Gn("ui-dialog"), Jn = ["solid", "dashed", "dotted", "double"], it = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, er = ["solid", "regular", "brands", "light", "duotone", "thin"], tr = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], nt = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, ir = {
  name: "Dialog",
  components: { Divider: we },
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
      default: void 0,
      validator: (e) => e == null || tr.includes(e)
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
      validator: (e) => Jn.includes(e)
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
      default: void 0,
      validator: (e) => e == null || er.includes(e)
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
    /** Başlıkta geri düğmesi; `@back` ile birlikte kullanılır. */
    withBack: {
      type: Boolean,
      default: !1
    },
    /** Geri düğmesi metni; boşsa `ui.dialog.back` (i18n). */
    backLabel: {
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
  emits: ["update:open", "after-leave", "back"],
  data() {
    const e = Xn();
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
      return !!(this.icon || this.hasTitle || this.hasDescription || this.$slots.actions || this.$slots.append || this.showClose || this.withBack);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    borderStyleClass() {
      return it[this.borderType] || it.solid;
    },
    resolvedIconType() {
      return ie(this.iconType);
    },
    resolvedMaxWidth() {
      return ei(this.maxWidth);
    },
    maxWidthClass() {
      return nt[this.resolvedMaxWidth] || nt.lg;
    },
    panelClasses() {
      const e = this.border ? z("border", this.borderStyleClass) : z("border-0", "border-transparent");
      return z(
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
      return Se(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : pe(this, "ui.dialog.close", "Close");
    },
    resolvedBackLabel() {
      return this.backLabel != null && this.backLabel !== "" ? this.backLabel : pe(this, "ui.dialog.back", "Back");
    },
    rootLayerClasses() {
      return z(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm"
      );
    }
  },
  methods: {
    prefersReducedMotion() {
      return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    mobileSheetEasing() {
      return "cubic-bezier(0.32, 0.72, 0, 1)";
    },
    mobileSheetDurationMs() {
      return 360;
    },
    layerMotionParts(e) {
      return {
        panel: e.querySelector(".ui-dialog-panel"),
        motion: e.querySelector(".ui-dialog-motion"),
        backdrop: e.querySelector(".ui-dialog-backdrop")
      };
    },
    resolveTransformTarget(e, t) {
      return e ? t.panel : t.motion || t.panel;
    },
    sheetBackdropOpacityForDrag(e, t) {
      if (!e) return 1;
      const i = Math.max(e.offsetHeight || 0, 240), r = Math.min(1, Math.max(0, t) / i);
      return Math.max(0, 1 - r);
    },
    clearLayerInlineMotion(e, { preserveMobilePanelTransform: t = !1, preserveBackdrop: i = !1 } = {}) {
      const r = M(), { panel: s, motion: n, backdrop: a } = this.layerMotionParts(e);
      n && (n.style.removeProperty("transform"), n.style.removeProperty("transition")), s && ((!t || !r) && s.style.removeProperty("transform"), s.style.removeProperty("transition"), s.style.removeProperty("opacity")), a && !i && (a.style.removeProperty("opacity"), a.style.removeProperty("transition"));
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
      const t = this.layerMotionParts(e), { panel: i, motion: r, backdrop: s } = t, n = M(), a = this.resolveTransformTarget(n, t), o = n ? this.mobileSheetDurationMs() : 420, u = `${o / 1e3}s`, c = n ? this.mobileSheetEasing() : "cubic-bezier(0.22, 1, 0.36, 1)";
      s && (s.style.opacity = "0"), n ? (i && (i.style.opacity = "1", i.style.transform = "translate3d(0, 100%, 0)"), r && r.style.removeProperty("transform")) : (i && (i.style.opacity = "0"), r && (r.style.transform = "scale3d(0.96, 0.96, 1)")), e.offsetHeight, requestAnimationFrame(() => {
        s && (s.style.transition = `opacity ${u} ${c}`, s.style.opacity = "1"), !n && i && (i.style.transition = `opacity ${u} ${c}`, i.style.opacity = "1"), a && (a.style.transition = `transform ${u} ${c}`, a.style.transform = n ? "translate3d(0, 0, 0)" : "scale3d(1, 1, 1)"), this.waitLayerTransition(a || s, o + 40, () => {
          this.onOverlayAfterEnter();
        });
      });
    },
    animateLayerOut(e, t) {
      var C;
      if (!e || this.prefersReducedMotion()) {
        t();
        return;
      }
      const i = M(), r = this.layerMotionParts(e), s = i && !!((C = r.panel) != null && C.style.transform && r.panel.style.transform !== "none");
      this.clearLayerInlineMotion(e, {
        preserveMobilePanelTransform: i,
        preserveBackdrop: s
      });
      const { panel: n, motion: a, backdrop: o } = r, u = this.resolveTransformTarget(i, r), c = i ? 320 : 380, m = `${c / 1e3}s`, _ = i ? this.mobileSheetEasing() : "cubic-bezier(0.4, 0, 0.2, 1)";
      e.offsetHeight, requestAnimationFrame(() => {
        o && (o.style.transition = `opacity ${m} ${_}`, o.style.opacity = "0"), i && n ? (n.style.transition = `transform ${m} ${_}`, n.style.transform = "translate3d(0, 100%, 0)") : (n && (n.style.transition = `opacity ${m} ${_}`, n.style.opacity = "0"), a && (a.style.transition = `transform ${m} ${_}`, a.style.transform = "scale3d(0.96, 0.96, 1)")), this.waitLayerTransition(u || o, c + 40, t);
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
      const e = this.$refs.layerRef, t = this.$refs.panelRef, i = t == null ? void 0 : t.querySelector(".ui-dialog-motion"), r = e == null ? void 0 : e.querySelector(".ui-dialog-backdrop");
      i && (i.style.removeProperty("transform"), i.style.removeProperty("transition")), t && (t.style.removeProperty("transform"), t.style.removeProperty("transition"), t.style.removeProperty("opacity"), r && (r.style.removeProperty("opacity"), r.style.removeProperty("transition")));
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const e = this.$refs.panelRef, t = e == null ? void 0 : e.querySelector(".ui-dialog-motion"), r = M() ? e : t || e;
        if (!r) {
          this.runInitialFocus();
          return;
        }
        const s = (n) => {
          n.target === r && (r.removeEventListener("transitionend", s), this.clearFocusFallback(), this.runInitialFocus());
        };
        r.addEventListener("transitionend", s), this.focusFallbackTimer = setTimeout(() => {
          r.removeEventListener("transitionend", s), this.focusFallbackTimer = null, this.runInitialFocus();
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
      if (M()) return;
      const e = this.$refs.panelRef;
      e && Zn(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
    },
    close() {
      this.dismissLayer();
    },
    onBack() {
      this.$emit("back");
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
      if (!M() || e.button !== 0 || this.isSheetDragBlockedTarget(e.target)) return;
      const t = this.$refs.layerRef, i = this.$refs.panelRef;
      if (!t || !i) return;
      e.preventDefault(), this.teardownSheetDrag();
      const r = t.querySelector(".ui-dialog-backdrop"), s = e.clientY, n = i.style.transition, a = (r == null ? void 0 : r.style.transition) || "";
      i.style.transition = "none", r && (r.style.transition = "none");
      const o = (_) => {
        const C = Math.max(0, _.clientY - s);
        i.style.transform = `translate3d(0, ${C}px, 0)`, r && (r.style.opacity = String(this.sheetBackdropOpacityForDrag(i, C)));
      }, u = (_, C) => {
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), C) {
          i.style.removeProperty("transition"), r && r.style.removeProperty("transition"), this.close();
          return;
        }
        const I = "0.28s", S = this.mobileSheetEasing();
        i.style.transition = `transform ${I} ${S}`, i.style.transform = "translate3d(0, 0, 0)", r && (r.style.transition = `opacity ${I} ${S}`, r.style.opacity = "1");
        const A = (T) => {
          T.target !== i && T.target !== r || (i.removeEventListener("transitionend", A), r == null || r.removeEventListener("transitionend", A), i.style.transition = n, i.style.removeProperty("transform"), r && (r.style.transition = a, r.style.removeProperty("opacity")));
        };
        i.addEventListener("transitionend", A), r == null || r.addEventListener("transitionend", A);
      }, c = (_) => {
        const C = Math.max(0, _.clientY - s);
        u(C, C >= 72);
      }, m = () => {
        u(0, !1);
      };
      window.addEventListener("pointermove", o), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", m), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", o), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", m);
      };
    }
  }
}, nr = ["aria-labelledby", "aria-describedby", "aria-label"], rr = { class: "ui-dialog-motion" }, sr = {
  key: 1,
  class: "ui-dialog-header__icon"
}, ar = ["id"], lr = {
  key: 3,
  class: "ui-dialog-header__actions"
}, or = ["id"], ur = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, dr = {
  key: 4,
  class: "ui-card-footer"
};
function cr(e, t, i, r, s, n) {
  const a = b("ui-button"), o = b("ui-icon"), u = b("Divider");
  return s.portalReady ? (l(), w(te, {
    key: 0,
    to: "body"
  }, [
    s.layerMounted ? (l(), d("div", {
      key: 0,
      ref: "layerRef",
      class: k(n.rootLayerClasses),
      tabindex: "-1",
      role: "presentation",
      onKeydown: t[4] || (t[4] = (...c) => n.onLayerKeydown && n.onLayerKeydown(...c))
    }, [
      h("div", {
        class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
        "aria-hidden": "true",
        onClick: t[0] || (t[0] = (...c) => n.onBackdrop && n.onBackdrop(...c))
      }),
      h("div", L({
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
        h("div", rr, [
          h("div", {
            class: "ui-dialog-sheet-grab shrink-0",
            onPointerdown: t[1] || (t[1] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [...t[5] || (t[5] = [
            h("div", {
              class: "ui-dialog-sheet-handle",
              "aria-hidden": "true"
            }, null, -1)
          ])], 32),
          n.hasHeaderBlock ? (l(), d("div", {
            key: 0,
            class: "ui-card-header ui-dialog-sheet-drag shrink-0",
            onPointerdown: t[2] || (t[2] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [
            p(e.$slots, "header", {}, () => [
              n.hasDefaultHeader ? (l(), d("div", {
                key: 0,
                class: k(["ui-dialog-header", {
                  "ui-dialog-header--no-icon": !i.icon,
                  "ui-dialog-header--with-back": i.withBack
                }])
              }, [
                i.withBack ? (l(), w(a, {
                  key: 0,
                  type: "button",
                  variant: "link",
                  color: "secondary",
                  size: "sm",
                  "prefix-icon": "arrow-left",
                  class: "ui-dialog-header__back",
                  onClick: n.onBack
                }, {
                  default: v(() => [
                    D(g(n.resolvedBackLabel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : f("", !0),
                i.icon ? (l(), d("span", sr, [
                  y(o, {
                    name: i.icon,
                    type: n.resolvedIconType,
                    size: "sm"
                  }, null, 8, ["name", "type"])
                ])) : f("", !0),
                n.hasTitle ? (l(), d("h3", {
                  key: 2,
                  id: s.titleId,
                  class: "ui-dialog-header__title ui-heading-3"
                }, [
                  p(e.$slots, "title", {}, () => [
                    D(g(i.title), 1)
                  ])
                ], 8, ar)) : f("", !0),
                i.showClose || e.$slots.append || e.$slots.actions ? (l(), d("div", lr, [
                  p(e.$slots, "append"),
                  p(e.$slots, "actions"),
                  i.showClose ? (l(), w(a, {
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
                n.hasDescription ? (l(), d("p", {
                  key: 4,
                  id: s.descriptionId,
                  class: "ui-dialog-header__description ui-text-default"
                }, [
                  p(e.$slots, "description", {}, () => [
                    D(g(i.description), 1)
                  ])
                ], 8, or)) : f("", !0)
              ], 2)) : f("", !0)
            ])
          ], 32)) : f("", !0),
          e.$slots.toolbar ? (l(), d("div", ur, [
            p(e.$slots, "toolbar")
          ])) : f("", !0),
          n.showHeaderDivider ? (l(), w(u, {
            key: 2,
            spacing: "none",
            class: "!my-0 shrink-0"
          })) : f("", !0),
          e.$slots.default ? (l(), d("div", {
            key: 3,
            class: k(["ui-card-body ui-text-default", {
              "ui-card-body--row": i.row,
              "ui-card-body--flush": i.bodyPadding === "none",
              "ui-card-body--flex": i.bodyLayout === "flex"
            }])
          }, [
            p(e.$slots, "default")
          ], 2)) : f("", !0),
          e.$slots.footer ? (l(), d("div", dr, [
            p(e.$slots, "footer")
          ])) : f("", !0)
        ])
      ], 16, nr)
    ], 34)) : f("", !0)
  ])) : f("", !0);
}
const Kl = /* @__PURE__ */ x(ir, [["render", cr]]), fr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], hr = {
  name: "Dropdown",
  components: { Divider: we },
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
      validator: (e) => fr.includes(e)
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
function mr(e, t, i, r, s, n) {
  const a = b("Divider"), o = b("ui-button"), u = b("ui-popover");
  return l(), w(u, {
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
    trigger: v((c) => [
      p(e.$slots, "trigger", Ct(Tt(c)))
    ]),
    content: v(({ close: c }) => [
      h("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = P(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? p(e.$slots, "menu", {
          key: 0,
          close: c
        }) : (l(!0), d(B, { key: 1 }, V(i.items, (m, _) => (l(), d(B, { key: _ }, [
          m.divider ? (l(), w(a, {
            key: 0,
            spacing: "sm"
          })) : (l(), w(o, {
            key: 1,
            variant: "ghost",
            color: n.itemColor(m),
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.icon || null,
            "suffix-icon": m.suffixIcon || m.suffix_icon || null,
            disabled: m.disabled,
            onClick: P((C) => n.onItem(m, c), ["stop"])
          }, {
            default: v(() => [
              D(g(m.label), 1)
            ]),
            _: 2
          }, 1032, ["color", "prefix-icon", "suffix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Ul = /* @__PURE__ */ x(hr, [["render", mr]]), pr = ["sm", "md", "lg"], yr = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, gr = {
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
    iconType: ne,
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || pr.includes(e)
    }
  },
  computed: {
    ...ke(),
    resolvedSize() {
      return N(this.size, { key: "controlSize", defaultSize: "md" });
    },
    iconSize() {
      return yr[this.resolvedSize] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return z("ui-empty", `ui-empty--${this.resolvedSize}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, br = {
  key: 0,
  class: "ui-empty-icon"
}, vr = {
  key: 1,
  class: "ui-empty-title"
}, kr = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Sr = {
  key: 3,
  class: "ui-empty-actions"
};
function wr(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), d("div", L({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), d("div", br, [
      y(a, {
        name: n.resolvedIcon,
        type: e.resolvedIconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (l(), d("h2", vr, g(i.title), 1)) : f("", !0),
    i.description ? (l(), d("p", kr, g(i.description), 1)) : f("", !0),
    e.$slots.default ? (l(), d("div", Sr, [
      p(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Ql = /* @__PURE__ */ x(gr, [["render", wr]]);
let rt = 0;
const xr = ["vertical", "horizontal"], _r = ["default", "card"], Cr = {
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
      validator: (e) => xr.includes(e)
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
      validator: (e) => _r.includes(e)
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
    rt += 1;
    const e = rt;
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
      return !!(this.label || this.$slots.action);
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
}, Tr = ["data-primary-field"], Ir = {
  key: 0,
  class: "ui-form-row-text"
}, zr = ["for"], Lr = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Ar = { class: "ui-form-row-control" }, Fr = ["id"];
function Dr(e, t, i, r, s, n) {
  return l(), d("div", L({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), d("div", Ir, [
      i.label || e.$slots.action ? (l(), d("div", {
        key: 0,
        class: k(n.labelLineClass)
      }, [
        i.label ? (l(), d("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, g(i.label), 9, zr)) : f("", !0),
        e.$slots.action ? (l(), d("div", Lr, [
          p(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0)
    ])) : f("", !0),
    h("div", Ar, [
      p(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      }),
      i.description ? (l(), d("p", {
        key: 0,
        id: n.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, g(i.description), 9, Fr)) : f("", !0)
    ])
  ], 16, Tr);
}
const Zl = /* @__PURE__ */ x(Cr, [["render", Dr]]), st = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Br = ["xs", "sm", "md", "lg", "xl"], Pr = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, Rr = {
  name: "Icon",
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: ne,
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Br.includes(e)
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
    ...ke("type"),
    faWeightClass() {
      return st[this.resolvedIconType] || st.light;
    },
    iconClass() {
      return z(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Pr[this.size],
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
function Er(e, t, i, r, s, n) {
  return l(), d("i", L({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Xl = /* @__PURE__ */ x(Rr, [["render", Er]]), Mr = ["sm", "md", "lg"], Or = ["default", "plain"], $r = {
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
      validator: (e) => Or.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Mr.includes(e)
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
    return { fallbackId: It() };
  },
  computed: {
    resolvedSize() {
      let e = N(this.size, { key: "controlSize", defaultSize: "md" });
      return e !== "md" ? e : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : e;
    },
    rootClass() {
      return z(
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
      return Se(this.$attrs, [
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
}, Vr = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, Nr = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Hr = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], jr = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Wr = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, qr = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function Gr(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), d("div", {
    class: k([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), d("div", Vr, [
      p(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (l(), d("span", Nr, [
      y(a, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    i.multiline ? (l(), d("textarea", L({
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
      onInput: t[0] || (t[0] = (...o) => n.onInput && n.onInput(...o)),
      onChange: t[1] || (t[1] = (o) => e.$emit("change", o)),
      onFocus: t[2] || (t[2] = (o) => e.$emit("focus", o)),
      onBlur: t[3] || (t[3] = (o) => e.$emit("blur", o))
    }), null, 16, Hr)) : (l(), d("input", L({
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
      onInput: t[4] || (t[4] = (...o) => n.onInput && n.onInput(...o)),
      onChange: t[5] || (t[5] = (o) => e.$emit("change", o)),
      onFocus: t[6] || (t[6] = (o) => e.$emit("focus", o)),
      onBlur: t[7] || (t[7] = (o) => e.$emit("blur", o))
    }), null, 16, jr)),
    i.suffixIcon ? (l(), d("span", Wr, [
      y(a, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (l(), d("div", qr, [
      p(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const Jl = /* @__PURE__ */ x($r, [["render", Gr]]);
let at = 0;
const Yr = ["sm", "md", "lg"], lt = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Kr = {
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
      default: () => lt
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Yr.includes(e)
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
    return at += 1, { fallbackId: `ui-phone-number-${at}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : lt;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return N(this.size, { key: "controlSize", defaultSize: "md" });
    },
    rootClass() {
      return z(
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
}, Ur = { class: "ui-phone-prepend" }, Qr = {
  key: 0,
  class: "ui-phone-country-static"
};
function Zr(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("ui-select"), u = b("ui-input");
  return l(), d("div", {
    class: k(n.rootClass)
  }, [
    y(u, L({
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
      prepend: v(() => [
        h("div", Ur, [
          y(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), d("span", Qr, g(n.innerCountry), 1)) : (l(), w(o, {
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
const eo = /* @__PURE__ */ x(Kr, [["render", Zr]]), Xr = ["numeric", "alphanumeric"], Jr = {
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
      validator: (e) => Xr.includes(e)
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
      const r = t.target.value.split("").map((o) => this.normalizeChar(o)).filter(Boolean);
      if (r.length === 0) {
        const o = [...this.cells];
        o[e] = "", this.emitValue(o);
        return;
      }
      const s = [...this.cells];
      let n = e;
      for (const o of r) {
        if (n >= this.length) break;
        s[n] = o, n += 1;
      }
      this.emitValue(s);
      const a = Math.min(n, this.length - 1);
      this.$nextTick(() => {
        var o, u;
        (o = this.cellEl(a)) == null || o.focus(), (u = this.cellEl(a)) == null || u.select();
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
}, es = ["aria-label", "data-mask"], ts = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function is(e, t, i, r, s, n) {
  return l(), d("div", {
    role: "group",
    "aria-label": n.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    class: k([
      "ui-pin",
      n.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), d(B, null, V(i.length, (a, o) => (l(), d("input", {
      key: o,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: n.cells[o] ?? "",
      type: n.cellInputType,
      inputmode: i.type === "numeric" ? "numeric" : "text",
      pattern: i.type === "numeric" ? "[0-9]*" : void 0,
      disabled: i.disabled,
      readonly: i.readonly,
      autocomplete: o === 0 ? n.resolvedAutocomplete : "off",
      maxlength: "1",
      "aria-label": n.cellAriaLabel(o),
      onInput: (u) => n.onCellInput(o, u),
      onKeydown: (u) => n.onCellKeydown(o, u),
      onFocus: (u) => n.onCellFocus(o),
      onPaste: t[0] || (t[0] = (...u) => n.onPaste && n.onPaste(...u))
    }, null, 40, ts))), 128))
  ], 10, es);
}
const to = /* @__PURE__ */ x(Jr, [["render", is]]), ns = ["ul", "ol", "div"], rs = ["plain", "bordered", "divided"], ss = ["compact", "normal", "relaxed"], as = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => ns.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => rs.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => ss.includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "ui-list--compact" : this.density === "relaxed" ? "ui-list--relaxed" : "";
      if (this.variant === "bordered")
        return z("ui-list", "ui-list--bordered", e, this.$attrs.class);
      if (this.variant === "divided")
        return z("ui-list", "ui-list--divided", e, this.$attrs.class);
      const t = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return z("ui-list", t, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function ls(e, t, i, r, s, n) {
  return l(), w(be(i.tag), L({
    class: n.listClass,
    role: "list"
  }, n.passthroughAttrs), {
    default: v(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const io = /* @__PURE__ */ x(as, [["render", ls]]), os = ["start", "center"], us = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: ne,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => os.includes(e)
    }
  },
  computed: {
    resolvedPrefixIconType() {
      return ie(this.prefixIconType);
    },
    itemClass() {
      return z(
        "ui-list-item",
        this.align === "center" ? "ui-list-item--center" : ""
      );
    }
  }
}, ds = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, cs = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, fs = { class: "ui-list-item-content min-w-0 flex-1" }, hs = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function ms(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), d("li", {
    class: k(n.itemClass),
    role: "listitem"
  }, [
    i.prefixIcon ? (l(), d("span", ds, [
      y(a, {
        name: i.prefixIcon,
        type: n.resolvedPrefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), d("span", cs, [
      p(e.$slots, "prefix")
    ])) : f("", !0),
    h("div", fs, [
      p(e.$slots, "default")
    ]),
    e.$slots.trailing ? (l(), d("div", hs, [
      p(e.$slots, "trailing")
    ])) : f("", !0)
  ], 2);
}
const no = /* @__PURE__ */ x(us, [["render", ms]]), ps = [
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
], ot = 10, ue = 410, ys = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], gs = {
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
      validator: (e) => ps.includes(e)
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
      layerZIndex: ue,
      rafId: 0,
      mobileCenteredActive: !1,
      mobileCenteredLeaving: !1,
      portalReady: !1
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCentered && M();
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
      e ? (this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && M(), this.$nextTick(() => {
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
      if (typeof document > "u") return ue;
      let e = ue;
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
      const i = window.innerWidth, r = window.innerHeight, s = ot, n = this.resolvedWidth, a = e.getBoundingClientRect(), o = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? a.width : 200), u = t.offsetHeight || 120;
      if (M() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const I = Math.max(s, Math.round((i - o) / 2)), A = {
          top: `${Math.max(s, Math.round((r - u) / 2))}px`,
          left: `${I}px`
        };
        n != null ? (A.width = n, A.minWidth = n) : (A.width = `${Math.min(o, i - s * 2)}px`, A.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(A);
        return;
      }
      this.mobileCenteredActive = !1;
      let c, m;
      switch (this.placement) {
        case "right-start":
          c = a.top, m = a.right + s;
          break;
        case "right-end":
          c = a.bottom - u, m = a.right + s;
          break;
        case "left-start":
          c = a.top, m = a.left - s - o;
          break;
        case "left-end":
          c = a.bottom - u, m = a.left - s - o;
          break;
        case "top-start":
          c = a.top - s - u, m = a.left;
          break;
        case "top-end":
          c = a.top - s - u, m = a.right - o;
          break;
        case "top":
          c = a.top - s - u, m = a.left + (a.width - o) / 2;
          break;
        case "bottom-end":
          c = a.bottom + s, m = a.right - o;
          break;
        case "bottom":
          c = a.bottom + s, m = a.left + (a.width - o) / 2;
          break;
        case "bottom-start":
        default:
          c = a.bottom + s, m = a.left;
          break;
      }
      if (this.placement.startsWith("right") && m + o > i - s && (m = a.left - s - o), this.placement.startsWith("left") && m < s && (m = a.right + s), this.placement.startsWith("top") && c < s && (c = a.bottom + s), m + o > i - s && (m = Math.max(s, i - s - o)), m < s && (m = s), this.placement.startsWith("bottom") && c + u > r - s) {
        const I = a.top - s - u;
        I >= s && (c = I);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (c + u > r - s && (c = Math.max(s, r - s - u)), c < s && (c = s));
      const _ = this.matchTriggerWidth && n == null ? `${Math.ceil(a.width)}px` : void 0, C = {
        top: `${Math.round(c)}px`,
        left: `${Math.round(m)}px`,
        minWidth: _
      };
      n != null && (C.width = n, C.minWidth = n), this.layerStyle = this.withLayerZIndex(C), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const n = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, o = n.getBoundingClientRect(), u = a.getBoundingClientRect(), c = u.top - o.top, m = u.left - o.left, _ = i.getBoundingClientRect(), C = this.layerStyle.top, I = this.layerStyle.left;
      let S = typeof C == "string" && C !== "" ? parseFloat(C) : _.top, A = typeof I == "string" && I !== "" ? parseFloat(I) : _.left;
      Number.isNaN(S) && (S = _.top), Number.isNaN(A) && (A = _.left);
      let T = S - c, $ = A - m;
      const R = ot, K = window.innerHeight, U = window.innerWidth, H = _.height, Q = _.width;
      T + H > K - R && (T = Math.max(R, K - R - H)), T < R && (T = R), $ + Q > U - R && ($ = Math.max(R, U - R - Q)), $ < R && ($ = R), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(T)}px`,
        left: `${Math.round($)}px`
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
      for (const n of ys)
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
}, bs = ["data-popover-align-active", "data-ui-popover-mobile-centered"], vs = { class: "ui-popover-motion" }, ks = {
  key: 0,
  class: "ui-popover-header"
}, Ss = { class: "ui-popover-body min-h-0 min-w-0" }, ws = {
  key: 1,
  class: "ui-popover-footer"
};
function xs(e, t, i, r, s, n) {
  return l(), d("div", {
    ref: "rootRef",
    class: k([n.rootShellClass, e.$attrs.class])
  }, [
    h("div", {
      ref: "triggerRef",
      class: k(n.triggerShellClass)
    }, [
      p(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    s.portalReady ? (l(), w(te, {
      key: 0,
      to: "body"
    }, [
      y(he, {
        name: "ui-overlay-popover-backdrop",
        appear: ""
      }, {
        default: v(() => [
          n.showMobileBackdrop ? (l(), d("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: G(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...a) => n.close && n.close(...a))
          }, null, 4)) : f("", !0)
        ]),
        _: 1
      }),
      y(he, {
        name: "ui-overlay-popover",
        appear: "",
        onBeforeEnter: n.onPopoverBeforeEnter,
        onAfterLeave: n.onPopoverAfterLeave
      }, {
        default: v(() => [
          i.open ? (l(), d("div", {
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
              h("div", vs, [
                e.$slots.header ? (l(), d("div", ks, [
                  p(e.$slots, "header", { close: n.close })
                ])) : f("", !0),
                h("div", Ss, [
                  p(e.$slots, "content", { close: n.close })
                ]),
                e.$slots.footer ? (l(), d("div", ws, [
                  p(e.$slots, "footer", { close: n.close })
                ])) : f("", !0)
              ])
            ], 544)
          ], 12, bs)) : f("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeEnter", "onAfterLeave"])
    ])) : f("", !0)
  ], 2);
}
const ro = /* @__PURE__ */ x(gs, [["render", xs]]), _s = {
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
}, Cs = ["name", "value", "checked"], Ts = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, Is = { class: "ui-radio-body" }, zs = { class: "ui-radio-label" }, Ls = {
  key: 0,
  class: "ui-radio-description"
};
function As(e, t, i, r, s, n) {
  var o;
  const a = b("ui-icon");
  return l(), d("label", {
    class: k([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onClick: t[1] || (t[1] = (...u) => n.select && n.select(...u)),
    onKeydown: [
      t[2] || (t[2] = X(P((...u) => n.select && n.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = X(P((...u) => n.select && n.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (o = n.uiRadioGroup) == null ? void 0 : o.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => n.select && n.select(...u))
    }, null, 40, Cs),
    h("span", Ts, [
      n.isChecked ? (l(), w(a, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-radio-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    h("span", Is, [
      h("span", zs, g(i.label), 1),
      i.description ? (l(), d("span", Ls, g(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const so = /* @__PURE__ */ x(_s, [["render", As]]);
let ut = 0;
const Fs = ["list", "button", "List", "Button"], Ds = ["vertical", "horizontal"], Bs = {
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
      validator: (e) => Fs.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Ds.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return ut += 1, { groupName: `ui-radio-group-${ut}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : this.orientation === "horizontal" ? "horizontal" : "vertical";
    },
    rootClass() {
      return z(
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
}, Ps = ["aria-label"];
function Rs(e, t, i, r, s, n) {
  return l(), d("div", {
    class: k(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    p(e.$slots, "default")
  ], 10, Ps);
}
const ao = /* @__PURE__ */ x(Bs, [["render", Rs]]), Es = {
  name: "Tag",
  components: { Badge: Vi, Tooltip: Bt },
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
}, Ms = ["aria-label"];
function Os(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("Tooltip"), u = b("Badge");
  return l(), w(u, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, zt({
    default: v(() => [
      p(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: v(() => [
        y(o, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: v(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = P((c) => e.$emit("remove"), ["stop"]))
            }, [
              y(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Ms)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const $s = /* @__PURE__ */ x(Es, [["render", Os]]);
let dt = 0;
const Vs = ["field", "inline"], Ns = ["sm", "md", "lg"], Hs = {
  name: "Select",
  components: { Tag: $s },
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
      validator: (e) => Vs.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ns.includes(e)
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
    dt += 1;
    const e = dt;
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
      let e = N(this.size, { key: "controlSize", defaultSize: "md" });
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
      return z(
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
}, js = ["name", "value"], Ws = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], qs = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Gs = {
  key: 1,
  class: "ui-select-values-inner"
}, Ys = ["placeholder", "aria-label", "disabled"], Ks = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Us = { class: "ui-select-field-suffix" }, Qs = ["aria-label"], Zs = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Xs = ["data-size", "placeholder", "aria-label", "onKeydown"], Js = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], ea = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, ta = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, ia = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function na(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("Tag"), u = b("ui-skeleton"), c = b("ui-badge"), m = b("ui-button"), _ = b("ui-empty"), C = b("ui-popover");
  return l(), d("div", {
    class: k(n.rootClass)
  }, [
    i.name ? (l(), d("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, js)) : f("", !0),
    y(C, {
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (I) => s.menuOpen = I),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, zt({
      trigger: v(({ open: I, toggle: S, close: A }) => [
        p(e.$slots, "trigger", {
          open: I,
          toggle: S,
          close: A
        }, () => [
          h("button", L({
            type: "button",
            id: n.resolvedId,
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline"
            }],
            disabled: n.isDisabled,
            "aria-expanded": I ? "true" : "false",
            "aria-haspopup": n.listboxRole,
            "aria-controls": s.listboxId,
            "aria-describedby": i.ariaDescribedby
          }, n.triggerPassthrough, {
            onClick: (T) => n.onTriggerClick(S)
          }), [
            i.prefixIcon ? (l(), d("span", qs, [
              y(a, {
                name: i.prefixIcon,
                size: "xs"
              }, null, 8, ["name"])
            ])) : f("", !0),
            i.multiple ? (l(), d("div", Gs, [
              (l(!0), d(B, null, V(n.selectedValues, (T) => (l(), w(o, {
                key: String(T),
                variant: "secondary",
                size: "sm",
                removable: "",
                onRemove: ($) => n.removeValue(T)
              }, {
                default: v(() => [
                  D(g(n.labelForValue(T)), 1)
                ]),
                _: 2
              }, 1032, ["onRemove"]))), 128)),
              n.isFilterable ? me((l(), d("input", {
                key: 0,
                ref: "searchInput",
                "onUpdate:modelValue": t[0] || (t[0] = (T) => s.filterQuery = T),
                type: "text",
                class: k(["ui-select-values-input", {
                  "ui-select-values-input--solo": !n.selectedValues.length,
                  "ui-select-values-input--open": s.menuOpen
                }]),
                placeholder: n.multipleInputPlaceholder,
                "aria-label": n.resolvedFilterPlaceholder,
                autocomplete: "off",
                disabled: n.isDisabled,
                onClick: t[1] || (t[1] = P((...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T), ["stop"])),
                onFocus: t[2] || (t[2] = (...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T)),
                onKeydown: t[3] || (t[3] = (...T) => n.onSearchKeydown && n.onSearchKeydown(...T))
              }, null, 42, Ys)), [
                [Pe, s.filterQuery]
              ]) : f("", !0)
            ])) : i.loading ? (l(), d("span", Ks, g(n.resolvedLoadingLabel), 1)) : (l(), d("span", {
              key: 3,
              class: k(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
              style: G(n.selectedDisplayStyle),
              "data-popover-align": ""
            }, g(n.displayLabel), 7)),
            h("span", Us, [
              n.showClearButton ? (l(), d("button", {
                key: 0,
                type: "button",
                class: "ui-select-clear",
                "aria-label": n.clearAriaLabel,
                onClick: t[4] || (t[4] = P((...T) => n.clearSelection && n.clearSelection(...T), ["stop"]))
              }, [
                y(a, {
                  name: "xmark",
                  size: "xs"
                })
              ], 8, Qs)) : f("", !0),
              h("span", Zs, [
                y(a, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 16, Ws)
        ])
      ]),
      content: v(({ close: I }) => [
        h("div", {
          ref: "listbox",
          id: s.listboxId,
          class: k(["ui-select-listbox", n.listboxClass]),
          "data-size": n.resolvedSize,
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), d("div", ea, [
            (l(), d(B, null, V(3, (S) => y(u, {
              key: S,
              variant: "line",
              class: k(S === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), d(B, { key: 1 }, V(n.filteredOptions, (S) => (l(), w(m, {
            key: String(S.value),
            variant: n.isSelected(S) ? "solid" : "ghost",
            color: n.isSelected(S) ? "primary" : "secondary",
            size: n.optionButtonSize,
            fulled: "",
            "text-align": "left",
            role: "option",
            class: k(["ui-select-option", { "ui-select-option--selected": n.isSelected(S) }]),
            "suffix-icon": n.isSelected(S) ? "check" : void 0,
            "aria-selected": n.isSelected(S) ? "true" : "false",
            onClick: (A) => n.pick(S, I)
          }, {
            default: v(() => [
              p(e.$slots, "option", {
                option: S,
                selected: n.isSelected(S)
              }, () => [
                h("span", ta, [
                  h("span", {
                    "data-popover-align": "",
                    class: "min-w-0 truncate",
                    style: G(n.optionDisplayStyle(S))
                  }, g(S.label), 5),
                  S.badge ? (l(), w(c, {
                    key: 0,
                    variant: S.badgeVariant || "secondary",
                    size: "xs"
                  }, {
                    default: v(() => [
                      D(g(S.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : S.description ? (l(), d("span", ia, g(S.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && s.filterQuery ? (l(), w(_, {
            key: 2,
            icon: "magnifying-glass",
            size: n.emptyStateSize,
            title: n.noResultsText
          }, null, 8, ["size", "title"])) : (l(), w(_, {
            key: 3,
            icon: "table-cells",
            size: n.emptyStateSize,
            title: n.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, Js)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: v(({ close: I }) => [
          me(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (S) => s.filterQuery = S),
            type: "text",
            class: k(["ui-select-filter-input w-full", n.filterInputClass]),
            "data-size": n.resolvedSize,
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = P(() => {
            }, ["prevent"])),
            onKeydown: [
              X(P((S) => n.pickFirstFiltered(I), ["prevent"]), ["enter"]),
              X(P((S) => I(), ["prevent"]), ["esc"])
            ]
          }, null, 42, Xs), [
            [Pe, s.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: v((I) => [
          p(e.$slots, "footer", Ct(Tt(I)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const lo = /* @__PURE__ */ x(Hs, [["render", na]]), ra = {
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
}, sa = ["aria-checked", "disabled"], aa = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, la = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, oa = {
  key: 2,
  class: "ui-segment-label"
}, ua = {
  key: 3,
  class: "sr-only"
}, da = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function ca(e, t, i, r, s, n) {
  const a = b("ui-icon");
  return l(), d("button", {
    type: "button",
    role: "radio",
    class: k(n.segmentClass),
    "aria-checked": n.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...o) => n.select && n.select(...o))
  }, [
    n.hasPrepend ? (l(), d("span", aa, [
      p(e.$slots, "prepend")
    ])) : f("", !0),
    i.icon ? (l(), d("span", la, [
      y(a, {
        name: i.icon,
        size: n.iconSize
      }, null, 8, ["name", "size"])
    ])) : f("", !0),
    n.showLabel ? (l(), d("span", oa, g(i.label), 1)) : i.label ? (l(), d("span", ua, g(i.label), 1)) : f("", !0),
    n.hasAppend ? (l(), d("span", da, [
      p(e.$slots, "append")
    ])) : f("", !0)
  ], 10, sa);
}
const oo = /* @__PURE__ */ x(ra, [["render", ca]]), fa = ["sm", "md", "lg"], ha = ["horizontal", "vertical"];
function ma(e) {
  return typeof e == "boolean" || e === "mobile";
}
const pa = {
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
      default: void 0,
      validator: (e) => e == null || fa.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ha.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: ma
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
      return N(this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? M() : !!this.iconOnly;
    },
    rootClass() {
      return z(
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
}, ya = ["aria-label"];
function ga(e, t, i, r, s, n) {
  return l(), d("div", L({
    class: n.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, ya);
}
const uo = /* @__PURE__ */ x(pa, [["render", ga]]), ba = ["line", "circle", "block", "pill"], va = ["sm", "md", "lg"], ka = 480, ct = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, ft = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, Sa = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => ba.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => va.includes(e)
    }
  },
  setup(e) {
    const t = qt(), i = W(() => !!t.default), r = O(null), s = O(null), n = O(null), a = O(null), o = O(!1), u = O(!1), c = O(!1), m = O(!1), _ = O(!1);
    let C = null;
    const I = W(
      () => e.loading || c.value
    ), S = W(
      () => e.loading || c.value
    );
    Gt(() => {
      _.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), Yt(() => {
      A(), T();
    });
    function A() {
      C != null && (clearTimeout(C), C = null);
    }
    Kt(
      () => e.loading,
      async (H, Q) => {
        var Ie, ze, Le, Ae, Fe, De;
        if (A(), H) {
          const Be = Math.max(
            ((Ie = r.value) == null ? void 0 : Ie.offsetHeight) ?? 0,
            ((ze = n.value) == null ? void 0 : ze.scrollHeight) ?? 0,
            ((Le = s.value) == null ? void 0 : Le.offsetHeight) ?? 0
          );
          c.value = !1, m.value = !1, o.value = !1, u.value = Be > 48, a.value = u.value ? Be : null;
          return;
        }
        if (Q !== !0) return;
        if (_.value) {
          c.value = !1, u.value = !1, a.value = null, o.value = !1;
          return;
        }
        const re = a.value ?? ((Ae = r.value) == null ? void 0 : Ae.offsetHeight) ?? ((Fe = s.value) == null ? void 0 : Fe.offsetHeight) ?? 0;
        c.value = !0, m.value = !1, u.value = !1, o.value = !0, a.value = re, await Re();
        const Ce = ((De = n.value) == null ? void 0 : De.scrollHeight) ?? 0, Te = Ce > 0 ? Ce : re;
        if (re <= 0 && Te <= 0) {
          T();
          return;
        }
        await Re(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = Te, m.value = !0;
          });
        }), C = setTimeout(T, ka + 40);
      }
    );
    function T() {
      A(), c.value = !1, m.value = !1, u.value = !1, a.value = null, o.value = !1;
    }
    function $(H) {
      H.target === r.value && H.propertyName === "height" && (e.loading || o.value && T());
    }
    const R = W(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), K = W(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !u.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && u.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && u.value && !c.value
    })), U = W(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !u.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && u.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && m.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: s,
      contentWrapRef: n,
      hostStyle: R,
      heightAnimActive: o,
      heightLocked: u,
      isRevealing: c,
      showPlaceholder: I,
      isBusy: S,
      placeholderClass: K,
      contentWrapClass: U,
      onHostTransitionEnd: $
    };
  },
  computed: {
    variantClass() {
      return ct[this.variant] || ct.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return ft[this.size] || ft.md;
    },
    skeletonClass() {
      return z(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return z(
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
}, wa = ["aria-busy"], xa = ["aria-hidden"];
function _a(e, t, i, r, s, n) {
  return r.hasDefaultSlot ? (l(), d("div", L({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...a) => r.onHostTransitionEnd && r.onHostTransitionEnd(...a))
  }), [
    me(h("div", {
      ref: "placeholderRef",
      class: k(["ui-skeleton-placeholder", r.placeholderClass]),
      "aria-hidden": "true"
    }, [
      p(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = h("div", { class: "ui-skeleton-default-rows" }, [
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [Wt, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: k(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        p(e.$slots, "default")
      ], 8, xa)
    ], 2)
  ], 16, wa)) : (l(), d("div", L({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const co = /* @__PURE__ */ x(Sa, [["render", _a]]);
let ht = 0;
const Ca = {
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
    return ht += 1, { fallbackId: `ui-switch-${ht}` };
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
}, Ta = ["id", "aria-checked", "disabled", "aria-describedby"];
function Ia(e, t, i, r, s, n) {
  return l(), d("button", L({
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
      class: k(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      h("span", {
        class: k(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Ta);
}
const fo = /* @__PURE__ */ x(Ca, [["render", Ia]]), za = {
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
      return z(
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
      var m, _;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], s = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let a = 0;
      if (r.includes(n)) a = 1;
      else if (s.includes(n)) a = -1;
      else return;
      e.preventDefault();
      const o = document.activeElement;
      let u = i.indexOf(o);
      u === -1 && (u = i.findIndex((C) => C.getAttribute("aria-selected") === "true")), u === -1 && (u = 0);
      let c = u + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (_ = (m = i[c]) == null ? void 0 : m.focus) == null || _.call(m);
    }
  }
}, La = ["aria-label", "aria-orientation"];
function Aa(e, t, i, r, s, n) {
  return l(), d("div", L({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...a) => n.onKeydown && n.onKeydown(...a))
  }), [
    p(e.$slots, "default")
  ], 16, La);
}
const ho = /* @__PURE__ */ x(za, [["render", Aa]]), de = ["sm", "md", "lg"];
function Fa(e) {
  const t = de.indexOf(e);
  return t < 0 ? "md" : de[Math.min(t + 1, de.length - 1)];
}
function Da(e, { inlineControls: t = !1, nativeChrome: i = !1 } = {}) {
  const r = N(e, { key: "controlSize", defaultSize: "md" });
  return t ? r : i ? "lg" : Fa(r);
}
const Ba = ["line", "segmented"], Pa = {
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
      validator: (e) => Ba.includes(e)
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
      default: void 0,
      validator: (e) => e == null || e === "sm" || e === "md" || e === "lg"
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
     * Button ile aynı satırda / hizada — tab yüksekliği button ile aynı kalır (`--ui-control-h-*`).
     * Varsayılan kapalı: segmented tab bir kademe büyük (`--ui-tab-h-*`).
     */
    inlineControls: {
      type: Boolean,
      default: !1
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
    return { baseId: It() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return this.variant === "segmented" ? Da(this.size, {
        inlineControls: this.inlineControls,
        nativeChrome: this.nativeChrome
      }) : N(this.size, { key: "controlSize", defaultSize: "md" });
    },
    rootClass() {
      return z(
        "ui-tabs flex min-w-0 flex-col",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.variant === "segmented" && this.resolvedSize === "lg" ? "ui-tabs--segmented-lg" : "",
        this.variant === "segmented" && this.resolvedSize === "sm" ? "ui-tabs--segmented-sm" : "",
        this.inlineControls ? "ui-tabs--inline-controls" : "",
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
function Ra(e, t, i, r, s, n) {
  return l(), d("div", L({ class: n.rootClass }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16);
}
const mo = /* @__PURE__ */ x(Pa, [["render", Ra]]), Ea = {
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
    iconType: ne,
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
    ...ke(),
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
      return this.resolvedIconType;
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
      return z(
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
}, Ma = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], Oa = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, $a = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" }, Va = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function Na(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("ui-badge");
  return l(), d("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: k(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : n.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...u) => n.select && n.select(...u))
  }, [
    i.icon ? (l(), d("span", Oa, [
      y(a, {
        name: i.icon,
        type: n.tabIconType,
        size: n.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    h("span", $a, [
      p(e.$slots, "default", {}, () => [
        D(g(i.label), 1)
      ])
    ]),
    n.showBadge ? (l(), d("span", Va, [
      y(o, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: v(() => [
          D(g(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, Ma);
}
const po = /* @__PURE__ */ x(Ea, [["render", Na]]), j = _t({
  /** @type {ToastItem[]} */
  items: []
});
let mt = 0;
function yo(e = {}) {
  mt += 1;
  const t = mt, i = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return j.items.push(i), i.duration > 0 && (i._timer = setTimeout(() => Mt(t), i.duration)), t;
}
function Mt(e) {
  const t = j.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = j.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), j.items.splice(t, 1);
}
function go() {
  for (const e of j.items)
    e._timer && clearTimeout(e._timer);
  j.items.splice(0);
}
const pt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, yt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Ha = {
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
    queueDismissToast: Mt,
    iconFor(e) {
      return pt[e] || pt.info;
    },
    iconToneClass(e) {
      return yt[e] || yt.info;
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
}, ja = { class: "ui-toast-host" }, Wa = { class: "ui-alert-body" }, qa = {
  key: 0,
  class: "ui-alert-title"
}, Ga = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Ya(e, t, i, r, s, n) {
  const a = b("ui-icon"), o = b("ui-button");
  return l(), w(te, { to: "body" }, [
    h("div", ja, [
      y(Ut, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: v(() => [
          (l(!0), d(B, null, V(n.items, (u) => (l(), d("div", {
            key: u.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            h("div", L({
              class: [n.toastClasses(u), "pointer-events-auto"]
            }, { ref_for: !0 }, n.toastA11y(u)), [
              h("span", {
                class: k(["ui-alert-icon", n.iconToneClass(u.variant)]),
                "aria-hidden": "true"
              }, [
                y(a, {
                  name: n.iconFor(u.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              h("div", Wa, [
                u.title ? (l(), d("p", qa, g(u.title), 1)) : f("", !0),
                u.description ? (l(), d("p", Ga, g(u.description), 1)) : f("", !0)
              ]),
              y(o, {
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
const bo = /* @__PURE__ */ x(Ha, [["render", Ya]]), vo = {
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
      close: "Close",
      back: "Back"
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
}, ko = {
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
      close: "Kapat",
      back: "Geri"
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
}, Ka = "fewui-local-fonts", Ua = "fewui-local-fonts-catalog-preview";
let gt = !1;
const Qa = Object.freeze([
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
function Za(e) {
  const t = String(e || "").trim();
  return t ? `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, sans-serif` : "";
}
function So() {
  return Qa.map((e) => ({
    ...e,
    fontFamily: Za(e.value)
  }));
}
function wo(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function xo(e) {
  return null;
}
function _o(e = {}) {
  return "";
}
function Xa(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || Ka)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function Co(e = {}) {
  var t;
  return typeof document > "u" ? null : gt && !e.force ? ((t = document.getElementById(e.id || Ua)) == null ? void 0 : t.getAttribute("href")) || "local" : (gt = !0, "local");
}
const Ja = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], el = "ui-sans-serif, system-ui, sans-serif", bt = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, vt = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function tl(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function kt(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${el}`;
}
function il(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function nl(e) {
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
function rl(e, t, i) {
  const [r, s, n] = [e, t, i].map((a) => {
    const o = a / 255;
    return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * s + 0.0722 * n;
}
function sl(e, t = "#ffffff", i = "#0a0a0b") {
  const r = il(e);
  if (r)
    return rl(...r) > 0.4 ? i : t;
  const s = nl(e);
  return s != null && s > 0.72 ? i : t;
}
function al(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function ll(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function ol(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return bt[t] != null ? bt[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ul(e) {
  return e == null || e === "" ? null : vt[e] ? vt[e] : String(e);
}
function ce(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = ll(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const s = ol(i.backdropBlur ?? i.backdropFilter);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const n = ul(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function St(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const s = e[i];
  if (s != null && s !== "")
    return String(s);
}
function To(e = {}, t = {}) {
  const i = tl(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = xe(e);
  for (const [s, n] of Object.entries(r))
    i.style.setProperty(s, n);
  return Xa(e), { ...r };
}
function xe(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = kt(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = kt(r)), e.baseColor && typeof e.baseColor == "object")
    for (const o of Ja) {
      const u = e.baseColor[o];
      u != null && u !== "" && (t[`--base-${o}`] = String(u));
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
  for (const [o, u] of s) {
    const c = e[o];
    c != null && c !== "" && (t[u] = String(c));
  }
  const n = St(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = sl(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const a = St(e, "secondaryColor", "secondary");
  if (a && (t["--secondary"] = a), ce(t, "surface", e.surfaceStyle), ce(t, "control", e.controlStyle), ce(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [o, u] of Object.entries(e.colors))
      u != null && u !== "" && (t[al(o)] = String(u));
  return t;
}
function Io(e = {}) {
  const t = xe(e), i = [], r = Object.entries(t).map(([a, o]) => `${a}: ${o} !important`).join("; ");
  r && i.push(`:root, html, html.dark { ${r} }`);
  const s = t["--font-sans"], n = t["--font-heading"] || s;
  return s && i.push(`html, body { font-family: ${s} !important; }`), n && i.push(`h1, h2, h3, h4, h5, h6 { font-family: ${n} !important; }`), i.join(`
`);
}
function zo(e = {}) {
  const t = xe(e), i = Object.entries(t).map(([s, n]) => `${s}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function ge(e, t) {
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
const dl = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  cardPadding: "default",
  radius: "26px"
}, cl = {
  mode: "light",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff",
  surfaceStyle: {
    mixFrom: "surface",
    opacity: 100,
    backdropBlur: "none"
  },
  controlStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "none"
  },
  inputStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "none"
  }
}, fl = {
  id: "web",
  label: "Web",
  description: "Restta panel — opak yüzeyler, Inter, geniş radius.",
  defaults: dl,
  preset: cl,
  css: {
    color: "fewui/themes/web/color.css",
    styles: "fewui/themes/web/styles.css"
  }
}, hl = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  cardPadding: "default",
  radius: "26px"
}, ml = {
  mode: "light",
  fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  headingFontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  bodyFontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff",
  surfaceStyle: {
    mixFrom: "surface",
    opacity: 48,
    backdropBlur: "24px"
  },
  controlStyle: {
    mixFrom: "control",
    opacity: 52,
    backdropBlur: "24px"
  },
  inputStyle: {
    mixFrom: "control",
    opacity: 52,
    backdropBlur: "24px"
  }
}, pl = {
  id: "liquidglass",
  label: "Liquid Glass",
  description: "iOS native — yarı saydam yüzeyler, blur, cam chrome.",
  defaults: hl,
  preset: ml,
  css: {
    color: "fewui/themes/liquidglass/color.css",
    styles: "fewui/themes/liquidglass/styles.css",
    platform: {
      ios: "fewui/themes/liquidglass/platform/ios.css"
    }
  }
}, yl = {
  iconType: "light",
  buttonRounded: "full",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  cardPadding: "comfortable",
  radius: "16px"
}, gl = {
  mode: "light",
  fontFamily: "Roboto",
  headingFontFamily: "Roboto",
  bodyFontFamily: "Roboto",
  primaryColor: "#6750A4",
  primaryForeground: "#ffffff",
  secondaryColor: "#E8DEF8",
  secondaryForeground: "#1D192B",
  surfaceStyle: {
    mixFrom: "surface",
    opacity: 100,
    backdropBlur: "none"
  },
  controlStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "none"
  },
  inputStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "none"
  }
}, bl = {
  id: "android",
  label: "Android",
  description: "Material 3 — Roboto, tonal surfaces, pill controls.",
  defaults: yl,
  preset: gl,
  css: {
    color: "fewui/themes/android/color.css",
    styles: "fewui/themes/android/styles.css",
    platform: {
      android: "fewui/themes/android/platform/android.css"
    }
  }
}, vl = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md",
  cardPadding: "spacious",
  radius: "20px"
}, kl = {
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
}, Sl = {
  id: "landing",
  label: "Landing",
  description: "Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.",
  defaults: vl,
  preset: kl,
  css: {
    color: "fewui/themes/landing/color.css",
    styles: "fewui/themes/landing/styles.css"
  }
}, wl = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md",
  cardPadding: "default",
  radius: "18px"
}, xl = {
  mode: "dark",
  fontFamily: "Inter",
  headingFontFamily: "Inter",
  bodyFontFamily: "Inter",
  primaryColor: "#6366f1",
  primaryForeground: "#ffffff",
  background: "#09090b",
  foreground: "#fafafa",
  surface: "#18181b",
  surfaceForeground: "#fafafa",
  control: "#27272a",
  controlForeground: "#fafafa",
  surfaceStyle: {
    mixFrom: "foreground",
    opacity: 4,
    backdropBlur: "sm"
  },
  controlStyle: {
    mixFrom: "foreground",
    opacity: 6,
    backdropBlur: "sm"
  },
  inputStyle: {
    mixFrom: "foreground",
    opacity: 6,
    backdropBlur: "sm"
  },
  colors: {
    "brand-accent": "#a5b4fc"
  }
}, _l = {
  id: "fewui",
  label: "Fewui",
  description: "fewui.com — indigo marka, koyu marketing kabuğu.",
  defaults: wl,
  preset: xl,
  css: {
    color: "fewui/themes/fewui/color.css",
    styles: "fewui/themes/fewui/styles.css"
  }
}, ee = {
  web: fl,
  liquidglass: pl,
  android: bl,
  landing: Sl,
  fewui: _l
}, Lo = ["web", "liquidglass", "android", "landing", "fewui"], Cl = {
  panel: "web",
  flat: "web",
  landing: "landing"
}, Tl = {
  panel: {
    mode: "dark"
  },
  flat: {
    mode: "dark",
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
  }
};
function _e(e = "web") {
  const t = String(e || "web").trim();
  if (ee[t])
    return (
      /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */
      t
    );
  const i = Cl[t];
  return i && ee[i] ? (
    /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */
    i
  ) : "web";
}
function Ao(e = "web") {
  return ee[_e(e)];
}
function Z(e = "web", t = {}) {
  const i = String(e || "web").trim(), r = _e(i), s = ee[r], n = Tl[i] || {}, a = structuredClone(s.preset), o = ge(ge(a, n), t), u = ve(s.defaults);
  return {
    package: s,
    id: r,
    config: o,
    defaults: u
  };
}
function Fo(e = "web") {
  return `fewui/themes/${_e(e)}.css`;
}
const Do = "few", Ot = "#1B5CFF", Bo = "#ffffff", wt = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: Ot,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function Po() {
  return {
    light: wt[600],
    dark: wt[600]
  };
}
function Il(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function fe(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function xt(e, t, i) {
  return `#${fe(e)}${fe(t)}${fe(i)}`;
}
function zl(e) {
  const t = Il(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, s] = t, n = xt(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    s + (255 - s) * 0.12
  ), a = xt(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: n, brandAccent: a };
}
function Ro(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = zl(String(i)), s = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (s.accent = r.accent), (t.force || !s.colors["brand-accent"]) && (s.colors["brand-accent"] = r.brandAccent), s;
}
function Eo(e, t = Ot) {
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
const $t = "fewui-theme-custom-css";
function Ll(e, t = $t) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function Mo(e = $t) {
  Ll("", e);
}
const Oo = {
  get panel() {
    return Z("panel").config;
  },
  get flat() {
    return Z("flat").config;
  },
  get landing() {
    return Z("landing").config;
  }
}, $o = ["panel", "flat", "landing"];
function Al(e = "panel") {
  return structuredClone(Z(e).config);
}
function Vo(e, t = {}) {
  return ge(Al(e), t);
}
export {
  xo as $,
  Ml as A,
  J as B,
  Nl as C,
  $t as D,
  Ql as E,
  wt as F,
  Qa as G,
  ho as H,
  Xl as I,
  po as J,
  mo as K,
  Cl as L,
  $s as M,
  bo as N,
  Bt as O,
  eo as P,
  ii as Q,
  so as R,
  oo as S,
  Lo as T,
  Ft as U,
  Co as V,
  Xa as W,
  Ll as X,
  To as Y,
  _o as Z,
  x as _,
  Ol as a,
  Io as a0,
  zo as a1,
  Mo as a2,
  go as a3,
  z as a4,
  Gl as a5,
  Gn as a6,
  zl as a7,
  Mt as a8,
  vo as a9,
  _e as aA,
  Z as aB,
  Vo as aC,
  El as aD,
  xe as aE,
  pe as aF,
  ke as aG,
  ko as aH,
  Rl as aI,
  Pl as aJ,
  Dt as aK,
  Ro as aL,
  Zn as aa,
  Za as ab,
  Wl as ac,
  Po as ad,
  Fo as ae,
  Ao as af,
  Al as ag,
  So as ah,
  ne as ai,
  M as aj,
  ve as ak,
  ge as al,
  Se as am,
  Bl as an,
  yo as ao,
  Hl as ap,
  Yl as aq,
  Ee as ar,
  Pt as as,
  Eo as at,
  N as au,
  ti as av,
  Y as aw,
  ei as ax,
  wo as ay,
  ie as az,
  $l as b,
  Vi as c,
  Vl as d,
  jl as e,
  ql as f,
  Kl as g,
  we as h,
  Ul as i,
  Do as j,
  Ot as k,
  Bo as l,
  Zl as m,
  Jl as n,
  io as o,
  no as p,
  to as q,
  ro as r,
  ao as s,
  uo as t,
  lo as u,
  co as v,
  fo as w,
  ee as x,
  Oo as y,
  $o as z
};
//# sourceMappingURL=index-BVvp-vC_.js.map
