import { ref as N, inject as Qt, getCurrentInstance as Xt, openBlock as l, createElementBlock as u, mergeProps as z, renderSlot as p, resolveComponent as x, normalizeClass as S, createVNode as g, createCommentVNode as f, createElementVNode as h, toDisplayString as b, createBlock as _, resolveDynamicComponent as Te, withCtx as w, Teleport as oe, Transition as ke, normalizeStyle as re, createTextVNode as B, Fragment as D, Comment as Jt, Text as ei, reactive as Ft, withModifiers as A, renderList as H, normalizeProps as Dt, guardReactiveProps as Bt, useId as Pt, withKeys as G, createSlots as Rt, withDirectives as Se, vModelText as He, vShow as ti, useSlots as ii, computed as Y, onMounted as ni, onBeforeUnmount as ri, watch as si, nextTick as Ge, TransitionGroup as ai } from "vue";
import { RouterLink as li } from "vue-router";
const Mt = "(max-width: 1023px)", Ot = N(!1);
function he() {
  typeof window > "u" || (Ot.value = window.matchMedia(Mt).matches);
}
if (typeof window < "u") {
  he();
  const e = window.matchMedia(Mt);
  typeof e.addEventListener == "function" ? e.addEventListener("change", he) : typeof e.addListener == "function" && e.addListener(he);
}
function M() {
  return Ot.value;
}
function oi() {
  return typeof document > "u" ? !1 : document.documentElement.classList.contains("cap-ios");
}
function ui() {
  return M() || oi();
}
function We(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = ui();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
const se = {
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
function Ie(e) {
  return !e || typeof e != "object" ? { ...se } : {
    ...se,
    ...e
  };
}
const Et = Symbol("uiDefaults");
function go(e, t) {
  e.provide(Et, Ie(t));
}
function bo(e = {}) {
  const t = Qt(Et, se);
  return Ie({ ...t, ...e });
}
function $t() {
  var t, i, r;
  const e = Xt();
  return ((r = (i = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.config) == null ? void 0 : i.globalProperties) == null ? void 0 : r.$uiDefaults) ?? se;
}
const je = {
  compact: "1rem",
  default: "1.5rem",
  comfortable: "1.25rem",
  spacious: "2rem"
};
function vo(e) {
  const t = {};
  if (e.radius) {
    const i = String(e.radius);
    t["--radius"] = i, t["--radius-sm"] = `calc(${i} - 4px)`, t["--radius-md"] = `calc(${i} - 2px)`, t["--radius-3xl"] = i;
  }
  if (e.cardPadding) {
    const i = je[e.cardPadding] || je.default;
    t["--ui-card-padding"] = i, t["--ui-card-gap"] = i;
  }
  return t;
}
const di = ["solid", "regular", "brands", "light", "duotone", "thin"];
function X(e, t, i) {
  if (e != null && e !== "")
    return e;
  const r = $t()[t];
  return r != null && r !== "" ? (
    /** @type {T} */
    r
  ) : i;
}
function j(e, { key: t = "controlSize", defaultSize: i = "md" } = {}) {
  if (e != null && e !== "")
    return We(e, { defaultSize: i });
  const r = $t(), s = r[t] ?? r.controlSize ?? r.buttonSize ?? r.inputSize ?? i;
  return We(s, { defaultSize: i });
}
function ue(e) {
  const t = X(e, "iconType", "light");
  return di.includes(t) ? t : "light";
}
function ci(e) {
  return X(e, "dialogMaxWidth", "lg");
}
function fi(e, t = "dateFormat") {
  return X(e, t, "") || void 0;
}
function ko(e) {
  return X(e, "timeFormat", "HH:mm");
}
const hi = ["solid", "regular", "brands", "light", "duotone", "thin"], J = {
  type: String,
  default: void 0,
  validator: (e) => e == null || hi.includes(e)
};
function de(e = "iconType") {
  return {
    resolvedIconType() {
      return ue(this[e]);
    }
  };
}
const C = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, s] of t)
    i[r] = s;
  return i;
};
function L(...e) {
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
const mi = ["horizontal", "vertical"], pi = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => mi.includes(e)
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     * Dikeyde Input / Select / Button yan yana yığılmış tek kontrol gibi görünür.
     */
    joined: {
      type: Boolean,
      default: !1
    },
    /**
     * `joined` ile birlikte: çocuklar arasında ince ayırıcı çizgi
     * (dikeyde üst kenar, yatayda sol kenar — inset).
     */
    divided: {
      type: Boolean,
      default: !1
    },
    /**
     * Yatayda çocuklar eşit büyür; dikeyde grup ve çocuklar tam genişlik.
     * (`min-width` / `min-height: max-content` — erken “…” kesilmesini önler).
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
      return L(
        "ui-action-group",
        `ui-action-group--${this.orientation}`,
        this.joined && "ui-action-group--joined",
        this.divided && this.joined && "ui-action-group--divided",
        this.grow && "ui-action-group--grow",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, yi = ["aria-label"];
function gi(e, t, i, r, s, n) {
  return l(), u("div", z({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, yi);
}
const So = /* @__PURE__ */ C(pi, [["render", gi]]), bi = ["info", "success", "warning", "error"], qe = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Ke = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, vi = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => bi.includes(e)
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
    /** Sayfa üstünde ince, tam genişlikte durum çubuğu. Metin + CTA tek satır. */
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
      return this.icon || qe[this.variant] || qe.info;
    },
    iconToneClass() {
      return Ke[this.variant] || Ke.info;
    },
    rootClasses() {
      return L(
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
}, ki = ["role"], Si = { class: "ui-alert-body" }, xi = {
  key: 0,
  class: "ui-alert-copy"
}, wi = {
  key: 0,
  class: "ui-alert-title"
}, _i = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Ci = {
  key: 1,
  class: "ui-alert-slot"
};
function Ti(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("ui-button");
  return l(), u("div", z({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), u("span", {
      key: 0,
      class: S(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      p(e.$slots, "icon", {}, () => [
        g(a, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", Si, [
      i.title || i.description ? (l(), u("div", xi, [
        i.title ? (l(), u("p", wi, b(i.title), 1)) : f("", !0),
        i.description ? (l(), u("p", _i, b(i.description), 1)) : f("", !0)
      ])) : f("", !0),
      e.$slots.default ? (l(), u("div", Ci, [
        p(e.$slots, "default")
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
  ], 16, ki);
}
const xo = /* @__PURE__ */ C(vi, [["render", Ti]]), Ii = ["xs", "sm", "md", "lg", "xl"], Ye = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, zi = ["circle", "rounded", "square"], Li = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, Ue = Object.freeze({
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
}), Ze = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Ai(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return Ze[t] && (t = Ze[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Fi(e) {
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
const Di = {
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
      validator: (e) => Ii.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => zi.includes(e)
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
      return L(
        "ui-avatar",
        Ye[this.size] || Ye.md,
        Li[this.shape] || "",
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
      return Fi(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Ai(e[0]) : "default";
    },
    letterColors() {
      return Ue[this.colorLetterKey] || Ue.default;
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
}, Bi = ["src", "alt"], Pi = ["role", "aria-label", "aria-hidden"];
function Ri(e, t, i, r, s, n) {
  return l(), _(Te(n.rootTag), z({
    type: i.interactive ? "button" : void 0,
    class: n.rootClass,
    style: n.rootStyle
  }, n.rootBind, { onClick: n.onRootClick }), {
    default: w(() => [
      i.src && !s.imageFailed ? (l(), u("img", {
        key: 0,
        src: i.src,
        alt: n.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
      }, null, 40, Bi)) : (l(), u("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : n.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, b(n.displayInitials), 9, Pi))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const wo = /* @__PURE__ */ C(Di, [["render", Ri]]);
let xe = 0;
const Vt = [];
function _o(e) {
  return xe += 1, `${e}-${xe}`;
}
function q(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return Vt.push(() => {
    t = 0;
  }), i;
}
function Co() {
  xe = 0;
  for (const e of Vt)
    e();
}
const Mi = q("ui-tooltip"), Oi = ["top", "bottom", "left", "right"], E = 8, Ei = {
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
      validator: (e) => Oi.includes(e)
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
      tooltipId: Mi(),
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
      let d = 0, o = 0;
      if (a.left < E ? d = E - a.left : a.right > s - E && (d = s - E - a.right), a.top < E ? o = E - a.top : a.bottom > n - E && (o = n - E - a.bottom), d === 0 && o === 0) return;
      const c = parseFloat(this.panelStyle.left), y = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(y) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + d}px`,
        top: `${y + o}px`
      });
    }
  }
}, $i = ["id"], Vi = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function Ni(e, t, i, r, s, n) {
  return l(), u("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => n.onEnter && n.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => n.onLeave && n.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => n.onFocusIn && n.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => n.onFocusOut && n.onFocusOut(...a))
  }, [
    p(e.$slots, "default"),
    s.portalReady ? (l(), _(oe, {
      key: 0,
      to: "body"
    }, [
      g(ke, { name: "ui-tooltip-fade" }, {
        default: w(() => [
          s.open && !i.disabled && n.hasContent ? (l(), u("div", {
            key: 0,
            id: s.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: re(s.panelStyle),
            role: "tooltip"
          }, [
            h("span", Vi, [
              p(e.$slots, "content", {}, () => [
                B(b(i.label), 1)
              ])
            ])
          ], 12, $i)) : f("", !0)
        ]),
        _: 3
      })
    ])) : f("", !0)
  ], 544);
}
const Nt = /* @__PURE__ */ C(Ei, [["render", Ni]]);
function ze(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [s, n] of Object.entries(e || {}))
    i.has(s) || (r[s] = n);
  return r;
}
const Hi = [
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
], Gi = ["xs", "sm", "md", "lg"], Qe = {
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
}, Xe = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, me = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
};
function Wi(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function ji(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const qi = {
  name: "Badge",
  components: { Tooltip: Nt },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Hi.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => Gi.includes(e)
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
      validator: (e) => Object.keys(me).includes(e)
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
      const e = ze(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? me[this.maxWidth] || me[48] : "";
    },
    hasAdornment() {
      return !!(this.prefixIcon || this.suffixIcon || this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return Wi(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ji(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return L(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        Xe[this.size] || Xe.sm,
        this.isClickable ? "ui-badge--clickable" : "",
        !this.normalizedHex && (Qe[this.variant] || Qe.solid),
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
}, Ki = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Yi = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, Ui = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Zi = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function Qi(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("Tooltip");
  return l(), _(d, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: w(() => [
      (l(), _(Te(n.rootTag), z(n.hexBadgeStyle ? { ...n.rootAttrs, style: n.hexBadgeStyle } : n.rootAttrs, { class: n.badgeClasses }), {
        default: w(() => [
          i.prefixIcon ? (l(), u("span", Ki, [
            g(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (l(), u("span", Yi, [
            p(e.$slots, "prepend")
          ])) : f("", !0),
          h("span", {
            ref: "labelRef",
            class: S(["ui-badge-label", [n.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), u("span", Ui, [
            g(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (l(), u("span", Zi, [
            p(e.$slots, "append")
          ])) : f("", !0)
        ]),
        _: 3
      }, 16, ["class"]))
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const Xi = /* @__PURE__ */ C(qi, [["render", Qi]]);
function we(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const Ji = ["sm", "md", "lg"], en = ["solid", "outline", "ghost", "link", "nav"], tn = ["primary", "secondary", "input", "warning", "success", "info", "danger"], nn = ["button", "submit", "reset"], Je = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, et = {
  sm: "box-border h-[var(--ui-control-h-sm)] min-h-[var(--ui-control-h-sm)] px-2.5 py-0 text-xs leading-4",
  md: "box-border h-[var(--ui-control-h-md)] min-h-[var(--ui-control-h-md)] px-3 py-0 text-sm leading-5",
  lg: "box-border h-[var(--ui-control-h-lg)] min-h-[var(--ui-control-h-lg)] px-4 py-0 text-base leading-6"
}, tt = {
  sm: "box-border h-auto min-h-[var(--ui-control-h-sm)] items-start px-2.5 py-2 text-xs leading-4",
  md: "box-border h-auto min-h-[var(--ui-control-h-md)] items-start px-3 py-2 text-sm leading-5",
  lg: "box-border h-auto min-h-[var(--ui-control-h-lg)] items-start px-4 py-2 text-base leading-6"
}, it = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, nt = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none"
}, rn = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, rt = {
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
}, sn = {
  name: "Button",
  components: { RouterLink: li },
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
      validator: (e) => nn.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => en.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => tn.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ji.includes(e)
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
    },
    /** Çok satırlı etiket / açıklama — truncate ve nowrap kapatılır. */
    wrap: {
      type: Boolean,
      default: !1
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
      return j(this.size, { key: "controlSize", defaultSize: "md" });
    },
    themeButtonRounded() {
      return X(void 0, "buttonRounded", "lg");
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : we(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center", t = this.fulled || this.block;
      return this.wrap ? ["ui-button-text min-w-0 flex-1 whitespace-normal", e].join(" ") : this.stack ? ["ui-button-text max-w-full truncate", e].join(" ") : t || this.variant === "nav" ? ["ui-button-text min-w-0 flex-1 truncate", e].join(" ") : ["ui-button-text whitespace-nowrap", e].join(" ");
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
      var d, o;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.stack && !e && !t ? i = nt[this.resolvedSize] || nt.md : this.cubed && !e && !t ? i = it[this.resolvedSize] || it.md : e ? i = rn[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : this.wrap ? i = tt[this.resolvedSize] || tt.md : i = Je[this.resolvedSize] || Je.md;
      let r = "", s = i;
      !e && !t && (this.wrap ? r = "rounded-xl" : (this.stack || this.rounded || this.cubed || this.themeButtonRounded === "full") && (r = "rounded-full", !this.stack && !this.cubed && (s = et[this.resolvedSize] || et.md)));
      const n = ((d = rt[this.variant]) == null ? void 0 : d[this.color]) || ((o = rt.solid) == null ? void 0 : o.primary), a = this.fulled || this.block;
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
      if (e == null || typeof e != "object" || e.type === Jt) return !1;
      if (e.type === ei)
        return String(e.children ?? "").trim().length > 0;
      if (e.type === D) {
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
}, an = ["href", "data-variant", "data-color", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], ln = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, on = {
  key: 0,
  class: "sr-only"
}, un = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, dn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, cn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, fn = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, hn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, mn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, pn = ["type", "disabled", "data-variant", "data-color", "data-loading", "aria-busy"], yn = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, gn = {
  key: 0,
  class: "sr-only"
}, bn = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, vn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, kn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Sn = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, xn = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, wn = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function _n(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("RouterLink");
  return n.hasRouterTo ? (l(), _(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: w(({ href: o, navigate: c }) => [
      h("a", {
        href: o,
        class: S(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (y) => n.onRouterLinkClick(y, c)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), u(D, { key: 0 }, [
          h("span", ln, [
            g(a, {
              size: n.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          n.resolvedLoadingText ? (l(), u("span", on, b(n.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (l(), u("span", un, [
          g(a, {
            size: n.inlineIconSize,
            name: "spinner",
            class: "fa-spin",
            "aria-hidden": "true"
          }, null, 8, ["size"]),
          h("span", {
            class: S(n.textContentClass)
          }, b(n.resolvedLoadingText), 3)
        ])) : i.stack ? (l(), u(D, { key: 2 }, [
          i.prefixIcon ? (l(), u("span", dn, [
            g(a, {
              size: n.stackIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: S(n.textContentClass)
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), u("span", cn, [
            g(a, {
              size: n.stackIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64)) : n.usesCubedCenterLayout ? (l(), u("span", fn, [
          i.prefixIcon ? (l(), _(a, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(a, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
        ])) : (l(), u(D, { key: 4 }, [
          i.prefixIcon ? (l(), u("span", hn, [
            g(a, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: S(n.textContentClass)
          }, [
            p(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), u("span", mn, [
            g(a, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, an)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), u("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: S(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    "data-loading": i.loading ? "true" : void 0,
    "aria-busy": i.loading ? "true" : void 0,
    onClick: t[0] || (t[0] = (...o) => n.onClick && n.onClick(...o))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), u(D, { key: 0 }, [
      h("span", yn, [
        g(a, {
          size: n.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      n.resolvedLoadingText ? (l(), u("span", gn, b(n.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (l(), u("span", bn, [
      g(a, {
        size: n.inlineIconSize,
        name: "spinner",
        class: "fa-spin",
        "aria-hidden": "true"
      }, null, 8, ["size"]),
      h("span", {
        class: S(n.textContentClass)
      }, b(n.resolvedLoadingText), 3)
    ])) : i.stack ? (l(), u(D, { key: 2 }, [
      i.prefixIcon ? (l(), u("span", vn, [
        g(a, {
          size: n.stackIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: S(n.textContentClass)
      }, [
        p(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), u("span", kn, [
        g(a, {
          size: n.stackIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64)) : n.usesCubedCenterLayout ? (l(), u("span", Sn, [
      i.prefixIcon ? (l(), _(a, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(a, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
    ])) : (l(), u(D, { key: 4 }, [
      i.prefixIcon ? (l(), u("span", xn, [
        g(a, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: S(n.textContentClass)
      }, [
        p(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), u("span", wn, [
        g(a, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, pn));
}
const To = /* @__PURE__ */ C(sn, [["render", _n]]), Cn = ["none", "sm", "md"], st = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Tn = {
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
      validator: (e) => Cn.includes(e)
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
      return ["ui-divider", st[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        st[this.spacing] || "",
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
}, In = { class: "ui-divider__label" }, zn = {
  key: 1,
  class: "ui-section-label"
};
function Ln(e, t, i, r, s, n) {
  const a = x("ui-icon");
  return n.hasLabel ? (l(), u("div", z({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", In, [
      i.icon ? (l(), _(a, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (l(), u("span", zn, b(i.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), u("hr", z({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const Le = /* @__PURE__ */ C(Tn, [["render", Ln]]), An = ["solid", "dashed", "dotted", "double"], at = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Fn = ["solid", "regular", "brands", "light", "duotone", "thin"], Dn = {
  name: "Card",
  components: { Divider: Le },
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
      default: void 0,
      validator: (e) => e == null || Fn.includes(e)
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
    /** Üst flex satırında kardeşlerle aynı yüksekliğe yayılır (`h-full`). */
    fullHeight: {
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
      return ue(this.iconType);
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
      return at[this.borderType] || at.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), this.fullHeight && e.push("ui-card--full-height"), L(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Bn = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Pn = {
  key: 0,
  class: "ui-header-lead"
}, Rn = { class: "ui-header-lead__main" }, Mn = {
  key: 0,
  class: "ui-header-lead__icon"
}, On = { class: "ui-header-lead__text" }, En = {
  key: 0,
  class: "ui-heading-3"
}, $n = {
  key: 1,
  class: "ui-text-default"
}, Vn = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Nn(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("Divider");
  return l(), u("div", z({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), u("div", Bn, [
      p(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (l(), u("div", {
      key: 1,
      class: S(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      p(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), u("div", Pn, [
          h("div", Rn, [
            i.icon ? (l(), u("span", Mn, [
              g(a, {
                name: i.icon,
                type: n.resolvedIconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", On, [
              i.title ? (l(), u("h3", En, b(i.title), 1)) : f("", !0),
              i.description ? (l(), u("p", $n, b(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), u("div", Vn, [
            p(e.$slots, "append"),
            p(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    n.showHeaderDivider ? (l(), _(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (l(), u("div", {
      key: 3,
      class: S(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      p(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (l(), u("div", {
      key: 4,
      class: S(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      p(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Io = /* @__PURE__ */ C(Dn, [["render", Nn]]), P = Ft({
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
function zo(e = {}) {
  return new Promise((t) => {
    P.title = e.title ?? "", P.description = e.description ?? "", P.confirmLabel = e.confirmLabel ?? "", P.cancelLabel = e.cancelLabel ?? "", P.destructive = !!e.destructive, P._resolve = t, P.open = !0;
  });
}
function lt(e) {
  const t = P._resolve;
  P.open = !1, P._resolve = null, t && t(!!e);
}
const Hn = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return P;
    },
    syncOpen: {
      get() {
        return P.open;
      },
      set(e) {
        e ? P.open = !0 : P._resolve ? lt(!1) : P.open = !1;
      }
    },
    confirmText() {
      return P.confirmLabel ? P.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      lt(!0);
    }
  }
}, Gn = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
function Wn(e, t, i, r, s, n) {
  const a = x("ui-button"), d = x("ui-dialog");
  return l(), _(d, {
    open: n.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (o) => n.syncOpen = o),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: n.confirmState.title,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": n.confirmState.title || n.fallbackAriaLabel
  }, {
    footer: w(() => [
      g(a, {
        color: n.confirmState.destructive ? "danger" : "primary",
        block: "",
        size: "lg",
        onClick: n.onConfirm
      }, {
        default: w(() => [
          B(b(n.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    default: w(() => [
      n.confirmState.description ? (l(), u("p", Gn, b(n.confirmState.description), 1)) : f("", !0)
    ]),
    _: 1
  }, 8, ["open", "title", "aria-label"]);
}
const Lo = /* @__PURE__ */ C(Hn, [["render", Wn]]);
function Ht(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function Gt(e, t = "tr-TR", i) {
  if (!(e instanceof Date) || Number.isNaN(e.getTime())) return "";
  const r = Ht(t);
  return i === "d MMM yyyy" ? e.toLocaleDateString(r, { day: "numeric", month: "short", year: "numeric" }) : e.toLocaleDateString(r, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Ao(e, t = "tr-TR", i) {
  if (e == null || e === "") return "";
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!r) return "";
  const s = Number(r[1]), n = Number(r[2]) - 1, a = Number(r[3]), d = new Date(s, n, a);
  return d.getFullYear() !== s || d.getMonth() !== n || d.getDate() !== a ? "" : Gt(d, t, i);
}
const jn = q("ui-datepicker");
function ot(e) {
  return String(e).padStart(2, "0");
}
function U(e) {
  return `${e.getFullYear()}-${ot(e.getMonth() + 1)}-${ot(e.getDate())}`;
}
function pe(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, s = Number(t[3]), n = new Date(i, r, s);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== s ? null : n;
}
const qn = {
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
    const e = pe(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: jn(),
      menuOpen: !1,
      viewYear: e.getFullYear(),
      viewMonth: e.getMonth()
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    selectedDate() {
      return pe(this.modelValue);
    },
    locale() {
      var e;
      return Ht((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder;
      const e = fi(void 0, "dateFormat");
      return Gt(this.selectedDate, this.locale, e);
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
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), s = U(this.referenceTodayDate), n = [];
      for (let a = 0; a < 42; a += 1) {
        const d = new Date(r.getFullYear(), r.getMonth(), r.getDate() + a), o = d.getMonth() === t && d.getFullYear() === e, c = d.getDate(), y = U(d), m = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, v = !!(this.selectedDate && y === U(this.selectedDate)), I = s === y, k = !!(this.minYmd && y < this.minYmd);
        n.push({
          key: m,
          d: c,
          out: !o,
          date: d,
          sel: v,
          today: I,
          inMonth: o,
          disabled: k
        });
      }
      return n;
    }
  },
  watch: {
    modelValue() {
      const e = pe(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = U(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = U(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = new Date(this.referenceTodayDate);
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const r = U(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Kn = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, Yn = { class: "mb-3 flex items-center justify-between gap-2" }, Un = { class: "text-sm font-medium tabular-nums text-foreground" }, Zn = { class: "ui-datepicker-grid" }, Qn = {
  key: 0,
  class: "ui-datepicker-quick"
}, Xn = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, Jn = { class: "mb-3 flex items-center justify-between gap-2" }, er = { class: "text-sm font-medium tabular-nums text-foreground" }, tr = { class: "ui-datepicker-grid" }, ir = {
  key: 0,
  class: "ui-datepicker-quick"
};
function nr(e, t, i, r, s, n) {
  const a = x("ui-button"), d = x("ui-popover");
  return l(), u("div", {
    class: S([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.fulled ? "ui-datepicker--fulled w-full" : "",
      !i.embedded && !i.fulled ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (l(), u("div", Kn, [
      h("div", Yn, [
        g(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = A((o) => n.shiftMonth(-1), ["stop"]))
        }),
        h("span", Un, b(n.monthTitle), 1),
        g(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          "aria-label": "Next month",
          onClick: t[1] || (t[1] = A((o) => n.shiftMonth(1), ["stop"]))
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
      h("div", Zn, [
        (l(!0), u(D, null, H(n.calendarCells, (o) => (l(), _(a, {
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
          default: w(() => [
            B(b(o.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ]),
      i.showQuick ? (l(), u("div", Qn, [
        g(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          fulled: "",
          disabled: n.yesterdayQuickDisabled,
          onClick: t[2] || (t[2] = (o) => n.pickQuick("yesterday"))
        }, {
          default: w(() => [
            B(b(n.resolvedYesterdayLabel), 1)
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
          onClick: t[3] || (t[3] = (o) => n.pickQuick("today"))
        }, {
          default: w(() => [
            B(b(n.resolvedTodayLabel), 1)
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
          onClick: t[4] || (t[4] = (o) => n.pickQuick("tomorrow"))
        }, {
          default: w(() => [
            B(b(n.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (l(), _(d, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (o) => s.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: w(({ open: o, toggle: c, close: y }) => [
        p(e.$slots, "trigger", {
          open: o,
          toggle: c,
          close: y
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
            "aria-expanded": o ? "true" : "false",
            "aria-haspopup": !0,
            onClick: c
          }, {
            default: w(() => [
              h("span", {
                class: S([
                  "min-w-0 flex-1 truncate",
                  n.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, b(n.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: w(({ close: o }) => [
        h("div", Xn, [
          h("div", Jn, [
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[5] || (t[5] = A((c) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", er, b(n.monthTitle), 1),
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[6] || (t[6] = A((c) => n.shiftMonth(1), ["stop"]))
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
          h("div", tr, [
            (l(!0), u(D, null, H(n.calendarCells, (c) => (l(), _(a, {
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
              onClick: (y) => n.pick(c, o)
            }, {
              default: w(() => [
                B(b(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          i.showQuick ? (l(), u("div", ir, [
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (c) => n.pickQuick("yesterday", o)
            }, {
              default: w(() => [
                B(b(n.resolvedYesterdayLabel), 1)
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
              onClick: (c) => n.pickQuick("today", o)
            }, {
              default: w(() => [
                B(b(n.resolvedTodayLabel), 1)
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
              onClick: (c) => n.pickQuick("tomorrow", o)
            }, {
              default: w(() => [
                B(b(n.resolvedTomorrowLabel), 1)
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
const Fo = /* @__PURE__ */ C(qn, [["render", nr]]), rr = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"])'
].join(","), sr = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function ar(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function ut(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (ar(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function lr(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function dt(e, { skipFooter: t = !1 } = {}) {
  const i = ut(e, rr, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = ut(e, sr, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function or(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && dt(t))
    return !0;
  for (const i of lr(e))
    if (dt(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Wt = "ui-scroll-lock";
let Z = 0, _e = null;
function ur(e) {
  return (getComputedStyle(e).scrollbarGutter || "").includes("stable");
}
function dr() {
  if (!(typeof document > "u")) {
    if (Z === 0) {
      const e = document.body, t = document.documentElement, i = Math.max(0, window.innerWidth - t.clientWidth);
      _e = {
        htmlOverflow: t.style.overflow,
        bodyOverflow: e.style.overflow,
        htmlOverscroll: t.style.overscrollBehavior,
        bodyOverscroll: e.style.overscrollBehavior,
        htmlPaddingRight: t.style.paddingRight
      }, t.classList.add(Wt), t.style.overflow = "hidden", e.style.overflow = "hidden", t.style.overscrollBehavior = "none", e.style.overscrollBehavior = "none", !ur(t) && i > 0 && (t.style.paddingRight = `${i}px`);
    }
    Z += 1;
  }
}
function ct() {
  if (typeof document > "u" || Z <= 0 || (Z -= 1, Z > 0)) return;
  const e = document.body, t = document.documentElement, i = _e || {
    htmlOverflow: "",
    bodyOverflow: "",
    htmlOverscroll: "",
    bodyOverscroll: "",
    htmlPaddingRight: ""
  };
  t.classList.remove(Wt), t.style.overflow = i.htmlOverflow, e.style.overflow = i.bodyOverflow, t.style.overscrollBehavior = i.htmlOverscroll, e.style.overscrollBehavior = i.bodyOverscroll, t.style.paddingRight = i.htmlPaddingRight, _e = null;
}
const cr = q("ui-dialog"), fr = 400, hr = 420, mr = 20, pr = ["solid", "dashed", "dotted", "double"], ft = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, yr = ["solid", "regular", "brands", "light", "duotone", "thin"], gr = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], ht = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, br = {
  name: "Dialog",
  components: { Divider: Le },
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
      validator: (e) => e == null || gr.includes(e)
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
      validator: (e) => pr.includes(e)
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
      validator: (e) => e == null || yr.includes(e)
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
    /**
     * Footer şeffaf — arka plan/border yok; gövde üzerine biner.
     * Kaydırılabilir içerik footer altında görünür; gövde alt boşluğu otomatik artar.
     * Varsayılan açık: yalnızca eylem butonları görünür.
     */
    footerTransparent: {
      type: Boolean,
      default: !0
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
    const e = cr();
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      portalReady: !1,
      focusFallbackTimer: null,
      sheetDragCleanup: null,
      layerMounted: !1,
      layerClosing: !1,
      layerMotionActive: !1,
      /** Şeffaf footer gerçek yüksekliği (px) — gövde alt padding */
      footerClearancePx: null,
      /** Açık popover üstünde kalmak için dinamik z-index */
      rootZIndex: null
    };
  },
  watch: {
    open: {
      immediate: !0,
      handler(e) {
        if (e) {
          if (this.layerMounted || this.layerClosing) return;
          this.rootZIndex = this.resolveRootZIndex(), this.layerMounted = !0, dr(), this.$nextTick(() => {
            this.resetPanelMotionStyles(), this.resetBodyScroll(), this.syncFooterClearance(), this.animateLayerIn(this.$refs.layerRef);
          });
        } else this.layerMounted && !this.layerClosing && this.dismissLayer();
      }
    },
    footerTransparent() {
      this.$nextTick(() => {
        this.bindFooterClearanceObserver();
      });
    },
    hasFooterSlot(e) {
      !e || !this.open || this.$nextTick(() => {
        this.bindFooterClearanceObserver();
      });
    }
  },
  mounted() {
    this.portalReady = !0;
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.clearSheetDragListeners(), this.unbindFooterClearanceObserver(), this.layerMounted && ct(), this.layerMounted = !1, this.layerClosing = !1, this.layerMotionActive = !1;
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
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    /**
     * Şeffaf footer yalnızca gövde varken anlamlıdır (kaydırılabilir içerik altına biner).
     * Gövdesiz uyarı / onay diyaloglarında absolute footer başlık metninin üstüne biner.
     */
    usesFooterTransparentLayout() {
      return this.footerTransparent && this.hasFooterSlot && !!this.$slots.default;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    borderStyleClass() {
      return ft[this.borderType] || ft.solid;
    },
    resolvedIconType() {
      return ue(this.iconType);
    },
    resolvedMaxWidth() {
      return ci(this.maxWidth);
    },
    maxWidthClass() {
      return ht[this.resolvedMaxWidth] || ht.lg;
    },
    panelClasses() {
      const e = this.border ? L("border", this.borderStyleClass) : L("border-0", "border-transparent");
      return L(
        "ui-surface ui-card ui-dialog-panel relative z-[1] w-full",
        this.maxWidthClass,
        e,
        this.bodyLayout === "flex" ? "ui-dialog-panel--body-flex" : "",
        this.usesFooterTransparentLayout ? "ui-dialog-panel--footer-transparent" : "",
        this.$attrs.class
      );
    },
    panelStyle() {
      const e = {};
      return this.panelMaxHeight && (e.maxHeight = `min(${this.panelMaxHeight}, var(--ui-dialog-max-height-cap, ${this.panelMaxHeight}))`), this.usesFooterTransparentLayout && this.footerClearancePx != null && (e["--ui-dialog-footer-clearance"] = `${this.footerClearancePx}px`), Object.keys(e).length ? e : void 0;
    },
    passthroughAttrs() {
      return ze(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : we(this, "ui.dialog.close", "Close");
    },
    resolvedBackLabel() {
      return this.backLabel != null && this.backLabel !== "" ? this.backLabel : we(this, "ui.dialog.back", "Back");
    },
    rootLayerClasses() {
      return L(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm",
        this.layerMotionActive && "ui-dialog-root--motion",
        this.layerClosing && "ui-dialog-root--leaving"
      );
    },
    rootLayerStyle() {
      if (this.rootZIndex != null)
        return { zIndex: String(this.rootZIndex) };
    }
  },
  methods: {
    resolveRootZIndex() {
      const e = this.stackLayer === "confirm" ? hr : fr;
      if (typeof document > "u") return e;
      let t = e;
      for (const i of document.querySelectorAll(".ui-popover-layer")) {
        const r = Number.parseInt(getComputedStyle(i).zIndex, 10);
        Number.isFinite(r) && (t = Math.max(t, r + mr));
      }
      for (const i of document.querySelectorAll(".ui-dialog-root, .ui-sheet-root")) {
        if (i === this.$refs.layerRef) continue;
        const r = Number.parseInt(getComputedStyle(i).zIndex, 10);
        Number.isFinite(r) && (t = Math.max(t, r + 10));
      }
      return t;
    },
    prefersReducedMotion() {
      return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    mobileSheetEasing() {
      return "cubic-bezier(0.32, 0.72, 0, 1)";
    },
    mobileSheetDurationMs() {
      return 320;
    },
    layerMotionTimings() {
      return M() ? {
        enterMs: this.mobileSheetDurationMs(),
        leaveMs: 280,
        snapMs: 280,
        easing: this.mobileSheetEasing(),
        leaveEasing: this.mobileSheetEasing()
      } : {
        enterMs: 260,
        leaveMs: 180,
        snapMs: 220,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        leaveEasing: "cubic-bezier(0.4, 0, 1, 1)"
      };
    },
    desktopEnterTransform() {
      return "translate3d(0, 8px, 0) scale3d(0.97, 0.97, 1)";
    },
    desktopLeaveTransform() {
      return "translate3d(0, 6px, 0) scale3d(0.98, 0.98, 1)";
    },
    desktopRestTransform() {
      return "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    },
    /** Cam yüzeyde transform + canlı backdrop-filter kasar; opacity-only aç. */
    surfaceBackdropBlurPx() {
      if (typeof window > "u" || typeof document > "u") return 0;
      const e = getComputedStyle(document.documentElement).getPropertyValue("--ui-surface-backdrop-blur").trim(), t = Number.parseFloat(e);
      return Number.isFinite(t) ? t : 0;
    },
    /**
     * Desktop cam: opacity-only (hafif scale jank’i önler).
     * Mobil sheet (alttan kayma) her zaman açık — blur artık animasyon boyunca sabit.
     */
    preferGlassSafeOverlayMotion() {
      return M() ? !1 : this.surfaceBackdropBlurPx() > 0;
    },
    runOnNextFrames(e) {
      requestAnimationFrame(() => {
        requestAnimationFrame(e);
      });
    },
    layerMotionParts(e) {
      return {
        panel: e.querySelector(".ui-dialog-panel"),
        motion: e.querySelector(".ui-dialog-motion"),
        backdrop: e.querySelector(".ui-dialog-backdrop")
      };
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
      }, n = (a) => {
        if (a.target !== e) return;
        const d = a.propertyName || "";
        d && d !== "transform" && d !== "opacity" || (e.removeEventListener("transitionend", n), s());
      };
      e.addEventListener("transitionend", n), window.setTimeout(() => {
        e.removeEventListener("transitionend", n), s();
      }, t);
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
      const t = this.layerMotionParts(e), { panel: i, motion: r, backdrop: s } = t, n = M(), a = this.preferGlassSafeOverlayMotion(), { enterMs: d, easing: o } = this.layerMotionTimings(), c = `${d / 1e3}s`, m = `${Math.round(d * 0.72) / 1e3}s`;
      this.layerMotionActive = !0, r && (r.style.removeProperty("transform"), r.style.removeProperty("transition")), s && (s.style.transition = "none", s.style.opacity = "0"), i && (i.style.transition = "none", n ? (i.style.opacity = "1", i.style.transform = "translate3d(0, 100%, 0)") : a ? (i.style.opacity = "0", i.style.transform = this.desktopRestTransform()) : (i.style.opacity = "0", i.style.transform = this.desktopEnterTransform())), e.offsetHeight, this.runOnNextFrames(() => {
        !this.layerMounted || this.layerClosing || (s && (s.style.transition = `opacity ${m} ${o}`, s.style.opacity = "1"), i && (n ? (i.style.transition = `transform ${c} ${o}`, i.style.opacity = "1", i.style.transform = "translate3d(0, 0, 0)") : a ? (i.style.transition = `opacity ${c} ${o}`, i.style.opacity = "1", i.style.transform = this.desktopRestTransform()) : (i.style.transition = `opacity ${c} ${o}, transform ${c} ${o}`, i.style.opacity = "1", i.style.transform = this.desktopRestTransform())), this.waitLayerTransition(i || s, d + 80, () => {
          this.layerClosing || (this.finishLayerMotion(e), this.onOverlayAfterEnter());
        }));
      });
    },
    /**
     * Kapanışta klavye inset / max-height / footer padding o anki değerde donsun.
     * Aksi halde `--ui-keyboard-inset` veya safe-area değişince footer aşağı kayıp öyle kapanır.
     */
    freezeSheetGeometry(e) {
      if (!e) return;
      const t = getComputedStyle(e);
      e.style.marginBottom = t.marginBottom, e.style.maxHeight = t.maxHeight;
      const i = e.querySelector(".ui-card-footer");
      i && (i.style.paddingBottom = getComputedStyle(i).paddingBottom);
    },
    animateLayerOut(e, t) {
      var k;
      const i = () => {
        this.finishLayerMotion(e), t();
      };
      if (!e || this.prefersReducedMotion()) {
        i();
        return;
      }
      const r = M(), s = this.preferGlassSafeOverlayMotion(), n = this.layerMotionParts(e);
      this.freezeSheetGeometry(n.panel);
      const a = r && !!((k = n.panel) != null && k.style.transform && n.panel.style.transform !== "none");
      this.clearLayerInlineMotion(e, {
        preserveMobilePanelTransform: r,
        preserveBackdrop: a
      });
      const { panel: d, motion: o, backdrop: c } = n, { leaveMs: y, leaveEasing: m } = this.layerMotionTimings(), v = `${y / 1e3}s`, I = `${Math.round(y * 0.85) / 1e3}s`;
      this.layerMotionActive = !0, o && (o.style.removeProperty("transform"), o.style.removeProperty("transition")), e.offsetHeight, this.runOnNextFrames(() => {
        c && (c.style.transition = `opacity ${I} ${m}`, c.style.opacity = "0"), r && d ? (d.style.transition = `transform ${v} ${m}`, d.style.transform = "translate3d(0, 100%, 0)") : d && s ? (d.style.transition = `opacity ${v} ${m}`, d.style.opacity = "0", d.style.transform = this.desktopRestTransform()) : d && (d.style.transition = `opacity ${v} ${m}, transform ${v} ${m}`, d.style.opacity = "0", d.style.transform = this.desktopLeaveTransform()), this.waitLayerTransition(d || c, y + 80, i);
      });
    },
    finishLayerMotion(e) {
      this.layerMotionActive = !1, e && this.clearLayerInlineMotion(e);
    },
    dismissLayer() {
      if (!this.layerMounted || this.layerClosing) return;
      this.clearFocusFallback(), this.clearSheetDragListeners(), this.unbindFooterClearanceObserver(), this.layerClosing = !0;
      const e = this.$refs.layerRef;
      this.animateLayerOut(e, () => {
        this.layerMounted = !1, this.layerClosing = !1, this.rootZIndex = null, ct(), this.resetPanelMotionStyles(), this.open && this.$emit("update:open", !1), this.$emit("after-leave");
      });
    },
    resetPanelMotionStyles() {
      const e = this.$refs.layerRef, t = this.$refs.panelRef, i = t == null ? void 0 : t.querySelector(".ui-dialog-motion"), r = e == null ? void 0 : e.querySelector(".ui-dialog-backdrop");
      i && (i.style.removeProperty("transform"), i.style.removeProperty("transition")), t && (t.style.removeProperty("transform"), t.style.removeProperty("transition"), t.style.removeProperty("opacity"), r && (r.style.removeProperty("opacity"), r.style.removeProperty("transition")));
    },
    onOverlayAfterEnter() {
      this.bindFooterClearanceObserver(), this.scheduleInitialFocus();
    },
    resetBodyScroll() {
      var i;
      const e = this.$refs.panelRef, t = (i = e == null ? void 0 : e.querySelector) == null ? void 0 : i.call(e, ".ui-card-body");
      t && (t.scrollTop = 0);
    },
    syncFooterClearance() {
      if (!this.usesFooterTransparentLayout || !this.open) {
        this.footerClearancePx = null;
        return;
      }
      const e = this.$refs.footerRef;
      if (!e) {
        this.footerClearancePx = null;
        return;
      }
      const t = Math.ceil(e.getBoundingClientRect().height);
      this.footerClearancePx = t > 0 ? t : null;
    },
    bindFooterClearanceObserver() {
      if (this.unbindFooterClearanceObserver(), !this.usesFooterTransparentLayout || !this.open) {
        this.footerClearancePx = null;
        return;
      }
      this.$nextTick(() => {
        const e = this.$refs.footerRef;
        if (!e) {
          this.footerClearancePx = null;
          return;
        }
        this.syncFooterClearance(), !(typeof ResizeObserver > "u") && (this._footerResizeObserver = new ResizeObserver(() => {
          this.syncFooterClearance();
        }), this._footerResizeObserver.observe(e));
      });
    },
    unbindFooterClearanceObserver() {
      var e, t;
      (t = (e = this._footerResizeObserver) == null ? void 0 : e.disconnect) == null || t.call(e), this._footerResizeObserver = null;
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const t = this.$refs.panelRef;
        if (!t) {
          this.runInitialFocus();
          return;
        }
        const i = (r) => {
          if (r.target !== t) return;
          const s = r.propertyName || "";
          s && s !== "transform" && s !== "opacity" || (t.removeEventListener("transitionend", i), this.clearFocusFallback(), this.runInitialFocus());
        };
        t.addEventListener("transitionend", i), this.focusFallbackTimer = setTimeout(() => {
          t.removeEventListener("transitionend", i), this.focusFallbackTimer = null, this.runInitialFocus();
        }, this.layerMotionTimings().enterMs + 80);
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
      e && or(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      const d = (m) => {
        const v = Math.max(0, m.clientY - s);
        i.style.transform = `translate3d(0, ${v}px, 0)`, r && (r.style.opacity = String(this.sheetBackdropOpacityForDrag(i, v)));
      }, o = (m, v) => {
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), v) {
          i.style.removeProperty("transition"), r && r.style.removeProperty("transition"), this.close();
          return;
        }
        const I = `${this.layerMotionTimings().snapMs / 1e3}s`, k = this.mobileSheetEasing();
        i.style.transition = `transform ${I} ${k}`, i.style.transform = "translate3d(0, 0, 0)", r && (r.style.transition = `opacity ${I} ${k}`, r.style.opacity = "1");
        const F = (T) => {
          T.target !== i && T.target !== r || (i.removeEventListener("transitionend", F), r == null || r.removeEventListener("transitionend", F), i.style.transition = n, i.style.removeProperty("transform"), r && (r.style.transition = a, r.style.removeProperty("opacity")));
        };
        i.addEventListener("transitionend", F), r == null || r.addEventListener("transitionend", F);
      }, c = (m) => {
        const v = Math.max(0, m.clientY - s);
        o(v, v >= 72);
      }, y = () => {
        o(0, !1);
      };
      window.addEventListener("pointermove", d), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", y), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", y);
      };
    }
  }
}, vr = ["aria-labelledby", "aria-describedby", "aria-label"], kr = { class: "ui-dialog-motion" }, Sr = { class: "ui-dialog-header__lead" }, xr = ["id"], wr = {
  key: 1,
  class: "ui-dialog-header__icon"
}, _r = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Cr = ["id"], Tr = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Ir(e, t, i, r, s, n) {
  const a = x("ui-button"), d = x("ui-icon"), o = x("Divider");
  return s.portalReady ? (l(), _(oe, {
    key: 0,
    to: "body"
  }, [
    s.layerMounted ? (l(), u("div", {
      key: 0,
      ref: "layerRef",
      class: S(n.rootLayerClasses),
      style: re(n.rootLayerStyle),
      tabindex: "-1",
      role: "presentation",
      onKeydown: t[4] || (t[4] = (...c) => n.onLayerKeydown && n.onLayerKeydown(...c))
    }, [
      h("div", {
        class: "ui-dialog-backdrop absolute inset-0 bg-black/70",
        "aria-hidden": "true",
        onClick: t[0] || (t[0] = (...c) => n.onBackdrop && n.onBackdrop(...c))
      }),
      h("div", z({
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
        onClick: t[3] || (t[3] = A(() => {
        }, ["stop"]))
      }), [
        h("div", kr, [
          h("div", {
            class: "ui-dialog-sheet-grab shrink-0",
            onPointerdown: t[1] || (t[1] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [...t[5] || (t[5] = [
            h("div", {
              class: "ui-dialog-sheet-handle",
              "aria-hidden": "true"
            }, null, -1)
          ])], 32),
          n.hasHeaderBlock ? (l(), u("div", {
            key: 0,
            class: "ui-card-header ui-dialog-sheet-drag shrink-0",
            onPointerdown: t[2] || (t[2] = (...c) => n.onSheetPointerDown && n.onSheetPointerDown(...c))
          }, [
            p(e.$slots, "header", {}, () => [
              n.hasDefaultHeader ? (l(), u("div", {
                key: 0,
                class: S(["ui-dialog-header", {
                  "ui-dialog-header--no-icon": !i.icon,
                  "ui-dialog-header--with-back": i.withBack,
                  "ui-dialog-header--with-close": i.showClose
                }])
              }, [
                i.showClose ? (l(), _(a, {
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
                }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                i.withBack ? (l(), _(a, {
                  key: 1,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "md",
                  "prefix-icon": "arrow-left",
                  class: "ui-dialog-header__back",
                  onClick: n.onBack
                }, {
                  default: w(() => [
                    B(b(n.resolvedBackLabel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : f("", !0),
                h("div", Sr, [
                  n.hasTitle ? (l(), u("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-dialog-header__title ui-heading-2"
                  }, [
                    p(e.$slots, "title", {}, () => [
                      B(b(i.title), 1)
                    ])
                  ], 8, xr)) : f("", !0),
                  i.icon ? (l(), u("span", wr, [
                    g(d, {
                      name: i.icon,
                      type: n.resolvedIconType,
                      size: "md"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0)
                ]),
                e.$slots.append || e.$slots.actions ? (l(), u("div", _r, [
                  p(e.$slots, "append"),
                  p(e.$slots, "actions")
                ])) : f("", !0),
                n.hasDescription ? (l(), u("p", {
                  key: 3,
                  id: s.descriptionId,
                  class: "ui-dialog-header__description ui-text-default"
                }, [
                  p(e.$slots, "description", {}, () => [
                    B(b(i.description), 1)
                  ])
                ], 8, Cr)) : f("", !0)
              ], 2)) : f("", !0)
            ])
          ], 32)) : f("", !0),
          e.$slots.toolbar ? (l(), u("div", Tr, [
            p(e.$slots, "toolbar")
          ])) : f("", !0),
          n.showHeaderDivider ? (l(), _(o, {
            key: 2,
            spacing: "none",
            class: "!my-0 shrink-0"
          })) : f("", !0),
          e.$slots.default ? (l(), u("div", {
            key: 3,
            class: S(["ui-card-body ui-text-default", {
              "ui-card-body--row": i.row,
              "ui-card-body--flush": i.bodyPadding === "none",
              "ui-card-body--flex": i.bodyLayout === "flex"
            }])
          }, [
            p(e.$slots, "default")
          ], 2)) : f("", !0),
          e.$slots.footer ? (l(), u("div", {
            key: 4,
            ref: "footerRef",
            class: S(["ui-card-footer", { "ui-dialog-footer--transparent": i.footerTransparent }])
          }, [
            p(e.$slots, "footer")
          ], 2)) : f("", !0)
        ])
      ], 16, vr)
    ], 38)) : f("", !0)
  ])) : f("", !0);
}
const Do = /* @__PURE__ */ C(br, [["render", Ir]]), zr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Lr = {
  name: "Dropdown",
  components: { Divider: Le },
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
      validator: (e) => zr.includes(e)
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
    },
    hasDescribedItems() {
      return !!this.$slots.before || this.items.some((e) => e && !e.divider && e.description);
    }
  },
  methods: {
    onOpenChange(e) {
      this.isOpen = e;
    },
    /** `color`, veya `variant: 'destructive'` → danger (sil / yıkıcı eylem). */
    itemColor(e) {
      return e != null && e.color ? e.color : e != null && e.selected ? "primary" : (e == null ? void 0 : e.variant) === "destructive" || e != null && e.destructive ? "danger" : "secondary";
    },
    itemSuffixIcon(e) {
      return e != null && e.suffixIcon || e != null && e.suffix_icon ? e.suffixIcon || e.suffix_icon : e != null && e.selected ? "check" : null;
    },
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), !e.keepOpen && !e.keep_open && t());
    }
  }
}, Ar = {
  key: 1,
  class: "ui-dropdown-heading",
  role: "presentation"
}, Fr = {
  key: 0,
  class: "ui-dropdown-item-copy"
}, Dr = {
  key: 0,
  class: "ui-dropdown-item-icon",
  "aria-hidden": "true"
}, Br = { class: "ui-dropdown-item-label" }, Pr = { class: "ui-dropdown-item-description" };
function Rr(e, t, i, r, s, n) {
  const a = x("Divider"), d = x("ui-icon"), o = x("ui-button"), c = x("ui-popover");
  return l(), _(c, {
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
    trigger: w((y) => [
      p(e.$slots, "trigger", Dt(Bt(y)))
    ]),
    content: w(({ close: y }) => [
      h("div", {
        class: S(["ui-dropdown-menu p-3", n.hasDescribedItems ? "ui-dropdown-menu--described" : ""]),
        role: "menu",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        p(e.$slots, "before", { close: y }),
        e.$slots.menu ? p(e.$slots, "menu", {
          key: 0,
          close: y
        }) : (l(!0), u(D, { key: 1 }, H(i.items, (m, v) => (l(), u(D, { key: v }, [
          m.divider ? (l(), _(a, {
            key: 0,
            spacing: "sm"
          })) : m.heading ? (l(), u("span", Ar, b(m.heading), 1)) : (l(), _(o, {
            key: 2,
            variant: "ghost",
            color: n.itemColor(m),
            rounded: !m.description,
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.description ? null : m.icon || null,
            "suffix-icon": n.itemSuffixIcon(m),
            disabled: m.disabled,
            wrap: !!m.description,
            onClick: A((I) => n.onItem(m, y), ["stop"])
          }, {
            default: w(() => [
              m.description ? (l(), u("span", Fr, [
                m.icon ? (l(), u("span", Dr, [
                  g(d, {
                    name: m.icon,
                    size: "sm"
                  }, null, 8, ["name"])
                ])) : f("", !0),
                h("span", Br, b(m.label), 1),
                h("span", Pr, b(m.description), 1)
              ])) : (l(), u(D, { key: 1 }, [
                B(b(m.label), 1)
              ], 64))
            ]),
            _: 2
          }, 1032, ["color", "rounded", "prefix-icon", "suffix-icon", "disabled", "wrap", "onClick"]))
        ], 64))), 128))
      ], 2)
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Bo = /* @__PURE__ */ C(Lr, [["render", Rr]]), Mr = ["sm", "md", "lg"], Or = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Er = {
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
    iconType: J,
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Mr.includes(e)
    }
  },
  computed: {
    ...de(),
    resolvedSize() {
      return j(this.size, { key: "controlSize", defaultSize: "md" });
    },
    iconSize() {
      return Or[this.resolvedSize] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return L("ui-empty", `ui-empty--${this.resolvedSize}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, $r = {
  key: 0,
  class: "ui-empty-icon"
}, Vr = {
  key: 1,
  class: "ui-empty-title"
}, Nr = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Hr = {
  key: 3,
  class: "ui-empty-actions"
};
function Gr(e, t, i, r, s, n) {
  const a = x("ui-icon");
  return l(), u("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), u("div", $r, [
      g(a, {
        name: n.resolvedIcon,
        type: e.resolvedIconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (l(), u("h2", Vr, b(i.title), 1)) : f("", !0),
    i.description ? (l(), u("p", Nr, b(i.description), 1)) : f("", !0),
    e.$slots.default ? (l(), u("div", Hr, [
      p(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Po = /* @__PURE__ */ C(Er, [["render", Gr]]), Wr = q("ui-form-control"), jr = ["vertical", "horizontal"], qr = ["default", "card"], Kr = {
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
     * `vertical`: etiket üstte, kontrol altta, açıklama kontrolün altında.
     * `horizontal`: etiket + açıklama solda, kontrol sağda (Preferences).
     */
    direction: {
      type: String,
      default: "vertical",
      validator: (e) => jr.includes(e)
    },
    /**
     * `direction="horizontal"` iken dar viewport’ta dikey yığılır
     * (`max-width: 1023px` — segment `icon-only="mobile"` ile aynı kırılım).
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
      validator: (e) => qr.includes(e)
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
    const e = Wr(), t = e.slice(16);
    return {
      fallbackId: e,
      fallbackDescId: `ui-form-desc-${t}`
    };
  },
  computed: {
    controlId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : void 0;
    },
    /** Yatay / Preferences: açıklama etiketle solda. */
    descriptionWithLabel() {
      return this.direction === "horizontal";
    },
    hasTextBlock() {
      return !!(this.label || this.$slots.action || this.description && this.descriptionWithLabel);
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
}, Yr = ["data-primary-field"], Ur = {
  key: 0,
  class: "ui-form-row-text"
}, Zr = ["for"], Qr = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Xr = ["id"], Jr = { class: "ui-form-row-control" }, es = ["id"];
function ts(e, t, i, r, s, n) {
  return l(), u("div", z({
    class: ["ui-form-row", n.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    n.hasTextBlock ? (l(), u("div", Ur, [
      i.label || e.$slots.action ? (l(), u("div", {
        key: 0,
        class: S(n.labelLineClass)
      }, [
        i.label ? (l(), u("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, b(i.label), 9, Zr)) : f("", !0),
        e.$slots.action ? (l(), u("div", Qr, [
          p(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description && n.descriptionWithLabel ? (l(), u("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, b(i.description), 9, Xr)) : f("", !0)
    ])) : f("", !0),
    h("div", Jr, [
      p(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      }),
      i.description && !n.descriptionWithLabel ? (l(), u("p", {
        key: 0,
        id: n.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, b(i.description), 9, es)) : f("", !0)
    ])
  ], 16, Yr);
}
const Ro = /* @__PURE__ */ C(Kr, [["render", ts]]), mt = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, is = ["xs", "sm", "md", "lg", "xl"], ns = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, rs = {
  name: "Icon",
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: J,
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => is.includes(e)
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
    ...de("type"),
    faWeightClass() {
      return mt[this.resolvedIconType] || mt.light;
    },
    iconClass() {
      return L(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        ns[this.size],
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
function ss(e, t, i, r, s, n) {
  return l(), u("i", z({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Mo = /* @__PURE__ */ C(rs, [["render", ss]]), as = ["sm", "md", "lg"], ls = ["default", "plain"], os = {
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
      validator: (e) => ls.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || as.includes(e)
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
    return { fallbackId: Pt() };
  },
  computed: {
    resolvedSize() {
      let e = j(this.size, { key: "controlSize", defaultSize: "md" });
      return e !== "md" ? e : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : e;
    },
    rootClass() {
      return L(
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
      return ze(this.$attrs, [
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
}, us = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, ds = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, cs = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], fs = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], hs = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ms = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function ps(e, t, i, r, s, n) {
  const a = x("ui-icon");
  return l(), u("div", {
    class: S([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), u("div", us, [
      p(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (l(), u("span", ds, [
      g(a, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    i.multiline ? (l(), u("textarea", z({
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
    }), null, 16, cs)) : (l(), u("input", z({
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
    }), null, 16, fs)),
    i.suffixIcon ? (l(), u("span", hs, [
      g(a, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (l(), u("div", ms, [
      p(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const Oo = /* @__PURE__ */ C(os, [["render", ps]]), ys = q("ui-phone-number"), gs = ["sm", "md", "lg"], pt = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], bs = {
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
      default: () => pt
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || gs.includes(e)
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
    return { fallbackId: ys() };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : pt;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return j(this.size, { key: "controlSize", defaultSize: "md" });
    },
    rootClass() {
      return L(
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
}, vs = { class: "ui-phone-prepend" }, ks = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ss(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("ui-select"), o = x("ui-input");
  return l(), u("div", {
    class: S(n.rootClass)
  }, [
    g(o, z({
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
      prepend: w(() => [
        h("div", vs, [
          g(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), u("span", ks, b(n.innerCountry), 1)) : (l(), _(d, {
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
const Eo = /* @__PURE__ */ C(bs, [["render", Ss]]), xs = ["numeric", "alphanumeric"], ws = {
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
      validator: (e) => xs.includes(e)
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
        var d, o;
        (d = this.cellEl(a)) == null || d.focus(), (o = this.cellEl(a)) == null || o.select();
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
}, _s = ["aria-label", "data-mask"], Cs = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Ts(e, t, i, r, s, n) {
  return l(), u("div", {
    role: "group",
    "aria-label": n.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    class: S([
      "ui-pin",
      n.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (l(!0), u(D, null, H(i.length, (a, d) => (l(), u("input", {
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
      onInput: (o) => n.onCellInput(d, o),
      onKeydown: (o) => n.onCellKeydown(d, o),
      onFocus: (o) => n.onCellFocus(d),
      onPaste: t[0] || (t[0] = (...o) => n.onPaste && n.onPaste(...o))
    }, null, 40, Cs))), 128))
  ], 10, _s);
}
const $o = /* @__PURE__ */ C(ws, [["render", Ts]]), Is = ["ul", "ol", "div"], zs = ["plain", "bordered", "divided"], Ls = ["compact", "normal", "relaxed"], As = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Is.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => zs.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => Ls.includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "ui-list--compact" : this.density === "relaxed" ? "ui-list--relaxed" : "";
      if (this.variant === "bordered")
        return L("ui-list", "ui-list--bordered", e, this.$attrs.class);
      if (this.variant === "divided")
        return L("ui-list", "ui-list--divided", e, this.$attrs.class);
      const t = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return L("ui-list", t, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function Fs(e, t, i, r, s, n) {
  return l(), _(Te(i.tag), z({
    class: n.listClass,
    role: "list"
  }, n.passthroughAttrs), {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Vo = /* @__PURE__ */ C(As, [["render", Fs]]), Ds = ["start", "center"], Bs = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: J,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => Ds.includes(e)
    }
  },
  computed: {
    resolvedPrefixIconType() {
      return ue(this.prefixIconType);
    },
    itemClass() {
      return L(
        "ui-list-item",
        this.align === "center" ? "ui-list-item--center" : ""
      );
    }
  }
}, Ps = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Rs = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Ms = { class: "ui-list-item-content min-w-0 flex-1" }, Os = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function Es(e, t, i, r, s, n) {
  const a = x("ui-icon");
  return l(), u("li", {
    class: S(n.itemClass),
    role: "listitem"
  }, [
    i.prefixIcon ? (l(), u("span", Ps, [
      g(a, {
        name: i.prefixIcon,
        type: n.resolvedPrefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (l(), u("span", Rs, [
      p(e.$slots, "prefix")
    ])) : f("", !0),
    h("div", Ms, [
      p(e.$slots, "default")
    ]),
    e.$slots.trailing ? (l(), u("div", Os, [
      p(e.$slots, "trailing")
    ])) : f("", !0)
  ], 2);
}
const No = /* @__PURE__ */ C(Bs, [["render", Es]]), $s = [
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
], yt = 10, ye = 450, Vs = 30, Ns = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Hs = {
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
      validator: (e) => $s.includes(e)
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
      layerZIndex: ye,
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
      e ? (this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && M(), this.applyLayerZIndex(), this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      })) : (this.mobileCenteredActive && (this.mobileCenteredLeaving = !0), this.mobileCenteredActive = !1, this.teardownGlobalListeners());
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.portalReady = !0, this.open && (this.applyLayerZIndex(), this.$nextTick(() => {
      this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
    }));
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
    onBackdropDismiss() {
      this.close();
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
      if (typeof document > "u") return ye;
      let e = ye;
      for (const t of document.querySelectorAll(".ui-dialog-root, .ui-sheet-root")) {
        const i = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(i) && (e = Math.max(e, i + Vs));
      }
      return e;
    },
    applyLayerZIndex() {
      this.layerStyle = this.withLayerZIndex({ ...this.layerStyle });
    },
    withLayerZIndex(e) {
      const t = this.resolveLayerZIndex();
      return this.layerZIndex = t, {
        ...e,
        // Panel, mobil backdrop (`layerZIndex`) üzerinde kalsın.
        zIndex: String(t + 1)
      };
    },
    resolveTriggerEl() {
      const e = this.$refs.triggerRef;
      return e ? this.inheritLayout && e.firstElementChild instanceof HTMLElement ? e.firstElementChild : e : null;
    },
    updatePosition() {
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, r = window.innerHeight, s = yt, n = this.resolvedWidth, a = e.getBoundingClientRect(), d = t.offsetWidth || 0, o = Math.ceil(a.width);
      let c;
      n != null ? c = d || 200 : this.matchTriggerWidth ? c = Math.max(d, o) : c = d || 200;
      const y = t.offsetHeight || 120;
      if (M() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const F = i - s * 2, T = Math.min(c, F), V = Math.max(s, Math.round((i - T) / 2)), O = {
          top: `${Math.max(s, Math.round((r - y) / 2))}px`,
          left: `${V}px`
        };
        n != null ? (O.width = n, O.minWidth = n) : (O.width = `${T}px`, this.matchTriggerWidth && (O.minWidth = `${Math.min(o, F)}px`), O.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(O);
        return;
      }
      this.mobileCenteredActive = !1;
      let m, v;
      switch (this.placement) {
        case "right-start":
          m = a.top, v = a.right + s;
          break;
        case "right-end":
          m = a.bottom - y, v = a.right + s;
          break;
        case "left-start":
          m = a.top, v = a.left - s - c;
          break;
        case "left-end":
          m = a.bottom - y, v = a.left - s - c;
          break;
        case "top-start":
          m = a.top - s - y, v = a.left;
          break;
        case "top-end":
          m = a.top - s - y, v = a.right - c;
          break;
        case "top":
          m = a.top - s - y, v = a.left + (a.width - c) / 2;
          break;
        case "bottom-end":
          m = a.bottom + s, v = a.right - c;
          break;
        case "bottom":
          m = a.bottom + s, v = a.left + (a.width - c) / 2;
          break;
        case "bottom-start":
        default:
          m = a.bottom + s, v = a.left;
          break;
      }
      if (this.placement.startsWith("right") && v + c > i - s && (v = a.left - s - c), this.placement.startsWith("left") && v < s && (v = a.right + s), this.placement.startsWith("top") && m < s && (m = a.bottom + s), v + c > i - s && (v = Math.max(s, i - s - c)), v < s && (v = s), this.placement.startsWith("bottom") && m + y > r - s) {
        const F = a.top - s - y;
        F >= s && (m = F);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (m + y > r - s && (m = Math.max(s, r - s - y)), m < s && (m = s));
      const I = this.matchTriggerWidth && n == null ? `${Math.ceil(a.width)}px` : void 0, k = {
        top: `${Math.round(m)}px`,
        left: `${Math.round(v)}px`,
        minWidth: I
      };
      n != null && (k.width = n, k.minWidth = n), this.layerStyle = this.withLayerZIndex(k), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const n = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, d = n.getBoundingClientRect(), o = a.getBoundingClientRect(), c = o.top - d.top, y = o.left - d.left, m = i.getBoundingClientRect(), v = this.layerStyle.top, I = this.layerStyle.left;
      let k = typeof v == "string" && v !== "" ? parseFloat(v) : m.top, F = typeof I == "string" && I !== "" ? parseFloat(I) : m.left;
      Number.isNaN(k) && (k = m.top), Number.isNaN(F) && (F = m.left);
      let T = k - c, V = F - y;
      const R = yt, O = window.innerHeight, ee = window.innerWidth, K = m.height, te = m.width;
      T + K > O - R && (T = Math.max(R, O - R - K)), T < R && (T = R), V + te > ee - R && (V = Math.max(R, ee - R - te)), V < R && (V = R), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(T)}px`,
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
      i != null && i.contains(t) || r != null && r.contains(t) || this.shouldIgnoreOutsideClick(t) || (e.preventDefault(), e.stopPropagation(), this.close());
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
      for (const n of Ns)
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
}, Gs = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Ws = { class: "ui-popover-motion" }, js = {
  key: 0,
  class: "ui-popover-header"
}, qs = { class: "ui-popover-body min-h-0 min-w-0" }, Ks = {
  key: 1,
  class: "ui-popover-footer"
};
function Ys(e, t, i, r, s, n) {
  return l(), u("div", {
    ref: "rootRef",
    class: S([n.rootShellClass, e.$attrs.class])
  }, [
    h("div", {
      ref: "triggerRef",
      class: S(n.triggerShellClass)
    }, [
      p(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    s.portalReady ? (l(), _(oe, {
      key: 0,
      to: "body"
    }, [
      g(ke, {
        name: "ui-overlay-popover-backdrop",
        appear: ""
      }, {
        default: w(() => [
          n.showMobileBackdrop ? (l(), u("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/70",
            style: re(n.backdropStyle),
            "aria-hidden": "true",
            onPointerdown: t[0] || (t[0] = A((...a) => n.onBackdropDismiss && n.onBackdropDismiss(...a), ["stop", "prevent"])),
            onClick: t[1] || (t[1] = A((...a) => n.onBackdropDismiss && n.onBackdropDismiss(...a), ["stop", "prevent"]))
          }, null, 36)) : f("", !0)
        ]),
        _: 1
      }),
      g(ke, {
        name: "ui-overlay-popover",
        appear: "",
        duration: { enter: 220, leave: 180 },
        onBeforeEnter: n.onPopoverBeforeEnter,
        onAfterLeave: n.onPopoverAfterLeave
      }, {
        default: w(() => [
          i.open ? (l(), u("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: re(s.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": n.popoverMobileCenteredAttr ? "" : void 0,
            "data-ui-popover-layer": "",
            onPointerdown: t[3] || (t[3] = A(() => {
            }, ["stop"]))
          }, [
            h("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[2] || (t[2] = (...a) => n.onPanelKeydown && n.onPanelKeydown(...a))
            }, [
              h("div", Ws, [
                e.$slots.header ? (l(), u("div", js, [
                  p(e.$slots, "header", { close: n.close })
                ])) : f("", !0),
                h("div", qs, [
                  p(e.$slots, "content", { close: n.close })
                ]),
                e.$slots.footer ? (l(), u("div", Ks, [
                  p(e.$slots, "footer", { close: n.close })
                ])) : f("", !0)
              ])
            ], 544)
          ], 44, Gs)) : f("", !0)
        ]),
        _: 3
      }, 8, ["onBeforeEnter", "onAfterLeave"])
    ])) : f("", !0)
  ], 2);
}
const Ho = /* @__PURE__ */ C(Hs, [["render", Ys]]), Us = {
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
}, Zs = ["name", "value", "checked"], Qs = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, Xs = { class: "ui-radio-body" }, Js = { class: "ui-radio-label" }, ea = {
  key: 0,
  class: "ui-radio-description"
};
function ta(e, t, i, r, s, n) {
  var d;
  const a = x("ui-icon");
  return l(), u("label", {
    class: S([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onClick: t[1] || (t[1] = (...o) => n.select && n.select(...o)),
    onKeydown: [
      t[2] || (t[2] = G(A((...o) => n.select && n.select(...o), ["prevent"]), ["enter"])),
      t[3] || (t[3] = G(A((...o) => n.select && n.select(...o), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (d = n.uiRadioGroup) == null ? void 0 : d.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...o) => n.select && n.select(...o))
    }, null, 40, Zs),
    h("span", Qs, [
      n.isChecked ? (l(), _(a, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-radio-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    h("span", Xs, [
      h("span", Js, b(i.label), 1),
      i.description ? (l(), u("span", ea, b(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Go = /* @__PURE__ */ C(Us, [["render", ta]]), ia = q("ui-radio-group"), na = ["list", "button", "List", "Button"], ra = ["vertical", "horizontal"], sa = {
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
      validator: (e) => na.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || ra.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: ia() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : this.orientation === "horizontal" ? "horizontal" : "vertical";
    },
    rootClass() {
      return L(
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
}, aa = ["aria-label"];
function la(e, t, i, r, s, n) {
  return l(), u("div", {
    class: S(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    p(e.$slots, "default")
  ], 10, aa);
}
const Wo = /* @__PURE__ */ C(sa, [["render", la]]), oa = {
  name: "Tag",
  components: { Badge: Xi, Tooltip: Nt },
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
}, ua = ["aria-label"];
function da(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("Tooltip"), o = x("Badge");
  return l(), _(o, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Rt({
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: w(() => [
        g(d, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: w(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = A((c) => e.$emit("remove"), ["stop"]))
            }, [
              g(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, ua)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const ca = /* @__PURE__ */ C(oa, [["render", da]]), fa = q("ui-select"), ha = ["field", "inline"], ma = ["sm", "md", "lg"], pa = {
  name: "Select",
  components: { Tag: ca },
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
      validator: (e) => ha.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || ma.includes(e)
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
    const e = fa(), t = e.slice(10);
    return {
      fallbackId: e,
      fallbackListboxId: `ui-select-listbox-${t}`,
      menuOpen: !1,
      filterQuery: "",
      filterDebounceTimer: null
    };
  },
  computed: {
    resolvedSize() {
      let e = j(this.size, { key: "controlSize", defaultSize: "md" });
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
      return L(
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
    listboxId() {
      return this.id != null && this.id !== "" ? `${this.id}-listbox` : this.fallbackListboxId;
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
}, ya = ["name", "value"], ga = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], ba = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, va = {
  key: 1,
  class: "ui-select-values-inner"
}, ka = ["placeholder", "aria-label", "disabled"], Sa = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, xa = { class: "ui-select-field-suffix" }, wa = ["aria-label"], _a = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ca = ["data-size", "placeholder", "aria-label", "onKeydown"], Ta = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], Ia = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, za = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, La = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function Aa(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("Tag"), o = x("ui-skeleton"), c = x("ui-badge"), y = x("ui-button"), m = x("ui-empty"), v = x("ui-popover");
  return l(), u("div", {
    class: S(n.rootClass)
  }, [
    i.name ? (l(), u("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, ya)) : f("", !0),
    g(v, {
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (I) => s.menuOpen = I),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, Rt({
      trigger: w(({ open: I, toggle: k, close: F }) => [
        p(e.$slots, "trigger", {
          open: I,
          toggle: k,
          close: F,
          label: n.displayLabel,
          hasValue: !n.isPlaceholderDisplay
        }, () => [
          h("button", z({
            type: "button",
            id: n.resolvedId,
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline"
            }],
            disabled: n.isDisabled,
            "aria-expanded": I ? "true" : "false",
            "aria-haspopup": n.listboxRole,
            "aria-controls": n.listboxId,
            "aria-describedby": i.ariaDescribedby
          }, n.triggerPassthrough, {
            onClick: (T) => n.onTriggerClick(k)
          }), [
            i.prefixIcon ? (l(), u("span", ba, [
              g(a, {
                name: i.prefixIcon,
                size: "xs"
              }, null, 8, ["name"])
            ])) : f("", !0),
            i.multiple ? (l(), u("div", va, [
              (l(!0), u(D, null, H(n.selectedValues, (T) => (l(), _(d, {
                key: String(T),
                variant: "secondary",
                size: "sm",
                removable: "",
                onRemove: (V) => n.removeValue(T)
              }, {
                default: w(() => [
                  B(b(n.labelForValue(T)), 1)
                ]),
                _: 2
              }, 1032, ["onRemove"]))), 128)),
              n.isFilterable ? Se((l(), u("input", {
                key: 0,
                ref: "searchInput",
                "onUpdate:modelValue": t[0] || (t[0] = (T) => s.filterQuery = T),
                type: "text",
                class: S(["ui-select-values-input", {
                  "ui-select-values-input--solo": !n.selectedValues.length,
                  "ui-select-values-input--open": s.menuOpen
                }]),
                placeholder: n.multipleInputPlaceholder,
                "aria-label": n.resolvedFilterPlaceholder,
                autocomplete: "off",
                disabled: n.isDisabled,
                onClick: t[1] || (t[1] = A((...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T), ["stop"])),
                onFocus: t[2] || (t[2] = (...T) => n.onSearchInputActivate && n.onSearchInputActivate(...T)),
                onKeydown: t[3] || (t[3] = (...T) => n.onSearchKeydown && n.onSearchKeydown(...T))
              }, null, 42, ka)), [
                [He, s.filterQuery]
              ]) : f("", !0)
            ])) : i.loading ? (l(), u("span", Sa, b(n.resolvedLoadingLabel), 1)) : (l(), u("span", z({
              key: 3,
              class: ["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]
            }, n.selectedDisplayStyle ? { style: n.selectedDisplayStyle } : {}, { "data-popover-align": "" }), b(n.displayLabel), 17)),
            h("span", xa, [
              n.showClearButton ? (l(), u("button", {
                key: 0,
                type: "button",
                class: "ui-select-clear",
                "aria-label": n.clearAriaLabel,
                onClick: t[4] || (t[4] = A((...T) => n.clearSelection && n.clearSelection(...T), ["stop"]))
              }, [
                g(a, {
                  name: "xmark",
                  size: "xs"
                })
              ], 8, wa)) : f("", !0),
              h("span", _a, [
                g(a, {
                  name: "chevron-down",
                  size: "xs"
                })
              ])
            ])
          ], 16, ga)
        ])
      ]),
      content: w(({ close: I }) => [
        h("div", {
          ref: "listbox",
          id: n.listboxId,
          class: S(["ui-select-listbox", n.listboxClass]),
          "data-size": n.resolvedSize,
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), u("div", Ia, [
            (l(), u(D, null, H(3, (k) => g(o, {
              key: k,
              variant: "line",
              class: S(k === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), u(D, { key: 1 }, H(n.filteredOptions, (k) => (l(), _(y, {
            key: String(k.value),
            variant: n.isSelected(k) ? "solid" : "ghost",
            color: n.isSelected(k) ? "primary" : "secondary",
            size: n.optionButtonSize,
            fulled: "",
            "text-align": "left",
            role: "option",
            class: S(["ui-select-option", { "ui-select-option--selected": n.isSelected(k) }]),
            "suffix-icon": n.isSelected(k) ? "check" : void 0,
            "aria-selected": n.isSelected(k) ? "true" : "false",
            onClick: (F) => n.pick(k, I)
          }, {
            default: w(() => [
              p(e.$slots, "option", {
                option: k,
                selected: n.isSelected(k)
              }, () => [
                h("span", za, [
                  h("span", z({
                    "data-popover-align": "",
                    class: "min-w-0 truncate"
                  }, { ref_for: !0 }, n.optionDisplayStyle(k) ? { style: n.optionDisplayStyle(k) } : {}), b(k.label), 17),
                  k.badge ? (l(), _(c, {
                    key: 0,
                    variant: k.badgeVariant || "secondary",
                    size: "xs"
                  }, {
                    default: w(() => [
                      B(b(k.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : k.description ? (l(), u("span", La, b(k.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && s.filterQuery ? (l(), _(m, {
            key: 2,
            icon: "magnifying-glass",
            size: n.emptyStateSize,
            title: n.noResultsText
          }, null, 8, ["size", "title"])) : (l(), _(m, {
            key: 3,
            icon: "table-cells",
            size: n.emptyStateSize,
            title: n.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, Ta)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: w(({ close: I }) => [
          Se(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (k) => s.filterQuery = k),
            type: "text",
            class: S(["ui-select-filter-input w-full", n.filterInputClass]),
            "data-size": n.resolvedSize,
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = A(() => {
            }, ["prevent"])),
            onKeydown: [
              G(A((k) => n.pickFirstFiltered(I), ["prevent"]), ["enter"]),
              G(A((k) => I(), ["prevent"]), ["esc"])
            ]
          }, null, 42, Ca), [
            [He, s.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: w((I) => [
          p(e.$slots, "footer", Dt(Bt(I)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const jo = /* @__PURE__ */ C(pa, [["render", Aa]]), Fa = {
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
    iconType: J,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    ...de("iconType"),
    /** Varsayılan `duotone`; `icon-type` verilirse o kullanılır. */
    segmentIconType() {
      return this.iconType != null && this.iconType !== "" ? this.resolvedIconType : "duotone";
    },
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
}, Da = ["aria-checked", "disabled"], Ba = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, Pa = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ra = {
  key: 2,
  class: "ui-segment-label"
}, Ma = {
  key: 3,
  class: "sr-only"
}, Oa = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function Ea(e, t, i, r, s, n) {
  const a = x("ui-icon");
  return l(), u("button", {
    type: "button",
    role: "radio",
    class: S(n.segmentClass),
    "aria-checked": n.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...d) => n.select && n.select(...d))
  }, [
    n.hasPrepend ? (l(), u("span", Ba, [
      p(e.$slots, "prepend")
    ])) : f("", !0),
    i.icon ? (l(), u("span", Pa, [
      g(a, {
        name: i.icon,
        type: n.segmentIconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    n.showLabel ? (l(), u("span", Ra, b(i.label), 1)) : i.label ? (l(), u("span", Ma, b(i.label), 1)) : f("", !0),
    n.hasAppend ? (l(), u("span", Oa, [
      p(e.$slots, "append")
    ])) : f("", !0)
  ], 10, Da);
}
const qo = /* @__PURE__ */ C(Fa, [["render", Ea]]), $a = ["sm", "md", "lg"], Va = ["horizontal", "vertical"];
function Na(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Ha = {
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
      validator: (e) => e == null || $a.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Va.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: Na
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: !0
    },
    /**
     * Yatay taşmada grup içinde kaydırma; seçili segment ortalanır.
     * Dikey yönde etkisiz.
     */
    scrollable: {
      type: Boolean,
      default: !1
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
      return j(this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? M() : !!this.iconOnly;
    },
    isScrollable() {
      return this.scrollable === !0 && this.direction !== "vertical";
    },
    rootClass() {
      return L(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.resolvedIconOnly && "ui-segment-group--icon-only",
        !this.block && this.direction !== "vertical" && "ui-segment-group--inline",
        this.isScrollable && "ui-segment-group--scrollable",
        this.resolvedSize !== "md" && `ui-segment-group--${this.resolvedSize}`,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  watch: {
    modelValue() {
      this.scheduleScrollSelected("smooth");
    },
    scrollable(e) {
      e && this.scheduleScrollSelected("auto");
    }
  },
  mounted() {
    this.scheduleScrollSelected("auto");
  },
  beforeUnmount() {
    this._scrollSelectedRaf != null && (cancelAnimationFrame(this._scrollSelectedRaf), this._scrollSelectedRaf = null);
  },
  methods: {
    scheduleScrollSelected(e = "smooth") {
      this.isScrollable && (this._scrollSelectedRaf != null && cancelAnimationFrame(this._scrollSelectedRaf), this.$nextTick(() => {
        this._scrollSelectedRaf = requestAnimationFrame(() => {
          this._scrollSelectedRaf = null, this.scrollSelectedIntoView(e);
        });
      }));
    },
    scrollSelectedIntoView(e = "smooth") {
      if (!this.isScrollable) return;
      const t = this.$el;
      if (!t || typeof t.querySelector != "function") return;
      const i = t.querySelector(".ui-segment--selected");
      if (!i) return;
      const r = t.clientWidth;
      if (r <= 0) return;
      const s = Math.max(0, t.scrollWidth - r);
      if (s <= 0) return;
      const n = i.offsetLeft + i.offsetWidth / 2, a = Math.min(s, Math.max(0, n - r / 2));
      Math.abs(t.scrollLeft - a) < 1 || (typeof t.scrollTo == "function" ? t.scrollTo({ left: a, behavior: e }) : t.scrollLeft = a);
    }
  }
}, Ga = ["aria-label"];
function Wa(e, t, i, r, s, n) {
  return l(), u("div", z({
    class: n.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, Ga);
}
const Ko = /* @__PURE__ */ C(Ha, [["render", Wa]]), ja = ["line", "circle", "block", "pill"], qa = ["sm", "md", "lg"], Ka = 480, gt = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, bt = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, Ya = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => ja.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => qa.includes(e)
    }
  },
  setup(e) {
    const t = ii(), i = Y(() => !!t.default), r = N(null), s = N(null), n = N(null), a = N(null), d = N(!1), o = N(!1), c = N(!1), y = N(!1), m = N(!1);
    let v = null;
    const I = Y(
      () => e.loading || c.value
    ), k = Y(
      () => e.loading || c.value
    );
    ni(() => {
      m.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), ri(() => {
      F(), T();
    });
    function F() {
      v != null && (clearTimeout(v), v = null);
    }
    si(
      () => e.loading,
      async (K, te) => {
        var Re, Me, Oe, Ee, $e, Ve;
        if (F(), K) {
          const Ne = Math.max(
            ((Re = r.value) == null ? void 0 : Re.offsetHeight) ?? 0,
            ((Me = n.value) == null ? void 0 : Me.scrollHeight) ?? 0,
            ((Oe = s.value) == null ? void 0 : Oe.offsetHeight) ?? 0
          );
          c.value = !1, y.value = !1, d.value = !1, o.value = Ne > 48, a.value = o.value ? Ne : null;
          return;
        }
        if (te !== !0) return;
        if (m.value) {
          c.value = !1, o.value = !1, a.value = null, d.value = !1;
          return;
        }
        const fe = a.value ?? ((Ee = r.value) == null ? void 0 : Ee.offsetHeight) ?? (($e = s.value) == null ? void 0 : $e.offsetHeight) ?? 0;
        c.value = !0, y.value = !1, o.value = !1, d.value = !0, a.value = fe, await Ge();
        const Be = ((Ve = n.value) == null ? void 0 : Ve.scrollHeight) ?? 0, Pe = Be > 0 ? Be : fe;
        if (fe <= 0 && Pe <= 0) {
          T();
          return;
        }
        await Ge(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = Pe, y.value = !0;
          });
        }), v = setTimeout(T, Ka + 40);
      }
    );
    function T() {
      F(), c.value = !1, y.value = !1, o.value = !1, a.value = null, d.value = !1;
    }
    function V(K) {
      K.target === r.value && K.propertyName === "height" && (e.loading || d.value && T());
    }
    const R = Y(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), O = Y(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !o.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && o.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && o.value && !c.value
    })), ee = Y(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !o.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && o.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && y.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: s,
      contentWrapRef: n,
      hostStyle: R,
      heightAnimActive: d,
      heightLocked: o,
      isRevealing: c,
      showPlaceholder: I,
      isBusy: k,
      placeholderClass: O,
      contentWrapClass: ee,
      onHostTransitionEnd: V
    };
  },
  computed: {
    variantClass() {
      return gt[this.variant] || gt.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return bt[this.size] || bt.md;
    },
    skeletonClass() {
      return L(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return L(
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
}, Ua = ["aria-busy"], Za = ["aria-hidden"];
function Qa(e, t, i, r, s, n) {
  return r.hasDefaultSlot ? (l(), u("div", z({
    key: 1,
    ref: "hostRef",
    class: n.hostClass
  }, r.hostStyle ? { style: r.hostStyle, ...n.passthroughAttrs } : n.passthroughAttrs, {
    "aria-busy": r.isBusy ? "true" : void 0,
    onTransitionend: t[0] || (t[0] = (...a) => r.onHostTransitionEnd && r.onHostTransitionEnd(...a))
  }), [
    Se(h("div", {
      ref: "placeholderRef",
      class: S(["ui-skeleton-placeholder", r.placeholderClass]),
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
      [ti, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: S(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        p(e.$slots, "default")
      ], 8, Za)
    ], 2)
  ], 16, Ua)) : (l(), u("div", z({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const Yo = /* @__PURE__ */ C(Ya, [["render", Qa]]), Xa = q("ui-switch"), Ja = {
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
    return { fallbackId: Xa() };
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
}, el = ["id", "aria-checked", "disabled", "aria-describedby"];
function tl(e, t, i, r, s, n) {
  return l(), u("button", z({
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
      class: S(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      h("span", {
        class: S(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, el);
}
const Uo = /* @__PURE__ */ C(Ja, [["render", tl]]), il = {
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
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", i = ((s = this.uiTabs) == null ? void 0 : s.variant) === "segmented" ? "segmented" : "line";
      return L(
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
      var y, m;
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
      let o = i.indexOf(d);
      o === -1 && (o = i.findIndex((v) => v.getAttribute("aria-selected") === "true")), o === -1 && (o = 0);
      let c = o + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (m = (y = i[c]) == null ? void 0 : y.focus) == null || m.call(y);
    }
  }
}, nl = ["aria-label", "aria-orientation"];
function rl(e, t, i, r, s, n) {
  return l(), u("div", z({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...a) => n.onKeydown && n.onKeydown(...a))
  }), [
    p(e.$slots, "default")
  ], 16, nl);
}
const Zo = /* @__PURE__ */ C(il, [["render", rl]]), ge = ["sm", "md", "lg"];
function sl(e) {
  const t = ge.indexOf(e);
  return t < 0 ? "md" : ge[Math.min(t + 1, ge.length - 1)];
}
function al(e, { inlineControls: t = !1, nativeChrome: i = !1 } = {}) {
  const r = j(e, { key: "controlSize", defaultSize: "md" });
  return t ? r : i ? "lg" : sl(r);
}
const ll = ["line", "segmented"];
function ol(e) {
  return typeof e == "boolean" || e === "mobile";
}
const ul = {
  name: "Tabs",
  inheritAttrs: !1,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null
    },
    /** `line` — alt çizgi; `segmented` — düğme kartları (yatay: ikon üstte; dikey: yan ray). */
    variant: {
      type: String,
      default: "line",
      validator: (e) => ll.includes(e)
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
    },
    /**
     * Dikey segmented ray — yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — dar viewport (`max-width: 1023px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: ol
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return { baseId: Pt() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return this.variant === "segmented" ? al(this.size, {
        inlineControls: this.inlineControls,
        nativeChrome: this.nativeChrome
      }) : j(this.size, { key: "controlSize", defaultSize: "md" });
    },
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? M() : !!this.iconOnly;
    },
    rootClass() {
      return L(
        "ui-tabs flex min-w-0 flex-col",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.resolvedIconOnly ? "ui-tabs--icon-only" : "",
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
function dl(e, t, i, r, s, n) {
  return l(), u("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16);
}
const Qo = /* @__PURE__ */ C(ul, [["render", dl]]), cl = {
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
    iconType: J,
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
    ...de(),
    triggerKind() {
      return this.uiTabs && this.uiTabs.variant === "segmented" ? "segmented" : "line";
    },
    tabIconSize() {
      var e;
      return this.triggerKind === "segmented" ? ((e = this.uiTabs) == null ? void 0 : e.resolvedSize) === "sm" ? "md" : "lg" : "xs";
    },
    labelClass() {
      var e;
      return (e = this.uiTabs) != null && e.resolvedIconOnly ? "sr-only" : "";
    },
    /** Varsayılan `duotone`; `icon-type` verilirse o kullanılır. */
    tabIconType() {
      return this.iconType != null && this.iconType !== "" ? this.resolvedIconType : "duotone";
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
      return L(
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
}, fl = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], hl = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, ml = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function pl(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("ui-badge");
  return l(), u("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: S(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : n.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...o) => n.select && n.select(...o))
  }, [
    i.icon ? (l(), u("span", hl, [
      g(a, {
        name: i.icon,
        type: n.tabIconType,
        size: n.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    h("span", {
      class: S([n.labelClass, "ui-tab-trigger-label min-w-0 whitespace-nowrap"])
    }, [
      p(e.$slots, "default", {}, () => [
        B(b(i.label), 1)
      ])
    ], 2),
    n.showBadge ? (l(), u("span", ml, [
      g(d, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: w(() => [
          B(b(n.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, fl);
}
const Xo = /* @__PURE__ */ C(cl, [["render", pl]]), jt = 300, vt = { info: 0, success: 1, warning: 2, error: 3 }, $ = Ft({
  /** @type {ToastItem[]} */
  items: []
});
let ie = 0, W = null, Q = null;
function ce() {
  Q && (clearTimeout(Q), Q = null);
}
function qt() {
  if (W == null) return null;
  const e = $.items.find((t) => t.id === W);
  return !e || e.sealed ? (W = null, null) : e;
}
function Kt() {
  ce();
  const e = qt();
  e && (e.sealed = !0), W = null;
}
function kt() {
  ce(), Q = setTimeout(() => {
    Q = null, Kt();
  }, jt);
}
function ae(e) {
  e._timer && (clearTimeout(e._timer), e._timer = null), e.duration > 0 && (e._timer = setTimeout(() => Ae(e.id), e.duration));
}
function Yt(e, t) {
  const i = vt[e] ?? 0;
  return (vt[t] ?? 0) > i ? t : e;
}
function St(e, t) {
  return {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info"
  };
}
function Jo(e = {}) {
  const t = Date.now(), i = e.group !== !1, r = e.duration !== void 0 ? e.duration : 4500, s = e.variant ?? "info";
  if (i) {
    const o = qt();
    if (o && t - o.lastAt <= jt)
      return ie += 1, o.children.push(St(e, ie)), o.variant = Yt(o.variant, s), o.lastAt = t, r === 0 || o.duration === 0 ? o.duration = 0 : o.duration = Math.max(o.duration, r), ae(o), kt(), o.id;
  }
  Kt(), ie += 1;
  const n = ie, a = St(e, n), d = {
    id: n,
    title: a.title,
    description: a.description,
    variant: s,
    duration: r,
    children: [a],
    sealed: !i,
    expanded: !1,
    lastAt: t,
    _timer: null
  };
  return $.items.push(d), i && (W = n, kt()), ae(d), n;
}
function yl(e, t) {
  const i = $.items.find((r) => r.id === e);
  !i || i.children.length < 2 || (i.expanded = t === !0, i.expanded ? i._timer && (clearTimeout(i._timer), i._timer = null) : ae(i));
}
function gl(e) {
  const t = $.items.find((i) => i.id === e);
  !t || t.children.length < 2 || yl(e, !t.expanded);
}
function Ae(e) {
  const t = $.items.findIndex((r) => r.id === e);
  if (t === -1) return;
  const i = $.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), W === e && (ce(), W = null), $.items.splice(t, 1);
}
function bl(e, t) {
  const i = $.items.find((n) => n.id === e);
  if (!i) return;
  const r = i.children.findIndex((n) => n.id === t);
  if (r === -1) return;
  if (i.children.splice(r, 1), i.children.length === 0) {
    Ae(e);
    return;
  }
  const s = i.children[0];
  i.title = s.title, i.description = s.description, i.variant = i.children.reduce(
    (n, a) => Yt(n, a.variant),
    s.variant
  ), i.children.length < 2 && (i.expanded = !1, ae(i));
}
function eu() {
  ce(), W = null;
  for (const e of $.items)
    e._timer && clearTimeout(e._timer);
  $.items.splice(0);
}
const xt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, wt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, vl = {
  name: "Toast",
  computed: {
    items() {
      return $.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: Ae,
    queueDismissToastChild: bl,
    toggleToastExpanded: gl,
    isGrouped(e) {
      return Array.isArray(e.children) && e.children.length > 1;
    },
    /** Kapalı grupta arkada görünen katman sayısı (1–2). */
    stackSheetCount(e) {
      return !this.isGrouped(e) || e.expanded ? 0 : Math.min(e.children.length - 1, 2);
    },
    deckClasses(e) {
      if (!this.isGrouped(e)) return "ui-toast-deck";
      const t = this.stackSheetCount(e);
      return [
        "ui-toast-deck",
        "ui-toast-deck--grouped",
        t > 0 ? `ui-toast-deck--layers-${t}` : ""
      ].filter(Boolean);
    },
    t(e, t) {
      return typeof this.$t == "function" ? this.$t(e, t) : e === "ui.toast.groupCount" ? `${(t == null ? void 0 : t.count) ?? 0}` : e === "ui.toast.groupHeading" ? `${(t == null ? void 0 : t.count) ?? 0}` : e;
    },
    collapsedTitle(e) {
      var r, s, n;
      if (!this.isGrouped(e))
        return e.title || ((s = (r = e.children) == null ? void 0 : r[0]) == null ? void 0 : s.title) || "";
      const t = e.children.map((a) => String(a.title || "").trim()).filter(Boolean), i = [...new Set(t)];
      return i.length === 1 ? i[0] : ((n = e.children[0]) == null ? void 0 : n.title) || e.title || "";
    },
    collapsedDescription(e) {
      var a, d;
      if (!this.isGrouped(e))
        return e.description || ((d = (a = e.children) == null ? void 0 : a[0]) == null ? void 0 : d.description) || "";
      const t = e.children.length, i = e.children.map((o) => String(o.title || "").trim()).filter(Boolean), r = [...new Set(i)], s = e.children.map((o) => String(o.description || "").trim()).filter(Boolean), n = [...new Set(s)];
      return r.length === 1 && n.length === 1 && n[0] ? `${n[0]} · ${this.t("ui.toast.groupCount", { count: t })}` : this.t("ui.toast.groupCount", { count: t });
    },
    groupHeading(e) {
      return this.t("ui.toast.groupHeading", { count: e.children.length });
    },
    onToastClick(e) {
      this.isGrouped(e) && this.toggleToastExpanded(e.id);
    },
    iconFor(e) {
      return xt[e] || xt.info;
    },
    iconToneClass(e) {
      return wt[e] || wt.info;
    },
    toastClasses(e) {
      return [
        `ui-alert ui-alert--${e.variant ?? "info"} ui-alert--toast`,
        this.isGrouped(e) ? "ui-alert--toast-grouped" : ""
      ].filter(Boolean);
    },
    childToastClasses(e) {
      return [
        `ui-alert ui-alert--${e.variant ?? "info"} ui-alert--toast`,
        "ui-alert--toast-grouped"
      ];
    },
    toastA11y(e) {
      const t = e.variant === "error", i = this.isGrouped(e);
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite",
        ...i ? {
          "aria-expanded": "false",
          tabindex: 0
        } : {}
      };
    },
    childA11y(e) {
      const t = e.variant === "error";
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite",
        "aria-expanded": "true",
        tabindex: 0
      };
    }
  }
}, kl = { class: "ui-toast-host" }, Sl = ["aria-label"], xl = ["onClick", "onKeydown"], wl = { class: "ui-alert-body min-w-0 flex-1" }, _l = {
  key: 0,
  class: "ui-alert-title"
}, Cl = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Tl = ["onClick", "onKeydown"], Il = { class: "ui-alert-body min-w-0 flex-1" }, zl = {
  key: 0,
  class: "ui-alert-title"
}, Ll = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Al(e, t, i, r, s, n) {
  const a = x("ui-icon"), d = x("ui-button");
  return l(), _(oe, { to: "body" }, [
    h("div", kl, [
      g(ai, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: w(() => [
          (l(!0), u(D, null, H(n.items, (o) => (l(), u("div", {
            key: o.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            n.isGrouped(o) && o.expanded ? (l(), u("div", {
              key: 0,
              class: "ui-toast-expanded-stack",
              role: "group",
              "aria-label": n.groupHeading(o)
            }, [
              (l(!0), u(D, null, H(o.children, (c) => (l(), u("div", z({
                key: c.id,
                class: [n.childToastClasses(c), "pointer-events-auto"]
              }, { ref_for: !0 }, n.childA11y(c), {
                onClick: (y) => n.onToastClick(o),
                onKeydown: [
                  G(A((y) => n.onToastClick(o), ["prevent"]), ["enter"]),
                  G(A((y) => n.onToastClick(o), ["prevent"]), ["space"])
                ]
              }), [
                h("span", {
                  class: S(["ui-alert-icon", n.iconToneClass(c.variant)]),
                  "aria-hidden": "true"
                }, [
                  g(a, {
                    name: n.iconFor(c.variant),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                h("div", wl, [
                  c.title ? (l(), u("p", _l, b(c.title), 1)) : f("", !0),
                  c.description ? (l(), u("p", Cl, b(c.description), 1)) : f("", !0)
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
                  onClick: A((y) => n.queueDismissToastChild(o.id, c.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])
              ], 16, xl))), 128))
            ], 8, Sl)) : (l(), u("div", {
              key: 1,
              class: S(n.deckClasses(o))
            }, [
              (l(!0), u(D, null, H(n.stackSheetCount(o), (c) => (l(), u("span", {
                key: `${o.id}-sheet-${c}`,
                class: "ui-toast-deck-sheet",
                "aria-hidden": "true"
              }))), 128)),
              h("div", z({
                class: [n.toastClasses(o), "pointer-events-auto"]
              }, { ref_for: !0 }, n.toastA11y(o), {
                onClick: (c) => n.onToastClick(o),
                onKeydown: [
                  G(A((c) => n.onToastClick(o), ["prevent"]), ["enter"]),
                  G(A((c) => n.onToastClick(o), ["prevent"]), ["space"])
                ]
              }), [
                h("span", {
                  class: S(["ui-alert-icon", n.iconToneClass(o.variant)]),
                  "aria-hidden": "true"
                }, [
                  g(a, {
                    name: n.iconFor(o.variant),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                h("div", Il, [
                  n.collapsedTitle(o) ? (l(), u("p", zl, b(n.collapsedTitle(o)), 1)) : f("", !0),
                  n.collapsedDescription(o) ? (l(), u("p", Ll, b(n.collapsedDescription(o)), 1)) : f("", !0)
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
                  onClick: A((c) => n.queueDismissToast(o.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])
              ], 16, Tl)
            ], 2))
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const tu = /* @__PURE__ */ C(vl, [["render", Al]]), iu = {
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
    toast: {
      groupCount: "{count} notifications",
      groupHeading: "{count} notifications"
    },
    dialog: {
      close: "Close",
      back: "Back"
    },
    guidance: {
      go: "Continue",
      close: "Close"
    },
    intro: {
      skip: "Skip",
      next: "Next",
      finish: "Get started",
      stepsAria: "Introduction",
      carouselRole: "carousel"
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
      tomorrow: "Tomorrow",
      thisWeek: "This week",
      thisYear: "This year ({year})",
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
}, nu = {
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
    toast: {
      /** Daraltılmış grup özeti */
      groupCount: "{count} bildirim",
      /** Açılmış grup başlığı */
      groupHeading: "{count} bildirim"
    },
    dialog: {
      close: "Kapat",
      back: "Geri"
    },
    guidance: {
      go: "Devam",
      close: "Kapat"
    },
    intro: {
      skip: "Geç",
      next: "Sonraki",
      finish: "Başla",
      stepsAria: "Tanıtım",
      carouselRole: "karusel"
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
      tomorrow: "Yarın",
      thisWeek: "Bu hafta",
      thisMonth: "Bu ay ({month})",
      thisYear: "Bu yıl ({year})",
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
}, Fl = "fewui-local-fonts", Dl = "fewui-local-fonts-catalog-preview";
let _t = !1;
const Bl = Object.freeze([
  // Sans — readable body / modern UI
  { value: "Inter", label: "Inter" },
  { value: "Poppins", label: "Poppins" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Nunito", label: "Nunito" },
  { value: "Outfit", label: "Outfit" },
  { value: "Plus Jakarta Sans", label: "Plus Jakarta Sans" },
  { value: "Space Grotesk", label: "Space Grotesk" },
  { value: "Josefin Sans", label: "Josefin Sans" },
  { value: "Oswald", label: "Oswald" },
  { value: "DM Sans", label: "DM Sans" },
  // Serif — editorial / classic hospitality
  { value: "Merriweather", label: "Merriweather", fallback: "serif" },
  { value: "Lora", label: "Lora", fallback: "serif" },
  { value: "Libre Baskerville", label: "Libre Baskerville", fallback: "serif" },
  { value: "Cormorant Garamond", label: "Cormorant Garamond", fallback: "serif" },
  { value: "EB Garamond", label: "EB Garamond", fallback: "serif" },
  { value: "Crimson Pro", label: "Crimson Pro", fallback: "serif" },
  { value: "Spectral", label: "Spectral", fallback: "serif" },
  { value: "Bitter", label: "Bitter", fallback: "serif" },
  // Display — strong headlines
  { value: "Playfair Display", label: "Playfair Display", fallback: "serif" },
  { value: "DM Serif Display", label: "DM Serif Display", fallback: "serif" },
  { value: "Fraunces", label: "Fraunces", fallback: "serif" },
  { value: "Bodoni Moda", label: "Bodoni Moda", fallback: "serif" },
  { value: "Cinzel", label: "Cinzel", fallback: "serif" },
  { value: "Abril Fatface", label: "Abril Fatface", fallback: "serif" },
  { value: "Anton", label: "Anton" },
  // Script — accent / logo-like titles
  { value: "Pacifico", label: "Pacifico", fallback: "cursive" },
  { value: "Great Vibes", label: "Great Vibes", fallback: "cursive" },
  { value: "Dancing Script", label: "Dancing Script", fallback: "cursive" },
  { value: "Caveat", label: "Caveat", fallback: "cursive" },
  { value: "Satisfy", label: "Satisfy", fallback: "cursive" }
]);
function Pl(e, t = "sans-serif") {
  const i = String(e || "").trim();
  if (!i) return "";
  const s = /\s/.test(i) && !/^["'].*["']$/.test(i) ? `"${i.replace(/"/g, "")}"` : i, n = String(t || "sans-serif").trim() || "sans-serif";
  return `${s}, ${n}`;
}
function ru() {
  return Bl.map((e) => ({
    value: e.value,
    label: e.label,
    fontFamily: Pl(e.value, e.fallback)
  }));
}
function su(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function au(e) {
  return null;
}
function lu(e = {}) {
  return "";
}
function Rl(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || Fl)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function ou(e = {}) {
  var t;
  return typeof document > "u" ? null : _t && !e.force ? ((t = document.getElementById(e.id || Dl)) == null ? void 0 : t.getAttribute("href")) || "local" : (_t = !0, "local");
}
const Ml = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Ol = "ui-sans-serif, system-ui, sans-serif", Ct = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Tt = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function El(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function It(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${Ol}`;
}
function $l(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Vl(e) {
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
function Nl(e, t, i) {
  const [r, s, n] = [e, t, i].map((a) => {
    const d = a / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * s + 0.0722 * n;
}
function Hl(e, t = "#ffffff", i = "#0a0a0b") {
  const r = $l(e);
  if (r)
    return Nl(...r) > 0.4 ? i : t;
  const s = Vl(e);
  return s != null && s > 0.72 ? i : t;
}
function Gl(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function Wl(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function jl(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Ct[t] != null ? Ct[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function ql(e) {
  return e == null || e === "" ? null : Tt[e] ? Tt[e] : String(e);
}
function be(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = Wl(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const s = jl(i.backdropBlur ?? i.backdropFilter);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const n = ql(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function zt(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const s = e[i];
  if (s != null && s !== "")
    return String(s);
}
function uu(e = {}, t = {}) {
  const i = El(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = Fe(e);
  for (const [s, n] of Object.entries(r))
    i.style.setProperty(s, n);
  return Rl(e), { ...r };
}
function Fe(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {}, i = e.bodyFontFamily || e.fontFamily;
  i && (t["--font-sans"] = It(i));
  const r = e.headingFontFamily || i;
  if (r && (t["--font-heading"] = It(r)), e.baseColor && typeof e.baseColor == "object")
    for (const d of Ml) {
      const o = e.baseColor[d];
      o != null && o !== "" && (t[`--base-${d}`] = String(o));
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
  for (const [d, o] of s) {
    const c = e[d];
    c != null && c !== "" && (t[o] = String(c));
  }
  const n = zt(e, "primaryColor", "primary");
  n && (t["--primary"] = n, e.primaryForeground || (t["--primary-foreground"] = Hl(n)), e.ring || (t["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const a = zt(e, "secondaryColor", "secondary");
  if (a && (t["--secondary"] = a), be(t, "surface", e.surfaceStyle), be(t, "control", e.controlStyle), be(t, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, o] of Object.entries(e.colors))
      o != null && o !== "" && (t[Gl(d)] = String(o));
  return t;
}
function du(e = {}) {
  const t = Fe(e), i = [], r = Object.entries(t).map(([a, d]) => `${a}: ${d} !important`).join("; ");
  r && i.push(`:root, html, html.dark { ${r} }`);
  const s = t["--font-sans"], n = t["--font-heading"] || s;
  return s && i.push(`html, body { font-family: ${s} !important; }`), n && i.push(`h1, h2, h3, h4, h5, h6 { font-family: ${n} !important; }`), i.join(`
`);
}
function cu(e = {}) {
  const t = Fe(e), i = Object.entries(t).map(([s, n]) => `${s}: ${n}`).join("; ");
  return {
    classAttr: e.mode === "dark" ? "dark" : (e.mode === "light", ""),
    styleAttr: i
  };
}
function Ce(e, t) {
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
const Kl = {
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
}, Yl = {
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
}, Ul = {
  id: "web",
  label: "Web",
  description: "Restta panel — opak yüzeyler, Inter, geniş radius.",
  defaults: Kl,
  preset: Yl,
  css: {
    color: "fewui/themes/web/color.css",
    styles: "fewui/themes/web/styles.css"
  }
}, Zl = {
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
}, Ql = {
  mode: "light",
  fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  headingFontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  bodyFontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  primaryColor: "#1B5CFF",
  primaryForeground: "#ffffff",
  /**
   * Kart / dialog / form — opak grouped yüzey (iPhone + iPad).
   * Cam yalnızca chrome / popover / kontrol (`--ui-ios-glass-*`) üzerinde kalır.
   */
  surfaceStyle: {
    mixFrom: "surface",
    opacity: 100,
    backdropBlur: "0px"
  },
  controlStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "0px"
  },
  inputStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "0px"
  }
}, Xl = {
  id: "liquidglass",
  label: "Liquid Glass",
  description: "iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.",
  defaults: Zl,
  preset: Ql,
  css: {
    color: "fewui/themes/liquidglass/color.css",
    styles: "fewui/themes/liquidglass/styles.css",
    platform: {
      ios: "fewui/themes/liquidglass/platform/ios.css"
    }
  }
}, Jl = {
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
}, eo = {
  mode: "light",
  fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif",
  headingFontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif",
  bodyFontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif",
  primaryColor: "#6750A4",
  primaryForeground: "#ffffff",
  secondaryColor: "#E8DEF8",
  secondaryForeground: "#1D192B",
  /**
   * Kart / dialog / form — opak M3 surface container (cam yok).
   * Chrome / elevation `platform/android.css` + `styles.css`.
   */
  surfaceStyle: {
    mixFrom: "surface",
    opacity: 100,
    backdropBlur: "0px"
  },
  controlStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "0px"
  },
  inputStyle: {
    mixFrom: "control",
    opacity: 100,
    backdropBlur: "0px"
  }
}, to = {
  id: "android",
  label: "Android",
  description: "Material 3 — Roboto, surface containers, filled/tonal buttons, elevated cards.",
  defaults: Jl,
  preset: eo,
  css: {
    color: "fewui/themes/android/color.css",
    styles: "fewui/themes/android/styles.css",
    platform: {
      android: "fewui/themes/android/platform/android.css"
    }
  }
}, io = {
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
}, no = {
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
}, ro = {
  id: "landing",
  label: "Landing",
  description: "Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.",
  defaults: io,
  preset: no,
  css: {
    color: "fewui/themes/landing/color.css",
    styles: "fewui/themes/landing/styles.css"
  }
}, so = {
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
}, ao = {
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
}, lo = {
  id: "fewui",
  label: "Fewui",
  description: "fewui.com — indigo marka, koyu marketing kabuğu.",
  defaults: so,
  preset: ao,
  css: {
    color: "fewui/themes/fewui/color.css",
    styles: "fewui/themes/fewui/styles.css"
  }
}, le = {
  web: Ul,
  liquidglass: Xl,
  android: to,
  landing: ro,
  fewui: lo
}, fu = ["web", "liquidglass", "android", "landing", "fewui"], oo = {
  panel: "web",
  flat: "web",
  landing: "landing"
}, uo = {
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
function De(e = "web") {
  const t = String(e || "web").trim();
  if (le[t])
    return (
      /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */
      t
    );
  const i = oo[t];
  return i && le[i] ? (
    /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */
    i
  ) : "web";
}
function hu(e = "web") {
  return le[De(e)];
}
function ne(e = "web", t = {}) {
  const i = String(e || "web").trim(), r = De(i), s = le[r], n = uo[i] || {}, a = structuredClone(s.preset), d = Ce(Ce(a, n), t), o = Ie(s.defaults);
  return {
    package: s,
    id: r,
    config: d,
    defaults: o
  };
}
function mu(e = "web") {
  return `fewui/themes/${De(e)}.css`;
}
const pu = "few", Ut = "#1B5CFF", yu = "#ffffff", Lt = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: Ut,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function gu() {
  return {
    light: Lt[600],
    dark: Lt[600]
  };
}
function co(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function ve(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function At(e, t, i) {
  return `#${ve(e)}${ve(t)}${ve(i)}`;
}
function fo(e) {
  const t = co(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, r, s] = t, n = At(
    i + (255 - i) * 0.12,
    r + (255 - r) * 0.12,
    s + (255 - s) * 0.12
  ), a = At(
    i + (255 - i) * 0.28,
    r + (255 - r) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: n, brandAccent: a };
}
function bu(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const r = fo(String(i)), s = { ...e, colors: { ...e.colors || {} } };
  return (t.force || !e.accent) && (s.accent = r.accent), (t.force || !s.colors["brand-accent"]) && (s.colors["brand-accent"] = r.brandAccent), s;
}
function vu(e, t = Ut) {
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
const Zt = "fewui-theme-custom-css";
function ho(e, t = Zt) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let r = document.getElementById(t);
  if (!i) {
    r == null || r.remove();
    return;
  }
  r || (r = document.createElement("style"), r.id = t, document.head.appendChild(r)), r.textContent = i;
}
function ku(e = Zt) {
  ho("", e);
}
const Su = {
  get panel() {
    return ne("panel").config;
  },
  get flat() {
    return ne("flat").config;
  },
  get landing() {
    return ne("landing").config;
  }
}, xu = ["panel", "flat", "landing"];
function mo(e = "panel") {
  return structuredClone(ne(e).config);
}
function wu(e, t = {}) {
  return Ce(mo(e), t);
}
export {
  uu as $,
  So as A,
  se as B,
  Io as C,
  Zt as D,
  Po as E,
  Lt as F,
  Bl as G,
  jt as H,
  Mo as I,
  Zo as J,
  Xo as K,
  oo as L,
  Mt as M,
  Qo as N,
  ca as O,
  Eo as P,
  tu as Q,
  Go as R,
  qo as S,
  fu as T,
  Nt as U,
  Et as V,
  hi as W,
  ou as X,
  Rl as Y,
  ho as Z,
  C as _,
  xo as a,
  lu as a0,
  au as a1,
  du as a2,
  cu as a3,
  ku as a4,
  eu as a5,
  L as a6,
  _o as a7,
  q as a8,
  fo as a9,
  su as aA,
  ue as aB,
  De as aC,
  ne as aD,
  wu as aE,
  ko as aF,
  Fe as aG,
  we as aH,
  yl as aI,
  de as aJ,
  gl as aK,
  nu as aL,
  vo as aM,
  bo as aN,
  $t as aO,
  bu as aP,
  Ae as aa,
  iu as ab,
  or as ac,
  Pl as ad,
  Ao as ae,
  gu as af,
  mu as ag,
  hu as ah,
  mo as ai,
  ru as aj,
  J as ak,
  M as al,
  Ie as am,
  Ce as an,
  ze as ao,
  go as ap,
  Jo as aq,
  zo as ar,
  Co as as,
  We as at,
  Ht as au,
  vu as av,
  j as aw,
  fi as ax,
  X as ay,
  ci as az,
  wo as b,
  Xi as c,
  To as d,
  Lo as e,
  Fo as f,
  Do as g,
  Le as h,
  Bo as i,
  pu as j,
  Ut as k,
  yu as l,
  Ro as m,
  Oo as n,
  Vo as o,
  No as p,
  $o as q,
  Ho as r,
  Wo as s,
  Ko as t,
  jo as u,
  Yo as v,
  Uo as w,
  le as x,
  Su as y,
  xu as z
};
//# sourceMappingURL=index-DT13B0MX.js.map
