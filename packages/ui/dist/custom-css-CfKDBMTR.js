import { ref as G, reactive as ve, inject as lr, getCurrentInstance as ur, useId as Xe, openBlock as o, createElementBlock as d, mergeProps as F, renderSlot as y, resolveComponent as w, normalizeClass as x, createVNode as k, createCommentVNode as f, createElementVNode as b, toDisplayString as g, createTextVNode as O, createBlock as T, resolveDynamicComponent as ne, withCtx as _, Teleport as ze, Transition as Ge, normalizeStyle as de, Fragment as A, withModifiers as E, renderList as B, createSlots as Je, Comment as dr, Text as cr, useSlots as hr, computed as oe, onMounted as fr, onBeforeUnmount as mr, watch as pr, nextTick as Tt, withDirectives as Ke, vShow as br, withKeys as Ct, vModelText as It, normalizeProps as gr, guardReactiveProps as yr, TransitionGroup as vr } from "vue";
import { RouterLink as wi } from "vue-router";
const J = Object.freeze(["sm", "md", "lg"]), _i = Object.freeze(["xs", "sm", "md", "lg", "xl"]), cc = Object.freeze(["xs", "sm", "md", "lg", "xl", "2xl"]), Ti = "(max-width: 1023px)", Ci = G(!1);
function Pe() {
  typeof window > "u" || (Ci.value = window.matchMedia(Ti).matches);
}
if (typeof window < "u") {
  Pe();
  const e = window.matchMedia(Ti);
  typeof e.addEventListener == "function" ? e.addEventListener("change", Pe) : typeof e.addListener == "function" && e.addListener(Pe);
}
function H() {
  return Ci.value;
}
function kr() {
  return typeof document > "u" ? !1 : document.documentElement.classList.contains("cap-native");
}
function Sr() {
  return kr();
}
function Ft(e, { defaultSize: t = "md" } = {}) {
  if (e !== t)
    return e;
  const i = Sr();
  return t === "sm" && !i ? "lg" : t === "md" ? i ? "lg" : "md" : e;
}
const le = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm",
  dialogGuardUnsaved: !1,
  dialogSubmitOnEnter: !1,
  density: "comfortable"
}, xr = ["comfortable", "compact"];
function hc(e, t) {
  e != null && e.setAttribute && (t && t !== "comfortable" && xr.includes(t) ? e.setAttribute("data-ui-density", t) : e.removeAttribute("data-ui-density"));
}
function et(e) {
  if (!e || typeof e != "object")
    return { ...le };
  const t = { ...le };
  for (const i of Object.keys(le)) {
    const n = e[i];
    n != null && n !== "" && (t[i] = n);
  }
  return t;
}
const tt = Symbol("uiDefaults"), wr = ["solid", "regular", "brands", "light", "duotone", "thin"];
function ue(e, t, i) {
  if (t != null && t !== "")
    return t;
  const n = e == null ? void 0 : e[i];
  return n != null && n !== "" ? (
    /** @type {T} */
    n
  ) : (
    /** @type {T} */
    le[i]
  );
}
function ee(e, t, { key: i = "controlSize", defaultSize: n = "md" } = {}) {
  if (t != null && t !== "")
    return Ft(t, { defaultSize: n });
  const s = (e == null ? void 0 : e[i]) ?? (e == null ? void 0 : e.controlSize) ?? n;
  return Ft(s, { defaultSize: n });
}
function Oe(e, t) {
  const i = ue(e, t, "iconType");
  return wr.includes(i) ? i : "light";
}
function fc(e, t) {
  const i = ve(et(t));
  return e.provide(tt, i), i;
}
function mc(e, t) {
  Object.assign(e, et(t));
}
function pc() {
  return lr(tt, le);
}
const P = {
  inject: {
    uiDefaults: {
      from: tt,
      default: () => le
    }
  }
}, I = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of t)
    i[n] = s;
  return i;
};
let We = 0;
const Ii = [];
function Fi() {
  return ur() ? Xe() : null;
}
function bc(e) {
  const t = Fi();
  return t ? `${e}-${t}` : (We += 1, `${e}-${We}`);
}
function K(e) {
  let t = 0;
  const i = () => {
    const n = Fi();
    return n ? `${e}-${n}` : (t += 1, `${e}-${t}`);
  };
  return Ii.push(() => {
    t = 0;
  }), i;
}
function gc() {
  We = 0;
  for (const e of Ii)
    e();
}
const _r = ["solid", "regular", "brands", "light", "duotone", "thin"], se = {
  type: String,
  default: void 0,
  validator: (e) => e == null || _r.includes(e)
};
function ke(e = "iconType") {
  return {
    resolvedIconType() {
      return Oe(this.uiDefaults, this[e]);
    }
  };
}
function D(...e) {
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
const Tr = ["horizontal", "vertical"], Cr = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Tr.includes(e)
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
      return D(
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
}, Ir = ["aria-label"];
function Fr(e, t, i, n, s, r) {
  return o(), d("div", F({
    class: r.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, r.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16, Ir);
}
const yc = /* @__PURE__ */ I(Cr, [["render", Fr]]), Lr = ["info", "success", "warning", "danger"], Lt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, At = {
  info: "text-[var(--info-ink)]",
  success: "text-[var(--success-ink)]",
  warning: "text-[var(--warning-ink)]",
  danger: "text-[var(--danger-ink)]"
}, Ar = ["", "polite", "assertive"], Dr = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Durum tonu */
    color: {
      type: String,
      default: "info",
      validator: (e) => Lr.includes(e)
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
      validator: (e) => Ar.includes(e)
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
      return this.icon || Lt[this.color] || Lt.info;
    },
    iconToneClass() {
      return At[this.color] || At.info;
    },
    resolvedActionsEnd() {
      return !!(this.banner || this.actionsEnd);
    },
    rootClasses() {
      return D(
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
}, zr = ["role", "aria-atomic"], Or = { class: "ui-alert-body" }, Er = {
  key: 0,
  class: "ui-alert-copy"
}, Mr = {
  key: 0,
  class: "ui-alert-title"
}, Rr = { class: "sr-only" }, Br = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Pr = {
  key: 0,
  class: "sr-only"
}, Nr = {
  key: 1,
  class: "ui-alert-slot"
}, $r = {
  key: 1,
  class: "ui-alert-actions"
};
function Vr(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("ui-button");
  return o(), d("div", F({
    class: r.rootClasses,
    role: r.alertRole,
    "aria-atomic": r.alertRole ? "true" : void 0
  }, r.passthroughAttrs), [
    i.showIcon ? (o(), d("span", {
      key: 0,
      class: x(["ui-alert-icon", r.iconToneClass]),
      "aria-hidden": "true"
    }, [
      y(e.$slots, "icon", {}, () => [
        k(a, {
          name: r.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    b("div", Or, [
      i.title || i.description ? (o(), d("div", Er, [
        i.title ? (o(), d("p", Mr, [
          b("span", Rr, g(r.toneLabel) + ": ", 1),
          O(g(i.title), 1)
        ])) : f("", !0),
        i.description ? (o(), d("p", Br, [
          i.title ? f("", !0) : (o(), d("span", Pr, g(r.toneLabel) + ": ", 1)),
          O(g(i.description), 1)
        ])) : f("", !0)
      ])) : f("", !0),
      e.$slots.default && !r.resolvedActionsEnd ? (o(), d("div", Nr, [
        y(e.$slots, "default")
      ])) : f("", !0)
    ]),
    e.$slots.default && r.resolvedActionsEnd ? (o(), d("div", $r, [
      y(e.$slots, "default")
    ])) : f("", !0),
    i.dismissible ? (o(), T(u, {
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
  ], 16, zr);
}
const vc = /* @__PURE__ */ I(Dr, [["render", Vr]]), Hr = _i, Dt = {
  xs: "ui-avatar--xs",
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg",
  xl: "ui-avatar--xl"
}, jr = ["circle", "rounded", "square"], Gr = {
  circle: "",
  rounded: "ui-avatar--rounded",
  square: "ui-avatar--square"
}, zt = Object.freeze({
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
}), Ot = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Kr(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return Ot[t] && (t = Ot[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Wr(e) {
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
const Ur = {
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
      validator: (e) => Hr.includes(e)
    },
    /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
    shape: {
      type: String,
      default: "circle",
      validator: (e) => jr.includes(e)
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
      return D(
        "ui-avatar",
        Dt[this.size] || Dt.md,
        Gr[this.shape] || "",
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
      return Wr(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Kr(e[0]) : "default";
    },
    letterColors() {
      return zt[this.colorLetterKey] || zt.default;
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
}, qr = ["src", "alt"], Yr = ["role", "aria-label", "aria-hidden"];
function Zr(e, t, i, n, s, r) {
  return o(), T(ne(r.rootTag), F({
    type: i.interactive ? "button" : void 0,
    class: r.rootClass,
    style: r.rootStyle
  }, r.rootBind, { onClick: r.onRootClick }), {
    default: _(() => [
      i.src && !s.imageFailed ? (o(), d("img", {
        key: 0,
        src: i.src,
        alt: r.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (a) => s.imageFailed = !0)
      }, null, 40, qr)) : (o(), d("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: i.interactive ? void 0 : "img",
        "aria-label": i.interactive ? void 0 : r.resolvedAlt,
        "aria-hidden": i.interactive ? "true" : void 0
      }, g(r.displayInitials), 9, Yr))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const kc = /* @__PURE__ */ I(Ur, [["render", Zr]]), Qr = Symbol("uiPortal"), it = {
  inject: {
    uiPortalTarget: {
      from: Qr,
      default: null
    }
  },
  computed: {
    portalTarget() {
      return typeof this.uiPortalTarget == "function" && this.uiPortalTarget() || "body";
    }
  }
}, Ue = {
  dialog: 400,
  confirm: 420,
  floating: 450
}, Xr = 10, X = /* @__PURE__ */ new Map();
function Li() {
  let e = 0;
  for (const t of X.values()) e = Math.max(e, t.z);
  return e;
}
function Ai(e, t, i, n = 0) {
  const s = t === "modal" ? Ue.dialog : Ue.floating, r = Math.max(s, n, Li() + Xr);
  if (X.set(e, { kind: t, z: r, close: i }), t === "modal")
    for (const [a, u] of X)
      a === e || u.kind !== "floating" || Jr(a, e) || u.close();
  return r;
}
function Jr(e, t) {
  let i = t == null ? void 0 : t.$parent;
  for (; i; ) {
    if (i === e) return !0;
    i = i.$parent;
  }
  return !1;
}
function Ne(e) {
  const t = X.get(e);
  if (!t) return !1;
  for (const i of X.values())
    if (i.kind === "modal" && i.z > t.z) return !0;
  return !1;
}
function en() {
  return Li();
}
function tn(e) {
  const t = X.get(e);
  if (!t || t.kind !== "modal") return !1;
  for (const i of X.values())
    if (i.kind === "modal" && i.z > t.z) return !1;
  return !0;
}
function Di(e) {
  X.delete(e);
}
const rn = K("ui-tooltip"), nn = ["top", "bottom", "left", "right"], V = 8, sn = 5, an = 'button, a[href], input, select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])', on = {
  name: "Tooltip",
  mixins: [it],
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
      validator: (e) => nn.includes(e)
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
      layerStyle: null,
      tooltipId: rn(),
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
    window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("keydown", this.onDocumentKeydown), this.clearTimers(), this.unlinkDescription();
  },
  watch: {
    open(e) {
      e ? this.linkDescription() : this.unlinkDescription();
    }
  },
  methods: {
    clearTimers() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
    },
    scheduleShow() {
      if (this.disabled || !this.hasContent) return;
      this.clearTimers();
      const e = () => {
        const t = en();
        this.layerStyle = t > 0 ? { zIndex: String(t + sn) } : null, this.open = !0, this.$nextTick(() => this.updatePosition());
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
    /**
     * Tetikleyiciyi tooltip metnine `aria-describedby` ile bağlar.
     * Metin zaten erişilebilir adın kendisiyse (ikon düğmesi + aynı `aria-label`) çift okunmasın diye bağlanmaz.
     */
    linkDescription() {
      var s;
      if (this.unlinkDescription(), this.disabled || !this.hasContent) return;
      const e = this.$refs.wrapperRef, t = ((s = e == null ? void 0 : e.querySelector) == null ? void 0 : s.call(e, an)) || (e == null ? void 0 : e.firstElementChild);
      if (!t) return;
      const i = (t.getAttribute("aria-label") || t.textContent || "").trim();
      if (this.label && i === this.label.trim()) return;
      const n = (t.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
      n.includes(this.tooltipId) || n.push(this.tooltipId), t.setAttribute("aria-describedby", n.join(" ")), this.describedEl = t;
    },
    unlinkDescription() {
      const e = this.describedEl;
      if (!e) return;
      this.describedEl = null;
      const t = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter((i) => i && i !== this.tooltipId);
      t.length ? e.setAttribute("aria-describedby", t.join(" ")) : e.removeAttribute("aria-describedby");
    },
    onDocumentKeydown(e) {
      e.key === "Escape" && this.open && (this.open = !1, this.clearTimers());
    },
    updatePosition() {
      const e = this.$refs.wrapperRef;
      if (!e) return;
      const t = e.getBoundingClientRect(), i = V, n = t.left + t.width / 2, s = t.top + t.height / 2;
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
      t === "top" && a.top < V ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, a = n.getBoundingClientRect()) : t === "bottom" && a.bottom > r - V && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, a = n.getBoundingClientRect());
      let u = 0, l = 0;
      if (a.left < V ? u = V - a.left : a.right > s - V && (u = s - V - a.right), a.top < V ? l = V - a.top : a.bottom > r - V && (l = r - V - a.bottom), u === 0 && l === 0) return;
      const c = parseFloat(this.panelStyle.left), m = parseFloat(this.panelStyle.top);
      !Number.isFinite(c) || !Number.isFinite(m) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${c + u}px`,
        top: `${m + l}px`
      });
    }
  }
}, ln = ["id"], un = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function dn(e, t, i, n, s, r) {
  return o(), d("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => r.onEnter && r.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => r.onLeave && r.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => r.onFocusIn && r.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => r.onFocusOut && r.onFocusOut(...a))
  }, [
    y(e.$slots, "default"),
    s.portalReady ? (o(), T(ze, {
      key: 0,
      to: e.portalTarget
    }, [
      k(Ge, { name: "ui-tooltip-fade" }, {
        default: _(() => [
          s.open && !i.disabled && r.hasContent ? (o(), d("div", {
            key: 0,
            id: s.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: de([s.panelStyle, s.layerStyle]),
            role: "tooltip"
          }, [
            b("span", un, [
              y(e.$slots, "content", {}, () => [
                O(g(i.label), 1)
              ])
            ])
          ], 12, ln)) : f("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"])) : f("", !0)
  ], 544);
}
const zi = /* @__PURE__ */ I(on, [["render", dn]]);
function rt(e, t = ["class", "style"]) {
  const i = new Set(t), n = {};
  for (const [s, r] of Object.entries(e || {}))
    i.has(s) || (n[s] = r);
  return n;
}
function Oi(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function Ei(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * n) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const cn = ["primary", "secondary", "success", "warning", "info", "danger"], hn = ["solid", "outline", "muted"], fn = ["xs", "sm", "md", "lg"], Mi = {
  primary: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  success: "border border-transparent bg-success text-success-foreground",
  warning: "border border-transparent bg-warning text-warning-foreground",
  info: "border border-transparent bg-info text-info-foreground",
  danger: "border border-transparent bg-danger text-danger-foreground"
}, mn = {
  primary: "border border-current bg-transparent text-[var(--primary-ink)]",
  secondary: "border border-border bg-transparent text-foreground",
  success: "border border-current bg-transparent text-[var(--success-ink)]",
  warning: "border border-current bg-transparent text-[var(--warning-ink)]",
  info: "border border-current bg-transparent text-[var(--info-ink)]",
  danger: "border border-current bg-transparent text-[var(--danger-ink)]"
}, pn = {
  primary: "border border-transparent bg-primary/12 text-[var(--primary-ink)]",
  secondary: "border border-transparent bg-muted text-muted-foreground",
  success: "border border-transparent bg-success/12 text-[var(--success-ink)]",
  warning: "border border-transparent bg-warning/15 text-[var(--warning-ink)]",
  info: "border border-transparent bg-info/12 text-[var(--info-ink)]",
  danger: "border border-transparent bg-danger/12 text-[var(--danger-ink)]"
}, bn = { solid: Mi, outline: mn, muted: pn }, Et = {
  xs: "ui-badge--xs",
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, $e = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  64: "max-w-64",
  full: "max-w-full"
}, gn = {
  name: "Badge",
  components: { Tooltip: zi },
  inheritAttrs: !1,
  props: {
    /** Ton — `primary | secondary | success | warning | info | danger` */
    /** Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). */
    color: {
      type: String,
      default: void 0,
      validator: (e) => e == null || cn.includes(e)
    },
    /** Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini */
    variant: {
      type: String,
      default: "solid",
      validator: (e) => hn.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => fn.includes(e)
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
      validator: (e) => Object.keys($e).includes(e)
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
      return (bn[this.variant] || Mi)[this.color || (this.variant === "muted" ? "secondary" : "primary")];
    },
    isClickable() {
      return this.clickable || typeof this.$attrs.onClick == "function";
    },
    rootTag() {
      return this.isClickable ? "button" : "span";
    },
    rootAttrs() {
      const e = rt(this.$attrs);
      return this.isClickable ? { type: "button", ...e } : e;
    },
    labelWidthClass() {
      return this.truncate ? $e[this.maxWidth] || $e[48] : "";
    },
    hasAdornment() {
      return !!(this.prefixIcon || this.suffixIcon || this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return Oi(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: Ei(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return D(
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        Et[this.size] || Et.sm,
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
}, yn = {
  key: 0,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, vn = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, kn = {
  key: 2,
  class: "inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, Sn = {
  key: 3,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function xn(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("Tooltip");
  return o(), T(u, {
    label: r.tooltipLabel,
    disabled: !r.showTooltip,
    placement: "top"
  }, {
    default: _(() => [
      (o(), T(ne(r.rootTag), F(r.hexBadgeStyle ? { ...r.rootAttrs, style: r.hexBadgeStyle } : r.rootAttrs, { class: r.badgeClasses }), {
        default: _(() => [
          i.prefixIcon ? (o(), d("span", yn, [
            k(a, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.prepend ? (o(), d("span", vn, [
            y(e.$slots, "prepend")
          ])) : f("", !0),
          b("span", {
            ref: "labelRef",
            class: x(["ui-badge-label", [r.labelWidthClass, i.truncate ? "ui-badge-label--truncate" : ""]])
          }, [
            y(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (o(), d("span", kn, [
            k(a, {
              name: i.suffixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : e.$slots.append ? (o(), d("span", Sn, [
            y(e.$slots, "append")
          ])) : f("", !0)
        ]),
        _: 3
      }, 16, ["class"]))
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const wn = /* @__PURE__ */ I(gn, [["render", xn]]);
function Mt(e, t = {}) {
  let i = String(e ?? "").trim().toLocaleLowerCase().replace(/̇/g, "").replace(/ı/g, "i");
  return t.diacritics && (i = i.normalize("NFD").replace(/[̀-ͯ]/g, "")), i;
}
const _n = 600;
function Ri(e) {
  return typeof e.key == "string" && e.key.length === 1 && e.key !== " " && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function Bi() {
  let e = "", t = null;
  return (i, n, s) => {
    t && clearTimeout(t), t = setTimeout(() => {
      e = "", t = null;
    }, _n);
    const r = Mt(i), a = e !== "" && [...e].every((m) => m === r);
    e += r;
    const u = a ? r : e, l = n.length;
    if (!l) return -1;
    const c = e.length === 1 || a ? s + 1 : Math.max(s, 0);
    for (let m = 0; m < l; m += 1) {
      const h = ((c + m) % l + l) % l;
      if (Mt(n[h]).startsWith(u)) return h;
    }
    return -1;
  };
}
const Tn = ["none", "sm", "md"], Rt = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Cn = {
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
      validator: (e) => Tn.includes(e)
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
      return ["ui-divider", Rt[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Rt[this.spacing] || "",
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
}, In = { class: "ui-divider__label" }, Fn = ["title"];
function Ln(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return r.hasLabel ? (o(), d("div", F({
    key: 1,
    class: r.labeledClass
  }, r.labeledAttrs), [
    t[0] || (t[0] = b("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    b("span", In, [
      i.icon ? (o(), T(a, {
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
      }, g(i.title), 9, Fn)) : f("", !0)
    ]),
    t[1] || (t[1] = b("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (o(), d("hr", F({
    key: 0,
    class: r.rootClass
  }, r.rootAttrs), null, 16));
}
const nt = /* @__PURE__ */ I(Cn, [["render", Ln]]), An = {
  name: "MenuListItem",
  props: {
    item: {
      type: Object,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    },
    /** Sütunlu satır çizimi (gösterge, ikon, kısayol, alt menü oku). */
    aligned: {
      type: Boolean,
      default: !1
    },
    /** Menüde ayrılacak sütunlar: `{ indicator, icon }`. */
    columns: {
      type: Object,
      default: () => ({ indicator: !1, icon: !1 })
    },
    expanded: {
      type: Boolean,
      default: !1
    },
    submenuId: {
      type: String,
      default: void 0
    }
  },
  computed: {
    described() {
      return !!this.item.description;
    },
    rich() {
      return this.aligned && !this.described;
    },
    /**
     * Klasik (sütunsuz) menüde ikonlu ve ikonsuz öğeler karışıksa, ikonsuz öğenin etiketi
     * ikon sütunu kadar içeriden başlar; ikonlu satırların çizimi değişmez.
     */
    inset() {
      return !this.rich && !this.described && this.columns.icon && !this.item.icon;
    },
    hasChildren() {
      return Array.isArray(this.item.children) && this.item.children.length > 0;
    },
    checkable() {
      return this.item.type === "checkbox" || this.item.type === "radio";
    },
    role() {
      return this.item.type === "checkbox" ? "menuitemcheckbox" : this.item.type === "radio" ? "menuitemradio" : "menuitem";
    },
    /** Öğe `color` (ör. `'danger'` sil eylemi); seçili öğe `primary`. */
    color() {
      return this.item.color ? this.item.color : this.item.selected ? "primary" : "secondary";
    },
    suffixIcon() {
      const e = this.item;
      return e.suffixIcon || e.suffix_icon ? e.suffixIcon || e.suffix_icon : e.selected ? "check" : this.hasChildren ? "chevron-right" : null;
    }
  }
}, Dn = {
  key: 0,
  class: "ui-dropdown-item-copy"
}, zn = {
  key: 0,
  class: "ui-dropdown-item-icon",
  "aria-hidden": "true"
}, On = { class: "ui-dropdown-item-label" }, En = { class: "ui-dropdown-item-description" }, Mn = {
  key: 1,
  class: "ui-dropdown-row"
}, Rn = {
  key: 0,
  class: "ui-dropdown-row-indicator",
  "aria-hidden": "true"
}, Bn = {
  key: 1,
  class: "ui-dropdown-row-dot"
}, Pn = {
  key: 1,
  class: "ui-dropdown-row-icon",
  "aria-hidden": "true"
}, Nn = { class: "ui-dropdown-row-label" }, $n = {
  key: 2,
  class: "ui-kbd ui-kbd--sm ui-text-2xs ui-dropdown-row-shortcut"
};
function Vn(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("ui-button");
  return o(), T(u, {
    class: x(["ui-dropdown-item", r.inset ? "ui-dropdown-item--inset" : ""]),
    variant: "ghost",
    color: r.color,
    rounded: !r.described,
    block: "",
    "text-align": "left",
    role: r.role,
    tabindex: "-1",
    "data-menu-index": i.index,
    "aria-checked": r.checkable ? i.item.checked ? "true" : "false" : void 0,
    "aria-haspopup": r.hasChildren ? "menu" : void 0,
    "aria-expanded": r.hasChildren ? i.expanded ? "true" : "false" : void 0,
    "aria-controls": r.hasChildren && i.expanded ? i.submenuId : void 0,
    "prefix-icon": r.rich || r.described ? null : i.item.icon || null,
    "suffix-icon": r.rich ? null : r.suffixIcon,
    disabled: i.item.disabled,
    wrap: r.described
  }, {
    default: _(() => [
      r.described ? (o(), d("span", Dn, [
        i.item.icon ? (o(), d("span", zn, [
          k(a, {
            name: i.item.icon,
            size: "sm"
          }, null, 8, ["name"])
        ])) : f("", !0),
        b("span", On, g(i.item.label), 1),
        b("span", En, g(i.item.description), 1)
      ])) : r.rich ? (o(), d("span", Mn, [
        i.columns.indicator ? (o(), d("span", Rn, [
          i.item.type === "checkbox" && i.item.checked ? (o(), T(a, {
            key: 0,
            name: "check",
            size: "xs"
          })) : i.item.type === "radio" && i.item.checked ? (o(), d("span", Bn)) : f("", !0)
        ])) : f("", !0),
        i.columns.icon ? (o(), d("span", Pn, [
          i.item.icon ? (o(), T(a, {
            key: 0,
            name: i.item.icon,
            size: "xs"
          }, null, 8, ["name"])) : f("", !0)
        ])) : f("", !0),
        b("span", Nn, g(i.item.label), 1),
        i.item.shortcut ? (o(), d("kbd", $n, g(i.item.shortcut), 1)) : f("", !0),
        r.hasChildren || r.suffixIcon ? (o(), d("span", {
          key: 3,
          class: x(["ui-dropdown-row-suffix", r.hasChildren ? "ui-dropdown-row-suffix--submenu" : ""]),
          "aria-hidden": "true"
        }, [
          k(a, {
            name: r.hasChildren ? "chevron-right" : r.suffixIcon,
            size: "xs"
          }, null, 8, ["name"])
        ], 2)) : f("", !0)
      ])) : (o(), d(A, { key: 2 }, [
        O(g(i.item.label), 1)
      ], 64))
    ]),
    _: 1
  }, 8, ["class", "color", "rounded", "role", "data-menu-index", "aria-checked", "aria-haspopup", "aria-expanded", "aria-controls", "prefix-icon", "suffix-icon", "disabled", "wrap"]);
}
const Hn = /* @__PURE__ */ I(An, [["render", Vn]]);
function Pi(e, t) {
  if (typeof window > "u" || typeof document > "u") return "";
  const i = t instanceof Element ? t : document.documentElement;
  return getComputedStyle(i).getPropertyValue(e).trim();
}
function ie(e, t, i) {
  const n = Pi(e, i);
  if (!n) return t;
  const s = Number.parseFloat(n);
  return !Number.isFinite(s) || s < 0 ? t : /\ds$/.test(n) ? Math.round(s * 1e3) : Math.round(s);
}
function xe(e, t, i) {
  return Pi(e, i) || t;
}
const Bt = "ui-keyboard-inset-change";
function jn() {
  if (typeof document > "u") return 0;
  const e = document.documentElement, t = e.style.getPropertyValue("--ui-keyboard-inset") || getComputedStyle(e).getPropertyValue("--ui-keyboard-inset"), i = parseFloat(t);
  return Number.isFinite(i) && i > 0 ? i : 0;
}
function Pt() {
  if (typeof window > "u") return 0;
  let e = window.innerHeight - jn();
  const t = window.visualViewport;
  return t && t.height > 0 && (e = Math.min(e, t.offsetTop + t.height)), Math.max(0, e);
}
function Gn(e) {
  if (typeof window > "u") return () => {
  };
  const t = window.visualViewport;
  return window.addEventListener(Bt, e), t == null || t.addEventListener("resize", e), t == null || t.addEventListener("scroll", e), () => {
    window.removeEventListener(Bt, e), t == null || t.removeEventListener("resize", e), t == null || t.removeEventListener("scroll", e);
  };
}
function Ce(e) {
  if (typeof window > "u" || typeof document > "u") return !1;
  const t = e && e.nodeType === 1 ? e : document.documentElement;
  return t ? window.getComputedStyle(t).direction === "rtl" : !1;
}
function st(e, t) {
  return e !== "ArrowLeft" && e !== "ArrowRight" || !Ce(t) ? e : e === "ArrowLeft" ? "ArrowRight" : "ArrowLeft";
}
function Kn(e, t) {
  if (!t || typeof e != "string") return e;
  const i = /^(top|bottom)-(start|end)$/.exec(e);
  return i ? `${i[1]}-${i[2] === "start" ? "end" : "start"}` : e;
}
const Wn = [
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
], Un = K("ui-popover"), Nt = 10, qn = 256, $t = 120, Yn = 320, Zn = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Qn = {
  name: "Popover",
  mixins: [it],
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
      validator: (e) => Wn.includes(e)
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
     * (HTMLElement, bileşen örneği, CSS seçici ya da sanal referans: `{ x, y }` görünüm noktası /
     * `{ getBoundingClientRect() }`). Tetikleyicisiz kullanımda (`#trigger` boş)
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
    },
    /** Panelin (`role="dialog"`) erişilebilir adı; metin i18n'den gelir. */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:open"],
  data() {
    return {
      panelId: Un(),
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
    /**
     * `#trigger` slot prop'u: tetikleyici düğmeye `v-bind="triggerAttrs"` ile verilir.
     * Kendi ARIA'sını yazan bileşenler (Select, DatePicker) kullanmaz.
     */
    triggerAttrs() {
      return {
        "aria-haspopup": "dialog",
        "aria-expanded": this.open ? "true" : "false",
        "aria-controls": this.open ? this.panelId : void 0
      };
    },
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
      e ? (this.syncMotionDuration(), this.mobileCenteredLeaving = !1, this.mobileCenteredActive = this.mobileCentered && H(), this.backdropVisible = this.mobileCenteredActive, this.acquireLayer(), this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      })) : (this.mobileCenteredActive && (this.mobileCenteredLeaving = !0), this.mobileCenteredActive = !1, this.backdropVisible = !1, this.releaseLayer(), this.teardownGlobalListeners());
    },
    width() {
      this.open && this.schedulePosition();
    },
    /** Açıkken referans değişirse (bağlam menüsü yeni noktada) panel yeniden konumlanır. */
    anchor() {
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
        enter: ie("--ui-popover-enter-duration", 180, e),
        leave: ie("--ui-popover-leave-duration", 120, e)
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
      this.layerZIndex || (this.layerZIndex = Ai(this, "floating", () => this.close()), this.layerStyle = this.withLayerZIndex({ ...this.layerStyle }));
    },
    releaseLayer() {
      this.layerZIndex && (Di(this), this.layerZIndex = 0);
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
      if (!e || typeof document > "u") return null;
      if (typeof e == "string") return document.querySelector(e);
      if (e instanceof HTMLElement) return e;
      if (e.$el instanceof HTMLElement) return e.$el;
      if (typeof e.getBoundingClientRect == "function") return e;
      if (Number.isFinite(e.x) && Number.isFinite(e.y)) {
        const { x: t, y: i } = e;
        return {
          getBoundingClientRect: () => ({ left: t, right: t, top: i, bottom: i, x: t, y: i, width: 0, height: 0 })
        };
      }
      return null;
    },
    resolveTriggerEl() {
      const e = this.resolveAnchorEl();
      if (e) return e;
      const t = this.$refs.triggerRef;
      return t ? this.inheritLayout && t.firstElementChild instanceof HTMLElement ? t.firstElementChild : t : null;
    },
    updatePosition() {
      var M, z;
      const e = this.resolveTriggerEl(), t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, n = Pt(), s = Nt, r = this.resolvedWidth;
      (M = this.$refs.layerRef) == null || M.style.removeProperty("--ui-popover-available-h"), r == null && ((z = this.$refs.layerRef) == null || z.style.removeProperty("width"));
      const a = e.getBoundingClientRect(), u = t.offsetWidth || 0, l = Math.ceil(a.width);
      let c;
      r != null ? c = u || 200 : this.matchTriggerWidth ? c = Math.max(u, l) : c = u || 200;
      const m = t.offsetHeight || 120;
      if (H() && this.mobileCentered) {
        this.mobileCenteredActive = !0, this.backdropVisible = !0;
        const j = i - s * 2, $ = Math.min(Math.max(c, qn), j), W = Math.max(s, Math.round((i - $) / 2)), te = n - s * 2, U = {
          top: `${Math.max(s, Math.round((n - Math.min(m, te)) / 2))}px`,
          left: `${W}px`,
          "--ui-popover-origin": "center center",
          "--ui-popover-available-h": `${Math.max($t, Math.floor(te))}px`
        };
        r != null ? (U.width = r, U.minWidth = r) : (U.width = `${$}px`, this.matchTriggerWidth && (U.minWidth = `${Math.min(l, j)}px`), U.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(U);
        return;
      }
      this.mobileCenteredActive = !1, this.backdropVisible = !1;
      let h, p;
      switch (Kn(this.placement, Ce(e))) {
        case "right-start":
          h = a.top, p = a.right + s;
          break;
        case "right-end":
          h = a.bottom - m, p = a.right + s;
          break;
        case "left-start":
          h = a.top, p = a.left - s - c;
          break;
        case "left-end":
          h = a.bottom - m, p = a.left - s - c;
          break;
        case "top-start":
          h = a.top - s - m, p = a.left;
          break;
        case "top-end":
          h = a.top - s - m, p = a.right - c;
          break;
        case "top":
          h = a.top - s - m, p = a.left + (a.width - c) / 2;
          break;
        case "bottom-end":
          h = a.bottom + s, p = a.right - c;
          break;
        case "bottom":
          h = a.bottom + s, p = a.left + (a.width - c) / 2;
          break;
        case "bottom-start":
        default:
          h = a.bottom + s, p = a.left;
          break;
      }
      this.placement.startsWith("right") && p + c > i - s && (p = a.left - s - c), this.placement.startsWith("left") && p < s && (p = a.right + s), this.placement.startsWith("top") && h < s && (h = a.bottom + s), p + c > i - s && (p = Math.max(s, i - s - c)), p < s && (p = s);
      let v = null;
      if (this.placement.startsWith("bottom") && h + m > n - s) {
        const j = n - s - h, $ = a.top - s * 2;
        $ >= m ? h = a.top - s - m : $ > j ? (h = s, v = $) : v = j;
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (h + m > n - s && (h = Math.max(s, n - s - m)), h < s && (h = s));
      const L = this.matchTriggerWidth && r == null ? `${Math.ceil(a.width)}px` : void 0;
      v == null && (v = n - s - h);
      const C = {
        top: `${Math.round(h)}px`,
        left: `${Math.round(p)}px`,
        minWidth: L,
        "--ui-popover-origin": this.resolveMotionOrigin(a, h, p, c, m),
        "--ui-popover-available-h": `${Math.max($t, Math.floor(v))}px`
      };
      r != null && (C.width = r, C.minWidth = r), this.layerStyle = this.withLayerZIndex(C), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
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
      const r = e.querySelector("[data-popover-align]") || e, a = s.querySelector("[data-popover-align]") || s, u = r.getBoundingClientRect(), l = a.getBoundingClientRect(), c = l.top - u.top, m = Ce(r) ? l.right - u.right : l.left - u.left, h = i.getBoundingClientRect(), p = this.layerStyle.top, S = this.layerStyle.left;
      let v = typeof p == "string" && p !== "" ? parseFloat(p) : h.top, L = typeof S == "string" && S !== "" ? parseFloat(S) : h.left;
      Number.isNaN(v) && (v = h.top), Number.isNaN(L) && (L = h.left);
      let C = v - c, M = L - m;
      const z = Nt, j = Pt(), $ = window.innerWidth, W = h.height, te = h.width;
      C + W > j - z && (C = Math.max(z, j - z - W)), C < z && (C = z), M + te > $ - z && (M = Math.max(z, $ - z - te)), M < z && (M = z), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(C)}px`,
        left: `${Math.round(M)}px`
      });
    },
    bindGlobalListeners() {
      var e;
      (e = this.offVisibleViewport) == null || e.call(this), this.offVisibleViewport = Gn(this.onVisibleViewportChange), window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0), this.observePanelSize();
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
      }, Yn));
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, i = e == null ? void 0 : e.target;
      t && i instanceof Node && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      var s, r;
      if (!this.open || !this.closeOnOutsideClick || Ne(this)) return;
      const t = e.target, i = this.$refs.triggerRef, n = this.$refs.panelRef;
      i != null && i.contains(t) || n != null && n.contains(t) || (r = (s = this.resolveAnchorEl()) == null ? void 0 : s.contains) != null && r.call(s, t) || this.shouldIgnoreOutsideClick(t) || (e.preventDefault(), e.stopPropagation(), this.close());
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
      for (const r of Zn)
        if (e.closest(r)) return !0;
      const n = (s = this.outsideClickIgnoreSelector) == null ? void 0 : s.trim();
      return !!(n && e.closest(n));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || Ne(this) || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key !== "Escape" || e.defaultPrevented || Ne(this) || this.close();
    }
  }
}, Xn = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Jn = ["id", "aria-label"], es = { class: "ui-popover-motion" }, ts = {
  key: 0,
  class: "ui-popover-header"
}, is = { class: "ui-popover-body min-h-0 min-w-0" }, rs = {
  key: 1,
  class: "ui-popover-footer"
};
function ns(e, t, i, n, s, r) {
  return o(), d("div", {
    ref: "rootRef",
    class: x([r.rootShellClass, e.$attrs.class])
  }, [
    b("div", {
      ref: "triggerRef",
      class: x(r.triggerShellClass)
    }, [
      y(e.$slots, "trigger", {
        open: i.open,
        toggle: r.toggle,
        close: r.close,
        triggerAttrs: r.triggerAttrs
      })
    ], 2),
    s.portalReady ? (o(), T(ze, {
      key: 0,
      to: e.portalTarget
    }, [
      k(Ge, {
        name: "ui-overlay-popover-backdrop",
        duration: s.motionDuration,
        onAfterLeave: r.onBackdropAfterLeave
      }, {
        default: _(() => [
          r.showMobileBackdrop ? (o(), d("div", {
            key: "ui-popover-mobile-backdrop",
            class: "ui-popover-backdrop fixed inset-0 bg-black/70",
            style: de(r.backdropStyle),
            "aria-hidden": "true",
            onPointerdown: t[0] || (t[0] = E((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"])),
            onClick: t[1] || (t[1] = E((...a) => r.onBackdropDismiss && r.onBackdropDismiss(...a), ["stop", "prevent"]))
          }, null, 36)) : f("", !0)
        ]),
        _: 1
      }, 8, ["duration", "onAfterLeave"]),
      k(Ge, {
        name: "ui-overlay-popover",
        appear: "",
        duration: s.motionDuration,
        onBeforeEnter: r.onPopoverBeforeEnter,
        onAfterLeave: r.onPopoverAfterLeave
      }, {
        default: _(() => [
          i.open ? (o(), d("div", {
            key: 0,
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: de(s.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": r.popoverMobileCenteredAttr ? "" : void 0,
            "data-ui-popover-layer": "",
            onPointerdown: t[3] || (t[3] = E(() => {
            }, ["stop"]))
          }, [
            b("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              id: s.panelId,
              role: "dialog",
              tabindex: "-1",
              "aria-label": i.ariaLabel || void 0,
              onKeydown: t[2] || (t[2] = (...a) => r.onPanelKeydown && r.onPanelKeydown(...a))
            }, [
              b("div", es, [
                e.$slots.header ? (o(), d("div", ts, [
                  y(e.$slots, "header", { close: r.close })
                ])) : f("", !0),
                b("div", is, [
                  y(e.$slots, "content", { close: r.close })
                ]),
                e.$slots.footer ? (o(), d("div", rs, [
                  y(e.$slots, "footer", { close: r.close })
                ])) : f("", !0)
              ])
            ], 40, Jn)
          ], 44, Xn)) : f("", !0)
        ]),
        _: 3
      }, 8, ["duration", "onBeforeEnter", "onAfterLeave"])
    ], 8, ["to"])) : f("", !0)
  ], 2);
}
const ss = /* @__PURE__ */ I(Qn, [["render", ns]]), as = K("ui-menu"), os = [
  '[role="menuitem"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]'
].map((e) => `${e}:not([disabled]):not([aria-disabled="true"])`).join(","), ls = 150, us = 250, ds = 2, cs = 10;
function fe(e) {
  return Array.isArray(e == null ? void 0 : e.children) && e.children.length > 0;
}
const hs = {
  name: "MenuList",
  components: { Divider: nt, MenuListItem: Hn, Popover: ss },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    /** Sütunlu satırlar: gösterge, ikon ve etiket öğeler arasında hizalanır. */
    aligned: {
      type: Boolean,
      default: !1
    },
    /** İç içe derinlik; 0 = kök menü. */
    level: {
      type: Number,
      default: 0
    },
    /** Üst menüde bu alt menüyü açan öğenin dizini. */
    ownerIndex: {
      type: Number,
      default: -1
    },
    menuId: {
      type: String,
      default: void 0
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaLabelledby: {
      type: String,
      default: ""
    }
  },
  emits: ["select", "close", "close-submenu", "navigate", "toggle-submenu"],
  data() {
    return {
      uid: as(),
      /** Alt menüsü açık öğenin dizini; -1 = kapalı. */
      openSub: -1,
      subPlacement: "right-start"
    };
  },
  computed: {
    hasDescribedItems() {
      return !!this.$slots.before || this.items.some((e) => e && !e.divider && e.description);
    },
    columns() {
      const e = this.items.filter((t) => t && !t.divider && !t.heading);
      return {
        indicator: e.some((t) => t.type === "checkbox" || t.type === "radio"),
        icon: e.some((t) => t.icon)
      };
    },
    /**
     * Öğeler bölümlere ayrılır: `heading` yeni bir `role="group"` başlatır; grup bir sonraki
     * başlık ya da ayırıcıda biter. Başlıksız öğeler sarmalayıcısız çizilir (eski DOM).
     */
    segments() {
      const e = [];
      let t = null;
      return this.items.forEach((i, n) => {
        if (i) {
          if (i.divider) {
            e.push({ key: `d-${n}`, divider: !0 }), t = null;
            return;
          }
          if (i.heading) {
            t = {
              key: `h-${n}`,
              heading: i.heading,
              headingId: `${this.uid}-heading-${n}`,
              entries: []
            }, e.push(t);
            return;
          }
          t || (t = { key: `s-${n}`, entries: [] }, e.push(t)), t.entries.push({ item: i, index: n });
        }
      }), e;
    },
    submenus() {
      const e = [];
      return this.items.forEach((t, i) => {
        fe(t) && e.push({ item: t, index: i });
      }), e;
    }
  },
  watch: {
    openSub(e) {
      this.$emit("toggle-submenu", e >= 0);
    },
    items() {
      this.openSub >= 0 && !fe(this.items[this.openSub]) && (this.openSub = -1);
    }
  },
  created() {
    this.subAnchors = {};
  },
  beforeUnmount() {
    this.clearHoverTimers();
  },
  methods: {
    submenuId(e) {
      return `${this.uid}-sub-${e}`;
    },
    itemEls() {
      const e = this.$el;
      return e != null && e.querySelectorAll ? [...e.querySelectorAll(os)] : [];
    },
    /** Odaklanabilir öğeler arasında sırayla (negatif dizin sondan sayar). */
    focusItem(e) {
      const t = this.itemEls();
      if (!t.length) return;
      const i = (e % t.length + t.length) % t.length;
      t[i].focus();
    },
    /** `items` dizinindeki öğeye odaklan. */
    focusIndex(e) {
      var t, i, n;
      (n = (i = (t = this.$el) == null ? void 0 : t.querySelector) == null ? void 0 : i.call(t, `[data-menu-index="${e}"]`)) == null || n.focus();
    },
    /** Odak bu menüde ya da açık alt menülerinden birinde mi? */
    containsFocus() {
      var t, i;
      const e = document.activeElement;
      return e ? (i = (t = this.$el) == null ? void 0 : t.contains) != null && i.call(t, e) ? !0 : this.subRefs().some((n) => n.containsFocus()) : !1;
    },
    subRefs() {
      const e = this.$refs.subs;
      return e ? Array.isArray(e) ? e : [e] : [];
    },
    isRtl() {
      return getComputedStyle(this.$el).direction === "rtl";
    },
    /**
     * Alt menünün konum referansı: üst panelin kenarları + öğenin satırı. Popover tetikleyiciye
     * sabit pay bıraktığı için dikdörtgen o kadar içeri çekilir; alt menü panele bitişik açılır
     * ve ilk satırı üst öğeyle aynı hizaya gelir.
     */
    subAnchor(e) {
      return this.subAnchors[e] || (this.subAnchors[e] = {
        getBoundingClientRect: () => {
          const t = this.$el.getBoundingClientRect(), i = this.$el.querySelector(`[data-menu-index="${e}"]`), n = i ? i.getBoundingClientRect() : t, s = i ? Math.max(0, n.left - t.left) : 0, r = cs - ds, a = t.left + r, u = t.right - r, l = n.top - s, c = n.bottom + s;
          return { left: a, right: u, top: l, bottom: c, x: a, y: l, width: u - a, height: c - l };
        }
      }), this.subAnchors[e];
    },
    openSubmenu(e, t) {
      this.clearHoverTimers(), this.subPlacement = this.isRtl() ? "left-start" : "right-start", this.openSub = e, t && this.$nextTick(() => requestAnimationFrame(() => {
        const i = this.subRefs().find((n) => n.ownerIndex === e);
        i == null || i.focusItem(0);
      }));
    },
    closeSubmenu(e) {
      this.clearHoverTimers();
      const t = this.openSub;
      if (t < 0) return;
      const i = this.subRefs().some((n) => n.containsFocus());
      this.openSub = -1, (e || i) && this.focusIndex(t);
    },
    onSubOpenChange(e, t) {
      !t && this.openSub === e && this.closeSubmenu(!1);
    },
    clearHoverTimers() {
      this.subOpenTimer && clearTimeout(this.subOpenTimer), this.subCloseTimer && clearTimeout(this.subCloseTimer), this.subOpenTimer = null, this.subCloseTimer = null;
    },
    cancelSubClose() {
      this.subCloseTimer && clearTimeout(this.subCloseTimer), this.subCloseTimer = null;
    },
    onPointerOver(e) {
      var s, r;
      if (e.pointerType === "touch") return;
      const t = (r = (s = e.target) == null ? void 0 : s.closest) == null ? void 0 : r.call(s, "[data-menu-index]");
      if (!t || !this.$el.contains(t)) return;
      const i = Number(t.dataset.menuIndex);
      if (i === this.hoverIndex) return;
      this.hoverIndex = i, this.clearHoverTimers();
      const n = this.items[i];
      fe(n) && !n.disabled ? this.openSub !== i && (this.subOpenTimer = setTimeout(() => this.openSubmenu(i, !1), ls)) : this.openSub >= 0 && (this.subCloseTimer = setTimeout(() => this.closeSubmenu(!1), us));
    },
    onPointerLeave() {
      this.hoverIndex = -1, this.subOpenTimer && clearTimeout(this.subOpenTimer), this.subOpenTimer = null;
    },
    onKeydown(e) {
      var s, r, a, u, l, c;
      const t = this.itemEls(), i = t.indexOf(document.activeElement), n = {
        ArrowDown: () => this.focusItem(i + 1),
        ArrowUp: () => this.focusItem(i < 0 ? -1 : i - 1),
        Home: () => this.focusItem(0),
        End: () => this.focusItem(-1)
      };
      if (n[e.key]) {
        e.preventDefault(), this.closeSubmenu(!1), n[e.key]();
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        if ((r = (s = e.target) == null ? void 0 : s.closest) != null && r.call(s, 'input, textarea, select, [contenteditable="true"]')) return;
        const m = e.key === "ArrowRight" !== this.isRtl(), h = Number(((u = (a = document.activeElement) == null ? void 0 : a.dataset) == null ? void 0 : u.menuIndex) ?? -1), p = h >= 0 ? this.items[h] : null;
        m && fe(p) && !p.disabled ? (e.preventDefault(), e.stopPropagation(), this.openSubmenu(h, !0)) : !m && this.level > 0 ? (e.preventDefault(), e.stopPropagation(), this.$emit("close-submenu")) : this.$emit("navigate", m ? "next" : "prev");
        return;
      }
      if (e.key === "Escape") {
        this.level > 0 ? (e.preventDefault(), e.stopPropagation(), this.$emit("close-submenu")) : this.openSub >= 0 && (e.preventDefault(), e.stopPropagation(), this.closeSubmenu(!0));
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault(), this.$emit("close");
        return;
      }
      if (Ri(e) && !((c = (l = e.target) == null ? void 0 : l.closest) != null && c.call(l, 'input, textarea, select, [contenteditable="true"]'))) {
        this.typeahead || (this.typeahead = Bi());
        const m = t.map((p) => {
          var v, L;
          const S = (v = p.dataset) == null ? void 0 : v.menuIndex;
          return S != null && ((L = this.items[S]) == null ? void 0 : L.label) || p.textContent || "";
        }), h = this.typeahead(e.key, m, i);
        h >= 0 && (e.preventDefault(), this.closeSubmenu(!1), this.focusItem(h));
      }
    },
    /**
     * Seçim: `select` olayı öğeyi taşır. İşaretlenebilir öğelerde ikinci argüman
     * `{ checked, group }` — `checked` tıklama sonrası olması gereken değerdir; liste
     * denetimlidir, öğeyi tüketen taraf günceller.
     */
    onItem(e, t) {
      if (!e.disabled) {
        if (fe(e)) {
          this.openSub === t ? this.closeSubmenu(!0) : this.openSubmenu(t, !0);
          return;
        }
        if (e.type === "checkbox" || e.type === "radio") {
          const i = e.type === "radio" ? !0 : !e.checked;
          this.$emit("select", e, { checked: i, group: e.group }), e.closeOnSelect && this.$emit("close");
          return;
        }
        this.$emit("select", e), !e.keepOpen && !e.keep_open && this.$emit("close");
      }
    }
  }
}, fs = ["id", "aria-label", "aria-labelledby"], ms = ["id"], ps = ["aria-labelledby"];
function bs(e, t, i, n, s, r) {
  const a = w("Divider"), u = w("MenuListItem"), l = w("MenuList", !0), c = w("Popover");
  return o(), d("div", {
    id: i.menuId,
    class: x(["ui-dropdown-menu", [
      r.hasDescribedItems ? "ui-dropdown-menu--described" : "",
      i.aligned ? "ui-dropdown-menu--aligned" : ""
    ]]),
    role: "menu",
    "aria-label": i.ariaLabel || void 0,
    "aria-labelledby": i.ariaLabelledby || void 0,
    onClick: t[4] || (t[4] = E(() => {
    }, ["stop"])),
    onKeydown: t[5] || (t[5] = (...m) => r.onKeydown && r.onKeydown(...m)),
    onPointerover: t[6] || (t[6] = (...m) => r.onPointerOver && r.onPointerOver(...m)),
    onPointerleave: t[7] || (t[7] = (...m) => r.onPointerLeave && r.onPointerLeave(...m))
  }, [
    y(e.$slots, "before"),
    e.$slots.menu ? y(e.$slots, "menu", { key: 0 }) : (o(), d(A, { key: 1 }, [
      (o(!0), d(A, null, B(r.segments, (m) => (o(), d(A, {
        key: m.key
      }, [
        m.divider ? (o(), T(a, {
          key: 0,
          spacing: "sm"
        })) : m.heading ? (o(), d(A, { key: 1 }, [
          b("span", {
            id: m.headingId,
            class: "ui-dropdown-heading",
            role: "presentation"
          }, g(m.heading), 9, ms),
          m.entries.length ? (o(), d("div", {
            key: 0,
            class: "ui-dropdown-group",
            role: "group",
            "aria-labelledby": m.headingId
          }, [
            (o(!0), d(A, null, B(m.entries, (h) => (o(), T(u, {
              key: h.index,
              item: h.item,
              index: h.index,
              aligned: i.aligned,
              columns: r.columns,
              expanded: s.openSub === h.index,
              "submenu-id": r.submenuId(h.index),
              onClick: E((p) => r.onItem(h.item, h.index), ["stop"])
            }, null, 8, ["item", "index", "aligned", "columns", "expanded", "submenu-id", "onClick"]))), 128))
          ], 8, ps)) : f("", !0)
        ], 64)) : (o(!0), d(A, { key: 2 }, B(m.entries, (h) => (o(), T(u, {
          key: h.index,
          item: h.item,
          index: h.index,
          aligned: i.aligned,
          columns: r.columns,
          expanded: s.openSub === h.index,
          "submenu-id": r.submenuId(h.index),
          onClick: E((p) => r.onItem(h.item, h.index), ["stop"])
        }, null, 8, ["item", "index", "aligned", "columns", "expanded", "submenu-id", "onClick"]))), 128))
      ], 64))), 128)),
      (o(!0), d(A, null, B(r.submenus, (m) => (o(), T(c, {
        key: `sub-${m.index}`,
        class: "hidden",
        open: s.openSub === m.index,
        anchor: r.subAnchor(m.index),
        placement: s.subPlacement,
        "mobile-centered": !1,
        "close-on-escape": !1,
        "onUpdate:open": (h) => r.onSubOpenChange(m.index, h)
      }, {
        content: _(() => [
          k(l, {
            ref_for: !0,
            ref: "subs",
            items: m.item.children,
            level: i.level + 1,
            "owner-index": m.index,
            "menu-id": r.submenuId(m.index),
            "aria-label": m.item.label,
            aligned: "",
            onSelect: t[0] || (t[0] = (h, p) => e.$emit("select", h, p)),
            onClose: t[1] || (t[1] = (h) => e.$emit("close")),
            onCloseSubmenu: t[2] || (t[2] = (h) => r.closeSubmenu(!0)),
            onNavigate: t[3] || (t[3] = (h) => e.$emit("navigate", h)),
            onPointerenter: r.cancelSubClose
          }, null, 8, ["items", "level", "owner-index", "menu-id", "aria-label", "onPointerenter"])
        ]),
        _: 2
      }, 1032, ["open", "anchor", "placement", "onUpdate:open"]))), 128))
    ], 64))
  ], 42, fs);
}
const gs = /* @__PURE__ */ I(hs, [["render", bs]]), ys = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]'
].join(",");
function vs(e) {
  return e ? [...e.querySelectorAll(ys)].filter(
    (t) => t.getClientRects().length > 0 && !t.closest('[inert], [aria-hidden="true"]')
  ) : [];
}
function ks(e, t) {
  var a;
  if (e.key !== "Tab" || !t) return !1;
  const i = document.activeElement;
  if (i && !t.contains(i)) return !1;
  const n = vs(t);
  if (n.length === 0)
    return e.preventDefault(), (a = t.focus) == null || a.call(t), !0;
  const s = n[0], r = n[n.length - 1];
  return e.shiftKey && (i === s || i === t) ? (e.preventDefault(), r.focus(), !0) : !e.shiftKey && i === r ? (e.preventDefault(), s.focus(), !0) : !1;
}
function at() {
  const e = typeof document < "u" ? document.activeElement : null;
  return e && e !== document.body ? e : null;
}
function ot(e) {
  !e || !e.isConnected || typeof e.focus != "function" || e.focus({ preventScroll: !0 });
}
const Ss = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], xs = {
  name: "Dropdown",
  components: { MenuList: gs },
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
      validator: (e) => Ss.includes(e)
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
      internalOpen: !1,
      /** Alt menü açıkken Escape yalnız onu kapatır; kök popover tuşu dinlemez. */
      submenuOpen: !1
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
        this.returnFocusEl = at(), this.$nextTick(() => requestAnimationFrame(() => {
          var i;
          return (i = this.$refs.menu) == null ? void 0 : i.focusItem(0);
        }));
      else {
        const i = document.activeElement;
        (!i || i === document.body || ((t = this.$refs.menu) == null ? void 0 : t.containsFocus())) && ot(this.returnFocusEl), this.returnFocusEl = null, this.submenuOpen = !1;
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
    /**
     * Sütunlu satır çizimi yalnız yeni şema kullanılan menüde açılır (alt menü, onay / radyo
     * öğesi, kısayol); eski menülerin görünümü değişmez.
     */
    aligned() {
      return this.items.some((e) => e && (e.type === "checkbox" || e.type === "radio" || e.shortcut || Array.isArray(e.children) && e.children.length > 0));
    }
  },
  methods: {
    onOpenChange(e) {
      this.isOpen = e;
    },
    /**
     * `select` öğeyi taşır; onay / radyo öğelerinde ikinci argüman `{ checked, group }`
     * (tıklama sonrası olması gereken değer — liste denetimlidir).
     */
    onSelect(e, t) {
      t ? this.$emit("select", e, t) : this.$emit("select", e);
    }
  }
};
function ws(e, t, i, n, s, r) {
  const a = w("MenuList"), u = w("ui-popover");
  return o(), T(u, {
    open: r.isOpen,
    placement: i.placement,
    "match-trigger-width": i.matchTriggerWidth,
    block: i.block,
    "inherit-layout": i.inheritLayout,
    "mobile-centered": !1,
    "close-on-outside-click": i.closeOnOutsideClick,
    "close-on-escape": i.closeOnEscape && !s.submenuOpen,
    "outside-click-ignore-selector": i.outsideClickIgnoreSelector,
    "onUpdate:open": r.onOpenChange
  }, {
    trigger: _((l) => [
      y(e.$slots, "trigger", F(l, {
        triggerAttrs: { ...l.triggerAttrs, "aria-haspopup": "menu" }
      }))
    ]),
    content: _(({ close: l }) => [
      k(a, {
        ref: "menu",
        items: i.items,
        aligned: r.aligned,
        onSelect: r.onSelect,
        onClose: (c) => l(),
        onToggleSubmenu: t[0] || (t[0] = (c) => s.submenuOpen = c)
      }, Je({ _: 2 }, [
        e.$slots.before ? {
          name: "before",
          fn: _(() => [
            y(e.$slots, "before", { close: l })
          ]),
          key: "0"
        } : void 0,
        e.$slots.menu ? {
          name: "menu",
          fn: _(() => [
            y(e.$slots, "menu", { close: l })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["items", "aligned", "onSelect", "onClose"])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "inherit-layout", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Sc = /* @__PURE__ */ I(xs, [["render", ws]]);
function q(e, t, i) {
  if (e && typeof e.$t == "function") {
    const n = e.$t(t);
    if (n != null && n !== "" && n !== t)
      return n;
  }
  return i;
}
const _s = ["sm", "md", "lg"], Ts = ["solid", "outline", "ghost", "muted", "link", "nav"], Cs = ["primary", "secondary", "input", "warning", "success", "info", "danger"], Is = ["button", "submit", "reset"], Vt = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ht = {
  sm: "box-border h-[var(--ui-control-h-sm)] min-h-[var(--ui-control-h-sm)] px-[var(--ui-control-px-sm)] py-0 text-xs leading-4",
  md: "box-border h-[var(--ui-control-h-md)] min-h-[var(--ui-control-h-md)] px-[var(--ui-control-px-md)] py-0 text-sm leading-5",
  lg: "box-border h-[var(--ui-control-h-lg)] min-h-[var(--ui-control-h-lg)] px-[var(--ui-control-px-lg)] py-0 text-base leading-6"
}, jt = {
  sm: "box-border h-auto min-h-[var(--ui-control-h-sm)] items-start px-2.5 py-2 text-xs leading-4",
  md: "box-border h-auto min-h-[var(--ui-control-h-md)] items-start px-3 py-2 text-sm leading-5",
  lg: "box-border h-auto min-h-[var(--ui-control-h-lg)] items-start px-4 py-2 text-base leading-6"
}, Gt = {
  sm: "ui-control-cubed-sm aspect-square",
  md: "ui-control-cubed-md aspect-square",
  lg: "ui-control-cubed-lg aspect-square"
}, Kt = {
  sm: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none",
  md: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none",
  lg: "aspect-square h-auto w-auto self-stretch shrink-0 !min-h-0 !min-w-0 px-1 py-0.5 text-[0.6875rem] leading-none"
}, Fs = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Wt = {
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
}, Ls = {
  name: "Button",
  mixins: [P],
  components: { RouterLink: wi },
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
      validator: (e) => Is.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => Ts.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => Cs.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || _s.includes(e)
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
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    themeButtonRounded() {
      return ue(this.uiDefaults, void 0, "buttonRounded");
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : q(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      const e = this.textAlign === "left" ? "text-start" : "text-center", t = this.block;
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
      this.stack && !e && !t ? i = Kt[this.resolvedSize] || Kt.md : this.cubed && !e && !t ? i = Gt[this.resolvedSize] || Gt.md : e ? i = Fs[this.resolvedSize] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : this.wrap ? i = jt[this.resolvedSize] || jt.md : i = Vt[this.resolvedSize] || Vt.md;
      let n = "", s = i;
      !e && !t && (this.wrap ? n = "rounded-xl" : (this.stack || this.rounded || this.cubed || this.themeButtonRounded === "full") && (n = "rounded-full", !this.stack && !this.cubed && (s = Ht[this.resolvedSize] || Ht.md)));
      const r = ((u = Wt[this.variant]) == null ? void 0 : u[this.color]) || ((l = Wt.solid) == null ? void 0 : l.primary), a = this.block;
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
      if (e == null || typeof e != "object" || e.type === dr) return !1;
      if (e.type === cr)
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
}, As = ["href", "data-variant", "data-color", "data-size", "data-loading", "aria-busy", "aria-disabled", "tabindex", "onClick"], Ds = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, zs = {
  key: 0,
  class: "sr-only"
}, Os = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, Es = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ms = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Rs = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Bs = {
  key: 0,
  class: "ui-button-prefix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ps = {
  key: 2,
  class: "ui-button-suffix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ns = ["type", "disabled", "data-variant", "data-color", "data-size", "data-loading", "aria-busy"], $s = {
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none",
  "aria-hidden": "true"
}, Vs = {
  key: 0,
  class: "sr-only"
}, Hs = {
  key: 1,
  class: "ui-button-loading-inner inline-flex size-full min-h-0 min-w-0 flex-1 items-center justify-center gap-2 [&_.ui-icon]:leading-none"
}, js = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Gs = {
  key: 2,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ks = {
  key: 3,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ws = {
  key: 0,
  class: "ui-button-prefix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Us = {
  key: 2,
  class: "ui-button-suffix inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function qs(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("RouterLink");
  return r.hasRouterTo ? (o(), T(u, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: _(({ href: l, navigate: c }) => [
      b("a", {
        href: l,
        class: x(r.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "data-size": r.resolvedSize,
        "data-loading": i.loading ? "true" : void 0,
        "aria-busy": i.loading ? "true" : void 0,
        "aria-disabled": r.isDisabled ? "true" : void 0,
        tabindex: r.isDisabled ? -1 : void 0,
        onClick: (m) => r.onRouterLinkClick(m, c)
      }, [
        i.loading && r.usesCubedCenterLayout ? (o(), d(A, { key: 0 }, [
          b("span", Ds, [
            k(a, {
              size: r.cubedIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          r.resolvedLoadingText ? (o(), d("span", zs, g(r.resolvedLoadingText), 1)) : f("", !0)
        ], 64)) : i.loading ? (o(), d("span", Os, [
          k(a, {
            size: r.inlineIconSize,
            name: "spinner",
            class: "fa-spin",
            "aria-hidden": "true"
          }, null, 8, ["size"]),
          b("span", {
            class: x(r.textContentClass)
          }, g(r.resolvedLoadingText), 3)
        ])) : i.stack ? (o(), d(A, { key: 2 }, [
          i.prefixIcon ? (o(), d("span", Es, [
            k(a, {
              size: r.stackIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          r.hasSlotContent() ? (o(), d("span", {
            key: 1,
            class: x(r.textContentClass)
          }, [
            y(e.$slots, "default")
          ], 2)) : f("", !0),
          i.suffixIcon ? (o(), d("span", Ms, [
            k(a, {
              size: r.stackIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64)) : r.usesCubedCenterLayout ? (o(), d("span", Rs, [
          i.prefixIcon ? (o(), T(a, {
            key: 0,
            size: r.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), T(a, {
            key: 1,
            size: r.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : y(e.$slots, "default", { key: 2 })
        ])) : (o(), d(A, { key: 4 }, [
          i.prefixIcon ? (o(), d("span", Bs, [
            k(a, {
              size: r.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          r.hasSlotContent() ? (o(), d("span", {
            key: 1,
            class: x(r.textContentClass)
          }, [
            y(e.$slots, "default")
          ], 2)) : f("", !0),
          i.suffixIcon ? (o(), d("span", Ps, [
            k(a, {
              size: r.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, As)
    ]),
    _: 3
  }, 8, ["to"])) : (o(), d("button", {
    key: 1,
    type: i.nativeType,
    disabled: r.isDisabled,
    class: x(r.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    "data-size": r.resolvedSize,
    "data-loading": i.loading ? "true" : void 0,
    "aria-busy": i.loading ? "true" : void 0,
    onClick: t[0] || (t[0] = (...l) => r.onClick && r.onClick(...l))
  }, [
    i.loading && r.usesCubedCenterLayout ? (o(), d(A, { key: 0 }, [
      b("span", $s, [
        k(a, {
          size: r.cubedIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      r.resolvedLoadingText ? (o(), d("span", Vs, g(r.resolvedLoadingText), 1)) : f("", !0)
    ], 64)) : i.loading ? (o(), d("span", Hs, [
      k(a, {
        size: r.inlineIconSize,
        name: "spinner",
        class: "fa-spin",
        "aria-hidden": "true"
      }, null, 8, ["size"]),
      b("span", {
        class: x(r.textContentClass)
      }, g(r.resolvedLoadingText), 3)
    ])) : i.stack ? (o(), d(A, { key: 2 }, [
      i.prefixIcon ? (o(), d("span", js, [
        k(a, {
          size: r.stackIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      r.hasSlotContent() ? (o(), d("span", {
        key: 1,
        class: x(r.textContentClass)
      }, [
        y(e.$slots, "default")
      ], 2)) : f("", !0),
      i.suffixIcon ? (o(), d("span", Gs, [
        k(a, {
          size: r.stackIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64)) : r.usesCubedCenterLayout ? (o(), d("span", Ks, [
      i.prefixIcon ? (o(), T(a, {
        key: 0,
        size: r.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (o(), T(a, {
        key: 1,
        size: r.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : y(e.$slots, "default", { key: 2 })
    ])) : (o(), d(A, { key: 4 }, [
      i.prefixIcon ? (o(), d("span", Ws, [
        k(a, {
          size: r.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      r.hasSlotContent() ? (o(), d("span", {
        key: 1,
        class: x(r.textContentClass)
      }, [
        y(e.$slots, "default")
      ], 2)) : f("", !0),
      i.suffixIcon ? (o(), d("span", Us, [
        k(a, {
          size: r.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, Ns));
}
const xc = /* @__PURE__ */ I(Ls, [["render", qs]]), Ys = ["solid", "dashed", "dotted", "double"], Ut = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Zs = ["solid", "regular", "brands", "light", "duotone", "thin"], Qs = {
  name: "Card",
  mixins: [P],
  components: { Divider: nt },
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
      validator: (e) => Ys.includes(e)
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
      validator: (e) => e == null || Zs.includes(e)
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
      return Oe(this.uiDefaults, this.iconType);
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
      return Ut[this.borderType] || Ut.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.stickyHeader && e.push("ui-card--sticky-header"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), this.interactive && e.push("ui-card--interactive"), this.emphasized && e.push("ui-card--emphasized"), this.fullHeight && e.push("ui-card--full-height"), D(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Xs = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Js = {
  key: 0,
  class: "ui-header-lead"
}, ea = {
  key: 1,
  class: "ui-header-lead__icon"
}, ta = { class: "ui-header-lead__text" }, ia = {
  key: 0,
  class: "ui-heading-3"
}, ra = {
  key: 1,
  class: "ui-text-default"
}, na = {
  key: 0,
  class: "ui-header-lead__actions"
};
function sa(e, t, i, n, s, r) {
  const a = w("ui-icon-tile"), u = w("ui-icon"), l = w("Divider");
  return o(), d("div", F({ class: r.rootClasses }, r.passthroughAttrs), [
    e.$slots.toolbar ? (o(), d("div", Xs, [
      y(e.$slots, "toolbar")
    ])) : f("", !0),
    r.hasHeaderBlock ? (o(), d("div", {
      key: 1,
      class: x(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      y(e.$slots, "header", {}, () => [
        r.hasDefaultHeader ? (o(), d("div", Js, [
          b("div", {
            class: x(["ui-header-lead__main", { "ui-header-lead__main--tile": r.hasIconTile }])
          }, [
            i.icon && r.hasIconTile ? (o(), T(a, {
              key: 0,
              icon: i.icon,
              "icon-type": r.resolvedIconType,
              color: i.iconColor,
              hex: i.iconHex,
              variant: r.resolvedIconVariant,
              size: "md"
            }, null, 8, ["icon", "icon-type", "color", "hex", "variant"])) : i.icon ? (o(), d("span", ea, [
              k(u, {
                name: i.icon,
                type: r.resolvedIconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            b("div", ta, [
              i.title ? (o(), d("h3", ia, g(i.title), 1)) : f("", !0),
              i.description ? (o(), d("p", ra, g(i.description), 1)) : f("", !0)
            ])
          ], 2),
          e.$slots.append || e.$slots.actions ? (o(), d("div", na, [
            y(e.$slots, "append"),
            y(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    r.showHeaderDivider ? (o(), T(l, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (o(), d("div", {
      key: 3,
      class: x(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      y(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (o(), d("div", {
      key: 4,
      class: x(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      y(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const wc = /* @__PURE__ */ I(Qs, [["render", sa]]), aa = J, oa = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, la = {
  name: "Empty",
  mixins: [P],
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
    iconType: se,
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || aa.includes(e)
    }
  },
  computed: {
    ...ke(),
    resolvedSize() {
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    iconSize() {
      return oa[this.resolvedSize] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return D("ui-empty", `ui-empty--${this.resolvedSize}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ua = {
  key: 0,
  class: "ui-empty-icon"
}, da = {
  key: 1,
  class: "ui-empty-title"
}, ca = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, ha = {
  key: 3,
  class: "ui-empty-actions"
};
function fa(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return o(), d("div", F({ class: r.rootClass }, r.passthroughAttrs), [
    r.resolvedIcon ? (o(), d("div", ua, [
      k(a, {
        name: r.resolvedIcon,
        type: e.resolvedIconType,
        size: r.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (o(), d("h2", da, g(i.title), 1)) : f("", !0),
    i.description ? (o(), d("p", ca, g(i.description), 1)) : f("", !0),
    e.$slots.default ? (o(), d("div", ha, [
      y(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const _c = /* @__PURE__ */ I(la, [["render", fa]]), ma = ["line", "circle", "block", "pill"], pa = J, ba = 320, qt = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Yt = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, ga = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => ma.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => pa.includes(e)
    }
  },
  setup(e) {
    const t = hr(), i = oe(() => !!t.default), n = G(null), s = G(null), r = G(null), a = G(null), u = G(!1), l = G(!1), c = G(!1), m = G(!1), h = G(!1);
    let p = null;
    const S = oe(
      () => e.loading || c.value
    ), v = oe(
      () => e.loading || c.value
    );
    fr(() => {
      h.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), mr(() => {
      L(), C();
    });
    function L() {
      p != null && (clearTimeout(p), p = null);
    }
    pr(
      () => e.loading,
      async (W, te) => {
        var yt, vt, kt, St, xt, wt;
        if (L(), W) {
          const _t = Math.max(
            ((yt = n.value) == null ? void 0 : yt.offsetHeight) ?? 0,
            ((vt = r.value) == null ? void 0 : vt.scrollHeight) ?? 0,
            ((kt = s.value) == null ? void 0 : kt.offsetHeight) ?? 0
          );
          c.value = !1, m.value = !1, u.value = !1, l.value = _t > 48, a.value = l.value ? _t : null;
          return;
        }
        if (te !== !0) return;
        if (h.value) {
          c.value = !1, l.value = !1, a.value = null, u.value = !1;
          return;
        }
        const Se = a.value ?? ((St = n.value) == null ? void 0 : St.offsetHeight) ?? ((xt = s.value) == null ? void 0 : xt.offsetHeight) ?? 0;
        c.value = !0, m.value = !1, l.value = !1, u.value = !0, a.value = Se, await Tt();
        const U = ((wt = r.value) == null ? void 0 : wt.scrollHeight) ?? 0, gt = U > 0 ? U : Se;
        if (Se <= 0 && gt <= 0) {
          C();
          return;
        }
        await Tt(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = gt, m.value = !0;
          });
        }), p = setTimeout(C, ba + 40);
      }
    );
    function C() {
      L(), c.value = !1, m.value = !1, l.value = !1, a.value = null, u.value = !1;
    }
    function M(W) {
      W.target === n.value && W.propertyName === "height" && (e.loading || u.value && C());
    }
    const z = oe(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), j = oe(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value && !l.value,
      "ui-skeleton-placeholder--overlay": c.value || e.loading && l.value,
      "ui-skeleton-placeholder--fade-out": c.value,
      "ui-skeleton-placeholder--fill": e.loading && l.value && !c.value
    })), $ = oe(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value && !l.value,
      "ui-skeleton-content-wrap--loading-hold": e.loading && l.value && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && m.value,
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
      showPlaceholder: S,
      isBusy: v,
      placeholderClass: j,
      contentWrapClass: $,
      onHostTransitionEnd: M
    };
  },
  computed: {
    variantClass() {
      return qt[this.variant] || qt.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Yt[this.size] || Yt.md;
    },
    skeletonClass() {
      return D(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return D(
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
}, ya = ["aria-busy"], va = ["aria-hidden"];
function ka(e, t, i, n, s, r) {
  return n.hasDefaultSlot ? (o(), d("div", F({
    key: 1,
    ref: "hostRef",
    class: r.hostClass
  }, n.hostStyle ? { style: n.hostStyle, ...r.passthroughAttrs } : r.passthroughAttrs, {
    "aria-busy": n.isBusy ? "true" : void 0,
    onTransitionend: t[0] || (t[0] = (...a) => n.onHostTransitionEnd && n.onHostTransitionEnd(...a))
  }), [
    Ke(b("div", {
      ref: "placeholderRef",
      class: x(["ui-skeleton-placeholder", n.placeholderClass]),
      "aria-hidden": "true"
    }, [
      y(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = b("div", { class: "ui-skeleton-default-rows" }, [
          b("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          b("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          b("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [br, n.showPlaceholder]
    ]),
    b("div", {
      ref: "contentWrapRef",
      class: x(["ui-skeleton-content-wrap", n.contentWrapClass])
    }, [
      b("div", {
        class: "ui-skeleton-content",
        "aria-hidden": n.showPlaceholder && !n.isRevealing ? "true" : void 0
      }, [
        y(e.$slots, "default")
      ], 8, va)
    ], 2)
  ], 16, ya)) : (o(), d("div", F({
    key: 0,
    class: r.skeletonClass,
    "aria-hidden": "true"
  }, r.passthroughAttrs), null, 16));
}
const Tc = /* @__PURE__ */ I(ga, [["render", ka]]), Ie = Symbol.for("fewui.form-dirty"), Sa = "data-form-untracked", ae = {
  inject: {
    uiFormDirty: { from: Ie, default: null }
  },
  methods: {
    /** Değer kullanıcı etkileşimiyle değiştiğinde çağrılır; programatik prop değişiminde çağrılmaz. */
    notifyFormDirty() {
      var t;
      if (typeof this.uiFormDirty != "function") return;
      const e = (t = this.$attrs) == null ? void 0 : t[Sa];
      e !== void 0 && e !== !1 || this.uiFormDirty();
    }
  }
};
let qe = null;
function Cc(e) {
  qe = typeof e == "function" ? e : null;
}
function lt(e) {
  if (qe)
    try {
      qe(e);
    } catch {
    }
}
const xa = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"])'
].join(","), wa = [
  "button.ui-select-field:not([disabled])",
  "input.ui-pin-cell:not([disabled])"
].join(",");
function _a(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function Zt(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const n of e.querySelectorAll(t))
    if (_a(n) && !(i && n.closest(".ui-card-footer")))
      return n;
  return null;
}
function Ta(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const n of t)
    i.includes(n) || i.push(n);
  return i;
}
function Qt(e, { skipFooter: t = !1 } = {}) {
  const i = Zt(e, xa, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const n = Zt(e, wa, { skipFooter: t });
  return n ? (n.focus(), !0) : !1;
}
function Ca(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && Qt(t))
    return !0;
  for (const i of Ta(e))
    if (Qt(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const Ni = "ui-scroll-lock";
let me = 0, Ye = null;
function Ia(e) {
  return (getComputedStyle(e).scrollbarGutter || "").includes("stable");
}
function Fa() {
  if (!(typeof document > "u")) {
    if (me === 0) {
      const e = document.body, t = document.documentElement, i = Math.max(0, window.innerWidth - t.clientWidth);
      Ye = {
        htmlOverflow: t.style.overflow,
        bodyOverflow: e.style.overflow,
        htmlOverscroll: t.style.overscrollBehavior,
        bodyOverscroll: e.style.overscrollBehavior,
        htmlPaddingRight: t.style.paddingRight
      }, t.classList.add(Ni), t.style.overflow = "hidden", e.style.overflow = "hidden", t.style.overscrollBehavior = "none", e.style.overscrollBehavior = "none", !Ia(t) && i > 0 && (t.style.paddingRight = `${i}px`);
    }
    me += 1;
  }
}
function Xt() {
  if (typeof document > "u" || me <= 0 || (me -= 1, me > 0)) return;
  const e = document.body, t = document.documentElement, i = Ye || {
    htmlOverflow: "",
    bodyOverflow: "",
    htmlOverscroll: "",
    bodyOverscroll: "",
    htmlPaddingRight: ""
  };
  t.classList.remove(Ni), t.style.overflow = i.htmlOverflow, e.style.overflow = i.bodyOverflow, t.style.overscrollBehavior = i.htmlOverscroll, e.style.overscrollBehavior = i.bodyOverscroll, t.style.paddingRight = i.htmlPaddingRight, Ye = null;
}
const La = "[data-ui-popover-layer], .ui-toast-host, .ui-guidance-tour, [data-ui-focus-allow]", Aa = ".ui-dialog-root, .ui-sheet-root";
function Da(e, t) {
  return !t || !e || typeof e.closest != "function" || t.contains(e) || e.closest(La) ? !1 : e.closest(Aa) ? !0 : e.closest('[aria-modal="true"]') ? !1 : !!e.closest("[data-v-app]");
}
const R = ve({
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
let Ze = 0;
function Jt(e) {
  Ze = Math.max(0, Ze + e);
}
function za() {
  return Ze > 0;
}
function Oa(e = {}) {
  return e.color === "danger" && lt("warning"), new Promise((t) => {
    R.title = e.title ?? "", R.description = e.description ?? "", R.confirmLabel = e.confirmLabel ?? "", R.cancelLabel = e.cancelLabel ?? "", R.color = e.color || "primary", R._resolve = t, R.open = !0;
  });
}
function ei(e) {
  const t = R._resolve;
  R.open = !1, R._resolve = null, t && t(!!e);
}
const Ea = K("ui-dialog"), Ma = ["solid", "dashed", "dotted", "double"], ti = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Ra = ["solid", "regular", "brands", "light", "duotone", "thin"], Ba = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"], Pa = ["", "text", "email", "number", "tel", "url", "password", "search"], ii = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl",
  full: "ui-dialog-panel--max-full"
}, ri = 72, Na = {
  name: "Dialog",
  mixins: [it, P],
  components: { Divider: nt },
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
      validator: (e) => e == null || Ba.includes(e)
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
      validator: (e) => Ma.includes(e)
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
      validator: (e) => e == null || Ra.includes(e)
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
    /**
     * Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer).
     * `false`: alan seçilmez, odak yalnız panele taşınır (klavye / Escape dialoga gider).
     */
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
    },
    /**
     * Kaydedilmemiş değişiklik koruması: form kirliyken Escape / arka plan / X / sheet sürükleme
     * kapatmadan önce onay ister. Verilmezse tema varsayılanı `dialogGuardUnsaved` (false).
     * Programatik kapanış (`open=false`) hiçbir zaman sormaz.
     */
    guardUnsaved: {
      type: Boolean,
      default: void 0
    },
    /**
     * Kirli durumu elle belirler; verilmezse içerideki fewui form kontrollerinin
     * kullanıcı değişiklikleri izlenir.
     */
    dirty: {
      type: Boolean,
      default: void 0
    },
    /**
     * Tek satırlı metin alanında Enter (ve her yerde Cmd/Ctrl+Enter) footer'daki birincil
     * eylemi tetikler: `data-ui-dialog-primary` işaretli ilk etkin düğme, yoksa son etkin
     * solid primary `ui-button`. Verilmezse tema varsayılanı `dialogSubmitOnEnter` (false).
     */
    submitOnEnter: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["update:open", "after-leave", "back"],
  provide() {
    return { [Ie]: () => this.markDirty() };
  },
  data() {
    const e = Ea();
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
      rootZIndex: null,
      /** Kullanıcı içerideki bir form kontrolünü değiştirdi. */
      detectedDirty: !1,
      /** Kaydedilmemiş değişiklik onayı ekranda. */
      unsavedPromptOpen: !1
    };
  },
  watch: {
    open: {
      immediate: !0,
      handler(e) {
        if (this.detectedDirty = !1, e) {
          if (this.layerMounted || this.layerClosing) return;
          this.returnFocusEl = at(), this.rootZIndex = this.resolveRootZIndex(), this.layerMounted = !0, Fa(), this.bindFocusGuard(), this.$nextTick(() => {
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
    this.clearFocusFallback(), this.clearSheetDragListeners(), this.unbindFooterClearanceObserver(), this.unbindFocusGuard(), this.layerMounted && Xt(), this.releaseLayer(), this.layerMounted = !1, this.layerClosing = !1, this.layerMotionActive = !1;
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
      return ti[this.borderType] || ti.solid;
    },
    resolvedIconType() {
      return Oe(this.uiDefaults, this.iconType);
    },
    resolvedMaxWidth() {
      return ue(this.uiDefaults, this.maxWidth, "dialogMaxWidth");
    },
    maxWidthClass() {
      return ii[this.resolvedMaxWidth] || ii.lg;
    },
    panelClasses() {
      const e = this.border ? D("border", this.borderStyleClass) : D("border-0", "border-transparent");
      return D(
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
      return rt(this.$attrs, ["class"]);
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : q(this, "ui.dialog.close", "Close");
    },
    resolvedBackLabel() {
      return this.backLabel != null && this.backLabel !== "" ? this.backLabel : q(this, "ui.dialog.back", "Back");
    },
    resolvedGuardUnsaved() {
      return ue(this.uiDefaults, this.guardUnsaved, "dialogGuardUnsaved") === !0;
    },
    resolvedSubmitOnEnter() {
      return ue(this.uiDefaults, this.submitOnEnter, "dialogSubmitOnEnter") === !0;
    },
    isDirty() {
      return this.dirty !== void 0 ? this.dirty : this.detectedDirty;
    },
    rootLayerClasses() {
      return D(
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
    bindFocusGuard() {
      this.focusGuardBound || typeof document > "u" || (this.focusGuardBound = !0, document.addEventListener("focusin", this.onDocumentFocusIn));
    },
    unbindFocusGuard() {
      this.focusGuardBound && (this.focusGuardBound = !1, document.removeEventListener("focusin", this.onDocumentFocusIn));
    },
    /** Odak arkadaki sayfaya kaçarsa panele geri çağırır (bkz. `utils/focus-guard.js`). */
    onDocumentFocusIn(e) {
      var t, i;
      this.layerClosing || !tn(this) || Da(e.target, this.$refs.layerRef) && ((i = (t = this.$refs.panelRef) == null ? void 0 : t.focus) == null || i.call(t, { preventScroll: !0 }));
    },
    releaseLayer() {
      this.rootZIndex != null && (Di(this), this.rootZIndex = null);
    },
    resolveRootZIndex() {
      const e = this.stackLayer === "confirm" ? Ue.confirm : 0;
      return Ai(this, "modal", () => {
      }, e);
    },
    prefersReducedMotion() {
      return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    mobileSheetEasing() {
      return xe("--ui-dialog-sheet-easing", "cubic-bezier(0.32, 0.72, 0, 1)");
    },
    /**
     * Süre / eğri tema token’larından (`--ui-dialog-*`, mobil `--ui-dialog-sheet-*`);
     * yoksa aşağıdaki varsayılanlar.
     */
    layerMotionTimings() {
      if (H()) {
        const t = this.mobileSheetEasing();
        return {
          enterMs: ie("--ui-dialog-sheet-enter-duration", 260),
          leaveMs: ie("--ui-dialog-sheet-leave-duration", 200),
          snapMs: ie("--ui-dialog-sheet-snap-duration", 220),
          easing: t,
          leaveEasing: xe("--ui-dialog-sheet-leave-easing", t)
        };
      }
      return {
        enterMs: ie("--ui-dialog-enter-duration", 220),
        leaveMs: ie("--ui-dialog-leave-duration", 150),
        snapMs: 180,
        easing: xe("--ui-dialog-easing", "cubic-bezier(0.16, 1, 0.3, 1)"),
        leaveEasing: xe("--ui-dialog-leave-easing", "cubic-bezier(0.4, 0, 0.2, 1)")
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
      return H() ? !1 : this.surfaceBackdropBlurPx() > 0;
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
      const n = H(), { panel: s, motion: r, backdrop: a } = this.layerMotionParts(e);
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
      const t = this.layerMotionParts(e), { panel: i, motion: n, backdrop: s } = t, r = H(), a = this.preferGlassSafeOverlayMotion(), { enterMs: u, easing: l } = this.layerMotionTimings(), c = `${u / 1e3}s`, h = `${Math.round(u * 0.72) / 1e3}s`;
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
      var v;
      const i = () => {
        this.finishLayerMotion(e), t();
      };
      if (!e || this.prefersReducedMotion() || document.visibilityState === "hidden") {
        i();
        return;
      }
      const n = H(), s = this.preferGlassSafeOverlayMotion(), r = this.layerMotionParts(e);
      this.freezeSheetGeometry(r.panel);
      const a = n && !!((v = r.panel) != null && v.style.transform && r.panel.style.transform !== "none");
      this.clearLayerInlineMotion(e, {
        preserveMobilePanelTransform: n,
        preserveBackdrop: a
      });
      const { panel: u, motion: l, backdrop: c } = r, { leaveMs: m, leaveEasing: h } = this.layerMotionTimings(), p = `${m / 1e3}s`, S = `${Math.round(m * 0.85) / 1e3}s`;
      this.layerMotionActive = !0, l && (l.style.removeProperty("transform"), l.style.removeProperty("transition")), e.offsetHeight, this.runOnNextFrames(() => {
        c && (c.style.transition = `opacity ${S} ${h}`, c.style.opacity = "0"), n && u ? (u.style.transition = `transform ${p} ${h}`, u.style.transform = "translate3d(0, 100%, 0)") : u && (u.style.transition = `opacity ${p} ${h}, transform ${p} ${h}`, u.style.opacity = "0", u.style.transform = this.desktopLeaveTransform(s)), this.waitLayerTransition(u || c, m + 80, i);
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
        this.layerMounted = !1, this.layerClosing = !1, this.unbindFocusGuard(), this.releaseLayer(), Xt(), this.resetPanelMotionStyles(), this.open && this.$emit("update:open", !1), this.$emit("after-leave"), ot(this.returnFocusEl), this.returnFocusEl = null;
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
      this.open && (this.clearFocusFallback(), this.$nextTick(() => {
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
      this.open && this.$nextTick(() => {
        this.focusInitialField();
      });
    },
    focusInitialField() {
      var t, i;
      const e = this.$refs.panelRef;
      if (!this.initialFocus) {
        e && !e.contains(document.activeElement) && ((t = e.focus) == null || t.call(e, { preventScroll: !0 }));
        return;
      }
      H() || e && Ca(e) || (i = e == null ? void 0 : e.focus) == null || i.call(e);
    },
    /** Koşulsuz kapatır (programatik). Kullanıcı kaynaklı kapanış `requestClose` kullanır. */
    close() {
      this.dismissLayer();
    },
    markDirty() {
      this.layerMounted && !this.layerClosing && (this.detectedDirty = !0);
    },
    /** Kirli işaretini sıfırlar (ör. kaydetmeden sonra dialog açık kalıyorsa). */
    markPristine() {
      this.detectedDirty = !1;
    },
    /** Kapanış onay gerektiriyor mu: koruma açık, form kirli ve onay katmanı kurulu. */
    shouldGuardClose() {
      return this.resolvedGuardUnsaved && this.isDirty && za();
    },
    /** Kullanıcı kaynaklı kapanış (Escape, arka plan, X, sheet sürükleme). */
    async requestClose() {
      if (!this.shouldGuardClose()) {
        this.close();
        return;
      }
      if (this.unsavedPromptOpen) return;
      this.unsavedPromptOpen = !0;
      let e = !1;
      try {
        e = await Oa({
          title: q(this, "ui.dialog.unsavedTitle", "Unsaved changes"),
          description: q(
            this,
            "ui.dialog.unsavedDescription",
            "If you close now, what you entered will be lost."
          ),
          confirmLabel: q(this, "ui.dialog.unsavedConfirm", "Discard changes"),
          color: "danger"
        });
      } finally {
        this.unsavedPromptOpen = !1;
      }
      e && this.layerMounted && this.close();
    },
    /** Footer'daki birincil eylem düğmesi (bkz. `submitOnEnter`). */
    findPrimaryAction() {
      const e = this.$refs.footerRef;
      if (!e) return null;
      const t = (s) => !s.disabled && s.getAttribute("aria-disabled") !== "true" && s.getAttribute("data-loading") !== "true", i = [...e.querySelectorAll("[data-ui-dialog-primary]")].filter(t);
      if (i.length) return i[0];
      const n = [...e.querySelectorAll('.ui-button[data-variant="solid"][data-color="primary"]')].filter(t);
      return n.length ? n[n.length - 1] : null;
    },
    isSubmitKeyTarget(e) {
      return !(!(e instanceof Element) || e.tagName !== "INPUT" || !Pa.includes((e.getAttribute("type") || "").toLowerCase()) || e.form || e.readOnly && e.getAttribute("role") !== "combobox" || e.closest('[aria-expanded="true"]') || e.closest('[role="listbox"], [role="menu"], [role="grid"], .ui-popover-panel'));
    },
    /** @returns {boolean} tuş tüketildi */
    handleSubmitKey(e) {
      if (!this.resolvedSubmitOnEnter || e.key !== "Enter" || e.defaultPrevented || e.isComposing || e.keyCode === 229 || e.repeat || e.altKey || e.shiftKey) return !1;
      const t = this.$refs.panelRef;
      if (!t || !(e.target instanceof Node) || !t.contains(e.target) || !(e.metaKey || e.ctrlKey) && !this.isSubmitKeyTarget(e.target)) return !1;
      const n = this.findPrimaryAction();
      return n ? (e.preventDefault(), n.click(), !0) : !1;
    },
    onBack() {
      this.$emit("back");
    },
    onBackdrop() {
      this.closeOnBackdrop && this.requestClose();
    },
    onLayerKeydown(e) {
      if (this.closeOnEscape && e.key === "Escape") {
        if (e.defaultPrevented) return;
        e.preventDefault(), this.requestClose();
        return;
      }
      this.handleSubmitKey(e) || ks(e, this.$refs.panelRef);
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
      if (!H() || e.button !== 0 || this.isSheetDragBlockedTarget(e.target)) return;
      const t = this.$refs.layerRef, i = this.$refs.panelRef;
      if (!t || !i) return;
      e.preventDefault(), this.teardownSheetDrag();
      const n = t.querySelector(".ui-dialog-backdrop"), s = e.clientY, r = i.style.transition, a = (n == null ? void 0 : n.style.transition) || "";
      i.style.transition = "none", n && (n.style.transition = "none");
      let u = !1;
      const l = (p) => {
        const S = Math.max(0, p.clientY - s);
        S >= ri !== u && (u = !u, lt("impact-light")), i.style.transform = `translate3d(0, ${S}px, 0)`, n && (n.style.opacity = String(this.sheetBackdropOpacityForDrag(i, S)));
      }, c = (p, S) => {
        let v = S;
        if (this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null), v && this.shouldGuardClose() && (v = !1, this.requestClose()), v) {
          i.style.removeProperty("transition"), n && n.style.removeProperty("transition"), this.close();
          return;
        }
        const L = `${this.layerMotionTimings().snapMs / 1e3}s`, C = this.mobileSheetEasing();
        i.style.transition = `transform ${L} ${C}`, i.style.transform = "translate3d(0, 0, 0)", n && (n.style.transition = `opacity ${L} ${C}`, n.style.opacity = "1");
        const M = (z) => {
          z.target !== i && z.target !== n || (i.removeEventListener("transitionend", M), n == null || n.removeEventListener("transitionend", M), i.style.transition = r, i.style.removeProperty("transform"), n && (n.style.transition = a, n.style.removeProperty("opacity")));
        };
        i.addEventListener("transitionend", M), n == null || n.addEventListener("transitionend", M);
      }, m = (p) => {
        const S = Math.max(0, p.clientY - s);
        c(S, S >= ri);
      }, h = () => {
        c(0, !1);
      };
      window.addEventListener("pointermove", l), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", h), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", h);
      };
    }
  }
}, $a = ["aria-labelledby", "aria-describedby", "aria-label"], Va = { class: "ui-dialog-motion" }, Ha = { class: "ui-dialog-header__lead" }, ja = ["id"], Ga = {
  key: 1,
  class: "ui-dialog-header__icon"
}, Ka = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Wa = ["id"], Ua = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
};
function qa(e, t, i, n, s, r) {
  const a = w("ui-button"), u = w("ui-icon"), l = w("Divider");
  return s.portalReady ? (o(), T(ze, {
    key: 0,
    to: e.portalTarget
  }, [
    s.layerMounted ? (o(), d("div", {
      key: 0,
      ref: "layerRef",
      class: x(r.rootLayerClasses),
      style: de(r.rootLayerStyle),
      tabindex: "-1",
      role: "presentation",
      onKeydown: t[4] || (t[4] = (...c) => r.onLayerKeydown && r.onLayerKeydown(...c))
    }, [
      b("div", {
        class: "ui-dialog-backdrop absolute inset-0 bg-black/70",
        "aria-hidden": "true",
        onClick: t[0] || (t[0] = (...c) => r.onBackdrop && r.onBackdrop(...c))
      }),
      b("div", F({
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
        onClick: t[3] || (t[3] = E(() => {
        }, ["stop"]))
      }), [
        b("div", Va, [
          b("div", {
            class: "ui-dialog-sheet-grab shrink-0",
            onPointerdown: t[1] || (t[1] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
          }, [...t[5] || (t[5] = [
            b("div", {
              class: "ui-dialog-sheet-handle",
              "aria-hidden": "true"
            }, null, -1)
          ])], 32),
          r.hasHeaderBlock ? (o(), d("div", {
            key: 0,
            class: "ui-card-header ui-dialog-sheet-drag shrink-0",
            onPointerdown: t[2] || (t[2] = (...c) => r.onSheetPointerDown && r.onSheetPointerDown(...c))
          }, [
            y(e.$slots, "header", {}, () => [
              r.hasDefaultHeader ? (o(), d("div", {
                key: 0,
                class: x(["ui-dialog-header", {
                  "ui-dialog-header--no-icon": !i.icon,
                  "ui-dialog-header--with-back": i.withBack,
                  "ui-dialog-header--with-close": i.showClose
                }])
              }, [
                i.showClose ? (o(), T(a, {
                  key: 0,
                  type: "button",
                  variant: "solid",
                  color: "secondary",
                  size: "sm",
                  cubed: "",
                  "prefix-icon": "xmark",
                  class: "ui-dialog-header__close",
                  "aria-label": r.resolvedCloseLabel,
                  onClick: r.requestClose
                }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                i.withBack ? (o(), T(a, {
                  key: 1,
                  type: "button",
                  variant: "ghost",
                  color: "secondary",
                  size: "md",
                  "prefix-icon": "arrow-left",
                  class: "ui-dialog-header__back ui-icon--dir",
                  onClick: r.onBack
                }, {
                  default: _(() => [
                    O(g(r.resolvedBackLabel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : f("", !0),
                b("div", Ha, [
                  r.hasTitle ? (o(), d("h3", {
                    key: 0,
                    id: s.titleId,
                    class: "ui-dialog-header__title ui-heading-2"
                  }, [
                    y(e.$slots, "title", {}, () => [
                      O(g(i.title), 1)
                    ])
                  ], 8, ja)) : f("", !0),
                  i.icon ? (o(), d("span", Ga, [
                    k(u, {
                      name: i.icon,
                      type: r.resolvedIconType,
                      size: "md"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0)
                ]),
                e.$slots.append || e.$slots.actions ? (o(), d("div", Ka, [
                  y(e.$slots, "append"),
                  y(e.$slots, "actions")
                ])) : f("", !0),
                r.hasDescription ? (o(), d("p", {
                  key: 3,
                  id: s.descriptionId,
                  class: "ui-dialog-header__description ui-text-default"
                }, [
                  y(e.$slots, "description", {}, () => [
                    O(g(i.description), 1)
                  ])
                ], 8, Wa)) : f("", !0)
              ], 2)) : f("", !0)
            ])
          ], 32)) : f("", !0),
          e.$slots.toolbar ? (o(), d("div", Ua, [
            y(e.$slots, "toolbar")
          ])) : f("", !0),
          r.showHeaderDivider ? (o(), T(l, {
            key: 2,
            spacing: "none",
            class: "!my-0 shrink-0"
          })) : f("", !0),
          e.$slots.default ? (o(), d("div", {
            key: 3,
            class: x(["ui-card-body ui-text-default", {
              "ui-card-body--row": i.row,
              "ui-card-body--flush": i.bodyPadding === "none",
              "ui-card-body--flex": i.bodyLayout === "flex"
            }])
          }, [
            y(e.$slots, "default")
          ], 2)) : f("", !0),
          e.$slots.footer ? (o(), d("div", {
            key: 4,
            ref: "footerRef",
            class: x(["ui-card-footer", { "ui-dialog-footer--transparent": i.footerTransparent }])
          }, [
            y(e.$slots, "footer")
          ], 2)) : f("", !0)
        ])
      ], 16, $a)
    ], 38)) : f("", !0)
  ], 8, ["to"])) : f("", !0);
}
const Ic = /* @__PURE__ */ I(Na, [["render", qa]]), Ya = {
  name: "ConfirmDialog",
  mounted() {
    Jt(1);
  },
  beforeUnmount() {
    Jt(-1);
  },
  computed: {
    confirmState() {
      return R;
    },
    syncOpen: {
      get() {
        return R.open;
      },
      set(e) {
        e ? R.open = !0 : R._resolve ? ei(!1) : R.open = !1;
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
      ei(!0);
    }
  }
}, Za = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
function Qa(e, t, i, n, s, r) {
  const a = w("ui-button"), u = w("ui-dialog");
  return o(), T(u, {
    open: r.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (l) => r.syncOpen = l),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: r.confirmState.title,
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "guard-unsaved": !1,
    "aria-label": r.confirmState.title || r.fallbackAriaLabel
  }, {
    footer: _(() => [
      k(a, {
        color: r.confirmState.color,
        block: "",
        size: "lg",
        onClick: r.onConfirm
      }, {
        default: _(() => [
          O(g(r.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    default: _(() => [
      r.confirmState.description ? (o(), d("p", Za, g(r.confirmState.description), 1)) : f("", !0)
    ]),
    _: 1
  }, 8, ["open", "title", "aria-label"]);
}
const Fc = /* @__PURE__ */ I(Ya, [["render", Qa]]), Xa = /* @__PURE__ */ new Set(["US", "CA", "MX", "BR", "JP", "KR", "IL", "IN", "PH", "TW", "HK", "ZA", "AU"]), Ja = /* @__PURE__ */ new Set(["AE", "AF", "BH", "DZ", "EG", "IQ", "IR", "JO", "KW", "LY", "OM", "QA", "SA", "SD", "SY"]);
function eo(e) {
  var t;
  try {
    const i = new Intl.Locale(String(e || "en-GB").replace(/_/g, "-")), n = typeof i.getWeekInfo == "function" ? i.getWeekInfo() : i.weekInfo;
    if (n && Number.isFinite(n.firstDay)) return n.firstDay % 7;
    const s = (t = i.maximize) == null ? void 0 : t.call(i).region;
    if (Xa.has(s)) return 0;
    if (Ja.has(s)) return 6;
  } catch {
  }
  return 1;
}
function to(e, t) {
  const i = Number(e);
  return e != null && e !== "" && Number.isInteger(i) && i >= 0 && i <= 6 ? i : eo(t);
}
const Fe = "en-GB";
function $i(e) {
  const t = typeof e == "object" && e != null && "value" in e ? e.value : e, i = typeof t == "string" ? t.trim().replace(/_/g, "-") : "";
  if (!i) return Fe;
  const n = i.toLowerCase();
  if (n === "tr" || n.startsWith("tr-")) return "tr-TR";
  if (n === "en" || n === "en-gb" || n === "en-us") return "en-GB";
  try {
    if (Intl.DateTimeFormat.supportedLocalesOf(i).length > 0) return i;
  } catch {
  }
  return Fe;
}
function Vi(e, t = Fe, i) {
  if (!(e instanceof Date) || Number.isNaN(e.getTime())) return "";
  const n = $i(t);
  return i === "d MMM yyyy" ? e.toLocaleDateString(n, { day: "numeric", month: "short", year: "numeric" }) : e.toLocaleDateString(n, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function Lc(e, t = Fe, i) {
  if (e == null || e === "") return "";
  const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!n) return "";
  const s = Number(n[1]), r = Number(n[2]) - 1, a = Number(n[3]), u = new Date(s, r, a);
  return u.getFullYear() !== s || u.getMonth() !== r || u.getDate() !== a ? "" : Vi(u, t, i);
}
const io = K("ui-datepicker");
function ni(e) {
  return String(e).padStart(2, "0");
}
function Y(e) {
  return `${e.getFullYear()}-${ni(e.getMonth() + 1)}-${ni(e.getDate())}`;
}
function Ve(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), n = Number(t[2]) - 1, s = Number(t[3]), r = new Date(i, n, s);
  return r.getFullYear() !== i || r.getMonth() !== n || r.getDate() !== s ? null : r;
}
const ro = {
  name: "DatePicker",
  mixins: [P, ae],
  inheritAttrs: !1,
  props: {
    /**
     * Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür:
     * `tr` / `en-GB` pazartesi, `en-US` pazar.
     */
    weekStart: {
      type: Number,
      default: void 0,
      validator: (e) => e == null || Number.isInteger(e) && e >= 0 && e <= 6
    },
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
    const e = Ve(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: io(),
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
      return Ve(this.modelValue);
    },
    locale() {
      var e;
      return $i((e = this.$i18n) == null ? void 0 : e.locale);
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder;
      const e = ue(this.uiDefaults, void 0, "dateFormat");
      return Vi(this.selectedDate, this.locale, e);
    },
    resolvedPrevMonthLabel() {
      return q(this, "ui.datePicker.prevMonth", "Previous month");
    },
    resolvedNextMonthLabel() {
      return q(this, "ui.datePicker.nextMonth", "Next month");
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
    /** Hafta günü başlıkları dile göre; ızgara dilin hafta başından (`resolvedWeekStart`) başlar. */
    resolvedWeekStart() {
      return to(this.weekStart, this.locale);
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
    /** Izgarada tek Tab durağı: gezilen gün → seçili → bugün → ayın ilk günü. */
    rovingKey() {
      var i, n, s, r;
      const e = this.calendarCells.filter((a) => a.inMonth && !a.disabled), t = this.focusDate ? Y(this.focusDate) : null;
      return ((i = e.find((a) => t && Y(a.date) === t)) == null ? void 0 : i.key) || ((n = e.find((a) => a.sel)) == null ? void 0 : n.key) || ((s = e.find((a) => a.today)) == null ? void 0 : s.key) || ((r = e[0]) == null ? void 0 : r.key);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), n = new Date(e, t, 1 - (i.getDay() - this.resolvedWeekStart + 7) % 7), s = Y(this.referenceTodayDate), r = [];
      for (let a = 0; a < 42; a += 1) {
        const u = new Date(n.getFullYear(), n.getMonth(), n.getDate() + a), l = u.getMonth() === t && u.getFullYear() === e, c = u.getDate(), m = Y(u), h = `${u.getFullYear()}-${u.getMonth()}-${u.getDate()}`, p = !!(this.selectedDate && m === Y(this.selectedDate)), S = s === m, v = !!(this.minYmd && m < this.minYmd);
        r.push({
          key: h,
          d: c,
          out: !l,
          date: u,
          sel: p,
          today: S,
          inMonth: l,
          disabled: v
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
        (!i || i === document.body || (t = this.$refs.popoverGrid) != null && t.contains(i)) && ot(this.returnFocusEl), this.returnFocusEl = null;
        return;
      }
      this.returnFocusEl = at(), this.$nextTick(() => requestAnimationFrame(() => this.focusRovingCell(this.$refs.popoverGrid)));
    },
    modelValue() {
      const e = Ve(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = Y(e);
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
      const t = e.currentTarget, i = this.calendarCells.find((u) => u.key === this.rovingKey);
      if (!i) return;
      const n = new Date(i.date), s = getComputedStyle(e.currentTarget).direction === "rtl" ? -1 : 1, r = (n.getDay() - this.resolvedWeekStart + 7) % 7, a = {
        // Sağdan sola yazımda ← ileri, → geri gider (görsel sıra).
        ArrowRight: () => n.setDate(n.getDate() + s),
        ArrowLeft: () => n.setDate(n.getDate() - s),
        ArrowDown: () => n.setDate(n.getDate() + 7),
        ArrowUp: () => n.setDate(n.getDate() - 7),
        Home: () => n.setDate(n.getDate() - r),
        End: () => n.setDate(n.getDate() + (6 - r)),
        PageDown: () => n.setMonth(n.getMonth() + 1),
        PageUp: () => n.setMonth(n.getMonth() - 1)
      };
      a[e.key] && (e.preventDefault(), a[e.key](), this.focusDate = n, this.viewYear = n.getFullYear(), this.viewMonth = n.getMonth(), this.$nextTick(() => this.focusRovingCell(t)));
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = Y(e.date);
      this.notifyFormDirty(), this.$emit("update:modelValue", i), this.$emit("change", i), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    pickQuick(e, t) {
      const i = new Date(this.referenceTodayDate);
      if (e === "yesterday" ? i.setDate(i.getDate() - 1) : e === "tomorrow" && i.setDate(i.getDate() + 1), this.isQuickDateDisabled(i)) return;
      const n = Y(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.notifyFormDirty(), this.$emit("update:modelValue", n), this.$emit("change", n), typeof t == "function" ? t() : this.menuOpen = !1;
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, no = {
  key: 0,
  class: "ui-datepicker-panel w-full min-w-[17rem]"
}, so = { class: "mb-3 flex items-center justify-between gap-2" }, ao = {
  class: "text-sm font-medium tabular-nums text-foreground",
  "aria-live": "polite"
}, oo = { class: "ui-datepicker-weekdays mb-2" }, lo = ["title"], uo = ["aria-label"], co = {
  key: 0,
  class: "ui-datepicker-quick"
}, ho = { class: "ui-datepicker-panel w-full min-w-[17rem] p-3" }, fo = { class: "mb-3 flex items-center justify-between gap-2" }, mo = {
  class: "text-sm font-medium tabular-nums text-foreground",
  "aria-live": "polite"
}, po = { class: "ui-datepicker-weekdays mb-2" }, bo = ["title"], go = ["aria-label"], yo = {
  key: 0,
  class: "ui-datepicker-quick"
};
function vo(e, t, i, n, s, r) {
  const a = w("ui-button"), u = w("ui-popover");
  return o(), d("div", {
    class: x([
      "ui-datepicker",
      i.embedded ? "ui-datepicker--embedded" : "",
      !i.embedded && i.block ? "ui-datepicker--block w-full" : "",
      !i.embedded && !i.block ? "w-auto shrink-0" : "",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    i.embedded ? (o(), d("div", no, [
      b("div", so, [
        k(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-left",
          class: "ui-icon--dir",
          "aria-label": r.resolvedPrevMonthLabel,
          onClick: t[0] || (t[0] = E((l) => r.shiftMonth(-1), ["stop"]))
        }, null, 8, ["aria-label"]),
        b("span", ao, g(r.monthTitle), 1),
        k(a, {
          variant: "ghost",
          color: "primary",
          cubed: "",
          "prefix-icon": "chevron-right",
          class: "ui-icon--dir",
          "aria-label": r.resolvedNextMonthLabel,
          onClick: t[1] || (t[1] = E((l) => r.shiftMonth(1), ["stop"]))
        }, null, 8, ["aria-label"])
      ]),
      b("div", oo, [
        (o(!0), d(A, null, B(r.weekdayLabels, (l) => (o(), d("span", {
          key: l.key,
          title: l.long
        }, g(l.short), 9, lo))), 128))
      ]),
      b("div", {
        class: "ui-datepicker-grid",
        role: "group",
        "aria-label": r.monthTitle,
        onKeydown: t[2] || (t[2] = (...l) => r.onGridKeydown && r.onGridKeydown(...l))
      }, [
        (o(!0), d(A, null, B(r.calendarCells, (l) => (o(), T(a, {
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
          default: _(() => [
            O(g(l.d), 1)
          ]),
          _: 2
        }, 1032, ["variant", "color", "disabled", "data-key", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
      ], 40, uo),
      i.showQuick ? (o(), d("div", co, [
        k(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.yesterdayQuickDisabled,
          onClick: t[3] || (t[3] = (l) => r.pickQuick("yesterday"))
        }, {
          default: _(() => [
            O(g(r.resolvedYesterdayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        k(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.todayQuickDisabled,
          onClick: t[4] || (t[4] = (l) => r.pickQuick("today"))
        }, {
          default: _(() => [
            O(g(r.resolvedTodayLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        k(a, {
          type: "button",
          variant: "ghost",
          color: "secondary",
          size: "sm",
          block: "",
          disabled: r.tomorrowQuickDisabled,
          onClick: t[5] || (t[5] = (l) => r.pickQuick("tomorrow"))
        }, {
          default: _(() => [
            O(g(r.resolvedTomorrowLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : f("", !0)
    ])) : (o(), T(u, {
      key: 1,
      open: s.menuOpen,
      "onUpdate:open": t[9] || (t[9] = (l) => s.menuOpen = l),
      placement: "bottom-start",
      "match-trigger-width": !e.$slots.trigger,
      disabled: i.disabled
    }, {
      trigger: _(({ open: l, toggle: c, close: m }) => [
        y(e.$slots, "trigger", {
          open: l,
          toggle: c,
          close: m
        }, () => [
          k(a, {
            type: "button",
            id: r.resolvedId,
            variant: "solid",
            color: "input",
            block: i.block,
            "text-align": "left",
            "prefix-icon": "calendar",
            disabled: i.disabled,
            "aria-expanded": l ? "true" : "false",
            "aria-haspopup": "dialog",
            onClick: c
          }, {
            default: _(() => [
              b("span", {
                class: x([
                  "min-w-0 flex-1 truncate",
                  r.selectedDate ? "text-foreground" : "text-muted-foreground"
                ])
              }, g(r.displayText), 3)
            ]),
            _: 1
          }, 8, ["id", "block", "disabled", "aria-expanded", "onClick"])
        ])
      ]),
      content: _(({ close: l }) => [
        b("div", ho, [
          b("div", fo, [
            k(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              class: "ui-icon--dir",
              "aria-label": r.resolvedPrevMonthLabel,
              onClick: t[6] || (t[6] = E((c) => r.shiftMonth(-1), ["stop"]))
            }, null, 8, ["aria-label"]),
            b("span", mo, g(r.monthTitle), 1),
            k(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              class: "ui-icon--dir",
              "aria-label": r.resolvedNextMonthLabel,
              onClick: t[7] || (t[7] = E((c) => r.shiftMonth(1), ["stop"]))
            }, null, 8, ["aria-label"])
          ]),
          b("div", po, [
            (o(!0), d(A, null, B(r.weekdayLabels, (c) => (o(), d("span", {
              key: c.key,
              title: c.long
            }, g(c.short), 9, bo))), 128))
          ]),
          b("div", {
            ref: "popoverGrid",
            class: "ui-datepicker-grid",
            role: "group",
            "aria-label": r.monthTitle,
            onKeydown: t[8] || (t[8] = (...c) => r.onGridKeydown && r.onGridKeydown(...c))
          }, [
            (o(!0), d(A, null, B(r.calendarCells, (c) => (o(), T(a, {
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
              onClick: (m) => r.pick(c, l)
            }, {
              default: _(() => [
                O(g(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "data-key", "tabindex", "aria-label", "aria-pressed", "aria-current", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ], 40, go),
          i.showQuick ? (o(), d("div", yo, [
            k(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.yesterdayQuickDisabled,
              onClick: (c) => r.pickQuick("yesterday", l)
            }, {
              default: _(() => [
                O(g(r.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            k(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.todayQuickDisabled,
              onClick: (c) => r.pickQuick("today", l)
            }, {
              default: _(() => [
                O(g(r.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            k(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              block: "",
              disabled: r.tomorrowQuickDisabled,
              onClick: (c) => r.pickQuick("tomorrow", l)
            }, {
              default: _(() => [
                O(g(r.resolvedTomorrowLabel), 1)
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
const Ac = /* @__PURE__ */ I(ro, [["render", vo]]), Hi = Symbol("ui-form-field"), ut = {
  inject: {
    uiFormField: { from: Hi, default: null }
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
}, ko = Symbol.for("fewui.form-errors");
function Te(e) {
  return Array.isArray(e) ? e.map((t) => t == null ? "" : String(t).trim()).filter(Boolean).join(" ") : e == null ? "" : String(e).trim();
}
function Dc() {
  const e = ve({
    /** `{ [field]: mesaj | mesaj[] }` */
    errors: {},
    /** Ekranda `field` ile bağlı satır sayısı. */
    mounted: {},
    set(t) {
      for (const i of Object.keys(e.errors)) delete e.errors[i];
      if (!(!t || typeof t != "object"))
        for (const [i, n] of Object.entries(t))
          i && Te(n) && (e.errors[i] = n);
    },
    clear() {
      e.set(null);
    },
    clearField(t) {
      t in e.errors && delete e.errors[t];
    },
    registerField(t) {
      t && (e.mounted[t] = (e.mounted[t] || 0) + 1);
    },
    unregisterField(t) {
      !t || !e.mounted[t] || (e.mounted[t] <= 1 ? delete e.mounted[t] : e.mounted[t] -= 1);
    },
    has(t) {
      return !!Te(e.errors[t]);
    },
    get fields() {
      return Object.keys(e.errors);
    },
    get firstField() {
      return Object.keys(e.errors)[0] ?? null;
    },
    /** Görünür bir satıra bağlanamayan mesajlar (başka adımda ya da formda karşılığı yok). */
    get unmapped() {
      const t = [];
      for (const [i, n] of Object.entries(e.errors)) {
        if (e.mounted[i]) continue;
        const s = Te(n);
        s && !t.includes(s) && t.push(s);
      }
      return t;
    },
    get hasErrors() {
      return Object.keys(e.errors).length > 0;
    }
  });
  return e;
}
const So = K("ui-form-control"), xo = ["vertical", "horizontal"], wo = ["default", "card"], _o = {
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
      validator: (e) => xo.includes(e)
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
      validator: (e) => wo.includes(e)
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
    /**
     * Alan adı. Üstteki form hata bağlamında (`UI_FORM_ERRORS_KEY`) bu ada bir mesaj varsa
     * `error` verilmiş gibi gösterilir; kullanıcı satırdaki kontrolü değiştirince mesaj silinir.
     * Birden çok ad boşlukla ayrılır (`"startDate endDate"`).
     */
    field: {
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
    const e = So(), t = e.slice(16);
    return {
      fallbackId: e,
      fallbackDescId: `ui-form-desc-${t}`,
      fallbackErrorId: `ui-form-error-${t}`,
      /** İçerideki kontrolün okuduğu bağlam — id, açıklama/hata bağlantısı, geçersizlik. */
      fieldContext: ve({ id: "", describedBy: void 0, invalid: !1, ownerUid: null })
    };
  },
  inject: {
    uiFormErrors: { from: ko, default: null },
    uiFormDirtyParent: { from: Ie, default: null }
  },
  provide() {
    return {
      [Hi]: this.fieldContext,
      // Kontrol değişince: satırın bağlam hatası silinir, bildirim üst kaba (dialog) iletilir.
      [Ie]: () => this.onControlEdited()
    };
  },
  created() {
    this.registerFields(this.fieldNames);
  },
  beforeUnmount() {
    this.unregisterFields(this.fieldNames);
  },
  watch: {
    fieldNames(e, t) {
      this.unregisterFields(t), this.registerFields(e);
    },
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
    fieldNames() {
      return String(this.field || "").split(/\s+/).filter(Boolean);
    },
    /** Bağlamdaki (sunucudan gelen) alan mesajı. */
    contextError() {
      var t;
      const e = (t = this.uiFormErrors) == null ? void 0 : t.errors;
      if (!e || !this.fieldNames.length) return "";
      for (const i of this.fieldNames) {
        const n = Te(e[i]);
        if (n) return n;
      }
      return "";
    },
    resolvedError() {
      return this.error || this.contextError;
    },
    invalid() {
      return !!this.resolvedError;
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
  },
  methods: {
    registerFields(e) {
      var i;
      const t = (i = this.uiFormErrors) == null ? void 0 : i.registerField;
      typeof t == "function" && e.forEach((n) => t(n));
    },
    unregisterFields(e) {
      var i;
      const t = (i = this.uiFormErrors) == null ? void 0 : i.unregisterField;
      typeof t == "function" && e.forEach((n) => t(n));
    },
    onControlEdited() {
      const e = this.uiFormErrors;
      if (e != null && e.errors)
        for (const t of this.fieldNames)
          typeof e.clearField == "function" ? e.clearField(t) : t in e.errors && delete e.errors[t];
      typeof this.uiFormDirtyParent == "function" && this.uiFormDirtyParent();
    }
  }
}, To = ["data-primary-field"], Co = {
  key: 0,
  class: "ui-form-row-text"
}, Io = ["for"], Fo = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Lo = ["id"], Ao = { class: "ui-form-row-control" }, Do = ["id"], zo = ["id"];
function Oo(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return o(), d("div", F({
    class: ["ui-form-row", r.rootLayoutClass],
    "data-primary-field": i.primary ? "" : void 0
  }, e.$attrs), [
    r.hasTextBlock ? (o(), d("div", Co, [
      i.label || e.$slots.action ? (o(), d("div", {
        key: 0,
        class: x(r.labelLineClass)
      }, [
        i.label ? (o(), d("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: r.controlId
        }, g(i.label), 9, Io)) : f("", !0),
        e.$slots.action ? (o(), d("div", Fo, [
          y(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description && r.descriptionWithLabel ? (o(), d("p", {
        key: 1,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, g(i.description), 9, Lo)) : f("", !0)
    ])) : f("", !0),
    b("div", Ao, [
      y(e.$slots, "default", {
        controlId: r.controlId,
        descriptionId: r.describedBy,
        invalid: r.invalid
      }),
      i.description && !r.descriptionWithLabel ? (o(), d("p", {
        key: 0,
        id: r.descriptionId,
        class: "ui-form-row-description ui-text-default"
      }, g(i.description), 9, Do)) : f("", !0),
      r.invalid ? (o(), d("p", {
        key: 1,
        id: r.errorId,
        class: "ui-form-row-error"
      }, [
        k(a, {
          name: "circle-exclamation",
          size: "xs",
          class: "ui-form-row-error-icon",
          "aria-hidden": "true"
        }),
        b("span", null, g(r.resolvedError), 1)
      ], 8, zo)) : f("", !0)
    ])
  ], 16, To);
}
const zc = /* @__PURE__ */ I(_o, [["render", Oo]]), si = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Eo = _i, Mo = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none",
  xl: "text-2xl leading-none"
}, Ro = {
  name: "Icon",
  mixins: [P],
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: se,
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Eo.includes(e)
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
      return si[this.resolvedIconType] || si.light;
    },
    iconClass() {
      return D(
        "ui-icon fa not-italic inline-flex shrink-0 items-center justify-center leading-none",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Mo[this.size],
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
function Bo(e, t, i, n, s, r) {
  return o(), d("i", F({ class: r.iconClass }, r.rootAttrs), null, 16);
}
const Oc = /* @__PURE__ */ I(Ro, [["render", Bo]]), Po = ["primary", "secondary", "success", "warning", "info", "danger"], No = ["soft", "solid"], $o = ["sm", "md", "lg"], Vo = ["rounded", "circle"], Ho = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, jo = {
  name: "IconTile",
  mixins: [P],
  inheritAttrs: !1,
  props: {
    icon: {
      type: String,
      required: !0
    },
    iconType: se,
    /** `primary | secondary | success | warning | info | danger`; boş → nötr */
    color: {
      type: String,
      default: "",
      validator: (e) => !e || Po.includes(e)
    },
    /** `soft`: tonun açık zemini + ton rengi ikon · `solid`: dolu ton + ön plan rengi */
    variant: {
      type: String,
      default: "soft",
      validator: (e) => No.includes(e)
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
      validator: (e) => $o.includes(e)
    },
    shape: {
      type: String,
      default: "rounded",
      validator: (e) => Vo.includes(e)
    }
  },
  computed: {
    ...ke(),
    normalizedHex() {
      return Oi(this.hex);
    },
    iconSize() {
      return Ho[this.size] || "md";
    },
    rootClass() {
      const e = this.normalizedHex ? "hex" : this.color || "muted";
      return D(
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
          "--ui-icon-tile-fg": Ei(this.normalizedHex)
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
function Go(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return o(), d("span", F({
    class: r.rootClass,
    style: [e.$attrs.style, r.hexStyle],
    "aria-hidden": "true"
  }, r.passthroughAttrs), [
    k(a, {
      name: i.icon,
      type: e.resolvedIconType,
      size: r.iconSize
    }, null, 8, ["name", "type", "size"])
  ], 16);
}
const Ec = /* @__PURE__ */ I(jo, [["render", Go]]), Ko = J, Wo = ["default", "plain"], Uo = {
  name: "Input",
  mixins: [P, ut, ae],
  inheritAttrs: !1,
  props: {
    /** `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Wo.includes(e)
    },
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Ko.includes(e)
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
    return { fallbackId: Xe() };
  },
  computed: {
    /**
     * Form satırındaki tüm kontroller aynı yükseklikte kalır; `ui-form-row primary`
     * yalnızca odak hedefidir, boyutu büyütmez. Büyük alan gerekiyorsa `size="lg"` verilir.
     */
    resolvedSize() {
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    rootClass() {
      return D(
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
      return rt(this.$attrs, [
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
      this.notifyFormDirty(), this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    },
    focus() {
      var e, t;
      (t = (e = this.$refs.field) == null ? void 0 : e.focus) == null || t.call(e);
    }
  }
}, qo = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, Yo = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Zo = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby", "aria-invalid"], Qo = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby", "aria-invalid", "enterkeyhint"], Xo = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Jo = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function el(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return o(), d("div", {
    class: x([r.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (o(), d("div", qo, [
      y(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (o(), d("span", Yo, [
      k(a, {
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
    }), null, 16, Zo)) : (o(), d("input", F({
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
      "aria-invalid": r.resolvedInvalid,
      enterkeyhint: i.type === "search" ? "search" : void 0
    }, r.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...u) => r.onInput && r.onInput(...u)),
      onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
      onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
      onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
    }), null, 16, Qo)),
    i.suffixIcon ? (o(), d("span", Xo, [
      k(a, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (o(), d("div", Jo, [
      y(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const Mc = /* @__PURE__ */ I(Uo, [["render", el]]), tl = ["ul", "ol", "div"], il = ["plain", "bordered", "divided"], rl = ["compact", "normal", "relaxed"], nl = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => tl.includes(e)
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: "plain",
      validator: (e) => il.includes(e)
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: "normal",
      validator: (e) => rl.includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "ui-list--compact" : this.density === "relaxed" ? "ui-list--relaxed" : "";
      if (this.variant === "bordered")
        return D("ui-list", "ui-list--bordered", e, this.$attrs.class);
      if (this.variant === "divided")
        return D("ui-list", "ui-list--divided", e, this.$attrs.class);
      const t = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return D("ui-list", t, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function sl(e, t, i, n, s, r) {
  return o(), T(ne(i.tag), F({
    class: r.listClass,
    role: "list"
  }, r.passthroughAttrs), {
    default: _(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Rc = /* @__PURE__ */ I(nl, [["render", sl]]), al = ["start", "center"], ol = ["li", "div"], ll = J, ul = ["danger"], dl = ["chevron", "external", "none"], cl = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, hl = {
  name: "ListItem",
  mixins: [P],
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`) — serbest içerik düzeni. */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: se,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: "start",
      validator: (e) => al.includes(e)
    },
    /** `div`: `role="list"` taşıyan `div` içinde (ör. kart içi ayar listesi) */
    tag: {
      type: String,
      default: "li",
      validator: (e) => ol.includes(e)
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
    iconType: se,
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
      validator: (e) => !e || ul.includes(e)
    },
    /** sm / md: 14px başlık · lg: 16px başlık */
    size: {
      type: String,
      default: "md",
      validator: (e) => ll.includes(e)
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
      validator: (e) => dl.includes(e)
    }
  },
  emits: ["click"],
  computed: {
    resolvedPrefixIconType() {
      return Oe(this.uiDefaults, this.prefixIconType);
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
      return cl[this.size] || "sm";
    },
    resolvedIconVariant() {
      return this.iconVariant || (this.iconHex ? "solid" : "soft");
    },
    resolvedTrailingIcon() {
      return !this.actionable || this.$slots.trailing ? "" : this.trailingIcon === "external" ? "arrow-up-right-from-square" : this.trailingIcon === "chevron" ? "chevron-right" : "";
    },
    titleClass() {
      return D("ui-list-item-title", this.color === "danger" ? "ui-list-item-title--danger" : "");
    },
    itemClass() {
      return this.usesRowLayout ? D(
        "ui-list-item",
        "ui-list-item--row",
        `ui-list-item--${this.size}`,
        this.actionable ? "ui-list-item--actionable" : "",
        this.disabled ? "ui-list-item--disabled" : ""
      ) : D(
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
}, fl = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, ml = { class: "ui-list-item-text" }, pl = {
  key: 0,
  class: "ui-list-item-description"
}, bl = {
  key: 2,
  class: "ui-list-item-trailing"
}, gl = {
  key: 0,
  class: "ui-list-item-value"
}, yl = {
  key: 3,
  class: "ui-list-item-chevron",
  "aria-hidden": "true"
}, vl = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, kl = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Sl = { class: "ui-list-item-content min-w-0 flex-1" }, xl = {
  key: 2,
  class: "ui-list-item-trailing shrink-0"
};
function wl(e, t, i, n, s, r) {
  const a = w("ui-icon-tile"), u = w("ui-icon");
  return o(), T(ne(i.tag), {
    class: x(r.itemClass),
    role: "listitem",
    onClick: r.onRootClick
  }, {
    default: _(() => [
      r.usesRowLayout ? (o(), T(ne(r.actionable ? "ui-button" : "div"), F({ key: 0 }, r.actionBind, {
        class: r.actionable ? void 0 : "ui-list-item-row",
        onClick: r.onClick
      }), {
        default: _(() => [
          b("span", {
            class: x(r.actionable ? "ui-list-item-row" : "contents")
          }, [
            i.icon ? (o(), T(a, {
              key: 0,
              icon: i.icon,
              "icon-type": i.iconType,
              color: i.iconColor,
              hex: i.iconHex,
              variant: r.resolvedIconVariant,
              size: r.tileSize
            }, null, 8, ["icon", "icon-type", "color", "hex", "variant", "size"])) : e.$slots.prefix ? (o(), d("span", fl, [
              y(e.$slots, "prefix")
            ])) : f("", !0),
            b("span", ml, [
              b("span", {
                class: x(r.titleClass)
              }, [
                y(e.$slots, "title", {}, () => [
                  O(g(i.title), 1)
                ])
              ], 2),
              i.description || e.$slots.description ? (o(), d("span", pl, [
                y(e.$slots, "description", {}, () => [
                  O(g(i.description), 1)
                ])
              ])) : f("", !0),
              y(e.$slots, "default")
            ]),
            i.value || e.$slots.trailing ? (o(), d("span", bl, [
              i.value ? (o(), d("span", gl, g(i.value), 1)) : f("", !0),
              y(e.$slots, "trailing")
            ])) : f("", !0),
            r.resolvedTrailingIcon ? (o(), d("span", yl, [
              k(u, {
                name: r.resolvedTrailingIcon,
                type: "solid",
                size: "sm",
                class: x(i.trailingIcon === "chevron" ? "ui-icon--dir" : void 0)
              }, null, 8, ["name", "class"])
            ])) : f("", !0)
          ], 2)
        ]),
        _: 3
      }, 16, ["class", "onClick"])) : (o(), d(A, { key: 1 }, [
        i.prefixIcon ? (o(), d("span", vl, [
          k(u, {
            name: i.prefixIcon,
            type: r.resolvedPrefixIconType,
            size: "xs",
            class: "ui-list-item-prefix-icon"
          }, null, 8, ["name", "type"])
        ])) : e.$slots.prefix ? (o(), d("span", kl, [
          y(e.$slots, "prefix")
        ])) : f("", !0),
        b("div", Sl, [
          y(e.$slots, "default")
        ]),
        e.$slots.trailing ? (o(), d("div", xl, [
          y(e.$slots, "trailing")
        ])) : f("", !0)
      ], 64))
    ]),
    _: 3
  }, 8, ["class", "onClick"]);
}
const Bc = /* @__PURE__ */ I(hl, [["render", wl]]), _l = K("ui-phone-number"), Tl = J, ai = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Cl = {
  name: "Phone",
  mixins: [P, ut],
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
      default: () => ai
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Tl.includes(e)
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
    return { fallbackId: _l() };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : ai;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    resolvedSize() {
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    rootClass() {
      return D(
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
}, Il = { class: "ui-phone-prepend" }, Fl = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ll(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("ui-select"), l = w("ui-input");
  return o(), d("div", {
    class: x(r.rootClass)
  }, [
    k(l, F({
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
      prepend: _(() => [
        b("div", Il, [
          k(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          r.isSingleCountry ? (o(), d("span", Fl, g(r.innerCountry), 1)) : (o(), T(u, {
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
const Pc = /* @__PURE__ */ I(Cl, [["render", Ll]]), Al = ["numeric", "alphanumeric"], Dl = {
  name: "Pin",
  mixins: [ae],
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
      validator: (e) => Al.includes(e)
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
      this.notifyFormDirty(), this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (i = this.cellEl(this.length - 1)) == null || i.blur());
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
      var n, s;
      if (t.key === "Backspace") {
        t.preventDefault();
        const r = [...this.cells];
        if (r[e]) {
          r[e] = "", this.emitValue(r);
          return;
        }
        e > 0 && (r[e - 1] = "", this.emitValue(r), this.$nextTick(() => {
          var a;
          (a = this.cellEl(e - 1)) == null || a.focus();
        }));
        return;
      }
      const i = st(t.key, this.$el);
      i === "ArrowLeft" && e > 0 && (t.preventDefault(), (n = this.cellEl(e - 1)) == null || n.focus()), i === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (s = this.cellEl(e + 1)) == null || s.focus());
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
}, zl = ["aria-label", "data-mask"], Ol = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function El(e, t, i, n, s, r) {
  return o(), d("div", {
    role: "group",
    "aria-label": r.resolvedAriaLabel,
    "data-mask": i.mask ? "true" : void 0,
    style: de({ "--ui-pin-cols": String(i.length) }),
    class: x([
      "ui-pin",
      r.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (o(!0), d(A, null, B(i.length, (a, u) => (o(), d("span", {
      key: u,
      class: "ui-pin-slot"
    }, [
      b("input", {
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
      }, null, 40, Ol)
    ]))), 128))
  ], 14, zl);
}
const Nc = /* @__PURE__ */ I(Dl, [["render", El]]), Ml = {
  name: "Radio",
  mixins: [ae],
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
      this.uiRadioGroup && (this.notifyFormDirty(), this.uiRadioGroup.$emit("update:modelValue", this.value));
    }
  }
}, Rl = ["name", "value", "checked"], Bl = {
  class: "ui-radio-indicator",
  "aria-hidden": "true"
}, Pl = {
  key: 0,
  class: "ui-radio-dot"
}, Nl = { class: "ui-radio-body" }, $l = { class: "ui-radio-label" }, Vl = {
  key: 0,
  class: "ui-radio-description"
};
function Hl(e, t, i, n, s, r) {
  var a;
  return o(), d("label", {
    class: x([
      "ui-radio",
      `ui-radio--${r.groupVariant}`,
      {
        "ui-radio--checked": r.isChecked,
        "ui-radio--highlight": i.highlight
      }
    ]),
    onClick: t[1] || (t[1] = (...u) => r.select && r.select(...u)),
    onKeydown: [
      t[2] || (t[2] = Ct(E((...u) => r.select && r.select(...u), ["prevent"]), ["enter"])),
      t[3] || (t[3] = Ct(E((...u) => r.select && r.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    b("input", {
      type: "radio",
      name: (a = r.uiRadioGroup) == null ? void 0 : a.groupName,
      value: r.stringValue,
      checked: r.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => r.select && r.select(...u))
    }, null, 40, Rl),
    b("span", Bl, [
      r.isChecked ? (o(), d("span", Pl)) : f("", !0)
    ]),
    b("span", Nl, [
      b("span", $l, g(i.label), 1),
      i.description ? (o(), d("span", Vl, g(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const $c = /* @__PURE__ */ I(Ml, [["render", Hl]]), jl = K("ui-radio-group"), Gl = ["list", "button"], Kl = ["vertical", "horizontal"], Wl = {
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
      validator: (e) => Gl.includes(e)
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (e) => e == null || e === "" || Kl.includes(e)
    },
    /**
     * `button` + yatay: sabit sütun sayısı (dar dialog'da 3 seçenek yan yana).
     * `0` (varsayılan) — `auto-fit` ile genişliğe göre sarılır.
     */
    columns: {
      type: Number,
      default: 0,
      validator: (e) => Number.isInteger(e) && e >= 0 && e <= 6
    },
    /**
     * Yalnız `button`: kartlar kontrol boyuna iner (button / input ile aynı yükseklik ve köşe),
     * etiket tek satır ortalı, seçim dolgu ile gösterilir. Boş (varsayılan) — açıklamalı kart.
     */
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || J.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return { groupName: jl() };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list") === "button" ? "button" : "list";
    },
    effectiveOrientation() {
      return this.normalizedVariant === "button" ? this.orientation === "vertical" ? "vertical" : "horizontal" : this.orientation === "horizontal" ? "horizontal" : "vertical";
    },
    rootClass() {
      return D(
        "ui-radio-group",
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === "list" && this.effectiveOrientation === "horizontal" ? "ui-radio-group--horizontal" : "",
        this.normalizedVariant === "button" && this.effectiveOrientation === "vertical" ? "ui-radio-group--vertical" : "",
        this.normalizedVariant === "button" && this.size ? `ui-radio-group--control ui-radio-group--control-${this.size}` : ""
      );
    }
  },
  methods: {
    rootStyle() {
      if (!(this.normalizedVariant !== "button" || this.effectiveOrientation !== "horizontal") && this.columns)
        return { gridTemplateColumns: `repeat(${this.columns}, minmax(0, 1fr))` };
    }
  },
  provide() {
    return {
      uiRadioGroup: this
    };
  }
}, Ul = ["aria-label"];
function ql(e, t, i, n, s, r) {
  return o(), d("div", {
    class: x(r.rootClass),
    style: de(r.rootStyle()),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    y(e.$slots, "default")
  ], 14, Ul);
}
const Vc = /* @__PURE__ */ I(Wl, [["render", ql]]), Yl = {
  name: "Segment",
  components: { RouterLink: wi },
  mixins: [P, ae],
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
    iconType: se,
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
    ...ke("iconType"),
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
      this.disabled || !this.uiSegmentGroup || this.hasRouterTo || (this.notifyFormDirty(), this.uiSegmentGroup.$emit("update:modelValue", this.value));
    }
  }
}, Zl = {
  key: 0,
  class: "ui-segment-affix ui-segment-affix--prepend"
}, Ql = {
  key: 1,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Xl = {
  key: 2,
  class: "ui-segment-label"
}, Jl = {
  key: 3,
  class: "sr-only"
}, eu = {
  key: 4,
  class: "ui-segment-affix ui-segment-affix--append"
};
function tu(e, t, i, n, s, r) {
  const a = w("ui-icon");
  return o(), T(ne(r.hasRouterTo ? "RouterLink" : "button"), F(r.rootAttrs, {
    class: r.segmentClass,
    onClick: r.select
  }), {
    default: _(() => [
      r.hasPrepend ? (o(), d("span", Zl, [
        y(e.$slots, "prepend")
      ])) : f("", !0),
      i.icon ? (o(), d("span", Ql, [
        k(a, {
          name: i.icon,
          type: r.segmentIconType,
          size: r.iconSize
        }, null, 8, ["name", "type", "size"])
      ])) : f("", !0),
      r.showLabel ? (o(), d("span", Xl, g(i.label), 1)) : i.label ? (o(), d("span", Jl, g(i.label), 1)) : f("", !0),
      r.hasAppend ? (o(), d("span", eu, [
        y(e.$slots, "append")
      ])) : f("", !0)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const Hc = /* @__PURE__ */ I(Yl, [["render", tu]]), oi = /* @__PURE__ */ new Map();
function iu(e, t) {
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
const ji = {
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
      if (this._indicatorPersisted = t && oi.get(t) || null, this.measureIndicator({ animate: !1 }), this._indicatorMutation = new MutationObserver((s) => {
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
      var C, M;
      if (this._indicatorHandoff) return;
      const t = this.indicatorRootEl(), i = (C = t == null ? void 0 : t.querySelector) == null ? void 0 : C.call(t, this.indicatorSelector);
      if (!i || i.offsetWidth === 0 || iu(i, t)) {
        this.indicatorRect = null;
        return;
      }
      (M = this._indicatorResize) == null || M.observe(i);
      const n = t.getBoundingClientRect(), s = i.getBoundingClientRect(), r = t.offsetWidth > 0 ? n.width / t.offsetWidth : 1, a = t.offsetHeight > 0 ? n.height / t.offsetHeight : 1, u = i.offsetWidth, l = i.offsetHeight, c = ((s.left + s.right) / 2 - n.left) / (r || 1) - t.clientLeft + t.scrollLeft, m = ((s.top + s.bottom) / 2 - n.top) / (a || 1) - t.clientTop + t.scrollTop, h = {
        x: Math.round((c - u / 2) * 2) / 2,
        y: Math.round((m - l / 2) * 2) / 2,
        width: u,
        height: l,
        // Göstergenin köşesi seçili öğeninkini alır (segment hap, sidebar satırı farklı köşe).
        radius: getComputedStyle(i).borderTopLeftRadius,
        rootWidth: t.offsetWidth,
        rootHeight: t.offsetHeight
      }, p = this.indicatorRect, S = this.indicatorPersistKey || "";
      if (S && oi.set(S, h), !p && S && this._indicatorPersisted) {
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
      if (p && p.x === h.x && p.y === h.y && p.width === h.width && p.height === h.height)
        return;
      const v = p && p.rootWidth === h.rootWidth && p.rootHeight === h.rootHeight, L = !!p && v && e && (p.x !== h.x || p.y !== h.y);
      this.indicatorInstant = !L, L && (this.indicatorPop = this.indicatorPop === "a" ? "b" : "a"), this.indicatorRect = h, L || requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.indicatorInstant = !1;
        });
      });
    }
  }
}, ru = J, nu = ["horizontal", "vertical"];
function su(e) {
  return typeof e == "boolean" || e === "mobile";
}
const au = {
  name: "SegmentGroup",
  mixins: [P, ji],
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
      validator: (e) => e == null || ru.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => nu.includes(e)
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: !1,
      validator: su
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
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? H() : !!this.iconOnly;
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
      return D(
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
      const t = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[st(e.key, this.$el)], i = e.key === "Home" ? "first" : e.key === "End" ? "last" : null;
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
      const r = i.offsetLeft + i.offsetWidth / 2, a = Ce(t), u = Math.min(a ? 0 : s, Math.max(a ? -s : 0, r - n / 2));
      Math.abs(t.scrollLeft - u) < 1 || (typeof t.scrollTo == "function" ? t.scrollTo({ left: u, behavior: e }) : t.scrollLeft = u);
    }
  }
}, ou = ["role", "aria-label", "data-overflowing"];
function lu(e, t, i, n, s, r) {
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
      b("span", { class: "ui-selection-indicator-fill" }, null, -1)
    ])], 16)) : f("", !0),
    y(e.$slots, "default")
  ], 16, ou);
}
const jc = /* @__PURE__ */ I(au, [["render", lu]]), uu = {
  name: "Tag",
  components: { Badge: wn, Tooltip: zi },
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
}, du = ["aria-label"];
function cu(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("Tooltip"), l = w("Badge");
  return o(), T(l, {
    color: i.color,
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Je({
    default: _(() => [
      y(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: _(() => [
        k(u, {
          label: r.removeLabel,
          placement: "bottom"
        }, {
          default: _(() => [
            b("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": r.removeLabel,
              onClick: t[0] || (t[0] = E((c) => e.$emit("remove"), ["stop"]))
            }, [
              k(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, du)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["color", "variant", "size"]);
}
const hu = /* @__PURE__ */ I(uu, [["render", cu]]), fu = K("ui-select"), mu = ["field", "inline"], pu = J, bu = {
  name: "Select",
  mixins: [P, ut, ae],
  components: { Tag: hu },
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => mu.includes(e)
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => e == null || pu.includes(e)
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
    const e = fu(), t = e.slice(10);
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
      return ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
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
      return D(
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
      return "listbox";
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
      this.notifyFormDirty(), this.$emit("update:modelValue", e.value), this.$emit("change", { type: "change", target: { value: String(e.value) } }), this.menuOpen = !1, t();
    },
    toggleValue(e) {
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((n) => String(n) === String(e.value));
      i >= 0 ? t.splice(i, 1) : t.push(e.value), this.notifyFormDirty(), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((n) => String(n) === String(e));
      i < 0 || (t.splice(i, 1), this.notifyFormDirty(), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
    },
    clearSelection() {
      this.multiple ? (this.notifyFormDirty(), this.$emit("update:modelValue", []), this.$emit("change", { type: "change", target: { value: "" } })) : (this.notifyFormDirty(), this.$emit("update:modelValue", ""), this.$emit("change", { type: "change", target: { value: "" } })), this.menuOpen = !1;
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
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(), this.menuOpen ? this.pickActive(() => {
            }) : t();
            return;
          }
          this.handleTypeahead(e);
          return;
        }
        if (!this.handleListKey(e)) {
          if (this.menuOpen && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault(), this.pickActive(() => {
            });
            return;
          }
          this.isFilterable || this.handleTypeahead(e);
        }
      }
    },
    /** Aramasız listede yazarak arama: açık menüde basılan harflerle başlayan seçeneği vurgular. */
    handleTypeahead(e) {
      if (!this.menuOpen || !Ri(e)) return;
      this.typeahead || (this.typeahead = Bi());
      const t = this.filteredOptions.map((n) => String(n.label ?? "")), i = this.typeahead(e.key, t, this.activeIndex);
      i < 0 || (e.preventDefault(), this.moveActive(i));
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
          if (!this.menuOpen) return;
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
}, gu = ["name", "value"], yu = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, vu = {
  key: 1,
  class: "ui-select-values-inner"
}, ku = ["placeholder", "id", "aria-label", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-describedby", "aria-invalid", "disabled"], Su = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, xu = { class: "ui-select-field-suffix" }, wu = ["aria-label"], _u = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Tu = ["data-size", "placeholder", "aria-label", "aria-activedescendant", "aria-controls", "onKeydown"], Cu = ["id", "data-size", "role", "aria-multiselectable", "aria-labelledby"], Iu = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Fu = { class: "flex w-full min-w-0 items-center justify-between gap-2" }, Lu = {
  key: 1,
  class: "shrink-0 text-muted-foreground"
};
function Au(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("Tag"), l = w("ui-skeleton"), c = w("ui-badge"), m = w("ui-button"), h = w("ui-empty"), p = w("ui-popover");
  return o(), d("div", {
    class: x(r.rootClass)
  }, [
    i.name ? (o(), d("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: r.hiddenFieldValue
    }, null, 8, gu)) : f("", !0),
    k(p, {
      open: s.menuOpen,
      "onUpdate:open": t[7] || (t[7] = (S) => s.menuOpen = S),
      placement: "bottom-start",
      "match-trigger-width": i.matchTriggerWidth && !e.$slots.trigger,
      width: i.width,
      disabled: r.isDisabled,
      "align-selected-option-to-trigger": r.alignSelectedToTrigger
    }, Je({
      trigger: _(({ open: S, toggle: v, close: L }) => [
        y(e.$slots, "trigger", {
          open: S,
          toggle: v,
          close: L,
          label: r.displayLabel,
          hasValue: !r.isPlaceholderDisplay
        }, () => [
          (o(), T(ne(i.multiple ? "div" : "button"), F({
            class: ["ui-select-field", {
              "ui-select-field--values": i.multiple,
              "ui-select-field--bare": i.variant === "inline",
              "ui-select-field--disabled": i.multiple && r.isDisabled
            }]
          }, r.triggerAttrs(S), {
            onClick: (C) => r.onTriggerClick(v),
            onKeydown: (C) => r.onTriggerKeydown(C, v)
          }), {
            default: _(() => [
              i.prefixIcon ? (o(), d("span", yu, [
                k(a, {
                  name: i.prefixIcon,
                  size: "xs"
                }, null, 8, ["name"])
              ])) : f("", !0),
              i.multiple ? (o(), d("div", vu, [
                (o(!0), d(A, null, B(r.selectedValues, (C) => (o(), T(u, {
                  key: String(C),
                  color: "primary",
                  variant: "muted",
                  size: "sm",
                  removable: "",
                  onRemove: (M) => r.removeValue(C)
                }, {
                  default: _(() => [
                    O(g(r.labelForValue(C)), 1)
                  ]),
                  _: 2
                }, 1032, ["onRemove"]))), 128)),
                r.isFilterable ? Ke((o(), d("input", {
                  key: 0,
                  ref: "searchInput",
                  "onUpdate:modelValue": t[0] || (t[0] = (C) => s.filterQuery = C),
                  type: "text",
                  class: x(["ui-select-values-input", {
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
                  onClick: t[1] || (t[1] = E((...C) => r.onSearchInputActivate && r.onSearchInputActivate(...C), ["stop"])),
                  onFocus: t[2] || (t[2] = (...C) => r.onSearchInputActivate && r.onSearchInputActivate(...C)),
                  onKeydown: t[3] || (t[3] = (...C) => r.onSearchKeydown && r.onSearchKeydown(...C))
                }, null, 42, ku)), [
                  [It, s.filterQuery]
                ]) : f("", !0)
              ])) : i.loading ? (o(), d("span", Su, g(r.resolvedLoadingLabel), 1)) : (o(), d("span", F({
                key: 3,
                class: ["ui-select-value", { "ui-select-value--placeholder": r.isPlaceholderDisplay }]
              }, r.selectedDisplayStyle ? { style: r.selectedDisplayStyle } : {}, { "data-popover-align": "" }), g(r.displayLabel), 17)),
              b("span", xu, [
                r.showClearButton ? (o(), d("button", {
                  key: 0,
                  type: "button",
                  class: "ui-select-clear",
                  "aria-label": r.clearAriaLabel,
                  onClick: t[4] || (t[4] = E((...C) => r.clearSelection && r.clearSelection(...C), ["stop"]))
                }, [
                  k(a, {
                    name: "xmark",
                    size: "xs"
                  })
                ], 8, wu)) : f("", !0),
                b("span", _u, [
                  k(a, {
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
      content: _(({ close: S }) => [
        b("div", {
          ref: "listbox",
          id: r.listboxId,
          class: x(["ui-select-listbox", r.listboxClass]),
          "data-size": r.resolvedSize,
          role: r.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": r.resolvedId
        }, [
          i.loading && !r.filteredOptions.length ? (o(), d("div", Iu, [
            (o(), d(A, null, B(3, (v) => k(l, {
              key: v,
              variant: "line",
              class: x(v === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : r.filteredOptions.length ? (o(!0), d(A, { key: 1 }, B(r.filteredOptions, (v, L) => (o(), T(m, {
            id: r.optionId(L),
            key: String(v.value),
            variant: "ghost",
            color: "secondary",
            size: r.optionButtonSize,
            block: "",
            "text-align": "left",
            role: "option",
            class: x(["ui-select-option", {
              "ui-select-option--selected": r.isSelected(v),
              "ui-select-option--active": L === s.activeIndex
            }]),
            "suffix-icon": r.isSelected(v) ? "check" : void 0,
            "aria-selected": r.isSelected(v) ? "true" : "false",
            tabindex: "-1",
            onClick: (C) => r.pick(v, S),
            onMousemove: (C) => s.activeIndex = L
          }, {
            default: _(() => [
              y(e.$slots, "option", {
                option: v,
                selected: r.isSelected(v)
              }, () => [
                b("span", Fu, [
                  b("span", F({
                    "data-popover-align": "",
                    class: "min-w-0 truncate"
                  }, { ref_for: !0 }, r.optionDisplayStyle(v) ? { style: r.optionDisplayStyle(v) } : {}), g(v.label), 17),
                  v.badge ? (o(), T(c, {
                    key: 0,
                    color: v.badgeColor || "secondary",
                    variant: v.badgeVariant || "solid",
                    size: "xs"
                  }, {
                    default: _(() => [
                      O(g(v.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "variant"])) : v.description ? (o(), d("span", Lu, g(v.description), 1)) : f("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["id", "size", "class", "suffix-icon", "aria-selected", "onClick", "onMousemove"]))), 128)) : r.isFilterable && s.filterQuery ? (o(), T(h, {
            key: 2,
            icon: "magnifying-glass",
            size: r.emptyStateSize,
            title: r.noResultsText
          }, null, 8, ["size", "title"])) : (o(), T(h, {
            key: 3,
            icon: "table-cells",
            size: r.emptyStateSize,
            title: r.emptyOptionsText
          }, null, 8, ["size", "title"]))
        ], 10, Cu)
      ]),
      _: 2
    }, [
      r.showPopoverHeader ? {
        name: "header",
        fn: _(({ close: S }) => [
          Ke(b("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[5] || (t[5] = (v) => s.filterQuery = v),
            type: "text",
            class: x(["ui-select-filter-input w-full", r.filterInputClass]),
            "data-size": r.resolvedSize,
            placeholder: r.resolvedFilterPlaceholder,
            "aria-label": r.resolvedFilterPlaceholder,
            "aria-activedescendant": r.activeOptionId,
            "aria-controls": r.listboxId,
            autocomplete: "off",
            onMousedown: t[6] || (t[6] = E(() => {
            }, ["prevent"])),
            onKeydown: (v) => r.onFilterKeydown(v, S)
          }, null, 42, Tu), [
            [It, s.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: _((S) => [
          y(e.$slots, "footer", gr(yr(S)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Gc = /* @__PURE__ */ I(bu, [["render", Au]]), Du = K("ui-switch"), zu = {
  name: "Switch",
  mixins: [ae],
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
    return { fallbackId: Du() };
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
      this.notifyFormDirty(), this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
}, Ou = ["id", "aria-checked", "disabled", "aria-describedby"];
function Eu(e, t, i, n, s, r) {
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
    b("span", {
      class: x(["ui-switch-track", i.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      b("span", {
        class: x(["ui-switch-thumb", i.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Ou);
}
const Kc = /* @__PURE__ */ I(zu, [["render", Eu]]), Mu = {
  name: "TabList",
  mixins: [ji],
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
      return D(
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
      var m, h, p, S;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const n = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], s = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], r = st(e.key, this.$el);
      let a = 0;
      if (n.includes(r)) a = 1;
      else if (s.includes(r)) a = -1;
      else if (r === "Home" || r === "End") {
        e.preventDefault(), (h = (m = i[r === "Home" ? 0 : i.length - 1]) == null ? void 0 : m.focus) == null || h.call(m);
        return;
      } else return;
      e.preventDefault();
      const u = document.activeElement;
      let l = i.indexOf(u);
      l === -1 && (l = i.findIndex((v) => v.getAttribute("aria-selected") === "true")), l === -1 && (l = 0);
      let c = l + a;
      c < 0 && (c = i.length - 1), c >= i.length && (c = 0), (S = (p = i[c]) == null ? void 0 : p.focus) == null || S.call(p);
    }
  }
}, Ru = ["aria-label", "aria-orientation"];
function Bu(e, t, i, n, s, r) {
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
      b("span", { class: "ui-selection-indicator-fill" }, null, -1)
    ])], 16)) : f("", !0),
    y(e.$slots, "default")
  ], 16, Ru);
}
const Wc = /* @__PURE__ */ I(Mu, [["render", Bu]]), He = ["sm", "md", "lg"];
function Pu(e) {
  const t = He.indexOf(e);
  return t < 0 ? "md" : He[Math.min(t + 1, He.length - 1)];
}
function Nu(e, t, { inlineControls: i = !1, nativeChrome: n = !1 } = {}) {
  const s = ee(e, t, { key: "controlSize", defaultSize: "md" });
  return i ? s : n ? "lg" : Pu(s);
}
const $u = ["line", "segmented"];
function Vu(e) {
  return typeof e == "boolean" || e === "mobile";
}
const Hu = {
  name: "Tabs",
  mixins: [P],
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
      validator: (e) => $u.includes(e)
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
      validator: Vu
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
    return { baseId: Xe() };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    resolvedSize() {
      return this.variant === "segmented" ? Nu(this.uiDefaults, this.size, {
        inlineControls: this.inlineControls,
        nativeChrome: this.nativeChrome
      }) : ee(this.uiDefaults, this.size, { key: "controlSize", defaultSize: "md" });
    },
    resolvedIconOnly() {
      return this.iconOnly === "mobile" ? H() : !!this.iconOnly;
    },
    rootClass() {
      return D(
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
function ju(e, t, i, n, s, r) {
  return o(), d("div", F({ class: r.rootClass }, r.passthroughAttrs), [
    y(e.$slots, "default")
  ], 16);
}
const Uc = /* @__PURE__ */ I(Hu, [["render", ju]]), Gu = {
  name: "TabTrigger",
  mixins: [P],
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
    iconType: se,
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
      return D(
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
}, Ku = ["id", "aria-selected", "aria-controls", "aria-haspopup", "aria-expanded", "tabindex", "disabled"], Wu = {
  key: 0,
  class: "ui-tab-trigger-icon",
  "aria-hidden": "true"
}, Uu = {
  key: 1,
  class: "ui-tab-trigger-badge",
  "aria-hidden": "true"
};
function qu(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("ui-badge");
  return o(), d("button", {
    type: "button",
    role: "tab",
    id: r.triggerDomId,
    class: x(r.triggerClass),
    "aria-selected": r.isSelected ? "true" : "false",
    "aria-controls": i.popup ? void 0 : r.panelDomId,
    "aria-haspopup": i.popup || void 0,
    "aria-expanded": i.popup ? i.expanded ? "true" : "false" : void 0,
    tabindex: r.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => r.select && r.select(...l))
  }, [
    i.icon ? (o(), d("span", Wu, [
      k(a, {
        name: i.icon,
        type: r.tabIconType,
        size: r.tabIconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    b("span", {
      class: x([r.labelClass, "ui-tab-trigger-label min-w-0 whitespace-nowrap"])
    }, [
      y(e.$slots, "default", {}, () => [
        O(g(i.label), 1)
      ])
    ], 2),
    r.showBadge ? (o(), d("span", Uu, [
      k(u, {
        variant: "solid",
        size: "sm",
        truncate: !1
      }, {
        default: _(() => [
          O(g(r.badgeLabel), 1)
        ]),
        _: 1
      })
    ])) : f("", !0)
  ], 10, Ku);
}
const qc = /* @__PURE__ */ I(Gu, [["render", qu]]), Yu = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Zu = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900], Qu = 8, Xu = "ui-sans-serif, system-ui, sans-serif", li = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Ju = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
}, ed = {
  compact: "calc(var(--spacing, 0.25rem) * 4)",
  default: "calc(var(--spacing, 0.25rem) * 5)",
  comfortable: "calc(var(--spacing, 0.25rem) * 6)",
  spacious: "calc(var(--spacing, 0.25rem) * 8)"
}, td = ["success", "warning", "info", "danger"], id = {
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
  status: td.flatMap((e) => [e, `${e}Foreground`]),
  chart: [
    ...Zu.map((e) => `chart${e}`),
    "chart",
    "chartForeground",
    ...Array.from({ length: Qu }, (e, t) => `chartSeries${t + 1}`)
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
new Set(Object.values(id).flat());
const rd = {
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
}, Gi = {
  "--ui-hover": "color-mix(in oklab, var(--foreground) 7%, var(--surface))",
  "--primary-soft": "color-mix(in oklab, var(--primary) 26%, var(--surface))",
  "--primary-soft-hover": "color-mix(in oklab, var(--primary) 34%, var(--surface))",
  "--ui-selected-fg": "color-mix(in oklab, var(--primary) 55%, var(--foreground))",
  "--ui-focus-ring": "color-mix(in oklab, var(--primary) 70%, var(--foreground))"
}, Ki = {
  "--ui-selected-fg": "oklch(from var(--primary) min(l, 0.5) c h)",
  "--ui-focus-ring": "oklch(from var(--primary) min(l, 0.55) c h)"
}, Wi = {
  "--ui-selected-fg": "oklch(from var(--primary) max(l, 0.8) c h)",
  "--ui-focus-ring": "oklch(from var(--primary) max(l, 0.72) c h)"
}, nd = "(color: oklch(from red l c h))";
function sd(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([a-zA-Z])(\d)/g, "$1-$2").replace(/_/g, "-").toLowerCase()}`;
}
function Le(e) {
  const t = String(e || "").trim();
  return !t || t.includes(",") || t.startsWith("var(") ? t : `${/\s/.test(t) && !/^["'].*["']$/.test(t) ? `"${t.replace(/"/g, "")}"` : t}, ${Xu}`;
}
function ad(e) {
  if (e == null || e === "") return null;
  if (typeof e == "string" && !/^-?\d*\.?\d+$/.test(e.trim()))
    return e.trim();
  const t = Number(e);
  if (Number.isNaN(t)) return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function od(e) {
  if (e == null || e === "") return null;
  if (typeof e == "number") return `${e}px`;
  const t = String(e).trim();
  return li[t] != null ? li[t] : /^\d+$/.test(t) ? t === "0" ? "0" : `${t}px` : t;
}
function ld(e) {
  return e == null || e === "" ? null : Ju[e] ?? String(e);
}
function ud(e) {
  return e == null || e === "" ? null : ed[e] ?? String(e);
}
function dd(e, t, i) {
  if (!i || typeof i != "object") return;
  const n = ad(i.opacity ?? i.bgOpacity);
  n && (e[`--ui-${t}-opacity`] = n);
  const s = od(i.backdropBlur);
  s && (e[`--ui-${t}-backdrop-blur`] = s);
  const r = ld(i.mixFrom);
  r && (e[`--ui-${t}-mix-from`] = r);
}
function Z(e) {
  const t = {};
  if (!e || typeof e != "object") return t;
  for (const [i, n] of Object.entries(e))
    if (!(n == null || n === "")) {
      if (i === "base" && typeof n == "object") {
        for (const s of Yu) {
          const r = n[s];
          r != null && r !== "" && (t[`--base-${s}`] = String(r));
        }
        continue;
      }
      if (i === "surfaceStyle" || i === "controlStyle" || i === "inputStyle" || i === "popoverStyle") {
        dd(t, i.replace("Style", ""), n);
        continue;
      }
      if (i === "cardPadding") {
        const s = ud(String(n));
        s && (t["--ui-card-space"] = s);
        continue;
      }
      typeof n != "object" && (t[sd(i)] = String(n));
    }
  return t;
}
function Ui(e) {
  const t = {};
  return e && (e.body && (t["--font-sans"] = Le(e.body)), e.heading && (t["--font-heading"] = Le(e.heading))), t;
}
function ui(e = {}, t = {}) {
  const i = { ...e };
  for (const [n, s] of Object.entries(t || {}))
    s && typeof s == "object" && e[n] && typeof e[n] == "object" ? i[n] = { ...e[n], ...s } : i[n] = s;
  return i;
}
function qi(e) {
  const t = {
    ...Ui(e.preset.fonts),
    ...Z(e.preset.tokens.light)
  };
  for (const [i, n] of Object.entries(rd))
    i in t || (t[i] = n);
  return t;
}
function cd(e, t = "light") {
  const i = qi(e);
  return t === "dark" && Object.assign(i, Zi(e, Gi), Z(e.preset.tokens.dark)), typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("color", "oklch(from red l c h)") && Object.assign(i, Qe(e, t === "dark" ? Wi : Ki)), i;
}
function Yi(e) {
  return /* @__PURE__ */ new Set([
    ...Object.keys(Z(e.preset.tokens.light)),
    ...Object.keys(Z(e.preset.tokens.dark || {}))
  ]);
}
function Zi(e, t) {
  const i = Yi(e);
  return Object.fromEntries(Object.entries(t).filter(([n]) => !i.has(n)));
}
function Qe(e, t) {
  const i = Yi(e);
  return Object.fromEntries(Object.entries(t).filter(([n]) => !i.has(n)));
}
function we(e, t) {
  const i = Object.entries(t).map(([n, s]) => `  ${n}: ${s};`);
  return `${e} {
${i.join(`
`)}
}
`;
}
function Yc(e, t = {}) {
  const i = t.selector || ":root", n = t.darkSelector || ".dark", s = `/* fewui theme "${e.id}" — preset.js'ten üretildi (buildThemeCss); elle düzenlemeyin. */
`, r = { ...Zi(e, Gi), ...Z(e.preset.tokens.dark) }, a = Object.keys(r).length ? we(n, r) : "", u = Qe(e, Ki), l = Qe(e, Wi), c = (h) => h.replace(/^/gm, "  ").replace(/^  $/gm, ""), m = Object.keys(u).length || Object.keys(l).length ? `@supports ${nd} {
${c(we(i, u) + we(n, l))}}
` : "";
  return `${s}${we(i, qi(e))}${a}${m}`;
}
function Ee(e) {
  const t = String(e || "").trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function hd(e) {
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
function je(e) {
  return Math.min(255, Math.max(0, Math.round(e))).toString(16).padStart(2, "0");
}
function ce(e, t, i) {
  return `#${je(e)}${je(t)}${je(i)}`;
}
function Ae(e, t, i) {
  const [n, s, r] = [e, t, i].map((a) => {
    const u = a / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * s + 0.0722 * r;
}
function dt(e) {
  const t = String(e || "").trim().match(/^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:deg)?\s*(?:\/[^)]*)?\)$/i);
  if (!t) return null;
  const i = t[1].endsWith("%") ? Number.parseFloat(t[1]) / 100 : Number.parseFloat(t[1]), n = Number.parseFloat(t[2]), s = Number.parseFloat(t[3]);
  return [i, n, s].every(Number.isFinite) ? { l: i > 1 ? i / 100 : i, c: n, h: s } : null;
}
function ct(e, t, i) {
  const n = i * Math.PI / 180, s = t * Math.cos(n), r = t * Math.sin(n), a = (e + 0.3963377774 * s + 0.2158037573 * r) ** 3, u = (e - 0.1055613458 * s - 0.0638541728 * r) ** 3, l = (e - 0.0894841775 * s - 1.291485548 * r) ** 3;
  return [
    4.0767416621 * a - 3.3077115913 * u + 0.2309699292 * l,
    -1.2684380046 * a + 2.6097574011 * u - 0.3413193965 * l,
    -0.0041960863 * a - 0.7034186147 * u + 1.707614701 * l
  ].map((m) => {
    const h = Math.min(1, Math.max(0, m));
    return 255 * (h <= 31308e-7 ? 12.92 * h : 1.055 * h ** (1 / 2.4) - 0.055);
  });
}
function fd(e, t, i) {
  const [n, s, r] = [e, t, i].map((v) => {
    const L = v / 255;
    return L <= 0.04045 ? L / 12.92 : ((L + 0.055) / 1.055) ** 2.4;
  }), a = Math.cbrt(0.4122214708 * n + 0.5363325363 * s + 0.0514459929 * r), u = Math.cbrt(0.2119034982 * n + 0.6806995451 * s + 0.1073969566 * r), l = Math.cbrt(0.0883024619 * n + 0.2817188376 * s + 0.6299787005 * r), c = 0.2104542553 * a + 0.793617785 * u - 0.0040720468 * l, m = 1.9779984951 * a - 2.428592205 * u + 0.4505937099 * l, h = 0.0259040371 * a + 0.7827717662 * u - 0.808675766 * l, p = Math.hypot(m, h), S = p < 1e-5 ? 0 : (Math.atan2(h, m) * 180 / Math.PI + 360) % 360;
  return { l: c, c: p < 1e-5 ? 0 : p, h: S };
}
function Zc(e) {
  const t = String(e || "").trim(), i = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(t);
  if (!i) return t;
  let n = i[1];
  n.length <= 4 && (n = [...n].map((p) => p + p).join(""));
  const [s, r, a] = [0, 2, 4].map((p) => parseInt(n.slice(p, p + 2), 16)), u = n.length === 8 ? parseInt(n.slice(6, 8), 16) / 255 : 1, { l, c, h: m } = fd(s, r, a), h = (p, S) => String(Number(p.toFixed(S)));
  for (const p of [4, 5, 6]) {
    const S = [h(l, p), h(c, p), h(m, Math.max(p - 2, 2))], v = ct(Number(S[0]), Number(S[1]), Number(S[2])).map(Math.round);
    if (v[0] === s && v[1] === r && v[2] === a)
      return u < 1 ? `oklch(${S.join(" ")} / ${h(u, 3)})` : `oklch(${S.join(" ")})`;
  }
  return t;
}
function pe(e) {
  const t = Ee(e);
  if (t) return t;
  const i = dt(e);
  return i ? ct(i.l, i.c, i.h) : null;
}
function Qc(e) {
  const t = pe(e);
  return t ? ce(Math.round(t[0]), Math.round(t[1]), Math.round(t[2])) : null;
}
function De(e, t) {
  const i = Ae(...e), n = Ae(...t), [s, r] = i > n ? [i, n] : [n, i];
  return (s + 0.05) / (r + 0.05);
}
function di(e, t = "#ffffff", i = 4.5) {
  const n = pe(t);
  if (!n) return e;
  const s = dt(e);
  if (s) {
    let { l: c } = s;
    for (let m = 0; m < 60 && De(ct(c, s.c, s.h), n) < i && c > 0.05; m += 1)
      c -= 0.01;
    return c === s.l ? e : `oklch(${c.toFixed(3)} ${s.c} ${s.h})`;
  }
  const r = Ee(e);
  if (!r) return e;
  let [a, u, l] = r;
  for (let c = 0; c < 40 && De([a, u, l], n) < i; c += 1)
    a *= 0.95, u *= 0.95, l *= 0.95;
  return ce(a, u, l);
}
function md(e, t = "#ffffff", i = "#0a0a0b") {
  const n = pe(e), s = pe(t), r = pe(i);
  if (n && s && r)
    return De(n, s) >= De(n, r) ? t : i;
  const a = hd(e);
  return a != null && a > 0.72 ? i : t;
}
function Xc(e, t) {
  if (t === "dark" && dt(e)) return di(e, "#ffffff", 4.5);
  const i = Ee(e);
  if (!i) return e;
  let [n, s, r] = i, a = Ae(n, s, r);
  if (t === "dark") {
    if (a < 0.12) {
      const l = Math.min(1, (0.28 - a) / Math.max(0.01, 0.28));
      n += (255 - n) * l * 0.55, s += (255 - s) * l * 0.55, r += (255 - r) * l * 0.55, a = Ae(n, s, r);
    }
    return di(ce(n, s, r), "#ffffff", 4.5);
  }
  return a > 0.82 ? ce(n * 0.22, s * 0.22, r * 0.22) : e;
}
function Qi(e) {
  const t = Ee(e);
  if (!t)
    return { accent: e, brandAccent: e };
  const [i, n, s] = t, r = ce(
    i + (255 - i) * 0.12,
    n + (255 - n) * 0.12,
    s + (255 - s) * 0.12
  ), a = ce(
    i + (255 - i) * 0.28,
    n + (255 - n) * 0.32,
    s + (255 - s) * 0.08
  );
  return { accent: r, brandAccent: a };
}
function he(e) {
  var r, a;
  if (!e || typeof e != "object" || !e.id)
    throw new Error("[fewui] defineTheme: `id` zorunlu.");
  const t = e.extends, i = e.preset || {}, n = ui(t == null ? void 0 : t.preset.tokens.light, (r = i.tokens) == null ? void 0 : r.light), s = ui(t == null ? void 0 : t.preset.tokens.dark, (a = i.tokens) == null ? void 0 : a.dark);
  return {
    id: String(e.id),
    label: e.label || String(e.id),
    description: e.description || "",
    preset: {
      fonts: { ...t == null ? void 0 : t.preset.fonts, ...i.fonts },
      tokens: { light: n, dark: s }
    },
    defaults: et({ ...t == null ? void 0 : t.defaults, ...e.defaults }),
    css: e.css || {}
  };
}
function Jc(e, t = {}) {
  return he({
    id: e.id,
    label: e.label,
    description: e.description,
    css: e.css,
    extends: e,
    preset: { fonts: t.fonts, tokens: t.tokens },
    defaults: t.defaults
  });
}
function Xi(e) {
  return !!(e && typeof e == "object" && "id" in e && "preset" in e && e.preset && typeof e.preset == "object" && "tokens" in e.preset);
}
const pd = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, bd = {
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
      white: "oklch(1 0 0)",
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
      primary: "oklch(0.5485 0.2494 263.58)",
      primaryForeground: "oklch(1 0 0)",
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
      chart50: "oklch(0.9619 0.0179 272.31)",
      chart100: "oklch(0.9299 0.0334 272.79)",
      chart200: "oklch(0.8699 0.0622 274.04)",
      chart300: "oklch(0.7853 0.1041 274.71)",
      chart400: "oklch(0.6801 0.1583 276.93)",
      chart500: "oklch(0.5854 0.2041 277.12)",
      chart600: "oklch(0.5106 0.2301 276.97)",
      chart700: "oklch(0.4568 0.2146 277.02)",
      chart800: "oklch(0.3984 0.1773 277.37)",
      chart900: "oklch(0.3588 0.1354 278.7)",
      chart: "var(--chart-500)",
      chartForeground: "oklch(1 0 0)",
      /**
       * Kategorik grafik serisi (pasta / çok serili) — sabit sıra: 1 mavi · 2 turuncu · 3 turkuaz ·
       * 4 amber · 5 pembe · 6 yeşil · 7 mor · 8 kırmızı. Komşu sıra renk körlüğü denetiminden geçer;
       * koyu değerler koyu zemin için ayrı seçilir (otomatik ters çevrilmez).
       */
      chartSeries1: "oklch(0.5753 0.1626 255.53)",
      chartSeries2: "oklch(0.6708 0.175 40.64)",
      chartSeries3: "oklch(0.669 0.1408 162.11)",
      chartSeries4: "oklch(0.7644 0.1612 75.12)",
      chartSeries5: "oklch(0.7163 0.1412 357.39)",
      chartSeries6: "oklch(0.5285 0.1798 142.5)",
      chartSeries7: "oklch(0.5271 0.1968 283.44)",
      chartSeries8: "oklch(0.6226 0.1909 24.91)",
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
      background: "oklch(0 0 0)",
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
      chart50: "oklch(0.2573 0.0861 281.29)",
      chart100: "oklch(0.3588 0.1354 278.7)",
      chart200: "oklch(0.3984 0.1773 277.37)",
      chart300: "oklch(0.4568 0.2146 277.02)",
      chart400: "oklch(0.5106 0.2301 276.97)",
      chart600: "oklch(0.6801 0.1583 276.93)",
      chart700: "oklch(0.7853 0.1041 274.71)",
      chart800: "oklch(0.8699 0.0622 274.04)",
      chart900: "oklch(0.9299 0.0334 272.79)",
      chartForeground: "var(--base-950)",
      chartSeries1: "oklch(0.6221 0.1612 255.05)",
      chartSeries2: "oklch(0.6221 0.1726 40.11)",
      chartSeries3: "oklch(0.6212 0.1283 163.11)",
      chartSeries4: "oklch(0.6699 0.1425 73.23)",
      chartSeries5: "oklch(0.6224 0.1712 0.84)",
      chartSeries6: "oklch(0.5285 0.1798 142.5)",
      chartSeries7: "oklch(0.6696 0.1452 286.83)",
      chartSeries8: "oklch(0.6693 0.1586 22.31)",
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
}, Ji = he({
  id: "web",
  label: "Web",
  description: "Restta panel — opak yüzeyler, Inter, geniş radius.",
  defaults: pd,
  preset: bd,
  css: {
    color: "fewui/themes/web/color.css",
    styles: "fewui/themes/web/styles.css"
  }
}), gd = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, yd = {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
  },
  tokens: {
    light: {
      /**
       * Grouped canvas — iOS `systemGroupedBackground` (oklch(0.9626 0.0066 286.27)) parlaklığı. `base-50` beyaz kartla
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
}, vd = he({
  id: "liquidglass",
  label: "Liquid Glass",
  description: "iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.",
  extends: Ji,
  defaults: gd,
  preset: yd,
  css: {
    color: "fewui/themes/liquidglass/color.css",
    styles: "fewui/themes/liquidglass/styles.css",
    platform: {
      ios: "fewui/themes/liquidglass/platform/ios.css"
    }
  }
}), kd = {
  iconType: "light",
  buttonRounded: "full",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "sm"
}, Sd = {
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
      white: "oklch(1 0 0)",
      background: "oklch(0.992 0.0058 333.98)",
      foreground: "oklch(0.2249 0.0078 297.21)",
      surface: "oklch(0.992 0.0058 333.98)",
      surfaceForeground: "oklch(0.2249 0.0078 297.21)",
      "--ui-m3-surface-lowest": "oklch(1 0 0)",
      "--ui-m3-surface-low": "oklch(0.9673 0.0118 313.22)",
      "--ui-m3-surface-container": "oklch(0.9536 0.0147 312.24)",
      "--ui-m3-surface-high": "oklch(0.9325 0.0148 312.24)",
      "--ui-m3-surface-highest": "oklch(0.914 0.0137 314.75)",
      "--ui-m3-outline": "oklch(0.5667 0.0163 308.14)",
      "--ui-m3-outline-variant": "oklch(0.8287 0.0178 308.22)",
      surfaceStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--surface)"
      },
      control: "var(--ui-m3-surface-highest)",
      controlForeground: "oklch(0.2249 0.0078 297.21)",
      controlStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      },
      primary: "oklch(0.4955 0.1305 293.71)",
      primaryForeground: "oklch(1 0 0)",
      secondary: "oklch(0.9163 0.0365 303.11)",
      secondaryForeground: "oklch(0.2272 0.0347 293.65)",
      warning: "oklch(0.78 0.15 72)",
      warningForeground: "oklch(0.26 0.055 72)",
      success: "oklch(0.53 0.15 152)",
      successForeground: "oklch(0.99 0.01 152)",
      info: "oklch(0.54 0.125 252)",
      infoForeground: "oklch(0.99 0.01 252)",
      danger: "oklch(0.5013 0.1783 28.7)",
      dangerForeground: "oklch(1 0 0)",
      muted: "var(--ui-m3-surface-container)",
      mutedForeground: "oklch(0.3981 0.0174 303.72)",
      accent: "var(--ui-m3-surface-high)",
      accentForeground: "oklch(0.2272 0.0347 293.65)",
      inputStyle: {
        opacity: "100%",
        backdropBlur: "0px",
        mixFrom: "var(--control)"
      },
      border: "var(--ui-m3-outline-variant)",
      uiShadowSm: "0 1px 2px rgb(0 0 0 / 0.08), 0 1px 3px rgb(0 0 0 / 0.06)",
      uiShadowMd: "0 1px 2px rgb(0 0 0 / 0.08), 0 2px 6px rgb(0 0 0 / 0.1)",
      uiShadowSurface: "0 1px 3px rgb(0 0 0 / 0.08), 0 4px 12px rgb(0 0 0 / 0.06)",
      ring: "oklch(0.4955 0.1305 293.71)",
      uiFillGradTopPrimary: "0%",
      uiFillGradBottomPrimary: "0%",
      uiFillGradLight: "white",
      uiFillGradDark: "black",
      uiScrollbarSize: "8px",
      uiScrollbarTrack: "transparent",
      uiScrollbarThumb: "color-mix(in oklab, var(--foreground) 22%, transparent)",
      uiScrollbarThumbHover: "color-mix(in oklab, var(--foreground) 36%, transparent)",
      chart50: "oklch(0.9536 0.0147 312.24)",
      chart100: "oklch(0.9163 0.0365 303.11)",
      chart200: "oklch(0.8349 0.0946 298.02)",
      chart300: "oklch(0.7529 0.1303 295.75)",
      chart400: "oklch(0.6651 0.1307 295.01)",
      chart500: "oklch(0.5756 0.1315 294.62)",
      chart600: "oklch(0.4955 0.1305 293.71)",
      chart700: "oklch(0.4103 0.1337 292.71)",
      chart800: "oklch(0.3251 0.1353 291.15)",
      chart900: "oklch(0.242 0.1404 286.09)",
      chart: "var(--chart-500)",
      chartForeground: "oklch(1 0 0)",
      /**
       * Kategorik grafik serisi (pasta / çok serili) — sabit sıra: 1 mavi · 2 turuncu · 3 turkuaz ·
       * 4 amber · 5 pembe · 6 yeşil · 7 mor · 8 kırmızı. Komşu sıra renk körlüğü denetiminden geçer;
       * koyu değerler koyu zemin için ayrı seçilir (otomatik ters çevrilmez).
       */
      chartSeries1: "oklch(0.5753 0.1626 255.53)",
      chartSeries2: "oklch(0.6708 0.175 40.64)",
      chartSeries3: "oklch(0.669 0.1408 162.11)",
      chartSeries4: "oklch(0.7644 0.1612 75.12)",
      chartSeries5: "oklch(0.7163 0.1412 357.39)",
      chartSeries6: "oklch(0.5285 0.1798 142.5)",
      chartSeries7: "oklch(0.5271 0.1968 283.44)",
      chartSeries8: "oklch(0.6226 0.1909 24.91)"
    },
    dark: {
      background: "oklch(0.2249 0.0078 297.21)",
      foreground: "oklch(0.9148 0.0076 332.13)",
      surface: "oklch(0.2249 0.0078 297.21)",
      surfaceForeground: "oklch(0.9148 0.0076 332.13)",
      "--ui-m3-surface-lowest": "oklch(0.1645 0.0128 300.23)",
      "--ui-m3-surface-low": "oklch(0.2265 0.01 303.71)",
      "--ui-m3-surface-container": "oklch(0.2445 0.0134 298.46)",
      "--ui-m3-surface-high": "oklch(0.2859 0.0129 298.63)",
      "--ui-m3-surface-highest": "oklch(0.3298 0.0125 298.76)",
      "--ui-m3-outline": "oklch(0.6566 0.0153 304.01)",
      "--ui-m3-outline-variant": "oklch(0.3981 0.0174 303.72)",
      controlForeground: "oklch(0.9148 0.0076 332.13)",
      danger: "oklch(0.8345 0.0677 22.01)",
      dangerForeground: "oklch(0.3245 0.1092 28.01)",
      mutedForeground: "oklch(0.8287 0.0178 308.22)",
      accentForeground: "oklch(0.9163 0.0365 303.11)",
      uiShadowSm: "0 1px 2px rgb(0 0 0 / 0.35)",
      uiShadowMd: "0 2px 6px rgb(0 0 0 / 0.4)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.35)",
      ring: "oklch(0.8349 0.0946 298.02)",
      chart50: "oklch(0.242 0.1404 286.09)",
      chart100: "oklch(0.3251 0.1353 291.15)",
      chart200: "oklch(0.4103 0.1337 292.71)",
      chart300: "oklch(0.4955 0.1305 293.71)",
      chart400: "oklch(0.5756 0.1315 294.62)",
      chart500: "oklch(0.6651 0.1307 295.01)",
      chart600: "oklch(0.7529 0.1303 295.75)",
      chart700: "oklch(0.8349 0.0946 298.02)",
      chart800: "oklch(0.9163 0.0365 303.11)",
      chart900: "oklch(0.9536 0.0147 312.24)",
      chartForeground: "oklch(0.3251 0.1353 291.15)",
      chartSeries1: "oklch(0.6221 0.1612 255.05)",
      chartSeries2: "oklch(0.6221 0.1726 40.11)",
      chartSeries3: "oklch(0.6212 0.1283 163.11)",
      chartSeries4: "oklch(0.6699 0.1425 73.23)",
      chartSeries5: "oklch(0.6224 0.1712 0.84)",
      chartSeries6: "oklch(0.5285 0.1798 142.5)",
      chartSeries7: "oklch(0.6696 0.1452 286.83)",
      chartSeries8: "oklch(0.6693 0.1586 22.31)"
    }
  }
}, xd = he({
  id: "android",
  label: "Android",
  description: "Material 3 — Roboto, surface containers, filled/tonal buttons, elevated cards.",
  defaults: kd,
  preset: Sd,
  css: {
    color: "fewui/themes/android/color.css",
    styles: "fewui/themes/android/styles.css",
    platform: {
      android: "fewui/themes/android/platform/android.css"
    }
  }
}), wd = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, _d = {
  fonts: {
    body: "Poppins, ui-sans-serif, system-ui, sans-serif",
    heading: "Poppins, ui-sans-serif, system-ui, sans-serif"
  },
  tokens: {
    light: {
      radius: "20px",
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
      white: "oklch(1 0 0)",
      background: "oklch(0.1448 0 0)",
      foreground: "oklch(0.9851 0 0)",
      surface: "oklch(0.2046 0 0)",
      surfaceForeground: "oklch(0.9851 0 0)",
      surfaceStyle: {
        opacity: "6%",
        backdropBlur: "12px",
        mixFrom: "var(--foreground)"
      },
      control: "oklch(0.2686 0 0)",
      controlForeground: "oklch(0.9851 0 0)",
      controlStyle: {
        opacity: "8%",
        backdropBlur: "12px",
        mixFrom: "var(--foreground)"
      },
      primary: "oklch(0.7049 0.1867 47.6)",
      primaryForeground: "oklch(1 0 0)",
      secondary: "oklch(0.3715 0 0)",
      secondaryForeground: "oklch(0.9851 0 0)",
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
      mutedForeground: "oklch(0.7155 0 0)",
      /** Landing "light" modu da koyu yüzeyli — seçim tonları dark kuralıyla (light türetimi koyulaştırırdı). */
      primarySoft: "color-mix(in oklab, var(--primary) 26%, var(--surface))",
      primarySoftHover: "color-mix(in oklab, var(--primary) 34%, var(--surface))",
      uiSelectedFg: "color-mix(in oklab, var(--primary) 55%, var(--foreground))",
      uiFocusRing: "color-mix(in oklab, var(--primary) 70%, var(--foreground))",
      accent: "var(--base-800)",
      accentForeground: "var(--base-50)",
      brandAccent: "oklch(0.8369 0.1644 84.43)",
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
}, Td = he({
  id: "landing",
  label: "Landing",
  description: "Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.",
  defaults: wd,
  preset: _d,
  css: {
    color: "fewui/themes/landing/color.css",
    styles: "fewui/themes/landing/styles.css"
  }
}), Cd = {
  iconType: "light",
  buttonRounded: "lg",
  controlSize: "md",
  buttonSize: "md",
  inputSize: "md",
  dateFormat: "d MMM yyyy",
  dateRangeFormat: "d MMM yyyy",
  timeFormat: "HH:mm",
  dialogMaxWidth: "md"
}, Id = {
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
      white: "oklch(1 0 0)",
      background: "oklch(0.1408 0.0044 285.82)",
      foreground: "oklch(0.9851 0 0)",
      surface: "oklch(0.2103 0.0059 285.89)",
      surfaceForeground: "oklch(0.9851 0 0)",
      surfaceStyle: {
        opacity: "4%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      control: "oklch(0.2739 0.0055 286.03)",
      controlForeground: "oklch(0.9851 0 0)",
      controlStyle: {
        opacity: "6%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      primary: "oklch(0.5854 0.2041 277.12)",
      primaryForeground: "oklch(1 0 0)",
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
      accent: "oklch(0.3588 0.1354 278.7)",
      accentForeground: "oklch(0.9299 0.0334 272.79)",
      brandAccent: "oklch(0.7853 0.1041 274.71)",
      inputStyle: {
        opacity: "6%",
        backdropBlur: "4px",
        mixFrom: "var(--foreground)"
      },
      uiShadowSm: "0 4px 16px rgb(0 0 0 / 0.04)",
      uiShadowMd: "0 8px 28px rgb(0 0 0 / 0.05)",
      uiShadowSurface: "0 4px 16px rgb(0 0 0 / 0.04), 0 16px 48px rgb(0 0 0 / 0.06)",
      ring: "oklch(0.5854 0.2041 277.12)",
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
      secondary: "oklch(0.2739 0.0055 286.03)",
      secondaryForeground: "oklch(0.9851 0 0)",
      muted: "var(--base-800)",
      mutedForeground: "var(--base-400)",
      accent: "oklch(0.3588 0.1354 278.7)",
      accentForeground: "oklch(0.9299 0.0334 272.79)",
      uiShadowSm: "0 2px 8px rgb(0 0 0 / 0.2)",
      uiShadowMd: "0 6px 20px rgb(0 0 0 / 0.22)",
      uiShadowSurface: "0 2px 8px rgb(0 0 0 / 0.22), 0 14px 36px rgb(0 0 0 / 0.18)",
      ring: "oklch(0.6801 0.1583 276.93)"
    }
  }
}, Fd = he({
  id: "fewui",
  label: "Fewui",
  description: "fewui.com — indigo marka, koyu marketing kabuğu.",
  defaults: Cd,
  preset: Id,
  css: {
    color: "fewui/themes/fewui/color.css",
    styles: "fewui/themes/fewui/styles.css"
  }
}), ci = "web", Me = /* @__PURE__ */ new Map();
function Ld(e) {
  if (!Xi(e))
    throw new Error("[fewui] registerTheme: geçerli bir tema paketi bekleniyor (defineTheme).");
  return Me.set(e.id, e), e;
}
for (const e of [Ji, vd, xd, Td, Fd])
  Ld(e);
function Ad(e) {
  return Me.get(String(e || "").trim()) ?? null;
}
function eh() {
  return [...Me.values()];
}
function ht(e) {
  if (Xi(e)) return e;
  const t = Ad(
    /** @type {string} */
    e || ci
  );
  return t || /** @type {ThemePackage} */
  Me.get(ci);
}
function th(e) {
  return `fewui/themes/${ht(e).id}.css`;
}
const ge = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), ft = "(prefers-color-scheme: dark)", fi = "ui-theme-transition", Dd = "ui-theme-mode-change", zd = 260;
function Re(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function Od() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(ft).matches ? "dark" : "light";
}
function mt(e, t = "light") {
  return e === "system" ? Od() : e === "dark" || e === "light" ? e : t;
}
function ih(e) {
  var n;
  const t = Re(e);
  if (!t) return { mode: "light", preference: "light" };
  const i = t.classList.contains("dark") ? "dark" : "light";
  return { mode: i, preference: ((n = re.get(t)) == null ? void 0 : n.preference) ?? i };
}
function er(e, t) {
  var r, a;
  const i = re.get(e);
  if ((i == null ? void 0 : i.preference) === t) return;
  if ((r = i == null ? void 0 : i.unwatch) == null || r.call(i), t !== "system" || typeof window > "u" || typeof window.matchMedia != "function") {
    re.set(e, { preference: t });
    return;
  }
  const n = window.matchMedia(ft), s = () => Bd("system", e);
  (a = n.addEventListener) == null || a.call(n, "change", s), re.set(e, { preference: t, unwatch: () => {
    var u;
    return (u = n.removeEventListener) == null ? void 0 : u.call(n, "change", s);
  } });
}
function tr(e) {
  var t;
  typeof window > "u" || (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches || (e.classList.add(fi), clearTimeout(hi.get(e)), hi.set(
    e,
    setTimeout(() => e.classList.remove(fi), zd)
  ));
}
function ir(e, t, i) {
  typeof CustomEvent == "function" && e.dispatchEvent(new CustomEvent(Dd, { detail: { mode: t, preference: i } }));
}
function Ed(e, t) {
  const i = Object.keys(e);
  return i.length === Object.keys(t).length && i.every((n) => e[n] === t[n]);
}
function Md(e, t) {
  if (!e || typeof e != "object") return {};
  if ("light" in e || "dark" in e) {
    const i = (
      /** @type {{ light?: UiThemeTokens, dark?: UiThemeTokens }} */
      e
    );
    return {
      ...Z(i.light),
      ...t === "dark" ? Z(i.dark) : {}
    };
  }
  return Z(
    /** @type {UiThemeTokens} */
    e
  );
}
function pt(e, t = {}) {
  const i = ht(e), n = mt(t.mode);
  return { ...t.inline ? cd(i, n) : Ui(i.preset.fonts), ...Md(t.overrides, n) };
}
function Rd(e, t = {}) {
  var h;
  const i = Re(t.root);
  if (!i) return {};
  const n = ht(e), s = i.classList.contains("dark"), r = t.mode ?? ((h = re.get(i)) == null ? void 0 : h.preference), a = mt(r, s ? "dark" : "light"), u = !!t.inline, l = pt(n, { mode: a, inline: u, overrides: t.overrides }), c = ge.get(i);
  if (!!c && (s !== (a === "dark") || !Ed(c.vars, l)) && t.transition !== !1 && tr(i), i.classList.toggle("dark", a === "dark"), c)
    for (const p of c.keys)
      p in l || i.style.removeProperty(p);
  for (const [p, S] of Object.entries(l))
    i.style.setProperty(p, S);
  return ge.set(i, { theme: n, inline: u, overrides: t.overrides, keys: Object.keys(l), vars: l }), r && er(i, r), s !== (a === "dark") && ir(i, a, r ?? a), l;
}
function Bd(e, t, i = {}) {
  const n = Re(t);
  if (!n) return;
  const s = ge.get(n);
  if (s) {
    Rd(s.theme, {
      mode: e,
      root: n,
      inline: s.inline,
      overrides: s.overrides,
      transition: i.transition
    });
    return;
  }
  const r = n.classList.contains("dark"), a = mt(e, r ? "dark" : "light");
  r !== (a === "dark") && i.transition !== !1 && tr(n), n.classList.toggle("dark", a === "dark"), er(n, e), r !== (a === "dark") && ir(n, a, e);
}
function rh(e) {
  var n, s;
  const t = Re(e);
  if (!t) return;
  (s = (n = re.get(t)) == null ? void 0 : n.unwatch) == null || s.call(n), re.delete(t);
  const i = ge.get(t);
  if (i) {
    for (const r of i.keys) t.style.removeProperty(r);
    ge.delete(t);
  }
}
function nh(e, t = {}) {
  const i = pt(e, t);
  return {
    // `system` sunucuda bilinemez: sınıf boş kalır, `buildThemeModeScript()` ilk boyamadan önce ekler.
    classAttr: t.mode === "dark" ? "dark" : "",
    styleAttr: Object.entries(i).map(([n, s]) => `${n}: ${s}`).join("; ")
  };
}
function sh(e = {}) {
  const t = e.storageKey ? JSON.stringify(e.storageKey) : "null", i = JSON.stringify(e.defaultMode ?? "system");
  return `(function(){try{var k=${t},m=(k&&localStorage.getItem(k))||${i};if(m!=='light'&&m!=='dark')m=matchMedia('${ft}').matches?'dark':'light';document.documentElement.classList.toggle('dark',m==='dark')}catch(e){}})()`;
}
function ah(e, t = {}) {
  const i = pt(e, t), n = [], s = Object.entries(i).map(([u, l]) => `${u}: ${l} !important`).join("; ");
  s && n.push(`:root, html, html.dark { ${s} }`);
  const r = i["--font-sans"], a = i["--font-heading"] || r;
  return r && n.push(`html, body { font-family: ${r} !important; }`), a && n.push(`h1, h2, h3, h4, h5, h6 { font-family: ${a} !important; }`), n.join(`
`);
}
function oh(e) {
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
  n && (t.primary = String(n), t.primaryForeground ?? (t.primaryForeground = md(t.primary)), t.ring ?? (t.ring = `color-mix(in oklab, ${t.primary} 55%, transparent)`));
  const s = e.secondaryColor || e.secondary;
  s && (t.secondary = String(s)), e.baseColor && typeof e.baseColor == "object" && (t.base = { ...e.baseColor });
  const r = e.bodyFontFamily || e.fontFamily;
  r && (t["--font-sans"] = Le(String(r)));
  const a = e.headingFontFamily || r;
  if (a && (t["--font-heading"] = Le(String(a))), e.colors && typeof e.colors == "object")
    for (const [u, l] of Object.entries(e.colors))
      l != null && l !== "" && (t[u] = String(l));
  return t;
}
function lh(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const i = e.primaryColor || e.primary;
  if (!i) return e;
  const n = Qi(String(i)), s = { ...e.colors && typeof e.colors == "object" ? e.colors : {} };
  return (t.force || !s["brand-accent"]) && (s["brand-accent"] = n.brandAccent), {
    ...e,
    accent: t.force || !e.accent ? n.accent : e.accent,
    colors: s
  };
}
const rr = 300, mi = { info: 0, success: 1, warning: 2, danger: 3 }, N = ve({
  /** @type {ToastItem[]} */
  items: []
});
let _e = 0, Q = null, be = null;
function Be() {
  be && (clearTimeout(be), be = null);
}
function nr() {
  if (Q == null) return null;
  const e = N.items.find((t) => t.id === Q);
  return !e || e.sealed ? (Q = null, null) : e;
}
function sr() {
  Be();
  const e = nr();
  e && (e.sealed = !0), Q = null;
}
function pi() {
  Be(), be = setTimeout(() => {
    be = null, sr();
  }, rr);
}
function ye(e) {
  e._timer && (clearTimeout(e._timer), e._timer = null), !e._paused && e.duration > 0 && (e._timer = setTimeout(() => bt(e.id), e.duration));
}
function bi(e) {
  const t = N.items.find((i) => i.id === e);
  t && (t._paused = !0, t._timer && (clearTimeout(t._timer), t._timer = null));
}
function gi(e) {
  const t = N.items.find((i) => i.id === e);
  !t || !t._paused || (t._paused = !1, t.expanded || ye(t));
}
function ar(e, t) {
  const i = mi[e] ?? 0;
  return (mi[t] ?? 0) > i ? t : e;
}
function yi(e, t) {
  return {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    color: e.color ?? "info",
    action: Pd(e.action)
  };
}
function Pd(e) {
  return !e || typeof e != "object" || !e.label ? null : {
    label: String(e.label),
    onClick: typeof e.onClick == "function" ? e.onClick : void 0,
    keepOpen: e.keepOpen === !0
  };
}
const Nd = { success: "success", warning: "warning", danger: "error" };
function uh(e = {}) {
  const t = Nd[e.color];
  t && lt(t);
  const i = Date.now(), n = e.group !== !1 && !e.action, s = e.duration !== void 0 ? e.duration : 4500, r = e.color ?? "info";
  if (n) {
    const c = nr();
    if (c && i - c.lastAt <= rr)
      return _e += 1, c.children.push(yi(e, _e)), c.color = ar(c.color, r), c.lastAt = i, s === 0 || c.duration === 0 ? c.duration = 0 : c.duration = Math.max(c.duration, s), ye(c), pi(), c.id;
  }
  sr(), _e += 1;
  const a = _e, u = yi(e, a), l = {
    id: a,
    title: u.title,
    description: u.description,
    color: r,
    duration: s,
    children: [u],
    sealed: !n,
    expanded: !1,
    lastAt: i,
    _timer: null
  };
  return N.items.push(l), n && (Q = a, pi()), ye(l), a;
}
function $d(e, t) {
  const i = N.items.find((n) => n.id === e);
  !i || i.children.length < 2 || (i.expanded = t === !0, i.expanded ? i._timer && (clearTimeout(i._timer), i._timer = null) : ye(i));
}
function Vd(e) {
  const t = N.items.find((i) => i.id === e);
  !t || t.children.length < 2 || $d(e, !t.expanded);
}
function bt(e) {
  const t = N.items.findIndex((n) => n.id === e);
  if (t === -1) return;
  const i = N.items[t];
  i._timer && (clearTimeout(i._timer), i._timer = null), Q === e && (Be(), Q = null), N.items.splice(t, 1);
}
function Hd(e, t) {
  const i = N.items.find((r) => r.id === e);
  if (!i) return;
  const n = i.children.findIndex((r) => r.id === t);
  if (n === -1) return;
  if (i.children.splice(n, 1), i.children.length === 0) {
    bt(e);
    return;
  }
  const s = i.children[0];
  i.title = s.title, i.description = s.description, i.color = i.children.reduce(
    (r, a) => ar(r, a.color),
    s.color
  ), i.children.length < 2 && (i.expanded = !1, ye(i));
}
function dh() {
  Be(), Q = null;
  for (const e of N.items)
    e._timer && clearTimeout(e._timer);
  N.items.splice(0);
}
const vi = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark"
}, ki = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger"
}, jd = {
  name: "Toast",
  data() {
    return {
      /** @type {{ id: number, text: string, assertive: boolean }[]} */
      liveMessages: []
    };
  },
  computed: {
    items() {
      return N.items;
    },
    /** Görünen tüm bildirimlerin (grup çocukları dahil) kimlikleri — yeni geleni ayırt etmek için. */
    childIds() {
      return this.items.flatMap((e) => e.children.map((t) => t.id));
    },
    politeMessages() {
      return this.liveMessages.filter((e) => !e.assertive);
    },
    assertiveMessages() {
      return this.liveMessages.filter((e) => e.assertive);
    },
    dismissLabel() {
      return q(this, "ui.alert.dismiss", "Dismiss");
    }
  },
  watch: {
    childIds(e) {
      this.announceNew(e);
    }
  },
  created() {
    this.announcedIds = new Set(this.childIds), this.liveTimers = /* @__PURE__ */ new Set();
  },
  beforeUnmount() {
    for (const e of this.liveTimers) clearTimeout(e);
    this.liveTimers.clear();
  },
  methods: {
    pauseToast: bi,
    resumeToast: gi,
    /** Yeni gelen bildirimi canlı bölgeye yazar; metin okunduktan sonra bölgeden kaldırılır. */
    announceNew(e) {
      const t = new Set(e);
      for (const i of this.announcedIds)
        t.has(i) || this.announcedIds.delete(i);
      for (const i of this.items)
        for (const n of i.children) {
          if (this.announcedIds.has(n.id)) continue;
          this.announcedIds.add(n.id);
          const s = [n.title, n.description].filter(Boolean).join(". ");
          if (!s) continue;
          this.liveMessages.push({ id: n.id, text: s, assertive: n.color === "danger" });
          const r = setTimeout(() => {
            this.liveTimers.delete(r), this.liveMessages = this.liveMessages.filter((a) => a.id !== n.id);
          }, 8e3);
          this.liveTimers.add(r);
        }
    },
    /** Dokunmatik ekranda `pointerleave` gelmez; bekletme yalnız fare imleciyle çalışır. */
    onToastPointerEnter(e, t) {
      e.pointerType === "mouse" && bi(t.id);
    },
    onToastPointerLeave(e, t) {
      e.pointerType === "mouse" && gi(t.id);
    },
    queueDismissToast: bt,
    queueDismissToastChild: Hd,
    toggleToastExpanded: Vd,
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
      return typeof this.$t == "function" ? this.$t(e, t) : e === "ui.toast.groupCount" ? `${(t == null ? void 0 : t.count) ?? 0}` : e === "ui.toast.expand" ? `Show ${(t == null ? void 0 : t.count) ?? 0} notifications` : e === "ui.toast.collapse" ? "Collapse notifications" : e === "ui.toast.groupHeading" ? `${(t == null ? void 0 : t.count) ?? 0}` : e;
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
      return vi[e] || vi.info;
    },
    iconToneClass(e) {
      return ki[e] || ki.info;
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
    /** Eylem yalnız tekil toastta gösterilir. */
    singleAction(e) {
      var t, i;
      return this.isGrouped(e) ? null : ((i = (t = e.children) == null ? void 0 : t[0]) == null ? void 0 : i.action) || null;
    },
    runAction(e) {
      var i;
      const t = this.singleAction(e);
      t && ((i = t.onClick) == null || i.call(t), t.keepOpen || this.queueDismissToast(e.id));
    }
  }
}, Gd = { class: "ui-toast-host" }, Kd = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-relevant": "additions"
}, Wd = {
  class: "sr-only",
  "aria-live": "assertive",
  "aria-relevant": "additions"
}, Ud = ["aria-label"], qd = ["onClick"], Yd = { class: "ui-alert-body min-w-0 flex-1" }, Zd = {
  key: 0,
  class: "ui-alert-title"
}, Qd = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Xd = ["onPointerenter", "onPointerleave", "onFocusin", "onFocusout", "onClick"], Jd = { class: "ui-alert-body min-w-0 flex-1" }, ec = {
  key: 0,
  class: "ui-alert-title"
}, tc = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function ic(e, t, i, n, s, r) {
  const a = w("ui-icon"), u = w("ui-button");
  return o(), T(ze, { to: "body" }, [
    b("div", Gd, [
      b("div", Kd, [
        (o(!0), d(A, null, B(r.politeMessages, (l) => (o(), d("p", {
          key: l.id
        }, g(l.text), 1))), 128))
      ]),
      b("div", Wd, [
        (o(!0), d(A, null, B(r.assertiveMessages, (l) => (o(), d("p", {
          key: l.id
        }, g(l.text), 1))), 128))
      ]),
      k(vr, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack pointer-events-none"
      }, {
        default: _(() => [
          (o(!0), d(A, null, B(r.items, (l) => (o(), d("div", {
            key: l.id,
            class: "pointer-events-none flex w-full justify-center"
          }, [
            r.isGrouped(l) && l.expanded ? (o(), d("div", {
              key: 0,
              class: "ui-toast-expanded-stack",
              role: "group",
              "aria-label": r.groupHeading(l)
            }, [
              (o(!0), d(A, null, B(l.children, (c, m) => (o(), d("div", {
                key: c.id,
                class: x([r.childToastClasses(c), "pointer-events-auto"]),
                onClick: (h) => r.onToastClick(l)
              }, [
                b("span", {
                  class: x(["ui-alert-icon", r.iconToneClass(c.color)]),
                  "aria-hidden": "true"
                }, [
                  k(a, {
                    name: r.iconFor(c.color),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                b("div", Yd, [
                  c.title ? (o(), d("p", Zd, g(c.title), 1)) : f("", !0),
                  c.description ? (o(), d("p", Qd, g(c.description), 1)) : f("", !0)
                ]),
                k(u, {
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "xmark",
                  "aria-label": r.dismissLabel,
                  onClick: E((h) => r.queueDismissToastChild(l.id, c.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"]),
                m === 0 ? (o(), T(u, {
                  key: 0,
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "chevron-up",
                  "aria-expanded": "true",
                  "aria-label": r.t("ui.toast.collapse"),
                  onClick: E((h) => r.toggleToastExpanded(l.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("", !0)
              ], 10, qd))), 128))
            ], 8, Ud)) : (o(), d("div", {
              key: 1,
              class: x(r.deckClasses(l))
            }, [
              (o(!0), d(A, null, B(r.stackSheetCount(l), (c) => (o(), d("span", {
                key: `${l.id}-sheet-${c}`,
                class: "ui-toast-deck-sheet",
                "aria-hidden": "true"
              }))), 128)),
              b("div", {
                class: x([r.toastClasses(l), "pointer-events-auto"]),
                onPointerenter: (c) => r.onToastPointerEnter(c, l),
                onPointerleave: (c) => r.onToastPointerLeave(c, l),
                onFocusin: (c) => r.pauseToast(l.id),
                onFocusout: (c) => r.resumeToast(l.id),
                onClick: (c) => r.onToastClick(l)
              }, [
                b("span", {
                  class: x(["ui-alert-icon", r.iconToneClass(l.color)]),
                  "aria-hidden": "true"
                }, [
                  k(a, {
                    name: r.iconFor(l.color),
                    size: "sm"
                  }, null, 8, ["name"])
                ], 2),
                b("div", Jd, [
                  r.collapsedTitle(l) ? (o(), d("p", ec, g(r.collapsedTitle(l)), 1)) : f("", !0),
                  r.collapsedDescription(l) ? (o(), d("p", tc, g(r.collapsedDescription(l)), 1)) : f("", !0)
                ]),
                r.singleAction(l) ? (o(), T(u, {
                  key: 0,
                  "native-type": "button",
                  variant: "ghost",
                  color: "primary",
                  size: "sm",
                  class: "ui-toast-action shrink-0",
                  onClick: E((c) => r.runAction(l), ["stop"])
                }, {
                  default: _(() => [
                    O(g(r.singleAction(l).label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : f("", !0),
                k(u, {
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "xmark",
                  "aria-label": r.dismissLabel,
                  onClick: E((c) => r.queueDismissToast(l.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"]),
                r.isGrouped(l) ? (o(), T(u, {
                  key: 1,
                  "native-type": "button",
                  variant: "ghost",
                  color: "secondary",
                  cubed: "",
                  size: "sm",
                  class: "ui-toast-dismiss shrink-0",
                  "prefix-icon": "chevron-down",
                  "aria-expanded": "false",
                  "aria-label": r.t("ui.toast.expand", { count: l.children.length }),
                  onClick: E((c) => r.toggleToastExpanded(l.id), ["stop"])
                }, null, 8, ["aria-label", "onClick"])) : f("", !0)
              ], 42, Xd)
            ], 2))
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const ch = /* @__PURE__ */ I(jd, [["render", ic]]), hh = {
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
      expand: "Show {count} notifications",
      collapse: "Collapse notifications",
      groupCount: "{count} notifications",
      groupHeading: "{count} notifications"
    },
    dialog: {
      close: "Close",
      back: "Back",
      unsavedTitle: "Unsaved changes",
      unsavedDescription: "If you close now, what you entered will be lost.",
      unsavedConfirm: "Discard changes"
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
      tomorrow: "Tomorrow",
      prevMonth: "Previous month",
      nextMonth: "Next month"
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
    },
    breadcrumb: {
      ariaLabel: "Breadcrumb",
      more: "Show hidden pages"
    },
    pagination: {
      ariaLabel: "Pagination",
      prev: "Previous page",
      next: "Next page",
      page: "Page {page}"
    },
    scrollArea: {
      ariaLabel: "Scrollable area"
    },
    command: {
      placeholder: "Type a command or search…",
      empty: "No results found.",
      loading: "Searching…",
      label: "Command palette"
    },
    chart: {
      empty: "No data to show",
      legend: "Series",
      total: "Total",
      category: "Category",
      keyboardHint: "Use the arrow keys to read the values."
    },
    resizable: {
      handle: "Resize panels"
    },
    slider: {
      minThumb: "Minimum",
      maxThumb: "Maximum"
    }
  }
}, fh = {
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
      expand: "{count} bildirimi göster",
      collapse: "Bildirimleri daralt",
      /** Daraltılmış grup özeti */
      groupCount: "{count} bildirim",
      /** Açılmış grup başlığı */
      groupHeading: "{count} bildirim"
    },
    dialog: {
      close: "Kapat",
      back: "Geri",
      unsavedTitle: "Değişiklikler kaydedilmedi",
      unsavedDescription: "Şimdi kapatırsanız girdiğiniz bilgiler kaybolur.",
      unsavedConfirm: "Değişiklikleri at"
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
      tomorrow: "Yarın",
      prevMonth: "Önceki ay",
      nextMonth: "Sonraki ay"
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
    },
    breadcrumb: {
      ariaLabel: "Sayfa yolu",
      more: "Gizlenen sayfaları göster"
    },
    pagination: {
      ariaLabel: "Sayfalama",
      prev: "Önceki sayfa",
      next: "Sonraki sayfa",
      page: "Sayfa {page}"
    },
    scrollArea: {
      ariaLabel: "Kaydırılabilir alan"
    },
    command: {
      placeholder: "Komut yazın veya arayın…",
      empty: "Sonuç bulunamadı.",
      loading: "Aranıyor…",
      label: "Komut paleti"
    },
    chart: {
      empty: "Gösterilecek veri yok",
      legend: "Seriler",
      total: "Toplam",
      category: "Kategori",
      keyboardHint: "Değerleri okumak için ok tuşlarını kullanın."
    },
    resizable: {
      handle: "Panelleri yeniden boyutlandır"
    },
    slider: {
      minThumb: "En az",
      maxThumb: "En çok"
    }
  }
}, rc = "fewui-local-fonts", nc = "fewui-local-fonts-catalog-preview";
let Si = !1;
const sc = Object.freeze([
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
function ac(e, t = "sans-serif") {
  const i = String(e || "").trim();
  if (!i) return "";
  const s = /\s/.test(i) && !/^["'].*["']$/.test(i) ? `"${i.replace(/"/g, "")}"` : i, r = String(t || "sans-serif").trim() || "sans-serif";
  return `${s}, ${r}`;
}
function mh() {
  return sc.map((e) => ({
    value: e.value,
    label: e.label,
    fontFamily: ac(e.value, e.fallback)
  }));
}
function ph(e = {}) {
  const t = String(e.bodyFontFamily || e.fontFamily || "").trim(), i = String(e.headingFontFamily || t).trim();
  return { body: t, heading: i };
}
function bh(e) {
  return null;
}
function gh(e = {}) {
  return "";
}
function yh(e = {}, t = {}) {
  var i;
  return typeof document > "u" ? null : ((i = document.getElementById(t.id || rc)) == null ? void 0 : i.getAttribute("href")) || "local";
}
function vh(e = {}) {
  var t;
  return typeof document > "u" ? null : Si && !e.force ? ((t = document.getElementById(e.id || nc)) == null ? void 0 : t.getAttribute("href")) || "local" : (Si = !0, "local");
}
function kh(e, t = {}) {
  if (!e || typeof e != "object" || !e.primary) return e;
  const i = Qi(String(e.primary)), n = { ...e };
  return (t.force || !n.accent) && (n.accent = i.accent), (t.force || !n.brandAccent) && (n.brandAccent = i.brandAccent), n;
}
const Sh = "few", oc = "#1B5CFF", xh = "#ffffff", xi = {
  50: "#F0F5FF",
  100: "#DBE7FF",
  200: "#BDD4FF",
  300: "#90B6FF",
  400: "#5A8FFF",
  500: "#2F6BFF",
  600: oc,
  700: "#1447DB",
  800: "#163AB0",
  900: "#18358A",
  950: "#102054"
};
function wh() {
  return {
    light: xi[600],
    dark: xi[600]
  };
}
const or = "fewui-theme-custom-css";
function lc(e, t = or) {
  if (typeof document > "u") return;
  const i = String(e || "").trim();
  let n = document.getElementById(t);
  if (!i) {
    n == null || n.remove();
    return;
  }
  n || (n = document.createElement("style"), n.id = t, document.head.appendChild(n)), n.textContent = i;
}
function _h(e = or) {
  lc("", e);
}
export {
  Uc as $,
  yc as A,
  li as B,
  ed as C,
  or as D,
  _c as E,
  xi as F,
  sc as G,
  Nc as H,
  Oc as I,
  ss as J,
  Vc as K,
  Rc as L,
  Ju as M,
  cc as N,
  td as O,
  Pc as P,
  Hc as Q,
  $c as R,
  _i as S,
  jc as T,
  Gc as U,
  Tc as V,
  Kc as W,
  rr as X,
  id as Y,
  Wc as Z,
  qc as _,
  vc as a,
  eh as a$,
  hu as a0,
  ch as a1,
  zi as a2,
  tt as a3,
  xr as a4,
  Ie as a5,
  ko as a6,
  _r as a7,
  Bt as a8,
  Qr as a9,
  K as aA,
  he as aB,
  Qi as aC,
  bt as aD,
  hh as aE,
  Xc as aF,
  di as aG,
  Z as aH,
  Jc as aI,
  Ca as aJ,
  Mt as aK,
  ae as aL,
  Le as aM,
  ac as aN,
  Lc as aO,
  wh as aP,
  th as aQ,
  Ad as aR,
  ih as aS,
  mh as aT,
  Zc as aU,
  se as aV,
  H as aW,
  Ce as aX,
  Xi as aY,
  tn as aZ,
  Ri as a_,
  Dd as aa,
  fi as ab,
  I as ac,
  vh as ad,
  yh as ae,
  lc as af,
  hc as ag,
  Rd as ah,
  gh as ai,
  bh as aj,
  Yc as ak,
  ah as al,
  sh as am,
  nh as an,
  at as ao,
  _h as ap,
  dh as aq,
  rh as ar,
  D as as,
  Qc as at,
  pe as au,
  pt as av,
  De as aw,
  Dc as ax,
  Bi as ay,
  bc as az,
  kc as b,
  Fa as b0,
  st as b1,
  ui as b2,
  et as b3,
  to as b4,
  ct as b5,
  Gn as b6,
  Ee as b7,
  dt as b8,
  hd as b9,
  $d as bA,
  mc as bB,
  Cc as bC,
  Bd as bD,
  Da as bE,
  oh as bF,
  ke as bG,
  sd as bH,
  Vd as bI,
  fh as bJ,
  ks as bK,
  P as bL,
  lt as bM,
  it as bN,
  Xt as bO,
  pc as bP,
  Pt as bQ,
  kh as bR,
  lh as bS,
  md as ba,
  rt as bb,
  fc as bc,
  Ai as bd,
  uh as be,
  jn as bf,
  Ld as bg,
  Ae as bh,
  Di as bi,
  Oa as bj,
  gc as bk,
  Ft as bl,
  $i as bm,
  Md as bn,
  Od as bo,
  ht as bp,
  ee as bq,
  ue as br,
  ph as bs,
  Oe as bt,
  cd as bu,
  q as bv,
  mt as bw,
  ot as bx,
  fd as by,
  ji as bz,
  Yu as c,
  le as d,
  wn as e,
  xc as f,
  Zu as g,
  Qu as h,
  J as i,
  wc as j,
  Fc as k,
  ci as l,
  rd as m,
  Ac as n,
  Ic as o,
  nt as p,
  Sc as q,
  Sh as r,
  oc as s,
  xh as t,
  zc as u,
  Ec as v,
  Mc as w,
  Bc as x,
  Ti as y,
  gs as z
};
//# sourceMappingURL=custom-css-CfKDBMTR.js.map
