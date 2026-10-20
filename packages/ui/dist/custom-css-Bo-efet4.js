import { ref as j, reactive as De, inject as di, openBlock as o, createElementBlock as d, mergeProps as L, renderSlot as p, resolveComponent as x, normalizeClass as S, createVNode as b, createCommentVNode as f, createElementVNode as h, toDisplayString as y, createBlock as _, resolveDynamicComponent as Be, withCtx as w, Teleport as me, Transition as Ie, normalizeStyle as le, createTextVNode as B, Fragment as A, Comment as ci, Text as fi, withModifiers as F, renderList as G, normalizeProps as Vt, guardReactiveProps as Nt, useId as jt, withKeys as H, createSlots as Gt, withDirectives as Le, vModelText as Je, vShow as hi, useSlots as mi, computed as K, onMounted as pi, onBeforeUnmount as gi, watch as bi, nextTick as et, TransitionGroup as yi } from "vue";
import { RouterLink as vi } from "vue-router";
const Ht = "(max-width: 1023px)", Wt = j(!1);
function Se() {
  typeof window > "u" || (Wt.value = window.matchMedia(Ht).matches);
}
if (typeof window < "u") {
  Se();
  const e = window.matchMedia(Ht);
  typeof e.addEventListener == "function" ? e.addEventListener("change", Se) : typeof e.addListener == "function" && e.addListener(Se);
}
function R() {
  return Wt.value;
}
function ki() {
  return typeof document > "u" ? !1 : document.documentElement.classList.contains("cap-ios");
}
function Si() {
  return R() || ki();
}
function tt(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = Si();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
const Q = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
};
function Pe(e) {
  if (!e || typeof e != "object")
    return { ...Q };
  const t = { ...Q };
  for (const i of Object.keys(Q)) {
    const n = e[i];
    n != null && n !== "" && (t[i] = n);
  }
  return t;
}
const Oe = Symbol("uiDefaults"), xi = ["solid", "regular", "brands", "light", "duotone", "thin"];
function pe(e, t, i) {
  if (t != null && t !== "")
    return t;
  const n = e == null ? void 0 : e[i];
  return n != null && n !== "" ? (
    /** @type {T} */
    n
  ) : (
    /** @type {T} */
    Q[i]
  );
}
function U(e, t, { key: i = "controlSize", defaultSize: n = "md" } = {}) {
  if (t != null && t !== "")
    return tt(t, { defaultSize: n });
  const s = (e == null ? void 0 : e[i]) ?? (e == null ? void 0 : e.controlSize) ?? n;
  return tt(s, { defaultSize: n });
}
function ge(e, t) {
  const i = pe(e, t, "iconType");
  return xi.includes(i) ? i : "light";
}
const wi = ["solid", "regular", "brands", "light", "duotone", "thin"], re = {
  type: String,
  default: void 0,
  validator: (e) => e == null || wi.includes(e)
};
function be(e = "iconType") {
  return {
    resolvedIconType() {
      return ge(this.uiDefaults, this[e]);
    }
  };
}
function Ol(e, t) {
  const i = De(Pe(t));
  return e.provide(Oe, i), i;
}
function Ml(e, t) {
  Object.assign(e, Pe(t));
}
function Rl() {
  return di(Oe, Q);
}
const O = {
  inject: {
    uiDefaults: {
      from: Oe,
      default: () => Q
    }
  }
}, T = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of t)
    i[n] = s;
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
        for (const [n, s] of Object.entries(i))
          s && t.push(n);
    }
  return t.join(" ");
}
const _i = ["horizontal", "vertical"], Ti = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => _i.includes(e)
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
      return z(
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
}, Ci = ["aria-label"];
function Ii(e, t, i, n, s, r) {
  return o(), d("div", L({
    class: r.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, Ci);
}
const El = /* @__PURE__ */ T(Ti, [["render", Ii], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ActionGroup.vue"]]), Li = ["info", "success", "warning", "danger"], it = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, rt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger"
}, zi = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Durum tonu */
    color: {
      type: String,
      default: "info",
      validator: (e) => Li.includes(e)
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
      return this.color === "danger" || this.color === "warning" ? "alert" : "status";
    },
    resolvedIcon() {
      return this.icon || it[this.color] || it.info;
    },
    iconToneClass() {
      return rt[this.color] || rt.info;
    },
    rootClasses() {
      return z(
        `ui-alert ui-alert--${this.color}`,
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
}, Fi = ["role"], Ai = { class: "ui-alert-body" }, Di = {
  key: 0,
  class: "ui-alert-copy"
}, Bi = {
  key: 0,
  class: "ui-alert-title"
}, Pi = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Oi = {
  key: 1,
  class: "ui-alert-slot"
};
function Mi(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-button");
  return o(), d("div", L({
    class: r.rootClasses,
    role: r.alertRole
  }, r.passthroughAttrs), [
    i.showIcon ? (o(), d(
      "span",
      {
        key: 0,
        class: S(["ui-alert-icon", r.iconToneClass]),
        "aria-hidden": "true"
      },
      [
        p(e.$slots, "icon", {}, () => [
          b(a, {
            name: r.resolvedIcon,
            size: "sm"
          }, null, 8, ["name"])
        ])
      ],
      2
      /* CLASS */
    )) : f("v-if", !0),
    h("div", Ai, [
      i.title || i.description ? (o(), d("div", Di, [
        i.title ? (o(), d(
          "p",
          Bi,
          y(i.title),
          1
          /* TEXT */
        )) : f("v-if", !0),
        i.description ? (o(), d(
          "p",
          Pi,
          y(i.description),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])) : f("v-if", !0),
      e.$slots.default ? (o(), d("div", Oi, [
        p(e.$slots, "default")
      ])) : f("v-if", !0)
    ]),
    i.dismissible ? (o(), _(u, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": r.dismissLabel,
      onClick: r.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0)
  ], 16, Fi);
}
const $l = /* @__PURE__ */ T(zi, [["render", Mi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Alert.vue"]]), Ri = ["xs", "sm", "md", "lg", "xl"], nt = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, Ei = ["circle", "rounded", "square"], $i = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, st = Object.freeze({
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
}), at = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Vi(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return at[t] && (t = at[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Ni(e) {
  var n;
  const t = (e || "").trim();
  if (!t) return "?";
  const i = t.split(/\s+/).filter(Boolean);
  if (i.length >= 2) {
    const s = i[0][0] || "", r = i[i.length - 1][0] || "";
    return `${s}${r}`.toLocaleUpperCase("tr-TR");
  }
  return (((n = i[0]) == null ? void 0 : n[0]) || "?").toLocaleUpperCase("tr-TR");
}
const ji = {
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
      validator: (e) => Ri.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => Ei.includes(e)
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
        nt[this.size] || nt.md,
        $i[this.shape] || "",
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
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
      return Ni(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Vi(e[0]) : "default";
    },
    letterColors() {
      return st[this.colorLetterKey] || st.default;
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
}, Gi = ["src", "alt"], Hi = ["role", "aria-label", "aria-hidden"];
function Wi(e, t, i, n, s, r) {
  return o(), _(Be(r.rootTag), L({
    type: i.interactive ? "button" : void 0,
    class: r.rootClass,
    style: r.rootStyle
  }, r.rootBind, { onClick: r.onRootClick }), {
    default: w(() => [
      i.src && !s.imageFailed ? (o(), d("img", {
        key: 0,
        src: i.src,
        alt: r.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
      }, null, 40, Gi)) : (o(), d("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, y(r.displayInitials), 9, Hi))
    ]),
    _: 1
    /* STABLE */
  }, 16, ["type", "class", "style", "onClick"]);
}
const Vl = /* @__PURE__ */ T(ji, [["render", Wi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Avatar.vue"]]);
let ze = 0;
const Ut = [];
function Nl(e) {
  return ze += 1, `${e}-${ze}`;
}
function q(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return Ut.push(() => {
    t = 0;
  }), i;
}
function jl() {
  ze = 0;
  for (const e of Ut)
    e();
}
const Ui = Symbol("uiPortal"), Me = {
  inject: {
    uiPortalTarget: {
      from: Ui,
      default: null
    }
  },
  computed: {
    portalTarget() {
      return typeof this.uiPortalTarget == "function" && this.uiPortalTarget() || "body";
    }
  }
}, qi = q("ui-tooltip"), Yi = ["top", "bottom", "left", "right"], $ = 8, Ki = {
  name: "Tooltip",
  mixins: [Me],
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
      validator: (e) => Yi.includes(e)
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
      tooltipId: qi(),
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
      const t = e.getBoundingClientRect(), i = $, n = t.left + t.width / 2, s = t.top + t.height / 2;
      let r = this.placement, a = {};
      switch (r) {
        case "bottom":
          a = {
            left: `${n}px`,
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
            left: `${n}px`,
            top: `${t.top - i}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = a, this.$nextTick(() => {
        this.clampToViewport(t, r, i);
      });
    },
    clampToViewport(e, t, i) {
      const n = this.$refs.panelRef;
      if (!n) return;
      const s = window.innerWidth, r = window.innerHeight;
      let a = n.getBoundingClientRect();
      t === "top" && a.top < $ ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, a = n.getBoundingClientRect()) : t === "bottom" && a.bottom > r - $ && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, a = n.getBoundingClientRect());
      let u = 0, l = 0;
      if (a.left < $ ? u = $ - a.left : a.right > s - $ && (u = s - $ - a.right), a.top < $ ? l = $ - a.top : a.bottom > r - $ && (l = r - $ - a.bottom), u === 0 && l === 0) return;
      const c = parseFloat(this.panelStyle.left), g = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(g) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + u}px`,
        top: `${g + l}px`
      });
    }
  }
}, Zi = ["id"], Qi = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function Xi(e, t, i, n, s, r) {
  return o(), d(
    "div",
    {
      ref: "wrapperRef",
      class: "ui-tooltip inline-flex max-w-full min-w-0",
      onMouseenter: t[0] || (t[0] = (...a) => r.onEnter && r.onEnter(...a)),
      onMouseleave: t[1] || (t[1] = (...a) => r.onLeave && r.onLeave(...a)),
      onFocusin: t[2] || (t[2] = (...a) => r.onFocusIn && r.onFocusIn(...a)),
      onFocusout: t[3] || (t[3] = (...a) => r.onFocusOut && r.onFocusOut(...a))
    },
    [
      p(e.$slots, "default"),
      f(" Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. "),
      s.portalReady ? (o(), _(me, {
        key: 0,
        to: e.portalTarget
      }, [
        b(Ie, { name: "ui-tooltip-fade" }, {
          default: w(() => [
            s.open && !i.disabled && r.hasContent ? (o(), d("div", {
              key: 0,
              id: s.tooltipId,
              ref: "panelRef",
              class: "ui-tooltip-panel pointer-events-none fixed",
              style: le(s.panelStyle),
              role: "tooltip"
            }, [
              h("span", Qi, [
                p(e.$slots, "content", {}, () => [
                  B(
                    y(i.label),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ], 12, Zi)) : f("v-if", !0)
          ]),
          _: 3
          /* FORWARDED */
        })
      ], 8, ["to"])) : f("v-if", !0)
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  );
}
const qt = /* @__PURE__ */ T(Ki, [["render", Xi], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Tooltip.vue"]]);
function Re(e, t = ["class", "style"]) {
  const i = new Set(t), n = {};
  for (const [s, r] of Object.entries(e || {}))
    i.has(s) || (n[s] = r);
  return n;
}
const Ji = ["primary", "secondary", "success", "warning", "info", "danger"], er = ["solid", "outline", "muted"], tr = ["xs", "sm", "md", "lg"], Yt = {
  primary: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  success: "border border-transparent bg-success text-success-foreground",
  warning: "border border-transparent bg-warning text-warning-foreground",
  info: "border border-transparent bg-info text-info-foreground",
  danger: "border border-transparent bg-danger text-danger-foreground"
}, ir = {
  primary: "border border-current bg-transparent text-primary",
  secondary: "border border-border bg-transparent text-foreground",
  success: "border border-current bg-transparent text-success",
  warning: "border border-current bg-transparent text-warning",
  info: "border border-current bg-transparent text-info",
  danger: "border border-current bg-transparent text-danger"
}, rr = {
  primary: "border border-transparent bg-primary/12 text-primary",
  secondary: "border border-transparent bg-muted text-muted-foreground",
  success: "border border-transparent bg-success/12 text-success",
  warning: "border border-transparent bg-warning/15 text-warning",
  info: "border border-transparent bg-info/12 text-info",
  danger: "border border-transparent bg-danger/12 text-danger"
}, nr = { solid: Yt, outline: ir, muted: rr }, ot = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, xe = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
};
function sr(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function ar(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * n) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const or = {
  name: "Badge",
  components: { Tooltip: qt },
  inheritAttrs: !1,
  props: {
    /** Ton — `primary | secondary | success | warning | info | danger` */
    /** Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). */
    color: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ji.includes(e)
    },
    /** Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini */
    variant: {
      type: String,
      default: "solid",
      validator: (e) => er.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => tr.includes(e)
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
      validator: (e) => Object.keys(xe).includes(e)
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
    toneClasses() {
      return (nr[this.variant] || Yt)[this.color || (this.variant === "muted" ? "secondary" : "primary")];
    },
    isClickable() {
      return this.clickable || typeof this.$attrs.onClick == "function";
    },
    rootTag() {
      return this.isClickable ? "button" : "span";
    },
    rootAttrs() {
      const e = Re(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? xe[this.maxWidth] || xe[48] : "";
    },
    hasAdornment() {
      return !!(this.prefixIcon || this.suffixIcon || this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return sr(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ar(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return z(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        ot[this.size] || ot.sm,
        this.isClickable ? "ui-badge--clickable" : "",
        !this.normalizedHex && this.toneClasses,
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
}, lr = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, ur = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, dr = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, cr = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function fr(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tooltip");
  return o(), _(u, {
    label: r.tooltipLabel,
    disabled: !r.showTooltip,
    placement: "top"
  }, {
    default: w(() => [
      (o(), _(Be(r.rootTag), L(r.hexBadgeStyle ? { ...r.rootAttrs, style: r.hexBadgeStyle } : r.rootAttrs, { class: r.badgeClasses }), {
        default: w(() => [
          i.prefixIcon ? (o(), d("span", lr, [
            b(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (o(), d("span", ur, [
            p(e.$slots, "prepend")
          ])) : f("v-if", !0),
          h(
            "span",
            {
              ref: "labelRef",
              class: S(["ui-badge-label", [r.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
            },
            [
              p(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          i.suffixIcon ? (o(), d("span", dr, [
            b(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (o(), d("span", cr, [
            p(e.$slots, "append")
          ])) : f("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class"]))
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["label", "disabled"]);
}
const hr = /* @__PURE__ */ T(or, [["render", fr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Badge.vue"]]);
function Fe(e, t, i) {
  if (e && typeof e.$t == "function") {
    const n = e.$t(t);
    if (n != null && n !== "" && n !== t)
      return n;
  }
  return i;
}
const mr = ["sm", "md", "lg"], pr = ["solid", "outline", "ghost", "muted", "link", "nav"], gr = ["primary", "secondary", "input", "warning", "success", "info", "danger"], br = ["button", "submit", "reset"], lt = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, ut = {
  sm: "box-border h-[var(--ui-control-h-sm)] min-h-[var(--ui-control-h-sm)] px-2.5 py-0 text-xs leading-4",
  md: "box-border h-[var(--ui-control-h-md)] min-h-[var(--ui-control-h-md)] px-3 py-0 text-sm leading-5",
  lg: "box-border h-[var(--ui-control-h-lg)] min-h-[var(--ui-control-h-lg)] px-4 py-0 text-base leading-6"
}, dt = {
  sm: "box-border h-auto min-h-[var(--ui-control-h-sm)] items-start px-2.5 py-2 text-xs leading-4",
  md: "box-border h-auto min-h-[var(--ui-control-h-md)] items-start px-3 py-2 text-sm leading-5",
  lg: "box-border h-auto min-h-[var(--ui-control-h-lg)] items-start px-4 py-2 text-base leading-6"
}, ct = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, ft = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[10px] leading-none"
}, yr = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ht = {
  solid: {
    primary: "border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border border-transparent text-foreground shadow-none",
    input: "border-0 shadow-none",
    warning: "border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border-0 bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border-0 bg-info text-info-foreground shadow-none hover:opacity-90",
    danger: "border-0 bg-danger text-danger-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-current bg-transparent text-primary shadow-none hover:bg-primary/10",
    secondary: "border bg-transparent text-foreground shadow-none hover:bg-[var(--input-background)]",
    warning: "shadow-none border border-current bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-current bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-current bg-transparent text-info hover:bg-info/10",
    danger: "shadow-none border border-current bg-transparent text-danger hover:bg-danger/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground",
    danger: "shadow-none border-0 bg-transparent text-danger hover:bg-danger hover:text-danger-foreground"
  },
  /** Yumuşak dolgu — seçili filtre / ikincil vurgu; dolu primary'yi CTA'ya bırakır. */
  muted: {
    primary: "border-0 shadow-none bg-primary/12 text-primary hover:bg-primary/18",
    secondary: "border-0 shadow-none bg-muted text-foreground hover:bg-muted/80",
    warning: "border-0 shadow-none bg-warning/14 text-warning hover:bg-warning/20",
    success: "border-0 shadow-none bg-success/14 text-success hover:bg-success/20",
    info: "border-0 shadow-none bg-info/14 text-info hover:bg-info/20",
    danger: "border-0 shadow-none bg-danger/14 text-danger hover:bg-danger/20"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline",
    danger: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-danger underline-offset-4 hover:underline"
  },
  nav: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent",
    input: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-transparent",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-transparent",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-transparent",
    danger: "shadow-none border-0 bg-transparent text-danger hover:bg-transparent"
  }
}, vr = {
  name: "Button",
  mixins: [O],
  components: { RouterLink: vi },
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
      validator: (e) => br.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => pr.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => gr.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || mr.includes(e)
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
    /** Tam genişlik. */
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
      return this.hasSlotContent();
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    resolvedSize() {
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    themeButtonRounded() {
      return pe(this.uiDefaults, void 0, "buttonRounded");
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : Fe(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-left" : "text-center", t = this.block;
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
      var u, l;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.stack && !e && !t ? i = ft[this.resolvedSize] || ft.md : this.cubed && !e && !t ? i = ct[this.resolvedSize] || ct.md : e ? i = yr[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : this.wrap ? i = dt[this.resolvedSize] || dt.md : i = lt[this.resolvedSize] || lt.md;
      let n = "", s = i;
      !e && !t && (this.wrap ? n = "rounded-xl" : (this.stack || this.rounded || this.cubed || this.themeButtonRounded === "full") && (n = "rounded-full", !this.stack && !this.cubed && (s = ut[this.resolvedSize] || ut.md)));
      const r = ((u = ht[this.variant]) == null ? void 0 : u[this.color]) || ((l = ht.solid) == null ? void 0 : l.primary), a = this.block;
      return [
        "ui-button ui-control font-sans",
        this.stack ? "ui-button--stack" : "",
        this.textAlign === "left" ? "ui-button--align-start" : "",
        r,
        s,
        a ? "ui-button--block w-full" : "",
        n,
        this.isDisabled ? "cursor-not-allowed opacity-50" : "",
        this.hasRouterTo ? "inline-flex items-center" : ""
      ];
    }
  },
  methods: {
    /** Boş metin kabı flex `gap` ile ikonu kaydırır; yalnız ikonlu düğmede basılmaz. */
    hasSlotContent() {
      const e = this.$slots.default;
      return !!e && e().some((t) => this.isRenderableVNode(t));
    },
    isRenderableVNode(e) {
      if (e == null || typeof e != "object" || e.type === ci) return !1;
      if (e.type === fi)
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
      this.$emit("click", e), !e.defaultPrevented && t(e);
    }
  }
}, kr = ["href", "data-variant", "data-color", "data-size", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], Sr = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, xr = {
  key: 0,
  class: "sr-only"
}, wr = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, _r = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Tr = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Cr = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ir = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Lr = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, zr = ["type", "disabled", "data-variant", "data-color", "data-size", "data-loading", "aria-busy"], Fr = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Ar = {
  key: 0,
  class: "sr-only"
}, Dr = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, Br = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Pr = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Or = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Mr = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Rr = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Er(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("RouterLink");
  return r.hasRouterTo ? (o(), _(u, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: w(({ href: l, navigate: c }) => [
      h("a", {
        href: l,
        class: S(r.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-size": r.resolvedSize,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": r.isDisabled ? "true" : void 0,
        tabindex: r.isDisabled ? -1 : void 0,
        onClick: (g) => r.onRouterLinkClick(g, c)
      }, [
        i.loading && r.usesCubedCenterLayout ? (o(), d(
          A,
          { key: 0 },
          [
            h("span", Sr, [
              b(a, {
                size: r.cubedIconSize,
                name: "spinner",
                class: "fa-spin"
              }, null, 8, ["size"])
            ]),
            r.resolvedLoadingText ? (o(), d(
              "span",
              xr,
              y(r.resolvedLoadingText),
              1
              /* TEXT */
            )) : f("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : i.loading ? (o(), d("span", wr, [
          b(a, {
            size: r.inlineIconSize,
            name: "spinner",
            class: "fa-spin",
            "aria-hidden": "true"
          }, null, 8, ["size"]),
          h(
            "span",
            {
              class: S(r.textContentClass)
            },
            y(r.resolvedLoadingText),
            3
            /* TEXT, CLASS */
          )
        ])) : i.stack ? (o(), d(
          A,
          { key: 2 },
          [
            i.prefixIcon ? (o(), d("span", _r, [
              b(a, {
                size: r.stackIconSize,
                name: i.prefixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0),
            r.hasSlotContent() ? (o(), d(
              "span",
              {
                key: 1,
                class: S(r.textContentClass)
              },
              [
                p(e.$slots, "default")
              ],
              2
              /* CLASS */
            )) : f("v-if", !0),
            i.suffixIcon ? (o(), d("span", Tr, [
              b(a, {
                size: r.stackIconSize,
                name: i.suffixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : r.usesCubedCenterLayout ? (o(), d("span", Cr, [
          i.prefixIcon ? (o(), _(a, {
            key: 0,
            size: r.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), _(a, {
            key: 1,
            size: r.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
        ])) : (o(), d(
          A,
          { key: 4 },
          [
            i.prefixIcon ? (o(), d("span", Ir, [
              b(a, {
                size: r.inlineIconSize,
                name: i.prefixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0),
            r.hasSlotContent() ? (o(), d(
              "span",
              {
                key: 1,
                class: S(r.textContentClass)
              },
              [
                p(e.$slots, "default")
              ],
              2
              /* CLASS */
            )) : f("v-if", !0),
            i.suffixIcon ? (o(), d("span", Lr, [
              b(a, {
                size: r.inlineIconSize,
                name: i.suffixIcon
              }, null, 8, ["size", "name"])
            ])) : f("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ], 10, kr)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to"])) : (o(), d("button", {
    key: 1,
    type: i.nativeType,
    disabled: r.isDisabled,
    class: S(r.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    "data-size": r.resolvedSize,
    "data-loading": i.loading ? "true" : void 0,
    "aria-busy": i.loading ? "true" : void 0,
    onClick: t[0] || (t[0] = (...l) => r.onClick && r.onClick(...l))
  }, [
    i.loading && r.usesCubedCenterLayout ? (o(), d(
      A,
      { key: 0 },
      [
        h("span", Fr, [
          b(a, {
            size: r.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ]),
        r.resolvedLoadingText ? (o(), d(
          "span",
          Ar,
          y(r.resolvedLoadingText),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : i.loading ? (o(), d("span", Dr, [
      b(a, {
        size: r.inlineIconSize,
        name: "spinner",
        class: "fa-spin",
        "aria-hidden": "true"
      }, null, 8, ["size"]),
      h(
        "span",
        {
          class: S(r.textContentClass)
        },
        y(r.resolvedLoadingText),
        3
        /* TEXT, CLASS */
      )
    ])) : i.stack ? (o(), d(
      A,
      { key: 2 },
      [
        i.prefixIcon ? (o(), d("span", Br, [
          b(a, {
            size: r.stackIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0),
        r.hasSlotContent() ? (o(), d(
          "span",
          {
            key: 1,
            class: S(r.textContentClass)
          },
          [
            p(e.$slots, "default")
          ],
          2
          /* CLASS */
        )) : f("v-if", !0),
        i.suffixIcon ? (o(), d("span", Pr, [
          b(a, {
            size: r.stackIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : r.usesCubedCenterLayout ? (o(), d("span", Or, [
      i.prefixIcon ? (o(), _(a, {
        key: 0,
        size: r.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), _(a, {
        key: 1,
        size: r.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
    ])) : (o(), d(
      A,
      { key: 4 },
      [
        i.prefixIcon ? (o(), d("span", Mr, [
          b(a, {
            size: r.inlineIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0),
        r.hasSlotContent() ? (o(), d(
          "span",
          {
            key: 1,
            class: S(r.textContentClass)
          },
          [
            p(e.$slots, "default")
          ],
          2
          /* CLASS */
        )) : f("v-if", !0),
        i.suffixIcon ? (o(), d("span", Rr, [
          b(a, {
            size: r.inlineIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])
        ])) : f("v-if", !0)
      ],
      64
      /* STABLE_FRAGMENT */
    ))
  ], 10, zr));
}
const Gl = /* @__PURE__ */ T(vr, [["render", Er], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Button.vue"]]), $r = ["none", "sm", "md"], mt = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Vr = {
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
      validator: (e) => $r.includes(e)
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
  data() {
    return { labelTruncated: !1 };
  },
  mounted() {
    this.syncLabelTitle();
  },
  updated() {
    this.syncLabelTitle();
  },
  methods: {
    /** Kısaltılan başlıkta tam metin, üzerine gelince görünsün. */
    syncLabelTitle() {
      const e = this.$refs.labelRef;
      this.labelTruncated = !!e && e.scrollWidth - e.clientWidth > 1;
    }
  },
  computed: {
    hasLabel() {
      return !!(this.title && this.title.trim() || this.icon);
    },
    rootClass() {
      return ["ui-divider", mt[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        mt[this.spacing] || "",
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
}, Nr = { class: "ui-divider__label" }, jr = ["title"];
function Gr(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return r.hasLabel ? (o(), d(
    "div",
    L({
      key: 1,
      class: r.labeledClass
    }, r.labeledAttrs),
    [
      t[0] || (t[0] = h(
        "span",
        {
          class: "ui-divider__line",
          "aria-hidden": "true"
        },
        null,
        -1
        /* CACHED */
      )),
      h("span", Nr, [
        i.icon ? (o(), _(a, {
          key: 0,
          name: i.icon,
          size: "sm",
          class: "text-muted-foreground"
        }, null, 8, ["name"])) : f("v-if", !0),
        i.title ? (o(), d("span", {
          key: 1,
          ref: "labelRef",
          class: "ui-section-label",
          title: s.labelTruncated ? i.title : void 0
        }, y(i.title), 9, jr)) : f("v-if", !0)
      ]),
      t[1] || (t[1] = h(
        "span",
        {
          class: "ui-divider__line",
          "aria-hidden": "true"
        },
        null,
        -1
        /* CACHED */
      ))
    ],
    16
    /* FULL_PROPS */
  )) : (o(), d(
    "hr",
    L({
      key: 0,
      class: r.rootClass
    }, r.rootAttrs),
    null,
    16
    /* FULL_PROPS */
  ));
}
const Ee = /* @__PURE__ */ T(Vr, [["render", Gr], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Divider.vue"]]), Hr = ["solid", "dashed", "dotted", "double"], pt = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Wr = ["solid", "regular", "brands", "light", "duotone", "thin"], Ur = {
  name: "Card",
  mixins: [O],
  components: { Divider: Ee },
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
      validator: (e) => Hr.includes(e)
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
      validator: (e) => e == null || Wr.includes(e)
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
    /**
     * Başlık (başlık + `#actions`) sabit kalır, gövde kartın içinde kayar — uzun form kartlarında
     * Kaydet görünür kalsın diye. Yükseklik sınırını üst öğe verir (ör. sticky + max-h sarmalayıcı).
     * Varsayılan kapalı.
     */
    stickyHeader: {
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
      return ge(this.uiDefaults, this.iconType);
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
      return pt[this.borderType] || pt.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.stickyHeader && e.push("ui-card--sticky-header"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), this.fullHeight && e.push("ui-card--full-height"), z(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, qr = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Yr = {
  key: 0,
  class: "ui-header-lead"
}, Kr = { class: "ui-header-lead__main" }, Zr = {
  key: 0,
  class: "ui-header-lead__icon"
}, Qr = { class: "ui-header-lead__text" }, Xr = {
  key: 0,
  class: "ui-heading-3"
}, Jr = {
  key: 1,
  class: "ui-text-default"
}, en = {
  key: 0,
  class: "ui-header-lead__actions"
};
function tn(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Divider");
  return o(), d(
    "div",
    L({ class: r.rootClasses }, r.passthroughAttrs),
    [
      e.$slots.toolbar ? (o(), d("div", qr, [
        p(e.$slots, "toolbar")
      ])) : f("v-if", !0),
      r.hasHeaderBlock ? (o(), d(
        "div",
        {
          key: 1,
          class: S(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
        },
        [
          p(e.$slots, "header", {}, () => [
            r.hasDefaultHeader ? (o(), d("div", Yr, [
              h("div", Kr, [
                i.icon ? (o(), d("span", Zr, [
                  b(a, {
                    name: i.icon,
                    type: r.resolvedIconType,
                    size: "lg"
                  }, null, 8, ["name", "type"])
                ])) : f("v-if", !0),
                h("div", Qr, [
                  i.title ? (o(), d(
                    "h3",
                    Xr,
                    y(i.title),
                    1
                    /* TEXT */
                  )) : f("v-if", !0),
                  i.description ? (o(), d(
                    "p",
                    Jr,
                    y(i.description),
                    1
                    /* TEXT */
                  )) : f("v-if", !0)
                ])
              ]),
              e.$slots.append || e.$slots.actions ? (o(), d("div", en, [
                p(e.$slots, "append"),
                p(e.$slots, "actions")
              ])) : f("v-if", !0)
            ])) : f("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : f("v-if", !0),
      r.showHeaderDivider ? (o(), _(u, {
        key: 2,
        spacing: "none",
        class: "!my-0 shrink-0"
      })) : f("v-if", !0),
      e.$slots.default ? (o(), d(
        "div",
        {
          key: 3,
          class: S(["ui-card-body ui-text-default", {
            "ui-card-body--row": i.row,
            "ui-card-body--flush": i.removePadding
          }])
        },
        [
          p(e.$slots, "default")
        ],
        2
        /* CLASS */
      )) : f("v-if", !0),
      e.$slots.footer ? (o(), d(
        "div",
        {
          key: 4,
          class: S(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
        },
        [
          p(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const Hl = /* @__PURE__ */ T(Ur, [["render", tn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Card.vue"]]), P = De({
  open: !1,
  title: "",
  description: "",
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: "",
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: "",
  /** Onay düğmesi tonu (ör. `'danger'` silme) */
  color: "primary",
  /** @type {((value: boolean) => void) | null} */
  _resolve: null
});
function Wl(e = {}) {
  return new Promise((t) => {
    P.title = e.title ?? "", P.description = e.description ?? "", P.confirmLabel = e.confirmLabel ?? "", P.cancelLabel = e.cancelLabel ?? "", P.color = e.color || "primary", P._resolve = t, P.open = !0;
  });
}
function gt(e) {
  const t = P._resolve;
  P.open = !1, P._resolve = null, t && t(!!e);
}
const rn = {
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
        e ? P.open = !0 : P._resolve ? gt(!1) : P.open = !1;
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
      gt(!0);
    }
  }
}, nn = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
function sn(e, t, i, n, s, r) {
  const a = x("ui-button"), u = x("ui-dialog");
  return o(), _(u, {
    open: r.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (l) => r.syncOpen = l),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: r.confirmState.title,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": r.confirmState.title || r.fallbackAriaLabel
  }, {
    footer: w(() => [
      b(a, {
        color: r.confirmState.color,
        block: "",
        size: "lg",
        onClick: r.onConfirm
      }, {
        default: w(() => [
          B(
            y(r.confirmText),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["color", "onClick"])
    ]),
    default: w(() => [
      r.confirmState.description ? (o(), d(
        "p",
        nn,
        y(r.confirmState.description),
        1
        /* TEXT */
      )) : f("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "aria-label"]);
}
const Ul = /* @__PURE__ */ T(rn, [["render", sn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ConfirmDialog.vue"]]);
function Kt(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function Zt(e, t = "tr-TR", i) {
  if (!(e instanceof Date) || Number.isNaN(e.getTime())) return "";
  const n = Kt(t);
  return i === "d MMM yyyy" ? e.toLocaleDateString(n, { day: "numeric", month: "short", year: "numeric" }) : e.toLocaleDateString(n, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function ql(e, t = "tr-TR", i) {
  if (e == null || e === "") return "";
  const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!n) return "";
  const s = Number(n[1]), r = Number(n[2]) - 1, a = Number(n[3]), u = new Date(s, r, a);
  return u.getFullYear() !== s || u.getMonth() !== r || u.getDate() !== a ? "" : Zt(u, t, i);
}
const an = q("ui-datepicker");
function bt(e) {
  return String(e).padStart(2, "0");
}
function Z(e) {
  return `${e.getFullYear()}-${bt(e.getMonth() + 1)}-${bt(e.getDate())}`;
}
function we(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), n = Number(t[2]) - 1, s = Number(t[3]), r = new Date(i, n, s);
  return r.getFullYear() !== i || r.getMonth() !== n || r.getDate() !== s ? null : r;
}
const on = {
  name: "DatePicker",
  mixins: [O],
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
    block: {
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
    const e = we(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: an(),
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
      return we(this.modelValue);
    },
    locale() {
      var e;
      return Kt((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder;
      const e = pe(this.uiDefaults, void 0, "dateFormat");
      return Zt(this.selectedDate, this.locale, e);
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
      const [t, i] = e.split(":").map((s) => Number(s) || 0), n = new Date(Date.now() - (t * 60 + i) * 60 * 1e3);
      return new Date(n.getFullYear(), n.getMonth(), n.getDate());
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
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), n = new Date(e, t, 1 - i.getDay()), s = Z(this.referenceTodayDate), r = [];
      for (let a = 0; a < 42; a += 1) {
        const u = new Date(n.getFullYear(), n.getMonth(), n.getDate() + a), l = u.getMonth() === t && u.getFullYear() === e, c = u.getDate(), g = Z(u), m = `${u.getFullYear()}-${u.getMonth()}-${u.getDate()}`, v = !!(this.selectedDate && g === Z(this.selectedDate)), I = s === g, k = !!(this.minYmd && g < this.minYmd);
        r.push({
          key: m,
          d: c,
          out: !l,
          date: u,
          sel: v,
          today: I,
          inMonth: l,
          disabled: k
        });
      }
      return r;
    }
  },
  watch: {
    modelValue() {
      const e = we(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = Z(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = Z(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = new Date(this.referenceTodayDate);
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const n = Z(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", n), this.$emit("change", n), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, ln = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, un = { class: "mb-3 flex items-center justify-between gap-2" }, dn = { class: "text-sm font-medium tabular-nums text-foreground" }, cn = { class: "ui-datepicker-grid" }, fn = {
  key: 0,
  class: "ui-datepicker-quick"
}, hn = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, mn = { class: "mb-3 flex items-center justify-between gap-2" }, pn = { class: "text-sm font-medium tabular-nums text-foreground" }, gn = { class: "ui-datepicker-grid" }, bn = {
  key: 0,
  class: "ui-datepicker-quick"
};
function yn(e, t, i, n, s, r) {
  const a = x("ui-button"), u = x("ui-popover");
  return o(), d(
    "div",
    {
      class: S([
        "ui-datepicker",
        i.embedded ? "ui-datepicker--embedded" : "",
        !i.embedded && i.block ? "ui-datepicker--block w-full" : "",
        !i.embedded && !i.block ? "w-auto shrink-0" : "",
        i.disabled ? "pointer-events-none opacity-50" : "",
        e.$attrs.class
      ])
    },
    [
      i.embedded ? (o(), d("div", ln, [
        h("div", un, [
          b(a, {
            variant: "ghost",
            color: "primary",
            cubed: "",
            "prefix-icon": "chevron-left",
            "aria-label": "Previous month",
            onClick: t[0] || (t[0] = F((l) => r.shiftMonth(-1), ["stop"]))
          }),
          h(
            "span",
            dn,
            y(r.monthTitle),
            1
            /* TEXT */
          ),
          b(a, {
            variant: "ghost",
            color: "primary",
            cubed: "",
            "prefix-icon": "chevron-right",
            "aria-label": "Next month",
            onClick: t[1] || (t[1] = F((l) => r.shiftMonth(1), ["stop"]))
          })
        ]),
        t[8] || (t[8] = h(
          "div",
          { class: "ui-datepicker-weekdays mb-2" },
          [
            h("span", null, "Su"),
            h("span", null, "Mo"),
            h("span", null, "Tu"),
            h("span", null, "We"),
            h("span", null, "Th"),
            h("span", null, "Fr"),
            h("span", null, "Sa")
          ],
          -1
          /* CACHED */
        )),
        h("div", cn, [
          (o(!0), d(
            A,
            null,
            G(r.calendarCells, (l) => (o(), _(a, {
              key: l.key,
              variant: r.dayVariant(l),
              color: r.dayColor(l),
              size: "sm",
              cubed: "",
              disabled: l.disabled,
              "aria-selected": l.sel ? "true" : "false",
              "aria-disabled": l.disabled ? "true" : void 0,
              "data-outside": l.inMonth ? void 0 : "true",
              "data-today": l.today ? "true" : void 0,
              onClick: (c) => r.pick(l)
            }, {
              default: w(() => [
                B(
                  y(l.d),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        i.showQuick ? (o(), d("div", fn, [
          b(a, {
            type: "button",
            variant: "ghost",
            color: "secondary",
            size: "sm",
            block: "",
            disabled: r.yesterdayQuickDisabled,
            onClick: t[2] || (t[2] = (l) => r.pickQuick("yesterday"))
          }, {
            default: w(() => [
              B(
                y(r.resolvedYesterdayLabel),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          b(a, {
            type: "button",
            variant: "ghost",
            color: "secondary",
            size: "sm",
            block: "",
            disabled: r.todayQuickDisabled,
            onClick: t[3] || (t[3] = (l) => r.pickQuick("today"))
          }, {
            default: w(() => [
              B(
                y(r.resolvedTodayLabel),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          b(a, {
            type: "button",
            variant: "ghost",
            color: "secondary",
            size: "sm",
            block: "",
            disabled: r.tomorrowQuickDisabled,
            onClick: t[4] || (t[4] = (l) => r.pickQuick("tomorrow"))
          }, {
            default: w(() => [
              B(
                y(r.resolvedTomorrowLabel),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ])) : f("v-if", !0)
      ])) : (o(), _(u, {
        key: 1,
        open: s.menuOpen,
        "onUpdate:open": t[7] || (t[7] = (l) => s.menuOpen = l),
        placement: "bottom-start",
        "match-trigger-width": !e.$slots.trigger,
        disabled: i.disabled
      }, {
        trigger: w(({ open: l, toggle: c, close: g }) => [
          p(e.$slots, "trigger", {
            open: l,
            toggle: c,
            close: g
          }, () => [
            b(a, {
              type: "button",
              id: r.resolvedId,
              variant: "solid",
              color: "input",
              block: i.block,
              "text-align": "left",
              "prefix-icon": "calendar",
              disabled: i.disabled,
              "aria-expanded": l ? "true" : "false",
              "aria-haspopup": !0,
              onClick: c
            }, {
              default: w(() => [
                h(
                  "span",
                  {
                    class: S([
                      "min-w-0 flex-1 truncate",
                      r.selectedDate ? "text-foreground" : "text-muted-foreground"
                    ])
                  },
                  y(r.displayText),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["id", "block", "disabled", "aria-expanded", "onClick"])
          ])
        ]),
        content: w(({ close: l }) => [
          h("div", hn, [
            h("div", mn, [
              b(a, {
                variant: "ghost",
                color: "primary",
                cubed: "",
                "prefix-icon": "chevron-left",
                "aria-label": "Previous month",
                onClick: t[5] || (t[5] = F((c) => r.shiftMonth(-1), ["stop"]))
              }),
              h(
                "span",
                pn,
                y(r.monthTitle),
                1
                /* TEXT */
              ),
              b(a, {
                variant: "ghost",
                color: "primary",
                cubed: "",
                "prefix-icon": "chevron-right",
                "aria-label": "Next month",
                onClick: t[6] || (t[6] = F((c) => r.shiftMonth(1), ["stop"]))
              })
            ]),
            t[9] || (t[9] = h(
              "div",
              { class: "ui-datepicker-weekdays mb-2" },
              [
                h("span", null, "Su"),
                h("span", null, "Mo"),
                h("span", null, "Tu"),
                h("span", null, "We"),
                h("span", null, "Th"),
                h("span", null, "Fr"),
                h("span", null, "Sa")
              ],
              -1
              /* CACHED */
            )),
            h("div", gn, [
              (o(!0), d(
                A,
                null,
                G(r.calendarCells, (c) => (o(), _(a, {
                  key: c.key,
                  variant: r.dayVariant(c),
                  color: r.dayColor(c),
                  size: "sm",
                  cubed: "",
                  disabled: c.disabled,
                  "aria-selected": c.sel ? "true" : "false",
                  "aria-disabled": c.disabled ? "true" : void 0,
                  "data-outside": c.inMonth ? void 0 : "true",
                  "data-today": c.today ? "true" : void 0,
                  onClick: (g) => r.pick(c, l)
                }, {
                  default: w(() => [
                    B(
                      y(c.d),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            i.showQuick ? (o(), d("div", bn, [
              b(a, {
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                block: "",
                disabled: r.yesterdayQuickDisabled,
                onClick: (c) => r.pickQuick("yesterday", l)
              }, {
                default: w(() => [
                  B(
                    y(r.resolvedYesterdayLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "onClick"]),
              b(a, {
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                block: "",
                disabled: r.todayQuickDisabled,
                onClick: (c) => r.pickQuick("today", l)
              }, {
                default: w(() => [
                  B(
                    y(r.resolvedTodayLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "onClick"]),
              b(a, {
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                block: "",
                disabled: r.tomorrowQuickDisabled,
                onClick: (c) => r.pickQuick("tomorrow", l)
              }, {
                default: w(() => [
                  B(
                    y(r.resolvedTomorrowLabel),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "onClick"])
            ])) : f("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["open", "match-trigger-width", "disabled"]))
    ],
    2
    /* CLASS */
  );
}
const Yl = /* @__PURE__ */ T(on, [["render", yn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/DatePicker.vue"]]), vn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"])'
].join(","), kn = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function Sn(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function yt(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const n of e.querySelectorAll(t))
    if (Sn(n) && !(i && n.closest(".ui-card-footer")))
      return n;
  return null;
}
function xn(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const n of t)
    i.includes(n) || i.push(n);
  return i;
}
function vt(e, { skipFooter: t = !1 } = {}) {
  const i = yt(e, vn, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const n = yt(e, kn, { skipFooter: t });
  return n ? (n.focus(), !0) : !1;
}
function wn(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && vt(t))
    return !0;
  for (const i of xn(e))
    if (vt(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Qt = "ui-scroll-lock";
let ee = 0, Ae = null;
function _n(e) {
  return (getComputedStyle(e).scrollbarGutter || "").includes("stable");
}
function Tn() {
  if (!(typeof document > "u")) {
    if (ee === 0) {
      const e = document.body, t = document.documentElement, i = Math.max(0, window.innerWidth - t.clientWidth);
      Ae = {
        htmlOverflow: t.style.overflow,
        bodyOverflow: e.style.overflow,
        htmlOverscroll: t.style.overscrollBehavior,
        bodyOverscroll: e.style.overscrollBehavior,
        htmlPaddingRight: t.style.paddingRight
      }, t.classList.add(Qt), t.style.overflow = "hidden", e.style.overflow = "hidden", t.style.overscrollBehavior = "none", e.style.overscrollBehavior = "none", !_n(t) && i > 0 && (t.style.paddingRight = `${i}px`);
    }
    ee += 1;
  }
}
function kt() {
  if (typeof document > "u" || ee <= 0 || (ee -= 1, ee > 0)) return;
  const e = document.body, t = document.documentElement, i = Ae || {
    htmlOverflow: "",
    bodyOverflow: "",
    htmlOverscroll: "",
    bodyOverscroll: "",
    htmlPaddingRight: ""
  };
  t.classList.remove(Qt), t.style.overflow = i.htmlOverflow, e.style.overflow = i.bodyOverflow, t.style.overscrollBehavior = i.htmlOverscroll, e.style.overscrollBehavior = i.bodyOverscroll, t.style.paddingRight = i.htmlPaddingRight, Ae = null;
}
const ue = {
  dialog: 400,
  confirm: 420,
  floating: 450
}, Cn = 10, de = /* @__PURE__ */ new Map();
function In() {
  let e = 0;
  for (const t of de.values()) e = Math.max(e, t.z);
  return e;
}
function Xt(e, t, i) {
  const n = t === "modal" ? ue.dialog : ue.floating, s = Math.max(n, In() + Cn);
  if (de.set(e, { kind: t, z: s, close: i }), t === "modal")
    for (const [r, a] of de)
      r !== e && a.kind === "floating" && a.close();
  return s;
}
function Jt(e) {
  de.delete(e);
}
const Ln = q("ui-dialog"), zn = ["solid", "dashed", "dotted", "double"], St = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Fn = ["solid", "regular", "brands", "light", "duotone", "thin"], An = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], xt = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, Dn = {
  name: "Dialog",
  mixins: [Me, O],
  components: { Divider: Ee },
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
      validator: (e) => e == null || An.includes(e)
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
      validator: (e) => zn.includes(e)
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
    const e = Ln();
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
      /** Katman kaydından gelen z-index */
      rootZIndex: null
    };
  },
  watch: {
    open: {
      immediate: !0,
      handler(e) {
        if (e) {
          if (this.layerMounted || this.layerClosing) return;
          this.rootZIndex = this.resolveRootZIndex(), this.layerMounted = !0, Tn(), this.$nextTick(() => {
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
    this.clearFocusFallback(), this.clearSheetDragListeners(), this.unbindFooterClearanceObserver(), this.layerMounted && kt(), this.releaseLayer(), this.layerMounted = !1, this.layerClosing = !1, this.layerMotionActive = !1;
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
      return St[this.borderType] || St.solid;
    },
    resolvedIconType() {
      return ge(this.uiDefaults, this.iconType);
    },
    resolvedMaxWidth() {
      return pe(this.uiDefaults, this.maxWidth, "dialogMaxWidth");
    },
    maxWidthClass() {
      return xt[this.resolvedMaxWidth] || xt.lg;
    },
    panelClasses() {
      const e = this.border ? z("border", this.borderStyleClass) : z("border-0", "border-transparent");
      return z(
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
      return Re(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : Fe(this, "ui.dialog.close", "Close");
    },
    resolvedBackLabel() {
      return this.backLabel != null && this.backLabel !== "" ? this.backLabel : Fe(this, "ui.dialog.back", "Back");
    },
    rootLayerClasses() {
      return z(
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
    /**
     * Onay diyaloğu her zaman en üsttedir: kayıt üstüne `confirm` tabanı kadar pay eklenir.
     */
    releaseLayer() {
      this.rootZIndex != null && (Jt(this), this.rootZIndex = null);
    },
    resolveRootZIndex() {
      const e = Xt(this, "modal", () => {
      });
      return this.stackLayer !== "confirm" ? e : Math.max(e, ue.confirm) + (e >= ue.confirm ? 10 : 0);
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
      return R() ? {
        enterMs: this.mobileSheetDurationMs(),
        leaveMs: 280,
        snapMs: 280,
        easing: this.mobileSheetEasing(),
        leaveEasing: this.mobileSheetEasing()
      } : {
        enterMs: 300,
        leaveMs: 200,
        snapMs: 220,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        leaveEasing: "cubic-bezier(0.4, 0, 0.2, 1)"
      };
    },
    /** Cam yüzeyde kayma yok, yalnız hafif ölçek (blur her karede yeniden hesaplanır). */
    desktopEnterTransform(e = !1) {
      return e ? "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)" : "translate3d(0, 12px, 0) scale3d(0.96, 0.96, 1)";
    },
    desktopLeaveTransform(e = !1) {
      return e ? "translate3d(0, 0, 0) scale3d(0.98, 0.98, 1)" : "translate3d(0, 8px, 0) scale3d(0.97, 0.97, 1)";
    },
    desktopRestTransform() {
      return "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    },
    /**
     * Blur panelin kendisinde (`.ui-surface`); hareket de aynı öğede olduğu için blur
     * geçiş boyunca görünür kalır. Atada opacity verilmez (backdrop root olur).
     */
    surfaceBackdropBlurPx() {
      if (typeof window > "u" || typeof document > "u") return 0;
      const e = getComputedStyle(document.documentElement).getPropertyValue("--ui-surface-backdrop-blur").trim(), t = Number.parseFloat(e);
      return Number.isFinite(t) ? t : 0;
    },
    /**
     * Desktop cam: kaymasız, daha küçük ölçek.
     * Mobil sheet (alttan kayma) her zaman açık — blur animasyon boyunca sabit.
     */
    preferGlassSafeOverlayMotion() {
      return R() ? !1 : this.surfaceBackdropBlurPx() > 0;
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
      const i = Math.max(e.offsetHeight || 0, 240), n = Math.min(1, Math.max(0, t) / i);
      return Math.max(0, 1 - n);
    },
    clearLayerInlineMotion(e, { preserveMobilePanelTransform: t = !1, preserveBackdrop: i = !1 } = {}) {
      const n = R(), { panel: s, motion: r, backdrop: a } = this.layerMotionParts(e);
      r && (r.style.removeProperty("transform"), r.style.removeProperty("transition")), s && ((!t || !n) && s.style.removeProperty("transform"), s.style.removeProperty("transition"), s.style.removeProperty("opacity")), a && !i && (a.style.removeProperty("opacity"), a.style.removeProperty("transition"));
    },
    waitLayerTransition(e, t, i) {
      if (!e) {
        i();
        return;
      }
      let n = !1;
      const s = () => {
        n || (n = !0, i());
      }, r = (a) => {
        if (a.target !== e) return;
        const u = a.propertyName || "";
        u && u !== "transform" && u !== "opacity" || (e.removeEventListener("transitionend", r), s());
      };
      e.addEventListener("transitionend", r), window.setTimeout(() => {
        e.removeEventListener("transitionend", r), s();
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
      const t = this.layerMotionParts(e), { panel: i, motion: n, backdrop: s } = t, r = R(), a = this.preferGlassSafeOverlayMotion(), { enterMs: u, easing: l } = this.layerMotionTimings(), c = `${u / 1e3}s`, m = `${Math.round(u * 0.72) / 1e3}s`;
      this.layerMotionActive = !0, n && (n.style.removeProperty("transform"), n.style.removeProperty("transition")), s && (s.style.transition = "none", s.style.opacity = "0"), i && (i.style.transition = "none", r ? (i.style.opacity = "1", i.style.transform = "translate3d(0, 100%, 0)") : (i.style.opacity = "0", i.style.transform = this.desktopEnterTransform(a))), e.offsetHeight, this.runOnNextFrames(() => {
        !this.layerMounted || this.layerClosing || (s && (s.style.transition = `opacity ${m} ${l}`, s.style.opacity = "1"), i && (r ? (i.style.transition = `transform ${c} ${l}`, i.style.opacity = "1", i.style.transform = "translate3d(0, 0, 0)") : (i.style.transition = `opacity ${c} ${l}, transform ${c} ${l}`, i.style.opacity = "1", i.style.transform = this.desktopRestTransform())), this.waitLayerTransition(i || s, u + 80, () => {
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
      const n = R(), s = this.preferGlassSafeOverlayMotion(), r = this.layerMotionParts(e);
      this.freezeSheetGeometry(r.panel);
      const a = n && !!((k = r.panel) != null && k.style.transform && r.panel.style.transform !== "none");
      this.clearLayerInlineMotion(e, {
        preserveMobilePanelTransform: n,
        preserveBackdrop: a
      });
      const { panel: u, motion: l, backdrop: c } = r, { leaveMs: g, leaveEasing: m } = this.layerMotionTimings(), v = `${g / 1e3}s`, I = `${Math.round(g * 0.85) / 1e3}s`;
      this.layerMotionActive = !0, l && (l.style.removeProperty("transform"), l.style.removeProperty("transition")), e.offsetHeight, this.runOnNextFrames(() => {
        c && (c.style.transition = `opacity ${I} ${m}`, c.style.opacity = "0"), n && u ? (u.style.transition = `transform ${v} ${m}`, u.style.transform = "translate3d(0, 100%, 0)") : u && (u.style.transition = `opacity ${v} ${m}, transform ${v} ${m}`, u.style.opacity = "0", u.style.transform = this.desktopLeaveTransform(s)), this.waitLayerTransition(u || c, g + 80, i);
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
        this.layerMounted = !1, this.layerClosing = !1, this.releaseLayer(), kt(), this.resetPanelMotionStyles(), this.open && this.$emit("update:open", !1), this.$emit("after-leave");
      });
    },
    resetPanelMotionStyles() {
      const e = this.$refs.layerRef, t = this.$refs.panelRef, i = t == null ? void 0 : t.querySelector(".ui-dialog-motion"), n = e == null ? void 0 : e.querySelector(".ui-dialog-backdrop");
      i && (i.style.removeProperty("transform"), i.style.removeProperty("transition")), t && (t.style.removeProperty("transform"), t.style.removeProperty("transition"), t.style.removeProperty("opacity"), n && (n.style.removeProperty("opacity"), n.style.removeProperty("transition")));
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
        const i = (n) => {
          if (n.target !== t) return;
          const s = n.propertyName || "";
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
      if (R()) return;
      const e = this.$refs.panelRef;
      e && wn(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!R() || e.button !== 0 || this.isSheetDragBlockedTarget(e.target)) return;
      const t = this.$refs.layerRef, i = this.$refs.panelRef;
      if (!t || !i) return;
      e.preventDefault(), this.teardownSheetDrag();
      const n = t.querySelector(".ui-dialog-backdrop"), s = e.clientY, r = i.style.transition, a = (n == null ? void 0 : n.style.transition) || "";
      i.style.transition = "none", n && (n.style.transition = "none");
      const u = (m) => {
        const v = Math.max(0, m.clientY - s);
        i.style.transform = `translate3d(0, ${v}px, 0)`, n && (n.style.opacity = String(this.sheetBackdropOpacityForDrag(i, v)));
      }, l = (m, v) => {
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), v) {
          i.style.removeProperty("transition"), n && n.style.removeProperty("transition"), this.close();
          return;
        }
        const I = `${this.layerMotionTimings().snapMs / 1e3}s`, k = this.mobileSheetEasing();
        i.style.transition = `transform ${I} ${k}`, i.style.transform = "translate3d(0, 0, 0)", n && (n.style.transition = `opacity ${I} ${k}`, n.style.opacity = "1");
        const D = (C) => {
          C.target !== i && C.target !== n || (i.removeEventListener("transitionend", D), n == null || n.removeEventListener("transitionend", D), i.style.transition = r, i.style.removeProperty("transform"), n && (n.style.transition = a, n.style.removeProperty("opacity")));
        };
        i.addEventListener("transitionend", D), n == null || n.addEventListener("transitionend", D);
      }, c = (m) => {
        const v = Math.max(0, m.clientY - s);
        l(v, v >= 72);
      }, g = () => {
        l(0, !1);
      };
      window.addEventListener("pointermove", u), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", g), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", g);
      };
    }
  }
}, Bn = ["aria-labelledby", "aria-describedby", "aria-label"], Pn = { class: "ui-dialog-motion" }, On = { class: "ui-dialog-header__lead" }, Mn = ["id"], Rn = {
  key: 1,
  class: "ui-dialog-header__icon"
}, En = {
  key: 2,
  class: "ui-dialog-header__actions"
}, $n = ["id"], Vn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function Nn(e, t, i, n, s, r) {
  const a = x("ui-button"), u = x("ui-icon"), l = x("Divider");
  return o(), d(
    A,
    null,
    [
      f(" Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. "),
      s.portalReady ? (o(), _(me, {
        key: 0,
        to: e.portalTarget
      }, [
        s.layerMounted ? (o(), d(
          "div",
          {
            key: 0,
            ref: "layerRef",
            class: S(r.rootLayerClasses),
            style: le(r.rootLayerStyle),
            tabindex: "-1",
            role: "presentation",
            onKeydown: t[4] || (t[4] = (...c) => r.onLayerKeydown && r.onLayerKeydown(...c))
          },
          [
            h("div", {
              class: "ui-dialog-backdrop absolute inset-0 bg-black/70",
              "aria-hidden": "true",
              onClick: t[0] || (t[0] = (...c) => r.onBackdrop && r.onBackdrop(...c))
            }),
            h("div", L({
              ref: "panelRef",
              class: r.panelClasses,
              style: r.panelStyle,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1",
              "aria-labelledby": r.ariaLabelledby,
              "aria-describedby": r.ariaDescribedby,
              "aria-label": r.ariaLabelAttr
            }, r.passthroughAttrs, {
              onClick: t[3] || (t[3] = F(() => {
              }, ["stop"]))
            }), [
              h("div", Pn, [
                h(
                  "div",
                  {
                    class: "ui-dialog-sheet-grab shrink-0",
                    onPointerdown: t[1] || (t[1] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
                  },
                  [...t[5] || (t[5] = [
                    h(
                      "div",
                      {
                        class: "ui-dialog-sheet-handle",
                        "aria-hidden": "true"
                      },
                      null,
                      -1
                      /* CACHED */
                    )
                  ])],
                  32
                  /* NEED_HYDRATION */
                ),
                r.hasHeaderBlock ? (o(), d(
                  "div",
                  {
                    key: 0,
                    class: "ui-card-header ui-dialog-sheet-drag shrink-0",
                    onPointerdown: t[2] || (t[2] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
                  },
                  [
                    p(e.$slots, "header", {}, () => [
                      r.hasDefaultHeader ? (o(), d(
                        "div",
                        {
                          key: 0,
                          class: S(["ui-dialog-header", {
                            "ui-dialog-header--no-icon": !i.icon,
                            "ui-dialog-header--with-back": i.withBack,
                            "ui-dialog-header--with-close": i.showClose
                          }])
                        },
                        [
                          i.showClose ? (o(), _(a, {
                            key: 0,
                            type: "button",
                            variant: "solid",
                            color: "secondary",
                            size: "sm",
                            cubed: "",
                            "prefix-icon": "xmark",
                            class: "ui-dialog-header__close",
                            "aria-label": r.resolvedCloseLabel,
                            onClick: r.close
                          }, null, 8, ["aria-label", "onClick"])) : f("v-if", !0),
                          i.withBack ? (o(), _(a, {
                            key: 1,
                            type: "button",
                            variant: "ghost",
                            color: "secondary",
                            size: "md",
                            "prefix-icon": "arrow-left",
                            class: "ui-dialog-header__back",
                            onClick: r.onBack
                          }, {
                            default: w(() => [
                              B(
                                y(r.resolvedBackLabel),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : f("v-if", !0),
                          h("div", On, [
                            r.hasTitle ? (o(), d("h3", {
                              key: 0,
                              id: s.titleId,
                              class: "ui-dialog-header__title ui-heading-2"
                            }, [
                              p(e.$slots, "title", {}, () => [
                                B(
                                  y(i.title),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ], 8, Mn)) : f("v-if", !0),
                            i.icon ? (o(), d("span", Rn, [
                              b(u, {
                                name: i.icon,
                                type: r.resolvedIconType,
                                size: "md"
                              }, null, 8, ["name", "type"])
                            ])) : f("v-if", !0)
                          ]),
                          e.$slots.append || e.$slots.actions ? (o(), d("div", En, [
                            p(e.$slots, "append"),
                            p(e.$slots, "actions")
                          ])) : f("v-if", !0),
                          r.hasDescription ? (o(), d("p", {
                            key: 3,
                            id: s.descriptionId,
                            class: "ui-dialog-header__description ui-text-default"
                          }, [
                            p(e.$slots, "description", {}, () => [
                              B(
                                y(i.description),
                                1
                                /* TEXT */
                              )
                            ])
                          ], 8, $n)) : f("v-if", !0)
                        ],
                        2
                        /* CLASS */
                      )) : f("v-if", !0)
                    ])
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : f("v-if", !0),
                e.$slots.toolbar ? (o(), d("div", Vn, [
                  p(e.$slots, "toolbar")
                ])) : f("v-if", !0),
                r.showHeaderDivider ? (o(), _(l, {
                  key: 2,
                  spacing: "none",
                  class: "!my-0 shrink-0"
                })) : f("v-if", !0),
                e.$slots.default ? (o(), d(
                  "div",
                  {
                    key: 3,
                    class: S(["ui-card-body ui-text-default", {
                      "ui-card-body--row": i.row,
                      "ui-card-body--flush": i.bodyPadding === "none",
                      "ui-card-body--flex": i.bodyLayout === "flex"
                    }])
                  },
                  [
                    p(e.$slots, "default")
                  ],
                  2
                  /* CLASS */
                )) : f("v-if", !0),
                e.$slots.footer ? (o(), d(
                  "div",
                  {
                    key: 4,
                    ref: "footerRef",
                    class: S(["ui-card-footer", { "ui-dialog-footer--transparent": i.footerTransparent }])
                  },
                  [
                    p(e.$slots, "footer")
                  ],
                  2
                  /* CLASS */
                )) : f("v-if", !0)
              ])
            ], 16, Bn)
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        )) : f("v-if", !0)
      ], 8, ["to"])) : f("v-if", !0)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const Kl = /* @__PURE__ */ T(Dn, [["render", Nn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Dialog.vue"]]), jn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Gn = {
  name: "Dropdown",
  components: { Divider: Ee },
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
      validator: (e) => jn.includes(e)
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
    /** Öğe `color` (ör. `'danger'` sil eylemi); seçili öğe `primary`. */
    itemColor(e) {
      return e != null && e.color ? e.color : e != null && e.selected ? "primary" : "secondary";
    },
    itemSuffixIcon(e) {
      return e != null && e.suffixIcon || e != null && e.suffix_icon ? e.suffixIcon || e.suffix_icon : e != null && e.selected ? "check" : null;
    },
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), !e.keepOpen && !e.keep_open && t());
    }
  }
}, Hn = {
  key: 1,
  class: "ui-dropdown-heading",
  role: "presentation"
}, Wn = {
  key: 0,
  class: "ui-dropdown-item-copy"
}, Un = {
  key: 0,
  class: "ui-dropdown-item-icon",
  "aria-hidden": "true"
}, qn = { class: "ui-dropdown-item-label" }, Yn = { class: "ui-dropdown-item-description" };
function Kn(e, t, i, n, s, r) {
  const a = x("Divider"), u = x("ui-icon"), l = x("ui-button"), c = x("ui-popover");
  return o(), _(c, {
    open: r.isOpen,
    placement: i.placement,
    "match-trigger-width": i.matchTriggerWidth,
    block: i.block,
    "inherit-layout": i.inheritLayout,
    "mobile-centered": !1,
    "close-on-outside-click": i.closeOnOutsideClick,
    "close-on-escape": i.closeOnEscape,
    "outside-click-ignore-selector": i.outsideClickIgnoreSelector,
    "onUpdate:open": r.onOpenChange
  }, {
    trigger: w((g) => [
      p(e.$slots, "trigger", Vt(Nt(g)))
    ]),
    content: w(({ close: g }) => [
      h(
        "div",
        {
          class: S(["ui-dropdown-menu p-3", r.hasDescribedItems ? "ui-dropdown-menu--described" : ""]),
          role: "menu",
          onClick: t[0] || (t[0] = F(() => {
          }, ["stop"]))
        },
        [
          p(e.$slots, "before", { close: g }),
          e.$slots.menu ? p(e.$slots, "menu", {
            key: 0,
            close: g
          }) : (o(!0), d(
            A,
            { key: 1 },
            G(i.items, (m, v) => (o(), d(
              A,
              { key: v },
              [
                m.divider ? (o(), _(a, {
                  key: 0,
                  spacing: "sm"
                })) : m.heading ? (o(), d(
                  "span",
                  Hn,
                  y(m.heading),
                  1
                  /* TEXT */
                )) : (o(), _(l, {
                  key: 2,
                  variant: "ghost",
                  color: r.itemColor(m),
                  rounded: !m.description,
                  block: "",
                  "text-align": "left",
                  role: "menuitem",
                  "prefix-icon": m.description ? null : m.icon || null,
                  "suffix-icon": r.itemSuffixIcon(m),
                  disabled: m.disabled,
                  wrap: !!m.description,
                  onClick: F((I) => r.onItem(m, g), ["stop"])
                }, {
                  default: w(() => [
                    m.description ? (o(), d("span", Wn, [
                      m.icon ? (o(), d("span", Un, [
                        b(u, {
                          name: m.icon,
                          size: "sm"
                        }, null, 8, ["name"])
                      ])) : f("v-if", !0),
                      h(
                        "span",
                        qn,
                        y(m.label),
                        1
                        /* TEXT */
                      ),
                      h(
                        "span",
                        Yn,
                        y(m.description),
                        1
                        /* TEXT */
                      )
                    ])) : (o(), d(
                      A,
                      { key: 1 },
                      [
                        B(
                          y(m.label),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["color", "rounded", "prefix-icon", "suffix-icon", "disabled", "wrap", "onClick"]))
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Zl = /* @__PURE__ */ T(Gn, [["render", Kn], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Dropdown.vue"]]), Zn = ["sm", "md", "lg"], Qn = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Xn = {
  name: "Empty",
  mixins: [O],
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
    iconType: re,
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Zn.includes(e)
    }
  },
  computed: {
    ...be(),
    resolvedSize() {
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    iconSize() {
      return Qn[this.resolvedSize] ?? "md";
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
}, Jn = {
  key: 0,
  class: "ui-empty-icon"
}, es = {
  key: 1,
  class: "ui-empty-title"
}, ts = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, is = {
  key: 3,
  class: "ui-empty-actions"
};
function rs(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d(
    "div",
    L({ class: r.rootClass }, r.passthroughAttrs),
    [
      r.resolvedIcon ? (o(), d("div", Jn, [
        b(a, {
          name: r.resolvedIcon,
          type: e.resolvedIconType,
          size: r.iconSize
        }, null, 8, ["name", "type", "size"])
      ])) : f("v-if", !0),
      i.title ? (o(), d(
        "h2",
        es,
        y(i.title),
        1
        /* TEXT */
      )) : f("v-if", !0),
      i.description ? (o(), d(
        "p",
        ts,
        y(i.description),
        1
        /* TEXT */
      )) : f("v-if", !0),
      e.$slots.default ? (o(), d("div", is, [
        p(e.$slots, "default")
      ])) : f("v-if", !0)
    ],
    16
    /* FULL_PROPS */
  );
}
const Ql = /* @__PURE__ */ T(Xn, [["render", rs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Empty.vue"]]), ns = q("ui-form-control"), ss = ["vertical", "horizontal"], as = ["default", "card"], os = {
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
      validator: (e) => ss.includes(e)
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
      validator: (e) => as.includes(e)
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: void 0
    },
    /** Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) */
    primary: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = ns(), t = e.slice(16);
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
}, ls = ["data-primary-field"], us = {
  key: 0,
  class: "ui-form-row-text"
}, ds = ["for"], cs = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, fs = ["id"], hs = { class: "ui-form-row-control" }, ms = ["id"];
function ps(e, t, i, n, s, r) {
  return o(), d("div", L({
    class: ["ui-form-row", r.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    r.hasTextBlock ? (o(), d("div", us, [
      i.label || e.$slots.action ? (o(), d(
        "div",
        {
          key: 0,
          class: S(r.labelLineClass)
        },
        [
          i.label ? (o(), d("label", {
            key: 0,
            class: "ui-form-label min-w-0",
            for: r.controlId
          }, y(i.label), 9, ds)) : f("v-if", !0),
          e.$slots.action ? (o(), d("div", cs, [
            p(e.$slots, "action")
          ])) : f("v-if", !0)
        ],
        2
        /* CLASS */
      )) : f("v-if", !0),
      i.description && r.descriptionWithLabel ? (o(), d("p", {
        key: 1,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, y(i.description), 9, fs)) : f("v-if", !0)
    ])) : f("v-if", !0),
    h("div", hs, [
      p(e.$slots, "default", {
        controlId: r.controlId,
        descriptionId: r.descriptionId
      }),
      i.description && !r.descriptionWithLabel ? (o(), d("p", {
        key: 0,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, y(i.description), 9, ms)) : f("v-if", !0)
    ])
  ], 16, ls);
}
const Xl = /* @__PURE__ */ T(os, [["render", ps], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/FormRow.vue"]]), wt = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, gs = ["xs", "sm", "md", "lg", "xl"], bs = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, ys = {
  name: "Icon",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: re,
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => gs.includes(e)
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
    ...be("type"),
    faWeightClass() {
      return wt[this.resolvedIconType] || wt.light;
    },
    iconClass() {
      return z(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        bs[this.size],
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
function vs(e, t, i, n, s, r) {
  return o(), d(
    "i",
    L({ class: r.iconClass }, r.rootAttrs),
    null,
    16
    /* FULL_PROPS */
  );
}
const Jl = /* @__PURE__ */ T(ys, [["render", vs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Icon.vue"]]), ks = ["sm", "md", "lg"], Ss = ["default", "plain"], xs = {
  name: "Input",
  mixins: [O],
  inheritAttrs: !1,
  props: {
    /** `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Ss.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || ks.includes(e)
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
    return { fallbackId: jt() };
  },
  computed: {
    /**
     * Form satırındaki tüm kontroller aynı yükseklikte kalır; `ui-form-row primary`
     * yalnızca odak hedefidir, boyutu büyütmez. Büyük alan gerekiyorsa `size="lg"` verilir.
     */
    resolvedSize() {
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return Re(this.$attrs, [
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
}, ws = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, _s = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ts = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Cs = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Is = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ls = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function zs(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d(
    "div",
    {
      class: S([r.rootClass, e.$attrs.class])
    },
    [
      e.$slots.prepend ? (o(), d("div", ws, [
        p(e.$slots, "prepend")
      ])) : f("v-if", !0),
      i.prefixIcon ? (o(), d("span", _s, [
        b(a, {
          name: i.prefixIcon,
          size: "xs"
        }, null, 8, ["name"])
      ])) : f("v-if", !0),
      i.multiline ? (o(), d("textarea", L({
        key: 2,
        id: r.resolvedId,
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
      }, r.passthroughAttrs, {
        onInput: t[0] || (t[0] = (...u) => r.onInput && r.onInput(...u)),
        onChange: t[1] || (t[1] = (u) => e.$emit("change", u)),
        onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
        onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
      }), null, 16, Ts)) : (o(), d("input", L({
        key: 3,
        id: r.resolvedId,
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
      }, r.passthroughAttrs, {
        onInput: t[4] || (t[4] = (...u) => r.onInput && r.onInput(...u)),
        onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
        onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
        onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
      }), null, 16, Cs)),
      i.suffixIcon ? (o(), d("span", Is, [
        b(a, {
          name: i.suffixIcon,
          size: "xs"
        }, null, 8, ["name"])
      ])) : f("v-if", !0),
      e.$slots.append ? (o(), d("div", Ls, [
        p(e.$slots, "append")
      ])) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const eu = /* @__PURE__ */ T(xs, [["render", zs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Input.vue"]]), Fs = q("ui-phone-number"), As = ["sm", "md", "lg"], _t = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Ds = {
  name: "Phone",
  mixins: [O],
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
      default: () => _t
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || As.includes(e)
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
    return { fallbackId: Fs() };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : _t;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
      return t;
    }
  }
}, Bs = { class: "ui-phone-prepend" }, Ps = {
  key: 0,
  class: "ui-phone-country-static"
};
function Os(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-select"), l = x("ui-input");
  return o(), d(
    "div",
    {
      class: S(r.rootClass)
    },
    [
      b(l, L({
        id: r.resolvedNumberId,
        modelValue: r.innerNumber,
        "onUpdate:modelValue": t[1] || (t[1] = (c) => r.innerNumber = c),
        type: "tel",
        inputmode: "tel",
        size: r.resolvedSize,
        disabled: i.disabled,
        readonly: i.readonly,
        placeholder: r.resolvedPlaceholder,
        name: i.numberName,
        autocomplete: i.autocomplete,
        maxlength: i.numberMaxlength,
        "aria-describedby": i.ariaDescribedby
      }, r.numberPassthrough, {
        onFocus: t[2] || (t[2] = (c) => e.$emit("focus", c)),
        onBlur: t[3] || (t[3] = (c) => e.$emit("blur", c))
      }), {
        prepend: w(() => [
          h("div", Bs, [
            b(a, {
              name: "phone",
              size: "xs",
              class: "text-muted-foreground",
              "aria-hidden": "true"
            }),
            r.isSingleCountry ? (o(), d(
              "span",
              Ps,
              y(r.innerCountry),
              1
              /* TEXT */
            )) : (o(), _(u, {
              key: 1,
              modelValue: r.innerCountry,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => r.innerCountry = c),
              variant: "inline",
              size: r.resolvedSize,
              options: r.countryOptions,
              disabled: i.disabled,
              "aria-label": r.resolvedCountryAria
            }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
    ],
    2
    /* CLASS */
  );
}
const tu = /* @__PURE__ */ T(Ds, [["render", Os], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Phone.vue"]]), Ms = ["numeric", "alphanumeric"], Rs = {
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
      validator: (e) => Ms.includes(e)
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
      const n = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (n.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const s = [...this.cells];
      let r = e;
      for (const u of n) {
        if (r >= this.length) break;
        s[r] = u, r += 1;
      }
      this.emitValue(s);
      const a = Math.min(r, this.length - 1);
      this.$nextTick(() => {
        var u, l;
        (u = this.cellEl(a)) == null || u.focus(), (l = this.cellEl(a)) == null || l.select();
      });
    },
    onCellKeydown(e, t) {
      var i, n;
      if (t.key === "Backspace") {
        t.preventDefault();
        const s = [...this.cells];
        if (s[e]) {
          s[e] = "", this.emitValue(s);
          return;
        }
        e > 0 && (s[e - 1] = "", this.emitValue(s), this.$nextTick(() => {
          var r;
          (r = this.cellEl(e - 1)) == null || r.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (i = this.cellEl(e - 1)) == null || i.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (n = this.cellEl(e + 1)) == null || n.focus());
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
      const n = Math.min(i.length, this.length) - 1;
      this.$nextTick(() => {
        var r;
        (r = this.cellEl(Math.max(0, n))) == null || r.focus();
      });
    }
  }
}, Es = ["aria-label", "data-mask"], $s = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Vs(e, t, i, n, s, r) {
  return o(), d("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    class: S([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (o(!0), d(
      A,
      null,
      G(i.length, (a, u) => (o(), d("input", {
        key: u,
        ref_for: !0,
        ref: "cells",
        class: "ui-pin-cell",
        value: r.cells[u] ?? "",
        type: r.cellInputType,
        inputmode: i.type === "numeric" ? "numeric" : "text",
        pattern: i.type === "numeric" ? "[0-9]*" : void 0,
        disabled: i.disabled,
        readonly: i.readonly,
        autocomplete: u === 0 ? r.resolvedAutocomplete : "off",
        maxlength: "1",
        "aria-label": r.cellAriaLabel(u),
        onInput: (l) => r.onCellInput(u, l),
        onKeydown: (l) => r.onCellKeydown(u, l),
        onFocus: (l) => r.onCellFocus(u),
        onPaste: t[0] || (t[0] = (...l) => r.onPaste && r.onPaste(...l))
      }, null, 40, $s))),
      128
      /* KEYED_FRAGMENT */
    ))
  ], 10, Es);
}
const iu = /* @__PURE__ */ T(Rs, [["render", Vs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Pin.vue"]]), Ns = ["ul", "ol", "div"], js = ["plain", "bordered", "divided"], Gs = ["compact", "normal", "relaxed"], Hs = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Ns.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => js.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => Gs.includes(e)
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
function Ws(e, t, i, n, s, r) {
  return o(), _(Be(i.tag), L({
    class: r.listClass,
    role: "list"
  }, r.passthroughAttrs), {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class"]);
}
const ru = /* @__PURE__ */ T(Hs, [["render", Ws], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/List.vue"]]), Us = ["start", "center"], qs = {
  name: "ListItem",
  mixins: [O],
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: re,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => Us.includes(e)
    }
  },
  computed: {
    resolvedPrefixIconType() {
      return ge(this.uiDefaults, this.prefixIconType);
    },
    itemClass() {
      return z(
        "ui-list-item",
        this.align === "center" ? "ui-list-item--center" : ""
      );
    }
  }
}, Ys = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Ks = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Zs = { class: "ui-list-item-content min-w-0 flex-1" }, Qs = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function Xs(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d(
    "li",
    {
      class: S(r.itemClass),
      role: "listitem"
    },
    [
      i.prefixIcon ? (o(), d("span", Ys, [
        b(a, {
          name: i.prefixIcon,
          type: r.resolvedPrefixIconType,
          size: "xs",
          class: "ui-list-item-prefix-icon"
        }, null, 8, ["name", "type"])
      ])) : e.$slots.prefix ? (o(), d("span", Ks, [
        p(e.$slots, "prefix")
      ])) : f("v-if", !0),
      h("div", Zs, [
        p(e.$slots, "default")
      ]),
      e.$slots.trailing ? (o(), d("div", Qs, [
        p(e.$slots, "trailing")
      ])) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const nu = /* @__PURE__ */ T(qs, [["render", Xs], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/ListItem.vue"]]), Js = [
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
], Tt = 10, ea = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], ta = {
  name: "Popover",
  mixins: [Me],
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
      validator: (e) => Js.includes(e)
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
      layerZIndex: 0,
      rafId: 0,
      mobileCenteredActive: !1,
      mobileCenteredLeaving: !1,
      portalReady: !1
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCentered && R();
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
      e ? (this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && R(), this.acquireLayer(), this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      })) : (this.mobileCenteredActive && (this.mobileCenteredLeaving = !0), this.mobileCenteredActive = !1, this.releaseLayer(), this.teardownGlobalListeners());
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.portalReady = !0, this.open && (this.acquireLayer(), this.$nextTick(() => {
      this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
    }));
  },
  beforeUnmount() {
    this.releaseLayer(), this.teardownGlobalListeners(), this.rafId && cancelAnimationFrame(this.rafId);
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
    /**
     * Katman kaydına girer. Sonra açılan bir dialog bu kaydı kapatır;
     * z-index açılış anında dondurulduğu için aksi halde popover dialogun arkasında kalır.
     */
    acquireLayer() {
      this.layerZIndex || (this.layerZIndex = Xt(this, "floating", () => this.close()), this.layerStyle = this.withLayerZIndex({ ...this.layerStyle }));
    },
    releaseLayer() {
      this.layerZIndex && (Jt(this), this.layerZIndex = 0);
    },
    withLayerZIndex(e) {
      const t = this.layerZIndex;
      return {
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
      const i = window.innerWidth, n = window.innerHeight, s = Tt, r = this.resolvedWidth, a = e.getBoundingClientRect(), u = t.offsetWidth || 0, l = Math.ceil(a.width);
      let c;
      r != null ? c = u || 200 : this.matchTriggerWidth ? c = Math.max(u, l) : c = u || 200;
      const g = t.offsetHeight || 120;
      if (R() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const D = i - s * 2, C = Math.min(c, D), N = Math.max(s, Math.round((i - C) / 2)), E = {
          top: `${Math.max(s, Math.round((n - g) / 2))}px`,
          left: `${N}px`,
          "--ui-popover-origin": "center center"
        };
        r != null ? (E.width = r, E.minWidth = r) : (E.width = `${C}px`, this.matchTriggerWidth && (E.minWidth = `${Math.min(l, D)}px`), E.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(E);
        return;
      }
      this.mobileCenteredActive = !1;
      let m, v;
      switch (this.placement) {
        case "right-start":
          m = a.top, v = a.right + s;
          break;
        case "right-end":
          m = a.bottom - g, v = a.right + s;
          break;
        case "left-start":
          m = a.top, v = a.left - s - c;
          break;
        case "left-end":
          m = a.bottom - g, v = a.left - s - c;
          break;
        case "top-start":
          m = a.top - s - g, v = a.left;
          break;
        case "top-end":
          m = a.top - s - g, v = a.right - c;
          break;
        case "top":
          m = a.top - s - g, v = a.left + (a.width - c) / 2;
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
      if (this.placement.startsWith("right") && v + c > i - s && (v = a.left - s - c), this.placement.startsWith("left") && v < s && (v = a.right + s), this.placement.startsWith("top") && m < s && (m = a.bottom + s), v + c > i - s && (v = Math.max(s, i - s - c)), v < s && (v = s), this.placement.startsWith("bottom") && m + g > n - s) {
        const D = a.top - s - g;
        D >= s && (m = D);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (m + g > n - s && (m = Math.max(s, n - s - g)), m < s && (m = s));
      const I = this.matchTriggerWidth && r == null ? `${Math.ceil(a.width)}px` : void 0, k = {
        top: `${Math.round(m)}px`,
        left: `${Math.round(v)}px`,
        minWidth: I,
        "--ui-popover-origin": this.resolveMotionOrigin(a, m, v, c, g)
      };
      r != null && (k.width = r, k.minWidth = r), this.layerStyle = this.withLayerZIndex(k), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    /**
     * Açılış ölçeğinin merkezi: tetikleyiciye bakan kenar, tetikleyici ortasına hizalı.
     * Yer değiştiren (flip) panelde de doğru kenardan büyür.
     */
    resolveMotionOrigin(e, t, i, n, s) {
      const r = (l, c) => Math.min(c, Math.max(0, l));
      let a;
      i >= e.right - 1 ? a = 0 : i + n <= e.left + 1 ? a = n : a = r(e.left + e.width / 2 - i, n);
      let u;
      return t >= e.bottom - 1 ? u = 0 : t + s <= e.top + 1 ? u = s : u = r(e.top + e.height / 2 - t, s), `${Math.round(a)}px ${Math.round(u)}px`;
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef, i = this.$refs.layerRef;
      if (!e || !t || !i) return;
      const n = t.querySelector('[role="listbox"]');
      if (n && n.scrollHeight > n.clientHeight + 2)
        return;
      const s = t.querySelector('[role="option"][aria-selected="true"]');
      if (!s) return;
      const r = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, u = r.getBoundingClientRect(), l = a.getBoundingClientRect(), c = l.top - u.top, g = l.left - u.left, m = i.getBoundingClientRect(), v = this.layerStyle.top, I = this.layerStyle.left;
      let k = typeof v == "string" && v !== "" ? parseFloat(v) : m.top, D = typeof I == "string" && I !== "" ? parseFloat(I) : m.left;
      Number.isNaN(k) && (k = m.top), Number.isNaN(D) && (D = m.left);
      let C = k - c, N = D - g;
      const M = Tt, E = window.innerHeight, ne = window.innerWidth, Y = m.height, se = m.width;
      C + Y > E - M && (C = Math.max(M, E - M - Y)), C < M && (C = M), N + se > ne - M && (N = Math.max(M, ne - M - se)), N < M && (N = M), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(C)}px`,
        left: `${Math.round(N)}px`
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
      const t = e.target, i = this.$refs.triggerRef, n = this.$refs.panelRef;
      i != null && i.contains(t) || n != null && n.contains(t) || this.shouldIgnoreOutsideClick(t) || (e.preventDefault(), e.stopPropagation(), this.close());
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
      for (const r of ea)
        if (e.closest(r)) return !0;
      const n = (s = this.outsideClickIgnoreSelector) == null ? void 0 : s.trim();
      return !!(n && e.closest(n));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, ia = ["data-popover-align-active", "data-ui-popover-mobile-centered"], ra = { class: "ui-popover-motion" }, na = {
  key: 0,
  class: "ui-popover-header"
}, sa = { class: "ui-popover-body min-h-0 min-w-0" }, aa = {
  key: 1,
  class: "ui-popover-footer"
};
function oa(e, t, i, n, s, r) {
  return o(), d(
    "div",
    {
      ref: "rootRef",
      class: S([r.rootShellClass, e.$attrs.class])
    },
    [
      h(
        "div",
        {
          ref: "triggerRef",
          class: S(r.triggerShellClass)
        },
        [
          p(e.$slots, "trigger", {
            open: i.open,
            toggle: r.toggle,
            close: r.close
          })
        ],
        2
        /* CLASS */
      ),
      s.portalReady ? (o(), _(me, {
        key: 0,
        to: e.portalTarget
      }, [
        b(Ie, {
          name: "ui-overlay-popover-backdrop",
          appear: ""
        }, {
          default: w(() => [
            r.showMobileBackdrop ? (o(), d(
              "div",
              {
                key: 0,
                class: "ui-popover-backdrop fixed inset-0 bg-black/70",
                style: le(r.backdropStyle),
                "aria-hidden": "true",
                onPointerdown: t[0] || (t[0] = F((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"])),
                onClick: t[1] || (t[1] = F((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"]))
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            )) : f("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        b(Ie, {
          name: "ui-overlay-popover",
          appear: "",
          duration: { enter: 240, leave: 160 },
          onBeforeEnter: r.onPopoverBeforeEnter,
          onAfterLeave: r.onPopoverAfterLeave
        }, {
          default: w(() => [
            i.open ? (o(), d("div", {
              key: 0,
              ref: "layerRef",
              class: "ui-popover-layer fixed",
              style: le(s.layerStyle),
              "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
              "data-ui-popover-mobile-centered": r.popoverMobileCenteredAttr ? "" : void 0,
              "data-ui-popover-layer": "",
              onPointerdown: t[3] || (t[3] = F(() => {
              }, ["stop"]))
            }, [
              h(
                "div",
                {
                  ref: "panelRef",
                  class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
                  role: "dialog",
                  tabindex: "-1",
                  onKeydown: t[2] || (t[2] = (...a) => r.onPanelKeydown && r.onPanelKeydown(...a))
                },
                [
                  h("div", ra, [
                    e.$slots.header ? (o(), d("div", na, [
                      p(e.$slots, "header", { close: r.close })
                    ])) : f("v-if", !0),
                    h("div", sa, [
                      p(e.$slots, "content", { close: r.close })
                    ]),
                    e.$slots.footer ? (o(), d("div", aa, [
                      p(e.$slots, "footer", { close: r.close })
                    ])) : f("v-if", !0)
                  ])
                ],
                544
                /* NEED_HYDRATION, NEED_PATCH */
              )
            ], 44, ia)) : f("v-if", !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["onBeforeEnter", "onAfterLeave"])
      ], 8, ["to"])) : f("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const su = /* @__PURE__ */ T(ta, [["render", oa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Popover.vue"]]), la = {
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
    !this.uiRadioGroup && typeof import.meta < "u" && console.warn("[Radio] Yalnızca <ui-radio-group> içinde kullanılmalı.");
  },
  methods: {
    select() {
      this.uiRadioGroup && this.uiRadioGroup.$emit("update:modelValue", this.value);
    }
  }
}, ua = ["name", "value", "checked"], da = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, ca = { class: "ui-radio-body" }, fa = { class: "ui-radio-label" }, ha = {
  key: 0,
  class: "ui-radio-description"
};
function ma(e, t, i, n, s, r) {
  var u;
  const a = x("ui-icon");
  return o(), d(
    "label",
    {
      class: S([
        "ui-radio",
        `ui-radio--${r.groupVariant}`,
        {
          "ui-radio--checked": r.isChecked,
          "ui-radio--highlight": i.highlight && r.isChecked
        }
      ]),
      onClick: t[1] || (t[1] = (...l) => r.select && r.select(...l)),
      onKeydown: [
        t[2] || (t[2] = H(F((...l) => r.select && r.select(...l), ["prevent"]), ["enter"])),
        t[3] || (t[3] = H(F((...l) => r.select && r.select(...l), ["prevent"]), ["space"]))
      ]
    },
    [
      h("input", {
        type: "radio",
        name: (u = r.uiRadioGroup) == null ? void 0 : u.groupName,
        value: r.stringValue,
        checked: r.isChecked,
        class: "sr-only",
        onChange: t[0] || (t[0] = (...l) => r.select && r.select(...l))
      }, null, 40, ua),
      h("span", da, [
        r.isChecked ? (o(), _(a, {
          key: 0,
          name: "check",
          size: "xs",
          class: "ui-radio-check-icon text-primary-foreground"
        })) : f("v-if", !0)
      ]),
      h("span", ca, [
        h(
          "span",
          fa,
          y(i.label),
          1
          /* TEXT */
        ),
        i.description ? (o(), d(
          "span",
          ha,
          y(i.description),
          1
          /* TEXT */
        )) : f("v-if", !0)
      ])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const au = /* @__PURE__ */ T(la, [["render", ma], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Radio.vue"]]), pa = q("ui-radio-group"), ga = ["list", "button"], ba = ["vertical", "horizontal"], ya = {
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
      validator: (e) => ga.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || ba.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: pa() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
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
}, va = ["aria-label"];
function ka(e, t, i, n, s, r) {
  return o(), d("div", {
    class: S(r.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    p(e.$slots, "default")
  ], 10, va);
}
const ou = /* @__PURE__ */ T(ya, [["render", ka], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/RadioGroup.vue"]]), Sa = {
  name: "Tag",
  components: { Badge: hr, Tooltip: qt },
  props: {
    /** Ton — Badge ile aynı sözlük */
    color: {
      type: String,
      default: "secondary",
      validator: (e) => ["primary", "secondary", "success", "warning", "info", "danger"].includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "outline", "muted"].includes(e)
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
}, xa = ["aria-label"];
function wa(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tooltip"), l = x("Badge");
  return o(), _(l, {
    color: i.color,
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Gt({
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 2
    /* DYNAMIC */
  }, [
    i.removable ? {
      name: "append",
      fn: w(() => [
        b(u, {
          label: r.removeLabel,
          placement: "bottom"
        }, {
          default: w(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": r.removeLabel,
              onClick: t[0] || (t[0] = F((c) => e.$emit("remove"), ["stop"]))
            }, [
              b(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, xa)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["color", "variant", "size"]);
}
const _a = /* @__PURE__ */ T(Sa, [["render", wa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Tag.vue"]]), Ta = q("ui-select"), Ca = ["field", "inline"], Ia = ["sm", "md", "lg"], La = {
  name: "Select",
  mixins: [O],
  components: { Tag: _a },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => Ca.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ia.includes(e)
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
    block: {
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
    /** Sunucu tarafı arama — liste yerel filtrelenmez; `filter-change` yayınlanır */
    remoteFilter: {
      type: Boolean,
      default: !1
    },
    /** Liste açık durumu — `v-model:open` ile kontrol edilebilir */
    open: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change", "update:open", "filter-change"],
  data() {
    const e = Ta(), t = e.slice(10);
    return {
      fallbackId: e,
      fallbackListboxId: `ui-select-listbox-${t}`,
      menuOpen: this.open ?? !1,
      filterQuery: "",
      filterDebounceTimer: null
    };
  },
  computed: {
    /**
     * Form satırındaki tüm kontroller aynı yükseklikte kalır; `ui-form-row primary`
     * yalnızca odak hedefidir, boyutu büyütmez. Büyük alan gerekiyorsa `size="lg"` verilir.
     */
    resolvedSize() {
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
        !e && this.block && "ui-select--block w-full",
        !e && !this.block && "w-auto shrink-0",
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
        const i = String(t.label), n = String(t.value);
        return i !== e && n !== e;
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
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
        this.$emit("filter-change", String(e ?? "").trim());
      }, 300));
    },
    open(e) {
      e != null && e !== this.menuOpen && (this.menuOpen = e);
    },
    menuOpen(e) {
      if (e !== this.open && this.$emit("update:open", e), !e) {
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
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((n) => String(n) === String(e.value));
      i >= 0 ? t.splice(i, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((n) => String(n) === String(e));
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
}, za = ["name", "value"], Fa = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Aa = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Da = {
  key: 1,
  class: "ui-select-values-inner"
}, Ba = ["placeholder", "aria-label", "disabled"], Pa = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Oa = { class: "ui-select-field-suffix" }, Ma = ["aria-label"], Ra = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ea = ["data-size", "placeholder", "aria-label", "onKeydown"], $a = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], Va = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Na = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, ja = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function Ga(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tag"), l = x("ui-skeleton"), c = x("ui-badge"), g = x("ui-button"), m = x("ui-empty"), v = x("ui-popover");
  return o(), d(
    "div",
    {
      class: S(r.rootClass)
    },
    [
      i.name ? (o(), d("input", {
        key: 0,
        type: "hidden",
        name: i.name,
        value: r.hiddenFieldValue
      }, null, 8, za)) : f("v-if", !0),
      b(v, {
        open: s.menuOpen,
        "onUpdate:open": t[7] || (t[7] = (I) => s.menuOpen = I),
        placement: "bottom-start",
        "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
        disabled: r.isDisabled,
        "align-selected-option-to-trigger": r.alignSelectedToTrigger
      }, Gt({
        trigger: w(({ open: I, toggle: k, close: D }) => [
          p(e.$slots, "trigger", {
            open: I,
            toggle: k,
            close: D,
            label: r.displayLabel,
            hasValue: !r.isPlaceholderDisplay
          }, () => [
            h("button", L({
              type: "button",
              id: r.resolvedId,
              class: ["ui-select-field", {
                "ui-select-field--values": i.multiple,
                "ui-select-field--bare": i.variant === "inline"
              }],
              disabled: r.isDisabled,
              "aria-expanded": I ? "true" : "false",
              "aria-haspopup": r.listboxRole,
              "aria-controls": r.listboxId,
              "aria-describedby": i.ariaDescribedby
            }, r.triggerPassthrough, {
              onClick: (C) => r.onTriggerClick(k)
            }), [
              i.prefixIcon ? (o(), d("span", Aa, [
                b(a, {
                  name: i.prefixIcon,
                  size: "xs"
                }, null, 8, ["name"])
              ])) : f("v-if", !0),
              i.multiple ? (o(), d("div", Da, [
                (o(!0), d(
                  A,
                  null,
                  G(r.selectedValues, (C) => (o(), _(u, {
                    key: String(C),
                    variant: "secondary",
                    size: "sm",
                    removable: "",
                    onRemove: (N) => r.removeValue(C)
                  }, {
                    default: w(() => [
                      B(
                        y(r.labelForValue(C)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onRemove"]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                r.isFilterable ? Le((o(), d("input", {
                  key: 0,
                  ref: "searchInput",
                  "onUpdate:modelValue": t[0] || (t[0] = (C) => s.filterQuery = C),
                  type: "text",
                  class: S(["ui-select-values-input", {
                    "ui-select-values-input--solo": !r.selectedValues.length,
                    "ui-select-values-input--open": s.menuOpen
                  }]),
                  placeholder: r.multipleInputPlaceholder,
                  "aria-label": r.resolvedFilterPlaceholder,
                  autocomplete: "off",
                  disabled: r.isDisabled,
                  onClick: t[1] || (t[1] = F((...C) => r.onSearchInputActivate && r.onSearchInputActivate(...C), ["stop"])),
                  onFocus: t[2] || (t[2] = (...C) => r.onSearchInputActivate && r.onSearchInputActivate(...C)),
                  onKeydown: t[3] || (t[3] = (...C) => r.onSearchKeydown && r.onSearchKeydown(...C))
                }, null, 42, Ba)), [
                  [Je, s.filterQuery]
                ]) : f("v-if", !0)
              ])) : i.loading ? (o(), d(
                "span",
                Pa,
                y(r.resolvedLoadingLabel),
                1
                /* TEXT */
              )) : (o(), d(
                "span",
                L({
                  key: 3,
                  class: ["ui-select-value", { "ui-select-value--placeholder": r.isPlaceholderDisplay }]
                }, r.selectedDisplayStyle ? { style: r.selectedDisplayStyle } : {}, { "data-popover-align": "" }),
                y(r.displayLabel),
                17
                /* TEXT, FULL_PROPS */
              )),
              h("span", Oa, [
                r.showClearButton ? (o(), d("button", {
                  key: 0,
                  type: "button",
                  class: "ui-select-clear",
                  "aria-label": r.clearAriaLabel,
                  onClick: t[4] || (t[4] = F((...C) => r.clearSelection && r.clearSelection(...C), ["stop"]))
                }, [
                  b(a, {
                    name: "xmark",
                    size: "xs"
                  })
                ], 8, Ma)) : f("v-if", !0),
                h("span", Ra, [
                  b(a, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ], 16, Fa)
          ])
        ]),
        content: w(({ close: I }) => [
          h("div", {
            ref: "listbox",
            id: r.listboxId,
            class: S(["ui-select-listbox", r.listboxClass]),
            "data-size": r.resolvedSize,
            role: r.listboxRole,
            "aria-multiselectable": i.multiple ? "true" : void 0,
            "aria-labelledby": r.resolvedId
          }, [
            i.loading && !r.filteredOptions.length ? (o(), d("div", Va, [
              (o(), d(
                A,
                null,
                G(3, (k) => b(l, {
                  key: k,
                  variant: "line",
                  class: S(k === 3 ? "max-w-[72%]" : void 0)
                }, null, 8, ["class"])),
                64
                /* STABLE_FRAGMENT */
              ))
            ])) : r.filteredOptions.length ? (o(!0), d(
              A,
              { key: 1 },
              G(r.filteredOptions, (k) => (o(), _(g, {
                key: String(k.value),
                variant: r.isSelected(k) ? "solid" : "ghost",
                color: r.isSelected(k) ? "primary" : "secondary",
                size: r.optionButtonSize,
                block: "",
                "text-align": "left",
                role: "option",
                class: S(["ui-select-option", { "ui-select-option--selected": r.isSelected(k) }]),
                "suffix-icon": r.isSelected(k) ? "check" : void 0,
                "aria-selected": r.isSelected(k) ? "true" : "false",
                onClick: (D) => r.pick(k, I)
              }, {
                default: w(() => [
                  p(e.$slots, "option", {
                    option: k,
                    selected: r.isSelected(k)
                  }, () => [
                    h("span", Na, [
                      h(
                        "span",
                        L({
                          "data-popover-align": "",
                          class: "min-w-0 truncate"
                        }, { ref_for: !0 }, r.optionDisplayStyle(k) ? { style: r.optionDisplayStyle(k) } : {}),
                        y(k.label),
                        17
                        /* TEXT, FULL_PROPS */
                      ),
                      k.badge ? (o(), _(c, {
                        key: 0,
                        color: k.badgeColor || "secondary",
                        variant: k.badgeVariant || "solid",
                        size: "xs"
                      }, {
                        default: w(() => [
                          B(
                            y(k.badge),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["color", "variant"])) : k.description ? (o(), d(
                        "span",
                        ja,
                        y(k.description),
                        1
                        /* TEXT */
                      )) : f("v-if", !0)
                    ])
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["variant", "color", "size", "class", "suffix-icon", "aria-selected", "onClick"]))),
              128
              /* KEYED_FRAGMENT */
            )) : r.isFilterable && s.filterQuery ? (o(), _(m, {
              key: 2,
              icon: "magnifying-glass",
              size: r.emptyStateSize,
              title: r.noResultsText
            }, null, 8, ["size", "title"])) : (o(), _(m, {
              key: 3,
              icon: "table-cells",
              size: r.emptyStateSize,
              title: r.emptyOptionsText
            }, null, 8, ["size", "title"]))
          ], 10, $a)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        r.showPopoverHeader ? {
          name: "header",
          fn: w(({ close: I }) => [
            Le(h("input", {
              ref: "filterInput",
              "onUpdate:modelValue": t[5] || (t[5] = (k) => s.filterQuery = k),
              type: "text",
              class: S(["ui-select-filter-input w-full", r.filterInputClass]),
              "data-size": r.resolvedSize,
              placeholder: r.resolvedFilterPlaceholder,
              "aria-label": r.resolvedFilterPlaceholder,
              autocomplete: "off",
              onMousedown: t[6] || (t[6] = F(() => {
              }, ["prevent"])),
              onKeydown: [
                H(F((k) => r.pickFirstFiltered(I), ["prevent"]), ["enter"]),
                H(F((k) => I(), ["prevent"]), ["esc"])
              ]
            }, null, 42, Ea), [
              [Je, s.filterQuery]
            ])
          ]),
          key: "0"
        } : void 0,
        e.$slots.footer ? {
          name: "footer",
          fn: w((I) => [
            p(e.$slots, "footer", Vt(Nt(I)))
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
    ],
    2
    /* CLASS */
  );
}
const lu = /* @__PURE__ */ T(La, [["render", Ga], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Select.vue"]]), Ha = {
  name: "Segment",
  mixins: [O],
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
    iconType: re,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    ...be("iconType"),
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
    !this.uiSegmentGroup && typeof import.meta < "u" && console.warn("[Segment] Yalnızca <ui-segment-group> içinde kullanılmalı.");
  },
  methods: {
    select() {
      this.disabled || !this.uiSegmentGroup || this.uiSegmentGroup.$emit("update:modelValue", this.value);
    }
  }
}, Wa = ["aria-checked", "disabled"], Ua = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, qa = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Ya = {
  key: 2,
  class: "ui-segment-label"
}, Ka = {
  key: 3,
  class: "sr-only"
}, Za = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function Qa(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d("button", {
    type: "button",
    role: "radio",
    class: S(r.segmentClass),
    "aria-checked": r.isSelected ? "true" : "false",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...u) => r.select && r.select(...u))
  }, [
    r.hasPrepend ? (o(), d("span", Ua, [
      p(e.$slots, "prepend")
    ])) : f("v-if", !0),
    i.icon ? (o(), d("span", qa, [
      b(a, {
        name: i.icon,
        type: r.segmentIconType,
        size: r.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("v-if", !0),
    r.showLabel ? (o(), d(
      "span",
      Ya,
      y(i.label),
      1
      /* TEXT */
    )) : i.label ? (o(), d(
      "span",
      Ka,
      y(i.label),
      1
      /* TEXT */
    )) : f("v-if", !0),
    r.hasAppend ? (o(), d("span", Za, [
      p(e.$slots, "append")
    ])) : f("v-if", !0)
  ], 10, Wa);
}
const uu = /* @__PURE__ */ T(Ha, [["render", Qa], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Segment.vue"]]), Xa = ["sm", "md", "lg"], Ja = ["horizontal", "vertical"];
function eo(e) {
  return typeof e == "boolean" || e === "mobile";
}
const to = {
  name: "SegmentGroup",
  mixins: [O],
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
      validator: (e) => e == null || Xa.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ja.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: eo
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
      return U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? R() : !!this.iconOnly;
    },
    isScrollable() {
      return this.scrollable === !0 && this.direction !== "vertical";
    },
    rootClass() {
      return z(
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
      const n = t.clientWidth;
      if (n <= 0) return;
      const s = Math.max(0, t.scrollWidth - n);
      if (s <= 0) return;
      const r = i.offsetLeft + i.offsetWidth / 2, a = Math.min(s, Math.max(0, r - n / 2));
      Math.abs(t.scrollLeft - a) < 1 || (typeof t.scrollTo == "function" ? t.scrollTo({ left: a, behavior: e }) : t.scrollLeft = a);
    }
  }
}, io = ["aria-label"];
function ro(e, t, i, n, s, r) {
  return o(), d("div", L({
    class: r.rootClass,
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, io);
}
const du = /* @__PURE__ */ T(to, [["render", ro], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/SegmentGroup.vue"]]), no = ["line", "circle", "block", "pill"], so = ["sm", "md", "lg"], ao = 480, Ct = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, It = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, oo = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => no.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => so.includes(e)
    }
  },
  setup(e) {
    const t = mi(), i = K(() => !!t.default), n = j(null), s = j(null), r = j(null), a = j(null), u = j(!1), l = j(!1), c = j(!1), g = j(!1), m = j(!1);
    let v = null;
    const I = K(
      () => e.loading || c.value
    ), k = K(
      () => e.loading || c.value
    );
    pi(() => {
      m.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), gi(() => {
      D(), C();
    });
    function D() {
      v != null && (clearTimeout(v), v = null);
    }
    bi(
      () => e.loading,
      async (Y, se) => {
        var Ue, qe, Ye, Ke, Ze, Qe;
        if (D(), Y) {
          const Xe = Math.max(
            ((Ue = n.value) == null ? void 0 : Ue.offsetHeight) ?? 0,
            ((qe = r.value) == null ? void 0 : qe.scrollHeight) ?? 0,
            ((Ye = s.value) == null ? void 0 : Ye.offsetHeight) ?? 0
          );
          c.value = !1, g.value = !1, u.value = !1, l.value = Xe > 48, a.value = l.value ? Xe : null;
          return;
        }
        if (se !== !0) return;
        if (m.value) {
          c.value = !1, l.value = !1, a.value = null, u.value = !1;
          return;
        }
        const ke = a.value ?? ((Ke = n.value) == null ? void 0 : Ke.offsetHeight) ?? ((Ze = s.value) == null ? void 0 : Ze.offsetHeight) ?? 0;
        c.value = !0, g.value = !1, l.value = !1, u.value = !0, a.value = ke, await et();
        const He = ((Qe = r.value) == null ? void 0 : Qe.scrollHeight) ?? 0, We = He > 0 ? He : ke;
        if (ke <= 0 && We <= 0) {
          C();
          return;
        }
        await et(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = We, g.value = !0;
          });
        }), v = setTimeout(C, ao + 40);
      }
    );
    function C() {
      D(), c.value = !1, g.value = !1, l.value = !1, a.value = null, u.value = !1;
    }
    function N(Y) {
      Y.target === n.value && Y.propertyName === "height" && (e.loading || u.value && C());
    }
    const M = K(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), E = K(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !l.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && l.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && l.value && !c.value
    })), ne = K(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !l.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && l.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && g.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: n,
      placeholderRef: s,
      contentWrapRef: r,
      hostStyle: M,
      heightAnimActive: u,
      heightLocked: l,
      isRevealing: c,
      showPlaceholder: I,
      isBusy: k,
      placeholderClass: E,
      contentWrapClass: ne,
      onHostTransitionEnd: N
    };
  },
  computed: {
    variantClass() {
      return Ct[this.variant] || Ct.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return It[this.size] || It.md;
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
}, lo = ["aria-busy"], uo = ["aria-hidden"];
function co(e, t, i, n, s, r) {
  return o(), d(
    A,
    null,
    [
      f(" Placeholder mod: slot yok — yükleme kutusu "),
      n.hasDefaultSlot ? (o(), d(
        A,
        { key: 1 },
        [
          f(" Sarmalayıcı mod: satır iskelet + yükseklik / opacity geçişi "),
          h("div", L({
            ref: "hostRef",
            class: r.hostClass
          }, n.hostStyle ? { style: n.hostStyle, ...r.passthroughAttrs } : r.passthroughAttrs, {
            "aria-busy": n.isBusy ? "true" : void 0,
            onTransitionend: t[0] || (t[0] = (...a) => n.onHostTransitionEnd && n.onHostTransitionEnd(...a))
          }), [
            Le(h(
              "div",
              {
                ref: "placeholderRef",
                class: S(["ui-skeleton-placeholder", n.placeholderClass]),
                "aria-hidden": "true"
              },
              [
                p(e.$slots, "placeholder", {}, () => [
                  t[1] || (t[1] = h(
                    "div",
                    { class: "ui-skeleton-default-rows" },
                    [
                      h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
                      h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
                      h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
                    ],
                    -1
                    /* CACHED */
                  ))
                ])
              ],
              2
              /* CLASS */
            ), [
              [hi, n.showPlaceholder]
            ]),
            h(
              "div",
              {
                ref: "contentWrapRef",
                class: S(["ui-skeleton-content-wrap", n.contentWrapClass])
              },
              [
                h("div", {
                  class: "ui-skeleton-content",
                  "aria-hidden": n.showPlaceholder && !n.isRevealing ? "true" : void 0
                }, [
                  p(e.$slots, "default")
                ], 8, uo)
              ],
              2
              /* CLASS */
            )
          ], 16, lo)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (o(), d(
        "div",
        L({
          key: 0,
          class: r.skeletonClass,
          "aria-hidden": "true"
        }, r.passthroughAttrs),
        null,
        16
        /* FULL_PROPS */
      ))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const cu = /* @__PURE__ */ T(oo, [["render", co], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Skeleton.vue"]]), fo = q("ui-switch"), ho = {
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
    return { fallbackId: fo() };
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
      for (const [i, n] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = n);
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
}, mo = ["id", "aria-checked", "disabled", "aria-describedby"];
function po(e, t, i, n, s, r) {
  return o(), d("button", L({
    type: "button",
    role: "switch",
    id: r.resolvedId,
    class: [
      "ui-switch",
      r.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": i.modelValue ? "true" : "false",
    disabled: i.disabled,
    "aria-describedby": i.ariaDescribedby
  }, r.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...a) => r.toggle && r.toggle(...a)),
    onKeydown: t[1] || (t[1] = (...a) => r.onKeydown && r.onKeydown(...a))
  }), [
    h(
      "span",
      {
        class: S(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
        "aria-hidden": "true"
      },
      [
        h(
          "span",
          {
            class: S(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
          },
          null,
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    )
  ], 16, mo);
}
const fu = /* @__PURE__ */ T(ho, [["render", po], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Switch.vue"]]), go = {
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
      var n, s;
      const e = ((n = this.uiTabs) == null ? void 0 : n.orientation) === "vertical", i = ((s = this.uiTabs) == null ? void 0 : s.variant) === "segmented" ? "segmented" : "line";
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
    !this.uiTabs && typeof import.meta < "u" && console.warn("[TabList] Yalnızca <ui-tabs> içinde kullanılmalı.");
  },
  methods: {
    /** Klavye: ok tuşları ile tetikleyiciler arasında odak (yatay/dikey). */
    onKeydown(e) {
      var g, m;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const n = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], s = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], r = e.key;
      let a = 0;
      if (n.includes(r)) a = 1;
      else if (s.includes(r)) a = -1;
      else return;
      e.preventDefault();
      const u = document.activeElement;
      let l = i.indexOf(u);
      l === -1 && (l = i.findIndex((v) => v.getAttribute("aria-selected") === "true")), l === -1 && (l = 0);
      let c = l + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (m = (g = i[c]) == null ? void 0 : g.focus) == null || m.call(g);
    }
  }
}, bo = ["aria-label", "aria-orientation"];
function yo(e, t, i, n, s, r) {
  return o(), d("div", L({
    class: r.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": r.ariaOrientation
  }, r.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...a) => r.onKeydown && r.onKeydown(...a))
  }), [
    p(e.$slots, "default")
  ], 16, bo);
}
const hu = /* @__PURE__ */ T(go, [["render", yo], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TabList.vue"]]), _e = ["sm", "md", "lg"];
function vo(e) {
  const t = _e.indexOf(e);
  return t < 0 ? "md" : _e[Math.min(t + 1, _e.length - 1)];
}
function ko(e, t, { inlineControls: i = !1, nativeChrome: n = !1 } = {}) {
  const s = U(e, t, { key: "controlSize", defaultSize: "md" });
  return i ? s : n ? "lg" : vo(s);
}
const So = ["line", "segmented"];
function xo(e) {
  return typeof e == "boolean" || e === "mobile";
}
const wo = {
  name: "Tabs",
  mixins: [O],
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
      validator: (e) => So.includes(e)
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
      validator: xo
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return { baseId: jt() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return this.variant === "segmented" ? ko(this.uiDefaults, this.size, {
        inlineControls: this.inlineControls,
        nativeChrome: this.nativeChrome
      }) : U(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? R() : !!this.iconOnly;
    },
    rootClass() {
      return z(
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
function _o(e, t, i, n, s, r) {
  return o(), d(
    "div",
    L({ class: r.rootClass }, r.passthroughAttrs),
    [
      p(e.$slots, "default")
    ],
    16
    /* FULL_PROPS */
  );
}
const mu = /* @__PURE__ */ T(wo, [["render", _o], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Tabs.vue"]]), To = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Co = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900], Io = "ui-sans-serif, system-ui, sans-serif", Lt = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Lo = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
}, zo = {
  compact: "1rem",
  default: "1.5rem",
  comfortable: "1.25rem",
  spacious: "2rem"
}, Fo = ["success", "warning", "info", "danger"], Ao = {
  colors: [
    "background",
    "foreground",
    "surface",
    "surfaceForeground",
    "control",
    "controlForeground",
    "primary",
    "primaryForeground",
    "secondary",
    "secondaryForeground",
    "muted",
    "mutedForeground",
    "accent",
    "accentForeground",
    "border",
    "ring",
    "white"
  ],
  status: Fo.flatMap((e) => [e, `${e}Foreground`]),
  chart: [...Co.map((e) => `chart${e}`), "chart", "chartForeground"],
  surfaces: ["surfaceStyle", "controlStyle", "inputStyle"],
  shape: ["radius", "radius4xl", "cardPadding"],
  effects: [
    "uiShadowSm",
    "uiShadowMd",
    "uiShadowSurface",
    "uiFillGradTopPrimary",
    "uiFillGradBottomPrimary",
    "uiFillGradLight",
    "uiFillGradDark",
    "uiScrollbarSize",
    "uiScrollbarTrack",
    "uiScrollbarThumb",
    "uiScrollbarThumbHover"
  ],
  scale: ["base"]
};
new Set(Object.values(Ao).flat());
const Do = {
  "--font-heading": "var(--font-sans)",
  "--radius-sm": "calc(var(--radius) - 4px)",
  "--radius-md": "calc(var(--radius) - 2px)",
  "--radius-3xl": "var(--radius)",
  "--surface-bg": "color-mix(in oklab, var(--ui-surface-mix-from) var(--ui-surface-opacity), transparent)",
  "--control-bg": "color-mix(in oklab, var(--ui-control-mix-from) var(--ui-control-opacity), transparent)",
  "--input-background": "color-mix(in oklab, var(--ui-input-mix-from) var(--ui-input-opacity), transparent)",
  "--border": "var(--input-background)",
  "--ui-focus-ring": "color-mix(in oklab, var(--ring) 45%, transparent)",
  "--ui-button-grad-top": "var(--ui-fill-grad-top-primary)",
  "--ui-button-grad-bottom": "var(--ui-fill-grad-bottom-primary)",
  "--ui-button-grad-light": "var(--ui-fill-grad-light)",
  "--ui-button-grad-dark": "var(--ui-fill-grad-dark)"
};
function Bo(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([a-zA-Z])(\d)/g, "$1-$2").replace(/_/g, "-").toLowerCase()}`;
}
function ce(e) {
  const t = String(e || "").trim();
  return !t || t.includes(",") || t.startsWith("var(") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${Io}`;
}
function Po(e) {
  if (e == null || e === "") return null;
  if (typeof e == "string" && !/^-?\d*\.?\d+$/.test(e.trim()))
    return e.trim();
  const t = Number(e);
  if (Number.isNaN(t)) return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function Oo(e) {
  if (e == null || e === "") return null;
  if (typeof e == "number") return `${e}px`;
  const t = String(e).trim();
  return Lt[t] != null ? Lt[t] : /^\d+$/.test(t) ? t === "0" ? "0" : `${t}px` : t;
}
function Mo(e) {
  return e == null || e === "" ? null : Lo[e] ?? String(e);
}
function Ro(e) {
  return e == null || e === "" ? null : zo[e] ?? String(e);
}
function Eo(e, t, i) {
  if (!i || typeof i != "object") return;
  const n = Po(i.opacity ?? i.bgOpacity);
  n && (e[`--ui-${t}-opacity`] = n);
  const s = Oo(i.backdropBlur);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const r = Mo(i.mixFrom);
  r && (e[`--ui-${t}-mix-from`] = r);
}
function X(e) {
  const t = {};
  if (!e || typeof e != "object") return t;
  for (const [i, n] of Object.entries(e))
    if (!(n == null || n === "")) {
      if (i === "base" && typeof n == "object") {
        for (const s of To) {
          const r = n[s];
          r != null && r !== "" && (t[`--base-${s}`] = String(r));
        }
        continue;
      }
      if (i === "surfaceStyle" || i === "controlStyle" || i === "inputStyle") {
        Eo(t, i.replace("Style", ""), n);
        continue;
      }
      if (i === "cardPadding") {
        const s = Ro(String(n));
        s && (t["--ui-card-space"] = s);
        continue;
      }
      typeof n != "object" && (t[Bo(i)] = String(n));
    }
  return t;
}
function ei(e) {
  const t = {};
  return e && (e.body && (t["--font-sans"] = ce(e.body)), e.heading && (t["--font-heading"] = ce(e.heading))), t;
}
function zt(e = {}, t = {}) {
  const i = { ...e };
  for (const [n, s] of Object.entries(t || {}))
    s && typeof s == "object" && e[n] && typeof e[n] == "object" ? i[n] = { ...e[n], ...s } : i[n] = s;
  return i;
}
function ti(e) {
  const t = {
    ...ei(e.preset.fonts),
    ...X(e.preset.tokens.light)
  };
  for (const [i, n] of Object.entries(Do))
    i in t || (t[i] = n);
  return t;
}
function $o(e, t = "light") {
  const i = ti(e);
  return t === "dark" && Object.assign(i, X(e.preset.tokens.dark)), i;
}
function Ft(e, t) {
  const i = Object.entries(t).map(([n, s]) => `  ${n}: ${s};`);
  return `${e} {
${i.join(`
`)}
}
`;
}
function pu(e, t = {}) {
  const i = t.selector || ":root", n = t.darkSelector || ".dark", s = `/* fewui theme "${e.id}" — preset.js'ten üretildi (buildThemeCss); elle düzenlemeyin. */
`, r = X(e.preset.tokens.dark), a = Object.keys(r).length ? Ft(n, r) : "";
  return `${s}${Ft(i, ti(e))}${a}`;
}
function $e(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Vo(e) {
  const t = String(e || "").trim().match(/^oklch\(\s*([0-9.]+%?)/i);
  if (!t) return null;
  const i = t[1];
  if (i.endsWith("%")) {
    const s = Number.parseFloat(i);
    return Number.isFinite(s) ? s / 100 : null;
  }
  const n = Number.parseFloat(i);
  return Number.isFinite(n) ? n > 1 ? n / 100 : n : null;
}
function Te(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function fe(e, t, i) {
  return `#${Te(e)}${Te(t)}${Te(i)}`;
}
function oe(e, t, i) {
  const [n, s, r] = [e, t, i].map((a) => {
    const u = a / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * s + 0.0722 * r;
}
function No(e, t = "#ffffff", i = "#0a0a0b") {
  const n = $e(e);
  if (n)
    return oe(...n) > 0.4 ? i : t;
  const s = Vo(e);
  return s != null && s > 0.72 ? i : t;
}
function gu(e, t) {
  const i = $e(e);
  if (!i) return e;
  let [n, s, r] = i, a = oe(n, s, r);
  if (t === "dark") {
    if (a < 0.12) {
      const l = Math.min(1, (0.28 - a) / Math.max(0.01, 0.28));
      n += (255 - n) * l * 0.55, s += (255 - s) * l * 0.55, r += (255 - r) * l * 0.55, a = oe(n, s, r);
    }
    for (let u = 0; u < 12 && a > 0.38; u += 1)
      n *= 0.82, s *= 0.82, r *= 0.82, a = oe(n, s, r);
    return fe(n, s, r);
  }
  return a > 0.82 ? fe(n * 0.22, s * 0.22, r * 0.22) : e;
}
function ii(e) {
  const t = $e(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, n, s] = t, r = fe(
    i + (255 - i) * 0.12,
    n + (255 - n) * 0.12,
    s + (255 - s) * 0.12
  ), a = fe(
    i + (255 - i) * 0.28,
    n + (255 - n) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: r, brandAccent: a };
}
const At = {
  destructive: "danger",
  destructiveForeground: "dangerForeground",
  primaryColor: "primary",
  secondaryColor: "secondary"
}, jo = typeof import.meta < "u" && !0;
function Dt(e, t, i) {
  for (const n of Object.keys(t))
    At[n] && console.warn(`[fewui] theme "${e}" (${i}): "${n}" kaldırıldı, "${At[n]}" kullanın.`);
}
function J(e) {
  var r, a;
  if (!e || typeof e != "object" || !e.id)
    throw new Error("[fewui] defineTheme: `id` zorunlu.");
  const t = e.extends, i = e.preset || {}, n = zt(t == null ? void 0 : t.preset.tokens.light, (r = i.tokens) == null ? void 0 : r.light), s = zt(t == null ? void 0 : t.preset.tokens.dark, (a = i.tokens) == null ? void 0 : a.dark);
  return jo && (Dt(e.id, n, "light"), Dt(e.id, s, "dark")), {
    id: String(e.id),
    label: e.label || String(e.id),
    description: e.description || "",
    preset: {
      fonts: { ...t == null ? void 0 : t.preset.fonts, ...i.fonts },
      tokens: { light: n, dark: s }
    },
    defaults: Pe({ ...t == null ? void 0 : t.defaults, ...e.defaults }),
    css: e.css || {}
  };
}
function bu(e, t = {}) {
  return J({
    id: e.id,
    label: e.label,
    description: e.description,
    css: e.css,
    extends: e,
    preset: { fonts: t.fonts, tokens: t.tokens },
    defaults: t.defaults
  });
}
function ri(e) {
  return !!(e && typeof e == "object" && "id" in e && "preset" in e && e.preset && typeof e.preset == "object" && "tokens" in e.preset);
}
const Go = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, Ho = {
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
    heading: "Inter, ui-sans-serif, system-ui, sans-serif"
  },
  tokens: {
    light: {
      radius: "26px",
      radius4xl: "2rem",
      base: {
        50: "oklch(0.9851 0 0)",
        100: "oklch(0.9702 0 0)",
        200: "oklch(0.9219 0 0)",
        300: "oklch(0.8699 0 0)",
        400: "oklch(0.7155 0 0)",
        500: "oklch(0.5555 0 0)",
        600: "oklch(0.4386 0 0)",
        700: "oklch(0.3715 0 0)",
        800: "oklch(0.2686 0 0)",
        900: "oklch(0.2046 0 0)",
        950: "oklch(0.1448 0 0)"
      },
      white: "#ffffff",
      background: "var(--base-50)",
      foreground: "var(--base-950)",
      surface: "var(--white)",
      surfaceForeground: "var(--base-950)",
      surfaceStyle: {
        opacity: "100%",
        backdropBlur: "0",
        mixFrom: "var(--surface)"
      },
      control: "var(--base-200)",
      controlForeground: "var(--base-950)",
      controlStyle: {
        opacity: "100%",
        backdropBlur: "0",
        mixFrom: "var(--control)"
      },
      primary: "#1B5CFF",
      primaryForeground: "#ffffff",
      secondary: "var(--base-200)",
      secondaryForeground: "var(--base-950)",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.58 0.155 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.55 0.22 27)",
      dangerForeground: "oklch(0.985 0.01 27)",
      chart50: "#eef2ff",
      chart100: "#e0e7ff",
      chart200: "#c7d2fe",
      chart300: "#a5b4fc",
      chart400: "#818cf8",
      chart500: "#6366f1",
      chart600: "#4f46e5",
      chart700: "#4338ca",
      chart800: "#3730a3",
      chart900: "#312e81",
      chart: "var(--chart-500)",
      chartForeground: "#ffffff",
      muted: "var(--base-200)",
      mutedForeground: "var(--base-500)",
      accent: "var(--base-100)",
      accentForeground: "var(--base-900)",
      inputStyle: {
        opacity: "100%",
        backdropBlur: "0",
        mixFrom: "var(--control)"
      },
      uiShadowSm: "0 4px 16px rgb(0 0 0 / 0.04), 0 1px 3px rgb(0 0 0 / 0.03)",
      uiShadowMd: "0 8px 28px rgb(0 0 0 / 0.05), 0 2px 8px rgb(0 0 0 / 0.035)",
      uiShadowSurface: "0 4px 16px rgb(0 0 0 / 0.04), 0 16px 48px rgb(0 0 0 / 0.06)",
      ring: "var(--base-400)",
      uiFillGradTopPrimary: "8%",
      uiFillGradBottomPrimary: "5%",
      uiFillGradLight: "white",
      uiFillGradDark: "black",
      uiScrollbarSize: "8px",
      uiScrollbarTrack: "transparent",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 22%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 36%, transparent)"
    },
    dark: {
      background: "#000000",
      foreground: "var(--base-50)",
      surface: "var(--base-900)",
      surfaceForeground: "var(--base-50)",
      control: "var(--base-800)",
      controlForeground: "var(--base-50)",
      secondary: "var(--base-800)",
      secondaryForeground: "var(--base-50)",
      warning: "oklch(0.82 0.13 75)",
      warningForeground: "oklch(0.22 0.05 75)",
      success: "oklch(0.62 0.14 152)",
      info: "oklch(0.72 0.11 252)",
      danger: "oklch(0.62 0.19 27)",
      chart50: "#1e1b4b",
      chart100: "#312e81",
      chart200: "#3730a3",
      chart300: "#4338ca",
      chart400: "#4f46e5",
      chart600: "#818cf8",
      chart700: "#a5b4fc",
      chart800: "#c7d2fe",
      chart900: "#e0e7ff",
      chartForeground: "var(--base-950)",
      muted: "var(--base-800)",
      mutedForeground: "var(--base-400)",
      accent: "var(--base-800)",
      accentForeground: "var(--base-50)",
      uiShadowSm: "0 2px 8px rgb(0 0 0 / 0.2), 0 1px 3px rgb(0 0 0 / 0.14)",
      uiShadowMd: "0 6px 20px rgb(0 0 0 / 0.22), 0 2px 8px rgb(0 0 0 / 0.16)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.22), 0 14px 36px rgb(0 0 0 / 0.18)",
      ring: "var(--base-500)",
      uiFillGradTopPrimary: "7%",
      uiFillGradBottomPrimary: "4%",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 30%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 44%, transparent)"
    }
  }
}, ni = J({
  id: "web",
  label: "Web",
  description: "Restta panel — opak yüzeyler, Inter, geniş radius.",
  defaults: Go,
  preset: Ho,
  css: {
    color: "fewui/themes/web/color.css",
    styles: "fewui/themes/web/styles.css"
  }
}), Wo = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, Uo = {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
  },
  tokens: {
    light: {
      surfaceStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--surface)"
      },
      controlStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      },
      inputStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      }
    },
    dark: {}
  }
}, qo = J({
  id: "liquidglass",
  label: "Liquid Glass",
  description: "iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.",
  extends: ni,
  defaults: Wo,
  preset: Uo,
  css: {
    color: "fewui/themes/liquidglass/color.css",
    styles: "fewui/themes/liquidglass/styles.css",
    platform: {
      ios: "fewui/themes/liquidglass/platform/ios.css"
    }
  }
}), Yo = {
  iconType: "light",
  buttonRounded: "full",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, Ko = {
  fonts: {
    body: "Roboto, ui-sans-serif, system-ui, sans-serif",
    heading: "Roboto, ui-sans-serif, system-ui, sans-serif"
  },
  tokens: {
    light: {
      radius: "16px",
      radiusSm: "12px",
      radiusMd: "14px",
      radius3xl: "16px",
      radius4xl: "28px",
      base: {
        50: "oklch(0.99 0.004 285)",
        100: "oklch(0.97 0.008 285)",
        200: "oklch(0.93 0.012 285)",
        300: "oklch(0.87 0.016 285)",
        400: "oklch(0.72 0.02 285)",
        500: "oklch(0.58 0.022 285)",
        600: "oklch(0.48 0.024 285)",
        700: "oklch(0.4 0.026 285)",
        800: "oklch(0.32 0.024 285)",
        900: "oklch(0.24 0.02 285)",
        950: "oklch(0.18 0.018 285)"
      },
      white: "#ffffff",
      background: "#fffbfe",
      foreground: "#1c1b1f",
      surface: "#fffbfe",
      surfaceForeground: "#1c1b1f",
      "--ui-m3-surface-lowest": "#ffffff",
      "--ui-m3-surface-low": "#f7f2fa",
      "--ui-m3-surface-container": "#f3edf7",
      "--ui-m3-surface-high": "#ece6f0",
      "--ui-m3-surface-highest": "#e6e0e9",
      "--ui-m3-outline": "#79747e",
      "--ui-m3-outline-variant": "#cac4d0",
      surfaceStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--surface)"
      },
      control: "var(--ui-m3-surface-highest)",
      controlForeground: "#1c1b1f",
      controlStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      },
      primary: "#6750A4",
      primaryForeground: "#ffffff",
      secondary: "#E8DEF8",
      secondaryForeground: "#1D192B",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.58 0.155 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "#b3261e",
      dangerForeground: "#ffffff",
      muted: "var(--ui-m3-surface-container)",
      mutedForeground: "#49454f",
      accent: "var(--ui-m3-surface-high)",
      accentForeground: "#1d192b",
      inputStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      },
      border: "var(--ui-m3-outline-variant)",
      uiShadowSm: "0 1px 2px rgb(0 0 0 / 0.08), 0 1px 3px rgb(0 0 0 / 0.06)",
      uiShadowMd: "0 1px 2px rgb(0 0 0 / 0.08), 0 2px 6px rgb(0 0 0 / 0.1)",
      uiShadowSurface: "0 1px 3px rgb(0 0 0 / 0.08), 0 4px 12px rgb(0 0 0 / 0.06)",
      ring: "#6750a4",
      uiFocusRing: "color-mix(in oklab, var(--ring) 40%, transparent)",
      uiFillGradTopPrimary: "0%",
      uiFillGradBottomPrimary: "0%",
      uiFillGradLight: "white",
      uiFillGradDark: "black",
      uiScrollbarSize: "8px",
      uiScrollbarTrack: "transparent",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 22%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 36%, transparent)",
      chart50: "#f3edf7",
      chart100: "#e8def8",
      chart200: "#d0bcff",
      chart300: "#b69df8",
      chart400: "#9a82db",
      chart500: "#7f67be",
      chart600: "#6750a4",
      chart700: "#4f378b",
      chart800: "#381e72",
      chart900: "#21005d",
      chart: "var(--chart-500)",
      chartForeground: "#ffffff"
    },
    dark: {
      background: "#1c1b1f",
      foreground: "#e6e1e5",
      surface: "#1c1b1f",
      surfaceForeground: "#e6e1e5",
      "--ui-m3-surface-lowest": "#0f0d13",
      "--ui-m3-surface-low": "#1d1b20",
      "--ui-m3-surface-container": "#211f26",
      "--ui-m3-surface-high": "#2b2930",
      "--ui-m3-surface-highest": "#36343b",
      "--ui-m3-outline": "#938f99",
      "--ui-m3-outline-variant": "#49454f",
      controlForeground: "#e6e1e5",
      danger: "#f2b8b5",
      dangerForeground: "#601410",
      mutedForeground: "#cac4d0",
      accentForeground: "#e8def8",
      uiShadowSm: "0 1px 2px rgb(0 0 0 / 0.35)",
      uiShadowMd: "0 2px 6px rgb(0 0 0 / 0.4)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.35)",
      ring: "#d0bcff",
      uiFocusRing: "color-mix(in oklab, var(--ring) 45%, transparent)",
      chart50: "#21005d",
      chart100: "#381e72",
      chart200: "#4f378b",
      chart300: "#6750a4",
      chart400: "#7f67be",
      chart500: "#9a82db",
      chart600: "#b69df8",
      chart700: "#d0bcff",
      chart800: "#e8def8",
      chart900: "#f3edf7",
      chartForeground: "#381e72"
    }
  }
}, Zo = J({
  id: "android",
  label: "Android",
  description: "Material 3 — Roboto, surface containers, filled/tonal buttons, elevated cards.",
  defaults: Yo,
  preset: Ko,
  css: {
    color: "fewui/themes/android/color.css",
    styles: "fewui/themes/android/styles.css",
    platform: {
      android: "fewui/themes/android/platform/android.css"
    }
  }
}), Qo = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, Xo = {
  fonts: {
    body: "Poppins, ui-sans-serif, system-ui, sans-serif",
    heading: "Poppins, ui-sans-serif, system-ui, sans-serif"
  },
  tokens: {
    light: {
      radius: "20px",
      radius4xl: "2rem",
      base: {
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
      white: "#ffffff",
      background: "#0a0a0a",
      foreground: "#fafafa",
      surface: "#171717",
      surfaceForeground: "#fafafa",
      surfaceStyle: {
        opacity: "6%",
        backdropBlur: "12px",
        mixFrom: "var(--foreground)"
      },
      control: "#262626",
      controlForeground: "#fafafa",
      controlStyle: {
        opacity: "8%",
        backdropBlur: "12px",
        mixFrom: "var(--foreground)"
      },
      primary: "#f97316",
      primaryForeground: "#ffffff",
      secondary: "#404040",
      secondaryForeground: "#fafafa",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.58 0.155 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.55 0.22 27)",
      dangerForeground: "oklch(0.985 0.01 27)",
      muted: "var(--base-200)",
      mutedForeground: "#a3a3a3",
      accent: "var(--base-100)",
      accentForeground: "var(--base-900)",
      brandAccent: "#fbbf24",
      inputStyle: {
        opacity: "8%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      uiShadowSm: "0 4px 16px rgb(0 0 0 / 0.04)",
      uiShadowMd: "0 8px 28px rgb(0 0 0 / 0.05)",
      uiShadowSurface: "0 4px 16px rgb(0 0 0 / 0.04), 0 16px 48px rgb(0 0 0 / 0.06)",
      ring: "var(--base-400)",
      uiFillGradTopPrimary: "8%",
      uiFillGradBottomPrimary: "5%",
      uiFillGradLight: "white",
      uiFillGradDark: "black",
      uiScrollbarSize: "8px",
      uiScrollbarTrack: "transparent",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 22%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 36%, transparent)"
    },
    dark: {
      muted: "var(--base-800)",
      accent: "var(--base-800)",
      accentForeground: "var(--base-50)",
      uiShadowSm: "0 2px 8px rgb(0 0 0 / 0.2)",
      uiShadowMd: "0 6px 20px rgb(0 0 0 / 0.22)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.22), 0 14px 36px rgb(0 0 0 / 0.18)",
      ring: "var(--base-500)"
    }
  }
}, Jo = J({
  id: "landing",
  label: "Landing",
  description: "Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.",
  defaults: Qo,
  preset: Xo,
  css: {
    color: "fewui/themes/landing/color.css",
    styles: "fewui/themes/landing/styles.css"
  }
}), el = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, tl = {
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
    heading: "Inter, ui-sans-serif, system-ui, sans-serif"
  },
  tokens: {
    light: {
      radius: "18px",
      radius4xl: "2rem",
      base: {
        50: "oklch(0.985 0 0)",
        100: "oklch(0.967 0.001 286)",
        200: "oklch(0.92 0.004 286)",
        300: "oklch(0.871 0.006 286)",
        400: "oklch(0.705 0.015 286)",
        500: "oklch(0.552 0.016 286)",
        600: "oklch(0.442 0.017 286)",
        700: "oklch(0.37 0.018 286)",
        800: "oklch(0.274 0.018 286)",
        900: "oklch(0.21 0.018 286)",
        950: "oklch(0.141 0.018 286)"
      },
      white: "#ffffff",
      background: "#09090b",
      foreground: "#fafafa",
      surface: "#18181b",
      surfaceForeground: "#fafafa",
      surfaceStyle: {
        opacity: "4%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      control: "#27272a",
      controlForeground: "#fafafa",
      controlStyle: {
        opacity: "6%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      primary: "#6366f1",
      primaryForeground: "#ffffff",
      secondary: "var(--base-200)",
      secondaryForeground: "var(--base-950)",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.58 0.155 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.55 0.22 27)",
      dangerForeground: "oklch(0.985 0.01 27)",
      muted: "var(--base-200)",
      mutedForeground: "var(--base-500)",
      accent: "#eef2ff",
      accentForeground: "#312e81",
      brandAccent: "#a5b4fc",
      inputStyle: {
        opacity: "6%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      uiShadowSm: "0 4px 16px rgb(0 0 0 / 0.04)",
      uiShadowMd: "0 8px 28px rgb(0 0 0 / 0.05)",
      uiShadowSurface: "0 4px 16px rgb(0 0 0 / 0.04), 0 16px 48px rgb(0 0 0 / 0.06)",
      ring: "#6366f1",
      uiFillGradTopPrimary: "8%",
      uiFillGradBottomPrimary: "5%",
      uiFillGradLight: "white",
      uiFillGradDark: "black",
      uiScrollbarSize: "8px",
      uiScrollbarTrack: "transparent",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 22%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 36%, transparent)"
    },
    dark: {
      secondary: "#27272a",
      secondaryForeground: "#fafafa",
      muted: "var(--base-800)",
      mutedForeground: "var(--base-400)",
      accent: "#312e81",
      accentForeground: "#e0e7ff",
      uiShadowSm: "0 2px 8px rgb(0 0 0 / 0.2)",
      uiShadowMd: "0 6px 20px rgb(0 0 0 / 0.22)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.22), 0 14px 36px rgb(0 0 0 / 0.18)",
      ring: "#818cf8"
    }
  }
}, il = J({
  id: "fewui",
  label: "Fewui",
  description: "fewui.com — indigo marka, koyu marketing kabuğu.",
  defaults: el,
  preset: tl,
  css: {
    color: "fewui/themes/fewui/color.css",
    styles: "fewui/themes/fewui/styles.css"
  }
}), Ce = "web", ye = /* @__PURE__ */ new Map();
function rl(e) {
  if (!ri(e))
    throw new Error("[fewui] registerTheme: geçerli bir tema paketi bekleniyor (defineTheme).");
  return ye.set(e.id, e), e;
}
for (const e of [ni, qo, Zo, Jo, il])
  rl(e);
function nl(e) {
  return ye.get(String(e || "").trim()) ?? null;
}
function yu() {
  return [...ye.values()];
}
function Ve(e) {
  if (ri(e)) return e;
  const t = nl(
    /** @type {string} */
    e || Ce
  );
  return t || (typeof import.meta < "u" && console.warn(`[fewui] Bilinmeyen tema "${e}", "${Ce}" kullanılıyor.`), /** @type {ThemePackage} */
  ye.get(Ce));
}
function vu(e) {
  return `fewui/themes/${Ve(e).id}.css`;
}
const ie = /* @__PURE__ */ new WeakMap();
function Ne(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function sl(e, t) {
  if (!e || typeof e != "object") return {};
  if ("light" in e || "dark" in e) {
    const i = (
      /** @type {{ light?: UiThemeTokens, dark?: UiThemeTokens }} */
      e
    );
    return {
      ...X(i.light),
      ...t === "dark" ? X(i.dark) : {}
    };
  }
  return X(
    /** @type {UiThemeTokens} */
    e
  );
}
function je(e, t = {}) {
  const i = Ve(e), n = t.mode === "dark" ? "dark" : "light";
  return { ...t.inline ? $o(i, n) : ei(i.preset.fonts), ...sl(t.overrides, n) };
}
function al(e, t = {}) {
  const i = Ne(t.root);
  if (!i) return {};
  const n = Ve(e), s = t.mode ?? (i.classList.contains("dark") ? "dark" : "light");
  i.classList.toggle("dark", s === "dark");
  const r = !!t.inline, a = je(n, { mode: s, inline: r, overrides: t.overrides }), u = ie.get(i);
  if (u)
    for (const l of u.keys)
      l in a || i.style.removeProperty(l);
  for (const [l, c] of Object.entries(a))
    i.style.setProperty(l, c);
  return ie.set(i, { theme: n, inline: r, overrides: t.overrides, keys: Object.keys(a) }), a;
}
function ku(e, t) {
  const i = Ne(t);
  if (!i) return;
  const n = ie.get(i);
  if (n) {
    al(n.theme, { mode: e, root: i, inline: n.inline, overrides: n.overrides });
    return;
  }
  i.classList.toggle("dark", e === "dark");
}
function Su(e) {
  const t = Ne(e);
  if (!t) return;
  const i = ie.get(t);
  if (i) {
    for (const n of i.keys) t.style.removeProperty(n);
    ie.delete(t);
  }
}
function xu(e, t = {}) {
  const i = je(e, t);
  return {
    classAttr: t.mode === "dark" ? "dark" : "",
    styleAttr: Object.entries(i).map(([n, s]) => `${n}: ${s}`).join("; ")
  };
}
function wu(e, t = {}) {
  const i = je(e, t), n = [], s = Object.entries(i).map(([u, l]) => `${u}: ${l} !important`).join("; ");
  s && n.push(`:root, html, html.dark { ${s} }`);
  const r = i["--font-sans"], a = i["--font-heading"] || r;
  return r && n.push(`html, body { font-family: ${r} !important; }`), a && n.push(`h1, h2, h3, h4, h5, h6 { font-family: ${a} !important; }`), n.join(`
`);
}
function _u(e) {
  if (!e || typeof e != "object") return {};
  const t = {}, i = /* @__PURE__ */ new Set([
    "mode",
    "root",
    "primaryColor",
    "secondaryColor",
    "baseColor",
    "fontFamily",
    "bodyFontFamily",
    "headingFontFamily",
    "colors"
  ]);
  for (const [u, l] of Object.entries(e))
    i.has(u) || l == null || l === "" || (t[u] = l);
  for (const [u, l] of [["destructive", "danger"], ["destructiveForeground", "dangerForeground"]])
    u in t && (t[l] ?? (t[l] = t[u]), delete t[u]);
  const n = e.primaryColor || e.primary;
  n && (t.primary = String(n), t.primaryForeground ?? (t.primaryForeground = No(t.primary)), t.ring ?? (t.ring = `color-mix(in oklab, ${t.primary} 55%, transparent)`));
  const s = e.secondaryColor || e.secondary;
  s && (t.secondary = String(s)), e.baseColor && typeof e.baseColor == "object" && (t.base = { ...e.baseColor });
  const r = e.bodyFontFamily || e.fontFamily;
  r && (t["--font-sans"] = ce(String(r)));
  const a = e.headingFontFamily || r;
  if (a && (t["--font-heading"] = ce(String(a))), e.colors && typeof e.colors == "object")
    for (const [u, l] of Object.entries(e.colors))
      l != null && l !== "" && (t[u] = String(l));
  return t;
}
function Tu(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const n = ii(String(i)), s = { ...e.colors && typeof e.colors == "object" ? e.colors : {} };
  return (t.force || !s["brand-accent"]) && (s["brand-accent"] = n.brandAccent), {
    ...e,
    accent: t.force || !e.accent ? n.accent : e.accent,
    colors: s
  };
}
const ol = {
  name: "TabTrigger",
  mixins: [O],
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
    iconType: re,
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
    ...be(),
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
    !this.uiTabs && typeof import.meta < "u" && console.warn("[TabTrigger] Yalnızca <ui-tabs> içinde kullanılmalı.");
  },
  methods: {
    select() {
      this.disabled || !this.uiTabs || this.uiTabs.setValue(this.value);
    }
  }
}, ll = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], ul = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, dl = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function cl(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-badge");
  return o(), d("button", {
    type: "button",
    role: "tab",
    id: r.triggerDomId,
    class: S(r.triggerClass),
    "aria-selected": r.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : r.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: r.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => r.select && r.select(...l))
  }, [
    i.icon ? (o(), d("span", ul, [
      b(a, {
        name: i.icon,
        type: r.tabIconType,
        size: r.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("v-if", !0),
    h(
      "span",
      {
        class: S([r.labelClass, "ui-tab-trigger-label min-w-0 whitespace-nowrap"])
      },
      [
        p(e.$slots, "default", {}, () => [
          B(
            y(i.label),
            1
            /* TEXT */
          )
        ])
      ],
      2
      /* CLASS */
    ),
    r.showBadge ? (o(), d("span", dl, [
      b(u, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: w(() => [
          B(
            y(r.badgeLabel),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])) : f("v-if", !0)
  ], 10, ll);
}
const Cu = /* @__PURE__ */ T(ol, [["render", cl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/TabTrigger.vue"]]), si = 300, Bt = { info: 0, success: 1, warning: 2, danger: 3 }, V = De({
  /** @type {ToastItem[]} */
  items: []
});
let ae = 0, W = null, te = null;
function ve() {
  te && (clearTimeout(te), te = null);
}
function ai() {
  if (W == null) return null;
  const e = V.items.find((t) => t.id === W);
  return !e || e.sealed ? (W = null, null) : e;
}
function oi() {
  ve();
  const e = ai();
  e && (e.sealed = !0), W = null;
}
function Pt() {
  ve(), te = setTimeout(() => {
    te = null, oi();
  }, si);
}
function he(e) {
  e._timer && (clearTimeout(e._timer), e._timer = null), e.duration > 0 && (e._timer = setTimeout(() => Ge(e.id), e.duration));
}
function li(e, t) {
  const i = Bt[e] ?? 0;
  return (Bt[t] ?? 0) > i ? t : e;
}
function Ot(e, t) {
  return {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    color: e.color ?? "info"
  };
}
function Iu(e = {}) {
  const t = Date.now(), i = e.group !== !1, n = e.duration !== void 0 ? e.duration : 4500, s = e.color ?? "info";
  if (i) {
    const l = ai();
    if (l && t - l.lastAt <= si)
      return ae += 1, l.children.push(Ot(e, ae)), l.color = li(l.color, s), l.lastAt = t, n === 0 || l.duration === 0 ? l.duration = 0 : l.duration = Math.max(l.duration, n), he(l), Pt(), l.id;
  }
  oi(), ae += 1;
  const r = ae, a = Ot(e, r), u = {
    id: r,
    title: a.title,
    description: a.description,
    color: s,
    duration: n,
    children: [a],
    sealed: !i,
    expanded: !1,
    lastAt: t,
    _timer: null
  };
  return V.items.push(u), i && (W = r, Pt()), he(u), r;
}
function fl(e, t) {
  const i = V.items.find((n) => n.id === e);
  !i || i.children.length < 2 || (i.expanded = t === !0, i.expanded ? i._timer && (clearTimeout(i._timer), i._timer = null) : he(i));
}
function hl(e) {
  const t = V.items.find((i) => i.id === e);
  !t || t.children.length < 2 || fl(e, !t.expanded);
}
function Ge(e) {
  const t = V.items.findIndex((n) => n.id === e);
  if (t === -1) return;
  const i = V.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), W === e && (ve(), W = null), V.items.splice(t, 1);
}
function ml(e, t) {
  const i = V.items.find((r) => r.id === e);
  if (!i) return;
  const n = i.children.findIndex((r) => r.id === t);
  if (n === -1) return;
  if (i.children.splice(n, 1), i.children.length === 0) {
    Ge(e);
    return;
  }
  const s = i.children[0];
  i.title = s.title, i.description = s.description, i.color = i.children.reduce(
    (r, a) => li(r, a.color),
    s.color
  ), i.children.length < 2 && (i.expanded = !1, he(i));
}
function Lu() {
  ve(), W = null;
  for (const e of V.items)
    e._timer && clearTimeout(e._timer);
  V.items.splice(0);
}
const Mt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, Rt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger"
}, pl = {
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
    queueDismissToast: Ge,
    queueDismissToastChild: ml,
    toggleToastExpanded: hl,
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
      var n, s, r;
      if (!this.isGrouped(e))
        return e.title || ((s = (n = e.children) == null ? void 0 : n[0]) == null ? void 0 : s.title) || "";
      const t = e.children.map((a) => String(a.title || "").trim()).filter(Boolean), i = [...new Set(t)];
      return i.length === 1 ? i[0] : ((r = e.children[0]) == null ? void 0 : r.title) || e.title || "";
    },
    collapsedDescription(e) {
      var a, u;
      if (!this.isGrouped(e))
        return e.description || ((u = (a = e.children) == null ? void 0 : a[0]) == null ? void 0 : u.description) || "";
      const t = e.children.length, i = e.children.map((l) => String(l.title || "").trim()).filter(Boolean), n = [...new Set(i)], s = e.children.map((l) => String(l.description || "").trim()).filter(Boolean), r = [...new Set(s)];
      return n.length === 1 && r.length === 1 && r[0] ? `${r[0]} · ${this.t("ui.toast.groupCount", { count: t })}` : this.t("ui.toast.groupCount", { count: t });
    },
    groupHeading(e) {
      return this.t("ui.toast.groupHeading", { count: e.children.length });
    },
    onToastClick(e) {
      this.isGrouped(e) && this.toggleToastExpanded(e.id);
    },
    iconFor(e) {
      return Mt[e] || Mt.info;
    },
    iconToneClass(e) {
      return Rt[e] || Rt.info;
    },
    toastClasses(e) {
      return [
        `ui-alert ui-alert--${e.color ?? "info"} ui-alert--toast`,
        this.isGrouped(e) ? "ui-alert--toast-grouped" : ""
      ].filter(Boolean);
    },
    childToastClasses(e) {
      return [
        `ui-alert ui-alert--${e.color ?? "info"} ui-alert--toast`,
        "ui-alert--toast-grouped"
      ];
    },
    toastA11y(e) {
      const t = e.color === "danger", i = this.isGrouped(e);
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
      const t = e.color === "danger";
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite",
        "aria-expanded": "true",
        tabindex: 0
      };
    }
  }
}, gl = { class: "ui-toast-host" }, bl = ["aria-label"], yl = ["onClick", "onKeydown"], vl = { class: "ui-alert-body min-w-0 flex-1" }, kl = {
  key: 0,
  class: "ui-alert-title"
}, Sl = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, xl = ["onClick", "onKeydown"], wl = { class: "ui-alert-body min-w-0 flex-1" }, _l = {
  key: 0,
  class: "ui-alert-title"
}, Tl = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Cl(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-button");
  return o(), _(me, { to: "body" }, [
    h("div", gl, [
      b(yi, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: w(() => [
          (o(!0), d(
            A,
            null,
            G(r.items, (l) => (o(), d("div", {
              key: l.id,
              class: "pointer-events-none flex w-full justify-center"
            }, [
              f(" Açık grup: her bildirim ayrı toast "),
              r.isGrouped(l) && l.expanded ? (o(), d("div", {
                key: 0,
                class: "ui-toast-expanded-stack",
                role: "group",
                "aria-label": r.groupHeading(l)
              }, [
                (o(!0), d(
                  A,
                  null,
                  G(l.children, (c) => (o(), d("div", L({
                    key: c.id,
                    class: [r.childToastClasses(c), "pointer-events-auto"]
                  }, { ref_for: !0 }, r.childA11y(c), {
                    onClick: (g) => r.onToastClick(l),
                    onKeydown: [
                      H(F((g) => r.onToastClick(l), ["prevent"]), ["enter"]),
                      H(F((g) => r.onToastClick(l), ["prevent"]), ["space"])
                    ]
                  }), [
                    h(
                      "span",
                      {
                        class: S(["ui-alert-icon", r.iconToneClass(c.color)]),
                        "aria-hidden": "true"
                      },
                      [
                        b(a, {
                          name: r.iconFor(c.color),
                          size: "sm"
                        }, null, 8, ["name"])
                      ],
                      2
                      /* CLASS */
                    ),
                    h("div", vl, [
                      c.title ? (o(), d(
                        "p",
                        kl,
                        y(c.title),
                        1
                        /* TEXT */
                      )) : f("v-if", !0),
                      c.description ? (o(), d(
                        "p",
                        Sl,
                        y(c.description),
                        1
                        /* TEXT */
                      )) : f("v-if", !0)
                    ]),
                    b(u, {
                      "native-type": "button",
                      variant: "ghost",
                      color: "secondary",
                      cubed: "",
                      size: "sm",
                      class: "ui-toast-dismiss shrink-0",
                      "prefix-icon": "xmark",
                      "aria-label": r.dismissLabel,
                      onClick: F((g) => r.queueDismissToastChild(l.id, c.id), ["stop"])
                    }, null, 8, ["aria-label", "onClick"])
                  ], 16, yl))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, bl)) : (o(), d(
                A,
                { key: 1 },
                [
                  f(" Tek / kapalı grup "),
                  h(
                    "div",
                    {
                      class: S(r.deckClasses(l))
                    },
                    [
                      (o(!0), d(
                        A,
                        null,
                        G(r.stackSheetCount(l), (c) => (o(), d("span", {
                          key: `${l.id}-sheet-${c}`,
                          class: "ui-toast-deck-sheet",
                          "aria-hidden": "true"
                        }))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      h("div", L({
                        class: [r.toastClasses(l), "pointer-events-auto"]
                      }, { ref_for: !0 }, r.toastA11y(l), {
                        onClick: (c) => r.onToastClick(l),
                        onKeydown: [
                          H(F((c) => r.onToastClick(l), ["prevent"]), ["enter"]),
                          H(F((c) => r.onToastClick(l), ["prevent"]), ["space"])
                        ]
                      }), [
                        h(
                          "span",
                          {
                            class: S(["ui-alert-icon", r.iconToneClass(l.color)]),
                            "aria-hidden": "true"
                          },
                          [
                            b(a, {
                              name: r.iconFor(l.color),
                              size: "sm"
                            }, null, 8, ["name"])
                          ],
                          2
                          /* CLASS */
                        ),
                        h("div", wl, [
                          r.collapsedTitle(l) ? (o(), d(
                            "p",
                            _l,
                            y(r.collapsedTitle(l)),
                            1
                            /* TEXT */
                          )) : f("v-if", !0),
                          r.collapsedDescription(l) ? (o(), d(
                            "p",
                            Tl,
                            y(r.collapsedDescription(l)),
                            1
                            /* TEXT */
                          )) : f("v-if", !0)
                        ]),
                        b(u, {
                          "native-type": "button",
                          variant: "ghost",
                          color: "secondary",
                          cubed: "",
                          size: "sm",
                          class: "ui-toast-dismiss shrink-0",
                          "prefix-icon": "xmark",
                          "aria-label": r.dismissLabel,
                          onClick: F((c) => r.queueDismissToast(l.id), ["stop"])
                        }, null, 8, ["aria-label", "onClick"])
                      ], 16, xl)
                    ],
                    2
                    /* CLASS */
                  )
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              ))
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const zu = /* @__PURE__ */ T(pl, [["render", Cl], ["__file", "/Users/serkan/Projects/restta/ui/packages/ui/src/components/Toast.vue"]]), Fu = {
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
}, Au = {
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
}, Il = "fewui-local-fonts", Ll = "fewui-local-fonts-catalog-preview";
let Et = !1;
const zl = Object.freeze([
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
function Fl(e, t = "sans-serif") {
  const i = String(e || "").trim();
  if (!i) return "";
  const s = /\s/.test(i) && !/^["'].*["']$/.test(i) ? `"${i.replace(/"/g, "")}"` : i, r = String(t || "sans-serif").trim() || "sans-serif";
  return `${s}, ${r}`;
}
function Du() {
  return zl.map((e) => ({
    value: e.value,
    label: e.label,
    fontFamily: Fl(e.value, e.fallback)
  }));
}
function Bu(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function Pu(e) {
  return null;
}
function Ou(e = {}) {
  return "";
}
function Mu(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || Il)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function Ru(e = {}) {
  var t;
  return typeof document > "u" ? null : Et && !e.force ? ((t = document.getElementById(e.id || Ll)) == null ? void 0 : t.getAttribute("href")) || "local" : (Et = !0, "local");
}
function Eu(e, t = {}) {
  if (!e || typeof e != "object" || !e.primary) return e;
  const i = ii(String(e.primary)), n = { ...e };
  return (t.force || !n.accent) && (n.accent = i.accent), (t.force || !n.brandAccent) && (n.brandAccent = i.brandAccent), n;
}
const $u = "few", Al = "#1B5CFF", Vu = "#ffffff", $t = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: Al,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function Nu() {
  return {
    light: $t[600],
    dark: $t[600]
  };
}
const ui = "fewui-theme-custom-css";
function Dl(e, t = ui) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let n = document.getElementById(t);
  if (!i) {
    n == null || n.remove();
    return;
  }
  n || (n = document.createElement("style"), n.id = t, document.head.appendChild(n)), n.textContent = i;
}
function ju(e = ui) {
  Dl("", e);
}
export {
  Ru as $,
  El as A,
  Lt as B,
  zo as C,
  ui as D,
  Ql as E,
  $t as F,
  zl as G,
  cu as H,
  Jl as I,
  fu as J,
  Ao as K,
  ru as L,
  Lo as M,
  hu as N,
  Cu as O,
  tu as P,
  mu as Q,
  au as R,
  Fo as S,
  si as T,
  _a as U,
  zu as V,
  qt as W,
  Oe as X,
  wi as Y,
  Ui as Z,
  T as _,
  $l as a,
  Bo as a$,
  Mu as a0,
  Dl as a1,
  al as a2,
  Ou as a3,
  Pu as a4,
  pu as a5,
  wu as a6,
  xu as a7,
  ju as a8,
  Lu as a9,
  $e as aA,
  Vo as aB,
  No as aC,
  Re as aD,
  Ol as aE,
  Xt as aF,
  Iu as aG,
  rl as aH,
  oe as aI,
  Jt as aJ,
  Wl as aK,
  jl as aL,
  tt as aM,
  Kt as aN,
  sl as aO,
  Ve as aP,
  U as aQ,
  pe as aR,
  Bu as aS,
  ge as aT,
  $o as aU,
  Fe as aV,
  fl as aW,
  Ml as aX,
  ku as aY,
  _u as aZ,
  be as a_,
  Su as aa,
  z as ab,
  je as ac,
  Nl as ad,
  q as ae,
  J as af,
  ii as ag,
  Ge as ah,
  Fu as ai,
  gu as aj,
  X as ak,
  bu as al,
  wn as am,
  ce as an,
  Fl as ao,
  ql as ap,
  Nu as aq,
  vu as ar,
  nl as as,
  Du as at,
  re as au,
  R as av,
  ri as aw,
  yu as ax,
  zt as ay,
  Pe as az,
  Vl as b,
  hl as b0,
  Au as b1,
  O as b2,
  Me as b3,
  Rl as b4,
  Eu as b5,
  Tu as b6,
  Q as c,
  hr as d,
  Gl as e,
  Hl as f,
  Ul as g,
  Ce as h,
  Do as i,
  Yl as j,
  Kl as k,
  Ee as l,
  Zl as m,
  $u as n,
  Al as o,
  Vu as p,
  Xl as q,
  eu as r,
  nu as s,
  Ht as t,
  iu as u,
  su as v,
  ou as w,
  uu as x,
  du as y,
  lu as z
};
//# sourceMappingURL=custom-css-Bo-efet4.js.map
