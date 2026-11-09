import { ref as K, reactive as we, inject as Ei, openBlock as o, createElementBlock as d, mergeProps as F, renderSlot as b, resolveComponent as x, normalizeClass as S, createVNode as v, createCommentVNode as f, createElementVNode as m, toDisplayString as y, createTextVNode as D, createBlock as _, resolveDynamicComponent as X, withCtx as w, Teleport as _e, Transition as Re, normalizeStyle as ue, Fragment as B, Comment as Mi, Text as Pi, withModifiers as O, renderList as $, normalizeProps as Jt, guardReactiveProps as ei, useId as ti, withKeys as re, createSlots as ii, withDirectives as Ee, vModelText as ut, vShow as $i, useSlots as Vi, computed as ie, onMounted as Ni, onBeforeUnmount as Hi, watch as ji, nextTick as dt, TransitionGroup as Gi } from "vue";
import { RouterLink as ri } from "vue-router";
const ni = "(max-width: 1023px)", si = K(!1);
function Ae() {
  typeof window > "u" || (si.value = window.matchMedia(ni).matches);
}
if (typeof window < "u") {
  Ae();
  const e = window.matchMedia(ni);
  typeof e.addEventListener == "function" ? e.addEventListener("change", Ae) : typeof e.addListener == "function" && e.addListener(Ae);
}
function P() {
  return si.value;
}
function Ki() {
  return typeof document > "u" ? !1 : document.documentElement.classList.contains("cap-ios");
}
function Wi() {
  return P() || Ki();
}
function ct(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = Wi();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
const ne = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  density: "comfortable"
}, qi = ["comfortable", "compact"];
function Pu(e, t) {
  e != null && e.setAttribute && (t && t !== "comfortable" && qi.includes(t) ? e.setAttribute("data-ui-density", t) : e.removeAttribute("data-ui-density"));
}
function Ne(e) {
  if (!e || typeof e != "object")
    return { ...ne };
  const t = { ...ne };
  for (const i of Object.keys(ne)) {
    const n = e[i];
    n != null && n !== "" && (t[i] = n);
  }
  return t;
}
const He = Symbol("uiDefaults"), Ui = ["solid", "regular", "brands", "light", "duotone", "thin"];
function Te(e, t, i) {
  if (t != null && t !== "")
    return t;
  const n = e == null ? void 0 : e[i];
  return n != null && n !== "" ? (
    /** @type {T} */
    n
  ) : (
    /** @type {T} */
    ne[i]
  );
}
function Y(e, t, { key: i = "controlSize", defaultSize: n = "md" } = {}) {
  if (t != null && t !== "")
    return ct(t, { defaultSize: n });
  const s = (e == null ? void 0 : e[i]) ?? (e == null ? void 0 : e.controlSize) ?? n;
  return ct(s, { defaultSize: n });
}
function Ce(e, t) {
  const i = Te(e, t, "iconType");
  return Ui.includes(i) ? i : "light";
}
const Yi = ["solid", "regular", "brands", "light", "duotone", "thin"], J = {
  type: String,
  default: void 0,
  validator: (e) => e == null || Yi.includes(e)
};
function fe(e = "iconType") {
  return {
    resolvedIconType() {
      return Ce(this.uiDefaults, this[e]);
    }
  };
}
function $u(e, t) {
  const i = we(Ne(t));
  return e.provide(He, i), i;
}
function Vu(e, t) {
  Object.assign(e, Ne(t));
}
function Nu() {
  return Ei(He, ne);
}
const E = {
  inject: {
    uiDefaults: {
      from: He,
      default: () => ne
    }
  }
}, I = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of t)
    i[n] = s;
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
        for (const [n, s] of Object.entries(i))
          s && t.push(n);
    }
  return t.join(" ");
}
const Zi = ["horizontal", "vertical"], Qi = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Zi.includes(e)
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
}, Xi = ["aria-label"];
function Ji(e, t, i, n, s, r) {
  return o(), d("div", F({
    class: r.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16, Xi);
}
const Hu = /* @__PURE__ */ I(Qi, [["render", Ji]]), er = ["info", "success", "warning", "danger"], ft = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, ht = {
  info: "text-[var(--info-ink)]",
  success: "text-[var(--success-ink)]",
  warning: "text-[var(--warning-ink)]",
  danger: "text-[var(--danger-ink)]"
}, tr = ["", "polite", "assertive"], ir = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Durum tonu */
    color: {
      type: String,
      default: "info",
      validator: (e) => er.includes(e)
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
    /**
     * Ekran okuyucu duyurusu (WCAG 4.1.3). Varsayılan `''`: sayfada kalıcı bilgi kutusu, duyurulmaz.
     * `polite` → `role="status"` (işlem sonucu), `assertive` → `role="alert"` (acil hata / uyarı).
     * Eskiden rol renkten türetiliyordu: her warning/danger `alert` oluyor, kalıcı kutular araya giriyordu.
     */
    live: {
      type: String,
      default: "",
      validator: (e) => tr.includes(e)
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
     * Kullanımdan kalktı — alert tek görünümdür; kenarlık temadan gelir (`--ui-alert-border-width`).
     * Eski kullanımlar kırılmasın diye kabul edilir, etkisi yoktur.
     */
    soft: {
      type: Boolean,
      default: !0
    },
    /**
     * Varsayılan slot’u açıklamanın altına değil, satırın sağına koyar.
     * `banner` zaten sağ CTA kullanır; bu prop kart / soft alert için.
     */
    actionsEnd: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dismiss"],
  computed: {
    alertRole() {
      if (this.live === "assertive") return "alert";
      if (this.live === "polite") return "status";
    },
    toneLabel() {
      const e = { info: "Info", success: "Success", warning: "Warning", danger: "Error" };
      return typeof this.$t == "function" ? this.$t(`ui.alert.tone.${this.color}`) : e[this.color] || e.info;
    },
    resolvedIcon() {
      return this.icon || ft[this.color] || ft.info;
    },
    iconToneClass() {
      return ht[this.color] || ht.info;
    },
    resolvedActionsEnd() {
      return !!(this.banner || this.actionsEnd);
    },
    rootClasses() {
      return L(
        `ui-alert ui-alert--${this.color}`,
        this.banner ? "ui-alert--banner" : "",
        this.actionsEnd && !this.banner ? "ui-alert--actions-end" : "",
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
}, rr = ["role", "aria-atomic"], nr = { class: "ui-alert-body" }, sr = {
  key: 0,
  class: "ui-alert-copy"
}, ar = {
  key: 0,
  class: "ui-alert-title"
}, or = { class: "sr-only" }, lr = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, ur = {
  key: 0,
  class: "sr-only"
}, dr = {
  key: 1,
  class: "ui-alert-slot"
}, cr = {
  key: 1,
  class: "ui-alert-actions"
};
function fr(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-button");
  return o(), d("div", F({
    class: r.rootClasses,
    role: r.alertRole,
    "aria-atomic": r.alertRole ? "true" : void 0
  }, r.passthroughAttrs), [
    i.showIcon ? (o(), d("span", {
      key: 0,
      class: S(["ui-alert-icon", r.iconToneClass]),
      "aria-hidden": "true"
    }, [
      b(e.$slots, "icon", {}, () => [
        v(a, {
          name: r.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    m("div", nr, [
      i.title || i.description ? (o(), d("div", sr, [
        i.title ? (o(), d("p", ar, [
          m("span", or, y(r.toneLabel) + ": ", 1),
          D(y(i.title), 1)
        ])) : f("", !0),
        i.description ? (o(), d("p", lr, [
          i.title ? f("", !0) : (o(), d("span", ur, y(r.toneLabel) + ": ", 1)),
          D(y(i.description), 1)
        ])) : f("", !0)
      ])) : f("", !0),
      e.$slots.default && !r.resolvedActionsEnd ? (o(), d("div", dr, [
        b(e.$slots, "default")
      ])) : f("", !0)
    ]),
    e.$slots.default && r.resolvedActionsEnd ? (o(), d("div", cr, [
      b(e.$slots, "default")
    ])) : f("", !0),
    i.dismissible ? (o(), _(u, {
      key: 2,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": r.dismissLabel,
      onClick: r.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, rr);
}
const ju = /* @__PURE__ */ I(ir, [["render", fr]]), ee = Object.freeze(["sm", "md", "lg"]), ai = Object.freeze(["xs", "sm", "md", "lg", "xl"]), Gu = Object.freeze(["xs", "sm", "md", "lg", "xl", "2xl"]), hr = ai, mt = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, mr = ["circle", "rounded", "square"], pr = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, pt = Object.freeze({
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
}), gt = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function gr(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return gt[t] && (t = gt[t]), t >= "A" && t <= "Z" ? t : "default";
}
function br(e) {
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
const yr = {
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
      validator: (e) => hr.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => mr.includes(e)
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
        mt[this.size] || mt.md,
        pr[this.shape] || "",
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
      return br(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? gr(e[0]) : "default";
    },
    letterColors() {
      return pt[this.colorLetterKey] || pt.default;
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
}, vr = ["src", "alt"], kr = ["role", "aria-label", "aria-hidden"];
function Sr(e, t, i, n, s, r) {
  return o(), _(X(r.rootTag), F({
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
      }, null, 40, vr)) : (o(), d("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, y(r.displayInitials), 9, kr))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Ku = /* @__PURE__ */ I(yr, [["render", Sr]]);
let Me = 0;
const oi = [];
function Wu(e) {
  return Me += 1, `${e}-${Me}`;
}
function Z(e) {
  let t = 0;
  const i = () => (t += 1, `${e}-${t}`);
  return oi.push(() => {
    t = 0;
  }), i;
}
function qu() {
  Me = 0;
  for (const e of oi)
    e();
}
const xr = Symbol("uiPortal"), je = {
  inject: {
    uiPortalTarget: {
      from: xr,
      default: null
    }
  },
  computed: {
    portalTarget() {
      return typeof this.uiPortalTarget == "function" && this.uiPortalTarget() || "body";
    }
  }
}, wr = Z("ui-tooltip"), _r = ["top", "bottom", "left", "right"], N = 8, Tr = {
  name: "Tooltip",
  mixins: [je],
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
      validator: (e) => _r.includes(e)
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
      tooltipId: wr(),
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
      const t = e.getBoundingClientRect(), i = N, n = t.left + t.width / 2, s = t.top + t.height / 2;
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
      t === "top" && a.top < N ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, a = n.getBoundingClientRect()) : t === "bottom" && a.bottom > r - N && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, a = n.getBoundingClientRect());
      let u = 0, l = 0;
      if (a.left < N ? u = N - a.left : a.right > s - N && (u = s - N - a.right), a.top < N ? l = N - a.top : a.bottom > r - N && (l = r - N - a.bottom), u === 0 && l === 0) return;
      const c = parseFloat(this.panelStyle.left), p = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(p) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + u}px`,
        top: `${p + l}px`
      });
    }
  }
}, Cr = ["id"], Ir = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function Fr(e, t, i, n, s, r) {
  return o(), d("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => r.onEnter && r.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => r.onLeave && r.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => r.onFocusIn && r.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => r.onFocusOut && r.onFocusOut(...a))
  }, [
    b(e.$slots, "default"),
    s.portalReady ? (o(), _(_e, {
      key: 0,
      to: e.portalTarget
    }, [
      v(Re, { name: "ui-tooltip-fade" }, {
        default: w(() => [
          s.open && !i.disabled && r.hasContent ? (o(), d("div", {
            key: 0,
            id: s.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: ue(s.panelStyle),
            role: "tooltip"
          }, [
            m("span", Ir, [
              b(e.$slots, "content", {}, () => [
                D(y(i.label), 1)
              ])
            ])
          ], 12, Cr)) : f("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"])) : f("", !0)
  ], 544);
}
const li = /* @__PURE__ */ I(Tr, [["render", Fr]]);
function Ge(e, t = ["class", "style"]) {
  const i = new Set(t), n = {};
  for (const [s, r] of Object.entries(e || {}))
    i.has(s) || (n[s] = r);
  return n;
}
function ui(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function di(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * n) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const Lr = ["primary", "secondary", "success", "warning", "info", "danger"], Ar = ["solid", "outline", "muted"], zr = ["xs", "sm", "md", "lg"], ci = {
  primary: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  success: "border border-transparent bg-success text-success-foreground",
  warning: "border border-transparent bg-warning text-warning-foreground",
  info: "border border-transparent bg-info text-info-foreground",
  danger: "border border-transparent bg-danger text-danger-foreground"
}, Dr = {
  primary: "border border-current bg-transparent text-[var(--primary-ink)]",
  secondary: "border border-border bg-transparent text-foreground",
  success: "border border-current bg-transparent text-[var(--success-ink)]",
  warning: "border border-current bg-transparent text-[var(--warning-ink)]",
  info: "border border-current bg-transparent text-[var(--info-ink)]",
  danger: "border border-current bg-transparent text-[var(--danger-ink)]"
}, Br = {
  primary: "border border-transparent bg-primary/12 text-[var(--primary-ink)]",
  secondary: "border border-transparent bg-muted text-muted-foreground",
  success: "border border-transparent bg-success/12 text-[var(--success-ink)]",
  warning: "border border-transparent bg-warning/15 text-[var(--warning-ink)]",
  info: "border border-transparent bg-info/12 text-[var(--info-ink)]",
  danger: "border border-transparent bg-danger/12 text-[var(--danger-ink)]"
}, Or = { solid: ci, outline: Dr, muted: Br }, bt = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, ze = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
}, Rr = {
  name: "Badge",
  components: { Tooltip: li },
  inheritAttrs: !1,
  props: {
    /** Ton — `primary | secondary | success | warning | info | danger` */
    /** Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). */
    color: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Lr.includes(e)
    },
    /** Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini */
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Ar.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => zr.includes(e)
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
      validator: (e) => Object.keys(ze).includes(e)
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
      return (Or[this.variant] || ci)[this.color || (this.variant === "muted" ? "secondary" : "primary")];
    },
    isClickable() {
      return this.clickable || typeof this.$attrs.onClick == "function";
    },
    rootTag() {
      return this.isClickable ? "button" : "span";
    },
    rootAttrs() {
      const e = Ge(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? ze[this.maxWidth] || ze[48] : "";
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
      return L(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        bt[this.size] || bt.sm,
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
}, Er = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Mr = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, Pr = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, $r = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function Vr(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tooltip");
  return o(), _(u, {
    label: r.tooltipLabel,
    disabled: !r.showTooltip,
    placement: "top"
  }, {
    default: w(() => [
      (o(), _(X(r.rootTag), F(r.hexBadgeStyle ? { ...r.rootAttrs, style: r.hexBadgeStyle } : r.rootAttrs, { class: r.badgeClasses }), {
        default: w(() => [
          i.prefixIcon ? (o(), d("span", Er, [
            v(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (o(), d("span", Mr, [
            b(e.$slots, "prepend")
          ])) : f("", !0),
          m("span", {
            ref: "labelRef",
            class: S(["ui-badge-label", [r.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
          }, [
            b(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (o(), d("span", Pr, [
            v(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (o(), d("span", $r, [
            b(e.$slots, "append")
          ])) : f("", !0)
        ]),
        _: 3
      }, 16, ["class"]))
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const Nr = /* @__PURE__ */ I(Rr, [["render", Vr]]);
function Pe(e, t, i) {
  if (e && typeof e.$t == "function") {
    const n = e.$t(t);
    if (n != null && n !== "" && n !== t)
      return n;
  }
  return i;
}
const Hr = ["sm", "md", "lg"], jr = ["solid", "outline", "ghost", "muted", "link", "nav"], Gr = ["primary", "secondary", "input", "warning", "success", "info", "danger"], Kr = ["button", "submit", "reset"], yt = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, vt = {
  sm: "box-border h-[var(--ui-control-h-sm)] min-h-[var(--ui-control-h-sm)] px-[var(--ui-control-px-sm)] py-0 text-xs leading-4",
  md: "box-border h-[var(--ui-control-h-md)] min-h-[var(--ui-control-h-md)] px-[var(--ui-control-px-md)] py-0 text-sm leading-5",
  lg: "box-border h-[var(--ui-control-h-lg)] min-h-[var(--ui-control-h-lg)] px-[var(--ui-control-px-lg)] py-0 text-base leading-6"
}, kt = {
  sm: "box-border h-auto min-h-[var(--ui-control-h-sm)] items-start px-2.5 py-2 text-xs leading-4",
  md: "box-border h-auto min-h-[var(--ui-control-h-md)] items-start px-3 py-2 text-sm leading-5",
  lg: "box-border h-auto min-h-[var(--ui-control-h-lg)] items-start px-4 py-2 text-base leading-6"
}, St = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, xt = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none"
}, Wr = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, wt = {
  solid: {
    primary: "border border-transparent bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border border-transparent text-foreground shadow-none",
    input: "border border-transparent shadow-none",
    warning: "border border-transparent bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border border-transparent bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border border-transparent bg-info text-info-foreground shadow-none hover:opacity-90",
    danger: "border border-transparent bg-danger text-danger-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-current bg-transparent text-[var(--primary-ink)] shadow-none hover:bg-primary/10",
    secondary: "border bg-transparent text-foreground shadow-none hover:bg-[var(--input-background)]",
    warning: "shadow-none border border-current bg-transparent text-[var(--warning-ink)] hover:bg-warning/10",
    success: "shadow-none border border-current bg-transparent text-[var(--success-ink)] hover:bg-success/10",
    info: "shadow-none border border-current bg-transparent text-[var(--info-ink)] hover:bg-info/10",
    danger: "shadow-none border border-current bg-transparent text-[var(--danger-ink)] hover:bg-danger/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-[var(--ui-hover)] hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-[var(--warning-ink)] hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-[var(--success-ink)] hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-[var(--info-ink)] hover:bg-info hover:text-info-foreground",
    danger: "shadow-none border-0 bg-transparent text-[var(--danger-ink)] hover:bg-danger hover:text-danger-foreground"
  },
  /** Yumuşak dolgu — seçili filtre / ikincil vurgu; dolu primary'yi CTA'ya bırakır. */
  muted: {
    primary: "border border-transparent shadow-none bg-primary/12 text-[var(--primary-ink)] hover:bg-primary/18",
    secondary: "border border-transparent shadow-none bg-muted text-foreground hover:bg-muted/80",
    warning: "border border-transparent shadow-none bg-warning/14 text-[var(--warning-ink)] hover:bg-warning/20",
    success: "border border-transparent shadow-none bg-success/14 text-[var(--success-ink)] hover:bg-success/20",
    info: "border border-transparent shadow-none bg-info/14 text-[var(--info-ink)] hover:bg-info/20",
    danger: "border border-transparent shadow-none bg-danger/14 text-[var(--danger-ink)] hover:bg-danger/20"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-[var(--primary-ink)] underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-[var(--warning-ink)] underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-[var(--success-ink)] underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-[var(--info-ink)] underline-offset-4 hover:underline",
    danger: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-[var(--danger-ink)] underline-offset-4 hover:underline"
  },
  nav: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent",
    input: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    warning: "shadow-none border-0 bg-transparent text-[var(--warning-ink)] hover:bg-transparent",
    success: "shadow-none border-0 bg-transparent text-[var(--success-ink)] hover:bg-transparent",
    info: "shadow-none border-0 bg-transparent text-[var(--info-ink)] hover:bg-transparent",
    danger: "shadow-none border-0 bg-transparent text-[var(--danger-ink)] hover:bg-transparent"
  }
}, qr = {
  name: "Button",
  mixins: [E],
  components: { RouterLink: ri },
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
      validator: (e) => Kr.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => jr.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => Gr.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Hr.includes(e)
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
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    themeButtonRounded() {
      return Te(this.uiDefaults, void 0, "buttonRounded");
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : Pe(this, "ui.button.loading", "Loading");
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
      this.stack && !e && !t ? i = xt[this.resolvedSize] || xt.md : this.cubed && !e && !t ? i = St[this.resolvedSize] || St.md : e ? i = Wr[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : this.wrap ? i = kt[this.resolvedSize] || kt.md : i = yt[this.resolvedSize] || yt.md;
      let n = "", s = i;
      !e && !t && (this.wrap ? n = "rounded-xl" : (this.stack || this.rounded || this.cubed || this.themeButtonRounded === "full") && (n = "rounded-full", !this.stack && !this.cubed && (s = vt[this.resolvedSize] || vt.md)));
      const r = ((u = wt[this.variant]) == null ? void 0 : u[this.color]) || ((l = wt.solid) == null ? void 0 : l.primary), a = this.block;
      return [
        "ui-button ui-control font-sans",
        this.stack ? "ui-button--stack" : "",
        this.textAlign === "left" ? "ui-button--align-start" : "",
        this.wrap && !e && !t && !this.stack && !this.cubed ? "ui-button--wrap" : "",
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
      if (e == null || typeof e != "object" || e.type === Mi) return !1;
      if (e.type === Pi)
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
}, Ur = ["href", "data-variant", "data-color", "data-size", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], Yr = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Zr = {
  key: 0,
  class: "sr-only"
}, Qr = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, Xr = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Jr = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, en = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, tn = {
  key: 0,
  class: "ui-button-prefix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, rn = {
  key: 2,
  class: "ui-button-suffix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, nn = ["type", "disabled", "data-variant", "data-color", "data-size", "data-loading", "aria-busy"], sn = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, an = {
  key: 0,
  class: "sr-only"
}, on = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, ln = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, un = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, dn = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, cn = {
  key: 0,
  class: "ui-button-prefix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, fn = {
  key: 2,
  class: "ui-button-suffix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function hn(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("RouterLink");
  return r.hasRouterTo ? (o(), _(u, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: w(({ href: l, navigate: c }) => [
      m("a", {
        href: l,
        class: S(r.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-size": r.resolvedSize,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": r.isDisabled ? "true" : void 0,
        tabindex: r.isDisabled ? -1 : void 0,
        onClick: (p) => r.onRouterLinkClick(p, c)
      }, [
        i.loading && r.usesCubedCenterLayout ? (o(), d(B, { key: 0 }, [
          m("span", Yr, [
            v(a, {
              size: r.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          r.resolvedLoadingText ? (o(), d("span", Zr, y(r.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (o(), d("span", Qr, [
          v(a, {
            size: r.inlineIconSize,
            name: "spinner",
            class: "fa-spin",
            "aria-hidden": "true"
          }, null, 8, ["size"]),
          m("span", {
            class: S(r.textContentClass)
          }, y(r.resolvedLoadingText), 3)
        ])) : i.stack ? (o(), d(B, { key: 2 }, [
          i.prefixIcon ? (o(), d("span", Xr, [
            v(a, {
              size: r.stackIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          r.hasSlotContent() ? (o(), d("span", {
            key: 1,
            class: S(r.textContentClass)
          }, [
            b(e.$slots, "default")
          ], 2)) : f("", !0),
          i.suffixIcon ? (o(), d("span", Jr, [
            v(a, {
              size: r.stackIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64)) : r.usesCubedCenterLayout ? (o(), d("span", en, [
          i.prefixIcon ? (o(), _(a, {
            key: 0,
            size: r.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), _(a, {
            key: 1,
            size: r.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : b(e.$slots, "default", { key: 2 })
        ])) : (o(), d(B, { key: 4 }, [
          i.prefixIcon ? (o(), d("span", tn, [
            v(a, {
              size: r.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          r.hasSlotContent() ? (o(), d("span", {
            key: 1,
            class: S(r.textContentClass)
          }, [
            b(e.$slots, "default")
          ], 2)) : f("", !0),
          i.suffixIcon ? (o(), d("span", rn, [
            v(a, {
              size: r.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, Ur)
    ]),
    _: 3
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
    i.loading && r.usesCubedCenterLayout ? (o(), d(B, { key: 0 }, [
      m("span", sn, [
        v(a, {
          size: r.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      r.resolvedLoadingText ? (o(), d("span", an, y(r.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (o(), d("span", on, [
      v(a, {
        size: r.inlineIconSize,
        name: "spinner",
        class: "fa-spin",
        "aria-hidden": "true"
      }, null, 8, ["size"]),
      m("span", {
        class: S(r.textContentClass)
      }, y(r.resolvedLoadingText), 3)
    ])) : i.stack ? (o(), d(B, { key: 2 }, [
      i.prefixIcon ? (o(), d("span", ln, [
        v(a, {
          size: r.stackIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      r.hasSlotContent() ? (o(), d("span", {
        key: 1,
        class: S(r.textContentClass)
      }, [
        b(e.$slots, "default")
      ], 2)) : f("", !0),
      i.suffixIcon ? (o(), d("span", un, [
        v(a, {
          size: r.stackIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64)) : r.usesCubedCenterLayout ? (o(), d("span", dn, [
      i.prefixIcon ? (o(), _(a, {
        key: 0,
        size: r.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), _(a, {
        key: 1,
        size: r.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : b(e.$slots, "default", { key: 2 })
    ])) : (o(), d(B, { key: 4 }, [
      i.prefixIcon ? (o(), d("span", cn, [
        v(a, {
          size: r.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      r.hasSlotContent() ? (o(), d("span", {
        key: 1,
        class: S(r.textContentClass)
      }, [
        b(e.$slots, "default")
      ], 2)) : f("", !0),
      i.suffixIcon ? (o(), d("span", fn, [
        v(a, {
          size: r.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, nn));
}
const Uu = /* @__PURE__ */ I(qr, [["render", hn]]), mn = ["none", "sm", "md"], _t = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, pn = {
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
      validator: (e) => mn.includes(e)
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
      return ["ui-divider", _t[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        _t[this.spacing] || "",
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
}, gn = { class: "ui-divider__label" }, bn = ["title"];
function yn(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return r.hasLabel ? (o(), d("div", F({
    key: 1,
    class: r.labeledClass
  }, r.labeledAttrs), [
    t[0] || (t[0] = m("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    m("span", gn, [
      i.icon ? (o(), _(a, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (o(), d("span", {
        key: 1,
        ref: "labelRef",
        class: "ui-section-label",
        title: s.labelTruncated ? i.title : void 0
      }, y(i.title), 9, bn)) : f("", !0)
    ]),
    t[1] || (t[1] = m("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (o(), d("hr", F({
    key: 0,
    class: r.rootClass
  }, r.rootAttrs), null, 16));
}
const Ke = /* @__PURE__ */ I(pn, [["render", yn]]), vn = ["solid", "dashed", "dotted", "double"], Tt = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, kn = ["solid", "regular", "brands", "light", "duotone", "thin"], Sn = {
  name: "Card",
  mixins: [E],
  components: { Divider: Ke },
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
      validator: (e) => vn.includes(e)
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
      validator: (e) => e == null || kn.includes(e)
    },
    /** Başlık ikonu karosu tonu (`ui-icon-tile` `color`); verilirse ikon renkli zeminde çizilir. */
    iconColor: {
      type: String,
      default: ""
    },
    /** Başlık ikonu karosu hex rengi (`ui-icon-tile` `hex`) — rapor / kategori rengi */
    iconHex: {
      type: String,
      default: ""
    },
    /** `soft` | `solid` — hex verildiğinde varsayılan `solid` */
    iconVariant: {
      type: String,
      default: ""
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
      return Ce(this.uiDefaults, this.iconType);
    },
    hasIconTile() {
      return !!(this.iconColor || this.iconHex);
    },
    resolvedIconVariant() {
      return this.iconVariant || (this.iconHex ? "solid" : "soft");
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
      return Tt[this.borderType] || Tt.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.stickyHeader && e.push("ui-card--sticky-header"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), this.fullHeight && e.push("ui-card--full-height"), L(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, xn = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, wn = {
  key: 0,
  class: "ui-header-lead"
}, _n = {
  key: 1,
  class: "ui-header-lead__icon"
}, Tn = { class: "ui-header-lead__text" }, Cn = {
  key: 0,
  class: "ui-heading-3"
}, In = {
  key: 1,
  class: "ui-text-default"
}, Fn = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Ln(e, t, i, n, s, r) {
  const a = x("ui-icon-tile"), u = x("ui-icon"), l = x("Divider");
  return o(), d("div", F({ class: r.rootClasses }, r.passthroughAttrs), [
    e.$slots.toolbar ? (o(), d("div", xn, [
      b(e.$slots, "toolbar")
    ])) : f("", !0),
    r.hasHeaderBlock ? (o(), d("div", {
      key: 1,
      class: S(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      b(e.$slots, "header", {}, () => [
        r.hasDefaultHeader ? (o(), d("div", wn, [
          m("div", {
            class: S(["ui-header-lead__main", { "ui-header-lead__main--tile": r.hasIconTile }])
          }, [
            i.icon && r.hasIconTile ? (o(), _(a, {
              key: 0,
              icon: i.icon,
              "icon-type": r.resolvedIconType,
              color: i.iconColor,
              hex: i.iconHex,
              variant: r.resolvedIconVariant,
              size: "md"
            }, null, 8, ["icon", "icon-type", "color", "hex", "variant"])) : i.icon ? (o(), d("span", _n, [
              v(u, {
                name: i.icon,
                type: r.resolvedIconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            m("div", Tn, [
              i.title ? (o(), d("h3", Cn, y(i.title), 1)) : f("", !0),
              i.description ? (o(), d("p", In, y(i.description), 1)) : f("", !0)
            ])
          ], 2),
          e.$slots.append || e.$slots.actions ? (o(), d("div", Fn, [
            b(e.$slots, "append"),
            b(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    r.showHeaderDivider ? (o(), _(l, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (o(), d("div", {
      key: 3,
      class: S(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      b(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (o(), d("div", {
      key: 4,
      class: S(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      b(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Yu = /* @__PURE__ */ I(Sn, [["render", Ln]]), R = we({
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
function Zu(e = {}) {
  return new Promise((t) => {
    R.title = e.title ?? "", R.description = e.description ?? "", R.confirmLabel = e.confirmLabel ?? "", R.cancelLabel = e.cancelLabel ?? "", R.color = e.color || "primary", R._resolve = t, R.open = !0;
  });
}
function Ct(e) {
  const t = R._resolve;
  R.open = !1, R._resolve = null, t && t(!!e);
}
const An = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return R;
    },
    syncOpen: {
      get() {
        return R.open;
      },
      set(e) {
        e ? R.open = !0 : R._resolve ? Ct(!1) : R.open = !1;
      }
    },
    confirmText() {
      return R.confirmLabel ? R.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      Ct(!0);
    }
  }
}, zn = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
function Dn(e, t, i, n, s, r) {
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
      v(a, {
        color: r.confirmState.color,
        block: "",
        size: "lg",
        onClick: r.onConfirm
      }, {
        default: w(() => [
          D(y(r.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    default: w(() => [
      r.confirmState.description ? (o(), d("p", zn, y(r.confirmState.description), 1)) : f("", !0)
    ]),
    _: 1
  }, 8, ["open", "title", "aria-label"]);
}
const Qu = /* @__PURE__ */ I(An, [["render", Dn]]), Bn = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]'
].join(",");
function On(e) {
  return e ? [...e.querySelectorAll(Bn)].filter(
    (t) => t.getClientRects().length > 0 && !t.closest('[inert], [aria-hidden="true"]')
  ) : [];
}
function Rn(e, t) {
  var a;
  if (e.key !== "Tab" || !t) return !1;
  const i = document.activeElement;
  if (i && !t.contains(i)) return !1;
  const n = On(t);
  if (n.length === 0)
    return e.preventDefault(), (a = t.focus) == null || a.call(t), !0;
  const s = n[0], r = n[n.length - 1];
  return e.shiftKey && (i === s || i === t) ? (e.preventDefault(), r.focus(), !0) : !e.shiftKey && i === r ? (e.preventDefault(), s.focus(), !0) : !1;
}
function We() {
  const e = typeof document < "u" ? document.activeElement : null;
  return e && e !== document.body ? e : null;
}
function qe(e) {
  !e || !e.isConnected || typeof e.focus != "function" || e.focus({ preventScroll: !0 });
}
function fi(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e;
  return t === "en" || t === "en-GB" || t === "en-US" ? "en-GB" : "tr-TR";
}
function hi(e, t = "tr-TR", i) {
  if (!(e instanceof Date) || Number.isNaN(e.getTime())) return "";
  const n = fi(t);
  return i === "d MMM yyyy" ? e.toLocaleDateString(n, { day: "numeric", month: "short", year: "numeric" }) : e.toLocaleDateString(n, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Xu(e, t = "tr-TR", i) {
  if (e == null || e === "") return "";
  const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!n) return "";
  const s = Number(n[1]), r = Number(n[2]) - 1, a = Number(n[3]), u = new Date(s, r, a);
  return u.getFullYear() !== s || u.getMonth() !== r || u.getDate() !== a ? "" : hi(u, t, i);
}
const En = Z("ui-datepicker");
function It(e) {
  return String(e).padStart(2, "0");
}
function W(e) {
  return `${e.getFullYear()}-${It(e.getMonth() + 1)}-${It(e.getDate())}`;
}
function De(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), n = Number(t[2]) - 1, s = Number(t[3]), r = new Date(i, n, s);
  return r.getFullYear() !== i || r.getMonth() !== n || r.getDate() !== s ? null : r;
}
const Mn = {
  name: "DatePicker",
  mixins: [E],
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
    const e = De(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: En(),
      menuOpen: !1,
      /** Klavye ile gezilen gün (roving tabindex); seçim değil. */
      focusDate: null,
      viewYear: e.getFullYear(),
      viewMonth: e.getMonth()
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    selectedDate() {
      return De(this.modelValue);
    },
    locale() {
      var e;
      return fi((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder;
      const e = Te(this.uiDefaults, void 0, "dateFormat");
      return hi(this.selectedDate, this.locale, e);
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
    /** Hafta günü başlıkları dile göre (eskiden sabit "Su Mo Tu" — TR arayüzde İngilizce). Izgara pazardan başlar. */
    weekdayLabels() {
      const e = new Date(2024, 0, 7);
      return Array.from({ length: 7 }, (t, i) => {
        const n = new Date(e.getFullYear(), e.getMonth(), e.getDate() + i);
        return {
          key: i,
          short: n.toLocaleDateString(this.locale, { weekday: "short" }).replace(".", ""),
          long: n.toLocaleDateString(this.locale, { weekday: "long" })
        };
      });
    },
    /** Izgarada tek Tab durağı: gezilen gün → seçili → bugün → ayın ilk günü. */
    rovingKey() {
      var i, n, s, r;
      const e = this.calendarCells.filter((a) => a.inMonth && !a.disabled), t = this.focusDate ? W(this.focusDate) : null;
      return ((i = e.find((a) => t && W(a.date) === t)) == null ? void 0 : i.key) || ((n = e.find((a) => a.sel)) == null ? void 0 : n.key) || ((s = e.find((a) => a.today)) == null ? void 0 : s.key) || ((r = e[0]) == null ? void 0 : r.key);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), n = new Date(e, t, 1 - i.getDay()), s = W(this.referenceTodayDate), r = [];
      for (let a = 0; a < 42; a += 1) {
        const u = new Date(n.getFullYear(), n.getMonth(), n.getDate() + a), l = u.getMonth() === t && u.getFullYear() === e, c = u.getDate(), p = W(u), h = `${u.getFullYear()}-${u.getMonth()}-${u.getDate()}`, g = !!(this.selectedDate && p === W(this.selectedDate)), C = s === p, k = !!(this.minYmd && p < this.minYmd);
        r.push({
          key: h,
          d: c,
          out: !l,
          date: u,
          sel: g,
          today: C,
          inMonth: l,
          disabled: k
        });
      }
      return r;
    }
  },
  watch: {
    /** Açılınca odak seçili / bugün gününe (WAI-ARIA date picker dialog). */
    menuOpen(e) {
      var t;
      if (!e) {
        this.focusDate = null;
        const i = document.activeElement;
        (!i || i === document.body || (t = this.$refs.popoverGrid) != null && t.contains(i)) && qe(this.returnFocusEl), this.returnFocusEl = null;
        return;
      }
      this.returnFocusEl = We(), this.$nextTick(() => requestAnimationFrame(() => this.focusRovingCell(this.$refs.popoverGrid)));
    },
    modelValue() {
      const e = De(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = W(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    cellLabel(e) {
      return e.date.toLocaleDateString(this.locale, { day: "numeric", month: "long", year: "numeric", weekday: "long" });
    },
    focusRovingCell(e) {
      var t, i, n;
      (n = (i = (t = e == null ? void 0 : e.querySelector) == null ? void 0 : t.call(e, `[data-key="${this.rovingKey}"]`)) == null ? void 0 : i.focus) == null || n.call(i);
    },
    /** ← → ±1 gün, ↑ ↓ ±1 hafta, Home/End hafta başı/sonu, PageUp/PageDown ±1 ay. */
    onGridKeydown(e) {
      const t = e.currentTarget, i = this.calendarCells.find((r) => r.key === this.rovingKey);
      if (!i) return;
      const n = new Date(i.date), s = {
        ArrowRight: () => n.setDate(n.getDate() + 1),
        ArrowLeft: () => n.setDate(n.getDate() - 1),
        ArrowDown: () => n.setDate(n.getDate() + 7),
        ArrowUp: () => n.setDate(n.getDate() - 7),
        Home: () => n.setDate(n.getDate() - n.getDay()),
        End: () => n.setDate(n.getDate() + (6 - n.getDay())),
        PageDown: () => n.setMonth(n.getMonth() + 1),
        PageUp: () => n.setMonth(n.getMonth() - 1)
      };
      s[e.key] && (e.preventDefault(), s[e.key](), this.focusDate = n, this.viewYear = n.getFullYear(), this.viewMonth = n.getMonth(), this.$nextTick(() => this.focusRovingCell(t)));
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
      const n = W(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", n), this.$emit("change", n), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Pn = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, $n = { class: "mb-3 flex items-center justify-between gap-2" }, Vn = { class: "text-sm font-medium tabular-nums text-foreground" }, Nn = { class: "ui-datepicker-weekdays mb-2" }, Hn = ["title"], jn = {
  key: 0,
  class: "ui-datepicker-quick"
}, Gn = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, Kn = { class: "mb-3 flex items-center justify-between gap-2" }, Wn = { class: "text-sm font-medium tabular-nums text-foreground" }, qn = { class: "ui-datepicker-weekdays mb-2" }, Un = ["title"], Yn = {
  key: 0,
  class: "ui-datepicker-quick"
};
function Zn(e, t, i, n, s, r) {
  const a = x("ui-button"), u = x("ui-popover");
  return o(), d("div", {
    class: S([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.block ? "ui-datepicker--block w-full" : "",
      !i.embedded && !i.block ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (o(), d("div", Pn, [
      m("div", $n, [
        v(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          "aria-label": "Previous month",
          onClick: t[0] || (t[0] = O((l) => r.shiftMonth(-1), ["stop"]))
        }),
        m("span", Vn, y(r.monthTitle), 1),
        v(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          "aria-label": "Next month",
          onClick: t[1] || (t[1] = O((l) => r.shiftMonth(1), ["stop"]))
        })
      ]),
      m("div", Nn, [
        (o(!0), d(B, null, $(r.weekdayLabels, (l) => (o(), d("span", {
          key: l.key,
          title: l.long
        }, y(l.short), 9, Hn))), 128))
      ]),
      m("div", {
        class: "ui-datepicker-grid",
        onKeydown: t[2] || (t[2] = (...l) => r.onGridKeydown && r.onGridKeydown(...l))
      }, [
        (o(!0), d(B, null, $(r.calendarCells, (l) => (o(), _(a, {
          key: l.key,
          variant: r.dayVariant(l),
          color: r.dayColor(l),
          size: "sm",
          cubed: "",
          disabled: l.disabled,
          "data-key": l.key,
          tabindex: l.key === r.rovingKey ? 0 : -1,
          "aria-label": r.cellLabel(l),
          "aria-pressed": l.sel ? "true" : "false",
          "aria-current": l.today ? "date" : void 0,
          "aria-disabled": l.disabled ? "true" : void 0,
          "data-outside": l.inMonth ? void 0 : "true",
          "data-today": l.today ? "true" : void 0,
          onClick: (c) => r.pick(l)
        }, {
          default: w(() => [
            D(y(l.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "data-key", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ], 32),
      i.showQuick ? (o(), d("div", jn, [
        v(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.yesterdayQuickDisabled,
          onClick: t[3] || (t[3] = (l) => r.pickQuick("yesterday"))
        }, {
          default: w(() => [
            D(y(r.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        v(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.todayQuickDisabled,
          onClick: t[4] || (t[4] = (l) => r.pickQuick("today"))
        }, {
          default: w(() => [
            D(y(r.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        v(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.tomorrowQuickDisabled,
          onClick: t[5] || (t[5] = (l) => r.pickQuick("tomorrow"))
        }, {
          default: w(() => [
            D(y(r.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (o(), _(u, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[9] || (t[9] = (l) => s.menuOpen = l),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: w(({ open: l, toggle: c, close: p }) => [
        b(e.$slots, "trigger", {
          open: l,
          toggle: c,
          close: p
        }, () => [
          v(a, {
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
              m("span", {
                class: S([
                  "min-w-0 flex-1 truncate",
                  r.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, y(r.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "block", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: w(({ close: l }) => [
        m("div", Gn, [
          m("div", Kn, [
            v(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[6] || (t[6] = O((c) => r.shiftMonth(-1), ["stop"]))
            }),
            m("span", Wn, y(r.monthTitle), 1),
            v(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[7] || (t[7] = O((c) => r.shiftMonth(1), ["stop"]))
            })
          ]),
          m("div", qn, [
            (o(!0), d(B, null, $(r.weekdayLabels, (c) => (o(), d("span", {
              key: c.key,
              title: c.long
            }, y(c.short), 9, Un))), 128))
          ]),
          m("div", {
            ref: "popoverGrid",
            class: "ui-datepicker-grid",
            onKeydown: t[8] || (t[8] = (...c) => r.onGridKeydown && r.onGridKeydown(...c))
          }, [
            (o(!0), d(B, null, $(r.calendarCells, (c) => (o(), _(a, {
              key: c.key,
              variant: r.dayVariant(c),
              color: r.dayColor(c),
              size: "sm",
              cubed: "",
              disabled: c.disabled,
              "data-key": c.key,
              tabindex: c.key === r.rovingKey ? 0 : -1,
              "aria-label": r.cellLabel(c),
              "aria-pressed": c.sel ? "true" : "false",
              "aria-current": c.today ? "date" : void 0,
              "aria-disabled": c.disabled ? "true" : void 0,
              "data-outside": c.inMonth ? void 0 : "true",
              "data-today": c.today ? "true" : void 0,
              onClick: (p) => r.pick(c, l)
            }, {
              default: w(() => [
                D(y(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "data-key", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ], 544),
          i.showQuick ? (o(), d("div", Yn, [
            v(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.yesterdayQuickDisabled,
              onClick: (c) => r.pickQuick("yesterday", l)
            }, {
              default: w(() => [
                D(y(r.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            v(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.todayQuickDisabled,
              onClick: (c) => r.pickQuick("today", l)
            }, {
              default: w(() => [
                D(y(r.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            v(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.tomorrowQuickDisabled,
              onClick: (c) => r.pickQuick("tomorrow", l)
            }, {
              default: w(() => [
                D(y(r.resolvedTomorrowLabel), 1)
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
const Ju = /* @__PURE__ */ I(Mn, [["render", Zn]]), Qn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"])'
].join(","), Xn = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function Jn(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function Ft(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const n of e.querySelectorAll(t))
    if (Jn(n) && !(i && n.closest(".ui-card-footer")))
      return n;
  return null;
}
function es(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const n of t)
    i.includes(n) || i.push(n);
  return i;
}
function Lt(e, { skipFooter: t = !1 } = {}) {
  const i = Ft(e, Qn, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const n = Ft(e, Xn, { skipFooter: t });
  return n ? (n.focus(), !0) : !1;
}
function ts(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && Lt(t))
    return !0;
  for (const i of es(e))
    if (Lt(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const mi = "ui-scroll-lock";
let oe = 0, $e = null;
function is(e) {
  return (getComputedStyle(e).scrollbarGutter || "").includes("stable");
}
function rs() {
  if (!(typeof document > "u")) {
    if (oe === 0) {
      const e = document.body, t = document.documentElement, i = Math.max(0, window.innerWidth - t.clientWidth);
      $e = {
        htmlOverflow: t.style.overflow,
        bodyOverflow: e.style.overflow,
        htmlOverscroll: t.style.overscrollBehavior,
        bodyOverscroll: e.style.overscrollBehavior,
        htmlPaddingRight: t.style.paddingRight
      }, t.classList.add(mi), t.style.overflow = "hidden", e.style.overflow = "hidden", t.style.overscrollBehavior = "none", e.style.overscrollBehavior = "none", !is(t) && i > 0 && (t.style.paddingRight = `${i}px`);
    }
    oe += 1;
  }
}
function At() {
  if (typeof document > "u" || oe <= 0 || (oe -= 1, oe > 0)) return;
  const e = document.body, t = document.documentElement, i = $e || {
    htmlOverflow: "",
    bodyOverflow: "",
    htmlOverscroll: "",
    bodyOverscroll: "",
    htmlPaddingRight: ""
  };
  t.classList.remove(mi), t.style.overflow = i.htmlOverflow, e.style.overflow = i.bodyOverflow, t.style.overscrollBehavior = i.htmlOverscroll, e.style.overscrollBehavior = i.bodyOverscroll, t.style.paddingRight = i.htmlPaddingRight, $e = null;
}
function pi(e, t) {
  if (typeof window > "u" || typeof document > "u") return "";
  const i = t instanceof Element ? t : document.documentElement;
  return getComputedStyle(i).getPropertyValue(e).trim();
}
function Q(e, t, i) {
  const n = pi(e, i);
  if (!n) return t;
  const s = Number.parseFloat(n);
  return !Number.isFinite(s) || s < 0 ? t : /\ds$/.test(n) ? Math.round(s * 1e3) : Math.round(s);
}
function he(e, t, i) {
  return pi(e, i) || t;
}
const be = {
  dialog: 400,
  confirm: 420,
  floating: 450
}, ns = 10, ye = /* @__PURE__ */ new Map();
function ss() {
  let e = 0;
  for (const t of ye.values()) e = Math.max(e, t.z);
  return e;
}
function gi(e, t, i) {
  const n = t === "modal" ? be.dialog : be.floating, s = Math.max(n, ss() + ns);
  if (ye.set(e, { kind: t, z: s, close: i }), t === "modal")
    for (const [r, a] of ye)
      r !== e && a.kind === "floating" && a.close();
  return s;
}
function bi(e) {
  ye.delete(e);
}
const as = Z("ui-dialog"), os = ["solid", "dashed", "dotted", "double"], zt = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, ls = ["solid", "regular", "brands", "light", "duotone", "thin"], us = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], Dt = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, ds = {
  name: "Dialog",
  mixins: [je, E],
  components: { Divider: Ke },
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
      validator: (e) => e == null || us.includes(e)
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
      validator: (e) => os.includes(e)
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
      validator: (e) => e == null || ls.includes(e)
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
    const e = as();
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
          this.returnFocusEl = We(), this.rootZIndex = this.resolveRootZIndex(), this.layerMounted = !0, rs(), this.$nextTick(() => {
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
    this.clearFocusFallback(), this.clearSheetDragListeners(), this.unbindFooterClearanceObserver(), this.layerMounted && At(), this.releaseLayer(), this.layerMounted = !1, this.layerClosing = !1, this.layerMotionActive = !1;
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
      return zt[this.borderType] || zt.solid;
    },
    resolvedIconType() {
      return Ce(this.uiDefaults, this.iconType);
    },
    resolvedMaxWidth() {
      return Te(this.uiDefaults, this.maxWidth, "dialogMaxWidth");
    },
    maxWidthClass() {
      return Dt[this.resolvedMaxWidth] || Dt.lg;
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
      return Ge(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : Pe(this, "ui.dialog.close", "Close");
    },
    resolvedBackLabel() {
      return this.backLabel != null && this.backLabel !== "" ? this.backLabel : Pe(this, "ui.dialog.back", "Back");
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
    /**
     * Onay diyaloğu her zaman en üsttedir: kayıt üstüne `confirm` tabanı kadar pay eklenir.
     */
    releaseLayer() {
      this.rootZIndex != null && (bi(this), this.rootZIndex = null);
    },
    resolveRootZIndex() {
      const e = gi(this, "modal", () => {
      });
      return this.stackLayer !== "confirm" ? e : Math.max(e, be.confirm) + (e >= be.confirm ? 10 : 0);
    },
    prefersReducedMotion() {
      return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    mobileSheetEasing() {
      return he("--ui-dialog-sheet-easing", "cubic-bezier(0.32, 0.72, 0, 1)");
    },
    /**
     * Süre / eğri tema token’larından (`--ui-dialog-*`, mobil `--ui-dialog-sheet-*`);
     * yoksa aşağıdaki varsayılanlar.
     */
    layerMotionTimings() {
      if (P()) {
        const t = this.mobileSheetEasing();
        return {
          enterMs: Q("--ui-dialog-sheet-enter-duration", 260),
          leaveMs: Q("--ui-dialog-sheet-leave-duration", 200),
          snapMs: Q("--ui-dialog-sheet-snap-duration", 220),
          easing: t,
          leaveEasing: he("--ui-dialog-sheet-leave-easing", t)
        };
      }
      return {
        enterMs: Q("--ui-dialog-enter-duration", 220),
        leaveMs: Q("--ui-dialog-leave-duration", 150),
        snapMs: 180,
        easing: he("--ui-dialog-easing", "cubic-bezier(0.16, 1, 0.3, 1)"),
        leaveEasing: he("--ui-dialog-leave-easing", "cubic-bezier(0.4, 0, 0.2, 1)")
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
      return P() ? !1 : this.surfaceBackdropBlurPx() > 0;
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
      const n = P(), { panel: s, motion: r, backdrop: a } = this.layerMotionParts(e);
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
      const t = this.layerMotionParts(e), { panel: i, motion: n, backdrop: s } = t, r = P(), a = this.preferGlassSafeOverlayMotion(), { enterMs: u, easing: l } = this.layerMotionTimings(), c = `${u / 1e3}s`, h = `${Math.round(u * 0.72) / 1e3}s`;
      this.layerMotionActive = !0, n && (n.style.removeProperty("transform"), n.style.removeProperty("transition")), s && (s.style.transition = "none", s.style.opacity = "0"), i && (i.style.transition = "none", r ? (i.style.opacity = "1", i.style.transform = "translate3d(0, 100%, 0)") : (i.style.opacity = "0", i.style.transform = this.desktopEnterTransform(a))), e.offsetHeight, this.runOnNextFrames(() => {
        !this.layerMounted || this.layerClosing || (s && (s.style.transition = `opacity ${h} ${l}`, s.style.opacity = "1"), i && (r ? (i.style.transition = `transform ${c} ${l}`, i.style.opacity = "1", i.style.transform = "translate3d(0, 0, 0)") : (i.style.transition = `opacity ${c} ${l}, transform ${c} ${l}`, i.style.opacity = "1", i.style.transform = this.desktopRestTransform())), this.waitLayerTransition(i || s, u + 80, () => {
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
      if (!e || this.prefersReducedMotion() || document.visibilityState === "hidden") {
        i();
        return;
      }
      const n = P(), s = this.preferGlassSafeOverlayMotion(), r = this.layerMotionParts(e);
      this.freezeSheetGeometry(r.panel);
      const a = n && !!((k = r.panel) != null && k.style.transform && r.panel.style.transform !== "none");
      this.clearLayerInlineMotion(e, {
        preserveMobilePanelTransform: n,
        preserveBackdrop: a
      });
      const { panel: u, motion: l, backdrop: c } = r, { leaveMs: p, leaveEasing: h } = this.layerMotionTimings(), g = `${p / 1e3}s`, C = `${Math.round(p * 0.85) / 1e3}s`;
      this.layerMotionActive = !0, l && (l.style.removeProperty("transform"), l.style.removeProperty("transition")), e.offsetHeight, this.runOnNextFrames(() => {
        c && (c.style.transition = `opacity ${C} ${h}`, c.style.opacity = "0"), n && u ? (u.style.transition = `transform ${g} ${h}`, u.style.transform = "translate3d(0, 100%, 0)") : u && (u.style.transition = `opacity ${g} ${h}, transform ${g} ${h}`, u.style.opacity = "0", u.style.transform = this.desktopLeaveTransform(s)), this.waitLayerTransition(u || c, p + 80, i);
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
        this.layerMounted = !1, this.layerClosing = !1, this.releaseLayer(), At(), this.resetPanelMotionStyles(), this.open && this.$emit("update:open", !1), this.$emit("after-leave"), qe(this.returnFocusEl), this.returnFocusEl = null;
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
      if (P()) return;
      const e = this.$refs.panelRef;
      e && ts(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (this.closeOnEscape && e.key === "Escape") {
        e.preventDefault(), this.close();
        return;
      }
      Rn(e, this.$refs.panelRef);
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
      if (!P() || e.button !== 0 || this.isSheetDragBlockedTarget(e.target)) return;
      const t = this.$refs.layerRef, i = this.$refs.panelRef;
      if (!t || !i) return;
      e.preventDefault(), this.teardownSheetDrag();
      const n = t.querySelector(".ui-dialog-backdrop"), s = e.clientY, r = i.style.transition, a = (n == null ? void 0 : n.style.transition) || "";
      i.style.transition = "none", n && (n.style.transition = "none");
      const u = (h) => {
        const g = Math.max(0, h.clientY - s);
        i.style.transform = `translate3d(0, ${g}px, 0)`, n && (n.style.opacity = String(this.sheetBackdropOpacityForDrag(i, g)));
      }, l = (h, g) => {
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), g) {
          i.style.removeProperty("transition"), n && n.style.removeProperty("transition"), this.close();
          return;
        }
        const C = `${this.layerMotionTimings().snapMs / 1e3}s`, k = this.mobileSheetEasing();
        i.style.transition = `transform ${C} ${k}`, i.style.transform = "translate3d(0, 0, 0)", n && (n.style.transition = `opacity ${C} ${k}`, n.style.opacity = "1");
        const A = (T) => {
          T.target !== i && T.target !== n || (i.removeEventListener("transitionend", A), n == null || n.removeEventListener("transitionend", A), i.style.transition = r, i.style.removeProperty("transform"), n && (n.style.transition = a, n.style.removeProperty("opacity")));
        };
        i.addEventListener("transitionend", A), n == null || n.addEventListener("transitionend", A);
      }, c = (h) => {
        const g = Math.max(0, h.clientY - s);
        l(g, g >= 72);
      }, p = () => {
        l(0, !1);
      };
      window.addEventListener("pointermove", u), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", p), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", p);
      };
    }
  }
}, cs = ["aria-labelledby", "aria-describedby", "aria-label"], fs = { class: "ui-dialog-motion" }, hs = { class: "ui-dialog-header__lead" }, ms = ["id"], ps = {
  key: 1,
  class: "ui-dialog-header__icon"
}, gs = {
  key: 2,
  class: "ui-dialog-header__actions"
}, bs = ["id"], ys = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function vs(e, t, i, n, s, r) {
  const a = x("ui-button"), u = x("ui-icon"), l = x("Divider");
  return s.portalReady ? (o(), _(_e, {
    key: 0,
    to: e.portalTarget
  }, [
    s.layerMounted ? (o(), d("div", {
      key: 0,
      ref: "layerRef",
      class: S(r.rootLayerClasses),
      style: ue(r.rootLayerStyle),
      tabindex: "-1",
      role: "presentation",
      onKeydown: t[4] || (t[4] = (...c) => r.onLayerKeydown && r.onLayerKeydown(...c))
    }, [
      m("div", {
        class: "ui-dialog-backdrop absolute inset-0 bg-black/70",
        "aria-hidden": "true",
        onClick: t[0] || (t[0] = (...c) => r.onBackdrop && r.onBackdrop(...c))
      }),
      m("div", F({
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
        onClick: t[3] || (t[3] = O(() => {
        }, ["stop"]))
      }), [
        m("div", fs, [
          m("div", {
            class: "ui-dialog-sheet-grab shrink-0",
            onPointerdown: t[1] || (t[1] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
          }, [...t[5] || (t[5] = [
            m("div", {
              class: "ui-dialog-sheet-handle",
              "aria-hidden": "true"
            }, null, -1)
          ])], 32),
          r.hasHeaderBlock ? (o(), d("div", {
            key: 0,
            class: "ui-card-header ui-dialog-sheet-drag shrink-0",
            onPointerdown: t[2] || (t[2] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
          }, [
            b(e.$slots, "header", {}, () => [
              r.hasDefaultHeader ? (o(), d("div", {
                key: 0,
                class: S(["ui-dialog-header", {
                  "ui-dialog-header--no-icon": !i.icon,
                  "ui-dialog-header--with-back": i.withBack,
                  "ui-dialog-header--with-close": i.showClose
                }])
              }, [
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
                }, null, 8, ["aria-label", "onClick"])) : f("", !0),
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
                    D(y(r.resolvedBackLabel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : f("", !0),
                m("div", hs, [
                  r.hasTitle ? (o(), d("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-dialog-header__title ui-heading-2"
                  }, [
                    b(e.$slots, "title", {}, () => [
                      D(y(i.title), 1)
                    ])
                  ], 8, ms)) : f("", !0),
                  i.icon ? (o(), d("span", ps, [
                    v(u, {
                      name: i.icon,
                      type: r.resolvedIconType,
                      size: "md"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0)
                ]),
                e.$slots.append || e.$slots.actions ? (o(), d("div", gs, [
                  b(e.$slots, "append"),
                  b(e.$slots, "actions")
                ])) : f("", !0),
                r.hasDescription ? (o(), d("p", {
                  key: 3,
                  id: s.descriptionId,
                  class: "ui-dialog-header__description ui-text-default"
                }, [
                  b(e.$slots, "description", {}, () => [
                    D(y(i.description), 1)
                  ])
                ], 8, bs)) : f("", !0)
              ], 2)) : f("", !0)
            ])
          ], 32)) : f("", !0),
          e.$slots.toolbar ? (o(), d("div", ys, [
            b(e.$slots, "toolbar")
          ])) : f("", !0),
          r.showHeaderDivider ? (o(), _(l, {
            key: 2,
            spacing: "none",
            class: "!my-0 shrink-0"
          })) : f("", !0),
          e.$slots.default ? (o(), d("div", {
            key: 3,
            class: S(["ui-card-body ui-text-default", {
              "ui-card-body--row": i.row,
              "ui-card-body--flush": i.bodyPadding === "none",
              "ui-card-body--flex": i.bodyLayout === "flex"
            }])
          }, [
            b(e.$slots, "default")
          ], 2)) : f("", !0),
          e.$slots.footer ? (o(), d("div", {
            key: 4,
            ref: "footerRef",
            class: S(["ui-card-footer", { "ui-dialog-footer--transparent": i.footerTransparent }])
          }, [
            b(e.$slots, "footer")
          ], 2)) : f("", !0)
        ])
      ], 16, cs)
    ], 38)) : f("", !0)
  ], 8, ["to"])) : f("", !0);
}
const ed = /* @__PURE__ */ I(ds, [["render", vs]]), ks = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Ss = {
  name: "Dropdown",
  components: { Divider: Ke },
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
      validator: (e) => ks.includes(e)
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
  watch: {
    /**
     * WAI-ARIA Menu Button: açılınca odak ilk öğeye, kapanınca açan düğmeye döner.
     * `#menu` slotuyla özel içerik verilirse de `[role="menuitem"]` öğeleri gezilir.
     */
    isOpen(e) {
      var t;
      if (e)
        this.returnFocusEl = We(), this.$nextTick(() => requestAnimationFrame(() => this.focusItem(0)));
      else {
        const i = document.activeElement;
        (!i || i === document.body || ((t = this.$refs.menu) == null ? void 0 : t.contains(i))) && qe(this.returnFocusEl), this.returnFocusEl = null;
      }
    }
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
    menuItems() {
      const e = this.$refs.menu;
      return e ? [...e.querySelectorAll('[role="menuitem"]:not([disabled]):not([aria-disabled="true"])')] : [];
    },
    focusItem(e) {
      const t = this.menuItems();
      if (!t.length) return;
      const i = (e % t.length + t.length) % t.length;
      t[i].focus();
    },
    onMenuKeydown(e, t) {
      const n = this.menuItems().indexOf(document.activeElement), s = {
        ArrowDown: () => this.focusItem(n + 1),
        ArrowUp: () => this.focusItem(n < 0 ? -1 : n - 1),
        Home: () => this.focusItem(0),
        End: () => this.focusItem(-1)
      };
      if (s[e.key]) {
        e.preventDefault(), s[e.key]();
        return;
      }
      e.key === "Tab" && (e.preventDefault(), t());
    },
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
}, xs = ["onKeydown"], ws = {
  key: 1,
  class: "ui-dropdown-heading",
  role: "presentation"
}, _s = {
  key: 0,
  class: "ui-dropdown-item-copy"
}, Ts = {
  key: 0,
  class: "ui-dropdown-item-icon",
  "aria-hidden": "true"
}, Cs = { class: "ui-dropdown-item-label" }, Is = { class: "ui-dropdown-item-description" };
function Fs(e, t, i, n, s, r) {
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
    trigger: w((p) => [
      b(e.$slots, "trigger", Jt(ei(p)))
    ]),
    content: w(({ close: p }) => [
      m("div", {
        ref: "menu",
        class: S(["ui-dropdown-menu", r.hasDescribedItems ? "ui-dropdown-menu--described" : ""]),
        role: "menu",
        onClick: t[0] || (t[0] = O(() => {
        }, ["stop"])),
        onKeydown: (h) => r.onMenuKeydown(h, p)
      }, [
        b(e.$slots, "before", { close: p }),
        e.$slots.menu ? b(e.$slots, "menu", {
          key: 0,
          close: p
        }) : (o(!0), d(B, { key: 1 }, $(i.items, (h, g) => (o(), d(B, { key: g }, [
          h.divider ? (o(), _(a, {
            key: 0,
            spacing: "sm"
          })) : h.heading ? (o(), d("span", ws, y(h.heading), 1)) : (o(), _(l, {
            key: 2,
            variant: "ghost",
            color: r.itemColor(h),
            rounded: !h.description,
            block: "",
            "text-align": "left",
            role: "menuitem",
            tabindex: "-1",
            "prefix-icon": h.description ? null : h.icon || null,
            "suffix-icon": r.itemSuffixIcon(h),
            disabled: h.disabled,
            wrap: !!h.description,
            onClick: O((C) => r.onItem(h, p), ["stop"])
          }, {
            default: w(() => [
              h.description ? (o(), d("span", _s, [
                h.icon ? (o(), d("span", Ts, [
                  v(u, {
                    name: h.icon,
                    size: "sm"
                  }, null, 8, ["name"])
                ])) : f("", !0),
                m("span", Cs, y(h.label), 1),
                m("span", Is, y(h.description), 1)
              ])) : (o(), d(B, { key: 1 }, [
                D(y(h.label), 1)
              ], 64))
            ]),
            _: 2
          }, 1032, ["color", "rounded", "prefix-icon", "suffix-icon", "disabled", "wrap", "onClick"]))
        ], 64))), 128))
      ], 42, xs)
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const td = /* @__PURE__ */ I(Ss, [["render", Fs]]), Ls = ee, As = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, zs = {
  name: "Empty",
  mixins: [E],
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
      validator: (e) => e == null || Ls.includes(e)
    }
  },
  computed: {
    ...fe(),
    resolvedSize() {
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    iconSize() {
      return As[this.resolvedSize] ?? "md";
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
}, Ds = {
  key: 0,
  class: "ui-empty-icon"
}, Bs = {
  key: 1,
  class: "ui-empty-title"
}, Os = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Rs = {
  key: 3,
  class: "ui-empty-actions"
};
function Es(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d("div", F({ class: r.rootClass }, r.passthroughAttrs), [
    r.resolvedIcon ? (o(), d("div", Ds, [
      v(a, {
        name: r.resolvedIcon,
        type: e.resolvedIconType,
        size: r.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (o(), d("h2", Bs, y(i.title), 1)) : f("", !0),
    i.description ? (o(), d("p", Os, y(i.description), 1)) : f("", !0),
    e.$slots.default ? (o(), d("div", Rs, [
      b(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const id = /* @__PURE__ */ I(zs, [["render", Es]]), yi = Symbol("ui-form-field"), Ue = {
  inject: {
    uiFormField: { from: yi, default: null }
  },
  created() {
    this.uiFormField && this.uiFormField.ownerUid == null && (this.uiFormField.ownerUid = this.$.uid);
  },
  beforeUnmount() {
    this.uiFormField && this.uiFormField.ownerUid === this.$.uid && (this.uiFormField.ownerUid = null);
  },
  computed: {
    ownsFormField() {
      return !!this.uiFormField && this.uiFormField.ownerUid === this.$.uid;
    },
    formFieldId() {
      return this.ownsFormField && this.uiFormField.id || void 0;
    },
    formFieldInvalid() {
      return this.ownsFormField && this.uiFormField.invalid ? "true" : void 0;
    }
  },
  methods: {
    /** Dışarıdan verilen `aria-describedby` ile satırın açıklama/hata id'lerini birleştirir. */
    formFieldDescribedBy(e) {
      const t = [e, this.ownsFormField ? this.uiFormField.describedBy : void 0].filter(Boolean).join(" ").split(/\s+/).filter(Boolean);
      return t.length ? [...new Set(t)].join(" ") : void 0;
    }
  }
}, Ms = Z("ui-form-control"), Ps = ["vertical", "horizontal"], $s = ["default", "card"], Vs = {
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
      validator: (e) => Ps.includes(e)
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
      validator: (e) => $s.includes(e)
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: void 0
    },
    /**
     * Alan hatası (WCAG 3.3.1). Verilince kontrolün altında gösterilir; kontrol `aria-invalid`
     * ve `aria-describedby` ile otomatik bağlanır (FormRow içindeki ilk fewui kontrolü).
     */
    error: {
      type: String,
      default: ""
    },
    /** Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) */
    primary: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = Ms(), t = e.slice(16);
    return {
      fallbackId: e,
      fallbackDescId: `ui-form-desc-${t}`,
      fallbackErrorId: `ui-form-error-${t}`,
      /** İçerideki kontrolün okuduğu bağlam — id, açıklama/hata bağlantısı, geçersizlik. */
      fieldContext: we({ id: "", describedBy: void 0, invalid: !1, ownerUid: null })
    };
  },
  provide() {
    return { [yi]: this.fieldContext };
  },
  watch: {
    controlId: { immediate: !0, handler(e) {
      this.fieldContext.id = e;
    } },
    describedBy: { immediate: !0, handler(e) {
      this.fieldContext.describedBy = e;
    } },
    invalid: { immediate: !0, handler(e) {
      this.fieldContext.invalid = e;
    } }
  },
  computed: {
    controlId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : void 0;
    },
    invalid() {
      return !!this.error;
    },
    errorId() {
      return this.invalid ? this.fallbackErrorId : void 0;
    },
    /** Kontrolün `aria-describedby` değeri: açıklama + hata. */
    describedBy() {
      return [this.descriptionId, this.errorId].filter(Boolean).join(" ") || void 0;
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
}, Ns = ["data-primary-field"], Hs = {
  key: 0,
  class: "ui-form-row-text"
}, js = ["for"], Gs = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Ks = ["id"], Ws = { class: "ui-form-row-control" }, qs = ["id"], Us = ["id"];
function Ys(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d("div", F({
    class: ["ui-form-row", r.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    r.hasTextBlock ? (o(), d("div", Hs, [
      i.label || e.$slots.action ? (o(), d("div", {
        key: 0,
        class: S(r.labelLineClass)
      }, [
        i.label ? (o(), d("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: r.controlId
        }, y(i.label), 9, js)) : f("", !0),
        e.$slots.action ? (o(), d("div", Gs, [
          b(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description && r.descriptionWithLabel ? (o(), d("p", {
        key: 1,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, y(i.description), 9, Ks)) : f("", !0)
    ])) : f("", !0),
    m("div", Ws, [
      b(e.$slots, "default", {
        controlId: r.controlId,
        descriptionId: r.describedBy,
        invalid: r.invalid
      }),
      i.description && !r.descriptionWithLabel ? (o(), d("p", {
        key: 0,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, y(i.description), 9, qs)) : f("", !0),
      r.invalid ? (o(), d("p", {
        key: 1,
        id: r.errorId,
        class: "ui-form-row-error"
      }, [
        v(a, {
          name: "circle-exclamation",
          size: "xs",
          class: "ui-form-row-error-icon",
          "aria-hidden": "true"
        }),
        m("span", null, y(i.error), 1)
      ], 8, Us)) : f("", !0)
    ])
  ], 16, Ns);
}
const rd = /* @__PURE__ */ I(Vs, [["render", Ys]]), Bt = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Zs = ai, Qs = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, Xs = {
  name: "Icon",
  mixins: [E],
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
      validator: (e) => Zs.includes(e)
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
    ...fe("type"),
    faWeightClass() {
      return Bt[this.resolvedIconType] || Bt.light;
    },
    iconClass() {
      return L(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Qs[this.size],
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
function Js(e, t, i, n, s, r) {
  return o(), d("i", F({ class: r.iconClass }, r.rootAttrs), null, 16);
}
const nd = /* @__PURE__ */ I(Xs, [["render", Js]]), ea = ["primary", "secondary", "success", "warning", "info", "danger"], ta = ["soft", "solid"], ia = ["sm", "md", "lg"], ra = ["rounded", "circle"], na = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, sa = {
  name: "IconTile",
  mixins: [E],
  inheritAttrs: !1,
  props: {
    icon: {
      type: String,
      required: !0
    },
    iconType: J,
    /** `primary | secondary | success | warning | info | danger`; boş → nötr */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || ea.includes(e)
    },
    /** `soft`: tonun açık zemini + ton rengi ikon · `solid`: dolu ton + ön plan rengi */
    variant: {
      type: String,
      default: "soft",
      validator: (e) => ta.includes(e)
    },
    /** Geçerli hex (#RGB / #RRGGBB); verilirse `color` yerine kullanılır */
    hex: {
      type: String,
      default: ""
    },
    /** sm 28px · md 40px · lg 44px */
    size: {
      type: String,
      default: "md",
      validator: (e) => ia.includes(e)
    },
    shape: {
      type: String,
      default: "rounded",
      validator: (e) => ra.includes(e)
    }
  },
  computed: {
    ...fe(),
    normalizedHex() {
      return ui(this.hex);
    },
    iconSize() {
      return na[this.size] || "md";
    },
    rootClass() {
      const e = this.normalizedHex ? "hex" : this.color || "muted";
      return L(
        "ui-icon-tile",
        `ui-icon-tile--${this.size}`,
        `ui-icon-tile--${this.shape}`,
        `ui-icon-tile--${this.variant}`,
        `ui-icon-tile--${e}`,
        this.$attrs.class
      );
    },
    hexStyle() {
      if (this.normalizedHex)
        return this.variant === "solid" ? {
          "--ui-icon-tile-bg": this.normalizedHex,
          "--ui-icon-tile-fg": di(this.normalizedHex)
        } : {
          "--ui-icon-tile-bg": `color-mix(in oklab, ${this.normalizedHex} 14%, transparent)`,
          "--ui-icon-tile-fg": this.normalizedHex
        };
    },
    passthroughAttrs() {
      const { class: e, style: t, ...i } = this.$attrs;
      return i;
    }
  }
};
function aa(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d("span", F({
    class: r.rootClass,
    style: [e.$attrs.style, r.hexStyle],
    "aria-hidden": "true"
  }, r.passthroughAttrs), [
    v(a, {
      name: i.icon,
      type: e.resolvedIconType,
      size: r.iconSize
    }, null, 8, ["name", "type", "size"])
  ], 16);
}
const sd = /* @__PURE__ */ I(sa, [["render", aa]]), oa = ee, la = ["default", "plain"], ua = {
  name: "Input",
  mixins: [E, Ue],
  inheritAttrs: !1,
  props: {
    /** `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). */
    variant: {
      type: String,
      default: "default",
      validator: (e) => la.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || oa.includes(e)
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
    return { fallbackId: ti() };
  },
  computed: {
    /**
     * Form satırındaki tüm kontroller aynı yükseklikte kalır; `ui-form-row primary`
     * yalnızca odak hedefidir, boyutu büyütmez. Büyük alan gerekiyorsa `size="lg"` verilir.
     */
    resolvedSize() {
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return this.id != null && this.id !== "" ? this.id : this.formFieldId || this.fallbackId;
    },
    resolvedDescribedBy() {
      return this.formFieldDescribedBy(this.$attrs["aria-describedby"]);
    },
    resolvedInvalid() {
      return this.$attrs["aria-invalid"] ?? this.formFieldInvalid;
    },
    passthroughAttrs() {
      return Ge(this.$attrs, [
        "aria-describedby",
        "aria-invalid",
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
}, da = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, ca = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, fa = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby", "aria-invalid"], ha = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby", "aria-invalid"], ma = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, pa = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function ga(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), d("div", {
    class: S([r.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (o(), d("div", da, [
      b(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (o(), d("span", ca, [
      v(a, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    i.multiline ? (o(), d("textarea", F({
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
      maxlength: i.maxlength,
      "aria-describedby": r.resolvedDescribedBy,
      "aria-invalid": r.resolvedInvalid
    }, r.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...u) => r.onInput && r.onInput(...u)),
      onChange: t[1] || (t[1] = (u) => e.$emit("change", u)),
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), null, 16, fa)) : (o(), d("input", F({
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
      maxlength: i.maxlength,
      "aria-describedby": r.resolvedDescribedBy,
      "aria-invalid": r.resolvedInvalid
    }, r.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...u) => r.onInput && r.onInput(...u)),
      onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
      onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
      onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
    }), null, 16, ha)),
    i.suffixIcon ? (o(), d("span", ma, [
      v(a, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (o(), d("div", pa, [
      b(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const ad = /* @__PURE__ */ I(ua, [["render", ga]]), ba = ["ul", "ol", "div"], ya = ["plain", "bordered", "divided"], va = ["compact", "normal", "relaxed"], ka = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => ba.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => ya.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => va.includes(e)
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
function Sa(e, t, i, n, s, r) {
  return o(), _(X(i.tag), F({
    class: r.listClass,
    role: "list"
  }, r.passthroughAttrs), {
    default: w(() => [
      b(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const od = /* @__PURE__ */ I(ka, [["render", Sa]]), xa = ["start", "center"], wa = ["li", "div"], _a = ee, Ta = ["danger"], Ca = ["chevron", "external", "none"], Ia = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, Fa = {
  name: "ListItem",
  mixins: [E],
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`) — serbest içerik düzeni. */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: J,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => xa.includes(e)
    },
    /** `div`: `role="list"` taşıyan `div` içinde (ör. kart içi ayar listesi) */
    tag: {
      type: String,
      default: "li",
      validator: (e) => wa.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Sağdaki kısa durum metni (chevron'un solunda) */
    value: {
      type: String,
      default: ""
    },
    /** Satır başı ikon karosu (`ui-icon-tile`) */
    icon: {
      type: String,
      default: ""
    },
    iconType: J,
    /** İkon karosu tonu (`ui-icon-tile` `color`) */
    iconColor: {
      type: String,
      default: ""
    },
    /** İkon karosu hex rengi (`ui-icon-tile` `hex`) — kategori / marka rengi */
    iconHex: {
      type: String,
      default: ""
    },
    /** `soft` | `solid` — hex verildiğinde varsayılan `solid` */
    iconVariant: {
      type: String,
      default: ""
    },
    /** `danger`: başlık tehlike tonunda (ör. hesabı sil) */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || Ta.includes(e)
    },
    /** sm / md: 14px başlık · lg: 16px başlık */
    size: {
      type: String,
      default: "md",
      validator: (e) => _a.includes(e)
    },
    /** `vue-router` hedefi — satır bağlantı olur */
    to: {
      type: [String, Object],
      default: void 0
    },
    /** Satır düğme olur ve `click` yayar */
    interactive: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Tıklanabilir satırda sağ gösterge: `chevron` | `external` | `none` */
    trailingIcon: {
      type: String,
      default: "chevron",
      validator: (e) => Ca.includes(e)
    }
  },
  emits: ["click"],
  computed: {
    resolvedPrefixIconType() {
      return Ce(this.uiDefaults, this.prefixIconType);
    },
    usesRowLayout() {
      return !!(this.title || this.description || this.value || this.icon || this.$slots.title);
    },
    actionable() {
      return this.interactive || this.to != null;
    },
    actionBind() {
      return this.actionable ? {
        type: "button",
        variant: "nav",
        color: this.color === "danger" ? "danger" : "secondary",
        size: "lg",
        block: !0,
        textAlign: "left",
        wrap: !0,
        disabled: this.disabled,
        to: this.to
      } : {};
    },
    tileSize() {
      return Ia[this.size] || "sm";
    },
    resolvedIconVariant() {
      return this.iconVariant || (this.iconHex ? "solid" : "soft");
    },
    resolvedTrailingIcon() {
      return !this.actionable || this.$slots.trailing ? "" : this.trailingIcon === "external" ? "arrow-up-right-from-square" : this.trailingIcon === "chevron" ? "chevron-right" : "";
    },
    titleClass() {
      return L("ui-list-item-title", this.color === "danger" ? "ui-list-item-title--danger" : "");
    },
    itemClass() {
      return this.usesRowLayout ? L(
        "ui-list-item",
        "ui-list-item--row",
        `ui-list-item--${this.size}`,
        this.actionable ? "ui-list-item--actionable" : "",
        this.disabled ? "ui-list-item--disabled" : ""
      ) : L(
        "ui-list-item",
        this.align === "center" ? "ui-list-item--center" : ""
      );
    }
  },
  methods: {
    onClick(e) {
      !this.actionable || this.disabled || this.$emit("click", e);
    },
    /** Serbest içerik düzeninde (geriye uyumlu) satır tıklaması `click` olarak iletilir. */
    onRootClick(e) {
      this.usesRowLayout || this.$emit("click", e);
    }
  }
}, La = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Aa = { class: "ui-list-item-text" }, za = {
  key: 0,
  class: "ui-list-item-description"
}, Da = {
  key: 2,
  class: "ui-list-item-trailing"
}, Ba = {
  key: 0,
  class: "ui-list-item-value"
}, Oa = {
  key: 3,
  class: "ui-list-item-chevron",
  "aria-hidden": "true"
}, Ra = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Ea = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Ma = { class: "ui-list-item-content min-w-0 flex-1" }, Pa = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function $a(e, t, i, n, s, r) {
  const a = x("ui-icon-tile"), u = x("ui-icon");
  return o(), _(X(i.tag), {
    class: S(r.itemClass),
    role: "listitem",
    onClick: r.onRootClick
  }, {
    default: w(() => [
      r.usesRowLayout ? (o(), _(X(r.actionable ? "ui-button" : "div"), F({ key: 0 }, r.actionBind, {
        class: r.actionable ? void 0 : "ui-list-item-row",
        onClick: r.onClick
      }), {
        default: w(() => [
          m("span", {
            class: S(r.actionable ? "ui-list-item-row" : "contents")
          }, [
            i.icon ? (o(), _(a, {
              key: 0,
              icon: i.icon,
              "icon-type": i.iconType,
              color: i.iconColor,
              hex: i.iconHex,
              variant: r.resolvedIconVariant,
              size: r.tileSize
            }, null, 8, ["icon", "icon-type", "color", "hex", "variant", "size"])) : e.$slots.prefix ? (o(), d("span", La, [
              b(e.$slots, "prefix")
            ])) : f("", !0),
            m("span", Aa, [
              m("span", {
                class: S(r.titleClass)
              }, [
                b(e.$slots, "title", {}, () => [
                  D(y(i.title), 1)
                ])
              ], 2),
              i.description || e.$slots.description ? (o(), d("span", za, [
                b(e.$slots, "description", {}, () => [
                  D(y(i.description), 1)
                ])
              ])) : f("", !0),
              b(e.$slots, "default")
            ]),
            i.value || e.$slots.trailing ? (o(), d("span", Da, [
              i.value ? (o(), d("span", Ba, y(i.value), 1)) : f("", !0),
              b(e.$slots, "trailing")
            ])) : f("", !0),
            r.resolvedTrailingIcon ? (o(), d("span", Oa, [
              v(u, {
                name: r.resolvedTrailingIcon,
                type: "solid",
                size: "sm"
              }, null, 8, ["name"])
            ])) : f("", !0)
          ], 2)
        ]),
        _: 3
      }, 16, ["class", "onClick"])) : (o(), d(B, { key: 1 }, [
        i.prefixIcon ? (o(), d("span", Ra, [
          v(u, {
            name: i.prefixIcon,
            type: r.resolvedPrefixIconType,
            size: "xs",
            class: "ui-list-item-prefix-icon"
          }, null, 8, ["name", "type"])
        ])) : e.$slots.prefix ? (o(), d("span", Ea, [
          b(e.$slots, "prefix")
        ])) : f("", !0),
        m("div", Ma, [
          b(e.$slots, "default")
        ]),
        e.$slots.trailing ? (o(), d("div", Pa, [
          b(e.$slots, "trailing")
        ])) : f("", !0)
      ], 64))
    ]),
    _: 3
  }, 8, ["class", "onClick"]);
}
const ld = /* @__PURE__ */ I(Fa, [["render", $a]]), Va = Z("ui-phone-number"), Na = ee, Ot = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Ha = {
  name: "Phone",
  mixins: [E, Ue],
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
      default: () => Ot
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Na.includes(e)
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
    return { fallbackId: Va() };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : Ot;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return this.id != null && this.id !== "" ? this.id : this.formFieldId || this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.phone.placeholder") : "";
    },
    /** Görünen değer ("+90") erişilebilir adın başında — WCAG 2.5.3 Label in Name. */
    countryTriggerLabel() {
      return [this.innerCountry, this.resolvedCountryAria].filter(Boolean).join(" ");
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
}, ja = { class: "ui-phone-prepend" }, Ga = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ka(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-select"), l = x("ui-input");
  return o(), d("div", {
    class: S(r.rootClass)
  }, [
    v(l, F({
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
      "aria-describedby": e.formFieldDescribedBy(i.ariaDescribedby),
      "aria-invalid": e.formFieldInvalid
    }, r.numberPassthrough, {
      onFocus: t[2] || (t[2] = (c) => e.$emit("focus", c)),
      onBlur: t[3] || (t[3] = (c) => e.$emit("blur", c))
    }), {
      prepend: w(() => [
        m("div", ja, [
          v(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          r.isSingleCountry ? (o(), d("span", Ga, y(r.innerCountry), 1)) : (o(), _(u, {
            key: 1,
            modelValue: r.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (c) => r.innerCountry = c),
            variant: "inline",
            size: r.resolvedSize,
            options: r.countryOptions,
            disabled: i.disabled,
            "aria-label": r.countryTriggerLabel
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby", "aria-invalid"])
  ], 2);
}
const ud = /* @__PURE__ */ I(Ha, [["render", Ka]]), Wa = ["numeric", "alphanumeric"], qa = {
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
      validator: (e) => Wa.includes(e)
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
}, Ua = ["aria-label", "data-mask"], Ya = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Za(e, t, i, n, s, r) {
  return o(), d("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    style: ue({ "--ui-pin-cols": String(i.length) }),
    class: S([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (o(!0), d(B, null, $(i.length, (a, u) => (o(), d("span", {
      key: u,
      class: "ui-pin-slot"
    }, [
      m("input", {
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
      }, null, 40, Ya)
    ]))), 128))
  ], 14, Ua);
}
const dd = /* @__PURE__ */ I(qa, [["render", Za]]), Rt = "ui-keyboard-inset-change";
function Qa() {
  if (typeof document > "u") return 0;
  const e = document.documentElement, t = e.style.getPropertyValue("--ui-keyboard-inset") || getComputedStyle(e).getPropertyValue("--ui-keyboard-inset"), i = parseFloat(t);
  return Number.isFinite(i) && i > 0 ? i : 0;
}
function Et() {
  if (typeof window > "u") return 0;
  let e = window.innerHeight - Qa();
  const t = window.visualViewport;
  return t && t.height > 0 && (e = Math.min(e, t.offsetTop + t.height)), Math.max(0, e);
}
function Xa(e) {
  if (typeof window > "u") return () => {
  };
  const t = window.visualViewport;
  return window.addEventListener(Rt, e), t == null || t.addEventListener("resize", e), t == null || t.addEventListener("scroll", e), () => {
    window.removeEventListener(Rt, e), t == null || t.removeEventListener("resize", e), t == null || t.removeEventListener("scroll", e);
  };
}
const Ja = [
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
], Mt = 10, eo = 256, Pt = 120, to = 320, io = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], ro = {
  name: "Popover",
  mixins: [je],
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
      validator: (e) => Ja.includes(e)
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
    /**
     * Konum referansı — verilirse panel tetikleyici yerine bu öğeye göre açılır
     * (HTMLElement, bileşen örneği veya CSS seçici). Tetikleyicisiz kullanımda (`#trigger` boş)
     * `v-model:open` ile programatik açılır; bu öğeye tıklama dış tıklama sayılmaz.
     */
    anchor: {
      type: [String, Object],
      default: null
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
      /** Mobil backdrop — `open` ile senkron; leave süresi `motionDuration` ile zorunlu biter. */
      backdropVisible: !1,
      portalReady: !1,
      /** Transition süresi — tema `--ui-popover-enter-duration` / `--ui-popover-leave-duration` verebilir. */
      motionDuration: { enter: 180, leave: 120 }
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.backdropVisible;
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
      e ? (this.syncMotionDuration(), this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && P(), this.backdropVisible = this.mobileCenteredActive, this.acquireLayer(), this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      })) : (this.mobileCenteredActive && (this.mobileCenteredLeaving = !0), this.mobileCenteredActive = !1, this.backdropVisible = !1, this.releaseLayer(), this.teardownGlobalListeners());
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.portalReady = !0, this.syncMotionDuration(), this.open && (this.acquireLayer(), this.$nextTick(() => {
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
    /** Transition `duration` render’da okunur — açılış render’ından önce çağrılır. */
    syncMotionDuration() {
      const e = this.$refs.rootRef;
      this.motionDuration = {
        enter: Q("--ui-popover-enter-duration", 180, e),
        leave: Q("--ui-popover-leave-duration", 120, e)
      };
    },
    onPopoverAfterLeave() {
      this.mobileCenteredLeaving = !1;
    },
    onBackdropAfterLeave() {
      this.backdropVisible = !1;
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
      this.layerZIndex || (this.layerZIndex = gi(this, "floating", () => this.close()), this.layerStyle = this.withLayerZIndex({ ...this.layerStyle }));
    },
    releaseLayer() {
      this.layerZIndex && (bi(this), this.layerZIndex = 0);
    },
    withLayerZIndex(e) {
      const t = this.layerZIndex;
      return {
        ...e,
        // Panel, mobil backdrop (`layerZIndex`) üzerinde kalsın.
        zIndex: String(t + 1)
      };
    },
    resolveAnchorEl() {
      const e = this.anchor;
      return !e || typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : e.$el instanceof HTMLElement ? e.$el : null;
    },
    resolveTriggerEl() {
      const e = this.resolveAnchorEl();
      if (e) return e;
      const t = this.$refs.triggerRef;
      return t ? this.inheritLayout && t.firstElementChild instanceof HTMLElement ? t.firstElementChild : t : null;
    },
    updatePosition() {
      var T, M;
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, n = Et(), s = Mt, r = this.resolvedWidth;
      (T = this.$refs.layerRef) == null || T.style.removeProperty("--ui-popover-available-h"), r == null && ((M = this.$refs.layerRef) == null || M.style.removeProperty("width"));
      const a = e.getBoundingClientRect(), u = t.offsetWidth || 0, l = Math.ceil(a.width);
      let c;
      r != null ? c = u || 200 : this.matchTriggerWidth ? c = Math.max(u, l) : c = u || 200;
      const p = t.offsetHeight || 120;
      if (P() && this.mobileCentered) {
        this.mobileCenteredActive = !0, this.backdropVisible = !0;
        const z = i - s * 2, V = Math.min(Math.max(c, eo), z), te = Math.max(s, Math.round((i - V) / 2)), j = n - s * 2, G = {
          top: `${Math.max(s, Math.round((n - Math.min(p, j)) / 2))}px`,
          left: `${te}px`,
          "--ui-popover-origin": "center center",
          "--ui-popover-available-h": `${Math.max(Pt, Math.floor(j))}px`
        };
        r != null ? (G.width = r, G.minWidth = r) : (G.width = `${V}px`, this.matchTriggerWidth && (G.minWidth = `${Math.min(l, z)}px`), G.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(G);
        return;
      }
      this.mobileCenteredActive = !1, this.backdropVisible = !1;
      let h, g;
      switch (this.placement) {
        case "right-start":
          h = a.top, g = a.right + s;
          break;
        case "right-end":
          h = a.bottom - p, g = a.right + s;
          break;
        case "left-start":
          h = a.top, g = a.left - s - c;
          break;
        case "left-end":
          h = a.bottom - p, g = a.left - s - c;
          break;
        case "top-start":
          h = a.top - s - p, g = a.left;
          break;
        case "top-end":
          h = a.top - s - p, g = a.right - c;
          break;
        case "top":
          h = a.top - s - p, g = a.left + (a.width - c) / 2;
          break;
        case "bottom-end":
          h = a.bottom + s, g = a.right - c;
          break;
        case "bottom":
          h = a.bottom + s, g = a.left + (a.width - c) / 2;
          break;
        case "bottom-start":
        default:
          h = a.bottom + s, g = a.left;
          break;
      }
      this.placement.startsWith("right") && g + c > i - s && (g = a.left - s - c), this.placement.startsWith("left") && g < s && (g = a.right + s), this.placement.startsWith("top") && h < s && (h = a.bottom + s), g + c > i - s && (g = Math.max(s, i - s - c)), g < s && (g = s);
      let C = null;
      if (this.placement.startsWith("bottom") && h + p > n - s) {
        const z = n - s - h, V = a.top - s * 2;
        V >= p ? h = a.top - s - p : V > z ? (h = s, C = V) : C = z;
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (h + p > n - s && (h = Math.max(s, n - s - p)), h < s && (h = s));
      const k = this.matchTriggerWidth && r == null ? `${Math.ceil(a.width)}px` : void 0;
      C == null && (C = n - s - h);
      const A = {
        top: `${Math.round(h)}px`,
        left: `${Math.round(g)}px`,
        minWidth: k,
        "--ui-popover-origin": this.resolveMotionOrigin(a, h, g, c, p),
        "--ui-popover-available-h": `${Math.max(Pt, Math.floor(C))}px`
      };
      r != null && (A.width = r, A.minWidth = r), this.layerStyle = this.withLayerZIndex(A), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const r = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, u = r.getBoundingClientRect(), l = a.getBoundingClientRect(), c = l.top - u.top, p = l.left - u.left, h = i.getBoundingClientRect(), g = this.layerStyle.top, C = this.layerStyle.left;
      let k = typeof g == "string" && g !== "" ? parseFloat(g) : h.top, A = typeof C == "string" && C !== "" ? parseFloat(C) : h.left;
      Number.isNaN(k) && (k = h.top), Number.isNaN(A) && (A = h.left);
      let T = k - c, M = A - p;
      const z = Mt, V = Et(), te = window.innerWidth, j = h.height, ae = h.width;
      T + j > V - z && (T = Math.max(z, V - z - j)), T < z && (T = z), M + ae > te - z && (M = Math.max(z, te - z - ae)), M < z && (M = z), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(T)}px`,
        left: `${Math.round(M)}px`
      });
    },
    bindGlobalListeners() {
      var e;
      (e = this.offVisibleViewport) == null || e.call(this), this.offVisibleViewport = Xa(this.onVisibleViewportChange), window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0), this.observePanelSize();
    },
    /**
     * İçerik açıldıktan sonra değişirse (yükleniyor → seçenekler) panel yeniden
     * konumlanır; aksi halde ilk ölçülen yükseklikte (ör. iskelet) kalır.
     */
    observePanelSize() {
      var i;
      (i = this.panelResizeObserver) == null || i.disconnect(), this.panelResizeObserver = null;
      const e = this.$refs.panelRef;
      if (!e || typeof ResizeObserver > "u") return;
      let t = !0;
      this.panelResizeObserver = new ResizeObserver(() => {
        if (t) {
          t = !1;
          return;
        }
        this.open && this.schedulePosition();
      }), this.panelResizeObserver.observe(e);
    },
    teardownGlobalListeners() {
      var e, t;
      (e = this.panelResizeObserver) == null || e.disconnect(), this.panelResizeObserver = null, (t = this.offVisibleViewport) == null || t.call(this), this.offVisibleViewport = null, this.viewportSettleTimer && (clearTimeout(this.viewportSettleTimer), this.viewportSettleTimer = null), window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("pointerdown", this.onDocPointerDown, !0), document.removeEventListener("keydown", this.onDocKeydown, !0);
    },
    /**
     * Klavye açılıp kapanınca: hemen yerleş, sonra dialog sheet’in klavyeyle
     * yükselme geçişi bitince (tetikleyici yer değiştirir) bir kez daha.
     */
    onVisibleViewportChange() {
      this.open && (this.updatePosition(), this.viewportSettleTimer && clearTimeout(this.viewportSettleTimer), this.viewportSettleTimer = setTimeout(() => {
        this.viewportSettleTimer = null, this.open && this.updatePosition();
      }, to));
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, i = e == null ? void 0 : e.target;
      t && i instanceof Node && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      var s;
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, i = this.$refs.triggerRef, n = this.$refs.panelRef;
      i != null && i.contains(t) || n != null && n.contains(t) || (s = this.resolveAnchorEl()) != null && s.contains(t) || this.shouldIgnoreOutsideClick(t) || (e.preventDefault(), e.stopPropagation(), this.close());
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
      for (const r of io)
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
}, no = ["data-popover-align-active", "data-ui-popover-mobile-centered"], so = { class: "ui-popover-motion" }, ao = {
  key: 0,
  class: "ui-popover-header"
}, oo = { class: "ui-popover-body min-h-0 min-w-0" }, lo = {
  key: 1,
  class: "ui-popover-footer"
};
function uo(e, t, i, n, s, r) {
  return o(), d("div", {
    ref: "rootRef",
    class: S([r.rootShellClass, e.$attrs.class])
  }, [
    m("div", {
      ref: "triggerRef",
      class: S(r.triggerShellClass)
    }, [
      b(e.$slots, "trigger", {
        open: i.open,
        toggle: r.toggle,
        close: r.close
      })
    ], 2),
    s.portalReady ? (o(), _(_e, {
      key: 0,
      to: e.portalTarget
    }, [
      v(Re, {
        name: "ui-overlay-popover-backdrop",
        duration: s.motionDuration,
        onAfterLeave: r.onBackdropAfterLeave
      }, {
        default: w(() => [
          r.showMobileBackdrop ? (o(), d("div", {
            key: "ui-popover-mobile-backdrop",
            class: "ui-popover-backdrop fixed inset-0 bg-black/70",
            style: ue(r.backdropStyle),
            "aria-hidden": "true",
            onPointerdown: t[0] || (t[0] = O((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"])),
            onClick: t[1] || (t[1] = O((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"]))
          }, null, 36)) : f("", !0)
        ]),
        _: 1
      }, 8, ["duration", "onAfterLeave"]),
      v(Re, {
        name: "ui-overlay-popover",
        appear: "",
        duration: s.motionDuration,
        onBeforeEnter: r.onPopoverBeforeEnter,
        onAfterLeave: r.onPopoverAfterLeave
      }, {
        default: w(() => [
          i.open ? (o(), d("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: ue(s.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": r.popoverMobileCenteredAttr ? "" : void 0,
            "data-ui-popover-layer": "",
            onPointerdown: t[3] || (t[3] = O(() => {
            }, ["stop"]))
          }, [
            m("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[2] || (t[2] = (...a) => r.onPanelKeydown && r.onPanelKeydown(...a))
            }, [
              m("div", so, [
                e.$slots.header ? (o(), d("div", ao, [
                  b(e.$slots, "header", { close: r.close })
                ])) : f("", !0),
                m("div", oo, [
                  b(e.$slots, "content", { close: r.close })
                ]),
                e.$slots.footer ? (o(), d("div", lo, [
                  b(e.$slots, "footer", { close: r.close })
                ])) : f("", !0)
              ])
            ], 544)
          ], 44, no)) : f("", !0)
        ]),
        _: 3
      }, 8, ["duration", "onBeforeEnter", "onAfterLeave"])
    ], 8, ["to"])) : f("", !0)
  ], 2);
}
const cd = /* @__PURE__ */ I(ro, [["render", uo]]), co = {
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
    /** `list` varyantında satırları eşit iç boşluklu kutu yapar; seçili satır dolgu ile vurgulanır (kenarlık yok). */
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
      if (!this.uiRadioGroup) return !1;
      const e = this.uiRadioGroup.modelValue;
      return e == null ? !1 : e === this.value || String(e) === String(this.value);
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
}, fo = ["name", "value", "checked"], ho = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, mo = {
  key: 0,
  class: "ui-radio-dot"
}, po = { class: "ui-radio-body" }, go = { class: "ui-radio-label" }, bo = {
  key: 0,
  class: "ui-radio-description"
};
function yo(e, t, i, n, s, r) {
  var a;
  return o(), d("label", {
    class: S([
      "ui-radio",
      `ui-radio--${r.groupVariant}`,
      {
        "ui-radio--checked": r.isChecked,
        "ui-radio--highlight": i.highlight
      }
    ]),
    onClick: t[1] || (t[1] = (...u) => r.select && r.select(...u)),
    onKeydown: [
      t[2] || (t[2] = re(O((...u) => r.select && r.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = re(O((...u) => r.select && r.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    m("input", {
      type: "radio",
      name: (a = r.uiRadioGroup) == null ? void 0 : a.groupName,
      value: r.stringValue,
      checked: r.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => r.select && r.select(...u))
    }, null, 40, fo),
    m("span", ho, [
      r.isChecked ? (o(), d("span", mo)) : f("", !0)
    ]),
    m("span", po, [
      m("span", go, y(i.label), 1),
      i.description ? (o(), d("span", bo, y(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const fd = /* @__PURE__ */ I(co, [["render", yo]]), vo = Z("ui-radio-group"), ko = ["list", "button"], So = ["vertical", "horizontal"], xo = {
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
      validator: (e) => ko.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || So.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: vo() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
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
}, wo = ["aria-label"];
function _o(e, t, i, n, s, r) {
  return o(), d("div", {
    class: S(r.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    b(e.$slots, "default")
  ], 10, wo);
}
const hd = /* @__PURE__ */ I(xo, [["render", _o]]), To = {
  name: "Segment",
  components: { RouterLink: ri },
  mixins: [E],
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
    },
    /**
     * `vue-router` hedefi; verildiğinde segment `<a>` olarak çizilir (gezinme kapsülü).
     * Seçili durum yine grubun `modelValue` değerinden gelir; seçili bağlantı `aria-current="page"` alır.
     */
    to: {
      type: [String, Object],
      default: null
    }
  },
  computed: {
    ...fe("iconType"),
    /** Varsayılan `duotone`; `icon-type` verilirse o kullanılır. */
    segmentIconType() {
      return this.iconType != null && this.iconType !== "" ? this.resolvedIconType : "duotone";
    },
    hasRouterTo() {
      return this.to != null && this.to !== "" && !this.disabled;
    },
    rootAttrs() {
      var t;
      if (this.hasRouterTo)
        return { to: this.to, "aria-current": this.isSelected ? "page" : void 0 };
      const e = !!((t = this.uiSegmentGroup) != null && t.navigation);
      return {
        type: "button",
        role: e ? void 0 : "radio",
        "aria-checked": e ? void 0 : this.isSelected ? "true" : "false",
        tabindex: e ? void 0 : this.rovingTabindex,
        disabled: this.disabled
      };
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
    /** Radio grubunda tek Tab durağı: seçili segment; seçim yoksa hepsi odaklanabilir. */
    rovingTabindex() {
      var t;
      const e = (t = this.uiSegmentGroup) == null ? void 0 : t.modelValue;
      return e == null || e === "" || this.isSelected ? 0 : -1;
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
      this.disabled || !this.uiSegmentGroup || this.hasRouterTo || this.uiSegmentGroup.$emit("update:modelValue", this.value);
    }
  }
}, Co = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, Io = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Fo = {
  key: 2,
  class: "ui-segment-label"
}, Lo = {
  key: 3,
  class: "sr-only"
}, Ao = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function zo(e, t, i, n, s, r) {
  const a = x("ui-icon");
  return o(), _(X(r.hasRouterTo ? "RouterLink" : "button"), F(r.rootAttrs, {
    class: r.segmentClass,
    onClick: r.select
  }), {
    default: w(() => [
      r.hasPrepend ? (o(), d("span", Co, [
        b(e.$slots, "prepend")
      ])) : f("", !0),
      i.icon ? (o(), d("span", Io, [
        v(a, {
          name: i.icon,
          type: r.segmentIconType,
          size: r.iconSize
        }, null, 8, ["name", "type", "size"])
      ])) : f("", !0),
      r.showLabel ? (o(), d("span", Fo, y(i.label), 1)) : i.label ? (o(), d("span", Lo, y(i.label), 1)) : f("", !0),
      r.hasAppend ? (o(), d("span", Ao, [
        b(e.$slots, "append")
      ])) : f("", !0)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const md = /* @__PURE__ */ I(To, [["render", zo]]), $t = /* @__PURE__ */ new Map();
function Do(e, t) {
  const i = e.getBoundingClientRect();
  let n = e.parentElement;
  for (; n && n !== t; ) {
    const { overflowX: s, overflowY: r } = getComputedStyle(n);
    if (s !== "visible" || r !== "visible") {
      const a = n.getBoundingClientRect(), u = Math.min(i.right, a.right) - Math.max(i.left, a.left), l = Math.min(i.bottom, a.bottom) - Math.max(i.top, a.top);
      if (u < 1 || l < 1) return !0;
    }
    n = n.parentElement;
  }
  return !1;
}
const vi = {
  data() {
    return {
      indicatorRect: null,
      indicatorInstant: !0,
      /** Büyüme animasyonunu her geçişte yeniden başlatmak için `a` / `b` arasında değişir. */
      indicatorPop: ""
    };
  },
  computed: {
    indicatorRootAttrs() {
      return this.indicatorEnabled ? { "data-ui-indicator": this.indicatorRect ? "ready" : "pending" } : {};
    },
    indicatorBind() {
      const e = this.indicatorRect;
      return {
        "aria-hidden": "true",
        "data-instant": this.indicatorInstant ? "true" : void 0,
        "data-pop": this.indicatorPop || void 0,
        style: e ? {
          width: `${e.width}px`,
          height: `${e.height}px`,
          transform: `translate3d(${e.x}px, ${e.y}px, 0)`,
          "--ui-indicator-radius": e.radius || void 0
        } : { opacity: "0" }
      };
    }
  },
  watch: {
    indicatorEnabled(e) {
      e ? this.$nextTick(() => this.startIndicator()) : this.stopIndicator();
    }
  },
  mounted() {
    this.indicatorEnabled && this.startIndicator();
  },
  beforeUnmount() {
    this.stopIndicator();
  },
  methods: {
    /** Ölçüm kapsayıcısı — varsayılan bileşenin kökü; `ui-selection-indicator` üst öğeyi kullanır. */
    indicatorRootEl() {
      return this.$el;
    },
    startIndicator() {
      var i, n;
      const e = this.indicatorRootEl();
      if (!e || typeof window > "u") return;
      this.stopIndicator();
      const t = this.indicatorPersistKey || "";
      if (this._indicatorPersisted = t && $t.get(t) || null, this.measureIndicator({ animate: !1 }), this._indicatorMutation = new MutationObserver((s) => {
        s.some(
          (a) => a.type === "childList" || a.target !== this.$refs.indicator && a.attributeName !== "style"
        ) && this.scheduleIndicator(!0);
      }), this._indicatorMutation.observe(e, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ["class", "aria-selected", "aria-checked", "aria-expanded", "data-open", "hidden"]
      }), typeof ResizeObserver < "u") {
        this._indicatorResize = new ResizeObserver(() => this.scheduleIndicator(!1)), this._indicatorResize.observe(e);
        for (const s of e.children)
          s !== this.$refs.indicator && this._indicatorResize.observe(s);
      }
      (n = (i = document.fonts) == null ? void 0 : i.ready) == null || n.then(() => this.scheduleIndicator(!1));
    },
    stopIndicator() {
      var e, t;
      (e = this._indicatorMutation) == null || e.disconnect(), (t = this._indicatorResize) == null || t.disconnect(), this._indicatorMutation = null, this._indicatorResize = null, this._indicatorRaf != null && cancelAnimationFrame(this._indicatorRaf), this._indicatorRaf = null;
    },
    scheduleIndicator(e) {
      this._indicatorAnimate = !!(this._indicatorAnimate || e), this._indicatorRaf == null && (this._indicatorRaf = requestAnimationFrame(() => {
        this._indicatorRaf = null;
        const t = this._indicatorAnimate;
        this._indicatorAnimate = !1, this.measureIndicator({ animate: t });
      }));
    },
    measureIndicator({ animate: e }) {
      var T, M;
      if (this._indicatorHandoff) return;
      const t = this.indicatorRootEl(), i = (T = t == null ? void 0 : t.querySelector) == null ? void 0 : T.call(t, this.indicatorSelector);
      if (!i || i.offsetWidth === 0 || Do(i, t)) {
        this.indicatorRect = null;
        return;
      }
      (M = this._indicatorResize) == null || M.observe(i);
      const n = t.getBoundingClientRect(), s = i.getBoundingClientRect(), r = t.offsetWidth > 0 ? n.width / t.offsetWidth : 1, a = t.offsetHeight > 0 ? n.height / t.offsetHeight : 1, u = i.offsetWidth, l = i.offsetHeight, c = ((s.left + s.right) / 2 - n.left) / (r || 1) - t.clientLeft + t.scrollLeft, p = ((s.top + s.bottom) / 2 - n.top) / (a || 1) - t.clientTop + t.scrollTop, h = {
        x: Math.round((c - u / 2) * 2) / 2,
        y: Math.round((p - l / 2) * 2) / 2,
        width: u,
        height: l,
        // Göstergenin köşesi seçili öğeninkini alır (segment hap, sidebar satırı farklı köşe).
        radius: getComputedStyle(i).borderTopLeftRadius,
        rootWidth: t.offsetWidth,
        rootHeight: t.offsetHeight
      }, g = this.indicatorRect, C = this.indicatorPersistKey || "";
      if (C && $t.set(C, h), !g && C && this._indicatorPersisted) {
        const z = this._indicatorPersisted;
        if (this._indicatorPersisted = null, z.rootHeight === h.rootHeight && (z.x !== h.x || z.y !== h.y)) {
          this.indicatorInstant = !0, this.indicatorRect = z, this._indicatorHandoff = !0, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this._indicatorHandoff = !1, this.indicatorInstant = !1, this.indicatorPop = this.indicatorPop === "a" ? "b" : "a", this.indicatorRect = h;
            });
          });
          return;
        }
      }
      if (g && g.x === h.x && g.y === h.y && g.width === h.width && g.height === h.height)
        return;
      const k = g && g.rootWidth === h.rootWidth && g.rootHeight === h.rootHeight, A = !!g && k && e && (g.x !== h.x || g.y !== h.y);
      this.indicatorInstant = !A, A && (this.indicatorPop = this.indicatorPop === "a" ? "b" : "a"), this.indicatorRect = h, A || requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.indicatorInstant = !1;
        });
      });
    }
  }
}, Bo = ee, Oo = ["horizontal", "vertical"];
function Ro(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Eo = {
  name: "SegmentGroup",
  mixins: [E, vi],
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  data() {
    return {
      /** Kaydırılabilir grupta içerik gerçekten taşıyor mu — taşmıyorsa kırpma kapanır (gösterge büyümesi kesilmez). */
      overflowing: null
    };
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Bo.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Oo.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: Ro
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: !0
    },
    /**
     * Yatay taşmada grup içinde kaydırma; seçili segment ortalanır.
     * Varsayılan açık — dar kart / mobil’de etiketler patlamasın.
     * Dikey yönde etkisiz. `block=false` (fit) gruplarda da taşmayı keser.
     */
    scrollable: {
      type: Boolean,
      default: !0
    },
    /**
     * Seçili zemin yeni seçilinin arkasına kayarak geçer (yolda hafif büyür).
     * `false`: her segment kendi zeminini çizer (eski davranış).
     */
    animated: {
      type: Boolean,
      default: !0
    },
    /**
     * Gezinme kapsülü: segmentler `to` ile bağlantıdır, grup `radiogroup` rolü taşımaz.
     * Erişilebilir ad sarmalayan `<nav aria-label>` öğesinden gelir; `modelValue` etkin rotanın değeridir.
     */
    navigation: {
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
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? P() : !!this.iconOnly;
    },
    indicatorEnabled() {
      return this.animated;
    },
    indicatorSelector() {
      return ".ui-segment--selected";
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
        this.indicatorEnabled && "ui-segment-group--indicator",
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
    },
    isScrollable: {
      handler(e) {
        e ? this.$nextTick(() => this.watchOverflow()) : this.unwatchOverflow();
      }
    }
  },
  mounted() {
    this.scheduleScrollSelected("auto"), this.isScrollable && this.watchOverflow();
  },
  beforeUnmount() {
    this.unwatchOverflow(), this._scrollSelectedRaf != null && (cancelAnimationFrame(this._scrollSelectedRaf), this._scrollSelectedRaf = null);
  },
  methods: {
    watchOverflow() {
      this.unwatchOverflow();
      const e = this.$el;
      if (!e || typeof ResizeObserver > "u") return;
      const t = () => {
        let i = 1 / 0, n = -1 / 0;
        for (const s of e.children) {
          if (s === this.$refs.indicator) continue;
          const r = s.getBoundingClientRect();
          r.width !== 0 && (i = Math.min(i, r.left), n = Math.max(n, r.right));
        }
        this.overflowing = n > i && n - i > e.clientWidth + 1;
      };
      this._overflowResize = new ResizeObserver(t), this._overflowResize.observe(e);
      for (const i of e.children) this._overflowResize.observe(i);
      t();
    },
    unwatchOverflow() {
      var e;
      (e = this._overflowResize) == null || e.disconnect(), this._overflowResize = null, this.overflowing = null;
    },
    /**
     * WAI-ARIA Radio Group: ok tuşları seçimi değiştirir ve odağı taşır; grup tek Tab durağıdır
     * (seçili segment `tabindex=0`, diğerleri `-1`). Gezinme kapsülü (`navigation`) bağlantıdır, dahil değil.
     */
    onRadioKeydown(e) {
      if (this.navigation) return;
      const t = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key], i = e.key === "Home" ? "first" : e.key === "End" ? "last" : null;
      if (!t && !i) return;
      const n = [...this.$el.querySelectorAll('[role="radio"]:not([disabled])')];
      if (!n.length) return;
      e.preventDefault();
      const s = n.indexOf(document.activeElement);
      let r;
      i === "first" ? r = 0 : i === "last" ? r = n.length - 1 : r = ((s < 0 ? 0 : s + t) % n.length + n.length) % n.length, n[r].click(), n[r].focus();
    },
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
}, Mo = ["role", "aria-label", "data-overflowing"];
function Po(e, t, i, n, s, r) {
  return o(), d("div", F({
    class: r.rootClass,
    role: i.navigation ? void 0 : "radiogroup",
    "aria-label": !i.navigation && i.ariaLabel || void 0
  }, { ...r.passthroughAttrs, ...e.indicatorRootAttrs }, {
    "data-overflowing": r.isScrollable && s.overflowing != null ? String(s.overflowing) : void 0,
    onKeydown: t[0] || (t[0] = (...a) => r.onRadioKeydown && r.onRadioKeydown(...a))
  }), [
    r.indicatorEnabled ? (o(), d("span", F({
      key: 0,
      ref: "indicator",
      class: "ui-selection-indicator"
    }, e.indicatorBind), [...t[1] || (t[1] = [
      m("span", { class: "ui-selection-indicator-fill" }, null, -1)
    ])], 16)) : f("", !0),
    b(e.$slots, "default")
  ], 16, Mo);
}
const pd = /* @__PURE__ */ I(Eo, [["render", Po]]), $o = {
  name: "Tag",
  components: { Badge: Nr, Tooltip: li },
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
}, Vo = ["aria-label"];
function No(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tooltip"), l = x("Badge");
  return o(), _(l, {
    color: i.color,
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, ii({
    default: w(() => [
      b(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: w(() => [
        v(u, {
          label: r.removeLabel,
          placement: "bottom"
        }, {
          default: w(() => [
            m("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": r.removeLabel,
              onClick: t[0] || (t[0] = O((c) => e.$emit("remove"), ["stop"]))
            }, [
              v(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Vo)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["color", "variant", "size"]);
}
const Ho = /* @__PURE__ */ I($o, [["render", No]]), jo = Z("ui-select"), Go = ["field", "inline"], Ko = ee, Wo = {
  name: "Select",
  mixins: [E, Ue],
  components: { Tag: Ho },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => Go.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ko.includes(e)
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
    /**
     * Seçenek panelinin sabit genişliği (ör. `'18rem'`). Özel `#trigger` ile açılan
     * ve seçenekleri açılınca yüklenen listelerde panel boş/iskelet hâliyle daralmaz.
     */
    width: {
      type: [String, Number],
      default: null
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
    const e = jo(), t = e.slice(10);
    return {
      fallbackId: e,
      fallbackListboxId: `ui-select-listbox-${t}`,
      menuOpen: this.open ?? !1,
      filterQuery: "",
      filterDebounceTimer: null,
      /** Klavye / fare vurgusu — `aria-activedescendant`; odak tetikleyicide veya aramada kalır. */
      activeIndex: -1
    };
  },
  computed: {
    /**
     * Form satırındaki tüm kontroller aynı yükseklikte kalır; `ui-form-row primary`
     * yalnızca odak hedefidir, boyutu büyütmez. Büyük alan gerekiyorsa `size="lg"` verilir.
     */
    resolvedSize() {
      return Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return this.id != null && this.id !== "" ? this.id : this.formFieldId || this.fallbackId;
    },
    activeOptionId() {
      return this.activeIndex >= 0 && this.activeIndex < this.filteredOptions.length ? this.optionId(this.activeIndex) : void 0;
    },
    listboxId() {
      const e = this.id || this.formFieldId;
      return e ? `${e}-listbox` : this.fallbackListboxId;
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
      this.activeIndex = this.filteredOptions.length ? 0 : -1, this.multiple && !this.menuOpen && !this.isDisabled && String(e ?? "").length > 0 && (this.menuOpen = !0), this.remoteFilter && (this.filterDebounceTimer && clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = setTimeout(() => {
        this.$emit("filter-change", String(e ?? "").trim());
      }, 300));
    },
    open(e) {
      e != null && e !== this.menuOpen && (this.menuOpen = e);
    },
    menuOpen(e) {
      if (e !== this.open && this.$emit("update:open", e), !e) {
        this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.filterQuery = "", this.activeIndex = -1;
        return;
      }
      this.activeIndex = this.initialActiveIndex(), this.$nextTick(() => {
        this.isFilterable && this.focusSearch(), (this.useScrollListMode || this.isListboxScrollable()) && this.scrollSelectedIntoView();
      });
    }
  },
  methods: {
    /**
     * Tetikleyici öznitelikleri. Tek seçim: `button` combobox tetikleyicisi. Çoklu seçim: kapsayıcı
     * `div` — içinde etiket silme düğmeleri ve arama input'u olduğundan `button` içinde iç içe
     * etkileşim oluşuyordu (axe nested-interactive). Aramalı çoklu seçimde combobox rolü input'tadır;
     * aramasızda kapsayıcı odaklanabilir combobox olur.
     */
    triggerAttrs(e) {
      const t = {
        "aria-expanded": e ? "true" : "false",
        "aria-haspopup": this.listboxRole,
        "aria-controls": e ? this.listboxId : void 0,
        "aria-activedescendant": e ? this.activeOptionId : void 0,
        "aria-describedby": this.formFieldDescribedBy(this.ariaDescribedby),
        "aria-invalid": this.formFieldInvalid
      };
      return this.multiple ? this.isFilterable ? { "aria-disabled": this.isDisabled ? "true" : void 0 } : {
        id: this.resolvedId,
        role: "combobox",
        tabindex: this.isDisabled ? -1 : 0,
        "aria-disabled": this.isDisabled ? "true" : void 0,
        ...t,
        ...this.triggerPassthrough
      } : { type: "button", id: this.resolvedId, disabled: this.isDisabled, ...t, ...this.triggerPassthrough };
    },
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
      this.isDisabled || (e(), this.multiple && this.menuOpen && this.$nextTick(() => this.focusSearch()));
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
    optionId(e) {
      return `${this.listboxId}-option-${e}`;
    },
    /** Açılışta seçili seçenek (yoksa ilki) vurgulanır. */
    initialActiveIndex() {
      if (!this.filteredOptions.length) return -1;
      const e = this.filteredOptions.findIndex((t) => this.isSelected(t));
      return e >= 0 ? e : 0;
    },
    moveActive(e) {
      const t = this.filteredOptions.length;
      t && (this.activeIndex = Math.max(0, Math.min(t - 1, e)), this.$nextTick(() => {
        var n;
        const i = this.activeOptionId && document.getElementById(this.activeOptionId);
        (n = i == null ? void 0 : i.scrollIntoView) == null || n.call(i, { block: "nearest", inline: "nearest" });
      }));
    },
    /**
     * Liste gezinmesi — ↑ ↓ Home End; tetikleyici, panel araması ve çoklu arama aynı yolu kullanır.
     * @returns {boolean} tuş işlendi mi
     */
    handleListKey(e) {
      const i = {
        ArrowDown: () => this.activeIndex + 1,
        ArrowUp: () => this.activeIndex - 1,
        Home: () => 0,
        End: () => this.filteredOptions.length - 1,
        PageDown: () => this.activeIndex + 8,
        PageUp: () => this.activeIndex - 8
      };
      return i[e.key] ? (e.preventDefault(), this.menuOpen ? (this.moveActive(i[e.key]()), !0) : ((e.key === "ArrowDown" || e.key === "ArrowUp") && (this.menuOpen = !0), !0)) : !1;
    },
    /** Vurgulanan seçeneği seçer; tek seçimde odak tetikleyiciye döner (panel araması kapanır). */
    pickActive(e) {
      const t = this.filteredOptions[this.activeIndex];
      return t ? (this.pick(t, e), this.multiple || this.$nextTick(() => {
        var i, n, s, r;
        return (r = (s = (n = (i = this.$el) == null ? void 0 : i.querySelector) == null ? void 0 : n.call(i, ".ui-select-field")) == null ? void 0 : s.focus) == null ? void 0 : r.call(s);
      }), !0) : !1;
    },
    onTriggerKeydown(e, t) {
      if (!this.isDisabled) {
        if (this.multiple) {
          if (this.isFilterable || e.target !== e.currentTarget || this.handleListKey(e)) return;
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.menuOpen ? this.pickActive(() => {
          }) : t());
          return;
        }
        this.handleListKey(e) || this.menuOpen && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.pickActive(() => {
        }));
      }
    },
    onFilterKeydown(e, t) {
      if (!this.handleListKey(e)) {
        if (e.key === "Enter") {
          e.preventDefault(), this.pickActive(t) || this.pickFirstFiltered(t);
          return;
        }
        e.key === "Escape" && (e.preventDefault(), t(), this.$nextTick(() => {
          var i, n, s, r;
          return (r = (s = (n = (i = this.$el) == null ? void 0 : i.querySelector) == null ? void 0 : n.call(i, ".ui-select-field")) == null ? void 0 : s.focus) == null ? void 0 : r.call(s);
        }));
      }
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
      if (!this.handleListKey(e)) {
        if (e.key === "Enter") {
          if (e.preventDefault(), !this.menuOpen) {
            this.menuOpen = !0;
            return;
          }
          this.pickActive(() => {
          }) || this.pickFirstFiltered(() => {
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
  }
}, qo = ["name", "value"], Uo = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Yo = {
  key: 1,
  class: "ui-select-values-inner"
}, Zo = ["placeholder", "id", "aria-label", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-describedby", "aria-invalid", "disabled"], Qo = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Xo = { class: "ui-select-field-suffix" }, Jo = ["aria-label"], el = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, tl = ["data-size", "placeholder", "aria-label", "aria-activedescendant", "aria-controls", "onKeydown"], il = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], rl = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, nl = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, sl = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function al(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("Tag"), l = x("ui-skeleton"), c = x("ui-badge"), p = x("ui-button"), h = x("ui-empty"), g = x("ui-popover");
  return o(), d("div", {
    class: S(r.rootClass)
  }, [
    i.name ? (o(), d("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: r.hiddenFieldValue
    }, null, 8, qo)) : f("", !0),
    v(g, {
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (C) => s.menuOpen = C),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      width: i.width,
      disabled: r.isDisabled,
      "align-selected-option-to-trigger": r.alignSelectedToTrigger
    }, ii({
      trigger: w(({ open: C, toggle: k, close: A }) => [
        b(e.$slots, "trigger", {
          open: C,
          toggle: k,
          close: A,
          label: r.displayLabel,
          hasValue: !r.isPlaceholderDisplay
        }, () => [
          (o(), _(X(i.multiple ? "div" : "button"), F({
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline",
              "ui-select-field--disabled": i.multiple && r.isDisabled
            }]
          }, r.triggerAttrs(C), {
            onClick: (T) => r.onTriggerClick(k),
            onKeydown: (T) => r.onTriggerKeydown(T, k)
          }), {
            default: w(() => [
              i.prefixIcon ? (o(), d("span", Uo, [
                v(a, {
                  name: i.prefixIcon,
                  size: "xs"
                }, null, 8, ["name"])
              ])) : f("", !0),
              i.multiple ? (o(), d("div", Yo, [
                (o(!0), d(B, null, $(r.selectedValues, (T) => (o(), _(u, {
                  key: String(T),
                  color: "primary",
                  variant: "muted",
                  size: "sm",
                  removable: "",
                  onRemove: (M) => r.removeValue(T)
                }, {
                  default: w(() => [
                    D(y(r.labelForValue(T)), 1)
                  ]),
                  _: 2
                }, 1032, ["onRemove"]))), 128)),
                r.isFilterable ? Ee((o(), d("input", {
                  key: 0,
                  ref: "searchInput",
                  "onUpdate:modelValue": t[0] || (t[0] = (T) => s.filterQuery = T),
                  type: "text",
                  class: S(["ui-select-values-input", {
                    "ui-select-values-input--solo": !r.selectedValues.length,
                    "ui-select-values-input--open": s.menuOpen
                  }]),
                  placeholder: r.multipleInputPlaceholder,
                  id: r.resolvedId,
                  role: "combobox",
                  "aria-label": r.resolvedFilterPlaceholder,
                  "aria-haspopup": "listbox",
                  "aria-expanded": s.menuOpen ? "true" : "false",
                  "aria-controls": s.menuOpen ? r.listboxId : void 0,
                  "aria-activedescendant": s.menuOpen ? r.activeOptionId : void 0,
                  "aria-describedby": e.formFieldDescribedBy(i.ariaDescribedby),
                  "aria-invalid": e.formFieldInvalid,
                  autocomplete: "off",
                  disabled: r.isDisabled,
                  onClick: t[1] || (t[1] = O((...T) => r.onSearchInputActivate && r.onSearchInputActivate(...T), ["stop"])),
                  onFocus: t[2] || (t[2] = (...T) => r.onSearchInputActivate && r.onSearchInputActivate(...T)),
                  onKeydown: t[3] || (t[3] = (...T) => r.onSearchKeydown && r.onSearchKeydown(...T))
                }, null, 42, Zo)), [
                  [ut, s.filterQuery]
                ]) : f("", !0)
              ])) : i.loading ? (o(), d("span", Qo, y(r.resolvedLoadingLabel), 1)) : (o(), d("span", F({
                key: 3,
                class: ["ui-select-value", { "ui-select-value--placeholder": r.isPlaceholderDisplay }]
              }, r.selectedDisplayStyle ? { style: r.selectedDisplayStyle } : {}, { "data-popover-align": "" }), y(r.displayLabel), 17)),
              m("span", Xo, [
                r.showClearButton ? (o(), d("button", {
                  key: 0,
                  type: "button",
                  class: "ui-select-clear",
                  "aria-label": r.clearAriaLabel,
                  onClick: t[4] || (t[4] = O((...T) => r.clearSelection && r.clearSelection(...T), ["stop"]))
                }, [
                  v(a, {
                    name: "xmark",
                    size: "xs"
                  })
                ], 8, Jo)) : f("", !0),
                m("span", el, [
                  v(a, {
                    name: "chevron-down",
                    size: "xs"
                  })
                ])
              ])
            ]),
            _: 1
          }, 16, ["class", "onClick", "onKeydown"]))
        ])
      ]),
      content: w(({ close: C }) => [
        m("div", {
          ref: "listbox",
          id: r.listboxId,
          class: S(["ui-select-listbox", r.listboxClass]),
          "data-size": r.resolvedSize,
          role: r.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": r.resolvedId
        }, [
          i.loading && !r.filteredOptions.length ? (o(), d("div", rl, [
            (o(), d(B, null, $(3, (k) => v(l, {
              key: k,
              variant: "line",
              class: S(k === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : r.filteredOptions.length ? (o(!0), d(B, { key: 1 }, $(r.filteredOptions, (k, A) => (o(), _(p, {
            id: r.optionId(A),
            key: String(k.value),
            variant: "ghost",
            color: "secondary",
            size: r.optionButtonSize,
            block: "",
            "text-align": "left",
            role: "option",
            class: S(["ui-select-option", {
              "ui-select-option--selected": r.isSelected(k),
              "ui-select-option--active": A === s.activeIndex
            }]),
            "suffix-icon": r.isSelected(k) ? "check" : void 0,
            "aria-selected": r.isSelected(k) ? "true" : "false",
            tabindex: "-1",
            onClick: (T) => r.pick(k, C),
            onMousemove: (T) => s.activeIndex = A
          }, {
            default: w(() => [
              b(e.$slots, "option", {
                option: k,
                selected: r.isSelected(k)
              }, () => [
                m("span", nl, [
                  m("span", F({
                    "data-popover-align": "",
                    class: "min-w-0 truncate"
                  }, { ref_for: !0 }, r.optionDisplayStyle(k) ? { style: r.optionDisplayStyle(k) } : {}), y(k.label), 17),
                  k.badge ? (o(), _(c, {
                    key: 0,
                    color: k.badgeColor || "secondary",
                    variant: k.badgeVariant || "solid",
                    size: "xs"
                  }, {
                    default: w(() => [
                      D(y(k.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "variant"])) : k.description ? (o(), d("span", sl, y(k.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["id", "size", "class", "suffix-icon", "aria-selected", "onClick", "onMousemove"]))), 128)) : r.isFilterable && s.filterQuery ? (o(), _(h, {
            key: 2,
            icon: "magnifying-glass",
            size: r.emptyStateSize,
            title: r.noResultsText
          }, null, 8, ["size", "title"])) : (o(), _(h, {
            key: 3,
            icon: "table-cells",
            size: r.emptyStateSize,
            title: r.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, il)
      ]),
      _: 2
    }, [
      r.showPopoverHeader ? {
        name: "header",
        fn: w(({ close: C }) => [
          Ee(m("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (k) => s.filterQuery = k),
            type: "text",
            class: S(["ui-select-filter-input w-full", r.filterInputClass]),
            "data-size": r.resolvedSize,
            placeholder: r.resolvedFilterPlaceholder,
            "aria-label": r.resolvedFilterPlaceholder,
            "aria-activedescendant": r.activeOptionId,
            "aria-controls": r.listboxId,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = O(() => {
            }, ["prevent"])),
            onKeydown: (k) => r.onFilterKeydown(k, C)
          }, null, 42, tl), [
            [ut, s.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: w((C) => [
          b(e.$slots, "footer", Jt(ei(C)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const gd = /* @__PURE__ */ I(Wo, [["render", al]]), ol = ["line", "circle", "block", "pill"], ll = ee, ul = 320, Vt = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Nt = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, dl = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => ol.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => ll.includes(e)
    }
  },
  setup(e) {
    const t = Vi(), i = ie(() => !!t.default), n = K(null), s = K(null), r = K(null), a = K(null), u = K(!1), l = K(!1), c = K(!1), p = K(!1), h = K(!1);
    let g = null;
    const C = ie(
      () => e.loading || c.value
    ), k = ie(
      () => e.loading || c.value
    );
    Ni(() => {
      h.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), Hi(() => {
      A(), T();
    });
    function A() {
      g != null && (clearTimeout(g), g = null);
    }
    ji(
      () => e.loading,
      async (j, ae) => {
        var it, rt, nt, st, at, ot;
        if (A(), j) {
          const lt = Math.max(
            ((it = n.value) == null ? void 0 : it.offsetHeight) ?? 0,
            ((rt = r.value) == null ? void 0 : rt.scrollHeight) ?? 0,
            ((nt = s.value) == null ? void 0 : nt.offsetHeight) ?? 0
          );
          c.value = !1, p.value = !1, u.value = !1, l.value = lt > 48, a.value = l.value ? lt : null;
          return;
        }
        if (ae !== !0) return;
        if (h.value) {
          c.value = !1, l.value = !1, a.value = null, u.value = !1;
          return;
        }
        const G = a.value ?? ((st = n.value) == null ? void 0 : st.offsetHeight) ?? ((at = s.value) == null ? void 0 : at.offsetHeight) ?? 0;
        c.value = !0, p.value = !1, l.value = !1, u.value = !0, a.value = G, await dt();
        const et = ((ot = r.value) == null ? void 0 : ot.scrollHeight) ?? 0, tt = et > 0 ? et : G;
        if (G <= 0 && tt <= 0) {
          T();
          return;
        }
        await dt(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = tt, p.value = !0;
          });
        }), g = setTimeout(T, ul + 40);
      }
    );
    function T() {
      A(), c.value = !1, p.value = !1, l.value = !1, a.value = null, u.value = !1;
    }
    function M(j) {
      j.target === n.value && j.propertyName === "height" && (e.loading || u.value && T());
    }
    const z = ie(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), V = ie(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !l.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && l.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && l.value && !c.value
    })), te = ie(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !l.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && l.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && p.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: n,
      placeholderRef: s,
      contentWrapRef: r,
      hostStyle: z,
      heightAnimActive: u,
      heightLocked: l,
      isRevealing: c,
      showPlaceholder: C,
      isBusy: k,
      placeholderClass: V,
      contentWrapClass: te,
      onHostTransitionEnd: M
    };
  },
  computed: {
    variantClass() {
      return Vt[this.variant] || Vt.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Nt[this.size] || Nt.md;
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
}, cl = ["aria-busy"], fl = ["aria-hidden"];
function hl(e, t, i, n, s, r) {
  return n.hasDefaultSlot ? (o(), d("div", F({
    key: 1,
    ref: "hostRef",
    class: r.hostClass
  }, n.hostStyle ? { style: n.hostStyle, ...r.passthroughAttrs } : r.passthroughAttrs, {
    "aria-busy": n.isBusy ? "true" : void 0,
    onTransitionend: t[0] || (t[0] = (...a) => n.onHostTransitionEnd && n.onHostTransitionEnd(...a))
  }), [
    Ee(m("div", {
      ref: "placeholderRef",
      class: S(["ui-skeleton-placeholder", n.placeholderClass]),
      "aria-hidden": "true"
    }, [
      b(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = m("div", { class: "ui-skeleton-default-rows" }, [
          m("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          m("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          m("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [$i, n.showPlaceholder]
    ]),
    m("div", {
      ref: "contentWrapRef",
      class: S(["ui-skeleton-content-wrap", n.contentWrapClass])
    }, [
      m("div", {
        class: "ui-skeleton-content",
        "aria-hidden": n.showPlaceholder && !n.isRevealing ? "true" : void 0
      }, [
        b(e.$slots, "default")
      ], 8, fl)
    ], 2)
  ], 16, cl)) : (o(), d("div", F({
    key: 0,
    class: r.skeletonClass,
    "aria-hidden": "true"
  }, r.passthroughAttrs), null, 16));
}
const bd = /* @__PURE__ */ I(dl, [["render", hl]]), ml = Z("ui-switch"), pl = {
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
    return { fallbackId: ml() };
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
}, gl = ["id", "aria-checked", "disabled", "aria-describedby"];
function bl(e, t, i, n, s, r) {
  return o(), d("button", F({
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
    m("span", {
      class: S(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      m("span", {
        class: S(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, gl);
}
const yd = /* @__PURE__ */ I(pl, [["render", bl]]), yl = {
  name: "TabList",
  mixins: [vi],
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
    indicatorEnabled() {
      var e, t;
      return ((e = this.uiTabs) == null ? void 0 : e.variant) === "segmented" && ((t = this.uiTabs) == null ? void 0 : t.animated) !== !1;
    },
    indicatorSelector() {
      return ".ui-tab-trigger--segmented-selected";
    },
    indicatorPersistKey() {
      var e;
      return ((e = this.uiTabs) == null ? void 0 : e.indicatorKey) || "";
    },
    ariaOrientation() {
      var e;
      return ((e = this.uiTabs) == null ? void 0 : e.orientation) === "vertical" ? "vertical" : "horizontal";
    },
    listClass() {
      var n, s;
      const e = ((n = this.uiTabs) == null ? void 0 : n.orientation) === "vertical", i = ((s = this.uiTabs) == null ? void 0 : s.variant) === "segmented" ? "segmented" : "line";
      return L(
        "ui-tab-list",
        i === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
        e ? "ui-tab-list--vertical" : "ui-tab-list--horizontal",
        this.indicatorEnabled ? "ui-tab-list--indicator" : "",
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
      var p, h, g, C;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const n = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], s = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], r = e.key;
      let a = 0;
      if (n.includes(r)) a = 1;
      else if (s.includes(r)) a = -1;
      else if (r === "Home" || r === "End") {
        e.preventDefault(), (h = (p = i[r === "Home" ? 0 : i.length - 1]) == null ? void 0 : p.focus) == null || h.call(p);
        return;
      } else return;
      e.preventDefault();
      const u = document.activeElement;
      let l = i.indexOf(u);
      l === -1 && (l = i.findIndex((k) => k.getAttribute("aria-selected") === "true")), l === -1 && (l = 0);
      let c = l + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (C = (g = i[c]) == null ? void 0 : g.focus) == null || C.call(g);
    }
  }
}, vl = ["aria-label", "aria-orientation"];
function kl(e, t, i, n, s, r) {
  return o(), d("div", F({
    class: r.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": r.ariaOrientation
  }, { ...r.passthroughAttrs, ...e.indicatorRootAttrs }, {
    onKeydown: t[0] || (t[0] = (...a) => r.onKeydown && r.onKeydown(...a))
  }), [
    r.indicatorEnabled ? (o(), d("span", F({
      key: 0,
      ref: "indicator",
      class: "ui-selection-indicator"
    }, e.indicatorBind), [...t[1] || (t[1] = [
      m("span", { class: "ui-selection-indicator-fill" }, null, -1)
    ])], 16)) : f("", !0),
    b(e.$slots, "default")
  ], 16, vl);
}
const vd = /* @__PURE__ */ I(yl, [["render", kl]]), Be = ["sm", "md", "lg"];
function Sl(e) {
  const t = Be.indexOf(e);
  return t < 0 ? "md" : Be[Math.min(t + 1, Be.length - 1)];
}
function xl(e, t, { inlineControls: i = !1, nativeChrome: n = !1 } = {}) {
  const s = Y(e, t, { key: "controlSize", defaultSize: "md" });
  return i ? s : n ? "lg" : Sl(s);
}
const wl = ["line", "segmented"];
function _l(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Tl = {
  name: "Tabs",
  mixins: [E],
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
      validator: (e) => wl.includes(e)
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
      validator: _l
    },
    /**
     * `segmented`: seçili zemin yeni sekmenin arkasına kayarak geçer (yolda hafif büyür).
     * `false`: her tetikleyici kendi zeminini çizer (eski davranış).
     */
    animated: {
      type: Boolean,
      default: !0
    },
    /**
     * Kayan göstergenin son konumunu aynı anahtarlı şeritler arasında taşır. Her rotada yeniden kurulan
     * sekme şeridi (sayfa başına `ui-tabs`) önceki sekmeden kayarak gelir; anahtarsız şerit anlık yerleşir.
     */
    indicatorKey: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return { baseId: ti() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return this.variant === "segmented" ? xl(this.uiDefaults, this.size, {
        inlineControls: this.inlineControls,
        nativeChrome: this.nativeChrome
      }) : Y(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? P() : !!this.iconOnly;
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
function Cl(e, t, i, n, s, r) {
  return o(), d("div", F({ class: r.rootClass }, r.passthroughAttrs), [
    b(e.$slots, "default")
  ], 16);
}
const kd = /* @__PURE__ */ I(Tl, [["render", Cl]]), Il = {
  name: "TabTrigger",
  mixins: [E],
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
    ...fe(),
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
}, Fl = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], Ll = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, Al = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function zl(e, t, i, n, s, r) {
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
    i.icon ? (o(), d("span", Ll, [
      v(a, {
        name: i.icon,
        type: r.tabIconType,
        size: r.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    m("span", {
      class: S([r.labelClass, "ui-tab-trigger-label min-w-0 whitespace-nowrap"])
    }, [
      b(e.$slots, "default", {}, () => [
        D(y(i.label), 1)
      ])
    ], 2),
    r.showBadge ? (o(), d("span", Al, [
      v(u, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: w(() => [
          D(y(r.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, Fl);
}
const Sd = /* @__PURE__ */ I(Il, [["render", zl]]), Dl = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Bl = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900], Ol = 8, Rl = "ui-sans-serif, system-ui, sans-serif", Ht = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, El = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
}, Ml = {
  compact: "calc(var(--spacing, 0.25rem) * 4)",
  default: "calc(var(--spacing, 0.25rem) * 5)",
  comfortable: "calc(var(--spacing, 0.25rem) * 6)",
  spacious: "calc(var(--spacing, 0.25rem) * 8)"
}, Pl = ["success", "warning", "info", "danger"], $l = {
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
    "white",
    "surfaceSubtle",
    "surfaceSunken",
    "borderSubtle"
  ],
  status: Pl.flatMap((e) => [e, `${e}Foreground`]),
  chart: [
    ...Bl.map((e) => `chart${e}`),
    "chart",
    "chartForeground",
    ...Array.from({ length: Ol }, (e, t) => `chartSeries${t + 1}`)
  ],
  surfaces: ["surfaceStyle", "controlStyle", "inputStyle", "popoverStyle"],
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
new Set(Object.values($l).flat());
const Vl = {
  "--font-heading": "var(--font-sans)",
  "--radius-sm": "calc(var(--radius) - 4px)",
  "--radius-md": "calc(var(--radius) - 2px)",
  "--radius-3xl": "var(--radius)",
  /**
   * Kontrol köşesi — yükseklik yarısını geçmez (`--radius` büyükse kontrol hap olur,
   * değer gerçek görünen köşeyi taşır). Kontroller `rounded-lg` yerine bunları kullanır;
   * uygulamanın Tailwind `--radius-*` eşlemesine bağlı kalmaz.
   */
  "--ui-radius-control-sm": "min(var(--radius-md), calc(var(--ui-control-h-sm) / 2))",
  "--ui-radius-control-md": "min(var(--radius), calc(var(--ui-control-h-md) / 2))",
  "--ui-radius-control-lg": "min(var(--radius), calc(var(--ui-control-h-lg) / 2))",
  /**
   * Yüzey içi öğe köşesi — panel (`--radius`) içinde `--ui-surface-inset` boşlukla duran
   * satır / arama kutusu. İç köşe = dış köşe − boşluk (eş merkezli).
   */
  "--ui-surface-inset": "0.5rem",
  /**
   * Liste / menü / popover satırı hover zemini — seçili zeminden (`--primary-soft`) her zaman daha
   * hafif: hover ara durumdur. Eskiden `bg-muted` (light L 0.92) seçili tondan (L 0.95) koyu kalıyordu.
   */
  "--ui-hover": "color-mix(in oklab, var(--foreground) 4%, var(--surface))",
  /** Alert kenarlığı — tek görünüm; kenarlık temanın tercihidir (preset `uiAlertBorderWidth: '1px'`). */
  "--ui-alert-border-width": "0px",
  /**
   * Checkbox köşesi — tema yarıçapından bağımsız küçük kare (4–6px). `rounded-sm` (`--radius − 4px`)
   * 18px kutuda 22px olup checkbox'ı daireye, yani radio'ya çeviriyordu.
   */
  "--ui-radius-checkbox": "clamp(0.25rem, calc(var(--radius) / 4), 0.375rem)",
  "--ui-radius-inner": "max(0.375rem, calc(var(--radius) - var(--ui-surface-inset)))",
  "--surface-bg": "color-mix(in oklab, var(--ui-surface-mix-from) var(--ui-surface-opacity), transparent)",
  /**
   * Yüzen katman malzemesi (popover, menü, Select listesi, takvim) — kart malzemesinden ayrı
   * (`popoverStyle`). Kart camı (%4–8) menüde okunmaz; popover yüksek opaklıkta yarı saydam +
   * bulanık: arkadaki içerik sezilir, metin okunur. Tema `popoverStyle` ile değiştirir.
   */
  "--ui-popover-opacity": "85%",
  "--ui-popover-backdrop-blur": "20px",
  "--ui-popover-mix-from": "var(--surface)",
  "--popover-bg": "color-mix(in oklab, var(--ui-popover-mix-from) var(--ui-popover-opacity), transparent)",
  "--control-bg": "color-mix(in oklab, var(--ui-control-mix-from) var(--ui-control-opacity), transparent)",
  "--input-background": "color-mix(in oklab, var(--ui-input-mix-from) var(--ui-input-opacity), transparent)",
  "--border": "var(--input-background)",
  /** Kart içi ikincil bölge (liste satırı zemini, ikon karosu, boş alan). */
  "--surface-subtle": "color-mix(in oklab, var(--muted) 30%, transparent)",
  /** Belirgin içe gömük bölge (seçili satır, karo zemini, kod/önizleme kutusu). */
  "--surface-sunken": "color-mix(in oklab, var(--muted) 60%, transparent)",
  /** Satır ayırıcı ve ikincil çerçeve. */
  "--border-subtle": "color-mix(in oklab, var(--border) 60%, transparent)",
  /**
   * Klavye odak halkası — WCAG 1.4.11 / 2.4.13: komşu renge ≥3:1. Eskiden `--ring` %45 saydam
   * (light 1.45:1). Primary %20 foreground ile: light'ta koyulaşır, dark'ta açılır.
   */
  "--ui-focus-ring": "color-mix(in oklab, var(--primary) 80%, var(--foreground))",
  /**
   * Tonlu metin ("ink") — ton rengi metin olarak (muted / ghost / outline / link düğme, rozet,
   * etiket, istatistik değişimi). Ton foreground'a karıştırılır: light'ta koyulaşır, dark'ta açılır.
   * Ham ton rengi kendi %18–24 tint zemininde 1.7–3.8:1 kalıyordu (AA 4.5:1). Oranlar web
   * temasında yüzey ve tint üzerinde ≥4.5:1 ölçülerek seçildi. İkon / dolgu ham tonu kullanır.
   */
  /**
   * Seçim zemini — seçili / aktif öğe (sidebar, menü, segment, sekme, çip, takvim, Select): soluk
   * primary zemin + primary metin (`--primary-ink`). Opak: gri iz üstünde de aynı ton.
   */
  "--primary-soft": "color-mix(in oklab, var(--primary) 10%, var(--surface))",
  "--primary-soft-hover": "color-mix(in oklab, var(--primary) 15%, var(--surface))",
  /** Seçili / aktif metin ve ikon rengi — saf primary (tasarım kararı). */
  "--ui-selected-fg": "var(--primary)",
  "--primary-ink": "color-mix(in oklab, var(--primary) 65%, var(--foreground))",
  "--warning-ink": "color-mix(in oklab, var(--warning) 55%, var(--foreground))",
  "--success-ink": "color-mix(in oklab, var(--success) 70%, var(--foreground))",
  "--info-ink": "color-mix(in oklab, var(--info) 75%, var(--foreground))",
  "--danger-ink": "color-mix(in oklab, var(--danger) 75%, var(--foreground))",
  "--ui-button-grad-top": "var(--ui-fill-grad-top-primary)",
  "--ui-button-grad-bottom": "var(--ui-fill-grad-bottom-primary)",
  "--ui-button-grad-light": "var(--ui-fill-grad-light)",
  "--ui-button-grad-dark": "var(--ui-fill-grad-dark)"
}, ki = {
  "--ui-hover": "color-mix(in oklab, var(--foreground) 7%, var(--surface))",
  "--primary-soft": "color-mix(in oklab, var(--primary) 26%, var(--surface))",
  "--primary-soft-hover": "color-mix(in oklab, var(--primary) 34%, var(--surface))",
  "--ui-selected-fg": "color-mix(in oklab, var(--primary) 55%, var(--foreground))",
  "--ui-focus-ring": "color-mix(in oklab, var(--primary) 70%, var(--foreground))"
}, Si = {
  "--ui-selected-fg": "oklch(from var(--primary) min(l, 0.5) c h)",
  "--ui-focus-ring": "oklch(from var(--primary) min(l, 0.55) c h)"
}, xi = {
  "--ui-selected-fg": "oklch(from var(--primary) max(l, 0.8) c h)",
  "--ui-focus-ring": "oklch(from var(--primary) max(l, 0.72) c h)"
}, Nl = "(color: oklch(from red l c h))";
function Hl(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([a-zA-Z])(\d)/g, "$1-$2").replace(/_/g, "-").toLowerCase()}`;
}
function ve(e) {
  const t = String(e || "").trim();
  return !t || t.includes(",") || t.startsWith("var(") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${Rl}`;
}
function jl(e) {
  if (e == null || e === "") return null;
  if (typeof e == "string" && !/^-?\d*\.?\d+$/.test(e.trim()))
    return e.trim();
  const t = Number(e);
  if (Number.isNaN(t)) return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function Gl(e) {
  if (e == null || e === "") return null;
  if (typeof e == "number") return `${e}px`;
  const t = String(e).trim();
  return Ht[t] != null ? Ht[t] : /^\d+$/.test(t) ? t === "0" ? "0" : `${t}px` : t;
}
function Kl(e) {
  return e == null || e === "" ? null : El[e] ?? String(e);
}
function Wl(e) {
  return e == null || e === "" ? null : Ml[e] ?? String(e);
}
function ql(e, t, i) {
  if (!i || typeof i != "object") return;
  const n = jl(i.opacity ?? i.bgOpacity);
  n && (e[`--ui-${t}-opacity`] = n);
  const s = Gl(i.backdropBlur);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const r = Kl(i.mixFrom);
  r && (e[`--ui-${t}-mix-from`] = r);
}
function q(e) {
  const t = {};
  if (!e || typeof e != "object") return t;
  for (const [i, n] of Object.entries(e))
    if (!(n == null || n === "")) {
      if (i === "base" && typeof n == "object") {
        for (const s of Dl) {
          const r = n[s];
          r != null && r !== "" && (t[`--base-${s}`] = String(r));
        }
        continue;
      }
      if (i === "surfaceStyle" || i === "controlStyle" || i === "inputStyle" || i === "popoverStyle") {
        ql(t, i.replace("Style", ""), n);
        continue;
      }
      if (i === "cardPadding") {
        const s = Wl(String(n));
        s && (t["--ui-card-space"] = s);
        continue;
      }
      typeof n != "object" && (t[Hl(i)] = String(n));
    }
  return t;
}
function wi(e) {
  const t = {};
  return e && (e.body && (t["--font-sans"] = ve(e.body)), e.heading && (t["--font-heading"] = ve(e.heading))), t;
}
function jt(e = {}, t = {}) {
  const i = { ...e };
  for (const [n, s] of Object.entries(t || {}))
    s && typeof s == "object" && e[n] && typeof e[n] == "object" ? i[n] = { ...e[n], ...s } : i[n] = s;
  return i;
}
function _i(e) {
  const t = {
    ...wi(e.preset.fonts),
    ...q(e.preset.tokens.light)
  };
  for (const [i, n] of Object.entries(Vl))
    i in t || (t[i] = n);
  return t;
}
function Ul(e, t = "light") {
  const i = _i(e);
  return t === "dark" && Object.assign(i, Ci(e, ki), q(e.preset.tokens.dark)), typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("color", "oklch(from red l c h)") && Object.assign(i, Ve(e, t === "dark" ? xi : Si)), i;
}
function Ti(e) {
  return /* @__PURE__ */ new Set([
    ...Object.keys(q(e.preset.tokens.light)),
    ...Object.keys(q(e.preset.tokens.dark || {}))
  ]);
}
function Ci(e, t) {
  const i = Ti(e);
  return Object.fromEntries(Object.entries(t).filter(([n]) => !i.has(n)));
}
function Ve(e, t) {
  const i = Ti(e);
  return Object.fromEntries(Object.entries(t).filter(([n]) => !i.has(n)));
}
function me(e, t) {
  const i = Object.entries(t).map(([n, s]) => `  ${n}: ${s};`);
  return `${e} {
${i.join(`
`)}
}
`;
}
function xd(e, t = {}) {
  const i = t.selector || ":root", n = t.darkSelector || ".dark", s = `/* fewui theme "${e.id}" — preset.js'ten üretildi (buildThemeCss); elle düzenlemeyin. */
`, r = { ...Ci(e, ki), ...q(e.preset.tokens.dark) }, a = Object.keys(r).length ? me(n, r) : "", u = Ve(e, Si), l = Ve(e, xi), c = (h) => h.replace(/^/gm, "  ").replace(/^  $/gm, ""), p = Object.keys(u).length || Object.keys(l).length ? `@supports ${Nl} {
${c(me(i, u) + me(n, l))}}
` : "";
  return `${s}${me(i, _i(e))}${a}${p}`;
}
function Ie(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Yl(e) {
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
function Oe(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function de(e, t, i) {
  return `#${Oe(e)}${Oe(t)}${Oe(i)}`;
}
function ke(e, t, i) {
  const [n, s, r] = [e, t, i].map((a) => {
    const u = a / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * s + 0.0722 * r;
}
function Ye(e) {
  const t = String(e || "").trim().match(/^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:deg)?\s*(?:\/[^)]*)?\)$/i);
  if (!t) return null;
  const i = t[1].endsWith("%") ? Number.parseFloat(t[1]) / 100 : Number.parseFloat(t[1]), n = Number.parseFloat(t[2]), s = Number.parseFloat(t[3]);
  return [i, n, s].every(Number.isFinite) ? { l: i > 1 ? i / 100 : i, c: n, h: s } : null;
}
function Ii(e, t, i) {
  const n = i * Math.PI / 180, s = t * Math.cos(n), r = t * Math.sin(n), a = (e + 0.3963377774 * s + 0.2158037573 * r) ** 3, u = (e - 0.1055613458 * s - 0.0638541728 * r) ** 3, l = (e - 0.0894841775 * s - 1.291485548 * r) ** 3;
  return [
    4.0767416621 * a - 3.3077115913 * u + 0.2309699292 * l,
    -1.2684380046 * a + 2.6097574011 * u - 0.3413193965 * l,
    -0.0041960863 * a - 0.7034186147 * u + 1.707614701 * l
  ].map((p) => {
    const h = Math.min(1, Math.max(0, p));
    return 255 * (h <= 31308e-7 ? 12.92 * h : 1.055 * h ** (1 / 2.4) - 0.055);
  });
}
function ge(e) {
  const t = Ie(e);
  if (t) return t;
  const i = Ye(e);
  return i ? Ii(i.l, i.c, i.h) : null;
}
function Se(e, t) {
  const i = ke(...e), n = ke(...t), [s, r] = i > n ? [i, n] : [n, i];
  return (s + 0.05) / (r + 0.05);
}
function Gt(e, t = "#ffffff", i = 4.5) {
  const n = ge(t);
  if (!n) return e;
  const s = Ye(e);
  if (s) {
    let { l: c } = s;
    for (let p = 0; p < 60 && Se(Ii(c, s.c, s.h), n) < i && c > 0.05; p += 1)
      c -= 0.01;
    return c === s.l ? e : `oklch(${c.toFixed(3)} ${s.c} ${s.h})`;
  }
  const r = Ie(e);
  if (!r) return e;
  let [a, u, l] = r;
  for (let c = 0; c < 40 && Se([a, u, l], n) < i; c += 1)
    a *= 0.95, u *= 0.95, l *= 0.95;
  return de(a, u, l);
}
function Zl(e, t = "#ffffff", i = "#0a0a0b") {
  const n = ge(e), s = ge(t), r = ge(i);
  if (n && s && r)
    return Se(n, s) >= Se(n, r) ? t : i;
  const a = Yl(e);
  return a != null && a > 0.72 ? i : t;
}
function wd(e, t) {
  if (t === "dark" && Ye(e)) return Gt(e, "#ffffff", 4.5);
  const i = Ie(e);
  if (!i) return e;
  let [n, s, r] = i, a = ke(n, s, r);
  if (t === "dark") {
    if (a < 0.12) {
      const l = Math.min(1, (0.28 - a) / Math.max(0.01, 0.28));
      n += (255 - n) * l * 0.55, s += (255 - s) * l * 0.55, r += (255 - r) * l * 0.55, a = ke(n, s, r);
    }
    return Gt(de(n, s, r), "#ffffff", 4.5);
  }
  return a > 0.82 ? de(n * 0.22, s * 0.22, r * 0.22) : e;
}
function Fi(e) {
  const t = Ie(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, n, s] = t, r = de(
    i + (255 - i) * 0.12,
    n + (255 - n) * 0.12,
    s + (255 - s) * 0.12
  ), a = de(
    i + (255 - i) * 0.28,
    n + (255 - n) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: r, brandAccent: a };
}
function se(e) {
  var r, a;
  if (!e || typeof e != "object" || !e.id)
    throw new Error("[fewui] defineTheme: `id` zorunlu.");
  const t = e.extends, i = e.preset || {}, n = jt(t == null ? void 0 : t.preset.tokens.light, (r = i.tokens) == null ? void 0 : r.light), s = jt(t == null ? void 0 : t.preset.tokens.dark, (a = i.tokens) == null ? void 0 : a.dark);
  return {
    id: String(e.id),
    label: e.label || String(e.id),
    description: e.description || "",
    preset: {
      fonts: { ...t == null ? void 0 : t.preset.fonts, ...i.fonts },
      tokens: { light: n, dark: s }
    },
    defaults: Ne({ ...t == null ? void 0 : t.defaults, ...e.defaults }),
    css: e.css || {}
  };
}
function _d(e, t = {}) {
  return se({
    id: e.id,
    label: e.label,
    description: e.description,
    css: e.css,
    extends: e,
    preset: { fonts: t.fonts, tokens: t.tokens },
    defaults: t.defaults
  });
}
function Li(e) {
  return !!(e && typeof e == "object" && "id" in e && "preset" in e && e.preset && typeof e.preset == "object" && "tokens" in e.preset);
}
const Ql = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, Xl = {
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
      success: "oklch(0.53 0.15 152)",
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
      /**
       * Kategorik grafik serisi (pasta / çok serili) — sabit sıra: 1 mavi · 2 turuncu · 3 turkuaz ·
       * 4 amber · 5 pembe · 6 yeşil · 7 mor · 8 kırmızı. Komşu sıra renk körlüğü denetiminden geçer;
       * koyu değerler koyu zemin için ayrı seçilir (otomatik ters çevrilmez).
       */
      chartSeries1: "#2a78d6",
      chartSeries2: "#eb6834",
      chartSeries3: "#1baf7a",
      chartSeries4: "#eda100",
      chartSeries5: "#e87ba4",
      chartSeries6: "#008300",
      chartSeries7: "#6250d6",
      chartSeries8: "#e34948",
      muted: "var(--base-200)",
      /** base-500 tonlu yüzeyde (surface-subtle, field kartı) 4.27:1 kalıyordu; %30 base-600 → ≥4.5. */
      mutedForeground: "color-mix(in oklab, var(--base-500) 70%, var(--base-600))",
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
      /** Primary metin dark'ta soluk zeminde ≥4.5:1 (65% karışım 4.15:1 kalıyordu). */
      primaryInk: "color-mix(in oklab, var(--primary) 50%, var(--foreground))",
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
      /** Dolu tonlar beyaz metinle ≥4.5:1 (eskisi: success 3.4, info 2.4, danger 3.8). Tonlu metin `--*-ink`. */
      success: "oklch(0.54 0.14 152)",
      info: "oklch(0.55 0.11 252)",
      danger: "oklch(0.57 0.19 27)",
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
      chartSeries1: "#3987e5",
      chartSeries2: "#d95926",
      chartSeries3: "#199e70",
      chartSeries4: "#c98500",
      chartSeries5: "#d55181",
      chartSeries6: "#008300",
      chartSeries7: "#9085e9",
      chartSeries8: "#e66767",
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
}, Ai = se({
  id: "web",
  label: "Web",
  description: "Restta panel — opak yüzeyler, Inter, geniş radius.",
  defaults: Ql,
  preset: Xl,
  css: {
    color: "fewui/themes/web/color.css",
    styles: "fewui/themes/web/styles.css"
  }
}), Jl = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, eu = {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
  },
  tokens: {
    light: {
      /**
       * Grouped canvas — iOS `systemGroupedBackground` (#F2F2F7) parlaklığı. `base-50` beyaz kartla
       * neredeyse aynı tondaydı (kart seçilmiyordu); dark'taki siyah zemin / gri kart basamağının karşılığı.
       */
      background: "color-mix(in oklab, var(--base-100) 80%, var(--base-200))",
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
}, tu = se({
  id: "liquidglass",
  label: "Liquid Glass",
  description: "iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.",
  extends: Ai,
  defaults: Jl,
  preset: eu,
  css: {
    color: "fewui/themes/liquidglass/color.css",
    styles: "fewui/themes/liquidglass/styles.css",
    platform: {
      ios: "fewui/themes/liquidglass/platform/ios.css"
    }
  }
}), iu = {
  iconType: "light",
  buttonRounded: "full",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, ru = {
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
      success: "oklch(0.53 0.15 152)",
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
      chartForeground: "#ffffff",
      /**
       * Kategorik grafik serisi (pasta / çok serili) — sabit sıra: 1 mavi · 2 turuncu · 3 turkuaz ·
       * 4 amber · 5 pembe · 6 yeşil · 7 mor · 8 kırmızı. Komşu sıra renk körlüğü denetiminden geçer;
       * koyu değerler koyu zemin için ayrı seçilir (otomatik ters çevrilmez).
       */
      chartSeries1: "#2a78d6",
      chartSeries2: "#eb6834",
      chartSeries3: "#1baf7a",
      chartSeries4: "#eda100",
      chartSeries5: "#e87ba4",
      chartSeries6: "#008300",
      chartSeries7: "#6250d6",
      chartSeries8: "#e34948"
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
      chartForeground: "#381e72",
      chartSeries1: "#3987e5",
      chartSeries2: "#d95926",
      chartSeries3: "#199e70",
      chartSeries4: "#c98500",
      chartSeries5: "#d55181",
      chartSeries6: "#008300",
      chartSeries7: "#9085e9",
      chartSeries8: "#e66767"
    }
  }
}, nu = se({
  id: "android",
  label: "Android",
  description: "Material 3 — Roboto, surface containers, filled/tonal buttons, elevated cards.",
  defaults: iu,
  preset: ru,
  css: {
    color: "fewui/themes/android/color.css",
    styles: "fewui/themes/android/styles.css",
    platform: {
      android: "fewui/themes/android/platform/android.css"
    }
  }
}), su = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, au = {
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
      success: "oklch(0.53 0.15 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.55 0.22 27)",
      dangerForeground: "oklch(0.985 0.01 27)",
      /** Yüzeyler koyu olduğundan sönük / vurgu dolguları da koyu skaladan (base-200 koyu kartta beyaz kutu çiziyordu). */
      muted: "var(--base-800)",
      mutedForeground: "#a3a3a3",
      /** Landing "light" modu da koyu yüzeyli — seçim tonları dark kuralıyla (light türetimi koyulaştırırdı). */
      primarySoft: "color-mix(in oklab, var(--primary) 26%, var(--surface))",
      primarySoftHover: "color-mix(in oklab, var(--primary) 34%, var(--surface))",
      uiSelectedFg: "color-mix(in oklab, var(--primary) 55%, var(--foreground))",
      uiFocusRing: "color-mix(in oklab, var(--primary) 70%, var(--foreground))",
      accent: "var(--base-800)",
      accentForeground: "var(--base-50)",
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
}, ou = se({
  id: "landing",
  label: "Landing",
  description: "Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.",
  defaults: su,
  preset: au,
  css: {
    color: "fewui/themes/landing/color.css",
    styles: "fewui/themes/landing/styles.css"
  }
}), lu = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, uu = {
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
      /** Light mod da koyu yüzeyli — ikincil / sönük / vurgu dolguları koyu tondan (base-200 koyu kartta beyaz kutu çiziyordu). */
      secondary: "var(--base-800)",
      secondaryForeground: "var(--base-50)",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.53 0.15 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.55 0.22 27)",
      dangerForeground: "oklch(0.985 0.01 27)",
      muted: "var(--base-800)",
      mutedForeground: "var(--base-400)",
      accent: "#312e81",
      accentForeground: "#e0e7ff",
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
      /** Primary metin dark'ta soluk zeminde ≥4.5:1 (65% karışım 4.15:1 kalıyordu). */
      primaryInk: "color-mix(in oklab, var(--primary) 50%, var(--foreground))",
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
}, du = se({
  id: "fewui",
  label: "Fewui",
  description: "fewui.com — indigo marka, koyu marketing kabuğu.",
  defaults: lu,
  preset: uu,
  css: {
    color: "fewui/themes/fewui/color.css",
    styles: "fewui/themes/fewui/styles.css"
  }
}), Kt = "web", Fe = /* @__PURE__ */ new Map();
function cu(e) {
  if (!Li(e))
    throw new Error("[fewui] registerTheme: geçerli bir tema paketi bekleniyor (defineTheme).");
  return Fe.set(e.id, e), e;
}
for (const e of [Ai, tu, nu, ou, du])
  cu(e);
function fu(e) {
  return Fe.get(String(e || "").trim()) ?? null;
}
function Td() {
  return [...Fe.values()];
}
function Ze(e) {
  if (Li(e)) return e;
  const t = fu(
    /** @type {string} */
    e || Kt
  );
  return t || /** @type {ThemePackage} */
  Fe.get(Kt);
}
function Cd(e) {
  return `fewui/themes/${Ze(e).id}.css`;
}
const ce = /* @__PURE__ */ new WeakMap();
function Qe(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function hu(e, t) {
  if (!e || typeof e != "object") return {};
  if ("light" in e || "dark" in e) {
    const i = (
      /** @type {{ light?: UiThemeTokens, dark?: UiThemeTokens }} */
      e
    );
    return {
      ...q(i.light),
      ...t === "dark" ? q(i.dark) : {}
    };
  }
  return q(
    /** @type {UiThemeTokens} */
    e
  );
}
function Xe(e, t = {}) {
  const i = Ze(e), n = t.mode === "dark" ? "dark" : "light";
  return { ...t.inline ? Ul(i, n) : wi(i.preset.fonts), ...hu(t.overrides, n) };
}
function mu(e, t = {}) {
  const i = Qe(t.root);
  if (!i) return {};
  const n = Ze(e), s = t.mode ?? (i.classList.contains("dark") ? "dark" : "light");
  i.classList.toggle("dark", s === "dark");
  const r = !!t.inline, a = Xe(n, { mode: s, inline: r, overrides: t.overrides }), u = ce.get(i);
  if (u)
    for (const l of u.keys)
      l in a || i.style.removeProperty(l);
  for (const [l, c] of Object.entries(a))
    i.style.setProperty(l, c);
  return ce.set(i, { theme: n, inline: r, overrides: t.overrides, keys: Object.keys(a) }), a;
}
function Id(e, t) {
  const i = Qe(t);
  if (!i) return;
  const n = ce.get(i);
  if (n) {
    mu(n.theme, { mode: e, root: i, inline: n.inline, overrides: n.overrides });
    return;
  }
  i.classList.toggle("dark", e === "dark");
}
function Fd(e) {
  const t = Qe(e);
  if (!t) return;
  const i = ce.get(t);
  if (i) {
    for (const n of i.keys) t.style.removeProperty(n);
    ce.delete(t);
  }
}
function Ld(e, t = {}) {
  const i = Xe(e, t);
  return {
    classAttr: t.mode === "dark" ? "dark" : "",
    styleAttr: Object.entries(i).map(([n, s]) => `${n}: ${s}`).join("; ")
  };
}
function Ad(e, t = {}) {
  const i = Xe(e, t), n = [], s = Object.entries(i).map(([u, l]) => `${u}: ${l} !important`).join("; ");
  s && n.push(`:root, html, html.dark { ${s} }`);
  const r = i["--font-sans"], a = i["--font-heading"] || r;
  return r && n.push(`html, body { font-family: ${r} !important; }`), a && n.push(`h1, h2, h3, h4, h5, h6 { font-family: ${a} !important; }`), n.join(`
`);
}
function zd(e) {
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
  n && (t.primary = String(n), t.primaryForeground ?? (t.primaryForeground = Zl(t.primary)), t.ring ?? (t.ring = `color-mix(in oklab, ${t.primary} 55%, transparent)`));
  const s = e.secondaryColor || e.secondary;
  s && (t.secondary = String(s)), e.baseColor && typeof e.baseColor == "object" && (t.base = { ...e.baseColor });
  const r = e.bodyFontFamily || e.fontFamily;
  r && (t["--font-sans"] = ve(String(r)));
  const a = e.headingFontFamily || r;
  if (a && (t["--font-heading"] = ve(String(a))), e.colors && typeof e.colors == "object")
    for (const [u, l] of Object.entries(e.colors))
      l != null && l !== "" && (t[u] = String(l));
  return t;
}
function Dd(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const n = Fi(String(i)), s = { ...e.colors && typeof e.colors == "object" ? e.colors : {} };
  return (t.force || !s["brand-accent"]) && (s["brand-accent"] = n.brandAccent), {
    ...e,
    accent: t.force || !e.accent ? n.accent : e.accent,
    colors: s
  };
}
const zi = 300, Wt = { info: 0, success: 1, warning: 2, danger: 3 }, H = we({
  /** @type {ToastItem[]} */
  items: []
});
let pe = 0, U = null, le = null;
function Le() {
  le && (clearTimeout(le), le = null);
}
function Di() {
  if (U == null) return null;
  const e = H.items.find((t) => t.id === U);
  return !e || e.sealed ? (U = null, null) : e;
}
function Bi() {
  Le();
  const e = Di();
  e && (e.sealed = !0), U = null;
}
function qt() {
  Le(), le = setTimeout(() => {
    le = null, Bi();
  }, zi);
}
function xe(e) {
  e._timer && (clearTimeout(e._timer), e._timer = null), e.duration > 0 && (e._timer = setTimeout(() => Je(e.id), e.duration));
}
function Oi(e, t) {
  const i = Wt[e] ?? 0;
  return (Wt[t] ?? 0) > i ? t : e;
}
function Ut(e, t) {
  return {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    color: e.color ?? "info"
  };
}
function Bd(e = {}) {
  const t = Date.now(), i = e.group !== !1, n = e.duration !== void 0 ? e.duration : 4500, s = e.color ?? "info";
  if (i) {
    const l = Di();
    if (l && t - l.lastAt <= zi)
      return pe += 1, l.children.push(Ut(e, pe)), l.color = Oi(l.color, s), l.lastAt = t, n === 0 || l.duration === 0 ? l.duration = 0 : l.duration = Math.max(l.duration, n), xe(l), qt(), l.id;
  }
  Bi(), pe += 1;
  const r = pe, a = Ut(e, r), u = {
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
  return H.items.push(u), i && (U = r, qt()), xe(u), r;
}
function pu(e, t) {
  const i = H.items.find((n) => n.id === e);
  !i || i.children.length < 2 || (i.expanded = t === !0, i.expanded ? i._timer && (clearTimeout(i._timer), i._timer = null) : xe(i));
}
function gu(e) {
  const t = H.items.find((i) => i.id === e);
  !t || t.children.length < 2 || pu(e, !t.expanded);
}
function Je(e) {
  const t = H.items.findIndex((n) => n.id === e);
  if (t === -1) return;
  const i = H.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), U === e && (Le(), U = null), H.items.splice(t, 1);
}
function bu(e, t) {
  const i = H.items.find((r) => r.id === e);
  if (!i) return;
  const n = i.children.findIndex((r) => r.id === t);
  if (n === -1) return;
  if (i.children.splice(n, 1), i.children.length === 0) {
    Je(e);
    return;
  }
  const s = i.children[0];
  i.title = s.title, i.description = s.description, i.color = i.children.reduce(
    (r, a) => Oi(r, a.color),
    s.color
  ), i.children.length < 2 && (i.expanded = !1, xe(i));
}
function Od() {
  Le(), U = null;
  for (const e of H.items)
    e._timer && clearTimeout(e._timer);
  H.items.splice(0);
}
const Yt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, Zt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger"
}, yu = {
  name: "Toast",
  computed: {
    items() {
      return H.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: Je,
    queueDismissToastChild: bu,
    toggleToastExpanded: gu,
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
      return Yt[e] || Yt.info;
    },
    iconToneClass(e) {
      return Zt[e] || Zt.info;
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
}, vu = { class: "ui-toast-host" }, ku = ["aria-label"], Su = ["onClick", "onKeydown"], xu = { class: "ui-alert-body min-w-0 flex-1" }, wu = {
  key: 0,
  class: "ui-alert-title"
}, _u = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Tu = ["onClick", "onKeydown"], Cu = { class: "ui-alert-body min-w-0 flex-1" }, Iu = {
  key: 0,
  class: "ui-alert-title"
}, Fu = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Lu(e, t, i, n, s, r) {
  const a = x("ui-icon"), u = x("ui-button");
  return o(), _(_e, { to: "body" }, [
    m("div", vu, [
      v(Gi, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: w(() => [
          (o(!0), d(B, null, $(r.items, (l) => (o(), d("div", {
            key: l.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            r.isGrouped(l) && l.expanded ? (o(), d("div", {
              key: 0,
              class: "ui-toast-expanded-stack",
              role: "group",
              "aria-label": r.groupHeading(l)
            }, [
              (o(!0), d(B, null, $(l.children, (c) => (o(), d("div", F({
                key: c.id,
                class: [r.childToastClasses(c), "pointer-events-auto"]
              }, { ref_for: !0 }, r.childA11y(c), {
                onClick: (p) => r.onToastClick(l),
                onKeydown: [
                  re(O((p) => r.onToastClick(l), ["prevent"]), ["enter"]),
                  re(O((p) => r.onToastClick(l), ["prevent"]), ["space"])
                ]
              }), [
                m("span", {
                  class: S(["ui-alert-icon", r.iconToneClass(c.color)]),
                  "aria-hidden": "true"
                }, [
                  v(a, {
                    name: r.iconFor(c.color),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                m("div", xu, [
                  c.title ? (o(), d("p", wu, y(c.title), 1)) : f("", !0),
                  c.description ? (o(), d("p", _u, y(c.description), 1)) : f("", !0)
                ]),
                v(u, {
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "xmark",
                  "aria-label": r.dismissLabel,
                  onClick: O((p) => r.queueDismissToastChild(l.id, c.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])
              ], 16, Su))), 128))
            ], 8, ku)) : (o(), d("div", {
              key: 1,
              class: S(r.deckClasses(l))
            }, [
              (o(!0), d(B, null, $(r.stackSheetCount(l), (c) => (o(), d("span", {
                key: `${l.id}-sheet-${c}`,
                class: "ui-toast-deck-sheet",
                "aria-hidden": "true"
              }))), 128)),
              m("div", F({
                class: [r.toastClasses(l), "pointer-events-auto"]
              }, { ref_for: !0 }, r.toastA11y(l), {
                onClick: (c) => r.onToastClick(l),
                onKeydown: [
                  re(O((c) => r.onToastClick(l), ["prevent"]), ["enter"]),
                  re(O((c) => r.onToastClick(l), ["prevent"]), ["space"])
                ]
              }), [
                m("span", {
                  class: S(["ui-alert-icon", r.iconToneClass(l.color)]),
                  "aria-hidden": "true"
                }, [
                  v(a, {
                    name: r.iconFor(l.color),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                m("div", Cu, [
                  r.collapsedTitle(l) ? (o(), d("p", Iu, y(r.collapsedTitle(l)), 1)) : f("", !0),
                  r.collapsedDescription(l) ? (o(), d("p", Fu, y(r.collapsedDescription(l)), 1)) : f("", !0)
                ]),
                v(u, {
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "xmark",
                  "aria-label": r.dismissLabel,
                  onClick: O((c) => r.queueDismissToast(l.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])
              ], 16, Tu)
            ], 2))
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const Rd = /* @__PURE__ */ I(yu, [["render", Lu]]), Ed = {
  ui: {
    button: {
      loading: "Loading"
    },
    icon: {
      accessible: "{name} icon"
    },
    alert: {
      dismiss: "Dismiss",
      tone: { info: "Info", success: "Success", warning: "Warning", danger: "Error" }
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
}, Md = {
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
      dismiss: "Kapat",
      /** Ekran okuyucu ton öneki — önem renge tek başına bırakılmaz (WCAG 1.4.1) */
      tone: { info: "Bilgi", success: "Başarılı", warning: "Uyarı", danger: "Hata" }
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
}, Au = "fewui-local-fonts", zu = "fewui-local-fonts-catalog-preview";
let Qt = !1;
const Du = Object.freeze([
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
function Bu(e, t = "sans-serif") {
  const i = String(e || "").trim();
  if (!i) return "";
  const s = /\s/.test(i) && !/^["'].*["']$/.test(i) ? `"${i.replace(/"/g, "")}"` : i, r = String(t || "sans-serif").trim() || "sans-serif";
  return `${s}, ${r}`;
}
function Pd() {
  return Du.map((e) => ({
    value: e.value,
    label: e.label,
    fontFamily: Bu(e.value, e.fallback)
  }));
}
function $d(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function Vd(e) {
  return null;
}
function Nd(e = {}) {
  return "";
}
function Hd(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || Au)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function jd(e = {}) {
  var t;
  return typeof document > "u" ? null : Qt && !e.force ? ((t = document.getElementById(e.id || zu)) == null ? void 0 : t.getAttribute("href")) || "local" : (Qt = !0, "local");
}
function Gd(e, t = {}) {
  if (!e || typeof e != "object" || !e.primary) return e;
  const i = Fi(String(e.primary)), n = { ...e };
  return (t.force || !n.accent) && (n.accent = i.accent), (t.force || !n.brandAccent) && (n.brandAccent = i.brandAccent), n;
}
const Kd = "few", Ou = "#1B5CFF", Wd = "#ffffff", Xt = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: Ou,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function qd() {
  return {
    light: Xt[600],
    dark: Xt[600]
  };
}
const Ri = "fewui-theme-custom-css";
function Ru(e, t = Ri) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let n = document.getElementById(t);
  if (!i) {
    n == null || n.remove();
    return;
  }
  n || (n = document.createElement("style"), n.id = t, document.head.appendChild(n)), n.textContent = i;
}
function Ud(e = Ri) {
  Ru("", e);
}
export {
  He as $,
  Hu as A,
  Ht as B,
  Ml as C,
  Ri as D,
  id as E,
  Xt as F,
  Du as G,
  Pl as H,
  nd as I,
  md as J,
  pd as K,
  od as L,
  El as M,
  gd as N,
  bd as O,
  ud as P,
  yd as Q,
  fd as R,
  ai as S,
  zi as T,
  $l as U,
  vd as V,
  Sd as W,
  kd as X,
  Ho as Y,
  Rd as Z,
  li as _,
  ju as a,
  ct as a$,
  qi as a0,
  Yi as a1,
  Rt as a2,
  xr as a3,
  I as a4,
  jd as a5,
  Hd as a6,
  Ru as a7,
  Pu as a8,
  mu as a9,
  Xu as aA,
  qd as aB,
  Cd as aC,
  fu as aD,
  Pd as aE,
  J as aF,
  P as aG,
  Li as aH,
  Td as aI,
  jt as aJ,
  Ne as aK,
  Ii as aL,
  Xa as aM,
  Ie as aN,
  Ye as aO,
  Yl as aP,
  Zl as aQ,
  Ge as aR,
  $u as aS,
  gi as aT,
  Bd as aU,
  Qa as aV,
  cu as aW,
  ke as aX,
  bi as aY,
  Zu as aZ,
  qu as a_,
  Nd as aa,
  Vd as ab,
  xd as ac,
  Ad as ad,
  Ld as ae,
  We as af,
  Ud as ag,
  Od as ah,
  Fd as ai,
  L as aj,
  ge as ak,
  Xe as al,
  Se as am,
  Wu as an,
  Z as ao,
  se as ap,
  Fi as aq,
  Je as ar,
  Ed as as,
  wd as at,
  Gt as au,
  q as av,
  _d as aw,
  ts as ax,
  ve as ay,
  Bu as az,
  Ku as b,
  fi as b0,
  hu as b1,
  Ze as b2,
  Y as b3,
  Te as b4,
  $d as b5,
  Ce as b6,
  Ul as b7,
  Pe as b8,
  qe as b9,
  vi as ba,
  pu as bb,
  Vu as bc,
  Id as bd,
  zd as be,
  fe as bf,
  Hl as bg,
  gu as bh,
  Md as bi,
  Rn as bj,
  E as bk,
  je as bl,
  Nu as bm,
  Et as bn,
  Gd as bo,
  Dd as bp,
  ne as c,
  Nr as d,
  Uu as e,
  ee as f,
  Yu as g,
  Qu as h,
  Kt as i,
  Vl as j,
  Ju as k,
  ed as l,
  Ke as m,
  td as n,
  Kd as o,
  Ou as p,
  Wd as q,
  rd as r,
  sd as s,
  ad as t,
  ld as u,
  ni as v,
  dd as w,
  cd as x,
  hd as y,
  Gu as z
};
//# sourceMappingURL=custom-css-BpXQTKeF.js.map
